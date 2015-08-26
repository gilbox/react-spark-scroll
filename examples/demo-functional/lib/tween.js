/*
* The following concepts are essential to this code:
*
* A VALUE FACTORY is a function which 
*   - accepts any number of arguments representing the desired value and 
*   - returns a WRAPPED VALUE object 
*
* A WRAPPED VALUE is an object with a `tween` method and a `resolveValue` method.
*   - `resolveValue` returns the formatted string representation of the value.
*   - `tween` returns the formatted string representation of the result of tweening
*     two different WRAPPED VALUEs created with the same VALUE FACTORY.
*
*/

export const isNumber = x => typeof x === 'number';
export const isWrapped = x => !!x.tween;
export const isNotWrapped = x => !x.tween;
const identity = x => x;

function mapObject(fn) {
  const result = {};
  Object.keys(this).forEach(key => result[key] = fn(this[key], key));
  return result;
}

export function tweenValues(progress, a, b) {
  // todo : more error handlers?
  if (isWrapped(a)) {
    if (isNotWrapped(b)) throw(Error('tweenValues mismatch: tried to tween wrapped and unwrapped values'));
    return a.tween(progress, a, b);
  } else if (a instanceof Array) {
    if (!b instanceof Array) throw(Error('tweenValues expected two arrays but only found one'));
    return a.map((value,index) => tweenValues(progress, value, b[index]));
  } else if (isNumber(a)) {
    return a + progress * (b-a);  
  } else { // object
    return a::mapObject((v,k) => tweenValues(progress, v, b[k]))
  }
}

export const resolveValue = x => 
  isWrapped(x) ? x.resolveValue() :
  isNumber(x) ? x :
    x::mapObject(resolveValue); // is object

/**
 * tween
 * `position` is a number representing the current timeline position
 *
 * `keyframes` is an object where 
 *   - the properties are numbers
 *     representing keyframe positions on the timeline. Note that your
 *     keyframes must *already* be sorted, `tween` will **not** sort them for you.
 *   - the values are either numbers, objects, or wrapped values (wrapped values may also be nested)
 *       * when the values are numbers `tween` returns a (tweened) Number
 *       * when the values are objects `tween` returns an object.
 *       * when the values are wrapped values `tween` returns the resolved result of the wrapped 
 *         value (usually a string) 
 *  Note that all Keyframe values should be exactly the same type or shape.
 *
 * `ease` is an (optional) easing function which should accept a number 0..1
 * and return a number usually 0..1 but for certain types of easing
 * you might want to go outside of the 0..1 range
 */
export function tween(position, keyframes, ease=identity) {
  const positions = Object.keys(keyframes);
  const position0 = positions[0];
  const positionN = positions[positions.length-1];
  
  if (position <= position0) return resolveValue(keyframes[position0]);
  if (position >= positionN) return resolveValue(keyframes[positionN]);
  
  let index = 0;
  while (position > positions[++index]);
  
  const positionA = positions[index-1];
  const positionB = positions[index];
  
  // kinda weird
  if (positionA instanceof Function || positionB instanceof Function) {
    throw Error('Keyframes are not allowed to contain function as properties', keyframes);
  }
  
  const range = positionB - positionA;
  const delta = position - positionA;
  const progress = delta / range;
  
  return tweenValues(
    ease(progress), 
    keyframes[positionA], 
    keyframes[positionB])
}

/** 
 * createTweenValueFactory 
 * The first argument, `formatter` should be a 1-arity function 
 * which accepts an array (`value`) and returns the formatted result.
 * For example, `formatter` might transform the array `[100,0,255]` to "rgb(100,0,255)"
 *
 * The second (optional) argument, `defaultWrapper` will 
 * be used to map the elements of the `value` array which is useful
 * for wrapping the values in a default unit (like px, %, deg, etc)
 *
 * return a value factory.
 */
export function createTweenValueFactory(formatter, defaultWrapper) {
  const tween = (progress, a, b) =>
    formatter(tweenValues(progress, a.value, b.value));
  
  return (...value) => {
    if (defaultWrapper) 
      value = value.map(v => isWrapped(v) ? v : defaultWrapper(v));
      
    return {
      value,
      tween,
      resolveValue() {
        return formatter(value.map(resolveValue))
      }
    }
  }
}

/**
 * combine is a value factory that combines wrapped values (or numbers)
 * by seperating them with a space
 *
 * for example:
 *
 *        combine(scale(0.9), translate3d(0,-160,0))
 *
 * note that `scale(0.9)` and `translate3d(0,-160,0)`
 * both return wrapped values. So in the non-tweened case,
 * combine produces:
 * 
 *        "scale(0.9) translate3d(0,-160,0)"
 */
export function combine(...wrappedValues) {
  return {
    wrappedValues,
    tween: combineTween,
    resolveValue() {
      return wrappedValues.map(resolveValue).join(' ');
    }
  }
}

// this function is only for `combine` above
// it's placed outside of `combine` as an optimization
function combineTween(progress, 
  {wrappedValues: wrappedValuesA}, 
  {wrappedValues: wrappedValuesB}
) {
  return wrappedValuesA
    .map((wrappedValueA, index) => 
      tweenValues(progress, wrappedValueA, wrappedValuesB[index]))
    .join(' ');
}
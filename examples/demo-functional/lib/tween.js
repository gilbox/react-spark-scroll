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

export function combine(...wrappedValues) {
  return {
    wrappedValues,
    resolveValue() {
      return wrappedValues.map(resolveValue).join(' ');
    },
    tween(progress, 
      {wrappedValues: wrappedValuesA}, 
      {wrappedValues: wrappedValuesB}
    ) {
      return wrappedValuesA
        .map((wrappedValueA, index) => 
          tweenValues(progress, wrappedValueA, wrappedValuesB[index]))
        .join(' ');
    }
  }
}
    
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

export function createTweenValueFactory(formatter, defaultWrapper) {
  return (...value) => {
    if (defaultWrapper) 
      value = value.map(v => isWrapped(v) ? v : defaultWrapper(v));
      
    return {
      value,
      tween(progress, a, b) { 
        return formatter(tweenValues(progress, a.value, b.value)) 
      },
      resolveValue() {
        return formatter(value.map(resolveValue))
      }
    }
  }
}
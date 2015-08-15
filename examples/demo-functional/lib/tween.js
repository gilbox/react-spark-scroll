export const isNumber = x => typeof x === 'number';
export const isWrapped = x => !!x.formatter;
const identity = x => x;

function mapObject(fn) {
  const result = {};
  Object.keys(this).forEach(key => result[key] = fn(this[key], key));
  return result;
}

export function tweenValues(progress, a, b) {
  // todo : more error handlers?
  if (isWrapped(a)) {
    if (!isWrapped(b)) throw(Error('tweenValues mismatch: tried to tween wrapped and unwrapped values'));
    return a.factory(...tweenValues(progress, a.value, b.value));
  } else if (a instanceof Array) {
    if (!b instanceof Array) throw(Error('tweenValues expected two arrays but only found one'));
    return a.map((value,index) => value + progress*(b[index] - value));
  } else if (isNumber(a)) {
    return a + progress * (b-a);  
  } else { // object
    return a::mapObject((v,k) => tweenValues(progress, v, b[k]))
  }
}

export const resolveValue = x => 
  isWrapped(x) ? x.formatter(x.value) : 
  isNumber(x) ? x :
    x::mapObject(resolveValue); // is object

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
  const range = positionB - positionA;
  const delta = position - positionA;
  const progress = delta / range;
  
  return resolveValue(tweenValues(
    ease(progress), keyframes[positionA], keyframes[positionB]))
}

export function createTweenValueFactory(formatter) {
  const factory = (...value) => ({value,formatter,factory});
  return factory;
}
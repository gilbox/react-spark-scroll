import {createTweenValueFactory} from './tween';

export const rgb = createTweenValueFactory(value => `rgb(${value.map(Math.round).join(',')})`);
export const rgba = createTweenValueFactory(value => `rgba(${value.map(Math.round).join(',')})`);
export const scale = createTweenValueFactory(value => `scale(${value})`);
export const rotate = createTweenValueFactory(value => `rotate(${value}deg)`);
export const px = createTweenValueFactory(value => `${value}px`);
export const percent = createTweenValueFactory(value => `${value}%`);
export const translate3d = createTweenValueFactory(value => `translate3d(${value.join('px,')}px)`);
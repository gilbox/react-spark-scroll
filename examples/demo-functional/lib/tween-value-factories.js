import {createTweenValueFactory, isWrapped} from './tween';

export const rgb = createTweenValueFactory(value => `rgb(${value.map(Math.round).join(',')})`);
export const rgba = createTweenValueFactory(value => `rgba(${value.map(Math.round).join(',')})`);
export const scale = createTweenValueFactory(value => `scale(${value})`);
export const deg = createTweenValueFactory(value => `${value}deg`);
export const grad = createTweenValueFactory(value => `${value}grad`);
export const rad = createTweenValueFactory(value => `${value}rad`);
export const turn = createTweenValueFactory(value => `${value}turn`);
export const rotate = createTweenValueFactory(value => `rotate(${value})`, deg);
export const px = createTweenValueFactory(value => `${value}px`);
export const em = createTweenValueFactory(value => `${value}em`);
export const percent = createTweenValueFactory(value => `${value}%`);
export const translate3d = createTweenValueFactory(value => `translate3d(${value.join(',')})`, px);
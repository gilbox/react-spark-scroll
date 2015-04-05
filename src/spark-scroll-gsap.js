// we're just loading in the whole shebang here (aka TweenMax)
// because it's the simplest thing to do, but all that's really needed
// is: TweenLite.js, CSSPlugin, TimelineLite
//
// Copy this file to create your own spark-scroll-gsap.js if you want to
// load in a subset of TweenMax
require('gsap');

const assign = require('object-assign');
const _factory = require('./');
const GSAPAnimator = require('./gsap-animator');

function factory(options) {
  return _factory(assign({
    animator: {
      instance: () => new GSAPAnimator()
    }
  }, options));
}

module.exports = factory;
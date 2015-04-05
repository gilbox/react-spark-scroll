webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(5);
	var PureRenderMixin = __webpack_require__(3).addons.PureRenderMixin;
	
	var _require = __webpack_require__(1);
	
	var SparkScroll = _require.SparkScroll;
	var SparkProxy = _require.SparkProxy;
	
	var cx = __webpack_require__(4);
	
	var Hero = React.createClass({
	  displayName: "Hero",
	
	  mixins: [PureRenderMixin],
	
	  getInitialState: function getInitialState() {
	    return {
	      strokeDashOffset: 0
	    };
	  },
	
	  componentDidMount: function componentDidMount() {
	    // initialize svg
	    var node = React.findDOMNode(this.refs.sparkPath);
	    var length = ~ ~node.getTotalLength();
	    this.offsetTarget = length;
	    node.style.strokeDasharray = length + " " + length;
	  },
	
	  render: function render() {
	    var _this = this;
	
	    return React.createElement(
	      SparkProxy.div,
	      { proxyId: "hero", className: "hero" },
	      React.createElement(
	        "a",
	        { href: "https://github.com/gilbox/react-spark-scroll" },
	        React.createElement(
	          SparkScroll.h1,
	          {
	            proxy: "hero",
	            timeline: {
	              topTop: { opacity: 1, transform: "translate3d(0px,150px,0px)" },
	              "topTop+200": { opacity: 0, transform: "translate3d(0px,100px,0px)" }
	            } },
	          React.createElement(
	            SparkScroll.span,
	            {
	              proxy: "hero",
	              callback: function (ratio) {
	                return _this.setState({ strokeDashoffset: ~ ~(_this.offsetTarget * ratio) });
	              },
	              timeline: { topTop: 0, "topTop+150": 0 } },
	            React.createElement(
	              "svg",
	              { width: "296px", height: "228px", viewBox: "0 0 296 228", version: "1.1" },
	              React.createElement(
	                "g",
	                { id: "Page-1", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
	                React.createElement("path", {
	                  ref: "sparkPath",
	                  style: { strokeDashoffset: this.state.strokeDashoffset },
	                  d: "M43.7774442,71.4898495 C68.1223861,13.9815032 2.19454397,48.0407223 21.6782286,62.6489207 C35.6643945,73.1352682 58.9096882,70.7747789 65.8766598,90.2775999 C81.3266094,133.527037 58.7305466,191.386016 8.96667524,191.386016 C-21.7867278,124.419226 58.5165505,95.0604409 105.657733,71.4898495 C111.587019,68.5252065 106.843786,84.8551006 105.657733,91.3772797 C99.6123965,124.620967 91.5214411,157.47733 85.7703029,190.833069 C84.8685764,196.062948 81.6274642,214.829299 80.7937857,222.32616 C80.6715598,223.425278 80.7937857,226.749731 80.7937857,225.643838 C80.7937857,178.19023 80.0535912,132.979764 92.3994463,86.6741293 C93.8113405,81.3785334 108.30594,39.7685738 124.99843,54.0751457 C156.752595,81.2905735 92.5724441,93.4702936 121.127805,96.0680044 C128.282422,96.7188674 135.65546,97.5726529 142.680287,96.0680044 C148.736462,94.7708318 187.108665,71.4402165 175.273058,59.6046093 C159.768414,44.0999652 147.084798,89.2989658 152.06795,90.5447538 C167.304679,94.3539362 163.498851,72.3099498 171.408646,72.3099498 C175.432165,72.3099498 170.909757,82.6418308 174.726325,83.9156104 C188.108938,88.3820577 200.672172,72.3568753 206.772362,66.2337527 C207.900248,65.1016258 206.423589,91.2727357 216.160024,86.1211829 C225.148096,81.3655893 232.107661,66.8252089 236.053667,57.9457702 C238.752882,51.8719041 253.48624,1.58873203 246.553435,1.58873203 C241.137697,1.58873203 228.944808,94.9098646 223.342114,100.491575 C218.092273,105.721754 247.690967,38.5929831 260.364668,41.3698053 C278.111625,45.2581835 231.741761,65.8490563 230.530416,69.4830892 C229.69667,71.984328 235.745427,70.3606023 238.265453,71.1357154 C260.054171,77.8375207 284.345377,96.4449716 294.622491,116.999199", id: "Path-13", stroke: "#382513", strokeWidth: "3" })
	              )
	            )
	          )
	        )
	      ),
	      React.createElement(
	        SparkScroll.div,
	        {
	          className: "down-arrow",
	          proxy: "hero",
	          timeline: {
	            topTop: { opacity: 1, transform: "translate3d(0px,0px,0px)" },
	            "topTop+200": { opacity: 0, transform: "translate3d(0px,-150px,0px)" }
	          } },
	        "v"
	      )
	    );
	  }
	});
	
	var App = React.createClass({
	  displayName: "App",
	
	  mixins: [PureRenderMixin],
	
	  getInitialState: function getInitialState() {
	    return {
	      actionType: null,
	      text: "slide",
	      unpinHide: true,
	      slideHide: true,
	      pinPin: false,
	      pinUnpin: false
	    };
	  },
	
	  render: function render() {
	    var _this = this;
	
	    var styles = {
	      minHeight: "5000px"
	    };
	
	    return React.createElement(
	      "div",
	      { style: styles },
	      React.createElement(
	        "a",
	        { href: "https://github.com/gilbox/spark-scroll" },
	        React.createElement("img", {
	          style: { position: "absolute", top: 0, right: 0, border: 0 },
	          src: "https://camo.githubusercontent.com/e7bbb0521b397edbd5fe43e7f760759336b5e05f/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f677265656e5f3030373230302e706e67",
	          alt: "Fork me on GitHub",
	          dataCanonicalSrc: "https://s3.amazonaws.com/github/ribbons/forkme_right_green_007200.png" })
	      ),
	      React.createElement(Hero, null),
	      React.createElement(
	        SparkScroll.h2,
	        {
	          timeline: {
	            topBottom: { opacity: 0 },
	            centerCenter: { opacity: 1 }
	          } },
	        "fade"
	      ),
	      React.createElement(
	        SparkScroll.h2,
	        {
	          timeline: {
	            topBottom: { marginLeft: "-500px", opacity: 0 },
	            centerCenter: { marginLeft: "0px", opacity: 1, ease: "bouncePast" }
	          } },
	        "move"
	      ),
	      React.createElement(SparkProxy, { proxyId: "rotate-proxy" }),
	      React.createElement(
	        SparkScroll.h2,
	        {
	          proxy: "rotate-proxy",
	          timeline: {
	            topBottom: { rotate: "0deg" },
	            topCenter: { rotate: "360deg" }
	          } },
	        "spin"
	      ),
	      React.createElement(SparkProxy, { proxyId: "scale-proxy" }),
	      React.createElement(
	        SparkScroll.h2,
	        {
	          proxy: "scale-proxy",
	          timeline: {
	            "topCenter-201": { scale: 0.01, opacity: 0 },
	            "topCenter-200": { scale: 0.01, opacity: 1 },
	            "topCenter+70": { scale: 1, ease: "bouncePast" }
	          } },
	        "scale"
	      ),
	      React.createElement(
	        SparkProxy.div,
	        { className: "pin-cont", proxyId: "pin-cont" },
	        React.createElement(
	          SparkScroll.section,
	          {
	            className: cx("pin", {
	              "pin-pin": this.state.pinPin,
	              "pin-unpin": this.state.pinUnpin }),
	            proxy: "pin-cont",
	            timeline: {
	              topTop: {
	                onDown: function () {
	                  return _this.setState({ pinPin: true });
	                },
	                onUp: function () {
	                  return _this.setState({ pinPin: false });
	                }
	              },
	              bottomBottom: {
	                onDown: function () {
	                  return _this.setState({ pinUnpin: true });
	                },
	                onUp: function () {
	                  return _this.setState({ pinUnpin: false });
	                }
	              }
	            } },
	          React.createElement(
	            SparkScroll.h3,
	            {
	              className: "pin-txt",
	              proxy: "pin-cont",
	              timeline: {
	                topTop: { top: "0%", marginTop: "0px" },
	                "topTop+50  ": { top: "50%", marginTop: "-60px" }
	              } },
	            "pin"
	          ),
	          React.createElement(
	            SparkScroll.div,
	            {
	              className: "reveal",
	              proxy: "pin-cont",
	              timeline: {
	                "topTop+100": { width: "0%", backgroundColor: "#5c832f" },
	                "topTop+250": { width: ["100%", "easeOutQuart"], backgroundColor: "#382513" }
	              } },
	            React.createElement(
	              "h3",
	              { className: "reveal-txt" },
	              "reveal"
	            )
	          ),
	          React.createElement(
	            SparkScroll.div,
	            {
	              className: cx("slide", { hide: this.state.slideHide }),
	              proxy: "pin-cont",
	              timeline: {
	                "topTop+250": {
	                  bottom: "100%",
	                  backgroundColor: "#5c832f",
	                  onDown: function () {
	                    return _this.setState({ slideHide: false });
	                  },
	                  onUp: function () {
	                    return _this.setState({ slideHide: true });
	                  }
	                },
	                "topTop+400": { bottom: ["0%", "bounce"], backgroundColor: "#284907" },
	                "topTop+450": { backgroundColor: "#00a" },
	                "topTop+500": { backgroundColor: "#a00" },
	                "topTop+550": { backgroundColor: "#5c832f" }
	              } },
	            React.createElement(
	              SparkScroll.h3,
	              {
	                className: "slide-txt",
	                proxy: "pin-cont",
	                timeline: {
	                  "topTop+400": {
	                    onDown: function () {
	                      return _this.setState({ text: "color" });
	                    },
	                    onUp: function () {
	                      return _this.setState({ text: "slide" });
	                    } }
	                } },
	              this.state.text
	            ),
	            React.createElement(
	              SparkScroll.h3,
	              {
	                className: cx("unpin-txt", { hide: this.state.unpinHide }),
	                proxy: "pin-cont",
	                timeline: {
	                  "topTop+600": {
	                    top: "100%",
	                    onDown: function () {
	                      return _this.setState({ unpinHide: false });
	                    },
	                    onUp: function () {
	                      return _this.setState({ unpinHide: true });
	                    } },
	                  bottomBottom: { top: "50%" }
	                } },
	              "unpin"
	            )
	          )
	        )
	      ),
	      React.createElement("div", { className: "spacer50" }),
	      React.createElement(
	        "a",
	        { href: "https://www.flickr.com/photos/rafagarcia_/15262287738/in/pool-83823859@N00/" },
	        React.createElement(
	          SparkProxy.div,
	          { proxyId: "parallax", className: "parallax-cont" },
	          React.createElement("div", { className: "parallax-shadow" }),
	          React.createElement(SparkScroll.div, {
	            className: "parallax-img",
	            proxy: "parallax",
	            timeline: {
	              topBottom: { transform: "translate3d(0px,0px,0px)" },
	              bottomTop: { transform: "translate3d(0px,-80px,0px)" }
	            } }),
	          React.createElement(
	            SparkScroll.h3,
	            {
	              className: "parallax-txt fade2",
	              proxy: "parallax",
	              timeline: {
	                topBottom: { transform: "scale(0.8) translate3d(0px,120px,0px)" },
	                bottomTop: { transform: "scale(0.8) translate3d(0px,-120px,0px)" }
	              } },
	            "parallax"
	          ),
	          React.createElement(
	            SparkScroll.h3,
	            {
	              className: "parallax-txt fade1",
	              proxy: "parallax",
	              timeline: {
	                topBottom: { transform: "scale(0.9) translate3d(0px,160px,0px)" },
	                bottomTop: { transform: "scale(0.9) translate3d(0px,-160px,0px)" }
	              } },
	            "parallax"
	          ),
	          React.createElement(
	            SparkScroll.h3,
	            {
	              className: "parallax-txt",
	              proxy: "parallax",
	              timeline: {
	                topBottom: { transform: "translate3d(0px,200px,0px)" },
	                bottomTop: { transform: "translate3d(0px,-200px,0px)" }
	              } },
	            "parallax"
	          )
	        )
	      ),
	      React.createElement("div", { className: "spacer50" }),
	      React.createElement(
	        "a",
	        { href: "https://github.com/gilbox/react-spark-scroll" },
	        React.createElement("img", { className: "center", src: "GitHub-Mark-64px.png", alt: "" })
	      ),
	      React.createElement("div", { className: "spacer10" }),
	      React.createElement(
	        "p",
	        { className: "center" },
	        "This demo was inspired by ",
	        React.createElement(
	          "a",
	          { href: "http://janpaepke.github.io/ScrollMagic/" },
	          "ScrollMagic"
	        )
	      ),
	      React.createElement("div", { className: "spacer10" })
	    );
	  }
	});
	
	React.render(React.createElement(App, null), document.getElementById("example"));
	/* fade */ /* move */ /* spin */ /* scale */ /* pin, reveal, slide, color, unpin */ /* with array notation we can apply bounce easing to just one property in a keyframe */ /* when we hit the appropriate scroll position, use onUp/onDown to change the
	                                                                                                                                                                                 text to 'slide' or 'color' depending on the scroll direction */ /* parallax */

/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = __webpack_require__(6)({
	  invalidateAutomatically: true
	
	  // we could add additional options in here...
	
	  // setup: {...}
	  // formulas: {...}
	  // actionProps: {...}
	});

/***/ },

/***/ 6:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var Rekapi = __webpack_require__(45);
	var assign = __webpack_require__(23);
	var _factory = __webpack_require__(11);
	
	function factory(options) {
	  return _factory(assign({
	    animator: {
	      instance: function () {
	        return new Rekapi(document.body);
	      }
	    }
	  }, options));
	}
	
	module.exports = factory;

/***/ },

/***/ 45:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! rekapi - v1.4.4 - 2015-01-01 - http://rekapi.com */
	/*!
	 * Rekapi - Rewritten Kapi.
	 * http://rekapi.com/
	 *
	 * By Jeremy Kahn (jeremyckahn@gmail.com)
	 *
	 * Make fun keyframe animations with JavaScript.
	 *
	 * Dependencies:
	 *   * Underscore.js (https://github.com/documentcloud/underscore) or Lo-Dash (http://lodash.com/)
	 *   * Shifty.js (https://github.com/jeremyckahn/shifty).
	 *
	 * MIT License.  This code free to use, modify, distribute and enjoy.
	 */
	
	;(function (global) {
	
	// REKAPI-GLOBALS
	// These are global in development, but get wrapped in a closure at build-time.
	
	// A hack for UglifyJS defines.  Gets removes in the build process.
	if (typeof REKAPI_DEBUG === 'undefined') {
	  REKAPI_DEBUG = true;
	}
	
	var rekapiModules = [];
	
	/*!
	 * Fire an event bound to a Rekapi.
	 * @param {Rekapi} rekapi
	 * @param {string} eventName
	 * @param {Underscore} _ A reference to the scoped Underscore/Lo-Dash
	 * dependency
	 * @param {Object=} opt_data Optional event-specific data
	 */
	function fireEvent (rekapi, eventName, _, opt_data) {
	  _.each(rekapi._events[eventName], function (handler) {
	    handler(rekapi, opt_data);
	  });
	}
	
	/*!
	 * @param {Rekapi} rekapi
	 * @param {Underscore} _
	 */
	function recalculateAnimationLength (rekapi, _) {
	  var actorLengths = [];
	
	  _.each(rekapi._actors, function (actor) {
	    actorLengths.push(actor.getEnd());
	  });
	
	  rekapi._animationLength = Math.max.apply(Math, actorLengths);
	}
	
	/*!
	 * Does nothing.  Absolutely nothing at all.
	 */
	function noop () {
	  // NOOP!
	}
	
	var rekapiCore = function (root, _, Tweenable) {
	
	  'use strict';
	
	  // CONSTANTS
	  //
	  var UPDATE_TIME = 1000 / 60;
	
	  /*!
	   * Determines which iteration of the loop the animation is currently in.
	   * @param {Rekapi} rekapi
	   * @param {number} timeSinceStart
	   */
	  function determineCurrentLoopIteration (rekapi, timeSinceStart) {
	    var animationLength = rekapi._animationLength;
	    if (animationLength === 0) {
	      return timeSinceStart;
	    }
	
	    var currentIteration = Math.floor(timeSinceStart / animationLength);
	    return currentIteration;
	  }
	
	  /*!
	   * Calculate how many milliseconds since the animation began.
	   * @param {Rekapi} rekapi
	   * @return {number}
	   */
	  function calculateTimeSinceStart (rekapi) {
	    return now() - rekapi._loopTimestamp;
	  }
	
	  /*!
	   * Determines if the animation is complete or not.
	   * @param {Rekapi} rekapi
	   * @param {number} currentLoopIteration
	   * @return {boolean}
	   */
	  function isAnimationComplete (rekapi, currentLoopIteration) {
	    return currentLoopIteration >= rekapi._timesToIterate
	       && rekapi._timesToIterate !== -1;
	  }
	
	  /*!
	   * Stops the animation if it is complete.
	   * @param {Rekapi} rekapi
	   * @param {number} currentLoopIteration
	   */
	  function updatePlayState (rekapi, currentLoopIteration) {
	    if (isAnimationComplete(rekapi, currentLoopIteration)) {
	      rekapi.stop();
	      fireEvent(rekapi, 'animationComplete', _);
	    }
	  }
	
	  /*!
	   * Calculate how far in the animation loop `rekapi` is, in milliseconds,
	   * based on the current time.  Also overflows into a new loop if necessary.
	   * @param {Rekapi} rekapi
	   * @param {number} forMillisecond
	   * @param {number} currentLoopIteration
	   * @return {number}
	   */
	  function calculateLoopPosition (rekapi, forMillisecond, currentLoopIteration) {
	    var currentLoopPosition;
	    var animationLength = rekapi._animationLength;
	
	    if (animationLength === 0) {
	      return 0;
	    }
	
	    if (isAnimationComplete(rekapi, currentLoopIteration)) {
	      // Rewind to the end if the playhead has gone past it
	      currentLoopPosition = animationLength;
	    } else {
	      currentLoopPosition = forMillisecond % animationLength;
	    }
	
	    return currentLoopPosition;
	  }
	
	  /*!
	   * Calculate the timeline position and state for a given millisecond.
	   * Updates the `rekapi` state internally and accounts for how many loop
	   * iterations the animation runs for.
	   * @param {Rekapi} rekapi
	   * @param {number} forMillisecond
	   */
	  function updateToMillisecond (rekapi, forMillisecond) {
	    var loopPosition = 0;
	    var currentIteration = 0;
	
	    currentIteration = determineCurrentLoopIteration(rekapi, forMillisecond);
	    loopPosition = calculateLoopPosition(
	      rekapi, forMillisecond, currentIteration);
	    rekapi._loopPosition = loopPosition;
	
	    var keyframeResetList = [];
	
	    if (currentIteration > rekapi._latestIteration) {
	      fireEvent(rekapi, 'animationLooped', _);
	
	      // Reset function keyframes
	      var lookupObject = { name: 'function' };
	      _.each(rekapi._actors, function (actor) {
	        var fnKeyframes = _.where(actor._keyframeProperties, lookupObject);
	
	        var lastFnKeyframe = _.last(fnKeyframes);
	
	        if (lastFnKeyframe && !lastFnKeyframe.hasFired) {
	          lastFnKeyframe.invoke();
	        }
	
	        keyframeResetList = keyframeResetList.concat(fnKeyframes);
	      });
	    }
	
	    rekapi._latestIteration = currentIteration;
	    rekapi.update(loopPosition);
	    updatePlayState(rekapi, currentIteration);
	
	    _.each(keyframeResetList, function (fnKeyframe) {
	      fnKeyframe.hasFired = false;
	    });
	  }
	
	  /*!
	   * Calculate how far into the animation loop `rekapi` is, in milliseconds,
	   * and update based on that time.
	   * @param {Rekapi} rekapi
	   */
	  function updateToCurrentMillisecond (rekapi) {
	    updateToMillisecond(rekapi, calculateTimeSinceStart(rekapi));
	  }
	
	  /*!
	   * This is the heartbeat of an animation.  This updates `rekapi`'s state and
	   * then calls itself continuously.
	   * @param {Rekapi} rekapi
	   */
	  function tick (rekapi) {
	    // Need to check for .call presence to get around an IE limitation.  See
	    // annotation for cancelLoop for more info.
	    if (rekapi._scheduleUpdate.call) {
	      rekapi._loopId = rekapi._scheduleUpdate.call(global,
	        rekapi._updateFn, UPDATE_TIME);
	    } else {
	      rekapi._loopId = setTimeout(rekapi._updateFn, UPDATE_TIME);
	    }
	  }
	
	  /*!
	   * @return {Function}
	   */
	  function getUpdateMethod () {
	    // requestAnimationFrame() shim by Paul Irish (modified for Rekapi)
	    // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
	    return global.requestAnimationFrame  ||
	    global.webkitRequestAnimationFrame ||
	    global.oRequestAnimationFrame      ||
	    global.msRequestAnimationFrame     ||
	      (global.mozCancelRequestAnimationFrame
	       && global.mozRequestAnimationFrame) ||
	    global.setTimeout;
	  }
	
	  /*!
	   * @return {Function}
	   */
	  function getCancelMethod () {
	    return global.cancelAnimationFrame  ||
	    global.webkitCancelAnimationFrame ||
	    global.oCancelAnimationFrame      ||
	    global.msCancelAnimationFrame     ||
	    global.mozCancelRequestAnimationFrame ||
	    global.clearTimeout;
	  }
	
	  /*!
	   * Cancels an update loop.  This abstraction is needed to get around the fact
	   * that in IE, clearTimeout is not technically a function
	   * (https://twitter.com/kitcambridge/status/206655060342603777) and thus
	   * Function.prototype.call cannot be used upon it.
	   * @param {Rekapi} rekapi
	   */
	  function cancelLoop (rekapi) {
	    if (rekapi._cancelUpdate.call) {
	      rekapi._cancelUpdate.call(global, rekapi._loopId);
	    } else {
	      clearTimeout(rekapi._loopId);
	    }
	  }
	
	  // CORE-SPECIFIC VARS AND FUNCTIONS
	
	  var now = Tweenable.now;
	
	  var playState = {
	    'STOPPED': 'stopped'
	    ,'PAUSED': 'paused'
	    ,'PLAYING': 'playing'
	  };
	
	  /**
	   * If this is a rendered animation, the appropriate renderer is accessible as
	   * `this.renderer`.  If provided, a reference to `opt_context` is accessible
	   * as `this.context`.
	   * @class Rekapi
	   * @param {Object|CanvasRenderingContext2D|HTMLElement=} opt_context This
	   * determines how to render the animation.  If this is not provided or is a
	   * plain object (`{}`), the animation will not render anything and
	   * `this.renderer` will be `undefined`.  If this is a reference to a
	   * [`CanvasRenderingContext2D`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D),
	   * `{{#crossLink "Rekapi.CanvasRenderer"}}{{/crossLink}}` will be initialized
	   * as `this.renderer` for HTML5 canvas-based rendering.  This this is a
	   * reference to a DOM element, `{{#crossLink
	   * "Rekapi.DOMRenderer"}}{{/crossLink}}` will be initialized as
	   * `this.renderer` for either a DOM or CSS `@keyframe`-based rendering.
	   * @constructor
	   * @chainable
	   */
	  function Rekapi (opt_context) {
	    this.context = opt_context || {};
	    this._actors = {};
	    this._playState = playState.STOPPED;
	
	    this._events = {
	      'animationComplete': []
	      ,'playStateChange': []
	      ,'play': []
	      ,'pause': []
	      ,'stop': []
	      ,'beforeUpdate': []
	      ,'afterUpdate': []
	      ,'addActor': []
	      ,'removeActor': []
	      ,'addKeyframeProperty': []
	      ,'removeKeyframeProperty': []
	      ,'addKeyframePropertyTrack': []
	      ,'timelineModified': []
	      ,'animationLooped': []
	    };
	
	    // How many times to loop the animation before stopping
	    this._timesToIterate = -1;
	
	    // Millisecond duration of the animation
	    this._animationLength = 0;
	
	    // The setTimeout ID of `tick`
	    this._loopId = null;
	
	    // The UNIX time at which the animation loop started
	    this._loopTimestamp = null;
	
	    // Used for maintaining position when the animation is paused
	    this._pausedAtTime = null;
	
	    // The last millisecond position that was updated
	    this._lastUpdatedMillisecond = 0;
	
	    // The most recent loop iteration a frame was calculated for
	    this._latestIteration = 0;
	
	    // The most recent millisecond position within the loop that the animation
	    // was updated to
	    this._loopPosition = null;
	
	    this._scheduleUpdate = getUpdateMethod();
	    this._cancelUpdate = getCancelMethod();
	
	    this._updateFn = _.bind(function () {
	      tick(this);
	      updateToCurrentMillisecond(this);
	    }, this);
	
	    _.each(Rekapi._rendererInitHook, function (rendererInitHook) {
	      rendererInitHook(this);
	    }, this);
	
	    return this;
	  }
	
	  // Decorate the Rekapi object with the dependencies so that other modules can
	  // access them.
	  Rekapi.Tweenable = Tweenable;
	  Rekapi._ = _;
	
	  /*!
	   * @type {Object.<function>} Contains the context init function to be called
	   * in the Rekapi constructor.
	   */
	  Rekapi._rendererInitHook = {};
	
	  /**
	   * Add an actor to the animation.  Decorates the added `actor` with a
	   * reference to this `Rekapi` instance as `this.rekapi`.
	   *
	   * @method addActor
	   * @param {Rekapi.Actor|Object} actor If this is an `Object`, it is used to
	   * as the constructor parameters for a new `{{#crossLink
	   * "Rekapi.Actor"}}{{/crossLink}}` instance that is created by this method.
	   * @return {Rekapi.Actor} The actor that was added.
	   */
	  Rekapi.prototype.addActor = function (actor) {
	    var rekapiActor;
	
	    if (actor instanceof Rekapi.Actor) {
	      rekapiActor = actor;
	    } else {
	      rekapiActor = new Rekapi.Actor(actor);
	    }
	
	    // You can't add an actor more than once.
	    if (!_.contains(this._actors, rekapiActor)) {
	      if (typeof rekapiActor.context === 'undefined') {
	        rekapiActor.context = this.context;
	      }
	
	      rekapiActor.rekapi = this;
	
	      // Store a reference to the actor internally
	      this._actors[rekapiActor.id] = rekapiActor;
	
	      recalculateAnimationLength(this, _);
	      rekapiActor.setup();
	
	      fireEvent(this, 'addActor', _, rekapiActor);
	    }
	
	    return rekapiActor;
	  };
	
	  /**
	   * Get a reference to an actor from the animation by its `id`.  You can use
	   * `{{#crossLink "Rekapi/getActorIds:method"}}{{/crossLink}}` to get a list
	   * of IDs for all actors in the animation.
	   * @method getActor
	   * @param {number} actorId
	   * @return {Rekapi.Actor}
	   */
	  Rekapi.prototype.getActor = function (actorId) {
	    return this._actors[actorId];
	  };
	
	  /**
	   * Retrieve the `id`'s of all actors in an animation.
	   *
	   * @method getActorIds
	   * @return {Array(number)}
	   */
	  Rekapi.prototype.getActorIds = function () {
	    return _.pluck(this._actors, 'id');
	  };
	
	  /**
	   * Retrieve all actors in the animation as an Object.
	   * @method getAllActors
	   * @return {Object} The keys of this Object correspond to the Actors' `id`s.
	   */
	  Rekapi.prototype.getAllActors = function () {
	    return _.clone(this._actors);
	  };
	
	  /**
	   * Return the number of actors in the animation.
	   * @method getActorCount
	   * @return {number}
	   */
	  Rekapi.prototype.getActorCount = function () {
	    return _.size(this._actors);
	  };
	
	  /**
	   * Remove an actor from the animation.  This does not destroy the actor, it
	   * only removes the link between it and the `Rekapi` instance.  This method
	   * calls the actor's `teardown` method, if it is defined.
	   * @method removeActor
	   * @param {Rekapi.Actor} actor
	   * @return {Rekapi.Actor}
	   */
	  Rekapi.prototype.removeActor = function (actor) {
	    // Remove the link between Rekapi and actor
	    delete this._actors[actor.id];
	    delete actor.rekapi;
	
	    actor.teardown();
	    recalculateAnimationLength(this, _);
	
	    fireEvent(this, 'removeActor', _, actor);
	
	    return actor;
	  };
	
	  /**
	   * Play the animation.
	   *
	   * __[Example](../../../../docs/examples/play.html)__
	   * @method play
	   * @param {number=} opt_howManyTimes If omitted, the animation will loop
	   * endlessly.
	   * @chainable
	   */
	  Rekapi.prototype.play = function (opt_howManyTimes) {
	    cancelLoop(this);
	
	    if (this._playState === playState.PAUSED) {
	      // Move the playhead to the correct position in the timeline if resuming
	      // from a pause
	      this._loopTimestamp += now() - this._pausedAtTime;
	    } else {
	      this._loopTimestamp = now();
	    }
	
	    this._timesToIterate = opt_howManyTimes || -1;
	    this._playState = playState.PLAYING;
	
	    // Start the update loop
	    tick(this);
	
	    fireEvent(this, 'playStateChange', _);
	    fireEvent(this, 'play', _);
	
	    return this;
	  };
	
	  /**
	   * Move to a specific millisecond on the timeline and play from there.
	   *
	   * __[Example](../../../../docs/examples/play_from.html)__
	   * @method playFrom
	   * @param {number} millisecond
	   * @param {number=} opt_howManyTimes Works as it does in {{#crossLink
	   * "Rekapi/play:method"}}{{/crossLink}}.
	   * @chainable
	   */
	  Rekapi.prototype.playFrom = function (millisecond, opt_howManyTimes) {
	    this.play(opt_howManyTimes);
	    this._loopTimestamp = now() - millisecond;
	
	    return this;
	  };
	
	  /**
	   * Play from the last frame that was rendered with {{#crossLink
	   * "Rekapi/update:method"}}{{/crossLink}}.
	   *
	   * __[Example](../../../../docs/examples/play_from_current.html)__
	   * @method playFromCurrent
	   * @param {number=} opt_howManyTimes Works as it does in {{#crossLink
	   * "Rekapi/play:method"}}{{/crossLink}}.
	   * @chainable
	   */
	  Rekapi.prototype.playFromCurrent = function (opt_howManyTimes) {
	    return this.playFrom(this._lastUpdatedMillisecond, opt_howManyTimes);
	  };
	
	  /**
	   * Pause the animation.  A "paused" animation can be resumed from where it
	   * left off with {{#crossLink "Rekapi/play:method"}}{{/crossLink}}.
	   *
	   * __[Example](../../../../docs/examples/pause.html)__
	   * @method pause
	   * @param pause
	   * @chainable
	   */
	  Rekapi.prototype.pause = function () {
	    if (this._playState === playState.PAUSED) {
	      return this;
	    }
	
	    this._playState = playState.PAUSED;
	    cancelLoop(this);
	    this._pausedAtTime = now();
	
	    fireEvent(this, 'playStateChange', _);
	    fireEvent(this, 'pause', _);
	
	    return this;
	  };
	
	  /**
	   * Stop the animation.  A "stopped" animation will start from the beginning
	   * if {{#crossLink "Rekapi/play:method"}}{{/crossLink}} is called.
	   *
	   * __[Example](../../../../docs/examples/stop.html)__
	   * @method stop
	   * @chainable
	   */
	  Rekapi.prototype.stop = function () {
	    this._playState = playState.STOPPED;
	    cancelLoop(this);
	
	    // Also kill any shifty tweens that are running.
	    _.each(this._actors, function (actor) {
	      actor.stop();
	    });
	
	    fireEvent(this, 'playStateChange', _);
	    fireEvent(this, 'stop', _);
	
	    return this;
	  };
	
	  /**
	   * @method isPlaying
	   * @return {boolean} Whether or not the animation is playing (meaning not paused or
	   * stopped).
	   */
	  Rekapi.prototype.isPlaying = function () {
	    return this._playState === playState.PLAYING;
	  };
	
	  /**
	   * Render an animation frame at a specific point in the timeline.
	   *
	   * __[Example](../../../../docs/examples/update.html)__
	   * @method update
	   * @param {number=} opt_millisecond The point in the timeline at which to
	   * render.  If omitted, this renders the last millisecond that was rendered
	   * (it's a re-render).
	   * @chainable
	   */
	  Rekapi.prototype.update = function (opt_millisecond) {
	    if (opt_millisecond === undefined) {
	      opt_millisecond = this._lastUpdatedMillisecond;
	    }
	
	    fireEvent(this, 'beforeUpdate', _);
	
	    // Update and render each of the actors
	    _.each(this._actors, function (actor) {
	      actor._updateState(opt_millisecond);
	      if (typeof actor.render === 'function') {
	        actor.render(actor.context, actor.get());
	      }
	    });
	
	    this._lastUpdatedMillisecond = opt_millisecond;
	    fireEvent(this, 'afterUpdate', _);
	
	    return this;
	  };
	
	  /**
	   * __[Example](../../../../docs/examples/get_last_position_updated.html)__
	   * @method getLastPositionUpdated
	   * @return {number} The normalized timeline position (between 0 and 1) that
	   * was last rendered.
	   */
	  Rekapi.prototype.getLastPositionUpdated = function () {
	    return (this._lastUpdatedMillisecond / this._animationLength);
	  };
	
	  /**
	   * @method getAnimationLength
	   * @return {number} The length of the animation timeline, in milliseconds.
	   */
	  Rekapi.prototype.getAnimationLength = function () {
	    return this._animationLength;
	  };
	
	  /**
	   * Bind a handler function to a Rekapi event.
	   *
	   * __[Example](../../../../docs/examples/bind.html)__
	   * @method on
	   * @param {string} eventName Valid values are:
	   *
	   * - __animationComplete__: Fires when all animation loops have completed.
	   * - __playStateChange__: Fires when the animation is played, paused, or
	   *   stopped.
	   * - __play__: Fires when the animation is {{#crossLink
	   *   "Rekapi/play:method"}}{{/crossLink}}ed.
	   * - __pause__: Fires when the animation is {{#crossLink
	   *   "Rekapi/pause:method"}}{{/crossLink}}d.
	   * - __stop__: Fires when the animation is {{#crossLink
	   *   "Rekapi/stop:method"}}{{/crossLink}}ped.
	   * - __beforeUpdate__: Fires each frame before all actors are rendered.
	   * - __afterUpdate__: Fires each frame after all actors are rendered.
	   * - __addActor__: Fires when an actor is added.  `opt_data` is the
	   *   {{#crossLink "Rekapi.Actor"}}{{/crossLink}} that was added.
	   * - __removeActor__: Fires when an actor is removed.  `opt_data` is the
	   *   {{#crossLink "Rekapi.Actor"}}{{/crossLink}} that was removed.
	   * - __addKeyframeProperty__: Fires when a keyframe property is added.
	   *   `opt_data` is the {{#crossLink "Rekapi.KeyframeProperty"}}{{/crossLink}}
	   *   that was added.
	   * - __removeKeyframeProperty__: Fires when a {{#crossLink
	   *   "Rekapi.KeyframeProperty"}}{{/crossLink}} is removed.  `opt_data` is the
	   *   {{#crossLink "Rekapi.KeyframeProperty"}}{{/crossLink}} that was removed.
	   * - __addKeyframePropertyTrack__: Fires when the a keyframe is added to an
	   *   actor that creates a new keyframe property track.  `opt_data` is the
	   *   {{#crossLink "Rekapi.KeyframeProperty"}}{{/crossLink}}
	   *   that was added to create the property track.  A reference to the actor
	   *   that the keyframe property is associated with can be accessed via
	   *   `opt_data.actor` and the track name that was added can be determined via
	   *   `opt_data.name`.
	   * - __timelineModified__: Fires when a keyframe is added, modified or
	   *   removed.
	   * - __animationLooped__: Fires when an animation loop ends and a new one
	   *   begins.
	   * @param {Function(Rekapi,Object=)} handler Receives the Rekapi instance as
	   * the first parameter and event-specific data as the second (`opt_data`).
	   * @chainable
	   */
	  Rekapi.prototype.on = function (eventName, handler) {
	    if (!this._events[eventName]) {
	      return;
	    }
	
	    this._events[eventName].push(handler);
	
	    return this;
	  };
	
	  /**
	   * Unbind one or more handlers from a Rekapi event.
	   *
	   * __[Example](../../../../docs/examples/unbind.html)__
	   * @method off
	   * @param {string} eventName Valid values correspond to the list under
	   * {{#crossLink "Rekapi/on:method"}}{{/crossLink}}.
	   * @param {Function=} opt_handler If omitted, all handler functions bound to
	   * `eventName` are unbound.
	   * @chainable
	   */
	  Rekapi.prototype.off = function (eventName, opt_handler) {
	    if (!this._events[eventName]) {
	      return;
	    }
	
	    if (!opt_handler) {
	      // Remove all handlers
	      this._events[eventName] = [];
	    } else {
	      // Remove just the handler specified
	      this._events[eventName] = _.without(
	        this._events[eventName], opt_handler);
	    }
	
	    return this;
	  };
	
	  /**
	   * Export the timeline to a JSON-serializable `Object`.
	   *
	   * __[Example](../../../docs/examples/export_timeline.html)__
	   * @method exportTimeline
	   * @return {Object} This data can later be consumed by {{#crossLink
	   * "Rekapi/importTimeline:method"}}{{/crossLink}}.
	   */
	  Rekapi.prototype.exportTimeline = function () {
	    var exportData = {
	      'duration': this._animationLength
	      ,'actors': []
	    };
	
	    _.each(this._actors, function (actor) {
	      exportData.actors.push(actor.exportTimeline());
	    }, this);
	
	    return exportData;
	  };
	
	  /**
	   * Import data that was created by {{#crossLink
	   * "Rekapi/exportTimeline:method"}}{{/crossLink}}.  This sets up all actors
	   * and keyframes specified in the `rekapiData` parameter.  These two methods
	   * collectively allow you serialize an animation (for sending to a server for
	   * persistence, for example) and later recreating an identical animation.
	   *
	   * @method importTimeline
	   * @param {Object} rekapiData Any object that has the same data format as the
	   * object generated from Rekapi#exportTimeline.
	   */
	  Rekapi.prototype.importTimeline = function (rekapiData) {
	    _.each(rekapiData.actors, function (actorData) {
	      var actor = new Rekapi.Actor();
	      actor.importTimeline(actorData);
	      this.addActor(actor);
	    }, this);
	  };
	
	  Rekapi.util = {};
	
	  // Some hooks for testing.  Gets compiled away at build time.
	  if (REKAPI_DEBUG) {
	    Rekapi._private = {
	      'calculateLoopPosition': calculateLoopPosition
	      ,'updateToCurrentMillisecond': updateToCurrentMillisecond
	      ,'updateToMillisecond': updateToMillisecond
	      ,'tick': tick
	      ,'determineCurrentLoopIteration': determineCurrentLoopIteration
	      ,'calculateTimeSinceStart': calculateTimeSinceStart
	      ,'isAnimationComplete': isAnimationComplete
	      ,'updatePlayState': updatePlayState
	    };
	  }
	
	  root.Rekapi = Rekapi;
	
	};
	
	rekapiModules.push(function (context) {
	
	  'use strict';
	
	  var DEFAULT_EASING = 'linear';
	  var Rekapi = context.Rekapi;
	  var Tweenable = Rekapi.Tweenable;
	  var _ = Rekapi._;
	
	  /*!
	   * Sorts an array numerically, from smallest to largest.
	   * @param {Array.<number>} array The Array to sort.
	   * @return {Array.<number>} The sorted Array.
	   */
	  function sortNumerically (array) {
	    return array.sort(function (a, b) {
	      return a - b;
	    });
	  }
	
	  /*!
	   * @param {Rekapi.Actor} actor
	   * @param {string} event
	   */
	  function fireRekapiEventForActor (actor, event) {
	    if (actor.rekapi) {
	      fireEvent(actor.rekapi, event, _);
	    }
	  }
	
	  /*!
	   * Retrieves the most recent property cache ID for a given millisecond.
	   * @param {Rekapi.Actor} actor
	   * @param {number} millisecond
	   * @return {number} -1 if there is no property cache for the millisecond
	   * (this should never happen).
	   */
	  function getPropertyCacheIdForMillisecond (actor, millisecond) {
	    var list = actor._timelinePropertyCacheKeys;
	
	    var i, len = list.length;
	
	    // If there is only one keyframe, use that
	    if (len === 1) {
	      return 0;
	    }
	
	    //TODO:  Oh noes, this is a linear search!  Maybe optimize it?
	    for (i = 1; i < len; i++) {
	      if (list[i] >= millisecond) {
	        return (i - 1);
	      }
	    }
	
	    return -1;
	  }
	
	  /*!
	   * Sort all of an Actor's property tracks so they can be cached.
	   * @param {Rekapi.Actor} actor
	   */
	  function sortPropertyTracks (actor) {
	    _.each(actor._propertyTracks, function (track) {
	      track.sort(function (current, next) {
	        return current.millisecond - next.millisecond;
	      });
	    });
	  }
	
	  /*!
	   * Compute and fill all timeline caches.
	   * @param {Rekapi.Actor} actor
	   */
	  function cachePropertiesToSegments (actor) {
	    _.each(actor._timelinePropertyCache, function (propertyCache, cacheId) {
	      var latestProperties = getLatestPropeties(actor, cacheId);
	      _.defaults(propertyCache, latestProperties);
	    });
	  }
	
	  /*!
	   * Gets all of the current and most recent Rekapi.KeyframeProperties for a
	   * given millisecond.
	   * @param {Rekapi.Actor} actor
	   * @param {number} forMillisecond
	   * @return {Object} An Object containing Rekapi.KeyframeProperties
	   */
	  function getLatestPropeties (actor, forMillisecond) {
	    var latestProperties = {};
	
	    _.each(actor._propertyTracks, function (propertyTrack, propertyName) {
	      var previousKeyframeProperty = propertyTrack[0] || null;
	      var i = 0, len = propertyTrack.length, keyframeProperty;
	
	      for (i; i < len; i++) {
	        keyframeProperty = propertyTrack[i];
	
	        if (keyframeProperty.millisecond > forMillisecond) {
	          // We went to far, use the previous keyframeProperty
	          latestProperties[propertyName] = previousKeyframeProperty;
	        } else if (keyframeProperty.millisecond === forMillisecond) {
	          // Found it!
	          latestProperties[propertyName] = keyframeProperty;
	        }
	
	        previousKeyframeProperty = keyframeProperty;
	
	        // Quit the loop if something was found.  We can't early-return above,
	        // because latestProperties[propertyName] might be null, which is not
	        // what we want.
	        if (latestProperties[propertyName]) {
	          break;
	        }
	      }
	
	      // If nothing was found, attempt to use the last keyframeProperty in the
	      // track.
	      if (!latestProperties[propertyName]) {
	        var lastProp = _.last(propertyTrack);
	
	        if (lastProp && lastProp.millisecond <= forMillisecond) {
	          latestProperties[propertyName] = lastProp;
	        }
	      }
	    });
	
	    return latestProperties;
	  }
	
	  /*!
	   * Links each KeyframeProperty to the next one in its respective track.
	   *
	   * They're linked lists!
	   * @param {Rekapi.Actor} actor
	   */
	  function linkTrackedProperties (actor) {
	    _.each(actor._propertyTracks, function (propertyTrack) {
	      _.each(propertyTrack, function (keyframeProperty, i) {
	        keyframeProperty.linkToNext(propertyTrack[i + 1]);
	      });
	    });
	  }
	
	  /*!
	   * Returns a requested KeyframeProperty at a millisecond on a specified
	   * track.
	   * @param {Rekapi.Actor} actor
	   * @param {string} trackName
	   * @param {number} millisecond
	   * @return {Rekapi.KeyframeProperty|undefined}
	   */
	  function findPropertyAtMillisecondInTrack (actor, trackName, millisecond) {
	    return _.findWhere(actor._propertyTracks[trackName], {
	      millisecond: millisecond
	    });
	  }
	
	  /*!
	   * Empty out and rebuild the cache of internal KeyframeProperty data.
	   * @param {Rekapi.Actor}
	   */
	  function invalidatePropertyCache (actor) {
	    actor._timelinePropertyCache = {};
	    var timelinePropertyCache = actor._timelinePropertyCache;
	
	    // Build the cache map
	    var millisecond;
	    _.each(actor._keyframeProperties, function (keyframeProperty) {
	      millisecond = keyframeProperty.millisecond;
	      if (!timelinePropertyCache[millisecond]) {
	        timelinePropertyCache[millisecond] = {};
	      }
	
	      timelinePropertyCache[millisecond][keyframeProperty.name]
	         = keyframeProperty;
	    });
	
	    actor._timelinePropertyCacheKeys = _.map(timelinePropertyCache,
	    function (val, key) {
	      return +key;
	    });
	
	    // Optimize the cache lookup
	    sortNumerically(actor._timelinePropertyCacheKeys);
	
	    // Associate cache map elements to their respective points on the timeline
	    cachePropertiesToSegments(actor);
	
	    // Re-link the linked list of keyframeProperties
	    linkTrackedProperties(actor);
	  }
	
	  /*!
	   * Updates internal Rekapi and Actor data after a KeyframeProperty
	   * modification method is called.
	   *
	   * TODO: This should be moved to core.
	   *
	   * @param {Rekapi.Actor} actor
	   */
	  function cleanupAfterKeyframeModification (actor) {
	    sortPropertyTracks(actor);
	    invalidatePropertyCache(actor);
	    recalculateAnimationLength(actor.rekapi, _);
	    fireRekapiEventForActor(actor, 'timelineModified');
	  }
	
	  /**
	   * An actor represents an individual component of an animation.  An animation
	   * may have one or many actors.
	   *
	   * @class Rekapi.Actor
	   * @param {Object=} opt_config Valid properties:
	   *   - __context__ (_Object|CanvasRenderingContext2D|HTMLElement_): The
	   *   rendering context for this actor. If omitted, this Actor gets the parent
	   *   `{{#crossLink "Rekapi"}}{{/crossLink}}` instance's `context` when it is
	   *   added with `{{#crossLink "Rekapi/addActor:method"}}{{/crossLink}}`.
	   *   - __setup__ (_Function_): A function that gets called when the actor is
	   *     added to an animation with
	   *     `{{#crossLink "Rekapi/addActor:method"}}{{/crossLink}}`.
	   *   - __render__ (_Function(Object, Object)_): A function that gets called
	   *   every time the actor's state is updated (once every frame). This
	   *   function should do something meaningful with state of the actor (for
	   *   example, visually rendering to the screen).  This function receives two
	   *   parameters: The first is a reference to the actor's `context` and the
	   *   second is an Object containing the current state properties.
	   *   - __teardown__ (_Function_): A function that gets called when the actor
	   *   is removed from an animation with
	   *   `{{#crossLink "Rekapi/removeActor:method"}}{{/crossLink}}`.
	   * @constructor
	   */
	  Rekapi.Actor = function (opt_config) {
	
	    opt_config = opt_config || {};
	
	    // Steal the `Tweenable` constructor.
	    Tweenable.call(this);
	
	    _.extend(this, {
	      '_propertyTracks': {}
	      ,'_timelinePropertyCache': {}
	      ,'_timelinePropertyCacheKeys': []
	      ,'_keyframeProperties': {}
	      ,'id': _.uniqueId()
	      ,'context': opt_config.context // This may be undefined
	      ,'setup': opt_config.setup || noop
	      ,'render': opt_config.render || noop
	      ,'teardown': opt_config.teardown || noop
	      ,'data': {}
	    });
	
	    return this;
	  };
	  var Actor = Rekapi.Actor;
	
	  // Kind of a fun way to set up an inheritance chain.  `ActorMethods` prevents
	  // methods on `Actor.prototype` from polluting `Tweenable`'s prototype with
	  // `Actor` specific methods.
	  var ActorMethods = function () {};
	  ActorMethods.prototype = Tweenable.prototype;
	  Actor.prototype = new ActorMethods();
	  // But the magic doesn't stop here!  `Actor`'s constructor steals the
	  // `Tweenable` constructor.
	
	  /**
	   * Create a keyframe for the actor.  The animation timeline begins at `0`.
	   * The timeline's length will automatically "grow" to accommodate new
	   * keyframes as they are added.
	   *
	   * `state` should contain all of the properties that define this
	   * keyframe's state.  These properties can be any value that can be tweened
	   * by [Shifty](http://jeremyckahn.github.io/shifty/) (numbers,
	   * RGB/hexadecimal color strings, and CSS property strings).  `state` can
	   * also be a function, but this works differently (see "Function keyframes"
	   * below).
	   *
	   * __Note:__ Internally, this creates `{{#crossLink
	   * "Rekapi.KeyframeProperty"}}{{/crossLink}}`s and places them on a "track."
	   * These `{{#crossLink "Rekapi.KeyframeProperty"}}{{/crossLink}}`s are
	   * managed for you by the `{{#crossLink "Rekapi.Actor"}}{{/crossLink}}` APIs.
	   *
	   * ## Keyframe inheritance
	   *
	   * Keyframes always inherit missing properties from the previous keyframe.
	   * For example:
	   *
	   *     actor.keyframe(0, {
	   *       'x': 100
	   *     }).keyframe(1000, {
	   *       // Implicitly specifies the `x: 100` from above
	   *       'y': 50
	   *     });
	   *
	   * Keyframe `1000` will have a `y` of `50`, and an `x` of `100`, because `x`
	   * was inherited from keyframe `0`.
	   *
	   * ## Function keyframes
	   *
	   * Instead of providing an Object to be used to interpolate state values, you
	   * can provide a function to be called at a specific point on the timeline.
	   * This function does not need to return a value, as it does not get used to
	   * render the actor state.  Function keyframes are called once per animation
	   * loop and do not have any tweening relationship with one another.  This is
	   * a primarily a mechanism for scheduling arbitrary code to be executed at
	   * specific points in an animation.
	   *
	   *     // drift is the number of milliseconds that this function was executed
	   *     // after the scheduled time.  There is typically some amount of delay
	   *     // due to the nature of JavaScript timers.
	   *     actor.keyframe(1000, function (drift) {
	   *       console.log(this); // Logs the actor instance
	   *     });
	   *
	   * ## Easing
	   *
	   * `opt_easing`, if provided, can be a string or an Object.  If `opt_easing`
	   * is a string, all animated properties will have the same easing curve
	   * applied to them.  For example:
	   *
	   *     actor.keyframe(1000, {
	   *         'x': 100,
	   *         'y': 100
	   *       }, 'easeOutSine');
	   *
	   * Both `x` and `y` will have `easeOutSine` applied to them.  You can also
	   * specify multiple easing curves with an Object:
	   *
	   *     actor.keyframe(1000, {
	   *         'x': 100,
	   *         'y': 100
	   *       }, {
	   *         'x': 'easeinSine',
	   *         'y': 'easeOutSine'
	   *       });
	   *
	   * `x` will ease with `easeInSine`, and `y` will ease with `easeOutSine`.
	   * Any unspecified properties will ease with `linear`.  If `opt_easing` is
	   * omitted, all properties will default to `linear`.
	   * @method keyframe
	   * @param {number} millisecond Where on the timeline to set the keyframe.
	   * @param {Object|Function(number)} state The state properties of the
	   * keyframe.  If this is an Object, the properties will be interpolated
	   * between this and those of the following keyframe for a given point on the
	   * animation timeline.  If this is a function, it will be executed at the
	   * specified keyframe.  The function will receive a number that represents
	   * the delay between when the function is called and when it was scheduled.
	   * @param {string|Object=} opt_easing Optional easing string or Object.  If
	   * `state` is a function, this is ignored.
	   * @chainable
	   */
	  Actor.prototype.keyframe = function keyframe (
	    millisecond, state, opt_easing) {
	
	    if (state instanceof Function) {
	      state = { 'function': state };
	    }
	
	    opt_easing = opt_easing || DEFAULT_EASING;
	    var easing = Tweenable.composeEasingObject(state, opt_easing);
	    var newKeyframeProperty;
	
	    // Create and add all of the KeyframeProperties
	    _.each(state, function (value, name) {
	      newKeyframeProperty = new Rekapi.KeyframeProperty(
	        millisecond, name, value, easing[name]);
	
	      this._addKeyframeProperty(newKeyframeProperty);
	    }, this);
	
	    if (this.rekapi) {
	      recalculateAnimationLength(this.rekapi, _);
	    }
	
	    invalidatePropertyCache(this);
	    fireRekapiEventForActor(this, 'timelineModified');
	
	    return this;
	  };
	
	  /**
	   * @method hasKeyframeAt
	   * @param {number} millisecond Point on the timeline to query.
	   * @param {string=} opt_trackName Optionally scope the lookup to a particular
	   * track.
	   * @return {boolean} Whether or not the actor has any `{{#crossLink
	   * "Rekapi.KeyframeProperty"}}{{/crossLink}}`s set at `millisecond`.
	   */
	  Actor.prototype.hasKeyframeAt = function (millisecond, opt_trackName) {
	    var tracks = this._propertyTracks;
	
	    if (opt_trackName) {
	      if (!_.has(tracks, opt_trackName)) {
	        return false;
	      }
	      tracks = _.pick(tracks, opt_trackName);
	    }
	
	    // Search through the tracks and determine if a property can be found.
	    var track;
	    for (track in tracks) {
	      if (tracks.hasOwnProperty(track)
	         && findPropertyAtMillisecondInTrack(this, track, millisecond)) {
	        return true;
	      }
	    }
	
	    return false;
	  };
	
	  /**
	   * Copies all of the `{{#crossLink
	   * "Rekapi.KeyframeProperty"}}{{/crossLink}}`s from one point on the actor's
	   * timeline to another. This is particularly useful for animating an actor
	   * back to its original position.
	   *
	   *     actor
	   *       .keyframe(0, {
	   *         x: 10,
	   *         y: 15
	   *       }).keyframe(1000, {
	   *         x: 50,
	   *         y: 75
	   *       });
	   *
	   *     // Return the actor to its original position
	   *     actor.copyKeyframe(2000, 0);
	   *
	   * __[Example](../../../../docs/examples/actor_copy_keyframe.html)__
	   * @method copyKeyframe
	   * @param {number} copyTo The timeline millisecond to copy KeyframeProperties
	   * to.
	   * @param {number} copyFrom The timeline millisecond to copy
	   * KeyframeProperties from.
	   * @chainable
	   */
	  Actor.prototype.copyKeyframe = function (copyTo, copyFrom) {
	    // Build the configuation objects to be passed to Actor#keyframe
	    var sourcePositions = {};
	    var sourceEasings = {};
	
	    _.each(this._propertyTracks, function (propertyTrack, trackName) {
	      var keyframeProperty =
	      findPropertyAtMillisecondInTrack(this, trackName, copyFrom);
	
	      if (keyframeProperty) {
	        sourcePositions[trackName] = keyframeProperty.value;
	        sourceEasings[trackName] = keyframeProperty.easing;
	      }
	    }, this);
	
	    this.keyframe(copyTo, sourcePositions, sourceEasings);
	    return this;
	  };
	
	  /**
	   * Moves all of the
	   * `{{#crossLink "Rekapi.KeyframeProperty"}}{{/crossLink}}`s from one
	   * point on the actor's timeline to another.  Although this method does error
	   * checking for you to make sure the operation can be safely performed, an
	   * effective pattern is to use `{{#crossLink
	   * "Rekapi.Actor/hasKeyframeAt:method"}}{{/crossLink}}` to see if there is
	   * already a keyframe at the requested `to` destination.
	   *
	   * __[Example](../../../../docs/examples/actor_move_keyframe.html)__
	   * @method moveKeyframe
	   * @param {number} from The millisecond of the keyframe to be moved.
	   * @param {number} to The millisecond of where the keyframe should be moved
	   * to.
	   * @return {boolean} Whether or not the keyframe was successfully moved.
	   */
	  Actor.prototype.moveKeyframe = function (from, to) {
	    if (!this.hasKeyframeAt(from) || this.hasKeyframeAt(to)) {
	      return false;
	    }
	
	    // Move each of the relevant KeyframeProperties to the new location in the
	    // timeline
	    _.each(this._propertyTracks, function (propertyTrack, trackName) {
	      var property = findPropertyAtMillisecondInTrack(this, trackName, from);
	
	      if (property) {
	        property.millisecond = to;
	      }
	    }, this);
	
	    cleanupAfterKeyframeModification(this);
	
	    return true;
	  };
	
	  /**
	   * Augment the `value` or `easing` of the `{{#crossLink
	   * "Rekapi.KeyframeProperty"}}{{/crossLink}}`s at a given millisecond.  Any
	   * `{{#crossLink "Rekapi.KeyframeProperty"}}{{/crossLink}}`s omitted in
	   * `stateModification` or `opt_easing` are not modified.
	   *
	   *     actor.keyframe(0, {
	   *       'x': 10,
	   *       'y': 20
	   *     }).keyframe(1000, {
	   *       'x': 20,
	   *       'y': 40
	   *     }).keyframe(2000, {
	   *       'x': 30,
	   *       'y': 60
	   *     })
	   *
	   *     // Changes the state of the keyframe at millisecond 1000.
	   *     // Modifies the value of 'y' and the easing of 'x.'
	   *     actor.modifyKeyframe(1000, {
	   *       'y': 150
	   *     }, {
	   *       'x': 'easeFrom'
	   *     });
	   *
	   * __[Example](../../../../docs/examples/actor_modify_keyframe.html)__
	   * @method modifyKeyframe
	   * @param {number} millisecond
	   * @param {Object} stateModification
	   * @param {Object=} opt_easingModification
	   * @chainable
	   */
	  Actor.prototype.modifyKeyframe = function (
	    millisecond, stateModification, opt_easingModification) {
	    opt_easingModification = opt_easingModification || {};
	
	    _.each(this._propertyTracks, function (propertyTrack, trackName) {
	      var property = findPropertyAtMillisecondInTrack(
	        this, trackName, millisecond);
	
	      if (property) {
	        property.modifyWith({
	          'value': stateModification[trackName]
	          ,'easing': opt_easingModification[trackName]
	        });
	      }
	    }, this);
	
	    cleanupAfterKeyframeModification(this);
	
	    return this;
	  };
	
	  /**
	   * Remove all `{{#crossLink "Rekapi.KeyframeProperty"}}{{/crossLink}}`s set
	   * on the actor at a given millisecond in the animation.
	   *
	   * __[Example](../../../../docs/examples/actor_remove_keyframe.html)__
	   * @method removeKeyframe
	   * @param {number} millisecond The location on the timeline of the keyframe
	   * to remove.
	   * @chainable
	   */
	  Actor.prototype.removeKeyframe = function (millisecond) {
	    var propertyTracks = this._propertyTracks;
	
	    _.each(this._propertyTracks, function (propertyTrack, propertyName) {
	      var keyframeProperty = _.findWhere(
	        propertyTrack, { millisecond: millisecond });
	
	      if (keyframeProperty) {
	        propertyTracks[propertyName] = _.without(
	          propertyTrack, keyframeProperty);
	        keyframeProperty.detach();
	      }
	    }, this);
	
	    if (this.rekapi) {
	      recalculateAnimationLength(this.rekapi, _);
	    }
	
	    invalidatePropertyCache(this);
	    fireRekapiEventForActor(this, 'timelineModified');
	
	    return this;
	  };
	
	  /**
	   * Remove all `{{#crossLink "Rekapi.KeyframeProperty"}}{{/crossLink}}`s set
	   * on the actor.
	   *
	   * __[Example](../../../../docs/examples/actor_remove_all_keyframes.html)__
	   * @method removeAllKeyframes
	   * @chainable
	   */
	  Actor.prototype.removeAllKeyframes = function () {
	    _.each(this._propertyTracks, function (propertyTrack) {
	      propertyTrack.length = 0;
	    });
	
	    _.each(this._keyframeProperties, function (keyframeProperty) {
	      keyframeProperty.detach();
	    }, this);
	
	    this._keyframeProperties = {};
	
	    // Calling removeKeyframe performs some necessary post-removal cleanup, the
	    // earlier part of this method skipped all of that for the sake of
	    // efficiency.
	    return this.removeKeyframe(0);
	  };
	
	  /**
	   * @method getKeyframeProperty
	   * @param {string} property The name of the property track.
	   * @param {number} millisecond The millisecond of the property in the
	   * timeline.
	   * @return {Rekapi.KeyframeProperty|undefined} A `{{#crossLink
	   * "Rekapi.KeyframeProperty"}}{{/crossLink}}` that is stored on the actor, as
	   * specified by the `property` and `millisecond` parameters. This is
	   * `undefined` if no properties were found.
	   */
	  Actor.prototype.getKeyframeProperty = function (property, millisecond) {
	    var propertyTrack = this._propertyTracks[property];
	    if (propertyTrack) {
	      return _.findWhere(propertyTrack, { millisecond: millisecond });
	    }
	  };
	
	  /**
	   * Modify a `{{#crossLink "Rekapi.KeyframeProperty"}}{{/crossLink}}` stored
	   * on an actor.  Internally, this calls `{{#crossLink
	   * "Rekapi.KeyframeProperty/modifyWith:method"}}{{/crossLink}}` and then
	   * performs some cleanup.
	   *
	   * __[Example](../../../../docs/examples/actor_modify_keyframe_property.html)__
	   * @method modifyKeyframeProperty
	   * @param {string} property The name of the `{{#crossLink
	   * "Rekapi.KeyframeProperty"}}{{/crossLink}}` to modify.
	   * @param {number} millisecond The timeline millisecond of the `{{#crossLink
	   * "Rekapi.KeyframeProperty"}}{{/crossLink}}` to modify.
	   * @param {Object} newProperties The properties to augment the `{{#crossLink
	   * "Rekapi.KeyframeProperty"}}{{/crossLink}}` with.
	   * @chainable
	   */
	  Actor.prototype.modifyKeyframeProperty = function (
	    property, millisecond, newProperties) {
	
	    var keyframeProperty = this.getKeyframeProperty(property, millisecond);
	    if (keyframeProperty) {
	      keyframeProperty.modifyWith(newProperties);
	      cleanupAfterKeyframeModification(this);
	    }
	
	    return this;
	  };
	
	  /**
	   * Remove a single `{{#crossLink "Rekapi.KeyframeProperty"}}{{/crossLink}}`
	   * from the actor.
	   * @method removeKeyframeProperty
	   * @param {string} property The name of the `{{#crossLink
	   * "Rekapi.KeyframeProperty"}}{{/crossLink}}` to remove.
	   * @param {number} millisecond Where in the timeline the `{{#crossLink
	   * "Rekapi.KeyframeProperty"}}{{/crossLink}}` to remove is.
	   * @return {Rekapi.KeyframeProperty|undefined} The removed KeyframeProperty,
	   * if one was found.
	   */
	  Actor.prototype.removeKeyframeProperty = function (property, millisecond) {
	    var propertyTracks = this._propertyTracks;
	
	    if (typeof propertyTracks[property] !== 'undefined') {
	      var keyframeProperty = this.getKeyframeProperty(property, millisecond);
	      propertyTracks[property] =
	      _.without(propertyTracks[property], keyframeProperty);
	      keyframeProperty.detach();
	
	      cleanupAfterKeyframeModification(this);
	
	      return keyframeProperty;
	    }
	  };
	
	  /**
	   *
	   * @method getTrackNames
	   * @return {Array(string)} A list of all the track names for an actor.
	   */
	  Actor.prototype.getTrackNames = function () {
	    return _.keys(this._propertyTracks);
	  };
	
	  /**
	   * Get all of the `{{#crossLink "Rekapi.KeyframeProperty"}}{{/crossLink}}`s
	   * for a track.
	   * @method getPropertiesInTrack
	   * @param {string} trackName The track name to query.
	   * @return {Rekapi.KeyframeProperty[]|undefined}
	   */
	  Actor.prototype.getPropertiesInTrack = function (trackName) {
	    var propertyTrack = this._propertyTracks[trackName];
	
	    if (propertyTrack) {
	      return propertyTrack.slice(0);
	    }
	  };
	
	  /**
	   * @method getStart
	   * @param {string=} opt_trackName Optionally scope the lookup to a particular
	   * track.
	   * @return {number} The millisecond of the first animating state of an actor
	   * (for instance, if the actor's first keyframe is later than millisecond
	   * `0`).  If there are no keyframes, this returns `0`.
	   */
	  Actor.prototype.getStart = function (opt_trackName) {
	    var starts = [];
	    var propertyTracks = this._propertyTracks;
	
	    // Null check to see if opt_trackName was provided and is valid
	    if (propertyTracks.hasOwnProperty(opt_trackName)) {
	      var firstKeyframeProperty = propertyTracks[opt_trackName][0];
	
	      if (firstKeyframeProperty) {
	        starts.push(firstKeyframeProperty.millisecond);
	      }
	    } else {
	      // Loop over all property tracks and accumulate the first
	      // keyframeProperties from non-empty tracks
	      _.each(propertyTracks, function (propertyTrack) {
	        if (propertyTrack.length) {
	          starts.push(propertyTrack[0].millisecond);
	        }
	      });
	    }
	
	    if (starts.length === 0) {
	      starts = [0];
	    }
	
	    var start;
	    if (starts.length > 0) {
	      start = Math.min.apply(Math, starts);
	    } else {
	      start = 0;
	    }
	
	    return start;
	  };
	
	  /**
	   * @method getEnd
	   * @param {string=} opt_trackName Optionally scope the lookup to a particular
	   * keyframe track.
	   * @return {number} The millisecond of the last state of an actor (the point
	   * in the timeline in which it is done animating).  If there are no
	   * keyframes, this is `0`.
	   */
	  Actor.prototype.getEnd = function (opt_trackName) {
	    var latest = 0;
	    var tracksToInspect = this._propertyTracks;
	
	    if (opt_trackName) {
	      tracksToInspect = {};
	      tracksToInspect[opt_trackName] = this._propertyTracks[opt_trackName];
	    }
	
	    _.each(tracksToInspect, function (propertyTrack) {
	      if (propertyTrack.length) {
	        var trackLength = _.last(propertyTrack).millisecond;
	
	        if (trackLength > latest) {
	          latest = trackLength;
	        }
	      }
	    }, this);
	
	    return latest;
	  };
	
	  /**
	   * @method getLength
	   * @param {string=} opt_trackName Optionally scope the lookup to a particular
	   * track.
	   * @return {number} The length of time in milliseconds that the actor
	   * animates for.
	   */
	  Actor.prototype.getLength = function (opt_trackName) {
	    return this.getEnd(opt_trackName) - this.getStart(opt_trackName);
	  };
	
	  /**
	   * Extend the last state on this actor's timeline to simulate a pause.
	   * Internally, this method copies the final state of the actor in the
	   * timeline to the millisecond defined by `until`.
	   *
	   * __[Example](../../../../docs/examples/actor_wait.html)__
	   * @method wait
	   * @param {number} until At what point in the animation the Actor should wait
	   * until (relative to the start of the animation timeline).  If this number
	   * is less than the value returned from `{{#crossLink
	   * "Rekapi.Actor/getLength:method"}}{{/crossLink}}`, this method does
	   * nothing.
	   * @chainable
	   */
	  Actor.prototype.wait = function (until) {
	    var length = this.getEnd();
	
	    if (until <= length) {
	      return this;
	    }
	
	    var end = this.getEnd();
	    var latestProps = getLatestPropeties(this, this.getEnd());
	    var serializedProps = {};
	    var serializedEasings = {};
	
	    _.each(latestProps, function (latestProp, propName) {
	      serializedProps[propName] = latestProp.value;
	      serializedEasings[propName] = latestProp.easing;
	    });
	
	    this.removeKeyframe(end);
	    this.keyframe(end, serializedProps, serializedEasings);
	    this.keyframe(until, serializedProps, serializedEasings);
	
	    return this;
	  };
	
	  /*!
	   * Associate a `Rekapi.KeyframeProperty` to this actor.  Augments the
	   * `Rekapi.KeyframeProperty` to maintain a link between the two objects.
	   * @method _addKeyframeProperty
	   * @param {Rekapi.KeyframeProperty} keyframeProperty
	   * @chainable
	   */
	  Actor.prototype._addKeyframeProperty = function (keyframeProperty) {
	    keyframeProperty.actor = this;
	    this._keyframeProperties[keyframeProperty.id] = keyframeProperty;
	
	    var name = keyframeProperty.name;
	    var propertyTracks = this._propertyTracks;
	
	    if (typeof this._propertyTracks[name] === 'undefined') {
	      propertyTracks[name] = [keyframeProperty];
	      if (this.rekapi) {
	        fireEvent(this.rekapi, 'addKeyframePropertyTrack', _, keyframeProperty);
	      }
	    } else {
	      propertyTracks[name].push(keyframeProperty);
	    }
	
	    sortPropertyTracks(this);
	
	    if (this.rekapi) {
	      fireEvent(this.rekapi, 'addKeyframeProperty', _, keyframeProperty);
	    }
	
	    return this;
	  };
	
	  /*!
	   * Calculate and set the actor's position at `millisecond` in the animation.
	   * @method _updateState
	   * @param {number} millisecond
	   * @chainable
	   */
	  Actor.prototype._updateState = function (millisecond) {
	    var startMs = this.getStart();
	    var endMs = this.getEnd();
	    var interpolatedObject = {};
	
	    millisecond = Math.min(endMs, millisecond);
	
	    var latestCacheId = getPropertyCacheIdForMillisecond(this, millisecond);
	    var propertiesToInterpolate =
	      this._timelinePropertyCache[this._timelinePropertyCacheKeys[
	          latestCacheId]];
	
	    if (startMs === endMs) {
	
	      // If there is only one keyframe, use that for the state of the actor
	      _.each(propertiesToInterpolate, function (keyframeProperty, propName) {
	        if (keyframeProperty.shouldInvokeForMillisecond(millisecond)) {
	          keyframeProperty.invoke();
	          keyframeProperty.hasFired = false;
	          return;
	        }
	
	        interpolatedObject[propName] = keyframeProperty.value;
	      }, this);
	
	    } else {
	
	      _.each(propertiesToInterpolate, function (keyframeProperty, propName) {
	        if (this._beforeKeyframePropertyInterpolate !== noop) {
	          this._beforeKeyframePropertyInterpolate(keyframeProperty);
	        }
	
	        if (keyframeProperty.shouldInvokeForMillisecond(millisecond)) {
	          keyframeProperty.invoke();
	          return;
	        }
	
	        interpolatedObject[propName] =
	        keyframeProperty.getValueAt(millisecond);
	
	        if (this._afterKeyframePropertyInterpolate !== noop) {
	          this._afterKeyframePropertyInterpolate(
	            keyframeProperty, interpolatedObject);
	        }
	      }, this);
	    }
	
	    this.set(interpolatedObject);
	
	    return this;
	  };
	
	  /*!
	   * @method _beforeKeyframePropertyInterpolate
	   * @param {Rekapi.KeyframeProperty} keyframeProperty
	   * @abstract
	   */
	  Actor.prototype._beforeKeyframePropertyInterpolate = noop;
	
	  /*!
	   * @method _afterKeyframePropertyInterpolate
	   * @param {Rekapi.KeyframeProperty} keyframeProperty
	   * @param {Object} interpolatedObject
	   * @abstract
	   */
	  Actor.prototype._afterKeyframePropertyInterpolate = noop;
	
	  /**
	   * __[Example](../../../../docs/examples/actor_export_timeline.html)__
	   * @method exportTimeline
	   * @return {Object} A serializable Object of this actor's timeline property
	   * tracks and `{{#crossLink "Rekapi.KeyframeProperty"}}{{/crossLink}}`s.
	   */
	  Actor.prototype.exportTimeline = function () {
	    var exportData = {
	      'start': this.getStart()
	      ,'end': this.getEnd()
	      ,'trackNames': this.getTrackNames()
	      ,'propertyTracks': {}
	    };
	
	    _.each(this._propertyTracks, function (propertyTrack, trackName) {
	      var trackAlias = exportData.propertyTracks[trackName] = [];
	      _.each(propertyTrack, function (keyframeProperty) {
	        trackAlias.push(keyframeProperty.exportPropertyData());
	      });
	    });
	
	    return exportData;
	  };
	
	  /**
	   * Import an Object to augment this actor's state.  This does not remove
	   * keyframe properties before importing new ones.
	   *
	   * @method importTimeline
	   * @param {Object} actorData Any object that has the same data format as the
	   * object generated from `{{#crossLink
	   * "Rekapi.Actor/exportTimeline:method"}}{{/crossLink}}`.
	   */
	  Actor.prototype.importTimeline = function (actorData) {
	    _.each(actorData.propertyTracks, function (propertyTrack) {
	      _.each(propertyTrack, function (property) {
	        var obj = {};
	        obj[property.name] = property.value;
	        this.keyframe(property.millisecond, obj, property.easing);
	      }, this);
	    }, this);
	  };
	
	});
	
	rekapiModules.push(function (context) {
	
	  'use strict';
	
	  var DEFAULT_EASING = 'linear';
	  var Rekapi = context.Rekapi;
	  var Tweenable = Rekapi.Tweenable;
	  var _ = Rekapi._;
	  var interpolate = Tweenable.interpolate;
	
	  /**
	   * Represents an individual component of an actor's keyframe state.  In most
	   * cases you won't need to deal with this object directly, as the
	   * `{{#crossLink "Rekapi.Actor"}}{{/crossLink}}` APIs abstract a lot of what
	   * this Object does away for you.
	   * @class Rekapi.KeyframeProperty
	   * @param {number} millisecond Where on the animation timeline this
	   * `Rekapi.KeyframeProperty` is.
	   * @param {string} name The property's name, such as `"x"` or `"opacity"`.
	   * @param {number|string|Function} value The value that this
	   * `Rekapi.KeyframeProperty` represents.
	   * @param {string=} opt_easing The easing curve at which this
	   * `Rekapi.KeyframeProperty` should be animated to.  Defaults to `"linear"`.
	   * @constructor
	   */
	  Rekapi.KeyframeProperty = function (millisecond, name, value, opt_easing) {
	    this.id = _.uniqueId('keyframeProperty_');
	    this.millisecond = millisecond;
	    this.name = name;
	    this.value = value;
	    this.hasFired = null;
	    this.easing = opt_easing || DEFAULT_EASING;
	    this.nextProperty = null;
	
	    return this;
	  };
	  var KeyframeProperty = Rekapi.KeyframeProperty;
	
	  /**
	   * Modify this `{{#crossLink "Rekapi.KeyframeProperty"}}{{/crossLink}}`.
	   * @method modifyWith
	   * @param {Object} newProperties Valid values correspond to `{{#crossLink
	   * "Rekapi.KeyframeProperty"}}{{/crossLink}}`'s constructor parameters:
	   *   - __millisecond__ (_number_)
	   *   - __name__ (_string_)
	   *   - __value__ (_number|string_)
	   *   - __easing__ (_string_)
	   */
	  KeyframeProperty.prototype.modifyWith = function (newProperties) {
	    var modifiedProperties = {};
	
	    _.each(['millisecond', 'easing', 'value'], function (str) {
	      modifiedProperties[str] = typeof(newProperties[str]) === 'undefined' ?
	          this[str] : newProperties[str];
	    }, this);
	
	    _.extend(this, modifiedProperties);
	  };
	
	  /**
	   * Calculate the midpoint between this `{{#crossLink
	   * "Rekapi.KeyframeProperty"}}{{/crossLink}}` and the next `{{#crossLink
	   * "Rekapi.KeyframeProperty"}}{{/crossLink}}` in a `{{#crossLink
	   * "Rekapi.Actor"}}{{/crossLink}}`'s property track.
	   *
	   * In just about all cases, `millisecond` should be between this
	   * `{{#crossLink "Rekapi.KeyframeProperty"}}{{/crossLink}}`'s `millisecond`
	   * and the `millisecond` of the `{{#crossLink
	   * "Rekapi.KeyframeProperty"}}{{/crossLink}}` that follows it in the
	   * animation timeline, but it is valid to specify a value outside of this
	   * range.
	   * @method getValueAt
	   * @param {number} millisecond The millisecond in the animation timeline to
	   * compute the state value for.
	   * @return {number}
	   */
	  KeyframeProperty.prototype.getValueAt = function (millisecond) {
	    var fromObj = {};
	    var toObj = {};
	    var value;
	    var nextProperty = this.nextProperty;
	    var correctedMillisecond = Math.max(millisecond, this.millisecond);
	
	    if (nextProperty) {
	      correctedMillisecond =
	      Math.min(correctedMillisecond, nextProperty.millisecond);
	
	      fromObj[this.name] = this.value;
	      toObj[this.name] = nextProperty.value;
	
	      var delta = nextProperty.millisecond - this.millisecond;
	      var interpolatedPosition =
	      (correctedMillisecond - this.millisecond) / delta;
	
	      value = interpolate(fromObj, toObj, interpolatedPosition,
	          nextProperty.easing)[this.name];
	    } else {
	      value = this.value;
	    }
	
	    return value;
	  };
	
	  /**
	   * Create the reference to the `{{#crossLink
	   * "Rekapi.KeyframeProperty"}}{{/crossLink}}` that follows this one on a
	   * `{{#crossLink "Rekapi.Actor"}}{{/crossLink}}`'s property track.  Property
	   * tracks are just linked lists of `{{#crossLink
	   * "Rekapi.KeyframeProperty"}}{{/crossLink}}`s.
	   * @method linkToNext
	   * @param {Rekapi.KeyframeProperty} nextProperty The `{{#crossLink
	   * "Rekapi.KeyframeProperty"}}{{/crossLink}}` that should immediately follow
	   * this one on the animation timeline.
	   */
	  KeyframeProperty.prototype.linkToNext = function (nextProperty) {
	    this.nextProperty = nextProperty || null;
	  };
	
	  /**
	   * Disassociates this `{{#crossLink
	   * "Rekapi.KeyframeProperty"}}{{/crossLink}}` from its `{{#crossLink
	   * "Rekapi.Actor"}}{{/crossLink}}`.  This is called by various `{{#crossLink
	   * "Rekapi.Actor"}}{{/crossLink}}` methods and triggers the `{{#crossLink
	   * "Rekapi/on:method"}}removeKeyframeProperty{{/crossLink}}` event on the
	   * associated `{{#crossLink "Rekapi"}}{{/crossLink}}` instance.
	   * @method detach
	   * @chainable
	   */
	  KeyframeProperty.prototype.detach = function () {
	    var actor = this.actor;
	    if (actor) {
	      if (actor.rekapi) {
	        fireEvent(actor.rekapi, 'removeKeyframeProperty', _, this);
	        delete actor._keyframeProperties[this.id];
	        this.actor = null;
	      }
	    }
	
	    return this;
	  };
	
	  /**
	   * __[Example](../../../../docs/examples/keyprop_export_property_data.html)__
	   * @method exportPropertyData
	   * @return {Object} A serializable Object representation of this
	   * `{{#crossLink "Rekapi.KeyframeProperty"}}{{/crossLink}}`.
	   */
	  KeyframeProperty.prototype.exportPropertyData = function () {
	    return {
	      'millisecond': this.millisecond
	      ,'name': this.name
	      ,'value': this.value
	      ,'easing': this.easing
	    };
	  };
	
	  /*!
	   * Whether or not this is a function keyframe and should be invoked for the
	   * current frame.  Helper method for Rekapi.Actor.
	   * @method shouldInvokeForMillisecond
	   * @return {boolean}
	   */
	  KeyframeProperty.prototype.shouldInvokeForMillisecond =
	      function (millisecond) {
	    return (millisecond >= this.millisecond &&
	      this.name === 'function' &&
	      !this.hasFired);
	  };
	
	  /**
	   * Assuming this is a function keyframe, call the function.
	   * @method invoke
	   * @return {*} Whatever value is returned from the keyframe function that was
	   * set for this `{{#crossLink "Rekapi.KeyframeProperty"}}{{/crossLink}}`.
	   */
	  KeyframeProperty.prototype.invoke = function () {
	    var drift = this.actor.rekapi._loopPosition - this.millisecond;
	    var returnValue = this.value.call(this.actor, drift);
	    this.hasFired = true;
	    return returnValue;
	  };
	
	});
	
	rekapiModules.push(function (context) {
	
	  'use strict';
	
	  var Rekapi = context.Rekapi;
	  var _ = Rekapi._;
	
	  // PRIVATE UTILITY FUNCTIONS
	  //
	
	  /*!
	   * Gets (and optionally sets) height or width on a canvas.
	   * @param {HTMLCanvas} canvas
	   * @param {string} heightOrWidth The dimension (either "height" or "width")
	   * to get or set.
	   * @param {number=} opt_newSize The new value to set for `dimension`.
	   * @return {number}
	   */
	  function dimension (canvas, heightOrWidth, opt_newSize) {
	    if (typeof opt_newSize !== 'undefined') {
	      canvas[heightOrWidth] = opt_newSize;
	      canvas.style[heightOrWidth] = opt_newSize + 'px';
	    }
	
	    return canvas[heightOrWidth];
	  }
	
	  /*!
	   * Takes care of some pre-rendering tasks for canvas animations.
	   * @param {Rekapi.CanvasRenderer} canvasRenderer
	   */
	  function beforeRender (canvasRenderer) {
	    canvasRenderer.clear();
	  }
	
	  /*!
	   * Render all the `Actor`s at whatever position they are currently in.
	   * @param {Rekapi}
	   * @param {Rekapi.CanvasRenderer} canvasRenderer
	   * @return {Rekapi}
	   */
	  function render (rekapi, canvasRenderer) {
	    fireEvent(rekapi, 'beforeRender', _);
	    var renderOrderSorter = canvasRenderer._renderOrderSorter;
	    var len = canvasRenderer._renderOrder.length;
	    var renderOrder;
	
	    if (renderOrderSorter) {
	      var orderedActors =
	          _.sortBy(canvasRenderer._canvasActors, renderOrderSorter);
	      renderOrder = _.pluck(orderedActors, 'id');
	    } else {
	      renderOrder = canvasRenderer._renderOrder;
	    }
	
	    var currentActor;
	    var canvasActors = canvasRenderer._canvasActors;
	
	    var i;
	    for (i = 0; i < len; i++) {
	      currentActor = canvasActors[renderOrder[i]];
	      currentActor.render(currentActor.context, currentActor.get());
	    }
	    fireEvent(rekapi, 'afterRender', _);
	
	    return rekapi;
	  }
	
	  /*!
	   * @param {Rekapi.Actor} actor
	   * @param {Rekapi.CanvasRenderer} canvasRenderer
	   */
	  function addActor (actor, canvasRenderer) {
	    canvasRenderer._renderOrder.push(actor.id);
	    canvasRenderer._canvasActors[actor.id] = actor;
	  }
	
	  /*!
	   * @param {Rekapi.Actor} actor
	   * @param {Rekapi.CanvasRenderer} canvasRenderer
	   */
	  function removeActor (actor, canvasRenderer) {
	    canvasRenderer._renderOrder = _.without(canvasRenderer._renderOrder, actor.id);
	    delete canvasRenderer._canvasActors[actor.id];
	  }
	
	  /*!
	   * Sets up an instance of CanvasRenderer and attaches it to a `Rekapi`
	   * instance.  Also augments the Rekapi instance with canvas-specific
	   * functions.
	   * @param {Rekapi} rekapi
	   */
	  Rekapi._rendererInitHook.canvas = function (rekapi) {
	    if (typeof CanvasRenderingContext2D === 'undefined' ||
	        !(rekapi.context instanceof CanvasRenderingContext2D)) {
	      return;
	    }
	
	    rekapi.renderer = new CanvasRenderer(rekapi);
	  };
	
	  // CANVAS RENDERER OBJECT
	  //
	
	  /**
	   * You can use Rekapi to render animations to an HTML5 `<canvas>`.  To do so,
	   * just provide a
	   * [`CanvasRenderingContext2D`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D)
	   * instance to the `{{#crossLink "Rekapi"}}{{/crossLink}}` constructor to
	   * automatically set up the renderer:
	   *
	   *     var context = document.createElement('canvas').getContext('2d');
	   *     var rekapi = new Rekapi(context);
	   *     rekapi.renderer instanceof Rekapi.CanvasRenderer; // true
	   *
	   * `Rekapi.CanvasRenderer` adds some canvas-specific events you can bind to
	   * with `{{#crossLink "Rekapi/on:method"}}{{/crossLink}}` (and unbind from
	   * with `{{#crossLink "Rekapi/off:method"}}{{/crossLink}}`:
	   *
	   *  - __beforeRender__: Fires just before an actor is rendered to the canvas.
	   *  - __afterRender__: Fires just after an actor is rendered to the canvas.
	   *
	   * __Note__: `Rekapi.CanvasRenderer` is added to the `{{#crossLink
	   * "Rekapi"}}{{/crossLink}}` instance automatically as `this.renderer`, there
	   * is no reason to call the constructor yourself in most cases.
	   *
	   * ## Multiple renderers
	   *
	   * Rekapi supports multiple renderers per instance.  Do do this, you must not
	   * provide a
	   * [`CanvasRenderingContext2D`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D)
	   * to the `{{#crossLink "Rekapi"}}{{/crossLink}}` constructor, you must
	   * instead initialize the renderer yourself.  The
	   * [`CanvasRenderingContext2D`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D)
	   * that would have been provided to the `{{#crossLink
	   * "Rekapi"}}{{/crossLink}}` constructor instead is provided as the second
	   * parameter to `Rekapi.CanvasRenderer`:
	   *
	   *
	   *     var canvasContext = document.querySelector('canvas').getContext('2d');
	   *
	   *     // No context gets passed to the Rekapi constructor
	   *     var rekapi = new Rekapi();
	   *
	   *     // Initialize Rekapi.CanvasRenderer manually and give it a
	   *     // CanvasRenderingContext2D.  You can name it anything you want on the
	   *     // Rekapi instance.
	   *     rekapi.canvasRenderer =
	   *         new Rekapi.CanvasRenderer(rekapi, canvasContext);
	   * @class Rekapi.CanvasRenderer
	   * @param {Rekapi} rekapi
	   * @param {CanvasRenderingContext2D=} opt_context
	   * @constructor
	   */
	  Rekapi.CanvasRenderer = function (rekapi, opt_context) {
	    this.rekapi = rekapi;
	    this.canvasContext = opt_context || rekapi.context;
	    this._renderOrder = [];
	    this._renderOrderSorter = null;
	    this._canvasActors = {};
	
	    _.extend(rekapi._events, {
	      'beforeRender': []
	      ,'afterRender': []
	    });
	
	    var self = this;
	
	    rekapi.on('afterUpdate', function () {
	      render(rekapi, self);
	    });
	
	    rekapi.on('addActor', function (rekapi, actor) {
	      addActor(actor, self);
	    });
	
	    rekapi.on('removeActor', function (rekapi, actor) {
	      removeActor(actor, self);
	    });
	
	    rekapi.on('beforeRender', function () {
	      beforeRender(self);
	    });
	
	    return this;
	  };
	  var CanvasRenderer = Rekapi.CanvasRenderer;
	
	  /**
	   * Get and optionally set the height of the associated `<canvas>` element.
	   * @method height
	   * @param {number=} opt_height The height to optionally set.
	   * @return {number}
	   */
	  CanvasRenderer.prototype.height = function (opt_height) {
	    return dimension(this.canvasContext.canvas, 'height', opt_height);
	  };
	
	  /**
	   * Get and optionally set the width of the associated `<canvas>` element.
	   * @method width
	   * @param {number=} opt_width The width to optionally set.
	   * @return {number}
	   */
	  CanvasRenderer.prototype.width = function (opt_width) {
	    return dimension(this.canvasContext.canvas, 'width', opt_width);
	  };
	
	  /**
	   * Erase the `<canvas>`.
	   * @method clear
	   * @return {Rekapi}
	   */
	  CanvasRenderer.prototype.clear = function () {
	    this.canvasContext.clearRect(0, 0, this.width(), this.height());
	
	    return this.rekapi;
	  };
	
	  /**
	   * Move an actor around within the render order list.  Each actor is rendered
	   * in order of its layer (layers and actors have a 1:1 relationship).  The
	   * later an actor is added to an animation (with `{{#crossLink
	   * "Rekapi/addActor:method"}}{{/crossLink}}`), the higher its layer.  Lower
	   * layers (starting with 0) are rendered earlier.
	   *
	   *
	   * This method has no effect if an order function is set with `{{#crossLink
	   * "Rekapi.CanvasRenderer/setOrderFunction:method"}}{{/crossLink}}`.
	   *
	   * __[Example](../../../../docs/examples/canvas_move_actor_to_layer.html)__
	   * @method moveActorToLayer
	   * @param {Rekapi.Actor} actor
	   * @param {number} layer This should be within `0` and the total number of
	   * actors in the animation.  That number can be found with `{{#crossLink
	   * "Rekapi/getActorCount:method"}}{{/crossLink}}`.
	   * @return {Rekapi.Actor}
	   */
	  CanvasRenderer.prototype.moveActorToLayer = function (actor, layer) {
	    if (layer < this._renderOrder.length && layer > -1) {
	      this._renderOrder = _.without(this._renderOrder, actor.id);
	      this._renderOrder.splice(layer, 0, actor.id);
	    }
	
	    return actor;
	  };
	
	  /**
	   * Set a function that defines the render order of the actors.  This is
	   * called each frame before the actors are rendered.
	   *
	   * The following example assumes that all actors are circles that have a
	   * `radius` `{{#crossLink "Rekapi.KeyframeProperty"}}{{/crossLink}}`.  The
	   * circles will be rendered in order of the value of their `radius`, from
	   * smallest to largest.  This has the effect of layering larger circles on
	   * top of smaller circles, thus giving a sense of perspective.
	   *
	   * If a render order function is specified, `{{#crossLink
	   * "Rekapi.CanvasRenderer/moveActorToLayer:method"}}{{/crossLink}}` will have
	   * no effect.
	   *
	   *     rekapi.renderer.setOrderFunction(function (actor) {
	   *       return actor.get().radius;
	   *     });
	   * __[Example](../../../../docs/examples/canvas_set_order_function.html)__
	   * @method setOrderFunction
	   * @param {function(Rekapi.Actor)} sortFunction
	   * @return {Rekapi}
	   */
	  CanvasRenderer.prototype.setOrderFunction = function (sortFunction) {
	    this._renderOrderSorter = sortFunction;
	    return this.rekapi;
	  };
	
	  /**
	   * Remove the order function set by `{{#crossLink
	   * "Rekapi.CanvasRenderer/setOrderFunction:method"}}{{/crossLink}}`.  The
	   * render order defaults back to the order in which the actors were added to
	   * the animation.
	   *
	   * __[Example](../../../../docs/examples/canvas_unset_order_function.html)__
	   * @method unsetOrderFunction
	   * @return {Rekapi}
	   */
	  CanvasRenderer.prototype.unsetOrderFunction = function () {
	    this._renderOrderSorter = null;
	    return this.rekapi;
	  };
	
	});
	
	rekapiModules.push(function (context) {
	
	  'use strict';
	
	  var Rekapi = context.Rekapi;
	  var _ = Rekapi._;
	  var now = Rekapi.Tweenable.now;
	  var vendorTransforms = [
	    'transform'
	    ,'webkitTransform'
	    ,'MozTransform'
	    ,'oTransform'
	    ,'msTransform'];
	  var transformFunctions = [
	    'translateX',
	    'translateY',
	    'translateZ',
	    'scale',
	    'scaleX',
	    'scaleY',
	    'rotate',
	    'skewX',
	    'skewY'];
	
	  // CONSTANTS
	  //
	
	  // The timer to remove an injected style isn't likely to match the actual
	  // length of the CSS animation, so give it some extra time to complete so it
	  // doesn't cut off the end.
	  var INJECTED_STYLE_REMOVAL_BUFFER_MS = 250;
	
	  // PRIVATE UTILITY FUNCTIONS
	  //
	
	  /*!
	   * @param {string} formatter
	   * @param {[string]} args
	   * @return {string}
	   */
	  var printf = function (formatter, args) {
	    var composedStr = formatter;
	    _.each(args, function (arg) {
	      composedStr = composedStr.replace('%s', arg);
	    });
	
	    return composedStr;
	  };
	
	  /*!
	   * http://stackoverflow.com/a/3886106
	   *
	   * @param {number} number
	   */
	  function isInt (number) {
	    return number % 1 === 0;
	  }
	
	  /*!
	   * @param {Rekapi} rekapi
	   */
	  Rekapi._rendererInitHook.cssAnimate = function (rekapi) {
	    // Node.nodeType 1 is an ELEMENT_NODE.
	    // https://developer.mozilla.org/en-US/docs/Web/API/Node.nodeType
	    if (rekapi.context.nodeType === 1) {
	      rekapi.renderer = new DOMRenderer(rekapi);
	    }
	  };
	
	  /*!
	   * @return {string}
	   */
	  function getVendorPrefix () {
	    var style = document.body.style;
	
	    if ('-webkit-animation' in style) {
	      return 'webkit';
	    } else if ('-moz-animation' in style) {
	      return 'mozilla';
	    } else if ('-ms-animation' in style) {
	      return 'microsoft';
	    } else if ('-o-animation' in style) {
	      return 'opera';
	    } else if ('animation' in style) {
	      return 'w3';
	    }
	
	    return '';
	  }
	
	  var styleID = 0;
	  /*!
	   * @param {Rekapi} rekapi
	   * @param {string} css The css content that the <style> element should have.
	   * @return {HTMLStyleElement} The unique ID of the injected <style> element.
	   */
	  function injectStyle (rekapi, css) {
	    var style = document.createElement('style');
	    var id = 'rekapi-' + styleID++;
	    style.id = id;
	    style.innerHTML = css;
	    document.head.appendChild(style);
	    forceStyleReset(rekapi);
	
	    return style;
	  }
	
	  /*!
	   * Fixes a really bizarre issue that only seems to affect Presto and Blink.
	   * In some situations, DOM nodes will not detect dynamically injected <style>
	   * elements.  Explicitly re-inserting DOM nodes seems to fix the issue.  Not
	   * sure what causes this issue.  Not sure why this fixes it.
	   *
	   * @param {Rekapi} rekapi
	   */
	  function forceStyleReset (rekapi) {
	    var dummyDiv = document.createElement('div');
	
	    _.each(rekapi.getAllActors(), function (actor) {
	      if (actor.context.nodeType === 1) {
	        var actorEl = actor.context;
	        var actorElParent = actorEl.parentElement;
	
	        actorElParent.replaceChild(dummyDiv, actorEl);
	        actorElParent.replaceChild(actorEl, dummyDiv);
	      }
	    });
	
	    dummyDiv = null;
	  }
	
	  /*!
	   * @param {HTMLElement} element
	   * @param {string} styleName
	   * @param {string|number} styleValue
	   */
	  function setStyle (element, styleName, styleValue) {
	    element.style[styleName] = styleValue;
	  }
	
	  /*!
	   * @param {string} name A transform function name
	   * @return {boolean}
	   */
	  function isTransformFunction (name) {
	    return _.contains(transformFunctions, name);
	  }
	
	  /*!
	   * Builds a concatenated string of given transform property values in order.
	   *
	   * @param {Array.<string>} orderedTransforms Array of ordered transform
	   *     function names
	   * @param {Object} transformProperties Transform properties to build together
	   * @return {string}
	   */
	  function buildTransformValue (orderedTransforms, transformProperties) {
	    var transformComponents = [];
	
	    _.each(orderedTransforms, function(functionName) {
	      if (transformProperties[functionName]) {
	        transformComponents.push(functionName + '(' +
	          transformProperties[functionName] + ')');
	      }
	    });
	
	    return transformComponents.join(' ');
	  }
	
	  /*!
	   * Sets value for all vendor prefixed transform properties on an element
	   *
	   * @param {HTMLElement} element The actor's DOM element
	   * @param {string} transformValue The transform style value
	   */
	  function setTransformStyles (element, transformValue) {
	    _.each(vendorTransforms, function(prefixedTransform) {
	      setStyle(element, prefixedTransform, transformValue);
	    });
	  }
	
	
	  /*!
	   * @param {Rekapi} rekapi
	   * @param {Rekapi.Actor} actor
	   */
	  function onAddActor (rekapi, actor) {
	    var actorElement = actor.context;
	
	    if (actorElement.nodeType !== 1) {
	      return;
	    }
	
	    var className = DOMRenderer.getActorClassName(actor);
	
	    // Add the class if it's not already there.
	    // Using className instead of classList to make IE happy.
	    if (!actorElement.className.match(className)) {
	      actorElement.className += ' ' + className;
	    }
	
	    actor._transformOrder = transformFunctions.slice(0);
	    actor._beforeKeyframePropertyInterpolate = actorBeforeInterpolate;
	    actor._afterKeyframePropertyInterpolate = actorAfterInterpolate;
	    actor.render = _.bind(actorRender, actor, actor);
	    actor.teardown = _.bind(actorTeardown, actor, actor);
	  }
	
	  /*!
	   * transform properties like translate3d and rotate3d break the cardinality
	   * of multi-ease easing strings, because the "3" gets treated like a
	   * tweenable value.  Transform "3d(" to "__THREED__" to prevent this, and
	   * transform it back in _afterKeyframePropertyInterpolate.
	   *
	   * @param {Rekapi.KeyframeProperty} keyframeProperty
	   */
	  function actorBeforeInterpolate (keyframeProperty) {
	    if (keyframeProperty.name !== 'transform') {
	      return;
	    }
	
	    var value = keyframeProperty.value;
	    var nextProp = keyframeProperty.nextProperty;
	
	    if (nextProp && value.match(/3d\(/g)) {
	      keyframeProperty.value = value.replace(/3d\(/g, '__THREED__');
	      nextProp.value = nextProp.value.replace(/3d\(/g, '__THREED__');
	    }
	  }
	
	  /*!
	   * @param {Rekapi.KeyframeProperty} keyframeProperty
	   * @param {Object} interpolatedObject
	   */
	  function actorAfterInterpolate (keyframeProperty, interpolatedObject) {
	    if (keyframeProperty.name !== 'transform') {
	      return;
	    }
	
	    var value = keyframeProperty.value;
	    var nextProp = keyframeProperty.nextProperty;
	
	    if (nextProp && value.match(/__THREED__/g)) {
	      keyframeProperty.value = value.replace(/__THREED__/g, '3d(');
	      nextProp.value = nextProp.value.replace(/__THREED__/g, '3d(');
	      var keyPropName = keyframeProperty.name;
	      interpolatedObject[keyPropName] =
	          interpolatedObject[keyPropName].replace(/__THREED__/g, '3d(');
	    }
	  }
	
	  /*!
	   * @param {Rekapi.Actor} actor
	   * @param {HTMLElement} element
	   * @param {Object} state
	   */
	  function actorRender (actor, element, state) {
	    var propertyNames = _.keys(state);
	    // TODO:  Optimize the following code so that propertyNames is not looped
	    // over twice.
	    var transformFunctionNames = _.filter(propertyNames, isTransformFunction);
	    var otherPropertyNames = _.reject(propertyNames, isTransformFunction);
	    var otherProperties = _.pick(state, otherPropertyNames);
	
	    if (transformFunctionNames.length) {
	      var transformProperties = _.pick(state, transformFunctionNames);
	      var builtStyle = buildTransformValue(actor._transformOrder,
	          transformProperties);
	      setTransformStyles(element, builtStyle);
	    } else if (state.transform) {
	      setTransformStyles(element, state.transform);
	    }
	
	    _.each(otherProperties, function (styleValue, styleName) {
	      setStyle(element, styleName, styleValue);
	    });
	  }
	
	  /*!
	   * @param {Rekapi.Actor} actor
	   */
	  function actorTeardown (actor) {
	    var element = actor.context;
	    var classList = element.className.match(/\S+/g);
	    var sanitizedClassList =
	        _.without(classList, DOMRenderer.getActorClassName(actor));
	    element.className = sanitizedClassList.join(' ');
	  }
	
	  // CSS RENDERER OBJECT
	  //
	
	  /**
	   * `Rekapi.DOMRenderer` allows you to animate DOM elements.  This is achieved
	   * either by browser-accelerated [CSS `@keyframe`
	   * animations](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes),
	   * or by traditional inline style updates on every frame (like how
	   * [`jQuery.fn.animate`](http://api.jquery.com/animate/) works).  Animations
	   * are defined with the same API in either case, but you can gracefully fall
	   * back to the inline style approach if CSS `@keyframe` animations are not
	   * supported by the browser or not preferred.  To render animations with the
	   * DOM, just supply any DOM element to the `{{#crossLink
	   * "Rekapi"}}{{/crossLink}}` constructor.  You may use `document.body`, since
	   * it is generally always available:
	   *
	   *     var rekapi = new Rekapi(document.body);
	   *     rekapi.renderer instanceof Rekapi.DOMRenderer; // true
	   *
	   * There are separate APIs for playing inline style animations and CSS
	   * `@keyframe` animations.  Advantages of playing an animation with CSS
	   * `@keyframes`:
	   *
	   *   - Smoother animations in newer browsers.
	   *   - The JavaScript thread is freed from performing animation updates,
	   *   making it available for other logic.
	   *
	   * Disadvantages:
	   *
	   *   - Not all browsers support CSS `@keyframe` animations.
	   *   - Limited playback control: You can only play and stop an animation, you
	   *   cannot jump to or start from a specific point in the timeline.
	   *   - Generating the CSS for `@keyframe` animations can take a noticeable
	   *   amount of time.  This blocks all other logic, including rendering, so
	   *   you may have to be clever with how to spend the cycles to do it.
	   *   - No `{{#crossLink "Rekapi/on:method"}}events{{/crossLink}}` can be
	   *   bound to CSS `@keyframe` animations.
	   *
	   * So, the results are a little more predictable and flexible with inline
	   * style animations, but CSS `@keyframe` may give you better performance.
	   * Choose whichever approach makes the most sense for your needs.
	   *
	   * `Rekapi.DOMRenderer` can gracefully fall back to an inline style animation
	   * if CSS `@keyframe` animations are not supported by the browser:
	   *
	   *      var rekapi = new Rekapi(document.body);
	   *
	   *      // Each actor needs a reference to the DOM element it represents
	   *      var actor = rekapi.addActor({
	   *        context: document.getElementById('actor-1')
	   *      });
	   *
	   *      actor
	   *        .keyframe(0,    { left: '0px'   })
	   *        .keyframe(1000, { left: '250px' }, 'easeOutQuad');
	   *
	   *      // Feature detect for CSS @keyframe support
	   *      if (rekapi.renderer.canAnimateWithCSS()) {
	   *        // Animate with CSS @keyframes
	   *        rekapi.renderer.play();
	   *      } else {
	   *        // Animate with inline styles instead
	   *        rekapi.play();
	   *      }
	   *
	   * ## `@keyframe` animations work differently than inline style animations
	   *
	   * Inline style animations are compatible with all of the playback and
	   * timeline control methods defined by `{{#crossLink
	   * "Rekapi"}}{{/crossLink}}`, such as `{{#crossLink
	   * "Rekapi/play:method"}}{{/crossLink}}`, `{{#crossLink
	   * "Rekapi/playFrom:method"}}{{/crossLink}}` and `{{#crossLink
	   * "Rekapi/update:method"}}{{/crossLink}}`.  CSS `@keyframe` playback cannot
	   * be controlled in all browsers, so `Rekapi.DOMRenderer` defines analogous,
	   * renderer-specific CSS playback methods that you should use:
	   *
	   *   - {{#crossLink "Rekapi.DOMRenderer/play:method"}}{{/crossLink}}
	   *   - {{#crossLink "Rekapi.DOMRenderer/isPlaying:method"}}{{/crossLink}}
	   *   - {{#crossLink "Rekapi.DOMRenderer/stop:method"}}{{/crossLink}}
	   *
	   * __Note__: `Rekapi.DOMRenderer` is added to the `{{#crossLink
	   * "Rekapi"}}{{/crossLink}}` instance automatically as `this.renderer`,
	   * there is no reason to call the constructor yourself in most cases.
	   *
	   * __[Example](/renderers/dom/sample/play-many-actors.html)__
	   *
	   * @class Rekapi.DOMRenderer
	   * @param {Rekapi} rekapi
	   * @constructor
	   */
	  Rekapi.DOMRenderer = function (rekapi) {
	    this.rekapi = rekapi;
	
	    // @private {number}
	    this._playTimestamp = null;
	
	    // @private {string}
	    this._cachedCSS = null;
	
	    // The HTMLStyleElement that gets injected into the DOM.
	    // @private {HTMLStyleElement)
	    this._styleElement = null;
	
	    // @private {number}
	    this._stopSetTimeoutHandle = null;
	
	    rekapi.on('timelineModified', _.bind(function () {
	      this._cachedCSS = null;
	    }, this));
	
	    rekapi.on('addActor', onAddActor);
	
	    return this;
	  };
	  var DOMRenderer = Rekapi.DOMRenderer;
	
	  /**
	   * @method canAnimateWithCSS
	   * @return {boolean} Whether or not the browser supports CSS `@keyframe`
	   * animations.
	   */
	  DOMRenderer.prototype.canAnimateWithCSS = function () {
	    return !!getVendorPrefix();
	  };
	
	  /**
	   * Play the Rekapi animation as a CSS `@keyframe` animation.
	   *
	   * Note that this is different from `{{#crossLink
	   * "Rekapi/play:method"}}{{/crossLink}}`.  This method only applies to CSS
	   * `@keyframe` animations.
	   * @method play
	   * @param {number=} opt_iterations How many times the animation should loop.
	   * This can be `null` or `0` if you want to loop the animation endlessly but
	   * also specify a value for `opt_fps`.
	   * @param {number=} opt_fps How many `@keyframes` to generate per second of
	   * the animation.  A higher value results in a more precise CSS animation,
	   * but it will take longer to generate.  The default value is `30`.  You
	   * should not need to go higher than `60`.
	   */
	  DOMRenderer.prototype.play = function (opt_iterations, opt_fps) {
	    if (this.isPlaying()) {
	      this.stop();
	    }
	
	    var css = this._cachedCSS || this.prerender.apply(this, arguments);
	    this._styleElement = injectStyle(this.rekapi, css);
	    this._playTimestamp = now();
	
	    if (opt_iterations) {
	      var animationLength = (opt_iterations * this.rekapi.getAnimationLength());
	      this._stopSetTimeoutHandle = setTimeout(
	          _.bind(this.stop, this, true),
	          animationLength + INJECTED_STYLE_REMOVAL_BUFFER_MS);
	    }
	
	    fireEvent(this.rekapi, 'play', _);
	  };
	
	  /**
	   * Stop a CSS `@keyframe` animation.  This also removes any `<style>`
	   * elements that were dynamically injected into the DOM.
	   *
	   * Note that this is different from
	   * `{{#crossLink "Rekapi/stop:method"}}{{/crossLink}}`.  This method only
	   * applies to CSS `@keyframe` animations.
	   * @method stop
	   * @param {boolean=} opt_goToEnd If true, skip to the end of the animation.
	   * If false or omitted, set inline styles on the actor elements to keep them
	   * in their current position.
	   */
	  DOMRenderer.prototype.stop = function (opt_goToEnd) {
	    if (this.isPlaying()) {
	      clearTimeout(this._stopSetTimeoutHandle);
	
	      // Forces a style update in WebKit/Presto
	      this._styleElement.innerHTML = '';
	
	      document.head.removeChild(this._styleElement);
	      this._styleElement = null;
	
	      var updateTime;
	      if (opt_goToEnd) {
	        updateTime = this.rekapi.getAnimationLength();
	      } else {
	        updateTime = (now() - this._playTimestamp)
	            % this.rekapi.getAnimationLength();
	      }
	
	      this.rekapi.update(updateTime);
	      fireEvent(this.rekapi, 'stop', _);
	    }
	  };
	
	  /**
	   * @method isPlaying
	   * @return {boolean} Whether or not a CSS `@keyframe` animation is running.
	   */
	  DOMRenderer.prototype.isPlaying = function () {
	    return !!this._styleElement;
	  };
	
	  /**
	   * Prerender and cache the CSS animation so that it is immediately ready to
	   * be used when it is needed in the future.  The function signature is
	   * identical to {{#crossLink
	   * "Rekapi.DOMRenderer/play:method"}}{{/crossLink}}.  This is necessary to
	   * play a CSS animation and will be automatically called for you if you don't
	   * call it manually, but calling it ahead of time (such as on page load) will
	   * prevent any perceived lag when a CSS `@keyframe` animation is started.
	   * The prerendered animation is cached for reuse until the timeline or a
	   * keyframe is modified.
	   *
	   * @method prerender
	   * @param {number=} opt_iterations How many times the animation should loop.
	   * This can be `null` or `0` if you want to loop the animation endlessly but
	   * also specify a value for `opt_fps`.
	   * @param {number=} opt_fps How many `@keyframes` to generate per second of
	   * the animation.  A higher value results in a more precise CSS animation,
	   * but it will take longer to generate.  The default value is `30`.  You
	   * should not need to go higher than `60`.
	   * @return {string} The prerendered CSS string.  You likely won't need this,
	   * as it is also cached internally.
	   */
	  DOMRenderer.prototype.prerender = function (opt_iterations, opt_fps) {
	    return this._cachedCSS = this.toString({
	      'vendors': [getVendorPrefix()]
	      ,'fps': opt_fps
	      ,'iterations': opt_iterations
	    });
	  };
	
	  /**
	   * You can decouple transform components in order to animate each property
	   * with its own easing curve:
	   *
	   *     actor
	   *       .keyframe(0, {
	   *         translateX: '0px',
	   *         translateY: '0px',
	   *         rotate: '0deg'
	   *       })
	   *       .keyframe(1500, {
	   *         translateX: '200px',
	   *         translateY: '200px',
	   *         rotate: '90deg'
	   *       }, {
	   *         translateX: 'easeOutExpo',
	   *         translateY: 'easeInSine',
	   *         rotate: 'elastic'
	   *       });
	   *
	   * CSS transform string components are order-dependent, but JavaScript object
	   * properties have an unpredictable order.  Rekapi must combine transform
	   * properties supplied to `{{#crossLink
	   * "Rekapi.Actor/keyframe:method"}}{{/crossLink}}` (as shown above) into a
	   * single string when it renders each frame.  This method lets you change
	   * that order from the default.  The supported array values for
	   * `orderedTransforms` are:
	   *
	   * - `translateX`
	   * - `translateY`
	   * - `translateZ`
	   * - `scale`
	   * - `scaleX`
	   * - `scaleY`
	   * - `rotate`
	   * - `skewX`
	   * - `skewY`
	   *
	   * If you prefer a more standards-oriented approach, Rekapi also supports
	   * combining the transform components yourself:
	   *
	   *     actor
	   *       .keyframe(0, {
	   *         transform: 'translateX(0px) translateY(0px) rotate(0deg)'
	   *       })
	   *       .keyframe(1500, {
	   *         transform: 'translateX(200px) translateY(200px) rotate(90deg)'
	   *       }, {
	   *         transform: 'easeOutExpo easeInSine elastic'
	   *       });
	   *
	   * This example and the one above it are equivalent.
	   *
	   * __Note__: The decoupled form of `transform` animations is not supported in
	   * CSS `@keyframe` animations, only inline style animations.  This is due to
	   * the tightly-coupled nature of the CSS `@keyframes` spec.  If you intend to
	   * play a CSS-based `@keyframe` animation, __do not__ use the non-standard
	   * decoupled API form for `transform` properties.
	   *
	   * @method setActorTransformOrder
	   * @param {Rekapi.Actor} actor
	   * @param {Array(string)} orderedTransforms The array of transform names.
	   * @return {Rekapi}
	   */
	  DOMRenderer.prototype.setActorTransformOrder =
	      function (actor, orderedTransforms) {
	    // TODO: Document this better...
	    var unknownFunctions = _.reject(orderedTransforms, isTransformFunction);
	
	    if (unknownFunctions.length) {
	      throw 'Unknown or unsupported transform functions: ' +
	        unknownFunctions.join(', ');
	    }
	    // Ignore duplicate transform function names in the array
	    actor._transformOrder = _.uniq(orderedTransforms);
	
	    return this.rekapi;
	  };
	
	  /**
	   * @method getActorClassName
	   * @param {Rekapi.Actor} actor
	   * @return {string} The default CSS class that is targeted by `{{#crossLink
	   * "Rekapi.DOMRenderer/toString:method"}}{{/crossLink}}` if a custom class is
	   * not specified.  This may be useful for getting a standard and consistent
	   * CSS class name for an actor's DOM element.
	   */
	  DOMRenderer.getActorClassName = function (actor) {
	    return 'actor-' + actor.id;
	  };
	
	  /**
	   * Converts Rekapi animations to CSS `@keyframes`.
	   * @method toString
	   * @param {Object=} opts
	   *   * __vendors__ _(Array(string))_: Defaults to `['w3']`.  The browser vendors you
	   *   want to support. Valid values are:
	   *     * `'microsoft'`
	   *     * `'mozilla'`
	   *     * `'opera'`
	   *     * `'w3'`
	   *     * `'webkit'`
	   *
	   *
	   *   * __fps__ _(number)_: Defaults to 30.  Defines the number of CSS
	   *   `@keyframe` frames rendered per second of an animation.  CSS `@keyframes`
	   *   are comprised of a series of explicitly defined steps, and more steps
	   *   will allow for a more complex animation.  More steps will also result in
	   *   a larger CSS string, and more time needed to generate the string.
	   *   * __name__ _(string)_: Define a custom name for your animation.  This
	   *   becomes the class name targeted by the generated CSS.  The default value
	   *   is determined by a call to {{#crossLink
	   *   "Rekapi.DOMRenderer/getActorClassName:method"}}{{/crossLink}}.
	   *   * __isCentered__ _(boolean)_: If `true`, the generated CSS will contain
	   *   `transform-origin: 0 0;`, which centers the DOM element along the path of
	   *   motion.  If `false` or omitted, no `transform-origin` rule is specified
	   *   and the element is aligned to the path of motion with its top-left
	   *   corner.
	   *   * __iterations__ _(number)_: How many times the generated animation
	   *   should repeat.  If omitted, the animation will loop indefinitely.
	   * @return {string}
	   */
	  Rekapi.DOMRenderer.prototype.toString = function (opts) {
	    opts = opts || {};
	    var animationCSS = [];
	
	    _.each(this.rekapi.getAllActors(), function (actor) {
	      if (actor.context.nodeType === 1) {
	        animationCSS.push(getActorCSS(actor, opts));
	      }
	    });
	
	    return animationCSS.join('\n');
	  };
	
	  // DOMRenderer.prototype.toString-SPECIFIC CODE
	  //
	
	  // CONSTANTS
	  //
	
	  var DEFAULT_FPS = 30;
	  var TRANSFORM_TOKEN = 'TRANSFORM';
	  var VENDOR_TOKEN = 'VENDOR';
	  var VENDOR_PREFIXES = {
	    'microsoft': '-ms-'
	    ,'mozilla': '-moz-'
	    ,'opera': '-o-'
	    ,'w3': ''
	    ,'webkit': '-webkit-'
	  };
	  var BEZIERS = {
	    linear: '.25,.25,.75,.75'
	    ,easeInQuad: '.55,.085,.68,.53'
	    ,easeInCubic: '.55,.055,.675,.19'
	    ,easeInQuart: '.895,.03,.685,.22'
	    ,easeInQuint: '.755,.05,.855,.06'
	    ,easeInSine: '.47,0,.745,.715'
	    ,easeInExpo: '.95,.05,.795,.035'
	    ,easeInCirc: '.6,.04,.98, .335'
	    ,easeOutQuad: '.25,.46,.45,.94'
	    ,easeOutCubic: '.215,.61,.355,1'
	    ,easeOutQuart: '.165,.84,.44,1'
	    ,easeOutQuint: '.23,1,.32,1'
	    ,easeOutSine: '.39,.575,.565,1'
	    ,easeOutExpo: '.19,1,.22,1'
	    ,easeOutCirc: '.075,.82,.165,1'
	    ,easeInOutQuad: '.455,.03,.515,.955'
	    ,easeInOutCubic: '.645,.045,.355,1'
	    ,easeInOutQuart: '.77,0,.175,1'
	    ,easeInOutQuint: '.86,0.07,1'
	    ,easeInOutSine: '.445,.05,.55,.95'
	    ,easeInOutExpo: '1,0,0,1'
	    ,easeInOutCirc: '.785,.135,.15,.86'
	  };
	
	  // TEMPLATES
	  //
	
	  /*!
	   * [0]: vendor
	   * [1]: animation name
	   * [2]: keyframes
	   */
	  var KEYFRAME_TEMPLATE = [
	    '@%skeyframes %s-keyframes {'
	    ,'%s'
	    ,'}'
	  ].join('\n');
	
	  /*!
	   * [0] class name
	   * [1] class attributes
	   */
	  var CLASS_BOILERPLATE = [
	    '.%s {'
	    ,'%s'
	    ,'}'
	  ].join('\n');
	
	  /*!
	   * Creates the CSS `@keyframes` for an individual actor.
	   * @param {Rekapi.Actor} actor
	   * @param {Object=} opts Same as opts for Rekapi.prototype.toCSS.
	   * @return {string}
	   */
	  function getActorCSS (actor, opts) {
	    opts = opts || {};
	    var actorCSS = [];
	    var animName = opts.name || DOMRenderer.getActorClassName(actor);
	    var fps = opts.fps || DEFAULT_FPS;
	    var steps = Math.ceil((actor.rekapi.getAnimationLength() / 1000) * fps);
	    var combineProperties = !canOptimizeAnyKeyframeProperties(actor);
	    var actorClass = generateCSSClass(
	        actor, animName, combineProperties, opts.vendors, opts.iterations,
	        opts.isCentered);
	    var boilerplatedKeyframes = generateBoilerplatedKeyframes(
	        actor, animName, steps, combineProperties, opts.vendors);
	
	    actorCSS.push(actorClass);
	    actorCSS.push(boilerplatedKeyframes);
	
	    return actorCSS.join('\n');
	  }
	
	  // toString-SPECIFIC PRIVATE UTILITY FUNCTIONS
	  //
	
	  /*!
	   * @param {Rekapi.Actor} actor
	   * @param {string} animName
	   * @param {number} steps
	   * @param {boolean} combineProperties
	   * @param {Array.<string>=} opt_vendors
	   * @return {string}
	   */
	  function generateBoilerplatedKeyframes (
	      actor, animName, steps, combineProperties, opt_vendors) {
	
	    var trackNames = actor.getTrackNames();
	    var cssTracks = [];
	
	    if (combineProperties) {
	      cssTracks.push(generateCombinedActorKeyframes(actor, steps));
	    } else {
	      _.each(trackNames, function (trackName) {
	        cssTracks.push(
	          generateActorKeyframes(actor, steps, trackName));
	      });
	    }
	
	    var boilerplatedKeyframes = [];
	
	    if (combineProperties) {
	      boilerplatedKeyframes.push(applyVendorBoilerplates(
	        cssTracks[0], (animName), opt_vendors));
	    } else {
	      _.each(trackNames, function (trackName, i) {
	        boilerplatedKeyframes.push(applyVendorBoilerplates(
	          cssTracks[i], (animName + '-' + trackName), opt_vendors));
	      });
	    }
	
	    boilerplatedKeyframes = boilerplatedKeyframes.join('\n');
	
	    return boilerplatedKeyframes;
	  }
	
	  /*!
	   * @param {string} toKeyframes Generated keyframes to wrap in boilerplates
	   * @param {string} animName
	   * @param {Array.<string>=} opt_vendors Vendor boilerplates to be applied.
	   *     Should be any of the values in Rekapi.util.VENDOR_PREFIXES.
	   * @return {string}
	   */
	  function applyVendorBoilerplates (toKeyframes, animName, opt_vendors) {
	    opt_vendors = opt_vendors || ['w3'];
	    var renderedKeyframes = [];
	
	    _.each(opt_vendors, function (vendor) {
	      var renderedChunk = printf(KEYFRAME_TEMPLATE,
	          [VENDOR_PREFIXES[vendor], animName, toKeyframes]);
	      var prefixedKeyframes =
	          applyVendorPropertyPrefixes(renderedChunk, vendor);
	      renderedKeyframes.push(prefixedKeyframes);
	    });
	
	    return renderedKeyframes.join('\n');
	  }
	
	  /*!
	   * @param {string} keyframes
	   * @param {vendor} vendor
	   * @return {string}
	   */
	  function applyVendorPropertyPrefixes (keyframes, vendor) {
	    var transformRegExp = new RegExp(TRANSFORM_TOKEN, 'g');
	    var prefixedTransformKey = VENDOR_PREFIXES[vendor] + 'transform';
	    var generalPrefixRegExp = new RegExp(VENDOR_TOKEN, 'g');
	    var generalPrefixedKey = VENDOR_PREFIXES[vendor];
	    var prefixedKeyframes = keyframes
	        .replace(generalPrefixRegExp, generalPrefixedKey)
	        .replace(transformRegExp, prefixedTransformKey);
	
	    return prefixedKeyframes;
	  }
	
	  /*!
	   * @param {Rekapi.Actor} actor
	   * @param {string} animName
	   * @param {boolean} combineProperties
	   * @param {Array.<string>=} opt_vendors
	   * @param {number|string=} opt_iterations
	   * @param {boolean=} opt_isCentered
	   * @return {string}
	   */
	  function generateCSSClass (
	      actor, animName, combineProperties, opt_vendors, opt_iterations,
	      opt_isCentered) {
	
	    opt_vendors = opt_vendors || ['w3'];
	    var classAttrs = [];
	    var vendorAttrs;
	
	    _.each(opt_vendors, function (vendor) {
	      vendorAttrs = generateCSSAnimationProperties(
	          actor, animName, vendor, combineProperties, opt_iterations,
	          opt_isCentered);
	      classAttrs.push(vendorAttrs);
	    });
	
	    var boilerplatedClass = printf(CLASS_BOILERPLATE
	        ,[animName, classAttrs.join('\n')]);
	
	    return boilerplatedClass;
	  }
	
	  /*!
	   * @param {Rekapi.Actor} actor
	   * @param {string} animName
	   * @param {string} vendor
	   * @param {boolean} combineProperties
	   * @param {number|string=} opt_iterations
	   * @param {boolean=} opt_isCentered
	   * @return {string}
	   */
	  function generateCSSAnimationProperties (
	      actor, animName, vendor, combineProperties, opt_iterations,
	      opt_isCentered) {
	    var generatedProperties = [];
	    var prefix = VENDOR_PREFIXES[vendor];
	
	    generatedProperties.push(generateAnimationNameProperty(
	          actor, animName, prefix, combineProperties));
	    generatedProperties.push(
	        generateAnimationDurationProperty(actor, prefix));
	    generatedProperties.push(generateAnimationDelayProperty(actor, prefix));
	    generatedProperties.push(generateAnimationFillModeProperty(prefix));
	    generatedProperties.push(generateAnimationTimingFunctionProperty(prefix));
	    generatedProperties.push(generateAnimationIterationProperty(
	        actor.rekapi, prefix, opt_iterations));
	
	    if (opt_isCentered) {
	      generatedProperties.push(generateAnimationCenteringRule(prefix));
	    }
	
	    return generatedProperties.join('\n');
	  }
	
	  /*!
	   * @param {Rekapi.Actor} actor
	   * @param {string} animName
	   * @param {string} prefix
	   * @param {boolean} combineProperties
	   * @return {string}
	   */
	  function generateAnimationNameProperty (
	      actor, animName, prefix, combineProperties) {
	
	    var animationName = printf('  %sanimation-name:', [prefix]);
	
	    var tracks = actor.getTrackNames();
	
	    if (combineProperties) {
	      animationName += printf(' %s-keyframes;', [animName]);
	    } else {
	      _.each(tracks, function (trackName) {
	        animationName += printf(' %s-%s-keyframes,', [animName, trackName]);
	      });
	      animationName = animationName.slice(0, animationName.length - 1);
	      animationName += ';';
	    }
	
	    return animationName;
	  }
	
	  /*!
	   * @param {Rekapi.Actor} actor
	   * @param {string} animName
	   * @return {string}
	   */
	  function generateAnimationDurationProperty (actor, prefix) {
	    return printf('  %sanimation-duration: %sms;'
	        ,[prefix, actor.getEnd() - actor.getStart()]);
	  }
	
	  /*!
	   * @param {Rekapi.Actor} actor
	   * @param {number|string} delay
	   * @return {string}
	   */
	  function generateAnimationDelayProperty (actor, prefix) {
	    return printf('  %sanimation-delay: %sms;', [prefix, actor.getStart()]);
	  }
	
	  /*!
	   * @param {string} prefix
	   * @return {string}
	   */
	  function generateAnimationFillModeProperty (prefix) {
	    return printf('  %sanimation-fill-mode: forwards;', [prefix]);
	  }
	
	  /*!
	   * @param {string} prefix
	   * @return {string}
	   */
	  function generateAnimationTimingFunctionProperty (prefix) {
	    return printf('  %sanimation-timing-function: linear;', [prefix]);
	  }
	
	  /*!
	   * @param {Rekapi} rekapi
	   * @param {string} prefix
	   * @param {number|string=} opt_iterations
	   * @return {string}
	   */
	  function generateAnimationIterationProperty (rekapi, prefix, opt_iterations) {
	    var iterationCount;
	    if (opt_iterations) {
	      iterationCount = opt_iterations;
	    } else {
	      iterationCount = rekapi._timesToIterate === -1
	        ? 'infinite'
	        : rekapi._timesToIterate;
	    }
	
	    var ruleTemplate = '  %sanimation-iteration-count: %s;';
	
	    return printf(ruleTemplate, [prefix, iterationCount]);
	  }
	
	  /*!
	   * @param {string} prefix
	   * @return {string}
	   */
	  function generateAnimationCenteringRule (prefix) {
	    return printf('  %stransform-origin: 0 0;', [prefix]);
	  }
	
	  // OPTIMIZED OUTPUT GENERATOR FUNCTIONS
	  //
	
	  /*!
	   * @param {Rekapi.KeyframeProperty} property
	   * @return {boolean}
	   */
	  function canOptimizeKeyframeProperty (property) {
	    var canOptimize = false;
	    var nextProperty = property.nextProperty;
	
	    if (nextProperty) {
	      if (isSegmentAWait(property, nextProperty)) {
	        return true;
	      }
	
	      var easingChunks = nextProperty.easing.split(' ');
	
	      var i = 0, len = easingChunks.length;
	      var previousChunk = easingChunks[0];
	      var currentChunk;
	      for (i; i < len; i++) {
	        currentChunk = easingChunks[i];
	        if (!(BEZIERS[currentChunk])
	            || previousChunk !== currentChunk) {
	          canOptimize = false;
	          break;
	        } else {
	          canOptimize = true;
	        }
	
	        previousChunk = currentChunk;
	      }
	    }
	
	    return canOptimize;
	  }
	
	  /*!
	   * @param {Rekapi.KeyframeProperty} property
	   * @param {Rekapi.KeyframeProperty} nextProperty
	   * @return {boolean}
	   */
	  function isSegmentAWait (property, nextProperty) {
	    if (property.name === nextProperty.name &&
	        property.value === nextProperty.value) {
	      return true;
	    }
	
	    return false;
	  }
	
	  /*!
	   * @param {Rekapi.Actor} actor
	   * @return {boolean}
	   */
	  function canOptimizeAnyKeyframeProperties (actor) {
	    return _.any(actor._keyframeProperties, canOptimizeKeyframeProperty);
	  }
	
	  /*!
	   * @param {Rekapi.KeyframeProperty} property
	   * @param {number} fromPercent
	   * @param {number} toPercent
	   * @return {string}
	   */
	  function generateOptimizedKeyframeSegment (
	      property, fromPercent, toPercent) {
	
	    var accumulator = [];
	    var generalName = property.name;
	
	    if (property.name === 'transform') {
	      generalName = TRANSFORM_TOKEN;
	    }
	
	    var easingFormula = BEZIERS[property.nextProperty.easing.split(' ')[0]];
	    var timingFnChunk = printf('cubic-bezier(%s)', [easingFormula]);
	
	    var adjustedFromPercent = isInt(fromPercent) ?
	        fromPercent : fromPercent.toFixed(2);
	    var adjustedToPercent = isInt(toPercent) ?
	        toPercent : toPercent.toFixed(2);
	
	    accumulator.push(printf('  %s% {%s:%s;%sanimation-timing-function: %s;}',
	          [adjustedFromPercent, generalName, property.value, VENDOR_TOKEN
	          ,timingFnChunk]));
	    accumulator.push(printf('  %s% {%s:%s;}',
	          [adjustedToPercent, generalName, property.nextProperty.value]));
	
	    return accumulator.join('\n');
	  }
	
	  // UN-OPTIMIZED OUTPUT GENERATOR FUNCTIONS
	  //
	
	  /*!
	   * @param {Rekapi.Actor} actor
	   * @param {number} steps
	   * @param {string} track
	   * @return {string}
	   */
	  function generateActorKeyframes (actor, steps, track) {
	    var accumulator = [];
	    var actorEnd = actor.getEnd();
	    var actorStart = actor.getStart();
	    var actorLength = actor.getLength();
	    var leadingWait = simulateLeadingWait(actor, track, actorStart);
	
	    if (leadingWait) {
	      accumulator.push(leadingWait);
	    }
	
	    var previousSegmentWasOptimized = false;
	    _.each(actor._propertyTracks[track], function (prop, propName) {
	      var fromPercent = calculateStepPercent(prop, actorStart, actorLength);
	      var nextProp = prop.nextProperty;
	
	      var toPercent, increments, incrementSize;
	      if (nextProp) {
	        toPercent = calculateStepPercent(nextProp, actorStart, actorLength);
	        var delta = toPercent - fromPercent;
	        increments = Math.floor((delta / 100) * steps) || 1;
	        incrementSize = delta / increments;
	      } else {
	        toPercent = 100;
	        increments = 1;
	        incrementSize = 1;
	      }
	
	      var trackSegment;
	      if (nextProp && isSegmentAWait(prop, nextProp)) {
	        trackSegment = generateActorTrackWaitSegment(
	            actor, actorStart, prop, nextProp, fromPercent, toPercent);
	
	        if (previousSegmentWasOptimized) {
	          trackSegment.shift();
	        }
	
	        previousSegmentWasOptimized = false;
	
	      } else if (canOptimizeKeyframeProperty(prop)) {
	        trackSegment = generateOptimizedKeyframeSegment(
	            prop, fromPercent, toPercent);
	
	        // If this and the previous segment are optimized, remove the
	        // destination keyframe of the previous step.  The starting keyframe of
	        // the newest segment makes it redundant.
	        if (previousSegmentWasOptimized) {
	          var accumulatorLength = accumulator.length;
	          var previousTrackSegment = accumulator[accumulatorLength - 1];
	          var optimizedPreviousTrackSegment =
	              previousTrackSegment.split('\n')[0];
	          accumulator[accumulatorLength - 1] = optimizedPreviousTrackSegment;
	        }
	
	        previousSegmentWasOptimized = true;
	      } else {
	        trackSegment = generateActorTrackSegment(
	            actor, increments, incrementSize, actorStart, fromPercent, prop);
	
	        if (previousSegmentWasOptimized) {
	          trackSegment.shift();
	        }
	
	        if (trackSegment.length) {
	          trackSegment = trackSegment.join('\n');
	        }
	
	        previousSegmentWasOptimized = false;
	      }
	
	      if (trackSegment.length) {
	        accumulator.push(trackSegment);
	      }
	    });
	
	    var trailingWait =
	        simulateTrailingWait(actor, track, actorStart, actorEnd);
	
	    if (trailingWait) {
	      accumulator.push(trailingWait);
	    }
	
	    return accumulator.join('\n');
	  }
	
	  /*!
	   * @param {Rekapi.Actor} actor
	   * @param {number} steps
	   * @return {string}
	   */
	  function generateCombinedActorKeyframes (actor, steps) {
	    return generateActorTrackSegment(
	        actor, steps + 1, 100 / steps, 0, 0).join('\n');
	  }
	
	  /*!
	   * @param {Rekapi.Actor} actor
	   * @param {string} track
	   * @param {number} actorStart
	   * @return {string|undefined}
	   */
	  function simulateLeadingWait (actor, track, actorStart) {
	    var firstProp = actor._propertyTracks[track][0];
	
	    if (typeof firstProp !== 'undefined'
	        && firstProp.millisecond !== actorStart) {
	      var fakeFirstProp = generateActorTrackSegment(
	          actor, 1, 1, firstProp.millisecond, 0, firstProp);
	      return fakeFirstProp.join('\n');
	    }
	  }
	
	  /*!
	   * @param {Rekapi.Actor} actor
	   * @param {string} track
	   * @param {number} actorStart
	   * @param {number} actorEnd
	   * @return {string|undefined}
	   */
	  function simulateTrailingWait (actor, track, actorStart, actorEnd) {
	    var lastProp = _.last(actor._propertyTracks[track]);
	
	    if (typeof lastProp !== 'undefined'
	        && lastProp.millisecond !== actorEnd) {
	      var fakeLastProp = generateActorTrackSegment(
	          actor, 1, 1, actorStart, 100, lastProp);
	      return fakeLastProp.join('\n');
	    }
	  }
	
	  /*!
	   * @param {Rekapi.KeyframeProperty} property
	   * @param {number} actorStart
	   * @param {number} actorLength
	   * @return {number}
	   */
	  function calculateStepPercent (property, actorStart, actorLength) {
	    return ((property.millisecond - actorStart) / actorLength) * 100;
	  }
	
	  /*!
	   * @param {Rekapi.Actor} actor
	   * @param {number} increments
	   * @param {number} incrementSize
	   * @param {number} actorStart
	   * @param {number} fromPercent
	   * @param {Rekapi.KeyframeProperty=} opt_fromProp
	   * @return {Array.<string>}
	   */
	  function generateActorTrackSegment (
	      actor, increments, incrementSize, actorStart, fromPercent,
	      opt_fromProp) {
	
	    var accumulator = [];
	    var actorLength = actor.getLength();
	    var i, adjustedPercent, stepPrefix;
	
	    for (i = 0; i < increments; i++) {
	      adjustedPercent = fromPercent + (i * incrementSize);
	      actor._updateState(
	          ((adjustedPercent / 100) * actorLength) + actorStart);
	      stepPrefix = +adjustedPercent.toFixed(2) + '% ';
	
	      if (opt_fromProp) {
	        accumulator.push(
	            '  ' + stepPrefix + serializeActorStep(actor, opt_fromProp.name));
	      } else {
	        accumulator.push('  ' + stepPrefix + serializeActorStep(actor));
	      }
	    }
	
	    return accumulator;
	  }
	
	  /*!
	   * @param {Rekapi.Actor} actor
	   * @param {number} actorStart
	   * @param {Rekapi.KeyframeProperty} fromProp
	   * @param {Rekapi.KeyframeProperty} toProp
	   * @param {number} fromPercent
	   * @param {number} toPercent
	   * @return {Array.<string>}
	   */
	  function generateActorTrackWaitSegment (
	      actor, actorStart, fromProp, toProp, fromPercent, toPercent) {
	    var segment = generateActorTrackSegment(
	        actor, 1, toPercent - fromPercent, actorStart, fromPercent, fromProp);
	    return segment;
	  }
	
	  /*!
	   * @param {Rekapi.Actor} actor
	   * @param {string=} opt_targetProp
	   * @return {string}
	   */
	  function serializeActorStep (actor, opt_targetProp) {
	    var serializedProps = ['{'];
	
	    var propsToSerialize;
	    if (opt_targetProp) {
	      propsToSerialize = {};
	
	      var currentPropState = actor.get()[opt_targetProp];
	      if (typeof currentPropState !== 'undefined') {
	        propsToSerialize[opt_targetProp] = currentPropState;
	      }
	    } else {
	      propsToSerialize = actor.get();
	    }
	
	    var printVal;
	    _.each(propsToSerialize, function (val, key) {
	      printVal = val;
	      var printKey = key;
	
	      if (key === 'transform') {
	        printKey = TRANSFORM_TOKEN;
	      }
	
	      serializedProps.push(printKey + ':' + printVal + ';');
	    });
	
	    serializedProps.push('}');
	    return serializedProps.join('');
	  }
	
	  // Exposes helper functions for unit testing.  Gets compiled away in build
	  // process.
	  if (REKAPI_DEBUG) {
	    Rekapi._private.cssRenderer = {
	      'TRANSFORM_TOKEN': TRANSFORM_TOKEN
	      ,'VENDOR_TOKEN': VENDOR_TOKEN
	      ,'applyVendorBoilerplates': applyVendorBoilerplates
	      ,'applyVendorPropertyPrefixes': applyVendorPropertyPrefixes
	      ,'generateBoilerplatedKeyframes': generateBoilerplatedKeyframes
	      ,'generateCSSClass': generateCSSClass
	      ,'generateCSSAnimationProperties': generateCSSAnimationProperties
	      ,'generateActorKeyframes': generateActorKeyframes
	      ,'generateActorTrackSegment': generateActorTrackSegment
	      ,'serializeActorStep': serializeActorStep
	      ,'generateAnimationNameProperty': generateAnimationNameProperty
	      ,'generateAnimationDurationProperty': generateAnimationDurationProperty
	      ,'generateAnimationDelayProperty': generateAnimationDelayProperty
	      ,'generateAnimationFillModeProperty': generateAnimationFillModeProperty
	      ,'generateAnimationTimingFunctionProperty':
	          generateAnimationTimingFunctionProperty
	      ,'generateAnimationIterationProperty': generateAnimationIterationProperty
	      ,'generateAnimationCenteringRule': generateAnimationCenteringRule
	      ,'simulateLeadingWait': simulateLeadingWait
	      ,'simulateTrailingWait': simulateTrailingWait
	      ,'canOptimizeKeyframeProperty': canOptimizeKeyframeProperty
	      ,'canOptimizeAnyKeyframeProperties': canOptimizeAnyKeyframeProperties
	      ,'generateOptimizedKeyframeSegment': generateOptimizedKeyframeSegment
	      ,'getActorCSS': getActorCSS
	    };
	  }
	});
	
	var rekapi = function (global, deps) {
	
	  'use strict';
	
	  // If `deps` is defined, it means that Rekapi is loaded via AMD.
	  // Don't use global context in this case so that the global scope
	  // is not polluted by the Rekapi object.
	  var context = deps ? {} : global;
	
	  var _ = (deps && deps.underscore) ? deps.underscore : context._;
	  var Tweenable = (deps && deps.Tweenable) ?
	      deps.Tweenable : context.Tweenable;
	
	  rekapiCore(context, _, Tweenable);
	
	  _.each(rekapiModules, function (module) {
	    module(context);
	  });
	
	  return context.Rekapi;
	};
	
	if (true) {
	  var underscoreAlreadyInUse = (typeof _ !== 'undefined');
	
	  // Expose Rekapi as an AMD module if it's loaded with RequireJS or similar.
	  // Shifty and Underscore are set as dependencies of this module.
	  //
	  // The rekapi module is anonymous so that it can be required with any name.
	  // Example: define(['vendor/rekapi.min'], function(Rekapi) { ... });
	  !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(164), __webpack_require__(123)], __WEBPACK_AMD_DEFINE_RESULT__ = function (Tweenable, Underscore) {
	    var underscoreSupportsAMD = (Underscore != null);
	    var deps = {Tweenable: Tweenable,
	      // Some versions of Underscore.js support AMD, others don't.
	      // If not, use the `_` global.
	      underscore: underscoreSupportsAMD ? Underscore : _};
	    var Rekapi = rekapi({}, deps);
	
	    if (REKAPI_DEBUG) {
	      Rekapi.underscore_version = deps.underscore.VERSION;
	    }
	
	    if (!underscoreAlreadyInUse && underscoreSupportsAMD) {
	      // Prevent Underscore from polluting the global scope.
	      // This global can be safely removed since Rekapi keeps its own reference
	      // to Underscore via the `deps` object passed earlier as an argument.
	      this._ = undefined;
	    }
	
	    return Rekapi;
	  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
	  // Load Rekapi normally (creating a Rekapi global) if not using an AMD loader.
	
	  // Note: `global` is not defined when running unit tests. Pass `this` instead.
	  rekapi(this);
	}
	
	} (this));


/***/ },

/***/ 164:
/***/ function(module, exports, __webpack_require__) {

	/*! shifty - v1.2.2 - 2014-10-09 - http://jeremyckahn.github.io/shifty */
	;(function (root) {
	
	/*!
	 * Shifty Core
	 * By Jeremy Kahn - jeremyckahn@gmail.com
	 */
	
	// UglifyJS define hack.  Used for unit testing.  Contents of this if are
	// compiled away.
	if (typeof SHIFTY_DEBUG_NOW === 'undefined') {
	  SHIFTY_DEBUG_NOW = function () {
	    return +new Date();
	  };
	}
	
	var Tweenable = (function () {
	
	  'use strict';
	
	  // Aliases that get defined later in this function
	  var formula;
	
	  // CONSTANTS
	  var DEFAULT_SCHEDULE_FUNCTION;
	  var DEFAULT_EASING = 'linear';
	  var DEFAULT_DURATION = 500;
	  var UPDATE_TIME = 1000 / 60;
	
	  var _now = Date.now
	       ? Date.now
	       : function () {return +new Date();};
	
	  var now = SHIFTY_DEBUG_NOW
	       ? SHIFTY_DEBUG_NOW
	       : _now;
	
	  if (typeof window !== 'undefined') {
	    // requestAnimationFrame() shim by Paul Irish (modified for Shifty)
	    // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
	    DEFAULT_SCHEDULE_FUNCTION = window.requestAnimationFrame
	       || window.webkitRequestAnimationFrame
	       || window.oRequestAnimationFrame
	       || window.msRequestAnimationFrame
	       || (window.mozCancelRequestAnimationFrame
	       && window.mozRequestAnimationFrame)
	       || setTimeout;
	  } else {
	    DEFAULT_SCHEDULE_FUNCTION = setTimeout;
	  }
	
	  function noop () {
	    // NOOP!
	  }
	
	  /*!
	   * Handy shortcut for doing a for-in loop. This is not a "normal" each
	   * function, it is optimized for Shifty.  The iterator function only receives
	   * the property name, not the value.
	   * @param {Object} obj
	   * @param {Function(string)} fn
	   */
	  function each (obj, fn) {
	    var key;
	    for (key in obj) {
	      if (Object.hasOwnProperty.call(obj, key)) {
	        fn(key);
	      }
	    }
	  }
	
	  /*!
	   * Perform a shallow copy of Object properties.
	   * @param {Object} targetObject The object to copy into
	   * @param {Object} srcObject The object to copy from
	   * @return {Object} A reference to the augmented `targetObj` Object
	   */
	  function shallowCopy (targetObj, srcObj) {
	    each(srcObj, function (prop) {
	      targetObj[prop] = srcObj[prop];
	    });
	
	    return targetObj;
	  }
	
	  /*!
	   * Copies each property from src onto target, but only if the property to
	   * copy to target is undefined.
	   * @param {Object} target Missing properties in this Object are filled in
	   * @param {Object} src
	   */
	  function defaults (target, src) {
	    each(src, function (prop) {
	      if (typeof target[prop] === 'undefined') {
	        target[prop] = src[prop];
	      }
	    });
	  }
	
	  /*!
	   * Calculates the interpolated tween values of an Object for a given
	   * timestamp.
	   * @param {Number} forPosition The position to compute the state for.
	   * @param {Object} currentState Current state properties.
	   * @param {Object} originalState: The original state properties the Object is
	   * tweening from.
	   * @param {Object} targetState: The destination state properties the Object
	   * is tweening to.
	   * @param {number} duration: The length of the tween in milliseconds.
	   * @param {number} timestamp: The UNIX epoch time at which the tween began.
	   * @param {Object} easing: This Object's keys must correspond to the keys in
	   * targetState.
	   */
	  function tweenProps (forPosition, currentState, originalState, targetState,
	    duration, timestamp, easing) {
	    var normalizedPosition = (forPosition - timestamp) / duration;
	
	    var prop;
	    for (prop in currentState) {
	      if (currentState.hasOwnProperty(prop)) {
	        currentState[prop] = tweenProp(originalState[prop],
	          targetState[prop], formula[easing[prop]], normalizedPosition);
	      }
	    }
	
	    return currentState;
	  }
	
	  /*!
	   * Tweens a single property.
	   * @param {number} start The value that the tween started from.
	   * @param {number} end The value that the tween should end at.
	   * @param {Function} easingFunc The easing curve to apply to the tween.
	   * @param {number} position The normalized position (between 0.0 and 1.0) to
	   * calculate the midpoint of 'start' and 'end' against.
	   * @return {number} The tweened value.
	   */
	  function tweenProp (start, end, easingFunc, position) {
	    return start + (end - start) * easingFunc(position);
	  }
	
	  /*!
	   * Applies a filter to Tweenable instance.
	   * @param {Tweenable} tweenable The `Tweenable` instance to call the filter
	   * upon.
	   * @param {String} filterName The name of the filter to apply.
	   */
	  function applyFilter (tweenable, filterName) {
	    var filters = Tweenable.prototype.filter;
	    var args = tweenable._filterArgs;
	
	    each(filters, function (name) {
	      if (typeof filters[name][filterName] !== 'undefined') {
	        filters[name][filterName].apply(tweenable, args);
	      }
	    });
	  }
	
	  var timeoutHandler_endTime;
	  var timeoutHandler_currentTime;
	  var timeoutHandler_isEnded;
	  /*!
	   * Handles the update logic for one step of a tween.
	   * @param {Tweenable} tweenable
	   * @param {number} timestamp
	   * @param {number} duration
	   * @param {Object} currentState
	   * @param {Object} originalState
	   * @param {Object} targetState
	   * @param {Object} easing
	   * @param {Function} step
	   * @param {Function(Function,number)}} schedule
	   */
	  function timeoutHandler (tweenable, timestamp, duration, currentState,
	    originalState, targetState, easing, step, schedule) {
	    timeoutHandler_endTime = timestamp + duration;
	    timeoutHandler_currentTime = Math.min(now(), timeoutHandler_endTime);
	    timeoutHandler_isEnded = timeoutHandler_currentTime >= timeoutHandler_endTime;
	
	    if (tweenable.isPlaying() && !timeoutHandler_isEnded) {
	      schedule(tweenable._timeoutHandler, UPDATE_TIME);
	
	      applyFilter(tweenable, 'beforeTween');
	      tweenProps(timeoutHandler_currentTime, currentState, originalState,
	        targetState, duration, timestamp, easing);
	      applyFilter(tweenable, 'afterTween');
	
	      step(currentState);
	    } else if (timeoutHandler_isEnded) {
	      step(targetState);
	      tweenable.stop(true);
	    }
	  }
	
	
	  /*!
	   * Creates a usable easing Object from either a string or another easing
	   * Object.  If `easing` is an Object, then this function clones it and fills
	   * in the missing properties with "linear".
	   * @param {Object} fromTweenParams
	   * @param {Object|string} easing
	   */
	  function composeEasingObject (fromTweenParams, easing) {
	    var composedEasing = {};
	
	    if (typeof easing === 'string') {
	      each(fromTweenParams, function (prop) {
	        composedEasing[prop] = easing;
	      });
	    } else {
	      each(fromTweenParams, function (prop) {
	        if (!composedEasing[prop]) {
	          composedEasing[prop] = easing[prop] || DEFAULT_EASING;
	        }
	      });
	    }
	
	    return composedEasing;
	  }
	
	  /**
	   * Tweenable constructor.
	   * @param {Object=} opt_initialState The values that the initial tween should start at if a "from" object is not provided to Tweenable#tween.
	   * @param {Object=} opt_config See Tweenable.prototype.setConfig()
	   * @constructor
	   */
	  function Tweenable (opt_initialState, opt_config) {
	    this._currentState = opt_initialState || {};
	    this._configured = false;
	    this._scheduleFunction = DEFAULT_SCHEDULE_FUNCTION;
	
	    // To prevent unnecessary calls to setConfig do not set default configuration here.
	    // Only set default configuration immediately before tweening if none has been set.
	    if (typeof opt_config !== 'undefined') {
	      this.setConfig(opt_config);
	    }
	  }
	
	  /**
	   * Configure and start a tween.
	   * @param {Object=} opt_config See Tweenable.prototype.setConfig()
	   * @return {Tweenable}
	   */
	  Tweenable.prototype.tween = function (opt_config) {
	    if (this._isTweening) {
	      return this;
	    }
	
	    // Only set default config if no configuration has been set previously and none is provided now.
	    if (opt_config !== undefined || !this._configured) {
	      this.setConfig(opt_config);
	    }
	
	    this._start(this.get());
	    return this.resume();
	  };
	
	  /**
	   * Sets the tween configuration. `config` may have the following options:
	   *
	   * - __from__ (_Object=_): Starting position.  If omitted, the current state is used.
	   * - __to__ (_Object=_): Ending position.
	   * - __duration__ (_number=_): How many milliseconds to animate for.
	   * - __start__ (_Function(Object)=_): Function to execute when the tween begins.  Receives the state of the tween as the only parameter.
	   * - __step__ (_Function(Object)=_): Function to execute on every tick.  Receives the state of the tween as the only parameter.  This function is not called on the final step of the animation, but `finish` is.
	   * - __finish__ (_Function(Object)=_): Function to execute upon tween completion.  Receives the state of the tween as the only parameter.
	   * - __easing__ (_Object|string=_): Easing curve name(s) to use for the tween.
	   * @param {Object} config
	   * @return {Tweenable}
	   */
	  Tweenable.prototype.setConfig = function (config) {
	    config = config || {};
	    this._configured = true;
	
	    // Init the internal state
	    this._pausedAtTime = null;
	    this._start = config.start || noop;
	    this._step = config.step || noop;
	    this._finish = config.finish || noop;
	    this._duration = config.duration || DEFAULT_DURATION;
	    this._currentState = config.from || this.get();
	    this._originalState = this.get();
	    this._targetState = config.to || this.get();
	    this._timestamp = now();
	
	    // Aliases used below
	    var currentState = this._currentState;
	    var targetState = this._targetState;
	
	    // Ensure that there is always something to tween to.
	    defaults(targetState, currentState);
	
	    this._easing = composeEasingObject(
	      currentState, config.easing || DEFAULT_EASING);
	
	    this._filterArgs =
	      [currentState, this._originalState, targetState, this._easing];
	
	    applyFilter(this, 'tweenCreated');
	    return this;
	  };
	
	  /**
	   * Gets the current state.
	   * @return {Object}
	   */
	  Tweenable.prototype.get = function () {
	    return shallowCopy({}, this._currentState);
	  };
	
	  /**
	   * Sets the current state.
	   * @param {Object} state
	   */
	  Tweenable.prototype.set = function (state) {
	    this._currentState = state;
	  };
	
	  /**
	   * Pauses a tween.  Paused tweens can be resumed from the point at which they were paused.  This is different than [`stop()`](#stop), as that method causes a tween to start over when it is resumed.
	   * @return {Tweenable}
	   */
	  Tweenable.prototype.pause = function () {
	    this._pausedAtTime = now();
	    this._isPaused = true;
	    return this;
	  };
	
	  /**
	   * Resumes a paused tween.
	   * @return {Tweenable}
	   */
	  Tweenable.prototype.resume = function () {
	    if (this._isPaused) {
	      this._timestamp += now() - this._pausedAtTime;
	    }
	
	    this._isPaused = false;
	    this._isTweening = true;
	
	    var self = this;
	    this._timeoutHandler = function () {
	      timeoutHandler(self, self._timestamp, self._duration, self._currentState,
	        self._originalState, self._targetState, self._easing, self._step,
	        self._scheduleFunction);
	    };
	
	    this._timeoutHandler();
	
	    return this;
	  };
	
	  /**
	   * Stops and cancels a tween.
	   * @param {boolean=} gotoEnd If false or omitted, the tween just stops at its current state, and the "finish" handler is not invoked.  If true, the tweened object's values are instantly set to the target values, and "finish" is invoked.
	   * @return {Tweenable}
	   */
	  Tweenable.prototype.stop = function (gotoEnd) {
	    this._isTweening = false;
	    this._isPaused = false;
	    this._timeoutHandler = noop;
	
	    if (gotoEnd) {
	      shallowCopy(this._currentState, this._targetState);
	      applyFilter(this, 'afterTweenEnd');
	      this._finish.call(this, this._currentState);
	    }
	
	    return this;
	  };
	
	  /**
	   * Returns whether or not a tween is running.
	   * @return {boolean}
	   */
	  Tweenable.prototype.isPlaying = function () {
	    return this._isTweening && !this._isPaused;
	  };
	
	  /**
	   * Sets a custom schedule function.
	   *
	   * If a custom function is not set the default one is used [`requestAnimationFrame`](https://developer.mozilla.org/en-US/docs/Web/API/window.requestAnimationFrame) if available, otherwise [`setTimeout`](https://developer.mozilla.org/en-US/docs/Web/API/Window.setTimeout)).
	   *
	   * @param {Function(Function,number)} scheduleFunction The function to be called to schedule the next frame to be rendered
	   */
	  Tweenable.prototype.setScheduleFunction = function (scheduleFunction) {
	    this._scheduleFunction = scheduleFunction;
	  };
	
	  /**
	   * `delete`s all "own" properties.  Call this when the `Tweenable` instance is no longer needed to free memory.
	   */
	  Tweenable.prototype.dispose = function () {
	    var prop;
	    for (prop in this) {
	      if (this.hasOwnProperty(prop)) {
	        delete this[prop];
	      }
	    }
	  };
	
	  /*!
	   * Filters are used for transforming the properties of a tween at various
	   * points in a Tweenable's life cycle.  See the README for more info on this.
	   */
	  Tweenable.prototype.filter = {};
	
	  /*!
	   * This object contains all of the tweens available to Shifty.  It is extendible - simply attach properties to the Tweenable.prototype.formula Object following the same format at linear.
	   *
	   * `pos` should be a normalized `number` (between 0 and 1).
	   */
	  Tweenable.prototype.formula = {
	    linear: function (pos) {
	      return pos;
	    }
	  };
	
	  formula = Tweenable.prototype.formula;
	
	  shallowCopy(Tweenable, {
	    'now': now
	    ,'each': each
	    ,'tweenProps': tweenProps
	    ,'tweenProp': tweenProp
	    ,'applyFilter': applyFilter
	    ,'shallowCopy': shallowCopy
	    ,'defaults': defaults
	    ,'composeEasingObject': composeEasingObject
	  });
	
	  // `root` is provided in the intro/outro files.
	
	  // A hook used for unit testing.
	  if (typeof SHIFTY_DEBUG_NOW === 'function') {
	    root.timeoutHandler = timeoutHandler;
	  }
	
	  // Bootstrap Tweenable appropriately for the environment.
	  if (true) {
	    // CommonJS
	    module.exports = Tweenable;
	  } else if (typeof define === 'function' && define.amd) {
	    // AMD
	    define(function () {return Tweenable;});
	  } else if (typeof root.Tweenable === 'undefined') {
	    // Browser: Make `Tweenable` globally accessible.
	    root.Tweenable = Tweenable;
	  }
	
	  return Tweenable;
	
	} ());
	
	/*!
	 * All equations are adapted from Thomas Fuchs' [Scripty2](https://github.com/madrobby/scripty2/blob/master/src/effects/transitions/penner.js).
	 *
	 * Based on Easing Equations (c) 2003 [Robert Penner](http://www.robertpenner.com/), all rights reserved. This work is [subject to terms](http://www.robertpenner.com/easing_terms_of_use.html).
	 */
	
	/*!
	 *  TERMS OF USE - EASING EQUATIONS
	 *  Open source under the BSD License.
	 *  Easing Equations (c) 2003 Robert Penner, all rights reserved.
	 */
	
	;(function () {
	
	  Tweenable.shallowCopy(Tweenable.prototype.formula, {
	    easeInQuad: function (pos) {
	      return Math.pow(pos, 2);
	    },
	
	    easeOutQuad: function (pos) {
	      return -(Math.pow((pos - 1), 2) - 1);
	    },
	
	    easeInOutQuad: function (pos) {
	      if ((pos /= 0.5) < 1) {return 0.5 * Math.pow(pos,2);}
	      return -0.5 * ((pos -= 2) * pos - 2);
	    },
	
	    easeInCubic: function (pos) {
	      return Math.pow(pos, 3);
	    },
	
	    easeOutCubic: function (pos) {
	      return (Math.pow((pos - 1), 3) + 1);
	    },
	
	    easeInOutCubic: function (pos) {
	      if ((pos /= 0.5) < 1) {return 0.5 * Math.pow(pos,3);}
	      return 0.5 * (Math.pow((pos - 2),3) + 2);
	    },
	
	    easeInQuart: function (pos) {
	      return Math.pow(pos, 4);
	    },
	
	    easeOutQuart: function (pos) {
	      return -(Math.pow((pos - 1), 4) - 1);
	    },
	
	    easeInOutQuart: function (pos) {
	      if ((pos /= 0.5) < 1) {return 0.5 * Math.pow(pos,4);}
	      return -0.5 * ((pos -= 2) * Math.pow(pos,3) - 2);
	    },
	
	    easeInQuint: function (pos) {
	      return Math.pow(pos, 5);
	    },
	
	    easeOutQuint: function (pos) {
	      return (Math.pow((pos - 1), 5) + 1);
	    },
	
	    easeInOutQuint: function (pos) {
	      if ((pos /= 0.5) < 1) {return 0.5 * Math.pow(pos,5);}
	      return 0.5 * (Math.pow((pos - 2),5) + 2);
	    },
	
	    easeInSine: function (pos) {
	      return -Math.cos(pos * (Math.PI / 2)) + 1;
	    },
	
	    easeOutSine: function (pos) {
	      return Math.sin(pos * (Math.PI / 2));
	    },
	
	    easeInOutSine: function (pos) {
	      return (-0.5 * (Math.cos(Math.PI * pos) - 1));
	    },
	
	    easeInExpo: function (pos) {
	      return (pos === 0) ? 0 : Math.pow(2, 10 * (pos - 1));
	    },
	
	    easeOutExpo: function (pos) {
	      return (pos === 1) ? 1 : -Math.pow(2, -10 * pos) + 1;
	    },
	
	    easeInOutExpo: function (pos) {
	      if (pos === 0) {return 0;}
	      if (pos === 1) {return 1;}
	      if ((pos /= 0.5) < 1) {return 0.5 * Math.pow(2,10 * (pos - 1));}
	      return 0.5 * (-Math.pow(2, -10 * --pos) + 2);
	    },
	
	    easeInCirc: function (pos) {
	      return -(Math.sqrt(1 - (pos * pos)) - 1);
	    },
	
	    easeOutCirc: function (pos) {
	      return Math.sqrt(1 - Math.pow((pos - 1), 2));
	    },
	
	    easeInOutCirc: function (pos) {
	      if ((pos /= 0.5) < 1) {return -0.5 * (Math.sqrt(1 - pos * pos) - 1);}
	      return 0.5 * (Math.sqrt(1 - (pos -= 2) * pos) + 1);
	    },
	
	    easeOutBounce: function (pos) {
	      if ((pos) < (1 / 2.75)) {
	        return (7.5625 * pos * pos);
	      } else if (pos < (2 / 2.75)) {
	        return (7.5625 * (pos -= (1.5 / 2.75)) * pos + 0.75);
	      } else if (pos < (2.5 / 2.75)) {
	        return (7.5625 * (pos -= (2.25 / 2.75)) * pos + 0.9375);
	      } else {
	        return (7.5625 * (pos -= (2.625 / 2.75)) * pos + 0.984375);
	      }
	    },
	
	    easeInBack: function (pos) {
	      var s = 1.70158;
	      return (pos) * pos * ((s + 1) * pos - s);
	    },
	
	    easeOutBack: function (pos) {
	      var s = 1.70158;
	      return (pos = pos - 1) * pos * ((s + 1) * pos + s) + 1;
	    },
	
	    easeInOutBack: function (pos) {
	      var s = 1.70158;
	      if ((pos /= 0.5) < 1) {return 0.5 * (pos * pos * (((s *= (1.525)) + 1) * pos - s));}
	      return 0.5 * ((pos -= 2) * pos * (((s *= (1.525)) + 1) * pos + s) + 2);
	    },
	
	    elastic: function (pos) {
	      return -1 * Math.pow(4,-8 * pos) * Math.sin((pos * 6 - 1) * (2 * Math.PI) / 2) + 1;
	    },
	
	    swingFromTo: function (pos) {
	      var s = 1.70158;
	      return ((pos /= 0.5) < 1) ? 0.5 * (pos * pos * (((s *= (1.525)) + 1) * pos - s)) :
	          0.5 * ((pos -= 2) * pos * (((s *= (1.525)) + 1) * pos + s) + 2);
	    },
	
	    swingFrom: function (pos) {
	      var s = 1.70158;
	      return pos * pos * ((s + 1) * pos - s);
	    },
	
	    swingTo: function (pos) {
	      var s = 1.70158;
	      return (pos -= 1) * pos * ((s + 1) * pos + s) + 1;
	    },
	
	    bounce: function (pos) {
	      if (pos < (1 / 2.75)) {
	        return (7.5625 * pos * pos);
	      } else if (pos < (2 / 2.75)) {
	        return (7.5625 * (pos -= (1.5 / 2.75)) * pos + 0.75);
	      } else if (pos < (2.5 / 2.75)) {
	        return (7.5625 * (pos -= (2.25 / 2.75)) * pos + 0.9375);
	      } else {
	        return (7.5625 * (pos -= (2.625 / 2.75)) * pos + 0.984375);
	      }
	    },
	
	    bouncePast: function (pos) {
	      if (pos < (1 / 2.75)) {
	        return (7.5625 * pos * pos);
	      } else if (pos < (2 / 2.75)) {
	        return 2 - (7.5625 * (pos -= (1.5 / 2.75)) * pos + 0.75);
	      } else if (pos < (2.5 / 2.75)) {
	        return 2 - (7.5625 * (pos -= (2.25 / 2.75)) * pos + 0.9375);
	      } else {
	        return 2 - (7.5625 * (pos -= (2.625 / 2.75)) * pos + 0.984375);
	      }
	    },
	
	    easeFromTo: function (pos) {
	      if ((pos /= 0.5) < 1) {return 0.5 * Math.pow(pos,4);}
	      return -0.5 * ((pos -= 2) * Math.pow(pos,3) - 2);
	    },
	
	    easeFrom: function (pos) {
	      return Math.pow(pos,4);
	    },
	
	    easeTo: function (pos) {
	      return Math.pow(pos,0.25);
	    }
	  });
	
	}());
	
	/*!
	 * The Bezier magic in this file is adapted/copied almost wholesale from
	 * [Scripty2](https://github.com/madrobby/scripty2/blob/master/src/effects/transitions/cubic-bezier.js),
	 * which was adapted from Apple code (which probably came from
	 * [here](http://opensource.apple.com/source/WebCore/WebCore-955.66/platform/graphics/UnitBezier.h)).
	 * Special thanks to Apple and Thomas Fuchs for much of this code.
	 */
	
	/*!
	 *  Copyright (c) 2006 Apple Computer, Inc. All rights reserved.
	 *
	 *  Redistribution and use in source and binary forms, with or without
	 *  modification, are permitted provided that the following conditions are met:
	 *
	 *  1. Redistributions of source code must retain the above copyright notice,
	 *  this list of conditions and the following disclaimer.
	 *
	 *  2. Redistributions in binary form must reproduce the above copyright notice,
	 *  this list of conditions and the following disclaimer in the documentation
	 *  and/or other materials provided with the distribution.
	 *
	 *  3. Neither the name of the copyright holder(s) nor the names of any
	 *  contributors may be used to endorse or promote products derived from
	 *  this software without specific prior written permission.
	 *
	 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
	 *  "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
	 *  THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
	 *  ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE
	 *  FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
	 *  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
	 *  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
	 *  ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	 *  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
	 *  SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	 */
	;(function () {
	  // port of webkit cubic bezier handling by http://www.netzgesta.de/dev/
	  function cubicBezierAtTime(t,p1x,p1y,p2x,p2y,duration) {
	    var ax = 0,bx = 0,cx = 0,ay = 0,by = 0,cy = 0;
	    function sampleCurveX(t) {return ((ax * t + bx) * t + cx) * t;}
	    function sampleCurveY(t) {return ((ay * t + by) * t + cy) * t;}
	    function sampleCurveDerivativeX(t) {return (3.0 * ax * t + 2.0 * bx) * t + cx;}
	    function solveEpsilon(duration) {return 1.0 / (200.0 * duration);}
	    function solve(x,epsilon) {return sampleCurveY(solveCurveX(x,epsilon));}
	    function fabs(n) {if (n >= 0) {return n;}else {return 0 - n;}}
	    function solveCurveX(x,epsilon) {
	      var t0,t1,t2,x2,d2,i;
	      for (t2 = x, i = 0; i < 8; i++) {x2 = sampleCurveX(t2) - x; if (fabs(x2) < epsilon) {return t2;} d2 = sampleCurveDerivativeX(t2); if (fabs(d2) < 1e-6) {break;} t2 = t2 - x2 / d2;}
	      t0 = 0.0; t1 = 1.0; t2 = x; if (t2 < t0) {return t0;} if (t2 > t1) {return t1;}
	      while (t0 < t1) {x2 = sampleCurveX(t2); if (fabs(x2 - x) < epsilon) {return t2;} if (x > x2) {t0 = t2;}else {t1 = t2;} t2 = (t1 - t0) * 0.5 + t0;}
	      return t2; // Failure.
	    }
	    cx = 3.0 * p1x; bx = 3.0 * (p2x - p1x) - cx; ax = 1.0 - cx - bx; cy = 3.0 * p1y; by = 3.0 * (p2y - p1y) - cy; ay = 1.0 - cy - by;
	    return solve(t, solveEpsilon(duration));
	  }
	  /*!
	   *  getCubicBezierTransition(x1, y1, x2, y2) -> Function
	   *
	   *  Generates a transition easing function that is compatible
	   *  with WebKit's CSS transitions `-webkit-transition-timing-function`
	   *  CSS property.
	   *
	   *  The W3C has more information about
	   *  <a href="http://www.w3.org/TR/css3-transitions/#transition-timing-function_tag">
	   *  CSS3 transition timing functions</a>.
	   *
	   *  @param {number} x1
	   *  @param {number} y1
	   *  @param {number} x2
	   *  @param {number} y2
	   *  @return {function}
	   */
	  function getCubicBezierTransition (x1, y1, x2, y2) {
	    return function (pos) {
	      return cubicBezierAtTime(pos,x1,y1,x2,y2,1);
	    };
	  }
	  // End ported code
	
	  /**
	   * Creates a Bezier easing function and attaches it to `Tweenable.prototype.formula`.  This function gives you total control over the easing curve.  Matthew Lein's [Ceaser](http://matthewlein.com/ceaser/) is a useful tool for visualizing the curves you can make with this function.
	   *
	   * @param {string} name The name of the easing curve.  Overwrites the old easing function on Tweenable.prototype.formula if it exists.
	   * @param {number} x1
	   * @param {number} y1
	   * @param {number} x2
	   * @param {number} y2
	   * @return {function} The easing function that was attached to Tweenable.prototype.formula.
	   */
	  Tweenable.setBezierFunction = function (name, x1, y1, x2, y2) {
	    var cubicBezierTransition = getCubicBezierTransition(x1, y1, x2, y2);
	    cubicBezierTransition.x1 = x1;
	    cubicBezierTransition.y1 = y1;
	    cubicBezierTransition.x2 = x2;
	    cubicBezierTransition.y2 = y2;
	
	    return Tweenable.prototype.formula[name] = cubicBezierTransition;
	  };
	
	
	  /**
	   * `delete`s an easing function from `Tweenable.prototype.formula`.  Be careful with this method, as it `delete`s whatever easing formula matches `name` (which means you can delete default Shifty easing functions).
	   *
	   * @param {string} name The name of the easing function to delete.
	   * @return {function}
	   */
	  Tweenable.unsetBezierFunction = function (name) {
	    delete Tweenable.prototype.formula[name];
	  };
	
	})();
	
	;(function () {
	
	  function getInterpolatedValues (
	    from, current, targetState, position, easing) {
	    return Tweenable.tweenProps(
	      position, current, from, targetState, 1, 0, easing);
	  }
	
	  // Fake a Tweenable and patch some internals.  This approach allows us to
	  // skip uneccessary processing and object recreation, cutting down on garbage
	  // collection pauses.
	  var mockTweenable = new Tweenable();
	  mockTweenable._filterArgs = [];
	
	  /**
	   * Compute the midpoint of two Objects.  This method effectively calculates a specific frame of animation that [Tweenable#tween](shifty.core.js.html#tween) does many times over the course of a tween.
	   *
	   * Example:
	   *
	   * ```
	   *  var interpolatedValues = Tweenable.interpolate({
	   *    width: '100px',
	   *    opacity: 0,
	   *    color: '#fff'
	   *  }, {
	   *    width: '200px',
	   *    opacity: 1,
	   *    color: '#000'
	   *  }, 0.5);
	   *
	   *  console.log(interpolatedValues);
	   *  // {opacity: 0.5, width: "150px", color: "rgb(127,127,127)"}
	   * ```
	   *
	   * @param {Object} from The starting values to tween from.
	   * @param {Object} targetState The ending values to tween to.
	   * @param {number} position The normalized position value (between 0.0 and 1.0) to interpolate the values between `from` and `to` for.  `from` represents 0 and `to` represents `1`.
	   * @param {string|Object} easing The easing curve(s) to calculate the midpoint against.  You can reference any easing function attached to `Tweenable.prototype.formula`.  If omitted, this defaults to "linear".
	   * @return {Object}
	   */
	  Tweenable.interpolate = function (from, targetState, position, easing) {
	    var current = Tweenable.shallowCopy({}, from);
	    var easingObject = Tweenable.composeEasingObject(
	      from, easing || 'linear');
	
	    mockTweenable.set({});
	
	    // Alias and reuse the _filterArgs array instead of recreating it.
	    var filterArgs = mockTweenable._filterArgs;
	    filterArgs.length = 0;
	    filterArgs[0] = current;
	    filterArgs[1] = from;
	    filterArgs[2] = targetState;
	    filterArgs[3] = easingObject;
	
	    // Any defined value transformation must be applied
	    Tweenable.applyFilter(mockTweenable, 'tweenCreated');
	    Tweenable.applyFilter(mockTweenable, 'beforeTween');
	
	    var interpolatedValues = getInterpolatedValues(
	      from, current, targetState, position, easingObject);
	
	    // Transform values back into their original format
	    Tweenable.applyFilter(mockTweenable, 'afterTween');
	
	    return interpolatedValues;
	  };
	
	}());
	
	/**
	 * Adds string interpolation support to Shifty.
	 *
	 * The Token extension allows Shifty to tween numbers inside of strings.  Among other things, this allows you to animate CSS properties.  For example, you can do this:
	 *
	 * ```
	 * var tweenable = new Tweenable();
	 * tweenable.tween({
	 *   from: { transform: 'translateX(45px)'},
	 *   to: { transform: 'translateX(90xp)'}
	 * });
	 * ```
	 *
	 * `translateX(45)` will be tweened to `translateX(90)`.  To demonstrate:
	 *
	 * ```
	 * var tweenable = new Tweenable();
	 * tweenable.tween({
	 *   from: { transform: 'translateX(45px)'},
	 *   to: { transform: 'translateX(90px)'},
	 *   step: function (state) {
	 *     console.log(state.transform);
	 *   }
	 * });
	 * ```
	 *
	 * The above snippet will log something like this in the console:
	 *
	 * ```
	 * translateX(60.3px)
	 * ...
	 * translateX(76.05px)
	 * ...
	 * translateX(90px)
	 * ```
	 *
	 * Another use for this is animating colors:
	 *
	 * ```
	 * var tweenable = new Tweenable();
	 * tweenable.tween({
	 *   from: { color: 'rgb(0,255,0)'},
	 *   to: { color: 'rgb(255,0,255)'},
	 *   step: function (state) {
	 *     console.log(state.color);
	 *   }
	 * });
	 * ```
	 *
	 * The above snippet will log something like this:
	 *
	 * ```
	 * rgb(84,170,84)
	 * ...
	 * rgb(170,84,170)
	 * ...
	 * rgb(255,0,255)
	 * ```
	 *
	 * This extension also supports hexadecimal colors, in both long (`#ff00ff`) and short (`#f0f`) forms.  Be aware that hexadecimal input values will be converted into the equivalent RGB output values.  This is done to optimize for performance.
	 *
	 * ```
	 * var tweenable = new Tweenable();
	 * tweenable.tween({
	 *   from: { color: '#0f0'},
	 *   to: { color: '#f0f'},
	 *   step: function (state) {
	 *     console.log(state.color);
	 *   }
	 * });
	 * ```
	 *
	 * This snippet will generate the same output as the one before it because equivalent values were supplied (just in hexadecimal form rather than RGB):
	 *
	 * ```
	 * rgb(84,170,84)
	 * ...
	 * rgb(170,84,170)
	 * ...
	 * rgb(255,0,255)
	 * ```
	 *
	 * ## Easing support
	 *
	 * Easing works somewhat differently in the Token extension.  This is because some CSS properties have multiple values in them, and you might need to tween each value along its own easing curve.  A basic example:
	 *
	 * ```
	 * var tweenable = new Tweenable();
	 * tweenable.tween({
	 *   from: { transform: 'translateX(0px) translateY(0px)'},
	 *   to: { transform:   'translateX(100px) translateY(100px)'},
	 *   easing: { transform: 'easeInQuad' },
	 *   step: function (state) {
	 *     console.log(state.transform);
	 *   }
	 * });
	 * ```
	 *
	 * The above snippet create values like this:
	 *
	 * ```
	 * translateX(11.560000000000002px) translateY(11.560000000000002px)
	 * ...
	 * translateX(46.24000000000001px) translateY(46.24000000000001px)
	 * ...
	 * translateX(100px) translateY(100px)
	 * ```
	 *
	 * In this case, the values for `translateX` and `translateY` are always the same for each step of the tween, because they have the same start and end points and both use the same easing curve.  We can also tween `translateX` and `translateY` along independent curves:
	 *
	 * ```
	 * var tweenable = new Tweenable();
	 * tweenable.tween({
	 *   from: { transform: 'translateX(0px) translateY(0px)'},
	 *   to: { transform:   'translateX(100px) translateY(100px)'},
	 *   easing: { transform: 'easeInQuad bounce' },
	 *   step: function (state) {
	 *     console.log(state.transform);
	 *   }
	 * });
	 * ```
	 *
	 * The above snippet create values like this:
	 *
	 * ```
	 * translateX(10.89px) translateY(82.355625px)
	 * ...
	 * translateX(44.89000000000001px) translateY(86.73062500000002px)
	 * ...
	 * translateX(100px) translateY(100px)
	 * ```
	 *
	 * `translateX` and `translateY` are not in sync anymore, because `easeInQuad` was specified for `translateX` and `bounce` for `translateY`.  Mixing and matching easing curves can make for some interesting motion in your animations.
	 *
	 * The order of the space-separated easing curves correspond the token values they apply to.  If there are more token values than easing curves listed, the last easing curve listed is used.
	 */
	function token () {
	  // Functionality for this extension runs implicitly if it is loaded.
	} /*!*/
	
	// token function is defined above only so that dox-foundation sees it as
	// documentation and renders it.  It is never used, and is optimized away at
	// build time.
	
	;(function (Tweenable) {
	
	  /*!
	   * @typedef {{
	   *   formatString: string
	   *   chunkNames: Array.<string>
	   * }}
	   */
	  var formatManifest;
	
	  // CONSTANTS
	
	  var R_NUMBER_COMPONENT = /(\d|\-|\.)/;
	  var R_FORMAT_CHUNKS = /([^\-0-9\.]+)/g;
	  var R_UNFORMATTED_VALUES = /[0-9.\-]+/g;
	  var R_RGB = new RegExp(
	    'rgb\\(' + R_UNFORMATTED_VALUES.source +
	    (/,\s*/.source) + R_UNFORMATTED_VALUES.source +
	    (/,\s*/.source) + R_UNFORMATTED_VALUES.source + '\\)', 'g');
	  var R_RGB_PREFIX = /^.*\(/;
	  var R_HEX = /#([0-9]|[a-f]){3,6}/gi;
	  var VALUE_PLACEHOLDER = 'VAL';
	
	  // HELPERS
	
	  var getFormatChunksFrom_accumulator = [];
	  /*!
	   * @param {Array.number} rawValues
	   * @param {string} prefix
	   *
	   * @return {Array.<string>}
	   */
	  function getFormatChunksFrom (rawValues, prefix) {
	    getFormatChunksFrom_accumulator.length = 0;
	
	    var rawValuesLength = rawValues.length;
	    var i;
	
	    for (i = 0; i < rawValuesLength; i++) {
	      getFormatChunksFrom_accumulator.push('_' + prefix + '_' + i);
	    }
	
	    return getFormatChunksFrom_accumulator;
	  }
	
	  /*!
	   * @param {string} formattedString
	   *
	   * @return {string}
	   */
	  function getFormatStringFrom (formattedString) {
	    var chunks = formattedString.match(R_FORMAT_CHUNKS);
	
	    if (!chunks) {
	      // chunks will be null if there were no tokens to parse in
	      // formattedString (for example, if formattedString is '2').  Coerce
	      // chunks to be useful here.
	      chunks = ['', ''];
	
	      // If there is only one chunk, assume that the string is a number
	      // followed by a token...
	      // NOTE: This may be an unwise assumption.
	    } else if (chunks.length === 1 ||
	        // ...or if the string starts with a number component (".", "-", or a
	        // digit)...
	        formattedString[0].match(R_NUMBER_COMPONENT)) {
	      // ...prepend an empty string here to make sure that the formatted number
	      // is properly replaced by VALUE_PLACEHOLDER
	      chunks.unshift('');
	    }
	
	    return chunks.join(VALUE_PLACEHOLDER);
	  }
	
	  /*!
	   * Convert all hex color values within a string to an rgb string.
	   *
	   * @param {Object} stateObject
	   *
	   * @return {Object} The modified obj
	   */
	  function sanitizeObjectForHexProps (stateObject) {
	    Tweenable.each(stateObject, function (prop) {
	      var currentProp = stateObject[prop];
	
	      if (typeof currentProp === 'string' && currentProp.match(R_HEX)) {
	        stateObject[prop] = sanitizeHexChunksToRGB(currentProp);
	      }
	    });
	  }
	
	  /*!
	   * @param {string} str
	   *
	   * @return {string}
	   */
	  function  sanitizeHexChunksToRGB (str) {
	    return filterStringChunks(R_HEX, str, convertHexToRGB);
	  }
	
	  /*!
	   * @param {string} hexString
	   *
	   * @return {string}
	   */
	  function convertHexToRGB (hexString) {
	    var rgbArr = hexToRGBArray(hexString);
	    return 'rgb(' + rgbArr[0] + ',' + rgbArr[1] + ',' + rgbArr[2] + ')';
	  }
	
	  var hexToRGBArray_returnArray = [];
	  /*!
	   * Convert a hexadecimal string to an array with three items, one each for
	   * the red, blue, and green decimal values.
	   *
	   * @param {string} hex A hexadecimal string.
	   *
	   * @returns {Array.<number>} The converted Array of RGB values if `hex` is a
	   * valid string, or an Array of three 0's.
	   */
	  function hexToRGBArray (hex) {
	
	    hex = hex.replace(/#/, '');
	
	    // If the string is a shorthand three digit hex notation, normalize it to
	    // the standard six digit notation
	    if (hex.length === 3) {
	      hex = hex.split('');
	      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
	    }
	
	    hexToRGBArray_returnArray[0] = hexToDec(hex.substr(0, 2));
	    hexToRGBArray_returnArray[1] = hexToDec(hex.substr(2, 2));
	    hexToRGBArray_returnArray[2] = hexToDec(hex.substr(4, 2));
	
	    return hexToRGBArray_returnArray;
	  }
	
	  /*!
	   * Convert a base-16 number to base-10.
	   *
	   * @param {Number|String} hex The value to convert
	   *
	   * @returns {Number} The base-10 equivalent of `hex`.
	   */
	  function hexToDec (hex) {
	    return parseInt(hex, 16);
	  }
	
	  /*!
	   * Runs a filter operation on all chunks of a string that match a RegExp
	   *
	   * @param {RegExp} pattern
	   * @param {string} unfilteredString
	   * @param {function(string)} filter
	   *
	   * @return {string}
	   */
	  function filterStringChunks (pattern, unfilteredString, filter) {
	    var pattenMatches = unfilteredString.match(pattern);
	    var filteredString = unfilteredString.replace(pattern, VALUE_PLACEHOLDER);
	
	    if (pattenMatches) {
	      var pattenMatchesLength = pattenMatches.length;
	      var currentChunk;
	
	      for (var i = 0; i < pattenMatchesLength; i++) {
	        currentChunk = pattenMatches.shift();
	        filteredString = filteredString.replace(
	          VALUE_PLACEHOLDER, filter(currentChunk));
	      }
	    }
	
	    return filteredString;
	  }
	
	  /*!
	   * Check for floating point values within rgb strings and rounds them.
	   *
	   * @param {string} formattedString
	   *
	   * @return {string}
	   */
	  function sanitizeRGBChunks (formattedString) {
	    return filterStringChunks(R_RGB, formattedString, sanitizeRGBChunk);
	  }
	
	  /*!
	   * @param {string} rgbChunk
	   *
	   * @return {string}
	   */
	  function sanitizeRGBChunk (rgbChunk) {
	    var numbers = rgbChunk.match(R_UNFORMATTED_VALUES);
	    var numbersLength = numbers.length;
	    var sanitizedString = rgbChunk.match(R_RGB_PREFIX)[0];
	
	    for (var i = 0; i < numbersLength; i++) {
	      sanitizedString += parseInt(numbers[i], 10) + ',';
	    }
	
	    sanitizedString = sanitizedString.slice(0, -1) + ')';
	
	    return sanitizedString;
	  }
	
	  /*!
	   * @param {Object} stateObject
	   *
	   * @return {Object} An Object of formatManifests that correspond to
	   * the string properties of stateObject
	   */
	  function getFormatManifests (stateObject) {
	    var manifestAccumulator = {};
	
	    Tweenable.each(stateObject, function (prop) {
	      var currentProp = stateObject[prop];
	
	      if (typeof currentProp === 'string') {
	        var rawValues = getValuesFrom(currentProp);
	
	        manifestAccumulator[prop] = {
	          'formatString': getFormatStringFrom(currentProp)
	          ,'chunkNames': getFormatChunksFrom(rawValues, prop)
	        };
	      }
	    });
	
	    return manifestAccumulator;
	  }
	
	  /*!
	   * @param {Object} stateObject
	   * @param {Object} formatManifests
	   */
	  function expandFormattedProperties (stateObject, formatManifests) {
	    Tweenable.each(formatManifests, function (prop) {
	      var currentProp = stateObject[prop];
	      var rawValues = getValuesFrom(currentProp);
	      var rawValuesLength = rawValues.length;
	
	      for (var i = 0; i < rawValuesLength; i++) {
	        stateObject[formatManifests[prop].chunkNames[i]] = +rawValues[i];
	      }
	
	      delete stateObject[prop];
	    });
	  }
	
	  /*!
	   * @param {Object} stateObject
	   * @param {Object} formatManifests
	   */
	  function collapseFormattedProperties (stateObject, formatManifests) {
	    Tweenable.each(formatManifests, function (prop) {
	      var currentProp = stateObject[prop];
	      var formatChunks = extractPropertyChunks(
	        stateObject, formatManifests[prop].chunkNames);
	      var valuesList = getValuesList(
	        formatChunks, formatManifests[prop].chunkNames);
	      currentProp = getFormattedValues(
	        formatManifests[prop].formatString, valuesList);
	      stateObject[prop] = sanitizeRGBChunks(currentProp);
	    });
	  }
	
	  /*!
	   * @param {Object} stateObject
	   * @param {Array.<string>} chunkNames
	   *
	   * @return {Object} The extracted value chunks.
	   */
	  function extractPropertyChunks (stateObject, chunkNames) {
	    var extractedValues = {};
	    var currentChunkName, chunkNamesLength = chunkNames.length;
	
	    for (var i = 0; i < chunkNamesLength; i++) {
	      currentChunkName = chunkNames[i];
	      extractedValues[currentChunkName] = stateObject[currentChunkName];
	      delete stateObject[currentChunkName];
	    }
	
	    return extractedValues;
	  }
	
	  var getValuesList_accumulator = [];
	  /*!
	   * @param {Object} stateObject
	   * @param {Array.<string>} chunkNames
	   *
	   * @return {Array.<number>}
	   */
	  function getValuesList (stateObject, chunkNames) {
	    getValuesList_accumulator.length = 0;
	    var chunkNamesLength = chunkNames.length;
	
	    for (var i = 0; i < chunkNamesLength; i++) {
	      getValuesList_accumulator.push(stateObject[chunkNames[i]]);
	    }
	
	    return getValuesList_accumulator;
	  }
	
	  /*!
	   * @param {string} formatString
	   * @param {Array.<number>} rawValues
	   *
	   * @return {string}
	   */
	  function getFormattedValues (formatString, rawValues) {
	    var formattedValueString = formatString;
	    var rawValuesLength = rawValues.length;
	
	    for (var i = 0; i < rawValuesLength; i++) {
	      formattedValueString = formattedValueString.replace(
	        VALUE_PLACEHOLDER, +rawValues[i].toFixed(4));
	    }
	
	    return formattedValueString;
	  }
	
	  /*!
	   * Note: It's the duty of the caller to convert the Array elements of the
	   * return value into numbers.  This is a performance optimization.
	   *
	   * @param {string} formattedString
	   *
	   * @return {Array.<string>|null}
	   */
	  function getValuesFrom (formattedString) {
	    return formattedString.match(R_UNFORMATTED_VALUES);
	  }
	
	  /*!
	   * @param {Object} easingObject
	   * @param {Object} tokenData
	   */
	  function expandEasingObject (easingObject, tokenData) {
	    Tweenable.each(tokenData, function (prop) {
	      var currentProp = tokenData[prop];
	      var chunkNames = currentProp.chunkNames;
	      var chunkLength = chunkNames.length;
	      var easingChunks = easingObject[prop].split(' ');
	      var lastEasingChunk = easingChunks[easingChunks.length - 1];
	
	      for (var i = 0; i < chunkLength; i++) {
	        easingObject[chunkNames[i]] = easingChunks[i] || lastEasingChunk;
	      }
	
	      delete easingObject[prop];
	    });
	  }
	
	  /*!
	   * @param {Object} easingObject
	   * @param {Object} tokenData
	   */
	  function collapseEasingObject (easingObject, tokenData) {
	    Tweenable.each(tokenData, function (prop) {
	      var currentProp = tokenData[prop];
	      var chunkNames = currentProp.chunkNames;
	      var chunkLength = chunkNames.length;
	      var composedEasingString = '';
	
	      for (var i = 0; i < chunkLength; i++) {
	        composedEasingString += ' ' + easingObject[chunkNames[i]];
	        delete easingObject[chunkNames[i]];
	      }
	
	      easingObject[prop] = composedEasingString.substr(1);
	    });
	  }
	
	  Tweenable.prototype.filter.token = {
	    'tweenCreated': function (currentState, fromState, toState, easingObject) {
	      sanitizeObjectForHexProps(currentState);
	      sanitizeObjectForHexProps(fromState);
	      sanitizeObjectForHexProps(toState);
	      this._tokenData = getFormatManifests(currentState);
	    },
	
	    'beforeTween': function (currentState, fromState, toState, easingObject) {
	      expandEasingObject(easingObject, this._tokenData);
	      expandFormattedProperties(currentState, this._tokenData);
	      expandFormattedProperties(fromState, this._tokenData);
	      expandFormattedProperties(toState, this._tokenData);
	    },
	
	    'afterTween': function (currentState, fromState, toState, easingObject) {
	      collapseFormattedProperties(currentState, this._tokenData);
	      collapseFormattedProperties(fromState, this._tokenData);
	      collapseFormattedProperties(toState, this._tokenData);
	      collapseEasingObject(easingObject, this._tokenData);
	    }
	  };
	
	} (Tweenable));
	
	}(this));


/***/ }

});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9kZW1vL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9kZW1vL2FwcC1zcGFyay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3Bhcmstc2Nyb2xsLXJla2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9+L3Jla2FwaS9kaXN0L3Jla2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9+L3Jla2FwaS9+L3NoaWZ0eS9kaXN0L3NoaWZ0eS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsS0FBSSxLQUFLLEdBQUcsbUJBQU8sQ0FBQyxDQUFPLENBQUMsQ0FBQztBQUM3QixLQUFJLGVBQWUsR0FBRyxtQkFBTyxDQUFDLENBQWMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUM7O2dCQUNyQyxtQkFBTyxDQUFDLENBQWEsQ0FBQzs7S0FBakQsV0FBVyxZQUFYLFdBQVc7S0FBRSxVQUFVLFlBQVYsVUFBVTs7QUFDNUIsS0FBSSxFQUFFLEdBQUcsbUJBQU8sQ0FBQyxDQUFZLENBQUMsQ0FBQzs7QUFFL0IsS0FBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7O0FBQzNCLFNBQU0sRUFBRSxDQUFDLGVBQWUsQ0FBQzs7QUFFekIsa0JBQWUsNkJBQUc7QUFDaEIsWUFBTztBQUNMLHVCQUFnQixFQUFFLENBQUM7TUFDcEI7SUFDRjs7QUFFRCxvQkFBaUIsK0JBQUc7O0FBRWxCLFNBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNsRCxTQUFJLE1BQU0sR0FBRyxFQUFDLENBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQ3RDLFNBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDO0FBQzNCLFNBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLE1BQU0sR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDO0lBQ3BEOztBQUVELFNB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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFhLE9BQU87QUFDcEIsY0FBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWEsT0FBTztBQUNwQixlQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWEsT0FBTztBQUNwQixjQUFhLE9BQU87QUFDcEIsZUFBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWEsT0FBTztBQUNwQixjQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYSxPQUFPO0FBQ3BCLGNBQWEsT0FBTztBQUNwQixjQUFhLE9BQU87QUFDcEIsZUFBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYSxPQUFPO0FBQ3BCLGNBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTBCO0FBQzFCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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OztBQUVMO0FBQ0EsOEJBQTZCO0FBQzdCO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBLDhCQUE2QjtBQUM3QjtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQSw4QkFBNkI7QUFDN0I7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0EsOEJBQTZCO0FBQzdCO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBLHVCQUFzQjtBQUN0Qix1QkFBc0I7QUFDdEIsOEJBQTZCO0FBQzdCO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBLDhCQUE2QjtBQUM3QjtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsOEJBQTZCO0FBQzdCO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBLFFBQU87QUFDUDtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7QUFD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QUFPO0FBQ3BCLGNBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUM7O0FBRUQsRUFBQyIsInNvdXJjZXNDb250ZW50IjpbInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUHVyZVJlbmRlck1peGluID0gcmVxdWlyZSgncmVhY3QvYWRkb25zJykuYWRkb25zLlB1cmVSZW5kZXJNaXhpbjtcbnZhciB7U3BhcmtTY3JvbGwsIFNwYXJrUHJveHl9ID0gcmVxdWlyZSgnLi9hcHAtc3BhcmsnKTtcbnZhciBjeCA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIEhlcm8gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIG1peGluczogW1B1cmVSZW5kZXJNaXhpbl0sXG5cbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzdHJva2VEYXNoT2Zmc2V0OiAwXG4gICAgfVxuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIGluaXRpYWxpemUgc3ZnXG4gICAgdmFyIG5vZGUgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnMuc3BhcmtQYXRoKTtcbiAgICB2YXIgbGVuZ3RoID0gfn4gbm9kZS5nZXRUb3RhbExlbmd0aCgpO1xuICAgIHRoaXMub2Zmc2V0VGFyZ2V0ID0gbGVuZ3RoO1xuICAgIG5vZGUuc3R5bGUuc3Ryb2tlRGFzaGFycmF5ID0gbGVuZ3RoICsgJyAnICsgbGVuZ3RoO1xuICB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFNwYXJrUHJveHkuZGl2IHByb3h5SWQ9XCJoZXJvXCIgY2xhc3NOYW1lPVwiaGVyb1wiPlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2dpbGJveC9yZWFjdC1zcGFyay1zY3JvbGxcIj5cbiAgICAgICAgICA8U3BhcmtTY3JvbGwuaDFcbiAgICAgICAgICAgIHByb3h5PVwiaGVyb1wiXG4gICAgICAgICAgICB0aW1lbGluZT17e1xuICAgICAgICAgICAgICB0b3BUb3A6IHsgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMHB4LDE1MHB4LDBweCknIH0sXG4gICAgICAgICAgICAgICd0b3BUb3ArMjAwJzogeyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwcHgsMTAwcHgsMHB4KScgfVxuICAgICAgICAgICAgfX0+XG5cbiAgICAgICAgICAgIDxTcGFya1Njcm9sbC5zcGFuXG4gICAgICAgICAgICAgIHByb3h5PVwiaGVyb1wiXG4gICAgICAgICAgICAgIGNhbGxiYWNrPXsgcmF0aW8gPT4gdGhpcy5zZXRTdGF0ZSh7c3Ryb2tlRGFzaG9mZnNldDogfn4odGhpcy5vZmZzZXRUYXJnZXQqcmF0aW8pfSkgfVxuICAgICAgICAgICAgICB0aW1lbGluZT17e3RvcFRvcDowLCAndG9wVG9wKzE1MCc6MH19PlxuXG4gICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIyOTZweFwiIGhlaWdodD1cIjIyOHB4XCIgdmlld0JveD1cIjAgMCAyOTYgMjI4XCIgdmVyc2lvbj1cIjEuMVwiPlxuICAgICAgICAgICAgICAgIDxnIGlkPVwiUGFnZS0xXCIgc3Ryb2tlPVwibm9uZVwiIHN0cm9rZVdpZHRoPVwiMVwiIGZpbGw9XCJub25lXCIgZmlsbFJ1bGU9XCJldmVub2RkXCI+XG4gICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICByZWY9XCJzcGFya1BhdGhcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3N0cm9rZURhc2hvZmZzZXQ6IHRoaXMuc3RhdGUuc3Ryb2tlRGFzaG9mZnNldH19XG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNNDMuNzc3NDQ0Miw3MS40ODk4NDk1IEM2OC4xMjIzODYxLDEzLjk4MTUwMzIgMi4xOTQ1NDM5Nyw0OC4wNDA3MjIzIDIxLjY3ODIyODYsNjIuNjQ4OTIwNyBDMzUuNjY0Mzk0NSw3My4xMzUyNjgyIDU4LjkwOTY4ODIsNzAuNzc0Nzc4OSA2NS44NzY2NTk4LDkwLjI3NzU5OTkgQzgxLjMyNjYwOTQsMTMzLjUyNzAzNyA1OC43MzA1NDY2LDE5MS4zODYwMTYgOC45NjY2NzUyNCwxOTEuMzg2MDE2IEMtMjEuNzg2NzI3OCwxMjQuNDE5MjI2IDU4LjUxNjU1MDUsOTUuMDYwNDQwOSAxMDUuNjU3NzMzLDcxLjQ4OTg0OTUgQzExMS41ODcwMTksNjguNTI1MjA2NSAxMDYuODQzNzg2LDg0Ljg1NTEwMDYgMTA1LjY1NzczMyw5MS4zNzcyNzk3IEM5OS42MTIzOTY1LDEyNC42MjA5NjcgOTEuNTIxNDQxMSwxNTcuNDc3MzMgODUuNzcwMzAyOSwxOTAuODMzMDY5IEM4NC44Njg1NzY0LDE5Ni4wNjI5NDggODEuNjI3NDY0MiwyMTQuODI5Mjk5IDgwLjc5Mzc4NTcsMjIyLjMyNjE2IEM4MC42NzE1NTk4LDIyMy40MjUyNzggODAuNzkzNzg1NywyMjYuNzQ5NzMxIDgwLjc5Mzc4NTcsMjI1LjY0MzgzOCBDODAuNzkzNzg1NywxNzguMTkwMjMgODAuMDUzNTkxMiwxMzIuOTc5NzY0IDkyLjM5OTQ0NjMsODYuNjc0MTI5MyBDOTMuODExMzQwNSw4MS4zNzg1MzM0IDEwOC4zMDU5NCwzOS43Njg1NzM4IDEyNC45OTg0Myw1NC4wNzUxNDU3IEMxNTYuNzUyNTk1LDgxLjI5MDU3MzUgOTIuNTcyNDQ0MSw5My40NzAyOTM2IDEyMS4xMjc4MDUsOTYuMDY4MDA0NCBDMTI4LjI4MjQyMiw5Ni43MTg4Njc0IDEzNS42NTU0Niw5Ny41NzI2NTI5IDE0Mi42ODAyODcsOTYuMDY4MDA0NCBDMTQ4LjczNjQ2Miw5NC43NzA4MzE4IDE4Ny4xMDg2NjUsNzEuNDQwMjE2NSAxNzUuMjczMDU4LDU5LjYwNDYwOTMgQzE1OS43Njg0MTQsNDQuMDk5OTY1MiAxNDcuMDg0Nzk4LDg5LjI5ODk2NTggMTUyLjA2Nzk1LDkwLjU0NDc1MzggQzE2Ny4zMDQ2NzksOTQuMzUzOTM2MiAxNjMuNDk4ODUxLDcyLjMwOTk0OTggMTcxLjQwODY0Niw3Mi4zMDk5NDk4IEMxNzUuNDMyMTY1LDcyLjMwOTk0OTggMTcwLjkwOTc1Nyw4Mi42NDE4MzA4IDE3NC43MjYzMjUsODMuOTE1NjEwNCBDMTg4LjEwODkzOCw4OC4zODIwNTc3IDIwMC42NzIxNzIsNzIuMzU2ODc1MyAyMDYuNzcyMzYyLDY2LjIzMzc1MjcgQzIwNy45MDAyNDgsNjUuMTAxNjI1OCAyMDYuNDIzNTg5LDkxLjI3MjczNTcgMjE2LjE2MDAyNCw4Ni4xMjExODI5IEMyMjUuMTQ4MDk2LDgxLjM2NTU4OTMgMjMyLjEwNzY2MSw2Ni44MjUyMDg5IDIzNi4wNTM2NjcsNTcuOTQ1NzcwMiBDMjM4Ljc1Mjg4Miw1MS44NzE5MDQxIDI1My40ODYyNCwxLjU4ODczMjAzIDI0Ni41NTM0MzUsMS41ODg3MzIwMyBDMjQxLjEzNzY5NywxLjU4ODczMjAzIDIyOC45NDQ4MDgsOTQuOTA5ODY0NiAyMjMuMzQyMTE0LDEwMC40OTE1NzUgQzIxOC4wOTIyNzMsMTA1LjcyMTc1NCAyNDcuNjkwOTY3LDM4LjU5Mjk4MzEgMjYwLjM2NDY2OCw0MS4zNjk4MDUzIEMyNzguMTExNjI1LDQ1LjI1ODE4MzUgMjMxLjc0MTc2MSw2NS44NDkwNTYzIDIzMC41MzA0MTYsNjkuNDgzMDg5MiBDMjI5LjY5NjY3LDcxLjk4NDMyOCAyMzUuNzQ1NDI3LDcwLjM2MDYwMjMgMjM4LjI2NTQ1Myw3MS4xMzU3MTU0IEMyNjAuMDU0MTcxLDc3LjgzNzUyMDcgMjg0LjM0NTM3Nyw5Ni40NDQ5NzE2IDI5NC42MjI0OTEsMTE2Ljk5OTE5OVwiIGlkPVwiUGF0aC0xM1wiIHN0cm9rZT1cIiMzODI1MTNcIiBzdHJva2VXaWR0aD1cIjNcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICA8L3N2Zz5cblxuICAgICAgICAgICAgPC9TcGFya1Njcm9sbC5zcGFuPlxuICAgICAgICAgIDwvU3BhcmtTY3JvbGwuaDE+XG4gICAgICAgIDwvYT5cblxuICAgICAgICA8U3BhcmtTY3JvbGwuZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZG93bi1hcnJvd1wiXG4gICAgICAgICAgcHJveHk9XCJoZXJvXCJcbiAgICAgICAgICB0aW1lbGluZT17e1xuICAgICAgICAgICAgdG9wVG9wOiB7b3BhY2l0eTogMSwgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMHB4LDBweCwwcHgpJ30sXG4gICAgICAgICAgICAndG9wVG9wKzIwMCc6IHtvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwcHgsLTE1MHB4LDBweCknfVxuICAgICAgICAgIH19PnY8L1NwYXJrU2Nyb2xsLmRpdj5cbiAgICAgIDwvU3BhcmtQcm94eS5kaXY+XG4gICAgKVxuICB9XG59KTtcblxudmFyIEFwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgbWl4aW5zOiBbUHVyZVJlbmRlck1peGluXSxcblxuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFjdGlvblR5cGU6IG51bGwsXG4gICAgICB0ZXh0OiAnc2xpZGUnLFxuICAgICAgdW5waW5IaWRlOiB0cnVlLFxuICAgICAgc2xpZGVIaWRlOiB0cnVlLFxuICAgICAgcGluUGluOiBmYWxzZSxcbiAgICAgIHBpblVucGluOiBmYWxzZVxuICAgIH1cbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3R5bGVzID0ge1xuICAgICAgbWluSGVpZ2h0Oic1MDAwcHgnXG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZXN9PlxuXG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZ2lsYm94L3NwYXJrLXNjcm9sbFwiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHN0eWxlPXt7cG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogMCwgcmlnaHQ6IDAsIGJvcmRlcjogMH19XG4gICAgICAgICAgICBzcmM9XCJodHRwczovL2NhbW8uZ2l0aHVidXNlcmNvbnRlbnQuY29tL2U3YmJiMDUyMWIzOTdlZGJkNWZlNDNlN2Y3NjA3NTkzMzZiNWUwNWYvNjg3NDc0NzA3MzNhMmYyZjczMzMyZTYxNmQ2MTdhNmY2ZTYxNzc3MzJlNjM2ZjZkMmY2NzY5NzQ2ODc1NjIyZjcyNjk2MjYyNmY2ZTczMmY2NjZmNzI2YjZkNjU1ZjcyNjk2NzY4NzQ1ZjY3NzI2NTY1NmU1ZjMwMzAzNzMyMzAzMDJlNzA2ZTY3XCJcbiAgICAgICAgICAgIGFsdD1cIkZvcmsgbWUgb24gR2l0SHViXCJcbiAgICAgICAgICAgIGRhdGFDYW5vbmljYWxTcmM9XCJodHRwczovL3MzLmFtYXpvbmF3cy5jb20vZ2l0aHViL3JpYmJvbnMvZm9ya21lX3JpZ2h0X2dyZWVuXzAwNzIwMC5wbmdcIiAvPjwvYT5cblxuICAgICAgICA8SGVybyAvPlxuXG4gICAgICAgIHsvKiBmYWRlICovfVxuICAgICAgICA8U3BhcmtTY3JvbGwuaDJcbiAgICAgICAgICB0aW1lbGluZT17e1xuICAgICAgICAgICAgdG9wQm90dG9tOiB7b3BhY2l0eTogMH0sXG4gICAgICAgICAgICBjZW50ZXJDZW50ZXI6IHtvcGFjaXR5OiAxfVxuICAgICAgICAgIH19PmZhZGU8L1NwYXJrU2Nyb2xsLmgyPlxuXG4gICAgICAgIHsvKiBtb3ZlICovfVxuICAgICAgICA8U3BhcmtTY3JvbGwuaDJcbiAgICAgICAgICB0aW1lbGluZT17e1xuICAgICAgICAgICAgdG9wQm90dG9tOiB7IG1hcmdpbkxlZnQ6ICctNTAwcHgnLCBvcGFjaXR5OiAwIH0sXG4gICAgICAgICAgICBjZW50ZXJDZW50ZXI6IHsgbWFyZ2luTGVmdDogJzBweCcsIG9wYWNpdHk6IDEsIGVhc2U6ICdib3VuY2VQYXN0JyB9XG4gICAgICAgICAgfX0+bW92ZTwvU3BhcmtTY3JvbGwuaDI+XG5cbiAgICAgICAgey8qIHNwaW4gKi99XG4gICAgICAgIDxTcGFya1Byb3h5IHByb3h5SWQ9XCJyb3RhdGUtcHJveHlcIiAvPlxuICAgICAgICA8U3BhcmtTY3JvbGwuaDJcbiAgICAgICAgICBwcm94eT1cInJvdGF0ZS1wcm94eVwiXG4gICAgICAgICAgdGltZWxpbmU9e3tcbiAgICAgICAgICAgIHRvcEJvdHRvbTogeyByb3RhdGU6ICcwZGVnJyB9ICxcbiAgICAgICAgICAgIHRvcENlbnRlcjogeyByb3RhdGU6ICczNjBkZWcnIH1cbiAgICAgICAgICB9fT5zcGluPC9TcGFya1Njcm9sbC5oMj5cblxuICAgICAgICB7Lyogc2NhbGUgKi99XG4gICAgICAgIDxTcGFya1Byb3h5IHByb3h5SWQ9XCJzY2FsZS1wcm94eVwiIC8+XG4gICAgICAgIDxTcGFya1Njcm9sbC5oMlxuICAgICAgICAgIHByb3h5PVwic2NhbGUtcHJveHlcIlxuICAgICAgICAgIHRpbWVsaW5lPXt7XG4gICAgICAgICAgICAndG9wQ2VudGVyLTIwMSc6IHsgc2NhbGU6IDAuMDEsIG9wYWNpdHk6IDB9LFxuICAgICAgICAgICAgJ3RvcENlbnRlci0yMDAnOiB7IHNjYWxlOiAwLjAxLCBvcGFjaXR5OiAxIH0sXG4gICAgICAgICAgICAndG9wQ2VudGVyKzcwJzogeyBzY2FsZTogMSwgZWFzZTogJ2JvdW5jZVBhc3QnIH1cbiAgICAgICAgICB9fT5zY2FsZTwvU3BhcmtTY3JvbGwuaDI+XG5cbiAgICAgICAgey8qIHBpbiwgcmV2ZWFsLCBzbGlkZSwgY29sb3IsIHVucGluICovfVxuICAgICAgICA8U3BhcmtQcm94eS5kaXYgY2xhc3NOYW1lPVwicGluLWNvbnRcIiBwcm94eUlkPVwicGluLWNvbnRcIj5cblxuICAgICAgICAgIDxTcGFya1Njcm9sbC5zZWN0aW9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e2N4KFwicGluXCIse1xuICAgICAgICAgICAgICAncGluLXBpbic6dGhpcy5zdGF0ZS5waW5QaW4sXG4gICAgICAgICAgICAgICdwaW4tdW5waW4nOnRoaXMuc3RhdGUucGluVW5waW59KX1cbiAgICAgICAgICAgIHByb3h5PVwicGluLWNvbnRcIlxuICAgICAgICAgICAgdGltZWxpbmU9e3tcbiAgICAgICAgICAgICAgdG9wVG9wOiB7XG4gICAgICAgICAgICAgICAgb25Eb3duOiAoKSA9PiB0aGlzLnNldFN0YXRlKHtwaW5QaW46dHJ1ZX0pLFxuICAgICAgICAgICAgICAgIG9uVXA6ICAgKCkgPT4gdGhpcy5zZXRTdGF0ZSh7cGluUGluOmZhbHNlfSlcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgYm90dG9tQm90dG9tOiB7XG4gICAgICAgICAgICAgICAgb25Eb3duOiAoKSA9PiB0aGlzLnNldFN0YXRlKHtwaW5VbnBpbjp0cnVlfSksXG4gICAgICAgICAgICAgICAgb25VcDogICAoKSA9PiB0aGlzLnNldFN0YXRlKHtwaW5VbnBpbjpmYWxzZX0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19PlxuXG4gICAgICAgICAgICA8U3BhcmtTY3JvbGwuaDNcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGluLXR4dFwiXG4gICAgICAgICAgICAgIHByb3h5PVwicGluLWNvbnRcIlxuICAgICAgICAgICAgICB0aW1lbGluZT17e1xuICAgICAgICAgICAgICAgICd0b3BUb3AnOiB7IHRvcDogJzAlJywgbWFyZ2luVG9wOiAnMHB4JyB9LFxuICAgICAgICAgICAgICAgICd0b3BUb3ArNTAgICc6IHsgdG9wOiAnNTAlJywgbWFyZ2luVG9wOiAnLTYwcHgnIH1cbiAgICAgICAgICAgICAgfX0+cGluPC9TcGFya1Njcm9sbC5oMz5cblxuICAgICAgICAgICAgPFNwYXJrU2Nyb2xsLmRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXZlYWxcIlxuICAgICAgICAgICAgICBwcm94eT1cInBpbi1jb250XCJcbiAgICAgICAgICAgICAgdGltZWxpbmU9e3tcbiAgICAgICAgICAgICAgICAndG9wVG9wKzEwMCc6IHt3aWR0aDogJzAlJywgYmFja2dyb3VuZENvbG9yOiAnIzVjODMyZid9LFxuICAgICAgICAgICAgICAgICd0b3BUb3ArMjUwJzoge3dpZHRoOiBbJzEwMCUnLCAnZWFzZU91dFF1YXJ0J10sIGJhY2tncm91bmRDb2xvcjogJyMzODI1MTMnfVxuICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInJldmVhbC10eHRcIj5yZXZlYWw8L2gzPlxuICAgICAgICAgICAgPC9TcGFya1Njcm9sbC5kaXY+XG5cbiAgICAgICAgICAgIHsvKiB3aXRoIGFycmF5IG5vdGF0aW9uIHdlIGNhbiBhcHBseSBib3VuY2UgZWFzaW5nIHRvIGp1c3Qgb25lIHByb3BlcnR5IGluIGEga2V5ZnJhbWUgKi8gfVxuICAgICAgICAgICAgPFNwYXJrU2Nyb2xsLmRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KFwic2xpZGVcIix7aGlkZTp0aGlzLnN0YXRlLnNsaWRlSGlkZX0pfVxuICAgICAgICAgICAgICBwcm94eT1cInBpbi1jb250XCJcbiAgICAgICAgICAgICAgdGltZWxpbmU9e3tcbiAgICAgICAgICAgICAgICAndG9wVG9wKzI1MCc6IHtcbiAgICAgICAgICAgICAgICAgIGJvdHRvbTogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzVjODMyZicsXG4gICAgICAgICAgICAgICAgICBvbkRvd246ICgpID0+IHRoaXMuc2V0U3RhdGUoe3NsaWRlSGlkZTpmYWxzZX0pLFxuICAgICAgICAgICAgICAgICAgb25VcDogICAoKSA9PiB0aGlzLnNldFN0YXRlKHtzbGlkZUhpZGU6dHJ1ZX0pXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAndG9wVG9wKzQwMCc6IHtib3R0b206IFsnMCUnLCAnYm91bmNlJ10sIGJhY2tncm91bmRDb2xvcjogJyMyODQ5MDcnfSxcbiAgICAgICAgICAgICAgICAndG9wVG9wKzQ1MCc6IHtiYWNrZ3JvdW5kQ29sb3I6ICcjMDBhJ30sXG4gICAgICAgICAgICAgICAgJ3RvcFRvcCs1MDAnOiB7YmFja2dyb3VuZENvbG9yOiAnI2EwMCd9LFxuICAgICAgICAgICAgICAgICd0b3BUb3ArNTUwJzoge2JhY2tncm91bmRDb2xvcjogJyM1YzgzMmYnfVxuICAgICAgICAgICAgICB9fT5cblxuICAgICAgICAgICAgICB7Lyogd2hlbiB3ZSBoaXQgdGhlIGFwcHJvcHJpYXRlIHNjcm9sbCBwb3NpdGlvbiwgdXNlIG9uVXAvb25Eb3duIHRvIGNoYW5nZSB0aGVcbiAgICAgICAgICAgICAgICAgICAgdGV4dCB0byAnc2xpZGUnIG9yICdjb2xvcicgZGVwZW5kaW5nIG9uIHRoZSBzY3JvbGwgZGlyZWN0aW9uICovfVxuICAgICAgICAgICAgICA8U3BhcmtTY3JvbGwuaDNcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzbGlkZS10eHRcIlxuICAgICAgICAgICAgICAgIHByb3h5PVwicGluLWNvbnRcIlxuICAgICAgICAgICAgICAgIHRpbWVsaW5lPXt7XG4gICAgICAgICAgICAgICAgICAndG9wVG9wKzQwMCc6IHtcbiAgICAgICAgICAgICAgICAgICAgb25Eb3duOiAoKSA9PiB0aGlzLnNldFN0YXRlKHt0ZXh0Oidjb2xvcid9KSxcbiAgICAgICAgICAgICAgICAgICAgb25VcDogICAoKSA9PiB0aGlzLnNldFN0YXRlKHt0ZXh0OidzbGlkZSd9KSB9XG4gICAgICAgICAgICAgICAgfX0+e3RoaXMuc3RhdGUudGV4dH08L1NwYXJrU2Nyb2xsLmgzPlxuXG4gICAgICAgICAgICAgIDxTcGFya1Njcm9sbC5oM1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goXCJ1bnBpbi10eHRcIix7aGlkZTp0aGlzLnN0YXRlLnVucGluSGlkZX0pfVxuICAgICAgICAgICAgICAgIHByb3h5PVwicGluLWNvbnRcIlxuICAgICAgICAgICAgICAgIHRpbWVsaW5lPXt7XG4gICAgICAgICAgICAgICAgICd0b3BUb3ArNjAwJzoge1xuICAgICAgICAgICAgICAgICAgIHRvcDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgIG9uRG93bjogKCkgPT4gdGhpcy5zZXRTdGF0ZSh7dW5waW5IaWRlOmZhbHNlfSksXG4gICAgICAgICAgICAgICAgICAgb25VcDogICAoKSA9PiB0aGlzLnNldFN0YXRlKHt1bnBpbkhpZGU6dHJ1ZX0pIH0sXG4gICAgICAgICAgICAgICAgICdib3R0b21Cb3R0b20nOiB7IHRvcDogJzUwJScgfVxuICAgICAgICAgICAgICAgICB9fT51bnBpbjwvU3BhcmtTY3JvbGwuaDM+XG4gICAgICAgICAgICA8L1NwYXJrU2Nyb2xsLmRpdj5cblxuICAgICAgICAgIDwvU3BhcmtTY3JvbGwuc2VjdGlvbj5cblxuICAgICAgICA8L1NwYXJrUHJveHkuZGl2PlxuXG5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlcjUwXCI+PC9kaXY+XG5cbiAgICAgICAgey8qIHBhcmFsbGF4ICovfVxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmxpY2tyLmNvbS9waG90b3MvcmFmYWdhcmNpYV8vMTUyNjIyODc3MzgvaW4vcG9vbC04MzgyMzg1OUBOMDAvXCI+XG4gICAgICAgICAgPFNwYXJrUHJveHkuZGl2IHByb3h5SWQ9XCJwYXJhbGxheFwiIGNsYXNzTmFtZT1cInBhcmFsbGF4LWNvbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFyYWxsYXgtc2hhZG93XCI+PC9kaXY+XG5cbiAgICAgICAgICAgIDxTcGFya1Njcm9sbC5kaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGFyYWxsYXgtaW1nXCJcbiAgICAgICAgICAgICAgcHJveHk9XCJwYXJhbGxheFwiXG4gICAgICAgICAgICAgIHRpbWVsaW5lPXt7XG4gICAgICAgICAgICAgICAgdG9wQm90dG9tOiB7dHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMHB4LDBweCwwcHgpJ30sXG4gICAgICAgICAgICAgICAgYm90dG9tVG9wOiB7dHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMHB4LC04MHB4LDBweCknfVxuICAgICAgICAgICAgICB9fT48L1NwYXJrU2Nyb2xsLmRpdj5cblxuICAgICAgICAgICAgPFNwYXJrU2Nyb2xsLmgzXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBhcmFsbGF4LXR4dCBmYWRlMlwiXG4gICAgICAgICAgICAgIHByb3h5PVwicGFyYWxsYXhcIlxuICAgICAgICAgICAgICB0aW1lbGluZT17e1xuICAgICAgICAgICAgICAgIHRvcEJvdHRvbTogeyB0cmFuc2Zvcm06ICdzY2FsZSgwLjgpIHRyYW5zbGF0ZTNkKDBweCwxMjBweCwwcHgpJyB9LFxuICAgICAgICAgICAgICAgIGJvdHRvbVRvcDogeyB0cmFuc2Zvcm06ICdzY2FsZSgwLjgpIHRyYW5zbGF0ZTNkKDBweCwtMTIwcHgsMHB4KScgfVxuICAgICAgICAgICAgICB9fT5wYXJhbGxheDwvU3BhcmtTY3JvbGwuaDM+XG5cbiAgICAgICAgICAgIDxTcGFya1Njcm9sbC5oM1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwYXJhbGxheC10eHQgZmFkZTFcIlxuICAgICAgICAgICAgICBwcm94eT1cInBhcmFsbGF4XCJcbiAgICAgICAgICAgICAgdGltZWxpbmU9e3tcbiAgICAgICAgICAgICAgICB0b3BCb3R0b206IHt0cmFuc2Zvcm06ICdzY2FsZSgwLjkpIHRyYW5zbGF0ZTNkKDBweCwxNjBweCwwcHgpJ30sXG4gICAgICAgICAgICAgICAgYm90dG9tVG9wOiB7dHJhbnNmb3JtOiAnc2NhbGUoMC45KSB0cmFuc2xhdGUzZCgwcHgsLTE2MHB4LDBweCknfVxuICAgICAgICAgICAgICB9fT5wYXJhbGxheDwvU3BhcmtTY3JvbGwuaDM+XG5cbiAgICAgICAgICAgIDxTcGFya1Njcm9sbC5oM1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwYXJhbGxheC10eHRcIlxuICAgICAgICAgICAgICBwcm94eT1cInBhcmFsbGF4XCJcbiAgICAgICAgICAgICAgdGltZWxpbmU9e3tcbiAgICAgICAgICAgICAgICB0b3BCb3R0b206IHt0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwcHgsMjAwcHgsMHB4KSd9LFxuICAgICAgICAgICAgICAgIGJvdHRvbVRvcDoge3RyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDBweCwtMjAwcHgsMHB4KSd9XG4gICAgICAgICAgICAgIH19PnBhcmFsbGF4PC9TcGFya1Njcm9sbC5oMz5cbiAgICAgICAgICA8L1NwYXJrUHJveHkuZGl2PlxuICAgICAgICA8L2E+XG5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlcjUwXCI+PC9kaXY+XG5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9naWxib3gvcmVhY3Qtc3Bhcmstc2Nyb2xsXCI+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjZW50ZXJcIiBzcmM9XCJHaXRIdWItTWFyay02NHB4LnBuZ1wiIGFsdD1cIlwiLz5cbiAgICAgICAgPC9hPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2VyMTBcIj48L2Rpdj5cblxuICAgICAgICA8cCBjbGFzc05hbWU9XCJjZW50ZXJcIj5UaGlzIGRlbW8gd2FzIGluc3BpcmVkIGJ5IDxhIGhyZWY9XCJodHRwOi8vamFucGFlcGtlLmdpdGh1Yi5pby9TY3JvbGxNYWdpYy9cIj5TY3JvbGxNYWdpYzwvYT48L3A+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZXIxMFwiPjwvZGl2PlxuXG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxuUmVhY3QucmVuZGVyKDxBcHAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4YW1wbGUnKSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2V4YW1wbGVzL2RlbW8vYXBwLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCdyZWFjdC1zcGFyay1zY3JvbGwvc3Bhcmstc2Nyb2xsLXJla2FwaScpKHtcbiAgaW52YWxpZGF0ZUF1dG9tYXRpY2FsbHk6IHRydWVcblxuICAvLyB3ZSBjb3VsZCBhZGQgYWRkaXRpb25hbCBvcHRpb25zIGluIGhlcmUuLi5cblxuICAvLyBzZXR1cDogey4uLn1cbiAgLy8gZm9ybXVsYXM6IHsuLi59XG4gIC8vIGFjdGlvblByb3BzOiB7Li4ufVxufSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2V4YW1wbGVzL2RlbW8vYXBwLXNwYXJrLmpzXG4gKiovIiwidmFyIFJla2FwaSA9IHJlcXVpcmUoJ3Jla2FwaS9kaXN0L3Jla2FwaScpO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcbnZhciBfZmFjdG9yeSA9IHJlcXVpcmUoJ3JlYWN0LXNwYXJrLXNjcm9sbCcpO1xuXG5mdW5jdGlvbiBmYWN0b3J5KG9wdGlvbnMpIHtcbiAgcmV0dXJuIF9mYWN0b3J5KGFzc2lnbih7XG4gICAgYW5pbWF0b3I6IHtcbiAgICAgIGluc3RhbmNlOiAoKSA9PiBuZXcgUmVrYXBpKGRvY3VtZW50LmJvZHkpXG4gICAgfVxuICB9LCBvcHRpb25zKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZmFjdG9yeTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zcGFyay1zY3JvbGwtcmVrYXBpLmpzXG4gKiovIiwiLyohIHJla2FwaSAtIHYxLjQuNCAtIDIwMTUtMDEtMDEgLSBodHRwOi8vcmVrYXBpLmNvbSAqL1xuLyohXG4gKiBSZWthcGkgLSBSZXdyaXR0ZW4gS2FwaS5cbiAqIGh0dHA6Ly9yZWthcGkuY29tL1xuICpcbiAqIEJ5IEplcmVteSBLYWhuIChqZXJlbXlja2FobkBnbWFpbC5jb20pXG4gKlxuICogTWFrZSBmdW4ga2V5ZnJhbWUgYW5pbWF0aW9ucyB3aXRoIEphdmFTY3JpcHQuXG4gKlxuICogRGVwZW5kZW5jaWVzOlxuICogICAqIFVuZGVyc2NvcmUuanMgKGh0dHBzOi8vZ2l0aHViLmNvbS9kb2N1bWVudGNsb3VkL3VuZGVyc2NvcmUpIG9yIExvLURhc2ggKGh0dHA6Ly9sb2Rhc2guY29tLylcbiAqICAgKiBTaGlmdHkuanMgKGh0dHBzOi8vZ2l0aHViLmNvbS9qZXJlbXlja2Fobi9zaGlmdHkpLlxuICpcbiAqIE1JVCBMaWNlbnNlLiAgVGhpcyBjb2RlIGZyZWUgdG8gdXNlLCBtb2RpZnksIGRpc3RyaWJ1dGUgYW5kIGVuam95LlxuICovXG5cbjsoZnVuY3Rpb24gKGdsb2JhbCkge1xuXG4vLyBSRUtBUEktR0xPQkFMU1xuLy8gVGhlc2UgYXJlIGdsb2JhbCBpbiBkZXZlbG9wbWVudCwgYnV0IGdldCB3cmFwcGVkIGluIGEgY2xvc3VyZSBhdCBidWlsZC10aW1lLlxuXG4vLyBBIGhhY2sgZm9yIFVnbGlmeUpTIGRlZmluZXMuICBHZXRzIHJlbW92ZXMgaW4gdGhlIGJ1aWxkIHByb2Nlc3MuXG5pZiAodHlwZW9mIFJFS0FQSV9ERUJVRyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgUkVLQVBJX0RFQlVHID0gdHJ1ZTtcbn1cblxudmFyIHJla2FwaU1vZHVsZXMgPSBbXTtcblxuLyohXG4gKiBGaXJlIGFuIGV2ZW50IGJvdW5kIHRvIGEgUmVrYXBpLlxuICogQHBhcmFtIHtSZWthcGl9IHJla2FwaVxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZVxuICogQHBhcmFtIHtVbmRlcnNjb3JlfSBfIEEgcmVmZXJlbmNlIHRvIHRoZSBzY29wZWQgVW5kZXJzY29yZS9Mby1EYXNoXG4gKiBkZXBlbmRlbmN5XG4gKiBAcGFyYW0ge09iamVjdD19IG9wdF9kYXRhIE9wdGlvbmFsIGV2ZW50LXNwZWNpZmljIGRhdGFcbiAqL1xuZnVuY3Rpb24gZmlyZUV2ZW50IChyZWthcGksIGV2ZW50TmFtZSwgXywgb3B0X2RhdGEpIHtcbiAgXy5lYWNoKHJla2FwaS5fZXZlbnRzW2V2ZW50TmFtZV0sIGZ1bmN0aW9uIChoYW5kbGVyKSB7XG4gICAgaGFuZGxlcihyZWthcGksIG9wdF9kYXRhKTtcbiAgfSk7XG59XG5cbi8qIVxuICogQHBhcmFtIHtSZWthcGl9IHJla2FwaVxuICogQHBhcmFtIHtVbmRlcnNjb3JlfSBfXG4gKi9cbmZ1bmN0aW9uIHJlY2FsY3VsYXRlQW5pbWF0aW9uTGVuZ3RoIChyZWthcGksIF8pIHtcbiAgdmFyIGFjdG9yTGVuZ3RocyA9IFtdO1xuXG4gIF8uZWFjaChyZWthcGkuX2FjdG9ycywgZnVuY3Rpb24gKGFjdG9yKSB7XG4gICAgYWN0b3JMZW5ndGhzLnB1c2goYWN0b3IuZ2V0RW5kKCkpO1xuICB9KTtcblxuICByZWthcGkuX2FuaW1hdGlvbkxlbmd0aCA9IE1hdGgubWF4LmFwcGx5KE1hdGgsIGFjdG9yTGVuZ3Rocyk7XG59XG5cbi8qIVxuICogRG9lcyBub3RoaW5nLiAgQWJzb2x1dGVseSBub3RoaW5nIGF0IGFsbC5cbiAqL1xuZnVuY3Rpb24gbm9vcCAoKSB7XG4gIC8vIE5PT1AhXG59XG5cbnZhciByZWthcGlDb3JlID0gZnVuY3Rpb24gKHJvb3QsIF8sIFR3ZWVuYWJsZSkge1xuXG4gICd1c2Ugc3RyaWN0JztcblxuICAvLyBDT05TVEFOVFNcbiAgLy9cbiAgdmFyIFVQREFURV9USU1FID0gMTAwMCAvIDYwO1xuXG4gIC8qIVxuICAgKiBEZXRlcm1pbmVzIHdoaWNoIGl0ZXJhdGlvbiBvZiB0aGUgbG9vcCB0aGUgYW5pbWF0aW9uIGlzIGN1cnJlbnRseSBpbi5cbiAgICogQHBhcmFtIHtSZWthcGl9IHJla2FwaVxuICAgKiBAcGFyYW0ge251bWJlcn0gdGltZVNpbmNlU3RhcnRcbiAgICovXG4gIGZ1bmN0aW9uIGRldGVybWluZUN1cnJlbnRMb29wSXRlcmF0aW9uIChyZWthcGksIHRpbWVTaW5jZVN0YXJ0KSB7XG4gICAgdmFyIGFuaW1hdGlvbkxlbmd0aCA9IHJla2FwaS5fYW5pbWF0aW9uTGVuZ3RoO1xuICAgIGlmIChhbmltYXRpb25MZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0aW1lU2luY2VTdGFydDtcbiAgICB9XG5cbiAgICB2YXIgY3VycmVudEl0ZXJhdGlvbiA9IE1hdGguZmxvb3IodGltZVNpbmNlU3RhcnQgLyBhbmltYXRpb25MZW5ndGgpO1xuICAgIHJldHVybiBjdXJyZW50SXRlcmF0aW9uO1xuICB9XG5cbiAgLyohXG4gICAqIENhbGN1bGF0ZSBob3cgbWFueSBtaWxsaXNlY29uZHMgc2luY2UgdGhlIGFuaW1hdGlvbiBiZWdhbi5cbiAgICogQHBhcmFtIHtSZWthcGl9IHJla2FwaVxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBmdW5jdGlvbiBjYWxjdWxhdGVUaW1lU2luY2VTdGFydCAocmVrYXBpKSB7XG4gICAgcmV0dXJuIG5vdygpIC0gcmVrYXBpLl9sb29wVGltZXN0YW1wO1xuICB9XG5cbiAgLyohXG4gICAqIERldGVybWluZXMgaWYgdGhlIGFuaW1hdGlvbiBpcyBjb21wbGV0ZSBvciBub3QuXG4gICAqIEBwYXJhbSB7UmVrYXBpfSByZWthcGlcbiAgICogQHBhcmFtIHtudW1iZXJ9IGN1cnJlbnRMb29wSXRlcmF0aW9uXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiBpc0FuaW1hdGlvbkNvbXBsZXRlIChyZWthcGksIGN1cnJlbnRMb29wSXRlcmF0aW9uKSB7XG4gICAgcmV0dXJuIGN1cnJlbnRMb29wSXRlcmF0aW9uID49IHJla2FwaS5fdGltZXNUb0l0ZXJhdGVcbiAgICAgICAmJiByZWthcGkuX3RpbWVzVG9JdGVyYXRlICE9PSAtMTtcbiAgfVxuXG4gIC8qIVxuICAgKiBTdG9wcyB0aGUgYW5pbWF0aW9uIGlmIGl0IGlzIGNvbXBsZXRlLlxuICAgKiBAcGFyYW0ge1Jla2FwaX0gcmVrYXBpXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjdXJyZW50TG9vcEl0ZXJhdGlvblxuICAgKi9cbiAgZnVuY3Rpb24gdXBkYXRlUGxheVN0YXRlIChyZWthcGksIGN1cnJlbnRMb29wSXRlcmF0aW9uKSB7XG4gICAgaWYgKGlzQW5pbWF0aW9uQ29tcGxldGUocmVrYXBpLCBjdXJyZW50TG9vcEl0ZXJhdGlvbikpIHtcbiAgICAgIHJla2FwaS5zdG9wKCk7XG4gICAgICBmaXJlRXZlbnQocmVrYXBpLCAnYW5pbWF0aW9uQ29tcGxldGUnLCBfKTtcbiAgICB9XG4gIH1cblxuICAvKiFcbiAgICogQ2FsY3VsYXRlIGhvdyBmYXIgaW4gdGhlIGFuaW1hdGlvbiBsb29wIGByZWthcGlgIGlzLCBpbiBtaWxsaXNlY29uZHMsXG4gICAqIGJhc2VkIG9uIHRoZSBjdXJyZW50IHRpbWUuICBBbHNvIG92ZXJmbG93cyBpbnRvIGEgbmV3IGxvb3AgaWYgbmVjZXNzYXJ5LlxuICAgKiBAcGFyYW0ge1Jla2FwaX0gcmVrYXBpXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBmb3JNaWxsaXNlY29uZFxuICAgKiBAcGFyYW0ge251bWJlcn0gY3VycmVudExvb3BJdGVyYXRpb25cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZnVuY3Rpb24gY2FsY3VsYXRlTG9vcFBvc2l0aW9uIChyZWthcGksIGZvck1pbGxpc2Vjb25kLCBjdXJyZW50TG9vcEl0ZXJhdGlvbikge1xuICAgIHZhciBjdXJyZW50TG9vcFBvc2l0aW9uO1xuICAgIHZhciBhbmltYXRpb25MZW5ndGggPSByZWthcGkuX2FuaW1hdGlvbkxlbmd0aDtcblxuICAgIGlmIChhbmltYXRpb25MZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIGlmIChpc0FuaW1hdGlvbkNvbXBsZXRlKHJla2FwaSwgY3VycmVudExvb3BJdGVyYXRpb24pKSB7XG4gICAgICAvLyBSZXdpbmQgdG8gdGhlIGVuZCBpZiB0aGUgcGxheWhlYWQgaGFzIGdvbmUgcGFzdCBpdFxuICAgICAgY3VycmVudExvb3BQb3NpdGlvbiA9IGFuaW1hdGlvbkxlbmd0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudExvb3BQb3NpdGlvbiA9IGZvck1pbGxpc2Vjb25kICUgYW5pbWF0aW9uTGVuZ3RoO1xuICAgIH1cblxuICAgIHJldHVybiBjdXJyZW50TG9vcFBvc2l0aW9uO1xuICB9XG5cbiAgLyohXG4gICAqIENhbGN1bGF0ZSB0aGUgdGltZWxpbmUgcG9zaXRpb24gYW5kIHN0YXRlIGZvciBhIGdpdmVuIG1pbGxpc2Vjb25kLlxuICAgKiBVcGRhdGVzIHRoZSBgcmVrYXBpYCBzdGF0ZSBpbnRlcm5hbGx5IGFuZCBhY2NvdW50cyBmb3IgaG93IG1hbnkgbG9vcFxuICAgKiBpdGVyYXRpb25zIHRoZSBhbmltYXRpb24gcnVucyBmb3IuXG4gICAqIEBwYXJhbSB7UmVrYXBpfSByZWthcGlcbiAgICogQHBhcmFtIHtudW1iZXJ9IGZvck1pbGxpc2Vjb25kXG4gICAqL1xuICBmdW5jdGlvbiB1cGRhdGVUb01pbGxpc2Vjb25kIChyZWthcGksIGZvck1pbGxpc2Vjb25kKSB7XG4gICAgdmFyIGxvb3BQb3NpdGlvbiA9IDA7XG4gICAgdmFyIGN1cnJlbnRJdGVyYXRpb24gPSAwO1xuXG4gICAgY3VycmVudEl0ZXJhdGlvbiA9IGRldGVybWluZUN1cnJlbnRMb29wSXRlcmF0aW9uKHJla2FwaSwgZm9yTWlsbGlzZWNvbmQpO1xuICAgIGxvb3BQb3NpdGlvbiA9IGNhbGN1bGF0ZUxvb3BQb3NpdGlvbihcbiAgICAgIHJla2FwaSwgZm9yTWlsbGlzZWNvbmQsIGN1cnJlbnRJdGVyYXRpb24pO1xuICAgIHJla2FwaS5fbG9vcFBvc2l0aW9uID0gbG9vcFBvc2l0aW9uO1xuXG4gICAgdmFyIGtleWZyYW1lUmVzZXRMaXN0ID0gW107XG5cbiAgICBpZiAoY3VycmVudEl0ZXJhdGlvbiA+IHJla2FwaS5fbGF0ZXN0SXRlcmF0aW9uKSB7XG4gICAgICBmaXJlRXZlbnQocmVrYXBpLCAnYW5pbWF0aW9uTG9vcGVkJywgXyk7XG5cbiAgICAgIC8vIFJlc2V0IGZ1bmN0aW9uIGtleWZyYW1lc1xuICAgICAgdmFyIGxvb2t1cE9iamVjdCA9IHsgbmFtZTogJ2Z1bmN0aW9uJyB9O1xuICAgICAgXy5lYWNoKHJla2FwaS5fYWN0b3JzLCBmdW5jdGlvbiAoYWN0b3IpIHtcbiAgICAgICAgdmFyIGZuS2V5ZnJhbWVzID0gXy53aGVyZShhY3Rvci5fa2V5ZnJhbWVQcm9wZXJ0aWVzLCBsb29rdXBPYmplY3QpO1xuXG4gICAgICAgIHZhciBsYXN0Rm5LZXlmcmFtZSA9IF8ubGFzdChmbktleWZyYW1lcyk7XG5cbiAgICAgICAgaWYgKGxhc3RGbktleWZyYW1lICYmICFsYXN0Rm5LZXlmcmFtZS5oYXNGaXJlZCkge1xuICAgICAgICAgIGxhc3RGbktleWZyYW1lLmludm9rZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAga2V5ZnJhbWVSZXNldExpc3QgPSBrZXlmcmFtZVJlc2V0TGlzdC5jb25jYXQoZm5LZXlmcmFtZXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVrYXBpLl9sYXRlc3RJdGVyYXRpb24gPSBjdXJyZW50SXRlcmF0aW9uO1xuICAgIHJla2FwaS51cGRhdGUobG9vcFBvc2l0aW9uKTtcbiAgICB1cGRhdGVQbGF5U3RhdGUocmVrYXBpLCBjdXJyZW50SXRlcmF0aW9uKTtcblxuICAgIF8uZWFjaChrZXlmcmFtZVJlc2V0TGlzdCwgZnVuY3Rpb24gKGZuS2V5ZnJhbWUpIHtcbiAgICAgIGZuS2V5ZnJhbWUuaGFzRmlyZWQgPSBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qIVxuICAgKiBDYWxjdWxhdGUgaG93IGZhciBpbnRvIHRoZSBhbmltYXRpb24gbG9vcCBgcmVrYXBpYCBpcywgaW4gbWlsbGlzZWNvbmRzLFxuICAgKiBhbmQgdXBkYXRlIGJhc2VkIG9uIHRoYXQgdGltZS5cbiAgICogQHBhcmFtIHtSZWthcGl9IHJla2FwaVxuICAgKi9cbiAgZnVuY3Rpb24gdXBkYXRlVG9DdXJyZW50TWlsbGlzZWNvbmQgKHJla2FwaSkge1xuICAgIHVwZGF0ZVRvTWlsbGlzZWNvbmQocmVrYXBpLCBjYWxjdWxhdGVUaW1lU2luY2VTdGFydChyZWthcGkpKTtcbiAgfVxuXG4gIC8qIVxuICAgKiBUaGlzIGlzIHRoZSBoZWFydGJlYXQgb2YgYW4gYW5pbWF0aW9uLiAgVGhpcyB1cGRhdGVzIGByZWthcGlgJ3Mgc3RhdGUgYW5kXG4gICAqIHRoZW4gY2FsbHMgaXRzZWxmIGNvbnRpbnVvdXNseS5cbiAgICogQHBhcmFtIHtSZWthcGl9IHJla2FwaVxuICAgKi9cbiAgZnVuY3Rpb24gdGljayAocmVrYXBpKSB7XG4gICAgLy8gTmVlZCB0byBjaGVjayBmb3IgLmNhbGwgcHJlc2VuY2UgdG8gZ2V0IGFyb3VuZCBhbiBJRSBsaW1pdGF0aW9uLiAgU2VlXG4gICAgLy8gYW5ub3RhdGlvbiBmb3IgY2FuY2VsTG9vcCBmb3IgbW9yZSBpbmZvLlxuICAgIGlmIChyZWthcGkuX3NjaGVkdWxlVXBkYXRlLmNhbGwpIHtcbiAgICAgIHJla2FwaS5fbG9vcElkID0gcmVrYXBpLl9zY2hlZHVsZVVwZGF0ZS5jYWxsKGdsb2JhbCxcbiAgICAgICAgcmVrYXBpLl91cGRhdGVGbiwgVVBEQVRFX1RJTUUpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZWthcGkuX2xvb3BJZCA9IHNldFRpbWVvdXQocmVrYXBpLl91cGRhdGVGbiwgVVBEQVRFX1RJTUUpO1xuICAgIH1cbiAgfVxuXG4gIC8qIVxuICAgKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAgICovXG4gIGZ1bmN0aW9uIGdldFVwZGF0ZU1ldGhvZCAoKSB7XG4gICAgLy8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCkgc2hpbSBieSBQYXVsIElyaXNoIChtb2RpZmllZCBmb3IgUmVrYXBpKVxuICAgIC8vIGh0dHA6Ly9wYXVsaXJpc2guY29tLzIwMTEvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1hbmltYXRpbmcvXG4gICAgcmV0dXJuIGdsb2JhbC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgIHx8XG4gICAgZ2xvYmFsLndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgIGdsb2JhbC5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lICAgICAgfHxcbiAgICBnbG9iYWwubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgICAgIHx8XG4gICAgICAoZ2xvYmFsLm1vekNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgICAgICYmIGdsb2JhbC5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUpIHx8XG4gICAgZ2xvYmFsLnNldFRpbWVvdXQ7XG4gIH1cblxuICAvKiFcbiAgICogQHJldHVybiB7RnVuY3Rpb259XG4gICAqL1xuICBmdW5jdGlvbiBnZXRDYW5jZWxNZXRob2QgKCkge1xuICAgIHJldHVybiBnbG9iYWwuY2FuY2VsQW5pbWF0aW9uRnJhbWUgIHx8XG4gICAgZ2xvYmFsLndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgZ2xvYmFsLm9DYW5jZWxBbmltYXRpb25GcmFtZSAgICAgIHx8XG4gICAgZ2xvYmFsLm1zQ2FuY2VsQW5pbWF0aW9uRnJhbWUgICAgIHx8XG4gICAgZ2xvYmFsLm1vekNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgIGdsb2JhbC5jbGVhclRpbWVvdXQ7XG4gIH1cblxuICAvKiFcbiAgICogQ2FuY2VscyBhbiB1cGRhdGUgbG9vcC4gIFRoaXMgYWJzdHJhY3Rpb24gaXMgbmVlZGVkIHRvIGdldCBhcm91bmQgdGhlIGZhY3RcbiAgICogdGhhdCBpbiBJRSwgY2xlYXJUaW1lb3V0IGlzIG5vdCB0ZWNobmljYWxseSBhIGZ1bmN0aW9uXG4gICAqIChodHRwczovL3R3aXR0ZXIuY29tL2tpdGNhbWJyaWRnZS9zdGF0dXMvMjA2NjU1MDYwMzQyNjAzNzc3KSBhbmQgdGh1c1xuICAgKiBGdW5jdGlvbi5wcm90b3R5cGUuY2FsbCBjYW5ub3QgYmUgdXNlZCB1cG9uIGl0LlxuICAgKiBAcGFyYW0ge1Jla2FwaX0gcmVrYXBpXG4gICAqL1xuICBmdW5jdGlvbiBjYW5jZWxMb29wIChyZWthcGkpIHtcbiAgICBpZiAocmVrYXBpLl9jYW5jZWxVcGRhdGUuY2FsbCkge1xuICAgICAgcmVrYXBpLl9jYW5jZWxVcGRhdGUuY2FsbChnbG9iYWwsIHJla2FwaS5fbG9vcElkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2xlYXJUaW1lb3V0KHJla2FwaS5fbG9vcElkKTtcbiAgICB9XG4gIH1cblxuICAvLyBDT1JFLVNQRUNJRklDIFZBUlMgQU5EIEZVTkNUSU9OU1xuXG4gIHZhciBub3cgPSBUd2VlbmFibGUubm93O1xuXG4gIHZhciBwbGF5U3RhdGUgPSB7XG4gICAgJ1NUT1BQRUQnOiAnc3RvcHBlZCdcbiAgICAsJ1BBVVNFRCc6ICdwYXVzZWQnXG4gICAgLCdQTEFZSU5HJzogJ3BsYXlpbmcnXG4gIH07XG5cbiAgLyoqXG4gICAqIElmIHRoaXMgaXMgYSByZW5kZXJlZCBhbmltYXRpb24sIHRoZSBhcHByb3ByaWF0ZSByZW5kZXJlciBpcyBhY2Nlc3NpYmxlIGFzXG4gICAqIGB0aGlzLnJlbmRlcmVyYC4gIElmIHByb3ZpZGVkLCBhIHJlZmVyZW5jZSB0byBgb3B0X2NvbnRleHRgIGlzIGFjY2Vzc2libGVcbiAgICogYXMgYHRoaXMuY29udGV4dGAuXG4gICAqIEBjbGFzcyBSZWthcGlcbiAgICogQHBhcmFtIHtPYmplY3R8Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfEhUTUxFbGVtZW50PX0gb3B0X2NvbnRleHQgVGhpc1xuICAgKiBkZXRlcm1pbmVzIGhvdyB0byByZW5kZXIgdGhlIGFuaW1hdGlvbi4gIElmIHRoaXMgaXMgbm90IHByb3ZpZGVkIG9yIGlzIGFcbiAgICogcGxhaW4gb2JqZWN0IChge31gKSwgdGhlIGFuaW1hdGlvbiB3aWxsIG5vdCByZW5kZXIgYW55dGhpbmcgYW5kXG4gICAqIGB0aGlzLnJlbmRlcmVyYCB3aWxsIGJlIGB1bmRlZmluZWRgLiAgSWYgdGhpcyBpcyBhIHJlZmVyZW5jZSB0byBhXG4gICAqIFtgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEYF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCksXG4gICAqIGB7eyNjcm9zc0xpbmsgXCJSZWthcGkuQ2FudmFzUmVuZGVyZXJcIn19e3svY3Jvc3NMaW5rfX1gIHdpbGwgYmUgaW5pdGlhbGl6ZWRcbiAgICogYXMgYHRoaXMucmVuZGVyZXJgIGZvciBIVE1MNSBjYW52YXMtYmFzZWQgcmVuZGVyaW5nLiAgVGhpcyB0aGlzIGlzIGFcbiAgICogcmVmZXJlbmNlIHRvIGEgRE9NIGVsZW1lbnQsIGB7eyNjcm9zc0xpbmtcbiAgICogXCJSZWthcGkuRE9NUmVuZGVyZXJcIn19e3svY3Jvc3NMaW5rfX1gIHdpbGwgYmUgaW5pdGlhbGl6ZWQgYXNcbiAgICogYHRoaXMucmVuZGVyZXJgIGZvciBlaXRoZXIgYSBET00gb3IgQ1NTIGBAa2V5ZnJhbWVgLWJhc2VkIHJlbmRlcmluZy5cbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBjaGFpbmFibGVcbiAgICovXG4gIGZ1bmN0aW9uIFJla2FwaSAob3B0X2NvbnRleHQpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBvcHRfY29udGV4dCB8fCB7fTtcbiAgICB0aGlzLl9hY3RvcnMgPSB7fTtcbiAgICB0aGlzLl9wbGF5U3RhdGUgPSBwbGF5U3RhdGUuU1RPUFBFRDtcblxuICAgIHRoaXMuX2V2ZW50cyA9IHtcbiAgICAgICdhbmltYXRpb25Db21wbGV0ZSc6IFtdXG4gICAgICAsJ3BsYXlTdGF0ZUNoYW5nZSc6IFtdXG4gICAgICAsJ3BsYXknOiBbXVxuICAgICAgLCdwYXVzZSc6IFtdXG4gICAgICAsJ3N0b3AnOiBbXVxuICAgICAgLCdiZWZvcmVVcGRhdGUnOiBbXVxuICAgICAgLCdhZnRlclVwZGF0ZSc6IFtdXG4gICAgICAsJ2FkZEFjdG9yJzogW11cbiAgICAgICwncmVtb3ZlQWN0b3InOiBbXVxuICAgICAgLCdhZGRLZXlmcmFtZVByb3BlcnR5JzogW11cbiAgICAgICwncmVtb3ZlS2V5ZnJhbWVQcm9wZXJ0eSc6IFtdXG4gICAgICAsJ2FkZEtleWZyYW1lUHJvcGVydHlUcmFjayc6IFtdXG4gICAgICAsJ3RpbWVsaW5lTW9kaWZpZWQnOiBbXVxuICAgICAgLCdhbmltYXRpb25Mb29wZWQnOiBbXVxuICAgIH07XG5cbiAgICAvLyBIb3cgbWFueSB0aW1lcyB0byBsb29wIHRoZSBhbmltYXRpb24gYmVmb3JlIHN0b3BwaW5nXG4gICAgdGhpcy5fdGltZXNUb0l0ZXJhdGUgPSAtMTtcblxuICAgIC8vIE1pbGxpc2Vjb25kIGR1cmF0aW9uIG9mIHRoZSBhbmltYXRpb25cbiAgICB0aGlzLl9hbmltYXRpb25MZW5ndGggPSAwO1xuXG4gICAgLy8gVGhlIHNldFRpbWVvdXQgSUQgb2YgYHRpY2tgXG4gICAgdGhpcy5fbG9vcElkID0gbnVsbDtcblxuICAgIC8vIFRoZSBVTklYIHRpbWUgYXQgd2hpY2ggdGhlIGFuaW1hdGlvbiBsb29wIHN0YXJ0ZWRcbiAgICB0aGlzLl9sb29wVGltZXN0YW1wID0gbnVsbDtcblxuICAgIC8vIFVzZWQgZm9yIG1haW50YWluaW5nIHBvc2l0aW9uIHdoZW4gdGhlIGFuaW1hdGlvbiBpcyBwYXVzZWRcbiAgICB0aGlzLl9wYXVzZWRBdFRpbWUgPSBudWxsO1xuXG4gICAgLy8gVGhlIGxhc3QgbWlsbGlzZWNvbmQgcG9zaXRpb24gdGhhdCB3YXMgdXBkYXRlZFxuICAgIHRoaXMuX2xhc3RVcGRhdGVkTWlsbGlzZWNvbmQgPSAwO1xuXG4gICAgLy8gVGhlIG1vc3QgcmVjZW50IGxvb3AgaXRlcmF0aW9uIGEgZnJhbWUgd2FzIGNhbGN1bGF0ZWQgZm9yXG4gICAgdGhpcy5fbGF0ZXN0SXRlcmF0aW9uID0gMDtcblxuICAgIC8vIFRoZSBtb3N0IHJlY2VudCBtaWxsaXNlY29uZCBwb3NpdGlvbiB3aXRoaW4gdGhlIGxvb3AgdGhhdCB0aGUgYW5pbWF0aW9uXG4gICAgLy8gd2FzIHVwZGF0ZWQgdG9cbiAgICB0aGlzLl9sb29wUG9zaXRpb24gPSBudWxsO1xuXG4gICAgdGhpcy5fc2NoZWR1bGVVcGRhdGUgPSBnZXRVcGRhdGVNZXRob2QoKTtcbiAgICB0aGlzLl9jYW5jZWxVcGRhdGUgPSBnZXRDYW5jZWxNZXRob2QoKTtcblxuICAgIHRoaXMuX3VwZGF0ZUZuID0gXy5iaW5kKGZ1bmN0aW9uICgpIHtcbiAgICAgIHRpY2sodGhpcyk7XG4gICAgICB1cGRhdGVUb0N1cnJlbnRNaWxsaXNlY29uZCh0aGlzKTtcbiAgICB9LCB0aGlzKTtcblxuICAgIF8uZWFjaChSZWthcGkuX3JlbmRlcmVySW5pdEhvb2ssIGZ1bmN0aW9uIChyZW5kZXJlckluaXRIb29rKSB7XG4gICAgICByZW5kZXJlckluaXRIb29rKHRoaXMpO1xuICAgIH0sIHRoaXMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBEZWNvcmF0ZSB0aGUgUmVrYXBpIG9iamVjdCB3aXRoIHRoZSBkZXBlbmRlbmNpZXMgc28gdGhhdCBvdGhlciBtb2R1bGVzIGNhblxuICAvLyBhY2Nlc3MgdGhlbS5cbiAgUmVrYXBpLlR3ZWVuYWJsZSA9IFR3ZWVuYWJsZTtcbiAgUmVrYXBpLl8gPSBfO1xuXG4gIC8qIVxuICAgKiBAdHlwZSB7T2JqZWN0LjxmdW5jdGlvbj59IENvbnRhaW5zIHRoZSBjb250ZXh0IGluaXQgZnVuY3Rpb24gdG8gYmUgY2FsbGVkXG4gICAqIGluIHRoZSBSZWthcGkgY29uc3RydWN0b3IuXG4gICAqL1xuICBSZWthcGkuX3JlbmRlcmVySW5pdEhvb2sgPSB7fTtcblxuICAvKipcbiAgICogQWRkIGFuIGFjdG9yIHRvIHRoZSBhbmltYXRpb24uICBEZWNvcmF0ZXMgdGhlIGFkZGVkIGBhY3RvcmAgd2l0aCBhXG4gICAqIHJlZmVyZW5jZSB0byB0aGlzIGBSZWthcGlgIGluc3RhbmNlIGFzIGB0aGlzLnJla2FwaWAuXG4gICAqXG4gICAqIEBtZXRob2QgYWRkQWN0b3JcbiAgICogQHBhcmFtIHtSZWthcGkuQWN0b3J8T2JqZWN0fSBhY3RvciBJZiB0aGlzIGlzIGFuIGBPYmplY3RgLCBpdCBpcyB1c2VkIHRvXG4gICAqIGFzIHRoZSBjb25zdHJ1Y3RvciBwYXJhbWV0ZXJzIGZvciBhIG5ldyBge3sjY3Jvc3NMaW5rXG4gICAqIFwiUmVrYXBpLkFjdG9yXCJ9fXt7L2Nyb3NzTGlua319YCBpbnN0YW5jZSB0aGF0IGlzIGNyZWF0ZWQgYnkgdGhpcyBtZXRob2QuXG4gICAqIEByZXR1cm4ge1Jla2FwaS5BY3Rvcn0gVGhlIGFjdG9yIHRoYXQgd2FzIGFkZGVkLlxuICAgKi9cbiAgUmVrYXBpLnByb3RvdHlwZS5hZGRBY3RvciA9IGZ1bmN0aW9uIChhY3Rvcikge1xuICAgIHZhciByZWthcGlBY3RvcjtcblxuICAgIGlmIChhY3RvciBpbnN0YW5jZW9mIFJla2FwaS5BY3Rvcikge1xuICAgICAgcmVrYXBpQWN0b3IgPSBhY3RvcjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVrYXBpQWN0b3IgPSBuZXcgUmVrYXBpLkFjdG9yKGFjdG9yKTtcbiAgICB9XG5cbiAgICAvLyBZb3UgY2FuJ3QgYWRkIGFuIGFjdG9yIG1vcmUgdGhhbiBvbmNlLlxuICAgIGlmICghXy5jb250YWlucyh0aGlzLl9hY3RvcnMsIHJla2FwaUFjdG9yKSkge1xuICAgICAgaWYgKHR5cGVvZiByZWthcGlBY3Rvci5jb250ZXh0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZWthcGlBY3Rvci5jb250ZXh0ID0gdGhpcy5jb250ZXh0O1xuICAgICAgfVxuXG4gICAgICByZWthcGlBY3Rvci5yZWthcGkgPSB0aGlzO1xuXG4gICAgICAvLyBTdG9yZSBhIHJlZmVyZW5jZSB0byB0aGUgYWN0b3IgaW50ZXJuYWxseVxuICAgICAgdGhpcy5fYWN0b3JzW3Jla2FwaUFjdG9yLmlkXSA9IHJla2FwaUFjdG9yO1xuXG4gICAgICByZWNhbGN1bGF0ZUFuaW1hdGlvbkxlbmd0aCh0aGlzLCBfKTtcbiAgICAgIHJla2FwaUFjdG9yLnNldHVwKCk7XG5cbiAgICAgIGZpcmVFdmVudCh0aGlzLCAnYWRkQWN0b3InLCBfLCByZWthcGlBY3Rvcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJla2FwaUFjdG9yO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgYSByZWZlcmVuY2UgdG8gYW4gYWN0b3IgZnJvbSB0aGUgYW5pbWF0aW9uIGJ5IGl0cyBgaWRgLiAgWW91IGNhbiB1c2VcbiAgICogYHt7I2Nyb3NzTGluayBcIlJla2FwaS9nZXRBY3RvcklkczptZXRob2RcIn19e3svY3Jvc3NMaW5rfX1gIHRvIGdldCBhIGxpc3RcbiAgICogb2YgSURzIGZvciBhbGwgYWN0b3JzIGluIHRoZSBhbmltYXRpb24uXG4gICAqIEBtZXRob2QgZ2V0QWN0b3JcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFjdG9ySWRcbiAgICogQHJldHVybiB7UmVrYXBpLkFjdG9yfVxuICAgKi9cbiAgUmVrYXBpLnByb3RvdHlwZS5nZXRBY3RvciA9IGZ1bmN0aW9uIChhY3RvcklkKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdG9yc1thY3RvcklkXTtcbiAgfTtcblxuICAvKipcbiAgICogUmV0cmlldmUgdGhlIGBpZGAncyBvZiBhbGwgYWN0b3JzIGluIGFuIGFuaW1hdGlvbi5cbiAgICpcbiAgICogQG1ldGhvZCBnZXRBY3Rvcklkc1xuICAgKiBAcmV0dXJuIHtBcnJheShudW1iZXIpfVxuICAgKi9cbiAgUmVrYXBpLnByb3RvdHlwZS5nZXRBY3RvcklkcyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gXy5wbHVjayh0aGlzLl9hY3RvcnMsICdpZCcpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZSBhbGwgYWN0b3JzIGluIHRoZSBhbmltYXRpb24gYXMgYW4gT2JqZWN0LlxuICAgKiBAbWV0aG9kIGdldEFsbEFjdG9yc1xuICAgKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBrZXlzIG9mIHRoaXMgT2JqZWN0IGNvcnJlc3BvbmQgdG8gdGhlIEFjdG9ycycgYGlkYHMuXG4gICAqL1xuICBSZWthcGkucHJvdG90eXBlLmdldEFsbEFjdG9ycyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gXy5jbG9uZSh0aGlzLl9hY3RvcnMpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIG51bWJlciBvZiBhY3RvcnMgaW4gdGhlIGFuaW1hdGlvbi5cbiAgICogQG1ldGhvZCBnZXRBY3RvckNvdW50XG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIFJla2FwaS5wcm90b3R5cGUuZ2V0QWN0b3JDb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gXy5zaXplKHRoaXMuX2FjdG9ycyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhbiBhY3RvciBmcm9tIHRoZSBhbmltYXRpb24uICBUaGlzIGRvZXMgbm90IGRlc3Ryb3kgdGhlIGFjdG9yLCBpdFxuICAgKiBvbmx5IHJlbW92ZXMgdGhlIGxpbmsgYmV0d2VlbiBpdCBhbmQgdGhlIGBSZWthcGlgIGluc3RhbmNlLiAgVGhpcyBtZXRob2RcbiAgICogY2FsbHMgdGhlIGFjdG9yJ3MgYHRlYXJkb3duYCBtZXRob2QsIGlmIGl0IGlzIGRlZmluZWQuXG4gICAqIEBtZXRob2QgcmVtb3ZlQWN0b3JcbiAgICogQHBhcmFtIHtSZWthcGkuQWN0b3J9IGFjdG9yXG4gICAqIEByZXR1cm4ge1Jla2FwaS5BY3Rvcn1cbiAgICovXG4gIFJla2FwaS5wcm90b3R5cGUucmVtb3ZlQWN0b3IgPSBmdW5jdGlvbiAoYWN0b3IpIHtcbiAgICAvLyBSZW1vdmUgdGhlIGxpbmsgYmV0d2VlbiBSZWthcGkgYW5kIGFjdG9yXG4gICAgZGVsZXRlIHRoaXMuX2FjdG9yc1thY3Rvci5pZF07XG4gICAgZGVsZXRlIGFjdG9yLnJla2FwaTtcblxuICAgIGFjdG9yLnRlYXJkb3duKCk7XG4gICAgcmVjYWxjdWxhdGVBbmltYXRpb25MZW5ndGgodGhpcywgXyk7XG5cbiAgICBmaXJlRXZlbnQodGhpcywgJ3JlbW92ZUFjdG9yJywgXywgYWN0b3IpO1xuXG4gICAgcmV0dXJuIGFjdG9yO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQbGF5IHRoZSBhbmltYXRpb24uXG4gICAqXG4gICAqIF9fW0V4YW1wbGVdKC4uLy4uLy4uLy4uL2RvY3MvZXhhbXBsZXMvcGxheS5odG1sKV9fXG4gICAqIEBtZXRob2QgcGxheVxuICAgKiBAcGFyYW0ge251bWJlcj19IG9wdF9ob3dNYW55VGltZXMgSWYgb21pdHRlZCwgdGhlIGFuaW1hdGlvbiB3aWxsIGxvb3BcbiAgICogZW5kbGVzc2x5LlxuICAgKiBAY2hhaW5hYmxlXG4gICAqL1xuICBSZWthcGkucHJvdG90eXBlLnBsYXkgPSBmdW5jdGlvbiAob3B0X2hvd01hbnlUaW1lcykge1xuICAgIGNhbmNlbExvb3AodGhpcyk7XG5cbiAgICBpZiAodGhpcy5fcGxheVN0YXRlID09PSBwbGF5U3RhdGUuUEFVU0VEKSB7XG4gICAgICAvLyBNb3ZlIHRoZSBwbGF5aGVhZCB0byB0aGUgY29ycmVjdCBwb3NpdGlvbiBpbiB0aGUgdGltZWxpbmUgaWYgcmVzdW1pbmdcbiAgICAgIC8vIGZyb20gYSBwYXVzZVxuICAgICAgdGhpcy5fbG9vcFRpbWVzdGFtcCArPSBub3coKSAtIHRoaXMuX3BhdXNlZEF0VGltZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbG9vcFRpbWVzdGFtcCA9IG5vdygpO1xuICAgIH1cblxuICAgIHRoaXMuX3RpbWVzVG9JdGVyYXRlID0gb3B0X2hvd01hbnlUaW1lcyB8fCAtMTtcbiAgICB0aGlzLl9wbGF5U3RhdGUgPSBwbGF5U3RhdGUuUExBWUlORztcblxuICAgIC8vIFN0YXJ0IHRoZSB1cGRhdGUgbG9vcFxuICAgIHRpY2sodGhpcyk7XG5cbiAgICBmaXJlRXZlbnQodGhpcywgJ3BsYXlTdGF0ZUNoYW5nZScsIF8pO1xuICAgIGZpcmVFdmVudCh0aGlzLCAncGxheScsIF8pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIE1vdmUgdG8gYSBzcGVjaWZpYyBtaWxsaXNlY29uZCBvbiB0aGUgdGltZWxpbmUgYW5kIHBsYXkgZnJvbSB0aGVyZS5cbiAgICpcbiAgICogX19bRXhhbXBsZV0oLi4vLi4vLi4vLi4vZG9jcy9leGFtcGxlcy9wbGF5X2Zyb20uaHRtbClfX1xuICAgKiBAbWV0aG9kIHBsYXlGcm9tXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBtaWxsaXNlY29uZFxuICAgKiBAcGFyYW0ge251bWJlcj19IG9wdF9ob3dNYW55VGltZXMgV29ya3MgYXMgaXQgZG9lcyBpbiB7eyNjcm9zc0xpbmtcbiAgICogXCJSZWthcGkvcGxheTptZXRob2RcIn19e3svY3Jvc3NMaW5rfX0uXG4gICAqIEBjaGFpbmFibGVcbiAgICovXG4gIFJla2FwaS5wcm90b3R5cGUucGxheUZyb20gPSBmdW5jdGlvbiAobWlsbGlzZWNvbmQsIG9wdF9ob3dNYW55VGltZXMpIHtcbiAgICB0aGlzLnBsYXkob3B0X2hvd01hbnlUaW1lcyk7XG4gICAgdGhpcy5fbG9vcFRpbWVzdGFtcCA9IG5vdygpIC0gbWlsbGlzZWNvbmQ7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogUGxheSBmcm9tIHRoZSBsYXN0IGZyYW1lIHRoYXQgd2FzIHJlbmRlcmVkIHdpdGgge3sjY3Jvc3NMaW5rXG4gICAqIFwiUmVrYXBpL3VwZGF0ZTptZXRob2RcIn19e3svY3Jvc3NMaW5rfX0uXG4gICAqXG4gICAqIF9fW0V4YW1wbGVdKC4uLy4uLy4uLy4uL2RvY3MvZXhhbXBsZXMvcGxheV9mcm9tX2N1cnJlbnQuaHRtbClfX1xuICAgKiBAbWV0aG9kIHBsYXlGcm9tQ3VycmVudFxuICAgKiBAcGFyYW0ge251bWJlcj19IG9wdF9ob3dNYW55VGltZXMgV29ya3MgYXMgaXQgZG9lcyBpbiB7eyNjcm9zc0xpbmtcbiAgICogXCJSZWthcGkvcGxheTptZXRob2RcIn19e3svY3Jvc3NMaW5rfX0uXG4gICAqIEBjaGFpbmFibGVcbiAgICovXG4gIFJla2FwaS5wcm90b3R5cGUucGxheUZyb21DdXJyZW50ID0gZnVuY3Rpb24gKG9wdF9ob3dNYW55VGltZXMpIHtcbiAgICByZXR1cm4gdGhpcy5wbGF5RnJvbSh0aGlzLl9sYXN0VXBkYXRlZE1pbGxpc2Vjb25kLCBvcHRfaG93TWFueVRpbWVzKTtcbiAgfTtcblxuICAvKipcbiAgICogUGF1c2UgdGhlIGFuaW1hdGlvbi4gIEEgXCJwYXVzZWRcIiBhbmltYXRpb24gY2FuIGJlIHJlc3VtZWQgZnJvbSB3aGVyZSBpdFxuICAgKiBsZWZ0IG9mZiB3aXRoIHt7I2Nyb3NzTGluayBcIlJla2FwaS9wbGF5Om1ldGhvZFwifX17ey9jcm9zc0xpbmt9fS5cbiAgICpcbiAgICogX19bRXhhbXBsZV0oLi4vLi4vLi4vLi4vZG9jcy9leGFtcGxlcy9wYXVzZS5odG1sKV9fXG4gICAqIEBtZXRob2QgcGF1c2VcbiAgICogQHBhcmFtIHBhdXNlXG4gICAqIEBjaGFpbmFibGVcbiAgICovXG4gIFJla2FwaS5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuX3BsYXlTdGF0ZSA9PT0gcGxheVN0YXRlLlBBVVNFRCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdGhpcy5fcGxheVN0YXRlID0gcGxheVN0YXRlLlBBVVNFRDtcbiAgICBjYW5jZWxMb29wKHRoaXMpO1xuICAgIHRoaXMuX3BhdXNlZEF0VGltZSA9IG5vdygpO1xuXG4gICAgZmlyZUV2ZW50KHRoaXMsICdwbGF5U3RhdGVDaGFuZ2UnLCBfKTtcbiAgICBmaXJlRXZlbnQodGhpcywgJ3BhdXNlJywgXyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogU3RvcCB0aGUgYW5pbWF0aW9uLiAgQSBcInN0b3BwZWRcIiBhbmltYXRpb24gd2lsbCBzdGFydCBmcm9tIHRoZSBiZWdpbm5pbmdcbiAgICogaWYge3sjY3Jvc3NMaW5rIFwiUmVrYXBpL3BsYXk6bWV0aG9kXCJ9fXt7L2Nyb3NzTGlua319IGlzIGNhbGxlZC5cbiAgICpcbiAgICogX19bRXhhbXBsZV0oLi4vLi4vLi4vLi4vZG9jcy9leGFtcGxlcy9zdG9wLmh0bWwpX19cbiAgICogQG1ldGhvZCBzdG9wXG4gICAqIEBjaGFpbmFibGVcbiAgICovXG4gIFJla2FwaS5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9wbGF5U3RhdGUgPSBwbGF5U3RhdGUuU1RPUFBFRDtcbiAgICBjYW5jZWxMb29wKHRoaXMpO1xuXG4gICAgLy8gQWxzbyBraWxsIGFueSBzaGlmdHkgdHdlZW5zIHRoYXQgYXJlIHJ1bm5pbmcuXG4gICAgXy5lYWNoKHRoaXMuX2FjdG9ycywgZnVuY3Rpb24gKGFjdG9yKSB7XG4gICAgICBhY3Rvci5zdG9wKCk7XG4gICAgfSk7XG5cbiAgICBmaXJlRXZlbnQodGhpcywgJ3BsYXlTdGF0ZUNoYW5nZScsIF8pO1xuICAgIGZpcmVFdmVudCh0aGlzLCAnc3RvcCcsIF8pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgaXNQbGF5aW5nXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFdoZXRoZXIgb3Igbm90IHRoZSBhbmltYXRpb24gaXMgcGxheWluZyAobWVhbmluZyBub3QgcGF1c2VkIG9yXG4gICAqIHN0b3BwZWQpLlxuICAgKi9cbiAgUmVrYXBpLnByb3RvdHlwZS5pc1BsYXlpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BsYXlTdGF0ZSA9PT0gcGxheVN0YXRlLlBMQVlJTkc7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbmRlciBhbiBhbmltYXRpb24gZnJhbWUgYXQgYSBzcGVjaWZpYyBwb2ludCBpbiB0aGUgdGltZWxpbmUuXG4gICAqXG4gICAqIF9fW0V4YW1wbGVdKC4uLy4uLy4uLy4uL2RvY3MvZXhhbXBsZXMvdXBkYXRlLmh0bWwpX19cbiAgICogQG1ldGhvZCB1cGRhdGVcbiAgICogQHBhcmFtIHtudW1iZXI9fSBvcHRfbWlsbGlzZWNvbmQgVGhlIHBvaW50IGluIHRoZSB0aW1lbGluZSBhdCB3aGljaCB0b1xuICAgKiByZW5kZXIuICBJZiBvbWl0dGVkLCB0aGlzIHJlbmRlcnMgdGhlIGxhc3QgbWlsbGlzZWNvbmQgdGhhdCB3YXMgcmVuZGVyZWRcbiAgICogKGl0J3MgYSByZS1yZW5kZXIpLlxuICAgKiBAY2hhaW5hYmxlXG4gICAqL1xuICBSZWthcGkucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChvcHRfbWlsbGlzZWNvbmQpIHtcbiAgICBpZiAob3B0X21pbGxpc2Vjb25kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG9wdF9taWxsaXNlY29uZCA9IHRoaXMuX2xhc3RVcGRhdGVkTWlsbGlzZWNvbmQ7XG4gICAgfVxuXG4gICAgZmlyZUV2ZW50KHRoaXMsICdiZWZvcmVVcGRhdGUnLCBfKTtcblxuICAgIC8vIFVwZGF0ZSBhbmQgcmVuZGVyIGVhY2ggb2YgdGhlIGFjdG9yc1xuICAgIF8uZWFjaCh0aGlzLl9hY3RvcnMsIGZ1bmN0aW9uIChhY3Rvcikge1xuICAgICAgYWN0b3IuX3VwZGF0ZVN0YXRlKG9wdF9taWxsaXNlY29uZCk7XG4gICAgICBpZiAodHlwZW9mIGFjdG9yLnJlbmRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBhY3Rvci5yZW5kZXIoYWN0b3IuY29udGV4dCwgYWN0b3IuZ2V0KCkpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5fbGFzdFVwZGF0ZWRNaWxsaXNlY29uZCA9IG9wdF9taWxsaXNlY29uZDtcbiAgICBmaXJlRXZlbnQodGhpcywgJ2FmdGVyVXBkYXRlJywgXyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogX19bRXhhbXBsZV0oLi4vLi4vLi4vLi4vZG9jcy9leGFtcGxlcy9nZXRfbGFzdF9wb3NpdGlvbl91cGRhdGVkLmh0bWwpX19cbiAgICogQG1ldGhvZCBnZXRMYXN0UG9zaXRpb25VcGRhdGVkXG4gICAqIEByZXR1cm4ge251bWJlcn0gVGhlIG5vcm1hbGl6ZWQgdGltZWxpbmUgcG9zaXRpb24gKGJldHdlZW4gMCBhbmQgMSkgdGhhdFxuICAgKiB3YXMgbGFzdCByZW5kZXJlZC5cbiAgICovXG4gIFJla2FwaS5wcm90b3R5cGUuZ2V0TGFzdFBvc2l0aW9uVXBkYXRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKHRoaXMuX2xhc3RVcGRhdGVkTWlsbGlzZWNvbmQgLyB0aGlzLl9hbmltYXRpb25MZW5ndGgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGdldEFuaW1hdGlvbkxlbmd0aFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBsZW5ndGggb2YgdGhlIGFuaW1hdGlvbiB0aW1lbGluZSwgaW4gbWlsbGlzZWNvbmRzLlxuICAgKi9cbiAgUmVrYXBpLnByb3RvdHlwZS5nZXRBbmltYXRpb25MZW5ndGggPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FuaW1hdGlvbkxlbmd0aDtcbiAgfTtcblxuICAvKipcbiAgICogQmluZCBhIGhhbmRsZXIgZnVuY3Rpb24gdG8gYSBSZWthcGkgZXZlbnQuXG4gICAqXG4gICAqIF9fW0V4YW1wbGVdKC4uLy4uLy4uLy4uL2RvY3MvZXhhbXBsZXMvYmluZC5odG1sKV9fXG4gICAqIEBtZXRob2Qgb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSBWYWxpZCB2YWx1ZXMgYXJlOlxuICAgKlxuICAgKiAtIF9fYW5pbWF0aW9uQ29tcGxldGVfXzogRmlyZXMgd2hlbiBhbGwgYW5pbWF0aW9uIGxvb3BzIGhhdmUgY29tcGxldGVkLlxuICAgKiAtIF9fcGxheVN0YXRlQ2hhbmdlX186IEZpcmVzIHdoZW4gdGhlIGFuaW1hdGlvbiBpcyBwbGF5ZWQsIHBhdXNlZCwgb3JcbiAgICogICBzdG9wcGVkLlxuICAgKiAtIF9fcGxheV9fOiBGaXJlcyB3aGVuIHRoZSBhbmltYXRpb24gaXMge3sjY3Jvc3NMaW5rXG4gICAqICAgXCJSZWthcGkvcGxheTptZXRob2RcIn19e3svY3Jvc3NMaW5rfX1lZC5cbiAgICogLSBfX3BhdXNlX186IEZpcmVzIHdoZW4gdGhlIGFuaW1hdGlvbiBpcyB7eyNjcm9zc0xpbmtcbiAgICogICBcIlJla2FwaS9wYXVzZTptZXRob2RcIn19e3svY3Jvc3NMaW5rfX1kLlxuICAgKiAtIF9fc3RvcF9fOiBGaXJlcyB3aGVuIHRoZSBhbmltYXRpb24gaXMge3sjY3Jvc3NMaW5rXG4gICAqICAgXCJSZWthcGkvc3RvcDptZXRob2RcIn19e3svY3Jvc3NMaW5rfX1wZWQuXG4gICAqIC0gX19iZWZvcmVVcGRhdGVfXzogRmlyZXMgZWFjaCBmcmFtZSBiZWZvcmUgYWxsIGFjdG9ycyBhcmUgcmVuZGVyZWQuXG4gICAqIC0gX19hZnRlclVwZGF0ZV9fOiBGaXJlcyBlYWNoIGZyYW1lIGFmdGVyIGFsbCBhY3RvcnMgYXJlIHJlbmRlcmVkLlxuICAgKiAtIF9fYWRkQWN0b3JfXzogRmlyZXMgd2hlbiBhbiBhY3RvciBpcyBhZGRlZC4gIGBvcHRfZGF0YWAgaXMgdGhlXG4gICAqICAge3sjY3Jvc3NMaW5rIFwiUmVrYXBpLkFjdG9yXCJ9fXt7L2Nyb3NzTGlua319IHRoYXQgd2FzIGFkZGVkLlxuICAgKiAtIF9fcmVtb3ZlQWN0b3JfXzogRmlyZXMgd2hlbiBhbiBhY3RvciBpcyByZW1vdmVkLiAgYG9wdF9kYXRhYCBpcyB0aGVcbiAgICogICB7eyNjcm9zc0xpbmsgXCJSZWthcGkuQWN0b3JcIn19e3svY3Jvc3NMaW5rfX0gdGhhdCB3YXMgcmVtb3ZlZC5cbiAgICogLSBfX2FkZEtleWZyYW1lUHJvcGVydHlfXzogRmlyZXMgd2hlbiBhIGtleWZyYW1lIHByb3BlcnR5IGlzIGFkZGVkLlxuICAgKiAgIGBvcHRfZGF0YWAgaXMgdGhlIHt7I2Nyb3NzTGluayBcIlJla2FwaS5LZXlmcmFtZVByb3BlcnR5XCJ9fXt7L2Nyb3NzTGlua319XG4gICAqICAgdGhhdCB3YXMgYWRkZWQuXG4gICAqIC0gX19yZW1vdmVLZXlmcmFtZVByb3BlcnR5X186IEZpcmVzIHdoZW4gYSB7eyNjcm9zc0xpbmtcbiAgICogICBcIlJla2FwaS5LZXlmcmFtZVByb3BlcnR5XCJ9fXt7L2Nyb3NzTGlua319IGlzIHJlbW92ZWQuICBgb3B0X2RhdGFgIGlzIHRoZVxuICAgKiAgIHt7I2Nyb3NzTGluayBcIlJla2FwaS5LZXlmcmFtZVByb3BlcnR5XCJ9fXt7L2Nyb3NzTGlua319IHRoYXQgd2FzIHJlbW92ZWQuXG4gICAqIC0gX19hZGRLZXlmcmFtZVByb3BlcnR5VHJhY2tfXzogRmlyZXMgd2hlbiB0aGUgYSBrZXlmcmFtZSBpcyBhZGRlZCB0byBhblxuICAgKiAgIGFjdG9yIHRoYXQgY3JlYXRlcyBhIG5ldyBrZXlmcmFtZSBwcm9wZXJ0eSB0cmFjay4gIGBvcHRfZGF0YWAgaXMgdGhlXG4gICAqICAge3sjY3Jvc3NMaW5rIFwiUmVrYXBpLktleWZyYW1lUHJvcGVydHlcIn19e3svY3Jvc3NMaW5rfX1cbiAgICogICB0aGF0IHdhcyBhZGRlZCB0byBjcmVhdGUgdGhlIHByb3BlcnR5IHRyYWNrLiAgQSByZWZlcmVuY2UgdG8gdGhlIGFjdG9yXG4gICAqICAgdGhhdCB0aGUga2V5ZnJhbWUgcHJvcGVydHkgaXMgYXNzb2NpYXRlZCB3aXRoIGNhbiBiZSBhY2Nlc3NlZCB2aWFcbiAgICogICBgb3B0X2RhdGEuYWN0b3JgIGFuZCB0aGUgdHJhY2sgbmFtZSB0aGF0IHdhcyBhZGRlZCBjYW4gYmUgZGV0ZXJtaW5lZCB2aWFcbiAgICogICBgb3B0X2RhdGEubmFtZWAuXG4gICAqIC0gX190aW1lbGluZU1vZGlmaWVkX186IEZpcmVzIHdoZW4gYSBrZXlmcmFtZSBpcyBhZGRlZCwgbW9kaWZpZWQgb3JcbiAgICogICByZW1vdmVkLlxuICAgKiAtIF9fYW5pbWF0aW9uTG9vcGVkX186IEZpcmVzIHdoZW4gYW4gYW5pbWF0aW9uIGxvb3AgZW5kcyBhbmQgYSBuZXcgb25lXG4gICAqICAgYmVnaW5zLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9uKFJla2FwaSxPYmplY3Q9KX0gaGFuZGxlciBSZWNlaXZlcyB0aGUgUmVrYXBpIGluc3RhbmNlIGFzXG4gICAqIHRoZSBmaXJzdCBwYXJhbWV0ZXIgYW5kIGV2ZW50LXNwZWNpZmljIGRhdGEgYXMgdGhlIHNlY29uZCAoYG9wdF9kYXRhYCkuXG4gICAqIEBjaGFpbmFibGVcbiAgICovXG4gIFJla2FwaS5wcm90b3R5cGUub24gPSBmdW5jdGlvbiAoZXZlbnROYW1lLCBoYW5kbGVyKSB7XG4gICAgaWYgKCF0aGlzLl9ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX2V2ZW50c1tldmVudE5hbWVdLnB1c2goaGFuZGxlcik7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogVW5iaW5kIG9uZSBvciBtb3JlIGhhbmRsZXJzIGZyb20gYSBSZWthcGkgZXZlbnQuXG4gICAqXG4gICAqIF9fW0V4YW1wbGVdKC4uLy4uLy4uLy4uL2RvY3MvZXhhbXBsZXMvdW5iaW5kLmh0bWwpX19cbiAgICogQG1ldGhvZCBvZmZcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSBWYWxpZCB2YWx1ZXMgY29ycmVzcG9uZCB0byB0aGUgbGlzdCB1bmRlclxuICAgKiB7eyNjcm9zc0xpbmsgXCJSZWthcGkvb246bWV0aG9kXCJ9fXt7L2Nyb3NzTGlua319LlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9uPX0gb3B0X2hhbmRsZXIgSWYgb21pdHRlZCwgYWxsIGhhbmRsZXIgZnVuY3Rpb25zIGJvdW5kIHRvXG4gICAqIGBldmVudE5hbWVgIGFyZSB1bmJvdW5kLlxuICAgKiBAY2hhaW5hYmxlXG4gICAqL1xuICBSZWthcGkucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uIChldmVudE5hbWUsIG9wdF9oYW5kbGVyKSB7XG4gICAgaWYgKCF0aGlzLl9ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghb3B0X2hhbmRsZXIpIHtcbiAgICAgIC8vIFJlbW92ZSBhbGwgaGFuZGxlcnNcbiAgICAgIHRoaXMuX2V2ZW50c1tldmVudE5hbWVdID0gW107XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlbW92ZSBqdXN0IHRoZSBoYW5kbGVyIHNwZWNpZmllZFxuICAgICAgdGhpcy5fZXZlbnRzW2V2ZW50TmFtZV0gPSBfLndpdGhvdXQoXG4gICAgICAgIHRoaXMuX2V2ZW50c1tldmVudE5hbWVdLCBvcHRfaGFuZGxlcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIEV4cG9ydCB0aGUgdGltZWxpbmUgdG8gYSBKU09OLXNlcmlhbGl6YWJsZSBgT2JqZWN0YC5cbiAgICpcbiAgICogX19bRXhhbXBsZV0oLi4vLi4vLi4vZG9jcy9leGFtcGxlcy9leHBvcnRfdGltZWxpbmUuaHRtbClfX1xuICAgKiBAbWV0aG9kIGV4cG9ydFRpbWVsaW5lXG4gICAqIEByZXR1cm4ge09iamVjdH0gVGhpcyBkYXRhIGNhbiBsYXRlciBiZSBjb25zdW1lZCBieSB7eyNjcm9zc0xpbmtcbiAgICogXCJSZWthcGkvaW1wb3J0VGltZWxpbmU6bWV0aG9kXCJ9fXt7L2Nyb3NzTGlua319LlxuICAgKi9cbiAgUmVrYXBpLnByb3RvdHlwZS5leHBvcnRUaW1lbGluZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXhwb3J0RGF0YSA9IHtcbiAgICAgICdkdXJhdGlvbic6IHRoaXMuX2FuaW1hdGlvbkxlbmd0aFxuICAgICAgLCdhY3RvcnMnOiBbXVxuICAgIH07XG5cbiAgICBfLmVhY2godGhpcy5fYWN0b3JzLCBmdW5jdGlvbiAoYWN0b3IpIHtcbiAgICAgIGV4cG9ydERhdGEuYWN0b3JzLnB1c2goYWN0b3IuZXhwb3J0VGltZWxpbmUoKSk7XG4gICAgfSwgdGhpcyk7XG5cbiAgICByZXR1cm4gZXhwb3J0RGF0YTtcbiAgfTtcblxuICAvKipcbiAgICogSW1wb3J0IGRhdGEgdGhhdCB3YXMgY3JlYXRlZCBieSB7eyNjcm9zc0xpbmtcbiAgICogXCJSZWthcGkvZXhwb3J0VGltZWxpbmU6bWV0aG9kXCJ9fXt7L2Nyb3NzTGlua319LiAgVGhpcyBzZXRzIHVwIGFsbCBhY3RvcnNcbiAgICogYW5kIGtleWZyYW1lcyBzcGVjaWZpZWQgaW4gdGhlIGByZWthcGlEYXRhYCBwYXJhbWV0ZXIuICBUaGVzZSB0d28gbWV0aG9kc1xuICAgKiBjb2xsZWN0aXZlbHkgYWxsb3cgeW91IHNlcmlhbGl6ZSBhbiBhbmltYXRpb24gKGZvciBzZW5kaW5nIHRvIGEgc2VydmVyIGZvclxuICAgKiBwZXJzaXN0ZW5jZSwgZm9yIGV4YW1wbGUpIGFuZCBsYXRlciByZWNyZWF0aW5nIGFuIGlkZW50aWNhbCBhbmltYXRpb24uXG4gICAqXG4gICAqIEBtZXRob2QgaW1wb3J0VGltZWxpbmVcbiAgICogQHBhcmFtIHtPYmplY3R9IHJla2FwaURhdGEgQW55IG9iamVjdCB0aGF0IGhhcyB0aGUgc2FtZSBkYXRhIGZvcm1hdCBhcyB0aGVcbiAgICogb2JqZWN0IGdlbmVyYXRlZCBmcm9tIFJla2FwaSNleHBvcnRUaW1lbGluZS5cbiAgICovXG4gIFJla2FwaS5wcm90b3R5cGUuaW1wb3J0VGltZWxpbmUgPSBmdW5jdGlvbiAocmVrYXBpRGF0YSkge1xuICAgIF8uZWFjaChyZWthcGlEYXRhLmFjdG9ycywgZnVuY3Rpb24gKGFjdG9yRGF0YSkge1xuICAgICAgdmFyIGFjdG9yID0gbmV3IFJla2FwaS5BY3RvcigpO1xuICAgICAgYWN0b3IuaW1wb3J0VGltZWxpbmUoYWN0b3JEYXRhKTtcbiAgICAgIHRoaXMuYWRkQWN0b3IoYWN0b3IpO1xuICAgIH0sIHRoaXMpO1xuICB9O1xuXG4gIFJla2FwaS51dGlsID0ge307XG5cbiAgLy8gU29tZSBob29rcyBmb3IgdGVzdGluZy4gIEdldHMgY29tcGlsZWQgYXdheSBhdCBidWlsZCB0aW1lLlxuICBpZiAoUkVLQVBJX0RFQlVHKSB7XG4gICAgUmVrYXBpLl9wcml2YXRlID0ge1xuICAgICAgJ2NhbGN1bGF0ZUxvb3BQb3NpdGlvbic6IGNhbGN1bGF0ZUxvb3BQb3NpdGlvblxuICAgICAgLCd1cGRhdGVUb0N1cnJlbnRNaWxsaXNlY29uZCc6IHVwZGF0ZVRvQ3VycmVudE1pbGxpc2Vjb25kXG4gICAgICAsJ3VwZGF0ZVRvTWlsbGlzZWNvbmQnOiB1cGRhdGVUb01pbGxpc2Vjb25kXG4gICAgICAsJ3RpY2snOiB0aWNrXG4gICAgICAsJ2RldGVybWluZUN1cnJlbnRMb29wSXRlcmF0aW9uJzogZGV0ZXJtaW5lQ3VycmVudExvb3BJdGVyYXRpb25cbiAgICAgICwnY2FsY3VsYXRlVGltZVNpbmNlU3RhcnQnOiBjYWxjdWxhdGVUaW1lU2luY2VTdGFydFxuICAgICAgLCdpc0FuaW1hdGlvbkNvbXBsZXRlJzogaXNBbmltYXRpb25Db21wbGV0ZVxuICAgICAgLCd1cGRhdGVQbGF5U3RhdGUnOiB1cGRhdGVQbGF5U3RhdGVcbiAgICB9O1xuICB9XG5cbiAgcm9vdC5SZWthcGkgPSBSZWthcGk7XG5cbn07XG5cbnJla2FwaU1vZHVsZXMucHVzaChmdW5jdGlvbiAoY29udGV4dCkge1xuXG4gICd1c2Ugc3RyaWN0JztcblxuICB2YXIgREVGQVVMVF9FQVNJTkcgPSAnbGluZWFyJztcbiAgdmFyIFJla2FwaSA9IGNvbnRleHQuUmVrYXBpO1xuICB2YXIgVHdlZW5hYmxlID0gUmVrYXBpLlR3ZWVuYWJsZTtcbiAgdmFyIF8gPSBSZWthcGkuXztcblxuICAvKiFcbiAgICogU29ydHMgYW4gYXJyYXkgbnVtZXJpY2FsbHksIGZyb20gc21hbGxlc3QgdG8gbGFyZ2VzdC5cbiAgICogQHBhcmFtIHtBcnJheS48bnVtYmVyPn0gYXJyYXkgVGhlIEFycmF5IHRvIHNvcnQuXG4gICAqIEByZXR1cm4ge0FycmF5LjxudW1iZXI+fSBUaGUgc29ydGVkIEFycmF5LlxuICAgKi9cbiAgZnVuY3Rpb24gc29ydE51bWVyaWNhbGx5IChhcnJheSkge1xuICAgIHJldHVybiBhcnJheS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gYSAtIGI7XG4gICAgfSk7XG4gIH1cblxuICAvKiFcbiAgICogQHBhcmFtIHtSZWthcGkuQWN0b3J9IGFjdG9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFxuICAgKi9cbiAgZnVuY3Rpb24gZmlyZVJla2FwaUV2ZW50Rm9yQWN0b3IgKGFjdG9yLCBldmVudCkge1xuICAgIGlmIChhY3Rvci5yZWthcGkpIHtcbiAgICAgIGZpcmVFdmVudChhY3Rvci5yZWthcGksIGV2ZW50LCBfKTtcbiAgICB9XG4gIH1cblxuICAvKiFcbiAgICogUmV0cmlldmVzIHRoZSBtb3N0IHJlY2VudCBwcm9wZXJ0eSBjYWNoZSBJRCBmb3IgYSBnaXZlbiBtaWxsaXNlY29uZC5cbiAgICogQHBhcmFtIHtSZWthcGkuQWN0b3J9IGFjdG9yXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBtaWxsaXNlY29uZFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IC0xIGlmIHRoZXJlIGlzIG5vIHByb3BlcnR5IGNhY2hlIGZvciB0aGUgbWlsbGlzZWNvbmRcbiAgICogKHRoaXMgc2hvdWxkIG5ldmVyIGhhcHBlbikuXG4gICAqL1xuICBmdW5jdGlvbiBnZXRQcm9wZXJ0eUNhY2hlSWRGb3JNaWxsaXNlY29uZCAoYWN0b3IsIG1pbGxpc2Vjb25kKSB7XG4gICAgdmFyIGxpc3QgPSBhY3Rvci5fdGltZWxpbmVQcm9wZXJ0eUNhY2hlS2V5cztcblxuICAgIHZhciBpLCBsZW4gPSBsaXN0Lmxlbmd0aDtcblxuICAgIC8vIElmIHRoZXJlIGlzIG9ubHkgb25lIGtleWZyYW1lLCB1c2UgdGhhdFxuICAgIGlmIChsZW4gPT09IDEpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIC8vVE9ETzogIE9oIG5vZXMsIHRoaXMgaXMgYSBsaW5lYXIgc2VhcmNoISAgTWF5YmUgb3B0aW1pemUgaXQ/XG4gICAgZm9yIChpID0gMTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBpZiAobGlzdFtpXSA+PSBtaWxsaXNlY29uZCkge1xuICAgICAgICByZXR1cm4gKGkgLSAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICAvKiFcbiAgICogU29ydCBhbGwgb2YgYW4gQWN0b3IncyBwcm9wZXJ0eSB0cmFja3Mgc28gdGhleSBjYW4gYmUgY2FjaGVkLlxuICAgKiBAcGFyYW0ge1Jla2FwaS5BY3Rvcn0gYWN0b3JcbiAgICovXG4gIGZ1bmN0aW9uIHNvcnRQcm9wZXJ0eVRyYWNrcyAoYWN0b3IpIHtcbiAgICBfLmVhY2goYWN0b3IuX3Byb3BlcnR5VHJhY2tzLCBmdW5jdGlvbiAodHJhY2spIHtcbiAgICAgIHRyYWNrLnNvcnQoZnVuY3Rpb24gKGN1cnJlbnQsIG5leHQpIHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnQubWlsbGlzZWNvbmQgLSBuZXh0Lm1pbGxpc2Vjb25kO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKiFcbiAgICogQ29tcHV0ZSBhbmQgZmlsbCBhbGwgdGltZWxpbmUgY2FjaGVzLlxuICAgKiBAcGFyYW0ge1Jla2FwaS5BY3Rvcn0gYWN0b3JcbiAgICovXG4gIGZ1bmN0aW9uIGNhY2hlUHJvcGVydGllc1RvU2VnbWVudHMgKGFjdG9yKSB7XG4gICAgXy5lYWNoKGFjdG9yLl90aW1lbGluZVByb3BlcnR5Q2FjaGUsIGZ1bmN0aW9uIChwcm9wZXJ0eUNhY2hlLCBjYWNoZUlkKSB7XG4gICAgICB2YXIgbGF0ZXN0UHJvcGVydGllcyA9IGdldExhdGVzdFByb3BldGllcyhhY3RvciwgY2FjaGVJZCk7XG4gICAgICBfLmRlZmF1bHRzKHByb3BlcnR5Q2FjaGUsIGxhdGVzdFByb3BlcnRpZXMpO1xuICAgIH0pO1xuICB9XG5cbiAgLyohXG4gICAqIEdldHMgYWxsIG9mIHRoZSBjdXJyZW50IGFuZCBtb3N0IHJlY2VudCBSZWthcGkuS2V5ZnJhbWVQcm9wZXJ0aWVzIGZvciBhXG4gICAqIGdpdmVuIG1pbGxpc2Vjb25kLlxuICAgKiBAcGFyYW0ge1Jla2FwaS5BY3Rvcn0gYWN0b3JcbiAgICogQHBhcmFtIHtudW1iZXJ9IGZvck1pbGxpc2Vjb25kXG4gICAqIEByZXR1cm4ge09iamVjdH0gQW4gT2JqZWN0IGNvbnRhaW5pbmcgUmVrYXBpLktleWZyYW1lUHJvcGVydGllc1xuICAgKi9cbiAgZnVuY3Rpb24gZ2V0TGF0ZXN0UHJvcGV0aWVzIChhY3RvciwgZm9yTWlsbGlzZWNvbmQpIHtcbiAgICB2YXIgbGF0ZXN0UHJvcGVydGllcyA9IHt9O1xuXG4gICAgXy5lYWNoKGFjdG9yLl9wcm9wZXJ0eVRyYWNrcywgZnVuY3Rpb24gKHByb3BlcnR5VHJhY2ssIHByb3BlcnR5TmFtZSkge1xuICAgICAgdmFyIHByZXZpb3VzS2V5ZnJhbWVQcm9wZXJ0eSA9IHByb3BlcnR5VHJhY2tbMF0gfHwgbnVsbDtcbiAgICAgIHZhciBpID0gMCwgbGVuID0gcHJvcGVydHlUcmFjay5sZW5ndGgsIGtleWZyYW1lUHJvcGVydHk7XG5cbiAgICAgIGZvciAoaTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGtleWZyYW1lUHJvcGVydHkgPSBwcm9wZXJ0eVRyYWNrW2ldO1xuXG4gICAgICAgIGlmIChrZXlmcmFtZVByb3BlcnR5Lm1pbGxpc2Vjb25kID4gZm9yTWlsbGlzZWNvbmQpIHtcbiAgICAgICAgICAvLyBXZSB3ZW50IHRvIGZhciwgdXNlIHRoZSBwcmV2aW91cyBrZXlmcmFtZVByb3BlcnR5XG4gICAgICAgICAgbGF0ZXN0UHJvcGVydGllc1twcm9wZXJ0eU5hbWVdID0gcHJldmlvdXNLZXlmcmFtZVByb3BlcnR5O1xuICAgICAgICB9IGVsc2UgaWYgKGtleWZyYW1lUHJvcGVydHkubWlsbGlzZWNvbmQgPT09IGZvck1pbGxpc2Vjb25kKSB7XG4gICAgICAgICAgLy8gRm91bmQgaXQhXG4gICAgICAgICAgbGF0ZXN0UHJvcGVydGllc1twcm9wZXJ0eU5hbWVdID0ga2V5ZnJhbWVQcm9wZXJ0eTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByZXZpb3VzS2V5ZnJhbWVQcm9wZXJ0eSA9IGtleWZyYW1lUHJvcGVydHk7XG5cbiAgICAgICAgLy8gUXVpdCB0aGUgbG9vcCBpZiBzb21ldGhpbmcgd2FzIGZvdW5kLiAgV2UgY2FuJ3QgZWFybHktcmV0dXJuIGFib3ZlLFxuICAgICAgICAvLyBiZWNhdXNlIGxhdGVzdFByb3BlcnRpZXNbcHJvcGVydHlOYW1lXSBtaWdodCBiZSBudWxsLCB3aGljaCBpcyBub3RcbiAgICAgICAgLy8gd2hhdCB3ZSB3YW50LlxuICAgICAgICBpZiAobGF0ZXN0UHJvcGVydGllc1twcm9wZXJ0eU5hbWVdKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gSWYgbm90aGluZyB3YXMgZm91bmQsIGF0dGVtcHQgdG8gdXNlIHRoZSBsYXN0IGtleWZyYW1lUHJvcGVydHkgaW4gdGhlXG4gICAgICAvLyB0cmFjay5cbiAgICAgIGlmICghbGF0ZXN0UHJvcGVydGllc1twcm9wZXJ0eU5hbWVdKSB7XG4gICAgICAgIHZhciBsYXN0UHJvcCA9IF8ubGFzdChwcm9wZXJ0eVRyYWNrKTtcblxuICAgICAgICBpZiAobGFzdFByb3AgJiYgbGFzdFByb3AubWlsbGlzZWNvbmQgPD0gZm9yTWlsbGlzZWNvbmQpIHtcbiAgICAgICAgICBsYXRlc3RQcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV0gPSBsYXN0UHJvcDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxhdGVzdFByb3BlcnRpZXM7XG4gIH1cblxuICAvKiFcbiAgICogTGlua3MgZWFjaCBLZXlmcmFtZVByb3BlcnR5IHRvIHRoZSBuZXh0IG9uZSBpbiBpdHMgcmVzcGVjdGl2ZSB0cmFjay5cbiAgICpcbiAgICogVGhleSdyZSBsaW5rZWQgbGlzdHMhXG4gICAqIEBwYXJhbSB7UmVrYXBpLkFjdG9yfSBhY3RvclxuICAgKi9cbiAgZnVuY3Rpb24gbGlua1RyYWNrZWRQcm9wZXJ0aWVzIChhY3Rvcikge1xuICAgIF8uZWFjaChhY3Rvci5fcHJvcGVydHlUcmFja3MsIGZ1bmN0aW9uIChwcm9wZXJ0eVRyYWNrKSB7XG4gICAgICBfLmVhY2gocHJvcGVydHlUcmFjaywgZnVuY3Rpb24gKGtleWZyYW1lUHJvcGVydHksIGkpIHtcbiAgICAgICAga2V5ZnJhbWVQcm9wZXJ0eS5saW5rVG9OZXh0KHByb3BlcnR5VHJhY2tbaSArIDFdKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyohXG4gICAqIFJldHVybnMgYSByZXF1ZXN0ZWQgS2V5ZnJhbWVQcm9wZXJ0eSBhdCBhIG1pbGxpc2Vjb25kIG9uIGEgc3BlY2lmaWVkXG4gICAqIHRyYWNrLlxuICAgKiBAcGFyYW0ge1Jla2FwaS5BY3Rvcn0gYWN0b3JcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRyYWNrTmFtZVxuICAgKiBAcGFyYW0ge251bWJlcn0gbWlsbGlzZWNvbmRcbiAgICogQHJldHVybiB7UmVrYXBpLktleWZyYW1lUHJvcGVydHl8dW5kZWZpbmVkfVxuICAgKi9cbiAgZnVuY3Rpb24gZmluZFByb3BlcnR5QXRNaWxsaXNlY29uZEluVHJhY2sgKGFjdG9yLCB0cmFja05hbWUsIG1pbGxpc2Vjb25kKSB7XG4gICAgcmV0dXJuIF8uZmluZFdoZXJlKGFjdG9yLl9wcm9wZXJ0eVRyYWNrc1t0cmFja05hbWVdLCB7XG4gICAgICBtaWxsaXNlY29uZDogbWlsbGlzZWNvbmRcbiAgICB9KTtcbiAgfVxuXG4gIC8qIVxuICAgKiBFbXB0eSBvdXQgYW5kIHJlYnVpbGQgdGhlIGNhY2hlIG9mIGludGVybmFsIEtleWZyYW1lUHJvcGVydHkgZGF0YS5cbiAgICogQHBhcmFtIHtSZWthcGkuQWN0b3J9XG4gICAqL1xuICBmdW5jdGlvbiBpbnZhbGlkYXRlUHJvcGVydHlDYWNoZSAoYWN0b3IpIHtcbiAgICBhY3Rvci5fdGltZWxpbmVQcm9wZXJ0eUNhY2hlID0ge307XG4gICAgdmFyIHRpbWVsaW5lUHJvcGVydHlDYWNoZSA9IGFjdG9yLl90aW1lbGluZVByb3BlcnR5Q2FjaGU7XG5cbiAgICAvLyBCdWlsZCB0aGUgY2FjaGUgbWFwXG4gICAgdmFyIG1pbGxpc2Vjb25kO1xuICAgIF8uZWFjaChhY3Rvci5fa2V5ZnJhbWVQcm9wZXJ0aWVzLCBmdW5jdGlvbiAoa2V5ZnJhbWVQcm9wZXJ0eSkge1xuICAgICAgbWlsbGlzZWNvbmQgPSBrZXlmcmFtZVByb3BlcnR5Lm1pbGxpc2Vjb25kO1xuICAgICAgaWYgKCF0aW1lbGluZVByb3BlcnR5Q2FjaGVbbWlsbGlzZWNvbmRdKSB7XG4gICAgICAgIHRpbWVsaW5lUHJvcGVydHlDYWNoZVttaWxsaXNlY29uZF0gPSB7fTtcbiAgICAgIH1cblxuICAgICAgdGltZWxpbmVQcm9wZXJ0eUNhY2hlW21pbGxpc2Vjb25kXVtrZXlmcmFtZVByb3BlcnR5Lm5hbWVdXG4gICAgICAgICA9IGtleWZyYW1lUHJvcGVydHk7XG4gICAgfSk7XG5cbiAgICBhY3Rvci5fdGltZWxpbmVQcm9wZXJ0eUNhY2hlS2V5cyA9IF8ubWFwKHRpbWVsaW5lUHJvcGVydHlDYWNoZSxcbiAgICBmdW5jdGlvbiAodmFsLCBrZXkpIHtcbiAgICAgIHJldHVybiAra2V5O1xuICAgIH0pO1xuXG4gICAgLy8gT3B0aW1pemUgdGhlIGNhY2hlIGxvb2t1cFxuICAgIHNvcnROdW1lcmljYWxseShhY3Rvci5fdGltZWxpbmVQcm9wZXJ0eUNhY2hlS2V5cyk7XG5cbiAgICAvLyBBc3NvY2lhdGUgY2FjaGUgbWFwIGVsZW1lbnRzIHRvIHRoZWlyIHJlc3BlY3RpdmUgcG9pbnRzIG9uIHRoZSB0aW1lbGluZVxuICAgIGNhY2hlUHJvcGVydGllc1RvU2VnbWVudHMoYWN0b3IpO1xuXG4gICAgLy8gUmUtbGluayB0aGUgbGlua2VkIGxpc3Qgb2Yga2V5ZnJhbWVQcm9wZXJ0aWVzXG4gICAgbGlua1RyYWNrZWRQcm9wZXJ0aWVzKGFjdG9yKTtcbiAgfVxuXG4gIC8qIVxuICAgKiBVcGRhdGVzIGludGVybmFsIFJla2FwaSBhbmQgQWN0b3IgZGF0YSBhZnRlciBhIEtleWZyYW1lUHJvcGVydHlcbiAgICogbW9kaWZpY2F0aW9uIG1ldGhvZCBpcyBjYWxsZWQuXG4gICAqXG4gICAqIFRPRE86IFRoaXMgc2hvdWxkIGJlIG1vdmVkIHRvIGNvcmUuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVrYXBpLkFjdG9yfSBhY3RvclxuICAgKi9cbiAgZnVuY3Rpb24gY2xlYW51cEFmdGVyS2V5ZnJhbWVNb2RpZmljYXRpb24gKGFjdG9yKSB7XG4gICAgc29ydFByb3BlcnR5VHJhY2tzKGFjdG9yKTtcbiAgICBpbnZhbGlkYXRlUHJvcGVydHlDYWNoZShhY3Rvcik7XG4gICAgcmVjYWxjdWxhdGVBbmltYXRpb25MZW5ndGgoYWN0b3IucmVrYXBpLCBfKTtcbiAgICBmaXJlUmVrYXBpRXZlbnRGb3JBY3RvcihhY3RvciwgJ3RpbWVsaW5lTW9kaWZpZWQnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbiBhY3RvciByZXByZXNlbnRzIGFuIGluZGl2aWR1YWwgY29tcG9uZW50IG9mIGFuIGFuaW1hdGlvbi4gIEFuIGFuaW1hdGlvblxuICAgKiBtYXkgaGF2ZSBvbmUgb3IgbWFueSBhY3RvcnMuXG4gICAqXG4gICAqIEBjbGFzcyBSZWthcGkuQWN0b3JcbiAgICogQHBhcmFtIHtPYmplY3Q9fSBvcHRfY29uZmlnIFZhbGlkIHByb3BlcnRpZXM6XG4gICAqICAgLSBfX2NvbnRleHRfXyAoX09iamVjdHxDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR8SFRNTEVsZW1lbnRfKTogVGhlXG4gICAqICAgcmVuZGVyaW5nIGNvbnRleHQgZm9yIHRoaXMgYWN0b3IuIElmIG9taXR0ZWQsIHRoaXMgQWN0b3IgZ2V0cyB0aGUgcGFyZW50XG4gICAqICAgYHt7I2Nyb3NzTGluayBcIlJla2FwaVwifX17ey9jcm9zc0xpbmt9fWAgaW5zdGFuY2UncyBgY29udGV4dGAgd2hlbiBpdCBpc1xuICAgKiAgIGFkZGVkIHdpdGggYHt7I2Nyb3NzTGluayBcIlJla2FwaS9hZGRBY3RvcjptZXRob2RcIn19e3svY3Jvc3NMaW5rfX1gLlxuICAgKiAgIC0gX19zZXR1cF9fIChfRnVuY3Rpb25fKTogQSBmdW5jdGlvbiB0aGF0IGdldHMgY2FsbGVkIHdoZW4gdGhlIGFjdG9yIGlzXG4gICAqICAgICBhZGRlZCB0byBhbiBhbmltYXRpb24gd2l0aFxuICAgKiAgICAgYHt7I2Nyb3NzTGluayBcIlJla2FwaS9hZGRBY3RvcjptZXRob2RcIn19e3svY3Jvc3NMaW5rfX1gLlxuICAgKiAgIC0gX19yZW5kZXJfXyAoX0Z1bmN0aW9uKE9iamVjdCwgT2JqZWN0KV8pOiBBIGZ1bmN0aW9uIHRoYXQgZ2V0cyBjYWxsZWRcbiAgICogICBldmVyeSB0aW1lIHRoZSBhY3RvcidzIHN0YXRlIGlzIHVwZGF0ZWQgKG9uY2UgZXZlcnkgZnJhbWUpLiBUaGlzXG4gICAqICAgZnVuY3Rpb24gc2hvdWxkIGRvIHNvbWV0aGluZyBtZWFuaW5nZnVsIHdpdGggc3RhdGUgb2YgdGhlIGFjdG9yIChmb3JcbiAgICogICBleGFtcGxlLCB2aXN1YWxseSByZW5kZXJpbmcgdG8gdGhlIHNjcmVlbikuICBUaGlzIGZ1bmN0aW9uIHJlY2VpdmVzIHR3b1xuICAgKiAgIHBhcmFtZXRlcnM6IFRoZSBmaXJzdCBpcyBhIHJlZmVyZW5jZSB0byB0aGUgYWN0b3IncyBgY29udGV4dGAgYW5kIHRoZVxuICAgKiAgIHNlY29uZCBpcyBhbiBPYmplY3QgY29udGFpbmluZyB0aGUgY3VycmVudCBzdGF0ZSBwcm9wZXJ0aWVzLlxuICAgKiAgIC0gX190ZWFyZG93bl9fIChfRnVuY3Rpb25fKTogQSBmdW5jdGlvbiB0aGF0IGdldHMgY2FsbGVkIHdoZW4gdGhlIGFjdG9yXG4gICAqICAgaXMgcmVtb3ZlZCBmcm9tIGFuIGFuaW1hdGlvbiB3aXRoXG4gICAqICAgYHt7I2Nyb3NzTGluayBcIlJla2FwaS9yZW1vdmVBY3RvcjptZXRob2RcIn19e3svY3Jvc3NMaW5rfX1gLlxuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG4gIFJla2FwaS5BY3RvciA9IGZ1bmN0aW9uIChvcHRfY29uZmlnKSB7XG5cbiAgICBvcHRfY29uZmlnID0gb3B0X2NvbmZpZyB8fCB7fTtcblxuICAgIC8vIFN0ZWFsIHRoZSBgVHdlZW5hYmxlYCBjb25zdHJ1Y3Rvci5cbiAgICBUd2VlbmFibGUuY2FsbCh0aGlzKTtcblxuICAgIF8uZXh0ZW5kKHRoaXMsIHtcbiAgICAgICdfcHJvcGVydHlUcmFja3MnOiB7fVxuICAgICAgLCdfdGltZWxpbmVQcm9wZXJ0eUNhY2hlJzoge31cbiAgICAgICwnX3RpbWVsaW5lUHJvcGVydHlDYWNoZUtleXMnOiBbXVxuICAgICAgLCdfa2V5ZnJhbWVQcm9wZXJ0aWVzJzoge31cbiAgICAgICwnaWQnOiBfLnVuaXF1ZUlkKClcbiAgICAgICwnY29udGV4dCc6IG9wdF9jb25maWcuY29udGV4dCAvLyBUaGlzIG1heSBiZSB1bmRlZmluZWRcbiAgICAgICwnc2V0dXAnOiBvcHRfY29uZmlnLnNldHVwIHx8IG5vb3BcbiAgICAgICwncmVuZGVyJzogb3B0X2NvbmZpZy5yZW5kZXIgfHwgbm9vcFxuICAgICAgLCd0ZWFyZG93bic6IG9wdF9jb25maWcudGVhcmRvd24gfHwgbm9vcFxuICAgICAgLCdkYXRhJzoge31cbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICB2YXIgQWN0b3IgPSBSZWthcGkuQWN0b3I7XG5cbiAgLy8gS2luZCBvZiBhIGZ1biB3YXkgdG8gc2V0IHVwIGFuIGluaGVyaXRhbmNlIGNoYWluLiAgYEFjdG9yTWV0aG9kc2AgcHJldmVudHNcbiAgLy8gbWV0aG9kcyBvbiBgQWN0b3IucHJvdG90eXBlYCBmcm9tIHBvbGx1dGluZyBgVHdlZW5hYmxlYCdzIHByb3RvdHlwZSB3aXRoXG4gIC8vIGBBY3RvcmAgc3BlY2lmaWMgbWV0aG9kcy5cbiAgdmFyIEFjdG9yTWV0aG9kcyA9IGZ1bmN0aW9uICgpIHt9O1xuICBBY3Rvck1ldGhvZHMucHJvdG90eXBlID0gVHdlZW5hYmxlLnByb3RvdHlwZTtcbiAgQWN0b3IucHJvdG90eXBlID0gbmV3IEFjdG9yTWV0aG9kcygpO1xuICAvLyBCdXQgdGhlIG1hZ2ljIGRvZXNuJ3Qgc3RvcCBoZXJlISAgYEFjdG9yYCdzIGNvbnN0cnVjdG9yIHN0ZWFscyB0aGVcbiAgLy8gYFR3ZWVuYWJsZWAgY29uc3RydWN0b3IuXG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIGtleWZyYW1lIGZvciB0aGUgYWN0b3IuICBUaGUgYW5pbWF0aW9uIHRpbWVsaW5lIGJlZ2lucyBhdCBgMGAuXG4gICAqIFRoZSB0aW1lbGluZSdzIGxlbmd0aCB3aWxsIGF1dG9tYXRpY2FsbHkgXCJncm93XCIgdG8gYWNjb21tb2RhdGUgbmV3XG4gICAqIGtleWZyYW1lcyBhcyB0aGV5IGFyZSBhZGRlZC5cbiAgICpcbiAgICogYHN0YXRlYCBzaG91bGQgY29udGFpbiBhbGwgb2YgdGhlIHByb3BlcnRpZXMgdGhhdCBkZWZpbmUgdGhpc1xuICAgKiBrZXlmcmFtZSdzIHN0YXRlLiAgVGhlc2UgcHJvcGVydGllcyBjYW4gYmUgYW55IHZhbHVlIHRoYXQgY2FuIGJlIHR3ZWVuZWRcbiAgICogYnkgW1NoaWZ0eV0oaHR0cDovL2plcmVteWNrYWhuLmdpdGh1Yi5pby9zaGlmdHkvKSAobnVtYmVycyxcbiAgICogUkdCL2hleGFkZWNpbWFsIGNvbG9yIHN0cmluZ3MsIGFuZCBDU1MgcHJvcGVydHkgc3RyaW5ncykuICBgc3RhdGVgIGNhblxuICAgKiBhbHNvIGJlIGEgZnVuY3Rpb24sIGJ1dCB0aGlzIHdvcmtzIGRpZmZlcmVudGx5IChzZWUgXCJGdW5jdGlvbiBrZXlmcmFtZXNcIlxuICAgKiBiZWxvdykuXG4gICAqXG4gICAqIF9fTm90ZTpfXyBJbnRlcm5hbGx5LCB0aGlzIGNyZWF0ZXMgYHt7I2Nyb3NzTGlua1xuICAgKiBcIlJla2FwaS5LZXlmcmFtZVByb3BlcnR5XCJ9fXt7L2Nyb3NzTGlua319YHMgYW5kIHBsYWNlcyB0aGVtIG9uIGEgXCJ0cmFjay5cIlxuICAgKiBUaGVzZSBge3sjY3Jvc3NMaW5rIFwiUmVrYXBpLktleWZyYW1lUHJvcGVydHlcIn19e3svY3Jvc3NMaW5rfX1gcyBhcmVcbiAgICogbWFuYWdlZCBmb3IgeW91IGJ5IHRoZSBge3sjY3Jvc3NMaW5rIFwiUmVrYXBpLkFjdG9yXCJ9fXt7L2Nyb3NzTGlua319YCBBUElzLlxuICAgKlxuICAgKiAjIyBLZXlmcmFtZSBpbmhlcml0YW5jZVxuICAgKlxuICAgKiBLZXlmcmFtZXMgYWx3YXlzIGluaGVyaXQgbWlzc2luZyBwcm9wZXJ0aWVzIGZyb20gdGhlIHByZXZpb3VzIGtleWZyYW1lLlxuICAgKiBGb3IgZXhhbXBsZTpcbiAgICpcbiAgICogICAgIGFjdG9yLmtleWZyYW1lKDAsIHtcbiAgICogICAgICAgJ3gnOiAxMDBcbiAgICogICAgIH0pLmtleWZyYW1lKDEwMDAsIHtcbiAgICogICAgICAgLy8gSW1wbGljaXRseSBzcGVjaWZpZXMgdGhlIGB4OiAxMDBgIGZyb20gYWJvdmVcbiAgICogICAgICAgJ3knOiA1MFxuICAgKiAgICAgfSk7XG4gICAqXG4gICAqIEtleWZyYW1lIGAxMDAwYCB3aWxsIGhhdmUgYSBgeWAgb2YgYDUwYCwgYW5kIGFuIGB4YCBvZiBgMTAwYCwgYmVjYXVzZSBgeGBcbiAgICogd2FzIGluaGVyaXRlZCBmcm9tIGtleWZyYW1lIGAwYC5cbiAgICpcbiAgICogIyMgRnVuY3Rpb24ga2V5ZnJhbWVzXG4gICAqXG4gICAqIEluc3RlYWQgb2YgcHJvdmlkaW5nIGFuIE9iamVjdCB0byBiZSB1c2VkIHRvIGludGVycG9sYXRlIHN0YXRlIHZhbHVlcywgeW91XG4gICAqIGNhbiBwcm92aWRlIGEgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIGF0IGEgc3BlY2lmaWMgcG9pbnQgb24gdGhlIHRpbWVsaW5lLlxuICAgKiBUaGlzIGZ1bmN0aW9uIGRvZXMgbm90IG5lZWQgdG8gcmV0dXJuIGEgdmFsdWUsIGFzIGl0IGRvZXMgbm90IGdldCB1c2VkIHRvXG4gICAqIHJlbmRlciB0aGUgYWN0b3Igc3RhdGUuICBGdW5jdGlvbiBrZXlmcmFtZXMgYXJlIGNhbGxlZCBvbmNlIHBlciBhbmltYXRpb25cbiAgICogbG9vcCBhbmQgZG8gbm90IGhhdmUgYW55IHR3ZWVuaW5nIHJlbGF0aW9uc2hpcCB3aXRoIG9uZSBhbm90aGVyLiAgVGhpcyBpc1xuICAgKiBhIHByaW1hcmlseSBhIG1lY2hhbmlzbSBmb3Igc2NoZWR1bGluZyBhcmJpdHJhcnkgY29kZSB0byBiZSBleGVjdXRlZCBhdFxuICAgKiBzcGVjaWZpYyBwb2ludHMgaW4gYW4gYW5pbWF0aW9uLlxuICAgKlxuICAgKiAgICAgLy8gZHJpZnQgaXMgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdGhhdCB0aGlzIGZ1bmN0aW9uIHdhcyBleGVjdXRlZFxuICAgKiAgICAgLy8gYWZ0ZXIgdGhlIHNjaGVkdWxlZCB0aW1lLiAgVGhlcmUgaXMgdHlwaWNhbGx5IHNvbWUgYW1vdW50IG9mIGRlbGF5XG4gICAqICAgICAvLyBkdWUgdG8gdGhlIG5hdHVyZSBvZiBKYXZhU2NyaXB0IHRpbWVycy5cbiAgICogICAgIGFjdG9yLmtleWZyYW1lKDEwMDAsIGZ1bmN0aW9uIChkcmlmdCkge1xuICAgKiAgICAgICBjb25zb2xlLmxvZyh0aGlzKTsgLy8gTG9ncyB0aGUgYWN0b3IgaW5zdGFuY2VcbiAgICogICAgIH0pO1xuICAgKlxuICAgKiAjIyBFYXNpbmdcbiAgICpcbiAgICogYG9wdF9lYXNpbmdgLCBpZiBwcm92aWRlZCwgY2FuIGJlIGEgc3RyaW5nIG9yIGFuIE9iamVjdC4gIElmIGBvcHRfZWFzaW5nYFxuICAgKiBpcyBhIHN0cmluZywgYWxsIGFuaW1hdGVkIHByb3BlcnRpZXMgd2lsbCBoYXZlIHRoZSBzYW1lIGVhc2luZyBjdXJ2ZVxuICAgKiBhcHBsaWVkIHRvIHRoZW0uICBGb3IgZXhhbXBsZTpcbiAgICpcbiAgICogICAgIGFjdG9yLmtleWZyYW1lKDEwMDAsIHtcbiAgICogICAgICAgICAneCc6IDEwMCxcbiAgICogICAgICAgICAneSc6IDEwMFxuICAgKiAgICAgICB9LCAnZWFzZU91dFNpbmUnKTtcbiAgICpcbiAgICogQm90aCBgeGAgYW5kIGB5YCB3aWxsIGhhdmUgYGVhc2VPdXRTaW5lYCBhcHBsaWVkIHRvIHRoZW0uICBZb3UgY2FuIGFsc29cbiAgICogc3BlY2lmeSBtdWx0aXBsZSBlYXNpbmcgY3VydmVzIHdpdGggYW4gT2JqZWN0OlxuICAgKlxuICAgKiAgICAgYWN0b3Iua2V5ZnJhbWUoMTAwMCwge1xuICAgKiAgICAgICAgICd4JzogMTAwLFxuICAgKiAgICAgICAgICd5JzogMTAwXG4gICAqICAgICAgIH0sIHtcbiAgICogICAgICAgICAneCc6ICdlYXNlaW5TaW5lJyxcbiAgICogICAgICAgICAneSc6ICdlYXNlT3V0U2luZSdcbiAgICogICAgICAgfSk7XG4gICAqXG4gICAqIGB4YCB3aWxsIGVhc2Ugd2l0aCBgZWFzZUluU2luZWAsIGFuZCBgeWAgd2lsbCBlYXNlIHdpdGggYGVhc2VPdXRTaW5lYC5cbiAgICogQW55IHVuc3BlY2lmaWVkIHByb3BlcnRpZXMgd2lsbCBlYXNlIHdpdGggYGxpbmVhcmAuICBJZiBgb3B0X2Vhc2luZ2AgaXNcbiAgICogb21pdHRlZCwgYWxsIHByb3BlcnRpZXMgd2lsbCBkZWZhdWx0IHRvIGBsaW5lYXJgLlxuICAgKiBAbWV0aG9kIGtleWZyYW1lXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBtaWxsaXNlY29uZCBXaGVyZSBvbiB0aGUgdGltZWxpbmUgdG8gc2V0IHRoZSBrZXlmcmFtZS5cbiAgICogQHBhcmFtIHtPYmplY3R8RnVuY3Rpb24obnVtYmVyKX0gc3RhdGUgVGhlIHN0YXRlIHByb3BlcnRpZXMgb2YgdGhlXG4gICAqIGtleWZyYW1lLiAgSWYgdGhpcyBpcyBhbiBPYmplY3QsIHRoZSBwcm9wZXJ0aWVzIHdpbGwgYmUgaW50ZXJwb2xhdGVkXG4gICAqIGJldHdlZW4gdGhpcyBhbmQgdGhvc2Ugb2YgdGhlIGZvbGxvd2luZyBrZXlmcmFtZSBmb3IgYSBnaXZlbiBwb2ludCBvbiB0aGVcbiAgICogYW5pbWF0aW9uIHRpbWVsaW5lLiAgSWYgdGhpcyBpcyBhIGZ1bmN0aW9uLCBpdCB3aWxsIGJlIGV4ZWN1dGVkIGF0IHRoZVxuICAgKiBzcGVjaWZpZWQga2V5ZnJhbWUuICBUaGUgZnVuY3Rpb24gd2lsbCByZWNlaXZlIGEgbnVtYmVyIHRoYXQgcmVwcmVzZW50c1xuICAgKiB0aGUgZGVsYXkgYmV0d2VlbiB3aGVuIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQgYW5kIHdoZW4gaXQgd2FzIHNjaGVkdWxlZC5cbiAgICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0PX0gb3B0X2Vhc2luZyBPcHRpb25hbCBlYXNpbmcgc3RyaW5nIG9yIE9iamVjdC4gIElmXG4gICAqIGBzdGF0ZWAgaXMgYSBmdW5jdGlvbiwgdGhpcyBpcyBpZ25vcmVkLlxuICAgKiBAY2hhaW5hYmxlXG4gICAqL1xuICBBY3Rvci5wcm90b3R5cGUua2V5ZnJhbWUgPSBmdW5jdGlvbiBrZXlmcmFtZSAoXG4gICAgbWlsbGlzZWNvbmQsIHN0YXRlLCBvcHRfZWFzaW5nKSB7XG5cbiAgICBpZiAoc3RhdGUgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgc3RhdGUgPSB7ICdmdW5jdGlvbic6IHN0YXRlIH07XG4gICAgfVxuXG4gICAgb3B0X2Vhc2luZyA9IG9wdF9lYXNpbmcgfHwgREVGQVVMVF9FQVNJTkc7XG4gICAgdmFyIGVhc2luZyA9IFR3ZWVuYWJsZS5jb21wb3NlRWFzaW5nT2JqZWN0KHN0YXRlLCBvcHRfZWFzaW5nKTtcbiAgICB2YXIgbmV3S2V5ZnJhbWVQcm9wZXJ0eTtcblxuICAgIC8vIENyZWF0ZSBhbmQgYWRkIGFsbCBvZiB0aGUgS2V5ZnJhbWVQcm9wZXJ0aWVzXG4gICAgXy5lYWNoKHN0YXRlLCBmdW5jdGlvbiAodmFsdWUsIG5hbWUpIHtcbiAgICAgIG5ld0tleWZyYW1lUHJvcGVydHkgPSBuZXcgUmVrYXBpLktleWZyYW1lUHJvcGVydHkoXG4gICAgICAgIG1pbGxpc2Vjb25kLCBuYW1lLCB2YWx1ZSwgZWFzaW5nW25hbWVdKTtcblxuICAgICAgdGhpcy5fYWRkS2V5ZnJhbWVQcm9wZXJ0eShuZXdLZXlmcmFtZVByb3BlcnR5KTtcbiAgICB9LCB0aGlzKTtcblxuICAgIGlmICh0aGlzLnJla2FwaSkge1xuICAgICAgcmVjYWxjdWxhdGVBbmltYXRpb25MZW5ndGgodGhpcy5yZWthcGksIF8pO1xuICAgIH1cblxuICAgIGludmFsaWRhdGVQcm9wZXJ0eUNhY2hlKHRoaXMpO1xuICAgIGZpcmVSZWthcGlFdmVudEZvckFjdG9yKHRoaXMsICd0aW1lbGluZU1vZGlmaWVkJyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogQG1ldGhvZCBoYXNLZXlmcmFtZUF0XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBtaWxsaXNlY29uZCBQb2ludCBvbiB0aGUgdGltZWxpbmUgdG8gcXVlcnkuXG4gICAqIEBwYXJhbSB7c3RyaW5nPX0gb3B0X3RyYWNrTmFtZSBPcHRpb25hbGx5IHNjb3BlIHRoZSBsb29rdXAgdG8gYSBwYXJ0aWN1bGFyXG4gICAqIHRyYWNrLlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBXaGV0aGVyIG9yIG5vdCB0aGUgYWN0b3IgaGFzIGFueSBge3sjY3Jvc3NMaW5rXG4gICAqIFwiUmVrYXBpLktleWZyYW1lUHJvcGVydHlcIn19e3svY3Jvc3NMaW5rfX1gcyBzZXQgYXQgYG1pbGxpc2Vjb25kYC5cbiAgICovXG4gIEFjdG9yLnByb3RvdHlwZS5oYXNLZXlmcmFtZUF0ID0gZnVuY3Rpb24gKG1pbGxpc2Vjb25kLCBvcHRfdHJhY2tOYW1lKSB7XG4gICAgdmFyIHRyYWNrcyA9IHRoaXMuX3Byb3BlcnR5VHJhY2tzO1xuXG4gICAgaWYgKG9wdF90cmFja05hbWUpIHtcbiAgICAgIGlmICghXy5oYXModHJhY2tzLCBvcHRfdHJhY2tOYW1lKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICB0cmFja3MgPSBfLnBpY2sodHJhY2tzLCBvcHRfdHJhY2tOYW1lKTtcbiAgICB9XG5cbiAgICAvLyBTZWFyY2ggdGhyb3VnaCB0aGUgdHJhY2tzIGFuZCBkZXRlcm1pbmUgaWYgYSBwcm9wZXJ0eSBjYW4gYmUgZm91bmQuXG4gICAgdmFyIHRyYWNrO1xuICAgIGZvciAodHJhY2sgaW4gdHJhY2tzKSB7XG4gICAgICBpZiAodHJhY2tzLmhhc093blByb3BlcnR5KHRyYWNrKVxuICAgICAgICAgJiYgZmluZFByb3BlcnR5QXRNaWxsaXNlY29uZEluVHJhY2sodGhpcywgdHJhY2ssIG1pbGxpc2Vjb25kKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIENvcGllcyBhbGwgb2YgdGhlIGB7eyNjcm9zc0xpbmtcbiAgICogXCJSZWthcGkuS2V5ZnJhbWVQcm9wZXJ0eVwifX17ey9jcm9zc0xpbmt9fWBzIGZyb20gb25lIHBvaW50IG9uIHRoZSBhY3RvcidzXG4gICAqIHRpbWVsaW5lIHRvIGFub3RoZXIuIFRoaXMgaXMgcGFydGljdWxhcmx5IHVzZWZ1bCBmb3IgYW5pbWF0aW5nIGFuIGFjdG9yXG4gICAqIGJhY2sgdG8gaXRzIG9yaWdpbmFsIHBvc2l0aW9uLlxuICAgKlxuICAgKiAgICAgYWN0b3JcbiAgICogICAgICAgLmtleWZyYW1lKDAsIHtcbiAgICogICAgICAgICB4OiAxMCxcbiAgICogICAgICAgICB5OiAxNVxuICAgKiAgICAgICB9KS5rZXlmcmFtZSgxMDAwLCB7XG4gICAqICAgICAgICAgeDogNTAsXG4gICAqICAgICAgICAgeTogNzVcbiAgICogICAgICAgfSk7XG4gICAqXG4gICAqICAgICAvLyBSZXR1cm4gdGhlIGFjdG9yIHRvIGl0cyBvcmlnaW5hbCBwb3NpdGlvblxuICAgKiAgICAgYWN0b3IuY29weUtleWZyYW1lKDIwMDAsIDApO1xuICAgKlxuICAgKiBfX1tFeGFtcGxlXSguLi8uLi8uLi8uLi9kb2NzL2V4YW1wbGVzL2FjdG9yX2NvcHlfa2V5ZnJhbWUuaHRtbClfX1xuICAgKiBAbWV0aG9kIGNvcHlLZXlmcmFtZVxuICAgKiBAcGFyYW0ge251bWJlcn0gY29weVRvIFRoZSB0aW1lbGluZSBtaWxsaXNlY29uZCB0byBjb3B5IEtleWZyYW1lUHJvcGVydGllc1xuICAgKiB0by5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGNvcHlGcm9tIFRoZSB0aW1lbGluZSBtaWxsaXNlY29uZCB0byBjb3B5XG4gICAqIEtleWZyYW1lUHJvcGVydGllcyBmcm9tLlxuICAgKiBAY2hhaW5hYmxlXG4gICAqL1xuICBBY3Rvci5wcm90b3R5cGUuY29weUtleWZyYW1lID0gZnVuY3Rpb24gKGNvcHlUbywgY29weUZyb20pIHtcbiAgICAvLyBCdWlsZCB0aGUgY29uZmlndWF0aW9uIG9iamVjdHMgdG8gYmUgcGFzc2VkIHRvIEFjdG9yI2tleWZyYW1lXG4gICAgdmFyIHNvdXJjZVBvc2l0aW9ucyA9IHt9O1xuICAgIHZhciBzb3VyY2VFYXNpbmdzID0ge307XG5cbiAgICBfLmVhY2godGhpcy5fcHJvcGVydHlUcmFja3MsIGZ1bmN0aW9uIChwcm9wZXJ0eVRyYWNrLCB0cmFja05hbWUpIHtcbiAgICAgIHZhciBrZXlmcmFtZVByb3BlcnR5ID1cbiAgICAgIGZpbmRQcm9wZXJ0eUF0TWlsbGlzZWNvbmRJblRyYWNrKHRoaXMsIHRyYWNrTmFtZSwgY29weUZyb20pO1xuXG4gICAgICBpZiAoa2V5ZnJhbWVQcm9wZXJ0eSkge1xuICAgICAgICBzb3VyY2VQb3NpdGlvbnNbdHJhY2tOYW1lXSA9IGtleWZyYW1lUHJvcGVydHkudmFsdWU7XG4gICAgICAgIHNvdXJjZUVhc2luZ3NbdHJhY2tOYW1lXSA9IGtleWZyYW1lUHJvcGVydHkuZWFzaW5nO1xuICAgICAgfVxuICAgIH0sIHRoaXMpO1xuXG4gICAgdGhpcy5rZXlmcmFtZShjb3B5VG8sIHNvdXJjZVBvc2l0aW9ucywgc291cmNlRWFzaW5ncyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIE1vdmVzIGFsbCBvZiB0aGVcbiAgICogYHt7I2Nyb3NzTGluayBcIlJla2FwaS5LZXlmcmFtZVByb3BlcnR5XCJ9fXt7L2Nyb3NzTGlua319YHMgZnJvbSBvbmVcbiAgICogcG9pbnQgb24gdGhlIGFjdG9yJ3MgdGltZWxpbmUgdG8gYW5vdGhlci4gIEFsdGhvdWdoIHRoaXMgbWV0aG9kIGRvZXMgZXJyb3JcbiAgICogY2hlY2tpbmcgZm9yIHlvdSB0byBtYWtlIHN1cmUgdGhlIG9wZXJhdGlvbiBjYW4gYmUgc2FmZWx5IHBlcmZvcm1lZCwgYW5cbiAgICogZWZmZWN0aXZlIHBhdHRlcm4gaXMgdG8gdXNlIGB7eyNjcm9zc0xpbmtcbiAgICogXCJSZWthcGkuQWN0b3IvaGFzS2V5ZnJhbWVBdDptZXRob2RcIn19e3svY3Jvc3NMaW5rfX1gIHRvIHNlZSBpZiB0aGVyZSBpc1xuICAgKiBhbHJlYWR5IGEga2V5ZnJhbWUgYXQgdGhlIHJlcXVlc3RlZCBgdG9gIGRlc3RpbmF0aW9uLlxuICAgKlxuICAgKiBfX1tFeGFtcGxlXSguLi8uLi8uLi8uLi9kb2NzL2V4YW1wbGVzL2FjdG9yX21vdmVfa2V5ZnJhbWUuaHRtbClfX1xuICAgKiBAbWV0aG9kIG1vdmVLZXlmcmFtZVxuICAgKiBAcGFyYW0ge251bWJlcn0gZnJvbSBUaGUgbWlsbGlzZWNvbmQgb2YgdGhlIGtleWZyYW1lIHRvIGJlIG1vdmVkLlxuICAgKiBAcGFyYW0ge251bWJlcn0gdG8gVGhlIG1pbGxpc2Vjb25kIG9mIHdoZXJlIHRoZSBrZXlmcmFtZSBzaG91bGQgYmUgbW92ZWRcbiAgICogdG8uXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFdoZXRoZXIgb3Igbm90IHRoZSBrZXlmcmFtZSB3YXMgc3VjY2Vzc2Z1bGx5IG1vdmVkLlxuICAgKi9cbiAgQWN0b3IucHJvdG90eXBlLm1vdmVLZXlmcmFtZSA9IGZ1bmN0aW9uIChmcm9tLCB0bykge1xuICAgIGlmICghdGhpcy5oYXNLZXlmcmFtZUF0KGZyb20pIHx8IHRoaXMuaGFzS2V5ZnJhbWVBdCh0bykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBNb3ZlIGVhY2ggb2YgdGhlIHJlbGV2YW50IEtleWZyYW1lUHJvcGVydGllcyB0byB0aGUgbmV3IGxvY2F0aW9uIGluIHRoZVxuICAgIC8vIHRpbWVsaW5lXG4gICAgXy5lYWNoKHRoaXMuX3Byb3BlcnR5VHJhY2tzLCBmdW5jdGlvbiAocHJvcGVydHlUcmFjaywgdHJhY2tOYW1lKSB7XG4gICAgICB2YXIgcHJvcGVydHkgPSBmaW5kUHJvcGVydHlBdE1pbGxpc2Vjb25kSW5UcmFjayh0aGlzLCB0cmFja05hbWUsIGZyb20pO1xuXG4gICAgICBpZiAocHJvcGVydHkpIHtcbiAgICAgICAgcHJvcGVydHkubWlsbGlzZWNvbmQgPSB0bztcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcblxuICAgIGNsZWFudXBBZnRlcktleWZyYW1lTW9kaWZpY2F0aW9uKHRoaXMpO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgLyoqXG4gICAqIEF1Z21lbnQgdGhlIGB2YWx1ZWAgb3IgYGVhc2luZ2Agb2YgdGhlIGB7eyNjcm9zc0xpbmtcbiAgICogXCJSZWthcGkuS2V5ZnJhbWVQcm9wZXJ0eVwifX17ey9jcm9zc0xpbmt9fWBzIGF0IGEgZ2l2ZW4gbWlsbGlzZWNvbmQuICBBbnlcbiAgICogYHt7I2Nyb3NzTGluayBcIlJla2FwaS5LZXlmcmFtZVByb3BlcnR5XCJ9fXt7L2Nyb3NzTGlua319YHMgb21pdHRlZCBpblxuICAgKiBgc3RhdGVNb2RpZmljYXRpb25gIG9yIGBvcHRfZWFzaW5nYCBhcmUgbm90IG1vZGlmaWVkLlxuICAgKlxuICAgKiAgICAgYWN0b3Iua2V5ZnJhbWUoMCwge1xuICAgKiAgICAgICAneCc6IDEwLFxuICAgKiAgICAgICAneSc6IDIwXG4gICAqICAgICB9KS5rZXlmcmFtZSgxMDAwLCB7XG4gICAqICAgICAgICd4JzogMjAsXG4gICAqICAgICAgICd5JzogNDBcbiAgICogICAgIH0pLmtleWZyYW1lKDIwMDAsIHtcbiAgICogICAgICAgJ3gnOiAzMCxcbiAgICogICAgICAgJ3knOiA2MFxuICAgKiAgICAgfSlcbiAgICpcbiAgICogICAgIC8vIENoYW5nZXMgdGhlIHN0YXRlIG9mIHRoZSBrZXlmcmFtZSBhdCBtaWxsaXNlY29uZCAxMDAwLlxuICAgKiAgICAgLy8gTW9kaWZpZXMgdGhlIHZhbHVlIG9mICd5JyBhbmQgdGhlIGVhc2luZyBvZiAneC4nXG4gICAqICAgICBhY3Rvci5tb2RpZnlLZXlmcmFtZSgxMDAwLCB7XG4gICAqICAgICAgICd5JzogMTUwXG4gICAqICAgICB9LCB7XG4gICAqICAgICAgICd4JzogJ2Vhc2VGcm9tJ1xuICAgKiAgICAgfSk7XG4gICAqXG4gICAqIF9fW0V4YW1wbGVdKC4uLy4uLy4uLy4uL2RvY3MvZXhhbXBsZXMvYWN0b3JfbW9kaWZ5X2tleWZyYW1lLmh0bWwpX19cbiAgICogQG1ldGhvZCBtb2RpZnlLZXlmcmFtZVxuICAgKiBAcGFyYW0ge251bWJlcn0gbWlsbGlzZWNvbmRcbiAgICogQHBhcmFtIHtPYmplY3R9IHN0YXRlTW9kaWZpY2F0aW9uXG4gICAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0X2Vhc2luZ01vZGlmaWNhdGlvblxuICAgKiBAY2hhaW5hYmxlXG4gICAqL1xuICBBY3Rvci5wcm90b3R5cGUubW9kaWZ5S2V5ZnJhbWUgPSBmdW5jdGlvbiAoXG4gICAgbWlsbGlzZWNvbmQsIHN0YXRlTW9kaWZpY2F0aW9uLCBvcHRfZWFzaW5nTW9kaWZpY2F0aW9uKSB7XG4gICAgb3B0X2Vhc2luZ01vZGlmaWNhdGlvbiA9IG9wdF9lYXNpbmdNb2RpZmljYXRpb24gfHwge307XG5cbiAgICBfLmVhY2godGhpcy5fcHJvcGVydHlUcmFja3MsIGZ1bmN0aW9uIChwcm9wZXJ0eVRyYWNrLCB0cmFja05hbWUpIHtcbiAgICAgIHZhciBwcm9wZXJ0eSA9IGZpbmRQcm9wZXJ0eUF0TWlsbGlzZWNvbmRJblRyYWNrKFxuICAgICAgICB0aGlzLCB0cmFja05hbWUsIG1pbGxpc2Vjb25kKTtcblxuICAgICAgaWYgKHByb3BlcnR5KSB7XG4gICAgICAgIHByb3BlcnR5Lm1vZGlmeVdpdGgoe1xuICAgICAgICAgICd2YWx1ZSc6IHN0YXRlTW9kaWZpY2F0aW9uW3RyYWNrTmFtZV1cbiAgICAgICAgICAsJ2Vhc2luZyc6IG9wdF9lYXNpbmdNb2RpZmljYXRpb25bdHJhY2tOYW1lXVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcblxuICAgIGNsZWFudXBBZnRlcktleWZyYW1lTW9kaWZpY2F0aW9uKHRoaXMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhbGwgYHt7I2Nyb3NzTGluayBcIlJla2FwaS5LZXlmcmFtZVByb3BlcnR5XCJ9fXt7L2Nyb3NzTGlua319YHMgc2V0XG4gICAqIG9uIHRoZSBhY3RvciBhdCBhIGdpdmVuIG1pbGxpc2Vjb25kIGluIHRoZSBhbmltYXRpb24uXG4gICAqXG4gICAqIF9fW0V4YW1wbGVdKC4uLy4uLy4uLy4uL2RvY3MvZXhhbXBsZXMvYWN0b3JfcmVtb3ZlX2tleWZyYW1lLmh0bWwpX19cbiAgICogQG1ldGhvZCByZW1vdmVLZXlmcmFtZVxuICAgKiBAcGFyYW0ge251bWJlcn0gbWlsbGlzZWNvbmQgVGhlIGxvY2F0aW9uIG9uIHRoZSB0aW1lbGluZSBvZiB0aGUga2V5ZnJhbWVcbiAgICogdG8gcmVtb3ZlLlxuICAgKiBAY2hhaW5hYmxlXG4gICAqL1xuICBBY3Rvci5wcm90b3R5cGUucmVtb3ZlS2V5ZnJhbWUgPSBmdW5jdGlvbiAobWlsbGlzZWNvbmQpIHtcbiAgICB2YXIgcHJvcGVydHlUcmFja3MgPSB0aGlzLl9wcm9wZXJ0eVRyYWNrcztcblxuICAgIF8uZWFjaCh0aGlzLl9wcm9wZXJ0eVRyYWNrcywgZnVuY3Rpb24gKHByb3BlcnR5VHJhY2ssIHByb3BlcnR5TmFtZSkge1xuICAgICAgdmFyIGtleWZyYW1lUHJvcGVydHkgPSBfLmZpbmRXaGVyZShcbiAgICAgICAgcHJvcGVydHlUcmFjaywgeyBtaWxsaXNlY29uZDogbWlsbGlzZWNvbmQgfSk7XG5cbiAgICAgIGlmIChrZXlmcmFtZVByb3BlcnR5KSB7XG4gICAgICAgIHByb3BlcnR5VHJhY2tzW3Byb3BlcnR5TmFtZV0gPSBfLndpdGhvdXQoXG4gICAgICAgICAgcHJvcGVydHlUcmFjaywga2V5ZnJhbWVQcm9wZXJ0eSk7XG4gICAgICAgIGtleWZyYW1lUHJvcGVydHkuZGV0YWNoKCk7XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG5cbiAgICBpZiAodGhpcy5yZWthcGkpIHtcbiAgICAgIHJlY2FsY3VsYXRlQW5pbWF0aW9uTGVuZ3RoKHRoaXMucmVrYXBpLCBfKTtcbiAgICB9XG5cbiAgICBpbnZhbGlkYXRlUHJvcGVydHlDYWNoZSh0aGlzKTtcbiAgICBmaXJlUmVrYXBpRXZlbnRGb3JBY3Rvcih0aGlzLCAndGltZWxpbmVNb2RpZmllZCcpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhbGwgYHt7I2Nyb3NzTGluayBcIlJla2FwaS5LZXlmcmFtZVByb3BlcnR5XCJ9fXt7L2Nyb3NzTGlua319YHMgc2V0XG4gICAqIG9uIHRoZSBhY3Rvci5cbiAgICpcbiAgICogX19bRXhhbXBsZV0oLi4vLi4vLi4vLi4vZG9jcy9leGFtcGxlcy9hY3Rvcl9yZW1vdmVfYWxsX2tleWZyYW1lcy5odG1sKV9fXG4gICAqIEBtZXRob2QgcmVtb3ZlQWxsS2V5ZnJhbWVzXG4gICAqIEBjaGFpbmFibGVcbiAgICovXG4gIEFjdG9yLnByb3RvdHlwZS5yZW1vdmVBbGxLZXlmcmFtZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgXy5lYWNoKHRoaXMuX3Byb3BlcnR5VHJhY2tzLCBmdW5jdGlvbiAocHJvcGVydHlUcmFjaykge1xuICAgICAgcHJvcGVydHlUcmFjay5sZW5ndGggPSAwO1xuICAgIH0pO1xuXG4gICAgXy5lYWNoKHRoaXMuX2tleWZyYW1lUHJvcGVydGllcywgZnVuY3Rpb24gKGtleWZyYW1lUHJvcGVydHkpIHtcbiAgICAgIGtleWZyYW1lUHJvcGVydHkuZGV0YWNoKCk7XG4gICAgfSwgdGhpcyk7XG5cbiAgICB0aGlzLl9rZXlmcmFtZVByb3BlcnRpZXMgPSB7fTtcblxuICAgIC8vIENhbGxpbmcgcmVtb3ZlS2V5ZnJhbWUgcGVyZm9ybXMgc29tZSBuZWNlc3NhcnkgcG9zdC1yZW1vdmFsIGNsZWFudXAsIHRoZVxuICAgIC8vIGVhcmxpZXIgcGFydCBvZiB0aGlzIG1ldGhvZCBza2lwcGVkIGFsbCBvZiB0aGF0IGZvciB0aGUgc2FrZSBvZlxuICAgIC8vIGVmZmljaWVuY3kuXG4gICAgcmV0dXJuIHRoaXMucmVtb3ZlS2V5ZnJhbWUoMCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgZ2V0S2V5ZnJhbWVQcm9wZXJ0eVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcGVydHkgVGhlIG5hbWUgb2YgdGhlIHByb3BlcnR5IHRyYWNrLlxuICAgKiBAcGFyYW0ge251bWJlcn0gbWlsbGlzZWNvbmQgVGhlIG1pbGxpc2Vjb25kIG9mIHRoZSBwcm9wZXJ0eSBpbiB0aGVcbiAgICogdGltZWxpbmUuXG4gICAqIEByZXR1cm4ge1Jla2FwaS5LZXlmcmFtZVByb3BlcnR5fHVuZGVmaW5lZH0gQSBge3sjY3Jvc3NMaW5rXG4gICAqIFwiUmVrYXBpLktleWZyYW1lUHJvcGVydHlcIn19e3svY3Jvc3NMaW5rfX1gIHRoYXQgaXMgc3RvcmVkIG9uIHRoZSBhY3RvciwgYXNcbiAgICogc3BlY2lmaWVkIGJ5IHRoZSBgcHJvcGVydHlgIGFuZCBgbWlsbGlzZWNvbmRgIHBhcmFtZXRlcnMuIFRoaXMgaXNcbiAgICogYHVuZGVmaW5lZGAgaWYgbm8gcHJvcGVydGllcyB3ZXJlIGZvdW5kLlxuICAgKi9cbiAgQWN0b3IucHJvdG90eXBlLmdldEtleWZyYW1lUHJvcGVydHkgPSBmdW5jdGlvbiAocHJvcGVydHksIG1pbGxpc2Vjb25kKSB7XG4gICAgdmFyIHByb3BlcnR5VHJhY2sgPSB0aGlzLl9wcm9wZXJ0eVRyYWNrc1twcm9wZXJ0eV07XG4gICAgaWYgKHByb3BlcnR5VHJhY2spIHtcbiAgICAgIHJldHVybiBfLmZpbmRXaGVyZShwcm9wZXJ0eVRyYWNrLCB7IG1pbGxpc2Vjb25kOiBtaWxsaXNlY29uZCB9KTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIE1vZGlmeSBhIGB7eyNjcm9zc0xpbmsgXCJSZWthcGkuS2V5ZnJhbWVQcm9wZXJ0eVwifX17ey9jcm9zc0xpbmt9fWAgc3RvcmVkXG4gICAqIG9uIGFuIGFjdG9yLiAgSW50ZXJuYWxseSwgdGhpcyBjYWxscyBge3sjY3Jvc3NMaW5rXG4gICAqIFwiUmVrYXBpLktleWZyYW1lUHJvcGVydHkvbW9kaWZ5V2l0aDptZXRob2RcIn19e3svY3Jvc3NMaW5rfX1gIGFuZCB0aGVuXG4gICAqIHBlcmZvcm1zIHNvbWUgY2xlYW51cC5cbiAgICpcbiAgICogX19bRXhhbXBsZV0oLi4vLi4vLi4vLi4vZG9jcy9leGFtcGxlcy9hY3Rvcl9tb2RpZnlfa2V5ZnJhbWVfcHJvcGVydHkuaHRtbClfX1xuICAgKiBAbWV0aG9kIG1vZGlmeUtleWZyYW1lUHJvcGVydHlcbiAgICogQHBhcmFtIHtzdHJpbmd9IHByb3BlcnR5IFRoZSBuYW1lIG9mIHRoZSBge3sjY3Jvc3NMaW5rXG4gICAqIFwiUmVrYXBpLktleWZyYW1lUHJvcGVydHlcIn19e3svY3Jvc3NMaW5rfX1gIHRvIG1vZGlmeS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IG1pbGxpc2Vjb25kIFRoZSB0aW1lbGluZSBtaWxsaXNlY29uZCBvZiB0aGUgYHt7I2Nyb3NzTGlua1xuICAgKiBcIlJla2FwaS5LZXlmcmFtZVByb3BlcnR5XCJ9fXt7L2Nyb3NzTGlua319YCB0byBtb2RpZnkuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBuZXdQcm9wZXJ0aWVzIFRoZSBwcm9wZXJ0aWVzIHRvIGF1Z21lbnQgdGhlIGB7eyNjcm9zc0xpbmtcbiAgICogXCJSZWthcGkuS2V5ZnJhbWVQcm9wZXJ0eVwifX17ey9jcm9zc0xpbmt9fWAgd2l0aC5cbiAgICogQGNoYWluYWJsZVxuICAgKi9cbiAgQWN0b3IucHJvdG90eXBlLm1vZGlmeUtleWZyYW1lUHJvcGVydHkgPSBmdW5jdGlvbiAoXG4gICAgcHJvcGVydHksIG1pbGxpc2Vjb25kLCBuZXdQcm9wZXJ0aWVzKSB7XG5cbiAgICB2YXIga2V5ZnJhbWVQcm9wZXJ0eSA9IHRoaXMuZ2V0S2V5ZnJhbWVQcm9wZXJ0eShwcm9wZXJ0eSwgbWlsbGlzZWNvbmQpO1xuICAgIGlmIChrZXlmcmFtZVByb3BlcnR5KSB7XG4gICAgICBrZXlmcmFtZVByb3BlcnR5Lm1vZGlmeVdpdGgobmV3UHJvcGVydGllcyk7XG4gICAgICBjbGVhbnVwQWZ0ZXJLZXlmcmFtZU1vZGlmaWNhdGlvbih0aGlzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogUmVtb3ZlIGEgc2luZ2xlIGB7eyNjcm9zc0xpbmsgXCJSZWthcGkuS2V5ZnJhbWVQcm9wZXJ0eVwifX17ey9jcm9zc0xpbmt9fWBcbiAgICogZnJvbSB0aGUgYWN0b3IuXG4gICAqIEBtZXRob2QgcmVtb3ZlS2V5ZnJhbWVQcm9wZXJ0eVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcGVydHkgVGhlIG5hbWUgb2YgdGhlIGB7eyNjcm9zc0xpbmtcbiAgICogXCJSZWthcGkuS2V5ZnJhbWVQcm9wZXJ0eVwifX17ey9jcm9zc0xpbmt9fWAgdG8gcmVtb3ZlLlxuICAgKiBAcGFyYW0ge251bWJlcn0gbWlsbGlzZWNvbmQgV2hlcmUgaW4gdGhlIHRpbWVsaW5lIHRoZSBge3sjY3Jvc3NMaW5rXG4gICAqIFwiUmVrYXBpLktleWZyYW1lUHJvcGVydHlcIn19e3svY3Jvc3NMaW5rfX1gIHRvIHJlbW92ZSBpcy5cbiAgICogQHJldHVybiB7UmVrYXBpLktleWZyYW1lUHJvcGVydHl8dW5kZWZpbmVkfSBUaGUgcmVtb3ZlZCBLZXlmcmFtZVByb3BlcnR5LFxuICAgKiBpZiBvbmUgd2FzIGZvdW5kLlxuICAgKi9cbiAgQWN0b3IucHJvdG90eXBlLnJlbW92ZUtleWZyYW1lUHJvcGVydHkgPSBmdW5jdGlvbiAocHJvcGVydHksIG1pbGxpc2Vjb25kKSB7XG4gICAgdmFyIHByb3BlcnR5VHJhY2tzID0gdGhpcy5fcHJvcGVydHlUcmFja3M7XG5cbiAgICBpZiAodHlwZW9mIHByb3BlcnR5VHJhY2tzW3Byb3BlcnR5XSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBrZXlmcmFtZVByb3BlcnR5ID0gdGhpcy5nZXRLZXlmcmFtZVByb3BlcnR5KHByb3BlcnR5LCBtaWxsaXNlY29uZCk7XG4gICAgICBwcm9wZXJ0eVRyYWNrc1twcm9wZXJ0eV0gPVxuICAgICAgXy53aXRob3V0KHByb3BlcnR5VHJhY2tzW3Byb3BlcnR5XSwga2V5ZnJhbWVQcm9wZXJ0eSk7XG4gICAgICBrZXlmcmFtZVByb3BlcnR5LmRldGFjaCgpO1xuXG4gICAgICBjbGVhbnVwQWZ0ZXJLZXlmcmFtZU1vZGlmaWNhdGlvbih0aGlzKTtcblxuICAgICAgcmV0dXJuIGtleWZyYW1lUHJvcGVydHk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKlxuICAgKiBAbWV0aG9kIGdldFRyYWNrTmFtZXNcbiAgICogQHJldHVybiB7QXJyYXkoc3RyaW5nKX0gQSBsaXN0IG9mIGFsbCB0aGUgdHJhY2sgbmFtZXMgZm9yIGFuIGFjdG9yLlxuICAgKi9cbiAgQWN0b3IucHJvdG90eXBlLmdldFRyYWNrTmFtZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF8ua2V5cyh0aGlzLl9wcm9wZXJ0eVRyYWNrcyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgb2YgdGhlIGB7eyNjcm9zc0xpbmsgXCJSZWthcGkuS2V5ZnJhbWVQcm9wZXJ0eVwifX17ey9jcm9zc0xpbmt9fWBzXG4gICAqIGZvciBhIHRyYWNrLlxuICAgKiBAbWV0aG9kIGdldFByb3BlcnRpZXNJblRyYWNrXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0cmFja05hbWUgVGhlIHRyYWNrIG5hbWUgdG8gcXVlcnkuXG4gICAqIEByZXR1cm4ge1Jla2FwaS5LZXlmcmFtZVByb3BlcnR5W118dW5kZWZpbmVkfVxuICAgKi9cbiAgQWN0b3IucHJvdG90eXBlLmdldFByb3BlcnRpZXNJblRyYWNrID0gZnVuY3Rpb24gKHRyYWNrTmFtZSkge1xuICAgIHZhciBwcm9wZXJ0eVRyYWNrID0gdGhpcy5fcHJvcGVydHlUcmFja3NbdHJhY2tOYW1lXTtcblxuICAgIGlmIChwcm9wZXJ0eVRyYWNrKSB7XG4gICAgICByZXR1cm4gcHJvcGVydHlUcmFjay5zbGljZSgwKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgZ2V0U3RhcnRcbiAgICogQHBhcmFtIHtzdHJpbmc9fSBvcHRfdHJhY2tOYW1lIE9wdGlvbmFsbHkgc2NvcGUgdGhlIGxvb2t1cCB0byBhIHBhcnRpY3VsYXJcbiAgICogdHJhY2suXG4gICAqIEByZXR1cm4ge251bWJlcn0gVGhlIG1pbGxpc2Vjb25kIG9mIHRoZSBmaXJzdCBhbmltYXRpbmcgc3RhdGUgb2YgYW4gYWN0b3JcbiAgICogKGZvciBpbnN0YW5jZSwgaWYgdGhlIGFjdG9yJ3MgZmlyc3Qga2V5ZnJhbWUgaXMgbGF0ZXIgdGhhbiBtaWxsaXNlY29uZFxuICAgKiBgMGApLiAgSWYgdGhlcmUgYXJlIG5vIGtleWZyYW1lcywgdGhpcyByZXR1cm5zIGAwYC5cbiAgICovXG4gIEFjdG9yLnByb3RvdHlwZS5nZXRTdGFydCA9IGZ1bmN0aW9uIChvcHRfdHJhY2tOYW1lKSB7XG4gICAgdmFyIHN0YXJ0cyA9IFtdO1xuICAgIHZhciBwcm9wZXJ0eVRyYWNrcyA9IHRoaXMuX3Byb3BlcnR5VHJhY2tzO1xuXG4gICAgLy8gTnVsbCBjaGVjayB0byBzZWUgaWYgb3B0X3RyYWNrTmFtZSB3YXMgcHJvdmlkZWQgYW5kIGlzIHZhbGlkXG4gICAgaWYgKHByb3BlcnR5VHJhY2tzLmhhc093blByb3BlcnR5KG9wdF90cmFja05hbWUpKSB7XG4gICAgICB2YXIgZmlyc3RLZXlmcmFtZVByb3BlcnR5ID0gcHJvcGVydHlUcmFja3Nbb3B0X3RyYWNrTmFtZV1bMF07XG5cbiAgICAgIGlmIChmaXJzdEtleWZyYW1lUHJvcGVydHkpIHtcbiAgICAgICAgc3RhcnRzLnB1c2goZmlyc3RLZXlmcmFtZVByb3BlcnR5Lm1pbGxpc2Vjb25kKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTG9vcCBvdmVyIGFsbCBwcm9wZXJ0eSB0cmFja3MgYW5kIGFjY3VtdWxhdGUgdGhlIGZpcnN0XG4gICAgICAvLyBrZXlmcmFtZVByb3BlcnRpZXMgZnJvbSBub24tZW1wdHkgdHJhY2tzXG4gICAgICBfLmVhY2gocHJvcGVydHlUcmFja3MsIGZ1bmN0aW9uIChwcm9wZXJ0eVRyYWNrKSB7XG4gICAgICAgIGlmIChwcm9wZXJ0eVRyYWNrLmxlbmd0aCkge1xuICAgICAgICAgIHN0YXJ0cy5wdXNoKHByb3BlcnR5VHJhY2tbMF0ubWlsbGlzZWNvbmQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoc3RhcnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgc3RhcnRzID0gWzBdO1xuICAgIH1cblxuICAgIHZhciBzdGFydDtcbiAgICBpZiAoc3RhcnRzLmxlbmd0aCA+IDApIHtcbiAgICAgIHN0YXJ0ID0gTWF0aC5taW4uYXBwbHkoTWF0aCwgc3RhcnRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhcnQgPSAwO1xuICAgIH1cblxuICAgIHJldHVybiBzdGFydDtcbiAgfTtcblxuICAvKipcbiAgICogQG1ldGhvZCBnZXRFbmRcbiAgICogQHBhcmFtIHtzdHJpbmc9fSBvcHRfdHJhY2tOYW1lIE9wdGlvbmFsbHkgc2NvcGUgdGhlIGxvb2t1cCB0byBhIHBhcnRpY3VsYXJcbiAgICoga2V5ZnJhbWUgdHJhY2suXG4gICAqIEByZXR1cm4ge251bWJlcn0gVGhlIG1pbGxpc2Vjb25kIG9mIHRoZSBsYXN0IHN0YXRlIG9mIGFuIGFjdG9yICh0aGUgcG9pbnRcbiAgICogaW4gdGhlIHRpbWVsaW5lIGluIHdoaWNoIGl0IGlzIGRvbmUgYW5pbWF0aW5nKS4gIElmIHRoZXJlIGFyZSBub1xuICAgKiBrZXlmcmFtZXMsIHRoaXMgaXMgYDBgLlxuICAgKi9cbiAgQWN0b3IucHJvdG90eXBlLmdldEVuZCA9IGZ1bmN0aW9uIChvcHRfdHJhY2tOYW1lKSB7XG4gICAgdmFyIGxhdGVzdCA9IDA7XG4gICAgdmFyIHRyYWNrc1RvSW5zcGVjdCA9IHRoaXMuX3Byb3BlcnR5VHJhY2tzO1xuXG4gICAgaWYgKG9wdF90cmFja05hbWUpIHtcbiAgICAgIHRyYWNrc1RvSW5zcGVjdCA9IHt9O1xuICAgICAgdHJhY2tzVG9JbnNwZWN0W29wdF90cmFja05hbWVdID0gdGhpcy5fcHJvcGVydHlUcmFja3Nbb3B0X3RyYWNrTmFtZV07XG4gICAgfVxuXG4gICAgXy5lYWNoKHRyYWNrc1RvSW5zcGVjdCwgZnVuY3Rpb24gKHByb3BlcnR5VHJhY2spIHtcbiAgICAgIGlmIChwcm9wZXJ0eVRyYWNrLmxlbmd0aCkge1xuICAgICAgICB2YXIgdHJhY2tMZW5ndGggPSBfLmxhc3QocHJvcGVydHlUcmFjaykubWlsbGlzZWNvbmQ7XG5cbiAgICAgICAgaWYgKHRyYWNrTGVuZ3RoID4gbGF0ZXN0KSB7XG4gICAgICAgICAgbGF0ZXN0ID0gdHJhY2tMZW5ndGg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcblxuICAgIHJldHVybiBsYXRlc3Q7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgZ2V0TGVuZ3RoXG4gICAqIEBwYXJhbSB7c3RyaW5nPX0gb3B0X3RyYWNrTmFtZSBPcHRpb25hbGx5IHNjb3BlIHRoZSBsb29rdXAgdG8gYSBwYXJ0aWN1bGFyXG4gICAqIHRyYWNrLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBsZW5ndGggb2YgdGltZSBpbiBtaWxsaXNlY29uZHMgdGhhdCB0aGUgYWN0b3JcbiAgICogYW5pbWF0ZXMgZm9yLlxuICAgKi9cbiAgQWN0b3IucHJvdG90eXBlLmdldExlbmd0aCA9IGZ1bmN0aW9uIChvcHRfdHJhY2tOYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0RW5kKG9wdF90cmFja05hbWUpIC0gdGhpcy5nZXRTdGFydChvcHRfdHJhY2tOYW1lKTtcbiAgfTtcblxuICAvKipcbiAgICogRXh0ZW5kIHRoZSBsYXN0IHN0YXRlIG9uIHRoaXMgYWN0b3IncyB0aW1lbGluZSB0byBzaW11bGF0ZSBhIHBhdXNlLlxuICAgKiBJbnRlcm5hbGx5LCB0aGlzIG1ldGhvZCBjb3BpZXMgdGhlIGZpbmFsIHN0YXRlIG9mIHRoZSBhY3RvciBpbiB0aGVcbiAgICogdGltZWxpbmUgdG8gdGhlIG1pbGxpc2Vjb25kIGRlZmluZWQgYnkgYHVudGlsYC5cbiAgICpcbiAgICogX19bRXhhbXBsZV0oLi4vLi4vLi4vLi4vZG9jcy9leGFtcGxlcy9hY3Rvcl93YWl0Lmh0bWwpX19cbiAgICogQG1ldGhvZCB3YWl0XG4gICAqIEBwYXJhbSB7bnVtYmVyfSB1bnRpbCBBdCB3aGF0IHBvaW50IGluIHRoZSBhbmltYXRpb24gdGhlIEFjdG9yIHNob3VsZCB3YWl0XG4gICAqIHVudGlsIChyZWxhdGl2ZSB0byB0aGUgc3RhcnQgb2YgdGhlIGFuaW1hdGlvbiB0aW1lbGluZSkuICBJZiB0aGlzIG51bWJlclxuICAgKiBpcyBsZXNzIHRoYW4gdGhlIHZhbHVlIHJldHVybmVkIGZyb20gYHt7I2Nyb3NzTGlua1xuICAgKiBcIlJla2FwaS5BY3Rvci9nZXRMZW5ndGg6bWV0aG9kXCJ9fXt7L2Nyb3NzTGlua319YCwgdGhpcyBtZXRob2QgZG9lc1xuICAgKiBub3RoaW5nLlxuICAgKiBAY2hhaW5hYmxlXG4gICAqL1xuICBBY3Rvci5wcm90b3R5cGUud2FpdCA9IGZ1bmN0aW9uICh1bnRpbCkge1xuICAgIHZhciBsZW5ndGggPSB0aGlzLmdldEVuZCgpO1xuXG4gICAgaWYgKHVudGlsIDw9IGxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdmFyIGVuZCA9IHRoaXMuZ2V0RW5kKCk7XG4gICAgdmFyIGxhdGVzdFByb3BzID0gZ2V0TGF0ZXN0UHJvcGV0aWVzKHRoaXMsIHRoaXMuZ2V0RW5kKCkpO1xuICAgIHZhciBzZXJpYWxpemVkUHJvcHMgPSB7fTtcbiAgICB2YXIgc2VyaWFsaXplZEVhc2luZ3MgPSB7fTtcblxuICAgIF8uZWFjaChsYXRlc3RQcm9wcywgZnVuY3Rpb24gKGxhdGVzdFByb3AsIHByb3BOYW1lKSB7XG4gICAgICBzZXJpYWxpemVkUHJvcHNbcHJvcE5hbWVdID0gbGF0ZXN0UHJvcC52YWx1ZTtcbiAgICAgIHNlcmlhbGl6ZWRFYXNpbmdzW3Byb3BOYW1lXSA9IGxhdGVzdFByb3AuZWFzaW5nO1xuICAgIH0pO1xuXG4gICAgdGhpcy5yZW1vdmVLZXlmcmFtZShlbmQpO1xuICAgIHRoaXMua2V5ZnJhbWUoZW5kLCBzZXJpYWxpemVkUHJvcHMsIHNlcmlhbGl6ZWRFYXNpbmdzKTtcbiAgICB0aGlzLmtleWZyYW1lKHVudGlsLCBzZXJpYWxpemVkUHJvcHMsIHNlcmlhbGl6ZWRFYXNpbmdzKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qIVxuICAgKiBBc3NvY2lhdGUgYSBgUmVrYXBpLktleWZyYW1lUHJvcGVydHlgIHRvIHRoaXMgYWN0b3IuICBBdWdtZW50cyB0aGVcbiAgICogYFJla2FwaS5LZXlmcmFtZVByb3BlcnR5YCB0byBtYWludGFpbiBhIGxpbmsgYmV0d2VlbiB0aGUgdHdvIG9iamVjdHMuXG4gICAqIEBtZXRob2QgX2FkZEtleWZyYW1lUHJvcGVydHlcbiAgICogQHBhcmFtIHtSZWthcGkuS2V5ZnJhbWVQcm9wZXJ0eX0ga2V5ZnJhbWVQcm9wZXJ0eVxuICAgKiBAY2hhaW5hYmxlXG4gICAqL1xuICBBY3Rvci5wcm90b3R5cGUuX2FkZEtleWZyYW1lUHJvcGVydHkgPSBmdW5jdGlvbiAoa2V5ZnJhbWVQcm9wZXJ0eSkge1xuICAgIGtleWZyYW1lUHJvcGVydHkuYWN0b3IgPSB0aGlzO1xuICAgIHRoaXMuX2tleWZyYW1lUHJvcGVydGllc1trZXlmcmFtZVByb3BlcnR5LmlkXSA9IGtleWZyYW1lUHJvcGVydHk7XG5cbiAgICB2YXIgbmFtZSA9IGtleWZyYW1lUHJvcGVydHkubmFtZTtcbiAgICB2YXIgcHJvcGVydHlUcmFja3MgPSB0aGlzLl9wcm9wZXJ0eVRyYWNrcztcblxuICAgIGlmICh0eXBlb2YgdGhpcy5fcHJvcGVydHlUcmFja3NbbmFtZV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBwcm9wZXJ0eVRyYWNrc1tuYW1lXSA9IFtrZXlmcmFtZVByb3BlcnR5XTtcbiAgICAgIGlmICh0aGlzLnJla2FwaSkge1xuICAgICAgICBmaXJlRXZlbnQodGhpcy5yZWthcGksICdhZGRLZXlmcmFtZVByb3BlcnR5VHJhY2snLCBfLCBrZXlmcmFtZVByb3BlcnR5KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcHJvcGVydHlUcmFja3NbbmFtZV0ucHVzaChrZXlmcmFtZVByb3BlcnR5KTtcbiAgICB9XG5cbiAgICBzb3J0UHJvcGVydHlUcmFja3ModGhpcyk7XG5cbiAgICBpZiAodGhpcy5yZWthcGkpIHtcbiAgICAgIGZpcmVFdmVudCh0aGlzLnJla2FwaSwgJ2FkZEtleWZyYW1lUHJvcGVydHknLCBfLCBrZXlmcmFtZVByb3BlcnR5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKiFcbiAgICogQ2FsY3VsYXRlIGFuZCBzZXQgdGhlIGFjdG9yJ3MgcG9zaXRpb24gYXQgYG1pbGxpc2Vjb25kYCBpbiB0aGUgYW5pbWF0aW9uLlxuICAgKiBAbWV0aG9kIF91cGRhdGVTdGF0ZVxuICAgKiBAcGFyYW0ge251bWJlcn0gbWlsbGlzZWNvbmRcbiAgICogQGNoYWluYWJsZVxuICAgKi9cbiAgQWN0b3IucHJvdG90eXBlLl91cGRhdGVTdGF0ZSA9IGZ1bmN0aW9uIChtaWxsaXNlY29uZCkge1xuICAgIHZhciBzdGFydE1zID0gdGhpcy5nZXRTdGFydCgpO1xuICAgIHZhciBlbmRNcyA9IHRoaXMuZ2V0RW5kKCk7XG4gICAgdmFyIGludGVycG9sYXRlZE9iamVjdCA9IHt9O1xuXG4gICAgbWlsbGlzZWNvbmQgPSBNYXRoLm1pbihlbmRNcywgbWlsbGlzZWNvbmQpO1xuXG4gICAgdmFyIGxhdGVzdENhY2hlSWQgPSBnZXRQcm9wZXJ0eUNhY2hlSWRGb3JNaWxsaXNlY29uZCh0aGlzLCBtaWxsaXNlY29uZCk7XG4gICAgdmFyIHByb3BlcnRpZXNUb0ludGVycG9sYXRlID1cbiAgICAgIHRoaXMuX3RpbWVsaW5lUHJvcGVydHlDYWNoZVt0aGlzLl90aW1lbGluZVByb3BlcnR5Q2FjaGVLZXlzW1xuICAgICAgICAgIGxhdGVzdENhY2hlSWRdXTtcblxuICAgIGlmIChzdGFydE1zID09PSBlbmRNcykge1xuXG4gICAgICAvLyBJZiB0aGVyZSBpcyBvbmx5IG9uZSBrZXlmcmFtZSwgdXNlIHRoYXQgZm9yIHRoZSBzdGF0ZSBvZiB0aGUgYWN0b3JcbiAgICAgIF8uZWFjaChwcm9wZXJ0aWVzVG9JbnRlcnBvbGF0ZSwgZnVuY3Rpb24gKGtleWZyYW1lUHJvcGVydHksIHByb3BOYW1lKSB7XG4gICAgICAgIGlmIChrZXlmcmFtZVByb3BlcnR5LnNob3VsZEludm9rZUZvck1pbGxpc2Vjb25kKG1pbGxpc2Vjb25kKSkge1xuICAgICAgICAgIGtleWZyYW1lUHJvcGVydHkuaW52b2tlKCk7XG4gICAgICAgICAga2V5ZnJhbWVQcm9wZXJ0eS5oYXNGaXJlZCA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGludGVycG9sYXRlZE9iamVjdFtwcm9wTmFtZV0gPSBrZXlmcmFtZVByb3BlcnR5LnZhbHVlO1xuICAgICAgfSwgdGhpcyk7XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICBfLmVhY2gocHJvcGVydGllc1RvSW50ZXJwb2xhdGUsIGZ1bmN0aW9uIChrZXlmcmFtZVByb3BlcnR5LCBwcm9wTmFtZSkge1xuICAgICAgICBpZiAodGhpcy5fYmVmb3JlS2V5ZnJhbWVQcm9wZXJ0eUludGVycG9sYXRlICE9PSBub29wKSB7XG4gICAgICAgICAgdGhpcy5fYmVmb3JlS2V5ZnJhbWVQcm9wZXJ0eUludGVycG9sYXRlKGtleWZyYW1lUHJvcGVydHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleWZyYW1lUHJvcGVydHkuc2hvdWxkSW52b2tlRm9yTWlsbGlzZWNvbmQobWlsbGlzZWNvbmQpKSB7XG4gICAgICAgICAga2V5ZnJhbWVQcm9wZXJ0eS5pbnZva2UoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpbnRlcnBvbGF0ZWRPYmplY3RbcHJvcE5hbWVdID1cbiAgICAgICAga2V5ZnJhbWVQcm9wZXJ0eS5nZXRWYWx1ZUF0KG1pbGxpc2Vjb25kKTtcblxuICAgICAgICBpZiAodGhpcy5fYWZ0ZXJLZXlmcmFtZVByb3BlcnR5SW50ZXJwb2xhdGUgIT09IG5vb3ApIHtcbiAgICAgICAgICB0aGlzLl9hZnRlcktleWZyYW1lUHJvcGVydHlJbnRlcnBvbGF0ZShcbiAgICAgICAgICAgIGtleWZyYW1lUHJvcGVydHksIGludGVycG9sYXRlZE9iamVjdCk7XG4gICAgICAgIH1cbiAgICAgIH0sIHRoaXMpO1xuICAgIH1cblxuICAgIHRoaXMuc2V0KGludGVycG9sYXRlZE9iamVjdCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKiFcbiAgICogQG1ldGhvZCBfYmVmb3JlS2V5ZnJhbWVQcm9wZXJ0eUludGVycG9sYXRlXG4gICAqIEBwYXJhbSB7UmVrYXBpLktleWZyYW1lUHJvcGVydHl9IGtleWZyYW1lUHJvcGVydHlcbiAgICogQGFic3RyYWN0XG4gICAqL1xuICBBY3Rvci5wcm90b3R5cGUuX2JlZm9yZUtleWZyYW1lUHJvcGVydHlJbnRlcnBvbGF0ZSA9IG5vb3A7XG5cbiAgLyohXG4gICAqIEBtZXRob2QgX2FmdGVyS2V5ZnJhbWVQcm9wZXJ0eUludGVycG9sYXRlXG4gICAqIEBwYXJhbSB7UmVrYXBpLktleWZyYW1lUHJvcGVydHl9IGtleWZyYW1lUHJvcGVydHlcbiAgICogQHBhcmFtIHtPYmplY3R9IGludGVycG9sYXRlZE9iamVjdFxuICAgKiBAYWJzdHJhY3RcbiAgICovXG4gIEFjdG9yLnByb3RvdHlwZS5fYWZ0ZXJLZXlmcmFtZVByb3BlcnR5SW50ZXJwb2xhdGUgPSBub29wO1xuXG4gIC8qKlxuICAgKiBfX1tFeGFtcGxlXSguLi8uLi8uLi8uLi9kb2NzL2V4YW1wbGVzL2FjdG9yX2V4cG9ydF90aW1lbGluZS5odG1sKV9fXG4gICAqIEBtZXRob2QgZXhwb3J0VGltZWxpbmVcbiAgICogQHJldHVybiB7T2JqZWN0fSBBIHNlcmlhbGl6YWJsZSBPYmplY3Qgb2YgdGhpcyBhY3RvcidzIHRpbWVsaW5lIHByb3BlcnR5XG4gICAqIHRyYWNrcyBhbmQgYHt7I2Nyb3NzTGluayBcIlJla2FwaS5LZXlmcmFtZVByb3BlcnR5XCJ9fXt7L2Nyb3NzTGlua319YHMuXG4gICAqL1xuICBBY3Rvci5wcm90b3R5cGUuZXhwb3J0VGltZWxpbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4cG9ydERhdGEgPSB7XG4gICAgICAnc3RhcnQnOiB0aGlzLmdldFN0YXJ0KClcbiAgICAgICwnZW5kJzogdGhpcy5nZXRFbmQoKVxuICAgICAgLCd0cmFja05hbWVzJzogdGhpcy5nZXRUcmFja05hbWVzKClcbiAgICAgICwncHJvcGVydHlUcmFja3MnOiB7fVxuICAgIH07XG5cbiAgICBfLmVhY2godGhpcy5fcHJvcGVydHlUcmFja3MsIGZ1bmN0aW9uIChwcm9wZXJ0eVRyYWNrLCB0cmFja05hbWUpIHtcbiAgICAgIHZhciB0cmFja0FsaWFzID0gZXhwb3J0RGF0YS5wcm9wZXJ0eVRyYWNrc1t0cmFja05hbWVdID0gW107XG4gICAgICBfLmVhY2gocHJvcGVydHlUcmFjaywgZnVuY3Rpb24gKGtleWZyYW1lUHJvcGVydHkpIHtcbiAgICAgICAgdHJhY2tBbGlhcy5wdXNoKGtleWZyYW1lUHJvcGVydHkuZXhwb3J0UHJvcGVydHlEYXRhKCkpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZXhwb3J0RGF0YTtcbiAgfTtcblxuICAvKipcbiAgICogSW1wb3J0IGFuIE9iamVjdCB0byBhdWdtZW50IHRoaXMgYWN0b3IncyBzdGF0ZS4gIFRoaXMgZG9lcyBub3QgcmVtb3ZlXG4gICAqIGtleWZyYW1lIHByb3BlcnRpZXMgYmVmb3JlIGltcG9ydGluZyBuZXcgb25lcy5cbiAgICpcbiAgICogQG1ldGhvZCBpbXBvcnRUaW1lbGluZVxuICAgKiBAcGFyYW0ge09iamVjdH0gYWN0b3JEYXRhIEFueSBvYmplY3QgdGhhdCBoYXMgdGhlIHNhbWUgZGF0YSBmb3JtYXQgYXMgdGhlXG4gICAqIG9iamVjdCBnZW5lcmF0ZWQgZnJvbSBge3sjY3Jvc3NMaW5rXG4gICAqIFwiUmVrYXBpLkFjdG9yL2V4cG9ydFRpbWVsaW5lOm1ldGhvZFwifX17ey9jcm9zc0xpbmt9fWAuXG4gICAqL1xuICBBY3Rvci5wcm90b3R5cGUuaW1wb3J0VGltZWxpbmUgPSBmdW5jdGlvbiAoYWN0b3JEYXRhKSB7XG4gICAgXy5lYWNoKGFjdG9yRGF0YS5wcm9wZXJ0eVRyYWNrcywgZnVuY3Rpb24gKHByb3BlcnR5VHJhY2spIHtcbiAgICAgIF8uZWFjaChwcm9wZXJ0eVRyYWNrLCBmdW5jdGlvbiAocHJvcGVydHkpIHtcbiAgICAgICAgdmFyIG9iaiA9IHt9O1xuICAgICAgICBvYmpbcHJvcGVydHkubmFtZV0gPSBwcm9wZXJ0eS52YWx1ZTtcbiAgICAgICAgdGhpcy5rZXlmcmFtZShwcm9wZXJ0eS5taWxsaXNlY29uZCwgb2JqLCBwcm9wZXJ0eS5lYXNpbmcpO1xuICAgICAgfSwgdGhpcyk7XG4gICAgfSwgdGhpcyk7XG4gIH07XG5cbn0pO1xuXG5yZWthcGlNb2R1bGVzLnB1c2goZnVuY3Rpb24gKGNvbnRleHQpIHtcblxuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIERFRkFVTFRfRUFTSU5HID0gJ2xpbmVhcic7XG4gIHZhciBSZWthcGkgPSBjb250ZXh0LlJla2FwaTtcbiAgdmFyIFR3ZWVuYWJsZSA9IFJla2FwaS5Ud2VlbmFibGU7XG4gIHZhciBfID0gUmVrYXBpLl87XG4gIHZhciBpbnRlcnBvbGF0ZSA9IFR3ZWVuYWJsZS5pbnRlcnBvbGF0ZTtcblxuICAvKipcbiAgICogUmVwcmVzZW50cyBhbiBpbmRpdmlkdWFsIGNvbXBvbmVudCBvZiBhbiBhY3RvcidzIGtleWZyYW1lIHN0YXRlLiAgSW4gbW9zdFxuICAgKiBjYXNlcyB5b3Ugd29uJ3QgbmVlZCB0byBkZWFsIHdpdGggdGhpcyBvYmplY3QgZGlyZWN0bHksIGFzIHRoZVxuICAgKiBge3sjY3Jvc3NMaW5rIFwiUmVrYXBpLkFjdG9yXCJ9fXt7L2Nyb3NzTGlua319YCBBUElzIGFic3RyYWN0IGEgbG90IG9mIHdoYXRcbiAgICogdGhpcyBPYmplY3QgZG9lcyBhd2F5IGZvciB5b3UuXG4gICAqIEBjbGFzcyBSZWthcGkuS2V5ZnJhbWVQcm9wZXJ0eVxuICAgKiBAcGFyYW0ge251bWJlcn0gbWlsbGlzZWNvbmQgV2hlcmUgb24gdGhlIGFuaW1hdGlvbiB0aW1lbGluZSB0aGlzXG4gICAqIGBSZWthcGkuS2V5ZnJhbWVQcm9wZXJ0eWAgaXMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBwcm9wZXJ0eSdzIG5hbWUsIHN1Y2ggYXMgYFwieFwiYCBvciBgXCJvcGFjaXR5XCJgLlxuICAgKiBAcGFyYW0ge251bWJlcnxzdHJpbmd8RnVuY3Rpb259IHZhbHVlIFRoZSB2YWx1ZSB0aGF0IHRoaXNcbiAgICogYFJla2FwaS5LZXlmcmFtZVByb3BlcnR5YCByZXByZXNlbnRzLlxuICAgKiBAcGFyYW0ge3N0cmluZz19IG9wdF9lYXNpbmcgVGhlIGVhc2luZyBjdXJ2ZSBhdCB3aGljaCB0aGlzXG4gICAqIGBSZWthcGkuS2V5ZnJhbWVQcm9wZXJ0eWAgc2hvdWxkIGJlIGFuaW1hdGVkIHRvLiAgRGVmYXVsdHMgdG8gYFwibGluZWFyXCJgLlxuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG4gIFJla2FwaS5LZXlmcmFtZVByb3BlcnR5ID0gZnVuY3Rpb24gKG1pbGxpc2Vjb25kLCBuYW1lLCB2YWx1ZSwgb3B0X2Vhc2luZykge1xuICAgIHRoaXMuaWQgPSBfLnVuaXF1ZUlkKCdrZXlmcmFtZVByb3BlcnR5XycpO1xuICAgIHRoaXMubWlsbGlzZWNvbmQgPSBtaWxsaXNlY29uZDtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmhhc0ZpcmVkID0gbnVsbDtcbiAgICB0aGlzLmVhc2luZyA9IG9wdF9lYXNpbmcgfHwgREVGQVVMVF9FQVNJTkc7XG4gICAgdGhpcy5uZXh0UHJvcGVydHkgPSBudWxsO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIHZhciBLZXlmcmFtZVByb3BlcnR5ID0gUmVrYXBpLktleWZyYW1lUHJvcGVydHk7XG5cbiAgLyoqXG4gICAqIE1vZGlmeSB0aGlzIGB7eyNjcm9zc0xpbmsgXCJSZWthcGkuS2V5ZnJhbWVQcm9wZXJ0eVwifX17ey9jcm9zc0xpbmt9fWAuXG4gICAqIEBtZXRob2QgbW9kaWZ5V2l0aFxuICAgKiBAcGFyYW0ge09iamVjdH0gbmV3UHJvcGVydGllcyBWYWxpZCB2YWx1ZXMgY29ycmVzcG9uZCB0byBge3sjY3Jvc3NMaW5rXG4gICAqIFwiUmVrYXBpLktleWZyYW1lUHJvcGVydHlcIn19e3svY3Jvc3NMaW5rfX1gJ3MgY29uc3RydWN0b3IgcGFyYW1ldGVyczpcbiAgICogICAtIF9fbWlsbGlzZWNvbmRfXyAoX251bWJlcl8pXG4gICAqICAgLSBfX25hbWVfXyAoX3N0cmluZ18pXG4gICAqICAgLSBfX3ZhbHVlX18gKF9udW1iZXJ8c3RyaW5nXylcbiAgICogICAtIF9fZWFzaW5nX18gKF9zdHJpbmdfKVxuICAgKi9cbiAgS2V5ZnJhbWVQcm9wZXJ0eS5wcm90b3R5cGUubW9kaWZ5V2l0aCA9IGZ1bmN0aW9uIChuZXdQcm9wZXJ0aWVzKSB7XG4gICAgdmFyIG1vZGlmaWVkUHJvcGVydGllcyA9IHt9O1xuXG4gICAgXy5lYWNoKFsnbWlsbGlzZWNvbmQnLCAnZWFzaW5nJywgJ3ZhbHVlJ10sIGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgIG1vZGlmaWVkUHJvcGVydGllc1tzdHJdID0gdHlwZW9mKG5ld1Byb3BlcnRpZXNbc3RyXSkgPT09ICd1bmRlZmluZWQnID9cbiAgICAgICAgICB0aGlzW3N0cl0gOiBuZXdQcm9wZXJ0aWVzW3N0cl07XG4gICAgfSwgdGhpcyk7XG5cbiAgICBfLmV4dGVuZCh0aGlzLCBtb2RpZmllZFByb3BlcnRpZXMpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGUgdGhlIG1pZHBvaW50IGJldHdlZW4gdGhpcyBge3sjY3Jvc3NMaW5rXG4gICAqIFwiUmVrYXBpLktleWZyYW1lUHJvcGVydHlcIn19e3svY3Jvc3NMaW5rfX1gIGFuZCB0aGUgbmV4dCBge3sjY3Jvc3NMaW5rXG4gICAqIFwiUmVrYXBpLktleWZyYW1lUHJvcGVydHlcIn19e3svY3Jvc3NMaW5rfX1gIGluIGEgYHt7I2Nyb3NzTGlua1xuICAgKiBcIlJla2FwaS5BY3RvclwifX17ey9jcm9zc0xpbmt9fWAncyBwcm9wZXJ0eSB0cmFjay5cbiAgICpcbiAgICogSW4ganVzdCBhYm91dCBhbGwgY2FzZXMsIGBtaWxsaXNlY29uZGAgc2hvdWxkIGJlIGJldHdlZW4gdGhpc1xuICAgKiBge3sjY3Jvc3NMaW5rIFwiUmVrYXBpLktleWZyYW1lUHJvcGVydHlcIn19e3svY3Jvc3NMaW5rfX1gJ3MgYG1pbGxpc2Vjb25kYFxuICAgKiBhbmQgdGhlIGBtaWxsaXNlY29uZGAgb2YgdGhlIGB7eyNjcm9zc0xpbmtcbiAgICogXCJSZWthcGkuS2V5ZnJhbWVQcm9wZXJ0eVwifX17ey9jcm9zc0xpbmt9fWAgdGhhdCBmb2xsb3dzIGl0IGluIHRoZVxuICAgKiBhbmltYXRpb24gdGltZWxpbmUsIGJ1dCBpdCBpcyB2YWxpZCB0byBzcGVjaWZ5IGEgdmFsdWUgb3V0c2lkZSBvZiB0aGlzXG4gICAqIHJhbmdlLlxuICAgKiBAbWV0aG9kIGdldFZhbHVlQXRcbiAgICogQHBhcmFtIHtudW1iZXJ9IG1pbGxpc2Vjb25kIFRoZSBtaWxsaXNlY29uZCBpbiB0aGUgYW5pbWF0aW9uIHRpbWVsaW5lIHRvXG4gICAqIGNvbXB1dGUgdGhlIHN0YXRlIHZhbHVlIGZvci5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgS2V5ZnJhbWVQcm9wZXJ0eS5wcm90b3R5cGUuZ2V0VmFsdWVBdCA9IGZ1bmN0aW9uIChtaWxsaXNlY29uZCkge1xuICAgIHZhciBmcm9tT2JqID0ge307XG4gICAgdmFyIHRvT2JqID0ge307XG4gICAgdmFyIHZhbHVlO1xuICAgIHZhciBuZXh0UHJvcGVydHkgPSB0aGlzLm5leHRQcm9wZXJ0eTtcbiAgICB2YXIgY29ycmVjdGVkTWlsbGlzZWNvbmQgPSBNYXRoLm1heChtaWxsaXNlY29uZCwgdGhpcy5taWxsaXNlY29uZCk7XG5cbiAgICBpZiAobmV4dFByb3BlcnR5KSB7XG4gICAgICBjb3JyZWN0ZWRNaWxsaXNlY29uZCA9XG4gICAgICBNYXRoLm1pbihjb3JyZWN0ZWRNaWxsaXNlY29uZCwgbmV4dFByb3BlcnR5Lm1pbGxpc2Vjb25kKTtcblxuICAgICAgZnJvbU9ialt0aGlzLm5hbWVdID0gdGhpcy52YWx1ZTtcbiAgICAgIHRvT2JqW3RoaXMubmFtZV0gPSBuZXh0UHJvcGVydHkudmFsdWU7XG5cbiAgICAgIHZhciBkZWx0YSA9IG5leHRQcm9wZXJ0eS5taWxsaXNlY29uZCAtIHRoaXMubWlsbGlzZWNvbmQ7XG4gICAgICB2YXIgaW50ZXJwb2xhdGVkUG9zaXRpb24gPVxuICAgICAgKGNvcnJlY3RlZE1pbGxpc2Vjb25kIC0gdGhpcy5taWxsaXNlY29uZCkgLyBkZWx0YTtcblxuICAgICAgdmFsdWUgPSBpbnRlcnBvbGF0ZShmcm9tT2JqLCB0b09iaiwgaW50ZXJwb2xhdGVkUG9zaXRpb24sXG4gICAgICAgICAgbmV4dFByb3BlcnR5LmVhc2luZylbdGhpcy5uYW1lXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcblxuICAvKipcbiAgICogQ3JlYXRlIHRoZSByZWZlcmVuY2UgdG8gdGhlIGB7eyNjcm9zc0xpbmtcbiAgICogXCJSZWthcGkuS2V5ZnJhbWVQcm9wZXJ0eVwifX17ey9jcm9zc0xpbmt9fWAgdGhhdCBmb2xsb3dzIHRoaXMgb25lIG9uIGFcbiAgICogYHt7I2Nyb3NzTGluayBcIlJla2FwaS5BY3RvclwifX17ey9jcm9zc0xpbmt9fWAncyBwcm9wZXJ0eSB0cmFjay4gIFByb3BlcnR5XG4gICAqIHRyYWNrcyBhcmUganVzdCBsaW5rZWQgbGlzdHMgb2YgYHt7I2Nyb3NzTGlua1xuICAgKiBcIlJla2FwaS5LZXlmcmFtZVByb3BlcnR5XCJ9fXt7L2Nyb3NzTGlua319YHMuXG4gICAqIEBtZXRob2QgbGlua1RvTmV4dFxuICAgKiBAcGFyYW0ge1Jla2FwaS5LZXlmcmFtZVByb3BlcnR5fSBuZXh0UHJvcGVydHkgVGhlIGB7eyNjcm9zc0xpbmtcbiAgICogXCJSZWthcGkuS2V5ZnJhbWVQcm9wZXJ0eVwifX17ey9jcm9zc0xpbmt9fWAgdGhhdCBzaG91bGQgaW1tZWRpYXRlbHkgZm9sbG93XG4gICAqIHRoaXMgb25lIG9uIHRoZSBhbmltYXRpb24gdGltZWxpbmUuXG4gICAqL1xuICBLZXlmcmFtZVByb3BlcnR5LnByb3RvdHlwZS5saW5rVG9OZXh0ID0gZnVuY3Rpb24gKG5leHRQcm9wZXJ0eSkge1xuICAgIHRoaXMubmV4dFByb3BlcnR5ID0gbmV4dFByb3BlcnR5IHx8IG51bGw7XG4gIH07XG5cbiAgLyoqXG4gICAqIERpc2Fzc29jaWF0ZXMgdGhpcyBge3sjY3Jvc3NMaW5rXG4gICAqIFwiUmVrYXBpLktleWZyYW1lUHJvcGVydHlcIn19e3svY3Jvc3NMaW5rfX1gIGZyb20gaXRzIGB7eyNjcm9zc0xpbmtcbiAgICogXCJSZWthcGkuQWN0b3JcIn19e3svY3Jvc3NMaW5rfX1gLiAgVGhpcyBpcyBjYWxsZWQgYnkgdmFyaW91cyBge3sjY3Jvc3NMaW5rXG4gICAqIFwiUmVrYXBpLkFjdG9yXCJ9fXt7L2Nyb3NzTGlua319YCBtZXRob2RzIGFuZCB0cmlnZ2VycyB0aGUgYHt7I2Nyb3NzTGlua1xuICAgKiBcIlJla2FwaS9vbjptZXRob2RcIn19cmVtb3ZlS2V5ZnJhbWVQcm9wZXJ0eXt7L2Nyb3NzTGlua319YCBldmVudCBvbiB0aGVcbiAgICogYXNzb2NpYXRlZCBge3sjY3Jvc3NMaW5rIFwiUmVrYXBpXCJ9fXt7L2Nyb3NzTGlua319YCBpbnN0YW5jZS5cbiAgICogQG1ldGhvZCBkZXRhY2hcbiAgICogQGNoYWluYWJsZVxuICAgKi9cbiAgS2V5ZnJhbWVQcm9wZXJ0eS5wcm90b3R5cGUuZGV0YWNoID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBhY3RvciA9IHRoaXMuYWN0b3I7XG4gICAgaWYgKGFjdG9yKSB7XG4gICAgICBpZiAoYWN0b3IucmVrYXBpKSB7XG4gICAgICAgIGZpcmVFdmVudChhY3Rvci5yZWthcGksICdyZW1vdmVLZXlmcmFtZVByb3BlcnR5JywgXywgdGhpcyk7XG4gICAgICAgIGRlbGV0ZSBhY3Rvci5fa2V5ZnJhbWVQcm9wZXJ0aWVzW3RoaXMuaWRdO1xuICAgICAgICB0aGlzLmFjdG9yID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogX19bRXhhbXBsZV0oLi4vLi4vLi4vLi4vZG9jcy9leGFtcGxlcy9rZXlwcm9wX2V4cG9ydF9wcm9wZXJ0eV9kYXRhLmh0bWwpX19cbiAgICogQG1ldGhvZCBleHBvcnRQcm9wZXJ0eURhdGFcbiAgICogQHJldHVybiB7T2JqZWN0fSBBIHNlcmlhbGl6YWJsZSBPYmplY3QgcmVwcmVzZW50YXRpb24gb2YgdGhpc1xuICAgKiBge3sjY3Jvc3NMaW5rIFwiUmVrYXBpLktleWZyYW1lUHJvcGVydHlcIn19e3svY3Jvc3NMaW5rfX1gLlxuICAgKi9cbiAgS2V5ZnJhbWVQcm9wZXJ0eS5wcm90b3R5cGUuZXhwb3J0UHJvcGVydHlEYXRhID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICAnbWlsbGlzZWNvbmQnOiB0aGlzLm1pbGxpc2Vjb25kXG4gICAgICAsJ25hbWUnOiB0aGlzLm5hbWVcbiAgICAgICwndmFsdWUnOiB0aGlzLnZhbHVlXG4gICAgICAsJ2Vhc2luZyc6IHRoaXMuZWFzaW5nXG4gICAgfTtcbiAgfTtcblxuICAvKiFcbiAgICogV2hldGhlciBvciBub3QgdGhpcyBpcyBhIGZ1bmN0aW9uIGtleWZyYW1lIGFuZCBzaG91bGQgYmUgaW52b2tlZCBmb3IgdGhlXG4gICAqIGN1cnJlbnQgZnJhbWUuICBIZWxwZXIgbWV0aG9kIGZvciBSZWthcGkuQWN0b3IuXG4gICAqIEBtZXRob2Qgc2hvdWxkSW52b2tlRm9yTWlsbGlzZWNvbmRcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIEtleWZyYW1lUHJvcGVydHkucHJvdG90eXBlLnNob3VsZEludm9rZUZvck1pbGxpc2Vjb25kID1cbiAgICAgIGZ1bmN0aW9uIChtaWxsaXNlY29uZCkge1xuICAgIHJldHVybiAobWlsbGlzZWNvbmQgPj0gdGhpcy5taWxsaXNlY29uZCAmJlxuICAgICAgdGhpcy5uYW1lID09PSAnZnVuY3Rpb24nICYmXG4gICAgICAhdGhpcy5oYXNGaXJlZCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEFzc3VtaW5nIHRoaXMgaXMgYSBmdW5jdGlvbiBrZXlmcmFtZSwgY2FsbCB0aGUgZnVuY3Rpb24uXG4gICAqIEBtZXRob2QgaW52b2tlXG4gICAqIEByZXR1cm4geyp9IFdoYXRldmVyIHZhbHVlIGlzIHJldHVybmVkIGZyb20gdGhlIGtleWZyYW1lIGZ1bmN0aW9uIHRoYXQgd2FzXG4gICAqIHNldCBmb3IgdGhpcyBge3sjY3Jvc3NMaW5rIFwiUmVrYXBpLktleWZyYW1lUHJvcGVydHlcIn19e3svY3Jvc3NMaW5rfX1gLlxuICAgKi9cbiAgS2V5ZnJhbWVQcm9wZXJ0eS5wcm90b3R5cGUuaW52b2tlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBkcmlmdCA9IHRoaXMuYWN0b3IucmVrYXBpLl9sb29wUG9zaXRpb24gLSB0aGlzLm1pbGxpc2Vjb25kO1xuICAgIHZhciByZXR1cm5WYWx1ZSA9IHRoaXMudmFsdWUuY2FsbCh0aGlzLmFjdG9yLCBkcmlmdCk7XG4gICAgdGhpcy5oYXNGaXJlZCA9IHRydWU7XG4gICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICB9O1xuXG59KTtcblxucmVrYXBpTW9kdWxlcy5wdXNoKGZ1bmN0aW9uIChjb250ZXh0KSB7XG5cbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBSZWthcGkgPSBjb250ZXh0LlJla2FwaTtcbiAgdmFyIF8gPSBSZWthcGkuXztcblxuICAvLyBQUklWQVRFIFVUSUxJVFkgRlVOQ1RJT05TXG4gIC8vXG5cbiAgLyohXG4gICAqIEdldHMgKGFuZCBvcHRpb25hbGx5IHNldHMpIGhlaWdodCBvciB3aWR0aCBvbiBhIGNhbnZhcy5cbiAgICogQHBhcmFtIHtIVE1MQ2FudmFzfSBjYW52YXNcbiAgICogQHBhcmFtIHtzdHJpbmd9IGhlaWdodE9yV2lkdGggVGhlIGRpbWVuc2lvbiAoZWl0aGVyIFwiaGVpZ2h0XCIgb3IgXCJ3aWR0aFwiKVxuICAgKiB0byBnZXQgb3Igc2V0LlxuICAgKiBAcGFyYW0ge251bWJlcj19IG9wdF9uZXdTaXplIFRoZSBuZXcgdmFsdWUgdG8gc2V0IGZvciBgZGltZW5zaW9uYC5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZnVuY3Rpb24gZGltZW5zaW9uIChjYW52YXMsIGhlaWdodE9yV2lkdGgsIG9wdF9uZXdTaXplKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRfbmV3U2l6ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNhbnZhc1toZWlnaHRPcldpZHRoXSA9IG9wdF9uZXdTaXplO1xuICAgICAgY2FudmFzLnN0eWxlW2hlaWdodE9yV2lkdGhdID0gb3B0X25ld1NpemUgKyAncHgnO1xuICAgIH1cblxuICAgIHJldHVybiBjYW52YXNbaGVpZ2h0T3JXaWR0aF07XG4gIH1cblxuICAvKiFcbiAgICogVGFrZXMgY2FyZSBvZiBzb21lIHByZS1yZW5kZXJpbmcgdGFza3MgZm9yIGNhbnZhcyBhbmltYXRpb25zLlxuICAgKiBAcGFyYW0ge1Jla2FwaS5DYW52YXNSZW5kZXJlcn0gY2FudmFzUmVuZGVyZXJcbiAgICovXG4gIGZ1bmN0aW9uIGJlZm9yZVJlbmRlciAoY2FudmFzUmVuZGVyZXIpIHtcbiAgICBjYW52YXNSZW5kZXJlci5jbGVhcigpO1xuICB9XG5cbiAgLyohXG4gICAqIFJlbmRlciBhbGwgdGhlIGBBY3RvcmBzIGF0IHdoYXRldmVyIHBvc2l0aW9uIHRoZXkgYXJlIGN1cnJlbnRseSBpbi5cbiAgICogQHBhcmFtIHtSZWthcGl9XG4gICAqIEBwYXJhbSB7UmVrYXBpLkNhbnZhc1JlbmRlcmVyfSBjYW52YXNSZW5kZXJlclxuICAgKiBAcmV0dXJuIHtSZWthcGl9XG4gICAqL1xuICBmdW5jdGlvbiByZW5kZXIgKHJla2FwaSwgY2FudmFzUmVuZGVyZXIpIHtcbiAgICBmaXJlRXZlbnQocmVrYXBpLCAnYmVmb3JlUmVuZGVyJywgXyk7XG4gICAgdmFyIHJlbmRlck9yZGVyU29ydGVyID0gY2FudmFzUmVuZGVyZXIuX3JlbmRlck9yZGVyU29ydGVyO1xuICAgIHZhciBsZW4gPSBjYW52YXNSZW5kZXJlci5fcmVuZGVyT3JkZXIubGVuZ3RoO1xuICAgIHZhciByZW5kZXJPcmRlcjtcblxuICAgIGlmIChyZW5kZXJPcmRlclNvcnRlcikge1xuICAgICAgdmFyIG9yZGVyZWRBY3RvcnMgPVxuICAgICAgICAgIF8uc29ydEJ5KGNhbnZhc1JlbmRlcmVyLl9jYW52YXNBY3RvcnMsIHJlbmRlck9yZGVyU29ydGVyKTtcbiAgICAgIHJlbmRlck9yZGVyID0gXy5wbHVjayhvcmRlcmVkQWN0b3JzLCAnaWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVuZGVyT3JkZXIgPSBjYW52YXNSZW5kZXJlci5fcmVuZGVyT3JkZXI7XG4gICAgfVxuXG4gICAgdmFyIGN1cnJlbnRBY3RvcjtcbiAgICB2YXIgY2FudmFzQWN0b3JzID0gY2FudmFzUmVuZGVyZXIuX2NhbnZhc0FjdG9ycztcblxuICAgIHZhciBpO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgY3VycmVudEFjdG9yID0gY2FudmFzQWN0b3JzW3JlbmRlck9yZGVyW2ldXTtcbiAgICAgIGN1cnJlbnRBY3Rvci5yZW5kZXIoY3VycmVudEFjdG9yLmNvbnRleHQsIGN1cnJlbnRBY3Rvci5nZXQoKSk7XG4gICAgfVxuICAgIGZpcmVFdmVudChyZWthcGksICdhZnRlclJlbmRlcicsIF8pO1xuXG4gICAgcmV0dXJuIHJla2FwaTtcbiAgfVxuXG4gIC8qIVxuICAgKiBAcGFyYW0ge1Jla2FwaS5BY3Rvcn0gYWN0b3JcbiAgICogQHBhcmFtIHtSZWthcGkuQ2FudmFzUmVuZGVyZXJ9IGNhbnZhc1JlbmRlcmVyXG4gICAqL1xuICBmdW5jdGlvbiBhZGRBY3RvciAoYWN0b3IsIGNhbnZhc1JlbmRlcmVyKSB7XG4gICAgY2FudmFzUmVuZGVyZXIuX3JlbmRlck9yZGVyLnB1c2goYWN0b3IuaWQpO1xuICAgIGNhbnZhc1JlbmRlcmVyLl9jYW52YXNBY3RvcnNbYWN0b3IuaWRdID0gYWN0b3I7XG4gIH1cblxuICAvKiFcbiAgICogQHBhcmFtIHtSZWthcGkuQWN0b3J9IGFjdG9yXG4gICAqIEBwYXJhbSB7UmVrYXBpLkNhbnZhc1JlbmRlcmVyfSBjYW52YXNSZW5kZXJlclxuICAgKi9cbiAgZnVuY3Rpb24gcmVtb3ZlQWN0b3IgKGFjdG9yLCBjYW52YXNSZW5kZXJlcikge1xuICAgIGNhbnZhc1JlbmRlcmVyLl9yZW5kZXJPcmRlciA9IF8ud2l0aG91dChjYW52YXNSZW5kZXJlci5fcmVuZGVyT3JkZXIsIGFjdG9yLmlkKTtcbiAgICBkZWxldGUgY2FudmFzUmVuZGVyZXIuX2NhbnZhc0FjdG9yc1thY3Rvci5pZF07XG4gIH1cblxuICAvKiFcbiAgICogU2V0cyB1cCBhbiBpbnN0YW5jZSBvZiBDYW52YXNSZW5kZXJlciBhbmQgYXR0YWNoZXMgaXQgdG8gYSBgUmVrYXBpYFxuICAgKiBpbnN0YW5jZS4gIEFsc28gYXVnbWVudHMgdGhlIFJla2FwaSBpbnN0YW5jZSB3aXRoIGNhbnZhcy1zcGVjaWZpY1xuICAgKiBmdW5jdGlvbnMuXG4gICAqIEBwYXJhbSB7UmVrYXBpfSByZWthcGlcbiAgICovXG4gIFJla2FwaS5fcmVuZGVyZXJJbml0SG9vay5jYW52YXMgPSBmdW5jdGlvbiAocmVrYXBpKSB7XG4gICAgaWYgKHR5cGVvZiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgPT09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgICEocmVrYXBpLmNvbnRleHQgaW5zdGFuY2VvZiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmVrYXBpLnJlbmRlcmVyID0gbmV3IENhbnZhc1JlbmRlcmVyKHJla2FwaSk7XG4gIH07XG5cbiAgLy8gQ0FOVkFTIFJFTkRFUkVSIE9CSkVDVFxuICAvL1xuXG4gIC8qKlxuICAgKiBZb3UgY2FuIHVzZSBSZWthcGkgdG8gcmVuZGVyIGFuaW1hdGlvbnMgdG8gYW4gSFRNTDUgYDxjYW52YXM+YC4gIFRvIGRvIHNvLFxuICAgKiBqdXN0IHByb3ZpZGUgYVxuICAgKiBbYENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRGBdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpXG4gICAqIGluc3RhbmNlIHRvIHRoZSBge3sjY3Jvc3NMaW5rIFwiUmVrYXBpXCJ9fXt7L2Nyb3NzTGlua319YCBjb25zdHJ1Y3RvciB0b1xuICAgKiBhdXRvbWF0aWNhbGx5IHNldCB1cCB0aGUgcmVuZGVyZXI6XG4gICAqXG4gICAqICAgICB2YXIgY29udGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpLmdldENvbnRleHQoJzJkJyk7XG4gICAqICAgICB2YXIgcmVrYXBpID0gbmV3IFJla2FwaShjb250ZXh0KTtcbiAgICogICAgIHJla2FwaS5yZW5kZXJlciBpbnN0YW5jZW9mIFJla2FwaS5DYW52YXNSZW5kZXJlcjsgLy8gdHJ1ZVxuICAgKlxuICAgKiBgUmVrYXBpLkNhbnZhc1JlbmRlcmVyYCBhZGRzIHNvbWUgY2FudmFzLXNwZWNpZmljIGV2ZW50cyB5b3UgY2FuIGJpbmQgdG9cbiAgICogd2l0aCBge3sjY3Jvc3NMaW5rIFwiUmVrYXBpL29uOm1ldGhvZFwifX17ey9jcm9zc0xpbmt9fWAgKGFuZCB1bmJpbmQgZnJvbVxuICAgKiB3aXRoIGB7eyNjcm9zc0xpbmsgXCJSZWthcGkvb2ZmOm1ldGhvZFwifX17ey9jcm9zc0xpbmt9fWA6XG4gICAqXG4gICAqICAtIF9fYmVmb3JlUmVuZGVyX186IEZpcmVzIGp1c3QgYmVmb3JlIGFuIGFjdG9yIGlzIHJlbmRlcmVkIHRvIHRoZSBjYW52YXMuXG4gICAqICAtIF9fYWZ0ZXJSZW5kZXJfXzogRmlyZXMganVzdCBhZnRlciBhbiBhY3RvciBpcyByZW5kZXJlZCB0byB0aGUgY2FudmFzLlxuICAgKlxuICAgKiBfX05vdGVfXzogYFJla2FwaS5DYW52YXNSZW5kZXJlcmAgaXMgYWRkZWQgdG8gdGhlIGB7eyNjcm9zc0xpbmtcbiAgICogXCJSZWthcGlcIn19e3svY3Jvc3NMaW5rfX1gIGluc3RhbmNlIGF1dG9tYXRpY2FsbHkgYXMgYHRoaXMucmVuZGVyZXJgLCB0aGVyZVxuICAgKiBpcyBubyByZWFzb24gdG8gY2FsbCB0aGUgY29uc3RydWN0b3IgeW91cnNlbGYgaW4gbW9zdCBjYXNlcy5cbiAgICpcbiAgICogIyMgTXVsdGlwbGUgcmVuZGVyZXJzXG4gICAqXG4gICAqIFJla2FwaSBzdXBwb3J0cyBtdWx0aXBsZSByZW5kZXJlcnMgcGVyIGluc3RhbmNlLiAgRG8gZG8gdGhpcywgeW91IG11c3Qgbm90XG4gICAqIHByb3ZpZGUgYVxuICAgKiBbYENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRGBdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpXG4gICAqIHRvIHRoZSBge3sjY3Jvc3NMaW5rIFwiUmVrYXBpXCJ9fXt7L2Nyb3NzTGlua319YCBjb25zdHJ1Y3RvciwgeW91IG11c3RcbiAgICogaW5zdGVhZCBpbml0aWFsaXplIHRoZSByZW5kZXJlciB5b3Vyc2VsZi4gIFRoZVxuICAgKiBbYENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRGBdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpXG4gICAqIHRoYXQgd291bGQgaGF2ZSBiZWVuIHByb3ZpZGVkIHRvIHRoZSBge3sjY3Jvc3NMaW5rXG4gICAqIFwiUmVrYXBpXCJ9fXt7L2Nyb3NzTGlua319YCBjb25zdHJ1Y3RvciBpbnN0ZWFkIGlzIHByb3ZpZGVkIGFzIHRoZSBzZWNvbmRcbiAgICogcGFyYW1ldGVyIHRvIGBSZWthcGkuQ2FudmFzUmVuZGVyZXJgOlxuICAgKlxuICAgKlxuICAgKiAgICAgdmFyIGNhbnZhc0NvbnRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYW52YXMnKS5nZXRDb250ZXh0KCcyZCcpO1xuICAgKlxuICAgKiAgICAgLy8gTm8gY29udGV4dCBnZXRzIHBhc3NlZCB0byB0aGUgUmVrYXBpIGNvbnN0cnVjdG9yXG4gICAqICAgICB2YXIgcmVrYXBpID0gbmV3IFJla2FwaSgpO1xuICAgKlxuICAgKiAgICAgLy8gSW5pdGlhbGl6ZSBSZWthcGkuQ2FudmFzUmVuZGVyZXIgbWFudWFsbHkgYW5kIGdpdmUgaXQgYVxuICAgKiAgICAgLy8gQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELiAgWW91IGNhbiBuYW1lIGl0IGFueXRoaW5nIHlvdSB3YW50IG9uIHRoZVxuICAgKiAgICAgLy8gUmVrYXBpIGluc3RhbmNlLlxuICAgKiAgICAgcmVrYXBpLmNhbnZhc1JlbmRlcmVyID1cbiAgICogICAgICAgICBuZXcgUmVrYXBpLkNhbnZhc1JlbmRlcmVyKHJla2FwaSwgY2FudmFzQ29udGV4dCk7XG4gICAqIEBjbGFzcyBSZWthcGkuQ2FudmFzUmVuZGVyZXJcbiAgICogQHBhcmFtIHtSZWthcGl9IHJla2FwaVxuICAgKiBAcGFyYW0ge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRD19IG9wdF9jb250ZXh0XG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKi9cbiAgUmVrYXBpLkNhbnZhc1JlbmRlcmVyID0gZnVuY3Rpb24gKHJla2FwaSwgb3B0X2NvbnRleHQpIHtcbiAgICB0aGlzLnJla2FwaSA9IHJla2FwaTtcbiAgICB0aGlzLmNhbnZhc0NvbnRleHQgPSBvcHRfY29udGV4dCB8fCByZWthcGkuY29udGV4dDtcbiAgICB0aGlzLl9yZW5kZXJPcmRlciA9IFtdO1xuICAgIHRoaXMuX3JlbmRlck9yZGVyU29ydGVyID0gbnVsbDtcbiAgICB0aGlzLl9jYW52YXNBY3RvcnMgPSB7fTtcblxuICAgIF8uZXh0ZW5kKHJla2FwaS5fZXZlbnRzLCB7XG4gICAgICAnYmVmb3JlUmVuZGVyJzogW11cbiAgICAgICwnYWZ0ZXJSZW5kZXInOiBbXVxuICAgIH0pO1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgcmVrYXBpLm9uKCdhZnRlclVwZGF0ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJlbmRlcihyZWthcGksIHNlbGYpO1xuICAgIH0pO1xuXG4gICAgcmVrYXBpLm9uKCdhZGRBY3RvcicsIGZ1bmN0aW9uIChyZWthcGksIGFjdG9yKSB7XG4gICAgICBhZGRBY3RvcihhY3Rvciwgc2VsZik7XG4gICAgfSk7XG5cbiAgICByZWthcGkub24oJ3JlbW92ZUFjdG9yJywgZnVuY3Rpb24gKHJla2FwaSwgYWN0b3IpIHtcbiAgICAgIHJlbW92ZUFjdG9yKGFjdG9yLCBzZWxmKTtcbiAgICB9KTtcblxuICAgIHJla2FwaS5vbignYmVmb3JlUmVuZGVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgYmVmb3JlUmVuZGVyKHNlbGYpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIHZhciBDYW52YXNSZW5kZXJlciA9IFJla2FwaS5DYW52YXNSZW5kZXJlcjtcblxuICAvKipcbiAgICogR2V0IGFuZCBvcHRpb25hbGx5IHNldCB0aGUgaGVpZ2h0IG9mIHRoZSBhc3NvY2lhdGVkIGA8Y2FudmFzPmAgZWxlbWVudC5cbiAgICogQG1ldGhvZCBoZWlnaHRcbiAgICogQHBhcmFtIHtudW1iZXI9fSBvcHRfaGVpZ2h0IFRoZSBoZWlnaHQgdG8gb3B0aW9uYWxseSBzZXQuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIENhbnZhc1JlbmRlcmVyLnByb3RvdHlwZS5oZWlnaHQgPSBmdW5jdGlvbiAob3B0X2hlaWdodCkge1xuICAgIHJldHVybiBkaW1lbnNpb24odGhpcy5jYW52YXNDb250ZXh0LmNhbnZhcywgJ2hlaWdodCcsIG9wdF9oZWlnaHQpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgYW5kIG9wdGlvbmFsbHkgc2V0IHRoZSB3aWR0aCBvZiB0aGUgYXNzb2NpYXRlZCBgPGNhbnZhcz5gIGVsZW1lbnQuXG4gICAqIEBtZXRob2Qgd2lkdGhcbiAgICogQHBhcmFtIHtudW1iZXI9fSBvcHRfd2lkdGggVGhlIHdpZHRoIHRvIG9wdGlvbmFsbHkgc2V0LlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBDYW52YXNSZW5kZXJlci5wcm90b3R5cGUud2lkdGggPSBmdW5jdGlvbiAob3B0X3dpZHRoKSB7XG4gICAgcmV0dXJuIGRpbWVuc2lvbih0aGlzLmNhbnZhc0NvbnRleHQuY2FudmFzLCAnd2lkdGgnLCBvcHRfd2lkdGgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBFcmFzZSB0aGUgYDxjYW52YXM+YC5cbiAgICogQG1ldGhvZCBjbGVhclxuICAgKiBAcmV0dXJuIHtSZWthcGl9XG4gICAqL1xuICBDYW52YXNSZW5kZXJlci5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5jYW52YXNDb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLndpZHRoKCksIHRoaXMuaGVpZ2h0KCkpO1xuXG4gICAgcmV0dXJuIHRoaXMucmVrYXBpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBNb3ZlIGFuIGFjdG9yIGFyb3VuZCB3aXRoaW4gdGhlIHJlbmRlciBvcmRlciBsaXN0LiAgRWFjaCBhY3RvciBpcyByZW5kZXJlZFxuICAgKiBpbiBvcmRlciBvZiBpdHMgbGF5ZXIgKGxheWVycyBhbmQgYWN0b3JzIGhhdmUgYSAxOjEgcmVsYXRpb25zaGlwKS4gIFRoZVxuICAgKiBsYXRlciBhbiBhY3RvciBpcyBhZGRlZCB0byBhbiBhbmltYXRpb24gKHdpdGggYHt7I2Nyb3NzTGlua1xuICAgKiBcIlJla2FwaS9hZGRBY3RvcjptZXRob2RcIn19e3svY3Jvc3NMaW5rfX1gKSwgdGhlIGhpZ2hlciBpdHMgbGF5ZXIuICBMb3dlclxuICAgKiBsYXllcnMgKHN0YXJ0aW5nIHdpdGggMCkgYXJlIHJlbmRlcmVkIGVhcmxpZXIuXG4gICAqXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGhhcyBubyBlZmZlY3QgaWYgYW4gb3JkZXIgZnVuY3Rpb24gaXMgc2V0IHdpdGggYHt7I2Nyb3NzTGlua1xuICAgKiBcIlJla2FwaS5DYW52YXNSZW5kZXJlci9zZXRPcmRlckZ1bmN0aW9uOm1ldGhvZFwifX17ey9jcm9zc0xpbmt9fWAuXG4gICAqXG4gICAqIF9fW0V4YW1wbGVdKC4uLy4uLy4uLy4uL2RvY3MvZXhhbXBsZXMvY2FudmFzX21vdmVfYWN0b3JfdG9fbGF5ZXIuaHRtbClfX1xuICAgKiBAbWV0aG9kIG1vdmVBY3RvclRvTGF5ZXJcbiAgICogQHBhcmFtIHtSZWthcGkuQWN0b3J9IGFjdG9yXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsYXllciBUaGlzIHNob3VsZCBiZSB3aXRoaW4gYDBgIGFuZCB0aGUgdG90YWwgbnVtYmVyIG9mXG4gICAqIGFjdG9ycyBpbiB0aGUgYW5pbWF0aW9uLiAgVGhhdCBudW1iZXIgY2FuIGJlIGZvdW5kIHdpdGggYHt7I2Nyb3NzTGlua1xuICAgKiBcIlJla2FwaS9nZXRBY3RvckNvdW50Om1ldGhvZFwifX17ey9jcm9zc0xpbmt9fWAuXG4gICAqIEByZXR1cm4ge1Jla2FwaS5BY3Rvcn1cbiAgICovXG4gIENhbnZhc1JlbmRlcmVyLnByb3RvdHlwZS5tb3ZlQWN0b3JUb0xheWVyID0gZnVuY3Rpb24gKGFjdG9yLCBsYXllcikge1xuICAgIGlmIChsYXllciA8IHRoaXMuX3JlbmRlck9yZGVyLmxlbmd0aCAmJiBsYXllciA+IC0xKSB7XG4gICAgICB0aGlzLl9yZW5kZXJPcmRlciA9IF8ud2l0aG91dCh0aGlzLl9yZW5kZXJPcmRlciwgYWN0b3IuaWQpO1xuICAgICAgdGhpcy5fcmVuZGVyT3JkZXIuc3BsaWNlKGxheWVyLCAwLCBhY3Rvci5pZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjdG9yO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTZXQgYSBmdW5jdGlvbiB0aGF0IGRlZmluZXMgdGhlIHJlbmRlciBvcmRlciBvZiB0aGUgYWN0b3JzLiAgVGhpcyBpc1xuICAgKiBjYWxsZWQgZWFjaCBmcmFtZSBiZWZvcmUgdGhlIGFjdG9ycyBhcmUgcmVuZGVyZWQuXG4gICAqXG4gICAqIFRoZSBmb2xsb3dpbmcgZXhhbXBsZSBhc3N1bWVzIHRoYXQgYWxsIGFjdG9ycyBhcmUgY2lyY2xlcyB0aGF0IGhhdmUgYVxuICAgKiBgcmFkaXVzYCBge3sjY3Jvc3NMaW5rIFwiUmVrYXBpLktleWZyYW1lUHJvcGVydHlcIn19e3svY3Jvc3NMaW5rfX1gLiAgVGhlXG4gICAqIGNpcmNsZXMgd2lsbCBiZSByZW5kZXJlZCBpbiBvcmRlciBvZiB0aGUgdmFsdWUgb2YgdGhlaXIgYHJhZGl1c2AsIGZyb21cbiAgICogc21hbGxlc3QgdG8gbGFyZ2VzdC4gIFRoaXMgaGFzIHRoZSBlZmZlY3Qgb2YgbGF5ZXJpbmcgbGFyZ2VyIGNpcmNsZXMgb25cbiAgICogdG9wIG9mIHNtYWxsZXIgY2lyY2xlcywgdGh1cyBnaXZpbmcgYSBzZW5zZSBvZiBwZXJzcGVjdGl2ZS5cbiAgICpcbiAgICogSWYgYSByZW5kZXIgb3JkZXIgZnVuY3Rpb24gaXMgc3BlY2lmaWVkLCBge3sjY3Jvc3NMaW5rXG4gICAqIFwiUmVrYXBpLkNhbnZhc1JlbmRlcmVyL21vdmVBY3RvclRvTGF5ZXI6bWV0aG9kXCJ9fXt7L2Nyb3NzTGlua319YCB3aWxsIGhhdmVcbiAgICogbm8gZWZmZWN0LlxuICAgKlxuICAgKiAgICAgcmVrYXBpLnJlbmRlcmVyLnNldE9yZGVyRnVuY3Rpb24oZnVuY3Rpb24gKGFjdG9yKSB7XG4gICAqICAgICAgIHJldHVybiBhY3Rvci5nZXQoKS5yYWRpdXM7XG4gICAqICAgICB9KTtcbiAgICogX19bRXhhbXBsZV0oLi4vLi4vLi4vLi4vZG9jcy9leGFtcGxlcy9jYW52YXNfc2V0X29yZGVyX2Z1bmN0aW9uLmh0bWwpX19cbiAgICogQG1ldGhvZCBzZXRPcmRlckZ1bmN0aW9uXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oUmVrYXBpLkFjdG9yKX0gc29ydEZ1bmN0aW9uXG4gICAqIEByZXR1cm4ge1Jla2FwaX1cbiAgICovXG4gIENhbnZhc1JlbmRlcmVyLnByb3RvdHlwZS5zZXRPcmRlckZ1bmN0aW9uID0gZnVuY3Rpb24gKHNvcnRGdW5jdGlvbikge1xuICAgIHRoaXMuX3JlbmRlck9yZGVyU29ydGVyID0gc29ydEZ1bmN0aW9uO1xuICAgIHJldHVybiB0aGlzLnJla2FwaTtcbiAgfTtcblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBvcmRlciBmdW5jdGlvbiBzZXQgYnkgYHt7I2Nyb3NzTGlua1xuICAgKiBcIlJla2FwaS5DYW52YXNSZW5kZXJlci9zZXRPcmRlckZ1bmN0aW9uOm1ldGhvZFwifX17ey9jcm9zc0xpbmt9fWAuICBUaGVcbiAgICogcmVuZGVyIG9yZGVyIGRlZmF1bHRzIGJhY2sgdG8gdGhlIG9yZGVyIGluIHdoaWNoIHRoZSBhY3RvcnMgd2VyZSBhZGRlZCB0b1xuICAgKiB0aGUgYW5pbWF0aW9uLlxuICAgKlxuICAgKiBfX1tFeGFtcGxlXSguLi8uLi8uLi8uLi9kb2NzL2V4YW1wbGVzL2NhbnZhc191bnNldF9vcmRlcl9mdW5jdGlvbi5odG1sKV9fXG4gICAqIEBtZXRob2QgdW5zZXRPcmRlckZ1bmN0aW9uXG4gICAqIEByZXR1cm4ge1Jla2FwaX1cbiAgICovXG4gIENhbnZhc1JlbmRlcmVyLnByb3RvdHlwZS51bnNldE9yZGVyRnVuY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fcmVuZGVyT3JkZXJTb3J0ZXIgPSBudWxsO1xuICAgIHJldHVybiB0aGlzLnJla2FwaTtcbiAgfTtcblxufSk7XG5cbnJla2FwaU1vZHVsZXMucHVzaChmdW5jdGlvbiAoY29udGV4dCkge1xuXG4gICd1c2Ugc3RyaWN0JztcblxuICB2YXIgUmVrYXBpID0gY29udGV4dC5SZWthcGk7XG4gIHZhciBfID0gUmVrYXBpLl87XG4gIHZhciBub3cgPSBSZWthcGkuVHdlZW5hYmxlLm5vdztcbiAgdmFyIHZlbmRvclRyYW5zZm9ybXMgPSBbXG4gICAgJ3RyYW5zZm9ybSdcbiAgICAsJ3dlYmtpdFRyYW5zZm9ybSdcbiAgICAsJ01velRyYW5zZm9ybSdcbiAgICAsJ29UcmFuc2Zvcm0nXG4gICAgLCdtc1RyYW5zZm9ybSddO1xuICB2YXIgdHJhbnNmb3JtRnVuY3Rpb25zID0gW1xuICAgICd0cmFuc2xhdGVYJyxcbiAgICAndHJhbnNsYXRlWScsXG4gICAgJ3RyYW5zbGF0ZVonLFxuICAgICdzY2FsZScsXG4gICAgJ3NjYWxlWCcsXG4gICAgJ3NjYWxlWScsXG4gICAgJ3JvdGF0ZScsXG4gICAgJ3NrZXdYJyxcbiAgICAnc2tld1knXTtcblxuICAvLyBDT05TVEFOVFNcbiAgLy9cblxuICAvLyBUaGUgdGltZXIgdG8gcmVtb3ZlIGFuIGluamVjdGVkIHN0eWxlIGlzbid0IGxpa2VseSB0byBtYXRjaCB0aGUgYWN0dWFsXG4gIC8vIGxlbmd0aCBvZiB0aGUgQ1NTIGFuaW1hdGlvbiwgc28gZ2l2ZSBpdCBzb21lIGV4dHJhIHRpbWUgdG8gY29tcGxldGUgc28gaXRcbiAgLy8gZG9lc24ndCBjdXQgb2ZmIHRoZSBlbmQuXG4gIHZhciBJTkpFQ1RFRF9TVFlMRV9SRU1PVkFMX0JVRkZFUl9NUyA9IDI1MDtcblxuICAvLyBQUklWQVRFIFVUSUxJVFkgRlVOQ1RJT05TXG4gIC8vXG5cbiAgLyohXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtYXR0ZXJcbiAgICogQHBhcmFtIHtbc3RyaW5nXX0gYXJnc1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB2YXIgcHJpbnRmID0gZnVuY3Rpb24gKGZvcm1hdHRlciwgYXJncykge1xuICAgIHZhciBjb21wb3NlZFN0ciA9IGZvcm1hdHRlcjtcbiAgICBfLmVhY2goYXJncywgZnVuY3Rpb24gKGFyZykge1xuICAgICAgY29tcG9zZWRTdHIgPSBjb21wb3NlZFN0ci5yZXBsYWNlKCclcycsIGFyZyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY29tcG9zZWRTdHI7XG4gIH07XG5cbiAgLyohXG4gICAqIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM4ODYxMDZcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IG51bWJlclxuICAgKi9cbiAgZnVuY3Rpb24gaXNJbnQgKG51bWJlcikge1xuICAgIHJldHVybiBudW1iZXIgJSAxID09PSAwO1xuICB9XG5cbiAgLyohXG4gICAqIEBwYXJhbSB7UmVrYXBpfSByZWthcGlcbiAgICovXG4gIFJla2FwaS5fcmVuZGVyZXJJbml0SG9vay5jc3NBbmltYXRlID0gZnVuY3Rpb24gKHJla2FwaSkge1xuICAgIC8vIE5vZGUubm9kZVR5cGUgMSBpcyBhbiBFTEVNRU5UX05PREUuXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL05vZGUubm9kZVR5cGVcbiAgICBpZiAocmVrYXBpLmNvbnRleHQubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgIHJla2FwaS5yZW5kZXJlciA9IG5ldyBET01SZW5kZXJlcihyZWthcGkpO1xuICAgIH1cbiAgfTtcblxuICAvKiFcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0VmVuZG9yUHJlZml4ICgpIHtcbiAgICB2YXIgc3R5bGUgPSBkb2N1bWVudC5ib2R5LnN0eWxlO1xuXG4gICAgaWYgKCctd2Via2l0LWFuaW1hdGlvbicgaW4gc3R5bGUpIHtcbiAgICAgIHJldHVybiAnd2Via2l0JztcbiAgICB9IGVsc2UgaWYgKCctbW96LWFuaW1hdGlvbicgaW4gc3R5bGUpIHtcbiAgICAgIHJldHVybiAnbW96aWxsYSc7XG4gICAgfSBlbHNlIGlmICgnLW1zLWFuaW1hdGlvbicgaW4gc3R5bGUpIHtcbiAgICAgIHJldHVybiAnbWljcm9zb2Z0JztcbiAgICB9IGVsc2UgaWYgKCctby1hbmltYXRpb24nIGluIHN0eWxlKSB7XG4gICAgICByZXR1cm4gJ29wZXJhJztcbiAgICB9IGVsc2UgaWYgKCdhbmltYXRpb24nIGluIHN0eWxlKSB7XG4gICAgICByZXR1cm4gJ3czJztcbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICB2YXIgc3R5bGVJRCA9IDA7XG4gIC8qIVxuICAgKiBAcGFyYW0ge1Jla2FwaX0gcmVrYXBpXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjc3MgVGhlIGNzcyBjb250ZW50IHRoYXQgdGhlIDxzdHlsZT4gZWxlbWVudCBzaG91bGQgaGF2ZS5cbiAgICogQHJldHVybiB7SFRNTFN0eWxlRWxlbWVudH0gVGhlIHVuaXF1ZSBJRCBvZiB0aGUgaW5qZWN0ZWQgPHN0eWxlPiBlbGVtZW50LlxuICAgKi9cbiAgZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHJla2FwaSwgY3NzKSB7XG4gICAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICB2YXIgaWQgPSAncmVrYXBpLScgKyBzdHlsZUlEKys7XG4gICAgc3R5bGUuaWQgPSBpZDtcbiAgICBzdHlsZS5pbm5lckhUTUwgPSBjc3M7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgZm9yY2VTdHlsZVJlc2V0KHJla2FwaSk7XG5cbiAgICByZXR1cm4gc3R5bGU7XG4gIH1cblxuICAvKiFcbiAgICogRml4ZXMgYSByZWFsbHkgYml6YXJyZSBpc3N1ZSB0aGF0IG9ubHkgc2VlbXMgdG8gYWZmZWN0IFByZXN0byBhbmQgQmxpbmsuXG4gICAqIEluIHNvbWUgc2l0dWF0aW9ucywgRE9NIG5vZGVzIHdpbGwgbm90IGRldGVjdCBkeW5hbWljYWxseSBpbmplY3RlZCA8c3R5bGU+XG4gICAqIGVsZW1lbnRzLiAgRXhwbGljaXRseSByZS1pbnNlcnRpbmcgRE9NIG5vZGVzIHNlZW1zIHRvIGZpeCB0aGUgaXNzdWUuICBOb3RcbiAgICogc3VyZSB3aGF0IGNhdXNlcyB0aGlzIGlzc3VlLiAgTm90IHN1cmUgd2h5IHRoaXMgZml4ZXMgaXQuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVrYXBpfSByZWthcGlcbiAgICovXG4gIGZ1bmN0aW9uIGZvcmNlU3R5bGVSZXNldCAocmVrYXBpKSB7XG4gICAgdmFyIGR1bW15RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBfLmVhY2gocmVrYXBpLmdldEFsbEFjdG9ycygpLCBmdW5jdGlvbiAoYWN0b3IpIHtcbiAgICAgIGlmIChhY3Rvci5jb250ZXh0Lm5vZGVUeXBlID09PSAxKSB7XG4gICAgICAgIHZhciBhY3RvckVsID0gYWN0b3IuY29udGV4dDtcbiAgICAgICAgdmFyIGFjdG9yRWxQYXJlbnQgPSBhY3RvckVsLnBhcmVudEVsZW1lbnQ7XG5cbiAgICAgICAgYWN0b3JFbFBhcmVudC5yZXBsYWNlQ2hpbGQoZHVtbXlEaXYsIGFjdG9yRWwpO1xuICAgICAgICBhY3RvckVsUGFyZW50LnJlcGxhY2VDaGlsZChhY3RvckVsLCBkdW1teURpdik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBkdW1teURpdiA9IG51bGw7XG4gIH1cblxuICAvKiFcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3R5bGVOYW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gc3R5bGVWYWx1ZVxuICAgKi9cbiAgZnVuY3Rpb24gc2V0U3R5bGUgKGVsZW1lbnQsIHN0eWxlTmFtZSwgc3R5bGVWYWx1ZSkge1xuICAgIGVsZW1lbnQuc3R5bGVbc3R5bGVOYW1lXSA9IHN0eWxlVmFsdWU7XG4gIH1cblxuICAvKiFcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgQSB0cmFuc2Zvcm0gZnVuY3Rpb24gbmFtZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gaXNUcmFuc2Zvcm1GdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiBfLmNvbnRhaW5zKHRyYW5zZm9ybUZ1bmN0aW9ucywgbmFtZSk7XG4gIH1cblxuICAvKiFcbiAgICogQnVpbGRzIGEgY29uY2F0ZW5hdGVkIHN0cmluZyBvZiBnaXZlbiB0cmFuc2Zvcm0gcHJvcGVydHkgdmFsdWVzIGluIG9yZGVyLlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5LjxzdHJpbmc+fSBvcmRlcmVkVHJhbnNmb3JtcyBBcnJheSBvZiBvcmRlcmVkIHRyYW5zZm9ybVxuICAgKiAgICAgZnVuY3Rpb24gbmFtZXNcbiAgICogQHBhcmFtIHtPYmplY3R9IHRyYW5zZm9ybVByb3BlcnRpZXMgVHJhbnNmb3JtIHByb3BlcnRpZXMgdG8gYnVpbGQgdG9nZXRoZXJcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZnVuY3Rpb24gYnVpbGRUcmFuc2Zvcm1WYWx1ZSAob3JkZXJlZFRyYW5zZm9ybXMsIHRyYW5zZm9ybVByb3BlcnRpZXMpIHtcbiAgICB2YXIgdHJhbnNmb3JtQ29tcG9uZW50cyA9IFtdO1xuXG4gICAgXy5lYWNoKG9yZGVyZWRUcmFuc2Zvcm1zLCBmdW5jdGlvbihmdW5jdGlvbk5hbWUpIHtcbiAgICAgIGlmICh0cmFuc2Zvcm1Qcm9wZXJ0aWVzW2Z1bmN0aW9uTmFtZV0pIHtcbiAgICAgICAgdHJhbnNmb3JtQ29tcG9uZW50cy5wdXNoKGZ1bmN0aW9uTmFtZSArICcoJyArXG4gICAgICAgICAgdHJhbnNmb3JtUHJvcGVydGllc1tmdW5jdGlvbk5hbWVdICsgJyknKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB0cmFuc2Zvcm1Db21wb25lbnRzLmpvaW4oJyAnKTtcbiAgfVxuXG4gIC8qIVxuICAgKiBTZXRzIHZhbHVlIGZvciBhbGwgdmVuZG9yIHByZWZpeGVkIHRyYW5zZm9ybSBwcm9wZXJ0aWVzIG9uIGFuIGVsZW1lbnRcbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBUaGUgYWN0b3IncyBET00gZWxlbWVudFxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHJhbnNmb3JtVmFsdWUgVGhlIHRyYW5zZm9ybSBzdHlsZSB2YWx1ZVxuICAgKi9cbiAgZnVuY3Rpb24gc2V0VHJhbnNmb3JtU3R5bGVzIChlbGVtZW50LCB0cmFuc2Zvcm1WYWx1ZSkge1xuICAgIF8uZWFjaCh2ZW5kb3JUcmFuc2Zvcm1zLCBmdW5jdGlvbihwcmVmaXhlZFRyYW5zZm9ybSkge1xuICAgICAgc2V0U3R5bGUoZWxlbWVudCwgcHJlZml4ZWRUcmFuc2Zvcm0sIHRyYW5zZm9ybVZhbHVlKTtcbiAgICB9KTtcbiAgfVxuXG5cbiAgLyohXG4gICAqIEBwYXJhbSB7UmVrYXBpfSByZWthcGlcbiAgICogQHBhcmFtIHtSZWthcGkuQWN0b3J9IGFjdG9yXG4gICAqL1xuICBmdW5jdGlvbiBvbkFkZEFjdG9yIChyZWthcGksIGFjdG9yKSB7XG4gICAgdmFyIGFjdG9yRWxlbWVudCA9IGFjdG9yLmNvbnRleHQ7XG5cbiAgICBpZiAoYWN0b3JFbGVtZW50Lm5vZGVUeXBlICE9PSAxKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGNsYXNzTmFtZSA9IERPTVJlbmRlcmVyLmdldEFjdG9yQ2xhc3NOYW1lKGFjdG9yKTtcblxuICAgIC8vIEFkZCB0aGUgY2xhc3MgaWYgaXQncyBub3QgYWxyZWFkeSB0aGVyZS5cbiAgICAvLyBVc2luZyBjbGFzc05hbWUgaW5zdGVhZCBvZiBjbGFzc0xpc3QgdG8gbWFrZSBJRSBoYXBweS5cbiAgICBpZiAoIWFjdG9yRWxlbWVudC5jbGFzc05hbWUubWF0Y2goY2xhc3NOYW1lKSkge1xuICAgICAgYWN0b3JFbGVtZW50LmNsYXNzTmFtZSArPSAnICcgKyBjbGFzc05hbWU7XG4gICAgfVxuXG4gICAgYWN0b3IuX3RyYW5zZm9ybU9yZGVyID0gdHJhbnNmb3JtRnVuY3Rpb25zLnNsaWNlKDApO1xuICAgIGFjdG9yLl9iZWZvcmVLZXlmcmFtZVByb3BlcnR5SW50ZXJwb2xhdGUgPSBhY3RvckJlZm9yZUludGVycG9sYXRlO1xuICAgIGFjdG9yLl9hZnRlcktleWZyYW1lUHJvcGVydHlJbnRlcnBvbGF0ZSA9IGFjdG9yQWZ0ZXJJbnRlcnBvbGF0ZTtcbiAgICBhY3Rvci5yZW5kZXIgPSBfLmJpbmQoYWN0b3JSZW5kZXIsIGFjdG9yLCBhY3Rvcik7XG4gICAgYWN0b3IudGVhcmRvd24gPSBfLmJpbmQoYWN0b3JUZWFyZG93biwgYWN0b3IsIGFjdG9yKTtcbiAgfVxuXG4gIC8qIVxuICAgKiB0cmFuc2Zvcm0gcHJvcGVydGllcyBsaWtlIHRyYW5zbGF0ZTNkIGFuZCByb3RhdGUzZCBicmVhayB0aGUgY2FyZGluYWxpdHlcbiAgICogb2YgbXVsdGktZWFzZSBlYXNpbmcgc3RyaW5ncywgYmVjYXVzZSB0aGUgXCIzXCIgZ2V0cyB0cmVhdGVkIGxpa2UgYVxuICAgKiB0d2VlbmFibGUgdmFsdWUuICBUcmFuc2Zvcm0gXCIzZChcIiB0byBcIl9fVEhSRUVEX19cIiB0byBwcmV2ZW50IHRoaXMsIGFuZFxuICAgKiB0cmFuc2Zvcm0gaXQgYmFjayBpbiBfYWZ0ZXJLZXlmcmFtZVByb3BlcnR5SW50ZXJwb2xhdGUuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVrYXBpLktleWZyYW1lUHJvcGVydHl9IGtleWZyYW1lUHJvcGVydHlcbiAgICovXG4gIGZ1bmN0aW9uIGFjdG9yQmVmb3JlSW50ZXJwb2xhdGUgKGtleWZyYW1lUHJvcGVydHkpIHtcbiAgICBpZiAoa2V5ZnJhbWVQcm9wZXJ0eS5uYW1lICE9PSAndHJhbnNmb3JtJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciB2YWx1ZSA9IGtleWZyYW1lUHJvcGVydHkudmFsdWU7XG4gICAgdmFyIG5leHRQcm9wID0ga2V5ZnJhbWVQcm9wZXJ0eS5uZXh0UHJvcGVydHk7XG5cbiAgICBpZiAobmV4dFByb3AgJiYgdmFsdWUubWF0Y2goLzNkXFwoL2cpKSB7XG4gICAgICBrZXlmcmFtZVByb3BlcnR5LnZhbHVlID0gdmFsdWUucmVwbGFjZSgvM2RcXCgvZywgJ19fVEhSRUVEX18nKTtcbiAgICAgIG5leHRQcm9wLnZhbHVlID0gbmV4dFByb3AudmFsdWUucmVwbGFjZSgvM2RcXCgvZywgJ19fVEhSRUVEX18nKTtcbiAgICB9XG4gIH1cblxuICAvKiFcbiAgICogQHBhcmFtIHtSZWthcGkuS2V5ZnJhbWVQcm9wZXJ0eX0ga2V5ZnJhbWVQcm9wZXJ0eVxuICAgKiBAcGFyYW0ge09iamVjdH0gaW50ZXJwb2xhdGVkT2JqZWN0XG4gICAqL1xuICBmdW5jdGlvbiBhY3RvckFmdGVySW50ZXJwb2xhdGUgKGtleWZyYW1lUHJvcGVydHksIGludGVycG9sYXRlZE9iamVjdCkge1xuICAgIGlmIChrZXlmcmFtZVByb3BlcnR5Lm5hbWUgIT09ICd0cmFuc2Zvcm0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHZhbHVlID0ga2V5ZnJhbWVQcm9wZXJ0eS52YWx1ZTtcbiAgICB2YXIgbmV4dFByb3AgPSBrZXlmcmFtZVByb3BlcnR5Lm5leHRQcm9wZXJ0eTtcblxuICAgIGlmIChuZXh0UHJvcCAmJiB2YWx1ZS5tYXRjaCgvX19USFJFRURfXy9nKSkge1xuICAgICAga2V5ZnJhbWVQcm9wZXJ0eS52YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL19fVEhSRUVEX18vZywgJzNkKCcpO1xuICAgICAgbmV4dFByb3AudmFsdWUgPSBuZXh0UHJvcC52YWx1ZS5yZXBsYWNlKC9fX1RIUkVFRF9fL2csICczZCgnKTtcbiAgICAgIHZhciBrZXlQcm9wTmFtZSA9IGtleWZyYW1lUHJvcGVydHkubmFtZTtcbiAgICAgIGludGVycG9sYXRlZE9iamVjdFtrZXlQcm9wTmFtZV0gPVxuICAgICAgICAgIGludGVycG9sYXRlZE9iamVjdFtrZXlQcm9wTmFtZV0ucmVwbGFjZSgvX19USFJFRURfXy9nLCAnM2QoJyk7XG4gICAgfVxuICB9XG5cbiAgLyohXG4gICAqIEBwYXJhbSB7UmVrYXBpLkFjdG9yfSBhY3RvclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZVxuICAgKi9cbiAgZnVuY3Rpb24gYWN0b3JSZW5kZXIgKGFjdG9yLCBlbGVtZW50LCBzdGF0ZSkge1xuICAgIHZhciBwcm9wZXJ0eU5hbWVzID0gXy5rZXlzKHN0YXRlKTtcbiAgICAvLyBUT0RPOiAgT3B0aW1pemUgdGhlIGZvbGxvd2luZyBjb2RlIHNvIHRoYXQgcHJvcGVydHlOYW1lcyBpcyBub3QgbG9vcGVkXG4gICAgLy8gb3ZlciB0d2ljZS5cbiAgICB2YXIgdHJhbnNmb3JtRnVuY3Rpb25OYW1lcyA9IF8uZmlsdGVyKHByb3BlcnR5TmFtZXMsIGlzVHJhbnNmb3JtRnVuY3Rpb24pO1xuICAgIHZhciBvdGhlclByb3BlcnR5TmFtZXMgPSBfLnJlamVjdChwcm9wZXJ0eU5hbWVzLCBpc1RyYW5zZm9ybUZ1bmN0aW9uKTtcbiAgICB2YXIgb3RoZXJQcm9wZXJ0aWVzID0gXy5waWNrKHN0YXRlLCBvdGhlclByb3BlcnR5TmFtZXMpO1xuXG4gICAgaWYgKHRyYW5zZm9ybUZ1bmN0aW9uTmFtZXMubGVuZ3RoKSB7XG4gICAgICB2YXIgdHJhbnNmb3JtUHJvcGVydGllcyA9IF8ucGljayhzdGF0ZSwgdHJhbnNmb3JtRnVuY3Rpb25OYW1lcyk7XG4gICAgICB2YXIgYnVpbHRTdHlsZSA9IGJ1aWxkVHJhbnNmb3JtVmFsdWUoYWN0b3IuX3RyYW5zZm9ybU9yZGVyLFxuICAgICAgICAgIHRyYW5zZm9ybVByb3BlcnRpZXMpO1xuICAgICAgc2V0VHJhbnNmb3JtU3R5bGVzKGVsZW1lbnQsIGJ1aWx0U3R5bGUpO1xuICAgIH0gZWxzZSBpZiAoc3RhdGUudHJhbnNmb3JtKSB7XG4gICAgICBzZXRUcmFuc2Zvcm1TdHlsZXMoZWxlbWVudCwgc3RhdGUudHJhbnNmb3JtKTtcbiAgICB9XG5cbiAgICBfLmVhY2gob3RoZXJQcm9wZXJ0aWVzLCBmdW5jdGlvbiAoc3R5bGVWYWx1ZSwgc3R5bGVOYW1lKSB7XG4gICAgICBzZXRTdHlsZShlbGVtZW50LCBzdHlsZU5hbWUsIHN0eWxlVmFsdWUpO1xuICAgIH0pO1xuICB9XG5cbiAgLyohXG4gICAqIEBwYXJhbSB7UmVrYXBpLkFjdG9yfSBhY3RvclxuICAgKi9cbiAgZnVuY3Rpb24gYWN0b3JUZWFyZG93biAoYWN0b3IpIHtcbiAgICB2YXIgZWxlbWVudCA9IGFjdG9yLmNvbnRleHQ7XG4gICAgdmFyIGNsYXNzTGlzdCA9IGVsZW1lbnQuY2xhc3NOYW1lLm1hdGNoKC9cXFMrL2cpO1xuICAgIHZhciBzYW5pdGl6ZWRDbGFzc0xpc3QgPVxuICAgICAgICBfLndpdGhvdXQoY2xhc3NMaXN0LCBET01SZW5kZXJlci5nZXRBY3RvckNsYXNzTmFtZShhY3RvcikpO1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gc2FuaXRpemVkQ2xhc3NMaXN0LmpvaW4oJyAnKTtcbiAgfVxuXG4gIC8vIENTUyBSRU5ERVJFUiBPQkpFQ1RcbiAgLy9cblxuICAvKipcbiAgICogYFJla2FwaS5ET01SZW5kZXJlcmAgYWxsb3dzIHlvdSB0byBhbmltYXRlIERPTSBlbGVtZW50cy4gIFRoaXMgaXMgYWNoaWV2ZWRcbiAgICogZWl0aGVyIGJ5IGJyb3dzZXItYWNjZWxlcmF0ZWQgW0NTUyBgQGtleWZyYW1lYFxuICAgKiBhbmltYXRpb25zXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvQGtleWZyYW1lcyksXG4gICAqIG9yIGJ5IHRyYWRpdGlvbmFsIGlubGluZSBzdHlsZSB1cGRhdGVzIG9uIGV2ZXJ5IGZyYW1lIChsaWtlIGhvd1xuICAgKiBbYGpRdWVyeS5mbi5hbmltYXRlYF0oaHR0cDovL2FwaS5qcXVlcnkuY29tL2FuaW1hdGUvKSB3b3JrcykuICBBbmltYXRpb25zXG4gICAqIGFyZSBkZWZpbmVkIHdpdGggdGhlIHNhbWUgQVBJIGluIGVpdGhlciBjYXNlLCBidXQgeW91IGNhbiBncmFjZWZ1bGx5IGZhbGxcbiAgICogYmFjayB0byB0aGUgaW5saW5lIHN0eWxlIGFwcHJvYWNoIGlmIENTUyBgQGtleWZyYW1lYCBhbmltYXRpb25zIGFyZSBub3RcbiAgICogc3VwcG9ydGVkIGJ5IHRoZSBicm93c2VyIG9yIG5vdCBwcmVmZXJyZWQuICBUbyByZW5kZXIgYW5pbWF0aW9ucyB3aXRoIHRoZVxuICAgKiBET00sIGp1c3Qgc3VwcGx5IGFueSBET00gZWxlbWVudCB0byB0aGUgYHt7I2Nyb3NzTGlua1xuICAgKiBcIlJla2FwaVwifX17ey9jcm9zc0xpbmt9fWAgY29uc3RydWN0b3IuICBZb3UgbWF5IHVzZSBgZG9jdW1lbnQuYm9keWAsIHNpbmNlXG4gICAqIGl0IGlzIGdlbmVyYWxseSBhbHdheXMgYXZhaWxhYmxlOlxuICAgKlxuICAgKiAgICAgdmFyIHJla2FwaSA9IG5ldyBSZWthcGkoZG9jdW1lbnQuYm9keSk7XG4gICAqICAgICByZWthcGkucmVuZGVyZXIgaW5zdGFuY2VvZiBSZWthcGkuRE9NUmVuZGVyZXI7IC8vIHRydWVcbiAgICpcbiAgICogVGhlcmUgYXJlIHNlcGFyYXRlIEFQSXMgZm9yIHBsYXlpbmcgaW5saW5lIHN0eWxlIGFuaW1hdGlvbnMgYW5kIENTU1xuICAgKiBgQGtleWZyYW1lYCBhbmltYXRpb25zLiAgQWR2YW50YWdlcyBvZiBwbGF5aW5nIGFuIGFuaW1hdGlvbiB3aXRoIENTU1xuICAgKiBgQGtleWZyYW1lc2A6XG4gICAqXG4gICAqICAgLSBTbW9vdGhlciBhbmltYXRpb25zIGluIG5ld2VyIGJyb3dzZXJzLlxuICAgKiAgIC0gVGhlIEphdmFTY3JpcHQgdGhyZWFkIGlzIGZyZWVkIGZyb20gcGVyZm9ybWluZyBhbmltYXRpb24gdXBkYXRlcyxcbiAgICogICBtYWtpbmcgaXQgYXZhaWxhYmxlIGZvciBvdGhlciBsb2dpYy5cbiAgICpcbiAgICogRGlzYWR2YW50YWdlczpcbiAgICpcbiAgICogICAtIE5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCBDU1MgYEBrZXlmcmFtZWAgYW5pbWF0aW9ucy5cbiAgICogICAtIExpbWl0ZWQgcGxheWJhY2sgY29udHJvbDogWW91IGNhbiBvbmx5IHBsYXkgYW5kIHN0b3AgYW4gYW5pbWF0aW9uLCB5b3VcbiAgICogICBjYW5ub3QganVtcCB0byBvciBzdGFydCBmcm9tIGEgc3BlY2lmaWMgcG9pbnQgaW4gdGhlIHRpbWVsaW5lLlxuICAgKiAgIC0gR2VuZXJhdGluZyB0aGUgQ1NTIGZvciBgQGtleWZyYW1lYCBhbmltYXRpb25zIGNhbiB0YWtlIGEgbm90aWNlYWJsZVxuICAgKiAgIGFtb3VudCBvZiB0aW1lLiAgVGhpcyBibG9ja3MgYWxsIG90aGVyIGxvZ2ljLCBpbmNsdWRpbmcgcmVuZGVyaW5nLCBzb1xuICAgKiAgIHlvdSBtYXkgaGF2ZSB0byBiZSBjbGV2ZXIgd2l0aCBob3cgdG8gc3BlbmQgdGhlIGN5Y2xlcyB0byBkbyBpdC5cbiAgICogICAtIE5vIGB7eyNjcm9zc0xpbmsgXCJSZWthcGkvb246bWV0aG9kXCJ9fWV2ZW50c3t7L2Nyb3NzTGlua319YCBjYW4gYmVcbiAgICogICBib3VuZCB0byBDU1MgYEBrZXlmcmFtZWAgYW5pbWF0aW9ucy5cbiAgICpcbiAgICogU28sIHRoZSByZXN1bHRzIGFyZSBhIGxpdHRsZSBtb3JlIHByZWRpY3RhYmxlIGFuZCBmbGV4aWJsZSB3aXRoIGlubGluZVxuICAgKiBzdHlsZSBhbmltYXRpb25zLCBidXQgQ1NTIGBAa2V5ZnJhbWVgIG1heSBnaXZlIHlvdSBiZXR0ZXIgcGVyZm9ybWFuY2UuXG4gICAqIENob29zZSB3aGljaGV2ZXIgYXBwcm9hY2ggbWFrZXMgdGhlIG1vc3Qgc2Vuc2UgZm9yIHlvdXIgbmVlZHMuXG4gICAqXG4gICAqIGBSZWthcGkuRE9NUmVuZGVyZXJgIGNhbiBncmFjZWZ1bGx5IGZhbGwgYmFjayB0byBhbiBpbmxpbmUgc3R5bGUgYW5pbWF0aW9uXG4gICAqIGlmIENTUyBgQGtleWZyYW1lYCBhbmltYXRpb25zIGFyZSBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBicm93c2VyOlxuICAgKlxuICAgKiAgICAgIHZhciByZWthcGkgPSBuZXcgUmVrYXBpKGRvY3VtZW50LmJvZHkpO1xuICAgKlxuICAgKiAgICAgIC8vIEVhY2ggYWN0b3IgbmVlZHMgYSByZWZlcmVuY2UgdG8gdGhlIERPTSBlbGVtZW50IGl0IHJlcHJlc2VudHNcbiAgICogICAgICB2YXIgYWN0b3IgPSByZWthcGkuYWRkQWN0b3Ioe1xuICAgKiAgICAgICAgY29udGV4dDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjdG9yLTEnKVxuICAgKiAgICAgIH0pO1xuICAgKlxuICAgKiAgICAgIGFjdG9yXG4gICAqICAgICAgICAua2V5ZnJhbWUoMCwgICAgeyBsZWZ0OiAnMHB4JyAgIH0pXG4gICAqICAgICAgICAua2V5ZnJhbWUoMTAwMCwgeyBsZWZ0OiAnMjUwcHgnIH0sICdlYXNlT3V0UXVhZCcpO1xuICAgKlxuICAgKiAgICAgIC8vIEZlYXR1cmUgZGV0ZWN0IGZvciBDU1MgQGtleWZyYW1lIHN1cHBvcnRcbiAgICogICAgICBpZiAocmVrYXBpLnJlbmRlcmVyLmNhbkFuaW1hdGVXaXRoQ1NTKCkpIHtcbiAgICogICAgICAgIC8vIEFuaW1hdGUgd2l0aCBDU1MgQGtleWZyYW1lc1xuICAgKiAgICAgICAgcmVrYXBpLnJlbmRlcmVyLnBsYXkoKTtcbiAgICogICAgICB9IGVsc2Uge1xuICAgKiAgICAgICAgLy8gQW5pbWF0ZSB3aXRoIGlubGluZSBzdHlsZXMgaW5zdGVhZFxuICAgKiAgICAgICAgcmVrYXBpLnBsYXkoKTtcbiAgICogICAgICB9XG4gICAqXG4gICAqICMjIGBAa2V5ZnJhbWVgIGFuaW1hdGlvbnMgd29yayBkaWZmZXJlbnRseSB0aGFuIGlubGluZSBzdHlsZSBhbmltYXRpb25zXG4gICAqXG4gICAqIElubGluZSBzdHlsZSBhbmltYXRpb25zIGFyZSBjb21wYXRpYmxlIHdpdGggYWxsIG9mIHRoZSBwbGF5YmFjayBhbmRcbiAgICogdGltZWxpbmUgY29udHJvbCBtZXRob2RzIGRlZmluZWQgYnkgYHt7I2Nyb3NzTGlua1xuICAgKiBcIlJla2FwaVwifX17ey9jcm9zc0xpbmt9fWAsIHN1Y2ggYXMgYHt7I2Nyb3NzTGlua1xuICAgKiBcIlJla2FwaS9wbGF5Om1ldGhvZFwifX17ey9jcm9zc0xpbmt9fWAsIGB7eyNjcm9zc0xpbmtcbiAgICogXCJSZWthcGkvcGxheUZyb206bWV0aG9kXCJ9fXt7L2Nyb3NzTGlua319YCBhbmQgYHt7I2Nyb3NzTGlua1xuICAgKiBcIlJla2FwaS91cGRhdGU6bWV0aG9kXCJ9fXt7L2Nyb3NzTGlua319YC4gIENTUyBgQGtleWZyYW1lYCBwbGF5YmFjayBjYW5ub3RcbiAgICogYmUgY29udHJvbGxlZCBpbiBhbGwgYnJvd3NlcnMsIHNvIGBSZWthcGkuRE9NUmVuZGVyZXJgIGRlZmluZXMgYW5hbG9nb3VzLFxuICAgKiByZW5kZXJlci1zcGVjaWZpYyBDU1MgcGxheWJhY2sgbWV0aG9kcyB0aGF0IHlvdSBzaG91bGQgdXNlOlxuICAgKlxuICAgKiAgIC0ge3sjY3Jvc3NMaW5rIFwiUmVrYXBpLkRPTVJlbmRlcmVyL3BsYXk6bWV0aG9kXCJ9fXt7L2Nyb3NzTGlua319XG4gICAqICAgLSB7eyNjcm9zc0xpbmsgXCJSZWthcGkuRE9NUmVuZGVyZXIvaXNQbGF5aW5nOm1ldGhvZFwifX17ey9jcm9zc0xpbmt9fVxuICAgKiAgIC0ge3sjY3Jvc3NMaW5rIFwiUmVrYXBpLkRPTVJlbmRlcmVyL3N0b3A6bWV0aG9kXCJ9fXt7L2Nyb3NzTGlua319XG4gICAqXG4gICAqIF9fTm90ZV9fOiBgUmVrYXBpLkRPTVJlbmRlcmVyYCBpcyBhZGRlZCB0byB0aGUgYHt7I2Nyb3NzTGlua1xuICAgKiBcIlJla2FwaVwifX17ey9jcm9zc0xpbmt9fWAgaW5zdGFuY2UgYXV0b21hdGljYWxseSBhcyBgdGhpcy5yZW5kZXJlcmAsXG4gICAqIHRoZXJlIGlzIG5vIHJlYXNvbiB0byBjYWxsIHRoZSBjb25zdHJ1Y3RvciB5b3Vyc2VsZiBpbiBtb3N0IGNhc2VzLlxuICAgKlxuICAgKiBfX1tFeGFtcGxlXSgvcmVuZGVyZXJzL2RvbS9zYW1wbGUvcGxheS1tYW55LWFjdG9ycy5odG1sKV9fXG4gICAqXG4gICAqIEBjbGFzcyBSZWthcGkuRE9NUmVuZGVyZXJcbiAgICogQHBhcmFtIHtSZWthcGl9IHJla2FwaVxuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG4gIFJla2FwaS5ET01SZW5kZXJlciA9IGZ1bmN0aW9uIChyZWthcGkpIHtcbiAgICB0aGlzLnJla2FwaSA9IHJla2FwaTtcblxuICAgIC8vIEBwcml2YXRlIHtudW1iZXJ9XG4gICAgdGhpcy5fcGxheVRpbWVzdGFtcCA9IG51bGw7XG5cbiAgICAvLyBAcHJpdmF0ZSB7c3RyaW5nfVxuICAgIHRoaXMuX2NhY2hlZENTUyA9IG51bGw7XG5cbiAgICAvLyBUaGUgSFRNTFN0eWxlRWxlbWVudCB0aGF0IGdldHMgaW5qZWN0ZWQgaW50byB0aGUgRE9NLlxuICAgIC8vIEBwcml2YXRlIHtIVE1MU3R5bGVFbGVtZW50KVxuICAgIHRoaXMuX3N0eWxlRWxlbWVudCA9IG51bGw7XG5cbiAgICAvLyBAcHJpdmF0ZSB7bnVtYmVyfVxuICAgIHRoaXMuX3N0b3BTZXRUaW1lb3V0SGFuZGxlID0gbnVsbDtcblxuICAgIHJla2FwaS5vbigndGltZWxpbmVNb2RpZmllZCcsIF8uYmluZChmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLl9jYWNoZWRDU1MgPSBudWxsO1xuICAgIH0sIHRoaXMpKTtcblxuICAgIHJla2FwaS5vbignYWRkQWN0b3InLCBvbkFkZEFjdG9yKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICB2YXIgRE9NUmVuZGVyZXIgPSBSZWthcGkuRE9NUmVuZGVyZXI7XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgY2FuQW5pbWF0ZVdpdGhDU1NcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gV2hldGhlciBvciBub3QgdGhlIGJyb3dzZXIgc3VwcG9ydHMgQ1NTIGBAa2V5ZnJhbWVgXG4gICAqIGFuaW1hdGlvbnMuXG4gICAqL1xuICBET01SZW5kZXJlci5wcm90b3R5cGUuY2FuQW5pbWF0ZVdpdGhDU1MgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICEhZ2V0VmVuZG9yUHJlZml4KCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFBsYXkgdGhlIFJla2FwaSBhbmltYXRpb24gYXMgYSBDU1MgYEBrZXlmcmFtZWAgYW5pbWF0aW9uLlxuICAgKlxuICAgKiBOb3RlIHRoYXQgdGhpcyBpcyBkaWZmZXJlbnQgZnJvbSBge3sjY3Jvc3NMaW5rXG4gICAqIFwiUmVrYXBpL3BsYXk6bWV0aG9kXCJ9fXt7L2Nyb3NzTGlua319YC4gIFRoaXMgbWV0aG9kIG9ubHkgYXBwbGllcyB0byBDU1NcbiAgICogYEBrZXlmcmFtZWAgYW5pbWF0aW9ucy5cbiAgICogQG1ldGhvZCBwbGF5XG4gICAqIEBwYXJhbSB7bnVtYmVyPX0gb3B0X2l0ZXJhdGlvbnMgSG93IG1hbnkgdGltZXMgdGhlIGFuaW1hdGlvbiBzaG91bGQgbG9vcC5cbiAgICogVGhpcyBjYW4gYmUgYG51bGxgIG9yIGAwYCBpZiB5b3Ugd2FudCB0byBsb29wIHRoZSBhbmltYXRpb24gZW5kbGVzc2x5IGJ1dFxuICAgKiBhbHNvIHNwZWNpZnkgYSB2YWx1ZSBmb3IgYG9wdF9mcHNgLlxuICAgKiBAcGFyYW0ge251bWJlcj19IG9wdF9mcHMgSG93IG1hbnkgYEBrZXlmcmFtZXNgIHRvIGdlbmVyYXRlIHBlciBzZWNvbmQgb2ZcbiAgICogdGhlIGFuaW1hdGlvbi4gIEEgaGlnaGVyIHZhbHVlIHJlc3VsdHMgaW4gYSBtb3JlIHByZWNpc2UgQ1NTIGFuaW1hdGlvbixcbiAgICogYnV0IGl0IHdpbGwgdGFrZSBsb25nZXIgdG8gZ2VuZXJhdGUuICBUaGUgZGVmYXVsdCB2YWx1ZSBpcyBgMzBgLiAgWW91XG4gICAqIHNob3VsZCBub3QgbmVlZCB0byBnbyBoaWdoZXIgdGhhbiBgNjBgLlxuICAgKi9cbiAgRE9NUmVuZGVyZXIucHJvdG90eXBlLnBsYXkgPSBmdW5jdGlvbiAob3B0X2l0ZXJhdGlvbnMsIG9wdF9mcHMpIHtcbiAgICBpZiAodGhpcy5pc1BsYXlpbmcoKSkge1xuICAgICAgdGhpcy5zdG9wKCk7XG4gICAgfVxuXG4gICAgdmFyIGNzcyA9IHRoaXMuX2NhY2hlZENTUyB8fCB0aGlzLnByZXJlbmRlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHRoaXMuX3N0eWxlRWxlbWVudCA9IGluamVjdFN0eWxlKHRoaXMucmVrYXBpLCBjc3MpO1xuICAgIHRoaXMuX3BsYXlUaW1lc3RhbXAgPSBub3coKTtcblxuICAgIGlmIChvcHRfaXRlcmF0aW9ucykge1xuICAgICAgdmFyIGFuaW1hdGlvbkxlbmd0aCA9IChvcHRfaXRlcmF0aW9ucyAqIHRoaXMucmVrYXBpLmdldEFuaW1hdGlvbkxlbmd0aCgpKTtcbiAgICAgIHRoaXMuX3N0b3BTZXRUaW1lb3V0SGFuZGxlID0gc2V0VGltZW91dChcbiAgICAgICAgICBfLmJpbmQodGhpcy5zdG9wLCB0aGlzLCB0cnVlKSxcbiAgICAgICAgICBhbmltYXRpb25MZW5ndGggKyBJTkpFQ1RFRF9TVFlMRV9SRU1PVkFMX0JVRkZFUl9NUyk7XG4gICAgfVxuXG4gICAgZmlyZUV2ZW50KHRoaXMucmVrYXBpLCAncGxheScsIF8pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTdG9wIGEgQ1NTIGBAa2V5ZnJhbWVgIGFuaW1hdGlvbi4gIFRoaXMgYWxzbyByZW1vdmVzIGFueSBgPHN0eWxlPmBcbiAgICogZWxlbWVudHMgdGhhdCB3ZXJlIGR5bmFtaWNhbGx5IGluamVjdGVkIGludG8gdGhlIERPTS5cbiAgICpcbiAgICogTm90ZSB0aGF0IHRoaXMgaXMgZGlmZmVyZW50IGZyb21cbiAgICogYHt7I2Nyb3NzTGluayBcIlJla2FwaS9zdG9wOm1ldGhvZFwifX17ey9jcm9zc0xpbmt9fWAuICBUaGlzIG1ldGhvZCBvbmx5XG4gICAqIGFwcGxpZXMgdG8gQ1NTIGBAa2V5ZnJhbWVgIGFuaW1hdGlvbnMuXG4gICAqIEBtZXRob2Qgc3RvcFxuICAgKiBAcGFyYW0ge2Jvb2xlYW49fSBvcHRfZ29Ub0VuZCBJZiB0cnVlLCBza2lwIHRvIHRoZSBlbmQgb2YgdGhlIGFuaW1hdGlvbi5cbiAgICogSWYgZmFsc2Ugb3Igb21pdHRlZCwgc2V0IGlubGluZSBzdHlsZXMgb24gdGhlIGFjdG9yIGVsZW1lbnRzIHRvIGtlZXAgdGhlbVxuICAgKiBpbiB0aGVpciBjdXJyZW50IHBvc2l0aW9uLlxuICAgKi9cbiAgRE9NUmVuZGVyZXIucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAob3B0X2dvVG9FbmQpIHtcbiAgICBpZiAodGhpcy5pc1BsYXlpbmcoKSkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3N0b3BTZXRUaW1lb3V0SGFuZGxlKTtcblxuICAgICAgLy8gRm9yY2VzIGEgc3R5bGUgdXBkYXRlIGluIFdlYktpdC9QcmVzdG9cbiAgICAgIHRoaXMuX3N0eWxlRWxlbWVudC5pbm5lckhUTUwgPSAnJztcblxuICAgICAgZG9jdW1lbnQuaGVhZC5yZW1vdmVDaGlsZCh0aGlzLl9zdHlsZUVsZW1lbnQpO1xuICAgICAgdGhpcy5fc3R5bGVFbGVtZW50ID0gbnVsbDtcblxuICAgICAgdmFyIHVwZGF0ZVRpbWU7XG4gICAgICBpZiAob3B0X2dvVG9FbmQpIHtcbiAgICAgICAgdXBkYXRlVGltZSA9IHRoaXMucmVrYXBpLmdldEFuaW1hdGlvbkxlbmd0aCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdXBkYXRlVGltZSA9IChub3coKSAtIHRoaXMuX3BsYXlUaW1lc3RhbXApXG4gICAgICAgICAgICAlIHRoaXMucmVrYXBpLmdldEFuaW1hdGlvbkxlbmd0aCgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnJla2FwaS51cGRhdGUodXBkYXRlVGltZSk7XG4gICAgICBmaXJlRXZlbnQodGhpcy5yZWthcGksICdzdG9wJywgXyk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGlzUGxheWluZ1xuICAgKiBAcmV0dXJuIHtib29sZWFufSBXaGV0aGVyIG9yIG5vdCBhIENTUyBgQGtleWZyYW1lYCBhbmltYXRpb24gaXMgcnVubmluZy5cbiAgICovXG4gIERPTVJlbmRlcmVyLnByb3RvdHlwZS5pc1BsYXlpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICEhdGhpcy5fc3R5bGVFbGVtZW50O1xuICB9O1xuXG4gIC8qKlxuICAgKiBQcmVyZW5kZXIgYW5kIGNhY2hlIHRoZSBDU1MgYW5pbWF0aW9uIHNvIHRoYXQgaXQgaXMgaW1tZWRpYXRlbHkgcmVhZHkgdG9cbiAgICogYmUgdXNlZCB3aGVuIGl0IGlzIG5lZWRlZCBpbiB0aGUgZnV0dXJlLiAgVGhlIGZ1bmN0aW9uIHNpZ25hdHVyZSBpc1xuICAgKiBpZGVudGljYWwgdG8ge3sjY3Jvc3NMaW5rXG4gICAqIFwiUmVrYXBpLkRPTVJlbmRlcmVyL3BsYXk6bWV0aG9kXCJ9fXt7L2Nyb3NzTGlua319LiAgVGhpcyBpcyBuZWNlc3NhcnkgdG9cbiAgICogcGxheSBhIENTUyBhbmltYXRpb24gYW5kIHdpbGwgYmUgYXV0b21hdGljYWxseSBjYWxsZWQgZm9yIHlvdSBpZiB5b3UgZG9uJ3RcbiAgICogY2FsbCBpdCBtYW51YWxseSwgYnV0IGNhbGxpbmcgaXQgYWhlYWQgb2YgdGltZSAoc3VjaCBhcyBvbiBwYWdlIGxvYWQpIHdpbGxcbiAgICogcHJldmVudCBhbnkgcGVyY2VpdmVkIGxhZyB3aGVuIGEgQ1NTIGBAa2V5ZnJhbWVgIGFuaW1hdGlvbiBpcyBzdGFydGVkLlxuICAgKiBUaGUgcHJlcmVuZGVyZWQgYW5pbWF0aW9uIGlzIGNhY2hlZCBmb3IgcmV1c2UgdW50aWwgdGhlIHRpbWVsaW5lIG9yIGFcbiAgICoga2V5ZnJhbWUgaXMgbW9kaWZpZWQuXG4gICAqXG4gICAqIEBtZXRob2QgcHJlcmVuZGVyXG4gICAqIEBwYXJhbSB7bnVtYmVyPX0gb3B0X2l0ZXJhdGlvbnMgSG93IG1hbnkgdGltZXMgdGhlIGFuaW1hdGlvbiBzaG91bGQgbG9vcC5cbiAgICogVGhpcyBjYW4gYmUgYG51bGxgIG9yIGAwYCBpZiB5b3Ugd2FudCB0byBsb29wIHRoZSBhbmltYXRpb24gZW5kbGVzc2x5IGJ1dFxuICAgKiBhbHNvIHNwZWNpZnkgYSB2YWx1ZSBmb3IgYG9wdF9mcHNgLlxuICAgKiBAcGFyYW0ge251bWJlcj19IG9wdF9mcHMgSG93IG1hbnkgYEBrZXlmcmFtZXNgIHRvIGdlbmVyYXRlIHBlciBzZWNvbmQgb2ZcbiAgICogdGhlIGFuaW1hdGlvbi4gIEEgaGlnaGVyIHZhbHVlIHJlc3VsdHMgaW4gYSBtb3JlIHByZWNpc2UgQ1NTIGFuaW1hdGlvbixcbiAgICogYnV0IGl0IHdpbGwgdGFrZSBsb25nZXIgdG8gZ2VuZXJhdGUuICBUaGUgZGVmYXVsdCB2YWx1ZSBpcyBgMzBgLiAgWW91XG4gICAqIHNob3VsZCBub3QgbmVlZCB0byBnbyBoaWdoZXIgdGhhbiBgNjBgLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBwcmVyZW5kZXJlZCBDU1Mgc3RyaW5nLiAgWW91IGxpa2VseSB3b24ndCBuZWVkIHRoaXMsXG4gICAqIGFzIGl0IGlzIGFsc28gY2FjaGVkIGludGVybmFsbHkuXG4gICAqL1xuICBET01SZW5kZXJlci5wcm90b3R5cGUucHJlcmVuZGVyID0gZnVuY3Rpb24gKG9wdF9pdGVyYXRpb25zLCBvcHRfZnBzKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhY2hlZENTUyA9IHRoaXMudG9TdHJpbmcoe1xuICAgICAgJ3ZlbmRvcnMnOiBbZ2V0VmVuZG9yUHJlZml4KCldXG4gICAgICAsJ2Zwcyc6IG9wdF9mcHNcbiAgICAgICwnaXRlcmF0aW9ucyc6IG9wdF9pdGVyYXRpb25zXG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFlvdSBjYW4gZGVjb3VwbGUgdHJhbnNmb3JtIGNvbXBvbmVudHMgaW4gb3JkZXIgdG8gYW5pbWF0ZSBlYWNoIHByb3BlcnR5XG4gICAqIHdpdGggaXRzIG93biBlYXNpbmcgY3VydmU6XG4gICAqXG4gICAqICAgICBhY3RvclxuICAgKiAgICAgICAua2V5ZnJhbWUoMCwge1xuICAgKiAgICAgICAgIHRyYW5zbGF0ZVg6ICcwcHgnLFxuICAgKiAgICAgICAgIHRyYW5zbGF0ZVk6ICcwcHgnLFxuICAgKiAgICAgICAgIHJvdGF0ZTogJzBkZWcnXG4gICAqICAgICAgIH0pXG4gICAqICAgICAgIC5rZXlmcmFtZSgxNTAwLCB7XG4gICAqICAgICAgICAgdHJhbnNsYXRlWDogJzIwMHB4JyxcbiAgICogICAgICAgICB0cmFuc2xhdGVZOiAnMjAwcHgnLFxuICAgKiAgICAgICAgIHJvdGF0ZTogJzkwZGVnJ1xuICAgKiAgICAgICB9LCB7XG4gICAqICAgICAgICAgdHJhbnNsYXRlWDogJ2Vhc2VPdXRFeHBvJyxcbiAgICogICAgICAgICB0cmFuc2xhdGVZOiAnZWFzZUluU2luZScsXG4gICAqICAgICAgICAgcm90YXRlOiAnZWxhc3RpYydcbiAgICogICAgICAgfSk7XG4gICAqXG4gICAqIENTUyB0cmFuc2Zvcm0gc3RyaW5nIGNvbXBvbmVudHMgYXJlIG9yZGVyLWRlcGVuZGVudCwgYnV0IEphdmFTY3JpcHQgb2JqZWN0XG4gICAqIHByb3BlcnRpZXMgaGF2ZSBhbiB1bnByZWRpY3RhYmxlIG9yZGVyLiAgUmVrYXBpIG11c3QgY29tYmluZSB0cmFuc2Zvcm1cbiAgICogcHJvcGVydGllcyBzdXBwbGllZCB0byBge3sjY3Jvc3NMaW5rXG4gICAqIFwiUmVrYXBpLkFjdG9yL2tleWZyYW1lOm1ldGhvZFwifX17ey9jcm9zc0xpbmt9fWAgKGFzIHNob3duIGFib3ZlKSBpbnRvIGFcbiAgICogc2luZ2xlIHN0cmluZyB3aGVuIGl0IHJlbmRlcnMgZWFjaCBmcmFtZS4gIFRoaXMgbWV0aG9kIGxldHMgeW91IGNoYW5nZVxuICAgKiB0aGF0IG9yZGVyIGZyb20gdGhlIGRlZmF1bHQuICBUaGUgc3VwcG9ydGVkIGFycmF5IHZhbHVlcyBmb3JcbiAgICogYG9yZGVyZWRUcmFuc2Zvcm1zYCBhcmU6XG4gICAqXG4gICAqIC0gYHRyYW5zbGF0ZVhgXG4gICAqIC0gYHRyYW5zbGF0ZVlgXG4gICAqIC0gYHRyYW5zbGF0ZVpgXG4gICAqIC0gYHNjYWxlYFxuICAgKiAtIGBzY2FsZVhgXG4gICAqIC0gYHNjYWxlWWBcbiAgICogLSBgcm90YXRlYFxuICAgKiAtIGBza2V3WGBcbiAgICogLSBgc2tld1lgXG4gICAqXG4gICAqIElmIHlvdSBwcmVmZXIgYSBtb3JlIHN0YW5kYXJkcy1vcmllbnRlZCBhcHByb2FjaCwgUmVrYXBpIGFsc28gc3VwcG9ydHNcbiAgICogY29tYmluaW5nIHRoZSB0cmFuc2Zvcm0gY29tcG9uZW50cyB5b3Vyc2VsZjpcbiAgICpcbiAgICogICAgIGFjdG9yXG4gICAqICAgICAgIC5rZXlmcmFtZSgwLCB7XG4gICAqICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwcHgpIHRyYW5zbGF0ZVkoMHB4KSByb3RhdGUoMGRlZyknXG4gICAqICAgICAgIH0pXG4gICAqICAgICAgIC5rZXlmcmFtZSgxNTAwLCB7XG4gICAqICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgyMDBweCkgdHJhbnNsYXRlWSgyMDBweCkgcm90YXRlKDkwZGVnKSdcbiAgICogICAgICAgfSwge1xuICAgKiAgICAgICAgIHRyYW5zZm9ybTogJ2Vhc2VPdXRFeHBvIGVhc2VJblNpbmUgZWxhc3RpYydcbiAgICogICAgICAgfSk7XG4gICAqXG4gICAqIFRoaXMgZXhhbXBsZSBhbmQgdGhlIG9uZSBhYm92ZSBpdCBhcmUgZXF1aXZhbGVudC5cbiAgICpcbiAgICogX19Ob3RlX186IFRoZSBkZWNvdXBsZWQgZm9ybSBvZiBgdHJhbnNmb3JtYCBhbmltYXRpb25zIGlzIG5vdCBzdXBwb3J0ZWQgaW5cbiAgICogQ1NTIGBAa2V5ZnJhbWVgIGFuaW1hdGlvbnMsIG9ubHkgaW5saW5lIHN0eWxlIGFuaW1hdGlvbnMuICBUaGlzIGlzIGR1ZSB0b1xuICAgKiB0aGUgdGlnaHRseS1jb3VwbGVkIG5hdHVyZSBvZiB0aGUgQ1NTIGBAa2V5ZnJhbWVzYCBzcGVjLiAgSWYgeW91IGludGVuZCB0b1xuICAgKiBwbGF5IGEgQ1NTLWJhc2VkIGBAa2V5ZnJhbWVgIGFuaW1hdGlvbiwgX19kbyBub3RfXyB1c2UgdGhlIG5vbi1zdGFuZGFyZFxuICAgKiBkZWNvdXBsZWQgQVBJIGZvcm0gZm9yIGB0cmFuc2Zvcm1gIHByb3BlcnRpZXMuXG4gICAqXG4gICAqIEBtZXRob2Qgc2V0QWN0b3JUcmFuc2Zvcm1PcmRlclxuICAgKiBAcGFyYW0ge1Jla2FwaS5BY3Rvcn0gYWN0b3JcbiAgICogQHBhcmFtIHtBcnJheShzdHJpbmcpfSBvcmRlcmVkVHJhbnNmb3JtcyBUaGUgYXJyYXkgb2YgdHJhbnNmb3JtIG5hbWVzLlxuICAgKiBAcmV0dXJuIHtSZWthcGl9XG4gICAqL1xuICBET01SZW5kZXJlci5wcm90b3R5cGUuc2V0QWN0b3JUcmFuc2Zvcm1PcmRlciA9XG4gICAgICBmdW5jdGlvbiAoYWN0b3IsIG9yZGVyZWRUcmFuc2Zvcm1zKSB7XG4gICAgLy8gVE9ETzogRG9jdW1lbnQgdGhpcyBiZXR0ZXIuLi5cbiAgICB2YXIgdW5rbm93bkZ1bmN0aW9ucyA9IF8ucmVqZWN0KG9yZGVyZWRUcmFuc2Zvcm1zLCBpc1RyYW5zZm9ybUZ1bmN0aW9uKTtcblxuICAgIGlmICh1bmtub3duRnVuY3Rpb25zLmxlbmd0aCkge1xuICAgICAgdGhyb3cgJ1Vua25vd24gb3IgdW5zdXBwb3J0ZWQgdHJhbnNmb3JtIGZ1bmN0aW9uczogJyArXG4gICAgICAgIHVua25vd25GdW5jdGlvbnMuam9pbignLCAnKTtcbiAgICB9XG4gICAgLy8gSWdub3JlIGR1cGxpY2F0ZSB0cmFuc2Zvcm0gZnVuY3Rpb24gbmFtZXMgaW4gdGhlIGFycmF5XG4gICAgYWN0b3IuX3RyYW5zZm9ybU9yZGVyID0gXy51bmlxKG9yZGVyZWRUcmFuc2Zvcm1zKTtcblxuICAgIHJldHVybiB0aGlzLnJla2FwaTtcbiAgfTtcblxuICAvKipcbiAgICogQG1ldGhvZCBnZXRBY3RvckNsYXNzTmFtZVxuICAgKiBAcGFyYW0ge1Jla2FwaS5BY3Rvcn0gYWN0b3JcbiAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgZGVmYXVsdCBDU1MgY2xhc3MgdGhhdCBpcyB0YXJnZXRlZCBieSBge3sjY3Jvc3NMaW5rXG4gICAqIFwiUmVrYXBpLkRPTVJlbmRlcmVyL3RvU3RyaW5nOm1ldGhvZFwifX17ey9jcm9zc0xpbmt9fWAgaWYgYSBjdXN0b20gY2xhc3MgaXNcbiAgICogbm90IHNwZWNpZmllZC4gIFRoaXMgbWF5IGJlIHVzZWZ1bCBmb3IgZ2V0dGluZyBhIHN0YW5kYXJkIGFuZCBjb25zaXN0ZW50XG4gICAqIENTUyBjbGFzcyBuYW1lIGZvciBhbiBhY3RvcidzIERPTSBlbGVtZW50LlxuICAgKi9cbiAgRE9NUmVuZGVyZXIuZ2V0QWN0b3JDbGFzc05hbWUgPSBmdW5jdGlvbiAoYWN0b3IpIHtcbiAgICByZXR1cm4gJ2FjdG9yLScgKyBhY3Rvci5pZDtcbiAgfTtcblxuICAvKipcbiAgICogQ29udmVydHMgUmVrYXBpIGFuaW1hdGlvbnMgdG8gQ1NTIGBAa2V5ZnJhbWVzYC5cbiAgICogQG1ldGhvZCB0b1N0cmluZ1xuICAgKiBAcGFyYW0ge09iamVjdD19IG9wdHNcbiAgICogICAqIF9fdmVuZG9yc19fIF8oQXJyYXkoc3RyaW5nKSlfOiBEZWZhdWx0cyB0byBgWyd3MyddYC4gIFRoZSBicm93c2VyIHZlbmRvcnMgeW91XG4gICAqICAgd2FudCB0byBzdXBwb3J0LiBWYWxpZCB2YWx1ZXMgYXJlOlxuICAgKiAgICAgKiBgJ21pY3Jvc29mdCdgXG4gICAqICAgICAqIGAnbW96aWxsYSdgXG4gICAqICAgICAqIGAnb3BlcmEnYFxuICAgKiAgICAgKiBgJ3czJ2BcbiAgICogICAgICogYCd3ZWJraXQnYFxuICAgKlxuICAgKlxuICAgKiAgICogX19mcHNfXyBfKG51bWJlcilfOiBEZWZhdWx0cyB0byAzMC4gIERlZmluZXMgdGhlIG51bWJlciBvZiBDU1NcbiAgICogICBgQGtleWZyYW1lYCBmcmFtZXMgcmVuZGVyZWQgcGVyIHNlY29uZCBvZiBhbiBhbmltYXRpb24uICBDU1MgYEBrZXlmcmFtZXNgXG4gICAqICAgYXJlIGNvbXByaXNlZCBvZiBhIHNlcmllcyBvZiBleHBsaWNpdGx5IGRlZmluZWQgc3RlcHMsIGFuZCBtb3JlIHN0ZXBzXG4gICAqICAgd2lsbCBhbGxvdyBmb3IgYSBtb3JlIGNvbXBsZXggYW5pbWF0aW9uLiAgTW9yZSBzdGVwcyB3aWxsIGFsc28gcmVzdWx0IGluXG4gICAqICAgYSBsYXJnZXIgQ1NTIHN0cmluZywgYW5kIG1vcmUgdGltZSBuZWVkZWQgdG8gZ2VuZXJhdGUgdGhlIHN0cmluZy5cbiAgICogICAqIF9fbmFtZV9fIF8oc3RyaW5nKV86IERlZmluZSBhIGN1c3RvbSBuYW1lIGZvciB5b3VyIGFuaW1hdGlvbi4gIFRoaXNcbiAgICogICBiZWNvbWVzIHRoZSBjbGFzcyBuYW1lIHRhcmdldGVkIGJ5IHRoZSBnZW5lcmF0ZWQgQ1NTLiAgVGhlIGRlZmF1bHQgdmFsdWVcbiAgICogICBpcyBkZXRlcm1pbmVkIGJ5IGEgY2FsbCB0byB7eyNjcm9zc0xpbmtcbiAgICogICBcIlJla2FwaS5ET01SZW5kZXJlci9nZXRBY3RvckNsYXNzTmFtZTptZXRob2RcIn19e3svY3Jvc3NMaW5rfX0uXG4gICAqICAgKiBfX2lzQ2VudGVyZWRfXyBfKGJvb2xlYW4pXzogSWYgYHRydWVgLCB0aGUgZ2VuZXJhdGVkIENTUyB3aWxsIGNvbnRhaW5cbiAgICogICBgdHJhbnNmb3JtLW9yaWdpbjogMCAwO2AsIHdoaWNoIGNlbnRlcnMgdGhlIERPTSBlbGVtZW50IGFsb25nIHRoZSBwYXRoIG9mXG4gICAqICAgbW90aW9uLiAgSWYgYGZhbHNlYCBvciBvbWl0dGVkLCBubyBgdHJhbnNmb3JtLW9yaWdpbmAgcnVsZSBpcyBzcGVjaWZpZWRcbiAgICogICBhbmQgdGhlIGVsZW1lbnQgaXMgYWxpZ25lZCB0byB0aGUgcGF0aCBvZiBtb3Rpb24gd2l0aCBpdHMgdG9wLWxlZnRcbiAgICogICBjb3JuZXIuXG4gICAqICAgKiBfX2l0ZXJhdGlvbnNfXyBfKG51bWJlcilfOiBIb3cgbWFueSB0aW1lcyB0aGUgZ2VuZXJhdGVkIGFuaW1hdGlvblxuICAgKiAgIHNob3VsZCByZXBlYXQuICBJZiBvbWl0dGVkLCB0aGUgYW5pbWF0aW9uIHdpbGwgbG9vcCBpbmRlZmluaXRlbHkuXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIFJla2FwaS5ET01SZW5kZXJlci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAob3B0cykge1xuICAgIG9wdHMgPSBvcHRzIHx8IHt9O1xuICAgIHZhciBhbmltYXRpb25DU1MgPSBbXTtcblxuICAgIF8uZWFjaCh0aGlzLnJla2FwaS5nZXRBbGxBY3RvcnMoKSwgZnVuY3Rpb24gKGFjdG9yKSB7XG4gICAgICBpZiAoYWN0b3IuY29udGV4dC5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgICBhbmltYXRpb25DU1MucHVzaChnZXRBY3RvckNTUyhhY3Rvciwgb3B0cykpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGFuaW1hdGlvbkNTUy5qb2luKCdcXG4nKTtcbiAgfTtcblxuICAvLyBET01SZW5kZXJlci5wcm90b3R5cGUudG9TdHJpbmctU1BFQ0lGSUMgQ09ERVxuICAvL1xuXG4gIC8vIENPTlNUQU5UU1xuICAvL1xuXG4gIHZhciBERUZBVUxUX0ZQUyA9IDMwO1xuICB2YXIgVFJBTlNGT1JNX1RPS0VOID0gJ1RSQU5TRk9STSc7XG4gIHZhciBWRU5ET1JfVE9LRU4gPSAnVkVORE9SJztcbiAgdmFyIFZFTkRPUl9QUkVGSVhFUyA9IHtcbiAgICAnbWljcm9zb2Z0JzogJy1tcy0nXG4gICAgLCdtb3ppbGxhJzogJy1tb3otJ1xuICAgICwnb3BlcmEnOiAnLW8tJ1xuICAgICwndzMnOiAnJ1xuICAgICwnd2Via2l0JzogJy13ZWJraXQtJ1xuICB9O1xuICB2YXIgQkVaSUVSUyA9IHtcbiAgICBsaW5lYXI6ICcuMjUsLjI1LC43NSwuNzUnXG4gICAgLGVhc2VJblF1YWQ6ICcuNTUsLjA4NSwuNjgsLjUzJ1xuICAgICxlYXNlSW5DdWJpYzogJy41NSwuMDU1LC42NzUsLjE5J1xuICAgICxlYXNlSW5RdWFydDogJy44OTUsLjAzLC42ODUsLjIyJ1xuICAgICxlYXNlSW5RdWludDogJy43NTUsLjA1LC44NTUsLjA2J1xuICAgICxlYXNlSW5TaW5lOiAnLjQ3LDAsLjc0NSwuNzE1J1xuICAgICxlYXNlSW5FeHBvOiAnLjk1LC4wNSwuNzk1LC4wMzUnXG4gICAgLGVhc2VJbkNpcmM6ICcuNiwuMDQsLjk4LCAuMzM1J1xuICAgICxlYXNlT3V0UXVhZDogJy4yNSwuNDYsLjQ1LC45NCdcbiAgICAsZWFzZU91dEN1YmljOiAnLjIxNSwuNjEsLjM1NSwxJ1xuICAgICxlYXNlT3V0UXVhcnQ6ICcuMTY1LC44NCwuNDQsMSdcbiAgICAsZWFzZU91dFF1aW50OiAnLjIzLDEsLjMyLDEnXG4gICAgLGVhc2VPdXRTaW5lOiAnLjM5LC41NzUsLjU2NSwxJ1xuICAgICxlYXNlT3V0RXhwbzogJy4xOSwxLC4yMiwxJ1xuICAgICxlYXNlT3V0Q2lyYzogJy4wNzUsLjgyLC4xNjUsMSdcbiAgICAsZWFzZUluT3V0UXVhZDogJy40NTUsLjAzLC41MTUsLjk1NSdcbiAgICAsZWFzZUluT3V0Q3ViaWM6ICcuNjQ1LC4wNDUsLjM1NSwxJ1xuICAgICxlYXNlSW5PdXRRdWFydDogJy43NywwLC4xNzUsMSdcbiAgICAsZWFzZUluT3V0UXVpbnQ6ICcuODYsMC4wNywxJ1xuICAgICxlYXNlSW5PdXRTaW5lOiAnLjQ0NSwuMDUsLjU1LC45NSdcbiAgICAsZWFzZUluT3V0RXhwbzogJzEsMCwwLDEnXG4gICAgLGVhc2VJbk91dENpcmM6ICcuNzg1LC4xMzUsLjE1LC44NidcbiAgfTtcblxuICAvLyBURU1QTEFURVNcbiAgLy9cblxuICAvKiFcbiAgICogWzBdOiB2ZW5kb3JcbiAgICogWzFdOiBhbmltYXRpb24gbmFtZVxuICAgKiBbMl06IGtleWZyYW1lc1xuICAgKi9cbiAgdmFyIEtFWUZSQU1FX1RFTVBMQVRFID0gW1xuICAgICdAJXNrZXlmcmFtZXMgJXMta2V5ZnJhbWVzIHsnXG4gICAgLCclcydcbiAgICAsJ30nXG4gIF0uam9pbignXFxuJyk7XG5cbiAgLyohXG4gICAqIFswXSBjbGFzcyBuYW1lXG4gICAqIFsxXSBjbGFzcyBhdHRyaWJ1dGVzXG4gICAqL1xuICB2YXIgQ0xBU1NfQk9JTEVSUExBVEUgPSBbXG4gICAgJy4lcyB7J1xuICAgICwnJXMnXG4gICAgLCd9J1xuICBdLmpvaW4oJ1xcbicpO1xuXG4gIC8qIVxuICAgKiBDcmVhdGVzIHRoZSBDU1MgYEBrZXlmcmFtZXNgIGZvciBhbiBpbmRpdmlkdWFsIGFjdG9yLlxuICAgKiBAcGFyYW0ge1Jla2FwaS5BY3Rvcn0gYWN0b3JcbiAgICogQHBhcmFtIHtPYmplY3Q9fSBvcHRzIFNhbWUgYXMgb3B0cyBmb3IgUmVrYXBpLnByb3RvdHlwZS50b0NTUy5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0QWN0b3JDU1MgKGFjdG9yLCBvcHRzKSB7XG4gICAgb3B0cyA9IG9wdHMgfHwge307XG4gICAgdmFyIGFjdG9yQ1NTID0gW107XG4gICAgdmFyIGFuaW1OYW1lID0gb3B0cy5uYW1lIHx8IERPTVJlbmRlcmVyLmdldEFjdG9yQ2xhc3NOYW1lKGFjdG9yKTtcbiAgICB2YXIgZnBzID0gb3B0cy5mcHMgfHwgREVGQVVMVF9GUFM7XG4gICAgdmFyIHN0ZXBzID0gTWF0aC5jZWlsKChhY3Rvci5yZWthcGkuZ2V0QW5pbWF0aW9uTGVuZ3RoKCkgLyAxMDAwKSAqIGZwcyk7XG4gICAgdmFyIGNvbWJpbmVQcm9wZXJ0aWVzID0gIWNhbk9wdGltaXplQW55S2V5ZnJhbWVQcm9wZXJ0aWVzKGFjdG9yKTtcbiAgICB2YXIgYWN0b3JDbGFzcyA9IGdlbmVyYXRlQ1NTQ2xhc3MoXG4gICAgICAgIGFjdG9yLCBhbmltTmFtZSwgY29tYmluZVByb3BlcnRpZXMsIG9wdHMudmVuZG9ycywgb3B0cy5pdGVyYXRpb25zLFxuICAgICAgICBvcHRzLmlzQ2VudGVyZWQpO1xuICAgIHZhciBib2lsZXJwbGF0ZWRLZXlmcmFtZXMgPSBnZW5lcmF0ZUJvaWxlcnBsYXRlZEtleWZyYW1lcyhcbiAgICAgICAgYWN0b3IsIGFuaW1OYW1lLCBzdGVwcywgY29tYmluZVByb3BlcnRpZXMsIG9wdHMudmVuZG9ycyk7XG5cbiAgICBhY3RvckNTUy5wdXNoKGFjdG9yQ2xhc3MpO1xuICAgIGFjdG9yQ1NTLnB1c2goYm9pbGVycGxhdGVkS2V5ZnJhbWVzKTtcblxuICAgIHJldHVybiBhY3RvckNTUy5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIC8vIHRvU3RyaW5nLVNQRUNJRklDIFBSSVZBVEUgVVRJTElUWSBGVU5DVElPTlNcbiAgLy9cblxuICAvKiFcbiAgICogQHBhcmFtIHtSZWthcGkuQWN0b3J9IGFjdG9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhbmltTmFtZVxuICAgKiBAcGFyYW0ge251bWJlcn0gc3RlcHNcbiAgICogQHBhcmFtIHtib29sZWFufSBjb21iaW5lUHJvcGVydGllc1xuICAgKiBAcGFyYW0ge0FycmF5LjxzdHJpbmc+PX0gb3B0X3ZlbmRvcnNcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZnVuY3Rpb24gZ2VuZXJhdGVCb2lsZXJwbGF0ZWRLZXlmcmFtZXMgKFxuICAgICAgYWN0b3IsIGFuaW1OYW1lLCBzdGVwcywgY29tYmluZVByb3BlcnRpZXMsIG9wdF92ZW5kb3JzKSB7XG5cbiAgICB2YXIgdHJhY2tOYW1lcyA9IGFjdG9yLmdldFRyYWNrTmFtZXMoKTtcbiAgICB2YXIgY3NzVHJhY2tzID0gW107XG5cbiAgICBpZiAoY29tYmluZVByb3BlcnRpZXMpIHtcbiAgICAgIGNzc1RyYWNrcy5wdXNoKGdlbmVyYXRlQ29tYmluZWRBY3RvcktleWZyYW1lcyhhY3Rvciwgc3RlcHMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgXy5lYWNoKHRyYWNrTmFtZXMsIGZ1bmN0aW9uICh0cmFja05hbWUpIHtcbiAgICAgICAgY3NzVHJhY2tzLnB1c2goXG4gICAgICAgICAgZ2VuZXJhdGVBY3RvcktleWZyYW1lcyhhY3Rvciwgc3RlcHMsIHRyYWNrTmFtZSkpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIGJvaWxlcnBsYXRlZEtleWZyYW1lcyA9IFtdO1xuXG4gICAgaWYgKGNvbWJpbmVQcm9wZXJ0aWVzKSB7XG4gICAgICBib2lsZXJwbGF0ZWRLZXlmcmFtZXMucHVzaChhcHBseVZlbmRvckJvaWxlcnBsYXRlcyhcbiAgICAgICAgY3NzVHJhY2tzWzBdLCAoYW5pbU5hbWUpLCBvcHRfdmVuZG9ycykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBfLmVhY2godHJhY2tOYW1lcywgZnVuY3Rpb24gKHRyYWNrTmFtZSwgaSkge1xuICAgICAgICBib2lsZXJwbGF0ZWRLZXlmcmFtZXMucHVzaChhcHBseVZlbmRvckJvaWxlcnBsYXRlcyhcbiAgICAgICAgICBjc3NUcmFja3NbaV0sIChhbmltTmFtZSArICctJyArIHRyYWNrTmFtZSksIG9wdF92ZW5kb3JzKSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBib2lsZXJwbGF0ZWRLZXlmcmFtZXMgPSBib2lsZXJwbGF0ZWRLZXlmcmFtZXMuam9pbignXFxuJyk7XG5cbiAgICByZXR1cm4gYm9pbGVycGxhdGVkS2V5ZnJhbWVzO1xuICB9XG5cbiAgLyohXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0b0tleWZyYW1lcyBHZW5lcmF0ZWQga2V5ZnJhbWVzIHRvIHdyYXAgaW4gYm9pbGVycGxhdGVzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhbmltTmFtZVxuICAgKiBAcGFyYW0ge0FycmF5LjxzdHJpbmc+PX0gb3B0X3ZlbmRvcnMgVmVuZG9yIGJvaWxlcnBsYXRlcyB0byBiZSBhcHBsaWVkLlxuICAgKiAgICAgU2hvdWxkIGJlIGFueSBvZiB0aGUgdmFsdWVzIGluIFJla2FwaS51dGlsLlZFTkRPUl9QUkVGSVhFUy5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZnVuY3Rpb24gYXBwbHlWZW5kb3JCb2lsZXJwbGF0ZXMgKHRvS2V5ZnJhbWVzLCBhbmltTmFtZSwgb3B0X3ZlbmRvcnMpIHtcbiAgICBvcHRfdmVuZG9ycyA9IG9wdF92ZW5kb3JzIHx8IFsndzMnXTtcbiAgICB2YXIgcmVuZGVyZWRLZXlmcmFtZXMgPSBbXTtcblxuICAgIF8uZWFjaChvcHRfdmVuZG9ycywgZnVuY3Rpb24gKHZlbmRvcikge1xuICAgICAgdmFyIHJlbmRlcmVkQ2h1bmsgPSBwcmludGYoS0VZRlJBTUVfVEVNUExBVEUsXG4gICAgICAgICAgW1ZFTkRPUl9QUkVGSVhFU1t2ZW5kb3JdLCBhbmltTmFtZSwgdG9LZXlmcmFtZXNdKTtcbiAgICAgIHZhciBwcmVmaXhlZEtleWZyYW1lcyA9XG4gICAgICAgICAgYXBwbHlWZW5kb3JQcm9wZXJ0eVByZWZpeGVzKHJlbmRlcmVkQ2h1bmssIHZlbmRvcik7XG4gICAgICByZW5kZXJlZEtleWZyYW1lcy5wdXNoKHByZWZpeGVkS2V5ZnJhbWVzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiByZW5kZXJlZEtleWZyYW1lcy5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIC8qIVxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5ZnJhbWVzXG4gICAqIEBwYXJhbSB7dmVuZG9yfSB2ZW5kb3JcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZnVuY3Rpb24gYXBwbHlWZW5kb3JQcm9wZXJ0eVByZWZpeGVzIChrZXlmcmFtZXMsIHZlbmRvcikge1xuICAgIHZhciB0cmFuc2Zvcm1SZWdFeHAgPSBuZXcgUmVnRXhwKFRSQU5TRk9STV9UT0tFTiwgJ2cnKTtcbiAgICB2YXIgcHJlZml4ZWRUcmFuc2Zvcm1LZXkgPSBWRU5ET1JfUFJFRklYRVNbdmVuZG9yXSArICd0cmFuc2Zvcm0nO1xuICAgIHZhciBnZW5lcmFsUHJlZml4UmVnRXhwID0gbmV3IFJlZ0V4cChWRU5ET1JfVE9LRU4sICdnJyk7XG4gICAgdmFyIGdlbmVyYWxQcmVmaXhlZEtleSA9IFZFTkRPUl9QUkVGSVhFU1t2ZW5kb3JdO1xuICAgIHZhciBwcmVmaXhlZEtleWZyYW1lcyA9IGtleWZyYW1lc1xuICAgICAgICAucmVwbGFjZShnZW5lcmFsUHJlZml4UmVnRXhwLCBnZW5lcmFsUHJlZml4ZWRLZXkpXG4gICAgICAgIC5yZXBsYWNlKHRyYW5zZm9ybVJlZ0V4cCwgcHJlZml4ZWRUcmFuc2Zvcm1LZXkpO1xuXG4gICAgcmV0dXJuIHByZWZpeGVkS2V5ZnJhbWVzO1xuICB9XG5cbiAgLyohXG4gICAqIEBwYXJhbSB7UmVrYXBpLkFjdG9yfSBhY3RvclxuICAgKiBAcGFyYW0ge3N0cmluZ30gYW5pbU5hbWVcbiAgICogQHBhcmFtIHtib29sZWFufSBjb21iaW5lUHJvcGVydGllc1xuICAgKiBAcGFyYW0ge0FycmF5LjxzdHJpbmc+PX0gb3B0X3ZlbmRvcnNcbiAgICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nPX0gb3B0X2l0ZXJhdGlvbnNcbiAgICogQHBhcmFtIHtib29sZWFuPX0gb3B0X2lzQ2VudGVyZWRcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZnVuY3Rpb24gZ2VuZXJhdGVDU1NDbGFzcyAoXG4gICAgICBhY3RvciwgYW5pbU5hbWUsIGNvbWJpbmVQcm9wZXJ0aWVzLCBvcHRfdmVuZG9ycywgb3B0X2l0ZXJhdGlvbnMsXG4gICAgICBvcHRfaXNDZW50ZXJlZCkge1xuXG4gICAgb3B0X3ZlbmRvcnMgPSBvcHRfdmVuZG9ycyB8fCBbJ3czJ107XG4gICAgdmFyIGNsYXNzQXR0cnMgPSBbXTtcbiAgICB2YXIgdmVuZG9yQXR0cnM7XG5cbiAgICBfLmVhY2gob3B0X3ZlbmRvcnMsIGZ1bmN0aW9uICh2ZW5kb3IpIHtcbiAgICAgIHZlbmRvckF0dHJzID0gZ2VuZXJhdGVDU1NBbmltYXRpb25Qcm9wZXJ0aWVzKFxuICAgICAgICAgIGFjdG9yLCBhbmltTmFtZSwgdmVuZG9yLCBjb21iaW5lUHJvcGVydGllcywgb3B0X2l0ZXJhdGlvbnMsXG4gICAgICAgICAgb3B0X2lzQ2VudGVyZWQpO1xuICAgICAgY2xhc3NBdHRycy5wdXNoKHZlbmRvckF0dHJzKTtcbiAgICB9KTtcblxuICAgIHZhciBib2lsZXJwbGF0ZWRDbGFzcyA9IHByaW50ZihDTEFTU19CT0lMRVJQTEFURVxuICAgICAgICAsW2FuaW1OYW1lLCBjbGFzc0F0dHJzLmpvaW4oJ1xcbicpXSk7XG5cbiAgICByZXR1cm4gYm9pbGVycGxhdGVkQ2xhc3M7XG4gIH1cblxuICAvKiFcbiAgICogQHBhcmFtIHtSZWthcGkuQWN0b3J9IGFjdG9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhbmltTmFtZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmVuZG9yXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gY29tYmluZVByb3BlcnRpZXNcbiAgICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nPX0gb3B0X2l0ZXJhdGlvbnNcbiAgICogQHBhcmFtIHtib29sZWFuPX0gb3B0X2lzQ2VudGVyZWRcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZnVuY3Rpb24gZ2VuZXJhdGVDU1NBbmltYXRpb25Qcm9wZXJ0aWVzIChcbiAgICAgIGFjdG9yLCBhbmltTmFtZSwgdmVuZG9yLCBjb21iaW5lUHJvcGVydGllcywgb3B0X2l0ZXJhdGlvbnMsXG4gICAgICBvcHRfaXNDZW50ZXJlZCkge1xuICAgIHZhciBnZW5lcmF0ZWRQcm9wZXJ0aWVzID0gW107XG4gICAgdmFyIHByZWZpeCA9IFZFTkRPUl9QUkVGSVhFU1t2ZW5kb3JdO1xuXG4gICAgZ2VuZXJhdGVkUHJvcGVydGllcy5wdXNoKGdlbmVyYXRlQW5pbWF0aW9uTmFtZVByb3BlcnR5KFxuICAgICAgICAgIGFjdG9yLCBhbmltTmFtZSwgcHJlZml4LCBjb21iaW5lUHJvcGVydGllcykpO1xuICAgIGdlbmVyYXRlZFByb3BlcnRpZXMucHVzaChcbiAgICAgICAgZ2VuZXJhdGVBbmltYXRpb25EdXJhdGlvblByb3BlcnR5KGFjdG9yLCBwcmVmaXgpKTtcbiAgICBnZW5lcmF0ZWRQcm9wZXJ0aWVzLnB1c2goZ2VuZXJhdGVBbmltYXRpb25EZWxheVByb3BlcnR5KGFjdG9yLCBwcmVmaXgpKTtcbiAgICBnZW5lcmF0ZWRQcm9wZXJ0aWVzLnB1c2goZ2VuZXJhdGVBbmltYXRpb25GaWxsTW9kZVByb3BlcnR5KHByZWZpeCkpO1xuICAgIGdlbmVyYXRlZFByb3BlcnRpZXMucHVzaChnZW5lcmF0ZUFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uUHJvcGVydHkocHJlZml4KSk7XG4gICAgZ2VuZXJhdGVkUHJvcGVydGllcy5wdXNoKGdlbmVyYXRlQW5pbWF0aW9uSXRlcmF0aW9uUHJvcGVydHkoXG4gICAgICAgIGFjdG9yLnJla2FwaSwgcHJlZml4LCBvcHRfaXRlcmF0aW9ucykpO1xuXG4gICAgaWYgKG9wdF9pc0NlbnRlcmVkKSB7XG4gICAgICBnZW5lcmF0ZWRQcm9wZXJ0aWVzLnB1c2goZ2VuZXJhdGVBbmltYXRpb25DZW50ZXJpbmdSdWxlKHByZWZpeCkpO1xuICAgIH1cblxuICAgIHJldHVybiBnZW5lcmF0ZWRQcm9wZXJ0aWVzLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgLyohXG4gICAqIEBwYXJhbSB7UmVrYXBpLkFjdG9yfSBhY3RvclxuICAgKiBAcGFyYW0ge3N0cmluZ30gYW5pbU5hbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHByZWZpeFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGNvbWJpbmVQcm9wZXJ0aWVzXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGZ1bmN0aW9uIGdlbmVyYXRlQW5pbWF0aW9uTmFtZVByb3BlcnR5IChcbiAgICAgIGFjdG9yLCBhbmltTmFtZSwgcHJlZml4LCBjb21iaW5lUHJvcGVydGllcykge1xuXG4gICAgdmFyIGFuaW1hdGlvbk5hbWUgPSBwcmludGYoJyAgJXNhbmltYXRpb24tbmFtZTonLCBbcHJlZml4XSk7XG5cbiAgICB2YXIgdHJhY2tzID0gYWN0b3IuZ2V0VHJhY2tOYW1lcygpO1xuXG4gICAgaWYgKGNvbWJpbmVQcm9wZXJ0aWVzKSB7XG4gICAgICBhbmltYXRpb25OYW1lICs9IHByaW50ZignICVzLWtleWZyYW1lczsnLCBbYW5pbU5hbWVdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgXy5lYWNoKHRyYWNrcywgZnVuY3Rpb24gKHRyYWNrTmFtZSkge1xuICAgICAgICBhbmltYXRpb25OYW1lICs9IHByaW50ZignICVzLSVzLWtleWZyYW1lcywnLCBbYW5pbU5hbWUsIHRyYWNrTmFtZV0pO1xuICAgICAgfSk7XG4gICAgICBhbmltYXRpb25OYW1lID0gYW5pbWF0aW9uTmFtZS5zbGljZSgwLCBhbmltYXRpb25OYW1lLmxlbmd0aCAtIDEpO1xuICAgICAgYW5pbWF0aW9uTmFtZSArPSAnOyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFuaW1hdGlvbk5hbWU7XG4gIH1cblxuICAvKiFcbiAgICogQHBhcmFtIHtSZWthcGkuQWN0b3J9IGFjdG9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhbmltTmFtZVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBmdW5jdGlvbiBnZW5lcmF0ZUFuaW1hdGlvbkR1cmF0aW9uUHJvcGVydHkgKGFjdG9yLCBwcmVmaXgpIHtcbiAgICByZXR1cm4gcHJpbnRmKCcgICVzYW5pbWF0aW9uLWR1cmF0aW9uOiAlc21zOydcbiAgICAgICAgLFtwcmVmaXgsIGFjdG9yLmdldEVuZCgpIC0gYWN0b3IuZ2V0U3RhcnQoKV0pO1xuICB9XG5cbiAgLyohXG4gICAqIEBwYXJhbSB7UmVrYXBpLkFjdG9yfSBhY3RvclxuICAgKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IGRlbGF5XG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGZ1bmN0aW9uIGdlbmVyYXRlQW5pbWF0aW9uRGVsYXlQcm9wZXJ0eSAoYWN0b3IsIHByZWZpeCkge1xuICAgIHJldHVybiBwcmludGYoJyAgJXNhbmltYXRpb24tZGVsYXk6ICVzbXM7JywgW3ByZWZpeCwgYWN0b3IuZ2V0U3RhcnQoKV0pO1xuICB9XG5cbiAgLyohXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwcmVmaXhcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZnVuY3Rpb24gZ2VuZXJhdGVBbmltYXRpb25GaWxsTW9kZVByb3BlcnR5IChwcmVmaXgpIHtcbiAgICByZXR1cm4gcHJpbnRmKCcgICVzYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7JywgW3ByZWZpeF0pO1xuICB9XG5cbiAgLyohXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwcmVmaXhcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZnVuY3Rpb24gZ2VuZXJhdGVBbmltYXRpb25UaW1pbmdGdW5jdGlvblByb3BlcnR5IChwcmVmaXgpIHtcbiAgICByZXR1cm4gcHJpbnRmKCcgICVzYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyOycsIFtwcmVmaXhdKTtcbiAgfVxuXG4gIC8qIVxuICAgKiBAcGFyYW0ge1Jla2FwaX0gcmVrYXBpXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwcmVmaXhcbiAgICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nPX0gb3B0X2l0ZXJhdGlvbnNcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZnVuY3Rpb24gZ2VuZXJhdGVBbmltYXRpb25JdGVyYXRpb25Qcm9wZXJ0eSAocmVrYXBpLCBwcmVmaXgsIG9wdF9pdGVyYXRpb25zKSB7XG4gICAgdmFyIGl0ZXJhdGlvbkNvdW50O1xuICAgIGlmIChvcHRfaXRlcmF0aW9ucykge1xuICAgICAgaXRlcmF0aW9uQ291bnQgPSBvcHRfaXRlcmF0aW9ucztcbiAgICB9IGVsc2Uge1xuICAgICAgaXRlcmF0aW9uQ291bnQgPSByZWthcGkuX3RpbWVzVG9JdGVyYXRlID09PSAtMVxuICAgICAgICA/ICdpbmZpbml0ZSdcbiAgICAgICAgOiByZWthcGkuX3RpbWVzVG9JdGVyYXRlO1xuICAgIH1cblxuICAgIHZhciBydWxlVGVtcGxhdGUgPSAnICAlc2FuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6ICVzOyc7XG5cbiAgICByZXR1cm4gcHJpbnRmKHJ1bGVUZW1wbGF0ZSwgW3ByZWZpeCwgaXRlcmF0aW9uQ291bnRdKTtcbiAgfVxuXG4gIC8qIVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcHJlZml4XG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGZ1bmN0aW9uIGdlbmVyYXRlQW5pbWF0aW9uQ2VudGVyaW5nUnVsZSAocHJlZml4KSB7XG4gICAgcmV0dXJuIHByaW50ZignICAlc3RyYW5zZm9ybS1vcmlnaW46IDAgMDsnLCBbcHJlZml4XSk7XG4gIH1cblxuICAvLyBPUFRJTUlaRUQgT1VUUFVUIEdFTkVSQVRPUiBGVU5DVElPTlNcbiAgLy9cblxuICAvKiFcbiAgICogQHBhcmFtIHtSZWthcGkuS2V5ZnJhbWVQcm9wZXJ0eX0gcHJvcGVydHlcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGZ1bmN0aW9uIGNhbk9wdGltaXplS2V5ZnJhbWVQcm9wZXJ0eSAocHJvcGVydHkpIHtcbiAgICB2YXIgY2FuT3B0aW1pemUgPSBmYWxzZTtcbiAgICB2YXIgbmV4dFByb3BlcnR5ID0gcHJvcGVydHkubmV4dFByb3BlcnR5O1xuXG4gICAgaWYgKG5leHRQcm9wZXJ0eSkge1xuICAgICAgaWYgKGlzU2VnbWVudEFXYWl0KHByb3BlcnR5LCBuZXh0UHJvcGVydHkpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgZWFzaW5nQ2h1bmtzID0gbmV4dFByb3BlcnR5LmVhc2luZy5zcGxpdCgnICcpO1xuXG4gICAgICB2YXIgaSA9IDAsIGxlbiA9IGVhc2luZ0NodW5rcy5sZW5ndGg7XG4gICAgICB2YXIgcHJldmlvdXNDaHVuayA9IGVhc2luZ0NodW5rc1swXTtcbiAgICAgIHZhciBjdXJyZW50Q2h1bms7XG4gICAgICBmb3IgKGk7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBjdXJyZW50Q2h1bmsgPSBlYXNpbmdDaHVua3NbaV07XG4gICAgICAgIGlmICghKEJFWklFUlNbY3VycmVudENodW5rXSlcbiAgICAgICAgICAgIHx8IHByZXZpb3VzQ2h1bmsgIT09IGN1cnJlbnRDaHVuaykge1xuICAgICAgICAgIGNhbk9wdGltaXplID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2FuT3B0aW1pemUgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJldmlvdXNDaHVuayA9IGN1cnJlbnRDaHVuaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY2FuT3B0aW1pemU7XG4gIH1cblxuICAvKiFcbiAgICogQHBhcmFtIHtSZWthcGkuS2V5ZnJhbWVQcm9wZXJ0eX0gcHJvcGVydHlcbiAgICogQHBhcmFtIHtSZWthcGkuS2V5ZnJhbWVQcm9wZXJ0eX0gbmV4dFByb3BlcnR5XG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiBpc1NlZ21lbnRBV2FpdCAocHJvcGVydHksIG5leHRQcm9wZXJ0eSkge1xuICAgIGlmIChwcm9wZXJ0eS5uYW1lID09PSBuZXh0UHJvcGVydHkubmFtZSAmJlxuICAgICAgICBwcm9wZXJ0eS52YWx1ZSA9PT0gbmV4dFByb3BlcnR5LnZhbHVlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKiFcbiAgICogQHBhcmFtIHtSZWthcGkuQWN0b3J9IGFjdG9yXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiBjYW5PcHRpbWl6ZUFueUtleWZyYW1lUHJvcGVydGllcyAoYWN0b3IpIHtcbiAgICByZXR1cm4gXy5hbnkoYWN0b3IuX2tleWZyYW1lUHJvcGVydGllcywgY2FuT3B0aW1pemVLZXlmcmFtZVByb3BlcnR5KTtcbiAgfVxuXG4gIC8qIVxuICAgKiBAcGFyYW0ge1Jla2FwaS5LZXlmcmFtZVByb3BlcnR5fSBwcm9wZXJ0eVxuICAgKiBAcGFyYW0ge251bWJlcn0gZnJvbVBlcmNlbnRcbiAgICogQHBhcmFtIHtudW1iZXJ9IHRvUGVyY2VudFxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBmdW5jdGlvbiBnZW5lcmF0ZU9wdGltaXplZEtleWZyYW1lU2VnbWVudCAoXG4gICAgICBwcm9wZXJ0eSwgZnJvbVBlcmNlbnQsIHRvUGVyY2VudCkge1xuXG4gICAgdmFyIGFjY3VtdWxhdG9yID0gW107XG4gICAgdmFyIGdlbmVyYWxOYW1lID0gcHJvcGVydHkubmFtZTtcblxuICAgIGlmIChwcm9wZXJ0eS5uYW1lID09PSAndHJhbnNmb3JtJykge1xuICAgICAgZ2VuZXJhbE5hbWUgPSBUUkFOU0ZPUk1fVE9LRU47XG4gICAgfVxuXG4gICAgdmFyIGVhc2luZ0Zvcm11bGEgPSBCRVpJRVJTW3Byb3BlcnR5Lm5leHRQcm9wZXJ0eS5lYXNpbmcuc3BsaXQoJyAnKVswXV07XG4gICAgdmFyIHRpbWluZ0ZuQ2h1bmsgPSBwcmludGYoJ2N1YmljLWJlemllciglcyknLCBbZWFzaW5nRm9ybXVsYV0pO1xuXG4gICAgdmFyIGFkanVzdGVkRnJvbVBlcmNlbnQgPSBpc0ludChmcm9tUGVyY2VudCkgP1xuICAgICAgICBmcm9tUGVyY2VudCA6IGZyb21QZXJjZW50LnRvRml4ZWQoMik7XG4gICAgdmFyIGFkanVzdGVkVG9QZXJjZW50ID0gaXNJbnQodG9QZXJjZW50KSA/XG4gICAgICAgIHRvUGVyY2VudCA6IHRvUGVyY2VudC50b0ZpeGVkKDIpO1xuXG4gICAgYWNjdW11bGF0b3IucHVzaChwcmludGYoJyAgJXMlIHslczolczslc2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ICVzO30nLFxuICAgICAgICAgIFthZGp1c3RlZEZyb21QZXJjZW50LCBnZW5lcmFsTmFtZSwgcHJvcGVydHkudmFsdWUsIFZFTkRPUl9UT0tFTlxuICAgICAgICAgICx0aW1pbmdGbkNodW5rXSkpO1xuICAgIGFjY3VtdWxhdG9yLnB1c2gocHJpbnRmKCcgICVzJSB7JXM6JXM7fScsXG4gICAgICAgICAgW2FkanVzdGVkVG9QZXJjZW50LCBnZW5lcmFsTmFtZSwgcHJvcGVydHkubmV4dFByb3BlcnR5LnZhbHVlXSkpO1xuXG4gICAgcmV0dXJuIGFjY3VtdWxhdG9yLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgLy8gVU4tT1BUSU1JWkVEIE9VVFBVVCBHRU5FUkFUT1IgRlVOQ1RJT05TXG4gIC8vXG5cbiAgLyohXG4gICAqIEBwYXJhbSB7UmVrYXBpLkFjdG9yfSBhY3RvclxuICAgKiBAcGFyYW0ge251bWJlcn0gc3RlcHNcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRyYWNrXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGZ1bmN0aW9uIGdlbmVyYXRlQWN0b3JLZXlmcmFtZXMgKGFjdG9yLCBzdGVwcywgdHJhY2spIHtcbiAgICB2YXIgYWNjdW11bGF0b3IgPSBbXTtcbiAgICB2YXIgYWN0b3JFbmQgPSBhY3Rvci5nZXRFbmQoKTtcbiAgICB2YXIgYWN0b3JTdGFydCA9IGFjdG9yLmdldFN0YXJ0KCk7XG4gICAgdmFyIGFjdG9yTGVuZ3RoID0gYWN0b3IuZ2V0TGVuZ3RoKCk7XG4gICAgdmFyIGxlYWRpbmdXYWl0ID0gc2ltdWxhdGVMZWFkaW5nV2FpdChhY3RvciwgdHJhY2ssIGFjdG9yU3RhcnQpO1xuXG4gICAgaWYgKGxlYWRpbmdXYWl0KSB7XG4gICAgICBhY2N1bXVsYXRvci5wdXNoKGxlYWRpbmdXYWl0KTtcbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNTZWdtZW50V2FzT3B0aW1pemVkID0gZmFsc2U7XG4gICAgXy5lYWNoKGFjdG9yLl9wcm9wZXJ0eVRyYWNrc1t0cmFja10sIGZ1bmN0aW9uIChwcm9wLCBwcm9wTmFtZSkge1xuICAgICAgdmFyIGZyb21QZXJjZW50ID0gY2FsY3VsYXRlU3RlcFBlcmNlbnQocHJvcCwgYWN0b3JTdGFydCwgYWN0b3JMZW5ndGgpO1xuICAgICAgdmFyIG5leHRQcm9wID0gcHJvcC5uZXh0UHJvcGVydHk7XG5cbiAgICAgIHZhciB0b1BlcmNlbnQsIGluY3JlbWVudHMsIGluY3JlbWVudFNpemU7XG4gICAgICBpZiAobmV4dFByb3ApIHtcbiAgICAgICAgdG9QZXJjZW50ID0gY2FsY3VsYXRlU3RlcFBlcmNlbnQobmV4dFByb3AsIGFjdG9yU3RhcnQsIGFjdG9yTGVuZ3RoKTtcbiAgICAgICAgdmFyIGRlbHRhID0gdG9QZXJjZW50IC0gZnJvbVBlcmNlbnQ7XG4gICAgICAgIGluY3JlbWVudHMgPSBNYXRoLmZsb29yKChkZWx0YSAvIDEwMCkgKiBzdGVwcykgfHwgMTtcbiAgICAgICAgaW5jcmVtZW50U2l6ZSA9IGRlbHRhIC8gaW5jcmVtZW50cztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvUGVyY2VudCA9IDEwMDtcbiAgICAgICAgaW5jcmVtZW50cyA9IDE7XG4gICAgICAgIGluY3JlbWVudFNpemUgPSAxO1xuICAgICAgfVxuXG4gICAgICB2YXIgdHJhY2tTZWdtZW50O1xuICAgICAgaWYgKG5leHRQcm9wICYmIGlzU2VnbWVudEFXYWl0KHByb3AsIG5leHRQcm9wKSkge1xuICAgICAgICB0cmFja1NlZ21lbnQgPSBnZW5lcmF0ZUFjdG9yVHJhY2tXYWl0U2VnbWVudChcbiAgICAgICAgICAgIGFjdG9yLCBhY3RvclN0YXJ0LCBwcm9wLCBuZXh0UHJvcCwgZnJvbVBlcmNlbnQsIHRvUGVyY2VudCk7XG5cbiAgICAgICAgaWYgKHByZXZpb3VzU2VnbWVudFdhc09wdGltaXplZCkge1xuICAgICAgICAgIHRyYWNrU2VnbWVudC5zaGlmdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJldmlvdXNTZWdtZW50V2FzT3B0aW1pemVkID0gZmFsc2U7XG5cbiAgICAgIH0gZWxzZSBpZiAoY2FuT3B0aW1pemVLZXlmcmFtZVByb3BlcnR5KHByb3ApKSB7XG4gICAgICAgIHRyYWNrU2VnbWVudCA9IGdlbmVyYXRlT3B0aW1pemVkS2V5ZnJhbWVTZWdtZW50KFxuICAgICAgICAgICAgcHJvcCwgZnJvbVBlcmNlbnQsIHRvUGVyY2VudCk7XG5cbiAgICAgICAgLy8gSWYgdGhpcyBhbmQgdGhlIHByZXZpb3VzIHNlZ21lbnQgYXJlIG9wdGltaXplZCwgcmVtb3ZlIHRoZVxuICAgICAgICAvLyBkZXN0aW5hdGlvbiBrZXlmcmFtZSBvZiB0aGUgcHJldmlvdXMgc3RlcC4gIFRoZSBzdGFydGluZyBrZXlmcmFtZSBvZlxuICAgICAgICAvLyB0aGUgbmV3ZXN0IHNlZ21lbnQgbWFrZXMgaXQgcmVkdW5kYW50LlxuICAgICAgICBpZiAocHJldmlvdXNTZWdtZW50V2FzT3B0aW1pemVkKSB7XG4gICAgICAgICAgdmFyIGFjY3VtdWxhdG9yTGVuZ3RoID0gYWNjdW11bGF0b3IubGVuZ3RoO1xuICAgICAgICAgIHZhciBwcmV2aW91c1RyYWNrU2VnbWVudCA9IGFjY3VtdWxhdG9yW2FjY3VtdWxhdG9yTGVuZ3RoIC0gMV07XG4gICAgICAgICAgdmFyIG9wdGltaXplZFByZXZpb3VzVHJhY2tTZWdtZW50ID1cbiAgICAgICAgICAgICAgcHJldmlvdXNUcmFja1NlZ21lbnQuc3BsaXQoJ1xcbicpWzBdO1xuICAgICAgICAgIGFjY3VtdWxhdG9yW2FjY3VtdWxhdG9yTGVuZ3RoIC0gMV0gPSBvcHRpbWl6ZWRQcmV2aW91c1RyYWNrU2VnbWVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHByZXZpb3VzU2VnbWVudFdhc09wdGltaXplZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmFja1NlZ21lbnQgPSBnZW5lcmF0ZUFjdG9yVHJhY2tTZWdtZW50KFxuICAgICAgICAgICAgYWN0b3IsIGluY3JlbWVudHMsIGluY3JlbWVudFNpemUsIGFjdG9yU3RhcnQsIGZyb21QZXJjZW50LCBwcm9wKTtcblxuICAgICAgICBpZiAocHJldmlvdXNTZWdtZW50V2FzT3B0aW1pemVkKSB7XG4gICAgICAgICAgdHJhY2tTZWdtZW50LnNoaWZ0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHJhY2tTZWdtZW50Lmxlbmd0aCkge1xuICAgICAgICAgIHRyYWNrU2VnbWVudCA9IHRyYWNrU2VnbWVudC5qb2luKCdcXG4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByZXZpb3VzU2VnbWVudFdhc09wdGltaXplZCA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHJhY2tTZWdtZW50Lmxlbmd0aCkge1xuICAgICAgICBhY2N1bXVsYXRvci5wdXNoKHRyYWNrU2VnbWVudCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgdHJhaWxpbmdXYWl0ID1cbiAgICAgICAgc2ltdWxhdGVUcmFpbGluZ1dhaXQoYWN0b3IsIHRyYWNrLCBhY3RvclN0YXJ0LCBhY3RvckVuZCk7XG5cbiAgICBpZiAodHJhaWxpbmdXYWl0KSB7XG4gICAgICBhY2N1bXVsYXRvci5wdXNoKHRyYWlsaW5nV2FpdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjY3VtdWxhdG9yLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgLyohXG4gICAqIEBwYXJhbSB7UmVrYXBpLkFjdG9yfSBhY3RvclxuICAgKiBAcGFyYW0ge251bWJlcn0gc3RlcHNcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZnVuY3Rpb24gZ2VuZXJhdGVDb21iaW5lZEFjdG9yS2V5ZnJhbWVzIChhY3Rvciwgc3RlcHMpIHtcbiAgICByZXR1cm4gZ2VuZXJhdGVBY3RvclRyYWNrU2VnbWVudChcbiAgICAgICAgYWN0b3IsIHN0ZXBzICsgMSwgMTAwIC8gc3RlcHMsIDAsIDApLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgLyohXG4gICAqIEBwYXJhbSB7UmVrYXBpLkFjdG9yfSBhY3RvclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHJhY2tcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFjdG9yU3RhcnRcbiAgICogQHJldHVybiB7c3RyaW5nfHVuZGVmaW5lZH1cbiAgICovXG4gIGZ1bmN0aW9uIHNpbXVsYXRlTGVhZGluZ1dhaXQgKGFjdG9yLCB0cmFjaywgYWN0b3JTdGFydCkge1xuICAgIHZhciBmaXJzdFByb3AgPSBhY3Rvci5fcHJvcGVydHlUcmFja3NbdHJhY2tdWzBdO1xuXG4gICAgaWYgKHR5cGVvZiBmaXJzdFByb3AgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICYmIGZpcnN0UHJvcC5taWxsaXNlY29uZCAhPT0gYWN0b3JTdGFydCkge1xuICAgICAgdmFyIGZha2VGaXJzdFByb3AgPSBnZW5lcmF0ZUFjdG9yVHJhY2tTZWdtZW50KFxuICAgICAgICAgIGFjdG9yLCAxLCAxLCBmaXJzdFByb3AubWlsbGlzZWNvbmQsIDAsIGZpcnN0UHJvcCk7XG4gICAgICByZXR1cm4gZmFrZUZpcnN0UHJvcC5qb2luKCdcXG4nKTtcbiAgICB9XG4gIH1cblxuICAvKiFcbiAgICogQHBhcmFtIHtSZWthcGkuQWN0b3J9IGFjdG9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0cmFja1xuICAgKiBAcGFyYW0ge251bWJlcn0gYWN0b3JTdGFydFxuICAgKiBAcGFyYW0ge251bWJlcn0gYWN0b3JFbmRcbiAgICogQHJldHVybiB7c3RyaW5nfHVuZGVmaW5lZH1cbiAgICovXG4gIGZ1bmN0aW9uIHNpbXVsYXRlVHJhaWxpbmdXYWl0IChhY3RvciwgdHJhY2ssIGFjdG9yU3RhcnQsIGFjdG9yRW5kKSB7XG4gICAgdmFyIGxhc3RQcm9wID0gXy5sYXN0KGFjdG9yLl9wcm9wZXJ0eVRyYWNrc1t0cmFja10pO1xuXG4gICAgaWYgKHR5cGVvZiBsYXN0UHJvcCAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgJiYgbGFzdFByb3AubWlsbGlzZWNvbmQgIT09IGFjdG9yRW5kKSB7XG4gICAgICB2YXIgZmFrZUxhc3RQcm9wID0gZ2VuZXJhdGVBY3RvclRyYWNrU2VnbWVudChcbiAgICAgICAgICBhY3RvciwgMSwgMSwgYWN0b3JTdGFydCwgMTAwLCBsYXN0UHJvcCk7XG4gICAgICByZXR1cm4gZmFrZUxhc3RQcm9wLmpvaW4oJ1xcbicpO1xuICAgIH1cbiAgfVxuXG4gIC8qIVxuICAgKiBAcGFyYW0ge1Jla2FwaS5LZXlmcmFtZVByb3BlcnR5fSBwcm9wZXJ0eVxuICAgKiBAcGFyYW0ge251bWJlcn0gYWN0b3JTdGFydFxuICAgKiBAcGFyYW0ge251bWJlcn0gYWN0b3JMZW5ndGhcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZnVuY3Rpb24gY2FsY3VsYXRlU3RlcFBlcmNlbnQgKHByb3BlcnR5LCBhY3RvclN0YXJ0LCBhY3Rvckxlbmd0aCkge1xuICAgIHJldHVybiAoKHByb3BlcnR5Lm1pbGxpc2Vjb25kIC0gYWN0b3JTdGFydCkgLyBhY3Rvckxlbmd0aCkgKiAxMDA7XG4gIH1cblxuICAvKiFcbiAgICogQHBhcmFtIHtSZWthcGkuQWN0b3J9IGFjdG9yXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmNyZW1lbnRzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmNyZW1lbnRTaXplXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBhY3RvclN0YXJ0XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBmcm9tUGVyY2VudFxuICAgKiBAcGFyYW0ge1Jla2FwaS5LZXlmcmFtZVByb3BlcnR5PX0gb3B0X2Zyb21Qcm9wXG4gICAqIEByZXR1cm4ge0FycmF5LjxzdHJpbmc+fVxuICAgKi9cbiAgZnVuY3Rpb24gZ2VuZXJhdGVBY3RvclRyYWNrU2VnbWVudCAoXG4gICAgICBhY3RvciwgaW5jcmVtZW50cywgaW5jcmVtZW50U2l6ZSwgYWN0b3JTdGFydCwgZnJvbVBlcmNlbnQsXG4gICAgICBvcHRfZnJvbVByb3ApIHtcblxuICAgIHZhciBhY2N1bXVsYXRvciA9IFtdO1xuICAgIHZhciBhY3Rvckxlbmd0aCA9IGFjdG9yLmdldExlbmd0aCgpO1xuICAgIHZhciBpLCBhZGp1c3RlZFBlcmNlbnQsIHN0ZXBQcmVmaXg7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgaW5jcmVtZW50czsgaSsrKSB7XG4gICAgICBhZGp1c3RlZFBlcmNlbnQgPSBmcm9tUGVyY2VudCArIChpICogaW5jcmVtZW50U2l6ZSk7XG4gICAgICBhY3Rvci5fdXBkYXRlU3RhdGUoXG4gICAgICAgICAgKChhZGp1c3RlZFBlcmNlbnQgLyAxMDApICogYWN0b3JMZW5ndGgpICsgYWN0b3JTdGFydCk7XG4gICAgICBzdGVwUHJlZml4ID0gK2FkanVzdGVkUGVyY2VudC50b0ZpeGVkKDIpICsgJyUgJztcblxuICAgICAgaWYgKG9wdF9mcm9tUHJvcCkge1xuICAgICAgICBhY2N1bXVsYXRvci5wdXNoKFxuICAgICAgICAgICAgJyAgJyArIHN0ZXBQcmVmaXggKyBzZXJpYWxpemVBY3RvclN0ZXAoYWN0b3IsIG9wdF9mcm9tUHJvcC5uYW1lKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhY2N1bXVsYXRvci5wdXNoKCcgICcgKyBzdGVwUHJlZml4ICsgc2VyaWFsaXplQWN0b3JTdGVwKGFjdG9yKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjY3VtdWxhdG9yO1xuICB9XG5cbiAgLyohXG4gICAqIEBwYXJhbSB7UmVrYXBpLkFjdG9yfSBhY3RvclxuICAgKiBAcGFyYW0ge251bWJlcn0gYWN0b3JTdGFydFxuICAgKiBAcGFyYW0ge1Jla2FwaS5LZXlmcmFtZVByb3BlcnR5fSBmcm9tUHJvcFxuICAgKiBAcGFyYW0ge1Jla2FwaS5LZXlmcmFtZVByb3BlcnR5fSB0b1Byb3BcbiAgICogQHBhcmFtIHtudW1iZXJ9IGZyb21QZXJjZW50XG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0b1BlcmNlbnRcbiAgICogQHJldHVybiB7QXJyYXkuPHN0cmluZz59XG4gICAqL1xuICBmdW5jdGlvbiBnZW5lcmF0ZUFjdG9yVHJhY2tXYWl0U2VnbWVudCAoXG4gICAgICBhY3RvciwgYWN0b3JTdGFydCwgZnJvbVByb3AsIHRvUHJvcCwgZnJvbVBlcmNlbnQsIHRvUGVyY2VudCkge1xuICAgIHZhciBzZWdtZW50ID0gZ2VuZXJhdGVBY3RvclRyYWNrU2VnbWVudChcbiAgICAgICAgYWN0b3IsIDEsIHRvUGVyY2VudCAtIGZyb21QZXJjZW50LCBhY3RvclN0YXJ0LCBmcm9tUGVyY2VudCwgZnJvbVByb3ApO1xuICAgIHJldHVybiBzZWdtZW50O1xuICB9XG5cbiAgLyohXG4gICAqIEBwYXJhbSB7UmVrYXBpLkFjdG9yfSBhY3RvclxuICAgKiBAcGFyYW0ge3N0cmluZz19IG9wdF90YXJnZXRQcm9wXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGZ1bmN0aW9uIHNlcmlhbGl6ZUFjdG9yU3RlcCAoYWN0b3IsIG9wdF90YXJnZXRQcm9wKSB7XG4gICAgdmFyIHNlcmlhbGl6ZWRQcm9wcyA9IFsneyddO1xuXG4gICAgdmFyIHByb3BzVG9TZXJpYWxpemU7XG4gICAgaWYgKG9wdF90YXJnZXRQcm9wKSB7XG4gICAgICBwcm9wc1RvU2VyaWFsaXplID0ge307XG5cbiAgICAgIHZhciBjdXJyZW50UHJvcFN0YXRlID0gYWN0b3IuZ2V0KClbb3B0X3RhcmdldFByb3BdO1xuICAgICAgaWYgKHR5cGVvZiBjdXJyZW50UHJvcFN0YXRlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBwcm9wc1RvU2VyaWFsaXplW29wdF90YXJnZXRQcm9wXSA9IGN1cnJlbnRQcm9wU3RhdGU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb3BzVG9TZXJpYWxpemUgPSBhY3Rvci5nZXQoKTtcbiAgICB9XG5cbiAgICB2YXIgcHJpbnRWYWw7XG4gICAgXy5lYWNoKHByb3BzVG9TZXJpYWxpemUsIGZ1bmN0aW9uICh2YWwsIGtleSkge1xuICAgICAgcHJpbnRWYWwgPSB2YWw7XG4gICAgICB2YXIgcHJpbnRLZXkgPSBrZXk7XG5cbiAgICAgIGlmIChrZXkgPT09ICd0cmFuc2Zvcm0nKSB7XG4gICAgICAgIHByaW50S2V5ID0gVFJBTlNGT1JNX1RPS0VOO1xuICAgICAgfVxuXG4gICAgICBzZXJpYWxpemVkUHJvcHMucHVzaChwcmludEtleSArICc6JyArIHByaW50VmFsICsgJzsnKTtcbiAgICB9KTtcblxuICAgIHNlcmlhbGl6ZWRQcm9wcy5wdXNoKCd9Jyk7XG4gICAgcmV0dXJuIHNlcmlhbGl6ZWRQcm9wcy5qb2luKCcnKTtcbiAgfVxuXG4gIC8vIEV4cG9zZXMgaGVscGVyIGZ1bmN0aW9ucyBmb3IgdW5pdCB0ZXN0aW5nLiAgR2V0cyBjb21waWxlZCBhd2F5IGluIGJ1aWxkXG4gIC8vIHByb2Nlc3MuXG4gIGlmIChSRUtBUElfREVCVUcpIHtcbiAgICBSZWthcGkuX3ByaXZhdGUuY3NzUmVuZGVyZXIgPSB7XG4gICAgICAnVFJBTlNGT1JNX1RPS0VOJzogVFJBTlNGT1JNX1RPS0VOXG4gICAgICAsJ1ZFTkRPUl9UT0tFTic6IFZFTkRPUl9UT0tFTlxuICAgICAgLCdhcHBseVZlbmRvckJvaWxlcnBsYXRlcyc6IGFwcGx5VmVuZG9yQm9pbGVycGxhdGVzXG4gICAgICAsJ2FwcGx5VmVuZG9yUHJvcGVydHlQcmVmaXhlcyc6IGFwcGx5VmVuZG9yUHJvcGVydHlQcmVmaXhlc1xuICAgICAgLCdnZW5lcmF0ZUJvaWxlcnBsYXRlZEtleWZyYW1lcyc6IGdlbmVyYXRlQm9pbGVycGxhdGVkS2V5ZnJhbWVzXG4gICAgICAsJ2dlbmVyYXRlQ1NTQ2xhc3MnOiBnZW5lcmF0ZUNTU0NsYXNzXG4gICAgICAsJ2dlbmVyYXRlQ1NTQW5pbWF0aW9uUHJvcGVydGllcyc6IGdlbmVyYXRlQ1NTQW5pbWF0aW9uUHJvcGVydGllc1xuICAgICAgLCdnZW5lcmF0ZUFjdG9yS2V5ZnJhbWVzJzogZ2VuZXJhdGVBY3RvcktleWZyYW1lc1xuICAgICAgLCdnZW5lcmF0ZUFjdG9yVHJhY2tTZWdtZW50JzogZ2VuZXJhdGVBY3RvclRyYWNrU2VnbWVudFxuICAgICAgLCdzZXJpYWxpemVBY3RvclN0ZXAnOiBzZXJpYWxpemVBY3RvclN0ZXBcbiAgICAgICwnZ2VuZXJhdGVBbmltYXRpb25OYW1lUHJvcGVydHknOiBnZW5lcmF0ZUFuaW1hdGlvbk5hbWVQcm9wZXJ0eVxuICAgICAgLCdnZW5lcmF0ZUFuaW1hdGlvbkR1cmF0aW9uUHJvcGVydHknOiBnZW5lcmF0ZUFuaW1hdGlvbkR1cmF0aW9uUHJvcGVydHlcbiAgICAgICwnZ2VuZXJhdGVBbmltYXRpb25EZWxheVByb3BlcnR5JzogZ2VuZXJhdGVBbmltYXRpb25EZWxheVByb3BlcnR5XG4gICAgICAsJ2dlbmVyYXRlQW5pbWF0aW9uRmlsbE1vZGVQcm9wZXJ0eSc6IGdlbmVyYXRlQW5pbWF0aW9uRmlsbE1vZGVQcm9wZXJ0eVxuICAgICAgLCdnZW5lcmF0ZUFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uUHJvcGVydHknOlxuICAgICAgICAgIGdlbmVyYXRlQW5pbWF0aW9uVGltaW5nRnVuY3Rpb25Qcm9wZXJ0eVxuICAgICAgLCdnZW5lcmF0ZUFuaW1hdGlvbkl0ZXJhdGlvblByb3BlcnR5JzogZ2VuZXJhdGVBbmltYXRpb25JdGVyYXRpb25Qcm9wZXJ0eVxuICAgICAgLCdnZW5lcmF0ZUFuaW1hdGlvbkNlbnRlcmluZ1J1bGUnOiBnZW5lcmF0ZUFuaW1hdGlvbkNlbnRlcmluZ1J1bGVcbiAgICAgICwnc2ltdWxhdGVMZWFkaW5nV2FpdCc6IHNpbXVsYXRlTGVhZGluZ1dhaXRcbiAgICAgICwnc2ltdWxhdGVUcmFpbGluZ1dhaXQnOiBzaW11bGF0ZVRyYWlsaW5nV2FpdFxuICAgICAgLCdjYW5PcHRpbWl6ZUtleWZyYW1lUHJvcGVydHknOiBjYW5PcHRpbWl6ZUtleWZyYW1lUHJvcGVydHlcbiAgICAgICwnY2FuT3B0aW1pemVBbnlLZXlmcmFtZVByb3BlcnRpZXMnOiBjYW5PcHRpbWl6ZUFueUtleWZyYW1lUHJvcGVydGllc1xuICAgICAgLCdnZW5lcmF0ZU9wdGltaXplZEtleWZyYW1lU2VnbWVudCc6IGdlbmVyYXRlT3B0aW1pemVkS2V5ZnJhbWVTZWdtZW50XG4gICAgICAsJ2dldEFjdG9yQ1NTJzogZ2V0QWN0b3JDU1NcbiAgICB9O1xuICB9XG59KTtcblxudmFyIHJla2FwaSA9IGZ1bmN0aW9uIChnbG9iYWwsIGRlcHMpIHtcblxuICAndXNlIHN0cmljdCc7XG5cbiAgLy8gSWYgYGRlcHNgIGlzIGRlZmluZWQsIGl0IG1lYW5zIHRoYXQgUmVrYXBpIGlzIGxvYWRlZCB2aWEgQU1ELlxuICAvLyBEb24ndCB1c2UgZ2xvYmFsIGNvbnRleHQgaW4gdGhpcyBjYXNlIHNvIHRoYXQgdGhlIGdsb2JhbCBzY29wZVxuICAvLyBpcyBub3QgcG9sbHV0ZWQgYnkgdGhlIFJla2FwaSBvYmplY3QuXG4gIHZhciBjb250ZXh0ID0gZGVwcyA/IHt9IDogZ2xvYmFsO1xuXG4gIHZhciBfID0gKGRlcHMgJiYgZGVwcy51bmRlcnNjb3JlKSA/IGRlcHMudW5kZXJzY29yZSA6IGNvbnRleHQuXztcbiAgdmFyIFR3ZWVuYWJsZSA9IChkZXBzICYmIGRlcHMuVHdlZW5hYmxlKSA/XG4gICAgICBkZXBzLlR3ZWVuYWJsZSA6IGNvbnRleHQuVHdlZW5hYmxlO1xuXG4gIHJla2FwaUNvcmUoY29udGV4dCwgXywgVHdlZW5hYmxlKTtcblxuICBfLmVhY2gocmVrYXBpTW9kdWxlcywgZnVuY3Rpb24gKG1vZHVsZSkge1xuICAgIG1vZHVsZShjb250ZXh0KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbnRleHQuUmVrYXBpO1xufTtcblxuaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICB2YXIgdW5kZXJzY29yZUFscmVhZHlJblVzZSA9ICh0eXBlb2YgXyAhPT0gJ3VuZGVmaW5lZCcpO1xuXG4gIC8vIEV4cG9zZSBSZWthcGkgYXMgYW4gQU1EIG1vZHVsZSBpZiBpdCdzIGxvYWRlZCB3aXRoIFJlcXVpcmVKUyBvciBzaW1pbGFyLlxuICAvLyBTaGlmdHkgYW5kIFVuZGVyc2NvcmUgYXJlIHNldCBhcyBkZXBlbmRlbmNpZXMgb2YgdGhpcyBtb2R1bGUuXG4gIC8vXG4gIC8vIFRoZSByZWthcGkgbW9kdWxlIGlzIGFub255bW91cyBzbyB0aGF0IGl0IGNhbiBiZSByZXF1aXJlZCB3aXRoIGFueSBuYW1lLlxuICAvLyBFeGFtcGxlOiBkZWZpbmUoWyd2ZW5kb3IvcmVrYXBpLm1pbiddLCBmdW5jdGlvbihSZWthcGkpIHsgLi4uIH0pO1xuICBkZWZpbmUoWydzaGlmdHknLCAndW5kZXJzY29yZSddLCBmdW5jdGlvbiAoVHdlZW5hYmxlLCBVbmRlcnNjb3JlKSB7XG4gICAgdmFyIHVuZGVyc2NvcmVTdXBwb3J0c0FNRCA9IChVbmRlcnNjb3JlICE9IG51bGwpO1xuICAgIHZhciBkZXBzID0ge1R3ZWVuYWJsZTogVHdlZW5hYmxlLFxuICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBVbmRlcnNjb3JlLmpzIHN1cHBvcnQgQU1ELCBvdGhlcnMgZG9uJ3QuXG4gICAgICAvLyBJZiBub3QsIHVzZSB0aGUgYF9gIGdsb2JhbC5cbiAgICAgIHVuZGVyc2NvcmU6IHVuZGVyc2NvcmVTdXBwb3J0c0FNRCA/IFVuZGVyc2NvcmUgOiBffTtcbiAgICB2YXIgUmVrYXBpID0gcmVrYXBpKHt9LCBkZXBzKTtcblxuICAgIGlmIChSRUtBUElfREVCVUcpIHtcbiAgICAgIFJla2FwaS51bmRlcnNjb3JlX3ZlcnNpb24gPSBkZXBzLnVuZGVyc2NvcmUuVkVSU0lPTjtcbiAgICB9XG5cbiAgICBpZiAoIXVuZGVyc2NvcmVBbHJlYWR5SW5Vc2UgJiYgdW5kZXJzY29yZVN1cHBvcnRzQU1EKSB7XG4gICAgICAvLyBQcmV2ZW50IFVuZGVyc2NvcmUgZnJvbSBwb2xsdXRpbmcgdGhlIGdsb2JhbCBzY29wZS5cbiAgICAgIC8vIFRoaXMgZ2xvYmFsIGNhbiBiZSBzYWZlbHkgcmVtb3ZlZCBzaW5jZSBSZWthcGkga2VlcHMgaXRzIG93biByZWZlcmVuY2VcbiAgICAgIC8vIHRvIFVuZGVyc2NvcmUgdmlhIHRoZSBgZGVwc2Agb2JqZWN0IHBhc3NlZCBlYXJsaWVyIGFzIGFuIGFyZ3VtZW50LlxuICAgICAgdGhpcy5fID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJldHVybiBSZWthcGk7XG4gIH0pO1xufSBlbHNlIHtcbiAgLy8gTG9hZCBSZWthcGkgbm9ybWFsbHkgKGNyZWF0aW5nIGEgUmVrYXBpIGdsb2JhbCkgaWYgbm90IHVzaW5nIGFuIEFNRCBsb2FkZXIuXG5cbiAgLy8gTm90ZTogYGdsb2JhbGAgaXMgbm90IGRlZmluZWQgd2hlbiBydW5uaW5nIHVuaXQgdGVzdHMuIFBhc3MgYHRoaXNgIGluc3RlYWQuXG4gIHJla2FwaSh0aGlzKTtcbn1cblxufSAodGhpcykpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVrYXBpL2Rpc3QvcmVrYXBpLmpzXG4gKiogbW9kdWxlIGlkID0gNDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIi8qISBzaGlmdHkgLSB2MS4yLjIgLSAyMDE0LTEwLTA5IC0gaHR0cDovL2plcmVteWNrYWhuLmdpdGh1Yi5pby9zaGlmdHkgKi9cbjsoZnVuY3Rpb24gKHJvb3QpIHtcblxuLyohXG4gKiBTaGlmdHkgQ29yZVxuICogQnkgSmVyZW15IEthaG4gLSBqZXJlbXlja2FobkBnbWFpbC5jb21cbiAqL1xuXG4vLyBVZ2xpZnlKUyBkZWZpbmUgaGFjay4gIFVzZWQgZm9yIHVuaXQgdGVzdGluZy4gIENvbnRlbnRzIG9mIHRoaXMgaWYgYXJlXG4vLyBjb21waWxlZCBhd2F5LlxuaWYgKHR5cGVvZiBTSElGVFlfREVCVUdfTk9XID09PSAndW5kZWZpbmVkJykge1xuICBTSElGVFlfREVCVUdfTk9XID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiArbmV3IERhdGUoKTtcbiAgfTtcbn1cblxudmFyIFR3ZWVuYWJsZSA9IChmdW5jdGlvbiAoKSB7XG5cbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8vIEFsaWFzZXMgdGhhdCBnZXQgZGVmaW5lZCBsYXRlciBpbiB0aGlzIGZ1bmN0aW9uXG4gIHZhciBmb3JtdWxhO1xuXG4gIC8vIENPTlNUQU5UU1xuICB2YXIgREVGQVVMVF9TQ0hFRFVMRV9GVU5DVElPTjtcbiAgdmFyIERFRkFVTFRfRUFTSU5HID0gJ2xpbmVhcic7XG4gIHZhciBERUZBVUxUX0RVUkFUSU9OID0gNTAwO1xuICB2YXIgVVBEQVRFX1RJTUUgPSAxMDAwIC8gNjA7XG5cbiAgdmFyIF9ub3cgPSBEYXRlLm5vd1xuICAgICAgID8gRGF0ZS5ub3dcbiAgICAgICA6IGZ1bmN0aW9uICgpIHtyZXR1cm4gK25ldyBEYXRlKCk7fTtcblxuICB2YXIgbm93ID0gU0hJRlRZX0RFQlVHX05PV1xuICAgICAgID8gU0hJRlRZX0RFQlVHX05PV1xuICAgICAgIDogX25vdztcblxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKSBzaGltIGJ5IFBhdWwgSXJpc2ggKG1vZGlmaWVkIGZvciBTaGlmdHkpXG4gICAgLy8gaHR0cDovL3BhdWxpcmlzaC5jb20vMjAxMS9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWFuaW1hdGluZy9cbiAgICBERUZBVUxUX1NDSEVEVUxFX0ZVTkNUSU9OID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgICAgIHx8IHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgICAgICB8fCB3aW5kb3cub1JlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgICAgIHx8IHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgICAgIHx8ICh3aW5kb3cubW96Q2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gICAgICAgJiYgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSlcbiAgICAgICB8fCBzZXRUaW1lb3V0O1xuICB9IGVsc2Uge1xuICAgIERFRkFVTFRfU0NIRURVTEVfRlVOQ1RJT04gPSBzZXRUaW1lb3V0O1xuICB9XG5cbiAgZnVuY3Rpb24gbm9vcCAoKSB7XG4gICAgLy8gTk9PUCFcbiAgfVxuXG4gIC8qIVxuICAgKiBIYW5keSBzaG9ydGN1dCBmb3IgZG9pbmcgYSBmb3ItaW4gbG9vcC4gVGhpcyBpcyBub3QgYSBcIm5vcm1hbFwiIGVhY2hcbiAgICogZnVuY3Rpb24sIGl0IGlzIG9wdGltaXplZCBmb3IgU2hpZnR5LiAgVGhlIGl0ZXJhdG9yIGZ1bmN0aW9uIG9ubHkgcmVjZWl2ZXNcbiAgICogdGhlIHByb3BlcnR5IG5hbWUsIG5vdCB0aGUgdmFsdWUuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAgICogQHBhcmFtIHtGdW5jdGlvbihzdHJpbmcpfSBmblxuICAgKi9cbiAgZnVuY3Rpb24gZWFjaCAob2JqLCBmbikge1xuICAgIHZhciBrZXk7XG4gICAgZm9yIChrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgIGZuKGtleSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyohXG4gICAqIFBlcmZvcm0gYSBzaGFsbG93IGNvcHkgb2YgT2JqZWN0IHByb3BlcnRpZXMuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXRPYmplY3QgVGhlIG9iamVjdCB0byBjb3B5IGludG9cbiAgICogQHBhcmFtIHtPYmplY3R9IHNyY09iamVjdCBUaGUgb2JqZWN0IHRvIGNvcHkgZnJvbVxuICAgKiBAcmV0dXJuIHtPYmplY3R9IEEgcmVmZXJlbmNlIHRvIHRoZSBhdWdtZW50ZWQgYHRhcmdldE9iamAgT2JqZWN0XG4gICAqL1xuICBmdW5jdGlvbiBzaGFsbG93Q29weSAodGFyZ2V0T2JqLCBzcmNPYmopIHtcbiAgICBlYWNoKHNyY09iaiwgZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgIHRhcmdldE9ialtwcm9wXSA9IHNyY09ialtwcm9wXTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0YXJnZXRPYmo7XG4gIH1cblxuICAvKiFcbiAgICogQ29waWVzIGVhY2ggcHJvcGVydHkgZnJvbSBzcmMgb250byB0YXJnZXQsIGJ1dCBvbmx5IGlmIHRoZSBwcm9wZXJ0eSB0b1xuICAgKiBjb3B5IHRvIHRhcmdldCBpcyB1bmRlZmluZWQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXQgTWlzc2luZyBwcm9wZXJ0aWVzIGluIHRoaXMgT2JqZWN0IGFyZSBmaWxsZWQgaW5cbiAgICogQHBhcmFtIHtPYmplY3R9IHNyY1xuICAgKi9cbiAgZnVuY3Rpb24gZGVmYXVsdHMgKHRhcmdldCwgc3JjKSB7XG4gICAgZWFjaChzcmMsIGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICBpZiAodHlwZW9mIHRhcmdldFtwcm9wXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gc3JjW3Byb3BdO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyohXG4gICAqIENhbGN1bGF0ZXMgdGhlIGludGVycG9sYXRlZCB0d2VlbiB2YWx1ZXMgb2YgYW4gT2JqZWN0IGZvciBhIGdpdmVuXG4gICAqIHRpbWVzdGFtcC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IGZvclBvc2l0aW9uIFRoZSBwb3NpdGlvbiB0byBjb21wdXRlIHRoZSBzdGF0ZSBmb3IuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjdXJyZW50U3RhdGUgQ3VycmVudCBzdGF0ZSBwcm9wZXJ0aWVzLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3JpZ2luYWxTdGF0ZTogVGhlIG9yaWdpbmFsIHN0YXRlIHByb3BlcnRpZXMgdGhlIE9iamVjdCBpc1xuICAgKiB0d2VlbmluZyBmcm9tLlxuICAgKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0U3RhdGU6IFRoZSBkZXN0aW5hdGlvbiBzdGF0ZSBwcm9wZXJ0aWVzIHRoZSBPYmplY3RcbiAgICogaXMgdHdlZW5pbmcgdG8uXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkdXJhdGlvbjogVGhlIGxlbmd0aCBvZiB0aGUgdHdlZW4gaW4gbWlsbGlzZWNvbmRzLlxuICAgKiBAcGFyYW0ge251bWJlcn0gdGltZXN0YW1wOiBUaGUgVU5JWCBlcG9jaCB0aW1lIGF0IHdoaWNoIHRoZSB0d2VlbiBiZWdhbi5cbiAgICogQHBhcmFtIHtPYmplY3R9IGVhc2luZzogVGhpcyBPYmplY3QncyBrZXlzIG11c3QgY29ycmVzcG9uZCB0byB0aGUga2V5cyBpblxuICAgKiB0YXJnZXRTdGF0ZS5cbiAgICovXG4gIGZ1bmN0aW9uIHR3ZWVuUHJvcHMgKGZvclBvc2l0aW9uLCBjdXJyZW50U3RhdGUsIG9yaWdpbmFsU3RhdGUsIHRhcmdldFN0YXRlLFxuICAgIGR1cmF0aW9uLCB0aW1lc3RhbXAsIGVhc2luZykge1xuICAgIHZhciBub3JtYWxpemVkUG9zaXRpb24gPSAoZm9yUG9zaXRpb24gLSB0aW1lc3RhbXApIC8gZHVyYXRpb247XG5cbiAgICB2YXIgcHJvcDtcbiAgICBmb3IgKHByb3AgaW4gY3VycmVudFN0YXRlKSB7XG4gICAgICBpZiAoY3VycmVudFN0YXRlLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICAgIGN1cnJlbnRTdGF0ZVtwcm9wXSA9IHR3ZWVuUHJvcChvcmlnaW5hbFN0YXRlW3Byb3BdLFxuICAgICAgICAgIHRhcmdldFN0YXRlW3Byb3BdLCBmb3JtdWxhW2Vhc2luZ1twcm9wXV0sIG5vcm1hbGl6ZWRQb3NpdGlvbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGN1cnJlbnRTdGF0ZTtcbiAgfVxuXG4gIC8qIVxuICAgKiBUd2VlbnMgYSBzaW5nbGUgcHJvcGVydHkuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydCBUaGUgdmFsdWUgdGhhdCB0aGUgdHdlZW4gc3RhcnRlZCBmcm9tLlxuICAgKiBAcGFyYW0ge251bWJlcn0gZW5kIFRoZSB2YWx1ZSB0aGF0IHRoZSB0d2VlbiBzaG91bGQgZW5kIGF0LlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBlYXNpbmdGdW5jIFRoZSBlYXNpbmcgY3VydmUgdG8gYXBwbHkgdG8gdGhlIHR3ZWVuLlxuICAgKiBAcGFyYW0ge251bWJlcn0gcG9zaXRpb24gVGhlIG5vcm1hbGl6ZWQgcG9zaXRpb24gKGJldHdlZW4gMC4wIGFuZCAxLjApIHRvXG4gICAqIGNhbGN1bGF0ZSB0aGUgbWlkcG9pbnQgb2YgJ3N0YXJ0JyBhbmQgJ2VuZCcgYWdhaW5zdC5cbiAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgdHdlZW5lZCB2YWx1ZS5cbiAgICovXG4gIGZ1bmN0aW9uIHR3ZWVuUHJvcCAoc3RhcnQsIGVuZCwgZWFzaW5nRnVuYywgcG9zaXRpb24pIHtcbiAgICByZXR1cm4gc3RhcnQgKyAoZW5kIC0gc3RhcnQpICogZWFzaW5nRnVuYyhwb3NpdGlvbik7XG4gIH1cblxuICAvKiFcbiAgICogQXBwbGllcyBhIGZpbHRlciB0byBUd2VlbmFibGUgaW5zdGFuY2UuXG4gICAqIEBwYXJhbSB7VHdlZW5hYmxlfSB0d2VlbmFibGUgVGhlIGBUd2VlbmFibGVgIGluc3RhbmNlIHRvIGNhbGwgdGhlIGZpbHRlclxuICAgKiB1cG9uLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gZmlsdGVyTmFtZSBUaGUgbmFtZSBvZiB0aGUgZmlsdGVyIHRvIGFwcGx5LlxuICAgKi9cbiAgZnVuY3Rpb24gYXBwbHlGaWx0ZXIgKHR3ZWVuYWJsZSwgZmlsdGVyTmFtZSkge1xuICAgIHZhciBmaWx0ZXJzID0gVHdlZW5hYmxlLnByb3RvdHlwZS5maWx0ZXI7XG4gICAgdmFyIGFyZ3MgPSB0d2VlbmFibGUuX2ZpbHRlckFyZ3M7XG5cbiAgICBlYWNoKGZpbHRlcnMsIGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIGZpbHRlcnNbbmFtZV1bZmlsdGVyTmFtZV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGZpbHRlcnNbbmFtZV1bZmlsdGVyTmFtZV0uYXBwbHkodHdlZW5hYmxlLCBhcmdzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHZhciB0aW1lb3V0SGFuZGxlcl9lbmRUaW1lO1xuICB2YXIgdGltZW91dEhhbmRsZXJfY3VycmVudFRpbWU7XG4gIHZhciB0aW1lb3V0SGFuZGxlcl9pc0VuZGVkO1xuICAvKiFcbiAgICogSGFuZGxlcyB0aGUgdXBkYXRlIGxvZ2ljIGZvciBvbmUgc3RlcCBvZiBhIHR3ZWVuLlxuICAgKiBAcGFyYW0ge1R3ZWVuYWJsZX0gdHdlZW5hYmxlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lc3RhbXBcbiAgICogQHBhcmFtIHtudW1iZXJ9IGR1cmF0aW9uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjdXJyZW50U3RhdGVcbiAgICogQHBhcmFtIHtPYmplY3R9IG9yaWdpbmFsU3RhdGVcbiAgICogQHBhcmFtIHtPYmplY3R9IHRhcmdldFN0YXRlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBlYXNpbmdcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gc3RlcFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9uKEZ1bmN0aW9uLG51bWJlcil9fSBzY2hlZHVsZVxuICAgKi9cbiAgZnVuY3Rpb24gdGltZW91dEhhbmRsZXIgKHR3ZWVuYWJsZSwgdGltZXN0YW1wLCBkdXJhdGlvbiwgY3VycmVudFN0YXRlLFxuICAgIG9yaWdpbmFsU3RhdGUsIHRhcmdldFN0YXRlLCBlYXNpbmcsIHN0ZXAsIHNjaGVkdWxlKSB7XG4gICAgdGltZW91dEhhbmRsZXJfZW5kVGltZSA9IHRpbWVzdGFtcCArIGR1cmF0aW9uO1xuICAgIHRpbWVvdXRIYW5kbGVyX2N1cnJlbnRUaW1lID0gTWF0aC5taW4obm93KCksIHRpbWVvdXRIYW5kbGVyX2VuZFRpbWUpO1xuICAgIHRpbWVvdXRIYW5kbGVyX2lzRW5kZWQgPSB0aW1lb3V0SGFuZGxlcl9jdXJyZW50VGltZSA+PSB0aW1lb3V0SGFuZGxlcl9lbmRUaW1lO1xuXG4gICAgaWYgKHR3ZWVuYWJsZS5pc1BsYXlpbmcoKSAmJiAhdGltZW91dEhhbmRsZXJfaXNFbmRlZCkge1xuICAgICAgc2NoZWR1bGUodHdlZW5hYmxlLl90aW1lb3V0SGFuZGxlciwgVVBEQVRFX1RJTUUpO1xuXG4gICAgICBhcHBseUZpbHRlcih0d2VlbmFibGUsICdiZWZvcmVUd2VlbicpO1xuICAgICAgdHdlZW5Qcm9wcyh0aW1lb3V0SGFuZGxlcl9jdXJyZW50VGltZSwgY3VycmVudFN0YXRlLCBvcmlnaW5hbFN0YXRlLFxuICAgICAgICB0YXJnZXRTdGF0ZSwgZHVyYXRpb24sIHRpbWVzdGFtcCwgZWFzaW5nKTtcbiAgICAgIGFwcGx5RmlsdGVyKHR3ZWVuYWJsZSwgJ2FmdGVyVHdlZW4nKTtcblxuICAgICAgc3RlcChjdXJyZW50U3RhdGUpO1xuICAgIH0gZWxzZSBpZiAodGltZW91dEhhbmRsZXJfaXNFbmRlZCkge1xuICAgICAgc3RlcCh0YXJnZXRTdGF0ZSk7XG4gICAgICB0d2VlbmFibGUuc3RvcCh0cnVlKTtcbiAgICB9XG4gIH1cblxuXG4gIC8qIVxuICAgKiBDcmVhdGVzIGEgdXNhYmxlIGVhc2luZyBPYmplY3QgZnJvbSBlaXRoZXIgYSBzdHJpbmcgb3IgYW5vdGhlciBlYXNpbmdcbiAgICogT2JqZWN0LiAgSWYgYGVhc2luZ2AgaXMgYW4gT2JqZWN0LCB0aGVuIHRoaXMgZnVuY3Rpb24gY2xvbmVzIGl0IGFuZCBmaWxsc1xuICAgKiBpbiB0aGUgbWlzc2luZyBwcm9wZXJ0aWVzIHdpdGggXCJsaW5lYXJcIi5cbiAgICogQHBhcmFtIHtPYmplY3R9IGZyb21Ud2VlblBhcmFtc1xuICAgKiBAcGFyYW0ge09iamVjdHxzdHJpbmd9IGVhc2luZ1xuICAgKi9cbiAgZnVuY3Rpb24gY29tcG9zZUVhc2luZ09iamVjdCAoZnJvbVR3ZWVuUGFyYW1zLCBlYXNpbmcpIHtcbiAgICB2YXIgY29tcG9zZWRFYXNpbmcgPSB7fTtcblxuICAgIGlmICh0eXBlb2YgZWFzaW5nID09PSAnc3RyaW5nJykge1xuICAgICAgZWFjaChmcm9tVHdlZW5QYXJhbXMsIGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICAgIGNvbXBvc2VkRWFzaW5nW3Byb3BdID0gZWFzaW5nO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVhY2goZnJvbVR3ZWVuUGFyYW1zLCBmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICBpZiAoIWNvbXBvc2VkRWFzaW5nW3Byb3BdKSB7XG4gICAgICAgICAgY29tcG9zZWRFYXNpbmdbcHJvcF0gPSBlYXNpbmdbcHJvcF0gfHwgREVGQVVMVF9FQVNJTkc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjb21wb3NlZEVhc2luZztcbiAgfVxuXG4gIC8qKlxuICAgKiBUd2VlbmFibGUgY29uc3RydWN0b3IuXG4gICAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0X2luaXRpYWxTdGF0ZSBUaGUgdmFsdWVzIHRoYXQgdGhlIGluaXRpYWwgdHdlZW4gc2hvdWxkIHN0YXJ0IGF0IGlmIGEgXCJmcm9tXCIgb2JqZWN0IGlzIG5vdCBwcm92aWRlZCB0byBUd2VlbmFibGUjdHdlZW4uXG4gICAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0X2NvbmZpZyBTZWUgVHdlZW5hYmxlLnByb3RvdHlwZS5zZXRDb25maWcoKVxuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG4gIGZ1bmN0aW9uIFR3ZWVuYWJsZSAob3B0X2luaXRpYWxTdGF0ZSwgb3B0X2NvbmZpZykge1xuICAgIHRoaXMuX2N1cnJlbnRTdGF0ZSA9IG9wdF9pbml0aWFsU3RhdGUgfHwge307XG4gICAgdGhpcy5fY29uZmlndXJlZCA9IGZhbHNlO1xuICAgIHRoaXMuX3NjaGVkdWxlRnVuY3Rpb24gPSBERUZBVUxUX1NDSEVEVUxFX0ZVTkNUSU9OO1xuXG4gICAgLy8gVG8gcHJldmVudCB1bm5lY2Vzc2FyeSBjYWxscyB0byBzZXRDb25maWcgZG8gbm90IHNldCBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gaGVyZS5cbiAgICAvLyBPbmx5IHNldCBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gaW1tZWRpYXRlbHkgYmVmb3JlIHR3ZWVuaW5nIGlmIG5vbmUgaGFzIGJlZW4gc2V0LlxuICAgIGlmICh0eXBlb2Ygb3B0X2NvbmZpZyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMuc2V0Q29uZmlnKG9wdF9jb25maWcpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDb25maWd1cmUgYW5kIHN0YXJ0IGEgdHdlZW4uXG4gICAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0X2NvbmZpZyBTZWUgVHdlZW5hYmxlLnByb3RvdHlwZS5zZXRDb25maWcoKVxuICAgKiBAcmV0dXJuIHtUd2VlbmFibGV9XG4gICAqL1xuICBUd2VlbmFibGUucHJvdG90eXBlLnR3ZWVuID0gZnVuY3Rpb24gKG9wdF9jb25maWcpIHtcbiAgICBpZiAodGhpcy5faXNUd2VlbmluZykge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gT25seSBzZXQgZGVmYXVsdCBjb25maWcgaWYgbm8gY29uZmlndXJhdGlvbiBoYXMgYmVlbiBzZXQgcHJldmlvdXNseSBhbmQgbm9uZSBpcyBwcm92aWRlZCBub3cuXG4gICAgaWYgKG9wdF9jb25maWcgIT09IHVuZGVmaW5lZCB8fCAhdGhpcy5fY29uZmlndXJlZCkge1xuICAgICAgdGhpcy5zZXRDb25maWcob3B0X2NvbmZpZyk7XG4gICAgfVxuXG4gICAgdGhpcy5fc3RhcnQodGhpcy5nZXQoKSk7XG4gICAgcmV0dXJuIHRoaXMucmVzdW1lKCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHR3ZWVuIGNvbmZpZ3VyYXRpb24uIGBjb25maWdgIG1heSBoYXZlIHRoZSBmb2xsb3dpbmcgb3B0aW9uczpcbiAgICpcbiAgICogLSBfX2Zyb21fXyAoX09iamVjdD1fKTogU3RhcnRpbmcgcG9zaXRpb24uICBJZiBvbWl0dGVkLCB0aGUgY3VycmVudCBzdGF0ZSBpcyB1c2VkLlxuICAgKiAtIF9fdG9fXyAoX09iamVjdD1fKTogRW5kaW5nIHBvc2l0aW9uLlxuICAgKiAtIF9fZHVyYXRpb25fXyAoX251bWJlcj1fKTogSG93IG1hbnkgbWlsbGlzZWNvbmRzIHRvIGFuaW1hdGUgZm9yLlxuICAgKiAtIF9fc3RhcnRfXyAoX0Z1bmN0aW9uKE9iamVjdCk9Xyk6IEZ1bmN0aW9uIHRvIGV4ZWN1dGUgd2hlbiB0aGUgdHdlZW4gYmVnaW5zLiAgUmVjZWl2ZXMgdGhlIHN0YXRlIG9mIHRoZSB0d2VlbiBhcyB0aGUgb25seSBwYXJhbWV0ZXIuXG4gICAqIC0gX19zdGVwX18gKF9GdW5jdGlvbihPYmplY3QpPV8pOiBGdW5jdGlvbiB0byBleGVjdXRlIG9uIGV2ZXJ5IHRpY2suICBSZWNlaXZlcyB0aGUgc3RhdGUgb2YgdGhlIHR3ZWVuIGFzIHRoZSBvbmx5IHBhcmFtZXRlci4gIFRoaXMgZnVuY3Rpb24gaXMgbm90IGNhbGxlZCBvbiB0aGUgZmluYWwgc3RlcCBvZiB0aGUgYW5pbWF0aW9uLCBidXQgYGZpbmlzaGAgaXMuXG4gICAqIC0gX19maW5pc2hfXyAoX0Z1bmN0aW9uKE9iamVjdCk9Xyk6IEZ1bmN0aW9uIHRvIGV4ZWN1dGUgdXBvbiB0d2VlbiBjb21wbGV0aW9uLiAgUmVjZWl2ZXMgdGhlIHN0YXRlIG9mIHRoZSB0d2VlbiBhcyB0aGUgb25seSBwYXJhbWV0ZXIuXG4gICAqIC0gX19lYXNpbmdfXyAoX09iamVjdHxzdHJpbmc9Xyk6IEVhc2luZyBjdXJ2ZSBuYW1lKHMpIHRvIHVzZSBmb3IgdGhlIHR3ZWVuLlxuICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAqIEByZXR1cm4ge1R3ZWVuYWJsZX1cbiAgICovXG4gIFR3ZWVuYWJsZS5wcm90b3R5cGUuc2V0Q29uZmlnID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgICB0aGlzLl9jb25maWd1cmVkID0gdHJ1ZTtcblxuICAgIC8vIEluaXQgdGhlIGludGVybmFsIHN0YXRlXG4gICAgdGhpcy5fcGF1c2VkQXRUaW1lID0gbnVsbDtcbiAgICB0aGlzLl9zdGFydCA9IGNvbmZpZy5zdGFydCB8fCBub29wO1xuICAgIHRoaXMuX3N0ZXAgPSBjb25maWcuc3RlcCB8fCBub29wO1xuICAgIHRoaXMuX2ZpbmlzaCA9IGNvbmZpZy5maW5pc2ggfHwgbm9vcDtcbiAgICB0aGlzLl9kdXJhdGlvbiA9IGNvbmZpZy5kdXJhdGlvbiB8fCBERUZBVUxUX0RVUkFUSU9OO1xuICAgIHRoaXMuX2N1cnJlbnRTdGF0ZSA9IGNvbmZpZy5mcm9tIHx8IHRoaXMuZ2V0KCk7XG4gICAgdGhpcy5fb3JpZ2luYWxTdGF0ZSA9IHRoaXMuZ2V0KCk7XG4gICAgdGhpcy5fdGFyZ2V0U3RhdGUgPSBjb25maWcudG8gfHwgdGhpcy5nZXQoKTtcbiAgICB0aGlzLl90aW1lc3RhbXAgPSBub3coKTtcblxuICAgIC8vIEFsaWFzZXMgdXNlZCBiZWxvd1xuICAgIHZhciBjdXJyZW50U3RhdGUgPSB0aGlzLl9jdXJyZW50U3RhdGU7XG4gICAgdmFyIHRhcmdldFN0YXRlID0gdGhpcy5fdGFyZ2V0U3RhdGU7XG5cbiAgICAvLyBFbnN1cmUgdGhhdCB0aGVyZSBpcyBhbHdheXMgc29tZXRoaW5nIHRvIHR3ZWVuIHRvLlxuICAgIGRlZmF1bHRzKHRhcmdldFN0YXRlLCBjdXJyZW50U3RhdGUpO1xuXG4gICAgdGhpcy5fZWFzaW5nID0gY29tcG9zZUVhc2luZ09iamVjdChcbiAgICAgIGN1cnJlbnRTdGF0ZSwgY29uZmlnLmVhc2luZyB8fCBERUZBVUxUX0VBU0lORyk7XG5cbiAgICB0aGlzLl9maWx0ZXJBcmdzID1cbiAgICAgIFtjdXJyZW50U3RhdGUsIHRoaXMuX29yaWdpbmFsU3RhdGUsIHRhcmdldFN0YXRlLCB0aGlzLl9lYXNpbmddO1xuXG4gICAgYXBwbHlGaWx0ZXIodGhpcywgJ3R3ZWVuQ3JlYXRlZCcpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBjdXJyZW50IHN0YXRlLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICBUd2VlbmFibGUucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gc2hhbGxvd0NvcHkoe30sIHRoaXMuX2N1cnJlbnRTdGF0ZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGN1cnJlbnQgc3RhdGUuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZVxuICAgKi9cbiAgVHdlZW5hYmxlLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICB0aGlzLl9jdXJyZW50U3RhdGUgPSBzdGF0ZTtcbiAgfTtcblxuICAvKipcbiAgICogUGF1c2VzIGEgdHdlZW4uICBQYXVzZWQgdHdlZW5zIGNhbiBiZSByZXN1bWVkIGZyb20gdGhlIHBvaW50IGF0IHdoaWNoIHRoZXkgd2VyZSBwYXVzZWQuICBUaGlzIGlzIGRpZmZlcmVudCB0aGFuIFtgc3RvcCgpYF0oI3N0b3ApLCBhcyB0aGF0IG1ldGhvZCBjYXVzZXMgYSB0d2VlbiB0byBzdGFydCBvdmVyIHdoZW4gaXQgaXMgcmVzdW1lZC5cbiAgICogQHJldHVybiB7VHdlZW5hYmxlfVxuICAgKi9cbiAgVHdlZW5hYmxlLnByb3RvdHlwZS5wYXVzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9wYXVzZWRBdFRpbWUgPSBub3coKTtcbiAgICB0aGlzLl9pc1BhdXNlZCA9IHRydWU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlc3VtZXMgYSBwYXVzZWQgdHdlZW4uXG4gICAqIEByZXR1cm4ge1R3ZWVuYWJsZX1cbiAgICovXG4gIFR3ZWVuYWJsZS5wcm90b3R5cGUucmVzdW1lID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLl9pc1BhdXNlZCkge1xuICAgICAgdGhpcy5fdGltZXN0YW1wICs9IG5vdygpIC0gdGhpcy5fcGF1c2VkQXRUaW1lO1xuICAgIH1cblxuICAgIHRoaXMuX2lzUGF1c2VkID0gZmFsc2U7XG4gICAgdGhpcy5faXNUd2VlbmluZyA9IHRydWU7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdGhpcy5fdGltZW91dEhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aW1lb3V0SGFuZGxlcihzZWxmLCBzZWxmLl90aW1lc3RhbXAsIHNlbGYuX2R1cmF0aW9uLCBzZWxmLl9jdXJyZW50U3RhdGUsXG4gICAgICAgIHNlbGYuX29yaWdpbmFsU3RhdGUsIHNlbGYuX3RhcmdldFN0YXRlLCBzZWxmLl9lYXNpbmcsIHNlbGYuX3N0ZXAsXG4gICAgICAgIHNlbGYuX3NjaGVkdWxlRnVuY3Rpb24pO1xuICAgIH07XG5cbiAgICB0aGlzLl90aW1lb3V0SGFuZGxlcigpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFN0b3BzIGFuZCBjYW5jZWxzIGEgdHdlZW4uXG4gICAqIEBwYXJhbSB7Ym9vbGVhbj19IGdvdG9FbmQgSWYgZmFsc2Ugb3Igb21pdHRlZCwgdGhlIHR3ZWVuIGp1c3Qgc3RvcHMgYXQgaXRzIGN1cnJlbnQgc3RhdGUsIGFuZCB0aGUgXCJmaW5pc2hcIiBoYW5kbGVyIGlzIG5vdCBpbnZva2VkLiAgSWYgdHJ1ZSwgdGhlIHR3ZWVuZWQgb2JqZWN0J3MgdmFsdWVzIGFyZSBpbnN0YW50bHkgc2V0IHRvIHRoZSB0YXJnZXQgdmFsdWVzLCBhbmQgXCJmaW5pc2hcIiBpcyBpbnZva2VkLlxuICAgKiBAcmV0dXJuIHtUd2VlbmFibGV9XG4gICAqL1xuICBUd2VlbmFibGUucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoZ290b0VuZCkge1xuICAgIHRoaXMuX2lzVHdlZW5pbmcgPSBmYWxzZTtcbiAgICB0aGlzLl9pc1BhdXNlZCA9IGZhbHNlO1xuICAgIHRoaXMuX3RpbWVvdXRIYW5kbGVyID0gbm9vcDtcblxuICAgIGlmIChnb3RvRW5kKSB7XG4gICAgICBzaGFsbG93Q29weSh0aGlzLl9jdXJyZW50U3RhdGUsIHRoaXMuX3RhcmdldFN0YXRlKTtcbiAgICAgIGFwcGx5RmlsdGVyKHRoaXMsICdhZnRlclR3ZWVuRW5kJyk7XG4gICAgICB0aGlzLl9maW5pc2guY2FsbCh0aGlzLCB0aGlzLl9jdXJyZW50U3RhdGUpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IGEgdHdlZW4gaXMgcnVubmluZy5cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIFR3ZWVuYWJsZS5wcm90b3R5cGUuaXNQbGF5aW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLl9pc1R3ZWVuaW5nICYmICF0aGlzLl9pc1BhdXNlZDtcbiAgfTtcblxuICAvKipcbiAgICogU2V0cyBhIGN1c3RvbSBzY2hlZHVsZSBmdW5jdGlvbi5cbiAgICpcbiAgICogSWYgYSBjdXN0b20gZnVuY3Rpb24gaXMgbm90IHNldCB0aGUgZGVmYXVsdCBvbmUgaXMgdXNlZCBbYHJlcXVlc3RBbmltYXRpb25GcmFtZWBdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS93aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKSBpZiBhdmFpbGFibGUsIG90aGVyd2lzZSBbYHNldFRpbWVvdXRgXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93LnNldFRpbWVvdXQpKS5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbihGdW5jdGlvbixudW1iZXIpfSBzY2hlZHVsZUZ1bmN0aW9uIFRoZSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgdG8gc2NoZWR1bGUgdGhlIG5leHQgZnJhbWUgdG8gYmUgcmVuZGVyZWRcbiAgICovXG4gIFR3ZWVuYWJsZS5wcm90b3R5cGUuc2V0U2NoZWR1bGVGdW5jdGlvbiA9IGZ1bmN0aW9uIChzY2hlZHVsZUZ1bmN0aW9uKSB7XG4gICAgdGhpcy5fc2NoZWR1bGVGdW5jdGlvbiA9IHNjaGVkdWxlRnVuY3Rpb247XG4gIH07XG5cbiAgLyoqXG4gICAqIGBkZWxldGVgcyBhbGwgXCJvd25cIiBwcm9wZXJ0aWVzLiAgQ2FsbCB0aGlzIHdoZW4gdGhlIGBUd2VlbmFibGVgIGluc3RhbmNlIGlzIG5vIGxvbmdlciBuZWVkZWQgdG8gZnJlZSBtZW1vcnkuXG4gICAqL1xuICBUd2VlbmFibGUucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHByb3A7XG4gICAgZm9yIChwcm9wIGluIHRoaXMpIHtcbiAgICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzW3Byb3BdO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvKiFcbiAgICogRmlsdGVycyBhcmUgdXNlZCBmb3IgdHJhbnNmb3JtaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIGEgdHdlZW4gYXQgdmFyaW91c1xuICAgKiBwb2ludHMgaW4gYSBUd2VlbmFibGUncyBsaWZlIGN5Y2xlLiAgU2VlIHRoZSBSRUFETUUgZm9yIG1vcmUgaW5mbyBvbiB0aGlzLlxuICAgKi9cbiAgVHdlZW5hYmxlLnByb3RvdHlwZS5maWx0ZXIgPSB7fTtcblxuICAvKiFcbiAgICogVGhpcyBvYmplY3QgY29udGFpbnMgYWxsIG9mIHRoZSB0d2VlbnMgYXZhaWxhYmxlIHRvIFNoaWZ0eS4gIEl0IGlzIGV4dGVuZGlibGUgLSBzaW1wbHkgYXR0YWNoIHByb3BlcnRpZXMgdG8gdGhlIFR3ZWVuYWJsZS5wcm90b3R5cGUuZm9ybXVsYSBPYmplY3QgZm9sbG93aW5nIHRoZSBzYW1lIGZvcm1hdCBhdCBsaW5lYXIuXG4gICAqXG4gICAqIGBwb3NgIHNob3VsZCBiZSBhIG5vcm1hbGl6ZWQgYG51bWJlcmAgKGJldHdlZW4gMCBhbmQgMSkuXG4gICAqL1xuICBUd2VlbmFibGUucHJvdG90eXBlLmZvcm11bGEgPSB7XG4gICAgbGluZWFyOiBmdW5jdGlvbiAocG9zKSB7XG4gICAgICByZXR1cm4gcG9zO1xuICAgIH1cbiAgfTtcblxuICBmb3JtdWxhID0gVHdlZW5hYmxlLnByb3RvdHlwZS5mb3JtdWxhO1xuXG4gIHNoYWxsb3dDb3B5KFR3ZWVuYWJsZSwge1xuICAgICdub3cnOiBub3dcbiAgICAsJ2VhY2gnOiBlYWNoXG4gICAgLCd0d2VlblByb3BzJzogdHdlZW5Qcm9wc1xuICAgICwndHdlZW5Qcm9wJzogdHdlZW5Qcm9wXG4gICAgLCdhcHBseUZpbHRlcic6IGFwcGx5RmlsdGVyXG4gICAgLCdzaGFsbG93Q29weSc6IHNoYWxsb3dDb3B5XG4gICAgLCdkZWZhdWx0cyc6IGRlZmF1bHRzXG4gICAgLCdjb21wb3NlRWFzaW5nT2JqZWN0JzogY29tcG9zZUVhc2luZ09iamVjdFxuICB9KTtcblxuICAvLyBgcm9vdGAgaXMgcHJvdmlkZWQgaW4gdGhlIGludHJvL291dHJvIGZpbGVzLlxuXG4gIC8vIEEgaG9vayB1c2VkIGZvciB1bml0IHRlc3RpbmcuXG4gIGlmICh0eXBlb2YgU0hJRlRZX0RFQlVHX05PVyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJvb3QudGltZW91dEhhbmRsZXIgPSB0aW1lb3V0SGFuZGxlcjtcbiAgfVxuXG4gIC8vIEJvb3RzdHJhcCBUd2VlbmFibGUgYXBwcm9wcmlhdGVseSBmb3IgdGhlIGVudmlyb25tZW50LlxuICBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IFR3ZWVuYWJsZTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAvLyBBTURcbiAgICBkZWZpbmUoZnVuY3Rpb24gKCkge3JldHVybiBUd2VlbmFibGU7fSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHJvb3QuVHdlZW5hYmxlID09PSAndW5kZWZpbmVkJykge1xuICAgIC8vIEJyb3dzZXI6IE1ha2UgYFR3ZWVuYWJsZWAgZ2xvYmFsbHkgYWNjZXNzaWJsZS5cbiAgICByb290LlR3ZWVuYWJsZSA9IFR3ZWVuYWJsZTtcbiAgfVxuXG4gIHJldHVybiBUd2VlbmFibGU7XG5cbn0gKCkpO1xuXG4vKiFcbiAqIEFsbCBlcXVhdGlvbnMgYXJlIGFkYXB0ZWQgZnJvbSBUaG9tYXMgRnVjaHMnIFtTY3JpcHR5Ml0oaHR0cHM6Ly9naXRodWIuY29tL21hZHJvYmJ5L3NjcmlwdHkyL2Jsb2IvbWFzdGVyL3NyYy9lZmZlY3RzL3RyYW5zaXRpb25zL3Blbm5lci5qcykuXG4gKlxuICogQmFzZWQgb24gRWFzaW5nIEVxdWF0aW9ucyAoYykgMjAwMyBbUm9iZXJ0IFBlbm5lcl0oaHR0cDovL3d3dy5yb2JlcnRwZW5uZXIuY29tLyksIGFsbCByaWdodHMgcmVzZXJ2ZWQuIFRoaXMgd29yayBpcyBbc3ViamVjdCB0byB0ZXJtc10oaHR0cDovL3d3dy5yb2JlcnRwZW5uZXIuY29tL2Vhc2luZ190ZXJtc19vZl91c2UuaHRtbCkuXG4gKi9cblxuLyohXG4gKiAgVEVSTVMgT0YgVVNFIC0gRUFTSU5HIEVRVUFUSU9OU1xuICogIE9wZW4gc291cmNlIHVuZGVyIHRoZSBCU0QgTGljZW5zZS5cbiAqICBFYXNpbmcgRXF1YXRpb25zIChjKSAyMDAzIFJvYmVydCBQZW5uZXIsIGFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi9cblxuOyhmdW5jdGlvbiAoKSB7XG5cbiAgVHdlZW5hYmxlLnNoYWxsb3dDb3B5KFR3ZWVuYWJsZS5wcm90b3R5cGUuZm9ybXVsYSwge1xuICAgIGVhc2VJblF1YWQ6IGZ1bmN0aW9uIChwb3MpIHtcbiAgICAgIHJldHVybiBNYXRoLnBvdyhwb3MsIDIpO1xuICAgIH0sXG5cbiAgICBlYXNlT3V0UXVhZDogZnVuY3Rpb24gKHBvcykge1xuICAgICAgcmV0dXJuIC0oTWF0aC5wb3coKHBvcyAtIDEpLCAyKSAtIDEpO1xuICAgIH0sXG5cbiAgICBlYXNlSW5PdXRRdWFkOiBmdW5jdGlvbiAocG9zKSB7XG4gICAgICBpZiAoKHBvcyAvPSAwLjUpIDwgMSkge3JldHVybiAwLjUgKiBNYXRoLnBvdyhwb3MsMik7fVxuICAgICAgcmV0dXJuIC0wLjUgKiAoKHBvcyAtPSAyKSAqIHBvcyAtIDIpO1xuICAgIH0sXG5cbiAgICBlYXNlSW5DdWJpYzogZnVuY3Rpb24gKHBvcykge1xuICAgICAgcmV0dXJuIE1hdGgucG93KHBvcywgMyk7XG4gICAgfSxcblxuICAgIGVhc2VPdXRDdWJpYzogZnVuY3Rpb24gKHBvcykge1xuICAgICAgcmV0dXJuIChNYXRoLnBvdygocG9zIC0gMSksIDMpICsgMSk7XG4gICAgfSxcblxuICAgIGVhc2VJbk91dEN1YmljOiBmdW5jdGlvbiAocG9zKSB7XG4gICAgICBpZiAoKHBvcyAvPSAwLjUpIDwgMSkge3JldHVybiAwLjUgKiBNYXRoLnBvdyhwb3MsMyk7fVxuICAgICAgcmV0dXJuIDAuNSAqIChNYXRoLnBvdygocG9zIC0gMiksMykgKyAyKTtcbiAgICB9LFxuXG4gICAgZWFzZUluUXVhcnQ6IGZ1bmN0aW9uIChwb3MpIHtcbiAgICAgIHJldHVybiBNYXRoLnBvdyhwb3MsIDQpO1xuICAgIH0sXG5cbiAgICBlYXNlT3V0UXVhcnQ6IGZ1bmN0aW9uIChwb3MpIHtcbiAgICAgIHJldHVybiAtKE1hdGgucG93KChwb3MgLSAxKSwgNCkgLSAxKTtcbiAgICB9LFxuXG4gICAgZWFzZUluT3V0UXVhcnQ6IGZ1bmN0aW9uIChwb3MpIHtcbiAgICAgIGlmICgocG9zIC89IDAuNSkgPCAxKSB7cmV0dXJuIDAuNSAqIE1hdGgucG93KHBvcyw0KTt9XG4gICAgICByZXR1cm4gLTAuNSAqICgocG9zIC09IDIpICogTWF0aC5wb3cocG9zLDMpIC0gMik7XG4gICAgfSxcblxuICAgIGVhc2VJblF1aW50OiBmdW5jdGlvbiAocG9zKSB7XG4gICAgICByZXR1cm4gTWF0aC5wb3cocG9zLCA1KTtcbiAgICB9LFxuXG4gICAgZWFzZU91dFF1aW50OiBmdW5jdGlvbiAocG9zKSB7XG4gICAgICByZXR1cm4gKE1hdGgucG93KChwb3MgLSAxKSwgNSkgKyAxKTtcbiAgICB9LFxuXG4gICAgZWFzZUluT3V0UXVpbnQ6IGZ1bmN0aW9uIChwb3MpIHtcbiAgICAgIGlmICgocG9zIC89IDAuNSkgPCAxKSB7cmV0dXJuIDAuNSAqIE1hdGgucG93KHBvcyw1KTt9XG4gICAgICByZXR1cm4gMC41ICogKE1hdGgucG93KChwb3MgLSAyKSw1KSArIDIpO1xuICAgIH0sXG5cbiAgICBlYXNlSW5TaW5lOiBmdW5jdGlvbiAocG9zKSB7XG4gICAgICByZXR1cm4gLU1hdGguY29zKHBvcyAqIChNYXRoLlBJIC8gMikpICsgMTtcbiAgICB9LFxuXG4gICAgZWFzZU91dFNpbmU6IGZ1bmN0aW9uIChwb3MpIHtcbiAgICAgIHJldHVybiBNYXRoLnNpbihwb3MgKiAoTWF0aC5QSSAvIDIpKTtcbiAgICB9LFxuXG4gICAgZWFzZUluT3V0U2luZTogZnVuY3Rpb24gKHBvcykge1xuICAgICAgcmV0dXJuICgtMC41ICogKE1hdGguY29zKE1hdGguUEkgKiBwb3MpIC0gMSkpO1xuICAgIH0sXG5cbiAgICBlYXNlSW5FeHBvOiBmdW5jdGlvbiAocG9zKSB7XG4gICAgICByZXR1cm4gKHBvcyA9PT0gMCkgPyAwIDogTWF0aC5wb3coMiwgMTAgKiAocG9zIC0gMSkpO1xuICAgIH0sXG5cbiAgICBlYXNlT3V0RXhwbzogZnVuY3Rpb24gKHBvcykge1xuICAgICAgcmV0dXJuIChwb3MgPT09IDEpID8gMSA6IC1NYXRoLnBvdygyLCAtMTAgKiBwb3MpICsgMTtcbiAgICB9LFxuXG4gICAgZWFzZUluT3V0RXhwbzogZnVuY3Rpb24gKHBvcykge1xuICAgICAgaWYgKHBvcyA9PT0gMCkge3JldHVybiAwO31cbiAgICAgIGlmIChwb3MgPT09IDEpIHtyZXR1cm4gMTt9XG4gICAgICBpZiAoKHBvcyAvPSAwLjUpIDwgMSkge3JldHVybiAwLjUgKiBNYXRoLnBvdygyLDEwICogKHBvcyAtIDEpKTt9XG4gICAgICByZXR1cm4gMC41ICogKC1NYXRoLnBvdygyLCAtMTAgKiAtLXBvcykgKyAyKTtcbiAgICB9LFxuXG4gICAgZWFzZUluQ2lyYzogZnVuY3Rpb24gKHBvcykge1xuICAgICAgcmV0dXJuIC0oTWF0aC5zcXJ0KDEgLSAocG9zICogcG9zKSkgLSAxKTtcbiAgICB9LFxuXG4gICAgZWFzZU91dENpcmM6IGZ1bmN0aW9uIChwb3MpIHtcbiAgICAgIHJldHVybiBNYXRoLnNxcnQoMSAtIE1hdGgucG93KChwb3MgLSAxKSwgMikpO1xuICAgIH0sXG5cbiAgICBlYXNlSW5PdXRDaXJjOiBmdW5jdGlvbiAocG9zKSB7XG4gICAgICBpZiAoKHBvcyAvPSAwLjUpIDwgMSkge3JldHVybiAtMC41ICogKE1hdGguc3FydCgxIC0gcG9zICogcG9zKSAtIDEpO31cbiAgICAgIHJldHVybiAwLjUgKiAoTWF0aC5zcXJ0KDEgLSAocG9zIC09IDIpICogcG9zKSArIDEpO1xuICAgIH0sXG5cbiAgICBlYXNlT3V0Qm91bmNlOiBmdW5jdGlvbiAocG9zKSB7XG4gICAgICBpZiAoKHBvcykgPCAoMSAvIDIuNzUpKSB7XG4gICAgICAgIHJldHVybiAoNy41NjI1ICogcG9zICogcG9zKTtcbiAgICAgIH0gZWxzZSBpZiAocG9zIDwgKDIgLyAyLjc1KSkge1xuICAgICAgICByZXR1cm4gKDcuNTYyNSAqIChwb3MgLT0gKDEuNSAvIDIuNzUpKSAqIHBvcyArIDAuNzUpO1xuICAgICAgfSBlbHNlIGlmIChwb3MgPCAoMi41IC8gMi43NSkpIHtcbiAgICAgICAgcmV0dXJuICg3LjU2MjUgKiAocG9zIC09ICgyLjI1IC8gMi43NSkpICogcG9zICsgMC45Mzc1KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoNy41NjI1ICogKHBvcyAtPSAoMi42MjUgLyAyLjc1KSkgKiBwb3MgKyAwLjk4NDM3NSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGVhc2VJbkJhY2s6IGZ1bmN0aW9uIChwb3MpIHtcbiAgICAgIHZhciBzID0gMS43MDE1ODtcbiAgICAgIHJldHVybiAocG9zKSAqIHBvcyAqICgocyArIDEpICogcG9zIC0gcyk7XG4gICAgfSxcblxuICAgIGVhc2VPdXRCYWNrOiBmdW5jdGlvbiAocG9zKSB7XG4gICAgICB2YXIgcyA9IDEuNzAxNTg7XG4gICAgICByZXR1cm4gKHBvcyA9IHBvcyAtIDEpICogcG9zICogKChzICsgMSkgKiBwb3MgKyBzKSArIDE7XG4gICAgfSxcblxuICAgIGVhc2VJbk91dEJhY2s6IGZ1bmN0aW9uIChwb3MpIHtcbiAgICAgIHZhciBzID0gMS43MDE1ODtcbiAgICAgIGlmICgocG9zIC89IDAuNSkgPCAxKSB7cmV0dXJuIDAuNSAqIChwb3MgKiBwb3MgKiAoKChzICo9ICgxLjUyNSkpICsgMSkgKiBwb3MgLSBzKSk7fVxuICAgICAgcmV0dXJuIDAuNSAqICgocG9zIC09IDIpICogcG9zICogKCgocyAqPSAoMS41MjUpKSArIDEpICogcG9zICsgcykgKyAyKTtcbiAgICB9LFxuXG4gICAgZWxhc3RpYzogZnVuY3Rpb24gKHBvcykge1xuICAgICAgcmV0dXJuIC0xICogTWF0aC5wb3coNCwtOCAqIHBvcykgKiBNYXRoLnNpbigocG9zICogNiAtIDEpICogKDIgKiBNYXRoLlBJKSAvIDIpICsgMTtcbiAgICB9LFxuXG4gICAgc3dpbmdGcm9tVG86IGZ1bmN0aW9uIChwb3MpIHtcbiAgICAgIHZhciBzID0gMS43MDE1ODtcbiAgICAgIHJldHVybiAoKHBvcyAvPSAwLjUpIDwgMSkgPyAwLjUgKiAocG9zICogcG9zICogKCgocyAqPSAoMS41MjUpKSArIDEpICogcG9zIC0gcykpIDpcbiAgICAgICAgICAwLjUgKiAoKHBvcyAtPSAyKSAqIHBvcyAqICgoKHMgKj0gKDEuNTI1KSkgKyAxKSAqIHBvcyArIHMpICsgMik7XG4gICAgfSxcblxuICAgIHN3aW5nRnJvbTogZnVuY3Rpb24gKHBvcykge1xuICAgICAgdmFyIHMgPSAxLjcwMTU4O1xuICAgICAgcmV0dXJuIHBvcyAqIHBvcyAqICgocyArIDEpICogcG9zIC0gcyk7XG4gICAgfSxcblxuICAgIHN3aW5nVG86IGZ1bmN0aW9uIChwb3MpIHtcbiAgICAgIHZhciBzID0gMS43MDE1ODtcbiAgICAgIHJldHVybiAocG9zIC09IDEpICogcG9zICogKChzICsgMSkgKiBwb3MgKyBzKSArIDE7XG4gICAgfSxcblxuICAgIGJvdW5jZTogZnVuY3Rpb24gKHBvcykge1xuICAgICAgaWYgKHBvcyA8ICgxIC8gMi43NSkpIHtcbiAgICAgICAgcmV0dXJuICg3LjU2MjUgKiBwb3MgKiBwb3MpO1xuICAgICAgfSBlbHNlIGlmIChwb3MgPCAoMiAvIDIuNzUpKSB7XG4gICAgICAgIHJldHVybiAoNy41NjI1ICogKHBvcyAtPSAoMS41IC8gMi43NSkpICogcG9zICsgMC43NSk7XG4gICAgICB9IGVsc2UgaWYgKHBvcyA8ICgyLjUgLyAyLjc1KSkge1xuICAgICAgICByZXR1cm4gKDcuNTYyNSAqIChwb3MgLT0gKDIuMjUgLyAyLjc1KSkgKiBwb3MgKyAwLjkzNzUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICg3LjU2MjUgKiAocG9zIC09ICgyLjYyNSAvIDIuNzUpKSAqIHBvcyArIDAuOTg0Mzc1KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYm91bmNlUGFzdDogZnVuY3Rpb24gKHBvcykge1xuICAgICAgaWYgKHBvcyA8ICgxIC8gMi43NSkpIHtcbiAgICAgICAgcmV0dXJuICg3LjU2MjUgKiBwb3MgKiBwb3MpO1xuICAgICAgfSBlbHNlIGlmIChwb3MgPCAoMiAvIDIuNzUpKSB7XG4gICAgICAgIHJldHVybiAyIC0gKDcuNTYyNSAqIChwb3MgLT0gKDEuNSAvIDIuNzUpKSAqIHBvcyArIDAuNzUpO1xuICAgICAgfSBlbHNlIGlmIChwb3MgPCAoMi41IC8gMi43NSkpIHtcbiAgICAgICAgcmV0dXJuIDIgLSAoNy41NjI1ICogKHBvcyAtPSAoMi4yNSAvIDIuNzUpKSAqIHBvcyArIDAuOTM3NSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gMiAtICg3LjU2MjUgKiAocG9zIC09ICgyLjYyNSAvIDIuNzUpKSAqIHBvcyArIDAuOTg0Mzc1KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZWFzZUZyb21UbzogZnVuY3Rpb24gKHBvcykge1xuICAgICAgaWYgKChwb3MgLz0gMC41KSA8IDEpIHtyZXR1cm4gMC41ICogTWF0aC5wb3cocG9zLDQpO31cbiAgICAgIHJldHVybiAtMC41ICogKChwb3MgLT0gMikgKiBNYXRoLnBvdyhwb3MsMykgLSAyKTtcbiAgICB9LFxuXG4gICAgZWFzZUZyb206IGZ1bmN0aW9uIChwb3MpIHtcbiAgICAgIHJldHVybiBNYXRoLnBvdyhwb3MsNCk7XG4gICAgfSxcblxuICAgIGVhc2VUbzogZnVuY3Rpb24gKHBvcykge1xuICAgICAgcmV0dXJuIE1hdGgucG93KHBvcywwLjI1KTtcbiAgICB9XG4gIH0pO1xuXG59KCkpO1xuXG4vKiFcbiAqIFRoZSBCZXppZXIgbWFnaWMgaW4gdGhpcyBmaWxlIGlzIGFkYXB0ZWQvY29waWVkIGFsbW9zdCB3aG9sZXNhbGUgZnJvbVxuICogW1NjcmlwdHkyXShodHRwczovL2dpdGh1Yi5jb20vbWFkcm9iYnkvc2NyaXB0eTIvYmxvYi9tYXN0ZXIvc3JjL2VmZmVjdHMvdHJhbnNpdGlvbnMvY3ViaWMtYmV6aWVyLmpzKSxcbiAqIHdoaWNoIHdhcyBhZGFwdGVkIGZyb20gQXBwbGUgY29kZSAod2hpY2ggcHJvYmFibHkgY2FtZSBmcm9tXG4gKiBbaGVyZV0oaHR0cDovL29wZW5zb3VyY2UuYXBwbGUuY29tL3NvdXJjZS9XZWJDb3JlL1dlYkNvcmUtOTU1LjY2L3BsYXRmb3JtL2dyYXBoaWNzL1VuaXRCZXppZXIuaCkpLlxuICogU3BlY2lhbCB0aGFua3MgdG8gQXBwbGUgYW5kIFRob21hcyBGdWNocyBmb3IgbXVjaCBvZiB0aGlzIGNvZGUuXG4gKi9cblxuLyohXG4gKiAgQ29weXJpZ2h0IChjKSAyMDA2IEFwcGxlIENvbXB1dGVyLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuICogIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuICpcbiAqICAxLiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4gKiAgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbiAqXG4gKiAgMi4gUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxuICogIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb25cbiAqICBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cbiAqXG4gKiAgMy4gTmVpdGhlciB0aGUgbmFtZSBvZiB0aGUgY29weXJpZ2h0IGhvbGRlcihzKSBub3IgdGhlIG5hbWVzIG9mIGFueVxuICogIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tXG4gKiAgdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbiAqXG4gKiAgVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SU1xuICogIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTyxcbiAqICBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0VcbiAqICBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBPV05FUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFXG4gKiAgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFU1xuICogIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUztcbiAqICBMT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT05cbiAqICBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVFxuICogIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTXG4gKiAgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4gKi9cbjsoZnVuY3Rpb24gKCkge1xuICAvLyBwb3J0IG9mIHdlYmtpdCBjdWJpYyBiZXppZXIgaGFuZGxpbmcgYnkgaHR0cDovL3d3dy5uZXR6Z2VzdGEuZGUvZGV2L1xuICBmdW5jdGlvbiBjdWJpY0JlemllckF0VGltZSh0LHAxeCxwMXkscDJ4LHAyeSxkdXJhdGlvbikge1xuICAgIHZhciBheCA9IDAsYnggPSAwLGN4ID0gMCxheSA9IDAsYnkgPSAwLGN5ID0gMDtcbiAgICBmdW5jdGlvbiBzYW1wbGVDdXJ2ZVgodCkge3JldHVybiAoKGF4ICogdCArIGJ4KSAqIHQgKyBjeCkgKiB0O31cbiAgICBmdW5jdGlvbiBzYW1wbGVDdXJ2ZVkodCkge3JldHVybiAoKGF5ICogdCArIGJ5KSAqIHQgKyBjeSkgKiB0O31cbiAgICBmdW5jdGlvbiBzYW1wbGVDdXJ2ZURlcml2YXRpdmVYKHQpIHtyZXR1cm4gKDMuMCAqIGF4ICogdCArIDIuMCAqIGJ4KSAqIHQgKyBjeDt9XG4gICAgZnVuY3Rpb24gc29sdmVFcHNpbG9uKGR1cmF0aW9uKSB7cmV0dXJuIDEuMCAvICgyMDAuMCAqIGR1cmF0aW9uKTt9XG4gICAgZnVuY3Rpb24gc29sdmUoeCxlcHNpbG9uKSB7cmV0dXJuIHNhbXBsZUN1cnZlWShzb2x2ZUN1cnZlWCh4LGVwc2lsb24pKTt9XG4gICAgZnVuY3Rpb24gZmFicyhuKSB7aWYgKG4gPj0gMCkge3JldHVybiBuO31lbHNlIHtyZXR1cm4gMCAtIG47fX1cbiAgICBmdW5jdGlvbiBzb2x2ZUN1cnZlWCh4LGVwc2lsb24pIHtcbiAgICAgIHZhciB0MCx0MSx0Mix4MixkMixpO1xuICAgICAgZm9yICh0MiA9IHgsIGkgPSAwOyBpIDwgODsgaSsrKSB7eDIgPSBzYW1wbGVDdXJ2ZVgodDIpIC0geDsgaWYgKGZhYnMoeDIpIDwgZXBzaWxvbikge3JldHVybiB0Mjt9IGQyID0gc2FtcGxlQ3VydmVEZXJpdmF0aXZlWCh0Mik7IGlmIChmYWJzKGQyKSA8IDFlLTYpIHticmVhazt9IHQyID0gdDIgLSB4MiAvIGQyO31cbiAgICAgIHQwID0gMC4wOyB0MSA9IDEuMDsgdDIgPSB4OyBpZiAodDIgPCB0MCkge3JldHVybiB0MDt9IGlmICh0MiA+IHQxKSB7cmV0dXJuIHQxO31cbiAgICAgIHdoaWxlICh0MCA8IHQxKSB7eDIgPSBzYW1wbGVDdXJ2ZVgodDIpOyBpZiAoZmFicyh4MiAtIHgpIDwgZXBzaWxvbikge3JldHVybiB0Mjt9IGlmICh4ID4geDIpIHt0MCA9IHQyO31lbHNlIHt0MSA9IHQyO30gdDIgPSAodDEgLSB0MCkgKiAwLjUgKyB0MDt9XG4gICAgICByZXR1cm4gdDI7IC8vIEZhaWx1cmUuXG4gICAgfVxuICAgIGN4ID0gMy4wICogcDF4OyBieCA9IDMuMCAqIChwMnggLSBwMXgpIC0gY3g7IGF4ID0gMS4wIC0gY3ggLSBieDsgY3kgPSAzLjAgKiBwMXk7IGJ5ID0gMy4wICogKHAyeSAtIHAxeSkgLSBjeTsgYXkgPSAxLjAgLSBjeSAtIGJ5O1xuICAgIHJldHVybiBzb2x2ZSh0LCBzb2x2ZUVwc2lsb24oZHVyYXRpb24pKTtcbiAgfVxuICAvKiFcbiAgICogIGdldEN1YmljQmV6aWVyVHJhbnNpdGlvbih4MSwgeTEsIHgyLCB5MikgLT4gRnVuY3Rpb25cbiAgICpcbiAgICogIEdlbmVyYXRlcyBhIHRyYW5zaXRpb24gZWFzaW5nIGZ1bmN0aW9uIHRoYXQgaXMgY29tcGF0aWJsZVxuICAgKiAgd2l0aCBXZWJLaXQncyBDU1MgdHJhbnNpdGlvbnMgYC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb25gXG4gICAqICBDU1MgcHJvcGVydHkuXG4gICAqXG4gICAqICBUaGUgVzNDIGhhcyBtb3JlIGluZm9ybWF0aW9uIGFib3V0XG4gICAqICA8YSBocmVmPVwiaHR0cDovL3d3dy53My5vcmcvVFIvY3NzMy10cmFuc2l0aW9ucy8jdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb25fdGFnXCI+XG4gICAqICBDU1MzIHRyYW5zaXRpb24gdGltaW5nIGZ1bmN0aW9uczwvYT4uXG4gICAqXG4gICAqICBAcGFyYW0ge251bWJlcn0geDFcbiAgICogIEBwYXJhbSB7bnVtYmVyfSB5MVxuICAgKiAgQHBhcmFtIHtudW1iZXJ9IHgyXG4gICAqICBAcGFyYW0ge251bWJlcn0geTJcbiAgICogIEByZXR1cm4ge2Z1bmN0aW9ufVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0Q3ViaWNCZXppZXJUcmFuc2l0aW9uICh4MSwgeTEsIHgyLCB5Mikge1xuICAgIHJldHVybiBmdW5jdGlvbiAocG9zKSB7XG4gICAgICByZXR1cm4gY3ViaWNCZXppZXJBdFRpbWUocG9zLHgxLHkxLHgyLHkyLDEpO1xuICAgIH07XG4gIH1cbiAgLy8gRW5kIHBvcnRlZCBjb2RlXG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBCZXppZXIgZWFzaW5nIGZ1bmN0aW9uIGFuZCBhdHRhY2hlcyBpdCB0byBgVHdlZW5hYmxlLnByb3RvdHlwZS5mb3JtdWxhYC4gIFRoaXMgZnVuY3Rpb24gZ2l2ZXMgeW91IHRvdGFsIGNvbnRyb2wgb3ZlciB0aGUgZWFzaW5nIGN1cnZlLiAgTWF0dGhldyBMZWluJ3MgW0NlYXNlcl0oaHR0cDovL21hdHRoZXdsZWluLmNvbS9jZWFzZXIvKSBpcyBhIHVzZWZ1bCB0b29sIGZvciB2aXN1YWxpemluZyB0aGUgY3VydmVzIHlvdSBjYW4gbWFrZSB3aXRoIHRoaXMgZnVuY3Rpb24uXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBlYXNpbmcgY3VydmUuICBPdmVyd3JpdGVzIHRoZSBvbGQgZWFzaW5nIGZ1bmN0aW9uIG9uIFR3ZWVuYWJsZS5wcm90b3R5cGUuZm9ybXVsYSBpZiBpdCBleGlzdHMuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB4MVxuICAgKiBAcGFyYW0ge251bWJlcn0geTFcbiAgICogQHBhcmFtIHtudW1iZXJ9IHgyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB5MlxuICAgKiBAcmV0dXJuIHtmdW5jdGlvbn0gVGhlIGVhc2luZyBmdW5jdGlvbiB0aGF0IHdhcyBhdHRhY2hlZCB0byBUd2VlbmFibGUucHJvdG90eXBlLmZvcm11bGEuXG4gICAqL1xuICBUd2VlbmFibGUuc2V0QmV6aWVyRnVuY3Rpb24gPSBmdW5jdGlvbiAobmFtZSwgeDEsIHkxLCB4MiwgeTIpIHtcbiAgICB2YXIgY3ViaWNCZXppZXJUcmFuc2l0aW9uID0gZ2V0Q3ViaWNCZXppZXJUcmFuc2l0aW9uKHgxLCB5MSwgeDIsIHkyKTtcbiAgICBjdWJpY0JlemllclRyYW5zaXRpb24ueDEgPSB4MTtcbiAgICBjdWJpY0JlemllclRyYW5zaXRpb24ueTEgPSB5MTtcbiAgICBjdWJpY0JlemllclRyYW5zaXRpb24ueDIgPSB4MjtcbiAgICBjdWJpY0JlemllclRyYW5zaXRpb24ueTIgPSB5MjtcblxuICAgIHJldHVybiBUd2VlbmFibGUucHJvdG90eXBlLmZvcm11bGFbbmFtZV0gPSBjdWJpY0JlemllclRyYW5zaXRpb247XG4gIH07XG5cblxuICAvKipcbiAgICogYGRlbGV0ZWBzIGFuIGVhc2luZyBmdW5jdGlvbiBmcm9tIGBUd2VlbmFibGUucHJvdG90eXBlLmZvcm11bGFgLiAgQmUgY2FyZWZ1bCB3aXRoIHRoaXMgbWV0aG9kLCBhcyBpdCBgZGVsZXRlYHMgd2hhdGV2ZXIgZWFzaW5nIGZvcm11bGEgbWF0Y2hlcyBgbmFtZWAgKHdoaWNoIG1lYW5zIHlvdSBjYW4gZGVsZXRlIGRlZmF1bHQgU2hpZnR5IGVhc2luZyBmdW5jdGlvbnMpLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgZWFzaW5nIGZ1bmN0aW9uIHRvIGRlbGV0ZS5cbiAgICogQHJldHVybiB7ZnVuY3Rpb259XG4gICAqL1xuICBUd2VlbmFibGUudW5zZXRCZXppZXJGdW5jdGlvbiA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgZGVsZXRlIFR3ZWVuYWJsZS5wcm90b3R5cGUuZm9ybXVsYVtuYW1lXTtcbiAgfTtcblxufSkoKTtcblxuOyhmdW5jdGlvbiAoKSB7XG5cbiAgZnVuY3Rpb24gZ2V0SW50ZXJwb2xhdGVkVmFsdWVzIChcbiAgICBmcm9tLCBjdXJyZW50LCB0YXJnZXRTdGF0ZSwgcG9zaXRpb24sIGVhc2luZykge1xuICAgIHJldHVybiBUd2VlbmFibGUudHdlZW5Qcm9wcyhcbiAgICAgIHBvc2l0aW9uLCBjdXJyZW50LCBmcm9tLCB0YXJnZXRTdGF0ZSwgMSwgMCwgZWFzaW5nKTtcbiAgfVxuXG4gIC8vIEZha2UgYSBUd2VlbmFibGUgYW5kIHBhdGNoIHNvbWUgaW50ZXJuYWxzLiAgVGhpcyBhcHByb2FjaCBhbGxvd3MgdXMgdG9cbiAgLy8gc2tpcCB1bmVjY2Vzc2FyeSBwcm9jZXNzaW5nIGFuZCBvYmplY3QgcmVjcmVhdGlvbiwgY3V0dGluZyBkb3duIG9uIGdhcmJhZ2VcbiAgLy8gY29sbGVjdGlvbiBwYXVzZXMuXG4gIHZhciBtb2NrVHdlZW5hYmxlID0gbmV3IFR3ZWVuYWJsZSgpO1xuICBtb2NrVHdlZW5hYmxlLl9maWx0ZXJBcmdzID0gW107XG5cbiAgLyoqXG4gICAqIENvbXB1dGUgdGhlIG1pZHBvaW50IG9mIHR3byBPYmplY3RzLiAgVGhpcyBtZXRob2QgZWZmZWN0aXZlbHkgY2FsY3VsYXRlcyBhIHNwZWNpZmljIGZyYW1lIG9mIGFuaW1hdGlvbiB0aGF0IFtUd2VlbmFibGUjdHdlZW5dKHNoaWZ0eS5jb3JlLmpzLmh0bWwjdHdlZW4pIGRvZXMgbWFueSB0aW1lcyBvdmVyIHRoZSBjb3Vyc2Ugb2YgYSB0d2Vlbi5cbiAgICpcbiAgICogRXhhbXBsZTpcbiAgICpcbiAgICogYGBgXG4gICAqICB2YXIgaW50ZXJwb2xhdGVkVmFsdWVzID0gVHdlZW5hYmxlLmludGVycG9sYXRlKHtcbiAgICogICAgd2lkdGg6ICcxMDBweCcsXG4gICAqICAgIG9wYWNpdHk6IDAsXG4gICAqICAgIGNvbG9yOiAnI2ZmZidcbiAgICogIH0sIHtcbiAgICogICAgd2lkdGg6ICcyMDBweCcsXG4gICAqICAgIG9wYWNpdHk6IDEsXG4gICAqICAgIGNvbG9yOiAnIzAwMCdcbiAgICogIH0sIDAuNSk7XG4gICAqXG4gICAqICBjb25zb2xlLmxvZyhpbnRlcnBvbGF0ZWRWYWx1ZXMpO1xuICAgKiAgLy8ge29wYWNpdHk6IDAuNSwgd2lkdGg6IFwiMTUwcHhcIiwgY29sb3I6IFwicmdiKDEyNywxMjcsMTI3KVwifVxuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGZyb20gVGhlIHN0YXJ0aW5nIHZhbHVlcyB0byB0d2VlbiBmcm9tLlxuICAgKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0U3RhdGUgVGhlIGVuZGluZyB2YWx1ZXMgdG8gdHdlZW4gdG8uXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwb3NpdGlvbiBUaGUgbm9ybWFsaXplZCBwb3NpdGlvbiB2YWx1ZSAoYmV0d2VlbiAwLjAgYW5kIDEuMCkgdG8gaW50ZXJwb2xhdGUgdGhlIHZhbHVlcyBiZXR3ZWVuIGBmcm9tYCBhbmQgYHRvYCBmb3IuICBgZnJvbWAgcmVwcmVzZW50cyAwIGFuZCBgdG9gIHJlcHJlc2VudHMgYDFgLlxuICAgKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IGVhc2luZyBUaGUgZWFzaW5nIGN1cnZlKHMpIHRvIGNhbGN1bGF0ZSB0aGUgbWlkcG9pbnQgYWdhaW5zdC4gIFlvdSBjYW4gcmVmZXJlbmNlIGFueSBlYXNpbmcgZnVuY3Rpb24gYXR0YWNoZWQgdG8gYFR3ZWVuYWJsZS5wcm90b3R5cGUuZm9ybXVsYWAuICBJZiBvbWl0dGVkLCB0aGlzIGRlZmF1bHRzIHRvIFwibGluZWFyXCIuXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovXG4gIFR3ZWVuYWJsZS5pbnRlcnBvbGF0ZSA9IGZ1bmN0aW9uIChmcm9tLCB0YXJnZXRTdGF0ZSwgcG9zaXRpb24sIGVhc2luZykge1xuICAgIHZhciBjdXJyZW50ID0gVHdlZW5hYmxlLnNoYWxsb3dDb3B5KHt9LCBmcm9tKTtcbiAgICB2YXIgZWFzaW5nT2JqZWN0ID0gVHdlZW5hYmxlLmNvbXBvc2VFYXNpbmdPYmplY3QoXG4gICAgICBmcm9tLCBlYXNpbmcgfHwgJ2xpbmVhcicpO1xuXG4gICAgbW9ja1R3ZWVuYWJsZS5zZXQoe30pO1xuXG4gICAgLy8gQWxpYXMgYW5kIHJldXNlIHRoZSBfZmlsdGVyQXJncyBhcnJheSBpbnN0ZWFkIG9mIHJlY3JlYXRpbmcgaXQuXG4gICAgdmFyIGZpbHRlckFyZ3MgPSBtb2NrVHdlZW5hYmxlLl9maWx0ZXJBcmdzO1xuICAgIGZpbHRlckFyZ3MubGVuZ3RoID0gMDtcbiAgICBmaWx0ZXJBcmdzWzBdID0gY3VycmVudDtcbiAgICBmaWx0ZXJBcmdzWzFdID0gZnJvbTtcbiAgICBmaWx0ZXJBcmdzWzJdID0gdGFyZ2V0U3RhdGU7XG4gICAgZmlsdGVyQXJnc1szXSA9IGVhc2luZ09iamVjdDtcblxuICAgIC8vIEFueSBkZWZpbmVkIHZhbHVlIHRyYW5zZm9ybWF0aW9uIG11c3QgYmUgYXBwbGllZFxuICAgIFR3ZWVuYWJsZS5hcHBseUZpbHRlcihtb2NrVHdlZW5hYmxlLCAndHdlZW5DcmVhdGVkJyk7XG4gICAgVHdlZW5hYmxlLmFwcGx5RmlsdGVyKG1vY2tUd2VlbmFibGUsICdiZWZvcmVUd2VlbicpO1xuXG4gICAgdmFyIGludGVycG9sYXRlZFZhbHVlcyA9IGdldEludGVycG9sYXRlZFZhbHVlcyhcbiAgICAgIGZyb20sIGN1cnJlbnQsIHRhcmdldFN0YXRlLCBwb3NpdGlvbiwgZWFzaW5nT2JqZWN0KTtcblxuICAgIC8vIFRyYW5zZm9ybSB2YWx1ZXMgYmFjayBpbnRvIHRoZWlyIG9yaWdpbmFsIGZvcm1hdFxuICAgIFR3ZWVuYWJsZS5hcHBseUZpbHRlcihtb2NrVHdlZW5hYmxlLCAnYWZ0ZXJUd2VlbicpO1xuXG4gICAgcmV0dXJuIGludGVycG9sYXRlZFZhbHVlcztcbiAgfTtcblxufSgpKTtcblxuLyoqXG4gKiBBZGRzIHN0cmluZyBpbnRlcnBvbGF0aW9uIHN1cHBvcnQgdG8gU2hpZnR5LlxuICpcbiAqIFRoZSBUb2tlbiBleHRlbnNpb24gYWxsb3dzIFNoaWZ0eSB0byB0d2VlbiBudW1iZXJzIGluc2lkZSBvZiBzdHJpbmdzLiAgQW1vbmcgb3RoZXIgdGhpbmdzLCB0aGlzIGFsbG93cyB5b3UgdG8gYW5pbWF0ZSBDU1MgcHJvcGVydGllcy4gIEZvciBleGFtcGxlLCB5b3UgY2FuIGRvIHRoaXM6XG4gKlxuICogYGBgXG4gKiB2YXIgdHdlZW5hYmxlID0gbmV3IFR3ZWVuYWJsZSgpO1xuICogdHdlZW5hYmxlLnR3ZWVuKHtcbiAqICAgZnJvbTogeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDQ1cHgpJ30sXG4gKiAgIHRvOiB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoOTB4cCknfVxuICogfSk7XG4gKiBgYGBcbiAqXG4gKiBgdHJhbnNsYXRlWCg0NSlgIHdpbGwgYmUgdHdlZW5lZCB0byBgdHJhbnNsYXRlWCg5MClgLiAgVG8gZGVtb25zdHJhdGU6XG4gKlxuICogYGBgXG4gKiB2YXIgdHdlZW5hYmxlID0gbmV3IFR3ZWVuYWJsZSgpO1xuICogdHdlZW5hYmxlLnR3ZWVuKHtcbiAqICAgZnJvbTogeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDQ1cHgpJ30sXG4gKiAgIHRvOiB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoOTBweCknfSxcbiAqICAgc3RlcDogZnVuY3Rpb24gKHN0YXRlKSB7XG4gKiAgICAgY29uc29sZS5sb2coc3RhdGUudHJhbnNmb3JtKTtcbiAqICAgfVxuICogfSk7XG4gKiBgYGBcbiAqXG4gKiBUaGUgYWJvdmUgc25pcHBldCB3aWxsIGxvZyBzb21ldGhpbmcgbGlrZSB0aGlzIGluIHRoZSBjb25zb2xlOlxuICpcbiAqIGBgYFxuICogdHJhbnNsYXRlWCg2MC4zcHgpXG4gKiAuLi5cbiAqIHRyYW5zbGF0ZVgoNzYuMDVweClcbiAqIC4uLlxuICogdHJhbnNsYXRlWCg5MHB4KVxuICogYGBgXG4gKlxuICogQW5vdGhlciB1c2UgZm9yIHRoaXMgaXMgYW5pbWF0aW5nIGNvbG9yczpcbiAqXG4gKiBgYGBcbiAqIHZhciB0d2VlbmFibGUgPSBuZXcgVHdlZW5hYmxlKCk7XG4gKiB0d2VlbmFibGUudHdlZW4oe1xuICogICBmcm9tOiB7IGNvbG9yOiAncmdiKDAsMjU1LDApJ30sXG4gKiAgIHRvOiB7IGNvbG9yOiAncmdiKDI1NSwwLDI1NSknfSxcbiAqICAgc3RlcDogZnVuY3Rpb24gKHN0YXRlKSB7XG4gKiAgICAgY29uc29sZS5sb2coc3RhdGUuY29sb3IpO1xuICogICB9XG4gKiB9KTtcbiAqIGBgYFxuICpcbiAqIFRoZSBhYm92ZSBzbmlwcGV0IHdpbGwgbG9nIHNvbWV0aGluZyBsaWtlIHRoaXM6XG4gKlxuICogYGBgXG4gKiByZ2IoODQsMTcwLDg0KVxuICogLi4uXG4gKiByZ2IoMTcwLDg0LDE3MClcbiAqIC4uLlxuICogcmdiKDI1NSwwLDI1NSlcbiAqIGBgYFxuICpcbiAqIFRoaXMgZXh0ZW5zaW9uIGFsc28gc3VwcG9ydHMgaGV4YWRlY2ltYWwgY29sb3JzLCBpbiBib3RoIGxvbmcgKGAjZmYwMGZmYCkgYW5kIHNob3J0IChgI2YwZmApIGZvcm1zLiAgQmUgYXdhcmUgdGhhdCBoZXhhZGVjaW1hbCBpbnB1dCB2YWx1ZXMgd2lsbCBiZSBjb252ZXJ0ZWQgaW50byB0aGUgZXF1aXZhbGVudCBSR0Igb3V0cHV0IHZhbHVlcy4gIFRoaXMgaXMgZG9uZSB0byBvcHRpbWl6ZSBmb3IgcGVyZm9ybWFuY2UuXG4gKlxuICogYGBgXG4gKiB2YXIgdHdlZW5hYmxlID0gbmV3IFR3ZWVuYWJsZSgpO1xuICogdHdlZW5hYmxlLnR3ZWVuKHtcbiAqICAgZnJvbTogeyBjb2xvcjogJyMwZjAnfSxcbiAqICAgdG86IHsgY29sb3I6ICcjZjBmJ30sXG4gKiAgIHN0ZXA6IGZ1bmN0aW9uIChzdGF0ZSkge1xuICogICAgIGNvbnNvbGUubG9nKHN0YXRlLmNvbG9yKTtcbiAqICAgfVxuICogfSk7XG4gKiBgYGBcbiAqXG4gKiBUaGlzIHNuaXBwZXQgd2lsbCBnZW5lcmF0ZSB0aGUgc2FtZSBvdXRwdXQgYXMgdGhlIG9uZSBiZWZvcmUgaXQgYmVjYXVzZSBlcXVpdmFsZW50IHZhbHVlcyB3ZXJlIHN1cHBsaWVkIChqdXN0IGluIGhleGFkZWNpbWFsIGZvcm0gcmF0aGVyIHRoYW4gUkdCKTpcbiAqXG4gKiBgYGBcbiAqIHJnYig4NCwxNzAsODQpXG4gKiAuLi5cbiAqIHJnYigxNzAsODQsMTcwKVxuICogLi4uXG4gKiByZ2IoMjU1LDAsMjU1KVxuICogYGBgXG4gKlxuICogIyMgRWFzaW5nIHN1cHBvcnRcbiAqXG4gKiBFYXNpbmcgd29ya3Mgc29tZXdoYXQgZGlmZmVyZW50bHkgaW4gdGhlIFRva2VuIGV4dGVuc2lvbi4gIFRoaXMgaXMgYmVjYXVzZSBzb21lIENTUyBwcm9wZXJ0aWVzIGhhdmUgbXVsdGlwbGUgdmFsdWVzIGluIHRoZW0sIGFuZCB5b3UgbWlnaHQgbmVlZCB0byB0d2VlbiBlYWNoIHZhbHVlIGFsb25nIGl0cyBvd24gZWFzaW5nIGN1cnZlLiAgQSBiYXNpYyBleGFtcGxlOlxuICpcbiAqIGBgYFxuICogdmFyIHR3ZWVuYWJsZSA9IG5ldyBUd2VlbmFibGUoKTtcbiAqIHR3ZWVuYWJsZS50d2Vlbih7XG4gKiAgIGZyb206IHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwcHgpIHRyYW5zbGF0ZVkoMHB4KSd9LFxuICogICB0bzogeyB0cmFuc2Zvcm06ICAgJ3RyYW5zbGF0ZVgoMTAwcHgpIHRyYW5zbGF0ZVkoMTAwcHgpJ30sXG4gKiAgIGVhc2luZzogeyB0cmFuc2Zvcm06ICdlYXNlSW5RdWFkJyB9LFxuICogICBzdGVwOiBmdW5jdGlvbiAoc3RhdGUpIHtcbiAqICAgICBjb25zb2xlLmxvZyhzdGF0ZS50cmFuc2Zvcm0pO1xuICogICB9XG4gKiB9KTtcbiAqIGBgYFxuICpcbiAqIFRoZSBhYm92ZSBzbmlwcGV0IGNyZWF0ZSB2YWx1ZXMgbGlrZSB0aGlzOlxuICpcbiAqIGBgYFxuICogdHJhbnNsYXRlWCgxMS41NjAwMDAwMDAwMDAwMDJweCkgdHJhbnNsYXRlWSgxMS41NjAwMDAwMDAwMDAwMDJweClcbiAqIC4uLlxuICogdHJhbnNsYXRlWCg0Ni4yNDAwMDAwMDAwMDAwMXB4KSB0cmFuc2xhdGVZKDQ2LjI0MDAwMDAwMDAwMDAxcHgpXG4gKiAuLi5cbiAqIHRyYW5zbGF0ZVgoMTAwcHgpIHRyYW5zbGF0ZVkoMTAwcHgpXG4gKiBgYGBcbiAqXG4gKiBJbiB0aGlzIGNhc2UsIHRoZSB2YWx1ZXMgZm9yIGB0cmFuc2xhdGVYYCBhbmQgYHRyYW5zbGF0ZVlgIGFyZSBhbHdheXMgdGhlIHNhbWUgZm9yIGVhY2ggc3RlcCBvZiB0aGUgdHdlZW4sIGJlY2F1c2UgdGhleSBoYXZlIHRoZSBzYW1lIHN0YXJ0IGFuZCBlbmQgcG9pbnRzIGFuZCBib3RoIHVzZSB0aGUgc2FtZSBlYXNpbmcgY3VydmUuICBXZSBjYW4gYWxzbyB0d2VlbiBgdHJhbnNsYXRlWGAgYW5kIGB0cmFuc2xhdGVZYCBhbG9uZyBpbmRlcGVuZGVudCBjdXJ2ZXM6XG4gKlxuICogYGBgXG4gKiB2YXIgdHdlZW5hYmxlID0gbmV3IFR3ZWVuYWJsZSgpO1xuICogdHdlZW5hYmxlLnR3ZWVuKHtcbiAqICAgZnJvbTogeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDBweCkgdHJhbnNsYXRlWSgwcHgpJ30sXG4gKiAgIHRvOiB7IHRyYW5zZm9ybTogICAndHJhbnNsYXRlWCgxMDBweCkgdHJhbnNsYXRlWSgxMDBweCknfSxcbiAqICAgZWFzaW5nOiB7IHRyYW5zZm9ybTogJ2Vhc2VJblF1YWQgYm91bmNlJyB9LFxuICogICBzdGVwOiBmdW5jdGlvbiAoc3RhdGUpIHtcbiAqICAgICBjb25zb2xlLmxvZyhzdGF0ZS50cmFuc2Zvcm0pO1xuICogICB9XG4gKiB9KTtcbiAqIGBgYFxuICpcbiAqIFRoZSBhYm92ZSBzbmlwcGV0IGNyZWF0ZSB2YWx1ZXMgbGlrZSB0aGlzOlxuICpcbiAqIGBgYFxuICogdHJhbnNsYXRlWCgxMC44OXB4KSB0cmFuc2xhdGVZKDgyLjM1NTYyNXB4KVxuICogLi4uXG4gKiB0cmFuc2xhdGVYKDQ0Ljg5MDAwMDAwMDAwMDAxcHgpIHRyYW5zbGF0ZVkoODYuNzMwNjI1MDAwMDAwMDJweClcbiAqIC4uLlxuICogdHJhbnNsYXRlWCgxMDBweCkgdHJhbnNsYXRlWSgxMDBweClcbiAqIGBgYFxuICpcbiAqIGB0cmFuc2xhdGVYYCBhbmQgYHRyYW5zbGF0ZVlgIGFyZSBub3QgaW4gc3luYyBhbnltb3JlLCBiZWNhdXNlIGBlYXNlSW5RdWFkYCB3YXMgc3BlY2lmaWVkIGZvciBgdHJhbnNsYXRlWGAgYW5kIGBib3VuY2VgIGZvciBgdHJhbnNsYXRlWWAuICBNaXhpbmcgYW5kIG1hdGNoaW5nIGVhc2luZyBjdXJ2ZXMgY2FuIG1ha2UgZm9yIHNvbWUgaW50ZXJlc3RpbmcgbW90aW9uIGluIHlvdXIgYW5pbWF0aW9ucy5cbiAqXG4gKiBUaGUgb3JkZXIgb2YgdGhlIHNwYWNlLXNlcGFyYXRlZCBlYXNpbmcgY3VydmVzIGNvcnJlc3BvbmQgdGhlIHRva2VuIHZhbHVlcyB0aGV5IGFwcGx5IHRvLiAgSWYgdGhlcmUgYXJlIG1vcmUgdG9rZW4gdmFsdWVzIHRoYW4gZWFzaW5nIGN1cnZlcyBsaXN0ZWQsIHRoZSBsYXN0IGVhc2luZyBjdXJ2ZSBsaXN0ZWQgaXMgdXNlZC5cbiAqL1xuZnVuY3Rpb24gdG9rZW4gKCkge1xuICAvLyBGdW5jdGlvbmFsaXR5IGZvciB0aGlzIGV4dGVuc2lvbiBydW5zIGltcGxpY2l0bHkgaWYgaXQgaXMgbG9hZGVkLlxufSAvKiEqL1xuXG4vLyB0b2tlbiBmdW5jdGlvbiBpcyBkZWZpbmVkIGFib3ZlIG9ubHkgc28gdGhhdCBkb3gtZm91bmRhdGlvbiBzZWVzIGl0IGFzXG4vLyBkb2N1bWVudGF0aW9uIGFuZCByZW5kZXJzIGl0LiAgSXQgaXMgbmV2ZXIgdXNlZCwgYW5kIGlzIG9wdGltaXplZCBhd2F5IGF0XG4vLyBidWlsZCB0aW1lLlxuXG47KGZ1bmN0aW9uIChUd2VlbmFibGUpIHtcblxuICAvKiFcbiAgICogQHR5cGVkZWYge3tcbiAgICogICBmb3JtYXRTdHJpbmc6IHN0cmluZ1xuICAgKiAgIGNodW5rTmFtZXM6IEFycmF5LjxzdHJpbmc+XG4gICAqIH19XG4gICAqL1xuICB2YXIgZm9ybWF0TWFuaWZlc3Q7XG5cbiAgLy8gQ09OU1RBTlRTXG5cbiAgdmFyIFJfTlVNQkVSX0NPTVBPTkVOVCA9IC8oXFxkfFxcLXxcXC4pLztcbiAgdmFyIFJfRk9STUFUX0NIVU5LUyA9IC8oW15cXC0wLTlcXC5dKykvZztcbiAgdmFyIFJfVU5GT1JNQVRURURfVkFMVUVTID0gL1swLTkuXFwtXSsvZztcbiAgdmFyIFJfUkdCID0gbmV3IFJlZ0V4cChcbiAgICAncmdiXFxcXCgnICsgUl9VTkZPUk1BVFRFRF9WQUxVRVMuc291cmNlICtcbiAgICAoLyxcXHMqLy5zb3VyY2UpICsgUl9VTkZPUk1BVFRFRF9WQUxVRVMuc291cmNlICtcbiAgICAoLyxcXHMqLy5zb3VyY2UpICsgUl9VTkZPUk1BVFRFRF9WQUxVRVMuc291cmNlICsgJ1xcXFwpJywgJ2cnKTtcbiAgdmFyIFJfUkdCX1BSRUZJWCA9IC9eLipcXCgvO1xuICB2YXIgUl9IRVggPSAvIyhbMC05XXxbYS1mXSl7Myw2fS9naTtcbiAgdmFyIFZBTFVFX1BMQUNFSE9MREVSID0gJ1ZBTCc7XG5cbiAgLy8gSEVMUEVSU1xuXG4gIHZhciBnZXRGb3JtYXRDaHVua3NGcm9tX2FjY3VtdWxhdG9yID0gW107XG4gIC8qIVxuICAgKiBAcGFyYW0ge0FycmF5Lm51bWJlcn0gcmF3VmFsdWVzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwcmVmaXhcbiAgICpcbiAgICogQHJldHVybiB7QXJyYXkuPHN0cmluZz59XG4gICAqL1xuICBmdW5jdGlvbiBnZXRGb3JtYXRDaHVua3NGcm9tIChyYXdWYWx1ZXMsIHByZWZpeCkge1xuICAgIGdldEZvcm1hdENodW5rc0Zyb21fYWNjdW11bGF0b3IubGVuZ3RoID0gMDtcblxuICAgIHZhciByYXdWYWx1ZXNMZW5ndGggPSByYXdWYWx1ZXMubGVuZ3RoO1xuICAgIHZhciBpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHJhd1ZhbHVlc0xlbmd0aDsgaSsrKSB7XG4gICAgICBnZXRGb3JtYXRDaHVua3NGcm9tX2FjY3VtdWxhdG9yLnB1c2goJ18nICsgcHJlZml4ICsgJ18nICsgaSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdldEZvcm1hdENodW5rc0Zyb21fYWNjdW11bGF0b3I7XG4gIH1cblxuICAvKiFcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZvcm1hdHRlZFN0cmluZ1xuICAgKlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBmdW5jdGlvbiBnZXRGb3JtYXRTdHJpbmdGcm9tIChmb3JtYXR0ZWRTdHJpbmcpIHtcbiAgICB2YXIgY2h1bmtzID0gZm9ybWF0dGVkU3RyaW5nLm1hdGNoKFJfRk9STUFUX0NIVU5LUyk7XG5cbiAgICBpZiAoIWNodW5rcykge1xuICAgICAgLy8gY2h1bmtzIHdpbGwgYmUgbnVsbCBpZiB0aGVyZSB3ZXJlIG5vIHRva2VucyB0byBwYXJzZSBpblxuICAgICAgLy8gZm9ybWF0dGVkU3RyaW5nIChmb3IgZXhhbXBsZSwgaWYgZm9ybWF0dGVkU3RyaW5nIGlzICcyJykuICBDb2VyY2VcbiAgICAgIC8vIGNodW5rcyB0byBiZSB1c2VmdWwgaGVyZS5cbiAgICAgIGNodW5rcyA9IFsnJywgJyddO1xuXG4gICAgICAvLyBJZiB0aGVyZSBpcyBvbmx5IG9uZSBjaHVuaywgYXNzdW1lIHRoYXQgdGhlIHN0cmluZyBpcyBhIG51bWJlclxuICAgICAgLy8gZm9sbG93ZWQgYnkgYSB0b2tlbi4uLlxuICAgICAgLy8gTk9URTogVGhpcyBtYXkgYmUgYW4gdW53aXNlIGFzc3VtcHRpb24uXG4gICAgfSBlbHNlIGlmIChjaHVua3MubGVuZ3RoID09PSAxIHx8XG4gICAgICAgIC8vIC4uLm9yIGlmIHRoZSBzdHJpbmcgc3RhcnRzIHdpdGggYSBudW1iZXIgY29tcG9uZW50IChcIi5cIiwgXCItXCIsIG9yIGFcbiAgICAgICAgLy8gZGlnaXQpLi4uXG4gICAgICAgIGZvcm1hdHRlZFN0cmluZ1swXS5tYXRjaChSX05VTUJFUl9DT01QT05FTlQpKSB7XG4gICAgICAvLyAuLi5wcmVwZW5kIGFuIGVtcHR5IHN0cmluZyBoZXJlIHRvIG1ha2Ugc3VyZSB0aGF0IHRoZSBmb3JtYXR0ZWQgbnVtYmVyXG4gICAgICAvLyBpcyBwcm9wZXJseSByZXBsYWNlZCBieSBWQUxVRV9QTEFDRUhPTERFUlxuICAgICAgY2h1bmtzLnVuc2hpZnQoJycpO1xuICAgIH1cblxuICAgIHJldHVybiBjaHVua3Muam9pbihWQUxVRV9QTEFDRUhPTERFUik7XG4gIH1cblxuICAvKiFcbiAgICogQ29udmVydCBhbGwgaGV4IGNvbG9yIHZhbHVlcyB3aXRoaW4gYSBzdHJpbmcgdG8gYW4gcmdiIHN0cmluZy5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHN0YXRlT2JqZWN0XG4gICAqXG4gICAqIEByZXR1cm4ge09iamVjdH0gVGhlIG1vZGlmaWVkIG9ialxuICAgKi9cbiAgZnVuY3Rpb24gc2FuaXRpemVPYmplY3RGb3JIZXhQcm9wcyAoc3RhdGVPYmplY3QpIHtcbiAgICBUd2VlbmFibGUuZWFjaChzdGF0ZU9iamVjdCwgZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgIHZhciBjdXJyZW50UHJvcCA9IHN0YXRlT2JqZWN0W3Byb3BdO1xuXG4gICAgICBpZiAodHlwZW9mIGN1cnJlbnRQcm9wID09PSAnc3RyaW5nJyAmJiBjdXJyZW50UHJvcC5tYXRjaChSX0hFWCkpIHtcbiAgICAgICAgc3RhdGVPYmplY3RbcHJvcF0gPSBzYW5pdGl6ZUhleENodW5rc1RvUkdCKGN1cnJlbnRQcm9wKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qIVxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gICAqXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGZ1bmN0aW9uICBzYW5pdGl6ZUhleENodW5rc1RvUkdCIChzdHIpIHtcbiAgICByZXR1cm4gZmlsdGVyU3RyaW5nQ2h1bmtzKFJfSEVYLCBzdHIsIGNvbnZlcnRIZXhUb1JHQik7XG4gIH1cblxuICAvKiFcbiAgICogQHBhcmFtIHtzdHJpbmd9IGhleFN0cmluZ1xuICAgKlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBmdW5jdGlvbiBjb252ZXJ0SGV4VG9SR0IgKGhleFN0cmluZykge1xuICAgIHZhciByZ2JBcnIgPSBoZXhUb1JHQkFycmF5KGhleFN0cmluZyk7XG4gICAgcmV0dXJuICdyZ2IoJyArIHJnYkFyclswXSArICcsJyArIHJnYkFyclsxXSArICcsJyArIHJnYkFyclsyXSArICcpJztcbiAgfVxuXG4gIHZhciBoZXhUb1JHQkFycmF5X3JldHVybkFycmF5ID0gW107XG4gIC8qIVxuICAgKiBDb252ZXJ0IGEgaGV4YWRlY2ltYWwgc3RyaW5nIHRvIGFuIGFycmF5IHdpdGggdGhyZWUgaXRlbXMsIG9uZSBlYWNoIGZvclxuICAgKiB0aGUgcmVkLCBibHVlLCBhbmQgZ3JlZW4gZGVjaW1hbCB2YWx1ZXMuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBoZXggQSBoZXhhZGVjaW1hbCBzdHJpbmcuXG4gICAqXG4gICAqIEByZXR1cm5zIHtBcnJheS48bnVtYmVyPn0gVGhlIGNvbnZlcnRlZCBBcnJheSBvZiBSR0IgdmFsdWVzIGlmIGBoZXhgIGlzIGFcbiAgICogdmFsaWQgc3RyaW5nLCBvciBhbiBBcnJheSBvZiB0aHJlZSAwJ3MuXG4gICAqL1xuICBmdW5jdGlvbiBoZXhUb1JHQkFycmF5IChoZXgpIHtcblxuICAgIGhleCA9IGhleC5yZXBsYWNlKC8jLywgJycpO1xuXG4gICAgLy8gSWYgdGhlIHN0cmluZyBpcyBhIHNob3J0aGFuZCB0aHJlZSBkaWdpdCBoZXggbm90YXRpb24sIG5vcm1hbGl6ZSBpdCB0b1xuICAgIC8vIHRoZSBzdGFuZGFyZCBzaXggZGlnaXQgbm90YXRpb25cbiAgICBpZiAoaGV4Lmxlbmd0aCA9PT0gMykge1xuICAgICAgaGV4ID0gaGV4LnNwbGl0KCcnKTtcbiAgICAgIGhleCA9IGhleFswXSArIGhleFswXSArIGhleFsxXSArIGhleFsxXSArIGhleFsyXSArIGhleFsyXTtcbiAgICB9XG5cbiAgICBoZXhUb1JHQkFycmF5X3JldHVybkFycmF5WzBdID0gaGV4VG9EZWMoaGV4LnN1YnN0cigwLCAyKSk7XG4gICAgaGV4VG9SR0JBcnJheV9yZXR1cm5BcnJheVsxXSA9IGhleFRvRGVjKGhleC5zdWJzdHIoMiwgMikpO1xuICAgIGhleFRvUkdCQXJyYXlfcmV0dXJuQXJyYXlbMl0gPSBoZXhUb0RlYyhoZXguc3Vic3RyKDQsIDIpKTtcblxuICAgIHJldHVybiBoZXhUb1JHQkFycmF5X3JldHVybkFycmF5O1xuICB9XG5cbiAgLyohXG4gICAqIENvbnZlcnQgYSBiYXNlLTE2IG51bWJlciB0byBiYXNlLTEwLlxuICAgKlxuICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd9IGhleCBUaGUgdmFsdWUgdG8gY29udmVydFxuICAgKlxuICAgKiBAcmV0dXJucyB7TnVtYmVyfSBUaGUgYmFzZS0xMCBlcXVpdmFsZW50IG9mIGBoZXhgLlxuICAgKi9cbiAgZnVuY3Rpb24gaGV4VG9EZWMgKGhleCkge1xuICAgIHJldHVybiBwYXJzZUludChoZXgsIDE2KTtcbiAgfVxuXG4gIC8qIVxuICAgKiBSdW5zIGEgZmlsdGVyIG9wZXJhdGlvbiBvbiBhbGwgY2h1bmtzIG9mIGEgc3RyaW5nIHRoYXQgbWF0Y2ggYSBSZWdFeHBcbiAgICpcbiAgICogQHBhcmFtIHtSZWdFeHB9IHBhdHRlcm5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVuZmlsdGVyZWRTdHJpbmdcbiAgICogQHBhcmFtIHtmdW5jdGlvbihzdHJpbmcpfSBmaWx0ZXJcbiAgICpcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZnVuY3Rpb24gZmlsdGVyU3RyaW5nQ2h1bmtzIChwYXR0ZXJuLCB1bmZpbHRlcmVkU3RyaW5nLCBmaWx0ZXIpIHtcbiAgICB2YXIgcGF0dGVuTWF0Y2hlcyA9IHVuZmlsdGVyZWRTdHJpbmcubWF0Y2gocGF0dGVybik7XG4gICAgdmFyIGZpbHRlcmVkU3RyaW5nID0gdW5maWx0ZXJlZFN0cmluZy5yZXBsYWNlKHBhdHRlcm4sIFZBTFVFX1BMQUNFSE9MREVSKTtcblxuICAgIGlmIChwYXR0ZW5NYXRjaGVzKSB7XG4gICAgICB2YXIgcGF0dGVuTWF0Y2hlc0xlbmd0aCA9IHBhdHRlbk1hdGNoZXMubGVuZ3RoO1xuICAgICAgdmFyIGN1cnJlbnRDaHVuaztcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXR0ZW5NYXRjaGVzTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY3VycmVudENodW5rID0gcGF0dGVuTWF0Y2hlcy5zaGlmdCgpO1xuICAgICAgICBmaWx0ZXJlZFN0cmluZyA9IGZpbHRlcmVkU3RyaW5nLnJlcGxhY2UoXG4gICAgICAgICAgVkFMVUVfUExBQ0VIT0xERVIsIGZpbHRlcihjdXJyZW50Q2h1bmspKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmlsdGVyZWRTdHJpbmc7XG4gIH1cblxuICAvKiFcbiAgICogQ2hlY2sgZm9yIGZsb2F0aW5nIHBvaW50IHZhbHVlcyB3aXRoaW4gcmdiIHN0cmluZ3MgYW5kIHJvdW5kcyB0aGVtLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZm9ybWF0dGVkU3RyaW5nXG4gICAqXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGZ1bmN0aW9uIHNhbml0aXplUkdCQ2h1bmtzIChmb3JtYXR0ZWRTdHJpbmcpIHtcbiAgICByZXR1cm4gZmlsdGVyU3RyaW5nQ2h1bmtzKFJfUkdCLCBmb3JtYXR0ZWRTdHJpbmcsIHNhbml0aXplUkdCQ2h1bmspO1xuICB9XG5cbiAgLyohXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZ2JDaHVua1xuICAgKlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBmdW5jdGlvbiBzYW5pdGl6ZVJHQkNodW5rIChyZ2JDaHVuaykge1xuICAgIHZhciBudW1iZXJzID0gcmdiQ2h1bmsubWF0Y2goUl9VTkZPUk1BVFRFRF9WQUxVRVMpO1xuICAgIHZhciBudW1iZXJzTGVuZ3RoID0gbnVtYmVycy5sZW5ndGg7XG4gICAgdmFyIHNhbml0aXplZFN0cmluZyA9IHJnYkNodW5rLm1hdGNoKFJfUkdCX1BSRUZJWClbMF07XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bWJlcnNMZW5ndGg7IGkrKykge1xuICAgICAgc2FuaXRpemVkU3RyaW5nICs9IHBhcnNlSW50KG51bWJlcnNbaV0sIDEwKSArICcsJztcbiAgICB9XG5cbiAgICBzYW5pdGl6ZWRTdHJpbmcgPSBzYW5pdGl6ZWRTdHJpbmcuc2xpY2UoMCwgLTEpICsgJyknO1xuXG4gICAgcmV0dXJuIHNhbml0aXplZFN0cmluZztcbiAgfVxuXG4gIC8qIVxuICAgKiBAcGFyYW0ge09iamVjdH0gc3RhdGVPYmplY3RcbiAgICpcbiAgICogQHJldHVybiB7T2JqZWN0fSBBbiBPYmplY3Qgb2YgZm9ybWF0TWFuaWZlc3RzIHRoYXQgY29ycmVzcG9uZCB0b1xuICAgKiB0aGUgc3RyaW5nIHByb3BlcnRpZXMgb2Ygc3RhdGVPYmplY3RcbiAgICovXG4gIGZ1bmN0aW9uIGdldEZvcm1hdE1hbmlmZXN0cyAoc3RhdGVPYmplY3QpIHtcbiAgICB2YXIgbWFuaWZlc3RBY2N1bXVsYXRvciA9IHt9O1xuXG4gICAgVHdlZW5hYmxlLmVhY2goc3RhdGVPYmplY3QsIGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICB2YXIgY3VycmVudFByb3AgPSBzdGF0ZU9iamVjdFtwcm9wXTtcblxuICAgICAgaWYgKHR5cGVvZiBjdXJyZW50UHJvcCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdmFyIHJhd1ZhbHVlcyA9IGdldFZhbHVlc0Zyb20oY3VycmVudFByb3ApO1xuXG4gICAgICAgIG1hbmlmZXN0QWNjdW11bGF0b3JbcHJvcF0gPSB7XG4gICAgICAgICAgJ2Zvcm1hdFN0cmluZyc6IGdldEZvcm1hdFN0cmluZ0Zyb20oY3VycmVudFByb3ApXG4gICAgICAgICAgLCdjaHVua05hbWVzJzogZ2V0Rm9ybWF0Q2h1bmtzRnJvbShyYXdWYWx1ZXMsIHByb3ApXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWFuaWZlc3RBY2N1bXVsYXRvcjtcbiAgfVxuXG4gIC8qIVxuICAgKiBAcGFyYW0ge09iamVjdH0gc3RhdGVPYmplY3RcbiAgICogQHBhcmFtIHtPYmplY3R9IGZvcm1hdE1hbmlmZXN0c1xuICAgKi9cbiAgZnVuY3Rpb24gZXhwYW5kRm9ybWF0dGVkUHJvcGVydGllcyAoc3RhdGVPYmplY3QsIGZvcm1hdE1hbmlmZXN0cykge1xuICAgIFR3ZWVuYWJsZS5lYWNoKGZvcm1hdE1hbmlmZXN0cywgZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgIHZhciBjdXJyZW50UHJvcCA9IHN0YXRlT2JqZWN0W3Byb3BdO1xuICAgICAgdmFyIHJhd1ZhbHVlcyA9IGdldFZhbHVlc0Zyb20oY3VycmVudFByb3ApO1xuICAgICAgdmFyIHJhd1ZhbHVlc0xlbmd0aCA9IHJhd1ZhbHVlcy5sZW5ndGg7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmF3VmFsdWVzTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc3RhdGVPYmplY3RbZm9ybWF0TWFuaWZlc3RzW3Byb3BdLmNodW5rTmFtZXNbaV1dID0gK3Jhd1ZhbHVlc1tpXTtcbiAgICAgIH1cblxuICAgICAgZGVsZXRlIHN0YXRlT2JqZWN0W3Byb3BdO1xuICAgIH0pO1xuICB9XG5cbiAgLyohXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZU9iamVjdFxuICAgKiBAcGFyYW0ge09iamVjdH0gZm9ybWF0TWFuaWZlc3RzXG4gICAqL1xuICBmdW5jdGlvbiBjb2xsYXBzZUZvcm1hdHRlZFByb3BlcnRpZXMgKHN0YXRlT2JqZWN0LCBmb3JtYXRNYW5pZmVzdHMpIHtcbiAgICBUd2VlbmFibGUuZWFjaChmb3JtYXRNYW5pZmVzdHMsIGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICB2YXIgY3VycmVudFByb3AgPSBzdGF0ZU9iamVjdFtwcm9wXTtcbiAgICAgIHZhciBmb3JtYXRDaHVua3MgPSBleHRyYWN0UHJvcGVydHlDaHVua3MoXG4gICAgICAgIHN0YXRlT2JqZWN0LCBmb3JtYXRNYW5pZmVzdHNbcHJvcF0uY2h1bmtOYW1lcyk7XG4gICAgICB2YXIgdmFsdWVzTGlzdCA9IGdldFZhbHVlc0xpc3QoXG4gICAgICAgIGZvcm1hdENodW5rcywgZm9ybWF0TWFuaWZlc3RzW3Byb3BdLmNodW5rTmFtZXMpO1xuICAgICAgY3VycmVudFByb3AgPSBnZXRGb3JtYXR0ZWRWYWx1ZXMoXG4gICAgICAgIGZvcm1hdE1hbmlmZXN0c1twcm9wXS5mb3JtYXRTdHJpbmcsIHZhbHVlc0xpc3QpO1xuICAgICAgc3RhdGVPYmplY3RbcHJvcF0gPSBzYW5pdGl6ZVJHQkNodW5rcyhjdXJyZW50UHJvcCk7XG4gICAgfSk7XG4gIH1cblxuICAvKiFcbiAgICogQHBhcmFtIHtPYmplY3R9IHN0YXRlT2JqZWN0XG4gICAqIEBwYXJhbSB7QXJyYXkuPHN0cmluZz59IGNodW5rTmFtZXNcbiAgICpcbiAgICogQHJldHVybiB7T2JqZWN0fSBUaGUgZXh0cmFjdGVkIHZhbHVlIGNodW5rcy5cbiAgICovXG4gIGZ1bmN0aW9uIGV4dHJhY3RQcm9wZXJ0eUNodW5rcyAoc3RhdGVPYmplY3QsIGNodW5rTmFtZXMpIHtcbiAgICB2YXIgZXh0cmFjdGVkVmFsdWVzID0ge307XG4gICAgdmFyIGN1cnJlbnRDaHVua05hbWUsIGNodW5rTmFtZXNMZW5ndGggPSBjaHVua05hbWVzLmxlbmd0aDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2h1bmtOYW1lc0xlbmd0aDsgaSsrKSB7XG4gICAgICBjdXJyZW50Q2h1bmtOYW1lID0gY2h1bmtOYW1lc1tpXTtcbiAgICAgIGV4dHJhY3RlZFZhbHVlc1tjdXJyZW50Q2h1bmtOYW1lXSA9IHN0YXRlT2JqZWN0W2N1cnJlbnRDaHVua05hbWVdO1xuICAgICAgZGVsZXRlIHN0YXRlT2JqZWN0W2N1cnJlbnRDaHVua05hbWVdO1xuICAgIH1cblxuICAgIHJldHVybiBleHRyYWN0ZWRWYWx1ZXM7XG4gIH1cblxuICB2YXIgZ2V0VmFsdWVzTGlzdF9hY2N1bXVsYXRvciA9IFtdO1xuICAvKiFcbiAgICogQHBhcmFtIHtPYmplY3R9IHN0YXRlT2JqZWN0XG4gICAqIEBwYXJhbSB7QXJyYXkuPHN0cmluZz59IGNodW5rTmFtZXNcbiAgICpcbiAgICogQHJldHVybiB7QXJyYXkuPG51bWJlcj59XG4gICAqL1xuICBmdW5jdGlvbiBnZXRWYWx1ZXNMaXN0IChzdGF0ZU9iamVjdCwgY2h1bmtOYW1lcykge1xuICAgIGdldFZhbHVlc0xpc3RfYWNjdW11bGF0b3IubGVuZ3RoID0gMDtcbiAgICB2YXIgY2h1bmtOYW1lc0xlbmd0aCA9IGNodW5rTmFtZXMubGVuZ3RoO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaHVua05hbWVzTGVuZ3RoOyBpKyspIHtcbiAgICAgIGdldFZhbHVlc0xpc3RfYWNjdW11bGF0b3IucHVzaChzdGF0ZU9iamVjdFtjaHVua05hbWVzW2ldXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdldFZhbHVlc0xpc3RfYWNjdW11bGF0b3I7XG4gIH1cblxuICAvKiFcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZvcm1hdFN0cmluZ1xuICAgKiBAcGFyYW0ge0FycmF5LjxudW1iZXI+fSByYXdWYWx1ZXNcbiAgICpcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0Rm9ybWF0dGVkVmFsdWVzIChmb3JtYXRTdHJpbmcsIHJhd1ZhbHVlcykge1xuICAgIHZhciBmb3JtYXR0ZWRWYWx1ZVN0cmluZyA9IGZvcm1hdFN0cmluZztcbiAgICB2YXIgcmF3VmFsdWVzTGVuZ3RoID0gcmF3VmFsdWVzLmxlbmd0aDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmF3VmFsdWVzTGVuZ3RoOyBpKyspIHtcbiAgICAgIGZvcm1hdHRlZFZhbHVlU3RyaW5nID0gZm9ybWF0dGVkVmFsdWVTdHJpbmcucmVwbGFjZShcbiAgICAgICAgVkFMVUVfUExBQ0VIT0xERVIsICtyYXdWYWx1ZXNbaV0udG9GaXhlZCg0KSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvcm1hdHRlZFZhbHVlU3RyaW5nO1xuICB9XG5cbiAgLyohXG4gICAqIE5vdGU6IEl0J3MgdGhlIGR1dHkgb2YgdGhlIGNhbGxlciB0byBjb252ZXJ0IHRoZSBBcnJheSBlbGVtZW50cyBvZiB0aGVcbiAgICogcmV0dXJuIHZhbHVlIGludG8gbnVtYmVycy4gIFRoaXMgaXMgYSBwZXJmb3JtYW5jZSBvcHRpbWl6YXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtYXR0ZWRTdHJpbmdcbiAgICpcbiAgICogQHJldHVybiB7QXJyYXkuPHN0cmluZz58bnVsbH1cbiAgICovXG4gIGZ1bmN0aW9uIGdldFZhbHVlc0Zyb20gKGZvcm1hdHRlZFN0cmluZykge1xuICAgIHJldHVybiBmb3JtYXR0ZWRTdHJpbmcubWF0Y2goUl9VTkZPUk1BVFRFRF9WQUxVRVMpO1xuICB9XG5cbiAgLyohXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBlYXNpbmdPYmplY3RcbiAgICogQHBhcmFtIHtPYmplY3R9IHRva2VuRGF0YVxuICAgKi9cbiAgZnVuY3Rpb24gZXhwYW5kRWFzaW5nT2JqZWN0IChlYXNpbmdPYmplY3QsIHRva2VuRGF0YSkge1xuICAgIFR3ZWVuYWJsZS5lYWNoKHRva2VuRGF0YSwgZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgIHZhciBjdXJyZW50UHJvcCA9IHRva2VuRGF0YVtwcm9wXTtcbiAgICAgIHZhciBjaHVua05hbWVzID0gY3VycmVudFByb3AuY2h1bmtOYW1lcztcbiAgICAgIHZhciBjaHVua0xlbmd0aCA9IGNodW5rTmFtZXMubGVuZ3RoO1xuICAgICAgdmFyIGVhc2luZ0NodW5rcyA9IGVhc2luZ09iamVjdFtwcm9wXS5zcGxpdCgnICcpO1xuICAgICAgdmFyIGxhc3RFYXNpbmdDaHVuayA9IGVhc2luZ0NodW5rc1tlYXNpbmdDaHVua3MubGVuZ3RoIC0gMV07XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2h1bmtMZW5ndGg7IGkrKykge1xuICAgICAgICBlYXNpbmdPYmplY3RbY2h1bmtOYW1lc1tpXV0gPSBlYXNpbmdDaHVua3NbaV0gfHwgbGFzdEVhc2luZ0NodW5rO1xuICAgICAgfVxuXG4gICAgICBkZWxldGUgZWFzaW5nT2JqZWN0W3Byb3BdO1xuICAgIH0pO1xuICB9XG5cbiAgLyohXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBlYXNpbmdPYmplY3RcbiAgICogQHBhcmFtIHtPYmplY3R9IHRva2VuRGF0YVxuICAgKi9cbiAgZnVuY3Rpb24gY29sbGFwc2VFYXNpbmdPYmplY3QgKGVhc2luZ09iamVjdCwgdG9rZW5EYXRhKSB7XG4gICAgVHdlZW5hYmxlLmVhY2godG9rZW5EYXRhLCBmdW5jdGlvbiAocHJvcCkge1xuICAgICAgdmFyIGN1cnJlbnRQcm9wID0gdG9rZW5EYXRhW3Byb3BdO1xuICAgICAgdmFyIGNodW5rTmFtZXMgPSBjdXJyZW50UHJvcC5jaHVua05hbWVzO1xuICAgICAgdmFyIGNodW5rTGVuZ3RoID0gY2h1bmtOYW1lcy5sZW5ndGg7XG4gICAgICB2YXIgY29tcG9zZWRFYXNpbmdTdHJpbmcgPSAnJztcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaHVua0xlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbXBvc2VkRWFzaW5nU3RyaW5nICs9ICcgJyArIGVhc2luZ09iamVjdFtjaHVua05hbWVzW2ldXTtcbiAgICAgICAgZGVsZXRlIGVhc2luZ09iamVjdFtjaHVua05hbWVzW2ldXTtcbiAgICAgIH1cblxuICAgICAgZWFzaW5nT2JqZWN0W3Byb3BdID0gY29tcG9zZWRFYXNpbmdTdHJpbmcuc3Vic3RyKDEpO1xuICAgIH0pO1xuICB9XG5cbiAgVHdlZW5hYmxlLnByb3RvdHlwZS5maWx0ZXIudG9rZW4gPSB7XG4gICAgJ3R3ZWVuQ3JlYXRlZCc6IGZ1bmN0aW9uIChjdXJyZW50U3RhdGUsIGZyb21TdGF0ZSwgdG9TdGF0ZSwgZWFzaW5nT2JqZWN0KSB7XG4gICAgICBzYW5pdGl6ZU9iamVjdEZvckhleFByb3BzKGN1cnJlbnRTdGF0ZSk7XG4gICAgICBzYW5pdGl6ZU9iamVjdEZvckhleFByb3BzKGZyb21TdGF0ZSk7XG4gICAgICBzYW5pdGl6ZU9iamVjdEZvckhleFByb3BzKHRvU3RhdGUpO1xuICAgICAgdGhpcy5fdG9rZW5EYXRhID0gZ2V0Rm9ybWF0TWFuaWZlc3RzKGN1cnJlbnRTdGF0ZSk7XG4gICAgfSxcblxuICAgICdiZWZvcmVUd2Vlbic6IGZ1bmN0aW9uIChjdXJyZW50U3RhdGUsIGZyb21TdGF0ZSwgdG9TdGF0ZSwgZWFzaW5nT2JqZWN0KSB7XG4gICAgICBleHBhbmRFYXNpbmdPYmplY3QoZWFzaW5nT2JqZWN0LCB0aGlzLl90b2tlbkRhdGEpO1xuICAgICAgZXhwYW5kRm9ybWF0dGVkUHJvcGVydGllcyhjdXJyZW50U3RhdGUsIHRoaXMuX3Rva2VuRGF0YSk7XG4gICAgICBleHBhbmRGb3JtYXR0ZWRQcm9wZXJ0aWVzKGZyb21TdGF0ZSwgdGhpcy5fdG9rZW5EYXRhKTtcbiAgICAgIGV4cGFuZEZvcm1hdHRlZFByb3BlcnRpZXModG9TdGF0ZSwgdGhpcy5fdG9rZW5EYXRhKTtcbiAgICB9LFxuXG4gICAgJ2FmdGVyVHdlZW4nOiBmdW5jdGlvbiAoY3VycmVudFN0YXRlLCBmcm9tU3RhdGUsIHRvU3RhdGUsIGVhc2luZ09iamVjdCkge1xuICAgICAgY29sbGFwc2VGb3JtYXR0ZWRQcm9wZXJ0aWVzKGN1cnJlbnRTdGF0ZSwgdGhpcy5fdG9rZW5EYXRhKTtcbiAgICAgIGNvbGxhcHNlRm9ybWF0dGVkUHJvcGVydGllcyhmcm9tU3RhdGUsIHRoaXMuX3Rva2VuRGF0YSk7XG4gICAgICBjb2xsYXBzZUZvcm1hdHRlZFByb3BlcnRpZXModG9TdGF0ZSwgdGhpcy5fdG9rZW5EYXRhKTtcbiAgICAgIGNvbGxhcHNlRWFzaW5nT2JqZWN0KGVhc2luZ09iamVjdCwgdGhpcy5fdG9rZW5EYXRhKTtcbiAgICB9XG4gIH07XG5cbn0gKFR3ZWVuYWJsZSkpO1xuXG59KHRoaXMpKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Jla2FwaS9+L3NoaWZ0eS9kaXN0L3NoaWZ0eS5qc1xuICoqIG1vZHVsZSBpZCA9IDE2NFxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIl0sInNvdXJjZVJvb3QiOiIiLCJmaWxlIjoiZGVtby5qcyJ9
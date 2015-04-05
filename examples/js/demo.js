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
	      unpinHide: false,
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
	                className: cx("unpin-txt hide", { hide: this.state.unpinHide }),
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
	  !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(166), __webpack_require__(123)], __WEBPACK_AMD_DEFINE_RESULT__ = function (Tweenable, Underscore) {
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

/***/ 166:
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9kZW1vL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9kZW1vL2FwcC1zcGFyay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3Bhcmstc2Nyb2xsLXJla2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9+L3Jla2FwaS9kaXN0L3Jla2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9+L3Jla2FwaS9+L3NoaWZ0eS9kaXN0L3NoaWZ0eS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsS0FBSSxLQUFLLEdBQUcsbUJBQU8sQ0FBQyxDQUFPLENBQUMsQ0FBQztBQUM3QixLQUFJLGVBQWUsR0FBRyxtQkFBTyxDQUFDLENBQWMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUM7O2dCQUNyQyxtQkFBTyxDQUFDLENBQWEsQ0FBQzs7S0FBakQsV0FBVyxZQUFYLFdBQVc7S0FBRSxVQUFVLFlBQVYsVUFBVTs7QUFDNUIsS0FBSSxFQUFFLEdBQUcsbUJBQU8sQ0FBQyxDQUFZLENBQUMsQ0FBQzs7QUFFL0IsS0FBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7O0FBQzNCLFNBQU0sRUFBRSxDQUFDLGVBQWUsQ0FBQzs7QUFFekIsa0JBQWUsNkJBQUc7QUFDaEIsWUFBTztBQUNMLHVCQUFnQixFQUFFLENBQUM7TUFDcEI7SUFDRjs7QUFFRCxvQkFBaUIsK0JBQUc7O0FBRWxCLFNBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNsRCxTQUFJLE1BQU0sR0FBRyxFQUFDLENBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQ3RDLFNBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDO0FBQzNCLFNBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLE1BQU0sR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDO0lBQ3BEOztBQUVELFNB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QUs7O0FBRUw7QUFDQSw4QkFBNkI7QUFDN0I7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0EsOEJBQTZCO0FBQzdCO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBLDhCQUE2QjtBQUM3QjtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQSw4QkFBNkI7QUFDN0I7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0EsdUJBQXNCO0FBQ3RCLHVCQUFzQjtBQUN0Qiw4QkFBNkI7QUFDN0I7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0EsOEJBQTZCO0FBQzdCO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSw4QkFBNkI7QUFDN0I7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBLFFBQU87QUFDUDtB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LE9BQU87QUFDcEIsY0FBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFxQixpQkFBaUI7QUFDdEM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBQzs7QUFFRCxFQUFDIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBQdXJlUmVuZGVyTWl4aW4gPSByZXF1aXJlKCdyZWFjdC9hZGRvbnMnKS5hZGRvbnMuUHVyZVJlbmRlck1peGluO1xudmFyIHtTcGFya1Njcm9sbCwgU3BhcmtQcm94eX0gPSByZXF1aXJlKCcuL2FwcC1zcGFyaycpO1xudmFyIGN4ID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgSGVybyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgbWl4aW5zOiBbUHVyZVJlbmRlck1peGluXSxcblxuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0cm9rZURhc2hPZmZzZXQ6IDBcbiAgICB9XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gaW5pdGlhbGl6ZSBzdmdcbiAgICB2YXIgbm9kZSA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmcy5zcGFya1BhdGgpO1xuICAgIHZhciBsZW5ndGggPSB+fiBub2RlLmdldFRvdGFsTGVuZ3RoKCk7XG4gICAgdGhpcy5vZmZzZXRUYXJnZXQgPSBsZW5ndGg7XG4gICAgbm9kZS5zdHlsZS5zdHJva2VEYXNoYXJyYXkgPSBsZW5ndGggKyAnICcgKyBsZW5ndGg7XG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8U3BhcmtQcm94eS5kaXYgcHJveHlJZD1cImhlcm9cIiBjbGFzc05hbWU9XCJoZXJvXCI+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZ2lsYm94L3JlYWN0LXNwYXJrLXNjcm9sbFwiPlxuICAgICAgICAgIDxTcGFya1Njcm9sbC5oMVxuICAgICAgICAgICAgcHJveHk9XCJoZXJvXCJcbiAgICAgICAgICAgIHRpbWVsaW5lPXt7XG4gICAgICAgICAgICAgIHRvcFRvcDogeyBvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwcHgsMTUwcHgsMHB4KScgfSxcbiAgICAgICAgICAgICAgJ3RvcFRvcCsyMDAnOiB7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDBweCwxMDBweCwwcHgpJyB9XG4gICAgICAgICAgICB9fT5cblxuICAgICAgICAgICAgPFNwYXJrU2Nyb2xsLnNwYW5cbiAgICAgICAgICAgICAgcHJveHk9XCJoZXJvXCJcbiAgICAgICAgICAgICAgY2FsbGJhY2s9eyByYXRpbyA9PiB0aGlzLnNldFN0YXRlKHtzdHJva2VEYXNob2Zmc2V0OiB+fih0aGlzLm9mZnNldFRhcmdldCpyYXRpbyl9KSB9XG4gICAgICAgICAgICAgIHRpbWVsaW5lPXt7dG9wVG9wOjAsICd0b3BUb3ArMTUwJzowfX0+XG5cbiAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjI5NnB4XCIgaGVpZ2h0PVwiMjI4cHhcIiB2aWV3Qm94PVwiMCAwIDI5NiAyMjhcIiB2ZXJzaW9uPVwiMS4xXCI+XG4gICAgICAgICAgICAgICAgPGcgaWQ9XCJQYWdlLTFcIiBzdHJva2U9XCJub25lXCIgc3Ryb2tlV2lkdGg9XCIxXCIgZmlsbD1cIm5vbmVcIiBmaWxsUnVsZT1cImV2ZW5vZGRcIj5cbiAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIHJlZj1cInNwYXJrUGF0aFwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7c3Ryb2tlRGFzaG9mZnNldDogdGhpcy5zdGF0ZS5zdHJva2VEYXNob2Zmc2V0fX1cbiAgICAgICAgICAgICAgICAgICAgZD1cIk00My43Nzc0NDQyLDcxLjQ4OTg0OTUgQzY4LjEyMjM4NjEsMTMuOTgxNTAzMiAyLjE5NDU0Mzk3LDQ4LjA0MDcyMjMgMjEuNjc4MjI4Niw2Mi42NDg5MjA3IEMzNS42NjQzOTQ1LDczLjEzNTI2ODIgNTguOTA5Njg4Miw3MC43NzQ3Nzg5IDY1Ljg3NjY1OTgsOTAuMjc3NTk5OSBDODEuMzI2NjA5NCwxMzMuNTI3MDM3IDU4LjczMDU0NjYsMTkxLjM4NjAxNiA4Ljk2NjY3NTI0LDE5MS4zODYwMTYgQy0yMS43ODY3Mjc4LDEyNC40MTkyMjYgNTguNTE2NTUwNSw5NS4wNjA0NDA5IDEwNS42NTc3MzMsNzEuNDg5ODQ5NSBDMTExLjU4NzAxOSw2OC41MjUyMDY1IDEwNi44NDM3ODYsODQuODU1MTAwNiAxMDUuNjU3NzMzLDkxLjM3NzI3OTcgQzk5LjYxMjM5NjUsMTI0LjYyMDk2NyA5MS41MjE0NDExLDE1Ny40NzczMyA4NS43NzAzMDI5LDE5MC44MzMwNjkgQzg0Ljg2ODU3NjQsMTk2LjA2Mjk0OCA4MS42Mjc0NjQyLDIxNC44MjkyOTkgODAuNzkzNzg1NywyMjIuMzI2MTYgQzgwLjY3MTU1OTgsMjIzLjQyNTI3OCA4MC43OTM3ODU3LDIyNi43NDk3MzEgODAuNzkzNzg1NywyMjUuNjQzODM4IEM4MC43OTM3ODU3LDE3OC4xOTAyMyA4MC4wNTM1OTEyLDEzMi45Nzk3NjQgOTIuMzk5NDQ2Myw4Ni42NzQxMjkzIEM5My44MTEzNDA1LDgxLjM3ODUzMzQgMTA4LjMwNTk0LDM5Ljc2ODU3MzggMTI0Ljk5ODQzLDU0LjA3NTE0NTcgQzE1Ni43NTI1OTUsODEuMjkwNTczNSA5Mi41NzI0NDQxLDkzLjQ3MDI5MzYgMTIxLjEyNzgwNSw5Ni4wNjgwMDQ0IEMxMjguMjgyNDIyLDk2LjcxODg2NzQgMTM1LjY1NTQ2LDk3LjU3MjY1MjkgMTQyLjY4MDI4Nyw5Ni4wNjgwMDQ0IEMxNDguNzM2NDYyLDk0Ljc3MDgzMTggMTg3LjEwODY2NSw3MS40NDAyMTY1IDE3NS4yNzMwNTgsNTkuNjA0NjA5MyBDMTU5Ljc2ODQxNCw0NC4wOTk5NjUyIDE0Ny4wODQ3OTgsODkuMjk4OTY1OCAxNTIuMDY3OTUsOTAuNTQ0NzUzOCBDMTY3LjMwNDY3OSw5NC4zNTM5MzYyIDE2My40OTg4NTEsNzIuMzA5OTQ5OCAxNzEuNDA4NjQ2LDcyLjMwOTk0OTggQzE3NS40MzIxNjUsNzIuMzA5OTQ5OCAxNzAuOTA5NzU3LDgyLjY0MTgzMDggMTc0LjcyNjMyNSw4My45MTU2MTA0IEMxODguMTA4OTM4LDg4LjM4MjA1NzcgMjAwLjY3MjE3Miw3Mi4zNTY4NzUzIDIwNi43NzIzNjIsNjYuMjMzNzUyNyBDMjA3LjkwMDI0OCw2NS4xMDE2MjU4IDIwNi40MjM1ODksOTEuMjcyNzM1NyAyMTYuMTYwMDI0LDg2LjEyMTE4MjkgQzIyNS4xNDgwOTYsODEuMzY1NTg5MyAyMzIuMTA3NjYxLDY2LjgyNTIwODkgMjM2LjA1MzY2Nyw1Ny45NDU3NzAyIEMyMzguNzUyODgyLDUxLjg3MTkwNDEgMjUzLjQ4NjI0LDEuNTg4NzMyMDMgMjQ2LjU1MzQzNSwxLjU4ODczMjAzIEMyNDEuMTM3Njk3LDEuNTg4NzMyMDMgMjI4Ljk0NDgwOCw5NC45MDk4NjQ2IDIyMy4zNDIxMTQsMTAwLjQ5MTU3NSBDMjE4LjA5MjI3MywxMDUuNzIxNzU0IDI0Ny42OTA5NjcsMzguNTkyOTgzMSAyNjAuMzY0NjY4LDQxLjM2OTgwNTMgQzI3OC4xMTE2MjUsNDUuMjU4MTgzNSAyMzEuNzQxNzYxLDY1Ljg0OTA1NjMgMjMwLjUzMDQxNiw2OS40ODMwODkyIEMyMjkuNjk2NjcsNzEuOTg0MzI4IDIzNS43NDU0MjcsNzAuMzYwNjAyMyAyMzguMjY1NDUzLDcxLjEzNTcxNTQgQzI2MC4wNTQxNzEsNzcuODM3NTIwNyAyODQuMzQ1Mzc3LDk2LjQ0NDk3MTYgMjk0LjYyMjQ5MSwxMTYuOTk5MTk5XCIgaWQ9XCJQYXRoLTEzXCIgc3Ryb2tlPVwiIzM4MjUxM1wiIHN0cm9rZVdpZHRoPVwiM1wiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuXG4gICAgICAgICAgICA8L1NwYXJrU2Nyb2xsLnNwYW4+XG4gICAgICAgICAgPC9TcGFya1Njcm9sbC5oMT5cbiAgICAgICAgPC9hPlxuXG4gICAgICAgIDxTcGFya1Njcm9sbC5kaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJkb3duLWFycm93XCJcbiAgICAgICAgICBwcm94eT1cImhlcm9cIlxuICAgICAgICAgIHRpbWVsaW5lPXt7XG4gICAgICAgICAgICB0b3BUb3A6IHtvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwcHgsMHB4LDBweCknfSxcbiAgICAgICAgICAgICd0b3BUb3ArMjAwJzoge29wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDBweCwtMTUwcHgsMHB4KSd9XG4gICAgICAgICAgfX0+djwvU3BhcmtTY3JvbGwuZGl2PlxuICAgICAgPC9TcGFya1Byb3h5LmRpdj5cbiAgICApXG4gIH1cbn0pO1xuXG52YXIgQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBtaXhpbnM6IFtQdXJlUmVuZGVyTWl4aW5dLFxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYWN0aW9uVHlwZTogbnVsbCxcbiAgICAgIHRleHQ6ICdzbGlkZScsXG4gICAgICB1bnBpbkhpZGU6IGZhbHNlLFxuICAgICAgc2xpZGVIaWRlOiB0cnVlLFxuICAgICAgcGluUGluOiBmYWxzZSxcbiAgICAgIHBpblVucGluOiBmYWxzZVxuICAgIH1cbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3R5bGVzID0ge1xuICAgICAgbWluSGVpZ2h0Oic1MDAwcHgnXG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZXN9PlxuXG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZ2lsYm94L3NwYXJrLXNjcm9sbFwiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHN0eWxlPXt7cG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogMCwgcmlnaHQ6IDAsIGJvcmRlcjogMH19XG4gICAgICAgICAgICBzcmM9XCJodHRwczovL2NhbW8uZ2l0aHVidXNlcmNvbnRlbnQuY29tL2U3YmJiMDUyMWIzOTdlZGJkNWZlNDNlN2Y3NjA3NTkzMzZiNWUwNWYvNjg3NDc0NzA3MzNhMmYyZjczMzMyZTYxNmQ2MTdhNmY2ZTYxNzc3MzJlNjM2ZjZkMmY2NzY5NzQ2ODc1NjIyZjcyNjk2MjYyNmY2ZTczMmY2NjZmNzI2YjZkNjU1ZjcyNjk2NzY4NzQ1ZjY3NzI2NTY1NmU1ZjMwMzAzNzMyMzAzMDJlNzA2ZTY3XCJcbiAgICAgICAgICAgIGFsdD1cIkZvcmsgbWUgb24gR2l0SHViXCJcbiAgICAgICAgICAgIGRhdGFDYW5vbmljYWxTcmM9XCJodHRwczovL3MzLmFtYXpvbmF3cy5jb20vZ2l0aHViL3JpYmJvbnMvZm9ya21lX3JpZ2h0X2dyZWVuXzAwNzIwMC5wbmdcIiAvPjwvYT5cblxuICAgICAgICA8SGVybyAvPlxuXG4gICAgICAgIHsvKiBmYWRlICovfVxuICAgICAgICA8U3BhcmtTY3JvbGwuaDJcbiAgICAgICAgICB0aW1lbGluZT17e1xuICAgICAgICAgICAgdG9wQm90dG9tOiB7b3BhY2l0eTogMH0sXG4gICAgICAgICAgICBjZW50ZXJDZW50ZXI6IHtvcGFjaXR5OiAxfVxuICAgICAgICAgIH19PmZhZGU8L1NwYXJrU2Nyb2xsLmgyPlxuXG4gICAgICAgIHsvKiBtb3ZlICovfVxuICAgICAgICA8U3BhcmtTY3JvbGwuaDJcbiAgICAgICAgICB0aW1lbGluZT17e1xuICAgICAgICAgICAgdG9wQm90dG9tOiB7IG1hcmdpbkxlZnQ6ICctNTAwcHgnLCBvcGFjaXR5OiAwIH0sXG4gICAgICAgICAgICBjZW50ZXJDZW50ZXI6IHsgbWFyZ2luTGVmdDogJzBweCcsIG9wYWNpdHk6IDEsIGVhc2U6ICdib3VuY2VQYXN0JyB9XG4gICAgICAgICAgfX0+bW92ZTwvU3BhcmtTY3JvbGwuaDI+XG5cbiAgICAgICAgey8qIHNwaW4gKi99XG4gICAgICAgIDxTcGFya1Byb3h5IHByb3h5SWQ9XCJyb3RhdGUtcHJveHlcIiAvPlxuICAgICAgICA8U3BhcmtTY3JvbGwuaDJcbiAgICAgICAgICBwcm94eT1cInJvdGF0ZS1wcm94eVwiXG4gICAgICAgICAgdGltZWxpbmU9e3tcbiAgICAgICAgICAgIHRvcEJvdHRvbTogeyByb3RhdGU6ICcwZGVnJyB9ICxcbiAgICAgICAgICAgIHRvcENlbnRlcjogeyByb3RhdGU6ICczNjBkZWcnIH1cbiAgICAgICAgICB9fT5zcGluPC9TcGFya1Njcm9sbC5oMj5cblxuICAgICAgICB7Lyogc2NhbGUgKi99XG4gICAgICAgIDxTcGFya1Byb3h5IHByb3h5SWQ9XCJzY2FsZS1wcm94eVwiIC8+XG4gICAgICAgIDxTcGFya1Njcm9sbC5oMlxuICAgICAgICAgIHByb3h5PVwic2NhbGUtcHJveHlcIlxuICAgICAgICAgIHRpbWVsaW5lPXt7XG4gICAgICAgICAgICAndG9wQ2VudGVyLTIwMSc6IHsgc2NhbGU6IDAuMDEsIG9wYWNpdHk6IDB9LFxuICAgICAgICAgICAgJ3RvcENlbnRlci0yMDAnOiB7IHNjYWxlOiAwLjAxLCBvcGFjaXR5OiAxIH0sXG4gICAgICAgICAgICAndG9wQ2VudGVyKzcwJzogeyBzY2FsZTogMSwgZWFzZTogJ2JvdW5jZVBhc3QnIH1cbiAgICAgICAgICB9fT5zY2FsZTwvU3BhcmtTY3JvbGwuaDI+XG5cbiAgICAgICAgey8qIHBpbiwgcmV2ZWFsLCBzbGlkZSwgY29sb3IsIHVucGluICovfVxuICAgICAgICA8U3BhcmtQcm94eS5kaXYgY2xhc3NOYW1lPVwicGluLWNvbnRcIiBwcm94eUlkPVwicGluLWNvbnRcIj5cblxuICAgICAgICAgIDxTcGFya1Njcm9sbC5zZWN0aW9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e2N4KFwicGluXCIse1xuICAgICAgICAgICAgICAncGluLXBpbic6dGhpcy5zdGF0ZS5waW5QaW4sXG4gICAgICAgICAgICAgICdwaW4tdW5waW4nOnRoaXMuc3RhdGUucGluVW5waW59KX1cbiAgICAgICAgICAgIHByb3h5PVwicGluLWNvbnRcIlxuICAgICAgICAgICAgdGltZWxpbmU9e3tcbiAgICAgICAgICAgICAgdG9wVG9wOiB7XG4gICAgICAgICAgICAgICAgb25Eb3duOiAoKSA9PiB0aGlzLnNldFN0YXRlKHtwaW5QaW46dHJ1ZX0pLFxuICAgICAgICAgICAgICAgIG9uVXA6ICAgKCkgPT4gdGhpcy5zZXRTdGF0ZSh7cGluUGluOmZhbHNlfSlcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgYm90dG9tQm90dG9tOiB7XG4gICAgICAgICAgICAgICAgb25Eb3duOiAoKSA9PiB0aGlzLnNldFN0YXRlKHtwaW5VbnBpbjp0cnVlfSksXG4gICAgICAgICAgICAgICAgb25VcDogICAoKSA9PiB0aGlzLnNldFN0YXRlKHtwaW5VbnBpbjpmYWxzZX0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19PlxuXG4gICAgICAgICAgICA8U3BhcmtTY3JvbGwuaDNcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGluLXR4dFwiXG4gICAgICAgICAgICAgIHByb3h5PVwicGluLWNvbnRcIlxuICAgICAgICAgICAgICB0aW1lbGluZT17e1xuICAgICAgICAgICAgICAgICd0b3BUb3AnOiB7IHRvcDogJzAlJywgbWFyZ2luVG9wOiAnMHB4JyB9LFxuICAgICAgICAgICAgICAgICd0b3BUb3ArNTAgICc6IHsgdG9wOiAnNTAlJywgbWFyZ2luVG9wOiAnLTYwcHgnIH1cbiAgICAgICAgICAgICAgfX0+cGluPC9TcGFya1Njcm9sbC5oMz5cblxuICAgICAgICAgICAgPFNwYXJrU2Nyb2xsLmRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXZlYWxcIlxuICAgICAgICAgICAgICBwcm94eT1cInBpbi1jb250XCJcbiAgICAgICAgICAgICAgdGltZWxpbmU9e3tcbiAgICAgICAgICAgICAgICAndG9wVG9wKzEwMCc6IHt3aWR0aDogJzAlJywgYmFja2dyb3VuZENvbG9yOiAnIzVjODMyZid9LFxuICAgICAgICAgICAgICAgICd0b3BUb3ArMjUwJzoge3dpZHRoOiBbJzEwMCUnLCAnZWFzZU91dFF1YXJ0J10sIGJhY2tncm91bmRDb2xvcjogJyMzODI1MTMnfVxuICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInJldmVhbC10eHRcIj5yZXZlYWw8L2gzPlxuICAgICAgICAgICAgPC9TcGFya1Njcm9sbC5kaXY+XG5cbiAgICAgICAgICAgIHsvKiB3aXRoIGFycmF5IG5vdGF0aW9uIHdlIGNhbiBhcHBseSBib3VuY2UgZWFzaW5nIHRvIGp1c3Qgb25lIHByb3BlcnR5IGluIGEga2V5ZnJhbWUgKi8gfVxuICAgICAgICAgICAgPFNwYXJrU2Nyb2xsLmRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KFwic2xpZGVcIix7aGlkZTp0aGlzLnN0YXRlLnNsaWRlSGlkZX0pfVxuICAgICAgICAgICAgICBwcm94eT1cInBpbi1jb250XCJcbiAgICAgICAgICAgICAgdGltZWxpbmU9e3tcbiAgICAgICAgICAgICAgICAndG9wVG9wKzI1MCc6IHtcbiAgICAgICAgICAgICAgICAgIGJvdHRvbTogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzVjODMyZicsXG4gICAgICAgICAgICAgICAgICBvbkRvd246ICgpID0+IHRoaXMuc2V0U3RhdGUoe3NsaWRlSGlkZTpmYWxzZX0pLFxuICAgICAgICAgICAgICAgICAgb25VcDogICAoKSA9PiB0aGlzLnNldFN0YXRlKHtzbGlkZUhpZGU6dHJ1ZX0pXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAndG9wVG9wKzQwMCc6IHtib3R0b206IFsnMCUnLCAnYm91bmNlJ10sIGJhY2tncm91bmRDb2xvcjogJyMyODQ5MDcnfSxcbiAgICAgICAgICAgICAgICAndG9wVG9wKzQ1MCc6IHtiYWNrZ3JvdW5kQ29sb3I6ICcjMDBhJ30sXG4gICAgICAgICAgICAgICAgJ3RvcFRvcCs1MDAnOiB7YmFja2dyb3VuZENvbG9yOiAnI2EwMCd9LFxuICAgICAgICAgICAgICAgICd0b3BUb3ArNTUwJzoge2JhY2tncm91bmRDb2xvcjogJyM1YzgzMmYnfVxuICAgICAgICAgICAgICB9fT5cblxuICAgICAgICAgICAgICB7Lyogd2hlbiB3ZSBoaXQgdGhlIGFwcHJvcHJpYXRlIHNjcm9sbCBwb3NpdGlvbiwgdXNlIG9uVXAvb25Eb3duIHRvIGNoYW5nZSB0aGVcbiAgICAgICAgICAgICAgICAgICAgdGV4dCB0byAnc2xpZGUnIG9yICdjb2xvcicgZGVwZW5kaW5nIG9uIHRoZSBzY3JvbGwgZGlyZWN0aW9uICovfVxuICAgICAgICAgICAgICA8U3BhcmtTY3JvbGwuaDNcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzbGlkZS10eHRcIlxuICAgICAgICAgICAgICAgIHByb3h5PVwicGluLWNvbnRcIlxuICAgICAgICAgICAgICAgIHRpbWVsaW5lPXt7XG4gICAgICAgICAgICAgICAgICAndG9wVG9wKzQwMCc6IHtcbiAgICAgICAgICAgICAgICAgICAgb25Eb3duOiAoKSA9PiB0aGlzLnNldFN0YXRlKHt0ZXh0Oidjb2xvcid9KSxcbiAgICAgICAgICAgICAgICAgICAgb25VcDogICAoKSA9PiB0aGlzLnNldFN0YXRlKHt0ZXh0OidzbGlkZSd9KSB9XG4gICAgICAgICAgICAgICAgfX0+e3RoaXMuc3RhdGUudGV4dH08L1NwYXJrU2Nyb2xsLmgzPlxuXG4gICAgICAgICAgICAgIDxTcGFya1Njcm9sbC5oM1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goXCJ1bnBpbi10eHQgaGlkZVwiLHtoaWRlOnRoaXMuc3RhdGUudW5waW5IaWRlfSl9XG4gICAgICAgICAgICAgICAgcHJveHk9XCJwaW4tY29udFwiXG4gICAgICAgICAgICAgICAgdGltZWxpbmU9e3tcbiAgICAgICAgICAgICAgICAgJ3RvcFRvcCs2MDAnOiB7XG4gICAgICAgICAgICAgICAgICAgdG9wOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgb25Eb3duOiAoKSA9PiB0aGlzLnNldFN0YXRlKHt1bnBpbkhpZGU6ZmFsc2V9KSxcbiAgICAgICAgICAgICAgICAgICBvblVwOiAgICgpID0+IHRoaXMuc2V0U3RhdGUoe3VucGluSGlkZTp0cnVlfSkgfSxcbiAgICAgICAgICAgICAgICAgJ2JvdHRvbUJvdHRvbSc6IHsgdG9wOiAnNTAlJyB9XG4gICAgICAgICAgICAgICAgIH19PnVucGluPC9TcGFya1Njcm9sbC5oMz5cbiAgICAgICAgICAgIDwvU3BhcmtTY3JvbGwuZGl2PlxuXG4gICAgICAgICAgPC9TcGFya1Njcm9sbC5zZWN0aW9uPlxuXG4gICAgICAgIDwvU3BhcmtQcm94eS5kaXY+XG5cblxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2VyNTBcIj48L2Rpdj5cblxuICAgICAgICB7LyogcGFyYWxsYXggKi99XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5mbGlja3IuY29tL3Bob3Rvcy9yYWZhZ2FyY2lhXy8xNTI2MjI4NzczOC9pbi9wb29sLTgzODIzODU5QE4wMC9cIj5cbiAgICAgICAgICA8U3BhcmtQcm94eS5kaXYgcHJveHlJZD1cInBhcmFsbGF4XCIgY2xhc3NOYW1lPVwicGFyYWxsYXgtY29udFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJhbGxheC1zaGFkb3dcIj48L2Rpdj5cblxuICAgICAgICAgICAgPFNwYXJrU2Nyb2xsLmRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwYXJhbGxheC1pbWdcIlxuICAgICAgICAgICAgICBwcm94eT1cInBhcmFsbGF4XCJcbiAgICAgICAgICAgICAgdGltZWxpbmU9e3tcbiAgICAgICAgICAgICAgICB0b3BCb3R0b206IHt0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwcHgsMHB4LDBweCknfSxcbiAgICAgICAgICAgICAgICBib3R0b21Ub3A6IHt0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwcHgsLTgwcHgsMHB4KSd9XG4gICAgICAgICAgICAgIH19PjwvU3BhcmtTY3JvbGwuZGl2PlxuXG4gICAgICAgICAgICA8U3BhcmtTY3JvbGwuaDNcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGFyYWxsYXgtdHh0IGZhZGUyXCJcbiAgICAgICAgICAgICAgcHJveHk9XCJwYXJhbGxheFwiXG4gICAgICAgICAgICAgIHRpbWVsaW5lPXt7XG4gICAgICAgICAgICAgICAgdG9wQm90dG9tOiB7IHRyYW5zZm9ybTogJ3NjYWxlKDAuOCkgdHJhbnNsYXRlM2QoMHB4LDEyMHB4LDBweCknIH0sXG4gICAgICAgICAgICAgICAgYm90dG9tVG9wOiB7IHRyYW5zZm9ybTogJ3NjYWxlKDAuOCkgdHJhbnNsYXRlM2QoMHB4LC0xMjBweCwwcHgpJyB9XG4gICAgICAgICAgICAgIH19PnBhcmFsbGF4PC9TcGFya1Njcm9sbC5oMz5cblxuICAgICAgICAgICAgPFNwYXJrU2Nyb2xsLmgzXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBhcmFsbGF4LXR4dCBmYWRlMVwiXG4gICAgICAgICAgICAgIHByb3h5PVwicGFyYWxsYXhcIlxuICAgICAgICAgICAgICB0aW1lbGluZT17e1xuICAgICAgICAgICAgICAgIHRvcEJvdHRvbToge3RyYW5zZm9ybTogJ3NjYWxlKDAuOSkgdHJhbnNsYXRlM2QoMHB4LDE2MHB4LDBweCknfSxcbiAgICAgICAgICAgICAgICBib3R0b21Ub3A6IHt0cmFuc2Zvcm06ICdzY2FsZSgwLjkpIHRyYW5zbGF0ZTNkKDBweCwtMTYwcHgsMHB4KSd9XG4gICAgICAgICAgICAgIH19PnBhcmFsbGF4PC9TcGFya1Njcm9sbC5oMz5cblxuICAgICAgICAgICAgPFNwYXJrU2Nyb2xsLmgzXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBhcmFsbGF4LXR4dFwiXG4gICAgICAgICAgICAgIHByb3h5PVwicGFyYWxsYXhcIlxuICAgICAgICAgICAgICB0aW1lbGluZT17e1xuICAgICAgICAgICAgICAgIHRvcEJvdHRvbToge3RyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDBweCwyMDBweCwwcHgpJ30sXG4gICAgICAgICAgICAgICAgYm90dG9tVG9wOiB7dHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMHB4LC0yMDBweCwwcHgpJ31cbiAgICAgICAgICAgICAgfX0+cGFyYWxsYXg8L1NwYXJrU2Nyb2xsLmgzPlxuICAgICAgICAgIDwvU3BhcmtQcm94eS5kaXY+XG4gICAgICAgIDwvYT5cblxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2VyNTBcIj48L2Rpdj5cblxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2dpbGJveC9yZWFjdC1zcGFyay1zY3JvbGxcIj5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImNlbnRlclwiIHNyYz1cIkdpdEh1Yi1NYXJrLTY0cHgucG5nXCIgYWx0PVwiXCIvPlxuICAgICAgICA8L2E+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZXIxMFwiPjwvZGl2PlxuXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImNlbnRlclwiPlRoaXMgZGVtbyB3YXMgaW5zcGlyZWQgYnkgPGEgaHJlZj1cImh0dHA6Ly9qYW5wYWVwa2UuZ2l0aHViLmlvL1Njcm9sbE1hZ2ljL1wiPlNjcm9sbE1hZ2ljPC9hPjwvcD5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlcjEwXCI+PC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG5SZWFjdC5yZW5kZXIoPEFwcC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhhbXBsZScpKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZXhhbXBsZXMvZGVtby9hcHAuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJ3JlYWN0LXNwYXJrLXNjcm9sbC9zcGFyay1zY3JvbGwtcmVrYXBpJykoe1xuICBpbnZhbGlkYXRlQXV0b21hdGljYWxseTogdHJ1ZVxuXG4gIC8vIHdlIGNvdWxkIGFkZCBhZGRpdGlvbmFsIG9wdGlvbnMgaW4gaGVyZS4uLlxuXG4gIC8vIHNldHVwOiB7Li4ufVxuICAvLyBmb3JtdWxhczogey4uLn1cbiAgLy8gYWN0aW9uUHJvcHM6IHsuLi59XG59KTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZXhhbXBsZXMvZGVtby9hcHAtc3BhcmsuanNcbiAqKi8iLCJ2YXIgUmVrYXBpID0gcmVxdWlyZSgncmVrYXBpL2Rpc3QvcmVrYXBpJyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xudmFyIF9mYWN0b3J5ID0gcmVxdWlyZSgnLi8nKTtcblxuZnVuY3Rpb24gZmFjdG9yeShvcHRpb25zKSB7XG4gIHJldHVybiBfZmFjdG9yeShhc3NpZ24oe1xuICAgIGFuaW1hdG9yOiB7XG4gICAgICBpbnN0YW5jZTogKCkgPT4gbmV3IFJla2FwaShkb2N1bWVudC5ib2R5KVxuICAgIH1cbiAgfSwgb3B0aW9ucykpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZhY3Rvcnk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc3Bhcmstc2Nyb2xsLXJla2FwaS5qc1xuICoqLyIsIi8qISByZWthcGkgLSB2MS40LjQgLSAyMDE1LTAxLTAxIC0gaHR0cDovL3Jla2FwaS5jb20gKi9cbi8qIVxuICogUmVrYXBpIC0gUmV3cml0dGVuIEthcGkuXG4gKiBodHRwOi8vcmVrYXBpLmNvbS9cbiAqXG4gKiBCeSBKZXJlbXkgS2FobiAoamVyZW15Y2thaG5AZ21haWwuY29tKVxuICpcbiAqIE1ha2UgZnVuIGtleWZyYW1lIGFuaW1hdGlvbnMgd2l0aCBKYXZhU2NyaXB0LlxuICpcbiAqIERlcGVuZGVuY2llczpcbiAqICAgKiBVbmRlcnNjb3JlLmpzIChodHRwczovL2dpdGh1Yi5jb20vZG9jdW1lbnRjbG91ZC91bmRlcnNjb3JlKSBvciBMby1EYXNoIChodHRwOi8vbG9kYXNoLmNvbS8pXG4gKiAgICogU2hpZnR5LmpzIChodHRwczovL2dpdGh1Yi5jb20vamVyZW15Y2thaG4vc2hpZnR5KS5cbiAqXG4gKiBNSVQgTGljZW5zZS4gIFRoaXMgY29kZSBmcmVlIHRvIHVzZSwgbW9kaWZ5LCBkaXN0cmlidXRlIGFuZCBlbmpveS5cbiAqL1xuXG47KGZ1bmN0aW9uIChnbG9iYWwpIHtcblxuLy8gUkVLQVBJLUdMT0JBTFNcbi8vIFRoZXNlIGFyZSBnbG9iYWwgaW4gZGV2ZWxvcG1lbnQsIGJ1dCBnZXQgd3JhcHBlZCBpbiBhIGNsb3N1cmUgYXQgYnVpbGQtdGltZS5cblxuLy8gQSBoYWNrIGZvciBVZ2xpZnlKUyBkZWZpbmVzLiAgR2V0cyByZW1vdmVzIGluIHRoZSBidWlsZCBwcm9jZXNzLlxuaWYgKHR5cGVvZiBSRUtBUElfREVCVUcgPT09ICd1bmRlZmluZWQnKSB7XG4gIFJFS0FQSV9ERUJVRyA9IHRydWU7XG59XG5cbnZhciByZWthcGlNb2R1bGVzID0gW107XG5cbi8qIVxuICogRmlyZSBhbiBldmVudCBib3VuZCB0byBhIFJla2FwaS5cbiAqIEBwYXJhbSB7UmVrYXBpfSByZWthcGlcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWVcbiAqIEBwYXJhbSB7VW5kZXJzY29yZX0gXyBBIHJlZmVyZW5jZSB0byB0aGUgc2NvcGVkIFVuZGVyc2NvcmUvTG8tRGFzaFxuICogZGVwZW5kZW5jeVxuICogQHBhcmFtIHtPYmplY3Q9fSBvcHRfZGF0YSBPcHRpb25hbCBldmVudC1zcGVjaWZpYyBkYXRhXG4gKi9cbmZ1bmN0aW9uIGZpcmVFdmVudCAocmVrYXBpLCBldmVudE5hbWUsIF8sIG9wdF9kYXRhKSB7XG4gIF8uZWFjaChyZWthcGkuX2V2ZW50c1tldmVudE5hbWVdLCBmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgIGhhbmRsZXIocmVrYXBpLCBvcHRfZGF0YSk7XG4gIH0pO1xufVxuXG4vKiFcbiAqIEBwYXJhbSB7UmVrYXBpfSByZWthcGlcbiAqIEBwYXJhbSB7VW5kZXJzY29yZX0gX1xuICovXG5mdW5jdGlvbiByZWNhbGN1bGF0ZUFuaW1hdGlvbkxlbmd0aCAocmVrYXBpLCBfKSB7XG4gIHZhciBhY3Rvckxlbmd0aHMgPSBbXTtcblxuICBfLmVhY2gocmVrYXBpLl9hY3RvcnMsIGZ1bmN0aW9uIChhY3Rvcikge1xuICAgIGFjdG9yTGVuZ3Rocy5wdXNoKGFjdG9yLmdldEVuZCgpKTtcbiAgfSk7XG5cbiAgcmVrYXBpLl9hbmltYXRpb25MZW5ndGggPSBNYXRoLm1heC5hcHBseShNYXRoLCBhY3Rvckxlbmd0aHMpO1xufVxuXG4vKiFcbiAqIERvZXMgbm90aGluZy4gIEFic29sdXRlbHkgbm90aGluZyBhdCBhbGwuXG4gKi9cbmZ1bmN0aW9uIG5vb3AgKCkge1xuICAvLyBOT09QIVxufVxuXG52YXIgcmVrYXBpQ29yZSA9IGZ1bmN0aW9uIChyb290LCBfLCBUd2VlbmFibGUpIHtcblxuICAndXNlIHN0cmljdCc7XG5cbiAgLy8gQ09OU1RBTlRTXG4gIC8vXG4gIHZhciBVUERBVEVfVElNRSA9IDEwMDAgLyA2MDtcblxuICAvKiFcbiAgICogRGV0ZXJtaW5lcyB3aGljaCBpdGVyYXRpb24gb2YgdGhlIGxvb3AgdGhlIGFuaW1hdGlvbiBpcyBjdXJyZW50bHkgaW4uXG4gICAqIEBwYXJhbSB7UmVrYXBpfSByZWthcGlcbiAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVTaW5jZVN0YXJ0XG4gICAqL1xuICBmdW5jdGlvbiBkZXRlcm1pbmVDdXJyZW50TG9vcEl0ZXJhdGlvbiAocmVrYXBpLCB0aW1lU2luY2VTdGFydCkge1xuICAgIHZhciBhbmltYXRpb25MZW5ndGggPSByZWthcGkuX2FuaW1hdGlvbkxlbmd0aDtcbiAgICBpZiAoYW5pbWF0aW9uTGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGltZVNpbmNlU3RhcnQ7XG4gICAgfVxuXG4gICAgdmFyIGN1cnJlbnRJdGVyYXRpb24gPSBNYXRoLmZsb29yKHRpbWVTaW5jZVN0YXJ0IC8gYW5pbWF0aW9uTGVuZ3RoKTtcbiAgICByZXR1cm4gY3VycmVudEl0ZXJhdGlvbjtcbiAgfVxuXG4gIC8qIVxuICAgKiBDYWxjdWxhdGUgaG93IG1hbnkgbWlsbGlzZWNvbmRzIHNpbmNlIHRoZSBhbmltYXRpb24gYmVnYW4uXG4gICAqIEBwYXJhbSB7UmVrYXBpfSByZWthcGlcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZnVuY3Rpb24gY2FsY3VsYXRlVGltZVNpbmNlU3RhcnQgKHJla2FwaSkge1xuICAgIHJldHVybiBub3coKSAtIHJla2FwaS5fbG9vcFRpbWVzdGFtcDtcbiAgfVxuXG4gIC8qIVxuICAgKiBEZXRlcm1pbmVzIGlmIHRoZSBhbmltYXRpb24gaXMgY29tcGxldGUgb3Igbm90LlxuICAgKiBAcGFyYW0ge1Jla2FwaX0gcmVrYXBpXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjdXJyZW50TG9vcEl0ZXJhdGlvblxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gaXNBbmltYXRpb25Db21wbGV0ZSAocmVrYXBpLCBjdXJyZW50TG9vcEl0ZXJhdGlvbikge1xuICAgIHJldHVybiBjdXJyZW50TG9vcEl0ZXJhdGlvbiA+PSByZWthcGkuX3RpbWVzVG9JdGVyYXRlXG4gICAgICAgJiYgcmVrYXBpLl90aW1lc1RvSXRlcmF0ZSAhPT0gLTE7XG4gIH1cblxuICAvKiFcbiAgICogU3RvcHMgdGhlIGFuaW1hdGlvbiBpZiBpdCBpcyBjb21wbGV0ZS5cbiAgICogQHBhcmFtIHtSZWthcGl9IHJla2FwaVxuICAgKiBAcGFyYW0ge251bWJlcn0gY3VycmVudExvb3BJdGVyYXRpb25cbiAgICovXG4gIGZ1bmN0aW9uIHVwZGF0ZVBsYXlTdGF0ZSAocmVrYXBpLCBjdXJyZW50TG9vcEl0ZXJhdGlvbikge1xuICAgIGlmIChpc0FuaW1hdGlvbkNvbXBsZXRlKHJla2FwaSwgY3VycmVudExvb3BJdGVyYXRpb24pKSB7XG4gICAgICByZWthcGkuc3RvcCgpO1xuICAgICAgZmlyZUV2ZW50KHJla2FwaSwgJ2FuaW1hdGlvbkNvbXBsZXRlJywgXyk7XG4gICAgfVxuICB9XG5cbiAgLyohXG4gICAqIENhbGN1bGF0ZSBob3cgZmFyIGluIHRoZSBhbmltYXRpb24gbG9vcCBgcmVrYXBpYCBpcywgaW4gbWlsbGlzZWNvbmRzLFxuICAgKiBiYXNlZCBvbiB0aGUgY3VycmVudCB0aW1lLiAgQWxzbyBvdmVyZmxvd3MgaW50byBhIG5ldyBsb29wIGlmIG5lY2Vzc2FyeS5cbiAgICogQHBhcmFtIHtSZWthcGl9IHJla2FwaVxuICAgKiBAcGFyYW0ge251bWJlcn0gZm9yTWlsbGlzZWNvbmRcbiAgICogQHBhcmFtIHtudW1iZXJ9IGN1cnJlbnRMb29wSXRlcmF0aW9uXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGZ1bmN0aW9uIGNhbGN1bGF0ZUxvb3BQb3NpdGlvbiAocmVrYXBpLCBmb3JNaWxsaXNlY29uZCwgY3VycmVudExvb3BJdGVyYXRpb24pIHtcbiAgICB2YXIgY3VycmVudExvb3BQb3NpdGlvbjtcbiAgICB2YXIgYW5pbWF0aW9uTGVuZ3RoID0gcmVrYXBpLl9hbmltYXRpb25MZW5ndGg7XG5cbiAgICBpZiAoYW5pbWF0aW9uTGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBpZiAoaXNBbmltYXRpb25Db21wbGV0ZShyZWthcGksIGN1cnJlbnRMb29wSXRlcmF0aW9uKSkge1xuICAgICAgLy8gUmV3aW5kIHRvIHRoZSBlbmQgaWYgdGhlIHBsYXloZWFkIGhhcyBnb25lIHBhc3QgaXRcbiAgICAgIGN1cnJlbnRMb29wUG9zaXRpb24gPSBhbmltYXRpb25MZW5ndGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnRMb29wUG9zaXRpb24gPSBmb3JNaWxsaXNlY29uZCAlIGFuaW1hdGlvbkxlbmd0aDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3VycmVudExvb3BQb3NpdGlvbjtcbiAgfVxuXG4gIC8qIVxuICAgKiBDYWxjdWxhdGUgdGhlIHRpbWVsaW5lIHBvc2l0aW9uIGFuZCBzdGF0ZSBmb3IgYSBnaXZlbiBtaWxsaXNlY29uZC5cbiAgICogVXBkYXRlcyB0aGUgYHJla2FwaWAgc3RhdGUgaW50ZXJuYWxseSBhbmQgYWNjb3VudHMgZm9yIGhvdyBtYW55IGxvb3BcbiAgICogaXRlcmF0aW9ucyB0aGUgYW5pbWF0aW9uIHJ1bnMgZm9yLlxuICAgKiBAcGFyYW0ge1Jla2FwaX0gcmVrYXBpXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBmb3JNaWxsaXNlY29uZFxuICAgKi9cbiAgZnVuY3Rpb24gdXBkYXRlVG9NaWxsaXNlY29uZCAocmVrYXBpLCBmb3JNaWxsaXNlY29uZCkge1xuICAgIHZhciBsb29wUG9zaXRpb24gPSAwO1xuICAgIHZhciBjdXJyZW50SXRlcmF0aW9uID0gMDtcblxuICAgIGN1cnJlbnRJdGVyYXRpb24gPSBkZXRlcm1pbmVDdXJyZW50TG9vcEl0ZXJhdGlvbihyZWthcGksIGZvck1pbGxpc2Vjb25kKTtcbiAgICBsb29wUG9zaXRpb24gPSBjYWxjdWxhdGVMb29wUG9zaXRpb24oXG4gICAgICByZWthcGksIGZvck1pbGxpc2Vjb25kLCBjdXJyZW50SXRlcmF0aW9uKTtcbiAgICByZWthcGkuX2xvb3BQb3NpdGlvbiA9IGxvb3BQb3NpdGlvbjtcblxuICAgIHZhciBrZXlmcmFtZVJlc2V0TGlzdCA9IFtdO1xuXG4gICAgaWYgKGN1cnJlbnRJdGVyYXRpb24gPiByZWthcGkuX2xhdGVzdEl0ZXJhdGlvbikge1xuICAgICAgZmlyZUV2ZW50KHJla2FwaSwgJ2FuaW1hdGlvbkxvb3BlZCcsIF8pO1xuXG4gICAgICAvLyBSZXNldCBmdW5jdGlvbiBrZXlmcmFtZXNcbiAgICAgIHZhciBsb29rdXBPYmplY3QgPSB7IG5hbWU6ICdmdW5jdGlvbicgfTtcbiAgICAgIF8uZWFjaChyZWthcGkuX2FjdG9ycywgZnVuY3Rpb24gKGFjdG9yKSB7XG4gICAgICAgIHZhciBmbktleWZyYW1lcyA9IF8ud2hlcmUoYWN0b3IuX2tleWZyYW1lUHJvcGVydGllcywgbG9va3VwT2JqZWN0KTtcblxuICAgICAgICB2YXIgbGFzdEZuS2V5ZnJhbWUgPSBfLmxhc3QoZm5LZXlmcmFtZXMpO1xuXG4gICAgICAgIGlmIChsYXN0Rm5LZXlmcmFtZSAmJiAhbGFzdEZuS2V5ZnJhbWUuaGFzRmlyZWQpIHtcbiAgICAgICAgICBsYXN0Rm5LZXlmcmFtZS5pbnZva2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGtleWZyYW1lUmVzZXRMaXN0ID0ga2V5ZnJhbWVSZXNldExpc3QuY29uY2F0KGZuS2V5ZnJhbWVzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJla2FwaS5fbGF0ZXN0SXRlcmF0aW9uID0gY3VycmVudEl0ZXJhdGlvbjtcbiAgICByZWthcGkudXBkYXRlKGxvb3BQb3NpdGlvbik7XG4gICAgdXBkYXRlUGxheVN0YXRlKHJla2FwaSwgY3VycmVudEl0ZXJhdGlvbik7XG5cbiAgICBfLmVhY2goa2V5ZnJhbWVSZXNldExpc3QsIGZ1bmN0aW9uIChmbktleWZyYW1lKSB7XG4gICAgICBmbktleWZyYW1lLmhhc0ZpcmVkID0gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICAvKiFcbiAgICogQ2FsY3VsYXRlIGhvdyBmYXIgaW50byB0aGUgYW5pbWF0aW9uIGxvb3AgYHJla2FwaWAgaXMsIGluIG1pbGxpc2Vjb25kcyxcbiAgICogYW5kIHVwZGF0ZSBiYXNlZCBvbiB0aGF0IHRpbWUuXG4gICAqIEBwYXJhbSB7UmVrYXBpfSByZWthcGlcbiAgICovXG4gIGZ1bmN0aW9uIHVwZGF0ZVRvQ3VycmVudE1pbGxpc2Vjb25kIChyZWthcGkpIHtcbiAgICB1cGRhdGVUb01pbGxpc2Vjb25kKHJla2FwaSwgY2FsY3VsYXRlVGltZVNpbmNlU3RhcnQocmVrYXBpKSk7XG4gIH1cblxuICAvKiFcbiAgICogVGhpcyBpcyB0aGUgaGVhcnRiZWF0IG9mIGFuIGFuaW1hdGlvbi4gIFRoaXMgdXBkYXRlcyBgcmVrYXBpYCdzIHN0YXRlIGFuZFxuICAgKiB0aGVuIGNhbGxzIGl0c2VsZiBjb250aW51b3VzbHkuXG4gICAqIEBwYXJhbSB7UmVrYXBpfSByZWthcGlcbiAgICovXG4gIGZ1bmN0aW9uIHRpY2sgKHJla2FwaSkge1xuICAgIC8vIE5lZWQgdG8gY2hlY2sgZm9yIC5jYWxsIHByZXNlbmNlIHRvIGdldCBhcm91bmQgYW4gSUUgbGltaXRhdGlvbi4gIFNlZVxuICAgIC8vIGFubm90YXRpb24gZm9yIGNhbmNlbExvb3AgZm9yIG1vcmUgaW5mby5cbiAgICBpZiAocmVrYXBpLl9zY2hlZHVsZVVwZGF0ZS5jYWxsKSB7XG4gICAgICByZWthcGkuX2xvb3BJZCA9IHJla2FwaS5fc2NoZWR1bGVVcGRhdGUuY2FsbChnbG9iYWwsXG4gICAgICAgIHJla2FwaS5fdXBkYXRlRm4sIFVQREFURV9USU1FKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVrYXBpLl9sb29wSWQgPSBzZXRUaW1lb3V0KHJla2FwaS5fdXBkYXRlRm4sIFVQREFURV9USU1FKTtcbiAgICB9XG4gIH1cblxuICAvKiFcbiAgICogQHJldHVybiB7RnVuY3Rpb259XG4gICAqL1xuICBmdW5jdGlvbiBnZXRVcGRhdGVNZXRob2QgKCkge1xuICAgIC8vIHJlcXVlc3RBbmltYXRpb25GcmFtZSgpIHNoaW0gYnkgUGF1bCBJcmlzaCAobW9kaWZpZWQgZm9yIFJla2FwaSlcbiAgICAvLyBodHRwOi8vcGF1bGlyaXNoLmNvbS8yMDExL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtYW5pbWF0aW5nL1xuICAgIHJldHVybiBnbG9iYWwucmVxdWVzdEFuaW1hdGlvbkZyYW1lICB8fFxuICAgIGdsb2JhbC53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICBnbG9iYWwub1JlcXVlc3RBbmltYXRpb25GcmFtZSAgICAgIHx8XG4gICAgZ2xvYmFsLm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lICAgICB8fFxuICAgICAgKGdsb2JhbC5tb3pDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgICAgICAmJiBnbG9iYWwubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB8fFxuICAgIGdsb2JhbC5zZXRUaW1lb3V0O1xuICB9XG5cbiAgLyohXG4gICAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0Q2FuY2VsTWV0aG9kICgpIHtcbiAgICByZXR1cm4gZ2xvYmFsLmNhbmNlbEFuaW1hdGlvbkZyYW1lICB8fFxuICAgIGdsb2JhbC53ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZSB8fFxuICAgIGdsb2JhbC5vQ2FuY2VsQW5pbWF0aW9uRnJhbWUgICAgICB8fFxuICAgIGdsb2JhbC5tc0NhbmNlbEFuaW1hdGlvbkZyYW1lICAgICB8fFxuICAgIGdsb2JhbC5tb3pDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICBnbG9iYWwuY2xlYXJUaW1lb3V0O1xuICB9XG5cbiAgLyohXG4gICAqIENhbmNlbHMgYW4gdXBkYXRlIGxvb3AuICBUaGlzIGFic3RyYWN0aW9uIGlzIG5lZWRlZCB0byBnZXQgYXJvdW5kIHRoZSBmYWN0XG4gICAqIHRoYXQgaW4gSUUsIGNsZWFyVGltZW91dCBpcyBub3QgdGVjaG5pY2FsbHkgYSBmdW5jdGlvblxuICAgKiAoaHR0cHM6Ly90d2l0dGVyLmNvbS9raXRjYW1icmlkZ2Uvc3RhdHVzLzIwNjY1NTA2MDM0MjYwMzc3NykgYW5kIHRodXNcbiAgICogRnVuY3Rpb24ucHJvdG90eXBlLmNhbGwgY2Fubm90IGJlIHVzZWQgdXBvbiBpdC5cbiAgICogQHBhcmFtIHtSZWthcGl9IHJla2FwaVxuICAgKi9cbiAgZnVuY3Rpb24gY2FuY2VsTG9vcCAocmVrYXBpKSB7XG4gICAgaWYgKHJla2FwaS5fY2FuY2VsVXBkYXRlLmNhbGwpIHtcbiAgICAgIHJla2FwaS5fY2FuY2VsVXBkYXRlLmNhbGwoZ2xvYmFsLCByZWthcGkuX2xvb3BJZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNsZWFyVGltZW91dChyZWthcGkuX2xvb3BJZCk7XG4gICAgfVxuICB9XG5cbiAgLy8gQ09SRS1TUEVDSUZJQyBWQVJTIEFORCBGVU5DVElPTlNcblxuICB2YXIgbm93ID0gVHdlZW5hYmxlLm5vdztcblxuICB2YXIgcGxheVN0YXRlID0ge1xuICAgICdTVE9QUEVEJzogJ3N0b3BwZWQnXG4gICAgLCdQQVVTRUQnOiAncGF1c2VkJ1xuICAgICwnUExBWUlORyc6ICdwbGF5aW5nJ1xuICB9O1xuXG4gIC8qKlxuICAgKiBJZiB0aGlzIGlzIGEgcmVuZGVyZWQgYW5pbWF0aW9uLCB0aGUgYXBwcm9wcmlhdGUgcmVuZGVyZXIgaXMgYWNjZXNzaWJsZSBhc1xuICAgKiBgdGhpcy5yZW5kZXJlcmAuICBJZiBwcm92aWRlZCwgYSByZWZlcmVuY2UgdG8gYG9wdF9jb250ZXh0YCBpcyBhY2Nlc3NpYmxlXG4gICAqIGFzIGB0aGlzLmNvbnRleHRgLlxuICAgKiBAY2xhc3MgUmVrYXBpXG4gICAqIEBwYXJhbSB7T2JqZWN0fENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRHxIVE1MRWxlbWVudD19IG9wdF9jb250ZXh0IFRoaXNcbiAgICogZGV0ZXJtaW5lcyBob3cgdG8gcmVuZGVyIHRoZSBhbmltYXRpb24uICBJZiB0aGlzIGlzIG5vdCBwcm92aWRlZCBvciBpcyBhXG4gICAqIHBsYWluIG9iamVjdCAoYHt9YCksIHRoZSBhbmltYXRpb24gd2lsbCBub3QgcmVuZGVyIGFueXRoaW5nIGFuZFxuICAgKiBgdGhpcy5yZW5kZXJlcmAgd2lsbCBiZSBgdW5kZWZpbmVkYC4gIElmIHRoaXMgaXMgYSByZWZlcmVuY2UgdG8gYVxuICAgKiBbYENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRGBdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpLFxuICAgKiBge3sjY3Jvc3NMaW5rIFwiUmVrYXBpLkNhbnZhc1JlbmRlcmVyXCJ9fXt7L2Nyb3NzTGlua319YCB3aWxsIGJlIGluaXRpYWxpemVkXG4gICAqIGFzIGB0aGlzLnJlbmRlcmVyYCBmb3IgSFRNTDUgY2FudmFzLWJhc2VkIHJlbmRlcmluZy4gIFRoaXMgdGhpcyBpcyBhXG4gICAqIHJlZmVyZW5jZSB0byBhIERPTSBlbGVtZW50LCBge3sjY3Jvc3NMaW5rXG4gICAqIFwiUmVrYXBpLkRPTVJlbmRlcmVyXCJ9fXt7L2Nyb3NzTGlua319YCB3aWxsIGJlIGluaXRpYWxpemVkIGFzXG4gICAqIGB0aGlzLnJlbmRlcmVyYCBmb3IgZWl0aGVyIGEgRE9NIG9yIENTUyBgQGtleWZyYW1lYC1iYXNlZCByZW5kZXJpbmcuXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAY2hhaW5hYmxlXG4gICAqL1xuICBmdW5jdGlvbiBSZWthcGkgKG9wdF9jb250ZXh0KSB7XG4gICAgdGhpcy5jb250ZXh0ID0gb3B0X2NvbnRleHQgfHwge307XG4gICAgdGhpcy5fYWN0b3JzID0ge307XG4gICAgdGhpcy5fcGxheVN0YXRlID0gcGxheVN0YXRlLlNUT1BQRUQ7XG5cbiAgICB0aGlzLl9ldmVudHMgPSB7XG4gICAgICAnYW5pbWF0aW9uQ29tcGxldGUnOiBbXVxuICAgICAgLCdwbGF5U3RhdGVDaGFuZ2UnOiBbXVxuICAgICAgLCdwbGF5JzogW11cbiAgICAgICwncGF1c2UnOiBbXVxuICAgICAgLCdzdG9wJzogW11cbiAgICAgICwnYmVmb3JlVXBkYXRlJzogW11cbiAgICAgICwnYWZ0ZXJVcGRhdGUnOiBbXVxuICAgICAgLCdhZGRBY3Rvcic6IFtdXG4gICAgICAsJ3JlbW92ZUFjdG9yJzogW11cbiAgICAgICwnYWRkS2V5ZnJhbWVQcm9wZXJ0eSc6IFtdXG4gICAgICAsJ3JlbW92ZUtleWZyYW1lUHJvcGVydHknOiBbXVxuICAgICAgLCdhZGRLZXlmcmFtZVByb3BlcnR5VHJhY2snOiBbXVxuICAgICAgLCd0aW1lbGluZU1vZGlmaWVkJzogW11cbiAgICAgICwnYW5pbWF0aW9uTG9vcGVkJzogW11cbiAgICB9O1xuXG4gICAgLy8gSG93IG1hbnkgdGltZXMgdG8gbG9vcCB0aGUgYW5pbWF0aW9uIGJlZm9yZSBzdG9wcGluZ1xuICAgIHRoaXMuX3RpbWVzVG9JdGVyYXRlID0gLTE7XG5cbiAgICAvLyBNaWxsaXNlY29uZCBkdXJhdGlvbiBvZiB0aGUgYW5pbWF0aW9uXG4gICAgdGhpcy5fYW5pbWF0aW9uTGVuZ3RoID0gMDtcblxuICAgIC8vIFRoZSBzZXRUaW1lb3V0IElEIG9mIGB0aWNrYFxuICAgIHRoaXMuX2xvb3BJZCA9IG51bGw7XG5cbiAgICAvLyBUaGUgVU5JWCB0aW1lIGF0IHdoaWNoIHRoZSBhbmltYXRpb24gbG9vcCBzdGFydGVkXG4gICAgdGhpcy5fbG9vcFRpbWVzdGFtcCA9IG51bGw7XG5cbiAgICAvLyBVc2VkIGZvciBtYWludGFpbmluZyBwb3NpdGlvbiB3aGVuIHRoZSBhbmltYXRpb24gaXMgcGF1c2VkXG4gICAgdGhpcy5fcGF1c2VkQXRUaW1lID0gbnVsbDtcblxuICAgIC8vIFRoZSBsYXN0IG1pbGxpc2Vjb25kIHBvc2l0aW9uIHRoYXQgd2FzIHVwZGF0ZWRcbiAgICB0aGlzLl9sYXN0VXBkYXRlZE1pbGxpc2Vjb25kID0gMDtcblxuICAgIC8vIFRoZSBtb3N0IHJlY2VudCBsb29wIGl0ZXJhdGlvbiBhIGZyYW1lIHdhcyBjYWxjdWxhdGVkIGZvclxuICAgIHRoaXMuX2xhdGVzdEl0ZXJhdGlvbiA9IDA7XG5cbiAgICAvLyBUaGUgbW9zdCByZWNlbnQgbWlsbGlzZWNvbmQgcG9zaXRpb24gd2l0aGluIHRoZSBsb29wIHRoYXQgdGhlIGFuaW1hdGlvblxuICAgIC8vIHdhcyB1cGRhdGVkIHRvXG4gICAgdGhpcy5fbG9vcFBvc2l0aW9uID0gbnVsbDtcblxuICAgIHRoaXMuX3NjaGVkdWxlVXBkYXRlID0gZ2V0VXBkYXRlTWV0aG9kKCk7XG4gICAgdGhpcy5fY2FuY2VsVXBkYXRlID0gZ2V0Q2FuY2VsTWV0aG9kKCk7XG5cbiAgICB0aGlzLl91cGRhdGVGbiA9IF8uYmluZChmdW5jdGlvbiAoKSB7XG4gICAgICB0aWNrKHRoaXMpO1xuICAgICAgdXBkYXRlVG9DdXJyZW50TWlsbGlzZWNvbmQodGhpcyk7XG4gICAgfSwgdGhpcyk7XG5cbiAgICBfLmVhY2goUmVrYXBpLl9yZW5kZXJlckluaXRIb29rLCBmdW5jdGlvbiAocmVuZGVyZXJJbml0SG9vaykge1xuICAgICAgcmVuZGVyZXJJbml0SG9vayh0aGlzKTtcbiAgICB9LCB0aGlzKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gRGVjb3JhdGUgdGhlIFJla2FwaSBvYmplY3Qgd2l0aCB0aGUgZGVwZW5kZW5jaWVzIHNvIHRoYXQgb3RoZXIgbW9kdWxlcyBjYW5cbiAgLy8gYWNjZXNzIHRoZW0uXG4gIFJla2FwaS5Ud2VlbmFibGUgPSBUd2VlbmFibGU7XG4gIFJla2FwaS5fID0gXztcblxuICAvKiFcbiAgICogQHR5cGUge09iamVjdC48ZnVuY3Rpb24+fSBDb250YWlucyB0aGUgY29udGV4dCBpbml0IGZ1bmN0aW9uIHRvIGJlIGNhbGxlZFxuICAgKiBpbiB0aGUgUmVrYXBpIGNvbnN0cnVjdG9yLlxuICAgKi9cbiAgUmVrYXBpLl9yZW5kZXJlckluaXRIb29rID0ge307XG5cbiAgLyoqXG4gICAqIEFkZCBhbiBhY3RvciB0byB0aGUgYW5pbWF0aW9uLiAgRGVjb3JhdGVzIHRoZSBhZGRlZCBgYWN0b3JgIHdpdGggYVxuICAgKiByZWZlcmVuY2UgdG8gdGhpcyBgUmVrYXBpYCBpbnN0YW5jZSBhcyBgdGhpcy5yZWthcGlgLlxuICAgKlxuICAgKiBAbWV0aG9kIGFkZEFjdG9yXG4gICAqIEBwYXJhbSB7UmVrYXBpLkFjdG9yfE9iamVjdH0gYWN0b3IgSWYgdGhpcyBpcyBhbiBgT2JqZWN0YCwgaXQgaXMgdXNlZCB0b1xuICAgKiBhcyB0aGUgY29uc3RydWN0b3IgcGFyYW1ldGVycyBmb3IgYSBuZXcgYHt7I2Nyb3NzTGlua1xuICAgKiBcIlJla2FwaS5BY3RvclwifX17ey9jcm9zc0xpbmt9fWAgaW5zdGFuY2UgdGhhdCBpcyBjcmVhdGVkIGJ5IHRoaXMgbWV0aG9kLlxuICAgKiBAcmV0dXJuIHtSZWthcGkuQWN0b3J9IFRoZSBhY3RvciB0aGF0IHdhcyBhZGRlZC5cbiAgICovXG4gIFJla2FwaS5wcm90b3R5cGUuYWRkQWN0b3IgPSBmdW5jdGlvbiAoYWN0b3IpIHtcbiAgICB2YXIgcmVrYXBpQWN0b3I7XG5cbiAgICBpZiAoYWN0b3IgaW5zdGFuY2VvZiBSZWthcGkuQWN0b3IpIHtcbiAgICAgIHJla2FwaUFjdG9yID0gYWN0b3I7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJla2FwaUFjdG9yID0gbmV3IFJla2FwaS5BY3RvcihhY3Rvcik7XG4gICAgfVxuXG4gICAgLy8gWW91IGNhbid0IGFkZCBhbiBhY3RvciBtb3JlIHRoYW4gb25jZS5cbiAgICBpZiAoIV8uY29udGFpbnModGhpcy5fYWN0b3JzLCByZWthcGlBY3RvcikpIHtcbiAgICAgIGlmICh0eXBlb2YgcmVrYXBpQWN0b3IuY29udGV4dCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmVrYXBpQWN0b3IuY29udGV4dCA9IHRoaXMuY29udGV4dDtcbiAgICAgIH1cblxuICAgICAgcmVrYXBpQWN0b3IucmVrYXBpID0gdGhpcztcblxuICAgICAgLy8gU3RvcmUgYSByZWZlcmVuY2UgdG8gdGhlIGFjdG9yIGludGVybmFsbHlcbiAgICAgIHRoaXMuX2FjdG9yc1tyZWthcGlBY3Rvci5pZF0gPSByZWthcGlBY3RvcjtcblxuICAgICAgcmVjYWxjdWxhdGVBbmltYXRpb25MZW5ndGgodGhpcywgXyk7XG4gICAgICByZWthcGlBY3Rvci5zZXR1cCgpO1xuXG4gICAgICBmaXJlRXZlbnQodGhpcywgJ2FkZEFjdG9yJywgXywgcmVrYXBpQWN0b3IpO1xuICAgIH1cblxuICAgIHJldHVybiByZWthcGlBY3RvcjtcbiAgfTtcblxuICAvKipcbiAgICogR2V0IGEgcmVmZXJlbmNlIHRvIGFuIGFjdG9yIGZyb20gdGhlIGFuaW1hdGlvbiBieSBpdHMgYGlkYC4gIFlvdSBjYW4gdXNlXG4gICAqIGB7eyNjcm9zc0xpbmsgXCJSZWthcGkvZ2V0QWN0b3JJZHM6bWV0aG9kXCJ9fXt7L2Nyb3NzTGlua319YCB0byBnZXQgYSBsaXN0XG4gICAqIG9mIElEcyBmb3IgYWxsIGFjdG9ycyBpbiB0aGUgYW5pbWF0aW9uLlxuICAgKiBAbWV0aG9kIGdldEFjdG9yXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBhY3RvcklkXG4gICAqIEByZXR1cm4ge1Jla2FwaS5BY3Rvcn1cbiAgICovXG4gIFJla2FwaS5wcm90b3R5cGUuZ2V0QWN0b3IgPSBmdW5jdGlvbiAoYWN0b3JJZCkge1xuICAgIHJldHVybiB0aGlzLl9hY3RvcnNbYWN0b3JJZF07XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlIHRoZSBgaWRgJ3Mgb2YgYWxsIGFjdG9ycyBpbiBhbiBhbmltYXRpb24uXG4gICAqXG4gICAqIEBtZXRob2QgZ2V0QWN0b3JJZHNcbiAgICogQHJldHVybiB7QXJyYXkobnVtYmVyKX1cbiAgICovXG4gIFJla2FwaS5wcm90b3R5cGUuZ2V0QWN0b3JJZHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF8ucGx1Y2sodGhpcy5fYWN0b3JzLCAnaWQnKTtcbiAgfTtcblxuICAvKipcbiAgICogUmV0cmlldmUgYWxsIGFjdG9ycyBpbiB0aGUgYW5pbWF0aW9uIGFzIGFuIE9iamVjdC5cbiAgICogQG1ldGhvZCBnZXRBbGxBY3RvcnNcbiAgICogQHJldHVybiB7T2JqZWN0fSBUaGUga2V5cyBvZiB0aGlzIE9iamVjdCBjb3JyZXNwb25kIHRvIHRoZSBBY3RvcnMnIGBpZGBzLlxuICAgKi9cbiAgUmVrYXBpLnByb3RvdHlwZS5nZXRBbGxBY3RvcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF8uY2xvbmUodGhpcy5fYWN0b3JzKTtcbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBudW1iZXIgb2YgYWN0b3JzIGluIHRoZSBhbmltYXRpb24uXG4gICAqIEBtZXRob2QgZ2V0QWN0b3JDb3VudFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBSZWthcGkucHJvdG90eXBlLmdldEFjdG9yQ291bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF8uc2l6ZSh0aGlzLl9hY3RvcnMpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmUgYW4gYWN0b3IgZnJvbSB0aGUgYW5pbWF0aW9uLiAgVGhpcyBkb2VzIG5vdCBkZXN0cm95IHRoZSBhY3RvciwgaXRcbiAgICogb25seSByZW1vdmVzIHRoZSBsaW5rIGJldHdlZW4gaXQgYW5kIHRoZSBgUmVrYXBpYCBpbnN0YW5jZS4gIFRoaXMgbWV0aG9kXG4gICAqIGNhbGxzIHRoZSBhY3RvcidzIGB0ZWFyZG93bmAgbWV0aG9kLCBpZiBpdCBpcyBkZWZpbmVkLlxuICAgKiBAbWV0aG9kIHJlbW92ZUFjdG9yXG4gICAqIEBwYXJhbSB7UmVrYXBpLkFjdG9yfSBhY3RvclxuICAgKiBAcmV0dXJuIHtSZWthcGkuQWN0b3J9XG4gICAqL1xuICBSZWthcGkucHJvdG90eXBlLnJlbW92ZUFjdG9yID0gZnVuY3Rpb24gKGFjdG9yKSB7XG4gICAgLy8gUmVtb3ZlIHRoZSBsaW5rIGJldHdlZW4gUmVrYXBpIGFuZCBhY3RvclxuICAgIGRlbGV0ZSB0aGlzLl9hY3RvcnNbYWN0b3IuaWRdO1xuICAgIGRlbGV0ZSBhY3Rvci5yZWthcGk7XG5cbiAgICBhY3Rvci50ZWFyZG93bigpO1xuICAgIHJlY2FsY3VsYXRlQW5pbWF0aW9uTGVuZ3RoKHRoaXMsIF8pO1xuXG4gICAgZmlyZUV2ZW50KHRoaXMsICdyZW1vdmVBY3RvcicsIF8sIGFjdG9yKTtcblxuICAgIHJldHVybiBhY3RvcjtcbiAgfTtcblxuICAvKipcbiAgICogUGxheSB0aGUgYW5pbWF0aW9uLlxuICAgKlxuICAgKiBfX1tFeGFtcGxlXSguLi8uLi8uLi8uLi9kb2NzL2V4YW1wbGVzL3BsYXkuaHRtbClfX1xuICAgKiBAbWV0aG9kIHBsYXlcbiAgICogQHBhcmFtIHtudW1iZXI9fSBvcHRfaG93TWFueVRpbWVzIElmIG9taXR0ZWQsIHRoZSBhbmltYXRpb24gd2lsbCBsb29wXG4gICAqIGVuZGxlc3NseS5cbiAgICogQGNoYWluYWJsZVxuICAgKi9cbiAgUmVrYXBpLnByb3RvdHlwZS5wbGF5ID0gZnVuY3Rpb24gKG9wdF9ob3dNYW55VGltZXMpIHtcbiAgICBjYW5jZWxMb29wKHRoaXMpO1xuXG4gICAgaWYgKHRoaXMuX3BsYXlTdGF0ZSA9PT0gcGxheVN0YXRlLlBBVVNFRCkge1xuICAgICAgLy8gTW92ZSB0aGUgcGxheWhlYWQgdG8gdGhlIGNvcnJlY3QgcG9zaXRpb24gaW4gdGhlIHRpbWVsaW5lIGlmIHJlc3VtaW5nXG4gICAgICAvLyBmcm9tIGEgcGF1c2VcbiAgICAgIHRoaXMuX2xvb3BUaW1lc3RhbXAgKz0gbm93KCkgLSB0aGlzLl9wYXVzZWRBdFRpbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2xvb3BUaW1lc3RhbXAgPSBub3coKTtcbiAgICB9XG5cbiAgICB0aGlzLl90aW1lc1RvSXRlcmF0ZSA9IG9wdF9ob3dNYW55VGltZXMgfHwgLTE7XG4gICAgdGhpcy5fcGxheVN0YXRlID0gcGxheVN0YXRlLlBMQVlJTkc7XG5cbiAgICAvLyBTdGFydCB0aGUgdXBkYXRlIGxvb3BcbiAgICB0aWNrKHRoaXMpO1xuXG4gICAgZmlyZUV2ZW50KHRoaXMsICdwbGF5U3RhdGVDaGFuZ2UnLCBfKTtcbiAgICBmaXJlRXZlbnQodGhpcywgJ3BsYXknLCBfKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBNb3ZlIHRvIGEgc3BlY2lmaWMgbWlsbGlzZWNvbmQgb24gdGhlIHRpbWVsaW5lIGFuZCBwbGF5IGZyb20gdGhlcmUuXG4gICAqXG4gICAqIF9fW0V4YW1wbGVdKC4uLy4uLy4uLy4uL2RvY3MvZXhhbXBsZXMvcGxheV9mcm9tLmh0bWwpX19cbiAgICogQG1ldGhvZCBwbGF5RnJvbVxuICAgKiBAcGFyYW0ge251bWJlcn0gbWlsbGlzZWNvbmRcbiAgICogQHBhcmFtIHtudW1iZXI9fSBvcHRfaG93TWFueVRpbWVzIFdvcmtzIGFzIGl0IGRvZXMgaW4ge3sjY3Jvc3NMaW5rXG4gICAqIFwiUmVrYXBpL3BsYXk6bWV0aG9kXCJ9fXt7L2Nyb3NzTGlua319LlxuICAgKiBAY2hhaW5hYmxlXG4gICAqL1xuICBSZWthcGkucHJvdG90eXBlLnBsYXlGcm9tID0gZnVuY3Rpb24gKG1pbGxpc2Vjb25kLCBvcHRfaG93TWFueVRpbWVzKSB7XG4gICAgdGhpcy5wbGF5KG9wdF9ob3dNYW55VGltZXMpO1xuICAgIHRoaXMuX2xvb3BUaW1lc3RhbXAgPSBub3coKSAtIG1pbGxpc2Vjb25kO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFBsYXkgZnJvbSB0aGUgbGFzdCBmcmFtZSB0aGF0IHdhcyByZW5kZXJlZCB3aXRoIHt7I2Nyb3NzTGlua1xuICAgKiBcIlJla2FwaS91cGRhdGU6bWV0aG9kXCJ9fXt7L2Nyb3NzTGlua319LlxuICAgKlxuICAgKiBfX1tFeGFtcGxlXSguLi8uLi8uLi8uLi9kb2NzL2V4YW1wbGVzL3BsYXlfZnJvbV9jdXJyZW50Lmh0bWwpX19cbiAgICogQG1ldGhvZCBwbGF5RnJvbUN1cnJlbnRcbiAgICogQHBhcmFtIHtudW1iZXI9fSBvcHRfaG93TWFueVRpbWVzIFdvcmtzIGFzIGl0IGRvZXMgaW4ge3sjY3Jvc3NMaW5rXG4gICAqIFwiUmVrYXBpL3BsYXk6bWV0aG9kXCJ9fXt7L2Nyb3NzTGlua319LlxuICAgKiBAY2hhaW5hYmxlXG4gICAqL1xuICBSZWthcGkucHJvdG90eXBlLnBsYXlGcm9tQ3VycmVudCA9IGZ1bmN0aW9uIChvcHRfaG93TWFueVRpbWVzKSB7XG4gICAgcmV0dXJuIHRoaXMucGxheUZyb20odGhpcy5fbGFzdFVwZGF0ZWRNaWxsaXNlY29uZCwgb3B0X2hvd01hbnlUaW1lcyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFBhdXNlIHRoZSBhbmltYXRpb24uICBBIFwicGF1c2VkXCIgYW5pbWF0aW9uIGNhbiBiZSByZXN1bWVkIGZyb20gd2hlcmUgaXRcbiAgICogbGVmdCBvZmYgd2l0aCB7eyNjcm9zc0xpbmsgXCJSZWthcGkvcGxheTptZXRob2RcIn19e3svY3Jvc3NMaW5rfX0uXG4gICAqXG4gICAqIF9fW0V4YW1wbGVdKC4uLy4uLy4uLy4uL2RvY3MvZXhhbXBsZXMvcGF1c2UuaHRtbClfX1xuICAgKiBAbWV0aG9kIHBhdXNlXG4gICAqIEBwYXJhbSBwYXVzZVxuICAgKiBAY2hhaW5hYmxlXG4gICAqL1xuICBSZWthcGkucHJvdG90eXBlLnBhdXNlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLl9wbGF5U3RhdGUgPT09IHBsYXlTdGF0ZS5QQVVTRUQpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRoaXMuX3BsYXlTdGF0ZSA9IHBsYXlTdGF0ZS5QQVVTRUQ7XG4gICAgY2FuY2VsTG9vcCh0aGlzKTtcbiAgICB0aGlzLl9wYXVzZWRBdFRpbWUgPSBub3coKTtcblxuICAgIGZpcmVFdmVudCh0aGlzLCAncGxheVN0YXRlQ2hhbmdlJywgXyk7XG4gICAgZmlyZUV2ZW50KHRoaXMsICdwYXVzZScsIF8pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFN0b3AgdGhlIGFuaW1hdGlvbi4gIEEgXCJzdG9wcGVkXCIgYW5pbWF0aW9uIHdpbGwgc3RhcnQgZnJvbSB0aGUgYmVnaW5uaW5nXG4gICAqIGlmIHt7I2Nyb3NzTGluayBcIlJla2FwaS9wbGF5Om1ldGhvZFwifX17ey9jcm9zc0xpbmt9fSBpcyBjYWxsZWQuXG4gICAqXG4gICAqIF9fW0V4YW1wbGVdKC4uLy4uLy4uLy4uL2RvY3MvZXhhbXBsZXMvc3RvcC5odG1sKV9fXG4gICAqIEBtZXRob2Qgc3RvcFxuICAgKiBAY2hhaW5hYmxlXG4gICAqL1xuICBSZWthcGkucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fcGxheVN0YXRlID0gcGxheVN0YXRlLlNUT1BQRUQ7XG4gICAgY2FuY2VsTG9vcCh0aGlzKTtcblxuICAgIC8vIEFsc28ga2lsbCBhbnkgc2hpZnR5IHR3ZWVucyB0aGF0IGFyZSBydW5uaW5nLlxuICAgIF8uZWFjaCh0aGlzLl9hY3RvcnMsIGZ1bmN0aW9uIChhY3Rvcikge1xuICAgICAgYWN0b3Iuc3RvcCgpO1xuICAgIH0pO1xuXG4gICAgZmlyZUV2ZW50KHRoaXMsICdwbGF5U3RhdGVDaGFuZ2UnLCBfKTtcbiAgICBmaXJlRXZlbnQodGhpcywgJ3N0b3AnLCBfKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGlzUGxheWluZ1xuICAgKiBAcmV0dXJuIHtib29sZWFufSBXaGV0aGVyIG9yIG5vdCB0aGUgYW5pbWF0aW9uIGlzIHBsYXlpbmcgKG1lYW5pbmcgbm90IHBhdXNlZCBvclxuICAgKiBzdG9wcGVkKS5cbiAgICovXG4gIFJla2FwaS5wcm90b3R5cGUuaXNQbGF5aW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLl9wbGF5U3RhdGUgPT09IHBsYXlTdGF0ZS5QTEFZSU5HO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZW5kZXIgYW4gYW5pbWF0aW9uIGZyYW1lIGF0IGEgc3BlY2lmaWMgcG9pbnQgaW4gdGhlIHRpbWVsaW5lLlxuICAgKlxuICAgKiBfX1tFeGFtcGxlXSguLi8uLi8uLi8uLi9kb2NzL2V4YW1wbGVzL3VwZGF0ZS5odG1sKV9fXG4gICAqIEBtZXRob2QgdXBkYXRlXG4gICAqIEBwYXJhbSB7bnVtYmVyPX0gb3B0X21pbGxpc2Vjb25kIFRoZSBwb2ludCBpbiB0aGUgdGltZWxpbmUgYXQgd2hpY2ggdG9cbiAgICogcmVuZGVyLiAgSWYgb21pdHRlZCwgdGhpcyByZW5kZXJzIHRoZSBsYXN0IG1pbGxpc2Vjb25kIHRoYXQgd2FzIHJlbmRlcmVkXG4gICAqIChpdCdzIGEgcmUtcmVuZGVyKS5cbiAgICogQGNoYWluYWJsZVxuICAgKi9cbiAgUmVrYXBpLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAob3B0X21pbGxpc2Vjb25kKSB7XG4gICAgaWYgKG9wdF9taWxsaXNlY29uZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBvcHRfbWlsbGlzZWNvbmQgPSB0aGlzLl9sYXN0VXBkYXRlZE1pbGxpc2Vjb25kO1xuICAgIH1cblxuICAgIGZpcmVFdmVudCh0aGlzLCAnYmVmb3JlVXBkYXRlJywgXyk7XG5cbiAgICAvLyBVcGRhdGUgYW5kIHJlbmRlciBlYWNoIG9mIHRoZSBhY3RvcnNcbiAgICBfLmVhY2godGhpcy5fYWN0b3JzLCBmdW5jdGlvbiAoYWN0b3IpIHtcbiAgICAgIGFjdG9yLl91cGRhdGVTdGF0ZShvcHRfbWlsbGlzZWNvbmQpO1xuICAgICAgaWYgKHR5cGVvZiBhY3Rvci5yZW5kZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgYWN0b3IucmVuZGVyKGFjdG9yLmNvbnRleHQsIGFjdG9yLmdldCgpKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuX2xhc3RVcGRhdGVkTWlsbGlzZWNvbmQgPSBvcHRfbWlsbGlzZWNvbmQ7XG4gICAgZmlyZUV2ZW50KHRoaXMsICdhZnRlclVwZGF0ZScsIF8pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIF9fW0V4YW1wbGVdKC4uLy4uLy4uLy4uL2RvY3MvZXhhbXBsZXMvZ2V0X2xhc3RfcG9zaXRpb25fdXBkYXRlZC5odG1sKV9fXG4gICAqIEBtZXRob2QgZ2V0TGFzdFBvc2l0aW9uVXBkYXRlZFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBub3JtYWxpemVkIHRpbWVsaW5lIHBvc2l0aW9uIChiZXR3ZWVuIDAgYW5kIDEpIHRoYXRcbiAgICogd2FzIGxhc3QgcmVuZGVyZWQuXG4gICAqL1xuICBSZWthcGkucHJvdG90eXBlLmdldExhc3RQb3NpdGlvblVwZGF0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9sYXN0VXBkYXRlZE1pbGxpc2Vjb25kIC8gdGhpcy5fYW5pbWF0aW9uTGVuZ3RoKTtcbiAgfTtcblxuICAvKipcbiAgICogQG1ldGhvZCBnZXRBbmltYXRpb25MZW5ndGhcbiAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgbGVuZ3RoIG9mIHRoZSBhbmltYXRpb24gdGltZWxpbmUsIGluIG1pbGxpc2Vjb25kcy5cbiAgICovXG4gIFJla2FwaS5wcm90b3R5cGUuZ2V0QW5pbWF0aW9uTGVuZ3RoID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLl9hbmltYXRpb25MZW5ndGg7XG4gIH07XG5cbiAgLyoqXG4gICAqIEJpbmQgYSBoYW5kbGVyIGZ1bmN0aW9uIHRvIGEgUmVrYXBpIGV2ZW50LlxuICAgKlxuICAgKiBfX1tFeGFtcGxlXSguLi8uLi8uLi8uLi9kb2NzL2V4YW1wbGVzL2JpbmQuaHRtbClfX1xuICAgKiBAbWV0aG9kIG9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWUgVmFsaWQgdmFsdWVzIGFyZTpcbiAgICpcbiAgICogLSBfX2FuaW1hdGlvbkNvbXBsZXRlX186IEZpcmVzIHdoZW4gYWxsIGFuaW1hdGlvbiBsb29wcyBoYXZlIGNvbXBsZXRlZC5cbiAgICogLSBfX3BsYXlTdGF0ZUNoYW5nZV9fOiBGaXJlcyB3aGVuIHRoZSBhbmltYXRpb24gaXMgcGxheWVkLCBwYXVzZWQsIG9yXG4gICAqICAgc3RvcHBlZC5cbiAgICogLSBfX3BsYXlfXzogRmlyZXMgd2hlbiB0aGUgYW5pbWF0aW9uIGlzIHt7I2Nyb3NzTGlua1xuICAgKiAgIFwiUmVrYXBpL3BsYXk6bWV0aG9kXCJ9fXt7L2Nyb3NzTGlua319ZWQuXG4gICAqIC0gX19wYXVzZV9fOiBGaXJlcyB3aGVuIHRoZSBhbmltYXRpb24gaXMge3sjY3Jvc3NMaW5rXG4gICAqICAgXCJSZWthcGkvcGF1c2U6bWV0aG9kXCJ9fXt7L2Nyb3NzTGlua319ZC5cbiAgICogLSBfX3N0b3BfXzogRmlyZXMgd2hlbiB0aGUgYW5pbWF0aW9uIGlzIHt7I2Nyb3NzTGlua1xuICAgKiAgIFwiUmVrYXBpL3N0b3A6bWV0aG9kXCJ9fXt7L2Nyb3NzTGlua319cGVkLlxuICAgKiAtIF9fYmVmb3JlVXBkYXRlX186IEZpcmVzIGVhY2ggZnJhbWUgYmVmb3JlIGFsbCBhY3RvcnMgYXJlIHJlbmRlcmVkLlxuICAgKiAtIF9fYWZ0ZXJVcGRhdGVfXzogRmlyZXMgZWFjaCBmcmFtZSBhZnRlciBhbGwgYWN0b3JzIGFyZSByZW5kZXJlZC5cbiAgICogLSBfX2FkZEFjdG9yX186IEZpcmVzIHdoZW4gYW4gYWN0b3IgaXMgYWRkZWQuICBgb3B0X2RhdGFgIGlzIHRoZVxuICAgKiAgIHt7I2Nyb3NzTGluayBcIlJla2FwaS5BY3RvclwifX17ey9jcm9zc0xpbmt9fSB0aGF0IHdhcyBhZGRlZC5cbiAgICogLSBfX3JlbW92ZUFjdG9yX186IEZpcmVzIHdoZW4gYW4gYWN0b3IgaXMgcmVtb3ZlZC4gIGBvcHRfZGF0YWAgaXMgdGhlXG4gICAqICAge3sjY3Jvc3NMaW5rIFwiUmVrYXBpLkFjdG9yXCJ9fXt7L2Nyb3NzTGlua319IHRoYXQgd2FzIHJlbW92ZWQuXG4gICAqIC0gX19hZGRLZXlmcmFtZVByb3BlcnR5X186IEZpcmVzIHdoZW4gYSBrZXlmcmFtZSBwcm9wZXJ0eSBpcyBhZGRlZC5cbiAgICogICBgb3B0X2RhdGFgIGlzIHRoZSB7eyNjcm9zc0xpbmsgXCJSZWthcGkuS2V5ZnJhbWVQcm9wZXJ0eVwifX17ey9jcm9zc0xpbmt9fVxuICAgKiAgIHRoYXQgd2FzIGFkZGVkLlxuICAgKiAtIF9fcmVtb3ZlS2V5ZnJhbWVQcm9wZXJ0eV9fOiBGaXJlcyB3aGVuIGEge3sjY3Jvc3NMaW5rXG4gICAqICAgXCJSZWthcGkuS2V5ZnJhbWVQcm9wZXJ0eVwifX17ey9jcm9zc0xpbmt9fSBpcyByZW1vdmVkLiAgYG9wdF9kYXRhYCBpcyB0aGVcbiAgICogICB7eyNjcm9zc0xpbmsgXCJSZWthcGkuS2V5ZnJhbWVQcm9wZXJ0eVwifX17ey9jcm9zc0xpbmt9fSB0aGF0IHdhcyByZW1vdmVkLlxuICAgKiAtIF9fYWRkS2V5ZnJhbWVQcm9wZXJ0eVRyYWNrX186IEZpcmVzIHdoZW4gdGhlIGEga2V5ZnJhbWUgaXMgYWRkZWQgdG8gYW5cbiAgICogICBhY3RvciB0aGF0IGNyZWF0ZXMgYSBuZXcga2V5ZnJhbWUgcHJvcGVydHkgdHJhY2suICBgb3B0X2RhdGFgIGlzIHRoZVxuICAgKiAgIHt7I2Nyb3NzTGluayBcIlJla2FwaS5LZXlmcmFtZVByb3BlcnR5XCJ9fXt7L2Nyb3NzTGlua319XG4gICAqICAgdGhhdCB3YXMgYWRkZWQgdG8gY3JlYXRlIHRoZSBwcm9wZXJ0eSB0cmFjay4gIEEgcmVmZXJlbmNlIHRvIHRoZSBhY3RvclxuICAgKiAgIHRoYXQgdGhlIGtleWZyYW1lIHByb3BlcnR5IGlzIGFzc29jaWF0ZWQgd2l0aCBjYW4gYmUgYWNjZXNzZWQgdmlhXG4gICAqICAgYG9wdF9kYXRhLmFjdG9yYCBhbmQgdGhlIHRyYWNrIG5hbWUgdGhhdCB3YXMgYWRkZWQgY2FuIGJlIGRldGVybWluZWQgdmlhXG4gICAqICAgYG9wdF9kYXRhLm5hbWVgLlxuICAgKiAtIF9fdGltZWxpbmVNb2RpZmllZF9fOiBGaXJlcyB3aGVuIGEga2V5ZnJhbWUgaXMgYWRkZWQsIG1vZGlmaWVkIG9yXG4gICAqICAgcmVtb3ZlZC5cbiAgICogLSBfX2FuaW1hdGlvbkxvb3BlZF9fOiBGaXJlcyB3aGVuIGFuIGFuaW1hdGlvbiBsb29wIGVuZHMgYW5kIGEgbmV3IG9uZVxuICAgKiAgIGJlZ2lucy5cbiAgICogQHBhcmFtIHtGdW5jdGlvbihSZWthcGksT2JqZWN0PSl9IGhhbmRsZXIgUmVjZWl2ZXMgdGhlIFJla2FwaSBpbnN0YW5jZSBhc1xuICAgKiB0aGUgZmlyc3QgcGFyYW1ldGVyIGFuZCBldmVudC1zcGVjaWZpYyBkYXRhIGFzIHRoZSBzZWNvbmQgKGBvcHRfZGF0YWApLlxuICAgKiBAY2hhaW5hYmxlXG4gICAqL1xuICBSZWthcGkucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gKGV2ZW50TmFtZSwgaGFuZGxlcikge1xuICAgIGlmICghdGhpcy5fZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9ldmVudHNbZXZlbnROYW1lXS5wdXNoKGhhbmRsZXIpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFVuYmluZCBvbmUgb3IgbW9yZSBoYW5kbGVycyBmcm9tIGEgUmVrYXBpIGV2ZW50LlxuICAgKlxuICAgKiBfX1tFeGFtcGxlXSguLi8uLi8uLi8uLi9kb2NzL2V4YW1wbGVzL3VuYmluZC5odG1sKV9fXG4gICAqIEBtZXRob2Qgb2ZmXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWUgVmFsaWQgdmFsdWVzIGNvcnJlc3BvbmQgdG8gdGhlIGxpc3QgdW5kZXJcbiAgICoge3sjY3Jvc3NMaW5rIFwiUmVrYXBpL29uOm1ldGhvZFwifX17ey9jcm9zc0xpbmt9fS5cbiAgICogQHBhcmFtIHtGdW5jdGlvbj19IG9wdF9oYW5kbGVyIElmIG9taXR0ZWQsIGFsbCBoYW5kbGVyIGZ1bmN0aW9ucyBib3VuZCB0b1xuICAgKiBgZXZlbnROYW1lYCBhcmUgdW5ib3VuZC5cbiAgICogQGNoYWluYWJsZVxuICAgKi9cbiAgUmVrYXBpLnByb3RvdHlwZS5vZmYgPSBmdW5jdGlvbiAoZXZlbnROYW1lLCBvcHRfaGFuZGxlcikge1xuICAgIGlmICghdGhpcy5fZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIW9wdF9oYW5kbGVyKSB7XG4gICAgICAvLyBSZW1vdmUgYWxsIGhhbmRsZXJzXG4gICAgICB0aGlzLl9ldmVudHNbZXZlbnROYW1lXSA9IFtdO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZW1vdmUganVzdCB0aGUgaGFuZGxlciBzcGVjaWZpZWRcbiAgICAgIHRoaXMuX2V2ZW50c1tldmVudE5hbWVdID0gXy53aXRob3V0KFxuICAgICAgICB0aGlzLl9ldmVudHNbZXZlbnROYW1lXSwgb3B0X2hhbmRsZXIpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBFeHBvcnQgdGhlIHRpbWVsaW5lIHRvIGEgSlNPTi1zZXJpYWxpemFibGUgYE9iamVjdGAuXG4gICAqXG4gICAqIF9fW0V4YW1wbGVdKC4uLy4uLy4uL2RvY3MvZXhhbXBsZXMvZXhwb3J0X3RpbWVsaW5lLmh0bWwpX19cbiAgICogQG1ldGhvZCBleHBvcnRUaW1lbGluZVxuICAgKiBAcmV0dXJuIHtPYmplY3R9IFRoaXMgZGF0YSBjYW4gbGF0ZXIgYmUgY29uc3VtZWQgYnkge3sjY3Jvc3NMaW5rXG4gICAqIFwiUmVrYXBpL2ltcG9ydFRpbWVsaW5lOm1ldGhvZFwifX17ey9jcm9zc0xpbmt9fS5cbiAgICovXG4gIFJla2FwaS5wcm90b3R5cGUuZXhwb3J0VGltZWxpbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4cG9ydERhdGEgPSB7XG4gICAgICAnZHVyYXRpb24nOiB0aGlzLl9hbmltYXRpb25MZW5ndGhcbiAgICAgICwnYWN0b3JzJzogW11cbiAgICB9O1xuXG4gICAgXy5lYWNoKHRoaXMuX2FjdG9ycywgZnVuY3Rpb24gKGFjdG9yKSB7XG4gICAgICBleHBvcnREYXRhLmFjdG9ycy5wdXNoKGFjdG9yLmV4cG9ydFRpbWVsaW5lKCkpO1xuICAgIH0sIHRoaXMpO1xuXG4gICAgcmV0dXJuIGV4cG9ydERhdGE7XG4gIH07XG5cbiAgLyoqXG4gICAqIEltcG9ydCBkYXRhIHRoYXQgd2FzIGNyZWF0ZWQgYnkge3sjY3Jvc3NMaW5rXG4gICAqIFwiUmVrYXBpL2V4cG9ydFRpbWVsaW5lOm1ldGhvZFwifX17ey9jcm9zc0xpbmt9fS4gIFRoaXMgc2V0cyB1cCBhbGwgYWN0b3JzXG4gICAqIGFuZCBrZXlmcmFtZXMgc3BlY2lmaWVkIGluIHRoZSBgcmVrYXBpRGF0YWAgcGFyYW1ldGVyLiAgVGhlc2UgdHdvIG1ldGhvZHNcbiAgICogY29sbGVjdGl2ZWx5IGFsbG93IHlvdSBzZXJpYWxpemUgYW4gYW5pbWF0aW9uIChmb3Igc2VuZGluZyB0byBhIHNlcnZlciBmb3JcbiAgICogcGVyc2lzdGVuY2UsIGZvciBleGFtcGxlKSBhbmQgbGF0ZXIgcmVjcmVhdGluZyBhbiBpZGVudGljYWwgYW5pbWF0aW9uLlxuICAgKlxuICAgKiBAbWV0aG9kIGltcG9ydFRpbWVsaW5lXG4gICAqIEBwYXJhbSB7T2JqZWN0fSByZWthcGlEYXRhIEFueSBvYmplY3QgdGhhdCBoYXMgdGhlIHNhbWUgZGF0YSBmb3JtYXQgYXMgdGhlXG4gICAqIG9iamVjdCBnZW5lcmF0ZWQgZnJvbSBSZWthcGkjZXhwb3J0VGltZWxpbmUuXG4gICAqL1xuICBSZWthcGkucHJvdG90eXBlLmltcG9ydFRpbWVsaW5lID0gZnVuY3Rpb24gKHJla2FwaURhdGEpIHtcbiAgICBfLmVhY2gocmVrYXBpRGF0YS5hY3RvcnMsIGZ1bmN0aW9uIChhY3RvckRhdGEpIHtcbiAgICAgIHZhciBhY3RvciA9IG5ldyBSZWthcGkuQWN0b3IoKTtcbiAgICAgIGFjdG9yLmltcG9ydFRpbWVsaW5lKGFjdG9yRGF0YSk7XG4gICAgICB0aGlzLmFkZEFjdG9yKGFjdG9yKTtcbiAgICB9LCB0aGlzKTtcbiAgfTtcblxuICBSZWthcGkudXRpbCA9IHt9O1xuXG4gIC8vIFNvbWUgaG9va3MgZm9yIHRlc3RpbmcuICBHZXRzIGNvbXBpbGVkIGF3YXkgYXQgYnVpbGQgdGltZS5cbiAgaWYgKFJFS0FQSV9ERUJVRykge1xuICAgIFJla2FwaS5fcHJpdmF0ZSA9IHtcbiAgICAgICdjYWxjdWxhdGVMb29wUG9zaXRpb24nOiBjYWxjdWxhdGVMb29wUG9zaXRpb25cbiAgICAgICwndXBkYXRlVG9DdXJyZW50TWlsbGlzZWNvbmQnOiB1cGRhdGVUb0N1cnJlbnRNaWxsaXNlY29uZFxuICAgICAgLCd1cGRhdGVUb01pbGxpc2Vjb25kJzogdXBkYXRlVG9NaWxsaXNlY29uZFxuICAgICAgLCd0aWNrJzogdGlja1xuICAgICAgLCdkZXRlcm1pbmVDdXJyZW50TG9vcEl0ZXJhdGlvbic6IGRldGVybWluZUN1cnJlbnRMb29wSXRlcmF0aW9uXG4gICAgICAsJ2NhbGN1bGF0ZVRpbWVTaW5jZVN0YXJ0JzogY2FsY3VsYXRlVGltZVNpbmNlU3RhcnRcbiAgICAgICwnaXNBbmltYXRpb25Db21wbGV0ZSc6IGlzQW5pbWF0aW9uQ29tcGxldGVcbiAgICAgICwndXBkYXRlUGxheVN0YXRlJzogdXBkYXRlUGxheVN0YXRlXG4gICAgfTtcbiAgfVxuXG4gIHJvb3QuUmVrYXBpID0gUmVrYXBpO1xuXG59O1xuXG5yZWthcGlNb2R1bGVzLnB1c2goZnVuY3Rpb24gKGNvbnRleHQpIHtcblxuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIERFRkFVTFRfRUFTSU5HID0gJ2xpbmVhcic7XG4gIHZhciBSZWthcGkgPSBjb250ZXh0LlJla2FwaTtcbiAgdmFyIFR3ZWVuYWJsZSA9IFJla2FwaS5Ud2VlbmFibGU7XG4gIHZhciBfID0gUmVrYXBpLl87XG5cbiAgLyohXG4gICAqIFNvcnRzIGFuIGFycmF5IG51bWVyaWNhbGx5LCBmcm9tIHNtYWxsZXN0IHRvIGxhcmdlc3QuXG4gICAqIEBwYXJhbSB7QXJyYXkuPG51bWJlcj59IGFycmF5IFRoZSBBcnJheSB0byBzb3J0LlxuICAgKiBAcmV0dXJuIHtBcnJheS48bnVtYmVyPn0gVGhlIHNvcnRlZCBBcnJheS5cbiAgICovXG4gIGZ1bmN0aW9uIHNvcnROdW1lcmljYWxseSAoYXJyYXkpIHtcbiAgICByZXR1cm4gYXJyYXkuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGEgLSBiO1xuICAgIH0pO1xuICB9XG5cbiAgLyohXG4gICAqIEBwYXJhbSB7UmVrYXBpLkFjdG9yfSBhY3RvclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRcbiAgICovXG4gIGZ1bmN0aW9uIGZpcmVSZWthcGlFdmVudEZvckFjdG9yIChhY3RvciwgZXZlbnQpIHtcbiAgICBpZiAoYWN0b3IucmVrYXBpKSB7XG4gICAgICBmaXJlRXZlbnQoYWN0b3IucmVrYXBpLCBldmVudCwgXyk7XG4gICAgfVxuICB9XG5cbiAgLyohXG4gICAqIFJldHJpZXZlcyB0aGUgbW9zdCByZWNlbnQgcHJvcGVydHkgY2FjaGUgSUQgZm9yIGEgZ2l2ZW4gbWlsbGlzZWNvbmQuXG4gICAqIEBwYXJhbSB7UmVrYXBpLkFjdG9yfSBhY3RvclxuICAgKiBAcGFyYW0ge251bWJlcn0gbWlsbGlzZWNvbmRcbiAgICogQHJldHVybiB7bnVtYmVyfSAtMSBpZiB0aGVyZSBpcyBubyBwcm9wZXJ0eSBjYWNoZSBmb3IgdGhlIG1pbGxpc2Vjb25kXG4gICAqICh0aGlzIHNob3VsZCBuZXZlciBoYXBwZW4pLlxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0UHJvcGVydHlDYWNoZUlkRm9yTWlsbGlzZWNvbmQgKGFjdG9yLCBtaWxsaXNlY29uZCkge1xuICAgIHZhciBsaXN0ID0gYWN0b3IuX3RpbWVsaW5lUHJvcGVydHlDYWNoZUtleXM7XG5cbiAgICB2YXIgaSwgbGVuID0gbGlzdC5sZW5ndGg7XG5cbiAgICAvLyBJZiB0aGVyZSBpcyBvbmx5IG9uZSBrZXlmcmFtZSwgdXNlIHRoYXRcbiAgICBpZiAobGVuID09PSAxKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICAvL1RPRE86ICBPaCBub2VzLCB0aGlzIGlzIGEgbGluZWFyIHNlYXJjaCEgIE1heWJlIG9wdGltaXplIGl0P1xuICAgIGZvciAoaSA9IDE7IGkgPCBsZW47IGkrKykge1xuICAgICAgaWYgKGxpc3RbaV0gPj0gbWlsbGlzZWNvbmQpIHtcbiAgICAgICAgcmV0dXJuIChpIC0gMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgLyohXG4gICAqIFNvcnQgYWxsIG9mIGFuIEFjdG9yJ3MgcHJvcGVydHkgdHJhY2tzIHNvIHRoZXkgY2FuIGJlIGNhY2hlZC5cbiAgICogQHBhcmFtIHtSZWthcGkuQWN0b3J9IGFjdG9yXG4gICAqL1xuICBmdW5jdGlvbiBzb3J0UHJvcGVydHlUcmFja3MgKGFjdG9yKSB7XG4gICAgXy5lYWNoKGFjdG9yLl9wcm9wZXJ0eVRyYWNrcywgZnVuY3Rpb24gKHRyYWNrKSB7XG4gICAgICB0cmFjay5zb3J0KGZ1bmN0aW9uIChjdXJyZW50LCBuZXh0KSB7XG4gICAgICAgIHJldHVybiBjdXJyZW50Lm1pbGxpc2Vjb25kIC0gbmV4dC5taWxsaXNlY29uZDtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyohXG4gICAqIENvbXB1dGUgYW5kIGZpbGwgYWxsIHRpbWVsaW5lIGNhY2hlcy5cbiAgICogQHBhcmFtIHtSZWthcGkuQWN0b3J9IGFjdG9yXG4gICAqL1xuICBmdW5jdGlvbiBjYWNoZVByb3BlcnRpZXNUb1NlZ21lbnRzIChhY3Rvcikge1xuICAgIF8uZWFjaChhY3Rvci5fdGltZWxpbmVQcm9wZXJ0eUNhY2hlLCBmdW5jdGlvbiAocHJvcGVydHlDYWNoZSwgY2FjaGVJZCkge1xuICAgICAgdmFyIGxhdGVzdFByb3BlcnRpZXMgPSBnZXRMYXRlc3RQcm9wZXRpZXMoYWN0b3IsIGNhY2hlSWQpO1xuICAgICAgXy5kZWZhdWx0cyhwcm9wZXJ0eUNhY2hlLCBsYXRlc3RQcm9wZXJ0aWVzKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qIVxuICAgKiBHZXRzIGFsbCBvZiB0aGUgY3VycmVudCBhbmQgbW9zdCByZWNlbnQgUmVrYXBpLktleWZyYW1lUHJvcGVydGllcyBmb3IgYVxuICAgKiBnaXZlbiBtaWxsaXNlY29uZC5cbiAgICogQHBhcmFtIHtSZWthcGkuQWN0b3J9IGFjdG9yXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBmb3JNaWxsaXNlY29uZFxuICAgKiBAcmV0dXJuIHtPYmplY3R9IEFuIE9iamVjdCBjb250YWluaW5nIFJla2FwaS5LZXlmcmFtZVByb3BlcnRpZXNcbiAgICovXG4gIGZ1bmN0aW9uIGdldExhdGVzdFByb3BldGllcyAoYWN0b3IsIGZvck1pbGxpc2Vjb25kKSB7XG4gICAgdmFyIGxhdGVzdFByb3BlcnRpZXMgPSB7fTtcblxuICAgIF8uZWFjaChhY3Rvci5fcHJvcGVydHlUcmFja3MsIGZ1bmN0aW9uIChwcm9wZXJ0eVRyYWNrLCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgIHZhciBwcmV2aW91c0tleWZyYW1lUHJvcGVydHkgPSBwcm9wZXJ0eVRyYWNrWzBdIHx8IG51bGw7XG4gICAgICB2YXIgaSA9IDAsIGxlbiA9IHByb3BlcnR5VHJhY2subGVuZ3RoLCBrZXlmcmFtZVByb3BlcnR5O1xuXG4gICAgICBmb3IgKGk7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBrZXlmcmFtZVByb3BlcnR5ID0gcHJvcGVydHlUcmFja1tpXTtcblxuICAgICAgICBpZiAoa2V5ZnJhbWVQcm9wZXJ0eS5taWxsaXNlY29uZCA+IGZvck1pbGxpc2Vjb25kKSB7XG4gICAgICAgICAgLy8gV2Ugd2VudCB0byBmYXIsIHVzZSB0aGUgcHJldmlvdXMga2V5ZnJhbWVQcm9wZXJ0eVxuICAgICAgICAgIGxhdGVzdFByb3BlcnRpZXNbcHJvcGVydHlOYW1lXSA9IHByZXZpb3VzS2V5ZnJhbWVQcm9wZXJ0eTtcbiAgICAgICAgfSBlbHNlIGlmIChrZXlmcmFtZVByb3BlcnR5Lm1pbGxpc2Vjb25kID09PSBmb3JNaWxsaXNlY29uZCkge1xuICAgICAgICAgIC8vIEZvdW5kIGl0IVxuICAgICAgICAgIGxhdGVzdFByb3BlcnRpZXNbcHJvcGVydHlOYW1lXSA9IGtleWZyYW1lUHJvcGVydHk7XG4gICAgICAgIH1cblxuICAgICAgICBwcmV2aW91c0tleWZyYW1lUHJvcGVydHkgPSBrZXlmcmFtZVByb3BlcnR5O1xuXG4gICAgICAgIC8vIFF1aXQgdGhlIGxvb3AgaWYgc29tZXRoaW5nIHdhcyBmb3VuZC4gIFdlIGNhbid0IGVhcmx5LXJldHVybiBhYm92ZSxcbiAgICAgICAgLy8gYmVjYXVzZSBsYXRlc3RQcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV0gbWlnaHQgYmUgbnVsbCwgd2hpY2ggaXMgbm90XG4gICAgICAgIC8vIHdoYXQgd2Ugd2FudC5cbiAgICAgICAgaWYgKGxhdGVzdFByb3BlcnRpZXNbcHJvcGVydHlOYW1lXSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIElmIG5vdGhpbmcgd2FzIGZvdW5kLCBhdHRlbXB0IHRvIHVzZSB0aGUgbGFzdCBrZXlmcmFtZVByb3BlcnR5IGluIHRoZVxuICAgICAgLy8gdHJhY2suXG4gICAgICBpZiAoIWxhdGVzdFByb3BlcnRpZXNbcHJvcGVydHlOYW1lXSkge1xuICAgICAgICB2YXIgbGFzdFByb3AgPSBfLmxhc3QocHJvcGVydHlUcmFjayk7XG5cbiAgICAgICAgaWYgKGxhc3RQcm9wICYmIGxhc3RQcm9wLm1pbGxpc2Vjb25kIDw9IGZvck1pbGxpc2Vjb25kKSB7XG4gICAgICAgICAgbGF0ZXN0UHJvcGVydGllc1twcm9wZXJ0eU5hbWVdID0gbGFzdFByb3A7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBsYXRlc3RQcm9wZXJ0aWVzO1xuICB9XG5cbiAgLyohXG4gICAqIExpbmtzIGVhY2ggS2V5ZnJhbWVQcm9wZXJ0eSB0byB0aGUgbmV4dCBvbmUgaW4gaXRzIHJlc3BlY3RpdmUgdHJhY2suXG4gICAqXG4gICAqIFRoZXkncmUgbGlua2VkIGxpc3RzIVxuICAgKiBAcGFyYW0ge1Jla2FwaS5BY3Rvcn0gYWN0b3JcbiAgICovXG4gIGZ1bmN0aW9uIGxpbmtUcmFja2VkUHJvcGVydGllcyAoYWN0b3IpIHtcbiAgICBfLmVhY2goYWN0b3IuX3Byb3BlcnR5VHJhY2tzLCBmdW5jdGlvbiAocHJvcGVydHlUcmFjaykge1xuICAgICAgXy5lYWNoKHByb3BlcnR5VHJhY2ssIGZ1bmN0aW9uIChrZXlmcmFtZVByb3BlcnR5LCBpKSB7XG4gICAgICAgIGtleWZyYW1lUHJvcGVydHkubGlua1RvTmV4dChwcm9wZXJ0eVRyYWNrW2kgKyAxXSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qIVxuICAgKiBSZXR1cm5zIGEgcmVxdWVzdGVkIEtleWZyYW1lUHJvcGVydHkgYXQgYSBtaWxsaXNlY29uZCBvbiBhIHNwZWNpZmllZFxuICAgKiB0cmFjay5cbiAgICogQHBhcmFtIHtSZWthcGkuQWN0b3J9IGFjdG9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0cmFja05hbWVcbiAgICogQHBhcmFtIHtudW1iZXJ9IG1pbGxpc2Vjb25kXG4gICAqIEByZXR1cm4ge1Jla2FwaS5LZXlmcmFtZVByb3BlcnR5fHVuZGVmaW5lZH1cbiAgICovXG4gIGZ1bmN0aW9uIGZpbmRQcm9wZXJ0eUF0TWlsbGlzZWNvbmRJblRyYWNrIChhY3RvciwgdHJhY2tOYW1lLCBtaWxsaXNlY29uZCkge1xuICAgIHJldHVybiBfLmZpbmRXaGVyZShhY3Rvci5fcHJvcGVydHlUcmFja3NbdHJhY2tOYW1lXSwge1xuICAgICAgbWlsbGlzZWNvbmQ6IG1pbGxpc2Vjb25kXG4gICAgfSk7XG4gIH1cblxuICAvKiFcbiAgICogRW1wdHkgb3V0IGFuZCByZWJ1aWxkIHRoZSBjYWNoZSBvZiBpbnRlcm5hbCBLZXlmcmFtZVByb3BlcnR5IGRhdGEuXG4gICAqIEBwYXJhbSB7UmVrYXBpLkFjdG9yfVxuICAgKi9cbiAgZnVuY3Rpb24gaW52YWxpZGF0ZVByb3BlcnR5Q2FjaGUgKGFjdG9yKSB7XG4gICAgYWN0b3IuX3RpbWVsaW5lUHJvcGVydHlDYWNoZSA9IHt9O1xuICAgIHZhciB0aW1lbGluZVByb3BlcnR5Q2FjaGUgPSBhY3Rvci5fdGltZWxpbmVQcm9wZXJ0eUNhY2hlO1xuXG4gICAgLy8gQnVpbGQgdGhlIGNhY2hlIG1hcFxuICAgIHZhciBtaWxsaXNlY29uZDtcbiAgICBfLmVhY2goYWN0b3IuX2tleWZyYW1lUHJvcGVydGllcywgZnVuY3Rpb24gKGtleWZyYW1lUHJvcGVydHkpIHtcbiAgICAgIG1pbGxpc2Vjb25kID0ga2V5ZnJhbWVQcm9wZXJ0eS5taWxsaXNlY29uZDtcbiAgICAgIGlmICghdGltZWxpbmVQcm9wZXJ0eUNhY2hlW21pbGxpc2Vjb25kXSkge1xuICAgICAgICB0aW1lbGluZVByb3BlcnR5Q2FjaGVbbWlsbGlzZWNvbmRdID0ge307XG4gICAgICB9XG5cbiAgICAgIHRpbWVsaW5lUHJvcGVydHlDYWNoZVttaWxsaXNlY29uZF1ba2V5ZnJhbWVQcm9wZXJ0eS5uYW1lXVxuICAgICAgICAgPSBrZXlmcmFtZVByb3BlcnR5O1xuICAgIH0pO1xuXG4gICAgYWN0b3IuX3RpbWVsaW5lUHJvcGVydHlDYWNoZUtleXMgPSBfLm1hcCh0aW1lbGluZVByb3BlcnR5Q2FjaGUsXG4gICAgZnVuY3Rpb24gKHZhbCwga2V5KSB7XG4gICAgICByZXR1cm4gK2tleTtcbiAgICB9KTtcblxuICAgIC8vIE9wdGltaXplIHRoZSBjYWNoZSBsb29rdXBcbiAgICBzb3J0TnVtZXJpY2FsbHkoYWN0b3IuX3RpbWVsaW5lUHJvcGVydHlDYWNoZUtleXMpO1xuXG4gICAgLy8gQXNzb2NpYXRlIGNhY2hlIG1hcCBlbGVtZW50cyB0byB0aGVpciByZXNwZWN0aXZlIHBvaW50cyBvbiB0aGUgdGltZWxpbmVcbiAgICBjYWNoZVByb3BlcnRpZXNUb1NlZ21lbnRzKGFjdG9yKTtcblxuICAgIC8vIFJlLWxpbmsgdGhlIGxpbmtlZCBsaXN0IG9mIGtleWZyYW1lUHJvcGVydGllc1xuICAgIGxpbmtUcmFja2VkUHJvcGVydGllcyhhY3Rvcik7XG4gIH1cblxuICAvKiFcbiAgICogVXBkYXRlcyBpbnRlcm5hbCBSZWthcGkgYW5kIEFjdG9yIGRhdGEgYWZ0ZXIgYSBLZXlmcmFtZVByb3BlcnR5XG4gICAqIG1vZGlmaWNhdGlvbiBtZXRob2QgaXMgY2FsbGVkLlxuICAgKlxuICAgKiBUT0RPOiBUaGlzIHNob3VsZCBiZSBtb3ZlZCB0byBjb3JlLlxuICAgKlxuICAgKiBAcGFyYW0ge1Jla2FwaS5BY3Rvcn0gYWN0b3JcbiAgICovXG4gIGZ1bmN0aW9uIGNsZWFudXBBZnRlcktleWZyYW1lTW9kaWZpY2F0aW9uIChhY3Rvcikge1xuICAgIHNvcnRQcm9wZXJ0eVRyYWNrcyhhY3Rvcik7XG4gICAgaW52YWxpZGF0ZVByb3BlcnR5Q2FjaGUoYWN0b3IpO1xuICAgIHJlY2FsY3VsYXRlQW5pbWF0aW9uTGVuZ3RoKGFjdG9yLnJla2FwaSwgXyk7XG4gICAgZmlyZVJla2FwaUV2ZW50Rm9yQWN0b3IoYWN0b3IsICd0aW1lbGluZU1vZGlmaWVkJyk7XG4gIH1cblxuICAvKipcbiAgICogQW4gYWN0b3IgcmVwcmVzZW50cyBhbiBpbmRpdmlkdWFsIGNvbXBvbmVudCBvZiBhbiBhbmltYXRpb24uICBBbiBhbmltYXRpb25cbiAgICogbWF5IGhhdmUgb25lIG9yIG1hbnkgYWN0b3JzLlxuICAgKlxuICAgKiBAY2xhc3MgUmVrYXBpLkFjdG9yXG4gICAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0X2NvbmZpZyBWYWxpZCBwcm9wZXJ0aWVzOlxuICAgKiAgIC0gX19jb250ZXh0X18gKF9PYmplY3R8Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfEhUTUxFbGVtZW50Xyk6IFRoZVxuICAgKiAgIHJlbmRlcmluZyBjb250ZXh0IGZvciB0aGlzIGFjdG9yLiBJZiBvbWl0dGVkLCB0aGlzIEFjdG9yIGdldHMgdGhlIHBhcmVudFxuICAgKiAgIGB7eyNjcm9zc0xpbmsgXCJSZWthcGlcIn19e3svY3Jvc3NMaW5rfX1gIGluc3RhbmNlJ3MgYGNvbnRleHRgIHdoZW4gaXQgaXNcbiAgICogICBhZGRlZCB3aXRoIGB7eyNjcm9zc0xpbmsgXCJSZWthcGkvYWRkQWN0b3I6bWV0aG9kXCJ9fXt7L2Nyb3NzTGlua319YC5cbiAgICogICAtIF9fc2V0dXBfXyAoX0Z1bmN0aW9uXyk6IEEgZnVuY3Rpb24gdGhhdCBnZXRzIGNhbGxlZCB3aGVuIHRoZSBhY3RvciBpc1xuICAgKiAgICAgYWRkZWQgdG8gYW4gYW5pbWF0aW9uIHdpdGhcbiAgICogICAgIGB7eyNjcm9zc0xpbmsgXCJSZWthcGkvYWRkQWN0b3I6bWV0aG9kXCJ9fXt7L2Nyb3NzTGlua319YC5cbiAgICogICAtIF9fcmVuZGVyX18gKF9GdW5jdGlvbihPYmplY3QsIE9iamVjdClfKTogQSBmdW5jdGlvbiB0aGF0IGdldHMgY2FsbGVkXG4gICAqICAgZXZlcnkgdGltZSB0aGUgYWN0b3IncyBzdGF0ZSBpcyB1cGRhdGVkIChvbmNlIGV2ZXJ5IGZyYW1lKS4gVGhpc1xuICAgKiAgIGZ1bmN0aW9uIHNob3VsZCBkbyBzb21ldGhpbmcgbWVhbmluZ2Z1bCB3aXRoIHN0YXRlIG9mIHRoZSBhY3RvciAoZm9yXG4gICAqICAgZXhhbXBsZSwgdmlzdWFsbHkgcmVuZGVyaW5nIHRvIHRoZSBzY3JlZW4pLiAgVGhpcyBmdW5jdGlvbiByZWNlaXZlcyB0d29cbiAgICogICBwYXJhbWV0ZXJzOiBUaGUgZmlyc3QgaXMgYSByZWZlcmVuY2UgdG8gdGhlIGFjdG9yJ3MgYGNvbnRleHRgIGFuZCB0aGVcbiAgICogICBzZWNvbmQgaXMgYW4gT2JqZWN0IGNvbnRhaW5pbmcgdGhlIGN1cnJlbnQgc3RhdGUgcHJvcGVydGllcy5cbiAgICogICAtIF9fdGVhcmRvd25fXyAoX0Z1bmN0aW9uXyk6IEEgZnVuY3Rpb24gdGhhdCBnZXRzIGNhbGxlZCB3aGVuIHRoZSBhY3RvclxuICAgKiAgIGlzIHJlbW92ZWQgZnJvbSBhbiBhbmltYXRpb24gd2l0aFxuICAgKiAgIGB7eyNjcm9zc0xpbmsgXCJSZWthcGkvcmVtb3ZlQWN0b3I6bWV0aG9kXCJ9fXt7L2Nyb3NzTGlua319YC5cbiAgICogQGNvbnN0cnVjdG9yXG4gICAqL1xuICBSZWthcGkuQWN0b3IgPSBmdW5jdGlvbiAob3B0X2NvbmZpZykge1xuXG4gICAgb3B0X2NvbmZpZyA9IG9wdF9jb25maWcgfHwge307XG5cbiAgICAvLyBTdGVhbCB0aGUgYFR3ZWVuYWJsZWAgY29uc3RydWN0b3IuXG4gICAgVHdlZW5hYmxlLmNhbGwodGhpcyk7XG5cbiAgICBfLmV4dGVuZCh0aGlzLCB7XG4gICAgICAnX3Byb3BlcnR5VHJhY2tzJzoge31cbiAgICAgICwnX3RpbWVsaW5lUHJvcGVydHlDYWNoZSc6IHt9XG4gICAgICAsJ190aW1lbGluZVByb3BlcnR5Q2FjaGVLZXlzJzogW11cbiAgICAgICwnX2tleWZyYW1lUHJvcGVydGllcyc6IHt9XG4gICAgICAsJ2lkJzogXy51bmlxdWVJZCgpXG4gICAgICAsJ2NvbnRleHQnOiBvcHRfY29uZmlnLmNvbnRleHQgLy8gVGhpcyBtYXkgYmUgdW5kZWZpbmVkXG4gICAgICAsJ3NldHVwJzogb3B0X2NvbmZpZy5zZXR1cCB8fCBub29wXG4gICAgICAsJ3JlbmRlcic6IG9wdF9jb25maWcucmVuZGVyIHx8IG5vb3BcbiAgICAgICwndGVhcmRvd24nOiBvcHRfY29uZmlnLnRlYXJkb3duIHx8IG5vb3BcbiAgICAgICwnZGF0YSc6IHt9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgdmFyIEFjdG9yID0gUmVrYXBpLkFjdG9yO1xuXG4gIC8vIEtpbmQgb2YgYSBmdW4gd2F5IHRvIHNldCB1cCBhbiBpbmhlcml0YW5jZSBjaGFpbi4gIGBBY3Rvck1ldGhvZHNgIHByZXZlbnRzXG4gIC8vIG1ldGhvZHMgb24gYEFjdG9yLnByb3RvdHlwZWAgZnJvbSBwb2xsdXRpbmcgYFR3ZWVuYWJsZWAncyBwcm90b3R5cGUgd2l0aFxuICAvLyBgQWN0b3JgIHNwZWNpZmljIG1ldGhvZHMuXG4gIHZhciBBY3Rvck1ldGhvZHMgPSBmdW5jdGlvbiAoKSB7fTtcbiAgQWN0b3JNZXRob2RzLnByb3RvdHlwZSA9IFR3ZWVuYWJsZS5wcm90b3R5cGU7XG4gIEFjdG9yLnByb3RvdHlwZSA9IG5ldyBBY3Rvck1ldGhvZHMoKTtcbiAgLy8gQnV0IHRoZSBtYWdpYyBkb2Vzbid0IHN0b3AgaGVyZSEgIGBBY3RvcmAncyBjb25zdHJ1Y3RvciBzdGVhbHMgdGhlXG4gIC8vIGBUd2VlbmFibGVgIGNvbnN0cnVjdG9yLlxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBrZXlmcmFtZSBmb3IgdGhlIGFjdG9yLiAgVGhlIGFuaW1hdGlvbiB0aW1lbGluZSBiZWdpbnMgYXQgYDBgLlxuICAgKiBUaGUgdGltZWxpbmUncyBsZW5ndGggd2lsbCBhdXRvbWF0aWNhbGx5IFwiZ3Jvd1wiIHRvIGFjY29tbW9kYXRlIG5ld1xuICAgKiBrZXlmcmFtZXMgYXMgdGhleSBhcmUgYWRkZWQuXG4gICAqXG4gICAqIGBzdGF0ZWAgc2hvdWxkIGNvbnRhaW4gYWxsIG9mIHRoZSBwcm9wZXJ0aWVzIHRoYXQgZGVmaW5lIHRoaXNcbiAgICoga2V5ZnJhbWUncyBzdGF0ZS4gIFRoZXNlIHByb3BlcnRpZXMgY2FuIGJlIGFueSB2YWx1ZSB0aGF0IGNhbiBiZSB0d2VlbmVkXG4gICAqIGJ5IFtTaGlmdHldKGh0dHA6Ly9qZXJlbXlja2Fobi5naXRodWIuaW8vc2hpZnR5LykgKG51bWJlcnMsXG4gICAqIFJHQi9oZXhhZGVjaW1hbCBjb2xvciBzdHJpbmdzLCBhbmQgQ1NTIHByb3BlcnR5IHN0cmluZ3MpLiAgYHN0YXRlYCBjYW5cbiAgICogYWxzbyBiZSBhIGZ1bmN0aW9uLCBidXQgdGhpcyB3b3JrcyBkaWZmZXJlbnRseSAoc2VlIFwiRnVuY3Rpb24ga2V5ZnJhbWVzXCJcbiAgICogYmVsb3cpLlxuICAgKlxuICAgKiBfX05vdGU6X18gSW50ZXJuYWxseSwgdGhpcyBjcmVhdGVzIGB7eyNjcm9zc0xpbmtcbiAgICogXCJSZWthcGkuS2V5ZnJhbWVQcm9wZXJ0eVwifX17ey9jcm9zc0xpbmt9fWBzIGFuZCBwbGFjZXMgdGhlbSBvbiBhIFwidHJhY2suXCJcbiAgICogVGhlc2UgYHt7I2Nyb3NzTGluayBcIlJla2FwaS5LZXlmcmFtZVByb3BlcnR5XCJ9fXt7L2Nyb3NzTGlua319YHMgYXJlXG4gICAqIG1hbmFnZWQgZm9yIHlvdSBieSB0aGUgYHt7I2Nyb3NzTGluayBcIlJla2FwaS5BY3RvclwifX17ey9jcm9zc0xpbmt9fWAgQVBJcy5cbiAgICpcbiAgICogIyMgS2V5ZnJhbWUgaW5oZXJpdGFuY2VcbiAgICpcbiAgICogS2V5ZnJhbWVzIGFsd2F5cyBpbmhlcml0IG1pc3NpbmcgcHJvcGVydGllcyBmcm9tIHRoZSBwcmV2aW91cyBrZXlmcmFtZS5cbiAgICogRm9yIGV4YW1wbGU6XG4gICAqXG4gICAqICAgICBhY3Rvci5rZXlmcmFtZSgwLCB7XG4gICAqICAgICAgICd4JzogMTAwXG4gICAqICAgICB9KS5rZXlmcmFtZSgxMDAwLCB7XG4gICAqICAgICAgIC8vIEltcGxpY2l0bHkgc3BlY2lmaWVzIHRoZSBgeDogMTAwYCBmcm9tIGFib3ZlXG4gICAqICAgICAgICd5JzogNTBcbiAgICogICAgIH0pO1xuICAgKlxuICAgKiBLZXlmcmFtZSBgMTAwMGAgd2lsbCBoYXZlIGEgYHlgIG9mIGA1MGAsIGFuZCBhbiBgeGAgb2YgYDEwMGAsIGJlY2F1c2UgYHhgXG4gICAqIHdhcyBpbmhlcml0ZWQgZnJvbSBrZXlmcmFtZSBgMGAuXG4gICAqXG4gICAqICMjIEZ1bmN0aW9uIGtleWZyYW1lc1xuICAgKlxuICAgKiBJbnN0ZWFkIG9mIHByb3ZpZGluZyBhbiBPYmplY3QgdG8gYmUgdXNlZCB0byBpbnRlcnBvbGF0ZSBzdGF0ZSB2YWx1ZXMsIHlvdVxuICAgKiBjYW4gcHJvdmlkZSBhIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBhdCBhIHNwZWNpZmljIHBvaW50IG9uIHRoZSB0aW1lbGluZS5cbiAgICogVGhpcyBmdW5jdGlvbiBkb2VzIG5vdCBuZWVkIHRvIHJldHVybiBhIHZhbHVlLCBhcyBpdCBkb2VzIG5vdCBnZXQgdXNlZCB0b1xuICAgKiByZW5kZXIgdGhlIGFjdG9yIHN0YXRlLiAgRnVuY3Rpb24ga2V5ZnJhbWVzIGFyZSBjYWxsZWQgb25jZSBwZXIgYW5pbWF0aW9uXG4gICAqIGxvb3AgYW5kIGRvIG5vdCBoYXZlIGFueSB0d2VlbmluZyByZWxhdGlvbnNoaXAgd2l0aCBvbmUgYW5vdGhlci4gIFRoaXMgaXNcbiAgICogYSBwcmltYXJpbHkgYSBtZWNoYW5pc20gZm9yIHNjaGVkdWxpbmcgYXJiaXRyYXJ5IGNvZGUgdG8gYmUgZXhlY3V0ZWQgYXRcbiAgICogc3BlY2lmaWMgcG9pbnRzIGluIGFuIGFuaW1hdGlvbi5cbiAgICpcbiAgICogICAgIC8vIGRyaWZ0IGlzIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRoYXQgdGhpcyBmdW5jdGlvbiB3YXMgZXhlY3V0ZWRcbiAgICogICAgIC8vIGFmdGVyIHRoZSBzY2hlZHVsZWQgdGltZS4gIFRoZXJlIGlzIHR5cGljYWxseSBzb21lIGFtb3VudCBvZiBkZWxheVxuICAgKiAgICAgLy8gZHVlIHRvIHRoZSBuYXR1cmUgb2YgSmF2YVNjcmlwdCB0aW1lcnMuXG4gICAqICAgICBhY3Rvci5rZXlmcmFtZSgxMDAwLCBmdW5jdGlvbiAoZHJpZnQpIHtcbiAgICogICAgICAgY29uc29sZS5sb2codGhpcyk7IC8vIExvZ3MgdGhlIGFjdG9yIGluc3RhbmNlXG4gICAqICAgICB9KTtcbiAgICpcbiAgICogIyMgRWFzaW5nXG4gICAqXG4gICAqIGBvcHRfZWFzaW5nYCwgaWYgcHJvdmlkZWQsIGNhbiBiZSBhIHN0cmluZyBvciBhbiBPYmplY3QuICBJZiBgb3B0X2Vhc2luZ2BcbiAgICogaXMgYSBzdHJpbmcsIGFsbCBhbmltYXRlZCBwcm9wZXJ0aWVzIHdpbGwgaGF2ZSB0aGUgc2FtZSBlYXNpbmcgY3VydmVcbiAgICogYXBwbGllZCB0byB0aGVtLiAgRm9yIGV4YW1wbGU6XG4gICAqXG4gICAqICAgICBhY3Rvci5rZXlmcmFtZSgxMDAwLCB7XG4gICAqICAgICAgICAgJ3gnOiAxMDAsXG4gICAqICAgICAgICAgJ3knOiAxMDBcbiAgICogICAgICAgfSwgJ2Vhc2VPdXRTaW5lJyk7XG4gICAqXG4gICAqIEJvdGggYHhgIGFuZCBgeWAgd2lsbCBoYXZlIGBlYXNlT3V0U2luZWAgYXBwbGllZCB0byB0aGVtLiAgWW91IGNhbiBhbHNvXG4gICAqIHNwZWNpZnkgbXVsdGlwbGUgZWFzaW5nIGN1cnZlcyB3aXRoIGFuIE9iamVjdDpcbiAgICpcbiAgICogICAgIGFjdG9yLmtleWZyYW1lKDEwMDAsIHtcbiAgICogICAgICAgICAneCc6IDEwMCxcbiAgICogICAgICAgICAneSc6IDEwMFxuICAgKiAgICAgICB9LCB7XG4gICAqICAgICAgICAgJ3gnOiAnZWFzZWluU2luZScsXG4gICAqICAgICAgICAgJ3knOiAnZWFzZU91dFNpbmUnXG4gICAqICAgICAgIH0pO1xuICAgKlxuICAgKiBgeGAgd2lsbCBlYXNlIHdpdGggYGVhc2VJblNpbmVgLCBhbmQgYHlgIHdpbGwgZWFzZSB3aXRoIGBlYXNlT3V0U2luZWAuXG4gICAqIEFueSB1bnNwZWNpZmllZCBwcm9wZXJ0aWVzIHdpbGwgZWFzZSB3aXRoIGBsaW5lYXJgLiAgSWYgYG9wdF9lYXNpbmdgIGlzXG4gICAqIG9taXR0ZWQsIGFsbCBwcm9wZXJ0aWVzIHdpbGwgZGVmYXVsdCB0byBgbGluZWFyYC5cbiAgICogQG1ldGhvZCBrZXlmcmFtZVxuICAgKiBAcGFyYW0ge251bWJlcn0gbWlsbGlzZWNvbmQgV2hlcmUgb24gdGhlIHRpbWVsaW5lIHRvIHNldCB0aGUga2V5ZnJhbWUuXG4gICAqIEBwYXJhbSB7T2JqZWN0fEZ1bmN0aW9uKG51bWJlcil9IHN0YXRlIFRoZSBzdGF0ZSBwcm9wZXJ0aWVzIG9mIHRoZVxuICAgKiBrZXlmcmFtZS4gIElmIHRoaXMgaXMgYW4gT2JqZWN0LCB0aGUgcHJvcGVydGllcyB3aWxsIGJlIGludGVycG9sYXRlZFxuICAgKiBiZXR3ZWVuIHRoaXMgYW5kIHRob3NlIG9mIHRoZSBmb2xsb3dpbmcga2V5ZnJhbWUgZm9yIGEgZ2l2ZW4gcG9pbnQgb24gdGhlXG4gICAqIGFuaW1hdGlvbiB0aW1lbGluZS4gIElmIHRoaXMgaXMgYSBmdW5jdGlvbiwgaXQgd2lsbCBiZSBleGVjdXRlZCBhdCB0aGVcbiAgICogc3BlY2lmaWVkIGtleWZyYW1lLiAgVGhlIGZ1bmN0aW9uIHdpbGwgcmVjZWl2ZSBhIG51bWJlciB0aGF0IHJlcHJlc2VudHNcbiAgICogdGhlIGRlbGF5IGJldHdlZW4gd2hlbiB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkIGFuZCB3aGVuIGl0IHdhcyBzY2hlZHVsZWQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdD19IG9wdF9lYXNpbmcgT3B0aW9uYWwgZWFzaW5nIHN0cmluZyBvciBPYmplY3QuICBJZlxuICAgKiBgc3RhdGVgIGlzIGEgZnVuY3Rpb24sIHRoaXMgaXMgaWdub3JlZC5cbiAgICogQGNoYWluYWJsZVxuICAgKi9cbiAgQWN0b3IucHJvdG90eXBlLmtleWZyYW1lID0gZnVuY3Rpb24ga2V5ZnJhbWUgKFxuICAgIG1pbGxpc2Vjb25kLCBzdGF0ZSwgb3B0X2Vhc2luZykge1xuXG4gICAgaWYgKHN0YXRlIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgIHN0YXRlID0geyAnZnVuY3Rpb24nOiBzdGF0ZSB9O1xuICAgIH1cblxuICAgIG9wdF9lYXNpbmcgPSBvcHRfZWFzaW5nIHx8IERFRkFVTFRfRUFTSU5HO1xuICAgIHZhciBlYXNpbmcgPSBUd2VlbmFibGUuY29tcG9zZUVhc2luZ09iamVjdChzdGF0ZSwgb3B0X2Vhc2luZyk7XG4gICAgdmFyIG5ld0tleWZyYW1lUHJvcGVydHk7XG5cbiAgICAvLyBDcmVhdGUgYW5kIGFkZCBhbGwgb2YgdGhlIEtleWZyYW1lUHJvcGVydGllc1xuICAgIF8uZWFjaChzdGF0ZSwgZnVuY3Rpb24gKHZhbHVlLCBuYW1lKSB7XG4gICAgICBuZXdLZXlmcmFtZVByb3BlcnR5ID0gbmV3IFJla2FwaS5LZXlmcmFtZVByb3BlcnR5KFxuICAgICAgICBtaWxsaXNlY29uZCwgbmFtZSwgdmFsdWUsIGVhc2luZ1tuYW1lXSk7XG5cbiAgICAgIHRoaXMuX2FkZEtleWZyYW1lUHJvcGVydHkobmV3S2V5ZnJhbWVQcm9wZXJ0eSk7XG4gICAgfSwgdGhpcyk7XG5cbiAgICBpZiAodGhpcy5yZWthcGkpIHtcbiAgICAgIHJlY2FsY3VsYXRlQW5pbWF0aW9uTGVuZ3RoKHRoaXMucmVrYXBpLCBfKTtcbiAgICB9XG5cbiAgICBpbnZhbGlkYXRlUHJvcGVydHlDYWNoZSh0aGlzKTtcbiAgICBmaXJlUmVrYXBpRXZlbnRGb3JBY3Rvcih0aGlzLCAndGltZWxpbmVNb2RpZmllZCcpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgaGFzS2V5ZnJhbWVBdFxuICAgKiBAcGFyYW0ge251bWJlcn0gbWlsbGlzZWNvbmQgUG9pbnQgb24gdGhlIHRpbWVsaW5lIHRvIHF1ZXJ5LlxuICAgKiBAcGFyYW0ge3N0cmluZz19IG9wdF90cmFja05hbWUgT3B0aW9uYWxseSBzY29wZSB0aGUgbG9va3VwIHRvIGEgcGFydGljdWxhclxuICAgKiB0cmFjay5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gV2hldGhlciBvciBub3QgdGhlIGFjdG9yIGhhcyBhbnkgYHt7I2Nyb3NzTGlua1xuICAgKiBcIlJla2FwaS5LZXlmcmFtZVByb3BlcnR5XCJ9fXt7L2Nyb3NzTGlua319YHMgc2V0IGF0IGBtaWxsaXNlY29uZGAuXG4gICAqL1xuICBBY3Rvci5wcm90b3R5cGUuaGFzS2V5ZnJhbWVBdCA9IGZ1bmN0aW9uIChtaWxsaXNlY29uZCwgb3B0X3RyYWNrTmFtZSkge1xuICAgIHZhciB0cmFja3MgPSB0aGlzLl9wcm9wZXJ0eVRyYWNrcztcblxuICAgIGlmIChvcHRfdHJhY2tOYW1lKSB7XG4gICAgICBpZiAoIV8uaGFzKHRyYWNrcywgb3B0X3RyYWNrTmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgdHJhY2tzID0gXy5waWNrKHRyYWNrcywgb3B0X3RyYWNrTmFtZSk7XG4gICAgfVxuXG4gICAgLy8gU2VhcmNoIHRocm91Z2ggdGhlIHRyYWNrcyBhbmQgZGV0ZXJtaW5lIGlmIGEgcHJvcGVydHkgY2FuIGJlIGZvdW5kLlxuICAgIHZhciB0cmFjaztcbiAgICBmb3IgKHRyYWNrIGluIHRyYWNrcykge1xuICAgICAgaWYgKHRyYWNrcy5oYXNPd25Qcm9wZXJ0eSh0cmFjaylcbiAgICAgICAgICYmIGZpbmRQcm9wZXJ0eUF0TWlsbGlzZWNvbmRJblRyYWNrKHRoaXMsIHRyYWNrLCBtaWxsaXNlY29uZCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDb3BpZXMgYWxsIG9mIHRoZSBge3sjY3Jvc3NMaW5rXG4gICAqIFwiUmVrYXBpLktleWZyYW1lUHJvcGVydHlcIn19e3svY3Jvc3NMaW5rfX1gcyBmcm9tIG9uZSBwb2ludCBvbiB0aGUgYWN0b3Inc1xuICAgKiB0aW1lbGluZSB0byBhbm90aGVyLiBUaGlzIGlzIHBhcnRpY3VsYXJseSB1c2VmdWwgZm9yIGFuaW1hdGluZyBhbiBhY3RvclxuICAgKiBiYWNrIHRvIGl0cyBvcmlnaW5hbCBwb3NpdGlvbi5cbiAgICpcbiAgICogICAgIGFjdG9yXG4gICAqICAgICAgIC5rZXlmcmFtZSgwLCB7XG4gICAqICAgICAgICAgeDogMTAsXG4gICAqICAgICAgICAgeTogMTVcbiAgICogICAgICAgfSkua2V5ZnJhbWUoMTAwMCwge1xuICAgKiAgICAgICAgIHg6IDUwLFxuICAgKiAgICAgICAgIHk6IDc1XG4gICAqICAgICAgIH0pO1xuICAgKlxuICAgKiAgICAgLy8gUmV0dXJuIHRoZSBhY3RvciB0byBpdHMgb3JpZ2luYWwgcG9zaXRpb25cbiAgICogICAgIGFjdG9yLmNvcHlLZXlmcmFtZSgyMDAwLCAwKTtcbiAgICpcbiAgICogX19bRXhhbXBsZV0oLi4vLi4vLi4vLi4vZG9jcy9leGFtcGxlcy9hY3Rvcl9jb3B5X2tleWZyYW1lLmh0bWwpX19cbiAgICogQG1ldGhvZCBjb3B5S2V5ZnJhbWVcbiAgICogQHBhcmFtIHtudW1iZXJ9IGNvcHlUbyBUaGUgdGltZWxpbmUgbWlsbGlzZWNvbmQgdG8gY29weSBLZXlmcmFtZVByb3BlcnRpZXNcbiAgICogdG8uXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjb3B5RnJvbSBUaGUgdGltZWxpbmUgbWlsbGlzZWNvbmQgdG8gY29weVxuICAgKiBLZXlmcmFtZVByb3BlcnRpZXMgZnJvbS5cbiAgICogQGNoYWluYWJsZVxuICAgKi9cbiAgQWN0b3IucHJvdG90eXBlLmNvcHlLZXlmcmFtZSA9IGZ1bmN0aW9uIChjb3B5VG8sIGNvcHlGcm9tKSB7XG4gICAgLy8gQnVpbGQgdGhlIGNvbmZpZ3VhdGlvbiBvYmplY3RzIHRvIGJlIHBhc3NlZCB0byBBY3RvciNrZXlmcmFtZVxuICAgIHZhciBzb3VyY2VQb3NpdGlvbnMgPSB7fTtcbiAgICB2YXIgc291cmNlRWFzaW5ncyA9IHt9O1xuXG4gICAgXy5lYWNoKHRoaXMuX3Byb3BlcnR5VHJhY2tzLCBmdW5jdGlvbiAocHJvcGVydHlUcmFjaywgdHJhY2tOYW1lKSB7XG4gICAgICB2YXIga2V5ZnJhbWVQcm9wZXJ0eSA9XG4gICAgICBmaW5kUHJvcGVydHlBdE1pbGxpc2Vjb25kSW5UcmFjayh0aGlzLCB0cmFja05hbWUsIGNvcHlGcm9tKTtcblxuICAgICAgaWYgKGtleWZyYW1lUHJvcGVydHkpIHtcbiAgICAgICAgc291cmNlUG9zaXRpb25zW3RyYWNrTmFtZV0gPSBrZXlmcmFtZVByb3BlcnR5LnZhbHVlO1xuICAgICAgICBzb3VyY2VFYXNpbmdzW3RyYWNrTmFtZV0gPSBrZXlmcmFtZVByb3BlcnR5LmVhc2luZztcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcblxuICAgIHRoaXMua2V5ZnJhbWUoY29weVRvLCBzb3VyY2VQb3NpdGlvbnMsIHNvdXJjZUVhc2luZ3MpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBNb3ZlcyBhbGwgb2YgdGhlXG4gICAqIGB7eyNjcm9zc0xpbmsgXCJSZWthcGkuS2V5ZnJhbWVQcm9wZXJ0eVwifX17ey9jcm9zc0xpbmt9fWBzIGZyb20gb25lXG4gICAqIHBvaW50IG9uIHRoZSBhY3RvcidzIHRpbWVsaW5lIHRvIGFub3RoZXIuICBBbHRob3VnaCB0aGlzIG1ldGhvZCBkb2VzIGVycm9yXG4gICAqIGNoZWNraW5nIGZvciB5b3UgdG8gbWFrZSBzdXJlIHRoZSBvcGVyYXRpb24gY2FuIGJlIHNhZmVseSBwZXJmb3JtZWQsIGFuXG4gICAqIGVmZmVjdGl2ZSBwYXR0ZXJuIGlzIHRvIHVzZSBge3sjY3Jvc3NMaW5rXG4gICAqIFwiUmVrYXBpLkFjdG9yL2hhc0tleWZyYW1lQXQ6bWV0aG9kXCJ9fXt7L2Nyb3NzTGlua319YCB0byBzZWUgaWYgdGhlcmUgaXNcbiAgICogYWxyZWFkeSBhIGtleWZyYW1lIGF0IHRoZSByZXF1ZXN0ZWQgYHRvYCBkZXN0aW5hdGlvbi5cbiAgICpcbiAgICogX19bRXhhbXBsZV0oLi4vLi4vLi4vLi4vZG9jcy9leGFtcGxlcy9hY3Rvcl9tb3ZlX2tleWZyYW1lLmh0bWwpX19cbiAgICogQG1ldGhvZCBtb3ZlS2V5ZnJhbWVcbiAgICogQHBhcmFtIHtudW1iZXJ9IGZyb20gVGhlIG1pbGxpc2Vjb25kIG9mIHRoZSBrZXlmcmFtZSB0byBiZSBtb3ZlZC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHRvIFRoZSBtaWxsaXNlY29uZCBvZiB3aGVyZSB0aGUga2V5ZnJhbWUgc2hvdWxkIGJlIG1vdmVkXG4gICAqIHRvLlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBXaGV0aGVyIG9yIG5vdCB0aGUga2V5ZnJhbWUgd2FzIHN1Y2Nlc3NmdWxseSBtb3ZlZC5cbiAgICovXG4gIEFjdG9yLnByb3RvdHlwZS5tb3ZlS2V5ZnJhbWUgPSBmdW5jdGlvbiAoZnJvbSwgdG8pIHtcbiAgICBpZiAoIXRoaXMuaGFzS2V5ZnJhbWVBdChmcm9tKSB8fCB0aGlzLmhhc0tleWZyYW1lQXQodG8pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gTW92ZSBlYWNoIG9mIHRoZSByZWxldmFudCBLZXlmcmFtZVByb3BlcnRpZXMgdG8gdGhlIG5ldyBsb2NhdGlvbiBpbiB0aGVcbiAgICAvLyB0aW1lbGluZVxuICAgIF8uZWFjaCh0aGlzLl9wcm9wZXJ0eVRyYWNrcywgZnVuY3Rpb24gKHByb3BlcnR5VHJhY2ssIHRyYWNrTmFtZSkge1xuICAgICAgdmFyIHByb3BlcnR5ID0gZmluZFByb3BlcnR5QXRNaWxsaXNlY29uZEluVHJhY2sodGhpcywgdHJhY2tOYW1lLCBmcm9tKTtcblxuICAgICAgaWYgKHByb3BlcnR5KSB7XG4gICAgICAgIHByb3BlcnR5Lm1pbGxpc2Vjb25kID0gdG87XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG5cbiAgICBjbGVhbnVwQWZ0ZXJLZXlmcmFtZU1vZGlmaWNhdGlvbih0aGlzKTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBdWdtZW50IHRoZSBgdmFsdWVgIG9yIGBlYXNpbmdgIG9mIHRoZSBge3sjY3Jvc3NMaW5rXG4gICAqIFwiUmVrYXBpLktleWZyYW1lUHJvcGVydHlcIn19e3svY3Jvc3NMaW5rfX1gcyBhdCBhIGdpdmVuIG1pbGxpc2Vjb25kLiAgQW55XG4gICAqIGB7eyNjcm9zc0xpbmsgXCJSZWthcGkuS2V5ZnJhbWVQcm9wZXJ0eVwifX17ey9jcm9zc0xpbmt9fWBzIG9taXR0ZWQgaW5cbiAgICogYHN0YXRlTW9kaWZpY2F0aW9uYCBvciBgb3B0X2Vhc2luZ2AgYXJlIG5vdCBtb2RpZmllZC5cbiAgICpcbiAgICogICAgIGFjdG9yLmtleWZyYW1lKDAsIHtcbiAgICogICAgICAgJ3gnOiAxMCxcbiAgICogICAgICAgJ3knOiAyMFxuICAgKiAgICAgfSkua2V5ZnJhbWUoMTAwMCwge1xuICAgKiAgICAgICAneCc6IDIwLFxuICAgKiAgICAgICAneSc6IDQwXG4gICAqICAgICB9KS5rZXlmcmFtZSgyMDAwLCB7XG4gICAqICAgICAgICd4JzogMzAsXG4gICAqICAgICAgICd5JzogNjBcbiAgICogICAgIH0pXG4gICAqXG4gICAqICAgICAvLyBDaGFuZ2VzIHRoZSBzdGF0ZSBvZiB0aGUga2V5ZnJhbWUgYXQgbWlsbGlzZWNvbmQgMTAwMC5cbiAgICogICAgIC8vIE1vZGlmaWVzIHRoZSB2YWx1ZSBvZiAneScgYW5kIHRoZSBlYXNpbmcgb2YgJ3guJ1xuICAgKiAgICAgYWN0b3IubW9kaWZ5S2V5ZnJhbWUoMTAwMCwge1xuICAgKiAgICAgICAneSc6IDE1MFxuICAgKiAgICAgfSwge1xuICAgKiAgICAgICAneCc6ICdlYXNlRnJvbSdcbiAgICogICAgIH0pO1xuICAgKlxuICAgKiBfX1tFeGFtcGxlXSguLi8uLi8uLi8uLi9kb2NzL2V4YW1wbGVzL2FjdG9yX21vZGlmeV9rZXlmcmFtZS5odG1sKV9fXG4gICAqIEBtZXRob2QgbW9kaWZ5S2V5ZnJhbWVcbiAgICogQHBhcmFtIHtudW1iZXJ9IG1pbGxpc2Vjb25kXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZU1vZGlmaWNhdGlvblxuICAgKiBAcGFyYW0ge09iamVjdD19IG9wdF9lYXNpbmdNb2RpZmljYXRpb25cbiAgICogQGNoYWluYWJsZVxuICAgKi9cbiAgQWN0b3IucHJvdG90eXBlLm1vZGlmeUtleWZyYW1lID0gZnVuY3Rpb24gKFxuICAgIG1pbGxpc2Vjb25kLCBzdGF0ZU1vZGlmaWNhdGlvbiwgb3B0X2Vhc2luZ01vZGlmaWNhdGlvbikge1xuICAgIG9wdF9lYXNpbmdNb2RpZmljYXRpb24gPSBvcHRfZWFzaW5nTW9kaWZpY2F0aW9uIHx8IHt9O1xuXG4gICAgXy5lYWNoKHRoaXMuX3Byb3BlcnR5VHJhY2tzLCBmdW5jdGlvbiAocHJvcGVydHlUcmFjaywgdHJhY2tOYW1lKSB7XG4gICAgICB2YXIgcHJvcGVydHkgPSBmaW5kUHJvcGVydHlBdE1pbGxpc2Vjb25kSW5UcmFjayhcbiAgICAgICAgdGhpcywgdHJhY2tOYW1lLCBtaWxsaXNlY29uZCk7XG5cbiAgICAgIGlmIChwcm9wZXJ0eSkge1xuICAgICAgICBwcm9wZXJ0eS5tb2RpZnlXaXRoKHtcbiAgICAgICAgICAndmFsdWUnOiBzdGF0ZU1vZGlmaWNhdGlvblt0cmFja05hbWVdXG4gICAgICAgICAgLCdlYXNpbmcnOiBvcHRfZWFzaW5nTW9kaWZpY2F0aW9uW3RyYWNrTmFtZV1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG5cbiAgICBjbGVhbnVwQWZ0ZXJLZXlmcmFtZU1vZGlmaWNhdGlvbih0aGlzKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmUgYWxsIGB7eyNjcm9zc0xpbmsgXCJSZWthcGkuS2V5ZnJhbWVQcm9wZXJ0eVwifX17ey9jcm9zc0xpbmt9fWBzIHNldFxuICAgKiBvbiB0aGUgYWN0b3IgYXQgYSBnaXZlbiBtaWxsaXNlY29uZCBpbiB0aGUgYW5pbWF0aW9uLlxuICAgKlxuICAgKiBfX1tFeGFtcGxlXSguLi8uLi8uLi8uLi9kb2NzL2V4YW1wbGVzL2FjdG9yX3JlbW92ZV9rZXlmcmFtZS5odG1sKV9fXG4gICAqIEBtZXRob2QgcmVtb3ZlS2V5ZnJhbWVcbiAgICogQHBhcmFtIHtudW1iZXJ9IG1pbGxpc2Vjb25kIFRoZSBsb2NhdGlvbiBvbiB0aGUgdGltZWxpbmUgb2YgdGhlIGtleWZyYW1lXG4gICAqIHRvIHJlbW92ZS5cbiAgICogQGNoYWluYWJsZVxuICAgKi9cbiAgQWN0b3IucHJvdG90eXBlLnJlbW92ZUtleWZyYW1lID0gZnVuY3Rpb24gKG1pbGxpc2Vjb25kKSB7XG4gICAgdmFyIHByb3BlcnR5VHJhY2tzID0gdGhpcy5fcHJvcGVydHlUcmFja3M7XG5cbiAgICBfLmVhY2godGhpcy5fcHJvcGVydHlUcmFja3MsIGZ1bmN0aW9uIChwcm9wZXJ0eVRyYWNrLCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgIHZhciBrZXlmcmFtZVByb3BlcnR5ID0gXy5maW5kV2hlcmUoXG4gICAgICAgIHByb3BlcnR5VHJhY2ssIHsgbWlsbGlzZWNvbmQ6IG1pbGxpc2Vjb25kIH0pO1xuXG4gICAgICBpZiAoa2V5ZnJhbWVQcm9wZXJ0eSkge1xuICAgICAgICBwcm9wZXJ0eVRyYWNrc1twcm9wZXJ0eU5hbWVdID0gXy53aXRob3V0KFxuICAgICAgICAgIHByb3BlcnR5VHJhY2ssIGtleWZyYW1lUHJvcGVydHkpO1xuICAgICAgICBrZXlmcmFtZVByb3BlcnR5LmRldGFjaCgpO1xuICAgICAgfVxuICAgIH0sIHRoaXMpO1xuXG4gICAgaWYgKHRoaXMucmVrYXBpKSB7XG4gICAgICByZWNhbGN1bGF0ZUFuaW1hdGlvbkxlbmd0aCh0aGlzLnJla2FwaSwgXyk7XG4gICAgfVxuXG4gICAgaW52YWxpZGF0ZVByb3BlcnR5Q2FjaGUodGhpcyk7XG4gICAgZmlyZVJla2FwaUV2ZW50Rm9yQWN0b3IodGhpcywgJ3RpbWVsaW5lTW9kaWZpZWQnKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmUgYWxsIGB7eyNjcm9zc0xpbmsgXCJSZWthcGkuS2V5ZnJhbWVQcm9wZXJ0eVwifX17ey9jcm9zc0xpbmt9fWBzIHNldFxuICAgKiBvbiB0aGUgYWN0b3IuXG4gICAqXG4gICAqIF9fW0V4YW1wbGVdKC4uLy4uLy4uLy4uL2RvY3MvZXhhbXBsZXMvYWN0b3JfcmVtb3ZlX2FsbF9rZXlmcmFtZXMuaHRtbClfX1xuICAgKiBAbWV0aG9kIHJlbW92ZUFsbEtleWZyYW1lc1xuICAgKiBAY2hhaW5hYmxlXG4gICAqL1xuICBBY3Rvci5wcm90b3R5cGUucmVtb3ZlQWxsS2V5ZnJhbWVzID0gZnVuY3Rpb24gKCkge1xuICAgIF8uZWFjaCh0aGlzLl9wcm9wZXJ0eVRyYWNrcywgZnVuY3Rpb24gKHByb3BlcnR5VHJhY2spIHtcbiAgICAgIHByb3BlcnR5VHJhY2subGVuZ3RoID0gMDtcbiAgICB9KTtcblxuICAgIF8uZWFjaCh0aGlzLl9rZXlmcmFtZVByb3BlcnRpZXMsIGZ1bmN0aW9uIChrZXlmcmFtZVByb3BlcnR5KSB7XG4gICAgICBrZXlmcmFtZVByb3BlcnR5LmRldGFjaCgpO1xuICAgIH0sIHRoaXMpO1xuXG4gICAgdGhpcy5fa2V5ZnJhbWVQcm9wZXJ0aWVzID0ge307XG5cbiAgICAvLyBDYWxsaW5nIHJlbW92ZUtleWZyYW1lIHBlcmZvcm1zIHNvbWUgbmVjZXNzYXJ5IHBvc3QtcmVtb3ZhbCBjbGVhbnVwLCB0aGVcbiAgICAvLyBlYXJsaWVyIHBhcnQgb2YgdGhpcyBtZXRob2Qgc2tpcHBlZCBhbGwgb2YgdGhhdCBmb3IgdGhlIHNha2Ugb2ZcbiAgICAvLyBlZmZpY2llbmN5LlxuICAgIHJldHVybiB0aGlzLnJlbW92ZUtleWZyYW1lKDApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGdldEtleWZyYW1lUHJvcGVydHlcbiAgICogQHBhcmFtIHtzdHJpbmd9IHByb3BlcnR5IFRoZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eSB0cmFjay5cbiAgICogQHBhcmFtIHtudW1iZXJ9IG1pbGxpc2Vjb25kIFRoZSBtaWxsaXNlY29uZCBvZiB0aGUgcHJvcGVydHkgaW4gdGhlXG4gICAqIHRpbWVsaW5lLlxuICAgKiBAcmV0dXJuIHtSZWthcGkuS2V5ZnJhbWVQcm9wZXJ0eXx1bmRlZmluZWR9IEEgYHt7I2Nyb3NzTGlua1xuICAgKiBcIlJla2FwaS5LZXlmcmFtZVByb3BlcnR5XCJ9fXt7L2Nyb3NzTGlua319YCB0aGF0IGlzIHN0b3JlZCBvbiB0aGUgYWN0b3IsIGFzXG4gICAqIHNwZWNpZmllZCBieSB0aGUgYHByb3BlcnR5YCBhbmQgYG1pbGxpc2Vjb25kYCBwYXJhbWV0ZXJzLiBUaGlzIGlzXG4gICAqIGB1bmRlZmluZWRgIGlmIG5vIHByb3BlcnRpZXMgd2VyZSBmb3VuZC5cbiAgICovXG4gIEFjdG9yLnByb3RvdHlwZS5nZXRLZXlmcmFtZVByb3BlcnR5ID0gZnVuY3Rpb24gKHByb3BlcnR5LCBtaWxsaXNlY29uZCkge1xuICAgIHZhciBwcm9wZXJ0eVRyYWNrID0gdGhpcy5fcHJvcGVydHlUcmFja3NbcHJvcGVydHldO1xuICAgIGlmIChwcm9wZXJ0eVRyYWNrKSB7XG4gICAgICByZXR1cm4gXy5maW5kV2hlcmUocHJvcGVydHlUcmFjaywgeyBtaWxsaXNlY29uZDogbWlsbGlzZWNvbmQgfSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBNb2RpZnkgYSBge3sjY3Jvc3NMaW5rIFwiUmVrYXBpLktleWZyYW1lUHJvcGVydHlcIn19e3svY3Jvc3NMaW5rfX1gIHN0b3JlZFxuICAgKiBvbiBhbiBhY3Rvci4gIEludGVybmFsbHksIHRoaXMgY2FsbHMgYHt7I2Nyb3NzTGlua1xuICAgKiBcIlJla2FwaS5LZXlmcmFtZVByb3BlcnR5L21vZGlmeVdpdGg6bWV0aG9kXCJ9fXt7L2Nyb3NzTGlua319YCBhbmQgdGhlblxuICAgKiBwZXJmb3JtcyBzb21lIGNsZWFudXAuXG4gICAqXG4gICAqIF9fW0V4YW1wbGVdKC4uLy4uLy4uLy4uL2RvY3MvZXhhbXBsZXMvYWN0b3JfbW9kaWZ5X2tleWZyYW1lX3Byb3BlcnR5Lmh0bWwpX19cbiAgICogQG1ldGhvZCBtb2RpZnlLZXlmcmFtZVByb3BlcnR5XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wZXJ0eSBUaGUgbmFtZSBvZiB0aGUgYHt7I2Nyb3NzTGlua1xuICAgKiBcIlJla2FwaS5LZXlmcmFtZVByb3BlcnR5XCJ9fXt7L2Nyb3NzTGlua319YCB0byBtb2RpZnkuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBtaWxsaXNlY29uZCBUaGUgdGltZWxpbmUgbWlsbGlzZWNvbmQgb2YgdGhlIGB7eyNjcm9zc0xpbmtcbiAgICogXCJSZWthcGkuS2V5ZnJhbWVQcm9wZXJ0eVwifX17ey9jcm9zc0xpbmt9fWAgdG8gbW9kaWZ5LlxuICAgKiBAcGFyYW0ge09iamVjdH0gbmV3UHJvcGVydGllcyBUaGUgcHJvcGVydGllcyB0byBhdWdtZW50IHRoZSBge3sjY3Jvc3NMaW5rXG4gICAqIFwiUmVrYXBpLktleWZyYW1lUHJvcGVydHlcIn19e3svY3Jvc3NMaW5rfX1gIHdpdGguXG4gICAqIEBjaGFpbmFibGVcbiAgICovXG4gIEFjdG9yLnByb3RvdHlwZS5tb2RpZnlLZXlmcmFtZVByb3BlcnR5ID0gZnVuY3Rpb24gKFxuICAgIHByb3BlcnR5LCBtaWxsaXNlY29uZCwgbmV3UHJvcGVydGllcykge1xuXG4gICAgdmFyIGtleWZyYW1lUHJvcGVydHkgPSB0aGlzLmdldEtleWZyYW1lUHJvcGVydHkocHJvcGVydHksIG1pbGxpc2Vjb25kKTtcbiAgICBpZiAoa2V5ZnJhbWVQcm9wZXJ0eSkge1xuICAgICAga2V5ZnJhbWVQcm9wZXJ0eS5tb2RpZnlXaXRoKG5ld1Byb3BlcnRpZXMpO1xuICAgICAgY2xlYW51cEFmdGVyS2V5ZnJhbWVNb2RpZmljYXRpb24odGhpcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhIHNpbmdsZSBge3sjY3Jvc3NMaW5rIFwiUmVrYXBpLktleWZyYW1lUHJvcGVydHlcIn19e3svY3Jvc3NMaW5rfX1gXG4gICAqIGZyb20gdGhlIGFjdG9yLlxuICAgKiBAbWV0aG9kIHJlbW92ZUtleWZyYW1lUHJvcGVydHlcbiAgICogQHBhcmFtIHtzdHJpbmd9IHByb3BlcnR5IFRoZSBuYW1lIG9mIHRoZSBge3sjY3Jvc3NMaW5rXG4gICAqIFwiUmVrYXBpLktleWZyYW1lUHJvcGVydHlcIn19e3svY3Jvc3NMaW5rfX1gIHRvIHJlbW92ZS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IG1pbGxpc2Vjb25kIFdoZXJlIGluIHRoZSB0aW1lbGluZSB0aGUgYHt7I2Nyb3NzTGlua1xuICAgKiBcIlJla2FwaS5LZXlmcmFtZVByb3BlcnR5XCJ9fXt7L2Nyb3NzTGlua319YCB0byByZW1vdmUgaXMuXG4gICAqIEByZXR1cm4ge1Jla2FwaS5LZXlmcmFtZVByb3BlcnR5fHVuZGVmaW5lZH0gVGhlIHJlbW92ZWQgS2V5ZnJhbWVQcm9wZXJ0eSxcbiAgICogaWYgb25lIHdhcyBmb3VuZC5cbiAgICovXG4gIEFjdG9yLnByb3RvdHlwZS5yZW1vdmVLZXlmcmFtZVByb3BlcnR5ID0gZnVuY3Rpb24gKHByb3BlcnR5LCBtaWxsaXNlY29uZCkge1xuICAgIHZhciBwcm9wZXJ0eVRyYWNrcyA9IHRoaXMuX3Byb3BlcnR5VHJhY2tzO1xuXG4gICAgaWYgKHR5cGVvZiBwcm9wZXJ0eVRyYWNrc1twcm9wZXJ0eV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIga2V5ZnJhbWVQcm9wZXJ0eSA9IHRoaXMuZ2V0S2V5ZnJhbWVQcm9wZXJ0eShwcm9wZXJ0eSwgbWlsbGlzZWNvbmQpO1xuICAgICAgcHJvcGVydHlUcmFja3NbcHJvcGVydHldID1cbiAgICAgIF8ud2l0aG91dChwcm9wZXJ0eVRyYWNrc1twcm9wZXJ0eV0sIGtleWZyYW1lUHJvcGVydHkpO1xuICAgICAga2V5ZnJhbWVQcm9wZXJ0eS5kZXRhY2goKTtcblxuICAgICAgY2xlYW51cEFmdGVyS2V5ZnJhbWVNb2RpZmljYXRpb24odGhpcyk7XG5cbiAgICAgIHJldHVybiBrZXlmcmFtZVByb3BlcnR5O1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICpcbiAgICogQG1ldGhvZCBnZXRUcmFja05hbWVzXG4gICAqIEByZXR1cm4ge0FycmF5KHN0cmluZyl9IEEgbGlzdCBvZiBhbGwgdGhlIHRyYWNrIG5hbWVzIGZvciBhbiBhY3Rvci5cbiAgICovXG4gIEFjdG9yLnByb3RvdHlwZS5nZXRUcmFja05hbWVzID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfLmtleXModGhpcy5fcHJvcGVydHlUcmFja3MpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgYWxsIG9mIHRoZSBge3sjY3Jvc3NMaW5rIFwiUmVrYXBpLktleWZyYW1lUHJvcGVydHlcIn19e3svY3Jvc3NMaW5rfX1gc1xuICAgKiBmb3IgYSB0cmFjay5cbiAgICogQG1ldGhvZCBnZXRQcm9wZXJ0aWVzSW5UcmFja1xuICAgKiBAcGFyYW0ge3N0cmluZ30gdHJhY2tOYW1lIFRoZSB0cmFjayBuYW1lIHRvIHF1ZXJ5LlxuICAgKiBAcmV0dXJuIHtSZWthcGkuS2V5ZnJhbWVQcm9wZXJ0eVtdfHVuZGVmaW5lZH1cbiAgICovXG4gIEFjdG9yLnByb3RvdHlwZS5nZXRQcm9wZXJ0aWVzSW5UcmFjayA9IGZ1bmN0aW9uICh0cmFja05hbWUpIHtcbiAgICB2YXIgcHJvcGVydHlUcmFjayA9IHRoaXMuX3Byb3BlcnR5VHJhY2tzW3RyYWNrTmFtZV07XG5cbiAgICBpZiAocHJvcGVydHlUcmFjaykge1xuICAgICAgcmV0dXJuIHByb3BlcnR5VHJhY2suc2xpY2UoMCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGdldFN0YXJ0XG4gICAqIEBwYXJhbSB7c3RyaW5nPX0gb3B0X3RyYWNrTmFtZSBPcHRpb25hbGx5IHNjb3BlIHRoZSBsb29rdXAgdG8gYSBwYXJ0aWN1bGFyXG4gICAqIHRyYWNrLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBtaWxsaXNlY29uZCBvZiB0aGUgZmlyc3QgYW5pbWF0aW5nIHN0YXRlIG9mIGFuIGFjdG9yXG4gICAqIChmb3IgaW5zdGFuY2UsIGlmIHRoZSBhY3RvcidzIGZpcnN0IGtleWZyYW1lIGlzIGxhdGVyIHRoYW4gbWlsbGlzZWNvbmRcbiAgICogYDBgKS4gIElmIHRoZXJlIGFyZSBubyBrZXlmcmFtZXMsIHRoaXMgcmV0dXJucyBgMGAuXG4gICAqL1xuICBBY3Rvci5wcm90b3R5cGUuZ2V0U3RhcnQgPSBmdW5jdGlvbiAob3B0X3RyYWNrTmFtZSkge1xuICAgIHZhciBzdGFydHMgPSBbXTtcbiAgICB2YXIgcHJvcGVydHlUcmFja3MgPSB0aGlzLl9wcm9wZXJ0eVRyYWNrcztcblxuICAgIC8vIE51bGwgY2hlY2sgdG8gc2VlIGlmIG9wdF90cmFja05hbWUgd2FzIHByb3ZpZGVkIGFuZCBpcyB2YWxpZFxuICAgIGlmIChwcm9wZXJ0eVRyYWNrcy5oYXNPd25Qcm9wZXJ0eShvcHRfdHJhY2tOYW1lKSkge1xuICAgICAgdmFyIGZpcnN0S2V5ZnJhbWVQcm9wZXJ0eSA9IHByb3BlcnR5VHJhY2tzW29wdF90cmFja05hbWVdWzBdO1xuXG4gICAgICBpZiAoZmlyc3RLZXlmcmFtZVByb3BlcnR5KSB7XG4gICAgICAgIHN0YXJ0cy5wdXNoKGZpcnN0S2V5ZnJhbWVQcm9wZXJ0eS5taWxsaXNlY29uZCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIExvb3Agb3ZlciBhbGwgcHJvcGVydHkgdHJhY2tzIGFuZCBhY2N1bXVsYXRlIHRoZSBmaXJzdFxuICAgICAgLy8ga2V5ZnJhbWVQcm9wZXJ0aWVzIGZyb20gbm9uLWVtcHR5IHRyYWNrc1xuICAgICAgXy5lYWNoKHByb3BlcnR5VHJhY2tzLCBmdW5jdGlvbiAocHJvcGVydHlUcmFjaykge1xuICAgICAgICBpZiAocHJvcGVydHlUcmFjay5sZW5ndGgpIHtcbiAgICAgICAgICBzdGFydHMucHVzaChwcm9wZXJ0eVRyYWNrWzBdLm1pbGxpc2Vjb25kKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHN0YXJ0cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHN0YXJ0cyA9IFswXTtcbiAgICB9XG5cbiAgICB2YXIgc3RhcnQ7XG4gICAgaWYgKHN0YXJ0cy5sZW5ndGggPiAwKSB7XG4gICAgICBzdGFydCA9IE1hdGgubWluLmFwcGx5KE1hdGgsIHN0YXJ0cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXJ0ID0gMDtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhcnQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgZ2V0RW5kXG4gICAqIEBwYXJhbSB7c3RyaW5nPX0gb3B0X3RyYWNrTmFtZSBPcHRpb25hbGx5IHNjb3BlIHRoZSBsb29rdXAgdG8gYSBwYXJ0aWN1bGFyXG4gICAqIGtleWZyYW1lIHRyYWNrLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBtaWxsaXNlY29uZCBvZiB0aGUgbGFzdCBzdGF0ZSBvZiBhbiBhY3RvciAodGhlIHBvaW50XG4gICAqIGluIHRoZSB0aW1lbGluZSBpbiB3aGljaCBpdCBpcyBkb25lIGFuaW1hdGluZykuICBJZiB0aGVyZSBhcmUgbm9cbiAgICoga2V5ZnJhbWVzLCB0aGlzIGlzIGAwYC5cbiAgICovXG4gIEFjdG9yLnByb3RvdHlwZS5nZXRFbmQgPSBmdW5jdGlvbiAob3B0X3RyYWNrTmFtZSkge1xuICAgIHZhciBsYXRlc3QgPSAwO1xuICAgIHZhciB0cmFja3NUb0luc3BlY3QgPSB0aGlzLl9wcm9wZXJ0eVRyYWNrcztcblxuICAgIGlmIChvcHRfdHJhY2tOYW1lKSB7XG4gICAgICB0cmFja3NUb0luc3BlY3QgPSB7fTtcbiAgICAgIHRyYWNrc1RvSW5zcGVjdFtvcHRfdHJhY2tOYW1lXSA9IHRoaXMuX3Byb3BlcnR5VHJhY2tzW29wdF90cmFja05hbWVdO1xuICAgIH1cblxuICAgIF8uZWFjaCh0cmFja3NUb0luc3BlY3QsIGZ1bmN0aW9uIChwcm9wZXJ0eVRyYWNrKSB7XG4gICAgICBpZiAocHJvcGVydHlUcmFjay5sZW5ndGgpIHtcbiAgICAgICAgdmFyIHRyYWNrTGVuZ3RoID0gXy5sYXN0KHByb3BlcnR5VHJhY2spLm1pbGxpc2Vjb25kO1xuXG4gICAgICAgIGlmICh0cmFja0xlbmd0aCA+IGxhdGVzdCkge1xuICAgICAgICAgIGxhdGVzdCA9IHRyYWNrTGVuZ3RoO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG5cbiAgICByZXR1cm4gbGF0ZXN0O1xuICB9O1xuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGdldExlbmd0aFxuICAgKiBAcGFyYW0ge3N0cmluZz19IG9wdF90cmFja05hbWUgT3B0aW9uYWxseSBzY29wZSB0aGUgbG9va3VwIHRvIGEgcGFydGljdWxhclxuICAgKiB0cmFjay5cbiAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgbGVuZ3RoIG9mIHRpbWUgaW4gbWlsbGlzZWNvbmRzIHRoYXQgdGhlIGFjdG9yXG4gICAqIGFuaW1hdGVzIGZvci5cbiAgICovXG4gIEFjdG9yLnByb3RvdHlwZS5nZXRMZW5ndGggPSBmdW5jdGlvbiAob3B0X3RyYWNrTmFtZSkge1xuICAgIHJldHVybiB0aGlzLmdldEVuZChvcHRfdHJhY2tOYW1lKSAtIHRoaXMuZ2V0U3RhcnQob3B0X3RyYWNrTmFtZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEV4dGVuZCB0aGUgbGFzdCBzdGF0ZSBvbiB0aGlzIGFjdG9yJ3MgdGltZWxpbmUgdG8gc2ltdWxhdGUgYSBwYXVzZS5cbiAgICogSW50ZXJuYWxseSwgdGhpcyBtZXRob2QgY29waWVzIHRoZSBmaW5hbCBzdGF0ZSBvZiB0aGUgYWN0b3IgaW4gdGhlXG4gICAqIHRpbWVsaW5lIHRvIHRoZSBtaWxsaXNlY29uZCBkZWZpbmVkIGJ5IGB1bnRpbGAuXG4gICAqXG4gICAqIF9fW0V4YW1wbGVdKC4uLy4uLy4uLy4uL2RvY3MvZXhhbXBsZXMvYWN0b3Jfd2FpdC5odG1sKV9fXG4gICAqIEBtZXRob2Qgd2FpdFxuICAgKiBAcGFyYW0ge251bWJlcn0gdW50aWwgQXQgd2hhdCBwb2ludCBpbiB0aGUgYW5pbWF0aW9uIHRoZSBBY3RvciBzaG91bGQgd2FpdFxuICAgKiB1bnRpbCAocmVsYXRpdmUgdG8gdGhlIHN0YXJ0IG9mIHRoZSBhbmltYXRpb24gdGltZWxpbmUpLiAgSWYgdGhpcyBudW1iZXJcbiAgICogaXMgbGVzcyB0aGFuIHRoZSB2YWx1ZSByZXR1cm5lZCBmcm9tIGB7eyNjcm9zc0xpbmtcbiAgICogXCJSZWthcGkuQWN0b3IvZ2V0TGVuZ3RoOm1ldGhvZFwifX17ey9jcm9zc0xpbmt9fWAsIHRoaXMgbWV0aG9kIGRvZXNcbiAgICogbm90aGluZy5cbiAgICogQGNoYWluYWJsZVxuICAgKi9cbiAgQWN0b3IucHJvdG90eXBlLndhaXQgPSBmdW5jdGlvbiAodW50aWwpIHtcbiAgICB2YXIgbGVuZ3RoID0gdGhpcy5nZXRFbmQoKTtcblxuICAgIGlmICh1bnRpbCA8PSBsZW5ndGgpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHZhciBlbmQgPSB0aGlzLmdldEVuZCgpO1xuICAgIHZhciBsYXRlc3RQcm9wcyA9IGdldExhdGVzdFByb3BldGllcyh0aGlzLCB0aGlzLmdldEVuZCgpKTtcbiAgICB2YXIgc2VyaWFsaXplZFByb3BzID0ge307XG4gICAgdmFyIHNlcmlhbGl6ZWRFYXNpbmdzID0ge307XG5cbiAgICBfLmVhY2gobGF0ZXN0UHJvcHMsIGZ1bmN0aW9uIChsYXRlc3RQcm9wLCBwcm9wTmFtZSkge1xuICAgICAgc2VyaWFsaXplZFByb3BzW3Byb3BOYW1lXSA9IGxhdGVzdFByb3AudmFsdWU7XG4gICAgICBzZXJpYWxpemVkRWFzaW5nc1twcm9wTmFtZV0gPSBsYXRlc3RQcm9wLmVhc2luZztcbiAgICB9KTtcblxuICAgIHRoaXMucmVtb3ZlS2V5ZnJhbWUoZW5kKTtcbiAgICB0aGlzLmtleWZyYW1lKGVuZCwgc2VyaWFsaXplZFByb3BzLCBzZXJpYWxpemVkRWFzaW5ncyk7XG4gICAgdGhpcy5rZXlmcmFtZSh1bnRpbCwgc2VyaWFsaXplZFByb3BzLCBzZXJpYWxpemVkRWFzaW5ncyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKiFcbiAgICogQXNzb2NpYXRlIGEgYFJla2FwaS5LZXlmcmFtZVByb3BlcnR5YCB0byB0aGlzIGFjdG9yLiAgQXVnbWVudHMgdGhlXG4gICAqIGBSZWthcGkuS2V5ZnJhbWVQcm9wZXJ0eWAgdG8gbWFpbnRhaW4gYSBsaW5rIGJldHdlZW4gdGhlIHR3byBvYmplY3RzLlxuICAgKiBAbWV0aG9kIF9hZGRLZXlmcmFtZVByb3BlcnR5XG4gICAqIEBwYXJhbSB7UmVrYXBpLktleWZyYW1lUHJvcGVydHl9IGtleWZyYW1lUHJvcGVydHlcbiAgICogQGNoYWluYWJsZVxuICAgKi9cbiAgQWN0b3IucHJvdG90eXBlLl9hZGRLZXlmcmFtZVByb3BlcnR5ID0gZnVuY3Rpb24gKGtleWZyYW1lUHJvcGVydHkpIHtcbiAgICBrZXlmcmFtZVByb3BlcnR5LmFjdG9yID0gdGhpcztcbiAgICB0aGlzLl9rZXlmcmFtZVByb3BlcnRpZXNba2V5ZnJhbWVQcm9wZXJ0eS5pZF0gPSBrZXlmcmFtZVByb3BlcnR5O1xuXG4gICAgdmFyIG5hbWUgPSBrZXlmcmFtZVByb3BlcnR5Lm5hbWU7XG4gICAgdmFyIHByb3BlcnR5VHJhY2tzID0gdGhpcy5fcHJvcGVydHlUcmFja3M7XG5cbiAgICBpZiAodHlwZW9mIHRoaXMuX3Byb3BlcnR5VHJhY2tzW25hbWVdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcHJvcGVydHlUcmFja3NbbmFtZV0gPSBba2V5ZnJhbWVQcm9wZXJ0eV07XG4gICAgICBpZiAodGhpcy5yZWthcGkpIHtcbiAgICAgICAgZmlyZUV2ZW50KHRoaXMucmVrYXBpLCAnYWRkS2V5ZnJhbWVQcm9wZXJ0eVRyYWNrJywgXywga2V5ZnJhbWVQcm9wZXJ0eSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb3BlcnR5VHJhY2tzW25hbWVdLnB1c2goa2V5ZnJhbWVQcm9wZXJ0eSk7XG4gICAgfVxuXG4gICAgc29ydFByb3BlcnR5VHJhY2tzKHRoaXMpO1xuXG4gICAgaWYgKHRoaXMucmVrYXBpKSB7XG4gICAgICBmaXJlRXZlbnQodGhpcy5yZWthcGksICdhZGRLZXlmcmFtZVByb3BlcnR5JywgXywga2V5ZnJhbWVQcm9wZXJ0eSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyohXG4gICAqIENhbGN1bGF0ZSBhbmQgc2V0IHRoZSBhY3RvcidzIHBvc2l0aW9uIGF0IGBtaWxsaXNlY29uZGAgaW4gdGhlIGFuaW1hdGlvbi5cbiAgICogQG1ldGhvZCBfdXBkYXRlU3RhdGVcbiAgICogQHBhcmFtIHtudW1iZXJ9IG1pbGxpc2Vjb25kXG4gICAqIEBjaGFpbmFibGVcbiAgICovXG4gIEFjdG9yLnByb3RvdHlwZS5fdXBkYXRlU3RhdGUgPSBmdW5jdGlvbiAobWlsbGlzZWNvbmQpIHtcbiAgICB2YXIgc3RhcnRNcyA9IHRoaXMuZ2V0U3RhcnQoKTtcbiAgICB2YXIgZW5kTXMgPSB0aGlzLmdldEVuZCgpO1xuICAgIHZhciBpbnRlcnBvbGF0ZWRPYmplY3QgPSB7fTtcblxuICAgIG1pbGxpc2Vjb25kID0gTWF0aC5taW4oZW5kTXMsIG1pbGxpc2Vjb25kKTtcblxuICAgIHZhciBsYXRlc3RDYWNoZUlkID0gZ2V0UHJvcGVydHlDYWNoZUlkRm9yTWlsbGlzZWNvbmQodGhpcywgbWlsbGlzZWNvbmQpO1xuICAgIHZhciBwcm9wZXJ0aWVzVG9JbnRlcnBvbGF0ZSA9XG4gICAgICB0aGlzLl90aW1lbGluZVByb3BlcnR5Q2FjaGVbdGhpcy5fdGltZWxpbmVQcm9wZXJ0eUNhY2hlS2V5c1tcbiAgICAgICAgICBsYXRlc3RDYWNoZUlkXV07XG5cbiAgICBpZiAoc3RhcnRNcyA9PT0gZW5kTXMpIHtcblxuICAgICAgLy8gSWYgdGhlcmUgaXMgb25seSBvbmUga2V5ZnJhbWUsIHVzZSB0aGF0IGZvciB0aGUgc3RhdGUgb2YgdGhlIGFjdG9yXG4gICAgICBfLmVhY2gocHJvcGVydGllc1RvSW50ZXJwb2xhdGUsIGZ1bmN0aW9uIChrZXlmcmFtZVByb3BlcnR5LCBwcm9wTmFtZSkge1xuICAgICAgICBpZiAoa2V5ZnJhbWVQcm9wZXJ0eS5zaG91bGRJbnZva2VGb3JNaWxsaXNlY29uZChtaWxsaXNlY29uZCkpIHtcbiAgICAgICAgICBrZXlmcmFtZVByb3BlcnR5Lmludm9rZSgpO1xuICAgICAgICAgIGtleWZyYW1lUHJvcGVydHkuaGFzRmlyZWQgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpbnRlcnBvbGF0ZWRPYmplY3RbcHJvcE5hbWVdID0ga2V5ZnJhbWVQcm9wZXJ0eS52YWx1ZTtcbiAgICAgIH0sIHRoaXMpO1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgXy5lYWNoKHByb3BlcnRpZXNUb0ludGVycG9sYXRlLCBmdW5jdGlvbiAoa2V5ZnJhbWVQcm9wZXJ0eSwgcHJvcE5hbWUpIHtcbiAgICAgICAgaWYgKHRoaXMuX2JlZm9yZUtleWZyYW1lUHJvcGVydHlJbnRlcnBvbGF0ZSAhPT0gbm9vcCkge1xuICAgICAgICAgIHRoaXMuX2JlZm9yZUtleWZyYW1lUHJvcGVydHlJbnRlcnBvbGF0ZShrZXlmcmFtZVByb3BlcnR5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXlmcmFtZVByb3BlcnR5LnNob3VsZEludm9rZUZvck1pbGxpc2Vjb25kKG1pbGxpc2Vjb25kKSkge1xuICAgICAgICAgIGtleWZyYW1lUHJvcGVydHkuaW52b2tlKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaW50ZXJwb2xhdGVkT2JqZWN0W3Byb3BOYW1lXSA9XG4gICAgICAgIGtleWZyYW1lUHJvcGVydHkuZ2V0VmFsdWVBdChtaWxsaXNlY29uZCk7XG5cbiAgICAgICAgaWYgKHRoaXMuX2FmdGVyS2V5ZnJhbWVQcm9wZXJ0eUludGVycG9sYXRlICE9PSBub29wKSB7XG4gICAgICAgICAgdGhpcy5fYWZ0ZXJLZXlmcmFtZVByb3BlcnR5SW50ZXJwb2xhdGUoXG4gICAgICAgICAgICBrZXlmcmFtZVByb3BlcnR5LCBpbnRlcnBvbGF0ZWRPYmplY3QpO1xuICAgICAgICB9XG4gICAgICB9LCB0aGlzKTtcbiAgICB9XG5cbiAgICB0aGlzLnNldChpbnRlcnBvbGF0ZWRPYmplY3QpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyohXG4gICAqIEBtZXRob2QgX2JlZm9yZUtleWZyYW1lUHJvcGVydHlJbnRlcnBvbGF0ZVxuICAgKiBAcGFyYW0ge1Jla2FwaS5LZXlmcmFtZVByb3BlcnR5fSBrZXlmcmFtZVByb3BlcnR5XG4gICAqIEBhYnN0cmFjdFxuICAgKi9cbiAgQWN0b3IucHJvdG90eXBlLl9iZWZvcmVLZXlmcmFtZVByb3BlcnR5SW50ZXJwb2xhdGUgPSBub29wO1xuXG4gIC8qIVxuICAgKiBAbWV0aG9kIF9hZnRlcktleWZyYW1lUHJvcGVydHlJbnRlcnBvbGF0ZVxuICAgKiBAcGFyYW0ge1Jla2FwaS5LZXlmcmFtZVByb3BlcnR5fSBrZXlmcmFtZVByb3BlcnR5XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBpbnRlcnBvbGF0ZWRPYmplY3RcbiAgICogQGFic3RyYWN0XG4gICAqL1xuICBBY3Rvci5wcm90b3R5cGUuX2FmdGVyS2V5ZnJhbWVQcm9wZXJ0eUludGVycG9sYXRlID0gbm9vcDtcblxuICAvKipcbiAgICogX19bRXhhbXBsZV0oLi4vLi4vLi4vLi4vZG9jcy9leGFtcGxlcy9hY3Rvcl9leHBvcnRfdGltZWxpbmUuaHRtbClfX1xuICAgKiBAbWV0aG9kIGV4cG9ydFRpbWVsaW5lXG4gICAqIEByZXR1cm4ge09iamVjdH0gQSBzZXJpYWxpemFibGUgT2JqZWN0IG9mIHRoaXMgYWN0b3IncyB0aW1lbGluZSBwcm9wZXJ0eVxuICAgKiB0cmFja3MgYW5kIGB7eyNjcm9zc0xpbmsgXCJSZWthcGkuS2V5ZnJhbWVQcm9wZXJ0eVwifX17ey9jcm9zc0xpbmt9fWBzLlxuICAgKi9cbiAgQWN0b3IucHJvdG90eXBlLmV4cG9ydFRpbWVsaW5lID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHBvcnREYXRhID0ge1xuICAgICAgJ3N0YXJ0JzogdGhpcy5nZXRTdGFydCgpXG4gICAgICAsJ2VuZCc6IHRoaXMuZ2V0RW5kKClcbiAgICAgICwndHJhY2tOYW1lcyc6IHRoaXMuZ2V0VHJhY2tOYW1lcygpXG4gICAgICAsJ3Byb3BlcnR5VHJhY2tzJzoge31cbiAgICB9O1xuXG4gICAgXy5lYWNoKHRoaXMuX3Byb3BlcnR5VHJhY2tzLCBmdW5jdGlvbiAocHJvcGVydHlUcmFjaywgdHJhY2tOYW1lKSB7XG4gICAgICB2YXIgdHJhY2tBbGlhcyA9IGV4cG9ydERhdGEucHJvcGVydHlUcmFja3NbdHJhY2tOYW1lXSA9IFtdO1xuICAgICAgXy5lYWNoKHByb3BlcnR5VHJhY2ssIGZ1bmN0aW9uIChrZXlmcmFtZVByb3BlcnR5KSB7XG4gICAgICAgIHRyYWNrQWxpYXMucHVzaChrZXlmcmFtZVByb3BlcnR5LmV4cG9ydFByb3BlcnR5RGF0YSgpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGV4cG9ydERhdGE7XG4gIH07XG5cbiAgLyoqXG4gICAqIEltcG9ydCBhbiBPYmplY3QgdG8gYXVnbWVudCB0aGlzIGFjdG9yJ3Mgc3RhdGUuICBUaGlzIGRvZXMgbm90IHJlbW92ZVxuICAgKiBrZXlmcmFtZSBwcm9wZXJ0aWVzIGJlZm9yZSBpbXBvcnRpbmcgbmV3IG9uZXMuXG4gICAqXG4gICAqIEBtZXRob2QgaW1wb3J0VGltZWxpbmVcbiAgICogQHBhcmFtIHtPYmplY3R9IGFjdG9yRGF0YSBBbnkgb2JqZWN0IHRoYXQgaGFzIHRoZSBzYW1lIGRhdGEgZm9ybWF0IGFzIHRoZVxuICAgKiBvYmplY3QgZ2VuZXJhdGVkIGZyb20gYHt7I2Nyb3NzTGlua1xuICAgKiBcIlJla2FwaS5BY3Rvci9leHBvcnRUaW1lbGluZTptZXRob2RcIn19e3svY3Jvc3NMaW5rfX1gLlxuICAgKi9cbiAgQWN0b3IucHJvdG90eXBlLmltcG9ydFRpbWVsaW5lID0gZnVuY3Rpb24gKGFjdG9yRGF0YSkge1xuICAgIF8uZWFjaChhY3RvckRhdGEucHJvcGVydHlUcmFja3MsIGZ1bmN0aW9uIChwcm9wZXJ0eVRyYWNrKSB7XG4gICAgICBfLmVhY2gocHJvcGVydHlUcmFjaywgZnVuY3Rpb24gKHByb3BlcnR5KSB7XG4gICAgICAgIHZhciBvYmogPSB7fTtcbiAgICAgICAgb2JqW3Byb3BlcnR5Lm5hbWVdID0gcHJvcGVydHkudmFsdWU7XG4gICAgICAgIHRoaXMua2V5ZnJhbWUocHJvcGVydHkubWlsbGlzZWNvbmQsIG9iaiwgcHJvcGVydHkuZWFzaW5nKTtcbiAgICAgIH0sIHRoaXMpO1xuICAgIH0sIHRoaXMpO1xuICB9O1xuXG59KTtcblxucmVrYXBpTW9kdWxlcy5wdXNoKGZ1bmN0aW9uIChjb250ZXh0KSB7XG5cbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBERUZBVUxUX0VBU0lORyA9ICdsaW5lYXInO1xuICB2YXIgUmVrYXBpID0gY29udGV4dC5SZWthcGk7XG4gIHZhciBUd2VlbmFibGUgPSBSZWthcGkuVHdlZW5hYmxlO1xuICB2YXIgXyA9IFJla2FwaS5fO1xuICB2YXIgaW50ZXJwb2xhdGUgPSBUd2VlbmFibGUuaW50ZXJwb2xhdGU7XG5cbiAgLyoqXG4gICAqIFJlcHJlc2VudHMgYW4gaW5kaXZpZHVhbCBjb21wb25lbnQgb2YgYW4gYWN0b3IncyBrZXlmcmFtZSBzdGF0ZS4gIEluIG1vc3RcbiAgICogY2FzZXMgeW91IHdvbid0IG5lZWQgdG8gZGVhbCB3aXRoIHRoaXMgb2JqZWN0IGRpcmVjdGx5LCBhcyB0aGVcbiAgICogYHt7I2Nyb3NzTGluayBcIlJla2FwaS5BY3RvclwifX17ey9jcm9zc0xpbmt9fWAgQVBJcyBhYnN0cmFjdCBhIGxvdCBvZiB3aGF0XG4gICAqIHRoaXMgT2JqZWN0IGRvZXMgYXdheSBmb3IgeW91LlxuICAgKiBAY2xhc3MgUmVrYXBpLktleWZyYW1lUHJvcGVydHlcbiAgICogQHBhcmFtIHtudW1iZXJ9IG1pbGxpc2Vjb25kIFdoZXJlIG9uIHRoZSBhbmltYXRpb24gdGltZWxpbmUgdGhpc1xuICAgKiBgUmVrYXBpLktleWZyYW1lUHJvcGVydHlgIGlzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgcHJvcGVydHkncyBuYW1lLCBzdWNoIGFzIGBcInhcImAgb3IgYFwib3BhY2l0eVwiYC5cbiAgICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfEZ1bmN0aW9ufSB2YWx1ZSBUaGUgdmFsdWUgdGhhdCB0aGlzXG4gICAqIGBSZWthcGkuS2V5ZnJhbWVQcm9wZXJ0eWAgcmVwcmVzZW50cy5cbiAgICogQHBhcmFtIHtzdHJpbmc9fSBvcHRfZWFzaW5nIFRoZSBlYXNpbmcgY3VydmUgYXQgd2hpY2ggdGhpc1xuICAgKiBgUmVrYXBpLktleWZyYW1lUHJvcGVydHlgIHNob3VsZCBiZSBhbmltYXRlZCB0by4gIERlZmF1bHRzIHRvIGBcImxpbmVhclwiYC5cbiAgICogQGNvbnN0cnVjdG9yXG4gICAqL1xuICBSZWthcGkuS2V5ZnJhbWVQcm9wZXJ0eSA9IGZ1bmN0aW9uIChtaWxsaXNlY29uZCwgbmFtZSwgdmFsdWUsIG9wdF9lYXNpbmcpIHtcbiAgICB0aGlzLmlkID0gXy51bmlxdWVJZCgna2V5ZnJhbWVQcm9wZXJ0eV8nKTtcbiAgICB0aGlzLm1pbGxpc2Vjb25kID0gbWlsbGlzZWNvbmQ7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5oYXNGaXJlZCA9IG51bGw7XG4gICAgdGhpcy5lYXNpbmcgPSBvcHRfZWFzaW5nIHx8IERFRkFVTFRfRUFTSU5HO1xuICAgIHRoaXMubmV4dFByb3BlcnR5ID0gbnVsbDtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICB2YXIgS2V5ZnJhbWVQcm9wZXJ0eSA9IFJla2FwaS5LZXlmcmFtZVByb3BlcnR5O1xuXG4gIC8qKlxuICAgKiBNb2RpZnkgdGhpcyBge3sjY3Jvc3NMaW5rIFwiUmVrYXBpLktleWZyYW1lUHJvcGVydHlcIn19e3svY3Jvc3NMaW5rfX1gLlxuICAgKiBAbWV0aG9kIG1vZGlmeVdpdGhcbiAgICogQHBhcmFtIHtPYmplY3R9IG5ld1Byb3BlcnRpZXMgVmFsaWQgdmFsdWVzIGNvcnJlc3BvbmQgdG8gYHt7I2Nyb3NzTGlua1xuICAgKiBcIlJla2FwaS5LZXlmcmFtZVByb3BlcnR5XCJ9fXt7L2Nyb3NzTGlua319YCdzIGNvbnN0cnVjdG9yIHBhcmFtZXRlcnM6XG4gICAqICAgLSBfX21pbGxpc2Vjb25kX18gKF9udW1iZXJfKVxuICAgKiAgIC0gX19uYW1lX18gKF9zdHJpbmdfKVxuICAgKiAgIC0gX192YWx1ZV9fIChfbnVtYmVyfHN0cmluZ18pXG4gICAqICAgLSBfX2Vhc2luZ19fIChfc3RyaW5nXylcbiAgICovXG4gIEtleWZyYW1lUHJvcGVydHkucHJvdG90eXBlLm1vZGlmeVdpdGggPSBmdW5jdGlvbiAobmV3UHJvcGVydGllcykge1xuICAgIHZhciBtb2RpZmllZFByb3BlcnRpZXMgPSB7fTtcblxuICAgIF8uZWFjaChbJ21pbGxpc2Vjb25kJywgJ2Vhc2luZycsICd2YWx1ZSddLCBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICBtb2RpZmllZFByb3BlcnRpZXNbc3RyXSA9IHR5cGVvZihuZXdQcm9wZXJ0aWVzW3N0cl0pID09PSAndW5kZWZpbmVkJyA/XG4gICAgICAgICAgdGhpc1tzdHJdIDogbmV3UHJvcGVydGllc1tzdHJdO1xuICAgIH0sIHRoaXMpO1xuXG4gICAgXy5leHRlbmQodGhpcywgbW9kaWZpZWRQcm9wZXJ0aWVzKTtcbiAgfTtcblxuICAvKipcbiAgICogQ2FsY3VsYXRlIHRoZSBtaWRwb2ludCBiZXR3ZWVuIHRoaXMgYHt7I2Nyb3NzTGlua1xuICAgKiBcIlJla2FwaS5LZXlmcmFtZVByb3BlcnR5XCJ9fXt7L2Nyb3NzTGlua319YCBhbmQgdGhlIG5leHQgYHt7I2Nyb3NzTGlua1xuICAgKiBcIlJla2FwaS5LZXlmcmFtZVByb3BlcnR5XCJ9fXt7L2Nyb3NzTGlua319YCBpbiBhIGB7eyNjcm9zc0xpbmtcbiAgICogXCJSZWthcGkuQWN0b3JcIn19e3svY3Jvc3NMaW5rfX1gJ3MgcHJvcGVydHkgdHJhY2suXG4gICAqXG4gICAqIEluIGp1c3QgYWJvdXQgYWxsIGNhc2VzLCBgbWlsbGlzZWNvbmRgIHNob3VsZCBiZSBiZXR3ZWVuIHRoaXNcbiAgICogYHt7I2Nyb3NzTGluayBcIlJla2FwaS5LZXlmcmFtZVByb3BlcnR5XCJ9fXt7L2Nyb3NzTGlua319YCdzIGBtaWxsaXNlY29uZGBcbiAgICogYW5kIHRoZSBgbWlsbGlzZWNvbmRgIG9mIHRoZSBge3sjY3Jvc3NMaW5rXG4gICAqIFwiUmVrYXBpLktleWZyYW1lUHJvcGVydHlcIn19e3svY3Jvc3NMaW5rfX1gIHRoYXQgZm9sbG93cyBpdCBpbiB0aGVcbiAgICogYW5pbWF0aW9uIHRpbWVsaW5lLCBidXQgaXQgaXMgdmFsaWQgdG8gc3BlY2lmeSBhIHZhbHVlIG91dHNpZGUgb2YgdGhpc1xuICAgKiByYW5nZS5cbiAgICogQG1ldGhvZCBnZXRWYWx1ZUF0XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBtaWxsaXNlY29uZCBUaGUgbWlsbGlzZWNvbmQgaW4gdGhlIGFuaW1hdGlvbiB0aW1lbGluZSB0b1xuICAgKiBjb21wdXRlIHRoZSBzdGF0ZSB2YWx1ZSBmb3IuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIEtleWZyYW1lUHJvcGVydHkucHJvdG90eXBlLmdldFZhbHVlQXQgPSBmdW5jdGlvbiAobWlsbGlzZWNvbmQpIHtcbiAgICB2YXIgZnJvbU9iaiA9IHt9O1xuICAgIHZhciB0b09iaiA9IHt9O1xuICAgIHZhciB2YWx1ZTtcbiAgICB2YXIgbmV4dFByb3BlcnR5ID0gdGhpcy5uZXh0UHJvcGVydHk7XG4gICAgdmFyIGNvcnJlY3RlZE1pbGxpc2Vjb25kID0gTWF0aC5tYXgobWlsbGlzZWNvbmQsIHRoaXMubWlsbGlzZWNvbmQpO1xuXG4gICAgaWYgKG5leHRQcm9wZXJ0eSkge1xuICAgICAgY29ycmVjdGVkTWlsbGlzZWNvbmQgPVxuICAgICAgTWF0aC5taW4oY29ycmVjdGVkTWlsbGlzZWNvbmQsIG5leHRQcm9wZXJ0eS5taWxsaXNlY29uZCk7XG5cbiAgICAgIGZyb21PYmpbdGhpcy5uYW1lXSA9IHRoaXMudmFsdWU7XG4gICAgICB0b09ialt0aGlzLm5hbWVdID0gbmV4dFByb3BlcnR5LnZhbHVlO1xuXG4gICAgICB2YXIgZGVsdGEgPSBuZXh0UHJvcGVydHkubWlsbGlzZWNvbmQgLSB0aGlzLm1pbGxpc2Vjb25kO1xuICAgICAgdmFyIGludGVycG9sYXRlZFBvc2l0aW9uID1cbiAgICAgIChjb3JyZWN0ZWRNaWxsaXNlY29uZCAtIHRoaXMubWlsbGlzZWNvbmQpIC8gZGVsdGE7XG5cbiAgICAgIHZhbHVlID0gaW50ZXJwb2xhdGUoZnJvbU9iaiwgdG9PYmosIGludGVycG9sYXRlZFBvc2l0aW9uLFxuICAgICAgICAgIG5leHRQcm9wZXJ0eS5lYXNpbmcpW3RoaXMubmFtZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG5cbiAgLyoqXG4gICAqIENyZWF0ZSB0aGUgcmVmZXJlbmNlIHRvIHRoZSBge3sjY3Jvc3NMaW5rXG4gICAqIFwiUmVrYXBpLktleWZyYW1lUHJvcGVydHlcIn19e3svY3Jvc3NMaW5rfX1gIHRoYXQgZm9sbG93cyB0aGlzIG9uZSBvbiBhXG4gICAqIGB7eyNjcm9zc0xpbmsgXCJSZWthcGkuQWN0b3JcIn19e3svY3Jvc3NMaW5rfX1gJ3MgcHJvcGVydHkgdHJhY2suICBQcm9wZXJ0eVxuICAgKiB0cmFja3MgYXJlIGp1c3QgbGlua2VkIGxpc3RzIG9mIGB7eyNjcm9zc0xpbmtcbiAgICogXCJSZWthcGkuS2V5ZnJhbWVQcm9wZXJ0eVwifX17ey9jcm9zc0xpbmt9fWBzLlxuICAgKiBAbWV0aG9kIGxpbmtUb05leHRcbiAgICogQHBhcmFtIHtSZWthcGkuS2V5ZnJhbWVQcm9wZXJ0eX0gbmV4dFByb3BlcnR5IFRoZSBge3sjY3Jvc3NMaW5rXG4gICAqIFwiUmVrYXBpLktleWZyYW1lUHJvcGVydHlcIn19e3svY3Jvc3NMaW5rfX1gIHRoYXQgc2hvdWxkIGltbWVkaWF0ZWx5IGZvbGxvd1xuICAgKiB0aGlzIG9uZSBvbiB0aGUgYW5pbWF0aW9uIHRpbWVsaW5lLlxuICAgKi9cbiAgS2V5ZnJhbWVQcm9wZXJ0eS5wcm90b3R5cGUubGlua1RvTmV4dCA9IGZ1bmN0aW9uIChuZXh0UHJvcGVydHkpIHtcbiAgICB0aGlzLm5leHRQcm9wZXJ0eSA9IG5leHRQcm9wZXJ0eSB8fCBudWxsO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEaXNhc3NvY2lhdGVzIHRoaXMgYHt7I2Nyb3NzTGlua1xuICAgKiBcIlJla2FwaS5LZXlmcmFtZVByb3BlcnR5XCJ9fXt7L2Nyb3NzTGlua319YCBmcm9tIGl0cyBge3sjY3Jvc3NMaW5rXG4gICAqIFwiUmVrYXBpLkFjdG9yXCJ9fXt7L2Nyb3NzTGlua319YC4gIFRoaXMgaXMgY2FsbGVkIGJ5IHZhcmlvdXMgYHt7I2Nyb3NzTGlua1xuICAgKiBcIlJla2FwaS5BY3RvclwifX17ey9jcm9zc0xpbmt9fWAgbWV0aG9kcyBhbmQgdHJpZ2dlcnMgdGhlIGB7eyNjcm9zc0xpbmtcbiAgICogXCJSZWthcGkvb246bWV0aG9kXCJ9fXJlbW92ZUtleWZyYW1lUHJvcGVydHl7ey9jcm9zc0xpbmt9fWAgZXZlbnQgb24gdGhlXG4gICAqIGFzc29jaWF0ZWQgYHt7I2Nyb3NzTGluayBcIlJla2FwaVwifX17ey9jcm9zc0xpbmt9fWAgaW5zdGFuY2UuXG4gICAqIEBtZXRob2QgZGV0YWNoXG4gICAqIEBjaGFpbmFibGVcbiAgICovXG4gIEtleWZyYW1lUHJvcGVydHkucHJvdG90eXBlLmRldGFjaCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYWN0b3IgPSB0aGlzLmFjdG9yO1xuICAgIGlmIChhY3Rvcikge1xuICAgICAgaWYgKGFjdG9yLnJla2FwaSkge1xuICAgICAgICBmaXJlRXZlbnQoYWN0b3IucmVrYXBpLCAncmVtb3ZlS2V5ZnJhbWVQcm9wZXJ0eScsIF8sIHRoaXMpO1xuICAgICAgICBkZWxldGUgYWN0b3IuX2tleWZyYW1lUHJvcGVydGllc1t0aGlzLmlkXTtcbiAgICAgICAgdGhpcy5hY3RvciA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIF9fW0V4YW1wbGVdKC4uLy4uLy4uLy4uL2RvY3MvZXhhbXBsZXMva2V5cHJvcF9leHBvcnRfcHJvcGVydHlfZGF0YS5odG1sKV9fXG4gICAqIEBtZXRob2QgZXhwb3J0UHJvcGVydHlEYXRhXG4gICAqIEByZXR1cm4ge09iamVjdH0gQSBzZXJpYWxpemFibGUgT2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIHRoaXNcbiAgICogYHt7I2Nyb3NzTGluayBcIlJla2FwaS5LZXlmcmFtZVByb3BlcnR5XCJ9fXt7L2Nyb3NzTGlua319YC5cbiAgICovXG4gIEtleWZyYW1lUHJvcGVydHkucHJvdG90eXBlLmV4cG9ydFByb3BlcnR5RGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgJ21pbGxpc2Vjb25kJzogdGhpcy5taWxsaXNlY29uZFxuICAgICAgLCduYW1lJzogdGhpcy5uYW1lXG4gICAgICAsJ3ZhbHVlJzogdGhpcy52YWx1ZVxuICAgICAgLCdlYXNpbmcnOiB0aGlzLmVhc2luZ1xuICAgIH07XG4gIH07XG5cbiAgLyohXG4gICAqIFdoZXRoZXIgb3Igbm90IHRoaXMgaXMgYSBmdW5jdGlvbiBrZXlmcmFtZSBhbmQgc2hvdWxkIGJlIGludm9rZWQgZm9yIHRoZVxuICAgKiBjdXJyZW50IGZyYW1lLiAgSGVscGVyIG1ldGhvZCBmb3IgUmVrYXBpLkFjdG9yLlxuICAgKiBAbWV0aG9kIHNob3VsZEludm9rZUZvck1pbGxpc2Vjb25kXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBLZXlmcmFtZVByb3BlcnR5LnByb3RvdHlwZS5zaG91bGRJbnZva2VGb3JNaWxsaXNlY29uZCA9XG4gICAgICBmdW5jdGlvbiAobWlsbGlzZWNvbmQpIHtcbiAgICByZXR1cm4gKG1pbGxpc2Vjb25kID49IHRoaXMubWlsbGlzZWNvbmQgJiZcbiAgICAgIHRoaXMubmFtZSA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgIXRoaXMuaGFzRmlyZWQpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBc3N1bWluZyB0aGlzIGlzIGEgZnVuY3Rpb24ga2V5ZnJhbWUsIGNhbGwgdGhlIGZ1bmN0aW9uLlxuICAgKiBAbWV0aG9kIGludm9rZVxuICAgKiBAcmV0dXJuIHsqfSBXaGF0ZXZlciB2YWx1ZSBpcyByZXR1cm5lZCBmcm9tIHRoZSBrZXlmcmFtZSBmdW5jdGlvbiB0aGF0IHdhc1xuICAgKiBzZXQgZm9yIHRoaXMgYHt7I2Nyb3NzTGluayBcIlJla2FwaS5LZXlmcmFtZVByb3BlcnR5XCJ9fXt7L2Nyb3NzTGlua319YC5cbiAgICovXG4gIEtleWZyYW1lUHJvcGVydHkucHJvdG90eXBlLmludm9rZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZHJpZnQgPSB0aGlzLmFjdG9yLnJla2FwaS5fbG9vcFBvc2l0aW9uIC0gdGhpcy5taWxsaXNlY29uZDtcbiAgICB2YXIgcmV0dXJuVmFsdWUgPSB0aGlzLnZhbHVlLmNhbGwodGhpcy5hY3RvciwgZHJpZnQpO1xuICAgIHRoaXMuaGFzRmlyZWQgPSB0cnVlO1xuICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbiAgfTtcblxufSk7XG5cbnJla2FwaU1vZHVsZXMucHVzaChmdW5jdGlvbiAoY29udGV4dCkge1xuXG4gICd1c2Ugc3RyaWN0JztcblxuICB2YXIgUmVrYXBpID0gY29udGV4dC5SZWthcGk7XG4gIHZhciBfID0gUmVrYXBpLl87XG5cbiAgLy8gUFJJVkFURSBVVElMSVRZIEZVTkNUSU9OU1xuICAvL1xuXG4gIC8qIVxuICAgKiBHZXRzIChhbmQgb3B0aW9uYWxseSBzZXRzKSBoZWlnaHQgb3Igd2lkdGggb24gYSBjYW52YXMuXG4gICAqIEBwYXJhbSB7SFRNTENhbnZhc30gY2FudmFzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBoZWlnaHRPcldpZHRoIFRoZSBkaW1lbnNpb24gKGVpdGhlciBcImhlaWdodFwiIG9yIFwid2lkdGhcIilcbiAgICogdG8gZ2V0IG9yIHNldC5cbiAgICogQHBhcmFtIHtudW1iZXI9fSBvcHRfbmV3U2l6ZSBUaGUgbmV3IHZhbHVlIHRvIHNldCBmb3IgYGRpbWVuc2lvbmAuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGZ1bmN0aW9uIGRpbWVuc2lvbiAoY2FudmFzLCBoZWlnaHRPcldpZHRoLCBvcHRfbmV3U2l6ZSkge1xuICAgIGlmICh0eXBlb2Ygb3B0X25ld1NpemUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjYW52YXNbaGVpZ2h0T3JXaWR0aF0gPSBvcHRfbmV3U2l6ZTtcbiAgICAgIGNhbnZhcy5zdHlsZVtoZWlnaHRPcldpZHRoXSA9IG9wdF9uZXdTaXplICsgJ3B4JztcbiAgICB9XG5cbiAgICByZXR1cm4gY2FudmFzW2hlaWdodE9yV2lkdGhdO1xuICB9XG5cbiAgLyohXG4gICAqIFRha2VzIGNhcmUgb2Ygc29tZSBwcmUtcmVuZGVyaW5nIHRhc2tzIGZvciBjYW52YXMgYW5pbWF0aW9ucy5cbiAgICogQHBhcmFtIHtSZWthcGkuQ2FudmFzUmVuZGVyZXJ9IGNhbnZhc1JlbmRlcmVyXG4gICAqL1xuICBmdW5jdGlvbiBiZWZvcmVSZW5kZXIgKGNhbnZhc1JlbmRlcmVyKSB7XG4gICAgY2FudmFzUmVuZGVyZXIuY2xlYXIoKTtcbiAgfVxuXG4gIC8qIVxuICAgKiBSZW5kZXIgYWxsIHRoZSBgQWN0b3JgcyBhdCB3aGF0ZXZlciBwb3NpdGlvbiB0aGV5IGFyZSBjdXJyZW50bHkgaW4uXG4gICAqIEBwYXJhbSB7UmVrYXBpfVxuICAgKiBAcGFyYW0ge1Jla2FwaS5DYW52YXNSZW5kZXJlcn0gY2FudmFzUmVuZGVyZXJcbiAgICogQHJldHVybiB7UmVrYXBpfVxuICAgKi9cbiAgZnVuY3Rpb24gcmVuZGVyIChyZWthcGksIGNhbnZhc1JlbmRlcmVyKSB7XG4gICAgZmlyZUV2ZW50KHJla2FwaSwgJ2JlZm9yZVJlbmRlcicsIF8pO1xuICAgIHZhciByZW5kZXJPcmRlclNvcnRlciA9IGNhbnZhc1JlbmRlcmVyLl9yZW5kZXJPcmRlclNvcnRlcjtcbiAgICB2YXIgbGVuID0gY2FudmFzUmVuZGVyZXIuX3JlbmRlck9yZGVyLmxlbmd0aDtcbiAgICB2YXIgcmVuZGVyT3JkZXI7XG5cbiAgICBpZiAocmVuZGVyT3JkZXJTb3J0ZXIpIHtcbiAgICAgIHZhciBvcmRlcmVkQWN0b3JzID1cbiAgICAgICAgICBfLnNvcnRCeShjYW52YXNSZW5kZXJlci5fY2FudmFzQWN0b3JzLCByZW5kZXJPcmRlclNvcnRlcik7XG4gICAgICByZW5kZXJPcmRlciA9IF8ucGx1Y2sob3JkZXJlZEFjdG9ycywgJ2lkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbmRlck9yZGVyID0gY2FudmFzUmVuZGVyZXIuX3JlbmRlck9yZGVyO1xuICAgIH1cblxuICAgIHZhciBjdXJyZW50QWN0b3I7XG4gICAgdmFyIGNhbnZhc0FjdG9ycyA9IGNhbnZhc1JlbmRlcmVyLl9jYW52YXNBY3RvcnM7XG5cbiAgICB2YXIgaTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGN1cnJlbnRBY3RvciA9IGNhbnZhc0FjdG9yc1tyZW5kZXJPcmRlcltpXV07XG4gICAgICBjdXJyZW50QWN0b3IucmVuZGVyKGN1cnJlbnRBY3Rvci5jb250ZXh0LCBjdXJyZW50QWN0b3IuZ2V0KCkpO1xuICAgIH1cbiAgICBmaXJlRXZlbnQocmVrYXBpLCAnYWZ0ZXJSZW5kZXInLCBfKTtcblxuICAgIHJldHVybiByZWthcGk7XG4gIH1cblxuICAvKiFcbiAgICogQHBhcmFtIHtSZWthcGkuQWN0b3J9IGFjdG9yXG4gICAqIEBwYXJhbSB7UmVrYXBpLkNhbnZhc1JlbmRlcmVyfSBjYW52YXNSZW5kZXJlclxuICAgKi9cbiAgZnVuY3Rpb24gYWRkQWN0b3IgKGFjdG9yLCBjYW52YXNSZW5kZXJlcikge1xuICAgIGNhbnZhc1JlbmRlcmVyLl9yZW5kZXJPcmRlci5wdXNoKGFjdG9yLmlkKTtcbiAgICBjYW52YXNSZW5kZXJlci5fY2FudmFzQWN0b3JzW2FjdG9yLmlkXSA9IGFjdG9yO1xuICB9XG5cbiAgLyohXG4gICAqIEBwYXJhbSB7UmVrYXBpLkFjdG9yfSBhY3RvclxuICAgKiBAcGFyYW0ge1Jla2FwaS5DYW52YXNSZW5kZXJlcn0gY2FudmFzUmVuZGVyZXJcbiAgICovXG4gIGZ1bmN0aW9uIHJlbW92ZUFjdG9yIChhY3RvciwgY2FudmFzUmVuZGVyZXIpIHtcbiAgICBjYW52YXNSZW5kZXJlci5fcmVuZGVyT3JkZXIgPSBfLndpdGhvdXQoY2FudmFzUmVuZGVyZXIuX3JlbmRlck9yZGVyLCBhY3Rvci5pZCk7XG4gICAgZGVsZXRlIGNhbnZhc1JlbmRlcmVyLl9jYW52YXNBY3RvcnNbYWN0b3IuaWRdO1xuICB9XG5cbiAgLyohXG4gICAqIFNldHMgdXAgYW4gaW5zdGFuY2Ugb2YgQ2FudmFzUmVuZGVyZXIgYW5kIGF0dGFjaGVzIGl0IHRvIGEgYFJla2FwaWBcbiAgICogaW5zdGFuY2UuICBBbHNvIGF1Z21lbnRzIHRoZSBSZWthcGkgaW5zdGFuY2Ugd2l0aCBjYW52YXMtc3BlY2lmaWNcbiAgICogZnVuY3Rpb25zLlxuICAgKiBAcGFyYW0ge1Jla2FwaX0gcmVrYXBpXG4gICAqL1xuICBSZWthcGkuX3JlbmRlcmVySW5pdEhvb2suY2FudmFzID0gZnVuY3Rpb24gKHJla2FwaSkge1xuICAgIGlmICh0eXBlb2YgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICAhKHJla2FwaS5jb250ZXh0IGluc3RhbmNlb2YgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHJla2FwaS5yZW5kZXJlciA9IG5ldyBDYW52YXNSZW5kZXJlcihyZWthcGkpO1xuICB9O1xuXG4gIC8vIENBTlZBUyBSRU5ERVJFUiBPQkpFQ1RcbiAgLy9cblxuICAvKipcbiAgICogWW91IGNhbiB1c2UgUmVrYXBpIHRvIHJlbmRlciBhbmltYXRpb25zIHRvIGFuIEhUTUw1IGA8Y2FudmFzPmAuICBUbyBkbyBzbyxcbiAgICoganVzdCBwcm92aWRlIGFcbiAgICogW2BDYW52YXNSZW5kZXJpbmdDb250ZXh0MkRgXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKVxuICAgKiBpbnN0YW5jZSB0byB0aGUgYHt7I2Nyb3NzTGluayBcIlJla2FwaVwifX17ey9jcm9zc0xpbmt9fWAgY29uc3RydWN0b3IgdG9cbiAgICogYXV0b21hdGljYWxseSBzZXQgdXAgdGhlIHJlbmRlcmVyOlxuICAgKlxuICAgKiAgICAgdmFyIGNvbnRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKS5nZXRDb250ZXh0KCcyZCcpO1xuICAgKiAgICAgdmFyIHJla2FwaSA9IG5ldyBSZWthcGkoY29udGV4dCk7XG4gICAqICAgICByZWthcGkucmVuZGVyZXIgaW5zdGFuY2VvZiBSZWthcGkuQ2FudmFzUmVuZGVyZXI7IC8vIHRydWVcbiAgICpcbiAgICogYFJla2FwaS5DYW52YXNSZW5kZXJlcmAgYWRkcyBzb21lIGNhbnZhcy1zcGVjaWZpYyBldmVudHMgeW91IGNhbiBiaW5kIHRvXG4gICAqIHdpdGggYHt7I2Nyb3NzTGluayBcIlJla2FwaS9vbjptZXRob2RcIn19e3svY3Jvc3NMaW5rfX1gIChhbmQgdW5iaW5kIGZyb21cbiAgICogd2l0aCBge3sjY3Jvc3NMaW5rIFwiUmVrYXBpL29mZjptZXRob2RcIn19e3svY3Jvc3NMaW5rfX1gOlxuICAgKlxuICAgKiAgLSBfX2JlZm9yZVJlbmRlcl9fOiBGaXJlcyBqdXN0IGJlZm9yZSBhbiBhY3RvciBpcyByZW5kZXJlZCB0byB0aGUgY2FudmFzLlxuICAgKiAgLSBfX2FmdGVyUmVuZGVyX186IEZpcmVzIGp1c3QgYWZ0ZXIgYW4gYWN0b3IgaXMgcmVuZGVyZWQgdG8gdGhlIGNhbnZhcy5cbiAgICpcbiAgICogX19Ob3RlX186IGBSZWthcGkuQ2FudmFzUmVuZGVyZXJgIGlzIGFkZGVkIHRvIHRoZSBge3sjY3Jvc3NMaW5rXG4gICAqIFwiUmVrYXBpXCJ9fXt7L2Nyb3NzTGlua319YCBpbnN0YW5jZSBhdXRvbWF0aWNhbGx5IGFzIGB0aGlzLnJlbmRlcmVyYCwgdGhlcmVcbiAgICogaXMgbm8gcmVhc29uIHRvIGNhbGwgdGhlIGNvbnN0cnVjdG9yIHlvdXJzZWxmIGluIG1vc3QgY2FzZXMuXG4gICAqXG4gICAqICMjIE11bHRpcGxlIHJlbmRlcmVyc1xuICAgKlxuICAgKiBSZWthcGkgc3VwcG9ydHMgbXVsdGlwbGUgcmVuZGVyZXJzIHBlciBpbnN0YW5jZS4gIERvIGRvIHRoaXMsIHlvdSBtdXN0IG5vdFxuICAgKiBwcm92aWRlIGFcbiAgICogW2BDYW52YXNSZW5kZXJpbmdDb250ZXh0MkRgXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKVxuICAgKiB0byB0aGUgYHt7I2Nyb3NzTGluayBcIlJla2FwaVwifX17ey9jcm9zc0xpbmt9fWAgY29uc3RydWN0b3IsIHlvdSBtdXN0XG4gICAqIGluc3RlYWQgaW5pdGlhbGl6ZSB0aGUgcmVuZGVyZXIgeW91cnNlbGYuICBUaGVcbiAgICogW2BDYW52YXNSZW5kZXJpbmdDb250ZXh0MkRgXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKVxuICAgKiB0aGF0IHdvdWxkIGhhdmUgYmVlbiBwcm92aWRlZCB0byB0aGUgYHt7I2Nyb3NzTGlua1xuICAgKiBcIlJla2FwaVwifX17ey9jcm9zc0xpbmt9fWAgY29uc3RydWN0b3IgaW5zdGVhZCBpcyBwcm92aWRlZCBhcyB0aGUgc2Vjb25kXG4gICAqIHBhcmFtZXRlciB0byBgUmVrYXBpLkNhbnZhc1JlbmRlcmVyYDpcbiAgICpcbiAgICpcbiAgICogICAgIHZhciBjYW52YXNDb250ZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzJykuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICpcbiAgICogICAgIC8vIE5vIGNvbnRleHQgZ2V0cyBwYXNzZWQgdG8gdGhlIFJla2FwaSBjb25zdHJ1Y3RvclxuICAgKiAgICAgdmFyIHJla2FwaSA9IG5ldyBSZWthcGkoKTtcbiAgICpcbiAgICogICAgIC8vIEluaXRpYWxpemUgUmVrYXBpLkNhbnZhc1JlbmRlcmVyIG1hbnVhbGx5IGFuZCBnaXZlIGl0IGFcbiAgICogICAgIC8vIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRC4gIFlvdSBjYW4gbmFtZSBpdCBhbnl0aGluZyB5b3Ugd2FudCBvbiB0aGVcbiAgICogICAgIC8vIFJla2FwaSBpbnN0YW5jZS5cbiAgICogICAgIHJla2FwaS5jYW52YXNSZW5kZXJlciA9XG4gICAqICAgICAgICAgbmV3IFJla2FwaS5DYW52YXNSZW5kZXJlcihyZWthcGksIGNhbnZhc0NvbnRleHQpO1xuICAgKiBAY2xhc3MgUmVrYXBpLkNhbnZhc1JlbmRlcmVyXG4gICAqIEBwYXJhbSB7UmVrYXBpfSByZWthcGlcbiAgICogQHBhcmFtIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ9fSBvcHRfY29udGV4dFxuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG4gIFJla2FwaS5DYW52YXNSZW5kZXJlciA9IGZ1bmN0aW9uIChyZWthcGksIG9wdF9jb250ZXh0KSB7XG4gICAgdGhpcy5yZWthcGkgPSByZWthcGk7XG4gICAgdGhpcy5jYW52YXNDb250ZXh0ID0gb3B0X2NvbnRleHQgfHwgcmVrYXBpLmNvbnRleHQ7XG4gICAgdGhpcy5fcmVuZGVyT3JkZXIgPSBbXTtcbiAgICB0aGlzLl9yZW5kZXJPcmRlclNvcnRlciA9IG51bGw7XG4gICAgdGhpcy5fY2FudmFzQWN0b3JzID0ge307XG5cbiAgICBfLmV4dGVuZChyZWthcGkuX2V2ZW50cywge1xuICAgICAgJ2JlZm9yZVJlbmRlcic6IFtdXG4gICAgICAsJ2FmdGVyUmVuZGVyJzogW11cbiAgICB9KTtcblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHJla2FwaS5vbignYWZ0ZXJVcGRhdGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZW5kZXIocmVrYXBpLCBzZWxmKTtcbiAgICB9KTtcblxuICAgIHJla2FwaS5vbignYWRkQWN0b3InLCBmdW5jdGlvbiAocmVrYXBpLCBhY3Rvcikge1xuICAgICAgYWRkQWN0b3IoYWN0b3IsIHNlbGYpO1xuICAgIH0pO1xuXG4gICAgcmVrYXBpLm9uKCdyZW1vdmVBY3RvcicsIGZ1bmN0aW9uIChyZWthcGksIGFjdG9yKSB7XG4gICAgICByZW1vdmVBY3RvcihhY3Rvciwgc2VsZik7XG4gICAgfSk7XG5cbiAgICByZWthcGkub24oJ2JlZm9yZVJlbmRlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGJlZm9yZVJlbmRlcihzZWxmKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICB2YXIgQ2FudmFzUmVuZGVyZXIgPSBSZWthcGkuQ2FudmFzUmVuZGVyZXI7XG5cbiAgLyoqXG4gICAqIEdldCBhbmQgb3B0aW9uYWxseSBzZXQgdGhlIGhlaWdodCBvZiB0aGUgYXNzb2NpYXRlZCBgPGNhbnZhcz5gIGVsZW1lbnQuXG4gICAqIEBtZXRob2QgaGVpZ2h0XG4gICAqIEBwYXJhbSB7bnVtYmVyPX0gb3B0X2hlaWdodCBUaGUgaGVpZ2h0IHRvIG9wdGlvbmFsbHkgc2V0LlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBDYW52YXNSZW5kZXJlci5wcm90b3R5cGUuaGVpZ2h0ID0gZnVuY3Rpb24gKG9wdF9oZWlnaHQpIHtcbiAgICByZXR1cm4gZGltZW5zaW9uKHRoaXMuY2FudmFzQ29udGV4dC5jYW52YXMsICdoZWlnaHQnLCBvcHRfaGVpZ2h0KTtcbiAgfTtcblxuICAvKipcbiAgICogR2V0IGFuZCBvcHRpb25hbGx5IHNldCB0aGUgd2lkdGggb2YgdGhlIGFzc29jaWF0ZWQgYDxjYW52YXM+YCBlbGVtZW50LlxuICAgKiBAbWV0aG9kIHdpZHRoXG4gICAqIEBwYXJhbSB7bnVtYmVyPX0gb3B0X3dpZHRoIFRoZSB3aWR0aCB0byBvcHRpb25hbGx5IHNldC5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgQ2FudmFzUmVuZGVyZXIucHJvdG90eXBlLndpZHRoID0gZnVuY3Rpb24gKG9wdF93aWR0aCkge1xuICAgIHJldHVybiBkaW1lbnNpb24odGhpcy5jYW52YXNDb250ZXh0LmNhbnZhcywgJ3dpZHRoJywgb3B0X3dpZHRoKTtcbiAgfTtcblxuICAvKipcbiAgICogRXJhc2UgdGhlIGA8Y2FudmFzPmAuXG4gICAqIEBtZXRob2QgY2xlYXJcbiAgICogQHJldHVybiB7UmVrYXBpfVxuICAgKi9cbiAgQ2FudmFzUmVuZGVyZXIucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuY2FudmFzQ29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy53aWR0aCgpLCB0aGlzLmhlaWdodCgpKTtcblxuICAgIHJldHVybiB0aGlzLnJla2FwaTtcbiAgfTtcblxuICAvKipcbiAgICogTW92ZSBhbiBhY3RvciBhcm91bmQgd2l0aGluIHRoZSByZW5kZXIgb3JkZXIgbGlzdC4gIEVhY2ggYWN0b3IgaXMgcmVuZGVyZWRcbiAgICogaW4gb3JkZXIgb2YgaXRzIGxheWVyIChsYXllcnMgYW5kIGFjdG9ycyBoYXZlIGEgMToxIHJlbGF0aW9uc2hpcCkuICBUaGVcbiAgICogbGF0ZXIgYW4gYWN0b3IgaXMgYWRkZWQgdG8gYW4gYW5pbWF0aW9uICh3aXRoIGB7eyNjcm9zc0xpbmtcbiAgICogXCJSZWthcGkvYWRkQWN0b3I6bWV0aG9kXCJ9fXt7L2Nyb3NzTGlua319YCksIHRoZSBoaWdoZXIgaXRzIGxheWVyLiAgTG93ZXJcbiAgICogbGF5ZXJzIChzdGFydGluZyB3aXRoIDApIGFyZSByZW5kZXJlZCBlYXJsaWVyLlxuICAgKlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBoYXMgbm8gZWZmZWN0IGlmIGFuIG9yZGVyIGZ1bmN0aW9uIGlzIHNldCB3aXRoIGB7eyNjcm9zc0xpbmtcbiAgICogXCJSZWthcGkuQ2FudmFzUmVuZGVyZXIvc2V0T3JkZXJGdW5jdGlvbjptZXRob2RcIn19e3svY3Jvc3NMaW5rfX1gLlxuICAgKlxuICAgKiBfX1tFeGFtcGxlXSguLi8uLi8uLi8uLi9kb2NzL2V4YW1wbGVzL2NhbnZhc19tb3ZlX2FjdG9yX3RvX2xheWVyLmh0bWwpX19cbiAgICogQG1ldGhvZCBtb3ZlQWN0b3JUb0xheWVyXG4gICAqIEBwYXJhbSB7UmVrYXBpLkFjdG9yfSBhY3RvclxuICAgKiBAcGFyYW0ge251bWJlcn0gbGF5ZXIgVGhpcyBzaG91bGQgYmUgd2l0aGluIGAwYCBhbmQgdGhlIHRvdGFsIG51bWJlciBvZlxuICAgKiBhY3RvcnMgaW4gdGhlIGFuaW1hdGlvbi4gIFRoYXQgbnVtYmVyIGNhbiBiZSBmb3VuZCB3aXRoIGB7eyNjcm9zc0xpbmtcbiAgICogXCJSZWthcGkvZ2V0QWN0b3JDb3VudDptZXRob2RcIn19e3svY3Jvc3NMaW5rfX1gLlxuICAgKiBAcmV0dXJuIHtSZWthcGkuQWN0b3J9XG4gICAqL1xuICBDYW52YXNSZW5kZXJlci5wcm90b3R5cGUubW92ZUFjdG9yVG9MYXllciA9IGZ1bmN0aW9uIChhY3RvciwgbGF5ZXIpIHtcbiAgICBpZiAobGF5ZXIgPCB0aGlzLl9yZW5kZXJPcmRlci5sZW5ndGggJiYgbGF5ZXIgPiAtMSkge1xuICAgICAgdGhpcy5fcmVuZGVyT3JkZXIgPSBfLndpdGhvdXQodGhpcy5fcmVuZGVyT3JkZXIsIGFjdG9yLmlkKTtcbiAgICAgIHRoaXMuX3JlbmRlck9yZGVyLnNwbGljZShsYXllciwgMCwgYWN0b3IuaWQpO1xuICAgIH1cblxuICAgIHJldHVybiBhY3RvcjtcbiAgfTtcblxuICAvKipcbiAgICogU2V0IGEgZnVuY3Rpb24gdGhhdCBkZWZpbmVzIHRoZSByZW5kZXIgb3JkZXIgb2YgdGhlIGFjdG9ycy4gIFRoaXMgaXNcbiAgICogY2FsbGVkIGVhY2ggZnJhbWUgYmVmb3JlIHRoZSBhY3RvcnMgYXJlIHJlbmRlcmVkLlxuICAgKlxuICAgKiBUaGUgZm9sbG93aW5nIGV4YW1wbGUgYXNzdW1lcyB0aGF0IGFsbCBhY3RvcnMgYXJlIGNpcmNsZXMgdGhhdCBoYXZlIGFcbiAgICogYHJhZGl1c2AgYHt7I2Nyb3NzTGluayBcIlJla2FwaS5LZXlmcmFtZVByb3BlcnR5XCJ9fXt7L2Nyb3NzTGlua319YC4gIFRoZVxuICAgKiBjaXJjbGVzIHdpbGwgYmUgcmVuZGVyZWQgaW4gb3JkZXIgb2YgdGhlIHZhbHVlIG9mIHRoZWlyIGByYWRpdXNgLCBmcm9tXG4gICAqIHNtYWxsZXN0IHRvIGxhcmdlc3QuICBUaGlzIGhhcyB0aGUgZWZmZWN0IG9mIGxheWVyaW5nIGxhcmdlciBjaXJjbGVzIG9uXG4gICAqIHRvcCBvZiBzbWFsbGVyIGNpcmNsZXMsIHRodXMgZ2l2aW5nIGEgc2Vuc2Ugb2YgcGVyc3BlY3RpdmUuXG4gICAqXG4gICAqIElmIGEgcmVuZGVyIG9yZGVyIGZ1bmN0aW9uIGlzIHNwZWNpZmllZCwgYHt7I2Nyb3NzTGlua1xuICAgKiBcIlJla2FwaS5DYW52YXNSZW5kZXJlci9tb3ZlQWN0b3JUb0xheWVyOm1ldGhvZFwifX17ey9jcm9zc0xpbmt9fWAgd2lsbCBoYXZlXG4gICAqIG5vIGVmZmVjdC5cbiAgICpcbiAgICogICAgIHJla2FwaS5yZW5kZXJlci5zZXRPcmRlckZ1bmN0aW9uKGZ1bmN0aW9uIChhY3Rvcikge1xuICAgKiAgICAgICByZXR1cm4gYWN0b3IuZ2V0KCkucmFkaXVzO1xuICAgKiAgICAgfSk7XG4gICAqIF9fW0V4YW1wbGVdKC4uLy4uLy4uLy4uL2RvY3MvZXhhbXBsZXMvY2FudmFzX3NldF9vcmRlcl9mdW5jdGlvbi5odG1sKV9fXG4gICAqIEBtZXRob2Qgc2V0T3JkZXJGdW5jdGlvblxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKFJla2FwaS5BY3Rvcil9IHNvcnRGdW5jdGlvblxuICAgKiBAcmV0dXJuIHtSZWthcGl9XG4gICAqL1xuICBDYW52YXNSZW5kZXJlci5wcm90b3R5cGUuc2V0T3JkZXJGdW5jdGlvbiA9IGZ1bmN0aW9uIChzb3J0RnVuY3Rpb24pIHtcbiAgICB0aGlzLl9yZW5kZXJPcmRlclNvcnRlciA9IHNvcnRGdW5jdGlvbjtcbiAgICByZXR1cm4gdGhpcy5yZWthcGk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgb3JkZXIgZnVuY3Rpb24gc2V0IGJ5IGB7eyNjcm9zc0xpbmtcbiAgICogXCJSZWthcGkuQ2FudmFzUmVuZGVyZXIvc2V0T3JkZXJGdW5jdGlvbjptZXRob2RcIn19e3svY3Jvc3NMaW5rfX1gLiAgVGhlXG4gICAqIHJlbmRlciBvcmRlciBkZWZhdWx0cyBiYWNrIHRvIHRoZSBvcmRlciBpbiB3aGljaCB0aGUgYWN0b3JzIHdlcmUgYWRkZWQgdG9cbiAgICogdGhlIGFuaW1hdGlvbi5cbiAgICpcbiAgICogX19bRXhhbXBsZV0oLi4vLi4vLi4vLi4vZG9jcy9leGFtcGxlcy9jYW52YXNfdW5zZXRfb3JkZXJfZnVuY3Rpb24uaHRtbClfX1xuICAgKiBAbWV0aG9kIHVuc2V0T3JkZXJGdW5jdGlvblxuICAgKiBAcmV0dXJuIHtSZWthcGl9XG4gICAqL1xuICBDYW52YXNSZW5kZXJlci5wcm90b3R5cGUudW5zZXRPcmRlckZ1bmN0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX3JlbmRlck9yZGVyU29ydGVyID0gbnVsbDtcbiAgICByZXR1cm4gdGhpcy5yZWthcGk7XG4gIH07XG5cbn0pO1xuXG5yZWthcGlNb2R1bGVzLnB1c2goZnVuY3Rpb24gKGNvbnRleHQpIHtcblxuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIFJla2FwaSA9IGNvbnRleHQuUmVrYXBpO1xuICB2YXIgXyA9IFJla2FwaS5fO1xuICB2YXIgbm93ID0gUmVrYXBpLlR3ZWVuYWJsZS5ub3c7XG4gIHZhciB2ZW5kb3JUcmFuc2Zvcm1zID0gW1xuICAgICd0cmFuc2Zvcm0nXG4gICAgLCd3ZWJraXRUcmFuc2Zvcm0nXG4gICAgLCdNb3pUcmFuc2Zvcm0nXG4gICAgLCdvVHJhbnNmb3JtJ1xuICAgICwnbXNUcmFuc2Zvcm0nXTtcbiAgdmFyIHRyYW5zZm9ybUZ1bmN0aW9ucyA9IFtcbiAgICAndHJhbnNsYXRlWCcsXG4gICAgJ3RyYW5zbGF0ZVknLFxuICAgICd0cmFuc2xhdGVaJyxcbiAgICAnc2NhbGUnLFxuICAgICdzY2FsZVgnLFxuICAgICdzY2FsZVknLFxuICAgICdyb3RhdGUnLFxuICAgICdza2V3WCcsXG4gICAgJ3NrZXdZJ107XG5cbiAgLy8gQ09OU1RBTlRTXG4gIC8vXG5cbiAgLy8gVGhlIHRpbWVyIHRvIHJlbW92ZSBhbiBpbmplY3RlZCBzdHlsZSBpc24ndCBsaWtlbHkgdG8gbWF0Y2ggdGhlIGFjdHVhbFxuICAvLyBsZW5ndGggb2YgdGhlIENTUyBhbmltYXRpb24sIHNvIGdpdmUgaXQgc29tZSBleHRyYSB0aW1lIHRvIGNvbXBsZXRlIHNvIGl0XG4gIC8vIGRvZXNuJ3QgY3V0IG9mZiB0aGUgZW5kLlxuICB2YXIgSU5KRUNURURfU1RZTEVfUkVNT1ZBTF9CVUZGRVJfTVMgPSAyNTA7XG5cbiAgLy8gUFJJVkFURSBVVElMSVRZIEZVTkNUSU9OU1xuICAvL1xuXG4gIC8qIVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZm9ybWF0dGVyXG4gICAqIEBwYXJhbSB7W3N0cmluZ119IGFyZ3NcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdmFyIHByaW50ZiA9IGZ1bmN0aW9uIChmb3JtYXR0ZXIsIGFyZ3MpIHtcbiAgICB2YXIgY29tcG9zZWRTdHIgPSBmb3JtYXR0ZXI7XG4gICAgXy5lYWNoKGFyZ3MsIGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgIGNvbXBvc2VkU3RyID0gY29tcG9zZWRTdHIucmVwbGFjZSgnJXMnLCBhcmcpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbXBvc2VkU3RyO1xuICB9O1xuXG4gIC8qIVxuICAgKiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zODg2MTA2XG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXJcbiAgICovXG4gIGZ1bmN0aW9uIGlzSW50IChudW1iZXIpIHtcbiAgICByZXR1cm4gbnVtYmVyICUgMSA9PT0gMDtcbiAgfVxuXG4gIC8qIVxuICAgKiBAcGFyYW0ge1Jla2FwaX0gcmVrYXBpXG4gICAqL1xuICBSZWthcGkuX3JlbmRlcmVySW5pdEhvb2suY3NzQW5pbWF0ZSA9IGZ1bmN0aW9uIChyZWthcGkpIHtcbiAgICAvLyBOb2RlLm5vZGVUeXBlIDEgaXMgYW4gRUxFTUVOVF9OT0RFLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Ob2RlLm5vZGVUeXBlXG4gICAgaWYgKHJla2FwaS5jb250ZXh0Lm5vZGVUeXBlID09PSAxKSB7XG4gICAgICByZWthcGkucmVuZGVyZXIgPSBuZXcgRE9NUmVuZGVyZXIocmVrYXBpKTtcbiAgICB9XG4gIH07XG5cbiAgLyohXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGZ1bmN0aW9uIGdldFZlbmRvclByZWZpeCAoKSB7XG4gICAgdmFyIHN0eWxlID0gZG9jdW1lbnQuYm9keS5zdHlsZTtcblxuICAgIGlmICgnLXdlYmtpdC1hbmltYXRpb24nIGluIHN0eWxlKSB7XG4gICAgICByZXR1cm4gJ3dlYmtpdCc7XG4gICAgfSBlbHNlIGlmICgnLW1vei1hbmltYXRpb24nIGluIHN0eWxlKSB7XG4gICAgICByZXR1cm4gJ21vemlsbGEnO1xuICAgIH0gZWxzZSBpZiAoJy1tcy1hbmltYXRpb24nIGluIHN0eWxlKSB7XG4gICAgICByZXR1cm4gJ21pY3Jvc29mdCc7XG4gICAgfSBlbHNlIGlmICgnLW8tYW5pbWF0aW9uJyBpbiBzdHlsZSkge1xuICAgICAgcmV0dXJuICdvcGVyYSc7XG4gICAgfSBlbHNlIGlmICgnYW5pbWF0aW9uJyBpbiBzdHlsZSkge1xuICAgICAgcmV0dXJuICd3Myc7XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgdmFyIHN0eWxlSUQgPSAwO1xuICAvKiFcbiAgICogQHBhcmFtIHtSZWthcGl9IHJla2FwaVxuICAgKiBAcGFyYW0ge3N0cmluZ30gY3NzIFRoZSBjc3MgY29udGVudCB0aGF0IHRoZSA8c3R5bGU+IGVsZW1lbnQgc2hvdWxkIGhhdmUuXG4gICAqIEByZXR1cm4ge0hUTUxTdHlsZUVsZW1lbnR9IFRoZSB1bmlxdWUgSUQgb2YgdGhlIGluamVjdGVkIDxzdHlsZT4gZWxlbWVudC5cbiAgICovXG4gIGZ1bmN0aW9uIGluamVjdFN0eWxlIChyZWthcGksIGNzcykge1xuICAgIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgdmFyIGlkID0gJ3Jla2FwaS0nICsgc3R5bGVJRCsrO1xuICAgIHN0eWxlLmlkID0gaWQ7XG4gICAgc3R5bGUuaW5uZXJIVE1MID0gY3NzO1xuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgIGZvcmNlU3R5bGVSZXNldChyZWthcGkpO1xuXG4gICAgcmV0dXJuIHN0eWxlO1xuICB9XG5cbiAgLyohXG4gICAqIEZpeGVzIGEgcmVhbGx5IGJpemFycmUgaXNzdWUgdGhhdCBvbmx5IHNlZW1zIHRvIGFmZmVjdCBQcmVzdG8gYW5kIEJsaW5rLlxuICAgKiBJbiBzb21lIHNpdHVhdGlvbnMsIERPTSBub2RlcyB3aWxsIG5vdCBkZXRlY3QgZHluYW1pY2FsbHkgaW5qZWN0ZWQgPHN0eWxlPlxuICAgKiBlbGVtZW50cy4gIEV4cGxpY2l0bHkgcmUtaW5zZXJ0aW5nIERPTSBub2RlcyBzZWVtcyB0byBmaXggdGhlIGlzc3VlLiAgTm90XG4gICAqIHN1cmUgd2hhdCBjYXVzZXMgdGhpcyBpc3N1ZS4gIE5vdCBzdXJlIHdoeSB0aGlzIGZpeGVzIGl0LlxuICAgKlxuICAgKiBAcGFyYW0ge1Jla2FwaX0gcmVrYXBpXG4gICAqL1xuICBmdW5jdGlvbiBmb3JjZVN0eWxlUmVzZXQgKHJla2FwaSkge1xuICAgIHZhciBkdW1teURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgXy5lYWNoKHJla2FwaS5nZXRBbGxBY3RvcnMoKSwgZnVuY3Rpb24gKGFjdG9yKSB7XG4gICAgICBpZiAoYWN0b3IuY29udGV4dC5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgICB2YXIgYWN0b3JFbCA9IGFjdG9yLmNvbnRleHQ7XG4gICAgICAgIHZhciBhY3RvckVsUGFyZW50ID0gYWN0b3JFbC5wYXJlbnRFbGVtZW50O1xuXG4gICAgICAgIGFjdG9yRWxQYXJlbnQucmVwbGFjZUNoaWxkKGR1bW15RGl2LCBhY3RvckVsKTtcbiAgICAgICAgYWN0b3JFbFBhcmVudC5yZXBsYWNlQ2hpbGQoYWN0b3JFbCwgZHVtbXlEaXYpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZHVtbXlEaXYgPSBudWxsO1xuICB9XG5cbiAgLyohXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0eWxlTmFtZVxuICAgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IHN0eWxlVmFsdWVcbiAgICovXG4gIGZ1bmN0aW9uIHNldFN0eWxlIChlbGVtZW50LCBzdHlsZU5hbWUsIHN0eWxlVmFsdWUpIHtcbiAgICBlbGVtZW50LnN0eWxlW3N0eWxlTmFtZV0gPSBzdHlsZVZhbHVlO1xuICB9XG5cbiAgLyohXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIEEgdHJhbnNmb3JtIGZ1bmN0aW9uIG5hbWVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGZ1bmN0aW9uIGlzVHJhbnNmb3JtRnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gXy5jb250YWlucyh0cmFuc2Zvcm1GdW5jdGlvbnMsIG5hbWUpO1xuICB9XG5cbiAgLyohXG4gICAqIEJ1aWxkcyBhIGNvbmNhdGVuYXRlZCBzdHJpbmcgb2YgZ2l2ZW4gdHJhbnNmb3JtIHByb3BlcnR5IHZhbHVlcyBpbiBvcmRlci5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheS48c3RyaW5nPn0gb3JkZXJlZFRyYW5zZm9ybXMgQXJyYXkgb2Ygb3JkZXJlZCB0cmFuc2Zvcm1cbiAgICogICAgIGZ1bmN0aW9uIG5hbWVzXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB0cmFuc2Zvcm1Qcm9wZXJ0aWVzIFRyYW5zZm9ybSBwcm9wZXJ0aWVzIHRvIGJ1aWxkIHRvZ2V0aGVyXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGZ1bmN0aW9uIGJ1aWxkVHJhbnNmb3JtVmFsdWUgKG9yZGVyZWRUcmFuc2Zvcm1zLCB0cmFuc2Zvcm1Qcm9wZXJ0aWVzKSB7XG4gICAgdmFyIHRyYW5zZm9ybUNvbXBvbmVudHMgPSBbXTtcblxuICAgIF8uZWFjaChvcmRlcmVkVHJhbnNmb3JtcywgZnVuY3Rpb24oZnVuY3Rpb25OYW1lKSB7XG4gICAgICBpZiAodHJhbnNmb3JtUHJvcGVydGllc1tmdW5jdGlvbk5hbWVdKSB7XG4gICAgICAgIHRyYW5zZm9ybUNvbXBvbmVudHMucHVzaChmdW5jdGlvbk5hbWUgKyAnKCcgK1xuICAgICAgICAgIHRyYW5zZm9ybVByb3BlcnRpZXNbZnVuY3Rpb25OYW1lXSArICcpJyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdHJhbnNmb3JtQ29tcG9uZW50cy5qb2luKCcgJyk7XG4gIH1cblxuICAvKiFcbiAgICogU2V0cyB2YWx1ZSBmb3IgYWxsIHZlbmRvciBwcmVmaXhlZCB0cmFuc2Zvcm0gcHJvcGVydGllcyBvbiBhbiBlbGVtZW50XG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgVGhlIGFjdG9yJ3MgRE9NIGVsZW1lbnRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRyYW5zZm9ybVZhbHVlIFRoZSB0cmFuc2Zvcm0gc3R5bGUgdmFsdWVcbiAgICovXG4gIGZ1bmN0aW9uIHNldFRyYW5zZm9ybVN0eWxlcyAoZWxlbWVudCwgdHJhbnNmb3JtVmFsdWUpIHtcbiAgICBfLmVhY2godmVuZG9yVHJhbnNmb3JtcywgZnVuY3Rpb24ocHJlZml4ZWRUcmFuc2Zvcm0pIHtcbiAgICAgIHNldFN0eWxlKGVsZW1lbnQsIHByZWZpeGVkVHJhbnNmb3JtLCB0cmFuc2Zvcm1WYWx1ZSk7XG4gICAgfSk7XG4gIH1cblxuXG4gIC8qIVxuICAgKiBAcGFyYW0ge1Jla2FwaX0gcmVrYXBpXG4gICAqIEBwYXJhbSB7UmVrYXBpLkFjdG9yfSBhY3RvclxuICAgKi9cbiAgZnVuY3Rpb24gb25BZGRBY3RvciAocmVrYXBpLCBhY3Rvcikge1xuICAgIHZhciBhY3RvckVsZW1lbnQgPSBhY3Rvci5jb250ZXh0O1xuXG4gICAgaWYgKGFjdG9yRWxlbWVudC5ub2RlVHlwZSAhPT0gMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBjbGFzc05hbWUgPSBET01SZW5kZXJlci5nZXRBY3RvckNsYXNzTmFtZShhY3Rvcik7XG5cbiAgICAvLyBBZGQgdGhlIGNsYXNzIGlmIGl0J3Mgbm90IGFscmVhZHkgdGhlcmUuXG4gICAgLy8gVXNpbmcgY2xhc3NOYW1lIGluc3RlYWQgb2YgY2xhc3NMaXN0IHRvIG1ha2UgSUUgaGFwcHkuXG4gICAgaWYgKCFhY3RvckVsZW1lbnQuY2xhc3NOYW1lLm1hdGNoKGNsYXNzTmFtZSkpIHtcbiAgICAgIGFjdG9yRWxlbWVudC5jbGFzc05hbWUgKz0gJyAnICsgY2xhc3NOYW1lO1xuICAgIH1cblxuICAgIGFjdG9yLl90cmFuc2Zvcm1PcmRlciA9IHRyYW5zZm9ybUZ1bmN0aW9ucy5zbGljZSgwKTtcbiAgICBhY3Rvci5fYmVmb3JlS2V5ZnJhbWVQcm9wZXJ0eUludGVycG9sYXRlID0gYWN0b3JCZWZvcmVJbnRlcnBvbGF0ZTtcbiAgICBhY3Rvci5fYWZ0ZXJLZXlmcmFtZVByb3BlcnR5SW50ZXJwb2xhdGUgPSBhY3RvckFmdGVySW50ZXJwb2xhdGU7XG4gICAgYWN0b3IucmVuZGVyID0gXy5iaW5kKGFjdG9yUmVuZGVyLCBhY3RvciwgYWN0b3IpO1xuICAgIGFjdG9yLnRlYXJkb3duID0gXy5iaW5kKGFjdG9yVGVhcmRvd24sIGFjdG9yLCBhY3Rvcik7XG4gIH1cblxuICAvKiFcbiAgICogdHJhbnNmb3JtIHByb3BlcnRpZXMgbGlrZSB0cmFuc2xhdGUzZCBhbmQgcm90YXRlM2QgYnJlYWsgdGhlIGNhcmRpbmFsaXR5XG4gICAqIG9mIG11bHRpLWVhc2UgZWFzaW5nIHN0cmluZ3MsIGJlY2F1c2UgdGhlIFwiM1wiIGdldHMgdHJlYXRlZCBsaWtlIGFcbiAgICogdHdlZW5hYmxlIHZhbHVlLiAgVHJhbnNmb3JtIFwiM2QoXCIgdG8gXCJfX1RIUkVFRF9fXCIgdG8gcHJldmVudCB0aGlzLCBhbmRcbiAgICogdHJhbnNmb3JtIGl0IGJhY2sgaW4gX2FmdGVyS2V5ZnJhbWVQcm9wZXJ0eUludGVycG9sYXRlLlxuICAgKlxuICAgKiBAcGFyYW0ge1Jla2FwaS5LZXlmcmFtZVByb3BlcnR5fSBrZXlmcmFtZVByb3BlcnR5XG4gICAqL1xuICBmdW5jdGlvbiBhY3RvckJlZm9yZUludGVycG9sYXRlIChrZXlmcmFtZVByb3BlcnR5KSB7XG4gICAgaWYgKGtleWZyYW1lUHJvcGVydHkubmFtZSAhPT0gJ3RyYW5zZm9ybScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgdmFsdWUgPSBrZXlmcmFtZVByb3BlcnR5LnZhbHVlO1xuICAgIHZhciBuZXh0UHJvcCA9IGtleWZyYW1lUHJvcGVydHkubmV4dFByb3BlcnR5O1xuXG4gICAgaWYgKG5leHRQcm9wICYmIHZhbHVlLm1hdGNoKC8zZFxcKC9nKSkge1xuICAgICAga2V5ZnJhbWVQcm9wZXJ0eS52YWx1ZSA9IHZhbHVlLnJlcGxhY2UoLzNkXFwoL2csICdfX1RIUkVFRF9fJyk7XG4gICAgICBuZXh0UHJvcC52YWx1ZSA9IG5leHRQcm9wLnZhbHVlLnJlcGxhY2UoLzNkXFwoL2csICdfX1RIUkVFRF9fJyk7XG4gICAgfVxuICB9XG5cbiAgLyohXG4gICAqIEBwYXJhbSB7UmVrYXBpLktleWZyYW1lUHJvcGVydHl9IGtleWZyYW1lUHJvcGVydHlcbiAgICogQHBhcmFtIHtPYmplY3R9IGludGVycG9sYXRlZE9iamVjdFxuICAgKi9cbiAgZnVuY3Rpb24gYWN0b3JBZnRlckludGVycG9sYXRlIChrZXlmcmFtZVByb3BlcnR5LCBpbnRlcnBvbGF0ZWRPYmplY3QpIHtcbiAgICBpZiAoa2V5ZnJhbWVQcm9wZXJ0eS5uYW1lICE9PSAndHJhbnNmb3JtJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciB2YWx1ZSA9IGtleWZyYW1lUHJvcGVydHkudmFsdWU7XG4gICAgdmFyIG5leHRQcm9wID0ga2V5ZnJhbWVQcm9wZXJ0eS5uZXh0UHJvcGVydHk7XG5cbiAgICBpZiAobmV4dFByb3AgJiYgdmFsdWUubWF0Y2goL19fVEhSRUVEX18vZykpIHtcbiAgICAgIGtleWZyYW1lUHJvcGVydHkudmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9fX1RIUkVFRF9fL2csICczZCgnKTtcbiAgICAgIG5leHRQcm9wLnZhbHVlID0gbmV4dFByb3AudmFsdWUucmVwbGFjZSgvX19USFJFRURfXy9nLCAnM2QoJyk7XG4gICAgICB2YXIga2V5UHJvcE5hbWUgPSBrZXlmcmFtZVByb3BlcnR5Lm5hbWU7XG4gICAgICBpbnRlcnBvbGF0ZWRPYmplY3Rba2V5UHJvcE5hbWVdID1cbiAgICAgICAgICBpbnRlcnBvbGF0ZWRPYmplY3Rba2V5UHJvcE5hbWVdLnJlcGxhY2UoL19fVEhSRUVEX18vZywgJzNkKCcpO1xuICAgIH1cbiAgfVxuXG4gIC8qIVxuICAgKiBAcGFyYW0ge1Jla2FwaS5BY3Rvcn0gYWN0b3JcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gc3RhdGVcbiAgICovXG4gIGZ1bmN0aW9uIGFjdG9yUmVuZGVyIChhY3RvciwgZWxlbWVudCwgc3RhdGUpIHtcbiAgICB2YXIgcHJvcGVydHlOYW1lcyA9IF8ua2V5cyhzdGF0ZSk7XG4gICAgLy8gVE9ETzogIE9wdGltaXplIHRoZSBmb2xsb3dpbmcgY29kZSBzbyB0aGF0IHByb3BlcnR5TmFtZXMgaXMgbm90IGxvb3BlZFxuICAgIC8vIG92ZXIgdHdpY2UuXG4gICAgdmFyIHRyYW5zZm9ybUZ1bmN0aW9uTmFtZXMgPSBfLmZpbHRlcihwcm9wZXJ0eU5hbWVzLCBpc1RyYW5zZm9ybUZ1bmN0aW9uKTtcbiAgICB2YXIgb3RoZXJQcm9wZXJ0eU5hbWVzID0gXy5yZWplY3QocHJvcGVydHlOYW1lcywgaXNUcmFuc2Zvcm1GdW5jdGlvbik7XG4gICAgdmFyIG90aGVyUHJvcGVydGllcyA9IF8ucGljayhzdGF0ZSwgb3RoZXJQcm9wZXJ0eU5hbWVzKTtcblxuICAgIGlmICh0cmFuc2Zvcm1GdW5jdGlvbk5hbWVzLmxlbmd0aCkge1xuICAgICAgdmFyIHRyYW5zZm9ybVByb3BlcnRpZXMgPSBfLnBpY2soc3RhdGUsIHRyYW5zZm9ybUZ1bmN0aW9uTmFtZXMpO1xuICAgICAgdmFyIGJ1aWx0U3R5bGUgPSBidWlsZFRyYW5zZm9ybVZhbHVlKGFjdG9yLl90cmFuc2Zvcm1PcmRlcixcbiAgICAgICAgICB0cmFuc2Zvcm1Qcm9wZXJ0aWVzKTtcbiAgICAgIHNldFRyYW5zZm9ybVN0eWxlcyhlbGVtZW50LCBidWlsdFN0eWxlKTtcbiAgICB9IGVsc2UgaWYgKHN0YXRlLnRyYW5zZm9ybSkge1xuICAgICAgc2V0VHJhbnNmb3JtU3R5bGVzKGVsZW1lbnQsIHN0YXRlLnRyYW5zZm9ybSk7XG4gICAgfVxuXG4gICAgXy5lYWNoKG90aGVyUHJvcGVydGllcywgZnVuY3Rpb24gKHN0eWxlVmFsdWUsIHN0eWxlTmFtZSkge1xuICAgICAgc2V0U3R5bGUoZWxlbWVudCwgc3R5bGVOYW1lLCBzdHlsZVZhbHVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qIVxuICAgKiBAcGFyYW0ge1Jla2FwaS5BY3Rvcn0gYWN0b3JcbiAgICovXG4gIGZ1bmN0aW9uIGFjdG9yVGVhcmRvd24gKGFjdG9yKSB7XG4gICAgdmFyIGVsZW1lbnQgPSBhY3Rvci5jb250ZXh0O1xuICAgIHZhciBjbGFzc0xpc3QgPSBlbGVtZW50LmNsYXNzTmFtZS5tYXRjaCgvXFxTKy9nKTtcbiAgICB2YXIgc2FuaXRpemVkQ2xhc3NMaXN0ID1cbiAgICAgICAgXy53aXRob3V0KGNsYXNzTGlzdCwgRE9NUmVuZGVyZXIuZ2V0QWN0b3JDbGFzc05hbWUoYWN0b3IpKTtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IHNhbml0aXplZENsYXNzTGlzdC5qb2luKCcgJyk7XG4gIH1cblxuICAvLyBDU1MgUkVOREVSRVIgT0JKRUNUXG4gIC8vXG5cbiAgLyoqXG4gICAqIGBSZWthcGkuRE9NUmVuZGVyZXJgIGFsbG93cyB5b3UgdG8gYW5pbWF0ZSBET00gZWxlbWVudHMuICBUaGlzIGlzIGFjaGlldmVkXG4gICAqIGVpdGhlciBieSBicm93c2VyLWFjY2VsZXJhdGVkIFtDU1MgYEBrZXlmcmFtZWBcbiAgICogYW5pbWF0aW9uc10oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL0BrZXlmcmFtZXMpLFxuICAgKiBvciBieSB0cmFkaXRpb25hbCBpbmxpbmUgc3R5bGUgdXBkYXRlcyBvbiBldmVyeSBmcmFtZSAobGlrZSBob3dcbiAgICogW2BqUXVlcnkuZm4uYW5pbWF0ZWBdKGh0dHA6Ly9hcGkuanF1ZXJ5LmNvbS9hbmltYXRlLykgd29ya3MpLiAgQW5pbWF0aW9uc1xuICAgKiBhcmUgZGVmaW5lZCB3aXRoIHRoZSBzYW1lIEFQSSBpbiBlaXRoZXIgY2FzZSwgYnV0IHlvdSBjYW4gZ3JhY2VmdWxseSBmYWxsXG4gICAqIGJhY2sgdG8gdGhlIGlubGluZSBzdHlsZSBhcHByb2FjaCBpZiBDU1MgYEBrZXlmcmFtZWAgYW5pbWF0aW9ucyBhcmUgbm90XG4gICAqIHN1cHBvcnRlZCBieSB0aGUgYnJvd3NlciBvciBub3QgcHJlZmVycmVkLiAgVG8gcmVuZGVyIGFuaW1hdGlvbnMgd2l0aCB0aGVcbiAgICogRE9NLCBqdXN0IHN1cHBseSBhbnkgRE9NIGVsZW1lbnQgdG8gdGhlIGB7eyNjcm9zc0xpbmtcbiAgICogXCJSZWthcGlcIn19e3svY3Jvc3NMaW5rfX1gIGNvbnN0cnVjdG9yLiAgWW91IG1heSB1c2UgYGRvY3VtZW50LmJvZHlgLCBzaW5jZVxuICAgKiBpdCBpcyBnZW5lcmFsbHkgYWx3YXlzIGF2YWlsYWJsZTpcbiAgICpcbiAgICogICAgIHZhciByZWthcGkgPSBuZXcgUmVrYXBpKGRvY3VtZW50LmJvZHkpO1xuICAgKiAgICAgcmVrYXBpLnJlbmRlcmVyIGluc3RhbmNlb2YgUmVrYXBpLkRPTVJlbmRlcmVyOyAvLyB0cnVlXG4gICAqXG4gICAqIFRoZXJlIGFyZSBzZXBhcmF0ZSBBUElzIGZvciBwbGF5aW5nIGlubGluZSBzdHlsZSBhbmltYXRpb25zIGFuZCBDU1NcbiAgICogYEBrZXlmcmFtZWAgYW5pbWF0aW9ucy4gIEFkdmFudGFnZXMgb2YgcGxheWluZyBhbiBhbmltYXRpb24gd2l0aCBDU1NcbiAgICogYEBrZXlmcmFtZXNgOlxuICAgKlxuICAgKiAgIC0gU21vb3RoZXIgYW5pbWF0aW9ucyBpbiBuZXdlciBicm93c2Vycy5cbiAgICogICAtIFRoZSBKYXZhU2NyaXB0IHRocmVhZCBpcyBmcmVlZCBmcm9tIHBlcmZvcm1pbmcgYW5pbWF0aW9uIHVwZGF0ZXMsXG4gICAqICAgbWFraW5nIGl0IGF2YWlsYWJsZSBmb3Igb3RoZXIgbG9naWMuXG4gICAqXG4gICAqIERpc2FkdmFudGFnZXM6XG4gICAqXG4gICAqICAgLSBOb3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgQ1NTIGBAa2V5ZnJhbWVgIGFuaW1hdGlvbnMuXG4gICAqICAgLSBMaW1pdGVkIHBsYXliYWNrIGNvbnRyb2w6IFlvdSBjYW4gb25seSBwbGF5IGFuZCBzdG9wIGFuIGFuaW1hdGlvbiwgeW91XG4gICAqICAgY2Fubm90IGp1bXAgdG8gb3Igc3RhcnQgZnJvbSBhIHNwZWNpZmljIHBvaW50IGluIHRoZSB0aW1lbGluZS5cbiAgICogICAtIEdlbmVyYXRpbmcgdGhlIENTUyBmb3IgYEBrZXlmcmFtZWAgYW5pbWF0aW9ucyBjYW4gdGFrZSBhIG5vdGljZWFibGVcbiAgICogICBhbW91bnQgb2YgdGltZS4gIFRoaXMgYmxvY2tzIGFsbCBvdGhlciBsb2dpYywgaW5jbHVkaW5nIHJlbmRlcmluZywgc29cbiAgICogICB5b3UgbWF5IGhhdmUgdG8gYmUgY2xldmVyIHdpdGggaG93IHRvIHNwZW5kIHRoZSBjeWNsZXMgdG8gZG8gaXQuXG4gICAqICAgLSBObyBge3sjY3Jvc3NMaW5rIFwiUmVrYXBpL29uOm1ldGhvZFwifX1ldmVudHN7ey9jcm9zc0xpbmt9fWAgY2FuIGJlXG4gICAqICAgYm91bmQgdG8gQ1NTIGBAa2V5ZnJhbWVgIGFuaW1hdGlvbnMuXG4gICAqXG4gICAqIFNvLCB0aGUgcmVzdWx0cyBhcmUgYSBsaXR0bGUgbW9yZSBwcmVkaWN0YWJsZSBhbmQgZmxleGlibGUgd2l0aCBpbmxpbmVcbiAgICogc3R5bGUgYW5pbWF0aW9ucywgYnV0IENTUyBgQGtleWZyYW1lYCBtYXkgZ2l2ZSB5b3UgYmV0dGVyIHBlcmZvcm1hbmNlLlxuICAgKiBDaG9vc2Ugd2hpY2hldmVyIGFwcHJvYWNoIG1ha2VzIHRoZSBtb3N0IHNlbnNlIGZvciB5b3VyIG5lZWRzLlxuICAgKlxuICAgKiBgUmVrYXBpLkRPTVJlbmRlcmVyYCBjYW4gZ3JhY2VmdWxseSBmYWxsIGJhY2sgdG8gYW4gaW5saW5lIHN0eWxlIGFuaW1hdGlvblxuICAgKiBpZiBDU1MgYEBrZXlmcmFtZWAgYW5pbWF0aW9ucyBhcmUgbm90IHN1cHBvcnRlZCBieSB0aGUgYnJvd3NlcjpcbiAgICpcbiAgICogICAgICB2YXIgcmVrYXBpID0gbmV3IFJla2FwaShkb2N1bWVudC5ib2R5KTtcbiAgICpcbiAgICogICAgICAvLyBFYWNoIGFjdG9yIG5lZWRzIGEgcmVmZXJlbmNlIHRvIHRoZSBET00gZWxlbWVudCBpdCByZXByZXNlbnRzXG4gICAqICAgICAgdmFyIGFjdG9yID0gcmVrYXBpLmFkZEFjdG9yKHtcbiAgICogICAgICAgIGNvbnRleHQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY3Rvci0xJylcbiAgICogICAgICB9KTtcbiAgICpcbiAgICogICAgICBhY3RvclxuICAgKiAgICAgICAgLmtleWZyYW1lKDAsICAgIHsgbGVmdDogJzBweCcgICB9KVxuICAgKiAgICAgICAgLmtleWZyYW1lKDEwMDAsIHsgbGVmdDogJzI1MHB4JyB9LCAnZWFzZU91dFF1YWQnKTtcbiAgICpcbiAgICogICAgICAvLyBGZWF0dXJlIGRldGVjdCBmb3IgQ1NTIEBrZXlmcmFtZSBzdXBwb3J0XG4gICAqICAgICAgaWYgKHJla2FwaS5yZW5kZXJlci5jYW5BbmltYXRlV2l0aENTUygpKSB7XG4gICAqICAgICAgICAvLyBBbmltYXRlIHdpdGggQ1NTIEBrZXlmcmFtZXNcbiAgICogICAgICAgIHJla2FwaS5yZW5kZXJlci5wbGF5KCk7XG4gICAqICAgICAgfSBlbHNlIHtcbiAgICogICAgICAgIC8vIEFuaW1hdGUgd2l0aCBpbmxpbmUgc3R5bGVzIGluc3RlYWRcbiAgICogICAgICAgIHJla2FwaS5wbGF5KCk7XG4gICAqICAgICAgfVxuICAgKlxuICAgKiAjIyBgQGtleWZyYW1lYCBhbmltYXRpb25zIHdvcmsgZGlmZmVyZW50bHkgdGhhbiBpbmxpbmUgc3R5bGUgYW5pbWF0aW9uc1xuICAgKlxuICAgKiBJbmxpbmUgc3R5bGUgYW5pbWF0aW9ucyBhcmUgY29tcGF0aWJsZSB3aXRoIGFsbCBvZiB0aGUgcGxheWJhY2sgYW5kXG4gICAqIHRpbWVsaW5lIGNvbnRyb2wgbWV0aG9kcyBkZWZpbmVkIGJ5IGB7eyNjcm9zc0xpbmtcbiAgICogXCJSZWthcGlcIn19e3svY3Jvc3NMaW5rfX1gLCBzdWNoIGFzIGB7eyNjcm9zc0xpbmtcbiAgICogXCJSZWthcGkvcGxheTptZXRob2RcIn19e3svY3Jvc3NMaW5rfX1gLCBge3sjY3Jvc3NMaW5rXG4gICAqIFwiUmVrYXBpL3BsYXlGcm9tOm1ldGhvZFwifX17ey9jcm9zc0xpbmt9fWAgYW5kIGB7eyNjcm9zc0xpbmtcbiAgICogXCJSZWthcGkvdXBkYXRlOm1ldGhvZFwifX17ey9jcm9zc0xpbmt9fWAuICBDU1MgYEBrZXlmcmFtZWAgcGxheWJhY2sgY2Fubm90XG4gICAqIGJlIGNvbnRyb2xsZWQgaW4gYWxsIGJyb3dzZXJzLCBzbyBgUmVrYXBpLkRPTVJlbmRlcmVyYCBkZWZpbmVzIGFuYWxvZ291cyxcbiAgICogcmVuZGVyZXItc3BlY2lmaWMgQ1NTIHBsYXliYWNrIG1ldGhvZHMgdGhhdCB5b3Ugc2hvdWxkIHVzZTpcbiAgICpcbiAgICogICAtIHt7I2Nyb3NzTGluayBcIlJla2FwaS5ET01SZW5kZXJlci9wbGF5Om1ldGhvZFwifX17ey9jcm9zc0xpbmt9fVxuICAgKiAgIC0ge3sjY3Jvc3NMaW5rIFwiUmVrYXBpLkRPTVJlbmRlcmVyL2lzUGxheWluZzptZXRob2RcIn19e3svY3Jvc3NMaW5rfX1cbiAgICogICAtIHt7I2Nyb3NzTGluayBcIlJla2FwaS5ET01SZW5kZXJlci9zdG9wOm1ldGhvZFwifX17ey9jcm9zc0xpbmt9fVxuICAgKlxuICAgKiBfX05vdGVfXzogYFJla2FwaS5ET01SZW5kZXJlcmAgaXMgYWRkZWQgdG8gdGhlIGB7eyNjcm9zc0xpbmtcbiAgICogXCJSZWthcGlcIn19e3svY3Jvc3NMaW5rfX1gIGluc3RhbmNlIGF1dG9tYXRpY2FsbHkgYXMgYHRoaXMucmVuZGVyZXJgLFxuICAgKiB0aGVyZSBpcyBubyByZWFzb24gdG8gY2FsbCB0aGUgY29uc3RydWN0b3IgeW91cnNlbGYgaW4gbW9zdCBjYXNlcy5cbiAgICpcbiAgICogX19bRXhhbXBsZV0oL3JlbmRlcmVycy9kb20vc2FtcGxlL3BsYXktbWFueS1hY3RvcnMuaHRtbClfX1xuICAgKlxuICAgKiBAY2xhc3MgUmVrYXBpLkRPTVJlbmRlcmVyXG4gICAqIEBwYXJhbSB7UmVrYXBpfSByZWthcGlcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqL1xuICBSZWthcGkuRE9NUmVuZGVyZXIgPSBmdW5jdGlvbiAocmVrYXBpKSB7XG4gICAgdGhpcy5yZWthcGkgPSByZWthcGk7XG5cbiAgICAvLyBAcHJpdmF0ZSB7bnVtYmVyfVxuICAgIHRoaXMuX3BsYXlUaW1lc3RhbXAgPSBudWxsO1xuXG4gICAgLy8gQHByaXZhdGUge3N0cmluZ31cbiAgICB0aGlzLl9jYWNoZWRDU1MgPSBudWxsO1xuXG4gICAgLy8gVGhlIEhUTUxTdHlsZUVsZW1lbnQgdGhhdCBnZXRzIGluamVjdGVkIGludG8gdGhlIERPTS5cbiAgICAvLyBAcHJpdmF0ZSB7SFRNTFN0eWxlRWxlbWVudClcbiAgICB0aGlzLl9zdHlsZUVsZW1lbnQgPSBudWxsO1xuXG4gICAgLy8gQHByaXZhdGUge251bWJlcn1cbiAgICB0aGlzLl9zdG9wU2V0VGltZW91dEhhbmRsZSA9IG51bGw7XG5cbiAgICByZWthcGkub24oJ3RpbWVsaW5lTW9kaWZpZWQnLCBfLmJpbmQoZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5fY2FjaGVkQ1NTID0gbnVsbDtcbiAgICB9LCB0aGlzKSk7XG5cbiAgICByZWthcGkub24oJ2FkZEFjdG9yJywgb25BZGRBY3Rvcik7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgdmFyIERPTVJlbmRlcmVyID0gUmVrYXBpLkRPTVJlbmRlcmVyO1xuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGNhbkFuaW1hdGVXaXRoQ1NTXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFdoZXRoZXIgb3Igbm90IHRoZSBicm93c2VyIHN1cHBvcnRzIENTUyBgQGtleWZyYW1lYFxuICAgKiBhbmltYXRpb25zLlxuICAgKi9cbiAgRE9NUmVuZGVyZXIucHJvdG90eXBlLmNhbkFuaW1hdGVXaXRoQ1NTID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAhIWdldFZlbmRvclByZWZpeCgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQbGF5IHRoZSBSZWthcGkgYW5pbWF0aW9uIGFzIGEgQ1NTIGBAa2V5ZnJhbWVgIGFuaW1hdGlvbi5cbiAgICpcbiAgICogTm90ZSB0aGF0IHRoaXMgaXMgZGlmZmVyZW50IGZyb20gYHt7I2Nyb3NzTGlua1xuICAgKiBcIlJla2FwaS9wbGF5Om1ldGhvZFwifX17ey9jcm9zc0xpbmt9fWAuICBUaGlzIG1ldGhvZCBvbmx5IGFwcGxpZXMgdG8gQ1NTXG4gICAqIGBAa2V5ZnJhbWVgIGFuaW1hdGlvbnMuXG4gICAqIEBtZXRob2QgcGxheVxuICAgKiBAcGFyYW0ge251bWJlcj19IG9wdF9pdGVyYXRpb25zIEhvdyBtYW55IHRpbWVzIHRoZSBhbmltYXRpb24gc2hvdWxkIGxvb3AuXG4gICAqIFRoaXMgY2FuIGJlIGBudWxsYCBvciBgMGAgaWYgeW91IHdhbnQgdG8gbG9vcCB0aGUgYW5pbWF0aW9uIGVuZGxlc3NseSBidXRcbiAgICogYWxzbyBzcGVjaWZ5IGEgdmFsdWUgZm9yIGBvcHRfZnBzYC5cbiAgICogQHBhcmFtIHtudW1iZXI9fSBvcHRfZnBzIEhvdyBtYW55IGBAa2V5ZnJhbWVzYCB0byBnZW5lcmF0ZSBwZXIgc2Vjb25kIG9mXG4gICAqIHRoZSBhbmltYXRpb24uICBBIGhpZ2hlciB2YWx1ZSByZXN1bHRzIGluIGEgbW9yZSBwcmVjaXNlIENTUyBhbmltYXRpb24sXG4gICAqIGJ1dCBpdCB3aWxsIHRha2UgbG9uZ2VyIHRvIGdlbmVyYXRlLiAgVGhlIGRlZmF1bHQgdmFsdWUgaXMgYDMwYC4gIFlvdVxuICAgKiBzaG91bGQgbm90IG5lZWQgdG8gZ28gaGlnaGVyIHRoYW4gYDYwYC5cbiAgICovXG4gIERPTVJlbmRlcmVyLnByb3RvdHlwZS5wbGF5ID0gZnVuY3Rpb24gKG9wdF9pdGVyYXRpb25zLCBvcHRfZnBzKSB7XG4gICAgaWYgKHRoaXMuaXNQbGF5aW5nKCkpIHtcbiAgICAgIHRoaXMuc3RvcCgpO1xuICAgIH1cblxuICAgIHZhciBjc3MgPSB0aGlzLl9jYWNoZWRDU1MgfHwgdGhpcy5wcmVyZW5kZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB0aGlzLl9zdHlsZUVsZW1lbnQgPSBpbmplY3RTdHlsZSh0aGlzLnJla2FwaSwgY3NzKTtcbiAgICB0aGlzLl9wbGF5VGltZXN0YW1wID0gbm93KCk7XG5cbiAgICBpZiAob3B0X2l0ZXJhdGlvbnMpIHtcbiAgICAgIHZhciBhbmltYXRpb25MZW5ndGggPSAob3B0X2l0ZXJhdGlvbnMgKiB0aGlzLnJla2FwaS5nZXRBbmltYXRpb25MZW5ndGgoKSk7XG4gICAgICB0aGlzLl9zdG9wU2V0VGltZW91dEhhbmRsZSA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgXy5iaW5kKHRoaXMuc3RvcCwgdGhpcywgdHJ1ZSksXG4gICAgICAgICAgYW5pbWF0aW9uTGVuZ3RoICsgSU5KRUNURURfU1RZTEVfUkVNT1ZBTF9CVUZGRVJfTVMpO1xuICAgIH1cblxuICAgIGZpcmVFdmVudCh0aGlzLnJla2FwaSwgJ3BsYXknLCBfKTtcbiAgfTtcblxuICAvKipcbiAgICogU3RvcCBhIENTUyBgQGtleWZyYW1lYCBhbmltYXRpb24uICBUaGlzIGFsc28gcmVtb3ZlcyBhbnkgYDxzdHlsZT5gXG4gICAqIGVsZW1lbnRzIHRoYXQgd2VyZSBkeW5hbWljYWxseSBpbmplY3RlZCBpbnRvIHRoZSBET00uXG4gICAqXG4gICAqIE5vdGUgdGhhdCB0aGlzIGlzIGRpZmZlcmVudCBmcm9tXG4gICAqIGB7eyNjcm9zc0xpbmsgXCJSZWthcGkvc3RvcDptZXRob2RcIn19e3svY3Jvc3NMaW5rfX1gLiAgVGhpcyBtZXRob2Qgb25seVxuICAgKiBhcHBsaWVzIHRvIENTUyBgQGtleWZyYW1lYCBhbmltYXRpb25zLlxuICAgKiBAbWV0aG9kIHN0b3BcbiAgICogQHBhcmFtIHtib29sZWFuPX0gb3B0X2dvVG9FbmQgSWYgdHJ1ZSwgc2tpcCB0byB0aGUgZW5kIG9mIHRoZSBhbmltYXRpb24uXG4gICAqIElmIGZhbHNlIG9yIG9taXR0ZWQsIHNldCBpbmxpbmUgc3R5bGVzIG9uIHRoZSBhY3RvciBlbGVtZW50cyB0byBrZWVwIHRoZW1cbiAgICogaW4gdGhlaXIgY3VycmVudCBwb3NpdGlvbi5cbiAgICovXG4gIERPTVJlbmRlcmVyLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKG9wdF9nb1RvRW5kKSB7XG4gICAgaWYgKHRoaXMuaXNQbGF5aW5nKCkpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9zdG9wU2V0VGltZW91dEhhbmRsZSk7XG5cbiAgICAgIC8vIEZvcmNlcyBhIHN0eWxlIHVwZGF0ZSBpbiBXZWJLaXQvUHJlc3RvXG4gICAgICB0aGlzLl9zdHlsZUVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICAgIGRvY3VtZW50LmhlYWQucmVtb3ZlQ2hpbGQodGhpcy5fc3R5bGVFbGVtZW50KTtcbiAgICAgIHRoaXMuX3N0eWxlRWxlbWVudCA9IG51bGw7XG5cbiAgICAgIHZhciB1cGRhdGVUaW1lO1xuICAgICAgaWYgKG9wdF9nb1RvRW5kKSB7XG4gICAgICAgIHVwZGF0ZVRpbWUgPSB0aGlzLnJla2FwaS5nZXRBbmltYXRpb25MZW5ndGgoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHVwZGF0ZVRpbWUgPSAobm93KCkgLSB0aGlzLl9wbGF5VGltZXN0YW1wKVxuICAgICAgICAgICAgJSB0aGlzLnJla2FwaS5nZXRBbmltYXRpb25MZW5ndGgoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5yZWthcGkudXBkYXRlKHVwZGF0ZVRpbWUpO1xuICAgICAgZmlyZUV2ZW50KHRoaXMucmVrYXBpLCAnc3RvcCcsIF8pO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQG1ldGhvZCBpc1BsYXlpbmdcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gV2hldGhlciBvciBub3QgYSBDU1MgYEBrZXlmcmFtZWAgYW5pbWF0aW9uIGlzIHJ1bm5pbmcuXG4gICAqL1xuICBET01SZW5kZXJlci5wcm90b3R5cGUuaXNQbGF5aW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAhIXRoaXMuX3N0eWxlRWxlbWVudDtcbiAgfTtcblxuICAvKipcbiAgICogUHJlcmVuZGVyIGFuZCBjYWNoZSB0aGUgQ1NTIGFuaW1hdGlvbiBzbyB0aGF0IGl0IGlzIGltbWVkaWF0ZWx5IHJlYWR5IHRvXG4gICAqIGJlIHVzZWQgd2hlbiBpdCBpcyBuZWVkZWQgaW4gdGhlIGZ1dHVyZS4gIFRoZSBmdW5jdGlvbiBzaWduYXR1cmUgaXNcbiAgICogaWRlbnRpY2FsIHRvIHt7I2Nyb3NzTGlua1xuICAgKiBcIlJla2FwaS5ET01SZW5kZXJlci9wbGF5Om1ldGhvZFwifX17ey9jcm9zc0xpbmt9fS4gIFRoaXMgaXMgbmVjZXNzYXJ5IHRvXG4gICAqIHBsYXkgYSBDU1MgYW5pbWF0aW9uIGFuZCB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgY2FsbGVkIGZvciB5b3UgaWYgeW91IGRvbid0XG4gICAqIGNhbGwgaXQgbWFudWFsbHksIGJ1dCBjYWxsaW5nIGl0IGFoZWFkIG9mIHRpbWUgKHN1Y2ggYXMgb24gcGFnZSBsb2FkKSB3aWxsXG4gICAqIHByZXZlbnQgYW55IHBlcmNlaXZlZCBsYWcgd2hlbiBhIENTUyBgQGtleWZyYW1lYCBhbmltYXRpb24gaXMgc3RhcnRlZC5cbiAgICogVGhlIHByZXJlbmRlcmVkIGFuaW1hdGlvbiBpcyBjYWNoZWQgZm9yIHJldXNlIHVudGlsIHRoZSB0aW1lbGluZSBvciBhXG4gICAqIGtleWZyYW1lIGlzIG1vZGlmaWVkLlxuICAgKlxuICAgKiBAbWV0aG9kIHByZXJlbmRlclxuICAgKiBAcGFyYW0ge251bWJlcj19IG9wdF9pdGVyYXRpb25zIEhvdyBtYW55IHRpbWVzIHRoZSBhbmltYXRpb24gc2hvdWxkIGxvb3AuXG4gICAqIFRoaXMgY2FuIGJlIGBudWxsYCBvciBgMGAgaWYgeW91IHdhbnQgdG8gbG9vcCB0aGUgYW5pbWF0aW9uIGVuZGxlc3NseSBidXRcbiAgICogYWxzbyBzcGVjaWZ5IGEgdmFsdWUgZm9yIGBvcHRfZnBzYC5cbiAgICogQHBhcmFtIHtudW1iZXI9fSBvcHRfZnBzIEhvdyBtYW55IGBAa2V5ZnJhbWVzYCB0byBnZW5lcmF0ZSBwZXIgc2Vjb25kIG9mXG4gICAqIHRoZSBhbmltYXRpb24uICBBIGhpZ2hlciB2YWx1ZSByZXN1bHRzIGluIGEgbW9yZSBwcmVjaXNlIENTUyBhbmltYXRpb24sXG4gICAqIGJ1dCBpdCB3aWxsIHRha2UgbG9uZ2VyIHRvIGdlbmVyYXRlLiAgVGhlIGRlZmF1bHQgdmFsdWUgaXMgYDMwYC4gIFlvdVxuICAgKiBzaG91bGQgbm90IG5lZWQgdG8gZ28gaGlnaGVyIHRoYW4gYDYwYC5cbiAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgcHJlcmVuZGVyZWQgQ1NTIHN0cmluZy4gIFlvdSBsaWtlbHkgd29uJ3QgbmVlZCB0aGlzLFxuICAgKiBhcyBpdCBpcyBhbHNvIGNhY2hlZCBpbnRlcm5hbGx5LlxuICAgKi9cbiAgRE9NUmVuZGVyZXIucHJvdG90eXBlLnByZXJlbmRlciA9IGZ1bmN0aW9uIChvcHRfaXRlcmF0aW9ucywgb3B0X2Zwcykge1xuICAgIHJldHVybiB0aGlzLl9jYWNoZWRDU1MgPSB0aGlzLnRvU3RyaW5nKHtcbiAgICAgICd2ZW5kb3JzJzogW2dldFZlbmRvclByZWZpeCgpXVxuICAgICAgLCdmcHMnOiBvcHRfZnBzXG4gICAgICAsJ2l0ZXJhdGlvbnMnOiBvcHRfaXRlcmF0aW9uc1xuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBZb3UgY2FuIGRlY291cGxlIHRyYW5zZm9ybSBjb21wb25lbnRzIGluIG9yZGVyIHRvIGFuaW1hdGUgZWFjaCBwcm9wZXJ0eVxuICAgKiB3aXRoIGl0cyBvd24gZWFzaW5nIGN1cnZlOlxuICAgKlxuICAgKiAgICAgYWN0b3JcbiAgICogICAgICAgLmtleWZyYW1lKDAsIHtcbiAgICogICAgICAgICB0cmFuc2xhdGVYOiAnMHB4JyxcbiAgICogICAgICAgICB0cmFuc2xhdGVZOiAnMHB4JyxcbiAgICogICAgICAgICByb3RhdGU6ICcwZGVnJ1xuICAgKiAgICAgICB9KVxuICAgKiAgICAgICAua2V5ZnJhbWUoMTUwMCwge1xuICAgKiAgICAgICAgIHRyYW5zbGF0ZVg6ICcyMDBweCcsXG4gICAqICAgICAgICAgdHJhbnNsYXRlWTogJzIwMHB4JyxcbiAgICogICAgICAgICByb3RhdGU6ICc5MGRlZydcbiAgICogICAgICAgfSwge1xuICAgKiAgICAgICAgIHRyYW5zbGF0ZVg6ICdlYXNlT3V0RXhwbycsXG4gICAqICAgICAgICAgdHJhbnNsYXRlWTogJ2Vhc2VJblNpbmUnLFxuICAgKiAgICAgICAgIHJvdGF0ZTogJ2VsYXN0aWMnXG4gICAqICAgICAgIH0pO1xuICAgKlxuICAgKiBDU1MgdHJhbnNmb3JtIHN0cmluZyBjb21wb25lbnRzIGFyZSBvcmRlci1kZXBlbmRlbnQsIGJ1dCBKYXZhU2NyaXB0IG9iamVjdFxuICAgKiBwcm9wZXJ0aWVzIGhhdmUgYW4gdW5wcmVkaWN0YWJsZSBvcmRlci4gIFJla2FwaSBtdXN0IGNvbWJpbmUgdHJhbnNmb3JtXG4gICAqIHByb3BlcnRpZXMgc3VwcGxpZWQgdG8gYHt7I2Nyb3NzTGlua1xuICAgKiBcIlJla2FwaS5BY3Rvci9rZXlmcmFtZTptZXRob2RcIn19e3svY3Jvc3NMaW5rfX1gIChhcyBzaG93biBhYm92ZSkgaW50byBhXG4gICAqIHNpbmdsZSBzdHJpbmcgd2hlbiBpdCByZW5kZXJzIGVhY2ggZnJhbWUuICBUaGlzIG1ldGhvZCBsZXRzIHlvdSBjaGFuZ2VcbiAgICogdGhhdCBvcmRlciBmcm9tIHRoZSBkZWZhdWx0LiAgVGhlIHN1cHBvcnRlZCBhcnJheSB2YWx1ZXMgZm9yXG4gICAqIGBvcmRlcmVkVHJhbnNmb3Jtc2AgYXJlOlxuICAgKlxuICAgKiAtIGB0cmFuc2xhdGVYYFxuICAgKiAtIGB0cmFuc2xhdGVZYFxuICAgKiAtIGB0cmFuc2xhdGVaYFxuICAgKiAtIGBzY2FsZWBcbiAgICogLSBgc2NhbGVYYFxuICAgKiAtIGBzY2FsZVlgXG4gICAqIC0gYHJvdGF0ZWBcbiAgICogLSBgc2tld1hgXG4gICAqIC0gYHNrZXdZYFxuICAgKlxuICAgKiBJZiB5b3UgcHJlZmVyIGEgbW9yZSBzdGFuZGFyZHMtb3JpZW50ZWQgYXBwcm9hY2gsIFJla2FwaSBhbHNvIHN1cHBvcnRzXG4gICAqIGNvbWJpbmluZyB0aGUgdHJhbnNmb3JtIGNvbXBvbmVudHMgeW91cnNlbGY6XG4gICAqXG4gICAqICAgICBhY3RvclxuICAgKiAgICAgICAua2V5ZnJhbWUoMCwge1xuICAgKiAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMHB4KSB0cmFuc2xhdGVZKDBweCkgcm90YXRlKDBkZWcpJ1xuICAgKiAgICAgICB9KVxuICAgKiAgICAgICAua2V5ZnJhbWUoMTUwMCwge1xuICAgKiAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMjAwcHgpIHRyYW5zbGF0ZVkoMjAwcHgpIHJvdGF0ZSg5MGRlZyknXG4gICAqICAgICAgIH0sIHtcbiAgICogICAgICAgICB0cmFuc2Zvcm06ICdlYXNlT3V0RXhwbyBlYXNlSW5TaW5lIGVsYXN0aWMnXG4gICAqICAgICAgIH0pO1xuICAgKlxuICAgKiBUaGlzIGV4YW1wbGUgYW5kIHRoZSBvbmUgYWJvdmUgaXQgYXJlIGVxdWl2YWxlbnQuXG4gICAqXG4gICAqIF9fTm90ZV9fOiBUaGUgZGVjb3VwbGVkIGZvcm0gb2YgYHRyYW5zZm9ybWAgYW5pbWF0aW9ucyBpcyBub3Qgc3VwcG9ydGVkIGluXG4gICAqIENTUyBgQGtleWZyYW1lYCBhbmltYXRpb25zLCBvbmx5IGlubGluZSBzdHlsZSBhbmltYXRpb25zLiAgVGhpcyBpcyBkdWUgdG9cbiAgICogdGhlIHRpZ2h0bHktY291cGxlZCBuYXR1cmUgb2YgdGhlIENTUyBgQGtleWZyYW1lc2Agc3BlYy4gIElmIHlvdSBpbnRlbmQgdG9cbiAgICogcGxheSBhIENTUy1iYXNlZCBgQGtleWZyYW1lYCBhbmltYXRpb24sIF9fZG8gbm90X18gdXNlIHRoZSBub24tc3RhbmRhcmRcbiAgICogZGVjb3VwbGVkIEFQSSBmb3JtIGZvciBgdHJhbnNmb3JtYCBwcm9wZXJ0aWVzLlxuICAgKlxuICAgKiBAbWV0aG9kIHNldEFjdG9yVHJhbnNmb3JtT3JkZXJcbiAgICogQHBhcmFtIHtSZWthcGkuQWN0b3J9IGFjdG9yXG4gICAqIEBwYXJhbSB7QXJyYXkoc3RyaW5nKX0gb3JkZXJlZFRyYW5zZm9ybXMgVGhlIGFycmF5IG9mIHRyYW5zZm9ybSBuYW1lcy5cbiAgICogQHJldHVybiB7UmVrYXBpfVxuICAgKi9cbiAgRE9NUmVuZGVyZXIucHJvdG90eXBlLnNldEFjdG9yVHJhbnNmb3JtT3JkZXIgPVxuICAgICAgZnVuY3Rpb24gKGFjdG9yLCBvcmRlcmVkVHJhbnNmb3Jtcykge1xuICAgIC8vIFRPRE86IERvY3VtZW50IHRoaXMgYmV0dGVyLi4uXG4gICAgdmFyIHVua25vd25GdW5jdGlvbnMgPSBfLnJlamVjdChvcmRlcmVkVHJhbnNmb3JtcywgaXNUcmFuc2Zvcm1GdW5jdGlvbik7XG5cbiAgICBpZiAodW5rbm93bkZ1bmN0aW9ucy5sZW5ndGgpIHtcbiAgICAgIHRocm93ICdVbmtub3duIG9yIHVuc3VwcG9ydGVkIHRyYW5zZm9ybSBmdW5jdGlvbnM6ICcgK1xuICAgICAgICB1bmtub3duRnVuY3Rpb25zLmpvaW4oJywgJyk7XG4gICAgfVxuICAgIC8vIElnbm9yZSBkdXBsaWNhdGUgdHJhbnNmb3JtIGZ1bmN0aW9uIG5hbWVzIGluIHRoZSBhcnJheVxuICAgIGFjdG9yLl90cmFuc2Zvcm1PcmRlciA9IF8udW5pcShvcmRlcmVkVHJhbnNmb3Jtcyk7XG5cbiAgICByZXR1cm4gdGhpcy5yZWthcGk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgZ2V0QWN0b3JDbGFzc05hbWVcbiAgICogQHBhcmFtIHtSZWthcGkuQWN0b3J9IGFjdG9yXG4gICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIGRlZmF1bHQgQ1NTIGNsYXNzIHRoYXQgaXMgdGFyZ2V0ZWQgYnkgYHt7I2Nyb3NzTGlua1xuICAgKiBcIlJla2FwaS5ET01SZW5kZXJlci90b1N0cmluZzptZXRob2RcIn19e3svY3Jvc3NMaW5rfX1gIGlmIGEgY3VzdG9tIGNsYXNzIGlzXG4gICAqIG5vdCBzcGVjaWZpZWQuICBUaGlzIG1heSBiZSB1c2VmdWwgZm9yIGdldHRpbmcgYSBzdGFuZGFyZCBhbmQgY29uc2lzdGVudFxuICAgKiBDU1MgY2xhc3MgbmFtZSBmb3IgYW4gYWN0b3IncyBET00gZWxlbWVudC5cbiAgICovXG4gIERPTVJlbmRlcmVyLmdldEFjdG9yQ2xhc3NOYW1lID0gZnVuY3Rpb24gKGFjdG9yKSB7XG4gICAgcmV0dXJuICdhY3Rvci0nICsgYWN0b3IuaWQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIFJla2FwaSBhbmltYXRpb25zIHRvIENTUyBgQGtleWZyYW1lc2AuXG4gICAqIEBtZXRob2QgdG9TdHJpbmdcbiAgICogQHBhcmFtIHtPYmplY3Q9fSBvcHRzXG4gICAqICAgKiBfX3ZlbmRvcnNfXyBfKEFycmF5KHN0cmluZykpXzogRGVmYXVsdHMgdG8gYFsndzMnXWAuICBUaGUgYnJvd3NlciB2ZW5kb3JzIHlvdVxuICAgKiAgIHdhbnQgdG8gc3VwcG9ydC4gVmFsaWQgdmFsdWVzIGFyZTpcbiAgICogICAgICogYCdtaWNyb3NvZnQnYFxuICAgKiAgICAgKiBgJ21vemlsbGEnYFxuICAgKiAgICAgKiBgJ29wZXJhJ2BcbiAgICogICAgICogYCd3MydgXG4gICAqICAgICAqIGAnd2Via2l0J2BcbiAgICpcbiAgICpcbiAgICogICAqIF9fZnBzX18gXyhudW1iZXIpXzogRGVmYXVsdHMgdG8gMzAuICBEZWZpbmVzIHRoZSBudW1iZXIgb2YgQ1NTXG4gICAqICAgYEBrZXlmcmFtZWAgZnJhbWVzIHJlbmRlcmVkIHBlciBzZWNvbmQgb2YgYW4gYW5pbWF0aW9uLiAgQ1NTIGBAa2V5ZnJhbWVzYFxuICAgKiAgIGFyZSBjb21wcmlzZWQgb2YgYSBzZXJpZXMgb2YgZXhwbGljaXRseSBkZWZpbmVkIHN0ZXBzLCBhbmQgbW9yZSBzdGVwc1xuICAgKiAgIHdpbGwgYWxsb3cgZm9yIGEgbW9yZSBjb21wbGV4IGFuaW1hdGlvbi4gIE1vcmUgc3RlcHMgd2lsbCBhbHNvIHJlc3VsdCBpblxuICAgKiAgIGEgbGFyZ2VyIENTUyBzdHJpbmcsIGFuZCBtb3JlIHRpbWUgbmVlZGVkIHRvIGdlbmVyYXRlIHRoZSBzdHJpbmcuXG4gICAqICAgKiBfX25hbWVfXyBfKHN0cmluZylfOiBEZWZpbmUgYSBjdXN0b20gbmFtZSBmb3IgeW91ciBhbmltYXRpb24uICBUaGlzXG4gICAqICAgYmVjb21lcyB0aGUgY2xhc3MgbmFtZSB0YXJnZXRlZCBieSB0aGUgZ2VuZXJhdGVkIENTUy4gIFRoZSBkZWZhdWx0IHZhbHVlXG4gICAqICAgaXMgZGV0ZXJtaW5lZCBieSBhIGNhbGwgdG8ge3sjY3Jvc3NMaW5rXG4gICAqICAgXCJSZWthcGkuRE9NUmVuZGVyZXIvZ2V0QWN0b3JDbGFzc05hbWU6bWV0aG9kXCJ9fXt7L2Nyb3NzTGlua319LlxuICAgKiAgICogX19pc0NlbnRlcmVkX18gXyhib29sZWFuKV86IElmIGB0cnVlYCwgdGhlIGdlbmVyYXRlZCBDU1Mgd2lsbCBjb250YWluXG4gICAqICAgYHRyYW5zZm9ybS1vcmlnaW46IDAgMDtgLCB3aGljaCBjZW50ZXJzIHRoZSBET00gZWxlbWVudCBhbG9uZyB0aGUgcGF0aCBvZlxuICAgKiAgIG1vdGlvbi4gIElmIGBmYWxzZWAgb3Igb21pdHRlZCwgbm8gYHRyYW5zZm9ybS1vcmlnaW5gIHJ1bGUgaXMgc3BlY2lmaWVkXG4gICAqICAgYW5kIHRoZSBlbGVtZW50IGlzIGFsaWduZWQgdG8gdGhlIHBhdGggb2YgbW90aW9uIHdpdGggaXRzIHRvcC1sZWZ0XG4gICAqICAgY29ybmVyLlxuICAgKiAgICogX19pdGVyYXRpb25zX18gXyhudW1iZXIpXzogSG93IG1hbnkgdGltZXMgdGhlIGdlbmVyYXRlZCBhbmltYXRpb25cbiAgICogICBzaG91bGQgcmVwZWF0LiAgSWYgb21pdHRlZCwgdGhlIGFuaW1hdGlvbiB3aWxsIGxvb3AgaW5kZWZpbml0ZWx5LlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBSZWthcGkuRE9NUmVuZGVyZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKG9wdHMpIHtcbiAgICBvcHRzID0gb3B0cyB8fCB7fTtcbiAgICB2YXIgYW5pbWF0aW9uQ1NTID0gW107XG5cbiAgICBfLmVhY2godGhpcy5yZWthcGkuZ2V0QWxsQWN0b3JzKCksIGZ1bmN0aW9uIChhY3Rvcikge1xuICAgICAgaWYgKGFjdG9yLmNvbnRleHQubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgYW5pbWF0aW9uQ1NTLnB1c2goZ2V0QWN0b3JDU1MoYWN0b3IsIG9wdHMpKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBhbmltYXRpb25DU1Muam9pbignXFxuJyk7XG4gIH07XG5cbiAgLy8gRE9NUmVuZGVyZXIucHJvdG90eXBlLnRvU3RyaW5nLVNQRUNJRklDIENPREVcbiAgLy9cblxuICAvLyBDT05TVEFOVFNcbiAgLy9cblxuICB2YXIgREVGQVVMVF9GUFMgPSAzMDtcbiAgdmFyIFRSQU5TRk9STV9UT0tFTiA9ICdUUkFOU0ZPUk0nO1xuICB2YXIgVkVORE9SX1RPS0VOID0gJ1ZFTkRPUic7XG4gIHZhciBWRU5ET1JfUFJFRklYRVMgPSB7XG4gICAgJ21pY3Jvc29mdCc6ICctbXMtJ1xuICAgICwnbW96aWxsYSc6ICctbW96LSdcbiAgICAsJ29wZXJhJzogJy1vLSdcbiAgICAsJ3czJzogJydcbiAgICAsJ3dlYmtpdCc6ICctd2Via2l0LSdcbiAgfTtcbiAgdmFyIEJFWklFUlMgPSB7XG4gICAgbGluZWFyOiAnLjI1LC4yNSwuNzUsLjc1J1xuICAgICxlYXNlSW5RdWFkOiAnLjU1LC4wODUsLjY4LC41MydcbiAgICAsZWFzZUluQ3ViaWM6ICcuNTUsLjA1NSwuNjc1LC4xOSdcbiAgICAsZWFzZUluUXVhcnQ6ICcuODk1LC4wMywuNjg1LC4yMidcbiAgICAsZWFzZUluUXVpbnQ6ICcuNzU1LC4wNSwuODU1LC4wNidcbiAgICAsZWFzZUluU2luZTogJy40NywwLC43NDUsLjcxNSdcbiAgICAsZWFzZUluRXhwbzogJy45NSwuMDUsLjc5NSwuMDM1J1xuICAgICxlYXNlSW5DaXJjOiAnLjYsLjA0LC45OCwgLjMzNSdcbiAgICAsZWFzZU91dFF1YWQ6ICcuMjUsLjQ2LC40NSwuOTQnXG4gICAgLGVhc2VPdXRDdWJpYzogJy4yMTUsLjYxLC4zNTUsMSdcbiAgICAsZWFzZU91dFF1YXJ0OiAnLjE2NSwuODQsLjQ0LDEnXG4gICAgLGVhc2VPdXRRdWludDogJy4yMywxLC4zMiwxJ1xuICAgICxlYXNlT3V0U2luZTogJy4zOSwuNTc1LC41NjUsMSdcbiAgICAsZWFzZU91dEV4cG86ICcuMTksMSwuMjIsMSdcbiAgICAsZWFzZU91dENpcmM6ICcuMDc1LC44MiwuMTY1LDEnXG4gICAgLGVhc2VJbk91dFF1YWQ6ICcuNDU1LC4wMywuNTE1LC45NTUnXG4gICAgLGVhc2VJbk91dEN1YmljOiAnLjY0NSwuMDQ1LC4zNTUsMSdcbiAgICAsZWFzZUluT3V0UXVhcnQ6ICcuNzcsMCwuMTc1LDEnXG4gICAgLGVhc2VJbk91dFF1aW50OiAnLjg2LDAuMDcsMSdcbiAgICAsZWFzZUluT3V0U2luZTogJy40NDUsLjA1LC41NSwuOTUnXG4gICAgLGVhc2VJbk91dEV4cG86ICcxLDAsMCwxJ1xuICAgICxlYXNlSW5PdXRDaXJjOiAnLjc4NSwuMTM1LC4xNSwuODYnXG4gIH07XG5cbiAgLy8gVEVNUExBVEVTXG4gIC8vXG5cbiAgLyohXG4gICAqIFswXTogdmVuZG9yXG4gICAqIFsxXTogYW5pbWF0aW9uIG5hbWVcbiAgICogWzJdOiBrZXlmcmFtZXNcbiAgICovXG4gIHZhciBLRVlGUkFNRV9URU1QTEFURSA9IFtcbiAgICAnQCVza2V5ZnJhbWVzICVzLWtleWZyYW1lcyB7J1xuICAgICwnJXMnXG4gICAgLCd9J1xuICBdLmpvaW4oJ1xcbicpO1xuXG4gIC8qIVxuICAgKiBbMF0gY2xhc3MgbmFtZVxuICAgKiBbMV0gY2xhc3MgYXR0cmlidXRlc1xuICAgKi9cbiAgdmFyIENMQVNTX0JPSUxFUlBMQVRFID0gW1xuICAgICcuJXMgeydcbiAgICAsJyVzJ1xuICAgICwnfSdcbiAgXS5qb2luKCdcXG4nKTtcblxuICAvKiFcbiAgICogQ3JlYXRlcyB0aGUgQ1NTIGBAa2V5ZnJhbWVzYCBmb3IgYW4gaW5kaXZpZHVhbCBhY3Rvci5cbiAgICogQHBhcmFtIHtSZWthcGkuQWN0b3J9IGFjdG9yXG4gICAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0cyBTYW1lIGFzIG9wdHMgZm9yIFJla2FwaS5wcm90b3R5cGUudG9DU1MuXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGZ1bmN0aW9uIGdldEFjdG9yQ1NTIChhY3Rvciwgb3B0cykge1xuICAgIG9wdHMgPSBvcHRzIHx8IHt9O1xuICAgIHZhciBhY3RvckNTUyA9IFtdO1xuICAgIHZhciBhbmltTmFtZSA9IG9wdHMubmFtZSB8fCBET01SZW5kZXJlci5nZXRBY3RvckNsYXNzTmFtZShhY3Rvcik7XG4gICAgdmFyIGZwcyA9IG9wdHMuZnBzIHx8IERFRkFVTFRfRlBTO1xuICAgIHZhciBzdGVwcyA9IE1hdGguY2VpbCgoYWN0b3IucmVrYXBpLmdldEFuaW1hdGlvbkxlbmd0aCgpIC8gMTAwMCkgKiBmcHMpO1xuICAgIHZhciBjb21iaW5lUHJvcGVydGllcyA9ICFjYW5PcHRpbWl6ZUFueUtleWZyYW1lUHJvcGVydGllcyhhY3Rvcik7XG4gICAgdmFyIGFjdG9yQ2xhc3MgPSBnZW5lcmF0ZUNTU0NsYXNzKFxuICAgICAgICBhY3RvciwgYW5pbU5hbWUsIGNvbWJpbmVQcm9wZXJ0aWVzLCBvcHRzLnZlbmRvcnMsIG9wdHMuaXRlcmF0aW9ucyxcbiAgICAgICAgb3B0cy5pc0NlbnRlcmVkKTtcbiAgICB2YXIgYm9pbGVycGxhdGVkS2V5ZnJhbWVzID0gZ2VuZXJhdGVCb2lsZXJwbGF0ZWRLZXlmcmFtZXMoXG4gICAgICAgIGFjdG9yLCBhbmltTmFtZSwgc3RlcHMsIGNvbWJpbmVQcm9wZXJ0aWVzLCBvcHRzLnZlbmRvcnMpO1xuXG4gICAgYWN0b3JDU1MucHVzaChhY3RvckNsYXNzKTtcbiAgICBhY3RvckNTUy5wdXNoKGJvaWxlcnBsYXRlZEtleWZyYW1lcyk7XG5cbiAgICByZXR1cm4gYWN0b3JDU1Muam9pbignXFxuJyk7XG4gIH1cblxuICAvLyB0b1N0cmluZy1TUEVDSUZJQyBQUklWQVRFIFVUSUxJVFkgRlVOQ1RJT05TXG4gIC8vXG5cbiAgLyohXG4gICAqIEBwYXJhbSB7UmVrYXBpLkFjdG9yfSBhY3RvclxuICAgKiBAcGFyYW0ge3N0cmluZ30gYW5pbU5hbWVcbiAgICogQHBhcmFtIHtudW1iZXJ9IHN0ZXBzXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gY29tYmluZVByb3BlcnRpZXNcbiAgICogQHBhcmFtIHtBcnJheS48c3RyaW5nPj19IG9wdF92ZW5kb3JzXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGZ1bmN0aW9uIGdlbmVyYXRlQm9pbGVycGxhdGVkS2V5ZnJhbWVzIChcbiAgICAgIGFjdG9yLCBhbmltTmFtZSwgc3RlcHMsIGNvbWJpbmVQcm9wZXJ0aWVzLCBvcHRfdmVuZG9ycykge1xuXG4gICAgdmFyIHRyYWNrTmFtZXMgPSBhY3Rvci5nZXRUcmFja05hbWVzKCk7XG4gICAgdmFyIGNzc1RyYWNrcyA9IFtdO1xuXG4gICAgaWYgKGNvbWJpbmVQcm9wZXJ0aWVzKSB7XG4gICAgICBjc3NUcmFja3MucHVzaChnZW5lcmF0ZUNvbWJpbmVkQWN0b3JLZXlmcmFtZXMoYWN0b3IsIHN0ZXBzKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIF8uZWFjaCh0cmFja05hbWVzLCBmdW5jdGlvbiAodHJhY2tOYW1lKSB7XG4gICAgICAgIGNzc1RyYWNrcy5wdXNoKFxuICAgICAgICAgIGdlbmVyYXRlQWN0b3JLZXlmcmFtZXMoYWN0b3IsIHN0ZXBzLCB0cmFja05hbWUpKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBib2lsZXJwbGF0ZWRLZXlmcmFtZXMgPSBbXTtcblxuICAgIGlmIChjb21iaW5lUHJvcGVydGllcykge1xuICAgICAgYm9pbGVycGxhdGVkS2V5ZnJhbWVzLnB1c2goYXBwbHlWZW5kb3JCb2lsZXJwbGF0ZXMoXG4gICAgICAgIGNzc1RyYWNrc1swXSwgKGFuaW1OYW1lKSwgb3B0X3ZlbmRvcnMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgXy5lYWNoKHRyYWNrTmFtZXMsIGZ1bmN0aW9uICh0cmFja05hbWUsIGkpIHtcbiAgICAgICAgYm9pbGVycGxhdGVkS2V5ZnJhbWVzLnB1c2goYXBwbHlWZW5kb3JCb2lsZXJwbGF0ZXMoXG4gICAgICAgICAgY3NzVHJhY2tzW2ldLCAoYW5pbU5hbWUgKyAnLScgKyB0cmFja05hbWUpLCBvcHRfdmVuZG9ycykpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgYm9pbGVycGxhdGVkS2V5ZnJhbWVzID0gYm9pbGVycGxhdGVkS2V5ZnJhbWVzLmpvaW4oJ1xcbicpO1xuXG4gICAgcmV0dXJuIGJvaWxlcnBsYXRlZEtleWZyYW1lcztcbiAgfVxuXG4gIC8qIVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdG9LZXlmcmFtZXMgR2VuZXJhdGVkIGtleWZyYW1lcyB0byB3cmFwIGluIGJvaWxlcnBsYXRlc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gYW5pbU5hbWVcbiAgICogQHBhcmFtIHtBcnJheS48c3RyaW5nPj19IG9wdF92ZW5kb3JzIFZlbmRvciBib2lsZXJwbGF0ZXMgdG8gYmUgYXBwbGllZC5cbiAgICogICAgIFNob3VsZCBiZSBhbnkgb2YgdGhlIHZhbHVlcyBpbiBSZWthcGkudXRpbC5WRU5ET1JfUFJFRklYRVMuXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGZ1bmN0aW9uIGFwcGx5VmVuZG9yQm9pbGVycGxhdGVzICh0b0tleWZyYW1lcywgYW5pbU5hbWUsIG9wdF92ZW5kb3JzKSB7XG4gICAgb3B0X3ZlbmRvcnMgPSBvcHRfdmVuZG9ycyB8fCBbJ3czJ107XG4gICAgdmFyIHJlbmRlcmVkS2V5ZnJhbWVzID0gW107XG5cbiAgICBfLmVhY2gob3B0X3ZlbmRvcnMsIGZ1bmN0aW9uICh2ZW5kb3IpIHtcbiAgICAgIHZhciByZW5kZXJlZENodW5rID0gcHJpbnRmKEtFWUZSQU1FX1RFTVBMQVRFLFxuICAgICAgICAgIFtWRU5ET1JfUFJFRklYRVNbdmVuZG9yXSwgYW5pbU5hbWUsIHRvS2V5ZnJhbWVzXSk7XG4gICAgICB2YXIgcHJlZml4ZWRLZXlmcmFtZXMgPVxuICAgICAgICAgIGFwcGx5VmVuZG9yUHJvcGVydHlQcmVmaXhlcyhyZW5kZXJlZENodW5rLCB2ZW5kb3IpO1xuICAgICAgcmVuZGVyZWRLZXlmcmFtZXMucHVzaChwcmVmaXhlZEtleWZyYW1lcyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVuZGVyZWRLZXlmcmFtZXMuam9pbignXFxuJyk7XG4gIH1cblxuICAvKiFcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleWZyYW1lc1xuICAgKiBAcGFyYW0ge3ZlbmRvcn0gdmVuZG9yXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGZ1bmN0aW9uIGFwcGx5VmVuZG9yUHJvcGVydHlQcmVmaXhlcyAoa2V5ZnJhbWVzLCB2ZW5kb3IpIHtcbiAgICB2YXIgdHJhbnNmb3JtUmVnRXhwID0gbmV3IFJlZ0V4cChUUkFOU0ZPUk1fVE9LRU4sICdnJyk7XG4gICAgdmFyIHByZWZpeGVkVHJhbnNmb3JtS2V5ID0gVkVORE9SX1BSRUZJWEVTW3ZlbmRvcl0gKyAndHJhbnNmb3JtJztcbiAgICB2YXIgZ2VuZXJhbFByZWZpeFJlZ0V4cCA9IG5ldyBSZWdFeHAoVkVORE9SX1RPS0VOLCAnZycpO1xuICAgIHZhciBnZW5lcmFsUHJlZml4ZWRLZXkgPSBWRU5ET1JfUFJFRklYRVNbdmVuZG9yXTtcbiAgICB2YXIgcHJlZml4ZWRLZXlmcmFtZXMgPSBrZXlmcmFtZXNcbiAgICAgICAgLnJlcGxhY2UoZ2VuZXJhbFByZWZpeFJlZ0V4cCwgZ2VuZXJhbFByZWZpeGVkS2V5KVxuICAgICAgICAucmVwbGFjZSh0cmFuc2Zvcm1SZWdFeHAsIHByZWZpeGVkVHJhbnNmb3JtS2V5KTtcblxuICAgIHJldHVybiBwcmVmaXhlZEtleWZyYW1lcztcbiAgfVxuXG4gIC8qIVxuICAgKiBAcGFyYW0ge1Jla2FwaS5BY3Rvcn0gYWN0b3JcbiAgICogQHBhcmFtIHtzdHJpbmd9IGFuaW1OYW1lXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gY29tYmluZVByb3BlcnRpZXNcbiAgICogQHBhcmFtIHtBcnJheS48c3RyaW5nPj19IG9wdF92ZW5kb3JzXG4gICAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZz19IG9wdF9pdGVyYXRpb25zXG4gICAqIEBwYXJhbSB7Ym9vbGVhbj19IG9wdF9pc0NlbnRlcmVkXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGZ1bmN0aW9uIGdlbmVyYXRlQ1NTQ2xhc3MgKFxuICAgICAgYWN0b3IsIGFuaW1OYW1lLCBjb21iaW5lUHJvcGVydGllcywgb3B0X3ZlbmRvcnMsIG9wdF9pdGVyYXRpb25zLFxuICAgICAgb3B0X2lzQ2VudGVyZWQpIHtcblxuICAgIG9wdF92ZW5kb3JzID0gb3B0X3ZlbmRvcnMgfHwgWyd3MyddO1xuICAgIHZhciBjbGFzc0F0dHJzID0gW107XG4gICAgdmFyIHZlbmRvckF0dHJzO1xuXG4gICAgXy5lYWNoKG9wdF92ZW5kb3JzLCBmdW5jdGlvbiAodmVuZG9yKSB7XG4gICAgICB2ZW5kb3JBdHRycyA9IGdlbmVyYXRlQ1NTQW5pbWF0aW9uUHJvcGVydGllcyhcbiAgICAgICAgICBhY3RvciwgYW5pbU5hbWUsIHZlbmRvciwgY29tYmluZVByb3BlcnRpZXMsIG9wdF9pdGVyYXRpb25zLFxuICAgICAgICAgIG9wdF9pc0NlbnRlcmVkKTtcbiAgICAgIGNsYXNzQXR0cnMucHVzaCh2ZW5kb3JBdHRycyk7XG4gICAgfSk7XG5cbiAgICB2YXIgYm9pbGVycGxhdGVkQ2xhc3MgPSBwcmludGYoQ0xBU1NfQk9JTEVSUExBVEVcbiAgICAgICAgLFthbmltTmFtZSwgY2xhc3NBdHRycy5qb2luKCdcXG4nKV0pO1xuXG4gICAgcmV0dXJuIGJvaWxlcnBsYXRlZENsYXNzO1xuICB9XG5cbiAgLyohXG4gICAqIEBwYXJhbSB7UmVrYXBpLkFjdG9yfSBhY3RvclxuICAgKiBAcGFyYW0ge3N0cmluZ30gYW5pbU5hbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZlbmRvclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGNvbWJpbmVQcm9wZXJ0aWVzXG4gICAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZz19IG9wdF9pdGVyYXRpb25zXG4gICAqIEBwYXJhbSB7Ym9vbGVhbj19IG9wdF9pc0NlbnRlcmVkXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGZ1bmN0aW9uIGdlbmVyYXRlQ1NTQW5pbWF0aW9uUHJvcGVydGllcyAoXG4gICAgICBhY3RvciwgYW5pbU5hbWUsIHZlbmRvciwgY29tYmluZVByb3BlcnRpZXMsIG9wdF9pdGVyYXRpb25zLFxuICAgICAgb3B0X2lzQ2VudGVyZWQpIHtcbiAgICB2YXIgZ2VuZXJhdGVkUHJvcGVydGllcyA9IFtdO1xuICAgIHZhciBwcmVmaXggPSBWRU5ET1JfUFJFRklYRVNbdmVuZG9yXTtcblxuICAgIGdlbmVyYXRlZFByb3BlcnRpZXMucHVzaChnZW5lcmF0ZUFuaW1hdGlvbk5hbWVQcm9wZXJ0eShcbiAgICAgICAgICBhY3RvciwgYW5pbU5hbWUsIHByZWZpeCwgY29tYmluZVByb3BlcnRpZXMpKTtcbiAgICBnZW5lcmF0ZWRQcm9wZXJ0aWVzLnB1c2goXG4gICAgICAgIGdlbmVyYXRlQW5pbWF0aW9uRHVyYXRpb25Qcm9wZXJ0eShhY3RvciwgcHJlZml4KSk7XG4gICAgZ2VuZXJhdGVkUHJvcGVydGllcy5wdXNoKGdlbmVyYXRlQW5pbWF0aW9uRGVsYXlQcm9wZXJ0eShhY3RvciwgcHJlZml4KSk7XG4gICAgZ2VuZXJhdGVkUHJvcGVydGllcy5wdXNoKGdlbmVyYXRlQW5pbWF0aW9uRmlsbE1vZGVQcm9wZXJ0eShwcmVmaXgpKTtcbiAgICBnZW5lcmF0ZWRQcm9wZXJ0aWVzLnB1c2goZ2VuZXJhdGVBbmltYXRpb25UaW1pbmdGdW5jdGlvblByb3BlcnR5KHByZWZpeCkpO1xuICAgIGdlbmVyYXRlZFByb3BlcnRpZXMucHVzaChnZW5lcmF0ZUFuaW1hdGlvbkl0ZXJhdGlvblByb3BlcnR5KFxuICAgICAgICBhY3Rvci5yZWthcGksIHByZWZpeCwgb3B0X2l0ZXJhdGlvbnMpKTtcblxuICAgIGlmIChvcHRfaXNDZW50ZXJlZCkge1xuICAgICAgZ2VuZXJhdGVkUHJvcGVydGllcy5wdXNoKGdlbmVyYXRlQW5pbWF0aW9uQ2VudGVyaW5nUnVsZShwcmVmaXgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZ2VuZXJhdGVkUHJvcGVydGllcy5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIC8qIVxuICAgKiBAcGFyYW0ge1Jla2FwaS5BY3Rvcn0gYWN0b3JcbiAgICogQHBhcmFtIHtzdHJpbmd9IGFuaW1OYW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwcmVmaXhcbiAgICogQHBhcmFtIHtib29sZWFufSBjb21iaW5lUHJvcGVydGllc1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBmdW5jdGlvbiBnZW5lcmF0ZUFuaW1hdGlvbk5hbWVQcm9wZXJ0eSAoXG4gICAgICBhY3RvciwgYW5pbU5hbWUsIHByZWZpeCwgY29tYmluZVByb3BlcnRpZXMpIHtcblxuICAgIHZhciBhbmltYXRpb25OYW1lID0gcHJpbnRmKCcgICVzYW5pbWF0aW9uLW5hbWU6JywgW3ByZWZpeF0pO1xuXG4gICAgdmFyIHRyYWNrcyA9IGFjdG9yLmdldFRyYWNrTmFtZXMoKTtcblxuICAgIGlmIChjb21iaW5lUHJvcGVydGllcykge1xuICAgICAgYW5pbWF0aW9uTmFtZSArPSBwcmludGYoJyAlcy1rZXlmcmFtZXM7JywgW2FuaW1OYW1lXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIF8uZWFjaCh0cmFja3MsIGZ1bmN0aW9uICh0cmFja05hbWUpIHtcbiAgICAgICAgYW5pbWF0aW9uTmFtZSArPSBwcmludGYoJyAlcy0lcy1rZXlmcmFtZXMsJywgW2FuaW1OYW1lLCB0cmFja05hbWVdKTtcbiAgICAgIH0pO1xuICAgICAgYW5pbWF0aW9uTmFtZSA9IGFuaW1hdGlvbk5hbWUuc2xpY2UoMCwgYW5pbWF0aW9uTmFtZS5sZW5ndGggLSAxKTtcbiAgICAgIGFuaW1hdGlvbk5hbWUgKz0gJzsnO1xuICAgIH1cblxuICAgIHJldHVybiBhbmltYXRpb25OYW1lO1xuICB9XG5cbiAgLyohXG4gICAqIEBwYXJhbSB7UmVrYXBpLkFjdG9yfSBhY3RvclxuICAgKiBAcGFyYW0ge3N0cmluZ30gYW5pbU5hbWVcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZnVuY3Rpb24gZ2VuZXJhdGVBbmltYXRpb25EdXJhdGlvblByb3BlcnR5IChhY3RvciwgcHJlZml4KSB7XG4gICAgcmV0dXJuIHByaW50ZignICAlc2FuaW1hdGlvbi1kdXJhdGlvbjogJXNtczsnXG4gICAgICAgICxbcHJlZml4LCBhY3Rvci5nZXRFbmQoKSAtIGFjdG9yLmdldFN0YXJ0KCldKTtcbiAgfVxuXG4gIC8qIVxuICAgKiBAcGFyYW0ge1Jla2FwaS5BY3Rvcn0gYWN0b3JcbiAgICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSBkZWxheVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBmdW5jdGlvbiBnZW5lcmF0ZUFuaW1hdGlvbkRlbGF5UHJvcGVydHkgKGFjdG9yLCBwcmVmaXgpIHtcbiAgICByZXR1cm4gcHJpbnRmKCcgICVzYW5pbWF0aW9uLWRlbGF5OiAlc21zOycsIFtwcmVmaXgsIGFjdG9yLmdldFN0YXJ0KCldKTtcbiAgfVxuXG4gIC8qIVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcHJlZml4XG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGZ1bmN0aW9uIGdlbmVyYXRlQW5pbWF0aW9uRmlsbE1vZGVQcm9wZXJ0eSAocHJlZml4KSB7XG4gICAgcmV0dXJuIHByaW50ZignICAlc2FuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzOycsIFtwcmVmaXhdKTtcbiAgfVxuXG4gIC8qIVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcHJlZml4XG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGZ1bmN0aW9uIGdlbmVyYXRlQW5pbWF0aW9uVGltaW5nRnVuY3Rpb25Qcm9wZXJ0eSAocHJlZml4KSB7XG4gICAgcmV0dXJuIHByaW50ZignICAlc2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjsnLCBbcHJlZml4XSk7XG4gIH1cblxuICAvKiFcbiAgICogQHBhcmFtIHtSZWthcGl9IHJla2FwaVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcHJlZml4XG4gICAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZz19IG9wdF9pdGVyYXRpb25zXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGZ1bmN0aW9uIGdlbmVyYXRlQW5pbWF0aW9uSXRlcmF0aW9uUHJvcGVydHkgKHJla2FwaSwgcHJlZml4LCBvcHRfaXRlcmF0aW9ucykge1xuICAgIHZhciBpdGVyYXRpb25Db3VudDtcbiAgICBpZiAob3B0X2l0ZXJhdGlvbnMpIHtcbiAgICAgIGl0ZXJhdGlvbkNvdW50ID0gb3B0X2l0ZXJhdGlvbnM7XG4gICAgfSBlbHNlIHtcbiAgICAgIGl0ZXJhdGlvbkNvdW50ID0gcmVrYXBpLl90aW1lc1RvSXRlcmF0ZSA9PT0gLTFcbiAgICAgICAgPyAnaW5maW5pdGUnXG4gICAgICAgIDogcmVrYXBpLl90aW1lc1RvSXRlcmF0ZTtcbiAgICB9XG5cbiAgICB2YXIgcnVsZVRlbXBsYXRlID0gJyAgJXNhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAlczsnO1xuXG4gICAgcmV0dXJuIHByaW50ZihydWxlVGVtcGxhdGUsIFtwcmVmaXgsIGl0ZXJhdGlvbkNvdW50XSk7XG4gIH1cblxuICAvKiFcbiAgICogQHBhcmFtIHtzdHJpbmd9IHByZWZpeFxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBmdW5jdGlvbiBnZW5lcmF0ZUFuaW1hdGlvbkNlbnRlcmluZ1J1bGUgKHByZWZpeCkge1xuICAgIHJldHVybiBwcmludGYoJyAgJXN0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7JywgW3ByZWZpeF0pO1xuICB9XG5cbiAgLy8gT1BUSU1JWkVEIE9VVFBVVCBHRU5FUkFUT1IgRlVOQ1RJT05TXG4gIC8vXG5cbiAgLyohXG4gICAqIEBwYXJhbSB7UmVrYXBpLktleWZyYW1lUHJvcGVydHl9IHByb3BlcnR5XG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiBjYW5PcHRpbWl6ZUtleWZyYW1lUHJvcGVydHkgKHByb3BlcnR5KSB7XG4gICAgdmFyIGNhbk9wdGltaXplID0gZmFsc2U7XG4gICAgdmFyIG5leHRQcm9wZXJ0eSA9IHByb3BlcnR5Lm5leHRQcm9wZXJ0eTtcblxuICAgIGlmIChuZXh0UHJvcGVydHkpIHtcbiAgICAgIGlmIChpc1NlZ21lbnRBV2FpdChwcm9wZXJ0eSwgbmV4dFByb3BlcnR5KSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIGVhc2luZ0NodW5rcyA9IG5leHRQcm9wZXJ0eS5lYXNpbmcuc3BsaXQoJyAnKTtcblxuICAgICAgdmFyIGkgPSAwLCBsZW4gPSBlYXNpbmdDaHVua3MubGVuZ3RoO1xuICAgICAgdmFyIHByZXZpb3VzQ2h1bmsgPSBlYXNpbmdDaHVua3NbMF07XG4gICAgICB2YXIgY3VycmVudENodW5rO1xuICAgICAgZm9yIChpOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgY3VycmVudENodW5rID0gZWFzaW5nQ2h1bmtzW2ldO1xuICAgICAgICBpZiAoIShCRVpJRVJTW2N1cnJlbnRDaHVua10pXG4gICAgICAgICAgICB8fCBwcmV2aW91c0NodW5rICE9PSBjdXJyZW50Q2h1bmspIHtcbiAgICAgICAgICBjYW5PcHRpbWl6ZSA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNhbk9wdGltaXplID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByZXZpb3VzQ2h1bmsgPSBjdXJyZW50Q2h1bms7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhbk9wdGltaXplO1xuICB9XG5cbiAgLyohXG4gICAqIEBwYXJhbSB7UmVrYXBpLktleWZyYW1lUHJvcGVydHl9IHByb3BlcnR5XG4gICAqIEBwYXJhbSB7UmVrYXBpLktleWZyYW1lUHJvcGVydHl9IG5leHRQcm9wZXJ0eVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gaXNTZWdtZW50QVdhaXQgKHByb3BlcnR5LCBuZXh0UHJvcGVydHkpIHtcbiAgICBpZiAocHJvcGVydHkubmFtZSA9PT0gbmV4dFByb3BlcnR5Lm5hbWUgJiZcbiAgICAgICAgcHJvcGVydHkudmFsdWUgPT09IG5leHRQcm9wZXJ0eS52YWx1ZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyohXG4gICAqIEBwYXJhbSB7UmVrYXBpLkFjdG9yfSBhY3RvclxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gY2FuT3B0aW1pemVBbnlLZXlmcmFtZVByb3BlcnRpZXMgKGFjdG9yKSB7XG4gICAgcmV0dXJuIF8uYW55KGFjdG9yLl9rZXlmcmFtZVByb3BlcnRpZXMsIGNhbk9wdGltaXplS2V5ZnJhbWVQcm9wZXJ0eSk7XG4gIH1cblxuICAvKiFcbiAgICogQHBhcmFtIHtSZWthcGkuS2V5ZnJhbWVQcm9wZXJ0eX0gcHJvcGVydHlcbiAgICogQHBhcmFtIHtudW1iZXJ9IGZyb21QZXJjZW50XG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0b1BlcmNlbnRcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZnVuY3Rpb24gZ2VuZXJhdGVPcHRpbWl6ZWRLZXlmcmFtZVNlZ21lbnQgKFxuICAgICAgcHJvcGVydHksIGZyb21QZXJjZW50LCB0b1BlcmNlbnQpIHtcblxuICAgIHZhciBhY2N1bXVsYXRvciA9IFtdO1xuICAgIHZhciBnZW5lcmFsTmFtZSA9IHByb3BlcnR5Lm5hbWU7XG5cbiAgICBpZiAocHJvcGVydHkubmFtZSA9PT0gJ3RyYW5zZm9ybScpIHtcbiAgICAgIGdlbmVyYWxOYW1lID0gVFJBTlNGT1JNX1RPS0VOO1xuICAgIH1cblxuICAgIHZhciBlYXNpbmdGb3JtdWxhID0gQkVaSUVSU1twcm9wZXJ0eS5uZXh0UHJvcGVydHkuZWFzaW5nLnNwbGl0KCcgJylbMF1dO1xuICAgIHZhciB0aW1pbmdGbkNodW5rID0gcHJpbnRmKCdjdWJpYy1iZXppZXIoJXMpJywgW2Vhc2luZ0Zvcm11bGFdKTtcblxuICAgIHZhciBhZGp1c3RlZEZyb21QZXJjZW50ID0gaXNJbnQoZnJvbVBlcmNlbnQpID9cbiAgICAgICAgZnJvbVBlcmNlbnQgOiBmcm9tUGVyY2VudC50b0ZpeGVkKDIpO1xuICAgIHZhciBhZGp1c3RlZFRvUGVyY2VudCA9IGlzSW50KHRvUGVyY2VudCkgP1xuICAgICAgICB0b1BlcmNlbnQgOiB0b1BlcmNlbnQudG9GaXhlZCgyKTtcblxuICAgIGFjY3VtdWxhdG9yLnB1c2gocHJpbnRmKCcgICVzJSB7JXM6JXM7JXNhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiAlczt9JyxcbiAgICAgICAgICBbYWRqdXN0ZWRGcm9tUGVyY2VudCwgZ2VuZXJhbE5hbWUsIHByb3BlcnR5LnZhbHVlLCBWRU5ET1JfVE9LRU5cbiAgICAgICAgICAsdGltaW5nRm5DaHVua10pKTtcbiAgICBhY2N1bXVsYXRvci5wdXNoKHByaW50ZignICAlcyUgeyVzOiVzO30nLFxuICAgICAgICAgIFthZGp1c3RlZFRvUGVyY2VudCwgZ2VuZXJhbE5hbWUsIHByb3BlcnR5Lm5leHRQcm9wZXJ0eS52YWx1ZV0pKTtcblxuICAgIHJldHVybiBhY2N1bXVsYXRvci5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIC8vIFVOLU9QVElNSVpFRCBPVVRQVVQgR0VORVJBVE9SIEZVTkNUSU9OU1xuICAvL1xuXG4gIC8qIVxuICAgKiBAcGFyYW0ge1Jla2FwaS5BY3Rvcn0gYWN0b3JcbiAgICogQHBhcmFtIHtudW1iZXJ9IHN0ZXBzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0cmFja1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBmdW5jdGlvbiBnZW5lcmF0ZUFjdG9yS2V5ZnJhbWVzIChhY3Rvciwgc3RlcHMsIHRyYWNrKSB7XG4gICAgdmFyIGFjY3VtdWxhdG9yID0gW107XG4gICAgdmFyIGFjdG9yRW5kID0gYWN0b3IuZ2V0RW5kKCk7XG4gICAgdmFyIGFjdG9yU3RhcnQgPSBhY3Rvci5nZXRTdGFydCgpO1xuICAgIHZhciBhY3Rvckxlbmd0aCA9IGFjdG9yLmdldExlbmd0aCgpO1xuICAgIHZhciBsZWFkaW5nV2FpdCA9IHNpbXVsYXRlTGVhZGluZ1dhaXQoYWN0b3IsIHRyYWNrLCBhY3RvclN0YXJ0KTtcblxuICAgIGlmIChsZWFkaW5nV2FpdCkge1xuICAgICAgYWNjdW11bGF0b3IucHVzaChsZWFkaW5nV2FpdCk7XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzU2VnbWVudFdhc09wdGltaXplZCA9IGZhbHNlO1xuICAgIF8uZWFjaChhY3Rvci5fcHJvcGVydHlUcmFja3NbdHJhY2tdLCBmdW5jdGlvbiAocHJvcCwgcHJvcE5hbWUpIHtcbiAgICAgIHZhciBmcm9tUGVyY2VudCA9IGNhbGN1bGF0ZVN0ZXBQZXJjZW50KHByb3AsIGFjdG9yU3RhcnQsIGFjdG9yTGVuZ3RoKTtcbiAgICAgIHZhciBuZXh0UHJvcCA9IHByb3AubmV4dFByb3BlcnR5O1xuXG4gICAgICB2YXIgdG9QZXJjZW50LCBpbmNyZW1lbnRzLCBpbmNyZW1lbnRTaXplO1xuICAgICAgaWYgKG5leHRQcm9wKSB7XG4gICAgICAgIHRvUGVyY2VudCA9IGNhbGN1bGF0ZVN0ZXBQZXJjZW50KG5leHRQcm9wLCBhY3RvclN0YXJ0LCBhY3Rvckxlbmd0aCk7XG4gICAgICAgIHZhciBkZWx0YSA9IHRvUGVyY2VudCAtIGZyb21QZXJjZW50O1xuICAgICAgICBpbmNyZW1lbnRzID0gTWF0aC5mbG9vcigoZGVsdGEgLyAxMDApICogc3RlcHMpIHx8IDE7XG4gICAgICAgIGluY3JlbWVudFNpemUgPSBkZWx0YSAvIGluY3JlbWVudHM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b1BlcmNlbnQgPSAxMDA7XG4gICAgICAgIGluY3JlbWVudHMgPSAxO1xuICAgICAgICBpbmNyZW1lbnRTaXplID0gMTtcbiAgICAgIH1cblxuICAgICAgdmFyIHRyYWNrU2VnbWVudDtcbiAgICAgIGlmIChuZXh0UHJvcCAmJiBpc1NlZ21lbnRBV2FpdChwcm9wLCBuZXh0UHJvcCkpIHtcbiAgICAgICAgdHJhY2tTZWdtZW50ID0gZ2VuZXJhdGVBY3RvclRyYWNrV2FpdFNlZ21lbnQoXG4gICAgICAgICAgICBhY3RvciwgYWN0b3JTdGFydCwgcHJvcCwgbmV4dFByb3AsIGZyb21QZXJjZW50LCB0b1BlcmNlbnQpO1xuXG4gICAgICAgIGlmIChwcmV2aW91c1NlZ21lbnRXYXNPcHRpbWl6ZWQpIHtcbiAgICAgICAgICB0cmFja1NlZ21lbnQuc2hpZnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByZXZpb3VzU2VnbWVudFdhc09wdGltaXplZCA9IGZhbHNlO1xuXG4gICAgICB9IGVsc2UgaWYgKGNhbk9wdGltaXplS2V5ZnJhbWVQcm9wZXJ0eShwcm9wKSkge1xuICAgICAgICB0cmFja1NlZ21lbnQgPSBnZW5lcmF0ZU9wdGltaXplZEtleWZyYW1lU2VnbWVudChcbiAgICAgICAgICAgIHByb3AsIGZyb21QZXJjZW50LCB0b1BlcmNlbnQpO1xuXG4gICAgICAgIC8vIElmIHRoaXMgYW5kIHRoZSBwcmV2aW91cyBzZWdtZW50IGFyZSBvcHRpbWl6ZWQsIHJlbW92ZSB0aGVcbiAgICAgICAgLy8gZGVzdGluYXRpb24ga2V5ZnJhbWUgb2YgdGhlIHByZXZpb3VzIHN0ZXAuICBUaGUgc3RhcnRpbmcga2V5ZnJhbWUgb2ZcbiAgICAgICAgLy8gdGhlIG5ld2VzdCBzZWdtZW50IG1ha2VzIGl0IHJlZHVuZGFudC5cbiAgICAgICAgaWYgKHByZXZpb3VzU2VnbWVudFdhc09wdGltaXplZCkge1xuICAgICAgICAgIHZhciBhY2N1bXVsYXRvckxlbmd0aCA9IGFjY3VtdWxhdG9yLmxlbmd0aDtcbiAgICAgICAgICB2YXIgcHJldmlvdXNUcmFja1NlZ21lbnQgPSBhY2N1bXVsYXRvclthY2N1bXVsYXRvckxlbmd0aCAtIDFdO1xuICAgICAgICAgIHZhciBvcHRpbWl6ZWRQcmV2aW91c1RyYWNrU2VnbWVudCA9XG4gICAgICAgICAgICAgIHByZXZpb3VzVHJhY2tTZWdtZW50LnNwbGl0KCdcXG4nKVswXTtcbiAgICAgICAgICBhY2N1bXVsYXRvclthY2N1bXVsYXRvckxlbmd0aCAtIDFdID0gb3B0aW1pemVkUHJldmlvdXNUcmFja1NlZ21lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBwcmV2aW91c1NlZ21lbnRXYXNPcHRpbWl6ZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJhY2tTZWdtZW50ID0gZ2VuZXJhdGVBY3RvclRyYWNrU2VnbWVudChcbiAgICAgICAgICAgIGFjdG9yLCBpbmNyZW1lbnRzLCBpbmNyZW1lbnRTaXplLCBhY3RvclN0YXJ0LCBmcm9tUGVyY2VudCwgcHJvcCk7XG5cbiAgICAgICAgaWYgKHByZXZpb3VzU2VnbWVudFdhc09wdGltaXplZCkge1xuICAgICAgICAgIHRyYWNrU2VnbWVudC5zaGlmdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRyYWNrU2VnbWVudC5sZW5ndGgpIHtcbiAgICAgICAgICB0cmFja1NlZ21lbnQgPSB0cmFja1NlZ21lbnQuam9pbignXFxuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBwcmV2aW91c1NlZ21lbnRXYXNPcHRpbWl6ZWQgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRyYWNrU2VnbWVudC5sZW5ndGgpIHtcbiAgICAgICAgYWNjdW11bGF0b3IucHVzaCh0cmFja1NlZ21lbnQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIHRyYWlsaW5nV2FpdCA9XG4gICAgICAgIHNpbXVsYXRlVHJhaWxpbmdXYWl0KGFjdG9yLCB0cmFjaywgYWN0b3JTdGFydCwgYWN0b3JFbmQpO1xuXG4gICAgaWYgKHRyYWlsaW5nV2FpdCkge1xuICAgICAgYWNjdW11bGF0b3IucHVzaCh0cmFpbGluZ1dhaXQpO1xuICAgIH1cblxuICAgIHJldHVybiBhY2N1bXVsYXRvci5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIC8qIVxuICAgKiBAcGFyYW0ge1Jla2FwaS5BY3Rvcn0gYWN0b3JcbiAgICogQHBhcmFtIHtudW1iZXJ9IHN0ZXBzXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGZ1bmN0aW9uIGdlbmVyYXRlQ29tYmluZWRBY3RvcktleWZyYW1lcyAoYWN0b3IsIHN0ZXBzKSB7XG4gICAgcmV0dXJuIGdlbmVyYXRlQWN0b3JUcmFja1NlZ21lbnQoXG4gICAgICAgIGFjdG9yLCBzdGVwcyArIDEsIDEwMCAvIHN0ZXBzLCAwLCAwKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIC8qIVxuICAgKiBAcGFyYW0ge1Jla2FwaS5BY3Rvcn0gYWN0b3JcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRyYWNrXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBhY3RvclN0YXJ0XG4gICAqIEByZXR1cm4ge3N0cmluZ3x1bmRlZmluZWR9XG4gICAqL1xuICBmdW5jdGlvbiBzaW11bGF0ZUxlYWRpbmdXYWl0IChhY3RvciwgdHJhY2ssIGFjdG9yU3RhcnQpIHtcbiAgICB2YXIgZmlyc3RQcm9wID0gYWN0b3IuX3Byb3BlcnR5VHJhY2tzW3RyYWNrXVswXTtcblxuICAgIGlmICh0eXBlb2YgZmlyc3RQcm9wICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAmJiBmaXJzdFByb3AubWlsbGlzZWNvbmQgIT09IGFjdG9yU3RhcnQpIHtcbiAgICAgIHZhciBmYWtlRmlyc3RQcm9wID0gZ2VuZXJhdGVBY3RvclRyYWNrU2VnbWVudChcbiAgICAgICAgICBhY3RvciwgMSwgMSwgZmlyc3RQcm9wLm1pbGxpc2Vjb25kLCAwLCBmaXJzdFByb3ApO1xuICAgICAgcmV0dXJuIGZha2VGaXJzdFByb3Auam9pbignXFxuJyk7XG4gICAgfVxuICB9XG5cbiAgLyohXG4gICAqIEBwYXJhbSB7UmVrYXBpLkFjdG9yfSBhY3RvclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHJhY2tcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFjdG9yU3RhcnRcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFjdG9yRW5kXG4gICAqIEByZXR1cm4ge3N0cmluZ3x1bmRlZmluZWR9XG4gICAqL1xuICBmdW5jdGlvbiBzaW11bGF0ZVRyYWlsaW5nV2FpdCAoYWN0b3IsIHRyYWNrLCBhY3RvclN0YXJ0LCBhY3RvckVuZCkge1xuICAgIHZhciBsYXN0UHJvcCA9IF8ubGFzdChhY3Rvci5fcHJvcGVydHlUcmFja3NbdHJhY2tdKTtcblxuICAgIGlmICh0eXBlb2YgbGFzdFByb3AgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICYmIGxhc3RQcm9wLm1pbGxpc2Vjb25kICE9PSBhY3RvckVuZCkge1xuICAgICAgdmFyIGZha2VMYXN0UHJvcCA9IGdlbmVyYXRlQWN0b3JUcmFja1NlZ21lbnQoXG4gICAgICAgICAgYWN0b3IsIDEsIDEsIGFjdG9yU3RhcnQsIDEwMCwgbGFzdFByb3ApO1xuICAgICAgcmV0dXJuIGZha2VMYXN0UHJvcC5qb2luKCdcXG4nKTtcbiAgICB9XG4gIH1cblxuICAvKiFcbiAgICogQHBhcmFtIHtSZWthcGkuS2V5ZnJhbWVQcm9wZXJ0eX0gcHJvcGVydHlcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFjdG9yU3RhcnRcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFjdG9yTGVuZ3RoXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGZ1bmN0aW9uIGNhbGN1bGF0ZVN0ZXBQZXJjZW50IChwcm9wZXJ0eSwgYWN0b3JTdGFydCwgYWN0b3JMZW5ndGgpIHtcbiAgICByZXR1cm4gKChwcm9wZXJ0eS5taWxsaXNlY29uZCAtIGFjdG9yU3RhcnQpIC8gYWN0b3JMZW5ndGgpICogMTAwO1xuICB9XG5cbiAgLyohXG4gICAqIEBwYXJhbSB7UmVrYXBpLkFjdG9yfSBhY3RvclxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5jcmVtZW50c1xuICAgKiBAcGFyYW0ge251bWJlcn0gaW5jcmVtZW50U2l6ZVxuICAgKiBAcGFyYW0ge251bWJlcn0gYWN0b3JTdGFydFxuICAgKiBAcGFyYW0ge251bWJlcn0gZnJvbVBlcmNlbnRcbiAgICogQHBhcmFtIHtSZWthcGkuS2V5ZnJhbWVQcm9wZXJ0eT19IG9wdF9mcm9tUHJvcFxuICAgKiBAcmV0dXJuIHtBcnJheS48c3RyaW5nPn1cbiAgICovXG4gIGZ1bmN0aW9uIGdlbmVyYXRlQWN0b3JUcmFja1NlZ21lbnQgKFxuICAgICAgYWN0b3IsIGluY3JlbWVudHMsIGluY3JlbWVudFNpemUsIGFjdG9yU3RhcnQsIGZyb21QZXJjZW50LFxuICAgICAgb3B0X2Zyb21Qcm9wKSB7XG5cbiAgICB2YXIgYWNjdW11bGF0b3IgPSBbXTtcbiAgICB2YXIgYWN0b3JMZW5ndGggPSBhY3Rvci5nZXRMZW5ndGgoKTtcbiAgICB2YXIgaSwgYWRqdXN0ZWRQZXJjZW50LCBzdGVwUHJlZml4O1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGluY3JlbWVudHM7IGkrKykge1xuICAgICAgYWRqdXN0ZWRQZXJjZW50ID0gZnJvbVBlcmNlbnQgKyAoaSAqIGluY3JlbWVudFNpemUpO1xuICAgICAgYWN0b3IuX3VwZGF0ZVN0YXRlKFxuICAgICAgICAgICgoYWRqdXN0ZWRQZXJjZW50IC8gMTAwKSAqIGFjdG9yTGVuZ3RoKSArIGFjdG9yU3RhcnQpO1xuICAgICAgc3RlcFByZWZpeCA9ICthZGp1c3RlZFBlcmNlbnQudG9GaXhlZCgyKSArICclICc7XG5cbiAgICAgIGlmIChvcHRfZnJvbVByb3ApIHtcbiAgICAgICAgYWNjdW11bGF0b3IucHVzaChcbiAgICAgICAgICAgICcgICcgKyBzdGVwUHJlZml4ICsgc2VyaWFsaXplQWN0b3JTdGVwKGFjdG9yLCBvcHRfZnJvbVByb3AubmFtZSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWNjdW11bGF0b3IucHVzaCgnICAnICsgc3RlcFByZWZpeCArIHNlcmlhbGl6ZUFjdG9yU3RlcChhY3RvcikpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgfVxuXG4gIC8qIVxuICAgKiBAcGFyYW0ge1Jla2FwaS5BY3Rvcn0gYWN0b3JcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFjdG9yU3RhcnRcbiAgICogQHBhcmFtIHtSZWthcGkuS2V5ZnJhbWVQcm9wZXJ0eX0gZnJvbVByb3BcbiAgICogQHBhcmFtIHtSZWthcGkuS2V5ZnJhbWVQcm9wZXJ0eX0gdG9Qcm9wXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBmcm9tUGVyY2VudFxuICAgKiBAcGFyYW0ge251bWJlcn0gdG9QZXJjZW50XG4gICAqIEByZXR1cm4ge0FycmF5LjxzdHJpbmc+fVxuICAgKi9cbiAgZnVuY3Rpb24gZ2VuZXJhdGVBY3RvclRyYWNrV2FpdFNlZ21lbnQgKFxuICAgICAgYWN0b3IsIGFjdG9yU3RhcnQsIGZyb21Qcm9wLCB0b1Byb3AsIGZyb21QZXJjZW50LCB0b1BlcmNlbnQpIHtcbiAgICB2YXIgc2VnbWVudCA9IGdlbmVyYXRlQWN0b3JUcmFja1NlZ21lbnQoXG4gICAgICAgIGFjdG9yLCAxLCB0b1BlcmNlbnQgLSBmcm9tUGVyY2VudCwgYWN0b3JTdGFydCwgZnJvbVBlcmNlbnQsIGZyb21Qcm9wKTtcbiAgICByZXR1cm4gc2VnbWVudDtcbiAgfVxuXG4gIC8qIVxuICAgKiBAcGFyYW0ge1Jla2FwaS5BY3Rvcn0gYWN0b3JcbiAgICogQHBhcmFtIHtzdHJpbmc9fSBvcHRfdGFyZ2V0UHJvcFxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBmdW5jdGlvbiBzZXJpYWxpemVBY3RvclN0ZXAgKGFjdG9yLCBvcHRfdGFyZ2V0UHJvcCkge1xuICAgIHZhciBzZXJpYWxpemVkUHJvcHMgPSBbJ3snXTtcblxuICAgIHZhciBwcm9wc1RvU2VyaWFsaXplO1xuICAgIGlmIChvcHRfdGFyZ2V0UHJvcCkge1xuICAgICAgcHJvcHNUb1NlcmlhbGl6ZSA9IHt9O1xuXG4gICAgICB2YXIgY3VycmVudFByb3BTdGF0ZSA9IGFjdG9yLmdldCgpW29wdF90YXJnZXRQcm9wXTtcbiAgICAgIGlmICh0eXBlb2YgY3VycmVudFByb3BTdGF0ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcHJvcHNUb1NlcmlhbGl6ZVtvcHRfdGFyZ2V0UHJvcF0gPSBjdXJyZW50UHJvcFN0YXRlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwcm9wc1RvU2VyaWFsaXplID0gYWN0b3IuZ2V0KCk7XG4gICAgfVxuXG4gICAgdmFyIHByaW50VmFsO1xuICAgIF8uZWFjaChwcm9wc1RvU2VyaWFsaXplLCBmdW5jdGlvbiAodmFsLCBrZXkpIHtcbiAgICAgIHByaW50VmFsID0gdmFsO1xuICAgICAgdmFyIHByaW50S2V5ID0ga2V5O1xuXG4gICAgICBpZiAoa2V5ID09PSAndHJhbnNmb3JtJykge1xuICAgICAgICBwcmludEtleSA9IFRSQU5TRk9STV9UT0tFTjtcbiAgICAgIH1cblxuICAgICAgc2VyaWFsaXplZFByb3BzLnB1c2gocHJpbnRLZXkgKyAnOicgKyBwcmludFZhbCArICc7Jyk7XG4gICAgfSk7XG5cbiAgICBzZXJpYWxpemVkUHJvcHMucHVzaCgnfScpO1xuICAgIHJldHVybiBzZXJpYWxpemVkUHJvcHMuam9pbignJyk7XG4gIH1cblxuICAvLyBFeHBvc2VzIGhlbHBlciBmdW5jdGlvbnMgZm9yIHVuaXQgdGVzdGluZy4gIEdldHMgY29tcGlsZWQgYXdheSBpbiBidWlsZFxuICAvLyBwcm9jZXNzLlxuICBpZiAoUkVLQVBJX0RFQlVHKSB7XG4gICAgUmVrYXBpLl9wcml2YXRlLmNzc1JlbmRlcmVyID0ge1xuICAgICAgJ1RSQU5TRk9STV9UT0tFTic6IFRSQU5TRk9STV9UT0tFTlxuICAgICAgLCdWRU5ET1JfVE9LRU4nOiBWRU5ET1JfVE9LRU5cbiAgICAgICwnYXBwbHlWZW5kb3JCb2lsZXJwbGF0ZXMnOiBhcHBseVZlbmRvckJvaWxlcnBsYXRlc1xuICAgICAgLCdhcHBseVZlbmRvclByb3BlcnR5UHJlZml4ZXMnOiBhcHBseVZlbmRvclByb3BlcnR5UHJlZml4ZXNcbiAgICAgICwnZ2VuZXJhdGVCb2lsZXJwbGF0ZWRLZXlmcmFtZXMnOiBnZW5lcmF0ZUJvaWxlcnBsYXRlZEtleWZyYW1lc1xuICAgICAgLCdnZW5lcmF0ZUNTU0NsYXNzJzogZ2VuZXJhdGVDU1NDbGFzc1xuICAgICAgLCdnZW5lcmF0ZUNTU0FuaW1hdGlvblByb3BlcnRpZXMnOiBnZW5lcmF0ZUNTU0FuaW1hdGlvblByb3BlcnRpZXNcbiAgICAgICwnZ2VuZXJhdGVBY3RvcktleWZyYW1lcyc6IGdlbmVyYXRlQWN0b3JLZXlmcmFtZXNcbiAgICAgICwnZ2VuZXJhdGVBY3RvclRyYWNrU2VnbWVudCc6IGdlbmVyYXRlQWN0b3JUcmFja1NlZ21lbnRcbiAgICAgICwnc2VyaWFsaXplQWN0b3JTdGVwJzogc2VyaWFsaXplQWN0b3JTdGVwXG4gICAgICAsJ2dlbmVyYXRlQW5pbWF0aW9uTmFtZVByb3BlcnR5JzogZ2VuZXJhdGVBbmltYXRpb25OYW1lUHJvcGVydHlcbiAgICAgICwnZ2VuZXJhdGVBbmltYXRpb25EdXJhdGlvblByb3BlcnR5JzogZ2VuZXJhdGVBbmltYXRpb25EdXJhdGlvblByb3BlcnR5XG4gICAgICAsJ2dlbmVyYXRlQW5pbWF0aW9uRGVsYXlQcm9wZXJ0eSc6IGdlbmVyYXRlQW5pbWF0aW9uRGVsYXlQcm9wZXJ0eVxuICAgICAgLCdnZW5lcmF0ZUFuaW1hdGlvbkZpbGxNb2RlUHJvcGVydHknOiBnZW5lcmF0ZUFuaW1hdGlvbkZpbGxNb2RlUHJvcGVydHlcbiAgICAgICwnZ2VuZXJhdGVBbmltYXRpb25UaW1pbmdGdW5jdGlvblByb3BlcnR5JzpcbiAgICAgICAgICBnZW5lcmF0ZUFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uUHJvcGVydHlcbiAgICAgICwnZ2VuZXJhdGVBbmltYXRpb25JdGVyYXRpb25Qcm9wZXJ0eSc6IGdlbmVyYXRlQW5pbWF0aW9uSXRlcmF0aW9uUHJvcGVydHlcbiAgICAgICwnZ2VuZXJhdGVBbmltYXRpb25DZW50ZXJpbmdSdWxlJzogZ2VuZXJhdGVBbmltYXRpb25DZW50ZXJpbmdSdWxlXG4gICAgICAsJ3NpbXVsYXRlTGVhZGluZ1dhaXQnOiBzaW11bGF0ZUxlYWRpbmdXYWl0XG4gICAgICAsJ3NpbXVsYXRlVHJhaWxpbmdXYWl0Jzogc2ltdWxhdGVUcmFpbGluZ1dhaXRcbiAgICAgICwnY2FuT3B0aW1pemVLZXlmcmFtZVByb3BlcnR5JzogY2FuT3B0aW1pemVLZXlmcmFtZVByb3BlcnR5XG4gICAgICAsJ2Nhbk9wdGltaXplQW55S2V5ZnJhbWVQcm9wZXJ0aWVzJzogY2FuT3B0aW1pemVBbnlLZXlmcmFtZVByb3BlcnRpZXNcbiAgICAgICwnZ2VuZXJhdGVPcHRpbWl6ZWRLZXlmcmFtZVNlZ21lbnQnOiBnZW5lcmF0ZU9wdGltaXplZEtleWZyYW1lU2VnbWVudFxuICAgICAgLCdnZXRBY3RvckNTUyc6IGdldEFjdG9yQ1NTXG4gICAgfTtcbiAgfVxufSk7XG5cbnZhciByZWthcGkgPSBmdW5jdGlvbiAoZ2xvYmFsLCBkZXBzKSB7XG5cbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8vIElmIGBkZXBzYCBpcyBkZWZpbmVkLCBpdCBtZWFucyB0aGF0IFJla2FwaSBpcyBsb2FkZWQgdmlhIEFNRC5cbiAgLy8gRG9uJ3QgdXNlIGdsb2JhbCBjb250ZXh0IGluIHRoaXMgY2FzZSBzbyB0aGF0IHRoZSBnbG9iYWwgc2NvcGVcbiAgLy8gaXMgbm90IHBvbGx1dGVkIGJ5IHRoZSBSZWthcGkgb2JqZWN0LlxuICB2YXIgY29udGV4dCA9IGRlcHMgPyB7fSA6IGdsb2JhbDtcblxuICB2YXIgXyA9IChkZXBzICYmIGRlcHMudW5kZXJzY29yZSkgPyBkZXBzLnVuZGVyc2NvcmUgOiBjb250ZXh0Ll87XG4gIHZhciBUd2VlbmFibGUgPSAoZGVwcyAmJiBkZXBzLlR3ZWVuYWJsZSkgP1xuICAgICAgZGVwcy5Ud2VlbmFibGUgOiBjb250ZXh0LlR3ZWVuYWJsZTtcblxuICByZWthcGlDb3JlKGNvbnRleHQsIF8sIFR3ZWVuYWJsZSk7XG5cbiAgXy5lYWNoKHJla2FwaU1vZHVsZXMsIGZ1bmN0aW9uIChtb2R1bGUpIHtcbiAgICBtb2R1bGUoY29udGV4dCk7XG4gIH0pO1xuXG4gIHJldHVybiBjb250ZXh0LlJla2FwaTtcbn07XG5cbmlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgdmFyIHVuZGVyc2NvcmVBbHJlYWR5SW5Vc2UgPSAodHlwZW9mIF8gIT09ICd1bmRlZmluZWQnKTtcblxuICAvLyBFeHBvc2UgUmVrYXBpIGFzIGFuIEFNRCBtb2R1bGUgaWYgaXQncyBsb2FkZWQgd2l0aCBSZXF1aXJlSlMgb3Igc2ltaWxhci5cbiAgLy8gU2hpZnR5IGFuZCBVbmRlcnNjb3JlIGFyZSBzZXQgYXMgZGVwZW5kZW5jaWVzIG9mIHRoaXMgbW9kdWxlLlxuICAvL1xuICAvLyBUaGUgcmVrYXBpIG1vZHVsZSBpcyBhbm9ueW1vdXMgc28gdGhhdCBpdCBjYW4gYmUgcmVxdWlyZWQgd2l0aCBhbnkgbmFtZS5cbiAgLy8gRXhhbXBsZTogZGVmaW5lKFsndmVuZG9yL3Jla2FwaS5taW4nXSwgZnVuY3Rpb24oUmVrYXBpKSB7IC4uLiB9KTtcbiAgZGVmaW5lKFsnc2hpZnR5JywgJ3VuZGVyc2NvcmUnXSwgZnVuY3Rpb24gKFR3ZWVuYWJsZSwgVW5kZXJzY29yZSkge1xuICAgIHZhciB1bmRlcnNjb3JlU3VwcG9ydHNBTUQgPSAoVW5kZXJzY29yZSAhPSBudWxsKTtcbiAgICB2YXIgZGVwcyA9IHtUd2VlbmFibGU6IFR3ZWVuYWJsZSxcbiAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgVW5kZXJzY29yZS5qcyBzdXBwb3J0IEFNRCwgb3RoZXJzIGRvbid0LlxuICAgICAgLy8gSWYgbm90LCB1c2UgdGhlIGBfYCBnbG9iYWwuXG4gICAgICB1bmRlcnNjb3JlOiB1bmRlcnNjb3JlU3VwcG9ydHNBTUQgPyBVbmRlcnNjb3JlIDogX307XG4gICAgdmFyIFJla2FwaSA9IHJla2FwaSh7fSwgZGVwcyk7XG5cbiAgICBpZiAoUkVLQVBJX0RFQlVHKSB7XG4gICAgICBSZWthcGkudW5kZXJzY29yZV92ZXJzaW9uID0gZGVwcy51bmRlcnNjb3JlLlZFUlNJT047XG4gICAgfVxuXG4gICAgaWYgKCF1bmRlcnNjb3JlQWxyZWFkeUluVXNlICYmIHVuZGVyc2NvcmVTdXBwb3J0c0FNRCkge1xuICAgICAgLy8gUHJldmVudCBVbmRlcnNjb3JlIGZyb20gcG9sbHV0aW5nIHRoZSBnbG9iYWwgc2NvcGUuXG4gICAgICAvLyBUaGlzIGdsb2JhbCBjYW4gYmUgc2FmZWx5IHJlbW92ZWQgc2luY2UgUmVrYXBpIGtlZXBzIGl0cyBvd24gcmVmZXJlbmNlXG4gICAgICAvLyB0byBVbmRlcnNjb3JlIHZpYSB0aGUgYGRlcHNgIG9iamVjdCBwYXNzZWQgZWFybGllciBhcyBhbiBhcmd1bWVudC5cbiAgICAgIHRoaXMuXyA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICByZXR1cm4gUmVrYXBpO1xuICB9KTtcbn0gZWxzZSB7XG4gIC8vIExvYWQgUmVrYXBpIG5vcm1hbGx5IChjcmVhdGluZyBhIFJla2FwaSBnbG9iYWwpIGlmIG5vdCB1c2luZyBhbiBBTUQgbG9hZGVyLlxuXG4gIC8vIE5vdGU6IGBnbG9iYWxgIGlzIG5vdCBkZWZpbmVkIHdoZW4gcnVubmluZyB1bml0IHRlc3RzLiBQYXNzIGB0aGlzYCBpbnN0ZWFkLlxuICByZWthcGkodGhpcyk7XG59XG5cbn0gKHRoaXMpKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Jla2FwaS9kaXN0L3Jla2FwaS5qc1xuICoqIG1vZHVsZSBpZCA9IDQ1XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIvKiEgc2hpZnR5IC0gdjEuMi4yIC0gMjAxNC0xMC0wOSAtIGh0dHA6Ly9qZXJlbXlja2Fobi5naXRodWIuaW8vc2hpZnR5ICovXG47KGZ1bmN0aW9uIChyb290KSB7XG5cbi8qIVxuICogU2hpZnR5IENvcmVcbiAqIEJ5IEplcmVteSBLYWhuIC0gamVyZW15Y2thaG5AZ21haWwuY29tXG4gKi9cblxuLy8gVWdsaWZ5SlMgZGVmaW5lIGhhY2suICBVc2VkIGZvciB1bml0IHRlc3RpbmcuICBDb250ZW50cyBvZiB0aGlzIGlmIGFyZVxuLy8gY29tcGlsZWQgYXdheS5cbmlmICh0eXBlb2YgU0hJRlRZX0RFQlVHX05PVyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgU0hJRlRZX0RFQlVHX05PVyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gK25ldyBEYXRlKCk7XG4gIH07XG59XG5cbnZhciBUd2VlbmFibGUgPSAoZnVuY3Rpb24gKCkge1xuXG4gICd1c2Ugc3RyaWN0JztcblxuICAvLyBBbGlhc2VzIHRoYXQgZ2V0IGRlZmluZWQgbGF0ZXIgaW4gdGhpcyBmdW5jdGlvblxuICB2YXIgZm9ybXVsYTtcblxuICAvLyBDT05TVEFOVFNcbiAgdmFyIERFRkFVTFRfU0NIRURVTEVfRlVOQ1RJT047XG4gIHZhciBERUZBVUxUX0VBU0lORyA9ICdsaW5lYXInO1xuICB2YXIgREVGQVVMVF9EVVJBVElPTiA9IDUwMDtcbiAgdmFyIFVQREFURV9USU1FID0gMTAwMCAvIDYwO1xuXG4gIHZhciBfbm93ID0gRGF0ZS5ub3dcbiAgICAgICA/IERhdGUubm93XG4gICAgICAgOiBmdW5jdGlvbiAoKSB7cmV0dXJuICtuZXcgRGF0ZSgpO307XG5cbiAgdmFyIG5vdyA9IFNISUZUWV9ERUJVR19OT1dcbiAgICAgICA/IFNISUZUWV9ERUJVR19OT1dcbiAgICAgICA6IF9ub3c7XG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCkgc2hpbSBieSBQYXVsIElyaXNoIChtb2RpZmllZCBmb3IgU2hpZnR5KVxuICAgIC8vIGh0dHA6Ly9wYXVsaXJpc2guY29tLzIwMTEvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1hbmltYXRpbmcvXG4gICAgREVGQVVMVF9TQ0hFRFVMRV9GVU5DVElPTiA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgICAgICB8fCB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gICAgICAgfHwgd2luZG93Lm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgICAgICB8fCB3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgICAgICB8fCAod2luZG93Lm1vekNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgICAgICYmIHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUpXG4gICAgICAgfHwgc2V0VGltZW91dDtcbiAgfSBlbHNlIHtcbiAgICBERUZBVUxUX1NDSEVEVUxFX0ZVTkNUSU9OID0gc2V0VGltZW91dDtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5vb3AgKCkge1xuICAgIC8vIE5PT1AhXG4gIH1cblxuICAvKiFcbiAgICogSGFuZHkgc2hvcnRjdXQgZm9yIGRvaW5nIGEgZm9yLWluIGxvb3AuIFRoaXMgaXMgbm90IGEgXCJub3JtYWxcIiBlYWNoXG4gICAqIGZ1bmN0aW9uLCBpdCBpcyBvcHRpbWl6ZWQgZm9yIFNoaWZ0eS4gIFRoZSBpdGVyYXRvciBmdW5jdGlvbiBvbmx5IHJlY2VpdmVzXG4gICAqIHRoZSBwcm9wZXJ0eSBuYW1lLCBub3QgdGhlIHZhbHVlLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb24oc3RyaW5nKX0gZm5cbiAgICovXG4gIGZ1bmN0aW9uIGVhY2ggKG9iaiwgZm4pIHtcbiAgICB2YXIga2V5O1xuICAgIGZvciAoa2V5IGluIG9iaikge1xuICAgICAgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICBmbihrZXkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qIVxuICAgKiBQZXJmb3JtIGEgc2hhbGxvdyBjb3B5IG9mIE9iamVjdCBwcm9wZXJ0aWVzLlxuICAgKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0T2JqZWN0IFRoZSBvYmplY3QgdG8gY29weSBpbnRvXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzcmNPYmplY3QgVGhlIG9iamVjdCB0byBjb3B5IGZyb21cbiAgICogQHJldHVybiB7T2JqZWN0fSBBIHJlZmVyZW5jZSB0byB0aGUgYXVnbWVudGVkIGB0YXJnZXRPYmpgIE9iamVjdFxuICAgKi9cbiAgZnVuY3Rpb24gc2hhbGxvd0NvcHkgKHRhcmdldE9iaiwgc3JjT2JqKSB7XG4gICAgZWFjaChzcmNPYmosIGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICB0YXJnZXRPYmpbcHJvcF0gPSBzcmNPYmpbcHJvcF07XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGFyZ2V0T2JqO1xuICB9XG5cbiAgLyohXG4gICAqIENvcGllcyBlYWNoIHByb3BlcnR5IGZyb20gc3JjIG9udG8gdGFyZ2V0LCBidXQgb25seSBpZiB0aGUgcHJvcGVydHkgdG9cbiAgICogY29weSB0byB0YXJnZXQgaXMgdW5kZWZpbmVkLlxuICAgKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0IE1pc3NpbmcgcHJvcGVydGllcyBpbiB0aGlzIE9iamVjdCBhcmUgZmlsbGVkIGluXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzcmNcbiAgICovXG4gIGZ1bmN0aW9uIGRlZmF1bHRzICh0YXJnZXQsIHNyYykge1xuICAgIGVhY2goc3JjLCBmdW5jdGlvbiAocHJvcCkge1xuICAgICAgaWYgKHR5cGVvZiB0YXJnZXRbcHJvcF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRhcmdldFtwcm9wXSA9IHNyY1twcm9wXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qIVxuICAgKiBDYWxjdWxhdGVzIHRoZSBpbnRlcnBvbGF0ZWQgdHdlZW4gdmFsdWVzIG9mIGFuIE9iamVjdCBmb3IgYSBnaXZlblxuICAgKiB0aW1lc3RhbXAuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBmb3JQb3NpdGlvbiBUaGUgcG9zaXRpb24gdG8gY29tcHV0ZSB0aGUgc3RhdGUgZm9yLlxuICAgKiBAcGFyYW0ge09iamVjdH0gY3VycmVudFN0YXRlIEN1cnJlbnQgc3RhdGUgcHJvcGVydGllcy5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9yaWdpbmFsU3RhdGU6IFRoZSBvcmlnaW5hbCBzdGF0ZSBwcm9wZXJ0aWVzIHRoZSBPYmplY3QgaXNcbiAgICogdHdlZW5pbmcgZnJvbS5cbiAgICogQHBhcmFtIHtPYmplY3R9IHRhcmdldFN0YXRlOiBUaGUgZGVzdGluYXRpb24gc3RhdGUgcHJvcGVydGllcyB0aGUgT2JqZWN0XG4gICAqIGlzIHR3ZWVuaW5nIHRvLlxuICAgKiBAcGFyYW0ge251bWJlcn0gZHVyYXRpb246IFRoZSBsZW5ndGggb2YgdGhlIHR3ZWVuIGluIG1pbGxpc2Vjb25kcy5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVzdGFtcDogVGhlIFVOSVggZXBvY2ggdGltZSBhdCB3aGljaCB0aGUgdHdlZW4gYmVnYW4uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBlYXNpbmc6IFRoaXMgT2JqZWN0J3Mga2V5cyBtdXN0IGNvcnJlc3BvbmQgdG8gdGhlIGtleXMgaW5cbiAgICogdGFyZ2V0U3RhdGUuXG4gICAqL1xuICBmdW5jdGlvbiB0d2VlblByb3BzIChmb3JQb3NpdGlvbiwgY3VycmVudFN0YXRlLCBvcmlnaW5hbFN0YXRlLCB0YXJnZXRTdGF0ZSxcbiAgICBkdXJhdGlvbiwgdGltZXN0YW1wLCBlYXNpbmcpIHtcbiAgICB2YXIgbm9ybWFsaXplZFBvc2l0aW9uID0gKGZvclBvc2l0aW9uIC0gdGltZXN0YW1wKSAvIGR1cmF0aW9uO1xuXG4gICAgdmFyIHByb3A7XG4gICAgZm9yIChwcm9wIGluIGN1cnJlbnRTdGF0ZSkge1xuICAgICAgaWYgKGN1cnJlbnRTdGF0ZS5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgICBjdXJyZW50U3RhdGVbcHJvcF0gPSB0d2VlblByb3Aob3JpZ2luYWxTdGF0ZVtwcm9wXSxcbiAgICAgICAgICB0YXJnZXRTdGF0ZVtwcm9wXSwgZm9ybXVsYVtlYXNpbmdbcHJvcF1dLCBub3JtYWxpemVkUG9zaXRpb24pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjdXJyZW50U3RhdGU7XG4gIH1cblxuICAvKiFcbiAgICogVHdlZW5zIGEgc2luZ2xlIHByb3BlcnR5LlxuICAgKiBAcGFyYW0ge251bWJlcn0gc3RhcnQgVGhlIHZhbHVlIHRoYXQgdGhlIHR3ZWVuIHN0YXJ0ZWQgZnJvbS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGVuZCBUaGUgdmFsdWUgdGhhdCB0aGUgdHdlZW4gc2hvdWxkIGVuZCBhdC5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZWFzaW5nRnVuYyBUaGUgZWFzaW5nIGN1cnZlIHRvIGFwcGx5IHRvIHRoZSB0d2Vlbi5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHBvc2l0aW9uIFRoZSBub3JtYWxpemVkIHBvc2l0aW9uIChiZXR3ZWVuIDAuMCBhbmQgMS4wKSB0b1xuICAgKiBjYWxjdWxhdGUgdGhlIG1pZHBvaW50IG9mICdzdGFydCcgYW5kICdlbmQnIGFnYWluc3QuXG4gICAqIEByZXR1cm4ge251bWJlcn0gVGhlIHR3ZWVuZWQgdmFsdWUuXG4gICAqL1xuICBmdW5jdGlvbiB0d2VlblByb3AgKHN0YXJ0LCBlbmQsIGVhc2luZ0Z1bmMsIHBvc2l0aW9uKSB7XG4gICAgcmV0dXJuIHN0YXJ0ICsgKGVuZCAtIHN0YXJ0KSAqIGVhc2luZ0Z1bmMocG9zaXRpb24pO1xuICB9XG5cbiAgLyohXG4gICAqIEFwcGxpZXMgYSBmaWx0ZXIgdG8gVHdlZW5hYmxlIGluc3RhbmNlLlxuICAgKiBAcGFyYW0ge1R3ZWVuYWJsZX0gdHdlZW5hYmxlIFRoZSBgVHdlZW5hYmxlYCBpbnN0YW5jZSB0byBjYWxsIHRoZSBmaWx0ZXJcbiAgICogdXBvbi5cbiAgICogQHBhcmFtIHtTdHJpbmd9IGZpbHRlck5hbWUgVGhlIG5hbWUgb2YgdGhlIGZpbHRlciB0byBhcHBseS5cbiAgICovXG4gIGZ1bmN0aW9uIGFwcGx5RmlsdGVyICh0d2VlbmFibGUsIGZpbHRlck5hbWUpIHtcbiAgICB2YXIgZmlsdGVycyA9IFR3ZWVuYWJsZS5wcm90b3R5cGUuZmlsdGVyO1xuICAgIHZhciBhcmdzID0gdHdlZW5hYmxlLl9maWx0ZXJBcmdzO1xuXG4gICAgZWFjaChmaWx0ZXJzLCBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiBmaWx0ZXJzW25hbWVdW2ZpbHRlck5hbWVdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBmaWx0ZXJzW25hbWVdW2ZpbHRlck5hbWVdLmFwcGx5KHR3ZWVuYWJsZSwgYXJncyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB2YXIgdGltZW91dEhhbmRsZXJfZW5kVGltZTtcbiAgdmFyIHRpbWVvdXRIYW5kbGVyX2N1cnJlbnRUaW1lO1xuICB2YXIgdGltZW91dEhhbmRsZXJfaXNFbmRlZDtcbiAgLyohXG4gICAqIEhhbmRsZXMgdGhlIHVwZGF0ZSBsb2dpYyBmb3Igb25lIHN0ZXAgb2YgYSB0d2Vlbi5cbiAgICogQHBhcmFtIHtUd2VlbmFibGV9IHR3ZWVuYWJsZVxuICAgKiBAcGFyYW0ge251bWJlcn0gdGltZXN0YW1wXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkdXJhdGlvblxuICAgKiBAcGFyYW0ge09iamVjdH0gY3VycmVudFN0YXRlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcmlnaW5hbFN0YXRlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXRTdGF0ZVxuICAgKiBAcGFyYW0ge09iamVjdH0gZWFzaW5nXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHN0ZXBcbiAgICogQHBhcmFtIHtGdW5jdGlvbihGdW5jdGlvbixudW1iZXIpfX0gc2NoZWR1bGVcbiAgICovXG4gIGZ1bmN0aW9uIHRpbWVvdXRIYW5kbGVyICh0d2VlbmFibGUsIHRpbWVzdGFtcCwgZHVyYXRpb24sIGN1cnJlbnRTdGF0ZSxcbiAgICBvcmlnaW5hbFN0YXRlLCB0YXJnZXRTdGF0ZSwgZWFzaW5nLCBzdGVwLCBzY2hlZHVsZSkge1xuICAgIHRpbWVvdXRIYW5kbGVyX2VuZFRpbWUgPSB0aW1lc3RhbXAgKyBkdXJhdGlvbjtcbiAgICB0aW1lb3V0SGFuZGxlcl9jdXJyZW50VGltZSA9IE1hdGgubWluKG5vdygpLCB0aW1lb3V0SGFuZGxlcl9lbmRUaW1lKTtcbiAgICB0aW1lb3V0SGFuZGxlcl9pc0VuZGVkID0gdGltZW91dEhhbmRsZXJfY3VycmVudFRpbWUgPj0gdGltZW91dEhhbmRsZXJfZW5kVGltZTtcblxuICAgIGlmICh0d2VlbmFibGUuaXNQbGF5aW5nKCkgJiYgIXRpbWVvdXRIYW5kbGVyX2lzRW5kZWQpIHtcbiAgICAgIHNjaGVkdWxlKHR3ZWVuYWJsZS5fdGltZW91dEhhbmRsZXIsIFVQREFURV9USU1FKTtcblxuICAgICAgYXBwbHlGaWx0ZXIodHdlZW5hYmxlLCAnYmVmb3JlVHdlZW4nKTtcbiAgICAgIHR3ZWVuUHJvcHModGltZW91dEhhbmRsZXJfY3VycmVudFRpbWUsIGN1cnJlbnRTdGF0ZSwgb3JpZ2luYWxTdGF0ZSxcbiAgICAgICAgdGFyZ2V0U3RhdGUsIGR1cmF0aW9uLCB0aW1lc3RhbXAsIGVhc2luZyk7XG4gICAgICBhcHBseUZpbHRlcih0d2VlbmFibGUsICdhZnRlclR3ZWVuJyk7XG5cbiAgICAgIHN0ZXAoY3VycmVudFN0YXRlKTtcbiAgICB9IGVsc2UgaWYgKHRpbWVvdXRIYW5kbGVyX2lzRW5kZWQpIHtcbiAgICAgIHN0ZXAodGFyZ2V0U3RhdGUpO1xuICAgICAgdHdlZW5hYmxlLnN0b3AodHJ1ZSk7XG4gICAgfVxuICB9XG5cblxuICAvKiFcbiAgICogQ3JlYXRlcyBhIHVzYWJsZSBlYXNpbmcgT2JqZWN0IGZyb20gZWl0aGVyIGEgc3RyaW5nIG9yIGFub3RoZXIgZWFzaW5nXG4gICAqIE9iamVjdC4gIElmIGBlYXNpbmdgIGlzIGFuIE9iamVjdCwgdGhlbiB0aGlzIGZ1bmN0aW9uIGNsb25lcyBpdCBhbmQgZmlsbHNcbiAgICogaW4gdGhlIG1pc3NpbmcgcHJvcGVydGllcyB3aXRoIFwibGluZWFyXCIuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBmcm9tVHdlZW5QYXJhbXNcbiAgICogQHBhcmFtIHtPYmplY3R8c3RyaW5nfSBlYXNpbmdcbiAgICovXG4gIGZ1bmN0aW9uIGNvbXBvc2VFYXNpbmdPYmplY3QgKGZyb21Ud2VlblBhcmFtcywgZWFzaW5nKSB7XG4gICAgdmFyIGNvbXBvc2VkRWFzaW5nID0ge307XG5cbiAgICBpZiAodHlwZW9mIGVhc2luZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGVhY2goZnJvbVR3ZWVuUGFyYW1zLCBmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICBjb21wb3NlZEVhc2luZ1twcm9wXSA9IGVhc2luZztcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlYWNoKGZyb21Ud2VlblBhcmFtcywgZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgaWYgKCFjb21wb3NlZEVhc2luZ1twcm9wXSkge1xuICAgICAgICAgIGNvbXBvc2VkRWFzaW5nW3Byb3BdID0gZWFzaW5nW3Byb3BdIHx8IERFRkFVTFRfRUFTSU5HO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9zZWRFYXNpbmc7XG4gIH1cblxuICAvKipcbiAgICogVHdlZW5hYmxlIGNvbnN0cnVjdG9yLlxuICAgKiBAcGFyYW0ge09iamVjdD19IG9wdF9pbml0aWFsU3RhdGUgVGhlIHZhbHVlcyB0aGF0IHRoZSBpbml0aWFsIHR3ZWVuIHNob3VsZCBzdGFydCBhdCBpZiBhIFwiZnJvbVwiIG9iamVjdCBpcyBub3QgcHJvdmlkZWQgdG8gVHdlZW5hYmxlI3R3ZWVuLlxuICAgKiBAcGFyYW0ge09iamVjdD19IG9wdF9jb25maWcgU2VlIFR3ZWVuYWJsZS5wcm90b3R5cGUuc2V0Q29uZmlnKClcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqL1xuICBmdW5jdGlvbiBUd2VlbmFibGUgKG9wdF9pbml0aWFsU3RhdGUsIG9wdF9jb25maWcpIHtcbiAgICB0aGlzLl9jdXJyZW50U3RhdGUgPSBvcHRfaW5pdGlhbFN0YXRlIHx8IHt9O1xuICAgIHRoaXMuX2NvbmZpZ3VyZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9zY2hlZHVsZUZ1bmN0aW9uID0gREVGQVVMVF9TQ0hFRFVMRV9GVU5DVElPTjtcblxuICAgIC8vIFRvIHByZXZlbnQgdW5uZWNlc3NhcnkgY2FsbHMgdG8gc2V0Q29uZmlnIGRvIG5vdCBzZXQgZGVmYXVsdCBjb25maWd1cmF0aW9uIGhlcmUuXG4gICAgLy8gT25seSBzZXQgZGVmYXVsdCBjb25maWd1cmF0aW9uIGltbWVkaWF0ZWx5IGJlZm9yZSB0d2VlbmluZyBpZiBub25lIGhhcyBiZWVuIHNldC5cbiAgICBpZiAodHlwZW9mIG9wdF9jb25maWcgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnNldENvbmZpZyhvcHRfY29uZmlnKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29uZmlndXJlIGFuZCBzdGFydCBhIHR3ZWVuLlxuICAgKiBAcGFyYW0ge09iamVjdD19IG9wdF9jb25maWcgU2VlIFR3ZWVuYWJsZS5wcm90b3R5cGUuc2V0Q29uZmlnKClcbiAgICogQHJldHVybiB7VHdlZW5hYmxlfVxuICAgKi9cbiAgVHdlZW5hYmxlLnByb3RvdHlwZS50d2VlbiA9IGZ1bmN0aW9uIChvcHRfY29uZmlnKSB7XG4gICAgaWYgKHRoaXMuX2lzVHdlZW5pbmcpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIE9ubHkgc2V0IGRlZmF1bHQgY29uZmlnIGlmIG5vIGNvbmZpZ3VyYXRpb24gaGFzIGJlZW4gc2V0IHByZXZpb3VzbHkgYW5kIG5vbmUgaXMgcHJvdmlkZWQgbm93LlxuICAgIGlmIChvcHRfY29uZmlnICE9PSB1bmRlZmluZWQgfHwgIXRoaXMuX2NvbmZpZ3VyZWQpIHtcbiAgICAgIHRoaXMuc2V0Q29uZmlnKG9wdF9jb25maWcpO1xuICAgIH1cblxuICAgIHRoaXMuX3N0YXJ0KHRoaXMuZ2V0KCkpO1xuICAgIHJldHVybiB0aGlzLnJlc3VtZSgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB0d2VlbiBjb25maWd1cmF0aW9uLiBgY29uZmlnYCBtYXkgaGF2ZSB0aGUgZm9sbG93aW5nIG9wdGlvbnM6XG4gICAqXG4gICAqIC0gX19mcm9tX18gKF9PYmplY3Q9Xyk6IFN0YXJ0aW5nIHBvc2l0aW9uLiAgSWYgb21pdHRlZCwgdGhlIGN1cnJlbnQgc3RhdGUgaXMgdXNlZC5cbiAgICogLSBfX3RvX18gKF9PYmplY3Q9Xyk6IEVuZGluZyBwb3NpdGlvbi5cbiAgICogLSBfX2R1cmF0aW9uX18gKF9udW1iZXI9Xyk6IEhvdyBtYW55IG1pbGxpc2Vjb25kcyB0byBhbmltYXRlIGZvci5cbiAgICogLSBfX3N0YXJ0X18gKF9GdW5jdGlvbihPYmplY3QpPV8pOiBGdW5jdGlvbiB0byBleGVjdXRlIHdoZW4gdGhlIHR3ZWVuIGJlZ2lucy4gIFJlY2VpdmVzIHRoZSBzdGF0ZSBvZiB0aGUgdHdlZW4gYXMgdGhlIG9ubHkgcGFyYW1ldGVyLlxuICAgKiAtIF9fc3RlcF9fIChfRnVuY3Rpb24oT2JqZWN0KT1fKTogRnVuY3Rpb24gdG8gZXhlY3V0ZSBvbiBldmVyeSB0aWNrLiAgUmVjZWl2ZXMgdGhlIHN0YXRlIG9mIHRoZSB0d2VlbiBhcyB0aGUgb25seSBwYXJhbWV0ZXIuICBUaGlzIGZ1bmN0aW9uIGlzIG5vdCBjYWxsZWQgb24gdGhlIGZpbmFsIHN0ZXAgb2YgdGhlIGFuaW1hdGlvbiwgYnV0IGBmaW5pc2hgIGlzLlxuICAgKiAtIF9fZmluaXNoX18gKF9GdW5jdGlvbihPYmplY3QpPV8pOiBGdW5jdGlvbiB0byBleGVjdXRlIHVwb24gdHdlZW4gY29tcGxldGlvbi4gIFJlY2VpdmVzIHRoZSBzdGF0ZSBvZiB0aGUgdHdlZW4gYXMgdGhlIG9ubHkgcGFyYW1ldGVyLlxuICAgKiAtIF9fZWFzaW5nX18gKF9PYmplY3R8c3RyaW5nPV8pOiBFYXNpbmcgY3VydmUgbmFtZShzKSB0byB1c2UgZm9yIHRoZSB0d2Vlbi5cbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgKiBAcmV0dXJuIHtUd2VlbmFibGV9XG4gICAqL1xuICBUd2VlbmFibGUucHJvdG90eXBlLnNldENvbmZpZyA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICBjb25maWcgPSBjb25maWcgfHwge307XG4gICAgdGhpcy5fY29uZmlndXJlZCA9IHRydWU7XG5cbiAgICAvLyBJbml0IHRoZSBpbnRlcm5hbCBzdGF0ZVxuICAgIHRoaXMuX3BhdXNlZEF0VGltZSA9IG51bGw7XG4gICAgdGhpcy5fc3RhcnQgPSBjb25maWcuc3RhcnQgfHwgbm9vcDtcbiAgICB0aGlzLl9zdGVwID0gY29uZmlnLnN0ZXAgfHwgbm9vcDtcbiAgICB0aGlzLl9maW5pc2ggPSBjb25maWcuZmluaXNoIHx8IG5vb3A7XG4gICAgdGhpcy5fZHVyYXRpb24gPSBjb25maWcuZHVyYXRpb24gfHwgREVGQVVMVF9EVVJBVElPTjtcbiAgICB0aGlzLl9jdXJyZW50U3RhdGUgPSBjb25maWcuZnJvbSB8fCB0aGlzLmdldCgpO1xuICAgIHRoaXMuX29yaWdpbmFsU3RhdGUgPSB0aGlzLmdldCgpO1xuICAgIHRoaXMuX3RhcmdldFN0YXRlID0gY29uZmlnLnRvIHx8IHRoaXMuZ2V0KCk7XG4gICAgdGhpcy5fdGltZXN0YW1wID0gbm93KCk7XG5cbiAgICAvLyBBbGlhc2VzIHVzZWQgYmVsb3dcbiAgICB2YXIgY3VycmVudFN0YXRlID0gdGhpcy5fY3VycmVudFN0YXRlO1xuICAgIHZhciB0YXJnZXRTdGF0ZSA9IHRoaXMuX3RhcmdldFN0YXRlO1xuXG4gICAgLy8gRW5zdXJlIHRoYXQgdGhlcmUgaXMgYWx3YXlzIHNvbWV0aGluZyB0byB0d2VlbiB0by5cbiAgICBkZWZhdWx0cyh0YXJnZXRTdGF0ZSwgY3VycmVudFN0YXRlKTtcblxuICAgIHRoaXMuX2Vhc2luZyA9IGNvbXBvc2VFYXNpbmdPYmplY3QoXG4gICAgICBjdXJyZW50U3RhdGUsIGNvbmZpZy5lYXNpbmcgfHwgREVGQVVMVF9FQVNJTkcpO1xuXG4gICAgdGhpcy5fZmlsdGVyQXJncyA9XG4gICAgICBbY3VycmVudFN0YXRlLCB0aGlzLl9vcmlnaW5hbFN0YXRlLCB0YXJnZXRTdGF0ZSwgdGhpcy5fZWFzaW5nXTtcblxuICAgIGFwcGx5RmlsdGVyKHRoaXMsICd0d2VlbkNyZWF0ZWQnKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogR2V0cyB0aGUgY3VycmVudCBzdGF0ZS5cbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgVHdlZW5hYmxlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHNoYWxsb3dDb3B5KHt9LCB0aGlzLl9jdXJyZW50U3RhdGUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBjdXJyZW50IHN0YXRlLlxuICAgKiBAcGFyYW0ge09iamVjdH0gc3RhdGVcbiAgICovXG4gIFR3ZWVuYWJsZS5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgdGhpcy5fY3VycmVudFN0YXRlID0gc3RhdGU7XG4gIH07XG5cbiAgLyoqXG4gICAqIFBhdXNlcyBhIHR3ZWVuLiAgUGF1c2VkIHR3ZWVucyBjYW4gYmUgcmVzdW1lZCBmcm9tIHRoZSBwb2ludCBhdCB3aGljaCB0aGV5IHdlcmUgcGF1c2VkLiAgVGhpcyBpcyBkaWZmZXJlbnQgdGhhbiBbYHN0b3AoKWBdKCNzdG9wKSwgYXMgdGhhdCBtZXRob2QgY2F1c2VzIGEgdHdlZW4gdG8gc3RhcnQgb3ZlciB3aGVuIGl0IGlzIHJlc3VtZWQuXG4gICAqIEByZXR1cm4ge1R3ZWVuYWJsZX1cbiAgICovXG4gIFR3ZWVuYWJsZS5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fcGF1c2VkQXRUaW1lID0gbm93KCk7XG4gICAgdGhpcy5faXNQYXVzZWQgPSB0cnVlO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXN1bWVzIGEgcGF1c2VkIHR3ZWVuLlxuICAgKiBAcmV0dXJuIHtUd2VlbmFibGV9XG4gICAqL1xuICBUd2VlbmFibGUucHJvdG90eXBlLnJlc3VtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5faXNQYXVzZWQpIHtcbiAgICAgIHRoaXMuX3RpbWVzdGFtcCArPSBub3coKSAtIHRoaXMuX3BhdXNlZEF0VGltZTtcbiAgICB9XG5cbiAgICB0aGlzLl9pc1BhdXNlZCA9IGZhbHNlO1xuICAgIHRoaXMuX2lzVHdlZW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHRoaXMuX3RpbWVvdXRIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGltZW91dEhhbmRsZXIoc2VsZiwgc2VsZi5fdGltZXN0YW1wLCBzZWxmLl9kdXJhdGlvbiwgc2VsZi5fY3VycmVudFN0YXRlLFxuICAgICAgICBzZWxmLl9vcmlnaW5hbFN0YXRlLCBzZWxmLl90YXJnZXRTdGF0ZSwgc2VsZi5fZWFzaW5nLCBzZWxmLl9zdGVwLFxuICAgICAgICBzZWxmLl9zY2hlZHVsZUZ1bmN0aW9uKTtcbiAgICB9O1xuXG4gICAgdGhpcy5fdGltZW91dEhhbmRsZXIoKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTdG9wcyBhbmQgY2FuY2VscyBhIHR3ZWVuLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW49fSBnb3RvRW5kIElmIGZhbHNlIG9yIG9taXR0ZWQsIHRoZSB0d2VlbiBqdXN0IHN0b3BzIGF0IGl0cyBjdXJyZW50IHN0YXRlLCBhbmQgdGhlIFwiZmluaXNoXCIgaGFuZGxlciBpcyBub3QgaW52b2tlZC4gIElmIHRydWUsIHRoZSB0d2VlbmVkIG9iamVjdCdzIHZhbHVlcyBhcmUgaW5zdGFudGx5IHNldCB0byB0aGUgdGFyZ2V0IHZhbHVlcywgYW5kIFwiZmluaXNoXCIgaXMgaW52b2tlZC5cbiAgICogQHJldHVybiB7VHdlZW5hYmxlfVxuICAgKi9cbiAgVHdlZW5hYmxlLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKGdvdG9FbmQpIHtcbiAgICB0aGlzLl9pc1R3ZWVuaW5nID0gZmFsc2U7XG4gICAgdGhpcy5faXNQYXVzZWQgPSBmYWxzZTtcbiAgICB0aGlzLl90aW1lb3V0SGFuZGxlciA9IG5vb3A7XG5cbiAgICBpZiAoZ290b0VuZCkge1xuICAgICAgc2hhbGxvd0NvcHkodGhpcy5fY3VycmVudFN0YXRlLCB0aGlzLl90YXJnZXRTdGF0ZSk7XG4gICAgICBhcHBseUZpbHRlcih0aGlzLCAnYWZ0ZXJUd2VlbkVuZCcpO1xuICAgICAgdGhpcy5fZmluaXNoLmNhbGwodGhpcywgdGhpcy5fY3VycmVudFN0YXRlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCBhIHR3ZWVuIGlzIHJ1bm5pbmcuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBUd2VlbmFibGUucHJvdG90eXBlLmlzUGxheWluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNUd2VlbmluZyAmJiAhdGhpcy5faXNQYXVzZWQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNldHMgYSBjdXN0b20gc2NoZWR1bGUgZnVuY3Rpb24uXG4gICAqXG4gICAqIElmIGEgY3VzdG9tIGZ1bmN0aW9uIGlzIG5vdCBzZXQgdGhlIGRlZmF1bHQgb25lIGlzIHVzZWQgW2ByZXF1ZXN0QW5pbWF0aW9uRnJhbWVgXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSkgaWYgYXZhaWxhYmxlLCBvdGhlcndpc2UgW2BzZXRUaW1lb3V0YF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvdy5zZXRUaW1lb3V0KSkuXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb24oRnVuY3Rpb24sbnVtYmVyKX0gc2NoZWR1bGVGdW5jdGlvbiBUaGUgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIHRvIHNjaGVkdWxlIHRoZSBuZXh0IGZyYW1lIHRvIGJlIHJlbmRlcmVkXG4gICAqL1xuICBUd2VlbmFibGUucHJvdG90eXBlLnNldFNjaGVkdWxlRnVuY3Rpb24gPSBmdW5jdGlvbiAoc2NoZWR1bGVGdW5jdGlvbikge1xuICAgIHRoaXMuX3NjaGVkdWxlRnVuY3Rpb24gPSBzY2hlZHVsZUZ1bmN0aW9uO1xuICB9O1xuXG4gIC8qKlxuICAgKiBgZGVsZXRlYHMgYWxsIFwib3duXCIgcHJvcGVydGllcy4gIENhbGwgdGhpcyB3aGVuIHRoZSBgVHdlZW5hYmxlYCBpbnN0YW5jZSBpcyBubyBsb25nZXIgbmVlZGVkIHRvIGZyZWUgbWVtb3J5LlxuICAgKi9cbiAgVHdlZW5hYmxlLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwcm9wO1xuICAgIGZvciAocHJvcCBpbiB0aGlzKSB7XG4gICAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgICBkZWxldGUgdGhpc1twcm9wXTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLyohXG4gICAqIEZpbHRlcnMgYXJlIHVzZWQgZm9yIHRyYW5zZm9ybWluZyB0aGUgcHJvcGVydGllcyBvZiBhIHR3ZWVuIGF0IHZhcmlvdXNcbiAgICogcG9pbnRzIGluIGEgVHdlZW5hYmxlJ3MgbGlmZSBjeWNsZS4gIFNlZSB0aGUgUkVBRE1FIGZvciBtb3JlIGluZm8gb24gdGhpcy5cbiAgICovXG4gIFR3ZWVuYWJsZS5wcm90b3R5cGUuZmlsdGVyID0ge307XG5cbiAgLyohXG4gICAqIFRoaXMgb2JqZWN0IGNvbnRhaW5zIGFsbCBvZiB0aGUgdHdlZW5zIGF2YWlsYWJsZSB0byBTaGlmdHkuICBJdCBpcyBleHRlbmRpYmxlIC0gc2ltcGx5IGF0dGFjaCBwcm9wZXJ0aWVzIHRvIHRoZSBUd2VlbmFibGUucHJvdG90eXBlLmZvcm11bGEgT2JqZWN0IGZvbGxvd2luZyB0aGUgc2FtZSBmb3JtYXQgYXQgbGluZWFyLlxuICAgKlxuICAgKiBgcG9zYCBzaG91bGQgYmUgYSBub3JtYWxpemVkIGBudW1iZXJgIChiZXR3ZWVuIDAgYW5kIDEpLlxuICAgKi9cbiAgVHdlZW5hYmxlLnByb3RvdHlwZS5mb3JtdWxhID0ge1xuICAgIGxpbmVhcjogZnVuY3Rpb24gKHBvcykge1xuICAgICAgcmV0dXJuIHBvcztcbiAgICB9XG4gIH07XG5cbiAgZm9ybXVsYSA9IFR3ZWVuYWJsZS5wcm90b3R5cGUuZm9ybXVsYTtcblxuICBzaGFsbG93Q29weShUd2VlbmFibGUsIHtcbiAgICAnbm93Jzogbm93XG4gICAgLCdlYWNoJzogZWFjaFxuICAgICwndHdlZW5Qcm9wcyc6IHR3ZWVuUHJvcHNcbiAgICAsJ3R3ZWVuUHJvcCc6IHR3ZWVuUHJvcFxuICAgICwnYXBwbHlGaWx0ZXInOiBhcHBseUZpbHRlclxuICAgICwnc2hhbGxvd0NvcHknOiBzaGFsbG93Q29weVxuICAgICwnZGVmYXVsdHMnOiBkZWZhdWx0c1xuICAgICwnY29tcG9zZUVhc2luZ09iamVjdCc6IGNvbXBvc2VFYXNpbmdPYmplY3RcbiAgfSk7XG5cbiAgLy8gYHJvb3RgIGlzIHByb3ZpZGVkIGluIHRoZSBpbnRyby9vdXRybyBmaWxlcy5cblxuICAvLyBBIGhvb2sgdXNlZCBmb3IgdW5pdCB0ZXN0aW5nLlxuICBpZiAodHlwZW9mIFNISUZUWV9ERUJVR19OT1cgPT09ICdmdW5jdGlvbicpIHtcbiAgICByb290LnRpbWVvdXRIYW5kbGVyID0gdGltZW91dEhhbmRsZXI7XG4gIH1cblxuICAvLyBCb290c3RyYXAgVHdlZW5hYmxlIGFwcHJvcHJpYXRlbHkgZm9yIHRoZSBlbnZpcm9ubWVudC5cbiAgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBUd2VlbmFibGU7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKGZ1bmN0aW9uICgpIHtyZXR1cm4gVHdlZW5hYmxlO30pO1xuICB9IGVsc2UgaWYgKHR5cGVvZiByb290LlR3ZWVuYWJsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBCcm93c2VyOiBNYWtlIGBUd2VlbmFibGVgIGdsb2JhbGx5IGFjY2Vzc2libGUuXG4gICAgcm9vdC5Ud2VlbmFibGUgPSBUd2VlbmFibGU7XG4gIH1cblxuICByZXR1cm4gVHdlZW5hYmxlO1xuXG59ICgpKTtcblxuLyohXG4gKiBBbGwgZXF1YXRpb25zIGFyZSBhZGFwdGVkIGZyb20gVGhvbWFzIEZ1Y2hzJyBbU2NyaXB0eTJdKGh0dHBzOi8vZ2l0aHViLmNvbS9tYWRyb2JieS9zY3JpcHR5Mi9ibG9iL21hc3Rlci9zcmMvZWZmZWN0cy90cmFuc2l0aW9ucy9wZW5uZXIuanMpLlxuICpcbiAqIEJhc2VkIG9uIEVhc2luZyBFcXVhdGlvbnMgKGMpIDIwMDMgW1JvYmVydCBQZW5uZXJdKGh0dHA6Ly93d3cucm9iZXJ0cGVubmVyLmNvbS8pLCBhbGwgcmlnaHRzIHJlc2VydmVkLiBUaGlzIHdvcmsgaXMgW3N1YmplY3QgdG8gdGVybXNdKGh0dHA6Ly93d3cucm9iZXJ0cGVubmVyLmNvbS9lYXNpbmdfdGVybXNfb2ZfdXNlLmh0bWwpLlxuICovXG5cbi8qIVxuICogIFRFUk1TIE9GIFVTRSAtIEVBU0lORyBFUVVBVElPTlNcbiAqICBPcGVuIHNvdXJjZSB1bmRlciB0aGUgQlNEIExpY2Vuc2UuXG4gKiAgRWFzaW5nIEVxdWF0aW9ucyAoYykgMjAwMyBSb2JlcnQgUGVubmVyLCBhbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbjsoZnVuY3Rpb24gKCkge1xuXG4gIFR3ZWVuYWJsZS5zaGFsbG93Q29weShUd2VlbmFibGUucHJvdG90eXBlLmZvcm11bGEsIHtcbiAgICBlYXNlSW5RdWFkOiBmdW5jdGlvbiAocG9zKSB7XG4gICAgICByZXR1cm4gTWF0aC5wb3cocG9zLCAyKTtcbiAgICB9LFxuXG4gICAgZWFzZU91dFF1YWQ6IGZ1bmN0aW9uIChwb3MpIHtcbiAgICAgIHJldHVybiAtKE1hdGgucG93KChwb3MgLSAxKSwgMikgLSAxKTtcbiAgICB9LFxuXG4gICAgZWFzZUluT3V0UXVhZDogZnVuY3Rpb24gKHBvcykge1xuICAgICAgaWYgKChwb3MgLz0gMC41KSA8IDEpIHtyZXR1cm4gMC41ICogTWF0aC5wb3cocG9zLDIpO31cbiAgICAgIHJldHVybiAtMC41ICogKChwb3MgLT0gMikgKiBwb3MgLSAyKTtcbiAgICB9LFxuXG4gICAgZWFzZUluQ3ViaWM6IGZ1bmN0aW9uIChwb3MpIHtcbiAgICAgIHJldHVybiBNYXRoLnBvdyhwb3MsIDMpO1xuICAgIH0sXG5cbiAgICBlYXNlT3V0Q3ViaWM6IGZ1bmN0aW9uIChwb3MpIHtcbiAgICAgIHJldHVybiAoTWF0aC5wb3coKHBvcyAtIDEpLCAzKSArIDEpO1xuICAgIH0sXG5cbiAgICBlYXNlSW5PdXRDdWJpYzogZnVuY3Rpb24gKHBvcykge1xuICAgICAgaWYgKChwb3MgLz0gMC41KSA8IDEpIHtyZXR1cm4gMC41ICogTWF0aC5wb3cocG9zLDMpO31cbiAgICAgIHJldHVybiAwLjUgKiAoTWF0aC5wb3coKHBvcyAtIDIpLDMpICsgMik7XG4gICAgfSxcblxuICAgIGVhc2VJblF1YXJ0OiBmdW5jdGlvbiAocG9zKSB7XG4gICAgICByZXR1cm4gTWF0aC5wb3cocG9zLCA0KTtcbiAgICB9LFxuXG4gICAgZWFzZU91dFF1YXJ0OiBmdW5jdGlvbiAocG9zKSB7XG4gICAgICByZXR1cm4gLShNYXRoLnBvdygocG9zIC0gMSksIDQpIC0gMSk7XG4gICAgfSxcblxuICAgIGVhc2VJbk91dFF1YXJ0OiBmdW5jdGlvbiAocG9zKSB7XG4gICAgICBpZiAoKHBvcyAvPSAwLjUpIDwgMSkge3JldHVybiAwLjUgKiBNYXRoLnBvdyhwb3MsNCk7fVxuICAgICAgcmV0dXJuIC0wLjUgKiAoKHBvcyAtPSAyKSAqIE1hdGgucG93KHBvcywzKSAtIDIpO1xuICAgIH0sXG5cbiAgICBlYXNlSW5RdWludDogZnVuY3Rpb24gKHBvcykge1xuICAgICAgcmV0dXJuIE1hdGgucG93KHBvcywgNSk7XG4gICAgfSxcblxuICAgIGVhc2VPdXRRdWludDogZnVuY3Rpb24gKHBvcykge1xuICAgICAgcmV0dXJuIChNYXRoLnBvdygocG9zIC0gMSksIDUpICsgMSk7XG4gICAgfSxcblxuICAgIGVhc2VJbk91dFF1aW50OiBmdW5jdGlvbiAocG9zKSB7XG4gICAgICBpZiAoKHBvcyAvPSAwLjUpIDwgMSkge3JldHVybiAwLjUgKiBNYXRoLnBvdyhwb3MsNSk7fVxuICAgICAgcmV0dXJuIDAuNSAqIChNYXRoLnBvdygocG9zIC0gMiksNSkgKyAyKTtcbiAgICB9LFxuXG4gICAgZWFzZUluU2luZTogZnVuY3Rpb24gKHBvcykge1xuICAgICAgcmV0dXJuIC1NYXRoLmNvcyhwb3MgKiAoTWF0aC5QSSAvIDIpKSArIDE7XG4gICAgfSxcblxuICAgIGVhc2VPdXRTaW5lOiBmdW5jdGlvbiAocG9zKSB7XG4gICAgICByZXR1cm4gTWF0aC5zaW4ocG9zICogKE1hdGguUEkgLyAyKSk7XG4gICAgfSxcblxuICAgIGVhc2VJbk91dFNpbmU6IGZ1bmN0aW9uIChwb3MpIHtcbiAgICAgIHJldHVybiAoLTAuNSAqIChNYXRoLmNvcyhNYXRoLlBJICogcG9zKSAtIDEpKTtcbiAgICB9LFxuXG4gICAgZWFzZUluRXhwbzogZnVuY3Rpb24gKHBvcykge1xuICAgICAgcmV0dXJuIChwb3MgPT09IDApID8gMCA6IE1hdGgucG93KDIsIDEwICogKHBvcyAtIDEpKTtcbiAgICB9LFxuXG4gICAgZWFzZU91dEV4cG86IGZ1bmN0aW9uIChwb3MpIHtcbiAgICAgIHJldHVybiAocG9zID09PSAxKSA/IDEgOiAtTWF0aC5wb3coMiwgLTEwICogcG9zKSArIDE7XG4gICAgfSxcblxuICAgIGVhc2VJbk91dEV4cG86IGZ1bmN0aW9uIChwb3MpIHtcbiAgICAgIGlmIChwb3MgPT09IDApIHtyZXR1cm4gMDt9XG4gICAgICBpZiAocG9zID09PSAxKSB7cmV0dXJuIDE7fVxuICAgICAgaWYgKChwb3MgLz0gMC41KSA8IDEpIHtyZXR1cm4gMC41ICogTWF0aC5wb3coMiwxMCAqIChwb3MgLSAxKSk7fVxuICAgICAgcmV0dXJuIDAuNSAqICgtTWF0aC5wb3coMiwgLTEwICogLS1wb3MpICsgMik7XG4gICAgfSxcblxuICAgIGVhc2VJbkNpcmM6IGZ1bmN0aW9uIChwb3MpIHtcbiAgICAgIHJldHVybiAtKE1hdGguc3FydCgxIC0gKHBvcyAqIHBvcykpIC0gMSk7XG4gICAgfSxcblxuICAgIGVhc2VPdXRDaXJjOiBmdW5jdGlvbiAocG9zKSB7XG4gICAgICByZXR1cm4gTWF0aC5zcXJ0KDEgLSBNYXRoLnBvdygocG9zIC0gMSksIDIpKTtcbiAgICB9LFxuXG4gICAgZWFzZUluT3V0Q2lyYzogZnVuY3Rpb24gKHBvcykge1xuICAgICAgaWYgKChwb3MgLz0gMC41KSA8IDEpIHtyZXR1cm4gLTAuNSAqIChNYXRoLnNxcnQoMSAtIHBvcyAqIHBvcykgLSAxKTt9XG4gICAgICByZXR1cm4gMC41ICogKE1hdGguc3FydCgxIC0gKHBvcyAtPSAyKSAqIHBvcykgKyAxKTtcbiAgICB9LFxuXG4gICAgZWFzZU91dEJvdW5jZTogZnVuY3Rpb24gKHBvcykge1xuICAgICAgaWYgKChwb3MpIDwgKDEgLyAyLjc1KSkge1xuICAgICAgICByZXR1cm4gKDcuNTYyNSAqIHBvcyAqIHBvcyk7XG4gICAgICB9IGVsc2UgaWYgKHBvcyA8ICgyIC8gMi43NSkpIHtcbiAgICAgICAgcmV0dXJuICg3LjU2MjUgKiAocG9zIC09ICgxLjUgLyAyLjc1KSkgKiBwb3MgKyAwLjc1KTtcbiAgICAgIH0gZWxzZSBpZiAocG9zIDwgKDIuNSAvIDIuNzUpKSB7XG4gICAgICAgIHJldHVybiAoNy41NjI1ICogKHBvcyAtPSAoMi4yNSAvIDIuNzUpKSAqIHBvcyArIDAuOTM3NSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gKDcuNTYyNSAqIChwb3MgLT0gKDIuNjI1IC8gMi43NSkpICogcG9zICsgMC45ODQzNzUpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBlYXNlSW5CYWNrOiBmdW5jdGlvbiAocG9zKSB7XG4gICAgICB2YXIgcyA9IDEuNzAxNTg7XG4gICAgICByZXR1cm4gKHBvcykgKiBwb3MgKiAoKHMgKyAxKSAqIHBvcyAtIHMpO1xuICAgIH0sXG5cbiAgICBlYXNlT3V0QmFjazogZnVuY3Rpb24gKHBvcykge1xuICAgICAgdmFyIHMgPSAxLjcwMTU4O1xuICAgICAgcmV0dXJuIChwb3MgPSBwb3MgLSAxKSAqIHBvcyAqICgocyArIDEpICogcG9zICsgcykgKyAxO1xuICAgIH0sXG5cbiAgICBlYXNlSW5PdXRCYWNrOiBmdW5jdGlvbiAocG9zKSB7XG4gICAgICB2YXIgcyA9IDEuNzAxNTg7XG4gICAgICBpZiAoKHBvcyAvPSAwLjUpIDwgMSkge3JldHVybiAwLjUgKiAocG9zICogcG9zICogKCgocyAqPSAoMS41MjUpKSArIDEpICogcG9zIC0gcykpO31cbiAgICAgIHJldHVybiAwLjUgKiAoKHBvcyAtPSAyKSAqIHBvcyAqICgoKHMgKj0gKDEuNTI1KSkgKyAxKSAqIHBvcyArIHMpICsgMik7XG4gICAgfSxcblxuICAgIGVsYXN0aWM6IGZ1bmN0aW9uIChwb3MpIHtcbiAgICAgIHJldHVybiAtMSAqIE1hdGgucG93KDQsLTggKiBwb3MpICogTWF0aC5zaW4oKHBvcyAqIDYgLSAxKSAqICgyICogTWF0aC5QSSkgLyAyKSArIDE7XG4gICAgfSxcblxuICAgIHN3aW5nRnJvbVRvOiBmdW5jdGlvbiAocG9zKSB7XG4gICAgICB2YXIgcyA9IDEuNzAxNTg7XG4gICAgICByZXR1cm4gKChwb3MgLz0gMC41KSA8IDEpID8gMC41ICogKHBvcyAqIHBvcyAqICgoKHMgKj0gKDEuNTI1KSkgKyAxKSAqIHBvcyAtIHMpKSA6XG4gICAgICAgICAgMC41ICogKChwb3MgLT0gMikgKiBwb3MgKiAoKChzICo9ICgxLjUyNSkpICsgMSkgKiBwb3MgKyBzKSArIDIpO1xuICAgIH0sXG5cbiAgICBzd2luZ0Zyb206IGZ1bmN0aW9uIChwb3MpIHtcbiAgICAgIHZhciBzID0gMS43MDE1ODtcbiAgICAgIHJldHVybiBwb3MgKiBwb3MgKiAoKHMgKyAxKSAqIHBvcyAtIHMpO1xuICAgIH0sXG5cbiAgICBzd2luZ1RvOiBmdW5jdGlvbiAocG9zKSB7XG4gICAgICB2YXIgcyA9IDEuNzAxNTg7XG4gICAgICByZXR1cm4gKHBvcyAtPSAxKSAqIHBvcyAqICgocyArIDEpICogcG9zICsgcykgKyAxO1xuICAgIH0sXG5cbiAgICBib3VuY2U6IGZ1bmN0aW9uIChwb3MpIHtcbiAgICAgIGlmIChwb3MgPCAoMSAvIDIuNzUpKSB7XG4gICAgICAgIHJldHVybiAoNy41NjI1ICogcG9zICogcG9zKTtcbiAgICAgIH0gZWxzZSBpZiAocG9zIDwgKDIgLyAyLjc1KSkge1xuICAgICAgICByZXR1cm4gKDcuNTYyNSAqIChwb3MgLT0gKDEuNSAvIDIuNzUpKSAqIHBvcyArIDAuNzUpO1xuICAgICAgfSBlbHNlIGlmIChwb3MgPCAoMi41IC8gMi43NSkpIHtcbiAgICAgICAgcmV0dXJuICg3LjU2MjUgKiAocG9zIC09ICgyLjI1IC8gMi43NSkpICogcG9zICsgMC45Mzc1KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoNy41NjI1ICogKHBvcyAtPSAoMi42MjUgLyAyLjc1KSkgKiBwb3MgKyAwLjk4NDM3NSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGJvdW5jZVBhc3Q6IGZ1bmN0aW9uIChwb3MpIHtcbiAgICAgIGlmIChwb3MgPCAoMSAvIDIuNzUpKSB7XG4gICAgICAgIHJldHVybiAoNy41NjI1ICogcG9zICogcG9zKTtcbiAgICAgIH0gZWxzZSBpZiAocG9zIDwgKDIgLyAyLjc1KSkge1xuICAgICAgICByZXR1cm4gMiAtICg3LjU2MjUgKiAocG9zIC09ICgxLjUgLyAyLjc1KSkgKiBwb3MgKyAwLjc1KTtcbiAgICAgIH0gZWxzZSBpZiAocG9zIDwgKDIuNSAvIDIuNzUpKSB7XG4gICAgICAgIHJldHVybiAyIC0gKDcuNTYyNSAqIChwb3MgLT0gKDIuMjUgLyAyLjc1KSkgKiBwb3MgKyAwLjkzNzUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIDIgLSAoNy41NjI1ICogKHBvcyAtPSAoMi42MjUgLyAyLjc1KSkgKiBwb3MgKyAwLjk4NDM3NSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGVhc2VGcm9tVG86IGZ1bmN0aW9uIChwb3MpIHtcbiAgICAgIGlmICgocG9zIC89IDAuNSkgPCAxKSB7cmV0dXJuIDAuNSAqIE1hdGgucG93KHBvcyw0KTt9XG4gICAgICByZXR1cm4gLTAuNSAqICgocG9zIC09IDIpICogTWF0aC5wb3cocG9zLDMpIC0gMik7XG4gICAgfSxcblxuICAgIGVhc2VGcm9tOiBmdW5jdGlvbiAocG9zKSB7XG4gICAgICByZXR1cm4gTWF0aC5wb3cocG9zLDQpO1xuICAgIH0sXG5cbiAgICBlYXNlVG86IGZ1bmN0aW9uIChwb3MpIHtcbiAgICAgIHJldHVybiBNYXRoLnBvdyhwb3MsMC4yNSk7XG4gICAgfVxuICB9KTtcblxufSgpKTtcblxuLyohXG4gKiBUaGUgQmV6aWVyIG1hZ2ljIGluIHRoaXMgZmlsZSBpcyBhZGFwdGVkL2NvcGllZCBhbG1vc3Qgd2hvbGVzYWxlIGZyb21cbiAqIFtTY3JpcHR5Ml0oaHR0cHM6Ly9naXRodWIuY29tL21hZHJvYmJ5L3NjcmlwdHkyL2Jsb2IvbWFzdGVyL3NyYy9lZmZlY3RzL3RyYW5zaXRpb25zL2N1YmljLWJlemllci5qcyksXG4gKiB3aGljaCB3YXMgYWRhcHRlZCBmcm9tIEFwcGxlIGNvZGUgKHdoaWNoIHByb2JhYmx5IGNhbWUgZnJvbVxuICogW2hlcmVdKGh0dHA6Ly9vcGVuc291cmNlLmFwcGxlLmNvbS9zb3VyY2UvV2ViQ29yZS9XZWJDb3JlLTk1NS42Ni9wbGF0Zm9ybS9ncmFwaGljcy9Vbml0QmV6aWVyLmgpKS5cbiAqIFNwZWNpYWwgdGhhbmtzIHRvIEFwcGxlIGFuZCBUaG9tYXMgRnVjaHMgZm9yIG11Y2ggb2YgdGhpcyBjb2RlLlxuICovXG5cbi8qIVxuICogIENvcHlyaWdodCAoYykgMjAwNiBBcHBsZSBDb21wdXRlciwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqICBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbiAqICBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbiAqXG4gKiAgMS4gUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxuICogIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gKlxuICogIDIuIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSxcbiAqICB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uXG4gKiAgYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZSBkaXN0cmlidXRpb24uXG4gKlxuICogIDMuIE5laXRoZXIgdGhlIG5hbWUgb2YgdGhlIGNvcHlyaWdodCBob2xkZXIocykgbm9yIHRoZSBuYW1lcyBvZiBhbnlcbiAqICBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbVxuICogIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4gKlxuICogIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlNcbiAqICBcIkFTIElTXCIgQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sXG4gKiAgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFXG4gKiAgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgT1dORVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRVxuICogIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVNcbiAqICAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7XG4gKiAgTE9TUyBPRiBVU0UsIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OXG4gKiAgQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlRcbiAqICAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJU1xuICogIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuICovXG47KGZ1bmN0aW9uICgpIHtcbiAgLy8gcG9ydCBvZiB3ZWJraXQgY3ViaWMgYmV6aWVyIGhhbmRsaW5nIGJ5IGh0dHA6Ly93d3cubmV0emdlc3RhLmRlL2Rldi9cbiAgZnVuY3Rpb24gY3ViaWNCZXppZXJBdFRpbWUodCxwMXgscDF5LHAyeCxwMnksZHVyYXRpb24pIHtcbiAgICB2YXIgYXggPSAwLGJ4ID0gMCxjeCA9IDAsYXkgPSAwLGJ5ID0gMCxjeSA9IDA7XG4gICAgZnVuY3Rpb24gc2FtcGxlQ3VydmVYKHQpIHtyZXR1cm4gKChheCAqIHQgKyBieCkgKiB0ICsgY3gpICogdDt9XG4gICAgZnVuY3Rpb24gc2FtcGxlQ3VydmVZKHQpIHtyZXR1cm4gKChheSAqIHQgKyBieSkgKiB0ICsgY3kpICogdDt9XG4gICAgZnVuY3Rpb24gc2FtcGxlQ3VydmVEZXJpdmF0aXZlWCh0KSB7cmV0dXJuICgzLjAgKiBheCAqIHQgKyAyLjAgKiBieCkgKiB0ICsgY3g7fVxuICAgIGZ1bmN0aW9uIHNvbHZlRXBzaWxvbihkdXJhdGlvbikge3JldHVybiAxLjAgLyAoMjAwLjAgKiBkdXJhdGlvbik7fVxuICAgIGZ1bmN0aW9uIHNvbHZlKHgsZXBzaWxvbikge3JldHVybiBzYW1wbGVDdXJ2ZVkoc29sdmVDdXJ2ZVgoeCxlcHNpbG9uKSk7fVxuICAgIGZ1bmN0aW9uIGZhYnMobikge2lmIChuID49IDApIHtyZXR1cm4gbjt9ZWxzZSB7cmV0dXJuIDAgLSBuO319XG4gICAgZnVuY3Rpb24gc29sdmVDdXJ2ZVgoeCxlcHNpbG9uKSB7XG4gICAgICB2YXIgdDAsdDEsdDIseDIsZDIsaTtcbiAgICAgIGZvciAodDIgPSB4LCBpID0gMDsgaSA8IDg7IGkrKykge3gyID0gc2FtcGxlQ3VydmVYKHQyKSAtIHg7IGlmIChmYWJzKHgyKSA8IGVwc2lsb24pIHtyZXR1cm4gdDI7fSBkMiA9IHNhbXBsZUN1cnZlRGVyaXZhdGl2ZVgodDIpOyBpZiAoZmFicyhkMikgPCAxZS02KSB7YnJlYWs7fSB0MiA9IHQyIC0geDIgLyBkMjt9XG4gICAgICB0MCA9IDAuMDsgdDEgPSAxLjA7IHQyID0geDsgaWYgKHQyIDwgdDApIHtyZXR1cm4gdDA7fSBpZiAodDIgPiB0MSkge3JldHVybiB0MTt9XG4gICAgICB3aGlsZSAodDAgPCB0MSkge3gyID0gc2FtcGxlQ3VydmVYKHQyKTsgaWYgKGZhYnMoeDIgLSB4KSA8IGVwc2lsb24pIHtyZXR1cm4gdDI7fSBpZiAoeCA+IHgyKSB7dDAgPSB0Mjt9ZWxzZSB7dDEgPSB0Mjt9IHQyID0gKHQxIC0gdDApICogMC41ICsgdDA7fVxuICAgICAgcmV0dXJuIHQyOyAvLyBGYWlsdXJlLlxuICAgIH1cbiAgICBjeCA9IDMuMCAqIHAxeDsgYnggPSAzLjAgKiAocDJ4IC0gcDF4KSAtIGN4OyBheCA9IDEuMCAtIGN4IC0gYng7IGN5ID0gMy4wICogcDF5OyBieSA9IDMuMCAqIChwMnkgLSBwMXkpIC0gY3k7IGF5ID0gMS4wIC0gY3kgLSBieTtcbiAgICByZXR1cm4gc29sdmUodCwgc29sdmVFcHNpbG9uKGR1cmF0aW9uKSk7XG4gIH1cbiAgLyohXG4gICAqICBnZXRDdWJpY0JlemllclRyYW5zaXRpb24oeDEsIHkxLCB4MiwgeTIpIC0+IEZ1bmN0aW9uXG4gICAqXG4gICAqICBHZW5lcmF0ZXMgYSB0cmFuc2l0aW9uIGVhc2luZyBmdW5jdGlvbiB0aGF0IGlzIGNvbXBhdGlibGVcbiAgICogIHdpdGggV2ViS2l0J3MgQ1NTIHRyYW5zaXRpb25zIGAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uYFxuICAgKiAgQ1NTIHByb3BlcnR5LlxuICAgKlxuICAgKiAgVGhlIFczQyBoYXMgbW9yZSBpbmZvcm1hdGlvbiBhYm91dFxuICAgKiAgPGEgaHJlZj1cImh0dHA6Ly93d3cudzMub3JnL1RSL2NzczMtdHJhbnNpdGlvbnMvI3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uX3RhZ1wiPlxuICAgKiAgQ1NTMyB0cmFuc2l0aW9uIHRpbWluZyBmdW5jdGlvbnM8L2E+LlxuICAgKlxuICAgKiAgQHBhcmFtIHtudW1iZXJ9IHgxXG4gICAqICBAcGFyYW0ge251bWJlcn0geTFcbiAgICogIEBwYXJhbSB7bnVtYmVyfSB4MlxuICAgKiAgQHBhcmFtIHtudW1iZXJ9IHkyXG4gICAqICBAcmV0dXJuIHtmdW5jdGlvbn1cbiAgICovXG4gIGZ1bmN0aW9uIGdldEN1YmljQmV6aWVyVHJhbnNpdGlvbiAoeDEsIHkxLCB4MiwgeTIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHBvcykge1xuICAgICAgcmV0dXJuIGN1YmljQmV6aWVyQXRUaW1lKHBvcyx4MSx5MSx4Mix5MiwxKTtcbiAgICB9O1xuICB9XG4gIC8vIEVuZCBwb3J0ZWQgY29kZVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgQmV6aWVyIGVhc2luZyBmdW5jdGlvbiBhbmQgYXR0YWNoZXMgaXQgdG8gYFR3ZWVuYWJsZS5wcm90b3R5cGUuZm9ybXVsYWAuICBUaGlzIGZ1bmN0aW9uIGdpdmVzIHlvdSB0b3RhbCBjb250cm9sIG92ZXIgdGhlIGVhc2luZyBjdXJ2ZS4gIE1hdHRoZXcgTGVpbidzIFtDZWFzZXJdKGh0dHA6Ly9tYXR0aGV3bGVpbi5jb20vY2Vhc2VyLykgaXMgYSB1c2VmdWwgdG9vbCBmb3IgdmlzdWFsaXppbmcgdGhlIGN1cnZlcyB5b3UgY2FuIG1ha2Ugd2l0aCB0aGlzIGZ1bmN0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgZWFzaW5nIGN1cnZlLiAgT3ZlcndyaXRlcyB0aGUgb2xkIGVhc2luZyBmdW5jdGlvbiBvbiBUd2VlbmFibGUucHJvdG90eXBlLmZvcm11bGEgaWYgaXQgZXhpc3RzLlxuICAgKiBAcGFyYW0ge251bWJlcn0geDFcbiAgICogQHBhcmFtIHtudW1iZXJ9IHkxXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB4MlxuICAgKiBAcGFyYW0ge251bWJlcn0geTJcbiAgICogQHJldHVybiB7ZnVuY3Rpb259IFRoZSBlYXNpbmcgZnVuY3Rpb24gdGhhdCB3YXMgYXR0YWNoZWQgdG8gVHdlZW5hYmxlLnByb3RvdHlwZS5mb3JtdWxhLlxuICAgKi9cbiAgVHdlZW5hYmxlLnNldEJlemllckZ1bmN0aW9uID0gZnVuY3Rpb24gKG5hbWUsIHgxLCB5MSwgeDIsIHkyKSB7XG4gICAgdmFyIGN1YmljQmV6aWVyVHJhbnNpdGlvbiA9IGdldEN1YmljQmV6aWVyVHJhbnNpdGlvbih4MSwgeTEsIHgyLCB5Mik7XG4gICAgY3ViaWNCZXppZXJUcmFuc2l0aW9uLngxID0geDE7XG4gICAgY3ViaWNCZXppZXJUcmFuc2l0aW9uLnkxID0geTE7XG4gICAgY3ViaWNCZXppZXJUcmFuc2l0aW9uLngyID0geDI7XG4gICAgY3ViaWNCZXppZXJUcmFuc2l0aW9uLnkyID0geTI7XG5cbiAgICByZXR1cm4gVHdlZW5hYmxlLnByb3RvdHlwZS5mb3JtdWxhW25hbWVdID0gY3ViaWNCZXppZXJUcmFuc2l0aW9uO1xuICB9O1xuXG5cbiAgLyoqXG4gICAqIGBkZWxldGVgcyBhbiBlYXNpbmcgZnVuY3Rpb24gZnJvbSBgVHdlZW5hYmxlLnByb3RvdHlwZS5mb3JtdWxhYC4gIEJlIGNhcmVmdWwgd2l0aCB0aGlzIG1ldGhvZCwgYXMgaXQgYGRlbGV0ZWBzIHdoYXRldmVyIGVhc2luZyBmb3JtdWxhIG1hdGNoZXMgYG5hbWVgICh3aGljaCBtZWFucyB5b3UgY2FuIGRlbGV0ZSBkZWZhdWx0IFNoaWZ0eSBlYXNpbmcgZnVuY3Rpb25zKS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIGVhc2luZyBmdW5jdGlvbiB0byBkZWxldGUuXG4gICAqIEByZXR1cm4ge2Z1bmN0aW9ufVxuICAgKi9cbiAgVHdlZW5hYmxlLnVuc2V0QmV6aWVyRnVuY3Rpb24gPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIGRlbGV0ZSBUd2VlbmFibGUucHJvdG90eXBlLmZvcm11bGFbbmFtZV07XG4gIH07XG5cbn0pKCk7XG5cbjsoZnVuY3Rpb24gKCkge1xuXG4gIGZ1bmN0aW9uIGdldEludGVycG9sYXRlZFZhbHVlcyAoXG4gICAgZnJvbSwgY3VycmVudCwgdGFyZ2V0U3RhdGUsIHBvc2l0aW9uLCBlYXNpbmcpIHtcbiAgICByZXR1cm4gVHdlZW5hYmxlLnR3ZWVuUHJvcHMoXG4gICAgICBwb3NpdGlvbiwgY3VycmVudCwgZnJvbSwgdGFyZ2V0U3RhdGUsIDEsIDAsIGVhc2luZyk7XG4gIH1cblxuICAvLyBGYWtlIGEgVHdlZW5hYmxlIGFuZCBwYXRjaCBzb21lIGludGVybmFscy4gIFRoaXMgYXBwcm9hY2ggYWxsb3dzIHVzIHRvXG4gIC8vIHNraXAgdW5lY2Nlc3NhcnkgcHJvY2Vzc2luZyBhbmQgb2JqZWN0IHJlY3JlYXRpb24sIGN1dHRpbmcgZG93biBvbiBnYXJiYWdlXG4gIC8vIGNvbGxlY3Rpb24gcGF1c2VzLlxuICB2YXIgbW9ja1R3ZWVuYWJsZSA9IG5ldyBUd2VlbmFibGUoKTtcbiAgbW9ja1R3ZWVuYWJsZS5fZmlsdGVyQXJncyA9IFtdO1xuXG4gIC8qKlxuICAgKiBDb21wdXRlIHRoZSBtaWRwb2ludCBvZiB0d28gT2JqZWN0cy4gIFRoaXMgbWV0aG9kIGVmZmVjdGl2ZWx5IGNhbGN1bGF0ZXMgYSBzcGVjaWZpYyBmcmFtZSBvZiBhbmltYXRpb24gdGhhdCBbVHdlZW5hYmxlI3R3ZWVuXShzaGlmdHkuY29yZS5qcy5odG1sI3R3ZWVuKSBkb2VzIG1hbnkgdGltZXMgb3ZlciB0aGUgY291cnNlIG9mIGEgdHdlZW4uXG4gICAqXG4gICAqIEV4YW1wbGU6XG4gICAqXG4gICAqIGBgYFxuICAgKiAgdmFyIGludGVycG9sYXRlZFZhbHVlcyA9IFR3ZWVuYWJsZS5pbnRlcnBvbGF0ZSh7XG4gICAqICAgIHdpZHRoOiAnMTAwcHgnLFxuICAgKiAgICBvcGFjaXR5OiAwLFxuICAgKiAgICBjb2xvcjogJyNmZmYnXG4gICAqICB9LCB7XG4gICAqICAgIHdpZHRoOiAnMjAwcHgnLFxuICAgKiAgICBvcGFjaXR5OiAxLFxuICAgKiAgICBjb2xvcjogJyMwMDAnXG4gICAqICB9LCAwLjUpO1xuICAgKlxuICAgKiAgY29uc29sZS5sb2coaW50ZXJwb2xhdGVkVmFsdWVzKTtcbiAgICogIC8vIHtvcGFjaXR5OiAwLjUsIHdpZHRoOiBcIjE1MHB4XCIsIGNvbG9yOiBcInJnYigxMjcsMTI3LDEyNylcIn1cbiAgICogYGBgXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBmcm9tIFRoZSBzdGFydGluZyB2YWx1ZXMgdG8gdHdlZW4gZnJvbS5cbiAgICogQHBhcmFtIHtPYmplY3R9IHRhcmdldFN0YXRlIFRoZSBlbmRpbmcgdmFsdWVzIHRvIHR3ZWVuIHRvLlxuICAgKiBAcGFyYW0ge251bWJlcn0gcG9zaXRpb24gVGhlIG5vcm1hbGl6ZWQgcG9zaXRpb24gdmFsdWUgKGJldHdlZW4gMC4wIGFuZCAxLjApIHRvIGludGVycG9sYXRlIHRoZSB2YWx1ZXMgYmV0d2VlbiBgZnJvbWAgYW5kIGB0b2AgZm9yLiAgYGZyb21gIHJlcHJlc2VudHMgMCBhbmQgYHRvYCByZXByZXNlbnRzIGAxYC5cbiAgICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBlYXNpbmcgVGhlIGVhc2luZyBjdXJ2ZShzKSB0byBjYWxjdWxhdGUgdGhlIG1pZHBvaW50IGFnYWluc3QuICBZb3UgY2FuIHJlZmVyZW5jZSBhbnkgZWFzaW5nIGZ1bmN0aW9uIGF0dGFjaGVkIHRvIGBUd2VlbmFibGUucHJvdG90eXBlLmZvcm11bGFgLiAgSWYgb21pdHRlZCwgdGhpcyBkZWZhdWx0cyB0byBcImxpbmVhclwiLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICBUd2VlbmFibGUuaW50ZXJwb2xhdGUgPSBmdW5jdGlvbiAoZnJvbSwgdGFyZ2V0U3RhdGUsIHBvc2l0aW9uLCBlYXNpbmcpIHtcbiAgICB2YXIgY3VycmVudCA9IFR3ZWVuYWJsZS5zaGFsbG93Q29weSh7fSwgZnJvbSk7XG4gICAgdmFyIGVhc2luZ09iamVjdCA9IFR3ZWVuYWJsZS5jb21wb3NlRWFzaW5nT2JqZWN0KFxuICAgICAgZnJvbSwgZWFzaW5nIHx8ICdsaW5lYXInKTtcblxuICAgIG1vY2tUd2VlbmFibGUuc2V0KHt9KTtcblxuICAgIC8vIEFsaWFzIGFuZCByZXVzZSB0aGUgX2ZpbHRlckFyZ3MgYXJyYXkgaW5zdGVhZCBvZiByZWNyZWF0aW5nIGl0LlxuICAgIHZhciBmaWx0ZXJBcmdzID0gbW9ja1R3ZWVuYWJsZS5fZmlsdGVyQXJncztcbiAgICBmaWx0ZXJBcmdzLmxlbmd0aCA9IDA7XG4gICAgZmlsdGVyQXJnc1swXSA9IGN1cnJlbnQ7XG4gICAgZmlsdGVyQXJnc1sxXSA9IGZyb207XG4gICAgZmlsdGVyQXJnc1syXSA9IHRhcmdldFN0YXRlO1xuICAgIGZpbHRlckFyZ3NbM10gPSBlYXNpbmdPYmplY3Q7XG5cbiAgICAvLyBBbnkgZGVmaW5lZCB2YWx1ZSB0cmFuc2Zvcm1hdGlvbiBtdXN0IGJlIGFwcGxpZWRcbiAgICBUd2VlbmFibGUuYXBwbHlGaWx0ZXIobW9ja1R3ZWVuYWJsZSwgJ3R3ZWVuQ3JlYXRlZCcpO1xuICAgIFR3ZWVuYWJsZS5hcHBseUZpbHRlcihtb2NrVHdlZW5hYmxlLCAnYmVmb3JlVHdlZW4nKTtcblxuICAgIHZhciBpbnRlcnBvbGF0ZWRWYWx1ZXMgPSBnZXRJbnRlcnBvbGF0ZWRWYWx1ZXMoXG4gICAgICBmcm9tLCBjdXJyZW50LCB0YXJnZXRTdGF0ZSwgcG9zaXRpb24sIGVhc2luZ09iamVjdCk7XG5cbiAgICAvLyBUcmFuc2Zvcm0gdmFsdWVzIGJhY2sgaW50byB0aGVpciBvcmlnaW5hbCBmb3JtYXRcbiAgICBUd2VlbmFibGUuYXBwbHlGaWx0ZXIobW9ja1R3ZWVuYWJsZSwgJ2FmdGVyVHdlZW4nKTtcblxuICAgIHJldHVybiBpbnRlcnBvbGF0ZWRWYWx1ZXM7XG4gIH07XG5cbn0oKSk7XG5cbi8qKlxuICogQWRkcyBzdHJpbmcgaW50ZXJwb2xhdGlvbiBzdXBwb3J0IHRvIFNoaWZ0eS5cbiAqXG4gKiBUaGUgVG9rZW4gZXh0ZW5zaW9uIGFsbG93cyBTaGlmdHkgdG8gdHdlZW4gbnVtYmVycyBpbnNpZGUgb2Ygc3RyaW5ncy4gIEFtb25nIG90aGVyIHRoaW5ncywgdGhpcyBhbGxvd3MgeW91IHRvIGFuaW1hdGUgQ1NTIHByb3BlcnRpZXMuICBGb3IgZXhhbXBsZSwgeW91IGNhbiBkbyB0aGlzOlxuICpcbiAqIGBgYFxuICogdmFyIHR3ZWVuYWJsZSA9IG5ldyBUd2VlbmFibGUoKTtcbiAqIHR3ZWVuYWJsZS50d2Vlbih7XG4gKiAgIGZyb206IHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCg0NXB4KSd9LFxuICogICB0bzogeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDkweHApJ31cbiAqIH0pO1xuICogYGBgXG4gKlxuICogYHRyYW5zbGF0ZVgoNDUpYCB3aWxsIGJlIHR3ZWVuZWQgdG8gYHRyYW5zbGF0ZVgoOTApYC4gIFRvIGRlbW9uc3RyYXRlOlxuICpcbiAqIGBgYFxuICogdmFyIHR3ZWVuYWJsZSA9IG5ldyBUd2VlbmFibGUoKTtcbiAqIHR3ZWVuYWJsZS50d2Vlbih7XG4gKiAgIGZyb206IHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCg0NXB4KSd9LFxuICogICB0bzogeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDkwcHgpJ30sXG4gKiAgIHN0ZXA6IGZ1bmN0aW9uIChzdGF0ZSkge1xuICogICAgIGNvbnNvbGUubG9nKHN0YXRlLnRyYW5zZm9ybSk7XG4gKiAgIH1cbiAqIH0pO1xuICogYGBgXG4gKlxuICogVGhlIGFib3ZlIHNuaXBwZXQgd2lsbCBsb2cgc29tZXRoaW5nIGxpa2UgdGhpcyBpbiB0aGUgY29uc29sZTpcbiAqXG4gKiBgYGBcbiAqIHRyYW5zbGF0ZVgoNjAuM3B4KVxuICogLi4uXG4gKiB0cmFuc2xhdGVYKDc2LjA1cHgpXG4gKiAuLi5cbiAqIHRyYW5zbGF0ZVgoOTBweClcbiAqIGBgYFxuICpcbiAqIEFub3RoZXIgdXNlIGZvciB0aGlzIGlzIGFuaW1hdGluZyBjb2xvcnM6XG4gKlxuICogYGBgXG4gKiB2YXIgdHdlZW5hYmxlID0gbmV3IFR3ZWVuYWJsZSgpO1xuICogdHdlZW5hYmxlLnR3ZWVuKHtcbiAqICAgZnJvbTogeyBjb2xvcjogJ3JnYigwLDI1NSwwKSd9LFxuICogICB0bzogeyBjb2xvcjogJ3JnYigyNTUsMCwyNTUpJ30sXG4gKiAgIHN0ZXA6IGZ1bmN0aW9uIChzdGF0ZSkge1xuICogICAgIGNvbnNvbGUubG9nKHN0YXRlLmNvbG9yKTtcbiAqICAgfVxuICogfSk7XG4gKiBgYGBcbiAqXG4gKiBUaGUgYWJvdmUgc25pcHBldCB3aWxsIGxvZyBzb21ldGhpbmcgbGlrZSB0aGlzOlxuICpcbiAqIGBgYFxuICogcmdiKDg0LDE3MCw4NClcbiAqIC4uLlxuICogcmdiKDE3MCw4NCwxNzApXG4gKiAuLi5cbiAqIHJnYigyNTUsMCwyNTUpXG4gKiBgYGBcbiAqXG4gKiBUaGlzIGV4dGVuc2lvbiBhbHNvIHN1cHBvcnRzIGhleGFkZWNpbWFsIGNvbG9ycywgaW4gYm90aCBsb25nIChgI2ZmMDBmZmApIGFuZCBzaG9ydCAoYCNmMGZgKSBmb3Jtcy4gIEJlIGF3YXJlIHRoYXQgaGV4YWRlY2ltYWwgaW5wdXQgdmFsdWVzIHdpbGwgYmUgY29udmVydGVkIGludG8gdGhlIGVxdWl2YWxlbnQgUkdCIG91dHB1dCB2YWx1ZXMuICBUaGlzIGlzIGRvbmUgdG8gb3B0aW1pemUgZm9yIHBlcmZvcm1hbmNlLlxuICpcbiAqIGBgYFxuICogdmFyIHR3ZWVuYWJsZSA9IG5ldyBUd2VlbmFibGUoKTtcbiAqIHR3ZWVuYWJsZS50d2Vlbih7XG4gKiAgIGZyb206IHsgY29sb3I6ICcjMGYwJ30sXG4gKiAgIHRvOiB7IGNvbG9yOiAnI2YwZid9LFxuICogICBzdGVwOiBmdW5jdGlvbiAoc3RhdGUpIHtcbiAqICAgICBjb25zb2xlLmxvZyhzdGF0ZS5jb2xvcik7XG4gKiAgIH1cbiAqIH0pO1xuICogYGBgXG4gKlxuICogVGhpcyBzbmlwcGV0IHdpbGwgZ2VuZXJhdGUgdGhlIHNhbWUgb3V0cHV0IGFzIHRoZSBvbmUgYmVmb3JlIGl0IGJlY2F1c2UgZXF1aXZhbGVudCB2YWx1ZXMgd2VyZSBzdXBwbGllZCAoanVzdCBpbiBoZXhhZGVjaW1hbCBmb3JtIHJhdGhlciB0aGFuIFJHQik6XG4gKlxuICogYGBgXG4gKiByZ2IoODQsMTcwLDg0KVxuICogLi4uXG4gKiByZ2IoMTcwLDg0LDE3MClcbiAqIC4uLlxuICogcmdiKDI1NSwwLDI1NSlcbiAqIGBgYFxuICpcbiAqICMjIEVhc2luZyBzdXBwb3J0XG4gKlxuICogRWFzaW5nIHdvcmtzIHNvbWV3aGF0IGRpZmZlcmVudGx5IGluIHRoZSBUb2tlbiBleHRlbnNpb24uICBUaGlzIGlzIGJlY2F1c2Ugc29tZSBDU1MgcHJvcGVydGllcyBoYXZlIG11bHRpcGxlIHZhbHVlcyBpbiB0aGVtLCBhbmQgeW91IG1pZ2h0IG5lZWQgdG8gdHdlZW4gZWFjaCB2YWx1ZSBhbG9uZyBpdHMgb3duIGVhc2luZyBjdXJ2ZS4gIEEgYmFzaWMgZXhhbXBsZTpcbiAqXG4gKiBgYGBcbiAqIHZhciB0d2VlbmFibGUgPSBuZXcgVHdlZW5hYmxlKCk7XG4gKiB0d2VlbmFibGUudHdlZW4oe1xuICogICBmcm9tOiB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMHB4KSB0cmFuc2xhdGVZKDBweCknfSxcbiAqICAgdG86IHsgdHJhbnNmb3JtOiAgICd0cmFuc2xhdGVYKDEwMHB4KSB0cmFuc2xhdGVZKDEwMHB4KSd9LFxuICogICBlYXNpbmc6IHsgdHJhbnNmb3JtOiAnZWFzZUluUXVhZCcgfSxcbiAqICAgc3RlcDogZnVuY3Rpb24gKHN0YXRlKSB7XG4gKiAgICAgY29uc29sZS5sb2coc3RhdGUudHJhbnNmb3JtKTtcbiAqICAgfVxuICogfSk7XG4gKiBgYGBcbiAqXG4gKiBUaGUgYWJvdmUgc25pcHBldCBjcmVhdGUgdmFsdWVzIGxpa2UgdGhpczpcbiAqXG4gKiBgYGBcbiAqIHRyYW5zbGF0ZVgoMTEuNTYwMDAwMDAwMDAwMDAycHgpIHRyYW5zbGF0ZVkoMTEuNTYwMDAwMDAwMDAwMDAycHgpXG4gKiAuLi5cbiAqIHRyYW5zbGF0ZVgoNDYuMjQwMDAwMDAwMDAwMDFweCkgdHJhbnNsYXRlWSg0Ni4yNDAwMDAwMDAwMDAwMXB4KVxuICogLi4uXG4gKiB0cmFuc2xhdGVYKDEwMHB4KSB0cmFuc2xhdGVZKDEwMHB4KVxuICogYGBgXG4gKlxuICogSW4gdGhpcyBjYXNlLCB0aGUgdmFsdWVzIGZvciBgdHJhbnNsYXRlWGAgYW5kIGB0cmFuc2xhdGVZYCBhcmUgYWx3YXlzIHRoZSBzYW1lIGZvciBlYWNoIHN0ZXAgb2YgdGhlIHR3ZWVuLCBiZWNhdXNlIHRoZXkgaGF2ZSB0aGUgc2FtZSBzdGFydCBhbmQgZW5kIHBvaW50cyBhbmQgYm90aCB1c2UgdGhlIHNhbWUgZWFzaW5nIGN1cnZlLiAgV2UgY2FuIGFsc28gdHdlZW4gYHRyYW5zbGF0ZVhgIGFuZCBgdHJhbnNsYXRlWWAgYWxvbmcgaW5kZXBlbmRlbnQgY3VydmVzOlxuICpcbiAqIGBgYFxuICogdmFyIHR3ZWVuYWJsZSA9IG5ldyBUd2VlbmFibGUoKTtcbiAqIHR3ZWVuYWJsZS50d2Vlbih7XG4gKiAgIGZyb206IHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwcHgpIHRyYW5zbGF0ZVkoMHB4KSd9LFxuICogICB0bzogeyB0cmFuc2Zvcm06ICAgJ3RyYW5zbGF0ZVgoMTAwcHgpIHRyYW5zbGF0ZVkoMTAwcHgpJ30sXG4gKiAgIGVhc2luZzogeyB0cmFuc2Zvcm06ICdlYXNlSW5RdWFkIGJvdW5jZScgfSxcbiAqICAgc3RlcDogZnVuY3Rpb24gKHN0YXRlKSB7XG4gKiAgICAgY29uc29sZS5sb2coc3RhdGUudHJhbnNmb3JtKTtcbiAqICAgfVxuICogfSk7XG4gKiBgYGBcbiAqXG4gKiBUaGUgYWJvdmUgc25pcHBldCBjcmVhdGUgdmFsdWVzIGxpa2UgdGhpczpcbiAqXG4gKiBgYGBcbiAqIHRyYW5zbGF0ZVgoMTAuODlweCkgdHJhbnNsYXRlWSg4Mi4zNTU2MjVweClcbiAqIC4uLlxuICogdHJhbnNsYXRlWCg0NC44OTAwMDAwMDAwMDAwMXB4KSB0cmFuc2xhdGVZKDg2LjczMDYyNTAwMDAwMDAycHgpXG4gKiAuLi5cbiAqIHRyYW5zbGF0ZVgoMTAwcHgpIHRyYW5zbGF0ZVkoMTAwcHgpXG4gKiBgYGBcbiAqXG4gKiBgdHJhbnNsYXRlWGAgYW5kIGB0cmFuc2xhdGVZYCBhcmUgbm90IGluIHN5bmMgYW55bW9yZSwgYmVjYXVzZSBgZWFzZUluUXVhZGAgd2FzIHNwZWNpZmllZCBmb3IgYHRyYW5zbGF0ZVhgIGFuZCBgYm91bmNlYCBmb3IgYHRyYW5zbGF0ZVlgLiAgTWl4aW5nIGFuZCBtYXRjaGluZyBlYXNpbmcgY3VydmVzIGNhbiBtYWtlIGZvciBzb21lIGludGVyZXN0aW5nIG1vdGlvbiBpbiB5b3VyIGFuaW1hdGlvbnMuXG4gKlxuICogVGhlIG9yZGVyIG9mIHRoZSBzcGFjZS1zZXBhcmF0ZWQgZWFzaW5nIGN1cnZlcyBjb3JyZXNwb25kIHRoZSB0b2tlbiB2YWx1ZXMgdGhleSBhcHBseSB0by4gIElmIHRoZXJlIGFyZSBtb3JlIHRva2VuIHZhbHVlcyB0aGFuIGVhc2luZyBjdXJ2ZXMgbGlzdGVkLCB0aGUgbGFzdCBlYXNpbmcgY3VydmUgbGlzdGVkIGlzIHVzZWQuXG4gKi9cbmZ1bmN0aW9uIHRva2VuICgpIHtcbiAgLy8gRnVuY3Rpb25hbGl0eSBmb3IgdGhpcyBleHRlbnNpb24gcnVucyBpbXBsaWNpdGx5IGlmIGl0IGlzIGxvYWRlZC5cbn0gLyohKi9cblxuLy8gdG9rZW4gZnVuY3Rpb24gaXMgZGVmaW5lZCBhYm92ZSBvbmx5IHNvIHRoYXQgZG94LWZvdW5kYXRpb24gc2VlcyBpdCBhc1xuLy8gZG9jdW1lbnRhdGlvbiBhbmQgcmVuZGVycyBpdC4gIEl0IGlzIG5ldmVyIHVzZWQsIGFuZCBpcyBvcHRpbWl6ZWQgYXdheSBhdFxuLy8gYnVpbGQgdGltZS5cblxuOyhmdW5jdGlvbiAoVHdlZW5hYmxlKSB7XG5cbiAgLyohXG4gICAqIEB0eXBlZGVmIHt7XG4gICAqICAgZm9ybWF0U3RyaW5nOiBzdHJpbmdcbiAgICogICBjaHVua05hbWVzOiBBcnJheS48c3RyaW5nPlxuICAgKiB9fVxuICAgKi9cbiAgdmFyIGZvcm1hdE1hbmlmZXN0O1xuXG4gIC8vIENPTlNUQU5UU1xuXG4gIHZhciBSX05VTUJFUl9DT01QT05FTlQgPSAvKFxcZHxcXC18XFwuKS87XG4gIHZhciBSX0ZPUk1BVF9DSFVOS1MgPSAvKFteXFwtMC05XFwuXSspL2c7XG4gIHZhciBSX1VORk9STUFUVEVEX1ZBTFVFUyA9IC9bMC05LlxcLV0rL2c7XG4gIHZhciBSX1JHQiA9IG5ldyBSZWdFeHAoXG4gICAgJ3JnYlxcXFwoJyArIFJfVU5GT1JNQVRURURfVkFMVUVTLnNvdXJjZSArXG4gICAgKC8sXFxzKi8uc291cmNlKSArIFJfVU5GT1JNQVRURURfVkFMVUVTLnNvdXJjZSArXG4gICAgKC8sXFxzKi8uc291cmNlKSArIFJfVU5GT1JNQVRURURfVkFMVUVTLnNvdXJjZSArICdcXFxcKScsICdnJyk7XG4gIHZhciBSX1JHQl9QUkVGSVggPSAvXi4qXFwoLztcbiAgdmFyIFJfSEVYID0gLyMoWzAtOV18W2EtZl0pezMsNn0vZ2k7XG4gIHZhciBWQUxVRV9QTEFDRUhPTERFUiA9ICdWQUwnO1xuXG4gIC8vIEhFTFBFUlNcblxuICB2YXIgZ2V0Rm9ybWF0Q2h1bmtzRnJvbV9hY2N1bXVsYXRvciA9IFtdO1xuICAvKiFcbiAgICogQHBhcmFtIHtBcnJheS5udW1iZXJ9IHJhd1ZhbHVlc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gcHJlZml4XG4gICAqXG4gICAqIEByZXR1cm4ge0FycmF5LjxzdHJpbmc+fVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0Rm9ybWF0Q2h1bmtzRnJvbSAocmF3VmFsdWVzLCBwcmVmaXgpIHtcbiAgICBnZXRGb3JtYXRDaHVua3NGcm9tX2FjY3VtdWxhdG9yLmxlbmd0aCA9IDA7XG5cbiAgICB2YXIgcmF3VmFsdWVzTGVuZ3RoID0gcmF3VmFsdWVzLmxlbmd0aDtcbiAgICB2YXIgaTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCByYXdWYWx1ZXNMZW5ndGg7IGkrKykge1xuICAgICAgZ2V0Rm9ybWF0Q2h1bmtzRnJvbV9hY2N1bXVsYXRvci5wdXNoKCdfJyArIHByZWZpeCArICdfJyArIGkpO1xuICAgIH1cblxuICAgIHJldHVybiBnZXRGb3JtYXRDaHVua3NGcm9tX2FjY3VtdWxhdG9yO1xuICB9XG5cbiAgLyohXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtYXR0ZWRTdHJpbmdcbiAgICpcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0Rm9ybWF0U3RyaW5nRnJvbSAoZm9ybWF0dGVkU3RyaW5nKSB7XG4gICAgdmFyIGNodW5rcyA9IGZvcm1hdHRlZFN0cmluZy5tYXRjaChSX0ZPUk1BVF9DSFVOS1MpO1xuXG4gICAgaWYgKCFjaHVua3MpIHtcbiAgICAgIC8vIGNodW5rcyB3aWxsIGJlIG51bGwgaWYgdGhlcmUgd2VyZSBubyB0b2tlbnMgdG8gcGFyc2UgaW5cbiAgICAgIC8vIGZvcm1hdHRlZFN0cmluZyAoZm9yIGV4YW1wbGUsIGlmIGZvcm1hdHRlZFN0cmluZyBpcyAnMicpLiAgQ29lcmNlXG4gICAgICAvLyBjaHVua3MgdG8gYmUgdXNlZnVsIGhlcmUuXG4gICAgICBjaHVua3MgPSBbJycsICcnXTtcblxuICAgICAgLy8gSWYgdGhlcmUgaXMgb25seSBvbmUgY2h1bmssIGFzc3VtZSB0aGF0IHRoZSBzdHJpbmcgaXMgYSBudW1iZXJcbiAgICAgIC8vIGZvbGxvd2VkIGJ5IGEgdG9rZW4uLi5cbiAgICAgIC8vIE5PVEU6IFRoaXMgbWF5IGJlIGFuIHVud2lzZSBhc3N1bXB0aW9uLlxuICAgIH0gZWxzZSBpZiAoY2h1bmtzLmxlbmd0aCA9PT0gMSB8fFxuICAgICAgICAvLyAuLi5vciBpZiB0aGUgc3RyaW5nIHN0YXJ0cyB3aXRoIGEgbnVtYmVyIGNvbXBvbmVudCAoXCIuXCIsIFwiLVwiLCBvciBhXG4gICAgICAgIC8vIGRpZ2l0KS4uLlxuICAgICAgICBmb3JtYXR0ZWRTdHJpbmdbMF0ubWF0Y2goUl9OVU1CRVJfQ09NUE9ORU5UKSkge1xuICAgICAgLy8gLi4ucHJlcGVuZCBhbiBlbXB0eSBzdHJpbmcgaGVyZSB0byBtYWtlIHN1cmUgdGhhdCB0aGUgZm9ybWF0dGVkIG51bWJlclxuICAgICAgLy8gaXMgcHJvcGVybHkgcmVwbGFjZWQgYnkgVkFMVUVfUExBQ0VIT0xERVJcbiAgICAgIGNodW5rcy51bnNoaWZ0KCcnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2h1bmtzLmpvaW4oVkFMVUVfUExBQ0VIT0xERVIpO1xuICB9XG5cbiAgLyohXG4gICAqIENvbnZlcnQgYWxsIGhleCBjb2xvciB2YWx1ZXMgd2l0aGluIGEgc3RyaW5nIHRvIGFuIHJnYiBzdHJpbmcuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZU9iamVjdFxuICAgKlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBtb2RpZmllZCBvYmpcbiAgICovXG4gIGZ1bmN0aW9uIHNhbml0aXplT2JqZWN0Rm9ySGV4UHJvcHMgKHN0YXRlT2JqZWN0KSB7XG4gICAgVHdlZW5hYmxlLmVhY2goc3RhdGVPYmplY3QsIGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICB2YXIgY3VycmVudFByb3AgPSBzdGF0ZU9iamVjdFtwcm9wXTtcblxuICAgICAgaWYgKHR5cGVvZiBjdXJyZW50UHJvcCA9PT0gJ3N0cmluZycgJiYgY3VycmVudFByb3AubWF0Y2goUl9IRVgpKSB7XG4gICAgICAgIHN0YXRlT2JqZWN0W3Byb3BdID0gc2FuaXRpemVIZXhDaHVua3NUb1JHQihjdXJyZW50UHJvcCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKiFcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICAgKlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBmdW5jdGlvbiAgc2FuaXRpemVIZXhDaHVua3NUb1JHQiAoc3RyKSB7XG4gICAgcmV0dXJuIGZpbHRlclN0cmluZ0NodW5rcyhSX0hFWCwgc3RyLCBjb252ZXJ0SGV4VG9SR0IpO1xuICB9XG5cbiAgLyohXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBoZXhTdHJpbmdcbiAgICpcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZnVuY3Rpb24gY29udmVydEhleFRvUkdCIChoZXhTdHJpbmcpIHtcbiAgICB2YXIgcmdiQXJyID0gaGV4VG9SR0JBcnJheShoZXhTdHJpbmcpO1xuICAgIHJldHVybiAncmdiKCcgKyByZ2JBcnJbMF0gKyAnLCcgKyByZ2JBcnJbMV0gKyAnLCcgKyByZ2JBcnJbMl0gKyAnKSc7XG4gIH1cblxuICB2YXIgaGV4VG9SR0JBcnJheV9yZXR1cm5BcnJheSA9IFtdO1xuICAvKiFcbiAgICogQ29udmVydCBhIGhleGFkZWNpbWFsIHN0cmluZyB0byBhbiBhcnJheSB3aXRoIHRocmVlIGl0ZW1zLCBvbmUgZWFjaCBmb3JcbiAgICogdGhlIHJlZCwgYmx1ZSwgYW5kIGdyZWVuIGRlY2ltYWwgdmFsdWVzLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gaGV4IEEgaGV4YWRlY2ltYWwgc3RyaW5nLlxuICAgKlxuICAgKiBAcmV0dXJucyB7QXJyYXkuPG51bWJlcj59IFRoZSBjb252ZXJ0ZWQgQXJyYXkgb2YgUkdCIHZhbHVlcyBpZiBgaGV4YCBpcyBhXG4gICAqIHZhbGlkIHN0cmluZywgb3IgYW4gQXJyYXkgb2YgdGhyZWUgMCdzLlxuICAgKi9cbiAgZnVuY3Rpb24gaGV4VG9SR0JBcnJheSAoaGV4KSB7XG5cbiAgICBoZXggPSBoZXgucmVwbGFjZSgvIy8sICcnKTtcblxuICAgIC8vIElmIHRoZSBzdHJpbmcgaXMgYSBzaG9ydGhhbmQgdGhyZWUgZGlnaXQgaGV4IG5vdGF0aW9uLCBub3JtYWxpemUgaXQgdG9cbiAgICAvLyB0aGUgc3RhbmRhcmQgc2l4IGRpZ2l0IG5vdGF0aW9uXG4gICAgaWYgKGhleC5sZW5ndGggPT09IDMpIHtcbiAgICAgIGhleCA9IGhleC5zcGxpdCgnJyk7XG4gICAgICBoZXggPSBoZXhbMF0gKyBoZXhbMF0gKyBoZXhbMV0gKyBoZXhbMV0gKyBoZXhbMl0gKyBoZXhbMl07XG4gICAgfVxuXG4gICAgaGV4VG9SR0JBcnJheV9yZXR1cm5BcnJheVswXSA9IGhleFRvRGVjKGhleC5zdWJzdHIoMCwgMikpO1xuICAgIGhleFRvUkdCQXJyYXlfcmV0dXJuQXJyYXlbMV0gPSBoZXhUb0RlYyhoZXguc3Vic3RyKDIsIDIpKTtcbiAgICBoZXhUb1JHQkFycmF5X3JldHVybkFycmF5WzJdID0gaGV4VG9EZWMoaGV4LnN1YnN0cig0LCAyKSk7XG5cbiAgICByZXR1cm4gaGV4VG9SR0JBcnJheV9yZXR1cm5BcnJheTtcbiAgfVxuXG4gIC8qIVxuICAgKiBDb252ZXJ0IGEgYmFzZS0xNiBudW1iZXIgdG8gYmFzZS0xMC5cbiAgICpcbiAgICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfSBoZXggVGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAgICpcbiAgICogQHJldHVybnMge051bWJlcn0gVGhlIGJhc2UtMTAgZXF1aXZhbGVudCBvZiBgaGV4YC5cbiAgICovXG4gIGZ1bmN0aW9uIGhleFRvRGVjIChoZXgpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoaGV4LCAxNik7XG4gIH1cblxuICAvKiFcbiAgICogUnVucyBhIGZpbHRlciBvcGVyYXRpb24gb24gYWxsIGNodW5rcyBvZiBhIHN0cmluZyB0aGF0IG1hdGNoIGEgUmVnRXhwXG4gICAqXG4gICAqIEBwYXJhbSB7UmVnRXhwfSBwYXR0ZXJuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1bmZpbHRlcmVkU3RyaW5nXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oc3RyaW5nKX0gZmlsdGVyXG4gICAqXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGZ1bmN0aW9uIGZpbHRlclN0cmluZ0NodW5rcyAocGF0dGVybiwgdW5maWx0ZXJlZFN0cmluZywgZmlsdGVyKSB7XG4gICAgdmFyIHBhdHRlbk1hdGNoZXMgPSB1bmZpbHRlcmVkU3RyaW5nLm1hdGNoKHBhdHRlcm4pO1xuICAgIHZhciBmaWx0ZXJlZFN0cmluZyA9IHVuZmlsdGVyZWRTdHJpbmcucmVwbGFjZShwYXR0ZXJuLCBWQUxVRV9QTEFDRUhPTERFUik7XG5cbiAgICBpZiAocGF0dGVuTWF0Y2hlcykge1xuICAgICAgdmFyIHBhdHRlbk1hdGNoZXNMZW5ndGggPSBwYXR0ZW5NYXRjaGVzLmxlbmd0aDtcbiAgICAgIHZhciBjdXJyZW50Q2h1bms7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGF0dGVuTWF0Y2hlc0xlbmd0aDsgaSsrKSB7XG4gICAgICAgIGN1cnJlbnRDaHVuayA9IHBhdHRlbk1hdGNoZXMuc2hpZnQoKTtcbiAgICAgICAgZmlsdGVyZWRTdHJpbmcgPSBmaWx0ZXJlZFN0cmluZy5yZXBsYWNlKFxuICAgICAgICAgIFZBTFVFX1BMQUNFSE9MREVSLCBmaWx0ZXIoY3VycmVudENodW5rKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpbHRlcmVkU3RyaW5nO1xuICB9XG5cbiAgLyohXG4gICAqIENoZWNrIGZvciBmbG9hdGluZyBwb2ludCB2YWx1ZXMgd2l0aGluIHJnYiBzdHJpbmdzIGFuZCByb3VuZHMgdGhlbS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZvcm1hdHRlZFN0cmluZ1xuICAgKlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBmdW5jdGlvbiBzYW5pdGl6ZVJHQkNodW5rcyAoZm9ybWF0dGVkU3RyaW5nKSB7XG4gICAgcmV0dXJuIGZpbHRlclN0cmluZ0NodW5rcyhSX1JHQiwgZm9ybWF0dGVkU3RyaW5nLCBzYW5pdGl6ZVJHQkNodW5rKTtcbiAgfVxuXG4gIC8qIVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmdiQ2h1bmtcbiAgICpcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZnVuY3Rpb24gc2FuaXRpemVSR0JDaHVuayAocmdiQ2h1bmspIHtcbiAgICB2YXIgbnVtYmVycyA9IHJnYkNodW5rLm1hdGNoKFJfVU5GT1JNQVRURURfVkFMVUVTKTtcbiAgICB2YXIgbnVtYmVyc0xlbmd0aCA9IG51bWJlcnMubGVuZ3RoO1xuICAgIHZhciBzYW5pdGl6ZWRTdHJpbmcgPSByZ2JDaHVuay5tYXRjaChSX1JHQl9QUkVGSVgpWzBdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1iZXJzTGVuZ3RoOyBpKyspIHtcbiAgICAgIHNhbml0aXplZFN0cmluZyArPSBwYXJzZUludChudW1iZXJzW2ldLCAxMCkgKyAnLCc7XG4gICAgfVxuXG4gICAgc2FuaXRpemVkU3RyaW5nID0gc2FuaXRpemVkU3RyaW5nLnNsaWNlKDAsIC0xKSArICcpJztcblxuICAgIHJldHVybiBzYW5pdGl6ZWRTdHJpbmc7XG4gIH1cblxuICAvKiFcbiAgICogQHBhcmFtIHtPYmplY3R9IHN0YXRlT2JqZWN0XG4gICAqXG4gICAqIEByZXR1cm4ge09iamVjdH0gQW4gT2JqZWN0IG9mIGZvcm1hdE1hbmlmZXN0cyB0aGF0IGNvcnJlc3BvbmQgdG9cbiAgICogdGhlIHN0cmluZyBwcm9wZXJ0aWVzIG9mIHN0YXRlT2JqZWN0XG4gICAqL1xuICBmdW5jdGlvbiBnZXRGb3JtYXRNYW5pZmVzdHMgKHN0YXRlT2JqZWN0KSB7XG4gICAgdmFyIG1hbmlmZXN0QWNjdW11bGF0b3IgPSB7fTtcblxuICAgIFR3ZWVuYWJsZS5lYWNoKHN0YXRlT2JqZWN0LCBmdW5jdGlvbiAocHJvcCkge1xuICAgICAgdmFyIGN1cnJlbnRQcm9wID0gc3RhdGVPYmplY3RbcHJvcF07XG5cbiAgICAgIGlmICh0eXBlb2YgY3VycmVudFByb3AgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHZhciByYXdWYWx1ZXMgPSBnZXRWYWx1ZXNGcm9tKGN1cnJlbnRQcm9wKTtcblxuICAgICAgICBtYW5pZmVzdEFjY3VtdWxhdG9yW3Byb3BdID0ge1xuICAgICAgICAgICdmb3JtYXRTdHJpbmcnOiBnZXRGb3JtYXRTdHJpbmdGcm9tKGN1cnJlbnRQcm9wKVxuICAgICAgICAgICwnY2h1bmtOYW1lcyc6IGdldEZvcm1hdENodW5rc0Zyb20ocmF3VmFsdWVzLCBwcm9wKVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1hbmlmZXN0QWNjdW11bGF0b3I7XG4gIH1cblxuICAvKiFcbiAgICogQHBhcmFtIHtPYmplY3R9IHN0YXRlT2JqZWN0XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBmb3JtYXRNYW5pZmVzdHNcbiAgICovXG4gIGZ1bmN0aW9uIGV4cGFuZEZvcm1hdHRlZFByb3BlcnRpZXMgKHN0YXRlT2JqZWN0LCBmb3JtYXRNYW5pZmVzdHMpIHtcbiAgICBUd2VlbmFibGUuZWFjaChmb3JtYXRNYW5pZmVzdHMsIGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICB2YXIgY3VycmVudFByb3AgPSBzdGF0ZU9iamVjdFtwcm9wXTtcbiAgICAgIHZhciByYXdWYWx1ZXMgPSBnZXRWYWx1ZXNGcm9tKGN1cnJlbnRQcm9wKTtcbiAgICAgIHZhciByYXdWYWx1ZXNMZW5ndGggPSByYXdWYWx1ZXMubGVuZ3RoO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJhd1ZhbHVlc0xlbmd0aDsgaSsrKSB7XG4gICAgICAgIHN0YXRlT2JqZWN0W2Zvcm1hdE1hbmlmZXN0c1twcm9wXS5jaHVua05hbWVzW2ldXSA9ICtyYXdWYWx1ZXNbaV07XG4gICAgICB9XG5cbiAgICAgIGRlbGV0ZSBzdGF0ZU9iamVjdFtwcm9wXTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qIVxuICAgKiBAcGFyYW0ge09iamVjdH0gc3RhdGVPYmplY3RcbiAgICogQHBhcmFtIHtPYmplY3R9IGZvcm1hdE1hbmlmZXN0c1xuICAgKi9cbiAgZnVuY3Rpb24gY29sbGFwc2VGb3JtYXR0ZWRQcm9wZXJ0aWVzIChzdGF0ZU9iamVjdCwgZm9ybWF0TWFuaWZlc3RzKSB7XG4gICAgVHdlZW5hYmxlLmVhY2goZm9ybWF0TWFuaWZlc3RzLCBmdW5jdGlvbiAocHJvcCkge1xuICAgICAgdmFyIGN1cnJlbnRQcm9wID0gc3RhdGVPYmplY3RbcHJvcF07XG4gICAgICB2YXIgZm9ybWF0Q2h1bmtzID0gZXh0cmFjdFByb3BlcnR5Q2h1bmtzKFxuICAgICAgICBzdGF0ZU9iamVjdCwgZm9ybWF0TWFuaWZlc3RzW3Byb3BdLmNodW5rTmFtZXMpO1xuICAgICAgdmFyIHZhbHVlc0xpc3QgPSBnZXRWYWx1ZXNMaXN0KFxuICAgICAgICBmb3JtYXRDaHVua3MsIGZvcm1hdE1hbmlmZXN0c1twcm9wXS5jaHVua05hbWVzKTtcbiAgICAgIGN1cnJlbnRQcm9wID0gZ2V0Rm9ybWF0dGVkVmFsdWVzKFxuICAgICAgICBmb3JtYXRNYW5pZmVzdHNbcHJvcF0uZm9ybWF0U3RyaW5nLCB2YWx1ZXNMaXN0KTtcbiAgICAgIHN0YXRlT2JqZWN0W3Byb3BdID0gc2FuaXRpemVSR0JDaHVua3MoY3VycmVudFByb3ApO1xuICAgIH0pO1xuICB9XG5cbiAgLyohXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZU9iamVjdFxuICAgKiBAcGFyYW0ge0FycmF5LjxzdHJpbmc+fSBjaHVua05hbWVzXG4gICAqXG4gICAqIEByZXR1cm4ge09iamVjdH0gVGhlIGV4dHJhY3RlZCB2YWx1ZSBjaHVua3MuXG4gICAqL1xuICBmdW5jdGlvbiBleHRyYWN0UHJvcGVydHlDaHVua3MgKHN0YXRlT2JqZWN0LCBjaHVua05hbWVzKSB7XG4gICAgdmFyIGV4dHJhY3RlZFZhbHVlcyA9IHt9O1xuICAgIHZhciBjdXJyZW50Q2h1bmtOYW1lLCBjaHVua05hbWVzTGVuZ3RoID0gY2h1bmtOYW1lcy5sZW5ndGg7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNodW5rTmFtZXNMZW5ndGg7IGkrKykge1xuICAgICAgY3VycmVudENodW5rTmFtZSA9IGNodW5rTmFtZXNbaV07XG4gICAgICBleHRyYWN0ZWRWYWx1ZXNbY3VycmVudENodW5rTmFtZV0gPSBzdGF0ZU9iamVjdFtjdXJyZW50Q2h1bmtOYW1lXTtcbiAgICAgIGRlbGV0ZSBzdGF0ZU9iamVjdFtjdXJyZW50Q2h1bmtOYW1lXTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXh0cmFjdGVkVmFsdWVzO1xuICB9XG5cbiAgdmFyIGdldFZhbHVlc0xpc3RfYWNjdW11bGF0b3IgPSBbXTtcbiAgLyohXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZU9iamVjdFxuICAgKiBAcGFyYW0ge0FycmF5LjxzdHJpbmc+fSBjaHVua05hbWVzXG4gICAqXG4gICAqIEByZXR1cm4ge0FycmF5LjxudW1iZXI+fVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0VmFsdWVzTGlzdCAoc3RhdGVPYmplY3QsIGNodW5rTmFtZXMpIHtcbiAgICBnZXRWYWx1ZXNMaXN0X2FjY3VtdWxhdG9yLmxlbmd0aCA9IDA7XG4gICAgdmFyIGNodW5rTmFtZXNMZW5ndGggPSBjaHVua05hbWVzLmxlbmd0aDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2h1bmtOYW1lc0xlbmd0aDsgaSsrKSB7XG4gICAgICBnZXRWYWx1ZXNMaXN0X2FjY3VtdWxhdG9yLnB1c2goc3RhdGVPYmplY3RbY2h1bmtOYW1lc1tpXV0pO1xuICAgIH1cblxuICAgIHJldHVybiBnZXRWYWx1ZXNMaXN0X2FjY3VtdWxhdG9yO1xuICB9XG5cbiAgLyohXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtYXRTdHJpbmdcbiAgICogQHBhcmFtIHtBcnJheS48bnVtYmVyPn0gcmF3VmFsdWVzXG4gICAqXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGZ1bmN0aW9uIGdldEZvcm1hdHRlZFZhbHVlcyAoZm9ybWF0U3RyaW5nLCByYXdWYWx1ZXMpIHtcbiAgICB2YXIgZm9ybWF0dGVkVmFsdWVTdHJpbmcgPSBmb3JtYXRTdHJpbmc7XG4gICAgdmFyIHJhd1ZhbHVlc0xlbmd0aCA9IHJhd1ZhbHVlcy5sZW5ndGg7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJhd1ZhbHVlc0xlbmd0aDsgaSsrKSB7XG4gICAgICBmb3JtYXR0ZWRWYWx1ZVN0cmluZyA9IGZvcm1hdHRlZFZhbHVlU3RyaW5nLnJlcGxhY2UoXG4gICAgICAgIFZBTFVFX1BMQUNFSE9MREVSLCArcmF3VmFsdWVzW2ldLnRvRml4ZWQoNCkpO1xuICAgIH1cblxuICAgIHJldHVybiBmb3JtYXR0ZWRWYWx1ZVN0cmluZztcbiAgfVxuXG4gIC8qIVxuICAgKiBOb3RlOiBJdCdzIHRoZSBkdXR5IG9mIHRoZSBjYWxsZXIgdG8gY29udmVydCB0aGUgQXJyYXkgZWxlbWVudHMgb2YgdGhlXG4gICAqIHJldHVybiB2YWx1ZSBpbnRvIG51bWJlcnMuICBUaGlzIGlzIGEgcGVyZm9ybWFuY2Ugb3B0aW1pemF0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZm9ybWF0dGVkU3RyaW5nXG4gICAqXG4gICAqIEByZXR1cm4ge0FycmF5LjxzdHJpbmc+fG51bGx9XG4gICAqL1xuICBmdW5jdGlvbiBnZXRWYWx1ZXNGcm9tIChmb3JtYXR0ZWRTdHJpbmcpIHtcbiAgICByZXR1cm4gZm9ybWF0dGVkU3RyaW5nLm1hdGNoKFJfVU5GT1JNQVRURURfVkFMVUVTKTtcbiAgfVxuXG4gIC8qIVxuICAgKiBAcGFyYW0ge09iamVjdH0gZWFzaW5nT2JqZWN0XG4gICAqIEBwYXJhbSB7T2JqZWN0fSB0b2tlbkRhdGFcbiAgICovXG4gIGZ1bmN0aW9uIGV4cGFuZEVhc2luZ09iamVjdCAoZWFzaW5nT2JqZWN0LCB0b2tlbkRhdGEpIHtcbiAgICBUd2VlbmFibGUuZWFjaCh0b2tlbkRhdGEsIGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICB2YXIgY3VycmVudFByb3AgPSB0b2tlbkRhdGFbcHJvcF07XG4gICAgICB2YXIgY2h1bmtOYW1lcyA9IGN1cnJlbnRQcm9wLmNodW5rTmFtZXM7XG4gICAgICB2YXIgY2h1bmtMZW5ndGggPSBjaHVua05hbWVzLmxlbmd0aDtcbiAgICAgIHZhciBlYXNpbmdDaHVua3MgPSBlYXNpbmdPYmplY3RbcHJvcF0uc3BsaXQoJyAnKTtcbiAgICAgIHZhciBsYXN0RWFzaW5nQ2h1bmsgPSBlYXNpbmdDaHVua3NbZWFzaW5nQ2h1bmtzLmxlbmd0aCAtIDFdO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNodW5rTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZWFzaW5nT2JqZWN0W2NodW5rTmFtZXNbaV1dID0gZWFzaW5nQ2h1bmtzW2ldIHx8IGxhc3RFYXNpbmdDaHVuaztcbiAgICAgIH1cblxuICAgICAgZGVsZXRlIGVhc2luZ09iamVjdFtwcm9wXTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qIVxuICAgKiBAcGFyYW0ge09iamVjdH0gZWFzaW5nT2JqZWN0XG4gICAqIEBwYXJhbSB7T2JqZWN0fSB0b2tlbkRhdGFcbiAgICovXG4gIGZ1bmN0aW9uIGNvbGxhcHNlRWFzaW5nT2JqZWN0IChlYXNpbmdPYmplY3QsIHRva2VuRGF0YSkge1xuICAgIFR3ZWVuYWJsZS5lYWNoKHRva2VuRGF0YSwgZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgIHZhciBjdXJyZW50UHJvcCA9IHRva2VuRGF0YVtwcm9wXTtcbiAgICAgIHZhciBjaHVua05hbWVzID0gY3VycmVudFByb3AuY2h1bmtOYW1lcztcbiAgICAgIHZhciBjaHVua0xlbmd0aCA9IGNodW5rTmFtZXMubGVuZ3RoO1xuICAgICAgdmFyIGNvbXBvc2VkRWFzaW5nU3RyaW5nID0gJyc7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2h1bmtMZW5ndGg7IGkrKykge1xuICAgICAgICBjb21wb3NlZEVhc2luZ1N0cmluZyArPSAnICcgKyBlYXNpbmdPYmplY3RbY2h1bmtOYW1lc1tpXV07XG4gICAgICAgIGRlbGV0ZSBlYXNpbmdPYmplY3RbY2h1bmtOYW1lc1tpXV07XG4gICAgICB9XG5cbiAgICAgIGVhc2luZ09iamVjdFtwcm9wXSA9IGNvbXBvc2VkRWFzaW5nU3RyaW5nLnN1YnN0cigxKTtcbiAgICB9KTtcbiAgfVxuXG4gIFR3ZWVuYWJsZS5wcm90b3R5cGUuZmlsdGVyLnRva2VuID0ge1xuICAgICd0d2VlbkNyZWF0ZWQnOiBmdW5jdGlvbiAoY3VycmVudFN0YXRlLCBmcm9tU3RhdGUsIHRvU3RhdGUsIGVhc2luZ09iamVjdCkge1xuICAgICAgc2FuaXRpemVPYmplY3RGb3JIZXhQcm9wcyhjdXJyZW50U3RhdGUpO1xuICAgICAgc2FuaXRpemVPYmplY3RGb3JIZXhQcm9wcyhmcm9tU3RhdGUpO1xuICAgICAgc2FuaXRpemVPYmplY3RGb3JIZXhQcm9wcyh0b1N0YXRlKTtcbiAgICAgIHRoaXMuX3Rva2VuRGF0YSA9IGdldEZvcm1hdE1hbmlmZXN0cyhjdXJyZW50U3RhdGUpO1xuICAgIH0sXG5cbiAgICAnYmVmb3JlVHdlZW4nOiBmdW5jdGlvbiAoY3VycmVudFN0YXRlLCBmcm9tU3RhdGUsIHRvU3RhdGUsIGVhc2luZ09iamVjdCkge1xuICAgICAgZXhwYW5kRWFzaW5nT2JqZWN0KGVhc2luZ09iamVjdCwgdGhpcy5fdG9rZW5EYXRhKTtcbiAgICAgIGV4cGFuZEZvcm1hdHRlZFByb3BlcnRpZXMoY3VycmVudFN0YXRlLCB0aGlzLl90b2tlbkRhdGEpO1xuICAgICAgZXhwYW5kRm9ybWF0dGVkUHJvcGVydGllcyhmcm9tU3RhdGUsIHRoaXMuX3Rva2VuRGF0YSk7XG4gICAgICBleHBhbmRGb3JtYXR0ZWRQcm9wZXJ0aWVzKHRvU3RhdGUsIHRoaXMuX3Rva2VuRGF0YSk7XG4gICAgfSxcblxuICAgICdhZnRlclR3ZWVuJzogZnVuY3Rpb24gKGN1cnJlbnRTdGF0ZSwgZnJvbVN0YXRlLCB0b1N0YXRlLCBlYXNpbmdPYmplY3QpIHtcbiAgICAgIGNvbGxhcHNlRm9ybWF0dGVkUHJvcGVydGllcyhjdXJyZW50U3RhdGUsIHRoaXMuX3Rva2VuRGF0YSk7XG4gICAgICBjb2xsYXBzZUZvcm1hdHRlZFByb3BlcnRpZXMoZnJvbVN0YXRlLCB0aGlzLl90b2tlbkRhdGEpO1xuICAgICAgY29sbGFwc2VGb3JtYXR0ZWRQcm9wZXJ0aWVzKHRvU3RhdGUsIHRoaXMuX3Rva2VuRGF0YSk7XG4gICAgICBjb2xsYXBzZUVhc2luZ09iamVjdChlYXNpbmdPYmplY3QsIHRoaXMuX3Rva2VuRGF0YSk7XG4gICAgfVxuICB9O1xuXG59IChUd2VlbmFibGUpKTtcblxufSh0aGlzKSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWthcGkvfi9zaGlmdHkvZGlzdC9zaGlmdHkuanNcbiAqKiBtb2R1bGUgaWQgPSAxNjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyJdLCJzb3VyY2VSb290IjoiIiwiZmlsZSI6ImRlbW8uanMifQ==
webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(5);
	var PureRenderMixin = __webpack_require__(3).addons.PureRenderMixin;
	
	var _require = __webpack_require__(2);
	
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
	            centerCenter: { marginLeft: "0px", opacity: 1, ease: "easeOutElastic" }
	          } },
	        "move"
	      ),
	      React.createElement(SparkProxy, { proxyId: "rotate-proxy" }),
	      React.createElement(
	        SparkScroll.h2,
	        {
	          proxy: "rotate-proxy",
	          timeline: {
	            topBottom: { rotation: "0" },
	            topCenter: { rotation: "360" }
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
	            "topCenter+70": { scale: 1, ease: "easeOutBounce" }
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
	                "topTop+400": { bottom: ["0%", "easeOutBounce"], backgroundColor: "#284907" },
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

/***/ 2:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = __webpack_require__(7)({
	  invalidateAutomatically: true
	
	  // we could add additional options in here...
	
	  // setup: {...}
	  // formulas: {...}
	  // actionProps: {...}
	});

/***/ },

/***/ 7:
/***/ function(module, exports, __webpack_require__) {

	// we're just loading in the whole shebang here (aka TweenMax)
	// because it's the simplest thing to do, but all that's really needed
	// is: TweenLite.js, CSSPlugin, TimelineLite
	//
	// Copy this file to create your own spark-scroll-gsap.js if you want to
	// load in a subset of TweenMax
	"use strict";
	
	__webpack_require__(46);
	
	var assign = __webpack_require__(23);
	var _factory = __webpack_require__(11);
	var GSAPAnimator = __webpack_require__(10);
	
	function factory(options) {
	  return _factory(assign({
	    animator: {
	      instance: function () {
	        return new GSAPAnimator();
	      }
	    }
	  }, options));
	}
	
	module.exports = factory;

/***/ },

/***/ 10:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	// Minimum required to already be loaded in:
	// TweenLite.js,CSSPlugin,TimelineLite
	// (TweenMax loads all these and more)
	
	var _ = __webpack_require__(123);
	
	var Actor = (function () {
	  function Actor(tl, context) {
	    _classCallCheck(this, Actor);
	
	    _get(Object.getPrototypeOf(Actor.prototype), "constructor", this).call(this);
	    this.tl = tl;
	    this.context = context;
	    this.frames = [];
	    this.frameHash = {};
	    this.normalizedFrames = [];
	  }
	
	  _createClass(Actor, {
	    normalizeFrames: {
	      value: function normalizeFrames() {
	        this.normalizedFrames = _.sortBy(_.cloneDeep(this.frames), "scrollY");
	
	        _.forEach(this.normalizedFrames, function (frame, index, arr) {
	          return index && _.defaults(frame.anims, arr[index - 1].anims);
	        });
	      }
	    },
	    keyframe: {
	      value: function keyframe(scrollY, anims, ease) {
	        var frame = { scrollY: scrollY, anims: anims, ease: ease };
	
	        this.frames.push(frame);
	        this.frameHash[scrollY] = frame;
	      }
	    },
	    buildTimeline: {
	      value: function buildTimeline() {
	        var _this = this;
	
	        this.tl.clear();
	        _.forEach(this.normalizedFrames, function (frame, index, arr) {
	          if (index) {
	            var prevFrame = arr[index - 1];
	
	            // for easing, instead of this:
	            // @tl.fromTo(@context, frame.scrollY - prevFrame.scrollY, prevFrame.anims, frame.anims, prevFrame.scrollY)//
	            // ...do this:
	            // creating a new fromTo for each property to support per-property easing
	            // this seems pretty inefficient
	            var duration = frame.scrollY - prevFrame.scrollY;
	            for (var k in frame.anims) {
	              var v = frame.anims[k];
	              var a = {},
	                  pa = {};
	              a[k] = v;
	              a.ease = frame.ease[k];
	              pa[k] = prevFrame.anims[k];
	              _this.tl.fromTo(_this.context, duration, pa, a, prevFrame.scrollY);
	              _this.tl.pause();
	            }
	          }
	        });
	      }
	    },
	    finishedAddingKeyframes: {
	      value: function finishedAddingKeyframes() {
	        this.normalizeFrames();
	        this.buildTimeline();
	      }
	    },
	    moveKeyframe: {
	      value: function moveKeyframe(oldPos, newPos) {
	        var frame = this.frameHash[oldPos];
	        this.frameHash[newPos] = frame;
	        frame.scrollY = newPos;
	        delete this.frameHash[oldPos];
	        this.normalizeFrames();
	        this.buildTimeline();
	      }
	    },
	    removeAllKeyframes: {
	      value: function removeAllKeyframes() {
	        this.tl.clear();
	        this.frames = [];
	      }
	    }
	  });
	
	  return Actor;
	})();
	
	var GSAPAnimator = (function () {
	  function GSAPAnimator() {
	    _classCallCheck(this, GSAPAnimator);
	
	    _get(Object.getPrototypeOf(GSAPAnimator.prototype), "constructor", this).call(this);
	    this.tl = new TimelineLite({ useFrames: true });
	  }
	
	  _createClass(GSAPAnimator, {
	    addActor: {
	      value: function addActor(options) {
	        return new Actor(this.tl, options.context);
	      }
	    },
	    update: {
	      value: function update(pos) {
	        if (pos >= 0) this.tl.seek(pos, false); // it balks at negative pos values
	      }
	    }
	  });
	
	  return GSAPAnimator;
	})();
	
	module.exports = GSAPAnimator;

/***/ },

/***/ 46:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {/*!
	 * VERSION: 1.16.1
	 * DATE: 2015-03-13
	 * UPDATES AND DOCS AT: http://greensock.com
	 * 
	 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
	 *
	 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
	 * This work is subject to the terms at http://greensock.com/standard-license or for
	 * Club GreenSock members, the software agreement that was issued with your membership.
	 * 
	 * @author: Jack Doyle, jack@greensock.com
	 **/
	var _gsScope = (typeof(module) !== "undefined" && module.exports && typeof(global) !== "undefined") ? global : this || window; //helps ensure compatibility with AMD/RequireJS and CommonJS/Node
	(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push( function() {
	
		"use strict";
	
		_gsScope._gsDefine("TweenMax", ["core.Animation","core.SimpleTimeline","TweenLite"], function(Animation, SimpleTimeline, TweenLite) {
	
			var _slice = function(a) { //don't use [].slice because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
					var b = [],
						l = a.length,
						i;
					for (i = 0; i !== l; b.push(a[i++]));
					return b;
				},
				TweenMax = function(target, duration, vars) {
					TweenLite.call(this, target, duration, vars);
					this._cycle = 0;
					this._yoyo = (this.vars.yoyo === true);
					this._repeat = this.vars.repeat || 0;
					this._repeatDelay = this.vars.repeatDelay || 0;
					this._dirty = true; //ensures that if there is any repeat, the totalDuration will get recalculated to accurately report it.
					this.render = TweenMax.prototype.render; //speed optimization (avoid prototype lookup on this "hot" method)
				},
				_tinyNum = 0.0000000001,
				TweenLiteInternals = TweenLite._internals,
				_isSelector = TweenLiteInternals.isSelector,
				_isArray = TweenLiteInternals.isArray,
				p = TweenMax.prototype = TweenLite.to({}, 0.1, {}),
				_blankArray = [];
	
			TweenMax.version = "1.16.1";
			p.constructor = TweenMax;
			p.kill()._gc = false;
			TweenMax.killTweensOf = TweenMax.killDelayedCallsTo = TweenLite.killTweensOf;
			TweenMax.getTweensOf = TweenLite.getTweensOf;
			TweenMax.lagSmoothing = TweenLite.lagSmoothing;
			TweenMax.ticker = TweenLite.ticker;
			TweenMax.render = TweenLite.render;
	
			p.invalidate = function() {
				this._yoyo = (this.vars.yoyo === true);
				this._repeat = this.vars.repeat || 0;
				this._repeatDelay = this.vars.repeatDelay || 0;
				this._uncache(true);
				return TweenLite.prototype.invalidate.call(this);
			};
			
			p.updateTo = function(vars, resetDuration) {
				var curRatio = this.ratio,
					immediate = this.vars.immediateRender || vars.immediateRender,
					p;
				if (resetDuration && this._startTime < this._timeline._time) {
					this._startTime = this._timeline._time;
					this._uncache(false);
					if (this._gc) {
						this._enabled(true, false);
					} else {
						this._timeline.insert(this, this._startTime - this._delay); //ensures that any necessary re-sequencing of Animations in the timeline occurs to make sure the rendering order is correct.
					}
				}
				for (p in vars) {
					this.vars[p] = vars[p];
				}
				if (this._initted || immediate) {
					if (resetDuration) {
						this._initted = false;
						if (immediate) {
							this.render(0, true, true);
						}
					} else {
						if (this._gc) {
							this._enabled(true, false);
						}
						if (this._notifyPluginsOfEnabled && this._firstPT) {
							TweenLite._onPluginEvent("_onDisable", this); //in case a plugin like MotionBlur must perform some cleanup tasks
						}
						if (this._time / this._duration > 0.998) { //if the tween has finished (or come extremely close to finishing), we just need to rewind it to 0 and then render it again at the end which forces it to re-initialize (parsing the new vars). We allow tweens that are close to finishing (but haven't quite finished) to work this way too because otherwise, the values are so small when determining where to project the starting values that binary math issues creep in and can make the tween appear to render incorrectly when run backwards. 
							var prevTime = this._time;
							this.render(0, true, false);
							this._initted = false;
							this.render(prevTime, true, false);
						} else if (this._time > 0 || immediate) {
							this._initted = false;
							this._init();
							var inv = 1 / (1 - curRatio),
								pt = this._firstPT, endValue;
							while (pt) {
								endValue = pt.s + pt.c; 
								pt.c *= inv;
								pt.s = endValue - pt.c;
								pt = pt._next;
							}
						}
					}
				}
				return this;
			};
					
			p.render = function(time, suppressEvents, force) {
				if (!this._initted) if (this._duration === 0 && this.vars.repeat) { //zero duration tweens that render immediately have render() called from TweenLite's constructor, before TweenMax's constructor has finished setting _repeat, _repeatDelay, and _yoyo which are critical in determining totalDuration() so we need to call invalidate() which is a low-kb way to get those set properly.
					this.invalidate();
				}
				var totalDur = (!this._dirty) ? this._totalDuration : this.totalDuration(),
					prevTime = this._time,
					prevTotalTime = this._totalTime, 
					prevCycle = this._cycle,
					duration = this._duration,
					prevRawPrevTime = this._rawPrevTime,
					isComplete, callback, pt, cycleDuration, r, type, pow, rawPrevTime;
				if (time >= totalDur) {
					this._totalTime = totalDur;
					this._cycle = this._repeat;
					if (this._yoyo && (this._cycle & 1) !== 0) {
						this._time = 0;
						this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;
					} else {
						this._time = duration;
						this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1;
					}
					if (!this._reversed) {
						isComplete = true;
						callback = "onComplete";
						force = (force || this._timeline.autoRemoveChildren); //otherwise, if the animation is unpaused/activated after it's already finished, it doesn't get removed from the parent timeline.
					}
					if (duration === 0) if (this._initted || !this.vars.lazy || force) { //zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
						if (this._startTime === this._timeline._duration) { //if a zero-duration tween is at the VERY end of a timeline and that timeline renders at its end, it will typically add a tiny bit of cushion to the render time to prevent rounding errors from getting in the way of tweens rendering their VERY end. If we then reverse() that timeline, the zero-duration tween will trigger its onReverseComplete even though technically the playhead didn't pass over it again. It's a very specific edge case we must accommodate.
							time = 0;
						}
						if (time === 0 || prevRawPrevTime < 0 || prevRawPrevTime === _tinyNum) if (prevRawPrevTime !== time) {
							force = true;
							if (prevRawPrevTime > _tinyNum) {
								callback = "onReverseComplete";
							}
						}
						this._rawPrevTime = rawPrevTime = (!suppressEvents || time || prevRawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
					}
					
				} else if (time < 0.0000001) { //to work around occasional floating point math artifacts, round super small values to 0.
					this._totalTime = this._time = this._cycle = 0;
					this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;
					if (prevTotalTime !== 0 || (duration === 0 && prevRawPrevTime > 0)) {
						callback = "onReverseComplete";
						isComplete = this._reversed;
					}
					if (time < 0) {
						this._active = false;
						if (duration === 0) if (this._initted || !this.vars.lazy || force) { //zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
							if (prevRawPrevTime >= 0) {
								force = true;
							}
							this._rawPrevTime = rawPrevTime = (!suppressEvents || time || prevRawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
						}
					}
					if (!this._initted) { //if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately.
						force = true;
					}
				} else {
					this._totalTime = this._time = time;
					
					if (this._repeat !== 0) {
						cycleDuration = duration + this._repeatDelay;
						this._cycle = (this._totalTime / cycleDuration) >> 0; //originally _totalTime % cycleDuration but floating point errors caused problems, so I normalized it. (4 % 0.8 should be 0 but Flash reports it as 0.79999999!)
						if (this._cycle !== 0) if (this._cycle === this._totalTime / cycleDuration) {
							this._cycle--; //otherwise when rendered exactly at the end time, it will act as though it is repeating (at the beginning)
						}
						this._time = this._totalTime - (this._cycle * cycleDuration);
						if (this._yoyo) if ((this._cycle & 1) !== 0) {
							this._time = duration - this._time;
						}
						if (this._time > duration) {
							this._time = duration;
						} else if (this._time < 0) {
							this._time = 0;
						}
					}
	
					if (this._easeType) {
						r = this._time / duration;
						type = this._easeType;
						pow = this._easePower;
						if (type === 1 || (type === 3 && r >= 0.5)) {
							r = 1 - r;
						}
						if (type === 3) {
							r *= 2;
						}
						if (pow === 1) {
							r *= r;
						} else if (pow === 2) {
							r *= r * r;
						} else if (pow === 3) {
							r *= r * r * r;
						} else if (pow === 4) {
							r *= r * r * r * r;
						}
	
						if (type === 1) {
							this.ratio = 1 - r;
						} else if (type === 2) {
							this.ratio = r;
						} else if (this._time / duration < 0.5) {
							this.ratio = r / 2;
						} else {
							this.ratio = 1 - (r / 2);
						}
	
					} else {
						this.ratio = this._ease.getRatio(this._time / duration);
					}
					
				}
					
				if (prevTime === this._time && !force && prevCycle === this._cycle) {
					if (prevTotalTime !== this._totalTime) if (this._onUpdate) if (!suppressEvents) { //so that onUpdate fires even during the repeatDelay - as long as the totalTime changed, we should trigger onUpdate.
						this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || _blankArray);
					}
					return;
				} else if (!this._initted) {
					this._init();
					if (!this._initted || this._gc) { //immediateRender tweens typically won't initialize until the playhead advances (_time is greater than 0) in order to ensure that overwriting occurs properly. Also, if all of the tweening properties have been overwritten (which would cause _gc to be true, as set in _init()), we shouldn't continue otherwise an onStart callback could be called for example.
						return;
					} else if (!force && this._firstPT && ((this.vars.lazy !== false && this._duration) || (this.vars.lazy && !this._duration))) { //we stick it in the queue for rendering at the very end of the tick - this is a performance optimization because browsers invalidate styles and force a recalculation if you read, write, and then read style data (so it's better to read/read/read/write/write/write than read/write/read/write/read/write). The down side, of course, is that usually you WANT things to render immediately because you may have code running right after that which depends on the change. Like imagine running TweenLite.set(...) and then immediately after that, creating a nother tween that animates the same property to another value; the starting values of that 2nd tween wouldn't be accurate if lazy is true.
						this._time = prevTime;
						this._totalTime = prevTotalTime;
						this._rawPrevTime = prevRawPrevTime;
						this._cycle = prevCycle;
						TweenLiteInternals.lazyTweens.push(this);
						this._lazy = [time, suppressEvents];
						return;
					}
					//_ease is initially set to defaultEase, so now that init() has run, _ease is set properly and we need to recalculate the ratio. Overall this is faster than using conditional logic earlier in the method to avoid having to set ratio twice because we only init() once but renderTime() gets called VERY frequently.
					if (this._time && !isComplete) {
						this.ratio = this._ease.getRatio(this._time / duration);
					} else if (isComplete && this._ease._calcEnd) {
						this.ratio = this._ease.getRatio((this._time === 0) ? 0 : 1);
					}
				}
				if (this._lazy !== false) {
					this._lazy = false;
				}
	
				if (!this._active) if (!this._paused && this._time !== prevTime && time >= 0) {
					this._active = true; //so that if the user renders a tween (as opposed to the timeline rendering it), the timeline is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the tween already finished but the user manually re-renders it as halfway done.
				}
				if (prevTotalTime === 0) {
					if (this._initted === 2 && time > 0) {
						//this.invalidate();
						this._init(); //will just apply overwriting since _initted of (2) means it was a from() tween that had immediateRender:true
					}
					if (this._startAt) {
						if (time >= 0) {
							this._startAt.render(time, suppressEvents, force);
						} else if (!callback) {
							callback = "_dummyGS"; //if no callback is defined, use a dummy value just so that the condition at the end evaluates as true because _startAt should render AFTER the normal render loop when the time is negative. We could handle this in a more intuitive way, of course, but the render loop is the MOST important thing to optimize, so this technique allows us to avoid adding extra conditional logic in a high-frequency area.
						}
					}
					if (this.vars.onStart) if (this._totalTime !== 0 || duration === 0) if (!suppressEvents) {
						this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || _blankArray);
					}
				}
				
				pt = this._firstPT;
				while (pt) {
					if (pt.f) {
						pt.t[pt.p](pt.c * this.ratio + pt.s);
					} else {
						pt.t[pt.p] = pt.c * this.ratio + pt.s;
					}
					pt = pt._next;
				}
				
				if (this._onUpdate) {
					if (time < 0) if (this._startAt && this._startTime) { //if the tween is positioned at the VERY beginning (_startTime 0) of its parent timeline, it's illegal for the playhead to go back further, so we should not render the recorded startAt values.
						this._startAt.render(time, suppressEvents, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.
					}
					if (!suppressEvents) if (this._totalTime !== prevTotalTime || isComplete) {
						this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || _blankArray);
					}
				}
				if (this._cycle !== prevCycle) if (!suppressEvents) if (!this._gc) if (this.vars.onRepeat) {
					this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || _blankArray);
				}
				if (callback) if (!this._gc || force) { //check gc because there's a chance that kill() could be called in an onUpdate
					if (time < 0 && this._startAt && !this._onUpdate && this._startTime) { //if the tween is positioned at the VERY beginning (_startTime 0) of its parent timeline, it's illegal for the playhead to go back further, so we should not render the recorded startAt values.
						this._startAt.render(time, suppressEvents, force);
					}
					if (isComplete) {
						if (this._timeline.autoRemoveChildren) {
							this._enabled(false, false);
						}
						this._active = false;
					}
					if (!suppressEvents && this.vars[callback]) {
						this.vars[callback].apply(this.vars[callback + "Scope"] || this, this.vars[callback + "Params"] || _blankArray);
					}
					if (duration === 0 && this._rawPrevTime === _tinyNum && rawPrevTime !== _tinyNum) { //the onComplete or onReverseComplete could trigger movement of the playhead and for zero-duration tweens (which must discern direction) that land directly back on their start time, we don't want to fire again on the next render. Think of several addPause()'s in a timeline that forces the playhead to a certain spot, but what if it's already paused and another tween is tweening the "time" of the timeline? Each time it moves [forward] past that spot, it would move back, and since suppressEvents is true, it'd reset _rawPrevTime to _tinyNum so that when it begins again, the callback would fire (so ultimately it could bounce back and forth during that tween). Again, this is a very uncommon scenario, but possible nonetheless.
						this._rawPrevTime = 0;
					}
				}
			};
			
	//---- STATIC FUNCTIONS -----------------------------------------------------------------------------------------------------------
			
			TweenMax.to = function(target, duration, vars) {
				return new TweenMax(target, duration, vars);
			};
			
			TweenMax.from = function(target, duration, vars) {
				vars.runBackwards = true;
				vars.immediateRender = (vars.immediateRender != false);
				return new TweenMax(target, duration, vars);
			};
			
			TweenMax.fromTo = function(target, duration, fromVars, toVars) {
				toVars.startAt = fromVars;
				toVars.immediateRender = (toVars.immediateRender != false && fromVars.immediateRender != false);
				return new TweenMax(target, duration, toVars);
			};
			
			TweenMax.staggerTo = TweenMax.allTo = function(targets, duration, vars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
				stagger = stagger || 0;
				var delay = vars.delay || 0,
					a = [],
					finalComplete = function() {
						if (vars.onComplete) {
							vars.onComplete.apply(vars.onCompleteScope || this, arguments);
						}
						onCompleteAll.apply(onCompleteAllScope || this, onCompleteAllParams || _blankArray);
					},
					l, copy, i, p;
				if (!_isArray(targets)) {
					if (typeof(targets) === "string") {
						targets = TweenLite.selector(targets) || targets;
					}
					if (_isSelector(targets)) {
						targets = _slice(targets);
					}
				}
				targets = targets || [];
				if (stagger < 0) {
					targets = _slice(targets);
					targets.reverse();
					stagger *= -1;
				}
				l = targets.length - 1;
				for (i = 0; i <= l; i++) {
					copy = {};
					for (p in vars) {
						copy[p] = vars[p];
					}
					copy.delay = delay;
					if (i === l && onCompleteAll) {
						copy.onComplete = finalComplete;
					}
					a[i] = new TweenMax(targets[i], duration, copy);
					delay += stagger;
				}
				return a;
			};
			
			TweenMax.staggerFrom = TweenMax.allFrom = function(targets, duration, vars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
				vars.runBackwards = true;
				vars.immediateRender = (vars.immediateRender != false);
				return TweenMax.staggerTo(targets, duration, vars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
			};
			
			TweenMax.staggerFromTo = TweenMax.allFromTo = function(targets, duration, fromVars, toVars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
				toVars.startAt = fromVars;
				toVars.immediateRender = (toVars.immediateRender != false && fromVars.immediateRender != false);
				return TweenMax.staggerTo(targets, duration, toVars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
			};
					
			TweenMax.delayedCall = function(delay, callback, params, scope, useFrames) {
				return new TweenMax(callback, 0, {delay:delay, onComplete:callback, onCompleteParams:params, onCompleteScope:scope, onReverseComplete:callback, onReverseCompleteParams:params, onReverseCompleteScope:scope, immediateRender:false, useFrames:useFrames, overwrite:0});
			};
			
			TweenMax.set = function(target, vars) {
				return new TweenMax(target, 0, vars);
			};
			
			TweenMax.isTweening = function(target) {
				return (TweenLite.getTweensOf(target, true).length > 0);
			};
			
			var _getChildrenOf = function(timeline, includeTimelines) {
					var a = [],
						cnt = 0,
						tween = timeline._first;
					while (tween) {
						if (tween instanceof TweenLite) {
							a[cnt++] = tween;
						} else {
							if (includeTimelines) {
								a[cnt++] = tween;
							}
							a = a.concat(_getChildrenOf(tween, includeTimelines));
							cnt = a.length;
						}
						tween = tween._next;
					}
					return a;
				}, 
				getAllTweens = TweenMax.getAllTweens = function(includeTimelines) {
					return _getChildrenOf(Animation._rootTimeline, includeTimelines).concat( _getChildrenOf(Animation._rootFramesTimeline, includeTimelines) );
				};
			
			TweenMax.killAll = function(complete, tweens, delayedCalls, timelines) {
				if (tweens == null) {
					tweens = true;
				}
				if (delayedCalls == null) {
					delayedCalls = true;
				}
				var a = getAllTweens((timelines != false)),
					l = a.length,
					allTrue = (tweens && delayedCalls && timelines),
					isDC, tween, i;
				for (i = 0; i < l; i++) {
					tween = a[i];
					if (allTrue || (tween instanceof SimpleTimeline) || ((isDC = (tween.target === tween.vars.onComplete)) && delayedCalls) || (tweens && !isDC)) {
						if (complete) {
							tween.totalTime(tween._reversed ? 0 : tween.totalDuration());
						} else {
							tween._enabled(false, false);
						}
					}
				}
			};
			
			TweenMax.killChildTweensOf = function(parent, complete) {
				if (parent == null) {
					return;
				}
				var tl = TweenLiteInternals.tweenLookup,
					a, curParent, p, i, l;
				if (typeof(parent) === "string") {
					parent = TweenLite.selector(parent) || parent;
				}
				if (_isSelector(parent)) {
					parent = _slice(parent);
				}
				if (_isArray(parent)) {
					i = parent.length;
					while (--i > -1) {
						TweenMax.killChildTweensOf(parent[i], complete);
					}
					return;
				}
				a = [];
				for (p in tl) {
					curParent = tl[p].target.parentNode;
					while (curParent) {
						if (curParent === parent) {
							a = a.concat(tl[p].tweens);
						}
						curParent = curParent.parentNode;
					}
				}
				l = a.length;
				for (i = 0; i < l; i++) {
					if (complete) {
						a[i].totalTime(a[i].totalDuration());
					}
					a[i]._enabled(false, false);
				}
			};
	
			var _changePause = function(pause, tweens, delayedCalls, timelines) {
				tweens = (tweens !== false);
				delayedCalls = (delayedCalls !== false);
				timelines = (timelines !== false);
				var a = getAllTweens(timelines),
					allTrue = (tweens && delayedCalls && timelines),
					i = a.length,
					isDC, tween;
				while (--i > -1) {
					tween = a[i];
					if (allTrue || (tween instanceof SimpleTimeline) || ((isDC = (tween.target === tween.vars.onComplete)) && delayedCalls) || (tweens && !isDC)) {
						tween.paused(pause);
					}
				}
			};
			
			TweenMax.pauseAll = function(tweens, delayedCalls, timelines) {
				_changePause(true, tweens, delayedCalls, timelines);
			};
			
			TweenMax.resumeAll = function(tweens, delayedCalls, timelines) {
				_changePause(false, tweens, delayedCalls, timelines);
			};
	
			TweenMax.globalTimeScale = function(value) {
				var tl = Animation._rootTimeline,
					t = TweenLite.ticker.time;
				if (!arguments.length) {
					return tl._timeScale;
				}
				value = value || _tinyNum; //can't allow zero because it'll throw the math off
				tl._startTime = t - ((t - tl._startTime) * tl._timeScale / value);
				tl = Animation._rootFramesTimeline;
				t = TweenLite.ticker.frame;
				tl._startTime = t - ((t - tl._startTime) * tl._timeScale / value);
				tl._timeScale = Animation._rootTimeline._timeScale = value;
				return value;
			};
			
		
	//---- GETTERS / SETTERS ----------------------------------------------------------------------------------------------------------
			
			p.progress = function(value) {
				return (!arguments.length) ? this._time / this.duration() : this.totalTime( this.duration() * ((this._yoyo && (this._cycle & 1) !== 0) ? 1 - value : value) + (this._cycle * (this._duration + this._repeatDelay)), false);
			};
			
			p.totalProgress = function(value) {
				return (!arguments.length) ? this._totalTime / this.totalDuration() : this.totalTime( this.totalDuration() * value, false);
			};
			
			p.time = function(value, suppressEvents) {
				if (!arguments.length) {
					return this._time;
				}
				if (this._dirty) {
					this.totalDuration();
				}
				if (value > this._duration) {
					value = this._duration;
				}
				if (this._yoyo && (this._cycle & 1) !== 0) {
					value = (this._duration - value) + (this._cycle * (this._duration + this._repeatDelay));
				} else if (this._repeat !== 0) {
					value += this._cycle * (this._duration + this._repeatDelay);
				}
				return this.totalTime(value, suppressEvents);
			};
	
			p.duration = function(value) {
				if (!arguments.length) {
					return this._duration; //don't set _dirty = false because there could be repeats that haven't been factored into the _totalDuration yet. Otherwise, if you create a repeated TweenMax and then immediately check its duration(), it would cache the value and the totalDuration would not be correct, thus repeats wouldn't take effect.
				}
				return Animation.prototype.duration.call(this, value);
			};
	
			p.totalDuration = function(value) {
				if (!arguments.length) {
					if (this._dirty) {
						//instead of Infinity, we use 999999999999 so that we can accommodate reverses
						this._totalDuration = (this._repeat === -1) ? 999999999999 : this._duration * (this._repeat + 1) + (this._repeatDelay * this._repeat);
						this._dirty = false;
					}
					return this._totalDuration;
				}
				return (this._repeat === -1) ? this : this.duration( (value - (this._repeat * this._repeatDelay)) / (this._repeat + 1) );
			};
			
			p.repeat = function(value) {
				if (!arguments.length) {
					return this._repeat;
				}
				this._repeat = value;
				return this._uncache(true);
			};
			
			p.repeatDelay = function(value) {
				if (!arguments.length) {
					return this._repeatDelay;
				}
				this._repeatDelay = value;
				return this._uncache(true);
			};
			
			p.yoyo = function(value) {
				if (!arguments.length) {
					return this._yoyo;
				}
				this._yoyo = value;
				return this;
			};
			
			
			return TweenMax;
			
		}, true);
	
	
	
	
	
	
	
	
	/*
	 * ----------------------------------------------------------------
	 * TimelineLite
	 * ----------------------------------------------------------------
	 */
		_gsScope._gsDefine("TimelineLite", ["core.Animation","core.SimpleTimeline","TweenLite"], function(Animation, SimpleTimeline, TweenLite) {
	
			var TimelineLite = function(vars) {
					SimpleTimeline.call(this, vars);
					this._labels = {};
					this.autoRemoveChildren = (this.vars.autoRemoveChildren === true);
					this.smoothChildTiming = (this.vars.smoothChildTiming === true);
					this._sortChildren = true;
					this._onUpdate = this.vars.onUpdate;
					var v = this.vars,
						val, p;
					for (p in v) {
						val = v[p];
						if (_isArray(val)) if (val.join("").indexOf("{self}") !== -1) {
							v[p] = this._swapSelfInParams(val);
						}
					}
					if (_isArray(v.tweens)) {
						this.add(v.tweens, 0, v.align, v.stagger);
					}
				},
				_tinyNum = 0.0000000001,
				TweenLiteInternals = TweenLite._internals,
				_internals = TimelineLite._internals = {},
				_isSelector = TweenLiteInternals.isSelector,
				_isArray = TweenLiteInternals.isArray,
				_lazyTweens = TweenLiteInternals.lazyTweens,
				_lazyRender = TweenLiteInternals.lazyRender,
				_blankArray = [],
				_globals = _gsScope._gsDefine.globals,
				_copy = function(vars) {
					var copy = {}, p;
					for (p in vars) {
						copy[p] = vars[p];
					}
					return copy;
				},
				_pauseCallback = _internals.pauseCallback = function(tween, callback, params, scope) {
					var tl = tween._timeline,
						time = tl._totalTime,
						startTime = tween._startTime,
						reversed = (tween._rawPrevTime < 0 || (tween._rawPrevTime === 0 && tl._reversed)),//don't use tween.ratio because if the playhead lands exactly on top of the addPause(), ratio will be 1 even if the master timeline was reversed (which is correct). The key here is to sense the direction of the playhead.
						next = reversed ? 0 : _tinyNum,
						prev = reversed ? _tinyNum : 0,
						sibling;
					if (callback || !this._forcingPlayhead) { //if the user calls a method that moves the playhead (like progress() or time()), it should honor that and skip any pauses (although if there's a callback positioned at that pause, it must jump there and make the call to ensure the time is EXACTLY what it is supposed to be, and then proceed to where the playhead is being forced). Otherwise, imagine placing a pause in the middle of a timeline and then doing timeline.progress(0.9) - it would get stuck where the pause is.
						tl.pause(startTime);
						//now find sibling tweens that are EXACTLY at the same spot on the timeline and adjust the _rawPrevTime so that they fire (or don't fire) correctly on the next render. This is primarily to accommodate zero-duration tweens/callbacks that are positioned right on top of a pause. For example, tl.to(...).call(...).addPause(...).call(...) - notice that there's a call() on each side of the pause, so when it's running forward it should call the first one and then pause, and then when resumed, call the other. Zero-duration tweens use _rawPrevTime to sense momentum figure out if events were suppressed when arriving directly on top of that time.
						sibling = tween._prev;
						while (sibling && sibling._startTime === startTime) {
							sibling._rawPrevTime = prev;
							sibling = sibling._prev;
						}
						sibling = tween._next;
						while (sibling && sibling._startTime === startTime) {
							sibling._rawPrevTime = next;
							sibling = sibling._next;
						}
						if (callback) {
							callback.apply(scope || tl, params || _blankArray);
						}
						if (this._forcingPlayhead || !tl._paused) { //the callback could have called resume().
							tl.seek(time);
						}
					}
				},
				_slice = function(a) { //don't use [].slice because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
					var b = [],
						l = a.length,
						i;
					for (i = 0; i !== l; b.push(a[i++]));
					return b;
				},
				p = TimelineLite.prototype = new SimpleTimeline();
	
			TimelineLite.version = "1.16.1";
			p.constructor = TimelineLite;
			p.kill()._gc = p._forcingPlayhead = false;
	
			/* might use later...
			//translates a local time inside an animation to the corresponding time on the root/global timeline, factoring in all nesting and timeScales.
			function localToGlobal(time, animation) {
				while (animation) {
					time = (time / animation._timeScale) + animation._startTime;
					animation = animation.timeline;
				}
				return time;
			}
	
			//translates the supplied time on the root/global timeline into the corresponding local time inside a particular animation, factoring in all nesting and timeScales
			function globalToLocal(time, animation) {
				var scale = 1;
				time -= localToGlobal(0, animation);
				while (animation) {
					scale *= animation._timeScale;
					animation = animation.timeline;
				}
				return time * scale;
			}
			*/
	
			p.to = function(target, duration, vars, position) {
				var Engine = (vars.repeat && _globals.TweenMax) || TweenLite;
				return duration ? this.add( new Engine(target, duration, vars), position) : this.set(target, vars, position);
			};
	
			p.from = function(target, duration, vars, position) {
				return this.add( ((vars.repeat && _globals.TweenMax) || TweenLite).from(target, duration, vars), position);
			};
	
			p.fromTo = function(target, duration, fromVars, toVars, position) {
				var Engine = (toVars.repeat && _globals.TweenMax) || TweenLite;
				return duration ? this.add( Engine.fromTo(target, duration, fromVars, toVars), position) : this.set(target, toVars, position);
			};
	
			p.staggerTo = function(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
				var tl = new TimelineLite({onComplete:onCompleteAll, onCompleteParams:onCompleteAllParams, onCompleteScope:onCompleteAllScope, smoothChildTiming:this.smoothChildTiming}),
					i;
				if (typeof(targets) === "string") {
					targets = TweenLite.selector(targets) || targets;
				}
				targets = targets || [];
				if (_isSelector(targets)) { //senses if the targets object is a selector. If it is, we should translate it into an array.
					targets = _slice(targets);
				}
				stagger = stagger || 0;
				if (stagger < 0) {
					targets = _slice(targets);
					targets.reverse();
					stagger *= -1;
				}
				for (i = 0; i < targets.length; i++) {
					if (vars.startAt) {
						vars.startAt = _copy(vars.startAt);
					}
					tl.to(targets[i], duration, _copy(vars), i * stagger);
				}
				return this.add(tl, position);
			};
	
			p.staggerFrom = function(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
				vars.immediateRender = (vars.immediateRender != false);
				vars.runBackwards = true;
				return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
			};
	
			p.staggerFromTo = function(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
				toVars.startAt = fromVars;
				toVars.immediateRender = (toVars.immediateRender != false && fromVars.immediateRender != false);
				return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
			};
	
			p.call = function(callback, params, scope, position) {
				return this.add( TweenLite.delayedCall(0, callback, params, scope), position);
			};
	
			p.set = function(target, vars, position) {
				position = this._parseTimeOrLabel(position, 0, true);
				if (vars.immediateRender == null) {
					vars.immediateRender = (position === this._time && !this._paused);
				}
				return this.add( new TweenLite(target, 0, vars), position);
			};
	
			TimelineLite.exportRoot = function(vars, ignoreDelayedCalls) {
				vars = vars || {};
				if (vars.smoothChildTiming == null) {
					vars.smoothChildTiming = true;
				}
				var tl = new TimelineLite(vars),
					root = tl._timeline,
					tween, next;
				if (ignoreDelayedCalls == null) {
					ignoreDelayedCalls = true;
				}
				root._remove(tl, true);
				tl._startTime = 0;
				tl._rawPrevTime = tl._time = tl._totalTime = root._time;
				tween = root._first;
				while (tween) {
					next = tween._next;
					if (!ignoreDelayedCalls || !(tween instanceof TweenLite && tween.target === tween.vars.onComplete)) {
						tl.add(tween, tween._startTime - tween._delay);
					}
					tween = next;
				}
				root.add(tl, 0);
				return tl;
			};
	
			p.add = function(value, position, align, stagger) {
				var curTime, l, i, child, tl, beforeRawTime;
				if (typeof(position) !== "number") {
					position = this._parseTimeOrLabel(position, 0, true, value);
				}
				if (!(value instanceof Animation)) {
					if ((value instanceof Array) || (value && value.push && _isArray(value))) {
						align = align || "normal";
						stagger = stagger || 0;
						curTime = position;
						l = value.length;
						for (i = 0; i < l; i++) {
							if (_isArray(child = value[i])) {
								child = new TimelineLite({tweens:child});
							}
							this.add(child, curTime);
							if (typeof(child) !== "string" && typeof(child) !== "function") {
								if (align === "sequence") {
									curTime = child._startTime + (child.totalDuration() / child._timeScale);
								} else if (align === "start") {
									child._startTime -= child.delay();
								}
							}
							curTime += stagger;
						}
						return this._uncache(true);
					} else if (typeof(value) === "string") {
						return this.addLabel(value, position);
					} else if (typeof(value) === "function") {
						value = TweenLite.delayedCall(0, value);
					} else {
						throw("Cannot add " + value + " into the timeline; it is not a tween, timeline, function, or string.");
					}
				}
	
				SimpleTimeline.prototype.add.call(this, value, position);
	
				//if the timeline has already ended but the inserted tween/timeline extends the duration, we should enable this timeline again so that it renders properly. We should also align the playhead with the parent timeline's when appropriate.
				if (this._gc || this._time === this._duration) if (!this._paused) if (this._duration < this.duration()) {
					//in case any of the ancestors had completed but should now be enabled...
					tl = this;
					beforeRawTime = (tl.rawTime() > value._startTime); //if the tween is placed on the timeline so that it starts BEFORE the current rawTime, we should align the playhead (move the timeline). This is because sometimes users will create a timeline, let it finish, and much later append a tween and expect it to run instead of jumping to its end state. While technically one could argue that it should jump to its end state, that's not what users intuitively expect.
					while (tl._timeline) {
						if (beforeRawTime && tl._timeline.smoothChildTiming) {
							tl.totalTime(tl._totalTime, true); //moves the timeline (shifts its startTime) if necessary, and also enables it.
						} else if (tl._gc) {
							tl._enabled(true, false);
						}
						tl = tl._timeline;
					}
				}
	
				return this;
			};
	
			p.remove = function(value) {
				if (value instanceof Animation) {
					return this._remove(value, false);
				} else if (value instanceof Array || (value && value.push && _isArray(value))) {
					var i = value.length;
					while (--i > -1) {
						this.remove(value[i]);
					}
					return this;
				} else if (typeof(value) === "string") {
					return this.removeLabel(value);
				}
				return this.kill(null, value);
			};
	
			p._remove = function(tween, skipDisable) {
				SimpleTimeline.prototype._remove.call(this, tween, skipDisable);
				var last = this._last;
				if (!last) {
					this._time = this._totalTime = this._duration = this._totalDuration = 0;
				} else if (this._time > last._startTime + last._totalDuration / last._timeScale) {
					this._time = this.duration();
					this._totalTime = this._totalDuration;
				}
				return this;
			};
	
			p.append = function(value, offsetOrLabel) {
				return this.add(value, this._parseTimeOrLabel(null, offsetOrLabel, true, value));
			};
	
			p.insert = p.insertMultiple = function(value, position, align, stagger) {
				return this.add(value, position || 0, align, stagger);
			};
	
			p.appendMultiple = function(tweens, offsetOrLabel, align, stagger) {
				return this.add(tweens, this._parseTimeOrLabel(null, offsetOrLabel, true, tweens), align, stagger);
			};
	
			p.addLabel = function(label, position) {
				this._labels[label] = this._parseTimeOrLabel(position);
				return this;
			};
	
			p.addPause = function(position, callback, params, scope) {
				var t = TweenLite.delayedCall(0, _pauseCallback, ["{self}", callback, params, scope], this);
				t.data = "isPause"; // we use this flag in TweenLite's render() method to identify it as a special case that shouldn't be triggered when the virtual playhead is LEAVING the exact position where the pause is, otherwise timeline.addPause(1).play(1) would end up paused on the very next tick.
				return this.add(t, position);
			};
	
			p.removeLabel = function(label) {
				delete this._labels[label];
				return this;
			};
	
			p.getLabelTime = function(label) {
				return (this._labels[label] != null) ? this._labels[label] : -1;
			};
	
			p._parseTimeOrLabel = function(timeOrLabel, offsetOrLabel, appendIfAbsent, ignore) {
				var i;
				//if we're about to add a tween/timeline (or an array of them) that's already a child of this timeline, we should remove it first so that it doesn't contaminate the duration().
				if (ignore instanceof Animation && ignore.timeline === this) {
					this.remove(ignore);
				} else if (ignore && ((ignore instanceof Array) || (ignore.push && _isArray(ignore)))) {
					i = ignore.length;
					while (--i > -1) {
						if (ignore[i] instanceof Animation && ignore[i].timeline === this) {
							this.remove(ignore[i]);
						}
					}
				}
				if (typeof(offsetOrLabel) === "string") {
					return this._parseTimeOrLabel(offsetOrLabel, (appendIfAbsent && typeof(timeOrLabel) === "number" && this._labels[offsetOrLabel] == null) ? timeOrLabel - this.duration() : 0, appendIfAbsent);
				}
				offsetOrLabel = offsetOrLabel || 0;
				if (typeof(timeOrLabel) === "string" && (isNaN(timeOrLabel) || this._labels[timeOrLabel] != null)) { //if the string is a number like "1", check to see if there's a label with that name, otherwise interpret it as a number (absolute value).
					i = timeOrLabel.indexOf("=");
					if (i === -1) {
						if (this._labels[timeOrLabel] == null) {
							return appendIfAbsent ? (this._labels[timeOrLabel] = this.duration() + offsetOrLabel) : offsetOrLabel;
						}
						return this._labels[timeOrLabel] + offsetOrLabel;
					}
					offsetOrLabel = parseInt(timeOrLabel.charAt(i-1) + "1", 10) * Number(timeOrLabel.substr(i+1));
					timeOrLabel = (i > 1) ? this._parseTimeOrLabel(timeOrLabel.substr(0, i-1), 0, appendIfAbsent) : this.duration();
				} else if (timeOrLabel == null) {
					timeOrLabel = this.duration();
				}
				return Number(timeOrLabel) + offsetOrLabel;
			};
	
			p.seek = function(position, suppressEvents) {
				return this.totalTime((typeof(position) === "number") ? position : this._parseTimeOrLabel(position), (suppressEvents !== false));
			};
	
			p.stop = function() {
				return this.paused(true);
			};
	
			p.gotoAndPlay = function(position, suppressEvents) {
				return this.play(position, suppressEvents);
			};
	
			p.gotoAndStop = function(position, suppressEvents) {
				return this.pause(position, suppressEvents);
			};
	
			p.render = function(time, suppressEvents, force) {
				if (this._gc) {
					this._enabled(true, false);
				}
				var totalDur = (!this._dirty) ? this._totalDuration : this.totalDuration(),
					prevTime = this._time,
					prevStart = this._startTime,
					prevTimeScale = this._timeScale,
					prevPaused = this._paused,
					tween, isComplete, next, callback, internalForce;
				if (time >= totalDur) {
					this._totalTime = this._time = totalDur;
					if (!this._reversed) if (!this._hasPausedChild()) {
						isComplete = true;
						callback = "onComplete";
						internalForce = !!this._timeline.autoRemoveChildren; //otherwise, if the animation is unpaused/activated after it's already finished, it doesn't get removed from the parent timeline.
						if (this._duration === 0) if (time === 0 || this._rawPrevTime < 0 || this._rawPrevTime === _tinyNum) if (this._rawPrevTime !== time && this._first) {
							internalForce = true;
							if (this._rawPrevTime > _tinyNum) {
								callback = "onReverseComplete";
							}
						}
					}
					this._rawPrevTime = (this._duration || !suppressEvents || time || this._rawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
					time = totalDur + 0.0001; //to avoid occasional floating point rounding errors - sometimes child tweens/timelines were not being fully completed (their progress might be 0.999999999999998 instead of 1 because when _time - tween._startTime is performed, floating point errors would return a value that was SLIGHTLY off). Try (999999999999.7 - 999999999999) * 1 = 0.699951171875 instead of 0.7.
	
				} else if (time < 0.0000001) { //to work around occasional floating point math artifacts, round super small values to 0.
					this._totalTime = this._time = 0;
					if (prevTime !== 0 || (this._duration === 0 && this._rawPrevTime !== _tinyNum && (this._rawPrevTime > 0 || (time < 0 && this._rawPrevTime >= 0)))) {
						callback = "onReverseComplete";
						isComplete = this._reversed;
					}
					if (time < 0) {
						this._active = false;
						if (this._timeline.autoRemoveChildren && this._reversed) { //ensures proper GC if a timeline is resumed after it's finished reversing.
							internalForce = isComplete = true;
							callback = "onReverseComplete";
						} else if (this._rawPrevTime >= 0 && this._first) { //when going back beyond the start, force a render so that zero-duration tweens that sit at the very beginning render their start values properly. Otherwise, if the parent timeline's playhead lands exactly at this timeline's startTime, and then moves backwards, the zero-duration tweens at the beginning would still be at their end state.
							internalForce = true;
						}
						this._rawPrevTime = time;
					} else {
						this._rawPrevTime = (this._duration || !suppressEvents || time || this._rawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
						if (time === 0 && isComplete) { //if there's a zero-duration tween at the very beginning of a timeline and the playhead lands EXACTLY at time 0, that tween will correctly render its end values, but we need to keep the timeline alive for one more render so that the beginning values render properly as the parent's playhead keeps moving beyond the begining. Imagine obj.x starts at 0 and then we do tl.set(obj, {x:100}).to(obj, 1, {x:200}) and then later we tl.reverse()...the goal is to have obj.x revert to 0. If the playhead happens to land on exactly 0, without this chunk of code, it'd complete the timeline and remove it from the rendering queue (not good).
							tween = this._first;
							while (tween && tween._startTime === 0) {
								if (!tween._duration) {
									isComplete = false;
								}
								tween = tween._next;
							}
						}
						time = 0; //to avoid occasional floating point rounding errors (could cause problems especially with zero-duration tweens at the very beginning of the timeline)
						if (!this._initted) {
							internalForce = true;
						}
					}
	
				} else {
					this._totalTime = this._time = this._rawPrevTime = time;
				}
				if ((this._time === prevTime || !this._first) && !force && !internalForce) {
					return;
				} else if (!this._initted) {
					this._initted = true;
				}
	
				if (!this._active) if (!this._paused && this._time !== prevTime && time > 0) {
					this._active = true;  //so that if the user renders the timeline (as opposed to the parent timeline rendering it), it is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the timeline already finished but the user manually re-renders it as halfway done, for example.
				}
	
				if (prevTime === 0) if (this.vars.onStart) if (this._time !== 0) if (!suppressEvents) {
					this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || _blankArray);
				}
	
				if (this._time >= prevTime) {
					tween = this._first;
					while (tween) {
						next = tween._next; //record it here because the value could change after rendering...
						if (this._paused && !prevPaused) { //in case a tween pauses the timeline when rendering
							break;
						} else if (tween._active || (tween._startTime <= this._time && !tween._paused && !tween._gc)) {
							if (!tween._reversed) {
								tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
							} else {
								tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force);
							}
						}
						tween = next;
					}
				} else {
					tween = this._last;
					while (tween) {
						next = tween._prev; //record it here because the value could change after rendering...
						if (this._paused && !prevPaused) { //in case a tween pauses the timeline when rendering
							break;
						} else if (tween._active || (tween._startTime <= prevTime && !tween._paused && !tween._gc)) {
							if (!tween._reversed) {
								tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
							} else {
								tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force);
							}
						}
						tween = next;
					}
				}
	
				if (this._onUpdate) if (!suppressEvents) {
					if (_lazyTweens.length) { //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.
						_lazyRender();
					}
					this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || _blankArray);
				}
	
				if (callback) if (!this._gc) if (prevStart === this._startTime || prevTimeScale !== this._timeScale) if (this._time === 0 || totalDur >= this.totalDuration()) { //if one of the tweens that was rendered altered this timeline's startTime (like if an onComplete reversed the timeline), it probably isn't complete. If it is, don't worry, because whatever call altered the startTime would complete if it was necessary at the new time. The only exception is the timeScale property. Also check _gc because there's a chance that kill() could be called in an onUpdate
					if (isComplete) {
						if (_lazyTweens.length) { //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onComplete on a timeline that reports/checks tweened values.
							_lazyRender();
						}
						if (this._timeline.autoRemoveChildren) {
							this._enabled(false, false);
						}
						this._active = false;
					}
					if (!suppressEvents && this.vars[callback]) {
						this.vars[callback].apply(this.vars[callback + "Scope"] || this, this.vars[callback + "Params"] || _blankArray);
					}
				}
			};
	
			p._hasPausedChild = function() {
				var tween = this._first;
				while (tween) {
					if (tween._paused || ((tween instanceof TimelineLite) && tween._hasPausedChild())) {
						return true;
					}
					tween = tween._next;
				}
				return false;
			};
	
			p.getChildren = function(nested, tweens, timelines, ignoreBeforeTime) {
				ignoreBeforeTime = ignoreBeforeTime || -9999999999;
				var a = [],
					tween = this._first,
					cnt = 0;
				while (tween) {
					if (tween._startTime < ignoreBeforeTime) {
						//do nothing
					} else if (tween instanceof TweenLite) {
						if (tweens !== false) {
							a[cnt++] = tween;
						}
					} else {
						if (timelines !== false) {
							a[cnt++] = tween;
						}
						if (nested !== false) {
							a = a.concat(tween.getChildren(true, tweens, timelines));
							cnt = a.length;
						}
					}
					tween = tween._next;
				}
				return a;
			};
	
			p.getTweensOf = function(target, nested) {
				var disabled = this._gc,
					a = [],
					cnt = 0,
					tweens, i;
				if (disabled) {
					this._enabled(true, true); //getTweensOf() filters out disabled tweens, and we have to mark them as _gc = true when the timeline completes in order to allow clean garbage collection, so temporarily re-enable the timeline here.
				}
				tweens = TweenLite.getTweensOf(target);
				i = tweens.length;
				while (--i > -1) {
					if (tweens[i].timeline === this || (nested && this._contains(tweens[i]))) {
						a[cnt++] = tweens[i];
					}
				}
				if (disabled) {
					this._enabled(false, true);
				}
				return a;
			};
	
			p.recent = function() {
				return this._recent;
			};
	
			p._contains = function(tween) {
				var tl = tween.timeline;
				while (tl) {
					if (tl === this) {
						return true;
					}
					tl = tl.timeline;
				}
				return false;
			};
	
			p.shiftChildren = function(amount, adjustLabels, ignoreBeforeTime) {
				ignoreBeforeTime = ignoreBeforeTime || 0;
				var tween = this._first,
					labels = this._labels,
					p;
				while (tween) {
					if (tween._startTime >= ignoreBeforeTime) {
						tween._startTime += amount;
					}
					tween = tween._next;
				}
				if (adjustLabels) {
					for (p in labels) {
						if (labels[p] >= ignoreBeforeTime) {
							labels[p] += amount;
						}
					}
				}
				return this._uncache(true);
			};
	
			p._kill = function(vars, target) {
				if (!vars && !target) {
					return this._enabled(false, false);
				}
				var tweens = (!target) ? this.getChildren(true, true, false) : this.getTweensOf(target),
					i = tweens.length,
					changed = false;
				while (--i > -1) {
					if (tweens[i]._kill(vars, target)) {
						changed = true;
					}
				}
				return changed;
			};
	
			p.clear = function(labels) {
				var tweens = this.getChildren(false, true, true),
					i = tweens.length;
				this._time = this._totalTime = 0;
				while (--i > -1) {
					tweens[i]._enabled(false, false);
				}
				if (labels !== false) {
					this._labels = {};
				}
				return this._uncache(true);
			};
	
			p.invalidate = function() {
				var tween = this._first;
				while (tween) {
					tween.invalidate();
					tween = tween._next;
				}
				return Animation.prototype.invalidate.call(this);;
			};
	
			p._enabled = function(enabled, ignoreTimeline) {
				if (enabled === this._gc) {
					var tween = this._first;
					while (tween) {
						tween._enabled(enabled, true);
						tween = tween._next;
					}
				}
				return SimpleTimeline.prototype._enabled.call(this, enabled, ignoreTimeline);
			};
	
			p.totalTime = function(time, suppressEvents, uncapped) {
				this._forcingPlayhead = true;
				var val = Animation.prototype.totalTime.apply(this, arguments);
				this._forcingPlayhead = false;
				return val;
			};
	
			p.duration = function(value) {
				if (!arguments.length) {
					if (this._dirty) {
						this.totalDuration(); //just triggers recalculation
					}
					return this._duration;
				}
				if (this.duration() !== 0 && value !== 0) {
					this.timeScale(this._duration / value);
				}
				return this;
			};
	
			p.totalDuration = function(value) {
				if (!arguments.length) {
					if (this._dirty) {
						var max = 0,
							tween = this._last,
							prevStart = 999999999999,
							prev, end;
						while (tween) {
							prev = tween._prev; //record it here in case the tween changes position in the sequence...
							if (tween._dirty) {
								tween.totalDuration(); //could change the tween._startTime, so make sure the tween's cache is clean before analyzing it.
							}
							if (tween._startTime > prevStart && this._sortChildren && !tween._paused) { //in case one of the tweens shifted out of order, it needs to be re-inserted into the correct position in the sequence
								this.add(tween, tween._startTime - tween._delay);
							} else {
								prevStart = tween._startTime;
							}
							if (tween._startTime < 0 && !tween._paused) { //children aren't allowed to have negative startTimes unless smoothChildTiming is true, so adjust here if one is found.
								max -= tween._startTime;
								if (this._timeline.smoothChildTiming) {
									this._startTime += tween._startTime / this._timeScale;
								}
								this.shiftChildren(-tween._startTime, false, -9999999999);
								prevStart = 0;
							}
							end = tween._startTime + (tween._totalDuration / tween._timeScale);
							if (end > max) {
								max = end;
							}
							tween = prev;
						}
						this._duration = this._totalDuration = max;
						this._dirty = false;
					}
					return this._totalDuration;
				}
				if (this.totalDuration() !== 0) if (value !== 0) {
					this.timeScale(this._totalDuration / value);
				}
				return this;
			};
	
			p.paused = function(value) {
				if (!value) { //if there's a pause directly at the spot from where we're unpausing, skip it.
					var tween = this._first,
						time = this._time;
					while (tween) {
						if (tween._startTime === time && tween.data === "isPause") {
							tween._rawPrevTime = 0; //remember, _rawPrevTime is how zero-duration tweens/callbacks sense directionality and determine whether or not to fire. If _rawPrevTime is the same as _startTime on the next render, it won't fire.
						}
						tween = tween._next;
					}
				}
				return Animation.prototype.paused.apply(this, arguments);
			};
	
			p.usesFrames = function() {
				var tl = this._timeline;
				while (tl._timeline) {
					tl = tl._timeline;
				}
				return (tl === Animation._rootFramesTimeline);
			};
	
			p.rawTime = function() {
				return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale;
			};
	
			return TimelineLite;
	
		}, true);
		
	
	
	
	
	
	
	
		
		
		
		
		
	/*
	 * ----------------------------------------------------------------
	 * TimelineMax
	 * ----------------------------------------------------------------
	 */
		_gsScope._gsDefine("TimelineMax", ["TimelineLite","TweenLite","easing.Ease"], function(TimelineLite, TweenLite, Ease) {
	
			var TimelineMax = function(vars) {
					TimelineLite.call(this, vars);
					this._repeat = this.vars.repeat || 0;
					this._repeatDelay = this.vars.repeatDelay || 0;
					this._cycle = 0;
					this._yoyo = (this.vars.yoyo === true);
					this._dirty = true;
				},
				_tinyNum = 0.0000000001,
				_blankArray = [],
				TweenLiteInternals = TweenLite._internals,
				_lazyTweens = TweenLiteInternals.lazyTweens,
				_lazyRender = TweenLiteInternals.lazyRender,
				_easeNone = new Ease(null, null, 1, 0),
				p = TimelineMax.prototype = new TimelineLite();
	
			p.constructor = TimelineMax;
			p.kill()._gc = false;
			TimelineMax.version = "1.16.1";
	
			p.invalidate = function() {
				this._yoyo = (this.vars.yoyo === true);
				this._repeat = this.vars.repeat || 0;
				this._repeatDelay = this.vars.repeatDelay || 0;
				this._uncache(true);
				return TimelineLite.prototype.invalidate.call(this);
			};
	
			p.addCallback = function(callback, position, params, scope) {
				return this.add( TweenLite.delayedCall(0, callback, params, scope), position);
			};
	
			p.removeCallback = function(callback, position) {
				if (callback) {
					if (position == null) {
						this._kill(null, callback);
					} else {
						var a = this.getTweensOf(callback, false),
							i = a.length,
							time = this._parseTimeOrLabel(position);
						while (--i > -1) {
							if (a[i]._startTime === time) {
								a[i]._enabled(false, false);
							}
						}
					}
				}
				return this;
			};
	
			p.removePause = function(position) {
				return this.removeCallback(TimelineLite._internals.pauseCallback, position);
			};
	
			p.tweenTo = function(position, vars) {
				vars = vars || {};
				var copy = {ease:_easeNone, useFrames:this.usesFrames(), immediateRender:false},
					duration, p, t;
				for (p in vars) {
					copy[p] = vars[p];
				}
				copy.time = this._parseTimeOrLabel(position);
				duration = (Math.abs(Number(copy.time) - this._time) / this._timeScale) || 0.001;
				t = new TweenLite(this, duration, copy);
				copy.onStart = function() {
					t.target.paused(true);
					if (t.vars.time !== t.target.time() && duration === t.duration()) { //don't make the duration zero - if it's supposed to be zero, don't worry because it's already initting the tween and will complete immediately, effectively making the duration zero anyway. If we make duration zero, the tween won't run at all.
						t.duration( Math.abs( t.vars.time - t.target.time()) / t.target._timeScale );
					}
					if (vars.onStart) { //in case the user had an onStart in the vars - we don't want to overwrite it.
						vars.onStart.apply(vars.onStartScope || t, vars.onStartParams || _blankArray);
					}
				};
				return t;
			};
	
			p.tweenFromTo = function(fromPosition, toPosition, vars) {
				vars = vars || {};
				fromPosition = this._parseTimeOrLabel(fromPosition);
				vars.startAt = {onComplete:this.seek, onCompleteParams:[fromPosition], onCompleteScope:this};
				vars.immediateRender = (vars.immediateRender !== false);
				var t = this.tweenTo(toPosition, vars);
				return t.duration((Math.abs( t.vars.time - fromPosition) / this._timeScale) || 0.001);
			};
	
			p.render = function(time, suppressEvents, force) {
				if (this._gc) {
					this._enabled(true, false);
				}
				var totalDur = (!this._dirty) ? this._totalDuration : this.totalDuration(),
					dur = this._duration,
					prevTime = this._time,
					prevTotalTime = this._totalTime,
					prevStart = this._startTime,
					prevTimeScale = this._timeScale,
					prevRawPrevTime = this._rawPrevTime,
					prevPaused = this._paused,
					prevCycle = this._cycle,
					tween, isComplete, next, callback, internalForce, cycleDuration;
				if (time >= totalDur) {
					if (!this._locked) {
						this._totalTime = totalDur;
						this._cycle = this._repeat;
					}
					if (!this._reversed) if (!this._hasPausedChild()) {
						isComplete = true;
						callback = "onComplete";
						internalForce = !!this._timeline.autoRemoveChildren; //otherwise, if the animation is unpaused/activated after it's already finished, it doesn't get removed from the parent timeline.
						if (this._duration === 0) if (time === 0 || prevRawPrevTime < 0 || prevRawPrevTime === _tinyNum) if (prevRawPrevTime !== time && this._first) {
							internalForce = true;
							if (prevRawPrevTime > _tinyNum) {
								callback = "onReverseComplete";
							}
						}
					}
					this._rawPrevTime = (this._duration || !suppressEvents || time || this._rawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
					if (this._yoyo && (this._cycle & 1) !== 0) {
						this._time = time = 0;
					} else {
						this._time = dur;
						time = dur + 0.0001; //to avoid occasional floating point rounding errors - sometimes child tweens/timelines were not being fully completed (their progress might be 0.999999999999998 instead of 1 because when _time - tween._startTime is performed, floating point errors would return a value that was SLIGHTLY off). Try (999999999999.7 - 999999999999) * 1 = 0.699951171875 instead of 0.7. We cannot do less then 0.0001 because the same issue can occur when the duration is extremely large like 999999999999 in which case adding 0.00000001, for example, causes it to act like nothing was added.
					}
	
				} else if (time < 0.0000001) { //to work around occasional floating point math artifacts, round super small values to 0.
					if (!this._locked) {
						this._totalTime = this._cycle = 0;
					}
					this._time = 0;
					if (prevTime !== 0 || (dur === 0 && prevRawPrevTime !== _tinyNum && (prevRawPrevTime > 0 || (time < 0 && prevRawPrevTime >= 0)) && !this._locked)) { //edge case for checking time < 0 && prevRawPrevTime >= 0: a zero-duration fromTo() tween inside a zero-duration timeline (yeah, very rare)
						callback = "onReverseComplete";
						isComplete = this._reversed;
					}
					if (time < 0) {
						this._active = false;
						if (this._timeline.autoRemoveChildren && this._reversed) {
							internalForce = isComplete = true;
							callback = "onReverseComplete";
						} else if (prevRawPrevTime >= 0 && this._first) { //when going back beyond the start, force a render so that zero-duration tweens that sit at the very beginning render their start values properly. Otherwise, if the parent timeline's playhead lands exactly at this timeline's startTime, and then moves backwards, the zero-duration tweens at the beginning would still be at their end state.
							internalForce = true;
						}
						this._rawPrevTime = time;
					} else {
						this._rawPrevTime = (dur || !suppressEvents || time || this._rawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
						if (time === 0 && isComplete) { //if there's a zero-duration tween at the very beginning of a timeline and the playhead lands EXACTLY at time 0, that tween will correctly render its end values, but we need to keep the timeline alive for one more render so that the beginning values render properly as the parent's playhead keeps moving beyond the begining. Imagine obj.x starts at 0 and then we do tl.set(obj, {x:100}).to(obj, 1, {x:200}) and then later we tl.reverse()...the goal is to have obj.x revert to 0. If the playhead happens to land on exactly 0, without this chunk of code, it'd complete the timeline and remove it from the rendering queue (not good).
							tween = this._first;
							while (tween && tween._startTime === 0) {
								if (!tween._duration) {
									isComplete = false;
								}
								tween = tween._next;
							}
						}
						time = 0; //to avoid occasional floating point rounding errors (could cause problems especially with zero-duration tweens at the very beginning of the timeline)
						if (!this._initted) {
							internalForce = true;
						}
					}
	
				} else {
					if (dur === 0 && prevRawPrevTime < 0) { //without this, zero-duration repeating timelines (like with a simple callback nested at the very beginning and a repeatDelay) wouldn't render the first time through.
						internalForce = true;
					}
					this._time = this._rawPrevTime = time;
					if (!this._locked) {
						this._totalTime = time;
						if (this._repeat !== 0) {
							cycleDuration = dur + this._repeatDelay;
							this._cycle = (this._totalTime / cycleDuration) >> 0; //originally _totalTime % cycleDuration but floating point errors caused problems, so I normalized it. (4 % 0.8 should be 0 but it gets reported as 0.79999999!)
							if (this._cycle !== 0) if (this._cycle === this._totalTime / cycleDuration) {
								this._cycle--; //otherwise when rendered exactly at the end time, it will act as though it is repeating (at the beginning)
							}
							this._time = this._totalTime - (this._cycle * cycleDuration);
							if (this._yoyo) if ((this._cycle & 1) !== 0) {
								this._time = dur - this._time;
							}
							if (this._time > dur) {
								this._time = dur;
								time = dur + 0.0001; //to avoid occasional floating point rounding error
							} else if (this._time < 0) {
								this._time = time = 0;
							} else {
								time = this._time;
							}
						}
					}
				}
	
				if (this._cycle !== prevCycle) if (!this._locked) {
					/*
					make sure children at the end/beginning of the timeline are rendered properly. If, for example,
					a 3-second long timeline rendered at 2.9 seconds previously, and now renders at 3.2 seconds (which
					would get transated to 2.8 seconds if the timeline yoyos or 0.2 seconds if it just repeats), there
					could be a callback or a short tween that's at 2.95 or 3 seconds in which wouldn't render. So
					we need to push the timeline to the end (and/or beginning depending on its yoyo value). Also we must
					ensure that zero-duration tweens at the very beginning or end of the TimelineMax work.
					*/
					var backwards = (this._yoyo && (prevCycle & 1) !== 0),
						wrap = (backwards === (this._yoyo && (this._cycle & 1) !== 0)),
						recTotalTime = this._totalTime,
						recCycle = this._cycle,
						recRawPrevTime = this._rawPrevTime,
						recTime = this._time;
	
					this._totalTime = prevCycle * dur;
					if (this._cycle < prevCycle) {
						backwards = !backwards;
					} else {
						this._totalTime += dur;
					}
					this._time = prevTime; //temporarily revert _time so that render() renders the children in the correct order. Without this, tweens won't rewind correctly. We could arhictect things in a "cleaner" way by splitting out the rendering queue into a separate method but for performance reasons, we kept it all inside this method.
	
					this._rawPrevTime = (dur === 0) ? prevRawPrevTime - 0.0001 : prevRawPrevTime;
					this._cycle = prevCycle;
					this._locked = true; //prevents changes to totalTime and skips repeat/yoyo behavior when we recursively call render()
					prevTime = (backwards) ? 0 : dur;
					this.render(prevTime, suppressEvents, (dur === 0));
					if (!suppressEvents) if (!this._gc) {
						if (this.vars.onRepeat) {
							this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || _blankArray);
						}
					}
					if (wrap) {
						prevTime = (backwards) ? dur + 0.0001 : -0.0001;
						this.render(prevTime, true, false);
					}
					this._locked = false;
					if (this._paused && !prevPaused) { //if the render() triggered callback that paused this timeline, we should abort (very rare, but possible)
						return;
					}
					this._time = recTime;
					this._totalTime = recTotalTime;
					this._cycle = recCycle;
					this._rawPrevTime = recRawPrevTime;
				}
	
				if ((this._time === prevTime || !this._first) && !force && !internalForce) {
					if (prevTotalTime !== this._totalTime) if (this._onUpdate) if (!suppressEvents) { //so that onUpdate fires even during the repeatDelay - as long as the totalTime changed, we should trigger onUpdate.
						this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || _blankArray);
					}
					return;
				} else if (!this._initted) {
					this._initted = true;
				}
	
				if (!this._active) if (!this._paused && this._totalTime !== prevTotalTime && time > 0) {
					this._active = true;  //so that if the user renders the timeline (as opposed to the parent timeline rendering it), it is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the timeline already finished but the user manually re-renders it as halfway done, for example.
				}
	
				if (prevTotalTime === 0) if (this.vars.onStart) if (this._totalTime !== 0) if (!suppressEvents) {
					this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || _blankArray);
				}
	
				if (this._time >= prevTime) {
					tween = this._first;
					while (tween) {
						next = tween._next; //record it here because the value could change after rendering...
						if (this._paused && !prevPaused) { //in case a tween pauses the timeline when rendering
							break;
						} else if (tween._active || (tween._startTime <= this._time && !tween._paused && !tween._gc)) {
							if (!tween._reversed) {
								tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
							} else {
								tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force);
							}
	
						}
						tween = next;
					}
				} else {
					tween = this._last;
					while (tween) {
						next = tween._prev; //record it here because the value could change after rendering...
						if (this._paused && !prevPaused) { //in case a tween pauses the timeline when rendering
							break;
						} else if (tween._active || (tween._startTime <= prevTime && !tween._paused && !tween._gc)) {
							if (!tween._reversed) {
								tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
							} else {
								tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force);
							}
						}
						tween = next;
					}
				}
	
				if (this._onUpdate) if (!suppressEvents) {
					if (_lazyTweens.length) { //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.
						_lazyRender();
					}
					this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || _blankArray);
				}
				if (callback) if (!this._locked) if (!this._gc) if (prevStart === this._startTime || prevTimeScale !== this._timeScale) if (this._time === 0 || totalDur >= this.totalDuration()) { //if one of the tweens that was rendered altered this timeline's startTime (like if an onComplete reversed the timeline), it probably isn't complete. If it is, don't worry, because whatever call altered the startTime would complete if it was necessary at the new time. The only exception is the timeScale property. Also check _gc because there's a chance that kill() could be called in an onUpdate
					if (isComplete) {
						if (_lazyTweens.length) { //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onComplete on a timeline that reports/checks tweened values.
							_lazyRender();
						}
						if (this._timeline.autoRemoveChildren) {
							this._enabled(false, false);
						}
						this._active = false;
					}
					if (!suppressEvents && this.vars[callback]) {
						this.vars[callback].apply(this.vars[callback + "Scope"] || this, this.vars[callback + "Params"] || _blankArray);
					}
				}
			};
	
			p.getActive = function(nested, tweens, timelines) {
				if (nested == null) {
					nested = true;
				}
				if (tweens == null) {
					tweens = true;
				}
				if (timelines == null) {
					timelines = false;
				}
				var a = [],
					all = this.getChildren(nested, tweens, timelines),
					cnt = 0,
					l = all.length,
					i, tween;
				for (i = 0; i < l; i++) {
					tween = all[i];
					if (tween.isActive()) {
						a[cnt++] = tween;
					}
				}
				return a;
			};
	
	
			p.getLabelAfter = function(time) {
				if (!time) if (time !== 0) { //faster than isNan()
					time = this._time;
				}
				var labels = this.getLabelsArray(),
					l = labels.length,
					i;
				for (i = 0; i < l; i++) {
					if (labels[i].time > time) {
						return labels[i].name;
					}
				}
				return null;
			};
	
			p.getLabelBefore = function(time) {
				if (time == null) {
					time = this._time;
				}
				var labels = this.getLabelsArray(),
					i = labels.length;
				while (--i > -1) {
					if (labels[i].time < time) {
						return labels[i].name;
					}
				}
				return null;
			};
	
			p.getLabelsArray = function() {
				var a = [],
					cnt = 0,
					p;
				for (p in this._labels) {
					a[cnt++] = {time:this._labels[p], name:p};
				}
				a.sort(function(a,b) {
					return a.time - b.time;
				});
				return a;
			};
	
	
	//---- GETTERS / SETTERS -------------------------------------------------------------------------------------------------------
	
			p.progress = function(value, suppressEvents) {
				return (!arguments.length) ? this._time / this.duration() : this.totalTime( this.duration() * ((this._yoyo && (this._cycle & 1) !== 0) ? 1 - value : value) + (this._cycle * (this._duration + this._repeatDelay)), suppressEvents);
			};
	
			p.totalProgress = function(value, suppressEvents) {
				return (!arguments.length) ? this._totalTime / this.totalDuration() : this.totalTime( this.totalDuration() * value, suppressEvents);
			};
	
			p.totalDuration = function(value) {
				if (!arguments.length) {
					if (this._dirty) {
						TimelineLite.prototype.totalDuration.call(this); //just forces refresh
						//Instead of Infinity, we use 999999999999 so that we can accommodate reverses.
						this._totalDuration = (this._repeat === -1) ? 999999999999 : this._duration * (this._repeat + 1) + (this._repeatDelay * this._repeat);
					}
					return this._totalDuration;
				}
				return (this._repeat === -1) ? this : this.duration( (value - (this._repeat * this._repeatDelay)) / (this._repeat + 1) );
			};
	
			p.time = function(value, suppressEvents) {
				if (!arguments.length) {
					return this._time;
				}
				if (this._dirty) {
					this.totalDuration();
				}
				if (value > this._duration) {
					value = this._duration;
				}
				if (this._yoyo && (this._cycle & 1) !== 0) {
					value = (this._duration - value) + (this._cycle * (this._duration + this._repeatDelay));
				} else if (this._repeat !== 0) {
					value += this._cycle * (this._duration + this._repeatDelay);
				}
				return this.totalTime(value, suppressEvents);
			};
	
			p.repeat = function(value) {
				if (!arguments.length) {
					return this._repeat;
				}
				this._repeat = value;
				return this._uncache(true);
			};
	
			p.repeatDelay = function(value) {
				if (!arguments.length) {
					return this._repeatDelay;
				}
				this._repeatDelay = value;
				return this._uncache(true);
			};
	
			p.yoyo = function(value) {
				if (!arguments.length) {
					return this._yoyo;
				}
				this._yoyo = value;
				return this;
			};
	
			p.currentLabel = function(value) {
				if (!arguments.length) {
					return this.getLabelBefore(this._time + 0.00000001);
				}
				return this.seek(value, true);
			};
	
			return TimelineMax;
	
		}, true);
		
	
	
	
	
		
		
		
		
		
		
		
	/*
	 * ----------------------------------------------------------------
	 * BezierPlugin
	 * ----------------------------------------------------------------
	 */
		(function() {
	
			var _RAD2DEG = 180 / Math.PI,
				_r1 = [],
				_r2 = [],
				_r3 = [],
				_corProps = {},
				_globals = _gsScope._gsDefine.globals,
				Segment = function(a, b, c, d) {
					this.a = a;
					this.b = b;
					this.c = c;
					this.d = d;
					this.da = d - a;
					this.ca = c - a;
					this.ba = b - a;
				},
				_correlate = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
				cubicToQuadratic = function(a, b, c, d) {
					var q1 = {a:a},
						q2 = {},
						q3 = {},
						q4 = {c:d},
						mab = (a + b) / 2,
						mbc = (b + c) / 2,
						mcd = (c + d) / 2,
						mabc = (mab + mbc) / 2,
						mbcd = (mbc + mcd) / 2,
						m8 = (mbcd - mabc) / 8;
					q1.b = mab + (a - mab) / 4;
					q2.b = mabc + m8;
					q1.c = q2.a = (q1.b + q2.b) / 2;
					q2.c = q3.a = (mabc + mbcd) / 2;
					q3.b = mbcd - m8;
					q4.b = mcd + (d - mcd) / 4;
					q3.c = q4.a = (q3.b + q4.b) / 2;
					return [q1, q2, q3, q4];
				},
				_calculateControlPoints = function(a, curviness, quad, basic, correlate) {
					var l = a.length - 1,
						ii = 0,
						cp1 = a[0].a,
						i, p1, p2, p3, seg, m1, m2, mm, cp2, qb, r1, r2, tl;
					for (i = 0; i < l; i++) {
						seg = a[ii];
						p1 = seg.a;
						p2 = seg.d;
						p3 = a[ii+1].d;
	
						if (correlate) {
							r1 = _r1[i];
							r2 = _r2[i];
							tl = ((r2 + r1) * curviness * 0.25) / (basic ? 0.5 : _r3[i] || 0.5);
							m1 = p2 - (p2 - p1) * (basic ? curviness * 0.5 : (r1 !== 0 ? tl / r1 : 0));
							m2 = p2 + (p3 - p2) * (basic ? curviness * 0.5 : (r2 !== 0 ? tl / r2 : 0));
							mm = p2 - (m1 + (((m2 - m1) * ((r1 * 3 / (r1 + r2)) + 0.5) / 4) || 0));
						} else {
							m1 = p2 - (p2 - p1) * curviness * 0.5;
							m2 = p2 + (p3 - p2) * curviness * 0.5;
							mm = p2 - (m1 + m2) / 2;
						}
						m1 += mm;
						m2 += mm;
	
						seg.c = cp2 = m1;
						if (i !== 0) {
							seg.b = cp1;
						} else {
							seg.b = cp1 = seg.a + (seg.c - seg.a) * 0.6; //instead of placing b on a exactly, we move it inline with c so that if the user specifies an ease like Back.easeIn or Elastic.easeIn which goes BEYOND the beginning, it will do so smoothly.
						}
	
						seg.da = p2 - p1;
						seg.ca = cp2 - p1;
						seg.ba = cp1 - p1;
	
						if (quad) {
							qb = cubicToQuadratic(p1, cp1, cp2, p2);
							a.splice(ii, 1, qb[0], qb[1], qb[2], qb[3]);
							ii += 4;
						} else {
							ii++;
						}
	
						cp1 = m2;
					}
					seg = a[ii];
					seg.b = cp1;
					seg.c = cp1 + (seg.d - cp1) * 0.4; //instead of placing c on d exactly, we move it inline with b so that if the user specifies an ease like Back.easeOut or Elastic.easeOut which goes BEYOND the end, it will do so smoothly.
					seg.da = seg.d - seg.a;
					seg.ca = seg.c - seg.a;
					seg.ba = cp1 - seg.a;
					if (quad) {
						qb = cubicToQuadratic(seg.a, cp1, seg.c, seg.d);
						a.splice(ii, 1, qb[0], qb[1], qb[2], qb[3]);
					}
				},
				_parseAnchors = function(values, p, correlate, prepend) {
					var a = [],
						l, i, p1, p2, p3, tmp;
					if (prepend) {
						values = [prepend].concat(values);
						i = values.length;
						while (--i > -1) {
							if (typeof( (tmp = values[i][p]) ) === "string") if (tmp.charAt(1) === "=") {
								values[i][p] = prepend[p] + Number(tmp.charAt(0) + tmp.substr(2)); //accommodate relative values. Do it inline instead of breaking it out into a function for speed reasons
							}
						}
					}
					l = values.length - 2;
					if (l < 0) {
						a[0] = new Segment(values[0][p], 0, 0, values[(l < -1) ? 0 : 1][p]);
						return a;
					}
					for (i = 0; i < l; i++) {
						p1 = values[i][p];
						p2 = values[i+1][p];
						a[i] = new Segment(p1, 0, 0, p2);
						if (correlate) {
							p3 = values[i+2][p];
							_r1[i] = (_r1[i] || 0) + (p2 - p1) * (p2 - p1);
							_r2[i] = (_r2[i] || 0) + (p3 - p2) * (p3 - p2);
						}
					}
					a[i] = new Segment(values[i][p], 0, 0, values[i+1][p]);
					return a;
				},
				bezierThrough = function(values, curviness, quadratic, basic, correlate, prepend) {
					var obj = {},
						props = [],
						first = prepend || values[0],
						i, p, a, j, r, l, seamless, last;
					correlate = (typeof(correlate) === "string") ? ","+correlate+"," : _correlate;
					if (curviness == null) {
						curviness = 1;
					}
					for (p in values[0]) {
						props.push(p);
					}
					//check to see if the last and first values are identical (well, within 0.05). If so, make seamless by appending the second element to the very end of the values array and the 2nd-to-last element to the very beginning (we'll remove those segments later)
					if (values.length > 1) {
						last = values[values.length - 1];
						seamless = true;
						i = props.length;
						while (--i > -1) {
							p = props[i];
							if (Math.abs(first[p] - last[p]) > 0.05) { //build in a tolerance of +/-0.05 to accommodate rounding errors. For example, if you set an object's position to 4.945, Flash will make it 4.9
								seamless = false;
								break;
							}
						}
						if (seamless) {
							values = values.concat(); //duplicate the array to avoid contaminating the original which the user may be reusing for other tweens
							if (prepend) {
								values.unshift(prepend);
							}
							values.push(values[1]);
							prepend = values[values.length - 3];
						}
					}
					_r1.length = _r2.length = _r3.length = 0;
					i = props.length;
					while (--i > -1) {
						p = props[i];
						_corProps[p] = (correlate.indexOf(","+p+",") !== -1);
						obj[p] = _parseAnchors(values, p, _corProps[p], prepend);
					}
					i = _r1.length;
					while (--i > -1) {
						_r1[i] = Math.sqrt(_r1[i]);
						_r2[i] = Math.sqrt(_r2[i]);
					}
					if (!basic) {
						i = props.length;
						while (--i > -1) {
							if (_corProps[p]) {
								a = obj[props[i]];
								l = a.length - 1;
								for (j = 0; j < l; j++) {
									r = a[j+1].da / _r2[j] + a[j].da / _r1[j];
									_r3[j] = (_r3[j] || 0) + r * r;
								}
							}
						}
						i = _r3.length;
						while (--i > -1) {
							_r3[i] = Math.sqrt(_r3[i]);
						}
					}
					i = props.length;
					j = quadratic ? 4 : 1;
					while (--i > -1) {
						p = props[i];
						a = obj[p];
						_calculateControlPoints(a, curviness, quadratic, basic, _corProps[p]); //this method requires that _parseAnchors() and _setSegmentRatios() ran first so that _r1, _r2, and _r3 values are populated for all properties
						if (seamless) {
							a.splice(0, j);
							a.splice(a.length - j, j);
						}
					}
					return obj;
				},
				_parseBezierData = function(values, type, prepend) {
					type = type || "soft";
					var obj = {},
						inc = (type === "cubic") ? 3 : 2,
						soft = (type === "soft"),
						props = [],
						a, b, c, d, cur, i, j, l, p, cnt, tmp;
					if (soft && prepend) {
						values = [prepend].concat(values);
					}
					if (values == null || values.length < inc + 1) { throw "invalid Bezier data"; }
					for (p in values[0]) {
						props.push(p);
					}
					i = props.length;
					while (--i > -1) {
						p = props[i];
						obj[p] = cur = [];
						cnt = 0;
						l = values.length;
						for (j = 0; j < l; j++) {
							a = (prepend == null) ? values[j][p] : (typeof( (tmp = values[j][p]) ) === "string" && tmp.charAt(1) === "=") ? prepend[p] + Number(tmp.charAt(0) + tmp.substr(2)) : Number(tmp);
							if (soft) if (j > 1) if (j < l - 1) {
								cur[cnt++] = (a + cur[cnt-2]) / 2;
							}
							cur[cnt++] = a;
						}
						l = cnt - inc + 1;
						cnt = 0;
						for (j = 0; j < l; j += inc) {
							a = cur[j];
							b = cur[j+1];
							c = cur[j+2];
							d = (inc === 2) ? 0 : cur[j+3];
							cur[cnt++] = tmp = (inc === 3) ? new Segment(a, b, c, d) : new Segment(a, (2 * b + a) / 3, (2 * b + c) / 3, c);
						}
						cur.length = cnt;
					}
					return obj;
				},
				_addCubicLengths = function(a, steps, resolution) {
					var inc = 1 / resolution,
						j = a.length,
						d, d1, s, da, ca, ba, p, i, inv, bez, index;
					while (--j > -1) {
						bez = a[j];
						s = bez.a;
						da = bez.d - s;
						ca = bez.c - s;
						ba = bez.b - s;
						d = d1 = 0;
						for (i = 1; i <= resolution; i++) {
							p = inc * i;
							inv = 1 - p;
							d = d1 - (d1 = (p * p * da + 3 * inv * (p * ca + inv * ba)) * p);
							index = j * resolution + i - 1;
							steps[index] = (steps[index] || 0) + d * d;
						}
					}
				},
				_parseLengthData = function(obj, resolution) {
					resolution = resolution >> 0 || 6;
					var a = [],
						lengths = [],
						d = 0,
						total = 0,
						threshold = resolution - 1,
						segments = [],
						curLS = [], //current length segments array
						p, i, l, index;
					for (p in obj) {
						_addCubicLengths(obj[p], a, resolution);
					}
					l = a.length;
					for (i = 0; i < l; i++) {
						d += Math.sqrt(a[i]);
						index = i % resolution;
						curLS[index] = d;
						if (index === threshold) {
							total += d;
							index = (i / resolution) >> 0;
							segments[index] = curLS;
							lengths[index] = total;
							d = 0;
							curLS = [];
						}
					}
					return {length:total, lengths:lengths, segments:segments};
				},
	
	
	
				BezierPlugin = _gsScope._gsDefine.plugin({
						propName: "bezier",
						priority: -1,
						version: "1.3.4",
						API: 2,
						global:true,
	
						//gets called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
						init: function(target, vars, tween) {
							this._target = target;
							if (vars instanceof Array) {
								vars = {values:vars};
							}
							this._func = {};
							this._round = {};
							this._props = [];
							this._timeRes = (vars.timeResolution == null) ? 6 : parseInt(vars.timeResolution, 10);
							var values = vars.values || [],
								first = {},
								second = values[0],
								autoRotate = vars.autoRotate || tween.vars.orientToBezier,
								p, isFunc, i, j, prepend;
	
							this._autoRotate = autoRotate ? (autoRotate instanceof Array) ? autoRotate : [["x","y","rotation",((autoRotate === true) ? 0 : Number(autoRotate) || 0)]] : null;
							for (p in second) {
								this._props.push(p);
							}
	
							i = this._props.length;
							while (--i > -1) {
								p = this._props[i];
	
								this._overwriteProps.push(p);
								isFunc = this._func[p] = (typeof(target[p]) === "function");
								first[p] = (!isFunc) ? parseFloat(target[p]) : target[ ((p.indexOf("set") || typeof(target["get" + p.substr(3)]) !== "function") ? p : "get" + p.substr(3)) ]();
								if (!prepend) if (first[p] !== values[0][p]) {
									prepend = first;
								}
							}
							this._beziers = (vars.type !== "cubic" && vars.type !== "quadratic" && vars.type !== "soft") ? bezierThrough(values, isNaN(vars.curviness) ? 1 : vars.curviness, false, (vars.type === "thruBasic"), vars.correlate, prepend) : _parseBezierData(values, vars.type, first);
							this._segCount = this._beziers[p].length;
	
							if (this._timeRes) {
								var ld = _parseLengthData(this._beziers, this._timeRes);
								this._length = ld.length;
								this._lengths = ld.lengths;
								this._segments = ld.segments;
								this._l1 = this._li = this._s1 = this._si = 0;
								this._l2 = this._lengths[0];
								this._curSeg = this._segments[0];
								this._s2 = this._curSeg[0];
								this._prec = 1 / this._curSeg.length;
							}
	
							if ((autoRotate = this._autoRotate)) {
								this._initialRotations = [];
								if (!(autoRotate[0] instanceof Array)) {
									this._autoRotate = autoRotate = [autoRotate];
								}
								i = autoRotate.length;
								while (--i > -1) {
									for (j = 0; j < 3; j++) {
										p = autoRotate[i][j];
										this._func[p] = (typeof(target[p]) === "function") ? target[ ((p.indexOf("set") || typeof(target["get" + p.substr(3)]) !== "function") ? p : "get" + p.substr(3)) ] : false;
									}
									p = autoRotate[i][2];
									this._initialRotations[i] = this._func[p] ? this._func[p].call(this._target) : this._target[p];
								}
							}
							this._startRatio = tween.vars.runBackwards ? 1 : 0; //we determine the starting ratio when the tween inits which is always 0 unless the tween has runBackwards:true (indicating it's a from() tween) in which case it's 1.
							return true;
						},
	
						//called each time the values should be updated, and the ratio gets passed as the only parameter (typically it's a value between 0 and 1, but it can exceed those when using an ease like Elastic.easeOut or Back.easeOut, etc.)
						set: function(v) {
							var segments = this._segCount,
								func = this._func,
								target = this._target,
								notStart = (v !== this._startRatio),
								curIndex, inv, i, p, b, t, val, l, lengths, curSeg;
							if (!this._timeRes) {
								curIndex = (v < 0) ? 0 : (v >= 1) ? segments - 1 : (segments * v) >> 0;
								t = (v - (curIndex * (1 / segments))) * segments;
							} else {
								lengths = this._lengths;
								curSeg = this._curSeg;
								v *= this._length;
								i = this._li;
								//find the appropriate segment (if the currently cached one isn't correct)
								if (v > this._l2 && i < segments - 1) {
									l = segments - 1;
									while (i < l && (this._l2 = lengths[++i]) <= v) {	}
									this._l1 = lengths[i-1];
									this._li = i;
									this._curSeg = curSeg = this._segments[i];
									this._s2 = curSeg[(this._s1 = this._si = 0)];
								} else if (v < this._l1 && i > 0) {
									while (i > 0 && (this._l1 = lengths[--i]) >= v) { }
									if (i === 0 && v < this._l1) {
										this._l1 = 0;
									} else {
										i++;
									}
									this._l2 = lengths[i];
									this._li = i;
									this._curSeg = curSeg = this._segments[i];
									this._s1 = curSeg[(this._si = curSeg.length - 1) - 1] || 0;
									this._s2 = curSeg[this._si];
								}
								curIndex = i;
								//now find the appropriate sub-segment (we split it into the number of pieces that was defined by "precision" and measured each one)
								v -= this._l1;
								i = this._si;
								if (v > this._s2 && i < curSeg.length - 1) {
									l = curSeg.length - 1;
									while (i < l && (this._s2 = curSeg[++i]) <= v) {	}
									this._s1 = curSeg[i-1];
									this._si = i;
								} else if (v < this._s1 && i > 0) {
									while (i > 0 && (this._s1 = curSeg[--i]) >= v) {	}
									if (i === 0 && v < this._s1) {
										this._s1 = 0;
									} else {
										i++;
									}
									this._s2 = curSeg[i];
									this._si = i;
								}
								t = (i + (v - this._s1) / (this._s2 - this._s1)) * this._prec;
							}
							inv = 1 - t;
	
							i = this._props.length;
							while (--i > -1) {
								p = this._props[i];
								b = this._beziers[p][curIndex];
								val = (t * t * b.da + 3 * inv * (t * b.ca + inv * b.ba)) * t + b.a;
								if (this._round[p]) {
									val = Math.round(val);
								}
								if (func[p]) {
									target[p](val);
								} else {
									target[p] = val;
								}
							}
	
							if (this._autoRotate) {
								var ar = this._autoRotate,
									b2, x1, y1, x2, y2, add, conv;
								i = ar.length;
								while (--i > -1) {
									p = ar[i][2];
									add = ar[i][3] || 0;
									conv = (ar[i][4] === true) ? 1 : _RAD2DEG;
									b = this._beziers[ar[i][0]];
									b2 = this._beziers[ar[i][1]];
	
									if (b && b2) { //in case one of the properties got overwritten.
										b = b[curIndex];
										b2 = b2[curIndex];
	
										x1 = b.a + (b.b - b.a) * t;
										x2 = b.b + (b.c - b.b) * t;
										x1 += (x2 - x1) * t;
										x2 += ((b.c + (b.d - b.c) * t) - x2) * t;
	
										y1 = b2.a + (b2.b - b2.a) * t;
										y2 = b2.b + (b2.c - b2.b) * t;
										y1 += (y2 - y1) * t;
										y2 += ((b2.c + (b2.d - b2.c) * t) - y2) * t;
	
										val = notStart ? Math.atan2(y2 - y1, x2 - x1) * conv + add : this._initialRotations[i];
	
										if (func[p]) {
											target[p](val);
										} else {
											target[p] = val;
										}
									}
								}
							}
						}
				}),
				p = BezierPlugin.prototype;
	
	
			BezierPlugin.bezierThrough = bezierThrough;
			BezierPlugin.cubicToQuadratic = cubicToQuadratic;
			BezierPlugin._autoCSS = true; //indicates that this plugin can be inserted into the "css" object using the autoCSS feature of TweenLite
			BezierPlugin.quadraticToCubic = function(a, b, c) {
				return new Segment(a, (2 * b + a) / 3, (2 * b + c) / 3, c);
			};
	
			BezierPlugin._cssRegister = function() {
				var CSSPlugin = _globals.CSSPlugin;
				if (!CSSPlugin) {
					return;
				}
				var _internals = CSSPlugin._internals,
					_parseToProxy = _internals._parseToProxy,
					_setPluginRatio = _internals._setPluginRatio,
					CSSPropTween = _internals.CSSPropTween;
				_internals._registerComplexSpecialProp("bezier", {parser:function(t, e, prop, cssp, pt, plugin) {
					if (e instanceof Array) {
						e = {values:e};
					}
					plugin = new BezierPlugin();
					var values = e.values,
						l = values.length - 1,
						pluginValues = [],
						v = {},
						i, p, data;
					if (l < 0) {
						return pt;
					}
					for (i = 0; i <= l; i++) {
						data = _parseToProxy(t, values[i], cssp, pt, plugin, (l !== i));
						pluginValues[i] = data.end;
					}
					for (p in e) {
						v[p] = e[p]; //duplicate the vars object because we need to alter some things which would cause problems if the user plans to reuse the same vars object for another tween.
					}
					v.values = pluginValues;
					pt = new CSSPropTween(t, "bezier", 0, 0, data.pt, 2);
					pt.data = data;
					pt.plugin = plugin;
					pt.setRatio = _setPluginRatio;
					if (v.autoRotate === 0) {
						v.autoRotate = true;
					}
					if (v.autoRotate && !(v.autoRotate instanceof Array)) {
						i = (v.autoRotate === true) ? 0 : Number(v.autoRotate);
						v.autoRotate = (data.end.left != null) ? [["left","top","rotation",i,false]] : (data.end.x != null) ? [["x","y","rotation",i,false]] : false;
					}
					if (v.autoRotate) {
						if (!cssp._transform) {
							cssp._enableTransforms(false);
						}
						data.autoRotate = cssp._target._gsTransform;
					}
					plugin._onInitTween(data.proxy, v, cssp._tween);
					return pt;
				}});
			};
	
			p._roundProps = function(lookup, value) {
				var op = this._overwriteProps,
					i = op.length;
				while (--i > -1) {
					if (lookup[op[i]] || lookup.bezier || lookup.bezierThrough) {
						this._round[op[i]] = value;
					}
				}
			};
	
			p._kill = function(lookup) {
				var a = this._props,
					p, i;
				for (p in this._beziers) {
					if (p in lookup) {
						delete this._beziers[p];
						delete this._func[p];
						i = a.length;
						while (--i > -1) {
							if (a[i] === p) {
								a.splice(i, 1);
							}
						}
					}
				}
				return this._super._kill.call(this, lookup);
			};
	
		}());
	
	
	
	
	
	
		
		
		
		
		
		
		
		
	/*
	 * ----------------------------------------------------------------
	 * CSSPlugin
	 * ----------------------------------------------------------------
	 */
		_gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin","TweenLite"], function(TweenPlugin, TweenLite) {
	
			/** @constructor **/
			var CSSPlugin = function() {
					TweenPlugin.call(this, "css");
					this._overwriteProps.length = 0;
					this.setRatio = CSSPlugin.prototype.setRatio; //speed optimization (avoid prototype lookup on this "hot" method)
				},
				_globals = _gsScope._gsDefine.globals,
				_hasPriority, //turns true whenever a CSSPropTween instance is created that has a priority other than 0. This helps us discern whether or not we should spend the time organizing the linked list or not after a CSSPlugin's _onInitTween() method is called.
				_suffixMap, //we set this in _onInitTween() each time as a way to have a persistent variable we can use in other methods like _parse() without having to pass it around as a parameter and we keep _parse() decoupled from a particular CSSPlugin instance
				_cs, //computed style (we store this in a shared variable to conserve memory and make minification tighter
				_overwriteProps, //alias to the currently instantiating CSSPlugin's _overwriteProps array. We use this closure in order to avoid having to pass a reference around from method to method and aid in minification.
				_specialProps = {},
				p = CSSPlugin.prototype = new TweenPlugin("css");
	
			p.constructor = CSSPlugin;
			CSSPlugin.version = "1.16.1";
			CSSPlugin.API = 2;
			CSSPlugin.defaultTransformPerspective = 0;
			CSSPlugin.defaultSkewType = "compensated";
			p = "px"; //we'll reuse the "p" variable to keep file size down
			CSSPlugin.suffixMap = {top:p, right:p, bottom:p, left:p, width:p, height:p, fontSize:p, padding:p, margin:p, perspective:p, lineHeight:""};
	
	
			var _numExp = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
				_relNumExp = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
				_valuesExp = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, //finds all the values that begin with numbers or += or -= and then a number. Includes suffixes. We use this to split complex values apart like "1px 5px 20px rgb(255,102,51)"
				_NaNExp = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g, //also allows scientific notation and doesn't kill the leading -/+ in -= and +=
				_suffixExp = /(?:\d|\-|\+|=|#|\.)*/g,
				_opacityExp = /opacity *= *([^)]*)/i,
				_opacityValExp = /opacity:([^;]*)/i,
				_alphaFilterExp = /alpha\(opacity *=.+?\)/i,
				_rgbhslExp = /^(rgb|hsl)/,
				_capsExp = /([A-Z])/g,
				_camelExp = /-([a-z])/gi,
				_urlExp = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, //for pulling out urls from url(...) or url("...") strings (some browsers wrap urls in quotes, some don't when reporting things like backgroundImage)
				_camelFunc = function(s, g) { return g.toUpperCase(); },
				_horizExp = /(?:Left|Right|Width)/i,
				_ieGetMatrixExp = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
				_ieSetMatrixExp = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
				_commasOutsideParenExp = /,(?=[^\)]*(?:\(|$))/gi, //finds any commas that are not within parenthesis
				_DEG2RAD = Math.PI / 180,
				_RAD2DEG = 180 / Math.PI,
				_forcePT = {},
				_doc = document,
				_createElement = function(type) {
					return _doc.createElementNS ? _doc.createElementNS("http://www.w3.org/1999/xhtml", type) : _doc.createElement(type);
				},
				_tempDiv = _createElement("div"),
				_tempImg = _createElement("img"),
				_internals = CSSPlugin._internals = {_specialProps:_specialProps}, //provides a hook to a few internal methods that we need to access from inside other plugins
				_agent = navigator.userAgent,
				_autoRound,
				_reqSafariFix, //we won't apply the Safari transform fix until we actually come across a tween that affects a transform property (to maintain best performance).
	
				_isSafari,
				_isFirefox, //Firefox has a bug that causes 3D transformed elements to randomly disappear unless a repaint is forced after each update on each element.
				_isSafariLT6, //Safari (and Android 4 which uses a flavor of Safari) has a bug that prevents changes to "top" and "left" properties from rendering properly if changed on the same frame as a transform UNLESS we set the element's WebkitBackfaceVisibility to hidden (weird, I know). Doing this for Android 3 and earlier seems to actually cause other problems, though (fun!)
				_ieVers,
				_supportsOpacity = (function() { //we set _isSafari, _ieVers, _isFirefox, and _supportsOpacity all in one function here to reduce file size slightly, especially in the minified version.
					var i = _agent.indexOf("Android"),
						a = _createElement("a");
					_isSafari = (_agent.indexOf("Safari") !== -1 && _agent.indexOf("Chrome") === -1 && (i === -1 || Number(_agent.substr(i+8, 1)) > 3));
					_isSafariLT6 = (_isSafari && (Number(_agent.substr(_agent.indexOf("Version/")+8, 1)) < 6));
					_isFirefox = (_agent.indexOf("Firefox") !== -1);
					if ((/MSIE ([0-9]{1,}[\.0-9]{0,})/).exec(_agent) || (/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/).exec(_agent)) {
						_ieVers = parseFloat( RegExp.$1 );
					}
					if (!a) {
						return false;
					}
					a.style.cssText = "top:1px;opacity:.55;";
					return /^0.55/.test(a.style.opacity);
				}()),
				_getIEOpacity = function(v) {
					return (_opacityExp.test( ((typeof(v) === "string") ? v : (v.currentStyle ? v.currentStyle.filter : v.style.filter) || "") ) ? ( parseFloat( RegExp.$1 ) / 100 ) : 1);
				},
				_log = function(s) {//for logging messages, but in a way that won't throw errors in old versions of IE.
					if (window.console) {
						console.log(s);
					}
				},
	
				_prefixCSS = "", //the non-camelCase vendor prefix like "-o-", "-moz-", "-ms-", or "-webkit-"
				_prefix = "", //camelCase vendor prefix like "O", "ms", "Webkit", or "Moz".
	
				// @private feed in a camelCase property name like "transform" and it will check to see if it is valid as-is or if it needs a vendor prefix. It returns the corrected camelCase property name (i.e. "WebkitTransform" or "MozTransform" or "transform" or null if no such property is found, like if the browser is IE8 or before, "transform" won't be found at all)
				_checkPropPrefix = function(p, e) {
					e = e || _tempDiv;
					var s = e.style,
						a, i;
					if (s[p] !== undefined) {
						return p;
					}
					p = p.charAt(0).toUpperCase() + p.substr(1);
					a = ["O","Moz","ms","Ms","Webkit"];
					i = 5;
					while (--i > -1 && s[a[i]+p] === undefined) { }
					if (i >= 0) {
						_prefix = (i === 3) ? "ms" : a[i];
						_prefixCSS = "-" + _prefix.toLowerCase() + "-";
						return _prefix + p;
					}
					return null;
				},
	
				_getComputedStyle = _doc.defaultView ? _doc.defaultView.getComputedStyle : function() {},
	
				/**
				 * @private Returns the css style for a particular property of an element. For example, to get whatever the current "left" css value for an element with an ID of "myElement", you could do:
				 * var currentLeft = CSSPlugin.getStyle( document.getElementById("myElement"), "left");
				 *
				 * @param {!Object} t Target element whose style property you want to query
				 * @param {!string} p Property name (like "left" or "top" or "marginTop", etc.)
				 * @param {Object=} cs Computed style object. This just provides a way to speed processing if you're going to get several properties on the same element in quick succession - you can reuse the result of the getComputedStyle() call.
				 * @param {boolean=} calc If true, the value will not be read directly from the element's "style" property (if it exists there), but instead the getComputedStyle() result will be used. This can be useful when you want to ensure that the browser itself is interpreting the value.
				 * @param {string=} dflt Default value that should be returned in the place of null, "none", "auto" or "auto auto".
				 * @return {?string} The current property value
				 */
				_getStyle = CSSPlugin.getStyle = function(t, p, cs, calc, dflt) {
					var rv;
					if (!_supportsOpacity) if (p === "opacity") { //several versions of IE don't use the standard "opacity" property - they use things like filter:alpha(opacity=50), so we parse that here.
						return _getIEOpacity(t);
					}
					if (!calc && t.style[p]) {
						rv = t.style[p];
					} else if ((cs = cs || _getComputedStyle(t))) {
						rv = cs[p] || cs.getPropertyValue(p) || cs.getPropertyValue(p.replace(_capsExp, "-$1").toLowerCase());
					} else if (t.currentStyle) {
						rv = t.currentStyle[p];
					}
					return (dflt != null && (!rv || rv === "none" || rv === "auto" || rv === "auto auto")) ? dflt : rv;
				},
	
				/**
				 * @private Pass the target element, the property name, the numeric value, and the suffix (like "%", "em", "px", etc.) and it will spit back the equivalent pixel number.
				 * @param {!Object} t Target element
				 * @param {!string} p Property name (like "left", "top", "marginLeft", etc.)
				 * @param {!number} v Value
				 * @param {string=} sfx Suffix (like "px" or "%" or "em")
				 * @param {boolean=} recurse If true, the call is a recursive one. In some browsers (like IE7/8), occasionally the value isn't accurately reported initially, but if we run the function again it will take effect.
				 * @return {number} value in pixels
				 */
				_convertToPixels = _internals.convertToPixels = function(t, p, v, sfx, recurse) {
					if (sfx === "px" || !sfx) { return v; }
					if (sfx === "auto" || !v) { return 0; }
					var horiz = _horizExp.test(p),
						node = t,
						style = _tempDiv.style,
						neg = (v < 0),
						pix, cache, time;
					if (neg) {
						v = -v;
					}
					if (sfx === "%" && p.indexOf("border") !== -1) {
						pix = (v / 100) * (horiz ? t.clientWidth : t.clientHeight);
					} else {
						style.cssText = "border:0 solid red;position:" + _getStyle(t, "position") + ";line-height:0;";
						if (sfx === "%" || !node.appendChild) {
							node = t.parentNode || _doc.body;
							cache = node._gsCache;
							time = TweenLite.ticker.frame;
							if (cache && horiz && cache.time === time) { //performance optimization: we record the width of elements along with the ticker frame so that we can quickly get it again on the same tick (seems relatively safe to assume it wouldn't change on the same tick)
								return cache.width * v / 100;
							}
							style[(horiz ? "width" : "height")] = v + sfx;
						} else {
							style[(horiz ? "borderLeftWidth" : "borderTopWidth")] = v + sfx;
						}
						node.appendChild(_tempDiv);
						pix = parseFloat(_tempDiv[(horiz ? "offsetWidth" : "offsetHeight")]);
						node.removeChild(_tempDiv);
						if (horiz && sfx === "%" && CSSPlugin.cacheWidths !== false) {
							cache = node._gsCache = node._gsCache || {};
							cache.time = time;
							cache.width = pix / v * 100;
						}
						if (pix === 0 && !recurse) {
							pix = _convertToPixels(t, p, v, sfx, true);
						}
					}
					return neg ? -pix : pix;
				},
				_calculateOffset = _internals.calculateOffset = function(t, p, cs) { //for figuring out "top" or "left" in px when it's "auto". We need to factor in margin with the offsetLeft/offsetTop
					if (_getStyle(t, "position", cs) !== "absolute") { return 0; }
					var dim = ((p === "left") ? "Left" : "Top"),
						v = _getStyle(t, "margin" + dim, cs);
					return t["offset" + dim] - (_convertToPixels(t, p, parseFloat(v), v.replace(_suffixExp, "")) || 0);
				},
	
				// @private returns at object containing ALL of the style properties in camelCase and their associated values.
				_getAllStyles = function(t, cs) {
					var s = {},
						i, tr, p;
					if ((cs = cs || _getComputedStyle(t, null))) {
						if ((i = cs.length)) {
							while (--i > -1) {
								p = cs[i];
								if (p.indexOf("-transform") === -1 || _transformPropCSS === p) { //Some webkit browsers duplicate transform values, one non-prefixed and one prefixed ("transform" and "WebkitTransform"), so we must weed out the extra one here.
									s[p.replace(_camelExp, _camelFunc)] = cs.getPropertyValue(p);
								}
							}
						} else { //some browsers behave differently - cs.length is always 0, so we must do a for...in loop.
							for (i in cs) {
								if (i.indexOf("Transform") === -1 || _transformProp === i) { //Some webkit browsers duplicate transform values, one non-prefixed and one prefixed ("transform" and "WebkitTransform"), so we must weed out the extra one here.
									s[i] = cs[i];
								}
							}
						}
					} else if ((cs = t.currentStyle || t.style)) {
						for (i in cs) {
							if (typeof(i) === "string" && s[i] === undefined) {
								s[i.replace(_camelExp, _camelFunc)] = cs[i];
							}
						}
					}
					if (!_supportsOpacity) {
						s.opacity = _getIEOpacity(t);
					}
					tr = _getTransform(t, cs, false);
					s.rotation = tr.rotation;
					s.skewX = tr.skewX;
					s.scaleX = tr.scaleX;
					s.scaleY = tr.scaleY;
					s.x = tr.x;
					s.y = tr.y;
					if (_supports3D) {
						s.z = tr.z;
						s.rotationX = tr.rotationX;
						s.rotationY = tr.rotationY;
						s.scaleZ = tr.scaleZ;
					}
					if (s.filters) {
						delete s.filters;
					}
					return s;
				},
	
				// @private analyzes two style objects (as returned by _getAllStyles()) and only looks for differences between them that contain tweenable values (like a number or color). It returns an object with a "difs" property which refers to an object containing only those isolated properties and values for tweening, and a "firstMPT" property which refers to the first MiniPropTween instance in a linked list that recorded all the starting values of the different properties so that we can revert to them at the end or beginning of the tween - we don't want the cascading to get messed up. The forceLookup parameter is an optional generic object with properties that should be forced into the results - this is necessary for className tweens that are overwriting others because imagine a scenario where a rollover/rollout adds/removes a class and the user swipes the mouse over the target SUPER fast, thus nothing actually changed yet and the subsequent comparison of the properties would indicate they match (especially when px rounding is taken into consideration), thus no tweening is necessary even though it SHOULD tween and remove those properties after the tween (otherwise the inline styles will contaminate things). See the className SpecialProp code for details.
				_cssDif = function(t, s1, s2, vars, forceLookup) {
					var difs = {},
						style = t.style,
						val, p, mpt;
					for (p in s2) {
						if (p !== "cssText") if (p !== "length") if (isNaN(p)) if (s1[p] !== (val = s2[p]) || (forceLookup && forceLookup[p])) if (p.indexOf("Origin") === -1) if (typeof(val) === "number" || typeof(val) === "string") {
							difs[p] = (val === "auto" && (p === "left" || p === "top")) ? _calculateOffset(t, p) : ((val === "" || val === "auto" || val === "none") && typeof(s1[p]) === "string" && s1[p].replace(_NaNExp, "") !== "") ? 0 : val; //if the ending value is defaulting ("" or "auto"), we check the starting value and if it can be parsed into a number (a string which could have a suffix too, like 700px), then we swap in 0 for "" or "auto" so that things actually tween.
							if (style[p] !== undefined) { //for className tweens, we must remember which properties already existed inline - the ones that didn't should be removed when the tween isn't in progress because they were only introduced to facilitate the transition between classes.
								mpt = new MiniPropTween(style, p, style[p], mpt);
							}
						}
					}
					if (vars) {
						for (p in vars) { //copy properties (except className)
							if (p !== "className") {
								difs[p] = vars[p];
							}
						}
					}
					return {difs:difs, firstMPT:mpt};
				},
				_dimensions = {width:["Left","Right"], height:["Top","Bottom"]},
				_margins = ["marginLeft","marginRight","marginTop","marginBottom"],
	
				/**
				 * @private Gets the width or height of an element
				 * @param {!Object} t Target element
				 * @param {!string} p Property name ("width" or "height")
				 * @param {Object=} cs Computed style object (if one exists). Just a speed optimization.
				 * @return {number} Dimension (in pixels)
				 */
				_getDimension = function(t, p, cs) {
					var v = parseFloat((p === "width") ? t.offsetWidth : t.offsetHeight),
						a = _dimensions[p],
						i = a.length;
					cs = cs || _getComputedStyle(t, null);
					while (--i > -1) {
						v -= parseFloat( _getStyle(t, "padding" + a[i], cs, true) ) || 0;
						v -= parseFloat( _getStyle(t, "border" + a[i] + "Width", cs, true) ) || 0;
					}
					return v;
				},
	
				// @private Parses position-related complex strings like "top left" or "50px 10px" or "70% 20%", etc. which are used for things like transformOrigin or backgroundPosition. Optionally decorates a supplied object (recObj) with the following properties: "ox" (offsetX), "oy" (offsetY), "oxp" (if true, "ox" is a percentage not a pixel value), and "oxy" (if true, "oy" is a percentage not a pixel value)
				_parsePosition = function(v, recObj) {
					if (v == null || v === "" || v === "auto" || v === "auto auto") { //note: Firefox uses "auto auto" as default whereas Chrome uses "auto".
						v = "0 0";
					}
					var a = v.split(" "),
						x = (v.indexOf("left") !== -1) ? "0%" : (v.indexOf("right") !== -1) ? "100%" : a[0],
						y = (v.indexOf("top") !== -1) ? "0%" : (v.indexOf("bottom") !== -1) ? "100%" : a[1];
					if (y == null) {
						y = (x === "center") ? "50%" : "0";
					} else if (y === "center") {
						y = "50%";
					}
					if (x === "center" || (isNaN(parseFloat(x)) && (x + "").indexOf("=") === -1)) { //remember, the user could flip-flop the values and say "bottom center" or "center bottom", etc. "center" is ambiguous because it could be used to describe horizontal or vertical, hence the isNaN(). If there's an "=" sign in the value, it's relative.
						x = "50%";
					}
					v = x + " " + y + ((a.length > 2) ? " " + a[2] : "");
					if (recObj) {
						recObj.oxp = (x.indexOf("%") !== -1);
						recObj.oyp = (y.indexOf("%") !== -1);
						recObj.oxr = (x.charAt(1) === "=");
						recObj.oyr = (y.charAt(1) === "=");
						recObj.ox = parseFloat(x.replace(_NaNExp, ""));
						recObj.oy = parseFloat(y.replace(_NaNExp, ""));
						recObj.v = v;
					}
					return recObj || v;
				},
	
				/**
				 * @private Takes an ending value (typically a string, but can be a number) and a starting value and returns the change between the two, looking for relative value indicators like += and -= and it also ignores suffixes (but make sure the ending value starts with a number or +=/-= and that the starting value is a NUMBER!)
				 * @param {(number|string)} e End value which is typically a string, but could be a number
				 * @param {(number|string)} b Beginning value which is typically a string but could be a number
				 * @return {number} Amount of change between the beginning and ending values (relative values that have a "+=" or "-=" are recognized)
				 */
				_parseChange = function(e, b) {
					return (typeof(e) === "string" && e.charAt(1) === "=") ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : parseFloat(e) - parseFloat(b);
				},
	
				/**
				 * @private Takes a value and a default number, checks if the value is relative, null, or numeric and spits back a normalized number accordingly. Primarily used in the _parseTransform() function.
				 * @param {Object} v Value to be parsed
				 * @param {!number} d Default value (which is also used for relative calculations if "+=" or "-=" is found in the first parameter)
				 * @return {number} Parsed value
				 */
				_parseVal = function(v, d) {
					return (v == null) ? d : (typeof(v) === "string" && v.charAt(1) === "=") ? parseInt(v.charAt(0) + "1", 10) * parseFloat(v.substr(2)) + d : parseFloat(v);
				},
	
				/**
				 * @private Translates strings like "40deg" or "40" or 40rad" or "+=40deg" or "270_short" or "-90_cw" or "+=45_ccw" to a numeric radian angle. Of course a starting/default value must be fed in too so that relative values can be calculated properly.
				 * @param {Object} v Value to be parsed
				 * @param {!number} d Default value (which is also used for relative calculations if "+=" or "-=" is found in the first parameter)
				 * @param {string=} p property name for directionalEnd (optional - only used when the parsed value is directional ("_short", "_cw", or "_ccw" suffix). We need a way to store the uncompensated value so that at the end of the tween, we set it to exactly what was requested with no directional compensation). Property name would be "rotation", "rotationX", or "rotationY"
				 * @param {Object=} directionalEnd An object that will store the raw end values for directional angles ("_short", "_cw", or "_ccw" suffix). We need a way to store the uncompensated value so that at the end of the tween, we set it to exactly what was requested with no directional compensation.
				 * @return {number} parsed angle in radians
				 */
				_parseAngle = function(v, d, p, directionalEnd) {
					var min = 0.000001,
						cap, split, dif, result, isRelative;
					if (v == null) {
						result = d;
					} else if (typeof(v) === "number") {
						result = v;
					} else {
						cap = 360;
						split = v.split("_");
						isRelative = (v.charAt(1) === "=");
						dif = (isRelative ? parseInt(v.charAt(0) + "1", 10) * parseFloat(split[0].substr(2)) : parseFloat(split[0])) * ((v.indexOf("rad") === -1) ? 1 : _RAD2DEG) - (isRelative ? 0 : d);
						if (split.length) {
							if (directionalEnd) {
								directionalEnd[p] = d + dif;
							}
							if (v.indexOf("short") !== -1) {
								dif = dif % cap;
								if (dif !== dif % (cap / 2)) {
									dif = (dif < 0) ? dif + cap : dif - cap;
								}
							}
							if (v.indexOf("_cw") !== -1 && dif < 0) {
								dif = ((dif + cap * 9999999999) % cap) - ((dif / cap) | 0) * cap;
							} else if (v.indexOf("ccw") !== -1 && dif > 0) {
								dif = ((dif - cap * 9999999999) % cap) - ((dif / cap) | 0) * cap;
							}
						}
						result = d + dif;
					}
					if (result < min && result > -min) {
						result = 0;
					}
					return result;
				},
	
				_colorLookup = {aqua:[0,255,255],
					lime:[0,255,0],
					silver:[192,192,192],
					black:[0,0,0],
					maroon:[128,0,0],
					teal:[0,128,128],
					blue:[0,0,255],
					navy:[0,0,128],
					white:[255,255,255],
					fuchsia:[255,0,255],
					olive:[128,128,0],
					yellow:[255,255,0],
					orange:[255,165,0],
					gray:[128,128,128],
					purple:[128,0,128],
					green:[0,128,0],
					red:[255,0,0],
					pink:[255,192,203],
					cyan:[0,255,255],
					transparent:[255,255,255,0]},
	
				_hue = function(h, m1, m2) {
					h = (h < 0) ? h + 1 : (h > 1) ? h - 1 : h;
					return ((((h * 6 < 1) ? m1 + (m2 - m1) * h * 6 : (h < 0.5) ? m2 : (h * 3 < 2) ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * 255) + 0.5) | 0;
				},
	
				/**
				 * @private Parses a color (like #9F0, #FF9900, or rgb(255,51,153)) into an array with 3 elements for red, green, and blue. Also handles rgba() values (splits into array of 4 elements of course)
				 * @param {(string|number)} v The value the should be parsed which could be a string like #9F0 or rgb(255,102,51) or rgba(255,0,0,0.5) or it could be a number like 0xFF00CC or even a named color like red, blue, purple, etc.
				 * @return {Array.<number>} An array containing red, green, and blue (and optionally alpha) in that order.
				 */
				_parseColor = CSSPlugin.parseColor = function(v) {
					var c1, c2, c3, h, s, l;
					if (!v || v === "") {
						return _colorLookup.black;
					}
					if (typeof(v) === "number") {
						return [v >> 16, (v >> 8) & 255, v & 255];
					}
					if (v.charAt(v.length - 1) === ",") { //sometimes a trailing commma is included and we should chop it off (typically from a comma-delimited list of values like a textShadow:"2px 2px 2px blue, 5px 5px 5px rgb(255,0,0)" - in this example "blue," has a trailing comma. We could strip it out inside parseComplex() but we'd need to do it to the beginning and ending values plus it wouldn't provide protection from other potential scenarios like if the user passes in a similar value.
						v = v.substr(0, v.length - 1);
					}
					if (_colorLookup[v]) {
						return _colorLookup[v];
					}
					if (v.charAt(0) === "#") {
						if (v.length === 4) { //for shorthand like #9F0
							c1 = v.charAt(1),
							c2 = v.charAt(2),
							c3 = v.charAt(3);
							v = "#" + c1 + c1 + c2 + c2 + c3 + c3;
						}
						v = parseInt(v.substr(1), 16);
						return [v >> 16, (v >> 8) & 255, v & 255];
					}
					if (v.substr(0, 3) === "hsl") {
						v = v.match(_numExp);
						h = (Number(v[0]) % 360) / 360;
						s = Number(v[1]) / 100;
						l = Number(v[2]) / 100;
						c2 = (l <= 0.5) ? l * (s + 1) : l + s - l * s;
						c1 = l * 2 - c2;
						if (v.length > 3) {
							v[3] = Number(v[3]);
						}
						v[0] = _hue(h + 1 / 3, c1, c2);
						v[1] = _hue(h, c1, c2);
						v[2] = _hue(h - 1 / 3, c1, c2);
						return v;
					}
					v = v.match(_numExp) || _colorLookup.transparent;
					v[0] = Number(v[0]);
					v[1] = Number(v[1]);
					v[2] = Number(v[2]);
					if (v.length > 3) {
						v[3] = Number(v[3]);
					}
					return v;
				},
				_colorExp = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b"; //we'll dynamically build this Regular Expression to conserve file size. After building it, it will be able to find rgb(), rgba(), # (hexadecimal), and named color values like red, blue, purple, etc.
	
			for (p in _colorLookup) {
				_colorExp += "|" + p + "\\b";
			}
			_colorExp = new RegExp(_colorExp+")", "gi");
	
			/**
			 * @private Returns a formatter function that handles taking a string (or number in some cases) and returning a consistently formatted one in terms of delimiters, quantity of values, etc. For example, we may get boxShadow values defined as "0px red" or "0px 0px 10px rgb(255,0,0)" or "0px 0px 20px 20px #F00" and we need to ensure that what we get back is described with 4 numbers and a color. This allows us to feed it into the _parseComplex() method and split the values up appropriately. The neat thing about this _getFormatter() function is that the dflt defines a pattern as well as a default, so for example, _getFormatter("0px 0px 0px 0px #777", true) not only sets the default as 0px for all distances and #777 for the color, but also sets the pattern such that 4 numbers and a color will always get returned.
			 * @param {!string} dflt The default value and pattern to follow. So "0px 0px 0px 0px #777" will ensure that 4 numbers and a color will always get returned.
			 * @param {boolean=} clr If true, the values should be searched for color-related data. For example, boxShadow values typically contain a color whereas borderRadius don't.
			 * @param {boolean=} collapsible If true, the value is a top/left/right/bottom style one that acts like margin or padding, where if only one value is received, it's used for all 4; if 2 are received, the first is duplicated for 3rd (bottom) and the 2nd is duplicated for the 4th spot (left), etc.
			 * @return {Function} formatter function
			 */
			var _getFormatter = function(dflt, clr, collapsible, multi) {
					if (dflt == null) {
						return function(v) {return v;};
					}
					var dColor = clr ? (dflt.match(_colorExp) || [""])[0] : "",
						dVals = dflt.split(dColor).join("").match(_valuesExp) || [],
						pfx = dflt.substr(0, dflt.indexOf(dVals[0])),
						sfx = (dflt.charAt(dflt.length - 1) === ")") ? ")" : "",
						delim = (dflt.indexOf(" ") !== -1) ? " " : ",",
						numVals = dVals.length,
						dSfx = (numVals > 0) ? dVals[0].replace(_numExp, "") : "",
						formatter;
					if (!numVals) {
						return function(v) {return v;};
					}
					if (clr) {
						formatter = function(v) {
							var color, vals, i, a;
							if (typeof(v) === "number") {
								v += dSfx;
							} else if (multi && _commasOutsideParenExp.test(v)) {
								a = v.replace(_commasOutsideParenExp, "|").split("|");
								for (i = 0; i < a.length; i++) {
									a[i] = formatter(a[i]);
								}
								return a.join(",");
							}
							color = (v.match(_colorExp) || [dColor])[0];
							vals = v.split(color).join("").match(_valuesExp) || [];
							i = vals.length;
							if (numVals > i--) {
								while (++i < numVals) {
									vals[i] = collapsible ? vals[(((i - 1) / 2) | 0)] : dVals[i];
								}
							}
							return pfx + vals.join(delim) + delim + color + sfx + (v.indexOf("inset") !== -1 ? " inset" : "");
						};
						return formatter;
	
					}
					formatter = function(v) {
						var vals, a, i;
						if (typeof(v) === "number") {
							v += dSfx;
						} else if (multi && _commasOutsideParenExp.test(v)) {
							a = v.replace(_commasOutsideParenExp, "|").split("|");
							for (i = 0; i < a.length; i++) {
								a[i] = formatter(a[i]);
							}
							return a.join(",");
						}
						vals = v.match(_valuesExp) || [];
						i = vals.length;
						if (numVals > i--) {
							while (++i < numVals) {
								vals[i] = collapsible ? vals[(((i - 1) / 2) | 0)] : dVals[i];
							}
						}
						return pfx + vals.join(delim) + sfx;
					};
					return formatter;
				},
	
				/**
				 * @private returns a formatter function that's used for edge-related values like marginTop, marginLeft, paddingBottom, paddingRight, etc. Just pass a comma-delimited list of property names related to the edges.
				 * @param {!string} props a comma-delimited list of property names in order from top to left, like "marginTop,marginRight,marginBottom,marginLeft"
				 * @return {Function} a formatter function
				 */
				_getEdgeParser = function(props) {
					props = props.split(",");
					return function(t, e, p, cssp, pt, plugin, vars) {
						var a = (e + "").split(" "),
							i;
						vars = {};
						for (i = 0; i < 4; i++) {
							vars[props[i]] = a[i] = a[i] || a[(((i - 1) / 2) >> 0)];
						}
						return cssp.parse(t, vars, pt, plugin);
					};
				},
	
				// @private used when other plugins must tween values first, like BezierPlugin or ThrowPropsPlugin, etc. That plugin's setRatio() gets called first so that the values are updated, and then we loop through the MiniPropTweens  which handle copying the values into their appropriate slots so that they can then be applied correctly in the main CSSPlugin setRatio() method. Remember, we typically create a proxy object that has a bunch of uniquely-named properties that we feed to the sub-plugin and it does its magic normally, and then we must interpret those values and apply them to the css because often numbers must get combined/concatenated, suffixes added, etc. to work with css, like boxShadow could have 4 values plus a color.
				_setPluginRatio = _internals._setPluginRatio = function(v) {
					this.plugin.setRatio(v);
					var d = this.data,
						proxy = d.proxy,
						mpt = d.firstMPT,
						min = 0.000001,
						val, pt, i, str;
					while (mpt) {
						val = proxy[mpt.v];
						if (mpt.r) {
							val = Math.round(val);
						} else if (val < min && val > -min) {
							val = 0;
						}
						mpt.t[mpt.p] = val;
						mpt = mpt._next;
					}
					if (d.autoRotate) {
						d.autoRotate.rotation = proxy.rotation;
					}
					//at the end, we must set the CSSPropTween's "e" (end) value dynamically here because that's what is used in the final setRatio() method.
					if (v === 1) {
						mpt = d.firstMPT;
						while (mpt) {
							pt = mpt.t;
							if (!pt.type) {
								pt.e = pt.s + pt.xs0;
							} else if (pt.type === 1) {
								str = pt.xs0 + pt.s + pt.xs1;
								for (i = 1; i < pt.l; i++) {
									str += pt["xn"+i] + pt["xs"+(i+1)];
								}
								pt.e = str;
							}
							mpt = mpt._next;
						}
					}
				},
	
				/**
				 * @private @constructor Used by a few SpecialProps to hold important values for proxies. For example, _parseToProxy() creates a MiniPropTween instance for each property that must get tweened on the proxy, and we record the original property name as well as the unique one we create for the proxy, plus whether or not the value needs to be rounded plus the original value.
				 * @param {!Object} t target object whose property we're tweening (often a CSSPropTween)
				 * @param {!string} p property name
				 * @param {(number|string|object)} v value
				 * @param {MiniPropTween=} next next MiniPropTween in the linked list
				 * @param {boolean=} r if true, the tweened value should be rounded to the nearest integer
				 */
				MiniPropTween = function(t, p, v, next, r) {
					this.t = t;
					this.p = p;
					this.v = v;
					this.r = r;
					if (next) {
						next._prev = this;
						this._next = next;
					}
				},
	
				/**
				 * @private Most other plugins (like BezierPlugin and ThrowPropsPlugin and others) can only tween numeric values, but CSSPlugin must accommodate special values that have a bunch of extra data (like a suffix or strings between numeric values, etc.). For example, boxShadow has values like "10px 10px 20px 30px rgb(255,0,0)" which would utterly confuse other plugins. This method allows us to split that data apart and grab only the numeric data and attach it to uniquely-named properties of a generic proxy object ({}) so that we can feed that to virtually any plugin to have the numbers tweened. However, we must also keep track of which properties from the proxy go with which CSSPropTween values and instances. So we create a linked list of MiniPropTweens. Each one records a target (the original CSSPropTween), property (like "s" or "xn1" or "xn2") that we're tweening and the unique property name that was used for the proxy (like "boxShadow_xn1" and "boxShadow_xn2") and whether or not they need to be rounded. That way, in the _setPluginRatio() method we can simply copy the values over from the proxy to the CSSPropTween instance(s). Then, when the main CSSPlugin setRatio() method runs and applies the CSSPropTween values accordingly, they're updated nicely. So the external plugin tweens the numbers, _setPluginRatio() copies them over, and setRatio() acts normally, applying css-specific values to the element.
				 * This method returns an object that has the following properties:
				 *  - proxy: a generic object containing the starting values for all the properties that will be tweened by the external plugin.  This is what we feed to the external _onInitTween() as the target
				 *  - end: a generic object containing the ending values for all the properties that will be tweened by the external plugin. This is what we feed to the external plugin's _onInitTween() as the destination values
				 *  - firstMPT: the first MiniPropTween in the linked list
				 *  - pt: the first CSSPropTween in the linked list that was created when parsing. If shallow is true, this linked list will NOT attach to the one passed into the _parseToProxy() as the "pt" (4th) parameter.
				 * @param {!Object} t target object to be tweened
				 * @param {!(Object|string)} vars the object containing the information about the tweening values (typically the end/destination values) that should be parsed
				 * @param {!CSSPlugin} cssp The CSSPlugin instance
				 * @param {CSSPropTween=} pt the next CSSPropTween in the linked list
				 * @param {TweenPlugin=} plugin the external TweenPlugin instance that will be handling tweening the numeric values
				 * @param {boolean=} shallow if true, the resulting linked list from the parse will NOT be attached to the CSSPropTween that was passed in as the "pt" (4th) parameter.
				 * @return An object containing the following properties: proxy, end, firstMPT, and pt (see above for descriptions)
				 */
				_parseToProxy = _internals._parseToProxy = function(t, vars, cssp, pt, plugin, shallow) {
					var bpt = pt,
						start = {},
						end = {},
						transform = cssp._transform,
						oldForce = _forcePT,
						i, p, xp, mpt, firstPT;
					cssp._transform = null;
					_forcePT = vars;
					pt = firstPT = cssp.parse(t, vars, pt, plugin);
					_forcePT = oldForce;
					//break off from the linked list so the new ones are isolated.
					if (shallow) {
						cssp._transform = transform;
						if (bpt) {
							bpt._prev = null;
							if (bpt._prev) {
								bpt._prev._next = null;
							}
						}
					}
					while (pt && pt !== bpt) {
						if (pt.type <= 1) {
							p = pt.p;
							end[p] = pt.s + pt.c;
							start[p] = pt.s;
							if (!shallow) {
								mpt = new MiniPropTween(pt, "s", p, mpt, pt.r);
								pt.c = 0;
							}
							if (pt.type === 1) {
								i = pt.l;
								while (--i > 0) {
									xp = "xn" + i;
									p = pt.p + "_" + xp;
									end[p] = pt.data[xp];
									start[p] = pt[xp];
									if (!shallow) {
										mpt = new MiniPropTween(pt, xp, p, mpt, pt.rxp[xp]);
									}
								}
							}
						}
						pt = pt._next;
					}
					return {proxy:start, end:end, firstMPT:mpt, pt:firstPT};
				},
	
	
	
				/**
				 * @constructor Each property that is tweened has at least one CSSPropTween associated with it. These instances store important information like the target, property, starting value, amount of change, etc. They can also optionally have a number of "extra" strings and numeric values named xs1, xn1, xs2, xn2, xs3, xn3, etc. where "s" indicates string and "n" indicates number. These can be pieced together in a complex-value tween (type:1) that has alternating types of data like a string, number, string, number, etc. For example, boxShadow could be "5px 5px 8px rgb(102, 102, 51)". In that value, there are 6 numbers that may need to tween and then pieced back together into a string again with spaces, suffixes, etc. xs0 is special in that it stores the suffix for standard (type:0) tweens, -OR- the first string (prefix) in a complex-value (type:1) CSSPropTween -OR- it can be the non-tweening value in a type:-1 CSSPropTween. We do this to conserve memory.
				 * CSSPropTweens have the following optional properties as well (not defined through the constructor):
				 *  - l: Length in terms of the number of extra properties that the CSSPropTween has (default: 0). For example, for a boxShadow we may need to tween 5 numbers in which case l would be 5; Keep in mind that the start/end values for the first number that's tweened are always stored in the s and c properties to conserve memory. All additional values thereafter are stored in xn1, xn2, etc.
				 *  - xfirst: The first instance of any sub-CSSPropTweens that are tweening properties of this instance. For example, we may split up a boxShadow tween so that there's a main CSSPropTween of type:1 that has various xs* and xn* values associated with the h-shadow, v-shadow, blur, color, etc. Then we spawn a CSSPropTween for each of those that has a higher priority and runs BEFORE the main CSSPropTween so that the values are all set by the time it needs to re-assemble them. The xfirst gives us an easy way to identify the first one in that chain which typically ends at the main one (because they're all prepende to the linked list)
				 *  - plugin: The TweenPlugin instance that will handle the tweening of any complex values. For example, sometimes we don't want to use normal subtweens (like xfirst refers to) to tween the values - we might want ThrowPropsPlugin or BezierPlugin some other plugin to do the actual tweening, so we create a plugin instance and store a reference here. We need this reference so that if we get a request to round values or disable a tween, we can pass along that request.
				 *  - data: Arbitrary data that needs to be stored with the CSSPropTween. Typically if we're going to have a plugin handle the tweening of a complex-value tween, we create a generic object that stores the END values that we're tweening to and the CSSPropTween's xs1, xs2, etc. have the starting values. We store that object as data. That way, we can simply pass that object to the plugin and use the CSSPropTween as the target.
				 *  - setRatio: Only used for type:2 tweens that require custom functionality. In this case, we call the CSSPropTween's setRatio() method and pass the ratio each time the tween updates. This isn't quite as efficient as doing things directly in the CSSPlugin's setRatio() method, but it's very convenient and flexible.
				 * @param {!Object} t Target object whose property will be tweened. Often a DOM element, but not always. It could be anything.
				 * @param {string} p Property to tween (name). For example, to tween element.width, p would be "width".
				 * @param {number} s Starting numeric value
				 * @param {number} c Change in numeric value over the course of the entire tween. For example, if element.width starts at 5 and should end at 100, c would be 95.
				 * @param {CSSPropTween=} next The next CSSPropTween in the linked list. If one is defined, we will define its _prev as the new instance, and the new instance's _next will be pointed at it.
				 * @param {number=} type The type of CSSPropTween where -1 = a non-tweening value, 0 = a standard simple tween, 1 = a complex value (like one that has multiple numbers in a comma- or space-delimited string like border:"1px solid red"), and 2 = one that uses a custom setRatio function that does all of the work of applying the values on each update.
				 * @param {string=} n Name of the property that should be used for overwriting purposes which is typically the same as p but not always. For example, we may need to create a subtween for the 2nd part of a "clip:rect(...)" tween in which case "p" might be xs1 but "n" is still "clip"
				 * @param {boolean=} r If true, the value(s) should be rounded
				 * @param {number=} pr Priority in the linked list order. Higher priority CSSPropTweens will be updated before lower priority ones. The default priority is 0.
				 * @param {string=} b Beginning value. We store this to ensure that it is EXACTLY what it was when the tween began without any risk of interpretation issues.
				 * @param {string=} e Ending value. We store this to ensure that it is EXACTLY what the user defined at the end of the tween without any risk of interpretation issues.
				 */
				CSSPropTween = _internals.CSSPropTween = function(t, p, s, c, next, type, n, r, pr, b, e) {
					this.t = t; //target
					this.p = p; //property
					this.s = s; //starting value
					this.c = c; //change value
					this.n = n || p; //name that this CSSPropTween should be associated to (usually the same as p, but not always - n is what overwriting looks at)
					if (!(t instanceof CSSPropTween)) {
						_overwriteProps.push(this.n);
					}
					this.r = r; //round (boolean)
					this.type = type || 0; //0 = normal tween, -1 = non-tweening (in which case xs0 will be applied to the target's property, like tp.t[tp.p] = tp.xs0), 1 = complex-value SpecialProp, 2 = custom setRatio() that does all the work
					if (pr) {
						this.pr = pr;
						_hasPriority = true;
					}
					this.b = (b === undefined) ? s : b;
					this.e = (e === undefined) ? s + c : e;
					if (next) {
						this._next = next;
						next._prev = this;
					}
				},
	
				/**
				 * Takes a target, the beginning value and ending value (as strings) and parses them into a CSSPropTween (possibly with child CSSPropTweens) that accommodates multiple numbers, colors, comma-delimited values, etc. For example:
				 * sp.parseComplex(element, "boxShadow", "5px 10px 20px rgb(255,102,51)", "0px 0px 0px red", true, "0px 0px 0px rgb(0,0,0,0)", pt);
				 * It will walk through the beginning and ending values (which should be in the same format with the same number and type of values) and figure out which parts are numbers, what strings separate the numeric/tweenable values, and then create the CSSPropTweens accordingly. If a plugin is defined, no child CSSPropTweens will be created. Instead, the ending values will be stored in the "data" property of the returned CSSPropTween like: {s:-5, xn1:-10, xn2:-20, xn3:255, xn4:0, xn5:0} so that it can be fed to any other plugin and it'll be plain numeric tweens but the recomposition of the complex value will be handled inside CSSPlugin's setRatio().
				 * If a setRatio is defined, the type of the CSSPropTween will be set to 2 and recomposition of the values will be the responsibility of that method.
				 *
				 * @param {!Object} t Target whose property will be tweened
				 * @param {!string} p Property that will be tweened (its name, like "left" or "backgroundColor" or "boxShadow")
				 * @param {string} b Beginning value
				 * @param {string} e Ending value
				 * @param {boolean} clrs If true, the value could contain a color value like "rgb(255,0,0)" or "#F00" or "red". The default is false, so no colors will be recognized (a performance optimization)
				 * @param {(string|number|Object)} dflt The default beginning value that should be used if no valid beginning value is defined or if the number of values inside the complex beginning and ending values don't match
				 * @param {?CSSPropTween} pt CSSPropTween instance that is the current head of the linked list (we'll prepend to this).
				 * @param {number=} pr Priority in the linked list order. Higher priority properties will be updated before lower priority ones. The default priority is 0.
				 * @param {TweenPlugin=} plugin If a plugin should handle the tweening of extra properties, pass the plugin instance here. If one is defined, then NO subtweens will be created for any extra properties (the properties will be created - just not additional CSSPropTween instances to tween them) because the plugin is expected to do so. However, the end values WILL be populated in the "data" property, like {s:100, xn1:50, xn2:300}
				 * @param {function(number)=} setRatio If values should be set in a custom function instead of being pieced together in a type:1 (complex-value) CSSPropTween, define that custom function here.
				 * @return {CSSPropTween} The first CSSPropTween in the linked list which includes the new one(s) added by the parseComplex() call.
				 */
				_parseComplex = CSSPlugin.parseComplex = function(t, p, b, e, clrs, dflt, pt, pr, plugin, setRatio) {
					//DEBUG: _log("parseComplex: "+p+", b: "+b+", e: "+e);
					b = b || dflt || "";
					pt = new CSSPropTween(t, p, 0, 0, pt, (setRatio ? 2 : 1), null, false, pr, b, e);
					e += ""; //ensures it's a string
					var ba = b.split(", ").join(",").split(" "), //beginning array
						ea = e.split(", ").join(",").split(" "), //ending array
						l = ba.length,
						autoRound = (_autoRound !== false),
						i, xi, ni, bv, ev, bnums, enums, bn, rgba, temp, cv, str;
					if (e.indexOf(",") !== -1 || b.indexOf(",") !== -1) {
						ba = ba.join(" ").replace(_commasOutsideParenExp, ", ").split(" ");
						ea = ea.join(" ").replace(_commasOutsideParenExp, ", ").split(" ");
						l = ba.length;
					}
					if (l !== ea.length) {
						//DEBUG: _log("mismatched formatting detected on " + p + " (" + b + " vs " + e + ")");
						ba = (dflt || "").split(" ");
						l = ba.length;
					}
					pt.plugin = plugin;
					pt.setRatio = setRatio;
					for (i = 0; i < l; i++) {
						bv = ba[i];
						ev = ea[i];
						bn = parseFloat(bv);
						//if the value begins with a number (most common). It's fine if it has a suffix like px
						if (bn || bn === 0) {
							pt.appendXtra("", bn, _parseChange(ev, bn), ev.replace(_relNumExp, ""), (autoRound && ev.indexOf("px") !== -1), true);
	
						//if the value is a color
						} else if (clrs && (bv.charAt(0) === "#" || _colorLookup[bv] || _rgbhslExp.test(bv))) {
							str = ev.charAt(ev.length - 1) === "," ? ")," : ")"; //if there's a comma at the end, retain it.
							bv = _parseColor(bv);
							ev = _parseColor(ev);
							rgba = (bv.length + ev.length > 6);
							if (rgba && !_supportsOpacity && ev[3] === 0) { //older versions of IE don't support rgba(), so if the destination alpha is 0, just use "transparent" for the end color
								pt["xs" + pt.l] += pt.l ? " transparent" : "transparent";
								pt.e = pt.e.split(ea[i]).join("transparent");
							} else {
								if (!_supportsOpacity) { //old versions of IE don't support rgba().
									rgba = false;
								}
								pt.appendXtra((rgba ? "rgba(" : "rgb("), bv[0], ev[0] - bv[0], ",", true, true)
									.appendXtra("", bv[1], ev[1] - bv[1], ",", true)
									.appendXtra("", bv[2], ev[2] - bv[2], (rgba ? "," : str), true);
								if (rgba) {
									bv = (bv.length < 4) ? 1 : bv[3];
									pt.appendXtra("", bv, ((ev.length < 4) ? 1 : ev[3]) - bv, str, false);
								}
							}
	
						} else {
							bnums = bv.match(_numExp); //gets each group of numbers in the beginning value string and drops them into an array
	
							//if no number is found, treat it as a non-tweening value and just append the string to the current xs.
							if (!bnums) {
								pt["xs" + pt.l] += pt.l ? " " + bv : bv;
	
							//loop through all the numbers that are found and construct the extra values on the pt.
							} else {
								enums = ev.match(_relNumExp); //get each group of numbers in the end value string and drop them into an array. We allow relative values too, like +=50 or -=.5
								if (!enums || enums.length !== bnums.length) {
									//DEBUG: _log("mismatched formatting detected on " + p + " (" + b + " vs " + e + ")");
									return pt;
								}
								ni = 0;
								for (xi = 0; xi < bnums.length; xi++) {
									cv = bnums[xi];
									temp = bv.indexOf(cv, ni);
									pt.appendXtra(bv.substr(ni, temp - ni), Number(cv), _parseChange(enums[xi], cv), "", (autoRound && bv.substr(temp + cv.length, 2) === "px"), (xi === 0));
									ni = temp + cv.length;
								}
								pt["xs" + pt.l] += bv.substr(ni);
							}
						}
					}
					//if there are relative values ("+=" or "-=" prefix), we need to adjust the ending value to eliminate the prefixes and combine the values properly.
					if (e.indexOf("=") !== -1) if (pt.data) {
						str = pt.xs0 + pt.data.s;
						for (i = 1; i < pt.l; i++) {
							str += pt["xs" + i] + pt.data["xn" + i];
						}
						pt.e = str + pt["xs" + i];
					}
					if (!pt.l) {
						pt.type = -1;
						pt.xs0 = pt.e;
					}
					return pt.xfirst || pt;
				},
				i = 9;
	
	
			p = CSSPropTween.prototype;
			p.l = p.pr = 0; //length (number of extra properties like xn1, xn2, xn3, etc.
			while (--i > 0) {
				p["xn" + i] = 0;
				p["xs" + i] = "";
			}
			p.xs0 = "";
			p._next = p._prev = p.xfirst = p.data = p.plugin = p.setRatio = p.rxp = null;
	
	
			/**
			 * Appends and extra tweening value to a CSSPropTween and automatically manages any prefix and suffix strings. The first extra value is stored in the s and c of the main CSSPropTween instance, but thereafter any extras are stored in the xn1, xn2, xn3, etc. The prefixes and suffixes are stored in the xs0, xs1, xs2, etc. properties. For example, if I walk through a clip value like "rect(10px, 5px, 0px, 20px)", the values would be stored like this:
			 * xs0:"rect(", s:10, xs1:"px, ", xn1:5, xs2:"px, ", xn2:0, xs3:"px, ", xn3:20, xn4:"px)"
			 * And they'd all get joined together when the CSSPlugin renders (in the setRatio() method).
			 * @param {string=} pfx Prefix (if any)
			 * @param {!number} s Starting value
			 * @param {!number} c Change in numeric value over the course of the entire tween. For example, if the start is 5 and the end is 100, the change would be 95.
			 * @param {string=} sfx Suffix (if any)
			 * @param {boolean=} r Round (if true).
			 * @param {boolean=} pad If true, this extra value should be separated by the previous one by a space. If there is no previous extra and pad is true, it will automatically drop the space.
			 * @return {CSSPropTween} returns itself so that multiple methods can be chained together.
			 */
			p.appendXtra = function(pfx, s, c, sfx, r, pad) {
				var pt = this,
					l = pt.l;
				pt["xs" + l] += (pad && l) ? " " + pfx : pfx || "";
				if (!c) if (l !== 0 && !pt.plugin) { //typically we'll combine non-changing values right into the xs to optimize performance, but we don't combine them when there's a plugin that will be tweening the values because it may depend on the values being split apart, like for a bezier, if a value doesn't change between the first and second iteration but then it does on the 3rd, we'll run into trouble because there's no xn slot for that value!
					pt["xs" + l] += s + (sfx || "");
					return pt;
				}
				pt.l++;
				pt.type = pt.setRatio ? 2 : 1;
				pt["xs" + pt.l] = sfx || "";
				if (l > 0) {
					pt.data["xn" + l] = s + c;
					pt.rxp["xn" + l] = r; //round extra property (we need to tap into this in the _parseToProxy() method)
					pt["xn" + l] = s;
					if (!pt.plugin) {
						pt.xfirst = new CSSPropTween(pt, "xn" + l, s, c, pt.xfirst || pt, 0, pt.n, r, pt.pr);
						pt.xfirst.xs0 = 0; //just to ensure that the property stays numeric which helps modern browsers speed up processing. Remember, in the setRatio() method, we do pt.t[pt.p] = val + pt.xs0 so if pt.xs0 is "" (the default), it'll cast the end value as a string. When a property is a number sometimes and a string sometimes, it prevents the compiler from locking in the data type, slowing things down slightly.
					}
					return pt;
				}
				pt.data = {s:s + c};
				pt.rxp = {};
				pt.s = s;
				pt.c = c;
				pt.r = r;
				return pt;
			};
	
			/**
			 * @constructor A SpecialProp is basically a css property that needs to be treated in a non-standard way, like if it may contain a complex value like boxShadow:"5px 10px 15px rgb(255, 102, 51)" or if it is associated with another plugin like ThrowPropsPlugin or BezierPlugin. Every SpecialProp is associated with a particular property name like "boxShadow" or "throwProps" or "bezier" and it will intercept those values in the vars object that's passed to the CSSPlugin and handle them accordingly.
			 * @param {!string} p Property name (like "boxShadow" or "throwProps")
			 * @param {Object=} options An object containing any of the following configuration options:
			 *                      - defaultValue: the default value
			 *                      - parser: A function that should be called when the associated property name is found in the vars. This function should return a CSSPropTween instance and it should ensure that it is properly inserted into the linked list. It will receive 4 paramters: 1) The target, 2) The value defined in the vars, 3) The CSSPlugin instance (whose _firstPT should be used for the linked list), and 4) A computed style object if one was calculated (this is a speed optimization that allows retrieval of starting values quicker)
			 *                      - formatter: a function that formats any value received for this special property (for example, boxShadow could take "5px 5px red" and format it to "5px 5px 0px 0px red" so that both the beginning and ending values have a common order and quantity of values.)
			 *                      - prefix: if true, we'll determine whether or not this property requires a vendor prefix (like Webkit or Moz or ms or O)
			 *                      - color: set this to true if the value for this SpecialProp may contain color-related values like rgb(), rgba(), etc.
			 *                      - priority: priority in the linked list order. Higher priority SpecialProps will be updated before lower priority ones. The default priority is 0.
			 *                      - multi: if true, the formatter should accommodate a comma-delimited list of values, like boxShadow could have multiple boxShadows listed out.
			 *                      - collapsible: if true, the formatter should treat the value like it's a top/right/bottom/left value that could be collapsed, like "5px" would apply to all, "5px, 10px" would use 5px for top/bottom and 10px for right/left, etc.
			 *                      - keyword: a special keyword that can [optionally] be found inside the value (like "inset" for boxShadow). This allows us to validate beginning/ending values to make sure they match (if the keyword is found in one, it'll be added to the other for consistency by default).
			 */
			var SpecialProp = function(p, options) {
					options = options || {};
					this.p = options.prefix ? _checkPropPrefix(p) || p : p;
					_specialProps[p] = _specialProps[this.p] = this;
					this.format = options.formatter || _getFormatter(options.defaultValue, options.color, options.collapsible, options.multi);
					if (options.parser) {
						this.parse = options.parser;
					}
					this.clrs = options.color;
					this.multi = options.multi;
					this.keyword = options.keyword;
					this.dflt = options.defaultValue;
					this.pr = options.priority || 0;
				},
	
				//shortcut for creating a new SpecialProp that can accept multiple properties as a comma-delimited list (helps minification). dflt can be an array for multiple values (we don't do a comma-delimited list because the default value may contain commas, like rect(0px,0px,0px,0px)). We attach this method to the SpecialProp class/object instead of using a private _createSpecialProp() method so that we can tap into it externally if necessary, like from another plugin.
				_registerComplexSpecialProp = _internals._registerComplexSpecialProp = function(p, options, defaults) {
					if (typeof(options) !== "object") {
						options = {parser:defaults}; //to make backwards compatible with older versions of BezierPlugin and ThrowPropsPlugin
					}
					var a = p.split(","),
						d = options.defaultValue,
						i, temp;
					defaults = defaults || [d];
					for (i = 0; i < a.length; i++) {
						options.prefix = (i === 0 && options.prefix);
						options.defaultValue = defaults[i] || d;
						temp = new SpecialProp(a[i], options);
					}
				},
	
				//creates a placeholder special prop for a plugin so that the property gets caught the first time a tween of it is attempted, and at that time it makes the plugin register itself, thus taking over for all future tweens of that property. This allows us to not mandate that things load in a particular order and it also allows us to log() an error that informs the user when they attempt to tween an external plugin-related property without loading its .js file.
				_registerPluginProp = function(p) {
					if (!_specialProps[p]) {
						var pluginName = p.charAt(0).toUpperCase() + p.substr(1) + "Plugin";
						_registerComplexSpecialProp(p, {parser:function(t, e, p, cssp, pt, plugin, vars) {
							var pluginClass = _globals.com.greensock.plugins[pluginName];
							if (!pluginClass) {
								_log("Error: " + pluginName + " js file not loaded.");
								return pt;
							}
							pluginClass._cssRegister();
							return _specialProps[p].parse(t, e, p, cssp, pt, plugin, vars);
						}});
					}
				};
	
	
			p = SpecialProp.prototype;
	
			/**
			 * Alias for _parseComplex() that automatically plugs in certain values for this SpecialProp, like its property name, whether or not colors should be sensed, the default value, and priority. It also looks for any keyword that the SpecialProp defines (like "inset" for boxShadow) and ensures that the beginning and ending values have the same number of values for SpecialProps where multi is true (like boxShadow and textShadow can have a comma-delimited list)
			 * @param {!Object} t target element
			 * @param {(string|number|object)} b beginning value
			 * @param {(string|number|object)} e ending (destination) value
			 * @param {CSSPropTween=} pt next CSSPropTween in the linked list
			 * @param {TweenPlugin=} plugin If another plugin will be tweening the complex value, that TweenPlugin instance goes here.
			 * @param {function=} setRatio If a custom setRatio() method should be used to handle this complex value, that goes here.
			 * @return {CSSPropTween=} First CSSPropTween in the linked list
			 */
			p.parseComplex = function(t, b, e, pt, plugin, setRatio) {
				var kwd = this.keyword,
					i, ba, ea, l, bi, ei;
				//if this SpecialProp's value can contain a comma-delimited list of values (like boxShadow or textShadow), we must parse them in a special way, and look for a keyword (like "inset" for boxShadow) and ensure that the beginning and ending BOTH have it if the end defines it as such. We also must ensure that there are an equal number of values specified (we can't tween 1 boxShadow to 3 for example)
				if (this.multi) if (_commasOutsideParenExp.test(e) || _commasOutsideParenExp.test(b)) {
					ba = b.replace(_commasOutsideParenExp, "|").split("|");
					ea = e.replace(_commasOutsideParenExp, "|").split("|");
				} else if (kwd) {
					ba = [b];
					ea = [e];
				}
				if (ea) {
					l = (ea.length > ba.length) ? ea.length : ba.length;
					for (i = 0; i < l; i++) {
						b = ba[i] = ba[i] || this.dflt;
						e = ea[i] = ea[i] || this.dflt;
						if (kwd) {
							bi = b.indexOf(kwd);
							ei = e.indexOf(kwd);
							if (bi !== ei) {
								if (ei === -1) { //if the keyword isn't in the end value, remove it from the beginning one.
									ba[i] = ba[i].split(kwd).join("");
								} else if (bi === -1) { //if the keyword isn't in the beginning, add it.
									ba[i] += " " + kwd;
								}
							}
						}
					}
					b = ba.join(", ");
					e = ea.join(", ");
				}
				return _parseComplex(t, this.p, b, e, this.clrs, this.dflt, pt, this.pr, plugin, setRatio);
			};
	
			/**
			 * Accepts a target and end value and spits back a CSSPropTween that has been inserted into the CSSPlugin's linked list and conforms with all the conventions we use internally, like type:-1, 0, 1, or 2, setting up any extra property tweens, priority, etc. For example, if we have a boxShadow SpecialProp and call:
			 * this._firstPT = sp.parse(element, "5px 10px 20px rgb(2550,102,51)", "boxShadow", this);
			 * It should figure out the starting value of the element's boxShadow, compare it to the provided end value and create all the necessary CSSPropTweens of the appropriate types to tween the boxShadow. The CSSPropTween that gets spit back should already be inserted into the linked list (the 4th parameter is the current head, so prepend to that).
			 * @param {!Object} t Target object whose property is being tweened
			 * @param {Object} e End value as provided in the vars object (typically a string, but not always - like a throwProps would be an object).
			 * @param {!string} p Property name
			 * @param {!CSSPlugin} cssp The CSSPlugin instance that should be associated with this tween.
			 * @param {?CSSPropTween} pt The CSSPropTween that is the current head of the linked list (we'll prepend to it)
			 * @param {TweenPlugin=} plugin If a plugin will be used to tween the parsed value, this is the plugin instance.
			 * @param {Object=} vars Original vars object that contains the data for parsing.
			 * @return {CSSPropTween} The first CSSPropTween in the linked list which includes the new one(s) added by the parse() call.
			 */
			p.parse = function(t, e, p, cssp, pt, plugin, vars) {
				return this.parseComplex(t.style, this.format(_getStyle(t, this.p, _cs, false, this.dflt)), this.format(e), pt, plugin);
			};
	
			/**
			 * Registers a special property that should be intercepted from any "css" objects defined in tweens. This allows you to handle them however you want without CSSPlugin doing it for you. The 2nd parameter should be a function that accepts 3 parameters:
			 *  1) Target object whose property should be tweened (typically a DOM element)
			 *  2) The end/destination value (could be a string, number, object, or whatever you want)
			 *  3) The tween instance (you probably don't need to worry about this, but it can be useful for looking up information like the duration)
			 *
			 * Then, your function should return a function which will be called each time the tween gets rendered, passing a numeric "ratio" parameter to your function that indicates the change factor (usually between 0 and 1). For example:
			 *
			 * CSSPlugin.registerSpecialProp("myCustomProp", function(target, value, tween) {
			 *      var start = target.style.width;
			 *      return function(ratio) {
			 *              target.style.width = (start + value * ratio) + "px";
			 *              console.log("set width to " + target.style.width);
			 *          }
			 * }, 0);
			 *
			 * Then, when I do this tween, it will trigger my special property:
			 *
			 * TweenLite.to(element, 1, {css:{myCustomProp:100}});
			 *
			 * In the example, of course, we're just changing the width, but you can do anything you want.
			 *
			 * @param {!string} name Property name (or comma-delimited list of property names) that should be intercepted and handled by your function. For example, if I define "myCustomProp", then it would handle that portion of the following tween: TweenLite.to(element, 1, {css:{myCustomProp:100}})
			 * @param {!function(Object, Object, Object, string):function(number)} onInitTween The function that will be called when a tween of this special property is performed. The function will receive 4 parameters: 1) Target object that should be tweened, 2) Value that was passed to the tween, 3) The tween instance itself (rarely used), and 4) The property name that's being tweened. Your function should return a function that should be called on every update of the tween. That function will receive a single parameter that is a "change factor" value (typically between 0 and 1) indicating the amount of change as a ratio. You can use this to determine how to set the values appropriately in your function.
			 * @param {number=} priority Priority that helps the engine determine the order in which to set the properties (default: 0). Higher priority properties will be updated before lower priority ones.
			 */
			CSSPlugin.registerSpecialProp = function(name, onInitTween, priority) {
				_registerComplexSpecialProp(name, {parser:function(t, e, p, cssp, pt, plugin, vars) {
					var rv = new CSSPropTween(t, p, 0, 0, pt, 2, p, false, priority);
					rv.plugin = plugin;
					rv.setRatio = onInitTween(t, e, cssp._tween, p);
					return rv;
				}, priority:priority});
			};
	
	
	
	
	
	
			//transform-related methods and properties
			CSSPlugin.useSVGTransformAttr = _isSafari; //Safari has some rendering bugs when applying CSS transforms to SVG elements, so default to using the "transform" attribute instead.
			var _transformProps = ("scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent").split(","),
				_transformProp = _checkPropPrefix("transform"), //the Javascript (camelCase) transform property, like msTransform, WebkitTransform, MozTransform, or OTransform.
				_transformPropCSS = _prefixCSS + "transform",
				_transformOriginProp = _checkPropPrefix("transformOrigin"),
				_supports3D = (_checkPropPrefix("perspective") !== null),
				Transform = _internals.Transform = function() {
					this.perspective = parseFloat(CSSPlugin.defaultTransformPerspective) || 0;
					this.force3D = (CSSPlugin.defaultForce3D === false || !_supports3D) ? false : CSSPlugin.defaultForce3D || "auto";
				},
				_SVGElement = window.SVGElement,
				_useSVGTransformAttr,
				//Some browsers (like Firefox and IE) don't honor transform-origin properly in SVG elements, so we need to manually adjust the matrix accordingly. We feature detect here rather than always doing the conversion for certain browsers because they may fix the problem at some point in the future.
	
				_createSVG = function(type, container, attributes) {
					var element = _doc.createElementNS("http://www.w3.org/2000/svg", type),
						reg = /([a-z])([A-Z])/g,
						p;
					for (p in attributes) {
						element.setAttributeNS(null, p.replace(reg, "$1-$2").toLowerCase(), attributes[p]);
					}
					container.appendChild(element);
					return element;
				},
				_docElement = _doc.documentElement,
				_forceSVGTransformAttr = (function() {
					//IE and Android stock don't support CSS transforms on SVG elements, so we must write them to the "transform" attribute. We populate this variable in the _parseTransform() method, and only if/when we come across an SVG element
					var force = _ieVers || (/Android/i.test(_agent) && !window.chrome),
						svg, rect, width;
					if (_doc.createElementNS && !force) { //IE8 and earlier doesn't support SVG anyway
						svg = _createSVG("svg", _docElement);
						rect = _createSVG("rect", svg, {width:100, height:50, x:100});
						width = rect.getBoundingClientRect().width;
						rect.style[_transformOriginProp] = "50% 50%";
						rect.style[_transformProp] = "scaleX(0.5)";
						force = (width === rect.getBoundingClientRect().width && !(_isFirefox && _supports3D)); //note: Firefox fails the test even though it does support CSS transforms in 3D. Since we can't push 3D stuff into the transform attribute, we force Firefox to pass the test here (as long as it does truly support 3D).
						_docElement.removeChild(svg);
					}
					return force;
				})(),
				_parseSVGOrigin = function(e, local, decoratee, absolute) {
					var bbox, v;
					if (!absolute || !(v = absolute.split(" ")).length) {
						bbox = e.getBBox();
						local = _parsePosition(local).split(" ");
						v = [(local[0].indexOf("%") !== -1 ? parseFloat(local[0]) / 100 * bbox.width : parseFloat(local[0])) + bbox.x,
							 (local[1].indexOf("%") !== -1 ? parseFloat(local[1]) / 100 * bbox.height : parseFloat(local[1])) + bbox.y];
					}
					decoratee.xOrigin = parseFloat(v[0]);
					decoratee.yOrigin = parseFloat(v[1]);
					e.setAttribute("data-svg-origin", v.join(" "));
				},
	
				/**
				 * Parses the transform values for an element, returning an object with x, y, z, scaleX, scaleY, scaleZ, rotation, rotationX, rotationY, skewX, and skewY properties. Note: by default (for performance reasons), all skewing is combined into skewX and rotation but skewY still has a place in the transform object so that we can record how much of the skew is attributed to skewX vs skewY. Remember, a skewY of 10 looks the same as a rotation of 10 and skewX of -10.
				 * @param {!Object} t target element
				 * @param {Object=} cs computed style object (optional)
				 * @param {boolean=} rec if true, the transform values will be recorded to the target element's _gsTransform object, like target._gsTransform = {x:0, y:0, z:0, scaleX:1...}
				 * @param {boolean=} parse if true, we'll ignore any _gsTransform values that already exist on the element, and force a reparsing of the css (calculated style)
				 * @return {object} object containing all of the transform properties/values like {x:0, y:0, z:0, scaleX:1...}
				 */
				_getTransform = _internals.getTransform = function(t, cs, rec, parse) {
					if (t._gsTransform && rec && !parse) {
						return t._gsTransform; //if the element already has a _gsTransform, use that. Note: some browsers don't accurately return the calculated style for the transform (particularly for SVG), so it's almost always safest to just use the values we've already applied rather than re-parsing things.
					}
					var tm = rec ? t._gsTransform || new Transform() : new Transform(),
						invX = (tm.scaleX < 0), //in order to interpret things properly, we need to know if the user applied a negative scaleX previously so that we can adjust the rotation and skewX accordingly. Otherwise, if we always interpret a flipped matrix as affecting scaleY and the user only wants to tween the scaleX on multiple sequential tweens, it would keep the negative scaleY without that being the user's intent.
						min = 0.00002,
						rnd = 100000,
						zOrigin = _supports3D ? parseFloat(_getStyle(t, _transformOriginProp, cs, false, "0 0 0").split(" ")[2]) || tm.zOrigin  || 0 : 0,
						defaultTransformPerspective = parseFloat(CSSPlugin.defaultTransformPerspective) || 0,
						isDefault, s, m, i, n, dec, scaleX, scaleY, rotation, skewX;
					if (_transformProp) {
						s = _getStyle(t, _transformPropCSS, cs, true);
					} else if (t.currentStyle) {
						//for older versions of IE, we need to interpret the filter portion that is in the format: progid:DXImageTransform.Microsoft.Matrix(M11=6.123233995736766e-17, M12=-1, M21=1, M22=6.123233995736766e-17, sizingMethod='auto expand') Notice that we need to swap b and c compared to a normal matrix.
						s = t.currentStyle.filter.match(_ieGetMatrixExp);
						s = (s && s.length === 4) ? [s[0].substr(4), Number(s[2].substr(4)), Number(s[1].substr(4)), s[3].substr(4), (tm.x || 0), (tm.y || 0)].join(",") : "";
					}
					isDefault = (!s || s === "none" || s === "matrix(1, 0, 0, 1, 0, 0)");
					tm.svg = !!(_SVGElement && typeof(t.getBBox) === "function" && t.getCTM && (!t.parentNode || (t.parentNode.getBBox && t.parentNode.getCTM))); //don't just rely on "instanceof _SVGElement" because if the SVG is embedded via an object tag, it won't work (SVGElement is mapped to a different object)
					if (tm.svg) {
						if (isDefault && (t.style[_transformProp] + "").indexOf("matrix") !== -1) { //some browsers (like Chrome 40) don't correctly report transforms that are applied inline on an SVG element (they don't get included in the computed style), so we double-check here and accept matrix values
							s = t.style[_transformProp];
							isDefault = false;
						}
						_parseSVGOrigin(t, _getStyle(t, _transformOriginProp, _cs, false, "50% 50%") + "", tm, t.getAttribute("data-svg-origin"));
						_useSVGTransformAttr = CSSPlugin.useSVGTransformAttr || _forceSVGTransformAttr;
						m = t.getAttribute("transform");
						if (isDefault && m && m.indexOf("matrix") !== -1) { //just in case there's a "transform" value specified as an attribute instead of CSS style. Only accept a matrix, though.
							s = m;
							isDefault = 0;
						}
					}
					if (!isDefault) {
						//split the matrix values out into an array (m for matrix)
						m = (s || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [];
						i = m.length;
						while (--i > -1) {
							n = Number(m[i]);
							m[i] = (dec = n - (n |= 0)) ? ((dec * rnd + (dec < 0 ? -0.5 : 0.5)) | 0) / rnd + n : n; //convert strings to Numbers and round to 5 decimal places to avoid issues with tiny numbers. Roughly 20x faster than Number.toFixed(). We also must make sure to round before dividing so that values like 0.9999999999 become 1 to avoid glitches in browser rendering and interpretation of flipped/rotated 3D matrices. And don't just multiply the number by rnd, floor it, and then divide by rnd because the bitwise operations max out at a 32-bit signed integer, thus it could get clipped at a relatively low value (like 22,000.00000 for example).
						}
						if (m.length === 16) {
							//we'll only look at these position-related 6 variables first because if x/y/z all match, it's relatively safe to assume we don't need to re-parse everything which risks losing important rotational information (like rotationX:180 plus rotationY:180 would look the same as rotation:180 - there's no way to know for sure which direction was taken based solely on the matrix3d() values)
							var a11 = m[0], a21 = m[1], a31 = m[2], a41 = m[3],
								a12 = m[4], a22 = m[5], a32 = m[6], a42 = m[7],
								a13 = m[8], a23 = m[9], a33 = m[10],
								a14 = m[12], a24 = m[13], a34 = m[14],
								a43 = m[11],
								angle = Math.atan2(a32, a33),
								t1, t2, t3, t4, cos, sin;
	
							//we manually compensate for non-zero z component of transformOrigin to work around bugs in Safari
							if (tm.zOrigin) {
								a34 = -tm.zOrigin;
								a14 = a13*a34-m[12];
								a24 = a23*a34-m[13];
								a34 = a33*a34+tm.zOrigin-m[14];
							}
							tm.rotationX = angle * _RAD2DEG;
							//rotationX
							if (angle) {
								cos = Math.cos(-angle);
								sin = Math.sin(-angle);
								t1 = a12*cos+a13*sin;
								t2 = a22*cos+a23*sin;
								t3 = a32*cos+a33*sin;
								a13 = a12*-sin+a13*cos;
								a23 = a22*-sin+a23*cos;
								a33 = a32*-sin+a33*cos;
								a43 = a42*-sin+a43*cos;
								a12 = t1;
								a22 = t2;
								a32 = t3;
							}
							//rotationY
							angle = Math.atan2(a13, a33);
							tm.rotationY = angle * _RAD2DEG;
							if (angle) {
								cos = Math.cos(-angle);
								sin = Math.sin(-angle);
								t1 = a11*cos-a13*sin;
								t2 = a21*cos-a23*sin;
								t3 = a31*cos-a33*sin;
								a23 = a21*sin+a23*cos;
								a33 = a31*sin+a33*cos;
								a43 = a41*sin+a43*cos;
								a11 = t1;
								a21 = t2;
								a31 = t3;
							}
							//rotationZ
							angle = Math.atan2(a21, a11);
							tm.rotation = angle * _RAD2DEG;
							if (angle) {
								cos = Math.cos(-angle);
								sin = Math.sin(-angle);
								a11 = a11*cos+a12*sin;
								t2 = a21*cos+a22*sin;
								a22 = a21*-sin+a22*cos;
								a32 = a31*-sin+a32*cos;
								a21 = t2;
							}
	
							if (tm.rotationX && Math.abs(tm.rotationX) + Math.abs(tm.rotation) > 359.9) { //when rotationY is set, it will often be parsed as 180 degrees different than it should be, and rotationX and rotation both being 180 (it looks the same), so we adjust for that here.
								tm.rotationX = tm.rotation = 0;
								tm.rotationY += 180;
							}
	
							tm.scaleX = ((Math.sqrt(a11 * a11 + a21 * a21) * rnd + 0.5) | 0) / rnd;
							tm.scaleY = ((Math.sqrt(a22 * a22 + a23 * a23) * rnd + 0.5) | 0) / rnd;
							tm.scaleZ = ((Math.sqrt(a32 * a32 + a33 * a33) * rnd + 0.5) | 0) / rnd;
							tm.skewX = 0;
							tm.perspective = a43 ? 1 / ((a43 < 0) ? -a43 : a43) : 0;
							tm.x = a14;
							tm.y = a24;
							tm.z = a34;
							if (tm.svg) {
								tm.x -= tm.xOrigin - (tm.xOrigin * a11 - tm.yOrigin * a12);
								tm.y -= tm.yOrigin - (tm.yOrigin * a21 - tm.xOrigin * a22);
							}
	
						} else if ((!_supports3D || parse || !m.length || tm.x !== m[4] || tm.y !== m[5] || (!tm.rotationX && !tm.rotationY)) && !(tm.x !== undefined && _getStyle(t, "display", cs) === "none")) { //sometimes a 6-element matrix is returned even when we performed 3D transforms, like if rotationX and rotationY are 180. In cases like this, we still need to honor the 3D transforms. If we just rely on the 2D info, it could affect how the data is interpreted, like scaleY might get set to -1 or rotation could get offset by 180 degrees. For example, do a TweenLite.to(element, 1, {css:{rotationX:180, rotationY:180}}) and then later, TweenLite.to(element, 1, {css:{rotationX:0}}) and without this conditional logic in place, it'd jump to a state of being unrotated when the 2nd tween starts. Then again, we need to honor the fact that the user COULD alter the transforms outside of CSSPlugin, like by manually applying new css, so we try to sense that by looking at x and y because if those changed, we know the changes were made outside CSSPlugin and we force a reinterpretation of the matrix values. Also, in Webkit browsers, if the element's "display" is "none", its calculated style value will always return empty, so if we've already recorded the values in the _gsTransform object, we'll just rely on those.
							var k = (m.length >= 6),
								a = k ? m[0] : 1,
								b = m[1] || 0,
								c = m[2] || 0,
								d = k ? m[3] : 1;
							tm.x = m[4] || 0;
							tm.y = m[5] || 0;
							scaleX = Math.sqrt(a * a + b * b);
							scaleY = Math.sqrt(d * d + c * c);
							rotation = (a || b) ? Math.atan2(b, a) * _RAD2DEG : tm.rotation || 0; //note: if scaleX is 0, we cannot accurately measure rotation. Same for skewX with a scaleY of 0. Therefore, we default to the previously recorded value (or zero if that doesn't exist).
							skewX = (c || d) ? Math.atan2(c, d) * _RAD2DEG + rotation : tm.skewX || 0;
							if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
								if (invX) {
									scaleX *= -1;
									skewX += (rotation <= 0) ? 180 : -180;
									rotation += (rotation <= 0) ? 180 : -180;
								} else {
									scaleY *= -1;
									skewX += (skewX <= 0) ? 180 : -180;
								}
							}
							tm.scaleX = scaleX;
							tm.scaleY = scaleY;
							tm.rotation = rotation;
							tm.skewX = skewX;
							if (_supports3D) {
								tm.rotationX = tm.rotationY = tm.z = 0;
								tm.perspective = defaultTransformPerspective;
								tm.scaleZ = 1;
							}
							if (tm.svg) {
								tm.x -= tm.xOrigin - (tm.xOrigin * a - tm.yOrigin * b);
								tm.y -= tm.yOrigin - (tm.yOrigin * d - tm.xOrigin * c);
							}
						}
						tm.zOrigin = zOrigin;
						//some browsers have a hard time with very small values like 2.4492935982947064e-16 (notice the "e-" towards the end) and would render the object slightly off. So we round to 0 in these cases. The conditional logic here is faster than calling Math.abs(). Also, browsers tend to render a SLIGHTLY rotated object in a fuzzy way, so we need to snap to exactly 0 when appropriate.
						for (i in tm) {
							if (tm[i] < min) if (tm[i] > -min) {
								tm[i] = 0;
							}
						}
					}
					//DEBUG: _log("parsed rotation of " + t.getAttribute("id")+": "+(tm.rotationX)+", "+(tm.rotationY)+", "+(tm.rotation)+", scale: "+tm.scaleX+", "+tm.scaleY+", "+tm.scaleZ+", position: "+tm.x+", "+tm.y+", "+tm.z+", perspective: "+tm.perspective);
					if (rec) {
						t._gsTransform = tm; //record to the object's _gsTransform which we use so that tweens can control individual properties independently (we need all the properties to accurately recompose the matrix in the setRatio() method)
						if (tm.svg) { //if we're supposed to apply transforms to the SVG element's "transform" attribute, make sure there aren't any CSS transforms applied or they'll override the attribute ones. Also clear the transform attribute if we're using CSS, just to be clean.
							if (_useSVGTransformAttr && t.style[_transformProp]) {
								_removeProp(t.style, _transformProp);
							} else if (!_useSVGTransformAttr && t.getAttribute("transform")) {
								t.removeAttribute("transform");
							}
						}
					}
					return tm;
				},
	
				//for setting 2D transforms in IE6, IE7, and IE8 (must use a "filter" to emulate the behavior of modern day browser transforms)
				_setIETransformRatio = function(v) {
					var t = this.data, //refers to the element's _gsTransform object
						ang = -t.rotation * _DEG2RAD,
						skew = ang + t.skewX * _DEG2RAD,
						rnd = 100000,
						a = ((Math.cos(ang) * t.scaleX * rnd) | 0) / rnd,
						b = ((Math.sin(ang) * t.scaleX * rnd) | 0) / rnd,
						c = ((Math.sin(skew) * -t.scaleY * rnd) | 0) / rnd,
						d = ((Math.cos(skew) * t.scaleY * rnd) | 0) / rnd,
						style = this.t.style,
						cs = this.t.currentStyle,
						filters, val;
					if (!cs) {
						return;
					}
					val = b; //just for swapping the variables an inverting them (reused "val" to avoid creating another variable in memory). IE's filter matrix uses a non-standard matrix configuration (angle goes the opposite way, and b and c are reversed and inverted)
					b = -c;
					c = -val;
					filters = cs.filter;
					style.filter = ""; //remove filters so that we can accurately measure offsetWidth/offsetHeight
					var w = this.t.offsetWidth,
						h = this.t.offsetHeight,
						clip = (cs.position !== "absolute"),
						m = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + b + ", M21=" + c + ", M22=" + d,
						ox = t.x + (w * t.xPercent / 100),
						oy = t.y + (h * t.yPercent / 100),
						dx, dy;
	
					//if transformOrigin is being used, adjust the offset x and y
					if (t.ox != null) {
						dx = ((t.oxp) ? w * t.ox * 0.01 : t.ox) - w / 2;
						dy = ((t.oyp) ? h * t.oy * 0.01 : t.oy) - h / 2;
						ox += dx - (dx * a + dy * b);
						oy += dy - (dx * c + dy * d);
					}
	
					if (!clip) {
						m += ", sizingMethod='auto expand')";
					} else {
						dx = (w / 2);
						dy = (h / 2);
						//translate to ensure that transformations occur around the correct origin (default is center).
						m += ", Dx=" + (dx - (dx * a + dy * b) + ox) + ", Dy=" + (dy - (dx * c + dy * d) + oy) + ")";
					}
					if (filters.indexOf("DXImageTransform.Microsoft.Matrix(") !== -1) {
						style.filter = filters.replace(_ieSetMatrixExp, m);
					} else {
						style.filter = m + " " + filters; //we must always put the transform/matrix FIRST (before alpha(opacity=xx)) to avoid an IE bug that slices part of the object when rotation is applied with alpha.
					}
	
					//at the end or beginning of the tween, if the matrix is normal (1, 0, 0, 1) and opacity is 100 (or doesn't exist), remove the filter to improve browser performance.
					if (v === 0 || v === 1) if (a === 1) if (b === 0) if (c === 0) if (d === 1) if (!clip || m.indexOf("Dx=0, Dy=0") !== -1) if (!_opacityExp.test(filters) || parseFloat(RegExp.$1) === 100) if (filters.indexOf("gradient(" && filters.indexOf("Alpha")) === -1) {
						style.removeAttribute("filter");
					}
	
					//we must set the margins AFTER applying the filter in order to avoid some bugs in IE8 that could (in rare scenarios) cause them to be ignored intermittently (vibration).
					if (!clip) {
						var mult = (_ieVers < 8) ? 1 : -1, //in Internet Explorer 7 and before, the box model is broken, causing the browser to treat the width/height of the actual rotated filtered image as the width/height of the box itself, but Microsoft corrected that in IE8. We must use a negative offset in IE8 on the right/bottom
							marg, prop, dif;
						dx = t.ieOffsetX || 0;
						dy = t.ieOffsetY || 0;
						t.ieOffsetX = Math.round((w - ((a < 0 ? -a : a) * w + (b < 0 ? -b : b) * h)) / 2 + ox);
						t.ieOffsetY = Math.round((h - ((d < 0 ? -d : d) * h + (c < 0 ? -c : c) * w)) / 2 + oy);
						for (i = 0; i < 4; i++) {
							prop = _margins[i];
							marg = cs[prop];
							//we need to get the current margin in case it is being tweened separately (we want to respect that tween's changes)
							val = (marg.indexOf("px") !== -1) ? parseFloat(marg) : _convertToPixels(this.t, prop, parseFloat(marg), marg.replace(_suffixExp, "")) || 0;
							if (val !== t[prop]) {
								dif = (i < 2) ? -t.ieOffsetX : -t.ieOffsetY; //if another tween is controlling a margin, we cannot only apply the difference in the ieOffsets, so we essentially zero-out the dx and dy here in that case. We record the margin(s) later so that we can keep comparing them, making this code very flexible.
							} else {
								dif = (i < 2) ? dx - t.ieOffsetX : dy - t.ieOffsetY;
							}
							style[prop] = (t[prop] = Math.round( val - dif * ((i === 0 || i === 2) ? 1 : mult) )) + "px";
						}
					}
				},
	
				/* translates a super small decimal to a string WITHOUT scientific notation
				_safeDecimal = function(n) {
					var s = (n < 0 ? -n : n) + "",
						a = s.split("e-");
					return (n < 0 ? "-0." : "0.") + new Array(parseInt(a[1], 10) || 0).join("0") + a[0].split(".").join("");
				},
				*/
	
				_setTransformRatio = _internals.set3DTransformRatio = _internals.setTransformRatio = function(v) {
					var t = this.data, //refers to the element's _gsTransform object
						style = this.t.style,
						angle = t.rotation,
						rotationX = t.rotationX,
						rotationY = t.rotationY,
						sx = t.scaleX,
						sy = t.scaleY,
						sz = t.scaleZ,
						x = t.x,
						y = t.y,
						z = t.z,
						isSVG = t.svg,
						perspective = t.perspective,
						force3D = t.force3D,
						a11, a12, a13, a21, a22, a23, a31, a32, a33, a41, a42, a43,
						zOrigin, min, cos, sin, t1, t2, transform, comma, zero, skew, rnd;
	
					//check to see if we should render as 2D (and SVGs must use 2D when _useSVGTransformAttr is true)
					if (((((v === 1 || v === 0) && force3D === "auto" && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime)) || !force3D) && !z && !perspective && !rotationY && !rotationX) || (_useSVGTransformAttr && isSVG) || !_supports3D) { //on the final render (which could be 0 for a from tween), if there are no 3D aspects, render in 2D to free up memory and improve performance especially on mobile devices. Check the tween's totalTime/totalDuration too in order to make sure it doesn't happen between repeats if it's a repeating tween.
	
						//2D
						if (angle || t.skewX || isSVG) {
							angle *= _DEG2RAD;
							skew = t.skewX * _DEG2RAD;
							rnd = 100000;
							a11 = Math.cos(angle) * sx;
							a21 = Math.sin(angle) * sx;
							a12 = Math.sin(angle - skew) * -sy;
							a22 = Math.cos(angle - skew) * sy;
							if (skew && t.skewType === "simple") { //by default, we compensate skewing on the other axis to make it look more natural, but you can set the skewType to "simple" to use the uncompensated skewing that CSS does
								t1 = Math.tan(skew);
								t1 = Math.sqrt(1 + t1 * t1);
								a12 *= t1;
								a22 *= t1;
								if (t.skewY) {
									a11 *= t1;
									a21 *= t1;
								}
							}
							if (isSVG) {
								x += t.xOrigin - (t.xOrigin * a11 + t.yOrigin * a12);
								y += t.yOrigin - (t.xOrigin * a21 + t.yOrigin * a22);
								min = 0.000001;
								if (x < min) if (x > -min) {
									x = 0;
								}
								if (y < min) if (y > -min) {
									y = 0;
								}
							}
							transform = (((a11 * rnd) | 0) / rnd) + "," + (((a21 * rnd) | 0) / rnd) + "," + (((a12 * rnd) | 0) / rnd) + "," + (((a22 * rnd) | 0) / rnd) + "," + x + "," + y + ")";
							if (isSVG && _useSVGTransformAttr) {
								this.t.setAttribute("transform", "matrix(" + transform);
							} else {
								//some browsers have a hard time with very small values like 2.4492935982947064e-16 (notice the "e-" towards the end) and would render the object slightly off. So we round to 5 decimal places.
								style[_transformProp] = ((t.xPercent || t.yPercent) ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix(" : "matrix(") + transform;
							}
						} else {
							style[_transformProp] = ((t.xPercent || t.yPercent) ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix(" : "matrix(") + sx + ",0,0," + sy + "," + x + "," + y + ")";
						}
						return;
	
					}
					if (_isFirefox) { //Firefox has a bug (at least in v25) that causes it to render the transparent part of 32-bit PNG images as black when displayed inside an iframe and the 3D scale is very small and doesn't change sufficiently enough between renders (like if you use a Power4.easeInOut to scale from 0 to 1 where the beginning values only change a tiny amount to begin the tween before accelerating). In this case, we force the scale to be 0.00002 instead which is visually the same but works around the Firefox issue.
						min = 0.0001;
						if (sx < min && sx > -min) {
							sx = sz = 0.00002;
						}
						if (sy < min && sy > -min) {
							sy = sz = 0.00002;
						}
						if (perspective && !t.z && !t.rotationX && !t.rotationY) { //Firefox has a bug that causes elements to have an odd super-thin, broken/dotted black border on elements that have a perspective set but aren't utilizing 3D space (no rotationX, rotationY, or z).
							perspective = 0;
						}
					}
					if (angle || t.skewX) {
						angle *= _DEG2RAD;
						cos = a11 = Math.cos(angle);
						sin = a21 = Math.sin(angle);
						if (t.skewX) {
							angle -= t.skewX * _DEG2RAD;
							cos = Math.cos(angle);
							sin = Math.sin(angle);
							if (t.skewType === "simple") { //by default, we compensate skewing on the other axis to make it look more natural, but you can set the skewType to "simple" to use the uncompensated skewing that CSS does
								t1 = Math.tan(t.skewX * _DEG2RAD);
								t1 = Math.sqrt(1 + t1 * t1);
								cos *= t1;
								sin *= t1;
								if (t.skewY) {
									a11 *= t1;
									a21 *= t1;
								}
							}
						}
						a12 = -sin;
						a22 = cos;
	
					} else if (!rotationY && !rotationX && sz === 1 && !perspective && !isSVG) { //if we're only translating and/or 2D scaling, this is faster...
						style[_transformProp] = ((t.xPercent || t.yPercent) ? "translate(" + t.xPercent + "%," + t.yPercent + "%) translate3d(" : "translate3d(") + x + "px," + y + "px," + z +"px)" + ((sx !== 1 || sy !== 1) ? " scale(" + sx + "," + sy + ")" : "");
						return;
					} else {
						a11 = a22 = 1;
						a12 = a21 = 0;
					}
					// KEY  INDEX   AFFECTS
					// a11  0       rotation, rotationY, scaleX
					// a21  1       rotation, rotationY, scaleX
					// a31  2       rotationY, scaleX
					// a41  3       rotationY, scaleX
					// a12  4       rotation, skewX, rotationX, scaleY
					// a22  5       rotation, skewX, rotationX, scaleY
					// a32  6       rotationX, scaleY
					// a42  7       rotationX, scaleY
					// a13  8       rotationY, rotationX, scaleZ
					// a23  9       rotationY, rotationX, scaleZ
					// a33  10      rotationY, rotationX, scaleZ
					// a43  11      rotationY, rotationX, perspective, scaleZ
					// a14  12      x, zOrigin, svgOrigin
					// a24  13      y, zOrigin, svgOrigin
					// a34  14      z, zOrigin
					// a44  15
					// rotation: Math.atan2(a21, a11)
					// rotationY: Math.atan2(a13, a33) (or Math.atan2(a13, a11))
					// rotationX: Math.atan2(a32, a33)
					a33 = 1;
					a13 = a23 = a31 = a32 = a41 = a42 = 0;
					a43 = (perspective) ? -1 / perspective : 0;
					zOrigin = t.zOrigin;
					min = 0.000001; //threshold below which browsers use scientific notation which won't work.
					comma = ",";
					zero = "0";
					angle = rotationY * _DEG2RAD;
					if (angle) {
						cos = Math.cos(angle);
						sin = Math.sin(angle);
						a31 = -sin;
						a41 = a43*-sin;
						a13 = a11*sin;
						a23 = a21*sin;
						a33 = cos;
						a43 *= cos;
						a11 *= cos;
						a21 *= cos;
					}
					angle = rotationX * _DEG2RAD;
					if (angle) {
						cos = Math.cos(angle);
						sin = Math.sin(angle);
						t1 = a12*cos+a13*sin;
						t2 = a22*cos+a23*sin;
						a32 = a33*sin;
						a42 = a43*sin;
						a13 = a12*-sin+a13*cos;
						a23 = a22*-sin+a23*cos;
						a33 = a33*cos;
						a43 = a43*cos;
						a12 = t1;
						a22 = t2;
					}
					if (sz !== 1) {
						a13*=sz;
						a23*=sz;
						a33*=sz;
						a43*=sz;
					}
					if (sy !== 1) {
						a12*=sy;
						a22*=sy;
						a32*=sy;
						a42*=sy;
					}
					if (sx !== 1) {
						a11*=sx;
						a21*=sx;
						a31*=sx;
						a41*=sx;
					}
	
					if (zOrigin || isSVG) {
						if (zOrigin) {
							x += a13*-zOrigin;
							y += a23*-zOrigin;
							z += a33*-zOrigin+zOrigin;
						}
						if (isSVG) { //due to bugs in some browsers, we need to manage the transform-origin of SVG manually
							x += t.xOrigin - (t.xOrigin * a11 + t.yOrigin * a12);
							y += t.yOrigin - (t.xOrigin * a21 + t.yOrigin * a22);
						}
						if (x < min && x > -min) {
							x = zero;
						}
						if (y < min && y > -min) {
							y = zero;
						}
						if (z < min && z > -min) {
							z = 0; //don't use string because we calculate perspective later and need the number.
						}
					}
	
					//optimized way of concatenating all the values into a string. If we do it all in one shot, it's slower because of the way browsers have to create temp strings and the way it affects memory. If we do it piece-by-piece with +=, it's a bit slower too. We found that doing it in these sized chunks works best overall:
					transform = ((t.xPercent || t.yPercent) ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix3d(" : "matrix3d(");
					transform += ((a11 < min && a11 > -min) ? zero : a11) + comma + ((a21 < min && a21 > -min) ? zero : a21) + comma + ((a31 < min && a31 > -min) ? zero : a31);
					transform += comma + ((a41 < min && a41 > -min) ? zero : a41) + comma + ((a12 < min && a12 > -min) ? zero : a12) + comma + ((a22 < min && a22 > -min) ? zero : a22);
					if (rotationX || rotationY) { //performance optimization (often there's no rotationX or rotationY, so we can skip these calculations)
						transform += comma + ((a32 < min && a32 > -min) ? zero : a32) + comma + ((a42 < min && a42 > -min) ? zero : a42) + comma + ((a13 < min && a13 > -min) ? zero : a13);
						transform += comma + ((a23 < min && a23 > -min) ? zero : a23) + comma + ((a33 < min && a33 > -min) ? zero : a33) + comma + ((a43 < min && a43 > -min) ? zero : a43) + comma;
					} else {
						transform += ",0,0,0,0,1,0,";
					}
					transform += x + comma + y + comma + z + comma + (perspective ? (1 + (-z / perspective)) : 1) + ")";
	
					style[_transformProp] = transform;
				};
	
			p = Transform.prototype;
			p.x = p.y = p.z = p.skewX = p.skewY = p.rotation = p.rotationX = p.rotationY = p.zOrigin = p.xPercent = p.yPercent = 0;
			p.scaleX = p.scaleY = p.scaleZ = 1;
	
			_registerComplexSpecialProp("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent", {parser:function(t, e, p, cssp, pt, plugin, vars) {
				if (cssp._lastParsedTransform === vars) { return pt; } //only need to parse the transform once, and only if the browser supports it.
				cssp._lastParsedTransform = vars;
				var m1 = cssp._transform = _getTransform(t, _cs, true, vars.parseTransform),
					style = t.style,
					min = 0.000001,
					i = _transformProps.length,
					v = vars,
					endRotations = {},
					m2, skewY, copy, orig, has3D, hasChange, dr;
				if (typeof(v.transform) === "string" && _transformProp) { //for values like transform:"rotate(60deg) scale(0.5, 0.8)"
					copy = _tempDiv.style; //don't use the original target because it might be SVG in which case some browsers don't report computed style correctly.
					copy[_transformProp] = v.transform;
					copy.display = "block"; //if display is "none", the browser often refuses to report the transform properties correctly.
					copy.position = "absolute";
					_doc.body.appendChild(_tempDiv);
					m2 = _getTransform(_tempDiv, null, false);
					_doc.body.removeChild(_tempDiv);
				} else if (typeof(v) === "object") { //for values like scaleX, scaleY, rotation, x, y, skewX, and skewY or transform:{...} (object)
					m2 = {scaleX:_parseVal((v.scaleX != null) ? v.scaleX : v.scale, m1.scaleX),
						scaleY:_parseVal((v.scaleY != null) ? v.scaleY : v.scale, m1.scaleY),
						scaleZ:_parseVal(v.scaleZ, m1.scaleZ),
						x:_parseVal(v.x, m1.x),
						y:_parseVal(v.y, m1.y),
						z:_parseVal(v.z, m1.z),
						xPercent:_parseVal(v.xPercent, m1.xPercent),
						yPercent:_parseVal(v.yPercent, m1.yPercent),
						perspective:_parseVal(v.transformPerspective, m1.perspective)};
					dr = v.directionalRotation;
					if (dr != null) {
						if (typeof(dr) === "object") {
							for (copy in dr) {
								v[copy] = dr[copy];
							}
						} else {
							v.rotation = dr;
						}
					}
					if (typeof(v.x) === "string" && v.x.indexOf("%") !== -1) {
						m2.x = 0;
						m2.xPercent = _parseVal(v.x, m1.xPercent);
					}
					if (typeof(v.y) === "string" && v.y.indexOf("%") !== -1) {
						m2.y = 0;
						m2.yPercent = _parseVal(v.y, m1.yPercent);
					}
	
					m2.rotation = _parseAngle(("rotation" in v) ? v.rotation : ("shortRotation" in v) ? v.shortRotation + "_short" : ("rotationZ" in v) ? v.rotationZ : m1.rotation, m1.rotation, "rotation", endRotations);
					if (_supports3D) {
						m2.rotationX = _parseAngle(("rotationX" in v) ? v.rotationX : ("shortRotationX" in v) ? v.shortRotationX + "_short" : m1.rotationX || 0, m1.rotationX, "rotationX", endRotations);
						m2.rotationY = _parseAngle(("rotationY" in v) ? v.rotationY : ("shortRotationY" in v) ? v.shortRotationY + "_short" : m1.rotationY || 0, m1.rotationY, "rotationY", endRotations);
					}
					m2.skewX = (v.skewX == null) ? m1.skewX : _parseAngle(v.skewX, m1.skewX);
	
					//note: for performance reasons, we combine all skewing into the skewX and rotation values, ignoring skewY but we must still record it so that we can discern how much of the overall skew is attributed to skewX vs. skewY. Otherwise, if the skewY would always act relative (tween skewY to 10deg, for example, multiple times and if we always combine things into skewX, we can't remember that skewY was 10 from last time). Remember, a skewY of 10 degrees looks the same as a rotation of 10 degrees plus a skewX of -10 degrees.
					m2.skewY = (v.skewY == null) ? m1.skewY : _parseAngle(v.skewY, m1.skewY);
					if ((skewY = m2.skewY - m1.skewY)) {
						m2.skewX += skewY;
						m2.rotation += skewY;
					}
				}
				if (_supports3D && v.force3D != null) {
					m1.force3D = v.force3D;
					hasChange = true;
				}
	
				m1.skewType = v.skewType || m1.skewType || CSSPlugin.defaultSkewType;
	
				has3D = (m1.force3D || m1.z || m1.rotationX || m1.rotationY || m2.z || m2.rotationX || m2.rotationY || m2.perspective);
				if (!has3D && v.scale != null) {
					m2.scaleZ = 1; //no need to tween scaleZ.
				}
	
				while (--i > -1) {
					p = _transformProps[i];
					orig = m2[p] - m1[p];
					if (orig > min || orig < -min || v[p] != null || _forcePT[p] != null) {
						hasChange = true;
						pt = new CSSPropTween(m1, p, m1[p], orig, pt);
						if (p in endRotations) {
							pt.e = endRotations[p]; //directional rotations typically have compensated values during the tween, but we need to make sure they end at exactly what the user requested
						}
						pt.xs0 = 0; //ensures the value stays numeric in setRatio()
						pt.plugin = plugin;
						cssp._overwriteProps.push(pt.n);
					}
				}
	
				orig = v.transformOrigin;
				if (m1.svg && (orig || v.svgOrigin)) {
					_parseSVGOrigin(t, _parsePosition(orig), m2, v.svgOrigin);
					pt = new CSSPropTween(m1, "xOrigin", m1.xOrigin, m2.xOrigin - m1.xOrigin, pt, -1, "transformOrigin");
					pt.b = m1.xOrigin;
					pt.e = pt.xs0 = m2.xOrigin;
					pt = new CSSPropTween(m1, "yOrigin", m1.yOrigin, m2.yOrigin - m1.yOrigin, pt, -1, "transformOrigin");
					pt.b = m1.yOrigin;
					pt.e = pt.xs0 = m2.yOrigin;
					orig = _useSVGTransformAttr ? null : "0px 0px"; //certain browsers (like firefox) completely botch transform-origin, so we must remove it to prevent it from contaminating transforms. We manage it ourselves with xOrigin and yOrigin
				}
				if (orig || (_supports3D && has3D && m1.zOrigin)) { //if anything 3D is happening and there's a transformOrigin with a z component that's non-zero, we must ensure that the transformOrigin's z-component is set to 0 so that we can manually do those calculations to get around Safari bugs. Even if the user didn't specifically define a "transformOrigin" in this particular tween (maybe they did it via css directly).
					if (_transformProp) {
						hasChange = true;
						p = _transformOriginProp;
						orig = (orig || _getStyle(t, p, _cs, false, "50% 50%")) + ""; //cast as string to avoid errors
						pt = new CSSPropTween(style, p, 0, 0, pt, -1, "transformOrigin");
						pt.b = style[p];
						pt.plugin = plugin;
						if (_supports3D) {
							copy = m1.zOrigin;
							orig = orig.split(" ");
							m1.zOrigin = ((orig.length > 2 && !(copy !== 0 && orig[2] === "0px")) ? parseFloat(orig[2]) : copy) || 0; //Safari doesn't handle the z part of transformOrigin correctly, so we'll manually handle it in the _set3DTransformRatio() method.
							pt.xs0 = pt.e = orig[0] + " " + (orig[1] || "50%") + " 0px"; //we must define a z value of 0px specifically otherwise iOS 5 Safari will stick with the old one (if one was defined)!
							pt = new CSSPropTween(m1, "zOrigin", 0, 0, pt, -1, pt.n); //we must create a CSSPropTween for the _gsTransform.zOrigin so that it gets reset properly at the beginning if the tween runs backward (as opposed to just setting m1.zOrigin here)
							pt.b = copy;
							pt.xs0 = pt.e = m1.zOrigin;
						} else {
							pt.xs0 = pt.e = orig;
						}
	
						//for older versions of IE (6-8), we need to manually calculate things inside the setRatio() function. We record origin x and y (ox and oy) and whether or not the values are percentages (oxp and oyp).
					} else {
						_parsePosition(orig + "", m1);
					}
				}
				if (hasChange) {
					cssp._transformType = (!(m1.svg && _useSVGTransformAttr) && (has3D || this._transformType === 3)) ? 3 : 2; //quicker than calling cssp._enableTransforms();
				}
				return pt;
			}, prefix:true});
	
			_registerComplexSpecialProp("boxShadow", {defaultValue:"0px 0px 0px 0px #999", prefix:true, color:true, multi:true, keyword:"inset"});
	
			_registerComplexSpecialProp("borderRadius", {defaultValue:"0px", parser:function(t, e, p, cssp, pt, plugin) {
				e = this.format(e);
				var props = ["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],
					style = t.style,
					ea1, i, es2, bs2, bs, es, bn, en, w, h, esfx, bsfx, rel, hn, vn, em;
				w = parseFloat(t.offsetWidth);
				h = parseFloat(t.offsetHeight);
				ea1 = e.split(" ");
				for (i = 0; i < props.length; i++) { //if we're dealing with percentages, we must convert things separately for the horizontal and vertical axis!
					if (this.p.indexOf("border")) { //older browsers used a prefix
						props[i] = _checkPropPrefix(props[i]);
					}
					bs = bs2 = _getStyle(t, props[i], _cs, false, "0px");
					if (bs.indexOf(" ") !== -1) {
						bs2 = bs.split(" ");
						bs = bs2[0];
						bs2 = bs2[1];
					}
					es = es2 = ea1[i];
					bn = parseFloat(bs);
					bsfx = bs.substr((bn + "").length);
					rel = (es.charAt(1) === "=");
					if (rel) {
						en = parseInt(es.charAt(0)+"1", 10);
						es = es.substr(2);
						en *= parseFloat(es);
						esfx = es.substr((en + "").length - (en < 0 ? 1 : 0)) || "";
					} else {
						en = parseFloat(es);
						esfx = es.substr((en + "").length);
					}
					if (esfx === "") {
						esfx = _suffixMap[p] || bsfx;
					}
					if (esfx !== bsfx) {
						hn = _convertToPixels(t, "borderLeft", bn, bsfx); //horizontal number (we use a bogus "borderLeft" property just because the _convertToPixels() method searches for the keywords "Left", "Right", "Top", and "Bottom" to determine of it's a horizontal or vertical property, and we need "border" in the name so that it knows it should measure relative to the element itself, not its parent.
						vn = _convertToPixels(t, "borderTop", bn, bsfx); //vertical number
						if (esfx === "%") {
							bs = (hn / w * 100) + "%";
							bs2 = (vn / h * 100) + "%";
						} else if (esfx === "em") {
							em = _convertToPixels(t, "borderLeft", 1, "em");
							bs = (hn / em) + "em";
							bs2 = (vn / em) + "em";
						} else {
							bs = hn + "px";
							bs2 = vn + "px";
						}
						if (rel) {
							es = (parseFloat(bs) + en) + esfx;
							es2 = (parseFloat(bs2) + en) + esfx;
						}
					}
					pt = _parseComplex(style, props[i], bs + " " + bs2, es + " " + es2, false, "0px", pt);
				}
				return pt;
			}, prefix:true, formatter:_getFormatter("0px 0px 0px 0px", false, true)});
			_registerComplexSpecialProp("backgroundPosition", {defaultValue:"0 0", parser:function(t, e, p, cssp, pt, plugin) {
				var bp = "background-position",
					cs = (_cs || _getComputedStyle(t, null)),
					bs = this.format( ((cs) ? _ieVers ? cs.getPropertyValue(bp + "-x") + " " + cs.getPropertyValue(bp + "-y") : cs.getPropertyValue(bp) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"), //Internet Explorer doesn't report background-position correctly - we must query background-position-x and background-position-y and combine them (even in IE10). Before IE9, we must do the same with the currentStyle object and use camelCase
					es = this.format(e),
					ba, ea, i, pct, overlap, src;
				if ((bs.indexOf("%") !== -1) !== (es.indexOf("%") !== -1)) {
					src = _getStyle(t, "backgroundImage").replace(_urlExp, "");
					if (src && src !== "none") {
						ba = bs.split(" ");
						ea = es.split(" ");
						_tempImg.setAttribute("src", src); //set the temp IMG's src to the background-image so that we can measure its width/height
						i = 2;
						while (--i > -1) {
							bs = ba[i];
							pct = (bs.indexOf("%") !== -1);
							if (pct !== (ea[i].indexOf("%") !== -1)) {
								overlap = (i === 0) ? t.offsetWidth - _tempImg.width : t.offsetHeight - _tempImg.height;
								ba[i] = pct ? (parseFloat(bs) / 100 * overlap) + "px" : (parseFloat(bs) / overlap * 100) + "%";
							}
						}
						bs = ba.join(" ");
					}
				}
				return this.parseComplex(t.style, bs, es, pt, plugin);
			}, formatter:_parsePosition});
			_registerComplexSpecialProp("backgroundSize", {defaultValue:"0 0", formatter:_parsePosition});
			_registerComplexSpecialProp("perspective", {defaultValue:"0px", prefix:true});
			_registerComplexSpecialProp("perspectiveOrigin", {defaultValue:"50% 50%", prefix:true});
			_registerComplexSpecialProp("transformStyle", {prefix:true});
			_registerComplexSpecialProp("backfaceVisibility", {prefix:true});
			_registerComplexSpecialProp("userSelect", {prefix:true});
			_registerComplexSpecialProp("margin", {parser:_getEdgeParser("marginTop,marginRight,marginBottom,marginLeft")});
			_registerComplexSpecialProp("padding", {parser:_getEdgeParser("paddingTop,paddingRight,paddingBottom,paddingLeft")});
			_registerComplexSpecialProp("clip", {defaultValue:"rect(0px,0px,0px,0px)", parser:function(t, e, p, cssp, pt, plugin){
				var b, cs, delim;
				if (_ieVers < 9) { //IE8 and earlier don't report a "clip" value in the currentStyle - instead, the values are split apart into clipTop, clipRight, clipBottom, and clipLeft. Also, in IE7 and earlier, the values inside rect() are space-delimited, not comma-delimited.
					cs = t.currentStyle;
					delim = _ieVers < 8 ? " " : ",";
					b = "rect(" + cs.clipTop + delim + cs.clipRight + delim + cs.clipBottom + delim + cs.clipLeft + ")";
					e = this.format(e).split(",").join(delim);
				} else {
					b = this.format(_getStyle(t, this.p, _cs, false, this.dflt));
					e = this.format(e);
				}
				return this.parseComplex(t.style, b, e, pt, plugin);
			}});
			_registerComplexSpecialProp("textShadow", {defaultValue:"0px 0px 0px #999", color:true, multi:true});
			_registerComplexSpecialProp("autoRound,strictUnits", {parser:function(t, e, p, cssp, pt) {return pt;}}); //just so that we can ignore these properties (not tween them)
			_registerComplexSpecialProp("border", {defaultValue:"0px solid #000", parser:function(t, e, p, cssp, pt, plugin) {
					return this.parseComplex(t.style, this.format(_getStyle(t, "borderTopWidth", _cs, false, "0px") + " " + _getStyle(t, "borderTopStyle", _cs, false, "solid") + " " + _getStyle(t, "borderTopColor", _cs, false, "#000")), this.format(e), pt, plugin);
				}, color:true, formatter:function(v) {
					var a = v.split(" ");
					return a[0] + " " + (a[1] || "solid") + " " + (v.match(_colorExp) || ["#000"])[0];
				}});
			_registerComplexSpecialProp("borderWidth", {parser:_getEdgeParser("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}); //Firefox doesn't pick up on borderWidth set in style sheets (only inline).
			_registerComplexSpecialProp("float,cssFloat,styleFloat", {parser:function(t, e, p, cssp, pt, plugin) {
				var s = t.style,
					prop = ("cssFloat" in s) ? "cssFloat" : "styleFloat";
				return new CSSPropTween(s, prop, 0, 0, pt, -1, p, false, 0, s[prop], e);
			}});
	
			//opacity-related
			var _setIEOpacityRatio = function(v) {
					var t = this.t, //refers to the element's style property
						filters = t.filter || _getStyle(this.data, "filter") || "",
						val = (this.s + this.c * v) | 0,
						skip;
					if (val === 100) { //for older versions of IE that need to use a filter to apply opacity, we should remove the filter if opacity hits 1 in order to improve performance, but make sure there isn't a transform (matrix) or gradient in the filters.
						if (filters.indexOf("atrix(") === -1 && filters.indexOf("radient(") === -1 && filters.indexOf("oader(") === -1) {
							t.removeAttribute("filter");
							skip = (!_getStyle(this.data, "filter")); //if a class is applied that has an alpha filter, it will take effect (we don't want that), so re-apply our alpha filter in that case. We must first remove it and then check.
						} else {
							t.filter = filters.replace(_alphaFilterExp, "");
							skip = true;
						}
					}
					if (!skip) {
						if (this.xn1) {
							t.filter = filters = filters || ("alpha(opacity=" + val + ")"); //works around bug in IE7/8 that prevents changes to "visibility" from being applied properly if the filter is changed to a different alpha on the same frame.
						}
						if (filters.indexOf("pacity") === -1) { //only used if browser doesn't support the standard opacity style property (IE 7 and 8). We omit the "O" to avoid case-sensitivity issues
							if (val !== 0 || !this.xn1) { //bugs in IE7/8 won't render the filter properly if opacity is ADDED on the same frame/render as "visibility" changes (this.xn1 is 1 if this tween is an "autoAlpha" tween)
								t.filter = filters + " alpha(opacity=" + val + ")"; //we round the value because otherwise, bugs in IE7/8 can prevent "visibility" changes from being applied properly.
							}
						} else {
							t.filter = filters.replace(_opacityExp, "opacity=" + val);
						}
					}
				};
			_registerComplexSpecialProp("opacity,alpha,autoAlpha", {defaultValue:"1", parser:function(t, e, p, cssp, pt, plugin) {
				var b = parseFloat(_getStyle(t, "opacity", _cs, false, "1")),
					style = t.style,
					isAutoAlpha = (p === "autoAlpha");
				if (typeof(e) === "string" && e.charAt(1) === "=") {
					e = ((e.charAt(0) === "-") ? -1 : 1) * parseFloat(e.substr(2)) + b;
				}
				if (isAutoAlpha && b === 1 && _getStyle(t, "visibility", _cs) === "hidden" && e !== 0) { //if visibility is initially set to "hidden", we should interpret that as intent to make opacity 0 (a convenience)
					b = 0;
				}
				if (_supportsOpacity) {
					pt = new CSSPropTween(style, "opacity", b, e - b, pt);
				} else {
					pt = new CSSPropTween(style, "opacity", b * 100, (e - b) * 100, pt);
					pt.xn1 = isAutoAlpha ? 1 : 0; //we need to record whether or not this is an autoAlpha so that in the setRatio(), we know to duplicate the setting of the alpha in order to work around a bug in IE7 and IE8 that prevents changes to "visibility" from taking effect if the filter is changed to a different alpha(opacity) at the same time. Setting it to the SAME value first, then the new value works around the IE7/8 bug.
					style.zoom = 1; //helps correct an IE issue.
					pt.type = 2;
					pt.b = "alpha(opacity=" + pt.s + ")";
					pt.e = "alpha(opacity=" + (pt.s + pt.c) + ")";
					pt.data = t;
					pt.plugin = plugin;
					pt.setRatio = _setIEOpacityRatio;
				}
				if (isAutoAlpha) { //we have to create the "visibility" PropTween after the opacity one in the linked list so that they run in the order that works properly in IE8 and earlier
					pt = new CSSPropTween(style, "visibility", 0, 0, pt, -1, null, false, 0, ((b !== 0) ? "inherit" : "hidden"), ((e === 0) ? "hidden" : "inherit"));
					pt.xs0 = "inherit";
					cssp._overwriteProps.push(pt.n);
					cssp._overwriteProps.push(p);
				}
				return pt;
			}});
	
	
			var _removeProp = function(s, p) {
					if (p) {
						if (s.removeProperty) {
							if (p.substr(0,2) === "ms" || p.substr(0,6) === "webkit") { //Microsoft and some Webkit browsers don't conform to the standard of capitalizing the first prefix character, so we adjust so that when we prefix the caps with a dash, it's correct (otherwise it'd be "ms-transform" instead of "-ms-transform" for IE9, for example)
								p = "-" + p;
							}
							s.removeProperty(p.replace(_capsExp, "-$1").toLowerCase());
						} else { //note: old versions of IE use "removeAttribute()" instead of "removeProperty()"
							s.removeAttribute(p);
						}
					}
				},
				_setClassNameRatio = function(v) {
					this.t._gsClassPT = this;
					if (v === 1 || v === 0) {
						this.t.setAttribute("class", (v === 0) ? this.b : this.e);
						var mpt = this.data, //first MiniPropTween
							s = this.t.style;
						while (mpt) {
							if (!mpt.v) {
								_removeProp(s, mpt.p);
							} else {
								s[mpt.p] = mpt.v;
							}
							mpt = mpt._next;
						}
						if (v === 1 && this.t._gsClassPT === this) {
							this.t._gsClassPT = null;
						}
					} else if (this.t.getAttribute("class") !== this.e) {
						this.t.setAttribute("class", this.e);
					}
				};
			_registerComplexSpecialProp("className", {parser:function(t, e, p, cssp, pt, plugin, vars) {
				var b = t.getAttribute("class") || "", //don't use t.className because it doesn't work consistently on SVG elements; getAttribute("class") and setAttribute("class", value") is more reliable.
					cssText = t.style.cssText,
					difData, bs, cnpt, cnptLookup, mpt;
				pt = cssp._classNamePT = new CSSPropTween(t, p, 0, 0, pt, 2);
				pt.setRatio = _setClassNameRatio;
				pt.pr = -11;
				_hasPriority = true;
				pt.b = b;
				bs = _getAllStyles(t, _cs);
				//if there's a className tween already operating on the target, force it to its end so that the necessary inline styles are removed and the class name is applied before we determine the end state (we don't want inline styles interfering that were there just for class-specific values)
				cnpt = t._gsClassPT;
				if (cnpt) {
					cnptLookup = {};
					mpt = cnpt.data; //first MiniPropTween which stores the inline styles - we need to force these so that the inline styles don't contaminate things. Otherwise, there's a small chance that a tween could start and the inline values match the destination values and they never get cleaned.
					while (mpt) {
						cnptLookup[mpt.p] = 1;
						mpt = mpt._next;
					}
					cnpt.setRatio(1);
				}
				t._gsClassPT = pt;
				pt.e = (e.charAt(1) !== "=") ? e : b.replace(new RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ((e.charAt(0) === "+") ? " " + e.substr(2) : "");
				t.setAttribute("class", pt.e);
				difData = _cssDif(t, bs, _getAllStyles(t), vars, cnptLookup);
				t.setAttribute("class", b);
				pt.data = difData.firstMPT;
				t.style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
				pt = pt.xfirst = cssp.parse(t, difData.difs, pt, plugin); //we record the CSSPropTween as the xfirst so that we can handle overwriting propertly (if "className" gets overwritten, we must kill all the properties associated with the className part of the tween, so we can loop through from xfirst to the pt itself)
				return pt;
			}});
	
	
			var _setClearPropsRatio = function(v) {
				if (v === 1 || v === 0) if (this.data._totalTime === this.data._totalDuration && this.data.data !== "isFromStart") { //this.data refers to the tween. Only clear at the END of the tween (remember, from() tweens make the ratio go from 1 to 0, so we can't just check that and if the tween is the zero-duration one that's created internally to render the starting values in a from() tween, ignore that because otherwise, for example, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in).
					var s = this.t.style,
						transformParse = _specialProps.transform.parse,
						a, p, i, clearTransform, transform;
					if (this.e === "all") {
						s.cssText = "";
						clearTransform = true;
					} else {
						a = this.e.split(" ").join("").split(",");
						i = a.length;
						while (--i > -1) {
							p = a[i];
							if (_specialProps[p]) {
								if (_specialProps[p].parse === transformParse) {
									clearTransform = true;
								} else {
									p = (p === "transformOrigin") ? _transformOriginProp : _specialProps[p].p; //ensures that special properties use the proper browser-specific property name, like "scaleX" might be "-webkit-transform" or "boxShadow" might be "-moz-box-shadow"
								}
							}
							_removeProp(s, p);
						}
					}
					if (clearTransform) {
						_removeProp(s, _transformProp);
						transform = this.t._gsTransform;
						if (transform) {
							if (transform.svg) {
								this.t.removeAttribute("data-svg-origin");
							}
							delete this.t._gsTransform;
						}
					}
	
				}
			};
			_registerComplexSpecialProp("clearProps", {parser:function(t, e, p, cssp, pt) {
				pt = new CSSPropTween(t, p, 0, 0, pt, 2);
				pt.setRatio = _setClearPropsRatio;
				pt.e = e;
				pt.pr = -10;
				pt.data = cssp._tween;
				_hasPriority = true;
				return pt;
			}});
	
			p = "bezier,throwProps,physicsProps,physics2D".split(",");
			i = p.length;
			while (i--) {
				_registerPluginProp(p[i]);
			}
	
	
	
	
	
	
	
	
			p = CSSPlugin.prototype;
			p._firstPT = p._lastParsedTransform = p._transform = null;
	
			//gets called when the tween renders for the first time. This kicks everything off, recording start/end values, etc.
			p._onInitTween = function(target, vars, tween) {
				if (!target.nodeType) { //css is only for dom elements
					return false;
				}
				this._target = target;
				this._tween = tween;
				this._vars = vars;
				_autoRound = vars.autoRound;
				_hasPriority = false;
				_suffixMap = vars.suffixMap || CSSPlugin.suffixMap;
				_cs = _getComputedStyle(target, "");
				_overwriteProps = this._overwriteProps;
				var style = target.style,
					v, pt, pt2, first, last, next, zIndex, tpt, threeD;
				if (_reqSafariFix) if (style.zIndex === "") {
					v = _getStyle(target, "zIndex", _cs);
					if (v === "auto" || v === "") {
						//corrects a bug in [non-Android] Safari that prevents it from repainting elements in their new positions if they don't have a zIndex set. We also can't just apply this inside _parseTransform() because anything that's moved in any way (like using "left" or "top" instead of transforms like "x" and "y") can be affected, so it is best to ensure that anything that's tweening has a z-index. Setting "WebkitPerspective" to a non-zero value worked too except that on iOS Safari things would flicker randomly. Plus zIndex is less memory-intensive.
						this._addLazySet(style, "zIndex", 0);
					}
				}
	
				if (typeof(vars) === "string") {
					first = style.cssText;
					v = _getAllStyles(target, _cs);
					style.cssText = first + ";" + vars;
					v = _cssDif(target, v, _getAllStyles(target)).difs;
					if (!_supportsOpacity && _opacityValExp.test(vars)) {
						v.opacity = parseFloat( RegExp.$1 );
					}
					vars = v;
					style.cssText = first;
				}
	
				if (vars.className) { //className tweens will combine any differences they find in the css with the vars that are passed in, so {className:"myClass", scale:0.5, left:20} would work.
					this._firstPT = pt = _specialProps.className.parse(target, vars.className, "className", this, null, null, vars);
				} else {
					this._firstPT = pt = this.parse(target, vars, null);
				}
	
				if (this._transformType) {
					threeD = (this._transformType === 3);
					if (!_transformProp) {
						style.zoom = 1; //helps correct an IE issue.
					} else if (_isSafari) {
						_reqSafariFix = true;
						//if zIndex isn't set, iOS Safari doesn't repaint things correctly sometimes (seemingly at random).
						if (style.zIndex === "") {
							zIndex = _getStyle(target, "zIndex", _cs);
							if (zIndex === "auto" || zIndex === "") {
								this._addLazySet(style, "zIndex", 0);
							}
						}
						//Setting WebkitBackfaceVisibility corrects 3 bugs:
						// 1) [non-Android] Safari skips rendering changes to "top" and "left" that are made on the same frame/render as a transform update.
						// 2) iOS Safari sometimes neglects to repaint elements in their new positions. Setting "WebkitPerspective" to a non-zero value worked too except that on iOS Safari things would flicker randomly.
						// 3) Safari sometimes displayed odd artifacts when tweening the transform (or WebkitTransform) property, like ghosts of the edges of the element remained. Definitely a browser bug.
						//Note: we allow the user to override the auto-setting by defining WebkitBackfaceVisibility in the vars of the tween.
						if (_isSafariLT6) {
							this._addLazySet(style, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (threeD ? "visible" : "hidden"));
						}
					}
					pt2 = pt;
					while (pt2 && pt2._next) {
						pt2 = pt2._next;
					}
					tpt = new CSSPropTween(target, "transform", 0, 0, null, 2);
					this._linkCSSP(tpt, null, pt2);
					tpt.setRatio = _transformProp ? _setTransformRatio : _setIETransformRatio;
					tpt.data = this._transform || _getTransform(target, _cs, true);
					tpt.tween = tween;
					tpt.pr = -1; //ensures that the transforms get applied after the components are updated.
					_overwriteProps.pop(); //we don't want to force the overwrite of all "transform" tweens of the target - we only care about individual transform properties like scaleX, rotation, etc. The CSSPropTween constructor automatically adds the property to _overwriteProps which is why we need to pop() here.
				}
	
				if (_hasPriority) {
					//reorders the linked list in order of pr (priority)
					while (pt) {
						next = pt._next;
						pt2 = first;
						while (pt2 && pt2.pr > pt.pr) {
							pt2 = pt2._next;
						}
						if ((pt._prev = pt2 ? pt2._prev : last)) {
							pt._prev._next = pt;
						} else {
							first = pt;
						}
						if ((pt._next = pt2)) {
							pt2._prev = pt;
						} else {
							last = pt;
						}
						pt = next;
					}
					this._firstPT = first;
				}
				return true;
			};
	
	
			p.parse = function(target, vars, pt, plugin) {
				var style = target.style,
					p, sp, bn, en, bs, es, bsfx, esfx, isStr, rel;
				for (p in vars) {
					es = vars[p]; //ending value string
					sp = _specialProps[p]; //SpecialProp lookup.
					if (sp) {
						pt = sp.parse(target, es, p, this, pt, plugin, vars);
	
					} else {
						bs = _getStyle(target, p, _cs) + "";
						isStr = (typeof(es) === "string");
						if (p === "color" || p === "fill" || p === "stroke" || p.indexOf("Color") !== -1 || (isStr && _rgbhslExp.test(es))) { //Opera uses background: to define color sometimes in addition to backgroundColor:
							if (!isStr) {
								es = _parseColor(es);
								es = ((es.length > 3) ? "rgba(" : "rgb(") + es.join(",") + ")";
							}
							pt = _parseComplex(style, p, bs, es, true, "transparent", pt, 0, plugin);
	
						} else if (isStr && (es.indexOf(" ") !== -1 || es.indexOf(",") !== -1)) {
							pt = _parseComplex(style, p, bs, es, true, null, pt, 0, plugin);
	
						} else {
							bn = parseFloat(bs);
							bsfx = (bn || bn === 0) ? bs.substr((bn + "").length) : ""; //remember, bs could be non-numeric like "normal" for fontWeight, so we should default to a blank suffix in that case.
	
							if (bs === "" || bs === "auto") {
								if (p === "width" || p === "height") {
									bn = _getDimension(target, p, _cs);
									bsfx = "px";
								} else if (p === "left" || p === "top") {
									bn = _calculateOffset(target, p, _cs);
									bsfx = "px";
								} else {
									bn = (p !== "opacity") ? 0 : 1;
									bsfx = "";
								}
							}
	
							rel = (isStr && es.charAt(1) === "=");
							if (rel) {
								en = parseInt(es.charAt(0) + "1", 10);
								es = es.substr(2);
								en *= parseFloat(es);
								esfx = es.replace(_suffixExp, "");
							} else {
								en = parseFloat(es);
								esfx = isStr ? es.replace(_suffixExp, "") : "";
							}
	
							if (esfx === "") {
								esfx = (p in _suffixMap) ? _suffixMap[p] : bsfx; //populate the end suffix, prioritizing the map, then if none is found, use the beginning suffix.
							}
	
							es = (en || en === 0) ? (rel ? en + bn : en) + esfx : vars[p]; //ensures that any += or -= prefixes are taken care of. Record the end value before normalizing the suffix because we always want to end the tween on exactly what they intended even if it doesn't match the beginning value's suffix.
	
							//if the beginning/ending suffixes don't match, normalize them...
							if (bsfx !== esfx) if (esfx !== "") if (en || en === 0) if (bn) { //note: if the beginning value (bn) is 0, we don't need to convert units!
								bn = _convertToPixels(target, p, bn, bsfx);
								if (esfx === "%") {
									bn /= _convertToPixels(target, p, 100, "%") / 100;
									if (vars.strictUnits !== true) { //some browsers report only "px" values instead of allowing "%" with getComputedStyle(), so we assume that if we're tweening to a %, we should start there too unless strictUnits:true is defined. This approach is particularly useful for responsive designs that use from() tweens.
										bs = bn + "%";
									}
	
								} else if (esfx === "em") {
									bn /= _convertToPixels(target, p, 1, "em");
	
								//otherwise convert to pixels.
								} else if (esfx !== "px") {
									en = _convertToPixels(target, p, en, esfx);
									esfx = "px"; //we don't use bsfx after this, so we don't need to set it to px too.
								}
								if (rel) if (en || en === 0) {
									es = (en + bn) + esfx; //the changes we made affect relative calculations, so adjust the end value here.
								}
							}
	
							if (rel) {
								en += bn;
							}
	
							if ((bn || bn === 0) && (en || en === 0)) { //faster than isNaN(). Also, previously we required en !== bn but that doesn't really gain much performance and it prevents _parseToProxy() from working properly if beginning and ending values match but need to get tweened by an external plugin anyway. For example, a bezier tween where the target starts at left:0 and has these points: [{left:50},{left:0}] wouldn't work properly because when parsing the last point, it'd match the first (current) one and a non-tweening CSSPropTween would be recorded when we actually need a normal tween (type:0) so that things get updated during the tween properly.
								pt = new CSSPropTween(style, p, bn, en - bn, pt, 0, p, (_autoRound !== false && (esfx === "px" || p === "zIndex")), 0, bs, es);
								pt.xs0 = esfx;
								//DEBUG: _log("tween "+p+" from "+pt.b+" ("+bn+esfx+") to "+pt.e+" with suffix: "+pt.xs0);
							} else if (style[p] === undefined || !es && (es + "" === "NaN" || es == null)) {
								_log("invalid " + p + " tween value: " + vars[p]);
							} else {
								pt = new CSSPropTween(style, p, en || bn || 0, 0, pt, -1, p, false, 0, bs, es);
								pt.xs0 = (es === "none" && (p === "display" || p.indexOf("Style") !== -1)) ? bs : es; //intermediate value should typically be set immediately (end value) except for "display" or things like borderTopStyle, borderBottomStyle, etc. which should use the beginning value during the tween.
								//DEBUG: _log("non-tweening value "+p+": "+pt.xs0);
							}
						}
					}
					if (plugin) if (pt && !pt.plugin) {
						pt.plugin = plugin;
					}
				}
				return pt;
			};
	
	
			//gets called every time the tween updates, passing the new ratio (typically a value between 0 and 1, but not always (for example, if an Elastic.easeOut is used, the value can jump above 1 mid-tween). It will always start and 0 and end at 1.
			p.setRatio = function(v) {
				var pt = this._firstPT,
					min = 0.000001,
					val, str, i;
				//at the end of the tween, we set the values to exactly what we received in order to make sure non-tweening values (like "position" or "float" or whatever) are set and so that if the beginning/ending suffixes (units) didn't match and we normalized to px, the value that the user passed in is used here. We check to see if the tween is at its beginning in case it's a from() tween in which case the ratio will actually go from 1 to 0 over the course of the tween (backwards).
				if (v === 1 && (this._tween._time === this._tween._duration || this._tween._time === 0)) {
					while (pt) {
						if (pt.type !== 2) {
							pt.t[pt.p] = pt.e;
						} else {
							pt.setRatio(v);
						}
						pt = pt._next;
					}
	
				} else if (v || !(this._tween._time === this._tween._duration || this._tween._time === 0) || this._tween._rawPrevTime === -0.000001) {
					while (pt) {
						val = pt.c * v + pt.s;
						if (pt.r) {
							val = Math.round(val);
						} else if (val < min) if (val > -min) {
							val = 0;
						}
						if (!pt.type) {
							pt.t[pt.p] = val + pt.xs0;
						} else if (pt.type === 1) { //complex value (one that typically has multiple numbers inside a string, like "rect(5px,10px,20px,25px)"
							i = pt.l;
							if (i === 2) {
								pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2;
							} else if (i === 3) {
								pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3;
							} else if (i === 4) {
								pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3 + pt.xn3 + pt.xs4;
							} else if (i === 5) {
								pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3 + pt.xn3 + pt.xs4 + pt.xn4 + pt.xs5;
							} else {
								str = pt.xs0 + val + pt.xs1;
								for (i = 1; i < pt.l; i++) {
									str += pt["xn"+i] + pt["xs"+(i+1)];
								}
								pt.t[pt.p] = str;
							}
	
						} else if (pt.type === -1) { //non-tweening value
							pt.t[pt.p] = pt.xs0;
	
						} else if (pt.setRatio) { //custom setRatio() for things like SpecialProps, external plugins, etc.
							pt.setRatio(v);
						}
						pt = pt._next;
					}
	
				//if the tween is reversed all the way back to the beginning, we need to restore the original values which may have different units (like % instead of px or em or whatever).
				} else {
					while (pt) {
						if (pt.type !== 2) {
							pt.t[pt.p] = pt.b;
						} else {
							pt.setRatio(v);
						}
						pt = pt._next;
					}
				}
			};
	
			/**
			 * @private
			 * Forces rendering of the target's transforms (rotation, scale, etc.) whenever the CSSPlugin's setRatio() is called.
			 * Basically, this tells the CSSPlugin to create a CSSPropTween (type 2) after instantiation that runs last in the linked
			 * list and calls the appropriate (3D or 2D) rendering function. We separate this into its own method so that we can call
			 * it from other plugins like BezierPlugin if, for example, it needs to apply an autoRotation and this CSSPlugin
			 * doesn't have any transform-related properties of its own. You can call this method as many times as you
			 * want and it won't create duplicate CSSPropTweens.
			 *
			 * @param {boolean} threeD if true, it should apply 3D tweens (otherwise, just 2D ones are fine and typically faster)
			 */
			p._enableTransforms = function(threeD) {
				this._transform = this._transform || _getTransform(this._target, _cs, true); //ensures that the element has a _gsTransform property with the appropriate values.
				this._transformType = (!(this._transform.svg && _useSVGTransformAttr) && (threeD || this._transformType === 3)) ? 3 : 2;
			};
	
			var lazySet = function(v) {
				this.t[this.p] = this.e;
				this.data._linkCSSP(this, this._next, null, true); //we purposefully keep this._next even though it'd make sense to null it, but this is a performance optimization, as this happens during the while (pt) {} loop in setRatio() at the bottom of which it sets pt = pt._next, so if we null it, the linked list will be broken in that loop.
			};
			/** @private Gives us a way to set a value on the first render (and only the first render). **/
			p._addLazySet = function(t, p, v) {
				var pt = this._firstPT = new CSSPropTween(t, p, 0, 0, this._firstPT, 2);
				pt.e = v;
				pt.setRatio = lazySet;
				pt.data = this;
			};
	
			/** @private **/
			p._linkCSSP = function(pt, next, prev, remove) {
				if (pt) {
					if (next) {
						next._prev = pt;
					}
					if (pt._next) {
						pt._next._prev = pt._prev;
					}
					if (pt._prev) {
						pt._prev._next = pt._next;
					} else if (this._firstPT === pt) {
						this._firstPT = pt._next;
						remove = true; //just to prevent resetting this._firstPT 5 lines down in case pt._next is null. (optimized for speed)
					}
					if (prev) {
						prev._next = pt;
					} else if (!remove && this._firstPT === null) {
						this._firstPT = pt;
					}
					pt._next = next;
					pt._prev = prev;
				}
				return pt;
			};
	
			//we need to make sure that if alpha or autoAlpha is killed, opacity is too. And autoAlpha affects the "visibility" property.
			p._kill = function(lookup) {
				var copy = lookup,
					pt, p, xfirst;
				if (lookup.autoAlpha || lookup.alpha) {
					copy = {};
					for (p in lookup) { //copy the lookup so that we're not changing the original which may be passed elsewhere.
						copy[p] = lookup[p];
					}
					copy.opacity = 1;
					if (copy.autoAlpha) {
						copy.visibility = 1;
					}
				}
				if (lookup.className && (pt = this._classNamePT)) { //for className tweens, we need to kill any associated CSSPropTweens too; a linked list starts at the className's "xfirst".
					xfirst = pt.xfirst;
					if (xfirst && xfirst._prev) {
						this._linkCSSP(xfirst._prev, pt._next, xfirst._prev._prev); //break off the prev
					} else if (xfirst === this._firstPT) {
						this._firstPT = pt._next;
					}
					if (pt._next) {
						this._linkCSSP(pt._next, pt._next._next, xfirst._prev);
					}
					this._classNamePT = null;
				}
				return TweenPlugin.prototype._kill.call(this, copy);
			};
	
	
	
			//used by cascadeTo() for gathering all the style properties of each child element into an array for comparison.
			var _getChildStyles = function(e, props, targets) {
					var children, i, child, type;
					if (e.slice) {
						i = e.length;
						while (--i > -1) {
							_getChildStyles(e[i], props, targets);
						}
						return;
					}
					children = e.childNodes;
					i = children.length;
					while (--i > -1) {
						child = children[i];
						type = child.type;
						if (child.style) {
							props.push(_getAllStyles(child));
							if (targets) {
								targets.push(child);
							}
						}
						if ((type === 1 || type === 9 || type === 11) && child.childNodes.length) {
							_getChildStyles(child, props, targets);
						}
					}
				};
	
			/**
			 * Typically only useful for className tweens that may affect child elements, this method creates a TweenLite
			 * and then compares the style properties of all the target's child elements at the tween's start and end, and
			 * if any are different, it also creates tweens for those and returns an array containing ALL of the resulting
			 * tweens (so that you can easily add() them to a TimelineLite, for example). The reason this functionality is
			 * wrapped into a separate static method of CSSPlugin instead of being integrated into all regular className tweens
			 * is because it creates entirely new tweens that may have completely different targets than the original tween,
			 * so if they were all lumped into the original tween instance, it would be inconsistent with the rest of the API
			 * and it would create other problems. For example:
			 *  - If I create a tween of elementA, that tween instance may suddenly change its target to include 50 other elements (unintuitive if I specifically defined the target I wanted)
			 *  - We can't just create new independent tweens because otherwise, what happens if the original/parent tween is reversed or pause or dropped into a TimelineLite for tight control? You'd expect that tween's behavior to affect all the others.
			 *  - Analyzing every style property of every child before and after the tween is an expensive operation when there are many children, so this behavior shouldn't be imposed on all className tweens by default, especially since it's probably rare that this extra functionality is needed.
			 *
			 * @param {Object} target object to be tweened
			 * @param {number} Duration in seconds (or frames for frames-based tweens)
			 * @param {Object} Object containing the end values, like {className:"newClass", ease:Linear.easeNone}
			 * @return {Array} An array of TweenLite instances
			 */
			CSSPlugin.cascadeTo = function(target, duration, vars) {
				var tween = TweenLite.to(target, duration, vars),
					results = [tween],
					b = [],
					e = [],
					targets = [],
					_reservedProps = TweenLite._internals.reservedProps,
					i, difs, p, from;
				target = tween._targets || tween.target;
				_getChildStyles(target, b, targets);
				tween.render(duration, true, true);
				_getChildStyles(target, e);
				tween.render(0, true, true);
				tween._enabled(true);
				i = targets.length;
				while (--i > -1) {
					difs = _cssDif(targets[i], b[i], e[i]);
					if (difs.firstMPT) {
						difs = difs.difs;
						for (p in vars) {
							if (_reservedProps[p]) {
								difs[p] = vars[p];
							}
						}
						from = {};
						for (p in difs) {
							from[p] = b[i][p];
						}
						results.push(TweenLite.fromTo(targets[i], duration, from, difs));
					}
				}
				return results;
			};
	
			TweenPlugin.activate([CSSPlugin]);
			return CSSPlugin;
	
		}, true);
	
		
		
		
		
		
		
		
		
		
		
	/*
	 * ----------------------------------------------------------------
	 * RoundPropsPlugin
	 * ----------------------------------------------------------------
	 */
		(function() {
	
			var RoundPropsPlugin = _gsScope._gsDefine.plugin({
					propName: "roundProps",
					priority: -1,
					API: 2,
	
					//called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
					init: function(target, value, tween) {
						this._tween = tween;
						return true;
					}
	
				}),
				p = RoundPropsPlugin.prototype;
	
			p._onInitAllProps = function() {
				var tween = this._tween,
					rp = (tween.vars.roundProps instanceof Array) ? tween.vars.roundProps : tween.vars.roundProps.split(","),
					i = rp.length,
					lookup = {},
					rpt = tween._propLookup.roundProps,
					prop, pt, next;
				while (--i > -1) {
					lookup[rp[i]] = 1;
				}
				i = rp.length;
				while (--i > -1) {
					prop = rp[i];
					pt = tween._firstPT;
					while (pt) {
						next = pt._next; //record here, because it may get removed
						if (pt.pg) {
							pt.t._roundProps(lookup, true);
						} else if (pt.n === prop) {
							this._add(pt.t, prop, pt.s, pt.c);
							//remove from linked list
							if (next) {
								next._prev = pt._prev;
							}
							if (pt._prev) {
								pt._prev._next = next;
							} else if (tween._firstPT === pt) {
								tween._firstPT = next;
							}
							pt._next = pt._prev = null;
							tween._propLookup[prop] = rpt;
						}
						pt = next;
					}
				}
				return false;
			};
	
			p._add = function(target, p, s, c) {
				this._addTween(target, p, s, s + c, p, true);
				this._overwriteProps.push(p);
			};
	
		}());
	
	
	
	
	
	
	
	
	
	
	/*
	 * ----------------------------------------------------------------
	 * AttrPlugin
	 * ----------------------------------------------------------------
	 */
		_gsScope._gsDefine.plugin({
			propName: "attr",
			API: 2,
			version: "0.3.3",
	
			//called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
			init: function(target, value, tween) {
				var p, start, end;
				if (typeof(target.setAttribute) !== "function") {
					return false;
				}
				this._target = target;
				this._proxy = {};
				this._start = {}; // we record start and end values exactly as they are in case they're strings (not numbers) - we need to be able to revert to them cleanly.
				this._end = {};
				for (p in value) {
					this._start[p] = this._proxy[p] = start = target.getAttribute(p);
					end = this._addTween(this._proxy, p, parseFloat(start), value[p], p);
					this._end[p] = end ? end.s + end.c : value[p];
					this._overwriteProps.push(p);
				}
				return true;
			},
	
			//called each time the values should be updated, and the ratio gets passed as the only parameter (typically it's a value between 0 and 1, but it can exceed those when using an ease like Elastic.easeOut or Back.easeOut, etc.)
			set: function(ratio) {
				this._super.setRatio.call(this, ratio);
				var props = this._overwriteProps,
					i = props.length,
					lookup = (ratio === 1) ? this._end : ratio ? this._proxy : this._start,
					p;
				while (--i > -1) {
					p = props[i];
					this._target.setAttribute(p, lookup[p] + "");
				}
			}
	
		});
	
	
	
	
	
	
	
	
	
	
	/*
	 * ----------------------------------------------------------------
	 * DirectionalRotationPlugin
	 * ----------------------------------------------------------------
	 */
		_gsScope._gsDefine.plugin({
			propName: "directionalRotation",
			version: "0.2.1",
			API: 2,
	
			//called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
			init: function(target, value, tween) {
				if (typeof(value) !== "object") {
					value = {rotation:value};
				}
				this.finals = {};
				var cap = (value.useRadians === true) ? Math.PI * 2 : 360,
					min = 0.000001,
					p, v, start, end, dif, split;
				for (p in value) {
					if (p !== "useRadians") {
						split = (value[p] + "").split("_");
						v = split[0];
						start = parseFloat( (typeof(target[p]) !== "function") ? target[p] : target[ ((p.indexOf("set") || typeof(target["get" + p.substr(3)]) !== "function") ? p : "get" + p.substr(3)) ]() );
						end = this.finals[p] = (typeof(v) === "string" && v.charAt(1) === "=") ? start + parseInt(v.charAt(0) + "1", 10) * Number(v.substr(2)) : Number(v) || 0;
						dif = end - start;
						if (split.length) {
							v = split.join("_");
							if (v.indexOf("short") !== -1) {
								dif = dif % cap;
								if (dif !== dif % (cap / 2)) {
									dif = (dif < 0) ? dif + cap : dif - cap;
								}
							}
							if (v.indexOf("_cw") !== -1 && dif < 0) {
								dif = ((dif + cap * 9999999999) % cap) - ((dif / cap) | 0) * cap;
							} else if (v.indexOf("ccw") !== -1 && dif > 0) {
								dif = ((dif - cap * 9999999999) % cap) - ((dif / cap) | 0) * cap;
							}
						}
						if (dif > min || dif < -min) {
							this._addTween(target, p, start, start + dif, p);
							this._overwriteProps.push(p);
						}
					}
				}
				return true;
			},
	
			//called each time the values should be updated, and the ratio gets passed as the only parameter (typically it's a value between 0 and 1, but it can exceed those when using an ease like Elastic.easeOut or Back.easeOut, etc.)
			set: function(ratio) {
				var pt;
				if (ratio !== 1) {
					this._super.setRatio.call(this, ratio);
				} else {
					pt = this._firstPT;
					while (pt) {
						if (pt.f) {
							pt.t[pt.p](this.finals[pt.p]);
						} else {
							pt.t[pt.p] = this.finals[pt.p];
						}
						pt = pt._next;
					}
				}
			}
	
		})._autoCSS = true;
	
	
	
	
	
	
	
		
		
		
		
	/*
	 * ----------------------------------------------------------------
	 * EasePack
	 * ----------------------------------------------------------------
	 */
		_gsScope._gsDefine("easing.Back", ["easing.Ease"], function(Ease) {
			
			var w = (_gsScope.GreenSockGlobals || _gsScope),
				gs = w.com.greensock,
				_2PI = Math.PI * 2,
				_HALF_PI = Math.PI / 2,
				_class = gs._class,
				_create = function(n, f) {
					var C = _class("easing." + n, function(){}, true),
						p = C.prototype = new Ease();
					p.constructor = C;
					p.getRatio = f;
					return C;
				},
				_easeReg = Ease.register || function(){}, //put an empty function in place just as a safety measure in case someone loads an OLD version of TweenLite.js where Ease.register doesn't exist.
				_wrap = function(name, EaseOut, EaseIn, EaseInOut, aliases) {
					var C = _class("easing."+name, {
						easeOut:new EaseOut(),
						easeIn:new EaseIn(),
						easeInOut:new EaseInOut()
					}, true);
					_easeReg(C, name);
					return C;
				},
				EasePoint = function(time, value, next) {
					this.t = time;
					this.v = value;
					if (next) {
						this.next = next;
						next.prev = this;
						this.c = next.v - value;
						this.gap = next.t - time;
					}
				},
	
				//Back
				_createBack = function(n, f) {
					var C = _class("easing." + n, function(overshoot) {
							this._p1 = (overshoot || overshoot === 0) ? overshoot : 1.70158;
							this._p2 = this._p1 * 1.525;
						}, true),
						p = C.prototype = new Ease();
					p.constructor = C;
					p.getRatio = f;
					p.config = function(overshoot) {
						return new C(overshoot);
					};
					return C;
				},
	
				Back = _wrap("Back",
					_createBack("BackOut", function(p) {
						return ((p = p - 1) * p * ((this._p1 + 1) * p + this._p1) + 1);
					}),
					_createBack("BackIn", function(p) {
						return p * p * ((this._p1 + 1) * p - this._p1);
					}),
					_createBack("BackInOut", function(p) {
						return ((p *= 2) < 1) ? 0.5 * p * p * ((this._p2 + 1) * p - this._p2) : 0.5 * ((p -= 2) * p * ((this._p2 + 1) * p + this._p2) + 2);
					})
				),
	
	
				//SlowMo
				SlowMo = _class("easing.SlowMo", function(linearRatio, power, yoyoMode) {
					power = (power || power === 0) ? power : 0.7;
					if (linearRatio == null) {
						linearRatio = 0.7;
					} else if (linearRatio > 1) {
						linearRatio = 1;
					}
					this._p = (linearRatio !== 1) ? power : 0;
					this._p1 = (1 - linearRatio) / 2;
					this._p2 = linearRatio;
					this._p3 = this._p1 + this._p2;
					this._calcEnd = (yoyoMode === true);
				}, true),
				p = SlowMo.prototype = new Ease(),
				SteppedEase, RoughEase, _createElastic;
	
			p.constructor = SlowMo;
			p.getRatio = function(p) {
				var r = p + (0.5 - p) * this._p;
				if (p < this._p1) {
					return this._calcEnd ? 1 - ((p = 1 - (p / this._p1)) * p) : r - ((p = 1 - (p / this._p1)) * p * p * p * r);
				} else if (p > this._p3) {
					return this._calcEnd ? 1 - (p = (p - this._p3) / this._p1) * p : r + ((p - r) * (p = (p - this._p3) / this._p1) * p * p * p);
				}
				return this._calcEnd ? 1 : r;
			};
			SlowMo.ease = new SlowMo(0.7, 0.7);
	
			p.config = SlowMo.config = function(linearRatio, power, yoyoMode) {
				return new SlowMo(linearRatio, power, yoyoMode);
			};
	
	
			//SteppedEase
			SteppedEase = _class("easing.SteppedEase", function(steps) {
					steps = steps || 1;
					this._p1 = 1 / steps;
					this._p2 = steps + 1;
				}, true);
			p = SteppedEase.prototype = new Ease();
			p.constructor = SteppedEase;
			p.getRatio = function(p) {
				if (p < 0) {
					p = 0;
				} else if (p >= 1) {
					p = 0.999999999;
				}
				return ((this._p2 * p) >> 0) * this._p1;
			};
			p.config = SteppedEase.config = function(steps) {
				return new SteppedEase(steps);
			};
	
	
			//RoughEase
			RoughEase = _class("easing.RoughEase", function(vars) {
				vars = vars || {};
				var taper = vars.taper || "none",
					a = [],
					cnt = 0,
					points = (vars.points || 20) | 0,
					i = points,
					randomize = (vars.randomize !== false),
					clamp = (vars.clamp === true),
					template = (vars.template instanceof Ease) ? vars.template : null,
					strength = (typeof(vars.strength) === "number") ? vars.strength * 0.4 : 0.4,
					x, y, bump, invX, obj, pnt;
				while (--i > -1) {
					x = randomize ? Math.random() : (1 / points) * i;
					y = template ? template.getRatio(x) : x;
					if (taper === "none") {
						bump = strength;
					} else if (taper === "out") {
						invX = 1 - x;
						bump = invX * invX * strength;
					} else if (taper === "in") {
						bump = x * x * strength;
					} else if (x < 0.5) {  //"both" (start)
						invX = x * 2;
						bump = invX * invX * 0.5 * strength;
					} else {				//"both" (end)
						invX = (1 - x) * 2;
						bump = invX * invX * 0.5 * strength;
					}
					if (randomize) {
						y += (Math.random() * bump) - (bump * 0.5);
					} else if (i % 2) {
						y += bump * 0.5;
					} else {
						y -= bump * 0.5;
					}
					if (clamp) {
						if (y > 1) {
							y = 1;
						} else if (y < 0) {
							y = 0;
						}
					}
					a[cnt++] = {x:x, y:y};
				}
				a.sort(function(a, b) {
					return a.x - b.x;
				});
	
				pnt = new EasePoint(1, 1, null);
				i = points;
				while (--i > -1) {
					obj = a[i];
					pnt = new EasePoint(obj.x, obj.y, pnt);
				}
	
				this._prev = new EasePoint(0, 0, (pnt.t !== 0) ? pnt : pnt.next);
			}, true);
			p = RoughEase.prototype = new Ease();
			p.constructor = RoughEase;
			p.getRatio = function(p) {
				var pnt = this._prev;
				if (p > pnt.t) {
					while (pnt.next && p >= pnt.t) {
						pnt = pnt.next;
					}
					pnt = pnt.prev;
				} else {
					while (pnt.prev && p <= pnt.t) {
						pnt = pnt.prev;
					}
				}
				this._prev = pnt;
				return (pnt.v + ((p - pnt.t) / pnt.gap) * pnt.c);
			};
			p.config = function(vars) {
				return new RoughEase(vars);
			};
			RoughEase.ease = new RoughEase();
	
	
			//Bounce
			_wrap("Bounce",
				_create("BounceOut", function(p) {
					if (p < 1 / 2.75) {
						return 7.5625 * p * p;
					} else if (p < 2 / 2.75) {
						return 7.5625 * (p -= 1.5 / 2.75) * p + 0.75;
					} else if (p < 2.5 / 2.75) {
						return 7.5625 * (p -= 2.25 / 2.75) * p + 0.9375;
					}
					return 7.5625 * (p -= 2.625 / 2.75) * p + 0.984375;
				}),
				_create("BounceIn", function(p) {
					if ((p = 1 - p) < 1 / 2.75) {
						return 1 - (7.5625 * p * p);
					} else if (p < 2 / 2.75) {
						return 1 - (7.5625 * (p -= 1.5 / 2.75) * p + 0.75);
					} else if (p < 2.5 / 2.75) {
						return 1 - (7.5625 * (p -= 2.25 / 2.75) * p + 0.9375);
					}
					return 1 - (7.5625 * (p -= 2.625 / 2.75) * p + 0.984375);
				}),
				_create("BounceInOut", function(p) {
					var invert = (p < 0.5);
					if (invert) {
						p = 1 - (p * 2);
					} else {
						p = (p * 2) - 1;
					}
					if (p < 1 / 2.75) {
						p = 7.5625 * p * p;
					} else if (p < 2 / 2.75) {
						p = 7.5625 * (p -= 1.5 / 2.75) * p + 0.75;
					} else if (p < 2.5 / 2.75) {
						p = 7.5625 * (p -= 2.25 / 2.75) * p + 0.9375;
					} else {
						p = 7.5625 * (p -= 2.625 / 2.75) * p + 0.984375;
					}
					return invert ? (1 - p) * 0.5 : p * 0.5 + 0.5;
				})
			);
	
	
			//CIRC
			_wrap("Circ",
				_create("CircOut", function(p) {
					return Math.sqrt(1 - (p = p - 1) * p);
				}),
				_create("CircIn", function(p) {
					return -(Math.sqrt(1 - (p * p)) - 1);
				}),
				_create("CircInOut", function(p) {
					return ((p*=2) < 1) ? -0.5 * (Math.sqrt(1 - p * p) - 1) : 0.5 * (Math.sqrt(1 - (p -= 2) * p) + 1);
				})
			);
	
	
			//Elastic
			_createElastic = function(n, f, def) {
				var C = _class("easing." + n, function(amplitude, period) {
						this._p1 = (amplitude >= 1) ? amplitude : 1; //note: if amplitude is < 1, we simply adjust the period for a more natural feel. Otherwise the math doesn't work right and the curve starts at 1.
						this._p2 = (period || def) / (amplitude < 1 ? amplitude : 1);
						this._p3 = this._p2 / _2PI * (Math.asin(1 / this._p1) || 0);
						this._p2 = _2PI / this._p2; //precalculate to optimize
					}, true),
					p = C.prototype = new Ease();
				p.constructor = C;
				p.getRatio = f;
				p.config = function(amplitude, period) {
					return new C(amplitude, period);
				};
				return C;
			};
			_wrap("Elastic",
				_createElastic("ElasticOut", function(p) {
					return this._p1 * Math.pow(2, -10 * p) * Math.sin( (p - this._p3) * this._p2 ) + 1;
				}, 0.3),
				_createElastic("ElasticIn", function(p) {
					return -(this._p1 * Math.pow(2, 10 * (p -= 1)) * Math.sin( (p - this._p3) * this._p2 ));
				}, 0.3),
				_createElastic("ElasticInOut", function(p) {
					return ((p *= 2) < 1) ? -0.5 * (this._p1 * Math.pow(2, 10 * (p -= 1)) * Math.sin( (p - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 *(p -= 1)) * Math.sin( (p - this._p3) * this._p2 ) * 0.5 + 1;
				}, 0.45)
			);
	
	
			//Expo
			_wrap("Expo",
				_create("ExpoOut", function(p) {
					return 1 - Math.pow(2, -10 * p);
				}),
				_create("ExpoIn", function(p) {
					return Math.pow(2, 10 * (p - 1)) - 0.001;
				}),
				_create("ExpoInOut", function(p) {
					return ((p *= 2) < 1) ? 0.5 * Math.pow(2, 10 * (p - 1)) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
				})
			);
	
	
			//Sine
			_wrap("Sine",
				_create("SineOut", function(p) {
					return Math.sin(p * _HALF_PI);
				}),
				_create("SineIn", function(p) {
					return -Math.cos(p * _HALF_PI) + 1;
				}),
				_create("SineInOut", function(p) {
					return -0.5 * (Math.cos(Math.PI * p) - 1);
				})
			);
	
			_class("easing.EaseLookup", {
					find:function(s) {
						return Ease.map[s];
					}
				}, true);
	
			//register the non-standard eases
			_easeReg(w.SlowMo, "SlowMo", "ease,");
			_easeReg(RoughEase, "RoughEase", "ease,");
			_easeReg(SteppedEase, "SteppedEase", "ease,");
	
			return Back;
			
		}, true);
	
	
	});
	
	if (_gsScope._gsDefine) { _gsScope._gsQueue.pop()(); } //necessary in case TweenLite was already loaded separately.
	
	
	
	
	
	
	
	
	
	
	
	/*
	 * ----------------------------------------------------------------
	 * Base classes like TweenLite, SimpleTimeline, Ease, Ticker, etc.
	 * ----------------------------------------------------------------
	 */
	(function(window, moduleName) {
	
			"use strict";
			var _globals = window.GreenSockGlobals = window.GreenSockGlobals || window;
			if (_globals.TweenLite) {
				return; //in case the core set of classes is already loaded, don't instantiate twice.
			}
			var _namespace = function(ns) {
					var a = ns.split("."),
						p = _globals, i;
					for (i = 0; i < a.length; i++) {
						p[a[i]] = p = p[a[i]] || {};
					}
					return p;
				},
				gs = _namespace("com.greensock"),
				_tinyNum = 0.0000000001,
				_slice = function(a) { //don't use Array.prototype.slice.call(target, 0) because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
					var b = [],
						l = a.length,
						i;
					for (i = 0; i !== l; b.push(a[i++]));
					return b;
				},
				_emptyFunc = function() {},
				_isArray = (function() { //works around issues in iframe environments where the Array global isn't shared, thus if the object originates in a different window/iframe, "(obj instanceof Array)" will evaluate false. We added some speed optimizations to avoid Object.prototype.toString.call() unless it's absolutely necessary because it's VERY slow (like 20x slower)
					var toString = Object.prototype.toString,
						array = toString.call([]);
					return function(obj) {
						return obj != null && (obj instanceof Array || (typeof(obj) === "object" && !!obj.push && toString.call(obj) === array));
					};
				}()),
				a, i, p, _ticker, _tickerActive,
				_defLookup = {},
	
				/**
				 * @constructor
				 * Defines a GreenSock class, optionally with an array of dependencies that must be instantiated first and passed into the definition.
				 * This allows users to load GreenSock JS files in any order even if they have interdependencies (like CSSPlugin extends TweenPlugin which is
				 * inside TweenLite.js, but if CSSPlugin is loaded first, it should wait to run its code until TweenLite.js loads and instantiates TweenPlugin
				 * and then pass TweenPlugin to CSSPlugin's definition). This is all done automatically and internally.
				 *
				 * Every definition will be added to a "com.greensock" global object (typically window, but if a window.GreenSockGlobals object is found,
				 * it will go there as of v1.7). For example, TweenLite will be found at window.com.greensock.TweenLite and since it's a global class that should be available anywhere,
				 * it is ALSO referenced at window.TweenLite. However some classes aren't considered global, like the base com.greensock.core.Animation class, so
				 * those will only be at the package like window.com.greensock.core.Animation. Again, if you define a GreenSockGlobals object on the window, everything
				 * gets tucked neatly inside there instead of on the window directly. This allows you to do advanced things like load multiple versions of GreenSock
				 * files and put them into distinct objects (imagine a banner ad uses a newer version but the main site uses an older one). In that case, you could
				 * sandbox the banner one like:
				 *
				 * <script>
				 *     var gs = window.GreenSockGlobals = {}; //the newer version we're about to load could now be referenced in a "gs" object, like gs.TweenLite.to(...). Use whatever alias you want as long as it's unique, "gs" or "banner" or whatever.
				 * </script>
				 * <script src="js/greensock/v1.7/TweenMax.js"></script>
				 * <script>
				 *     window.GreenSockGlobals = window._gsQueue = window._gsDefine = null; //reset it back to null (along with the special _gsQueue variable) so that the next load of TweenMax affects the window and we can reference things directly like TweenLite.to(...)
				 * </script>
				 * <script src="js/greensock/v1.6/TweenMax.js"></script>
				 * <script>
				 *     gs.TweenLite.to(...); //would use v1.7
				 *     TweenLite.to(...); //would use v1.6
				 * </script>
				 *
				 * @param {!string} ns The namespace of the class definition, leaving off "com.greensock." as that's assumed. For example, "TweenLite" or "plugins.CSSPlugin" or "easing.Back".
				 * @param {!Array.<string>} dependencies An array of dependencies (described as their namespaces minus "com.greensock." prefix). For example ["TweenLite","plugins.TweenPlugin","core.Animation"]
				 * @param {!function():Object} func The function that should be called and passed the resolved dependencies which will return the actual class for this definition.
				 * @param {boolean=} global If true, the class will be added to the global scope (typically window unless you define a window.GreenSockGlobals object)
				 */
				Definition = function(ns, dependencies, func, global) {
					this.sc = (_defLookup[ns]) ? _defLookup[ns].sc : []; //subclasses
					_defLookup[ns] = this;
					this.gsClass = null;
					this.func = func;
					var _classes = [];
					this.check = function(init) {
						var i = dependencies.length,
							missing = i,
							cur, a, n, cl;
						while (--i > -1) {
							if ((cur = _defLookup[dependencies[i]] || new Definition(dependencies[i], [])).gsClass) {
								_classes[i] = cur.gsClass;
								missing--;
							} else if (init) {
								cur.sc.push(this);
							}
						}
						if (missing === 0 && func) {
							a = ("com.greensock." + ns).split(".");
							n = a.pop();
							cl = _namespace(a.join("."))[n] = this.gsClass = func.apply(func, _classes);
	
							//exports to multiple environments
							if (global) {
								_globals[n] = cl; //provides a way to avoid global namespace pollution. By default, the main classes like TweenLite, Power1, Strong, etc. are added to window unless a GreenSockGlobals is defined. So if you want to have things added to a custom object instead, just do something like window.GreenSockGlobals = {} before loading any GreenSock files. You can even set up an alias like window.GreenSockGlobals = windows.gs = {} so that you can access everything like gs.TweenLite. Also remember that ALL classes are added to the window.com.greensock object (in their respective packages, like com.greensock.easing.Power1, com.greensock.TweenLite, etc.)
								if (true){ //AMD
									!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() { return cl; }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
								} else if (ns === moduleName && typeof(module) !== "undefined" && module.exports){ //node
									module.exports = cl;
								}
							}
							for (i = 0; i < this.sc.length; i++) {
								this.sc[i].check();
							}
						}
					};
					this.check(true);
				},
	
				//used to create Definition instances (which basically registers a class that has dependencies).
				_gsDefine = window._gsDefine = function(ns, dependencies, func, global) {
					return new Definition(ns, dependencies, func, global);
				},
	
				//a quick way to create a class that doesn't have any dependencies. Returns the class, but first registers it in the GreenSock namespace so that other classes can grab it (other classes might be dependent on the class).
				_class = gs._class = function(ns, func, global) {
					func = func || function() {};
					_gsDefine(ns, [], function(){ return func; }, global);
					return func;
				};
	
			_gsDefine.globals = _globals;
	
	
	
	/*
	 * ----------------------------------------------------------------
	 * Ease
	 * ----------------------------------------------------------------
	 */
			var _baseParams = [0, 0, 1, 1],
				_blankArray = [],
				Ease = _class("easing.Ease", function(func, extraParams, type, power) {
					this._func = func;
					this._type = type || 0;
					this._power = power || 0;
					this._params = extraParams ? _baseParams.concat(extraParams) : _baseParams;
				}, true),
				_easeMap = Ease.map = {},
				_easeReg = Ease.register = function(ease, names, types, create) {
					var na = names.split(","),
						i = na.length,
						ta = (types || "easeIn,easeOut,easeInOut").split(","),
						e, name, j, type;
					while (--i > -1) {
						name = na[i];
						e = create ? _class("easing."+name, null, true) : gs.easing[name] || {};
						j = ta.length;
						while (--j > -1) {
							type = ta[j];
							_easeMap[name + "." + type] = _easeMap[type + name] = e[type] = ease.getRatio ? ease : ease[type] || new ease();
						}
					}
				};
	
			p = Ease.prototype;
			p._calcEnd = false;
			p.getRatio = function(p) {
				if (this._func) {
					this._params[0] = p;
					return this._func.apply(null, this._params);
				}
				var t = this._type,
					pw = this._power,
					r = (t === 1) ? 1 - p : (t === 2) ? p : (p < 0.5) ? p * 2 : (1 - p) * 2;
				if (pw === 1) {
					r *= r;
				} else if (pw === 2) {
					r *= r * r;
				} else if (pw === 3) {
					r *= r * r * r;
				} else if (pw === 4) {
					r *= r * r * r * r;
				}
				return (t === 1) ? 1 - r : (t === 2) ? r : (p < 0.5) ? r / 2 : 1 - (r / 2);
			};
	
			//create all the standard eases like Linear, Quad, Cubic, Quart, Quint, Strong, Power0, Power1, Power2, Power3, and Power4 (each with easeIn, easeOut, and easeInOut)
			a = ["Linear","Quad","Cubic","Quart","Quint,Strong"];
			i = a.length;
			while (--i > -1) {
				p = a[i]+",Power"+i;
				_easeReg(new Ease(null,null,1,i), p, "easeOut", true);
				_easeReg(new Ease(null,null,2,i), p, "easeIn" + ((i === 0) ? ",easeNone" : ""));
				_easeReg(new Ease(null,null,3,i), p, "easeInOut");
			}
			_easeMap.linear = gs.easing.Linear.easeIn;
			_easeMap.swing = gs.easing.Quad.easeInOut; //for jQuery folks
	
	
	/*
	 * ----------------------------------------------------------------
	 * EventDispatcher
	 * ----------------------------------------------------------------
	 */
			var EventDispatcher = _class("events.EventDispatcher", function(target) {
				this._listeners = {};
				this._eventTarget = target || this;
			});
			p = EventDispatcher.prototype;
	
			p.addEventListener = function(type, callback, scope, useParam, priority) {
				priority = priority || 0;
				var list = this._listeners[type],
					index = 0,
					listener, i;
				if (list == null) {
					this._listeners[type] = list = [];
				}
				i = list.length;
				while (--i > -1) {
					listener = list[i];
					if (listener.c === callback && listener.s === scope) {
						list.splice(i, 1);
					} else if (index === 0 && listener.pr < priority) {
						index = i + 1;
					}
				}
				list.splice(index, 0, {c:callback, s:scope, up:useParam, pr:priority});
				if (this === _ticker && !_tickerActive) {
					_ticker.wake();
				}
			};
	
			p.removeEventListener = function(type, callback) {
				var list = this._listeners[type], i;
				if (list) {
					i = list.length;
					while (--i > -1) {
						if (list[i].c === callback) {
							list.splice(i, 1);
							return;
						}
					}
				}
			};
	
			p.dispatchEvent = function(type) {
				var list = this._listeners[type],
					i, t, listener;
				if (list) {
					i = list.length;
					t = this._eventTarget;
					while (--i > -1) {
						listener = list[i];
						if (listener) {
							if (listener.up) {
								listener.c.call(listener.s || t, {type:type, target:t});
							} else {
								listener.c.call(listener.s || t);
							}
						}
					}
				}
			};
	
	
	/*
	 * ----------------------------------------------------------------
	 * Ticker
	 * ----------------------------------------------------------------
	 */
	 		var _reqAnimFrame = window.requestAnimationFrame,
				_cancelAnimFrame = window.cancelAnimationFrame,
				_getTime = Date.now || function() {return new Date().getTime();},
				_lastUpdate = _getTime();
	
			//now try to determine the requestAnimationFrame and cancelAnimationFrame functions and if none are found, we'll use a setTimeout()/clearTimeout() polyfill.
			a = ["ms","moz","webkit","o"];
			i = a.length;
			while (--i > -1 && !_reqAnimFrame) {
				_reqAnimFrame = window[a[i] + "RequestAnimationFrame"];
				_cancelAnimFrame = window[a[i] + "CancelAnimationFrame"] || window[a[i] + "CancelRequestAnimationFrame"];
			}
	
			_class("Ticker", function(fps, useRAF) {
				var _self = this,
					_startTime = _getTime(),
					_useRAF = (useRAF !== false && _reqAnimFrame),
					_lagThreshold = 500,
					_adjustedLag = 33,
					_tickWord = "tick", //helps reduce gc burden
					_fps, _req, _id, _gap, _nextTime,
					_tick = function(manual) {
						var elapsed = _getTime() - _lastUpdate,
							overlap, dispatch;
						if (elapsed > _lagThreshold) {
							_startTime += elapsed - _adjustedLag;
						}
						_lastUpdate += elapsed;
						_self.time = (_lastUpdate - _startTime) / 1000;
						overlap = _self.time - _nextTime;
						if (!_fps || overlap > 0 || manual === true) {
							_self.frame++;
							_nextTime += overlap + (overlap >= _gap ? 0.004 : _gap - overlap);
							dispatch = true;
						}
						if (manual !== true) { //make sure the request is made before we dispatch the "tick" event so that timing is maintained. Otherwise, if processing the "tick" requires a bunch of time (like 15ms) and we're using a setTimeout() that's based on 16.7ms, it'd technically take 31.7ms between frames otherwise.
							_id = _req(_tick);
						}
						if (dispatch) {
							_self.dispatchEvent(_tickWord);
						}
					};
	
				EventDispatcher.call(_self);
				_self.time = _self.frame = 0;
				_self.tick = function() {
					_tick(true);
				};
	
				_self.lagSmoothing = function(threshold, adjustedLag) {
					_lagThreshold = threshold || (1 / _tinyNum); //zero should be interpreted as basically unlimited
					_adjustedLag = Math.min(adjustedLag, _lagThreshold, 0);
				};
	
				_self.sleep = function() {
					if (_id == null) {
						return;
					}
					if (!_useRAF || !_cancelAnimFrame) {
						clearTimeout(_id);
					} else {
						_cancelAnimFrame(_id);
					}
					_req = _emptyFunc;
					_id = null;
					if (_self === _ticker) {
						_tickerActive = false;
					}
				};
	
				_self.wake = function() {
					if (_id !== null) {
						_self.sleep();
					} else if (_self.frame > 10) { //don't trigger lagSmoothing if we're just waking up, and make sure that at least 10 frames have elapsed because of the iOS bug that we work around below with the 1.5-second setTimout().
						_lastUpdate = _getTime() - _lagThreshold + 5;
					}
					_req = (_fps === 0) ? _emptyFunc : (!_useRAF || !_reqAnimFrame) ? function(f) { return setTimeout(f, ((_nextTime - _self.time) * 1000 + 1) | 0); } : _reqAnimFrame;
					if (_self === _ticker) {
						_tickerActive = true;
					}
					_tick(2);
				};
	
				_self.fps = function(value) {
					if (!arguments.length) {
						return _fps;
					}
					_fps = value;
					_gap = 1 / (_fps || 60);
					_nextTime = this.time + _gap;
					_self.wake();
				};
	
				_self.useRAF = function(value) {
					if (!arguments.length) {
						return _useRAF;
					}
					_self.sleep();
					_useRAF = value;
					_self.fps(_fps);
				};
				_self.fps(fps);
	
				//a bug in iOS 6 Safari occasionally prevents the requestAnimationFrame from working initially, so we use a 1.5-second timeout that automatically falls back to setTimeout() if it senses this condition.
				setTimeout(function() {
					if (_useRAF && _self.frame < 5) {
						_self.useRAF(false);
					}
				}, 1500);
			});
	
			p = gs.Ticker.prototype = new gs.events.EventDispatcher();
			p.constructor = gs.Ticker;
	
	
	/*
	 * ----------------------------------------------------------------
	 * Animation
	 * ----------------------------------------------------------------
	 */
			var Animation = _class("core.Animation", function(duration, vars) {
					this.vars = vars = vars || {};
					this._duration = this._totalDuration = duration || 0;
					this._delay = Number(vars.delay) || 0;
					this._timeScale = 1;
					this._active = (vars.immediateRender === true);
					this.data = vars.data;
					this._reversed = (vars.reversed === true);
	
					if (!_rootTimeline) {
						return;
					}
					if (!_tickerActive) { //some browsers (like iOS 6 Safari) shut down JavaScript execution when the tab is disabled and they [occasionally] neglect to start up requestAnimationFrame again when returning - this code ensures that the engine starts up again properly.
						_ticker.wake();
					}
	
					var tl = this.vars.useFrames ? _rootFramesTimeline : _rootTimeline;
					tl.add(this, tl._time);
	
					if (this.vars.paused) {
						this.paused(true);
					}
				});
	
			_ticker = Animation.ticker = new gs.Ticker();
			p = Animation.prototype;
			p._dirty = p._gc = p._initted = p._paused = false;
			p._totalTime = p._time = 0;
			p._rawPrevTime = -1;
			p._next = p._last = p._onUpdate = p._timeline = p.timeline = null;
			p._paused = false;
	
	
			//some browsers (like iOS) occasionally drop the requestAnimationFrame event when the user switches to a different tab and then comes back again, so we use a 2-second setTimeout() to sense if/when that condition occurs and then wake() the ticker.
			var _checkTimeout = function() {
					if (_tickerActive && _getTime() - _lastUpdate > 2000) {
						_ticker.wake();
					}
					setTimeout(_checkTimeout, 2000);
				};
			_checkTimeout();
	
	
			p.play = function(from, suppressEvents) {
				if (from != null) {
					this.seek(from, suppressEvents);
				}
				return this.reversed(false).paused(false);
			};
	
			p.pause = function(atTime, suppressEvents) {
				if (atTime != null) {
					this.seek(atTime, suppressEvents);
				}
				return this.paused(true);
			};
	
			p.resume = function(from, suppressEvents) {
				if (from != null) {
					this.seek(from, suppressEvents);
				}
				return this.paused(false);
			};
	
			p.seek = function(time, suppressEvents) {
				return this.totalTime(Number(time), suppressEvents !== false);
			};
	
			p.restart = function(includeDelay, suppressEvents) {
				return this.reversed(false).paused(false).totalTime(includeDelay ? -this._delay : 0, (suppressEvents !== false), true);
			};
	
			p.reverse = function(from, suppressEvents) {
				if (from != null) {
					this.seek((from || this.totalDuration()), suppressEvents);
				}
				return this.reversed(true).paused(false);
			};
	
			p.render = function(time, suppressEvents, force) {
				//stub - we override this method in subclasses.
			};
	
			p.invalidate = function() {
				this._time = this._totalTime = 0;
				this._initted = this._gc = false;
				this._rawPrevTime = -1;
				if (this._gc || !this.timeline) {
					this._enabled(true);
				}
				return this;
			};
	
			p.isActive = function() {
				var tl = this._timeline, //the 2 root timelines won't have a _timeline; they're always active.
					startTime = this._startTime,
					rawTime;
				return (!tl || (!this._gc && !this._paused && tl.isActive() && (rawTime = tl.rawTime()) >= startTime && rawTime < startTime + this.totalDuration() / this._timeScale));
			};
	
			p._enabled = function (enabled, ignoreTimeline) {
				if (!_tickerActive) {
					_ticker.wake();
				}
				this._gc = !enabled;
				this._active = this.isActive();
				if (ignoreTimeline !== true) {
					if (enabled && !this.timeline) {
						this._timeline.add(this, this._startTime - this._delay);
					} else if (!enabled && this.timeline) {
						this._timeline._remove(this, true);
					}
				}
				return false;
			};
	
	
			p._kill = function(vars, target) {
				return this._enabled(false, false);
			};
	
			p.kill = function(vars, target) {
				this._kill(vars, target);
				return this;
			};
	
			p._uncache = function(includeSelf) {
				var tween = includeSelf ? this : this.timeline;
				while (tween) {
					tween._dirty = true;
					tween = tween.timeline;
				}
				return this;
			};
	
			p._swapSelfInParams = function(params) {
				var i = params.length,
					copy = params.concat();
				while (--i > -1) {
					if (params[i] === "{self}") {
						copy[i] = this;
					}
				}
				return copy;
			};
	
	//----Animation getters/setters --------------------------------------------------------
	
			p.eventCallback = function(type, callback, params, scope) {
				if ((type || "").substr(0,2) === "on") {
					var v = this.vars;
					if (arguments.length === 1) {
						return v[type];
					}
					if (callback == null) {
						delete v[type];
					} else {
						v[type] = callback;
						v[type + "Params"] = (_isArray(params) && params.join("").indexOf("{self}") !== -1) ? this._swapSelfInParams(params) : params;
						v[type + "Scope"] = scope;
					}
					if (type === "onUpdate") {
						this._onUpdate = callback;
					}
				}
				return this;
			};
	
			p.delay = function(value) {
				if (!arguments.length) {
					return this._delay;
				}
				if (this._timeline.smoothChildTiming) {
					this.startTime( this._startTime + value - this._delay );
				}
				this._delay = value;
				return this;
			};
	
			p.duration = function(value) {
				if (!arguments.length) {
					this._dirty = false;
					return this._duration;
				}
				this._duration = this._totalDuration = value;
				this._uncache(true); //true in case it's a TweenMax or TimelineMax that has a repeat - we'll need to refresh the totalDuration.
				if (this._timeline.smoothChildTiming) if (this._time > 0) if (this._time < this._duration) if (value !== 0) {
					this.totalTime(this._totalTime * (value / this._duration), true);
				}
				return this;
			};
	
			p.totalDuration = function(value) {
				this._dirty = false;
				return (!arguments.length) ? this._totalDuration : this.duration(value);
			};
	
			p.time = function(value, suppressEvents) {
				if (!arguments.length) {
					return this._time;
				}
				if (this._dirty) {
					this.totalDuration();
				}
				return this.totalTime((value > this._duration) ? this._duration : value, suppressEvents);
			};
	
			p.totalTime = function(time, suppressEvents, uncapped) {
				if (!_tickerActive) {
					_ticker.wake();
				}
				if (!arguments.length) {
					return this._totalTime;
				}
				if (this._timeline) {
					if (time < 0 && !uncapped) {
						time += this.totalDuration();
					}
					if (this._timeline.smoothChildTiming) {
						if (this._dirty) {
							this.totalDuration();
						}
						var totalDuration = this._totalDuration,
							tl = this._timeline;
						if (time > totalDuration && !uncapped) {
							time = totalDuration;
						}
						this._startTime = (this._paused ? this._pauseTime : tl._time) - ((!this._reversed ? time : totalDuration - time) / this._timeScale);
						if (!tl._dirty) { //for performance improvement. If the parent's cache is already dirty, it already took care of marking the ancestors as dirty too, so skip the function call here.
							this._uncache(false);
						}
						//in case any of the ancestor timelines had completed but should now be enabled, we should reset their totalTime() which will also ensure that they're lined up properly and enabled. Skip for animations that are on the root (wasteful). Example: a TimelineLite.exportRoot() is performed when there's a paused tween on the root, the export will not complete until that tween is unpaused, but imagine a child gets restarted later, after all [unpaused] tweens have completed. The startTime of that child would get pushed out, but one of the ancestors may have completed.
						if (tl._timeline) {
							while (tl._timeline) {
								if (tl._timeline._time !== (tl._startTime + tl._totalTime) / tl._timeScale) {
									tl.totalTime(tl._totalTime, true);
								}
								tl = tl._timeline;
							}
						}
					}
					if (this._gc) {
						this._enabled(true, false);
					}
					if (this._totalTime !== time || this._duration === 0) {
						this.render(time, suppressEvents, false);
						if (_lazyTweens.length) { //in case rendering caused any tweens to lazy-init, we should render them because typically when someone calls seek() or time() or progress(), they expect an immediate render.
							_lazyRender();
						}
					}
				}
				return this;
			};
	
			p.progress = p.totalProgress = function(value, suppressEvents) {
				return (!arguments.length) ? this._time / this.duration() : this.totalTime(this.duration() * value, suppressEvents);
			};
	
			p.startTime = function(value) {
				if (!arguments.length) {
					return this._startTime;
				}
				if (value !== this._startTime) {
					this._startTime = value;
					if (this.timeline) if (this.timeline._sortChildren) {
						this.timeline.add(this, value - this._delay); //ensures that any necessary re-sequencing of Animations in the timeline occurs to make sure the rendering order is correct.
					}
				}
				return this;
			};
	
			p.endTime = function(includeRepeats) {
				return this._startTime + ((includeRepeats != false) ? this.totalDuration() : this.duration()) / this._timeScale;
			};
	
			p.timeScale = function(value) {
				if (!arguments.length) {
					return this._timeScale;
				}
				value = value || _tinyNum; //can't allow zero because it'll throw the math off
				if (this._timeline && this._timeline.smoothChildTiming) {
					var pauseTime = this._pauseTime,
						t = (pauseTime || pauseTime === 0) ? pauseTime : this._timeline.totalTime();
					this._startTime = t - ((t - this._startTime) * this._timeScale / value);
				}
				this._timeScale = value;
				return this._uncache(false);
			};
	
			p.reversed = function(value) {
				if (!arguments.length) {
					return this._reversed;
				}
				if (value != this._reversed) {
					this._reversed = value;
					this.totalTime(((this._timeline && !this._timeline.smoothChildTiming) ? this.totalDuration() - this._totalTime : this._totalTime), true);
				}
				return this;
			};
	
			p.paused = function(value) {
				if (!arguments.length) {
					return this._paused;
				}
				var tl = this._timeline,
					raw, elapsed;
				if (value != this._paused) if (tl) {
					if (!_tickerActive && !value) {
						_ticker.wake();
					}
					raw = tl.rawTime();
					elapsed = raw - this._pauseTime;
					if (!value && tl.smoothChildTiming) {
						this._startTime += elapsed;
						this._uncache(false);
					}
					this._pauseTime = value ? raw : null;
					this._paused = value;
					this._active = this.isActive();
					if (!value && elapsed !== 0 && this._initted && this.duration()) {
						this.render((tl.smoothChildTiming ? this._totalTime : (raw - this._startTime) / this._timeScale), true, true); //in case the target's properties changed via some other tween or manual update by the user, we should force a render.
					}
				}
				if (this._gc && !value) {
					this._enabled(true, false);
				}
				return this;
			};
	
	
	/*
	 * ----------------------------------------------------------------
	 * SimpleTimeline
	 * ----------------------------------------------------------------
	 */
			var SimpleTimeline = _class("core.SimpleTimeline", function(vars) {
				Animation.call(this, 0, vars);
				this.autoRemoveChildren = this.smoothChildTiming = true;
			});
	
			p = SimpleTimeline.prototype = new Animation();
			p.constructor = SimpleTimeline;
			p.kill()._gc = false;
			p._first = p._last = p._recent = null;
			p._sortChildren = false;
	
			p.add = p.insert = function(child, position, align, stagger) {
				var prevTween, st;
				child._startTime = Number(position || 0) + child._delay;
				if (child._paused) if (this !== child._timeline) { //we only adjust the _pauseTime if it wasn't in this timeline already. Remember, sometimes a tween will be inserted again into the same timeline when its startTime is changed so that the tweens in the TimelineLite/Max are re-ordered properly in the linked list (so everything renders in the proper order).
					child._pauseTime = child._startTime + ((this.rawTime() - child._startTime) / child._timeScale);
				}
				if (child.timeline) {
					child.timeline._remove(child, true); //removes from existing timeline so that it can be properly added to this one.
				}
				child.timeline = child._timeline = this;
				if (child._gc) {
					child._enabled(true, true);
				}
				prevTween = this._last;
				if (this._sortChildren) {
					st = child._startTime;
					while (prevTween && prevTween._startTime > st) {
						prevTween = prevTween._prev;
					}
				}
				if (prevTween) {
					child._next = prevTween._next;
					prevTween._next = child;
				} else {
					child._next = this._first;
					this._first = child;
				}
				if (child._next) {
					child._next._prev = child;
				} else {
					this._last = child;
				}
				child._prev = prevTween;
				this._recent = child;
				if (this._timeline) {
					this._uncache(true);
				}
				return this;
			};
	
			p._remove = function(tween, skipDisable) {
				if (tween.timeline === this) {
					if (!skipDisable) {
						tween._enabled(false, true);
					}
	
					if (tween._prev) {
						tween._prev._next = tween._next;
					} else if (this._first === tween) {
						this._first = tween._next;
					}
					if (tween._next) {
						tween._next._prev = tween._prev;
					} else if (this._last === tween) {
						this._last = tween._prev;
					}
					tween._next = tween._prev = tween.timeline = null;
					if (tween === this._recent) {
						this._recent = this._last;
					}
	
					if (this._timeline) {
						this._uncache(true);
					}
				}
				return this;
			};
	
			p.render = function(time, suppressEvents, force) {
				var tween = this._first,
					next;
				this._totalTime = this._time = this._rawPrevTime = time;
				while (tween) {
					next = tween._next; //record it here because the value could change after rendering...
					if (tween._active || (time >= tween._startTime && !tween._paused)) {
						if (!tween._reversed) {
							tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
						} else {
							tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force);
						}
					}
					tween = next;
				}
			};
	
			p.rawTime = function() {
				if (!_tickerActive) {
					_ticker.wake();
				}
				return this._totalTime;
			};
	
	/*
	 * ----------------------------------------------------------------
	 * TweenLite
	 * ----------------------------------------------------------------
	 */
			var TweenLite = _class("TweenLite", function(target, duration, vars) {
					Animation.call(this, duration, vars);
					this.render = TweenLite.prototype.render; //speed optimization (avoid prototype lookup on this "hot" method)
	
					if (target == null) {
						throw "Cannot tween a null target.";
					}
	
					this.target = target = (typeof(target) !== "string") ? target : TweenLite.selector(target) || target;
	
					var isSelector = (target.jquery || (target.length && target !== window && target[0] && (target[0] === window || (target[0].nodeType && target[0].style && !target.nodeType)))),
						overwrite = this.vars.overwrite,
						i, targ, targets;
	
					this._overwrite = overwrite = (overwrite == null) ? _overwriteLookup[TweenLite.defaultOverwrite] : (typeof(overwrite) === "number") ? overwrite >> 0 : _overwriteLookup[overwrite];
	
					if ((isSelector || target instanceof Array || (target.push && _isArray(target))) && typeof(target[0]) !== "number") {
						this._targets = targets = _slice(target);  //don't use Array.prototype.slice.call(target, 0) because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
						this._propLookup = [];
						this._siblings = [];
						for (i = 0; i < targets.length; i++) {
							targ = targets[i];
							if (!targ) {
								targets.splice(i--, 1);
								continue;
							} else if (typeof(targ) === "string") {
								targ = targets[i--] = TweenLite.selector(targ); //in case it's an array of strings
								if (typeof(targ) === "string") {
									targets.splice(i+1, 1); //to avoid an endless loop (can't imagine why the selector would return a string, but just in case)
								}
								continue;
							} else if (targ.length && targ !== window && targ[0] && (targ[0] === window || (targ[0].nodeType && targ[0].style && !targ.nodeType))) { //in case the user is passing in an array of selector objects (like jQuery objects), we need to check one more level and pull things out if necessary. Also note that <select> elements pass all the criteria regarding length and the first child having style, so we must also check to ensure the target isn't an HTML node itself.
								targets.splice(i--, 1);
								this._targets = targets = targets.concat(_slice(targ));
								continue;
							}
							this._siblings[i] = _register(targ, this, false);
							if (overwrite === 1) if (this._siblings[i].length > 1) {
								_applyOverwrite(targ, this, null, 1, this._siblings[i]);
							}
						}
	
					} else {
						this._propLookup = {};
						this._siblings = _register(target, this, false);
						if (overwrite === 1) if (this._siblings.length > 1) {
							_applyOverwrite(target, this, null, 1, this._siblings);
						}
					}
					if (this.vars.immediateRender || (duration === 0 && this._delay === 0 && this.vars.immediateRender !== false)) {
						this._time = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)
						this.render(-this._delay);
					}
				}, true),
				_isSelector = function(v) {
					return (v && v.length && v !== window && v[0] && (v[0] === window || (v[0].nodeType && v[0].style && !v.nodeType))); //we cannot check "nodeType" if the target is window from within an iframe, otherwise it will trigger a security error in some browsers like Firefox.
				},
				_autoCSS = function(vars, target) {
					var css = {},
						p;
					for (p in vars) {
						if (!_reservedProps[p] && (!(p in target) || p === "transform" || p === "x" || p === "y" || p === "width" || p === "height" || p === "className" || p === "border") && (!_plugins[p] || (_plugins[p] && _plugins[p]._autoCSS))) { //note: <img> elements contain read-only "x" and "y" properties. We should also prioritize editing css width/height rather than the element's properties.
							css[p] = vars[p];
							delete vars[p];
						}
					}
					vars.css = css;
				};
	
			p = TweenLite.prototype = new Animation();
			p.constructor = TweenLite;
			p.kill()._gc = false;
	
	//----TweenLite defaults, overwrite management, and root updates ----------------------------------------------------
	
			p.ratio = 0;
			p._firstPT = p._targets = p._overwrittenProps = p._startAt = null;
			p._notifyPluginsOfEnabled = p._lazy = false;
	
			TweenLite.version = "1.16.1";
			TweenLite.defaultEase = p._ease = new Ease(null, null, 1, 1);
			TweenLite.defaultOverwrite = "auto";
			TweenLite.ticker = _ticker;
			TweenLite.autoSleep = 120;
			TweenLite.lagSmoothing = function(threshold, adjustedLag) {
				_ticker.lagSmoothing(threshold, adjustedLag);
			};
	
			TweenLite.selector = window.$ || window.jQuery || function(e) {
				var selector = window.$ || window.jQuery;
				if (selector) {
					TweenLite.selector = selector;
					return selector(e);
				}
				return (typeof(document) === "undefined") ? e : (document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById((e.charAt(0) === "#") ? e.substr(1) : e));
			};
	
			var _lazyTweens = [],
				_lazyLookup = {},
				_internals = TweenLite._internals = {isArray:_isArray, isSelector:_isSelector, lazyTweens:_lazyTweens}, //gives us a way to expose certain private values to other GreenSock classes without contaminating tha main TweenLite object.
				_plugins = TweenLite._plugins = {},
				_tweenLookup = _internals.tweenLookup = {},
				_tweenLookupNum = 0,
				_reservedProps = _internals.reservedProps = {ease:1, delay:1, overwrite:1, onComplete:1, onCompleteParams:1, onCompleteScope:1, useFrames:1, runBackwards:1, startAt:1, onUpdate:1, onUpdateParams:1, onUpdateScope:1, onStart:1, onStartParams:1, onStartScope:1, onReverseComplete:1, onReverseCompleteParams:1, onReverseCompleteScope:1, onRepeat:1, onRepeatParams:1, onRepeatScope:1, easeParams:1, yoyo:1, immediateRender:1, repeat:1, repeatDelay:1, data:1, paused:1, reversed:1, autoCSS:1, lazy:1, onOverwrite:1},
				_overwriteLookup = {none:0, all:1, auto:2, concurrent:3, allOnStart:4, preexisting:5, "true":1, "false":0},
				_rootFramesTimeline = Animation._rootFramesTimeline = new SimpleTimeline(),
				_rootTimeline = Animation._rootTimeline = new SimpleTimeline(),
				_nextGCFrame = 30,
				_lazyRender = _internals.lazyRender = function() {
					var i = _lazyTweens.length,
						tween;
					_lazyLookup = {};
					while (--i > -1) {
						tween = _lazyTweens[i];
						if (tween && tween._lazy !== false) {
							tween.render(tween._lazy[0], tween._lazy[1], true);
							tween._lazy = false;
						}
					}
					_lazyTweens.length = 0;
				};
	
			_rootTimeline._startTime = _ticker.time;
			_rootFramesTimeline._startTime = _ticker.frame;
			_rootTimeline._active = _rootFramesTimeline._active = true;
			setTimeout(_lazyRender, 1); //on some mobile devices, there isn't a "tick" before code runs which means any lazy renders wouldn't run before the next official "tick".
	
			Animation._updateRoot = TweenLite.render = function() {
					var i, a, p;
					if (_lazyTweens.length) { //if code is run outside of the requestAnimationFrame loop, there may be tweens queued AFTER the engine refreshed, so we need to ensure any pending renders occur before we refresh again.
						_lazyRender();
					}
					_rootTimeline.render((_ticker.time - _rootTimeline._startTime) * _rootTimeline._timeScale, false, false);
					_rootFramesTimeline.render((_ticker.frame - _rootFramesTimeline._startTime) * _rootFramesTimeline._timeScale, false, false);
					if (_lazyTweens.length) {
						_lazyRender();
					}
					if (_ticker.frame >= _nextGCFrame) { //dump garbage every 120 frames or whatever the user sets TweenLite.autoSleep to
						_nextGCFrame = _ticker.frame + (parseInt(TweenLite.autoSleep, 10) || 120);
						for (p in _tweenLookup) {
							a = _tweenLookup[p].tweens;
							i = a.length;
							while (--i > -1) {
								if (a[i]._gc) {
									a.splice(i, 1);
								}
							}
							if (a.length === 0) {
								delete _tweenLookup[p];
							}
						}
						//if there are no more tweens in the root timelines, or if they're all paused, make the _timer sleep to reduce load on the CPU slightly
						p = _rootTimeline._first;
						if (!p || p._paused) if (TweenLite.autoSleep && !_rootFramesTimeline._first && _ticker._listeners.tick.length === 1) {
							while (p && p._paused) {
								p = p._next;
							}
							if (!p) {
								_ticker.sleep();
							}
						}
					}
				};
	
			_ticker.addEventListener("tick", Animation._updateRoot);
	
			var _register = function(target, tween, scrub) {
					var id = target._gsTweenID, a, i;
					if (!_tweenLookup[id || (target._gsTweenID = id = "t" + (_tweenLookupNum++))]) {
						_tweenLookup[id] = {target:target, tweens:[]};
					}
					if (tween) {
						a = _tweenLookup[id].tweens;
						a[(i = a.length)] = tween;
						if (scrub) {
							while (--i > -1) {
								if (a[i] === tween) {
									a.splice(i, 1);
								}
							}
						}
					}
					return _tweenLookup[id].tweens;
				},
	
				_onOverwrite = function(overwrittenTween, overwritingTween, target, killedProps) {
					var func = overwrittenTween.vars.onOverwrite, r1, r2;
					if (func) {
						r1 = func(overwrittenTween, overwritingTween, target, killedProps);
					}
					func = TweenLite.onOverwrite;
					if (func) {
						r2 = func(overwrittenTween, overwritingTween, target, killedProps);
					}
					return (r1 !== false && r2 !== false);
				},
				_applyOverwrite = function(target, tween, props, mode, siblings) {
					var i, changed, curTween, l;
					if (mode === 1 || mode >= 4) {
						l = siblings.length;
						for (i = 0; i < l; i++) {
							if ((curTween = siblings[i]) !== tween) {
								if (!curTween._gc) {
									if (_onOverwrite(curTween, tween) && curTween._enabled(false, false)) {
										changed = true;
									}
								}
							} else if (mode === 5) {
								break;
							}
						}
						return changed;
					}
					//NOTE: Add 0.0000000001 to overcome floating point errors that can cause the startTime to be VERY slightly off (when a tween's time() is set for example)
					var startTime = tween._startTime + _tinyNum,
						overlaps = [],
						oCount = 0,
						zeroDur = (tween._duration === 0),
						globalStart;
					i = siblings.length;
					while (--i > -1) {
						if ((curTween = siblings[i]) === tween || curTween._gc || curTween._paused) {
							//ignore
						} else if (curTween._timeline !== tween._timeline) {
							globalStart = globalStart || _checkOverlap(tween, 0, zeroDur);
							if (_checkOverlap(curTween, globalStart, zeroDur) === 0) {
								overlaps[oCount++] = curTween;
							}
						} else if (curTween._startTime <= startTime) if (curTween._startTime + curTween.totalDuration() / curTween._timeScale > startTime) if (!((zeroDur || !curTween._initted) && startTime - curTween._startTime <= 0.0000000002)) {
							overlaps[oCount++] = curTween;
						}
					}
	
					i = oCount;
					while (--i > -1) {
						curTween = overlaps[i];
						if (mode === 2) if (curTween._kill(props, target, tween)) {
							changed = true;
						}
						if (mode !== 2 || (!curTween._firstPT && curTween._initted)) {
							if (mode !== 2 && !_onOverwrite(curTween, tween)) {
								continue;
							}
							if (curTween._enabled(false, false)) { //if all property tweens have been overwritten, kill the tween.
								changed = true;
							}
						}
					}
					return changed;
				},
	
				_checkOverlap = function(tween, reference, zeroDur) {
					var tl = tween._timeline,
						ts = tl._timeScale,
						t = tween._startTime;
					while (tl._timeline) {
						t += tl._startTime;
						ts *= tl._timeScale;
						if (tl._paused) {
							return -100;
						}
						tl = tl._timeline;
					}
					t /= ts;
					return (t > reference) ? t - reference : ((zeroDur && t === reference) || (!tween._initted && t - reference < 2 * _tinyNum)) ? _tinyNum : ((t += tween.totalDuration() / tween._timeScale / ts) > reference + _tinyNum) ? 0 : t - reference - _tinyNum;
				};
	
	
	//---- TweenLite instance methods -----------------------------------------------------------------------------
	
			p._init = function() {
				var v = this.vars,
					op = this._overwrittenProps,
					dur = this._duration,
					immediate = !!v.immediateRender,
					ease = v.ease,
					i, initPlugins, pt, p, startVars;
				if (v.startAt) {
					if (this._startAt) {
						this._startAt.render(-1, true); //if we've run a startAt previously (when the tween instantiated), we should revert it so that the values re-instantiate correctly particularly for relative tweens. Without this, a TweenLite.fromTo(obj, 1, {x:"+=100"}, {x:"-=100"}), for example, would actually jump to +=200 because the startAt would run twice, doubling the relative change.
						this._startAt.kill();
					}
					startVars = {};
					for (p in v.startAt) { //copy the properties/values into a new object to avoid collisions, like var to = {x:0}, from = {x:500}; timeline.fromTo(e, 1, from, to).fromTo(e, 1, to, from);
						startVars[p] = v.startAt[p];
					}
					startVars.overwrite = false;
					startVars.immediateRender = true;
					startVars.lazy = (immediate && v.lazy !== false);
					startVars.startAt = startVars.delay = null; //no nesting of startAt objects allowed (otherwise it could cause an infinite loop).
					this._startAt = TweenLite.to(this.target, 0, startVars);
					if (immediate) {
						if (this._time > 0) {
							this._startAt = null; //tweens that render immediately (like most from() and fromTo() tweens) shouldn't revert when their parent timeline's playhead goes backward past the startTime because the initial render could have happened anytime and it shouldn't be directly correlated to this tween's startTime. Imagine setting up a complex animation where the beginning states of various objects are rendered immediately but the tween doesn't happen for quite some time - if we revert to the starting values as soon as the playhead goes backward past the tween's startTime, it will throw things off visually. Reversion should only happen in TimelineLite/Max instances where immediateRender was false (which is the default in the convenience methods like from()).
						} else if (dur !== 0) {
							return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a TimelineLite or TimelineMax, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
						}
					}
				} else if (v.runBackwards && dur !== 0) {
					//from() tweens must be handled uniquely: their beginning values must be rendered but we don't want overwriting to occur yet (when time is still 0). Wait until the tween actually begins before doing all the routines like overwriting. At that time, we should render at the END of the tween to ensure that things initialize correctly (remember, from() tweens go backwards)
					if (this._startAt) {
						this._startAt.render(-1, true);
						this._startAt.kill();
						this._startAt = null;
					} else {
						if (this._time !== 0) { //in rare cases (like if a from() tween runs and then is invalidate()-ed), immediateRender could be true but the initial forced-render gets skipped, so there's no need to force the render in this context when the _time is greater than 0
							immediate = false;
						}
						pt = {};
						for (p in v) { //copy props into a new object and skip any reserved props, otherwise onComplete or onUpdate or onStart could fire. We should, however, permit autoCSS to go through.
							if (!_reservedProps[p] || p === "autoCSS") {
								pt[p] = v[p];
							}
						}
						pt.overwrite = 0;
						pt.data = "isFromStart"; //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
						pt.lazy = (immediate && v.lazy !== false);
						pt.immediateRender = immediate; //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
						this._startAt = TweenLite.to(this.target, 0, pt);
						if (!immediate) {
							this._startAt._init(); //ensures that the initial values are recorded
							this._startAt._enabled(false); //no need to have the tween render on the next cycle. Disable it because we'll always manually control the renders of the _startAt tween.
							if (this.vars.immediateRender) {
								this._startAt = null;
							}
						} else if (this._time === 0) {
							return;
						}
					}
				}
				this._ease = ease = (!ease) ? TweenLite.defaultEase : (ease instanceof Ease) ? ease : (typeof(ease) === "function") ? new Ease(ease, v.easeParams) : _easeMap[ease] || TweenLite.defaultEase;
				if (v.easeParams instanceof Array && ease.config) {
					this._ease = ease.config.apply(ease, v.easeParams);
				}
				this._easeType = this._ease._type;
				this._easePower = this._ease._power;
				this._firstPT = null;
	
				if (this._targets) {
					i = this._targets.length;
					while (--i > -1) {
						if ( this._initProps( this._targets[i], (this._propLookup[i] = {}), this._siblings[i], (op ? op[i] : null)) ) {
							initPlugins = true;
						}
					}
				} else {
					initPlugins = this._initProps(this.target, this._propLookup, this._siblings, op);
				}
	
				if (initPlugins) {
					TweenLite._onPluginEvent("_onInitAllProps", this); //reorders the array in order of priority. Uses a static TweenPlugin method in order to minimize file size in TweenLite
				}
				if (op) if (!this._firstPT) if (typeof(this.target) !== "function") { //if all tweening properties have been overwritten, kill the tween. If the target is a function, it's probably a delayedCall so let it live.
					this._enabled(false, false);
				}
				if (v.runBackwards) {
					pt = this._firstPT;
					while (pt) {
						pt.s += pt.c;
						pt.c = -pt.c;
						pt = pt._next;
					}
				}
				this._onUpdate = v.onUpdate;
				this._initted = true;
			};
	
			p._initProps = function(target, propLookup, siblings, overwrittenProps) {
				var p, i, initPlugins, plugin, pt, v;
				if (target == null) {
					return false;
				}
	
				if (_lazyLookup[target._gsTweenID]) {
					_lazyRender(); //if other tweens of the same target have recently initted but haven't rendered yet, we've got to force the render so that the starting values are correct (imagine populating a timeline with a bunch of sequential tweens and then jumping to the end)
				}
	
				if (!this.vars.css) if (target.style) if (target !== window && target.nodeType) if (_plugins.css) if (this.vars.autoCSS !== false) { //it's so common to use TweenLite/Max to animate the css of DOM elements, we assume that if the target is a DOM element, that's what is intended (a convenience so that users don't have to wrap things in css:{}, although we still recommend it for a slight performance boost and better specificity). Note: we cannot check "nodeType" on the window inside an iframe.
					_autoCSS(this.vars, target);
				}
				for (p in this.vars) {
					v = this.vars[p];
					if (_reservedProps[p]) {
						if (v) if ((v instanceof Array) || (v.push && _isArray(v))) if (v.join("").indexOf("{self}") !== -1) {
							this.vars[p] = v = this._swapSelfInParams(v, this);
						}
	
					} else if (_plugins[p] && (plugin = new _plugins[p]())._onInitTween(target, this.vars[p], this)) {
	
						//t - target 		[object]
						//p - property 		[string]
						//s - start			[number]
						//c - change		[number]
						//f - isFunction	[boolean]
						//n - name			[string]
						//pg - isPlugin 	[boolean]
						//pr - priority		[number]
						this._firstPT = pt = {_next:this._firstPT, t:plugin, p:"setRatio", s:0, c:1, f:true, n:p, pg:true, pr:plugin._priority};
						i = plugin._overwriteProps.length;
						while (--i > -1) {
							propLookup[plugin._overwriteProps[i]] = this._firstPT;
						}
						if (plugin._priority || plugin._onInitAllProps) {
							initPlugins = true;
						}
						if (plugin._onDisable || plugin._onEnable) {
							this._notifyPluginsOfEnabled = true;
						}
	
					} else {
						this._firstPT = propLookup[p] = pt = {_next:this._firstPT, t:target, p:p, f:(typeof(target[p]) === "function"), n:p, pg:false, pr:0};
						pt.s = (!pt.f) ? parseFloat(target[p]) : target[ ((p.indexOf("set") || typeof(target["get" + p.substr(3)]) !== "function") ? p : "get" + p.substr(3)) ]();
						pt.c = (typeof(v) === "string" && v.charAt(1) === "=") ? parseInt(v.charAt(0) + "1", 10) * Number(v.substr(2)) : (Number(v) - pt.s) || 0;
					}
					if (pt) if (pt._next) {
						pt._next._prev = pt;
					}
				}
	
				if (overwrittenProps) if (this._kill(overwrittenProps, target)) { //another tween may have tried to overwrite properties of this tween before init() was called (like if two tweens start at the same time, the one created second will run first)
					return this._initProps(target, propLookup, siblings, overwrittenProps);
				}
				if (this._overwrite > 1) if (this._firstPT) if (siblings.length > 1) if (_applyOverwrite(target, this, propLookup, this._overwrite, siblings)) {
					this._kill(propLookup, target);
					return this._initProps(target, propLookup, siblings, overwrittenProps);
				}
				if (this._firstPT) if ((this.vars.lazy !== false && this._duration) || (this.vars.lazy && !this._duration)) { //zero duration tweens don't lazy render by default; everything else does.
					_lazyLookup[target._gsTweenID] = true;
				}
				return initPlugins;
			};
	
			p.render = function(time, suppressEvents, force) {
				var prevTime = this._time,
					duration = this._duration,
					prevRawPrevTime = this._rawPrevTime,
					isComplete, callback, pt, rawPrevTime;
				if (time >= duration) {
					this._totalTime = this._time = duration;
					this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1;
					if (!this._reversed ) {
						isComplete = true;
						callback = "onComplete";
						force = (force || this._timeline.autoRemoveChildren); //otherwise, if the animation is unpaused/activated after it's already finished, it doesn't get removed from the parent timeline.
					}
					if (duration === 0) if (this._initted || !this.vars.lazy || force) { //zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
						if (this._startTime === this._timeline._duration) { //if a zero-duration tween is at the VERY end of a timeline and that timeline renders at its end, it will typically add a tiny bit of cushion to the render time to prevent rounding errors from getting in the way of tweens rendering their VERY end. If we then reverse() that timeline, the zero-duration tween will trigger its onReverseComplete even though technically the playhead didn't pass over it again. It's a very specific edge case we must accommodate.
							time = 0;
						}
						if (time === 0 || prevRawPrevTime < 0 || (prevRawPrevTime === _tinyNum && this.data !== "isPause")) if (prevRawPrevTime !== time) { //note: when this.data is "isPause", it's a callback added by addPause() on a timeline that we should not be triggered when LEAVING its exact start time. In other words, tl.addPause(1).play(1) shouldn't pause.
							force = true;
							if (prevRawPrevTime > _tinyNum) {
								callback = "onReverseComplete";
							}
						}
						this._rawPrevTime = rawPrevTime = (!suppressEvents || time || prevRawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
					}
	
				} else if (time < 0.0000001) { //to work around occasional floating point math artifacts, round super small values to 0.
					this._totalTime = this._time = 0;
					this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;
					if (prevTime !== 0 || (duration === 0 && prevRawPrevTime > 0)) {
						callback = "onReverseComplete";
						isComplete = this._reversed;
					}
					if (time < 0) {
						this._active = false;
						if (duration === 0) if (this._initted || !this.vars.lazy || force) { //zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
							if (prevRawPrevTime >= 0 && !(prevRawPrevTime === _tinyNum && this.data === "isPause")) {
								force = true;
							}
							this._rawPrevTime = rawPrevTime = (!suppressEvents || time || prevRawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
						}
					}
					if (!this._initted) { //if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately.
						force = true;
					}
				} else {
					this._totalTime = this._time = time;
	
					if (this._easeType) {
						var r = time / duration, type = this._easeType, pow = this._easePower;
						if (type === 1 || (type === 3 && r >= 0.5)) {
							r = 1 - r;
						}
						if (type === 3) {
							r *= 2;
						}
						if (pow === 1) {
							r *= r;
						} else if (pow === 2) {
							r *= r * r;
						} else if (pow === 3) {
							r *= r * r * r;
						} else if (pow === 4) {
							r *= r * r * r * r;
						}
	
						if (type === 1) {
							this.ratio = 1 - r;
						} else if (type === 2) {
							this.ratio = r;
						} else if (time / duration < 0.5) {
							this.ratio = r / 2;
						} else {
							this.ratio = 1 - (r / 2);
						}
	
					} else {
						this.ratio = this._ease.getRatio(time / duration);
					}
				}
	
				if (this._time === prevTime && !force) {
					return;
				} else if (!this._initted) {
					this._init();
					if (!this._initted || this._gc) { //immediateRender tweens typically won't initialize until the playhead advances (_time is greater than 0) in order to ensure that overwriting occurs properly. Also, if all of the tweening properties have been overwritten (which would cause _gc to be true, as set in _init()), we shouldn't continue otherwise an onStart callback could be called for example.
						return;
					} else if (!force && this._firstPT && ((this.vars.lazy !== false && this._duration) || (this.vars.lazy && !this._duration))) {
						this._time = this._totalTime = prevTime;
						this._rawPrevTime = prevRawPrevTime;
						_lazyTweens.push(this);
						this._lazy = [time, suppressEvents];
						return;
					}
					//_ease is initially set to defaultEase, so now that init() has run, _ease is set properly and we need to recalculate the ratio. Overall this is faster than using conditional logic earlier in the method to avoid having to set ratio twice because we only init() once but renderTime() gets called VERY frequently.
					if (this._time && !isComplete) {
						this.ratio = this._ease.getRatio(this._time / duration);
					} else if (isComplete && this._ease._calcEnd) {
						this.ratio = this._ease.getRatio((this._time === 0) ? 0 : 1);
					}
				}
				if (this._lazy !== false) { //in case a lazy render is pending, we should flush it because the new render is occurring now (imagine a lazy tween instantiating and then immediately the user calls tween.seek(tween.duration()), skipping to the end - the end render would be forced, and then if we didn't flush the lazy render, it'd fire AFTER the seek(), rendering it at the wrong time.
					this._lazy = false;
				}
				if (!this._active) if (!this._paused && this._time !== prevTime && time >= 0) {
					this._active = true;  //so that if the user renders a tween (as opposed to the timeline rendering it), the timeline is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the tween already finished but the user manually re-renders it as halfway done.
				}
				if (prevTime === 0) {
					if (this._startAt) {
						if (time >= 0) {
							this._startAt.render(time, suppressEvents, force);
						} else if (!callback) {
							callback = "_dummyGS"; //if no callback is defined, use a dummy value just so that the condition at the end evaluates as true because _startAt should render AFTER the normal render loop when the time is negative. We could handle this in a more intuitive way, of course, but the render loop is the MOST important thing to optimize, so this technique allows us to avoid adding extra conditional logic in a high-frequency area.
						}
					}
					if (this.vars.onStart) if (this._time !== 0 || duration === 0) if (!suppressEvents) {
						this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || _blankArray);
					}
				}
				pt = this._firstPT;
				while (pt) {
					if (pt.f) {
						pt.t[pt.p](pt.c * this.ratio + pt.s);
					} else {
						pt.t[pt.p] = pt.c * this.ratio + pt.s;
					}
					pt = pt._next;
				}
	
				if (this._onUpdate) {
					if (time < 0) if (this._startAt && time !== -0.0001) { //if the tween is positioned at the VERY beginning (_startTime 0) of its parent timeline, it's illegal for the playhead to go back further, so we should not render the recorded startAt values.
						this._startAt.render(time, suppressEvents, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.
					}
					if (!suppressEvents) if (this._time !== prevTime || isComplete) {
						this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || _blankArray);
					}
				}
				if (callback) if (!this._gc || force) { //check _gc because there's a chance that kill() could be called in an onUpdate
					if (time < 0 && this._startAt && !this._onUpdate && time !== -0.0001) { //-0.0001 is a special value that we use when looping back to the beginning of a repeated TimelineMax, in which case we shouldn't render the _startAt values.
						this._startAt.render(time, suppressEvents, force);
					}
					if (isComplete) {
						if (this._timeline.autoRemoveChildren) {
							this._enabled(false, false);
						}
						this._active = false;
					}
					if (!suppressEvents && this.vars[callback]) {
						this.vars[callback].apply(this.vars[callback + "Scope"] || this, this.vars[callback + "Params"] || _blankArray);
					}
					if (duration === 0 && this._rawPrevTime === _tinyNum && rawPrevTime !== _tinyNum) { //the onComplete or onReverseComplete could trigger movement of the playhead and for zero-duration tweens (which must discern direction) that land directly back on their start time, we don't want to fire again on the next render. Think of several addPause()'s in a timeline that forces the playhead to a certain spot, but what if it's already paused and another tween is tweening the "time" of the timeline? Each time it moves [forward] past that spot, it would move back, and since suppressEvents is true, it'd reset _rawPrevTime to _tinyNum so that when it begins again, the callback would fire (so ultimately it could bounce back and forth during that tween). Again, this is a very uncommon scenario, but possible nonetheless.
						this._rawPrevTime = 0;
					}
				}
			};
	
			p._kill = function(vars, target, overwritingTween) {
				if (vars === "all") {
					vars = null;
				}
				if (vars == null) if (target == null || target === this.target) {
					this._lazy = false;
					return this._enabled(false, false);
				}
				target = (typeof(target) !== "string") ? (target || this._targets || this.target) : TweenLite.selector(target) || target;
				var i, overwrittenProps, p, pt, propLookup, changed, killProps, record, killed;
				if ((_isArray(target) || _isSelector(target)) && typeof(target[0]) !== "number") {
					i = target.length;
					while (--i > -1) {
						if (this._kill(vars, target[i])) {
							changed = true;
						}
					}
				} else {
					if (this._targets) {
						i = this._targets.length;
						while (--i > -1) {
							if (target === this._targets[i]) {
								propLookup = this._propLookup[i] || {};
								this._overwrittenProps = this._overwrittenProps || [];
								overwrittenProps = this._overwrittenProps[i] = vars ? this._overwrittenProps[i] || {} : "all";
								break;
							}
						}
					} else if (target !== this.target) {
						return false;
					} else {
						propLookup = this._propLookup;
						overwrittenProps = this._overwrittenProps = vars ? this._overwrittenProps || {} : "all";
					}
	
					if (propLookup) {
						killProps = vars || propLookup;
						record = (vars !== overwrittenProps && overwrittenProps !== "all" && vars !== propLookup && (typeof(vars) !== "object" || !vars._tempKill)); //_tempKill is a super-secret way to delete a particular tweening property but NOT have it remembered as an official overwritten property (like in BezierPlugin)
						if (overwritingTween && (TweenLite.onOverwrite || this.vars.onOverwrite)) {
							for (p in killProps) {
								if (propLookup[p]) {
									if (!killed) {
										killed = [];
									}
									killed.push(p);
								}
							}
							if (!_onOverwrite(this, overwritingTween, target, killed)) { //if the onOverwrite returned false, that means the user wants to override the overwriting (cancel it).
								return false;
							}
						}
	
						for (p in killProps) {
							if ((pt = propLookup[p])) {
								if (pt.pg && pt.t._kill(killProps)) {
									changed = true; //some plugins need to be notified so they can perform cleanup tasks first
								}
								if (!pt.pg || pt.t._overwriteProps.length === 0) {
									if (pt._prev) {
										pt._prev._next = pt._next;
									} else if (pt === this._firstPT) {
										this._firstPT = pt._next;
									}
									if (pt._next) {
										pt._next._prev = pt._prev;
									}
									pt._next = pt._prev = null;
								}
								delete propLookup[p];
							}
							if (record) {
								overwrittenProps[p] = 1;
							}
						}
						if (!this._firstPT && this._initted) { //if all tweening properties are killed, kill the tween. Without this line, if there's a tween with multiple targets and then you killTweensOf() each target individually, the tween would technically still remain active and fire its onComplete even though there aren't any more properties tweening.
							this._enabled(false, false);
						}
					}
				}
				return changed;
			};
	
			p.invalidate = function() {
				if (this._notifyPluginsOfEnabled) {
					TweenLite._onPluginEvent("_onDisable", this);
				}
				this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null;
				this._notifyPluginsOfEnabled = this._active = this._lazy = false;
				this._propLookup = (this._targets) ? {} : [];
				Animation.prototype.invalidate.call(this);
				if (this.vars.immediateRender) {
					this._time = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)
					this.render(-this._delay);
				}
				return this;
			};
	
			p._enabled = function(enabled, ignoreTimeline) {
				if (!_tickerActive) {
					_ticker.wake();
				}
				if (enabled && this._gc) {
					var targets = this._targets,
						i;
					if (targets) {
						i = targets.length;
						while (--i > -1) {
							this._siblings[i] = _register(targets[i], this, true);
						}
					} else {
						this._siblings = _register(this.target, this, true);
					}
				}
				Animation.prototype._enabled.call(this, enabled, ignoreTimeline);
				if (this._notifyPluginsOfEnabled) if (this._firstPT) {
					return TweenLite._onPluginEvent((enabled ? "_onEnable" : "_onDisable"), this);
				}
				return false;
			};
	
	
	//----TweenLite static methods -----------------------------------------------------
	
			TweenLite.to = function(target, duration, vars) {
				return new TweenLite(target, duration, vars);
			};
	
			TweenLite.from = function(target, duration, vars) {
				vars.runBackwards = true;
				vars.immediateRender = (vars.immediateRender != false);
				return new TweenLite(target, duration, vars);
			};
	
			TweenLite.fromTo = function(target, duration, fromVars, toVars) {
				toVars.startAt = fromVars;
				toVars.immediateRender = (toVars.immediateRender != false && fromVars.immediateRender != false);
				return new TweenLite(target, duration, toVars);
			};
	
			TweenLite.delayedCall = function(delay, callback, params, scope, useFrames) {
				return new TweenLite(callback, 0, {delay:delay, onComplete:callback, onCompleteParams:params, onCompleteScope:scope, onReverseComplete:callback, onReverseCompleteParams:params, onReverseCompleteScope:scope, immediateRender:false, lazy:false, useFrames:useFrames, overwrite:0});
			};
	
			TweenLite.set = function(target, vars) {
				return new TweenLite(target, 0, vars);
			};
	
			TweenLite.getTweensOf = function(target, onlyActive) {
				if (target == null) { return []; }
				target = (typeof(target) !== "string") ? target : TweenLite.selector(target) || target;
				var i, a, j, t;
				if ((_isArray(target) || _isSelector(target)) && typeof(target[0]) !== "number") {
					i = target.length;
					a = [];
					while (--i > -1) {
						a = a.concat(TweenLite.getTweensOf(target[i], onlyActive));
					}
					i = a.length;
					//now get rid of any duplicates (tweens of arrays of objects could cause duplicates)
					while (--i > -1) {
						t = a[i];
						j = i;
						while (--j > -1) {
							if (t === a[j]) {
								a.splice(i, 1);
							}
						}
					}
				} else {
					a = _register(target).concat();
					i = a.length;
					while (--i > -1) {
						if (a[i]._gc || (onlyActive && !a[i].isActive())) {
							a.splice(i, 1);
						}
					}
				}
				return a;
			};
	
			TweenLite.killTweensOf = TweenLite.killDelayedCallsTo = function(target, onlyActive, vars) {
				if (typeof(onlyActive) === "object") {
					vars = onlyActive; //for backwards compatibility (before "onlyActive" parameter was inserted)
					onlyActive = false;
				}
				var a = TweenLite.getTweensOf(target, onlyActive),
					i = a.length;
				while (--i > -1) {
					a[i]._kill(vars, target);
				}
			};
	
	
	
	/*
	 * ----------------------------------------------------------------
	 * TweenPlugin   (could easily be split out as a separate file/class, but included for ease of use (so that people don't need to include another script call before loading plugins which is easy to forget)
	 * ----------------------------------------------------------------
	 */
			var TweenPlugin = _class("plugins.TweenPlugin", function(props, priority) {
						this._overwriteProps = (props || "").split(",");
						this._propName = this._overwriteProps[0];
						this._priority = priority || 0;
						this._super = TweenPlugin.prototype;
					}, true);
	
			p = TweenPlugin.prototype;
			TweenPlugin.version = "1.10.1";
			TweenPlugin.API = 2;
			p._firstPT = null;
	
			p._addTween = function(target, prop, start, end, overwriteProp, round) {
				var c, pt;
				if (end != null && (c = (typeof(end) === "number" || end.charAt(1) !== "=") ? Number(end) - start : parseInt(end.charAt(0) + "1", 10) * Number(end.substr(2)))) {
					this._firstPT = pt = {_next:this._firstPT, t:target, p:prop, s:start, c:c, f:(typeof(target[prop]) === "function"), n:overwriteProp || prop, r:round};
					if (pt._next) {
						pt._next._prev = pt;
					}
					return pt;
				}
			};
	
			p.setRatio = function(v) {
				var pt = this._firstPT,
					min = 0.000001,
					val;
				while (pt) {
					val = pt.c * v + pt.s;
					if (pt.r) {
						val = Math.round(val);
					} else if (val < min) if (val > -min) { //prevents issues with converting very small numbers to strings in the browser
						val = 0;
					}
					if (pt.f) {
						pt.t[pt.p](val);
					} else {
						pt.t[pt.p] = val;
					}
					pt = pt._next;
				}
			};
	
			p._kill = function(lookup) {
				var a = this._overwriteProps,
					pt = this._firstPT,
					i;
				if (lookup[this._propName] != null) {
					this._overwriteProps = [];
				} else {
					i = a.length;
					while (--i > -1) {
						if (lookup[a[i]] != null) {
							a.splice(i, 1);
						}
					}
				}
				while (pt) {
					if (lookup[pt.n] != null) {
						if (pt._next) {
							pt._next._prev = pt._prev;
						}
						if (pt._prev) {
							pt._prev._next = pt._next;
							pt._prev = null;
						} else if (this._firstPT === pt) {
							this._firstPT = pt._next;
						}
					}
					pt = pt._next;
				}
				return false;
			};
	
			p._roundProps = function(lookup, value) {
				var pt = this._firstPT;
				while (pt) {
					if (lookup[this._propName] || (pt.n != null && lookup[ pt.n.split(this._propName + "_").join("") ])) { //some properties that are very plugin-specific add a prefix named after the _propName plus an underscore, so we need to ignore that extra stuff here.
						pt.r = value;
					}
					pt = pt._next;
				}
			};
	
			TweenLite._onPluginEvent = function(type, tween) {
				var pt = tween._firstPT,
					changed, pt2, first, last, next;
				if (type === "_onInitAllProps") {
					//sorts the PropTween linked list in order of priority because some plugins need to render earlier/later than others, like MotionBlurPlugin applies its effects after all x/y/alpha tweens have rendered on each frame.
					while (pt) {
						next = pt._next;
						pt2 = first;
						while (pt2 && pt2.pr > pt.pr) {
							pt2 = pt2._next;
						}
						if ((pt._prev = pt2 ? pt2._prev : last)) {
							pt._prev._next = pt;
						} else {
							first = pt;
						}
						if ((pt._next = pt2)) {
							pt2._prev = pt;
						} else {
							last = pt;
						}
						pt = next;
					}
					pt = tween._firstPT = first;
				}
				while (pt) {
					if (pt.pg) if (typeof(pt.t[type]) === "function") if (pt.t[type]()) {
						changed = true;
					}
					pt = pt._next;
				}
				return changed;
			};
	
			TweenPlugin.activate = function(plugins) {
				var i = plugins.length;
				while (--i > -1) {
					if (plugins[i].API === TweenPlugin.API) {
						_plugins[(new plugins[i]())._propName] = plugins[i];
					}
				}
				return true;
			};
	
			//provides a more concise way to define plugins that have no dependencies besides TweenPlugin and TweenLite, wrapping common boilerplate stuff into one function (added in 1.9.0). You don't NEED to use this to define a plugin - the old way still works and can be useful in certain (rare) situations.
			_gsDefine.plugin = function(config) {
				if (!config || !config.propName || !config.init || !config.API) { throw "illegal plugin definition."; }
				var propName = config.propName,
					priority = config.priority || 0,
					overwriteProps = config.overwriteProps,
					map = {init:"_onInitTween", set:"setRatio", kill:"_kill", round:"_roundProps", initAll:"_onInitAllProps"},
					Plugin = _class("plugins." + propName.charAt(0).toUpperCase() + propName.substr(1) + "Plugin",
						function() {
							TweenPlugin.call(this, propName, priority);
							this._overwriteProps = overwriteProps || [];
						}, (config.global === true)),
					p = Plugin.prototype = new TweenPlugin(propName),
					prop;
				p.constructor = Plugin;
				Plugin.API = config.API;
				for (prop in map) {
					if (typeof(config[prop]) === "function") {
						p[map[prop]] = config[prop];
					}
				}
				Plugin.version = config.version;
				TweenPlugin.activate([Plugin]);
				return Plugin;
			};
	
	
			//now run through all the dependencies discovered and if any are missing, log that to the console as a warning. This is why it's best to have TweenLite load last - it can check all the dependencies for you.
			a = window._gsQueue;
			if (a) {
				for (i = 0; i < a.length; i++) {
					a[i]();
				}
				for (p in _defLookup) {
					if (!_defLookup[p].func) {
						window.console.log("GSAP encountered missing dependency: com.greensock." + p);
					}
				}
			}
	
			_tickerActive = false; //ensures that the first official animation forces a ticker.tick() to update the time when it is instantiated
	
	})((typeof(module) !== "undefined" && module.exports && typeof(global) !== "undefined") ? global : this || window, "TweenMax");
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }

});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9kZW1vLWdzYXAvYXBwLmpzIiwid2VicGFjazovLy8uL2V4YW1wbGVzL2RlbW8tZ3NhcC9hcHAtc3BhcmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwYXJrLXNjcm9sbC1nc2FwLmpzIiwid2VicGFjazovLy8uL3NyYy9nc2FwLWFuaW1hdG9yLmpzIiwid2VicGFjazovLy8uL34vZ3NhcC9zcmMvdW5jb21wcmVzc2VkL1R3ZWVuTWF4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxLQUFJLEtBQUssR0FBRyxtQkFBTyxDQUFDLENBQU8sQ0FBQyxDQUFDO0FBQzdCLEtBQUksZUFBZSxHQUFHLG1CQUFPLENBQUMsQ0FBYyxDQUFDLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQzs7Z0JBQ3JDLG1CQUFPLENBQUMsQ0FBYSxDQUFDOztLQUFqRCxXQUFXLFlBQVgsV0FBVztLQUFFLFVBQVUsWUFBVixVQUFVOztBQUM1QixLQUFJLEVBQUUsR0FBRyxtQkFBTyxDQUFDLENBQVksQ0FBQyxDQUFDOztBQUUvQixLQUFJLElBQUksR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDOzs7QUFDM0IsU0FBTSxFQUFFLENBQUMsZUFBZSxDQUFDOztBQUV6QixrQkFBZSw2QkFBRztBQUNoQixZQUFPO0FBQ0wsdUJBQWdCLEVBQUUsQ0FBQztNQUNwQjtJQUNGOztBQUVELG9CQUFpQiwrQkFBRzs7QUFFbEIsU0FBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ2xELFNBQUksTUFBTSxHQUFHLEVBQUMsQ0FBRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDdEMsU0FBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUM7QUFDM0IsU0FBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsTUFBTSxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUM7SUFDcEQ7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Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0NBQXFDLG9PQUFvTztBQUN6UTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkJBQTBCO0FB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LEtBQUk7QUFDSjtBQUNBO0FBQ0EseUJBQXdCO0FBQ3hCLHdDQUF1QztBQUN2QztBQUNBLE9BQU07QUFDTjtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvS0FBbUs7QUFDbks7QUFDQSwrQkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFFOzs7Ozs7Ozs7OztBQVdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUU7Ozs7Ozs7Ozs7OztBQVlGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0osNENBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsTUFBSyxvQkFBb0I7QUFDekI7QUFDQTtBQUNBLE1BQUssT0FBTztBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsS0FBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxNQUFLO0FBQ0w7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Es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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSixJQUFHOztBQUVIO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBCQUF5QjtBQUN6QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJFQUEwRTtBQUMxRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBd0IsS0FBSztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSwwRUFBeUUsS0FBSztBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQWtEO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvSEFBbUg7QUFDbkg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0RBQXFEO0FBQ3JEO0FBQ0E7QUFD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QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkdBQTBHO0FBQzFHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFFQUFvRSxvQ0FBb0M7QUFDeEc7QUFDQTtBQUNBO0FBQ0EsWUFBVyxrR0FBa0c7QUFDN0c7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLGVBQWMsY0FBYztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlCQUF3Qjs7QUFFeEIsRUFBQyw4SCIsInNvdXJjZXNDb250ZW50IjpbInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUHVyZVJlbmRlck1peGluID0gcmVxdWlyZSgncmVhY3QvYWRkb25zJykuYWRkb25zLlB1cmVSZW5kZXJNaXhpbjtcbnZhciB7U3BhcmtTY3JvbGwsIFNwYXJrUHJveHl9ID0gcmVxdWlyZSgnLi9hcHAtc3BhcmsnKTtcbnZhciBjeCA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIEhlcm8gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIG1peGluczogW1B1cmVSZW5kZXJNaXhpbl0sXG5cbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzdHJva2VEYXNoT2Zmc2V0OiAwXG4gICAgfVxuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIGluaXRpYWxpemUgc3ZnXG4gICAgdmFyIG5vZGUgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnMuc3BhcmtQYXRoKTtcbiAgICB2YXIgbGVuZ3RoID0gfn4gbm9kZS5nZXRUb3RhbExlbmd0aCgpO1xuICAgIHRoaXMub2Zmc2V0VGFyZ2V0ID0gbGVuZ3RoO1xuICAgIG5vZGUuc3R5bGUuc3Ryb2tlRGFzaGFycmF5ID0gbGVuZ3RoICsgJyAnICsgbGVuZ3RoO1xuICB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFNwYXJrUHJveHkuZGl2IHByb3h5SWQ9XCJoZXJvXCIgY2xhc3NOYW1lPVwiaGVyb1wiPlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2dpbGJveC9yZWFjdC1zcGFyay1zY3JvbGxcIj5cbiAgICAgICAgICA8U3BhcmtTY3JvbGwuaDFcbiAgICAgICAgICAgIHByb3h5PVwiaGVyb1wiXG4gICAgICAgICAgICB0aW1lbGluZT17e1xuICAgICAgICAgICAgICB0b3BUb3A6IHsgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMHB4LDE1MHB4LDBweCknIH0sXG4gICAgICAgICAgICAgICd0b3BUb3ArMjAwJzogeyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwcHgsMTAwcHgsMHB4KScgfVxuICAgICAgICAgICAgfX0+XG5cbiAgICAgICAgICAgIDxTcGFya1Njcm9sbC5zcGFuXG4gICAgICAgICAgICAgIHByb3h5PVwiaGVyb1wiXG4gICAgICAgICAgICAgIGNhbGxiYWNrPXsgcmF0aW8gPT4gdGhpcy5zZXRTdGF0ZSh7c3Ryb2tlRGFzaG9mZnNldDogfn4odGhpcy5vZmZzZXRUYXJnZXQqcmF0aW8pfSkgfVxuICAgICAgICAgICAgICB0aW1lbGluZT17e3RvcFRvcDowLCAndG9wVG9wKzE1MCc6MH19PlxuXG4gICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIyOTZweFwiIGhlaWdodD1cIjIyOHB4XCIgdmlld0JveD1cIjAgMCAyOTYgMjI4XCIgdmVyc2lvbj1cIjEuMVwiPlxuICAgICAgICAgICAgICAgIDxnIGlkPVwiUGFnZS0xXCIgc3Ryb2tlPVwibm9uZVwiIHN0cm9rZVdpZHRoPVwiMVwiIGZpbGw9XCJub25lXCIgZmlsbFJ1bGU9XCJldmVub2RkXCI+XG4gICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICByZWY9XCJzcGFya1BhdGhcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3N0cm9rZURhc2hvZmZzZXQ6IHRoaXMuc3RhdGUuc3Ryb2tlRGFzaG9mZnNldH19XG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNNDMuNzc3NDQ0Miw3MS40ODk4NDk1IEM2OC4xMjIzODYxLDEzLjk4MTUwMzIgMi4xOTQ1NDM5Nyw0OC4wNDA3MjIzIDIxLjY3ODIyODYsNjIuNjQ4OTIwNyBDMzUuNjY0Mzk0NSw3My4xMzUyNjgyIDU4LjkwOTY4ODIsNzAuNzc0Nzc4OSA2NS44NzY2NTk4LDkwLjI3NzU5OTkgQzgxLjMyNjYwOTQsMTMzLjUyNzAzNyA1OC43MzA1NDY2LDE5MS4zODYwMTYgOC45NjY2NzUyNCwxOTEuMzg2MDE2IEMtMjEuNzg2NzI3OCwxMjQuNDE5MjI2IDU4LjUxNjU1MDUsOTUuMDYwNDQwOSAxMDUuNjU3NzMzLDcxLjQ4OTg0OTUgQzExMS41ODcwMTksNjguNTI1MjA2NSAxMDYuODQzNzg2LDg0Ljg1NTEwMDYgMTA1LjY1NzczMyw5MS4zNzcyNzk3IEM5OS42MTIzOTY1LDEyNC42MjA5NjcgOTEuNTIxNDQxMSwxNTcuNDc3MzMgODUuNzcwMzAyOSwxOTAuODMzMDY5IEM4NC44Njg1NzY0LDE5Ni4wNjI5NDggODEuNjI3NDY0MiwyMTQuODI5Mjk5IDgwLjc5Mzc4NTcsMjIyLjMyNjE2IEM4MC42NzE1NTk4LDIyMy40MjUyNzggODAuNzkzNzg1NywyMjYuNzQ5NzMxIDgwLjc5Mzc4NTcsMjI1LjY0MzgzOCBDODAuNzkzNzg1NywxNzguMTkwMjMgODAuMDUzNTkxMiwxMzIuOTc5NzY0IDkyLjM5OTQ0NjMsODYuNjc0MTI5MyBDOTMuODExMzQwNSw4MS4zNzg1MzM0IDEwOC4zMDU5NCwzOS43Njg1NzM4IDEyNC45OTg0Myw1NC4wNzUxNDU3IEMxNTYuNzUyNTk1LDgxLjI5MDU3MzUgOTIuNTcyNDQ0MSw5My40NzAyOTM2IDEyMS4xMjc4MDUsOTYuMDY4MDA0NCBDMTI4LjI4MjQyMiw5Ni43MTg4Njc0IDEzNS42NTU0Niw5Ny41NzI2NTI5IDE0Mi42ODAyODcsOTYuMDY4MDA0NCBDMTQ4LjczNjQ2Miw5NC43NzA4MzE4IDE4Ny4xMDg2NjUsNzEuNDQwMjE2NSAxNzUuMjczMDU4LDU5LjYwNDYwOTMgQzE1OS43Njg0MTQsNDQuMDk5OTY1MiAxNDcuMDg0Nzk4LDg5LjI5ODk2NTggMTUyLjA2Nzk1LDkwLjU0NDc1MzggQzE2Ny4zMDQ2NzksOTQuMzUzOTM2MiAxNjMuNDk4ODUxLDcyLjMwOTk0OTggMTcxLjQwODY0Niw3Mi4zMDk5NDk4IEMxNzUuNDMyMTY1LDcyLjMwOTk0OTggMTcwLjkwOTc1Nyw4Mi42NDE4MzA4IDE3NC43MjYzMjUsODMuOTE1NjEwNCBDMTg4LjEwODkzOCw4OC4zODIwNTc3IDIwMC42NzIxNzIsNzIuMzU2ODc1MyAyMDYuNzcyMzYyLDY2LjIzMzc1MjcgQzIwNy45MDAyNDgsNjUuMTAxNjI1OCAyMDYuNDIzNTg5LDkxLjI3MjczNTcgMjE2LjE2MDAyNCw4Ni4xMjExODI5IEMyMjUuMTQ4MDk2LDgxLjM2NTU4OTMgMjMyLjEwNzY2MSw2Ni44MjUyMDg5IDIzNi4wNTM2NjcsNTcuOTQ1NzcwMiBDMjM4Ljc1Mjg4Miw1MS44NzE5MDQxIDI1My40ODYyNCwxLjU4ODczMjAzIDI0Ni41NTM0MzUsMS41ODg3MzIwMyBDMjQxLjEzNzY5NywxLjU4ODczMjAzIDIyOC45NDQ4MDgsOTQuOTA5ODY0NiAyMjMuMzQyMTE0LDEwMC40OTE1NzUgQzIxOC4wOTIyNzMsMTA1LjcyMTc1NCAyNDcuNjkwOTY3LDM4LjU5Mjk4MzEgMjYwLjM2NDY2OCw0MS4zNjk4MDUzIEMyNzguMTExNjI1LDQ1LjI1ODE4MzUgMjMxLjc0MTc2MSw2NS44NDkwNTYzIDIzMC41MzA0MTYsNjkuNDgzMDg5MiBDMjI5LjY5NjY3LDcxLjk4NDMyOCAyMzUuNzQ1NDI3LDcwLjM2MDYwMjMgMjM4LjI2NTQ1Myw3MS4xMzU3MTU0IEMyNjAuMDU0MTcxLDc3LjgzNzUyMDcgMjg0LjM0NTM3Nyw5Ni40NDQ5NzE2IDI5NC42MjI0OTEsMTE2Ljk5OTE5OVwiIGlkPVwiUGF0aC0xM1wiIHN0cm9rZT1cIiMzODI1MTNcIiBzdHJva2VXaWR0aD1cIjNcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICA8L3N2Zz5cblxuICAgICAgICAgICAgPC9TcGFya1Njcm9sbC5zcGFuPlxuICAgICAgICAgIDwvU3BhcmtTY3JvbGwuaDE+XG4gICAgICAgIDwvYT5cblxuICAgICAgICA8U3BhcmtTY3JvbGwuZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZG93bi1hcnJvd1wiXG4gICAgICAgICAgcHJveHk9XCJoZXJvXCJcbiAgICAgICAgICB0aW1lbGluZT17e1xuICAgICAgICAgICAgdG9wVG9wOiB7b3BhY2l0eTogMSwgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMHB4LDBweCwwcHgpJ30sXG4gICAgICAgICAgICAndG9wVG9wKzIwMCc6IHtvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwcHgsLTE1MHB4LDBweCknfVxuICAgICAgICAgIH19PnY8L1NwYXJrU2Nyb2xsLmRpdj5cbiAgICAgIDwvU3BhcmtQcm94eS5kaXY+XG4gICAgKVxuICB9XG59KTtcblxudmFyIEFwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgbWl4aW5zOiBbUHVyZVJlbmRlck1peGluXSxcblxuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFjdGlvblR5cGU6IG51bGwsXG4gICAgICB0ZXh0OiAnc2xpZGUnLFxuICAgICAgdW5waW5IaWRlOiB0cnVlLFxuICAgICAgc2xpZGVIaWRlOiB0cnVlLFxuICAgICAgcGluUGluOiBmYWxzZSxcbiAgICAgIHBpblVucGluOiBmYWxzZVxuICAgIH1cbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3R5bGVzID0ge1xuICAgICAgbWluSGVpZ2h0Oic1MDAwcHgnXG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZXN9PlxuXG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZ2lsYm94L3NwYXJrLXNjcm9sbFwiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHN0eWxlPXt7cG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogMCwgcmlnaHQ6IDAsIGJvcmRlcjogMH19XG4gICAgICAgICAgICBzcmM9XCJodHRwczovL2NhbW8uZ2l0aHVidXNlcmNvbnRlbnQuY29tL2U3YmJiMDUyMWIzOTdlZGJkNWZlNDNlN2Y3NjA3NTkzMzZiNWUwNWYvNjg3NDc0NzA3MzNhMmYyZjczMzMyZTYxNmQ2MTdhNmY2ZTYxNzc3MzJlNjM2ZjZkMmY2NzY5NzQ2ODc1NjIyZjcyNjk2MjYyNmY2ZTczMmY2NjZmNzI2YjZkNjU1ZjcyNjk2NzY4NzQ1ZjY3NzI2NTY1NmU1ZjMwMzAzNzMyMzAzMDJlNzA2ZTY3XCJcbiAgICAgICAgICAgIGFsdD1cIkZvcmsgbWUgb24gR2l0SHViXCJcbiAgICAgICAgICAgIGRhdGFDYW5vbmljYWxTcmM9XCJodHRwczovL3MzLmFtYXpvbmF3cy5jb20vZ2l0aHViL3JpYmJvbnMvZm9ya21lX3JpZ2h0X2dyZWVuXzAwNzIwMC5wbmdcIiAvPjwvYT5cblxuICAgICAgICA8SGVybyAvPlxuXG4gICAgICAgIHsvKiBmYWRlICovfVxuICAgICAgICA8U3BhcmtTY3JvbGwuaDJcbiAgICAgICAgICB0aW1lbGluZT17e1xuICAgICAgICAgICAgdG9wQm90dG9tOiB7b3BhY2l0eTogMH0sXG4gICAgICAgICAgICBjZW50ZXJDZW50ZXI6IHtvcGFjaXR5OiAxfVxuICAgICAgICAgIH19PmZhZGU8L1NwYXJrU2Nyb2xsLmgyPlxuXG4gICAgICAgIHsvKiBtb3ZlICovfVxuICAgICAgICA8U3BhcmtTY3JvbGwuaDJcbiAgICAgICAgICB0aW1lbGluZT17e1xuICAgICAgICAgICAgdG9wQm90dG9tOiB7IG1hcmdpbkxlZnQ6ICctNTAwcHgnLCBvcGFjaXR5OiAwIH0sXG4gICAgICAgICAgICBjZW50ZXJDZW50ZXI6IHsgbWFyZ2luTGVmdDogJzBweCcsIG9wYWNpdHk6IDEsIGVhc2U6ICdlYXNlT3V0RWxhc3RpYycgfVxuICAgICAgICAgIH19Pm1vdmU8L1NwYXJrU2Nyb2xsLmgyPlxuXG4gICAgICAgIHsvKiBzcGluICovfVxuICAgICAgICA8U3BhcmtQcm94eSBwcm94eUlkPVwicm90YXRlLXByb3h5XCIgLz5cbiAgICAgICAgPFNwYXJrU2Nyb2xsLmgyXG4gICAgICAgICAgcHJveHk9XCJyb3RhdGUtcHJveHlcIlxuICAgICAgICAgIHRpbWVsaW5lPXt7XG4gICAgICAgICAgICB0b3BCb3R0b206IHsgcm90YXRpb246ICcwJyB9ICxcbiAgICAgICAgICAgIHRvcENlbnRlcjogeyByb3RhdGlvbjogJzM2MCcgfVxuICAgICAgICAgIH19PnNwaW48L1NwYXJrU2Nyb2xsLmgyPlxuXG4gICAgICAgIHsvKiBzY2FsZSAqL31cbiAgICAgICAgPFNwYXJrUHJveHkgcHJveHlJZD1cInNjYWxlLXByb3h5XCIgLz5cbiAgICAgICAgPFNwYXJrU2Nyb2xsLmgyXG4gICAgICAgICAgcHJveHk9XCJzY2FsZS1wcm94eVwiXG4gICAgICAgICAgdGltZWxpbmU9e3tcbiAgICAgICAgICAgICd0b3BDZW50ZXItMjAxJzogeyBzY2FsZTogMC4wMSwgb3BhY2l0eTogMH0sXG4gICAgICAgICAgICAndG9wQ2VudGVyLTIwMCc6IHsgc2NhbGU6IDAuMDEsIG9wYWNpdHk6IDEgfSxcbiAgICAgICAgICAgICd0b3BDZW50ZXIrNzAnOiB7IHNjYWxlOiAxLCBlYXNlOiAnZWFzZU91dEJvdW5jZScgfVxuICAgICAgICAgIH19PnNjYWxlPC9TcGFya1Njcm9sbC5oMj5cblxuICAgICAgICB7LyogcGluLCByZXZlYWwsIHNsaWRlLCBjb2xvciwgdW5waW4gKi99XG4gICAgICAgIDxTcGFya1Byb3h5LmRpdiBjbGFzc05hbWU9XCJwaW4tY29udFwiIHByb3h5SWQ9XCJwaW4tY29udFwiPlxuXG4gICAgICAgICAgPFNwYXJrU2Nyb2xsLnNlY3Rpb25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goXCJwaW5cIix7XG4gICAgICAgICAgICAgICdwaW4tcGluJzp0aGlzLnN0YXRlLnBpblBpbixcbiAgICAgICAgICAgICAgJ3Bpbi11bnBpbic6dGhpcy5zdGF0ZS5waW5VbnBpbn0pfVxuICAgICAgICAgICAgcHJveHk9XCJwaW4tY29udFwiXG4gICAgICAgICAgICB0aW1lbGluZT17e1xuICAgICAgICAgICAgICB0b3BUb3A6IHtcbiAgICAgICAgICAgICAgICBvbkRvd246ICgpID0+IHRoaXMuc2V0U3RhdGUoe3BpblBpbjp0cnVlfSksXG4gICAgICAgICAgICAgICAgb25VcDogICAoKSA9PiB0aGlzLnNldFN0YXRlKHtwaW5QaW46ZmFsc2V9KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBib3R0b21Cb3R0b206IHtcbiAgICAgICAgICAgICAgICBvbkRvd246ICgpID0+IHRoaXMuc2V0U3RhdGUoe3BpblVucGluOnRydWV9KSxcbiAgICAgICAgICAgICAgICBvblVwOiAgICgpID0+IHRoaXMuc2V0U3RhdGUoe3BpblVucGluOmZhbHNlfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX0+XG5cbiAgICAgICAgICAgIDxTcGFya1Njcm9sbC5oM1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwaW4tdHh0XCJcbiAgICAgICAgICAgICAgcHJveHk9XCJwaW4tY29udFwiXG4gICAgICAgICAgICAgIHRpbWVsaW5lPXt7XG4gICAgICAgICAgICAgICAgJ3RvcFRvcCc6IHsgdG9wOiAnMCUnLCBtYXJnaW5Ub3A6ICcwcHgnIH0sXG4gICAgICAgICAgICAgICAgJ3RvcFRvcCs1MCAgJzogeyB0b3A6ICc1MCUnLCBtYXJnaW5Ub3A6ICctNjBweCcgfVxuICAgICAgICAgICAgICB9fT5waW48L1NwYXJrU2Nyb2xsLmgzPlxuXG4gICAgICAgICAgICA8U3BhcmtTY3JvbGwuZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJldmVhbFwiXG4gICAgICAgICAgICAgIHByb3h5PVwicGluLWNvbnRcIlxuICAgICAgICAgICAgICB0aW1lbGluZT17e1xuICAgICAgICAgICAgICAgICd0b3BUb3ArMTAwJzoge3dpZHRoOiAnMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjNWM4MzJmJ30sXG4gICAgICAgICAgICAgICAgJ3RvcFRvcCsyNTAnOiB7d2lkdGg6IFsnMTAwJScsICdlYXNlT3V0UXVhcnQnXSwgYmFja2dyb3VuZENvbG9yOiAnIzM4MjUxMyd9XG4gICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicmV2ZWFsLXR4dFwiPnJldmVhbDwvaDM+XG4gICAgICAgICAgICA8L1NwYXJrU2Nyb2xsLmRpdj5cblxuICAgICAgICAgICAgey8qIHdpdGggYXJyYXkgbm90YXRpb24gd2UgY2FuIGFwcGx5IGJvdW5jZSBlYXNpbmcgdG8ganVzdCBvbmUgcHJvcGVydHkgaW4gYSBrZXlmcmFtZSAqLyB9XG4gICAgICAgICAgICA8U3BhcmtTY3JvbGwuZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goXCJzbGlkZVwiLHtoaWRlOnRoaXMuc3RhdGUuc2xpZGVIaWRlfSl9XG4gICAgICAgICAgICAgIHByb3h5PVwicGluLWNvbnRcIlxuICAgICAgICAgICAgICB0aW1lbGluZT17e1xuICAgICAgICAgICAgICAgICd0b3BUb3ArMjUwJzoge1xuICAgICAgICAgICAgICAgICAgYm90dG9tOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNWM4MzJmJyxcbiAgICAgICAgICAgICAgICAgIG9uRG93bjogKCkgPT4gdGhpcy5zZXRTdGF0ZSh7c2xpZGVIaWRlOmZhbHNlfSksXG4gICAgICAgICAgICAgICAgICBvblVwOiAgICgpID0+IHRoaXMuc2V0U3RhdGUoe3NsaWRlSGlkZTp0cnVlfSlcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICd0b3BUb3ArNDAwJzoge2JvdHRvbTogWycwJScsICdlYXNlT3V0Qm91bmNlJ10sIGJhY2tncm91bmRDb2xvcjogJyMyODQ5MDcnfSxcbiAgICAgICAgICAgICAgICAndG9wVG9wKzQ1MCc6IHtiYWNrZ3JvdW5kQ29sb3I6ICcjMDBhJ30sXG4gICAgICAgICAgICAgICAgJ3RvcFRvcCs1MDAnOiB7YmFja2dyb3VuZENvbG9yOiAnI2EwMCd9LFxuICAgICAgICAgICAgICAgICd0b3BUb3ArNTUwJzoge2JhY2tncm91bmRDb2xvcjogJyM1YzgzMmYnfVxuICAgICAgICAgICAgICB9fT5cblxuICAgICAgICAgICAgICB7Lyogd2hlbiB3ZSBoaXQgdGhlIGFwcHJvcHJpYXRlIHNjcm9sbCBwb3NpdGlvbiwgdXNlIG9uVXAvb25Eb3duIHRvIGNoYW5nZSB0aGVcbiAgICAgICAgICAgICAgICAgICAgdGV4dCB0byAnc2xpZGUnIG9yICdjb2xvcicgZGVwZW5kaW5nIG9uIHRoZSBzY3JvbGwgZGlyZWN0aW9uICovfVxuICAgICAgICAgICAgICA8U3BhcmtTY3JvbGwuaDNcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzbGlkZS10eHRcIlxuICAgICAgICAgICAgICAgIHByb3h5PVwicGluLWNvbnRcIlxuICAgICAgICAgICAgICAgIHRpbWVsaW5lPXt7XG4gICAgICAgICAgICAgICAgICAndG9wVG9wKzQwMCc6IHtcbiAgICAgICAgICAgICAgICAgICAgb25Eb3duOiAoKSA9PiB0aGlzLnNldFN0YXRlKHt0ZXh0Oidjb2xvcid9KSxcbiAgICAgICAgICAgICAgICAgICAgb25VcDogICAoKSA9PiB0aGlzLnNldFN0YXRlKHt0ZXh0OidzbGlkZSd9KSB9XG4gICAgICAgICAgICAgICAgfX0+e3RoaXMuc3RhdGUudGV4dH08L1NwYXJrU2Nyb2xsLmgzPlxuXG4gICAgICAgICAgICAgIDxTcGFya1Njcm9sbC5oM1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goXCJ1bnBpbi10eHRcIix7aGlkZTp0aGlzLnN0YXRlLnVucGluSGlkZX0pfVxuICAgICAgICAgICAgICAgIHByb3h5PVwicGluLWNvbnRcIlxuICAgICAgICAgICAgICAgIHRpbWVsaW5lPXt7XG4gICAgICAgICAgICAgICAgICd0b3BUb3ArNjAwJzoge1xuICAgICAgICAgICAgICAgICAgIHRvcDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgIG9uRG93bjogKCkgPT4gdGhpcy5zZXRTdGF0ZSh7dW5waW5IaWRlOmZhbHNlfSksXG4gICAgICAgICAgICAgICAgICAgb25VcDogICAoKSA9PiB0aGlzLnNldFN0YXRlKHt1bnBpbkhpZGU6dHJ1ZX0pIH0sXG4gICAgICAgICAgICAgICAgICdib3R0b21Cb3R0b20nOiB7IHRvcDogJzUwJScgfVxuICAgICAgICAgICAgICAgICB9fT51bnBpbjwvU3BhcmtTY3JvbGwuaDM+XG4gICAgICAgICAgICA8L1NwYXJrU2Nyb2xsLmRpdj5cblxuICAgICAgICAgIDwvU3BhcmtTY3JvbGwuc2VjdGlvbj5cblxuICAgICAgICA8L1NwYXJrUHJveHkuZGl2PlxuXG5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlcjUwXCI+PC9kaXY+XG5cbiAgICAgICAgey8qIHBhcmFsbGF4ICovfVxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmxpY2tyLmNvbS9waG90b3MvcmFmYWdhcmNpYV8vMTUyNjIyODc3MzgvaW4vcG9vbC04MzgyMzg1OUBOMDAvXCI+XG4gICAgICAgICAgPFNwYXJrUHJveHkuZGl2IHByb3h5SWQ9XCJwYXJhbGxheFwiIGNsYXNzTmFtZT1cInBhcmFsbGF4LWNvbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFyYWxsYXgtc2hhZG93XCI+PC9kaXY+XG5cbiAgICAgICAgICAgIDxTcGFya1Njcm9sbC5kaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGFyYWxsYXgtaW1nXCJcbiAgICAgICAgICAgICAgcHJveHk9XCJwYXJhbGxheFwiXG4gICAgICAgICAgICAgIHRpbWVsaW5lPXt7XG4gICAgICAgICAgICAgICAgdG9wQm90dG9tOiB7dHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMHB4LDBweCwwcHgpJ30sXG4gICAgICAgICAgICAgICAgYm90dG9tVG9wOiB7dHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMHB4LC04MHB4LDBweCknfVxuICAgICAgICAgICAgICB9fT48L1NwYXJrU2Nyb2xsLmRpdj5cblxuICAgICAgICAgICAgPFNwYXJrU2Nyb2xsLmgzXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBhcmFsbGF4LXR4dCBmYWRlMlwiXG4gICAgICAgICAgICAgIHByb3h5PVwicGFyYWxsYXhcIlxuICAgICAgICAgICAgICB0aW1lbGluZT17e1xuICAgICAgICAgICAgICAgIHRvcEJvdHRvbTogeyB0cmFuc2Zvcm06ICdzY2FsZSgwLjgpIHRyYW5zbGF0ZTNkKDBweCwxMjBweCwwcHgpJyB9LFxuICAgICAgICAgICAgICAgIGJvdHRvbVRvcDogeyB0cmFuc2Zvcm06ICdzY2FsZSgwLjgpIHRyYW5zbGF0ZTNkKDBweCwtMTIwcHgsMHB4KScgfVxuICAgICAgICAgICAgICB9fT5wYXJhbGxheDwvU3BhcmtTY3JvbGwuaDM+XG5cbiAgICAgICAgICAgIDxTcGFya1Njcm9sbC5oM1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwYXJhbGxheC10eHQgZmFkZTFcIlxuICAgICAgICAgICAgICBwcm94eT1cInBhcmFsbGF4XCJcbiAgICAgICAgICAgICAgdGltZWxpbmU9e3tcbiAgICAgICAgICAgICAgICB0b3BCb3R0b206IHt0cmFuc2Zvcm06ICdzY2FsZSgwLjkpIHRyYW5zbGF0ZTNkKDBweCwxNjBweCwwcHgpJ30sXG4gICAgICAgICAgICAgICAgYm90dG9tVG9wOiB7dHJhbnNmb3JtOiAnc2NhbGUoMC45KSB0cmFuc2xhdGUzZCgwcHgsLTE2MHB4LDBweCknfVxuICAgICAgICAgICAgICB9fT5wYXJhbGxheDwvU3BhcmtTY3JvbGwuaDM+XG5cbiAgICAgICAgICAgIDxTcGFya1Njcm9sbC5oM1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwYXJhbGxheC10eHRcIlxuICAgICAgICAgICAgICBwcm94eT1cInBhcmFsbGF4XCJcbiAgICAgICAgICAgICAgdGltZWxpbmU9e3tcbiAgICAgICAgICAgICAgICB0b3BCb3R0b206IHt0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwcHgsMjAwcHgsMHB4KSd9LFxuICAgICAgICAgICAgICAgIGJvdHRvbVRvcDoge3RyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDBweCwtMjAwcHgsMHB4KSd9XG4gICAgICAgICAgICAgIH19PnBhcmFsbGF4PC9TcGFya1Njcm9sbC5oMz5cbiAgICAgICAgICA8L1NwYXJrUHJveHkuZGl2PlxuICAgICAgICA8L2E+XG5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlcjUwXCI+PC9kaXY+XG5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9naWxib3gvcmVhY3Qtc3Bhcmstc2Nyb2xsXCI+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjZW50ZXJcIiBzcmM9XCJHaXRIdWItTWFyay02NHB4LnBuZ1wiIGFsdD1cIlwiLz5cbiAgICAgICAgPC9hPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2VyMTBcIj48L2Rpdj5cblxuICAgICAgICA8cCBjbGFzc05hbWU9XCJjZW50ZXJcIj5UaGlzIGRlbW8gd2FzIGluc3BpcmVkIGJ5IDxhIGhyZWY9XCJodHRwOi8vamFucGFlcGtlLmdpdGh1Yi5pby9TY3JvbGxNYWdpYy9cIj5TY3JvbGxNYWdpYzwvYT48L3A+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZXIxMFwiPjwvZGl2PlxuXG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxuUmVhY3QucmVuZGVyKDxBcHAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4YW1wbGUnKSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2V4YW1wbGVzL2RlbW8tZ3NhcC9hcHAuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJ3JlYWN0LXNwYXJrLXNjcm9sbC9zcGFyay1zY3JvbGwtZ3NhcCcpKHtcbiAgaW52YWxpZGF0ZUF1dG9tYXRpY2FsbHk6IHRydWVcblxuICAvLyB3ZSBjb3VsZCBhZGQgYWRkaXRpb25hbCBvcHRpb25zIGluIGhlcmUuLi5cblxuICAvLyBzZXR1cDogey4uLn1cbiAgLy8gZm9ybXVsYXM6IHsuLi59XG4gIC8vIGFjdGlvblByb3BzOiB7Li4ufVxufSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2V4YW1wbGVzL2RlbW8tZ3NhcC9hcHAtc3BhcmsuanNcbiAqKi8iLCIvLyB3ZSdyZSBqdXN0IGxvYWRpbmcgaW4gdGhlIHdob2xlIHNoZWJhbmcgaGVyZSAoYWthIFR3ZWVuTWF4KVxuLy8gYmVjYXVzZSBpdCdzIHRoZSBzaW1wbGVzdCB0aGluZyB0byBkbywgYnV0IGFsbCB0aGF0J3MgcmVhbGx5IG5lZWRlZFxuLy8gaXM6IFR3ZWVuTGl0ZS5qcywgQ1NTUGx1Z2luLCBUaW1lbGluZUxpdGVcbi8vXG4vLyBDb3B5IHRoaXMgZmlsZSB0byBjcmVhdGUgeW91ciBvd24gc3Bhcmstc2Nyb2xsLWdzYXAuanMgaWYgeW91IHdhbnQgdG9cbi8vIGxvYWQgaW4gYSBzdWJzZXQgb2YgVHdlZW5NYXhcbnJlcXVpcmUoJ2dzYXAnKTtcblxuY29uc3QgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuY29uc3QgX2ZhY3RvcnkgPSByZXF1aXJlKCdyZWFjdC1zcGFyay1zY3JvbGwnKTtcbmNvbnN0IEdTQVBBbmltYXRvciA9IHJlcXVpcmUoJy4vZ3NhcC1hbmltYXRvcicpO1xuXG5mdW5jdGlvbiBmYWN0b3J5KG9wdGlvbnMpIHtcbiAgcmV0dXJuIF9mYWN0b3J5KGFzc2lnbih7XG4gICAgYW5pbWF0b3I6IHtcbiAgICAgIGluc3RhbmNlOiAoKSA9PiBuZXcgR1NBUEFuaW1hdG9yKClcbiAgICB9XG4gIH0sIG9wdGlvbnMpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3NwYXJrLXNjcm9sbC1nc2FwLmpzXG4gKiovIiwiLy8gTWluaW11bSByZXF1aXJlZCB0byBhbHJlYWR5IGJlIGxvYWRlZCBpbjpcbi8vIFR3ZWVuTGl0ZS5qcyxDU1NQbHVnaW4sVGltZWxpbmVMaXRlXG4vLyAoVHdlZW5NYXggbG9hZHMgYWxsIHRoZXNlIGFuZCBtb3JlKVxuXG5jb25zdCBfID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5cbmNsYXNzIEFjdG9yIHtcbiAgY29uc3RydWN0b3IodGwsIGNvbnRleHQpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudGwgPSB0bDtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMuZnJhbWVzID0gW107XG4gICAgdGhpcy5mcmFtZUhhc2ggPSB7fTtcbiAgICB0aGlzLm5vcm1hbGl6ZWRGcmFtZXMgPSBbXTtcbiAgfVxuXG4gIG5vcm1hbGl6ZUZyYW1lcygpIHtcbiAgICB0aGlzLm5vcm1hbGl6ZWRGcmFtZXMgPSBfLnNvcnRCeShfLmNsb25lRGVlcCh0aGlzLmZyYW1lcyksICdzY3JvbGxZJyk7XG5cbiAgICBfLmZvckVhY2godGhpcy5ub3JtYWxpemVkRnJhbWVzLCAoZnJhbWUsIGluZGV4LCBhcnIpID0+XG4gICAgICBpbmRleCAmJiBfLmRlZmF1bHRzKGZyYW1lLmFuaW1zLCBhcnJbaW5kZXgtMV0uYW5pbXMpXG4gICAgKTtcbiAgfVxuXG4gIGtleWZyYW1lKHNjcm9sbFksIGFuaW1zLCBlYXNlKSB7XG4gICAgY29uc3QgZnJhbWUgPSB7c2Nyb2xsWSwgYW5pbXMsIGVhc2V9O1xuXG4gICAgdGhpcy5mcmFtZXMucHVzaChmcmFtZSk7XG4gICAgdGhpcy5mcmFtZUhhc2hbc2Nyb2xsWV0gPSBmcmFtZTtcbiAgfVxuXG4gIGJ1aWxkVGltZWxpbmUoKSB7XG4gICAgdGhpcy50bC5jbGVhcigpO1xuICAgIF8uZm9yRWFjaCh0aGlzLm5vcm1hbGl6ZWRGcmFtZXMsIChmcmFtZSwgaW5kZXgsIGFycikgPT4ge1xuICAgICAgaWYgKGluZGV4KSB7XG4gICAgICAgIGNvbnN0IHByZXZGcmFtZSA9IGFycltpbmRleC0xXTtcblxuICAgICAgICAvLyBmb3IgZWFzaW5nLCBpbnN0ZWFkIG9mIHRoaXM6XG4gICAgICAgIC8vIEB0bC5mcm9tVG8oQGNvbnRleHQsIGZyYW1lLnNjcm9sbFkgLSBwcmV2RnJhbWUuc2Nyb2xsWSwgcHJldkZyYW1lLmFuaW1zLCBmcmFtZS5hbmltcywgcHJldkZyYW1lLnNjcm9sbFkpLy9cbiAgICAgICAgLy8gLi4uZG8gdGhpczpcbiAgICAgICAgLy8gY3JlYXRpbmcgYSBuZXcgZnJvbVRvIGZvciBlYWNoIHByb3BlcnR5IHRvIHN1cHBvcnQgcGVyLXByb3BlcnR5IGVhc2luZ1xuICAgICAgICAvLyB0aGlzIHNlZW1zIHByZXR0eSBpbmVmZmljaWVudFxuICAgICAgICBsZXQgZHVyYXRpb24gPSBmcmFtZS5zY3JvbGxZIC0gcHJldkZyYW1lLnNjcm9sbFk7XG4gICAgICAgIGZvciAobGV0IGsgaW4gZnJhbWUuYW5pbXMpIHtcbiAgICAgICAgICBsZXQgdiA9IGZyYW1lLmFuaW1zW2tdO1xuICAgICAgICAgIGNvbnN0IGEgPSB7fSwgcGEgPSB7fTtcbiAgICAgICAgICBhW2tdID0gdjtcbiAgICAgICAgICBhLmVhc2UgPSBmcmFtZS5lYXNlW2tdO1xuICAgICAgICAgIHBhW2tdID0gcHJldkZyYW1lLmFuaW1zW2tdO1xuICAgICAgICAgIHRoaXMudGwuZnJvbVRvKHRoaXMuY29udGV4dCwgZHVyYXRpb24sIHBhLCBhLCBwcmV2RnJhbWUuc2Nyb2xsWSk7XG4gICAgICAgICAgdGhpcy50bC5wYXVzZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmaW5pc2hlZEFkZGluZ0tleWZyYW1lcygpIHtcbiAgICB0aGlzLm5vcm1hbGl6ZUZyYW1lcygpO1xuICAgIHRoaXMuYnVpbGRUaW1lbGluZSgpO1xuICB9XG5cbiAgbW92ZUtleWZyYW1lKG9sZFBvcywgbmV3UG9zKSB7XG4gICAgY29uc3QgZnJhbWUgPSB0aGlzLmZyYW1lSGFzaFtvbGRQb3NdO1xuICAgIHRoaXMuZnJhbWVIYXNoW25ld1Bvc10gPSBmcmFtZTtcbiAgICBmcmFtZS5zY3JvbGxZID0gbmV3UG9zO1xuICAgIGRlbGV0ZSB0aGlzLmZyYW1lSGFzaFtvbGRQb3NdO1xuICAgIHRoaXMubm9ybWFsaXplRnJhbWVzKCk7XG4gICAgdGhpcy5idWlsZFRpbWVsaW5lKCk7XG4gIH1cblxuICByZW1vdmVBbGxLZXlmcmFtZXMoKSB7XG4gICAgdGhpcy50bC5jbGVhcigpO1xuICAgIHRoaXMuZnJhbWVzID0gW107XG4gIH1cbn1cblxuY2xhc3MgR1NBUEFuaW1hdG9yIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnRsID0gbmV3IFRpbWVsaW5lTGl0ZSh7dXNlRnJhbWVzOnRydWV9KTtcbiAgfVxuXG4gIGFkZEFjdG9yKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmV3IEFjdG9yKHRoaXMudGwsIG9wdGlvbnMuY29udGV4dCk7XG4gIH1cblxuICB1cGRhdGUocG9zKSB7XG4gICAgaWYgKHBvcz49MCkgdGhpcy50bC5zZWVrKHBvcywgZmFsc2UpOyAvLyBpdCBiYWxrcyBhdCBuZWdhdGl2ZSBwb3MgdmFsdWVzXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHU0FQQW5pbWF0b3I7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZ3NhcC1hbmltYXRvci5qc1xuICoqLyIsIi8qIVxuICogVkVSU0lPTjogMS4xNi4xXG4gKiBEQVRFOiAyMDE1LTAzLTEzXG4gKiBVUERBVEVTIEFORCBET0NTIEFUOiBodHRwOi8vZ3JlZW5zb2NrLmNvbVxuICogXG4gKiBJbmNsdWRlcyBhbGwgb2YgdGhlIGZvbGxvd2luZzogVHdlZW5MaXRlLCBUd2Vlbk1heCwgVGltZWxpbmVMaXRlLCBUaW1lbGluZU1heCwgRWFzZVBhY2ssIENTU1BsdWdpbiwgUm91bmRQcm9wc1BsdWdpbiwgQmV6aWVyUGx1Z2luLCBBdHRyUGx1Z2luLCBEaXJlY3Rpb25hbFJvdGF0aW9uUGx1Z2luXG4gKlxuICogQGxpY2Vuc2UgQ29weXJpZ2h0IChjKSAyMDA4LTIwMTUsIEdyZWVuU29jay4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgd29yayBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBhdCBodHRwOi8vZ3JlZW5zb2NrLmNvbS9zdGFuZGFyZC1saWNlbnNlIG9yIGZvclxuICogQ2x1YiBHcmVlblNvY2sgbWVtYmVycywgdGhlIHNvZnR3YXJlIGFncmVlbWVudCB0aGF0IHdhcyBpc3N1ZWQgd2l0aCB5b3VyIG1lbWJlcnNoaXAuXG4gKiBcbiAqIEBhdXRob3I6IEphY2sgRG95bGUsIGphY2tAZ3JlZW5zb2NrLmNvbVxuICoqL1xudmFyIF9nc1Njb3BlID0gKHR5cGVvZihtb2R1bGUpICE9PSBcInVuZGVmaW5lZFwiICYmIG1vZHVsZS5leHBvcnRzICYmIHR5cGVvZihnbG9iYWwpICE9PSBcInVuZGVmaW5lZFwiKSA/IGdsb2JhbCA6IHRoaXMgfHwgd2luZG93OyAvL2hlbHBzIGVuc3VyZSBjb21wYXRpYmlsaXR5IHdpdGggQU1EL1JlcXVpcmVKUyBhbmQgQ29tbW9uSlMvTm9kZVxuKF9nc1Njb3BlLl9nc1F1ZXVlIHx8IChfZ3NTY29wZS5fZ3NRdWV1ZSA9IFtdKSkucHVzaCggZnVuY3Rpb24oKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cblx0X2dzU2NvcGUuX2dzRGVmaW5lKFwiVHdlZW5NYXhcIiwgW1wiY29yZS5BbmltYXRpb25cIixcImNvcmUuU2ltcGxlVGltZWxpbmVcIixcIlR3ZWVuTGl0ZVwiXSwgZnVuY3Rpb24oQW5pbWF0aW9uLCBTaW1wbGVUaW1lbGluZSwgVHdlZW5MaXRlKSB7XG5cblx0XHR2YXIgX3NsaWNlID0gZnVuY3Rpb24oYSkgeyAvL2Rvbid0IHVzZSBbXS5zbGljZSBiZWNhdXNlIHRoYXQgZG9lc24ndCB3b3JrIGluIElFOCB3aXRoIGEgTm9kZUxpc3QgdGhhdCdzIHJldHVybmVkIGJ5IHF1ZXJ5U2VsZWN0b3JBbGwoKVxuXHRcdFx0XHR2YXIgYiA9IFtdLFxuXHRcdFx0XHRcdGwgPSBhLmxlbmd0aCxcblx0XHRcdFx0XHRpO1xuXHRcdFx0XHRmb3IgKGkgPSAwOyBpICE9PSBsOyBiLnB1c2goYVtpKytdKSk7XG5cdFx0XHRcdHJldHVybiBiO1xuXHRcdFx0fSxcblx0XHRcdFR3ZWVuTWF4ID0gZnVuY3Rpb24odGFyZ2V0LCBkdXJhdGlvbiwgdmFycykge1xuXHRcdFx0XHRUd2VlbkxpdGUuY2FsbCh0aGlzLCB0YXJnZXQsIGR1cmF0aW9uLCB2YXJzKTtcblx0XHRcdFx0dGhpcy5fY3ljbGUgPSAwO1xuXHRcdFx0XHR0aGlzLl95b3lvID0gKHRoaXMudmFycy55b3lvID09PSB0cnVlKTtcblx0XHRcdFx0dGhpcy5fcmVwZWF0ID0gdGhpcy52YXJzLnJlcGVhdCB8fCAwO1xuXHRcdFx0XHR0aGlzLl9yZXBlYXREZWxheSA9IHRoaXMudmFycy5yZXBlYXREZWxheSB8fCAwO1xuXHRcdFx0XHR0aGlzLl9kaXJ0eSA9IHRydWU7IC8vZW5zdXJlcyB0aGF0IGlmIHRoZXJlIGlzIGFueSByZXBlYXQsIHRoZSB0b3RhbER1cmF0aW9uIHdpbGwgZ2V0IHJlY2FsY3VsYXRlZCB0byBhY2N1cmF0ZWx5IHJlcG9ydCBpdC5cblx0XHRcdFx0dGhpcy5yZW5kZXIgPSBUd2Vlbk1heC5wcm90b3R5cGUucmVuZGVyOyAvL3NwZWVkIG9wdGltaXphdGlvbiAoYXZvaWQgcHJvdG90eXBlIGxvb2t1cCBvbiB0aGlzIFwiaG90XCIgbWV0aG9kKVxuXHRcdFx0fSxcblx0XHRcdF90aW55TnVtID0gMC4wMDAwMDAwMDAxLFxuXHRcdFx0VHdlZW5MaXRlSW50ZXJuYWxzID0gVHdlZW5MaXRlLl9pbnRlcm5hbHMsXG5cdFx0XHRfaXNTZWxlY3RvciA9IFR3ZWVuTGl0ZUludGVybmFscy5pc1NlbGVjdG9yLFxuXHRcdFx0X2lzQXJyYXkgPSBUd2VlbkxpdGVJbnRlcm5hbHMuaXNBcnJheSxcblx0XHRcdHAgPSBUd2Vlbk1heC5wcm90b3R5cGUgPSBUd2VlbkxpdGUudG8oe30sIDAuMSwge30pLFxuXHRcdFx0X2JsYW5rQXJyYXkgPSBbXTtcblxuXHRcdFR3ZWVuTWF4LnZlcnNpb24gPSBcIjEuMTYuMVwiO1xuXHRcdHAuY29uc3RydWN0b3IgPSBUd2Vlbk1heDtcblx0XHRwLmtpbGwoKS5fZ2MgPSBmYWxzZTtcblx0XHRUd2Vlbk1heC5raWxsVHdlZW5zT2YgPSBUd2Vlbk1heC5raWxsRGVsYXllZENhbGxzVG8gPSBUd2VlbkxpdGUua2lsbFR3ZWVuc09mO1xuXHRcdFR3ZWVuTWF4LmdldFR3ZWVuc09mID0gVHdlZW5MaXRlLmdldFR3ZWVuc09mO1xuXHRcdFR3ZWVuTWF4LmxhZ1Ntb290aGluZyA9IFR3ZWVuTGl0ZS5sYWdTbW9vdGhpbmc7XG5cdFx0VHdlZW5NYXgudGlja2VyID0gVHdlZW5MaXRlLnRpY2tlcjtcblx0XHRUd2Vlbk1heC5yZW5kZXIgPSBUd2VlbkxpdGUucmVuZGVyO1xuXG5cdFx0cC5pbnZhbGlkYXRlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR0aGlzLl95b3lvID0gKHRoaXMudmFycy55b3lvID09PSB0cnVlKTtcblx0XHRcdHRoaXMuX3JlcGVhdCA9IHRoaXMudmFycy5yZXBlYXQgfHwgMDtcblx0XHRcdHRoaXMuX3JlcGVhdERlbGF5ID0gdGhpcy52YXJzLnJlcGVhdERlbGF5IHx8IDA7XG5cdFx0XHR0aGlzLl91bmNhY2hlKHRydWUpO1xuXHRcdFx0cmV0dXJuIFR3ZWVuTGl0ZS5wcm90b3R5cGUuaW52YWxpZGF0ZS5jYWxsKHRoaXMpO1xuXHRcdH07XG5cdFx0XG5cdFx0cC51cGRhdGVUbyA9IGZ1bmN0aW9uKHZhcnMsIHJlc2V0RHVyYXRpb24pIHtcblx0XHRcdHZhciBjdXJSYXRpbyA9IHRoaXMucmF0aW8sXG5cdFx0XHRcdGltbWVkaWF0ZSA9IHRoaXMudmFycy5pbW1lZGlhdGVSZW5kZXIgfHwgdmFycy5pbW1lZGlhdGVSZW5kZXIsXG5cdFx0XHRcdHA7XG5cdFx0XHRpZiAocmVzZXREdXJhdGlvbiAmJiB0aGlzLl9zdGFydFRpbWUgPCB0aGlzLl90aW1lbGluZS5fdGltZSkge1xuXHRcdFx0XHR0aGlzLl9zdGFydFRpbWUgPSB0aGlzLl90aW1lbGluZS5fdGltZTtcblx0XHRcdFx0dGhpcy5fdW5jYWNoZShmYWxzZSk7XG5cdFx0XHRcdGlmICh0aGlzLl9nYykge1xuXHRcdFx0XHRcdHRoaXMuX2VuYWJsZWQodHJ1ZSwgZmFsc2UpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuX3RpbWVsaW5lLmluc2VydCh0aGlzLCB0aGlzLl9zdGFydFRpbWUgLSB0aGlzLl9kZWxheSk7IC8vZW5zdXJlcyB0aGF0IGFueSBuZWNlc3NhcnkgcmUtc2VxdWVuY2luZyBvZiBBbmltYXRpb25zIGluIHRoZSB0aW1lbGluZSBvY2N1cnMgdG8gbWFrZSBzdXJlIHRoZSByZW5kZXJpbmcgb3JkZXIgaXMgY29ycmVjdC5cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Zm9yIChwIGluIHZhcnMpIHtcblx0XHRcdFx0dGhpcy52YXJzW3BdID0gdmFyc1twXTtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLl9pbml0dGVkIHx8IGltbWVkaWF0ZSkge1xuXHRcdFx0XHRpZiAocmVzZXREdXJhdGlvbikge1xuXHRcdFx0XHRcdHRoaXMuX2luaXR0ZWQgPSBmYWxzZTtcblx0XHRcdFx0XHRpZiAoaW1tZWRpYXRlKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnJlbmRlcigwLCB0cnVlLCB0cnVlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aWYgKHRoaXMuX2djKSB7XG5cdFx0XHRcdFx0XHR0aGlzLl9lbmFibGVkKHRydWUsIGZhbHNlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHRoaXMuX25vdGlmeVBsdWdpbnNPZkVuYWJsZWQgJiYgdGhpcy5fZmlyc3RQVCkge1xuXHRcdFx0XHRcdFx0VHdlZW5MaXRlLl9vblBsdWdpbkV2ZW50KFwiX29uRGlzYWJsZVwiLCB0aGlzKTsgLy9pbiBjYXNlIGEgcGx1Z2luIGxpa2UgTW90aW9uQmx1ciBtdXN0IHBlcmZvcm0gc29tZSBjbGVhbnVwIHRhc2tzXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICh0aGlzLl90aW1lIC8gdGhpcy5fZHVyYXRpb24gPiAwLjk5OCkgeyAvL2lmIHRoZSB0d2VlbiBoYXMgZmluaXNoZWQgKG9yIGNvbWUgZXh0cmVtZWx5IGNsb3NlIHRvIGZpbmlzaGluZyksIHdlIGp1c3QgbmVlZCB0byByZXdpbmQgaXQgdG8gMCBhbmQgdGhlbiByZW5kZXIgaXQgYWdhaW4gYXQgdGhlIGVuZCB3aGljaCBmb3JjZXMgaXQgdG8gcmUtaW5pdGlhbGl6ZSAocGFyc2luZyB0aGUgbmV3IHZhcnMpLiBXZSBhbGxvdyB0d2VlbnMgdGhhdCBhcmUgY2xvc2UgdG8gZmluaXNoaW5nIChidXQgaGF2ZW4ndCBxdWl0ZSBmaW5pc2hlZCkgdG8gd29yayB0aGlzIHdheSB0b28gYmVjYXVzZSBvdGhlcndpc2UsIHRoZSB2YWx1ZXMgYXJlIHNvIHNtYWxsIHdoZW4gZGV0ZXJtaW5pbmcgd2hlcmUgdG8gcHJvamVjdCB0aGUgc3RhcnRpbmcgdmFsdWVzIHRoYXQgYmluYXJ5IG1hdGggaXNzdWVzIGNyZWVwIGluIGFuZCBjYW4gbWFrZSB0aGUgdHdlZW4gYXBwZWFyIHRvIHJlbmRlciBpbmNvcnJlY3RseSB3aGVuIHJ1biBiYWNrd2FyZHMuIFxuXHRcdFx0XHRcdFx0dmFyIHByZXZUaW1lID0gdGhpcy5fdGltZTtcblx0XHRcdFx0XHRcdHRoaXMucmVuZGVyKDAsIHRydWUsIGZhbHNlKTtcblx0XHRcdFx0XHRcdHRoaXMuX2luaXR0ZWQgPSBmYWxzZTtcblx0XHRcdFx0XHRcdHRoaXMucmVuZGVyKHByZXZUaW1lLCB0cnVlLCBmYWxzZSk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLl90aW1lID4gMCB8fCBpbW1lZGlhdGUpIHtcblx0XHRcdFx0XHRcdHRoaXMuX2luaXR0ZWQgPSBmYWxzZTtcblx0XHRcdFx0XHRcdHRoaXMuX2luaXQoKTtcblx0XHRcdFx0XHRcdHZhciBpbnYgPSAxIC8gKDEgLSBjdXJSYXRpbyksXG5cdFx0XHRcdFx0XHRcdHB0ID0gdGhpcy5fZmlyc3RQVCwgZW5kVmFsdWU7XG5cdFx0XHRcdFx0XHR3aGlsZSAocHQpIHtcblx0XHRcdFx0XHRcdFx0ZW5kVmFsdWUgPSBwdC5zICsgcHQuYzsgXG5cdFx0XHRcdFx0XHRcdHB0LmMgKj0gaW52O1xuXHRcdFx0XHRcdFx0XHRwdC5zID0gZW5kVmFsdWUgLSBwdC5jO1xuXHRcdFx0XHRcdFx0XHRwdCA9IHB0Ll9uZXh0O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fTtcblx0XHRcdFx0XG5cdFx0cC5yZW5kZXIgPSBmdW5jdGlvbih0aW1lLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpIHtcblx0XHRcdGlmICghdGhpcy5faW5pdHRlZCkgaWYgKHRoaXMuX2R1cmF0aW9uID09PSAwICYmIHRoaXMudmFycy5yZXBlYXQpIHsgLy96ZXJvIGR1cmF0aW9uIHR3ZWVucyB0aGF0IHJlbmRlciBpbW1lZGlhdGVseSBoYXZlIHJlbmRlcigpIGNhbGxlZCBmcm9tIFR3ZWVuTGl0ZSdzIGNvbnN0cnVjdG9yLCBiZWZvcmUgVHdlZW5NYXgncyBjb25zdHJ1Y3RvciBoYXMgZmluaXNoZWQgc2V0dGluZyBfcmVwZWF0LCBfcmVwZWF0RGVsYXksIGFuZCBfeW95byB3aGljaCBhcmUgY3JpdGljYWwgaW4gZGV0ZXJtaW5pbmcgdG90YWxEdXJhdGlvbigpIHNvIHdlIG5lZWQgdG8gY2FsbCBpbnZhbGlkYXRlKCkgd2hpY2ggaXMgYSBsb3cta2Igd2F5IHRvIGdldCB0aG9zZSBzZXQgcHJvcGVybHkuXG5cdFx0XHRcdHRoaXMuaW52YWxpZGF0ZSgpO1xuXHRcdFx0fVxuXHRcdFx0dmFyIHRvdGFsRHVyID0gKCF0aGlzLl9kaXJ0eSkgPyB0aGlzLl90b3RhbER1cmF0aW9uIDogdGhpcy50b3RhbER1cmF0aW9uKCksXG5cdFx0XHRcdHByZXZUaW1lID0gdGhpcy5fdGltZSxcblx0XHRcdFx0cHJldlRvdGFsVGltZSA9IHRoaXMuX3RvdGFsVGltZSwgXG5cdFx0XHRcdHByZXZDeWNsZSA9IHRoaXMuX2N5Y2xlLFxuXHRcdFx0XHRkdXJhdGlvbiA9IHRoaXMuX2R1cmF0aW9uLFxuXHRcdFx0XHRwcmV2UmF3UHJldlRpbWUgPSB0aGlzLl9yYXdQcmV2VGltZSxcblx0XHRcdFx0aXNDb21wbGV0ZSwgY2FsbGJhY2ssIHB0LCBjeWNsZUR1cmF0aW9uLCByLCB0eXBlLCBwb3csIHJhd1ByZXZUaW1lO1xuXHRcdFx0aWYgKHRpbWUgPj0gdG90YWxEdXIpIHtcblx0XHRcdFx0dGhpcy5fdG90YWxUaW1lID0gdG90YWxEdXI7XG5cdFx0XHRcdHRoaXMuX2N5Y2xlID0gdGhpcy5fcmVwZWF0O1xuXHRcdFx0XHRpZiAodGhpcy5feW95byAmJiAodGhpcy5fY3ljbGUgJiAxKSAhPT0gMCkge1xuXHRcdFx0XHRcdHRoaXMuX3RpbWUgPSAwO1xuXHRcdFx0XHRcdHRoaXMucmF0aW8gPSB0aGlzLl9lYXNlLl9jYWxjRW5kID8gdGhpcy5fZWFzZS5nZXRSYXRpbygwKSA6IDA7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5fdGltZSA9IGR1cmF0aW9uO1xuXHRcdFx0XHRcdHRoaXMucmF0aW8gPSB0aGlzLl9lYXNlLl9jYWxjRW5kID8gdGhpcy5fZWFzZS5nZXRSYXRpbygxKSA6IDE7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCF0aGlzLl9yZXZlcnNlZCkge1xuXHRcdFx0XHRcdGlzQ29tcGxldGUgPSB0cnVlO1xuXHRcdFx0XHRcdGNhbGxiYWNrID0gXCJvbkNvbXBsZXRlXCI7XG5cdFx0XHRcdFx0Zm9yY2UgPSAoZm9yY2UgfHwgdGhpcy5fdGltZWxpbmUuYXV0b1JlbW92ZUNoaWxkcmVuKTsgLy9vdGhlcndpc2UsIGlmIHRoZSBhbmltYXRpb24gaXMgdW5wYXVzZWQvYWN0aXZhdGVkIGFmdGVyIGl0J3MgYWxyZWFkeSBmaW5pc2hlZCwgaXQgZG9lc24ndCBnZXQgcmVtb3ZlZCBmcm9tIHRoZSBwYXJlbnQgdGltZWxpbmUuXG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGR1cmF0aW9uID09PSAwKSBpZiAodGhpcy5faW5pdHRlZCB8fCAhdGhpcy52YXJzLmxhenkgfHwgZm9yY2UpIHsgLy96ZXJvLWR1cmF0aW9uIHR3ZWVucyBhcmUgdHJpY2t5IGJlY2F1c2Ugd2UgbXVzdCBkaXNjZXJuIHRoZSBtb21lbnR1bS9kaXJlY3Rpb24gb2YgdGltZSBpbiBvcmRlciB0byBkZXRlcm1pbmUgd2hldGhlciB0aGUgc3RhcnRpbmcgdmFsdWVzIHNob3VsZCBiZSByZW5kZXJlZCBvciB0aGUgZW5kaW5nIHZhbHVlcy4gSWYgdGhlIFwicGxheWhlYWRcIiBvZiBpdHMgdGltZWxpbmUgZ29lcyBwYXN0IHRoZSB6ZXJvLWR1cmF0aW9uIHR3ZWVuIGluIHRoZSBmb3J3YXJkIGRpcmVjdGlvbiBvciBsYW5kcyBkaXJlY3RseSBvbiBpdCwgdGhlIGVuZCB2YWx1ZXMgc2hvdWxkIGJlIHJlbmRlcmVkLCBidXQgaWYgdGhlIHRpbWVsaW5lJ3MgXCJwbGF5aGVhZFwiIG1vdmVzIHBhc3QgaXQgaW4gdGhlIGJhY2t3YXJkIGRpcmVjdGlvbiAoZnJvbSBhIHBvc3RpdGl2ZSB0aW1lIHRvIGEgbmVnYXRpdmUgdGltZSksIHRoZSBzdGFydGluZyB2YWx1ZXMgbXVzdCBiZSByZW5kZXJlZC5cblx0XHRcdFx0XHRpZiAodGhpcy5fc3RhcnRUaW1lID09PSB0aGlzLl90aW1lbGluZS5fZHVyYXRpb24pIHsgLy9pZiBhIHplcm8tZHVyYXRpb24gdHdlZW4gaXMgYXQgdGhlIFZFUlkgZW5kIG9mIGEgdGltZWxpbmUgYW5kIHRoYXQgdGltZWxpbmUgcmVuZGVycyBhdCBpdHMgZW5kLCBpdCB3aWxsIHR5cGljYWxseSBhZGQgYSB0aW55IGJpdCBvZiBjdXNoaW9uIHRvIHRoZSByZW5kZXIgdGltZSB0byBwcmV2ZW50IHJvdW5kaW5nIGVycm9ycyBmcm9tIGdldHRpbmcgaW4gdGhlIHdheSBvZiB0d2VlbnMgcmVuZGVyaW5nIHRoZWlyIFZFUlkgZW5kLiBJZiB3ZSB0aGVuIHJldmVyc2UoKSB0aGF0IHRpbWVsaW5lLCB0aGUgemVyby1kdXJhdGlvbiB0d2VlbiB3aWxsIHRyaWdnZXIgaXRzIG9uUmV2ZXJzZUNvbXBsZXRlIGV2ZW4gdGhvdWdoIHRlY2huaWNhbGx5IHRoZSBwbGF5aGVhZCBkaWRuJ3QgcGFzcyBvdmVyIGl0IGFnYWluLiBJdCdzIGEgdmVyeSBzcGVjaWZpYyBlZGdlIGNhc2Ugd2UgbXVzdCBhY2NvbW1vZGF0ZS5cblx0XHRcdFx0XHRcdHRpbWUgPSAwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAodGltZSA9PT0gMCB8fCBwcmV2UmF3UHJldlRpbWUgPCAwIHx8IHByZXZSYXdQcmV2VGltZSA9PT0gX3RpbnlOdW0pIGlmIChwcmV2UmF3UHJldlRpbWUgIT09IHRpbWUpIHtcblx0XHRcdFx0XHRcdGZvcmNlID0gdHJ1ZTtcblx0XHRcdFx0XHRcdGlmIChwcmV2UmF3UHJldlRpbWUgPiBfdGlueU51bSkge1xuXHRcdFx0XHRcdFx0XHRjYWxsYmFjayA9IFwib25SZXZlcnNlQ29tcGxldGVcIjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5fcmF3UHJldlRpbWUgPSByYXdQcmV2VGltZSA9ICghc3VwcHJlc3NFdmVudHMgfHwgdGltZSB8fCBwcmV2UmF3UHJldlRpbWUgPT09IHRpbWUpID8gdGltZSA6IF90aW55TnVtOyAvL3doZW4gdGhlIHBsYXloZWFkIGFycml2ZXMgYXQgRVhBQ1RMWSB0aW1lIDAgKHJpZ2h0IG9uIHRvcCkgb2YgYSB6ZXJvLWR1cmF0aW9uIHR3ZWVuLCB3ZSBuZWVkIHRvIGRpc2Nlcm4gaWYgZXZlbnRzIGFyZSBzdXBwcmVzc2VkIHNvIHRoYXQgd2hlbiB0aGUgcGxheWhlYWQgbW92ZXMgYWdhaW4gKG5leHQgdGltZSksIGl0J2xsIHRyaWdnZXIgdGhlIGNhbGxiYWNrLiBJZiBldmVudHMgYXJlIE5PVCBzdXBwcmVzc2VkLCBvYnZpb3VzbHkgdGhlIGNhbGxiYWNrIHdvdWxkIGJlIHRyaWdnZXJlZCBpbiB0aGlzIHJlbmRlci4gQmFzaWNhbGx5LCB0aGUgY2FsbGJhY2sgc2hvdWxkIGZpcmUgZWl0aGVyIHdoZW4gdGhlIHBsYXloZWFkIEFSUklWRVMgb3IgTEVBVkVTIHRoaXMgZXhhY3Qgc3BvdCwgbm90IGJvdGguIEltYWdpbmUgZG9pbmcgYSB0aW1lbGluZS5zZWVrKDApIGFuZCB0aGVyZSdzIGEgY2FsbGJhY2sgdGhhdCBzaXRzIGF0IDAuIFNpbmNlIGV2ZW50cyBhcmUgc3VwcHJlc3NlZCBvbiB0aGF0IHNlZWsoKSBieSBkZWZhdWx0LCBub3RoaW5nIHdpbGwgZmlyZSwgYnV0IHdoZW4gdGhlIHBsYXloZWFkIG1vdmVzIG9mZiBvZiB0aGF0IHBvc2l0aW9uLCB0aGUgY2FsbGJhY2sgc2hvdWxkIGZpcmUuIFRoaXMgYmVoYXZpb3IgaXMgd2hhdCBwZW9wbGUgaW50dWl0aXZlbHkgZXhwZWN0LiBXZSBzZXQgdGhlIF9yYXdQcmV2VGltZSB0byBiZSBhIHByZWNpc2UgdGlueSBudW1iZXIgdG8gaW5kaWNhdGUgdGhpcyBzY2VuYXJpbyByYXRoZXIgdGhhbiB1c2luZyBhbm90aGVyIHByb3BlcnR5L3ZhcmlhYmxlIHdoaWNoIHdvdWxkIGluY3JlYXNlIG1lbW9yeSB1c2FnZS4gVGhpcyB0ZWNobmlxdWUgaXMgbGVzcyByZWFkYWJsZSwgYnV0IG1vcmUgZWZmaWNpZW50LlxuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0fSBlbHNlIGlmICh0aW1lIDwgMC4wMDAwMDAxKSB7IC8vdG8gd29yayBhcm91bmQgb2NjYXNpb25hbCBmbG9hdGluZyBwb2ludCBtYXRoIGFydGlmYWN0cywgcm91bmQgc3VwZXIgc21hbGwgdmFsdWVzIHRvIDAuXG5cdFx0XHRcdHRoaXMuX3RvdGFsVGltZSA9IHRoaXMuX3RpbWUgPSB0aGlzLl9jeWNsZSA9IDA7XG5cdFx0XHRcdHRoaXMucmF0aW8gPSB0aGlzLl9lYXNlLl9jYWxjRW5kID8gdGhpcy5fZWFzZS5nZXRSYXRpbygwKSA6IDA7XG5cdFx0XHRcdGlmIChwcmV2VG90YWxUaW1lICE9PSAwIHx8IChkdXJhdGlvbiA9PT0gMCAmJiBwcmV2UmF3UHJldlRpbWUgPiAwKSkge1xuXHRcdFx0XHRcdGNhbGxiYWNrID0gXCJvblJldmVyc2VDb21wbGV0ZVwiO1xuXHRcdFx0XHRcdGlzQ29tcGxldGUgPSB0aGlzLl9yZXZlcnNlZDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodGltZSA8IDApIHtcblx0XHRcdFx0XHR0aGlzLl9hY3RpdmUgPSBmYWxzZTtcblx0XHRcdFx0XHRpZiAoZHVyYXRpb24gPT09IDApIGlmICh0aGlzLl9pbml0dGVkIHx8ICF0aGlzLnZhcnMubGF6eSB8fCBmb3JjZSkgeyAvL3plcm8tZHVyYXRpb24gdHdlZW5zIGFyZSB0cmlja3kgYmVjYXVzZSB3ZSBtdXN0IGRpc2Nlcm4gdGhlIG1vbWVudHVtL2RpcmVjdGlvbiBvZiB0aW1lIGluIG9yZGVyIHRvIGRldGVybWluZSB3aGV0aGVyIHRoZSBzdGFydGluZyB2YWx1ZXMgc2hvdWxkIGJlIHJlbmRlcmVkIG9yIHRoZSBlbmRpbmcgdmFsdWVzLiBJZiB0aGUgXCJwbGF5aGVhZFwiIG9mIGl0cyB0aW1lbGluZSBnb2VzIHBhc3QgdGhlIHplcm8tZHVyYXRpb24gdHdlZW4gaW4gdGhlIGZvcndhcmQgZGlyZWN0aW9uIG9yIGxhbmRzIGRpcmVjdGx5IG9uIGl0LCB0aGUgZW5kIHZhbHVlcyBzaG91bGQgYmUgcmVuZGVyZWQsIGJ1dCBpZiB0aGUgdGltZWxpbmUncyBcInBsYXloZWFkXCIgbW92ZXMgcGFzdCBpdCBpbiB0aGUgYmFja3dhcmQgZGlyZWN0aW9uIChmcm9tIGEgcG9zdGl0aXZlIHRpbWUgdG8gYSBuZWdhdGl2ZSB0aW1lKSwgdGhlIHN0YXJ0aW5nIHZhbHVlcyBtdXN0IGJlIHJlbmRlcmVkLlxuXHRcdFx0XHRcdFx0aWYgKHByZXZSYXdQcmV2VGltZSA+PSAwKSB7XG5cdFx0XHRcdFx0XHRcdGZvcmNlID0gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHRoaXMuX3Jhd1ByZXZUaW1lID0gcmF3UHJldlRpbWUgPSAoIXN1cHByZXNzRXZlbnRzIHx8IHRpbWUgfHwgcHJldlJhd1ByZXZUaW1lID09PSB0aW1lKSA/IHRpbWUgOiBfdGlueU51bTsgLy93aGVuIHRoZSBwbGF5aGVhZCBhcnJpdmVzIGF0IEVYQUNUTFkgdGltZSAwIChyaWdodCBvbiB0b3ApIG9mIGEgemVyby1kdXJhdGlvbiB0d2Vlbiwgd2UgbmVlZCB0byBkaXNjZXJuIGlmIGV2ZW50cyBhcmUgc3VwcHJlc3NlZCBzbyB0aGF0IHdoZW4gdGhlIHBsYXloZWFkIG1vdmVzIGFnYWluIChuZXh0IHRpbWUpLCBpdCdsbCB0cmlnZ2VyIHRoZSBjYWxsYmFjay4gSWYgZXZlbnRzIGFyZSBOT1Qgc3VwcHJlc3NlZCwgb2J2aW91c2x5IHRoZSBjYWxsYmFjayB3b3VsZCBiZSB0cmlnZ2VyZWQgaW4gdGhpcyByZW5kZXIuIEJhc2ljYWxseSwgdGhlIGNhbGxiYWNrIHNob3VsZCBmaXJlIGVpdGhlciB3aGVuIHRoZSBwbGF5aGVhZCBBUlJJVkVTIG9yIExFQVZFUyB0aGlzIGV4YWN0IHNwb3QsIG5vdCBib3RoLiBJbWFnaW5lIGRvaW5nIGEgdGltZWxpbmUuc2VlaygwKSBhbmQgdGhlcmUncyBhIGNhbGxiYWNrIHRoYXQgc2l0cyBhdCAwLiBTaW5jZSBldmVudHMgYXJlIHN1cHByZXNzZWQgb24gdGhhdCBzZWVrKCkgYnkgZGVmYXVsdCwgbm90aGluZyB3aWxsIGZpcmUsIGJ1dCB3aGVuIHRoZSBwbGF5aGVhZCBtb3ZlcyBvZmYgb2YgdGhhdCBwb3NpdGlvbiwgdGhlIGNhbGxiYWNrIHNob3VsZCBmaXJlLiBUaGlzIGJlaGF2aW9yIGlzIHdoYXQgcGVvcGxlIGludHVpdGl2ZWx5IGV4cGVjdC4gV2Ugc2V0IHRoZSBfcmF3UHJldlRpbWUgdG8gYmUgYSBwcmVjaXNlIHRpbnkgbnVtYmVyIHRvIGluZGljYXRlIHRoaXMgc2NlbmFyaW8gcmF0aGVyIHRoYW4gdXNpbmcgYW5vdGhlciBwcm9wZXJ0eS92YXJpYWJsZSB3aGljaCB3b3VsZCBpbmNyZWFzZSBtZW1vcnkgdXNhZ2UuIFRoaXMgdGVjaG5pcXVlIGlzIGxlc3MgcmVhZGFibGUsIGJ1dCBtb3JlIGVmZmljaWVudC5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCF0aGlzLl9pbml0dGVkKSB7IC8vaWYgd2UgcmVuZGVyIHRoZSB2ZXJ5IGJlZ2lubmluZyAodGltZSA9PSAwKSBvZiBhIGZyb21UbygpLCB3ZSBtdXN0IGZvcmNlIHRoZSByZW5kZXIgKG5vcm1hbCB0d2VlbnMgd291bGRuJ3QgbmVlZCB0byByZW5kZXIgYXQgYSB0aW1lIG9mIDAgd2hlbiB0aGUgcHJldlRpbWUgd2FzIGFsc28gMCkuIFRoaXMgaXMgYWxzbyBtYW5kYXRvcnkgdG8gbWFrZSBzdXJlIG92ZXJ3cml0aW5nIGtpY2tzIGluIGltbWVkaWF0ZWx5LlxuXHRcdFx0XHRcdGZvcmNlID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5fdG90YWxUaW1lID0gdGhpcy5fdGltZSA9IHRpbWU7XG5cdFx0XHRcdFxuXHRcdFx0XHRpZiAodGhpcy5fcmVwZWF0ICE9PSAwKSB7XG5cdFx0XHRcdFx0Y3ljbGVEdXJhdGlvbiA9IGR1cmF0aW9uICsgdGhpcy5fcmVwZWF0RGVsYXk7XG5cdFx0XHRcdFx0dGhpcy5fY3ljbGUgPSAodGhpcy5fdG90YWxUaW1lIC8gY3ljbGVEdXJhdGlvbikgPj4gMDsgLy9vcmlnaW5hbGx5IF90b3RhbFRpbWUgJSBjeWNsZUR1cmF0aW9uIGJ1dCBmbG9hdGluZyBwb2ludCBlcnJvcnMgY2F1c2VkIHByb2JsZW1zLCBzbyBJIG5vcm1hbGl6ZWQgaXQuICg0ICUgMC44IHNob3VsZCBiZSAwIGJ1dCBGbGFzaCByZXBvcnRzIGl0IGFzIDAuNzk5OTk5OTkhKVxuXHRcdFx0XHRcdGlmICh0aGlzLl9jeWNsZSAhPT0gMCkgaWYgKHRoaXMuX2N5Y2xlID09PSB0aGlzLl90b3RhbFRpbWUgLyBjeWNsZUR1cmF0aW9uKSB7XG5cdFx0XHRcdFx0XHR0aGlzLl9jeWNsZS0tOyAvL290aGVyd2lzZSB3aGVuIHJlbmRlcmVkIGV4YWN0bHkgYXQgdGhlIGVuZCB0aW1lLCBpdCB3aWxsIGFjdCBhcyB0aG91Z2ggaXQgaXMgcmVwZWF0aW5nIChhdCB0aGUgYmVnaW5uaW5nKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLl90aW1lID0gdGhpcy5fdG90YWxUaW1lIC0gKHRoaXMuX2N5Y2xlICogY3ljbGVEdXJhdGlvbik7XG5cdFx0XHRcdFx0aWYgKHRoaXMuX3lveW8pIGlmICgodGhpcy5fY3ljbGUgJiAxKSAhPT0gMCkge1xuXHRcdFx0XHRcdFx0dGhpcy5fdGltZSA9IGR1cmF0aW9uIC0gdGhpcy5fdGltZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHRoaXMuX3RpbWUgPiBkdXJhdGlvbikge1xuXHRcdFx0XHRcdFx0dGhpcy5fdGltZSA9IGR1cmF0aW9uO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5fdGltZSA8IDApIHtcblx0XHRcdFx0XHRcdHRoaXMuX3RpbWUgPSAwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICh0aGlzLl9lYXNlVHlwZSkge1xuXHRcdFx0XHRcdHIgPSB0aGlzLl90aW1lIC8gZHVyYXRpb247XG5cdFx0XHRcdFx0dHlwZSA9IHRoaXMuX2Vhc2VUeXBlO1xuXHRcdFx0XHRcdHBvdyA9IHRoaXMuX2Vhc2VQb3dlcjtcblx0XHRcdFx0XHRpZiAodHlwZSA9PT0gMSB8fCAodHlwZSA9PT0gMyAmJiByID49IDAuNSkpIHtcblx0XHRcdFx0XHRcdHIgPSAxIC0gcjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHR5cGUgPT09IDMpIHtcblx0XHRcdFx0XHRcdHIgKj0gMjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHBvdyA9PT0gMSkge1xuXHRcdFx0XHRcdFx0ciAqPSByO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAocG93ID09PSAyKSB7XG5cdFx0XHRcdFx0XHRyICo9IHIgKiByO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAocG93ID09PSAzKSB7XG5cdFx0XHRcdFx0XHRyICo9IHIgKiByICogcjtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHBvdyA9PT0gNCkge1xuXHRcdFx0XHRcdFx0ciAqPSByICogciAqIHIgKiByO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICh0eXBlID09PSAxKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnJhdGlvID0gMSAtIHI7XG5cdFx0XHRcdFx0fSBlbHNlIGlmICh0eXBlID09PSAyKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnJhdGlvID0gcjtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMuX3RpbWUgLyBkdXJhdGlvbiA8IDAuNSkge1xuXHRcdFx0XHRcdFx0dGhpcy5yYXRpbyA9IHIgLyAyO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLnJhdGlvID0gMSAtIChyIC8gMik7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5yYXRpbyA9IHRoaXMuX2Vhc2UuZ2V0UmF0aW8odGhpcy5fdGltZSAvIGR1cmF0aW9uKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRpZiAocHJldlRpbWUgPT09IHRoaXMuX3RpbWUgJiYgIWZvcmNlICYmIHByZXZDeWNsZSA9PT0gdGhpcy5fY3ljbGUpIHtcblx0XHRcdFx0aWYgKHByZXZUb3RhbFRpbWUgIT09IHRoaXMuX3RvdGFsVGltZSkgaWYgKHRoaXMuX29uVXBkYXRlKSBpZiAoIXN1cHByZXNzRXZlbnRzKSB7IC8vc28gdGhhdCBvblVwZGF0ZSBmaXJlcyBldmVuIGR1cmluZyB0aGUgcmVwZWF0RGVsYXkgLSBhcyBsb25nIGFzIHRoZSB0b3RhbFRpbWUgY2hhbmdlZCwgd2Ugc2hvdWxkIHRyaWdnZXIgb25VcGRhdGUuXG5cdFx0XHRcdFx0dGhpcy5fb25VcGRhdGUuYXBwbHkodGhpcy52YXJzLm9uVXBkYXRlU2NvcGUgfHwgdGhpcywgdGhpcy52YXJzLm9uVXBkYXRlUGFyYW1zIHx8IF9ibGFua0FycmF5KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9IGVsc2UgaWYgKCF0aGlzLl9pbml0dGVkKSB7XG5cdFx0XHRcdHRoaXMuX2luaXQoKTtcblx0XHRcdFx0aWYgKCF0aGlzLl9pbml0dGVkIHx8IHRoaXMuX2djKSB7IC8vaW1tZWRpYXRlUmVuZGVyIHR3ZWVucyB0eXBpY2FsbHkgd29uJ3QgaW5pdGlhbGl6ZSB1bnRpbCB0aGUgcGxheWhlYWQgYWR2YW5jZXMgKF90aW1lIGlzIGdyZWF0ZXIgdGhhbiAwKSBpbiBvcmRlciB0byBlbnN1cmUgdGhhdCBvdmVyd3JpdGluZyBvY2N1cnMgcHJvcGVybHkuIEFsc28sIGlmIGFsbCBvZiB0aGUgdHdlZW5pbmcgcHJvcGVydGllcyBoYXZlIGJlZW4gb3ZlcndyaXR0ZW4gKHdoaWNoIHdvdWxkIGNhdXNlIF9nYyB0byBiZSB0cnVlLCBhcyBzZXQgaW4gX2luaXQoKSksIHdlIHNob3VsZG4ndCBjb250aW51ZSBvdGhlcndpc2UgYW4gb25TdGFydCBjYWxsYmFjayBjb3VsZCBiZSBjYWxsZWQgZm9yIGV4YW1wbGUuXG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9IGVsc2UgaWYgKCFmb3JjZSAmJiB0aGlzLl9maXJzdFBUICYmICgodGhpcy52YXJzLmxhenkgIT09IGZhbHNlICYmIHRoaXMuX2R1cmF0aW9uKSB8fCAodGhpcy52YXJzLmxhenkgJiYgIXRoaXMuX2R1cmF0aW9uKSkpIHsgLy93ZSBzdGljayBpdCBpbiB0aGUgcXVldWUgZm9yIHJlbmRlcmluZyBhdCB0aGUgdmVyeSBlbmQgb2YgdGhlIHRpY2sgLSB0aGlzIGlzIGEgcGVyZm9ybWFuY2Ugb3B0aW1pemF0aW9uIGJlY2F1c2UgYnJvd3NlcnMgaW52YWxpZGF0ZSBzdHlsZXMgYW5kIGZvcmNlIGEgcmVjYWxjdWxhdGlvbiBpZiB5b3UgcmVhZCwgd3JpdGUsIGFuZCB0aGVuIHJlYWQgc3R5bGUgZGF0YSAoc28gaXQncyBiZXR0ZXIgdG8gcmVhZC9yZWFkL3JlYWQvd3JpdGUvd3JpdGUvd3JpdGUgdGhhbiByZWFkL3dyaXRlL3JlYWQvd3JpdGUvcmVhZC93cml0ZSkuIFRoZSBkb3duIHNpZGUsIG9mIGNvdXJzZSwgaXMgdGhhdCB1c3VhbGx5IHlvdSBXQU5UIHRoaW5ncyB0byByZW5kZXIgaW1tZWRpYXRlbHkgYmVjYXVzZSB5b3UgbWF5IGhhdmUgY29kZSBydW5uaW5nIHJpZ2h0IGFmdGVyIHRoYXQgd2hpY2ggZGVwZW5kcyBvbiB0aGUgY2hhbmdlLiBMaWtlIGltYWdpbmUgcnVubmluZyBUd2VlbkxpdGUuc2V0KC4uLikgYW5kIHRoZW4gaW1tZWRpYXRlbHkgYWZ0ZXIgdGhhdCwgY3JlYXRpbmcgYSBub3RoZXIgdHdlZW4gdGhhdCBhbmltYXRlcyB0aGUgc2FtZSBwcm9wZXJ0eSB0byBhbm90aGVyIHZhbHVlOyB0aGUgc3RhcnRpbmcgdmFsdWVzIG9mIHRoYXQgMm5kIHR3ZWVuIHdvdWxkbid0IGJlIGFjY3VyYXRlIGlmIGxhenkgaXMgdHJ1ZS5cblx0XHRcdFx0XHR0aGlzLl90aW1lID0gcHJldlRpbWU7XG5cdFx0XHRcdFx0dGhpcy5fdG90YWxUaW1lID0gcHJldlRvdGFsVGltZTtcblx0XHRcdFx0XHR0aGlzLl9yYXdQcmV2VGltZSA9IHByZXZSYXdQcmV2VGltZTtcblx0XHRcdFx0XHR0aGlzLl9jeWNsZSA9IHByZXZDeWNsZTtcblx0XHRcdFx0XHRUd2VlbkxpdGVJbnRlcm5hbHMubGF6eVR3ZWVucy5wdXNoKHRoaXMpO1xuXHRcdFx0XHRcdHRoaXMuX2xhenkgPSBbdGltZSwgc3VwcHJlc3NFdmVudHNdO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHQvL19lYXNlIGlzIGluaXRpYWxseSBzZXQgdG8gZGVmYXVsdEVhc2UsIHNvIG5vdyB0aGF0IGluaXQoKSBoYXMgcnVuLCBfZWFzZSBpcyBzZXQgcHJvcGVybHkgYW5kIHdlIG5lZWQgdG8gcmVjYWxjdWxhdGUgdGhlIHJhdGlvLiBPdmVyYWxsIHRoaXMgaXMgZmFzdGVyIHRoYW4gdXNpbmcgY29uZGl0aW9uYWwgbG9naWMgZWFybGllciBpbiB0aGUgbWV0aG9kIHRvIGF2b2lkIGhhdmluZyB0byBzZXQgcmF0aW8gdHdpY2UgYmVjYXVzZSB3ZSBvbmx5IGluaXQoKSBvbmNlIGJ1dCByZW5kZXJUaW1lKCkgZ2V0cyBjYWxsZWQgVkVSWSBmcmVxdWVudGx5LlxuXHRcdFx0XHRpZiAodGhpcy5fdGltZSAmJiAhaXNDb21wbGV0ZSkge1xuXHRcdFx0XHRcdHRoaXMucmF0aW8gPSB0aGlzLl9lYXNlLmdldFJhdGlvKHRoaXMuX3RpbWUgLyBkdXJhdGlvbik7XG5cdFx0XHRcdH0gZWxzZSBpZiAoaXNDb21wbGV0ZSAmJiB0aGlzLl9lYXNlLl9jYWxjRW5kKSB7XG5cdFx0XHRcdFx0dGhpcy5yYXRpbyA9IHRoaXMuX2Vhc2UuZ2V0UmF0aW8oKHRoaXMuX3RpbWUgPT09IDApID8gMCA6IDEpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5fbGF6eSAhPT0gZmFsc2UpIHtcblx0XHRcdFx0dGhpcy5fbGF6eSA9IGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIXRoaXMuX2FjdGl2ZSkgaWYgKCF0aGlzLl9wYXVzZWQgJiYgdGhpcy5fdGltZSAhPT0gcHJldlRpbWUgJiYgdGltZSA+PSAwKSB7XG5cdFx0XHRcdHRoaXMuX2FjdGl2ZSA9IHRydWU7IC8vc28gdGhhdCBpZiB0aGUgdXNlciByZW5kZXJzIGEgdHdlZW4gKGFzIG9wcG9zZWQgdG8gdGhlIHRpbWVsaW5lIHJlbmRlcmluZyBpdCksIHRoZSB0aW1lbGluZSBpcyBmb3JjZWQgdG8gcmUtcmVuZGVyIGFuZCBhbGlnbiBpdCB3aXRoIHRoZSBwcm9wZXIgdGltZS9mcmFtZSBvbiB0aGUgbmV4dCByZW5kZXJpbmcgY3ljbGUuIE1heWJlIHRoZSB0d2VlbiBhbHJlYWR5IGZpbmlzaGVkIGJ1dCB0aGUgdXNlciBtYW51YWxseSByZS1yZW5kZXJzIGl0IGFzIGhhbGZ3YXkgZG9uZS5cblx0XHRcdH1cblx0XHRcdGlmIChwcmV2VG90YWxUaW1lID09PSAwKSB7XG5cdFx0XHRcdGlmICh0aGlzLl9pbml0dGVkID09PSAyICYmIHRpbWUgPiAwKSB7XG5cdFx0XHRcdFx0Ly90aGlzLmludmFsaWRhdGUoKTtcblx0XHRcdFx0XHR0aGlzLl9pbml0KCk7IC8vd2lsbCBqdXN0IGFwcGx5IG92ZXJ3cml0aW5nIHNpbmNlIF9pbml0dGVkIG9mICgyKSBtZWFucyBpdCB3YXMgYSBmcm9tKCkgdHdlZW4gdGhhdCBoYWQgaW1tZWRpYXRlUmVuZGVyOnRydWVcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodGhpcy5fc3RhcnRBdCkge1xuXHRcdFx0XHRcdGlmICh0aW1lID49IDApIHtcblx0XHRcdFx0XHRcdHRoaXMuX3N0YXJ0QXQucmVuZGVyKHRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmICghY2FsbGJhY2spIHtcblx0XHRcdFx0XHRcdGNhbGxiYWNrID0gXCJfZHVtbXlHU1wiOyAvL2lmIG5vIGNhbGxiYWNrIGlzIGRlZmluZWQsIHVzZSBhIGR1bW15IHZhbHVlIGp1c3Qgc28gdGhhdCB0aGUgY29uZGl0aW9uIGF0IHRoZSBlbmQgZXZhbHVhdGVzIGFzIHRydWUgYmVjYXVzZSBfc3RhcnRBdCBzaG91bGQgcmVuZGVyIEFGVEVSIHRoZSBub3JtYWwgcmVuZGVyIGxvb3Agd2hlbiB0aGUgdGltZSBpcyBuZWdhdGl2ZS4gV2UgY291bGQgaGFuZGxlIHRoaXMgaW4gYSBtb3JlIGludHVpdGl2ZSB3YXksIG9mIGNvdXJzZSwgYnV0IHRoZSByZW5kZXIgbG9vcCBpcyB0aGUgTU9TVCBpbXBvcnRhbnQgdGhpbmcgdG8gb3B0aW1pemUsIHNvIHRoaXMgdGVjaG5pcXVlIGFsbG93cyB1cyB0byBhdm9pZCBhZGRpbmcgZXh0cmEgY29uZGl0aW9uYWwgbG9naWMgaW4gYSBoaWdoLWZyZXF1ZW5jeSBhcmVhLlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodGhpcy52YXJzLm9uU3RhcnQpIGlmICh0aGlzLl90b3RhbFRpbWUgIT09IDAgfHwgZHVyYXRpb24gPT09IDApIGlmICghc3VwcHJlc3NFdmVudHMpIHtcblx0XHRcdFx0XHR0aGlzLnZhcnMub25TdGFydC5hcHBseSh0aGlzLnZhcnMub25TdGFydFNjb3BlIHx8IHRoaXMsIHRoaXMudmFycy5vblN0YXJ0UGFyYW1zIHx8IF9ibGFua0FycmF5KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRwdCA9IHRoaXMuX2ZpcnN0UFQ7XG5cdFx0XHR3aGlsZSAocHQpIHtcblx0XHRcdFx0aWYgKHB0LmYpIHtcblx0XHRcdFx0XHRwdC50W3B0LnBdKHB0LmMgKiB0aGlzLnJhdGlvICsgcHQucyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cHQudFtwdC5wXSA9IHB0LmMgKiB0aGlzLnJhdGlvICsgcHQucztcblx0XHRcdFx0fVxuXHRcdFx0XHRwdCA9IHB0Ll9uZXh0O1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRpZiAodGhpcy5fb25VcGRhdGUpIHtcblx0XHRcdFx0aWYgKHRpbWUgPCAwKSBpZiAodGhpcy5fc3RhcnRBdCAmJiB0aGlzLl9zdGFydFRpbWUpIHsgLy9pZiB0aGUgdHdlZW4gaXMgcG9zaXRpb25lZCBhdCB0aGUgVkVSWSBiZWdpbm5pbmcgKF9zdGFydFRpbWUgMCkgb2YgaXRzIHBhcmVudCB0aW1lbGluZSwgaXQncyBpbGxlZ2FsIGZvciB0aGUgcGxheWhlYWQgdG8gZ28gYmFjayBmdXJ0aGVyLCBzbyB3ZSBzaG91bGQgbm90IHJlbmRlciB0aGUgcmVjb3JkZWQgc3RhcnRBdCB2YWx1ZXMuXG5cdFx0XHRcdFx0dGhpcy5fc3RhcnRBdC5yZW5kZXIodGltZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKTsgLy9ub3RlOiBmb3IgcGVyZm9ybWFuY2UgcmVhc29ucywgd2UgdHVjayB0aGlzIGNvbmRpdGlvbmFsIGxvZ2ljIGluc2lkZSBsZXNzIHRyYXZlbGVkIGFyZWFzIChtb3N0IHR3ZWVucyBkb24ndCBoYXZlIGFuIG9uVXBkYXRlKS4gV2UnZCBqdXN0IGhhdmUgaXQgYXQgdGhlIGVuZCBiZWZvcmUgdGhlIG9uQ29tcGxldGUsIGJ1dCB0aGUgdmFsdWVzIHNob3VsZCBiZSB1cGRhdGVkIGJlZm9yZSBhbnkgb25VcGRhdGUgaXMgY2FsbGVkLCBzbyB3ZSBBTFNPIHB1dCBpdCBoZXJlIGFuZCB0aGVuIGlmIGl0J3Mgbm90IGNhbGxlZCwgd2UgZG8gc28gbGF0ZXIgbmVhciB0aGUgb25Db21wbGV0ZS5cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIXN1cHByZXNzRXZlbnRzKSBpZiAodGhpcy5fdG90YWxUaW1lICE9PSBwcmV2VG90YWxUaW1lIHx8IGlzQ29tcGxldGUpIHtcblx0XHRcdFx0XHR0aGlzLl9vblVwZGF0ZS5hcHBseSh0aGlzLnZhcnMub25VcGRhdGVTY29wZSB8fCB0aGlzLCB0aGlzLnZhcnMub25VcGRhdGVQYXJhbXMgfHwgX2JsYW5rQXJyYXkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5fY3ljbGUgIT09IHByZXZDeWNsZSkgaWYgKCFzdXBwcmVzc0V2ZW50cykgaWYgKCF0aGlzLl9nYykgaWYgKHRoaXMudmFycy5vblJlcGVhdCkge1xuXHRcdFx0XHR0aGlzLnZhcnMub25SZXBlYXQuYXBwbHkodGhpcy52YXJzLm9uUmVwZWF0U2NvcGUgfHwgdGhpcywgdGhpcy52YXJzLm9uUmVwZWF0UGFyYW1zIHx8IF9ibGFua0FycmF5KTtcblx0XHRcdH1cblx0XHRcdGlmIChjYWxsYmFjaykgaWYgKCF0aGlzLl9nYyB8fCBmb3JjZSkgeyAvL2NoZWNrIGdjIGJlY2F1c2UgdGhlcmUncyBhIGNoYW5jZSB0aGF0IGtpbGwoKSBjb3VsZCBiZSBjYWxsZWQgaW4gYW4gb25VcGRhdGVcblx0XHRcdFx0aWYgKHRpbWUgPCAwICYmIHRoaXMuX3N0YXJ0QXQgJiYgIXRoaXMuX29uVXBkYXRlICYmIHRoaXMuX3N0YXJ0VGltZSkgeyAvL2lmIHRoZSB0d2VlbiBpcyBwb3NpdGlvbmVkIGF0IHRoZSBWRVJZIGJlZ2lubmluZyAoX3N0YXJ0VGltZSAwKSBvZiBpdHMgcGFyZW50IHRpbWVsaW5lLCBpdCdzIGlsbGVnYWwgZm9yIHRoZSBwbGF5aGVhZCB0byBnbyBiYWNrIGZ1cnRoZXIsIHNvIHdlIHNob3VsZCBub3QgcmVuZGVyIHRoZSByZWNvcmRlZCBzdGFydEF0IHZhbHVlcy5cblx0XHRcdFx0XHR0aGlzLl9zdGFydEF0LnJlbmRlcih0aW1lLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChpc0NvbXBsZXRlKSB7XG5cdFx0XHRcdFx0aWYgKHRoaXMuX3RpbWVsaW5lLmF1dG9SZW1vdmVDaGlsZHJlbikge1xuXHRcdFx0XHRcdFx0dGhpcy5fZW5hYmxlZChmYWxzZSwgZmFsc2UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLl9hY3RpdmUgPSBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIXN1cHByZXNzRXZlbnRzICYmIHRoaXMudmFyc1tjYWxsYmFja10pIHtcblx0XHRcdFx0XHR0aGlzLnZhcnNbY2FsbGJhY2tdLmFwcGx5KHRoaXMudmFyc1tjYWxsYmFjayArIFwiU2NvcGVcIl0gfHwgdGhpcywgdGhpcy52YXJzW2NhbGxiYWNrICsgXCJQYXJhbXNcIl0gfHwgX2JsYW5rQXJyYXkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkdXJhdGlvbiA9PT0gMCAmJiB0aGlzLl9yYXdQcmV2VGltZSA9PT0gX3RpbnlOdW0gJiYgcmF3UHJldlRpbWUgIT09IF90aW55TnVtKSB7IC8vdGhlIG9uQ29tcGxldGUgb3Igb25SZXZlcnNlQ29tcGxldGUgY291bGQgdHJpZ2dlciBtb3ZlbWVudCBvZiB0aGUgcGxheWhlYWQgYW5kIGZvciB6ZXJvLWR1cmF0aW9uIHR3ZWVucyAod2hpY2ggbXVzdCBkaXNjZXJuIGRpcmVjdGlvbikgdGhhdCBsYW5kIGRpcmVjdGx5IGJhY2sgb24gdGhlaXIgc3RhcnQgdGltZSwgd2UgZG9uJ3Qgd2FudCB0byBmaXJlIGFnYWluIG9uIHRoZSBuZXh0IHJlbmRlci4gVGhpbmsgb2Ygc2V2ZXJhbCBhZGRQYXVzZSgpJ3MgaW4gYSB0aW1lbGluZSB0aGF0IGZvcmNlcyB0aGUgcGxheWhlYWQgdG8gYSBjZXJ0YWluIHNwb3QsIGJ1dCB3aGF0IGlmIGl0J3MgYWxyZWFkeSBwYXVzZWQgYW5kIGFub3RoZXIgdHdlZW4gaXMgdHdlZW5pbmcgdGhlIFwidGltZVwiIG9mIHRoZSB0aW1lbGluZT8gRWFjaCB0aW1lIGl0IG1vdmVzIFtmb3J3YXJkXSBwYXN0IHRoYXQgc3BvdCwgaXQgd291bGQgbW92ZSBiYWNrLCBhbmQgc2luY2Ugc3VwcHJlc3NFdmVudHMgaXMgdHJ1ZSwgaXQnZCByZXNldCBfcmF3UHJldlRpbWUgdG8gX3RpbnlOdW0gc28gdGhhdCB3aGVuIGl0IGJlZ2lucyBhZ2FpbiwgdGhlIGNhbGxiYWNrIHdvdWxkIGZpcmUgKHNvIHVsdGltYXRlbHkgaXQgY291bGQgYm91bmNlIGJhY2sgYW5kIGZvcnRoIGR1cmluZyB0aGF0IHR3ZWVuKS4gQWdhaW4sIHRoaXMgaXMgYSB2ZXJ5IHVuY29tbW9uIHNjZW5hcmlvLCBidXQgcG9zc2libGUgbm9uZXRoZWxlc3MuXG5cdFx0XHRcdFx0dGhpcy5fcmF3UHJldlRpbWUgPSAwO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRcbi8vLS0tLSBTVEFUSUMgRlVOQ1RJT05TIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0XG5cdFx0VHdlZW5NYXgudG8gPSBmdW5jdGlvbih0YXJnZXQsIGR1cmF0aW9uLCB2YXJzKSB7XG5cdFx0XHRyZXR1cm4gbmV3IFR3ZWVuTWF4KHRhcmdldCwgZHVyYXRpb24sIHZhcnMpO1xuXHRcdH07XG5cdFx0XG5cdFx0VHdlZW5NYXguZnJvbSA9IGZ1bmN0aW9uKHRhcmdldCwgZHVyYXRpb24sIHZhcnMpIHtcblx0XHRcdHZhcnMucnVuQmFja3dhcmRzID0gdHJ1ZTtcblx0XHRcdHZhcnMuaW1tZWRpYXRlUmVuZGVyID0gKHZhcnMuaW1tZWRpYXRlUmVuZGVyICE9IGZhbHNlKTtcblx0XHRcdHJldHVybiBuZXcgVHdlZW5NYXgodGFyZ2V0LCBkdXJhdGlvbiwgdmFycyk7XG5cdFx0fTtcblx0XHRcblx0XHRUd2Vlbk1heC5mcm9tVG8gPSBmdW5jdGlvbih0YXJnZXQsIGR1cmF0aW9uLCBmcm9tVmFycywgdG9WYXJzKSB7XG5cdFx0XHR0b1ZhcnMuc3RhcnRBdCA9IGZyb21WYXJzO1xuXHRcdFx0dG9WYXJzLmltbWVkaWF0ZVJlbmRlciA9ICh0b1ZhcnMuaW1tZWRpYXRlUmVuZGVyICE9IGZhbHNlICYmIGZyb21WYXJzLmltbWVkaWF0ZVJlbmRlciAhPSBmYWxzZSk7XG5cdFx0XHRyZXR1cm4gbmV3IFR3ZWVuTWF4KHRhcmdldCwgZHVyYXRpb24sIHRvVmFycyk7XG5cdFx0fTtcblx0XHRcblx0XHRUd2Vlbk1heC5zdGFnZ2VyVG8gPSBUd2Vlbk1heC5hbGxUbyA9IGZ1bmN0aW9uKHRhcmdldHMsIGR1cmF0aW9uLCB2YXJzLCBzdGFnZ2VyLCBvbkNvbXBsZXRlQWxsLCBvbkNvbXBsZXRlQWxsUGFyYW1zLCBvbkNvbXBsZXRlQWxsU2NvcGUpIHtcblx0XHRcdHN0YWdnZXIgPSBzdGFnZ2VyIHx8IDA7XG5cdFx0XHR2YXIgZGVsYXkgPSB2YXJzLmRlbGF5IHx8IDAsXG5cdFx0XHRcdGEgPSBbXSxcblx0XHRcdFx0ZmluYWxDb21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmICh2YXJzLm9uQ29tcGxldGUpIHtcblx0XHRcdFx0XHRcdHZhcnMub25Db21wbGV0ZS5hcHBseSh2YXJzLm9uQ29tcGxldGVTY29wZSB8fCB0aGlzLCBhcmd1bWVudHMpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRvbkNvbXBsZXRlQWxsLmFwcGx5KG9uQ29tcGxldGVBbGxTY29wZSB8fCB0aGlzLCBvbkNvbXBsZXRlQWxsUGFyYW1zIHx8IF9ibGFua0FycmF5KTtcblx0XHRcdFx0fSxcblx0XHRcdFx0bCwgY29weSwgaSwgcDtcblx0XHRcdGlmICghX2lzQXJyYXkodGFyZ2V0cykpIHtcblx0XHRcdFx0aWYgKHR5cGVvZih0YXJnZXRzKSA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0XHRcdHRhcmdldHMgPSBUd2VlbkxpdGUuc2VsZWN0b3IodGFyZ2V0cykgfHwgdGFyZ2V0cztcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoX2lzU2VsZWN0b3IodGFyZ2V0cykpIHtcblx0XHRcdFx0XHR0YXJnZXRzID0gX3NsaWNlKHRhcmdldHMpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0YXJnZXRzID0gdGFyZ2V0cyB8fCBbXTtcblx0XHRcdGlmIChzdGFnZ2VyIDwgMCkge1xuXHRcdFx0XHR0YXJnZXRzID0gX3NsaWNlKHRhcmdldHMpO1xuXHRcdFx0XHR0YXJnZXRzLnJldmVyc2UoKTtcblx0XHRcdFx0c3RhZ2dlciAqPSAtMTtcblx0XHRcdH1cblx0XHRcdGwgPSB0YXJnZXRzLmxlbmd0aCAtIDE7XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDw9IGw7IGkrKykge1xuXHRcdFx0XHRjb3B5ID0ge307XG5cdFx0XHRcdGZvciAocCBpbiB2YXJzKSB7XG5cdFx0XHRcdFx0Y29weVtwXSA9IHZhcnNbcF07XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29weS5kZWxheSA9IGRlbGF5O1xuXHRcdFx0XHRpZiAoaSA9PT0gbCAmJiBvbkNvbXBsZXRlQWxsKSB7XG5cdFx0XHRcdFx0Y29weS5vbkNvbXBsZXRlID0gZmluYWxDb21wbGV0ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRhW2ldID0gbmV3IFR3ZWVuTWF4KHRhcmdldHNbaV0sIGR1cmF0aW9uLCBjb3B5KTtcblx0XHRcdFx0ZGVsYXkgKz0gc3RhZ2dlcjtcblx0XHRcdH1cblx0XHRcdHJldHVybiBhO1xuXHRcdH07XG5cdFx0XG5cdFx0VHdlZW5NYXguc3RhZ2dlckZyb20gPSBUd2Vlbk1heC5hbGxGcm9tID0gZnVuY3Rpb24odGFyZ2V0cywgZHVyYXRpb24sIHZhcnMsIHN0YWdnZXIsIG9uQ29tcGxldGVBbGwsIG9uQ29tcGxldGVBbGxQYXJhbXMsIG9uQ29tcGxldGVBbGxTY29wZSkge1xuXHRcdFx0dmFycy5ydW5CYWNrd2FyZHMgPSB0cnVlO1xuXHRcdFx0dmFycy5pbW1lZGlhdGVSZW5kZXIgPSAodmFycy5pbW1lZGlhdGVSZW5kZXIgIT0gZmFsc2UpO1xuXHRcdFx0cmV0dXJuIFR3ZWVuTWF4LnN0YWdnZXJUbyh0YXJnZXRzLCBkdXJhdGlvbiwgdmFycywgc3RhZ2dlciwgb25Db21wbGV0ZUFsbCwgb25Db21wbGV0ZUFsbFBhcmFtcywgb25Db21wbGV0ZUFsbFNjb3BlKTtcblx0XHR9O1xuXHRcdFxuXHRcdFR3ZWVuTWF4LnN0YWdnZXJGcm9tVG8gPSBUd2Vlbk1heC5hbGxGcm9tVG8gPSBmdW5jdGlvbih0YXJnZXRzLCBkdXJhdGlvbiwgZnJvbVZhcnMsIHRvVmFycywgc3RhZ2dlciwgb25Db21wbGV0ZUFsbCwgb25Db21wbGV0ZUFsbFBhcmFtcywgb25Db21wbGV0ZUFsbFNjb3BlKSB7XG5cdFx0XHR0b1ZhcnMuc3RhcnRBdCA9IGZyb21WYXJzO1xuXHRcdFx0dG9WYXJzLmltbWVkaWF0ZVJlbmRlciA9ICh0b1ZhcnMuaW1tZWRpYXRlUmVuZGVyICE9IGZhbHNlICYmIGZyb21WYXJzLmltbWVkaWF0ZVJlbmRlciAhPSBmYWxzZSk7XG5cdFx0XHRyZXR1cm4gVHdlZW5NYXguc3RhZ2dlclRvKHRhcmdldHMsIGR1cmF0aW9uLCB0b1ZhcnMsIHN0YWdnZXIsIG9uQ29tcGxldGVBbGwsIG9uQ29tcGxldGVBbGxQYXJhbXMsIG9uQ29tcGxldGVBbGxTY29wZSk7XG5cdFx0fTtcblx0XHRcdFx0XG5cdFx0VHdlZW5NYXguZGVsYXllZENhbGwgPSBmdW5jdGlvbihkZWxheSwgY2FsbGJhY2ssIHBhcmFtcywgc2NvcGUsIHVzZUZyYW1lcykge1xuXHRcdFx0cmV0dXJuIG5ldyBUd2Vlbk1heChjYWxsYmFjaywgMCwge2RlbGF5OmRlbGF5LCBvbkNvbXBsZXRlOmNhbGxiYWNrLCBvbkNvbXBsZXRlUGFyYW1zOnBhcmFtcywgb25Db21wbGV0ZVNjb3BlOnNjb3BlLCBvblJldmVyc2VDb21wbGV0ZTpjYWxsYmFjaywgb25SZXZlcnNlQ29tcGxldGVQYXJhbXM6cGFyYW1zLCBvblJldmVyc2VDb21wbGV0ZVNjb3BlOnNjb3BlLCBpbW1lZGlhdGVSZW5kZXI6ZmFsc2UsIHVzZUZyYW1lczp1c2VGcmFtZXMsIG92ZXJ3cml0ZTowfSk7XG5cdFx0fTtcblx0XHRcblx0XHRUd2Vlbk1heC5zZXQgPSBmdW5jdGlvbih0YXJnZXQsIHZhcnMpIHtcblx0XHRcdHJldHVybiBuZXcgVHdlZW5NYXgodGFyZ2V0LCAwLCB2YXJzKTtcblx0XHR9O1xuXHRcdFxuXHRcdFR3ZWVuTWF4LmlzVHdlZW5pbmcgPSBmdW5jdGlvbih0YXJnZXQpIHtcblx0XHRcdHJldHVybiAoVHdlZW5MaXRlLmdldFR3ZWVuc09mKHRhcmdldCwgdHJ1ZSkubGVuZ3RoID4gMCk7XG5cdFx0fTtcblx0XHRcblx0XHR2YXIgX2dldENoaWxkcmVuT2YgPSBmdW5jdGlvbih0aW1lbGluZSwgaW5jbHVkZVRpbWVsaW5lcykge1xuXHRcdFx0XHR2YXIgYSA9IFtdLFxuXHRcdFx0XHRcdGNudCA9IDAsXG5cdFx0XHRcdFx0dHdlZW4gPSB0aW1lbGluZS5fZmlyc3Q7XG5cdFx0XHRcdHdoaWxlICh0d2Vlbikge1xuXHRcdFx0XHRcdGlmICh0d2VlbiBpbnN0YW5jZW9mIFR3ZWVuTGl0ZSkge1xuXHRcdFx0XHRcdFx0YVtjbnQrK10gPSB0d2Vlbjtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0aWYgKGluY2x1ZGVUaW1lbGluZXMpIHtcblx0XHRcdFx0XHRcdFx0YVtjbnQrK10gPSB0d2Vlbjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGEgPSBhLmNvbmNhdChfZ2V0Q2hpbGRyZW5PZih0d2VlbiwgaW5jbHVkZVRpbWVsaW5lcykpO1xuXHRcdFx0XHRcdFx0Y250ID0gYS5sZW5ndGg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHR3ZWVuID0gdHdlZW4uX25leHQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGE7XG5cdFx0XHR9LCBcblx0XHRcdGdldEFsbFR3ZWVucyA9IFR3ZWVuTWF4LmdldEFsbFR3ZWVucyA9IGZ1bmN0aW9uKGluY2x1ZGVUaW1lbGluZXMpIHtcblx0XHRcdFx0cmV0dXJuIF9nZXRDaGlsZHJlbk9mKEFuaW1hdGlvbi5fcm9vdFRpbWVsaW5lLCBpbmNsdWRlVGltZWxpbmVzKS5jb25jYXQoIF9nZXRDaGlsZHJlbk9mKEFuaW1hdGlvbi5fcm9vdEZyYW1lc1RpbWVsaW5lLCBpbmNsdWRlVGltZWxpbmVzKSApO1xuXHRcdFx0fTtcblx0XHRcblx0XHRUd2Vlbk1heC5raWxsQWxsID0gZnVuY3Rpb24oY29tcGxldGUsIHR3ZWVucywgZGVsYXllZENhbGxzLCB0aW1lbGluZXMpIHtcblx0XHRcdGlmICh0d2VlbnMgPT0gbnVsbCkge1xuXHRcdFx0XHR0d2VlbnMgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGRlbGF5ZWRDYWxscyA9PSBudWxsKSB7XG5cdFx0XHRcdGRlbGF5ZWRDYWxscyA9IHRydWU7XG5cdFx0XHR9XG5cdFx0XHR2YXIgYSA9IGdldEFsbFR3ZWVucygodGltZWxpbmVzICE9IGZhbHNlKSksXG5cdFx0XHRcdGwgPSBhLmxlbmd0aCxcblx0XHRcdFx0YWxsVHJ1ZSA9ICh0d2VlbnMgJiYgZGVsYXllZENhbGxzICYmIHRpbWVsaW5lcyksXG5cdFx0XHRcdGlzREMsIHR3ZWVuLCBpO1xuXHRcdFx0Zm9yIChpID0gMDsgaSA8IGw7IGkrKykge1xuXHRcdFx0XHR0d2VlbiA9IGFbaV07XG5cdFx0XHRcdGlmIChhbGxUcnVlIHx8ICh0d2VlbiBpbnN0YW5jZW9mIFNpbXBsZVRpbWVsaW5lKSB8fCAoKGlzREMgPSAodHdlZW4udGFyZ2V0ID09PSB0d2Vlbi52YXJzLm9uQ29tcGxldGUpKSAmJiBkZWxheWVkQ2FsbHMpIHx8ICh0d2VlbnMgJiYgIWlzREMpKSB7XG5cdFx0XHRcdFx0aWYgKGNvbXBsZXRlKSB7XG5cdFx0XHRcdFx0XHR0d2Vlbi50b3RhbFRpbWUodHdlZW4uX3JldmVyc2VkID8gMCA6IHR3ZWVuLnRvdGFsRHVyYXRpb24oKSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHR3ZWVuLl9lbmFibGVkKGZhbHNlLCBmYWxzZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRcblx0XHRUd2Vlbk1heC5raWxsQ2hpbGRUd2VlbnNPZiA9IGZ1bmN0aW9uKHBhcmVudCwgY29tcGxldGUpIHtcblx0XHRcdGlmIChwYXJlbnQgPT0gbnVsbCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR2YXIgdGwgPSBUd2VlbkxpdGVJbnRlcm5hbHMudHdlZW5Mb29rdXAsXG5cdFx0XHRcdGEsIGN1clBhcmVudCwgcCwgaSwgbDtcblx0XHRcdGlmICh0eXBlb2YocGFyZW50KSA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0XHRwYXJlbnQgPSBUd2VlbkxpdGUuc2VsZWN0b3IocGFyZW50KSB8fCBwYXJlbnQ7XG5cdFx0XHR9XG5cdFx0XHRpZiAoX2lzU2VsZWN0b3IocGFyZW50KSkge1xuXHRcdFx0XHRwYXJlbnQgPSBfc2xpY2UocGFyZW50KTtcblx0XHRcdH1cblx0XHRcdGlmIChfaXNBcnJheShwYXJlbnQpKSB7XG5cdFx0XHRcdGkgPSBwYXJlbnQubGVuZ3RoO1xuXHRcdFx0XHR3aGlsZSAoLS1pID4gLTEpIHtcblx0XHRcdFx0XHRUd2Vlbk1heC5raWxsQ2hpbGRUd2VlbnNPZihwYXJlbnRbaV0sIGNvbXBsZXRlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRhID0gW107XG5cdFx0XHRmb3IgKHAgaW4gdGwpIHtcblx0XHRcdFx0Y3VyUGFyZW50ID0gdGxbcF0udGFyZ2V0LnBhcmVudE5vZGU7XG5cdFx0XHRcdHdoaWxlIChjdXJQYXJlbnQpIHtcblx0XHRcdFx0XHRpZiAoY3VyUGFyZW50ID09PSBwYXJlbnQpIHtcblx0XHRcdFx0XHRcdGEgPSBhLmNvbmNhdCh0bFtwXS50d2VlbnMpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjdXJQYXJlbnQgPSBjdXJQYXJlbnQucGFyZW50Tm9kZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bCA9IGEubGVuZ3RoO1xuXHRcdFx0Zm9yIChpID0gMDsgaSA8IGw7IGkrKykge1xuXHRcdFx0XHRpZiAoY29tcGxldGUpIHtcblx0XHRcdFx0XHRhW2ldLnRvdGFsVGltZShhW2ldLnRvdGFsRHVyYXRpb24oKSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YVtpXS5fZW5hYmxlZChmYWxzZSwgZmFsc2UpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHR2YXIgX2NoYW5nZVBhdXNlID0gZnVuY3Rpb24ocGF1c2UsIHR3ZWVucywgZGVsYXllZENhbGxzLCB0aW1lbGluZXMpIHtcblx0XHRcdHR3ZWVucyA9ICh0d2VlbnMgIT09IGZhbHNlKTtcblx0XHRcdGRlbGF5ZWRDYWxscyA9IChkZWxheWVkQ2FsbHMgIT09IGZhbHNlKTtcblx0XHRcdHRpbWVsaW5lcyA9ICh0aW1lbGluZXMgIT09IGZhbHNlKTtcblx0XHRcdHZhciBhID0gZ2V0QWxsVHdlZW5zKHRpbWVsaW5lcyksXG5cdFx0XHRcdGFsbFRydWUgPSAodHdlZW5zICYmIGRlbGF5ZWRDYWxscyAmJiB0aW1lbGluZXMpLFxuXHRcdFx0XHRpID0gYS5sZW5ndGgsXG5cdFx0XHRcdGlzREMsIHR3ZWVuO1xuXHRcdFx0d2hpbGUgKC0taSA+IC0xKSB7XG5cdFx0XHRcdHR3ZWVuID0gYVtpXTtcblx0XHRcdFx0aWYgKGFsbFRydWUgfHwgKHR3ZWVuIGluc3RhbmNlb2YgU2ltcGxlVGltZWxpbmUpIHx8ICgoaXNEQyA9ICh0d2Vlbi50YXJnZXQgPT09IHR3ZWVuLnZhcnMub25Db21wbGV0ZSkpICYmIGRlbGF5ZWRDYWxscykgfHwgKHR3ZWVucyAmJiAhaXNEQykpIHtcblx0XHRcdFx0XHR0d2Vlbi5wYXVzZWQocGF1c2UpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRcblx0XHRUd2Vlbk1heC5wYXVzZUFsbCA9IGZ1bmN0aW9uKHR3ZWVucywgZGVsYXllZENhbGxzLCB0aW1lbGluZXMpIHtcblx0XHRcdF9jaGFuZ2VQYXVzZSh0cnVlLCB0d2VlbnMsIGRlbGF5ZWRDYWxscywgdGltZWxpbmVzKTtcblx0XHR9O1xuXHRcdFxuXHRcdFR3ZWVuTWF4LnJlc3VtZUFsbCA9IGZ1bmN0aW9uKHR3ZWVucywgZGVsYXllZENhbGxzLCB0aW1lbGluZXMpIHtcblx0XHRcdF9jaGFuZ2VQYXVzZShmYWxzZSwgdHdlZW5zLCBkZWxheWVkQ2FsbHMsIHRpbWVsaW5lcyk7XG5cdFx0fTtcblxuXHRcdFR3ZWVuTWF4Lmdsb2JhbFRpbWVTY2FsZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHR2YXIgdGwgPSBBbmltYXRpb24uX3Jvb3RUaW1lbGluZSxcblx0XHRcdFx0dCA9IFR3ZWVuTGl0ZS50aWNrZXIudGltZTtcblx0XHRcdGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm4gdGwuX3RpbWVTY2FsZTtcblx0XHRcdH1cblx0XHRcdHZhbHVlID0gdmFsdWUgfHwgX3RpbnlOdW07IC8vY2FuJ3QgYWxsb3cgemVybyBiZWNhdXNlIGl0J2xsIHRocm93IHRoZSBtYXRoIG9mZlxuXHRcdFx0dGwuX3N0YXJ0VGltZSA9IHQgLSAoKHQgLSB0bC5fc3RhcnRUaW1lKSAqIHRsLl90aW1lU2NhbGUgLyB2YWx1ZSk7XG5cdFx0XHR0bCA9IEFuaW1hdGlvbi5fcm9vdEZyYW1lc1RpbWVsaW5lO1xuXHRcdFx0dCA9IFR3ZWVuTGl0ZS50aWNrZXIuZnJhbWU7XG5cdFx0XHR0bC5fc3RhcnRUaW1lID0gdCAtICgodCAtIHRsLl9zdGFydFRpbWUpICogdGwuX3RpbWVTY2FsZSAvIHZhbHVlKTtcblx0XHRcdHRsLl90aW1lU2NhbGUgPSBBbmltYXRpb24uX3Jvb3RUaW1lbGluZS5fdGltZVNjYWxlID0gdmFsdWU7XG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fTtcblx0XHRcblx0XG4vLy0tLS0gR0VUVEVSUyAvIFNFVFRFUlMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdFxuXHRcdHAucHJvZ3Jlc3MgPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdFx0cmV0dXJuICghYXJndW1lbnRzLmxlbmd0aCkgPyB0aGlzLl90aW1lIC8gdGhpcy5kdXJhdGlvbigpIDogdGhpcy50b3RhbFRpbWUoIHRoaXMuZHVyYXRpb24oKSAqICgodGhpcy5feW95byAmJiAodGhpcy5fY3ljbGUgJiAxKSAhPT0gMCkgPyAxIC0gdmFsdWUgOiB2YWx1ZSkgKyAodGhpcy5fY3ljbGUgKiAodGhpcy5fZHVyYXRpb24gKyB0aGlzLl9yZXBlYXREZWxheSkpLCBmYWxzZSk7XG5cdFx0fTtcblx0XHRcblx0XHRwLnRvdGFsUHJvZ3Jlc3MgPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdFx0cmV0dXJuICghYXJndW1lbnRzLmxlbmd0aCkgPyB0aGlzLl90b3RhbFRpbWUgLyB0aGlzLnRvdGFsRHVyYXRpb24oKSA6IHRoaXMudG90YWxUaW1lKCB0aGlzLnRvdGFsRHVyYXRpb24oKSAqIHZhbHVlLCBmYWxzZSk7XG5cdFx0fTtcblx0XHRcblx0XHRwLnRpbWUgPSBmdW5jdGlvbih2YWx1ZSwgc3VwcHJlc3NFdmVudHMpIHtcblx0XHRcdGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fdGltZTtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLl9kaXJ0eSkge1xuXHRcdFx0XHR0aGlzLnRvdGFsRHVyYXRpb24oKTtcblx0XHRcdH1cblx0XHRcdGlmICh2YWx1ZSA+IHRoaXMuX2R1cmF0aW9uKSB7XG5cdFx0XHRcdHZhbHVlID0gdGhpcy5fZHVyYXRpb247XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5feW95byAmJiAodGhpcy5fY3ljbGUgJiAxKSAhPT0gMCkge1xuXHRcdFx0XHR2YWx1ZSA9ICh0aGlzLl9kdXJhdGlvbiAtIHZhbHVlKSArICh0aGlzLl9jeWNsZSAqICh0aGlzLl9kdXJhdGlvbiArIHRoaXMuX3JlcGVhdERlbGF5KSk7XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMuX3JlcGVhdCAhPT0gMCkge1xuXHRcdFx0XHR2YWx1ZSArPSB0aGlzLl9jeWNsZSAqICh0aGlzLl9kdXJhdGlvbiArIHRoaXMuX3JlcGVhdERlbGF5KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzLnRvdGFsVGltZSh2YWx1ZSwgc3VwcHJlc3NFdmVudHMpO1xuXHRcdH07XG5cblx0XHRwLmR1cmF0aW9uID0gZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fZHVyYXRpb247IC8vZG9uJ3Qgc2V0IF9kaXJ0eSA9IGZhbHNlIGJlY2F1c2UgdGhlcmUgY291bGQgYmUgcmVwZWF0cyB0aGF0IGhhdmVuJ3QgYmVlbiBmYWN0b3JlZCBpbnRvIHRoZSBfdG90YWxEdXJhdGlvbiB5ZXQuIE90aGVyd2lzZSwgaWYgeW91IGNyZWF0ZSBhIHJlcGVhdGVkIFR3ZWVuTWF4IGFuZCB0aGVuIGltbWVkaWF0ZWx5IGNoZWNrIGl0cyBkdXJhdGlvbigpLCBpdCB3b3VsZCBjYWNoZSB0aGUgdmFsdWUgYW5kIHRoZSB0b3RhbER1cmF0aW9uIHdvdWxkIG5vdCBiZSBjb3JyZWN0LCB0aHVzIHJlcGVhdHMgd291bGRuJ3QgdGFrZSBlZmZlY3QuXG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gQW5pbWF0aW9uLnByb3RvdHlwZS5kdXJhdGlvbi5jYWxsKHRoaXMsIHZhbHVlKTtcblx0XHR9O1xuXG5cdFx0cC50b3RhbER1cmF0aW9uID0gZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdFx0XHRpZiAodGhpcy5fZGlydHkpIHtcblx0XHRcdFx0XHQvL2luc3RlYWQgb2YgSW5maW5pdHksIHdlIHVzZSA5OTk5OTk5OTk5OTkgc28gdGhhdCB3ZSBjYW4gYWNjb21tb2RhdGUgcmV2ZXJzZXNcblx0XHRcdFx0XHR0aGlzLl90b3RhbER1cmF0aW9uID0gKHRoaXMuX3JlcGVhdCA9PT0gLTEpID8gOTk5OTk5OTk5OTk5IDogdGhpcy5fZHVyYXRpb24gKiAodGhpcy5fcmVwZWF0ICsgMSkgKyAodGhpcy5fcmVwZWF0RGVsYXkgKiB0aGlzLl9yZXBlYXQpO1xuXHRcdFx0XHRcdHRoaXMuX2RpcnR5ID0gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHRoaXMuX3RvdGFsRHVyYXRpb247XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gKHRoaXMuX3JlcGVhdCA9PT0gLTEpID8gdGhpcyA6IHRoaXMuZHVyYXRpb24oICh2YWx1ZSAtICh0aGlzLl9yZXBlYXQgKiB0aGlzLl9yZXBlYXREZWxheSkpIC8gKHRoaXMuX3JlcGVhdCArIDEpICk7XG5cdFx0fTtcblx0XHRcblx0XHRwLnJlcGVhdCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX3JlcGVhdDtcblx0XHRcdH1cblx0XHRcdHRoaXMuX3JlcGVhdCA9IHZhbHVlO1xuXHRcdFx0cmV0dXJuIHRoaXMuX3VuY2FjaGUodHJ1ZSk7XG5cdFx0fTtcblx0XHRcblx0XHRwLnJlcGVhdERlbGF5ID0gZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fcmVwZWF0RGVsYXk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl9yZXBlYXREZWxheSA9IHZhbHVlO1xuXHRcdFx0cmV0dXJuIHRoaXMuX3VuY2FjaGUodHJ1ZSk7XG5cdFx0fTtcblx0XHRcblx0XHRwLnlveW8gPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLl95b3lvO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5feW95byA9IHZhbHVlO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fTtcblx0XHRcblx0XHRcblx0XHRyZXR1cm4gVHdlZW5NYXg7XG5cdFx0XG5cdH0sIHRydWUpO1xuXG5cblxuXG5cblxuXG5cbi8qXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBUaW1lbGluZUxpdGVcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXHRfZ3NTY29wZS5fZ3NEZWZpbmUoXCJUaW1lbGluZUxpdGVcIiwgW1wiY29yZS5BbmltYXRpb25cIixcImNvcmUuU2ltcGxlVGltZWxpbmVcIixcIlR3ZWVuTGl0ZVwiXSwgZnVuY3Rpb24oQW5pbWF0aW9uLCBTaW1wbGVUaW1lbGluZSwgVHdlZW5MaXRlKSB7XG5cblx0XHR2YXIgVGltZWxpbmVMaXRlID0gZnVuY3Rpb24odmFycykge1xuXHRcdFx0XHRTaW1wbGVUaW1lbGluZS5jYWxsKHRoaXMsIHZhcnMpO1xuXHRcdFx0XHR0aGlzLl9sYWJlbHMgPSB7fTtcblx0XHRcdFx0dGhpcy5hdXRvUmVtb3ZlQ2hpbGRyZW4gPSAodGhpcy52YXJzLmF1dG9SZW1vdmVDaGlsZHJlbiA9PT0gdHJ1ZSk7XG5cdFx0XHRcdHRoaXMuc21vb3RoQ2hpbGRUaW1pbmcgPSAodGhpcy52YXJzLnNtb290aENoaWxkVGltaW5nID09PSB0cnVlKTtcblx0XHRcdFx0dGhpcy5fc29ydENoaWxkcmVuID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy5fb25VcGRhdGUgPSB0aGlzLnZhcnMub25VcGRhdGU7XG5cdFx0XHRcdHZhciB2ID0gdGhpcy52YXJzLFxuXHRcdFx0XHRcdHZhbCwgcDtcblx0XHRcdFx0Zm9yIChwIGluIHYpIHtcblx0XHRcdFx0XHR2YWwgPSB2W3BdO1xuXHRcdFx0XHRcdGlmIChfaXNBcnJheSh2YWwpKSBpZiAodmFsLmpvaW4oXCJcIikuaW5kZXhPZihcIntzZWxmfVwiKSAhPT0gLTEpIHtcblx0XHRcdFx0XHRcdHZbcF0gPSB0aGlzLl9zd2FwU2VsZkluUGFyYW1zKHZhbCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChfaXNBcnJheSh2LnR3ZWVucykpIHtcblx0XHRcdFx0XHR0aGlzLmFkZCh2LnR3ZWVucywgMCwgdi5hbGlnbiwgdi5zdGFnZ2VyKTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdF90aW55TnVtID0gMC4wMDAwMDAwMDAxLFxuXHRcdFx0VHdlZW5MaXRlSW50ZXJuYWxzID0gVHdlZW5MaXRlLl9pbnRlcm5hbHMsXG5cdFx0XHRfaW50ZXJuYWxzID0gVGltZWxpbmVMaXRlLl9pbnRlcm5hbHMgPSB7fSxcblx0XHRcdF9pc1NlbGVjdG9yID0gVHdlZW5MaXRlSW50ZXJuYWxzLmlzU2VsZWN0b3IsXG5cdFx0XHRfaXNBcnJheSA9IFR3ZWVuTGl0ZUludGVybmFscy5pc0FycmF5LFxuXHRcdFx0X2xhenlUd2VlbnMgPSBUd2VlbkxpdGVJbnRlcm5hbHMubGF6eVR3ZWVucyxcblx0XHRcdF9sYXp5UmVuZGVyID0gVHdlZW5MaXRlSW50ZXJuYWxzLmxhenlSZW5kZXIsXG5cdFx0XHRfYmxhbmtBcnJheSA9IFtdLFxuXHRcdFx0X2dsb2JhbHMgPSBfZ3NTY29wZS5fZ3NEZWZpbmUuZ2xvYmFscyxcblx0XHRcdF9jb3B5ID0gZnVuY3Rpb24odmFycykge1xuXHRcdFx0XHR2YXIgY29weSA9IHt9LCBwO1xuXHRcdFx0XHRmb3IgKHAgaW4gdmFycykge1xuXHRcdFx0XHRcdGNvcHlbcF0gPSB2YXJzW3BdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBjb3B5O1xuXHRcdFx0fSxcblx0XHRcdF9wYXVzZUNhbGxiYWNrID0gX2ludGVybmFscy5wYXVzZUNhbGxiYWNrID0gZnVuY3Rpb24odHdlZW4sIGNhbGxiYWNrLCBwYXJhbXMsIHNjb3BlKSB7XG5cdFx0XHRcdHZhciB0bCA9IHR3ZWVuLl90aW1lbGluZSxcblx0XHRcdFx0XHR0aW1lID0gdGwuX3RvdGFsVGltZSxcblx0XHRcdFx0XHRzdGFydFRpbWUgPSB0d2Vlbi5fc3RhcnRUaW1lLFxuXHRcdFx0XHRcdHJldmVyc2VkID0gKHR3ZWVuLl9yYXdQcmV2VGltZSA8IDAgfHwgKHR3ZWVuLl9yYXdQcmV2VGltZSA9PT0gMCAmJiB0bC5fcmV2ZXJzZWQpKSwvL2Rvbid0IHVzZSB0d2Vlbi5yYXRpbyBiZWNhdXNlIGlmIHRoZSBwbGF5aGVhZCBsYW5kcyBleGFjdGx5IG9uIHRvcCBvZiB0aGUgYWRkUGF1c2UoKSwgcmF0aW8gd2lsbCBiZSAxIGV2ZW4gaWYgdGhlIG1hc3RlciB0aW1lbGluZSB3YXMgcmV2ZXJzZWQgKHdoaWNoIGlzIGNvcnJlY3QpLiBUaGUga2V5IGhlcmUgaXMgdG8gc2Vuc2UgdGhlIGRpcmVjdGlvbiBvZiB0aGUgcGxheWhlYWQuXG5cdFx0XHRcdFx0bmV4dCA9IHJldmVyc2VkID8gMCA6IF90aW55TnVtLFxuXHRcdFx0XHRcdHByZXYgPSByZXZlcnNlZCA/IF90aW55TnVtIDogMCxcblx0XHRcdFx0XHRzaWJsaW5nO1xuXHRcdFx0XHRpZiAoY2FsbGJhY2sgfHwgIXRoaXMuX2ZvcmNpbmdQbGF5aGVhZCkgeyAvL2lmIHRoZSB1c2VyIGNhbGxzIGEgbWV0aG9kIHRoYXQgbW92ZXMgdGhlIHBsYXloZWFkIChsaWtlIHByb2dyZXNzKCkgb3IgdGltZSgpKSwgaXQgc2hvdWxkIGhvbm9yIHRoYXQgYW5kIHNraXAgYW55IHBhdXNlcyAoYWx0aG91Z2ggaWYgdGhlcmUncyBhIGNhbGxiYWNrIHBvc2l0aW9uZWQgYXQgdGhhdCBwYXVzZSwgaXQgbXVzdCBqdW1wIHRoZXJlIGFuZCBtYWtlIHRoZSBjYWxsIHRvIGVuc3VyZSB0aGUgdGltZSBpcyBFWEFDVExZIHdoYXQgaXQgaXMgc3VwcG9zZWQgdG8gYmUsIGFuZCB0aGVuIHByb2NlZWQgdG8gd2hlcmUgdGhlIHBsYXloZWFkIGlzIGJlaW5nIGZvcmNlZCkuIE90aGVyd2lzZSwgaW1hZ2luZSBwbGFjaW5nIGEgcGF1c2UgaW4gdGhlIG1pZGRsZSBvZiBhIHRpbWVsaW5lIGFuZCB0aGVuIGRvaW5nIHRpbWVsaW5lLnByb2dyZXNzKDAuOSkgLSBpdCB3b3VsZCBnZXQgc3R1Y2sgd2hlcmUgdGhlIHBhdXNlIGlzLlxuXHRcdFx0XHRcdHRsLnBhdXNlKHN0YXJ0VGltZSk7XG5cdFx0XHRcdFx0Ly9ub3cgZmluZCBzaWJsaW5nIHR3ZWVucyB0aGF0IGFyZSBFWEFDVExZIGF0IHRoZSBzYW1lIHNwb3Qgb24gdGhlIHRpbWVsaW5lIGFuZCBhZGp1c3QgdGhlIF9yYXdQcmV2VGltZSBzbyB0aGF0IHRoZXkgZmlyZSAob3IgZG9uJ3QgZmlyZSkgY29ycmVjdGx5IG9uIHRoZSBuZXh0IHJlbmRlci4gVGhpcyBpcyBwcmltYXJpbHkgdG8gYWNjb21tb2RhdGUgemVyby1kdXJhdGlvbiB0d2VlbnMvY2FsbGJhY2tzIHRoYXQgYXJlIHBvc2l0aW9uZWQgcmlnaHQgb24gdG9wIG9mIGEgcGF1c2UuIEZvciBleGFtcGxlLCB0bC50byguLi4pLmNhbGwoLi4uKS5hZGRQYXVzZSguLi4pLmNhbGwoLi4uKSAtIG5vdGljZSB0aGF0IHRoZXJlJ3MgYSBjYWxsKCkgb24gZWFjaCBzaWRlIG9mIHRoZSBwYXVzZSwgc28gd2hlbiBpdCdzIHJ1bm5pbmcgZm9yd2FyZCBpdCBzaG91bGQgY2FsbCB0aGUgZmlyc3Qgb25lIGFuZCB0aGVuIHBhdXNlLCBhbmQgdGhlbiB3aGVuIHJlc3VtZWQsIGNhbGwgdGhlIG90aGVyLiBaZXJvLWR1cmF0aW9uIHR3ZWVucyB1c2UgX3Jhd1ByZXZUaW1lIHRvIHNlbnNlIG1vbWVudHVtIGZpZ3VyZSBvdXQgaWYgZXZlbnRzIHdlcmUgc3VwcHJlc3NlZCB3aGVuIGFycml2aW5nIGRpcmVjdGx5IG9uIHRvcCBvZiB0aGF0IHRpbWUuXG5cdFx0XHRcdFx0c2libGluZyA9IHR3ZWVuLl9wcmV2O1xuXHRcdFx0XHRcdHdoaWxlIChzaWJsaW5nICYmIHNpYmxpbmcuX3N0YXJ0VGltZSA9PT0gc3RhcnRUaW1lKSB7XG5cdFx0XHRcdFx0XHRzaWJsaW5nLl9yYXdQcmV2VGltZSA9IHByZXY7XG5cdFx0XHRcdFx0XHRzaWJsaW5nID0gc2libGluZy5fcHJldjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0c2libGluZyA9IHR3ZWVuLl9uZXh0O1xuXHRcdFx0XHRcdHdoaWxlIChzaWJsaW5nICYmIHNpYmxpbmcuX3N0YXJ0VGltZSA9PT0gc3RhcnRUaW1lKSB7XG5cdFx0XHRcdFx0XHRzaWJsaW5nLl9yYXdQcmV2VGltZSA9IG5leHQ7XG5cdFx0XHRcdFx0XHRzaWJsaW5nID0gc2libGluZy5fbmV4dDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGNhbGxiYWNrKSB7XG5cdFx0XHRcdFx0XHRjYWxsYmFjay5hcHBseShzY29wZSB8fCB0bCwgcGFyYW1zIHx8IF9ibGFua0FycmF5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHRoaXMuX2ZvcmNpbmdQbGF5aGVhZCB8fCAhdGwuX3BhdXNlZCkgeyAvL3RoZSBjYWxsYmFjayBjb3VsZCBoYXZlIGNhbGxlZCByZXN1bWUoKS5cblx0XHRcdFx0XHRcdHRsLnNlZWsodGltZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0X3NsaWNlID0gZnVuY3Rpb24oYSkgeyAvL2Rvbid0IHVzZSBbXS5zbGljZSBiZWNhdXNlIHRoYXQgZG9lc24ndCB3b3JrIGluIElFOCB3aXRoIGEgTm9kZUxpc3QgdGhhdCdzIHJldHVybmVkIGJ5IHF1ZXJ5U2VsZWN0b3JBbGwoKVxuXHRcdFx0XHR2YXIgYiA9IFtdLFxuXHRcdFx0XHRcdGwgPSBhLmxlbmd0aCxcblx0XHRcdFx0XHRpO1xuXHRcdFx0XHRmb3IgKGkgPSAwOyBpICE9PSBsOyBiLnB1c2goYVtpKytdKSk7XG5cdFx0XHRcdHJldHVybiBiO1xuXHRcdFx0fSxcblx0XHRcdHAgPSBUaW1lbGluZUxpdGUucHJvdG90eXBlID0gbmV3IFNpbXBsZVRpbWVsaW5lKCk7XG5cblx0XHRUaW1lbGluZUxpdGUudmVyc2lvbiA9IFwiMS4xNi4xXCI7XG5cdFx0cC5jb25zdHJ1Y3RvciA9IFRpbWVsaW5lTGl0ZTtcblx0XHRwLmtpbGwoKS5fZ2MgPSBwLl9mb3JjaW5nUGxheWhlYWQgPSBmYWxzZTtcblxuXHRcdC8qIG1pZ2h0IHVzZSBsYXRlci4uLlxuXHRcdC8vdHJhbnNsYXRlcyBhIGxvY2FsIHRpbWUgaW5zaWRlIGFuIGFuaW1hdGlvbiB0byB0aGUgY29ycmVzcG9uZGluZyB0aW1lIG9uIHRoZSByb290L2dsb2JhbCB0aW1lbGluZSwgZmFjdG9yaW5nIGluIGFsbCBuZXN0aW5nIGFuZCB0aW1lU2NhbGVzLlxuXHRcdGZ1bmN0aW9uIGxvY2FsVG9HbG9iYWwodGltZSwgYW5pbWF0aW9uKSB7XG5cdFx0XHR3aGlsZSAoYW5pbWF0aW9uKSB7XG5cdFx0XHRcdHRpbWUgPSAodGltZSAvIGFuaW1hdGlvbi5fdGltZVNjYWxlKSArIGFuaW1hdGlvbi5fc3RhcnRUaW1lO1xuXHRcdFx0XHRhbmltYXRpb24gPSBhbmltYXRpb24udGltZWxpbmU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGltZTtcblx0XHR9XG5cblx0XHQvL3RyYW5zbGF0ZXMgdGhlIHN1cHBsaWVkIHRpbWUgb24gdGhlIHJvb3QvZ2xvYmFsIHRpbWVsaW5lIGludG8gdGhlIGNvcnJlc3BvbmRpbmcgbG9jYWwgdGltZSBpbnNpZGUgYSBwYXJ0aWN1bGFyIGFuaW1hdGlvbiwgZmFjdG9yaW5nIGluIGFsbCBuZXN0aW5nIGFuZCB0aW1lU2NhbGVzXG5cdFx0ZnVuY3Rpb24gZ2xvYmFsVG9Mb2NhbCh0aW1lLCBhbmltYXRpb24pIHtcblx0XHRcdHZhciBzY2FsZSA9IDE7XG5cdFx0XHR0aW1lIC09IGxvY2FsVG9HbG9iYWwoMCwgYW5pbWF0aW9uKTtcblx0XHRcdHdoaWxlIChhbmltYXRpb24pIHtcblx0XHRcdFx0c2NhbGUgKj0gYW5pbWF0aW9uLl90aW1lU2NhbGU7XG5cdFx0XHRcdGFuaW1hdGlvbiA9IGFuaW1hdGlvbi50aW1lbGluZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aW1lICogc2NhbGU7XG5cdFx0fVxuXHRcdCovXG5cblx0XHRwLnRvID0gZnVuY3Rpb24odGFyZ2V0LCBkdXJhdGlvbiwgdmFycywgcG9zaXRpb24pIHtcblx0XHRcdHZhciBFbmdpbmUgPSAodmFycy5yZXBlYXQgJiYgX2dsb2JhbHMuVHdlZW5NYXgpIHx8IFR3ZWVuTGl0ZTtcblx0XHRcdHJldHVybiBkdXJhdGlvbiA/IHRoaXMuYWRkKCBuZXcgRW5naW5lKHRhcmdldCwgZHVyYXRpb24sIHZhcnMpLCBwb3NpdGlvbikgOiB0aGlzLnNldCh0YXJnZXQsIHZhcnMsIHBvc2l0aW9uKTtcblx0XHR9O1xuXG5cdFx0cC5mcm9tID0gZnVuY3Rpb24odGFyZ2V0LCBkdXJhdGlvbiwgdmFycywgcG9zaXRpb24pIHtcblx0XHRcdHJldHVybiB0aGlzLmFkZCggKCh2YXJzLnJlcGVhdCAmJiBfZ2xvYmFscy5Ud2Vlbk1heCkgfHwgVHdlZW5MaXRlKS5mcm9tKHRhcmdldCwgZHVyYXRpb24sIHZhcnMpLCBwb3NpdGlvbik7XG5cdFx0fTtcblxuXHRcdHAuZnJvbVRvID0gZnVuY3Rpb24odGFyZ2V0LCBkdXJhdGlvbiwgZnJvbVZhcnMsIHRvVmFycywgcG9zaXRpb24pIHtcblx0XHRcdHZhciBFbmdpbmUgPSAodG9WYXJzLnJlcGVhdCAmJiBfZ2xvYmFscy5Ud2Vlbk1heCkgfHwgVHdlZW5MaXRlO1xuXHRcdFx0cmV0dXJuIGR1cmF0aW9uID8gdGhpcy5hZGQoIEVuZ2luZS5mcm9tVG8odGFyZ2V0LCBkdXJhdGlvbiwgZnJvbVZhcnMsIHRvVmFycyksIHBvc2l0aW9uKSA6IHRoaXMuc2V0KHRhcmdldCwgdG9WYXJzLCBwb3NpdGlvbik7XG5cdFx0fTtcblxuXHRcdHAuc3RhZ2dlclRvID0gZnVuY3Rpb24odGFyZ2V0cywgZHVyYXRpb24sIHZhcnMsIHN0YWdnZXIsIHBvc2l0aW9uLCBvbkNvbXBsZXRlQWxsLCBvbkNvbXBsZXRlQWxsUGFyYW1zLCBvbkNvbXBsZXRlQWxsU2NvcGUpIHtcblx0XHRcdHZhciB0bCA9IG5ldyBUaW1lbGluZUxpdGUoe29uQ29tcGxldGU6b25Db21wbGV0ZUFsbCwgb25Db21wbGV0ZVBhcmFtczpvbkNvbXBsZXRlQWxsUGFyYW1zLCBvbkNvbXBsZXRlU2NvcGU6b25Db21wbGV0ZUFsbFNjb3BlLCBzbW9vdGhDaGlsZFRpbWluZzp0aGlzLnNtb290aENoaWxkVGltaW5nfSksXG5cdFx0XHRcdGk7XG5cdFx0XHRpZiAodHlwZW9mKHRhcmdldHMpID09PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRcdHRhcmdldHMgPSBUd2VlbkxpdGUuc2VsZWN0b3IodGFyZ2V0cykgfHwgdGFyZ2V0cztcblx0XHRcdH1cblx0XHRcdHRhcmdldHMgPSB0YXJnZXRzIHx8IFtdO1xuXHRcdFx0aWYgKF9pc1NlbGVjdG9yKHRhcmdldHMpKSB7IC8vc2Vuc2VzIGlmIHRoZSB0YXJnZXRzIG9iamVjdCBpcyBhIHNlbGVjdG9yLiBJZiBpdCBpcywgd2Ugc2hvdWxkIHRyYW5zbGF0ZSBpdCBpbnRvIGFuIGFycmF5LlxuXHRcdFx0XHR0YXJnZXRzID0gX3NsaWNlKHRhcmdldHMpO1xuXHRcdFx0fVxuXHRcdFx0c3RhZ2dlciA9IHN0YWdnZXIgfHwgMDtcblx0XHRcdGlmIChzdGFnZ2VyIDwgMCkge1xuXHRcdFx0XHR0YXJnZXRzID0gX3NsaWNlKHRhcmdldHMpO1xuXHRcdFx0XHR0YXJnZXRzLnJldmVyc2UoKTtcblx0XHRcdFx0c3RhZ2dlciAqPSAtMTtcblx0XHRcdH1cblx0XHRcdGZvciAoaSA9IDA7IGkgPCB0YXJnZXRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmICh2YXJzLnN0YXJ0QXQpIHtcblx0XHRcdFx0XHR2YXJzLnN0YXJ0QXQgPSBfY29weSh2YXJzLnN0YXJ0QXQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRsLnRvKHRhcmdldHNbaV0sIGR1cmF0aW9uLCBfY29weSh2YXJzKSwgaSAqIHN0YWdnZXIpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXMuYWRkKHRsLCBwb3NpdGlvbik7XG5cdFx0fTtcblxuXHRcdHAuc3RhZ2dlckZyb20gPSBmdW5jdGlvbih0YXJnZXRzLCBkdXJhdGlvbiwgdmFycywgc3RhZ2dlciwgcG9zaXRpb24sIG9uQ29tcGxldGVBbGwsIG9uQ29tcGxldGVBbGxQYXJhbXMsIG9uQ29tcGxldGVBbGxTY29wZSkge1xuXHRcdFx0dmFycy5pbW1lZGlhdGVSZW5kZXIgPSAodmFycy5pbW1lZGlhdGVSZW5kZXIgIT0gZmFsc2UpO1xuXHRcdFx0dmFycy5ydW5CYWNrd2FyZHMgPSB0cnVlO1xuXHRcdFx0cmV0dXJuIHRoaXMuc3RhZ2dlclRvKHRhcmdldHMsIGR1cmF0aW9uLCB2YXJzLCBzdGFnZ2VyLCBwb3NpdGlvbiwgb25Db21wbGV0ZUFsbCwgb25Db21wbGV0ZUFsbFBhcmFtcywgb25Db21wbGV0ZUFsbFNjb3BlKTtcblx0XHR9O1xuXG5cdFx0cC5zdGFnZ2VyRnJvbVRvID0gZnVuY3Rpb24odGFyZ2V0cywgZHVyYXRpb24sIGZyb21WYXJzLCB0b1ZhcnMsIHN0YWdnZXIsIHBvc2l0aW9uLCBvbkNvbXBsZXRlQWxsLCBvbkNvbXBsZXRlQWxsUGFyYW1zLCBvbkNvbXBsZXRlQWxsU2NvcGUpIHtcblx0XHRcdHRvVmFycy5zdGFydEF0ID0gZnJvbVZhcnM7XG5cdFx0XHR0b1ZhcnMuaW1tZWRpYXRlUmVuZGVyID0gKHRvVmFycy5pbW1lZGlhdGVSZW5kZXIgIT0gZmFsc2UgJiYgZnJvbVZhcnMuaW1tZWRpYXRlUmVuZGVyICE9IGZhbHNlKTtcblx0XHRcdHJldHVybiB0aGlzLnN0YWdnZXJUbyh0YXJnZXRzLCBkdXJhdGlvbiwgdG9WYXJzLCBzdGFnZ2VyLCBwb3NpdGlvbiwgb25Db21wbGV0ZUFsbCwgb25Db21wbGV0ZUFsbFBhcmFtcywgb25Db21wbGV0ZUFsbFNjb3BlKTtcblx0XHR9O1xuXG5cdFx0cC5jYWxsID0gZnVuY3Rpb24oY2FsbGJhY2ssIHBhcmFtcywgc2NvcGUsIHBvc2l0aW9uKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5hZGQoIFR3ZWVuTGl0ZS5kZWxheWVkQ2FsbCgwLCBjYWxsYmFjaywgcGFyYW1zLCBzY29wZSksIHBvc2l0aW9uKTtcblx0XHR9O1xuXG5cdFx0cC5zZXQgPSBmdW5jdGlvbih0YXJnZXQsIHZhcnMsIHBvc2l0aW9uKSB7XG5cdFx0XHRwb3NpdGlvbiA9IHRoaXMuX3BhcnNlVGltZU9yTGFiZWwocG9zaXRpb24sIDAsIHRydWUpO1xuXHRcdFx0aWYgKHZhcnMuaW1tZWRpYXRlUmVuZGVyID09IG51bGwpIHtcblx0XHRcdFx0dmFycy5pbW1lZGlhdGVSZW5kZXIgPSAocG9zaXRpb24gPT09IHRoaXMuX3RpbWUgJiYgIXRoaXMuX3BhdXNlZCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcy5hZGQoIG5ldyBUd2VlbkxpdGUodGFyZ2V0LCAwLCB2YXJzKSwgcG9zaXRpb24pO1xuXHRcdH07XG5cblx0XHRUaW1lbGluZUxpdGUuZXhwb3J0Um9vdCA9IGZ1bmN0aW9uKHZhcnMsIGlnbm9yZURlbGF5ZWRDYWxscykge1xuXHRcdFx0dmFycyA9IHZhcnMgfHwge307XG5cdFx0XHRpZiAodmFycy5zbW9vdGhDaGlsZFRpbWluZyA9PSBudWxsKSB7XG5cdFx0XHRcdHZhcnMuc21vb3RoQ2hpbGRUaW1pbmcgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0dmFyIHRsID0gbmV3IFRpbWVsaW5lTGl0ZSh2YXJzKSxcblx0XHRcdFx0cm9vdCA9IHRsLl90aW1lbGluZSxcblx0XHRcdFx0dHdlZW4sIG5leHQ7XG5cdFx0XHRpZiAoaWdub3JlRGVsYXllZENhbGxzID09IG51bGwpIHtcblx0XHRcdFx0aWdub3JlRGVsYXllZENhbGxzID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJvb3QuX3JlbW92ZSh0bCwgdHJ1ZSk7XG5cdFx0XHR0bC5fc3RhcnRUaW1lID0gMDtcblx0XHRcdHRsLl9yYXdQcmV2VGltZSA9IHRsLl90aW1lID0gdGwuX3RvdGFsVGltZSA9IHJvb3QuX3RpbWU7XG5cdFx0XHR0d2VlbiA9IHJvb3QuX2ZpcnN0O1xuXHRcdFx0d2hpbGUgKHR3ZWVuKSB7XG5cdFx0XHRcdG5leHQgPSB0d2Vlbi5fbmV4dDtcblx0XHRcdFx0aWYgKCFpZ25vcmVEZWxheWVkQ2FsbHMgfHwgISh0d2VlbiBpbnN0YW5jZW9mIFR3ZWVuTGl0ZSAmJiB0d2Vlbi50YXJnZXQgPT09IHR3ZWVuLnZhcnMub25Db21wbGV0ZSkpIHtcblx0XHRcdFx0XHR0bC5hZGQodHdlZW4sIHR3ZWVuLl9zdGFydFRpbWUgLSB0d2Vlbi5fZGVsYXkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHR3ZWVuID0gbmV4dDtcblx0XHRcdH1cblx0XHRcdHJvb3QuYWRkKHRsLCAwKTtcblx0XHRcdHJldHVybiB0bDtcblx0XHR9O1xuXG5cdFx0cC5hZGQgPSBmdW5jdGlvbih2YWx1ZSwgcG9zaXRpb24sIGFsaWduLCBzdGFnZ2VyKSB7XG5cdFx0XHR2YXIgY3VyVGltZSwgbCwgaSwgY2hpbGQsIHRsLCBiZWZvcmVSYXdUaW1lO1xuXHRcdFx0aWYgKHR5cGVvZihwb3NpdGlvbikgIT09IFwibnVtYmVyXCIpIHtcblx0XHRcdFx0cG9zaXRpb24gPSB0aGlzLl9wYXJzZVRpbWVPckxhYmVsKHBvc2l0aW9uLCAwLCB0cnVlLCB2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoISh2YWx1ZSBpbnN0YW5jZW9mIEFuaW1hdGlvbikpIHtcblx0XHRcdFx0aWYgKCh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSB8fCAodmFsdWUgJiYgdmFsdWUucHVzaCAmJiBfaXNBcnJheSh2YWx1ZSkpKSB7XG5cdFx0XHRcdFx0YWxpZ24gPSBhbGlnbiB8fCBcIm5vcm1hbFwiO1xuXHRcdFx0XHRcdHN0YWdnZXIgPSBzdGFnZ2VyIHx8IDA7XG5cdFx0XHRcdFx0Y3VyVGltZSA9IHBvc2l0aW9uO1xuXHRcdFx0XHRcdGwgPSB2YWx1ZS5sZW5ndGg7XG5cdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGw7IGkrKykge1xuXHRcdFx0XHRcdFx0aWYgKF9pc0FycmF5KGNoaWxkID0gdmFsdWVbaV0pKSB7XG5cdFx0XHRcdFx0XHRcdGNoaWxkID0gbmV3IFRpbWVsaW5lTGl0ZSh7dHdlZW5zOmNoaWxkfSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR0aGlzLmFkZChjaGlsZCwgY3VyVGltZSk7XG5cdFx0XHRcdFx0XHRpZiAodHlwZW9mKGNoaWxkKSAhPT0gXCJzdHJpbmdcIiAmJiB0eXBlb2YoY2hpbGQpICE9PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHRcdFx0aWYgKGFsaWduID09PSBcInNlcXVlbmNlXCIpIHtcblx0XHRcdFx0XHRcdFx0XHRjdXJUaW1lID0gY2hpbGQuX3N0YXJ0VGltZSArIChjaGlsZC50b3RhbER1cmF0aW9uKCkgLyBjaGlsZC5fdGltZVNjYWxlKTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChhbGlnbiA9PT0gXCJzdGFydFwiKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y2hpbGQuX3N0YXJ0VGltZSAtPSBjaGlsZC5kZWxheSgpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRjdXJUaW1lICs9IHN0YWdnZXI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiB0aGlzLl91bmNhY2hlKHRydWUpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHR5cGVvZih2YWx1ZSkgPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5hZGRMYWJlbCh2YWx1ZSwgcG9zaXRpb24pO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHR5cGVvZih2YWx1ZSkgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdHZhbHVlID0gVHdlZW5MaXRlLmRlbGF5ZWRDYWxsKDAsIHZhbHVlKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aHJvdyhcIkNhbm5vdCBhZGQgXCIgKyB2YWx1ZSArIFwiIGludG8gdGhlIHRpbWVsaW5lOyBpdCBpcyBub3QgYSB0d2VlbiwgdGltZWxpbmUsIGZ1bmN0aW9uLCBvciBzdHJpbmcuXCIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdFNpbXBsZVRpbWVsaW5lLnByb3RvdHlwZS5hZGQuY2FsbCh0aGlzLCB2YWx1ZSwgcG9zaXRpb24pO1xuXG5cdFx0XHQvL2lmIHRoZSB0aW1lbGluZSBoYXMgYWxyZWFkeSBlbmRlZCBidXQgdGhlIGluc2VydGVkIHR3ZWVuL3RpbWVsaW5lIGV4dGVuZHMgdGhlIGR1cmF0aW9uLCB3ZSBzaG91bGQgZW5hYmxlIHRoaXMgdGltZWxpbmUgYWdhaW4gc28gdGhhdCBpdCByZW5kZXJzIHByb3Blcmx5LiBXZSBzaG91bGQgYWxzbyBhbGlnbiB0aGUgcGxheWhlYWQgd2l0aCB0aGUgcGFyZW50IHRpbWVsaW5lJ3Mgd2hlbiBhcHByb3ByaWF0ZS5cblx0XHRcdGlmICh0aGlzLl9nYyB8fCB0aGlzLl90aW1lID09PSB0aGlzLl9kdXJhdGlvbikgaWYgKCF0aGlzLl9wYXVzZWQpIGlmICh0aGlzLl9kdXJhdGlvbiA8IHRoaXMuZHVyYXRpb24oKSkge1xuXHRcdFx0XHQvL2luIGNhc2UgYW55IG9mIHRoZSBhbmNlc3RvcnMgaGFkIGNvbXBsZXRlZCBidXQgc2hvdWxkIG5vdyBiZSBlbmFibGVkLi4uXG5cdFx0XHRcdHRsID0gdGhpcztcblx0XHRcdFx0YmVmb3JlUmF3VGltZSA9ICh0bC5yYXdUaW1lKCkgPiB2YWx1ZS5fc3RhcnRUaW1lKTsgLy9pZiB0aGUgdHdlZW4gaXMgcGxhY2VkIG9uIHRoZSB0aW1lbGluZSBzbyB0aGF0IGl0IHN0YXJ0cyBCRUZPUkUgdGhlIGN1cnJlbnQgcmF3VGltZSwgd2Ugc2hvdWxkIGFsaWduIHRoZSBwbGF5aGVhZCAobW92ZSB0aGUgdGltZWxpbmUpLiBUaGlzIGlzIGJlY2F1c2Ugc29tZXRpbWVzIHVzZXJzIHdpbGwgY3JlYXRlIGEgdGltZWxpbmUsIGxldCBpdCBmaW5pc2gsIGFuZCBtdWNoIGxhdGVyIGFwcGVuZCBhIHR3ZWVuIGFuZCBleHBlY3QgaXQgdG8gcnVuIGluc3RlYWQgb2YganVtcGluZyB0byBpdHMgZW5kIHN0YXRlLiBXaGlsZSB0ZWNobmljYWxseSBvbmUgY291bGQgYXJndWUgdGhhdCBpdCBzaG91bGQganVtcCB0byBpdHMgZW5kIHN0YXRlLCB0aGF0J3Mgbm90IHdoYXQgdXNlcnMgaW50dWl0aXZlbHkgZXhwZWN0LlxuXHRcdFx0XHR3aGlsZSAodGwuX3RpbWVsaW5lKSB7XG5cdFx0XHRcdFx0aWYgKGJlZm9yZVJhd1RpbWUgJiYgdGwuX3RpbWVsaW5lLnNtb290aENoaWxkVGltaW5nKSB7XG5cdFx0XHRcdFx0XHR0bC50b3RhbFRpbWUodGwuX3RvdGFsVGltZSwgdHJ1ZSk7IC8vbW92ZXMgdGhlIHRpbWVsaW5lIChzaGlmdHMgaXRzIHN0YXJ0VGltZSkgaWYgbmVjZXNzYXJ5LCBhbmQgYWxzbyBlbmFibGVzIGl0LlxuXHRcdFx0XHRcdH0gZWxzZSBpZiAodGwuX2djKSB7XG5cdFx0XHRcdFx0XHR0bC5fZW5hYmxlZCh0cnVlLCBmYWxzZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRsID0gdGwuX3RpbWVsaW5lO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH07XG5cblx0XHRwLnJlbW92ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHRpZiAodmFsdWUgaW5zdGFuY2VvZiBBbmltYXRpb24pIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX3JlbW92ZSh2YWx1ZSwgZmFsc2UpO1xuXHRcdFx0fSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5IHx8ICh2YWx1ZSAmJiB2YWx1ZS5wdXNoICYmIF9pc0FycmF5KHZhbHVlKSkpIHtcblx0XHRcdFx0dmFyIGkgPSB2YWx1ZS5sZW5ndGg7XG5cdFx0XHRcdHdoaWxlICgtLWkgPiAtMSkge1xuXHRcdFx0XHRcdHRoaXMucmVtb3ZlKHZhbHVlW2ldKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH0gZWxzZSBpZiAodHlwZW9mKHZhbHVlKSA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5yZW1vdmVMYWJlbCh2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcy5raWxsKG51bGwsIHZhbHVlKTtcblx0XHR9O1xuXG5cdFx0cC5fcmVtb3ZlID0gZnVuY3Rpb24odHdlZW4sIHNraXBEaXNhYmxlKSB7XG5cdFx0XHRTaW1wbGVUaW1lbGluZS5wcm90b3R5cGUuX3JlbW92ZS5jYWxsKHRoaXMsIHR3ZWVuLCBza2lwRGlzYWJsZSk7XG5cdFx0XHR2YXIgbGFzdCA9IHRoaXMuX2xhc3Q7XG5cdFx0XHRpZiAoIWxhc3QpIHtcblx0XHRcdFx0dGhpcy5fdGltZSA9IHRoaXMuX3RvdGFsVGltZSA9IHRoaXMuX2R1cmF0aW9uID0gdGhpcy5fdG90YWxEdXJhdGlvbiA9IDA7XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMuX3RpbWUgPiBsYXN0Ll9zdGFydFRpbWUgKyBsYXN0Ll90b3RhbER1cmF0aW9uIC8gbGFzdC5fdGltZVNjYWxlKSB7XG5cdFx0XHRcdHRoaXMuX3RpbWUgPSB0aGlzLmR1cmF0aW9uKCk7XG5cdFx0XHRcdHRoaXMuX3RvdGFsVGltZSA9IHRoaXMuX3RvdGFsRHVyYXRpb247XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9O1xuXG5cdFx0cC5hcHBlbmQgPSBmdW5jdGlvbih2YWx1ZSwgb2Zmc2V0T3JMYWJlbCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuYWRkKHZhbHVlLCB0aGlzLl9wYXJzZVRpbWVPckxhYmVsKG51bGwsIG9mZnNldE9yTGFiZWwsIHRydWUsIHZhbHVlKSk7XG5cdFx0fTtcblxuXHRcdHAuaW5zZXJ0ID0gcC5pbnNlcnRNdWx0aXBsZSA9IGZ1bmN0aW9uKHZhbHVlLCBwb3NpdGlvbiwgYWxpZ24sIHN0YWdnZXIpIHtcblx0XHRcdHJldHVybiB0aGlzLmFkZCh2YWx1ZSwgcG9zaXRpb24gfHwgMCwgYWxpZ24sIHN0YWdnZXIpO1xuXHRcdH07XG5cblx0XHRwLmFwcGVuZE11bHRpcGxlID0gZnVuY3Rpb24odHdlZW5zLCBvZmZzZXRPckxhYmVsLCBhbGlnbiwgc3RhZ2dlcikge1xuXHRcdFx0cmV0dXJuIHRoaXMuYWRkKHR3ZWVucywgdGhpcy5fcGFyc2VUaW1lT3JMYWJlbChudWxsLCBvZmZzZXRPckxhYmVsLCB0cnVlLCB0d2VlbnMpLCBhbGlnbiwgc3RhZ2dlcik7XG5cdFx0fTtcblxuXHRcdHAuYWRkTGFiZWwgPSBmdW5jdGlvbihsYWJlbCwgcG9zaXRpb24pIHtcblx0XHRcdHRoaXMuX2xhYmVsc1tsYWJlbF0gPSB0aGlzLl9wYXJzZVRpbWVPckxhYmVsKHBvc2l0aW9uKTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH07XG5cblx0XHRwLmFkZFBhdXNlID0gZnVuY3Rpb24ocG9zaXRpb24sIGNhbGxiYWNrLCBwYXJhbXMsIHNjb3BlKSB7XG5cdFx0XHR2YXIgdCA9IFR3ZWVuTGl0ZS5kZWxheWVkQ2FsbCgwLCBfcGF1c2VDYWxsYmFjaywgW1wie3NlbGZ9XCIsIGNhbGxiYWNrLCBwYXJhbXMsIHNjb3BlXSwgdGhpcyk7XG5cdFx0XHR0LmRhdGEgPSBcImlzUGF1c2VcIjsgLy8gd2UgdXNlIHRoaXMgZmxhZyBpbiBUd2VlbkxpdGUncyByZW5kZXIoKSBtZXRob2QgdG8gaWRlbnRpZnkgaXQgYXMgYSBzcGVjaWFsIGNhc2UgdGhhdCBzaG91bGRuJ3QgYmUgdHJpZ2dlcmVkIHdoZW4gdGhlIHZpcnR1YWwgcGxheWhlYWQgaXMgTEVBVklORyB0aGUgZXhhY3QgcG9zaXRpb24gd2hlcmUgdGhlIHBhdXNlIGlzLCBvdGhlcndpc2UgdGltZWxpbmUuYWRkUGF1c2UoMSkucGxheSgxKSB3b3VsZCBlbmQgdXAgcGF1c2VkIG9uIHRoZSB2ZXJ5IG5leHQgdGljay5cblx0XHRcdHJldHVybiB0aGlzLmFkZCh0LCBwb3NpdGlvbik7XG5cdFx0fTtcblxuXHRcdHAucmVtb3ZlTGFiZWwgPSBmdW5jdGlvbihsYWJlbCkge1xuXHRcdFx0ZGVsZXRlIHRoaXMuX2xhYmVsc1tsYWJlbF07XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9O1xuXG5cdFx0cC5nZXRMYWJlbFRpbWUgPSBmdW5jdGlvbihsYWJlbCkge1xuXHRcdFx0cmV0dXJuICh0aGlzLl9sYWJlbHNbbGFiZWxdICE9IG51bGwpID8gdGhpcy5fbGFiZWxzW2xhYmVsXSA6IC0xO1xuXHRcdH07XG5cblx0XHRwLl9wYXJzZVRpbWVPckxhYmVsID0gZnVuY3Rpb24odGltZU9yTGFiZWwsIG9mZnNldE9yTGFiZWwsIGFwcGVuZElmQWJzZW50LCBpZ25vcmUpIHtcblx0XHRcdHZhciBpO1xuXHRcdFx0Ly9pZiB3ZSdyZSBhYm91dCB0byBhZGQgYSB0d2Vlbi90aW1lbGluZSAob3IgYW4gYXJyYXkgb2YgdGhlbSkgdGhhdCdzIGFscmVhZHkgYSBjaGlsZCBvZiB0aGlzIHRpbWVsaW5lLCB3ZSBzaG91bGQgcmVtb3ZlIGl0IGZpcnN0IHNvIHRoYXQgaXQgZG9lc24ndCBjb250YW1pbmF0ZSB0aGUgZHVyYXRpb24oKS5cblx0XHRcdGlmIChpZ25vcmUgaW5zdGFuY2VvZiBBbmltYXRpb24gJiYgaWdub3JlLnRpbWVsaW5lID09PSB0aGlzKSB7XG5cdFx0XHRcdHRoaXMucmVtb3ZlKGlnbm9yZSk7XG5cdFx0XHR9IGVsc2UgaWYgKGlnbm9yZSAmJiAoKGlnbm9yZSBpbnN0YW5jZW9mIEFycmF5KSB8fCAoaWdub3JlLnB1c2ggJiYgX2lzQXJyYXkoaWdub3JlKSkpKSB7XG5cdFx0XHRcdGkgPSBpZ25vcmUubGVuZ3RoO1xuXHRcdFx0XHR3aGlsZSAoLS1pID4gLTEpIHtcblx0XHRcdFx0XHRpZiAoaWdub3JlW2ldIGluc3RhbmNlb2YgQW5pbWF0aW9uICYmIGlnbm9yZVtpXS50aW1lbGluZSA9PT0gdGhpcykge1xuXHRcdFx0XHRcdFx0dGhpcy5yZW1vdmUoaWdub3JlW2ldKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICh0eXBlb2Yob2Zmc2V0T3JMYWJlbCkgPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX3BhcnNlVGltZU9yTGFiZWwob2Zmc2V0T3JMYWJlbCwgKGFwcGVuZElmQWJzZW50ICYmIHR5cGVvZih0aW1lT3JMYWJlbCkgPT09IFwibnVtYmVyXCIgJiYgdGhpcy5fbGFiZWxzW29mZnNldE9yTGFiZWxdID09IG51bGwpID8gdGltZU9yTGFiZWwgLSB0aGlzLmR1cmF0aW9uKCkgOiAwLCBhcHBlbmRJZkFic2VudCk7XG5cdFx0XHR9XG5cdFx0XHRvZmZzZXRPckxhYmVsID0gb2Zmc2V0T3JMYWJlbCB8fCAwO1xuXHRcdFx0aWYgKHR5cGVvZih0aW1lT3JMYWJlbCkgPT09IFwic3RyaW5nXCIgJiYgKGlzTmFOKHRpbWVPckxhYmVsKSB8fCB0aGlzLl9sYWJlbHNbdGltZU9yTGFiZWxdICE9IG51bGwpKSB7IC8vaWYgdGhlIHN0cmluZyBpcyBhIG51bWJlciBsaWtlIFwiMVwiLCBjaGVjayB0byBzZWUgaWYgdGhlcmUncyBhIGxhYmVsIHdpdGggdGhhdCBuYW1lLCBvdGhlcndpc2UgaW50ZXJwcmV0IGl0IGFzIGEgbnVtYmVyIChhYnNvbHV0ZSB2YWx1ZSkuXG5cdFx0XHRcdGkgPSB0aW1lT3JMYWJlbC5pbmRleE9mKFwiPVwiKTtcblx0XHRcdFx0aWYgKGkgPT09IC0xKSB7XG5cdFx0XHRcdFx0aWYgKHRoaXMuX2xhYmVsc1t0aW1lT3JMYWJlbF0gPT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGFwcGVuZElmQWJzZW50ID8gKHRoaXMuX2xhYmVsc1t0aW1lT3JMYWJlbF0gPSB0aGlzLmR1cmF0aW9uKCkgKyBvZmZzZXRPckxhYmVsKSA6IG9mZnNldE9yTGFiZWw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiB0aGlzLl9sYWJlbHNbdGltZU9yTGFiZWxdICsgb2Zmc2V0T3JMYWJlbDtcblx0XHRcdFx0fVxuXHRcdFx0XHRvZmZzZXRPckxhYmVsID0gcGFyc2VJbnQodGltZU9yTGFiZWwuY2hhckF0KGktMSkgKyBcIjFcIiwgMTApICogTnVtYmVyKHRpbWVPckxhYmVsLnN1YnN0cihpKzEpKTtcblx0XHRcdFx0dGltZU9yTGFiZWwgPSAoaSA+IDEpID8gdGhpcy5fcGFyc2VUaW1lT3JMYWJlbCh0aW1lT3JMYWJlbC5zdWJzdHIoMCwgaS0xKSwgMCwgYXBwZW5kSWZBYnNlbnQpIDogdGhpcy5kdXJhdGlvbigpO1xuXHRcdFx0fSBlbHNlIGlmICh0aW1lT3JMYWJlbCA9PSBudWxsKSB7XG5cdFx0XHRcdHRpbWVPckxhYmVsID0gdGhpcy5kdXJhdGlvbigpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIE51bWJlcih0aW1lT3JMYWJlbCkgKyBvZmZzZXRPckxhYmVsO1xuXHRcdH07XG5cblx0XHRwLnNlZWsgPSBmdW5jdGlvbihwb3NpdGlvbiwgc3VwcHJlc3NFdmVudHMpIHtcblx0XHRcdHJldHVybiB0aGlzLnRvdGFsVGltZSgodHlwZW9mKHBvc2l0aW9uKSA9PT0gXCJudW1iZXJcIikgPyBwb3NpdGlvbiA6IHRoaXMuX3BhcnNlVGltZU9yTGFiZWwocG9zaXRpb24pLCAoc3VwcHJlc3NFdmVudHMgIT09IGZhbHNlKSk7XG5cdFx0fTtcblxuXHRcdHAuc3RvcCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMucGF1c2VkKHRydWUpO1xuXHRcdH07XG5cblx0XHRwLmdvdG9BbmRQbGF5ID0gZnVuY3Rpb24ocG9zaXRpb24sIHN1cHByZXNzRXZlbnRzKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5wbGF5KHBvc2l0aW9uLCBzdXBwcmVzc0V2ZW50cyk7XG5cdFx0fTtcblxuXHRcdHAuZ290b0FuZFN0b3AgPSBmdW5jdGlvbihwb3NpdGlvbiwgc3VwcHJlc3NFdmVudHMpIHtcblx0XHRcdHJldHVybiB0aGlzLnBhdXNlKHBvc2l0aW9uLCBzdXBwcmVzc0V2ZW50cyk7XG5cdFx0fTtcblxuXHRcdHAucmVuZGVyID0gZnVuY3Rpb24odGltZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKSB7XG5cdFx0XHRpZiAodGhpcy5fZ2MpIHtcblx0XHRcdFx0dGhpcy5fZW5hYmxlZCh0cnVlLCBmYWxzZSk7XG5cdFx0XHR9XG5cdFx0XHR2YXIgdG90YWxEdXIgPSAoIXRoaXMuX2RpcnR5KSA/IHRoaXMuX3RvdGFsRHVyYXRpb24gOiB0aGlzLnRvdGFsRHVyYXRpb24oKSxcblx0XHRcdFx0cHJldlRpbWUgPSB0aGlzLl90aW1lLFxuXHRcdFx0XHRwcmV2U3RhcnQgPSB0aGlzLl9zdGFydFRpbWUsXG5cdFx0XHRcdHByZXZUaW1lU2NhbGUgPSB0aGlzLl90aW1lU2NhbGUsXG5cdFx0XHRcdHByZXZQYXVzZWQgPSB0aGlzLl9wYXVzZWQsXG5cdFx0XHRcdHR3ZWVuLCBpc0NvbXBsZXRlLCBuZXh0LCBjYWxsYmFjaywgaW50ZXJuYWxGb3JjZTtcblx0XHRcdGlmICh0aW1lID49IHRvdGFsRHVyKSB7XG5cdFx0XHRcdHRoaXMuX3RvdGFsVGltZSA9IHRoaXMuX3RpbWUgPSB0b3RhbER1cjtcblx0XHRcdFx0aWYgKCF0aGlzLl9yZXZlcnNlZCkgaWYgKCF0aGlzLl9oYXNQYXVzZWRDaGlsZCgpKSB7XG5cdFx0XHRcdFx0aXNDb21wbGV0ZSA9IHRydWU7XG5cdFx0XHRcdFx0Y2FsbGJhY2sgPSBcIm9uQ29tcGxldGVcIjtcblx0XHRcdFx0XHRpbnRlcm5hbEZvcmNlID0gISF0aGlzLl90aW1lbGluZS5hdXRvUmVtb3ZlQ2hpbGRyZW47IC8vb3RoZXJ3aXNlLCBpZiB0aGUgYW5pbWF0aW9uIGlzIHVucGF1c2VkL2FjdGl2YXRlZCBhZnRlciBpdCdzIGFscmVhZHkgZmluaXNoZWQsIGl0IGRvZXNuJ3QgZ2V0IHJlbW92ZWQgZnJvbSB0aGUgcGFyZW50IHRpbWVsaW5lLlxuXHRcdFx0XHRcdGlmICh0aGlzLl9kdXJhdGlvbiA9PT0gMCkgaWYgKHRpbWUgPT09IDAgfHwgdGhpcy5fcmF3UHJldlRpbWUgPCAwIHx8IHRoaXMuX3Jhd1ByZXZUaW1lID09PSBfdGlueU51bSkgaWYgKHRoaXMuX3Jhd1ByZXZUaW1lICE9PSB0aW1lICYmIHRoaXMuX2ZpcnN0KSB7XG5cdFx0XHRcdFx0XHRpbnRlcm5hbEZvcmNlID0gdHJ1ZTtcblx0XHRcdFx0XHRcdGlmICh0aGlzLl9yYXdQcmV2VGltZSA+IF90aW55TnVtKSB7XG5cdFx0XHRcdFx0XHRcdGNhbGxiYWNrID0gXCJvblJldmVyc2VDb21wbGV0ZVwiO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLl9yYXdQcmV2VGltZSA9ICh0aGlzLl9kdXJhdGlvbiB8fCAhc3VwcHJlc3NFdmVudHMgfHwgdGltZSB8fCB0aGlzLl9yYXdQcmV2VGltZSA9PT0gdGltZSkgPyB0aW1lIDogX3RpbnlOdW07IC8vd2hlbiB0aGUgcGxheWhlYWQgYXJyaXZlcyBhdCBFWEFDVExZIHRpbWUgMCAocmlnaHQgb24gdG9wKSBvZiBhIHplcm8tZHVyYXRpb24gdGltZWxpbmUgb3IgdHdlZW4sIHdlIG5lZWQgdG8gZGlzY2VybiBpZiBldmVudHMgYXJlIHN1cHByZXNzZWQgc28gdGhhdCB3aGVuIHRoZSBwbGF5aGVhZCBtb3ZlcyBhZ2FpbiAobmV4dCB0aW1lKSwgaXQnbGwgdHJpZ2dlciB0aGUgY2FsbGJhY2suIElmIGV2ZW50cyBhcmUgTk9UIHN1cHByZXNzZWQsIG9idmlvdXNseSB0aGUgY2FsbGJhY2sgd291bGQgYmUgdHJpZ2dlcmVkIGluIHRoaXMgcmVuZGVyLiBCYXNpY2FsbHksIHRoZSBjYWxsYmFjayBzaG91bGQgZmlyZSBlaXRoZXIgd2hlbiB0aGUgcGxheWhlYWQgQVJSSVZFUyBvciBMRUFWRVMgdGhpcyBleGFjdCBzcG90LCBub3QgYm90aC4gSW1hZ2luZSBkb2luZyBhIHRpbWVsaW5lLnNlZWsoMCkgYW5kIHRoZXJlJ3MgYSBjYWxsYmFjayB0aGF0IHNpdHMgYXQgMC4gU2luY2UgZXZlbnRzIGFyZSBzdXBwcmVzc2VkIG9uIHRoYXQgc2VlaygpIGJ5IGRlZmF1bHQsIG5vdGhpbmcgd2lsbCBmaXJlLCBidXQgd2hlbiB0aGUgcGxheWhlYWQgbW92ZXMgb2ZmIG9mIHRoYXQgcG9zaXRpb24sIHRoZSBjYWxsYmFjayBzaG91bGQgZmlyZS4gVGhpcyBiZWhhdmlvciBpcyB3aGF0IHBlb3BsZSBpbnR1aXRpdmVseSBleHBlY3QuIFdlIHNldCB0aGUgX3Jhd1ByZXZUaW1lIHRvIGJlIGEgcHJlY2lzZSB0aW55IG51bWJlciB0byBpbmRpY2F0ZSB0aGlzIHNjZW5hcmlvIHJhdGhlciB0aGFuIHVzaW5nIGFub3RoZXIgcHJvcGVydHkvdmFyaWFibGUgd2hpY2ggd291bGQgaW5jcmVhc2UgbWVtb3J5IHVzYWdlLiBUaGlzIHRlY2huaXF1ZSBpcyBsZXNzIHJlYWRhYmxlLCBidXQgbW9yZSBlZmZpY2llbnQuXG5cdFx0XHRcdHRpbWUgPSB0b3RhbER1ciArIDAuMDAwMTsgLy90byBhdm9pZCBvY2Nhc2lvbmFsIGZsb2F0aW5nIHBvaW50IHJvdW5kaW5nIGVycm9ycyAtIHNvbWV0aW1lcyBjaGlsZCB0d2VlbnMvdGltZWxpbmVzIHdlcmUgbm90IGJlaW5nIGZ1bGx5IGNvbXBsZXRlZCAodGhlaXIgcHJvZ3Jlc3MgbWlnaHQgYmUgMC45OTk5OTk5OTk5OTk5OTggaW5zdGVhZCBvZiAxIGJlY2F1c2Ugd2hlbiBfdGltZSAtIHR3ZWVuLl9zdGFydFRpbWUgaXMgcGVyZm9ybWVkLCBmbG9hdGluZyBwb2ludCBlcnJvcnMgd291bGQgcmV0dXJuIGEgdmFsdWUgdGhhdCB3YXMgU0xJR0hUTFkgb2ZmKS4gVHJ5ICg5OTk5OTk5OTk5OTkuNyAtIDk5OTk5OTk5OTk5OSkgKiAxID0gMC42OTk5NTExNzE4NzUgaW5zdGVhZCBvZiAwLjcuXG5cblx0XHRcdH0gZWxzZSBpZiAodGltZSA8IDAuMDAwMDAwMSkgeyAvL3RvIHdvcmsgYXJvdW5kIG9jY2FzaW9uYWwgZmxvYXRpbmcgcG9pbnQgbWF0aCBhcnRpZmFjdHMsIHJvdW5kIHN1cGVyIHNtYWxsIHZhbHVlcyB0byAwLlxuXHRcdFx0XHR0aGlzLl90b3RhbFRpbWUgPSB0aGlzLl90aW1lID0gMDtcblx0XHRcdFx0aWYgKHByZXZUaW1lICE9PSAwIHx8ICh0aGlzLl9kdXJhdGlvbiA9PT0gMCAmJiB0aGlzLl9yYXdQcmV2VGltZSAhPT0gX3RpbnlOdW0gJiYgKHRoaXMuX3Jhd1ByZXZUaW1lID4gMCB8fCAodGltZSA8IDAgJiYgdGhpcy5fcmF3UHJldlRpbWUgPj0gMCkpKSkge1xuXHRcdFx0XHRcdGNhbGxiYWNrID0gXCJvblJldmVyc2VDb21wbGV0ZVwiO1xuXHRcdFx0XHRcdGlzQ29tcGxldGUgPSB0aGlzLl9yZXZlcnNlZDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodGltZSA8IDApIHtcblx0XHRcdFx0XHR0aGlzLl9hY3RpdmUgPSBmYWxzZTtcblx0XHRcdFx0XHRpZiAodGhpcy5fdGltZWxpbmUuYXV0b1JlbW92ZUNoaWxkcmVuICYmIHRoaXMuX3JldmVyc2VkKSB7IC8vZW5zdXJlcyBwcm9wZXIgR0MgaWYgYSB0aW1lbGluZSBpcyByZXN1bWVkIGFmdGVyIGl0J3MgZmluaXNoZWQgcmV2ZXJzaW5nLlxuXHRcdFx0XHRcdFx0aW50ZXJuYWxGb3JjZSA9IGlzQ29tcGxldGUgPSB0cnVlO1xuXHRcdFx0XHRcdFx0Y2FsbGJhY2sgPSBcIm9uUmV2ZXJzZUNvbXBsZXRlXCI7XG5cdFx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLl9yYXdQcmV2VGltZSA+PSAwICYmIHRoaXMuX2ZpcnN0KSB7IC8vd2hlbiBnb2luZyBiYWNrIGJleW9uZCB0aGUgc3RhcnQsIGZvcmNlIGEgcmVuZGVyIHNvIHRoYXQgemVyby1kdXJhdGlvbiB0d2VlbnMgdGhhdCBzaXQgYXQgdGhlIHZlcnkgYmVnaW5uaW5nIHJlbmRlciB0aGVpciBzdGFydCB2YWx1ZXMgcHJvcGVybHkuIE90aGVyd2lzZSwgaWYgdGhlIHBhcmVudCB0aW1lbGluZSdzIHBsYXloZWFkIGxhbmRzIGV4YWN0bHkgYXQgdGhpcyB0aW1lbGluZSdzIHN0YXJ0VGltZSwgYW5kIHRoZW4gbW92ZXMgYmFja3dhcmRzLCB0aGUgemVyby1kdXJhdGlvbiB0d2VlbnMgYXQgdGhlIGJlZ2lubmluZyB3b3VsZCBzdGlsbCBiZSBhdCB0aGVpciBlbmQgc3RhdGUuXG5cdFx0XHRcdFx0XHRpbnRlcm5hbEZvcmNlID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5fcmF3UHJldlRpbWUgPSB0aW1lO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuX3Jhd1ByZXZUaW1lID0gKHRoaXMuX2R1cmF0aW9uIHx8ICFzdXBwcmVzc0V2ZW50cyB8fCB0aW1lIHx8IHRoaXMuX3Jhd1ByZXZUaW1lID09PSB0aW1lKSA/IHRpbWUgOiBfdGlueU51bTsgLy93aGVuIHRoZSBwbGF5aGVhZCBhcnJpdmVzIGF0IEVYQUNUTFkgdGltZSAwIChyaWdodCBvbiB0b3ApIG9mIGEgemVyby1kdXJhdGlvbiB0aW1lbGluZSBvciB0d2Vlbiwgd2UgbmVlZCB0byBkaXNjZXJuIGlmIGV2ZW50cyBhcmUgc3VwcHJlc3NlZCBzbyB0aGF0IHdoZW4gdGhlIHBsYXloZWFkIG1vdmVzIGFnYWluIChuZXh0IHRpbWUpLCBpdCdsbCB0cmlnZ2VyIHRoZSBjYWxsYmFjay4gSWYgZXZlbnRzIGFyZSBOT1Qgc3VwcHJlc3NlZCwgb2J2aW91c2x5IHRoZSBjYWxsYmFjayB3b3VsZCBiZSB0cmlnZ2VyZWQgaW4gdGhpcyByZW5kZXIuIEJhc2ljYWxseSwgdGhlIGNhbGxiYWNrIHNob3VsZCBmaXJlIGVpdGhlciB3aGVuIHRoZSBwbGF5aGVhZCBBUlJJVkVTIG9yIExFQVZFUyB0aGlzIGV4YWN0IHNwb3QsIG5vdCBib3RoLiBJbWFnaW5lIGRvaW5nIGEgdGltZWxpbmUuc2VlaygwKSBhbmQgdGhlcmUncyBhIGNhbGxiYWNrIHRoYXQgc2l0cyBhdCAwLiBTaW5jZSBldmVudHMgYXJlIHN1cHByZXNzZWQgb24gdGhhdCBzZWVrKCkgYnkgZGVmYXVsdCwgbm90aGluZyB3aWxsIGZpcmUsIGJ1dCB3aGVuIHRoZSBwbGF5aGVhZCBtb3ZlcyBvZmYgb2YgdGhhdCBwb3NpdGlvbiwgdGhlIGNhbGxiYWNrIHNob3VsZCBmaXJlLiBUaGlzIGJlaGF2aW9yIGlzIHdoYXQgcGVvcGxlIGludHVpdGl2ZWx5IGV4cGVjdC4gV2Ugc2V0IHRoZSBfcmF3UHJldlRpbWUgdG8gYmUgYSBwcmVjaXNlIHRpbnkgbnVtYmVyIHRvIGluZGljYXRlIHRoaXMgc2NlbmFyaW8gcmF0aGVyIHRoYW4gdXNpbmcgYW5vdGhlciBwcm9wZXJ0eS92YXJpYWJsZSB3aGljaCB3b3VsZCBpbmNyZWFzZSBtZW1vcnkgdXNhZ2UuIFRoaXMgdGVjaG5pcXVlIGlzIGxlc3MgcmVhZGFibGUsIGJ1dCBtb3JlIGVmZmljaWVudC5cblx0XHRcdFx0XHRpZiAodGltZSA9PT0gMCAmJiBpc0NvbXBsZXRlKSB7IC8vaWYgdGhlcmUncyBhIHplcm8tZHVyYXRpb24gdHdlZW4gYXQgdGhlIHZlcnkgYmVnaW5uaW5nIG9mIGEgdGltZWxpbmUgYW5kIHRoZSBwbGF5aGVhZCBsYW5kcyBFWEFDVExZIGF0IHRpbWUgMCwgdGhhdCB0d2VlbiB3aWxsIGNvcnJlY3RseSByZW5kZXIgaXRzIGVuZCB2YWx1ZXMsIGJ1dCB3ZSBuZWVkIHRvIGtlZXAgdGhlIHRpbWVsaW5lIGFsaXZlIGZvciBvbmUgbW9yZSByZW5kZXIgc28gdGhhdCB0aGUgYmVnaW5uaW5nIHZhbHVlcyByZW5kZXIgcHJvcGVybHkgYXMgdGhlIHBhcmVudCdzIHBsYXloZWFkIGtlZXBzIG1vdmluZyBiZXlvbmQgdGhlIGJlZ2luaW5nLiBJbWFnaW5lIG9iai54IHN0YXJ0cyBhdCAwIGFuZCB0aGVuIHdlIGRvIHRsLnNldChvYmosIHt4OjEwMH0pLnRvKG9iaiwgMSwge3g6MjAwfSkgYW5kIHRoZW4gbGF0ZXIgd2UgdGwucmV2ZXJzZSgpLi4udGhlIGdvYWwgaXMgdG8gaGF2ZSBvYmoueCByZXZlcnQgdG8gMC4gSWYgdGhlIHBsYXloZWFkIGhhcHBlbnMgdG8gbGFuZCBvbiBleGFjdGx5IDAsIHdpdGhvdXQgdGhpcyBjaHVuayBvZiBjb2RlLCBpdCdkIGNvbXBsZXRlIHRoZSB0aW1lbGluZSBhbmQgcmVtb3ZlIGl0IGZyb20gdGhlIHJlbmRlcmluZyBxdWV1ZSAobm90IGdvb2QpLlxuXHRcdFx0XHRcdFx0dHdlZW4gPSB0aGlzLl9maXJzdDtcblx0XHRcdFx0XHRcdHdoaWxlICh0d2VlbiAmJiB0d2Vlbi5fc3RhcnRUaW1lID09PSAwKSB7XG5cdFx0XHRcdFx0XHRcdGlmICghdHdlZW4uX2R1cmF0aW9uKSB7XG5cdFx0XHRcdFx0XHRcdFx0aXNDb21wbGV0ZSA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHR3ZWVuID0gdHdlZW4uX25leHQ7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRpbWUgPSAwOyAvL3RvIGF2b2lkIG9jY2FzaW9uYWwgZmxvYXRpbmcgcG9pbnQgcm91bmRpbmcgZXJyb3JzIChjb3VsZCBjYXVzZSBwcm9ibGVtcyBlc3BlY2lhbGx5IHdpdGggemVyby1kdXJhdGlvbiB0d2VlbnMgYXQgdGhlIHZlcnkgYmVnaW5uaW5nIG9mIHRoZSB0aW1lbGluZSlcblx0XHRcdFx0XHRpZiAoIXRoaXMuX2luaXR0ZWQpIHtcblx0XHRcdFx0XHRcdGludGVybmFsRm9yY2UgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLl90b3RhbFRpbWUgPSB0aGlzLl90aW1lID0gdGhpcy5fcmF3UHJldlRpbWUgPSB0aW1lO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCh0aGlzLl90aW1lID09PSBwcmV2VGltZSB8fCAhdGhpcy5fZmlyc3QpICYmICFmb3JjZSAmJiAhaW50ZXJuYWxGb3JjZSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9IGVsc2UgaWYgKCF0aGlzLl9pbml0dGVkKSB7XG5cdFx0XHRcdHRoaXMuX2luaXR0ZWQgPSB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIXRoaXMuX2FjdGl2ZSkgaWYgKCF0aGlzLl9wYXVzZWQgJiYgdGhpcy5fdGltZSAhPT0gcHJldlRpbWUgJiYgdGltZSA+IDApIHtcblx0XHRcdFx0dGhpcy5fYWN0aXZlID0gdHJ1ZTsgIC8vc28gdGhhdCBpZiB0aGUgdXNlciByZW5kZXJzIHRoZSB0aW1lbGluZSAoYXMgb3Bwb3NlZCB0byB0aGUgcGFyZW50IHRpbWVsaW5lIHJlbmRlcmluZyBpdCksIGl0IGlzIGZvcmNlZCB0byByZS1yZW5kZXIgYW5kIGFsaWduIGl0IHdpdGggdGhlIHByb3BlciB0aW1lL2ZyYW1lIG9uIHRoZSBuZXh0IHJlbmRlcmluZyBjeWNsZS4gTWF5YmUgdGhlIHRpbWVsaW5lIGFscmVhZHkgZmluaXNoZWQgYnV0IHRoZSB1c2VyIG1hbnVhbGx5IHJlLXJlbmRlcnMgaXQgYXMgaGFsZndheSBkb25lLCBmb3IgZXhhbXBsZS5cblx0XHRcdH1cblxuXHRcdFx0aWYgKHByZXZUaW1lID09PSAwKSBpZiAodGhpcy52YXJzLm9uU3RhcnQpIGlmICh0aGlzLl90aW1lICE9PSAwKSBpZiAoIXN1cHByZXNzRXZlbnRzKSB7XG5cdFx0XHRcdHRoaXMudmFycy5vblN0YXJ0LmFwcGx5KHRoaXMudmFycy5vblN0YXJ0U2NvcGUgfHwgdGhpcywgdGhpcy52YXJzLm9uU3RhcnRQYXJhbXMgfHwgX2JsYW5rQXJyYXkpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5fdGltZSA+PSBwcmV2VGltZSkge1xuXHRcdFx0XHR0d2VlbiA9IHRoaXMuX2ZpcnN0O1xuXHRcdFx0XHR3aGlsZSAodHdlZW4pIHtcblx0XHRcdFx0XHRuZXh0ID0gdHdlZW4uX25leHQ7IC8vcmVjb3JkIGl0IGhlcmUgYmVjYXVzZSB0aGUgdmFsdWUgY291bGQgY2hhbmdlIGFmdGVyIHJlbmRlcmluZy4uLlxuXHRcdFx0XHRcdGlmICh0aGlzLl9wYXVzZWQgJiYgIXByZXZQYXVzZWQpIHsgLy9pbiBjYXNlIGEgdHdlZW4gcGF1c2VzIHRoZSB0aW1lbGluZSB3aGVuIHJlbmRlcmluZ1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fSBlbHNlIGlmICh0d2Vlbi5fYWN0aXZlIHx8ICh0d2Vlbi5fc3RhcnRUaW1lIDw9IHRoaXMuX3RpbWUgJiYgIXR3ZWVuLl9wYXVzZWQgJiYgIXR3ZWVuLl9nYykpIHtcblx0XHRcdFx0XHRcdGlmICghdHdlZW4uX3JldmVyc2VkKSB7XG5cdFx0XHRcdFx0XHRcdHR3ZWVuLnJlbmRlcigodGltZSAtIHR3ZWVuLl9zdGFydFRpbWUpICogdHdlZW4uX3RpbWVTY2FsZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHR3ZWVuLnJlbmRlcigoKCF0d2Vlbi5fZGlydHkpID8gdHdlZW4uX3RvdGFsRHVyYXRpb24gOiB0d2Vlbi50b3RhbER1cmF0aW9uKCkpIC0gKCh0aW1lIC0gdHdlZW4uX3N0YXJ0VGltZSkgKiB0d2Vlbi5fdGltZVNjYWxlKSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dHdlZW4gPSBuZXh0O1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0d2VlbiA9IHRoaXMuX2xhc3Q7XG5cdFx0XHRcdHdoaWxlICh0d2Vlbikge1xuXHRcdFx0XHRcdG5leHQgPSB0d2Vlbi5fcHJldjsgLy9yZWNvcmQgaXQgaGVyZSBiZWNhdXNlIHRoZSB2YWx1ZSBjb3VsZCBjaGFuZ2UgYWZ0ZXIgcmVuZGVyaW5nLi4uXG5cdFx0XHRcdFx0aWYgKHRoaXMuX3BhdXNlZCAmJiAhcHJldlBhdXNlZCkgeyAvL2luIGNhc2UgYSB0d2VlbiBwYXVzZXMgdGhlIHRpbWVsaW5lIHdoZW4gcmVuZGVyaW5nXG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHR3ZWVuLl9hY3RpdmUgfHwgKHR3ZWVuLl9zdGFydFRpbWUgPD0gcHJldlRpbWUgJiYgIXR3ZWVuLl9wYXVzZWQgJiYgIXR3ZWVuLl9nYykpIHtcblx0XHRcdFx0XHRcdGlmICghdHdlZW4uX3JldmVyc2VkKSB7XG5cdFx0XHRcdFx0XHRcdHR3ZWVuLnJlbmRlcigodGltZSAtIHR3ZWVuLl9zdGFydFRpbWUpICogdHdlZW4uX3RpbWVTY2FsZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHR3ZWVuLnJlbmRlcigoKCF0d2Vlbi5fZGlydHkpID8gdHdlZW4uX3RvdGFsRHVyYXRpb24gOiB0d2Vlbi50b3RhbER1cmF0aW9uKCkpIC0gKCh0aW1lIC0gdHdlZW4uX3N0YXJ0VGltZSkgKiB0d2Vlbi5fdGltZVNjYWxlKSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dHdlZW4gPSBuZXh0O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLl9vblVwZGF0ZSkgaWYgKCFzdXBwcmVzc0V2ZW50cykge1xuXHRcdFx0XHRpZiAoX2xhenlUd2VlbnMubGVuZ3RoKSB7IC8vaW4gY2FzZSByZW5kZXJpbmcgY2F1c2VkIGFueSB0d2VlbnMgdG8gbGF6eS1pbml0LCB3ZSBzaG91bGQgcmVuZGVyIHRoZW0gYmVjYXVzZSB0eXBpY2FsbHkgd2hlbiBhIHRpbWVsaW5lIGZpbmlzaGVzLCB1c2VycyBleHBlY3QgdGhpbmdzIHRvIGhhdmUgcmVuZGVyZWQgZnVsbHkuIEltYWdpbmUgYW4gb25VcGRhdGUgb24gYSB0aW1lbGluZSB0aGF0IHJlcG9ydHMvY2hlY2tzIHR3ZWVuZWQgdmFsdWVzLlxuXHRcdFx0XHRcdF9sYXp5UmVuZGVyKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5fb25VcGRhdGUuYXBwbHkodGhpcy52YXJzLm9uVXBkYXRlU2NvcGUgfHwgdGhpcywgdGhpcy52YXJzLm9uVXBkYXRlUGFyYW1zIHx8IF9ibGFua0FycmF5KTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGNhbGxiYWNrKSBpZiAoIXRoaXMuX2djKSBpZiAocHJldlN0YXJ0ID09PSB0aGlzLl9zdGFydFRpbWUgfHwgcHJldlRpbWVTY2FsZSAhPT0gdGhpcy5fdGltZVNjYWxlKSBpZiAodGhpcy5fdGltZSA9PT0gMCB8fCB0b3RhbER1ciA+PSB0aGlzLnRvdGFsRHVyYXRpb24oKSkgeyAvL2lmIG9uZSBvZiB0aGUgdHdlZW5zIHRoYXQgd2FzIHJlbmRlcmVkIGFsdGVyZWQgdGhpcyB0aW1lbGluZSdzIHN0YXJ0VGltZSAobGlrZSBpZiBhbiBvbkNvbXBsZXRlIHJldmVyc2VkIHRoZSB0aW1lbGluZSksIGl0IHByb2JhYmx5IGlzbid0IGNvbXBsZXRlLiBJZiBpdCBpcywgZG9uJ3Qgd29ycnksIGJlY2F1c2Ugd2hhdGV2ZXIgY2FsbCBhbHRlcmVkIHRoZSBzdGFydFRpbWUgd291bGQgY29tcGxldGUgaWYgaXQgd2FzIG5lY2Vzc2FyeSBhdCB0aGUgbmV3IHRpbWUuIFRoZSBvbmx5IGV4Y2VwdGlvbiBpcyB0aGUgdGltZVNjYWxlIHByb3BlcnR5LiBBbHNvIGNoZWNrIF9nYyBiZWNhdXNlIHRoZXJlJ3MgYSBjaGFuY2UgdGhhdCBraWxsKCkgY291bGQgYmUgY2FsbGVkIGluIGFuIG9uVXBkYXRlXG5cdFx0XHRcdGlmIChpc0NvbXBsZXRlKSB7XG5cdFx0XHRcdFx0aWYgKF9sYXp5VHdlZW5zLmxlbmd0aCkgeyAvL2luIGNhc2UgcmVuZGVyaW5nIGNhdXNlZCBhbnkgdHdlZW5zIHRvIGxhenktaW5pdCwgd2Ugc2hvdWxkIHJlbmRlciB0aGVtIGJlY2F1c2UgdHlwaWNhbGx5IHdoZW4gYSB0aW1lbGluZSBmaW5pc2hlcywgdXNlcnMgZXhwZWN0IHRoaW5ncyB0byBoYXZlIHJlbmRlcmVkIGZ1bGx5LiBJbWFnaW5lIGFuIG9uQ29tcGxldGUgb24gYSB0aW1lbGluZSB0aGF0IHJlcG9ydHMvY2hlY2tzIHR3ZWVuZWQgdmFsdWVzLlxuXHRcdFx0XHRcdFx0X2xhenlSZW5kZXIoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHRoaXMuX3RpbWVsaW5lLmF1dG9SZW1vdmVDaGlsZHJlbikge1xuXHRcdFx0XHRcdFx0dGhpcy5fZW5hYmxlZChmYWxzZSwgZmFsc2UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLl9hY3RpdmUgPSBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIXN1cHByZXNzRXZlbnRzICYmIHRoaXMudmFyc1tjYWxsYmFja10pIHtcblx0XHRcdFx0XHR0aGlzLnZhcnNbY2FsbGJhY2tdLmFwcGx5KHRoaXMudmFyc1tjYWxsYmFjayArIFwiU2NvcGVcIl0gfHwgdGhpcywgdGhpcy52YXJzW2NhbGxiYWNrICsgXCJQYXJhbXNcIl0gfHwgX2JsYW5rQXJyYXkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHAuX2hhc1BhdXNlZENoaWxkID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgdHdlZW4gPSB0aGlzLl9maXJzdDtcblx0XHRcdHdoaWxlICh0d2Vlbikge1xuXHRcdFx0XHRpZiAodHdlZW4uX3BhdXNlZCB8fCAoKHR3ZWVuIGluc3RhbmNlb2YgVGltZWxpbmVMaXRlKSAmJiB0d2Vlbi5faGFzUGF1c2VkQ2hpbGQoKSkpIHtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0d2VlbiA9IHR3ZWVuLl9uZXh0O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH07XG5cblx0XHRwLmdldENoaWxkcmVuID0gZnVuY3Rpb24obmVzdGVkLCB0d2VlbnMsIHRpbWVsaW5lcywgaWdub3JlQmVmb3JlVGltZSkge1xuXHRcdFx0aWdub3JlQmVmb3JlVGltZSA9IGlnbm9yZUJlZm9yZVRpbWUgfHwgLTk5OTk5OTk5OTk7XG5cdFx0XHR2YXIgYSA9IFtdLFxuXHRcdFx0XHR0d2VlbiA9IHRoaXMuX2ZpcnN0LFxuXHRcdFx0XHRjbnQgPSAwO1xuXHRcdFx0d2hpbGUgKHR3ZWVuKSB7XG5cdFx0XHRcdGlmICh0d2Vlbi5fc3RhcnRUaW1lIDwgaWdub3JlQmVmb3JlVGltZSkge1xuXHRcdFx0XHRcdC8vZG8gbm90aGluZ1xuXHRcdFx0XHR9IGVsc2UgaWYgKHR3ZWVuIGluc3RhbmNlb2YgVHdlZW5MaXRlKSB7XG5cdFx0XHRcdFx0aWYgKHR3ZWVucyAhPT0gZmFsc2UpIHtcblx0XHRcdFx0XHRcdGFbY250KytdID0gdHdlZW47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGlmICh0aW1lbGluZXMgIT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0XHRhW2NudCsrXSA9IHR3ZWVuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAobmVzdGVkICE9PSBmYWxzZSkge1xuXHRcdFx0XHRcdFx0YSA9IGEuY29uY2F0KHR3ZWVuLmdldENoaWxkcmVuKHRydWUsIHR3ZWVucywgdGltZWxpbmVzKSk7XG5cdFx0XHRcdFx0XHRjbnQgPSBhLmxlbmd0aDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0dHdlZW4gPSB0d2Vlbi5fbmV4dDtcblx0XHRcdH1cblx0XHRcdHJldHVybiBhO1xuXHRcdH07XG5cblx0XHRwLmdldFR3ZWVuc09mID0gZnVuY3Rpb24odGFyZ2V0LCBuZXN0ZWQpIHtcblx0XHRcdHZhciBkaXNhYmxlZCA9IHRoaXMuX2djLFxuXHRcdFx0XHRhID0gW10sXG5cdFx0XHRcdGNudCA9IDAsXG5cdFx0XHRcdHR3ZWVucywgaTtcblx0XHRcdGlmIChkaXNhYmxlZCkge1xuXHRcdFx0XHR0aGlzLl9lbmFibGVkKHRydWUsIHRydWUpOyAvL2dldFR3ZWVuc09mKCkgZmlsdGVycyBvdXQgZGlzYWJsZWQgdHdlZW5zLCBhbmQgd2UgaGF2ZSB0byBtYXJrIHRoZW0gYXMgX2djID0gdHJ1ZSB3aGVuIHRoZSB0aW1lbGluZSBjb21wbGV0ZXMgaW4gb3JkZXIgdG8gYWxsb3cgY2xlYW4gZ2FyYmFnZSBjb2xsZWN0aW9uLCBzbyB0ZW1wb3JhcmlseSByZS1lbmFibGUgdGhlIHRpbWVsaW5lIGhlcmUuXG5cdFx0XHR9XG5cdFx0XHR0d2VlbnMgPSBUd2VlbkxpdGUuZ2V0VHdlZW5zT2YodGFyZ2V0KTtcblx0XHRcdGkgPSB0d2VlbnMubGVuZ3RoO1xuXHRcdFx0d2hpbGUgKC0taSA+IC0xKSB7XG5cdFx0XHRcdGlmICh0d2VlbnNbaV0udGltZWxpbmUgPT09IHRoaXMgfHwgKG5lc3RlZCAmJiB0aGlzLl9jb250YWlucyh0d2VlbnNbaV0pKSkge1xuXHRcdFx0XHRcdGFbY250KytdID0gdHdlZW5zW2ldO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoZGlzYWJsZWQpIHtcblx0XHRcdFx0dGhpcy5fZW5hYmxlZChmYWxzZSwgdHJ1ZSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gYTtcblx0XHR9O1xuXG5cdFx0cC5yZWNlbnQgPSBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiB0aGlzLl9yZWNlbnQ7XG5cdFx0fTtcblxuXHRcdHAuX2NvbnRhaW5zID0gZnVuY3Rpb24odHdlZW4pIHtcblx0XHRcdHZhciB0bCA9IHR3ZWVuLnRpbWVsaW5lO1xuXHRcdFx0d2hpbGUgKHRsKSB7XG5cdFx0XHRcdGlmICh0bCA9PT0gdGhpcykge1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRsID0gdGwudGltZWxpbmU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fTtcblxuXHRcdHAuc2hpZnRDaGlsZHJlbiA9IGZ1bmN0aW9uKGFtb3VudCwgYWRqdXN0TGFiZWxzLCBpZ25vcmVCZWZvcmVUaW1lKSB7XG5cdFx0XHRpZ25vcmVCZWZvcmVUaW1lID0gaWdub3JlQmVmb3JlVGltZSB8fCAwO1xuXHRcdFx0dmFyIHR3ZWVuID0gdGhpcy5fZmlyc3QsXG5cdFx0XHRcdGxhYmVscyA9IHRoaXMuX2xhYmVscyxcblx0XHRcdFx0cDtcblx0XHRcdHdoaWxlICh0d2Vlbikge1xuXHRcdFx0XHRpZiAodHdlZW4uX3N0YXJ0VGltZSA+PSBpZ25vcmVCZWZvcmVUaW1lKSB7XG5cdFx0XHRcdFx0dHdlZW4uX3N0YXJ0VGltZSArPSBhbW91bnQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0dHdlZW4gPSB0d2Vlbi5fbmV4dDtcblx0XHRcdH1cblx0XHRcdGlmIChhZGp1c3RMYWJlbHMpIHtcblx0XHRcdFx0Zm9yIChwIGluIGxhYmVscykge1xuXHRcdFx0XHRcdGlmIChsYWJlbHNbcF0gPj0gaWdub3JlQmVmb3JlVGltZSkge1xuXHRcdFx0XHRcdFx0bGFiZWxzW3BdICs9IGFtb3VudDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzLl91bmNhY2hlKHRydWUpO1xuXHRcdH07XG5cblx0XHRwLl9raWxsID0gZnVuY3Rpb24odmFycywgdGFyZ2V0KSB7XG5cdFx0XHRpZiAoIXZhcnMgJiYgIXRhcmdldCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fZW5hYmxlZChmYWxzZSwgZmFsc2UpO1xuXHRcdFx0fVxuXHRcdFx0dmFyIHR3ZWVucyA9ICghdGFyZ2V0KSA/IHRoaXMuZ2V0Q2hpbGRyZW4odHJ1ZSwgdHJ1ZSwgZmFsc2UpIDogdGhpcy5nZXRUd2VlbnNPZih0YXJnZXQpLFxuXHRcdFx0XHRpID0gdHdlZW5zLmxlbmd0aCxcblx0XHRcdFx0Y2hhbmdlZCA9IGZhbHNlO1xuXHRcdFx0d2hpbGUgKC0taSA+IC0xKSB7XG5cdFx0XHRcdGlmICh0d2VlbnNbaV0uX2tpbGwodmFycywgdGFyZ2V0KSkge1xuXHRcdFx0XHRcdGNoYW5nZWQgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gY2hhbmdlZDtcblx0XHR9O1xuXG5cdFx0cC5jbGVhciA9IGZ1bmN0aW9uKGxhYmVscykge1xuXHRcdFx0dmFyIHR3ZWVucyA9IHRoaXMuZ2V0Q2hpbGRyZW4oZmFsc2UsIHRydWUsIHRydWUpLFxuXHRcdFx0XHRpID0gdHdlZW5zLmxlbmd0aDtcblx0XHRcdHRoaXMuX3RpbWUgPSB0aGlzLl90b3RhbFRpbWUgPSAwO1xuXHRcdFx0d2hpbGUgKC0taSA+IC0xKSB7XG5cdFx0XHRcdHR3ZWVuc1tpXS5fZW5hYmxlZChmYWxzZSwgZmFsc2UpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGxhYmVscyAhPT0gZmFsc2UpIHtcblx0XHRcdFx0dGhpcy5fbGFiZWxzID0ge307XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcy5fdW5jYWNoZSh0cnVlKTtcblx0XHR9O1xuXG5cdFx0cC5pbnZhbGlkYXRlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgdHdlZW4gPSB0aGlzLl9maXJzdDtcblx0XHRcdHdoaWxlICh0d2Vlbikge1xuXHRcdFx0XHR0d2Vlbi5pbnZhbGlkYXRlKCk7XG5cdFx0XHRcdHR3ZWVuID0gdHdlZW4uX25leHQ7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gQW5pbWF0aW9uLnByb3RvdHlwZS5pbnZhbGlkYXRlLmNhbGwodGhpcyk7O1xuXHRcdH07XG5cblx0XHRwLl9lbmFibGVkID0gZnVuY3Rpb24oZW5hYmxlZCwgaWdub3JlVGltZWxpbmUpIHtcblx0XHRcdGlmIChlbmFibGVkID09PSB0aGlzLl9nYykge1xuXHRcdFx0XHR2YXIgdHdlZW4gPSB0aGlzLl9maXJzdDtcblx0XHRcdFx0d2hpbGUgKHR3ZWVuKSB7XG5cdFx0XHRcdFx0dHdlZW4uX2VuYWJsZWQoZW5hYmxlZCwgdHJ1ZSk7XG5cdFx0XHRcdFx0dHdlZW4gPSB0d2Vlbi5fbmV4dDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIFNpbXBsZVRpbWVsaW5lLnByb3RvdHlwZS5fZW5hYmxlZC5jYWxsKHRoaXMsIGVuYWJsZWQsIGlnbm9yZVRpbWVsaW5lKTtcblx0XHR9O1xuXG5cdFx0cC50b3RhbFRpbWUgPSBmdW5jdGlvbih0aW1lLCBzdXBwcmVzc0V2ZW50cywgdW5jYXBwZWQpIHtcblx0XHRcdHRoaXMuX2ZvcmNpbmdQbGF5aGVhZCA9IHRydWU7XG5cdFx0XHR2YXIgdmFsID0gQW5pbWF0aW9uLnByb3RvdHlwZS50b3RhbFRpbWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRcdHRoaXMuX2ZvcmNpbmdQbGF5aGVhZCA9IGZhbHNlO1xuXHRcdFx0cmV0dXJuIHZhbDtcblx0XHR9O1xuXG5cdFx0cC5kdXJhdGlvbiA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdFx0aWYgKHRoaXMuX2RpcnR5KSB7XG5cdFx0XHRcdFx0dGhpcy50b3RhbER1cmF0aW9uKCk7IC8vanVzdCB0cmlnZ2VycyByZWNhbGN1bGF0aW9uXG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHRoaXMuX2R1cmF0aW9uO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuZHVyYXRpb24oKSAhPT0gMCAmJiB2YWx1ZSAhPT0gMCkge1xuXHRcdFx0XHR0aGlzLnRpbWVTY2FsZSh0aGlzLl9kdXJhdGlvbiAvIHZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH07XG5cblx0XHRwLnRvdGFsRHVyYXRpb24gPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRcdGlmICh0aGlzLl9kaXJ0eSkge1xuXHRcdFx0XHRcdHZhciBtYXggPSAwLFxuXHRcdFx0XHRcdFx0dHdlZW4gPSB0aGlzLl9sYXN0LFxuXHRcdFx0XHRcdFx0cHJldlN0YXJ0ID0gOTk5OTk5OTk5OTk5LFxuXHRcdFx0XHRcdFx0cHJldiwgZW5kO1xuXHRcdFx0XHRcdHdoaWxlICh0d2Vlbikge1xuXHRcdFx0XHRcdFx0cHJldiA9IHR3ZWVuLl9wcmV2OyAvL3JlY29yZCBpdCBoZXJlIGluIGNhc2UgdGhlIHR3ZWVuIGNoYW5nZXMgcG9zaXRpb24gaW4gdGhlIHNlcXVlbmNlLi4uXG5cdFx0XHRcdFx0XHRpZiAodHdlZW4uX2RpcnR5KSB7XG5cdFx0XHRcdFx0XHRcdHR3ZWVuLnRvdGFsRHVyYXRpb24oKTsgLy9jb3VsZCBjaGFuZ2UgdGhlIHR3ZWVuLl9zdGFydFRpbWUsIHNvIG1ha2Ugc3VyZSB0aGUgdHdlZW4ncyBjYWNoZSBpcyBjbGVhbiBiZWZvcmUgYW5hbHl6aW5nIGl0LlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKHR3ZWVuLl9zdGFydFRpbWUgPiBwcmV2U3RhcnQgJiYgdGhpcy5fc29ydENoaWxkcmVuICYmICF0d2Vlbi5fcGF1c2VkKSB7IC8vaW4gY2FzZSBvbmUgb2YgdGhlIHR3ZWVucyBzaGlmdGVkIG91dCBvZiBvcmRlciwgaXQgbmVlZHMgdG8gYmUgcmUtaW5zZXJ0ZWQgaW50byB0aGUgY29ycmVjdCBwb3NpdGlvbiBpbiB0aGUgc2VxdWVuY2Vcblx0XHRcdFx0XHRcdFx0dGhpcy5hZGQodHdlZW4sIHR3ZWVuLl9zdGFydFRpbWUgLSB0d2Vlbi5fZGVsYXkpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0cHJldlN0YXJ0ID0gdHdlZW4uX3N0YXJ0VGltZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmICh0d2Vlbi5fc3RhcnRUaW1lIDwgMCAmJiAhdHdlZW4uX3BhdXNlZCkgeyAvL2NoaWxkcmVuIGFyZW4ndCBhbGxvd2VkIHRvIGhhdmUgbmVnYXRpdmUgc3RhcnRUaW1lcyB1bmxlc3Mgc21vb3RoQ2hpbGRUaW1pbmcgaXMgdHJ1ZSwgc28gYWRqdXN0IGhlcmUgaWYgb25lIGlzIGZvdW5kLlxuXHRcdFx0XHRcdFx0XHRtYXggLT0gdHdlZW4uX3N0YXJ0VGltZTtcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuX3RpbWVsaW5lLnNtb290aENoaWxkVGltaW5nKSB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5fc3RhcnRUaW1lICs9IHR3ZWVuLl9zdGFydFRpbWUgLyB0aGlzLl90aW1lU2NhbGU7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0dGhpcy5zaGlmdENoaWxkcmVuKC10d2Vlbi5fc3RhcnRUaW1lLCBmYWxzZSwgLTk5OTk5OTk5OTkpO1xuXHRcdFx0XHRcdFx0XHRwcmV2U3RhcnQgPSAwO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZW5kID0gdHdlZW4uX3N0YXJ0VGltZSArICh0d2Vlbi5fdG90YWxEdXJhdGlvbiAvIHR3ZWVuLl90aW1lU2NhbGUpO1xuXHRcdFx0XHRcdFx0aWYgKGVuZCA+IG1heCkge1xuXHRcdFx0XHRcdFx0XHRtYXggPSBlbmQ7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR0d2VlbiA9IHByZXY7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuX2R1cmF0aW9uID0gdGhpcy5fdG90YWxEdXJhdGlvbiA9IG1heDtcblx0XHRcdFx0XHR0aGlzLl9kaXJ0eSA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB0aGlzLl90b3RhbER1cmF0aW9uO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMudG90YWxEdXJhdGlvbigpICE9PSAwKSBpZiAodmFsdWUgIT09IDApIHtcblx0XHRcdFx0dGhpcy50aW1lU2NhbGUodGhpcy5fdG90YWxEdXJhdGlvbiAvIHZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH07XG5cblx0XHRwLnBhdXNlZCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHRpZiAoIXZhbHVlKSB7IC8vaWYgdGhlcmUncyBhIHBhdXNlIGRpcmVjdGx5IGF0IHRoZSBzcG90IGZyb20gd2hlcmUgd2UncmUgdW5wYXVzaW5nLCBza2lwIGl0LlxuXHRcdFx0XHR2YXIgdHdlZW4gPSB0aGlzLl9maXJzdCxcblx0XHRcdFx0XHR0aW1lID0gdGhpcy5fdGltZTtcblx0XHRcdFx0d2hpbGUgKHR3ZWVuKSB7XG5cdFx0XHRcdFx0aWYgKHR3ZWVuLl9zdGFydFRpbWUgPT09IHRpbWUgJiYgdHdlZW4uZGF0YSA9PT0gXCJpc1BhdXNlXCIpIHtcblx0XHRcdFx0XHRcdHR3ZWVuLl9yYXdQcmV2VGltZSA9IDA7IC8vcmVtZW1iZXIsIF9yYXdQcmV2VGltZSBpcyBob3cgemVyby1kdXJhdGlvbiB0d2VlbnMvY2FsbGJhY2tzIHNlbnNlIGRpcmVjdGlvbmFsaXR5IGFuZCBkZXRlcm1pbmUgd2hldGhlciBvciBub3QgdG8gZmlyZS4gSWYgX3Jhd1ByZXZUaW1lIGlzIHRoZSBzYW1lIGFzIF9zdGFydFRpbWUgb24gdGhlIG5leHQgcmVuZGVyLCBpdCB3b24ndCBmaXJlLlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0d2VlbiA9IHR3ZWVuLl9uZXh0O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gQW5pbWF0aW9uLnByb3RvdHlwZS5wYXVzZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHR9O1xuXG5cdFx0cC51c2VzRnJhbWVzID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgdGwgPSB0aGlzLl90aW1lbGluZTtcblx0XHRcdHdoaWxlICh0bC5fdGltZWxpbmUpIHtcblx0XHRcdFx0dGwgPSB0bC5fdGltZWxpbmU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gKHRsID09PSBBbmltYXRpb24uX3Jvb3RGcmFtZXNUaW1lbGluZSk7XG5cdFx0fTtcblxuXHRcdHAucmF3VGltZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuX3BhdXNlZCA/IHRoaXMuX3RvdGFsVGltZSA6ICh0aGlzLl90aW1lbGluZS5yYXdUaW1lKCkgLSB0aGlzLl9zdGFydFRpbWUpICogdGhpcy5fdGltZVNjYWxlO1xuXHRcdH07XG5cblx0XHRyZXR1cm4gVGltZWxpbmVMaXRlO1xuXG5cdH0sIHRydWUpO1xuXHRcblxuXG5cblxuXG5cblxuXHRcblx0XG5cdFxuXHRcblx0XG4vKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogVGltZWxpbmVNYXhcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXHRfZ3NTY29wZS5fZ3NEZWZpbmUoXCJUaW1lbGluZU1heFwiLCBbXCJUaW1lbGluZUxpdGVcIixcIlR3ZWVuTGl0ZVwiLFwiZWFzaW5nLkVhc2VcIl0sIGZ1bmN0aW9uKFRpbWVsaW5lTGl0ZSwgVHdlZW5MaXRlLCBFYXNlKSB7XG5cblx0XHR2YXIgVGltZWxpbmVNYXggPSBmdW5jdGlvbih2YXJzKSB7XG5cdFx0XHRcdFRpbWVsaW5lTGl0ZS5jYWxsKHRoaXMsIHZhcnMpO1xuXHRcdFx0XHR0aGlzLl9yZXBlYXQgPSB0aGlzLnZhcnMucmVwZWF0IHx8IDA7XG5cdFx0XHRcdHRoaXMuX3JlcGVhdERlbGF5ID0gdGhpcy52YXJzLnJlcGVhdERlbGF5IHx8IDA7XG5cdFx0XHRcdHRoaXMuX2N5Y2xlID0gMDtcblx0XHRcdFx0dGhpcy5feW95byA9ICh0aGlzLnZhcnMueW95byA9PT0gdHJ1ZSk7XG5cdFx0XHRcdHRoaXMuX2RpcnR5ID0gdHJ1ZTtcblx0XHRcdH0sXG5cdFx0XHRfdGlueU51bSA9IDAuMDAwMDAwMDAwMSxcblx0XHRcdF9ibGFua0FycmF5ID0gW10sXG5cdFx0XHRUd2VlbkxpdGVJbnRlcm5hbHMgPSBUd2VlbkxpdGUuX2ludGVybmFscyxcblx0XHRcdF9sYXp5VHdlZW5zID0gVHdlZW5MaXRlSW50ZXJuYWxzLmxhenlUd2VlbnMsXG5cdFx0XHRfbGF6eVJlbmRlciA9IFR3ZWVuTGl0ZUludGVybmFscy5sYXp5UmVuZGVyLFxuXHRcdFx0X2Vhc2VOb25lID0gbmV3IEVhc2UobnVsbCwgbnVsbCwgMSwgMCksXG5cdFx0XHRwID0gVGltZWxpbmVNYXgucHJvdG90eXBlID0gbmV3IFRpbWVsaW5lTGl0ZSgpO1xuXG5cdFx0cC5jb25zdHJ1Y3RvciA9IFRpbWVsaW5lTWF4O1xuXHRcdHAua2lsbCgpLl9nYyA9IGZhbHNlO1xuXHRcdFRpbWVsaW5lTWF4LnZlcnNpb24gPSBcIjEuMTYuMVwiO1xuXG5cdFx0cC5pbnZhbGlkYXRlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR0aGlzLl95b3lvID0gKHRoaXMudmFycy55b3lvID09PSB0cnVlKTtcblx0XHRcdHRoaXMuX3JlcGVhdCA9IHRoaXMudmFycy5yZXBlYXQgfHwgMDtcblx0XHRcdHRoaXMuX3JlcGVhdERlbGF5ID0gdGhpcy52YXJzLnJlcGVhdERlbGF5IHx8IDA7XG5cdFx0XHR0aGlzLl91bmNhY2hlKHRydWUpO1xuXHRcdFx0cmV0dXJuIFRpbWVsaW5lTGl0ZS5wcm90b3R5cGUuaW52YWxpZGF0ZS5jYWxsKHRoaXMpO1xuXHRcdH07XG5cblx0XHRwLmFkZENhbGxiYWNrID0gZnVuY3Rpb24oY2FsbGJhY2ssIHBvc2l0aW9uLCBwYXJhbXMsIHNjb3BlKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5hZGQoIFR3ZWVuTGl0ZS5kZWxheWVkQ2FsbCgwLCBjYWxsYmFjaywgcGFyYW1zLCBzY29wZSksIHBvc2l0aW9uKTtcblx0XHR9O1xuXG5cdFx0cC5yZW1vdmVDYWxsYmFjayA9IGZ1bmN0aW9uKGNhbGxiYWNrLCBwb3NpdGlvbikge1xuXHRcdFx0aWYgKGNhbGxiYWNrKSB7XG5cdFx0XHRcdGlmIChwb3NpdGlvbiA9PSBudWxsKSB7XG5cdFx0XHRcdFx0dGhpcy5fa2lsbChudWxsLCBjYWxsYmFjayk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dmFyIGEgPSB0aGlzLmdldFR3ZWVuc09mKGNhbGxiYWNrLCBmYWxzZSksXG5cdFx0XHRcdFx0XHRpID0gYS5sZW5ndGgsXG5cdFx0XHRcdFx0XHR0aW1lID0gdGhpcy5fcGFyc2VUaW1lT3JMYWJlbChwb3NpdGlvbik7XG5cdFx0XHRcdFx0d2hpbGUgKC0taSA+IC0xKSB7XG5cdFx0XHRcdFx0XHRpZiAoYVtpXS5fc3RhcnRUaW1lID09PSB0aW1lKSB7XG5cdFx0XHRcdFx0XHRcdGFbaV0uX2VuYWJsZWQoZmFsc2UsIGZhbHNlKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH07XG5cblx0XHRwLnJlbW92ZVBhdXNlID0gZnVuY3Rpb24ocG9zaXRpb24pIHtcblx0XHRcdHJldHVybiB0aGlzLnJlbW92ZUNhbGxiYWNrKFRpbWVsaW5lTGl0ZS5faW50ZXJuYWxzLnBhdXNlQ2FsbGJhY2ssIHBvc2l0aW9uKTtcblx0XHR9O1xuXG5cdFx0cC50d2VlblRvID0gZnVuY3Rpb24ocG9zaXRpb24sIHZhcnMpIHtcblx0XHRcdHZhcnMgPSB2YXJzIHx8IHt9O1xuXHRcdFx0dmFyIGNvcHkgPSB7ZWFzZTpfZWFzZU5vbmUsIHVzZUZyYW1lczp0aGlzLnVzZXNGcmFtZXMoKSwgaW1tZWRpYXRlUmVuZGVyOmZhbHNlfSxcblx0XHRcdFx0ZHVyYXRpb24sIHAsIHQ7XG5cdFx0XHRmb3IgKHAgaW4gdmFycykge1xuXHRcdFx0XHRjb3B5W3BdID0gdmFyc1twXTtcblx0XHRcdH1cblx0XHRcdGNvcHkudGltZSA9IHRoaXMuX3BhcnNlVGltZU9yTGFiZWwocG9zaXRpb24pO1xuXHRcdFx0ZHVyYXRpb24gPSAoTWF0aC5hYnMoTnVtYmVyKGNvcHkudGltZSkgLSB0aGlzLl90aW1lKSAvIHRoaXMuX3RpbWVTY2FsZSkgfHwgMC4wMDE7XG5cdFx0XHR0ID0gbmV3IFR3ZWVuTGl0ZSh0aGlzLCBkdXJhdGlvbiwgY29weSk7XG5cdFx0XHRjb3B5Lm9uU3RhcnQgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0dC50YXJnZXQucGF1c2VkKHRydWUpO1xuXHRcdFx0XHRpZiAodC52YXJzLnRpbWUgIT09IHQudGFyZ2V0LnRpbWUoKSAmJiBkdXJhdGlvbiA9PT0gdC5kdXJhdGlvbigpKSB7IC8vZG9uJ3QgbWFrZSB0aGUgZHVyYXRpb24gemVybyAtIGlmIGl0J3Mgc3VwcG9zZWQgdG8gYmUgemVybywgZG9uJ3Qgd29ycnkgYmVjYXVzZSBpdCdzIGFscmVhZHkgaW5pdHRpbmcgdGhlIHR3ZWVuIGFuZCB3aWxsIGNvbXBsZXRlIGltbWVkaWF0ZWx5LCBlZmZlY3RpdmVseSBtYWtpbmcgdGhlIGR1cmF0aW9uIHplcm8gYW55d2F5LiBJZiB3ZSBtYWtlIGR1cmF0aW9uIHplcm8sIHRoZSB0d2VlbiB3b24ndCBydW4gYXQgYWxsLlxuXHRcdFx0XHRcdHQuZHVyYXRpb24oIE1hdGguYWJzKCB0LnZhcnMudGltZSAtIHQudGFyZ2V0LnRpbWUoKSkgLyB0LnRhcmdldC5fdGltZVNjYWxlICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHZhcnMub25TdGFydCkgeyAvL2luIGNhc2UgdGhlIHVzZXIgaGFkIGFuIG9uU3RhcnQgaW4gdGhlIHZhcnMgLSB3ZSBkb24ndCB3YW50IHRvIG92ZXJ3cml0ZSBpdC5cblx0XHRcdFx0XHR2YXJzLm9uU3RhcnQuYXBwbHkodmFycy5vblN0YXJ0U2NvcGUgfHwgdCwgdmFycy5vblN0YXJ0UGFyYW1zIHx8IF9ibGFua0FycmF5KTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdHJldHVybiB0O1xuXHRcdH07XG5cblx0XHRwLnR3ZWVuRnJvbVRvID0gZnVuY3Rpb24oZnJvbVBvc2l0aW9uLCB0b1Bvc2l0aW9uLCB2YXJzKSB7XG5cdFx0XHR2YXJzID0gdmFycyB8fCB7fTtcblx0XHRcdGZyb21Qb3NpdGlvbiA9IHRoaXMuX3BhcnNlVGltZU9yTGFiZWwoZnJvbVBvc2l0aW9uKTtcblx0XHRcdHZhcnMuc3RhcnRBdCA9IHtvbkNvbXBsZXRlOnRoaXMuc2Vlaywgb25Db21wbGV0ZVBhcmFtczpbZnJvbVBvc2l0aW9uXSwgb25Db21wbGV0ZVNjb3BlOnRoaXN9O1xuXHRcdFx0dmFycy5pbW1lZGlhdGVSZW5kZXIgPSAodmFycy5pbW1lZGlhdGVSZW5kZXIgIT09IGZhbHNlKTtcblx0XHRcdHZhciB0ID0gdGhpcy50d2VlblRvKHRvUG9zaXRpb24sIHZhcnMpO1xuXHRcdFx0cmV0dXJuIHQuZHVyYXRpb24oKE1hdGguYWJzKCB0LnZhcnMudGltZSAtIGZyb21Qb3NpdGlvbikgLyB0aGlzLl90aW1lU2NhbGUpIHx8IDAuMDAxKTtcblx0XHR9O1xuXG5cdFx0cC5yZW5kZXIgPSBmdW5jdGlvbih0aW1lLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpIHtcblx0XHRcdGlmICh0aGlzLl9nYykge1xuXHRcdFx0XHR0aGlzLl9lbmFibGVkKHRydWUsIGZhbHNlKTtcblx0XHRcdH1cblx0XHRcdHZhciB0b3RhbER1ciA9ICghdGhpcy5fZGlydHkpID8gdGhpcy5fdG90YWxEdXJhdGlvbiA6IHRoaXMudG90YWxEdXJhdGlvbigpLFxuXHRcdFx0XHRkdXIgPSB0aGlzLl9kdXJhdGlvbixcblx0XHRcdFx0cHJldlRpbWUgPSB0aGlzLl90aW1lLFxuXHRcdFx0XHRwcmV2VG90YWxUaW1lID0gdGhpcy5fdG90YWxUaW1lLFxuXHRcdFx0XHRwcmV2U3RhcnQgPSB0aGlzLl9zdGFydFRpbWUsXG5cdFx0XHRcdHByZXZUaW1lU2NhbGUgPSB0aGlzLl90aW1lU2NhbGUsXG5cdFx0XHRcdHByZXZSYXdQcmV2VGltZSA9IHRoaXMuX3Jhd1ByZXZUaW1lLFxuXHRcdFx0XHRwcmV2UGF1c2VkID0gdGhpcy5fcGF1c2VkLFxuXHRcdFx0XHRwcmV2Q3ljbGUgPSB0aGlzLl9jeWNsZSxcblx0XHRcdFx0dHdlZW4sIGlzQ29tcGxldGUsIG5leHQsIGNhbGxiYWNrLCBpbnRlcm5hbEZvcmNlLCBjeWNsZUR1cmF0aW9uO1xuXHRcdFx0aWYgKHRpbWUgPj0gdG90YWxEdXIpIHtcblx0XHRcdFx0aWYgKCF0aGlzLl9sb2NrZWQpIHtcblx0XHRcdFx0XHR0aGlzLl90b3RhbFRpbWUgPSB0b3RhbER1cjtcblx0XHRcdFx0XHR0aGlzLl9jeWNsZSA9IHRoaXMuX3JlcGVhdDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIXRoaXMuX3JldmVyc2VkKSBpZiAoIXRoaXMuX2hhc1BhdXNlZENoaWxkKCkpIHtcblx0XHRcdFx0XHRpc0NvbXBsZXRlID0gdHJ1ZTtcblx0XHRcdFx0XHRjYWxsYmFjayA9IFwib25Db21wbGV0ZVwiO1xuXHRcdFx0XHRcdGludGVybmFsRm9yY2UgPSAhIXRoaXMuX3RpbWVsaW5lLmF1dG9SZW1vdmVDaGlsZHJlbjsgLy9vdGhlcndpc2UsIGlmIHRoZSBhbmltYXRpb24gaXMgdW5wYXVzZWQvYWN0aXZhdGVkIGFmdGVyIGl0J3MgYWxyZWFkeSBmaW5pc2hlZCwgaXQgZG9lc24ndCBnZXQgcmVtb3ZlZCBmcm9tIHRoZSBwYXJlbnQgdGltZWxpbmUuXG5cdFx0XHRcdFx0aWYgKHRoaXMuX2R1cmF0aW9uID09PSAwKSBpZiAodGltZSA9PT0gMCB8fCBwcmV2UmF3UHJldlRpbWUgPCAwIHx8IHByZXZSYXdQcmV2VGltZSA9PT0gX3RpbnlOdW0pIGlmIChwcmV2UmF3UHJldlRpbWUgIT09IHRpbWUgJiYgdGhpcy5fZmlyc3QpIHtcblx0XHRcdFx0XHRcdGludGVybmFsRm9yY2UgPSB0cnVlO1xuXHRcdFx0XHRcdFx0aWYgKHByZXZSYXdQcmV2VGltZSA+IF90aW55TnVtKSB7XG5cdFx0XHRcdFx0XHRcdGNhbGxiYWNrID0gXCJvblJldmVyc2VDb21wbGV0ZVwiO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLl9yYXdQcmV2VGltZSA9ICh0aGlzLl9kdXJhdGlvbiB8fCAhc3VwcHJlc3NFdmVudHMgfHwgdGltZSB8fCB0aGlzLl9yYXdQcmV2VGltZSA9PT0gdGltZSkgPyB0aW1lIDogX3RpbnlOdW07IC8vd2hlbiB0aGUgcGxheWhlYWQgYXJyaXZlcyBhdCBFWEFDVExZIHRpbWUgMCAocmlnaHQgb24gdG9wKSBvZiBhIHplcm8tZHVyYXRpb24gdGltZWxpbmUgb3IgdHdlZW4sIHdlIG5lZWQgdG8gZGlzY2VybiBpZiBldmVudHMgYXJlIHN1cHByZXNzZWQgc28gdGhhdCB3aGVuIHRoZSBwbGF5aGVhZCBtb3ZlcyBhZ2FpbiAobmV4dCB0aW1lKSwgaXQnbGwgdHJpZ2dlciB0aGUgY2FsbGJhY2suIElmIGV2ZW50cyBhcmUgTk9UIHN1cHByZXNzZWQsIG9idmlvdXNseSB0aGUgY2FsbGJhY2sgd291bGQgYmUgdHJpZ2dlcmVkIGluIHRoaXMgcmVuZGVyLiBCYXNpY2FsbHksIHRoZSBjYWxsYmFjayBzaG91bGQgZmlyZSBlaXRoZXIgd2hlbiB0aGUgcGxheWhlYWQgQVJSSVZFUyBvciBMRUFWRVMgdGhpcyBleGFjdCBzcG90LCBub3QgYm90aC4gSW1hZ2luZSBkb2luZyBhIHRpbWVsaW5lLnNlZWsoMCkgYW5kIHRoZXJlJ3MgYSBjYWxsYmFjayB0aGF0IHNpdHMgYXQgMC4gU2luY2UgZXZlbnRzIGFyZSBzdXBwcmVzc2VkIG9uIHRoYXQgc2VlaygpIGJ5IGRlZmF1bHQsIG5vdGhpbmcgd2lsbCBmaXJlLCBidXQgd2hlbiB0aGUgcGxheWhlYWQgbW92ZXMgb2ZmIG9mIHRoYXQgcG9zaXRpb24sIHRoZSBjYWxsYmFjayBzaG91bGQgZmlyZS4gVGhpcyBiZWhhdmlvciBpcyB3aGF0IHBlb3BsZSBpbnR1aXRpdmVseSBleHBlY3QuIFdlIHNldCB0aGUgX3Jhd1ByZXZUaW1lIHRvIGJlIGEgcHJlY2lzZSB0aW55IG51bWJlciB0byBpbmRpY2F0ZSB0aGlzIHNjZW5hcmlvIHJhdGhlciB0aGFuIHVzaW5nIGFub3RoZXIgcHJvcGVydHkvdmFyaWFibGUgd2hpY2ggd291bGQgaW5jcmVhc2UgbWVtb3J5IHVzYWdlLiBUaGlzIHRlY2huaXF1ZSBpcyBsZXNzIHJlYWRhYmxlLCBidXQgbW9yZSBlZmZpY2llbnQuXG5cdFx0XHRcdGlmICh0aGlzLl95b3lvICYmICh0aGlzLl9jeWNsZSAmIDEpICE9PSAwKSB7XG5cdFx0XHRcdFx0dGhpcy5fdGltZSA9IHRpbWUgPSAwO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuX3RpbWUgPSBkdXI7XG5cdFx0XHRcdFx0dGltZSA9IGR1ciArIDAuMDAwMTsgLy90byBhdm9pZCBvY2Nhc2lvbmFsIGZsb2F0aW5nIHBvaW50IHJvdW5kaW5nIGVycm9ycyAtIHNvbWV0aW1lcyBjaGlsZCB0d2VlbnMvdGltZWxpbmVzIHdlcmUgbm90IGJlaW5nIGZ1bGx5IGNvbXBsZXRlZCAodGhlaXIgcHJvZ3Jlc3MgbWlnaHQgYmUgMC45OTk5OTk5OTk5OTk5OTggaW5zdGVhZCBvZiAxIGJlY2F1c2Ugd2hlbiBfdGltZSAtIHR3ZWVuLl9zdGFydFRpbWUgaXMgcGVyZm9ybWVkLCBmbG9hdGluZyBwb2ludCBlcnJvcnMgd291bGQgcmV0dXJuIGEgdmFsdWUgdGhhdCB3YXMgU0xJR0hUTFkgb2ZmKS4gVHJ5ICg5OTk5OTk5OTk5OTkuNyAtIDk5OTk5OTk5OTk5OSkgKiAxID0gMC42OTk5NTExNzE4NzUgaW5zdGVhZCBvZiAwLjcuIFdlIGNhbm5vdCBkbyBsZXNzIHRoZW4gMC4wMDAxIGJlY2F1c2UgdGhlIHNhbWUgaXNzdWUgY2FuIG9jY3VyIHdoZW4gdGhlIGR1cmF0aW9uIGlzIGV4dHJlbWVseSBsYXJnZSBsaWtlIDk5OTk5OTk5OTk5OSBpbiB3aGljaCBjYXNlIGFkZGluZyAwLjAwMDAwMDAxLCBmb3IgZXhhbXBsZSwgY2F1c2VzIGl0IHRvIGFjdCBsaWtlIG5vdGhpbmcgd2FzIGFkZGVkLlxuXHRcdFx0XHR9XG5cblx0XHRcdH0gZWxzZSBpZiAodGltZSA8IDAuMDAwMDAwMSkgeyAvL3RvIHdvcmsgYXJvdW5kIG9jY2FzaW9uYWwgZmxvYXRpbmcgcG9pbnQgbWF0aCBhcnRpZmFjdHMsIHJvdW5kIHN1cGVyIHNtYWxsIHZhbHVlcyB0byAwLlxuXHRcdFx0XHRpZiAoIXRoaXMuX2xvY2tlZCkge1xuXHRcdFx0XHRcdHRoaXMuX3RvdGFsVGltZSA9IHRoaXMuX2N5Y2xlID0gMDtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLl90aW1lID0gMDtcblx0XHRcdFx0aWYgKHByZXZUaW1lICE9PSAwIHx8IChkdXIgPT09IDAgJiYgcHJldlJhd1ByZXZUaW1lICE9PSBfdGlueU51bSAmJiAocHJldlJhd1ByZXZUaW1lID4gMCB8fCAodGltZSA8IDAgJiYgcHJldlJhd1ByZXZUaW1lID49IDApKSAmJiAhdGhpcy5fbG9ja2VkKSkgeyAvL2VkZ2UgY2FzZSBmb3IgY2hlY2tpbmcgdGltZSA8IDAgJiYgcHJldlJhd1ByZXZUaW1lID49IDA6IGEgemVyby1kdXJhdGlvbiBmcm9tVG8oKSB0d2VlbiBpbnNpZGUgYSB6ZXJvLWR1cmF0aW9uIHRpbWVsaW5lICh5ZWFoLCB2ZXJ5IHJhcmUpXG5cdFx0XHRcdFx0Y2FsbGJhY2sgPSBcIm9uUmV2ZXJzZUNvbXBsZXRlXCI7XG5cdFx0XHRcdFx0aXNDb21wbGV0ZSA9IHRoaXMuX3JldmVyc2VkO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0aW1lIDwgMCkge1xuXHRcdFx0XHRcdHRoaXMuX2FjdGl2ZSA9IGZhbHNlO1xuXHRcdFx0XHRcdGlmICh0aGlzLl90aW1lbGluZS5hdXRvUmVtb3ZlQ2hpbGRyZW4gJiYgdGhpcy5fcmV2ZXJzZWQpIHtcblx0XHRcdFx0XHRcdGludGVybmFsRm9yY2UgPSBpc0NvbXBsZXRlID0gdHJ1ZTtcblx0XHRcdFx0XHRcdGNhbGxiYWNrID0gXCJvblJldmVyc2VDb21wbGV0ZVwiO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAocHJldlJhd1ByZXZUaW1lID49IDAgJiYgdGhpcy5fZmlyc3QpIHsgLy93aGVuIGdvaW5nIGJhY2sgYmV5b25kIHRoZSBzdGFydCwgZm9yY2UgYSByZW5kZXIgc28gdGhhdCB6ZXJvLWR1cmF0aW9uIHR3ZWVucyB0aGF0IHNpdCBhdCB0aGUgdmVyeSBiZWdpbm5pbmcgcmVuZGVyIHRoZWlyIHN0YXJ0IHZhbHVlcyBwcm9wZXJseS4gT3RoZXJ3aXNlLCBpZiB0aGUgcGFyZW50IHRpbWVsaW5lJ3MgcGxheWhlYWQgbGFuZHMgZXhhY3RseSBhdCB0aGlzIHRpbWVsaW5lJ3Mgc3RhcnRUaW1lLCBhbmQgdGhlbiBtb3ZlcyBiYWNrd2FyZHMsIHRoZSB6ZXJvLWR1cmF0aW9uIHR3ZWVucyBhdCB0aGUgYmVnaW5uaW5nIHdvdWxkIHN0aWxsIGJlIGF0IHRoZWlyIGVuZCBzdGF0ZS5cblx0XHRcdFx0XHRcdGludGVybmFsRm9yY2UgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLl9yYXdQcmV2VGltZSA9IHRpbWU7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5fcmF3UHJldlRpbWUgPSAoZHVyIHx8ICFzdXBwcmVzc0V2ZW50cyB8fCB0aW1lIHx8IHRoaXMuX3Jhd1ByZXZUaW1lID09PSB0aW1lKSA/IHRpbWUgOiBfdGlueU51bTsgLy93aGVuIHRoZSBwbGF5aGVhZCBhcnJpdmVzIGF0IEVYQUNUTFkgdGltZSAwIChyaWdodCBvbiB0b3ApIG9mIGEgemVyby1kdXJhdGlvbiB0aW1lbGluZSBvciB0d2Vlbiwgd2UgbmVlZCB0byBkaXNjZXJuIGlmIGV2ZW50cyBhcmUgc3VwcHJlc3NlZCBzbyB0aGF0IHdoZW4gdGhlIHBsYXloZWFkIG1vdmVzIGFnYWluIChuZXh0IHRpbWUpLCBpdCdsbCB0cmlnZ2VyIHRoZSBjYWxsYmFjay4gSWYgZXZlbnRzIGFyZSBOT1Qgc3VwcHJlc3NlZCwgb2J2aW91c2x5IHRoZSBjYWxsYmFjayB3b3VsZCBiZSB0cmlnZ2VyZWQgaW4gdGhpcyByZW5kZXIuIEJhc2ljYWxseSwgdGhlIGNhbGxiYWNrIHNob3VsZCBmaXJlIGVpdGhlciB3aGVuIHRoZSBwbGF5aGVhZCBBUlJJVkVTIG9yIExFQVZFUyB0aGlzIGV4YWN0IHNwb3QsIG5vdCBib3RoLiBJbWFnaW5lIGRvaW5nIGEgdGltZWxpbmUuc2VlaygwKSBhbmQgdGhlcmUncyBhIGNhbGxiYWNrIHRoYXQgc2l0cyBhdCAwLiBTaW5jZSBldmVudHMgYXJlIHN1cHByZXNzZWQgb24gdGhhdCBzZWVrKCkgYnkgZGVmYXVsdCwgbm90aGluZyB3aWxsIGZpcmUsIGJ1dCB3aGVuIHRoZSBwbGF5aGVhZCBtb3ZlcyBvZmYgb2YgdGhhdCBwb3NpdGlvbiwgdGhlIGNhbGxiYWNrIHNob3VsZCBmaXJlLiBUaGlzIGJlaGF2aW9yIGlzIHdoYXQgcGVvcGxlIGludHVpdGl2ZWx5IGV4cGVjdC4gV2Ugc2V0IHRoZSBfcmF3UHJldlRpbWUgdG8gYmUgYSBwcmVjaXNlIHRpbnkgbnVtYmVyIHRvIGluZGljYXRlIHRoaXMgc2NlbmFyaW8gcmF0aGVyIHRoYW4gdXNpbmcgYW5vdGhlciBwcm9wZXJ0eS92YXJpYWJsZSB3aGljaCB3b3VsZCBpbmNyZWFzZSBtZW1vcnkgdXNhZ2UuIFRoaXMgdGVjaG5pcXVlIGlzIGxlc3MgcmVhZGFibGUsIGJ1dCBtb3JlIGVmZmljaWVudC5cblx0XHRcdFx0XHRpZiAodGltZSA9PT0gMCAmJiBpc0NvbXBsZXRlKSB7IC8vaWYgdGhlcmUncyBhIHplcm8tZHVyYXRpb24gdHdlZW4gYXQgdGhlIHZlcnkgYmVnaW5uaW5nIG9mIGEgdGltZWxpbmUgYW5kIHRoZSBwbGF5aGVhZCBsYW5kcyBFWEFDVExZIGF0IHRpbWUgMCwgdGhhdCB0d2VlbiB3aWxsIGNvcnJlY3RseSByZW5kZXIgaXRzIGVuZCB2YWx1ZXMsIGJ1dCB3ZSBuZWVkIHRvIGtlZXAgdGhlIHRpbWVsaW5lIGFsaXZlIGZvciBvbmUgbW9yZSByZW5kZXIgc28gdGhhdCB0aGUgYmVnaW5uaW5nIHZhbHVlcyByZW5kZXIgcHJvcGVybHkgYXMgdGhlIHBhcmVudCdzIHBsYXloZWFkIGtlZXBzIG1vdmluZyBiZXlvbmQgdGhlIGJlZ2luaW5nLiBJbWFnaW5lIG9iai54IHN0YXJ0cyBhdCAwIGFuZCB0aGVuIHdlIGRvIHRsLnNldChvYmosIHt4OjEwMH0pLnRvKG9iaiwgMSwge3g6MjAwfSkgYW5kIHRoZW4gbGF0ZXIgd2UgdGwucmV2ZXJzZSgpLi4udGhlIGdvYWwgaXMgdG8gaGF2ZSBvYmoueCByZXZlcnQgdG8gMC4gSWYgdGhlIHBsYXloZWFkIGhhcHBlbnMgdG8gbGFuZCBvbiBleGFjdGx5IDAsIHdpdGhvdXQgdGhpcyBjaHVuayBvZiBjb2RlLCBpdCdkIGNvbXBsZXRlIHRoZSB0aW1lbGluZSBhbmQgcmVtb3ZlIGl0IGZyb20gdGhlIHJlbmRlcmluZyBxdWV1ZSAobm90IGdvb2QpLlxuXHRcdFx0XHRcdFx0dHdlZW4gPSB0aGlzLl9maXJzdDtcblx0XHRcdFx0XHRcdHdoaWxlICh0d2VlbiAmJiB0d2Vlbi5fc3RhcnRUaW1lID09PSAwKSB7XG5cdFx0XHRcdFx0XHRcdGlmICghdHdlZW4uX2R1cmF0aW9uKSB7XG5cdFx0XHRcdFx0XHRcdFx0aXNDb21wbGV0ZSA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHR3ZWVuID0gdHdlZW4uX25leHQ7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRpbWUgPSAwOyAvL3RvIGF2b2lkIG9jY2FzaW9uYWwgZmxvYXRpbmcgcG9pbnQgcm91bmRpbmcgZXJyb3JzIChjb3VsZCBjYXVzZSBwcm9ibGVtcyBlc3BlY2lhbGx5IHdpdGggemVyby1kdXJhdGlvbiB0d2VlbnMgYXQgdGhlIHZlcnkgYmVnaW5uaW5nIG9mIHRoZSB0aW1lbGluZSlcblx0XHRcdFx0XHRpZiAoIXRoaXMuX2luaXR0ZWQpIHtcblx0XHRcdFx0XHRcdGludGVybmFsRm9yY2UgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAoZHVyID09PSAwICYmIHByZXZSYXdQcmV2VGltZSA8IDApIHsgLy93aXRob3V0IHRoaXMsIHplcm8tZHVyYXRpb24gcmVwZWF0aW5nIHRpbWVsaW5lcyAobGlrZSB3aXRoIGEgc2ltcGxlIGNhbGxiYWNrIG5lc3RlZCBhdCB0aGUgdmVyeSBiZWdpbm5pbmcgYW5kIGEgcmVwZWF0RGVsYXkpIHdvdWxkbid0IHJlbmRlciB0aGUgZmlyc3QgdGltZSB0aHJvdWdoLlxuXHRcdFx0XHRcdGludGVybmFsRm9yY2UgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuX3RpbWUgPSB0aGlzLl9yYXdQcmV2VGltZSA9IHRpbWU7XG5cdFx0XHRcdGlmICghdGhpcy5fbG9ja2VkKSB7XG5cdFx0XHRcdFx0dGhpcy5fdG90YWxUaW1lID0gdGltZTtcblx0XHRcdFx0XHRpZiAodGhpcy5fcmVwZWF0ICE9PSAwKSB7XG5cdFx0XHRcdFx0XHRjeWNsZUR1cmF0aW9uID0gZHVyICsgdGhpcy5fcmVwZWF0RGVsYXk7XG5cdFx0XHRcdFx0XHR0aGlzLl9jeWNsZSA9ICh0aGlzLl90b3RhbFRpbWUgLyBjeWNsZUR1cmF0aW9uKSA+PiAwOyAvL29yaWdpbmFsbHkgX3RvdGFsVGltZSAlIGN5Y2xlRHVyYXRpb24gYnV0IGZsb2F0aW5nIHBvaW50IGVycm9ycyBjYXVzZWQgcHJvYmxlbXMsIHNvIEkgbm9ybWFsaXplZCBpdC4gKDQgJSAwLjggc2hvdWxkIGJlIDAgYnV0IGl0IGdldHMgcmVwb3J0ZWQgYXMgMC43OTk5OTk5OSEpXG5cdFx0XHRcdFx0XHRpZiAodGhpcy5fY3ljbGUgIT09IDApIGlmICh0aGlzLl9jeWNsZSA9PT0gdGhpcy5fdG90YWxUaW1lIC8gY3ljbGVEdXJhdGlvbikge1xuXHRcdFx0XHRcdFx0XHR0aGlzLl9jeWNsZS0tOyAvL290aGVyd2lzZSB3aGVuIHJlbmRlcmVkIGV4YWN0bHkgYXQgdGhlIGVuZCB0aW1lLCBpdCB3aWxsIGFjdCBhcyB0aG91Z2ggaXQgaXMgcmVwZWF0aW5nIChhdCB0aGUgYmVnaW5uaW5nKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0dGhpcy5fdGltZSA9IHRoaXMuX3RvdGFsVGltZSAtICh0aGlzLl9jeWNsZSAqIGN5Y2xlRHVyYXRpb24pO1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMuX3lveW8pIGlmICgodGhpcy5fY3ljbGUgJiAxKSAhPT0gMCkge1xuXHRcdFx0XHRcdFx0XHR0aGlzLl90aW1lID0gZHVyIC0gdGhpcy5fdGltZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmICh0aGlzLl90aW1lID4gZHVyKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuX3RpbWUgPSBkdXI7XG5cdFx0XHRcdFx0XHRcdHRpbWUgPSBkdXIgKyAwLjAwMDE7IC8vdG8gYXZvaWQgb2NjYXNpb25hbCBmbG9hdGluZyBwb2ludCByb3VuZGluZyBlcnJvclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLl90aW1lIDwgMCkge1xuXHRcdFx0XHRcdFx0XHR0aGlzLl90aW1lID0gdGltZSA9IDA7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR0aW1lID0gdGhpcy5fdGltZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMuX2N5Y2xlICE9PSBwcmV2Q3ljbGUpIGlmICghdGhpcy5fbG9ja2VkKSB7XG5cdFx0XHRcdC8qXG5cdFx0XHRcdG1ha2Ugc3VyZSBjaGlsZHJlbiBhdCB0aGUgZW5kL2JlZ2lubmluZyBvZiB0aGUgdGltZWxpbmUgYXJlIHJlbmRlcmVkIHByb3Blcmx5LiBJZiwgZm9yIGV4YW1wbGUsXG5cdFx0XHRcdGEgMy1zZWNvbmQgbG9uZyB0aW1lbGluZSByZW5kZXJlZCBhdCAyLjkgc2Vjb25kcyBwcmV2aW91c2x5LCBhbmQgbm93IHJlbmRlcnMgYXQgMy4yIHNlY29uZHMgKHdoaWNoXG5cdFx0XHRcdHdvdWxkIGdldCB0cmFuc2F0ZWQgdG8gMi44IHNlY29uZHMgaWYgdGhlIHRpbWVsaW5lIHlveW9zIG9yIDAuMiBzZWNvbmRzIGlmIGl0IGp1c3QgcmVwZWF0cyksIHRoZXJlXG5cdFx0XHRcdGNvdWxkIGJlIGEgY2FsbGJhY2sgb3IgYSBzaG9ydCB0d2VlbiB0aGF0J3MgYXQgMi45NSBvciAzIHNlY29uZHMgaW4gd2hpY2ggd291bGRuJ3QgcmVuZGVyLiBTb1xuXHRcdFx0XHR3ZSBuZWVkIHRvIHB1c2ggdGhlIHRpbWVsaW5lIHRvIHRoZSBlbmQgKGFuZC9vciBiZWdpbm5pbmcgZGVwZW5kaW5nIG9uIGl0cyB5b3lvIHZhbHVlKS4gQWxzbyB3ZSBtdXN0XG5cdFx0XHRcdGVuc3VyZSB0aGF0IHplcm8tZHVyYXRpb24gdHdlZW5zIGF0IHRoZSB2ZXJ5IGJlZ2lubmluZyBvciBlbmQgb2YgdGhlIFRpbWVsaW5lTWF4IHdvcmsuXG5cdFx0XHRcdCovXG5cdFx0XHRcdHZhciBiYWNrd2FyZHMgPSAodGhpcy5feW95byAmJiAocHJldkN5Y2xlICYgMSkgIT09IDApLFxuXHRcdFx0XHRcdHdyYXAgPSAoYmFja3dhcmRzID09PSAodGhpcy5feW95byAmJiAodGhpcy5fY3ljbGUgJiAxKSAhPT0gMCkpLFxuXHRcdFx0XHRcdHJlY1RvdGFsVGltZSA9IHRoaXMuX3RvdGFsVGltZSxcblx0XHRcdFx0XHRyZWNDeWNsZSA9IHRoaXMuX2N5Y2xlLFxuXHRcdFx0XHRcdHJlY1Jhd1ByZXZUaW1lID0gdGhpcy5fcmF3UHJldlRpbWUsXG5cdFx0XHRcdFx0cmVjVGltZSA9IHRoaXMuX3RpbWU7XG5cblx0XHRcdFx0dGhpcy5fdG90YWxUaW1lID0gcHJldkN5Y2xlICogZHVyO1xuXHRcdFx0XHRpZiAodGhpcy5fY3ljbGUgPCBwcmV2Q3ljbGUpIHtcblx0XHRcdFx0XHRiYWNrd2FyZHMgPSAhYmFja3dhcmRzO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuX3RvdGFsVGltZSArPSBkdXI7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5fdGltZSA9IHByZXZUaW1lOyAvL3RlbXBvcmFyaWx5IHJldmVydCBfdGltZSBzbyB0aGF0IHJlbmRlcigpIHJlbmRlcnMgdGhlIGNoaWxkcmVuIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBXaXRob3V0IHRoaXMsIHR3ZWVucyB3b24ndCByZXdpbmQgY29ycmVjdGx5LiBXZSBjb3VsZCBhcmhpY3RlY3QgdGhpbmdzIGluIGEgXCJjbGVhbmVyXCIgd2F5IGJ5IHNwbGl0dGluZyBvdXQgdGhlIHJlbmRlcmluZyBxdWV1ZSBpbnRvIGEgc2VwYXJhdGUgbWV0aG9kIGJ1dCBmb3IgcGVyZm9ybWFuY2UgcmVhc29ucywgd2Uga2VwdCBpdCBhbGwgaW5zaWRlIHRoaXMgbWV0aG9kLlxuXG5cdFx0XHRcdHRoaXMuX3Jhd1ByZXZUaW1lID0gKGR1ciA9PT0gMCkgPyBwcmV2UmF3UHJldlRpbWUgLSAwLjAwMDEgOiBwcmV2UmF3UHJldlRpbWU7XG5cdFx0XHRcdHRoaXMuX2N5Y2xlID0gcHJldkN5Y2xlO1xuXHRcdFx0XHR0aGlzLl9sb2NrZWQgPSB0cnVlOyAvL3ByZXZlbnRzIGNoYW5nZXMgdG8gdG90YWxUaW1lIGFuZCBza2lwcyByZXBlYXQveW95byBiZWhhdmlvciB3aGVuIHdlIHJlY3Vyc2l2ZWx5IGNhbGwgcmVuZGVyKClcblx0XHRcdFx0cHJldlRpbWUgPSAoYmFja3dhcmRzKSA/IDAgOiBkdXI7XG5cdFx0XHRcdHRoaXMucmVuZGVyKHByZXZUaW1lLCBzdXBwcmVzc0V2ZW50cywgKGR1ciA9PT0gMCkpO1xuXHRcdFx0XHRpZiAoIXN1cHByZXNzRXZlbnRzKSBpZiAoIXRoaXMuX2djKSB7XG5cdFx0XHRcdFx0aWYgKHRoaXMudmFycy5vblJlcGVhdCkge1xuXHRcdFx0XHRcdFx0dGhpcy52YXJzLm9uUmVwZWF0LmFwcGx5KHRoaXMudmFycy5vblJlcGVhdFNjb3BlIHx8IHRoaXMsIHRoaXMudmFycy5vblJlcGVhdFBhcmFtcyB8fCBfYmxhbmtBcnJheSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh3cmFwKSB7XG5cdFx0XHRcdFx0cHJldlRpbWUgPSAoYmFja3dhcmRzKSA/IGR1ciArIDAuMDAwMSA6IC0wLjAwMDE7XG5cdFx0XHRcdFx0dGhpcy5yZW5kZXIocHJldlRpbWUsIHRydWUsIGZhbHNlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLl9sb2NrZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYgKHRoaXMuX3BhdXNlZCAmJiAhcHJldlBhdXNlZCkgeyAvL2lmIHRoZSByZW5kZXIoKSB0cmlnZ2VyZWQgY2FsbGJhY2sgdGhhdCBwYXVzZWQgdGhpcyB0aW1lbGluZSwgd2Ugc2hvdWxkIGFib3J0ICh2ZXJ5IHJhcmUsIGJ1dCBwb3NzaWJsZSlcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5fdGltZSA9IHJlY1RpbWU7XG5cdFx0XHRcdHRoaXMuX3RvdGFsVGltZSA9IHJlY1RvdGFsVGltZTtcblx0XHRcdFx0dGhpcy5fY3ljbGUgPSByZWNDeWNsZTtcblx0XHRcdFx0dGhpcy5fcmF3UHJldlRpbWUgPSByZWNSYXdQcmV2VGltZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCh0aGlzLl90aW1lID09PSBwcmV2VGltZSB8fCAhdGhpcy5fZmlyc3QpICYmICFmb3JjZSAmJiAhaW50ZXJuYWxGb3JjZSkge1xuXHRcdFx0XHRpZiAocHJldlRvdGFsVGltZSAhPT0gdGhpcy5fdG90YWxUaW1lKSBpZiAodGhpcy5fb25VcGRhdGUpIGlmICghc3VwcHJlc3NFdmVudHMpIHsgLy9zbyB0aGF0IG9uVXBkYXRlIGZpcmVzIGV2ZW4gZHVyaW5nIHRoZSByZXBlYXREZWxheSAtIGFzIGxvbmcgYXMgdGhlIHRvdGFsVGltZSBjaGFuZ2VkLCB3ZSBzaG91bGQgdHJpZ2dlciBvblVwZGF0ZS5cblx0XHRcdFx0XHR0aGlzLl9vblVwZGF0ZS5hcHBseSh0aGlzLnZhcnMub25VcGRhdGVTY29wZSB8fCB0aGlzLCB0aGlzLnZhcnMub25VcGRhdGVQYXJhbXMgfHwgX2JsYW5rQXJyYXkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH0gZWxzZSBpZiAoIXRoaXMuX2luaXR0ZWQpIHtcblx0XHRcdFx0dGhpcy5faW5pdHRlZCA9IHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmICghdGhpcy5fYWN0aXZlKSBpZiAoIXRoaXMuX3BhdXNlZCAmJiB0aGlzLl90b3RhbFRpbWUgIT09IHByZXZUb3RhbFRpbWUgJiYgdGltZSA+IDApIHtcblx0XHRcdFx0dGhpcy5fYWN0aXZlID0gdHJ1ZTsgIC8vc28gdGhhdCBpZiB0aGUgdXNlciByZW5kZXJzIHRoZSB0aW1lbGluZSAoYXMgb3Bwb3NlZCB0byB0aGUgcGFyZW50IHRpbWVsaW5lIHJlbmRlcmluZyBpdCksIGl0IGlzIGZvcmNlZCB0byByZS1yZW5kZXIgYW5kIGFsaWduIGl0IHdpdGggdGhlIHByb3BlciB0aW1lL2ZyYW1lIG9uIHRoZSBuZXh0IHJlbmRlcmluZyBjeWNsZS4gTWF5YmUgdGhlIHRpbWVsaW5lIGFscmVhZHkgZmluaXNoZWQgYnV0IHRoZSB1c2VyIG1hbnVhbGx5IHJlLXJlbmRlcnMgaXQgYXMgaGFsZndheSBkb25lLCBmb3IgZXhhbXBsZS5cblx0XHRcdH1cblxuXHRcdFx0aWYgKHByZXZUb3RhbFRpbWUgPT09IDApIGlmICh0aGlzLnZhcnMub25TdGFydCkgaWYgKHRoaXMuX3RvdGFsVGltZSAhPT0gMCkgaWYgKCFzdXBwcmVzc0V2ZW50cykge1xuXHRcdFx0XHR0aGlzLnZhcnMub25TdGFydC5hcHBseSh0aGlzLnZhcnMub25TdGFydFNjb3BlIHx8IHRoaXMsIHRoaXMudmFycy5vblN0YXJ0UGFyYW1zIHx8IF9ibGFua0FycmF5KTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMuX3RpbWUgPj0gcHJldlRpbWUpIHtcblx0XHRcdFx0dHdlZW4gPSB0aGlzLl9maXJzdDtcblx0XHRcdFx0d2hpbGUgKHR3ZWVuKSB7XG5cdFx0XHRcdFx0bmV4dCA9IHR3ZWVuLl9uZXh0OyAvL3JlY29yZCBpdCBoZXJlIGJlY2F1c2UgdGhlIHZhbHVlIGNvdWxkIGNoYW5nZSBhZnRlciByZW5kZXJpbmcuLi5cblx0XHRcdFx0XHRpZiAodGhpcy5fcGF1c2VkICYmICFwcmV2UGF1c2VkKSB7IC8vaW4gY2FzZSBhIHR3ZWVuIHBhdXNlcyB0aGUgdGltZWxpbmUgd2hlbiByZW5kZXJpbmdcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAodHdlZW4uX2FjdGl2ZSB8fCAodHdlZW4uX3N0YXJ0VGltZSA8PSB0aGlzLl90aW1lICYmICF0d2Vlbi5fcGF1c2VkICYmICF0d2Vlbi5fZ2MpKSB7XG5cdFx0XHRcdFx0XHRpZiAoIXR3ZWVuLl9yZXZlcnNlZCkge1xuXHRcdFx0XHRcdFx0XHR0d2Vlbi5yZW5kZXIoKHRpbWUgLSB0d2Vlbi5fc3RhcnRUaW1lKSAqIHR3ZWVuLl90aW1lU2NhbGUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR0d2Vlbi5yZW5kZXIoKCghdHdlZW4uX2RpcnR5KSA/IHR3ZWVuLl90b3RhbER1cmF0aW9uIDogdHdlZW4udG90YWxEdXJhdGlvbigpKSAtICgodGltZSAtIHR3ZWVuLl9zdGFydFRpbWUpICogdHdlZW4uX3RpbWVTY2FsZSksIHN1cHByZXNzRXZlbnRzLCBmb3JjZSk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dHdlZW4gPSBuZXh0O1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0d2VlbiA9IHRoaXMuX2xhc3Q7XG5cdFx0XHRcdHdoaWxlICh0d2Vlbikge1xuXHRcdFx0XHRcdG5leHQgPSB0d2Vlbi5fcHJldjsgLy9yZWNvcmQgaXQgaGVyZSBiZWNhdXNlIHRoZSB2YWx1ZSBjb3VsZCBjaGFuZ2UgYWZ0ZXIgcmVuZGVyaW5nLi4uXG5cdFx0XHRcdFx0aWYgKHRoaXMuX3BhdXNlZCAmJiAhcHJldlBhdXNlZCkgeyAvL2luIGNhc2UgYSB0d2VlbiBwYXVzZXMgdGhlIHRpbWVsaW5lIHdoZW4gcmVuZGVyaW5nXG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHR3ZWVuLl9hY3RpdmUgfHwgKHR3ZWVuLl9zdGFydFRpbWUgPD0gcHJldlRpbWUgJiYgIXR3ZWVuLl9wYXVzZWQgJiYgIXR3ZWVuLl9nYykpIHtcblx0XHRcdFx0XHRcdGlmICghdHdlZW4uX3JldmVyc2VkKSB7XG5cdFx0XHRcdFx0XHRcdHR3ZWVuLnJlbmRlcigodGltZSAtIHR3ZWVuLl9zdGFydFRpbWUpICogdHdlZW4uX3RpbWVTY2FsZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHR3ZWVuLnJlbmRlcigoKCF0d2Vlbi5fZGlydHkpID8gdHdlZW4uX3RvdGFsRHVyYXRpb24gOiB0d2Vlbi50b3RhbER1cmF0aW9uKCkpIC0gKCh0aW1lIC0gdHdlZW4uX3N0YXJ0VGltZSkgKiB0d2Vlbi5fdGltZVNjYWxlKSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dHdlZW4gPSBuZXh0O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLl9vblVwZGF0ZSkgaWYgKCFzdXBwcmVzc0V2ZW50cykge1xuXHRcdFx0XHRpZiAoX2xhenlUd2VlbnMubGVuZ3RoKSB7IC8vaW4gY2FzZSByZW5kZXJpbmcgY2F1c2VkIGFueSB0d2VlbnMgdG8gbGF6eS1pbml0LCB3ZSBzaG91bGQgcmVuZGVyIHRoZW0gYmVjYXVzZSB0eXBpY2FsbHkgd2hlbiBhIHRpbWVsaW5lIGZpbmlzaGVzLCB1c2VycyBleHBlY3QgdGhpbmdzIHRvIGhhdmUgcmVuZGVyZWQgZnVsbHkuIEltYWdpbmUgYW4gb25VcGRhdGUgb24gYSB0aW1lbGluZSB0aGF0IHJlcG9ydHMvY2hlY2tzIHR3ZWVuZWQgdmFsdWVzLlxuXHRcdFx0XHRcdF9sYXp5UmVuZGVyKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5fb25VcGRhdGUuYXBwbHkodGhpcy52YXJzLm9uVXBkYXRlU2NvcGUgfHwgdGhpcywgdGhpcy52YXJzLm9uVXBkYXRlUGFyYW1zIHx8IF9ibGFua0FycmF5KTtcblx0XHRcdH1cblx0XHRcdGlmIChjYWxsYmFjaykgaWYgKCF0aGlzLl9sb2NrZWQpIGlmICghdGhpcy5fZ2MpIGlmIChwcmV2U3RhcnQgPT09IHRoaXMuX3N0YXJ0VGltZSB8fCBwcmV2VGltZVNjYWxlICE9PSB0aGlzLl90aW1lU2NhbGUpIGlmICh0aGlzLl90aW1lID09PSAwIHx8IHRvdGFsRHVyID49IHRoaXMudG90YWxEdXJhdGlvbigpKSB7IC8vaWYgb25lIG9mIHRoZSB0d2VlbnMgdGhhdCB3YXMgcmVuZGVyZWQgYWx0ZXJlZCB0aGlzIHRpbWVsaW5lJ3Mgc3RhcnRUaW1lIChsaWtlIGlmIGFuIG9uQ29tcGxldGUgcmV2ZXJzZWQgdGhlIHRpbWVsaW5lKSwgaXQgcHJvYmFibHkgaXNuJ3QgY29tcGxldGUuIElmIGl0IGlzLCBkb24ndCB3b3JyeSwgYmVjYXVzZSB3aGF0ZXZlciBjYWxsIGFsdGVyZWQgdGhlIHN0YXJ0VGltZSB3b3VsZCBjb21wbGV0ZSBpZiBpdCB3YXMgbmVjZXNzYXJ5IGF0IHRoZSBuZXcgdGltZS4gVGhlIG9ubHkgZXhjZXB0aW9uIGlzIHRoZSB0aW1lU2NhbGUgcHJvcGVydHkuIEFsc28gY2hlY2sgX2djIGJlY2F1c2UgdGhlcmUncyBhIGNoYW5jZSB0aGF0IGtpbGwoKSBjb3VsZCBiZSBjYWxsZWQgaW4gYW4gb25VcGRhdGVcblx0XHRcdFx0aWYgKGlzQ29tcGxldGUpIHtcblx0XHRcdFx0XHRpZiAoX2xhenlUd2VlbnMubGVuZ3RoKSB7IC8vaW4gY2FzZSByZW5kZXJpbmcgY2F1c2VkIGFueSB0d2VlbnMgdG8gbGF6eS1pbml0LCB3ZSBzaG91bGQgcmVuZGVyIHRoZW0gYmVjYXVzZSB0eXBpY2FsbHkgd2hlbiBhIHRpbWVsaW5lIGZpbmlzaGVzLCB1c2VycyBleHBlY3QgdGhpbmdzIHRvIGhhdmUgcmVuZGVyZWQgZnVsbHkuIEltYWdpbmUgYW4gb25Db21wbGV0ZSBvbiBhIHRpbWVsaW5lIHRoYXQgcmVwb3J0cy9jaGVja3MgdHdlZW5lZCB2YWx1ZXMuXG5cdFx0XHRcdFx0XHRfbGF6eVJlbmRlcigpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAodGhpcy5fdGltZWxpbmUuYXV0b1JlbW92ZUNoaWxkcmVuKSB7XG5cdFx0XHRcdFx0XHR0aGlzLl9lbmFibGVkKGZhbHNlLCBmYWxzZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuX2FjdGl2ZSA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghc3VwcHJlc3NFdmVudHMgJiYgdGhpcy52YXJzW2NhbGxiYWNrXSkge1xuXHRcdFx0XHRcdHRoaXMudmFyc1tjYWxsYmFja10uYXBwbHkodGhpcy52YXJzW2NhbGxiYWNrICsgXCJTY29wZVwiXSB8fCB0aGlzLCB0aGlzLnZhcnNbY2FsbGJhY2sgKyBcIlBhcmFtc1wiXSB8fCBfYmxhbmtBcnJheSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0cC5nZXRBY3RpdmUgPSBmdW5jdGlvbihuZXN0ZWQsIHR3ZWVucywgdGltZWxpbmVzKSB7XG5cdFx0XHRpZiAobmVzdGVkID09IG51bGwpIHtcblx0XHRcdFx0bmVzdGVkID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdGlmICh0d2VlbnMgPT0gbnVsbCkge1xuXHRcdFx0XHR0d2VlbnMgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRpbWVsaW5lcyA9PSBudWxsKSB7XG5cdFx0XHRcdHRpbWVsaW5lcyA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0dmFyIGEgPSBbXSxcblx0XHRcdFx0YWxsID0gdGhpcy5nZXRDaGlsZHJlbihuZXN0ZWQsIHR3ZWVucywgdGltZWxpbmVzKSxcblx0XHRcdFx0Y250ID0gMCxcblx0XHRcdFx0bCA9IGFsbC5sZW5ndGgsXG5cdFx0XHRcdGksIHR3ZWVuO1xuXHRcdFx0Zm9yIChpID0gMDsgaSA8IGw7IGkrKykge1xuXHRcdFx0XHR0d2VlbiA9IGFsbFtpXTtcblx0XHRcdFx0aWYgKHR3ZWVuLmlzQWN0aXZlKCkpIHtcblx0XHRcdFx0XHRhW2NudCsrXSA9IHR3ZWVuO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gYTtcblx0XHR9O1xuXG5cblx0XHRwLmdldExhYmVsQWZ0ZXIgPSBmdW5jdGlvbih0aW1lKSB7XG5cdFx0XHRpZiAoIXRpbWUpIGlmICh0aW1lICE9PSAwKSB7IC8vZmFzdGVyIHRoYW4gaXNOYW4oKVxuXHRcdFx0XHR0aW1lID0gdGhpcy5fdGltZTtcblx0XHRcdH1cblx0XHRcdHZhciBsYWJlbHMgPSB0aGlzLmdldExhYmVsc0FycmF5KCksXG5cdFx0XHRcdGwgPSBsYWJlbHMubGVuZ3RoLFxuXHRcdFx0XHRpO1xuXHRcdFx0Zm9yIChpID0gMDsgaSA8IGw7IGkrKykge1xuXHRcdFx0XHRpZiAobGFiZWxzW2ldLnRpbWUgPiB0aW1lKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGxhYmVsc1tpXS5uYW1lO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9O1xuXG5cdFx0cC5nZXRMYWJlbEJlZm9yZSA9IGZ1bmN0aW9uKHRpbWUpIHtcblx0XHRcdGlmICh0aW1lID09IG51bGwpIHtcblx0XHRcdFx0dGltZSA9IHRoaXMuX3RpbWU7XG5cdFx0XHR9XG5cdFx0XHR2YXIgbGFiZWxzID0gdGhpcy5nZXRMYWJlbHNBcnJheSgpLFxuXHRcdFx0XHRpID0gbGFiZWxzLmxlbmd0aDtcblx0XHRcdHdoaWxlICgtLWkgPiAtMSkge1xuXHRcdFx0XHRpZiAobGFiZWxzW2ldLnRpbWUgPCB0aW1lKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGxhYmVsc1tpXS5uYW1lO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9O1xuXG5cdFx0cC5nZXRMYWJlbHNBcnJheSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGEgPSBbXSxcblx0XHRcdFx0Y250ID0gMCxcblx0XHRcdFx0cDtcblx0XHRcdGZvciAocCBpbiB0aGlzLl9sYWJlbHMpIHtcblx0XHRcdFx0YVtjbnQrK10gPSB7dGltZTp0aGlzLl9sYWJlbHNbcF0sIG5hbWU6cH07XG5cdFx0XHR9XG5cdFx0XHRhLnNvcnQoZnVuY3Rpb24oYSxiKSB7XG5cdFx0XHRcdHJldHVybiBhLnRpbWUgLSBiLnRpbWU7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBhO1xuXHRcdH07XG5cblxuLy8tLS0tIEdFVFRFUlMgLyBTRVRURVJTIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdHAucHJvZ3Jlc3MgPSBmdW5jdGlvbih2YWx1ZSwgc3VwcHJlc3NFdmVudHMpIHtcblx0XHRcdHJldHVybiAoIWFyZ3VtZW50cy5sZW5ndGgpID8gdGhpcy5fdGltZSAvIHRoaXMuZHVyYXRpb24oKSA6IHRoaXMudG90YWxUaW1lKCB0aGlzLmR1cmF0aW9uKCkgKiAoKHRoaXMuX3lveW8gJiYgKHRoaXMuX2N5Y2xlICYgMSkgIT09IDApID8gMSAtIHZhbHVlIDogdmFsdWUpICsgKHRoaXMuX2N5Y2xlICogKHRoaXMuX2R1cmF0aW9uICsgdGhpcy5fcmVwZWF0RGVsYXkpKSwgc3VwcHJlc3NFdmVudHMpO1xuXHRcdH07XG5cblx0XHRwLnRvdGFsUHJvZ3Jlc3MgPSBmdW5jdGlvbih2YWx1ZSwgc3VwcHJlc3NFdmVudHMpIHtcblx0XHRcdHJldHVybiAoIWFyZ3VtZW50cy5sZW5ndGgpID8gdGhpcy5fdG90YWxUaW1lIC8gdGhpcy50b3RhbER1cmF0aW9uKCkgOiB0aGlzLnRvdGFsVGltZSggdGhpcy50b3RhbER1cmF0aW9uKCkgKiB2YWx1ZSwgc3VwcHJlc3NFdmVudHMpO1xuXHRcdH07XG5cblx0XHRwLnRvdGFsRHVyYXRpb24gPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRcdGlmICh0aGlzLl9kaXJ0eSkge1xuXHRcdFx0XHRcdFRpbWVsaW5lTGl0ZS5wcm90b3R5cGUudG90YWxEdXJhdGlvbi5jYWxsKHRoaXMpOyAvL2p1c3QgZm9yY2VzIHJlZnJlc2hcblx0XHRcdFx0XHQvL0luc3RlYWQgb2YgSW5maW5pdHksIHdlIHVzZSA5OTk5OTk5OTk5OTkgc28gdGhhdCB3ZSBjYW4gYWNjb21tb2RhdGUgcmV2ZXJzZXMuXG5cdFx0XHRcdFx0dGhpcy5fdG90YWxEdXJhdGlvbiA9ICh0aGlzLl9yZXBlYXQgPT09IC0xKSA/IDk5OTk5OTk5OTk5OSA6IHRoaXMuX2R1cmF0aW9uICogKHRoaXMuX3JlcGVhdCArIDEpICsgKHRoaXMuX3JlcGVhdERlbGF5ICogdGhpcy5fcmVwZWF0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdGhpcy5fdG90YWxEdXJhdGlvbjtcblx0XHRcdH1cblx0XHRcdHJldHVybiAodGhpcy5fcmVwZWF0ID09PSAtMSkgPyB0aGlzIDogdGhpcy5kdXJhdGlvbiggKHZhbHVlIC0gKHRoaXMuX3JlcGVhdCAqIHRoaXMuX3JlcGVhdERlbGF5KSkgLyAodGhpcy5fcmVwZWF0ICsgMSkgKTtcblx0XHR9O1xuXG5cdFx0cC50aW1lID0gZnVuY3Rpb24odmFsdWUsIHN1cHByZXNzRXZlbnRzKSB7XG5cdFx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX3RpbWU7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5fZGlydHkpIHtcblx0XHRcdFx0dGhpcy50b3RhbER1cmF0aW9uKCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodmFsdWUgPiB0aGlzLl9kdXJhdGlvbikge1xuXHRcdFx0XHR2YWx1ZSA9IHRoaXMuX2R1cmF0aW9uO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuX3lveW8gJiYgKHRoaXMuX2N5Y2xlICYgMSkgIT09IDApIHtcblx0XHRcdFx0dmFsdWUgPSAodGhpcy5fZHVyYXRpb24gLSB2YWx1ZSkgKyAodGhpcy5fY3ljbGUgKiAodGhpcy5fZHVyYXRpb24gKyB0aGlzLl9yZXBlYXREZWxheSkpO1xuXHRcdFx0fSBlbHNlIGlmICh0aGlzLl9yZXBlYXQgIT09IDApIHtcblx0XHRcdFx0dmFsdWUgKz0gdGhpcy5fY3ljbGUgKiAodGhpcy5fZHVyYXRpb24gKyB0aGlzLl9yZXBlYXREZWxheSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcy50b3RhbFRpbWUodmFsdWUsIHN1cHByZXNzRXZlbnRzKTtcblx0XHR9O1xuXG5cdFx0cC5yZXBlYXQgPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLl9yZXBlYXQ7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl9yZXBlYXQgPSB2YWx1ZTtcblx0XHRcdHJldHVybiB0aGlzLl91bmNhY2hlKHRydWUpO1xuXHRcdH07XG5cblx0XHRwLnJlcGVhdERlbGF5ID0gZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fcmVwZWF0RGVsYXk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl9yZXBlYXREZWxheSA9IHZhbHVlO1xuXHRcdFx0cmV0dXJuIHRoaXMuX3VuY2FjaGUodHJ1ZSk7XG5cdFx0fTtcblxuXHRcdHAueW95byA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX3lveW87XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl95b3lvID0gdmFsdWU7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9O1xuXG5cdFx0cC5jdXJyZW50TGFiZWwgPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmdldExhYmVsQmVmb3JlKHRoaXMuX3RpbWUgKyAwLjAwMDAwMDAxKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzLnNlZWsodmFsdWUsIHRydWUpO1xuXHRcdH07XG5cblx0XHRyZXR1cm4gVGltZWxpbmVNYXg7XG5cblx0fSwgdHJ1ZSk7XG5cdFxuXG5cblxuXG5cdFxuXHRcblx0XG5cdFxuXHRcblx0XG5cdFxuLypcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJlemllclBsdWdpblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cdChmdW5jdGlvbigpIHtcblxuXHRcdHZhciBfUkFEMkRFRyA9IDE4MCAvIE1hdGguUEksXG5cdFx0XHRfcjEgPSBbXSxcblx0XHRcdF9yMiA9IFtdLFxuXHRcdFx0X3IzID0gW10sXG5cdFx0XHRfY29yUHJvcHMgPSB7fSxcblx0XHRcdF9nbG9iYWxzID0gX2dzU2NvcGUuX2dzRGVmaW5lLmdsb2JhbHMsXG5cdFx0XHRTZWdtZW50ID0gZnVuY3Rpb24oYSwgYiwgYywgZCkge1xuXHRcdFx0XHR0aGlzLmEgPSBhO1xuXHRcdFx0XHR0aGlzLmIgPSBiO1xuXHRcdFx0XHR0aGlzLmMgPSBjO1xuXHRcdFx0XHR0aGlzLmQgPSBkO1xuXHRcdFx0XHR0aGlzLmRhID0gZCAtIGE7XG5cdFx0XHRcdHRoaXMuY2EgPSBjIC0gYTtcblx0XHRcdFx0dGhpcy5iYSA9IGIgLSBhO1xuXHRcdFx0fSxcblx0XHRcdF9jb3JyZWxhdGUgPSBcIix4LHkseixsZWZ0LHRvcCxyaWdodCxib3R0b20sbWFyZ2luVG9wLG1hcmdpbkxlZnQsbWFyZ2luUmlnaHQsbWFyZ2luQm90dG9tLHBhZGRpbmdMZWZ0LHBhZGRpbmdUb3AscGFkZGluZ1JpZ2h0LHBhZGRpbmdCb3R0b20sYmFja2dyb3VuZFBvc2l0aW9uLGJhY2tncm91bmRQb3NpdGlvbl95LFwiLFxuXHRcdFx0Y3ViaWNUb1F1YWRyYXRpYyA9IGZ1bmN0aW9uKGEsIGIsIGMsIGQpIHtcblx0XHRcdFx0dmFyIHExID0ge2E6YX0sXG5cdFx0XHRcdFx0cTIgPSB7fSxcblx0XHRcdFx0XHRxMyA9IHt9LFxuXHRcdFx0XHRcdHE0ID0ge2M6ZH0sXG5cdFx0XHRcdFx0bWFiID0gKGEgKyBiKSAvIDIsXG5cdFx0XHRcdFx0bWJjID0gKGIgKyBjKSAvIDIsXG5cdFx0XHRcdFx0bWNkID0gKGMgKyBkKSAvIDIsXG5cdFx0XHRcdFx0bWFiYyA9IChtYWIgKyBtYmMpIC8gMixcblx0XHRcdFx0XHRtYmNkID0gKG1iYyArIG1jZCkgLyAyLFxuXHRcdFx0XHRcdG04ID0gKG1iY2QgLSBtYWJjKSAvIDg7XG5cdFx0XHRcdHExLmIgPSBtYWIgKyAoYSAtIG1hYikgLyA0O1xuXHRcdFx0XHRxMi5iID0gbWFiYyArIG04O1xuXHRcdFx0XHRxMS5jID0gcTIuYSA9IChxMS5iICsgcTIuYikgLyAyO1xuXHRcdFx0XHRxMi5jID0gcTMuYSA9IChtYWJjICsgbWJjZCkgLyAyO1xuXHRcdFx0XHRxMy5iID0gbWJjZCAtIG04O1xuXHRcdFx0XHRxNC5iID0gbWNkICsgKGQgLSBtY2QpIC8gNDtcblx0XHRcdFx0cTMuYyA9IHE0LmEgPSAocTMuYiArIHE0LmIpIC8gMjtcblx0XHRcdFx0cmV0dXJuIFtxMSwgcTIsIHEzLCBxNF07XG5cdFx0XHR9LFxuXHRcdFx0X2NhbGN1bGF0ZUNvbnRyb2xQb2ludHMgPSBmdW5jdGlvbihhLCBjdXJ2aW5lc3MsIHF1YWQsIGJhc2ljLCBjb3JyZWxhdGUpIHtcblx0XHRcdFx0dmFyIGwgPSBhLmxlbmd0aCAtIDEsXG5cdFx0XHRcdFx0aWkgPSAwLFxuXHRcdFx0XHRcdGNwMSA9IGFbMF0uYSxcblx0XHRcdFx0XHRpLCBwMSwgcDIsIHAzLCBzZWcsIG0xLCBtMiwgbW0sIGNwMiwgcWIsIHIxLCByMiwgdGw7XG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcblx0XHRcdFx0XHRzZWcgPSBhW2lpXTtcblx0XHRcdFx0XHRwMSA9IHNlZy5hO1xuXHRcdFx0XHRcdHAyID0gc2VnLmQ7XG5cdFx0XHRcdFx0cDMgPSBhW2lpKzFdLmQ7XG5cblx0XHRcdFx0XHRpZiAoY29ycmVsYXRlKSB7XG5cdFx0XHRcdFx0XHRyMSA9IF9yMVtpXTtcblx0XHRcdFx0XHRcdHIyID0gX3IyW2ldO1xuXHRcdFx0XHRcdFx0dGwgPSAoKHIyICsgcjEpICogY3VydmluZXNzICogMC4yNSkgLyAoYmFzaWMgPyAwLjUgOiBfcjNbaV0gfHwgMC41KTtcblx0XHRcdFx0XHRcdG0xID0gcDIgLSAocDIgLSBwMSkgKiAoYmFzaWMgPyBjdXJ2aW5lc3MgKiAwLjUgOiAocjEgIT09IDAgPyB0bCAvIHIxIDogMCkpO1xuXHRcdFx0XHRcdFx0bTIgPSBwMiArIChwMyAtIHAyKSAqIChiYXNpYyA/IGN1cnZpbmVzcyAqIDAuNSA6IChyMiAhPT0gMCA/IHRsIC8gcjIgOiAwKSk7XG5cdFx0XHRcdFx0XHRtbSA9IHAyIC0gKG0xICsgKCgobTIgLSBtMSkgKiAoKHIxICogMyAvIChyMSArIHIyKSkgKyAwLjUpIC8gNCkgfHwgMCkpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRtMSA9IHAyIC0gKHAyIC0gcDEpICogY3VydmluZXNzICogMC41O1xuXHRcdFx0XHRcdFx0bTIgPSBwMiArIChwMyAtIHAyKSAqIGN1cnZpbmVzcyAqIDAuNTtcblx0XHRcdFx0XHRcdG1tID0gcDIgLSAobTEgKyBtMikgLyAyO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRtMSArPSBtbTtcblx0XHRcdFx0XHRtMiArPSBtbTtcblxuXHRcdFx0XHRcdHNlZy5jID0gY3AyID0gbTE7XG5cdFx0XHRcdFx0aWYgKGkgIT09IDApIHtcblx0XHRcdFx0XHRcdHNlZy5iID0gY3AxO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRzZWcuYiA9IGNwMSA9IHNlZy5hICsgKHNlZy5jIC0gc2VnLmEpICogMC42OyAvL2luc3RlYWQgb2YgcGxhY2luZyBiIG9uIGEgZXhhY3RseSwgd2UgbW92ZSBpdCBpbmxpbmUgd2l0aCBjIHNvIHRoYXQgaWYgdGhlIHVzZXIgc3BlY2lmaWVzIGFuIGVhc2UgbGlrZSBCYWNrLmVhc2VJbiBvciBFbGFzdGljLmVhc2VJbiB3aGljaCBnb2VzIEJFWU9ORCB0aGUgYmVnaW5uaW5nLCBpdCB3aWxsIGRvIHNvIHNtb290aGx5LlxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHNlZy5kYSA9IHAyIC0gcDE7XG5cdFx0XHRcdFx0c2VnLmNhID0gY3AyIC0gcDE7XG5cdFx0XHRcdFx0c2VnLmJhID0gY3AxIC0gcDE7XG5cblx0XHRcdFx0XHRpZiAocXVhZCkge1xuXHRcdFx0XHRcdFx0cWIgPSBjdWJpY1RvUXVhZHJhdGljKHAxLCBjcDEsIGNwMiwgcDIpO1xuXHRcdFx0XHRcdFx0YS5zcGxpY2UoaWksIDEsIHFiWzBdLCBxYlsxXSwgcWJbMl0sIHFiWzNdKTtcblx0XHRcdFx0XHRcdGlpICs9IDQ7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGlpKys7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Y3AxID0gbTI7XG5cdFx0XHRcdH1cblx0XHRcdFx0c2VnID0gYVtpaV07XG5cdFx0XHRcdHNlZy5iID0gY3AxO1xuXHRcdFx0XHRzZWcuYyA9IGNwMSArIChzZWcuZCAtIGNwMSkgKiAwLjQ7IC8vaW5zdGVhZCBvZiBwbGFjaW5nIGMgb24gZCBleGFjdGx5LCB3ZSBtb3ZlIGl0IGlubGluZSB3aXRoIGIgc28gdGhhdCBpZiB0aGUgdXNlciBzcGVjaWZpZXMgYW4gZWFzZSBsaWtlIEJhY2suZWFzZU91dCBvciBFbGFzdGljLmVhc2VPdXQgd2hpY2ggZ29lcyBCRVlPTkQgdGhlIGVuZCwgaXQgd2lsbCBkbyBzbyBzbW9vdGhseS5cblx0XHRcdFx0c2VnLmRhID0gc2VnLmQgLSBzZWcuYTtcblx0XHRcdFx0c2VnLmNhID0gc2VnLmMgLSBzZWcuYTtcblx0XHRcdFx0c2VnLmJhID0gY3AxIC0gc2VnLmE7XG5cdFx0XHRcdGlmIChxdWFkKSB7XG5cdFx0XHRcdFx0cWIgPSBjdWJpY1RvUXVhZHJhdGljKHNlZy5hLCBjcDEsIHNlZy5jLCBzZWcuZCk7XG5cdFx0XHRcdFx0YS5zcGxpY2UoaWksIDEsIHFiWzBdLCBxYlsxXSwgcWJbMl0sIHFiWzNdKTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdF9wYXJzZUFuY2hvcnMgPSBmdW5jdGlvbih2YWx1ZXMsIHAsIGNvcnJlbGF0ZSwgcHJlcGVuZCkge1xuXHRcdFx0XHR2YXIgYSA9IFtdLFxuXHRcdFx0XHRcdGwsIGksIHAxLCBwMiwgcDMsIHRtcDtcblx0XHRcdFx0aWYgKHByZXBlbmQpIHtcblx0XHRcdFx0XHR2YWx1ZXMgPSBbcHJlcGVuZF0uY29uY2F0KHZhbHVlcyk7XG5cdFx0XHRcdFx0aSA9IHZhbHVlcy5sZW5ndGg7XG5cdFx0XHRcdFx0d2hpbGUgKC0taSA+IC0xKSB7XG5cdFx0XHRcdFx0XHRpZiAodHlwZW9mKCAodG1wID0gdmFsdWVzW2ldW3BdKSApID09PSBcInN0cmluZ1wiKSBpZiAodG1wLmNoYXJBdCgxKSA9PT0gXCI9XCIpIHtcblx0XHRcdFx0XHRcdFx0dmFsdWVzW2ldW3BdID0gcHJlcGVuZFtwXSArIE51bWJlcih0bXAuY2hhckF0KDApICsgdG1wLnN1YnN0cigyKSk7IC8vYWNjb21tb2RhdGUgcmVsYXRpdmUgdmFsdWVzLiBEbyBpdCBpbmxpbmUgaW5zdGVhZCBvZiBicmVha2luZyBpdCBvdXQgaW50byBhIGZ1bmN0aW9uIGZvciBzcGVlZCByZWFzb25zXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGwgPSB2YWx1ZXMubGVuZ3RoIC0gMjtcblx0XHRcdFx0aWYgKGwgPCAwKSB7XG5cdFx0XHRcdFx0YVswXSA9IG5ldyBTZWdtZW50KHZhbHVlc1swXVtwXSwgMCwgMCwgdmFsdWVzWyhsIDwgLTEpID8gMCA6IDFdW3BdKTtcblx0XHRcdFx0XHRyZXR1cm4gYTtcblx0XHRcdFx0fVxuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XG5cdFx0XHRcdFx0cDEgPSB2YWx1ZXNbaV1bcF07XG5cdFx0XHRcdFx0cDIgPSB2YWx1ZXNbaSsxXVtwXTtcblx0XHRcdFx0XHRhW2ldID0gbmV3IFNlZ21lbnQocDEsIDAsIDAsIHAyKTtcblx0XHRcdFx0XHRpZiAoY29ycmVsYXRlKSB7XG5cdFx0XHRcdFx0XHRwMyA9IHZhbHVlc1tpKzJdW3BdO1xuXHRcdFx0XHRcdFx0X3IxW2ldID0gKF9yMVtpXSB8fCAwKSArIChwMiAtIHAxKSAqIChwMiAtIHAxKTtcblx0XHRcdFx0XHRcdF9yMltpXSA9IChfcjJbaV0gfHwgMCkgKyAocDMgLSBwMikgKiAocDMgLSBwMik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGFbaV0gPSBuZXcgU2VnbWVudCh2YWx1ZXNbaV1bcF0sIDAsIDAsIHZhbHVlc1tpKzFdW3BdKTtcblx0XHRcdFx0cmV0dXJuIGE7XG5cdFx0XHR9LFxuXHRcdFx0YmV6aWVyVGhyb3VnaCA9IGZ1bmN0aW9uKHZhbHVlcywgY3VydmluZXNzLCBxdWFkcmF0aWMsIGJhc2ljLCBjb3JyZWxhdGUsIHByZXBlbmQpIHtcblx0XHRcdFx0dmFyIG9iaiA9IHt9LFxuXHRcdFx0XHRcdHByb3BzID0gW10sXG5cdFx0XHRcdFx0Zmlyc3QgPSBwcmVwZW5kIHx8IHZhbHVlc1swXSxcblx0XHRcdFx0XHRpLCBwLCBhLCBqLCByLCBsLCBzZWFtbGVzcywgbGFzdDtcblx0XHRcdFx0Y29ycmVsYXRlID0gKHR5cGVvZihjb3JyZWxhdGUpID09PSBcInN0cmluZ1wiKSA/IFwiLFwiK2NvcnJlbGF0ZStcIixcIiA6IF9jb3JyZWxhdGU7XG5cdFx0XHRcdGlmIChjdXJ2aW5lc3MgPT0gbnVsbCkge1xuXHRcdFx0XHRcdGN1cnZpbmVzcyA9IDE7XG5cdFx0XHRcdH1cblx0XHRcdFx0Zm9yIChwIGluIHZhbHVlc1swXSkge1xuXHRcdFx0XHRcdHByb3BzLnB1c2gocCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly9jaGVjayB0byBzZWUgaWYgdGhlIGxhc3QgYW5kIGZpcnN0IHZhbHVlcyBhcmUgaWRlbnRpY2FsICh3ZWxsLCB3aXRoaW4gMC4wNSkuIElmIHNvLCBtYWtlIHNlYW1sZXNzIGJ5IGFwcGVuZGluZyB0aGUgc2Vjb25kIGVsZW1lbnQgdG8gdGhlIHZlcnkgZW5kIG9mIHRoZSB2YWx1ZXMgYXJyYXkgYW5kIHRoZSAybmQtdG8tbGFzdCBlbGVtZW50IHRvIHRoZSB2ZXJ5IGJlZ2lubmluZyAod2UnbGwgcmVtb3ZlIHRob3NlIHNlZ21lbnRzIGxhdGVyKVxuXHRcdFx0XHRpZiAodmFsdWVzLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0XHRsYXN0ID0gdmFsdWVzW3ZhbHVlcy5sZW5ndGggLSAxXTtcblx0XHRcdFx0XHRzZWFtbGVzcyA9IHRydWU7XG5cdFx0XHRcdFx0aSA9IHByb3BzLmxlbmd0aDtcblx0XHRcdFx0XHR3aGlsZSAoLS1pID4gLTEpIHtcblx0XHRcdFx0XHRcdHAgPSBwcm9wc1tpXTtcblx0XHRcdFx0XHRcdGlmIChNYXRoLmFicyhmaXJzdFtwXSAtIGxhc3RbcF0pID4gMC4wNSkgeyAvL2J1aWxkIGluIGEgdG9sZXJhbmNlIG9mICsvLTAuMDUgdG8gYWNjb21tb2RhdGUgcm91bmRpbmcgZXJyb3JzLiBGb3IgZXhhbXBsZSwgaWYgeW91IHNldCBhbiBvYmplY3QncyBwb3NpdGlvbiB0byA0Ljk0NSwgRmxhc2ggd2lsbCBtYWtlIGl0IDQuOVxuXHRcdFx0XHRcdFx0XHRzZWFtbGVzcyA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHNlYW1sZXNzKSB7XG5cdFx0XHRcdFx0XHR2YWx1ZXMgPSB2YWx1ZXMuY29uY2F0KCk7IC8vZHVwbGljYXRlIHRoZSBhcnJheSB0byBhdm9pZCBjb250YW1pbmF0aW5nIHRoZSBvcmlnaW5hbCB3aGljaCB0aGUgdXNlciBtYXkgYmUgcmV1c2luZyBmb3Igb3RoZXIgdHdlZW5zXG5cdFx0XHRcdFx0XHRpZiAocHJlcGVuZCkge1xuXHRcdFx0XHRcdFx0XHR2YWx1ZXMudW5zaGlmdChwcmVwZW5kKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHZhbHVlcy5wdXNoKHZhbHVlc1sxXSk7XG5cdFx0XHRcdFx0XHRwcmVwZW5kID0gdmFsdWVzW3ZhbHVlcy5sZW5ndGggLSAzXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0X3IxLmxlbmd0aCA9IF9yMi5sZW5ndGggPSBfcjMubGVuZ3RoID0gMDtcblx0XHRcdFx0aSA9IHByb3BzLmxlbmd0aDtcblx0XHRcdFx0d2hpbGUgKC0taSA+IC0xKSB7XG5cdFx0XHRcdFx0cCA9IHByb3BzW2ldO1xuXHRcdFx0XHRcdF9jb3JQcm9wc1twXSA9IChjb3JyZWxhdGUuaW5kZXhPZihcIixcIitwK1wiLFwiKSAhPT0gLTEpO1xuXHRcdFx0XHRcdG9ialtwXSA9IF9wYXJzZUFuY2hvcnModmFsdWVzLCBwLCBfY29yUHJvcHNbcF0sIHByZXBlbmQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGkgPSBfcjEubGVuZ3RoO1xuXHRcdFx0XHR3aGlsZSAoLS1pID4gLTEpIHtcblx0XHRcdFx0XHRfcjFbaV0gPSBNYXRoLnNxcnQoX3IxW2ldKTtcblx0XHRcdFx0XHRfcjJbaV0gPSBNYXRoLnNxcnQoX3IyW2ldKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIWJhc2ljKSB7XG5cdFx0XHRcdFx0aSA9IHByb3BzLmxlbmd0aDtcblx0XHRcdFx0XHR3aGlsZSAoLS1pID4gLTEpIHtcblx0XHRcdFx0XHRcdGlmIChfY29yUHJvcHNbcF0pIHtcblx0XHRcdFx0XHRcdFx0YSA9IG9ialtwcm9wc1tpXV07XG5cdFx0XHRcdFx0XHRcdGwgPSBhLmxlbmd0aCAtIDE7XG5cdFx0XHRcdFx0XHRcdGZvciAoaiA9IDA7IGogPCBsOyBqKyspIHtcblx0XHRcdFx0XHRcdFx0XHRyID0gYVtqKzFdLmRhIC8gX3IyW2pdICsgYVtqXS5kYSAvIF9yMVtqXTtcblx0XHRcdFx0XHRcdFx0XHRfcjNbal0gPSAoX3IzW2pdIHx8IDApICsgciAqIHI7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aSA9IF9yMy5sZW5ndGg7XG5cdFx0XHRcdFx0d2hpbGUgKC0taSA+IC0xKSB7XG5cdFx0XHRcdFx0XHRfcjNbaV0gPSBNYXRoLnNxcnQoX3IzW2ldKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aSA9IHByb3BzLmxlbmd0aDtcblx0XHRcdFx0aiA9IHF1YWRyYXRpYyA/IDQgOiAxO1xuXHRcdFx0XHR3aGlsZSAoLS1pID4gLTEpIHtcblx0XHRcdFx0XHRwID0gcHJvcHNbaV07XG5cdFx0XHRcdFx0YSA9IG9ialtwXTtcblx0XHRcdFx0XHRfY2FsY3VsYXRlQ29udHJvbFBvaW50cyhhLCBjdXJ2aW5lc3MsIHF1YWRyYXRpYywgYmFzaWMsIF9jb3JQcm9wc1twXSk7IC8vdGhpcyBtZXRob2QgcmVxdWlyZXMgdGhhdCBfcGFyc2VBbmNob3JzKCkgYW5kIF9zZXRTZWdtZW50UmF0aW9zKCkgcmFuIGZpcnN0IHNvIHRoYXQgX3IxLCBfcjIsIGFuZCBfcjMgdmFsdWVzIGFyZSBwb3B1bGF0ZWQgZm9yIGFsbCBwcm9wZXJ0aWVzXG5cdFx0XHRcdFx0aWYgKHNlYW1sZXNzKSB7XG5cdFx0XHRcdFx0XHRhLnNwbGljZSgwLCBqKTtcblx0XHRcdFx0XHRcdGEuc3BsaWNlKGEubGVuZ3RoIC0gaiwgaik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBvYmo7XG5cdFx0XHR9LFxuXHRcdFx0X3BhcnNlQmV6aWVyRGF0YSA9IGZ1bmN0aW9uKHZhbHVlcywgdHlwZSwgcHJlcGVuZCkge1xuXHRcdFx0XHR0eXBlID0gdHlwZSB8fCBcInNvZnRcIjtcblx0XHRcdFx0dmFyIG9iaiA9IHt9LFxuXHRcdFx0XHRcdGluYyA9ICh0eXBlID09PSBcImN1YmljXCIpID8gMyA6IDIsXG5cdFx0XHRcdFx0c29mdCA9ICh0eXBlID09PSBcInNvZnRcIiksXG5cdFx0XHRcdFx0cHJvcHMgPSBbXSxcblx0XHRcdFx0XHRhLCBiLCBjLCBkLCBjdXIsIGksIGosIGwsIHAsIGNudCwgdG1wO1xuXHRcdFx0XHRpZiAoc29mdCAmJiBwcmVwZW5kKSB7XG5cdFx0XHRcdFx0dmFsdWVzID0gW3ByZXBlbmRdLmNvbmNhdCh2YWx1ZXMpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh2YWx1ZXMgPT0gbnVsbCB8fCB2YWx1ZXMubGVuZ3RoIDwgaW5jICsgMSkgeyB0aHJvdyBcImludmFsaWQgQmV6aWVyIGRhdGFcIjsgfVxuXHRcdFx0XHRmb3IgKHAgaW4gdmFsdWVzWzBdKSB7XG5cdFx0XHRcdFx0cHJvcHMucHVzaChwKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpID0gcHJvcHMubGVuZ3RoO1xuXHRcdFx0XHR3aGlsZSAoLS1pID4gLTEpIHtcblx0XHRcdFx0XHRwID0gcHJvcHNbaV07XG5cdFx0XHRcdFx0b2JqW3BdID0gY3VyID0gW107XG5cdFx0XHRcdFx0Y250ID0gMDtcblx0XHRcdFx0XHRsID0gdmFsdWVzLmxlbmd0aDtcblx0XHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgbDsgaisrKSB7XG5cdFx0XHRcdFx0XHRhID0gKHByZXBlbmQgPT0gbnVsbCkgPyB2YWx1ZXNbal1bcF0gOiAodHlwZW9mKCAodG1wID0gdmFsdWVzW2pdW3BdKSApID09PSBcInN0cmluZ1wiICYmIHRtcC5jaGFyQXQoMSkgPT09IFwiPVwiKSA/IHByZXBlbmRbcF0gKyBOdW1iZXIodG1wLmNoYXJBdCgwKSArIHRtcC5zdWJzdHIoMikpIDogTnVtYmVyKHRtcCk7XG5cdFx0XHRcdFx0XHRpZiAoc29mdCkgaWYgKGogPiAxKSBpZiAoaiA8IGwgLSAxKSB7XG5cdFx0XHRcdFx0XHRcdGN1cltjbnQrK10gPSAoYSArIGN1cltjbnQtMl0pIC8gMjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGN1cltjbnQrK10gPSBhO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRsID0gY250IC0gaW5jICsgMTtcblx0XHRcdFx0XHRjbnQgPSAwO1xuXHRcdFx0XHRcdGZvciAoaiA9IDA7IGogPCBsOyBqICs9IGluYykge1xuXHRcdFx0XHRcdFx0YSA9IGN1cltqXTtcblx0XHRcdFx0XHRcdGIgPSBjdXJbaisxXTtcblx0XHRcdFx0XHRcdGMgPSBjdXJbaisyXTtcblx0XHRcdFx0XHRcdGQgPSAoaW5jID09PSAyKSA/IDAgOiBjdXJbaiszXTtcblx0XHRcdFx0XHRcdGN1cltjbnQrK10gPSB0bXAgPSAoaW5jID09PSAzKSA/IG5ldyBTZWdtZW50KGEsIGIsIGMsIGQpIDogbmV3IFNlZ21lbnQoYSwgKDIgKiBiICsgYSkgLyAzLCAoMiAqIGIgKyBjKSAvIDMsIGMpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjdXIubGVuZ3RoID0gY250O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBvYmo7XG5cdFx0XHR9LFxuXHRcdFx0X2FkZEN1YmljTGVuZ3RocyA9IGZ1bmN0aW9uKGEsIHN0ZXBzLCByZXNvbHV0aW9uKSB7XG5cdFx0XHRcdHZhciBpbmMgPSAxIC8gcmVzb2x1dGlvbixcblx0XHRcdFx0XHRqID0gYS5sZW5ndGgsXG5cdFx0XHRcdFx0ZCwgZDEsIHMsIGRhLCBjYSwgYmEsIHAsIGksIGludiwgYmV6LCBpbmRleDtcblx0XHRcdFx0d2hpbGUgKC0taiA+IC0xKSB7XG5cdFx0XHRcdFx0YmV6ID0gYVtqXTtcblx0XHRcdFx0XHRzID0gYmV6LmE7XG5cdFx0XHRcdFx0ZGEgPSBiZXouZCAtIHM7XG5cdFx0XHRcdFx0Y2EgPSBiZXouYyAtIHM7XG5cdFx0XHRcdFx0YmEgPSBiZXouYiAtIHM7XG5cdFx0XHRcdFx0ZCA9IGQxID0gMDtcblx0XHRcdFx0XHRmb3IgKGkgPSAxOyBpIDw9IHJlc29sdXRpb247IGkrKykge1xuXHRcdFx0XHRcdFx0cCA9IGluYyAqIGk7XG5cdFx0XHRcdFx0XHRpbnYgPSAxIC0gcDtcblx0XHRcdFx0XHRcdGQgPSBkMSAtIChkMSA9IChwICogcCAqIGRhICsgMyAqIGludiAqIChwICogY2EgKyBpbnYgKiBiYSkpICogcCk7XG5cdFx0XHRcdFx0XHRpbmRleCA9IGogKiByZXNvbHV0aW9uICsgaSAtIDE7XG5cdFx0XHRcdFx0XHRzdGVwc1tpbmRleF0gPSAoc3RlcHNbaW5kZXhdIHx8IDApICsgZCAqIGQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0X3BhcnNlTGVuZ3RoRGF0YSA9IGZ1bmN0aW9uKG9iaiwgcmVzb2x1dGlvbikge1xuXHRcdFx0XHRyZXNvbHV0aW9uID0gcmVzb2x1dGlvbiA+PiAwIHx8IDY7XG5cdFx0XHRcdHZhciBhID0gW10sXG5cdFx0XHRcdFx0bGVuZ3RocyA9IFtdLFxuXHRcdFx0XHRcdGQgPSAwLFxuXHRcdFx0XHRcdHRvdGFsID0gMCxcblx0XHRcdFx0XHR0aHJlc2hvbGQgPSByZXNvbHV0aW9uIC0gMSxcblx0XHRcdFx0XHRzZWdtZW50cyA9IFtdLFxuXHRcdFx0XHRcdGN1ckxTID0gW10sIC8vY3VycmVudCBsZW5ndGggc2VnbWVudHMgYXJyYXlcblx0XHRcdFx0XHRwLCBpLCBsLCBpbmRleDtcblx0XHRcdFx0Zm9yIChwIGluIG9iaikge1xuXHRcdFx0XHRcdF9hZGRDdWJpY0xlbmd0aHMob2JqW3BdLCBhLCByZXNvbHV0aW9uKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRsID0gYS5sZW5ndGg7XG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcblx0XHRcdFx0XHRkICs9IE1hdGguc3FydChhW2ldKTtcblx0XHRcdFx0XHRpbmRleCA9IGkgJSByZXNvbHV0aW9uO1xuXHRcdFx0XHRcdGN1ckxTW2luZGV4XSA9IGQ7XG5cdFx0XHRcdFx0aWYgKGluZGV4ID09PSB0aHJlc2hvbGQpIHtcblx0XHRcdFx0XHRcdHRvdGFsICs9IGQ7XG5cdFx0XHRcdFx0XHRpbmRleCA9IChpIC8gcmVzb2x1dGlvbikgPj4gMDtcblx0XHRcdFx0XHRcdHNlZ21lbnRzW2luZGV4XSA9IGN1ckxTO1xuXHRcdFx0XHRcdFx0bGVuZ3Roc1tpbmRleF0gPSB0b3RhbDtcblx0XHRcdFx0XHRcdGQgPSAwO1xuXHRcdFx0XHRcdFx0Y3VyTFMgPSBbXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHtsZW5ndGg6dG90YWwsIGxlbmd0aHM6bGVuZ3Rocywgc2VnbWVudHM6c2VnbWVudHN9O1xuXHRcdFx0fSxcblxuXG5cblx0XHRcdEJlemllclBsdWdpbiA9IF9nc1Njb3BlLl9nc0RlZmluZS5wbHVnaW4oe1xuXHRcdFx0XHRcdHByb3BOYW1lOiBcImJlemllclwiLFxuXHRcdFx0XHRcdHByaW9yaXR5OiAtMSxcblx0XHRcdFx0XHR2ZXJzaW9uOiBcIjEuMy40XCIsXG5cdFx0XHRcdFx0QVBJOiAyLFxuXHRcdFx0XHRcdGdsb2JhbDp0cnVlLFxuXG5cdFx0XHRcdFx0Ly9nZXRzIGNhbGxlZCB3aGVuIHRoZSB0d2VlbiByZW5kZXJzIGZvciB0aGUgZmlyc3QgdGltZS4gVGhpcyBpcyB3aGVyZSBpbml0aWFsIHZhbHVlcyBzaG91bGQgYmUgcmVjb3JkZWQgYW5kIGFueSBzZXR1cCByb3V0aW5lcyBzaG91bGQgcnVuLlxuXHRcdFx0XHRcdGluaXQ6IGZ1bmN0aW9uKHRhcmdldCwgdmFycywgdHdlZW4pIHtcblx0XHRcdFx0XHRcdHRoaXMuX3RhcmdldCA9IHRhcmdldDtcblx0XHRcdFx0XHRcdGlmICh2YXJzIGluc3RhbmNlb2YgQXJyYXkpIHtcblx0XHRcdFx0XHRcdFx0dmFycyA9IHt2YWx1ZXM6dmFyc307XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR0aGlzLl9mdW5jID0ge307XG5cdFx0XHRcdFx0XHR0aGlzLl9yb3VuZCA9IHt9O1xuXHRcdFx0XHRcdFx0dGhpcy5fcHJvcHMgPSBbXTtcblx0XHRcdFx0XHRcdHRoaXMuX3RpbWVSZXMgPSAodmFycy50aW1lUmVzb2x1dGlvbiA9PSBudWxsKSA/IDYgOiBwYXJzZUludCh2YXJzLnRpbWVSZXNvbHV0aW9uLCAxMCk7XG5cdFx0XHRcdFx0XHR2YXIgdmFsdWVzID0gdmFycy52YWx1ZXMgfHwgW10sXG5cdFx0XHRcdFx0XHRcdGZpcnN0ID0ge30sXG5cdFx0XHRcdFx0XHRcdHNlY29uZCA9IHZhbHVlc1swXSxcblx0XHRcdFx0XHRcdFx0YXV0b1JvdGF0ZSA9IHZhcnMuYXV0b1JvdGF0ZSB8fCB0d2Vlbi52YXJzLm9yaWVudFRvQmV6aWVyLFxuXHRcdFx0XHRcdFx0XHRwLCBpc0Z1bmMsIGksIGosIHByZXBlbmQ7XG5cblx0XHRcdFx0XHRcdHRoaXMuX2F1dG9Sb3RhdGUgPSBhdXRvUm90YXRlID8gKGF1dG9Sb3RhdGUgaW5zdGFuY2VvZiBBcnJheSkgPyBhdXRvUm90YXRlIDogW1tcInhcIixcInlcIixcInJvdGF0aW9uXCIsKChhdXRvUm90YXRlID09PSB0cnVlKSA/IDAgOiBOdW1iZXIoYXV0b1JvdGF0ZSkgfHwgMCldXSA6IG51bGw7XG5cdFx0XHRcdFx0XHRmb3IgKHAgaW4gc2Vjb25kKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuX3Byb3BzLnB1c2gocCk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGkgPSB0aGlzLl9wcm9wcy5sZW5ndGg7XG5cdFx0XHRcdFx0XHR3aGlsZSAoLS1pID4gLTEpIHtcblx0XHRcdFx0XHRcdFx0cCA9IHRoaXMuX3Byb3BzW2ldO1xuXG5cdFx0XHRcdFx0XHRcdHRoaXMuX292ZXJ3cml0ZVByb3BzLnB1c2gocCk7XG5cdFx0XHRcdFx0XHRcdGlzRnVuYyA9IHRoaXMuX2Z1bmNbcF0gPSAodHlwZW9mKHRhcmdldFtwXSkgPT09IFwiZnVuY3Rpb25cIik7XG5cdFx0XHRcdFx0XHRcdGZpcnN0W3BdID0gKCFpc0Z1bmMpID8gcGFyc2VGbG9hdCh0YXJnZXRbcF0pIDogdGFyZ2V0WyAoKHAuaW5kZXhPZihcInNldFwiKSB8fCB0eXBlb2YodGFyZ2V0W1wiZ2V0XCIgKyBwLnN1YnN0cigzKV0pICE9PSBcImZ1bmN0aW9uXCIpID8gcCA6IFwiZ2V0XCIgKyBwLnN1YnN0cigzKSkgXSgpO1xuXHRcdFx0XHRcdFx0XHRpZiAoIXByZXBlbmQpIGlmIChmaXJzdFtwXSAhPT0gdmFsdWVzWzBdW3BdKSB7XG5cdFx0XHRcdFx0XHRcdFx0cHJlcGVuZCA9IGZpcnN0O1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR0aGlzLl9iZXppZXJzID0gKHZhcnMudHlwZSAhPT0gXCJjdWJpY1wiICYmIHZhcnMudHlwZSAhPT0gXCJxdWFkcmF0aWNcIiAmJiB2YXJzLnR5cGUgIT09IFwic29mdFwiKSA/IGJlemllclRocm91Z2godmFsdWVzLCBpc05hTih2YXJzLmN1cnZpbmVzcykgPyAxIDogdmFycy5jdXJ2aW5lc3MsIGZhbHNlLCAodmFycy50eXBlID09PSBcInRocnVCYXNpY1wiKSwgdmFycy5jb3JyZWxhdGUsIHByZXBlbmQpIDogX3BhcnNlQmV6aWVyRGF0YSh2YWx1ZXMsIHZhcnMudHlwZSwgZmlyc3QpO1xuXHRcdFx0XHRcdFx0dGhpcy5fc2VnQ291bnQgPSB0aGlzLl9iZXppZXJzW3BdLmxlbmd0aDtcblxuXHRcdFx0XHRcdFx0aWYgKHRoaXMuX3RpbWVSZXMpIHtcblx0XHRcdFx0XHRcdFx0dmFyIGxkID0gX3BhcnNlTGVuZ3RoRGF0YSh0aGlzLl9iZXppZXJzLCB0aGlzLl90aW1lUmVzKTtcblx0XHRcdFx0XHRcdFx0dGhpcy5fbGVuZ3RoID0gbGQubGVuZ3RoO1xuXHRcdFx0XHRcdFx0XHR0aGlzLl9sZW5ndGhzID0gbGQubGVuZ3Rocztcblx0XHRcdFx0XHRcdFx0dGhpcy5fc2VnbWVudHMgPSBsZC5zZWdtZW50cztcblx0XHRcdFx0XHRcdFx0dGhpcy5fbDEgPSB0aGlzLl9saSA9IHRoaXMuX3MxID0gdGhpcy5fc2kgPSAwO1xuXHRcdFx0XHRcdFx0XHR0aGlzLl9sMiA9IHRoaXMuX2xlbmd0aHNbMF07XG5cdFx0XHRcdFx0XHRcdHRoaXMuX2N1clNlZyA9IHRoaXMuX3NlZ21lbnRzWzBdO1xuXHRcdFx0XHRcdFx0XHR0aGlzLl9zMiA9IHRoaXMuX2N1clNlZ1swXTtcblx0XHRcdFx0XHRcdFx0dGhpcy5fcHJlYyA9IDEgLyB0aGlzLl9jdXJTZWcubGVuZ3RoO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRpZiAoKGF1dG9Sb3RhdGUgPSB0aGlzLl9hdXRvUm90YXRlKSkge1xuXHRcdFx0XHRcdFx0XHR0aGlzLl9pbml0aWFsUm90YXRpb25zID0gW107XG5cdFx0XHRcdFx0XHRcdGlmICghKGF1dG9Sb3RhdGVbMF0gaW5zdGFuY2VvZiBBcnJheSkpIHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLl9hdXRvUm90YXRlID0gYXV0b1JvdGF0ZSA9IFthdXRvUm90YXRlXTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRpID0gYXV0b1JvdGF0ZS5sZW5ndGg7XG5cdFx0XHRcdFx0XHRcdHdoaWxlICgtLWkgPiAtMSkge1xuXHRcdFx0XHRcdFx0XHRcdGZvciAoaiA9IDA7IGogPCAzOyBqKyspIHtcblx0XHRcdFx0XHRcdFx0XHRcdHAgPSBhdXRvUm90YXRlW2ldW2pdO1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5fZnVuY1twXSA9ICh0eXBlb2YodGFyZ2V0W3BdKSA9PT0gXCJmdW5jdGlvblwiKSA/IHRhcmdldFsgKChwLmluZGV4T2YoXCJzZXRcIikgfHwgdHlwZW9mKHRhcmdldFtcImdldFwiICsgcC5zdWJzdHIoMyldKSAhPT0gXCJmdW5jdGlvblwiKSA/IHAgOiBcImdldFwiICsgcC5zdWJzdHIoMykpIF0gOiBmYWxzZTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0cCA9IGF1dG9Sb3RhdGVbaV1bMl07XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5faW5pdGlhbFJvdGF0aW9uc1tpXSA9IHRoaXMuX2Z1bmNbcF0gPyB0aGlzLl9mdW5jW3BdLmNhbGwodGhpcy5fdGFyZ2V0KSA6IHRoaXMuX3RhcmdldFtwXTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0dGhpcy5fc3RhcnRSYXRpbyA9IHR3ZWVuLnZhcnMucnVuQmFja3dhcmRzID8gMSA6IDA7IC8vd2UgZGV0ZXJtaW5lIHRoZSBzdGFydGluZyByYXRpbyB3aGVuIHRoZSB0d2VlbiBpbml0cyB3aGljaCBpcyBhbHdheXMgMCB1bmxlc3MgdGhlIHR3ZWVuIGhhcyBydW5CYWNrd2FyZHM6dHJ1ZSAoaW5kaWNhdGluZyBpdCdzIGEgZnJvbSgpIHR3ZWVuKSBpbiB3aGljaCBjYXNlIGl0J3MgMS5cblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH0sXG5cblx0XHRcdFx0XHQvL2NhbGxlZCBlYWNoIHRpbWUgdGhlIHZhbHVlcyBzaG91bGQgYmUgdXBkYXRlZCwgYW5kIHRoZSByYXRpbyBnZXRzIHBhc3NlZCBhcyB0aGUgb25seSBwYXJhbWV0ZXIgKHR5cGljYWxseSBpdCdzIGEgdmFsdWUgYmV0d2VlbiAwIGFuZCAxLCBidXQgaXQgY2FuIGV4Y2VlZCB0aG9zZSB3aGVuIHVzaW5nIGFuIGVhc2UgbGlrZSBFbGFzdGljLmVhc2VPdXQgb3IgQmFjay5lYXNlT3V0LCBldGMuKVxuXHRcdFx0XHRcdHNldDogZnVuY3Rpb24odikge1xuXHRcdFx0XHRcdFx0dmFyIHNlZ21lbnRzID0gdGhpcy5fc2VnQ291bnQsXG5cdFx0XHRcdFx0XHRcdGZ1bmMgPSB0aGlzLl9mdW5jLFxuXHRcdFx0XHRcdFx0XHR0YXJnZXQgPSB0aGlzLl90YXJnZXQsXG5cdFx0XHRcdFx0XHRcdG5vdFN0YXJ0ID0gKHYgIT09IHRoaXMuX3N0YXJ0UmF0aW8pLFxuXHRcdFx0XHRcdFx0XHRjdXJJbmRleCwgaW52LCBpLCBwLCBiLCB0LCB2YWwsIGwsIGxlbmd0aHMsIGN1clNlZztcblx0XHRcdFx0XHRcdGlmICghdGhpcy5fdGltZVJlcykge1xuXHRcdFx0XHRcdFx0XHRjdXJJbmRleCA9ICh2IDwgMCkgPyAwIDogKHYgPj0gMSkgPyBzZWdtZW50cyAtIDEgOiAoc2VnbWVudHMgKiB2KSA+PiAwO1xuXHRcdFx0XHRcdFx0XHR0ID0gKHYgLSAoY3VySW5kZXggKiAoMSAvIHNlZ21lbnRzKSkpICogc2VnbWVudHM7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRsZW5ndGhzID0gdGhpcy5fbGVuZ3Rocztcblx0XHRcdFx0XHRcdFx0Y3VyU2VnID0gdGhpcy5fY3VyU2VnO1xuXHRcdFx0XHRcdFx0XHR2ICo9IHRoaXMuX2xlbmd0aDtcblx0XHRcdFx0XHRcdFx0aSA9IHRoaXMuX2xpO1xuXHRcdFx0XHRcdFx0XHQvL2ZpbmQgdGhlIGFwcHJvcHJpYXRlIHNlZ21lbnQgKGlmIHRoZSBjdXJyZW50bHkgY2FjaGVkIG9uZSBpc24ndCBjb3JyZWN0KVxuXHRcdFx0XHRcdFx0XHRpZiAodiA+IHRoaXMuX2wyICYmIGkgPCBzZWdtZW50cyAtIDEpIHtcblx0XHRcdFx0XHRcdFx0XHRsID0gc2VnbWVudHMgLSAxO1xuXHRcdFx0XHRcdFx0XHRcdHdoaWxlIChpIDwgbCAmJiAodGhpcy5fbDIgPSBsZW5ndGhzWysraV0pIDw9IHYpIHtcdH1cblx0XHRcdFx0XHRcdFx0XHR0aGlzLl9sMSA9IGxlbmd0aHNbaS0xXTtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLl9saSA9IGk7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5fY3VyU2VnID0gY3VyU2VnID0gdGhpcy5fc2VnbWVudHNbaV07XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5fczIgPSBjdXJTZWdbKHRoaXMuX3MxID0gdGhpcy5fc2kgPSAwKV07XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAodiA8IHRoaXMuX2wxICYmIGkgPiAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0d2hpbGUgKGkgPiAwICYmICh0aGlzLl9sMSA9IGxlbmd0aHNbLS1pXSkgPj0gdikgeyB9XG5cdFx0XHRcdFx0XHRcdFx0aWYgKGkgPT09IDAgJiYgdiA8IHRoaXMuX2wxKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLl9sMSA9IDA7XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdGkrKztcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5fbDIgPSBsZW5ndGhzW2ldO1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuX2xpID0gaTtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLl9jdXJTZWcgPSBjdXJTZWcgPSB0aGlzLl9zZWdtZW50c1tpXTtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLl9zMSA9IGN1clNlZ1sodGhpcy5fc2kgPSBjdXJTZWcubGVuZ3RoIC0gMSkgLSAxXSB8fCAwO1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuX3MyID0gY3VyU2VnW3RoaXMuX3NpXTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRjdXJJbmRleCA9IGk7XG5cdFx0XHRcdFx0XHRcdC8vbm93IGZpbmQgdGhlIGFwcHJvcHJpYXRlIHN1Yi1zZWdtZW50ICh3ZSBzcGxpdCBpdCBpbnRvIHRoZSBudW1iZXIgb2YgcGllY2VzIHRoYXQgd2FzIGRlZmluZWQgYnkgXCJwcmVjaXNpb25cIiBhbmQgbWVhc3VyZWQgZWFjaCBvbmUpXG5cdFx0XHRcdFx0XHRcdHYgLT0gdGhpcy5fbDE7XG5cdFx0XHRcdFx0XHRcdGkgPSB0aGlzLl9zaTtcblx0XHRcdFx0XHRcdFx0aWYgKHYgPiB0aGlzLl9zMiAmJiBpIDwgY3VyU2VnLmxlbmd0aCAtIDEpIHtcblx0XHRcdFx0XHRcdFx0XHRsID0gY3VyU2VnLmxlbmd0aCAtIDE7XG5cdFx0XHRcdFx0XHRcdFx0d2hpbGUgKGkgPCBsICYmICh0aGlzLl9zMiA9IGN1clNlZ1srK2ldKSA8PSB2KSB7XHR9XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5fczEgPSBjdXJTZWdbaS0xXTtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLl9zaSA9IGk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAodiA8IHRoaXMuX3MxICYmIGkgPiAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0d2hpbGUgKGkgPiAwICYmICh0aGlzLl9zMSA9IGN1clNlZ1stLWldKSA+PSB2KSB7XHR9XG5cdFx0XHRcdFx0XHRcdFx0aWYgKGkgPT09IDAgJiYgdiA8IHRoaXMuX3MxKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLl9zMSA9IDA7XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdGkrKztcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5fczIgPSBjdXJTZWdbaV07XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5fc2kgPSBpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHQgPSAoaSArICh2IC0gdGhpcy5fczEpIC8gKHRoaXMuX3MyIC0gdGhpcy5fczEpKSAqIHRoaXMuX3ByZWM7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpbnYgPSAxIC0gdDtcblxuXHRcdFx0XHRcdFx0aSA9IHRoaXMuX3Byb3BzLmxlbmd0aDtcblx0XHRcdFx0XHRcdHdoaWxlICgtLWkgPiAtMSkge1xuXHRcdFx0XHRcdFx0XHRwID0gdGhpcy5fcHJvcHNbaV07XG5cdFx0XHRcdFx0XHRcdGIgPSB0aGlzLl9iZXppZXJzW3BdW2N1ckluZGV4XTtcblx0XHRcdFx0XHRcdFx0dmFsID0gKHQgKiB0ICogYi5kYSArIDMgKiBpbnYgKiAodCAqIGIuY2EgKyBpbnYgKiBiLmJhKSkgKiB0ICsgYi5hO1xuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5fcm91bmRbcF0pIHtcblx0XHRcdFx0XHRcdFx0XHR2YWwgPSBNYXRoLnJvdW5kKHZhbCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0aWYgKGZ1bmNbcF0pIHtcblx0XHRcdFx0XHRcdFx0XHR0YXJnZXRbcF0odmFsKTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHR0YXJnZXRbcF0gPSB2YWw7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0aWYgKHRoaXMuX2F1dG9Sb3RhdGUpIHtcblx0XHRcdFx0XHRcdFx0dmFyIGFyID0gdGhpcy5fYXV0b1JvdGF0ZSxcblx0XHRcdFx0XHRcdFx0XHRiMiwgeDEsIHkxLCB4MiwgeTIsIGFkZCwgY29udjtcblx0XHRcdFx0XHRcdFx0aSA9IGFyLmxlbmd0aDtcblx0XHRcdFx0XHRcdFx0d2hpbGUgKC0taSA+IC0xKSB7XG5cdFx0XHRcdFx0XHRcdFx0cCA9IGFyW2ldWzJdO1xuXHRcdFx0XHRcdFx0XHRcdGFkZCA9IGFyW2ldWzNdIHx8IDA7XG5cdFx0XHRcdFx0XHRcdFx0Y29udiA9IChhcltpXVs0XSA9PT0gdHJ1ZSkgPyAxIDogX1JBRDJERUc7XG5cdFx0XHRcdFx0XHRcdFx0YiA9IHRoaXMuX2JlemllcnNbYXJbaV1bMF1dO1xuXHRcdFx0XHRcdFx0XHRcdGIyID0gdGhpcy5fYmV6aWVyc1thcltpXVsxXV07XG5cblx0XHRcdFx0XHRcdFx0XHRpZiAoYiAmJiBiMikgeyAvL2luIGNhc2Ugb25lIG9mIHRoZSBwcm9wZXJ0aWVzIGdvdCBvdmVyd3JpdHRlbi5cblx0XHRcdFx0XHRcdFx0XHRcdGIgPSBiW2N1ckluZGV4XTtcblx0XHRcdFx0XHRcdFx0XHRcdGIyID0gYjJbY3VySW5kZXhdO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHR4MSA9IGIuYSArIChiLmIgLSBiLmEpICogdDtcblx0XHRcdFx0XHRcdFx0XHRcdHgyID0gYi5iICsgKGIuYyAtIGIuYikgKiB0O1xuXHRcdFx0XHRcdFx0XHRcdFx0eDEgKz0gKHgyIC0geDEpICogdDtcblx0XHRcdFx0XHRcdFx0XHRcdHgyICs9ICgoYi5jICsgKGIuZCAtIGIuYykgKiB0KSAtIHgyKSAqIHQ7XG5cblx0XHRcdFx0XHRcdFx0XHRcdHkxID0gYjIuYSArIChiMi5iIC0gYjIuYSkgKiB0O1xuXHRcdFx0XHRcdFx0XHRcdFx0eTIgPSBiMi5iICsgKGIyLmMgLSBiMi5iKSAqIHQ7XG5cdFx0XHRcdFx0XHRcdFx0XHR5MSArPSAoeTIgLSB5MSkgKiB0O1xuXHRcdFx0XHRcdFx0XHRcdFx0eTIgKz0gKChiMi5jICsgKGIyLmQgLSBiMi5jKSAqIHQpIC0geTIpICogdDtcblxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsID0gbm90U3RhcnQgPyBNYXRoLmF0YW4yKHkyIC0geTEsIHgyIC0geDEpICogY29udiArIGFkZCA6IHRoaXMuX2luaXRpYWxSb3RhdGlvbnNbaV07XG5cblx0XHRcdFx0XHRcdFx0XHRcdGlmIChmdW5jW3BdKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRhcmdldFtwXSh2YWwpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGFyZ2V0W3BdID0gdmFsO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdH0pLFxuXHRcdFx0cCA9IEJlemllclBsdWdpbi5wcm90b3R5cGU7XG5cblxuXHRcdEJlemllclBsdWdpbi5iZXppZXJUaHJvdWdoID0gYmV6aWVyVGhyb3VnaDtcblx0XHRCZXppZXJQbHVnaW4uY3ViaWNUb1F1YWRyYXRpYyA9IGN1YmljVG9RdWFkcmF0aWM7XG5cdFx0QmV6aWVyUGx1Z2luLl9hdXRvQ1NTID0gdHJ1ZTsgLy9pbmRpY2F0ZXMgdGhhdCB0aGlzIHBsdWdpbiBjYW4gYmUgaW5zZXJ0ZWQgaW50byB0aGUgXCJjc3NcIiBvYmplY3QgdXNpbmcgdGhlIGF1dG9DU1MgZmVhdHVyZSBvZiBUd2VlbkxpdGVcblx0XHRCZXppZXJQbHVnaW4ucXVhZHJhdGljVG9DdWJpYyA9IGZ1bmN0aW9uKGEsIGIsIGMpIHtcblx0XHRcdHJldHVybiBuZXcgU2VnbWVudChhLCAoMiAqIGIgKyBhKSAvIDMsICgyICogYiArIGMpIC8gMywgYyk7XG5cdFx0fTtcblxuXHRcdEJlemllclBsdWdpbi5fY3NzUmVnaXN0ZXIgPSBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBDU1NQbHVnaW4gPSBfZ2xvYmFscy5DU1NQbHVnaW47XG5cdFx0XHRpZiAoIUNTU1BsdWdpbikge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR2YXIgX2ludGVybmFscyA9IENTU1BsdWdpbi5faW50ZXJuYWxzLFxuXHRcdFx0XHRfcGFyc2VUb1Byb3h5ID0gX2ludGVybmFscy5fcGFyc2VUb1Byb3h5LFxuXHRcdFx0XHRfc2V0UGx1Z2luUmF0aW8gPSBfaW50ZXJuYWxzLl9zZXRQbHVnaW5SYXRpbyxcblx0XHRcdFx0Q1NTUHJvcFR3ZWVuID0gX2ludGVybmFscy5DU1NQcm9wVHdlZW47XG5cdFx0XHRfaW50ZXJuYWxzLl9yZWdpc3RlckNvbXBsZXhTcGVjaWFsUHJvcChcImJlemllclwiLCB7cGFyc2VyOmZ1bmN0aW9uKHQsIGUsIHByb3AsIGNzc3AsIHB0LCBwbHVnaW4pIHtcblx0XHRcdFx0aWYgKGUgaW5zdGFuY2VvZiBBcnJheSkge1xuXHRcdFx0XHRcdGUgPSB7dmFsdWVzOmV9O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHBsdWdpbiA9IG5ldyBCZXppZXJQbHVnaW4oKTtcblx0XHRcdFx0dmFyIHZhbHVlcyA9IGUudmFsdWVzLFxuXHRcdFx0XHRcdGwgPSB2YWx1ZXMubGVuZ3RoIC0gMSxcblx0XHRcdFx0XHRwbHVnaW5WYWx1ZXMgPSBbXSxcblx0XHRcdFx0XHR2ID0ge30sXG5cdFx0XHRcdFx0aSwgcCwgZGF0YTtcblx0XHRcdFx0aWYgKGwgPCAwKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHB0O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPD0gbDsgaSsrKSB7XG5cdFx0XHRcdFx0ZGF0YSA9IF9wYXJzZVRvUHJveHkodCwgdmFsdWVzW2ldLCBjc3NwLCBwdCwgcGx1Z2luLCAobCAhPT0gaSkpO1xuXHRcdFx0XHRcdHBsdWdpblZhbHVlc1tpXSA9IGRhdGEuZW5kO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGZvciAocCBpbiBlKSB7XG5cdFx0XHRcdFx0dltwXSA9IGVbcF07IC8vZHVwbGljYXRlIHRoZSB2YXJzIG9iamVjdCBiZWNhdXNlIHdlIG5lZWQgdG8gYWx0ZXIgc29tZSB0aGluZ3Mgd2hpY2ggd291bGQgY2F1c2UgcHJvYmxlbXMgaWYgdGhlIHVzZXIgcGxhbnMgdG8gcmV1c2UgdGhlIHNhbWUgdmFycyBvYmplY3QgZm9yIGFub3RoZXIgdHdlZW4uXG5cdFx0XHRcdH1cblx0XHRcdFx0di52YWx1ZXMgPSBwbHVnaW5WYWx1ZXM7XG5cdFx0XHRcdHB0ID0gbmV3IENTU1Byb3BUd2Vlbih0LCBcImJlemllclwiLCAwLCAwLCBkYXRhLnB0LCAyKTtcblx0XHRcdFx0cHQuZGF0YSA9IGRhdGE7XG5cdFx0XHRcdHB0LnBsdWdpbiA9IHBsdWdpbjtcblx0XHRcdFx0cHQuc2V0UmF0aW8gPSBfc2V0UGx1Z2luUmF0aW87XG5cdFx0XHRcdGlmICh2LmF1dG9Sb3RhdGUgPT09IDApIHtcblx0XHRcdFx0XHR2LmF1dG9Sb3RhdGUgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh2LmF1dG9Sb3RhdGUgJiYgISh2LmF1dG9Sb3RhdGUgaW5zdGFuY2VvZiBBcnJheSkpIHtcblx0XHRcdFx0XHRpID0gKHYuYXV0b1JvdGF0ZSA9PT0gdHJ1ZSkgPyAwIDogTnVtYmVyKHYuYXV0b1JvdGF0ZSk7XG5cdFx0XHRcdFx0di5hdXRvUm90YXRlID0gKGRhdGEuZW5kLmxlZnQgIT0gbnVsbCkgPyBbW1wibGVmdFwiLFwidG9wXCIsXCJyb3RhdGlvblwiLGksZmFsc2VdXSA6IChkYXRhLmVuZC54ICE9IG51bGwpID8gW1tcInhcIixcInlcIixcInJvdGF0aW9uXCIsaSxmYWxzZV1dIDogZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHYuYXV0b1JvdGF0ZSkge1xuXHRcdFx0XHRcdGlmICghY3NzcC5fdHJhbnNmb3JtKSB7XG5cdFx0XHRcdFx0XHRjc3NwLl9lbmFibGVUcmFuc2Zvcm1zKGZhbHNlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZGF0YS5hdXRvUm90YXRlID0gY3NzcC5fdGFyZ2V0Ll9nc1RyYW5zZm9ybTtcblx0XHRcdFx0fVxuXHRcdFx0XHRwbHVnaW4uX29uSW5pdFR3ZWVuKGRhdGEucHJveHksIHYsIGNzc3AuX3R3ZWVuKTtcblx0XHRcdFx0cmV0dXJuIHB0O1xuXHRcdFx0fX0pO1xuXHRcdH07XG5cblx0XHRwLl9yb3VuZFByb3BzID0gZnVuY3Rpb24obG9va3VwLCB2YWx1ZSkge1xuXHRcdFx0dmFyIG9wID0gdGhpcy5fb3ZlcndyaXRlUHJvcHMsXG5cdFx0XHRcdGkgPSBvcC5sZW5ndGg7XG5cdFx0XHR3aGlsZSAoLS1pID4gLTEpIHtcblx0XHRcdFx0aWYgKGxvb2t1cFtvcFtpXV0gfHwgbG9va3VwLmJlemllciB8fCBsb29rdXAuYmV6aWVyVGhyb3VnaCkge1xuXHRcdFx0XHRcdHRoaXMuX3JvdW5kW29wW2ldXSA9IHZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHAuX2tpbGwgPSBmdW5jdGlvbihsb29rdXApIHtcblx0XHRcdHZhciBhID0gdGhpcy5fcHJvcHMsXG5cdFx0XHRcdHAsIGk7XG5cdFx0XHRmb3IgKHAgaW4gdGhpcy5fYmV6aWVycykge1xuXHRcdFx0XHRpZiAocCBpbiBsb29rdXApIHtcblx0XHRcdFx0XHRkZWxldGUgdGhpcy5fYmV6aWVyc1twXTtcblx0XHRcdFx0XHRkZWxldGUgdGhpcy5fZnVuY1twXTtcblx0XHRcdFx0XHRpID0gYS5sZW5ndGg7XG5cdFx0XHRcdFx0d2hpbGUgKC0taSA+IC0xKSB7XG5cdFx0XHRcdFx0XHRpZiAoYVtpXSA9PT0gcCkge1xuXHRcdFx0XHRcdFx0XHRhLnNwbGljZShpLCAxKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzLl9zdXBlci5fa2lsbC5jYWxsKHRoaXMsIGxvb2t1cCk7XG5cdFx0fTtcblxuXHR9KCkpO1xuXG5cblxuXG5cblxuXHRcblx0XG5cdFxuXHRcblx0XG5cdFxuXHRcblx0XG4vKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ1NTUGx1Z2luXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblx0X2dzU2NvcGUuX2dzRGVmaW5lKFwicGx1Z2lucy5DU1NQbHVnaW5cIiwgW1wicGx1Z2lucy5Ud2VlblBsdWdpblwiLFwiVHdlZW5MaXRlXCJdLCBmdW5jdGlvbihUd2VlblBsdWdpbiwgVHdlZW5MaXRlKSB7XG5cblx0XHQvKiogQGNvbnN0cnVjdG9yICoqL1xuXHRcdHZhciBDU1NQbHVnaW4gPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0VHdlZW5QbHVnaW4uY2FsbCh0aGlzLCBcImNzc1wiKTtcblx0XHRcdFx0dGhpcy5fb3ZlcndyaXRlUHJvcHMubGVuZ3RoID0gMDtcblx0XHRcdFx0dGhpcy5zZXRSYXRpbyA9IENTU1BsdWdpbi5wcm90b3R5cGUuc2V0UmF0aW87IC8vc3BlZWQgb3B0aW1pemF0aW9uIChhdm9pZCBwcm90b3R5cGUgbG9va3VwIG9uIHRoaXMgXCJob3RcIiBtZXRob2QpXG5cdFx0XHR9LFxuXHRcdFx0X2dsb2JhbHMgPSBfZ3NTY29wZS5fZ3NEZWZpbmUuZ2xvYmFscyxcblx0XHRcdF9oYXNQcmlvcml0eSwgLy90dXJucyB0cnVlIHdoZW5ldmVyIGEgQ1NTUHJvcFR3ZWVuIGluc3RhbmNlIGlzIGNyZWF0ZWQgdGhhdCBoYXMgYSBwcmlvcml0eSBvdGhlciB0aGFuIDAuIFRoaXMgaGVscHMgdXMgZGlzY2VybiB3aGV0aGVyIG9yIG5vdCB3ZSBzaG91bGQgc3BlbmQgdGhlIHRpbWUgb3JnYW5pemluZyB0aGUgbGlua2VkIGxpc3Qgb3Igbm90IGFmdGVyIGEgQ1NTUGx1Z2luJ3MgX29uSW5pdFR3ZWVuKCkgbWV0aG9kIGlzIGNhbGxlZC5cblx0XHRcdF9zdWZmaXhNYXAsIC8vd2Ugc2V0IHRoaXMgaW4gX29uSW5pdFR3ZWVuKCkgZWFjaCB0aW1lIGFzIGEgd2F5IHRvIGhhdmUgYSBwZXJzaXN0ZW50IHZhcmlhYmxlIHdlIGNhbiB1c2UgaW4gb3RoZXIgbWV0aG9kcyBsaWtlIF9wYXJzZSgpIHdpdGhvdXQgaGF2aW5nIHRvIHBhc3MgaXQgYXJvdW5kIGFzIGEgcGFyYW1ldGVyIGFuZCB3ZSBrZWVwIF9wYXJzZSgpIGRlY291cGxlZCBmcm9tIGEgcGFydGljdWxhciBDU1NQbHVnaW4gaW5zdGFuY2Vcblx0XHRcdF9jcywgLy9jb21wdXRlZCBzdHlsZSAod2Ugc3RvcmUgdGhpcyBpbiBhIHNoYXJlZCB2YXJpYWJsZSB0byBjb25zZXJ2ZSBtZW1vcnkgYW5kIG1ha2UgbWluaWZpY2F0aW9uIHRpZ2h0ZXJcblx0XHRcdF9vdmVyd3JpdGVQcm9wcywgLy9hbGlhcyB0byB0aGUgY3VycmVudGx5IGluc3RhbnRpYXRpbmcgQ1NTUGx1Z2luJ3MgX292ZXJ3cml0ZVByb3BzIGFycmF5LiBXZSB1c2UgdGhpcyBjbG9zdXJlIGluIG9yZGVyIHRvIGF2b2lkIGhhdmluZyB0byBwYXNzIGEgcmVmZXJlbmNlIGFyb3VuZCBmcm9tIG1ldGhvZCB0byBtZXRob2QgYW5kIGFpZCBpbiBtaW5pZmljYXRpb24uXG5cdFx0XHRfc3BlY2lhbFByb3BzID0ge30sXG5cdFx0XHRwID0gQ1NTUGx1Z2luLnByb3RvdHlwZSA9IG5ldyBUd2VlblBsdWdpbihcImNzc1wiKTtcblxuXHRcdHAuY29uc3RydWN0b3IgPSBDU1NQbHVnaW47XG5cdFx0Q1NTUGx1Z2luLnZlcnNpb24gPSBcIjEuMTYuMVwiO1xuXHRcdENTU1BsdWdpbi5BUEkgPSAyO1xuXHRcdENTU1BsdWdpbi5kZWZhdWx0VHJhbnNmb3JtUGVyc3BlY3RpdmUgPSAwO1xuXHRcdENTU1BsdWdpbi5kZWZhdWx0U2tld1R5cGUgPSBcImNvbXBlbnNhdGVkXCI7XG5cdFx0cCA9IFwicHhcIjsgLy93ZSdsbCByZXVzZSB0aGUgXCJwXCIgdmFyaWFibGUgdG8ga2VlcCBmaWxlIHNpemUgZG93blxuXHRcdENTU1BsdWdpbi5zdWZmaXhNYXAgPSB7dG9wOnAsIHJpZ2h0OnAsIGJvdHRvbTpwLCBsZWZ0OnAsIHdpZHRoOnAsIGhlaWdodDpwLCBmb250U2l6ZTpwLCBwYWRkaW5nOnAsIG1hcmdpbjpwLCBwZXJzcGVjdGl2ZTpwLCBsaW5lSGVpZ2h0OlwiXCJ9O1xuXG5cblx0XHR2YXIgX251bUV4cCA9IC8oPzpcXGR8XFwtXFxkfFxcLlxcZHxcXC1cXC5cXGQpKy9nLFxuXHRcdFx0X3JlbE51bUV4cCA9IC8oPzpcXGR8XFwtXFxkfFxcLlxcZHxcXC1cXC5cXGR8XFwrPVxcZHxcXC09XFxkfFxcKz0uXFxkfFxcLT1cXC5cXGQpKy9nLFxuXHRcdFx0X3ZhbHVlc0V4cCA9IC8oPzpcXCs9fFxcLT18XFwtfFxcYilbXFxkXFwtXFwuXStbYS16QS1aMC05XSooPzolfFxcYikvZ2ksIC8vZmluZHMgYWxsIHRoZSB2YWx1ZXMgdGhhdCBiZWdpbiB3aXRoIG51bWJlcnMgb3IgKz0gb3IgLT0gYW5kIHRoZW4gYSBudW1iZXIuIEluY2x1ZGVzIHN1ZmZpeGVzLiBXZSB1c2UgdGhpcyB0byBzcGxpdCBjb21wbGV4IHZhbHVlcyBhcGFydCBsaWtlIFwiMXB4IDVweCAyMHB4IHJnYigyNTUsMTAyLDUxKVwiXG5cdFx0XHRfTmFORXhwID0gLyg/IVsrLV0/XFxkKlxcLj9cXGQrfFsrLV18ZVsrLV1cXGQrKVteMC05XS9nLCAvL2Fsc28gYWxsb3dzIHNjaWVudGlmaWMgbm90YXRpb24gYW5kIGRvZXNuJ3Qga2lsbCB0aGUgbGVhZGluZyAtLysgaW4gLT0gYW5kICs9XG5cdFx0XHRfc3VmZml4RXhwID0gLyg/OlxcZHxcXC18XFwrfD18I3xcXC4pKi9nLFxuXHRcdFx0X29wYWNpdHlFeHAgPSAvb3BhY2l0eSAqPSAqKFteKV0qKS9pLFxuXHRcdFx0X29wYWNpdHlWYWxFeHAgPSAvb3BhY2l0eTooW147XSopL2ksXG5cdFx0XHRfYWxwaGFGaWx0ZXJFeHAgPSAvYWxwaGFcXChvcGFjaXR5ICo9Lis/XFwpL2ksXG5cdFx0XHRfcmdiaHNsRXhwID0gL14ocmdifGhzbCkvLFxuXHRcdFx0X2NhcHNFeHAgPSAvKFtBLVpdKS9nLFxuXHRcdFx0X2NhbWVsRXhwID0gLy0oW2Etel0pL2dpLFxuXHRcdFx0X3VybEV4cCA9IC8oXig/OnVybFxcKFxcXCJ8dXJsXFwoKSl8KD86KFxcXCJcXCkpJHxcXCkkKS9naSwgLy9mb3IgcHVsbGluZyBvdXQgdXJscyBmcm9tIHVybCguLi4pIG9yIHVybChcIi4uLlwiKSBzdHJpbmdzIChzb21lIGJyb3dzZXJzIHdyYXAgdXJscyBpbiBxdW90ZXMsIHNvbWUgZG9uJ3Qgd2hlbiByZXBvcnRpbmcgdGhpbmdzIGxpa2UgYmFja2dyb3VuZEltYWdlKVxuXHRcdFx0X2NhbWVsRnVuYyA9IGZ1bmN0aW9uKHMsIGcpIHsgcmV0dXJuIGcudG9VcHBlckNhc2UoKTsgfSxcblx0XHRcdF9ob3JpekV4cCA9IC8oPzpMZWZ0fFJpZ2h0fFdpZHRoKS9pLFxuXHRcdFx0X2llR2V0TWF0cml4RXhwID0gLyhNMTF8TTEyfE0yMXxNMjIpPVtcXGRcXC1cXC5lXSsvZ2ksXG5cdFx0XHRfaWVTZXRNYXRyaXhFeHAgPSAvcHJvZ2lkXFw6RFhJbWFnZVRyYW5zZm9ybVxcLk1pY3Jvc29mdFxcLk1hdHJpeFxcKC4rP1xcKS9pLFxuXHRcdFx0X2NvbW1hc091dHNpZGVQYXJlbkV4cCA9IC8sKD89W15cXCldKig/OlxcKHwkKSkvZ2ksIC8vZmluZHMgYW55IGNvbW1hcyB0aGF0IGFyZSBub3Qgd2l0aGluIHBhcmVudGhlc2lzXG5cdFx0XHRfREVHMlJBRCA9IE1hdGguUEkgLyAxODAsXG5cdFx0XHRfUkFEMkRFRyA9IDE4MCAvIE1hdGguUEksXG5cdFx0XHRfZm9yY2VQVCA9IHt9LFxuXHRcdFx0X2RvYyA9IGRvY3VtZW50LFxuXHRcdFx0X2NyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbih0eXBlKSB7XG5cdFx0XHRcdHJldHVybiBfZG9jLmNyZWF0ZUVsZW1lbnROUyA/IF9kb2MuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiLCB0eXBlKSA6IF9kb2MuY3JlYXRlRWxlbWVudCh0eXBlKTtcblx0XHRcdH0sXG5cdFx0XHRfdGVtcERpdiA9IF9jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuXHRcdFx0X3RlbXBJbWcgPSBfY3JlYXRlRWxlbWVudChcImltZ1wiKSxcblx0XHRcdF9pbnRlcm5hbHMgPSBDU1NQbHVnaW4uX2ludGVybmFscyA9IHtfc3BlY2lhbFByb3BzOl9zcGVjaWFsUHJvcHN9LCAvL3Byb3ZpZGVzIGEgaG9vayB0byBhIGZldyBpbnRlcm5hbCBtZXRob2RzIHRoYXQgd2UgbmVlZCB0byBhY2Nlc3MgZnJvbSBpbnNpZGUgb3RoZXIgcGx1Z2luc1xuXHRcdFx0X2FnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudCxcblx0XHRcdF9hdXRvUm91bmQsXG5cdFx0XHRfcmVxU2FmYXJpRml4LCAvL3dlIHdvbid0IGFwcGx5IHRoZSBTYWZhcmkgdHJhbnNmb3JtIGZpeCB1bnRpbCB3ZSBhY3R1YWxseSBjb21lIGFjcm9zcyBhIHR3ZWVuIHRoYXQgYWZmZWN0cyBhIHRyYW5zZm9ybSBwcm9wZXJ0eSAodG8gbWFpbnRhaW4gYmVzdCBwZXJmb3JtYW5jZSkuXG5cblx0XHRcdF9pc1NhZmFyaSxcblx0XHRcdF9pc0ZpcmVmb3gsIC8vRmlyZWZveCBoYXMgYSBidWcgdGhhdCBjYXVzZXMgM0QgdHJhbnNmb3JtZWQgZWxlbWVudHMgdG8gcmFuZG9tbHkgZGlzYXBwZWFyIHVubGVzcyBhIHJlcGFpbnQgaXMgZm9yY2VkIGFmdGVyIGVhY2ggdXBkYXRlIG9uIGVhY2ggZWxlbWVudC5cblx0XHRcdF9pc1NhZmFyaUxUNiwgLy9TYWZhcmkgKGFuZCBBbmRyb2lkIDQgd2hpY2ggdXNlcyBhIGZsYXZvciBvZiBTYWZhcmkpIGhhcyBhIGJ1ZyB0aGF0IHByZXZlbnRzIGNoYW5nZXMgdG8gXCJ0b3BcIiBhbmQgXCJsZWZ0XCIgcHJvcGVydGllcyBmcm9tIHJlbmRlcmluZyBwcm9wZXJseSBpZiBjaGFuZ2VkIG9uIHRoZSBzYW1lIGZyYW1lIGFzIGEgdHJhbnNmb3JtIFVOTEVTUyB3ZSBzZXQgdGhlIGVsZW1lbnQncyBXZWJraXRCYWNrZmFjZVZpc2liaWxpdHkgdG8gaGlkZGVuICh3ZWlyZCwgSSBrbm93KS4gRG9pbmcgdGhpcyBmb3IgQW5kcm9pZCAzIGFuZCBlYXJsaWVyIHNlZW1zIHRvIGFjdHVhbGx5IGNhdXNlIG90aGVyIHByb2JsZW1zLCB0aG91Z2ggKGZ1biEpXG5cdFx0XHRfaWVWZXJzLFxuXHRcdFx0X3N1cHBvcnRzT3BhY2l0eSA9IChmdW5jdGlvbigpIHsgLy93ZSBzZXQgX2lzU2FmYXJpLCBfaWVWZXJzLCBfaXNGaXJlZm94LCBhbmQgX3N1cHBvcnRzT3BhY2l0eSBhbGwgaW4gb25lIGZ1bmN0aW9uIGhlcmUgdG8gcmVkdWNlIGZpbGUgc2l6ZSBzbGlnaHRseSwgZXNwZWNpYWxseSBpbiB0aGUgbWluaWZpZWQgdmVyc2lvbi5cblx0XHRcdFx0dmFyIGkgPSBfYWdlbnQuaW5kZXhPZihcIkFuZHJvaWRcIiksXG5cdFx0XHRcdFx0YSA9IF9jcmVhdGVFbGVtZW50KFwiYVwiKTtcblx0XHRcdFx0X2lzU2FmYXJpID0gKF9hZ2VudC5pbmRleE9mKFwiU2FmYXJpXCIpICE9PSAtMSAmJiBfYWdlbnQuaW5kZXhPZihcIkNocm9tZVwiKSA9PT0gLTEgJiYgKGkgPT09IC0xIHx8IE51bWJlcihfYWdlbnQuc3Vic3RyKGkrOCwgMSkpID4gMykpO1xuXHRcdFx0XHRfaXNTYWZhcmlMVDYgPSAoX2lzU2FmYXJpICYmIChOdW1iZXIoX2FnZW50LnN1YnN0cihfYWdlbnQuaW5kZXhPZihcIlZlcnNpb24vXCIpKzgsIDEpKSA8IDYpKTtcblx0XHRcdFx0X2lzRmlyZWZveCA9IChfYWdlbnQuaW5kZXhPZihcIkZpcmVmb3hcIikgIT09IC0xKTtcblx0XHRcdFx0aWYgKCgvTVNJRSAoWzAtOV17MSx9W1xcLjAtOV17MCx9KS8pLmV4ZWMoX2FnZW50KSB8fCAoL1RyaWRlbnRcXC8uKnJ2OihbMC05XXsxLH1bXFwuMC05XXswLH0pLykuZXhlYyhfYWdlbnQpKSB7XG5cdFx0XHRcdFx0X2llVmVycyA9IHBhcnNlRmxvYXQoIFJlZ0V4cC4kMSApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghYSkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRhLnN0eWxlLmNzc1RleHQgPSBcInRvcDoxcHg7b3BhY2l0eTouNTU7XCI7XG5cdFx0XHRcdHJldHVybiAvXjAuNTUvLnRlc3QoYS5zdHlsZS5vcGFjaXR5KTtcblx0XHRcdH0oKSksXG5cdFx0XHRfZ2V0SUVPcGFjaXR5ID0gZnVuY3Rpb24odikge1xuXHRcdFx0XHRyZXR1cm4gKF9vcGFjaXR5RXhwLnRlc3QoICgodHlwZW9mKHYpID09PSBcInN0cmluZ1wiKSA/IHYgOiAodi5jdXJyZW50U3R5bGUgPyB2LmN1cnJlbnRTdHlsZS5maWx0ZXIgOiB2LnN0eWxlLmZpbHRlcikgfHwgXCJcIikgKSA/ICggcGFyc2VGbG9hdCggUmVnRXhwLiQxICkgLyAxMDAgKSA6IDEpO1xuXHRcdFx0fSxcblx0XHRcdF9sb2cgPSBmdW5jdGlvbihzKSB7Ly9mb3IgbG9nZ2luZyBtZXNzYWdlcywgYnV0IGluIGEgd2F5IHRoYXQgd29uJ3QgdGhyb3cgZXJyb3JzIGluIG9sZCB2ZXJzaW9ucyBvZiBJRS5cblx0XHRcdFx0aWYgKHdpbmRvdy5jb25zb2xlKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2cocyk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cblx0XHRcdF9wcmVmaXhDU1MgPSBcIlwiLCAvL3RoZSBub24tY2FtZWxDYXNlIHZlbmRvciBwcmVmaXggbGlrZSBcIi1vLVwiLCBcIi1tb3otXCIsIFwiLW1zLVwiLCBvciBcIi13ZWJraXQtXCJcblx0XHRcdF9wcmVmaXggPSBcIlwiLCAvL2NhbWVsQ2FzZSB2ZW5kb3IgcHJlZml4IGxpa2UgXCJPXCIsIFwibXNcIiwgXCJXZWJraXRcIiwgb3IgXCJNb3pcIi5cblxuXHRcdFx0Ly8gQHByaXZhdGUgZmVlZCBpbiBhIGNhbWVsQ2FzZSBwcm9wZXJ0eSBuYW1lIGxpa2UgXCJ0cmFuc2Zvcm1cIiBhbmQgaXQgd2lsbCBjaGVjayB0byBzZWUgaWYgaXQgaXMgdmFsaWQgYXMtaXMgb3IgaWYgaXQgbmVlZHMgYSB2ZW5kb3IgcHJlZml4LiBJdCByZXR1cm5zIHRoZSBjb3JyZWN0ZWQgY2FtZWxDYXNlIHByb3BlcnR5IG5hbWUgKGkuZS4gXCJXZWJraXRUcmFuc2Zvcm1cIiBvciBcIk1velRyYW5zZm9ybVwiIG9yIFwidHJhbnNmb3JtXCIgb3IgbnVsbCBpZiBubyBzdWNoIHByb3BlcnR5IGlzIGZvdW5kLCBsaWtlIGlmIHRoZSBicm93c2VyIGlzIElFOCBvciBiZWZvcmUsIFwidHJhbnNmb3JtXCIgd29uJ3QgYmUgZm91bmQgYXQgYWxsKVxuXHRcdFx0X2NoZWNrUHJvcFByZWZpeCA9IGZ1bmN0aW9uKHAsIGUpIHtcblx0XHRcdFx0ZSA9IGUgfHwgX3RlbXBEaXY7XG5cdFx0XHRcdHZhciBzID0gZS5zdHlsZSxcblx0XHRcdFx0XHRhLCBpO1xuXHRcdFx0XHRpZiAoc1twXSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHA7XG5cdFx0XHRcdH1cblx0XHRcdFx0cCA9IHAuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwLnN1YnN0cigxKTtcblx0XHRcdFx0YSA9IFtcIk9cIixcIk1velwiLFwibXNcIixcIk1zXCIsXCJXZWJraXRcIl07XG5cdFx0XHRcdGkgPSA1O1xuXHRcdFx0XHR3aGlsZSAoLS1pID4gLTEgJiYgc1thW2ldK3BdID09PSB1bmRlZmluZWQpIHsgfVxuXHRcdFx0XHRpZiAoaSA+PSAwKSB7XG5cdFx0XHRcdFx0X3ByZWZpeCA9IChpID09PSAzKSA/IFwibXNcIiA6IGFbaV07XG5cdFx0XHRcdFx0X3ByZWZpeENTUyA9IFwiLVwiICsgX3ByZWZpeC50b0xvd2VyQ2FzZSgpICsgXCItXCI7XG5cdFx0XHRcdFx0cmV0dXJuIF9wcmVmaXggKyBwO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fSxcblxuXHRcdFx0X2dldENvbXB1dGVkU3R5bGUgPSBfZG9jLmRlZmF1bHRWaWV3ID8gX2RvYy5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlIDogZnVuY3Rpb24oKSB7fSxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBAcHJpdmF0ZSBSZXR1cm5zIHRoZSBjc3Mgc3R5bGUgZm9yIGEgcGFydGljdWxhciBwcm9wZXJ0eSBvZiBhbiBlbGVtZW50LiBGb3IgZXhhbXBsZSwgdG8gZ2V0IHdoYXRldmVyIHRoZSBjdXJyZW50IFwibGVmdFwiIGNzcyB2YWx1ZSBmb3IgYW4gZWxlbWVudCB3aXRoIGFuIElEIG9mIFwibXlFbGVtZW50XCIsIHlvdSBjb3VsZCBkbzpcblx0XHRcdCAqIHZhciBjdXJyZW50TGVmdCA9IENTU1BsdWdpbi5nZXRTdHlsZSggZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUVsZW1lbnRcIiksIFwibGVmdFwiKTtcblx0XHRcdCAqXG5cdFx0XHQgKiBAcGFyYW0geyFPYmplY3R9IHQgVGFyZ2V0IGVsZW1lbnQgd2hvc2Ugc3R5bGUgcHJvcGVydHkgeW91IHdhbnQgdG8gcXVlcnlcblx0XHRcdCAqIEBwYXJhbSB7IXN0cmluZ30gcCBQcm9wZXJ0eSBuYW1lIChsaWtlIFwibGVmdFwiIG9yIFwidG9wXCIgb3IgXCJtYXJnaW5Ub3BcIiwgZXRjLilcblx0XHRcdCAqIEBwYXJhbSB7T2JqZWN0PX0gY3MgQ29tcHV0ZWQgc3R5bGUgb2JqZWN0LiBUaGlzIGp1c3QgcHJvdmlkZXMgYSB3YXkgdG8gc3BlZWQgcHJvY2Vzc2luZyBpZiB5b3UncmUgZ29pbmcgdG8gZ2V0IHNldmVyYWwgcHJvcGVydGllcyBvbiB0aGUgc2FtZSBlbGVtZW50IGluIHF1aWNrIHN1Y2Nlc3Npb24gLSB5b3UgY2FuIHJldXNlIHRoZSByZXN1bHQgb2YgdGhlIGdldENvbXB1dGVkU3R5bGUoKSBjYWxsLlxuXHRcdFx0ICogQHBhcmFtIHtib29sZWFuPX0gY2FsYyBJZiB0cnVlLCB0aGUgdmFsdWUgd2lsbCBub3QgYmUgcmVhZCBkaXJlY3RseSBmcm9tIHRoZSBlbGVtZW50J3MgXCJzdHlsZVwiIHByb3BlcnR5IChpZiBpdCBleGlzdHMgdGhlcmUpLCBidXQgaW5zdGVhZCB0aGUgZ2V0Q29tcHV0ZWRTdHlsZSgpIHJlc3VsdCB3aWxsIGJlIHVzZWQuIFRoaXMgY2FuIGJlIHVzZWZ1bCB3aGVuIHlvdSB3YW50IHRvIGVuc3VyZSB0aGF0IHRoZSBicm93c2VyIGl0c2VsZiBpcyBpbnRlcnByZXRpbmcgdGhlIHZhbHVlLlxuXHRcdFx0ICogQHBhcmFtIHtzdHJpbmc9fSBkZmx0IERlZmF1bHQgdmFsdWUgdGhhdCBzaG91bGQgYmUgcmV0dXJuZWQgaW4gdGhlIHBsYWNlIG9mIG51bGwsIFwibm9uZVwiLCBcImF1dG9cIiBvciBcImF1dG8gYXV0b1wiLlxuXHRcdFx0ICogQHJldHVybiB7P3N0cmluZ30gVGhlIGN1cnJlbnQgcHJvcGVydHkgdmFsdWVcblx0XHRcdCAqL1xuXHRcdFx0X2dldFN0eWxlID0gQ1NTUGx1Z2luLmdldFN0eWxlID0gZnVuY3Rpb24odCwgcCwgY3MsIGNhbGMsIGRmbHQpIHtcblx0XHRcdFx0dmFyIHJ2O1xuXHRcdFx0XHRpZiAoIV9zdXBwb3J0c09wYWNpdHkpIGlmIChwID09PSBcIm9wYWNpdHlcIikgeyAvL3NldmVyYWwgdmVyc2lvbnMgb2YgSUUgZG9uJ3QgdXNlIHRoZSBzdGFuZGFyZCBcIm9wYWNpdHlcIiBwcm9wZXJ0eSAtIHRoZXkgdXNlIHRoaW5ncyBsaWtlIGZpbHRlcjphbHBoYShvcGFjaXR5PTUwKSwgc28gd2UgcGFyc2UgdGhhdCBoZXJlLlxuXHRcdFx0XHRcdHJldHVybiBfZ2V0SUVPcGFjaXR5KHQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghY2FsYyAmJiB0LnN0eWxlW3BdKSB7XG5cdFx0XHRcdFx0cnYgPSB0LnN0eWxlW3BdO1xuXHRcdFx0XHR9IGVsc2UgaWYgKChjcyA9IGNzIHx8IF9nZXRDb21wdXRlZFN0eWxlKHQpKSkge1xuXHRcdFx0XHRcdHJ2ID0gY3NbcF0gfHwgY3MuZ2V0UHJvcGVydHlWYWx1ZShwKSB8fCBjcy5nZXRQcm9wZXJ0eVZhbHVlKHAucmVwbGFjZShfY2Fwc0V4cCwgXCItJDFcIikudG9Mb3dlckNhc2UoKSk7XG5cdFx0XHRcdH0gZWxzZSBpZiAodC5jdXJyZW50U3R5bGUpIHtcblx0XHRcdFx0XHRydiA9IHQuY3VycmVudFN0eWxlW3BdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiAoZGZsdCAhPSBudWxsICYmICghcnYgfHwgcnYgPT09IFwibm9uZVwiIHx8IHJ2ID09PSBcImF1dG9cIiB8fCBydiA9PT0gXCJhdXRvIGF1dG9cIikpID8gZGZsdCA6IHJ2O1xuXHRcdFx0fSxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBAcHJpdmF0ZSBQYXNzIHRoZSB0YXJnZXQgZWxlbWVudCwgdGhlIHByb3BlcnR5IG5hbWUsIHRoZSBudW1lcmljIHZhbHVlLCBhbmQgdGhlIHN1ZmZpeCAobGlrZSBcIiVcIiwgXCJlbVwiLCBcInB4XCIsIGV0Yy4pIGFuZCBpdCB3aWxsIHNwaXQgYmFjayB0aGUgZXF1aXZhbGVudCBwaXhlbCBudW1iZXIuXG5cdFx0XHQgKiBAcGFyYW0geyFPYmplY3R9IHQgVGFyZ2V0IGVsZW1lbnRcblx0XHRcdCAqIEBwYXJhbSB7IXN0cmluZ30gcCBQcm9wZXJ0eSBuYW1lIChsaWtlIFwibGVmdFwiLCBcInRvcFwiLCBcIm1hcmdpbkxlZnRcIiwgZXRjLilcblx0XHRcdCAqIEBwYXJhbSB7IW51bWJlcn0gdiBWYWx1ZVxuXHRcdFx0ICogQHBhcmFtIHtzdHJpbmc9fSBzZnggU3VmZml4IChsaWtlIFwicHhcIiBvciBcIiVcIiBvciBcImVtXCIpXG5cdFx0XHQgKiBAcGFyYW0ge2Jvb2xlYW49fSByZWN1cnNlIElmIHRydWUsIHRoZSBjYWxsIGlzIGEgcmVjdXJzaXZlIG9uZS4gSW4gc29tZSBicm93c2VycyAobGlrZSBJRTcvOCksIG9jY2FzaW9uYWxseSB0aGUgdmFsdWUgaXNuJ3QgYWNjdXJhdGVseSByZXBvcnRlZCBpbml0aWFsbHksIGJ1dCBpZiB3ZSBydW4gdGhlIGZ1bmN0aW9uIGFnYWluIGl0IHdpbGwgdGFrZSBlZmZlY3QuXG5cdFx0XHQgKiBAcmV0dXJuIHtudW1iZXJ9IHZhbHVlIGluIHBpeGVsc1xuXHRcdFx0ICovXG5cdFx0XHRfY29udmVydFRvUGl4ZWxzID0gX2ludGVybmFscy5jb252ZXJ0VG9QaXhlbHMgPSBmdW5jdGlvbih0LCBwLCB2LCBzZngsIHJlY3Vyc2UpIHtcblx0XHRcdFx0aWYgKHNmeCA9PT0gXCJweFwiIHx8ICFzZngpIHsgcmV0dXJuIHY7IH1cblx0XHRcdFx0aWYgKHNmeCA9PT0gXCJhdXRvXCIgfHwgIXYpIHsgcmV0dXJuIDA7IH1cblx0XHRcdFx0dmFyIGhvcml6ID0gX2hvcml6RXhwLnRlc3QocCksXG5cdFx0XHRcdFx0bm9kZSA9IHQsXG5cdFx0XHRcdFx0c3R5bGUgPSBfdGVtcERpdi5zdHlsZSxcblx0XHRcdFx0XHRuZWcgPSAodiA8IDApLFxuXHRcdFx0XHRcdHBpeCwgY2FjaGUsIHRpbWU7XG5cdFx0XHRcdGlmIChuZWcpIHtcblx0XHRcdFx0XHR2ID0gLXY7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHNmeCA9PT0gXCIlXCIgJiYgcC5pbmRleE9mKFwiYm9yZGVyXCIpICE9PSAtMSkge1xuXHRcdFx0XHRcdHBpeCA9ICh2IC8gMTAwKSAqIChob3JpeiA/IHQuY2xpZW50V2lkdGggOiB0LmNsaWVudEhlaWdodCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0c3R5bGUuY3NzVGV4dCA9IFwiYm9yZGVyOjAgc29saWQgcmVkO3Bvc2l0aW9uOlwiICsgX2dldFN0eWxlKHQsIFwicG9zaXRpb25cIikgKyBcIjtsaW5lLWhlaWdodDowO1wiO1xuXHRcdFx0XHRcdGlmIChzZnggPT09IFwiJVwiIHx8ICFub2RlLmFwcGVuZENoaWxkKSB7XG5cdFx0XHRcdFx0XHRub2RlID0gdC5wYXJlbnROb2RlIHx8IF9kb2MuYm9keTtcblx0XHRcdFx0XHRcdGNhY2hlID0gbm9kZS5fZ3NDYWNoZTtcblx0XHRcdFx0XHRcdHRpbWUgPSBUd2VlbkxpdGUudGlja2VyLmZyYW1lO1xuXHRcdFx0XHRcdFx0aWYgKGNhY2hlICYmIGhvcml6ICYmIGNhY2hlLnRpbWUgPT09IHRpbWUpIHsgLy9wZXJmb3JtYW5jZSBvcHRpbWl6YXRpb246IHdlIHJlY29yZCB0aGUgd2lkdGggb2YgZWxlbWVudHMgYWxvbmcgd2l0aCB0aGUgdGlja2VyIGZyYW1lIHNvIHRoYXQgd2UgY2FuIHF1aWNrbHkgZ2V0IGl0IGFnYWluIG9uIHRoZSBzYW1lIHRpY2sgKHNlZW1zIHJlbGF0aXZlbHkgc2FmZSB0byBhc3N1bWUgaXQgd291bGRuJ3QgY2hhbmdlIG9uIHRoZSBzYW1lIHRpY2spXG5cdFx0XHRcdFx0XHRcdHJldHVybiBjYWNoZS53aWR0aCAqIHYgLyAxMDA7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRzdHlsZVsoaG9yaXogPyBcIndpZHRoXCIgOiBcImhlaWdodFwiKV0gPSB2ICsgc2Z4O1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRzdHlsZVsoaG9yaXogPyBcImJvcmRlckxlZnRXaWR0aFwiIDogXCJib3JkZXJUb3BXaWR0aFwiKV0gPSB2ICsgc2Z4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRub2RlLmFwcGVuZENoaWxkKF90ZW1wRGl2KTtcblx0XHRcdFx0XHRwaXggPSBwYXJzZUZsb2F0KF90ZW1wRGl2Wyhob3JpeiA/IFwib2Zmc2V0V2lkdGhcIiA6IFwib2Zmc2V0SGVpZ2h0XCIpXSk7XG5cdFx0XHRcdFx0bm9kZS5yZW1vdmVDaGlsZChfdGVtcERpdik7XG5cdFx0XHRcdFx0aWYgKGhvcml6ICYmIHNmeCA9PT0gXCIlXCIgJiYgQ1NTUGx1Z2luLmNhY2hlV2lkdGhzICE9PSBmYWxzZSkge1xuXHRcdFx0XHRcdFx0Y2FjaGUgPSBub2RlLl9nc0NhY2hlID0gbm9kZS5fZ3NDYWNoZSB8fCB7fTtcblx0XHRcdFx0XHRcdGNhY2hlLnRpbWUgPSB0aW1lO1xuXHRcdFx0XHRcdFx0Y2FjaGUud2lkdGggPSBwaXggLyB2ICogMTAwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAocGl4ID09PSAwICYmICFyZWN1cnNlKSB7XG5cdFx0XHRcdFx0XHRwaXggPSBfY29udmVydFRvUGl4ZWxzKHQsIHAsIHYsIHNmeCwgdHJ1ZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBuZWcgPyAtcGl4IDogcGl4O1xuXHRcdFx0fSxcblx0XHRcdF9jYWxjdWxhdGVPZmZzZXQgPSBfaW50ZXJuYWxzLmNhbGN1bGF0ZU9mZnNldCA9IGZ1bmN0aW9uKHQsIHAsIGNzKSB7IC8vZm9yIGZpZ3VyaW5nIG91dCBcInRvcFwiIG9yIFwibGVmdFwiIGluIHB4IHdoZW4gaXQncyBcImF1dG9cIi4gV2UgbmVlZCB0byBmYWN0b3IgaW4gbWFyZ2luIHdpdGggdGhlIG9mZnNldExlZnQvb2Zmc2V0VG9wXG5cdFx0XHRcdGlmIChfZ2V0U3R5bGUodCwgXCJwb3NpdGlvblwiLCBjcykgIT09IFwiYWJzb2x1dGVcIikgeyByZXR1cm4gMDsgfVxuXHRcdFx0XHR2YXIgZGltID0gKChwID09PSBcImxlZnRcIikgPyBcIkxlZnRcIiA6IFwiVG9wXCIpLFxuXHRcdFx0XHRcdHYgPSBfZ2V0U3R5bGUodCwgXCJtYXJnaW5cIiArIGRpbSwgY3MpO1xuXHRcdFx0XHRyZXR1cm4gdFtcIm9mZnNldFwiICsgZGltXSAtIChfY29udmVydFRvUGl4ZWxzKHQsIHAsIHBhcnNlRmxvYXQodiksIHYucmVwbGFjZShfc3VmZml4RXhwLCBcIlwiKSkgfHwgMCk7XG5cdFx0XHR9LFxuXG5cdFx0XHQvLyBAcHJpdmF0ZSByZXR1cm5zIGF0IG9iamVjdCBjb250YWluaW5nIEFMTCBvZiB0aGUgc3R5bGUgcHJvcGVydGllcyBpbiBjYW1lbENhc2UgYW5kIHRoZWlyIGFzc29jaWF0ZWQgdmFsdWVzLlxuXHRcdFx0X2dldEFsbFN0eWxlcyA9IGZ1bmN0aW9uKHQsIGNzKSB7XG5cdFx0XHRcdHZhciBzID0ge30sXG5cdFx0XHRcdFx0aSwgdHIsIHA7XG5cdFx0XHRcdGlmICgoY3MgPSBjcyB8fCBfZ2V0Q29tcHV0ZWRTdHlsZSh0LCBudWxsKSkpIHtcblx0XHRcdFx0XHRpZiAoKGkgPSBjcy5sZW5ndGgpKSB7XG5cdFx0XHRcdFx0XHR3aGlsZSAoLS1pID4gLTEpIHtcblx0XHRcdFx0XHRcdFx0cCA9IGNzW2ldO1xuXHRcdFx0XHRcdFx0XHRpZiAocC5pbmRleE9mKFwiLXRyYW5zZm9ybVwiKSA9PT0gLTEgfHwgX3RyYW5zZm9ybVByb3BDU1MgPT09IHApIHsgLy9Tb21lIHdlYmtpdCBicm93c2VycyBkdXBsaWNhdGUgdHJhbnNmb3JtIHZhbHVlcywgb25lIG5vbi1wcmVmaXhlZCBhbmQgb25lIHByZWZpeGVkIChcInRyYW5zZm9ybVwiIGFuZCBcIldlYmtpdFRyYW5zZm9ybVwiKSwgc28gd2UgbXVzdCB3ZWVkIG91dCB0aGUgZXh0cmEgb25lIGhlcmUuXG5cdFx0XHRcdFx0XHRcdFx0c1twLnJlcGxhY2UoX2NhbWVsRXhwLCBfY2FtZWxGdW5jKV0gPSBjcy5nZXRQcm9wZXJ0eVZhbHVlKHApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHsgLy9zb21lIGJyb3dzZXJzIGJlaGF2ZSBkaWZmZXJlbnRseSAtIGNzLmxlbmd0aCBpcyBhbHdheXMgMCwgc28gd2UgbXVzdCBkbyBhIGZvci4uLmluIGxvb3AuXG5cdFx0XHRcdFx0XHRmb3IgKGkgaW4gY3MpIHtcblx0XHRcdFx0XHRcdFx0aWYgKGkuaW5kZXhPZihcIlRyYW5zZm9ybVwiKSA9PT0gLTEgfHwgX3RyYW5zZm9ybVByb3AgPT09IGkpIHsgLy9Tb21lIHdlYmtpdCBicm93c2VycyBkdXBsaWNhdGUgdHJhbnNmb3JtIHZhbHVlcywgb25lIG5vbi1wcmVmaXhlZCBhbmQgb25lIHByZWZpeGVkIChcInRyYW5zZm9ybVwiIGFuZCBcIldlYmtpdFRyYW5zZm9ybVwiKSwgc28gd2UgbXVzdCB3ZWVkIG91dCB0aGUgZXh0cmEgb25lIGhlcmUuXG5cdFx0XHRcdFx0XHRcdFx0c1tpXSA9IGNzW2ldO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2UgaWYgKChjcyA9IHQuY3VycmVudFN0eWxlIHx8IHQuc3R5bGUpKSB7XG5cdFx0XHRcdFx0Zm9yIChpIGluIGNzKSB7XG5cdFx0XHRcdFx0XHRpZiAodHlwZW9mKGkpID09PSBcInN0cmluZ1wiICYmIHNbaV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0XHRzW2kucmVwbGFjZShfY2FtZWxFeHAsIF9jYW1lbEZ1bmMpXSA9IGNzW2ldO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIV9zdXBwb3J0c09wYWNpdHkpIHtcblx0XHRcdFx0XHRzLm9wYWNpdHkgPSBfZ2V0SUVPcGFjaXR5KHQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRyID0gX2dldFRyYW5zZm9ybSh0LCBjcywgZmFsc2UpO1xuXHRcdFx0XHRzLnJvdGF0aW9uID0gdHIucm90YXRpb247XG5cdFx0XHRcdHMuc2tld1ggPSB0ci5za2V3WDtcblx0XHRcdFx0cy5zY2FsZVggPSB0ci5zY2FsZVg7XG5cdFx0XHRcdHMuc2NhbGVZID0gdHIuc2NhbGVZO1xuXHRcdFx0XHRzLnggPSB0ci54O1xuXHRcdFx0XHRzLnkgPSB0ci55O1xuXHRcdFx0XHRpZiAoX3N1cHBvcnRzM0QpIHtcblx0XHRcdFx0XHRzLnogPSB0ci56O1xuXHRcdFx0XHRcdHMucm90YXRpb25YID0gdHIucm90YXRpb25YO1xuXHRcdFx0XHRcdHMucm90YXRpb25ZID0gdHIucm90YXRpb25ZO1xuXHRcdFx0XHRcdHMuc2NhbGVaID0gdHIuc2NhbGVaO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChzLmZpbHRlcnMpIHtcblx0XHRcdFx0XHRkZWxldGUgcy5maWx0ZXJzO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBzO1xuXHRcdFx0fSxcblxuXHRcdFx0Ly8gQHByaXZhdGUgYW5hbHl6ZXMgdHdvIHN0eWxlIG9iamVjdHMgKGFzIHJldHVybmVkIGJ5IF9nZXRBbGxTdHlsZXMoKSkgYW5kIG9ubHkgbG9va3MgZm9yIGRpZmZlcmVuY2VzIGJldHdlZW4gdGhlbSB0aGF0IGNvbnRhaW4gdHdlZW5hYmxlIHZhbHVlcyAobGlrZSBhIG51bWJlciBvciBjb2xvcikuIEl0IHJldHVybnMgYW4gb2JqZWN0IHdpdGggYSBcImRpZnNcIiBwcm9wZXJ0eSB3aGljaCByZWZlcnMgdG8gYW4gb2JqZWN0IGNvbnRhaW5pbmcgb25seSB0aG9zZSBpc29sYXRlZCBwcm9wZXJ0aWVzIGFuZCB2YWx1ZXMgZm9yIHR3ZWVuaW5nLCBhbmQgYSBcImZpcnN0TVBUXCIgcHJvcGVydHkgd2hpY2ggcmVmZXJzIHRvIHRoZSBmaXJzdCBNaW5pUHJvcFR3ZWVuIGluc3RhbmNlIGluIGEgbGlua2VkIGxpc3QgdGhhdCByZWNvcmRlZCBhbGwgdGhlIHN0YXJ0aW5nIHZhbHVlcyBvZiB0aGUgZGlmZmVyZW50IHByb3BlcnRpZXMgc28gdGhhdCB3ZSBjYW4gcmV2ZXJ0IHRvIHRoZW0gYXQgdGhlIGVuZCBvciBiZWdpbm5pbmcgb2YgdGhlIHR3ZWVuIC0gd2UgZG9uJ3Qgd2FudCB0aGUgY2FzY2FkaW5nIHRvIGdldCBtZXNzZWQgdXAuIFRoZSBmb3JjZUxvb2t1cCBwYXJhbWV0ZXIgaXMgYW4gb3B0aW9uYWwgZ2VuZXJpYyBvYmplY3Qgd2l0aCBwcm9wZXJ0aWVzIHRoYXQgc2hvdWxkIGJlIGZvcmNlZCBpbnRvIHRoZSByZXN1bHRzIC0gdGhpcyBpcyBuZWNlc3NhcnkgZm9yIGNsYXNzTmFtZSB0d2VlbnMgdGhhdCBhcmUgb3ZlcndyaXRpbmcgb3RoZXJzIGJlY2F1c2UgaW1hZ2luZSBhIHNjZW5hcmlvIHdoZXJlIGEgcm9sbG92ZXIvcm9sbG91dCBhZGRzL3JlbW92ZXMgYSBjbGFzcyBhbmQgdGhlIHVzZXIgc3dpcGVzIHRoZSBtb3VzZSBvdmVyIHRoZSB0YXJnZXQgU1VQRVIgZmFzdCwgdGh1cyBub3RoaW5nIGFjdHVhbGx5IGNoYW5nZWQgeWV0IGFuZCB0aGUgc3Vic2VxdWVudCBjb21wYXJpc29uIG9mIHRoZSBwcm9wZXJ0aWVzIHdvdWxkIGluZGljYXRlIHRoZXkgbWF0Y2ggKGVzcGVjaWFsbHkgd2hlbiBweCByb3VuZGluZyBpcyB0YWtlbiBpbnRvIGNvbnNpZGVyYXRpb24pLCB0aHVzIG5vIHR3ZWVuaW5nIGlzIG5lY2Vzc2FyeSBldmVuIHRob3VnaCBpdCBTSE9VTEQgdHdlZW4gYW5kIHJlbW92ZSB0aG9zZSBwcm9wZXJ0aWVzIGFmdGVyIHRoZSB0d2VlbiAob3RoZXJ3aXNlIHRoZSBpbmxpbmUgc3R5bGVzIHdpbGwgY29udGFtaW5hdGUgdGhpbmdzKS4gU2VlIHRoZSBjbGFzc05hbWUgU3BlY2lhbFByb3AgY29kZSBmb3IgZGV0YWlscy5cblx0XHRcdF9jc3NEaWYgPSBmdW5jdGlvbih0LCBzMSwgczIsIHZhcnMsIGZvcmNlTG9va3VwKSB7XG5cdFx0XHRcdHZhciBkaWZzID0ge30sXG5cdFx0XHRcdFx0c3R5bGUgPSB0LnN0eWxlLFxuXHRcdFx0XHRcdHZhbCwgcCwgbXB0O1xuXHRcdFx0XHRmb3IgKHAgaW4gczIpIHtcblx0XHRcdFx0XHRpZiAocCAhPT0gXCJjc3NUZXh0XCIpIGlmIChwICE9PSBcImxlbmd0aFwiKSBpZiAoaXNOYU4ocCkpIGlmIChzMVtwXSAhPT0gKHZhbCA9IHMyW3BdKSB8fCAoZm9yY2VMb29rdXAgJiYgZm9yY2VMb29rdXBbcF0pKSBpZiAocC5pbmRleE9mKFwiT3JpZ2luXCIpID09PSAtMSkgaWYgKHR5cGVvZih2YWwpID09PSBcIm51bWJlclwiIHx8IHR5cGVvZih2YWwpID09PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRcdFx0XHRkaWZzW3BdID0gKHZhbCA9PT0gXCJhdXRvXCIgJiYgKHAgPT09IFwibGVmdFwiIHx8IHAgPT09IFwidG9wXCIpKSA/IF9jYWxjdWxhdGVPZmZzZXQodCwgcCkgOiAoKHZhbCA9PT0gXCJcIiB8fCB2YWwgPT09IFwiYXV0b1wiIHx8IHZhbCA9PT0gXCJub25lXCIpICYmIHR5cGVvZihzMVtwXSkgPT09IFwic3RyaW5nXCIgJiYgczFbcF0ucmVwbGFjZShfTmFORXhwLCBcIlwiKSAhPT0gXCJcIikgPyAwIDogdmFsOyAvL2lmIHRoZSBlbmRpbmcgdmFsdWUgaXMgZGVmYXVsdGluZyAoXCJcIiBvciBcImF1dG9cIiksIHdlIGNoZWNrIHRoZSBzdGFydGluZyB2YWx1ZSBhbmQgaWYgaXQgY2FuIGJlIHBhcnNlZCBpbnRvIGEgbnVtYmVyIChhIHN0cmluZyB3aGljaCBjb3VsZCBoYXZlIGEgc3VmZml4IHRvbywgbGlrZSA3MDBweCksIHRoZW4gd2Ugc3dhcCBpbiAwIGZvciBcIlwiIG9yIFwiYXV0b1wiIHNvIHRoYXQgdGhpbmdzIGFjdHVhbGx5IHR3ZWVuLlxuXHRcdFx0XHRcdFx0aWYgKHN0eWxlW3BdICE9PSB1bmRlZmluZWQpIHsgLy9mb3IgY2xhc3NOYW1lIHR3ZWVucywgd2UgbXVzdCByZW1lbWJlciB3aGljaCBwcm9wZXJ0aWVzIGFscmVhZHkgZXhpc3RlZCBpbmxpbmUgLSB0aGUgb25lcyB0aGF0IGRpZG4ndCBzaG91bGQgYmUgcmVtb3ZlZCB3aGVuIHRoZSB0d2VlbiBpc24ndCBpbiBwcm9ncmVzcyBiZWNhdXNlIHRoZXkgd2VyZSBvbmx5IGludHJvZHVjZWQgdG8gZmFjaWxpdGF0ZSB0aGUgdHJhbnNpdGlvbiBiZXR3ZWVuIGNsYXNzZXMuXG5cdFx0XHRcdFx0XHRcdG1wdCA9IG5ldyBNaW5pUHJvcFR3ZWVuKHN0eWxlLCBwLCBzdHlsZVtwXSwgbXB0KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHZhcnMpIHtcblx0XHRcdFx0XHRmb3IgKHAgaW4gdmFycykgeyAvL2NvcHkgcHJvcGVydGllcyAoZXhjZXB0IGNsYXNzTmFtZSlcblx0XHRcdFx0XHRcdGlmIChwICE9PSBcImNsYXNzTmFtZVwiKSB7XG5cdFx0XHRcdFx0XHRcdGRpZnNbcF0gPSB2YXJzW3BdO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4ge2RpZnM6ZGlmcywgZmlyc3RNUFQ6bXB0fTtcblx0XHRcdH0sXG5cdFx0XHRfZGltZW5zaW9ucyA9IHt3aWR0aDpbXCJMZWZ0XCIsXCJSaWdodFwiXSwgaGVpZ2h0OltcIlRvcFwiLFwiQm90dG9tXCJdfSxcblx0XHRcdF9tYXJnaW5zID0gW1wibWFyZ2luTGVmdFwiLFwibWFyZ2luUmlnaHRcIixcIm1hcmdpblRvcFwiLFwibWFyZ2luQm90dG9tXCJdLFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIEBwcml2YXRlIEdldHMgdGhlIHdpZHRoIG9yIGhlaWdodCBvZiBhbiBlbGVtZW50XG5cdFx0XHQgKiBAcGFyYW0geyFPYmplY3R9IHQgVGFyZ2V0IGVsZW1lbnRcblx0XHRcdCAqIEBwYXJhbSB7IXN0cmluZ30gcCBQcm9wZXJ0eSBuYW1lIChcIndpZHRoXCIgb3IgXCJoZWlnaHRcIilcblx0XHRcdCAqIEBwYXJhbSB7T2JqZWN0PX0gY3MgQ29tcHV0ZWQgc3R5bGUgb2JqZWN0IChpZiBvbmUgZXhpc3RzKS4gSnVzdCBhIHNwZWVkIG9wdGltaXphdGlvbi5cblx0XHRcdCAqIEByZXR1cm4ge251bWJlcn0gRGltZW5zaW9uIChpbiBwaXhlbHMpXG5cdFx0XHQgKi9cblx0XHRcdF9nZXREaW1lbnNpb24gPSBmdW5jdGlvbih0LCBwLCBjcykge1xuXHRcdFx0XHR2YXIgdiA9IHBhcnNlRmxvYXQoKHAgPT09IFwid2lkdGhcIikgPyB0Lm9mZnNldFdpZHRoIDogdC5vZmZzZXRIZWlnaHQpLFxuXHRcdFx0XHRcdGEgPSBfZGltZW5zaW9uc1twXSxcblx0XHRcdFx0XHRpID0gYS5sZW5ndGg7XG5cdFx0XHRcdGNzID0gY3MgfHwgX2dldENvbXB1dGVkU3R5bGUodCwgbnVsbCk7XG5cdFx0XHRcdHdoaWxlICgtLWkgPiAtMSkge1xuXHRcdFx0XHRcdHYgLT0gcGFyc2VGbG9hdCggX2dldFN0eWxlKHQsIFwicGFkZGluZ1wiICsgYVtpXSwgY3MsIHRydWUpICkgfHwgMDtcblx0XHRcdFx0XHR2IC09IHBhcnNlRmxvYXQoIF9nZXRTdHlsZSh0LCBcImJvcmRlclwiICsgYVtpXSArIFwiV2lkdGhcIiwgY3MsIHRydWUpICkgfHwgMDtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdjtcblx0XHRcdH0sXG5cblx0XHRcdC8vIEBwcml2YXRlIFBhcnNlcyBwb3NpdGlvbi1yZWxhdGVkIGNvbXBsZXggc3RyaW5ncyBsaWtlIFwidG9wIGxlZnRcIiBvciBcIjUwcHggMTBweFwiIG9yIFwiNzAlIDIwJVwiLCBldGMuIHdoaWNoIGFyZSB1c2VkIGZvciB0aGluZ3MgbGlrZSB0cmFuc2Zvcm1PcmlnaW4gb3IgYmFja2dyb3VuZFBvc2l0aW9uLiBPcHRpb25hbGx5IGRlY29yYXRlcyBhIHN1cHBsaWVkIG9iamVjdCAocmVjT2JqKSB3aXRoIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczogXCJveFwiIChvZmZzZXRYKSwgXCJveVwiIChvZmZzZXRZKSwgXCJveHBcIiAoaWYgdHJ1ZSwgXCJveFwiIGlzIGEgcGVyY2VudGFnZSBub3QgYSBwaXhlbCB2YWx1ZSksIGFuZCBcIm94eVwiIChpZiB0cnVlLCBcIm95XCIgaXMgYSBwZXJjZW50YWdlIG5vdCBhIHBpeGVsIHZhbHVlKVxuXHRcdFx0X3BhcnNlUG9zaXRpb24gPSBmdW5jdGlvbih2LCByZWNPYmopIHtcblx0XHRcdFx0aWYgKHYgPT0gbnVsbCB8fCB2ID09PSBcIlwiIHx8IHYgPT09IFwiYXV0b1wiIHx8IHYgPT09IFwiYXV0byBhdXRvXCIpIHsgLy9ub3RlOiBGaXJlZm94IHVzZXMgXCJhdXRvIGF1dG9cIiBhcyBkZWZhdWx0IHdoZXJlYXMgQ2hyb21lIHVzZXMgXCJhdXRvXCIuXG5cdFx0XHRcdFx0diA9IFwiMCAwXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0dmFyIGEgPSB2LnNwbGl0KFwiIFwiKSxcblx0XHRcdFx0XHR4ID0gKHYuaW5kZXhPZihcImxlZnRcIikgIT09IC0xKSA/IFwiMCVcIiA6ICh2LmluZGV4T2YoXCJyaWdodFwiKSAhPT0gLTEpID8gXCIxMDAlXCIgOiBhWzBdLFxuXHRcdFx0XHRcdHkgPSAodi5pbmRleE9mKFwidG9wXCIpICE9PSAtMSkgPyBcIjAlXCIgOiAodi5pbmRleE9mKFwiYm90dG9tXCIpICE9PSAtMSkgPyBcIjEwMCVcIiA6IGFbMV07XG5cdFx0XHRcdGlmICh5ID09IG51bGwpIHtcblx0XHRcdFx0XHR5ID0gKHggPT09IFwiY2VudGVyXCIpID8gXCI1MCVcIiA6IFwiMFwiO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHkgPT09IFwiY2VudGVyXCIpIHtcblx0XHRcdFx0XHR5ID0gXCI1MCVcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoeCA9PT0gXCJjZW50ZXJcIiB8fCAoaXNOYU4ocGFyc2VGbG9hdCh4KSkgJiYgKHggKyBcIlwiKS5pbmRleE9mKFwiPVwiKSA9PT0gLTEpKSB7IC8vcmVtZW1iZXIsIHRoZSB1c2VyIGNvdWxkIGZsaXAtZmxvcCB0aGUgdmFsdWVzIGFuZCBzYXkgXCJib3R0b20gY2VudGVyXCIgb3IgXCJjZW50ZXIgYm90dG9tXCIsIGV0Yy4gXCJjZW50ZXJcIiBpcyBhbWJpZ3VvdXMgYmVjYXVzZSBpdCBjb3VsZCBiZSB1c2VkIHRvIGRlc2NyaWJlIGhvcml6b250YWwgb3IgdmVydGljYWwsIGhlbmNlIHRoZSBpc05hTigpLiBJZiB0aGVyZSdzIGFuIFwiPVwiIHNpZ24gaW4gdGhlIHZhbHVlLCBpdCdzIHJlbGF0aXZlLlxuXHRcdFx0XHRcdHggPSBcIjUwJVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHYgPSB4ICsgXCIgXCIgKyB5ICsgKChhLmxlbmd0aCA+IDIpID8gXCIgXCIgKyBhWzJdIDogXCJcIik7XG5cdFx0XHRcdGlmIChyZWNPYmopIHtcblx0XHRcdFx0XHRyZWNPYmoub3hwID0gKHguaW5kZXhPZihcIiVcIikgIT09IC0xKTtcblx0XHRcdFx0XHRyZWNPYmoub3lwID0gKHkuaW5kZXhPZihcIiVcIikgIT09IC0xKTtcblx0XHRcdFx0XHRyZWNPYmoub3hyID0gKHguY2hhckF0KDEpID09PSBcIj1cIik7XG5cdFx0XHRcdFx0cmVjT2JqLm95ciA9ICh5LmNoYXJBdCgxKSA9PT0gXCI9XCIpO1xuXHRcdFx0XHRcdHJlY09iai5veCA9IHBhcnNlRmxvYXQoeC5yZXBsYWNlKF9OYU5FeHAsIFwiXCIpKTtcblx0XHRcdFx0XHRyZWNPYmoub3kgPSBwYXJzZUZsb2F0KHkucmVwbGFjZShfTmFORXhwLCBcIlwiKSk7XG5cdFx0XHRcdFx0cmVjT2JqLnYgPSB2O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiByZWNPYmogfHwgdjtcblx0XHRcdH0sXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogQHByaXZhdGUgVGFrZXMgYW4gZW5kaW5nIHZhbHVlICh0eXBpY2FsbHkgYSBzdHJpbmcsIGJ1dCBjYW4gYmUgYSBudW1iZXIpIGFuZCBhIHN0YXJ0aW5nIHZhbHVlIGFuZCByZXR1cm5zIHRoZSBjaGFuZ2UgYmV0d2VlbiB0aGUgdHdvLCBsb29raW5nIGZvciByZWxhdGl2ZSB2YWx1ZSBpbmRpY2F0b3JzIGxpa2UgKz0gYW5kIC09IGFuZCBpdCBhbHNvIGlnbm9yZXMgc3VmZml4ZXMgKGJ1dCBtYWtlIHN1cmUgdGhlIGVuZGluZyB2YWx1ZSBzdGFydHMgd2l0aCBhIG51bWJlciBvciArPS8tPSBhbmQgdGhhdCB0aGUgc3RhcnRpbmcgdmFsdWUgaXMgYSBOVU1CRVIhKVxuXHRcdFx0ICogQHBhcmFtIHsobnVtYmVyfHN0cmluZyl9IGUgRW5kIHZhbHVlIHdoaWNoIGlzIHR5cGljYWxseSBhIHN0cmluZywgYnV0IGNvdWxkIGJlIGEgbnVtYmVyXG5cdFx0XHQgKiBAcGFyYW0geyhudW1iZXJ8c3RyaW5nKX0gYiBCZWdpbm5pbmcgdmFsdWUgd2hpY2ggaXMgdHlwaWNhbGx5IGEgc3RyaW5nIGJ1dCBjb3VsZCBiZSBhIG51bWJlclxuXHRcdFx0ICogQHJldHVybiB7bnVtYmVyfSBBbW91bnQgb2YgY2hhbmdlIGJldHdlZW4gdGhlIGJlZ2lubmluZyBhbmQgZW5kaW5nIHZhbHVlcyAocmVsYXRpdmUgdmFsdWVzIHRoYXQgaGF2ZSBhIFwiKz1cIiBvciBcIi09XCIgYXJlIHJlY29nbml6ZWQpXG5cdFx0XHQgKi9cblx0XHRcdF9wYXJzZUNoYW5nZSA9IGZ1bmN0aW9uKGUsIGIpIHtcblx0XHRcdFx0cmV0dXJuICh0eXBlb2YoZSkgPT09IFwic3RyaW5nXCIgJiYgZS5jaGFyQXQoMSkgPT09IFwiPVwiKSA/IHBhcnNlSW50KGUuY2hhckF0KDApICsgXCIxXCIsIDEwKSAqIHBhcnNlRmxvYXQoZS5zdWJzdHIoMikpIDogcGFyc2VGbG9hdChlKSAtIHBhcnNlRmxvYXQoYik7XG5cdFx0XHR9LFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIEBwcml2YXRlIFRha2VzIGEgdmFsdWUgYW5kIGEgZGVmYXVsdCBudW1iZXIsIGNoZWNrcyBpZiB0aGUgdmFsdWUgaXMgcmVsYXRpdmUsIG51bGwsIG9yIG51bWVyaWMgYW5kIHNwaXRzIGJhY2sgYSBub3JtYWxpemVkIG51bWJlciBhY2NvcmRpbmdseS4gUHJpbWFyaWx5IHVzZWQgaW4gdGhlIF9wYXJzZVRyYW5zZm9ybSgpIGZ1bmN0aW9uLlxuXHRcdFx0ICogQHBhcmFtIHtPYmplY3R9IHYgVmFsdWUgdG8gYmUgcGFyc2VkXG5cdFx0XHQgKiBAcGFyYW0geyFudW1iZXJ9IGQgRGVmYXVsdCB2YWx1ZSAod2hpY2ggaXMgYWxzbyB1c2VkIGZvciByZWxhdGl2ZSBjYWxjdWxhdGlvbnMgaWYgXCIrPVwiIG9yIFwiLT1cIiBpcyBmb3VuZCBpbiB0aGUgZmlyc3QgcGFyYW1ldGVyKVxuXHRcdFx0ICogQHJldHVybiB7bnVtYmVyfSBQYXJzZWQgdmFsdWVcblx0XHRcdCAqL1xuXHRcdFx0X3BhcnNlVmFsID0gZnVuY3Rpb24odiwgZCkge1xuXHRcdFx0XHRyZXR1cm4gKHYgPT0gbnVsbCkgPyBkIDogKHR5cGVvZih2KSA9PT0gXCJzdHJpbmdcIiAmJiB2LmNoYXJBdCgxKSA9PT0gXCI9XCIpID8gcGFyc2VJbnQodi5jaGFyQXQoMCkgKyBcIjFcIiwgMTApICogcGFyc2VGbG9hdCh2LnN1YnN0cigyKSkgKyBkIDogcGFyc2VGbG9hdCh2KTtcblx0XHRcdH0sXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogQHByaXZhdGUgVHJhbnNsYXRlcyBzdHJpbmdzIGxpa2UgXCI0MGRlZ1wiIG9yIFwiNDBcIiBvciA0MHJhZFwiIG9yIFwiKz00MGRlZ1wiIG9yIFwiMjcwX3Nob3J0XCIgb3IgXCItOTBfY3dcIiBvciBcIis9NDVfY2N3XCIgdG8gYSBudW1lcmljIHJhZGlhbiBhbmdsZS4gT2YgY291cnNlIGEgc3RhcnRpbmcvZGVmYXVsdCB2YWx1ZSBtdXN0IGJlIGZlZCBpbiB0b28gc28gdGhhdCByZWxhdGl2ZSB2YWx1ZXMgY2FuIGJlIGNhbGN1bGF0ZWQgcHJvcGVybHkuXG5cdFx0XHQgKiBAcGFyYW0ge09iamVjdH0gdiBWYWx1ZSB0byBiZSBwYXJzZWRcblx0XHRcdCAqIEBwYXJhbSB7IW51bWJlcn0gZCBEZWZhdWx0IHZhbHVlICh3aGljaCBpcyBhbHNvIHVzZWQgZm9yIHJlbGF0aXZlIGNhbGN1bGF0aW9ucyBpZiBcIis9XCIgb3IgXCItPVwiIGlzIGZvdW5kIGluIHRoZSBmaXJzdCBwYXJhbWV0ZXIpXG5cdFx0XHQgKiBAcGFyYW0ge3N0cmluZz19IHAgcHJvcGVydHkgbmFtZSBmb3IgZGlyZWN0aW9uYWxFbmQgKG9wdGlvbmFsIC0gb25seSB1c2VkIHdoZW4gdGhlIHBhcnNlZCB2YWx1ZSBpcyBkaXJlY3Rpb25hbCAoXCJfc2hvcnRcIiwgXCJfY3dcIiwgb3IgXCJfY2N3XCIgc3VmZml4KS4gV2UgbmVlZCBhIHdheSB0byBzdG9yZSB0aGUgdW5jb21wZW5zYXRlZCB2YWx1ZSBzbyB0aGF0IGF0IHRoZSBlbmQgb2YgdGhlIHR3ZWVuLCB3ZSBzZXQgaXQgdG8gZXhhY3RseSB3aGF0IHdhcyByZXF1ZXN0ZWQgd2l0aCBubyBkaXJlY3Rpb25hbCBjb21wZW5zYXRpb24pLiBQcm9wZXJ0eSBuYW1lIHdvdWxkIGJlIFwicm90YXRpb25cIiwgXCJyb3RhdGlvblhcIiwgb3IgXCJyb3RhdGlvbllcIlxuXHRcdFx0ICogQHBhcmFtIHtPYmplY3Q9fSBkaXJlY3Rpb25hbEVuZCBBbiBvYmplY3QgdGhhdCB3aWxsIHN0b3JlIHRoZSByYXcgZW5kIHZhbHVlcyBmb3IgZGlyZWN0aW9uYWwgYW5nbGVzIChcIl9zaG9ydFwiLCBcIl9jd1wiLCBvciBcIl9jY3dcIiBzdWZmaXgpLiBXZSBuZWVkIGEgd2F5IHRvIHN0b3JlIHRoZSB1bmNvbXBlbnNhdGVkIHZhbHVlIHNvIHRoYXQgYXQgdGhlIGVuZCBvZiB0aGUgdHdlZW4sIHdlIHNldCBpdCB0byBleGFjdGx5IHdoYXQgd2FzIHJlcXVlc3RlZCB3aXRoIG5vIGRpcmVjdGlvbmFsIGNvbXBlbnNhdGlvbi5cblx0XHRcdCAqIEByZXR1cm4ge251bWJlcn0gcGFyc2VkIGFuZ2xlIGluIHJhZGlhbnNcblx0XHRcdCAqL1xuXHRcdFx0X3BhcnNlQW5nbGUgPSBmdW5jdGlvbih2LCBkLCBwLCBkaXJlY3Rpb25hbEVuZCkge1xuXHRcdFx0XHR2YXIgbWluID0gMC4wMDAwMDEsXG5cdFx0XHRcdFx0Y2FwLCBzcGxpdCwgZGlmLCByZXN1bHQsIGlzUmVsYXRpdmU7XG5cdFx0XHRcdGlmICh2ID09IG51bGwpIHtcblx0XHRcdFx0XHRyZXN1bHQgPSBkO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHR5cGVvZih2KSA9PT0gXCJudW1iZXJcIikge1xuXHRcdFx0XHRcdHJlc3VsdCA9IHY7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y2FwID0gMzYwO1xuXHRcdFx0XHRcdHNwbGl0ID0gdi5zcGxpdChcIl9cIik7XG5cdFx0XHRcdFx0aXNSZWxhdGl2ZSA9ICh2LmNoYXJBdCgxKSA9PT0gXCI9XCIpO1xuXHRcdFx0XHRcdGRpZiA9IChpc1JlbGF0aXZlID8gcGFyc2VJbnQodi5jaGFyQXQoMCkgKyBcIjFcIiwgMTApICogcGFyc2VGbG9hdChzcGxpdFswXS5zdWJzdHIoMikpIDogcGFyc2VGbG9hdChzcGxpdFswXSkpICogKCh2LmluZGV4T2YoXCJyYWRcIikgPT09IC0xKSA/IDEgOiBfUkFEMkRFRykgLSAoaXNSZWxhdGl2ZSA/IDAgOiBkKTtcblx0XHRcdFx0XHRpZiAoc3BsaXQubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRpZiAoZGlyZWN0aW9uYWxFbmQpIHtcblx0XHRcdFx0XHRcdFx0ZGlyZWN0aW9uYWxFbmRbcF0gPSBkICsgZGlmO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKHYuaW5kZXhPZihcInNob3J0XCIpICE9PSAtMSkge1xuXHRcdFx0XHRcdFx0XHRkaWYgPSBkaWYgJSBjYXA7XG5cdFx0XHRcdFx0XHRcdGlmIChkaWYgIT09IGRpZiAlIChjYXAgLyAyKSkge1xuXHRcdFx0XHRcdFx0XHRcdGRpZiA9IChkaWYgPCAwKSA/IGRpZiArIGNhcCA6IGRpZiAtIGNhcDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKHYuaW5kZXhPZihcIl9jd1wiKSAhPT0gLTEgJiYgZGlmIDwgMCkge1xuXHRcdFx0XHRcdFx0XHRkaWYgPSAoKGRpZiArIGNhcCAqIDk5OTk5OTk5OTkpICUgY2FwKSAtICgoZGlmIC8gY2FwKSB8IDApICogY2FwO1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmICh2LmluZGV4T2YoXCJjY3dcIikgIT09IC0xICYmIGRpZiA+IDApIHtcblx0XHRcdFx0XHRcdFx0ZGlmID0gKChkaWYgLSBjYXAgKiA5OTk5OTk5OTk5KSAlIGNhcCkgLSAoKGRpZiAvIGNhcCkgfCAwKSAqIGNhcDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmVzdWx0ID0gZCArIGRpZjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAocmVzdWx0IDwgbWluICYmIHJlc3VsdCA+IC1taW4pIHtcblx0XHRcdFx0XHRyZXN1bHQgPSAwO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHR9LFxuXG5cdFx0XHRfY29sb3JMb29rdXAgPSB7YXF1YTpbMCwyNTUsMjU1XSxcblx0XHRcdFx0bGltZTpbMCwyNTUsMF0sXG5cdFx0XHRcdHNpbHZlcjpbMTkyLDE5MiwxOTJdLFxuXHRcdFx0XHRibGFjazpbMCwwLDBdLFxuXHRcdFx0XHRtYXJvb246WzEyOCwwLDBdLFxuXHRcdFx0XHR0ZWFsOlswLDEyOCwxMjhdLFxuXHRcdFx0XHRibHVlOlswLDAsMjU1XSxcblx0XHRcdFx0bmF2eTpbMCwwLDEyOF0sXG5cdFx0XHRcdHdoaXRlOlsyNTUsMjU1LDI1NV0sXG5cdFx0XHRcdGZ1Y2hzaWE6WzI1NSwwLDI1NV0sXG5cdFx0XHRcdG9saXZlOlsxMjgsMTI4LDBdLFxuXHRcdFx0XHR5ZWxsb3c6WzI1NSwyNTUsMF0sXG5cdFx0XHRcdG9yYW5nZTpbMjU1LDE2NSwwXSxcblx0XHRcdFx0Z3JheTpbMTI4LDEyOCwxMjhdLFxuXHRcdFx0XHRwdXJwbGU6WzEyOCwwLDEyOF0sXG5cdFx0XHRcdGdyZWVuOlswLDEyOCwwXSxcblx0XHRcdFx0cmVkOlsyNTUsMCwwXSxcblx0XHRcdFx0cGluazpbMjU1LDE5MiwyMDNdLFxuXHRcdFx0XHRjeWFuOlswLDI1NSwyNTVdLFxuXHRcdFx0XHR0cmFuc3BhcmVudDpbMjU1LDI1NSwyNTUsMF19LFxuXG5cdFx0XHRfaHVlID0gZnVuY3Rpb24oaCwgbTEsIG0yKSB7XG5cdFx0XHRcdGggPSAoaCA8IDApID8gaCArIDEgOiAoaCA+IDEpID8gaCAtIDEgOiBoO1xuXHRcdFx0XHRyZXR1cm4gKCgoKGggKiA2IDwgMSkgPyBtMSArIChtMiAtIG0xKSAqIGggKiA2IDogKGggPCAwLjUpID8gbTIgOiAoaCAqIDMgPCAyKSA/IG0xICsgKG0yIC0gbTEpICogKDIgLyAzIC0gaCkgKiA2IDogbTEpICogMjU1KSArIDAuNSkgfCAwO1xuXHRcdFx0fSxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBAcHJpdmF0ZSBQYXJzZXMgYSBjb2xvciAobGlrZSAjOUYwLCAjRkY5OTAwLCBvciByZ2IoMjU1LDUxLDE1MykpIGludG8gYW4gYXJyYXkgd2l0aCAzIGVsZW1lbnRzIGZvciByZWQsIGdyZWVuLCBhbmQgYmx1ZS4gQWxzbyBoYW5kbGVzIHJnYmEoKSB2YWx1ZXMgKHNwbGl0cyBpbnRvIGFycmF5IG9mIDQgZWxlbWVudHMgb2YgY291cnNlKVxuXHRcdFx0ICogQHBhcmFtIHsoc3RyaW5nfG51bWJlcil9IHYgVGhlIHZhbHVlIHRoZSBzaG91bGQgYmUgcGFyc2VkIHdoaWNoIGNvdWxkIGJlIGEgc3RyaW5nIGxpa2UgIzlGMCBvciByZ2IoMjU1LDEwMiw1MSkgb3IgcmdiYSgyNTUsMCwwLDAuNSkgb3IgaXQgY291bGQgYmUgYSBudW1iZXIgbGlrZSAweEZGMDBDQyBvciBldmVuIGEgbmFtZWQgY29sb3IgbGlrZSByZWQsIGJsdWUsIHB1cnBsZSwgZXRjLlxuXHRcdFx0ICogQHJldHVybiB7QXJyYXkuPG51bWJlcj59IEFuIGFycmF5IGNvbnRhaW5pbmcgcmVkLCBncmVlbiwgYW5kIGJsdWUgKGFuZCBvcHRpb25hbGx5IGFscGhhKSBpbiB0aGF0IG9yZGVyLlxuXHRcdFx0ICovXG5cdFx0XHRfcGFyc2VDb2xvciA9IENTU1BsdWdpbi5wYXJzZUNvbG9yID0gZnVuY3Rpb24odikge1xuXHRcdFx0XHR2YXIgYzEsIGMyLCBjMywgaCwgcywgbDtcblx0XHRcdFx0aWYgKCF2IHx8IHYgPT09IFwiXCIpIHtcblx0XHRcdFx0XHRyZXR1cm4gX2NvbG9yTG9va3VwLmJsYWNrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0eXBlb2YodikgPT09IFwibnVtYmVyXCIpIHtcblx0XHRcdFx0XHRyZXR1cm4gW3YgPj4gMTYsICh2ID4+IDgpICYgMjU1LCB2ICYgMjU1XTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodi5jaGFyQXQodi5sZW5ndGggLSAxKSA9PT0gXCIsXCIpIHsgLy9zb21ldGltZXMgYSB0cmFpbGluZyBjb21tbWEgaXMgaW5jbHVkZWQgYW5kIHdlIHNob3VsZCBjaG9wIGl0IG9mZiAodHlwaWNhbGx5IGZyb20gYSBjb21tYS1kZWxpbWl0ZWQgbGlzdCBvZiB2YWx1ZXMgbGlrZSBhIHRleHRTaGFkb3c6XCIycHggMnB4IDJweCBibHVlLCA1cHggNXB4IDVweCByZ2IoMjU1LDAsMClcIiAtIGluIHRoaXMgZXhhbXBsZSBcImJsdWUsXCIgaGFzIGEgdHJhaWxpbmcgY29tbWEuIFdlIGNvdWxkIHN0cmlwIGl0IG91dCBpbnNpZGUgcGFyc2VDb21wbGV4KCkgYnV0IHdlJ2QgbmVlZCB0byBkbyBpdCB0byB0aGUgYmVnaW5uaW5nIGFuZCBlbmRpbmcgdmFsdWVzIHBsdXMgaXQgd291bGRuJ3QgcHJvdmlkZSBwcm90ZWN0aW9uIGZyb20gb3RoZXIgcG90ZW50aWFsIHNjZW5hcmlvcyBsaWtlIGlmIHRoZSB1c2VyIHBhc3NlcyBpbiBhIHNpbWlsYXIgdmFsdWUuXG5cdFx0XHRcdFx0diA9IHYuc3Vic3RyKDAsIHYubGVuZ3RoIC0gMSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKF9jb2xvckxvb2t1cFt2XSkge1xuXHRcdFx0XHRcdHJldHVybiBfY29sb3JMb29rdXBbdl07XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHYuY2hhckF0KDApID09PSBcIiNcIikge1xuXHRcdFx0XHRcdGlmICh2Lmxlbmd0aCA9PT0gNCkgeyAvL2ZvciBzaG9ydGhhbmQgbGlrZSAjOUYwXG5cdFx0XHRcdFx0XHRjMSA9IHYuY2hhckF0KDEpLFxuXHRcdFx0XHRcdFx0YzIgPSB2LmNoYXJBdCgyKSxcblx0XHRcdFx0XHRcdGMzID0gdi5jaGFyQXQoMyk7XG5cdFx0XHRcdFx0XHR2ID0gXCIjXCIgKyBjMSArIGMxICsgYzIgKyBjMiArIGMzICsgYzM7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHYgPSBwYXJzZUludCh2LnN1YnN0cigxKSwgMTYpO1xuXHRcdFx0XHRcdHJldHVybiBbdiA+PiAxNiwgKHYgPj4gOCkgJiAyNTUsIHYgJiAyNTVdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh2LnN1YnN0cigwLCAzKSA9PT0gXCJoc2xcIikge1xuXHRcdFx0XHRcdHYgPSB2Lm1hdGNoKF9udW1FeHApO1xuXHRcdFx0XHRcdGggPSAoTnVtYmVyKHZbMF0pICUgMzYwKSAvIDM2MDtcblx0XHRcdFx0XHRzID0gTnVtYmVyKHZbMV0pIC8gMTAwO1xuXHRcdFx0XHRcdGwgPSBOdW1iZXIodlsyXSkgLyAxMDA7XG5cdFx0XHRcdFx0YzIgPSAobCA8PSAwLjUpID8gbCAqIChzICsgMSkgOiBsICsgcyAtIGwgKiBzO1xuXHRcdFx0XHRcdGMxID0gbCAqIDIgLSBjMjtcblx0XHRcdFx0XHRpZiAodi5sZW5ndGggPiAzKSB7XG5cdFx0XHRcdFx0XHR2WzNdID0gTnVtYmVyKHZbM10pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR2WzBdID0gX2h1ZShoICsgMSAvIDMsIGMxLCBjMik7XG5cdFx0XHRcdFx0dlsxXSA9IF9odWUoaCwgYzEsIGMyKTtcblx0XHRcdFx0XHR2WzJdID0gX2h1ZShoIC0gMSAvIDMsIGMxLCBjMik7XG5cdFx0XHRcdFx0cmV0dXJuIHY7XG5cdFx0XHRcdH1cblx0XHRcdFx0diA9IHYubWF0Y2goX251bUV4cCkgfHwgX2NvbG9yTG9va3VwLnRyYW5zcGFyZW50O1xuXHRcdFx0XHR2WzBdID0gTnVtYmVyKHZbMF0pO1xuXHRcdFx0XHR2WzFdID0gTnVtYmVyKHZbMV0pO1xuXHRcdFx0XHR2WzJdID0gTnVtYmVyKHZbMl0pO1xuXHRcdFx0XHRpZiAodi5sZW5ndGggPiAzKSB7XG5cdFx0XHRcdFx0dlszXSA9IE51bWJlcih2WzNdKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdjtcblx0XHRcdH0sXG5cdFx0XHRfY29sb3JFeHAgPSBcIig/OlxcXFxiKD86KD86cmdifHJnYmF8aHNsfGhzbGEpXFxcXCguKz9cXFxcKSl8XFxcXEIjLis/XFxcXGJcIjsgLy93ZSdsbCBkeW5hbWljYWxseSBidWlsZCB0aGlzIFJlZ3VsYXIgRXhwcmVzc2lvbiB0byBjb25zZXJ2ZSBmaWxlIHNpemUuIEFmdGVyIGJ1aWxkaW5nIGl0LCBpdCB3aWxsIGJlIGFibGUgdG8gZmluZCByZ2IoKSwgcmdiYSgpLCAjIChoZXhhZGVjaW1hbCksIGFuZCBuYW1lZCBjb2xvciB2YWx1ZXMgbGlrZSByZWQsIGJsdWUsIHB1cnBsZSwgZXRjLlxuXG5cdFx0Zm9yIChwIGluIF9jb2xvckxvb2t1cCkge1xuXHRcdFx0X2NvbG9yRXhwICs9IFwifFwiICsgcCArIFwiXFxcXGJcIjtcblx0XHR9XG5cdFx0X2NvbG9yRXhwID0gbmV3IFJlZ0V4cChfY29sb3JFeHArXCIpXCIsIFwiZ2lcIik7XG5cblx0XHQvKipcblx0XHQgKiBAcHJpdmF0ZSBSZXR1cm5zIGEgZm9ybWF0dGVyIGZ1bmN0aW9uIHRoYXQgaGFuZGxlcyB0YWtpbmcgYSBzdHJpbmcgKG9yIG51bWJlciBpbiBzb21lIGNhc2VzKSBhbmQgcmV0dXJuaW5nIGEgY29uc2lzdGVudGx5IGZvcm1hdHRlZCBvbmUgaW4gdGVybXMgb2YgZGVsaW1pdGVycywgcXVhbnRpdHkgb2YgdmFsdWVzLCBldGMuIEZvciBleGFtcGxlLCB3ZSBtYXkgZ2V0IGJveFNoYWRvdyB2YWx1ZXMgZGVmaW5lZCBhcyBcIjBweCByZWRcIiBvciBcIjBweCAwcHggMTBweCByZ2IoMjU1LDAsMClcIiBvciBcIjBweCAwcHggMjBweCAyMHB4ICNGMDBcIiBhbmQgd2UgbmVlZCB0byBlbnN1cmUgdGhhdCB3aGF0IHdlIGdldCBiYWNrIGlzIGRlc2NyaWJlZCB3aXRoIDQgbnVtYmVycyBhbmQgYSBjb2xvci4gVGhpcyBhbGxvd3MgdXMgdG8gZmVlZCBpdCBpbnRvIHRoZSBfcGFyc2VDb21wbGV4KCkgbWV0aG9kIGFuZCBzcGxpdCB0aGUgdmFsdWVzIHVwIGFwcHJvcHJpYXRlbHkuIFRoZSBuZWF0IHRoaW5nIGFib3V0IHRoaXMgX2dldEZvcm1hdHRlcigpIGZ1bmN0aW9uIGlzIHRoYXQgdGhlIGRmbHQgZGVmaW5lcyBhIHBhdHRlcm4gYXMgd2VsbCBhcyBhIGRlZmF1bHQsIHNvIGZvciBleGFtcGxlLCBfZ2V0Rm9ybWF0dGVyKFwiMHB4IDBweCAwcHggMHB4ICM3NzdcIiwgdHJ1ZSkgbm90IG9ubHkgc2V0cyB0aGUgZGVmYXVsdCBhcyAwcHggZm9yIGFsbCBkaXN0YW5jZXMgYW5kICM3NzcgZm9yIHRoZSBjb2xvciwgYnV0IGFsc28gc2V0cyB0aGUgcGF0dGVybiBzdWNoIHRoYXQgNCBudW1iZXJzIGFuZCBhIGNvbG9yIHdpbGwgYWx3YXlzIGdldCByZXR1cm5lZC5cblx0XHQgKiBAcGFyYW0geyFzdHJpbmd9IGRmbHQgVGhlIGRlZmF1bHQgdmFsdWUgYW5kIHBhdHRlcm4gdG8gZm9sbG93LiBTbyBcIjBweCAwcHggMHB4IDBweCAjNzc3XCIgd2lsbCBlbnN1cmUgdGhhdCA0IG51bWJlcnMgYW5kIGEgY29sb3Igd2lsbCBhbHdheXMgZ2V0IHJldHVybmVkLlxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbj19IGNsciBJZiB0cnVlLCB0aGUgdmFsdWVzIHNob3VsZCBiZSBzZWFyY2hlZCBmb3IgY29sb3ItcmVsYXRlZCBkYXRhLiBGb3IgZXhhbXBsZSwgYm94U2hhZG93IHZhbHVlcyB0eXBpY2FsbHkgY29udGFpbiBhIGNvbG9yIHdoZXJlYXMgYm9yZGVyUmFkaXVzIGRvbid0LlxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbj19IGNvbGxhcHNpYmxlIElmIHRydWUsIHRoZSB2YWx1ZSBpcyBhIHRvcC9sZWZ0L3JpZ2h0L2JvdHRvbSBzdHlsZSBvbmUgdGhhdCBhY3RzIGxpa2UgbWFyZ2luIG9yIHBhZGRpbmcsIHdoZXJlIGlmIG9ubHkgb25lIHZhbHVlIGlzIHJlY2VpdmVkLCBpdCdzIHVzZWQgZm9yIGFsbCA0OyBpZiAyIGFyZSByZWNlaXZlZCwgdGhlIGZpcnN0IGlzIGR1cGxpY2F0ZWQgZm9yIDNyZCAoYm90dG9tKSBhbmQgdGhlIDJuZCBpcyBkdXBsaWNhdGVkIGZvciB0aGUgNHRoIHNwb3QgKGxlZnQpLCBldGMuXG5cdFx0ICogQHJldHVybiB7RnVuY3Rpb259IGZvcm1hdHRlciBmdW5jdGlvblxuXHRcdCAqL1xuXHRcdHZhciBfZ2V0Rm9ybWF0dGVyID0gZnVuY3Rpb24oZGZsdCwgY2xyLCBjb2xsYXBzaWJsZSwgbXVsdGkpIHtcblx0XHRcdFx0aWYgKGRmbHQgPT0gbnVsbCkge1xuXHRcdFx0XHRcdHJldHVybiBmdW5jdGlvbih2KSB7cmV0dXJuIHY7fTtcblx0XHRcdFx0fVxuXHRcdFx0XHR2YXIgZENvbG9yID0gY2xyID8gKGRmbHQubWF0Y2goX2NvbG9yRXhwKSB8fCBbXCJcIl0pWzBdIDogXCJcIixcblx0XHRcdFx0XHRkVmFscyA9IGRmbHQuc3BsaXQoZENvbG9yKS5qb2luKFwiXCIpLm1hdGNoKF92YWx1ZXNFeHApIHx8IFtdLFxuXHRcdFx0XHRcdHBmeCA9IGRmbHQuc3Vic3RyKDAsIGRmbHQuaW5kZXhPZihkVmFsc1swXSkpLFxuXHRcdFx0XHRcdHNmeCA9IChkZmx0LmNoYXJBdChkZmx0Lmxlbmd0aCAtIDEpID09PSBcIilcIikgPyBcIilcIiA6IFwiXCIsXG5cdFx0XHRcdFx0ZGVsaW0gPSAoZGZsdC5pbmRleE9mKFwiIFwiKSAhPT0gLTEpID8gXCIgXCIgOiBcIixcIixcblx0XHRcdFx0XHRudW1WYWxzID0gZFZhbHMubGVuZ3RoLFxuXHRcdFx0XHRcdGRTZnggPSAobnVtVmFscyA+IDApID8gZFZhbHNbMF0ucmVwbGFjZShfbnVtRXhwLCBcIlwiKSA6IFwiXCIsXG5cdFx0XHRcdFx0Zm9ybWF0dGVyO1xuXHRcdFx0XHRpZiAoIW51bVZhbHMpIHtcblx0XHRcdFx0XHRyZXR1cm4gZnVuY3Rpb24odikge3JldHVybiB2O307XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGNscikge1xuXHRcdFx0XHRcdGZvcm1hdHRlciA9IGZ1bmN0aW9uKHYpIHtcblx0XHRcdFx0XHRcdHZhciBjb2xvciwgdmFscywgaSwgYTtcblx0XHRcdFx0XHRcdGlmICh0eXBlb2YodikgPT09IFwibnVtYmVyXCIpIHtcblx0XHRcdFx0XHRcdFx0diArPSBkU2Z4O1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChtdWx0aSAmJiBfY29tbWFzT3V0c2lkZVBhcmVuRXhwLnRlc3QodikpIHtcblx0XHRcdFx0XHRcdFx0YSA9IHYucmVwbGFjZShfY29tbWFzT3V0c2lkZVBhcmVuRXhwLCBcInxcIikuc3BsaXQoXCJ8XCIpO1xuXHRcdFx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0XHRcdGFbaV0gPSBmb3JtYXR0ZXIoYVtpXSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0cmV0dXJuIGEuam9pbihcIixcIik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRjb2xvciA9ICh2Lm1hdGNoKF9jb2xvckV4cCkgfHwgW2RDb2xvcl0pWzBdO1xuXHRcdFx0XHRcdFx0dmFscyA9IHYuc3BsaXQoY29sb3IpLmpvaW4oXCJcIikubWF0Y2goX3ZhbHVlc0V4cCkgfHwgW107XG5cdFx0XHRcdFx0XHRpID0gdmFscy5sZW5ndGg7XG5cdFx0XHRcdFx0XHRpZiAobnVtVmFscyA+IGktLSkge1xuXHRcdFx0XHRcdFx0XHR3aGlsZSAoKytpIDwgbnVtVmFscykge1xuXHRcdFx0XHRcdFx0XHRcdHZhbHNbaV0gPSBjb2xsYXBzaWJsZSA/IHZhbHNbKCgoaSAtIDEpIC8gMikgfCAwKV0gOiBkVmFsc1tpXTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cmV0dXJuIHBmeCArIHZhbHMuam9pbihkZWxpbSkgKyBkZWxpbSArIGNvbG9yICsgc2Z4ICsgKHYuaW5kZXhPZihcImluc2V0XCIpICE9PSAtMSA/IFwiIGluc2V0XCIgOiBcIlwiKTtcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdHJldHVybiBmb3JtYXR0ZXI7XG5cblx0XHRcdFx0fVxuXHRcdFx0XHRmb3JtYXR0ZXIgPSBmdW5jdGlvbih2KSB7XG5cdFx0XHRcdFx0dmFyIHZhbHMsIGEsIGk7XG5cdFx0XHRcdFx0aWYgKHR5cGVvZih2KSA9PT0gXCJudW1iZXJcIikge1xuXHRcdFx0XHRcdFx0diArPSBkU2Z4O1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAobXVsdGkgJiYgX2NvbW1hc091dHNpZGVQYXJlbkV4cC50ZXN0KHYpKSB7XG5cdFx0XHRcdFx0XHRhID0gdi5yZXBsYWNlKF9jb21tYXNPdXRzaWRlUGFyZW5FeHAsIFwifFwiKS5zcGxpdChcInxcIik7XG5cdFx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0XHRhW2ldID0gZm9ybWF0dGVyKGFbaV0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cmV0dXJuIGEuam9pbihcIixcIik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHZhbHMgPSB2Lm1hdGNoKF92YWx1ZXNFeHApIHx8IFtdO1xuXHRcdFx0XHRcdGkgPSB2YWxzLmxlbmd0aDtcblx0XHRcdFx0XHRpZiAobnVtVmFscyA+IGktLSkge1xuXHRcdFx0XHRcdFx0d2hpbGUgKCsraSA8IG51bVZhbHMpIHtcblx0XHRcdFx0XHRcdFx0dmFsc1tpXSA9IGNvbGxhcHNpYmxlID8gdmFsc1soKChpIC0gMSkgLyAyKSB8IDApXSA6IGRWYWxzW2ldO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gcGZ4ICsgdmFscy5qb2luKGRlbGltKSArIHNmeDtcblx0XHRcdFx0fTtcblx0XHRcdFx0cmV0dXJuIGZvcm1hdHRlcjtcblx0XHRcdH0sXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogQHByaXZhdGUgcmV0dXJucyBhIGZvcm1hdHRlciBmdW5jdGlvbiB0aGF0J3MgdXNlZCBmb3IgZWRnZS1yZWxhdGVkIHZhbHVlcyBsaWtlIG1hcmdpblRvcCwgbWFyZ2luTGVmdCwgcGFkZGluZ0JvdHRvbSwgcGFkZGluZ1JpZ2h0LCBldGMuIEp1c3QgcGFzcyBhIGNvbW1hLWRlbGltaXRlZCBsaXN0IG9mIHByb3BlcnR5IG5hbWVzIHJlbGF0ZWQgdG8gdGhlIGVkZ2VzLlxuXHRcdFx0ICogQHBhcmFtIHshc3RyaW5nfSBwcm9wcyBhIGNvbW1hLWRlbGltaXRlZCBsaXN0IG9mIHByb3BlcnR5IG5hbWVzIGluIG9yZGVyIGZyb20gdG9wIHRvIGxlZnQsIGxpa2UgXCJtYXJnaW5Ub3AsbWFyZ2luUmlnaHQsbWFyZ2luQm90dG9tLG1hcmdpbkxlZnRcIlxuXHRcdFx0ICogQHJldHVybiB7RnVuY3Rpb259IGEgZm9ybWF0dGVyIGZ1bmN0aW9uXG5cdFx0XHQgKi9cblx0XHRcdF9nZXRFZGdlUGFyc2VyID0gZnVuY3Rpb24ocHJvcHMpIHtcblx0XHRcdFx0cHJvcHMgPSBwcm9wcy5zcGxpdChcIixcIik7XG5cdFx0XHRcdHJldHVybiBmdW5jdGlvbih0LCBlLCBwLCBjc3NwLCBwdCwgcGx1Z2luLCB2YXJzKSB7XG5cdFx0XHRcdFx0dmFyIGEgPSAoZSArIFwiXCIpLnNwbGl0KFwiIFwiKSxcblx0XHRcdFx0XHRcdGk7XG5cdFx0XHRcdFx0dmFycyA9IHt9O1xuXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCA0OyBpKyspIHtcblx0XHRcdFx0XHRcdHZhcnNbcHJvcHNbaV1dID0gYVtpXSA9IGFbaV0gfHwgYVsoKChpIC0gMSkgLyAyKSA+PiAwKV07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBjc3NwLnBhcnNlKHQsIHZhcnMsIHB0LCBwbHVnaW4pO1xuXHRcdFx0XHR9O1xuXHRcdFx0fSxcblxuXHRcdFx0Ly8gQHByaXZhdGUgdXNlZCB3aGVuIG90aGVyIHBsdWdpbnMgbXVzdCB0d2VlbiB2YWx1ZXMgZmlyc3QsIGxpa2UgQmV6aWVyUGx1Z2luIG9yIFRocm93UHJvcHNQbHVnaW4sIGV0Yy4gVGhhdCBwbHVnaW4ncyBzZXRSYXRpbygpIGdldHMgY2FsbGVkIGZpcnN0IHNvIHRoYXQgdGhlIHZhbHVlcyBhcmUgdXBkYXRlZCwgYW5kIHRoZW4gd2UgbG9vcCB0aHJvdWdoIHRoZSBNaW5pUHJvcFR3ZWVucyAgd2hpY2ggaGFuZGxlIGNvcHlpbmcgdGhlIHZhbHVlcyBpbnRvIHRoZWlyIGFwcHJvcHJpYXRlIHNsb3RzIHNvIHRoYXQgdGhleSBjYW4gdGhlbiBiZSBhcHBsaWVkIGNvcnJlY3RseSBpbiB0aGUgbWFpbiBDU1NQbHVnaW4gc2V0UmF0aW8oKSBtZXRob2QuIFJlbWVtYmVyLCB3ZSB0eXBpY2FsbHkgY3JlYXRlIGEgcHJveHkgb2JqZWN0IHRoYXQgaGFzIGEgYnVuY2ggb2YgdW5pcXVlbHktbmFtZWQgcHJvcGVydGllcyB0aGF0IHdlIGZlZWQgdG8gdGhlIHN1Yi1wbHVnaW4gYW5kIGl0IGRvZXMgaXRzIG1hZ2ljIG5vcm1hbGx5LCBhbmQgdGhlbiB3ZSBtdXN0IGludGVycHJldCB0aG9zZSB2YWx1ZXMgYW5kIGFwcGx5IHRoZW0gdG8gdGhlIGNzcyBiZWNhdXNlIG9mdGVuIG51bWJlcnMgbXVzdCBnZXQgY29tYmluZWQvY29uY2F0ZW5hdGVkLCBzdWZmaXhlcyBhZGRlZCwgZXRjLiB0byB3b3JrIHdpdGggY3NzLCBsaWtlIGJveFNoYWRvdyBjb3VsZCBoYXZlIDQgdmFsdWVzIHBsdXMgYSBjb2xvci5cblx0XHRcdF9zZXRQbHVnaW5SYXRpbyA9IF9pbnRlcm5hbHMuX3NldFBsdWdpblJhdGlvID0gZnVuY3Rpb24odikge1xuXHRcdFx0XHR0aGlzLnBsdWdpbi5zZXRSYXRpbyh2KTtcblx0XHRcdFx0dmFyIGQgPSB0aGlzLmRhdGEsXG5cdFx0XHRcdFx0cHJveHkgPSBkLnByb3h5LFxuXHRcdFx0XHRcdG1wdCA9IGQuZmlyc3RNUFQsXG5cdFx0XHRcdFx0bWluID0gMC4wMDAwMDEsXG5cdFx0XHRcdFx0dmFsLCBwdCwgaSwgc3RyO1xuXHRcdFx0XHR3aGlsZSAobXB0KSB7XG5cdFx0XHRcdFx0dmFsID0gcHJveHlbbXB0LnZdO1xuXHRcdFx0XHRcdGlmIChtcHQucikge1xuXHRcdFx0XHRcdFx0dmFsID0gTWF0aC5yb3VuZCh2YWwpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAodmFsIDwgbWluICYmIHZhbCA+IC1taW4pIHtcblx0XHRcdFx0XHRcdHZhbCA9IDA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdG1wdC50W21wdC5wXSA9IHZhbDtcblx0XHRcdFx0XHRtcHQgPSBtcHQuX25leHQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGQuYXV0b1JvdGF0ZSkge1xuXHRcdFx0XHRcdGQuYXV0b1JvdGF0ZS5yb3RhdGlvbiA9IHByb3h5LnJvdGF0aW9uO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vYXQgdGhlIGVuZCwgd2UgbXVzdCBzZXQgdGhlIENTU1Byb3BUd2VlbidzIFwiZVwiIChlbmQpIHZhbHVlIGR5bmFtaWNhbGx5IGhlcmUgYmVjYXVzZSB0aGF0J3Mgd2hhdCBpcyB1c2VkIGluIHRoZSBmaW5hbCBzZXRSYXRpbygpIG1ldGhvZC5cblx0XHRcdFx0aWYgKHYgPT09IDEpIHtcblx0XHRcdFx0XHRtcHQgPSBkLmZpcnN0TVBUO1xuXHRcdFx0XHRcdHdoaWxlIChtcHQpIHtcblx0XHRcdFx0XHRcdHB0ID0gbXB0LnQ7XG5cdFx0XHRcdFx0XHRpZiAoIXB0LnR5cGUpIHtcblx0XHRcdFx0XHRcdFx0cHQuZSA9IHB0LnMgKyBwdC54czA7XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHB0LnR5cGUgPT09IDEpIHtcblx0XHRcdFx0XHRcdFx0c3RyID0gcHQueHMwICsgcHQucyArIHB0LnhzMTtcblx0XHRcdFx0XHRcdFx0Zm9yIChpID0gMTsgaSA8IHB0Lmw7IGkrKykge1xuXHRcdFx0XHRcdFx0XHRcdHN0ciArPSBwdFtcInhuXCIraV0gKyBwdFtcInhzXCIrKGkrMSldO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHB0LmUgPSBzdHI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRtcHQgPSBtcHQuX25leHQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIEBwcml2YXRlIEBjb25zdHJ1Y3RvciBVc2VkIGJ5IGEgZmV3IFNwZWNpYWxQcm9wcyB0byBob2xkIGltcG9ydGFudCB2YWx1ZXMgZm9yIHByb3hpZXMuIEZvciBleGFtcGxlLCBfcGFyc2VUb1Byb3h5KCkgY3JlYXRlcyBhIE1pbmlQcm9wVHdlZW4gaW5zdGFuY2UgZm9yIGVhY2ggcHJvcGVydHkgdGhhdCBtdXN0IGdldCB0d2VlbmVkIG9uIHRoZSBwcm94eSwgYW5kIHdlIHJlY29yZCB0aGUgb3JpZ2luYWwgcHJvcGVydHkgbmFtZSBhcyB3ZWxsIGFzIHRoZSB1bmlxdWUgb25lIHdlIGNyZWF0ZSBmb3IgdGhlIHByb3h5LCBwbHVzIHdoZXRoZXIgb3Igbm90IHRoZSB2YWx1ZSBuZWVkcyB0byBiZSByb3VuZGVkIHBsdXMgdGhlIG9yaWdpbmFsIHZhbHVlLlxuXHRcdFx0ICogQHBhcmFtIHshT2JqZWN0fSB0IHRhcmdldCBvYmplY3Qgd2hvc2UgcHJvcGVydHkgd2UncmUgdHdlZW5pbmcgKG9mdGVuIGEgQ1NTUHJvcFR3ZWVuKVxuXHRcdFx0ICogQHBhcmFtIHshc3RyaW5nfSBwIHByb3BlcnR5IG5hbWVcblx0XHRcdCAqIEBwYXJhbSB7KG51bWJlcnxzdHJpbmd8b2JqZWN0KX0gdiB2YWx1ZVxuXHRcdFx0ICogQHBhcmFtIHtNaW5pUHJvcFR3ZWVuPX0gbmV4dCBuZXh0IE1pbmlQcm9wVHdlZW4gaW4gdGhlIGxpbmtlZCBsaXN0XG5cdFx0XHQgKiBAcGFyYW0ge2Jvb2xlYW49fSByIGlmIHRydWUsIHRoZSB0d2VlbmVkIHZhbHVlIHNob3VsZCBiZSByb3VuZGVkIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcblx0XHRcdCAqL1xuXHRcdFx0TWluaVByb3BUd2VlbiA9IGZ1bmN0aW9uKHQsIHAsIHYsIG5leHQsIHIpIHtcblx0XHRcdFx0dGhpcy50ID0gdDtcblx0XHRcdFx0dGhpcy5wID0gcDtcblx0XHRcdFx0dGhpcy52ID0gdjtcblx0XHRcdFx0dGhpcy5yID0gcjtcblx0XHRcdFx0aWYgKG5leHQpIHtcblx0XHRcdFx0XHRuZXh0Ll9wcmV2ID0gdGhpcztcblx0XHRcdFx0XHR0aGlzLl9uZXh0ID0gbmV4dDtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBAcHJpdmF0ZSBNb3N0IG90aGVyIHBsdWdpbnMgKGxpa2UgQmV6aWVyUGx1Z2luIGFuZCBUaHJvd1Byb3BzUGx1Z2luIGFuZCBvdGhlcnMpIGNhbiBvbmx5IHR3ZWVuIG51bWVyaWMgdmFsdWVzLCBidXQgQ1NTUGx1Z2luIG11c3QgYWNjb21tb2RhdGUgc3BlY2lhbCB2YWx1ZXMgdGhhdCBoYXZlIGEgYnVuY2ggb2YgZXh0cmEgZGF0YSAobGlrZSBhIHN1ZmZpeCBvciBzdHJpbmdzIGJldHdlZW4gbnVtZXJpYyB2YWx1ZXMsIGV0Yy4pLiBGb3IgZXhhbXBsZSwgYm94U2hhZG93IGhhcyB2YWx1ZXMgbGlrZSBcIjEwcHggMTBweCAyMHB4IDMwcHggcmdiKDI1NSwwLDApXCIgd2hpY2ggd291bGQgdXR0ZXJseSBjb25mdXNlIG90aGVyIHBsdWdpbnMuIFRoaXMgbWV0aG9kIGFsbG93cyB1cyB0byBzcGxpdCB0aGF0IGRhdGEgYXBhcnQgYW5kIGdyYWIgb25seSB0aGUgbnVtZXJpYyBkYXRhIGFuZCBhdHRhY2ggaXQgdG8gdW5pcXVlbHktbmFtZWQgcHJvcGVydGllcyBvZiBhIGdlbmVyaWMgcHJveHkgb2JqZWN0ICh7fSkgc28gdGhhdCB3ZSBjYW4gZmVlZCB0aGF0IHRvIHZpcnR1YWxseSBhbnkgcGx1Z2luIHRvIGhhdmUgdGhlIG51bWJlcnMgdHdlZW5lZC4gSG93ZXZlciwgd2UgbXVzdCBhbHNvIGtlZXAgdHJhY2sgb2Ygd2hpY2ggcHJvcGVydGllcyBmcm9tIHRoZSBwcm94eSBnbyB3aXRoIHdoaWNoIENTU1Byb3BUd2VlbiB2YWx1ZXMgYW5kIGluc3RhbmNlcy4gU28gd2UgY3JlYXRlIGEgbGlua2VkIGxpc3Qgb2YgTWluaVByb3BUd2VlbnMuIEVhY2ggb25lIHJlY29yZHMgYSB0YXJnZXQgKHRoZSBvcmlnaW5hbCBDU1NQcm9wVHdlZW4pLCBwcm9wZXJ0eSAobGlrZSBcInNcIiBvciBcInhuMVwiIG9yIFwieG4yXCIpIHRoYXQgd2UncmUgdHdlZW5pbmcgYW5kIHRoZSB1bmlxdWUgcHJvcGVydHkgbmFtZSB0aGF0IHdhcyB1c2VkIGZvciB0aGUgcHJveHkgKGxpa2UgXCJib3hTaGFkb3dfeG4xXCIgYW5kIFwiYm94U2hhZG93X3huMlwiKSBhbmQgd2hldGhlciBvciBub3QgdGhleSBuZWVkIHRvIGJlIHJvdW5kZWQuIFRoYXQgd2F5LCBpbiB0aGUgX3NldFBsdWdpblJhdGlvKCkgbWV0aG9kIHdlIGNhbiBzaW1wbHkgY29weSB0aGUgdmFsdWVzIG92ZXIgZnJvbSB0aGUgcHJveHkgdG8gdGhlIENTU1Byb3BUd2VlbiBpbnN0YW5jZShzKS4gVGhlbiwgd2hlbiB0aGUgbWFpbiBDU1NQbHVnaW4gc2V0UmF0aW8oKSBtZXRob2QgcnVucyBhbmQgYXBwbGllcyB0aGUgQ1NTUHJvcFR3ZWVuIHZhbHVlcyBhY2NvcmRpbmdseSwgdGhleSdyZSB1cGRhdGVkIG5pY2VseS4gU28gdGhlIGV4dGVybmFsIHBsdWdpbiB0d2VlbnMgdGhlIG51bWJlcnMsIF9zZXRQbHVnaW5SYXRpbygpIGNvcGllcyB0aGVtIG92ZXIsIGFuZCBzZXRSYXRpbygpIGFjdHMgbm9ybWFsbHksIGFwcGx5aW5nIGNzcy1zcGVjaWZpYyB2YWx1ZXMgdG8gdGhlIGVsZW1lbnQuXG5cdFx0XHQgKiBUaGlzIG1ldGhvZCByZXR1cm5zIGFuIG9iamVjdCB0aGF0IGhhcyB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG5cdFx0XHQgKiAgLSBwcm94eTogYSBnZW5lcmljIG9iamVjdCBjb250YWluaW5nIHRoZSBzdGFydGluZyB2YWx1ZXMgZm9yIGFsbCB0aGUgcHJvcGVydGllcyB0aGF0IHdpbGwgYmUgdHdlZW5lZCBieSB0aGUgZXh0ZXJuYWwgcGx1Z2luLiAgVGhpcyBpcyB3aGF0IHdlIGZlZWQgdG8gdGhlIGV4dGVybmFsIF9vbkluaXRUd2VlbigpIGFzIHRoZSB0YXJnZXRcblx0XHRcdCAqICAtIGVuZDogYSBnZW5lcmljIG9iamVjdCBjb250YWluaW5nIHRoZSBlbmRpbmcgdmFsdWVzIGZvciBhbGwgdGhlIHByb3BlcnRpZXMgdGhhdCB3aWxsIGJlIHR3ZWVuZWQgYnkgdGhlIGV4dGVybmFsIHBsdWdpbi4gVGhpcyBpcyB3aGF0IHdlIGZlZWQgdG8gdGhlIGV4dGVybmFsIHBsdWdpbidzIF9vbkluaXRUd2VlbigpIGFzIHRoZSBkZXN0aW5hdGlvbiB2YWx1ZXNcblx0XHRcdCAqICAtIGZpcnN0TVBUOiB0aGUgZmlyc3QgTWluaVByb3BUd2VlbiBpbiB0aGUgbGlua2VkIGxpc3Rcblx0XHRcdCAqICAtIHB0OiB0aGUgZmlyc3QgQ1NTUHJvcFR3ZWVuIGluIHRoZSBsaW5rZWQgbGlzdCB0aGF0IHdhcyBjcmVhdGVkIHdoZW4gcGFyc2luZy4gSWYgc2hhbGxvdyBpcyB0cnVlLCB0aGlzIGxpbmtlZCBsaXN0IHdpbGwgTk9UIGF0dGFjaCB0byB0aGUgb25lIHBhc3NlZCBpbnRvIHRoZSBfcGFyc2VUb1Byb3h5KCkgYXMgdGhlIFwicHRcIiAoNHRoKSBwYXJhbWV0ZXIuXG5cdFx0XHQgKiBAcGFyYW0geyFPYmplY3R9IHQgdGFyZ2V0IG9iamVjdCB0byBiZSB0d2VlbmVkXG5cdFx0XHQgKiBAcGFyYW0geyEoT2JqZWN0fHN0cmluZyl9IHZhcnMgdGhlIG9iamVjdCBjb250YWluaW5nIHRoZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgdHdlZW5pbmcgdmFsdWVzICh0eXBpY2FsbHkgdGhlIGVuZC9kZXN0aW5hdGlvbiB2YWx1ZXMpIHRoYXQgc2hvdWxkIGJlIHBhcnNlZFxuXHRcdFx0ICogQHBhcmFtIHshQ1NTUGx1Z2lufSBjc3NwIFRoZSBDU1NQbHVnaW4gaW5zdGFuY2Vcblx0XHRcdCAqIEBwYXJhbSB7Q1NTUHJvcFR3ZWVuPX0gcHQgdGhlIG5leHQgQ1NTUHJvcFR3ZWVuIGluIHRoZSBsaW5rZWQgbGlzdFxuXHRcdFx0ICogQHBhcmFtIHtUd2VlblBsdWdpbj19IHBsdWdpbiB0aGUgZXh0ZXJuYWwgVHdlZW5QbHVnaW4gaW5zdGFuY2UgdGhhdCB3aWxsIGJlIGhhbmRsaW5nIHR3ZWVuaW5nIHRoZSBudW1lcmljIHZhbHVlc1xuXHRcdFx0ICogQHBhcmFtIHtib29sZWFuPX0gc2hhbGxvdyBpZiB0cnVlLCB0aGUgcmVzdWx0aW5nIGxpbmtlZCBsaXN0IGZyb20gdGhlIHBhcnNlIHdpbGwgTk9UIGJlIGF0dGFjaGVkIHRvIHRoZSBDU1NQcm9wVHdlZW4gdGhhdCB3YXMgcGFzc2VkIGluIGFzIHRoZSBcInB0XCIgKDR0aCkgcGFyYW1ldGVyLlxuXHRcdFx0ICogQHJldHVybiBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6IHByb3h5LCBlbmQsIGZpcnN0TVBULCBhbmQgcHQgKHNlZSBhYm92ZSBmb3IgZGVzY3JpcHRpb25zKVxuXHRcdFx0ICovXG5cdFx0XHRfcGFyc2VUb1Byb3h5ID0gX2ludGVybmFscy5fcGFyc2VUb1Byb3h5ID0gZnVuY3Rpb24odCwgdmFycywgY3NzcCwgcHQsIHBsdWdpbiwgc2hhbGxvdykge1xuXHRcdFx0XHR2YXIgYnB0ID0gcHQsXG5cdFx0XHRcdFx0c3RhcnQgPSB7fSxcblx0XHRcdFx0XHRlbmQgPSB7fSxcblx0XHRcdFx0XHR0cmFuc2Zvcm0gPSBjc3NwLl90cmFuc2Zvcm0sXG5cdFx0XHRcdFx0b2xkRm9yY2UgPSBfZm9yY2VQVCxcblx0XHRcdFx0XHRpLCBwLCB4cCwgbXB0LCBmaXJzdFBUO1xuXHRcdFx0XHRjc3NwLl90cmFuc2Zvcm0gPSBudWxsO1xuXHRcdFx0XHRfZm9yY2VQVCA9IHZhcnM7XG5cdFx0XHRcdHB0ID0gZmlyc3RQVCA9IGNzc3AucGFyc2UodCwgdmFycywgcHQsIHBsdWdpbik7XG5cdFx0XHRcdF9mb3JjZVBUID0gb2xkRm9yY2U7XG5cdFx0XHRcdC8vYnJlYWsgb2ZmIGZyb20gdGhlIGxpbmtlZCBsaXN0IHNvIHRoZSBuZXcgb25lcyBhcmUgaXNvbGF0ZWQuXG5cdFx0XHRcdGlmIChzaGFsbG93KSB7XG5cdFx0XHRcdFx0Y3NzcC5fdHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuXHRcdFx0XHRcdGlmIChicHQpIHtcblx0XHRcdFx0XHRcdGJwdC5fcHJldiA9IG51bGw7XG5cdFx0XHRcdFx0XHRpZiAoYnB0Ll9wcmV2KSB7XG5cdFx0XHRcdFx0XHRcdGJwdC5fcHJldi5fbmV4dCA9IG51bGw7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHdoaWxlIChwdCAmJiBwdCAhPT0gYnB0KSB7XG5cdFx0XHRcdFx0aWYgKHB0LnR5cGUgPD0gMSkge1xuXHRcdFx0XHRcdFx0cCA9IHB0LnA7XG5cdFx0XHRcdFx0XHRlbmRbcF0gPSBwdC5zICsgcHQuYztcblx0XHRcdFx0XHRcdHN0YXJ0W3BdID0gcHQucztcblx0XHRcdFx0XHRcdGlmICghc2hhbGxvdykge1xuXHRcdFx0XHRcdFx0XHRtcHQgPSBuZXcgTWluaVByb3BUd2VlbihwdCwgXCJzXCIsIHAsIG1wdCwgcHQucik7XG5cdFx0XHRcdFx0XHRcdHB0LmMgPSAwO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKHB0LnR5cGUgPT09IDEpIHtcblx0XHRcdFx0XHRcdFx0aSA9IHB0Lmw7XG5cdFx0XHRcdFx0XHRcdHdoaWxlICgtLWkgPiAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0eHAgPSBcInhuXCIgKyBpO1xuXHRcdFx0XHRcdFx0XHRcdHAgPSBwdC5wICsgXCJfXCIgKyB4cDtcblx0XHRcdFx0XHRcdFx0XHRlbmRbcF0gPSBwdC5kYXRhW3hwXTtcblx0XHRcdFx0XHRcdFx0XHRzdGFydFtwXSA9IHB0W3hwXTtcblx0XHRcdFx0XHRcdFx0XHRpZiAoIXNoYWxsb3cpIHtcblx0XHRcdFx0XHRcdFx0XHRcdG1wdCA9IG5ldyBNaW5pUHJvcFR3ZWVuKHB0LCB4cCwgcCwgbXB0LCBwdC5yeHBbeHBdKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cHQgPSBwdC5fbmV4dDtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4ge3Byb3h5OnN0YXJ0LCBlbmQ6ZW5kLCBmaXJzdE1QVDptcHQsIHB0OmZpcnN0UFR9O1xuXHRcdFx0fSxcblxuXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogQGNvbnN0cnVjdG9yIEVhY2ggcHJvcGVydHkgdGhhdCBpcyB0d2VlbmVkIGhhcyBhdCBsZWFzdCBvbmUgQ1NTUHJvcFR3ZWVuIGFzc29jaWF0ZWQgd2l0aCBpdC4gVGhlc2UgaW5zdGFuY2VzIHN0b3JlIGltcG9ydGFudCBpbmZvcm1hdGlvbiBsaWtlIHRoZSB0YXJnZXQsIHByb3BlcnR5LCBzdGFydGluZyB2YWx1ZSwgYW1vdW50IG9mIGNoYW5nZSwgZXRjLiBUaGV5IGNhbiBhbHNvIG9wdGlvbmFsbHkgaGF2ZSBhIG51bWJlciBvZiBcImV4dHJhXCIgc3RyaW5ncyBhbmQgbnVtZXJpYyB2YWx1ZXMgbmFtZWQgeHMxLCB4bjEsIHhzMiwgeG4yLCB4czMsIHhuMywgZXRjLiB3aGVyZSBcInNcIiBpbmRpY2F0ZXMgc3RyaW5nIGFuZCBcIm5cIiBpbmRpY2F0ZXMgbnVtYmVyLiBUaGVzZSBjYW4gYmUgcGllY2VkIHRvZ2V0aGVyIGluIGEgY29tcGxleC12YWx1ZSB0d2VlbiAodHlwZToxKSB0aGF0IGhhcyBhbHRlcm5hdGluZyB0eXBlcyBvZiBkYXRhIGxpa2UgYSBzdHJpbmcsIG51bWJlciwgc3RyaW5nLCBudW1iZXIsIGV0Yy4gRm9yIGV4YW1wbGUsIGJveFNoYWRvdyBjb3VsZCBiZSBcIjVweCA1cHggOHB4IHJnYigxMDIsIDEwMiwgNTEpXCIuIEluIHRoYXQgdmFsdWUsIHRoZXJlIGFyZSA2IG51bWJlcnMgdGhhdCBtYXkgbmVlZCB0byB0d2VlbiBhbmQgdGhlbiBwaWVjZWQgYmFjayB0b2dldGhlciBpbnRvIGEgc3RyaW5nIGFnYWluIHdpdGggc3BhY2VzLCBzdWZmaXhlcywgZXRjLiB4czAgaXMgc3BlY2lhbCBpbiB0aGF0IGl0IHN0b3JlcyB0aGUgc3VmZml4IGZvciBzdGFuZGFyZCAodHlwZTowKSB0d2VlbnMsIC1PUi0gdGhlIGZpcnN0IHN0cmluZyAocHJlZml4KSBpbiBhIGNvbXBsZXgtdmFsdWUgKHR5cGU6MSkgQ1NTUHJvcFR3ZWVuIC1PUi0gaXQgY2FuIGJlIHRoZSBub24tdHdlZW5pbmcgdmFsdWUgaW4gYSB0eXBlOi0xIENTU1Byb3BUd2Vlbi4gV2UgZG8gdGhpcyB0byBjb25zZXJ2ZSBtZW1vcnkuXG5cdFx0XHQgKiBDU1NQcm9wVHdlZW5zIGhhdmUgdGhlIGZvbGxvd2luZyBvcHRpb25hbCBwcm9wZXJ0aWVzIGFzIHdlbGwgKG5vdCBkZWZpbmVkIHRocm91Z2ggdGhlIGNvbnN0cnVjdG9yKTpcblx0XHRcdCAqICAtIGw6IExlbmd0aCBpbiB0ZXJtcyBvZiB0aGUgbnVtYmVyIG9mIGV4dHJhIHByb3BlcnRpZXMgdGhhdCB0aGUgQ1NTUHJvcFR3ZWVuIGhhcyAoZGVmYXVsdDogMCkuIEZvciBleGFtcGxlLCBmb3IgYSBib3hTaGFkb3cgd2UgbWF5IG5lZWQgdG8gdHdlZW4gNSBudW1iZXJzIGluIHdoaWNoIGNhc2UgbCB3b3VsZCBiZSA1OyBLZWVwIGluIG1pbmQgdGhhdCB0aGUgc3RhcnQvZW5kIHZhbHVlcyBmb3IgdGhlIGZpcnN0IG51bWJlciB0aGF0J3MgdHdlZW5lZCBhcmUgYWx3YXlzIHN0b3JlZCBpbiB0aGUgcyBhbmQgYyBwcm9wZXJ0aWVzIHRvIGNvbnNlcnZlIG1lbW9yeS4gQWxsIGFkZGl0aW9uYWwgdmFsdWVzIHRoZXJlYWZ0ZXIgYXJlIHN0b3JlZCBpbiB4bjEsIHhuMiwgZXRjLlxuXHRcdFx0ICogIC0geGZpcnN0OiBUaGUgZmlyc3QgaW5zdGFuY2Ugb2YgYW55IHN1Yi1DU1NQcm9wVHdlZW5zIHRoYXQgYXJlIHR3ZWVuaW5nIHByb3BlcnRpZXMgb2YgdGhpcyBpbnN0YW5jZS4gRm9yIGV4YW1wbGUsIHdlIG1heSBzcGxpdCB1cCBhIGJveFNoYWRvdyB0d2VlbiBzbyB0aGF0IHRoZXJlJ3MgYSBtYWluIENTU1Byb3BUd2VlbiBvZiB0eXBlOjEgdGhhdCBoYXMgdmFyaW91cyB4cyogYW5kIHhuKiB2YWx1ZXMgYXNzb2NpYXRlZCB3aXRoIHRoZSBoLXNoYWRvdywgdi1zaGFkb3csIGJsdXIsIGNvbG9yLCBldGMuIFRoZW4gd2Ugc3Bhd24gYSBDU1NQcm9wVHdlZW4gZm9yIGVhY2ggb2YgdGhvc2UgdGhhdCBoYXMgYSBoaWdoZXIgcHJpb3JpdHkgYW5kIHJ1bnMgQkVGT1JFIHRoZSBtYWluIENTU1Byb3BUd2VlbiBzbyB0aGF0IHRoZSB2YWx1ZXMgYXJlIGFsbCBzZXQgYnkgdGhlIHRpbWUgaXQgbmVlZHMgdG8gcmUtYXNzZW1ibGUgdGhlbS4gVGhlIHhmaXJzdCBnaXZlcyB1cyBhbiBlYXN5IHdheSB0byBpZGVudGlmeSB0aGUgZmlyc3Qgb25lIGluIHRoYXQgY2hhaW4gd2hpY2ggdHlwaWNhbGx5IGVuZHMgYXQgdGhlIG1haW4gb25lIChiZWNhdXNlIHRoZXkncmUgYWxsIHByZXBlbmRlIHRvIHRoZSBsaW5rZWQgbGlzdClcblx0XHRcdCAqICAtIHBsdWdpbjogVGhlIFR3ZWVuUGx1Z2luIGluc3RhbmNlIHRoYXQgd2lsbCBoYW5kbGUgdGhlIHR3ZWVuaW5nIG9mIGFueSBjb21wbGV4IHZhbHVlcy4gRm9yIGV4YW1wbGUsIHNvbWV0aW1lcyB3ZSBkb24ndCB3YW50IHRvIHVzZSBub3JtYWwgc3VidHdlZW5zIChsaWtlIHhmaXJzdCByZWZlcnMgdG8pIHRvIHR3ZWVuIHRoZSB2YWx1ZXMgLSB3ZSBtaWdodCB3YW50IFRocm93UHJvcHNQbHVnaW4gb3IgQmV6aWVyUGx1Z2luIHNvbWUgb3RoZXIgcGx1Z2luIHRvIGRvIHRoZSBhY3R1YWwgdHdlZW5pbmcsIHNvIHdlIGNyZWF0ZSBhIHBsdWdpbiBpbnN0YW5jZSBhbmQgc3RvcmUgYSByZWZlcmVuY2UgaGVyZS4gV2UgbmVlZCB0aGlzIHJlZmVyZW5jZSBzbyB0aGF0IGlmIHdlIGdldCBhIHJlcXVlc3QgdG8gcm91bmQgdmFsdWVzIG9yIGRpc2FibGUgYSB0d2Vlbiwgd2UgY2FuIHBhc3MgYWxvbmcgdGhhdCByZXF1ZXN0LlxuXHRcdFx0ICogIC0gZGF0YTogQXJiaXRyYXJ5IGRhdGEgdGhhdCBuZWVkcyB0byBiZSBzdG9yZWQgd2l0aCB0aGUgQ1NTUHJvcFR3ZWVuLiBUeXBpY2FsbHkgaWYgd2UncmUgZ29pbmcgdG8gaGF2ZSBhIHBsdWdpbiBoYW5kbGUgdGhlIHR3ZWVuaW5nIG9mIGEgY29tcGxleC12YWx1ZSB0d2Vlbiwgd2UgY3JlYXRlIGEgZ2VuZXJpYyBvYmplY3QgdGhhdCBzdG9yZXMgdGhlIEVORCB2YWx1ZXMgdGhhdCB3ZSdyZSB0d2VlbmluZyB0byBhbmQgdGhlIENTU1Byb3BUd2VlbidzIHhzMSwgeHMyLCBldGMuIGhhdmUgdGhlIHN0YXJ0aW5nIHZhbHVlcy4gV2Ugc3RvcmUgdGhhdCBvYmplY3QgYXMgZGF0YS4gVGhhdCB3YXksIHdlIGNhbiBzaW1wbHkgcGFzcyB0aGF0IG9iamVjdCB0byB0aGUgcGx1Z2luIGFuZCB1c2UgdGhlIENTU1Byb3BUd2VlbiBhcyB0aGUgdGFyZ2V0LlxuXHRcdFx0ICogIC0gc2V0UmF0aW86IE9ubHkgdXNlZCBmb3IgdHlwZToyIHR3ZWVucyB0aGF0IHJlcXVpcmUgY3VzdG9tIGZ1bmN0aW9uYWxpdHkuIEluIHRoaXMgY2FzZSwgd2UgY2FsbCB0aGUgQ1NTUHJvcFR3ZWVuJ3Mgc2V0UmF0aW8oKSBtZXRob2QgYW5kIHBhc3MgdGhlIHJhdGlvIGVhY2ggdGltZSB0aGUgdHdlZW4gdXBkYXRlcy4gVGhpcyBpc24ndCBxdWl0ZSBhcyBlZmZpY2llbnQgYXMgZG9pbmcgdGhpbmdzIGRpcmVjdGx5IGluIHRoZSBDU1NQbHVnaW4ncyBzZXRSYXRpbygpIG1ldGhvZCwgYnV0IGl0J3MgdmVyeSBjb252ZW5pZW50IGFuZCBmbGV4aWJsZS5cblx0XHRcdCAqIEBwYXJhbSB7IU9iamVjdH0gdCBUYXJnZXQgb2JqZWN0IHdob3NlIHByb3BlcnR5IHdpbGwgYmUgdHdlZW5lZC4gT2Z0ZW4gYSBET00gZWxlbWVudCwgYnV0IG5vdCBhbHdheXMuIEl0IGNvdWxkIGJlIGFueXRoaW5nLlxuXHRcdFx0ICogQHBhcmFtIHtzdHJpbmd9IHAgUHJvcGVydHkgdG8gdHdlZW4gKG5hbWUpLiBGb3IgZXhhbXBsZSwgdG8gdHdlZW4gZWxlbWVudC53aWR0aCwgcCB3b3VsZCBiZSBcIndpZHRoXCIuXG5cdFx0XHQgKiBAcGFyYW0ge251bWJlcn0gcyBTdGFydGluZyBudW1lcmljIHZhbHVlXG5cdFx0XHQgKiBAcGFyYW0ge251bWJlcn0gYyBDaGFuZ2UgaW4gbnVtZXJpYyB2YWx1ZSBvdmVyIHRoZSBjb3Vyc2Ugb2YgdGhlIGVudGlyZSB0d2Vlbi4gRm9yIGV4YW1wbGUsIGlmIGVsZW1lbnQud2lkdGggc3RhcnRzIGF0IDUgYW5kIHNob3VsZCBlbmQgYXQgMTAwLCBjIHdvdWxkIGJlIDk1LlxuXHRcdFx0ICogQHBhcmFtIHtDU1NQcm9wVHdlZW49fSBuZXh0IFRoZSBuZXh0IENTU1Byb3BUd2VlbiBpbiB0aGUgbGlua2VkIGxpc3QuIElmIG9uZSBpcyBkZWZpbmVkLCB3ZSB3aWxsIGRlZmluZSBpdHMgX3ByZXYgYXMgdGhlIG5ldyBpbnN0YW5jZSwgYW5kIHRoZSBuZXcgaW5zdGFuY2UncyBfbmV4dCB3aWxsIGJlIHBvaW50ZWQgYXQgaXQuXG5cdFx0XHQgKiBAcGFyYW0ge251bWJlcj19IHR5cGUgVGhlIHR5cGUgb2YgQ1NTUHJvcFR3ZWVuIHdoZXJlIC0xID0gYSBub24tdHdlZW5pbmcgdmFsdWUsIDAgPSBhIHN0YW5kYXJkIHNpbXBsZSB0d2VlbiwgMSA9IGEgY29tcGxleCB2YWx1ZSAobGlrZSBvbmUgdGhhdCBoYXMgbXVsdGlwbGUgbnVtYmVycyBpbiBhIGNvbW1hLSBvciBzcGFjZS1kZWxpbWl0ZWQgc3RyaW5nIGxpa2UgYm9yZGVyOlwiMXB4IHNvbGlkIHJlZFwiKSwgYW5kIDIgPSBvbmUgdGhhdCB1c2VzIGEgY3VzdG9tIHNldFJhdGlvIGZ1bmN0aW9uIHRoYXQgZG9lcyBhbGwgb2YgdGhlIHdvcmsgb2YgYXBwbHlpbmcgdGhlIHZhbHVlcyBvbiBlYWNoIHVwZGF0ZS5cblx0XHRcdCAqIEBwYXJhbSB7c3RyaW5nPX0gbiBOYW1lIG9mIHRoZSBwcm9wZXJ0eSB0aGF0IHNob3VsZCBiZSB1c2VkIGZvciBvdmVyd3JpdGluZyBwdXJwb3NlcyB3aGljaCBpcyB0eXBpY2FsbHkgdGhlIHNhbWUgYXMgcCBidXQgbm90IGFsd2F5cy4gRm9yIGV4YW1wbGUsIHdlIG1heSBuZWVkIHRvIGNyZWF0ZSBhIHN1YnR3ZWVuIGZvciB0aGUgMm5kIHBhcnQgb2YgYSBcImNsaXA6cmVjdCguLi4pXCIgdHdlZW4gaW4gd2hpY2ggY2FzZSBcInBcIiBtaWdodCBiZSB4czEgYnV0IFwiblwiIGlzIHN0aWxsIFwiY2xpcFwiXG5cdFx0XHQgKiBAcGFyYW0ge2Jvb2xlYW49fSByIElmIHRydWUsIHRoZSB2YWx1ZShzKSBzaG91bGQgYmUgcm91bmRlZFxuXHRcdFx0ICogQHBhcmFtIHtudW1iZXI9fSBwciBQcmlvcml0eSBpbiB0aGUgbGlua2VkIGxpc3Qgb3JkZXIuIEhpZ2hlciBwcmlvcml0eSBDU1NQcm9wVHdlZW5zIHdpbGwgYmUgdXBkYXRlZCBiZWZvcmUgbG93ZXIgcHJpb3JpdHkgb25lcy4gVGhlIGRlZmF1bHQgcHJpb3JpdHkgaXMgMC5cblx0XHRcdCAqIEBwYXJhbSB7c3RyaW5nPX0gYiBCZWdpbm5pbmcgdmFsdWUuIFdlIHN0b3JlIHRoaXMgdG8gZW5zdXJlIHRoYXQgaXQgaXMgRVhBQ1RMWSB3aGF0IGl0IHdhcyB3aGVuIHRoZSB0d2VlbiBiZWdhbiB3aXRob3V0IGFueSByaXNrIG9mIGludGVycHJldGF0aW9uIGlzc3Vlcy5cblx0XHRcdCAqIEBwYXJhbSB7c3RyaW5nPX0gZSBFbmRpbmcgdmFsdWUuIFdlIHN0b3JlIHRoaXMgdG8gZW5zdXJlIHRoYXQgaXQgaXMgRVhBQ1RMWSB3aGF0IHRoZSB1c2VyIGRlZmluZWQgYXQgdGhlIGVuZCBvZiB0aGUgdHdlZW4gd2l0aG91dCBhbnkgcmlzayBvZiBpbnRlcnByZXRhdGlvbiBpc3N1ZXMuXG5cdFx0XHQgKi9cblx0XHRcdENTU1Byb3BUd2VlbiA9IF9pbnRlcm5hbHMuQ1NTUHJvcFR3ZWVuID0gZnVuY3Rpb24odCwgcCwgcywgYywgbmV4dCwgdHlwZSwgbiwgciwgcHIsIGIsIGUpIHtcblx0XHRcdFx0dGhpcy50ID0gdDsgLy90YXJnZXRcblx0XHRcdFx0dGhpcy5wID0gcDsgLy9wcm9wZXJ0eVxuXHRcdFx0XHR0aGlzLnMgPSBzOyAvL3N0YXJ0aW5nIHZhbHVlXG5cdFx0XHRcdHRoaXMuYyA9IGM7IC8vY2hhbmdlIHZhbHVlXG5cdFx0XHRcdHRoaXMubiA9IG4gfHwgcDsgLy9uYW1lIHRoYXQgdGhpcyBDU1NQcm9wVHdlZW4gc2hvdWxkIGJlIGFzc29jaWF0ZWQgdG8gKHVzdWFsbHkgdGhlIHNhbWUgYXMgcCwgYnV0IG5vdCBhbHdheXMgLSBuIGlzIHdoYXQgb3ZlcndyaXRpbmcgbG9va3MgYXQpXG5cdFx0XHRcdGlmICghKHQgaW5zdGFuY2VvZiBDU1NQcm9wVHdlZW4pKSB7XG5cdFx0XHRcdFx0X292ZXJ3cml0ZVByb3BzLnB1c2godGhpcy5uKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnIgPSByOyAvL3JvdW5kIChib29sZWFuKVxuXHRcdFx0XHR0aGlzLnR5cGUgPSB0eXBlIHx8IDA7IC8vMCA9IG5vcm1hbCB0d2VlbiwgLTEgPSBub24tdHdlZW5pbmcgKGluIHdoaWNoIGNhc2UgeHMwIHdpbGwgYmUgYXBwbGllZCB0byB0aGUgdGFyZ2V0J3MgcHJvcGVydHksIGxpa2UgdHAudFt0cC5wXSA9IHRwLnhzMCksIDEgPSBjb21wbGV4LXZhbHVlIFNwZWNpYWxQcm9wLCAyID0gY3VzdG9tIHNldFJhdGlvKCkgdGhhdCBkb2VzIGFsbCB0aGUgd29ya1xuXHRcdFx0XHRpZiAocHIpIHtcblx0XHRcdFx0XHR0aGlzLnByID0gcHI7XG5cdFx0XHRcdFx0X2hhc1ByaW9yaXR5ID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmIgPSAoYiA9PT0gdW5kZWZpbmVkKSA/IHMgOiBiO1xuXHRcdFx0XHR0aGlzLmUgPSAoZSA9PT0gdW5kZWZpbmVkKSA/IHMgKyBjIDogZTtcblx0XHRcdFx0aWYgKG5leHQpIHtcblx0XHRcdFx0XHR0aGlzLl9uZXh0ID0gbmV4dDtcblx0XHRcdFx0XHRuZXh0Ll9wcmV2ID0gdGhpcztcblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBUYWtlcyBhIHRhcmdldCwgdGhlIGJlZ2lubmluZyB2YWx1ZSBhbmQgZW5kaW5nIHZhbHVlIChhcyBzdHJpbmdzKSBhbmQgcGFyc2VzIHRoZW0gaW50byBhIENTU1Byb3BUd2VlbiAocG9zc2libHkgd2l0aCBjaGlsZCBDU1NQcm9wVHdlZW5zKSB0aGF0IGFjY29tbW9kYXRlcyBtdWx0aXBsZSBudW1iZXJzLCBjb2xvcnMsIGNvbW1hLWRlbGltaXRlZCB2YWx1ZXMsIGV0Yy4gRm9yIGV4YW1wbGU6XG5cdFx0XHQgKiBzcC5wYXJzZUNvbXBsZXgoZWxlbWVudCwgXCJib3hTaGFkb3dcIiwgXCI1cHggMTBweCAyMHB4IHJnYigyNTUsMTAyLDUxKVwiLCBcIjBweCAwcHggMHB4IHJlZFwiLCB0cnVlLCBcIjBweCAwcHggMHB4IHJnYigwLDAsMCwwKVwiLCBwdCk7XG5cdFx0XHQgKiBJdCB3aWxsIHdhbGsgdGhyb3VnaCB0aGUgYmVnaW5uaW5nIGFuZCBlbmRpbmcgdmFsdWVzICh3aGljaCBzaG91bGQgYmUgaW4gdGhlIHNhbWUgZm9ybWF0IHdpdGggdGhlIHNhbWUgbnVtYmVyIGFuZCB0eXBlIG9mIHZhbHVlcykgYW5kIGZpZ3VyZSBvdXQgd2hpY2ggcGFydHMgYXJlIG51bWJlcnMsIHdoYXQgc3RyaW5ncyBzZXBhcmF0ZSB0aGUgbnVtZXJpYy90d2VlbmFibGUgdmFsdWVzLCBhbmQgdGhlbiBjcmVhdGUgdGhlIENTU1Byb3BUd2VlbnMgYWNjb3JkaW5nbHkuIElmIGEgcGx1Z2luIGlzIGRlZmluZWQsIG5vIGNoaWxkIENTU1Byb3BUd2VlbnMgd2lsbCBiZSBjcmVhdGVkLiBJbnN0ZWFkLCB0aGUgZW5kaW5nIHZhbHVlcyB3aWxsIGJlIHN0b3JlZCBpbiB0aGUgXCJkYXRhXCIgcHJvcGVydHkgb2YgdGhlIHJldHVybmVkIENTU1Byb3BUd2VlbiBsaWtlOiB7czotNSwgeG4xOi0xMCwgeG4yOi0yMCwgeG4zOjI1NSwgeG40OjAsIHhuNTowfSBzbyB0aGF0IGl0IGNhbiBiZSBmZWQgdG8gYW55IG90aGVyIHBsdWdpbiBhbmQgaXQnbGwgYmUgcGxhaW4gbnVtZXJpYyB0d2VlbnMgYnV0IHRoZSByZWNvbXBvc2l0aW9uIG9mIHRoZSBjb21wbGV4IHZhbHVlIHdpbGwgYmUgaGFuZGxlZCBpbnNpZGUgQ1NTUGx1Z2luJ3Mgc2V0UmF0aW8oKS5cblx0XHRcdCAqIElmIGEgc2V0UmF0aW8gaXMgZGVmaW5lZCwgdGhlIHR5cGUgb2YgdGhlIENTU1Byb3BUd2VlbiB3aWxsIGJlIHNldCB0byAyIGFuZCByZWNvbXBvc2l0aW9uIG9mIHRoZSB2YWx1ZXMgd2lsbCBiZSB0aGUgcmVzcG9uc2liaWxpdHkgb2YgdGhhdCBtZXRob2QuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHBhcmFtIHshT2JqZWN0fSB0IFRhcmdldCB3aG9zZSBwcm9wZXJ0eSB3aWxsIGJlIHR3ZWVuZWRcblx0XHRcdCAqIEBwYXJhbSB7IXN0cmluZ30gcCBQcm9wZXJ0eSB0aGF0IHdpbGwgYmUgdHdlZW5lZCAoaXRzIG5hbWUsIGxpa2UgXCJsZWZ0XCIgb3IgXCJiYWNrZ3JvdW5kQ29sb3JcIiBvciBcImJveFNoYWRvd1wiKVxuXHRcdFx0ICogQHBhcmFtIHtzdHJpbmd9IGIgQmVnaW5uaW5nIHZhbHVlXG5cdFx0XHQgKiBAcGFyYW0ge3N0cmluZ30gZSBFbmRpbmcgdmFsdWVcblx0XHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gY2xycyBJZiB0cnVlLCB0aGUgdmFsdWUgY291bGQgY29udGFpbiBhIGNvbG9yIHZhbHVlIGxpa2UgXCJyZ2IoMjU1LDAsMClcIiBvciBcIiNGMDBcIiBvciBcInJlZFwiLiBUaGUgZGVmYXVsdCBpcyBmYWxzZSwgc28gbm8gY29sb3JzIHdpbGwgYmUgcmVjb2duaXplZCAoYSBwZXJmb3JtYW5jZSBvcHRpbWl6YXRpb24pXG5cdFx0XHQgKiBAcGFyYW0geyhzdHJpbmd8bnVtYmVyfE9iamVjdCl9IGRmbHQgVGhlIGRlZmF1bHQgYmVnaW5uaW5nIHZhbHVlIHRoYXQgc2hvdWxkIGJlIHVzZWQgaWYgbm8gdmFsaWQgYmVnaW5uaW5nIHZhbHVlIGlzIGRlZmluZWQgb3IgaWYgdGhlIG51bWJlciBvZiB2YWx1ZXMgaW5zaWRlIHRoZSBjb21wbGV4IGJlZ2lubmluZyBhbmQgZW5kaW5nIHZhbHVlcyBkb24ndCBtYXRjaFxuXHRcdFx0ICogQHBhcmFtIHs/Q1NTUHJvcFR3ZWVufSBwdCBDU1NQcm9wVHdlZW4gaW5zdGFuY2UgdGhhdCBpcyB0aGUgY3VycmVudCBoZWFkIG9mIHRoZSBsaW5rZWQgbGlzdCAod2UnbGwgcHJlcGVuZCB0byB0aGlzKS5cblx0XHRcdCAqIEBwYXJhbSB7bnVtYmVyPX0gcHIgUHJpb3JpdHkgaW4gdGhlIGxpbmtlZCBsaXN0IG9yZGVyLiBIaWdoZXIgcHJpb3JpdHkgcHJvcGVydGllcyB3aWxsIGJlIHVwZGF0ZWQgYmVmb3JlIGxvd2VyIHByaW9yaXR5IG9uZXMuIFRoZSBkZWZhdWx0IHByaW9yaXR5IGlzIDAuXG5cdFx0XHQgKiBAcGFyYW0ge1R3ZWVuUGx1Z2luPX0gcGx1Z2luIElmIGEgcGx1Z2luIHNob3VsZCBoYW5kbGUgdGhlIHR3ZWVuaW5nIG9mIGV4dHJhIHByb3BlcnRpZXMsIHBhc3MgdGhlIHBsdWdpbiBpbnN0YW5jZSBoZXJlLiBJZiBvbmUgaXMgZGVmaW5lZCwgdGhlbiBOTyBzdWJ0d2VlbnMgd2lsbCBiZSBjcmVhdGVkIGZvciBhbnkgZXh0cmEgcHJvcGVydGllcyAodGhlIHByb3BlcnRpZXMgd2lsbCBiZSBjcmVhdGVkIC0ganVzdCBub3QgYWRkaXRpb25hbCBDU1NQcm9wVHdlZW4gaW5zdGFuY2VzIHRvIHR3ZWVuIHRoZW0pIGJlY2F1c2UgdGhlIHBsdWdpbiBpcyBleHBlY3RlZCB0byBkbyBzby4gSG93ZXZlciwgdGhlIGVuZCB2YWx1ZXMgV0lMTCBiZSBwb3B1bGF0ZWQgaW4gdGhlIFwiZGF0YVwiIHByb3BlcnR5LCBsaWtlIHtzOjEwMCwgeG4xOjUwLCB4bjI6MzAwfVxuXHRcdFx0ICogQHBhcmFtIHtmdW5jdGlvbihudW1iZXIpPX0gc2V0UmF0aW8gSWYgdmFsdWVzIHNob3VsZCBiZSBzZXQgaW4gYSBjdXN0b20gZnVuY3Rpb24gaW5zdGVhZCBvZiBiZWluZyBwaWVjZWQgdG9nZXRoZXIgaW4gYSB0eXBlOjEgKGNvbXBsZXgtdmFsdWUpIENTU1Byb3BUd2VlbiwgZGVmaW5lIHRoYXQgY3VzdG9tIGZ1bmN0aW9uIGhlcmUuXG5cdFx0XHQgKiBAcmV0dXJuIHtDU1NQcm9wVHdlZW59IFRoZSBmaXJzdCBDU1NQcm9wVHdlZW4gaW4gdGhlIGxpbmtlZCBsaXN0IHdoaWNoIGluY2x1ZGVzIHRoZSBuZXcgb25lKHMpIGFkZGVkIGJ5IHRoZSBwYXJzZUNvbXBsZXgoKSBjYWxsLlxuXHRcdFx0ICovXG5cdFx0XHRfcGFyc2VDb21wbGV4ID0gQ1NTUGx1Z2luLnBhcnNlQ29tcGxleCA9IGZ1bmN0aW9uKHQsIHAsIGIsIGUsIGNscnMsIGRmbHQsIHB0LCBwciwgcGx1Z2luLCBzZXRSYXRpbykge1xuXHRcdFx0XHQvL0RFQlVHOiBfbG9nKFwicGFyc2VDb21wbGV4OiBcIitwK1wiLCBiOiBcIitiK1wiLCBlOiBcIitlKTtcblx0XHRcdFx0YiA9IGIgfHwgZGZsdCB8fCBcIlwiO1xuXHRcdFx0XHRwdCA9IG5ldyBDU1NQcm9wVHdlZW4odCwgcCwgMCwgMCwgcHQsIChzZXRSYXRpbyA/IDIgOiAxKSwgbnVsbCwgZmFsc2UsIHByLCBiLCBlKTtcblx0XHRcdFx0ZSArPSBcIlwiOyAvL2Vuc3VyZXMgaXQncyBhIHN0cmluZ1xuXHRcdFx0XHR2YXIgYmEgPSBiLnNwbGl0KFwiLCBcIikuam9pbihcIixcIikuc3BsaXQoXCIgXCIpLCAvL2JlZ2lubmluZyBhcnJheVxuXHRcdFx0XHRcdGVhID0gZS5zcGxpdChcIiwgXCIpLmpvaW4oXCIsXCIpLnNwbGl0KFwiIFwiKSwgLy9lbmRpbmcgYXJyYXlcblx0XHRcdFx0XHRsID0gYmEubGVuZ3RoLFxuXHRcdFx0XHRcdGF1dG9Sb3VuZCA9IChfYXV0b1JvdW5kICE9PSBmYWxzZSksXG5cdFx0XHRcdFx0aSwgeGksIG5pLCBidiwgZXYsIGJudW1zLCBlbnVtcywgYm4sIHJnYmEsIHRlbXAsIGN2LCBzdHI7XG5cdFx0XHRcdGlmIChlLmluZGV4T2YoXCIsXCIpICE9PSAtMSB8fCBiLmluZGV4T2YoXCIsXCIpICE9PSAtMSkge1xuXHRcdFx0XHRcdGJhID0gYmEuam9pbihcIiBcIikucmVwbGFjZShfY29tbWFzT3V0c2lkZVBhcmVuRXhwLCBcIiwgXCIpLnNwbGl0KFwiIFwiKTtcblx0XHRcdFx0XHRlYSA9IGVhLmpvaW4oXCIgXCIpLnJlcGxhY2UoX2NvbW1hc091dHNpZGVQYXJlbkV4cCwgXCIsIFwiKS5zcGxpdChcIiBcIik7XG5cdFx0XHRcdFx0bCA9IGJhLmxlbmd0aDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAobCAhPT0gZWEubGVuZ3RoKSB7XG5cdFx0XHRcdFx0Ly9ERUJVRzogX2xvZyhcIm1pc21hdGNoZWQgZm9ybWF0dGluZyBkZXRlY3RlZCBvbiBcIiArIHAgKyBcIiAoXCIgKyBiICsgXCIgdnMgXCIgKyBlICsgXCIpXCIpO1xuXHRcdFx0XHRcdGJhID0gKGRmbHQgfHwgXCJcIikuc3BsaXQoXCIgXCIpO1xuXHRcdFx0XHRcdGwgPSBiYS5sZW5ndGg7XG5cdFx0XHRcdH1cblx0XHRcdFx0cHQucGx1Z2luID0gcGx1Z2luO1xuXHRcdFx0XHRwdC5zZXRSYXRpbyA9IHNldFJhdGlvO1xuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XG5cdFx0XHRcdFx0YnYgPSBiYVtpXTtcblx0XHRcdFx0XHRldiA9IGVhW2ldO1xuXHRcdFx0XHRcdGJuID0gcGFyc2VGbG9hdChidik7XG5cdFx0XHRcdFx0Ly9pZiB0aGUgdmFsdWUgYmVnaW5zIHdpdGggYSBudW1iZXIgKG1vc3QgY29tbW9uKS4gSXQncyBmaW5lIGlmIGl0IGhhcyBhIHN1ZmZpeCBsaWtlIHB4XG5cdFx0XHRcdFx0aWYgKGJuIHx8IGJuID09PSAwKSB7XG5cdFx0XHRcdFx0XHRwdC5hcHBlbmRYdHJhKFwiXCIsIGJuLCBfcGFyc2VDaGFuZ2UoZXYsIGJuKSwgZXYucmVwbGFjZShfcmVsTnVtRXhwLCBcIlwiKSwgKGF1dG9Sb3VuZCAmJiBldi5pbmRleE9mKFwicHhcIikgIT09IC0xKSwgdHJ1ZSk7XG5cblx0XHRcdFx0XHQvL2lmIHRoZSB2YWx1ZSBpcyBhIGNvbG9yXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChjbHJzICYmIChidi5jaGFyQXQoMCkgPT09IFwiI1wiIHx8IF9jb2xvckxvb2t1cFtidl0gfHwgX3JnYmhzbEV4cC50ZXN0KGJ2KSkpIHtcblx0XHRcdFx0XHRcdHN0ciA9IGV2LmNoYXJBdChldi5sZW5ndGggLSAxKSA9PT0gXCIsXCIgPyBcIiksXCIgOiBcIilcIjsgLy9pZiB0aGVyZSdzIGEgY29tbWEgYXQgdGhlIGVuZCwgcmV0YWluIGl0LlxuXHRcdFx0XHRcdFx0YnYgPSBfcGFyc2VDb2xvcihidik7XG5cdFx0XHRcdFx0XHRldiA9IF9wYXJzZUNvbG9yKGV2KTtcblx0XHRcdFx0XHRcdHJnYmEgPSAoYnYubGVuZ3RoICsgZXYubGVuZ3RoID4gNik7XG5cdFx0XHRcdFx0XHRpZiAocmdiYSAmJiAhX3N1cHBvcnRzT3BhY2l0eSAmJiBldlszXSA9PT0gMCkgeyAvL29sZGVyIHZlcnNpb25zIG9mIElFIGRvbid0IHN1cHBvcnQgcmdiYSgpLCBzbyBpZiB0aGUgZGVzdGluYXRpb24gYWxwaGEgaXMgMCwganVzdCB1c2UgXCJ0cmFuc3BhcmVudFwiIGZvciB0aGUgZW5kIGNvbG9yXG5cdFx0XHRcdFx0XHRcdHB0W1wieHNcIiArIHB0LmxdICs9IHB0LmwgPyBcIiB0cmFuc3BhcmVudFwiIDogXCJ0cmFuc3BhcmVudFwiO1xuXHRcdFx0XHRcdFx0XHRwdC5lID0gcHQuZS5zcGxpdChlYVtpXSkuam9pbihcInRyYW5zcGFyZW50XCIpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0aWYgKCFfc3VwcG9ydHNPcGFjaXR5KSB7IC8vb2xkIHZlcnNpb25zIG9mIElFIGRvbid0IHN1cHBvcnQgcmdiYSgpLlxuXHRcdFx0XHRcdFx0XHRcdHJnYmEgPSBmYWxzZTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRwdC5hcHBlbmRYdHJhKChyZ2JhID8gXCJyZ2JhKFwiIDogXCJyZ2IoXCIpLCBidlswXSwgZXZbMF0gLSBidlswXSwgXCIsXCIsIHRydWUsIHRydWUpXG5cdFx0XHRcdFx0XHRcdFx0LmFwcGVuZFh0cmEoXCJcIiwgYnZbMV0sIGV2WzFdIC0gYnZbMV0sIFwiLFwiLCB0cnVlKVxuXHRcdFx0XHRcdFx0XHRcdC5hcHBlbmRYdHJhKFwiXCIsIGJ2WzJdLCBldlsyXSAtIGJ2WzJdLCAocmdiYSA/IFwiLFwiIDogc3RyKSwgdHJ1ZSk7XG5cdFx0XHRcdFx0XHRcdGlmIChyZ2JhKSB7XG5cdFx0XHRcdFx0XHRcdFx0YnYgPSAoYnYubGVuZ3RoIDwgNCkgPyAxIDogYnZbM107XG5cdFx0XHRcdFx0XHRcdFx0cHQuYXBwZW5kWHRyYShcIlwiLCBidiwgKChldi5sZW5ndGggPCA0KSA/IDEgOiBldlszXSkgLSBidiwgc3RyLCBmYWxzZSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRibnVtcyA9IGJ2Lm1hdGNoKF9udW1FeHApOyAvL2dldHMgZWFjaCBncm91cCBvZiBudW1iZXJzIGluIHRoZSBiZWdpbm5pbmcgdmFsdWUgc3RyaW5nIGFuZCBkcm9wcyB0aGVtIGludG8gYW4gYXJyYXlcblxuXHRcdFx0XHRcdFx0Ly9pZiBubyBudW1iZXIgaXMgZm91bmQsIHRyZWF0IGl0IGFzIGEgbm9uLXR3ZWVuaW5nIHZhbHVlIGFuZCBqdXN0IGFwcGVuZCB0aGUgc3RyaW5nIHRvIHRoZSBjdXJyZW50IHhzLlxuXHRcdFx0XHRcdFx0aWYgKCFibnVtcykge1xuXHRcdFx0XHRcdFx0XHRwdFtcInhzXCIgKyBwdC5sXSArPSBwdC5sID8gXCIgXCIgKyBidiA6IGJ2O1xuXG5cdFx0XHRcdFx0XHQvL2xvb3AgdGhyb3VnaCBhbGwgdGhlIG51bWJlcnMgdGhhdCBhcmUgZm91bmQgYW5kIGNvbnN0cnVjdCB0aGUgZXh0cmEgdmFsdWVzIG9uIHRoZSBwdC5cblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGVudW1zID0gZXYubWF0Y2goX3JlbE51bUV4cCk7IC8vZ2V0IGVhY2ggZ3JvdXAgb2YgbnVtYmVycyBpbiB0aGUgZW5kIHZhbHVlIHN0cmluZyBhbmQgZHJvcCB0aGVtIGludG8gYW4gYXJyYXkuIFdlIGFsbG93IHJlbGF0aXZlIHZhbHVlcyB0b28sIGxpa2UgKz01MCBvciAtPS41XG5cdFx0XHRcdFx0XHRcdGlmICghZW51bXMgfHwgZW51bXMubGVuZ3RoICE9PSBibnVtcy5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdFx0XHQvL0RFQlVHOiBfbG9nKFwibWlzbWF0Y2hlZCBmb3JtYXR0aW5nIGRldGVjdGVkIG9uIFwiICsgcCArIFwiIChcIiArIGIgKyBcIiB2cyBcIiArIGUgKyBcIilcIik7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHB0O1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdG5pID0gMDtcblx0XHRcdFx0XHRcdFx0Zm9yICh4aSA9IDA7IHhpIDwgYm51bXMubGVuZ3RoOyB4aSsrKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y3YgPSBibnVtc1t4aV07XG5cdFx0XHRcdFx0XHRcdFx0dGVtcCA9IGJ2LmluZGV4T2YoY3YsIG5pKTtcblx0XHRcdFx0XHRcdFx0XHRwdC5hcHBlbmRYdHJhKGJ2LnN1YnN0cihuaSwgdGVtcCAtIG5pKSwgTnVtYmVyKGN2KSwgX3BhcnNlQ2hhbmdlKGVudW1zW3hpXSwgY3YpLCBcIlwiLCAoYXV0b1JvdW5kICYmIGJ2LnN1YnN0cih0ZW1wICsgY3YubGVuZ3RoLCAyKSA9PT0gXCJweFwiKSwgKHhpID09PSAwKSk7XG5cdFx0XHRcdFx0XHRcdFx0bmkgPSB0ZW1wICsgY3YubGVuZ3RoO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHB0W1wieHNcIiArIHB0LmxdICs9IGJ2LnN1YnN0cihuaSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdC8vaWYgdGhlcmUgYXJlIHJlbGF0aXZlIHZhbHVlcyAoXCIrPVwiIG9yIFwiLT1cIiBwcmVmaXgpLCB3ZSBuZWVkIHRvIGFkanVzdCB0aGUgZW5kaW5nIHZhbHVlIHRvIGVsaW1pbmF0ZSB0aGUgcHJlZml4ZXMgYW5kIGNvbWJpbmUgdGhlIHZhbHVlcyBwcm9wZXJseS5cblx0XHRcdFx0aWYgKGUuaW5kZXhPZihcIj1cIikgIT09IC0xKSBpZiAocHQuZGF0YSkge1xuXHRcdFx0XHRcdHN0ciA9IHB0LnhzMCArIHB0LmRhdGEucztcblx0XHRcdFx0XHRmb3IgKGkgPSAxOyBpIDwgcHQubDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRzdHIgKz0gcHRbXCJ4c1wiICsgaV0gKyBwdC5kYXRhW1wieG5cIiArIGldO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRwdC5lID0gc3RyICsgcHRbXCJ4c1wiICsgaV07XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFwdC5sKSB7XG5cdFx0XHRcdFx0cHQudHlwZSA9IC0xO1xuXHRcdFx0XHRcdHB0LnhzMCA9IHB0LmU7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHB0LnhmaXJzdCB8fCBwdDtcblx0XHRcdH0sXG5cdFx0XHRpID0gOTtcblxuXG5cdFx0cCA9IENTU1Byb3BUd2Vlbi5wcm90b3R5cGU7XG5cdFx0cC5sID0gcC5wciA9IDA7IC8vbGVuZ3RoIChudW1iZXIgb2YgZXh0cmEgcHJvcGVydGllcyBsaWtlIHhuMSwgeG4yLCB4bjMsIGV0Yy5cblx0XHR3aGlsZSAoLS1pID4gMCkge1xuXHRcdFx0cFtcInhuXCIgKyBpXSA9IDA7XG5cdFx0XHRwW1wieHNcIiArIGldID0gXCJcIjtcblx0XHR9XG5cdFx0cC54czAgPSBcIlwiO1xuXHRcdHAuX25leHQgPSBwLl9wcmV2ID0gcC54Zmlyc3QgPSBwLmRhdGEgPSBwLnBsdWdpbiA9IHAuc2V0UmF0aW8gPSBwLnJ4cCA9IG51bGw7XG5cblxuXHRcdC8qKlxuXHRcdCAqIEFwcGVuZHMgYW5kIGV4dHJhIHR3ZWVuaW5nIHZhbHVlIHRvIGEgQ1NTUHJvcFR3ZWVuIGFuZCBhdXRvbWF0aWNhbGx5IG1hbmFnZXMgYW55IHByZWZpeCBhbmQgc3VmZml4IHN0cmluZ3MuIFRoZSBmaXJzdCBleHRyYSB2YWx1ZSBpcyBzdG9yZWQgaW4gdGhlIHMgYW5kIGMgb2YgdGhlIG1haW4gQ1NTUHJvcFR3ZWVuIGluc3RhbmNlLCBidXQgdGhlcmVhZnRlciBhbnkgZXh0cmFzIGFyZSBzdG9yZWQgaW4gdGhlIHhuMSwgeG4yLCB4bjMsIGV0Yy4gVGhlIHByZWZpeGVzIGFuZCBzdWZmaXhlcyBhcmUgc3RvcmVkIGluIHRoZSB4czAsIHhzMSwgeHMyLCBldGMuIHByb3BlcnRpZXMuIEZvciBleGFtcGxlLCBpZiBJIHdhbGsgdGhyb3VnaCBhIGNsaXAgdmFsdWUgbGlrZSBcInJlY3QoMTBweCwgNXB4LCAwcHgsIDIwcHgpXCIsIHRoZSB2YWx1ZXMgd291bGQgYmUgc3RvcmVkIGxpa2UgdGhpczpcblx0XHQgKiB4czA6XCJyZWN0KFwiLCBzOjEwLCB4czE6XCJweCwgXCIsIHhuMTo1LCB4czI6XCJweCwgXCIsIHhuMjowLCB4czM6XCJweCwgXCIsIHhuMzoyMCwgeG40OlwicHgpXCJcblx0XHQgKiBBbmQgdGhleSdkIGFsbCBnZXQgam9pbmVkIHRvZ2V0aGVyIHdoZW4gdGhlIENTU1BsdWdpbiByZW5kZXJzIChpbiB0aGUgc2V0UmF0aW8oKSBtZXRob2QpLlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nPX0gcGZ4IFByZWZpeCAoaWYgYW55KVxuXHRcdCAqIEBwYXJhbSB7IW51bWJlcn0gcyBTdGFydGluZyB2YWx1ZVxuXHRcdCAqIEBwYXJhbSB7IW51bWJlcn0gYyBDaGFuZ2UgaW4gbnVtZXJpYyB2YWx1ZSBvdmVyIHRoZSBjb3Vyc2Ugb2YgdGhlIGVudGlyZSB0d2Vlbi4gRm9yIGV4YW1wbGUsIGlmIHRoZSBzdGFydCBpcyA1IGFuZCB0aGUgZW5kIGlzIDEwMCwgdGhlIGNoYW5nZSB3b3VsZCBiZSA5NS5cblx0XHQgKiBAcGFyYW0ge3N0cmluZz19IHNmeCBTdWZmaXggKGlmIGFueSlcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW49fSByIFJvdW5kIChpZiB0cnVlKS5cblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW49fSBwYWQgSWYgdHJ1ZSwgdGhpcyBleHRyYSB2YWx1ZSBzaG91bGQgYmUgc2VwYXJhdGVkIGJ5IHRoZSBwcmV2aW91cyBvbmUgYnkgYSBzcGFjZS4gSWYgdGhlcmUgaXMgbm8gcHJldmlvdXMgZXh0cmEgYW5kIHBhZCBpcyB0cnVlLCBpdCB3aWxsIGF1dG9tYXRpY2FsbHkgZHJvcCB0aGUgc3BhY2UuXG5cdFx0ICogQHJldHVybiB7Q1NTUHJvcFR3ZWVufSByZXR1cm5zIGl0c2VsZiBzbyB0aGF0IG11bHRpcGxlIG1ldGhvZHMgY2FuIGJlIGNoYWluZWQgdG9nZXRoZXIuXG5cdFx0ICovXG5cdFx0cC5hcHBlbmRYdHJhID0gZnVuY3Rpb24ocGZ4LCBzLCBjLCBzZngsIHIsIHBhZCkge1xuXHRcdFx0dmFyIHB0ID0gdGhpcyxcblx0XHRcdFx0bCA9IHB0Lmw7XG5cdFx0XHRwdFtcInhzXCIgKyBsXSArPSAocGFkICYmIGwpID8gXCIgXCIgKyBwZnggOiBwZnggfHwgXCJcIjtcblx0XHRcdGlmICghYykgaWYgKGwgIT09IDAgJiYgIXB0LnBsdWdpbikgeyAvL3R5cGljYWxseSB3ZSdsbCBjb21iaW5lIG5vbi1jaGFuZ2luZyB2YWx1ZXMgcmlnaHQgaW50byB0aGUgeHMgdG8gb3B0aW1pemUgcGVyZm9ybWFuY2UsIGJ1dCB3ZSBkb24ndCBjb21iaW5lIHRoZW0gd2hlbiB0aGVyZSdzIGEgcGx1Z2luIHRoYXQgd2lsbCBiZSB0d2VlbmluZyB0aGUgdmFsdWVzIGJlY2F1c2UgaXQgbWF5IGRlcGVuZCBvbiB0aGUgdmFsdWVzIGJlaW5nIHNwbGl0IGFwYXJ0LCBsaWtlIGZvciBhIGJlemllciwgaWYgYSB2YWx1ZSBkb2Vzbid0IGNoYW5nZSBiZXR3ZWVuIHRoZSBmaXJzdCBhbmQgc2Vjb25kIGl0ZXJhdGlvbiBidXQgdGhlbiBpdCBkb2VzIG9uIHRoZSAzcmQsIHdlJ2xsIHJ1biBpbnRvIHRyb3VibGUgYmVjYXVzZSB0aGVyZSdzIG5vIHhuIHNsb3QgZm9yIHRoYXQgdmFsdWUhXG5cdFx0XHRcdHB0W1wieHNcIiArIGxdICs9IHMgKyAoc2Z4IHx8IFwiXCIpO1xuXHRcdFx0XHRyZXR1cm4gcHQ7XG5cdFx0XHR9XG5cdFx0XHRwdC5sKys7XG5cdFx0XHRwdC50eXBlID0gcHQuc2V0UmF0aW8gPyAyIDogMTtcblx0XHRcdHB0W1wieHNcIiArIHB0LmxdID0gc2Z4IHx8IFwiXCI7XG5cdFx0XHRpZiAobCA+IDApIHtcblx0XHRcdFx0cHQuZGF0YVtcInhuXCIgKyBsXSA9IHMgKyBjO1xuXHRcdFx0XHRwdC5yeHBbXCJ4blwiICsgbF0gPSByOyAvL3JvdW5kIGV4dHJhIHByb3BlcnR5ICh3ZSBuZWVkIHRvIHRhcCBpbnRvIHRoaXMgaW4gdGhlIF9wYXJzZVRvUHJveHkoKSBtZXRob2QpXG5cdFx0XHRcdHB0W1wieG5cIiArIGxdID0gcztcblx0XHRcdFx0aWYgKCFwdC5wbHVnaW4pIHtcblx0XHRcdFx0XHRwdC54Zmlyc3QgPSBuZXcgQ1NTUHJvcFR3ZWVuKHB0LCBcInhuXCIgKyBsLCBzLCBjLCBwdC54Zmlyc3QgfHwgcHQsIDAsIHB0Lm4sIHIsIHB0LnByKTtcblx0XHRcdFx0XHRwdC54Zmlyc3QueHMwID0gMDsgLy9qdXN0IHRvIGVuc3VyZSB0aGF0IHRoZSBwcm9wZXJ0eSBzdGF5cyBudW1lcmljIHdoaWNoIGhlbHBzIG1vZGVybiBicm93c2VycyBzcGVlZCB1cCBwcm9jZXNzaW5nLiBSZW1lbWJlciwgaW4gdGhlIHNldFJhdGlvKCkgbWV0aG9kLCB3ZSBkbyBwdC50W3B0LnBdID0gdmFsICsgcHQueHMwIHNvIGlmIHB0LnhzMCBpcyBcIlwiICh0aGUgZGVmYXVsdCksIGl0J2xsIGNhc3QgdGhlIGVuZCB2YWx1ZSBhcyBhIHN0cmluZy4gV2hlbiBhIHByb3BlcnR5IGlzIGEgbnVtYmVyIHNvbWV0aW1lcyBhbmQgYSBzdHJpbmcgc29tZXRpbWVzLCBpdCBwcmV2ZW50cyB0aGUgY29tcGlsZXIgZnJvbSBsb2NraW5nIGluIHRoZSBkYXRhIHR5cGUsIHNsb3dpbmcgdGhpbmdzIGRvd24gc2xpZ2h0bHkuXG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHB0O1xuXHRcdFx0fVxuXHRcdFx0cHQuZGF0YSA9IHtzOnMgKyBjfTtcblx0XHRcdHB0LnJ4cCA9IHt9O1xuXHRcdFx0cHQucyA9IHM7XG5cdFx0XHRwdC5jID0gYztcblx0XHRcdHB0LnIgPSByO1xuXHRcdFx0cmV0dXJuIHB0O1xuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiBAY29uc3RydWN0b3IgQSBTcGVjaWFsUHJvcCBpcyBiYXNpY2FsbHkgYSBjc3MgcHJvcGVydHkgdGhhdCBuZWVkcyB0byBiZSB0cmVhdGVkIGluIGEgbm9uLXN0YW5kYXJkIHdheSwgbGlrZSBpZiBpdCBtYXkgY29udGFpbiBhIGNvbXBsZXggdmFsdWUgbGlrZSBib3hTaGFkb3c6XCI1cHggMTBweCAxNXB4IHJnYigyNTUsIDEwMiwgNTEpXCIgb3IgaWYgaXQgaXMgYXNzb2NpYXRlZCB3aXRoIGFub3RoZXIgcGx1Z2luIGxpa2UgVGhyb3dQcm9wc1BsdWdpbiBvciBCZXppZXJQbHVnaW4uIEV2ZXJ5IFNwZWNpYWxQcm9wIGlzIGFzc29jaWF0ZWQgd2l0aCBhIHBhcnRpY3VsYXIgcHJvcGVydHkgbmFtZSBsaWtlIFwiYm94U2hhZG93XCIgb3IgXCJ0aHJvd1Byb3BzXCIgb3IgXCJiZXppZXJcIiBhbmQgaXQgd2lsbCBpbnRlcmNlcHQgdGhvc2UgdmFsdWVzIGluIHRoZSB2YXJzIG9iamVjdCB0aGF0J3MgcGFzc2VkIHRvIHRoZSBDU1NQbHVnaW4gYW5kIGhhbmRsZSB0aGVtIGFjY29yZGluZ2x5LlxuXHRcdCAqIEBwYXJhbSB7IXN0cmluZ30gcCBQcm9wZXJ0eSBuYW1lIChsaWtlIFwiYm94U2hhZG93XCIgb3IgXCJ0aHJvd1Byb3BzXCIpXG5cdFx0ICogQHBhcmFtIHtPYmplY3Q9fSBvcHRpb25zIEFuIG9iamVjdCBjb250YWluaW5nIGFueSBvZiB0aGUgZm9sbG93aW5nIGNvbmZpZ3VyYXRpb24gb3B0aW9uczpcblx0XHQgKiAgICAgICAgICAgICAgICAgICAgICAtIGRlZmF1bHRWYWx1ZTogdGhlIGRlZmF1bHQgdmFsdWVcblx0XHQgKiAgICAgICAgICAgICAgICAgICAgICAtIHBhcnNlcjogQSBmdW5jdGlvbiB0aGF0IHNob3VsZCBiZSBjYWxsZWQgd2hlbiB0aGUgYXNzb2NpYXRlZCBwcm9wZXJ0eSBuYW1lIGlzIGZvdW5kIGluIHRoZSB2YXJzLiBUaGlzIGZ1bmN0aW9uIHNob3VsZCByZXR1cm4gYSBDU1NQcm9wVHdlZW4gaW5zdGFuY2UgYW5kIGl0IHNob3VsZCBlbnN1cmUgdGhhdCBpdCBpcyBwcm9wZXJseSBpbnNlcnRlZCBpbnRvIHRoZSBsaW5rZWQgbGlzdC4gSXQgd2lsbCByZWNlaXZlIDQgcGFyYW10ZXJzOiAxKSBUaGUgdGFyZ2V0LCAyKSBUaGUgdmFsdWUgZGVmaW5lZCBpbiB0aGUgdmFycywgMykgVGhlIENTU1BsdWdpbiBpbnN0YW5jZSAod2hvc2UgX2ZpcnN0UFQgc2hvdWxkIGJlIHVzZWQgZm9yIHRoZSBsaW5rZWQgbGlzdCksIGFuZCA0KSBBIGNvbXB1dGVkIHN0eWxlIG9iamVjdCBpZiBvbmUgd2FzIGNhbGN1bGF0ZWQgKHRoaXMgaXMgYSBzcGVlZCBvcHRpbWl6YXRpb24gdGhhdCBhbGxvd3MgcmV0cmlldmFsIG9mIHN0YXJ0aW5nIHZhbHVlcyBxdWlja2VyKVxuXHRcdCAqICAgICAgICAgICAgICAgICAgICAgIC0gZm9ybWF0dGVyOiBhIGZ1bmN0aW9uIHRoYXQgZm9ybWF0cyBhbnkgdmFsdWUgcmVjZWl2ZWQgZm9yIHRoaXMgc3BlY2lhbCBwcm9wZXJ0eSAoZm9yIGV4YW1wbGUsIGJveFNoYWRvdyBjb3VsZCB0YWtlIFwiNXB4IDVweCByZWRcIiBhbmQgZm9ybWF0IGl0IHRvIFwiNXB4IDVweCAwcHggMHB4IHJlZFwiIHNvIHRoYXQgYm90aCB0aGUgYmVnaW5uaW5nIGFuZCBlbmRpbmcgdmFsdWVzIGhhdmUgYSBjb21tb24gb3JkZXIgYW5kIHF1YW50aXR5IG9mIHZhbHVlcy4pXG5cdFx0ICogICAgICAgICAgICAgICAgICAgICAgLSBwcmVmaXg6IGlmIHRydWUsIHdlJ2xsIGRldGVybWluZSB3aGV0aGVyIG9yIG5vdCB0aGlzIHByb3BlcnR5IHJlcXVpcmVzIGEgdmVuZG9yIHByZWZpeCAobGlrZSBXZWJraXQgb3IgTW96IG9yIG1zIG9yIE8pXG5cdFx0ICogICAgICAgICAgICAgICAgICAgICAgLSBjb2xvcjogc2V0IHRoaXMgdG8gdHJ1ZSBpZiB0aGUgdmFsdWUgZm9yIHRoaXMgU3BlY2lhbFByb3AgbWF5IGNvbnRhaW4gY29sb3ItcmVsYXRlZCB2YWx1ZXMgbGlrZSByZ2IoKSwgcmdiYSgpLCBldGMuXG5cdFx0ICogICAgICAgICAgICAgICAgICAgICAgLSBwcmlvcml0eTogcHJpb3JpdHkgaW4gdGhlIGxpbmtlZCBsaXN0IG9yZGVyLiBIaWdoZXIgcHJpb3JpdHkgU3BlY2lhbFByb3BzIHdpbGwgYmUgdXBkYXRlZCBiZWZvcmUgbG93ZXIgcHJpb3JpdHkgb25lcy4gVGhlIGRlZmF1bHQgcHJpb3JpdHkgaXMgMC5cblx0XHQgKiAgICAgICAgICAgICAgICAgICAgICAtIG11bHRpOiBpZiB0cnVlLCB0aGUgZm9ybWF0dGVyIHNob3VsZCBhY2NvbW1vZGF0ZSBhIGNvbW1hLWRlbGltaXRlZCBsaXN0IG9mIHZhbHVlcywgbGlrZSBib3hTaGFkb3cgY291bGQgaGF2ZSBtdWx0aXBsZSBib3hTaGFkb3dzIGxpc3RlZCBvdXQuXG5cdFx0ICogICAgICAgICAgICAgICAgICAgICAgLSBjb2xsYXBzaWJsZTogaWYgdHJ1ZSwgdGhlIGZvcm1hdHRlciBzaG91bGQgdHJlYXQgdGhlIHZhbHVlIGxpa2UgaXQncyBhIHRvcC9yaWdodC9ib3R0b20vbGVmdCB2YWx1ZSB0aGF0IGNvdWxkIGJlIGNvbGxhcHNlZCwgbGlrZSBcIjVweFwiIHdvdWxkIGFwcGx5IHRvIGFsbCwgXCI1cHgsIDEwcHhcIiB3b3VsZCB1c2UgNXB4IGZvciB0b3AvYm90dG9tIGFuZCAxMHB4IGZvciByaWdodC9sZWZ0LCBldGMuXG5cdFx0ICogICAgICAgICAgICAgICAgICAgICAgLSBrZXl3b3JkOiBhIHNwZWNpYWwga2V5d29yZCB0aGF0IGNhbiBbb3B0aW9uYWxseV0gYmUgZm91bmQgaW5zaWRlIHRoZSB2YWx1ZSAobGlrZSBcImluc2V0XCIgZm9yIGJveFNoYWRvdykuIFRoaXMgYWxsb3dzIHVzIHRvIHZhbGlkYXRlIGJlZ2lubmluZy9lbmRpbmcgdmFsdWVzIHRvIG1ha2Ugc3VyZSB0aGV5IG1hdGNoIChpZiB0aGUga2V5d29yZCBpcyBmb3VuZCBpbiBvbmUsIGl0J2xsIGJlIGFkZGVkIHRvIHRoZSBvdGhlciBmb3IgY29uc2lzdGVuY3kgYnkgZGVmYXVsdCkuXG5cdFx0ICovXG5cdFx0dmFyIFNwZWNpYWxQcm9wID0gZnVuY3Rpb24ocCwgb3B0aW9ucykge1xuXHRcdFx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblx0XHRcdFx0dGhpcy5wID0gb3B0aW9ucy5wcmVmaXggPyBfY2hlY2tQcm9wUHJlZml4KHApIHx8IHAgOiBwO1xuXHRcdFx0XHRfc3BlY2lhbFByb3BzW3BdID0gX3NwZWNpYWxQcm9wc1t0aGlzLnBdID0gdGhpcztcblx0XHRcdFx0dGhpcy5mb3JtYXQgPSBvcHRpb25zLmZvcm1hdHRlciB8fCBfZ2V0Rm9ybWF0dGVyKG9wdGlvbnMuZGVmYXVsdFZhbHVlLCBvcHRpb25zLmNvbG9yLCBvcHRpb25zLmNvbGxhcHNpYmxlLCBvcHRpb25zLm11bHRpKTtcblx0XHRcdFx0aWYgKG9wdGlvbnMucGFyc2VyKSB7XG5cdFx0XHRcdFx0dGhpcy5wYXJzZSA9IG9wdGlvbnMucGFyc2VyO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuY2xycyA9IG9wdGlvbnMuY29sb3I7XG5cdFx0XHRcdHRoaXMubXVsdGkgPSBvcHRpb25zLm11bHRpO1xuXHRcdFx0XHR0aGlzLmtleXdvcmQgPSBvcHRpb25zLmtleXdvcmQ7XG5cdFx0XHRcdHRoaXMuZGZsdCA9IG9wdGlvbnMuZGVmYXVsdFZhbHVlO1xuXHRcdFx0XHR0aGlzLnByID0gb3B0aW9ucy5wcmlvcml0eSB8fCAwO1xuXHRcdFx0fSxcblxuXHRcdFx0Ly9zaG9ydGN1dCBmb3IgY3JlYXRpbmcgYSBuZXcgU3BlY2lhbFByb3AgdGhhdCBjYW4gYWNjZXB0IG11bHRpcGxlIHByb3BlcnRpZXMgYXMgYSBjb21tYS1kZWxpbWl0ZWQgbGlzdCAoaGVscHMgbWluaWZpY2F0aW9uKS4gZGZsdCBjYW4gYmUgYW4gYXJyYXkgZm9yIG11bHRpcGxlIHZhbHVlcyAod2UgZG9uJ3QgZG8gYSBjb21tYS1kZWxpbWl0ZWQgbGlzdCBiZWNhdXNlIHRoZSBkZWZhdWx0IHZhbHVlIG1heSBjb250YWluIGNvbW1hcywgbGlrZSByZWN0KDBweCwwcHgsMHB4LDBweCkpLiBXZSBhdHRhY2ggdGhpcyBtZXRob2QgdG8gdGhlIFNwZWNpYWxQcm9wIGNsYXNzL29iamVjdCBpbnN0ZWFkIG9mIHVzaW5nIGEgcHJpdmF0ZSBfY3JlYXRlU3BlY2lhbFByb3AoKSBtZXRob2Qgc28gdGhhdCB3ZSBjYW4gdGFwIGludG8gaXQgZXh0ZXJuYWxseSBpZiBuZWNlc3NhcnksIGxpa2UgZnJvbSBhbm90aGVyIHBsdWdpbi5cblx0XHRcdF9yZWdpc3RlckNvbXBsZXhTcGVjaWFsUHJvcCA9IF9pbnRlcm5hbHMuX3JlZ2lzdGVyQ29tcGxleFNwZWNpYWxQcm9wID0gZnVuY3Rpb24ocCwgb3B0aW9ucywgZGVmYXVsdHMpIHtcblx0XHRcdFx0aWYgKHR5cGVvZihvcHRpb25zKSAhPT0gXCJvYmplY3RcIikge1xuXHRcdFx0XHRcdG9wdGlvbnMgPSB7cGFyc2VyOmRlZmF1bHRzfTsgLy90byBtYWtlIGJhY2t3YXJkcyBjb21wYXRpYmxlIHdpdGggb2xkZXIgdmVyc2lvbnMgb2YgQmV6aWVyUGx1Z2luIGFuZCBUaHJvd1Byb3BzUGx1Z2luXG5cdFx0XHRcdH1cblx0XHRcdFx0dmFyIGEgPSBwLnNwbGl0KFwiLFwiKSxcblx0XHRcdFx0XHRkID0gb3B0aW9ucy5kZWZhdWx0VmFsdWUsXG5cdFx0XHRcdFx0aSwgdGVtcDtcblx0XHRcdFx0ZGVmYXVsdHMgPSBkZWZhdWx0cyB8fCBbZF07XG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0b3B0aW9ucy5wcmVmaXggPSAoaSA9PT0gMCAmJiBvcHRpb25zLnByZWZpeCk7XG5cdFx0XHRcdFx0b3B0aW9ucy5kZWZhdWx0VmFsdWUgPSBkZWZhdWx0c1tpXSB8fCBkO1xuXHRcdFx0XHRcdHRlbXAgPSBuZXcgU3BlY2lhbFByb3AoYVtpXSwgb3B0aW9ucyk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cblx0XHRcdC8vY3JlYXRlcyBhIHBsYWNlaG9sZGVyIHNwZWNpYWwgcHJvcCBmb3IgYSBwbHVnaW4gc28gdGhhdCB0aGUgcHJvcGVydHkgZ2V0cyBjYXVnaHQgdGhlIGZpcnN0IHRpbWUgYSB0d2VlbiBvZiBpdCBpcyBhdHRlbXB0ZWQsIGFuZCBhdCB0aGF0IHRpbWUgaXQgbWFrZXMgdGhlIHBsdWdpbiByZWdpc3RlciBpdHNlbGYsIHRodXMgdGFraW5nIG92ZXIgZm9yIGFsbCBmdXR1cmUgdHdlZW5zIG9mIHRoYXQgcHJvcGVydHkuIFRoaXMgYWxsb3dzIHVzIHRvIG5vdCBtYW5kYXRlIHRoYXQgdGhpbmdzIGxvYWQgaW4gYSBwYXJ0aWN1bGFyIG9yZGVyIGFuZCBpdCBhbHNvIGFsbG93cyB1cyB0byBsb2coKSBhbiBlcnJvciB0aGF0IGluZm9ybXMgdGhlIHVzZXIgd2hlbiB0aGV5IGF0dGVtcHQgdG8gdHdlZW4gYW4gZXh0ZXJuYWwgcGx1Z2luLXJlbGF0ZWQgcHJvcGVydHkgd2l0aG91dCBsb2FkaW5nIGl0cyAuanMgZmlsZS5cblx0XHRcdF9yZWdpc3RlclBsdWdpblByb3AgPSBmdW5jdGlvbihwKSB7XG5cdFx0XHRcdGlmICghX3NwZWNpYWxQcm9wc1twXSkge1xuXHRcdFx0XHRcdHZhciBwbHVnaW5OYW1lID0gcC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHAuc3Vic3RyKDEpICsgXCJQbHVnaW5cIjtcblx0XHRcdFx0XHRfcmVnaXN0ZXJDb21wbGV4U3BlY2lhbFByb3AocCwge3BhcnNlcjpmdW5jdGlvbih0LCBlLCBwLCBjc3NwLCBwdCwgcGx1Z2luLCB2YXJzKSB7XG5cdFx0XHRcdFx0XHR2YXIgcGx1Z2luQ2xhc3MgPSBfZ2xvYmFscy5jb20uZ3JlZW5zb2NrLnBsdWdpbnNbcGx1Z2luTmFtZV07XG5cdFx0XHRcdFx0XHRpZiAoIXBsdWdpbkNsYXNzKSB7XG5cdFx0XHRcdFx0XHRcdF9sb2coXCJFcnJvcjogXCIgKyBwbHVnaW5OYW1lICsgXCIganMgZmlsZSBub3QgbG9hZGVkLlwiKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHB0O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cGx1Z2luQ2xhc3MuX2Nzc1JlZ2lzdGVyKCk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gX3NwZWNpYWxQcm9wc1twXS5wYXJzZSh0LCBlLCBwLCBjc3NwLCBwdCwgcGx1Z2luLCB2YXJzKTtcblx0XHRcdFx0XHR9fSk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblxuXHRcdHAgPSBTcGVjaWFsUHJvcC5wcm90b3R5cGU7XG5cblx0XHQvKipcblx0XHQgKiBBbGlhcyBmb3IgX3BhcnNlQ29tcGxleCgpIHRoYXQgYXV0b21hdGljYWxseSBwbHVncyBpbiBjZXJ0YWluIHZhbHVlcyBmb3IgdGhpcyBTcGVjaWFsUHJvcCwgbGlrZSBpdHMgcHJvcGVydHkgbmFtZSwgd2hldGhlciBvciBub3QgY29sb3JzIHNob3VsZCBiZSBzZW5zZWQsIHRoZSBkZWZhdWx0IHZhbHVlLCBhbmQgcHJpb3JpdHkuIEl0IGFsc28gbG9va3MgZm9yIGFueSBrZXl3b3JkIHRoYXQgdGhlIFNwZWNpYWxQcm9wIGRlZmluZXMgKGxpa2UgXCJpbnNldFwiIGZvciBib3hTaGFkb3cpIGFuZCBlbnN1cmVzIHRoYXQgdGhlIGJlZ2lubmluZyBhbmQgZW5kaW5nIHZhbHVlcyBoYXZlIHRoZSBzYW1lIG51bWJlciBvZiB2YWx1ZXMgZm9yIFNwZWNpYWxQcm9wcyB3aGVyZSBtdWx0aSBpcyB0cnVlIChsaWtlIGJveFNoYWRvdyBhbmQgdGV4dFNoYWRvdyBjYW4gaGF2ZSBhIGNvbW1hLWRlbGltaXRlZCBsaXN0KVxuXHRcdCAqIEBwYXJhbSB7IU9iamVjdH0gdCB0YXJnZXQgZWxlbWVudFxuXHRcdCAqIEBwYXJhbSB7KHN0cmluZ3xudW1iZXJ8b2JqZWN0KX0gYiBiZWdpbm5pbmcgdmFsdWVcblx0XHQgKiBAcGFyYW0geyhzdHJpbmd8bnVtYmVyfG9iamVjdCl9IGUgZW5kaW5nIChkZXN0aW5hdGlvbikgdmFsdWVcblx0XHQgKiBAcGFyYW0ge0NTU1Byb3BUd2Vlbj19IHB0IG5leHQgQ1NTUHJvcFR3ZWVuIGluIHRoZSBsaW5rZWQgbGlzdFxuXHRcdCAqIEBwYXJhbSB7VHdlZW5QbHVnaW49fSBwbHVnaW4gSWYgYW5vdGhlciBwbHVnaW4gd2lsbCBiZSB0d2VlbmluZyB0aGUgY29tcGxleCB2YWx1ZSwgdGhhdCBUd2VlblBsdWdpbiBpbnN0YW5jZSBnb2VzIGhlcmUuXG5cdFx0ICogQHBhcmFtIHtmdW5jdGlvbj19IHNldFJhdGlvIElmIGEgY3VzdG9tIHNldFJhdGlvKCkgbWV0aG9kIHNob3VsZCBiZSB1c2VkIHRvIGhhbmRsZSB0aGlzIGNvbXBsZXggdmFsdWUsIHRoYXQgZ29lcyBoZXJlLlxuXHRcdCAqIEByZXR1cm4ge0NTU1Byb3BUd2Vlbj19IEZpcnN0IENTU1Byb3BUd2VlbiBpbiB0aGUgbGlua2VkIGxpc3Rcblx0XHQgKi9cblx0XHRwLnBhcnNlQ29tcGxleCA9IGZ1bmN0aW9uKHQsIGIsIGUsIHB0LCBwbHVnaW4sIHNldFJhdGlvKSB7XG5cdFx0XHR2YXIga3dkID0gdGhpcy5rZXl3b3JkLFxuXHRcdFx0XHRpLCBiYSwgZWEsIGwsIGJpLCBlaTtcblx0XHRcdC8vaWYgdGhpcyBTcGVjaWFsUHJvcCdzIHZhbHVlIGNhbiBjb250YWluIGEgY29tbWEtZGVsaW1pdGVkIGxpc3Qgb2YgdmFsdWVzIChsaWtlIGJveFNoYWRvdyBvciB0ZXh0U2hhZG93KSwgd2UgbXVzdCBwYXJzZSB0aGVtIGluIGEgc3BlY2lhbCB3YXksIGFuZCBsb29rIGZvciBhIGtleXdvcmQgKGxpa2UgXCJpbnNldFwiIGZvciBib3hTaGFkb3cpIGFuZCBlbnN1cmUgdGhhdCB0aGUgYmVnaW5uaW5nIGFuZCBlbmRpbmcgQk9USCBoYXZlIGl0IGlmIHRoZSBlbmQgZGVmaW5lcyBpdCBhcyBzdWNoLiBXZSBhbHNvIG11c3QgZW5zdXJlIHRoYXQgdGhlcmUgYXJlIGFuIGVxdWFsIG51bWJlciBvZiB2YWx1ZXMgc3BlY2lmaWVkICh3ZSBjYW4ndCB0d2VlbiAxIGJveFNoYWRvdyB0byAzIGZvciBleGFtcGxlKVxuXHRcdFx0aWYgKHRoaXMubXVsdGkpIGlmIChfY29tbWFzT3V0c2lkZVBhcmVuRXhwLnRlc3QoZSkgfHwgX2NvbW1hc091dHNpZGVQYXJlbkV4cC50ZXN0KGIpKSB7XG5cdFx0XHRcdGJhID0gYi5yZXBsYWNlKF9jb21tYXNPdXRzaWRlUGFyZW5FeHAsIFwifFwiKS5zcGxpdChcInxcIik7XG5cdFx0XHRcdGVhID0gZS5yZXBsYWNlKF9jb21tYXNPdXRzaWRlUGFyZW5FeHAsIFwifFwiKS5zcGxpdChcInxcIik7XG5cdFx0XHR9IGVsc2UgaWYgKGt3ZCkge1xuXHRcdFx0XHRiYSA9IFtiXTtcblx0XHRcdFx0ZWEgPSBbZV07XG5cdFx0XHR9XG5cdFx0XHRpZiAoZWEpIHtcblx0XHRcdFx0bCA9IChlYS5sZW5ndGggPiBiYS5sZW5ndGgpID8gZWEubGVuZ3RoIDogYmEubGVuZ3RoO1xuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XG5cdFx0XHRcdFx0YiA9IGJhW2ldID0gYmFbaV0gfHwgdGhpcy5kZmx0O1xuXHRcdFx0XHRcdGUgPSBlYVtpXSA9IGVhW2ldIHx8IHRoaXMuZGZsdDtcblx0XHRcdFx0XHRpZiAoa3dkKSB7XG5cdFx0XHRcdFx0XHRiaSA9IGIuaW5kZXhPZihrd2QpO1xuXHRcdFx0XHRcdFx0ZWkgPSBlLmluZGV4T2Yoa3dkKTtcblx0XHRcdFx0XHRcdGlmIChiaSAhPT0gZWkpIHtcblx0XHRcdFx0XHRcdFx0aWYgKGVpID09PSAtMSkgeyAvL2lmIHRoZSBrZXl3b3JkIGlzbid0IGluIHRoZSBlbmQgdmFsdWUsIHJlbW92ZSBpdCBmcm9tIHRoZSBiZWdpbm5pbmcgb25lLlxuXHRcdFx0XHRcdFx0XHRcdGJhW2ldID0gYmFbaV0uc3BsaXQoa3dkKS5qb2luKFwiXCIpO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKGJpID09PSAtMSkgeyAvL2lmIHRoZSBrZXl3b3JkIGlzbid0IGluIHRoZSBiZWdpbm5pbmcsIGFkZCBpdC5cblx0XHRcdFx0XHRcdFx0XHRiYVtpXSArPSBcIiBcIiArIGt3ZDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRiID0gYmEuam9pbihcIiwgXCIpO1xuXHRcdFx0XHRlID0gZWEuam9pbihcIiwgXCIpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIF9wYXJzZUNvbXBsZXgodCwgdGhpcy5wLCBiLCBlLCB0aGlzLmNscnMsIHRoaXMuZGZsdCwgcHQsIHRoaXMucHIsIHBsdWdpbiwgc2V0UmF0aW8pO1xuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiBBY2NlcHRzIGEgdGFyZ2V0IGFuZCBlbmQgdmFsdWUgYW5kIHNwaXRzIGJhY2sgYSBDU1NQcm9wVHdlZW4gdGhhdCBoYXMgYmVlbiBpbnNlcnRlZCBpbnRvIHRoZSBDU1NQbHVnaW4ncyBsaW5rZWQgbGlzdCBhbmQgY29uZm9ybXMgd2l0aCBhbGwgdGhlIGNvbnZlbnRpb25zIHdlIHVzZSBpbnRlcm5hbGx5LCBsaWtlIHR5cGU6LTEsIDAsIDEsIG9yIDIsIHNldHRpbmcgdXAgYW55IGV4dHJhIHByb3BlcnR5IHR3ZWVucywgcHJpb3JpdHksIGV0Yy4gRm9yIGV4YW1wbGUsIGlmIHdlIGhhdmUgYSBib3hTaGFkb3cgU3BlY2lhbFByb3AgYW5kIGNhbGw6XG5cdFx0ICogdGhpcy5fZmlyc3RQVCA9IHNwLnBhcnNlKGVsZW1lbnQsIFwiNXB4IDEwcHggMjBweCByZ2IoMjU1MCwxMDIsNTEpXCIsIFwiYm94U2hhZG93XCIsIHRoaXMpO1xuXHRcdCAqIEl0IHNob3VsZCBmaWd1cmUgb3V0IHRoZSBzdGFydGluZyB2YWx1ZSBvZiB0aGUgZWxlbWVudCdzIGJveFNoYWRvdywgY29tcGFyZSBpdCB0byB0aGUgcHJvdmlkZWQgZW5kIHZhbHVlIGFuZCBjcmVhdGUgYWxsIHRoZSBuZWNlc3NhcnkgQ1NTUHJvcFR3ZWVucyBvZiB0aGUgYXBwcm9wcmlhdGUgdHlwZXMgdG8gdHdlZW4gdGhlIGJveFNoYWRvdy4gVGhlIENTU1Byb3BUd2VlbiB0aGF0IGdldHMgc3BpdCBiYWNrIHNob3VsZCBhbHJlYWR5IGJlIGluc2VydGVkIGludG8gdGhlIGxpbmtlZCBsaXN0ICh0aGUgNHRoIHBhcmFtZXRlciBpcyB0aGUgY3VycmVudCBoZWFkLCBzbyBwcmVwZW5kIHRvIHRoYXQpLlxuXHRcdCAqIEBwYXJhbSB7IU9iamVjdH0gdCBUYXJnZXQgb2JqZWN0IHdob3NlIHByb3BlcnR5IGlzIGJlaW5nIHR3ZWVuZWRcblx0XHQgKiBAcGFyYW0ge09iamVjdH0gZSBFbmQgdmFsdWUgYXMgcHJvdmlkZWQgaW4gdGhlIHZhcnMgb2JqZWN0ICh0eXBpY2FsbHkgYSBzdHJpbmcsIGJ1dCBub3QgYWx3YXlzIC0gbGlrZSBhIHRocm93UHJvcHMgd291bGQgYmUgYW4gb2JqZWN0KS5cblx0XHQgKiBAcGFyYW0geyFzdHJpbmd9IHAgUHJvcGVydHkgbmFtZVxuXHRcdCAqIEBwYXJhbSB7IUNTU1BsdWdpbn0gY3NzcCBUaGUgQ1NTUGx1Z2luIGluc3RhbmNlIHRoYXQgc2hvdWxkIGJlIGFzc29jaWF0ZWQgd2l0aCB0aGlzIHR3ZWVuLlxuXHRcdCAqIEBwYXJhbSB7P0NTU1Byb3BUd2Vlbn0gcHQgVGhlIENTU1Byb3BUd2VlbiB0aGF0IGlzIHRoZSBjdXJyZW50IGhlYWQgb2YgdGhlIGxpbmtlZCBsaXN0ICh3ZSdsbCBwcmVwZW5kIHRvIGl0KVxuXHRcdCAqIEBwYXJhbSB7VHdlZW5QbHVnaW49fSBwbHVnaW4gSWYgYSBwbHVnaW4gd2lsbCBiZSB1c2VkIHRvIHR3ZWVuIHRoZSBwYXJzZWQgdmFsdWUsIHRoaXMgaXMgdGhlIHBsdWdpbiBpbnN0YW5jZS5cblx0XHQgKiBAcGFyYW0ge09iamVjdD19IHZhcnMgT3JpZ2luYWwgdmFycyBvYmplY3QgdGhhdCBjb250YWlucyB0aGUgZGF0YSBmb3IgcGFyc2luZy5cblx0XHQgKiBAcmV0dXJuIHtDU1NQcm9wVHdlZW59IFRoZSBmaXJzdCBDU1NQcm9wVHdlZW4gaW4gdGhlIGxpbmtlZCBsaXN0IHdoaWNoIGluY2x1ZGVzIHRoZSBuZXcgb25lKHMpIGFkZGVkIGJ5IHRoZSBwYXJzZSgpIGNhbGwuXG5cdFx0ICovXG5cdFx0cC5wYXJzZSA9IGZ1bmN0aW9uKHQsIGUsIHAsIGNzc3AsIHB0LCBwbHVnaW4sIHZhcnMpIHtcblx0XHRcdHJldHVybiB0aGlzLnBhcnNlQ29tcGxleCh0LnN0eWxlLCB0aGlzLmZvcm1hdChfZ2V0U3R5bGUodCwgdGhpcy5wLCBfY3MsIGZhbHNlLCB0aGlzLmRmbHQpKSwgdGhpcy5mb3JtYXQoZSksIHB0LCBwbHVnaW4pO1xuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiBSZWdpc3RlcnMgYSBzcGVjaWFsIHByb3BlcnR5IHRoYXQgc2hvdWxkIGJlIGludGVyY2VwdGVkIGZyb20gYW55IFwiY3NzXCIgb2JqZWN0cyBkZWZpbmVkIGluIHR3ZWVucy4gVGhpcyBhbGxvd3MgeW91IHRvIGhhbmRsZSB0aGVtIGhvd2V2ZXIgeW91IHdhbnQgd2l0aG91dCBDU1NQbHVnaW4gZG9pbmcgaXQgZm9yIHlvdS4gVGhlIDJuZCBwYXJhbWV0ZXIgc2hvdWxkIGJlIGEgZnVuY3Rpb24gdGhhdCBhY2NlcHRzIDMgcGFyYW1ldGVyczpcblx0XHQgKiAgMSkgVGFyZ2V0IG9iamVjdCB3aG9zZSBwcm9wZXJ0eSBzaG91bGQgYmUgdHdlZW5lZCAodHlwaWNhbGx5IGEgRE9NIGVsZW1lbnQpXG5cdFx0ICogIDIpIFRoZSBlbmQvZGVzdGluYXRpb24gdmFsdWUgKGNvdWxkIGJlIGEgc3RyaW5nLCBudW1iZXIsIG9iamVjdCwgb3Igd2hhdGV2ZXIgeW91IHdhbnQpXG5cdFx0ICogIDMpIFRoZSB0d2VlbiBpbnN0YW5jZSAoeW91IHByb2JhYmx5IGRvbid0IG5lZWQgdG8gd29ycnkgYWJvdXQgdGhpcywgYnV0IGl0IGNhbiBiZSB1c2VmdWwgZm9yIGxvb2tpbmcgdXAgaW5mb3JtYXRpb24gbGlrZSB0aGUgZHVyYXRpb24pXG5cdFx0ICpcblx0XHQgKiBUaGVuLCB5b3VyIGZ1bmN0aW9uIHNob3VsZCByZXR1cm4gYSBmdW5jdGlvbiB3aGljaCB3aWxsIGJlIGNhbGxlZCBlYWNoIHRpbWUgdGhlIHR3ZWVuIGdldHMgcmVuZGVyZWQsIHBhc3NpbmcgYSBudW1lcmljIFwicmF0aW9cIiBwYXJhbWV0ZXIgdG8geW91ciBmdW5jdGlvbiB0aGF0IGluZGljYXRlcyB0aGUgY2hhbmdlIGZhY3RvciAodXN1YWxseSBiZXR3ZWVuIDAgYW5kIDEpLiBGb3IgZXhhbXBsZTpcblx0XHQgKlxuXHRcdCAqIENTU1BsdWdpbi5yZWdpc3RlclNwZWNpYWxQcm9wKFwibXlDdXN0b21Qcm9wXCIsIGZ1bmN0aW9uKHRhcmdldCwgdmFsdWUsIHR3ZWVuKSB7XG5cdFx0ICogICAgICB2YXIgc3RhcnQgPSB0YXJnZXQuc3R5bGUud2lkdGg7XG5cdFx0ICogICAgICByZXR1cm4gZnVuY3Rpb24ocmF0aW8pIHtcblx0XHQgKiAgICAgICAgICAgICAgdGFyZ2V0LnN0eWxlLndpZHRoID0gKHN0YXJ0ICsgdmFsdWUgKiByYXRpbykgKyBcInB4XCI7XG5cdFx0ICogICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2V0IHdpZHRoIHRvIFwiICsgdGFyZ2V0LnN0eWxlLndpZHRoKTtcblx0XHQgKiAgICAgICAgICB9XG5cdFx0ICogfSwgMCk7XG5cdFx0ICpcblx0XHQgKiBUaGVuLCB3aGVuIEkgZG8gdGhpcyB0d2VlbiwgaXQgd2lsbCB0cmlnZ2VyIG15IHNwZWNpYWwgcHJvcGVydHk6XG5cdFx0ICpcblx0XHQgKiBUd2VlbkxpdGUudG8oZWxlbWVudCwgMSwge2Nzczp7bXlDdXN0b21Qcm9wOjEwMH19KTtcblx0XHQgKlxuXHRcdCAqIEluIHRoZSBleGFtcGxlLCBvZiBjb3Vyc2UsIHdlJ3JlIGp1c3QgY2hhbmdpbmcgdGhlIHdpZHRoLCBidXQgeW91IGNhbiBkbyBhbnl0aGluZyB5b3Ugd2FudC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7IXN0cmluZ30gbmFtZSBQcm9wZXJ0eSBuYW1lIChvciBjb21tYS1kZWxpbWl0ZWQgbGlzdCBvZiBwcm9wZXJ0eSBuYW1lcykgdGhhdCBzaG91bGQgYmUgaW50ZXJjZXB0ZWQgYW5kIGhhbmRsZWQgYnkgeW91ciBmdW5jdGlvbi4gRm9yIGV4YW1wbGUsIGlmIEkgZGVmaW5lIFwibXlDdXN0b21Qcm9wXCIsIHRoZW4gaXQgd291bGQgaGFuZGxlIHRoYXQgcG9ydGlvbiBvZiB0aGUgZm9sbG93aW5nIHR3ZWVuOiBUd2VlbkxpdGUudG8oZWxlbWVudCwgMSwge2Nzczp7bXlDdXN0b21Qcm9wOjEwMH19KVxuXHRcdCAqIEBwYXJhbSB7IWZ1bmN0aW9uKE9iamVjdCwgT2JqZWN0LCBPYmplY3QsIHN0cmluZyk6ZnVuY3Rpb24obnVtYmVyKX0gb25Jbml0VHdlZW4gVGhlIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2hlbiBhIHR3ZWVuIG9mIHRoaXMgc3BlY2lhbCBwcm9wZXJ0eSBpcyBwZXJmb3JtZWQuIFRoZSBmdW5jdGlvbiB3aWxsIHJlY2VpdmUgNCBwYXJhbWV0ZXJzOiAxKSBUYXJnZXQgb2JqZWN0IHRoYXQgc2hvdWxkIGJlIHR3ZWVuZWQsIDIpIFZhbHVlIHRoYXQgd2FzIHBhc3NlZCB0byB0aGUgdHdlZW4sIDMpIFRoZSB0d2VlbiBpbnN0YW5jZSBpdHNlbGYgKHJhcmVseSB1c2VkKSwgYW5kIDQpIFRoZSBwcm9wZXJ0eSBuYW1lIHRoYXQncyBiZWluZyB0d2VlbmVkLiBZb3VyIGZ1bmN0aW9uIHNob3VsZCByZXR1cm4gYSBmdW5jdGlvbiB0aGF0IHNob3VsZCBiZSBjYWxsZWQgb24gZXZlcnkgdXBkYXRlIG9mIHRoZSB0d2Vlbi4gVGhhdCBmdW5jdGlvbiB3aWxsIHJlY2VpdmUgYSBzaW5nbGUgcGFyYW1ldGVyIHRoYXQgaXMgYSBcImNoYW5nZSBmYWN0b3JcIiB2YWx1ZSAodHlwaWNhbGx5IGJldHdlZW4gMCBhbmQgMSkgaW5kaWNhdGluZyB0aGUgYW1vdW50IG9mIGNoYW5nZSBhcyBhIHJhdGlvLiBZb3UgY2FuIHVzZSB0aGlzIHRvIGRldGVybWluZSBob3cgdG8gc2V0IHRoZSB2YWx1ZXMgYXBwcm9wcmlhdGVseSBpbiB5b3VyIGZ1bmN0aW9uLlxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyPX0gcHJpb3JpdHkgUHJpb3JpdHkgdGhhdCBoZWxwcyB0aGUgZW5naW5lIGRldGVybWluZSB0aGUgb3JkZXIgaW4gd2hpY2ggdG8gc2V0IHRoZSBwcm9wZXJ0aWVzIChkZWZhdWx0OiAwKS4gSGlnaGVyIHByaW9yaXR5IHByb3BlcnRpZXMgd2lsbCBiZSB1cGRhdGVkIGJlZm9yZSBsb3dlciBwcmlvcml0eSBvbmVzLlxuXHRcdCAqL1xuXHRcdENTU1BsdWdpbi5yZWdpc3RlclNwZWNpYWxQcm9wID0gZnVuY3Rpb24obmFtZSwgb25Jbml0VHdlZW4sIHByaW9yaXR5KSB7XG5cdFx0XHRfcmVnaXN0ZXJDb21wbGV4U3BlY2lhbFByb3AobmFtZSwge3BhcnNlcjpmdW5jdGlvbih0LCBlLCBwLCBjc3NwLCBwdCwgcGx1Z2luLCB2YXJzKSB7XG5cdFx0XHRcdHZhciBydiA9IG5ldyBDU1NQcm9wVHdlZW4odCwgcCwgMCwgMCwgcHQsIDIsIHAsIGZhbHNlLCBwcmlvcml0eSk7XG5cdFx0XHRcdHJ2LnBsdWdpbiA9IHBsdWdpbjtcblx0XHRcdFx0cnYuc2V0UmF0aW8gPSBvbkluaXRUd2Vlbih0LCBlLCBjc3NwLl90d2VlbiwgcCk7XG5cdFx0XHRcdHJldHVybiBydjtcblx0XHRcdH0sIHByaW9yaXR5OnByaW9yaXR5fSk7XG5cdFx0fTtcblxuXG5cblxuXG5cblx0XHQvL3RyYW5zZm9ybS1yZWxhdGVkIG1ldGhvZHMgYW5kIHByb3BlcnRpZXNcblx0XHRDU1NQbHVnaW4udXNlU1ZHVHJhbnNmb3JtQXR0ciA9IF9pc1NhZmFyaTsgLy9TYWZhcmkgaGFzIHNvbWUgcmVuZGVyaW5nIGJ1Z3Mgd2hlbiBhcHBseWluZyBDU1MgdHJhbnNmb3JtcyB0byBTVkcgZWxlbWVudHMsIHNvIGRlZmF1bHQgdG8gdXNpbmcgdGhlIFwidHJhbnNmb3JtXCIgYXR0cmlidXRlIGluc3RlYWQuXG5cdFx0dmFyIF90cmFuc2Zvcm1Qcm9wcyA9IChcInNjYWxlWCxzY2FsZVksc2NhbGVaLHgseSx6LHNrZXdYLHNrZXdZLHJvdGF0aW9uLHJvdGF0aW9uWCxyb3RhdGlvblkscGVyc3BlY3RpdmUseFBlcmNlbnQseVBlcmNlbnRcIikuc3BsaXQoXCIsXCIpLFxuXHRcdFx0X3RyYW5zZm9ybVByb3AgPSBfY2hlY2tQcm9wUHJlZml4KFwidHJhbnNmb3JtXCIpLCAvL3RoZSBKYXZhc2NyaXB0IChjYW1lbENhc2UpIHRyYW5zZm9ybSBwcm9wZXJ0eSwgbGlrZSBtc1RyYW5zZm9ybSwgV2Via2l0VHJhbnNmb3JtLCBNb3pUcmFuc2Zvcm0sIG9yIE9UcmFuc2Zvcm0uXG5cdFx0XHRfdHJhbnNmb3JtUHJvcENTUyA9IF9wcmVmaXhDU1MgKyBcInRyYW5zZm9ybVwiLFxuXHRcdFx0X3RyYW5zZm9ybU9yaWdpblByb3AgPSBfY2hlY2tQcm9wUHJlZml4KFwidHJhbnNmb3JtT3JpZ2luXCIpLFxuXHRcdFx0X3N1cHBvcnRzM0QgPSAoX2NoZWNrUHJvcFByZWZpeChcInBlcnNwZWN0aXZlXCIpICE9PSBudWxsKSxcblx0XHRcdFRyYW5zZm9ybSA9IF9pbnRlcm5hbHMuVHJhbnNmb3JtID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHRoaXMucGVyc3BlY3RpdmUgPSBwYXJzZUZsb2F0KENTU1BsdWdpbi5kZWZhdWx0VHJhbnNmb3JtUGVyc3BlY3RpdmUpIHx8IDA7XG5cdFx0XHRcdHRoaXMuZm9yY2UzRCA9IChDU1NQbHVnaW4uZGVmYXVsdEZvcmNlM0QgPT09IGZhbHNlIHx8ICFfc3VwcG9ydHMzRCkgPyBmYWxzZSA6IENTU1BsdWdpbi5kZWZhdWx0Rm9yY2UzRCB8fCBcImF1dG9cIjtcblx0XHRcdH0sXG5cdFx0XHRfU1ZHRWxlbWVudCA9IHdpbmRvdy5TVkdFbGVtZW50LFxuXHRcdFx0X3VzZVNWR1RyYW5zZm9ybUF0dHIsXG5cdFx0XHQvL1NvbWUgYnJvd3NlcnMgKGxpa2UgRmlyZWZveCBhbmQgSUUpIGRvbid0IGhvbm9yIHRyYW5zZm9ybS1vcmlnaW4gcHJvcGVybHkgaW4gU1ZHIGVsZW1lbnRzLCBzbyB3ZSBuZWVkIHRvIG1hbnVhbGx5IGFkanVzdCB0aGUgbWF0cml4IGFjY29yZGluZ2x5LiBXZSBmZWF0dXJlIGRldGVjdCBoZXJlIHJhdGhlciB0aGFuIGFsd2F5cyBkb2luZyB0aGUgY29udmVyc2lvbiBmb3IgY2VydGFpbiBicm93c2VycyBiZWNhdXNlIHRoZXkgbWF5IGZpeCB0aGUgcHJvYmxlbSBhdCBzb21lIHBvaW50IGluIHRoZSBmdXR1cmUuXG5cblx0XHRcdF9jcmVhdGVTVkcgPSBmdW5jdGlvbih0eXBlLCBjb250YWluZXIsIGF0dHJpYnV0ZXMpIHtcblx0XHRcdFx0dmFyIGVsZW1lbnQgPSBfZG9jLmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIHR5cGUpLFxuXHRcdFx0XHRcdHJlZyA9IC8oW2Etel0pKFtBLVpdKS9nLFxuXHRcdFx0XHRcdHA7XG5cdFx0XHRcdGZvciAocCBpbiBhdHRyaWJ1dGVzKSB7XG5cdFx0XHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGVOUyhudWxsLCBwLnJlcGxhY2UocmVnLCBcIiQxLSQyXCIpLnRvTG93ZXJDYXNlKCksIGF0dHJpYnV0ZXNbcF0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50KTtcblx0XHRcdFx0cmV0dXJuIGVsZW1lbnQ7XG5cdFx0XHR9LFxuXHRcdFx0X2RvY0VsZW1lbnQgPSBfZG9jLmRvY3VtZW50RWxlbWVudCxcblx0XHRcdF9mb3JjZVNWR1RyYW5zZm9ybUF0dHIgPSAoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdC8vSUUgYW5kIEFuZHJvaWQgc3RvY2sgZG9uJ3Qgc3VwcG9ydCBDU1MgdHJhbnNmb3JtcyBvbiBTVkcgZWxlbWVudHMsIHNvIHdlIG11c3Qgd3JpdGUgdGhlbSB0byB0aGUgXCJ0cmFuc2Zvcm1cIiBhdHRyaWJ1dGUuIFdlIHBvcHVsYXRlIHRoaXMgdmFyaWFibGUgaW4gdGhlIF9wYXJzZVRyYW5zZm9ybSgpIG1ldGhvZCwgYW5kIG9ubHkgaWYvd2hlbiB3ZSBjb21lIGFjcm9zcyBhbiBTVkcgZWxlbWVudFxuXHRcdFx0XHR2YXIgZm9yY2UgPSBfaWVWZXJzIHx8ICgvQW5kcm9pZC9pLnRlc3QoX2FnZW50KSAmJiAhd2luZG93LmNocm9tZSksXG5cdFx0XHRcdFx0c3ZnLCByZWN0LCB3aWR0aDtcblx0XHRcdFx0aWYgKF9kb2MuY3JlYXRlRWxlbWVudE5TICYmICFmb3JjZSkgeyAvL0lFOCBhbmQgZWFybGllciBkb2Vzbid0IHN1cHBvcnQgU1ZHIGFueXdheVxuXHRcdFx0XHRcdHN2ZyA9IF9jcmVhdGVTVkcoXCJzdmdcIiwgX2RvY0VsZW1lbnQpO1xuXHRcdFx0XHRcdHJlY3QgPSBfY3JlYXRlU1ZHKFwicmVjdFwiLCBzdmcsIHt3aWR0aDoxMDAsIGhlaWdodDo1MCwgeDoxMDB9KTtcblx0XHRcdFx0XHR3aWR0aCA9IHJlY3QuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG5cdFx0XHRcdFx0cmVjdC5zdHlsZVtfdHJhbnNmb3JtT3JpZ2luUHJvcF0gPSBcIjUwJSA1MCVcIjtcblx0XHRcdFx0XHRyZWN0LnN0eWxlW190cmFuc2Zvcm1Qcm9wXSA9IFwic2NhbGVYKDAuNSlcIjtcblx0XHRcdFx0XHRmb3JjZSA9ICh3aWR0aCA9PT0gcmVjdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCAmJiAhKF9pc0ZpcmVmb3ggJiYgX3N1cHBvcnRzM0QpKTsgLy9ub3RlOiBGaXJlZm94IGZhaWxzIHRoZSB0ZXN0IGV2ZW4gdGhvdWdoIGl0IGRvZXMgc3VwcG9ydCBDU1MgdHJhbnNmb3JtcyBpbiAzRC4gU2luY2Ugd2UgY2FuJ3QgcHVzaCAzRCBzdHVmZiBpbnRvIHRoZSB0cmFuc2Zvcm0gYXR0cmlidXRlLCB3ZSBmb3JjZSBGaXJlZm94IHRvIHBhc3MgdGhlIHRlc3QgaGVyZSAoYXMgbG9uZyBhcyBpdCBkb2VzIHRydWx5IHN1cHBvcnQgM0QpLlxuXHRcdFx0XHRcdF9kb2NFbGVtZW50LnJlbW92ZUNoaWxkKHN2Zyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGZvcmNlO1xuXHRcdFx0fSkoKSxcblx0XHRcdF9wYXJzZVNWR09yaWdpbiA9IGZ1bmN0aW9uKGUsIGxvY2FsLCBkZWNvcmF0ZWUsIGFic29sdXRlKSB7XG5cdFx0XHRcdHZhciBiYm94LCB2O1xuXHRcdFx0XHRpZiAoIWFic29sdXRlIHx8ICEodiA9IGFic29sdXRlLnNwbGl0KFwiIFwiKSkubGVuZ3RoKSB7XG5cdFx0XHRcdFx0YmJveCA9IGUuZ2V0QkJveCgpO1xuXHRcdFx0XHRcdGxvY2FsID0gX3BhcnNlUG9zaXRpb24obG9jYWwpLnNwbGl0KFwiIFwiKTtcblx0XHRcdFx0XHR2ID0gWyhsb2NhbFswXS5pbmRleE9mKFwiJVwiKSAhPT0gLTEgPyBwYXJzZUZsb2F0KGxvY2FsWzBdKSAvIDEwMCAqIGJib3gud2lkdGggOiBwYXJzZUZsb2F0KGxvY2FsWzBdKSkgKyBiYm94LngsXG5cdFx0XHRcdFx0XHQgKGxvY2FsWzFdLmluZGV4T2YoXCIlXCIpICE9PSAtMSA/IHBhcnNlRmxvYXQobG9jYWxbMV0pIC8gMTAwICogYmJveC5oZWlnaHQgOiBwYXJzZUZsb2F0KGxvY2FsWzFdKSkgKyBiYm94LnldO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGRlY29yYXRlZS54T3JpZ2luID0gcGFyc2VGbG9hdCh2WzBdKTtcblx0XHRcdFx0ZGVjb3JhdGVlLnlPcmlnaW4gPSBwYXJzZUZsb2F0KHZbMV0pO1xuXHRcdFx0XHRlLnNldEF0dHJpYnV0ZShcImRhdGEtc3ZnLW9yaWdpblwiLCB2LmpvaW4oXCIgXCIpKTtcblx0XHRcdH0sXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogUGFyc2VzIHRoZSB0cmFuc2Zvcm0gdmFsdWVzIGZvciBhbiBlbGVtZW50LCByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggeCwgeSwgeiwgc2NhbGVYLCBzY2FsZVksIHNjYWxlWiwgcm90YXRpb24sIHJvdGF0aW9uWCwgcm90YXRpb25ZLCBza2V3WCwgYW5kIHNrZXdZIHByb3BlcnRpZXMuIE5vdGU6IGJ5IGRlZmF1bHQgKGZvciBwZXJmb3JtYW5jZSByZWFzb25zKSwgYWxsIHNrZXdpbmcgaXMgY29tYmluZWQgaW50byBza2V3WCBhbmQgcm90YXRpb24gYnV0IHNrZXdZIHN0aWxsIGhhcyBhIHBsYWNlIGluIHRoZSB0cmFuc2Zvcm0gb2JqZWN0IHNvIHRoYXQgd2UgY2FuIHJlY29yZCBob3cgbXVjaCBvZiB0aGUgc2tldyBpcyBhdHRyaWJ1dGVkIHRvIHNrZXdYIHZzIHNrZXdZLiBSZW1lbWJlciwgYSBza2V3WSBvZiAxMCBsb29rcyB0aGUgc2FtZSBhcyBhIHJvdGF0aW9uIG9mIDEwIGFuZCBza2V3WCBvZiAtMTAuXG5cdFx0XHQgKiBAcGFyYW0geyFPYmplY3R9IHQgdGFyZ2V0IGVsZW1lbnRcblx0XHRcdCAqIEBwYXJhbSB7T2JqZWN0PX0gY3MgY29tcHV0ZWQgc3R5bGUgb2JqZWN0IChvcHRpb25hbClcblx0XHRcdCAqIEBwYXJhbSB7Ym9vbGVhbj19IHJlYyBpZiB0cnVlLCB0aGUgdHJhbnNmb3JtIHZhbHVlcyB3aWxsIGJlIHJlY29yZGVkIHRvIHRoZSB0YXJnZXQgZWxlbWVudCdzIF9nc1RyYW5zZm9ybSBvYmplY3QsIGxpa2UgdGFyZ2V0Ll9nc1RyYW5zZm9ybSA9IHt4OjAsIHk6MCwgejowLCBzY2FsZVg6MS4uLn1cblx0XHRcdCAqIEBwYXJhbSB7Ym9vbGVhbj19IHBhcnNlIGlmIHRydWUsIHdlJ2xsIGlnbm9yZSBhbnkgX2dzVHJhbnNmb3JtIHZhbHVlcyB0aGF0IGFscmVhZHkgZXhpc3Qgb24gdGhlIGVsZW1lbnQsIGFuZCBmb3JjZSBhIHJlcGFyc2luZyBvZiB0aGUgY3NzIChjYWxjdWxhdGVkIHN0eWxlKVxuXHRcdFx0ICogQHJldHVybiB7b2JqZWN0fSBvYmplY3QgY29udGFpbmluZyBhbGwgb2YgdGhlIHRyYW5zZm9ybSBwcm9wZXJ0aWVzL3ZhbHVlcyBsaWtlIHt4OjAsIHk6MCwgejowLCBzY2FsZVg6MS4uLn1cblx0XHRcdCAqL1xuXHRcdFx0X2dldFRyYW5zZm9ybSA9IF9pbnRlcm5hbHMuZ2V0VHJhbnNmb3JtID0gZnVuY3Rpb24odCwgY3MsIHJlYywgcGFyc2UpIHtcblx0XHRcdFx0aWYgKHQuX2dzVHJhbnNmb3JtICYmIHJlYyAmJiAhcGFyc2UpIHtcblx0XHRcdFx0XHRyZXR1cm4gdC5fZ3NUcmFuc2Zvcm07IC8vaWYgdGhlIGVsZW1lbnQgYWxyZWFkeSBoYXMgYSBfZ3NUcmFuc2Zvcm0sIHVzZSB0aGF0LiBOb3RlOiBzb21lIGJyb3dzZXJzIGRvbid0IGFjY3VyYXRlbHkgcmV0dXJuIHRoZSBjYWxjdWxhdGVkIHN0eWxlIGZvciB0aGUgdHJhbnNmb3JtIChwYXJ0aWN1bGFybHkgZm9yIFNWRyksIHNvIGl0J3MgYWxtb3N0IGFsd2F5cyBzYWZlc3QgdG8ganVzdCB1c2UgdGhlIHZhbHVlcyB3ZSd2ZSBhbHJlYWR5IGFwcGxpZWQgcmF0aGVyIHRoYW4gcmUtcGFyc2luZyB0aGluZ3MuXG5cdFx0XHRcdH1cblx0XHRcdFx0dmFyIHRtID0gcmVjID8gdC5fZ3NUcmFuc2Zvcm0gfHwgbmV3IFRyYW5zZm9ybSgpIDogbmV3IFRyYW5zZm9ybSgpLFxuXHRcdFx0XHRcdGludlggPSAodG0uc2NhbGVYIDwgMCksIC8vaW4gb3JkZXIgdG8gaW50ZXJwcmV0IHRoaW5ncyBwcm9wZXJseSwgd2UgbmVlZCB0byBrbm93IGlmIHRoZSB1c2VyIGFwcGxpZWQgYSBuZWdhdGl2ZSBzY2FsZVggcHJldmlvdXNseSBzbyB0aGF0IHdlIGNhbiBhZGp1c3QgdGhlIHJvdGF0aW9uIGFuZCBza2V3WCBhY2NvcmRpbmdseS4gT3RoZXJ3aXNlLCBpZiB3ZSBhbHdheXMgaW50ZXJwcmV0IGEgZmxpcHBlZCBtYXRyaXggYXMgYWZmZWN0aW5nIHNjYWxlWSBhbmQgdGhlIHVzZXIgb25seSB3YW50cyB0byB0d2VlbiB0aGUgc2NhbGVYIG9uIG11bHRpcGxlIHNlcXVlbnRpYWwgdHdlZW5zLCBpdCB3b3VsZCBrZWVwIHRoZSBuZWdhdGl2ZSBzY2FsZVkgd2l0aG91dCB0aGF0IGJlaW5nIHRoZSB1c2VyJ3MgaW50ZW50LlxuXHRcdFx0XHRcdG1pbiA9IDAuMDAwMDIsXG5cdFx0XHRcdFx0cm5kID0gMTAwMDAwLFxuXHRcdFx0XHRcdHpPcmlnaW4gPSBfc3VwcG9ydHMzRCA/IHBhcnNlRmxvYXQoX2dldFN0eWxlKHQsIF90cmFuc2Zvcm1PcmlnaW5Qcm9wLCBjcywgZmFsc2UsIFwiMCAwIDBcIikuc3BsaXQoXCIgXCIpWzJdKSB8fCB0bS56T3JpZ2luICB8fCAwIDogMCxcblx0XHRcdFx0XHRkZWZhdWx0VHJhbnNmb3JtUGVyc3BlY3RpdmUgPSBwYXJzZUZsb2F0KENTU1BsdWdpbi5kZWZhdWx0VHJhbnNmb3JtUGVyc3BlY3RpdmUpIHx8IDAsXG5cdFx0XHRcdFx0aXNEZWZhdWx0LCBzLCBtLCBpLCBuLCBkZWMsIHNjYWxlWCwgc2NhbGVZLCByb3RhdGlvbiwgc2tld1g7XG5cdFx0XHRcdGlmIChfdHJhbnNmb3JtUHJvcCkge1xuXHRcdFx0XHRcdHMgPSBfZ2V0U3R5bGUodCwgX3RyYW5zZm9ybVByb3BDU1MsIGNzLCB0cnVlKTtcblx0XHRcdFx0fSBlbHNlIGlmICh0LmN1cnJlbnRTdHlsZSkge1xuXHRcdFx0XHRcdC8vZm9yIG9sZGVyIHZlcnNpb25zIG9mIElFLCB3ZSBuZWVkIHRvIGludGVycHJldCB0aGUgZmlsdGVyIHBvcnRpb24gdGhhdCBpcyBpbiB0aGUgZm9ybWF0OiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuTWF0cml4KE0xMT02LjEyMzIzMzk5NTczNjc2NmUtMTcsIE0xMj0tMSwgTTIxPTEsIE0yMj02LjEyMzIzMzk5NTczNjc2NmUtMTcsIHNpemluZ01ldGhvZD0nYXV0byBleHBhbmQnKSBOb3RpY2UgdGhhdCB3ZSBuZWVkIHRvIHN3YXAgYiBhbmQgYyBjb21wYXJlZCB0byBhIG5vcm1hbCBtYXRyaXguXG5cdFx0XHRcdFx0cyA9IHQuY3VycmVudFN0eWxlLmZpbHRlci5tYXRjaChfaWVHZXRNYXRyaXhFeHApO1xuXHRcdFx0XHRcdHMgPSAocyAmJiBzLmxlbmd0aCA9PT0gNCkgPyBbc1swXS5zdWJzdHIoNCksIE51bWJlcihzWzJdLnN1YnN0cig0KSksIE51bWJlcihzWzFdLnN1YnN0cig0KSksIHNbM10uc3Vic3RyKDQpLCAodG0ueCB8fCAwKSwgKHRtLnkgfHwgMCldLmpvaW4oXCIsXCIpIDogXCJcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpc0RlZmF1bHQgPSAoIXMgfHwgcyA9PT0gXCJub25lXCIgfHwgcyA9PT0gXCJtYXRyaXgoMSwgMCwgMCwgMSwgMCwgMClcIik7XG5cdFx0XHRcdHRtLnN2ZyA9ICEhKF9TVkdFbGVtZW50ICYmIHR5cGVvZih0LmdldEJCb3gpID09PSBcImZ1bmN0aW9uXCIgJiYgdC5nZXRDVE0gJiYgKCF0LnBhcmVudE5vZGUgfHwgKHQucGFyZW50Tm9kZS5nZXRCQm94ICYmIHQucGFyZW50Tm9kZS5nZXRDVE0pKSk7IC8vZG9uJ3QganVzdCByZWx5IG9uIFwiaW5zdGFuY2VvZiBfU1ZHRWxlbWVudFwiIGJlY2F1c2UgaWYgdGhlIFNWRyBpcyBlbWJlZGRlZCB2aWEgYW4gb2JqZWN0IHRhZywgaXQgd29uJ3Qgd29yayAoU1ZHRWxlbWVudCBpcyBtYXBwZWQgdG8gYSBkaWZmZXJlbnQgb2JqZWN0KVxuXHRcdFx0XHRpZiAodG0uc3ZnKSB7XG5cdFx0XHRcdFx0aWYgKGlzRGVmYXVsdCAmJiAodC5zdHlsZVtfdHJhbnNmb3JtUHJvcF0gKyBcIlwiKS5pbmRleE9mKFwibWF0cml4XCIpICE9PSAtMSkgeyAvL3NvbWUgYnJvd3NlcnMgKGxpa2UgQ2hyb21lIDQwKSBkb24ndCBjb3JyZWN0bHkgcmVwb3J0IHRyYW5zZm9ybXMgdGhhdCBhcmUgYXBwbGllZCBpbmxpbmUgb24gYW4gU1ZHIGVsZW1lbnQgKHRoZXkgZG9uJ3QgZ2V0IGluY2x1ZGVkIGluIHRoZSBjb21wdXRlZCBzdHlsZSksIHNvIHdlIGRvdWJsZS1jaGVjayBoZXJlIGFuZCBhY2NlcHQgbWF0cml4IHZhbHVlc1xuXHRcdFx0XHRcdFx0cyA9IHQuc3R5bGVbX3RyYW5zZm9ybVByb3BdO1xuXHRcdFx0XHRcdFx0aXNEZWZhdWx0ID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF9wYXJzZVNWR09yaWdpbih0LCBfZ2V0U3R5bGUodCwgX3RyYW5zZm9ybU9yaWdpblByb3AsIF9jcywgZmFsc2UsIFwiNTAlIDUwJVwiKSArIFwiXCIsIHRtLCB0LmdldEF0dHJpYnV0ZShcImRhdGEtc3ZnLW9yaWdpblwiKSk7XG5cdFx0XHRcdFx0X3VzZVNWR1RyYW5zZm9ybUF0dHIgPSBDU1NQbHVnaW4udXNlU1ZHVHJhbnNmb3JtQXR0ciB8fCBfZm9yY2VTVkdUcmFuc2Zvcm1BdHRyO1xuXHRcdFx0XHRcdG0gPSB0LmdldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiKTtcblx0XHRcdFx0XHRpZiAoaXNEZWZhdWx0ICYmIG0gJiYgbS5pbmRleE9mKFwibWF0cml4XCIpICE9PSAtMSkgeyAvL2p1c3QgaW4gY2FzZSB0aGVyZSdzIGEgXCJ0cmFuc2Zvcm1cIiB2YWx1ZSBzcGVjaWZpZWQgYXMgYW4gYXR0cmlidXRlIGluc3RlYWQgb2YgQ1NTIHN0eWxlLiBPbmx5IGFjY2VwdCBhIG1hdHJpeCwgdGhvdWdoLlxuXHRcdFx0XHRcdFx0cyA9IG07XG5cdFx0XHRcdFx0XHRpc0RlZmF1bHQgPSAwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIWlzRGVmYXVsdCkge1xuXHRcdFx0XHRcdC8vc3BsaXQgdGhlIG1hdHJpeCB2YWx1ZXMgb3V0IGludG8gYW4gYXJyYXkgKG0gZm9yIG1hdHJpeClcblx0XHRcdFx0XHRtID0gKHMgfHwgXCJcIikubWF0Y2goLyg/OlxcLXxcXGIpW1xcZFxcLVxcLmVdK1xcYi9naSkgfHwgW107XG5cdFx0XHRcdFx0aSA9IG0ubGVuZ3RoO1xuXHRcdFx0XHRcdHdoaWxlICgtLWkgPiAtMSkge1xuXHRcdFx0XHRcdFx0biA9IE51bWJlcihtW2ldKTtcblx0XHRcdFx0XHRcdG1baV0gPSAoZGVjID0gbiAtIChuIHw9IDApKSA/ICgoZGVjICogcm5kICsgKGRlYyA8IDAgPyAtMC41IDogMC41KSkgfCAwKSAvIHJuZCArIG4gOiBuOyAvL2NvbnZlcnQgc3RyaW5ncyB0byBOdW1iZXJzIGFuZCByb3VuZCB0byA1IGRlY2ltYWwgcGxhY2VzIHRvIGF2b2lkIGlzc3VlcyB3aXRoIHRpbnkgbnVtYmVycy4gUm91Z2hseSAyMHggZmFzdGVyIHRoYW4gTnVtYmVyLnRvRml4ZWQoKS4gV2UgYWxzbyBtdXN0IG1ha2Ugc3VyZSB0byByb3VuZCBiZWZvcmUgZGl2aWRpbmcgc28gdGhhdCB2YWx1ZXMgbGlrZSAwLjk5OTk5OTk5OTkgYmVjb21lIDEgdG8gYXZvaWQgZ2xpdGNoZXMgaW4gYnJvd3NlciByZW5kZXJpbmcgYW5kIGludGVycHJldGF0aW9uIG9mIGZsaXBwZWQvcm90YXRlZCAzRCBtYXRyaWNlcy4gQW5kIGRvbid0IGp1c3QgbXVsdGlwbHkgdGhlIG51bWJlciBieSBybmQsIGZsb29yIGl0LCBhbmQgdGhlbiBkaXZpZGUgYnkgcm5kIGJlY2F1c2UgdGhlIGJpdHdpc2Ugb3BlcmF0aW9ucyBtYXggb3V0IGF0IGEgMzItYml0IHNpZ25lZCBpbnRlZ2VyLCB0aHVzIGl0IGNvdWxkIGdldCBjbGlwcGVkIGF0IGEgcmVsYXRpdmVseSBsb3cgdmFsdWUgKGxpa2UgMjIsMDAwLjAwMDAwIGZvciBleGFtcGxlKS5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKG0ubGVuZ3RoID09PSAxNikge1xuXHRcdFx0XHRcdFx0Ly93ZSdsbCBvbmx5IGxvb2sgYXQgdGhlc2UgcG9zaXRpb24tcmVsYXRlZCA2IHZhcmlhYmxlcyBmaXJzdCBiZWNhdXNlIGlmIHgveS96IGFsbCBtYXRjaCwgaXQncyByZWxhdGl2ZWx5IHNhZmUgdG8gYXNzdW1lIHdlIGRvbid0IG5lZWQgdG8gcmUtcGFyc2UgZXZlcnl0aGluZyB3aGljaCByaXNrcyBsb3NpbmcgaW1wb3J0YW50IHJvdGF0aW9uYWwgaW5mb3JtYXRpb24gKGxpa2Ugcm90YXRpb25YOjE4MCBwbHVzIHJvdGF0aW9uWToxODAgd291bGQgbG9vayB0aGUgc2FtZSBhcyByb3RhdGlvbjoxODAgLSB0aGVyZSdzIG5vIHdheSB0byBrbm93IGZvciBzdXJlIHdoaWNoIGRpcmVjdGlvbiB3YXMgdGFrZW4gYmFzZWQgc29sZWx5IG9uIHRoZSBtYXRyaXgzZCgpIHZhbHVlcylcblx0XHRcdFx0XHRcdHZhciBhMTEgPSBtWzBdLCBhMjEgPSBtWzFdLCBhMzEgPSBtWzJdLCBhNDEgPSBtWzNdLFxuXHRcdFx0XHRcdFx0XHRhMTIgPSBtWzRdLCBhMjIgPSBtWzVdLCBhMzIgPSBtWzZdLCBhNDIgPSBtWzddLFxuXHRcdFx0XHRcdFx0XHRhMTMgPSBtWzhdLCBhMjMgPSBtWzldLCBhMzMgPSBtWzEwXSxcblx0XHRcdFx0XHRcdFx0YTE0ID0gbVsxMl0sIGEyNCA9IG1bMTNdLCBhMzQgPSBtWzE0XSxcblx0XHRcdFx0XHRcdFx0YTQzID0gbVsxMV0sXG5cdFx0XHRcdFx0XHRcdGFuZ2xlID0gTWF0aC5hdGFuMihhMzIsIGEzMyksXG5cdFx0XHRcdFx0XHRcdHQxLCB0MiwgdDMsIHQ0LCBjb3MsIHNpbjtcblxuXHRcdFx0XHRcdFx0Ly93ZSBtYW51YWxseSBjb21wZW5zYXRlIGZvciBub24temVybyB6IGNvbXBvbmVudCBvZiB0cmFuc2Zvcm1PcmlnaW4gdG8gd29yayBhcm91bmQgYnVncyBpbiBTYWZhcmlcblx0XHRcdFx0XHRcdGlmICh0bS56T3JpZ2luKSB7XG5cdFx0XHRcdFx0XHRcdGEzNCA9IC10bS56T3JpZ2luO1xuXHRcdFx0XHRcdFx0XHRhMTQgPSBhMTMqYTM0LW1bMTJdO1xuXHRcdFx0XHRcdFx0XHRhMjQgPSBhMjMqYTM0LW1bMTNdO1xuXHRcdFx0XHRcdFx0XHRhMzQgPSBhMzMqYTM0K3RtLnpPcmlnaW4tbVsxNF07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR0bS5yb3RhdGlvblggPSBhbmdsZSAqIF9SQUQyREVHO1xuXHRcdFx0XHRcdFx0Ly9yb3RhdGlvblhcblx0XHRcdFx0XHRcdGlmIChhbmdsZSkge1xuXHRcdFx0XHRcdFx0XHRjb3MgPSBNYXRoLmNvcygtYW5nbGUpO1xuXHRcdFx0XHRcdFx0XHRzaW4gPSBNYXRoLnNpbigtYW5nbGUpO1xuXHRcdFx0XHRcdFx0XHR0MSA9IGExMipjb3MrYTEzKnNpbjtcblx0XHRcdFx0XHRcdFx0dDIgPSBhMjIqY29zK2EyMypzaW47XG5cdFx0XHRcdFx0XHRcdHQzID0gYTMyKmNvcythMzMqc2luO1xuXHRcdFx0XHRcdFx0XHRhMTMgPSBhMTIqLXNpbithMTMqY29zO1xuXHRcdFx0XHRcdFx0XHRhMjMgPSBhMjIqLXNpbithMjMqY29zO1xuXHRcdFx0XHRcdFx0XHRhMzMgPSBhMzIqLXNpbithMzMqY29zO1xuXHRcdFx0XHRcdFx0XHRhNDMgPSBhNDIqLXNpbithNDMqY29zO1xuXHRcdFx0XHRcdFx0XHRhMTIgPSB0MTtcblx0XHRcdFx0XHRcdFx0YTIyID0gdDI7XG5cdFx0XHRcdFx0XHRcdGEzMiA9IHQzO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Ly9yb3RhdGlvbllcblx0XHRcdFx0XHRcdGFuZ2xlID0gTWF0aC5hdGFuMihhMTMsIGEzMyk7XG5cdFx0XHRcdFx0XHR0bS5yb3RhdGlvblkgPSBhbmdsZSAqIF9SQUQyREVHO1xuXHRcdFx0XHRcdFx0aWYgKGFuZ2xlKSB7XG5cdFx0XHRcdFx0XHRcdGNvcyA9IE1hdGguY29zKC1hbmdsZSk7XG5cdFx0XHRcdFx0XHRcdHNpbiA9IE1hdGguc2luKC1hbmdsZSk7XG5cdFx0XHRcdFx0XHRcdHQxID0gYTExKmNvcy1hMTMqc2luO1xuXHRcdFx0XHRcdFx0XHR0MiA9IGEyMSpjb3MtYTIzKnNpbjtcblx0XHRcdFx0XHRcdFx0dDMgPSBhMzEqY29zLWEzMypzaW47XG5cdFx0XHRcdFx0XHRcdGEyMyA9IGEyMSpzaW4rYTIzKmNvcztcblx0XHRcdFx0XHRcdFx0YTMzID0gYTMxKnNpbithMzMqY29zO1xuXHRcdFx0XHRcdFx0XHRhNDMgPSBhNDEqc2luK2E0Mypjb3M7XG5cdFx0XHRcdFx0XHRcdGExMSA9IHQxO1xuXHRcdFx0XHRcdFx0XHRhMjEgPSB0Mjtcblx0XHRcdFx0XHRcdFx0YTMxID0gdDM7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvL3JvdGF0aW9uWlxuXHRcdFx0XHRcdFx0YW5nbGUgPSBNYXRoLmF0YW4yKGEyMSwgYTExKTtcblx0XHRcdFx0XHRcdHRtLnJvdGF0aW9uID0gYW5nbGUgKiBfUkFEMkRFRztcblx0XHRcdFx0XHRcdGlmIChhbmdsZSkge1xuXHRcdFx0XHRcdFx0XHRjb3MgPSBNYXRoLmNvcygtYW5nbGUpO1xuXHRcdFx0XHRcdFx0XHRzaW4gPSBNYXRoLnNpbigtYW5nbGUpO1xuXHRcdFx0XHRcdFx0XHRhMTEgPSBhMTEqY29zK2ExMipzaW47XG5cdFx0XHRcdFx0XHRcdHQyID0gYTIxKmNvcythMjIqc2luO1xuXHRcdFx0XHRcdFx0XHRhMjIgPSBhMjEqLXNpbithMjIqY29zO1xuXHRcdFx0XHRcdFx0XHRhMzIgPSBhMzEqLXNpbithMzIqY29zO1xuXHRcdFx0XHRcdFx0XHRhMjEgPSB0Mjtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0aWYgKHRtLnJvdGF0aW9uWCAmJiBNYXRoLmFicyh0bS5yb3RhdGlvblgpICsgTWF0aC5hYnModG0ucm90YXRpb24pID4gMzU5LjkpIHsgLy93aGVuIHJvdGF0aW9uWSBpcyBzZXQsIGl0IHdpbGwgb2Z0ZW4gYmUgcGFyc2VkIGFzIDE4MCBkZWdyZWVzIGRpZmZlcmVudCB0aGFuIGl0IHNob3VsZCBiZSwgYW5kIHJvdGF0aW9uWCBhbmQgcm90YXRpb24gYm90aCBiZWluZyAxODAgKGl0IGxvb2tzIHRoZSBzYW1lKSwgc28gd2UgYWRqdXN0IGZvciB0aGF0IGhlcmUuXG5cdFx0XHRcdFx0XHRcdHRtLnJvdGF0aW9uWCA9IHRtLnJvdGF0aW9uID0gMDtcblx0XHRcdFx0XHRcdFx0dG0ucm90YXRpb25ZICs9IDE4MDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0dG0uc2NhbGVYID0gKChNYXRoLnNxcnQoYTExICogYTExICsgYTIxICogYTIxKSAqIHJuZCArIDAuNSkgfCAwKSAvIHJuZDtcblx0XHRcdFx0XHRcdHRtLnNjYWxlWSA9ICgoTWF0aC5zcXJ0KGEyMiAqIGEyMiArIGEyMyAqIGEyMykgKiBybmQgKyAwLjUpIHwgMCkgLyBybmQ7XG5cdFx0XHRcdFx0XHR0bS5zY2FsZVogPSAoKE1hdGguc3FydChhMzIgKiBhMzIgKyBhMzMgKiBhMzMpICogcm5kICsgMC41KSB8IDApIC8gcm5kO1xuXHRcdFx0XHRcdFx0dG0uc2tld1ggPSAwO1xuXHRcdFx0XHRcdFx0dG0ucGVyc3BlY3RpdmUgPSBhNDMgPyAxIC8gKChhNDMgPCAwKSA/IC1hNDMgOiBhNDMpIDogMDtcblx0XHRcdFx0XHRcdHRtLnggPSBhMTQ7XG5cdFx0XHRcdFx0XHR0bS55ID0gYTI0O1xuXHRcdFx0XHRcdFx0dG0ueiA9IGEzNDtcblx0XHRcdFx0XHRcdGlmICh0bS5zdmcpIHtcblx0XHRcdFx0XHRcdFx0dG0ueCAtPSB0bS54T3JpZ2luIC0gKHRtLnhPcmlnaW4gKiBhMTEgLSB0bS55T3JpZ2luICogYTEyKTtcblx0XHRcdFx0XHRcdFx0dG0ueSAtPSB0bS55T3JpZ2luIC0gKHRtLnlPcmlnaW4gKiBhMjEgLSB0bS54T3JpZ2luICogYTIyKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoKCFfc3VwcG9ydHMzRCB8fCBwYXJzZSB8fCAhbS5sZW5ndGggfHwgdG0ueCAhPT0gbVs0XSB8fCB0bS55ICE9PSBtWzVdIHx8ICghdG0ucm90YXRpb25YICYmICF0bS5yb3RhdGlvblkpKSAmJiAhKHRtLnggIT09IHVuZGVmaW5lZCAmJiBfZ2V0U3R5bGUodCwgXCJkaXNwbGF5XCIsIGNzKSA9PT0gXCJub25lXCIpKSB7IC8vc29tZXRpbWVzIGEgNi1lbGVtZW50IG1hdHJpeCBpcyByZXR1cm5lZCBldmVuIHdoZW4gd2UgcGVyZm9ybWVkIDNEIHRyYW5zZm9ybXMsIGxpa2UgaWYgcm90YXRpb25YIGFuZCByb3RhdGlvblkgYXJlIDE4MC4gSW4gY2FzZXMgbGlrZSB0aGlzLCB3ZSBzdGlsbCBuZWVkIHRvIGhvbm9yIHRoZSAzRCB0cmFuc2Zvcm1zLiBJZiB3ZSBqdXN0IHJlbHkgb24gdGhlIDJEIGluZm8sIGl0IGNvdWxkIGFmZmVjdCBob3cgdGhlIGRhdGEgaXMgaW50ZXJwcmV0ZWQsIGxpa2Ugc2NhbGVZIG1pZ2h0IGdldCBzZXQgdG8gLTEgb3Igcm90YXRpb24gY291bGQgZ2V0IG9mZnNldCBieSAxODAgZGVncmVlcy4gRm9yIGV4YW1wbGUsIGRvIGEgVHdlZW5MaXRlLnRvKGVsZW1lbnQsIDEsIHtjc3M6e3JvdGF0aW9uWDoxODAsIHJvdGF0aW9uWToxODB9fSkgYW5kIHRoZW4gbGF0ZXIsIFR3ZWVuTGl0ZS50byhlbGVtZW50LCAxLCB7Y3NzOntyb3RhdGlvblg6MH19KSBhbmQgd2l0aG91dCB0aGlzIGNvbmRpdGlvbmFsIGxvZ2ljIGluIHBsYWNlLCBpdCdkIGp1bXAgdG8gYSBzdGF0ZSBvZiBiZWluZyB1bnJvdGF0ZWQgd2hlbiB0aGUgMm5kIHR3ZWVuIHN0YXJ0cy4gVGhlbiBhZ2Fpbiwgd2UgbmVlZCB0byBob25vciB0aGUgZmFjdCB0aGF0IHRoZSB1c2VyIENPVUxEIGFsdGVyIHRoZSB0cmFuc2Zvcm1zIG91dHNpZGUgb2YgQ1NTUGx1Z2luLCBsaWtlIGJ5IG1hbnVhbGx5IGFwcGx5aW5nIG5ldyBjc3MsIHNvIHdlIHRyeSB0byBzZW5zZSB0aGF0IGJ5IGxvb2tpbmcgYXQgeCBhbmQgeSBiZWNhdXNlIGlmIHRob3NlIGNoYW5nZWQsIHdlIGtub3cgdGhlIGNoYW5nZXMgd2VyZSBtYWRlIG91dHNpZGUgQ1NTUGx1Z2luIGFuZCB3ZSBmb3JjZSBhIHJlaW50ZXJwcmV0YXRpb24gb2YgdGhlIG1hdHJpeCB2YWx1ZXMuIEFsc28sIGluIFdlYmtpdCBicm93c2VycywgaWYgdGhlIGVsZW1lbnQncyBcImRpc3BsYXlcIiBpcyBcIm5vbmVcIiwgaXRzIGNhbGN1bGF0ZWQgc3R5bGUgdmFsdWUgd2lsbCBhbHdheXMgcmV0dXJuIGVtcHR5LCBzbyBpZiB3ZSd2ZSBhbHJlYWR5IHJlY29yZGVkIHRoZSB2YWx1ZXMgaW4gdGhlIF9nc1RyYW5zZm9ybSBvYmplY3QsIHdlJ2xsIGp1c3QgcmVseSBvbiB0aG9zZS5cblx0XHRcdFx0XHRcdHZhciBrID0gKG0ubGVuZ3RoID49IDYpLFxuXHRcdFx0XHRcdFx0XHRhID0gayA/IG1bMF0gOiAxLFxuXHRcdFx0XHRcdFx0XHRiID0gbVsxXSB8fCAwLFxuXHRcdFx0XHRcdFx0XHRjID0gbVsyXSB8fCAwLFxuXHRcdFx0XHRcdFx0XHRkID0gayA/IG1bM10gOiAxO1xuXHRcdFx0XHRcdFx0dG0ueCA9IG1bNF0gfHwgMDtcblx0XHRcdFx0XHRcdHRtLnkgPSBtWzVdIHx8IDA7XG5cdFx0XHRcdFx0XHRzY2FsZVggPSBNYXRoLnNxcnQoYSAqIGEgKyBiICogYik7XG5cdFx0XHRcdFx0XHRzY2FsZVkgPSBNYXRoLnNxcnQoZCAqIGQgKyBjICogYyk7XG5cdFx0XHRcdFx0XHRyb3RhdGlvbiA9IChhIHx8IGIpID8gTWF0aC5hdGFuMihiLCBhKSAqIF9SQUQyREVHIDogdG0ucm90YXRpb24gfHwgMDsgLy9ub3RlOiBpZiBzY2FsZVggaXMgMCwgd2UgY2Fubm90IGFjY3VyYXRlbHkgbWVhc3VyZSByb3RhdGlvbi4gU2FtZSBmb3Igc2tld1ggd2l0aCBhIHNjYWxlWSBvZiAwLiBUaGVyZWZvcmUsIHdlIGRlZmF1bHQgdG8gdGhlIHByZXZpb3VzbHkgcmVjb3JkZWQgdmFsdWUgKG9yIHplcm8gaWYgdGhhdCBkb2Vzbid0IGV4aXN0KS5cblx0XHRcdFx0XHRcdHNrZXdYID0gKGMgfHwgZCkgPyBNYXRoLmF0YW4yKGMsIGQpICogX1JBRDJERUcgKyByb3RhdGlvbiA6IHRtLnNrZXdYIHx8IDA7XG5cdFx0XHRcdFx0XHRpZiAoTWF0aC5hYnMoc2tld1gpID4gOTAgJiYgTWF0aC5hYnMoc2tld1gpIDwgMjcwKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChpbnZYKSB7XG5cdFx0XHRcdFx0XHRcdFx0c2NhbGVYICo9IC0xO1xuXHRcdFx0XHRcdFx0XHRcdHNrZXdYICs9IChyb3RhdGlvbiA8PSAwKSA/IDE4MCA6IC0xODA7XG5cdFx0XHRcdFx0XHRcdFx0cm90YXRpb24gKz0gKHJvdGF0aW9uIDw9IDApID8gMTgwIDogLTE4MDtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRzY2FsZVkgKj0gLTE7XG5cdFx0XHRcdFx0XHRcdFx0c2tld1ggKz0gKHNrZXdYIDw9IDApID8gMTgwIDogLTE4MDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0dG0uc2NhbGVYID0gc2NhbGVYO1xuXHRcdFx0XHRcdFx0dG0uc2NhbGVZID0gc2NhbGVZO1xuXHRcdFx0XHRcdFx0dG0ucm90YXRpb24gPSByb3RhdGlvbjtcblx0XHRcdFx0XHRcdHRtLnNrZXdYID0gc2tld1g7XG5cdFx0XHRcdFx0XHRpZiAoX3N1cHBvcnRzM0QpIHtcblx0XHRcdFx0XHRcdFx0dG0ucm90YXRpb25YID0gdG0ucm90YXRpb25ZID0gdG0ueiA9IDA7XG5cdFx0XHRcdFx0XHRcdHRtLnBlcnNwZWN0aXZlID0gZGVmYXVsdFRyYW5zZm9ybVBlcnNwZWN0aXZlO1xuXHRcdFx0XHRcdFx0XHR0bS5zY2FsZVogPSAxO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKHRtLnN2Zykge1xuXHRcdFx0XHRcdFx0XHR0bS54IC09IHRtLnhPcmlnaW4gLSAodG0ueE9yaWdpbiAqIGEgLSB0bS55T3JpZ2luICogYik7XG5cdFx0XHRcdFx0XHRcdHRtLnkgLT0gdG0ueU9yaWdpbiAtICh0bS55T3JpZ2luICogZCAtIHRtLnhPcmlnaW4gKiBjKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dG0uek9yaWdpbiA9IHpPcmlnaW47XG5cdFx0XHRcdFx0Ly9zb21lIGJyb3dzZXJzIGhhdmUgYSBoYXJkIHRpbWUgd2l0aCB2ZXJ5IHNtYWxsIHZhbHVlcyBsaWtlIDIuNDQ5MjkzNTk4Mjk0NzA2NGUtMTYgKG5vdGljZSB0aGUgXCJlLVwiIHRvd2FyZHMgdGhlIGVuZCkgYW5kIHdvdWxkIHJlbmRlciB0aGUgb2JqZWN0IHNsaWdodGx5IG9mZi4gU28gd2Ugcm91bmQgdG8gMCBpbiB0aGVzZSBjYXNlcy4gVGhlIGNvbmRpdGlvbmFsIGxvZ2ljIGhlcmUgaXMgZmFzdGVyIHRoYW4gY2FsbGluZyBNYXRoLmFicygpLiBBbHNvLCBicm93c2VycyB0ZW5kIHRvIHJlbmRlciBhIFNMSUdIVExZIHJvdGF0ZWQgb2JqZWN0IGluIGEgZnV6enkgd2F5LCBzbyB3ZSBuZWVkIHRvIHNuYXAgdG8gZXhhY3RseSAwIHdoZW4gYXBwcm9wcmlhdGUuXG5cdFx0XHRcdFx0Zm9yIChpIGluIHRtKSB7XG5cdFx0XHRcdFx0XHRpZiAodG1baV0gPCBtaW4pIGlmICh0bVtpXSA+IC1taW4pIHtcblx0XHRcdFx0XHRcdFx0dG1baV0gPSAwO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHQvL0RFQlVHOiBfbG9nKFwicGFyc2VkIHJvdGF0aW9uIG9mIFwiICsgdC5nZXRBdHRyaWJ1dGUoXCJpZFwiKStcIjogXCIrKHRtLnJvdGF0aW9uWCkrXCIsIFwiKyh0bS5yb3RhdGlvblkpK1wiLCBcIisodG0ucm90YXRpb24pK1wiLCBzY2FsZTogXCIrdG0uc2NhbGVYK1wiLCBcIit0bS5zY2FsZVkrXCIsIFwiK3RtLnNjYWxlWitcIiwgcG9zaXRpb246IFwiK3RtLngrXCIsIFwiK3RtLnkrXCIsIFwiK3RtLnorXCIsIHBlcnNwZWN0aXZlOiBcIit0bS5wZXJzcGVjdGl2ZSk7XG5cdFx0XHRcdGlmIChyZWMpIHtcblx0XHRcdFx0XHR0Ll9nc1RyYW5zZm9ybSA9IHRtOyAvL3JlY29yZCB0byB0aGUgb2JqZWN0J3MgX2dzVHJhbnNmb3JtIHdoaWNoIHdlIHVzZSBzbyB0aGF0IHR3ZWVucyBjYW4gY29udHJvbCBpbmRpdmlkdWFsIHByb3BlcnRpZXMgaW5kZXBlbmRlbnRseSAod2UgbmVlZCBhbGwgdGhlIHByb3BlcnRpZXMgdG8gYWNjdXJhdGVseSByZWNvbXBvc2UgdGhlIG1hdHJpeCBpbiB0aGUgc2V0UmF0aW8oKSBtZXRob2QpXG5cdFx0XHRcdFx0aWYgKHRtLnN2ZykgeyAvL2lmIHdlJ3JlIHN1cHBvc2VkIHRvIGFwcGx5IHRyYW5zZm9ybXMgdG8gdGhlIFNWRyBlbGVtZW50J3MgXCJ0cmFuc2Zvcm1cIiBhdHRyaWJ1dGUsIG1ha2Ugc3VyZSB0aGVyZSBhcmVuJ3QgYW55IENTUyB0cmFuc2Zvcm1zIGFwcGxpZWQgb3IgdGhleSdsbCBvdmVycmlkZSB0aGUgYXR0cmlidXRlIG9uZXMuIEFsc28gY2xlYXIgdGhlIHRyYW5zZm9ybSBhdHRyaWJ1dGUgaWYgd2UncmUgdXNpbmcgQ1NTLCBqdXN0IHRvIGJlIGNsZWFuLlxuXHRcdFx0XHRcdFx0aWYgKF91c2VTVkdUcmFuc2Zvcm1BdHRyICYmIHQuc3R5bGVbX3RyYW5zZm9ybVByb3BdKSB7XG5cdFx0XHRcdFx0XHRcdF9yZW1vdmVQcm9wKHQuc3R5bGUsIF90cmFuc2Zvcm1Qcm9wKTtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoIV91c2VTVkdUcmFuc2Zvcm1BdHRyICYmIHQuZ2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIpKSB7XG5cdFx0XHRcdFx0XHRcdHQucmVtb3ZlQXR0cmlidXRlKFwidHJhbnNmb3JtXCIpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdG07XG5cdFx0XHR9LFxuXG5cdFx0XHQvL2ZvciBzZXR0aW5nIDJEIHRyYW5zZm9ybXMgaW4gSUU2LCBJRTcsIGFuZCBJRTggKG11c3QgdXNlIGEgXCJmaWx0ZXJcIiB0byBlbXVsYXRlIHRoZSBiZWhhdmlvciBvZiBtb2Rlcm4gZGF5IGJyb3dzZXIgdHJhbnNmb3Jtcylcblx0XHRcdF9zZXRJRVRyYW5zZm9ybVJhdGlvID0gZnVuY3Rpb24odikge1xuXHRcdFx0XHR2YXIgdCA9IHRoaXMuZGF0YSwgLy9yZWZlcnMgdG8gdGhlIGVsZW1lbnQncyBfZ3NUcmFuc2Zvcm0gb2JqZWN0XG5cdFx0XHRcdFx0YW5nID0gLXQucm90YXRpb24gKiBfREVHMlJBRCxcblx0XHRcdFx0XHRza2V3ID0gYW5nICsgdC5za2V3WCAqIF9ERUcyUkFELFxuXHRcdFx0XHRcdHJuZCA9IDEwMDAwMCxcblx0XHRcdFx0XHRhID0gKChNYXRoLmNvcyhhbmcpICogdC5zY2FsZVggKiBybmQpIHwgMCkgLyBybmQsXG5cdFx0XHRcdFx0YiA9ICgoTWF0aC5zaW4oYW5nKSAqIHQuc2NhbGVYICogcm5kKSB8IDApIC8gcm5kLFxuXHRcdFx0XHRcdGMgPSAoKE1hdGguc2luKHNrZXcpICogLXQuc2NhbGVZICogcm5kKSB8IDApIC8gcm5kLFxuXHRcdFx0XHRcdGQgPSAoKE1hdGguY29zKHNrZXcpICogdC5zY2FsZVkgKiBybmQpIHwgMCkgLyBybmQsXG5cdFx0XHRcdFx0c3R5bGUgPSB0aGlzLnQuc3R5bGUsXG5cdFx0XHRcdFx0Y3MgPSB0aGlzLnQuY3VycmVudFN0eWxlLFxuXHRcdFx0XHRcdGZpbHRlcnMsIHZhbDtcblx0XHRcdFx0aWYgKCFjcykge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHR2YWwgPSBiOyAvL2p1c3QgZm9yIHN3YXBwaW5nIHRoZSB2YXJpYWJsZXMgYW4gaW52ZXJ0aW5nIHRoZW0gKHJldXNlZCBcInZhbFwiIHRvIGF2b2lkIGNyZWF0aW5nIGFub3RoZXIgdmFyaWFibGUgaW4gbWVtb3J5KS4gSUUncyBmaWx0ZXIgbWF0cml4IHVzZXMgYSBub24tc3RhbmRhcmQgbWF0cml4IGNvbmZpZ3VyYXRpb24gKGFuZ2xlIGdvZXMgdGhlIG9wcG9zaXRlIHdheSwgYW5kIGIgYW5kIGMgYXJlIHJldmVyc2VkIGFuZCBpbnZlcnRlZClcblx0XHRcdFx0YiA9IC1jO1xuXHRcdFx0XHRjID0gLXZhbDtcblx0XHRcdFx0ZmlsdGVycyA9IGNzLmZpbHRlcjtcblx0XHRcdFx0c3R5bGUuZmlsdGVyID0gXCJcIjsgLy9yZW1vdmUgZmlsdGVycyBzbyB0aGF0IHdlIGNhbiBhY2N1cmF0ZWx5IG1lYXN1cmUgb2Zmc2V0V2lkdGgvb2Zmc2V0SGVpZ2h0XG5cdFx0XHRcdHZhciB3ID0gdGhpcy50Lm9mZnNldFdpZHRoLFxuXHRcdFx0XHRcdGggPSB0aGlzLnQub2Zmc2V0SGVpZ2h0LFxuXHRcdFx0XHRcdGNsaXAgPSAoY3MucG9zaXRpb24gIT09IFwiYWJzb2x1dGVcIiksXG5cdFx0XHRcdFx0bSA9IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0Lk1hdHJpeChNMTE9XCIgKyBhICsgXCIsIE0xMj1cIiArIGIgKyBcIiwgTTIxPVwiICsgYyArIFwiLCBNMjI9XCIgKyBkLFxuXHRcdFx0XHRcdG94ID0gdC54ICsgKHcgKiB0LnhQZXJjZW50IC8gMTAwKSxcblx0XHRcdFx0XHRveSA9IHQueSArIChoICogdC55UGVyY2VudCAvIDEwMCksXG5cdFx0XHRcdFx0ZHgsIGR5O1xuXG5cdFx0XHRcdC8vaWYgdHJhbnNmb3JtT3JpZ2luIGlzIGJlaW5nIHVzZWQsIGFkanVzdCB0aGUgb2Zmc2V0IHggYW5kIHlcblx0XHRcdFx0aWYgKHQub3ggIT0gbnVsbCkge1xuXHRcdFx0XHRcdGR4ID0gKCh0Lm94cCkgPyB3ICogdC5veCAqIDAuMDEgOiB0Lm94KSAtIHcgLyAyO1xuXHRcdFx0XHRcdGR5ID0gKCh0Lm95cCkgPyBoICogdC5veSAqIDAuMDEgOiB0Lm95KSAtIGggLyAyO1xuXHRcdFx0XHRcdG94ICs9IGR4IC0gKGR4ICogYSArIGR5ICogYik7XG5cdFx0XHRcdFx0b3kgKz0gZHkgLSAoZHggKiBjICsgZHkgKiBkKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICghY2xpcCkge1xuXHRcdFx0XHRcdG0gKz0gXCIsIHNpemluZ01ldGhvZD0nYXV0byBleHBhbmQnKVwiO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGR4ID0gKHcgLyAyKTtcblx0XHRcdFx0XHRkeSA9IChoIC8gMik7XG5cdFx0XHRcdFx0Ly90cmFuc2xhdGUgdG8gZW5zdXJlIHRoYXQgdHJhbnNmb3JtYXRpb25zIG9jY3VyIGFyb3VuZCB0aGUgY29ycmVjdCBvcmlnaW4gKGRlZmF1bHQgaXMgY2VudGVyKS5cblx0XHRcdFx0XHRtICs9IFwiLCBEeD1cIiArIChkeCAtIChkeCAqIGEgKyBkeSAqIGIpICsgb3gpICsgXCIsIER5PVwiICsgKGR5IC0gKGR4ICogYyArIGR5ICogZCkgKyBveSkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZmlsdGVycy5pbmRleE9mKFwiRFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuTWF0cml4KFwiKSAhPT0gLTEpIHtcblx0XHRcdFx0XHRzdHlsZS5maWx0ZXIgPSBmaWx0ZXJzLnJlcGxhY2UoX2llU2V0TWF0cml4RXhwLCBtKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzdHlsZS5maWx0ZXIgPSBtICsgXCIgXCIgKyBmaWx0ZXJzOyAvL3dlIG11c3QgYWx3YXlzIHB1dCB0aGUgdHJhbnNmb3JtL21hdHJpeCBGSVJTVCAoYmVmb3JlIGFscGhhKG9wYWNpdHk9eHgpKSB0byBhdm9pZCBhbiBJRSBidWcgdGhhdCBzbGljZXMgcGFydCBvZiB0aGUgb2JqZWN0IHdoZW4gcm90YXRpb24gaXMgYXBwbGllZCB3aXRoIGFscGhhLlxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly9hdCB0aGUgZW5kIG9yIGJlZ2lubmluZyBvZiB0aGUgdHdlZW4sIGlmIHRoZSBtYXRyaXggaXMgbm9ybWFsICgxLCAwLCAwLCAxKSBhbmQgb3BhY2l0eSBpcyAxMDAgKG9yIGRvZXNuJ3QgZXhpc3QpLCByZW1vdmUgdGhlIGZpbHRlciB0byBpbXByb3ZlIGJyb3dzZXIgcGVyZm9ybWFuY2UuXG5cdFx0XHRcdGlmICh2ID09PSAwIHx8IHYgPT09IDEpIGlmIChhID09PSAxKSBpZiAoYiA9PT0gMCkgaWYgKGMgPT09IDApIGlmIChkID09PSAxKSBpZiAoIWNsaXAgfHwgbS5pbmRleE9mKFwiRHg9MCwgRHk9MFwiKSAhPT0gLTEpIGlmICghX29wYWNpdHlFeHAudGVzdChmaWx0ZXJzKSB8fCBwYXJzZUZsb2F0KFJlZ0V4cC4kMSkgPT09IDEwMCkgaWYgKGZpbHRlcnMuaW5kZXhPZihcImdyYWRpZW50KFwiICYmIGZpbHRlcnMuaW5kZXhPZihcIkFscGhhXCIpKSA9PT0gLTEpIHtcblx0XHRcdFx0XHRzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJmaWx0ZXJcIik7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvL3dlIG11c3Qgc2V0IHRoZSBtYXJnaW5zIEFGVEVSIGFwcGx5aW5nIHRoZSBmaWx0ZXIgaW4gb3JkZXIgdG8gYXZvaWQgc29tZSBidWdzIGluIElFOCB0aGF0IGNvdWxkIChpbiByYXJlIHNjZW5hcmlvcykgY2F1c2UgdGhlbSB0byBiZSBpZ25vcmVkIGludGVybWl0dGVudGx5ICh2aWJyYXRpb24pLlxuXHRcdFx0XHRpZiAoIWNsaXApIHtcblx0XHRcdFx0XHR2YXIgbXVsdCA9IChfaWVWZXJzIDwgOCkgPyAxIDogLTEsIC8vaW4gSW50ZXJuZXQgRXhwbG9yZXIgNyBhbmQgYmVmb3JlLCB0aGUgYm94IG1vZGVsIGlzIGJyb2tlbiwgY2F1c2luZyB0aGUgYnJvd3NlciB0byB0cmVhdCB0aGUgd2lkdGgvaGVpZ2h0IG9mIHRoZSBhY3R1YWwgcm90YXRlZCBmaWx0ZXJlZCBpbWFnZSBhcyB0aGUgd2lkdGgvaGVpZ2h0IG9mIHRoZSBib3ggaXRzZWxmLCBidXQgTWljcm9zb2Z0IGNvcnJlY3RlZCB0aGF0IGluIElFOC4gV2UgbXVzdCB1c2UgYSBuZWdhdGl2ZSBvZmZzZXQgaW4gSUU4IG9uIHRoZSByaWdodC9ib3R0b21cblx0XHRcdFx0XHRcdG1hcmcsIHByb3AsIGRpZjtcblx0XHRcdFx0XHRkeCA9IHQuaWVPZmZzZXRYIHx8IDA7XG5cdFx0XHRcdFx0ZHkgPSB0LmllT2Zmc2V0WSB8fCAwO1xuXHRcdFx0XHRcdHQuaWVPZmZzZXRYID0gTWF0aC5yb3VuZCgodyAtICgoYSA8IDAgPyAtYSA6IGEpICogdyArIChiIDwgMCA/IC1iIDogYikgKiBoKSkgLyAyICsgb3gpO1xuXHRcdFx0XHRcdHQuaWVPZmZzZXRZID0gTWF0aC5yb3VuZCgoaCAtICgoZCA8IDAgPyAtZCA6IGQpICogaCArIChjIDwgMCA/IC1jIDogYykgKiB3KSkgLyAyICsgb3kpO1xuXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCA0OyBpKyspIHtcblx0XHRcdFx0XHRcdHByb3AgPSBfbWFyZ2luc1tpXTtcblx0XHRcdFx0XHRcdG1hcmcgPSBjc1twcm9wXTtcblx0XHRcdFx0XHRcdC8vd2UgbmVlZCB0byBnZXQgdGhlIGN1cnJlbnQgbWFyZ2luIGluIGNhc2UgaXQgaXMgYmVpbmcgdHdlZW5lZCBzZXBhcmF0ZWx5ICh3ZSB3YW50IHRvIHJlc3BlY3QgdGhhdCB0d2VlbidzIGNoYW5nZXMpXG5cdFx0XHRcdFx0XHR2YWwgPSAobWFyZy5pbmRleE9mKFwicHhcIikgIT09IC0xKSA/IHBhcnNlRmxvYXQobWFyZykgOiBfY29udmVydFRvUGl4ZWxzKHRoaXMudCwgcHJvcCwgcGFyc2VGbG9hdChtYXJnKSwgbWFyZy5yZXBsYWNlKF9zdWZmaXhFeHAsIFwiXCIpKSB8fCAwO1xuXHRcdFx0XHRcdFx0aWYgKHZhbCAhPT0gdFtwcm9wXSkge1xuXHRcdFx0XHRcdFx0XHRkaWYgPSAoaSA8IDIpID8gLXQuaWVPZmZzZXRYIDogLXQuaWVPZmZzZXRZOyAvL2lmIGFub3RoZXIgdHdlZW4gaXMgY29udHJvbGxpbmcgYSBtYXJnaW4sIHdlIGNhbm5vdCBvbmx5IGFwcGx5IHRoZSBkaWZmZXJlbmNlIGluIHRoZSBpZU9mZnNldHMsIHNvIHdlIGVzc2VudGlhbGx5IHplcm8tb3V0IHRoZSBkeCBhbmQgZHkgaGVyZSBpbiB0aGF0IGNhc2UuIFdlIHJlY29yZCB0aGUgbWFyZ2luKHMpIGxhdGVyIHNvIHRoYXQgd2UgY2FuIGtlZXAgY29tcGFyaW5nIHRoZW0sIG1ha2luZyB0aGlzIGNvZGUgdmVyeSBmbGV4aWJsZS5cblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGRpZiA9IChpIDwgMikgPyBkeCAtIHQuaWVPZmZzZXRYIDogZHkgLSB0LmllT2Zmc2V0WTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHN0eWxlW3Byb3BdID0gKHRbcHJvcF0gPSBNYXRoLnJvdW5kKCB2YWwgLSBkaWYgKiAoKGkgPT09IDAgfHwgaSA9PT0gMikgPyAxIDogbXVsdCkgKSkgKyBcInB4XCI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHQvKiB0cmFuc2xhdGVzIGEgc3VwZXIgc21hbGwgZGVjaW1hbCB0byBhIHN0cmluZyBXSVRIT1VUIHNjaWVudGlmaWMgbm90YXRpb25cblx0XHRcdF9zYWZlRGVjaW1hbCA9IGZ1bmN0aW9uKG4pIHtcblx0XHRcdFx0dmFyIHMgPSAobiA8IDAgPyAtbiA6IG4pICsgXCJcIixcblx0XHRcdFx0XHRhID0gcy5zcGxpdChcImUtXCIpO1xuXHRcdFx0XHRyZXR1cm4gKG4gPCAwID8gXCItMC5cIiA6IFwiMC5cIikgKyBuZXcgQXJyYXkocGFyc2VJbnQoYVsxXSwgMTApIHx8IDApLmpvaW4oXCIwXCIpICsgYVswXS5zcGxpdChcIi5cIikuam9pbihcIlwiKTtcblx0XHRcdH0sXG5cdFx0XHQqL1xuXG5cdFx0XHRfc2V0VHJhbnNmb3JtUmF0aW8gPSBfaW50ZXJuYWxzLnNldDNEVHJhbnNmb3JtUmF0aW8gPSBfaW50ZXJuYWxzLnNldFRyYW5zZm9ybVJhdGlvID0gZnVuY3Rpb24odikge1xuXHRcdFx0XHR2YXIgdCA9IHRoaXMuZGF0YSwgLy9yZWZlcnMgdG8gdGhlIGVsZW1lbnQncyBfZ3NUcmFuc2Zvcm0gb2JqZWN0XG5cdFx0XHRcdFx0c3R5bGUgPSB0aGlzLnQuc3R5bGUsXG5cdFx0XHRcdFx0YW5nbGUgPSB0LnJvdGF0aW9uLFxuXHRcdFx0XHRcdHJvdGF0aW9uWCA9IHQucm90YXRpb25YLFxuXHRcdFx0XHRcdHJvdGF0aW9uWSA9IHQucm90YXRpb25ZLFxuXHRcdFx0XHRcdHN4ID0gdC5zY2FsZVgsXG5cdFx0XHRcdFx0c3kgPSB0LnNjYWxlWSxcblx0XHRcdFx0XHRzeiA9IHQuc2NhbGVaLFxuXHRcdFx0XHRcdHggPSB0LngsXG5cdFx0XHRcdFx0eSA9IHQueSxcblx0XHRcdFx0XHR6ID0gdC56LFxuXHRcdFx0XHRcdGlzU1ZHID0gdC5zdmcsXG5cdFx0XHRcdFx0cGVyc3BlY3RpdmUgPSB0LnBlcnNwZWN0aXZlLFxuXHRcdFx0XHRcdGZvcmNlM0QgPSB0LmZvcmNlM0QsXG5cdFx0XHRcdFx0YTExLCBhMTIsIGExMywgYTIxLCBhMjIsIGEyMywgYTMxLCBhMzIsIGEzMywgYTQxLCBhNDIsIGE0Myxcblx0XHRcdFx0XHR6T3JpZ2luLCBtaW4sIGNvcywgc2luLCB0MSwgdDIsIHRyYW5zZm9ybSwgY29tbWEsIHplcm8sIHNrZXcsIHJuZDtcblxuXHRcdFx0XHQvL2NoZWNrIHRvIHNlZSBpZiB3ZSBzaG91bGQgcmVuZGVyIGFzIDJEIChhbmQgU1ZHcyBtdXN0IHVzZSAyRCB3aGVuIF91c2VTVkdUcmFuc2Zvcm1BdHRyIGlzIHRydWUpXG5cdFx0XHRcdGlmICgoKCgodiA9PT0gMSB8fCB2ID09PSAwKSAmJiBmb3JjZTNEID09PSBcImF1dG9cIiAmJiAodGhpcy50d2Vlbi5fdG90YWxUaW1lID09PSB0aGlzLnR3ZWVuLl90b3RhbER1cmF0aW9uIHx8ICF0aGlzLnR3ZWVuLl90b3RhbFRpbWUpKSB8fCAhZm9yY2UzRCkgJiYgIXogJiYgIXBlcnNwZWN0aXZlICYmICFyb3RhdGlvblkgJiYgIXJvdGF0aW9uWCkgfHwgKF91c2VTVkdUcmFuc2Zvcm1BdHRyICYmIGlzU1ZHKSB8fCAhX3N1cHBvcnRzM0QpIHsgLy9vbiB0aGUgZmluYWwgcmVuZGVyICh3aGljaCBjb3VsZCBiZSAwIGZvciBhIGZyb20gdHdlZW4pLCBpZiB0aGVyZSBhcmUgbm8gM0QgYXNwZWN0cywgcmVuZGVyIGluIDJEIHRvIGZyZWUgdXAgbWVtb3J5IGFuZCBpbXByb3ZlIHBlcmZvcm1hbmNlIGVzcGVjaWFsbHkgb24gbW9iaWxlIGRldmljZXMuIENoZWNrIHRoZSB0d2VlbidzIHRvdGFsVGltZS90b3RhbER1cmF0aW9uIHRvbyBpbiBvcmRlciB0byBtYWtlIHN1cmUgaXQgZG9lc24ndCBoYXBwZW4gYmV0d2VlbiByZXBlYXRzIGlmIGl0J3MgYSByZXBlYXRpbmcgdHdlZW4uXG5cblx0XHRcdFx0XHQvLzJEXG5cdFx0XHRcdFx0aWYgKGFuZ2xlIHx8IHQuc2tld1ggfHwgaXNTVkcpIHtcblx0XHRcdFx0XHRcdGFuZ2xlICo9IF9ERUcyUkFEO1xuXHRcdFx0XHRcdFx0c2tldyA9IHQuc2tld1ggKiBfREVHMlJBRDtcblx0XHRcdFx0XHRcdHJuZCA9IDEwMDAwMDtcblx0XHRcdFx0XHRcdGExMSA9IE1hdGguY29zKGFuZ2xlKSAqIHN4O1xuXHRcdFx0XHRcdFx0YTIxID0gTWF0aC5zaW4oYW5nbGUpICogc3g7XG5cdFx0XHRcdFx0XHRhMTIgPSBNYXRoLnNpbihhbmdsZSAtIHNrZXcpICogLXN5O1xuXHRcdFx0XHRcdFx0YTIyID0gTWF0aC5jb3MoYW5nbGUgLSBza2V3KSAqIHN5O1xuXHRcdFx0XHRcdFx0aWYgKHNrZXcgJiYgdC5za2V3VHlwZSA9PT0gXCJzaW1wbGVcIikgeyAvL2J5IGRlZmF1bHQsIHdlIGNvbXBlbnNhdGUgc2tld2luZyBvbiB0aGUgb3RoZXIgYXhpcyB0byBtYWtlIGl0IGxvb2sgbW9yZSBuYXR1cmFsLCBidXQgeW91IGNhbiBzZXQgdGhlIHNrZXdUeXBlIHRvIFwic2ltcGxlXCIgdG8gdXNlIHRoZSB1bmNvbXBlbnNhdGVkIHNrZXdpbmcgdGhhdCBDU1MgZG9lc1xuXHRcdFx0XHRcdFx0XHR0MSA9IE1hdGgudGFuKHNrZXcpO1xuXHRcdFx0XHRcdFx0XHR0MSA9IE1hdGguc3FydCgxICsgdDEgKiB0MSk7XG5cdFx0XHRcdFx0XHRcdGExMiAqPSB0MTtcblx0XHRcdFx0XHRcdFx0YTIyICo9IHQxO1xuXHRcdFx0XHRcdFx0XHRpZiAodC5za2V3WSkge1xuXHRcdFx0XHRcdFx0XHRcdGExMSAqPSB0MTtcblx0XHRcdFx0XHRcdFx0XHRhMjEgKj0gdDE7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmIChpc1NWRykge1xuXHRcdFx0XHRcdFx0XHR4ICs9IHQueE9yaWdpbiAtICh0LnhPcmlnaW4gKiBhMTEgKyB0LnlPcmlnaW4gKiBhMTIpO1xuXHRcdFx0XHRcdFx0XHR5ICs9IHQueU9yaWdpbiAtICh0LnhPcmlnaW4gKiBhMjEgKyB0LnlPcmlnaW4gKiBhMjIpO1xuXHRcdFx0XHRcdFx0XHRtaW4gPSAwLjAwMDAwMTtcblx0XHRcdFx0XHRcdFx0aWYgKHggPCBtaW4pIGlmICh4ID4gLW1pbikge1xuXHRcdFx0XHRcdFx0XHRcdHggPSAwO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGlmICh5IDwgbWluKSBpZiAoeSA+IC1taW4pIHtcblx0XHRcdFx0XHRcdFx0XHR5ID0gMDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0dHJhbnNmb3JtID0gKCgoYTExICogcm5kKSB8IDApIC8gcm5kKSArIFwiLFwiICsgKCgoYTIxICogcm5kKSB8IDApIC8gcm5kKSArIFwiLFwiICsgKCgoYTEyICogcm5kKSB8IDApIC8gcm5kKSArIFwiLFwiICsgKCgoYTIyICogcm5kKSB8IDApIC8gcm5kKSArIFwiLFwiICsgeCArIFwiLFwiICsgeSArIFwiKVwiO1xuXHRcdFx0XHRcdFx0aWYgKGlzU1ZHICYmIF91c2VTVkdUcmFuc2Zvcm1BdHRyKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMudC5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgXCJtYXRyaXgoXCIgKyB0cmFuc2Zvcm0pO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Ly9zb21lIGJyb3dzZXJzIGhhdmUgYSBoYXJkIHRpbWUgd2l0aCB2ZXJ5IHNtYWxsIHZhbHVlcyBsaWtlIDIuNDQ5MjkzNTk4Mjk0NzA2NGUtMTYgKG5vdGljZSB0aGUgXCJlLVwiIHRvd2FyZHMgdGhlIGVuZCkgYW5kIHdvdWxkIHJlbmRlciB0aGUgb2JqZWN0IHNsaWdodGx5IG9mZi4gU28gd2Ugcm91bmQgdG8gNSBkZWNpbWFsIHBsYWNlcy5cblx0XHRcdFx0XHRcdFx0c3R5bGVbX3RyYW5zZm9ybVByb3BdID0gKCh0LnhQZXJjZW50IHx8IHQueVBlcmNlbnQpID8gXCJ0cmFuc2xhdGUoXCIgKyB0LnhQZXJjZW50ICsgXCIlLFwiICsgdC55UGVyY2VudCArIFwiJSkgbWF0cml4KFwiIDogXCJtYXRyaXgoXCIpICsgdHJhbnNmb3JtO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRzdHlsZVtfdHJhbnNmb3JtUHJvcF0gPSAoKHQueFBlcmNlbnQgfHwgdC55UGVyY2VudCkgPyBcInRyYW5zbGF0ZShcIiArIHQueFBlcmNlbnQgKyBcIiUsXCIgKyB0LnlQZXJjZW50ICsgXCIlKSBtYXRyaXgoXCIgOiBcIm1hdHJpeChcIikgKyBzeCArIFwiLDAsMCxcIiArIHN5ICsgXCIsXCIgKyB4ICsgXCIsXCIgKyB5ICsgXCIpXCI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybjtcblxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChfaXNGaXJlZm94KSB7IC8vRmlyZWZveCBoYXMgYSBidWcgKGF0IGxlYXN0IGluIHYyNSkgdGhhdCBjYXVzZXMgaXQgdG8gcmVuZGVyIHRoZSB0cmFuc3BhcmVudCBwYXJ0IG9mIDMyLWJpdCBQTkcgaW1hZ2VzIGFzIGJsYWNrIHdoZW4gZGlzcGxheWVkIGluc2lkZSBhbiBpZnJhbWUgYW5kIHRoZSAzRCBzY2FsZSBpcyB2ZXJ5IHNtYWxsIGFuZCBkb2Vzbid0IGNoYW5nZSBzdWZmaWNpZW50bHkgZW5vdWdoIGJldHdlZW4gcmVuZGVycyAobGlrZSBpZiB5b3UgdXNlIGEgUG93ZXI0LmVhc2VJbk91dCB0byBzY2FsZSBmcm9tIDAgdG8gMSB3aGVyZSB0aGUgYmVnaW5uaW5nIHZhbHVlcyBvbmx5IGNoYW5nZSBhIHRpbnkgYW1vdW50IHRvIGJlZ2luIHRoZSB0d2VlbiBiZWZvcmUgYWNjZWxlcmF0aW5nKS4gSW4gdGhpcyBjYXNlLCB3ZSBmb3JjZSB0aGUgc2NhbGUgdG8gYmUgMC4wMDAwMiBpbnN0ZWFkIHdoaWNoIGlzIHZpc3VhbGx5IHRoZSBzYW1lIGJ1dCB3b3JrcyBhcm91bmQgdGhlIEZpcmVmb3ggaXNzdWUuXG5cdFx0XHRcdFx0bWluID0gMC4wMDAxO1xuXHRcdFx0XHRcdGlmIChzeCA8IG1pbiAmJiBzeCA+IC1taW4pIHtcblx0XHRcdFx0XHRcdHN4ID0gc3ogPSAwLjAwMDAyO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoc3kgPCBtaW4gJiYgc3kgPiAtbWluKSB7XG5cdFx0XHRcdFx0XHRzeSA9IHN6ID0gMC4wMDAwMjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHBlcnNwZWN0aXZlICYmICF0LnogJiYgIXQucm90YXRpb25YICYmICF0LnJvdGF0aW9uWSkgeyAvL0ZpcmVmb3ggaGFzIGEgYnVnIHRoYXQgY2F1c2VzIGVsZW1lbnRzIHRvIGhhdmUgYW4gb2RkIHN1cGVyLXRoaW4sIGJyb2tlbi9kb3R0ZWQgYmxhY2sgYm9yZGVyIG9uIGVsZW1lbnRzIHRoYXQgaGF2ZSBhIHBlcnNwZWN0aXZlIHNldCBidXQgYXJlbid0IHV0aWxpemluZyAzRCBzcGFjZSAobm8gcm90YXRpb25YLCByb3RhdGlvblksIG9yIHopLlxuXHRcdFx0XHRcdFx0cGVyc3BlY3RpdmUgPSAwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoYW5nbGUgfHwgdC5za2V3WCkge1xuXHRcdFx0XHRcdGFuZ2xlICo9IF9ERUcyUkFEO1xuXHRcdFx0XHRcdGNvcyA9IGExMSA9IE1hdGguY29zKGFuZ2xlKTtcblx0XHRcdFx0XHRzaW4gPSBhMjEgPSBNYXRoLnNpbihhbmdsZSk7XG5cdFx0XHRcdFx0aWYgKHQuc2tld1gpIHtcblx0XHRcdFx0XHRcdGFuZ2xlIC09IHQuc2tld1ggKiBfREVHMlJBRDtcblx0XHRcdFx0XHRcdGNvcyA9IE1hdGguY29zKGFuZ2xlKTtcblx0XHRcdFx0XHRcdHNpbiA9IE1hdGguc2luKGFuZ2xlKTtcblx0XHRcdFx0XHRcdGlmICh0LnNrZXdUeXBlID09PSBcInNpbXBsZVwiKSB7IC8vYnkgZGVmYXVsdCwgd2UgY29tcGVuc2F0ZSBza2V3aW5nIG9uIHRoZSBvdGhlciBheGlzIHRvIG1ha2UgaXQgbG9vayBtb3JlIG5hdHVyYWwsIGJ1dCB5b3UgY2FuIHNldCB0aGUgc2tld1R5cGUgdG8gXCJzaW1wbGVcIiB0byB1c2UgdGhlIHVuY29tcGVuc2F0ZWQgc2tld2luZyB0aGF0IENTUyBkb2VzXG5cdFx0XHRcdFx0XHRcdHQxID0gTWF0aC50YW4odC5za2V3WCAqIF9ERUcyUkFEKTtcblx0XHRcdFx0XHRcdFx0dDEgPSBNYXRoLnNxcnQoMSArIHQxICogdDEpO1xuXHRcdFx0XHRcdFx0XHRjb3MgKj0gdDE7XG5cdFx0XHRcdFx0XHRcdHNpbiAqPSB0MTtcblx0XHRcdFx0XHRcdFx0aWYgKHQuc2tld1kpIHtcblx0XHRcdFx0XHRcdFx0XHRhMTEgKj0gdDE7XG5cdFx0XHRcdFx0XHRcdFx0YTIxICo9IHQxO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGExMiA9IC1zaW47XG5cdFx0XHRcdFx0YTIyID0gY29zO1xuXG5cdFx0XHRcdH0gZWxzZSBpZiAoIXJvdGF0aW9uWSAmJiAhcm90YXRpb25YICYmIHN6ID09PSAxICYmICFwZXJzcGVjdGl2ZSAmJiAhaXNTVkcpIHsgLy9pZiB3ZSdyZSBvbmx5IHRyYW5zbGF0aW5nIGFuZC9vciAyRCBzY2FsaW5nLCB0aGlzIGlzIGZhc3Rlci4uLlxuXHRcdFx0XHRcdHN0eWxlW190cmFuc2Zvcm1Qcm9wXSA9ICgodC54UGVyY2VudCB8fCB0LnlQZXJjZW50KSA/IFwidHJhbnNsYXRlKFwiICsgdC54UGVyY2VudCArIFwiJSxcIiArIHQueVBlcmNlbnQgKyBcIiUpIHRyYW5zbGF0ZTNkKFwiIDogXCJ0cmFuc2xhdGUzZChcIikgKyB4ICsgXCJweCxcIiArIHkgKyBcInB4LFwiICsgeiArXCJweClcIiArICgoc3ggIT09IDEgfHwgc3kgIT09IDEpID8gXCIgc2NhbGUoXCIgKyBzeCArIFwiLFwiICsgc3kgKyBcIilcIiA6IFwiXCIpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRhMTEgPSBhMjIgPSAxO1xuXHRcdFx0XHRcdGExMiA9IGEyMSA9IDA7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gS0VZICBJTkRFWCAgIEFGRkVDVFNcblx0XHRcdFx0Ly8gYTExICAwICAgICAgIHJvdGF0aW9uLCByb3RhdGlvblksIHNjYWxlWFxuXHRcdFx0XHQvLyBhMjEgIDEgICAgICAgcm90YXRpb24sIHJvdGF0aW9uWSwgc2NhbGVYXG5cdFx0XHRcdC8vIGEzMSAgMiAgICAgICByb3RhdGlvblksIHNjYWxlWFxuXHRcdFx0XHQvLyBhNDEgIDMgICAgICAgcm90YXRpb25ZLCBzY2FsZVhcblx0XHRcdFx0Ly8gYTEyICA0ICAgICAgIHJvdGF0aW9uLCBza2V3WCwgcm90YXRpb25YLCBzY2FsZVlcblx0XHRcdFx0Ly8gYTIyICA1ICAgICAgIHJvdGF0aW9uLCBza2V3WCwgcm90YXRpb25YLCBzY2FsZVlcblx0XHRcdFx0Ly8gYTMyICA2ICAgICAgIHJvdGF0aW9uWCwgc2NhbGVZXG5cdFx0XHRcdC8vIGE0MiAgNyAgICAgICByb3RhdGlvblgsIHNjYWxlWVxuXHRcdFx0XHQvLyBhMTMgIDggICAgICAgcm90YXRpb25ZLCByb3RhdGlvblgsIHNjYWxlWlxuXHRcdFx0XHQvLyBhMjMgIDkgICAgICAgcm90YXRpb25ZLCByb3RhdGlvblgsIHNjYWxlWlxuXHRcdFx0XHQvLyBhMzMgIDEwICAgICAgcm90YXRpb25ZLCByb3RhdGlvblgsIHNjYWxlWlxuXHRcdFx0XHQvLyBhNDMgIDExICAgICAgcm90YXRpb25ZLCByb3RhdGlvblgsIHBlcnNwZWN0aXZlLCBzY2FsZVpcblx0XHRcdFx0Ly8gYTE0ICAxMiAgICAgIHgsIHpPcmlnaW4sIHN2Z09yaWdpblxuXHRcdFx0XHQvLyBhMjQgIDEzICAgICAgeSwgek9yaWdpbiwgc3ZnT3JpZ2luXG5cdFx0XHRcdC8vIGEzNCAgMTQgICAgICB6LCB6T3JpZ2luXG5cdFx0XHRcdC8vIGE0NCAgMTVcblx0XHRcdFx0Ly8gcm90YXRpb246IE1hdGguYXRhbjIoYTIxLCBhMTEpXG5cdFx0XHRcdC8vIHJvdGF0aW9uWTogTWF0aC5hdGFuMihhMTMsIGEzMykgKG9yIE1hdGguYXRhbjIoYTEzLCBhMTEpKVxuXHRcdFx0XHQvLyByb3RhdGlvblg6IE1hdGguYXRhbjIoYTMyLCBhMzMpXG5cdFx0XHRcdGEzMyA9IDE7XG5cdFx0XHRcdGExMyA9IGEyMyA9IGEzMSA9IGEzMiA9IGE0MSA9IGE0MiA9IDA7XG5cdFx0XHRcdGE0MyA9IChwZXJzcGVjdGl2ZSkgPyAtMSAvIHBlcnNwZWN0aXZlIDogMDtcblx0XHRcdFx0ek9yaWdpbiA9IHQuek9yaWdpbjtcblx0XHRcdFx0bWluID0gMC4wMDAwMDE7IC8vdGhyZXNob2xkIGJlbG93IHdoaWNoIGJyb3dzZXJzIHVzZSBzY2llbnRpZmljIG5vdGF0aW9uIHdoaWNoIHdvbid0IHdvcmsuXG5cdFx0XHRcdGNvbW1hID0gXCIsXCI7XG5cdFx0XHRcdHplcm8gPSBcIjBcIjtcblx0XHRcdFx0YW5nbGUgPSByb3RhdGlvblkgKiBfREVHMlJBRDtcblx0XHRcdFx0aWYgKGFuZ2xlKSB7XG5cdFx0XHRcdFx0Y29zID0gTWF0aC5jb3MoYW5nbGUpO1xuXHRcdFx0XHRcdHNpbiA9IE1hdGguc2luKGFuZ2xlKTtcblx0XHRcdFx0XHRhMzEgPSAtc2luO1xuXHRcdFx0XHRcdGE0MSA9IGE0Myotc2luO1xuXHRcdFx0XHRcdGExMyA9IGExMSpzaW47XG5cdFx0XHRcdFx0YTIzID0gYTIxKnNpbjtcblx0XHRcdFx0XHRhMzMgPSBjb3M7XG5cdFx0XHRcdFx0YTQzICo9IGNvcztcblx0XHRcdFx0XHRhMTEgKj0gY29zO1xuXHRcdFx0XHRcdGEyMSAqPSBjb3M7XG5cdFx0XHRcdH1cblx0XHRcdFx0YW5nbGUgPSByb3RhdGlvblggKiBfREVHMlJBRDtcblx0XHRcdFx0aWYgKGFuZ2xlKSB7XG5cdFx0XHRcdFx0Y29zID0gTWF0aC5jb3MoYW5nbGUpO1xuXHRcdFx0XHRcdHNpbiA9IE1hdGguc2luKGFuZ2xlKTtcblx0XHRcdFx0XHR0MSA9IGExMipjb3MrYTEzKnNpbjtcblx0XHRcdFx0XHR0MiA9IGEyMipjb3MrYTIzKnNpbjtcblx0XHRcdFx0XHRhMzIgPSBhMzMqc2luO1xuXHRcdFx0XHRcdGE0MiA9IGE0MypzaW47XG5cdFx0XHRcdFx0YTEzID0gYTEyKi1zaW4rYTEzKmNvcztcblx0XHRcdFx0XHRhMjMgPSBhMjIqLXNpbithMjMqY29zO1xuXHRcdFx0XHRcdGEzMyA9IGEzMypjb3M7XG5cdFx0XHRcdFx0YTQzID0gYTQzKmNvcztcblx0XHRcdFx0XHRhMTIgPSB0MTtcblx0XHRcdFx0XHRhMjIgPSB0Mjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoc3ogIT09IDEpIHtcblx0XHRcdFx0XHRhMTMqPXN6O1xuXHRcdFx0XHRcdGEyMyo9c3o7XG5cdFx0XHRcdFx0YTMzKj1zejtcblx0XHRcdFx0XHRhNDMqPXN6O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChzeSAhPT0gMSkge1xuXHRcdFx0XHRcdGExMio9c3k7XG5cdFx0XHRcdFx0YTIyKj1zeTtcblx0XHRcdFx0XHRhMzIqPXN5O1xuXHRcdFx0XHRcdGE0Mio9c3k7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHN4ICE9PSAxKSB7XG5cdFx0XHRcdFx0YTExKj1zeDtcblx0XHRcdFx0XHRhMjEqPXN4O1xuXHRcdFx0XHRcdGEzMSo9c3g7XG5cdFx0XHRcdFx0YTQxKj1zeDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICh6T3JpZ2luIHx8IGlzU1ZHKSB7XG5cdFx0XHRcdFx0aWYgKHpPcmlnaW4pIHtcblx0XHRcdFx0XHRcdHggKz0gYTEzKi16T3JpZ2luO1xuXHRcdFx0XHRcdFx0eSArPSBhMjMqLXpPcmlnaW47XG5cdFx0XHRcdFx0XHR6ICs9IGEzMyotek9yaWdpbit6T3JpZ2luO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoaXNTVkcpIHsgLy9kdWUgdG8gYnVncyBpbiBzb21lIGJyb3dzZXJzLCB3ZSBuZWVkIHRvIG1hbmFnZSB0aGUgdHJhbnNmb3JtLW9yaWdpbiBvZiBTVkcgbWFudWFsbHlcblx0XHRcdFx0XHRcdHggKz0gdC54T3JpZ2luIC0gKHQueE9yaWdpbiAqIGExMSArIHQueU9yaWdpbiAqIGExMik7XG5cdFx0XHRcdFx0XHR5ICs9IHQueU9yaWdpbiAtICh0LnhPcmlnaW4gKiBhMjEgKyB0LnlPcmlnaW4gKiBhMjIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoeCA8IG1pbiAmJiB4ID4gLW1pbikge1xuXHRcdFx0XHRcdFx0eCA9IHplcm87XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICh5IDwgbWluICYmIHkgPiAtbWluKSB7XG5cdFx0XHRcdFx0XHR5ID0gemVybztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHogPCBtaW4gJiYgeiA+IC1taW4pIHtcblx0XHRcdFx0XHRcdHogPSAwOyAvL2Rvbid0IHVzZSBzdHJpbmcgYmVjYXVzZSB3ZSBjYWxjdWxhdGUgcGVyc3BlY3RpdmUgbGF0ZXIgYW5kIG5lZWQgdGhlIG51bWJlci5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvL29wdGltaXplZCB3YXkgb2YgY29uY2F0ZW5hdGluZyBhbGwgdGhlIHZhbHVlcyBpbnRvIGEgc3RyaW5nLiBJZiB3ZSBkbyBpdCBhbGwgaW4gb25lIHNob3QsIGl0J3Mgc2xvd2VyIGJlY2F1c2Ugb2YgdGhlIHdheSBicm93c2VycyBoYXZlIHRvIGNyZWF0ZSB0ZW1wIHN0cmluZ3MgYW5kIHRoZSB3YXkgaXQgYWZmZWN0cyBtZW1vcnkuIElmIHdlIGRvIGl0IHBpZWNlLWJ5LXBpZWNlIHdpdGggKz0sIGl0J3MgYSBiaXQgc2xvd2VyIHRvby4gV2UgZm91bmQgdGhhdCBkb2luZyBpdCBpbiB0aGVzZSBzaXplZCBjaHVua3Mgd29ya3MgYmVzdCBvdmVyYWxsOlxuXHRcdFx0XHR0cmFuc2Zvcm0gPSAoKHQueFBlcmNlbnQgfHwgdC55UGVyY2VudCkgPyBcInRyYW5zbGF0ZShcIiArIHQueFBlcmNlbnQgKyBcIiUsXCIgKyB0LnlQZXJjZW50ICsgXCIlKSBtYXRyaXgzZChcIiA6IFwibWF0cml4M2QoXCIpO1xuXHRcdFx0XHR0cmFuc2Zvcm0gKz0gKChhMTEgPCBtaW4gJiYgYTExID4gLW1pbikgPyB6ZXJvIDogYTExKSArIGNvbW1hICsgKChhMjEgPCBtaW4gJiYgYTIxID4gLW1pbikgPyB6ZXJvIDogYTIxKSArIGNvbW1hICsgKChhMzEgPCBtaW4gJiYgYTMxID4gLW1pbikgPyB6ZXJvIDogYTMxKTtcblx0XHRcdFx0dHJhbnNmb3JtICs9IGNvbW1hICsgKChhNDEgPCBtaW4gJiYgYTQxID4gLW1pbikgPyB6ZXJvIDogYTQxKSArIGNvbW1hICsgKChhMTIgPCBtaW4gJiYgYTEyID4gLW1pbikgPyB6ZXJvIDogYTEyKSArIGNvbW1hICsgKChhMjIgPCBtaW4gJiYgYTIyID4gLW1pbikgPyB6ZXJvIDogYTIyKTtcblx0XHRcdFx0aWYgKHJvdGF0aW9uWCB8fCByb3RhdGlvblkpIHsgLy9wZXJmb3JtYW5jZSBvcHRpbWl6YXRpb24gKG9mdGVuIHRoZXJlJ3Mgbm8gcm90YXRpb25YIG9yIHJvdGF0aW9uWSwgc28gd2UgY2FuIHNraXAgdGhlc2UgY2FsY3VsYXRpb25zKVxuXHRcdFx0XHRcdHRyYW5zZm9ybSArPSBjb21tYSArICgoYTMyIDwgbWluICYmIGEzMiA+IC1taW4pID8gemVybyA6IGEzMikgKyBjb21tYSArICgoYTQyIDwgbWluICYmIGE0MiA+IC1taW4pID8gemVybyA6IGE0MikgKyBjb21tYSArICgoYTEzIDwgbWluICYmIGExMyA+IC1taW4pID8gemVybyA6IGExMyk7XG5cdFx0XHRcdFx0dHJhbnNmb3JtICs9IGNvbW1hICsgKChhMjMgPCBtaW4gJiYgYTIzID4gLW1pbikgPyB6ZXJvIDogYTIzKSArIGNvbW1hICsgKChhMzMgPCBtaW4gJiYgYTMzID4gLW1pbikgPyB6ZXJvIDogYTMzKSArIGNvbW1hICsgKChhNDMgPCBtaW4gJiYgYTQzID4gLW1pbikgPyB6ZXJvIDogYTQzKSArIGNvbW1hO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRyYW5zZm9ybSArPSBcIiwwLDAsMCwwLDEsMCxcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHR0cmFuc2Zvcm0gKz0geCArIGNvbW1hICsgeSArIGNvbW1hICsgeiArIGNvbW1hICsgKHBlcnNwZWN0aXZlID8gKDEgKyAoLXogLyBwZXJzcGVjdGl2ZSkpIDogMSkgKyBcIilcIjtcblxuXHRcdFx0XHRzdHlsZVtfdHJhbnNmb3JtUHJvcF0gPSB0cmFuc2Zvcm07XG5cdFx0XHR9O1xuXG5cdFx0cCA9IFRyYW5zZm9ybS5wcm90b3R5cGU7XG5cdFx0cC54ID0gcC55ID0gcC56ID0gcC5za2V3WCA9IHAuc2tld1kgPSBwLnJvdGF0aW9uID0gcC5yb3RhdGlvblggPSBwLnJvdGF0aW9uWSA9IHAuek9yaWdpbiA9IHAueFBlcmNlbnQgPSBwLnlQZXJjZW50ID0gMDtcblx0XHRwLnNjYWxlWCA9IHAuc2NhbGVZID0gcC5zY2FsZVogPSAxO1xuXG5cdFx0X3JlZ2lzdGVyQ29tcGxleFNwZWNpYWxQcm9wKFwidHJhbnNmb3JtLHNjYWxlLHNjYWxlWCxzY2FsZVksc2NhbGVaLHgseSx6LHJvdGF0aW9uLHJvdGF0aW9uWCxyb3RhdGlvblkscm90YXRpb25aLHNrZXdYLHNrZXdZLHNob3J0Um90YXRpb24sc2hvcnRSb3RhdGlvblgsc2hvcnRSb3RhdGlvblksc2hvcnRSb3RhdGlvblosdHJhbnNmb3JtT3JpZ2luLHN2Z09yaWdpbix0cmFuc2Zvcm1QZXJzcGVjdGl2ZSxkaXJlY3Rpb25hbFJvdGF0aW9uLHBhcnNlVHJhbnNmb3JtLGZvcmNlM0Qsc2tld1R5cGUseFBlcmNlbnQseVBlcmNlbnRcIiwge3BhcnNlcjpmdW5jdGlvbih0LCBlLCBwLCBjc3NwLCBwdCwgcGx1Z2luLCB2YXJzKSB7XG5cdFx0XHRpZiAoY3NzcC5fbGFzdFBhcnNlZFRyYW5zZm9ybSA9PT0gdmFycykgeyByZXR1cm4gcHQ7IH0gLy9vbmx5IG5lZWQgdG8gcGFyc2UgdGhlIHRyYW5zZm9ybSBvbmNlLCBhbmQgb25seSBpZiB0aGUgYnJvd3NlciBzdXBwb3J0cyBpdC5cblx0XHRcdGNzc3AuX2xhc3RQYXJzZWRUcmFuc2Zvcm0gPSB2YXJzO1xuXHRcdFx0dmFyIG0xID0gY3NzcC5fdHJhbnNmb3JtID0gX2dldFRyYW5zZm9ybSh0LCBfY3MsIHRydWUsIHZhcnMucGFyc2VUcmFuc2Zvcm0pLFxuXHRcdFx0XHRzdHlsZSA9IHQuc3R5bGUsXG5cdFx0XHRcdG1pbiA9IDAuMDAwMDAxLFxuXHRcdFx0XHRpID0gX3RyYW5zZm9ybVByb3BzLmxlbmd0aCxcblx0XHRcdFx0diA9IHZhcnMsXG5cdFx0XHRcdGVuZFJvdGF0aW9ucyA9IHt9LFxuXHRcdFx0XHRtMiwgc2tld1ksIGNvcHksIG9yaWcsIGhhczNELCBoYXNDaGFuZ2UsIGRyO1xuXHRcdFx0aWYgKHR5cGVvZih2LnRyYW5zZm9ybSkgPT09IFwic3RyaW5nXCIgJiYgX3RyYW5zZm9ybVByb3ApIHsgLy9mb3IgdmFsdWVzIGxpa2UgdHJhbnNmb3JtOlwicm90YXRlKDYwZGVnKSBzY2FsZSgwLjUsIDAuOClcIlxuXHRcdFx0XHRjb3B5ID0gX3RlbXBEaXYuc3R5bGU7IC8vZG9uJ3QgdXNlIHRoZSBvcmlnaW5hbCB0YXJnZXQgYmVjYXVzZSBpdCBtaWdodCBiZSBTVkcgaW4gd2hpY2ggY2FzZSBzb21lIGJyb3dzZXJzIGRvbid0IHJlcG9ydCBjb21wdXRlZCBzdHlsZSBjb3JyZWN0bHkuXG5cdFx0XHRcdGNvcHlbX3RyYW5zZm9ybVByb3BdID0gdi50cmFuc2Zvcm07XG5cdFx0XHRcdGNvcHkuZGlzcGxheSA9IFwiYmxvY2tcIjsgLy9pZiBkaXNwbGF5IGlzIFwibm9uZVwiLCB0aGUgYnJvd3NlciBvZnRlbiByZWZ1c2VzIHRvIHJlcG9ydCB0aGUgdHJhbnNmb3JtIHByb3BlcnRpZXMgY29ycmVjdGx5LlxuXHRcdFx0XHRjb3B5LnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuXHRcdFx0XHRfZG9jLmJvZHkuYXBwZW5kQ2hpbGQoX3RlbXBEaXYpO1xuXHRcdFx0XHRtMiA9IF9nZXRUcmFuc2Zvcm0oX3RlbXBEaXYsIG51bGwsIGZhbHNlKTtcblx0XHRcdFx0X2RvYy5ib2R5LnJlbW92ZUNoaWxkKF90ZW1wRGl2KTtcblx0XHRcdH0gZWxzZSBpZiAodHlwZW9mKHYpID09PSBcIm9iamVjdFwiKSB7IC8vZm9yIHZhbHVlcyBsaWtlIHNjYWxlWCwgc2NhbGVZLCByb3RhdGlvbiwgeCwgeSwgc2tld1gsIGFuZCBza2V3WSBvciB0cmFuc2Zvcm06ey4uLn0gKG9iamVjdClcblx0XHRcdFx0bTIgPSB7c2NhbGVYOl9wYXJzZVZhbCgodi5zY2FsZVggIT0gbnVsbCkgPyB2LnNjYWxlWCA6IHYuc2NhbGUsIG0xLnNjYWxlWCksXG5cdFx0XHRcdFx0c2NhbGVZOl9wYXJzZVZhbCgodi5zY2FsZVkgIT0gbnVsbCkgPyB2LnNjYWxlWSA6IHYuc2NhbGUsIG0xLnNjYWxlWSksXG5cdFx0XHRcdFx0c2NhbGVaOl9wYXJzZVZhbCh2LnNjYWxlWiwgbTEuc2NhbGVaKSxcblx0XHRcdFx0XHR4Ol9wYXJzZVZhbCh2LngsIG0xLngpLFxuXHRcdFx0XHRcdHk6X3BhcnNlVmFsKHYueSwgbTEueSksXG5cdFx0XHRcdFx0ejpfcGFyc2VWYWwodi56LCBtMS56KSxcblx0XHRcdFx0XHR4UGVyY2VudDpfcGFyc2VWYWwodi54UGVyY2VudCwgbTEueFBlcmNlbnQpLFxuXHRcdFx0XHRcdHlQZXJjZW50Ol9wYXJzZVZhbCh2LnlQZXJjZW50LCBtMS55UGVyY2VudCksXG5cdFx0XHRcdFx0cGVyc3BlY3RpdmU6X3BhcnNlVmFsKHYudHJhbnNmb3JtUGVyc3BlY3RpdmUsIG0xLnBlcnNwZWN0aXZlKX07XG5cdFx0XHRcdGRyID0gdi5kaXJlY3Rpb25hbFJvdGF0aW9uO1xuXHRcdFx0XHRpZiAoZHIgIT0gbnVsbCkge1xuXHRcdFx0XHRcdGlmICh0eXBlb2YoZHIpID09PSBcIm9iamVjdFwiKSB7XG5cdFx0XHRcdFx0XHRmb3IgKGNvcHkgaW4gZHIpIHtcblx0XHRcdFx0XHRcdFx0dltjb3B5XSA9IGRyW2NvcHldO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR2LnJvdGF0aW9uID0gZHI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0eXBlb2Yodi54KSA9PT0gXCJzdHJpbmdcIiAmJiB2LnguaW5kZXhPZihcIiVcIikgIT09IC0xKSB7XG5cdFx0XHRcdFx0bTIueCA9IDA7XG5cdFx0XHRcdFx0bTIueFBlcmNlbnQgPSBfcGFyc2VWYWwodi54LCBtMS54UGVyY2VudCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHR5cGVvZih2LnkpID09PSBcInN0cmluZ1wiICYmIHYueS5pbmRleE9mKFwiJVwiKSAhPT0gLTEpIHtcblx0XHRcdFx0XHRtMi55ID0gMDtcblx0XHRcdFx0XHRtMi55UGVyY2VudCA9IF9wYXJzZVZhbCh2LnksIG0xLnlQZXJjZW50KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdG0yLnJvdGF0aW9uID0gX3BhcnNlQW5nbGUoKFwicm90YXRpb25cIiBpbiB2KSA/IHYucm90YXRpb24gOiAoXCJzaG9ydFJvdGF0aW9uXCIgaW4gdikgPyB2LnNob3J0Um90YXRpb24gKyBcIl9zaG9ydFwiIDogKFwicm90YXRpb25aXCIgaW4gdikgPyB2LnJvdGF0aW9uWiA6IG0xLnJvdGF0aW9uLCBtMS5yb3RhdGlvbiwgXCJyb3RhdGlvblwiLCBlbmRSb3RhdGlvbnMpO1xuXHRcdFx0XHRpZiAoX3N1cHBvcnRzM0QpIHtcblx0XHRcdFx0XHRtMi5yb3RhdGlvblggPSBfcGFyc2VBbmdsZSgoXCJyb3RhdGlvblhcIiBpbiB2KSA/IHYucm90YXRpb25YIDogKFwic2hvcnRSb3RhdGlvblhcIiBpbiB2KSA/IHYuc2hvcnRSb3RhdGlvblggKyBcIl9zaG9ydFwiIDogbTEucm90YXRpb25YIHx8IDAsIG0xLnJvdGF0aW9uWCwgXCJyb3RhdGlvblhcIiwgZW5kUm90YXRpb25zKTtcblx0XHRcdFx0XHRtMi5yb3RhdGlvblkgPSBfcGFyc2VBbmdsZSgoXCJyb3RhdGlvbllcIiBpbiB2KSA/IHYucm90YXRpb25ZIDogKFwic2hvcnRSb3RhdGlvbllcIiBpbiB2KSA/IHYuc2hvcnRSb3RhdGlvblkgKyBcIl9zaG9ydFwiIDogbTEucm90YXRpb25ZIHx8IDAsIG0xLnJvdGF0aW9uWSwgXCJyb3RhdGlvbllcIiwgZW5kUm90YXRpb25zKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRtMi5za2V3WCA9ICh2LnNrZXdYID09IG51bGwpID8gbTEuc2tld1ggOiBfcGFyc2VBbmdsZSh2LnNrZXdYLCBtMS5za2V3WCk7XG5cblx0XHRcdFx0Ly9ub3RlOiBmb3IgcGVyZm9ybWFuY2UgcmVhc29ucywgd2UgY29tYmluZSBhbGwgc2tld2luZyBpbnRvIHRoZSBza2V3WCBhbmQgcm90YXRpb24gdmFsdWVzLCBpZ25vcmluZyBza2V3WSBidXQgd2UgbXVzdCBzdGlsbCByZWNvcmQgaXQgc28gdGhhdCB3ZSBjYW4gZGlzY2VybiBob3cgbXVjaCBvZiB0aGUgb3ZlcmFsbCBza2V3IGlzIGF0dHJpYnV0ZWQgdG8gc2tld1ggdnMuIHNrZXdZLiBPdGhlcndpc2UsIGlmIHRoZSBza2V3WSB3b3VsZCBhbHdheXMgYWN0IHJlbGF0aXZlICh0d2VlbiBza2V3WSB0byAxMGRlZywgZm9yIGV4YW1wbGUsIG11bHRpcGxlIHRpbWVzIGFuZCBpZiB3ZSBhbHdheXMgY29tYmluZSB0aGluZ3MgaW50byBza2V3WCwgd2UgY2FuJ3QgcmVtZW1iZXIgdGhhdCBza2V3WSB3YXMgMTAgZnJvbSBsYXN0IHRpbWUpLiBSZW1lbWJlciwgYSBza2V3WSBvZiAxMCBkZWdyZWVzIGxvb2tzIHRoZSBzYW1lIGFzIGEgcm90YXRpb24gb2YgMTAgZGVncmVlcyBwbHVzIGEgc2tld1ggb2YgLTEwIGRlZ3JlZXMuXG5cdFx0XHRcdG0yLnNrZXdZID0gKHYuc2tld1kgPT0gbnVsbCkgPyBtMS5za2V3WSA6IF9wYXJzZUFuZ2xlKHYuc2tld1ksIG0xLnNrZXdZKTtcblx0XHRcdFx0aWYgKChza2V3WSA9IG0yLnNrZXdZIC0gbTEuc2tld1kpKSB7XG5cdFx0XHRcdFx0bTIuc2tld1ggKz0gc2tld1k7XG5cdFx0XHRcdFx0bTIucm90YXRpb24gKz0gc2tld1k7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChfc3VwcG9ydHMzRCAmJiB2LmZvcmNlM0QgIT0gbnVsbCkge1xuXHRcdFx0XHRtMS5mb3JjZTNEID0gdi5mb3JjZTNEO1xuXHRcdFx0XHRoYXNDaGFuZ2UgPSB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRtMS5za2V3VHlwZSA9IHYuc2tld1R5cGUgfHwgbTEuc2tld1R5cGUgfHwgQ1NTUGx1Z2luLmRlZmF1bHRTa2V3VHlwZTtcblxuXHRcdFx0aGFzM0QgPSAobTEuZm9yY2UzRCB8fCBtMS56IHx8IG0xLnJvdGF0aW9uWCB8fCBtMS5yb3RhdGlvblkgfHwgbTIueiB8fCBtMi5yb3RhdGlvblggfHwgbTIucm90YXRpb25ZIHx8IG0yLnBlcnNwZWN0aXZlKTtcblx0XHRcdGlmICghaGFzM0QgJiYgdi5zY2FsZSAhPSBudWxsKSB7XG5cdFx0XHRcdG0yLnNjYWxlWiA9IDE7IC8vbm8gbmVlZCB0byB0d2VlbiBzY2FsZVouXG5cdFx0XHR9XG5cblx0XHRcdHdoaWxlICgtLWkgPiAtMSkge1xuXHRcdFx0XHRwID0gX3RyYW5zZm9ybVByb3BzW2ldO1xuXHRcdFx0XHRvcmlnID0gbTJbcF0gLSBtMVtwXTtcblx0XHRcdFx0aWYgKG9yaWcgPiBtaW4gfHwgb3JpZyA8IC1taW4gfHwgdltwXSAhPSBudWxsIHx8IF9mb3JjZVBUW3BdICE9IG51bGwpIHtcblx0XHRcdFx0XHRoYXNDaGFuZ2UgPSB0cnVlO1xuXHRcdFx0XHRcdHB0ID0gbmV3IENTU1Byb3BUd2VlbihtMSwgcCwgbTFbcF0sIG9yaWcsIHB0KTtcblx0XHRcdFx0XHRpZiAocCBpbiBlbmRSb3RhdGlvbnMpIHtcblx0XHRcdFx0XHRcdHB0LmUgPSBlbmRSb3RhdGlvbnNbcF07IC8vZGlyZWN0aW9uYWwgcm90YXRpb25zIHR5cGljYWxseSBoYXZlIGNvbXBlbnNhdGVkIHZhbHVlcyBkdXJpbmcgdGhlIHR3ZWVuLCBidXQgd2UgbmVlZCB0byBtYWtlIHN1cmUgdGhleSBlbmQgYXQgZXhhY3RseSB3aGF0IHRoZSB1c2VyIHJlcXVlc3RlZFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRwdC54czAgPSAwOyAvL2Vuc3VyZXMgdGhlIHZhbHVlIHN0YXlzIG51bWVyaWMgaW4gc2V0UmF0aW8oKVxuXHRcdFx0XHRcdHB0LnBsdWdpbiA9IHBsdWdpbjtcblx0XHRcdFx0XHRjc3NwLl9vdmVyd3JpdGVQcm9wcy5wdXNoKHB0Lm4pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdG9yaWcgPSB2LnRyYW5zZm9ybU9yaWdpbjtcblx0XHRcdGlmIChtMS5zdmcgJiYgKG9yaWcgfHwgdi5zdmdPcmlnaW4pKSB7XG5cdFx0XHRcdF9wYXJzZVNWR09yaWdpbih0LCBfcGFyc2VQb3NpdGlvbihvcmlnKSwgbTIsIHYuc3ZnT3JpZ2luKTtcblx0XHRcdFx0cHQgPSBuZXcgQ1NTUHJvcFR3ZWVuKG0xLCBcInhPcmlnaW5cIiwgbTEueE9yaWdpbiwgbTIueE9yaWdpbiAtIG0xLnhPcmlnaW4sIHB0LCAtMSwgXCJ0cmFuc2Zvcm1PcmlnaW5cIik7XG5cdFx0XHRcdHB0LmIgPSBtMS54T3JpZ2luO1xuXHRcdFx0XHRwdC5lID0gcHQueHMwID0gbTIueE9yaWdpbjtcblx0XHRcdFx0cHQgPSBuZXcgQ1NTUHJvcFR3ZWVuKG0xLCBcInlPcmlnaW5cIiwgbTEueU9yaWdpbiwgbTIueU9yaWdpbiAtIG0xLnlPcmlnaW4sIHB0LCAtMSwgXCJ0cmFuc2Zvcm1PcmlnaW5cIik7XG5cdFx0XHRcdHB0LmIgPSBtMS55T3JpZ2luO1xuXHRcdFx0XHRwdC5lID0gcHQueHMwID0gbTIueU9yaWdpbjtcblx0XHRcdFx0b3JpZyA9IF91c2VTVkdUcmFuc2Zvcm1BdHRyID8gbnVsbCA6IFwiMHB4IDBweFwiOyAvL2NlcnRhaW4gYnJvd3NlcnMgKGxpa2UgZmlyZWZveCkgY29tcGxldGVseSBib3RjaCB0cmFuc2Zvcm0tb3JpZ2luLCBzbyB3ZSBtdXN0IHJlbW92ZSBpdCB0byBwcmV2ZW50IGl0IGZyb20gY29udGFtaW5hdGluZyB0cmFuc2Zvcm1zLiBXZSBtYW5hZ2UgaXQgb3Vyc2VsdmVzIHdpdGggeE9yaWdpbiBhbmQgeU9yaWdpblxuXHRcdFx0fVxuXHRcdFx0aWYgKG9yaWcgfHwgKF9zdXBwb3J0czNEICYmIGhhczNEICYmIG0xLnpPcmlnaW4pKSB7IC8vaWYgYW55dGhpbmcgM0QgaXMgaGFwcGVuaW5nIGFuZCB0aGVyZSdzIGEgdHJhbnNmb3JtT3JpZ2luIHdpdGggYSB6IGNvbXBvbmVudCB0aGF0J3Mgbm9uLXplcm8sIHdlIG11c3QgZW5zdXJlIHRoYXQgdGhlIHRyYW5zZm9ybU9yaWdpbidzIHotY29tcG9uZW50IGlzIHNldCB0byAwIHNvIHRoYXQgd2UgY2FuIG1hbnVhbGx5IGRvIHRob3NlIGNhbGN1bGF0aW9ucyB0byBnZXQgYXJvdW5kIFNhZmFyaSBidWdzLiBFdmVuIGlmIHRoZSB1c2VyIGRpZG4ndCBzcGVjaWZpY2FsbHkgZGVmaW5lIGEgXCJ0cmFuc2Zvcm1PcmlnaW5cIiBpbiB0aGlzIHBhcnRpY3VsYXIgdHdlZW4gKG1heWJlIHRoZXkgZGlkIGl0IHZpYSBjc3MgZGlyZWN0bHkpLlxuXHRcdFx0XHRpZiAoX3RyYW5zZm9ybVByb3ApIHtcblx0XHRcdFx0XHRoYXNDaGFuZ2UgPSB0cnVlO1xuXHRcdFx0XHRcdHAgPSBfdHJhbnNmb3JtT3JpZ2luUHJvcDtcblx0XHRcdFx0XHRvcmlnID0gKG9yaWcgfHwgX2dldFN0eWxlKHQsIHAsIF9jcywgZmFsc2UsIFwiNTAlIDUwJVwiKSkgKyBcIlwiOyAvL2Nhc3QgYXMgc3RyaW5nIHRvIGF2b2lkIGVycm9yc1xuXHRcdFx0XHRcdHB0ID0gbmV3IENTU1Byb3BUd2VlbihzdHlsZSwgcCwgMCwgMCwgcHQsIC0xLCBcInRyYW5zZm9ybU9yaWdpblwiKTtcblx0XHRcdFx0XHRwdC5iID0gc3R5bGVbcF07XG5cdFx0XHRcdFx0cHQucGx1Z2luID0gcGx1Z2luO1xuXHRcdFx0XHRcdGlmIChfc3VwcG9ydHMzRCkge1xuXHRcdFx0XHRcdFx0Y29weSA9IG0xLnpPcmlnaW47XG5cdFx0XHRcdFx0XHRvcmlnID0gb3JpZy5zcGxpdChcIiBcIik7XG5cdFx0XHRcdFx0XHRtMS56T3JpZ2luID0gKChvcmlnLmxlbmd0aCA+IDIgJiYgIShjb3B5ICE9PSAwICYmIG9yaWdbMl0gPT09IFwiMHB4XCIpKSA/IHBhcnNlRmxvYXQob3JpZ1syXSkgOiBjb3B5KSB8fCAwOyAvL1NhZmFyaSBkb2Vzbid0IGhhbmRsZSB0aGUgeiBwYXJ0IG9mIHRyYW5zZm9ybU9yaWdpbiBjb3JyZWN0bHksIHNvIHdlJ2xsIG1hbnVhbGx5IGhhbmRsZSBpdCBpbiB0aGUgX3NldDNEVHJhbnNmb3JtUmF0aW8oKSBtZXRob2QuXG5cdFx0XHRcdFx0XHRwdC54czAgPSBwdC5lID0gb3JpZ1swXSArIFwiIFwiICsgKG9yaWdbMV0gfHwgXCI1MCVcIikgKyBcIiAwcHhcIjsgLy93ZSBtdXN0IGRlZmluZSBhIHogdmFsdWUgb2YgMHB4IHNwZWNpZmljYWxseSBvdGhlcndpc2UgaU9TIDUgU2FmYXJpIHdpbGwgc3RpY2sgd2l0aCB0aGUgb2xkIG9uZSAoaWYgb25lIHdhcyBkZWZpbmVkKSFcblx0XHRcdFx0XHRcdHB0ID0gbmV3IENTU1Byb3BUd2VlbihtMSwgXCJ6T3JpZ2luXCIsIDAsIDAsIHB0LCAtMSwgcHQubik7IC8vd2UgbXVzdCBjcmVhdGUgYSBDU1NQcm9wVHdlZW4gZm9yIHRoZSBfZ3NUcmFuc2Zvcm0uek9yaWdpbiBzbyB0aGF0IGl0IGdldHMgcmVzZXQgcHJvcGVybHkgYXQgdGhlIGJlZ2lubmluZyBpZiB0aGUgdHdlZW4gcnVucyBiYWNrd2FyZCAoYXMgb3Bwb3NlZCB0byBqdXN0IHNldHRpbmcgbTEuek9yaWdpbiBoZXJlKVxuXHRcdFx0XHRcdFx0cHQuYiA9IGNvcHk7XG5cdFx0XHRcdFx0XHRwdC54czAgPSBwdC5lID0gbTEuek9yaWdpbjtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cHQueHMwID0gcHQuZSA9IG9yaWc7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly9mb3Igb2xkZXIgdmVyc2lvbnMgb2YgSUUgKDYtOCksIHdlIG5lZWQgdG8gbWFudWFsbHkgY2FsY3VsYXRlIHRoaW5ncyBpbnNpZGUgdGhlIHNldFJhdGlvKCkgZnVuY3Rpb24uIFdlIHJlY29yZCBvcmlnaW4geCBhbmQgeSAob3ggYW5kIG95KSBhbmQgd2hldGhlciBvciBub3QgdGhlIHZhbHVlcyBhcmUgcGVyY2VudGFnZXMgKG94cCBhbmQgb3lwKS5cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRfcGFyc2VQb3NpdGlvbihvcmlnICsgXCJcIiwgbTEpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoaGFzQ2hhbmdlKSB7XG5cdFx0XHRcdGNzc3AuX3RyYW5zZm9ybVR5cGUgPSAoIShtMS5zdmcgJiYgX3VzZVNWR1RyYW5zZm9ybUF0dHIpICYmIChoYXMzRCB8fCB0aGlzLl90cmFuc2Zvcm1UeXBlID09PSAzKSkgPyAzIDogMjsgLy9xdWlja2VyIHRoYW4gY2FsbGluZyBjc3NwLl9lbmFibGVUcmFuc2Zvcm1zKCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcHQ7XG5cdFx0fSwgcHJlZml4OnRydWV9KTtcblxuXHRcdF9yZWdpc3RlckNvbXBsZXhTcGVjaWFsUHJvcChcImJveFNoYWRvd1wiLCB7ZGVmYXVsdFZhbHVlOlwiMHB4IDBweCAwcHggMHB4ICM5OTlcIiwgcHJlZml4OnRydWUsIGNvbG9yOnRydWUsIG11bHRpOnRydWUsIGtleXdvcmQ6XCJpbnNldFwifSk7XG5cblx0XHRfcmVnaXN0ZXJDb21wbGV4U3BlY2lhbFByb3AoXCJib3JkZXJSYWRpdXNcIiwge2RlZmF1bHRWYWx1ZTpcIjBweFwiLCBwYXJzZXI6ZnVuY3Rpb24odCwgZSwgcCwgY3NzcCwgcHQsIHBsdWdpbikge1xuXHRcdFx0ZSA9IHRoaXMuZm9ybWF0KGUpO1xuXHRcdFx0dmFyIHByb3BzID0gW1wiYm9yZGVyVG9wTGVmdFJhZGl1c1wiLFwiYm9yZGVyVG9wUmlnaHRSYWRpdXNcIixcImJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzXCIsXCJib3JkZXJCb3R0b21MZWZ0UmFkaXVzXCJdLFxuXHRcdFx0XHRzdHlsZSA9IHQuc3R5bGUsXG5cdFx0XHRcdGVhMSwgaSwgZXMyLCBiczIsIGJzLCBlcywgYm4sIGVuLCB3LCBoLCBlc2Z4LCBic2Z4LCByZWwsIGhuLCB2biwgZW07XG5cdFx0XHR3ID0gcGFyc2VGbG9hdCh0Lm9mZnNldFdpZHRoKTtcblx0XHRcdGggPSBwYXJzZUZsb2F0KHQub2Zmc2V0SGVpZ2h0KTtcblx0XHRcdGVhMSA9IGUuc3BsaXQoXCIgXCIpO1xuXHRcdFx0Zm9yIChpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IC8vaWYgd2UncmUgZGVhbGluZyB3aXRoIHBlcmNlbnRhZ2VzLCB3ZSBtdXN0IGNvbnZlcnQgdGhpbmdzIHNlcGFyYXRlbHkgZm9yIHRoZSBob3Jpem9udGFsIGFuZCB2ZXJ0aWNhbCBheGlzIVxuXHRcdFx0XHRpZiAodGhpcy5wLmluZGV4T2YoXCJib3JkZXJcIikpIHsgLy9vbGRlciBicm93c2VycyB1c2VkIGEgcHJlZml4XG5cdFx0XHRcdFx0cHJvcHNbaV0gPSBfY2hlY2tQcm9wUHJlZml4KHByb3BzW2ldKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicyA9IGJzMiA9IF9nZXRTdHlsZSh0LCBwcm9wc1tpXSwgX2NzLCBmYWxzZSwgXCIwcHhcIik7XG5cdFx0XHRcdGlmIChicy5pbmRleE9mKFwiIFwiKSAhPT0gLTEpIHtcblx0XHRcdFx0XHRiczIgPSBicy5zcGxpdChcIiBcIik7XG5cdFx0XHRcdFx0YnMgPSBiczJbMF07XG5cdFx0XHRcdFx0YnMyID0gYnMyWzFdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVzID0gZXMyID0gZWExW2ldO1xuXHRcdFx0XHRibiA9IHBhcnNlRmxvYXQoYnMpO1xuXHRcdFx0XHRic2Z4ID0gYnMuc3Vic3RyKChibiArIFwiXCIpLmxlbmd0aCk7XG5cdFx0XHRcdHJlbCA9IChlcy5jaGFyQXQoMSkgPT09IFwiPVwiKTtcblx0XHRcdFx0aWYgKHJlbCkge1xuXHRcdFx0XHRcdGVuID0gcGFyc2VJbnQoZXMuY2hhckF0KDApK1wiMVwiLCAxMCk7XG5cdFx0XHRcdFx0ZXMgPSBlcy5zdWJzdHIoMik7XG5cdFx0XHRcdFx0ZW4gKj0gcGFyc2VGbG9hdChlcyk7XG5cdFx0XHRcdFx0ZXNmeCA9IGVzLnN1YnN0cigoZW4gKyBcIlwiKS5sZW5ndGggLSAoZW4gPCAwID8gMSA6IDApKSB8fCBcIlwiO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGVuID0gcGFyc2VGbG9hdChlcyk7XG5cdFx0XHRcdFx0ZXNmeCA9IGVzLnN1YnN0cigoZW4gKyBcIlwiKS5sZW5ndGgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChlc2Z4ID09PSBcIlwiKSB7XG5cdFx0XHRcdFx0ZXNmeCA9IF9zdWZmaXhNYXBbcF0gfHwgYnNmeDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZXNmeCAhPT0gYnNmeCkge1xuXHRcdFx0XHRcdGhuID0gX2NvbnZlcnRUb1BpeGVscyh0LCBcImJvcmRlckxlZnRcIiwgYm4sIGJzZngpOyAvL2hvcml6b250YWwgbnVtYmVyICh3ZSB1c2UgYSBib2d1cyBcImJvcmRlckxlZnRcIiBwcm9wZXJ0eSBqdXN0IGJlY2F1c2UgdGhlIF9jb252ZXJ0VG9QaXhlbHMoKSBtZXRob2Qgc2VhcmNoZXMgZm9yIHRoZSBrZXl3b3JkcyBcIkxlZnRcIiwgXCJSaWdodFwiLCBcIlRvcFwiLCBhbmQgXCJCb3R0b21cIiB0byBkZXRlcm1pbmUgb2YgaXQncyBhIGhvcml6b250YWwgb3IgdmVydGljYWwgcHJvcGVydHksIGFuZCB3ZSBuZWVkIFwiYm9yZGVyXCIgaW4gdGhlIG5hbWUgc28gdGhhdCBpdCBrbm93cyBpdCBzaG91bGQgbWVhc3VyZSByZWxhdGl2ZSB0byB0aGUgZWxlbWVudCBpdHNlbGYsIG5vdCBpdHMgcGFyZW50LlxuXHRcdFx0XHRcdHZuID0gX2NvbnZlcnRUb1BpeGVscyh0LCBcImJvcmRlclRvcFwiLCBibiwgYnNmeCk7IC8vdmVydGljYWwgbnVtYmVyXG5cdFx0XHRcdFx0aWYgKGVzZnggPT09IFwiJVwiKSB7XG5cdFx0XHRcdFx0XHRicyA9IChobiAvIHcgKiAxMDApICsgXCIlXCI7XG5cdFx0XHRcdFx0XHRiczIgPSAodm4gLyBoICogMTAwKSArIFwiJVwiO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoZXNmeCA9PT0gXCJlbVwiKSB7XG5cdFx0XHRcdFx0XHRlbSA9IF9jb252ZXJ0VG9QaXhlbHModCwgXCJib3JkZXJMZWZ0XCIsIDEsIFwiZW1cIik7XG5cdFx0XHRcdFx0XHRicyA9IChobiAvIGVtKSArIFwiZW1cIjtcblx0XHRcdFx0XHRcdGJzMiA9ICh2biAvIGVtKSArIFwiZW1cIjtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0YnMgPSBobiArIFwicHhcIjtcblx0XHRcdFx0XHRcdGJzMiA9IHZuICsgXCJweFwiO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAocmVsKSB7XG5cdFx0XHRcdFx0XHRlcyA9IChwYXJzZUZsb2F0KGJzKSArIGVuKSArIGVzZng7XG5cdFx0XHRcdFx0XHRlczIgPSAocGFyc2VGbG9hdChiczIpICsgZW4pICsgZXNmeDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0cHQgPSBfcGFyc2VDb21wbGV4KHN0eWxlLCBwcm9wc1tpXSwgYnMgKyBcIiBcIiArIGJzMiwgZXMgKyBcIiBcIiArIGVzMiwgZmFsc2UsIFwiMHB4XCIsIHB0KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBwdDtcblx0XHR9LCBwcmVmaXg6dHJ1ZSwgZm9ybWF0dGVyOl9nZXRGb3JtYXR0ZXIoXCIwcHggMHB4IDBweCAwcHhcIiwgZmFsc2UsIHRydWUpfSk7XG5cdFx0X3JlZ2lzdGVyQ29tcGxleFNwZWNpYWxQcm9wKFwiYmFja2dyb3VuZFBvc2l0aW9uXCIsIHtkZWZhdWx0VmFsdWU6XCIwIDBcIiwgcGFyc2VyOmZ1bmN0aW9uKHQsIGUsIHAsIGNzc3AsIHB0LCBwbHVnaW4pIHtcblx0XHRcdHZhciBicCA9IFwiYmFja2dyb3VuZC1wb3NpdGlvblwiLFxuXHRcdFx0XHRjcyA9IChfY3MgfHwgX2dldENvbXB1dGVkU3R5bGUodCwgbnVsbCkpLFxuXHRcdFx0XHRicyA9IHRoaXMuZm9ybWF0KCAoKGNzKSA/IF9pZVZlcnMgPyBjcy5nZXRQcm9wZXJ0eVZhbHVlKGJwICsgXCIteFwiKSArIFwiIFwiICsgY3MuZ2V0UHJvcGVydHlWYWx1ZShicCArIFwiLXlcIikgOiBjcy5nZXRQcm9wZXJ0eVZhbHVlKGJwKSA6IHQuY3VycmVudFN0eWxlLmJhY2tncm91bmRQb3NpdGlvblggKyBcIiBcIiArIHQuY3VycmVudFN0eWxlLmJhY2tncm91bmRQb3NpdGlvblkpIHx8IFwiMCAwXCIpLCAvL0ludGVybmV0IEV4cGxvcmVyIGRvZXNuJ3QgcmVwb3J0IGJhY2tncm91bmQtcG9zaXRpb24gY29ycmVjdGx5IC0gd2UgbXVzdCBxdWVyeSBiYWNrZ3JvdW5kLXBvc2l0aW9uLXggYW5kIGJhY2tncm91bmQtcG9zaXRpb24teSBhbmQgY29tYmluZSB0aGVtIChldmVuIGluIElFMTApLiBCZWZvcmUgSUU5LCB3ZSBtdXN0IGRvIHRoZSBzYW1lIHdpdGggdGhlIGN1cnJlbnRTdHlsZSBvYmplY3QgYW5kIHVzZSBjYW1lbENhc2Vcblx0XHRcdFx0ZXMgPSB0aGlzLmZvcm1hdChlKSxcblx0XHRcdFx0YmEsIGVhLCBpLCBwY3QsIG92ZXJsYXAsIHNyYztcblx0XHRcdGlmICgoYnMuaW5kZXhPZihcIiVcIikgIT09IC0xKSAhPT0gKGVzLmluZGV4T2YoXCIlXCIpICE9PSAtMSkpIHtcblx0XHRcdFx0c3JjID0gX2dldFN0eWxlKHQsIFwiYmFja2dyb3VuZEltYWdlXCIpLnJlcGxhY2UoX3VybEV4cCwgXCJcIik7XG5cdFx0XHRcdGlmIChzcmMgJiYgc3JjICE9PSBcIm5vbmVcIikge1xuXHRcdFx0XHRcdGJhID0gYnMuc3BsaXQoXCIgXCIpO1xuXHRcdFx0XHRcdGVhID0gZXMuc3BsaXQoXCIgXCIpO1xuXHRcdFx0XHRcdF90ZW1wSW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBzcmMpOyAvL3NldCB0aGUgdGVtcCBJTUcncyBzcmMgdG8gdGhlIGJhY2tncm91bmQtaW1hZ2Ugc28gdGhhdCB3ZSBjYW4gbWVhc3VyZSBpdHMgd2lkdGgvaGVpZ2h0XG5cdFx0XHRcdFx0aSA9IDI7XG5cdFx0XHRcdFx0d2hpbGUgKC0taSA+IC0xKSB7XG5cdFx0XHRcdFx0XHRicyA9IGJhW2ldO1xuXHRcdFx0XHRcdFx0cGN0ID0gKGJzLmluZGV4T2YoXCIlXCIpICE9PSAtMSk7XG5cdFx0XHRcdFx0XHRpZiAocGN0ICE9PSAoZWFbaV0uaW5kZXhPZihcIiVcIikgIT09IC0xKSkge1xuXHRcdFx0XHRcdFx0XHRvdmVybGFwID0gKGkgPT09IDApID8gdC5vZmZzZXRXaWR0aCAtIF90ZW1wSW1nLndpZHRoIDogdC5vZmZzZXRIZWlnaHQgLSBfdGVtcEltZy5oZWlnaHQ7XG5cdFx0XHRcdFx0XHRcdGJhW2ldID0gcGN0ID8gKHBhcnNlRmxvYXQoYnMpIC8gMTAwICogb3ZlcmxhcCkgKyBcInB4XCIgOiAocGFyc2VGbG9hdChicykgLyBvdmVybGFwICogMTAwKSArIFwiJVwiO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicyA9IGJhLmpvaW4oXCIgXCIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcy5wYXJzZUNvbXBsZXgodC5zdHlsZSwgYnMsIGVzLCBwdCwgcGx1Z2luKTtcblx0XHR9LCBmb3JtYXR0ZXI6X3BhcnNlUG9zaXRpb259KTtcblx0XHRfcmVnaXN0ZXJDb21wbGV4U3BlY2lhbFByb3AoXCJiYWNrZ3JvdW5kU2l6ZVwiLCB7ZGVmYXVsdFZhbHVlOlwiMCAwXCIsIGZvcm1hdHRlcjpfcGFyc2VQb3NpdGlvbn0pO1xuXHRcdF9yZWdpc3RlckNvbXBsZXhTcGVjaWFsUHJvcChcInBlcnNwZWN0aXZlXCIsIHtkZWZhdWx0VmFsdWU6XCIwcHhcIiwgcHJlZml4OnRydWV9KTtcblx0XHRfcmVnaXN0ZXJDb21wbGV4U3BlY2lhbFByb3AoXCJwZXJzcGVjdGl2ZU9yaWdpblwiLCB7ZGVmYXVsdFZhbHVlOlwiNTAlIDUwJVwiLCBwcmVmaXg6dHJ1ZX0pO1xuXHRcdF9yZWdpc3RlckNvbXBsZXhTcGVjaWFsUHJvcChcInRyYW5zZm9ybVN0eWxlXCIsIHtwcmVmaXg6dHJ1ZX0pO1xuXHRcdF9yZWdpc3RlckNvbXBsZXhTcGVjaWFsUHJvcChcImJhY2tmYWNlVmlzaWJpbGl0eVwiLCB7cHJlZml4OnRydWV9KTtcblx0XHRfcmVnaXN0ZXJDb21wbGV4U3BlY2lhbFByb3AoXCJ1c2VyU2VsZWN0XCIsIHtwcmVmaXg6dHJ1ZX0pO1xuXHRcdF9yZWdpc3RlckNvbXBsZXhTcGVjaWFsUHJvcChcIm1hcmdpblwiLCB7cGFyc2VyOl9nZXRFZGdlUGFyc2VyKFwibWFyZ2luVG9wLG1hcmdpblJpZ2h0LG1hcmdpbkJvdHRvbSxtYXJnaW5MZWZ0XCIpfSk7XG5cdFx0X3JlZ2lzdGVyQ29tcGxleFNwZWNpYWxQcm9wKFwicGFkZGluZ1wiLCB7cGFyc2VyOl9nZXRFZGdlUGFyc2VyKFwicGFkZGluZ1RvcCxwYWRkaW5nUmlnaHQscGFkZGluZ0JvdHRvbSxwYWRkaW5nTGVmdFwiKX0pO1xuXHRcdF9yZWdpc3RlckNvbXBsZXhTcGVjaWFsUHJvcChcImNsaXBcIiwge2RlZmF1bHRWYWx1ZTpcInJlY3QoMHB4LDBweCwwcHgsMHB4KVwiLCBwYXJzZXI6ZnVuY3Rpb24odCwgZSwgcCwgY3NzcCwgcHQsIHBsdWdpbil7XG5cdFx0XHR2YXIgYiwgY3MsIGRlbGltO1xuXHRcdFx0aWYgKF9pZVZlcnMgPCA5KSB7IC8vSUU4IGFuZCBlYXJsaWVyIGRvbid0IHJlcG9ydCBhIFwiY2xpcFwiIHZhbHVlIGluIHRoZSBjdXJyZW50U3R5bGUgLSBpbnN0ZWFkLCB0aGUgdmFsdWVzIGFyZSBzcGxpdCBhcGFydCBpbnRvIGNsaXBUb3AsIGNsaXBSaWdodCwgY2xpcEJvdHRvbSwgYW5kIGNsaXBMZWZ0LiBBbHNvLCBpbiBJRTcgYW5kIGVhcmxpZXIsIHRoZSB2YWx1ZXMgaW5zaWRlIHJlY3QoKSBhcmUgc3BhY2UtZGVsaW1pdGVkLCBub3QgY29tbWEtZGVsaW1pdGVkLlxuXHRcdFx0XHRjcyA9IHQuY3VycmVudFN0eWxlO1xuXHRcdFx0XHRkZWxpbSA9IF9pZVZlcnMgPCA4ID8gXCIgXCIgOiBcIixcIjtcblx0XHRcdFx0YiA9IFwicmVjdChcIiArIGNzLmNsaXBUb3AgKyBkZWxpbSArIGNzLmNsaXBSaWdodCArIGRlbGltICsgY3MuY2xpcEJvdHRvbSArIGRlbGltICsgY3MuY2xpcExlZnQgKyBcIilcIjtcblx0XHRcdFx0ZSA9IHRoaXMuZm9ybWF0KGUpLnNwbGl0KFwiLFwiKS5qb2luKGRlbGltKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGIgPSB0aGlzLmZvcm1hdChfZ2V0U3R5bGUodCwgdGhpcy5wLCBfY3MsIGZhbHNlLCB0aGlzLmRmbHQpKTtcblx0XHRcdFx0ZSA9IHRoaXMuZm9ybWF0KGUpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXMucGFyc2VDb21wbGV4KHQuc3R5bGUsIGIsIGUsIHB0LCBwbHVnaW4pO1xuXHRcdH19KTtcblx0XHRfcmVnaXN0ZXJDb21wbGV4U3BlY2lhbFByb3AoXCJ0ZXh0U2hhZG93XCIsIHtkZWZhdWx0VmFsdWU6XCIwcHggMHB4IDBweCAjOTk5XCIsIGNvbG9yOnRydWUsIG11bHRpOnRydWV9KTtcblx0XHRfcmVnaXN0ZXJDb21wbGV4U3BlY2lhbFByb3AoXCJhdXRvUm91bmQsc3RyaWN0VW5pdHNcIiwge3BhcnNlcjpmdW5jdGlvbih0LCBlLCBwLCBjc3NwLCBwdCkge3JldHVybiBwdDt9fSk7IC8vanVzdCBzbyB0aGF0IHdlIGNhbiBpZ25vcmUgdGhlc2UgcHJvcGVydGllcyAobm90IHR3ZWVuIHRoZW0pXG5cdFx0X3JlZ2lzdGVyQ29tcGxleFNwZWNpYWxQcm9wKFwiYm9yZGVyXCIsIHtkZWZhdWx0VmFsdWU6XCIwcHggc29saWQgIzAwMFwiLCBwYXJzZXI6ZnVuY3Rpb24odCwgZSwgcCwgY3NzcCwgcHQsIHBsdWdpbikge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5wYXJzZUNvbXBsZXgodC5zdHlsZSwgdGhpcy5mb3JtYXQoX2dldFN0eWxlKHQsIFwiYm9yZGVyVG9wV2lkdGhcIiwgX2NzLCBmYWxzZSwgXCIwcHhcIikgKyBcIiBcIiArIF9nZXRTdHlsZSh0LCBcImJvcmRlclRvcFN0eWxlXCIsIF9jcywgZmFsc2UsIFwic29saWRcIikgKyBcIiBcIiArIF9nZXRTdHlsZSh0LCBcImJvcmRlclRvcENvbG9yXCIsIF9jcywgZmFsc2UsIFwiIzAwMFwiKSksIHRoaXMuZm9ybWF0KGUpLCBwdCwgcGx1Z2luKTtcblx0XHRcdH0sIGNvbG9yOnRydWUsIGZvcm1hdHRlcjpmdW5jdGlvbih2KSB7XG5cdFx0XHRcdHZhciBhID0gdi5zcGxpdChcIiBcIik7XG5cdFx0XHRcdHJldHVybiBhWzBdICsgXCIgXCIgKyAoYVsxXSB8fCBcInNvbGlkXCIpICsgXCIgXCIgKyAodi5tYXRjaChfY29sb3JFeHApIHx8IFtcIiMwMDBcIl0pWzBdO1xuXHRcdFx0fX0pO1xuXHRcdF9yZWdpc3RlckNvbXBsZXhTcGVjaWFsUHJvcChcImJvcmRlcldpZHRoXCIsIHtwYXJzZXI6X2dldEVkZ2VQYXJzZXIoXCJib3JkZXJUb3BXaWR0aCxib3JkZXJSaWdodFdpZHRoLGJvcmRlckJvdHRvbVdpZHRoLGJvcmRlckxlZnRXaWR0aFwiKX0pOyAvL0ZpcmVmb3ggZG9lc24ndCBwaWNrIHVwIG9uIGJvcmRlcldpZHRoIHNldCBpbiBzdHlsZSBzaGVldHMgKG9ubHkgaW5saW5lKS5cblx0XHRfcmVnaXN0ZXJDb21wbGV4U3BlY2lhbFByb3AoXCJmbG9hdCxjc3NGbG9hdCxzdHlsZUZsb2F0XCIsIHtwYXJzZXI6ZnVuY3Rpb24odCwgZSwgcCwgY3NzcCwgcHQsIHBsdWdpbikge1xuXHRcdFx0dmFyIHMgPSB0LnN0eWxlLFxuXHRcdFx0XHRwcm9wID0gKFwiY3NzRmxvYXRcIiBpbiBzKSA/IFwiY3NzRmxvYXRcIiA6IFwic3R5bGVGbG9hdFwiO1xuXHRcdFx0cmV0dXJuIG5ldyBDU1NQcm9wVHdlZW4ocywgcHJvcCwgMCwgMCwgcHQsIC0xLCBwLCBmYWxzZSwgMCwgc1twcm9wXSwgZSk7XG5cdFx0fX0pO1xuXG5cdFx0Ly9vcGFjaXR5LXJlbGF0ZWRcblx0XHR2YXIgX3NldElFT3BhY2l0eVJhdGlvID0gZnVuY3Rpb24odikge1xuXHRcdFx0XHR2YXIgdCA9IHRoaXMudCwgLy9yZWZlcnMgdG8gdGhlIGVsZW1lbnQncyBzdHlsZSBwcm9wZXJ0eVxuXHRcdFx0XHRcdGZpbHRlcnMgPSB0LmZpbHRlciB8fCBfZ2V0U3R5bGUodGhpcy5kYXRhLCBcImZpbHRlclwiKSB8fCBcIlwiLFxuXHRcdFx0XHRcdHZhbCA9ICh0aGlzLnMgKyB0aGlzLmMgKiB2KSB8IDAsXG5cdFx0XHRcdFx0c2tpcDtcblx0XHRcdFx0aWYgKHZhbCA9PT0gMTAwKSB7IC8vZm9yIG9sZGVyIHZlcnNpb25zIG9mIElFIHRoYXQgbmVlZCB0byB1c2UgYSBmaWx0ZXIgdG8gYXBwbHkgb3BhY2l0eSwgd2Ugc2hvdWxkIHJlbW92ZSB0aGUgZmlsdGVyIGlmIG9wYWNpdHkgaGl0cyAxIGluIG9yZGVyIHRvIGltcHJvdmUgcGVyZm9ybWFuY2UsIGJ1dCBtYWtlIHN1cmUgdGhlcmUgaXNuJ3QgYSB0cmFuc2Zvcm0gKG1hdHJpeCkgb3IgZ3JhZGllbnQgaW4gdGhlIGZpbHRlcnMuXG5cdFx0XHRcdFx0aWYgKGZpbHRlcnMuaW5kZXhPZihcImF0cml4KFwiKSA9PT0gLTEgJiYgZmlsdGVycy5pbmRleE9mKFwicmFkaWVudChcIikgPT09IC0xICYmIGZpbHRlcnMuaW5kZXhPZihcIm9hZGVyKFwiKSA9PT0gLTEpIHtcblx0XHRcdFx0XHRcdHQucmVtb3ZlQXR0cmlidXRlKFwiZmlsdGVyXCIpO1xuXHRcdFx0XHRcdFx0c2tpcCA9ICghX2dldFN0eWxlKHRoaXMuZGF0YSwgXCJmaWx0ZXJcIikpOyAvL2lmIGEgY2xhc3MgaXMgYXBwbGllZCB0aGF0IGhhcyBhbiBhbHBoYSBmaWx0ZXIsIGl0IHdpbGwgdGFrZSBlZmZlY3QgKHdlIGRvbid0IHdhbnQgdGhhdCksIHNvIHJlLWFwcGx5IG91ciBhbHBoYSBmaWx0ZXIgaW4gdGhhdCBjYXNlLiBXZSBtdXN0IGZpcnN0IHJlbW92ZSBpdCBhbmQgdGhlbiBjaGVjay5cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dC5maWx0ZXIgPSBmaWx0ZXJzLnJlcGxhY2UoX2FscGhhRmlsdGVyRXhwLCBcIlwiKTtcblx0XHRcdFx0XHRcdHNraXAgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIXNraXApIHtcblx0XHRcdFx0XHRpZiAodGhpcy54bjEpIHtcblx0XHRcdFx0XHRcdHQuZmlsdGVyID0gZmlsdGVycyA9IGZpbHRlcnMgfHwgKFwiYWxwaGEob3BhY2l0eT1cIiArIHZhbCArIFwiKVwiKTsgLy93b3JrcyBhcm91bmQgYnVnIGluIElFNy84IHRoYXQgcHJldmVudHMgY2hhbmdlcyB0byBcInZpc2liaWxpdHlcIiBmcm9tIGJlaW5nIGFwcGxpZWQgcHJvcGVybHkgaWYgdGhlIGZpbHRlciBpcyBjaGFuZ2VkIHRvIGEgZGlmZmVyZW50IGFscGhhIG9uIHRoZSBzYW1lIGZyYW1lLlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoZmlsdGVycy5pbmRleE9mKFwicGFjaXR5XCIpID09PSAtMSkgeyAvL29ubHkgdXNlZCBpZiBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCB0aGUgc3RhbmRhcmQgb3BhY2l0eSBzdHlsZSBwcm9wZXJ0eSAoSUUgNyBhbmQgOCkuIFdlIG9taXQgdGhlIFwiT1wiIHRvIGF2b2lkIGNhc2Utc2Vuc2l0aXZpdHkgaXNzdWVzXG5cdFx0XHRcdFx0XHRpZiAodmFsICE9PSAwIHx8ICF0aGlzLnhuMSkgeyAvL2J1Z3MgaW4gSUU3Lzggd29uJ3QgcmVuZGVyIHRoZSBmaWx0ZXIgcHJvcGVybHkgaWYgb3BhY2l0eSBpcyBBRERFRCBvbiB0aGUgc2FtZSBmcmFtZS9yZW5kZXIgYXMgXCJ2aXNpYmlsaXR5XCIgY2hhbmdlcyAodGhpcy54bjEgaXMgMSBpZiB0aGlzIHR3ZWVuIGlzIGFuIFwiYXV0b0FscGhhXCIgdHdlZW4pXG5cdFx0XHRcdFx0XHRcdHQuZmlsdGVyID0gZmlsdGVycyArIFwiIGFscGhhKG9wYWNpdHk9XCIgKyB2YWwgKyBcIilcIjsgLy93ZSByb3VuZCB0aGUgdmFsdWUgYmVjYXVzZSBvdGhlcndpc2UsIGJ1Z3MgaW4gSUU3LzggY2FuIHByZXZlbnQgXCJ2aXNpYmlsaXR5XCIgY2hhbmdlcyBmcm9tIGJlaW5nIGFwcGxpZWQgcHJvcGVybHkuXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHQuZmlsdGVyID0gZmlsdGVycy5yZXBsYWNlKF9vcGFjaXR5RXhwLCBcIm9wYWNpdHk9XCIgKyB2YWwpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRfcmVnaXN0ZXJDb21wbGV4U3BlY2lhbFByb3AoXCJvcGFjaXR5LGFscGhhLGF1dG9BbHBoYVwiLCB7ZGVmYXVsdFZhbHVlOlwiMVwiLCBwYXJzZXI6ZnVuY3Rpb24odCwgZSwgcCwgY3NzcCwgcHQsIHBsdWdpbikge1xuXHRcdFx0dmFyIGIgPSBwYXJzZUZsb2F0KF9nZXRTdHlsZSh0LCBcIm9wYWNpdHlcIiwgX2NzLCBmYWxzZSwgXCIxXCIpKSxcblx0XHRcdFx0c3R5bGUgPSB0LnN0eWxlLFxuXHRcdFx0XHRpc0F1dG9BbHBoYSA9IChwID09PSBcImF1dG9BbHBoYVwiKTtcblx0XHRcdGlmICh0eXBlb2YoZSkgPT09IFwic3RyaW5nXCIgJiYgZS5jaGFyQXQoMSkgPT09IFwiPVwiKSB7XG5cdFx0XHRcdGUgPSAoKGUuY2hhckF0KDApID09PSBcIi1cIikgPyAtMSA6IDEpICogcGFyc2VGbG9hdChlLnN1YnN0cigyKSkgKyBiO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGlzQXV0b0FscGhhICYmIGIgPT09IDEgJiYgX2dldFN0eWxlKHQsIFwidmlzaWJpbGl0eVwiLCBfY3MpID09PSBcImhpZGRlblwiICYmIGUgIT09IDApIHsgLy9pZiB2aXNpYmlsaXR5IGlzIGluaXRpYWxseSBzZXQgdG8gXCJoaWRkZW5cIiwgd2Ugc2hvdWxkIGludGVycHJldCB0aGF0IGFzIGludGVudCB0byBtYWtlIG9wYWNpdHkgMCAoYSBjb252ZW5pZW5jZSlcblx0XHRcdFx0YiA9IDA7XG5cdFx0XHR9XG5cdFx0XHRpZiAoX3N1cHBvcnRzT3BhY2l0eSkge1xuXHRcdFx0XHRwdCA9IG5ldyBDU1NQcm9wVHdlZW4oc3R5bGUsIFwib3BhY2l0eVwiLCBiLCBlIC0gYiwgcHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cHQgPSBuZXcgQ1NTUHJvcFR3ZWVuKHN0eWxlLCBcIm9wYWNpdHlcIiwgYiAqIDEwMCwgKGUgLSBiKSAqIDEwMCwgcHQpO1xuXHRcdFx0XHRwdC54bjEgPSBpc0F1dG9BbHBoYSA/IDEgOiAwOyAvL3dlIG5lZWQgdG8gcmVjb3JkIHdoZXRoZXIgb3Igbm90IHRoaXMgaXMgYW4gYXV0b0FscGhhIHNvIHRoYXQgaW4gdGhlIHNldFJhdGlvKCksIHdlIGtub3cgdG8gZHVwbGljYXRlIHRoZSBzZXR0aW5nIG9mIHRoZSBhbHBoYSBpbiBvcmRlciB0byB3b3JrIGFyb3VuZCBhIGJ1ZyBpbiBJRTcgYW5kIElFOCB0aGF0IHByZXZlbnRzIGNoYW5nZXMgdG8gXCJ2aXNpYmlsaXR5XCIgZnJvbSB0YWtpbmcgZWZmZWN0IGlmIHRoZSBmaWx0ZXIgaXMgY2hhbmdlZCB0byBhIGRpZmZlcmVudCBhbHBoYShvcGFjaXR5KSBhdCB0aGUgc2FtZSB0aW1lLiBTZXR0aW5nIGl0IHRvIHRoZSBTQU1FIHZhbHVlIGZpcnN0LCB0aGVuIHRoZSBuZXcgdmFsdWUgd29ya3MgYXJvdW5kIHRoZSBJRTcvOCBidWcuXG5cdFx0XHRcdHN0eWxlLnpvb20gPSAxOyAvL2hlbHBzIGNvcnJlY3QgYW4gSUUgaXNzdWUuXG5cdFx0XHRcdHB0LnR5cGUgPSAyO1xuXHRcdFx0XHRwdC5iID0gXCJhbHBoYShvcGFjaXR5PVwiICsgcHQucyArIFwiKVwiO1xuXHRcdFx0XHRwdC5lID0gXCJhbHBoYShvcGFjaXR5PVwiICsgKHB0LnMgKyBwdC5jKSArIFwiKVwiO1xuXHRcdFx0XHRwdC5kYXRhID0gdDtcblx0XHRcdFx0cHQucGx1Z2luID0gcGx1Z2luO1xuXHRcdFx0XHRwdC5zZXRSYXRpbyA9IF9zZXRJRU9wYWNpdHlSYXRpbztcblx0XHRcdH1cblx0XHRcdGlmIChpc0F1dG9BbHBoYSkgeyAvL3dlIGhhdmUgdG8gY3JlYXRlIHRoZSBcInZpc2liaWxpdHlcIiBQcm9wVHdlZW4gYWZ0ZXIgdGhlIG9wYWNpdHkgb25lIGluIHRoZSBsaW5rZWQgbGlzdCBzbyB0aGF0IHRoZXkgcnVuIGluIHRoZSBvcmRlciB0aGF0IHdvcmtzIHByb3Blcmx5IGluIElFOCBhbmQgZWFybGllclxuXHRcdFx0XHRwdCA9IG5ldyBDU1NQcm9wVHdlZW4oc3R5bGUsIFwidmlzaWJpbGl0eVwiLCAwLCAwLCBwdCwgLTEsIG51bGwsIGZhbHNlLCAwLCAoKGIgIT09IDApID8gXCJpbmhlcml0XCIgOiBcImhpZGRlblwiKSwgKChlID09PSAwKSA/IFwiaGlkZGVuXCIgOiBcImluaGVyaXRcIikpO1xuXHRcdFx0XHRwdC54czAgPSBcImluaGVyaXRcIjtcblx0XHRcdFx0Y3NzcC5fb3ZlcndyaXRlUHJvcHMucHVzaChwdC5uKTtcblx0XHRcdFx0Y3NzcC5fb3ZlcndyaXRlUHJvcHMucHVzaChwKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBwdDtcblx0XHR9fSk7XG5cblxuXHRcdHZhciBfcmVtb3ZlUHJvcCA9IGZ1bmN0aW9uKHMsIHApIHtcblx0XHRcdFx0aWYgKHApIHtcblx0XHRcdFx0XHRpZiAocy5yZW1vdmVQcm9wZXJ0eSkge1xuXHRcdFx0XHRcdFx0aWYgKHAuc3Vic3RyKDAsMikgPT09IFwibXNcIiB8fCBwLnN1YnN0cigwLDYpID09PSBcIndlYmtpdFwiKSB7IC8vTWljcm9zb2Z0IGFuZCBzb21lIFdlYmtpdCBicm93c2VycyBkb24ndCBjb25mb3JtIHRvIHRoZSBzdGFuZGFyZCBvZiBjYXBpdGFsaXppbmcgdGhlIGZpcnN0IHByZWZpeCBjaGFyYWN0ZXIsIHNvIHdlIGFkanVzdCBzbyB0aGF0IHdoZW4gd2UgcHJlZml4IHRoZSBjYXBzIHdpdGggYSBkYXNoLCBpdCdzIGNvcnJlY3QgKG90aGVyd2lzZSBpdCdkIGJlIFwibXMtdHJhbnNmb3JtXCIgaW5zdGVhZCBvZiBcIi1tcy10cmFuc2Zvcm1cIiBmb3IgSUU5LCBmb3IgZXhhbXBsZSlcblx0XHRcdFx0XHRcdFx0cCA9IFwiLVwiICsgcDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHMucmVtb3ZlUHJvcGVydHkocC5yZXBsYWNlKF9jYXBzRXhwLCBcIi0kMVwiKS50b0xvd2VyQ2FzZSgpKTtcblx0XHRcdFx0XHR9IGVsc2UgeyAvL25vdGU6IG9sZCB2ZXJzaW9ucyBvZiBJRSB1c2UgXCJyZW1vdmVBdHRyaWJ1dGUoKVwiIGluc3RlYWQgb2YgXCJyZW1vdmVQcm9wZXJ0eSgpXCJcblx0XHRcdFx0XHRcdHMucmVtb3ZlQXR0cmlidXRlKHApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdF9zZXRDbGFzc05hbWVSYXRpbyA9IGZ1bmN0aW9uKHYpIHtcblx0XHRcdFx0dGhpcy50Ll9nc0NsYXNzUFQgPSB0aGlzO1xuXHRcdFx0XHRpZiAodiA9PT0gMSB8fCB2ID09PSAwKSB7XG5cdFx0XHRcdFx0dGhpcy50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsICh2ID09PSAwKSA/IHRoaXMuYiA6IHRoaXMuZSk7XG5cdFx0XHRcdFx0dmFyIG1wdCA9IHRoaXMuZGF0YSwgLy9maXJzdCBNaW5pUHJvcFR3ZWVuXG5cdFx0XHRcdFx0XHRzID0gdGhpcy50LnN0eWxlO1xuXHRcdFx0XHRcdHdoaWxlIChtcHQpIHtcblx0XHRcdFx0XHRcdGlmICghbXB0LnYpIHtcblx0XHRcdFx0XHRcdFx0X3JlbW92ZVByb3AocywgbXB0LnApO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0c1ttcHQucF0gPSBtcHQudjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdG1wdCA9IG1wdC5fbmV4dDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHYgPT09IDEgJiYgdGhpcy50Ll9nc0NsYXNzUFQgPT09IHRoaXMpIHtcblx0XHRcdFx0XHRcdHRoaXMudC5fZ3NDbGFzc1BUID0gbnVsbDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSBpZiAodGhpcy50LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpICE9PSB0aGlzLmUpIHtcblx0XHRcdFx0XHR0aGlzLnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgdGhpcy5lKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRfcmVnaXN0ZXJDb21wbGV4U3BlY2lhbFByb3AoXCJjbGFzc05hbWVcIiwge3BhcnNlcjpmdW5jdGlvbih0LCBlLCBwLCBjc3NwLCBwdCwgcGx1Z2luLCB2YXJzKSB7XG5cdFx0XHR2YXIgYiA9IHQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikgfHwgXCJcIiwgLy9kb24ndCB1c2UgdC5jbGFzc05hbWUgYmVjYXVzZSBpdCBkb2Vzbid0IHdvcmsgY29uc2lzdGVudGx5IG9uIFNWRyBlbGVtZW50czsgZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikgYW5kIHNldEF0dHJpYnV0ZShcImNsYXNzXCIsIHZhbHVlXCIpIGlzIG1vcmUgcmVsaWFibGUuXG5cdFx0XHRcdGNzc1RleHQgPSB0LnN0eWxlLmNzc1RleHQsXG5cdFx0XHRcdGRpZkRhdGEsIGJzLCBjbnB0LCBjbnB0TG9va3VwLCBtcHQ7XG5cdFx0XHRwdCA9IGNzc3AuX2NsYXNzTmFtZVBUID0gbmV3IENTU1Byb3BUd2Vlbih0LCBwLCAwLCAwLCBwdCwgMik7XG5cdFx0XHRwdC5zZXRSYXRpbyA9IF9zZXRDbGFzc05hbWVSYXRpbztcblx0XHRcdHB0LnByID0gLTExO1xuXHRcdFx0X2hhc1ByaW9yaXR5ID0gdHJ1ZTtcblx0XHRcdHB0LmIgPSBiO1xuXHRcdFx0YnMgPSBfZ2V0QWxsU3R5bGVzKHQsIF9jcyk7XG5cdFx0XHQvL2lmIHRoZXJlJ3MgYSBjbGFzc05hbWUgdHdlZW4gYWxyZWFkeSBvcGVyYXRpbmcgb24gdGhlIHRhcmdldCwgZm9yY2UgaXQgdG8gaXRzIGVuZCBzbyB0aGF0IHRoZSBuZWNlc3NhcnkgaW5saW5lIHN0eWxlcyBhcmUgcmVtb3ZlZCBhbmQgdGhlIGNsYXNzIG5hbWUgaXMgYXBwbGllZCBiZWZvcmUgd2UgZGV0ZXJtaW5lIHRoZSBlbmQgc3RhdGUgKHdlIGRvbid0IHdhbnQgaW5saW5lIHN0eWxlcyBpbnRlcmZlcmluZyB0aGF0IHdlcmUgdGhlcmUganVzdCBmb3IgY2xhc3Mtc3BlY2lmaWMgdmFsdWVzKVxuXHRcdFx0Y25wdCA9IHQuX2dzQ2xhc3NQVDtcblx0XHRcdGlmIChjbnB0KSB7XG5cdFx0XHRcdGNucHRMb29rdXAgPSB7fTtcblx0XHRcdFx0bXB0ID0gY25wdC5kYXRhOyAvL2ZpcnN0IE1pbmlQcm9wVHdlZW4gd2hpY2ggc3RvcmVzIHRoZSBpbmxpbmUgc3R5bGVzIC0gd2UgbmVlZCB0byBmb3JjZSB0aGVzZSBzbyB0aGF0IHRoZSBpbmxpbmUgc3R5bGVzIGRvbid0IGNvbnRhbWluYXRlIHRoaW5ncy4gT3RoZXJ3aXNlLCB0aGVyZSdzIGEgc21hbGwgY2hhbmNlIHRoYXQgYSB0d2VlbiBjb3VsZCBzdGFydCBhbmQgdGhlIGlubGluZSB2YWx1ZXMgbWF0Y2ggdGhlIGRlc3RpbmF0aW9uIHZhbHVlcyBhbmQgdGhleSBuZXZlciBnZXQgY2xlYW5lZC5cblx0XHRcdFx0d2hpbGUgKG1wdCkge1xuXHRcdFx0XHRcdGNucHRMb29rdXBbbXB0LnBdID0gMTtcblx0XHRcdFx0XHRtcHQgPSBtcHQuX25leHQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y25wdC5zZXRSYXRpbygxKTtcblx0XHRcdH1cblx0XHRcdHQuX2dzQ2xhc3NQVCA9IHB0O1xuXHRcdFx0cHQuZSA9IChlLmNoYXJBdCgxKSAhPT0gXCI9XCIpID8gZSA6IGIucmVwbGFjZShuZXcgUmVnRXhwKFwiXFxcXHMqXFxcXGJcIiArIGUuc3Vic3RyKDIpICsgXCJcXFxcYlwiKSwgXCJcIikgKyAoKGUuY2hhckF0KDApID09PSBcIitcIikgPyBcIiBcIiArIGUuc3Vic3RyKDIpIDogXCJcIik7XG5cdFx0XHR0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIHB0LmUpO1xuXHRcdFx0ZGlmRGF0YSA9IF9jc3NEaWYodCwgYnMsIF9nZXRBbGxTdHlsZXModCksIHZhcnMsIGNucHRMb29rdXApO1xuXHRcdFx0dC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBiKTtcblx0XHRcdHB0LmRhdGEgPSBkaWZEYXRhLmZpcnN0TVBUO1xuXHRcdFx0dC5zdHlsZS5jc3NUZXh0ID0gY3NzVGV4dDsgLy93ZSByZWNvcmRlZCBjc3NUZXh0IGJlZm9yZSB3ZSBzd2FwcGVkIGNsYXNzZXMgYW5kIHJhbiBfZ2V0QWxsU3R5bGVzKCkgYmVjYXVzZSBpbiBjYXNlcyB3aGVuIGEgY2xhc3NOYW1lIHR3ZWVuIGlzIG92ZXJ3cml0dGVuLCB3ZSByZW1vdmUgYWxsIHRoZSByZWxhdGVkIHR3ZWVuaW5nIHByb3BlcnRpZXMgZnJvbSB0aGF0IGNsYXNzIGNoYW5nZSAob3RoZXJ3aXNlIGNsYXNzLXNwZWNpZmljIHN0dWZmIGNhbid0IG92ZXJyaWRlIHByb3BlcnRpZXMgd2UndmUgZGlyZWN0bHkgc2V0IG9uIHRoZSB0YXJnZXQncyBzdHlsZSBvYmplY3QgZHVlIHRvIHNwZWNpZmljaXR5KS5cblx0XHRcdHB0ID0gcHQueGZpcnN0ID0gY3NzcC5wYXJzZSh0LCBkaWZEYXRhLmRpZnMsIHB0LCBwbHVnaW4pOyAvL3dlIHJlY29yZCB0aGUgQ1NTUHJvcFR3ZWVuIGFzIHRoZSB4Zmlyc3Qgc28gdGhhdCB3ZSBjYW4gaGFuZGxlIG92ZXJ3cml0aW5nIHByb3BlcnRseSAoaWYgXCJjbGFzc05hbWVcIiBnZXRzIG92ZXJ3cml0dGVuLCB3ZSBtdXN0IGtpbGwgYWxsIHRoZSBwcm9wZXJ0aWVzIGFzc29jaWF0ZWQgd2l0aCB0aGUgY2xhc3NOYW1lIHBhcnQgb2YgdGhlIHR3ZWVuLCBzbyB3ZSBjYW4gbG9vcCB0aHJvdWdoIGZyb20geGZpcnN0IHRvIHRoZSBwdCBpdHNlbGYpXG5cdFx0XHRyZXR1cm4gcHQ7XG5cdFx0fX0pO1xuXG5cblx0XHR2YXIgX3NldENsZWFyUHJvcHNSYXRpbyA9IGZ1bmN0aW9uKHYpIHtcblx0XHRcdGlmICh2ID09PSAxIHx8IHYgPT09IDApIGlmICh0aGlzLmRhdGEuX3RvdGFsVGltZSA9PT0gdGhpcy5kYXRhLl90b3RhbER1cmF0aW9uICYmIHRoaXMuZGF0YS5kYXRhICE9PSBcImlzRnJvbVN0YXJ0XCIpIHsgLy90aGlzLmRhdGEgcmVmZXJzIHRvIHRoZSB0d2Vlbi4gT25seSBjbGVhciBhdCB0aGUgRU5EIG9mIHRoZSB0d2VlbiAocmVtZW1iZXIsIGZyb20oKSB0d2VlbnMgbWFrZSB0aGUgcmF0aW8gZ28gZnJvbSAxIHRvIDAsIHNvIHdlIGNhbid0IGp1c3QgY2hlY2sgdGhhdCBhbmQgaWYgdGhlIHR3ZWVuIGlzIHRoZSB6ZXJvLWR1cmF0aW9uIG9uZSB0aGF0J3MgY3JlYXRlZCBpbnRlcm5hbGx5IHRvIHJlbmRlciB0aGUgc3RhcnRpbmcgdmFsdWVzIGluIGEgZnJvbSgpIHR3ZWVuLCBpZ25vcmUgdGhhdCBiZWNhdXNlIG90aGVyd2lzZSwgZm9yIGV4YW1wbGUsIGZyb20oLi4ue2hlaWdodDoxMDAsIGNsZWFyUHJvcHM6XCJoZWlnaHRcIiwgZGVsYXk6MX0pIHdvdWxkIHdpcGUgdGhlIGhlaWdodCBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSB0d2VlbiBhbmQgYWZ0ZXIgMSBzZWNvbmQsIGl0J2Qga2ljayBiYWNrIGluKS5cblx0XHRcdFx0dmFyIHMgPSB0aGlzLnQuc3R5bGUsXG5cdFx0XHRcdFx0dHJhbnNmb3JtUGFyc2UgPSBfc3BlY2lhbFByb3BzLnRyYW5zZm9ybS5wYXJzZSxcblx0XHRcdFx0XHRhLCBwLCBpLCBjbGVhclRyYW5zZm9ybSwgdHJhbnNmb3JtO1xuXHRcdFx0XHRpZiAodGhpcy5lID09PSBcImFsbFwiKSB7XG5cdFx0XHRcdFx0cy5jc3NUZXh0ID0gXCJcIjtcblx0XHRcdFx0XHRjbGVhclRyYW5zZm9ybSA9IHRydWU7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0YSA9IHRoaXMuZS5zcGxpdChcIiBcIikuam9pbihcIlwiKS5zcGxpdChcIixcIik7XG5cdFx0XHRcdFx0aSA9IGEubGVuZ3RoO1xuXHRcdFx0XHRcdHdoaWxlICgtLWkgPiAtMSkge1xuXHRcdFx0XHRcdFx0cCA9IGFbaV07XG5cdFx0XHRcdFx0XHRpZiAoX3NwZWNpYWxQcm9wc1twXSkge1xuXHRcdFx0XHRcdFx0XHRpZiAoX3NwZWNpYWxQcm9wc1twXS5wYXJzZSA9PT0gdHJhbnNmb3JtUGFyc2UpIHtcblx0XHRcdFx0XHRcdFx0XHRjbGVhclRyYW5zZm9ybSA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0cCA9IChwID09PSBcInRyYW5zZm9ybU9yaWdpblwiKSA/IF90cmFuc2Zvcm1PcmlnaW5Qcm9wIDogX3NwZWNpYWxQcm9wc1twXS5wOyAvL2Vuc3VyZXMgdGhhdCBzcGVjaWFsIHByb3BlcnRpZXMgdXNlIHRoZSBwcm9wZXIgYnJvd3Nlci1zcGVjaWZpYyBwcm9wZXJ0eSBuYW1lLCBsaWtlIFwic2NhbGVYXCIgbWlnaHQgYmUgXCItd2Via2l0LXRyYW5zZm9ybVwiIG9yIFwiYm94U2hhZG93XCIgbWlnaHQgYmUgXCItbW96LWJveC1zaGFkb3dcIlxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRfcmVtb3ZlUHJvcChzLCBwKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGNsZWFyVHJhbnNmb3JtKSB7XG5cdFx0XHRcdFx0X3JlbW92ZVByb3AocywgX3RyYW5zZm9ybVByb3ApO1xuXHRcdFx0XHRcdHRyYW5zZm9ybSA9IHRoaXMudC5fZ3NUcmFuc2Zvcm07XG5cdFx0XHRcdFx0aWYgKHRyYW5zZm9ybSkge1xuXHRcdFx0XHRcdFx0aWYgKHRyYW5zZm9ybS5zdmcpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy50LnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtc3ZnLW9yaWdpblwiKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGRlbGV0ZSB0aGlzLnQuX2dzVHJhbnNmb3JtO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cdFx0fTtcblx0XHRfcmVnaXN0ZXJDb21wbGV4U3BlY2lhbFByb3AoXCJjbGVhclByb3BzXCIsIHtwYXJzZXI6ZnVuY3Rpb24odCwgZSwgcCwgY3NzcCwgcHQpIHtcblx0XHRcdHB0ID0gbmV3IENTU1Byb3BUd2Vlbih0LCBwLCAwLCAwLCBwdCwgMik7XG5cdFx0XHRwdC5zZXRSYXRpbyA9IF9zZXRDbGVhclByb3BzUmF0aW87XG5cdFx0XHRwdC5lID0gZTtcblx0XHRcdHB0LnByID0gLTEwO1xuXHRcdFx0cHQuZGF0YSA9IGNzc3AuX3R3ZWVuO1xuXHRcdFx0X2hhc1ByaW9yaXR5ID0gdHJ1ZTtcblx0XHRcdHJldHVybiBwdDtcblx0XHR9fSk7XG5cblx0XHRwID0gXCJiZXppZXIsdGhyb3dQcm9wcyxwaHlzaWNzUHJvcHMscGh5c2ljczJEXCIuc3BsaXQoXCIsXCIpO1xuXHRcdGkgPSBwLmxlbmd0aDtcblx0XHR3aGlsZSAoaS0tKSB7XG5cdFx0XHRfcmVnaXN0ZXJQbHVnaW5Qcm9wKHBbaV0pO1xuXHRcdH1cblxuXG5cblxuXG5cblxuXG5cdFx0cCA9IENTU1BsdWdpbi5wcm90b3R5cGU7XG5cdFx0cC5fZmlyc3RQVCA9IHAuX2xhc3RQYXJzZWRUcmFuc2Zvcm0gPSBwLl90cmFuc2Zvcm0gPSBudWxsO1xuXG5cdFx0Ly9nZXRzIGNhbGxlZCB3aGVuIHRoZSB0d2VlbiByZW5kZXJzIGZvciB0aGUgZmlyc3QgdGltZS4gVGhpcyBraWNrcyBldmVyeXRoaW5nIG9mZiwgcmVjb3JkaW5nIHN0YXJ0L2VuZCB2YWx1ZXMsIGV0Yy5cblx0XHRwLl9vbkluaXRUd2VlbiA9IGZ1bmN0aW9uKHRhcmdldCwgdmFycywgdHdlZW4pIHtcblx0XHRcdGlmICghdGFyZ2V0Lm5vZGVUeXBlKSB7IC8vY3NzIGlzIG9ubHkgZm9yIGRvbSBlbGVtZW50c1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl90YXJnZXQgPSB0YXJnZXQ7XG5cdFx0XHR0aGlzLl90d2VlbiA9IHR3ZWVuO1xuXHRcdFx0dGhpcy5fdmFycyA9IHZhcnM7XG5cdFx0XHRfYXV0b1JvdW5kID0gdmFycy5hdXRvUm91bmQ7XG5cdFx0XHRfaGFzUHJpb3JpdHkgPSBmYWxzZTtcblx0XHRcdF9zdWZmaXhNYXAgPSB2YXJzLnN1ZmZpeE1hcCB8fCBDU1NQbHVnaW4uc3VmZml4TWFwO1xuXHRcdFx0X2NzID0gX2dldENvbXB1dGVkU3R5bGUodGFyZ2V0LCBcIlwiKTtcblx0XHRcdF9vdmVyd3JpdGVQcm9wcyA9IHRoaXMuX292ZXJ3cml0ZVByb3BzO1xuXHRcdFx0dmFyIHN0eWxlID0gdGFyZ2V0LnN0eWxlLFxuXHRcdFx0XHR2LCBwdCwgcHQyLCBmaXJzdCwgbGFzdCwgbmV4dCwgekluZGV4LCB0cHQsIHRocmVlRDtcblx0XHRcdGlmIChfcmVxU2FmYXJpRml4KSBpZiAoc3R5bGUuekluZGV4ID09PSBcIlwiKSB7XG5cdFx0XHRcdHYgPSBfZ2V0U3R5bGUodGFyZ2V0LCBcInpJbmRleFwiLCBfY3MpO1xuXHRcdFx0XHRpZiAodiA9PT0gXCJhdXRvXCIgfHwgdiA9PT0gXCJcIikge1xuXHRcdFx0XHRcdC8vY29ycmVjdHMgYSBidWcgaW4gW25vbi1BbmRyb2lkXSBTYWZhcmkgdGhhdCBwcmV2ZW50cyBpdCBmcm9tIHJlcGFpbnRpbmcgZWxlbWVudHMgaW4gdGhlaXIgbmV3IHBvc2l0aW9ucyBpZiB0aGV5IGRvbid0IGhhdmUgYSB6SW5kZXggc2V0LiBXZSBhbHNvIGNhbid0IGp1c3QgYXBwbHkgdGhpcyBpbnNpZGUgX3BhcnNlVHJhbnNmb3JtKCkgYmVjYXVzZSBhbnl0aGluZyB0aGF0J3MgbW92ZWQgaW4gYW55IHdheSAobGlrZSB1c2luZyBcImxlZnRcIiBvciBcInRvcFwiIGluc3RlYWQgb2YgdHJhbnNmb3JtcyBsaWtlIFwieFwiIGFuZCBcInlcIikgY2FuIGJlIGFmZmVjdGVkLCBzbyBpdCBpcyBiZXN0IHRvIGVuc3VyZSB0aGF0IGFueXRoaW5nIHRoYXQncyB0d2VlbmluZyBoYXMgYSB6LWluZGV4LiBTZXR0aW5nIFwiV2Via2l0UGVyc3BlY3RpdmVcIiB0byBhIG5vbi16ZXJvIHZhbHVlIHdvcmtlZCB0b28gZXhjZXB0IHRoYXQgb24gaU9TIFNhZmFyaSB0aGluZ3Mgd291bGQgZmxpY2tlciByYW5kb21seS4gUGx1cyB6SW5kZXggaXMgbGVzcyBtZW1vcnktaW50ZW5zaXZlLlxuXHRcdFx0XHRcdHRoaXMuX2FkZExhenlTZXQoc3R5bGUsIFwiekluZGV4XCIsIDApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0eXBlb2YodmFycykgPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdFx0Zmlyc3QgPSBzdHlsZS5jc3NUZXh0O1xuXHRcdFx0XHR2ID0gX2dldEFsbFN0eWxlcyh0YXJnZXQsIF9jcyk7XG5cdFx0XHRcdHN0eWxlLmNzc1RleHQgPSBmaXJzdCArIFwiO1wiICsgdmFycztcblx0XHRcdFx0diA9IF9jc3NEaWYodGFyZ2V0LCB2LCBfZ2V0QWxsU3R5bGVzKHRhcmdldCkpLmRpZnM7XG5cdFx0XHRcdGlmICghX3N1cHBvcnRzT3BhY2l0eSAmJiBfb3BhY2l0eVZhbEV4cC50ZXN0KHZhcnMpKSB7XG5cdFx0XHRcdFx0di5vcGFjaXR5ID0gcGFyc2VGbG9hdCggUmVnRXhwLiQxICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dmFycyA9IHY7XG5cdFx0XHRcdHN0eWxlLmNzc1RleHQgPSBmaXJzdDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHZhcnMuY2xhc3NOYW1lKSB7IC8vY2xhc3NOYW1lIHR3ZWVucyB3aWxsIGNvbWJpbmUgYW55IGRpZmZlcmVuY2VzIHRoZXkgZmluZCBpbiB0aGUgY3NzIHdpdGggdGhlIHZhcnMgdGhhdCBhcmUgcGFzc2VkIGluLCBzbyB7Y2xhc3NOYW1lOlwibXlDbGFzc1wiLCBzY2FsZTowLjUsIGxlZnQ6MjB9IHdvdWxkIHdvcmsuXG5cdFx0XHRcdHRoaXMuX2ZpcnN0UFQgPSBwdCA9IF9zcGVjaWFsUHJvcHMuY2xhc3NOYW1lLnBhcnNlKHRhcmdldCwgdmFycy5jbGFzc05hbWUsIFwiY2xhc3NOYW1lXCIsIHRoaXMsIG51bGwsIG51bGwsIHZhcnMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5fZmlyc3RQVCA9IHB0ID0gdGhpcy5wYXJzZSh0YXJnZXQsIHZhcnMsIG51bGwpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5fdHJhbnNmb3JtVHlwZSkge1xuXHRcdFx0XHR0aHJlZUQgPSAodGhpcy5fdHJhbnNmb3JtVHlwZSA9PT0gMyk7XG5cdFx0XHRcdGlmICghX3RyYW5zZm9ybVByb3ApIHtcblx0XHRcdFx0XHRzdHlsZS56b29tID0gMTsgLy9oZWxwcyBjb3JyZWN0IGFuIElFIGlzc3VlLlxuXHRcdFx0XHR9IGVsc2UgaWYgKF9pc1NhZmFyaSkge1xuXHRcdFx0XHRcdF9yZXFTYWZhcmlGaXggPSB0cnVlO1xuXHRcdFx0XHRcdC8vaWYgekluZGV4IGlzbid0IHNldCwgaU9TIFNhZmFyaSBkb2Vzbid0IHJlcGFpbnQgdGhpbmdzIGNvcnJlY3RseSBzb21ldGltZXMgKHNlZW1pbmdseSBhdCByYW5kb20pLlxuXHRcdFx0XHRcdGlmIChzdHlsZS56SW5kZXggPT09IFwiXCIpIHtcblx0XHRcdFx0XHRcdHpJbmRleCA9IF9nZXRTdHlsZSh0YXJnZXQsIFwiekluZGV4XCIsIF9jcyk7XG5cdFx0XHRcdFx0XHRpZiAoekluZGV4ID09PSBcImF1dG9cIiB8fCB6SW5kZXggPT09IFwiXCIpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5fYWRkTGF6eVNldChzdHlsZSwgXCJ6SW5kZXhcIiwgMCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vU2V0dGluZyBXZWJraXRCYWNrZmFjZVZpc2liaWxpdHkgY29ycmVjdHMgMyBidWdzOlxuXHRcdFx0XHRcdC8vIDEpIFtub24tQW5kcm9pZF0gU2FmYXJpIHNraXBzIHJlbmRlcmluZyBjaGFuZ2VzIHRvIFwidG9wXCIgYW5kIFwibGVmdFwiIHRoYXQgYXJlIG1hZGUgb24gdGhlIHNhbWUgZnJhbWUvcmVuZGVyIGFzIGEgdHJhbnNmb3JtIHVwZGF0ZS5cblx0XHRcdFx0XHQvLyAyKSBpT1MgU2FmYXJpIHNvbWV0aW1lcyBuZWdsZWN0cyB0byByZXBhaW50IGVsZW1lbnRzIGluIHRoZWlyIG5ldyBwb3NpdGlvbnMuIFNldHRpbmcgXCJXZWJraXRQZXJzcGVjdGl2ZVwiIHRvIGEgbm9uLXplcm8gdmFsdWUgd29ya2VkIHRvbyBleGNlcHQgdGhhdCBvbiBpT1MgU2FmYXJpIHRoaW5ncyB3b3VsZCBmbGlja2VyIHJhbmRvbWx5LlxuXHRcdFx0XHRcdC8vIDMpIFNhZmFyaSBzb21ldGltZXMgZGlzcGxheWVkIG9kZCBhcnRpZmFjdHMgd2hlbiB0d2VlbmluZyB0aGUgdHJhbnNmb3JtIChvciBXZWJraXRUcmFuc2Zvcm0pIHByb3BlcnR5LCBsaWtlIGdob3N0cyBvZiB0aGUgZWRnZXMgb2YgdGhlIGVsZW1lbnQgcmVtYWluZWQuIERlZmluaXRlbHkgYSBicm93c2VyIGJ1Zy5cblx0XHRcdFx0XHQvL05vdGU6IHdlIGFsbG93IHRoZSB1c2VyIHRvIG92ZXJyaWRlIHRoZSBhdXRvLXNldHRpbmcgYnkgZGVmaW5pbmcgV2Via2l0QmFja2ZhY2VWaXNpYmlsaXR5IGluIHRoZSB2YXJzIG9mIHRoZSB0d2Vlbi5cblx0XHRcdFx0XHRpZiAoX2lzU2FmYXJpTFQ2KSB7XG5cdFx0XHRcdFx0XHR0aGlzLl9hZGRMYXp5U2V0KHN0eWxlLCBcIldlYmtpdEJhY2tmYWNlVmlzaWJpbGl0eVwiLCB0aGlzLl92YXJzLldlYmtpdEJhY2tmYWNlVmlzaWJpbGl0eSB8fCAodGhyZWVEID8gXCJ2aXNpYmxlXCIgOiBcImhpZGRlblwiKSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHB0MiA9IHB0O1xuXHRcdFx0XHR3aGlsZSAocHQyICYmIHB0Mi5fbmV4dCkge1xuXHRcdFx0XHRcdHB0MiA9IHB0Mi5fbmV4dDtcblx0XHRcdFx0fVxuXHRcdFx0XHR0cHQgPSBuZXcgQ1NTUHJvcFR3ZWVuKHRhcmdldCwgXCJ0cmFuc2Zvcm1cIiwgMCwgMCwgbnVsbCwgMik7XG5cdFx0XHRcdHRoaXMuX2xpbmtDU1NQKHRwdCwgbnVsbCwgcHQyKTtcblx0XHRcdFx0dHB0LnNldFJhdGlvID0gX3RyYW5zZm9ybVByb3AgPyBfc2V0VHJhbnNmb3JtUmF0aW8gOiBfc2V0SUVUcmFuc2Zvcm1SYXRpbztcblx0XHRcdFx0dHB0LmRhdGEgPSB0aGlzLl90cmFuc2Zvcm0gfHwgX2dldFRyYW5zZm9ybSh0YXJnZXQsIF9jcywgdHJ1ZSk7XG5cdFx0XHRcdHRwdC50d2VlbiA9IHR3ZWVuO1xuXHRcdFx0XHR0cHQucHIgPSAtMTsgLy9lbnN1cmVzIHRoYXQgdGhlIHRyYW5zZm9ybXMgZ2V0IGFwcGxpZWQgYWZ0ZXIgdGhlIGNvbXBvbmVudHMgYXJlIHVwZGF0ZWQuXG5cdFx0XHRcdF9vdmVyd3JpdGVQcm9wcy5wb3AoKTsgLy93ZSBkb24ndCB3YW50IHRvIGZvcmNlIHRoZSBvdmVyd3JpdGUgb2YgYWxsIFwidHJhbnNmb3JtXCIgdHdlZW5zIG9mIHRoZSB0YXJnZXQgLSB3ZSBvbmx5IGNhcmUgYWJvdXQgaW5kaXZpZHVhbCB0cmFuc2Zvcm0gcHJvcGVydGllcyBsaWtlIHNjYWxlWCwgcm90YXRpb24sIGV0Yy4gVGhlIENTU1Byb3BUd2VlbiBjb25zdHJ1Y3RvciBhdXRvbWF0aWNhbGx5IGFkZHMgdGhlIHByb3BlcnR5IHRvIF9vdmVyd3JpdGVQcm9wcyB3aGljaCBpcyB3aHkgd2UgbmVlZCB0byBwb3AoKSBoZXJlLlxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoX2hhc1ByaW9yaXR5KSB7XG5cdFx0XHRcdC8vcmVvcmRlcnMgdGhlIGxpbmtlZCBsaXN0IGluIG9yZGVyIG9mIHByIChwcmlvcml0eSlcblx0XHRcdFx0d2hpbGUgKHB0KSB7XG5cdFx0XHRcdFx0bmV4dCA9IHB0Ll9uZXh0O1xuXHRcdFx0XHRcdHB0MiA9IGZpcnN0O1xuXHRcdFx0XHRcdHdoaWxlIChwdDIgJiYgcHQyLnByID4gcHQucHIpIHtcblx0XHRcdFx0XHRcdHB0MiA9IHB0Mi5fbmV4dDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKChwdC5fcHJldiA9IHB0MiA/IHB0Mi5fcHJldiA6IGxhc3QpKSB7XG5cdFx0XHRcdFx0XHRwdC5fcHJldi5fbmV4dCA9IHB0O1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRmaXJzdCA9IHB0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoKHB0Ll9uZXh0ID0gcHQyKSkge1xuXHRcdFx0XHRcdFx0cHQyLl9wcmV2ID0gcHQ7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGxhc3QgPSBwdDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cHQgPSBuZXh0O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuX2ZpcnN0UFQgPSBmaXJzdDtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH07XG5cblxuXHRcdHAucGFyc2UgPSBmdW5jdGlvbih0YXJnZXQsIHZhcnMsIHB0LCBwbHVnaW4pIHtcblx0XHRcdHZhciBzdHlsZSA9IHRhcmdldC5zdHlsZSxcblx0XHRcdFx0cCwgc3AsIGJuLCBlbiwgYnMsIGVzLCBic2Z4LCBlc2Z4LCBpc1N0ciwgcmVsO1xuXHRcdFx0Zm9yIChwIGluIHZhcnMpIHtcblx0XHRcdFx0ZXMgPSB2YXJzW3BdOyAvL2VuZGluZyB2YWx1ZSBzdHJpbmdcblx0XHRcdFx0c3AgPSBfc3BlY2lhbFByb3BzW3BdOyAvL1NwZWNpYWxQcm9wIGxvb2t1cC5cblx0XHRcdFx0aWYgKHNwKSB7XG5cdFx0XHRcdFx0cHQgPSBzcC5wYXJzZSh0YXJnZXQsIGVzLCBwLCB0aGlzLCBwdCwgcGx1Z2luLCB2YXJzKTtcblxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGJzID0gX2dldFN0eWxlKHRhcmdldCwgcCwgX2NzKSArIFwiXCI7XG5cdFx0XHRcdFx0aXNTdHIgPSAodHlwZW9mKGVzKSA9PT0gXCJzdHJpbmdcIik7XG5cdFx0XHRcdFx0aWYgKHAgPT09IFwiY29sb3JcIiB8fCBwID09PSBcImZpbGxcIiB8fCBwID09PSBcInN0cm9rZVwiIHx8IHAuaW5kZXhPZihcIkNvbG9yXCIpICE9PSAtMSB8fCAoaXNTdHIgJiYgX3JnYmhzbEV4cC50ZXN0KGVzKSkpIHsgLy9PcGVyYSB1c2VzIGJhY2tncm91bmQ6IHRvIGRlZmluZSBjb2xvciBzb21ldGltZXMgaW4gYWRkaXRpb24gdG8gYmFja2dyb3VuZENvbG9yOlxuXHRcdFx0XHRcdFx0aWYgKCFpc1N0cikge1xuXHRcdFx0XHRcdFx0XHRlcyA9IF9wYXJzZUNvbG9yKGVzKTtcblx0XHRcdFx0XHRcdFx0ZXMgPSAoKGVzLmxlbmd0aCA+IDMpID8gXCJyZ2JhKFwiIDogXCJyZ2IoXCIpICsgZXMuam9pbihcIixcIikgKyBcIilcIjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHB0ID0gX3BhcnNlQ29tcGxleChzdHlsZSwgcCwgYnMsIGVzLCB0cnVlLCBcInRyYW5zcGFyZW50XCIsIHB0LCAwLCBwbHVnaW4pO1xuXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChpc1N0ciAmJiAoZXMuaW5kZXhPZihcIiBcIikgIT09IC0xIHx8IGVzLmluZGV4T2YoXCIsXCIpICE9PSAtMSkpIHtcblx0XHRcdFx0XHRcdHB0ID0gX3BhcnNlQ29tcGxleChzdHlsZSwgcCwgYnMsIGVzLCB0cnVlLCBudWxsLCBwdCwgMCwgcGx1Z2luKTtcblxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRibiA9IHBhcnNlRmxvYXQoYnMpO1xuXHRcdFx0XHRcdFx0YnNmeCA9IChibiB8fCBibiA9PT0gMCkgPyBicy5zdWJzdHIoKGJuICsgXCJcIikubGVuZ3RoKSA6IFwiXCI7IC8vcmVtZW1iZXIsIGJzIGNvdWxkIGJlIG5vbi1udW1lcmljIGxpa2UgXCJub3JtYWxcIiBmb3IgZm9udFdlaWdodCwgc28gd2Ugc2hvdWxkIGRlZmF1bHQgdG8gYSBibGFuayBzdWZmaXggaW4gdGhhdCBjYXNlLlxuXG5cdFx0XHRcdFx0XHRpZiAoYnMgPT09IFwiXCIgfHwgYnMgPT09IFwiYXV0b1wiKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChwID09PSBcIndpZHRoXCIgfHwgcCA9PT0gXCJoZWlnaHRcIikge1xuXHRcdFx0XHRcdFx0XHRcdGJuID0gX2dldERpbWVuc2lvbih0YXJnZXQsIHAsIF9jcyk7XG5cdFx0XHRcdFx0XHRcdFx0YnNmeCA9IFwicHhcIjtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChwID09PSBcImxlZnRcIiB8fCBwID09PSBcInRvcFwiKSB7XG5cdFx0XHRcdFx0XHRcdFx0Ym4gPSBfY2FsY3VsYXRlT2Zmc2V0KHRhcmdldCwgcCwgX2NzKTtcblx0XHRcdFx0XHRcdFx0XHRic2Z4ID0gXCJweFwiO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdGJuID0gKHAgIT09IFwib3BhY2l0eVwiKSA/IDAgOiAxO1xuXHRcdFx0XHRcdFx0XHRcdGJzZnggPSBcIlwiO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHJlbCA9IChpc1N0ciAmJiBlcy5jaGFyQXQoMSkgPT09IFwiPVwiKTtcblx0XHRcdFx0XHRcdGlmIChyZWwpIHtcblx0XHRcdFx0XHRcdFx0ZW4gPSBwYXJzZUludChlcy5jaGFyQXQoMCkgKyBcIjFcIiwgMTApO1xuXHRcdFx0XHRcdFx0XHRlcyA9IGVzLnN1YnN0cigyKTtcblx0XHRcdFx0XHRcdFx0ZW4gKj0gcGFyc2VGbG9hdChlcyk7XG5cdFx0XHRcdFx0XHRcdGVzZnggPSBlcy5yZXBsYWNlKF9zdWZmaXhFeHAsIFwiXCIpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0ZW4gPSBwYXJzZUZsb2F0KGVzKTtcblx0XHRcdFx0XHRcdFx0ZXNmeCA9IGlzU3RyID8gZXMucmVwbGFjZShfc3VmZml4RXhwLCBcIlwiKSA6IFwiXCI7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGlmIChlc2Z4ID09PSBcIlwiKSB7XG5cdFx0XHRcdFx0XHRcdGVzZnggPSAocCBpbiBfc3VmZml4TWFwKSA/IF9zdWZmaXhNYXBbcF0gOiBic2Z4OyAvL3BvcHVsYXRlIHRoZSBlbmQgc3VmZml4LCBwcmlvcml0aXppbmcgdGhlIG1hcCwgdGhlbiBpZiBub25lIGlzIGZvdW5kLCB1c2UgdGhlIGJlZ2lubmluZyBzdWZmaXguXG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGVzID0gKGVuIHx8IGVuID09PSAwKSA/IChyZWwgPyBlbiArIGJuIDogZW4pICsgZXNmeCA6IHZhcnNbcF07IC8vZW5zdXJlcyB0aGF0IGFueSArPSBvciAtPSBwcmVmaXhlcyBhcmUgdGFrZW4gY2FyZSBvZi4gUmVjb3JkIHRoZSBlbmQgdmFsdWUgYmVmb3JlIG5vcm1hbGl6aW5nIHRoZSBzdWZmaXggYmVjYXVzZSB3ZSBhbHdheXMgd2FudCB0byBlbmQgdGhlIHR3ZWVuIG9uIGV4YWN0bHkgd2hhdCB0aGV5IGludGVuZGVkIGV2ZW4gaWYgaXQgZG9lc24ndCBtYXRjaCB0aGUgYmVnaW5uaW5nIHZhbHVlJ3Mgc3VmZml4LlxuXG5cdFx0XHRcdFx0XHQvL2lmIHRoZSBiZWdpbm5pbmcvZW5kaW5nIHN1ZmZpeGVzIGRvbid0IG1hdGNoLCBub3JtYWxpemUgdGhlbS4uLlxuXHRcdFx0XHRcdFx0aWYgKGJzZnggIT09IGVzZngpIGlmIChlc2Z4ICE9PSBcIlwiKSBpZiAoZW4gfHwgZW4gPT09IDApIGlmIChibikgeyAvL25vdGU6IGlmIHRoZSBiZWdpbm5pbmcgdmFsdWUgKGJuKSBpcyAwLCB3ZSBkb24ndCBuZWVkIHRvIGNvbnZlcnQgdW5pdHMhXG5cdFx0XHRcdFx0XHRcdGJuID0gX2NvbnZlcnRUb1BpeGVscyh0YXJnZXQsIHAsIGJuLCBic2Z4KTtcblx0XHRcdFx0XHRcdFx0aWYgKGVzZnggPT09IFwiJVwiKSB7XG5cdFx0XHRcdFx0XHRcdFx0Ym4gLz0gX2NvbnZlcnRUb1BpeGVscyh0YXJnZXQsIHAsIDEwMCwgXCIlXCIpIC8gMTAwO1xuXHRcdFx0XHRcdFx0XHRcdGlmICh2YXJzLnN0cmljdFVuaXRzICE9PSB0cnVlKSB7IC8vc29tZSBicm93c2VycyByZXBvcnQgb25seSBcInB4XCIgdmFsdWVzIGluc3RlYWQgb2YgYWxsb3dpbmcgXCIlXCIgd2l0aCBnZXRDb21wdXRlZFN0eWxlKCksIHNvIHdlIGFzc3VtZSB0aGF0IGlmIHdlJ3JlIHR3ZWVuaW5nIHRvIGEgJSwgd2Ugc2hvdWxkIHN0YXJ0IHRoZXJlIHRvbyB1bmxlc3Mgc3RyaWN0VW5pdHM6dHJ1ZSBpcyBkZWZpbmVkLiBUaGlzIGFwcHJvYWNoIGlzIHBhcnRpY3VsYXJseSB1c2VmdWwgZm9yIHJlc3BvbnNpdmUgZGVzaWducyB0aGF0IHVzZSBmcm9tKCkgdHdlZW5zLlxuXHRcdFx0XHRcdFx0XHRcdFx0YnMgPSBibiArIFwiJVwiO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKGVzZnggPT09IFwiZW1cIikge1xuXHRcdFx0XHRcdFx0XHRcdGJuIC89IF9jb252ZXJ0VG9QaXhlbHModGFyZ2V0LCBwLCAxLCBcImVtXCIpO1xuXG5cdFx0XHRcdFx0XHRcdC8vb3RoZXJ3aXNlIGNvbnZlcnQgdG8gcGl4ZWxzLlxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKGVzZnggIT09IFwicHhcIikge1xuXHRcdFx0XHRcdFx0XHRcdGVuID0gX2NvbnZlcnRUb1BpeGVscyh0YXJnZXQsIHAsIGVuLCBlc2Z4KTtcblx0XHRcdFx0XHRcdFx0XHRlc2Z4ID0gXCJweFwiOyAvL3dlIGRvbid0IHVzZSBic2Z4IGFmdGVyIHRoaXMsIHNvIHdlIGRvbid0IG5lZWQgdG8gc2V0IGl0IHRvIHB4IHRvby5cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRpZiAocmVsKSBpZiAoZW4gfHwgZW4gPT09IDApIHtcblx0XHRcdFx0XHRcdFx0XHRlcyA9IChlbiArIGJuKSArIGVzZng7IC8vdGhlIGNoYW5nZXMgd2UgbWFkZSBhZmZlY3QgcmVsYXRpdmUgY2FsY3VsYXRpb25zLCBzbyBhZGp1c3QgdGhlIGVuZCB2YWx1ZSBoZXJlLlxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGlmIChyZWwpIHtcblx0XHRcdFx0XHRcdFx0ZW4gKz0gYm47XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGlmICgoYm4gfHwgYm4gPT09IDApICYmIChlbiB8fCBlbiA9PT0gMCkpIHsgLy9mYXN0ZXIgdGhhbiBpc05hTigpLiBBbHNvLCBwcmV2aW91c2x5IHdlIHJlcXVpcmVkIGVuICE9PSBibiBidXQgdGhhdCBkb2Vzbid0IHJlYWxseSBnYWluIG11Y2ggcGVyZm9ybWFuY2UgYW5kIGl0IHByZXZlbnRzIF9wYXJzZVRvUHJveHkoKSBmcm9tIHdvcmtpbmcgcHJvcGVybHkgaWYgYmVnaW5uaW5nIGFuZCBlbmRpbmcgdmFsdWVzIG1hdGNoIGJ1dCBuZWVkIHRvIGdldCB0d2VlbmVkIGJ5IGFuIGV4dGVybmFsIHBsdWdpbiBhbnl3YXkuIEZvciBleGFtcGxlLCBhIGJlemllciB0d2VlbiB3aGVyZSB0aGUgdGFyZ2V0IHN0YXJ0cyBhdCBsZWZ0OjAgYW5kIGhhcyB0aGVzZSBwb2ludHM6IFt7bGVmdDo1MH0se2xlZnQ6MH1dIHdvdWxkbid0IHdvcmsgcHJvcGVybHkgYmVjYXVzZSB3aGVuIHBhcnNpbmcgdGhlIGxhc3QgcG9pbnQsIGl0J2QgbWF0Y2ggdGhlIGZpcnN0IChjdXJyZW50KSBvbmUgYW5kIGEgbm9uLXR3ZWVuaW5nIENTU1Byb3BUd2VlbiB3b3VsZCBiZSByZWNvcmRlZCB3aGVuIHdlIGFjdHVhbGx5IG5lZWQgYSBub3JtYWwgdHdlZW4gKHR5cGU6MCkgc28gdGhhdCB0aGluZ3MgZ2V0IHVwZGF0ZWQgZHVyaW5nIHRoZSB0d2VlbiBwcm9wZXJseS5cblx0XHRcdFx0XHRcdFx0cHQgPSBuZXcgQ1NTUHJvcFR3ZWVuKHN0eWxlLCBwLCBibiwgZW4gLSBibiwgcHQsIDAsIHAsIChfYXV0b1JvdW5kICE9PSBmYWxzZSAmJiAoZXNmeCA9PT0gXCJweFwiIHx8IHAgPT09IFwiekluZGV4XCIpKSwgMCwgYnMsIGVzKTtcblx0XHRcdFx0XHRcdFx0cHQueHMwID0gZXNmeDtcblx0XHRcdFx0XHRcdFx0Ly9ERUJVRzogX2xvZyhcInR3ZWVuIFwiK3ArXCIgZnJvbSBcIitwdC5iK1wiIChcIitibitlc2Z4K1wiKSB0byBcIitwdC5lK1wiIHdpdGggc3VmZml4OiBcIitwdC54czApO1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChzdHlsZVtwXSA9PT0gdW5kZWZpbmVkIHx8ICFlcyAmJiAoZXMgKyBcIlwiID09PSBcIk5hTlwiIHx8IGVzID09IG51bGwpKSB7XG5cdFx0XHRcdFx0XHRcdF9sb2coXCJpbnZhbGlkIFwiICsgcCArIFwiIHR3ZWVuIHZhbHVlOiBcIiArIHZhcnNbcF0pO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0cHQgPSBuZXcgQ1NTUHJvcFR3ZWVuKHN0eWxlLCBwLCBlbiB8fCBibiB8fCAwLCAwLCBwdCwgLTEsIHAsIGZhbHNlLCAwLCBicywgZXMpO1xuXHRcdFx0XHRcdFx0XHRwdC54czAgPSAoZXMgPT09IFwibm9uZVwiICYmIChwID09PSBcImRpc3BsYXlcIiB8fCBwLmluZGV4T2YoXCJTdHlsZVwiKSAhPT0gLTEpKSA/IGJzIDogZXM7IC8vaW50ZXJtZWRpYXRlIHZhbHVlIHNob3VsZCB0eXBpY2FsbHkgYmUgc2V0IGltbWVkaWF0ZWx5IChlbmQgdmFsdWUpIGV4Y2VwdCBmb3IgXCJkaXNwbGF5XCIgb3IgdGhpbmdzIGxpa2UgYm9yZGVyVG9wU3R5bGUsIGJvcmRlckJvdHRvbVN0eWxlLCBldGMuIHdoaWNoIHNob3VsZCB1c2UgdGhlIGJlZ2lubmluZyB2YWx1ZSBkdXJpbmcgdGhlIHR3ZWVuLlxuXHRcdFx0XHRcdFx0XHQvL0RFQlVHOiBfbG9nKFwibm9uLXR3ZWVuaW5nIHZhbHVlIFwiK3ArXCI6IFwiK3B0LnhzMCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChwbHVnaW4pIGlmIChwdCAmJiAhcHQucGx1Z2luKSB7XG5cdFx0XHRcdFx0cHQucGx1Z2luID0gcGx1Z2luO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcHQ7XG5cdFx0fTtcblxuXG5cdFx0Ly9nZXRzIGNhbGxlZCBldmVyeSB0aW1lIHRoZSB0d2VlbiB1cGRhdGVzLCBwYXNzaW5nIHRoZSBuZXcgcmF0aW8gKHR5cGljYWxseSBhIHZhbHVlIGJldHdlZW4gMCBhbmQgMSwgYnV0IG5vdCBhbHdheXMgKGZvciBleGFtcGxlLCBpZiBhbiBFbGFzdGljLmVhc2VPdXQgaXMgdXNlZCwgdGhlIHZhbHVlIGNhbiBqdW1wIGFib3ZlIDEgbWlkLXR3ZWVuKS4gSXQgd2lsbCBhbHdheXMgc3RhcnQgYW5kIDAgYW5kIGVuZCBhdCAxLlxuXHRcdHAuc2V0UmF0aW8gPSBmdW5jdGlvbih2KSB7XG5cdFx0XHR2YXIgcHQgPSB0aGlzLl9maXJzdFBULFxuXHRcdFx0XHRtaW4gPSAwLjAwMDAwMSxcblx0XHRcdFx0dmFsLCBzdHIsIGk7XG5cdFx0XHQvL2F0IHRoZSBlbmQgb2YgdGhlIHR3ZWVuLCB3ZSBzZXQgdGhlIHZhbHVlcyB0byBleGFjdGx5IHdoYXQgd2UgcmVjZWl2ZWQgaW4gb3JkZXIgdG8gbWFrZSBzdXJlIG5vbi10d2VlbmluZyB2YWx1ZXMgKGxpa2UgXCJwb3NpdGlvblwiIG9yIFwiZmxvYXRcIiBvciB3aGF0ZXZlcikgYXJlIHNldCBhbmQgc28gdGhhdCBpZiB0aGUgYmVnaW5uaW5nL2VuZGluZyBzdWZmaXhlcyAodW5pdHMpIGRpZG4ndCBtYXRjaCBhbmQgd2Ugbm9ybWFsaXplZCB0byBweCwgdGhlIHZhbHVlIHRoYXQgdGhlIHVzZXIgcGFzc2VkIGluIGlzIHVzZWQgaGVyZS4gV2UgY2hlY2sgdG8gc2VlIGlmIHRoZSB0d2VlbiBpcyBhdCBpdHMgYmVnaW5uaW5nIGluIGNhc2UgaXQncyBhIGZyb20oKSB0d2VlbiBpbiB3aGljaCBjYXNlIHRoZSByYXRpbyB3aWxsIGFjdHVhbGx5IGdvIGZyb20gMSB0byAwIG92ZXIgdGhlIGNvdXJzZSBvZiB0aGUgdHdlZW4gKGJhY2t3YXJkcykuXG5cdFx0XHRpZiAodiA9PT0gMSAmJiAodGhpcy5fdHdlZW4uX3RpbWUgPT09IHRoaXMuX3R3ZWVuLl9kdXJhdGlvbiB8fCB0aGlzLl90d2Vlbi5fdGltZSA9PT0gMCkpIHtcblx0XHRcdFx0d2hpbGUgKHB0KSB7XG5cdFx0XHRcdFx0aWYgKHB0LnR5cGUgIT09IDIpIHtcblx0XHRcdFx0XHRcdHB0LnRbcHQucF0gPSBwdC5lO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRwdC5zZXRSYXRpbyh2KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cHQgPSBwdC5fbmV4dDtcblx0XHRcdFx0fVxuXG5cdFx0XHR9IGVsc2UgaWYgKHYgfHwgISh0aGlzLl90d2Vlbi5fdGltZSA9PT0gdGhpcy5fdHdlZW4uX2R1cmF0aW9uIHx8IHRoaXMuX3R3ZWVuLl90aW1lID09PSAwKSB8fCB0aGlzLl90d2Vlbi5fcmF3UHJldlRpbWUgPT09IC0wLjAwMDAwMSkge1xuXHRcdFx0XHR3aGlsZSAocHQpIHtcblx0XHRcdFx0XHR2YWwgPSBwdC5jICogdiArIHB0LnM7XG5cdFx0XHRcdFx0aWYgKHB0LnIpIHtcblx0XHRcdFx0XHRcdHZhbCA9IE1hdGgucm91bmQodmFsKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHZhbCA8IG1pbikgaWYgKHZhbCA+IC1taW4pIHtcblx0XHRcdFx0XHRcdHZhbCA9IDA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICghcHQudHlwZSkge1xuXHRcdFx0XHRcdFx0cHQudFtwdC5wXSA9IHZhbCArIHB0LnhzMDtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHB0LnR5cGUgPT09IDEpIHsgLy9jb21wbGV4IHZhbHVlIChvbmUgdGhhdCB0eXBpY2FsbHkgaGFzIG11bHRpcGxlIG51bWJlcnMgaW5zaWRlIGEgc3RyaW5nLCBsaWtlIFwicmVjdCg1cHgsMTBweCwyMHB4LDI1cHgpXCJcblx0XHRcdFx0XHRcdGkgPSBwdC5sO1xuXHRcdFx0XHRcdFx0aWYgKGkgPT09IDIpIHtcblx0XHRcdFx0XHRcdFx0cHQudFtwdC5wXSA9IHB0LnhzMCArIHZhbCArIHB0LnhzMSArIHB0LnhuMSArIHB0LnhzMjtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoaSA9PT0gMykge1xuXHRcdFx0XHRcdFx0XHRwdC50W3B0LnBdID0gcHQueHMwICsgdmFsICsgcHQueHMxICsgcHQueG4xICsgcHQueHMyICsgcHQueG4yICsgcHQueHMzO1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChpID09PSA0KSB7XG5cdFx0XHRcdFx0XHRcdHB0LnRbcHQucF0gPSBwdC54czAgKyB2YWwgKyBwdC54czEgKyBwdC54bjEgKyBwdC54czIgKyBwdC54bjIgKyBwdC54czMgKyBwdC54bjMgKyBwdC54czQ7XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKGkgPT09IDUpIHtcblx0XHRcdFx0XHRcdFx0cHQudFtwdC5wXSA9IHB0LnhzMCArIHZhbCArIHB0LnhzMSArIHB0LnhuMSArIHB0LnhzMiArIHB0LnhuMiArIHB0LnhzMyArIHB0LnhuMyArIHB0LnhzNCArIHB0LnhuNCArIHB0LnhzNTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHN0ciA9IHB0LnhzMCArIHZhbCArIHB0LnhzMTtcblx0XHRcdFx0XHRcdFx0Zm9yIChpID0gMTsgaSA8IHB0Lmw7IGkrKykge1xuXHRcdFx0XHRcdFx0XHRcdHN0ciArPSBwdFtcInhuXCIraV0gKyBwdFtcInhzXCIrKGkrMSldO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHB0LnRbcHQucF0gPSBzdHI7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR9IGVsc2UgaWYgKHB0LnR5cGUgPT09IC0xKSB7IC8vbm9uLXR3ZWVuaW5nIHZhbHVlXG5cdFx0XHRcdFx0XHRwdC50W3B0LnBdID0gcHQueHMwO1xuXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChwdC5zZXRSYXRpbykgeyAvL2N1c3RvbSBzZXRSYXRpbygpIGZvciB0aGluZ3MgbGlrZSBTcGVjaWFsUHJvcHMsIGV4dGVybmFsIHBsdWdpbnMsIGV0Yy5cblx0XHRcdFx0XHRcdHB0LnNldFJhdGlvKHYpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRwdCA9IHB0Ll9uZXh0O1xuXHRcdFx0XHR9XG5cblx0XHRcdC8vaWYgdGhlIHR3ZWVuIGlzIHJldmVyc2VkIGFsbCB0aGUgd2F5IGJhY2sgdG8gdGhlIGJlZ2lubmluZywgd2UgbmVlZCB0byByZXN0b3JlIHRoZSBvcmlnaW5hbCB2YWx1ZXMgd2hpY2ggbWF5IGhhdmUgZGlmZmVyZW50IHVuaXRzIChsaWtlICUgaW5zdGVhZCBvZiBweCBvciBlbSBvciB3aGF0ZXZlcikuXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR3aGlsZSAocHQpIHtcblx0XHRcdFx0XHRpZiAocHQudHlwZSAhPT0gMikge1xuXHRcdFx0XHRcdFx0cHQudFtwdC5wXSA9IHB0LmI7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHB0LnNldFJhdGlvKHYpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRwdCA9IHB0Ll9uZXh0O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICogRm9yY2VzIHJlbmRlcmluZyBvZiB0aGUgdGFyZ2V0J3MgdHJhbnNmb3JtcyAocm90YXRpb24sIHNjYWxlLCBldGMuKSB3aGVuZXZlciB0aGUgQ1NTUGx1Z2luJ3Mgc2V0UmF0aW8oKSBpcyBjYWxsZWQuXG5cdFx0ICogQmFzaWNhbGx5LCB0aGlzIHRlbGxzIHRoZSBDU1NQbHVnaW4gdG8gY3JlYXRlIGEgQ1NTUHJvcFR3ZWVuICh0eXBlIDIpIGFmdGVyIGluc3RhbnRpYXRpb24gdGhhdCBydW5zIGxhc3QgaW4gdGhlIGxpbmtlZFxuXHRcdCAqIGxpc3QgYW5kIGNhbGxzIHRoZSBhcHByb3ByaWF0ZSAoM0Qgb3IgMkQpIHJlbmRlcmluZyBmdW5jdGlvbi4gV2Ugc2VwYXJhdGUgdGhpcyBpbnRvIGl0cyBvd24gbWV0aG9kIHNvIHRoYXQgd2UgY2FuIGNhbGxcblx0XHQgKiBpdCBmcm9tIG90aGVyIHBsdWdpbnMgbGlrZSBCZXppZXJQbHVnaW4gaWYsIGZvciBleGFtcGxlLCBpdCBuZWVkcyB0byBhcHBseSBhbiBhdXRvUm90YXRpb24gYW5kIHRoaXMgQ1NTUGx1Z2luXG5cdFx0ICogZG9lc24ndCBoYXZlIGFueSB0cmFuc2Zvcm0tcmVsYXRlZCBwcm9wZXJ0aWVzIG9mIGl0cyBvd24uIFlvdSBjYW4gY2FsbCB0aGlzIG1ldGhvZCBhcyBtYW55IHRpbWVzIGFzIHlvdVxuXHRcdCAqIHdhbnQgYW5kIGl0IHdvbid0IGNyZWF0ZSBkdXBsaWNhdGUgQ1NTUHJvcFR3ZWVucy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gdGhyZWVEIGlmIHRydWUsIGl0IHNob3VsZCBhcHBseSAzRCB0d2VlbnMgKG90aGVyd2lzZSwganVzdCAyRCBvbmVzIGFyZSBmaW5lIGFuZCB0eXBpY2FsbHkgZmFzdGVyKVxuXHRcdCAqL1xuXHRcdHAuX2VuYWJsZVRyYW5zZm9ybXMgPSBmdW5jdGlvbih0aHJlZUQpIHtcblx0XHRcdHRoaXMuX3RyYW5zZm9ybSA9IHRoaXMuX3RyYW5zZm9ybSB8fCBfZ2V0VHJhbnNmb3JtKHRoaXMuX3RhcmdldCwgX2NzLCB0cnVlKTsgLy9lbnN1cmVzIHRoYXQgdGhlIGVsZW1lbnQgaGFzIGEgX2dzVHJhbnNmb3JtIHByb3BlcnR5IHdpdGggdGhlIGFwcHJvcHJpYXRlIHZhbHVlcy5cblx0XHRcdHRoaXMuX3RyYW5zZm9ybVR5cGUgPSAoISh0aGlzLl90cmFuc2Zvcm0uc3ZnICYmIF91c2VTVkdUcmFuc2Zvcm1BdHRyKSAmJiAodGhyZWVEIHx8IHRoaXMuX3RyYW5zZm9ybVR5cGUgPT09IDMpKSA/IDMgOiAyO1xuXHRcdH07XG5cblx0XHR2YXIgbGF6eVNldCA9IGZ1bmN0aW9uKHYpIHtcblx0XHRcdHRoaXMudFt0aGlzLnBdID0gdGhpcy5lO1xuXHRcdFx0dGhpcy5kYXRhLl9saW5rQ1NTUCh0aGlzLCB0aGlzLl9uZXh0LCBudWxsLCB0cnVlKTsgLy93ZSBwdXJwb3NlZnVsbHkga2VlcCB0aGlzLl9uZXh0IGV2ZW4gdGhvdWdoIGl0J2QgbWFrZSBzZW5zZSB0byBudWxsIGl0LCBidXQgdGhpcyBpcyBhIHBlcmZvcm1hbmNlIG9wdGltaXphdGlvbiwgYXMgdGhpcyBoYXBwZW5zIGR1cmluZyB0aGUgd2hpbGUgKHB0KSB7fSBsb29wIGluIHNldFJhdGlvKCkgYXQgdGhlIGJvdHRvbSBvZiB3aGljaCBpdCBzZXRzIHB0ID0gcHQuX25leHQsIHNvIGlmIHdlIG51bGwgaXQsIHRoZSBsaW5rZWQgbGlzdCB3aWxsIGJlIGJyb2tlbiBpbiB0aGF0IGxvb3AuXG5cdFx0fTtcblx0XHQvKiogQHByaXZhdGUgR2l2ZXMgdXMgYSB3YXkgdG8gc2V0IGEgdmFsdWUgb24gdGhlIGZpcnN0IHJlbmRlciAoYW5kIG9ubHkgdGhlIGZpcnN0IHJlbmRlcikuICoqL1xuXHRcdHAuX2FkZExhenlTZXQgPSBmdW5jdGlvbih0LCBwLCB2KSB7XG5cdFx0XHR2YXIgcHQgPSB0aGlzLl9maXJzdFBUID0gbmV3IENTU1Byb3BUd2Vlbih0LCBwLCAwLCAwLCB0aGlzLl9maXJzdFBULCAyKTtcblx0XHRcdHB0LmUgPSB2O1xuXHRcdFx0cHQuc2V0UmF0aW8gPSBsYXp5U2V0O1xuXHRcdFx0cHQuZGF0YSA9IHRoaXM7XG5cdFx0fTtcblxuXHRcdC8qKiBAcHJpdmF0ZSAqKi9cblx0XHRwLl9saW5rQ1NTUCA9IGZ1bmN0aW9uKHB0LCBuZXh0LCBwcmV2LCByZW1vdmUpIHtcblx0XHRcdGlmIChwdCkge1xuXHRcdFx0XHRpZiAobmV4dCkge1xuXHRcdFx0XHRcdG5leHQuX3ByZXYgPSBwdDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAocHQuX25leHQpIHtcblx0XHRcdFx0XHRwdC5fbmV4dC5fcHJldiA9IHB0Ll9wcmV2O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChwdC5fcHJldikge1xuXHRcdFx0XHRcdHB0Ll9wcmV2Ll9uZXh0ID0gcHQuX25leHQ7XG5cdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5fZmlyc3RQVCA9PT0gcHQpIHtcblx0XHRcdFx0XHR0aGlzLl9maXJzdFBUID0gcHQuX25leHQ7XG5cdFx0XHRcdFx0cmVtb3ZlID0gdHJ1ZTsgLy9qdXN0IHRvIHByZXZlbnQgcmVzZXR0aW5nIHRoaXMuX2ZpcnN0UFQgNSBsaW5lcyBkb3duIGluIGNhc2UgcHQuX25leHQgaXMgbnVsbC4gKG9wdGltaXplZCBmb3Igc3BlZWQpXG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHByZXYpIHtcblx0XHRcdFx0XHRwcmV2Ll9uZXh0ID0gcHQ7XG5cdFx0XHRcdH0gZWxzZSBpZiAoIXJlbW92ZSAmJiB0aGlzLl9maXJzdFBUID09PSBudWxsKSB7XG5cdFx0XHRcdFx0dGhpcy5fZmlyc3RQVCA9IHB0O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHB0Ll9uZXh0ID0gbmV4dDtcblx0XHRcdFx0cHQuX3ByZXYgPSBwcmV2O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHB0O1xuXHRcdH07XG5cblx0XHQvL3dlIG5lZWQgdG8gbWFrZSBzdXJlIHRoYXQgaWYgYWxwaGEgb3IgYXV0b0FscGhhIGlzIGtpbGxlZCwgb3BhY2l0eSBpcyB0b28uIEFuZCBhdXRvQWxwaGEgYWZmZWN0cyB0aGUgXCJ2aXNpYmlsaXR5XCIgcHJvcGVydHkuXG5cdFx0cC5fa2lsbCA9IGZ1bmN0aW9uKGxvb2t1cCkge1xuXHRcdFx0dmFyIGNvcHkgPSBsb29rdXAsXG5cdFx0XHRcdHB0LCBwLCB4Zmlyc3Q7XG5cdFx0XHRpZiAobG9va3VwLmF1dG9BbHBoYSB8fCBsb29rdXAuYWxwaGEpIHtcblx0XHRcdFx0Y29weSA9IHt9O1xuXHRcdFx0XHRmb3IgKHAgaW4gbG9va3VwKSB7IC8vY29weSB0aGUgbG9va3VwIHNvIHRoYXQgd2UncmUgbm90IGNoYW5naW5nIHRoZSBvcmlnaW5hbCB3aGljaCBtYXkgYmUgcGFzc2VkIGVsc2V3aGVyZS5cblx0XHRcdFx0XHRjb3B5W3BdID0gbG9va3VwW3BdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvcHkub3BhY2l0eSA9IDE7XG5cdFx0XHRcdGlmIChjb3B5LmF1dG9BbHBoYSkge1xuXHRcdFx0XHRcdGNvcHkudmlzaWJpbGl0eSA9IDE7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChsb29rdXAuY2xhc3NOYW1lICYmIChwdCA9IHRoaXMuX2NsYXNzTmFtZVBUKSkgeyAvL2ZvciBjbGFzc05hbWUgdHdlZW5zLCB3ZSBuZWVkIHRvIGtpbGwgYW55IGFzc29jaWF0ZWQgQ1NTUHJvcFR3ZWVucyB0b287IGEgbGlua2VkIGxpc3Qgc3RhcnRzIGF0IHRoZSBjbGFzc05hbWUncyBcInhmaXJzdFwiLlxuXHRcdFx0XHR4Zmlyc3QgPSBwdC54Zmlyc3Q7XG5cdFx0XHRcdGlmICh4Zmlyc3QgJiYgeGZpcnN0Ll9wcmV2KSB7XG5cdFx0XHRcdFx0dGhpcy5fbGlua0NTU1AoeGZpcnN0Ll9wcmV2LCBwdC5fbmV4dCwgeGZpcnN0Ll9wcmV2Ll9wcmV2KTsgLy9icmVhayBvZmYgdGhlIHByZXZcblx0XHRcdFx0fSBlbHNlIGlmICh4Zmlyc3QgPT09IHRoaXMuX2ZpcnN0UFQpIHtcblx0XHRcdFx0XHR0aGlzLl9maXJzdFBUID0gcHQuX25leHQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHB0Ll9uZXh0KSB7XG5cdFx0XHRcdFx0dGhpcy5fbGlua0NTU1AocHQuX25leHQsIHB0Ll9uZXh0Ll9uZXh0LCB4Zmlyc3QuX3ByZXYpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuX2NsYXNzTmFtZVBUID0gbnVsbDtcblx0XHRcdH1cblx0XHRcdHJldHVybiBUd2VlblBsdWdpbi5wcm90b3R5cGUuX2tpbGwuY2FsbCh0aGlzLCBjb3B5KTtcblx0XHR9O1xuXG5cblxuXHRcdC8vdXNlZCBieSBjYXNjYWRlVG8oKSBmb3IgZ2F0aGVyaW5nIGFsbCB0aGUgc3R5bGUgcHJvcGVydGllcyBvZiBlYWNoIGNoaWxkIGVsZW1lbnQgaW50byBhbiBhcnJheSBmb3IgY29tcGFyaXNvbi5cblx0XHR2YXIgX2dldENoaWxkU3R5bGVzID0gZnVuY3Rpb24oZSwgcHJvcHMsIHRhcmdldHMpIHtcblx0XHRcdFx0dmFyIGNoaWxkcmVuLCBpLCBjaGlsZCwgdHlwZTtcblx0XHRcdFx0aWYgKGUuc2xpY2UpIHtcblx0XHRcdFx0XHRpID0gZS5sZW5ndGg7XG5cdFx0XHRcdFx0d2hpbGUgKC0taSA+IC0xKSB7XG5cdFx0XHRcdFx0XHRfZ2V0Q2hpbGRTdHlsZXMoZVtpXSwgcHJvcHMsIHRhcmdldHMpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2hpbGRyZW4gPSBlLmNoaWxkTm9kZXM7XG5cdFx0XHRcdGkgPSBjaGlsZHJlbi5sZW5ndGg7XG5cdFx0XHRcdHdoaWxlICgtLWkgPiAtMSkge1xuXHRcdFx0XHRcdGNoaWxkID0gY2hpbGRyZW5baV07XG5cdFx0XHRcdFx0dHlwZSA9IGNoaWxkLnR5cGU7XG5cdFx0XHRcdFx0aWYgKGNoaWxkLnN0eWxlKSB7XG5cdFx0XHRcdFx0XHRwcm9wcy5wdXNoKF9nZXRBbGxTdHlsZXMoY2hpbGQpKTtcblx0XHRcdFx0XHRcdGlmICh0YXJnZXRzKSB7XG5cdFx0XHRcdFx0XHRcdHRhcmdldHMucHVzaChjaGlsZCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICgodHlwZSA9PT0gMSB8fCB0eXBlID09PSA5IHx8IHR5cGUgPT09IDExKSAmJiBjaGlsZC5jaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0X2dldENoaWxkU3R5bGVzKGNoaWxkLCBwcm9wcywgdGFyZ2V0cyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogVHlwaWNhbGx5IG9ubHkgdXNlZnVsIGZvciBjbGFzc05hbWUgdHdlZW5zIHRoYXQgbWF5IGFmZmVjdCBjaGlsZCBlbGVtZW50cywgdGhpcyBtZXRob2QgY3JlYXRlcyBhIFR3ZWVuTGl0ZVxuXHRcdCAqIGFuZCB0aGVuIGNvbXBhcmVzIHRoZSBzdHlsZSBwcm9wZXJ0aWVzIG9mIGFsbCB0aGUgdGFyZ2V0J3MgY2hpbGQgZWxlbWVudHMgYXQgdGhlIHR3ZWVuJ3Mgc3RhcnQgYW5kIGVuZCwgYW5kXG5cdFx0ICogaWYgYW55IGFyZSBkaWZmZXJlbnQsIGl0IGFsc28gY3JlYXRlcyB0d2VlbnMgZm9yIHRob3NlIGFuZCByZXR1cm5zIGFuIGFycmF5IGNvbnRhaW5pbmcgQUxMIG9mIHRoZSByZXN1bHRpbmdcblx0XHQgKiB0d2VlbnMgKHNvIHRoYXQgeW91IGNhbiBlYXNpbHkgYWRkKCkgdGhlbSB0byBhIFRpbWVsaW5lTGl0ZSwgZm9yIGV4YW1wbGUpLiBUaGUgcmVhc29uIHRoaXMgZnVuY3Rpb25hbGl0eSBpc1xuXHRcdCAqIHdyYXBwZWQgaW50byBhIHNlcGFyYXRlIHN0YXRpYyBtZXRob2Qgb2YgQ1NTUGx1Z2luIGluc3RlYWQgb2YgYmVpbmcgaW50ZWdyYXRlZCBpbnRvIGFsbCByZWd1bGFyIGNsYXNzTmFtZSB0d2VlbnNcblx0XHQgKiBpcyBiZWNhdXNlIGl0IGNyZWF0ZXMgZW50aXJlbHkgbmV3IHR3ZWVucyB0aGF0IG1heSBoYXZlIGNvbXBsZXRlbHkgZGlmZmVyZW50IHRhcmdldHMgdGhhbiB0aGUgb3JpZ2luYWwgdHdlZW4sXG5cdFx0ICogc28gaWYgdGhleSB3ZXJlIGFsbCBsdW1wZWQgaW50byB0aGUgb3JpZ2luYWwgdHdlZW4gaW5zdGFuY2UsIGl0IHdvdWxkIGJlIGluY29uc2lzdGVudCB3aXRoIHRoZSByZXN0IG9mIHRoZSBBUElcblx0XHQgKiBhbmQgaXQgd291bGQgY3JlYXRlIG90aGVyIHByb2JsZW1zLiBGb3IgZXhhbXBsZTpcblx0XHQgKiAgLSBJZiBJIGNyZWF0ZSBhIHR3ZWVuIG9mIGVsZW1lbnRBLCB0aGF0IHR3ZWVuIGluc3RhbmNlIG1heSBzdWRkZW5seSBjaGFuZ2UgaXRzIHRhcmdldCB0byBpbmNsdWRlIDUwIG90aGVyIGVsZW1lbnRzICh1bmludHVpdGl2ZSBpZiBJIHNwZWNpZmljYWxseSBkZWZpbmVkIHRoZSB0YXJnZXQgSSB3YW50ZWQpXG5cdFx0ICogIC0gV2UgY2FuJ3QganVzdCBjcmVhdGUgbmV3IGluZGVwZW5kZW50IHR3ZWVucyBiZWNhdXNlIG90aGVyd2lzZSwgd2hhdCBoYXBwZW5zIGlmIHRoZSBvcmlnaW5hbC9wYXJlbnQgdHdlZW4gaXMgcmV2ZXJzZWQgb3IgcGF1c2Ugb3IgZHJvcHBlZCBpbnRvIGEgVGltZWxpbmVMaXRlIGZvciB0aWdodCBjb250cm9sPyBZb3UnZCBleHBlY3QgdGhhdCB0d2VlbidzIGJlaGF2aW9yIHRvIGFmZmVjdCBhbGwgdGhlIG90aGVycy5cblx0XHQgKiAgLSBBbmFseXppbmcgZXZlcnkgc3R5bGUgcHJvcGVydHkgb2YgZXZlcnkgY2hpbGQgYmVmb3JlIGFuZCBhZnRlciB0aGUgdHdlZW4gaXMgYW4gZXhwZW5zaXZlIG9wZXJhdGlvbiB3aGVuIHRoZXJlIGFyZSBtYW55IGNoaWxkcmVuLCBzbyB0aGlzIGJlaGF2aW9yIHNob3VsZG4ndCBiZSBpbXBvc2VkIG9uIGFsbCBjbGFzc05hbWUgdHdlZW5zIGJ5IGRlZmF1bHQsIGVzcGVjaWFsbHkgc2luY2UgaXQncyBwcm9iYWJseSByYXJlIHRoYXQgdGhpcyBleHRyYSBmdW5jdGlvbmFsaXR5IGlzIG5lZWRlZC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXQgb2JqZWN0IHRvIGJlIHR3ZWVuZWRcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gRHVyYXRpb24gaW4gc2Vjb25kcyAob3IgZnJhbWVzIGZvciBmcmFtZXMtYmFzZWQgdHdlZW5zKVxuXHRcdCAqIEBwYXJhbSB7T2JqZWN0fSBPYmplY3QgY29udGFpbmluZyB0aGUgZW5kIHZhbHVlcywgbGlrZSB7Y2xhc3NOYW1lOlwibmV3Q2xhc3NcIiwgZWFzZTpMaW5lYXIuZWFzZU5vbmV9XG5cdFx0ICogQHJldHVybiB7QXJyYXl9IEFuIGFycmF5IG9mIFR3ZWVuTGl0ZSBpbnN0YW5jZXNcblx0XHQgKi9cblx0XHRDU1NQbHVnaW4uY2FzY2FkZVRvID0gZnVuY3Rpb24odGFyZ2V0LCBkdXJhdGlvbiwgdmFycykge1xuXHRcdFx0dmFyIHR3ZWVuID0gVHdlZW5MaXRlLnRvKHRhcmdldCwgZHVyYXRpb24sIHZhcnMpLFxuXHRcdFx0XHRyZXN1bHRzID0gW3R3ZWVuXSxcblx0XHRcdFx0YiA9IFtdLFxuXHRcdFx0XHRlID0gW10sXG5cdFx0XHRcdHRhcmdldHMgPSBbXSxcblx0XHRcdFx0X3Jlc2VydmVkUHJvcHMgPSBUd2VlbkxpdGUuX2ludGVybmFscy5yZXNlcnZlZFByb3BzLFxuXHRcdFx0XHRpLCBkaWZzLCBwLCBmcm9tO1xuXHRcdFx0dGFyZ2V0ID0gdHdlZW4uX3RhcmdldHMgfHwgdHdlZW4udGFyZ2V0O1xuXHRcdFx0X2dldENoaWxkU3R5bGVzKHRhcmdldCwgYiwgdGFyZ2V0cyk7XG5cdFx0XHR0d2Vlbi5yZW5kZXIoZHVyYXRpb24sIHRydWUsIHRydWUpO1xuXHRcdFx0X2dldENoaWxkU3R5bGVzKHRhcmdldCwgZSk7XG5cdFx0XHR0d2Vlbi5yZW5kZXIoMCwgdHJ1ZSwgdHJ1ZSk7XG5cdFx0XHR0d2Vlbi5fZW5hYmxlZCh0cnVlKTtcblx0XHRcdGkgPSB0YXJnZXRzLmxlbmd0aDtcblx0XHRcdHdoaWxlICgtLWkgPiAtMSkge1xuXHRcdFx0XHRkaWZzID0gX2Nzc0RpZih0YXJnZXRzW2ldLCBiW2ldLCBlW2ldKTtcblx0XHRcdFx0aWYgKGRpZnMuZmlyc3RNUFQpIHtcblx0XHRcdFx0XHRkaWZzID0gZGlmcy5kaWZzO1xuXHRcdFx0XHRcdGZvciAocCBpbiB2YXJzKSB7XG5cdFx0XHRcdFx0XHRpZiAoX3Jlc2VydmVkUHJvcHNbcF0pIHtcblx0XHRcdFx0XHRcdFx0ZGlmc1twXSA9IHZhcnNbcF07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGZyb20gPSB7fTtcblx0XHRcdFx0XHRmb3IgKHAgaW4gZGlmcykge1xuXHRcdFx0XHRcdFx0ZnJvbVtwXSA9IGJbaV1bcF07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJlc3VsdHMucHVzaChUd2VlbkxpdGUuZnJvbVRvKHRhcmdldHNbaV0sIGR1cmF0aW9uLCBmcm9tLCBkaWZzKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiByZXN1bHRzO1xuXHRcdH07XG5cblx0XHRUd2VlblBsdWdpbi5hY3RpdmF0ZShbQ1NTUGx1Z2luXSk7XG5cdFx0cmV0dXJuIENTU1BsdWdpbjtcblxuXHR9LCB0cnVlKTtcblxuXHRcblx0XG5cdFxuXHRcblx0XG5cdFxuXHRcblx0XG5cdFxuXHRcbi8qXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBSb3VuZFByb3BzUGx1Z2luXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblx0KGZ1bmN0aW9uKCkge1xuXG5cdFx0dmFyIFJvdW5kUHJvcHNQbHVnaW4gPSBfZ3NTY29wZS5fZ3NEZWZpbmUucGx1Z2luKHtcblx0XHRcdFx0cHJvcE5hbWU6IFwicm91bmRQcm9wc1wiLFxuXHRcdFx0XHRwcmlvcml0eTogLTEsXG5cdFx0XHRcdEFQSTogMixcblxuXHRcdFx0XHQvL2NhbGxlZCB3aGVuIHRoZSB0d2VlbiByZW5kZXJzIGZvciB0aGUgZmlyc3QgdGltZS4gVGhpcyBpcyB3aGVyZSBpbml0aWFsIHZhbHVlcyBzaG91bGQgYmUgcmVjb3JkZWQgYW5kIGFueSBzZXR1cCByb3V0aW5lcyBzaG91bGQgcnVuLlxuXHRcdFx0XHRpbml0OiBmdW5jdGlvbih0YXJnZXQsIHZhbHVlLCB0d2Vlbikge1xuXHRcdFx0XHRcdHRoaXMuX3R3ZWVuID0gdHdlZW47XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0fSksXG5cdFx0XHRwID0gUm91bmRQcm9wc1BsdWdpbi5wcm90b3R5cGU7XG5cblx0XHRwLl9vbkluaXRBbGxQcm9wcyA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHR3ZWVuID0gdGhpcy5fdHdlZW4sXG5cdFx0XHRcdHJwID0gKHR3ZWVuLnZhcnMucm91bmRQcm9wcyBpbnN0YW5jZW9mIEFycmF5KSA/IHR3ZWVuLnZhcnMucm91bmRQcm9wcyA6IHR3ZWVuLnZhcnMucm91bmRQcm9wcy5zcGxpdChcIixcIiksXG5cdFx0XHRcdGkgPSBycC5sZW5ndGgsXG5cdFx0XHRcdGxvb2t1cCA9IHt9LFxuXHRcdFx0XHRycHQgPSB0d2Vlbi5fcHJvcExvb2t1cC5yb3VuZFByb3BzLFxuXHRcdFx0XHRwcm9wLCBwdCwgbmV4dDtcblx0XHRcdHdoaWxlICgtLWkgPiAtMSkge1xuXHRcdFx0XHRsb29rdXBbcnBbaV1dID0gMTtcblx0XHRcdH1cblx0XHRcdGkgPSBycC5sZW5ndGg7XG5cdFx0XHR3aGlsZSAoLS1pID4gLTEpIHtcblx0XHRcdFx0cHJvcCA9IHJwW2ldO1xuXHRcdFx0XHRwdCA9IHR3ZWVuLl9maXJzdFBUO1xuXHRcdFx0XHR3aGlsZSAocHQpIHtcblx0XHRcdFx0XHRuZXh0ID0gcHQuX25leHQ7IC8vcmVjb3JkIGhlcmUsIGJlY2F1c2UgaXQgbWF5IGdldCByZW1vdmVkXG5cdFx0XHRcdFx0aWYgKHB0LnBnKSB7XG5cdFx0XHRcdFx0XHRwdC50Ll9yb3VuZFByb3BzKGxvb2t1cCwgdHJ1ZSk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChwdC5uID09PSBwcm9wKSB7XG5cdFx0XHRcdFx0XHR0aGlzLl9hZGQocHQudCwgcHJvcCwgcHQucywgcHQuYyk7XG5cdFx0XHRcdFx0XHQvL3JlbW92ZSBmcm9tIGxpbmtlZCBsaXN0XG5cdFx0XHRcdFx0XHRpZiAobmV4dCkge1xuXHRcdFx0XHRcdFx0XHRuZXh0Ll9wcmV2ID0gcHQuX3ByZXY7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAocHQuX3ByZXYpIHtcblx0XHRcdFx0XHRcdFx0cHQuX3ByZXYuX25leHQgPSBuZXh0O1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmICh0d2Vlbi5fZmlyc3RQVCA9PT0gcHQpIHtcblx0XHRcdFx0XHRcdFx0dHdlZW4uX2ZpcnN0UFQgPSBuZXh0O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cHQuX25leHQgPSBwdC5fcHJldiA9IG51bGw7XG5cdFx0XHRcdFx0XHR0d2Vlbi5fcHJvcExvb2t1cFtwcm9wXSA9IHJwdDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cHQgPSBuZXh0O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fTtcblxuXHRcdHAuX2FkZCA9IGZ1bmN0aW9uKHRhcmdldCwgcCwgcywgYykge1xuXHRcdFx0dGhpcy5fYWRkVHdlZW4odGFyZ2V0LCBwLCBzLCBzICsgYywgcCwgdHJ1ZSk7XG5cdFx0XHR0aGlzLl9vdmVyd3JpdGVQcm9wcy5wdXNoKHApO1xuXHRcdH07XG5cblx0fSgpKTtcblxuXG5cblxuXG5cblxuXG5cblxuLypcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEF0dHJQbHVnaW5cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXHRfZ3NTY29wZS5fZ3NEZWZpbmUucGx1Z2luKHtcblx0XHRwcm9wTmFtZTogXCJhdHRyXCIsXG5cdFx0QVBJOiAyLFxuXHRcdHZlcnNpb246IFwiMC4zLjNcIixcblxuXHRcdC8vY2FsbGVkIHdoZW4gdGhlIHR3ZWVuIHJlbmRlcnMgZm9yIHRoZSBmaXJzdCB0aW1lLiBUaGlzIGlzIHdoZXJlIGluaXRpYWwgdmFsdWVzIHNob3VsZCBiZSByZWNvcmRlZCBhbmQgYW55IHNldHVwIHJvdXRpbmVzIHNob3VsZCBydW4uXG5cdFx0aW5pdDogZnVuY3Rpb24odGFyZ2V0LCB2YWx1ZSwgdHdlZW4pIHtcblx0XHRcdHZhciBwLCBzdGFydCwgZW5kO1xuXHRcdFx0aWYgKHR5cGVvZih0YXJnZXQuc2V0QXR0cmlidXRlKSAhPT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHRoaXMuX3RhcmdldCA9IHRhcmdldDtcblx0XHRcdHRoaXMuX3Byb3h5ID0ge307XG5cdFx0XHR0aGlzLl9zdGFydCA9IHt9OyAvLyB3ZSByZWNvcmQgc3RhcnQgYW5kIGVuZCB2YWx1ZXMgZXhhY3RseSBhcyB0aGV5IGFyZSBpbiBjYXNlIHRoZXkncmUgc3RyaW5ncyAobm90IG51bWJlcnMpIC0gd2UgbmVlZCB0byBiZSBhYmxlIHRvIHJldmVydCB0byB0aGVtIGNsZWFubHkuXG5cdFx0XHR0aGlzLl9lbmQgPSB7fTtcblx0XHRcdGZvciAocCBpbiB2YWx1ZSkge1xuXHRcdFx0XHR0aGlzLl9zdGFydFtwXSA9IHRoaXMuX3Byb3h5W3BdID0gc3RhcnQgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKHApO1xuXHRcdFx0XHRlbmQgPSB0aGlzLl9hZGRUd2Vlbih0aGlzLl9wcm94eSwgcCwgcGFyc2VGbG9hdChzdGFydCksIHZhbHVlW3BdLCBwKTtcblx0XHRcdFx0dGhpcy5fZW5kW3BdID0gZW5kID8gZW5kLnMgKyBlbmQuYyA6IHZhbHVlW3BdO1xuXHRcdFx0XHR0aGlzLl9vdmVyd3JpdGVQcm9wcy5wdXNoKHApO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSxcblxuXHRcdC8vY2FsbGVkIGVhY2ggdGltZSB0aGUgdmFsdWVzIHNob3VsZCBiZSB1cGRhdGVkLCBhbmQgdGhlIHJhdGlvIGdldHMgcGFzc2VkIGFzIHRoZSBvbmx5IHBhcmFtZXRlciAodHlwaWNhbGx5IGl0J3MgYSB2YWx1ZSBiZXR3ZWVuIDAgYW5kIDEsIGJ1dCBpdCBjYW4gZXhjZWVkIHRob3NlIHdoZW4gdXNpbmcgYW4gZWFzZSBsaWtlIEVsYXN0aWMuZWFzZU91dCBvciBCYWNrLmVhc2VPdXQsIGV0Yy4pXG5cdFx0c2V0OiBmdW5jdGlvbihyYXRpbykge1xuXHRcdFx0dGhpcy5fc3VwZXIuc2V0UmF0aW8uY2FsbCh0aGlzLCByYXRpbyk7XG5cdFx0XHR2YXIgcHJvcHMgPSB0aGlzLl9vdmVyd3JpdGVQcm9wcyxcblx0XHRcdFx0aSA9IHByb3BzLmxlbmd0aCxcblx0XHRcdFx0bG9va3VwID0gKHJhdGlvID09PSAxKSA/IHRoaXMuX2VuZCA6IHJhdGlvID8gdGhpcy5fcHJveHkgOiB0aGlzLl9zdGFydCxcblx0XHRcdFx0cDtcblx0XHRcdHdoaWxlICgtLWkgPiAtMSkge1xuXHRcdFx0XHRwID0gcHJvcHNbaV07XG5cdFx0XHRcdHRoaXMuX3RhcmdldC5zZXRBdHRyaWJ1dGUocCwgbG9va3VwW3BdICsgXCJcIik7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdH0pO1xuXG5cblxuXG5cblxuXG5cblxuXG4vKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGlyZWN0aW9uYWxSb3RhdGlvblBsdWdpblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cdF9nc1Njb3BlLl9nc0RlZmluZS5wbHVnaW4oe1xuXHRcdHByb3BOYW1lOiBcImRpcmVjdGlvbmFsUm90YXRpb25cIixcblx0XHR2ZXJzaW9uOiBcIjAuMi4xXCIsXG5cdFx0QVBJOiAyLFxuXG5cdFx0Ly9jYWxsZWQgd2hlbiB0aGUgdHdlZW4gcmVuZGVycyBmb3IgdGhlIGZpcnN0IHRpbWUuIFRoaXMgaXMgd2hlcmUgaW5pdGlhbCB2YWx1ZXMgc2hvdWxkIGJlIHJlY29yZGVkIGFuZCBhbnkgc2V0dXAgcm91dGluZXMgc2hvdWxkIHJ1bi5cblx0XHRpbml0OiBmdW5jdGlvbih0YXJnZXQsIHZhbHVlLCB0d2Vlbikge1xuXHRcdFx0aWYgKHR5cGVvZih2YWx1ZSkgIT09IFwib2JqZWN0XCIpIHtcblx0XHRcdFx0dmFsdWUgPSB7cm90YXRpb246dmFsdWV9O1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5maW5hbHMgPSB7fTtcblx0XHRcdHZhciBjYXAgPSAodmFsdWUudXNlUmFkaWFucyA9PT0gdHJ1ZSkgPyBNYXRoLlBJICogMiA6IDM2MCxcblx0XHRcdFx0bWluID0gMC4wMDAwMDEsXG5cdFx0XHRcdHAsIHYsIHN0YXJ0LCBlbmQsIGRpZiwgc3BsaXQ7XG5cdFx0XHRmb3IgKHAgaW4gdmFsdWUpIHtcblx0XHRcdFx0aWYgKHAgIT09IFwidXNlUmFkaWFuc1wiKSB7XG5cdFx0XHRcdFx0c3BsaXQgPSAodmFsdWVbcF0gKyBcIlwiKS5zcGxpdChcIl9cIik7XG5cdFx0XHRcdFx0diA9IHNwbGl0WzBdO1xuXHRcdFx0XHRcdHN0YXJ0ID0gcGFyc2VGbG9hdCggKHR5cGVvZih0YXJnZXRbcF0pICE9PSBcImZ1bmN0aW9uXCIpID8gdGFyZ2V0W3BdIDogdGFyZ2V0WyAoKHAuaW5kZXhPZihcInNldFwiKSB8fCB0eXBlb2YodGFyZ2V0W1wiZ2V0XCIgKyBwLnN1YnN0cigzKV0pICE9PSBcImZ1bmN0aW9uXCIpID8gcCA6IFwiZ2V0XCIgKyBwLnN1YnN0cigzKSkgXSgpICk7XG5cdFx0XHRcdFx0ZW5kID0gdGhpcy5maW5hbHNbcF0gPSAodHlwZW9mKHYpID09PSBcInN0cmluZ1wiICYmIHYuY2hhckF0KDEpID09PSBcIj1cIikgPyBzdGFydCArIHBhcnNlSW50KHYuY2hhckF0KDApICsgXCIxXCIsIDEwKSAqIE51bWJlcih2LnN1YnN0cigyKSkgOiBOdW1iZXIodikgfHwgMDtcblx0XHRcdFx0XHRkaWYgPSBlbmQgLSBzdGFydDtcblx0XHRcdFx0XHRpZiAoc3BsaXQubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHR2ID0gc3BsaXQuam9pbihcIl9cIik7XG5cdFx0XHRcdFx0XHRpZiAodi5pbmRleE9mKFwic2hvcnRcIikgIT09IC0xKSB7XG5cdFx0XHRcdFx0XHRcdGRpZiA9IGRpZiAlIGNhcDtcblx0XHRcdFx0XHRcdFx0aWYgKGRpZiAhPT0gZGlmICUgKGNhcCAvIDIpKSB7XG5cdFx0XHRcdFx0XHRcdFx0ZGlmID0gKGRpZiA8IDApID8gZGlmICsgY2FwIDogZGlmIC0gY2FwO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAodi5pbmRleE9mKFwiX2N3XCIpICE9PSAtMSAmJiBkaWYgPCAwKSB7XG5cdFx0XHRcdFx0XHRcdGRpZiA9ICgoZGlmICsgY2FwICogOTk5OTk5OTk5OSkgJSBjYXApIC0gKChkaWYgLyBjYXApIHwgMCkgKiBjYXA7XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHYuaW5kZXhPZihcImNjd1wiKSAhPT0gLTEgJiYgZGlmID4gMCkge1xuXHRcdFx0XHRcdFx0XHRkaWYgPSAoKGRpZiAtIGNhcCAqIDk5OTk5OTk5OTkpICUgY2FwKSAtICgoZGlmIC8gY2FwKSB8IDApICogY2FwO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoZGlmID4gbWluIHx8IGRpZiA8IC1taW4pIHtcblx0XHRcdFx0XHRcdHRoaXMuX2FkZFR3ZWVuKHRhcmdldCwgcCwgc3RhcnQsIHN0YXJ0ICsgZGlmLCBwKTtcblx0XHRcdFx0XHRcdHRoaXMuX292ZXJ3cml0ZVByb3BzLnB1c2gocCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9LFxuXG5cdFx0Ly9jYWxsZWQgZWFjaCB0aW1lIHRoZSB2YWx1ZXMgc2hvdWxkIGJlIHVwZGF0ZWQsIGFuZCB0aGUgcmF0aW8gZ2V0cyBwYXNzZWQgYXMgdGhlIG9ubHkgcGFyYW1ldGVyICh0eXBpY2FsbHkgaXQncyBhIHZhbHVlIGJldHdlZW4gMCBhbmQgMSwgYnV0IGl0IGNhbiBleGNlZWQgdGhvc2Ugd2hlbiB1c2luZyBhbiBlYXNlIGxpa2UgRWxhc3RpYy5lYXNlT3V0IG9yIEJhY2suZWFzZU91dCwgZXRjLilcblx0XHRzZXQ6IGZ1bmN0aW9uKHJhdGlvKSB7XG5cdFx0XHR2YXIgcHQ7XG5cdFx0XHRpZiAocmF0aW8gIT09IDEpIHtcblx0XHRcdFx0dGhpcy5fc3VwZXIuc2V0UmF0aW8uY2FsbCh0aGlzLCByYXRpbyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRwdCA9IHRoaXMuX2ZpcnN0UFQ7XG5cdFx0XHRcdHdoaWxlIChwdCkge1xuXHRcdFx0XHRcdGlmIChwdC5mKSB7XG5cdFx0XHRcdFx0XHRwdC50W3B0LnBdKHRoaXMuZmluYWxzW3B0LnBdKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cHQudFtwdC5wXSA9IHRoaXMuZmluYWxzW3B0LnBdO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRwdCA9IHB0Ll9uZXh0O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdH0pLl9hdXRvQ1NTID0gdHJ1ZTtcblxuXG5cblxuXG5cblxuXHRcblx0XG5cdFxuXHRcbi8qXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBFYXNlUGFja1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cdF9nc1Njb3BlLl9nc0RlZmluZShcImVhc2luZy5CYWNrXCIsIFtcImVhc2luZy5FYXNlXCJdLCBmdW5jdGlvbihFYXNlKSB7XG5cdFx0XG5cdFx0dmFyIHcgPSAoX2dzU2NvcGUuR3JlZW5Tb2NrR2xvYmFscyB8fCBfZ3NTY29wZSksXG5cdFx0XHRncyA9IHcuY29tLmdyZWVuc29jayxcblx0XHRcdF8yUEkgPSBNYXRoLlBJICogMixcblx0XHRcdF9IQUxGX1BJID0gTWF0aC5QSSAvIDIsXG5cdFx0XHRfY2xhc3MgPSBncy5fY2xhc3MsXG5cdFx0XHRfY3JlYXRlID0gZnVuY3Rpb24obiwgZikge1xuXHRcdFx0XHR2YXIgQyA9IF9jbGFzcyhcImVhc2luZy5cIiArIG4sIGZ1bmN0aW9uKCl7fSwgdHJ1ZSksXG5cdFx0XHRcdFx0cCA9IEMucHJvdG90eXBlID0gbmV3IEVhc2UoKTtcblx0XHRcdFx0cC5jb25zdHJ1Y3RvciA9IEM7XG5cdFx0XHRcdHAuZ2V0UmF0aW8gPSBmO1xuXHRcdFx0XHRyZXR1cm4gQztcblx0XHRcdH0sXG5cdFx0XHRfZWFzZVJlZyA9IEVhc2UucmVnaXN0ZXIgfHwgZnVuY3Rpb24oKXt9LCAvL3B1dCBhbiBlbXB0eSBmdW5jdGlvbiBpbiBwbGFjZSBqdXN0IGFzIGEgc2FmZXR5IG1lYXN1cmUgaW4gY2FzZSBzb21lb25lIGxvYWRzIGFuIE9MRCB2ZXJzaW9uIG9mIFR3ZWVuTGl0ZS5qcyB3aGVyZSBFYXNlLnJlZ2lzdGVyIGRvZXNuJ3QgZXhpc3QuXG5cdFx0XHRfd3JhcCA9IGZ1bmN0aW9uKG5hbWUsIEVhc2VPdXQsIEVhc2VJbiwgRWFzZUluT3V0LCBhbGlhc2VzKSB7XG5cdFx0XHRcdHZhciBDID0gX2NsYXNzKFwiZWFzaW5nLlwiK25hbWUsIHtcblx0XHRcdFx0XHRlYXNlT3V0Om5ldyBFYXNlT3V0KCksXG5cdFx0XHRcdFx0ZWFzZUluOm5ldyBFYXNlSW4oKSxcblx0XHRcdFx0XHRlYXNlSW5PdXQ6bmV3IEVhc2VJbk91dCgpXG5cdFx0XHRcdH0sIHRydWUpO1xuXHRcdFx0XHRfZWFzZVJlZyhDLCBuYW1lKTtcblx0XHRcdFx0cmV0dXJuIEM7XG5cdFx0XHR9LFxuXHRcdFx0RWFzZVBvaW50ID0gZnVuY3Rpb24odGltZSwgdmFsdWUsIG5leHQpIHtcblx0XHRcdFx0dGhpcy50ID0gdGltZTtcblx0XHRcdFx0dGhpcy52ID0gdmFsdWU7XG5cdFx0XHRcdGlmIChuZXh0KSB7XG5cdFx0XHRcdFx0dGhpcy5uZXh0ID0gbmV4dDtcblx0XHRcdFx0XHRuZXh0LnByZXYgPSB0aGlzO1xuXHRcdFx0XHRcdHRoaXMuYyA9IG5leHQudiAtIHZhbHVlO1xuXHRcdFx0XHRcdHRoaXMuZ2FwID0gbmV4dC50IC0gdGltZTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0Ly9CYWNrXG5cdFx0XHRfY3JlYXRlQmFjayA9IGZ1bmN0aW9uKG4sIGYpIHtcblx0XHRcdFx0dmFyIEMgPSBfY2xhc3MoXCJlYXNpbmcuXCIgKyBuLCBmdW5jdGlvbihvdmVyc2hvb3QpIHtcblx0XHRcdFx0XHRcdHRoaXMuX3AxID0gKG92ZXJzaG9vdCB8fCBvdmVyc2hvb3QgPT09IDApID8gb3ZlcnNob290IDogMS43MDE1ODtcblx0XHRcdFx0XHRcdHRoaXMuX3AyID0gdGhpcy5fcDEgKiAxLjUyNTtcblx0XHRcdFx0XHR9LCB0cnVlKSxcblx0XHRcdFx0XHRwID0gQy5wcm90b3R5cGUgPSBuZXcgRWFzZSgpO1xuXHRcdFx0XHRwLmNvbnN0cnVjdG9yID0gQztcblx0XHRcdFx0cC5nZXRSYXRpbyA9IGY7XG5cdFx0XHRcdHAuY29uZmlnID0gZnVuY3Rpb24ob3ZlcnNob290KSB7XG5cdFx0XHRcdFx0cmV0dXJuIG5ldyBDKG92ZXJzaG9vdCk7XG5cdFx0XHRcdH07XG5cdFx0XHRcdHJldHVybiBDO1xuXHRcdFx0fSxcblxuXHRcdFx0QmFjayA9IF93cmFwKFwiQmFja1wiLFxuXHRcdFx0XHRfY3JlYXRlQmFjayhcIkJhY2tPdXRcIiwgZnVuY3Rpb24ocCkge1xuXHRcdFx0XHRcdHJldHVybiAoKHAgPSBwIC0gMSkgKiBwICogKCh0aGlzLl9wMSArIDEpICogcCArIHRoaXMuX3AxKSArIDEpO1xuXHRcdFx0XHR9KSxcblx0XHRcdFx0X2NyZWF0ZUJhY2soXCJCYWNrSW5cIiwgZnVuY3Rpb24ocCkge1xuXHRcdFx0XHRcdHJldHVybiBwICogcCAqICgodGhpcy5fcDEgKyAxKSAqIHAgLSB0aGlzLl9wMSk7XG5cdFx0XHRcdH0pLFxuXHRcdFx0XHRfY3JlYXRlQmFjayhcIkJhY2tJbk91dFwiLCBmdW5jdGlvbihwKSB7XG5cdFx0XHRcdFx0cmV0dXJuICgocCAqPSAyKSA8IDEpID8gMC41ICogcCAqIHAgKiAoKHRoaXMuX3AyICsgMSkgKiBwIC0gdGhpcy5fcDIpIDogMC41ICogKChwIC09IDIpICogcCAqICgodGhpcy5fcDIgKyAxKSAqIHAgKyB0aGlzLl9wMikgKyAyKTtcblx0XHRcdFx0fSlcblx0XHRcdCksXG5cblxuXHRcdFx0Ly9TbG93TW9cblx0XHRcdFNsb3dNbyA9IF9jbGFzcyhcImVhc2luZy5TbG93TW9cIiwgZnVuY3Rpb24obGluZWFyUmF0aW8sIHBvd2VyLCB5b3lvTW9kZSkge1xuXHRcdFx0XHRwb3dlciA9IChwb3dlciB8fCBwb3dlciA9PT0gMCkgPyBwb3dlciA6IDAuNztcblx0XHRcdFx0aWYgKGxpbmVhclJhdGlvID09IG51bGwpIHtcblx0XHRcdFx0XHRsaW5lYXJSYXRpbyA9IDAuNztcblx0XHRcdFx0fSBlbHNlIGlmIChsaW5lYXJSYXRpbyA+IDEpIHtcblx0XHRcdFx0XHRsaW5lYXJSYXRpbyA9IDE7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5fcCA9IChsaW5lYXJSYXRpbyAhPT0gMSkgPyBwb3dlciA6IDA7XG5cdFx0XHRcdHRoaXMuX3AxID0gKDEgLSBsaW5lYXJSYXRpbykgLyAyO1xuXHRcdFx0XHR0aGlzLl9wMiA9IGxpbmVhclJhdGlvO1xuXHRcdFx0XHR0aGlzLl9wMyA9IHRoaXMuX3AxICsgdGhpcy5fcDI7XG5cdFx0XHRcdHRoaXMuX2NhbGNFbmQgPSAoeW95b01vZGUgPT09IHRydWUpO1xuXHRcdFx0fSwgdHJ1ZSksXG5cdFx0XHRwID0gU2xvd01vLnByb3RvdHlwZSA9IG5ldyBFYXNlKCksXG5cdFx0XHRTdGVwcGVkRWFzZSwgUm91Z2hFYXNlLCBfY3JlYXRlRWxhc3RpYztcblxuXHRcdHAuY29uc3RydWN0b3IgPSBTbG93TW87XG5cdFx0cC5nZXRSYXRpbyA9IGZ1bmN0aW9uKHApIHtcblx0XHRcdHZhciByID0gcCArICgwLjUgLSBwKSAqIHRoaXMuX3A7XG5cdFx0XHRpZiAocCA8IHRoaXMuX3AxKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLl9jYWxjRW5kID8gMSAtICgocCA9IDEgLSAocCAvIHRoaXMuX3AxKSkgKiBwKSA6IHIgLSAoKHAgPSAxIC0gKHAgLyB0aGlzLl9wMSkpICogcCAqIHAgKiBwICogcik7XG5cdFx0XHR9IGVsc2UgaWYgKHAgPiB0aGlzLl9wMykge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fY2FsY0VuZCA/IDEgLSAocCA9IChwIC0gdGhpcy5fcDMpIC8gdGhpcy5fcDEpICogcCA6IHIgKyAoKHAgLSByKSAqIChwID0gKHAgLSB0aGlzLl9wMykgLyB0aGlzLl9wMSkgKiBwICogcCAqIHApO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXMuX2NhbGNFbmQgPyAxIDogcjtcblx0XHR9O1xuXHRcdFNsb3dNby5lYXNlID0gbmV3IFNsb3dNbygwLjcsIDAuNyk7XG5cblx0XHRwLmNvbmZpZyA9IFNsb3dNby5jb25maWcgPSBmdW5jdGlvbihsaW5lYXJSYXRpbywgcG93ZXIsIHlveW9Nb2RlKSB7XG5cdFx0XHRyZXR1cm4gbmV3IFNsb3dNbyhsaW5lYXJSYXRpbywgcG93ZXIsIHlveW9Nb2RlKTtcblx0XHR9O1xuXG5cblx0XHQvL1N0ZXBwZWRFYXNlXG5cdFx0U3RlcHBlZEVhc2UgPSBfY2xhc3MoXCJlYXNpbmcuU3RlcHBlZEVhc2VcIiwgZnVuY3Rpb24oc3RlcHMpIHtcblx0XHRcdFx0c3RlcHMgPSBzdGVwcyB8fCAxO1xuXHRcdFx0XHR0aGlzLl9wMSA9IDEgLyBzdGVwcztcblx0XHRcdFx0dGhpcy5fcDIgPSBzdGVwcyArIDE7XG5cdFx0XHR9LCB0cnVlKTtcblx0XHRwID0gU3RlcHBlZEVhc2UucHJvdG90eXBlID0gbmV3IEVhc2UoKTtcblx0XHRwLmNvbnN0cnVjdG9yID0gU3RlcHBlZEVhc2U7XG5cdFx0cC5nZXRSYXRpbyA9IGZ1bmN0aW9uKHApIHtcblx0XHRcdGlmIChwIDwgMCkge1xuXHRcdFx0XHRwID0gMDtcblx0XHRcdH0gZWxzZSBpZiAocCA+PSAxKSB7XG5cdFx0XHRcdHAgPSAwLjk5OTk5OTk5OTtcblx0XHRcdH1cblx0XHRcdHJldHVybiAoKHRoaXMuX3AyICogcCkgPj4gMCkgKiB0aGlzLl9wMTtcblx0XHR9O1xuXHRcdHAuY29uZmlnID0gU3RlcHBlZEVhc2UuY29uZmlnID0gZnVuY3Rpb24oc3RlcHMpIHtcblx0XHRcdHJldHVybiBuZXcgU3RlcHBlZEVhc2Uoc3RlcHMpO1xuXHRcdH07XG5cblxuXHRcdC8vUm91Z2hFYXNlXG5cdFx0Um91Z2hFYXNlID0gX2NsYXNzKFwiZWFzaW5nLlJvdWdoRWFzZVwiLCBmdW5jdGlvbih2YXJzKSB7XG5cdFx0XHR2YXJzID0gdmFycyB8fCB7fTtcblx0XHRcdHZhciB0YXBlciA9IHZhcnMudGFwZXIgfHwgXCJub25lXCIsXG5cdFx0XHRcdGEgPSBbXSxcblx0XHRcdFx0Y250ID0gMCxcblx0XHRcdFx0cG9pbnRzID0gKHZhcnMucG9pbnRzIHx8IDIwKSB8IDAsXG5cdFx0XHRcdGkgPSBwb2ludHMsXG5cdFx0XHRcdHJhbmRvbWl6ZSA9ICh2YXJzLnJhbmRvbWl6ZSAhPT0gZmFsc2UpLFxuXHRcdFx0XHRjbGFtcCA9ICh2YXJzLmNsYW1wID09PSB0cnVlKSxcblx0XHRcdFx0dGVtcGxhdGUgPSAodmFycy50ZW1wbGF0ZSBpbnN0YW5jZW9mIEVhc2UpID8gdmFycy50ZW1wbGF0ZSA6IG51bGwsXG5cdFx0XHRcdHN0cmVuZ3RoID0gKHR5cGVvZih2YXJzLnN0cmVuZ3RoKSA9PT0gXCJudW1iZXJcIikgPyB2YXJzLnN0cmVuZ3RoICogMC40IDogMC40LFxuXHRcdFx0XHR4LCB5LCBidW1wLCBpbnZYLCBvYmosIHBudDtcblx0XHRcdHdoaWxlICgtLWkgPiAtMSkge1xuXHRcdFx0XHR4ID0gcmFuZG9taXplID8gTWF0aC5yYW5kb20oKSA6ICgxIC8gcG9pbnRzKSAqIGk7XG5cdFx0XHRcdHkgPSB0ZW1wbGF0ZSA/IHRlbXBsYXRlLmdldFJhdGlvKHgpIDogeDtcblx0XHRcdFx0aWYgKHRhcGVyID09PSBcIm5vbmVcIikge1xuXHRcdFx0XHRcdGJ1bXAgPSBzdHJlbmd0aDtcblx0XHRcdFx0fSBlbHNlIGlmICh0YXBlciA9PT0gXCJvdXRcIikge1xuXHRcdFx0XHRcdGludlggPSAxIC0geDtcblx0XHRcdFx0XHRidW1wID0gaW52WCAqIGludlggKiBzdHJlbmd0aDtcblx0XHRcdFx0fSBlbHNlIGlmICh0YXBlciA9PT0gXCJpblwiKSB7XG5cdFx0XHRcdFx0YnVtcCA9IHggKiB4ICogc3RyZW5ndGg7XG5cdFx0XHRcdH0gZWxzZSBpZiAoeCA8IDAuNSkgeyAgLy9cImJvdGhcIiAoc3RhcnQpXG5cdFx0XHRcdFx0aW52WCA9IHggKiAyO1xuXHRcdFx0XHRcdGJ1bXAgPSBpbnZYICogaW52WCAqIDAuNSAqIHN0cmVuZ3RoO1xuXHRcdFx0XHR9IGVsc2Uge1x0XHRcdFx0Ly9cImJvdGhcIiAoZW5kKVxuXHRcdFx0XHRcdGludlggPSAoMSAtIHgpICogMjtcblx0XHRcdFx0XHRidW1wID0gaW52WCAqIGludlggKiAwLjUgKiBzdHJlbmd0aDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAocmFuZG9taXplKSB7XG5cdFx0XHRcdFx0eSArPSAoTWF0aC5yYW5kb20oKSAqIGJ1bXApIC0gKGJ1bXAgKiAwLjUpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGkgJSAyKSB7XG5cdFx0XHRcdFx0eSArPSBidW1wICogMC41O1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHkgLT0gYnVtcCAqIDAuNTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoY2xhbXApIHtcblx0XHRcdFx0XHRpZiAoeSA+IDEpIHtcblx0XHRcdFx0XHRcdHkgPSAxO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoeSA8IDApIHtcblx0XHRcdFx0XHRcdHkgPSAwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRhW2NudCsrXSA9IHt4OngsIHk6eX07XG5cdFx0XHR9XG5cdFx0XHRhLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0XHRyZXR1cm4gYS54IC0gYi54O1xuXHRcdFx0fSk7XG5cblx0XHRcdHBudCA9IG5ldyBFYXNlUG9pbnQoMSwgMSwgbnVsbCk7XG5cdFx0XHRpID0gcG9pbnRzO1xuXHRcdFx0d2hpbGUgKC0taSA+IC0xKSB7XG5cdFx0XHRcdG9iaiA9IGFbaV07XG5cdFx0XHRcdHBudCA9IG5ldyBFYXNlUG9pbnQob2JqLngsIG9iai55LCBwbnQpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLl9wcmV2ID0gbmV3IEVhc2VQb2ludCgwLCAwLCAocG50LnQgIT09IDApID8gcG50IDogcG50Lm5leHQpO1xuXHRcdH0sIHRydWUpO1xuXHRcdHAgPSBSb3VnaEVhc2UucHJvdG90eXBlID0gbmV3IEVhc2UoKTtcblx0XHRwLmNvbnN0cnVjdG9yID0gUm91Z2hFYXNlO1xuXHRcdHAuZ2V0UmF0aW8gPSBmdW5jdGlvbihwKSB7XG5cdFx0XHR2YXIgcG50ID0gdGhpcy5fcHJldjtcblx0XHRcdGlmIChwID4gcG50LnQpIHtcblx0XHRcdFx0d2hpbGUgKHBudC5uZXh0ICYmIHAgPj0gcG50LnQpIHtcblx0XHRcdFx0XHRwbnQgPSBwbnQubmV4dDtcblx0XHRcdFx0fVxuXHRcdFx0XHRwbnQgPSBwbnQucHJldjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHdoaWxlIChwbnQucHJldiAmJiBwIDw9IHBudC50KSB7XG5cdFx0XHRcdFx0cG50ID0gcG50LnByZXY7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMuX3ByZXYgPSBwbnQ7XG5cdFx0XHRyZXR1cm4gKHBudC52ICsgKChwIC0gcG50LnQpIC8gcG50LmdhcCkgKiBwbnQuYyk7XG5cdFx0fTtcblx0XHRwLmNvbmZpZyA9IGZ1bmN0aW9uKHZhcnMpIHtcblx0XHRcdHJldHVybiBuZXcgUm91Z2hFYXNlKHZhcnMpO1xuXHRcdH07XG5cdFx0Um91Z2hFYXNlLmVhc2UgPSBuZXcgUm91Z2hFYXNlKCk7XG5cblxuXHRcdC8vQm91bmNlXG5cdFx0X3dyYXAoXCJCb3VuY2VcIixcblx0XHRcdF9jcmVhdGUoXCJCb3VuY2VPdXRcIiwgZnVuY3Rpb24ocCkge1xuXHRcdFx0XHRpZiAocCA8IDEgLyAyLjc1KSB7XG5cdFx0XHRcdFx0cmV0dXJuIDcuNTYyNSAqIHAgKiBwO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHAgPCAyIC8gMi43NSkge1xuXHRcdFx0XHRcdHJldHVybiA3LjU2MjUgKiAocCAtPSAxLjUgLyAyLjc1KSAqIHAgKyAwLjc1O1xuXHRcdFx0XHR9IGVsc2UgaWYgKHAgPCAyLjUgLyAyLjc1KSB7XG5cdFx0XHRcdFx0cmV0dXJuIDcuNTYyNSAqIChwIC09IDIuMjUgLyAyLjc1KSAqIHAgKyAwLjkzNzU7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIDcuNTYyNSAqIChwIC09IDIuNjI1IC8gMi43NSkgKiBwICsgMC45ODQzNzU7XG5cdFx0XHR9KSxcblx0XHRcdF9jcmVhdGUoXCJCb3VuY2VJblwiLCBmdW5jdGlvbihwKSB7XG5cdFx0XHRcdGlmICgocCA9IDEgLSBwKSA8IDEgLyAyLjc1KSB7XG5cdFx0XHRcdFx0cmV0dXJuIDEgLSAoNy41NjI1ICogcCAqIHApO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHAgPCAyIC8gMi43NSkge1xuXHRcdFx0XHRcdHJldHVybiAxIC0gKDcuNTYyNSAqIChwIC09IDEuNSAvIDIuNzUpICogcCArIDAuNzUpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHAgPCAyLjUgLyAyLjc1KSB7XG5cdFx0XHRcdFx0cmV0dXJuIDEgLSAoNy41NjI1ICogKHAgLT0gMi4yNSAvIDIuNzUpICogcCArIDAuOTM3NSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIDEgLSAoNy41NjI1ICogKHAgLT0gMi42MjUgLyAyLjc1KSAqIHAgKyAwLjk4NDM3NSk7XG5cdFx0XHR9KSxcblx0XHRcdF9jcmVhdGUoXCJCb3VuY2VJbk91dFwiLCBmdW5jdGlvbihwKSB7XG5cdFx0XHRcdHZhciBpbnZlcnQgPSAocCA8IDAuNSk7XG5cdFx0XHRcdGlmIChpbnZlcnQpIHtcblx0XHRcdFx0XHRwID0gMSAtIChwICogMik7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cCA9IChwICogMikgLSAxO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChwIDwgMSAvIDIuNzUpIHtcblx0XHRcdFx0XHRwID0gNy41NjI1ICogcCAqIHA7XG5cdFx0XHRcdH0gZWxzZSBpZiAocCA8IDIgLyAyLjc1KSB7XG5cdFx0XHRcdFx0cCA9IDcuNTYyNSAqIChwIC09IDEuNSAvIDIuNzUpICogcCArIDAuNzU7XG5cdFx0XHRcdH0gZWxzZSBpZiAocCA8IDIuNSAvIDIuNzUpIHtcblx0XHRcdFx0XHRwID0gNy41NjI1ICogKHAgLT0gMi4yNSAvIDIuNzUpICogcCArIDAuOTM3NTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRwID0gNy41NjI1ICogKHAgLT0gMi42MjUgLyAyLjc1KSAqIHAgKyAwLjk4NDM3NTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gaW52ZXJ0ID8gKDEgLSBwKSAqIDAuNSA6IHAgKiAwLjUgKyAwLjU7XG5cdFx0XHR9KVxuXHRcdCk7XG5cblxuXHRcdC8vQ0lSQ1xuXHRcdF93cmFwKFwiQ2lyY1wiLFxuXHRcdFx0X2NyZWF0ZShcIkNpcmNPdXRcIiwgZnVuY3Rpb24ocCkge1xuXHRcdFx0XHRyZXR1cm4gTWF0aC5zcXJ0KDEgLSAocCA9IHAgLSAxKSAqIHApO1xuXHRcdFx0fSksXG5cdFx0XHRfY3JlYXRlKFwiQ2lyY0luXCIsIGZ1bmN0aW9uKHApIHtcblx0XHRcdFx0cmV0dXJuIC0oTWF0aC5zcXJ0KDEgLSAocCAqIHApKSAtIDEpO1xuXHRcdFx0fSksXG5cdFx0XHRfY3JlYXRlKFwiQ2lyY0luT3V0XCIsIGZ1bmN0aW9uKHApIHtcblx0XHRcdFx0cmV0dXJuICgocCo9MikgPCAxKSA/IC0wLjUgKiAoTWF0aC5zcXJ0KDEgLSBwICogcCkgLSAxKSA6IDAuNSAqIChNYXRoLnNxcnQoMSAtIChwIC09IDIpICogcCkgKyAxKTtcblx0XHRcdH0pXG5cdFx0KTtcblxuXG5cdFx0Ly9FbGFzdGljXG5cdFx0X2NyZWF0ZUVsYXN0aWMgPSBmdW5jdGlvbihuLCBmLCBkZWYpIHtcblx0XHRcdHZhciBDID0gX2NsYXNzKFwiZWFzaW5nLlwiICsgbiwgZnVuY3Rpb24oYW1wbGl0dWRlLCBwZXJpb2QpIHtcblx0XHRcdFx0XHR0aGlzLl9wMSA9IChhbXBsaXR1ZGUgPj0gMSkgPyBhbXBsaXR1ZGUgOiAxOyAvL25vdGU6IGlmIGFtcGxpdHVkZSBpcyA8IDEsIHdlIHNpbXBseSBhZGp1c3QgdGhlIHBlcmlvZCBmb3IgYSBtb3JlIG5hdHVyYWwgZmVlbC4gT3RoZXJ3aXNlIHRoZSBtYXRoIGRvZXNuJ3Qgd29yayByaWdodCBhbmQgdGhlIGN1cnZlIHN0YXJ0cyBhdCAxLlxuXHRcdFx0XHRcdHRoaXMuX3AyID0gKHBlcmlvZCB8fCBkZWYpIC8gKGFtcGxpdHVkZSA8IDEgPyBhbXBsaXR1ZGUgOiAxKTtcblx0XHRcdFx0XHR0aGlzLl9wMyA9IHRoaXMuX3AyIC8gXzJQSSAqIChNYXRoLmFzaW4oMSAvIHRoaXMuX3AxKSB8fCAwKTtcblx0XHRcdFx0XHR0aGlzLl9wMiA9IF8yUEkgLyB0aGlzLl9wMjsgLy9wcmVjYWxjdWxhdGUgdG8gb3B0aW1pemVcblx0XHRcdFx0fSwgdHJ1ZSksXG5cdFx0XHRcdHAgPSBDLnByb3RvdHlwZSA9IG5ldyBFYXNlKCk7XG5cdFx0XHRwLmNvbnN0cnVjdG9yID0gQztcblx0XHRcdHAuZ2V0UmF0aW8gPSBmO1xuXHRcdFx0cC5jb25maWcgPSBmdW5jdGlvbihhbXBsaXR1ZGUsIHBlcmlvZCkge1xuXHRcdFx0XHRyZXR1cm4gbmV3IEMoYW1wbGl0dWRlLCBwZXJpb2QpO1xuXHRcdFx0fTtcblx0XHRcdHJldHVybiBDO1xuXHRcdH07XG5cdFx0X3dyYXAoXCJFbGFzdGljXCIsXG5cdFx0XHRfY3JlYXRlRWxhc3RpYyhcIkVsYXN0aWNPdXRcIiwgZnVuY3Rpb24ocCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fcDEgKiBNYXRoLnBvdygyLCAtMTAgKiBwKSAqIE1hdGguc2luKCAocCAtIHRoaXMuX3AzKSAqIHRoaXMuX3AyICkgKyAxO1xuXHRcdFx0fSwgMC4zKSxcblx0XHRcdF9jcmVhdGVFbGFzdGljKFwiRWxhc3RpY0luXCIsIGZ1bmN0aW9uKHApIHtcblx0XHRcdFx0cmV0dXJuIC0odGhpcy5fcDEgKiBNYXRoLnBvdygyLCAxMCAqIChwIC09IDEpKSAqIE1hdGguc2luKCAocCAtIHRoaXMuX3AzKSAqIHRoaXMuX3AyICkpO1xuXHRcdFx0fSwgMC4zKSxcblx0XHRcdF9jcmVhdGVFbGFzdGljKFwiRWxhc3RpY0luT3V0XCIsIGZ1bmN0aW9uKHApIHtcblx0XHRcdFx0cmV0dXJuICgocCAqPSAyKSA8IDEpID8gLTAuNSAqICh0aGlzLl9wMSAqIE1hdGgucG93KDIsIDEwICogKHAgLT0gMSkpICogTWF0aC5zaW4oIChwIC0gdGhpcy5fcDMpICogdGhpcy5fcDIpKSA6IHRoaXMuX3AxICogTWF0aC5wb3coMiwgLTEwICoocCAtPSAxKSkgKiBNYXRoLnNpbiggKHAgLSB0aGlzLl9wMykgKiB0aGlzLl9wMiApICogMC41ICsgMTtcblx0XHRcdH0sIDAuNDUpXG5cdFx0KTtcblxuXG5cdFx0Ly9FeHBvXG5cdFx0X3dyYXAoXCJFeHBvXCIsXG5cdFx0XHRfY3JlYXRlKFwiRXhwb091dFwiLCBmdW5jdGlvbihwKSB7XG5cdFx0XHRcdHJldHVybiAxIC0gTWF0aC5wb3coMiwgLTEwICogcCk7XG5cdFx0XHR9KSxcblx0XHRcdF9jcmVhdGUoXCJFeHBvSW5cIiwgZnVuY3Rpb24ocCkge1xuXHRcdFx0XHRyZXR1cm4gTWF0aC5wb3coMiwgMTAgKiAocCAtIDEpKSAtIDAuMDAxO1xuXHRcdFx0fSksXG5cdFx0XHRfY3JlYXRlKFwiRXhwb0luT3V0XCIsIGZ1bmN0aW9uKHApIHtcblx0XHRcdFx0cmV0dXJuICgocCAqPSAyKSA8IDEpID8gMC41ICogTWF0aC5wb3coMiwgMTAgKiAocCAtIDEpKSA6IDAuNSAqICgyIC0gTWF0aC5wb3coMiwgLTEwICogKHAgLSAxKSkpO1xuXHRcdFx0fSlcblx0XHQpO1xuXG5cblx0XHQvL1NpbmVcblx0XHRfd3JhcChcIlNpbmVcIixcblx0XHRcdF9jcmVhdGUoXCJTaW5lT3V0XCIsIGZ1bmN0aW9uKHApIHtcblx0XHRcdFx0cmV0dXJuIE1hdGguc2luKHAgKiBfSEFMRl9QSSk7XG5cdFx0XHR9KSxcblx0XHRcdF9jcmVhdGUoXCJTaW5lSW5cIiwgZnVuY3Rpb24ocCkge1xuXHRcdFx0XHRyZXR1cm4gLU1hdGguY29zKHAgKiBfSEFMRl9QSSkgKyAxO1xuXHRcdFx0fSksXG5cdFx0XHRfY3JlYXRlKFwiU2luZUluT3V0XCIsIGZ1bmN0aW9uKHApIHtcblx0XHRcdFx0cmV0dXJuIC0wLjUgKiAoTWF0aC5jb3MoTWF0aC5QSSAqIHApIC0gMSk7XG5cdFx0XHR9KVxuXHRcdCk7XG5cblx0XHRfY2xhc3MoXCJlYXNpbmcuRWFzZUxvb2t1cFwiLCB7XG5cdFx0XHRcdGZpbmQ6ZnVuY3Rpb24ocykge1xuXHRcdFx0XHRcdHJldHVybiBFYXNlLm1hcFtzXTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdHJ1ZSk7XG5cblx0XHQvL3JlZ2lzdGVyIHRoZSBub24tc3RhbmRhcmQgZWFzZXNcblx0XHRfZWFzZVJlZyh3LlNsb3dNbywgXCJTbG93TW9cIiwgXCJlYXNlLFwiKTtcblx0XHRfZWFzZVJlZyhSb3VnaEVhc2UsIFwiUm91Z2hFYXNlXCIsIFwiZWFzZSxcIik7XG5cdFx0X2Vhc2VSZWcoU3RlcHBlZEVhc2UsIFwiU3RlcHBlZEVhc2VcIiwgXCJlYXNlLFwiKTtcblxuXHRcdHJldHVybiBCYWNrO1xuXHRcdFxuXHR9LCB0cnVlKTtcblxuXG59KTtcblxuaWYgKF9nc1Njb3BlLl9nc0RlZmluZSkgeyBfZ3NTY29wZS5fZ3NRdWV1ZS5wb3AoKSgpOyB9IC8vbmVjZXNzYXJ5IGluIGNhc2UgVHdlZW5MaXRlIHdhcyBhbHJlYWR5IGxvYWRlZCBzZXBhcmF0ZWx5LlxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8qXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCYXNlIGNsYXNzZXMgbGlrZSBUd2VlbkxpdGUsIFNpbXBsZVRpbWVsaW5lLCBFYXNlLCBUaWNrZXIsIGV0Yy5cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuKGZ1bmN0aW9uKHdpbmRvdywgbW9kdWxlTmFtZSkge1xuXG5cdFx0XCJ1c2Ugc3RyaWN0XCI7XG5cdFx0dmFyIF9nbG9iYWxzID0gd2luZG93LkdyZWVuU29ja0dsb2JhbHMgPSB3aW5kb3cuR3JlZW5Tb2NrR2xvYmFscyB8fCB3aW5kb3c7XG5cdFx0aWYgKF9nbG9iYWxzLlR3ZWVuTGl0ZSkge1xuXHRcdFx0cmV0dXJuOyAvL2luIGNhc2UgdGhlIGNvcmUgc2V0IG9mIGNsYXNzZXMgaXMgYWxyZWFkeSBsb2FkZWQsIGRvbid0IGluc3RhbnRpYXRlIHR3aWNlLlxuXHRcdH1cblx0XHR2YXIgX25hbWVzcGFjZSA9IGZ1bmN0aW9uKG5zKSB7XG5cdFx0XHRcdHZhciBhID0gbnMuc3BsaXQoXCIuXCIpLFxuXHRcdFx0XHRcdHAgPSBfZ2xvYmFscywgaTtcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRwW2FbaV1dID0gcCA9IHBbYVtpXV0gfHwge307XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHA7XG5cdFx0XHR9LFxuXHRcdFx0Z3MgPSBfbmFtZXNwYWNlKFwiY29tLmdyZWVuc29ja1wiKSxcblx0XHRcdF90aW55TnVtID0gMC4wMDAwMDAwMDAxLFxuXHRcdFx0X3NsaWNlID0gZnVuY3Rpb24oYSkgeyAvL2Rvbid0IHVzZSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0YXJnZXQsIDApIGJlY2F1c2UgdGhhdCBkb2Vzbid0IHdvcmsgaW4gSUU4IHdpdGggYSBOb2RlTGlzdCB0aGF0J3MgcmV0dXJuZWQgYnkgcXVlcnlTZWxlY3RvckFsbCgpXG5cdFx0XHRcdHZhciBiID0gW10sXG5cdFx0XHRcdFx0bCA9IGEubGVuZ3RoLFxuXHRcdFx0XHRcdGk7XG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgIT09IGw7IGIucHVzaChhW2krK10pKTtcblx0XHRcdFx0cmV0dXJuIGI7XG5cdFx0XHR9LFxuXHRcdFx0X2VtcHR5RnVuYyA9IGZ1bmN0aW9uKCkge30sXG5cdFx0XHRfaXNBcnJheSA9IChmdW5jdGlvbigpIHsgLy93b3JrcyBhcm91bmQgaXNzdWVzIGluIGlmcmFtZSBlbnZpcm9ubWVudHMgd2hlcmUgdGhlIEFycmF5IGdsb2JhbCBpc24ndCBzaGFyZWQsIHRodXMgaWYgdGhlIG9iamVjdCBvcmlnaW5hdGVzIGluIGEgZGlmZmVyZW50IHdpbmRvdy9pZnJhbWUsIFwiKG9iaiBpbnN0YW5jZW9mIEFycmF5KVwiIHdpbGwgZXZhbHVhdGUgZmFsc2UuIFdlIGFkZGVkIHNvbWUgc3BlZWQgb3B0aW1pemF0aW9ucyB0byBhdm9pZCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoKSB1bmxlc3MgaXQncyBhYnNvbHV0ZWx5IG5lY2Vzc2FyeSBiZWNhdXNlIGl0J3MgVkVSWSBzbG93IChsaWtlIDIweCBzbG93ZXIpXG5cdFx0XHRcdHZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcsXG5cdFx0XHRcdFx0YXJyYXkgPSB0b1N0cmluZy5jYWxsKFtdKTtcblx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uKG9iaikge1xuXHRcdFx0XHRcdHJldHVybiBvYmogIT0gbnVsbCAmJiAob2JqIGluc3RhbmNlb2YgQXJyYXkgfHwgKHR5cGVvZihvYmopID09PSBcIm9iamVjdFwiICYmICEhb2JqLnB1c2ggJiYgdG9TdHJpbmcuY2FsbChvYmopID09PSBhcnJheSkpO1xuXHRcdFx0XHR9O1xuXHRcdFx0fSgpKSxcblx0XHRcdGEsIGksIHAsIF90aWNrZXIsIF90aWNrZXJBY3RpdmUsXG5cdFx0XHRfZGVmTG9va3VwID0ge30sXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogQGNvbnN0cnVjdG9yXG5cdFx0XHQgKiBEZWZpbmVzIGEgR3JlZW5Tb2NrIGNsYXNzLCBvcHRpb25hbGx5IHdpdGggYW4gYXJyYXkgb2YgZGVwZW5kZW5jaWVzIHRoYXQgbXVzdCBiZSBpbnN0YW50aWF0ZWQgZmlyc3QgYW5kIHBhc3NlZCBpbnRvIHRoZSBkZWZpbml0aW9uLlxuXHRcdFx0ICogVGhpcyBhbGxvd3MgdXNlcnMgdG8gbG9hZCBHcmVlblNvY2sgSlMgZmlsZXMgaW4gYW55IG9yZGVyIGV2ZW4gaWYgdGhleSBoYXZlIGludGVyZGVwZW5kZW5jaWVzIChsaWtlIENTU1BsdWdpbiBleHRlbmRzIFR3ZWVuUGx1Z2luIHdoaWNoIGlzXG5cdFx0XHQgKiBpbnNpZGUgVHdlZW5MaXRlLmpzLCBidXQgaWYgQ1NTUGx1Z2luIGlzIGxvYWRlZCBmaXJzdCwgaXQgc2hvdWxkIHdhaXQgdG8gcnVuIGl0cyBjb2RlIHVudGlsIFR3ZWVuTGl0ZS5qcyBsb2FkcyBhbmQgaW5zdGFudGlhdGVzIFR3ZWVuUGx1Z2luXG5cdFx0XHQgKiBhbmQgdGhlbiBwYXNzIFR3ZWVuUGx1Z2luIHRvIENTU1BsdWdpbidzIGRlZmluaXRpb24pLiBUaGlzIGlzIGFsbCBkb25lIGF1dG9tYXRpY2FsbHkgYW5kIGludGVybmFsbHkuXG5cdFx0XHQgKlxuXHRcdFx0ICogRXZlcnkgZGVmaW5pdGlvbiB3aWxsIGJlIGFkZGVkIHRvIGEgXCJjb20uZ3JlZW5zb2NrXCIgZ2xvYmFsIG9iamVjdCAodHlwaWNhbGx5IHdpbmRvdywgYnV0IGlmIGEgd2luZG93LkdyZWVuU29ja0dsb2JhbHMgb2JqZWN0IGlzIGZvdW5kLFxuXHRcdFx0ICogaXQgd2lsbCBnbyB0aGVyZSBhcyBvZiB2MS43KS4gRm9yIGV4YW1wbGUsIFR3ZWVuTGl0ZSB3aWxsIGJlIGZvdW5kIGF0IHdpbmRvdy5jb20uZ3JlZW5zb2NrLlR3ZWVuTGl0ZSBhbmQgc2luY2UgaXQncyBhIGdsb2JhbCBjbGFzcyB0aGF0IHNob3VsZCBiZSBhdmFpbGFibGUgYW55d2hlcmUsXG5cdFx0XHQgKiBpdCBpcyBBTFNPIHJlZmVyZW5jZWQgYXQgd2luZG93LlR3ZWVuTGl0ZS4gSG93ZXZlciBzb21lIGNsYXNzZXMgYXJlbid0IGNvbnNpZGVyZWQgZ2xvYmFsLCBsaWtlIHRoZSBiYXNlIGNvbS5ncmVlbnNvY2suY29yZS5BbmltYXRpb24gY2xhc3MsIHNvXG5cdFx0XHQgKiB0aG9zZSB3aWxsIG9ubHkgYmUgYXQgdGhlIHBhY2thZ2UgbGlrZSB3aW5kb3cuY29tLmdyZWVuc29jay5jb3JlLkFuaW1hdGlvbi4gQWdhaW4sIGlmIHlvdSBkZWZpbmUgYSBHcmVlblNvY2tHbG9iYWxzIG9iamVjdCBvbiB0aGUgd2luZG93LCBldmVyeXRoaW5nXG5cdFx0XHQgKiBnZXRzIHR1Y2tlZCBuZWF0bHkgaW5zaWRlIHRoZXJlIGluc3RlYWQgb2Ygb24gdGhlIHdpbmRvdyBkaXJlY3RseS4gVGhpcyBhbGxvd3MgeW91IHRvIGRvIGFkdmFuY2VkIHRoaW5ncyBsaWtlIGxvYWQgbXVsdGlwbGUgdmVyc2lvbnMgb2YgR3JlZW5Tb2NrXG5cdFx0XHQgKiBmaWxlcyBhbmQgcHV0IHRoZW0gaW50byBkaXN0aW5jdCBvYmplY3RzIChpbWFnaW5lIGEgYmFubmVyIGFkIHVzZXMgYSBuZXdlciB2ZXJzaW9uIGJ1dCB0aGUgbWFpbiBzaXRlIHVzZXMgYW4gb2xkZXIgb25lKS4gSW4gdGhhdCBjYXNlLCB5b3UgY291bGRcblx0XHRcdCAqIHNhbmRib3ggdGhlIGJhbm5lciBvbmUgbGlrZTpcblx0XHRcdCAqXG5cdFx0XHQgKiA8c2NyaXB0PlxuXHRcdFx0ICogICAgIHZhciBncyA9IHdpbmRvdy5HcmVlblNvY2tHbG9iYWxzID0ge307IC8vdGhlIG5ld2VyIHZlcnNpb24gd2UncmUgYWJvdXQgdG8gbG9hZCBjb3VsZCBub3cgYmUgcmVmZXJlbmNlZCBpbiBhIFwiZ3NcIiBvYmplY3QsIGxpa2UgZ3MuVHdlZW5MaXRlLnRvKC4uLikuIFVzZSB3aGF0ZXZlciBhbGlhcyB5b3Ugd2FudCBhcyBsb25nIGFzIGl0J3MgdW5pcXVlLCBcImdzXCIgb3IgXCJiYW5uZXJcIiBvciB3aGF0ZXZlci5cblx0XHRcdCAqIDwvc2NyaXB0PlxuXHRcdFx0ICogPHNjcmlwdCBzcmM9XCJqcy9ncmVlbnNvY2svdjEuNy9Ud2Vlbk1heC5qc1wiPjwvc2NyaXB0PlxuXHRcdFx0ICogPHNjcmlwdD5cblx0XHRcdCAqICAgICB3aW5kb3cuR3JlZW5Tb2NrR2xvYmFscyA9IHdpbmRvdy5fZ3NRdWV1ZSA9IHdpbmRvdy5fZ3NEZWZpbmUgPSBudWxsOyAvL3Jlc2V0IGl0IGJhY2sgdG8gbnVsbCAoYWxvbmcgd2l0aCB0aGUgc3BlY2lhbCBfZ3NRdWV1ZSB2YXJpYWJsZSkgc28gdGhhdCB0aGUgbmV4dCBsb2FkIG9mIFR3ZWVuTWF4IGFmZmVjdHMgdGhlIHdpbmRvdyBhbmQgd2UgY2FuIHJlZmVyZW5jZSB0aGluZ3MgZGlyZWN0bHkgbGlrZSBUd2VlbkxpdGUudG8oLi4uKVxuXHRcdFx0ICogPC9zY3JpcHQ+XG5cdFx0XHQgKiA8c2NyaXB0IHNyYz1cImpzL2dyZWVuc29jay92MS42L1R3ZWVuTWF4LmpzXCI+PC9zY3JpcHQ+XG5cdFx0XHQgKiA8c2NyaXB0PlxuXHRcdFx0ICogICAgIGdzLlR3ZWVuTGl0ZS50byguLi4pOyAvL3dvdWxkIHVzZSB2MS43XG5cdFx0XHQgKiAgICAgVHdlZW5MaXRlLnRvKC4uLik7IC8vd291bGQgdXNlIHYxLjZcblx0XHRcdCAqIDwvc2NyaXB0PlxuXHRcdFx0ICpcblx0XHRcdCAqIEBwYXJhbSB7IXN0cmluZ30gbnMgVGhlIG5hbWVzcGFjZSBvZiB0aGUgY2xhc3MgZGVmaW5pdGlvbiwgbGVhdmluZyBvZmYgXCJjb20uZ3JlZW5zb2NrLlwiIGFzIHRoYXQncyBhc3N1bWVkLiBGb3IgZXhhbXBsZSwgXCJUd2VlbkxpdGVcIiBvciBcInBsdWdpbnMuQ1NTUGx1Z2luXCIgb3IgXCJlYXNpbmcuQmFja1wiLlxuXHRcdFx0ICogQHBhcmFtIHshQXJyYXkuPHN0cmluZz59IGRlcGVuZGVuY2llcyBBbiBhcnJheSBvZiBkZXBlbmRlbmNpZXMgKGRlc2NyaWJlZCBhcyB0aGVpciBuYW1lc3BhY2VzIG1pbnVzIFwiY29tLmdyZWVuc29jay5cIiBwcmVmaXgpLiBGb3IgZXhhbXBsZSBbXCJUd2VlbkxpdGVcIixcInBsdWdpbnMuVHdlZW5QbHVnaW5cIixcImNvcmUuQW5pbWF0aW9uXCJdXG5cdFx0XHQgKiBAcGFyYW0geyFmdW5jdGlvbigpOk9iamVjdH0gZnVuYyBUaGUgZnVuY3Rpb24gdGhhdCBzaG91bGQgYmUgY2FsbGVkIGFuZCBwYXNzZWQgdGhlIHJlc29sdmVkIGRlcGVuZGVuY2llcyB3aGljaCB3aWxsIHJldHVybiB0aGUgYWN0dWFsIGNsYXNzIGZvciB0aGlzIGRlZmluaXRpb24uXG5cdFx0XHQgKiBAcGFyYW0ge2Jvb2xlYW49fSBnbG9iYWwgSWYgdHJ1ZSwgdGhlIGNsYXNzIHdpbGwgYmUgYWRkZWQgdG8gdGhlIGdsb2JhbCBzY29wZSAodHlwaWNhbGx5IHdpbmRvdyB1bmxlc3MgeW91IGRlZmluZSBhIHdpbmRvdy5HcmVlblNvY2tHbG9iYWxzIG9iamVjdClcblx0XHRcdCAqL1xuXHRcdFx0RGVmaW5pdGlvbiA9IGZ1bmN0aW9uKG5zLCBkZXBlbmRlbmNpZXMsIGZ1bmMsIGdsb2JhbCkge1xuXHRcdFx0XHR0aGlzLnNjID0gKF9kZWZMb29rdXBbbnNdKSA/IF9kZWZMb29rdXBbbnNdLnNjIDogW107IC8vc3ViY2xhc3Nlc1xuXHRcdFx0XHRfZGVmTG9va3VwW25zXSA9IHRoaXM7XG5cdFx0XHRcdHRoaXMuZ3NDbGFzcyA9IG51bGw7XG5cdFx0XHRcdHRoaXMuZnVuYyA9IGZ1bmM7XG5cdFx0XHRcdHZhciBfY2xhc3NlcyA9IFtdO1xuXHRcdFx0XHR0aGlzLmNoZWNrID0gZnVuY3Rpb24oaW5pdCkge1xuXHRcdFx0XHRcdHZhciBpID0gZGVwZW5kZW5jaWVzLmxlbmd0aCxcblx0XHRcdFx0XHRcdG1pc3NpbmcgPSBpLFxuXHRcdFx0XHRcdFx0Y3VyLCBhLCBuLCBjbDtcblx0XHRcdFx0XHR3aGlsZSAoLS1pID4gLTEpIHtcblx0XHRcdFx0XHRcdGlmICgoY3VyID0gX2RlZkxvb2t1cFtkZXBlbmRlbmNpZXNbaV1dIHx8IG5ldyBEZWZpbml0aW9uKGRlcGVuZGVuY2llc1tpXSwgW10pKS5nc0NsYXNzKSB7XG5cdFx0XHRcdFx0XHRcdF9jbGFzc2VzW2ldID0gY3VyLmdzQ2xhc3M7XG5cdFx0XHRcdFx0XHRcdG1pc3NpbmctLTtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoaW5pdCkge1xuXHRcdFx0XHRcdFx0XHRjdXIuc2MucHVzaCh0aGlzKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKG1pc3NpbmcgPT09IDAgJiYgZnVuYykge1xuXHRcdFx0XHRcdFx0YSA9IChcImNvbS5ncmVlbnNvY2suXCIgKyBucykuc3BsaXQoXCIuXCIpO1xuXHRcdFx0XHRcdFx0biA9IGEucG9wKCk7XG5cdFx0XHRcdFx0XHRjbCA9IF9uYW1lc3BhY2UoYS5qb2luKFwiLlwiKSlbbl0gPSB0aGlzLmdzQ2xhc3MgPSBmdW5jLmFwcGx5KGZ1bmMsIF9jbGFzc2VzKTtcblxuXHRcdFx0XHRcdFx0Ly9leHBvcnRzIHRvIG11bHRpcGxlIGVudmlyb25tZW50c1xuXHRcdFx0XHRcdFx0aWYgKGdsb2JhbCkge1xuXHRcdFx0XHRcdFx0XHRfZ2xvYmFsc1tuXSA9IGNsOyAvL3Byb3ZpZGVzIGEgd2F5IHRvIGF2b2lkIGdsb2JhbCBuYW1lc3BhY2UgcG9sbHV0aW9uLiBCeSBkZWZhdWx0LCB0aGUgbWFpbiBjbGFzc2VzIGxpa2UgVHdlZW5MaXRlLCBQb3dlcjEsIFN0cm9uZywgZXRjLiBhcmUgYWRkZWQgdG8gd2luZG93IHVubGVzcyBhIEdyZWVuU29ja0dsb2JhbHMgaXMgZGVmaW5lZC4gU28gaWYgeW91IHdhbnQgdG8gaGF2ZSB0aGluZ3MgYWRkZWQgdG8gYSBjdXN0b20gb2JqZWN0IGluc3RlYWQsIGp1c3QgZG8gc29tZXRoaW5nIGxpa2Ugd2luZG93LkdyZWVuU29ja0dsb2JhbHMgPSB7fSBiZWZvcmUgbG9hZGluZyBhbnkgR3JlZW5Tb2NrIGZpbGVzLiBZb3UgY2FuIGV2ZW4gc2V0IHVwIGFuIGFsaWFzIGxpa2Ugd2luZG93LkdyZWVuU29ja0dsb2JhbHMgPSB3aW5kb3dzLmdzID0ge30gc28gdGhhdCB5b3UgY2FuIGFjY2VzcyBldmVyeXRoaW5nIGxpa2UgZ3MuVHdlZW5MaXRlLiBBbHNvIHJlbWVtYmVyIHRoYXQgQUxMIGNsYXNzZXMgYXJlIGFkZGVkIHRvIHRoZSB3aW5kb3cuY29tLmdyZWVuc29jayBvYmplY3QgKGluIHRoZWlyIHJlc3BlY3RpdmUgcGFja2FnZXMsIGxpa2UgY29tLmdyZWVuc29jay5lYXNpbmcuUG93ZXIxLCBjb20uZ3JlZW5zb2NrLlR3ZWVuTGl0ZSwgZXRjLilcblx0XHRcdFx0XHRcdFx0aWYgKHR5cGVvZihkZWZpbmUpID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCl7IC8vQU1EXG5cdFx0XHRcdFx0XHRcdFx0ZGVmaW5lKCh3aW5kb3cuR3JlZW5Tb2NrQU1EUGF0aCA/IHdpbmRvdy5HcmVlblNvY2tBTURQYXRoICsgXCIvXCIgOiBcIlwiKSArIG5zLnNwbGl0KFwiLlwiKS5wb3AoKSwgW10sIGZ1bmN0aW9uKCkgeyByZXR1cm4gY2w7IH0pO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKG5zID09PSBtb2R1bGVOYW1lICYmIHR5cGVvZihtb2R1bGUpICE9PSBcInVuZGVmaW5lZFwiICYmIG1vZHVsZS5leHBvcnRzKXsgLy9ub2RlXG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlLmV4cG9ydHMgPSBjbDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IHRoaXMuc2MubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5zY1tpXS5jaGVjaygpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblx0XHRcdFx0dGhpcy5jaGVjayh0cnVlKTtcblx0XHRcdH0sXG5cblx0XHRcdC8vdXNlZCB0byBjcmVhdGUgRGVmaW5pdGlvbiBpbnN0YW5jZXMgKHdoaWNoIGJhc2ljYWxseSByZWdpc3RlcnMgYSBjbGFzcyB0aGF0IGhhcyBkZXBlbmRlbmNpZXMpLlxuXHRcdFx0X2dzRGVmaW5lID0gd2luZG93Ll9nc0RlZmluZSA9IGZ1bmN0aW9uKG5zLCBkZXBlbmRlbmNpZXMsIGZ1bmMsIGdsb2JhbCkge1xuXHRcdFx0XHRyZXR1cm4gbmV3IERlZmluaXRpb24obnMsIGRlcGVuZGVuY2llcywgZnVuYywgZ2xvYmFsKTtcblx0XHRcdH0sXG5cblx0XHRcdC8vYSBxdWljayB3YXkgdG8gY3JlYXRlIGEgY2xhc3MgdGhhdCBkb2Vzbid0IGhhdmUgYW55IGRlcGVuZGVuY2llcy4gUmV0dXJucyB0aGUgY2xhc3MsIGJ1dCBmaXJzdCByZWdpc3RlcnMgaXQgaW4gdGhlIEdyZWVuU29jayBuYW1lc3BhY2Ugc28gdGhhdCBvdGhlciBjbGFzc2VzIGNhbiBncmFiIGl0IChvdGhlciBjbGFzc2VzIG1pZ2h0IGJlIGRlcGVuZGVudCBvbiB0aGUgY2xhc3MpLlxuXHRcdFx0X2NsYXNzID0gZ3MuX2NsYXNzID0gZnVuY3Rpb24obnMsIGZ1bmMsIGdsb2JhbCkge1xuXHRcdFx0XHRmdW5jID0gZnVuYyB8fCBmdW5jdGlvbigpIHt9O1xuXHRcdFx0XHRfZ3NEZWZpbmUobnMsIFtdLCBmdW5jdGlvbigpeyByZXR1cm4gZnVuYzsgfSwgZ2xvYmFsKTtcblx0XHRcdFx0cmV0dXJuIGZ1bmM7XG5cdFx0XHR9O1xuXG5cdFx0X2dzRGVmaW5lLmdsb2JhbHMgPSBfZ2xvYmFscztcblxuXG5cbi8qXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBFYXNlXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblx0XHR2YXIgX2Jhc2VQYXJhbXMgPSBbMCwgMCwgMSwgMV0sXG5cdFx0XHRfYmxhbmtBcnJheSA9IFtdLFxuXHRcdFx0RWFzZSA9IF9jbGFzcyhcImVhc2luZy5FYXNlXCIsIGZ1bmN0aW9uKGZ1bmMsIGV4dHJhUGFyYW1zLCB0eXBlLCBwb3dlcikge1xuXHRcdFx0XHR0aGlzLl9mdW5jID0gZnVuYztcblx0XHRcdFx0dGhpcy5fdHlwZSA9IHR5cGUgfHwgMDtcblx0XHRcdFx0dGhpcy5fcG93ZXIgPSBwb3dlciB8fCAwO1xuXHRcdFx0XHR0aGlzLl9wYXJhbXMgPSBleHRyYVBhcmFtcyA/IF9iYXNlUGFyYW1zLmNvbmNhdChleHRyYVBhcmFtcykgOiBfYmFzZVBhcmFtcztcblx0XHRcdH0sIHRydWUpLFxuXHRcdFx0X2Vhc2VNYXAgPSBFYXNlLm1hcCA9IHt9LFxuXHRcdFx0X2Vhc2VSZWcgPSBFYXNlLnJlZ2lzdGVyID0gZnVuY3Rpb24oZWFzZSwgbmFtZXMsIHR5cGVzLCBjcmVhdGUpIHtcblx0XHRcdFx0dmFyIG5hID0gbmFtZXMuc3BsaXQoXCIsXCIpLFxuXHRcdFx0XHRcdGkgPSBuYS5sZW5ndGgsXG5cdFx0XHRcdFx0dGEgPSAodHlwZXMgfHwgXCJlYXNlSW4sZWFzZU91dCxlYXNlSW5PdXRcIikuc3BsaXQoXCIsXCIpLFxuXHRcdFx0XHRcdGUsIG5hbWUsIGosIHR5cGU7XG5cdFx0XHRcdHdoaWxlICgtLWkgPiAtMSkge1xuXHRcdFx0XHRcdG5hbWUgPSBuYVtpXTtcblx0XHRcdFx0XHRlID0gY3JlYXRlID8gX2NsYXNzKFwiZWFzaW5nLlwiK25hbWUsIG51bGwsIHRydWUpIDogZ3MuZWFzaW5nW25hbWVdIHx8IHt9O1xuXHRcdFx0XHRcdGogPSB0YS5sZW5ndGg7XG5cdFx0XHRcdFx0d2hpbGUgKC0taiA+IC0xKSB7XG5cdFx0XHRcdFx0XHR0eXBlID0gdGFbal07XG5cdFx0XHRcdFx0XHRfZWFzZU1hcFtuYW1lICsgXCIuXCIgKyB0eXBlXSA9IF9lYXNlTWFwW3R5cGUgKyBuYW1lXSA9IGVbdHlwZV0gPSBlYXNlLmdldFJhdGlvID8gZWFzZSA6IGVhc2VbdHlwZV0gfHwgbmV3IGVhc2UoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRwID0gRWFzZS5wcm90b3R5cGU7XG5cdFx0cC5fY2FsY0VuZCA9IGZhbHNlO1xuXHRcdHAuZ2V0UmF0aW8gPSBmdW5jdGlvbihwKSB7XG5cdFx0XHRpZiAodGhpcy5fZnVuYykge1xuXHRcdFx0XHR0aGlzLl9wYXJhbXNbMF0gPSBwO1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fZnVuYy5hcHBseShudWxsLCB0aGlzLl9wYXJhbXMpO1xuXHRcdFx0fVxuXHRcdFx0dmFyIHQgPSB0aGlzLl90eXBlLFxuXHRcdFx0XHRwdyA9IHRoaXMuX3Bvd2VyLFxuXHRcdFx0XHRyID0gKHQgPT09IDEpID8gMSAtIHAgOiAodCA9PT0gMikgPyBwIDogKHAgPCAwLjUpID8gcCAqIDIgOiAoMSAtIHApICogMjtcblx0XHRcdGlmIChwdyA9PT0gMSkge1xuXHRcdFx0XHRyICo9IHI7XG5cdFx0XHR9IGVsc2UgaWYgKHB3ID09PSAyKSB7XG5cdFx0XHRcdHIgKj0gciAqIHI7XG5cdFx0XHR9IGVsc2UgaWYgKHB3ID09PSAzKSB7XG5cdFx0XHRcdHIgKj0gciAqIHIgKiByO1xuXHRcdFx0fSBlbHNlIGlmIChwdyA9PT0gNCkge1xuXHRcdFx0XHRyICo9IHIgKiByICogciAqIHI7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gKHQgPT09IDEpID8gMSAtIHIgOiAodCA9PT0gMikgPyByIDogKHAgPCAwLjUpID8gciAvIDIgOiAxIC0gKHIgLyAyKTtcblx0XHR9O1xuXG5cdFx0Ly9jcmVhdGUgYWxsIHRoZSBzdGFuZGFyZCBlYXNlcyBsaWtlIExpbmVhciwgUXVhZCwgQ3ViaWMsIFF1YXJ0LCBRdWludCwgU3Ryb25nLCBQb3dlcjAsIFBvd2VyMSwgUG93ZXIyLCBQb3dlcjMsIGFuZCBQb3dlcjQgKGVhY2ggd2l0aCBlYXNlSW4sIGVhc2VPdXQsIGFuZCBlYXNlSW5PdXQpXG5cdFx0YSA9IFtcIkxpbmVhclwiLFwiUXVhZFwiLFwiQ3ViaWNcIixcIlF1YXJ0XCIsXCJRdWludCxTdHJvbmdcIl07XG5cdFx0aSA9IGEubGVuZ3RoO1xuXHRcdHdoaWxlICgtLWkgPiAtMSkge1xuXHRcdFx0cCA9IGFbaV0rXCIsUG93ZXJcIitpO1xuXHRcdFx0X2Vhc2VSZWcobmV3IEVhc2UobnVsbCxudWxsLDEsaSksIHAsIFwiZWFzZU91dFwiLCB0cnVlKTtcblx0XHRcdF9lYXNlUmVnKG5ldyBFYXNlKG51bGwsbnVsbCwyLGkpLCBwLCBcImVhc2VJblwiICsgKChpID09PSAwKSA/IFwiLGVhc2VOb25lXCIgOiBcIlwiKSk7XG5cdFx0XHRfZWFzZVJlZyhuZXcgRWFzZShudWxsLG51bGwsMyxpKSwgcCwgXCJlYXNlSW5PdXRcIik7XG5cdFx0fVxuXHRcdF9lYXNlTWFwLmxpbmVhciA9IGdzLmVhc2luZy5MaW5lYXIuZWFzZUluO1xuXHRcdF9lYXNlTWFwLnN3aW5nID0gZ3MuZWFzaW5nLlF1YWQuZWFzZUluT3V0OyAvL2ZvciBqUXVlcnkgZm9sa3NcblxuXG4vKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRXZlbnREaXNwYXRjaGVyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblx0XHR2YXIgRXZlbnREaXNwYXRjaGVyID0gX2NsYXNzKFwiZXZlbnRzLkV2ZW50RGlzcGF0Y2hlclwiLCBmdW5jdGlvbih0YXJnZXQpIHtcblx0XHRcdHRoaXMuX2xpc3RlbmVycyA9IHt9O1xuXHRcdFx0dGhpcy5fZXZlbnRUYXJnZXQgPSB0YXJnZXQgfHwgdGhpcztcblx0XHR9KTtcblx0XHRwID0gRXZlbnREaXNwYXRjaGVyLnByb3RvdHlwZTtcblxuXHRcdHAuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGNhbGxiYWNrLCBzY29wZSwgdXNlUGFyYW0sIHByaW9yaXR5KSB7XG5cdFx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0XHR2YXIgbGlzdCA9IHRoaXMuX2xpc3RlbmVyc1t0eXBlXSxcblx0XHRcdFx0aW5kZXggPSAwLFxuXHRcdFx0XHRsaXN0ZW5lciwgaTtcblx0XHRcdGlmIChsaXN0ID09IG51bGwpIHtcblx0XHRcdFx0dGhpcy5fbGlzdGVuZXJzW3R5cGVdID0gbGlzdCA9IFtdO1xuXHRcdFx0fVxuXHRcdFx0aSA9IGxpc3QubGVuZ3RoO1xuXHRcdFx0d2hpbGUgKC0taSA+IC0xKSB7XG5cdFx0XHRcdGxpc3RlbmVyID0gbGlzdFtpXTtcblx0XHRcdFx0aWYgKGxpc3RlbmVyLmMgPT09IGNhbGxiYWNrICYmIGxpc3RlbmVyLnMgPT09IHNjb3BlKSB7XG5cdFx0XHRcdFx0bGlzdC5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoaW5kZXggPT09IDAgJiYgbGlzdGVuZXIucHIgPCBwcmlvcml0eSkge1xuXHRcdFx0XHRcdGluZGV4ID0gaSArIDE7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGxpc3Quc3BsaWNlKGluZGV4LCAwLCB7YzpjYWxsYmFjaywgczpzY29wZSwgdXA6dXNlUGFyYW0sIHByOnByaW9yaXR5fSk7XG5cdFx0XHRpZiAodGhpcyA9PT0gX3RpY2tlciAmJiAhX3RpY2tlckFjdGl2ZSkge1xuXHRcdFx0XHRfdGlja2VyLndha2UoKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0cC5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgY2FsbGJhY2spIHtcblx0XHRcdHZhciBsaXN0ID0gdGhpcy5fbGlzdGVuZXJzW3R5cGVdLCBpO1xuXHRcdFx0aWYgKGxpc3QpIHtcblx0XHRcdFx0aSA9IGxpc3QubGVuZ3RoO1xuXHRcdFx0XHR3aGlsZSAoLS1pID4gLTEpIHtcblx0XHRcdFx0XHRpZiAobGlzdFtpXS5jID09PSBjYWxsYmFjaykge1xuXHRcdFx0XHRcdFx0bGlzdC5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHAuZGlzcGF0Y2hFdmVudCA9IGZ1bmN0aW9uKHR5cGUpIHtcblx0XHRcdHZhciBsaXN0ID0gdGhpcy5fbGlzdGVuZXJzW3R5cGVdLFxuXHRcdFx0XHRpLCB0LCBsaXN0ZW5lcjtcblx0XHRcdGlmIChsaXN0KSB7XG5cdFx0XHRcdGkgPSBsaXN0Lmxlbmd0aDtcblx0XHRcdFx0dCA9IHRoaXMuX2V2ZW50VGFyZ2V0O1xuXHRcdFx0XHR3aGlsZSAoLS1pID4gLTEpIHtcblx0XHRcdFx0XHRsaXN0ZW5lciA9IGxpc3RbaV07XG5cdFx0XHRcdFx0aWYgKGxpc3RlbmVyKSB7XG5cdFx0XHRcdFx0XHRpZiAobGlzdGVuZXIudXApIHtcblx0XHRcdFx0XHRcdFx0bGlzdGVuZXIuYy5jYWxsKGxpc3RlbmVyLnMgfHwgdCwge3R5cGU6dHlwZSwgdGFyZ2V0OnR9KTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGxpc3RlbmVyLmMuY2FsbChsaXN0ZW5lci5zIHx8IHQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cblxuLypcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFRpY2tlclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG4gXHRcdHZhciBfcmVxQW5pbUZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSxcblx0XHRcdF9jYW5jZWxBbmltRnJhbWUgPSB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUsXG5cdFx0XHRfZ2V0VGltZSA9IERhdGUubm93IHx8IGZ1bmN0aW9uKCkge3JldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTt9LFxuXHRcdFx0X2xhc3RVcGRhdGUgPSBfZ2V0VGltZSgpO1xuXG5cdFx0Ly9ub3cgdHJ5IHRvIGRldGVybWluZSB0aGUgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIGFuZCBjYW5jZWxBbmltYXRpb25GcmFtZSBmdW5jdGlvbnMgYW5kIGlmIG5vbmUgYXJlIGZvdW5kLCB3ZSdsbCB1c2UgYSBzZXRUaW1lb3V0KCkvY2xlYXJUaW1lb3V0KCkgcG9seWZpbGwuXG5cdFx0YSA9IFtcIm1zXCIsXCJtb3pcIixcIndlYmtpdFwiLFwib1wiXTtcblx0XHRpID0gYS5sZW5ndGg7XG5cdFx0d2hpbGUgKC0taSA+IC0xICYmICFfcmVxQW5pbUZyYW1lKSB7XG5cdFx0XHRfcmVxQW5pbUZyYW1lID0gd2luZG93W2FbaV0gKyBcIlJlcXVlc3RBbmltYXRpb25GcmFtZVwiXTtcblx0XHRcdF9jYW5jZWxBbmltRnJhbWUgPSB3aW5kb3dbYVtpXSArIFwiQ2FuY2VsQW5pbWF0aW9uRnJhbWVcIl0gfHwgd2luZG93W2FbaV0gKyBcIkNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZVwiXTtcblx0XHR9XG5cblx0XHRfY2xhc3MoXCJUaWNrZXJcIiwgZnVuY3Rpb24oZnBzLCB1c2VSQUYpIHtcblx0XHRcdHZhciBfc2VsZiA9IHRoaXMsXG5cdFx0XHRcdF9zdGFydFRpbWUgPSBfZ2V0VGltZSgpLFxuXHRcdFx0XHRfdXNlUkFGID0gKHVzZVJBRiAhPT0gZmFsc2UgJiYgX3JlcUFuaW1GcmFtZSksXG5cdFx0XHRcdF9sYWdUaHJlc2hvbGQgPSA1MDAsXG5cdFx0XHRcdF9hZGp1c3RlZExhZyA9IDMzLFxuXHRcdFx0XHRfdGlja1dvcmQgPSBcInRpY2tcIiwgLy9oZWxwcyByZWR1Y2UgZ2MgYnVyZGVuXG5cdFx0XHRcdF9mcHMsIF9yZXEsIF9pZCwgX2dhcCwgX25leHRUaW1lLFxuXHRcdFx0XHRfdGljayA9IGZ1bmN0aW9uKG1hbnVhbCkge1xuXHRcdFx0XHRcdHZhciBlbGFwc2VkID0gX2dldFRpbWUoKSAtIF9sYXN0VXBkYXRlLFxuXHRcdFx0XHRcdFx0b3ZlcmxhcCwgZGlzcGF0Y2g7XG5cdFx0XHRcdFx0aWYgKGVsYXBzZWQgPiBfbGFnVGhyZXNob2xkKSB7XG5cdFx0XHRcdFx0XHRfc3RhcnRUaW1lICs9IGVsYXBzZWQgLSBfYWRqdXN0ZWRMYWc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF9sYXN0VXBkYXRlICs9IGVsYXBzZWQ7XG5cdFx0XHRcdFx0X3NlbGYudGltZSA9IChfbGFzdFVwZGF0ZSAtIF9zdGFydFRpbWUpIC8gMTAwMDtcblx0XHRcdFx0XHRvdmVybGFwID0gX3NlbGYudGltZSAtIF9uZXh0VGltZTtcblx0XHRcdFx0XHRpZiAoIV9mcHMgfHwgb3ZlcmxhcCA+IDAgfHwgbWFudWFsID09PSB0cnVlKSB7XG5cdFx0XHRcdFx0XHRfc2VsZi5mcmFtZSsrO1xuXHRcdFx0XHRcdFx0X25leHRUaW1lICs9IG92ZXJsYXAgKyAob3ZlcmxhcCA+PSBfZ2FwID8gMC4wMDQgOiBfZ2FwIC0gb3ZlcmxhcCk7XG5cdFx0XHRcdFx0XHRkaXNwYXRjaCA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChtYW51YWwgIT09IHRydWUpIHsgLy9tYWtlIHN1cmUgdGhlIHJlcXVlc3QgaXMgbWFkZSBiZWZvcmUgd2UgZGlzcGF0Y2ggdGhlIFwidGlja1wiIGV2ZW50IHNvIHRoYXQgdGltaW5nIGlzIG1haW50YWluZWQuIE90aGVyd2lzZSwgaWYgcHJvY2Vzc2luZyB0aGUgXCJ0aWNrXCIgcmVxdWlyZXMgYSBidW5jaCBvZiB0aW1lIChsaWtlIDE1bXMpIGFuZCB3ZSdyZSB1c2luZyBhIHNldFRpbWVvdXQoKSB0aGF0J3MgYmFzZWQgb24gMTYuN21zLCBpdCdkIHRlY2huaWNhbGx5IHRha2UgMzEuN21zIGJldHdlZW4gZnJhbWVzIG90aGVyd2lzZS5cblx0XHRcdFx0XHRcdF9pZCA9IF9yZXEoX3RpY2spO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoZGlzcGF0Y2gpIHtcblx0XHRcdFx0XHRcdF9zZWxmLmRpc3BhdGNoRXZlbnQoX3RpY2tXb3JkKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cblx0XHRcdEV2ZW50RGlzcGF0Y2hlci5jYWxsKF9zZWxmKTtcblx0XHRcdF9zZWxmLnRpbWUgPSBfc2VsZi5mcmFtZSA9IDA7XG5cdFx0XHRfc2VsZi50aWNrID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdF90aWNrKHRydWUpO1xuXHRcdFx0fTtcblxuXHRcdFx0X3NlbGYubGFnU21vb3RoaW5nID0gZnVuY3Rpb24odGhyZXNob2xkLCBhZGp1c3RlZExhZykge1xuXHRcdFx0XHRfbGFnVGhyZXNob2xkID0gdGhyZXNob2xkIHx8ICgxIC8gX3RpbnlOdW0pOyAvL3plcm8gc2hvdWxkIGJlIGludGVycHJldGVkIGFzIGJhc2ljYWxseSB1bmxpbWl0ZWRcblx0XHRcdFx0X2FkanVzdGVkTGFnID0gTWF0aC5taW4oYWRqdXN0ZWRMYWcsIF9sYWdUaHJlc2hvbGQsIDApO1xuXHRcdFx0fTtcblxuXHRcdFx0X3NlbGYuc2xlZXAgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKF9pZCA9PSBudWxsKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghX3VzZVJBRiB8fCAhX2NhbmNlbEFuaW1GcmFtZSkge1xuXHRcdFx0XHRcdGNsZWFyVGltZW91dChfaWQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdF9jYW5jZWxBbmltRnJhbWUoX2lkKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRfcmVxID0gX2VtcHR5RnVuYztcblx0XHRcdFx0X2lkID0gbnVsbDtcblx0XHRcdFx0aWYgKF9zZWxmID09PSBfdGlja2VyKSB7XG5cdFx0XHRcdFx0X3RpY2tlckFjdGl2ZSA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHRfc2VsZi53YWtlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmIChfaWQgIT09IG51bGwpIHtcblx0XHRcdFx0XHRfc2VsZi5zbGVlcCgpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKF9zZWxmLmZyYW1lID4gMTApIHsgLy9kb24ndCB0cmlnZ2VyIGxhZ1Ntb290aGluZyBpZiB3ZSdyZSBqdXN0IHdha2luZyB1cCwgYW5kIG1ha2Ugc3VyZSB0aGF0IGF0IGxlYXN0IDEwIGZyYW1lcyBoYXZlIGVsYXBzZWQgYmVjYXVzZSBvZiB0aGUgaU9TIGJ1ZyB0aGF0IHdlIHdvcmsgYXJvdW5kIGJlbG93IHdpdGggdGhlIDEuNS1zZWNvbmQgc2V0VGltb3V0KCkuXG5cdFx0XHRcdFx0X2xhc3RVcGRhdGUgPSBfZ2V0VGltZSgpIC0gX2xhZ1RocmVzaG9sZCArIDU7XG5cdFx0XHRcdH1cblx0XHRcdFx0X3JlcSA9IChfZnBzID09PSAwKSA/IF9lbXB0eUZ1bmMgOiAoIV91c2VSQUYgfHwgIV9yZXFBbmltRnJhbWUpID8gZnVuY3Rpb24oZikgeyByZXR1cm4gc2V0VGltZW91dChmLCAoKF9uZXh0VGltZSAtIF9zZWxmLnRpbWUpICogMTAwMCArIDEpIHwgMCk7IH0gOiBfcmVxQW5pbUZyYW1lO1xuXHRcdFx0XHRpZiAoX3NlbGYgPT09IF90aWNrZXIpIHtcblx0XHRcdFx0XHRfdGlja2VyQWN0aXZlID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRfdGljaygyKTtcblx0XHRcdH07XG5cblx0XHRcdF9zZWxmLmZwcyA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHRcdGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdFx0XHRcdHJldHVybiBfZnBzO1xuXHRcdFx0XHR9XG5cdFx0XHRcdF9mcHMgPSB2YWx1ZTtcblx0XHRcdFx0X2dhcCA9IDEgLyAoX2ZwcyB8fCA2MCk7XG5cdFx0XHRcdF9uZXh0VGltZSA9IHRoaXMudGltZSArIF9nYXA7XG5cdFx0XHRcdF9zZWxmLndha2UoKTtcblx0XHRcdH07XG5cblx0XHRcdF9zZWxmLnVzZVJBRiA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHRcdGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdFx0XHRcdHJldHVybiBfdXNlUkFGO1xuXHRcdFx0XHR9XG5cdFx0XHRcdF9zZWxmLnNsZWVwKCk7XG5cdFx0XHRcdF91c2VSQUYgPSB2YWx1ZTtcblx0XHRcdFx0X3NlbGYuZnBzKF9mcHMpO1xuXHRcdFx0fTtcblx0XHRcdF9zZWxmLmZwcyhmcHMpO1xuXG5cdFx0XHQvL2EgYnVnIGluIGlPUyA2IFNhZmFyaSBvY2Nhc2lvbmFsbHkgcHJldmVudHMgdGhlIHJlcXVlc3RBbmltYXRpb25GcmFtZSBmcm9tIHdvcmtpbmcgaW5pdGlhbGx5LCBzbyB3ZSB1c2UgYSAxLjUtc2Vjb25kIHRpbWVvdXQgdGhhdCBhdXRvbWF0aWNhbGx5IGZhbGxzIGJhY2sgdG8gc2V0VGltZW91dCgpIGlmIGl0IHNlbnNlcyB0aGlzIGNvbmRpdGlvbi5cblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmIChfdXNlUkFGICYmIF9zZWxmLmZyYW1lIDwgNSkge1xuXHRcdFx0XHRcdF9zZWxmLnVzZVJBRihmYWxzZSk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIDE1MDApO1xuXHRcdH0pO1xuXG5cdFx0cCA9IGdzLlRpY2tlci5wcm90b3R5cGUgPSBuZXcgZ3MuZXZlbnRzLkV2ZW50RGlzcGF0Y2hlcigpO1xuXHRcdHAuY29uc3RydWN0b3IgPSBncy5UaWNrZXI7XG5cblxuLypcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEFuaW1hdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cdFx0dmFyIEFuaW1hdGlvbiA9IF9jbGFzcyhcImNvcmUuQW5pbWF0aW9uXCIsIGZ1bmN0aW9uKGR1cmF0aW9uLCB2YXJzKSB7XG5cdFx0XHRcdHRoaXMudmFycyA9IHZhcnMgPSB2YXJzIHx8IHt9O1xuXHRcdFx0XHR0aGlzLl9kdXJhdGlvbiA9IHRoaXMuX3RvdGFsRHVyYXRpb24gPSBkdXJhdGlvbiB8fCAwO1xuXHRcdFx0XHR0aGlzLl9kZWxheSA9IE51bWJlcih2YXJzLmRlbGF5KSB8fCAwO1xuXHRcdFx0XHR0aGlzLl90aW1lU2NhbGUgPSAxO1xuXHRcdFx0XHR0aGlzLl9hY3RpdmUgPSAodmFycy5pbW1lZGlhdGVSZW5kZXIgPT09IHRydWUpO1xuXHRcdFx0XHR0aGlzLmRhdGEgPSB2YXJzLmRhdGE7XG5cdFx0XHRcdHRoaXMuX3JldmVyc2VkID0gKHZhcnMucmV2ZXJzZWQgPT09IHRydWUpO1xuXG5cdFx0XHRcdGlmICghX3Jvb3RUaW1lbGluZSkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIV90aWNrZXJBY3RpdmUpIHsgLy9zb21lIGJyb3dzZXJzIChsaWtlIGlPUyA2IFNhZmFyaSkgc2h1dCBkb3duIEphdmFTY3JpcHQgZXhlY3V0aW9uIHdoZW4gdGhlIHRhYiBpcyBkaXNhYmxlZCBhbmQgdGhleSBbb2NjYXNpb25hbGx5XSBuZWdsZWN0IHRvIHN0YXJ0IHVwIHJlcXVlc3RBbmltYXRpb25GcmFtZSBhZ2FpbiB3aGVuIHJldHVybmluZyAtIHRoaXMgY29kZSBlbnN1cmVzIHRoYXQgdGhlIGVuZ2luZSBzdGFydHMgdXAgYWdhaW4gcHJvcGVybHkuXG5cdFx0XHRcdFx0X3RpY2tlci53YWtlKCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR2YXIgdGwgPSB0aGlzLnZhcnMudXNlRnJhbWVzID8gX3Jvb3RGcmFtZXNUaW1lbGluZSA6IF9yb290VGltZWxpbmU7XG5cdFx0XHRcdHRsLmFkZCh0aGlzLCB0bC5fdGltZSk7XG5cblx0XHRcdFx0aWYgKHRoaXMudmFycy5wYXVzZWQpIHtcblx0XHRcdFx0XHR0aGlzLnBhdXNlZCh0cnVlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRfdGlja2VyID0gQW5pbWF0aW9uLnRpY2tlciA9IG5ldyBncy5UaWNrZXIoKTtcblx0XHRwID0gQW5pbWF0aW9uLnByb3RvdHlwZTtcblx0XHRwLl9kaXJ0eSA9IHAuX2djID0gcC5faW5pdHRlZCA9IHAuX3BhdXNlZCA9IGZhbHNlO1xuXHRcdHAuX3RvdGFsVGltZSA9IHAuX3RpbWUgPSAwO1xuXHRcdHAuX3Jhd1ByZXZUaW1lID0gLTE7XG5cdFx0cC5fbmV4dCA9IHAuX2xhc3QgPSBwLl9vblVwZGF0ZSA9IHAuX3RpbWVsaW5lID0gcC50aW1lbGluZSA9IG51bGw7XG5cdFx0cC5fcGF1c2VkID0gZmFsc2U7XG5cblxuXHRcdC8vc29tZSBicm93c2VycyAobGlrZSBpT1MpIG9jY2FzaW9uYWxseSBkcm9wIHRoZSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgZXZlbnQgd2hlbiB0aGUgdXNlciBzd2l0Y2hlcyB0byBhIGRpZmZlcmVudCB0YWIgYW5kIHRoZW4gY29tZXMgYmFjayBhZ2Fpbiwgc28gd2UgdXNlIGEgMi1zZWNvbmQgc2V0VGltZW91dCgpIHRvIHNlbnNlIGlmL3doZW4gdGhhdCBjb25kaXRpb24gb2NjdXJzIGFuZCB0aGVuIHdha2UoKSB0aGUgdGlja2VyLlxuXHRcdHZhciBfY2hlY2tUaW1lb3V0ID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmIChfdGlja2VyQWN0aXZlICYmIF9nZXRUaW1lKCkgLSBfbGFzdFVwZGF0ZSA+IDIwMDApIHtcblx0XHRcdFx0XHRfdGlja2VyLndha2UoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzZXRUaW1lb3V0KF9jaGVja1RpbWVvdXQsIDIwMDApO1xuXHRcdFx0fTtcblx0XHRfY2hlY2tUaW1lb3V0KCk7XG5cblxuXHRcdHAucGxheSA9IGZ1bmN0aW9uKGZyb20sIHN1cHByZXNzRXZlbnRzKSB7XG5cdFx0XHRpZiAoZnJvbSAhPSBudWxsKSB7XG5cdFx0XHRcdHRoaXMuc2Vlayhmcm9tLCBzdXBwcmVzc0V2ZW50cyk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcy5yZXZlcnNlZChmYWxzZSkucGF1c2VkKGZhbHNlKTtcblx0XHR9O1xuXG5cdFx0cC5wYXVzZSA9IGZ1bmN0aW9uKGF0VGltZSwgc3VwcHJlc3NFdmVudHMpIHtcblx0XHRcdGlmIChhdFRpbWUgIT0gbnVsbCkge1xuXHRcdFx0XHR0aGlzLnNlZWsoYXRUaW1lLCBzdXBwcmVzc0V2ZW50cyk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcy5wYXVzZWQodHJ1ZSk7XG5cdFx0fTtcblxuXHRcdHAucmVzdW1lID0gZnVuY3Rpb24oZnJvbSwgc3VwcHJlc3NFdmVudHMpIHtcblx0XHRcdGlmIChmcm9tICE9IG51bGwpIHtcblx0XHRcdFx0dGhpcy5zZWVrKGZyb20sIHN1cHByZXNzRXZlbnRzKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzLnBhdXNlZChmYWxzZSk7XG5cdFx0fTtcblxuXHRcdHAuc2VlayA9IGZ1bmN0aW9uKHRpbWUsIHN1cHByZXNzRXZlbnRzKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy50b3RhbFRpbWUoTnVtYmVyKHRpbWUpLCBzdXBwcmVzc0V2ZW50cyAhPT0gZmFsc2UpO1xuXHRcdH07XG5cblx0XHRwLnJlc3RhcnQgPSBmdW5jdGlvbihpbmNsdWRlRGVsYXksIHN1cHByZXNzRXZlbnRzKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yZXZlcnNlZChmYWxzZSkucGF1c2VkKGZhbHNlKS50b3RhbFRpbWUoaW5jbHVkZURlbGF5ID8gLXRoaXMuX2RlbGF5IDogMCwgKHN1cHByZXNzRXZlbnRzICE9PSBmYWxzZSksIHRydWUpO1xuXHRcdH07XG5cblx0XHRwLnJldmVyc2UgPSBmdW5jdGlvbihmcm9tLCBzdXBwcmVzc0V2ZW50cykge1xuXHRcdFx0aWYgKGZyb20gIT0gbnVsbCkge1xuXHRcdFx0XHR0aGlzLnNlZWsoKGZyb20gfHwgdGhpcy50b3RhbER1cmF0aW9uKCkpLCBzdXBwcmVzc0V2ZW50cyk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcy5yZXZlcnNlZCh0cnVlKS5wYXVzZWQoZmFsc2UpO1xuXHRcdH07XG5cblx0XHRwLnJlbmRlciA9IGZ1bmN0aW9uKHRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSkge1xuXHRcdFx0Ly9zdHViIC0gd2Ugb3ZlcnJpZGUgdGhpcyBtZXRob2QgaW4gc3ViY2xhc3Nlcy5cblx0XHR9O1xuXG5cdFx0cC5pbnZhbGlkYXRlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR0aGlzLl90aW1lID0gdGhpcy5fdG90YWxUaW1lID0gMDtcblx0XHRcdHRoaXMuX2luaXR0ZWQgPSB0aGlzLl9nYyA9IGZhbHNlO1xuXHRcdFx0dGhpcy5fcmF3UHJldlRpbWUgPSAtMTtcblx0XHRcdGlmICh0aGlzLl9nYyB8fCAhdGhpcy50aW1lbGluZSkge1xuXHRcdFx0XHR0aGlzLl9lbmFibGVkKHRydWUpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fTtcblxuXHRcdHAuaXNBY3RpdmUgPSBmdW5jdGlvbigpIHtcblx0XHRcdHZhciB0bCA9IHRoaXMuX3RpbWVsaW5lLCAvL3RoZSAyIHJvb3QgdGltZWxpbmVzIHdvbid0IGhhdmUgYSBfdGltZWxpbmU7IHRoZXkncmUgYWx3YXlzIGFjdGl2ZS5cblx0XHRcdFx0c3RhcnRUaW1lID0gdGhpcy5fc3RhcnRUaW1lLFxuXHRcdFx0XHRyYXdUaW1lO1xuXHRcdFx0cmV0dXJuICghdGwgfHwgKCF0aGlzLl9nYyAmJiAhdGhpcy5fcGF1c2VkICYmIHRsLmlzQWN0aXZlKCkgJiYgKHJhd1RpbWUgPSB0bC5yYXdUaW1lKCkpID49IHN0YXJ0VGltZSAmJiByYXdUaW1lIDwgc3RhcnRUaW1lICsgdGhpcy50b3RhbER1cmF0aW9uKCkgLyB0aGlzLl90aW1lU2NhbGUpKTtcblx0XHR9O1xuXG5cdFx0cC5fZW5hYmxlZCA9IGZ1bmN0aW9uIChlbmFibGVkLCBpZ25vcmVUaW1lbGluZSkge1xuXHRcdFx0aWYgKCFfdGlja2VyQWN0aXZlKSB7XG5cdFx0XHRcdF90aWNrZXIud2FrZSgpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5fZ2MgPSAhZW5hYmxlZDtcblx0XHRcdHRoaXMuX2FjdGl2ZSA9IHRoaXMuaXNBY3RpdmUoKTtcblx0XHRcdGlmIChpZ25vcmVUaW1lbGluZSAhPT0gdHJ1ZSkge1xuXHRcdFx0XHRpZiAoZW5hYmxlZCAmJiAhdGhpcy50aW1lbGluZSkge1xuXHRcdFx0XHRcdHRoaXMuX3RpbWVsaW5lLmFkZCh0aGlzLCB0aGlzLl9zdGFydFRpbWUgLSB0aGlzLl9kZWxheSk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoIWVuYWJsZWQgJiYgdGhpcy50aW1lbGluZSkge1xuXHRcdFx0XHRcdHRoaXMuX3RpbWVsaW5lLl9yZW1vdmUodGhpcywgdHJ1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9O1xuXG5cblx0XHRwLl9raWxsID0gZnVuY3Rpb24odmFycywgdGFyZ2V0KSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5fZW5hYmxlZChmYWxzZSwgZmFsc2UpO1xuXHRcdH07XG5cblx0XHRwLmtpbGwgPSBmdW5jdGlvbih2YXJzLCB0YXJnZXQpIHtcblx0XHRcdHRoaXMuX2tpbGwodmFycywgdGFyZ2V0KTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH07XG5cblx0XHRwLl91bmNhY2hlID0gZnVuY3Rpb24oaW5jbHVkZVNlbGYpIHtcblx0XHRcdHZhciB0d2VlbiA9IGluY2x1ZGVTZWxmID8gdGhpcyA6IHRoaXMudGltZWxpbmU7XG5cdFx0XHR3aGlsZSAodHdlZW4pIHtcblx0XHRcdFx0dHdlZW4uX2RpcnR5ID0gdHJ1ZTtcblx0XHRcdFx0dHdlZW4gPSB0d2Vlbi50aW1lbGluZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH07XG5cblx0XHRwLl9zd2FwU2VsZkluUGFyYW1zID0gZnVuY3Rpb24ocGFyYW1zKSB7XG5cdFx0XHR2YXIgaSA9IHBhcmFtcy5sZW5ndGgsXG5cdFx0XHRcdGNvcHkgPSBwYXJhbXMuY29uY2F0KCk7XG5cdFx0XHR3aGlsZSAoLS1pID4gLTEpIHtcblx0XHRcdFx0aWYgKHBhcmFtc1tpXSA9PT0gXCJ7c2VsZn1cIikge1xuXHRcdFx0XHRcdGNvcHlbaV0gPSB0aGlzO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gY29weTtcblx0XHR9O1xuXG4vLy0tLS1BbmltYXRpb24gZ2V0dGVycy9zZXR0ZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRwLmV2ZW50Q2FsbGJhY2sgPSBmdW5jdGlvbih0eXBlLCBjYWxsYmFjaywgcGFyYW1zLCBzY29wZSkge1xuXHRcdFx0aWYgKCh0eXBlIHx8IFwiXCIpLnN1YnN0cigwLDIpID09PSBcIm9uXCIpIHtcblx0XHRcdFx0dmFyIHYgPSB0aGlzLnZhcnM7XG5cdFx0XHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHZbdHlwZV07XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGNhbGxiYWNrID09IG51bGwpIHtcblx0XHRcdFx0XHRkZWxldGUgdlt0eXBlXTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2W3R5cGVdID0gY2FsbGJhY2s7XG5cdFx0XHRcdFx0dlt0eXBlICsgXCJQYXJhbXNcIl0gPSAoX2lzQXJyYXkocGFyYW1zKSAmJiBwYXJhbXMuam9pbihcIlwiKS5pbmRleE9mKFwie3NlbGZ9XCIpICE9PSAtMSkgPyB0aGlzLl9zd2FwU2VsZkluUGFyYW1zKHBhcmFtcykgOiBwYXJhbXM7XG5cdFx0XHRcdFx0dlt0eXBlICsgXCJTY29wZVwiXSA9IHNjb3BlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0eXBlID09PSBcIm9uVXBkYXRlXCIpIHtcblx0XHRcdFx0XHR0aGlzLl9vblVwZGF0ZSA9IGNhbGxiYWNrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9O1xuXG5cdFx0cC5kZWxheSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX2RlbGF5O1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuX3RpbWVsaW5lLnNtb290aENoaWxkVGltaW5nKSB7XG5cdFx0XHRcdHRoaXMuc3RhcnRUaW1lKCB0aGlzLl9zdGFydFRpbWUgKyB2YWx1ZSAtIHRoaXMuX2RlbGF5ICk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl9kZWxheSA9IHZhbHVlO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fTtcblxuXHRcdHAuZHVyYXRpb24gPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRcdHRoaXMuX2RpcnR5ID0gZmFsc2U7XG5cdFx0XHRcdHJldHVybiB0aGlzLl9kdXJhdGlvbjtcblx0XHRcdH1cblx0XHRcdHRoaXMuX2R1cmF0aW9uID0gdGhpcy5fdG90YWxEdXJhdGlvbiA9IHZhbHVlO1xuXHRcdFx0dGhpcy5fdW5jYWNoZSh0cnVlKTsgLy90cnVlIGluIGNhc2UgaXQncyBhIFR3ZWVuTWF4IG9yIFRpbWVsaW5lTWF4IHRoYXQgaGFzIGEgcmVwZWF0IC0gd2UnbGwgbmVlZCB0byByZWZyZXNoIHRoZSB0b3RhbER1cmF0aW9uLlxuXHRcdFx0aWYgKHRoaXMuX3RpbWVsaW5lLnNtb290aENoaWxkVGltaW5nKSBpZiAodGhpcy5fdGltZSA+IDApIGlmICh0aGlzLl90aW1lIDwgdGhpcy5fZHVyYXRpb24pIGlmICh2YWx1ZSAhPT0gMCkge1xuXHRcdFx0XHR0aGlzLnRvdGFsVGltZSh0aGlzLl90b3RhbFRpbWUgKiAodmFsdWUgLyB0aGlzLl9kdXJhdGlvbiksIHRydWUpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fTtcblxuXHRcdHAudG90YWxEdXJhdGlvbiA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHR0aGlzLl9kaXJ0eSA9IGZhbHNlO1xuXHRcdFx0cmV0dXJuICghYXJndW1lbnRzLmxlbmd0aCkgPyB0aGlzLl90b3RhbER1cmF0aW9uIDogdGhpcy5kdXJhdGlvbih2YWx1ZSk7XG5cdFx0fTtcblxuXHRcdHAudGltZSA9IGZ1bmN0aW9uKHZhbHVlLCBzdXBwcmVzc0V2ZW50cykge1xuXHRcdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLl90aW1lO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuX2RpcnR5KSB7XG5cdFx0XHRcdHRoaXMudG90YWxEdXJhdGlvbigpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXMudG90YWxUaW1lKCh2YWx1ZSA+IHRoaXMuX2R1cmF0aW9uKSA/IHRoaXMuX2R1cmF0aW9uIDogdmFsdWUsIHN1cHByZXNzRXZlbnRzKTtcblx0XHR9O1xuXG5cdFx0cC50b3RhbFRpbWUgPSBmdW5jdGlvbih0aW1lLCBzdXBwcmVzc0V2ZW50cywgdW5jYXBwZWQpIHtcblx0XHRcdGlmICghX3RpY2tlckFjdGl2ZSkge1xuXHRcdFx0XHRfdGlja2VyLndha2UoKTtcblx0XHRcdH1cblx0XHRcdGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fdG90YWxUaW1lO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuX3RpbWVsaW5lKSB7XG5cdFx0XHRcdGlmICh0aW1lIDwgMCAmJiAhdW5jYXBwZWQpIHtcblx0XHRcdFx0XHR0aW1lICs9IHRoaXMudG90YWxEdXJhdGlvbigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0aGlzLl90aW1lbGluZS5zbW9vdGhDaGlsZFRpbWluZykge1xuXHRcdFx0XHRcdGlmICh0aGlzLl9kaXJ0eSkge1xuXHRcdFx0XHRcdFx0dGhpcy50b3RhbER1cmF0aW9uKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHZhciB0b3RhbER1cmF0aW9uID0gdGhpcy5fdG90YWxEdXJhdGlvbixcblx0XHRcdFx0XHRcdHRsID0gdGhpcy5fdGltZWxpbmU7XG5cdFx0XHRcdFx0aWYgKHRpbWUgPiB0b3RhbER1cmF0aW9uICYmICF1bmNhcHBlZCkge1xuXHRcdFx0XHRcdFx0dGltZSA9IHRvdGFsRHVyYXRpb247XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuX3N0YXJ0VGltZSA9ICh0aGlzLl9wYXVzZWQgPyB0aGlzLl9wYXVzZVRpbWUgOiB0bC5fdGltZSkgLSAoKCF0aGlzLl9yZXZlcnNlZCA/IHRpbWUgOiB0b3RhbER1cmF0aW9uIC0gdGltZSkgLyB0aGlzLl90aW1lU2NhbGUpO1xuXHRcdFx0XHRcdGlmICghdGwuX2RpcnR5KSB7IC8vZm9yIHBlcmZvcm1hbmNlIGltcHJvdmVtZW50LiBJZiB0aGUgcGFyZW50J3MgY2FjaGUgaXMgYWxyZWFkeSBkaXJ0eSwgaXQgYWxyZWFkeSB0b29rIGNhcmUgb2YgbWFya2luZyB0aGUgYW5jZXN0b3JzIGFzIGRpcnR5IHRvbywgc28gc2tpcCB0aGUgZnVuY3Rpb24gY2FsbCBoZXJlLlxuXHRcdFx0XHRcdFx0dGhpcy5fdW5jYWNoZShmYWxzZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vaW4gY2FzZSBhbnkgb2YgdGhlIGFuY2VzdG9yIHRpbWVsaW5lcyBoYWQgY29tcGxldGVkIGJ1dCBzaG91bGQgbm93IGJlIGVuYWJsZWQsIHdlIHNob3VsZCByZXNldCB0aGVpciB0b3RhbFRpbWUoKSB3aGljaCB3aWxsIGFsc28gZW5zdXJlIHRoYXQgdGhleSdyZSBsaW5lZCB1cCBwcm9wZXJseSBhbmQgZW5hYmxlZC4gU2tpcCBmb3IgYW5pbWF0aW9ucyB0aGF0IGFyZSBvbiB0aGUgcm9vdCAod2FzdGVmdWwpLiBFeGFtcGxlOiBhIFRpbWVsaW5lTGl0ZS5leHBvcnRSb290KCkgaXMgcGVyZm9ybWVkIHdoZW4gdGhlcmUncyBhIHBhdXNlZCB0d2VlbiBvbiB0aGUgcm9vdCwgdGhlIGV4cG9ydCB3aWxsIG5vdCBjb21wbGV0ZSB1bnRpbCB0aGF0IHR3ZWVuIGlzIHVucGF1c2VkLCBidXQgaW1hZ2luZSBhIGNoaWxkIGdldHMgcmVzdGFydGVkIGxhdGVyLCBhZnRlciBhbGwgW3VucGF1c2VkXSB0d2VlbnMgaGF2ZSBjb21wbGV0ZWQuIFRoZSBzdGFydFRpbWUgb2YgdGhhdCBjaGlsZCB3b3VsZCBnZXQgcHVzaGVkIG91dCwgYnV0IG9uZSBvZiB0aGUgYW5jZXN0b3JzIG1heSBoYXZlIGNvbXBsZXRlZC5cblx0XHRcdFx0XHRpZiAodGwuX3RpbWVsaW5lKSB7XG5cdFx0XHRcdFx0XHR3aGlsZSAodGwuX3RpbWVsaW5lKSB7XG5cdFx0XHRcdFx0XHRcdGlmICh0bC5fdGltZWxpbmUuX3RpbWUgIT09ICh0bC5fc3RhcnRUaW1lICsgdGwuX3RvdGFsVGltZSkgLyB0bC5fdGltZVNjYWxlKSB7XG5cdFx0XHRcdFx0XHRcdFx0dGwudG90YWxUaW1lKHRsLl90b3RhbFRpbWUsIHRydWUpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHRsID0gdGwuX3RpbWVsaW5lO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodGhpcy5fZ2MpIHtcblx0XHRcdFx0XHR0aGlzLl9lbmFibGVkKHRydWUsIGZhbHNlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodGhpcy5fdG90YWxUaW1lICE9PSB0aW1lIHx8IHRoaXMuX2R1cmF0aW9uID09PSAwKSB7XG5cdFx0XHRcdFx0dGhpcy5yZW5kZXIodGltZSwgc3VwcHJlc3NFdmVudHMsIGZhbHNlKTtcblx0XHRcdFx0XHRpZiAoX2xhenlUd2VlbnMubGVuZ3RoKSB7IC8vaW4gY2FzZSByZW5kZXJpbmcgY2F1c2VkIGFueSB0d2VlbnMgdG8gbGF6eS1pbml0LCB3ZSBzaG91bGQgcmVuZGVyIHRoZW0gYmVjYXVzZSB0eXBpY2FsbHkgd2hlbiBzb21lb25lIGNhbGxzIHNlZWsoKSBvciB0aW1lKCkgb3IgcHJvZ3Jlc3MoKSwgdGhleSBleHBlY3QgYW4gaW1tZWRpYXRlIHJlbmRlci5cblx0XHRcdFx0XHRcdF9sYXp5UmVuZGVyKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9O1xuXG5cdFx0cC5wcm9ncmVzcyA9IHAudG90YWxQcm9ncmVzcyA9IGZ1bmN0aW9uKHZhbHVlLCBzdXBwcmVzc0V2ZW50cykge1xuXHRcdFx0cmV0dXJuICghYXJndW1lbnRzLmxlbmd0aCkgPyB0aGlzLl90aW1lIC8gdGhpcy5kdXJhdGlvbigpIDogdGhpcy50b3RhbFRpbWUodGhpcy5kdXJhdGlvbigpICogdmFsdWUsIHN1cHByZXNzRXZlbnRzKTtcblx0XHR9O1xuXG5cdFx0cC5zdGFydFRpbWUgPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLl9zdGFydFRpbWU7XG5cdFx0XHR9XG5cdFx0XHRpZiAodmFsdWUgIT09IHRoaXMuX3N0YXJ0VGltZSkge1xuXHRcdFx0XHR0aGlzLl9zdGFydFRpbWUgPSB2YWx1ZTtcblx0XHRcdFx0aWYgKHRoaXMudGltZWxpbmUpIGlmICh0aGlzLnRpbWVsaW5lLl9zb3J0Q2hpbGRyZW4pIHtcblx0XHRcdFx0XHR0aGlzLnRpbWVsaW5lLmFkZCh0aGlzLCB2YWx1ZSAtIHRoaXMuX2RlbGF5KTsgLy9lbnN1cmVzIHRoYXQgYW55IG5lY2Vzc2FyeSByZS1zZXF1ZW5jaW5nIG9mIEFuaW1hdGlvbnMgaW4gdGhlIHRpbWVsaW5lIG9jY3VycyB0byBtYWtlIHN1cmUgdGhlIHJlbmRlcmluZyBvcmRlciBpcyBjb3JyZWN0LlxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9O1xuXG5cdFx0cC5lbmRUaW1lID0gZnVuY3Rpb24oaW5jbHVkZVJlcGVhdHMpIHtcblx0XHRcdHJldHVybiB0aGlzLl9zdGFydFRpbWUgKyAoKGluY2x1ZGVSZXBlYXRzICE9IGZhbHNlKSA/IHRoaXMudG90YWxEdXJhdGlvbigpIDogdGhpcy5kdXJhdGlvbigpKSAvIHRoaXMuX3RpbWVTY2FsZTtcblx0XHR9O1xuXG5cdFx0cC50aW1lU2NhbGUgPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLl90aW1lU2NhbGU7XG5cdFx0XHR9XG5cdFx0XHR2YWx1ZSA9IHZhbHVlIHx8IF90aW55TnVtOyAvL2Nhbid0IGFsbG93IHplcm8gYmVjYXVzZSBpdCdsbCB0aHJvdyB0aGUgbWF0aCBvZmZcblx0XHRcdGlmICh0aGlzLl90aW1lbGluZSAmJiB0aGlzLl90aW1lbGluZS5zbW9vdGhDaGlsZFRpbWluZykge1xuXHRcdFx0XHR2YXIgcGF1c2VUaW1lID0gdGhpcy5fcGF1c2VUaW1lLFxuXHRcdFx0XHRcdHQgPSAocGF1c2VUaW1lIHx8IHBhdXNlVGltZSA9PT0gMCkgPyBwYXVzZVRpbWUgOiB0aGlzLl90aW1lbGluZS50b3RhbFRpbWUoKTtcblx0XHRcdFx0dGhpcy5fc3RhcnRUaW1lID0gdCAtICgodCAtIHRoaXMuX3N0YXJ0VGltZSkgKiB0aGlzLl90aW1lU2NhbGUgLyB2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl90aW1lU2NhbGUgPSB2YWx1ZTtcblx0XHRcdHJldHVybiB0aGlzLl91bmNhY2hlKGZhbHNlKTtcblx0XHR9O1xuXG5cdFx0cC5yZXZlcnNlZCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX3JldmVyc2VkO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHZhbHVlICE9IHRoaXMuX3JldmVyc2VkKSB7XG5cdFx0XHRcdHRoaXMuX3JldmVyc2VkID0gdmFsdWU7XG5cdFx0XHRcdHRoaXMudG90YWxUaW1lKCgodGhpcy5fdGltZWxpbmUgJiYgIXRoaXMuX3RpbWVsaW5lLnNtb290aENoaWxkVGltaW5nKSA/IHRoaXMudG90YWxEdXJhdGlvbigpIC0gdGhpcy5fdG90YWxUaW1lIDogdGhpcy5fdG90YWxUaW1lKSwgdHJ1ZSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9O1xuXG5cdFx0cC5wYXVzZWQgPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLl9wYXVzZWQ7XG5cdFx0XHR9XG5cdFx0XHR2YXIgdGwgPSB0aGlzLl90aW1lbGluZSxcblx0XHRcdFx0cmF3LCBlbGFwc2VkO1xuXHRcdFx0aWYgKHZhbHVlICE9IHRoaXMuX3BhdXNlZCkgaWYgKHRsKSB7XG5cdFx0XHRcdGlmICghX3RpY2tlckFjdGl2ZSAmJiAhdmFsdWUpIHtcblx0XHRcdFx0XHRfdGlja2VyLndha2UoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyYXcgPSB0bC5yYXdUaW1lKCk7XG5cdFx0XHRcdGVsYXBzZWQgPSByYXcgLSB0aGlzLl9wYXVzZVRpbWU7XG5cdFx0XHRcdGlmICghdmFsdWUgJiYgdGwuc21vb3RoQ2hpbGRUaW1pbmcpIHtcblx0XHRcdFx0XHR0aGlzLl9zdGFydFRpbWUgKz0gZWxhcHNlZDtcblx0XHRcdFx0XHR0aGlzLl91bmNhY2hlKGZhbHNlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLl9wYXVzZVRpbWUgPSB2YWx1ZSA/IHJhdyA6IG51bGw7XG5cdFx0XHRcdHRoaXMuX3BhdXNlZCA9IHZhbHVlO1xuXHRcdFx0XHR0aGlzLl9hY3RpdmUgPSB0aGlzLmlzQWN0aXZlKCk7XG5cdFx0XHRcdGlmICghdmFsdWUgJiYgZWxhcHNlZCAhPT0gMCAmJiB0aGlzLl9pbml0dGVkICYmIHRoaXMuZHVyYXRpb24oKSkge1xuXHRcdFx0XHRcdHRoaXMucmVuZGVyKCh0bC5zbW9vdGhDaGlsZFRpbWluZyA/IHRoaXMuX3RvdGFsVGltZSA6IChyYXcgLSB0aGlzLl9zdGFydFRpbWUpIC8gdGhpcy5fdGltZVNjYWxlKSwgdHJ1ZSwgdHJ1ZSk7IC8vaW4gY2FzZSB0aGUgdGFyZ2V0J3MgcHJvcGVydGllcyBjaGFuZ2VkIHZpYSBzb21lIG90aGVyIHR3ZWVuIG9yIG1hbnVhbCB1cGRhdGUgYnkgdGhlIHVzZXIsIHdlIHNob3VsZCBmb3JjZSBhIHJlbmRlci5cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuX2djICYmICF2YWx1ZSkge1xuXHRcdFx0XHR0aGlzLl9lbmFibGVkKHRydWUsIGZhbHNlKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH07XG5cblxuLypcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFNpbXBsZVRpbWVsaW5lXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblx0XHR2YXIgU2ltcGxlVGltZWxpbmUgPSBfY2xhc3MoXCJjb3JlLlNpbXBsZVRpbWVsaW5lXCIsIGZ1bmN0aW9uKHZhcnMpIHtcblx0XHRcdEFuaW1hdGlvbi5jYWxsKHRoaXMsIDAsIHZhcnMpO1xuXHRcdFx0dGhpcy5hdXRvUmVtb3ZlQ2hpbGRyZW4gPSB0aGlzLnNtb290aENoaWxkVGltaW5nID0gdHJ1ZTtcblx0XHR9KTtcblxuXHRcdHAgPSBTaW1wbGVUaW1lbGluZS5wcm90b3R5cGUgPSBuZXcgQW5pbWF0aW9uKCk7XG5cdFx0cC5jb25zdHJ1Y3RvciA9IFNpbXBsZVRpbWVsaW5lO1xuXHRcdHAua2lsbCgpLl9nYyA9IGZhbHNlO1xuXHRcdHAuX2ZpcnN0ID0gcC5fbGFzdCA9IHAuX3JlY2VudCA9IG51bGw7XG5cdFx0cC5fc29ydENoaWxkcmVuID0gZmFsc2U7XG5cblx0XHRwLmFkZCA9IHAuaW5zZXJ0ID0gZnVuY3Rpb24oY2hpbGQsIHBvc2l0aW9uLCBhbGlnbiwgc3RhZ2dlcikge1xuXHRcdFx0dmFyIHByZXZUd2Vlbiwgc3Q7XG5cdFx0XHRjaGlsZC5fc3RhcnRUaW1lID0gTnVtYmVyKHBvc2l0aW9uIHx8IDApICsgY2hpbGQuX2RlbGF5O1xuXHRcdFx0aWYgKGNoaWxkLl9wYXVzZWQpIGlmICh0aGlzICE9PSBjaGlsZC5fdGltZWxpbmUpIHsgLy93ZSBvbmx5IGFkanVzdCB0aGUgX3BhdXNlVGltZSBpZiBpdCB3YXNuJ3QgaW4gdGhpcyB0aW1lbGluZSBhbHJlYWR5LiBSZW1lbWJlciwgc29tZXRpbWVzIGEgdHdlZW4gd2lsbCBiZSBpbnNlcnRlZCBhZ2FpbiBpbnRvIHRoZSBzYW1lIHRpbWVsaW5lIHdoZW4gaXRzIHN0YXJ0VGltZSBpcyBjaGFuZ2VkIHNvIHRoYXQgdGhlIHR3ZWVucyBpbiB0aGUgVGltZWxpbmVMaXRlL01heCBhcmUgcmUtb3JkZXJlZCBwcm9wZXJseSBpbiB0aGUgbGlua2VkIGxpc3QgKHNvIGV2ZXJ5dGhpbmcgcmVuZGVycyBpbiB0aGUgcHJvcGVyIG9yZGVyKS5cblx0XHRcdFx0Y2hpbGQuX3BhdXNlVGltZSA9IGNoaWxkLl9zdGFydFRpbWUgKyAoKHRoaXMucmF3VGltZSgpIC0gY2hpbGQuX3N0YXJ0VGltZSkgLyBjaGlsZC5fdGltZVNjYWxlKTtcblx0XHRcdH1cblx0XHRcdGlmIChjaGlsZC50aW1lbGluZSkge1xuXHRcdFx0XHRjaGlsZC50aW1lbGluZS5fcmVtb3ZlKGNoaWxkLCB0cnVlKTsgLy9yZW1vdmVzIGZyb20gZXhpc3RpbmcgdGltZWxpbmUgc28gdGhhdCBpdCBjYW4gYmUgcHJvcGVybHkgYWRkZWQgdG8gdGhpcyBvbmUuXG5cdFx0XHR9XG5cdFx0XHRjaGlsZC50aW1lbGluZSA9IGNoaWxkLl90aW1lbGluZSA9IHRoaXM7XG5cdFx0XHRpZiAoY2hpbGQuX2djKSB7XG5cdFx0XHRcdGNoaWxkLl9lbmFibGVkKHRydWUsIHRydWUpO1xuXHRcdFx0fVxuXHRcdFx0cHJldlR3ZWVuID0gdGhpcy5fbGFzdDtcblx0XHRcdGlmICh0aGlzLl9zb3J0Q2hpbGRyZW4pIHtcblx0XHRcdFx0c3QgPSBjaGlsZC5fc3RhcnRUaW1lO1xuXHRcdFx0XHR3aGlsZSAocHJldlR3ZWVuICYmIHByZXZUd2Vlbi5fc3RhcnRUaW1lID4gc3QpIHtcblx0XHRcdFx0XHRwcmV2VHdlZW4gPSBwcmV2VHdlZW4uX3ByZXY7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChwcmV2VHdlZW4pIHtcblx0XHRcdFx0Y2hpbGQuX25leHQgPSBwcmV2VHdlZW4uX25leHQ7XG5cdFx0XHRcdHByZXZUd2Vlbi5fbmV4dCA9IGNoaWxkO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y2hpbGQuX25leHQgPSB0aGlzLl9maXJzdDtcblx0XHRcdFx0dGhpcy5fZmlyc3QgPSBjaGlsZDtcblx0XHRcdH1cblx0XHRcdGlmIChjaGlsZC5fbmV4dCkge1xuXHRcdFx0XHRjaGlsZC5fbmV4dC5fcHJldiA9IGNoaWxkO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5fbGFzdCA9IGNoaWxkO1xuXHRcdFx0fVxuXHRcdFx0Y2hpbGQuX3ByZXYgPSBwcmV2VHdlZW47XG5cdFx0XHR0aGlzLl9yZWNlbnQgPSBjaGlsZDtcblx0XHRcdGlmICh0aGlzLl90aW1lbGluZSkge1xuXHRcdFx0XHR0aGlzLl91bmNhY2hlKHRydWUpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fTtcblxuXHRcdHAuX3JlbW92ZSA9IGZ1bmN0aW9uKHR3ZWVuLCBza2lwRGlzYWJsZSkge1xuXHRcdFx0aWYgKHR3ZWVuLnRpbWVsaW5lID09PSB0aGlzKSB7XG5cdFx0XHRcdGlmICghc2tpcERpc2FibGUpIHtcblx0XHRcdFx0XHR0d2Vlbi5fZW5hYmxlZChmYWxzZSwgdHJ1ZSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAodHdlZW4uX3ByZXYpIHtcblx0XHRcdFx0XHR0d2Vlbi5fcHJldi5fbmV4dCA9IHR3ZWVuLl9uZXh0O1xuXHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMuX2ZpcnN0ID09PSB0d2Vlbikge1xuXHRcdFx0XHRcdHRoaXMuX2ZpcnN0ID0gdHdlZW4uX25leHQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHR3ZWVuLl9uZXh0KSB7XG5cdFx0XHRcdFx0dHdlZW4uX25leHQuX3ByZXYgPSB0d2Vlbi5fcHJldjtcblx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLl9sYXN0ID09PSB0d2Vlbikge1xuXHRcdFx0XHRcdHRoaXMuX2xhc3QgPSB0d2Vlbi5fcHJldjtcblx0XHRcdFx0fVxuXHRcdFx0XHR0d2Vlbi5fbmV4dCA9IHR3ZWVuLl9wcmV2ID0gdHdlZW4udGltZWxpbmUgPSBudWxsO1xuXHRcdFx0XHRpZiAodHdlZW4gPT09IHRoaXMuX3JlY2VudCkge1xuXHRcdFx0XHRcdHRoaXMuX3JlY2VudCA9IHRoaXMuX2xhc3Q7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAodGhpcy5fdGltZWxpbmUpIHtcblx0XHRcdFx0XHR0aGlzLl91bmNhY2hlKHRydWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9O1xuXG5cdFx0cC5yZW5kZXIgPSBmdW5jdGlvbih0aW1lLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpIHtcblx0XHRcdHZhciB0d2VlbiA9IHRoaXMuX2ZpcnN0LFxuXHRcdFx0XHRuZXh0O1xuXHRcdFx0dGhpcy5fdG90YWxUaW1lID0gdGhpcy5fdGltZSA9IHRoaXMuX3Jhd1ByZXZUaW1lID0gdGltZTtcblx0XHRcdHdoaWxlICh0d2Vlbikge1xuXHRcdFx0XHRuZXh0ID0gdHdlZW4uX25leHQ7IC8vcmVjb3JkIGl0IGhlcmUgYmVjYXVzZSB0aGUgdmFsdWUgY291bGQgY2hhbmdlIGFmdGVyIHJlbmRlcmluZy4uLlxuXHRcdFx0XHRpZiAodHdlZW4uX2FjdGl2ZSB8fCAodGltZSA+PSB0d2Vlbi5fc3RhcnRUaW1lICYmICF0d2Vlbi5fcGF1c2VkKSkge1xuXHRcdFx0XHRcdGlmICghdHdlZW4uX3JldmVyc2VkKSB7XG5cdFx0XHRcdFx0XHR0d2Vlbi5yZW5kZXIoKHRpbWUgLSB0d2Vlbi5fc3RhcnRUaW1lKSAqIHR3ZWVuLl90aW1lU2NhbGUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHR3ZWVuLnJlbmRlcigoKCF0d2Vlbi5fZGlydHkpID8gdHdlZW4uX3RvdGFsRHVyYXRpb24gOiB0d2Vlbi50b3RhbER1cmF0aW9uKCkpIC0gKCh0aW1lIC0gdHdlZW4uX3N0YXJ0VGltZSkgKiB0d2Vlbi5fdGltZVNjYWxlKSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0dHdlZW4gPSBuZXh0O1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRwLnJhd1RpbWUgPSBmdW5jdGlvbigpIHtcblx0XHRcdGlmICghX3RpY2tlckFjdGl2ZSkge1xuXHRcdFx0XHRfdGlja2VyLndha2UoKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzLl90b3RhbFRpbWU7XG5cdFx0fTtcblxuLypcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFR3ZWVuTGl0ZVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cdFx0dmFyIFR3ZWVuTGl0ZSA9IF9jbGFzcyhcIlR3ZWVuTGl0ZVwiLCBmdW5jdGlvbih0YXJnZXQsIGR1cmF0aW9uLCB2YXJzKSB7XG5cdFx0XHRcdEFuaW1hdGlvbi5jYWxsKHRoaXMsIGR1cmF0aW9uLCB2YXJzKTtcblx0XHRcdFx0dGhpcy5yZW5kZXIgPSBUd2VlbkxpdGUucHJvdG90eXBlLnJlbmRlcjsgLy9zcGVlZCBvcHRpbWl6YXRpb24gKGF2b2lkIHByb3RvdHlwZSBsb29rdXAgb24gdGhpcyBcImhvdFwiIG1ldGhvZClcblxuXHRcdFx0XHRpZiAodGFyZ2V0ID09IG51bGwpIHtcblx0XHRcdFx0XHR0aHJvdyBcIkNhbm5vdCB0d2VlbiBhIG51bGwgdGFyZ2V0LlwiO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy50YXJnZXQgPSB0YXJnZXQgPSAodHlwZW9mKHRhcmdldCkgIT09IFwic3RyaW5nXCIpID8gdGFyZ2V0IDogVHdlZW5MaXRlLnNlbGVjdG9yKHRhcmdldCkgfHwgdGFyZ2V0O1xuXG5cdFx0XHRcdHZhciBpc1NlbGVjdG9yID0gKHRhcmdldC5qcXVlcnkgfHwgKHRhcmdldC5sZW5ndGggJiYgdGFyZ2V0ICE9PSB3aW5kb3cgJiYgdGFyZ2V0WzBdICYmICh0YXJnZXRbMF0gPT09IHdpbmRvdyB8fCAodGFyZ2V0WzBdLm5vZGVUeXBlICYmIHRhcmdldFswXS5zdHlsZSAmJiAhdGFyZ2V0Lm5vZGVUeXBlKSkpKSxcblx0XHRcdFx0XHRvdmVyd3JpdGUgPSB0aGlzLnZhcnMub3ZlcndyaXRlLFxuXHRcdFx0XHRcdGksIHRhcmcsIHRhcmdldHM7XG5cblx0XHRcdFx0dGhpcy5fb3ZlcndyaXRlID0gb3ZlcndyaXRlID0gKG92ZXJ3cml0ZSA9PSBudWxsKSA/IF9vdmVyd3JpdGVMb29rdXBbVHdlZW5MaXRlLmRlZmF1bHRPdmVyd3JpdGVdIDogKHR5cGVvZihvdmVyd3JpdGUpID09PSBcIm51bWJlclwiKSA/IG92ZXJ3cml0ZSA+PiAwIDogX292ZXJ3cml0ZUxvb2t1cFtvdmVyd3JpdGVdO1xuXG5cdFx0XHRcdGlmICgoaXNTZWxlY3RvciB8fCB0YXJnZXQgaW5zdGFuY2VvZiBBcnJheSB8fCAodGFyZ2V0LnB1c2ggJiYgX2lzQXJyYXkodGFyZ2V0KSkpICYmIHR5cGVvZih0YXJnZXRbMF0pICE9PSBcIm51bWJlclwiKSB7XG5cdFx0XHRcdFx0dGhpcy5fdGFyZ2V0cyA9IHRhcmdldHMgPSBfc2xpY2UodGFyZ2V0KTsgIC8vZG9uJ3QgdXNlIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRhcmdldCwgMCkgYmVjYXVzZSB0aGF0IGRvZXNuJ3Qgd29yayBpbiBJRTggd2l0aCBhIE5vZGVMaXN0IHRoYXQncyByZXR1cm5lZCBieSBxdWVyeVNlbGVjdG9yQWxsKClcblx0XHRcdFx0XHR0aGlzLl9wcm9wTG9va3VwID0gW107XG5cdFx0XHRcdFx0dGhpcy5fc2libGluZ3MgPSBbXTtcblx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgdGFyZ2V0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0dGFyZyA9IHRhcmdldHNbaV07XG5cdFx0XHRcdFx0XHRpZiAoIXRhcmcpIHtcblx0XHRcdFx0XHRcdFx0dGFyZ2V0cy5zcGxpY2UoaS0tLCAxKTtcblx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHR5cGVvZih0YXJnKSA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0XHRcdFx0XHR0YXJnID0gdGFyZ2V0c1tpLS1dID0gVHdlZW5MaXRlLnNlbGVjdG9yKHRhcmcpOyAvL2luIGNhc2UgaXQncyBhbiBhcnJheSBvZiBzdHJpbmdzXG5cdFx0XHRcdFx0XHRcdGlmICh0eXBlb2YodGFyZykgPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdFx0XHRcdFx0XHR0YXJnZXRzLnNwbGljZShpKzEsIDEpOyAvL3RvIGF2b2lkIGFuIGVuZGxlc3MgbG9vcCAoY2FuJ3QgaW1hZ2luZSB3aHkgdGhlIHNlbGVjdG9yIHdvdWxkIHJldHVybiBhIHN0cmluZywgYnV0IGp1c3QgaW4gY2FzZSlcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAodGFyZy5sZW5ndGggJiYgdGFyZyAhPT0gd2luZG93ICYmIHRhcmdbMF0gJiYgKHRhcmdbMF0gPT09IHdpbmRvdyB8fCAodGFyZ1swXS5ub2RlVHlwZSAmJiB0YXJnWzBdLnN0eWxlICYmICF0YXJnLm5vZGVUeXBlKSkpIHsgLy9pbiBjYXNlIHRoZSB1c2VyIGlzIHBhc3NpbmcgaW4gYW4gYXJyYXkgb2Ygc2VsZWN0b3Igb2JqZWN0cyAobGlrZSBqUXVlcnkgb2JqZWN0cyksIHdlIG5lZWQgdG8gY2hlY2sgb25lIG1vcmUgbGV2ZWwgYW5kIHB1bGwgdGhpbmdzIG91dCBpZiBuZWNlc3NhcnkuIEFsc28gbm90ZSB0aGF0IDxzZWxlY3Q+IGVsZW1lbnRzIHBhc3MgYWxsIHRoZSBjcml0ZXJpYSByZWdhcmRpbmcgbGVuZ3RoIGFuZCB0aGUgZmlyc3QgY2hpbGQgaGF2aW5nIHN0eWxlLCBzbyB3ZSBtdXN0IGFsc28gY2hlY2sgdG8gZW5zdXJlIHRoZSB0YXJnZXQgaXNuJ3QgYW4gSFRNTCBub2RlIGl0c2VsZi5cblx0XHRcdFx0XHRcdFx0dGFyZ2V0cy5zcGxpY2UoaS0tLCAxKTtcblx0XHRcdFx0XHRcdFx0dGhpcy5fdGFyZ2V0cyA9IHRhcmdldHMgPSB0YXJnZXRzLmNvbmNhdChfc2xpY2UodGFyZykpO1xuXHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHRoaXMuX3NpYmxpbmdzW2ldID0gX3JlZ2lzdGVyKHRhcmcsIHRoaXMsIGZhbHNlKTtcblx0XHRcdFx0XHRcdGlmIChvdmVyd3JpdGUgPT09IDEpIGlmICh0aGlzLl9zaWJsaW5nc1tpXS5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdFx0XHRcdF9hcHBseU92ZXJ3cml0ZSh0YXJnLCB0aGlzLCBudWxsLCAxLCB0aGlzLl9zaWJsaW5nc1tpXSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5fcHJvcExvb2t1cCA9IHt9O1xuXHRcdFx0XHRcdHRoaXMuX3NpYmxpbmdzID0gX3JlZ2lzdGVyKHRhcmdldCwgdGhpcywgZmFsc2UpO1xuXHRcdFx0XHRcdGlmIChvdmVyd3JpdGUgPT09IDEpIGlmICh0aGlzLl9zaWJsaW5ncy5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdFx0XHRfYXBwbHlPdmVyd3JpdGUodGFyZ2V0LCB0aGlzLCBudWxsLCAxLCB0aGlzLl9zaWJsaW5ncyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0aGlzLnZhcnMuaW1tZWRpYXRlUmVuZGVyIHx8IChkdXJhdGlvbiA9PT0gMCAmJiB0aGlzLl9kZWxheSA9PT0gMCAmJiB0aGlzLnZhcnMuaW1tZWRpYXRlUmVuZGVyICE9PSBmYWxzZSkpIHtcblx0XHRcdFx0XHR0aGlzLl90aW1lID0gLV90aW55TnVtOyAvL2ZvcmNlcyBhIHJlbmRlciB3aXRob3V0IGhhdmluZyB0byBzZXQgdGhlIHJlbmRlcigpIFwiZm9yY2VcIiBwYXJhbWV0ZXIgdG8gdHJ1ZSBiZWNhdXNlIHdlIHdhbnQgdG8gYWxsb3cgbGF6eWluZyBieSBkZWZhdWx0ICh1c2luZyB0aGUgXCJmb3JjZVwiIHBhcmFtZXRlciBhbHdheXMgZm9yY2VzIGFuIGltbWVkaWF0ZSBmdWxsIHJlbmRlcilcblx0XHRcdFx0XHR0aGlzLnJlbmRlcigtdGhpcy5fZGVsYXkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0cnVlKSxcblx0XHRcdF9pc1NlbGVjdG9yID0gZnVuY3Rpb24odikge1xuXHRcdFx0XHRyZXR1cm4gKHYgJiYgdi5sZW5ndGggJiYgdiAhPT0gd2luZG93ICYmIHZbMF0gJiYgKHZbMF0gPT09IHdpbmRvdyB8fCAodlswXS5ub2RlVHlwZSAmJiB2WzBdLnN0eWxlICYmICF2Lm5vZGVUeXBlKSkpOyAvL3dlIGNhbm5vdCBjaGVjayBcIm5vZGVUeXBlXCIgaWYgdGhlIHRhcmdldCBpcyB3aW5kb3cgZnJvbSB3aXRoaW4gYW4gaWZyYW1lLCBvdGhlcndpc2UgaXQgd2lsbCB0cmlnZ2VyIGEgc2VjdXJpdHkgZXJyb3IgaW4gc29tZSBicm93c2VycyBsaWtlIEZpcmVmb3guXG5cdFx0XHR9LFxuXHRcdFx0X2F1dG9DU1MgPSBmdW5jdGlvbih2YXJzLCB0YXJnZXQpIHtcblx0XHRcdFx0dmFyIGNzcyA9IHt9LFxuXHRcdFx0XHRcdHA7XG5cdFx0XHRcdGZvciAocCBpbiB2YXJzKSB7XG5cdFx0XHRcdFx0aWYgKCFfcmVzZXJ2ZWRQcm9wc1twXSAmJiAoIShwIGluIHRhcmdldCkgfHwgcCA9PT0gXCJ0cmFuc2Zvcm1cIiB8fCBwID09PSBcInhcIiB8fCBwID09PSBcInlcIiB8fCBwID09PSBcIndpZHRoXCIgfHwgcCA9PT0gXCJoZWlnaHRcIiB8fCBwID09PSBcImNsYXNzTmFtZVwiIHx8IHAgPT09IFwiYm9yZGVyXCIpICYmICghX3BsdWdpbnNbcF0gfHwgKF9wbHVnaW5zW3BdICYmIF9wbHVnaW5zW3BdLl9hdXRvQ1NTKSkpIHsgLy9ub3RlOiA8aW1nPiBlbGVtZW50cyBjb250YWluIHJlYWQtb25seSBcInhcIiBhbmQgXCJ5XCIgcHJvcGVydGllcy4gV2Ugc2hvdWxkIGFsc28gcHJpb3JpdGl6ZSBlZGl0aW5nIGNzcyB3aWR0aC9oZWlnaHQgcmF0aGVyIHRoYW4gdGhlIGVsZW1lbnQncyBwcm9wZXJ0aWVzLlxuXHRcdFx0XHRcdFx0Y3NzW3BdID0gdmFyc1twXTtcblx0XHRcdFx0XHRcdGRlbGV0ZSB2YXJzW3BdO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHR2YXJzLmNzcyA9IGNzcztcblx0XHRcdH07XG5cblx0XHRwID0gVHdlZW5MaXRlLnByb3RvdHlwZSA9IG5ldyBBbmltYXRpb24oKTtcblx0XHRwLmNvbnN0cnVjdG9yID0gVHdlZW5MaXRlO1xuXHRcdHAua2lsbCgpLl9nYyA9IGZhbHNlO1xuXG4vLy0tLS1Ud2VlbkxpdGUgZGVmYXVsdHMsIG92ZXJ3cml0ZSBtYW5hZ2VtZW50LCBhbmQgcm9vdCB1cGRhdGVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdHAucmF0aW8gPSAwO1xuXHRcdHAuX2ZpcnN0UFQgPSBwLl90YXJnZXRzID0gcC5fb3ZlcndyaXR0ZW5Qcm9wcyA9IHAuX3N0YXJ0QXQgPSBudWxsO1xuXHRcdHAuX25vdGlmeVBsdWdpbnNPZkVuYWJsZWQgPSBwLl9sYXp5ID0gZmFsc2U7XG5cblx0XHRUd2VlbkxpdGUudmVyc2lvbiA9IFwiMS4xNi4xXCI7XG5cdFx0VHdlZW5MaXRlLmRlZmF1bHRFYXNlID0gcC5fZWFzZSA9IG5ldyBFYXNlKG51bGwsIG51bGwsIDEsIDEpO1xuXHRcdFR3ZWVuTGl0ZS5kZWZhdWx0T3ZlcndyaXRlID0gXCJhdXRvXCI7XG5cdFx0VHdlZW5MaXRlLnRpY2tlciA9IF90aWNrZXI7XG5cdFx0VHdlZW5MaXRlLmF1dG9TbGVlcCA9IDEyMDtcblx0XHRUd2VlbkxpdGUubGFnU21vb3RoaW5nID0gZnVuY3Rpb24odGhyZXNob2xkLCBhZGp1c3RlZExhZykge1xuXHRcdFx0X3RpY2tlci5sYWdTbW9vdGhpbmcodGhyZXNob2xkLCBhZGp1c3RlZExhZyk7XG5cdFx0fTtcblxuXHRcdFR3ZWVuTGl0ZS5zZWxlY3RvciA9IHdpbmRvdy4kIHx8IHdpbmRvdy5qUXVlcnkgfHwgZnVuY3Rpb24oZSkge1xuXHRcdFx0dmFyIHNlbGVjdG9yID0gd2luZG93LiQgfHwgd2luZG93LmpRdWVyeTtcblx0XHRcdGlmIChzZWxlY3Rvcikge1xuXHRcdFx0XHRUd2VlbkxpdGUuc2VsZWN0b3IgPSBzZWxlY3Rvcjtcblx0XHRcdFx0cmV0dXJuIHNlbGVjdG9yKGUpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuICh0eXBlb2YoZG9jdW1lbnQpID09PSBcInVuZGVmaW5lZFwiKSA/IGUgOiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZSkgOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgoZS5jaGFyQXQoMCkgPT09IFwiI1wiKSA/IGUuc3Vic3RyKDEpIDogZSkpO1xuXHRcdH07XG5cblx0XHR2YXIgX2xhenlUd2VlbnMgPSBbXSxcblx0XHRcdF9sYXp5TG9va3VwID0ge30sXG5cdFx0XHRfaW50ZXJuYWxzID0gVHdlZW5MaXRlLl9pbnRlcm5hbHMgPSB7aXNBcnJheTpfaXNBcnJheSwgaXNTZWxlY3RvcjpfaXNTZWxlY3RvciwgbGF6eVR3ZWVuczpfbGF6eVR3ZWVuc30sIC8vZ2l2ZXMgdXMgYSB3YXkgdG8gZXhwb3NlIGNlcnRhaW4gcHJpdmF0ZSB2YWx1ZXMgdG8gb3RoZXIgR3JlZW5Tb2NrIGNsYXNzZXMgd2l0aG91dCBjb250YW1pbmF0aW5nIHRoYSBtYWluIFR3ZWVuTGl0ZSBvYmplY3QuXG5cdFx0XHRfcGx1Z2lucyA9IFR3ZWVuTGl0ZS5fcGx1Z2lucyA9IHt9LFxuXHRcdFx0X3R3ZWVuTG9va3VwID0gX2ludGVybmFscy50d2Vlbkxvb2t1cCA9IHt9LFxuXHRcdFx0X3R3ZWVuTG9va3VwTnVtID0gMCxcblx0XHRcdF9yZXNlcnZlZFByb3BzID0gX2ludGVybmFscy5yZXNlcnZlZFByb3BzID0ge2Vhc2U6MSwgZGVsYXk6MSwgb3ZlcndyaXRlOjEsIG9uQ29tcGxldGU6MSwgb25Db21wbGV0ZVBhcmFtczoxLCBvbkNvbXBsZXRlU2NvcGU6MSwgdXNlRnJhbWVzOjEsIHJ1bkJhY2t3YXJkczoxLCBzdGFydEF0OjEsIG9uVXBkYXRlOjEsIG9uVXBkYXRlUGFyYW1zOjEsIG9uVXBkYXRlU2NvcGU6MSwgb25TdGFydDoxLCBvblN0YXJ0UGFyYW1zOjEsIG9uU3RhcnRTY29wZToxLCBvblJldmVyc2VDb21wbGV0ZToxLCBvblJldmVyc2VDb21wbGV0ZVBhcmFtczoxLCBvblJldmVyc2VDb21wbGV0ZVNjb3BlOjEsIG9uUmVwZWF0OjEsIG9uUmVwZWF0UGFyYW1zOjEsIG9uUmVwZWF0U2NvcGU6MSwgZWFzZVBhcmFtczoxLCB5b3lvOjEsIGltbWVkaWF0ZVJlbmRlcjoxLCByZXBlYXQ6MSwgcmVwZWF0RGVsYXk6MSwgZGF0YToxLCBwYXVzZWQ6MSwgcmV2ZXJzZWQ6MSwgYXV0b0NTUzoxLCBsYXp5OjEsIG9uT3ZlcndyaXRlOjF9LFxuXHRcdFx0X292ZXJ3cml0ZUxvb2t1cCA9IHtub25lOjAsIGFsbDoxLCBhdXRvOjIsIGNvbmN1cnJlbnQ6MywgYWxsT25TdGFydDo0LCBwcmVleGlzdGluZzo1LCBcInRydWVcIjoxLCBcImZhbHNlXCI6MH0sXG5cdFx0XHRfcm9vdEZyYW1lc1RpbWVsaW5lID0gQW5pbWF0aW9uLl9yb290RnJhbWVzVGltZWxpbmUgPSBuZXcgU2ltcGxlVGltZWxpbmUoKSxcblx0XHRcdF9yb290VGltZWxpbmUgPSBBbmltYXRpb24uX3Jvb3RUaW1lbGluZSA9IG5ldyBTaW1wbGVUaW1lbGluZSgpLFxuXHRcdFx0X25leHRHQ0ZyYW1lID0gMzAsXG5cdFx0XHRfbGF6eVJlbmRlciA9IF9pbnRlcm5hbHMubGF6eVJlbmRlciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgaSA9IF9sYXp5VHdlZW5zLmxlbmd0aCxcblx0XHRcdFx0XHR0d2Vlbjtcblx0XHRcdFx0X2xhenlMb29rdXAgPSB7fTtcblx0XHRcdFx0d2hpbGUgKC0taSA+IC0xKSB7XG5cdFx0XHRcdFx0dHdlZW4gPSBfbGF6eVR3ZWVuc1tpXTtcblx0XHRcdFx0XHRpZiAodHdlZW4gJiYgdHdlZW4uX2xhenkgIT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0XHR0d2Vlbi5yZW5kZXIodHdlZW4uX2xhenlbMF0sIHR3ZWVuLl9sYXp5WzFdLCB0cnVlKTtcblx0XHRcdFx0XHRcdHR3ZWVuLl9sYXp5ID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdF9sYXp5VHdlZW5zLmxlbmd0aCA9IDA7XG5cdFx0XHR9O1xuXG5cdFx0X3Jvb3RUaW1lbGluZS5fc3RhcnRUaW1lID0gX3RpY2tlci50aW1lO1xuXHRcdF9yb290RnJhbWVzVGltZWxpbmUuX3N0YXJ0VGltZSA9IF90aWNrZXIuZnJhbWU7XG5cdFx0X3Jvb3RUaW1lbGluZS5fYWN0aXZlID0gX3Jvb3RGcmFtZXNUaW1lbGluZS5fYWN0aXZlID0gdHJ1ZTtcblx0XHRzZXRUaW1lb3V0KF9sYXp5UmVuZGVyLCAxKTsgLy9vbiBzb21lIG1vYmlsZSBkZXZpY2VzLCB0aGVyZSBpc24ndCBhIFwidGlja1wiIGJlZm9yZSBjb2RlIHJ1bnMgd2hpY2ggbWVhbnMgYW55IGxhenkgcmVuZGVycyB3b3VsZG4ndCBydW4gYmVmb3JlIHRoZSBuZXh0IG9mZmljaWFsIFwidGlja1wiLlxuXG5cdFx0QW5pbWF0aW9uLl91cGRhdGVSb290ID0gVHdlZW5MaXRlLnJlbmRlciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgaSwgYSwgcDtcblx0XHRcdFx0aWYgKF9sYXp5VHdlZW5zLmxlbmd0aCkgeyAvL2lmIGNvZGUgaXMgcnVuIG91dHNpZGUgb2YgdGhlIHJlcXVlc3RBbmltYXRpb25GcmFtZSBsb29wLCB0aGVyZSBtYXkgYmUgdHdlZW5zIHF1ZXVlZCBBRlRFUiB0aGUgZW5naW5lIHJlZnJlc2hlZCwgc28gd2UgbmVlZCB0byBlbnN1cmUgYW55IHBlbmRpbmcgcmVuZGVycyBvY2N1ciBiZWZvcmUgd2UgcmVmcmVzaCBhZ2Fpbi5cblx0XHRcdFx0XHRfbGF6eVJlbmRlcigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdF9yb290VGltZWxpbmUucmVuZGVyKChfdGlja2VyLnRpbWUgLSBfcm9vdFRpbWVsaW5lLl9zdGFydFRpbWUpICogX3Jvb3RUaW1lbGluZS5fdGltZVNjYWxlLCBmYWxzZSwgZmFsc2UpO1xuXHRcdFx0XHRfcm9vdEZyYW1lc1RpbWVsaW5lLnJlbmRlcigoX3RpY2tlci5mcmFtZSAtIF9yb290RnJhbWVzVGltZWxpbmUuX3N0YXJ0VGltZSkgKiBfcm9vdEZyYW1lc1RpbWVsaW5lLl90aW1lU2NhbGUsIGZhbHNlLCBmYWxzZSk7XG5cdFx0XHRcdGlmIChfbGF6eVR3ZWVucy5sZW5ndGgpIHtcblx0XHRcdFx0XHRfbGF6eVJlbmRlcigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChfdGlja2VyLmZyYW1lID49IF9uZXh0R0NGcmFtZSkgeyAvL2R1bXAgZ2FyYmFnZSBldmVyeSAxMjAgZnJhbWVzIG9yIHdoYXRldmVyIHRoZSB1c2VyIHNldHMgVHdlZW5MaXRlLmF1dG9TbGVlcCB0b1xuXHRcdFx0XHRcdF9uZXh0R0NGcmFtZSA9IF90aWNrZXIuZnJhbWUgKyAocGFyc2VJbnQoVHdlZW5MaXRlLmF1dG9TbGVlcCwgMTApIHx8IDEyMCk7XG5cdFx0XHRcdFx0Zm9yIChwIGluIF90d2Vlbkxvb2t1cCkge1xuXHRcdFx0XHRcdFx0YSA9IF90d2Vlbkxvb2t1cFtwXS50d2VlbnM7XG5cdFx0XHRcdFx0XHRpID0gYS5sZW5ndGg7XG5cdFx0XHRcdFx0XHR3aGlsZSAoLS1pID4gLTEpIHtcblx0XHRcdFx0XHRcdFx0aWYgKGFbaV0uX2djKSB7XG5cdFx0XHRcdFx0XHRcdFx0YS5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmIChhLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdFx0XHRkZWxldGUgX3R3ZWVuTG9va3VwW3BdO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvL2lmIHRoZXJlIGFyZSBubyBtb3JlIHR3ZWVucyBpbiB0aGUgcm9vdCB0aW1lbGluZXMsIG9yIGlmIHRoZXkncmUgYWxsIHBhdXNlZCwgbWFrZSB0aGUgX3RpbWVyIHNsZWVwIHRvIHJlZHVjZSBsb2FkIG9uIHRoZSBDUFUgc2xpZ2h0bHlcblx0XHRcdFx0XHRwID0gX3Jvb3RUaW1lbGluZS5fZmlyc3Q7XG5cdFx0XHRcdFx0aWYgKCFwIHx8IHAuX3BhdXNlZCkgaWYgKFR3ZWVuTGl0ZS5hdXRvU2xlZXAgJiYgIV9yb290RnJhbWVzVGltZWxpbmUuX2ZpcnN0ICYmIF90aWNrZXIuX2xpc3RlbmVycy50aWNrLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHRcdFx0d2hpbGUgKHAgJiYgcC5fcGF1c2VkKSB7XG5cdFx0XHRcdFx0XHRcdHAgPSBwLl9uZXh0O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKCFwKSB7XG5cdFx0XHRcdFx0XHRcdF90aWNrZXIuc2xlZXAoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRfdGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJ0aWNrXCIsIEFuaW1hdGlvbi5fdXBkYXRlUm9vdCk7XG5cblx0XHR2YXIgX3JlZ2lzdGVyID0gZnVuY3Rpb24odGFyZ2V0LCB0d2Vlbiwgc2NydWIpIHtcblx0XHRcdFx0dmFyIGlkID0gdGFyZ2V0Ll9nc1R3ZWVuSUQsIGEsIGk7XG5cdFx0XHRcdGlmICghX3R3ZWVuTG9va3VwW2lkIHx8ICh0YXJnZXQuX2dzVHdlZW5JRCA9IGlkID0gXCJ0XCIgKyAoX3R3ZWVuTG9va3VwTnVtKyspKV0pIHtcblx0XHRcdFx0XHRfdHdlZW5Mb29rdXBbaWRdID0ge3RhcmdldDp0YXJnZXQsIHR3ZWVuczpbXX07XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHR3ZWVuKSB7XG5cdFx0XHRcdFx0YSA9IF90d2Vlbkxvb2t1cFtpZF0udHdlZW5zO1xuXHRcdFx0XHRcdGFbKGkgPSBhLmxlbmd0aCldID0gdHdlZW47XG5cdFx0XHRcdFx0aWYgKHNjcnViKSB7XG5cdFx0XHRcdFx0XHR3aGlsZSAoLS1pID4gLTEpIHtcblx0XHRcdFx0XHRcdFx0aWYgKGFbaV0gPT09IHR3ZWVuKSB7XG5cdFx0XHRcdFx0XHRcdFx0YS5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIF90d2Vlbkxvb2t1cFtpZF0udHdlZW5zO1xuXHRcdFx0fSxcblxuXHRcdFx0X29uT3ZlcndyaXRlID0gZnVuY3Rpb24ob3ZlcndyaXR0ZW5Ud2Vlbiwgb3ZlcndyaXRpbmdUd2VlbiwgdGFyZ2V0LCBraWxsZWRQcm9wcykge1xuXHRcdFx0XHR2YXIgZnVuYyA9IG92ZXJ3cml0dGVuVHdlZW4udmFycy5vbk92ZXJ3cml0ZSwgcjEsIHIyO1xuXHRcdFx0XHRpZiAoZnVuYykge1xuXHRcdFx0XHRcdHIxID0gZnVuYyhvdmVyd3JpdHRlblR3ZWVuLCBvdmVyd3JpdGluZ1R3ZWVuLCB0YXJnZXQsIGtpbGxlZFByb3BzKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRmdW5jID0gVHdlZW5MaXRlLm9uT3ZlcndyaXRlO1xuXHRcdFx0XHRpZiAoZnVuYykge1xuXHRcdFx0XHRcdHIyID0gZnVuYyhvdmVyd3JpdHRlblR3ZWVuLCBvdmVyd3JpdGluZ1R3ZWVuLCB0YXJnZXQsIGtpbGxlZFByb3BzKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gKHIxICE9PSBmYWxzZSAmJiByMiAhPT0gZmFsc2UpO1xuXHRcdFx0fSxcblx0XHRcdF9hcHBseU92ZXJ3cml0ZSA9IGZ1bmN0aW9uKHRhcmdldCwgdHdlZW4sIHByb3BzLCBtb2RlLCBzaWJsaW5ncykge1xuXHRcdFx0XHR2YXIgaSwgY2hhbmdlZCwgY3VyVHdlZW4sIGw7XG5cdFx0XHRcdGlmIChtb2RlID09PSAxIHx8IG1vZGUgPj0gNCkge1xuXHRcdFx0XHRcdGwgPSBzaWJsaW5ncy5sZW5ndGg7XG5cdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGw7IGkrKykge1xuXHRcdFx0XHRcdFx0aWYgKChjdXJUd2VlbiA9IHNpYmxpbmdzW2ldKSAhPT0gdHdlZW4pIHtcblx0XHRcdFx0XHRcdFx0aWYgKCFjdXJUd2Vlbi5fZ2MpIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoX29uT3ZlcndyaXRlKGN1clR3ZWVuLCB0d2VlbikgJiYgY3VyVHdlZW4uX2VuYWJsZWQoZmFsc2UsIGZhbHNlKSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y2hhbmdlZCA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKG1vZGUgPT09IDUpIHtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBjaGFuZ2VkO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vTk9URTogQWRkIDAuMDAwMDAwMDAwMSB0byBvdmVyY29tZSBmbG9hdGluZyBwb2ludCBlcnJvcnMgdGhhdCBjYW4gY2F1c2UgdGhlIHN0YXJ0VGltZSB0byBiZSBWRVJZIHNsaWdodGx5IG9mZiAod2hlbiBhIHR3ZWVuJ3MgdGltZSgpIGlzIHNldCBmb3IgZXhhbXBsZSlcblx0XHRcdFx0dmFyIHN0YXJ0VGltZSA9IHR3ZWVuLl9zdGFydFRpbWUgKyBfdGlueU51bSxcblx0XHRcdFx0XHRvdmVybGFwcyA9IFtdLFxuXHRcdFx0XHRcdG9Db3VudCA9IDAsXG5cdFx0XHRcdFx0emVyb0R1ciA9ICh0d2Vlbi5fZHVyYXRpb24gPT09IDApLFxuXHRcdFx0XHRcdGdsb2JhbFN0YXJ0O1xuXHRcdFx0XHRpID0gc2libGluZ3MubGVuZ3RoO1xuXHRcdFx0XHR3aGlsZSAoLS1pID4gLTEpIHtcblx0XHRcdFx0XHRpZiAoKGN1clR3ZWVuID0gc2libGluZ3NbaV0pID09PSB0d2VlbiB8fCBjdXJUd2Vlbi5fZ2MgfHwgY3VyVHdlZW4uX3BhdXNlZCkge1xuXHRcdFx0XHRcdFx0Ly9pZ25vcmVcblx0XHRcdFx0XHR9IGVsc2UgaWYgKGN1clR3ZWVuLl90aW1lbGluZSAhPT0gdHdlZW4uX3RpbWVsaW5lKSB7XG5cdFx0XHRcdFx0XHRnbG9iYWxTdGFydCA9IGdsb2JhbFN0YXJ0IHx8IF9jaGVja092ZXJsYXAodHdlZW4sIDAsIHplcm9EdXIpO1xuXHRcdFx0XHRcdFx0aWYgKF9jaGVja092ZXJsYXAoY3VyVHdlZW4sIGdsb2JhbFN0YXJ0LCB6ZXJvRHVyKSA9PT0gMCkge1xuXHRcdFx0XHRcdFx0XHRvdmVybGFwc1tvQ291bnQrK10gPSBjdXJUd2Vlbjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2UgaWYgKGN1clR3ZWVuLl9zdGFydFRpbWUgPD0gc3RhcnRUaW1lKSBpZiAoY3VyVHdlZW4uX3N0YXJ0VGltZSArIGN1clR3ZWVuLnRvdGFsRHVyYXRpb24oKSAvIGN1clR3ZWVuLl90aW1lU2NhbGUgPiBzdGFydFRpbWUpIGlmICghKCh6ZXJvRHVyIHx8ICFjdXJUd2Vlbi5faW5pdHRlZCkgJiYgc3RhcnRUaW1lIC0gY3VyVHdlZW4uX3N0YXJ0VGltZSA8PSAwLjAwMDAwMDAwMDIpKSB7XG5cdFx0XHRcdFx0XHRvdmVybGFwc1tvQ291bnQrK10gPSBjdXJUd2Vlbjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpID0gb0NvdW50O1xuXHRcdFx0XHR3aGlsZSAoLS1pID4gLTEpIHtcblx0XHRcdFx0XHRjdXJUd2VlbiA9IG92ZXJsYXBzW2ldO1xuXHRcdFx0XHRcdGlmIChtb2RlID09PSAyKSBpZiAoY3VyVHdlZW4uX2tpbGwocHJvcHMsIHRhcmdldCwgdHdlZW4pKSB7XG5cdFx0XHRcdFx0XHRjaGFuZ2VkID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKG1vZGUgIT09IDIgfHwgKCFjdXJUd2Vlbi5fZmlyc3RQVCAmJiBjdXJUd2Vlbi5faW5pdHRlZCkpIHtcblx0XHRcdFx0XHRcdGlmIChtb2RlICE9PSAyICYmICFfb25PdmVyd3JpdGUoY3VyVHdlZW4sIHR3ZWVuKSkge1xuXHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmIChjdXJUd2Vlbi5fZW5hYmxlZChmYWxzZSwgZmFsc2UpKSB7IC8vaWYgYWxsIHByb3BlcnR5IHR3ZWVucyBoYXZlIGJlZW4gb3ZlcndyaXR0ZW4sIGtpbGwgdGhlIHR3ZWVuLlxuXHRcdFx0XHRcdFx0XHRjaGFuZ2VkID0gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGNoYW5nZWQ7XG5cdFx0XHR9LFxuXG5cdFx0XHRfY2hlY2tPdmVybGFwID0gZnVuY3Rpb24odHdlZW4sIHJlZmVyZW5jZSwgemVyb0R1cikge1xuXHRcdFx0XHR2YXIgdGwgPSB0d2Vlbi5fdGltZWxpbmUsXG5cdFx0XHRcdFx0dHMgPSB0bC5fdGltZVNjYWxlLFxuXHRcdFx0XHRcdHQgPSB0d2Vlbi5fc3RhcnRUaW1lO1xuXHRcdFx0XHR3aGlsZSAodGwuX3RpbWVsaW5lKSB7XG5cdFx0XHRcdFx0dCArPSB0bC5fc3RhcnRUaW1lO1xuXHRcdFx0XHRcdHRzICo9IHRsLl90aW1lU2NhbGU7XG5cdFx0XHRcdFx0aWYgKHRsLl9wYXVzZWQpIHtcblx0XHRcdFx0XHRcdHJldHVybiAtMTAwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0bCA9IHRsLl90aW1lbGluZTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0IC89IHRzO1xuXHRcdFx0XHRyZXR1cm4gKHQgPiByZWZlcmVuY2UpID8gdCAtIHJlZmVyZW5jZSA6ICgoemVyb0R1ciAmJiB0ID09PSByZWZlcmVuY2UpIHx8ICghdHdlZW4uX2luaXR0ZWQgJiYgdCAtIHJlZmVyZW5jZSA8IDIgKiBfdGlueU51bSkpID8gX3RpbnlOdW0gOiAoKHQgKz0gdHdlZW4udG90YWxEdXJhdGlvbigpIC8gdHdlZW4uX3RpbWVTY2FsZSAvIHRzKSA+IHJlZmVyZW5jZSArIF90aW55TnVtKSA/IDAgOiB0IC0gcmVmZXJlbmNlIC0gX3RpbnlOdW07XG5cdFx0XHR9O1xuXG5cbi8vLS0tLSBUd2VlbkxpdGUgaW5zdGFuY2UgbWV0aG9kcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0cC5faW5pdCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHYgPSB0aGlzLnZhcnMsXG5cdFx0XHRcdG9wID0gdGhpcy5fb3ZlcndyaXR0ZW5Qcm9wcyxcblx0XHRcdFx0ZHVyID0gdGhpcy5fZHVyYXRpb24sXG5cdFx0XHRcdGltbWVkaWF0ZSA9ICEhdi5pbW1lZGlhdGVSZW5kZXIsXG5cdFx0XHRcdGVhc2UgPSB2LmVhc2UsXG5cdFx0XHRcdGksIGluaXRQbHVnaW5zLCBwdCwgcCwgc3RhcnRWYXJzO1xuXHRcdFx0aWYgKHYuc3RhcnRBdCkge1xuXHRcdFx0XHRpZiAodGhpcy5fc3RhcnRBdCkge1xuXHRcdFx0XHRcdHRoaXMuX3N0YXJ0QXQucmVuZGVyKC0xLCB0cnVlKTsgLy9pZiB3ZSd2ZSBydW4gYSBzdGFydEF0IHByZXZpb3VzbHkgKHdoZW4gdGhlIHR3ZWVuIGluc3RhbnRpYXRlZCksIHdlIHNob3VsZCByZXZlcnQgaXQgc28gdGhhdCB0aGUgdmFsdWVzIHJlLWluc3RhbnRpYXRlIGNvcnJlY3RseSBwYXJ0aWN1bGFybHkgZm9yIHJlbGF0aXZlIHR3ZWVucy4gV2l0aG91dCB0aGlzLCBhIFR3ZWVuTGl0ZS5mcm9tVG8ob2JqLCAxLCB7eDpcIis9MTAwXCJ9LCB7eDpcIi09MTAwXCJ9KSwgZm9yIGV4YW1wbGUsIHdvdWxkIGFjdHVhbGx5IGp1bXAgdG8gKz0yMDAgYmVjYXVzZSB0aGUgc3RhcnRBdCB3b3VsZCBydW4gdHdpY2UsIGRvdWJsaW5nIHRoZSByZWxhdGl2ZSBjaGFuZ2UuXG5cdFx0XHRcdFx0dGhpcy5fc3RhcnRBdC5raWxsKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3RhcnRWYXJzID0ge307XG5cdFx0XHRcdGZvciAocCBpbiB2LnN0YXJ0QXQpIHsgLy9jb3B5IHRoZSBwcm9wZXJ0aWVzL3ZhbHVlcyBpbnRvIGEgbmV3IG9iamVjdCB0byBhdm9pZCBjb2xsaXNpb25zLCBsaWtlIHZhciB0byA9IHt4OjB9LCBmcm9tID0ge3g6NTAwfTsgdGltZWxpbmUuZnJvbVRvKGUsIDEsIGZyb20sIHRvKS5mcm9tVG8oZSwgMSwgdG8sIGZyb20pO1xuXHRcdFx0XHRcdHN0YXJ0VmFyc1twXSA9IHYuc3RhcnRBdFtwXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzdGFydFZhcnMub3ZlcndyaXRlID0gZmFsc2U7XG5cdFx0XHRcdHN0YXJ0VmFycy5pbW1lZGlhdGVSZW5kZXIgPSB0cnVlO1xuXHRcdFx0XHRzdGFydFZhcnMubGF6eSA9IChpbW1lZGlhdGUgJiYgdi5sYXp5ICE9PSBmYWxzZSk7XG5cdFx0XHRcdHN0YXJ0VmFycy5zdGFydEF0ID0gc3RhcnRWYXJzLmRlbGF5ID0gbnVsbDsgLy9ubyBuZXN0aW5nIG9mIHN0YXJ0QXQgb2JqZWN0cyBhbGxvd2VkIChvdGhlcndpc2UgaXQgY291bGQgY2F1c2UgYW4gaW5maW5pdGUgbG9vcCkuXG5cdFx0XHRcdHRoaXMuX3N0YXJ0QXQgPSBUd2VlbkxpdGUudG8odGhpcy50YXJnZXQsIDAsIHN0YXJ0VmFycyk7XG5cdFx0XHRcdGlmIChpbW1lZGlhdGUpIHtcblx0XHRcdFx0XHRpZiAodGhpcy5fdGltZSA+IDApIHtcblx0XHRcdFx0XHRcdHRoaXMuX3N0YXJ0QXQgPSBudWxsOyAvL3R3ZWVucyB0aGF0IHJlbmRlciBpbW1lZGlhdGVseSAobGlrZSBtb3N0IGZyb20oKSBhbmQgZnJvbVRvKCkgdHdlZW5zKSBzaG91bGRuJ3QgcmV2ZXJ0IHdoZW4gdGhlaXIgcGFyZW50IHRpbWVsaW5lJ3MgcGxheWhlYWQgZ29lcyBiYWNrd2FyZCBwYXN0IHRoZSBzdGFydFRpbWUgYmVjYXVzZSB0aGUgaW5pdGlhbCByZW5kZXIgY291bGQgaGF2ZSBoYXBwZW5lZCBhbnl0aW1lIGFuZCBpdCBzaG91bGRuJ3QgYmUgZGlyZWN0bHkgY29ycmVsYXRlZCB0byB0aGlzIHR3ZWVuJ3Mgc3RhcnRUaW1lLiBJbWFnaW5lIHNldHRpbmcgdXAgYSBjb21wbGV4IGFuaW1hdGlvbiB3aGVyZSB0aGUgYmVnaW5uaW5nIHN0YXRlcyBvZiB2YXJpb3VzIG9iamVjdHMgYXJlIHJlbmRlcmVkIGltbWVkaWF0ZWx5IGJ1dCB0aGUgdHdlZW4gZG9lc24ndCBoYXBwZW4gZm9yIHF1aXRlIHNvbWUgdGltZSAtIGlmIHdlIHJldmVydCB0byB0aGUgc3RhcnRpbmcgdmFsdWVzIGFzIHNvb24gYXMgdGhlIHBsYXloZWFkIGdvZXMgYmFja3dhcmQgcGFzdCB0aGUgdHdlZW4ncyBzdGFydFRpbWUsIGl0IHdpbGwgdGhyb3cgdGhpbmdzIG9mZiB2aXN1YWxseS4gUmV2ZXJzaW9uIHNob3VsZCBvbmx5IGhhcHBlbiBpbiBUaW1lbGluZUxpdGUvTWF4IGluc3RhbmNlcyB3aGVyZSBpbW1lZGlhdGVSZW5kZXIgd2FzIGZhbHNlICh3aGljaCBpcyB0aGUgZGVmYXVsdCBpbiB0aGUgY29udmVuaWVuY2UgbWV0aG9kcyBsaWtlIGZyb20oKSkuXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChkdXIgIT09IDApIHtcblx0XHRcdFx0XHRcdHJldHVybjsgLy93ZSBza2lwIGluaXRpYWxpemF0aW9uIGhlcmUgc28gdGhhdCBvdmVyd3JpdGluZyBkb2Vzbid0IG9jY3VyIHVudGlsIHRoZSB0d2VlbiBhY3R1YWxseSBiZWdpbnMuIE90aGVyd2lzZSwgaWYgeW91IGNyZWF0ZSBzZXZlcmFsIGltbWVkaWF0ZVJlbmRlcjp0cnVlIHR3ZWVucyBvZiB0aGUgc2FtZSB0YXJnZXQvcHJvcGVydGllcyB0byBkcm9wIGludG8gYSBUaW1lbGluZUxpdGUgb3IgVGltZWxpbmVNYXgsIHRoZSBsYXN0IG9uZSBjcmVhdGVkIHdvdWxkIG92ZXJ3cml0ZSB0aGUgZmlyc3Qgb25lcyBiZWNhdXNlIHRoZXkgZGlkbid0IGdldCBwbGFjZWQgaW50byB0aGUgdGltZWxpbmUgeWV0IGJlZm9yZSB0aGUgZmlyc3QgcmVuZGVyIG9jY3VycyBhbmQga2lja3MgaW4gb3ZlcndyaXRpbmcuXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKHYucnVuQmFja3dhcmRzICYmIGR1ciAhPT0gMCkge1xuXHRcdFx0XHQvL2Zyb20oKSB0d2VlbnMgbXVzdCBiZSBoYW5kbGVkIHVuaXF1ZWx5OiB0aGVpciBiZWdpbm5pbmcgdmFsdWVzIG11c3QgYmUgcmVuZGVyZWQgYnV0IHdlIGRvbid0IHdhbnQgb3ZlcndyaXRpbmcgdG8gb2NjdXIgeWV0ICh3aGVuIHRpbWUgaXMgc3RpbGwgMCkuIFdhaXQgdW50aWwgdGhlIHR3ZWVuIGFjdHVhbGx5IGJlZ2lucyBiZWZvcmUgZG9pbmcgYWxsIHRoZSByb3V0aW5lcyBsaWtlIG92ZXJ3cml0aW5nLiBBdCB0aGF0IHRpbWUsIHdlIHNob3VsZCByZW5kZXIgYXQgdGhlIEVORCBvZiB0aGUgdHdlZW4gdG8gZW5zdXJlIHRoYXQgdGhpbmdzIGluaXRpYWxpemUgY29ycmVjdGx5IChyZW1lbWJlciwgZnJvbSgpIHR3ZWVucyBnbyBiYWNrd2FyZHMpXG5cdFx0XHRcdGlmICh0aGlzLl9zdGFydEF0KSB7XG5cdFx0XHRcdFx0dGhpcy5fc3RhcnRBdC5yZW5kZXIoLTEsIHRydWUpO1xuXHRcdFx0XHRcdHRoaXMuX3N0YXJ0QXQua2lsbCgpO1xuXHRcdFx0XHRcdHRoaXMuX3N0YXJ0QXQgPSBudWxsO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGlmICh0aGlzLl90aW1lICE9PSAwKSB7IC8vaW4gcmFyZSBjYXNlcyAobGlrZSBpZiBhIGZyb20oKSB0d2VlbiBydW5zIGFuZCB0aGVuIGlzIGludmFsaWRhdGUoKS1lZCksIGltbWVkaWF0ZVJlbmRlciBjb3VsZCBiZSB0cnVlIGJ1dCB0aGUgaW5pdGlhbCBmb3JjZWQtcmVuZGVyIGdldHMgc2tpcHBlZCwgc28gdGhlcmUncyBubyBuZWVkIHRvIGZvcmNlIHRoZSByZW5kZXIgaW4gdGhpcyBjb250ZXh0IHdoZW4gdGhlIF90aW1lIGlzIGdyZWF0ZXIgdGhhbiAwXG5cdFx0XHRcdFx0XHRpbW1lZGlhdGUgPSBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cHQgPSB7fTtcblx0XHRcdFx0XHRmb3IgKHAgaW4gdikgeyAvL2NvcHkgcHJvcHMgaW50byBhIG5ldyBvYmplY3QgYW5kIHNraXAgYW55IHJlc2VydmVkIHByb3BzLCBvdGhlcndpc2Ugb25Db21wbGV0ZSBvciBvblVwZGF0ZSBvciBvblN0YXJ0IGNvdWxkIGZpcmUuIFdlIHNob3VsZCwgaG93ZXZlciwgcGVybWl0IGF1dG9DU1MgdG8gZ28gdGhyb3VnaC5cblx0XHRcdFx0XHRcdGlmICghX3Jlc2VydmVkUHJvcHNbcF0gfHwgcCA9PT0gXCJhdXRvQ1NTXCIpIHtcblx0XHRcdFx0XHRcdFx0cHRbcF0gPSB2W3BdO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRwdC5vdmVyd3JpdGUgPSAwO1xuXHRcdFx0XHRcdHB0LmRhdGEgPSBcImlzRnJvbVN0YXJ0XCI7IC8vd2UgdGFnIHRoZSB0d2VlbiB3aXRoIGFzIFwiaXNGcm9tU3RhcnRcIiBzbyB0aGF0IGlmIFtpbnNpZGUgYSBwbHVnaW5dIHdlIG5lZWQgdG8gb25seSBkbyBzb21ldGhpbmcgYXQgdGhlIHZlcnkgRU5EIG9mIGEgdHdlZW4sIHdlIGhhdmUgYSB3YXkgb2YgaWRlbnRpZnlpbmcgdGhpcyB0d2VlbiBhcyBtZXJlbHkgdGhlIG9uZSB0aGF0J3Mgc2V0dGluZyB0aGUgYmVnaW5uaW5nIHZhbHVlcyBmb3IgYSBcImZyb20oKVwiIHR3ZWVuLiBGb3IgZXhhbXBsZSwgY2xlYXJQcm9wcyBpbiBDU1NQbHVnaW4gc2hvdWxkIG9ubHkgZ2V0IGFwcGxpZWQgYXQgdGhlIHZlcnkgRU5EIG9mIGEgdHdlZW4gYW5kIHdpdGhvdXQgdGhpcyB0YWcsIGZyb20oLi4ue2hlaWdodDoxMDAsIGNsZWFyUHJvcHM6XCJoZWlnaHRcIiwgZGVsYXk6MX0pIHdvdWxkIHdpcGUgdGhlIGhlaWdodCBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSB0d2VlbiBhbmQgYWZ0ZXIgMSBzZWNvbmQsIGl0J2Qga2ljayBiYWNrIGluLlxuXHRcdFx0XHRcdHB0LmxhenkgPSAoaW1tZWRpYXRlICYmIHYubGF6eSAhPT0gZmFsc2UpO1xuXHRcdFx0XHRcdHB0LmltbWVkaWF0ZVJlbmRlciA9IGltbWVkaWF0ZTsgLy96ZXJvLWR1cmF0aW9uIHR3ZWVucyByZW5kZXIgaW1tZWRpYXRlbHkgYnkgZGVmYXVsdCwgYnV0IGlmIHdlJ3JlIG5vdCBzcGVjaWZpY2FsbHkgaW5zdHJ1Y3RlZCB0byByZW5kZXIgdGhpcyB0d2VlbiBpbW1lZGlhdGVseSwgd2Ugc2hvdWxkIHNraXAgdGhpcyBhbmQgbWVyZWx5IF9pbml0KCkgdG8gcmVjb3JkIHRoZSBzdGFydGluZyB2YWx1ZXMgKHJlbmRlcmluZyB0aGVtIGltbWVkaWF0ZWx5IHdvdWxkIHB1c2ggdGhlbSB0byBjb21wbGV0aW9uIHdoaWNoIGlzIHdhc3RlZnVsIGluIHRoYXQgY2FzZSAtIHdlJ2QgaGF2ZSB0byByZW5kZXIoLTEpIGltbWVkaWF0ZWx5IGFmdGVyKVxuXHRcdFx0XHRcdHRoaXMuX3N0YXJ0QXQgPSBUd2VlbkxpdGUudG8odGhpcy50YXJnZXQsIDAsIHB0KTtcblx0XHRcdFx0XHRpZiAoIWltbWVkaWF0ZSkge1xuXHRcdFx0XHRcdFx0dGhpcy5fc3RhcnRBdC5faW5pdCgpOyAvL2Vuc3VyZXMgdGhhdCB0aGUgaW5pdGlhbCB2YWx1ZXMgYXJlIHJlY29yZGVkXG5cdFx0XHRcdFx0XHR0aGlzLl9zdGFydEF0Ll9lbmFibGVkKGZhbHNlKTsgLy9ubyBuZWVkIHRvIGhhdmUgdGhlIHR3ZWVuIHJlbmRlciBvbiB0aGUgbmV4dCBjeWNsZS4gRGlzYWJsZSBpdCBiZWNhdXNlIHdlJ2xsIGFsd2F5cyBtYW51YWxseSBjb250cm9sIHRoZSByZW5kZXJzIG9mIHRoZSBfc3RhcnRBdCB0d2Vlbi5cblx0XHRcdFx0XHRcdGlmICh0aGlzLnZhcnMuaW1tZWRpYXRlUmVuZGVyKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuX3N0YXJ0QXQgPSBudWxsO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5fdGltZSA9PT0gMCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5fZWFzZSA9IGVhc2UgPSAoIWVhc2UpID8gVHdlZW5MaXRlLmRlZmF1bHRFYXNlIDogKGVhc2UgaW5zdGFuY2VvZiBFYXNlKSA/IGVhc2UgOiAodHlwZW9mKGVhc2UpID09PSBcImZ1bmN0aW9uXCIpID8gbmV3IEVhc2UoZWFzZSwgdi5lYXNlUGFyYW1zKSA6IF9lYXNlTWFwW2Vhc2VdIHx8IFR3ZWVuTGl0ZS5kZWZhdWx0RWFzZTtcblx0XHRcdGlmICh2LmVhc2VQYXJhbXMgaW5zdGFuY2VvZiBBcnJheSAmJiBlYXNlLmNvbmZpZykge1xuXHRcdFx0XHR0aGlzLl9lYXNlID0gZWFzZS5jb25maWcuYXBwbHkoZWFzZSwgdi5lYXNlUGFyYW1zKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuX2Vhc2VUeXBlID0gdGhpcy5fZWFzZS5fdHlwZTtcblx0XHRcdHRoaXMuX2Vhc2VQb3dlciA9IHRoaXMuX2Vhc2UuX3Bvd2VyO1xuXHRcdFx0dGhpcy5fZmlyc3RQVCA9IG51bGw7XG5cblx0XHRcdGlmICh0aGlzLl90YXJnZXRzKSB7XG5cdFx0XHRcdGkgPSB0aGlzLl90YXJnZXRzLmxlbmd0aDtcblx0XHRcdFx0d2hpbGUgKC0taSA+IC0xKSB7XG5cdFx0XHRcdFx0aWYgKCB0aGlzLl9pbml0UHJvcHMoIHRoaXMuX3RhcmdldHNbaV0sICh0aGlzLl9wcm9wTG9va3VwW2ldID0ge30pLCB0aGlzLl9zaWJsaW5nc1tpXSwgKG9wID8gb3BbaV0gOiBudWxsKSkgKSB7XG5cdFx0XHRcdFx0XHRpbml0UGx1Z2lucyA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpbml0UGx1Z2lucyA9IHRoaXMuX2luaXRQcm9wcyh0aGlzLnRhcmdldCwgdGhpcy5fcHJvcExvb2t1cCwgdGhpcy5fc2libGluZ3MsIG9wKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGluaXRQbHVnaW5zKSB7XG5cdFx0XHRcdFR3ZWVuTGl0ZS5fb25QbHVnaW5FdmVudChcIl9vbkluaXRBbGxQcm9wc1wiLCB0aGlzKTsgLy9yZW9yZGVycyB0aGUgYXJyYXkgaW4gb3JkZXIgb2YgcHJpb3JpdHkuIFVzZXMgYSBzdGF0aWMgVHdlZW5QbHVnaW4gbWV0aG9kIGluIG9yZGVyIHRvIG1pbmltaXplIGZpbGUgc2l6ZSBpbiBUd2VlbkxpdGVcblx0XHRcdH1cblx0XHRcdGlmIChvcCkgaWYgKCF0aGlzLl9maXJzdFBUKSBpZiAodHlwZW9mKHRoaXMudGFyZ2V0KSAhPT0gXCJmdW5jdGlvblwiKSB7IC8vaWYgYWxsIHR3ZWVuaW5nIHByb3BlcnRpZXMgaGF2ZSBiZWVuIG92ZXJ3cml0dGVuLCBraWxsIHRoZSB0d2Vlbi4gSWYgdGhlIHRhcmdldCBpcyBhIGZ1bmN0aW9uLCBpdCdzIHByb2JhYmx5IGEgZGVsYXllZENhbGwgc28gbGV0IGl0IGxpdmUuXG5cdFx0XHRcdHRoaXMuX2VuYWJsZWQoZmFsc2UsIGZhbHNlKTtcblx0XHRcdH1cblx0XHRcdGlmICh2LnJ1bkJhY2t3YXJkcykge1xuXHRcdFx0XHRwdCA9IHRoaXMuX2ZpcnN0UFQ7XG5cdFx0XHRcdHdoaWxlIChwdCkge1xuXHRcdFx0XHRcdHB0LnMgKz0gcHQuYztcblx0XHRcdFx0XHRwdC5jID0gLXB0LmM7XG5cdFx0XHRcdFx0cHQgPSBwdC5fbmV4dDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5fb25VcGRhdGUgPSB2Lm9uVXBkYXRlO1xuXHRcdFx0dGhpcy5faW5pdHRlZCA9IHRydWU7XG5cdFx0fTtcblxuXHRcdHAuX2luaXRQcm9wcyA9IGZ1bmN0aW9uKHRhcmdldCwgcHJvcExvb2t1cCwgc2libGluZ3MsIG92ZXJ3cml0dGVuUHJvcHMpIHtcblx0XHRcdHZhciBwLCBpLCBpbml0UGx1Z2lucywgcGx1Z2luLCBwdCwgdjtcblx0XHRcdGlmICh0YXJnZXQgPT0gbnVsbCkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChfbGF6eUxvb2t1cFt0YXJnZXQuX2dzVHdlZW5JRF0pIHtcblx0XHRcdFx0X2xhenlSZW5kZXIoKTsgLy9pZiBvdGhlciB0d2VlbnMgb2YgdGhlIHNhbWUgdGFyZ2V0IGhhdmUgcmVjZW50bHkgaW5pdHRlZCBidXQgaGF2ZW4ndCByZW5kZXJlZCB5ZXQsIHdlJ3ZlIGdvdCB0byBmb3JjZSB0aGUgcmVuZGVyIHNvIHRoYXQgdGhlIHN0YXJ0aW5nIHZhbHVlcyBhcmUgY29ycmVjdCAoaW1hZ2luZSBwb3B1bGF0aW5nIGEgdGltZWxpbmUgd2l0aCBhIGJ1bmNoIG9mIHNlcXVlbnRpYWwgdHdlZW5zIGFuZCB0aGVuIGp1bXBpbmcgdG8gdGhlIGVuZClcblx0XHRcdH1cblxuXHRcdFx0aWYgKCF0aGlzLnZhcnMuY3NzKSBpZiAodGFyZ2V0LnN0eWxlKSBpZiAodGFyZ2V0ICE9PSB3aW5kb3cgJiYgdGFyZ2V0Lm5vZGVUeXBlKSBpZiAoX3BsdWdpbnMuY3NzKSBpZiAodGhpcy52YXJzLmF1dG9DU1MgIT09IGZhbHNlKSB7IC8vaXQncyBzbyBjb21tb24gdG8gdXNlIFR3ZWVuTGl0ZS9NYXggdG8gYW5pbWF0ZSB0aGUgY3NzIG9mIERPTSBlbGVtZW50cywgd2UgYXNzdW1lIHRoYXQgaWYgdGhlIHRhcmdldCBpcyBhIERPTSBlbGVtZW50LCB0aGF0J3Mgd2hhdCBpcyBpbnRlbmRlZCAoYSBjb252ZW5pZW5jZSBzbyB0aGF0IHVzZXJzIGRvbid0IGhhdmUgdG8gd3JhcCB0aGluZ3MgaW4gY3NzOnt9LCBhbHRob3VnaCB3ZSBzdGlsbCByZWNvbW1lbmQgaXQgZm9yIGEgc2xpZ2h0IHBlcmZvcm1hbmNlIGJvb3N0IGFuZCBiZXR0ZXIgc3BlY2lmaWNpdHkpLiBOb3RlOiB3ZSBjYW5ub3QgY2hlY2sgXCJub2RlVHlwZVwiIG9uIHRoZSB3aW5kb3cgaW5zaWRlIGFuIGlmcmFtZS5cblx0XHRcdFx0X2F1dG9DU1ModGhpcy52YXJzLCB0YXJnZXQpO1xuXHRcdFx0fVxuXHRcdFx0Zm9yIChwIGluIHRoaXMudmFycykge1xuXHRcdFx0XHR2ID0gdGhpcy52YXJzW3BdO1xuXHRcdFx0XHRpZiAoX3Jlc2VydmVkUHJvcHNbcF0pIHtcblx0XHRcdFx0XHRpZiAodikgaWYgKCh2IGluc3RhbmNlb2YgQXJyYXkpIHx8ICh2LnB1c2ggJiYgX2lzQXJyYXkodikpKSBpZiAodi5qb2luKFwiXCIpLmluZGV4T2YoXCJ7c2VsZn1cIikgIT09IC0xKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnZhcnNbcF0gPSB2ID0gdGhpcy5fc3dhcFNlbGZJblBhcmFtcyh2LCB0aGlzKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fSBlbHNlIGlmIChfcGx1Z2luc1twXSAmJiAocGx1Z2luID0gbmV3IF9wbHVnaW5zW3BdKCkpLl9vbkluaXRUd2Vlbih0YXJnZXQsIHRoaXMudmFyc1twXSwgdGhpcykpIHtcblxuXHRcdFx0XHRcdC8vdCAtIHRhcmdldCBcdFx0W29iamVjdF1cblx0XHRcdFx0XHQvL3AgLSBwcm9wZXJ0eSBcdFx0W3N0cmluZ11cblx0XHRcdFx0XHQvL3MgLSBzdGFydFx0XHRcdFtudW1iZXJdXG5cdFx0XHRcdFx0Ly9jIC0gY2hhbmdlXHRcdFtudW1iZXJdXG5cdFx0XHRcdFx0Ly9mIC0gaXNGdW5jdGlvblx0W2Jvb2xlYW5dXG5cdFx0XHRcdFx0Ly9uIC0gbmFtZVx0XHRcdFtzdHJpbmddXG5cdFx0XHRcdFx0Ly9wZyAtIGlzUGx1Z2luIFx0W2Jvb2xlYW5dXG5cdFx0XHRcdFx0Ly9wciAtIHByaW9yaXR5XHRcdFtudW1iZXJdXG5cdFx0XHRcdFx0dGhpcy5fZmlyc3RQVCA9IHB0ID0ge19uZXh0OnRoaXMuX2ZpcnN0UFQsIHQ6cGx1Z2luLCBwOlwic2V0UmF0aW9cIiwgczowLCBjOjEsIGY6dHJ1ZSwgbjpwLCBwZzp0cnVlLCBwcjpwbHVnaW4uX3ByaW9yaXR5fTtcblx0XHRcdFx0XHRpID0gcGx1Z2luLl9vdmVyd3JpdGVQcm9wcy5sZW5ndGg7XG5cdFx0XHRcdFx0d2hpbGUgKC0taSA+IC0xKSB7XG5cdFx0XHRcdFx0XHRwcm9wTG9va3VwW3BsdWdpbi5fb3ZlcndyaXRlUHJvcHNbaV1dID0gdGhpcy5fZmlyc3RQVDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHBsdWdpbi5fcHJpb3JpdHkgfHwgcGx1Z2luLl9vbkluaXRBbGxQcm9wcykge1xuXHRcdFx0XHRcdFx0aW5pdFBsdWdpbnMgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAocGx1Z2luLl9vbkRpc2FibGUgfHwgcGx1Z2luLl9vbkVuYWJsZSkge1xuXHRcdFx0XHRcdFx0dGhpcy5fbm90aWZ5UGx1Z2luc09mRW5hYmxlZCA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5fZmlyc3RQVCA9IHByb3BMb29rdXBbcF0gPSBwdCA9IHtfbmV4dDp0aGlzLl9maXJzdFBULCB0OnRhcmdldCwgcDpwLCBmOih0eXBlb2YodGFyZ2V0W3BdKSA9PT0gXCJmdW5jdGlvblwiKSwgbjpwLCBwZzpmYWxzZSwgcHI6MH07XG5cdFx0XHRcdFx0cHQucyA9ICghcHQuZikgPyBwYXJzZUZsb2F0KHRhcmdldFtwXSkgOiB0YXJnZXRbICgocC5pbmRleE9mKFwic2V0XCIpIHx8IHR5cGVvZih0YXJnZXRbXCJnZXRcIiArIHAuc3Vic3RyKDMpXSkgIT09IFwiZnVuY3Rpb25cIikgPyBwIDogXCJnZXRcIiArIHAuc3Vic3RyKDMpKSBdKCk7XG5cdFx0XHRcdFx0cHQuYyA9ICh0eXBlb2YodikgPT09IFwic3RyaW5nXCIgJiYgdi5jaGFyQXQoMSkgPT09IFwiPVwiKSA/IHBhcnNlSW50KHYuY2hhckF0KDApICsgXCIxXCIsIDEwKSAqIE51bWJlcih2LnN1YnN0cigyKSkgOiAoTnVtYmVyKHYpIC0gcHQucykgfHwgMDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAocHQpIGlmIChwdC5fbmV4dCkge1xuXHRcdFx0XHRcdHB0Ll9uZXh0Ll9wcmV2ID0gcHQ7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKG92ZXJ3cml0dGVuUHJvcHMpIGlmICh0aGlzLl9raWxsKG92ZXJ3cml0dGVuUHJvcHMsIHRhcmdldCkpIHsgLy9hbm90aGVyIHR3ZWVuIG1heSBoYXZlIHRyaWVkIHRvIG92ZXJ3cml0ZSBwcm9wZXJ0aWVzIG9mIHRoaXMgdHdlZW4gYmVmb3JlIGluaXQoKSB3YXMgY2FsbGVkIChsaWtlIGlmIHR3byB0d2VlbnMgc3RhcnQgYXQgdGhlIHNhbWUgdGltZSwgdGhlIG9uZSBjcmVhdGVkIHNlY29uZCB3aWxsIHJ1biBmaXJzdClcblx0XHRcdFx0cmV0dXJuIHRoaXMuX2luaXRQcm9wcyh0YXJnZXQsIHByb3BMb29rdXAsIHNpYmxpbmdzLCBvdmVyd3JpdHRlblByb3BzKTtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLl9vdmVyd3JpdGUgPiAxKSBpZiAodGhpcy5fZmlyc3RQVCkgaWYgKHNpYmxpbmdzLmxlbmd0aCA+IDEpIGlmIChfYXBwbHlPdmVyd3JpdGUodGFyZ2V0LCB0aGlzLCBwcm9wTG9va3VwLCB0aGlzLl9vdmVyd3JpdGUsIHNpYmxpbmdzKSkge1xuXHRcdFx0XHR0aGlzLl9raWxsKHByb3BMb29rdXAsIHRhcmdldCk7XG5cdFx0XHRcdHJldHVybiB0aGlzLl9pbml0UHJvcHModGFyZ2V0LCBwcm9wTG9va3VwLCBzaWJsaW5ncywgb3ZlcndyaXR0ZW5Qcm9wcyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5fZmlyc3RQVCkgaWYgKCh0aGlzLnZhcnMubGF6eSAhPT0gZmFsc2UgJiYgdGhpcy5fZHVyYXRpb24pIHx8ICh0aGlzLnZhcnMubGF6eSAmJiAhdGhpcy5fZHVyYXRpb24pKSB7IC8vemVybyBkdXJhdGlvbiB0d2VlbnMgZG9uJ3QgbGF6eSByZW5kZXIgYnkgZGVmYXVsdDsgZXZlcnl0aGluZyBlbHNlIGRvZXMuXG5cdFx0XHRcdF9sYXp5TG9va3VwW3RhcmdldC5fZ3NUd2VlbklEXSA9IHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gaW5pdFBsdWdpbnM7XG5cdFx0fTtcblxuXHRcdHAucmVuZGVyID0gZnVuY3Rpb24odGltZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKSB7XG5cdFx0XHR2YXIgcHJldlRpbWUgPSB0aGlzLl90aW1lLFxuXHRcdFx0XHRkdXJhdGlvbiA9IHRoaXMuX2R1cmF0aW9uLFxuXHRcdFx0XHRwcmV2UmF3UHJldlRpbWUgPSB0aGlzLl9yYXdQcmV2VGltZSxcblx0XHRcdFx0aXNDb21wbGV0ZSwgY2FsbGJhY2ssIHB0LCByYXdQcmV2VGltZTtcblx0XHRcdGlmICh0aW1lID49IGR1cmF0aW9uKSB7XG5cdFx0XHRcdHRoaXMuX3RvdGFsVGltZSA9IHRoaXMuX3RpbWUgPSBkdXJhdGlvbjtcblx0XHRcdFx0dGhpcy5yYXRpbyA9IHRoaXMuX2Vhc2UuX2NhbGNFbmQgPyB0aGlzLl9lYXNlLmdldFJhdGlvKDEpIDogMTtcblx0XHRcdFx0aWYgKCF0aGlzLl9yZXZlcnNlZCApIHtcblx0XHRcdFx0XHRpc0NvbXBsZXRlID0gdHJ1ZTtcblx0XHRcdFx0XHRjYWxsYmFjayA9IFwib25Db21wbGV0ZVwiO1xuXHRcdFx0XHRcdGZvcmNlID0gKGZvcmNlIHx8IHRoaXMuX3RpbWVsaW5lLmF1dG9SZW1vdmVDaGlsZHJlbik7IC8vb3RoZXJ3aXNlLCBpZiB0aGUgYW5pbWF0aW9uIGlzIHVucGF1c2VkL2FjdGl2YXRlZCBhZnRlciBpdCdzIGFscmVhZHkgZmluaXNoZWQsIGl0IGRvZXNuJ3QgZ2V0IHJlbW92ZWQgZnJvbSB0aGUgcGFyZW50IHRpbWVsaW5lLlxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkdXJhdGlvbiA9PT0gMCkgaWYgKHRoaXMuX2luaXR0ZWQgfHwgIXRoaXMudmFycy5sYXp5IHx8IGZvcmNlKSB7IC8vemVyby1kdXJhdGlvbiB0d2VlbnMgYXJlIHRyaWNreSBiZWNhdXNlIHdlIG11c3QgZGlzY2VybiB0aGUgbW9tZW50dW0vZGlyZWN0aW9uIG9mIHRpbWUgaW4gb3JkZXIgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhlIHN0YXJ0aW5nIHZhbHVlcyBzaG91bGQgYmUgcmVuZGVyZWQgb3IgdGhlIGVuZGluZyB2YWx1ZXMuIElmIHRoZSBcInBsYXloZWFkXCIgb2YgaXRzIHRpbWVsaW5lIGdvZXMgcGFzdCB0aGUgemVyby1kdXJhdGlvbiB0d2VlbiBpbiB0aGUgZm9yd2FyZCBkaXJlY3Rpb24gb3IgbGFuZHMgZGlyZWN0bHkgb24gaXQsIHRoZSBlbmQgdmFsdWVzIHNob3VsZCBiZSByZW5kZXJlZCwgYnV0IGlmIHRoZSB0aW1lbGluZSdzIFwicGxheWhlYWRcIiBtb3ZlcyBwYXN0IGl0IGluIHRoZSBiYWNrd2FyZCBkaXJlY3Rpb24gKGZyb20gYSBwb3N0aXRpdmUgdGltZSB0byBhIG5lZ2F0aXZlIHRpbWUpLCB0aGUgc3RhcnRpbmcgdmFsdWVzIG11c3QgYmUgcmVuZGVyZWQuXG5cdFx0XHRcdFx0aWYgKHRoaXMuX3N0YXJ0VGltZSA9PT0gdGhpcy5fdGltZWxpbmUuX2R1cmF0aW9uKSB7IC8vaWYgYSB6ZXJvLWR1cmF0aW9uIHR3ZWVuIGlzIGF0IHRoZSBWRVJZIGVuZCBvZiBhIHRpbWVsaW5lIGFuZCB0aGF0IHRpbWVsaW5lIHJlbmRlcnMgYXQgaXRzIGVuZCwgaXQgd2lsbCB0eXBpY2FsbHkgYWRkIGEgdGlueSBiaXQgb2YgY3VzaGlvbiB0byB0aGUgcmVuZGVyIHRpbWUgdG8gcHJldmVudCByb3VuZGluZyBlcnJvcnMgZnJvbSBnZXR0aW5nIGluIHRoZSB3YXkgb2YgdHdlZW5zIHJlbmRlcmluZyB0aGVpciBWRVJZIGVuZC4gSWYgd2UgdGhlbiByZXZlcnNlKCkgdGhhdCB0aW1lbGluZSwgdGhlIHplcm8tZHVyYXRpb24gdHdlZW4gd2lsbCB0cmlnZ2VyIGl0cyBvblJldmVyc2VDb21wbGV0ZSBldmVuIHRob3VnaCB0ZWNobmljYWxseSB0aGUgcGxheWhlYWQgZGlkbid0IHBhc3Mgb3ZlciBpdCBhZ2Fpbi4gSXQncyBhIHZlcnkgc3BlY2lmaWMgZWRnZSBjYXNlIHdlIG11c3QgYWNjb21tb2RhdGUuXG5cdFx0XHRcdFx0XHR0aW1lID0gMDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHRpbWUgPT09IDAgfHwgcHJldlJhd1ByZXZUaW1lIDwgMCB8fCAocHJldlJhd1ByZXZUaW1lID09PSBfdGlueU51bSAmJiB0aGlzLmRhdGEgIT09IFwiaXNQYXVzZVwiKSkgaWYgKHByZXZSYXdQcmV2VGltZSAhPT0gdGltZSkgeyAvL25vdGU6IHdoZW4gdGhpcy5kYXRhIGlzIFwiaXNQYXVzZVwiLCBpdCdzIGEgY2FsbGJhY2sgYWRkZWQgYnkgYWRkUGF1c2UoKSBvbiBhIHRpbWVsaW5lIHRoYXQgd2Ugc2hvdWxkIG5vdCBiZSB0cmlnZ2VyZWQgd2hlbiBMRUFWSU5HIGl0cyBleGFjdCBzdGFydCB0aW1lLiBJbiBvdGhlciB3b3JkcywgdGwuYWRkUGF1c2UoMSkucGxheSgxKSBzaG91bGRuJ3QgcGF1c2UuXG5cdFx0XHRcdFx0XHRmb3JjZSA9IHRydWU7XG5cdFx0XHRcdFx0XHRpZiAocHJldlJhd1ByZXZUaW1lID4gX3RpbnlOdW0pIHtcblx0XHRcdFx0XHRcdFx0Y2FsbGJhY2sgPSBcIm9uUmV2ZXJzZUNvbXBsZXRlXCI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuX3Jhd1ByZXZUaW1lID0gcmF3UHJldlRpbWUgPSAoIXN1cHByZXNzRXZlbnRzIHx8IHRpbWUgfHwgcHJldlJhd1ByZXZUaW1lID09PSB0aW1lKSA/IHRpbWUgOiBfdGlueU51bTsgLy93aGVuIHRoZSBwbGF5aGVhZCBhcnJpdmVzIGF0IEVYQUNUTFkgdGltZSAwIChyaWdodCBvbiB0b3ApIG9mIGEgemVyby1kdXJhdGlvbiB0d2Vlbiwgd2UgbmVlZCB0byBkaXNjZXJuIGlmIGV2ZW50cyBhcmUgc3VwcHJlc3NlZCBzbyB0aGF0IHdoZW4gdGhlIHBsYXloZWFkIG1vdmVzIGFnYWluIChuZXh0IHRpbWUpLCBpdCdsbCB0cmlnZ2VyIHRoZSBjYWxsYmFjay4gSWYgZXZlbnRzIGFyZSBOT1Qgc3VwcHJlc3NlZCwgb2J2aW91c2x5IHRoZSBjYWxsYmFjayB3b3VsZCBiZSB0cmlnZ2VyZWQgaW4gdGhpcyByZW5kZXIuIEJhc2ljYWxseSwgdGhlIGNhbGxiYWNrIHNob3VsZCBmaXJlIGVpdGhlciB3aGVuIHRoZSBwbGF5aGVhZCBBUlJJVkVTIG9yIExFQVZFUyB0aGlzIGV4YWN0IHNwb3QsIG5vdCBib3RoLiBJbWFnaW5lIGRvaW5nIGEgdGltZWxpbmUuc2VlaygwKSBhbmQgdGhlcmUncyBhIGNhbGxiYWNrIHRoYXQgc2l0cyBhdCAwLiBTaW5jZSBldmVudHMgYXJlIHN1cHByZXNzZWQgb24gdGhhdCBzZWVrKCkgYnkgZGVmYXVsdCwgbm90aGluZyB3aWxsIGZpcmUsIGJ1dCB3aGVuIHRoZSBwbGF5aGVhZCBtb3ZlcyBvZmYgb2YgdGhhdCBwb3NpdGlvbiwgdGhlIGNhbGxiYWNrIHNob3VsZCBmaXJlLiBUaGlzIGJlaGF2aW9yIGlzIHdoYXQgcGVvcGxlIGludHVpdGl2ZWx5IGV4cGVjdC4gV2Ugc2V0IHRoZSBfcmF3UHJldlRpbWUgdG8gYmUgYSBwcmVjaXNlIHRpbnkgbnVtYmVyIHRvIGluZGljYXRlIHRoaXMgc2NlbmFyaW8gcmF0aGVyIHRoYW4gdXNpbmcgYW5vdGhlciBwcm9wZXJ0eS92YXJpYWJsZSB3aGljaCB3b3VsZCBpbmNyZWFzZSBtZW1vcnkgdXNhZ2UuIFRoaXMgdGVjaG5pcXVlIGlzIGxlc3MgcmVhZGFibGUsIGJ1dCBtb3JlIGVmZmljaWVudC5cblx0XHRcdFx0fVxuXG5cdFx0XHR9IGVsc2UgaWYgKHRpbWUgPCAwLjAwMDAwMDEpIHsgLy90byB3b3JrIGFyb3VuZCBvY2Nhc2lvbmFsIGZsb2F0aW5nIHBvaW50IG1hdGggYXJ0aWZhY3RzLCByb3VuZCBzdXBlciBzbWFsbCB2YWx1ZXMgdG8gMC5cblx0XHRcdFx0dGhpcy5fdG90YWxUaW1lID0gdGhpcy5fdGltZSA9IDA7XG5cdFx0XHRcdHRoaXMucmF0aW8gPSB0aGlzLl9lYXNlLl9jYWxjRW5kID8gdGhpcy5fZWFzZS5nZXRSYXRpbygwKSA6IDA7XG5cdFx0XHRcdGlmIChwcmV2VGltZSAhPT0gMCB8fCAoZHVyYXRpb24gPT09IDAgJiYgcHJldlJhd1ByZXZUaW1lID4gMCkpIHtcblx0XHRcdFx0XHRjYWxsYmFjayA9IFwib25SZXZlcnNlQ29tcGxldGVcIjtcblx0XHRcdFx0XHRpc0NvbXBsZXRlID0gdGhpcy5fcmV2ZXJzZWQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHRpbWUgPCAwKSB7XG5cdFx0XHRcdFx0dGhpcy5fYWN0aXZlID0gZmFsc2U7XG5cdFx0XHRcdFx0aWYgKGR1cmF0aW9uID09PSAwKSBpZiAodGhpcy5faW5pdHRlZCB8fCAhdGhpcy52YXJzLmxhenkgfHwgZm9yY2UpIHsgLy96ZXJvLWR1cmF0aW9uIHR3ZWVucyBhcmUgdHJpY2t5IGJlY2F1c2Ugd2UgbXVzdCBkaXNjZXJuIHRoZSBtb21lbnR1bS9kaXJlY3Rpb24gb2YgdGltZSBpbiBvcmRlciB0byBkZXRlcm1pbmUgd2hldGhlciB0aGUgc3RhcnRpbmcgdmFsdWVzIHNob3VsZCBiZSByZW5kZXJlZCBvciB0aGUgZW5kaW5nIHZhbHVlcy4gSWYgdGhlIFwicGxheWhlYWRcIiBvZiBpdHMgdGltZWxpbmUgZ29lcyBwYXN0IHRoZSB6ZXJvLWR1cmF0aW9uIHR3ZWVuIGluIHRoZSBmb3J3YXJkIGRpcmVjdGlvbiBvciBsYW5kcyBkaXJlY3RseSBvbiBpdCwgdGhlIGVuZCB2YWx1ZXMgc2hvdWxkIGJlIHJlbmRlcmVkLCBidXQgaWYgdGhlIHRpbWVsaW5lJ3MgXCJwbGF5aGVhZFwiIG1vdmVzIHBhc3QgaXQgaW4gdGhlIGJhY2t3YXJkIGRpcmVjdGlvbiAoZnJvbSBhIHBvc3RpdGl2ZSB0aW1lIHRvIGEgbmVnYXRpdmUgdGltZSksIHRoZSBzdGFydGluZyB2YWx1ZXMgbXVzdCBiZSByZW5kZXJlZC5cblx0XHRcdFx0XHRcdGlmIChwcmV2UmF3UHJldlRpbWUgPj0gMCAmJiAhKHByZXZSYXdQcmV2VGltZSA9PT0gX3RpbnlOdW0gJiYgdGhpcy5kYXRhID09PSBcImlzUGF1c2VcIikpIHtcblx0XHRcdFx0XHRcdFx0Zm9yY2UgPSB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0dGhpcy5fcmF3UHJldlRpbWUgPSByYXdQcmV2VGltZSA9ICghc3VwcHJlc3NFdmVudHMgfHwgdGltZSB8fCBwcmV2UmF3UHJldlRpbWUgPT09IHRpbWUpID8gdGltZSA6IF90aW55TnVtOyAvL3doZW4gdGhlIHBsYXloZWFkIGFycml2ZXMgYXQgRVhBQ1RMWSB0aW1lIDAgKHJpZ2h0IG9uIHRvcCkgb2YgYSB6ZXJvLWR1cmF0aW9uIHR3ZWVuLCB3ZSBuZWVkIHRvIGRpc2Nlcm4gaWYgZXZlbnRzIGFyZSBzdXBwcmVzc2VkIHNvIHRoYXQgd2hlbiB0aGUgcGxheWhlYWQgbW92ZXMgYWdhaW4gKG5leHQgdGltZSksIGl0J2xsIHRyaWdnZXIgdGhlIGNhbGxiYWNrLiBJZiBldmVudHMgYXJlIE5PVCBzdXBwcmVzc2VkLCBvYnZpb3VzbHkgdGhlIGNhbGxiYWNrIHdvdWxkIGJlIHRyaWdnZXJlZCBpbiB0aGlzIHJlbmRlci4gQmFzaWNhbGx5LCB0aGUgY2FsbGJhY2sgc2hvdWxkIGZpcmUgZWl0aGVyIHdoZW4gdGhlIHBsYXloZWFkIEFSUklWRVMgb3IgTEVBVkVTIHRoaXMgZXhhY3Qgc3BvdCwgbm90IGJvdGguIEltYWdpbmUgZG9pbmcgYSB0aW1lbGluZS5zZWVrKDApIGFuZCB0aGVyZSdzIGEgY2FsbGJhY2sgdGhhdCBzaXRzIGF0IDAuIFNpbmNlIGV2ZW50cyBhcmUgc3VwcHJlc3NlZCBvbiB0aGF0IHNlZWsoKSBieSBkZWZhdWx0LCBub3RoaW5nIHdpbGwgZmlyZSwgYnV0IHdoZW4gdGhlIHBsYXloZWFkIG1vdmVzIG9mZiBvZiB0aGF0IHBvc2l0aW9uLCB0aGUgY2FsbGJhY2sgc2hvdWxkIGZpcmUuIFRoaXMgYmVoYXZpb3IgaXMgd2hhdCBwZW9wbGUgaW50dWl0aXZlbHkgZXhwZWN0LiBXZSBzZXQgdGhlIF9yYXdQcmV2VGltZSB0byBiZSBhIHByZWNpc2UgdGlueSBudW1iZXIgdG8gaW5kaWNhdGUgdGhpcyBzY2VuYXJpbyByYXRoZXIgdGhhbiB1c2luZyBhbm90aGVyIHByb3BlcnR5L3ZhcmlhYmxlIHdoaWNoIHdvdWxkIGluY3JlYXNlIG1lbW9yeSB1c2FnZS4gVGhpcyB0ZWNobmlxdWUgaXMgbGVzcyByZWFkYWJsZSwgYnV0IG1vcmUgZWZmaWNpZW50LlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIXRoaXMuX2luaXR0ZWQpIHsgLy9pZiB3ZSByZW5kZXIgdGhlIHZlcnkgYmVnaW5uaW5nICh0aW1lID09IDApIG9mIGEgZnJvbVRvKCksIHdlIG11c3QgZm9yY2UgdGhlIHJlbmRlciAobm9ybWFsIHR3ZWVucyB3b3VsZG4ndCBuZWVkIHRvIHJlbmRlciBhdCBhIHRpbWUgb2YgMCB3aGVuIHRoZSBwcmV2VGltZSB3YXMgYWxzbyAwKS4gVGhpcyBpcyBhbHNvIG1hbmRhdG9yeSB0byBtYWtlIHN1cmUgb3ZlcndyaXRpbmcga2lja3MgaW4gaW1tZWRpYXRlbHkuXG5cdFx0XHRcdFx0Zm9yY2UgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLl90b3RhbFRpbWUgPSB0aGlzLl90aW1lID0gdGltZTtcblxuXHRcdFx0XHRpZiAodGhpcy5fZWFzZVR5cGUpIHtcblx0XHRcdFx0XHR2YXIgciA9IHRpbWUgLyBkdXJhdGlvbiwgdHlwZSA9IHRoaXMuX2Vhc2VUeXBlLCBwb3cgPSB0aGlzLl9lYXNlUG93ZXI7XG5cdFx0XHRcdFx0aWYgKHR5cGUgPT09IDEgfHwgKHR5cGUgPT09IDMgJiYgciA+PSAwLjUpKSB7XG5cdFx0XHRcdFx0XHRyID0gMSAtIHI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICh0eXBlID09PSAzKSB7XG5cdFx0XHRcdFx0XHRyICo9IDI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChwb3cgPT09IDEpIHtcblx0XHRcdFx0XHRcdHIgKj0gcjtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHBvdyA9PT0gMikge1xuXHRcdFx0XHRcdFx0ciAqPSByICogcjtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHBvdyA9PT0gMykge1xuXHRcdFx0XHRcdFx0ciAqPSByICogciAqIHI7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChwb3cgPT09IDQpIHtcblx0XHRcdFx0XHRcdHIgKj0gciAqIHIgKiByICogcjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAodHlwZSA9PT0gMSkge1xuXHRcdFx0XHRcdFx0dGhpcy5yYXRpbyA9IDEgLSByO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAodHlwZSA9PT0gMikge1xuXHRcdFx0XHRcdFx0dGhpcy5yYXRpbyA9IHI7XG5cdFx0XHRcdFx0fSBlbHNlIGlmICh0aW1lIC8gZHVyYXRpb24gPCAwLjUpIHtcblx0XHRcdFx0XHRcdHRoaXMucmF0aW8gPSByIC8gMjtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy5yYXRpbyA9IDEgLSAociAvIDIpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMucmF0aW8gPSB0aGlzLl9lYXNlLmdldFJhdGlvKHRpbWUgLyBkdXJhdGlvbik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMuX3RpbWUgPT09IHByZXZUaW1lICYmICFmb3JjZSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9IGVsc2UgaWYgKCF0aGlzLl9pbml0dGVkKSB7XG5cdFx0XHRcdHRoaXMuX2luaXQoKTtcblx0XHRcdFx0aWYgKCF0aGlzLl9pbml0dGVkIHx8IHRoaXMuX2djKSB7IC8vaW1tZWRpYXRlUmVuZGVyIHR3ZWVucyB0eXBpY2FsbHkgd29uJ3QgaW5pdGlhbGl6ZSB1bnRpbCB0aGUgcGxheWhlYWQgYWR2YW5jZXMgKF90aW1lIGlzIGdyZWF0ZXIgdGhhbiAwKSBpbiBvcmRlciB0byBlbnN1cmUgdGhhdCBvdmVyd3JpdGluZyBvY2N1cnMgcHJvcGVybHkuIEFsc28sIGlmIGFsbCBvZiB0aGUgdHdlZW5pbmcgcHJvcGVydGllcyBoYXZlIGJlZW4gb3ZlcndyaXR0ZW4gKHdoaWNoIHdvdWxkIGNhdXNlIF9nYyB0byBiZSB0cnVlLCBhcyBzZXQgaW4gX2luaXQoKSksIHdlIHNob3VsZG4ndCBjb250aW51ZSBvdGhlcndpc2UgYW4gb25TdGFydCBjYWxsYmFjayBjb3VsZCBiZSBjYWxsZWQgZm9yIGV4YW1wbGUuXG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9IGVsc2UgaWYgKCFmb3JjZSAmJiB0aGlzLl9maXJzdFBUICYmICgodGhpcy52YXJzLmxhenkgIT09IGZhbHNlICYmIHRoaXMuX2R1cmF0aW9uKSB8fCAodGhpcy52YXJzLmxhenkgJiYgIXRoaXMuX2R1cmF0aW9uKSkpIHtcblx0XHRcdFx0XHR0aGlzLl90aW1lID0gdGhpcy5fdG90YWxUaW1lID0gcHJldlRpbWU7XG5cdFx0XHRcdFx0dGhpcy5fcmF3UHJldlRpbWUgPSBwcmV2UmF3UHJldlRpbWU7XG5cdFx0XHRcdFx0X2xhenlUd2VlbnMucHVzaCh0aGlzKTtcblx0XHRcdFx0XHR0aGlzLl9sYXp5ID0gW3RpbWUsIHN1cHByZXNzRXZlbnRzXTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly9fZWFzZSBpcyBpbml0aWFsbHkgc2V0IHRvIGRlZmF1bHRFYXNlLCBzbyBub3cgdGhhdCBpbml0KCkgaGFzIHJ1biwgX2Vhc2UgaXMgc2V0IHByb3Blcmx5IGFuZCB3ZSBuZWVkIHRvIHJlY2FsY3VsYXRlIHRoZSByYXRpby4gT3ZlcmFsbCB0aGlzIGlzIGZhc3RlciB0aGFuIHVzaW5nIGNvbmRpdGlvbmFsIGxvZ2ljIGVhcmxpZXIgaW4gdGhlIG1ldGhvZCB0byBhdm9pZCBoYXZpbmcgdG8gc2V0IHJhdGlvIHR3aWNlIGJlY2F1c2Ugd2Ugb25seSBpbml0KCkgb25jZSBidXQgcmVuZGVyVGltZSgpIGdldHMgY2FsbGVkIFZFUlkgZnJlcXVlbnRseS5cblx0XHRcdFx0aWYgKHRoaXMuX3RpbWUgJiYgIWlzQ29tcGxldGUpIHtcblx0XHRcdFx0XHR0aGlzLnJhdGlvID0gdGhpcy5fZWFzZS5nZXRSYXRpbyh0aGlzLl90aW1lIC8gZHVyYXRpb24pO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGlzQ29tcGxldGUgJiYgdGhpcy5fZWFzZS5fY2FsY0VuZCkge1xuXHRcdFx0XHRcdHRoaXMucmF0aW8gPSB0aGlzLl9lYXNlLmdldFJhdGlvKCh0aGlzLl90aW1lID09PSAwKSA/IDAgOiAxKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuX2xhenkgIT09IGZhbHNlKSB7IC8vaW4gY2FzZSBhIGxhenkgcmVuZGVyIGlzIHBlbmRpbmcsIHdlIHNob3VsZCBmbHVzaCBpdCBiZWNhdXNlIHRoZSBuZXcgcmVuZGVyIGlzIG9jY3VycmluZyBub3cgKGltYWdpbmUgYSBsYXp5IHR3ZWVuIGluc3RhbnRpYXRpbmcgYW5kIHRoZW4gaW1tZWRpYXRlbHkgdGhlIHVzZXIgY2FsbHMgdHdlZW4uc2Vlayh0d2Vlbi5kdXJhdGlvbigpKSwgc2tpcHBpbmcgdG8gdGhlIGVuZCAtIHRoZSBlbmQgcmVuZGVyIHdvdWxkIGJlIGZvcmNlZCwgYW5kIHRoZW4gaWYgd2UgZGlkbid0IGZsdXNoIHRoZSBsYXp5IHJlbmRlciwgaXQnZCBmaXJlIEFGVEVSIHRoZSBzZWVrKCksIHJlbmRlcmluZyBpdCBhdCB0aGUgd3JvbmcgdGltZS5cblx0XHRcdFx0dGhpcy5fbGF6eSA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCF0aGlzLl9hY3RpdmUpIGlmICghdGhpcy5fcGF1c2VkICYmIHRoaXMuX3RpbWUgIT09IHByZXZUaW1lICYmIHRpbWUgPj0gMCkge1xuXHRcdFx0XHR0aGlzLl9hY3RpdmUgPSB0cnVlOyAgLy9zbyB0aGF0IGlmIHRoZSB1c2VyIHJlbmRlcnMgYSB0d2VlbiAoYXMgb3Bwb3NlZCB0byB0aGUgdGltZWxpbmUgcmVuZGVyaW5nIGl0KSwgdGhlIHRpbWVsaW5lIGlzIGZvcmNlZCB0byByZS1yZW5kZXIgYW5kIGFsaWduIGl0IHdpdGggdGhlIHByb3BlciB0aW1lL2ZyYW1lIG9uIHRoZSBuZXh0IHJlbmRlcmluZyBjeWNsZS4gTWF5YmUgdGhlIHR3ZWVuIGFscmVhZHkgZmluaXNoZWQgYnV0IHRoZSB1c2VyIG1hbnVhbGx5IHJlLXJlbmRlcnMgaXQgYXMgaGFsZndheSBkb25lLlxuXHRcdFx0fVxuXHRcdFx0aWYgKHByZXZUaW1lID09PSAwKSB7XG5cdFx0XHRcdGlmICh0aGlzLl9zdGFydEF0KSB7XG5cdFx0XHRcdFx0aWYgKHRpbWUgPj0gMCkge1xuXHRcdFx0XHRcdFx0dGhpcy5fc3RhcnRBdC5yZW5kZXIodGltZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKCFjYWxsYmFjaykge1xuXHRcdFx0XHRcdFx0Y2FsbGJhY2sgPSBcIl9kdW1teUdTXCI7IC8vaWYgbm8gY2FsbGJhY2sgaXMgZGVmaW5lZCwgdXNlIGEgZHVtbXkgdmFsdWUganVzdCBzbyB0aGF0IHRoZSBjb25kaXRpb24gYXQgdGhlIGVuZCBldmFsdWF0ZXMgYXMgdHJ1ZSBiZWNhdXNlIF9zdGFydEF0IHNob3VsZCByZW5kZXIgQUZURVIgdGhlIG5vcm1hbCByZW5kZXIgbG9vcCB3aGVuIHRoZSB0aW1lIGlzIG5lZ2F0aXZlLiBXZSBjb3VsZCBoYW5kbGUgdGhpcyBpbiBhIG1vcmUgaW50dWl0aXZlIHdheSwgb2YgY291cnNlLCBidXQgdGhlIHJlbmRlciBsb29wIGlzIHRoZSBNT1NUIGltcG9ydGFudCB0aGluZyB0byBvcHRpbWl6ZSwgc28gdGhpcyB0ZWNobmlxdWUgYWxsb3dzIHVzIHRvIGF2b2lkIGFkZGluZyBleHRyYSBjb25kaXRpb25hbCBsb2dpYyBpbiBhIGhpZ2gtZnJlcXVlbmN5IGFyZWEuXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0aGlzLnZhcnMub25TdGFydCkgaWYgKHRoaXMuX3RpbWUgIT09IDAgfHwgZHVyYXRpb24gPT09IDApIGlmICghc3VwcHJlc3NFdmVudHMpIHtcblx0XHRcdFx0XHR0aGlzLnZhcnMub25TdGFydC5hcHBseSh0aGlzLnZhcnMub25TdGFydFNjb3BlIHx8IHRoaXMsIHRoaXMudmFycy5vblN0YXJ0UGFyYW1zIHx8IF9ibGFua0FycmF5KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cHQgPSB0aGlzLl9maXJzdFBUO1xuXHRcdFx0d2hpbGUgKHB0KSB7XG5cdFx0XHRcdGlmIChwdC5mKSB7XG5cdFx0XHRcdFx0cHQudFtwdC5wXShwdC5jICogdGhpcy5yYXRpbyArIHB0LnMpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHB0LnRbcHQucF0gPSBwdC5jICogdGhpcy5yYXRpbyArIHB0LnM7XG5cdFx0XHRcdH1cblx0XHRcdFx0cHQgPSBwdC5fbmV4dDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMuX29uVXBkYXRlKSB7XG5cdFx0XHRcdGlmICh0aW1lIDwgMCkgaWYgKHRoaXMuX3N0YXJ0QXQgJiYgdGltZSAhPT0gLTAuMDAwMSkgeyAvL2lmIHRoZSB0d2VlbiBpcyBwb3NpdGlvbmVkIGF0IHRoZSBWRVJZIGJlZ2lubmluZyAoX3N0YXJ0VGltZSAwKSBvZiBpdHMgcGFyZW50IHRpbWVsaW5lLCBpdCdzIGlsbGVnYWwgZm9yIHRoZSBwbGF5aGVhZCB0byBnbyBiYWNrIGZ1cnRoZXIsIHNvIHdlIHNob3VsZCBub3QgcmVuZGVyIHRoZSByZWNvcmRlZCBzdGFydEF0IHZhbHVlcy5cblx0XHRcdFx0XHR0aGlzLl9zdGFydEF0LnJlbmRlcih0aW1lLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpOyAvL25vdGU6IGZvciBwZXJmb3JtYW5jZSByZWFzb25zLCB3ZSB0dWNrIHRoaXMgY29uZGl0aW9uYWwgbG9naWMgaW5zaWRlIGxlc3MgdHJhdmVsZWQgYXJlYXMgKG1vc3QgdHdlZW5zIGRvbid0IGhhdmUgYW4gb25VcGRhdGUpLiBXZSdkIGp1c3QgaGF2ZSBpdCBhdCB0aGUgZW5kIGJlZm9yZSB0aGUgb25Db21wbGV0ZSwgYnV0IHRoZSB2YWx1ZXMgc2hvdWxkIGJlIHVwZGF0ZWQgYmVmb3JlIGFueSBvblVwZGF0ZSBpcyBjYWxsZWQsIHNvIHdlIEFMU08gcHV0IGl0IGhlcmUgYW5kIHRoZW4gaWYgaXQncyBub3QgY2FsbGVkLCB3ZSBkbyBzbyBsYXRlciBuZWFyIHRoZSBvbkNvbXBsZXRlLlxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghc3VwcHJlc3NFdmVudHMpIGlmICh0aGlzLl90aW1lICE9PSBwcmV2VGltZSB8fCBpc0NvbXBsZXRlKSB7XG5cdFx0XHRcdFx0dGhpcy5fb25VcGRhdGUuYXBwbHkodGhpcy52YXJzLm9uVXBkYXRlU2NvcGUgfHwgdGhpcywgdGhpcy52YXJzLm9uVXBkYXRlUGFyYW1zIHx8IF9ibGFua0FycmF5KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGNhbGxiYWNrKSBpZiAoIXRoaXMuX2djIHx8IGZvcmNlKSB7IC8vY2hlY2sgX2djIGJlY2F1c2UgdGhlcmUncyBhIGNoYW5jZSB0aGF0IGtpbGwoKSBjb3VsZCBiZSBjYWxsZWQgaW4gYW4gb25VcGRhdGVcblx0XHRcdFx0aWYgKHRpbWUgPCAwICYmIHRoaXMuX3N0YXJ0QXQgJiYgIXRoaXMuX29uVXBkYXRlICYmIHRpbWUgIT09IC0wLjAwMDEpIHsgLy8tMC4wMDAxIGlzIGEgc3BlY2lhbCB2YWx1ZSB0aGF0IHdlIHVzZSB3aGVuIGxvb3BpbmcgYmFjayB0byB0aGUgYmVnaW5uaW5nIG9mIGEgcmVwZWF0ZWQgVGltZWxpbmVNYXgsIGluIHdoaWNoIGNhc2Ugd2Ugc2hvdWxkbid0IHJlbmRlciB0aGUgX3N0YXJ0QXQgdmFsdWVzLlxuXHRcdFx0XHRcdHRoaXMuX3N0YXJ0QXQucmVuZGVyKHRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGlzQ29tcGxldGUpIHtcblx0XHRcdFx0XHRpZiAodGhpcy5fdGltZWxpbmUuYXV0b1JlbW92ZUNoaWxkcmVuKSB7XG5cdFx0XHRcdFx0XHR0aGlzLl9lbmFibGVkKGZhbHNlLCBmYWxzZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuX2FjdGl2ZSA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghc3VwcHJlc3NFdmVudHMgJiYgdGhpcy52YXJzW2NhbGxiYWNrXSkge1xuXHRcdFx0XHRcdHRoaXMudmFyc1tjYWxsYmFja10uYXBwbHkodGhpcy52YXJzW2NhbGxiYWNrICsgXCJTY29wZVwiXSB8fCB0aGlzLCB0aGlzLnZhcnNbY2FsbGJhY2sgKyBcIlBhcmFtc1wiXSB8fCBfYmxhbmtBcnJheSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGR1cmF0aW9uID09PSAwICYmIHRoaXMuX3Jhd1ByZXZUaW1lID09PSBfdGlueU51bSAmJiByYXdQcmV2VGltZSAhPT0gX3RpbnlOdW0pIHsgLy90aGUgb25Db21wbGV0ZSBvciBvblJldmVyc2VDb21wbGV0ZSBjb3VsZCB0cmlnZ2VyIG1vdmVtZW50IG9mIHRoZSBwbGF5aGVhZCBhbmQgZm9yIHplcm8tZHVyYXRpb24gdHdlZW5zICh3aGljaCBtdXN0IGRpc2Nlcm4gZGlyZWN0aW9uKSB0aGF0IGxhbmQgZGlyZWN0bHkgYmFjayBvbiB0aGVpciBzdGFydCB0aW1lLCB3ZSBkb24ndCB3YW50IHRvIGZpcmUgYWdhaW4gb24gdGhlIG5leHQgcmVuZGVyLiBUaGluayBvZiBzZXZlcmFsIGFkZFBhdXNlKCkncyBpbiBhIHRpbWVsaW5lIHRoYXQgZm9yY2VzIHRoZSBwbGF5aGVhZCB0byBhIGNlcnRhaW4gc3BvdCwgYnV0IHdoYXQgaWYgaXQncyBhbHJlYWR5IHBhdXNlZCBhbmQgYW5vdGhlciB0d2VlbiBpcyB0d2VlbmluZyB0aGUgXCJ0aW1lXCIgb2YgdGhlIHRpbWVsaW5lPyBFYWNoIHRpbWUgaXQgbW92ZXMgW2ZvcndhcmRdIHBhc3QgdGhhdCBzcG90LCBpdCB3b3VsZCBtb3ZlIGJhY2ssIGFuZCBzaW5jZSBzdXBwcmVzc0V2ZW50cyBpcyB0cnVlLCBpdCdkIHJlc2V0IF9yYXdQcmV2VGltZSB0byBfdGlueU51bSBzbyB0aGF0IHdoZW4gaXQgYmVnaW5zIGFnYWluLCB0aGUgY2FsbGJhY2sgd291bGQgZmlyZSAoc28gdWx0aW1hdGVseSBpdCBjb3VsZCBib3VuY2UgYmFjayBhbmQgZm9ydGggZHVyaW5nIHRoYXQgdHdlZW4pLiBBZ2FpbiwgdGhpcyBpcyBhIHZlcnkgdW5jb21tb24gc2NlbmFyaW8sIGJ1dCBwb3NzaWJsZSBub25ldGhlbGVzcy5cblx0XHRcdFx0XHR0aGlzLl9yYXdQcmV2VGltZSA9IDA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0cC5fa2lsbCA9IGZ1bmN0aW9uKHZhcnMsIHRhcmdldCwgb3ZlcndyaXRpbmdUd2Vlbikge1xuXHRcdFx0aWYgKHZhcnMgPT09IFwiYWxsXCIpIHtcblx0XHRcdFx0dmFycyA9IG51bGw7XG5cdFx0XHR9XG5cdFx0XHRpZiAodmFycyA9PSBudWxsKSBpZiAodGFyZ2V0ID09IG51bGwgfHwgdGFyZ2V0ID09PSB0aGlzLnRhcmdldCkge1xuXHRcdFx0XHR0aGlzLl9sYXp5ID0gZmFsc2U7XG5cdFx0XHRcdHJldHVybiB0aGlzLl9lbmFibGVkKGZhbHNlLCBmYWxzZSk7XG5cdFx0XHR9XG5cdFx0XHR0YXJnZXQgPSAodHlwZW9mKHRhcmdldCkgIT09IFwic3RyaW5nXCIpID8gKHRhcmdldCB8fCB0aGlzLl90YXJnZXRzIHx8IHRoaXMudGFyZ2V0KSA6IFR3ZWVuTGl0ZS5zZWxlY3Rvcih0YXJnZXQpIHx8IHRhcmdldDtcblx0XHRcdHZhciBpLCBvdmVyd3JpdHRlblByb3BzLCBwLCBwdCwgcHJvcExvb2t1cCwgY2hhbmdlZCwga2lsbFByb3BzLCByZWNvcmQsIGtpbGxlZDtcblx0XHRcdGlmICgoX2lzQXJyYXkodGFyZ2V0KSB8fCBfaXNTZWxlY3Rvcih0YXJnZXQpKSAmJiB0eXBlb2YodGFyZ2V0WzBdKSAhPT0gXCJudW1iZXJcIikge1xuXHRcdFx0XHRpID0gdGFyZ2V0Lmxlbmd0aDtcblx0XHRcdFx0d2hpbGUgKC0taSA+IC0xKSB7XG5cdFx0XHRcdFx0aWYgKHRoaXMuX2tpbGwodmFycywgdGFyZ2V0W2ldKSkge1xuXHRcdFx0XHRcdFx0Y2hhbmdlZCA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAodGhpcy5fdGFyZ2V0cykge1xuXHRcdFx0XHRcdGkgPSB0aGlzLl90YXJnZXRzLmxlbmd0aDtcblx0XHRcdFx0XHR3aGlsZSAoLS1pID4gLTEpIHtcblx0XHRcdFx0XHRcdGlmICh0YXJnZXQgPT09IHRoaXMuX3RhcmdldHNbaV0pIHtcblx0XHRcdFx0XHRcdFx0cHJvcExvb2t1cCA9IHRoaXMuX3Byb3BMb29rdXBbaV0gfHwge307XG5cdFx0XHRcdFx0XHRcdHRoaXMuX292ZXJ3cml0dGVuUHJvcHMgPSB0aGlzLl9vdmVyd3JpdHRlblByb3BzIHx8IFtdO1xuXHRcdFx0XHRcdFx0XHRvdmVyd3JpdHRlblByb3BzID0gdGhpcy5fb3ZlcndyaXR0ZW5Qcm9wc1tpXSA9IHZhcnMgPyB0aGlzLl9vdmVyd3JpdHRlblByb3BzW2ldIHx8IHt9IDogXCJhbGxcIjtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2UgaWYgKHRhcmdldCAhPT0gdGhpcy50YXJnZXQpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cHJvcExvb2t1cCA9IHRoaXMuX3Byb3BMb29rdXA7XG5cdFx0XHRcdFx0b3ZlcndyaXR0ZW5Qcm9wcyA9IHRoaXMuX292ZXJ3cml0dGVuUHJvcHMgPSB2YXJzID8gdGhpcy5fb3ZlcndyaXR0ZW5Qcm9wcyB8fCB7fSA6IFwiYWxsXCI7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAocHJvcExvb2t1cCkge1xuXHRcdFx0XHRcdGtpbGxQcm9wcyA9IHZhcnMgfHwgcHJvcExvb2t1cDtcblx0XHRcdFx0XHRyZWNvcmQgPSAodmFycyAhPT0gb3ZlcndyaXR0ZW5Qcm9wcyAmJiBvdmVyd3JpdHRlblByb3BzICE9PSBcImFsbFwiICYmIHZhcnMgIT09IHByb3BMb29rdXAgJiYgKHR5cGVvZih2YXJzKSAhPT0gXCJvYmplY3RcIiB8fCAhdmFycy5fdGVtcEtpbGwpKTsgLy9fdGVtcEtpbGwgaXMgYSBzdXBlci1zZWNyZXQgd2F5IHRvIGRlbGV0ZSBhIHBhcnRpY3VsYXIgdHdlZW5pbmcgcHJvcGVydHkgYnV0IE5PVCBoYXZlIGl0IHJlbWVtYmVyZWQgYXMgYW4gb2ZmaWNpYWwgb3ZlcndyaXR0ZW4gcHJvcGVydHkgKGxpa2UgaW4gQmV6aWVyUGx1Z2luKVxuXHRcdFx0XHRcdGlmIChvdmVyd3JpdGluZ1R3ZWVuICYmIChUd2VlbkxpdGUub25PdmVyd3JpdGUgfHwgdGhpcy52YXJzLm9uT3ZlcndyaXRlKSkge1xuXHRcdFx0XHRcdFx0Zm9yIChwIGluIGtpbGxQcm9wcykge1xuXHRcdFx0XHRcdFx0XHRpZiAocHJvcExvb2t1cFtwXSkge1xuXHRcdFx0XHRcdFx0XHRcdGlmICgha2lsbGVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRraWxsZWQgPSBbXTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0a2lsbGVkLnB1c2gocCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmICghX29uT3ZlcndyaXRlKHRoaXMsIG92ZXJ3cml0aW5nVHdlZW4sIHRhcmdldCwga2lsbGVkKSkgeyAvL2lmIHRoZSBvbk92ZXJ3cml0ZSByZXR1cm5lZCBmYWxzZSwgdGhhdCBtZWFucyB0aGUgdXNlciB3YW50cyB0byBvdmVycmlkZSB0aGUgb3ZlcndyaXRpbmcgKGNhbmNlbCBpdCkuXG5cdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRmb3IgKHAgaW4ga2lsbFByb3BzKSB7XG5cdFx0XHRcdFx0XHRpZiAoKHB0ID0gcHJvcExvb2t1cFtwXSkpIHtcblx0XHRcdFx0XHRcdFx0aWYgKHB0LnBnICYmIHB0LnQuX2tpbGwoa2lsbFByb3BzKSkge1xuXHRcdFx0XHRcdFx0XHRcdGNoYW5nZWQgPSB0cnVlOyAvL3NvbWUgcGx1Z2lucyBuZWVkIHRvIGJlIG5vdGlmaWVkIHNvIHRoZXkgY2FuIHBlcmZvcm0gY2xlYW51cCB0YXNrcyBmaXJzdFxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGlmICghcHQucGcgfHwgcHQudC5fb3ZlcndyaXRlUHJvcHMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHB0Ll9wcmV2KSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRwdC5fcHJldi5fbmV4dCA9IHB0Ll9uZXh0O1xuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAocHQgPT09IHRoaXMuX2ZpcnN0UFQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuX2ZpcnN0UFQgPSBwdC5fbmV4dDtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHB0Ll9uZXh0KSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRwdC5fbmV4dC5fcHJldiA9IHB0Ll9wcmV2O1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRwdC5fbmV4dCA9IHB0Ll9wcmV2ID0gbnVsbDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRkZWxldGUgcHJvcExvb2t1cFtwXTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmIChyZWNvcmQpIHtcblx0XHRcdFx0XHRcdFx0b3ZlcndyaXR0ZW5Qcm9wc1twXSA9IDE7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICghdGhpcy5fZmlyc3RQVCAmJiB0aGlzLl9pbml0dGVkKSB7IC8vaWYgYWxsIHR3ZWVuaW5nIHByb3BlcnRpZXMgYXJlIGtpbGxlZCwga2lsbCB0aGUgdHdlZW4uIFdpdGhvdXQgdGhpcyBsaW5lLCBpZiB0aGVyZSdzIGEgdHdlZW4gd2l0aCBtdWx0aXBsZSB0YXJnZXRzIGFuZCB0aGVuIHlvdSBraWxsVHdlZW5zT2YoKSBlYWNoIHRhcmdldCBpbmRpdmlkdWFsbHksIHRoZSB0d2VlbiB3b3VsZCB0ZWNobmljYWxseSBzdGlsbCByZW1haW4gYWN0aXZlIGFuZCBmaXJlIGl0cyBvbkNvbXBsZXRlIGV2ZW4gdGhvdWdoIHRoZXJlIGFyZW4ndCBhbnkgbW9yZSBwcm9wZXJ0aWVzIHR3ZWVuaW5nLlxuXHRcdFx0XHRcdFx0dGhpcy5fZW5hYmxlZChmYWxzZSwgZmFsc2UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGNoYW5nZWQ7XG5cdFx0fTtcblxuXHRcdHAuaW52YWxpZGF0ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKHRoaXMuX25vdGlmeVBsdWdpbnNPZkVuYWJsZWQpIHtcblx0XHRcdFx0VHdlZW5MaXRlLl9vblBsdWdpbkV2ZW50KFwiX29uRGlzYWJsZVwiLCB0aGlzKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuX2ZpcnN0UFQgPSB0aGlzLl9vdmVyd3JpdHRlblByb3BzID0gdGhpcy5fc3RhcnRBdCA9IHRoaXMuX29uVXBkYXRlID0gbnVsbDtcblx0XHRcdHRoaXMuX25vdGlmeVBsdWdpbnNPZkVuYWJsZWQgPSB0aGlzLl9hY3RpdmUgPSB0aGlzLl9sYXp5ID0gZmFsc2U7XG5cdFx0XHR0aGlzLl9wcm9wTG9va3VwID0gKHRoaXMuX3RhcmdldHMpID8ge30gOiBbXTtcblx0XHRcdEFuaW1hdGlvbi5wcm90b3R5cGUuaW52YWxpZGF0ZS5jYWxsKHRoaXMpO1xuXHRcdFx0aWYgKHRoaXMudmFycy5pbW1lZGlhdGVSZW5kZXIpIHtcblx0XHRcdFx0dGhpcy5fdGltZSA9IC1fdGlueU51bTsgLy9mb3JjZXMgYSByZW5kZXIgd2l0aG91dCBoYXZpbmcgdG8gc2V0IHRoZSByZW5kZXIoKSBcImZvcmNlXCIgcGFyYW1ldGVyIHRvIHRydWUgYmVjYXVzZSB3ZSB3YW50IHRvIGFsbG93IGxhenlpbmcgYnkgZGVmYXVsdCAodXNpbmcgdGhlIFwiZm9yY2VcIiBwYXJhbWV0ZXIgYWx3YXlzIGZvcmNlcyBhbiBpbW1lZGlhdGUgZnVsbCByZW5kZXIpXG5cdFx0XHRcdHRoaXMucmVuZGVyKC10aGlzLl9kZWxheSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9O1xuXG5cdFx0cC5fZW5hYmxlZCA9IGZ1bmN0aW9uKGVuYWJsZWQsIGlnbm9yZVRpbWVsaW5lKSB7XG5cdFx0XHRpZiAoIV90aWNrZXJBY3RpdmUpIHtcblx0XHRcdFx0X3RpY2tlci53YWtlKCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZW5hYmxlZCAmJiB0aGlzLl9nYykge1xuXHRcdFx0XHR2YXIgdGFyZ2V0cyA9IHRoaXMuX3RhcmdldHMsXG5cdFx0XHRcdFx0aTtcblx0XHRcdFx0aWYgKHRhcmdldHMpIHtcblx0XHRcdFx0XHRpID0gdGFyZ2V0cy5sZW5ndGg7XG5cdFx0XHRcdFx0d2hpbGUgKC0taSA+IC0xKSB7XG5cdFx0XHRcdFx0XHR0aGlzLl9zaWJsaW5nc1tpXSA9IF9yZWdpc3Rlcih0YXJnZXRzW2ldLCB0aGlzLCB0cnVlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5fc2libGluZ3MgPSBfcmVnaXN0ZXIodGhpcy50YXJnZXQsIHRoaXMsIHRydWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRBbmltYXRpb24ucHJvdG90eXBlLl9lbmFibGVkLmNhbGwodGhpcywgZW5hYmxlZCwgaWdub3JlVGltZWxpbmUpO1xuXHRcdFx0aWYgKHRoaXMuX25vdGlmeVBsdWdpbnNPZkVuYWJsZWQpIGlmICh0aGlzLl9maXJzdFBUKSB7XG5cdFx0XHRcdHJldHVybiBUd2VlbkxpdGUuX29uUGx1Z2luRXZlbnQoKGVuYWJsZWQgPyBcIl9vbkVuYWJsZVwiIDogXCJfb25EaXNhYmxlXCIpLCB0aGlzKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9O1xuXG5cbi8vLS0tLVR3ZWVuTGl0ZSBzdGF0aWMgbWV0aG9kcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0VHdlZW5MaXRlLnRvID0gZnVuY3Rpb24odGFyZ2V0LCBkdXJhdGlvbiwgdmFycykge1xuXHRcdFx0cmV0dXJuIG5ldyBUd2VlbkxpdGUodGFyZ2V0LCBkdXJhdGlvbiwgdmFycyk7XG5cdFx0fTtcblxuXHRcdFR3ZWVuTGl0ZS5mcm9tID0gZnVuY3Rpb24odGFyZ2V0LCBkdXJhdGlvbiwgdmFycykge1xuXHRcdFx0dmFycy5ydW5CYWNrd2FyZHMgPSB0cnVlO1xuXHRcdFx0dmFycy5pbW1lZGlhdGVSZW5kZXIgPSAodmFycy5pbW1lZGlhdGVSZW5kZXIgIT0gZmFsc2UpO1xuXHRcdFx0cmV0dXJuIG5ldyBUd2VlbkxpdGUodGFyZ2V0LCBkdXJhdGlvbiwgdmFycyk7XG5cdFx0fTtcblxuXHRcdFR3ZWVuTGl0ZS5mcm9tVG8gPSBmdW5jdGlvbih0YXJnZXQsIGR1cmF0aW9uLCBmcm9tVmFycywgdG9WYXJzKSB7XG5cdFx0XHR0b1ZhcnMuc3RhcnRBdCA9IGZyb21WYXJzO1xuXHRcdFx0dG9WYXJzLmltbWVkaWF0ZVJlbmRlciA9ICh0b1ZhcnMuaW1tZWRpYXRlUmVuZGVyICE9IGZhbHNlICYmIGZyb21WYXJzLmltbWVkaWF0ZVJlbmRlciAhPSBmYWxzZSk7XG5cdFx0XHRyZXR1cm4gbmV3IFR3ZWVuTGl0ZSh0YXJnZXQsIGR1cmF0aW9uLCB0b1ZhcnMpO1xuXHRcdH07XG5cblx0XHRUd2VlbkxpdGUuZGVsYXllZENhbGwgPSBmdW5jdGlvbihkZWxheSwgY2FsbGJhY2ssIHBhcmFtcywgc2NvcGUsIHVzZUZyYW1lcykge1xuXHRcdFx0cmV0dXJuIG5ldyBUd2VlbkxpdGUoY2FsbGJhY2ssIDAsIHtkZWxheTpkZWxheSwgb25Db21wbGV0ZTpjYWxsYmFjaywgb25Db21wbGV0ZVBhcmFtczpwYXJhbXMsIG9uQ29tcGxldGVTY29wZTpzY29wZSwgb25SZXZlcnNlQ29tcGxldGU6Y2FsbGJhY2ssIG9uUmV2ZXJzZUNvbXBsZXRlUGFyYW1zOnBhcmFtcywgb25SZXZlcnNlQ29tcGxldGVTY29wZTpzY29wZSwgaW1tZWRpYXRlUmVuZGVyOmZhbHNlLCBsYXp5OmZhbHNlLCB1c2VGcmFtZXM6dXNlRnJhbWVzLCBvdmVyd3JpdGU6MH0pO1xuXHRcdH07XG5cblx0XHRUd2VlbkxpdGUuc2V0ID0gZnVuY3Rpb24odGFyZ2V0LCB2YXJzKSB7XG5cdFx0XHRyZXR1cm4gbmV3IFR3ZWVuTGl0ZSh0YXJnZXQsIDAsIHZhcnMpO1xuXHRcdH07XG5cblx0XHRUd2VlbkxpdGUuZ2V0VHdlZW5zT2YgPSBmdW5jdGlvbih0YXJnZXQsIG9ubHlBY3RpdmUpIHtcblx0XHRcdGlmICh0YXJnZXQgPT0gbnVsbCkgeyByZXR1cm4gW107IH1cblx0XHRcdHRhcmdldCA9ICh0eXBlb2YodGFyZ2V0KSAhPT0gXCJzdHJpbmdcIikgPyB0YXJnZXQgOiBUd2VlbkxpdGUuc2VsZWN0b3IodGFyZ2V0KSB8fCB0YXJnZXQ7XG5cdFx0XHR2YXIgaSwgYSwgaiwgdDtcblx0XHRcdGlmICgoX2lzQXJyYXkodGFyZ2V0KSB8fCBfaXNTZWxlY3Rvcih0YXJnZXQpKSAmJiB0eXBlb2YodGFyZ2V0WzBdKSAhPT0gXCJudW1iZXJcIikge1xuXHRcdFx0XHRpID0gdGFyZ2V0Lmxlbmd0aDtcblx0XHRcdFx0YSA9IFtdO1xuXHRcdFx0XHR3aGlsZSAoLS1pID4gLTEpIHtcblx0XHRcdFx0XHRhID0gYS5jb25jYXQoVHdlZW5MaXRlLmdldFR3ZWVuc09mKHRhcmdldFtpXSwgb25seUFjdGl2ZSkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGkgPSBhLmxlbmd0aDtcblx0XHRcdFx0Ly9ub3cgZ2V0IHJpZCBvZiBhbnkgZHVwbGljYXRlcyAodHdlZW5zIG9mIGFycmF5cyBvZiBvYmplY3RzIGNvdWxkIGNhdXNlIGR1cGxpY2F0ZXMpXG5cdFx0XHRcdHdoaWxlICgtLWkgPiAtMSkge1xuXHRcdFx0XHRcdHQgPSBhW2ldO1xuXHRcdFx0XHRcdGogPSBpO1xuXHRcdFx0XHRcdHdoaWxlICgtLWogPiAtMSkge1xuXHRcdFx0XHRcdFx0aWYgKHQgPT09IGFbal0pIHtcblx0XHRcdFx0XHRcdFx0YS5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRhID0gX3JlZ2lzdGVyKHRhcmdldCkuY29uY2F0KCk7XG5cdFx0XHRcdGkgPSBhLmxlbmd0aDtcblx0XHRcdFx0d2hpbGUgKC0taSA+IC0xKSB7XG5cdFx0XHRcdFx0aWYgKGFbaV0uX2djIHx8IChvbmx5QWN0aXZlICYmICFhW2ldLmlzQWN0aXZlKCkpKSB7XG5cdFx0XHRcdFx0XHRhLnNwbGljZShpLCAxKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBhO1xuXHRcdH07XG5cblx0XHRUd2VlbkxpdGUua2lsbFR3ZWVuc09mID0gVHdlZW5MaXRlLmtpbGxEZWxheWVkQ2FsbHNUbyA9IGZ1bmN0aW9uKHRhcmdldCwgb25seUFjdGl2ZSwgdmFycykge1xuXHRcdFx0aWYgKHR5cGVvZihvbmx5QWN0aXZlKSA9PT0gXCJvYmplY3RcIikge1xuXHRcdFx0XHR2YXJzID0gb25seUFjdGl2ZTsgLy9mb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgKGJlZm9yZSBcIm9ubHlBY3RpdmVcIiBwYXJhbWV0ZXIgd2FzIGluc2VydGVkKVxuXHRcdFx0XHRvbmx5QWN0aXZlID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHR2YXIgYSA9IFR3ZWVuTGl0ZS5nZXRUd2VlbnNPZih0YXJnZXQsIG9ubHlBY3RpdmUpLFxuXHRcdFx0XHRpID0gYS5sZW5ndGg7XG5cdFx0XHR3aGlsZSAoLS1pID4gLTEpIHtcblx0XHRcdFx0YVtpXS5fa2lsbCh2YXJzLCB0YXJnZXQpO1xuXHRcdFx0fVxuXHRcdH07XG5cblxuXG4vKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogVHdlZW5QbHVnaW4gICAoY291bGQgZWFzaWx5IGJlIHNwbGl0IG91dCBhcyBhIHNlcGFyYXRlIGZpbGUvY2xhc3MsIGJ1dCBpbmNsdWRlZCBmb3IgZWFzZSBvZiB1c2UgKHNvIHRoYXQgcGVvcGxlIGRvbid0IG5lZWQgdG8gaW5jbHVkZSBhbm90aGVyIHNjcmlwdCBjYWxsIGJlZm9yZSBsb2FkaW5nIHBsdWdpbnMgd2hpY2ggaXMgZWFzeSB0byBmb3JnZXQpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblx0XHR2YXIgVHdlZW5QbHVnaW4gPSBfY2xhc3MoXCJwbHVnaW5zLlR3ZWVuUGx1Z2luXCIsIGZ1bmN0aW9uKHByb3BzLCBwcmlvcml0eSkge1xuXHRcdFx0XHRcdHRoaXMuX292ZXJ3cml0ZVByb3BzID0gKHByb3BzIHx8IFwiXCIpLnNwbGl0KFwiLFwiKTtcblx0XHRcdFx0XHR0aGlzLl9wcm9wTmFtZSA9IHRoaXMuX292ZXJ3cml0ZVByb3BzWzBdO1xuXHRcdFx0XHRcdHRoaXMuX3ByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRcdFx0XHR0aGlzLl9zdXBlciA9IFR3ZWVuUGx1Z2luLnByb3RvdHlwZTtcblx0XHRcdFx0fSwgdHJ1ZSk7XG5cblx0XHRwID0gVHdlZW5QbHVnaW4ucHJvdG90eXBlO1xuXHRcdFR3ZWVuUGx1Z2luLnZlcnNpb24gPSBcIjEuMTAuMVwiO1xuXHRcdFR3ZWVuUGx1Z2luLkFQSSA9IDI7XG5cdFx0cC5fZmlyc3RQVCA9IG51bGw7XG5cblx0XHRwLl9hZGRUd2VlbiA9IGZ1bmN0aW9uKHRhcmdldCwgcHJvcCwgc3RhcnQsIGVuZCwgb3ZlcndyaXRlUHJvcCwgcm91bmQpIHtcblx0XHRcdHZhciBjLCBwdDtcblx0XHRcdGlmIChlbmQgIT0gbnVsbCAmJiAoYyA9ICh0eXBlb2YoZW5kKSA9PT0gXCJudW1iZXJcIiB8fCBlbmQuY2hhckF0KDEpICE9PSBcIj1cIikgPyBOdW1iZXIoZW5kKSAtIHN0YXJ0IDogcGFyc2VJbnQoZW5kLmNoYXJBdCgwKSArIFwiMVwiLCAxMCkgKiBOdW1iZXIoZW5kLnN1YnN0cigyKSkpKSB7XG5cdFx0XHRcdHRoaXMuX2ZpcnN0UFQgPSBwdCA9IHtfbmV4dDp0aGlzLl9maXJzdFBULCB0OnRhcmdldCwgcDpwcm9wLCBzOnN0YXJ0LCBjOmMsIGY6KHR5cGVvZih0YXJnZXRbcHJvcF0pID09PSBcImZ1bmN0aW9uXCIpLCBuOm92ZXJ3cml0ZVByb3AgfHwgcHJvcCwgcjpyb3VuZH07XG5cdFx0XHRcdGlmIChwdC5fbmV4dCkge1xuXHRcdFx0XHRcdHB0Ll9uZXh0Ll9wcmV2ID0gcHQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHB0O1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRwLnNldFJhdGlvID0gZnVuY3Rpb24odikge1xuXHRcdFx0dmFyIHB0ID0gdGhpcy5fZmlyc3RQVCxcblx0XHRcdFx0bWluID0gMC4wMDAwMDEsXG5cdFx0XHRcdHZhbDtcblx0XHRcdHdoaWxlIChwdCkge1xuXHRcdFx0XHR2YWwgPSBwdC5jICogdiArIHB0LnM7XG5cdFx0XHRcdGlmIChwdC5yKSB7XG5cdFx0XHRcdFx0dmFsID0gTWF0aC5yb3VuZCh2YWwpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHZhbCA8IG1pbikgaWYgKHZhbCA+IC1taW4pIHsgLy9wcmV2ZW50cyBpc3N1ZXMgd2l0aCBjb252ZXJ0aW5nIHZlcnkgc21hbGwgbnVtYmVycyB0byBzdHJpbmdzIGluIHRoZSBicm93c2VyXG5cdFx0XHRcdFx0dmFsID0gMDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAocHQuZikge1xuXHRcdFx0XHRcdHB0LnRbcHQucF0odmFsKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRwdC50W3B0LnBdID0gdmFsO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHB0ID0gcHQuX25leHQ7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHAuX2tpbGwgPSBmdW5jdGlvbihsb29rdXApIHtcblx0XHRcdHZhciBhID0gdGhpcy5fb3ZlcndyaXRlUHJvcHMsXG5cdFx0XHRcdHB0ID0gdGhpcy5fZmlyc3RQVCxcblx0XHRcdFx0aTtcblx0XHRcdGlmIChsb29rdXBbdGhpcy5fcHJvcE5hbWVdICE9IG51bGwpIHtcblx0XHRcdFx0dGhpcy5fb3ZlcndyaXRlUHJvcHMgPSBbXTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGkgPSBhLmxlbmd0aDtcblx0XHRcdFx0d2hpbGUgKC0taSA+IC0xKSB7XG5cdFx0XHRcdFx0aWYgKGxvb2t1cFthW2ldXSAhPSBudWxsKSB7XG5cdFx0XHRcdFx0XHRhLnNwbGljZShpLCAxKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHdoaWxlIChwdCkge1xuXHRcdFx0XHRpZiAobG9va3VwW3B0Lm5dICE9IG51bGwpIHtcblx0XHRcdFx0XHRpZiAocHQuX25leHQpIHtcblx0XHRcdFx0XHRcdHB0Ll9uZXh0Ll9wcmV2ID0gcHQuX3ByZXY7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChwdC5fcHJldikge1xuXHRcdFx0XHRcdFx0cHQuX3ByZXYuX25leHQgPSBwdC5fbmV4dDtcblx0XHRcdFx0XHRcdHB0Ll9wcmV2ID0gbnVsbDtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMuX2ZpcnN0UFQgPT09IHB0KSB7XG5cdFx0XHRcdFx0XHR0aGlzLl9maXJzdFBUID0gcHQuX25leHQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHB0ID0gcHQuX25leHQ7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fTtcblxuXHRcdHAuX3JvdW5kUHJvcHMgPSBmdW5jdGlvbihsb29rdXAsIHZhbHVlKSB7XG5cdFx0XHR2YXIgcHQgPSB0aGlzLl9maXJzdFBUO1xuXHRcdFx0d2hpbGUgKHB0KSB7XG5cdFx0XHRcdGlmIChsb29rdXBbdGhpcy5fcHJvcE5hbWVdIHx8IChwdC5uICE9IG51bGwgJiYgbG9va3VwWyBwdC5uLnNwbGl0KHRoaXMuX3Byb3BOYW1lICsgXCJfXCIpLmpvaW4oXCJcIikgXSkpIHsgLy9zb21lIHByb3BlcnRpZXMgdGhhdCBhcmUgdmVyeSBwbHVnaW4tc3BlY2lmaWMgYWRkIGEgcHJlZml4IG5hbWVkIGFmdGVyIHRoZSBfcHJvcE5hbWUgcGx1cyBhbiB1bmRlcnNjb3JlLCBzbyB3ZSBuZWVkIHRvIGlnbm9yZSB0aGF0IGV4dHJhIHN0dWZmIGhlcmUuXG5cdFx0XHRcdFx0cHQuciA9IHZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHB0ID0gcHQuX25leHQ7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdFR3ZWVuTGl0ZS5fb25QbHVnaW5FdmVudCA9IGZ1bmN0aW9uKHR5cGUsIHR3ZWVuKSB7XG5cdFx0XHR2YXIgcHQgPSB0d2Vlbi5fZmlyc3RQVCxcblx0XHRcdFx0Y2hhbmdlZCwgcHQyLCBmaXJzdCwgbGFzdCwgbmV4dDtcblx0XHRcdGlmICh0eXBlID09PSBcIl9vbkluaXRBbGxQcm9wc1wiKSB7XG5cdFx0XHRcdC8vc29ydHMgdGhlIFByb3BUd2VlbiBsaW5rZWQgbGlzdCBpbiBvcmRlciBvZiBwcmlvcml0eSBiZWNhdXNlIHNvbWUgcGx1Z2lucyBuZWVkIHRvIHJlbmRlciBlYXJsaWVyL2xhdGVyIHRoYW4gb3RoZXJzLCBsaWtlIE1vdGlvbkJsdXJQbHVnaW4gYXBwbGllcyBpdHMgZWZmZWN0cyBhZnRlciBhbGwgeC95L2FscGhhIHR3ZWVucyBoYXZlIHJlbmRlcmVkIG9uIGVhY2ggZnJhbWUuXG5cdFx0XHRcdHdoaWxlIChwdCkge1xuXHRcdFx0XHRcdG5leHQgPSBwdC5fbmV4dDtcblx0XHRcdFx0XHRwdDIgPSBmaXJzdDtcblx0XHRcdFx0XHR3aGlsZSAocHQyICYmIHB0Mi5wciA+IHB0LnByKSB7XG5cdFx0XHRcdFx0XHRwdDIgPSBwdDIuX25leHQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICgocHQuX3ByZXYgPSBwdDIgPyBwdDIuX3ByZXYgOiBsYXN0KSkge1xuXHRcdFx0XHRcdFx0cHQuX3ByZXYuX25leHQgPSBwdDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Zmlyc3QgPSBwdDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKChwdC5fbmV4dCA9IHB0MikpIHtcblx0XHRcdFx0XHRcdHB0Mi5fcHJldiA9IHB0O1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRsYXN0ID0gcHQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHB0ID0gbmV4dDtcblx0XHRcdFx0fVxuXHRcdFx0XHRwdCA9IHR3ZWVuLl9maXJzdFBUID0gZmlyc3Q7XG5cdFx0XHR9XG5cdFx0XHR3aGlsZSAocHQpIHtcblx0XHRcdFx0aWYgKHB0LnBnKSBpZiAodHlwZW9mKHB0LnRbdHlwZV0pID09PSBcImZ1bmN0aW9uXCIpIGlmIChwdC50W3R5cGVdKCkpIHtcblx0XHRcdFx0XHRjaGFuZ2VkID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRwdCA9IHB0Ll9uZXh0O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGNoYW5nZWQ7XG5cdFx0fTtcblxuXHRcdFR3ZWVuUGx1Z2luLmFjdGl2YXRlID0gZnVuY3Rpb24ocGx1Z2lucykge1xuXHRcdFx0dmFyIGkgPSBwbHVnaW5zLmxlbmd0aDtcblx0XHRcdHdoaWxlICgtLWkgPiAtMSkge1xuXHRcdFx0XHRpZiAocGx1Z2luc1tpXS5BUEkgPT09IFR3ZWVuUGx1Z2luLkFQSSkge1xuXHRcdFx0XHRcdF9wbHVnaW5zWyhuZXcgcGx1Z2luc1tpXSgpKS5fcHJvcE5hbWVdID0gcGx1Z2luc1tpXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fTtcblxuXHRcdC8vcHJvdmlkZXMgYSBtb3JlIGNvbmNpc2Ugd2F5IHRvIGRlZmluZSBwbHVnaW5zIHRoYXQgaGF2ZSBubyBkZXBlbmRlbmNpZXMgYmVzaWRlcyBUd2VlblBsdWdpbiBhbmQgVHdlZW5MaXRlLCB3cmFwcGluZyBjb21tb24gYm9pbGVycGxhdGUgc3R1ZmYgaW50byBvbmUgZnVuY3Rpb24gKGFkZGVkIGluIDEuOS4wKS4gWW91IGRvbid0IE5FRUQgdG8gdXNlIHRoaXMgdG8gZGVmaW5lIGEgcGx1Z2luIC0gdGhlIG9sZCB3YXkgc3RpbGwgd29ya3MgYW5kIGNhbiBiZSB1c2VmdWwgaW4gY2VydGFpbiAocmFyZSkgc2l0dWF0aW9ucy5cblx0XHRfZ3NEZWZpbmUucGx1Z2luID0gZnVuY3Rpb24oY29uZmlnKSB7XG5cdFx0XHRpZiAoIWNvbmZpZyB8fCAhY29uZmlnLnByb3BOYW1lIHx8ICFjb25maWcuaW5pdCB8fCAhY29uZmlnLkFQSSkgeyB0aHJvdyBcImlsbGVnYWwgcGx1Z2luIGRlZmluaXRpb24uXCI7IH1cblx0XHRcdHZhciBwcm9wTmFtZSA9IGNvbmZpZy5wcm9wTmFtZSxcblx0XHRcdFx0cHJpb3JpdHkgPSBjb25maWcucHJpb3JpdHkgfHwgMCxcblx0XHRcdFx0b3ZlcndyaXRlUHJvcHMgPSBjb25maWcub3ZlcndyaXRlUHJvcHMsXG5cdFx0XHRcdG1hcCA9IHtpbml0OlwiX29uSW5pdFR3ZWVuXCIsIHNldDpcInNldFJhdGlvXCIsIGtpbGw6XCJfa2lsbFwiLCByb3VuZDpcIl9yb3VuZFByb3BzXCIsIGluaXRBbGw6XCJfb25Jbml0QWxsUHJvcHNcIn0sXG5cdFx0XHRcdFBsdWdpbiA9IF9jbGFzcyhcInBsdWdpbnMuXCIgKyBwcm9wTmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3BOYW1lLnN1YnN0cigxKSArIFwiUGx1Z2luXCIsXG5cdFx0XHRcdFx0ZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRUd2VlblBsdWdpbi5jYWxsKHRoaXMsIHByb3BOYW1lLCBwcmlvcml0eSk7XG5cdFx0XHRcdFx0XHR0aGlzLl9vdmVyd3JpdGVQcm9wcyA9IG92ZXJ3cml0ZVByb3BzIHx8IFtdO1xuXHRcdFx0XHRcdH0sIChjb25maWcuZ2xvYmFsID09PSB0cnVlKSksXG5cdFx0XHRcdHAgPSBQbHVnaW4ucHJvdG90eXBlID0gbmV3IFR3ZWVuUGx1Z2luKHByb3BOYW1lKSxcblx0XHRcdFx0cHJvcDtcblx0XHRcdHAuY29uc3RydWN0b3IgPSBQbHVnaW47XG5cdFx0XHRQbHVnaW4uQVBJID0gY29uZmlnLkFQSTtcblx0XHRcdGZvciAocHJvcCBpbiBtYXApIHtcblx0XHRcdFx0aWYgKHR5cGVvZihjb25maWdbcHJvcF0pID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHRwW21hcFtwcm9wXV0gPSBjb25maWdbcHJvcF07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdFBsdWdpbi52ZXJzaW9uID0gY29uZmlnLnZlcnNpb247XG5cdFx0XHRUd2VlblBsdWdpbi5hY3RpdmF0ZShbUGx1Z2luXSk7XG5cdFx0XHRyZXR1cm4gUGx1Z2luO1xuXHRcdH07XG5cblxuXHRcdC8vbm93IHJ1biB0aHJvdWdoIGFsbCB0aGUgZGVwZW5kZW5jaWVzIGRpc2NvdmVyZWQgYW5kIGlmIGFueSBhcmUgbWlzc2luZywgbG9nIHRoYXQgdG8gdGhlIGNvbnNvbGUgYXMgYSB3YXJuaW5nLiBUaGlzIGlzIHdoeSBpdCdzIGJlc3QgdG8gaGF2ZSBUd2VlbkxpdGUgbG9hZCBsYXN0IC0gaXQgY2FuIGNoZWNrIGFsbCB0aGUgZGVwZW5kZW5jaWVzIGZvciB5b3UuXG5cdFx0YSA9IHdpbmRvdy5fZ3NRdWV1ZTtcblx0XHRpZiAoYSkge1xuXHRcdFx0Zm9yIChpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0YVtpXSgpO1xuXHRcdFx0fVxuXHRcdFx0Zm9yIChwIGluIF9kZWZMb29rdXApIHtcblx0XHRcdFx0aWYgKCFfZGVmTG9va3VwW3BdLmZ1bmMpIHtcblx0XHRcdFx0XHR3aW5kb3cuY29uc29sZS5sb2coXCJHU0FQIGVuY291bnRlcmVkIG1pc3NpbmcgZGVwZW5kZW5jeTogY29tLmdyZWVuc29jay5cIiArIHApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0X3RpY2tlckFjdGl2ZSA9IGZhbHNlOyAvL2Vuc3VyZXMgdGhhdCB0aGUgZmlyc3Qgb2ZmaWNpYWwgYW5pbWF0aW9uIGZvcmNlcyBhIHRpY2tlci50aWNrKCkgdG8gdXBkYXRlIHRoZSB0aW1lIHdoZW4gaXQgaXMgaW5zdGFudGlhdGVkXG5cbn0pKCh0eXBlb2YobW9kdWxlKSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBtb2R1bGUuZXhwb3J0cyAmJiB0eXBlb2YoZ2xvYmFsKSAhPT0gXCJ1bmRlZmluZWRcIikgPyBnbG9iYWwgOiB0aGlzIHx8IHdpbmRvdywgXCJUd2Vlbk1heFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9nc2FwL3NyYy91bmNvbXByZXNzZWQvVHdlZW5NYXguanNcbiAqKiBtb2R1bGUgaWQgPSA0NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIiLCJmaWxlIjoiZGVtby1nc2FwLmpzIn0=
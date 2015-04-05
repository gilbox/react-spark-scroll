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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9kZW1vLWdzYXAvYXBwLmpzIiwid2VicGFjazovLy8uL2V4YW1wbGVzL2RlbW8tZ3NhcC9hcHAtc3BhcmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwYXJrLXNjcm9sbC1nc2FwLmpzIiwid2VicGFjazovLy8uL3NyYy9nc2FwLWFuaW1hdG9yLmpzIiwid2VicGFjazovLy8uL34vZ3NhcC9zcmMvdW5jb21wcmVzc2VkL1R3ZWVuTWF4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxLQUFJLEtBQUssR0FBRyxtQkFBTyxDQUFDLENBQU8sQ0FBQyxDQUFDO0FBQzdCLEtBQUksZUFBZSxHQUFHLG1CQUFPLENBQUMsQ0FBYyxDQUFDLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQzs7Z0JBQ3JDLG1CQUFPLENBQUMsQ0FBYSxDQUFDOztLQUFqRCxXQUFXLFlBQVgsV0FBVztLQUFFLFVBQVUsWUFBVixVQUFVOztBQUM1QixLQUFJLEVBQUUsR0FBRyxtQkFBTyxDQUFDLENBQVksQ0FBQyxDQUFDOztBQUUvQixLQUFJLElBQUksR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDOzs7QUFDM0IsU0FBTSxFQUFFLENBQUMsZUFBZSxDQUFDOztBQUV6QixrQkFBZSw2QkFBRztBQUNoQixZQUFPO0FBQ0wsdUJBQWdCLEVBQUUsQ0FBQztNQUNwQjtJQUNGOztBQUVELG9CQUFpQiwrQkFBRzs7QUFFbEIsU0FBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ2xELFNBQUksTUFBTSxHQUFHLEVBQUMsQ0FBRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDdEMsU0FBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUM7QUFDM0IsU0FBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsTUFBTSxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUM7SUFDcEQ7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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQ0FBcUMsb09BQW9PO0FBQ3pROztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQkFBMEI7QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBLEdBQUU7Ozs7Ozs7OztBQVNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW1ELEtBQUs7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQSw2Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKLDBCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxnQkFBZSxTQUFTO0FBQ3hCO0FBQ0EsS0FBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQkFBOEIsNklBQTZJO0FBQzNLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWMsb0JBQW9CO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQixPQUFPO0FBQ3ZCO0FBQ0Esa0NBQWlDLGFBQWE7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxNQUFLO0FBQ0w7QUFDQSxNQUFLO0FBQ0wsd0RBQXVEO0FBQ3ZEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBc0Q7QUFDdEQ7QUFDQTtBQUNBLHlDQUF3QztBQUN4QyxPQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdEQUF1RCxLQUFLO0FBQzVELHVCQUFzQjtBQUN0QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3R0FBdUc7QUFDdkc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBeUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxSEFBb0g7QUFDcEgsOEJBQTZCOztBQUU3QixLQUFJLDZCQUE2QjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUErRDtBQUMvRDtBQUNBO0FBQ0EsT0FBTSxrREFBa0Q7QUFDeEQ7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLHNIQUFxSDtBQUNySCxxQ0FBb0MsNFhBQTRYLE1BQU0sY0FBYyxNQUFNO0FBQzFiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQSx5QkFBd0I7QUFDeEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlCQUF3QjtBQUN4Qix3Q0FBdUM7QUFDdkM7QUFDQSxPQUFNO0FBQ047QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQSx5QkFBd0I7QUFDeEIsd0NBQXVDO0FBQ3ZDO0FBQ0EsT0FBTTtBQUNOO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9LQUFtSztBQUNuSztBQUNBLCtCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQXlCO0FBQ3pCO0FBQ0EsOEJBQTZCO0FBQzdCO0FBQ0Esa0ZBQWlGO0FBQ2pGO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQSxvREFBbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLEdBQUU7Ozs7Ozs7Ozs7Ozs7O0FBY0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWUsbUVBQW1FO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdFQUF1RTtBQUN2RTtBQUNBO0FBQ0Esd0JBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQXlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUhBQW9IO0FBQ3BIO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSwwQkFBeUI7QUFDekI7O0FBRUEsS0FBSSw2QkFBNkI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5SkFBd0o7QUFDeEo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU0sZ0RBQWdEO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCwyR0FBMEc7QUFDMUcscUNBQW9DLDRYQUE0WCxNQUFNLGNBQWMsTUFBTTtBQUMxYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUk7QUFDSiw0Q0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBMkQ7QUFDM0Q7QUFDQSxzQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBMkI7QUFDM0IsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsMkJBQTBCOztBQUUxQjtBQUNBO0FBQ0EseUJBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBLHlCQUF3QjtBQUN4Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUJBQXdCO0FBQ3hCLHdDQUF1QztBQUN2QztBQUNBLE9BQU07QUFDTjtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQSx5QkFBd0I7QUFDeEIsd0NBQXVDO0FBQ3ZDO0FBQ0EsT0FBTTtBQUNOO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUxBQXNMO0FBQ3RMO0FBQ0EsK0JBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsZ0NBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0RBQXFEO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsR0FBRTs7Ozs7Ozs7Ozs7OztBQWFGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBLGVBQWMsSUFBSTtBQUNsQixhQUFZO0FBQ1osYUFBWTtBQUNaLFlBQVcsSUFBSTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU07QUFDTixtREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBFQUF5RTtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0EsaUJBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFrQixPQUFPO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRFQUEyRTtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBLGlCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFvRCw2QkFBNkI7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFZO0FBQ1osS0FBSTs7OztBQUlKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUIsT0FBTztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUF5RDtBQUN6RDtBQUNBLE9BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBeUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFRO0FBQ1IsMERBQXlEO0FBQ3pEO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF3RDtBQUN4RDtBQUNBO0FBQ0EsU0FBUTtBQUNSLHlEQUF3RDtBQUN4RDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVCQUFzQjtBQUN0QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxXQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0EsZ0NBQStCO0FBQy9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBcUQ7QUFDckQ7QUFDQSxXQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUU7Ozs7Ozs7Ozs7Ozs7OztBQWVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFpRDtBQUNqRCxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYLDBCQUF5Qjs7O0FBR3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWdDLHdCQUF3QixFQUFFO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBLHlDQUF3Qyw0QkFBNEI7QUFDcEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBc0IsR0FBRyxRQUFRLEdBQUcsMkNBQTJDLEdBQUcsUUFBUSxHQUFHO0FBQzdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBK0IsWUFBWTtBQUMzQztBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0EsS0FBSTtBQUNKLHdCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQSxLQUFJOztBQUVKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJOztBQUVKLDRGQUEyRjs7QUFFM0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFjLFFBQVE7QUFDdEIsZUFBYyxRQUFRO0FBQ3RCLGVBQWMsUUFBUTtBQUN0QixlQUFjLFNBQVM7QUFDdkIsZUFBYyxRQUFRO0FBQ3RCLGdCQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0Esa0RBQWlEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUk7O0FBRUo7QUFDQTtBQUNBLGVBQWMsUUFBUTtBQUN0QixlQUFjLFFBQVE7QUFDdEIsZUFBYyxRQUFRO0FBQ3RCLGVBQWMsUUFBUTtBQUN0QixlQUFjLFNBQVM7QUFDdkIsZ0JBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0EsZ0NBQStCLFVBQVU7QUFDekMsZ0NBQStCLFVBQVU7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsMENBQXlDLDBDQUEwQyxjQUFjO0FBQ2pHO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQWtEO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLE9BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0osd0VBQXVFO0FBQ3ZFLHVEQUFzRCxVQUFVO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBLEtBQUk7O0FBRUo7QUFDQTtBQUNBLGVBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0VBQXVFO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBLE9BQU0sT0FBTztBQUNiO0FBQ0Esb0VBQW1FO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJOztBQUVKO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4TkFBNk47QUFDN04sb0NBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQVk7QUFDWixLQUFJO0FBQ0osbUJBQWtCLGdEQUFnRDtBQUNsRTs7QUFFQTtBQUNBO0FBQ0EsZUFBYyxRQUFRO0FBQ3RCLGVBQWMsUUFBUTtBQUN0QixlQUFjLFFBQVE7QUFDdEIsZ0JBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTs7QUFFSjtBQUNBO0FBQ0Esc0VBQXFFO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxvRkFBbUY7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJOztBQUVKO0FBQ0E7QUFDQSxlQUFjLGdCQUFnQjtBQUM5QixlQUFjLGdCQUFnQjtBQUM5QixnQkFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLEtBQUk7O0FBRUo7QUFDQTtBQUNBLGVBQWMsT0FBTztBQUNyQixlQUFjLFFBQVE7QUFDdEIsZ0JBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQSxLQUFJOztBQUVKO0FBQ0E7QUFDQSxlQUFjLE9BQU87QUFDckIsZUFBYyxRQUFRO0FBQ3RCLGVBQWMsUUFBUTtBQUN0QixlQUFjLFFBQVE7QUFDdEIsZ0JBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTs7QUFFSixvQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWdDOztBQUVoQztBQUNBO0FBQ0E7QUFDQSxLQUFJOztBQUVKO0FBQ0E7QUFDQSxlQUFjLGdCQUFnQjtBQUM5QixnQkFBZSxlQUFlO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0osc0VBQXFFOztBQUVyRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYSxRQUFRO0FBQ3JCLGNBQWEsU0FBUztBQUN0QixjQUFhLFNBQVMsZ0tBQWdLO0FBQ3RMLGVBQWMsU0FBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQSwwQkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsbUJBQWtCLGNBQWM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFNO0FBQ047QUFDQSxrQkFBaUIsY0FBYztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTs7QUFFSjtBQUNBO0FBQ0EsZUFBYyxRQUFRO0FBQ3RCLGdCQUFlLFNBQVM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0IsT0FBTztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBLG1CQUFrQixVQUFVO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTs7QUFFSjtBQUNBO0FBQ0EsZUFBYyxRQUFRO0FBQ3RCLGVBQWMsUUFBUTtBQUN0QixlQUFjLHVCQUF1QjtBQUNyQyxlQUFjLGVBQWU7QUFDN0IsZUFBYyxTQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTs7QUFFSjtBQUNBLHdnQkFBdWdCO0FBQ3ZnQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBYyxRQUFRO0FBQ3RCLGVBQWMsaUJBQWlCO0FBQy9CLGVBQWMsV0FBVztBQUN6QixlQUFjLGNBQWM7QUFDNUIsZUFBYyxhQUFhO0FBQzNCLGVBQWMsU0FBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFlO0FBQ2YsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFZO0FBQ1osS0FBSTs7OztBQUlKO0FBQ0E7QUFDQTtBQUNBLDhMQUE2TDtBQUM3TDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWMsUUFBUTtBQUN0QixlQUFjLE9BQU87QUFDckIsZUFBYyxPQUFPO0FBQ3JCLGVBQWMsT0FBTztBQUNyQixlQUFjLGNBQWM7QUFDNUIsZUFBYyxRQUFRO0FBQ3RCLGVBQWMsUUFBUTtBQUN0QixlQUFjLFNBQVM7QUFDdkIsZUFBYyxRQUFRO0FBQ3RCLGVBQWMsUUFBUTtBQUN0QixlQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBLGdCQUFlO0FBQ2YsZ0JBQWU7QUFDZixnQkFBZTtBQUNmLGdCQUFlO0FBQ2YscUJBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLGdCQUFlO0FBQ2YsMkJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQSx5YkFBd2IsOENBQThDO0FBQ3RlO0FBQ0E7QUFDQSxlQUFjLFFBQVE7QUFDdEIsZUFBYyxRQUFRO0FBQ3RCLGVBQWMsT0FBTztBQUNyQixlQUFjLE9BQU87QUFDckIsZUFBYyxRQUFRO0FBQ3RCLGVBQWMsdUJBQXVCO0FBQ3JDLGVBQWMsY0FBYztBQUM1QixlQUFjLFFBQVE7QUFDdEIsZUFBYyxhQUFhLDhYQUE4WDtBQUN6WixlQUFjLGtCQUFrQjtBQUNoQyxnQkFBZSxhQUFhO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTTtBQUNOLDJEQUEwRDtBQUMxRDtBQUNBO0FBQ0E7QUFDQSxzREFBcUQ7QUFDckQ7QUFDQTtBQUNBLFFBQU87QUFDUCxnQ0FBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTTtBQUNOLGlDQUFnQzs7QUFFaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBTztBQUNQLHFDQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CLG1CQUFtQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0IsVUFBVTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7OztBQUdBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhLFFBQVE7QUFDckIsY0FBYSxRQUFRO0FBQ3JCLGNBQWEsUUFBUTtBQUNyQixjQUFhLFFBQVE7QUFDckIsY0FBYSxTQUFTO0FBQ3RCLGNBQWEsU0FBUztBQUN0QixlQUFjLGFBQWE7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLHdCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQSxlQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFhLFFBQVE7QUFDckIsY0FBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFlLGNBQWM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQSxjQUFhLFFBQVE7QUFDckIsY0FBYSx1QkFBdUI7QUFDcEMsY0FBYSx1QkFBdUI7QUFDcEMsY0FBYSxjQUFjO0FBQzNCLGNBQWEsYUFBYTtBQUMxQixjQUFhLFVBQVU7QUFDdkIsZUFBYyxjQUFjO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXVCO0FBQ3ZCO0FBQ0EsU0FBUSxzQkFBc0I7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhLFFBQVE7QUFDckIsY0FBYSxPQUFPO0FBQ3BCLGNBQWEsUUFBUTtBQUNyQixjQUFhLFdBQVc7QUFDeEIsY0FBYSxjQUFjO0FBQzNCLGNBQWEsYUFBYTtBQUMxQixjQUFhLFFBQVE7QUFDckIsZUFBYyxhQUFhO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsZ0NBQStCLEtBQUssa0JBQWtCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLGNBQWEsUUFBUSxzUEFBc1AsS0FBSyxrQkFBa0I7QUFDbFMsY0FBYSwyREFBMkQ7QUFDeEUsY0FBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQSx1Q0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJLG9CQUFvQjtBQUN4Qjs7Ozs7OztBQU9BO0FBQ0EsNkNBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQXlDO0FBQ3pDO0FBQ0Esc0NBQXFDLDRCQUE0QjtBQUNqRTtBQUNBO0FBQ0E7QUFDQSw2RkFBNEY7QUFDNUY7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJOztBQUVKO0FBQ0E7QUFDQSxlQUFjLFFBQVE7QUFDdEIsZUFBYyxRQUFRO0FBQ3RCLGVBQWMsU0FBUyw2SEFBNkg7QUFDcEosZUFBYyxTQUFTO0FBQ3ZCLGdCQUFlLE9BQU8sZ0VBQWdFO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBLDRCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0pBQWlKO0FBQ2pKO0FBQ0EsaUZBQWdGO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF3RDtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhGQUE2RjtBQUM3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0ZBQW1GO0FBQ25GO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTSwwTEFBMEwsK1hBQStYLEtBQUssOEJBQThCLDRDQUE0QyxLQUFLLGFBQWE7QUFDaHFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRFQUEyRTtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBeUI7QUFDekIsbUJBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsdUJBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsdUNBQXNDO0FBQ3RDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0IsT0FBTztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW1EO0FBQ25ELFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnUUFBK1A7O0FBRS9QO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBK0Q7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBSywyRUFBMkU7QUFDaEY7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUU7Ozs7Ozs7Ozs7O0FBV0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRTs7Ozs7Ozs7Ozs7O0FBWUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSiw0Q0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxNQUFLLG9CQUFvQjtBQUN6QjtBQUNBO0FBQ0EsTUFBSyxPQUFPO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQSxLQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBLE1BQUs7QUFDTDtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKLElBQUc7O0FBRUg7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEJBQXlCO0FBQ3pCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkVBQTBFO0FBQzFFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF3QixLQUFLO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBLDBFQUF5RSxLQUFLO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBa0Q7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9IQUFtSDtBQUNuSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzREFBcUQ7QUFDckQ7QUFDQTtB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QTtBQUNBO0FBQ0EsMkNBQTBDO0FBQzFDO0FBQ0E7QUFDQSw0QkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVDQUFzQyxnUEFBZ1A7QUFDdFI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXdCLFdBQVc7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUssc0NBQXNDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyR0FBMEc7QUFDMUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUVBQW9FLG9DQUFvQztBQUN4RztBQUNBO0FBQ0E7QUFDQSxZQUFXLGtHQUFrRztBQUM3RztBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsZUFBYyxjQUFjO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXdCOztBQUV4QixFQUFDLDhIIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBQdXJlUmVuZGVyTWl4aW4gPSByZXF1aXJlKCdyZWFjdC9hZGRvbnMnKS5hZGRvbnMuUHVyZVJlbmRlck1peGluO1xudmFyIHtTcGFya1Njcm9sbCwgU3BhcmtQcm94eX0gPSByZXF1aXJlKCcuL2FwcC1zcGFyaycpO1xudmFyIGN4ID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgSGVybyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgbWl4aW5zOiBbUHVyZVJlbmRlck1peGluXSxcblxuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0cm9rZURhc2hPZmZzZXQ6IDBcbiAgICB9XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gaW5pdGlhbGl6ZSBzdmdcbiAgICB2YXIgbm9kZSA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmcy5zcGFya1BhdGgpO1xuICAgIHZhciBsZW5ndGggPSB+fiBub2RlLmdldFRvdGFsTGVuZ3RoKCk7XG4gICAgdGhpcy5vZmZzZXRUYXJnZXQgPSBsZW5ndGg7XG4gICAgbm9kZS5zdHlsZS5zdHJva2VEYXNoYXJyYXkgPSBsZW5ndGggKyAnICcgKyBsZW5ndGg7XG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8U3BhcmtQcm94eS5kaXYgcHJveHlJZD1cImhlcm9cIiBjbGFzc05hbWU9XCJoZXJvXCI+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZ2lsYm94L3JlYWN0LXNwYXJrLXNjcm9sbFwiPlxuICAgICAgICAgIDxTcGFya1Njcm9sbC5oMVxuICAgICAgICAgICAgcHJveHk9XCJoZXJvXCJcbiAgICAgICAgICAgIHRpbWVsaW5lPXt7XG4gICAgICAgICAgICAgIHRvcFRvcDogeyBvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwcHgsMTUwcHgsMHB4KScgfSxcbiAgICAgICAgICAgICAgJ3RvcFRvcCsyMDAnOiB7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDBweCwxMDBweCwwcHgpJyB9XG4gICAgICAgICAgICB9fT5cblxuICAgICAgICAgICAgPFNwYXJrU2Nyb2xsLnNwYW5cbiAgICAgICAgICAgICAgcHJveHk9XCJoZXJvXCJcbiAgICAgICAgICAgICAgY2FsbGJhY2s9eyByYXRpbyA9PiB0aGlzLnNldFN0YXRlKHtzdHJva2VEYXNob2Zmc2V0OiB+fih0aGlzLm9mZnNldFRhcmdldCpyYXRpbyl9KSB9XG4gICAgICAgICAgICAgIHRpbWVsaW5lPXt7dG9wVG9wOjAsICd0b3BUb3ArMTUwJzowfX0+XG5cbiAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjI5NnB4XCIgaGVpZ2h0PVwiMjI4cHhcIiB2aWV3Qm94PVwiMCAwIDI5NiAyMjhcIiB2ZXJzaW9uPVwiMS4xXCI+XG4gICAgICAgICAgICAgICAgPGcgaWQ9XCJQYWdlLTFcIiBzdHJva2U9XCJub25lXCIgc3Ryb2tlV2lkdGg9XCIxXCIgZmlsbD1cIm5vbmVcIiBmaWxsUnVsZT1cImV2ZW5vZGRcIj5cbiAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIHJlZj1cInNwYXJrUGF0aFwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7c3Ryb2tlRGFzaG9mZnNldDogdGhpcy5zdGF0ZS5zdHJva2VEYXNob2Zmc2V0fX1cbiAgICAgICAgICAgICAgICAgICAgZD1cIk00My43Nzc0NDQyLDcxLjQ4OTg0OTUgQzY4LjEyMjM4NjEsMTMuOTgxNTAzMiAyLjE5NDU0Mzk3LDQ4LjA0MDcyMjMgMjEuNjc4MjI4Niw2Mi42NDg5MjA3IEMzNS42NjQzOTQ1LDczLjEzNTI2ODIgNTguOTA5Njg4Miw3MC43NzQ3Nzg5IDY1Ljg3NjY1OTgsOTAuMjc3NTk5OSBDODEuMzI2NjA5NCwxMzMuNTI3MDM3IDU4LjczMDU0NjYsMTkxLjM4NjAxNiA4Ljk2NjY3NTI0LDE5MS4zODYwMTYgQy0yMS43ODY3Mjc4LDEyNC40MTkyMjYgNTguNTE2NTUwNSw5NS4wNjA0NDA5IDEwNS42NTc3MzMsNzEuNDg5ODQ5NSBDMTExLjU4NzAxOSw2OC41MjUyMDY1IDEwNi44NDM3ODYsODQuODU1MTAwNiAxMDUuNjU3NzMzLDkxLjM3NzI3OTcgQzk5LjYxMjM5NjUsMTI0LjYyMDk2NyA5MS41MjE0NDExLDE1Ny40NzczMyA4NS43NzAzMDI5LDE5MC44MzMwNjkgQzg0Ljg2ODU3NjQsMTk2LjA2Mjk0OCA4MS42Mjc0NjQyLDIxNC44MjkyOTkgODAuNzkzNzg1NywyMjIuMzI2MTYgQzgwLjY3MTU1OTgsMjIzLjQyNTI3OCA4MC43OTM3ODU3LDIyNi43NDk3MzEgODAuNzkzNzg1NywyMjUuNjQzODM4IEM4MC43OTM3ODU3LDE3OC4xOTAyMyA4MC4wNTM1OTEyLDEzMi45Nzk3NjQgOTIuMzk5NDQ2Myw4Ni42NzQxMjkzIEM5My44MTEzNDA1LDgxLjM3ODUzMzQgMTA4LjMwNTk0LDM5Ljc2ODU3MzggMTI0Ljk5ODQzLDU0LjA3NTE0NTcgQzE1Ni43NTI1OTUsODEuMjkwNTczNSA5Mi41NzI0NDQxLDkzLjQ3MDI5MzYgMTIxLjEyNzgwNSw5Ni4wNjgwMDQ0IEMxMjguMjgyNDIyLDk2LjcxODg2NzQgMTM1LjY1NTQ2LDk3LjU3MjY1MjkgMTQyLjY4MDI4Nyw5Ni4wNjgwMDQ0IEMxNDguNzM2NDYyLDk0Ljc3MDgzMTggMTg3LjEwODY2NSw3MS40NDAyMTY1IDE3NS4yNzMwNTgsNTkuNjA0NjA5MyBDMTU5Ljc2ODQxNCw0NC4wOTk5NjUyIDE0Ny4wODQ3OTgsODkuMjk4OTY1OCAxNTIuMDY3OTUsOTAuNTQ0NzUzOCBDMTY3LjMwNDY3OSw5NC4zNTM5MzYyIDE2My40OTg4NTEsNzIuMzA5OTQ5OCAxNzEuNDA4NjQ2LDcyLjMwOTk0OTggQzE3NS40MzIxNjUsNzIuMzA5OTQ5OCAxNzAuOTA5NzU3LDgyLjY0MTgzMDggMTc0LjcyNjMyNSw4My45MTU2MTA0IEMxODguMTA4OTM4LDg4LjM4MjA1NzcgMjAwLjY3MjE3Miw3Mi4zNTY4NzUzIDIwNi43NzIzNjIsNjYuMjMzNzUyNyBDMjA3LjkwMDI0OCw2NS4xMDE2MjU4IDIwNi40MjM1ODksOTEuMjcyNzM1NyAyMTYuMTYwMDI0LDg2LjEyMTE4MjkgQzIyNS4xNDgwOTYsODEuMzY1NTg5MyAyMzIuMTA3NjYxLDY2LjgyNTIwODkgMjM2LjA1MzY2Nyw1Ny45NDU3NzAyIEMyMzguNzUyODgyLDUxLjg3MTkwNDEgMjUzLjQ4NjI0LDEuNTg4NzMyMDMgMjQ2LjU1MzQzNSwxLjU4ODczMjAzIEMyNDEuMTM3Njk3LDEuNTg4NzMyMDMgMjI4Ljk0NDgwOCw5NC45MDk4NjQ2IDIyMy4zNDIxMTQsMTAwLjQ5MTU3NSBDMjE4LjA5MjI3MywxMDUuNzIxNzU0IDI0Ny42OTA5NjcsMzguNTkyOTgzMSAyNjAuMzY0NjY4LDQxLjM2OTgwNTMgQzI3OC4xMTE2MjUsNDUuMjU4MTgzNSAyMzEuNzQxNzYxLDY1Ljg0OTA1NjMgMjMwLjUzMDQxNiw2OS40ODMwODkyIEMyMjkuNjk2NjcsNzEuOTg0MzI4IDIzNS43NDU0MjcsNzAuMzYwNjAyMyAyMzguMjY1NDUzLDcxLjEzNTcxNTQgQzI2MC4wNTQxNzEsNzcuODM3NTIwNyAyODQuMzQ1Mzc3LDk2LjQ0NDk3MTYgMjk0LjYyMjQ5MSwxMTYuOTk5MTk5XCIgaWQ9XCJQYXRoLTEzXCIgc3Ryb2tlPVwiIzM4MjUxM1wiIHN0cm9rZVdpZHRoPVwiM1wiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuXG4gICAgICAgICAgICA8L1NwYXJrU2Nyb2xsLnNwYW4+XG4gICAgICAgICAgPC9TcGFya1Njcm9sbC5oMT5cbiAgICAgICAgPC9hPlxuXG4gICAgICAgIDxTcGFya1Njcm9sbC5kaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJkb3duLWFycm93XCJcbiAgICAgICAgICBwcm94eT1cImhlcm9cIlxuICAgICAgICAgIHRpbWVsaW5lPXt7XG4gICAgICAgICAgICB0b3BUb3A6IHtvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwcHgsMHB4LDBweCknfSxcbiAgICAgICAgICAgICd0b3BUb3ArMjAwJzoge29wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDBweCwtMTUwcHgsMHB4KSd9XG4gICAgICAgICAgfX0+djwvU3BhcmtTY3JvbGwuZGl2PlxuICAgICAgPC9TcGFya1Byb3h5LmRpdj5cbiAgICApXG4gIH1cbn0pO1xuXG52YXIgQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBtaXhpbnM6IFtQdXJlUmVuZGVyTWl4aW5dLFxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYWN0aW9uVHlwZTogbnVsbCxcbiAgICAgIHRleHQ6ICdzbGlkZScsXG4gICAgICB1bnBpbkhpZGU6IGZhbHNlLFxuICAgICAgc2xpZGVIaWRlOiB0cnVlLFxuICAgICAgcGluUGluOiBmYWxzZSxcbiAgICAgIHBpblVucGluOiBmYWxzZVxuICAgIH1cbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3R5bGVzID0ge1xuICAgICAgbWluSGVpZ2h0Oic1MDAwcHgnXG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZXN9PlxuXG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZ2lsYm94L3NwYXJrLXNjcm9sbFwiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHN0eWxlPXt7cG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogMCwgcmlnaHQ6IDAsIGJvcmRlcjogMH19XG4gICAgICAgICAgICBzcmM9XCJodHRwczovL2NhbW8uZ2l0aHVidXNlcmNvbnRlbnQuY29tL2U3YmJiMDUyMWIzOTdlZGJkNWZlNDNlN2Y3NjA3NTkzMzZiNWUwNWYvNjg3NDc0NzA3MzNhMmYyZjczMzMyZTYxNmQ2MTdhNmY2ZTYxNzc3MzJlNjM2ZjZkMmY2NzY5NzQ2ODc1NjIyZjcyNjk2MjYyNmY2ZTczMmY2NjZmNzI2YjZkNjU1ZjcyNjk2NzY4NzQ1ZjY3NzI2NTY1NmU1ZjMwMzAzNzMyMzAzMDJlNzA2ZTY3XCJcbiAgICAgICAgICAgIGFsdD1cIkZvcmsgbWUgb24gR2l0SHViXCJcbiAgICAgICAgICAgIGRhdGFDYW5vbmljYWxTcmM9XCJodHRwczovL3MzLmFtYXpvbmF3cy5jb20vZ2l0aHViL3JpYmJvbnMvZm9ya21lX3JpZ2h0X2dyZWVuXzAwNzIwMC5wbmdcIiAvPjwvYT5cblxuICAgICAgICA8SGVybyAvPlxuXG4gICAgICAgIHsvKiBmYWRlICovfVxuICAgICAgICA8U3BhcmtTY3JvbGwuaDJcbiAgICAgICAgICB0aW1lbGluZT17e1xuICAgICAgICAgICAgdG9wQm90dG9tOiB7b3BhY2l0eTogMH0sXG4gICAgICAgICAgICBjZW50ZXJDZW50ZXI6IHtvcGFjaXR5OiAxfVxuICAgICAgICAgIH19PmZhZGU8L1NwYXJrU2Nyb2xsLmgyPlxuXG4gICAgICAgIHsvKiBtb3ZlICovfVxuICAgICAgICA8U3BhcmtTY3JvbGwuaDJcbiAgICAgICAgICB0aW1lbGluZT17e1xuICAgICAgICAgICAgdG9wQm90dG9tOiB7IG1hcmdpbkxlZnQ6ICctNTAwcHgnLCBvcGFjaXR5OiAwIH0sXG4gICAgICAgICAgICBjZW50ZXJDZW50ZXI6IHsgbWFyZ2luTGVmdDogJzBweCcsIG9wYWNpdHk6IDEsIGVhc2U6ICdlYXNlT3V0RWxhc3RpYycgfVxuICAgICAgICAgIH19Pm1vdmU8L1NwYXJrU2Nyb2xsLmgyPlxuXG4gICAgICAgIHsvKiBzcGluICovfVxuICAgICAgICA8U3BhcmtQcm94eSBwcm94eUlkPVwicm90YXRlLXByb3h5XCIgLz5cbiAgICAgICAgPFNwYXJrU2Nyb2xsLmgyXG4gICAgICAgICAgcHJveHk9XCJyb3RhdGUtcHJveHlcIlxuICAgICAgICAgIHRpbWVsaW5lPXt7XG4gICAgICAgICAgICB0b3BCb3R0b206IHsgcm90YXRpb246ICcwJyB9ICxcbiAgICAgICAgICAgIHRvcENlbnRlcjogeyByb3RhdGlvbjogJzM2MCcgfVxuICAgICAgICAgIH19PnNwaW48L1NwYXJrU2Nyb2xsLmgyPlxuXG4gICAgICAgIHsvKiBzY2FsZSAqL31cbiAgICAgICAgPFNwYXJrUHJveHkgcHJveHlJZD1cInNjYWxlLXByb3h5XCIgLz5cbiAgICAgICAgPFNwYXJrU2Nyb2xsLmgyXG4gICAgICAgICAgcHJveHk9XCJzY2FsZS1wcm94eVwiXG4gICAgICAgICAgdGltZWxpbmU9e3tcbiAgICAgICAgICAgICd0b3BDZW50ZXItMjAxJzogeyBzY2FsZTogMC4wMSwgb3BhY2l0eTogMH0sXG4gICAgICAgICAgICAndG9wQ2VudGVyLTIwMCc6IHsgc2NhbGU6IDAuMDEsIG9wYWNpdHk6IDEgfSxcbiAgICAgICAgICAgICd0b3BDZW50ZXIrNzAnOiB7IHNjYWxlOiAxLCBlYXNlOiAnZWFzZU91dEJvdW5jZScgfVxuICAgICAgICAgIH19PnNjYWxlPC9TcGFya1Njcm9sbC5oMj5cblxuICAgICAgICB7LyogcGluLCByZXZlYWwsIHNsaWRlLCBjb2xvciwgdW5waW4gKi99XG4gICAgICAgIDxTcGFya1Byb3h5LmRpdiBjbGFzc05hbWU9XCJwaW4tY29udFwiIHByb3h5SWQ9XCJwaW4tY29udFwiPlxuXG4gICAgICAgICAgPFNwYXJrU2Nyb2xsLnNlY3Rpb25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goXCJwaW5cIix7XG4gICAgICAgICAgICAgICdwaW4tcGluJzp0aGlzLnN0YXRlLnBpblBpbixcbiAgICAgICAgICAgICAgJ3Bpbi11bnBpbic6dGhpcy5zdGF0ZS5waW5VbnBpbn0pfVxuICAgICAgICAgICAgcHJveHk9XCJwaW4tY29udFwiXG4gICAgICAgICAgICB0aW1lbGluZT17e1xuICAgICAgICAgICAgICB0b3BUb3A6IHtcbiAgICAgICAgICAgICAgICBvbkRvd246ICgpID0+IHRoaXMuc2V0U3RhdGUoe3BpblBpbjp0cnVlfSksXG4gICAgICAgICAgICAgICAgb25VcDogICAoKSA9PiB0aGlzLnNldFN0YXRlKHtwaW5QaW46ZmFsc2V9KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBib3R0b21Cb3R0b206IHtcbiAgICAgICAgICAgICAgICBvbkRvd246ICgpID0+IHRoaXMuc2V0U3RhdGUoe3BpblVucGluOnRydWV9KSxcbiAgICAgICAgICAgICAgICBvblVwOiAgICgpID0+IHRoaXMuc2V0U3RhdGUoe3BpblVucGluOmZhbHNlfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX0+XG5cbiAgICAgICAgICAgIDxTcGFya1Njcm9sbC5oM1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwaW4tdHh0XCJcbiAgICAgICAgICAgICAgcHJveHk9XCJwaW4tY29udFwiXG4gICAgICAgICAgICAgIHRpbWVsaW5lPXt7XG4gICAgICAgICAgICAgICAgJ3RvcFRvcCc6IHsgdG9wOiAnMCUnLCBtYXJnaW5Ub3A6ICcwcHgnIH0sXG4gICAgICAgICAgICAgICAgJ3RvcFRvcCs1MCAgJzogeyB0b3A6ICc1MCUnLCBtYXJnaW5Ub3A6ICctNjBweCcgfVxuICAgICAgICAgICAgICB9fT5waW48L1NwYXJrU2Nyb2xsLmgzPlxuXG4gICAgICAgICAgICA8U3BhcmtTY3JvbGwuZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJldmVhbFwiXG4gICAgICAgICAgICAgIHByb3h5PVwicGluLWNvbnRcIlxuICAgICAgICAgICAgICB0aW1lbGluZT17e1xuICAgICAgICAgICAgICAgICd0b3BUb3ArMTAwJzoge3dpZHRoOiAnMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjNWM4MzJmJ30sXG4gICAgICAgICAgICAgICAgJ3RvcFRvcCsyNTAnOiB7d2lkdGg6IFsnMTAwJScsICdlYXNlT3V0UXVhcnQnXSwgYmFja2dyb3VuZENvbG9yOiAnIzM4MjUxMyd9XG4gICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicmV2ZWFsLXR4dFwiPnJldmVhbDwvaDM+XG4gICAgICAgICAgICA8L1NwYXJrU2Nyb2xsLmRpdj5cblxuICAgICAgICAgICAgey8qIHdpdGggYXJyYXkgbm90YXRpb24gd2UgY2FuIGFwcGx5IGJvdW5jZSBlYXNpbmcgdG8ganVzdCBvbmUgcHJvcGVydHkgaW4gYSBrZXlmcmFtZSAqLyB9XG4gICAgICAgICAgICA8U3BhcmtTY3JvbGwuZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goXCJzbGlkZVwiLHtoaWRlOnRoaXMuc3RhdGUuc2xpZGVIaWRlfSl9XG4gICAgICAgICAgICAgIHByb3h5PVwicGluLWNvbnRcIlxuICAgICAgICAgICAgICB0aW1lbGluZT17e1xuICAgICAgICAgICAgICAgICd0b3BUb3ArMjUwJzoge1xuICAgICAgICAgICAgICAgICAgYm90dG9tOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNWM4MzJmJyxcbiAgICAgICAgICAgICAgICAgIG9uRG93bjogKCkgPT4gdGhpcy5zZXRTdGF0ZSh7c2xpZGVIaWRlOmZhbHNlfSksXG4gICAgICAgICAgICAgICAgICBvblVwOiAgICgpID0+IHRoaXMuc2V0U3RhdGUoe3NsaWRlSGlkZTp0cnVlfSlcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICd0b3BUb3ArNDAwJzoge2JvdHRvbTogWycwJScsICdlYXNlT3V0Qm91bmNlJ10sIGJhY2tncm91bmRDb2xvcjogJyMyODQ5MDcnfSxcbiAgICAgICAgICAgICAgICAndG9wVG9wKzQ1MCc6IHtiYWNrZ3JvdW5kQ29sb3I6ICcjMDBhJ30sXG4gICAgICAgICAgICAgICAgJ3RvcFRvcCs1MDAnOiB7YmFja2dyb3VuZENvbG9yOiAnI2EwMCd9LFxuICAgICAgICAgICAgICAgICd0b3BUb3ArNTUwJzoge2JhY2tncm91bmRDb2xvcjogJyM1YzgzMmYnfVxuICAgICAgICAgICAgICB9fT5cblxuICAgICAgICAgICAgICB7Lyogd2hlbiB3ZSBoaXQgdGhlIGFwcHJvcHJpYXRlIHNjcm9sbCBwb3NpdGlvbiwgdXNlIG9uVXAvb25Eb3duIHRvIGNoYW5nZSB0aGVcbiAgICAgICAgICAgICAgICAgICAgdGV4dCB0byAnc2xpZGUnIG9yICdjb2xvcicgZGVwZW5kaW5nIG9uIHRoZSBzY3JvbGwgZGlyZWN0aW9uICovfVxuICAgICAgICAgICAgICA8U3BhcmtTY3JvbGwuaDNcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzbGlkZS10eHRcIlxuICAgICAgICAgICAgICAgIHByb3h5PVwicGluLWNvbnRcIlxuICAgICAgICAgICAgICAgIHRpbWVsaW5lPXt7XG4gICAgICAgICAgICAgICAgICAndG9wVG9wKzQwMCc6IHtcbiAgICAgICAgICAgICAgICAgICAgb25Eb3duOiAoKSA9PiB0aGlzLnNldFN0YXRlKHt0ZXh0Oidjb2xvcid9KSxcbiAgICAgICAgICAgICAgICAgICAgb25VcDogICAoKSA9PiB0aGlzLnNldFN0YXRlKHt0ZXh0OidzbGlkZSd9KSB9XG4gICAgICAgICAgICAgICAgfX0+e3RoaXMuc3RhdGUudGV4dH08L1NwYXJrU2Nyb2xsLmgzPlxuXG4gICAgICAgICAgICAgIDxTcGFya1Njcm9sbC5oM1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goXCJ1bnBpbi10eHQgaGlkZVwiLHtoaWRlOnRoaXMuc3RhdGUudW5waW5IaWRlfSl9XG4gICAgICAgICAgICAgICAgcHJveHk9XCJwaW4tY29udFwiXG4gICAgICAgICAgICAgICAgdGltZWxpbmU9e3tcbiAgICAgICAgICAgICAgICAgJ3RvcFRvcCs2MDAnOiB7XG4gICAgICAgICAgICAgICAgICAgdG9wOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgb25Eb3duOiAoKSA9PiB0aGlzLnNldFN0YXRlKHt1bnBpbkhpZGU6ZmFsc2V9KSxcbiAgICAgICAgICAgICAgICAgICBvblVwOiAgICgpID0+IHRoaXMuc2V0U3RhdGUoe3VucGluSGlkZTp0cnVlfSkgfSxcbiAgICAgICAgICAgICAgICAgJ2JvdHRvbUJvdHRvbSc6IHsgdG9wOiAnNTAlJyB9XG4gICAgICAgICAgICAgICAgIH19PnVucGluPC9TcGFya1Njcm9sbC5oMz5cbiAgICAgICAgICAgIDwvU3BhcmtTY3JvbGwuZGl2PlxuXG4gICAgICAgICAgPC9TcGFya1Njcm9sbC5zZWN0aW9uPlxuXG4gICAgICAgIDwvU3BhcmtQcm94eS5kaXY+XG5cblxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2VyNTBcIj48L2Rpdj5cblxuICAgICAgICB7LyogcGFyYWxsYXggKi99XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5mbGlja3IuY29tL3Bob3Rvcy9yYWZhZ2FyY2lhXy8xNTI2MjI4NzczOC9pbi9wb29sLTgzODIzODU5QE4wMC9cIj5cbiAgICAgICAgICA8U3BhcmtQcm94eS5kaXYgcHJveHlJZD1cInBhcmFsbGF4XCIgY2xhc3NOYW1lPVwicGFyYWxsYXgtY29udFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJhbGxheC1zaGFkb3dcIj48L2Rpdj5cblxuICAgICAgICAgICAgPFNwYXJrU2Nyb2xsLmRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwYXJhbGxheC1pbWdcIlxuICAgICAgICAgICAgICBwcm94eT1cInBhcmFsbGF4XCJcbiAgICAgICAgICAgICAgdGltZWxpbmU9e3tcbiAgICAgICAgICAgICAgICB0b3BCb3R0b206IHt0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwcHgsMHB4LDBweCknfSxcbiAgICAgICAgICAgICAgICBib3R0b21Ub3A6IHt0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwcHgsLTgwcHgsMHB4KSd9XG4gICAgICAgICAgICAgIH19PjwvU3BhcmtTY3JvbGwuZGl2PlxuXG4gICAgICAgICAgICA8U3BhcmtTY3JvbGwuaDNcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGFyYWxsYXgtdHh0IGZhZGUyXCJcbiAgICAgICAgICAgICAgcHJveHk9XCJwYXJhbGxheFwiXG4gICAgICAgICAgICAgIHRpbWVsaW5lPXt7XG4gICAgICAgICAgICAgICAgdG9wQm90dG9tOiB7IHRyYW5zZm9ybTogJ3NjYWxlKDAuOCkgdHJhbnNsYXRlM2QoMHB4LDEyMHB4LDBweCknIH0sXG4gICAgICAgICAgICAgICAgYm90dG9tVG9wOiB7IHRyYW5zZm9ybTogJ3NjYWxlKDAuOCkgdHJhbnNsYXRlM2QoMHB4LC0xMjBweCwwcHgpJyB9XG4gICAgICAgICAgICAgIH19PnBhcmFsbGF4PC9TcGFya1Njcm9sbC5oMz5cblxuICAgICAgICAgICAgPFNwYXJrU2Nyb2xsLmgzXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBhcmFsbGF4LXR4dCBmYWRlMVwiXG4gICAgICAgICAgICAgIHByb3h5PVwicGFyYWxsYXhcIlxuICAgICAgICAgICAgICB0aW1lbGluZT17e1xuICAgICAgICAgICAgICAgIHRvcEJvdHRvbToge3RyYW5zZm9ybTogJ3NjYWxlKDAuOSkgdHJhbnNsYXRlM2QoMHB4LDE2MHB4LDBweCknfSxcbiAgICAgICAgICAgICAgICBib3R0b21Ub3A6IHt0cmFuc2Zvcm06ICdzY2FsZSgwLjkpIHRyYW5zbGF0ZTNkKDBweCwtMTYwcHgsMHB4KSd9XG4gICAgICAgICAgICAgIH19PnBhcmFsbGF4PC9TcGFya1Njcm9sbC5oMz5cblxuICAgICAgICAgICAgPFNwYXJrU2Nyb2xsLmgzXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBhcmFsbGF4LXR4dFwiXG4gICAgICAgICAgICAgIHByb3h5PVwicGFyYWxsYXhcIlxuICAgICAgICAgICAgICB0aW1lbGluZT17e1xuICAgICAgICAgICAgICAgIHRvcEJvdHRvbToge3RyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDBweCwyMDBweCwwcHgpJ30sXG4gICAgICAgICAgICAgICAgYm90dG9tVG9wOiB7dHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMHB4LC0yMDBweCwwcHgpJ31cbiAgICAgICAgICAgICAgfX0+cGFyYWxsYXg8L1NwYXJrU2Nyb2xsLmgzPlxuICAgICAgICAgIDwvU3BhcmtQcm94eS5kaXY+XG4gICAgICAgIDwvYT5cblxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2VyNTBcIj48L2Rpdj5cblxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2dpbGJveC9yZWFjdC1zcGFyay1zY3JvbGxcIj5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImNlbnRlclwiIHNyYz1cIkdpdEh1Yi1NYXJrLTY0cHgucG5nXCIgYWx0PVwiXCIvPlxuICAgICAgICA8L2E+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZXIxMFwiPjwvZGl2PlxuXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImNlbnRlclwiPlRoaXMgZGVtbyB3YXMgaW5zcGlyZWQgYnkgPGEgaHJlZj1cImh0dHA6Ly9qYW5wYWVwa2UuZ2l0aHViLmlvL1Njcm9sbE1hZ2ljL1wiPlNjcm9sbE1hZ2ljPC9hPjwvcD5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlcjEwXCI+PC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG5SZWFjdC5yZW5kZXIoPEFwcC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhhbXBsZScpKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZXhhbXBsZXMvZGVtby1nc2FwL2FwcC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgncmVhY3Qtc3Bhcmstc2Nyb2xsL3NwYXJrLXNjcm9sbC1nc2FwJykoe1xuICBpbnZhbGlkYXRlQXV0b21hdGljYWxseTogdHJ1ZVxuXG4gIC8vIHdlIGNvdWxkIGFkZCBhZGRpdGlvbmFsIG9wdGlvbnMgaW4gaGVyZS4uLlxuXG4gIC8vIHNldHVwOiB7Li4ufVxuICAvLyBmb3JtdWxhczogey4uLn1cbiAgLy8gYWN0aW9uUHJvcHM6IHsuLi59XG59KTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZXhhbXBsZXMvZGVtby1nc2FwL2FwcC1zcGFyay5qc1xuICoqLyIsIi8vIHdlJ3JlIGp1c3QgbG9hZGluZyBpbiB0aGUgd2hvbGUgc2hlYmFuZyBoZXJlIChha2EgVHdlZW5NYXgpXG4vLyBiZWNhdXNlIGl0J3MgdGhlIHNpbXBsZXN0IHRoaW5nIHRvIGRvLCBidXQgYWxsIHRoYXQncyByZWFsbHkgbmVlZGVkXG4vLyBpczogVHdlZW5MaXRlLmpzLCBDU1NQbHVnaW4sIFRpbWVsaW5lTGl0ZVxuLy9cbi8vIENvcHkgdGhpcyBmaWxlIHRvIGNyZWF0ZSB5b3VyIG93biBzcGFyay1zY3JvbGwtZ3NhcC5qcyBpZiB5b3Ugd2FudCB0b1xuLy8gbG9hZCBpbiBhIHN1YnNldCBvZiBUd2Vlbk1heFxucmVxdWlyZSgnZ3NhcCcpO1xuXG5jb25zdCBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5jb25zdCBfZmFjdG9yeSA9IHJlcXVpcmUoJy4vJyk7XG5jb25zdCBHU0FQQW5pbWF0b3IgPSByZXF1aXJlKCcuL2dzYXAtYW5pbWF0b3InKTtcblxuZnVuY3Rpb24gZmFjdG9yeShvcHRpb25zKSB7XG4gIHJldHVybiBfZmFjdG9yeShhc3NpZ24oe1xuICAgIGFuaW1hdG9yOiB7XG4gICAgICBpbnN0YW5jZTogKCkgPT4gbmV3IEdTQVBBbmltYXRvcigpXG4gICAgfVxuICB9LCBvcHRpb25zKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZmFjdG9yeTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zcGFyay1zY3JvbGwtZ3NhcC5qc1xuICoqLyIsIi8vIE1pbmltdW0gcmVxdWlyZWQgdG8gYWxyZWFkeSBiZSBsb2FkZWQgaW46XG4vLyBUd2VlbkxpdGUuanMsQ1NTUGx1Z2luLFRpbWVsaW5lTGl0ZVxuLy8gKFR3ZWVuTWF4IGxvYWRzIGFsbCB0aGVzZSBhbmQgbW9yZSlcblxuY29uc3QgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xuXG5jbGFzcyBBY3RvciB7XG4gIGNvbnN0cnVjdG9yKHRsLCBjb250ZXh0KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnRsID0gdGw7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLmZyYW1lcyA9IFtdO1xuICAgIHRoaXMuZnJhbWVIYXNoID0ge307XG4gICAgdGhpcy5ub3JtYWxpemVkRnJhbWVzID0gW107XG4gIH1cblxuICBub3JtYWxpemVGcmFtZXMoKSB7XG4gICAgdGhpcy5ub3JtYWxpemVkRnJhbWVzID0gXy5zb3J0QnkoXy5jbG9uZURlZXAodGhpcy5mcmFtZXMpLCAnc2Nyb2xsWScpO1xuXG4gICAgXy5mb3JFYWNoKHRoaXMubm9ybWFsaXplZEZyYW1lcywgKGZyYW1lLCBpbmRleCwgYXJyKSA9PlxuICAgICAgaW5kZXggJiYgXy5kZWZhdWx0cyhmcmFtZS5hbmltcywgYXJyW2luZGV4LTFdLmFuaW1zKVxuICAgICk7XG4gIH1cblxuICBrZXlmcmFtZShzY3JvbGxZLCBhbmltcywgZWFzZSkge1xuICAgIGNvbnN0IGZyYW1lID0ge3Njcm9sbFksIGFuaW1zLCBlYXNlfTtcblxuICAgIHRoaXMuZnJhbWVzLnB1c2goZnJhbWUpO1xuICAgIHRoaXMuZnJhbWVIYXNoW3Njcm9sbFldID0gZnJhbWU7XG4gIH1cblxuICBidWlsZFRpbWVsaW5lKCkge1xuICAgIHRoaXMudGwuY2xlYXIoKTtcbiAgICBfLmZvckVhY2godGhpcy5ub3JtYWxpemVkRnJhbWVzLCAoZnJhbWUsIGluZGV4LCBhcnIpID0+IHtcbiAgICAgIGlmIChpbmRleCkge1xuICAgICAgICBjb25zdCBwcmV2RnJhbWUgPSBhcnJbaW5kZXgtMV07XG5cbiAgICAgICAgLy8gZm9yIGVhc2luZywgaW5zdGVhZCBvZiB0aGlzOlxuICAgICAgICAvLyBAdGwuZnJvbVRvKEBjb250ZXh0LCBmcmFtZS5zY3JvbGxZIC0gcHJldkZyYW1lLnNjcm9sbFksIHByZXZGcmFtZS5hbmltcywgZnJhbWUuYW5pbXMsIHByZXZGcmFtZS5zY3JvbGxZKS8vXG4gICAgICAgIC8vIC4uLmRvIHRoaXM6XG4gICAgICAgIC8vIGNyZWF0aW5nIGEgbmV3IGZyb21UbyBmb3IgZWFjaCBwcm9wZXJ0eSB0byBzdXBwb3J0IHBlci1wcm9wZXJ0eSBlYXNpbmdcbiAgICAgICAgLy8gdGhpcyBzZWVtcyBwcmV0dHkgaW5lZmZpY2llbnRcbiAgICAgICAgbGV0IGR1cmF0aW9uID0gZnJhbWUuc2Nyb2xsWSAtIHByZXZGcmFtZS5zY3JvbGxZO1xuICAgICAgICBmb3IgKGxldCBrIGluIGZyYW1lLmFuaW1zKSB7XG4gICAgICAgICAgbGV0IHYgPSBmcmFtZS5hbmltc1trXTtcbiAgICAgICAgICBjb25zdCBhID0ge30sIHBhID0ge307XG4gICAgICAgICAgYVtrXSA9IHY7XG4gICAgICAgICAgYS5lYXNlID0gZnJhbWUuZWFzZVtrXTtcbiAgICAgICAgICBwYVtrXSA9IHByZXZGcmFtZS5hbmltc1trXTtcbiAgICAgICAgICB0aGlzLnRsLmZyb21Ubyh0aGlzLmNvbnRleHQsIGR1cmF0aW9uLCBwYSwgYSwgcHJldkZyYW1lLnNjcm9sbFkpO1xuICAgICAgICAgIHRoaXMudGwucGF1c2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZmluaXNoZWRBZGRpbmdLZXlmcmFtZXMoKSB7XG4gICAgdGhpcy5ub3JtYWxpemVGcmFtZXMoKTtcbiAgICB0aGlzLmJ1aWxkVGltZWxpbmUoKTtcbiAgfVxuXG4gIG1vdmVLZXlmcmFtZShvbGRQb3MsIG5ld1Bvcykge1xuICAgIGNvbnN0IGZyYW1lID0gdGhpcy5mcmFtZUhhc2hbb2xkUG9zXTtcbiAgICB0aGlzLmZyYW1lSGFzaFtuZXdQb3NdID0gZnJhbWU7XG4gICAgZnJhbWUuc2Nyb2xsWSA9IG5ld1BvcztcbiAgICBkZWxldGUgdGhpcy5mcmFtZUhhc2hbb2xkUG9zXTtcbiAgICB0aGlzLm5vcm1hbGl6ZUZyYW1lcygpO1xuICAgIHRoaXMuYnVpbGRUaW1lbGluZSgpO1xuICB9XG5cbiAgcmVtb3ZlQWxsS2V5ZnJhbWVzKCkge1xuICAgIHRoaXMudGwuY2xlYXIoKTtcbiAgICB0aGlzLmZyYW1lcyA9IFtdO1xuICB9XG59XG5cbmNsYXNzIEdTQVBBbmltYXRvciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy50bCA9IG5ldyBUaW1lbGluZUxpdGUoe3VzZUZyYW1lczp0cnVlfSk7XG4gIH1cblxuICBhZGRBY3RvcihvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5ldyBBY3Rvcih0aGlzLnRsLCBvcHRpb25zLmNvbnRleHQpO1xuICB9XG5cbiAgdXBkYXRlKHBvcykge1xuICAgIGlmIChwb3M+PTApIHRoaXMudGwuc2Vlayhwb3MsIGZhbHNlKTsgLy8gaXQgYmFsa3MgYXQgbmVnYXRpdmUgcG9zIHZhbHVlc1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR1NBUEFuaW1hdG9yO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2dzYXAtYW5pbWF0b3IuanNcbiAqKi8iLCIvKiFcbiAqIFZFUlNJT046IDEuMTYuMVxuICogREFURTogMjAxNS0wMy0xM1xuICogVVBEQVRFUyBBTkQgRE9DUyBBVDogaHR0cDovL2dyZWVuc29jay5jb21cbiAqIFxuICogSW5jbHVkZXMgYWxsIG9mIHRoZSBmb2xsb3dpbmc6IFR3ZWVuTGl0ZSwgVHdlZW5NYXgsIFRpbWVsaW5lTGl0ZSwgVGltZWxpbmVNYXgsIEVhc2VQYWNrLCBDU1NQbHVnaW4sIFJvdW5kUHJvcHNQbHVnaW4sIEJlemllclBsdWdpbiwgQXR0clBsdWdpbiwgRGlyZWN0aW9uYWxSb3RhdGlvblBsdWdpblxuICpcbiAqIEBsaWNlbnNlIENvcHlyaWdodCAoYykgMjAwOC0yMDE1LCBHcmVlblNvY2suIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIHdvcmsgaXMgc3ViamVjdCB0byB0aGUgdGVybXMgYXQgaHR0cDovL2dyZWVuc29jay5jb20vc3RhbmRhcmQtbGljZW5zZSBvciBmb3JcbiAqIENsdWIgR3JlZW5Tb2NrIG1lbWJlcnMsIHRoZSBzb2Z0d2FyZSBhZ3JlZW1lbnQgdGhhdCB3YXMgaXNzdWVkIHdpdGggeW91ciBtZW1iZXJzaGlwLlxuICogXG4gKiBAYXV0aG9yOiBKYWNrIERveWxlLCBqYWNrQGdyZWVuc29jay5jb21cbiAqKi9cbnZhciBfZ3NTY29wZSA9ICh0eXBlb2YobW9kdWxlKSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBtb2R1bGUuZXhwb3J0cyAmJiB0eXBlb2YoZ2xvYmFsKSAhPT0gXCJ1bmRlZmluZWRcIikgPyBnbG9iYWwgOiB0aGlzIHx8IHdpbmRvdzsgLy9oZWxwcyBlbnN1cmUgY29tcGF0aWJpbGl0eSB3aXRoIEFNRC9SZXF1aXJlSlMgYW5kIENvbW1vbkpTL05vZGVcbihfZ3NTY29wZS5fZ3NRdWV1ZSB8fCAoX2dzU2NvcGUuX2dzUXVldWUgPSBbXSkpLnB1c2goIGZ1bmN0aW9uKCkge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXG5cdF9nc1Njb3BlLl9nc0RlZmluZShcIlR3ZWVuTWF4XCIsIFtcImNvcmUuQW5pbWF0aW9uXCIsXCJjb3JlLlNpbXBsZVRpbWVsaW5lXCIsXCJUd2VlbkxpdGVcIl0sIGZ1bmN0aW9uKEFuaW1hdGlvbiwgU2ltcGxlVGltZWxpbmUsIFR3ZWVuTGl0ZSkge1xuXG5cdFx0dmFyIF9zbGljZSA9IGZ1bmN0aW9uKGEpIHsgLy9kb24ndCB1c2UgW10uc2xpY2UgYmVjYXVzZSB0aGF0IGRvZXNuJ3Qgd29yayBpbiBJRTggd2l0aCBhIE5vZGVMaXN0IHRoYXQncyByZXR1cm5lZCBieSBxdWVyeVNlbGVjdG9yQWxsKClcblx0XHRcdFx0dmFyIGIgPSBbXSxcblx0XHRcdFx0XHRsID0gYS5sZW5ndGgsXG5cdFx0XHRcdFx0aTtcblx0XHRcdFx0Zm9yIChpID0gMDsgaSAhPT0gbDsgYi5wdXNoKGFbaSsrXSkpO1xuXHRcdFx0XHRyZXR1cm4gYjtcblx0XHRcdH0sXG5cdFx0XHRUd2Vlbk1heCA9IGZ1bmN0aW9uKHRhcmdldCwgZHVyYXRpb24sIHZhcnMpIHtcblx0XHRcdFx0VHdlZW5MaXRlLmNhbGwodGhpcywgdGFyZ2V0LCBkdXJhdGlvbiwgdmFycyk7XG5cdFx0XHRcdHRoaXMuX2N5Y2xlID0gMDtcblx0XHRcdFx0dGhpcy5feW95byA9ICh0aGlzLnZhcnMueW95byA9PT0gdHJ1ZSk7XG5cdFx0XHRcdHRoaXMuX3JlcGVhdCA9IHRoaXMudmFycy5yZXBlYXQgfHwgMDtcblx0XHRcdFx0dGhpcy5fcmVwZWF0RGVsYXkgPSB0aGlzLnZhcnMucmVwZWF0RGVsYXkgfHwgMDtcblx0XHRcdFx0dGhpcy5fZGlydHkgPSB0cnVlOyAvL2Vuc3VyZXMgdGhhdCBpZiB0aGVyZSBpcyBhbnkgcmVwZWF0LCB0aGUgdG90YWxEdXJhdGlvbiB3aWxsIGdldCByZWNhbGN1bGF0ZWQgdG8gYWNjdXJhdGVseSByZXBvcnQgaXQuXG5cdFx0XHRcdHRoaXMucmVuZGVyID0gVHdlZW5NYXgucHJvdG90eXBlLnJlbmRlcjsgLy9zcGVlZCBvcHRpbWl6YXRpb24gKGF2b2lkIHByb3RvdHlwZSBsb29rdXAgb24gdGhpcyBcImhvdFwiIG1ldGhvZClcblx0XHRcdH0sXG5cdFx0XHRfdGlueU51bSA9IDAuMDAwMDAwMDAwMSxcblx0XHRcdFR3ZWVuTGl0ZUludGVybmFscyA9IFR3ZWVuTGl0ZS5faW50ZXJuYWxzLFxuXHRcdFx0X2lzU2VsZWN0b3IgPSBUd2VlbkxpdGVJbnRlcm5hbHMuaXNTZWxlY3Rvcixcblx0XHRcdF9pc0FycmF5ID0gVHdlZW5MaXRlSW50ZXJuYWxzLmlzQXJyYXksXG5cdFx0XHRwID0gVHdlZW5NYXgucHJvdG90eXBlID0gVHdlZW5MaXRlLnRvKHt9LCAwLjEsIHt9KSxcblx0XHRcdF9ibGFua0FycmF5ID0gW107XG5cblx0XHRUd2Vlbk1heC52ZXJzaW9uID0gXCIxLjE2LjFcIjtcblx0XHRwLmNvbnN0cnVjdG9yID0gVHdlZW5NYXg7XG5cdFx0cC5raWxsKCkuX2djID0gZmFsc2U7XG5cdFx0VHdlZW5NYXgua2lsbFR3ZWVuc09mID0gVHdlZW5NYXgua2lsbERlbGF5ZWRDYWxsc1RvID0gVHdlZW5MaXRlLmtpbGxUd2VlbnNPZjtcblx0XHRUd2Vlbk1heC5nZXRUd2VlbnNPZiA9IFR3ZWVuTGl0ZS5nZXRUd2VlbnNPZjtcblx0XHRUd2Vlbk1heC5sYWdTbW9vdGhpbmcgPSBUd2VlbkxpdGUubGFnU21vb3RoaW5nO1xuXHRcdFR3ZWVuTWF4LnRpY2tlciA9IFR3ZWVuTGl0ZS50aWNrZXI7XG5cdFx0VHdlZW5NYXgucmVuZGVyID0gVHdlZW5MaXRlLnJlbmRlcjtcblxuXHRcdHAuaW52YWxpZGF0ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0dGhpcy5feW95byA9ICh0aGlzLnZhcnMueW95byA9PT0gdHJ1ZSk7XG5cdFx0XHR0aGlzLl9yZXBlYXQgPSB0aGlzLnZhcnMucmVwZWF0IHx8IDA7XG5cdFx0XHR0aGlzLl9yZXBlYXREZWxheSA9IHRoaXMudmFycy5yZXBlYXREZWxheSB8fCAwO1xuXHRcdFx0dGhpcy5fdW5jYWNoZSh0cnVlKTtcblx0XHRcdHJldHVybiBUd2VlbkxpdGUucHJvdG90eXBlLmludmFsaWRhdGUuY2FsbCh0aGlzKTtcblx0XHR9O1xuXHRcdFxuXHRcdHAudXBkYXRlVG8gPSBmdW5jdGlvbih2YXJzLCByZXNldER1cmF0aW9uKSB7XG5cdFx0XHR2YXIgY3VyUmF0aW8gPSB0aGlzLnJhdGlvLFxuXHRcdFx0XHRpbW1lZGlhdGUgPSB0aGlzLnZhcnMuaW1tZWRpYXRlUmVuZGVyIHx8IHZhcnMuaW1tZWRpYXRlUmVuZGVyLFxuXHRcdFx0XHRwO1xuXHRcdFx0aWYgKHJlc2V0RHVyYXRpb24gJiYgdGhpcy5fc3RhcnRUaW1lIDwgdGhpcy5fdGltZWxpbmUuX3RpbWUpIHtcblx0XHRcdFx0dGhpcy5fc3RhcnRUaW1lID0gdGhpcy5fdGltZWxpbmUuX3RpbWU7XG5cdFx0XHRcdHRoaXMuX3VuY2FjaGUoZmFsc2UpO1xuXHRcdFx0XHRpZiAodGhpcy5fZ2MpIHtcblx0XHRcdFx0XHR0aGlzLl9lbmFibGVkKHRydWUsIGZhbHNlKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLl90aW1lbGluZS5pbnNlcnQodGhpcywgdGhpcy5fc3RhcnRUaW1lIC0gdGhpcy5fZGVsYXkpOyAvL2Vuc3VyZXMgdGhhdCBhbnkgbmVjZXNzYXJ5IHJlLXNlcXVlbmNpbmcgb2YgQW5pbWF0aW9ucyBpbiB0aGUgdGltZWxpbmUgb2NjdXJzIHRvIG1ha2Ugc3VyZSB0aGUgcmVuZGVyaW5nIG9yZGVyIGlzIGNvcnJlY3QuXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGZvciAocCBpbiB2YXJzKSB7XG5cdFx0XHRcdHRoaXMudmFyc1twXSA9IHZhcnNbcF07XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5faW5pdHRlZCB8fCBpbW1lZGlhdGUpIHtcblx0XHRcdFx0aWYgKHJlc2V0RHVyYXRpb24pIHtcblx0XHRcdFx0XHR0aGlzLl9pbml0dGVkID0gZmFsc2U7XG5cdFx0XHRcdFx0aWYgKGltbWVkaWF0ZSkge1xuXHRcdFx0XHRcdFx0dGhpcy5yZW5kZXIoMCwgdHJ1ZSwgdHJ1ZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGlmICh0aGlzLl9nYykge1xuXHRcdFx0XHRcdFx0dGhpcy5fZW5hYmxlZCh0cnVlLCBmYWxzZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICh0aGlzLl9ub3RpZnlQbHVnaW5zT2ZFbmFibGVkICYmIHRoaXMuX2ZpcnN0UFQpIHtcblx0XHRcdFx0XHRcdFR3ZWVuTGl0ZS5fb25QbHVnaW5FdmVudChcIl9vbkRpc2FibGVcIiwgdGhpcyk7IC8vaW4gY2FzZSBhIHBsdWdpbiBsaWtlIE1vdGlvbkJsdXIgbXVzdCBwZXJmb3JtIHNvbWUgY2xlYW51cCB0YXNrc1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAodGhpcy5fdGltZSAvIHRoaXMuX2R1cmF0aW9uID4gMC45OTgpIHsgLy9pZiB0aGUgdHdlZW4gaGFzIGZpbmlzaGVkIChvciBjb21lIGV4dHJlbWVseSBjbG9zZSB0byBmaW5pc2hpbmcpLCB3ZSBqdXN0IG5lZWQgdG8gcmV3aW5kIGl0IHRvIDAgYW5kIHRoZW4gcmVuZGVyIGl0IGFnYWluIGF0IHRoZSBlbmQgd2hpY2ggZm9yY2VzIGl0IHRvIHJlLWluaXRpYWxpemUgKHBhcnNpbmcgdGhlIG5ldyB2YXJzKS4gV2UgYWxsb3cgdHdlZW5zIHRoYXQgYXJlIGNsb3NlIHRvIGZpbmlzaGluZyAoYnV0IGhhdmVuJ3QgcXVpdGUgZmluaXNoZWQpIHRvIHdvcmsgdGhpcyB3YXkgdG9vIGJlY2F1c2Ugb3RoZXJ3aXNlLCB0aGUgdmFsdWVzIGFyZSBzbyBzbWFsbCB3aGVuIGRldGVybWluaW5nIHdoZXJlIHRvIHByb2plY3QgdGhlIHN0YXJ0aW5nIHZhbHVlcyB0aGF0IGJpbmFyeSBtYXRoIGlzc3VlcyBjcmVlcCBpbiBhbmQgY2FuIG1ha2UgdGhlIHR3ZWVuIGFwcGVhciB0byByZW5kZXIgaW5jb3JyZWN0bHkgd2hlbiBydW4gYmFja3dhcmRzLiBcblx0XHRcdFx0XHRcdHZhciBwcmV2VGltZSA9IHRoaXMuX3RpbWU7XG5cdFx0XHRcdFx0XHR0aGlzLnJlbmRlcigwLCB0cnVlLCBmYWxzZSk7XG5cdFx0XHRcdFx0XHR0aGlzLl9pbml0dGVkID0gZmFsc2U7XG5cdFx0XHRcdFx0XHR0aGlzLnJlbmRlcihwcmV2VGltZSwgdHJ1ZSwgZmFsc2UpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5fdGltZSA+IDAgfHwgaW1tZWRpYXRlKSB7XG5cdFx0XHRcdFx0XHR0aGlzLl9pbml0dGVkID0gZmFsc2U7XG5cdFx0XHRcdFx0XHR0aGlzLl9pbml0KCk7XG5cdFx0XHRcdFx0XHR2YXIgaW52ID0gMSAvICgxIC0gY3VyUmF0aW8pLFxuXHRcdFx0XHRcdFx0XHRwdCA9IHRoaXMuX2ZpcnN0UFQsIGVuZFZhbHVlO1xuXHRcdFx0XHRcdFx0d2hpbGUgKHB0KSB7XG5cdFx0XHRcdFx0XHRcdGVuZFZhbHVlID0gcHQucyArIHB0LmM7IFxuXHRcdFx0XHRcdFx0XHRwdC5jICo9IGludjtcblx0XHRcdFx0XHRcdFx0cHQucyA9IGVuZFZhbHVlIC0gcHQuYztcblx0XHRcdFx0XHRcdFx0cHQgPSBwdC5fbmV4dDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH07XG5cdFx0XHRcdFxuXHRcdHAucmVuZGVyID0gZnVuY3Rpb24odGltZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKSB7XG5cdFx0XHRpZiAoIXRoaXMuX2luaXR0ZWQpIGlmICh0aGlzLl9kdXJhdGlvbiA9PT0gMCAmJiB0aGlzLnZhcnMucmVwZWF0KSB7IC8vemVybyBkdXJhdGlvbiB0d2VlbnMgdGhhdCByZW5kZXIgaW1tZWRpYXRlbHkgaGF2ZSByZW5kZXIoKSBjYWxsZWQgZnJvbSBUd2VlbkxpdGUncyBjb25zdHJ1Y3RvciwgYmVmb3JlIFR3ZWVuTWF4J3MgY29uc3RydWN0b3IgaGFzIGZpbmlzaGVkIHNldHRpbmcgX3JlcGVhdCwgX3JlcGVhdERlbGF5LCBhbmQgX3lveW8gd2hpY2ggYXJlIGNyaXRpY2FsIGluIGRldGVybWluaW5nIHRvdGFsRHVyYXRpb24oKSBzbyB3ZSBuZWVkIHRvIGNhbGwgaW52YWxpZGF0ZSgpIHdoaWNoIGlzIGEgbG93LWtiIHdheSB0byBnZXQgdGhvc2Ugc2V0IHByb3Blcmx5LlxuXHRcdFx0XHR0aGlzLmludmFsaWRhdGUoKTtcblx0XHRcdH1cblx0XHRcdHZhciB0b3RhbER1ciA9ICghdGhpcy5fZGlydHkpID8gdGhpcy5fdG90YWxEdXJhdGlvbiA6IHRoaXMudG90YWxEdXJhdGlvbigpLFxuXHRcdFx0XHRwcmV2VGltZSA9IHRoaXMuX3RpbWUsXG5cdFx0XHRcdHByZXZUb3RhbFRpbWUgPSB0aGlzLl90b3RhbFRpbWUsIFxuXHRcdFx0XHRwcmV2Q3ljbGUgPSB0aGlzLl9jeWNsZSxcblx0XHRcdFx0ZHVyYXRpb24gPSB0aGlzLl9kdXJhdGlvbixcblx0XHRcdFx0cHJldlJhd1ByZXZUaW1lID0gdGhpcy5fcmF3UHJldlRpbWUsXG5cdFx0XHRcdGlzQ29tcGxldGUsIGNhbGxiYWNrLCBwdCwgY3ljbGVEdXJhdGlvbiwgciwgdHlwZSwgcG93LCByYXdQcmV2VGltZTtcblx0XHRcdGlmICh0aW1lID49IHRvdGFsRHVyKSB7XG5cdFx0XHRcdHRoaXMuX3RvdGFsVGltZSA9IHRvdGFsRHVyO1xuXHRcdFx0XHR0aGlzLl9jeWNsZSA9IHRoaXMuX3JlcGVhdDtcblx0XHRcdFx0aWYgKHRoaXMuX3lveW8gJiYgKHRoaXMuX2N5Y2xlICYgMSkgIT09IDApIHtcblx0XHRcdFx0XHR0aGlzLl90aW1lID0gMDtcblx0XHRcdFx0XHR0aGlzLnJhdGlvID0gdGhpcy5fZWFzZS5fY2FsY0VuZCA/IHRoaXMuX2Vhc2UuZ2V0UmF0aW8oMCkgOiAwO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuX3RpbWUgPSBkdXJhdGlvbjtcblx0XHRcdFx0XHR0aGlzLnJhdGlvID0gdGhpcy5fZWFzZS5fY2FsY0VuZCA/IHRoaXMuX2Vhc2UuZ2V0UmF0aW8oMSkgOiAxO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghdGhpcy5fcmV2ZXJzZWQpIHtcblx0XHRcdFx0XHRpc0NvbXBsZXRlID0gdHJ1ZTtcblx0XHRcdFx0XHRjYWxsYmFjayA9IFwib25Db21wbGV0ZVwiO1xuXHRcdFx0XHRcdGZvcmNlID0gKGZvcmNlIHx8IHRoaXMuX3RpbWVsaW5lLmF1dG9SZW1vdmVDaGlsZHJlbik7IC8vb3RoZXJ3aXNlLCBpZiB0aGUgYW5pbWF0aW9uIGlzIHVucGF1c2VkL2FjdGl2YXRlZCBhZnRlciBpdCdzIGFscmVhZHkgZmluaXNoZWQsIGl0IGRvZXNuJ3QgZ2V0IHJlbW92ZWQgZnJvbSB0aGUgcGFyZW50IHRpbWVsaW5lLlxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkdXJhdGlvbiA9PT0gMCkgaWYgKHRoaXMuX2luaXR0ZWQgfHwgIXRoaXMudmFycy5sYXp5IHx8IGZvcmNlKSB7IC8vemVyby1kdXJhdGlvbiB0d2VlbnMgYXJlIHRyaWNreSBiZWNhdXNlIHdlIG11c3QgZGlzY2VybiB0aGUgbW9tZW50dW0vZGlyZWN0aW9uIG9mIHRpbWUgaW4gb3JkZXIgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhlIHN0YXJ0aW5nIHZhbHVlcyBzaG91bGQgYmUgcmVuZGVyZWQgb3IgdGhlIGVuZGluZyB2YWx1ZXMuIElmIHRoZSBcInBsYXloZWFkXCIgb2YgaXRzIHRpbWVsaW5lIGdvZXMgcGFzdCB0aGUgemVyby1kdXJhdGlvbiB0d2VlbiBpbiB0aGUgZm9yd2FyZCBkaXJlY3Rpb24gb3IgbGFuZHMgZGlyZWN0bHkgb24gaXQsIHRoZSBlbmQgdmFsdWVzIHNob3VsZCBiZSByZW5kZXJlZCwgYnV0IGlmIHRoZSB0aW1lbGluZSdzIFwicGxheWhlYWRcIiBtb3ZlcyBwYXN0IGl0IGluIHRoZSBiYWNrd2FyZCBkaXJlY3Rpb24gKGZyb20gYSBwb3N0aXRpdmUgdGltZSB0byBhIG5lZ2F0aXZlIHRpbWUpLCB0aGUgc3RhcnRpbmcgdmFsdWVzIG11c3QgYmUgcmVuZGVyZWQuXG5cdFx0XHRcdFx0aWYgKHRoaXMuX3N0YXJ0VGltZSA9PT0gdGhpcy5fdGltZWxpbmUuX2R1cmF0aW9uKSB7IC8vaWYgYSB6ZXJvLWR1cmF0aW9uIHR3ZWVuIGlzIGF0IHRoZSBWRVJZIGVuZCBvZiBhIHRpbWVsaW5lIGFuZCB0aGF0IHRpbWVsaW5lIHJlbmRlcnMgYXQgaXRzIGVuZCwgaXQgd2lsbCB0eXBpY2FsbHkgYWRkIGEgdGlueSBiaXQgb2YgY3VzaGlvbiB0byB0aGUgcmVuZGVyIHRpbWUgdG8gcHJldmVudCByb3VuZGluZyBlcnJvcnMgZnJvbSBnZXR0aW5nIGluIHRoZSB3YXkgb2YgdHdlZW5zIHJlbmRlcmluZyB0aGVpciBWRVJZIGVuZC4gSWYgd2UgdGhlbiByZXZlcnNlKCkgdGhhdCB0aW1lbGluZSwgdGhlIHplcm8tZHVyYXRpb24gdHdlZW4gd2lsbCB0cmlnZ2VyIGl0cyBvblJldmVyc2VDb21wbGV0ZSBldmVuIHRob3VnaCB0ZWNobmljYWxseSB0aGUgcGxheWhlYWQgZGlkbid0IHBhc3Mgb3ZlciBpdCBhZ2Fpbi4gSXQncyBhIHZlcnkgc3BlY2lmaWMgZWRnZSBjYXNlIHdlIG11c3QgYWNjb21tb2RhdGUuXG5cdFx0XHRcdFx0XHR0aW1lID0gMDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHRpbWUgPT09IDAgfHwgcHJldlJhd1ByZXZUaW1lIDwgMCB8fCBwcmV2UmF3UHJldlRpbWUgPT09IF90aW55TnVtKSBpZiAocHJldlJhd1ByZXZUaW1lICE9PSB0aW1lKSB7XG5cdFx0XHRcdFx0XHRmb3JjZSA9IHRydWU7XG5cdFx0XHRcdFx0XHRpZiAocHJldlJhd1ByZXZUaW1lID4gX3RpbnlOdW0pIHtcblx0XHRcdFx0XHRcdFx0Y2FsbGJhY2sgPSBcIm9uUmV2ZXJzZUNvbXBsZXRlXCI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuX3Jhd1ByZXZUaW1lID0gcmF3UHJldlRpbWUgPSAoIXN1cHByZXNzRXZlbnRzIHx8IHRpbWUgfHwgcHJldlJhd1ByZXZUaW1lID09PSB0aW1lKSA/IHRpbWUgOiBfdGlueU51bTsgLy93aGVuIHRoZSBwbGF5aGVhZCBhcnJpdmVzIGF0IEVYQUNUTFkgdGltZSAwIChyaWdodCBvbiB0b3ApIG9mIGEgemVyby1kdXJhdGlvbiB0d2Vlbiwgd2UgbmVlZCB0byBkaXNjZXJuIGlmIGV2ZW50cyBhcmUgc3VwcHJlc3NlZCBzbyB0aGF0IHdoZW4gdGhlIHBsYXloZWFkIG1vdmVzIGFnYWluIChuZXh0IHRpbWUpLCBpdCdsbCB0cmlnZ2VyIHRoZSBjYWxsYmFjay4gSWYgZXZlbnRzIGFyZSBOT1Qgc3VwcHJlc3NlZCwgb2J2aW91c2x5IHRoZSBjYWxsYmFjayB3b3VsZCBiZSB0cmlnZ2VyZWQgaW4gdGhpcyByZW5kZXIuIEJhc2ljYWxseSwgdGhlIGNhbGxiYWNrIHNob3VsZCBmaXJlIGVpdGhlciB3aGVuIHRoZSBwbGF5aGVhZCBBUlJJVkVTIG9yIExFQVZFUyB0aGlzIGV4YWN0IHNwb3QsIG5vdCBib3RoLiBJbWFnaW5lIGRvaW5nIGEgdGltZWxpbmUuc2VlaygwKSBhbmQgdGhlcmUncyBhIGNhbGxiYWNrIHRoYXQgc2l0cyBhdCAwLiBTaW5jZSBldmVudHMgYXJlIHN1cHByZXNzZWQgb24gdGhhdCBzZWVrKCkgYnkgZGVmYXVsdCwgbm90aGluZyB3aWxsIGZpcmUsIGJ1dCB3aGVuIHRoZSBwbGF5aGVhZCBtb3ZlcyBvZmYgb2YgdGhhdCBwb3NpdGlvbiwgdGhlIGNhbGxiYWNrIHNob3VsZCBmaXJlLiBUaGlzIGJlaGF2aW9yIGlzIHdoYXQgcGVvcGxlIGludHVpdGl2ZWx5IGV4cGVjdC4gV2Ugc2V0IHRoZSBfcmF3UHJldlRpbWUgdG8gYmUgYSBwcmVjaXNlIHRpbnkgbnVtYmVyIHRvIGluZGljYXRlIHRoaXMgc2NlbmFyaW8gcmF0aGVyIHRoYW4gdXNpbmcgYW5vdGhlciBwcm9wZXJ0eS92YXJpYWJsZSB3aGljaCB3b3VsZCBpbmNyZWFzZSBtZW1vcnkgdXNhZ2UuIFRoaXMgdGVjaG5pcXVlIGlzIGxlc3MgcmVhZGFibGUsIGJ1dCBtb3JlIGVmZmljaWVudC5cblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdH0gZWxzZSBpZiAodGltZSA8IDAuMDAwMDAwMSkgeyAvL3RvIHdvcmsgYXJvdW5kIG9jY2FzaW9uYWwgZmxvYXRpbmcgcG9pbnQgbWF0aCBhcnRpZmFjdHMsIHJvdW5kIHN1cGVyIHNtYWxsIHZhbHVlcyB0byAwLlxuXHRcdFx0XHR0aGlzLl90b3RhbFRpbWUgPSB0aGlzLl90aW1lID0gdGhpcy5fY3ljbGUgPSAwO1xuXHRcdFx0XHR0aGlzLnJhdGlvID0gdGhpcy5fZWFzZS5fY2FsY0VuZCA/IHRoaXMuX2Vhc2UuZ2V0UmF0aW8oMCkgOiAwO1xuXHRcdFx0XHRpZiAocHJldlRvdGFsVGltZSAhPT0gMCB8fCAoZHVyYXRpb24gPT09IDAgJiYgcHJldlJhd1ByZXZUaW1lID4gMCkpIHtcblx0XHRcdFx0XHRjYWxsYmFjayA9IFwib25SZXZlcnNlQ29tcGxldGVcIjtcblx0XHRcdFx0XHRpc0NvbXBsZXRlID0gdGhpcy5fcmV2ZXJzZWQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHRpbWUgPCAwKSB7XG5cdFx0XHRcdFx0dGhpcy5fYWN0aXZlID0gZmFsc2U7XG5cdFx0XHRcdFx0aWYgKGR1cmF0aW9uID09PSAwKSBpZiAodGhpcy5faW5pdHRlZCB8fCAhdGhpcy52YXJzLmxhenkgfHwgZm9yY2UpIHsgLy96ZXJvLWR1cmF0aW9uIHR3ZWVucyBhcmUgdHJpY2t5IGJlY2F1c2Ugd2UgbXVzdCBkaXNjZXJuIHRoZSBtb21lbnR1bS9kaXJlY3Rpb24gb2YgdGltZSBpbiBvcmRlciB0byBkZXRlcm1pbmUgd2hldGhlciB0aGUgc3RhcnRpbmcgdmFsdWVzIHNob3VsZCBiZSByZW5kZXJlZCBvciB0aGUgZW5kaW5nIHZhbHVlcy4gSWYgdGhlIFwicGxheWhlYWRcIiBvZiBpdHMgdGltZWxpbmUgZ29lcyBwYXN0IHRoZSB6ZXJvLWR1cmF0aW9uIHR3ZWVuIGluIHRoZSBmb3J3YXJkIGRpcmVjdGlvbiBvciBsYW5kcyBkaXJlY3RseSBvbiBpdCwgdGhlIGVuZCB2YWx1ZXMgc2hvdWxkIGJlIHJlbmRlcmVkLCBidXQgaWYgdGhlIHRpbWVsaW5lJ3MgXCJwbGF5aGVhZFwiIG1vdmVzIHBhc3QgaXQgaW4gdGhlIGJhY2t3YXJkIGRpcmVjdGlvbiAoZnJvbSBhIHBvc3RpdGl2ZSB0aW1lIHRvIGEgbmVnYXRpdmUgdGltZSksIHRoZSBzdGFydGluZyB2YWx1ZXMgbXVzdCBiZSByZW5kZXJlZC5cblx0XHRcdFx0XHRcdGlmIChwcmV2UmF3UHJldlRpbWUgPj0gMCkge1xuXHRcdFx0XHRcdFx0XHRmb3JjZSA9IHRydWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR0aGlzLl9yYXdQcmV2VGltZSA9IHJhd1ByZXZUaW1lID0gKCFzdXBwcmVzc0V2ZW50cyB8fCB0aW1lIHx8IHByZXZSYXdQcmV2VGltZSA9PT0gdGltZSkgPyB0aW1lIDogX3RpbnlOdW07IC8vd2hlbiB0aGUgcGxheWhlYWQgYXJyaXZlcyBhdCBFWEFDVExZIHRpbWUgMCAocmlnaHQgb24gdG9wKSBvZiBhIHplcm8tZHVyYXRpb24gdHdlZW4sIHdlIG5lZWQgdG8gZGlzY2VybiBpZiBldmVudHMgYXJlIHN1cHByZXNzZWQgc28gdGhhdCB3aGVuIHRoZSBwbGF5aGVhZCBtb3ZlcyBhZ2FpbiAobmV4dCB0aW1lKSwgaXQnbGwgdHJpZ2dlciB0aGUgY2FsbGJhY2suIElmIGV2ZW50cyBhcmUgTk9UIHN1cHByZXNzZWQsIG9idmlvdXNseSB0aGUgY2FsbGJhY2sgd291bGQgYmUgdHJpZ2dlcmVkIGluIHRoaXMgcmVuZGVyLiBCYXNpY2FsbHksIHRoZSBjYWxsYmFjayBzaG91bGQgZmlyZSBlaXRoZXIgd2hlbiB0aGUgcGxheWhlYWQgQVJSSVZFUyBvciBMRUFWRVMgdGhpcyBleGFjdCBzcG90LCBub3QgYm90aC4gSW1hZ2luZSBkb2luZyBhIHRpbWVsaW5lLnNlZWsoMCkgYW5kIHRoZXJlJ3MgYSBjYWxsYmFjayB0aGF0IHNpdHMgYXQgMC4gU2luY2UgZXZlbnRzIGFyZSBzdXBwcmVzc2VkIG9uIHRoYXQgc2VlaygpIGJ5IGRlZmF1bHQsIG5vdGhpbmcgd2lsbCBmaXJlLCBidXQgd2hlbiB0aGUgcGxheWhlYWQgbW92ZXMgb2ZmIG9mIHRoYXQgcG9zaXRpb24sIHRoZSBjYWxsYmFjayBzaG91bGQgZmlyZS4gVGhpcyBiZWhhdmlvciBpcyB3aGF0IHBlb3BsZSBpbnR1aXRpdmVseSBleHBlY3QuIFdlIHNldCB0aGUgX3Jhd1ByZXZUaW1lIHRvIGJlIGEgcHJlY2lzZSB0aW55IG51bWJlciB0byBpbmRpY2F0ZSB0aGlzIHNjZW5hcmlvIHJhdGhlciB0aGFuIHVzaW5nIGFub3RoZXIgcHJvcGVydHkvdmFyaWFibGUgd2hpY2ggd291bGQgaW5jcmVhc2UgbWVtb3J5IHVzYWdlLiBUaGlzIHRlY2huaXF1ZSBpcyBsZXNzIHJlYWRhYmxlLCBidXQgbW9yZSBlZmZpY2llbnQuXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghdGhpcy5faW5pdHRlZCkgeyAvL2lmIHdlIHJlbmRlciB0aGUgdmVyeSBiZWdpbm5pbmcgKHRpbWUgPT0gMCkgb2YgYSBmcm9tVG8oKSwgd2UgbXVzdCBmb3JjZSB0aGUgcmVuZGVyIChub3JtYWwgdHdlZW5zIHdvdWxkbid0IG5lZWQgdG8gcmVuZGVyIGF0IGEgdGltZSBvZiAwIHdoZW4gdGhlIHByZXZUaW1lIHdhcyBhbHNvIDApLiBUaGlzIGlzIGFsc28gbWFuZGF0b3J5IHRvIG1ha2Ugc3VyZSBvdmVyd3JpdGluZyBraWNrcyBpbiBpbW1lZGlhdGVseS5cblx0XHRcdFx0XHRmb3JjZSA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuX3RvdGFsVGltZSA9IHRoaXMuX3RpbWUgPSB0aW1lO1xuXHRcdFx0XHRcblx0XHRcdFx0aWYgKHRoaXMuX3JlcGVhdCAhPT0gMCkge1xuXHRcdFx0XHRcdGN5Y2xlRHVyYXRpb24gPSBkdXJhdGlvbiArIHRoaXMuX3JlcGVhdERlbGF5O1xuXHRcdFx0XHRcdHRoaXMuX2N5Y2xlID0gKHRoaXMuX3RvdGFsVGltZSAvIGN5Y2xlRHVyYXRpb24pID4+IDA7IC8vb3JpZ2luYWxseSBfdG90YWxUaW1lICUgY3ljbGVEdXJhdGlvbiBidXQgZmxvYXRpbmcgcG9pbnQgZXJyb3JzIGNhdXNlZCBwcm9ibGVtcywgc28gSSBub3JtYWxpemVkIGl0LiAoNCAlIDAuOCBzaG91bGQgYmUgMCBidXQgRmxhc2ggcmVwb3J0cyBpdCBhcyAwLjc5OTk5OTk5ISlcblx0XHRcdFx0XHRpZiAodGhpcy5fY3ljbGUgIT09IDApIGlmICh0aGlzLl9jeWNsZSA9PT0gdGhpcy5fdG90YWxUaW1lIC8gY3ljbGVEdXJhdGlvbikge1xuXHRcdFx0XHRcdFx0dGhpcy5fY3ljbGUtLTsgLy9vdGhlcndpc2Ugd2hlbiByZW5kZXJlZCBleGFjdGx5IGF0IHRoZSBlbmQgdGltZSwgaXQgd2lsbCBhY3QgYXMgdGhvdWdoIGl0IGlzIHJlcGVhdGluZyAoYXQgdGhlIGJlZ2lubmluZylcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5fdGltZSA9IHRoaXMuX3RvdGFsVGltZSAtICh0aGlzLl9jeWNsZSAqIGN5Y2xlRHVyYXRpb24pO1xuXHRcdFx0XHRcdGlmICh0aGlzLl95b3lvKSBpZiAoKHRoaXMuX2N5Y2xlICYgMSkgIT09IDApIHtcblx0XHRcdFx0XHRcdHRoaXMuX3RpbWUgPSBkdXJhdGlvbiAtIHRoaXMuX3RpbWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICh0aGlzLl90aW1lID4gZHVyYXRpb24pIHtcblx0XHRcdFx0XHRcdHRoaXMuX3RpbWUgPSBkdXJhdGlvbjtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMuX3RpbWUgPCAwKSB7XG5cdFx0XHRcdFx0XHR0aGlzLl90aW1lID0gMDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAodGhpcy5fZWFzZVR5cGUpIHtcblx0XHRcdFx0XHRyID0gdGhpcy5fdGltZSAvIGR1cmF0aW9uO1xuXHRcdFx0XHRcdHR5cGUgPSB0aGlzLl9lYXNlVHlwZTtcblx0XHRcdFx0XHRwb3cgPSB0aGlzLl9lYXNlUG93ZXI7XG5cdFx0XHRcdFx0aWYgKHR5cGUgPT09IDEgfHwgKHR5cGUgPT09IDMgJiYgciA+PSAwLjUpKSB7XG5cdFx0XHRcdFx0XHRyID0gMSAtIHI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICh0eXBlID09PSAzKSB7XG5cdFx0XHRcdFx0XHRyICo9IDI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChwb3cgPT09IDEpIHtcblx0XHRcdFx0XHRcdHIgKj0gcjtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHBvdyA9PT0gMikge1xuXHRcdFx0XHRcdFx0ciAqPSByICogcjtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHBvdyA9PT0gMykge1xuXHRcdFx0XHRcdFx0ciAqPSByICogciAqIHI7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChwb3cgPT09IDQpIHtcblx0XHRcdFx0XHRcdHIgKj0gciAqIHIgKiByICogcjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAodHlwZSA9PT0gMSkge1xuXHRcdFx0XHRcdFx0dGhpcy5yYXRpbyA9IDEgLSByO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAodHlwZSA9PT0gMikge1xuXHRcdFx0XHRcdFx0dGhpcy5yYXRpbyA9IHI7XG5cdFx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLl90aW1lIC8gZHVyYXRpb24gPCAwLjUpIHtcblx0XHRcdFx0XHRcdHRoaXMucmF0aW8gPSByIC8gMjtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy5yYXRpbyA9IDEgLSAociAvIDIpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMucmF0aW8gPSB0aGlzLl9lYXNlLmdldFJhdGlvKHRoaXMuX3RpbWUgLyBkdXJhdGlvbik7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0aWYgKHByZXZUaW1lID09PSB0aGlzLl90aW1lICYmICFmb3JjZSAmJiBwcmV2Q3ljbGUgPT09IHRoaXMuX2N5Y2xlKSB7XG5cdFx0XHRcdGlmIChwcmV2VG90YWxUaW1lICE9PSB0aGlzLl90b3RhbFRpbWUpIGlmICh0aGlzLl9vblVwZGF0ZSkgaWYgKCFzdXBwcmVzc0V2ZW50cykgeyAvL3NvIHRoYXQgb25VcGRhdGUgZmlyZXMgZXZlbiBkdXJpbmcgdGhlIHJlcGVhdERlbGF5IC0gYXMgbG9uZyBhcyB0aGUgdG90YWxUaW1lIGNoYW5nZWQsIHdlIHNob3VsZCB0cmlnZ2VyIG9uVXBkYXRlLlxuXHRcdFx0XHRcdHRoaXMuX29uVXBkYXRlLmFwcGx5KHRoaXMudmFycy5vblVwZGF0ZVNjb3BlIHx8IHRoaXMsIHRoaXMudmFycy5vblVwZGF0ZVBhcmFtcyB8fCBfYmxhbmtBcnJheSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fSBlbHNlIGlmICghdGhpcy5faW5pdHRlZCkge1xuXHRcdFx0XHR0aGlzLl9pbml0KCk7XG5cdFx0XHRcdGlmICghdGhpcy5faW5pdHRlZCB8fCB0aGlzLl9nYykgeyAvL2ltbWVkaWF0ZVJlbmRlciB0d2VlbnMgdHlwaWNhbGx5IHdvbid0IGluaXRpYWxpemUgdW50aWwgdGhlIHBsYXloZWFkIGFkdmFuY2VzIChfdGltZSBpcyBncmVhdGVyIHRoYW4gMCkgaW4gb3JkZXIgdG8gZW5zdXJlIHRoYXQgb3ZlcndyaXRpbmcgb2NjdXJzIHByb3Blcmx5LiBBbHNvLCBpZiBhbGwgb2YgdGhlIHR3ZWVuaW5nIHByb3BlcnRpZXMgaGF2ZSBiZWVuIG92ZXJ3cml0dGVuICh3aGljaCB3b3VsZCBjYXVzZSBfZ2MgdG8gYmUgdHJ1ZSwgYXMgc2V0IGluIF9pbml0KCkpLCB3ZSBzaG91bGRuJ3QgY29udGludWUgb3RoZXJ3aXNlIGFuIG9uU3RhcnQgY2FsbGJhY2sgY291bGQgYmUgY2FsbGVkIGZvciBleGFtcGxlLlxuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fSBlbHNlIGlmICghZm9yY2UgJiYgdGhpcy5fZmlyc3RQVCAmJiAoKHRoaXMudmFycy5sYXp5ICE9PSBmYWxzZSAmJiB0aGlzLl9kdXJhdGlvbikgfHwgKHRoaXMudmFycy5sYXp5ICYmICF0aGlzLl9kdXJhdGlvbikpKSB7IC8vd2Ugc3RpY2sgaXQgaW4gdGhlIHF1ZXVlIGZvciByZW5kZXJpbmcgYXQgdGhlIHZlcnkgZW5kIG9mIHRoZSB0aWNrIC0gdGhpcyBpcyBhIHBlcmZvcm1hbmNlIG9wdGltaXphdGlvbiBiZWNhdXNlIGJyb3dzZXJzIGludmFsaWRhdGUgc3R5bGVzIGFuZCBmb3JjZSBhIHJlY2FsY3VsYXRpb24gaWYgeW91IHJlYWQsIHdyaXRlLCBhbmQgdGhlbiByZWFkIHN0eWxlIGRhdGEgKHNvIGl0J3MgYmV0dGVyIHRvIHJlYWQvcmVhZC9yZWFkL3dyaXRlL3dyaXRlL3dyaXRlIHRoYW4gcmVhZC93cml0ZS9yZWFkL3dyaXRlL3JlYWQvd3JpdGUpLiBUaGUgZG93biBzaWRlLCBvZiBjb3Vyc2UsIGlzIHRoYXQgdXN1YWxseSB5b3UgV0FOVCB0aGluZ3MgdG8gcmVuZGVyIGltbWVkaWF0ZWx5IGJlY2F1c2UgeW91IG1heSBoYXZlIGNvZGUgcnVubmluZyByaWdodCBhZnRlciB0aGF0IHdoaWNoIGRlcGVuZHMgb24gdGhlIGNoYW5nZS4gTGlrZSBpbWFnaW5lIHJ1bm5pbmcgVHdlZW5MaXRlLnNldCguLi4pIGFuZCB0aGVuIGltbWVkaWF0ZWx5IGFmdGVyIHRoYXQsIGNyZWF0aW5nIGEgbm90aGVyIHR3ZWVuIHRoYXQgYW5pbWF0ZXMgdGhlIHNhbWUgcHJvcGVydHkgdG8gYW5vdGhlciB2YWx1ZTsgdGhlIHN0YXJ0aW5nIHZhbHVlcyBvZiB0aGF0IDJuZCB0d2VlbiB3b3VsZG4ndCBiZSBhY2N1cmF0ZSBpZiBsYXp5IGlzIHRydWUuXG5cdFx0XHRcdFx0dGhpcy5fdGltZSA9IHByZXZUaW1lO1xuXHRcdFx0XHRcdHRoaXMuX3RvdGFsVGltZSA9IHByZXZUb3RhbFRpbWU7XG5cdFx0XHRcdFx0dGhpcy5fcmF3UHJldlRpbWUgPSBwcmV2UmF3UHJldlRpbWU7XG5cdFx0XHRcdFx0dGhpcy5fY3ljbGUgPSBwcmV2Q3ljbGU7XG5cdFx0XHRcdFx0VHdlZW5MaXRlSW50ZXJuYWxzLmxhenlUd2VlbnMucHVzaCh0aGlzKTtcblx0XHRcdFx0XHR0aGlzLl9sYXp5ID0gW3RpbWUsIHN1cHByZXNzRXZlbnRzXTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly9fZWFzZSBpcyBpbml0aWFsbHkgc2V0IHRvIGRlZmF1bHRFYXNlLCBzbyBub3cgdGhhdCBpbml0KCkgaGFzIHJ1biwgX2Vhc2UgaXMgc2V0IHByb3Blcmx5IGFuZCB3ZSBuZWVkIHRvIHJlY2FsY3VsYXRlIHRoZSByYXRpby4gT3ZlcmFsbCB0aGlzIGlzIGZhc3RlciB0aGFuIHVzaW5nIGNvbmRpdGlvbmFsIGxvZ2ljIGVhcmxpZXIgaW4gdGhlIG1ldGhvZCB0byBhdm9pZCBoYXZpbmcgdG8gc2V0IHJhdGlvIHR3aWNlIGJlY2F1c2Ugd2Ugb25seSBpbml0KCkgb25jZSBidXQgcmVuZGVyVGltZSgpIGdldHMgY2FsbGVkIFZFUlkgZnJlcXVlbnRseS5cblx0XHRcdFx0aWYgKHRoaXMuX3RpbWUgJiYgIWlzQ29tcGxldGUpIHtcblx0XHRcdFx0XHR0aGlzLnJhdGlvID0gdGhpcy5fZWFzZS5nZXRSYXRpbyh0aGlzLl90aW1lIC8gZHVyYXRpb24pO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGlzQ29tcGxldGUgJiYgdGhpcy5fZWFzZS5fY2FsY0VuZCkge1xuXHRcdFx0XHRcdHRoaXMucmF0aW8gPSB0aGlzLl9lYXNlLmdldFJhdGlvKCh0aGlzLl90aW1lID09PSAwKSA/IDAgOiAxKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuX2xhenkgIT09IGZhbHNlKSB7XG5cdFx0XHRcdHRoaXMuX2xhenkgPSBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCF0aGlzLl9hY3RpdmUpIGlmICghdGhpcy5fcGF1c2VkICYmIHRoaXMuX3RpbWUgIT09IHByZXZUaW1lICYmIHRpbWUgPj0gMCkge1xuXHRcdFx0XHR0aGlzLl9hY3RpdmUgPSB0cnVlOyAvL3NvIHRoYXQgaWYgdGhlIHVzZXIgcmVuZGVycyBhIHR3ZWVuIChhcyBvcHBvc2VkIHRvIHRoZSB0aW1lbGluZSByZW5kZXJpbmcgaXQpLCB0aGUgdGltZWxpbmUgaXMgZm9yY2VkIHRvIHJlLXJlbmRlciBhbmQgYWxpZ24gaXQgd2l0aCB0aGUgcHJvcGVyIHRpbWUvZnJhbWUgb24gdGhlIG5leHQgcmVuZGVyaW5nIGN5Y2xlLiBNYXliZSB0aGUgdHdlZW4gYWxyZWFkeSBmaW5pc2hlZCBidXQgdGhlIHVzZXIgbWFudWFsbHkgcmUtcmVuZGVycyBpdCBhcyBoYWxmd2F5IGRvbmUuXG5cdFx0XHR9XG5cdFx0XHRpZiAocHJldlRvdGFsVGltZSA9PT0gMCkge1xuXHRcdFx0XHRpZiAodGhpcy5faW5pdHRlZCA9PT0gMiAmJiB0aW1lID4gMCkge1xuXHRcdFx0XHRcdC8vdGhpcy5pbnZhbGlkYXRlKCk7XG5cdFx0XHRcdFx0dGhpcy5faW5pdCgpOyAvL3dpbGwganVzdCBhcHBseSBvdmVyd3JpdGluZyBzaW5jZSBfaW5pdHRlZCBvZiAoMikgbWVhbnMgaXQgd2FzIGEgZnJvbSgpIHR3ZWVuIHRoYXQgaGFkIGltbWVkaWF0ZVJlbmRlcjp0cnVlXG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHRoaXMuX3N0YXJ0QXQpIHtcblx0XHRcdFx0XHRpZiAodGltZSA+PSAwKSB7XG5cdFx0XHRcdFx0XHR0aGlzLl9zdGFydEF0LnJlbmRlcih0aW1lLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoIWNhbGxiYWNrKSB7XG5cdFx0XHRcdFx0XHRjYWxsYmFjayA9IFwiX2R1bW15R1NcIjsgLy9pZiBubyBjYWxsYmFjayBpcyBkZWZpbmVkLCB1c2UgYSBkdW1teSB2YWx1ZSBqdXN0IHNvIHRoYXQgdGhlIGNvbmRpdGlvbiBhdCB0aGUgZW5kIGV2YWx1YXRlcyBhcyB0cnVlIGJlY2F1c2UgX3N0YXJ0QXQgc2hvdWxkIHJlbmRlciBBRlRFUiB0aGUgbm9ybWFsIHJlbmRlciBsb29wIHdoZW4gdGhlIHRpbWUgaXMgbmVnYXRpdmUuIFdlIGNvdWxkIGhhbmRsZSB0aGlzIGluIGEgbW9yZSBpbnR1aXRpdmUgd2F5LCBvZiBjb3Vyc2UsIGJ1dCB0aGUgcmVuZGVyIGxvb3AgaXMgdGhlIE1PU1QgaW1wb3J0YW50IHRoaW5nIHRvIG9wdGltaXplLCBzbyB0aGlzIHRlY2huaXF1ZSBhbGxvd3MgdXMgdG8gYXZvaWQgYWRkaW5nIGV4dHJhIGNvbmRpdGlvbmFsIGxvZ2ljIGluIGEgaGlnaC1mcmVxdWVuY3kgYXJlYS5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHRoaXMudmFycy5vblN0YXJ0KSBpZiAodGhpcy5fdG90YWxUaW1lICE9PSAwIHx8IGR1cmF0aW9uID09PSAwKSBpZiAoIXN1cHByZXNzRXZlbnRzKSB7XG5cdFx0XHRcdFx0dGhpcy52YXJzLm9uU3RhcnQuYXBwbHkodGhpcy52YXJzLm9uU3RhcnRTY29wZSB8fCB0aGlzLCB0aGlzLnZhcnMub25TdGFydFBhcmFtcyB8fCBfYmxhbmtBcnJheSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0cHQgPSB0aGlzLl9maXJzdFBUO1xuXHRcdFx0d2hpbGUgKHB0KSB7XG5cdFx0XHRcdGlmIChwdC5mKSB7XG5cdFx0XHRcdFx0cHQudFtwdC5wXShwdC5jICogdGhpcy5yYXRpbyArIHB0LnMpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHB0LnRbcHQucF0gPSBwdC5jICogdGhpcy5yYXRpbyArIHB0LnM7XG5cdFx0XHRcdH1cblx0XHRcdFx0cHQgPSBwdC5fbmV4dDtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0aWYgKHRoaXMuX29uVXBkYXRlKSB7XG5cdFx0XHRcdGlmICh0aW1lIDwgMCkgaWYgKHRoaXMuX3N0YXJ0QXQgJiYgdGhpcy5fc3RhcnRUaW1lKSB7IC8vaWYgdGhlIHR3ZWVuIGlzIHBvc2l0aW9uZWQgYXQgdGhlIFZFUlkgYmVnaW5uaW5nIChfc3RhcnRUaW1lIDApIG9mIGl0cyBwYXJlbnQgdGltZWxpbmUsIGl0J3MgaWxsZWdhbCBmb3IgdGhlIHBsYXloZWFkIHRvIGdvIGJhY2sgZnVydGhlciwgc28gd2Ugc2hvdWxkIG5vdCByZW5kZXIgdGhlIHJlY29yZGVkIHN0YXJ0QXQgdmFsdWVzLlxuXHRcdFx0XHRcdHRoaXMuX3N0YXJ0QXQucmVuZGVyKHRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSk7IC8vbm90ZTogZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMsIHdlIHR1Y2sgdGhpcyBjb25kaXRpb25hbCBsb2dpYyBpbnNpZGUgbGVzcyB0cmF2ZWxlZCBhcmVhcyAobW9zdCB0d2VlbnMgZG9uJ3QgaGF2ZSBhbiBvblVwZGF0ZSkuIFdlJ2QganVzdCBoYXZlIGl0IGF0IHRoZSBlbmQgYmVmb3JlIHRoZSBvbkNvbXBsZXRlLCBidXQgdGhlIHZhbHVlcyBzaG91bGQgYmUgdXBkYXRlZCBiZWZvcmUgYW55IG9uVXBkYXRlIGlzIGNhbGxlZCwgc28gd2UgQUxTTyBwdXQgaXQgaGVyZSBhbmQgdGhlbiBpZiBpdCdzIG5vdCBjYWxsZWQsIHdlIGRvIHNvIGxhdGVyIG5lYXIgdGhlIG9uQ29tcGxldGUuXG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFzdXBwcmVzc0V2ZW50cykgaWYgKHRoaXMuX3RvdGFsVGltZSAhPT0gcHJldlRvdGFsVGltZSB8fCBpc0NvbXBsZXRlKSB7XG5cdFx0XHRcdFx0dGhpcy5fb25VcGRhdGUuYXBwbHkodGhpcy52YXJzLm9uVXBkYXRlU2NvcGUgfHwgdGhpcywgdGhpcy52YXJzLm9uVXBkYXRlUGFyYW1zIHx8IF9ibGFua0FycmF5KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuX2N5Y2xlICE9PSBwcmV2Q3ljbGUpIGlmICghc3VwcHJlc3NFdmVudHMpIGlmICghdGhpcy5fZ2MpIGlmICh0aGlzLnZhcnMub25SZXBlYXQpIHtcblx0XHRcdFx0dGhpcy52YXJzLm9uUmVwZWF0LmFwcGx5KHRoaXMudmFycy5vblJlcGVhdFNjb3BlIHx8IHRoaXMsIHRoaXMudmFycy5vblJlcGVhdFBhcmFtcyB8fCBfYmxhbmtBcnJheSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY2FsbGJhY2spIGlmICghdGhpcy5fZ2MgfHwgZm9yY2UpIHsgLy9jaGVjayBnYyBiZWNhdXNlIHRoZXJlJ3MgYSBjaGFuY2UgdGhhdCBraWxsKCkgY291bGQgYmUgY2FsbGVkIGluIGFuIG9uVXBkYXRlXG5cdFx0XHRcdGlmICh0aW1lIDwgMCAmJiB0aGlzLl9zdGFydEF0ICYmICF0aGlzLl9vblVwZGF0ZSAmJiB0aGlzLl9zdGFydFRpbWUpIHsgLy9pZiB0aGUgdHdlZW4gaXMgcG9zaXRpb25lZCBhdCB0aGUgVkVSWSBiZWdpbm5pbmcgKF9zdGFydFRpbWUgMCkgb2YgaXRzIHBhcmVudCB0aW1lbGluZSwgaXQncyBpbGxlZ2FsIGZvciB0aGUgcGxheWhlYWQgdG8gZ28gYmFjayBmdXJ0aGVyLCBzbyB3ZSBzaG91bGQgbm90IHJlbmRlciB0aGUgcmVjb3JkZWQgc3RhcnRBdCB2YWx1ZXMuXG5cdFx0XHRcdFx0dGhpcy5fc3RhcnRBdC5yZW5kZXIodGltZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoaXNDb21wbGV0ZSkge1xuXHRcdFx0XHRcdGlmICh0aGlzLl90aW1lbGluZS5hdXRvUmVtb3ZlQ2hpbGRyZW4pIHtcblx0XHRcdFx0XHRcdHRoaXMuX2VuYWJsZWQoZmFsc2UsIGZhbHNlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5fYWN0aXZlID0gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFzdXBwcmVzc0V2ZW50cyAmJiB0aGlzLnZhcnNbY2FsbGJhY2tdKSB7XG5cdFx0XHRcdFx0dGhpcy52YXJzW2NhbGxiYWNrXS5hcHBseSh0aGlzLnZhcnNbY2FsbGJhY2sgKyBcIlNjb3BlXCJdIHx8IHRoaXMsIHRoaXMudmFyc1tjYWxsYmFjayArIFwiUGFyYW1zXCJdIHx8IF9ibGFua0FycmF5KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZHVyYXRpb24gPT09IDAgJiYgdGhpcy5fcmF3UHJldlRpbWUgPT09IF90aW55TnVtICYmIHJhd1ByZXZUaW1lICE9PSBfdGlueU51bSkgeyAvL3RoZSBvbkNvbXBsZXRlIG9yIG9uUmV2ZXJzZUNvbXBsZXRlIGNvdWxkIHRyaWdnZXIgbW92ZW1lbnQgb2YgdGhlIHBsYXloZWFkIGFuZCBmb3IgemVyby1kdXJhdGlvbiB0d2VlbnMgKHdoaWNoIG11c3QgZGlzY2VybiBkaXJlY3Rpb24pIHRoYXQgbGFuZCBkaXJlY3RseSBiYWNrIG9uIHRoZWlyIHN0YXJ0IHRpbWUsIHdlIGRvbid0IHdhbnQgdG8gZmlyZSBhZ2FpbiBvbiB0aGUgbmV4dCByZW5kZXIuIFRoaW5rIG9mIHNldmVyYWwgYWRkUGF1c2UoKSdzIGluIGEgdGltZWxpbmUgdGhhdCBmb3JjZXMgdGhlIHBsYXloZWFkIHRvIGEgY2VydGFpbiBzcG90LCBidXQgd2hhdCBpZiBpdCdzIGFscmVhZHkgcGF1c2VkIGFuZCBhbm90aGVyIHR3ZWVuIGlzIHR3ZWVuaW5nIHRoZSBcInRpbWVcIiBvZiB0aGUgdGltZWxpbmU/IEVhY2ggdGltZSBpdCBtb3ZlcyBbZm9yd2FyZF0gcGFzdCB0aGF0IHNwb3QsIGl0IHdvdWxkIG1vdmUgYmFjaywgYW5kIHNpbmNlIHN1cHByZXNzRXZlbnRzIGlzIHRydWUsIGl0J2QgcmVzZXQgX3Jhd1ByZXZUaW1lIHRvIF90aW55TnVtIHNvIHRoYXQgd2hlbiBpdCBiZWdpbnMgYWdhaW4sIHRoZSBjYWxsYmFjayB3b3VsZCBmaXJlIChzbyB1bHRpbWF0ZWx5IGl0IGNvdWxkIGJvdW5jZSBiYWNrIGFuZCBmb3J0aCBkdXJpbmcgdGhhdCB0d2VlbikuIEFnYWluLCB0aGlzIGlzIGEgdmVyeSB1bmNvbW1vbiBzY2VuYXJpbywgYnV0IHBvc3NpYmxlIG5vbmV0aGVsZXNzLlxuXHRcdFx0XHRcdHRoaXMuX3Jhd1ByZXZUaW1lID0gMDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cdFx0XG4vLy0tLS0gU1RBVElDIEZVTkNUSU9OUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdFxuXHRcdFR3ZWVuTWF4LnRvID0gZnVuY3Rpb24odGFyZ2V0LCBkdXJhdGlvbiwgdmFycykge1xuXHRcdFx0cmV0dXJuIG5ldyBUd2Vlbk1heCh0YXJnZXQsIGR1cmF0aW9uLCB2YXJzKTtcblx0XHR9O1xuXHRcdFxuXHRcdFR3ZWVuTWF4LmZyb20gPSBmdW5jdGlvbih0YXJnZXQsIGR1cmF0aW9uLCB2YXJzKSB7XG5cdFx0XHR2YXJzLnJ1bkJhY2t3YXJkcyA9IHRydWU7XG5cdFx0XHR2YXJzLmltbWVkaWF0ZVJlbmRlciA9ICh2YXJzLmltbWVkaWF0ZVJlbmRlciAhPSBmYWxzZSk7XG5cdFx0XHRyZXR1cm4gbmV3IFR3ZWVuTWF4KHRhcmdldCwgZHVyYXRpb24sIHZhcnMpO1xuXHRcdH07XG5cdFx0XG5cdFx0VHdlZW5NYXguZnJvbVRvID0gZnVuY3Rpb24odGFyZ2V0LCBkdXJhdGlvbiwgZnJvbVZhcnMsIHRvVmFycykge1xuXHRcdFx0dG9WYXJzLnN0YXJ0QXQgPSBmcm9tVmFycztcblx0XHRcdHRvVmFycy5pbW1lZGlhdGVSZW5kZXIgPSAodG9WYXJzLmltbWVkaWF0ZVJlbmRlciAhPSBmYWxzZSAmJiBmcm9tVmFycy5pbW1lZGlhdGVSZW5kZXIgIT0gZmFsc2UpO1xuXHRcdFx0cmV0dXJuIG5ldyBUd2Vlbk1heCh0YXJnZXQsIGR1cmF0aW9uLCB0b1ZhcnMpO1xuXHRcdH07XG5cdFx0XG5cdFx0VHdlZW5NYXguc3RhZ2dlclRvID0gVHdlZW5NYXguYWxsVG8gPSBmdW5jdGlvbih0YXJnZXRzLCBkdXJhdGlvbiwgdmFycywgc3RhZ2dlciwgb25Db21wbGV0ZUFsbCwgb25Db21wbGV0ZUFsbFBhcmFtcywgb25Db21wbGV0ZUFsbFNjb3BlKSB7XG5cdFx0XHRzdGFnZ2VyID0gc3RhZ2dlciB8fCAwO1xuXHRcdFx0dmFyIGRlbGF5ID0gdmFycy5kZWxheSB8fCAwLFxuXHRcdFx0XHRhID0gW10sXG5cdFx0XHRcdGZpbmFsQ29tcGxldGUgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpZiAodmFycy5vbkNvbXBsZXRlKSB7XG5cdFx0XHRcdFx0XHR2YXJzLm9uQ29tcGxldGUuYXBwbHkodmFycy5vbkNvbXBsZXRlU2NvcGUgfHwgdGhpcywgYXJndW1lbnRzKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0b25Db21wbGV0ZUFsbC5hcHBseShvbkNvbXBsZXRlQWxsU2NvcGUgfHwgdGhpcywgb25Db21wbGV0ZUFsbFBhcmFtcyB8fCBfYmxhbmtBcnJheSk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGwsIGNvcHksIGksIHA7XG5cdFx0XHRpZiAoIV9pc0FycmF5KHRhcmdldHMpKSB7XG5cdFx0XHRcdGlmICh0eXBlb2YodGFyZ2V0cykgPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdFx0XHR0YXJnZXRzID0gVHdlZW5MaXRlLnNlbGVjdG9yKHRhcmdldHMpIHx8IHRhcmdldHM7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKF9pc1NlbGVjdG9yKHRhcmdldHMpKSB7XG5cdFx0XHRcdFx0dGFyZ2V0cyA9IF9zbGljZSh0YXJnZXRzKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGFyZ2V0cyA9IHRhcmdldHMgfHwgW107XG5cdFx0XHRpZiAoc3RhZ2dlciA8IDApIHtcblx0XHRcdFx0dGFyZ2V0cyA9IF9zbGljZSh0YXJnZXRzKTtcblx0XHRcdFx0dGFyZ2V0cy5yZXZlcnNlKCk7XG5cdFx0XHRcdHN0YWdnZXIgKj0gLTE7XG5cdFx0XHR9XG5cdFx0XHRsID0gdGFyZ2V0cy5sZW5ndGggLSAxO1xuXHRcdFx0Zm9yIChpID0gMDsgaSA8PSBsOyBpKyspIHtcblx0XHRcdFx0Y29weSA9IHt9O1xuXHRcdFx0XHRmb3IgKHAgaW4gdmFycykge1xuXHRcdFx0XHRcdGNvcHlbcF0gPSB2YXJzW3BdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvcHkuZGVsYXkgPSBkZWxheTtcblx0XHRcdFx0aWYgKGkgPT09IGwgJiYgb25Db21wbGV0ZUFsbCkge1xuXHRcdFx0XHRcdGNvcHkub25Db21wbGV0ZSA9IGZpbmFsQ29tcGxldGU7XG5cdFx0XHRcdH1cblx0XHRcdFx0YVtpXSA9IG5ldyBUd2Vlbk1heCh0YXJnZXRzW2ldLCBkdXJhdGlvbiwgY29weSk7XG5cdFx0XHRcdGRlbGF5ICs9IHN0YWdnZXI7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gYTtcblx0XHR9O1xuXHRcdFxuXHRcdFR3ZWVuTWF4LnN0YWdnZXJGcm9tID0gVHdlZW5NYXguYWxsRnJvbSA9IGZ1bmN0aW9uKHRhcmdldHMsIGR1cmF0aW9uLCB2YXJzLCBzdGFnZ2VyLCBvbkNvbXBsZXRlQWxsLCBvbkNvbXBsZXRlQWxsUGFyYW1zLCBvbkNvbXBsZXRlQWxsU2NvcGUpIHtcblx0XHRcdHZhcnMucnVuQmFja3dhcmRzID0gdHJ1ZTtcblx0XHRcdHZhcnMuaW1tZWRpYXRlUmVuZGVyID0gKHZhcnMuaW1tZWRpYXRlUmVuZGVyICE9IGZhbHNlKTtcblx0XHRcdHJldHVybiBUd2Vlbk1heC5zdGFnZ2VyVG8odGFyZ2V0cywgZHVyYXRpb24sIHZhcnMsIHN0YWdnZXIsIG9uQ29tcGxldGVBbGwsIG9uQ29tcGxldGVBbGxQYXJhbXMsIG9uQ29tcGxldGVBbGxTY29wZSk7XG5cdFx0fTtcblx0XHRcblx0XHRUd2Vlbk1heC5zdGFnZ2VyRnJvbVRvID0gVHdlZW5NYXguYWxsRnJvbVRvID0gZnVuY3Rpb24odGFyZ2V0cywgZHVyYXRpb24sIGZyb21WYXJzLCB0b1ZhcnMsIHN0YWdnZXIsIG9uQ29tcGxldGVBbGwsIG9uQ29tcGxldGVBbGxQYXJhbXMsIG9uQ29tcGxldGVBbGxTY29wZSkge1xuXHRcdFx0dG9WYXJzLnN0YXJ0QXQgPSBmcm9tVmFycztcblx0XHRcdHRvVmFycy5pbW1lZGlhdGVSZW5kZXIgPSAodG9WYXJzLmltbWVkaWF0ZVJlbmRlciAhPSBmYWxzZSAmJiBmcm9tVmFycy5pbW1lZGlhdGVSZW5kZXIgIT0gZmFsc2UpO1xuXHRcdFx0cmV0dXJuIFR3ZWVuTWF4LnN0YWdnZXJUbyh0YXJnZXRzLCBkdXJhdGlvbiwgdG9WYXJzLCBzdGFnZ2VyLCBvbkNvbXBsZXRlQWxsLCBvbkNvbXBsZXRlQWxsUGFyYW1zLCBvbkNvbXBsZXRlQWxsU2NvcGUpO1xuXHRcdH07XG5cdFx0XHRcdFxuXHRcdFR3ZWVuTWF4LmRlbGF5ZWRDYWxsID0gZnVuY3Rpb24oZGVsYXksIGNhbGxiYWNrLCBwYXJhbXMsIHNjb3BlLCB1c2VGcmFtZXMpIHtcblx0XHRcdHJldHVybiBuZXcgVHdlZW5NYXgoY2FsbGJhY2ssIDAsIHtkZWxheTpkZWxheSwgb25Db21wbGV0ZTpjYWxsYmFjaywgb25Db21wbGV0ZVBhcmFtczpwYXJhbXMsIG9uQ29tcGxldGVTY29wZTpzY29wZSwgb25SZXZlcnNlQ29tcGxldGU6Y2FsbGJhY2ssIG9uUmV2ZXJzZUNvbXBsZXRlUGFyYW1zOnBhcmFtcywgb25SZXZlcnNlQ29tcGxldGVTY29wZTpzY29wZSwgaW1tZWRpYXRlUmVuZGVyOmZhbHNlLCB1c2VGcmFtZXM6dXNlRnJhbWVzLCBvdmVyd3JpdGU6MH0pO1xuXHRcdH07XG5cdFx0XG5cdFx0VHdlZW5NYXguc2V0ID0gZnVuY3Rpb24odGFyZ2V0LCB2YXJzKSB7XG5cdFx0XHRyZXR1cm4gbmV3IFR3ZWVuTWF4KHRhcmdldCwgMCwgdmFycyk7XG5cdFx0fTtcblx0XHRcblx0XHRUd2Vlbk1heC5pc1R3ZWVuaW5nID0gZnVuY3Rpb24odGFyZ2V0KSB7XG5cdFx0XHRyZXR1cm4gKFR3ZWVuTGl0ZS5nZXRUd2VlbnNPZih0YXJnZXQsIHRydWUpLmxlbmd0aCA+IDApO1xuXHRcdH07XG5cdFx0XG5cdFx0dmFyIF9nZXRDaGlsZHJlbk9mID0gZnVuY3Rpb24odGltZWxpbmUsIGluY2x1ZGVUaW1lbGluZXMpIHtcblx0XHRcdFx0dmFyIGEgPSBbXSxcblx0XHRcdFx0XHRjbnQgPSAwLFxuXHRcdFx0XHRcdHR3ZWVuID0gdGltZWxpbmUuX2ZpcnN0O1xuXHRcdFx0XHR3aGlsZSAodHdlZW4pIHtcblx0XHRcdFx0XHRpZiAodHdlZW4gaW5zdGFuY2VvZiBUd2VlbkxpdGUpIHtcblx0XHRcdFx0XHRcdGFbY250KytdID0gdHdlZW47XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGlmIChpbmNsdWRlVGltZWxpbmVzKSB7XG5cdFx0XHRcdFx0XHRcdGFbY250KytdID0gdHdlZW47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRhID0gYS5jb25jYXQoX2dldENoaWxkcmVuT2YodHdlZW4sIGluY2x1ZGVUaW1lbGluZXMpKTtcblx0XHRcdFx0XHRcdGNudCA9IGEubGVuZ3RoO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0d2VlbiA9IHR3ZWVuLl9uZXh0O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBhO1xuXHRcdFx0fSwgXG5cdFx0XHRnZXRBbGxUd2VlbnMgPSBUd2Vlbk1heC5nZXRBbGxUd2VlbnMgPSBmdW5jdGlvbihpbmNsdWRlVGltZWxpbmVzKSB7XG5cdFx0XHRcdHJldHVybiBfZ2V0Q2hpbGRyZW5PZihBbmltYXRpb24uX3Jvb3RUaW1lbGluZSwgaW5jbHVkZVRpbWVsaW5lcykuY29uY2F0KCBfZ2V0Q2hpbGRyZW5PZihBbmltYXRpb24uX3Jvb3RGcmFtZXNUaW1lbGluZSwgaW5jbHVkZVRpbWVsaW5lcykgKTtcblx0XHRcdH07XG5cdFx0XG5cdFx0VHdlZW5NYXgua2lsbEFsbCA9IGZ1bmN0aW9uKGNvbXBsZXRlLCB0d2VlbnMsIGRlbGF5ZWRDYWxscywgdGltZWxpbmVzKSB7XG5cdFx0XHRpZiAodHdlZW5zID09IG51bGwpIHtcblx0XHRcdFx0dHdlZW5zID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdGlmIChkZWxheWVkQ2FsbHMgPT0gbnVsbCkge1xuXHRcdFx0XHRkZWxheWVkQ2FsbHMgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0dmFyIGEgPSBnZXRBbGxUd2VlbnMoKHRpbWVsaW5lcyAhPSBmYWxzZSkpLFxuXHRcdFx0XHRsID0gYS5sZW5ndGgsXG5cdFx0XHRcdGFsbFRydWUgPSAodHdlZW5zICYmIGRlbGF5ZWRDYWxscyAmJiB0aW1lbGluZXMpLFxuXHRcdFx0XHRpc0RDLCB0d2VlbiwgaTtcblx0XHRcdGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcblx0XHRcdFx0dHdlZW4gPSBhW2ldO1xuXHRcdFx0XHRpZiAoYWxsVHJ1ZSB8fCAodHdlZW4gaW5zdGFuY2VvZiBTaW1wbGVUaW1lbGluZSkgfHwgKChpc0RDID0gKHR3ZWVuLnRhcmdldCA9PT0gdHdlZW4udmFycy5vbkNvbXBsZXRlKSkgJiYgZGVsYXllZENhbGxzKSB8fCAodHdlZW5zICYmICFpc0RDKSkge1xuXHRcdFx0XHRcdGlmIChjb21wbGV0ZSkge1xuXHRcdFx0XHRcdFx0dHdlZW4udG90YWxUaW1lKHR3ZWVuLl9yZXZlcnNlZCA/IDAgOiB0d2Vlbi50b3RhbER1cmF0aW9uKCkpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0d2Vlbi5fZW5hYmxlZChmYWxzZSwgZmFsc2UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cdFx0XG5cdFx0VHdlZW5NYXgua2lsbENoaWxkVHdlZW5zT2YgPSBmdW5jdGlvbihwYXJlbnQsIGNvbXBsZXRlKSB7XG5cdFx0XHRpZiAocGFyZW50ID09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dmFyIHRsID0gVHdlZW5MaXRlSW50ZXJuYWxzLnR3ZWVuTG9va3VwLFxuXHRcdFx0XHRhLCBjdXJQYXJlbnQsIHAsIGksIGw7XG5cdFx0XHRpZiAodHlwZW9mKHBhcmVudCkgPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdFx0cGFyZW50ID0gVHdlZW5MaXRlLnNlbGVjdG9yKHBhcmVudCkgfHwgcGFyZW50O1xuXHRcdFx0fVxuXHRcdFx0aWYgKF9pc1NlbGVjdG9yKHBhcmVudCkpIHtcblx0XHRcdFx0cGFyZW50ID0gX3NsaWNlKHBhcmVudCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoX2lzQXJyYXkocGFyZW50KSkge1xuXHRcdFx0XHRpID0gcGFyZW50Lmxlbmd0aDtcblx0XHRcdFx0d2hpbGUgKC0taSA+IC0xKSB7XG5cdFx0XHRcdFx0VHdlZW5NYXgua2lsbENoaWxkVHdlZW5zT2YocGFyZW50W2ldLCBjb21wbGV0ZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0YSA9IFtdO1xuXHRcdFx0Zm9yIChwIGluIHRsKSB7XG5cdFx0XHRcdGN1clBhcmVudCA9IHRsW3BdLnRhcmdldC5wYXJlbnROb2RlO1xuXHRcdFx0XHR3aGlsZSAoY3VyUGFyZW50KSB7XG5cdFx0XHRcdFx0aWYgKGN1clBhcmVudCA9PT0gcGFyZW50KSB7XG5cdFx0XHRcdFx0XHRhID0gYS5jb25jYXQodGxbcF0udHdlZW5zKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y3VyUGFyZW50ID0gY3VyUGFyZW50LnBhcmVudE5vZGU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGwgPSBhLmxlbmd0aDtcblx0XHRcdGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcblx0XHRcdFx0aWYgKGNvbXBsZXRlKSB7XG5cdFx0XHRcdFx0YVtpXS50b3RhbFRpbWUoYVtpXS50b3RhbER1cmF0aW9uKCkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGFbaV0uX2VuYWJsZWQoZmFsc2UsIGZhbHNlKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0dmFyIF9jaGFuZ2VQYXVzZSA9IGZ1bmN0aW9uKHBhdXNlLCB0d2VlbnMsIGRlbGF5ZWRDYWxscywgdGltZWxpbmVzKSB7XG5cdFx0XHR0d2VlbnMgPSAodHdlZW5zICE9PSBmYWxzZSk7XG5cdFx0XHRkZWxheWVkQ2FsbHMgPSAoZGVsYXllZENhbGxzICE9PSBmYWxzZSk7XG5cdFx0XHR0aW1lbGluZXMgPSAodGltZWxpbmVzICE9PSBmYWxzZSk7XG5cdFx0XHR2YXIgYSA9IGdldEFsbFR3ZWVucyh0aW1lbGluZXMpLFxuXHRcdFx0XHRhbGxUcnVlID0gKHR3ZWVucyAmJiBkZWxheWVkQ2FsbHMgJiYgdGltZWxpbmVzKSxcblx0XHRcdFx0aSA9IGEubGVuZ3RoLFxuXHRcdFx0XHRpc0RDLCB0d2Vlbjtcblx0XHRcdHdoaWxlICgtLWkgPiAtMSkge1xuXHRcdFx0XHR0d2VlbiA9IGFbaV07XG5cdFx0XHRcdGlmIChhbGxUcnVlIHx8ICh0d2VlbiBpbnN0YW5jZW9mIFNpbXBsZVRpbWVsaW5lKSB8fCAoKGlzREMgPSAodHdlZW4udGFyZ2V0ID09PSB0d2Vlbi52YXJzLm9uQ29tcGxldGUpKSAmJiBkZWxheWVkQ2FsbHMpIHx8ICh0d2VlbnMgJiYgIWlzREMpKSB7XG5cdFx0XHRcdFx0dHdlZW4ucGF1c2VkKHBhdXNlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cdFx0XG5cdFx0VHdlZW5NYXgucGF1c2VBbGwgPSBmdW5jdGlvbih0d2VlbnMsIGRlbGF5ZWRDYWxscywgdGltZWxpbmVzKSB7XG5cdFx0XHRfY2hhbmdlUGF1c2UodHJ1ZSwgdHdlZW5zLCBkZWxheWVkQ2FsbHMsIHRpbWVsaW5lcyk7XG5cdFx0fTtcblx0XHRcblx0XHRUd2Vlbk1heC5yZXN1bWVBbGwgPSBmdW5jdGlvbih0d2VlbnMsIGRlbGF5ZWRDYWxscywgdGltZWxpbmVzKSB7XG5cdFx0XHRfY2hhbmdlUGF1c2UoZmFsc2UsIHR3ZWVucywgZGVsYXllZENhbGxzLCB0aW1lbGluZXMpO1xuXHRcdH07XG5cblx0XHRUd2Vlbk1heC5nbG9iYWxUaW1lU2NhbGUgPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdFx0dmFyIHRsID0gQW5pbWF0aW9uLl9yb290VGltZWxpbmUsXG5cdFx0XHRcdHQgPSBUd2VlbkxpdGUudGlja2VyLnRpbWU7XG5cdFx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdFx0cmV0dXJuIHRsLl90aW1lU2NhbGU7XG5cdFx0XHR9XG5cdFx0XHR2YWx1ZSA9IHZhbHVlIHx8IF90aW55TnVtOyAvL2Nhbid0IGFsbG93IHplcm8gYmVjYXVzZSBpdCdsbCB0aHJvdyB0aGUgbWF0aCBvZmZcblx0XHRcdHRsLl9zdGFydFRpbWUgPSB0IC0gKCh0IC0gdGwuX3N0YXJ0VGltZSkgKiB0bC5fdGltZVNjYWxlIC8gdmFsdWUpO1xuXHRcdFx0dGwgPSBBbmltYXRpb24uX3Jvb3RGcmFtZXNUaW1lbGluZTtcblx0XHRcdHQgPSBUd2VlbkxpdGUudGlja2VyLmZyYW1lO1xuXHRcdFx0dGwuX3N0YXJ0VGltZSA9IHQgLSAoKHQgLSB0bC5fc3RhcnRUaW1lKSAqIHRsLl90aW1lU2NhbGUgLyB2YWx1ZSk7XG5cdFx0XHR0bC5fdGltZVNjYWxlID0gQW5pbWF0aW9uLl9yb290VGltZWxpbmUuX3RpbWVTY2FsZSA9IHZhbHVlO1xuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH07XG5cdFx0XG5cdFxuLy8tLS0tIEdFVFRFUlMgLyBTRVRURVJTIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHRcblx0XHRwLnByb2dyZXNzID0gZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdHJldHVybiAoIWFyZ3VtZW50cy5sZW5ndGgpID8gdGhpcy5fdGltZSAvIHRoaXMuZHVyYXRpb24oKSA6IHRoaXMudG90YWxUaW1lKCB0aGlzLmR1cmF0aW9uKCkgKiAoKHRoaXMuX3lveW8gJiYgKHRoaXMuX2N5Y2xlICYgMSkgIT09IDApID8gMSAtIHZhbHVlIDogdmFsdWUpICsgKHRoaXMuX2N5Y2xlICogKHRoaXMuX2R1cmF0aW9uICsgdGhpcy5fcmVwZWF0RGVsYXkpKSwgZmFsc2UpO1xuXHRcdH07XG5cdFx0XG5cdFx0cC50b3RhbFByb2dyZXNzID0gZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdHJldHVybiAoIWFyZ3VtZW50cy5sZW5ndGgpID8gdGhpcy5fdG90YWxUaW1lIC8gdGhpcy50b3RhbER1cmF0aW9uKCkgOiB0aGlzLnRvdGFsVGltZSggdGhpcy50b3RhbER1cmF0aW9uKCkgKiB2YWx1ZSwgZmFsc2UpO1xuXHRcdH07XG5cdFx0XG5cdFx0cC50aW1lID0gZnVuY3Rpb24odmFsdWUsIHN1cHByZXNzRXZlbnRzKSB7XG5cdFx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX3RpbWU7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5fZGlydHkpIHtcblx0XHRcdFx0dGhpcy50b3RhbER1cmF0aW9uKCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodmFsdWUgPiB0aGlzLl9kdXJhdGlvbikge1xuXHRcdFx0XHR2YWx1ZSA9IHRoaXMuX2R1cmF0aW9uO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuX3lveW8gJiYgKHRoaXMuX2N5Y2xlICYgMSkgIT09IDApIHtcblx0XHRcdFx0dmFsdWUgPSAodGhpcy5fZHVyYXRpb24gLSB2YWx1ZSkgKyAodGhpcy5fY3ljbGUgKiAodGhpcy5fZHVyYXRpb24gKyB0aGlzLl9yZXBlYXREZWxheSkpO1xuXHRcdFx0fSBlbHNlIGlmICh0aGlzLl9yZXBlYXQgIT09IDApIHtcblx0XHRcdFx0dmFsdWUgKz0gdGhpcy5fY3ljbGUgKiAodGhpcy5fZHVyYXRpb24gKyB0aGlzLl9yZXBlYXREZWxheSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcy50b3RhbFRpbWUodmFsdWUsIHN1cHByZXNzRXZlbnRzKTtcblx0XHR9O1xuXG5cdFx0cC5kdXJhdGlvbiA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX2R1cmF0aW9uOyAvL2Rvbid0IHNldCBfZGlydHkgPSBmYWxzZSBiZWNhdXNlIHRoZXJlIGNvdWxkIGJlIHJlcGVhdHMgdGhhdCBoYXZlbid0IGJlZW4gZmFjdG9yZWQgaW50byB0aGUgX3RvdGFsRHVyYXRpb24geWV0LiBPdGhlcndpc2UsIGlmIHlvdSBjcmVhdGUgYSByZXBlYXRlZCBUd2Vlbk1heCBhbmQgdGhlbiBpbW1lZGlhdGVseSBjaGVjayBpdHMgZHVyYXRpb24oKSwgaXQgd291bGQgY2FjaGUgdGhlIHZhbHVlIGFuZCB0aGUgdG90YWxEdXJhdGlvbiB3b3VsZCBub3QgYmUgY29ycmVjdCwgdGh1cyByZXBlYXRzIHdvdWxkbid0IHRha2UgZWZmZWN0LlxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIEFuaW1hdGlvbi5wcm90b3R5cGUuZHVyYXRpb24uY2FsbCh0aGlzLCB2YWx1ZSk7XG5cdFx0fTtcblxuXHRcdHAudG90YWxEdXJhdGlvbiA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdFx0aWYgKHRoaXMuX2RpcnR5KSB7XG5cdFx0XHRcdFx0Ly9pbnN0ZWFkIG9mIEluZmluaXR5LCB3ZSB1c2UgOTk5OTk5OTk5OTk5IHNvIHRoYXQgd2UgY2FuIGFjY29tbW9kYXRlIHJldmVyc2VzXG5cdFx0XHRcdFx0dGhpcy5fdG90YWxEdXJhdGlvbiA9ICh0aGlzLl9yZXBlYXQgPT09IC0xKSA/IDk5OTk5OTk5OTk5OSA6IHRoaXMuX2R1cmF0aW9uICogKHRoaXMuX3JlcGVhdCArIDEpICsgKHRoaXMuX3JlcGVhdERlbGF5ICogdGhpcy5fcmVwZWF0KTtcblx0XHRcdFx0XHR0aGlzLl9kaXJ0eSA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB0aGlzLl90b3RhbER1cmF0aW9uO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuICh0aGlzLl9yZXBlYXQgPT09IC0xKSA/IHRoaXMgOiB0aGlzLmR1cmF0aW9uKCAodmFsdWUgLSAodGhpcy5fcmVwZWF0ICogdGhpcy5fcmVwZWF0RGVsYXkpKSAvICh0aGlzLl9yZXBlYXQgKyAxKSApO1xuXHRcdH07XG5cdFx0XG5cdFx0cC5yZXBlYXQgPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLl9yZXBlYXQ7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl9yZXBlYXQgPSB2YWx1ZTtcblx0XHRcdHJldHVybiB0aGlzLl91bmNhY2hlKHRydWUpO1xuXHRcdH07XG5cdFx0XG5cdFx0cC5yZXBlYXREZWxheSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX3JlcGVhdERlbGF5O1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5fcmVwZWF0RGVsYXkgPSB2YWx1ZTtcblx0XHRcdHJldHVybiB0aGlzLl91bmNhY2hlKHRydWUpO1xuXHRcdH07XG5cdFx0XG5cdFx0cC55b3lvID0gZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5feW95bztcblx0XHRcdH1cblx0XHRcdHRoaXMuX3lveW8gPSB2YWx1ZTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH07XG5cdFx0XG5cdFx0XG5cdFx0cmV0dXJuIFR3ZWVuTWF4O1xuXHRcdFxuXHR9LCB0cnVlKTtcblxuXG5cblxuXG5cblxuXG4vKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogVGltZWxpbmVMaXRlXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblx0X2dzU2NvcGUuX2dzRGVmaW5lKFwiVGltZWxpbmVMaXRlXCIsIFtcImNvcmUuQW5pbWF0aW9uXCIsXCJjb3JlLlNpbXBsZVRpbWVsaW5lXCIsXCJUd2VlbkxpdGVcIl0sIGZ1bmN0aW9uKEFuaW1hdGlvbiwgU2ltcGxlVGltZWxpbmUsIFR3ZWVuTGl0ZSkge1xuXG5cdFx0dmFyIFRpbWVsaW5lTGl0ZSA9IGZ1bmN0aW9uKHZhcnMpIHtcblx0XHRcdFx0U2ltcGxlVGltZWxpbmUuY2FsbCh0aGlzLCB2YXJzKTtcblx0XHRcdFx0dGhpcy5fbGFiZWxzID0ge307XG5cdFx0XHRcdHRoaXMuYXV0b1JlbW92ZUNoaWxkcmVuID0gKHRoaXMudmFycy5hdXRvUmVtb3ZlQ2hpbGRyZW4gPT09IHRydWUpO1xuXHRcdFx0XHR0aGlzLnNtb290aENoaWxkVGltaW5nID0gKHRoaXMudmFycy5zbW9vdGhDaGlsZFRpbWluZyA9PT0gdHJ1ZSk7XG5cdFx0XHRcdHRoaXMuX3NvcnRDaGlsZHJlbiA9IHRydWU7XG5cdFx0XHRcdHRoaXMuX29uVXBkYXRlID0gdGhpcy52YXJzLm9uVXBkYXRlO1xuXHRcdFx0XHR2YXIgdiA9IHRoaXMudmFycyxcblx0XHRcdFx0XHR2YWwsIHA7XG5cdFx0XHRcdGZvciAocCBpbiB2KSB7XG5cdFx0XHRcdFx0dmFsID0gdltwXTtcblx0XHRcdFx0XHRpZiAoX2lzQXJyYXkodmFsKSkgaWYgKHZhbC5qb2luKFwiXCIpLmluZGV4T2YoXCJ7c2VsZn1cIikgIT09IC0xKSB7XG5cdFx0XHRcdFx0XHR2W3BdID0gdGhpcy5fc3dhcFNlbGZJblBhcmFtcyh2YWwpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoX2lzQXJyYXkodi50d2VlbnMpKSB7XG5cdFx0XHRcdFx0dGhpcy5hZGQodi50d2VlbnMsIDAsIHYuYWxpZ24sIHYuc3RhZ2dlcik7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRfdGlueU51bSA9IDAuMDAwMDAwMDAwMSxcblx0XHRcdFR3ZWVuTGl0ZUludGVybmFscyA9IFR3ZWVuTGl0ZS5faW50ZXJuYWxzLFxuXHRcdFx0X2ludGVybmFscyA9IFRpbWVsaW5lTGl0ZS5faW50ZXJuYWxzID0ge30sXG5cdFx0XHRfaXNTZWxlY3RvciA9IFR3ZWVuTGl0ZUludGVybmFscy5pc1NlbGVjdG9yLFxuXHRcdFx0X2lzQXJyYXkgPSBUd2VlbkxpdGVJbnRlcm5hbHMuaXNBcnJheSxcblx0XHRcdF9sYXp5VHdlZW5zID0gVHdlZW5MaXRlSW50ZXJuYWxzLmxhenlUd2VlbnMsXG5cdFx0XHRfbGF6eVJlbmRlciA9IFR3ZWVuTGl0ZUludGVybmFscy5sYXp5UmVuZGVyLFxuXHRcdFx0X2JsYW5rQXJyYXkgPSBbXSxcblx0XHRcdF9nbG9iYWxzID0gX2dzU2NvcGUuX2dzRGVmaW5lLmdsb2JhbHMsXG5cdFx0XHRfY29weSA9IGZ1bmN0aW9uKHZhcnMpIHtcblx0XHRcdFx0dmFyIGNvcHkgPSB7fSwgcDtcblx0XHRcdFx0Zm9yIChwIGluIHZhcnMpIHtcblx0XHRcdFx0XHRjb3B5W3BdID0gdmFyc1twXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gY29weTtcblx0XHRcdH0sXG5cdFx0XHRfcGF1c2VDYWxsYmFjayA9IF9pbnRlcm5hbHMucGF1c2VDYWxsYmFjayA9IGZ1bmN0aW9uKHR3ZWVuLCBjYWxsYmFjaywgcGFyYW1zLCBzY29wZSkge1xuXHRcdFx0XHR2YXIgdGwgPSB0d2Vlbi5fdGltZWxpbmUsXG5cdFx0XHRcdFx0dGltZSA9IHRsLl90b3RhbFRpbWUsXG5cdFx0XHRcdFx0c3RhcnRUaW1lID0gdHdlZW4uX3N0YXJ0VGltZSxcblx0XHRcdFx0XHRyZXZlcnNlZCA9ICh0d2Vlbi5fcmF3UHJldlRpbWUgPCAwIHx8ICh0d2Vlbi5fcmF3UHJldlRpbWUgPT09IDAgJiYgdGwuX3JldmVyc2VkKSksLy9kb24ndCB1c2UgdHdlZW4ucmF0aW8gYmVjYXVzZSBpZiB0aGUgcGxheWhlYWQgbGFuZHMgZXhhY3RseSBvbiB0b3Agb2YgdGhlIGFkZFBhdXNlKCksIHJhdGlvIHdpbGwgYmUgMSBldmVuIGlmIHRoZSBtYXN0ZXIgdGltZWxpbmUgd2FzIHJldmVyc2VkICh3aGljaCBpcyBjb3JyZWN0KS4gVGhlIGtleSBoZXJlIGlzIHRvIHNlbnNlIHRoZSBkaXJlY3Rpb24gb2YgdGhlIHBsYXloZWFkLlxuXHRcdFx0XHRcdG5leHQgPSByZXZlcnNlZCA/IDAgOiBfdGlueU51bSxcblx0XHRcdFx0XHRwcmV2ID0gcmV2ZXJzZWQgPyBfdGlueU51bSA6IDAsXG5cdFx0XHRcdFx0c2libGluZztcblx0XHRcdFx0aWYgKGNhbGxiYWNrIHx8ICF0aGlzLl9mb3JjaW5nUGxheWhlYWQpIHsgLy9pZiB0aGUgdXNlciBjYWxscyBhIG1ldGhvZCB0aGF0IG1vdmVzIHRoZSBwbGF5aGVhZCAobGlrZSBwcm9ncmVzcygpIG9yIHRpbWUoKSksIGl0IHNob3VsZCBob25vciB0aGF0IGFuZCBza2lwIGFueSBwYXVzZXMgKGFsdGhvdWdoIGlmIHRoZXJlJ3MgYSBjYWxsYmFjayBwb3NpdGlvbmVkIGF0IHRoYXQgcGF1c2UsIGl0IG11c3QganVtcCB0aGVyZSBhbmQgbWFrZSB0aGUgY2FsbCB0byBlbnN1cmUgdGhlIHRpbWUgaXMgRVhBQ1RMWSB3aGF0IGl0IGlzIHN1cHBvc2VkIHRvIGJlLCBhbmQgdGhlbiBwcm9jZWVkIHRvIHdoZXJlIHRoZSBwbGF5aGVhZCBpcyBiZWluZyBmb3JjZWQpLiBPdGhlcndpc2UsIGltYWdpbmUgcGxhY2luZyBhIHBhdXNlIGluIHRoZSBtaWRkbGUgb2YgYSB0aW1lbGluZSBhbmQgdGhlbiBkb2luZyB0aW1lbGluZS5wcm9ncmVzcygwLjkpIC0gaXQgd291bGQgZ2V0IHN0dWNrIHdoZXJlIHRoZSBwYXVzZSBpcy5cblx0XHRcdFx0XHR0bC5wYXVzZShzdGFydFRpbWUpO1xuXHRcdFx0XHRcdC8vbm93IGZpbmQgc2libGluZyB0d2VlbnMgdGhhdCBhcmUgRVhBQ1RMWSBhdCB0aGUgc2FtZSBzcG90IG9uIHRoZSB0aW1lbGluZSBhbmQgYWRqdXN0IHRoZSBfcmF3UHJldlRpbWUgc28gdGhhdCB0aGV5IGZpcmUgKG9yIGRvbid0IGZpcmUpIGNvcnJlY3RseSBvbiB0aGUgbmV4dCByZW5kZXIuIFRoaXMgaXMgcHJpbWFyaWx5IHRvIGFjY29tbW9kYXRlIHplcm8tZHVyYXRpb24gdHdlZW5zL2NhbGxiYWNrcyB0aGF0IGFyZSBwb3NpdGlvbmVkIHJpZ2h0IG9uIHRvcCBvZiBhIHBhdXNlLiBGb3IgZXhhbXBsZSwgdGwudG8oLi4uKS5jYWxsKC4uLikuYWRkUGF1c2UoLi4uKS5jYWxsKC4uLikgLSBub3RpY2UgdGhhdCB0aGVyZSdzIGEgY2FsbCgpIG9uIGVhY2ggc2lkZSBvZiB0aGUgcGF1c2UsIHNvIHdoZW4gaXQncyBydW5uaW5nIGZvcndhcmQgaXQgc2hvdWxkIGNhbGwgdGhlIGZpcnN0IG9uZSBhbmQgdGhlbiBwYXVzZSwgYW5kIHRoZW4gd2hlbiByZXN1bWVkLCBjYWxsIHRoZSBvdGhlci4gWmVyby1kdXJhdGlvbiB0d2VlbnMgdXNlIF9yYXdQcmV2VGltZSB0byBzZW5zZSBtb21lbnR1bSBmaWd1cmUgb3V0IGlmIGV2ZW50cyB3ZXJlIHN1cHByZXNzZWQgd2hlbiBhcnJpdmluZyBkaXJlY3RseSBvbiB0b3Agb2YgdGhhdCB0aW1lLlxuXHRcdFx0XHRcdHNpYmxpbmcgPSB0d2Vlbi5fcHJldjtcblx0XHRcdFx0XHR3aGlsZSAoc2libGluZyAmJiBzaWJsaW5nLl9zdGFydFRpbWUgPT09IHN0YXJ0VGltZSkge1xuXHRcdFx0XHRcdFx0c2libGluZy5fcmF3UHJldlRpbWUgPSBwcmV2O1xuXHRcdFx0XHRcdFx0c2libGluZyA9IHNpYmxpbmcuX3ByZXY7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHNpYmxpbmcgPSB0d2Vlbi5fbmV4dDtcblx0XHRcdFx0XHR3aGlsZSAoc2libGluZyAmJiBzaWJsaW5nLl9zdGFydFRpbWUgPT09IHN0YXJ0VGltZSkge1xuXHRcdFx0XHRcdFx0c2libGluZy5fcmF3UHJldlRpbWUgPSBuZXh0O1xuXHRcdFx0XHRcdFx0c2libGluZyA9IHNpYmxpbmcuX25leHQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChjYWxsYmFjaykge1xuXHRcdFx0XHRcdFx0Y2FsbGJhY2suYXBwbHkoc2NvcGUgfHwgdGwsIHBhcmFtcyB8fCBfYmxhbmtBcnJheSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICh0aGlzLl9mb3JjaW5nUGxheWhlYWQgfHwgIXRsLl9wYXVzZWQpIHsgLy90aGUgY2FsbGJhY2sgY291bGQgaGF2ZSBjYWxsZWQgcmVzdW1lKCkuXG5cdFx0XHRcdFx0XHR0bC5zZWVrKHRpbWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdF9zbGljZSA9IGZ1bmN0aW9uKGEpIHsgLy9kb24ndCB1c2UgW10uc2xpY2UgYmVjYXVzZSB0aGF0IGRvZXNuJ3Qgd29yayBpbiBJRTggd2l0aCBhIE5vZGVMaXN0IHRoYXQncyByZXR1cm5lZCBieSBxdWVyeVNlbGVjdG9yQWxsKClcblx0XHRcdFx0dmFyIGIgPSBbXSxcblx0XHRcdFx0XHRsID0gYS5sZW5ndGgsXG5cdFx0XHRcdFx0aTtcblx0XHRcdFx0Zm9yIChpID0gMDsgaSAhPT0gbDsgYi5wdXNoKGFbaSsrXSkpO1xuXHRcdFx0XHRyZXR1cm4gYjtcblx0XHRcdH0sXG5cdFx0XHRwID0gVGltZWxpbmVMaXRlLnByb3RvdHlwZSA9IG5ldyBTaW1wbGVUaW1lbGluZSgpO1xuXG5cdFx0VGltZWxpbmVMaXRlLnZlcnNpb24gPSBcIjEuMTYuMVwiO1xuXHRcdHAuY29uc3RydWN0b3IgPSBUaW1lbGluZUxpdGU7XG5cdFx0cC5raWxsKCkuX2djID0gcC5fZm9yY2luZ1BsYXloZWFkID0gZmFsc2U7XG5cblx0XHQvKiBtaWdodCB1c2UgbGF0ZXIuLi5cblx0XHQvL3RyYW5zbGF0ZXMgYSBsb2NhbCB0aW1lIGluc2lkZSBhbiBhbmltYXRpb24gdG8gdGhlIGNvcnJlc3BvbmRpbmcgdGltZSBvbiB0aGUgcm9vdC9nbG9iYWwgdGltZWxpbmUsIGZhY3RvcmluZyBpbiBhbGwgbmVzdGluZyBhbmQgdGltZVNjYWxlcy5cblx0XHRmdW5jdGlvbiBsb2NhbFRvR2xvYmFsKHRpbWUsIGFuaW1hdGlvbikge1xuXHRcdFx0d2hpbGUgKGFuaW1hdGlvbikge1xuXHRcdFx0XHR0aW1lID0gKHRpbWUgLyBhbmltYXRpb24uX3RpbWVTY2FsZSkgKyBhbmltYXRpb24uX3N0YXJ0VGltZTtcblx0XHRcdFx0YW5pbWF0aW9uID0gYW5pbWF0aW9uLnRpbWVsaW5lO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRpbWU7XG5cdFx0fVxuXG5cdFx0Ly90cmFuc2xhdGVzIHRoZSBzdXBwbGllZCB0aW1lIG9uIHRoZSByb290L2dsb2JhbCB0aW1lbGluZSBpbnRvIHRoZSBjb3JyZXNwb25kaW5nIGxvY2FsIHRpbWUgaW5zaWRlIGEgcGFydGljdWxhciBhbmltYXRpb24sIGZhY3RvcmluZyBpbiBhbGwgbmVzdGluZyBhbmQgdGltZVNjYWxlc1xuXHRcdGZ1bmN0aW9uIGdsb2JhbFRvTG9jYWwodGltZSwgYW5pbWF0aW9uKSB7XG5cdFx0XHR2YXIgc2NhbGUgPSAxO1xuXHRcdFx0dGltZSAtPSBsb2NhbFRvR2xvYmFsKDAsIGFuaW1hdGlvbik7XG5cdFx0XHR3aGlsZSAoYW5pbWF0aW9uKSB7XG5cdFx0XHRcdHNjYWxlICo9IGFuaW1hdGlvbi5fdGltZVNjYWxlO1xuXHRcdFx0XHRhbmltYXRpb24gPSBhbmltYXRpb24udGltZWxpbmU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGltZSAqIHNjYWxlO1xuXHRcdH1cblx0XHQqL1xuXG5cdFx0cC50byA9IGZ1bmN0aW9uKHRhcmdldCwgZHVyYXRpb24sIHZhcnMsIHBvc2l0aW9uKSB7XG5cdFx0XHR2YXIgRW5naW5lID0gKHZhcnMucmVwZWF0ICYmIF9nbG9iYWxzLlR3ZWVuTWF4KSB8fCBUd2VlbkxpdGU7XG5cdFx0XHRyZXR1cm4gZHVyYXRpb24gPyB0aGlzLmFkZCggbmV3IEVuZ2luZSh0YXJnZXQsIGR1cmF0aW9uLCB2YXJzKSwgcG9zaXRpb24pIDogdGhpcy5zZXQodGFyZ2V0LCB2YXJzLCBwb3NpdGlvbik7XG5cdFx0fTtcblxuXHRcdHAuZnJvbSA9IGZ1bmN0aW9uKHRhcmdldCwgZHVyYXRpb24sIHZhcnMsIHBvc2l0aW9uKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5hZGQoICgodmFycy5yZXBlYXQgJiYgX2dsb2JhbHMuVHdlZW5NYXgpIHx8IFR3ZWVuTGl0ZSkuZnJvbSh0YXJnZXQsIGR1cmF0aW9uLCB2YXJzKSwgcG9zaXRpb24pO1xuXHRcdH07XG5cblx0XHRwLmZyb21UbyA9IGZ1bmN0aW9uKHRhcmdldCwgZHVyYXRpb24sIGZyb21WYXJzLCB0b1ZhcnMsIHBvc2l0aW9uKSB7XG5cdFx0XHR2YXIgRW5naW5lID0gKHRvVmFycy5yZXBlYXQgJiYgX2dsb2JhbHMuVHdlZW5NYXgpIHx8IFR3ZWVuTGl0ZTtcblx0XHRcdHJldHVybiBkdXJhdGlvbiA/IHRoaXMuYWRkKCBFbmdpbmUuZnJvbVRvKHRhcmdldCwgZHVyYXRpb24sIGZyb21WYXJzLCB0b1ZhcnMpLCBwb3NpdGlvbikgOiB0aGlzLnNldCh0YXJnZXQsIHRvVmFycywgcG9zaXRpb24pO1xuXHRcdH07XG5cblx0XHRwLnN0YWdnZXJUbyA9IGZ1bmN0aW9uKHRhcmdldHMsIGR1cmF0aW9uLCB2YXJzLCBzdGFnZ2VyLCBwb3NpdGlvbiwgb25Db21wbGV0ZUFsbCwgb25Db21wbGV0ZUFsbFBhcmFtcywgb25Db21wbGV0ZUFsbFNjb3BlKSB7XG5cdFx0XHR2YXIgdGwgPSBuZXcgVGltZWxpbmVMaXRlKHtvbkNvbXBsZXRlOm9uQ29tcGxldGVBbGwsIG9uQ29tcGxldGVQYXJhbXM6b25Db21wbGV0ZUFsbFBhcmFtcywgb25Db21wbGV0ZVNjb3BlOm9uQ29tcGxldGVBbGxTY29wZSwgc21vb3RoQ2hpbGRUaW1pbmc6dGhpcy5zbW9vdGhDaGlsZFRpbWluZ30pLFxuXHRcdFx0XHRpO1xuXHRcdFx0aWYgKHR5cGVvZih0YXJnZXRzKSA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0XHR0YXJnZXRzID0gVHdlZW5MaXRlLnNlbGVjdG9yKHRhcmdldHMpIHx8IHRhcmdldHM7XG5cdFx0XHR9XG5cdFx0XHR0YXJnZXRzID0gdGFyZ2V0cyB8fCBbXTtcblx0XHRcdGlmIChfaXNTZWxlY3Rvcih0YXJnZXRzKSkgeyAvL3NlbnNlcyBpZiB0aGUgdGFyZ2V0cyBvYmplY3QgaXMgYSBzZWxlY3Rvci4gSWYgaXQgaXMsIHdlIHNob3VsZCB0cmFuc2xhdGUgaXQgaW50byBhbiBhcnJheS5cblx0XHRcdFx0dGFyZ2V0cyA9IF9zbGljZSh0YXJnZXRzKTtcblx0XHRcdH1cblx0XHRcdHN0YWdnZXIgPSBzdGFnZ2VyIHx8IDA7XG5cdFx0XHRpZiAoc3RhZ2dlciA8IDApIHtcblx0XHRcdFx0dGFyZ2V0cyA9IF9zbGljZSh0YXJnZXRzKTtcblx0XHRcdFx0dGFyZ2V0cy5yZXZlcnNlKCk7XG5cdFx0XHRcdHN0YWdnZXIgKj0gLTE7XG5cdFx0XHR9XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgdGFyZ2V0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAodmFycy5zdGFydEF0KSB7XG5cdFx0XHRcdFx0dmFycy5zdGFydEF0ID0gX2NvcHkodmFycy5zdGFydEF0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0bC50byh0YXJnZXRzW2ldLCBkdXJhdGlvbiwgX2NvcHkodmFycyksIGkgKiBzdGFnZ2VyKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzLmFkZCh0bCwgcG9zaXRpb24pO1xuXHRcdH07XG5cblx0XHRwLnN0YWdnZXJGcm9tID0gZnVuY3Rpb24odGFyZ2V0cywgZHVyYXRpb24sIHZhcnMsIHN0YWdnZXIsIHBvc2l0aW9uLCBvbkNvbXBsZXRlQWxsLCBvbkNvbXBsZXRlQWxsUGFyYW1zLCBvbkNvbXBsZXRlQWxsU2NvcGUpIHtcblx0XHRcdHZhcnMuaW1tZWRpYXRlUmVuZGVyID0gKHZhcnMuaW1tZWRpYXRlUmVuZGVyICE9IGZhbHNlKTtcblx0XHRcdHZhcnMucnVuQmFja3dhcmRzID0gdHJ1ZTtcblx0XHRcdHJldHVybiB0aGlzLnN0YWdnZXJUbyh0YXJnZXRzLCBkdXJhdGlvbiwgdmFycywgc3RhZ2dlciwgcG9zaXRpb24sIG9uQ29tcGxldGVBbGwsIG9uQ29tcGxldGVBbGxQYXJhbXMsIG9uQ29tcGxldGVBbGxTY29wZSk7XG5cdFx0fTtcblxuXHRcdHAuc3RhZ2dlckZyb21UbyA9IGZ1bmN0aW9uKHRhcmdldHMsIGR1cmF0aW9uLCBmcm9tVmFycywgdG9WYXJzLCBzdGFnZ2VyLCBwb3NpdGlvbiwgb25Db21wbGV0ZUFsbCwgb25Db21wbGV0ZUFsbFBhcmFtcywgb25Db21wbGV0ZUFsbFNjb3BlKSB7XG5cdFx0XHR0b1ZhcnMuc3RhcnRBdCA9IGZyb21WYXJzO1xuXHRcdFx0dG9WYXJzLmltbWVkaWF0ZVJlbmRlciA9ICh0b1ZhcnMuaW1tZWRpYXRlUmVuZGVyICE9IGZhbHNlICYmIGZyb21WYXJzLmltbWVkaWF0ZVJlbmRlciAhPSBmYWxzZSk7XG5cdFx0XHRyZXR1cm4gdGhpcy5zdGFnZ2VyVG8odGFyZ2V0cywgZHVyYXRpb24sIHRvVmFycywgc3RhZ2dlciwgcG9zaXRpb24sIG9uQ29tcGxldGVBbGwsIG9uQ29tcGxldGVBbGxQYXJhbXMsIG9uQ29tcGxldGVBbGxTY29wZSk7XG5cdFx0fTtcblxuXHRcdHAuY2FsbCA9IGZ1bmN0aW9uKGNhbGxiYWNrLCBwYXJhbXMsIHNjb3BlLCBwb3NpdGlvbikge1xuXHRcdFx0cmV0dXJuIHRoaXMuYWRkKCBUd2VlbkxpdGUuZGVsYXllZENhbGwoMCwgY2FsbGJhY2ssIHBhcmFtcywgc2NvcGUpLCBwb3NpdGlvbik7XG5cdFx0fTtcblxuXHRcdHAuc2V0ID0gZnVuY3Rpb24odGFyZ2V0LCB2YXJzLCBwb3NpdGlvbikge1xuXHRcdFx0cG9zaXRpb24gPSB0aGlzLl9wYXJzZVRpbWVPckxhYmVsKHBvc2l0aW9uLCAwLCB0cnVlKTtcblx0XHRcdGlmICh2YXJzLmltbWVkaWF0ZVJlbmRlciA9PSBudWxsKSB7XG5cdFx0XHRcdHZhcnMuaW1tZWRpYXRlUmVuZGVyID0gKHBvc2l0aW9uID09PSB0aGlzLl90aW1lICYmICF0aGlzLl9wYXVzZWQpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXMuYWRkKCBuZXcgVHdlZW5MaXRlKHRhcmdldCwgMCwgdmFycyksIHBvc2l0aW9uKTtcblx0XHR9O1xuXG5cdFx0VGltZWxpbmVMaXRlLmV4cG9ydFJvb3QgPSBmdW5jdGlvbih2YXJzLCBpZ25vcmVEZWxheWVkQ2FsbHMpIHtcblx0XHRcdHZhcnMgPSB2YXJzIHx8IHt9O1xuXHRcdFx0aWYgKHZhcnMuc21vb3RoQ2hpbGRUaW1pbmcgPT0gbnVsbCkge1xuXHRcdFx0XHR2YXJzLnNtb290aENoaWxkVGltaW5nID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHZhciB0bCA9IG5ldyBUaW1lbGluZUxpdGUodmFycyksXG5cdFx0XHRcdHJvb3QgPSB0bC5fdGltZWxpbmUsXG5cdFx0XHRcdHR3ZWVuLCBuZXh0O1xuXHRcdFx0aWYgKGlnbm9yZURlbGF5ZWRDYWxscyA9PSBudWxsKSB7XG5cdFx0XHRcdGlnbm9yZURlbGF5ZWRDYWxscyA9IHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyb290Ll9yZW1vdmUodGwsIHRydWUpO1xuXHRcdFx0dGwuX3N0YXJ0VGltZSA9IDA7XG5cdFx0XHR0bC5fcmF3UHJldlRpbWUgPSB0bC5fdGltZSA9IHRsLl90b3RhbFRpbWUgPSByb290Ll90aW1lO1xuXHRcdFx0dHdlZW4gPSByb290Ll9maXJzdDtcblx0XHRcdHdoaWxlICh0d2Vlbikge1xuXHRcdFx0XHRuZXh0ID0gdHdlZW4uX25leHQ7XG5cdFx0XHRcdGlmICghaWdub3JlRGVsYXllZENhbGxzIHx8ICEodHdlZW4gaW5zdGFuY2VvZiBUd2VlbkxpdGUgJiYgdHdlZW4udGFyZ2V0ID09PSB0d2Vlbi52YXJzLm9uQ29tcGxldGUpKSB7XG5cdFx0XHRcdFx0dGwuYWRkKHR3ZWVuLCB0d2Vlbi5fc3RhcnRUaW1lIC0gdHdlZW4uX2RlbGF5KTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0d2VlbiA9IG5leHQ7XG5cdFx0XHR9XG5cdFx0XHRyb290LmFkZCh0bCwgMCk7XG5cdFx0XHRyZXR1cm4gdGw7XG5cdFx0fTtcblxuXHRcdHAuYWRkID0gZnVuY3Rpb24odmFsdWUsIHBvc2l0aW9uLCBhbGlnbiwgc3RhZ2dlcikge1xuXHRcdFx0dmFyIGN1clRpbWUsIGwsIGksIGNoaWxkLCB0bCwgYmVmb3JlUmF3VGltZTtcblx0XHRcdGlmICh0eXBlb2YocG9zaXRpb24pICE9PSBcIm51bWJlclwiKSB7XG5cdFx0XHRcdHBvc2l0aW9uID0gdGhpcy5fcGFyc2VUaW1lT3JMYWJlbChwb3NpdGlvbiwgMCwgdHJ1ZSwgdmFsdWUpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCEodmFsdWUgaW5zdGFuY2VvZiBBbmltYXRpb24pKSB7XG5cdFx0XHRcdGlmICgodmFsdWUgaW5zdGFuY2VvZiBBcnJheSkgfHwgKHZhbHVlICYmIHZhbHVlLnB1c2ggJiYgX2lzQXJyYXkodmFsdWUpKSkge1xuXHRcdFx0XHRcdGFsaWduID0gYWxpZ24gfHwgXCJub3JtYWxcIjtcblx0XHRcdFx0XHRzdGFnZ2VyID0gc3RhZ2dlciB8fCAwO1xuXHRcdFx0XHRcdGN1clRpbWUgPSBwb3NpdGlvbjtcblx0XHRcdFx0XHRsID0gdmFsdWUubGVuZ3RoO1xuXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcblx0XHRcdFx0XHRcdGlmIChfaXNBcnJheShjaGlsZCA9IHZhbHVlW2ldKSkge1xuXHRcdFx0XHRcdFx0XHRjaGlsZCA9IG5ldyBUaW1lbGluZUxpdGUoe3R3ZWVuczpjaGlsZH0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0dGhpcy5hZGQoY2hpbGQsIGN1clRpbWUpO1xuXHRcdFx0XHRcdFx0aWYgKHR5cGVvZihjaGlsZCkgIT09IFwic3RyaW5nXCIgJiYgdHlwZW9mKGNoaWxkKSAhPT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChhbGlnbiA9PT0gXCJzZXF1ZW5jZVwiKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y3VyVGltZSA9IGNoaWxkLl9zdGFydFRpbWUgKyAoY2hpbGQudG90YWxEdXJhdGlvbigpIC8gY2hpbGQuX3RpbWVTY2FsZSk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoYWxpZ24gPT09IFwic3RhcnRcIikge1xuXHRcdFx0XHRcdFx0XHRcdGNoaWxkLl9zdGFydFRpbWUgLT0gY2hpbGQuZGVsYXkoKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Y3VyVGltZSArPSBzdGFnZ2VyO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5fdW5jYWNoZSh0cnVlKTtcblx0XHRcdFx0fSBlbHNlIGlmICh0eXBlb2YodmFsdWUpID09PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuYWRkTGFiZWwodmFsdWUsIHBvc2l0aW9uKTtcblx0XHRcdFx0fSBlbHNlIGlmICh0eXBlb2YodmFsdWUpID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHR2YWx1ZSA9IFR3ZWVuTGl0ZS5kZWxheWVkQ2FsbCgwLCB2YWx1ZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhyb3coXCJDYW5ub3QgYWRkIFwiICsgdmFsdWUgKyBcIiBpbnRvIHRoZSB0aW1lbGluZTsgaXQgaXMgbm90IGEgdHdlZW4sIHRpbWVsaW5lLCBmdW5jdGlvbiwgb3Igc3RyaW5nLlwiKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRTaW1wbGVUaW1lbGluZS5wcm90b3R5cGUuYWRkLmNhbGwodGhpcywgdmFsdWUsIHBvc2l0aW9uKTtcblxuXHRcdFx0Ly9pZiB0aGUgdGltZWxpbmUgaGFzIGFscmVhZHkgZW5kZWQgYnV0IHRoZSBpbnNlcnRlZCB0d2Vlbi90aW1lbGluZSBleHRlbmRzIHRoZSBkdXJhdGlvbiwgd2Ugc2hvdWxkIGVuYWJsZSB0aGlzIHRpbWVsaW5lIGFnYWluIHNvIHRoYXQgaXQgcmVuZGVycyBwcm9wZXJseS4gV2Ugc2hvdWxkIGFsc28gYWxpZ24gdGhlIHBsYXloZWFkIHdpdGggdGhlIHBhcmVudCB0aW1lbGluZSdzIHdoZW4gYXBwcm9wcmlhdGUuXG5cdFx0XHRpZiAodGhpcy5fZ2MgfHwgdGhpcy5fdGltZSA9PT0gdGhpcy5fZHVyYXRpb24pIGlmICghdGhpcy5fcGF1c2VkKSBpZiAodGhpcy5fZHVyYXRpb24gPCB0aGlzLmR1cmF0aW9uKCkpIHtcblx0XHRcdFx0Ly9pbiBjYXNlIGFueSBvZiB0aGUgYW5jZXN0b3JzIGhhZCBjb21wbGV0ZWQgYnV0IHNob3VsZCBub3cgYmUgZW5hYmxlZC4uLlxuXHRcdFx0XHR0bCA9IHRoaXM7XG5cdFx0XHRcdGJlZm9yZVJhd1RpbWUgPSAodGwucmF3VGltZSgpID4gdmFsdWUuX3N0YXJ0VGltZSk7IC8vaWYgdGhlIHR3ZWVuIGlzIHBsYWNlZCBvbiB0aGUgdGltZWxpbmUgc28gdGhhdCBpdCBzdGFydHMgQkVGT1JFIHRoZSBjdXJyZW50IHJhd1RpbWUsIHdlIHNob3VsZCBhbGlnbiB0aGUgcGxheWhlYWQgKG1vdmUgdGhlIHRpbWVsaW5lKS4gVGhpcyBpcyBiZWNhdXNlIHNvbWV0aW1lcyB1c2VycyB3aWxsIGNyZWF0ZSBhIHRpbWVsaW5lLCBsZXQgaXQgZmluaXNoLCBhbmQgbXVjaCBsYXRlciBhcHBlbmQgYSB0d2VlbiBhbmQgZXhwZWN0IGl0IHRvIHJ1biBpbnN0ZWFkIG9mIGp1bXBpbmcgdG8gaXRzIGVuZCBzdGF0ZS4gV2hpbGUgdGVjaG5pY2FsbHkgb25lIGNvdWxkIGFyZ3VlIHRoYXQgaXQgc2hvdWxkIGp1bXAgdG8gaXRzIGVuZCBzdGF0ZSwgdGhhdCdzIG5vdCB3aGF0IHVzZXJzIGludHVpdGl2ZWx5IGV4cGVjdC5cblx0XHRcdFx0d2hpbGUgKHRsLl90aW1lbGluZSkge1xuXHRcdFx0XHRcdGlmIChiZWZvcmVSYXdUaW1lICYmIHRsLl90aW1lbGluZS5zbW9vdGhDaGlsZFRpbWluZykge1xuXHRcdFx0XHRcdFx0dGwudG90YWxUaW1lKHRsLl90b3RhbFRpbWUsIHRydWUpOyAvL21vdmVzIHRoZSB0aW1lbGluZSAoc2hpZnRzIGl0cyBzdGFydFRpbWUpIGlmIG5lY2Vzc2FyeSwgYW5kIGFsc28gZW5hYmxlcyBpdC5cblx0XHRcdFx0XHR9IGVsc2UgaWYgKHRsLl9nYykge1xuXHRcdFx0XHRcdFx0dGwuX2VuYWJsZWQodHJ1ZSwgZmFsc2UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0bCA9IHRsLl90aW1lbGluZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9O1xuXG5cdFx0cC5yZW1vdmUgPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdFx0aWYgKHZhbHVlIGluc3RhbmNlb2YgQW5pbWF0aW9uKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLl9yZW1vdmUodmFsdWUsIGZhbHNlKTtcblx0XHRcdH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBBcnJheSB8fCAodmFsdWUgJiYgdmFsdWUucHVzaCAmJiBfaXNBcnJheSh2YWx1ZSkpKSB7XG5cdFx0XHRcdHZhciBpID0gdmFsdWUubGVuZ3RoO1xuXHRcdFx0XHR3aGlsZSAoLS1pID4gLTEpIHtcblx0XHRcdFx0XHR0aGlzLnJlbW92ZSh2YWx1ZVtpXSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9IGVsc2UgaWYgKHR5cGVvZih2YWx1ZSkgPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMucmVtb3ZlTGFiZWwodmFsdWUpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXMua2lsbChudWxsLCB2YWx1ZSk7XG5cdFx0fTtcblxuXHRcdHAuX3JlbW92ZSA9IGZ1bmN0aW9uKHR3ZWVuLCBza2lwRGlzYWJsZSkge1xuXHRcdFx0U2ltcGxlVGltZWxpbmUucHJvdG90eXBlLl9yZW1vdmUuY2FsbCh0aGlzLCB0d2Vlbiwgc2tpcERpc2FibGUpO1xuXHRcdFx0dmFyIGxhc3QgPSB0aGlzLl9sYXN0O1xuXHRcdFx0aWYgKCFsYXN0KSB7XG5cdFx0XHRcdHRoaXMuX3RpbWUgPSB0aGlzLl90b3RhbFRpbWUgPSB0aGlzLl9kdXJhdGlvbiA9IHRoaXMuX3RvdGFsRHVyYXRpb24gPSAwO1xuXHRcdFx0fSBlbHNlIGlmICh0aGlzLl90aW1lID4gbGFzdC5fc3RhcnRUaW1lICsgbGFzdC5fdG90YWxEdXJhdGlvbiAvIGxhc3QuX3RpbWVTY2FsZSkge1xuXHRcdFx0XHR0aGlzLl90aW1lID0gdGhpcy5kdXJhdGlvbigpO1xuXHRcdFx0XHR0aGlzLl90b3RhbFRpbWUgPSB0aGlzLl90b3RhbER1cmF0aW9uO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fTtcblxuXHRcdHAuYXBwZW5kID0gZnVuY3Rpb24odmFsdWUsIG9mZnNldE9yTGFiZWwpIHtcblx0XHRcdHJldHVybiB0aGlzLmFkZCh2YWx1ZSwgdGhpcy5fcGFyc2VUaW1lT3JMYWJlbChudWxsLCBvZmZzZXRPckxhYmVsLCB0cnVlLCB2YWx1ZSkpO1xuXHRcdH07XG5cblx0XHRwLmluc2VydCA9IHAuaW5zZXJ0TXVsdGlwbGUgPSBmdW5jdGlvbih2YWx1ZSwgcG9zaXRpb24sIGFsaWduLCBzdGFnZ2VyKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5hZGQodmFsdWUsIHBvc2l0aW9uIHx8IDAsIGFsaWduLCBzdGFnZ2VyKTtcblx0XHR9O1xuXG5cdFx0cC5hcHBlbmRNdWx0aXBsZSA9IGZ1bmN0aW9uKHR3ZWVucywgb2Zmc2V0T3JMYWJlbCwgYWxpZ24sIHN0YWdnZXIpIHtcblx0XHRcdHJldHVybiB0aGlzLmFkZCh0d2VlbnMsIHRoaXMuX3BhcnNlVGltZU9yTGFiZWwobnVsbCwgb2Zmc2V0T3JMYWJlbCwgdHJ1ZSwgdHdlZW5zKSwgYWxpZ24sIHN0YWdnZXIpO1xuXHRcdH07XG5cblx0XHRwLmFkZExhYmVsID0gZnVuY3Rpb24obGFiZWwsIHBvc2l0aW9uKSB7XG5cdFx0XHR0aGlzLl9sYWJlbHNbbGFiZWxdID0gdGhpcy5fcGFyc2VUaW1lT3JMYWJlbChwb3NpdGlvbik7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9O1xuXG5cdFx0cC5hZGRQYXVzZSA9IGZ1bmN0aW9uKHBvc2l0aW9uLCBjYWxsYmFjaywgcGFyYW1zLCBzY29wZSkge1xuXHRcdFx0dmFyIHQgPSBUd2VlbkxpdGUuZGVsYXllZENhbGwoMCwgX3BhdXNlQ2FsbGJhY2ssIFtcIntzZWxmfVwiLCBjYWxsYmFjaywgcGFyYW1zLCBzY29wZV0sIHRoaXMpO1xuXHRcdFx0dC5kYXRhID0gXCJpc1BhdXNlXCI7IC8vIHdlIHVzZSB0aGlzIGZsYWcgaW4gVHdlZW5MaXRlJ3MgcmVuZGVyKCkgbWV0aG9kIHRvIGlkZW50aWZ5IGl0IGFzIGEgc3BlY2lhbCBjYXNlIHRoYXQgc2hvdWxkbid0IGJlIHRyaWdnZXJlZCB3aGVuIHRoZSB2aXJ0dWFsIHBsYXloZWFkIGlzIExFQVZJTkcgdGhlIGV4YWN0IHBvc2l0aW9uIHdoZXJlIHRoZSBwYXVzZSBpcywgb3RoZXJ3aXNlIHRpbWVsaW5lLmFkZFBhdXNlKDEpLnBsYXkoMSkgd291bGQgZW5kIHVwIHBhdXNlZCBvbiB0aGUgdmVyeSBuZXh0IHRpY2suXG5cdFx0XHRyZXR1cm4gdGhpcy5hZGQodCwgcG9zaXRpb24pO1xuXHRcdH07XG5cblx0XHRwLnJlbW92ZUxhYmVsID0gZnVuY3Rpb24obGFiZWwpIHtcblx0XHRcdGRlbGV0ZSB0aGlzLl9sYWJlbHNbbGFiZWxdO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fTtcblxuXHRcdHAuZ2V0TGFiZWxUaW1lID0gZnVuY3Rpb24obGFiZWwpIHtcblx0XHRcdHJldHVybiAodGhpcy5fbGFiZWxzW2xhYmVsXSAhPSBudWxsKSA/IHRoaXMuX2xhYmVsc1tsYWJlbF0gOiAtMTtcblx0XHR9O1xuXG5cdFx0cC5fcGFyc2VUaW1lT3JMYWJlbCA9IGZ1bmN0aW9uKHRpbWVPckxhYmVsLCBvZmZzZXRPckxhYmVsLCBhcHBlbmRJZkFic2VudCwgaWdub3JlKSB7XG5cdFx0XHR2YXIgaTtcblx0XHRcdC8vaWYgd2UncmUgYWJvdXQgdG8gYWRkIGEgdHdlZW4vdGltZWxpbmUgKG9yIGFuIGFycmF5IG9mIHRoZW0pIHRoYXQncyBhbHJlYWR5IGEgY2hpbGQgb2YgdGhpcyB0aW1lbGluZSwgd2Ugc2hvdWxkIHJlbW92ZSBpdCBmaXJzdCBzbyB0aGF0IGl0IGRvZXNuJ3QgY29udGFtaW5hdGUgdGhlIGR1cmF0aW9uKCkuXG5cdFx0XHRpZiAoaWdub3JlIGluc3RhbmNlb2YgQW5pbWF0aW9uICYmIGlnbm9yZS50aW1lbGluZSA9PT0gdGhpcykge1xuXHRcdFx0XHR0aGlzLnJlbW92ZShpZ25vcmUpO1xuXHRcdFx0fSBlbHNlIGlmIChpZ25vcmUgJiYgKChpZ25vcmUgaW5zdGFuY2VvZiBBcnJheSkgfHwgKGlnbm9yZS5wdXNoICYmIF9pc0FycmF5KGlnbm9yZSkpKSkge1xuXHRcdFx0XHRpID0gaWdub3JlLmxlbmd0aDtcblx0XHRcdFx0d2hpbGUgKC0taSA+IC0xKSB7XG5cdFx0XHRcdFx0aWYgKGlnbm9yZVtpXSBpbnN0YW5jZW9mIEFuaW1hdGlvbiAmJiBpZ25vcmVbaV0udGltZWxpbmUgPT09IHRoaXMpIHtcblx0XHRcdFx0XHRcdHRoaXMucmVtb3ZlKGlnbm9yZVtpXSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAodHlwZW9mKG9mZnNldE9yTGFiZWwpID09PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLl9wYXJzZVRpbWVPckxhYmVsKG9mZnNldE9yTGFiZWwsIChhcHBlbmRJZkFic2VudCAmJiB0eXBlb2YodGltZU9yTGFiZWwpID09PSBcIm51bWJlclwiICYmIHRoaXMuX2xhYmVsc1tvZmZzZXRPckxhYmVsXSA9PSBudWxsKSA/IHRpbWVPckxhYmVsIC0gdGhpcy5kdXJhdGlvbigpIDogMCwgYXBwZW5kSWZBYnNlbnQpO1xuXHRcdFx0fVxuXHRcdFx0b2Zmc2V0T3JMYWJlbCA9IG9mZnNldE9yTGFiZWwgfHwgMDtcblx0XHRcdGlmICh0eXBlb2YodGltZU9yTGFiZWwpID09PSBcInN0cmluZ1wiICYmIChpc05hTih0aW1lT3JMYWJlbCkgfHwgdGhpcy5fbGFiZWxzW3RpbWVPckxhYmVsXSAhPSBudWxsKSkgeyAvL2lmIHRoZSBzdHJpbmcgaXMgYSBudW1iZXIgbGlrZSBcIjFcIiwgY2hlY2sgdG8gc2VlIGlmIHRoZXJlJ3MgYSBsYWJlbCB3aXRoIHRoYXQgbmFtZSwgb3RoZXJ3aXNlIGludGVycHJldCBpdCBhcyBhIG51bWJlciAoYWJzb2x1dGUgdmFsdWUpLlxuXHRcdFx0XHRpID0gdGltZU9yTGFiZWwuaW5kZXhPZihcIj1cIik7XG5cdFx0XHRcdGlmIChpID09PSAtMSkge1xuXHRcdFx0XHRcdGlmICh0aGlzLl9sYWJlbHNbdGltZU9yTGFiZWxdID09IG51bGwpIHtcblx0XHRcdFx0XHRcdHJldHVybiBhcHBlbmRJZkFic2VudCA/ICh0aGlzLl9sYWJlbHNbdGltZU9yTGFiZWxdID0gdGhpcy5kdXJhdGlvbigpICsgb2Zmc2V0T3JMYWJlbCkgOiBvZmZzZXRPckxhYmVsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5fbGFiZWxzW3RpbWVPckxhYmVsXSArIG9mZnNldE9yTGFiZWw7XG5cdFx0XHRcdH1cblx0XHRcdFx0b2Zmc2V0T3JMYWJlbCA9IHBhcnNlSW50KHRpbWVPckxhYmVsLmNoYXJBdChpLTEpICsgXCIxXCIsIDEwKSAqIE51bWJlcih0aW1lT3JMYWJlbC5zdWJzdHIoaSsxKSk7XG5cdFx0XHRcdHRpbWVPckxhYmVsID0gKGkgPiAxKSA/IHRoaXMuX3BhcnNlVGltZU9yTGFiZWwodGltZU9yTGFiZWwuc3Vic3RyKDAsIGktMSksIDAsIGFwcGVuZElmQWJzZW50KSA6IHRoaXMuZHVyYXRpb24oKTtcblx0XHRcdH0gZWxzZSBpZiAodGltZU9yTGFiZWwgPT0gbnVsbCkge1xuXHRcdFx0XHR0aW1lT3JMYWJlbCA9IHRoaXMuZHVyYXRpb24oKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBOdW1iZXIodGltZU9yTGFiZWwpICsgb2Zmc2V0T3JMYWJlbDtcblx0XHR9O1xuXG5cdFx0cC5zZWVrID0gZnVuY3Rpb24ocG9zaXRpb24sIHN1cHByZXNzRXZlbnRzKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy50b3RhbFRpbWUoKHR5cGVvZihwb3NpdGlvbikgPT09IFwibnVtYmVyXCIpID8gcG9zaXRpb24gOiB0aGlzLl9wYXJzZVRpbWVPckxhYmVsKHBvc2l0aW9uKSwgKHN1cHByZXNzRXZlbnRzICE9PSBmYWxzZSkpO1xuXHRcdH07XG5cblx0XHRwLnN0b3AgPSBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiB0aGlzLnBhdXNlZCh0cnVlKTtcblx0XHR9O1xuXG5cdFx0cC5nb3RvQW5kUGxheSA9IGZ1bmN0aW9uKHBvc2l0aW9uLCBzdXBwcmVzc0V2ZW50cykge1xuXHRcdFx0cmV0dXJuIHRoaXMucGxheShwb3NpdGlvbiwgc3VwcHJlc3NFdmVudHMpO1xuXHRcdH07XG5cblx0XHRwLmdvdG9BbmRTdG9wID0gZnVuY3Rpb24ocG9zaXRpb24sIHN1cHByZXNzRXZlbnRzKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5wYXVzZShwb3NpdGlvbiwgc3VwcHJlc3NFdmVudHMpO1xuXHRcdH07XG5cblx0XHRwLnJlbmRlciA9IGZ1bmN0aW9uKHRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSkge1xuXHRcdFx0aWYgKHRoaXMuX2djKSB7XG5cdFx0XHRcdHRoaXMuX2VuYWJsZWQodHJ1ZSwgZmFsc2UpO1xuXHRcdFx0fVxuXHRcdFx0dmFyIHRvdGFsRHVyID0gKCF0aGlzLl9kaXJ0eSkgPyB0aGlzLl90b3RhbER1cmF0aW9uIDogdGhpcy50b3RhbER1cmF0aW9uKCksXG5cdFx0XHRcdHByZXZUaW1lID0gdGhpcy5fdGltZSxcblx0XHRcdFx0cHJldlN0YXJ0ID0gdGhpcy5fc3RhcnRUaW1lLFxuXHRcdFx0XHRwcmV2VGltZVNjYWxlID0gdGhpcy5fdGltZVNjYWxlLFxuXHRcdFx0XHRwcmV2UGF1c2VkID0gdGhpcy5fcGF1c2VkLFxuXHRcdFx0XHR0d2VlbiwgaXNDb21wbGV0ZSwgbmV4dCwgY2FsbGJhY2ssIGludGVybmFsRm9yY2U7XG5cdFx0XHRpZiAodGltZSA+PSB0b3RhbER1cikge1xuXHRcdFx0XHR0aGlzLl90b3RhbFRpbWUgPSB0aGlzLl90aW1lID0gdG90YWxEdXI7XG5cdFx0XHRcdGlmICghdGhpcy5fcmV2ZXJzZWQpIGlmICghdGhpcy5faGFzUGF1c2VkQ2hpbGQoKSkge1xuXHRcdFx0XHRcdGlzQ29tcGxldGUgPSB0cnVlO1xuXHRcdFx0XHRcdGNhbGxiYWNrID0gXCJvbkNvbXBsZXRlXCI7XG5cdFx0XHRcdFx0aW50ZXJuYWxGb3JjZSA9ICEhdGhpcy5fdGltZWxpbmUuYXV0b1JlbW92ZUNoaWxkcmVuOyAvL290aGVyd2lzZSwgaWYgdGhlIGFuaW1hdGlvbiBpcyB1bnBhdXNlZC9hY3RpdmF0ZWQgYWZ0ZXIgaXQncyBhbHJlYWR5IGZpbmlzaGVkLCBpdCBkb2Vzbid0IGdldCByZW1vdmVkIGZyb20gdGhlIHBhcmVudCB0aW1lbGluZS5cblx0XHRcdFx0XHRpZiAodGhpcy5fZHVyYXRpb24gPT09IDApIGlmICh0aW1lID09PSAwIHx8IHRoaXMuX3Jhd1ByZXZUaW1lIDwgMCB8fCB0aGlzLl9yYXdQcmV2VGltZSA9PT0gX3RpbnlOdW0pIGlmICh0aGlzLl9yYXdQcmV2VGltZSAhPT0gdGltZSAmJiB0aGlzLl9maXJzdCkge1xuXHRcdFx0XHRcdFx0aW50ZXJuYWxGb3JjZSA9IHRydWU7XG5cdFx0XHRcdFx0XHRpZiAodGhpcy5fcmF3UHJldlRpbWUgPiBfdGlueU51bSkge1xuXHRcdFx0XHRcdFx0XHRjYWxsYmFjayA9IFwib25SZXZlcnNlQ29tcGxldGVcIjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5fcmF3UHJldlRpbWUgPSAodGhpcy5fZHVyYXRpb24gfHwgIXN1cHByZXNzRXZlbnRzIHx8IHRpbWUgfHwgdGhpcy5fcmF3UHJldlRpbWUgPT09IHRpbWUpID8gdGltZSA6IF90aW55TnVtOyAvL3doZW4gdGhlIHBsYXloZWFkIGFycml2ZXMgYXQgRVhBQ1RMWSB0aW1lIDAgKHJpZ2h0IG9uIHRvcCkgb2YgYSB6ZXJvLWR1cmF0aW9uIHRpbWVsaW5lIG9yIHR3ZWVuLCB3ZSBuZWVkIHRvIGRpc2Nlcm4gaWYgZXZlbnRzIGFyZSBzdXBwcmVzc2VkIHNvIHRoYXQgd2hlbiB0aGUgcGxheWhlYWQgbW92ZXMgYWdhaW4gKG5leHQgdGltZSksIGl0J2xsIHRyaWdnZXIgdGhlIGNhbGxiYWNrLiBJZiBldmVudHMgYXJlIE5PVCBzdXBwcmVzc2VkLCBvYnZpb3VzbHkgdGhlIGNhbGxiYWNrIHdvdWxkIGJlIHRyaWdnZXJlZCBpbiB0aGlzIHJlbmRlci4gQmFzaWNhbGx5LCB0aGUgY2FsbGJhY2sgc2hvdWxkIGZpcmUgZWl0aGVyIHdoZW4gdGhlIHBsYXloZWFkIEFSUklWRVMgb3IgTEVBVkVTIHRoaXMgZXhhY3Qgc3BvdCwgbm90IGJvdGguIEltYWdpbmUgZG9pbmcgYSB0aW1lbGluZS5zZWVrKDApIGFuZCB0aGVyZSdzIGEgY2FsbGJhY2sgdGhhdCBzaXRzIGF0IDAuIFNpbmNlIGV2ZW50cyBhcmUgc3VwcHJlc3NlZCBvbiB0aGF0IHNlZWsoKSBieSBkZWZhdWx0LCBub3RoaW5nIHdpbGwgZmlyZSwgYnV0IHdoZW4gdGhlIHBsYXloZWFkIG1vdmVzIG9mZiBvZiB0aGF0IHBvc2l0aW9uLCB0aGUgY2FsbGJhY2sgc2hvdWxkIGZpcmUuIFRoaXMgYmVoYXZpb3IgaXMgd2hhdCBwZW9wbGUgaW50dWl0aXZlbHkgZXhwZWN0LiBXZSBzZXQgdGhlIF9yYXdQcmV2VGltZSB0byBiZSBhIHByZWNpc2UgdGlueSBudW1iZXIgdG8gaW5kaWNhdGUgdGhpcyBzY2VuYXJpbyByYXRoZXIgdGhhbiB1c2luZyBhbm90aGVyIHByb3BlcnR5L3ZhcmlhYmxlIHdoaWNoIHdvdWxkIGluY3JlYXNlIG1lbW9yeSB1c2FnZS4gVGhpcyB0ZWNobmlxdWUgaXMgbGVzcyByZWFkYWJsZSwgYnV0IG1vcmUgZWZmaWNpZW50LlxuXHRcdFx0XHR0aW1lID0gdG90YWxEdXIgKyAwLjAwMDE7IC8vdG8gYXZvaWQgb2NjYXNpb25hbCBmbG9hdGluZyBwb2ludCByb3VuZGluZyBlcnJvcnMgLSBzb21ldGltZXMgY2hpbGQgdHdlZW5zL3RpbWVsaW5lcyB3ZXJlIG5vdCBiZWluZyBmdWxseSBjb21wbGV0ZWQgKHRoZWlyIHByb2dyZXNzIG1pZ2h0IGJlIDAuOTk5OTk5OTk5OTk5OTk4IGluc3RlYWQgb2YgMSBiZWNhdXNlIHdoZW4gX3RpbWUgLSB0d2Vlbi5fc3RhcnRUaW1lIGlzIHBlcmZvcm1lZCwgZmxvYXRpbmcgcG9pbnQgZXJyb3JzIHdvdWxkIHJldHVybiBhIHZhbHVlIHRoYXQgd2FzIFNMSUdIVExZIG9mZikuIFRyeSAoOTk5OTk5OTk5OTk5LjcgLSA5OTk5OTk5OTk5OTkpICogMSA9IDAuNjk5OTUxMTcxODc1IGluc3RlYWQgb2YgMC43LlxuXG5cdFx0XHR9IGVsc2UgaWYgKHRpbWUgPCAwLjAwMDAwMDEpIHsgLy90byB3b3JrIGFyb3VuZCBvY2Nhc2lvbmFsIGZsb2F0aW5nIHBvaW50IG1hdGggYXJ0aWZhY3RzLCByb3VuZCBzdXBlciBzbWFsbCB2YWx1ZXMgdG8gMC5cblx0XHRcdFx0dGhpcy5fdG90YWxUaW1lID0gdGhpcy5fdGltZSA9IDA7XG5cdFx0XHRcdGlmIChwcmV2VGltZSAhPT0gMCB8fCAodGhpcy5fZHVyYXRpb24gPT09IDAgJiYgdGhpcy5fcmF3UHJldlRpbWUgIT09IF90aW55TnVtICYmICh0aGlzLl9yYXdQcmV2VGltZSA+IDAgfHwgKHRpbWUgPCAwICYmIHRoaXMuX3Jhd1ByZXZUaW1lID49IDApKSkpIHtcblx0XHRcdFx0XHRjYWxsYmFjayA9IFwib25SZXZlcnNlQ29tcGxldGVcIjtcblx0XHRcdFx0XHRpc0NvbXBsZXRlID0gdGhpcy5fcmV2ZXJzZWQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHRpbWUgPCAwKSB7XG5cdFx0XHRcdFx0dGhpcy5fYWN0aXZlID0gZmFsc2U7XG5cdFx0XHRcdFx0aWYgKHRoaXMuX3RpbWVsaW5lLmF1dG9SZW1vdmVDaGlsZHJlbiAmJiB0aGlzLl9yZXZlcnNlZCkgeyAvL2Vuc3VyZXMgcHJvcGVyIEdDIGlmIGEgdGltZWxpbmUgaXMgcmVzdW1lZCBhZnRlciBpdCdzIGZpbmlzaGVkIHJldmVyc2luZy5cblx0XHRcdFx0XHRcdGludGVybmFsRm9yY2UgPSBpc0NvbXBsZXRlID0gdHJ1ZTtcblx0XHRcdFx0XHRcdGNhbGxiYWNrID0gXCJvblJldmVyc2VDb21wbGV0ZVwiO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5fcmF3UHJldlRpbWUgPj0gMCAmJiB0aGlzLl9maXJzdCkgeyAvL3doZW4gZ29pbmcgYmFjayBiZXlvbmQgdGhlIHN0YXJ0LCBmb3JjZSBhIHJlbmRlciBzbyB0aGF0IHplcm8tZHVyYXRpb24gdHdlZW5zIHRoYXQgc2l0IGF0IHRoZSB2ZXJ5IGJlZ2lubmluZyByZW5kZXIgdGhlaXIgc3RhcnQgdmFsdWVzIHByb3Blcmx5LiBPdGhlcndpc2UsIGlmIHRoZSBwYXJlbnQgdGltZWxpbmUncyBwbGF5aGVhZCBsYW5kcyBleGFjdGx5IGF0IHRoaXMgdGltZWxpbmUncyBzdGFydFRpbWUsIGFuZCB0aGVuIG1vdmVzIGJhY2t3YXJkcywgdGhlIHplcm8tZHVyYXRpb24gdHdlZW5zIGF0IHRoZSBiZWdpbm5pbmcgd291bGQgc3RpbGwgYmUgYXQgdGhlaXIgZW5kIHN0YXRlLlxuXHRcdFx0XHRcdFx0aW50ZXJuYWxGb3JjZSA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuX3Jhd1ByZXZUaW1lID0gdGltZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLl9yYXdQcmV2VGltZSA9ICh0aGlzLl9kdXJhdGlvbiB8fCAhc3VwcHJlc3NFdmVudHMgfHwgdGltZSB8fCB0aGlzLl9yYXdQcmV2VGltZSA9PT0gdGltZSkgPyB0aW1lIDogX3RpbnlOdW07IC8vd2hlbiB0aGUgcGxheWhlYWQgYXJyaXZlcyBhdCBFWEFDVExZIHRpbWUgMCAocmlnaHQgb24gdG9wKSBvZiBhIHplcm8tZHVyYXRpb24gdGltZWxpbmUgb3IgdHdlZW4sIHdlIG5lZWQgdG8gZGlzY2VybiBpZiBldmVudHMgYXJlIHN1cHByZXNzZWQgc28gdGhhdCB3aGVuIHRoZSBwbGF5aGVhZCBtb3ZlcyBhZ2FpbiAobmV4dCB0aW1lKSwgaXQnbGwgdHJpZ2dlciB0aGUgY2FsbGJhY2suIElmIGV2ZW50cyBhcmUgTk9UIHN1cHByZXNzZWQsIG9idmlvdXNseSB0aGUgY2FsbGJhY2sgd291bGQgYmUgdHJpZ2dlcmVkIGluIHRoaXMgcmVuZGVyLiBCYXNpY2FsbHksIHRoZSBjYWxsYmFjayBzaG91bGQgZmlyZSBlaXRoZXIgd2hlbiB0aGUgcGxheWhlYWQgQVJSSVZFUyBvciBMRUFWRVMgdGhpcyBleGFjdCBzcG90LCBub3QgYm90aC4gSW1hZ2luZSBkb2luZyBhIHRpbWVsaW5lLnNlZWsoMCkgYW5kIHRoZXJlJ3MgYSBjYWxsYmFjayB0aGF0IHNpdHMgYXQgMC4gU2luY2UgZXZlbnRzIGFyZSBzdXBwcmVzc2VkIG9uIHRoYXQgc2VlaygpIGJ5IGRlZmF1bHQsIG5vdGhpbmcgd2lsbCBmaXJlLCBidXQgd2hlbiB0aGUgcGxheWhlYWQgbW92ZXMgb2ZmIG9mIHRoYXQgcG9zaXRpb24sIHRoZSBjYWxsYmFjayBzaG91bGQgZmlyZS4gVGhpcyBiZWhhdmlvciBpcyB3aGF0IHBlb3BsZSBpbnR1aXRpdmVseSBleHBlY3QuIFdlIHNldCB0aGUgX3Jhd1ByZXZUaW1lIHRvIGJlIGEgcHJlY2lzZSB0aW55IG51bWJlciB0byBpbmRpY2F0ZSB0aGlzIHNjZW5hcmlvIHJhdGhlciB0aGFuIHVzaW5nIGFub3RoZXIgcHJvcGVydHkvdmFyaWFibGUgd2hpY2ggd291bGQgaW5jcmVhc2UgbWVtb3J5IHVzYWdlLiBUaGlzIHRlY2huaXF1ZSBpcyBsZXNzIHJlYWRhYmxlLCBidXQgbW9yZSBlZmZpY2llbnQuXG5cdFx0XHRcdFx0aWYgKHRpbWUgPT09IDAgJiYgaXNDb21wbGV0ZSkgeyAvL2lmIHRoZXJlJ3MgYSB6ZXJvLWR1cmF0aW9uIHR3ZWVuIGF0IHRoZSB2ZXJ5IGJlZ2lubmluZyBvZiBhIHRpbWVsaW5lIGFuZCB0aGUgcGxheWhlYWQgbGFuZHMgRVhBQ1RMWSBhdCB0aW1lIDAsIHRoYXQgdHdlZW4gd2lsbCBjb3JyZWN0bHkgcmVuZGVyIGl0cyBlbmQgdmFsdWVzLCBidXQgd2UgbmVlZCB0byBrZWVwIHRoZSB0aW1lbGluZSBhbGl2ZSBmb3Igb25lIG1vcmUgcmVuZGVyIHNvIHRoYXQgdGhlIGJlZ2lubmluZyB2YWx1ZXMgcmVuZGVyIHByb3Blcmx5IGFzIHRoZSBwYXJlbnQncyBwbGF5aGVhZCBrZWVwcyBtb3ZpbmcgYmV5b25kIHRoZSBiZWdpbmluZy4gSW1hZ2luZSBvYmoueCBzdGFydHMgYXQgMCBhbmQgdGhlbiB3ZSBkbyB0bC5zZXQob2JqLCB7eDoxMDB9KS50byhvYmosIDEsIHt4OjIwMH0pIGFuZCB0aGVuIGxhdGVyIHdlIHRsLnJldmVyc2UoKS4uLnRoZSBnb2FsIGlzIHRvIGhhdmUgb2JqLnggcmV2ZXJ0IHRvIDAuIElmIHRoZSBwbGF5aGVhZCBoYXBwZW5zIHRvIGxhbmQgb24gZXhhY3RseSAwLCB3aXRob3V0IHRoaXMgY2h1bmsgb2YgY29kZSwgaXQnZCBjb21wbGV0ZSB0aGUgdGltZWxpbmUgYW5kIHJlbW92ZSBpdCBmcm9tIHRoZSByZW5kZXJpbmcgcXVldWUgKG5vdCBnb29kKS5cblx0XHRcdFx0XHRcdHR3ZWVuID0gdGhpcy5fZmlyc3Q7XG5cdFx0XHRcdFx0XHR3aGlsZSAodHdlZW4gJiYgdHdlZW4uX3N0YXJ0VGltZSA9PT0gMCkge1xuXHRcdFx0XHRcdFx0XHRpZiAoIXR3ZWVuLl9kdXJhdGlvbikge1xuXHRcdFx0XHRcdFx0XHRcdGlzQ29tcGxldGUgPSBmYWxzZTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR0d2VlbiA9IHR3ZWVuLl9uZXh0O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aW1lID0gMDsgLy90byBhdm9pZCBvY2Nhc2lvbmFsIGZsb2F0aW5nIHBvaW50IHJvdW5kaW5nIGVycm9ycyAoY291bGQgY2F1c2UgcHJvYmxlbXMgZXNwZWNpYWxseSB3aXRoIHplcm8tZHVyYXRpb24gdHdlZW5zIGF0IHRoZSB2ZXJ5IGJlZ2lubmluZyBvZiB0aGUgdGltZWxpbmUpXG5cdFx0XHRcdFx0aWYgKCF0aGlzLl9pbml0dGVkKSB7XG5cdFx0XHRcdFx0XHRpbnRlcm5hbEZvcmNlID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5fdG90YWxUaW1lID0gdGhpcy5fdGltZSA9IHRoaXMuX3Jhd1ByZXZUaW1lID0gdGltZTtcblx0XHRcdH1cblx0XHRcdGlmICgodGhpcy5fdGltZSA9PT0gcHJldlRpbWUgfHwgIXRoaXMuX2ZpcnN0KSAmJiAhZm9yY2UgJiYgIWludGVybmFsRm9yY2UpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fSBlbHNlIGlmICghdGhpcy5faW5pdHRlZCkge1xuXHRcdFx0XHR0aGlzLl9pbml0dGVkID0gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCF0aGlzLl9hY3RpdmUpIGlmICghdGhpcy5fcGF1c2VkICYmIHRoaXMuX3RpbWUgIT09IHByZXZUaW1lICYmIHRpbWUgPiAwKSB7XG5cdFx0XHRcdHRoaXMuX2FjdGl2ZSA9IHRydWU7ICAvL3NvIHRoYXQgaWYgdGhlIHVzZXIgcmVuZGVycyB0aGUgdGltZWxpbmUgKGFzIG9wcG9zZWQgdG8gdGhlIHBhcmVudCB0aW1lbGluZSByZW5kZXJpbmcgaXQpLCBpdCBpcyBmb3JjZWQgdG8gcmUtcmVuZGVyIGFuZCBhbGlnbiBpdCB3aXRoIHRoZSBwcm9wZXIgdGltZS9mcmFtZSBvbiB0aGUgbmV4dCByZW5kZXJpbmcgY3ljbGUuIE1heWJlIHRoZSB0aW1lbGluZSBhbHJlYWR5IGZpbmlzaGVkIGJ1dCB0aGUgdXNlciBtYW51YWxseSByZS1yZW5kZXJzIGl0IGFzIGhhbGZ3YXkgZG9uZSwgZm9yIGV4YW1wbGUuXG5cdFx0XHR9XG5cblx0XHRcdGlmIChwcmV2VGltZSA9PT0gMCkgaWYgKHRoaXMudmFycy5vblN0YXJ0KSBpZiAodGhpcy5fdGltZSAhPT0gMCkgaWYgKCFzdXBwcmVzc0V2ZW50cykge1xuXHRcdFx0XHR0aGlzLnZhcnMub25TdGFydC5hcHBseSh0aGlzLnZhcnMub25TdGFydFNjb3BlIHx8IHRoaXMsIHRoaXMudmFycy5vblN0YXJ0UGFyYW1zIHx8IF9ibGFua0FycmF5KTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMuX3RpbWUgPj0gcHJldlRpbWUpIHtcblx0XHRcdFx0dHdlZW4gPSB0aGlzLl9maXJzdDtcblx0XHRcdFx0d2hpbGUgKHR3ZWVuKSB7XG5cdFx0XHRcdFx0bmV4dCA9IHR3ZWVuLl9uZXh0OyAvL3JlY29yZCBpdCBoZXJlIGJlY2F1c2UgdGhlIHZhbHVlIGNvdWxkIGNoYW5nZSBhZnRlciByZW5kZXJpbmcuLi5cblx0XHRcdFx0XHRpZiAodGhpcy5fcGF1c2VkICYmICFwcmV2UGF1c2VkKSB7IC8vaW4gY2FzZSBhIHR3ZWVuIHBhdXNlcyB0aGUgdGltZWxpbmUgd2hlbiByZW5kZXJpbmdcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAodHdlZW4uX2FjdGl2ZSB8fCAodHdlZW4uX3N0YXJ0VGltZSA8PSB0aGlzLl90aW1lICYmICF0d2Vlbi5fcGF1c2VkICYmICF0d2Vlbi5fZ2MpKSB7XG5cdFx0XHRcdFx0XHRpZiAoIXR3ZWVuLl9yZXZlcnNlZCkge1xuXHRcdFx0XHRcdFx0XHR0d2Vlbi5yZW5kZXIoKHRpbWUgLSB0d2Vlbi5fc3RhcnRUaW1lKSAqIHR3ZWVuLl90aW1lU2NhbGUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR0d2Vlbi5yZW5kZXIoKCghdHdlZW4uX2RpcnR5KSA/IHR3ZWVuLl90b3RhbER1cmF0aW9uIDogdHdlZW4udG90YWxEdXJhdGlvbigpKSAtICgodGltZSAtIHR3ZWVuLl9zdGFydFRpbWUpICogdHdlZW4uX3RpbWVTY2FsZSksIHN1cHByZXNzRXZlbnRzLCBmb3JjZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHR3ZWVuID0gbmV4dDtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dHdlZW4gPSB0aGlzLl9sYXN0O1xuXHRcdFx0XHR3aGlsZSAodHdlZW4pIHtcblx0XHRcdFx0XHRuZXh0ID0gdHdlZW4uX3ByZXY7IC8vcmVjb3JkIGl0IGhlcmUgYmVjYXVzZSB0aGUgdmFsdWUgY291bGQgY2hhbmdlIGFmdGVyIHJlbmRlcmluZy4uLlxuXHRcdFx0XHRcdGlmICh0aGlzLl9wYXVzZWQgJiYgIXByZXZQYXVzZWQpIHsgLy9pbiBjYXNlIGEgdHdlZW4gcGF1c2VzIHRoZSB0aW1lbGluZSB3aGVuIHJlbmRlcmluZ1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fSBlbHNlIGlmICh0d2Vlbi5fYWN0aXZlIHx8ICh0d2Vlbi5fc3RhcnRUaW1lIDw9IHByZXZUaW1lICYmICF0d2Vlbi5fcGF1c2VkICYmICF0d2Vlbi5fZ2MpKSB7XG5cdFx0XHRcdFx0XHRpZiAoIXR3ZWVuLl9yZXZlcnNlZCkge1xuXHRcdFx0XHRcdFx0XHR0d2Vlbi5yZW5kZXIoKHRpbWUgLSB0d2Vlbi5fc3RhcnRUaW1lKSAqIHR3ZWVuLl90aW1lU2NhbGUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR0d2Vlbi5yZW5kZXIoKCghdHdlZW4uX2RpcnR5KSA/IHR3ZWVuLl90b3RhbER1cmF0aW9uIDogdHdlZW4udG90YWxEdXJhdGlvbigpKSAtICgodGltZSAtIHR3ZWVuLl9zdGFydFRpbWUpICogdHdlZW4uX3RpbWVTY2FsZSksIHN1cHByZXNzRXZlbnRzLCBmb3JjZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHR3ZWVuID0gbmV4dDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5fb25VcGRhdGUpIGlmICghc3VwcHJlc3NFdmVudHMpIHtcblx0XHRcdFx0aWYgKF9sYXp5VHdlZW5zLmxlbmd0aCkgeyAvL2luIGNhc2UgcmVuZGVyaW5nIGNhdXNlZCBhbnkgdHdlZW5zIHRvIGxhenktaW5pdCwgd2Ugc2hvdWxkIHJlbmRlciB0aGVtIGJlY2F1c2UgdHlwaWNhbGx5IHdoZW4gYSB0aW1lbGluZSBmaW5pc2hlcywgdXNlcnMgZXhwZWN0IHRoaW5ncyB0byBoYXZlIHJlbmRlcmVkIGZ1bGx5LiBJbWFnaW5lIGFuIG9uVXBkYXRlIG9uIGEgdGltZWxpbmUgdGhhdCByZXBvcnRzL2NoZWNrcyB0d2VlbmVkIHZhbHVlcy5cblx0XHRcdFx0XHRfbGF6eVJlbmRlcigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuX29uVXBkYXRlLmFwcGx5KHRoaXMudmFycy5vblVwZGF0ZVNjb3BlIHx8IHRoaXMsIHRoaXMudmFycy5vblVwZGF0ZVBhcmFtcyB8fCBfYmxhbmtBcnJheSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChjYWxsYmFjaykgaWYgKCF0aGlzLl9nYykgaWYgKHByZXZTdGFydCA9PT0gdGhpcy5fc3RhcnRUaW1lIHx8IHByZXZUaW1lU2NhbGUgIT09IHRoaXMuX3RpbWVTY2FsZSkgaWYgKHRoaXMuX3RpbWUgPT09IDAgfHwgdG90YWxEdXIgPj0gdGhpcy50b3RhbER1cmF0aW9uKCkpIHsgLy9pZiBvbmUgb2YgdGhlIHR3ZWVucyB0aGF0IHdhcyByZW5kZXJlZCBhbHRlcmVkIHRoaXMgdGltZWxpbmUncyBzdGFydFRpbWUgKGxpa2UgaWYgYW4gb25Db21wbGV0ZSByZXZlcnNlZCB0aGUgdGltZWxpbmUpLCBpdCBwcm9iYWJseSBpc24ndCBjb21wbGV0ZS4gSWYgaXQgaXMsIGRvbid0IHdvcnJ5LCBiZWNhdXNlIHdoYXRldmVyIGNhbGwgYWx0ZXJlZCB0aGUgc3RhcnRUaW1lIHdvdWxkIGNvbXBsZXRlIGlmIGl0IHdhcyBuZWNlc3NhcnkgYXQgdGhlIG5ldyB0aW1lLiBUaGUgb25seSBleGNlcHRpb24gaXMgdGhlIHRpbWVTY2FsZSBwcm9wZXJ0eS4gQWxzbyBjaGVjayBfZ2MgYmVjYXVzZSB0aGVyZSdzIGEgY2hhbmNlIHRoYXQga2lsbCgpIGNvdWxkIGJlIGNhbGxlZCBpbiBhbiBvblVwZGF0ZVxuXHRcdFx0XHRpZiAoaXNDb21wbGV0ZSkge1xuXHRcdFx0XHRcdGlmIChfbGF6eVR3ZWVucy5sZW5ndGgpIHsgLy9pbiBjYXNlIHJlbmRlcmluZyBjYXVzZWQgYW55IHR3ZWVucyB0byBsYXp5LWluaXQsIHdlIHNob3VsZCByZW5kZXIgdGhlbSBiZWNhdXNlIHR5cGljYWxseSB3aGVuIGEgdGltZWxpbmUgZmluaXNoZXMsIHVzZXJzIGV4cGVjdCB0aGluZ3MgdG8gaGF2ZSByZW5kZXJlZCBmdWxseS4gSW1hZ2luZSBhbiBvbkNvbXBsZXRlIG9uIGEgdGltZWxpbmUgdGhhdCByZXBvcnRzL2NoZWNrcyB0d2VlbmVkIHZhbHVlcy5cblx0XHRcdFx0XHRcdF9sYXp5UmVuZGVyKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICh0aGlzLl90aW1lbGluZS5hdXRvUmVtb3ZlQ2hpbGRyZW4pIHtcblx0XHRcdFx0XHRcdHRoaXMuX2VuYWJsZWQoZmFsc2UsIGZhbHNlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5fYWN0aXZlID0gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFzdXBwcmVzc0V2ZW50cyAmJiB0aGlzLnZhcnNbY2FsbGJhY2tdKSB7XG5cdFx0XHRcdFx0dGhpcy52YXJzW2NhbGxiYWNrXS5hcHBseSh0aGlzLnZhcnNbY2FsbGJhY2sgKyBcIlNjb3BlXCJdIHx8IHRoaXMsIHRoaXMudmFyc1tjYWxsYmFjayArIFwiUGFyYW1zXCJdIHx8IF9ibGFua0FycmF5KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRwLl9oYXNQYXVzZWRDaGlsZCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHR3ZWVuID0gdGhpcy5fZmlyc3Q7XG5cdFx0XHR3aGlsZSAodHdlZW4pIHtcblx0XHRcdFx0aWYgKHR3ZWVuLl9wYXVzZWQgfHwgKCh0d2VlbiBpbnN0YW5jZW9mIFRpbWVsaW5lTGl0ZSkgJiYgdHdlZW4uX2hhc1BhdXNlZENoaWxkKCkpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0dHdlZW4gPSB0d2Vlbi5fbmV4dDtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9O1xuXG5cdFx0cC5nZXRDaGlsZHJlbiA9IGZ1bmN0aW9uKG5lc3RlZCwgdHdlZW5zLCB0aW1lbGluZXMsIGlnbm9yZUJlZm9yZVRpbWUpIHtcblx0XHRcdGlnbm9yZUJlZm9yZVRpbWUgPSBpZ25vcmVCZWZvcmVUaW1lIHx8IC05OTk5OTk5OTk5O1xuXHRcdFx0dmFyIGEgPSBbXSxcblx0XHRcdFx0dHdlZW4gPSB0aGlzLl9maXJzdCxcblx0XHRcdFx0Y250ID0gMDtcblx0XHRcdHdoaWxlICh0d2Vlbikge1xuXHRcdFx0XHRpZiAodHdlZW4uX3N0YXJ0VGltZSA8IGlnbm9yZUJlZm9yZVRpbWUpIHtcblx0XHRcdFx0XHQvL2RvIG5vdGhpbmdcblx0XHRcdFx0fSBlbHNlIGlmICh0d2VlbiBpbnN0YW5jZW9mIFR3ZWVuTGl0ZSkge1xuXHRcdFx0XHRcdGlmICh0d2VlbnMgIT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0XHRhW2NudCsrXSA9IHR3ZWVuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRpZiAodGltZWxpbmVzICE9PSBmYWxzZSkge1xuXHRcdFx0XHRcdFx0YVtjbnQrK10gPSB0d2Vlbjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKG5lc3RlZCAhPT0gZmFsc2UpIHtcblx0XHRcdFx0XHRcdGEgPSBhLmNvbmNhdCh0d2Vlbi5nZXRDaGlsZHJlbih0cnVlLCB0d2VlbnMsIHRpbWVsaW5lcykpO1xuXHRcdFx0XHRcdFx0Y250ID0gYS5sZW5ndGg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHR3ZWVuID0gdHdlZW4uX25leHQ7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gYTtcblx0XHR9O1xuXG5cdFx0cC5nZXRUd2VlbnNPZiA9IGZ1bmN0aW9uKHRhcmdldCwgbmVzdGVkKSB7XG5cdFx0XHR2YXIgZGlzYWJsZWQgPSB0aGlzLl9nYyxcblx0XHRcdFx0YSA9IFtdLFxuXHRcdFx0XHRjbnQgPSAwLFxuXHRcdFx0XHR0d2VlbnMsIGk7XG5cdFx0XHRpZiAoZGlzYWJsZWQpIHtcblx0XHRcdFx0dGhpcy5fZW5hYmxlZCh0cnVlLCB0cnVlKTsgLy9nZXRUd2VlbnNPZigpIGZpbHRlcnMgb3V0IGRpc2FibGVkIHR3ZWVucywgYW5kIHdlIGhhdmUgdG8gbWFyayB0aGVtIGFzIF9nYyA9IHRydWUgd2hlbiB0aGUgdGltZWxpbmUgY29tcGxldGVzIGluIG9yZGVyIHRvIGFsbG93IGNsZWFuIGdhcmJhZ2UgY29sbGVjdGlvbiwgc28gdGVtcG9yYXJpbHkgcmUtZW5hYmxlIHRoZSB0aW1lbGluZSBoZXJlLlxuXHRcdFx0fVxuXHRcdFx0dHdlZW5zID0gVHdlZW5MaXRlLmdldFR3ZWVuc09mKHRhcmdldCk7XG5cdFx0XHRpID0gdHdlZW5zLmxlbmd0aDtcblx0XHRcdHdoaWxlICgtLWkgPiAtMSkge1xuXHRcdFx0XHRpZiAodHdlZW5zW2ldLnRpbWVsaW5lID09PSB0aGlzIHx8IChuZXN0ZWQgJiYgdGhpcy5fY29udGFpbnModHdlZW5zW2ldKSkpIHtcblx0XHRcdFx0XHRhW2NudCsrXSA9IHR3ZWVuc1tpXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGRpc2FibGVkKSB7XG5cdFx0XHRcdHRoaXMuX2VuYWJsZWQoZmFsc2UsIHRydWUpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGE7XG5cdFx0fTtcblxuXHRcdHAucmVjZW50ID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5fcmVjZW50O1xuXHRcdH07XG5cblx0XHRwLl9jb250YWlucyA9IGZ1bmN0aW9uKHR3ZWVuKSB7XG5cdFx0XHR2YXIgdGwgPSB0d2Vlbi50aW1lbGluZTtcblx0XHRcdHdoaWxlICh0bCkge1xuXHRcdFx0XHRpZiAodGwgPT09IHRoaXMpIHtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0bCA9IHRsLnRpbWVsaW5lO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH07XG5cblx0XHRwLnNoaWZ0Q2hpbGRyZW4gPSBmdW5jdGlvbihhbW91bnQsIGFkanVzdExhYmVscywgaWdub3JlQmVmb3JlVGltZSkge1xuXHRcdFx0aWdub3JlQmVmb3JlVGltZSA9IGlnbm9yZUJlZm9yZVRpbWUgfHwgMDtcblx0XHRcdHZhciB0d2VlbiA9IHRoaXMuX2ZpcnN0LFxuXHRcdFx0XHRsYWJlbHMgPSB0aGlzLl9sYWJlbHMsXG5cdFx0XHRcdHA7XG5cdFx0XHR3aGlsZSAodHdlZW4pIHtcblx0XHRcdFx0aWYgKHR3ZWVuLl9zdGFydFRpbWUgPj0gaWdub3JlQmVmb3JlVGltZSkge1xuXHRcdFx0XHRcdHR3ZWVuLl9zdGFydFRpbWUgKz0gYW1vdW50O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHR3ZWVuID0gdHdlZW4uX25leHQ7XG5cdFx0XHR9XG5cdFx0XHRpZiAoYWRqdXN0TGFiZWxzKSB7XG5cdFx0XHRcdGZvciAocCBpbiBsYWJlbHMpIHtcblx0XHRcdFx0XHRpZiAobGFiZWxzW3BdID49IGlnbm9yZUJlZm9yZVRpbWUpIHtcblx0XHRcdFx0XHRcdGxhYmVsc1twXSArPSBhbW91bnQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcy5fdW5jYWNoZSh0cnVlKTtcblx0XHR9O1xuXG5cdFx0cC5fa2lsbCA9IGZ1bmN0aW9uKHZhcnMsIHRhcmdldCkge1xuXHRcdFx0aWYgKCF2YXJzICYmICF0YXJnZXQpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX2VuYWJsZWQoZmFsc2UsIGZhbHNlKTtcblx0XHRcdH1cblx0XHRcdHZhciB0d2VlbnMgPSAoIXRhcmdldCkgPyB0aGlzLmdldENoaWxkcmVuKHRydWUsIHRydWUsIGZhbHNlKSA6IHRoaXMuZ2V0VHdlZW5zT2YodGFyZ2V0KSxcblx0XHRcdFx0aSA9IHR3ZWVucy5sZW5ndGgsXG5cdFx0XHRcdGNoYW5nZWQgPSBmYWxzZTtcblx0XHRcdHdoaWxlICgtLWkgPiAtMSkge1xuXHRcdFx0XHRpZiAodHdlZW5zW2ldLl9raWxsKHZhcnMsIHRhcmdldCkpIHtcblx0XHRcdFx0XHRjaGFuZ2VkID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGNoYW5nZWQ7XG5cdFx0fTtcblxuXHRcdHAuY2xlYXIgPSBmdW5jdGlvbihsYWJlbHMpIHtcblx0XHRcdHZhciB0d2VlbnMgPSB0aGlzLmdldENoaWxkcmVuKGZhbHNlLCB0cnVlLCB0cnVlKSxcblx0XHRcdFx0aSA9IHR3ZWVucy5sZW5ndGg7XG5cdFx0XHR0aGlzLl90aW1lID0gdGhpcy5fdG90YWxUaW1lID0gMDtcblx0XHRcdHdoaWxlICgtLWkgPiAtMSkge1xuXHRcdFx0XHR0d2VlbnNbaV0uX2VuYWJsZWQoZmFsc2UsIGZhbHNlKTtcblx0XHRcdH1cblx0XHRcdGlmIChsYWJlbHMgIT09IGZhbHNlKSB7XG5cdFx0XHRcdHRoaXMuX2xhYmVscyA9IHt9O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXMuX3VuY2FjaGUodHJ1ZSk7XG5cdFx0fTtcblxuXHRcdHAuaW52YWxpZGF0ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHR3ZWVuID0gdGhpcy5fZmlyc3Q7XG5cdFx0XHR3aGlsZSAodHdlZW4pIHtcblx0XHRcdFx0dHdlZW4uaW52YWxpZGF0ZSgpO1xuXHRcdFx0XHR0d2VlbiA9IHR3ZWVuLl9uZXh0O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIEFuaW1hdGlvbi5wcm90b3R5cGUuaW52YWxpZGF0ZS5jYWxsKHRoaXMpOztcblx0XHR9O1xuXG5cdFx0cC5fZW5hYmxlZCA9IGZ1bmN0aW9uKGVuYWJsZWQsIGlnbm9yZVRpbWVsaW5lKSB7XG5cdFx0XHRpZiAoZW5hYmxlZCA9PT0gdGhpcy5fZ2MpIHtcblx0XHRcdFx0dmFyIHR3ZWVuID0gdGhpcy5fZmlyc3Q7XG5cdFx0XHRcdHdoaWxlICh0d2Vlbikge1xuXHRcdFx0XHRcdHR3ZWVuLl9lbmFibGVkKGVuYWJsZWQsIHRydWUpO1xuXHRcdFx0XHRcdHR3ZWVuID0gdHdlZW4uX25leHQ7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBTaW1wbGVUaW1lbGluZS5wcm90b3R5cGUuX2VuYWJsZWQuY2FsbCh0aGlzLCBlbmFibGVkLCBpZ25vcmVUaW1lbGluZSk7XG5cdFx0fTtcblxuXHRcdHAudG90YWxUaW1lID0gZnVuY3Rpb24odGltZSwgc3VwcHJlc3NFdmVudHMsIHVuY2FwcGVkKSB7XG5cdFx0XHR0aGlzLl9mb3JjaW5nUGxheWhlYWQgPSB0cnVlO1xuXHRcdFx0dmFyIHZhbCA9IEFuaW1hdGlvbi5wcm90b3R5cGUudG90YWxUaW1lLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0XHR0aGlzLl9mb3JjaW5nUGxheWhlYWQgPSBmYWxzZTtcblx0XHRcdHJldHVybiB2YWw7XG5cdFx0fTtcblxuXHRcdHAuZHVyYXRpb24gPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRcdGlmICh0aGlzLl9kaXJ0eSkge1xuXHRcdFx0XHRcdHRoaXMudG90YWxEdXJhdGlvbigpOyAvL2p1c3QgdHJpZ2dlcnMgcmVjYWxjdWxhdGlvblxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB0aGlzLl9kdXJhdGlvbjtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLmR1cmF0aW9uKCkgIT09IDAgJiYgdmFsdWUgIT09IDApIHtcblx0XHRcdFx0dGhpcy50aW1lU2NhbGUodGhpcy5fZHVyYXRpb24gLyB2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9O1xuXG5cdFx0cC50b3RhbER1cmF0aW9uID0gZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdFx0XHRpZiAodGhpcy5fZGlydHkpIHtcblx0XHRcdFx0XHR2YXIgbWF4ID0gMCxcblx0XHRcdFx0XHRcdHR3ZWVuID0gdGhpcy5fbGFzdCxcblx0XHRcdFx0XHRcdHByZXZTdGFydCA9IDk5OTk5OTk5OTk5OSxcblx0XHRcdFx0XHRcdHByZXYsIGVuZDtcblx0XHRcdFx0XHR3aGlsZSAodHdlZW4pIHtcblx0XHRcdFx0XHRcdHByZXYgPSB0d2Vlbi5fcHJldjsgLy9yZWNvcmQgaXQgaGVyZSBpbiBjYXNlIHRoZSB0d2VlbiBjaGFuZ2VzIHBvc2l0aW9uIGluIHRoZSBzZXF1ZW5jZS4uLlxuXHRcdFx0XHRcdFx0aWYgKHR3ZWVuLl9kaXJ0eSkge1xuXHRcdFx0XHRcdFx0XHR0d2Vlbi50b3RhbER1cmF0aW9uKCk7IC8vY291bGQgY2hhbmdlIHRoZSB0d2Vlbi5fc3RhcnRUaW1lLCBzbyBtYWtlIHN1cmUgdGhlIHR3ZWVuJ3MgY2FjaGUgaXMgY2xlYW4gYmVmb3JlIGFuYWx5emluZyBpdC5cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmICh0d2Vlbi5fc3RhcnRUaW1lID4gcHJldlN0YXJ0ICYmIHRoaXMuX3NvcnRDaGlsZHJlbiAmJiAhdHdlZW4uX3BhdXNlZCkgeyAvL2luIGNhc2Ugb25lIG9mIHRoZSB0d2VlbnMgc2hpZnRlZCBvdXQgb2Ygb3JkZXIsIGl0IG5lZWRzIHRvIGJlIHJlLWluc2VydGVkIGludG8gdGhlIGNvcnJlY3QgcG9zaXRpb24gaW4gdGhlIHNlcXVlbmNlXG5cdFx0XHRcdFx0XHRcdHRoaXMuYWRkKHR3ZWVuLCB0d2Vlbi5fc3RhcnRUaW1lIC0gdHdlZW4uX2RlbGF5KTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHByZXZTdGFydCA9IHR3ZWVuLl9zdGFydFRpbWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAodHdlZW4uX3N0YXJ0VGltZSA8IDAgJiYgIXR3ZWVuLl9wYXVzZWQpIHsgLy9jaGlsZHJlbiBhcmVuJ3QgYWxsb3dlZCB0byBoYXZlIG5lZ2F0aXZlIHN0YXJ0VGltZXMgdW5sZXNzIHNtb290aENoaWxkVGltaW5nIGlzIHRydWUsIHNvIGFkanVzdCBoZXJlIGlmIG9uZSBpcyBmb3VuZC5cblx0XHRcdFx0XHRcdFx0bWF4IC09IHR3ZWVuLl9zdGFydFRpbWU7XG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLl90aW1lbGluZS5zbW9vdGhDaGlsZFRpbWluZykge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuX3N0YXJ0VGltZSArPSB0d2Vlbi5fc3RhcnRUaW1lIC8gdGhpcy5fdGltZVNjYWxlO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHRoaXMuc2hpZnRDaGlsZHJlbigtdHdlZW4uX3N0YXJ0VGltZSwgZmFsc2UsIC05OTk5OTk5OTk5KTtcblx0XHRcdFx0XHRcdFx0cHJldlN0YXJ0ID0gMDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGVuZCA9IHR3ZWVuLl9zdGFydFRpbWUgKyAodHdlZW4uX3RvdGFsRHVyYXRpb24gLyB0d2Vlbi5fdGltZVNjYWxlKTtcblx0XHRcdFx0XHRcdGlmIChlbmQgPiBtYXgpIHtcblx0XHRcdFx0XHRcdFx0bWF4ID0gZW5kO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0dHdlZW4gPSBwcmV2O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLl9kdXJhdGlvbiA9IHRoaXMuX3RvdGFsRHVyYXRpb24gPSBtYXg7XG5cdFx0XHRcdFx0dGhpcy5fZGlydHkgPSBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdGhpcy5fdG90YWxEdXJhdGlvbjtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLnRvdGFsRHVyYXRpb24oKSAhPT0gMCkgaWYgKHZhbHVlICE9PSAwKSB7XG5cdFx0XHRcdHRoaXMudGltZVNjYWxlKHRoaXMuX3RvdGFsRHVyYXRpb24gLyB2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9O1xuXG5cdFx0cC5wYXVzZWQgPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdFx0aWYgKCF2YWx1ZSkgeyAvL2lmIHRoZXJlJ3MgYSBwYXVzZSBkaXJlY3RseSBhdCB0aGUgc3BvdCBmcm9tIHdoZXJlIHdlJ3JlIHVucGF1c2luZywgc2tpcCBpdC5cblx0XHRcdFx0dmFyIHR3ZWVuID0gdGhpcy5fZmlyc3QsXG5cdFx0XHRcdFx0dGltZSA9IHRoaXMuX3RpbWU7XG5cdFx0XHRcdHdoaWxlICh0d2Vlbikge1xuXHRcdFx0XHRcdGlmICh0d2Vlbi5fc3RhcnRUaW1lID09PSB0aW1lICYmIHR3ZWVuLmRhdGEgPT09IFwiaXNQYXVzZVwiKSB7XG5cdFx0XHRcdFx0XHR0d2Vlbi5fcmF3UHJldlRpbWUgPSAwOyAvL3JlbWVtYmVyLCBfcmF3UHJldlRpbWUgaXMgaG93IHplcm8tZHVyYXRpb24gdHdlZW5zL2NhbGxiYWNrcyBzZW5zZSBkaXJlY3Rpb25hbGl0eSBhbmQgZGV0ZXJtaW5lIHdoZXRoZXIgb3Igbm90IHRvIGZpcmUuIElmIF9yYXdQcmV2VGltZSBpcyB0aGUgc2FtZSBhcyBfc3RhcnRUaW1lIG9uIHRoZSBuZXh0IHJlbmRlciwgaXQgd29uJ3QgZmlyZS5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dHdlZW4gPSB0d2Vlbi5fbmV4dDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIEFuaW1hdGlvbi5wcm90b3R5cGUucGF1c2VkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0fTtcblxuXHRcdHAudXNlc0ZyYW1lcyA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHRsID0gdGhpcy5fdGltZWxpbmU7XG5cdFx0XHR3aGlsZSAodGwuX3RpbWVsaW5lKSB7XG5cdFx0XHRcdHRsID0gdGwuX3RpbWVsaW5lO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuICh0bCA9PT0gQW5pbWF0aW9uLl9yb290RnJhbWVzVGltZWxpbmUpO1xuXHRcdH07XG5cblx0XHRwLnJhd1RpbWUgPSBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiB0aGlzLl9wYXVzZWQgPyB0aGlzLl90b3RhbFRpbWUgOiAodGhpcy5fdGltZWxpbmUucmF3VGltZSgpIC0gdGhpcy5fc3RhcnRUaW1lKSAqIHRoaXMuX3RpbWVTY2FsZTtcblx0XHR9O1xuXG5cdFx0cmV0dXJuIFRpbWVsaW5lTGl0ZTtcblxuXHR9LCB0cnVlKTtcblx0XG5cblxuXG5cblxuXG5cblx0XG5cdFxuXHRcblx0XG5cdFxuLypcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFRpbWVsaW5lTWF4XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblx0X2dzU2NvcGUuX2dzRGVmaW5lKFwiVGltZWxpbmVNYXhcIiwgW1wiVGltZWxpbmVMaXRlXCIsXCJUd2VlbkxpdGVcIixcImVhc2luZy5FYXNlXCJdLCBmdW5jdGlvbihUaW1lbGluZUxpdGUsIFR3ZWVuTGl0ZSwgRWFzZSkge1xuXG5cdFx0dmFyIFRpbWVsaW5lTWF4ID0gZnVuY3Rpb24odmFycykge1xuXHRcdFx0XHRUaW1lbGluZUxpdGUuY2FsbCh0aGlzLCB2YXJzKTtcblx0XHRcdFx0dGhpcy5fcmVwZWF0ID0gdGhpcy52YXJzLnJlcGVhdCB8fCAwO1xuXHRcdFx0XHR0aGlzLl9yZXBlYXREZWxheSA9IHRoaXMudmFycy5yZXBlYXREZWxheSB8fCAwO1xuXHRcdFx0XHR0aGlzLl9jeWNsZSA9IDA7XG5cdFx0XHRcdHRoaXMuX3lveW8gPSAodGhpcy52YXJzLnlveW8gPT09IHRydWUpO1xuXHRcdFx0XHR0aGlzLl9kaXJ0eSA9IHRydWU7XG5cdFx0XHR9LFxuXHRcdFx0X3RpbnlOdW0gPSAwLjAwMDAwMDAwMDEsXG5cdFx0XHRfYmxhbmtBcnJheSA9IFtdLFxuXHRcdFx0VHdlZW5MaXRlSW50ZXJuYWxzID0gVHdlZW5MaXRlLl9pbnRlcm5hbHMsXG5cdFx0XHRfbGF6eVR3ZWVucyA9IFR3ZWVuTGl0ZUludGVybmFscy5sYXp5VHdlZW5zLFxuXHRcdFx0X2xhenlSZW5kZXIgPSBUd2VlbkxpdGVJbnRlcm5hbHMubGF6eVJlbmRlcixcblx0XHRcdF9lYXNlTm9uZSA9IG5ldyBFYXNlKG51bGwsIG51bGwsIDEsIDApLFxuXHRcdFx0cCA9IFRpbWVsaW5lTWF4LnByb3RvdHlwZSA9IG5ldyBUaW1lbGluZUxpdGUoKTtcblxuXHRcdHAuY29uc3RydWN0b3IgPSBUaW1lbGluZU1heDtcblx0XHRwLmtpbGwoKS5fZ2MgPSBmYWxzZTtcblx0XHRUaW1lbGluZU1heC52ZXJzaW9uID0gXCIxLjE2LjFcIjtcblxuXHRcdHAuaW52YWxpZGF0ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0dGhpcy5feW95byA9ICh0aGlzLnZhcnMueW95byA9PT0gdHJ1ZSk7XG5cdFx0XHR0aGlzLl9yZXBlYXQgPSB0aGlzLnZhcnMucmVwZWF0IHx8IDA7XG5cdFx0XHR0aGlzLl9yZXBlYXREZWxheSA9IHRoaXMudmFycy5yZXBlYXREZWxheSB8fCAwO1xuXHRcdFx0dGhpcy5fdW5jYWNoZSh0cnVlKTtcblx0XHRcdHJldHVybiBUaW1lbGluZUxpdGUucHJvdG90eXBlLmludmFsaWRhdGUuY2FsbCh0aGlzKTtcblx0XHR9O1xuXG5cdFx0cC5hZGRDYWxsYmFjayA9IGZ1bmN0aW9uKGNhbGxiYWNrLCBwb3NpdGlvbiwgcGFyYW1zLCBzY29wZSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuYWRkKCBUd2VlbkxpdGUuZGVsYXllZENhbGwoMCwgY2FsbGJhY2ssIHBhcmFtcywgc2NvcGUpLCBwb3NpdGlvbik7XG5cdFx0fTtcblxuXHRcdHAucmVtb3ZlQ2FsbGJhY2sgPSBmdW5jdGlvbihjYWxsYmFjaywgcG9zaXRpb24pIHtcblx0XHRcdGlmIChjYWxsYmFjaykge1xuXHRcdFx0XHRpZiAocG9zaXRpb24gPT0gbnVsbCkge1xuXHRcdFx0XHRcdHRoaXMuX2tpbGwobnVsbCwgY2FsbGJhY2spO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHZhciBhID0gdGhpcy5nZXRUd2VlbnNPZihjYWxsYmFjaywgZmFsc2UpLFxuXHRcdFx0XHRcdFx0aSA9IGEubGVuZ3RoLFxuXHRcdFx0XHRcdFx0dGltZSA9IHRoaXMuX3BhcnNlVGltZU9yTGFiZWwocG9zaXRpb24pO1xuXHRcdFx0XHRcdHdoaWxlICgtLWkgPiAtMSkge1xuXHRcdFx0XHRcdFx0aWYgKGFbaV0uX3N0YXJ0VGltZSA9PT0gdGltZSkge1xuXHRcdFx0XHRcdFx0XHRhW2ldLl9lbmFibGVkKGZhbHNlLCBmYWxzZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9O1xuXG5cdFx0cC5yZW1vdmVQYXVzZSA9IGZ1bmN0aW9uKHBvc2l0aW9uKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yZW1vdmVDYWxsYmFjayhUaW1lbGluZUxpdGUuX2ludGVybmFscy5wYXVzZUNhbGxiYWNrLCBwb3NpdGlvbik7XG5cdFx0fTtcblxuXHRcdHAudHdlZW5UbyA9IGZ1bmN0aW9uKHBvc2l0aW9uLCB2YXJzKSB7XG5cdFx0XHR2YXJzID0gdmFycyB8fCB7fTtcblx0XHRcdHZhciBjb3B5ID0ge2Vhc2U6X2Vhc2VOb25lLCB1c2VGcmFtZXM6dGhpcy51c2VzRnJhbWVzKCksIGltbWVkaWF0ZVJlbmRlcjpmYWxzZX0sXG5cdFx0XHRcdGR1cmF0aW9uLCBwLCB0O1xuXHRcdFx0Zm9yIChwIGluIHZhcnMpIHtcblx0XHRcdFx0Y29weVtwXSA9IHZhcnNbcF07XG5cdFx0XHR9XG5cdFx0XHRjb3B5LnRpbWUgPSB0aGlzLl9wYXJzZVRpbWVPckxhYmVsKHBvc2l0aW9uKTtcblx0XHRcdGR1cmF0aW9uID0gKE1hdGguYWJzKE51bWJlcihjb3B5LnRpbWUpIC0gdGhpcy5fdGltZSkgLyB0aGlzLl90aW1lU2NhbGUpIHx8IDAuMDAxO1xuXHRcdFx0dCA9IG5ldyBUd2VlbkxpdGUodGhpcywgZHVyYXRpb24sIGNvcHkpO1xuXHRcdFx0Y29weS5vblN0YXJ0ID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHQudGFyZ2V0LnBhdXNlZCh0cnVlKTtcblx0XHRcdFx0aWYgKHQudmFycy50aW1lICE9PSB0LnRhcmdldC50aW1lKCkgJiYgZHVyYXRpb24gPT09IHQuZHVyYXRpb24oKSkgeyAvL2Rvbid0IG1ha2UgdGhlIGR1cmF0aW9uIHplcm8gLSBpZiBpdCdzIHN1cHBvc2VkIHRvIGJlIHplcm8sIGRvbid0IHdvcnJ5IGJlY2F1c2UgaXQncyBhbHJlYWR5IGluaXR0aW5nIHRoZSB0d2VlbiBhbmQgd2lsbCBjb21wbGV0ZSBpbW1lZGlhdGVseSwgZWZmZWN0aXZlbHkgbWFraW5nIHRoZSBkdXJhdGlvbiB6ZXJvIGFueXdheS4gSWYgd2UgbWFrZSBkdXJhdGlvbiB6ZXJvLCB0aGUgdHdlZW4gd29uJ3QgcnVuIGF0IGFsbC5cblx0XHRcdFx0XHR0LmR1cmF0aW9uKCBNYXRoLmFicyggdC52YXJzLnRpbWUgLSB0LnRhcmdldC50aW1lKCkpIC8gdC50YXJnZXQuX3RpbWVTY2FsZSApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh2YXJzLm9uU3RhcnQpIHsgLy9pbiBjYXNlIHRoZSB1c2VyIGhhZCBhbiBvblN0YXJ0IGluIHRoZSB2YXJzIC0gd2UgZG9uJ3Qgd2FudCB0byBvdmVyd3JpdGUgaXQuXG5cdFx0XHRcdFx0dmFycy5vblN0YXJ0LmFwcGx5KHZhcnMub25TdGFydFNjb3BlIHx8IHQsIHZhcnMub25TdGFydFBhcmFtcyB8fCBfYmxhbmtBcnJheSk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHRyZXR1cm4gdDtcblx0XHR9O1xuXG5cdFx0cC50d2VlbkZyb21UbyA9IGZ1bmN0aW9uKGZyb21Qb3NpdGlvbiwgdG9Qb3NpdGlvbiwgdmFycykge1xuXHRcdFx0dmFycyA9IHZhcnMgfHwge307XG5cdFx0XHRmcm9tUG9zaXRpb24gPSB0aGlzLl9wYXJzZVRpbWVPckxhYmVsKGZyb21Qb3NpdGlvbik7XG5cdFx0XHR2YXJzLnN0YXJ0QXQgPSB7b25Db21wbGV0ZTp0aGlzLnNlZWssIG9uQ29tcGxldGVQYXJhbXM6W2Zyb21Qb3NpdGlvbl0sIG9uQ29tcGxldGVTY29wZTp0aGlzfTtcblx0XHRcdHZhcnMuaW1tZWRpYXRlUmVuZGVyID0gKHZhcnMuaW1tZWRpYXRlUmVuZGVyICE9PSBmYWxzZSk7XG5cdFx0XHR2YXIgdCA9IHRoaXMudHdlZW5Ubyh0b1Bvc2l0aW9uLCB2YXJzKTtcblx0XHRcdHJldHVybiB0LmR1cmF0aW9uKChNYXRoLmFicyggdC52YXJzLnRpbWUgLSBmcm9tUG9zaXRpb24pIC8gdGhpcy5fdGltZVNjYWxlKSB8fCAwLjAwMSk7XG5cdFx0fTtcblxuXHRcdHAucmVuZGVyID0gZnVuY3Rpb24odGltZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKSB7XG5cdFx0XHRpZiAodGhpcy5fZ2MpIHtcblx0XHRcdFx0dGhpcy5fZW5hYmxlZCh0cnVlLCBmYWxzZSk7XG5cdFx0XHR9XG5cdFx0XHR2YXIgdG90YWxEdXIgPSAoIXRoaXMuX2RpcnR5KSA/IHRoaXMuX3RvdGFsRHVyYXRpb24gOiB0aGlzLnRvdGFsRHVyYXRpb24oKSxcblx0XHRcdFx0ZHVyID0gdGhpcy5fZHVyYXRpb24sXG5cdFx0XHRcdHByZXZUaW1lID0gdGhpcy5fdGltZSxcblx0XHRcdFx0cHJldlRvdGFsVGltZSA9IHRoaXMuX3RvdGFsVGltZSxcblx0XHRcdFx0cHJldlN0YXJ0ID0gdGhpcy5fc3RhcnRUaW1lLFxuXHRcdFx0XHRwcmV2VGltZVNjYWxlID0gdGhpcy5fdGltZVNjYWxlLFxuXHRcdFx0XHRwcmV2UmF3UHJldlRpbWUgPSB0aGlzLl9yYXdQcmV2VGltZSxcblx0XHRcdFx0cHJldlBhdXNlZCA9IHRoaXMuX3BhdXNlZCxcblx0XHRcdFx0cHJldkN5Y2xlID0gdGhpcy5fY3ljbGUsXG5cdFx0XHRcdHR3ZWVuLCBpc0NvbXBsZXRlLCBuZXh0LCBjYWxsYmFjaywgaW50ZXJuYWxGb3JjZSwgY3ljbGVEdXJhdGlvbjtcblx0XHRcdGlmICh0aW1lID49IHRvdGFsRHVyKSB7XG5cdFx0XHRcdGlmICghdGhpcy5fbG9ja2VkKSB7XG5cdFx0XHRcdFx0dGhpcy5fdG90YWxUaW1lID0gdG90YWxEdXI7XG5cdFx0XHRcdFx0dGhpcy5fY3ljbGUgPSB0aGlzLl9yZXBlYXQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCF0aGlzLl9yZXZlcnNlZCkgaWYgKCF0aGlzLl9oYXNQYXVzZWRDaGlsZCgpKSB7XG5cdFx0XHRcdFx0aXNDb21wbGV0ZSA9IHRydWU7XG5cdFx0XHRcdFx0Y2FsbGJhY2sgPSBcIm9uQ29tcGxldGVcIjtcblx0XHRcdFx0XHRpbnRlcm5hbEZvcmNlID0gISF0aGlzLl90aW1lbGluZS5hdXRvUmVtb3ZlQ2hpbGRyZW47IC8vb3RoZXJ3aXNlLCBpZiB0aGUgYW5pbWF0aW9uIGlzIHVucGF1c2VkL2FjdGl2YXRlZCBhZnRlciBpdCdzIGFscmVhZHkgZmluaXNoZWQsIGl0IGRvZXNuJ3QgZ2V0IHJlbW92ZWQgZnJvbSB0aGUgcGFyZW50IHRpbWVsaW5lLlxuXHRcdFx0XHRcdGlmICh0aGlzLl9kdXJhdGlvbiA9PT0gMCkgaWYgKHRpbWUgPT09IDAgfHwgcHJldlJhd1ByZXZUaW1lIDwgMCB8fCBwcmV2UmF3UHJldlRpbWUgPT09IF90aW55TnVtKSBpZiAocHJldlJhd1ByZXZUaW1lICE9PSB0aW1lICYmIHRoaXMuX2ZpcnN0KSB7XG5cdFx0XHRcdFx0XHRpbnRlcm5hbEZvcmNlID0gdHJ1ZTtcblx0XHRcdFx0XHRcdGlmIChwcmV2UmF3UHJldlRpbWUgPiBfdGlueU51bSkge1xuXHRcdFx0XHRcdFx0XHRjYWxsYmFjayA9IFwib25SZXZlcnNlQ29tcGxldGVcIjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5fcmF3UHJldlRpbWUgPSAodGhpcy5fZHVyYXRpb24gfHwgIXN1cHByZXNzRXZlbnRzIHx8IHRpbWUgfHwgdGhpcy5fcmF3UHJldlRpbWUgPT09IHRpbWUpID8gdGltZSA6IF90aW55TnVtOyAvL3doZW4gdGhlIHBsYXloZWFkIGFycml2ZXMgYXQgRVhBQ1RMWSB0aW1lIDAgKHJpZ2h0IG9uIHRvcCkgb2YgYSB6ZXJvLWR1cmF0aW9uIHRpbWVsaW5lIG9yIHR3ZWVuLCB3ZSBuZWVkIHRvIGRpc2Nlcm4gaWYgZXZlbnRzIGFyZSBzdXBwcmVzc2VkIHNvIHRoYXQgd2hlbiB0aGUgcGxheWhlYWQgbW92ZXMgYWdhaW4gKG5leHQgdGltZSksIGl0J2xsIHRyaWdnZXIgdGhlIGNhbGxiYWNrLiBJZiBldmVudHMgYXJlIE5PVCBzdXBwcmVzc2VkLCBvYnZpb3VzbHkgdGhlIGNhbGxiYWNrIHdvdWxkIGJlIHRyaWdnZXJlZCBpbiB0aGlzIHJlbmRlci4gQmFzaWNhbGx5LCB0aGUgY2FsbGJhY2sgc2hvdWxkIGZpcmUgZWl0aGVyIHdoZW4gdGhlIHBsYXloZWFkIEFSUklWRVMgb3IgTEVBVkVTIHRoaXMgZXhhY3Qgc3BvdCwgbm90IGJvdGguIEltYWdpbmUgZG9pbmcgYSB0aW1lbGluZS5zZWVrKDApIGFuZCB0aGVyZSdzIGEgY2FsbGJhY2sgdGhhdCBzaXRzIGF0IDAuIFNpbmNlIGV2ZW50cyBhcmUgc3VwcHJlc3NlZCBvbiB0aGF0IHNlZWsoKSBieSBkZWZhdWx0LCBub3RoaW5nIHdpbGwgZmlyZSwgYnV0IHdoZW4gdGhlIHBsYXloZWFkIG1vdmVzIG9mZiBvZiB0aGF0IHBvc2l0aW9uLCB0aGUgY2FsbGJhY2sgc2hvdWxkIGZpcmUuIFRoaXMgYmVoYXZpb3IgaXMgd2hhdCBwZW9wbGUgaW50dWl0aXZlbHkgZXhwZWN0LiBXZSBzZXQgdGhlIF9yYXdQcmV2VGltZSB0byBiZSBhIHByZWNpc2UgdGlueSBudW1iZXIgdG8gaW5kaWNhdGUgdGhpcyBzY2VuYXJpbyByYXRoZXIgdGhhbiB1c2luZyBhbm90aGVyIHByb3BlcnR5L3ZhcmlhYmxlIHdoaWNoIHdvdWxkIGluY3JlYXNlIG1lbW9yeSB1c2FnZS4gVGhpcyB0ZWNobmlxdWUgaXMgbGVzcyByZWFkYWJsZSwgYnV0IG1vcmUgZWZmaWNpZW50LlxuXHRcdFx0XHRpZiAodGhpcy5feW95byAmJiAodGhpcy5fY3ljbGUgJiAxKSAhPT0gMCkge1xuXHRcdFx0XHRcdHRoaXMuX3RpbWUgPSB0aW1lID0gMDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLl90aW1lID0gZHVyO1xuXHRcdFx0XHRcdHRpbWUgPSBkdXIgKyAwLjAwMDE7IC8vdG8gYXZvaWQgb2NjYXNpb25hbCBmbG9hdGluZyBwb2ludCByb3VuZGluZyBlcnJvcnMgLSBzb21ldGltZXMgY2hpbGQgdHdlZW5zL3RpbWVsaW5lcyB3ZXJlIG5vdCBiZWluZyBmdWxseSBjb21wbGV0ZWQgKHRoZWlyIHByb2dyZXNzIG1pZ2h0IGJlIDAuOTk5OTk5OTk5OTk5OTk4IGluc3RlYWQgb2YgMSBiZWNhdXNlIHdoZW4gX3RpbWUgLSB0d2Vlbi5fc3RhcnRUaW1lIGlzIHBlcmZvcm1lZCwgZmxvYXRpbmcgcG9pbnQgZXJyb3JzIHdvdWxkIHJldHVybiBhIHZhbHVlIHRoYXQgd2FzIFNMSUdIVExZIG9mZikuIFRyeSAoOTk5OTk5OTk5OTk5LjcgLSA5OTk5OTk5OTk5OTkpICogMSA9IDAuNjk5OTUxMTcxODc1IGluc3RlYWQgb2YgMC43LiBXZSBjYW5ub3QgZG8gbGVzcyB0aGVuIDAuMDAwMSBiZWNhdXNlIHRoZSBzYW1lIGlzc3VlIGNhbiBvY2N1ciB3aGVuIHRoZSBkdXJhdGlvbiBpcyBleHRyZW1lbHkgbGFyZ2UgbGlrZSA5OTk5OTk5OTk5OTkgaW4gd2hpY2ggY2FzZSBhZGRpbmcgMC4wMDAwMDAwMSwgZm9yIGV4YW1wbGUsIGNhdXNlcyBpdCB0byBhY3QgbGlrZSBub3RoaW5nIHdhcyBhZGRlZC5cblx0XHRcdFx0fVxuXG5cdFx0XHR9IGVsc2UgaWYgKHRpbWUgPCAwLjAwMDAwMDEpIHsgLy90byB3b3JrIGFyb3VuZCBvY2Nhc2lvbmFsIGZsb2F0aW5nIHBvaW50IG1hdGggYXJ0aWZhY3RzLCByb3VuZCBzdXBlciBzbWFsbCB2YWx1ZXMgdG8gMC5cblx0XHRcdFx0aWYgKCF0aGlzLl9sb2NrZWQpIHtcblx0XHRcdFx0XHR0aGlzLl90b3RhbFRpbWUgPSB0aGlzLl9jeWNsZSA9IDA7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5fdGltZSA9IDA7XG5cdFx0XHRcdGlmIChwcmV2VGltZSAhPT0gMCB8fCAoZHVyID09PSAwICYmIHByZXZSYXdQcmV2VGltZSAhPT0gX3RpbnlOdW0gJiYgKHByZXZSYXdQcmV2VGltZSA+IDAgfHwgKHRpbWUgPCAwICYmIHByZXZSYXdQcmV2VGltZSA+PSAwKSkgJiYgIXRoaXMuX2xvY2tlZCkpIHsgLy9lZGdlIGNhc2UgZm9yIGNoZWNraW5nIHRpbWUgPCAwICYmIHByZXZSYXdQcmV2VGltZSA+PSAwOiBhIHplcm8tZHVyYXRpb24gZnJvbVRvKCkgdHdlZW4gaW5zaWRlIGEgemVyby1kdXJhdGlvbiB0aW1lbGluZSAoeWVhaCwgdmVyeSByYXJlKVxuXHRcdFx0XHRcdGNhbGxiYWNrID0gXCJvblJldmVyc2VDb21wbGV0ZVwiO1xuXHRcdFx0XHRcdGlzQ29tcGxldGUgPSB0aGlzLl9yZXZlcnNlZDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodGltZSA8IDApIHtcblx0XHRcdFx0XHR0aGlzLl9hY3RpdmUgPSBmYWxzZTtcblx0XHRcdFx0XHRpZiAodGhpcy5fdGltZWxpbmUuYXV0b1JlbW92ZUNoaWxkcmVuICYmIHRoaXMuX3JldmVyc2VkKSB7XG5cdFx0XHRcdFx0XHRpbnRlcm5hbEZvcmNlID0gaXNDb21wbGV0ZSA9IHRydWU7XG5cdFx0XHRcdFx0XHRjYWxsYmFjayA9IFwib25SZXZlcnNlQ29tcGxldGVcIjtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHByZXZSYXdQcmV2VGltZSA+PSAwICYmIHRoaXMuX2ZpcnN0KSB7IC8vd2hlbiBnb2luZyBiYWNrIGJleW9uZCB0aGUgc3RhcnQsIGZvcmNlIGEgcmVuZGVyIHNvIHRoYXQgemVyby1kdXJhdGlvbiB0d2VlbnMgdGhhdCBzaXQgYXQgdGhlIHZlcnkgYmVnaW5uaW5nIHJlbmRlciB0aGVpciBzdGFydCB2YWx1ZXMgcHJvcGVybHkuIE90aGVyd2lzZSwgaWYgdGhlIHBhcmVudCB0aW1lbGluZSdzIHBsYXloZWFkIGxhbmRzIGV4YWN0bHkgYXQgdGhpcyB0aW1lbGluZSdzIHN0YXJ0VGltZSwgYW5kIHRoZW4gbW92ZXMgYmFja3dhcmRzLCB0aGUgemVyby1kdXJhdGlvbiB0d2VlbnMgYXQgdGhlIGJlZ2lubmluZyB3b3VsZCBzdGlsbCBiZSBhdCB0aGVpciBlbmQgc3RhdGUuXG5cdFx0XHRcdFx0XHRpbnRlcm5hbEZvcmNlID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5fcmF3UHJldlRpbWUgPSB0aW1lO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuX3Jhd1ByZXZUaW1lID0gKGR1ciB8fCAhc3VwcHJlc3NFdmVudHMgfHwgdGltZSB8fCB0aGlzLl9yYXdQcmV2VGltZSA9PT0gdGltZSkgPyB0aW1lIDogX3RpbnlOdW07IC8vd2hlbiB0aGUgcGxheWhlYWQgYXJyaXZlcyBhdCBFWEFDVExZIHRpbWUgMCAocmlnaHQgb24gdG9wKSBvZiBhIHplcm8tZHVyYXRpb24gdGltZWxpbmUgb3IgdHdlZW4sIHdlIG5lZWQgdG8gZGlzY2VybiBpZiBldmVudHMgYXJlIHN1cHByZXNzZWQgc28gdGhhdCB3aGVuIHRoZSBwbGF5aGVhZCBtb3ZlcyBhZ2FpbiAobmV4dCB0aW1lKSwgaXQnbGwgdHJpZ2dlciB0aGUgY2FsbGJhY2suIElmIGV2ZW50cyBhcmUgTk9UIHN1cHByZXNzZWQsIG9idmlvdXNseSB0aGUgY2FsbGJhY2sgd291bGQgYmUgdHJpZ2dlcmVkIGluIHRoaXMgcmVuZGVyLiBCYXNpY2FsbHksIHRoZSBjYWxsYmFjayBzaG91bGQgZmlyZSBlaXRoZXIgd2hlbiB0aGUgcGxheWhlYWQgQVJSSVZFUyBvciBMRUFWRVMgdGhpcyBleGFjdCBzcG90LCBub3QgYm90aC4gSW1hZ2luZSBkb2luZyBhIHRpbWVsaW5lLnNlZWsoMCkgYW5kIHRoZXJlJ3MgYSBjYWxsYmFjayB0aGF0IHNpdHMgYXQgMC4gU2luY2UgZXZlbnRzIGFyZSBzdXBwcmVzc2VkIG9uIHRoYXQgc2VlaygpIGJ5IGRlZmF1bHQsIG5vdGhpbmcgd2lsbCBmaXJlLCBidXQgd2hlbiB0aGUgcGxheWhlYWQgbW92ZXMgb2ZmIG9mIHRoYXQgcG9zaXRpb24sIHRoZSBjYWxsYmFjayBzaG91bGQgZmlyZS4gVGhpcyBiZWhhdmlvciBpcyB3aGF0IHBlb3BsZSBpbnR1aXRpdmVseSBleHBlY3QuIFdlIHNldCB0aGUgX3Jhd1ByZXZUaW1lIHRvIGJlIGEgcHJlY2lzZSB0aW55IG51bWJlciB0byBpbmRpY2F0ZSB0aGlzIHNjZW5hcmlvIHJhdGhlciB0aGFuIHVzaW5nIGFub3RoZXIgcHJvcGVydHkvdmFyaWFibGUgd2hpY2ggd291bGQgaW5jcmVhc2UgbWVtb3J5IHVzYWdlLiBUaGlzIHRlY2huaXF1ZSBpcyBsZXNzIHJlYWRhYmxlLCBidXQgbW9yZSBlZmZpY2llbnQuXG5cdFx0XHRcdFx0aWYgKHRpbWUgPT09IDAgJiYgaXNDb21wbGV0ZSkgeyAvL2lmIHRoZXJlJ3MgYSB6ZXJvLWR1cmF0aW9uIHR3ZWVuIGF0IHRoZSB2ZXJ5IGJlZ2lubmluZyBvZiBhIHRpbWVsaW5lIGFuZCB0aGUgcGxheWhlYWQgbGFuZHMgRVhBQ1RMWSBhdCB0aW1lIDAsIHRoYXQgdHdlZW4gd2lsbCBjb3JyZWN0bHkgcmVuZGVyIGl0cyBlbmQgdmFsdWVzLCBidXQgd2UgbmVlZCB0byBrZWVwIHRoZSB0aW1lbGluZSBhbGl2ZSBmb3Igb25lIG1vcmUgcmVuZGVyIHNvIHRoYXQgdGhlIGJlZ2lubmluZyB2YWx1ZXMgcmVuZGVyIHByb3Blcmx5IGFzIHRoZSBwYXJlbnQncyBwbGF5aGVhZCBrZWVwcyBtb3ZpbmcgYmV5b25kIHRoZSBiZWdpbmluZy4gSW1hZ2luZSBvYmoueCBzdGFydHMgYXQgMCBhbmQgdGhlbiB3ZSBkbyB0bC5zZXQob2JqLCB7eDoxMDB9KS50byhvYmosIDEsIHt4OjIwMH0pIGFuZCB0aGVuIGxhdGVyIHdlIHRsLnJldmVyc2UoKS4uLnRoZSBnb2FsIGlzIHRvIGhhdmUgb2JqLnggcmV2ZXJ0IHRvIDAuIElmIHRoZSBwbGF5aGVhZCBoYXBwZW5zIHRvIGxhbmQgb24gZXhhY3RseSAwLCB3aXRob3V0IHRoaXMgY2h1bmsgb2YgY29kZSwgaXQnZCBjb21wbGV0ZSB0aGUgdGltZWxpbmUgYW5kIHJlbW92ZSBpdCBmcm9tIHRoZSByZW5kZXJpbmcgcXVldWUgKG5vdCBnb29kKS5cblx0XHRcdFx0XHRcdHR3ZWVuID0gdGhpcy5fZmlyc3Q7XG5cdFx0XHRcdFx0XHR3aGlsZSAodHdlZW4gJiYgdHdlZW4uX3N0YXJ0VGltZSA9PT0gMCkge1xuXHRcdFx0XHRcdFx0XHRpZiAoIXR3ZWVuLl9kdXJhdGlvbikge1xuXHRcdFx0XHRcdFx0XHRcdGlzQ29tcGxldGUgPSBmYWxzZTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR0d2VlbiA9IHR3ZWVuLl9uZXh0O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aW1lID0gMDsgLy90byBhdm9pZCBvY2Nhc2lvbmFsIGZsb2F0aW5nIHBvaW50IHJvdW5kaW5nIGVycm9ycyAoY291bGQgY2F1c2UgcHJvYmxlbXMgZXNwZWNpYWxseSB3aXRoIHplcm8tZHVyYXRpb24gdHdlZW5zIGF0IHRoZSB2ZXJ5IGJlZ2lubmluZyBvZiB0aGUgdGltZWxpbmUpXG5cdFx0XHRcdFx0aWYgKCF0aGlzLl9pbml0dGVkKSB7XG5cdFx0XHRcdFx0XHRpbnRlcm5hbEZvcmNlID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKGR1ciA9PT0gMCAmJiBwcmV2UmF3UHJldlRpbWUgPCAwKSB7IC8vd2l0aG91dCB0aGlzLCB6ZXJvLWR1cmF0aW9uIHJlcGVhdGluZyB0aW1lbGluZXMgKGxpa2Ugd2l0aCBhIHNpbXBsZSBjYWxsYmFjayBuZXN0ZWQgYXQgdGhlIHZlcnkgYmVnaW5uaW5nIGFuZCBhIHJlcGVhdERlbGF5KSB3b3VsZG4ndCByZW5kZXIgdGhlIGZpcnN0IHRpbWUgdGhyb3VnaC5cblx0XHRcdFx0XHRpbnRlcm5hbEZvcmNlID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLl90aW1lID0gdGhpcy5fcmF3UHJldlRpbWUgPSB0aW1lO1xuXHRcdFx0XHRpZiAoIXRoaXMuX2xvY2tlZCkge1xuXHRcdFx0XHRcdHRoaXMuX3RvdGFsVGltZSA9IHRpbWU7XG5cdFx0XHRcdFx0aWYgKHRoaXMuX3JlcGVhdCAhPT0gMCkge1xuXHRcdFx0XHRcdFx0Y3ljbGVEdXJhdGlvbiA9IGR1ciArIHRoaXMuX3JlcGVhdERlbGF5O1xuXHRcdFx0XHRcdFx0dGhpcy5fY3ljbGUgPSAodGhpcy5fdG90YWxUaW1lIC8gY3ljbGVEdXJhdGlvbikgPj4gMDsgLy9vcmlnaW5hbGx5IF90b3RhbFRpbWUgJSBjeWNsZUR1cmF0aW9uIGJ1dCBmbG9hdGluZyBwb2ludCBlcnJvcnMgY2F1c2VkIHByb2JsZW1zLCBzbyBJIG5vcm1hbGl6ZWQgaXQuICg0ICUgMC44IHNob3VsZCBiZSAwIGJ1dCBpdCBnZXRzIHJlcG9ydGVkIGFzIDAuNzk5OTk5OTkhKVxuXHRcdFx0XHRcdFx0aWYgKHRoaXMuX2N5Y2xlICE9PSAwKSBpZiAodGhpcy5fY3ljbGUgPT09IHRoaXMuX3RvdGFsVGltZSAvIGN5Y2xlRHVyYXRpb24pIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5fY3ljbGUtLTsgLy9vdGhlcndpc2Ugd2hlbiByZW5kZXJlZCBleGFjdGx5IGF0IHRoZSBlbmQgdGltZSwgaXQgd2lsbCBhY3QgYXMgdGhvdWdoIGl0IGlzIHJlcGVhdGluZyAoYXQgdGhlIGJlZ2lubmluZylcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHRoaXMuX3RpbWUgPSB0aGlzLl90b3RhbFRpbWUgLSAodGhpcy5fY3ljbGUgKiBjeWNsZUR1cmF0aW9uKTtcblx0XHRcdFx0XHRcdGlmICh0aGlzLl95b3lvKSBpZiAoKHRoaXMuX2N5Y2xlICYgMSkgIT09IDApIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5fdGltZSA9IGR1ciAtIHRoaXMuX3RpbWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAodGhpcy5fdGltZSA+IGR1cikge1xuXHRcdFx0XHRcdFx0XHR0aGlzLl90aW1lID0gZHVyO1xuXHRcdFx0XHRcdFx0XHR0aW1lID0gZHVyICsgMC4wMDAxOyAvL3RvIGF2b2lkIG9jY2FzaW9uYWwgZmxvYXRpbmcgcG9pbnQgcm91bmRpbmcgZXJyb3Jcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5fdGltZSA8IDApIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5fdGltZSA9IHRpbWUgPSAwO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dGltZSA9IHRoaXMuX3RpbWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLl9jeWNsZSAhPT0gcHJldkN5Y2xlKSBpZiAoIXRoaXMuX2xvY2tlZCkge1xuXHRcdFx0XHQvKlxuXHRcdFx0XHRtYWtlIHN1cmUgY2hpbGRyZW4gYXQgdGhlIGVuZC9iZWdpbm5pbmcgb2YgdGhlIHRpbWVsaW5lIGFyZSByZW5kZXJlZCBwcm9wZXJseS4gSWYsIGZvciBleGFtcGxlLFxuXHRcdFx0XHRhIDMtc2Vjb25kIGxvbmcgdGltZWxpbmUgcmVuZGVyZWQgYXQgMi45IHNlY29uZHMgcHJldmlvdXNseSwgYW5kIG5vdyByZW5kZXJzIGF0IDMuMiBzZWNvbmRzICh3aGljaFxuXHRcdFx0XHR3b3VsZCBnZXQgdHJhbnNhdGVkIHRvIDIuOCBzZWNvbmRzIGlmIHRoZSB0aW1lbGluZSB5b3lvcyBvciAwLjIgc2Vjb25kcyBpZiBpdCBqdXN0IHJlcGVhdHMpLCB0aGVyZVxuXHRcdFx0XHRjb3VsZCBiZSBhIGNhbGxiYWNrIG9yIGEgc2hvcnQgdHdlZW4gdGhhdCdzIGF0IDIuOTUgb3IgMyBzZWNvbmRzIGluIHdoaWNoIHdvdWxkbid0IHJlbmRlci4gU29cblx0XHRcdFx0d2UgbmVlZCB0byBwdXNoIHRoZSB0aW1lbGluZSB0byB0aGUgZW5kIChhbmQvb3IgYmVnaW5uaW5nIGRlcGVuZGluZyBvbiBpdHMgeW95byB2YWx1ZSkuIEFsc28gd2UgbXVzdFxuXHRcdFx0XHRlbnN1cmUgdGhhdCB6ZXJvLWR1cmF0aW9uIHR3ZWVucyBhdCB0aGUgdmVyeSBiZWdpbm5pbmcgb3IgZW5kIG9mIHRoZSBUaW1lbGluZU1heCB3b3JrLlxuXHRcdFx0XHQqL1xuXHRcdFx0XHR2YXIgYmFja3dhcmRzID0gKHRoaXMuX3lveW8gJiYgKHByZXZDeWNsZSAmIDEpICE9PSAwKSxcblx0XHRcdFx0XHR3cmFwID0gKGJhY2t3YXJkcyA9PT0gKHRoaXMuX3lveW8gJiYgKHRoaXMuX2N5Y2xlICYgMSkgIT09IDApKSxcblx0XHRcdFx0XHRyZWNUb3RhbFRpbWUgPSB0aGlzLl90b3RhbFRpbWUsXG5cdFx0XHRcdFx0cmVjQ3ljbGUgPSB0aGlzLl9jeWNsZSxcblx0XHRcdFx0XHRyZWNSYXdQcmV2VGltZSA9IHRoaXMuX3Jhd1ByZXZUaW1lLFxuXHRcdFx0XHRcdHJlY1RpbWUgPSB0aGlzLl90aW1lO1xuXG5cdFx0XHRcdHRoaXMuX3RvdGFsVGltZSA9IHByZXZDeWNsZSAqIGR1cjtcblx0XHRcdFx0aWYgKHRoaXMuX2N5Y2xlIDwgcHJldkN5Y2xlKSB7XG5cdFx0XHRcdFx0YmFja3dhcmRzID0gIWJhY2t3YXJkcztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLl90b3RhbFRpbWUgKz0gZHVyO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuX3RpbWUgPSBwcmV2VGltZTsgLy90ZW1wb3JhcmlseSByZXZlcnQgX3RpbWUgc28gdGhhdCByZW5kZXIoKSByZW5kZXJzIHRoZSBjaGlsZHJlbiBpbiB0aGUgY29ycmVjdCBvcmRlci4gV2l0aG91dCB0aGlzLCB0d2VlbnMgd29uJ3QgcmV3aW5kIGNvcnJlY3RseS4gV2UgY291bGQgYXJoaWN0ZWN0IHRoaW5ncyBpbiBhIFwiY2xlYW5lclwiIHdheSBieSBzcGxpdHRpbmcgb3V0IHRoZSByZW5kZXJpbmcgcXVldWUgaW50byBhIHNlcGFyYXRlIG1ldGhvZCBidXQgZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMsIHdlIGtlcHQgaXQgYWxsIGluc2lkZSB0aGlzIG1ldGhvZC5cblxuXHRcdFx0XHR0aGlzLl9yYXdQcmV2VGltZSA9IChkdXIgPT09IDApID8gcHJldlJhd1ByZXZUaW1lIC0gMC4wMDAxIDogcHJldlJhd1ByZXZUaW1lO1xuXHRcdFx0XHR0aGlzLl9jeWNsZSA9IHByZXZDeWNsZTtcblx0XHRcdFx0dGhpcy5fbG9ja2VkID0gdHJ1ZTsgLy9wcmV2ZW50cyBjaGFuZ2VzIHRvIHRvdGFsVGltZSBhbmQgc2tpcHMgcmVwZWF0L3lveW8gYmVoYXZpb3Igd2hlbiB3ZSByZWN1cnNpdmVseSBjYWxsIHJlbmRlcigpXG5cdFx0XHRcdHByZXZUaW1lID0gKGJhY2t3YXJkcykgPyAwIDogZHVyO1xuXHRcdFx0XHR0aGlzLnJlbmRlcihwcmV2VGltZSwgc3VwcHJlc3NFdmVudHMsIChkdXIgPT09IDApKTtcblx0XHRcdFx0aWYgKCFzdXBwcmVzc0V2ZW50cykgaWYgKCF0aGlzLl9nYykge1xuXHRcdFx0XHRcdGlmICh0aGlzLnZhcnMub25SZXBlYXQpIHtcblx0XHRcdFx0XHRcdHRoaXMudmFycy5vblJlcGVhdC5hcHBseSh0aGlzLnZhcnMub25SZXBlYXRTY29wZSB8fCB0aGlzLCB0aGlzLnZhcnMub25SZXBlYXRQYXJhbXMgfHwgX2JsYW5rQXJyYXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAod3JhcCkge1xuXHRcdFx0XHRcdHByZXZUaW1lID0gKGJhY2t3YXJkcykgPyBkdXIgKyAwLjAwMDEgOiAtMC4wMDAxO1xuXHRcdFx0XHRcdHRoaXMucmVuZGVyKHByZXZUaW1lLCB0cnVlLCBmYWxzZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5fbG9ja2VkID0gZmFsc2U7XG5cdFx0XHRcdGlmICh0aGlzLl9wYXVzZWQgJiYgIXByZXZQYXVzZWQpIHsgLy9pZiB0aGUgcmVuZGVyKCkgdHJpZ2dlcmVkIGNhbGxiYWNrIHRoYXQgcGF1c2VkIHRoaXMgdGltZWxpbmUsIHdlIHNob3VsZCBhYm9ydCAodmVyeSByYXJlLCBidXQgcG9zc2libGUpXG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuX3RpbWUgPSByZWNUaW1lO1xuXHRcdFx0XHR0aGlzLl90b3RhbFRpbWUgPSByZWNUb3RhbFRpbWU7XG5cdFx0XHRcdHRoaXMuX2N5Y2xlID0gcmVjQ3ljbGU7XG5cdFx0XHRcdHRoaXMuX3Jhd1ByZXZUaW1lID0gcmVjUmF3UHJldlRpbWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmICgodGhpcy5fdGltZSA9PT0gcHJldlRpbWUgfHwgIXRoaXMuX2ZpcnN0KSAmJiAhZm9yY2UgJiYgIWludGVybmFsRm9yY2UpIHtcblx0XHRcdFx0aWYgKHByZXZUb3RhbFRpbWUgIT09IHRoaXMuX3RvdGFsVGltZSkgaWYgKHRoaXMuX29uVXBkYXRlKSBpZiAoIXN1cHByZXNzRXZlbnRzKSB7IC8vc28gdGhhdCBvblVwZGF0ZSBmaXJlcyBldmVuIGR1cmluZyB0aGUgcmVwZWF0RGVsYXkgLSBhcyBsb25nIGFzIHRoZSB0b3RhbFRpbWUgY2hhbmdlZCwgd2Ugc2hvdWxkIHRyaWdnZXIgb25VcGRhdGUuXG5cdFx0XHRcdFx0dGhpcy5fb25VcGRhdGUuYXBwbHkodGhpcy52YXJzLm9uVXBkYXRlU2NvcGUgfHwgdGhpcywgdGhpcy52YXJzLm9uVXBkYXRlUGFyYW1zIHx8IF9ibGFua0FycmF5KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9IGVsc2UgaWYgKCF0aGlzLl9pbml0dGVkKSB7XG5cdFx0XHRcdHRoaXMuX2luaXR0ZWQgPSB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIXRoaXMuX2FjdGl2ZSkgaWYgKCF0aGlzLl9wYXVzZWQgJiYgdGhpcy5fdG90YWxUaW1lICE9PSBwcmV2VG90YWxUaW1lICYmIHRpbWUgPiAwKSB7XG5cdFx0XHRcdHRoaXMuX2FjdGl2ZSA9IHRydWU7ICAvL3NvIHRoYXQgaWYgdGhlIHVzZXIgcmVuZGVycyB0aGUgdGltZWxpbmUgKGFzIG9wcG9zZWQgdG8gdGhlIHBhcmVudCB0aW1lbGluZSByZW5kZXJpbmcgaXQpLCBpdCBpcyBmb3JjZWQgdG8gcmUtcmVuZGVyIGFuZCBhbGlnbiBpdCB3aXRoIHRoZSBwcm9wZXIgdGltZS9mcmFtZSBvbiB0aGUgbmV4dCByZW5kZXJpbmcgY3ljbGUuIE1heWJlIHRoZSB0aW1lbGluZSBhbHJlYWR5IGZpbmlzaGVkIGJ1dCB0aGUgdXNlciBtYW51YWxseSByZS1yZW5kZXJzIGl0IGFzIGhhbGZ3YXkgZG9uZSwgZm9yIGV4YW1wbGUuXG5cdFx0XHR9XG5cblx0XHRcdGlmIChwcmV2VG90YWxUaW1lID09PSAwKSBpZiAodGhpcy52YXJzLm9uU3RhcnQpIGlmICh0aGlzLl90b3RhbFRpbWUgIT09IDApIGlmICghc3VwcHJlc3NFdmVudHMpIHtcblx0XHRcdFx0dGhpcy52YXJzLm9uU3RhcnQuYXBwbHkodGhpcy52YXJzLm9uU3RhcnRTY29wZSB8fCB0aGlzLCB0aGlzLnZhcnMub25TdGFydFBhcmFtcyB8fCBfYmxhbmtBcnJheSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLl90aW1lID49IHByZXZUaW1lKSB7XG5cdFx0XHRcdHR3ZWVuID0gdGhpcy5fZmlyc3Q7XG5cdFx0XHRcdHdoaWxlICh0d2Vlbikge1xuXHRcdFx0XHRcdG5leHQgPSB0d2Vlbi5fbmV4dDsgLy9yZWNvcmQgaXQgaGVyZSBiZWNhdXNlIHRoZSB2YWx1ZSBjb3VsZCBjaGFuZ2UgYWZ0ZXIgcmVuZGVyaW5nLi4uXG5cdFx0XHRcdFx0aWYgKHRoaXMuX3BhdXNlZCAmJiAhcHJldlBhdXNlZCkgeyAvL2luIGNhc2UgYSB0d2VlbiBwYXVzZXMgdGhlIHRpbWVsaW5lIHdoZW4gcmVuZGVyaW5nXG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHR3ZWVuLl9hY3RpdmUgfHwgKHR3ZWVuLl9zdGFydFRpbWUgPD0gdGhpcy5fdGltZSAmJiAhdHdlZW4uX3BhdXNlZCAmJiAhdHdlZW4uX2djKSkge1xuXHRcdFx0XHRcdFx0aWYgKCF0d2Vlbi5fcmV2ZXJzZWQpIHtcblx0XHRcdFx0XHRcdFx0dHdlZW4ucmVuZGVyKCh0aW1lIC0gdHdlZW4uX3N0YXJ0VGltZSkgKiB0d2Vlbi5fdGltZVNjYWxlLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dHdlZW4ucmVuZGVyKCgoIXR3ZWVuLl9kaXJ0eSkgPyB0d2Vlbi5fdG90YWxEdXJhdGlvbiA6IHR3ZWVuLnRvdGFsRHVyYXRpb24oKSkgLSAoKHRpbWUgLSB0d2Vlbi5fc3RhcnRUaW1lKSAqIHR3ZWVuLl90aW1lU2NhbGUpLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHR3ZWVuID0gbmV4dDtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dHdlZW4gPSB0aGlzLl9sYXN0O1xuXHRcdFx0XHR3aGlsZSAodHdlZW4pIHtcblx0XHRcdFx0XHRuZXh0ID0gdHdlZW4uX3ByZXY7IC8vcmVjb3JkIGl0IGhlcmUgYmVjYXVzZSB0aGUgdmFsdWUgY291bGQgY2hhbmdlIGFmdGVyIHJlbmRlcmluZy4uLlxuXHRcdFx0XHRcdGlmICh0aGlzLl9wYXVzZWQgJiYgIXByZXZQYXVzZWQpIHsgLy9pbiBjYXNlIGEgdHdlZW4gcGF1c2VzIHRoZSB0aW1lbGluZSB3aGVuIHJlbmRlcmluZ1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fSBlbHNlIGlmICh0d2Vlbi5fYWN0aXZlIHx8ICh0d2Vlbi5fc3RhcnRUaW1lIDw9IHByZXZUaW1lICYmICF0d2Vlbi5fcGF1c2VkICYmICF0d2Vlbi5fZ2MpKSB7XG5cdFx0XHRcdFx0XHRpZiAoIXR3ZWVuLl9yZXZlcnNlZCkge1xuXHRcdFx0XHRcdFx0XHR0d2Vlbi5yZW5kZXIoKHRpbWUgLSB0d2Vlbi5fc3RhcnRUaW1lKSAqIHR3ZWVuLl90aW1lU2NhbGUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR0d2Vlbi5yZW5kZXIoKCghdHdlZW4uX2RpcnR5KSA/IHR3ZWVuLl90b3RhbER1cmF0aW9uIDogdHdlZW4udG90YWxEdXJhdGlvbigpKSAtICgodGltZSAtIHR3ZWVuLl9zdGFydFRpbWUpICogdHdlZW4uX3RpbWVTY2FsZSksIHN1cHByZXNzRXZlbnRzLCBmb3JjZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHR3ZWVuID0gbmV4dDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5fb25VcGRhdGUpIGlmICghc3VwcHJlc3NFdmVudHMpIHtcblx0XHRcdFx0aWYgKF9sYXp5VHdlZW5zLmxlbmd0aCkgeyAvL2luIGNhc2UgcmVuZGVyaW5nIGNhdXNlZCBhbnkgdHdlZW5zIHRvIGxhenktaW5pdCwgd2Ugc2hvdWxkIHJlbmRlciB0aGVtIGJlY2F1c2UgdHlwaWNhbGx5IHdoZW4gYSB0aW1lbGluZSBmaW5pc2hlcywgdXNlcnMgZXhwZWN0IHRoaW5ncyB0byBoYXZlIHJlbmRlcmVkIGZ1bGx5LiBJbWFnaW5lIGFuIG9uVXBkYXRlIG9uIGEgdGltZWxpbmUgdGhhdCByZXBvcnRzL2NoZWNrcyB0d2VlbmVkIHZhbHVlcy5cblx0XHRcdFx0XHRfbGF6eVJlbmRlcigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuX29uVXBkYXRlLmFwcGx5KHRoaXMudmFycy5vblVwZGF0ZVNjb3BlIHx8IHRoaXMsIHRoaXMudmFycy5vblVwZGF0ZVBhcmFtcyB8fCBfYmxhbmtBcnJheSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY2FsbGJhY2spIGlmICghdGhpcy5fbG9ja2VkKSBpZiAoIXRoaXMuX2djKSBpZiAocHJldlN0YXJ0ID09PSB0aGlzLl9zdGFydFRpbWUgfHwgcHJldlRpbWVTY2FsZSAhPT0gdGhpcy5fdGltZVNjYWxlKSBpZiAodGhpcy5fdGltZSA9PT0gMCB8fCB0b3RhbER1ciA+PSB0aGlzLnRvdGFsRHVyYXRpb24oKSkgeyAvL2lmIG9uZSBvZiB0aGUgdHdlZW5zIHRoYXQgd2FzIHJlbmRlcmVkIGFsdGVyZWQgdGhpcyB0aW1lbGluZSdzIHN0YXJ0VGltZSAobGlrZSBpZiBhbiBvbkNvbXBsZXRlIHJldmVyc2VkIHRoZSB0aW1lbGluZSksIGl0IHByb2JhYmx5IGlzbid0IGNvbXBsZXRlLiBJZiBpdCBpcywgZG9uJ3Qgd29ycnksIGJlY2F1c2Ugd2hhdGV2ZXIgY2FsbCBhbHRlcmVkIHRoZSBzdGFydFRpbWUgd291bGQgY29tcGxldGUgaWYgaXQgd2FzIG5lY2Vzc2FyeSBhdCB0aGUgbmV3IHRpbWUuIFRoZSBvbmx5IGV4Y2VwdGlvbiBpcyB0aGUgdGltZVNjYWxlIHByb3BlcnR5LiBBbHNvIGNoZWNrIF9nYyBiZWNhdXNlIHRoZXJlJ3MgYSBjaGFuY2UgdGhhdCBraWxsKCkgY291bGQgYmUgY2FsbGVkIGluIGFuIG9uVXBkYXRlXG5cdFx0XHRcdGlmIChpc0NvbXBsZXRlKSB7XG5cdFx0XHRcdFx0aWYgKF9sYXp5VHdlZW5zLmxlbmd0aCkgeyAvL2luIGNhc2UgcmVuZGVyaW5nIGNhdXNlZCBhbnkgdHdlZW5zIHRvIGxhenktaW5pdCwgd2Ugc2hvdWxkIHJlbmRlciB0aGVtIGJlY2F1c2UgdHlwaWNhbGx5IHdoZW4gYSB0aW1lbGluZSBmaW5pc2hlcywgdXNlcnMgZXhwZWN0IHRoaW5ncyB0byBoYXZlIHJlbmRlcmVkIGZ1bGx5LiBJbWFnaW5lIGFuIG9uQ29tcGxldGUgb24gYSB0aW1lbGluZSB0aGF0IHJlcG9ydHMvY2hlY2tzIHR3ZWVuZWQgdmFsdWVzLlxuXHRcdFx0XHRcdFx0X2xhenlSZW5kZXIoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHRoaXMuX3RpbWVsaW5lLmF1dG9SZW1vdmVDaGlsZHJlbikge1xuXHRcdFx0XHRcdFx0dGhpcy5fZW5hYmxlZChmYWxzZSwgZmFsc2UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLl9hY3RpdmUgPSBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIXN1cHByZXNzRXZlbnRzICYmIHRoaXMudmFyc1tjYWxsYmFja10pIHtcblx0XHRcdFx0XHR0aGlzLnZhcnNbY2FsbGJhY2tdLmFwcGx5KHRoaXMudmFyc1tjYWxsYmFjayArIFwiU2NvcGVcIl0gfHwgdGhpcywgdGhpcy52YXJzW2NhbGxiYWNrICsgXCJQYXJhbXNcIl0gfHwgX2JsYW5rQXJyYXkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHAuZ2V0QWN0aXZlID0gZnVuY3Rpb24obmVzdGVkLCB0d2VlbnMsIHRpbWVsaW5lcykge1xuXHRcdFx0aWYgKG5lc3RlZCA9PSBudWxsKSB7XG5cdFx0XHRcdG5lc3RlZCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0XHRpZiAodHdlZW5zID09IG51bGwpIHtcblx0XHRcdFx0dHdlZW5zID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdGlmICh0aW1lbGluZXMgPT0gbnVsbCkge1xuXHRcdFx0XHR0aW1lbGluZXMgPSBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHZhciBhID0gW10sXG5cdFx0XHRcdGFsbCA9IHRoaXMuZ2V0Q2hpbGRyZW4obmVzdGVkLCB0d2VlbnMsIHRpbWVsaW5lcyksXG5cdFx0XHRcdGNudCA9IDAsXG5cdFx0XHRcdGwgPSBhbGwubGVuZ3RoLFxuXHRcdFx0XHRpLCB0d2Vlbjtcblx0XHRcdGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcblx0XHRcdFx0dHdlZW4gPSBhbGxbaV07XG5cdFx0XHRcdGlmICh0d2Vlbi5pc0FjdGl2ZSgpKSB7XG5cdFx0XHRcdFx0YVtjbnQrK10gPSB0d2Vlbjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGE7XG5cdFx0fTtcblxuXG5cdFx0cC5nZXRMYWJlbEFmdGVyID0gZnVuY3Rpb24odGltZSkge1xuXHRcdFx0aWYgKCF0aW1lKSBpZiAodGltZSAhPT0gMCkgeyAvL2Zhc3RlciB0aGFuIGlzTmFuKClcblx0XHRcdFx0dGltZSA9IHRoaXMuX3RpbWU7XG5cdFx0XHR9XG5cdFx0XHR2YXIgbGFiZWxzID0gdGhpcy5nZXRMYWJlbHNBcnJheSgpLFxuXHRcdFx0XHRsID0gbGFiZWxzLmxlbmd0aCxcblx0XHRcdFx0aTtcblx0XHRcdGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcblx0XHRcdFx0aWYgKGxhYmVsc1tpXS50aW1lID4gdGltZSkge1xuXHRcdFx0XHRcdHJldHVybiBsYWJlbHNbaV0ubmFtZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fTtcblxuXHRcdHAuZ2V0TGFiZWxCZWZvcmUgPSBmdW5jdGlvbih0aW1lKSB7XG5cdFx0XHRpZiAodGltZSA9PSBudWxsKSB7XG5cdFx0XHRcdHRpbWUgPSB0aGlzLl90aW1lO1xuXHRcdFx0fVxuXHRcdFx0dmFyIGxhYmVscyA9IHRoaXMuZ2V0TGFiZWxzQXJyYXkoKSxcblx0XHRcdFx0aSA9IGxhYmVscy5sZW5ndGg7XG5cdFx0XHR3aGlsZSAoLS1pID4gLTEpIHtcblx0XHRcdFx0aWYgKGxhYmVsc1tpXS50aW1lIDwgdGltZSkge1xuXHRcdFx0XHRcdHJldHVybiBsYWJlbHNbaV0ubmFtZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fTtcblxuXHRcdHAuZ2V0TGFiZWxzQXJyYXkgPSBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBhID0gW10sXG5cdFx0XHRcdGNudCA9IDAsXG5cdFx0XHRcdHA7XG5cdFx0XHRmb3IgKHAgaW4gdGhpcy5fbGFiZWxzKSB7XG5cdFx0XHRcdGFbY250KytdID0ge3RpbWU6dGhpcy5fbGFiZWxzW3BdLCBuYW1lOnB9O1xuXHRcdFx0fVxuXHRcdFx0YS5zb3J0KGZ1bmN0aW9uKGEsYikge1xuXHRcdFx0XHRyZXR1cm4gYS50aW1lIC0gYi50aW1lO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gYTtcblx0XHR9O1xuXG5cbi8vLS0tLSBHRVRURVJTIC8gU0VUVEVSUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRwLnByb2dyZXNzID0gZnVuY3Rpb24odmFsdWUsIHN1cHByZXNzRXZlbnRzKSB7XG5cdFx0XHRyZXR1cm4gKCFhcmd1bWVudHMubGVuZ3RoKSA/IHRoaXMuX3RpbWUgLyB0aGlzLmR1cmF0aW9uKCkgOiB0aGlzLnRvdGFsVGltZSggdGhpcy5kdXJhdGlvbigpICogKCh0aGlzLl95b3lvICYmICh0aGlzLl9jeWNsZSAmIDEpICE9PSAwKSA/IDEgLSB2YWx1ZSA6IHZhbHVlKSArICh0aGlzLl9jeWNsZSAqICh0aGlzLl9kdXJhdGlvbiArIHRoaXMuX3JlcGVhdERlbGF5KSksIHN1cHByZXNzRXZlbnRzKTtcblx0XHR9O1xuXG5cdFx0cC50b3RhbFByb2dyZXNzID0gZnVuY3Rpb24odmFsdWUsIHN1cHByZXNzRXZlbnRzKSB7XG5cdFx0XHRyZXR1cm4gKCFhcmd1bWVudHMubGVuZ3RoKSA/IHRoaXMuX3RvdGFsVGltZSAvIHRoaXMudG90YWxEdXJhdGlvbigpIDogdGhpcy50b3RhbFRpbWUoIHRoaXMudG90YWxEdXJhdGlvbigpICogdmFsdWUsIHN1cHByZXNzRXZlbnRzKTtcblx0XHR9O1xuXG5cdFx0cC50b3RhbER1cmF0aW9uID0gZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdFx0XHRpZiAodGhpcy5fZGlydHkpIHtcblx0XHRcdFx0XHRUaW1lbGluZUxpdGUucHJvdG90eXBlLnRvdGFsRHVyYXRpb24uY2FsbCh0aGlzKTsgLy9qdXN0IGZvcmNlcyByZWZyZXNoXG5cdFx0XHRcdFx0Ly9JbnN0ZWFkIG9mIEluZmluaXR5LCB3ZSB1c2UgOTk5OTk5OTk5OTk5IHNvIHRoYXQgd2UgY2FuIGFjY29tbW9kYXRlIHJldmVyc2VzLlxuXHRcdFx0XHRcdHRoaXMuX3RvdGFsRHVyYXRpb24gPSAodGhpcy5fcmVwZWF0ID09PSAtMSkgPyA5OTk5OTk5OTk5OTkgOiB0aGlzLl9kdXJhdGlvbiAqICh0aGlzLl9yZXBlYXQgKyAxKSArICh0aGlzLl9yZXBlYXREZWxheSAqIHRoaXMuX3JlcGVhdCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHRoaXMuX3RvdGFsRHVyYXRpb247XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gKHRoaXMuX3JlcGVhdCA9PT0gLTEpID8gdGhpcyA6IHRoaXMuZHVyYXRpb24oICh2YWx1ZSAtICh0aGlzLl9yZXBlYXQgKiB0aGlzLl9yZXBlYXREZWxheSkpIC8gKHRoaXMuX3JlcGVhdCArIDEpICk7XG5cdFx0fTtcblxuXHRcdHAudGltZSA9IGZ1bmN0aW9uKHZhbHVlLCBzdXBwcmVzc0V2ZW50cykge1xuXHRcdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLl90aW1lO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuX2RpcnR5KSB7XG5cdFx0XHRcdHRoaXMudG90YWxEdXJhdGlvbigpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHZhbHVlID4gdGhpcy5fZHVyYXRpb24pIHtcblx0XHRcdFx0dmFsdWUgPSB0aGlzLl9kdXJhdGlvbjtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLl95b3lvICYmICh0aGlzLl9jeWNsZSAmIDEpICE9PSAwKSB7XG5cdFx0XHRcdHZhbHVlID0gKHRoaXMuX2R1cmF0aW9uIC0gdmFsdWUpICsgKHRoaXMuX2N5Y2xlICogKHRoaXMuX2R1cmF0aW9uICsgdGhpcy5fcmVwZWF0RGVsYXkpKTtcblx0XHRcdH0gZWxzZSBpZiAodGhpcy5fcmVwZWF0ICE9PSAwKSB7XG5cdFx0XHRcdHZhbHVlICs9IHRoaXMuX2N5Y2xlICogKHRoaXMuX2R1cmF0aW9uICsgdGhpcy5fcmVwZWF0RGVsYXkpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXMudG90YWxUaW1lKHZhbHVlLCBzdXBwcmVzc0V2ZW50cyk7XG5cdFx0fTtcblxuXHRcdHAucmVwZWF0ID0gZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fcmVwZWF0O1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5fcmVwZWF0ID0gdmFsdWU7XG5cdFx0XHRyZXR1cm4gdGhpcy5fdW5jYWNoZSh0cnVlKTtcblx0XHR9O1xuXG5cdFx0cC5yZXBlYXREZWxheSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX3JlcGVhdERlbGF5O1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5fcmVwZWF0RGVsYXkgPSB2YWx1ZTtcblx0XHRcdHJldHVybiB0aGlzLl91bmNhY2hlKHRydWUpO1xuXHRcdH07XG5cblx0XHRwLnlveW8gPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLl95b3lvO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5feW95byA9IHZhbHVlO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fTtcblxuXHRcdHAuY3VycmVudExhYmVsID0gZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5nZXRMYWJlbEJlZm9yZSh0aGlzLl90aW1lICsgMC4wMDAwMDAwMSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcy5zZWVrKHZhbHVlLCB0cnVlKTtcblx0XHR9O1xuXG5cdFx0cmV0dXJuIFRpbWVsaW5lTWF4O1xuXG5cdH0sIHRydWUpO1xuXHRcblxuXG5cblxuXHRcblx0XG5cdFxuXHRcblx0XG5cdFxuXHRcbi8qXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCZXppZXJQbHVnaW5cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXHQoZnVuY3Rpb24oKSB7XG5cblx0XHR2YXIgX1JBRDJERUcgPSAxODAgLyBNYXRoLlBJLFxuXHRcdFx0X3IxID0gW10sXG5cdFx0XHRfcjIgPSBbXSxcblx0XHRcdF9yMyA9IFtdLFxuXHRcdFx0X2NvclByb3BzID0ge30sXG5cdFx0XHRfZ2xvYmFscyA9IF9nc1Njb3BlLl9nc0RlZmluZS5nbG9iYWxzLFxuXHRcdFx0U2VnbWVudCA9IGZ1bmN0aW9uKGEsIGIsIGMsIGQpIHtcblx0XHRcdFx0dGhpcy5hID0gYTtcblx0XHRcdFx0dGhpcy5iID0gYjtcblx0XHRcdFx0dGhpcy5jID0gYztcblx0XHRcdFx0dGhpcy5kID0gZDtcblx0XHRcdFx0dGhpcy5kYSA9IGQgLSBhO1xuXHRcdFx0XHR0aGlzLmNhID0gYyAtIGE7XG5cdFx0XHRcdHRoaXMuYmEgPSBiIC0gYTtcblx0XHRcdH0sXG5cdFx0XHRfY29ycmVsYXRlID0gXCIseCx5LHosbGVmdCx0b3AscmlnaHQsYm90dG9tLG1hcmdpblRvcCxtYXJnaW5MZWZ0LG1hcmdpblJpZ2h0LG1hcmdpbkJvdHRvbSxwYWRkaW5nTGVmdCxwYWRkaW5nVG9wLHBhZGRpbmdSaWdodCxwYWRkaW5nQm90dG9tLGJhY2tncm91bmRQb3NpdGlvbixiYWNrZ3JvdW5kUG9zaXRpb25feSxcIixcblx0XHRcdGN1YmljVG9RdWFkcmF0aWMgPSBmdW5jdGlvbihhLCBiLCBjLCBkKSB7XG5cdFx0XHRcdHZhciBxMSA9IHthOmF9LFxuXHRcdFx0XHRcdHEyID0ge30sXG5cdFx0XHRcdFx0cTMgPSB7fSxcblx0XHRcdFx0XHRxNCA9IHtjOmR9LFxuXHRcdFx0XHRcdG1hYiA9IChhICsgYikgLyAyLFxuXHRcdFx0XHRcdG1iYyA9IChiICsgYykgLyAyLFxuXHRcdFx0XHRcdG1jZCA9IChjICsgZCkgLyAyLFxuXHRcdFx0XHRcdG1hYmMgPSAobWFiICsgbWJjKSAvIDIsXG5cdFx0XHRcdFx0bWJjZCA9IChtYmMgKyBtY2QpIC8gMixcblx0XHRcdFx0XHRtOCA9IChtYmNkIC0gbWFiYykgLyA4O1xuXHRcdFx0XHRxMS5iID0gbWFiICsgKGEgLSBtYWIpIC8gNDtcblx0XHRcdFx0cTIuYiA9IG1hYmMgKyBtODtcblx0XHRcdFx0cTEuYyA9IHEyLmEgPSAocTEuYiArIHEyLmIpIC8gMjtcblx0XHRcdFx0cTIuYyA9IHEzLmEgPSAobWFiYyArIG1iY2QpIC8gMjtcblx0XHRcdFx0cTMuYiA9IG1iY2QgLSBtODtcblx0XHRcdFx0cTQuYiA9IG1jZCArIChkIC0gbWNkKSAvIDQ7XG5cdFx0XHRcdHEzLmMgPSBxNC5hID0gKHEzLmIgKyBxNC5iKSAvIDI7XG5cdFx0XHRcdHJldHVybiBbcTEsIHEyLCBxMywgcTRdO1xuXHRcdFx0fSxcblx0XHRcdF9jYWxjdWxhdGVDb250cm9sUG9pbnRzID0gZnVuY3Rpb24oYSwgY3VydmluZXNzLCBxdWFkLCBiYXNpYywgY29ycmVsYXRlKSB7XG5cdFx0XHRcdHZhciBsID0gYS5sZW5ndGggLSAxLFxuXHRcdFx0XHRcdGlpID0gMCxcblx0XHRcdFx0XHRjcDEgPSBhWzBdLmEsXG5cdFx0XHRcdFx0aSwgcDEsIHAyLCBwMywgc2VnLCBtMSwgbTIsIG1tLCBjcDIsIHFiLCByMSwgcjIsIHRsO1xuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XG5cdFx0XHRcdFx0c2VnID0gYVtpaV07XG5cdFx0XHRcdFx0cDEgPSBzZWcuYTtcblx0XHRcdFx0XHRwMiA9IHNlZy5kO1xuXHRcdFx0XHRcdHAzID0gYVtpaSsxXS5kO1xuXG5cdFx0XHRcdFx0aWYgKGNvcnJlbGF0ZSkge1xuXHRcdFx0XHRcdFx0cjEgPSBfcjFbaV07XG5cdFx0XHRcdFx0XHRyMiA9IF9yMltpXTtcblx0XHRcdFx0XHRcdHRsID0gKChyMiArIHIxKSAqIGN1cnZpbmVzcyAqIDAuMjUpIC8gKGJhc2ljID8gMC41IDogX3IzW2ldIHx8IDAuNSk7XG5cdFx0XHRcdFx0XHRtMSA9IHAyIC0gKHAyIC0gcDEpICogKGJhc2ljID8gY3VydmluZXNzICogMC41IDogKHIxICE9PSAwID8gdGwgLyByMSA6IDApKTtcblx0XHRcdFx0XHRcdG0yID0gcDIgKyAocDMgLSBwMikgKiAoYmFzaWMgPyBjdXJ2aW5lc3MgKiAwLjUgOiAocjIgIT09IDAgPyB0bCAvIHIyIDogMCkpO1xuXHRcdFx0XHRcdFx0bW0gPSBwMiAtIChtMSArICgoKG0yIC0gbTEpICogKChyMSAqIDMgLyAocjEgKyByMikpICsgMC41KSAvIDQpIHx8IDApKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0bTEgPSBwMiAtIChwMiAtIHAxKSAqIGN1cnZpbmVzcyAqIDAuNTtcblx0XHRcdFx0XHRcdG0yID0gcDIgKyAocDMgLSBwMikgKiBjdXJ2aW5lc3MgKiAwLjU7XG5cdFx0XHRcdFx0XHRtbSA9IHAyIC0gKG0xICsgbTIpIC8gMjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bTEgKz0gbW07XG5cdFx0XHRcdFx0bTIgKz0gbW07XG5cblx0XHRcdFx0XHRzZWcuYyA9IGNwMiA9IG0xO1xuXHRcdFx0XHRcdGlmIChpICE9PSAwKSB7XG5cdFx0XHRcdFx0XHRzZWcuYiA9IGNwMTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0c2VnLmIgPSBjcDEgPSBzZWcuYSArIChzZWcuYyAtIHNlZy5hKSAqIDAuNjsgLy9pbnN0ZWFkIG9mIHBsYWNpbmcgYiBvbiBhIGV4YWN0bHksIHdlIG1vdmUgaXQgaW5saW5lIHdpdGggYyBzbyB0aGF0IGlmIHRoZSB1c2VyIHNwZWNpZmllcyBhbiBlYXNlIGxpa2UgQmFjay5lYXNlSW4gb3IgRWxhc3RpYy5lYXNlSW4gd2hpY2ggZ29lcyBCRVlPTkQgdGhlIGJlZ2lubmluZywgaXQgd2lsbCBkbyBzbyBzbW9vdGhseS5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRzZWcuZGEgPSBwMiAtIHAxO1xuXHRcdFx0XHRcdHNlZy5jYSA9IGNwMiAtIHAxO1xuXHRcdFx0XHRcdHNlZy5iYSA9IGNwMSAtIHAxO1xuXG5cdFx0XHRcdFx0aWYgKHF1YWQpIHtcblx0XHRcdFx0XHRcdHFiID0gY3ViaWNUb1F1YWRyYXRpYyhwMSwgY3AxLCBjcDIsIHAyKTtcblx0XHRcdFx0XHRcdGEuc3BsaWNlKGlpLCAxLCBxYlswXSwgcWJbMV0sIHFiWzJdLCBxYlszXSk7XG5cdFx0XHRcdFx0XHRpaSArPSA0O1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRpaSsrO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGNwMSA9IG0yO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHNlZyA9IGFbaWldO1xuXHRcdFx0XHRzZWcuYiA9IGNwMTtcblx0XHRcdFx0c2VnLmMgPSBjcDEgKyAoc2VnLmQgLSBjcDEpICogMC40OyAvL2luc3RlYWQgb2YgcGxhY2luZyBjIG9uIGQgZXhhY3RseSwgd2UgbW92ZSBpdCBpbmxpbmUgd2l0aCBiIHNvIHRoYXQgaWYgdGhlIHVzZXIgc3BlY2lmaWVzIGFuIGVhc2UgbGlrZSBCYWNrLmVhc2VPdXQgb3IgRWxhc3RpYy5lYXNlT3V0IHdoaWNoIGdvZXMgQkVZT05EIHRoZSBlbmQsIGl0IHdpbGwgZG8gc28gc21vb3RobHkuXG5cdFx0XHRcdHNlZy5kYSA9IHNlZy5kIC0gc2VnLmE7XG5cdFx0XHRcdHNlZy5jYSA9IHNlZy5jIC0gc2VnLmE7XG5cdFx0XHRcdHNlZy5iYSA9IGNwMSAtIHNlZy5hO1xuXHRcdFx0XHRpZiAocXVhZCkge1xuXHRcdFx0XHRcdHFiID0gY3ViaWNUb1F1YWRyYXRpYyhzZWcuYSwgY3AxLCBzZWcuYywgc2VnLmQpO1xuXHRcdFx0XHRcdGEuc3BsaWNlKGlpLCAxLCBxYlswXSwgcWJbMV0sIHFiWzJdLCBxYlszXSk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRfcGFyc2VBbmNob3JzID0gZnVuY3Rpb24odmFsdWVzLCBwLCBjb3JyZWxhdGUsIHByZXBlbmQpIHtcblx0XHRcdFx0dmFyIGEgPSBbXSxcblx0XHRcdFx0XHRsLCBpLCBwMSwgcDIsIHAzLCB0bXA7XG5cdFx0XHRcdGlmIChwcmVwZW5kKSB7XG5cdFx0XHRcdFx0dmFsdWVzID0gW3ByZXBlbmRdLmNvbmNhdCh2YWx1ZXMpO1xuXHRcdFx0XHRcdGkgPSB2YWx1ZXMubGVuZ3RoO1xuXHRcdFx0XHRcdHdoaWxlICgtLWkgPiAtMSkge1xuXHRcdFx0XHRcdFx0aWYgKHR5cGVvZiggKHRtcCA9IHZhbHVlc1tpXVtwXSkgKSA9PT0gXCJzdHJpbmdcIikgaWYgKHRtcC5jaGFyQXQoMSkgPT09IFwiPVwiKSB7XG5cdFx0XHRcdFx0XHRcdHZhbHVlc1tpXVtwXSA9IHByZXBlbmRbcF0gKyBOdW1iZXIodG1wLmNoYXJBdCgwKSArIHRtcC5zdWJzdHIoMikpOyAvL2FjY29tbW9kYXRlIHJlbGF0aXZlIHZhbHVlcy4gRG8gaXQgaW5saW5lIGluc3RlYWQgb2YgYnJlYWtpbmcgaXQgb3V0IGludG8gYSBmdW5jdGlvbiBmb3Igc3BlZWQgcmVhc29uc1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRsID0gdmFsdWVzLmxlbmd0aCAtIDI7XG5cdFx0XHRcdGlmIChsIDwgMCkge1xuXHRcdFx0XHRcdGFbMF0gPSBuZXcgU2VnbWVudCh2YWx1ZXNbMF1bcF0sIDAsIDAsIHZhbHVlc1sobCA8IC0xKSA/IDAgOiAxXVtwXSk7XG5cdFx0XHRcdFx0cmV0dXJuIGE7XG5cdFx0XHRcdH1cblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGw7IGkrKykge1xuXHRcdFx0XHRcdHAxID0gdmFsdWVzW2ldW3BdO1xuXHRcdFx0XHRcdHAyID0gdmFsdWVzW2krMV1bcF07XG5cdFx0XHRcdFx0YVtpXSA9IG5ldyBTZWdtZW50KHAxLCAwLCAwLCBwMik7XG5cdFx0XHRcdFx0aWYgKGNvcnJlbGF0ZSkge1xuXHRcdFx0XHRcdFx0cDMgPSB2YWx1ZXNbaSsyXVtwXTtcblx0XHRcdFx0XHRcdF9yMVtpXSA9IChfcjFbaV0gfHwgMCkgKyAocDIgLSBwMSkgKiAocDIgLSBwMSk7XG5cdFx0XHRcdFx0XHRfcjJbaV0gPSAoX3IyW2ldIHx8IDApICsgKHAzIC0gcDIpICogKHAzIC0gcDIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRhW2ldID0gbmV3IFNlZ21lbnQodmFsdWVzW2ldW3BdLCAwLCAwLCB2YWx1ZXNbaSsxXVtwXSk7XG5cdFx0XHRcdHJldHVybiBhO1xuXHRcdFx0fSxcblx0XHRcdGJlemllclRocm91Z2ggPSBmdW5jdGlvbih2YWx1ZXMsIGN1cnZpbmVzcywgcXVhZHJhdGljLCBiYXNpYywgY29ycmVsYXRlLCBwcmVwZW5kKSB7XG5cdFx0XHRcdHZhciBvYmogPSB7fSxcblx0XHRcdFx0XHRwcm9wcyA9IFtdLFxuXHRcdFx0XHRcdGZpcnN0ID0gcHJlcGVuZCB8fCB2YWx1ZXNbMF0sXG5cdFx0XHRcdFx0aSwgcCwgYSwgaiwgciwgbCwgc2VhbWxlc3MsIGxhc3Q7XG5cdFx0XHRcdGNvcnJlbGF0ZSA9ICh0eXBlb2YoY29ycmVsYXRlKSA9PT0gXCJzdHJpbmdcIikgPyBcIixcIitjb3JyZWxhdGUrXCIsXCIgOiBfY29ycmVsYXRlO1xuXHRcdFx0XHRpZiAoY3VydmluZXNzID09IG51bGwpIHtcblx0XHRcdFx0XHRjdXJ2aW5lc3MgPSAxO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGZvciAocCBpbiB2YWx1ZXNbMF0pIHtcblx0XHRcdFx0XHRwcm9wcy5wdXNoKHApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vY2hlY2sgdG8gc2VlIGlmIHRoZSBsYXN0IGFuZCBmaXJzdCB2YWx1ZXMgYXJlIGlkZW50aWNhbCAod2VsbCwgd2l0aGluIDAuMDUpLiBJZiBzbywgbWFrZSBzZWFtbGVzcyBieSBhcHBlbmRpbmcgdGhlIHNlY29uZCBlbGVtZW50IHRvIHRoZSB2ZXJ5IGVuZCBvZiB0aGUgdmFsdWVzIGFycmF5IGFuZCB0aGUgMm5kLXRvLWxhc3QgZWxlbWVudCB0byB0aGUgdmVyeSBiZWdpbm5pbmcgKHdlJ2xsIHJlbW92ZSB0aG9zZSBzZWdtZW50cyBsYXRlcilcblx0XHRcdFx0aWYgKHZhbHVlcy5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdFx0bGFzdCA9IHZhbHVlc1t2YWx1ZXMubGVuZ3RoIC0gMV07XG5cdFx0XHRcdFx0c2VhbWxlc3MgPSB0cnVlO1xuXHRcdFx0XHRcdGkgPSBwcm9wcy5sZW5ndGg7XG5cdFx0XHRcdFx0d2hpbGUgKC0taSA+IC0xKSB7XG5cdFx0XHRcdFx0XHRwID0gcHJvcHNbaV07XG5cdFx0XHRcdFx0XHRpZiAoTWF0aC5hYnMoZmlyc3RbcF0gLSBsYXN0W3BdKSA+IDAuMDUpIHsgLy9idWlsZCBpbiBhIHRvbGVyYW5jZSBvZiArLy0wLjA1IHRvIGFjY29tbW9kYXRlIHJvdW5kaW5nIGVycm9ycy4gRm9yIGV4YW1wbGUsIGlmIHlvdSBzZXQgYW4gb2JqZWN0J3MgcG9zaXRpb24gdG8gNC45NDUsIEZsYXNoIHdpbGwgbWFrZSBpdCA0Ljlcblx0XHRcdFx0XHRcdFx0c2VhbWxlc3MgPSBmYWxzZTtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChzZWFtbGVzcykge1xuXHRcdFx0XHRcdFx0dmFsdWVzID0gdmFsdWVzLmNvbmNhdCgpOyAvL2R1cGxpY2F0ZSB0aGUgYXJyYXkgdG8gYXZvaWQgY29udGFtaW5hdGluZyB0aGUgb3JpZ2luYWwgd2hpY2ggdGhlIHVzZXIgbWF5IGJlIHJldXNpbmcgZm9yIG90aGVyIHR3ZWVuc1xuXHRcdFx0XHRcdFx0aWYgKHByZXBlbmQpIHtcblx0XHRcdFx0XHRcdFx0dmFsdWVzLnVuc2hpZnQocHJlcGVuZCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR2YWx1ZXMucHVzaCh2YWx1ZXNbMV0pO1xuXHRcdFx0XHRcdFx0cHJlcGVuZCA9IHZhbHVlc1t2YWx1ZXMubGVuZ3RoIC0gM107XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdF9yMS5sZW5ndGggPSBfcjIubGVuZ3RoID0gX3IzLmxlbmd0aCA9IDA7XG5cdFx0XHRcdGkgPSBwcm9wcy5sZW5ndGg7XG5cdFx0XHRcdHdoaWxlICgtLWkgPiAtMSkge1xuXHRcdFx0XHRcdHAgPSBwcm9wc1tpXTtcblx0XHRcdFx0XHRfY29yUHJvcHNbcF0gPSAoY29ycmVsYXRlLmluZGV4T2YoXCIsXCIrcCtcIixcIikgIT09IC0xKTtcblx0XHRcdFx0XHRvYmpbcF0gPSBfcGFyc2VBbmNob3JzKHZhbHVlcywgcCwgX2NvclByb3BzW3BdLCBwcmVwZW5kKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpID0gX3IxLmxlbmd0aDtcblx0XHRcdFx0d2hpbGUgKC0taSA+IC0xKSB7XG5cdFx0XHRcdFx0X3IxW2ldID0gTWF0aC5zcXJ0KF9yMVtpXSk7XG5cdFx0XHRcdFx0X3IyW2ldID0gTWF0aC5zcXJ0KF9yMltpXSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFiYXNpYykge1xuXHRcdFx0XHRcdGkgPSBwcm9wcy5sZW5ndGg7XG5cdFx0XHRcdFx0d2hpbGUgKC0taSA+IC0xKSB7XG5cdFx0XHRcdFx0XHRpZiAoX2NvclByb3BzW3BdKSB7XG5cdFx0XHRcdFx0XHRcdGEgPSBvYmpbcHJvcHNbaV1dO1xuXHRcdFx0XHRcdFx0XHRsID0gYS5sZW5ndGggLSAxO1xuXHRcdFx0XHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgbDsgaisrKSB7XG5cdFx0XHRcdFx0XHRcdFx0ciA9IGFbaisxXS5kYSAvIF9yMltqXSArIGFbal0uZGEgLyBfcjFbal07XG5cdFx0XHRcdFx0XHRcdFx0X3IzW2pdID0gKF9yM1tqXSB8fCAwKSArIHIgKiByO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGkgPSBfcjMubGVuZ3RoO1xuXHRcdFx0XHRcdHdoaWxlICgtLWkgPiAtMSkge1xuXHRcdFx0XHRcdFx0X3IzW2ldID0gTWF0aC5zcXJ0KF9yM1tpXSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGkgPSBwcm9wcy5sZW5ndGg7XG5cdFx0XHRcdGogPSBxdWFkcmF0aWMgPyA0IDogMTtcblx0XHRcdFx0d2hpbGUgKC0taSA+IC0xKSB7XG5cdFx0XHRcdFx0cCA9IHByb3BzW2ldO1xuXHRcdFx0XHRcdGEgPSBvYmpbcF07XG5cdFx0XHRcdFx0X2NhbGN1bGF0ZUNvbnRyb2xQb2ludHMoYSwgY3VydmluZXNzLCBxdWFkcmF0aWMsIGJhc2ljLCBfY29yUHJvcHNbcF0pOyAvL3RoaXMgbWV0aG9kIHJlcXVpcmVzIHRoYXQgX3BhcnNlQW5jaG9ycygpIGFuZCBfc2V0U2VnbWVudFJhdGlvcygpIHJhbiBmaXJzdCBzbyB0aGF0IF9yMSwgX3IyLCBhbmQgX3IzIHZhbHVlcyBhcmUgcG9wdWxhdGVkIGZvciBhbGwgcHJvcGVydGllc1xuXHRcdFx0XHRcdGlmIChzZWFtbGVzcykge1xuXHRcdFx0XHRcdFx0YS5zcGxpY2UoMCwgaik7XG5cdFx0XHRcdFx0XHRhLnNwbGljZShhLmxlbmd0aCAtIGosIGopO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gb2JqO1xuXHRcdFx0fSxcblx0XHRcdF9wYXJzZUJlemllckRhdGEgPSBmdW5jdGlvbih2YWx1ZXMsIHR5cGUsIHByZXBlbmQpIHtcblx0XHRcdFx0dHlwZSA9IHR5cGUgfHwgXCJzb2Z0XCI7XG5cdFx0XHRcdHZhciBvYmogPSB7fSxcblx0XHRcdFx0XHRpbmMgPSAodHlwZSA9PT0gXCJjdWJpY1wiKSA/IDMgOiAyLFxuXHRcdFx0XHRcdHNvZnQgPSAodHlwZSA9PT0gXCJzb2Z0XCIpLFxuXHRcdFx0XHRcdHByb3BzID0gW10sXG5cdFx0XHRcdFx0YSwgYiwgYywgZCwgY3VyLCBpLCBqLCBsLCBwLCBjbnQsIHRtcDtcblx0XHRcdFx0aWYgKHNvZnQgJiYgcHJlcGVuZCkge1xuXHRcdFx0XHRcdHZhbHVlcyA9IFtwcmVwZW5kXS5jb25jYXQodmFsdWVzKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodmFsdWVzID09IG51bGwgfHwgdmFsdWVzLmxlbmd0aCA8IGluYyArIDEpIHsgdGhyb3cgXCJpbnZhbGlkIEJlemllciBkYXRhXCI7IH1cblx0XHRcdFx0Zm9yIChwIGluIHZhbHVlc1swXSkge1xuXHRcdFx0XHRcdHByb3BzLnB1c2gocCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aSA9IHByb3BzLmxlbmd0aDtcblx0XHRcdFx0d2hpbGUgKC0taSA+IC0xKSB7XG5cdFx0XHRcdFx0cCA9IHByb3BzW2ldO1xuXHRcdFx0XHRcdG9ialtwXSA9IGN1ciA9IFtdO1xuXHRcdFx0XHRcdGNudCA9IDA7XG5cdFx0XHRcdFx0bCA9IHZhbHVlcy5sZW5ndGg7XG5cdFx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IGw7IGorKykge1xuXHRcdFx0XHRcdFx0YSA9IChwcmVwZW5kID09IG51bGwpID8gdmFsdWVzW2pdW3BdIDogKHR5cGVvZiggKHRtcCA9IHZhbHVlc1tqXVtwXSkgKSA9PT0gXCJzdHJpbmdcIiAmJiB0bXAuY2hhckF0KDEpID09PSBcIj1cIikgPyBwcmVwZW5kW3BdICsgTnVtYmVyKHRtcC5jaGFyQXQoMCkgKyB0bXAuc3Vic3RyKDIpKSA6IE51bWJlcih0bXApO1xuXHRcdFx0XHRcdFx0aWYgKHNvZnQpIGlmIChqID4gMSkgaWYgKGogPCBsIC0gMSkge1xuXHRcdFx0XHRcdFx0XHRjdXJbY250KytdID0gKGEgKyBjdXJbY250LTJdKSAvIDI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRjdXJbY250KytdID0gYTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bCA9IGNudCAtIGluYyArIDE7XG5cdFx0XHRcdFx0Y250ID0gMDtcblx0XHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgbDsgaiArPSBpbmMpIHtcblx0XHRcdFx0XHRcdGEgPSBjdXJbal07XG5cdFx0XHRcdFx0XHRiID0gY3VyW2orMV07XG5cdFx0XHRcdFx0XHRjID0gY3VyW2orMl07XG5cdFx0XHRcdFx0XHRkID0gKGluYyA9PT0gMikgPyAwIDogY3VyW2orM107XG5cdFx0XHRcdFx0XHRjdXJbY250KytdID0gdG1wID0gKGluYyA9PT0gMykgPyBuZXcgU2VnbWVudChhLCBiLCBjLCBkKSA6IG5ldyBTZWdtZW50KGEsICgyICogYiArIGEpIC8gMywgKDIgKiBiICsgYykgLyAzLCBjKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y3VyLmxlbmd0aCA9IGNudDtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gb2JqO1xuXHRcdFx0fSxcblx0XHRcdF9hZGRDdWJpY0xlbmd0aHMgPSBmdW5jdGlvbihhLCBzdGVwcywgcmVzb2x1dGlvbikge1xuXHRcdFx0XHR2YXIgaW5jID0gMSAvIHJlc29sdXRpb24sXG5cdFx0XHRcdFx0aiA9IGEubGVuZ3RoLFxuXHRcdFx0XHRcdGQsIGQxLCBzLCBkYSwgY2EsIGJhLCBwLCBpLCBpbnYsIGJleiwgaW5kZXg7XG5cdFx0XHRcdHdoaWxlICgtLWogPiAtMSkge1xuXHRcdFx0XHRcdGJleiA9IGFbal07XG5cdFx0XHRcdFx0cyA9IGJlei5hO1xuXHRcdFx0XHRcdGRhID0gYmV6LmQgLSBzO1xuXHRcdFx0XHRcdGNhID0gYmV6LmMgLSBzO1xuXHRcdFx0XHRcdGJhID0gYmV6LmIgLSBzO1xuXHRcdFx0XHRcdGQgPSBkMSA9IDA7XG5cdFx0XHRcdFx0Zm9yIChpID0gMTsgaSA8PSByZXNvbHV0aW9uOyBpKyspIHtcblx0XHRcdFx0XHRcdHAgPSBpbmMgKiBpO1xuXHRcdFx0XHRcdFx0aW52ID0gMSAtIHA7XG5cdFx0XHRcdFx0XHRkID0gZDEgLSAoZDEgPSAocCAqIHAgKiBkYSArIDMgKiBpbnYgKiAocCAqIGNhICsgaW52ICogYmEpKSAqIHApO1xuXHRcdFx0XHRcdFx0aW5kZXggPSBqICogcmVzb2x1dGlvbiArIGkgLSAxO1xuXHRcdFx0XHRcdFx0c3RlcHNbaW5kZXhdID0gKHN0ZXBzW2luZGV4XSB8fCAwKSArIGQgKiBkO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdF9wYXJzZUxlbmd0aERhdGEgPSBmdW5jdGlvbihvYmosIHJlc29sdXRpb24pIHtcblx0XHRcdFx0cmVzb2x1dGlvbiA9IHJlc29sdXRpb24gPj4gMCB8fCA2O1xuXHRcdFx0XHR2YXIgYSA9IFtdLFxuXHRcdFx0XHRcdGxlbmd0aHMgPSBbXSxcblx0XHRcdFx0XHRkID0gMCxcblx0XHRcdFx0XHR0b3RhbCA9IDAsXG5cdFx0XHRcdFx0dGhyZXNob2xkID0gcmVzb2x1dGlvbiAtIDEsXG5cdFx0XHRcdFx0c2VnbWVudHMgPSBbXSxcblx0XHRcdFx0XHRjdXJMUyA9IFtdLCAvL2N1cnJlbnQgbGVuZ3RoIHNlZ21lbnRzIGFycmF5XG5cdFx0XHRcdFx0cCwgaSwgbCwgaW5kZXg7XG5cdFx0XHRcdGZvciAocCBpbiBvYmopIHtcblx0XHRcdFx0XHRfYWRkQ3ViaWNMZW5ndGhzKG9ialtwXSwgYSwgcmVzb2x1dGlvbik7XG5cdFx0XHRcdH1cblx0XHRcdFx0bCA9IGEubGVuZ3RoO1xuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XG5cdFx0XHRcdFx0ZCArPSBNYXRoLnNxcnQoYVtpXSk7XG5cdFx0XHRcdFx0aW5kZXggPSBpICUgcmVzb2x1dGlvbjtcblx0XHRcdFx0XHRjdXJMU1tpbmRleF0gPSBkO1xuXHRcdFx0XHRcdGlmIChpbmRleCA9PT0gdGhyZXNob2xkKSB7XG5cdFx0XHRcdFx0XHR0b3RhbCArPSBkO1xuXHRcdFx0XHRcdFx0aW5kZXggPSAoaSAvIHJlc29sdXRpb24pID4+IDA7XG5cdFx0XHRcdFx0XHRzZWdtZW50c1tpbmRleF0gPSBjdXJMUztcblx0XHRcdFx0XHRcdGxlbmd0aHNbaW5kZXhdID0gdG90YWw7XG5cdFx0XHRcdFx0XHRkID0gMDtcblx0XHRcdFx0XHRcdGN1ckxTID0gW107XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB7bGVuZ3RoOnRvdGFsLCBsZW5ndGhzOmxlbmd0aHMsIHNlZ21lbnRzOnNlZ21lbnRzfTtcblx0XHRcdH0sXG5cblxuXG5cdFx0XHRCZXppZXJQbHVnaW4gPSBfZ3NTY29wZS5fZ3NEZWZpbmUucGx1Z2luKHtcblx0XHRcdFx0XHRwcm9wTmFtZTogXCJiZXppZXJcIixcblx0XHRcdFx0XHRwcmlvcml0eTogLTEsXG5cdFx0XHRcdFx0dmVyc2lvbjogXCIxLjMuNFwiLFxuXHRcdFx0XHRcdEFQSTogMixcblx0XHRcdFx0XHRnbG9iYWw6dHJ1ZSxcblxuXHRcdFx0XHRcdC8vZ2V0cyBjYWxsZWQgd2hlbiB0aGUgdHdlZW4gcmVuZGVycyBmb3IgdGhlIGZpcnN0IHRpbWUuIFRoaXMgaXMgd2hlcmUgaW5pdGlhbCB2YWx1ZXMgc2hvdWxkIGJlIHJlY29yZGVkIGFuZCBhbnkgc2V0dXAgcm91dGluZXMgc2hvdWxkIHJ1bi5cblx0XHRcdFx0XHRpbml0OiBmdW5jdGlvbih0YXJnZXQsIHZhcnMsIHR3ZWVuKSB7XG5cdFx0XHRcdFx0XHR0aGlzLl90YXJnZXQgPSB0YXJnZXQ7XG5cdFx0XHRcdFx0XHRpZiAodmFycyBpbnN0YW5jZW9mIEFycmF5KSB7XG5cdFx0XHRcdFx0XHRcdHZhcnMgPSB7dmFsdWVzOnZhcnN9O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0dGhpcy5fZnVuYyA9IHt9O1xuXHRcdFx0XHRcdFx0dGhpcy5fcm91bmQgPSB7fTtcblx0XHRcdFx0XHRcdHRoaXMuX3Byb3BzID0gW107XG5cdFx0XHRcdFx0XHR0aGlzLl90aW1lUmVzID0gKHZhcnMudGltZVJlc29sdXRpb24gPT0gbnVsbCkgPyA2IDogcGFyc2VJbnQodmFycy50aW1lUmVzb2x1dGlvbiwgMTApO1xuXHRcdFx0XHRcdFx0dmFyIHZhbHVlcyA9IHZhcnMudmFsdWVzIHx8IFtdLFxuXHRcdFx0XHRcdFx0XHRmaXJzdCA9IHt9LFxuXHRcdFx0XHRcdFx0XHRzZWNvbmQgPSB2YWx1ZXNbMF0sXG5cdFx0XHRcdFx0XHRcdGF1dG9Sb3RhdGUgPSB2YXJzLmF1dG9Sb3RhdGUgfHwgdHdlZW4udmFycy5vcmllbnRUb0Jlemllcixcblx0XHRcdFx0XHRcdFx0cCwgaXNGdW5jLCBpLCBqLCBwcmVwZW5kO1xuXG5cdFx0XHRcdFx0XHR0aGlzLl9hdXRvUm90YXRlID0gYXV0b1JvdGF0ZSA/IChhdXRvUm90YXRlIGluc3RhbmNlb2YgQXJyYXkpID8gYXV0b1JvdGF0ZSA6IFtbXCJ4XCIsXCJ5XCIsXCJyb3RhdGlvblwiLCgoYXV0b1JvdGF0ZSA9PT0gdHJ1ZSkgPyAwIDogTnVtYmVyKGF1dG9Sb3RhdGUpIHx8IDApXV0gOiBudWxsO1xuXHRcdFx0XHRcdFx0Zm9yIChwIGluIHNlY29uZCkge1xuXHRcdFx0XHRcdFx0XHR0aGlzLl9wcm9wcy5wdXNoKHApO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRpID0gdGhpcy5fcHJvcHMubGVuZ3RoO1xuXHRcdFx0XHRcdFx0d2hpbGUgKC0taSA+IC0xKSB7XG5cdFx0XHRcdFx0XHRcdHAgPSB0aGlzLl9wcm9wc1tpXTtcblxuXHRcdFx0XHRcdFx0XHR0aGlzLl9vdmVyd3JpdGVQcm9wcy5wdXNoKHApO1xuXHRcdFx0XHRcdFx0XHRpc0Z1bmMgPSB0aGlzLl9mdW5jW3BdID0gKHR5cGVvZih0YXJnZXRbcF0pID09PSBcImZ1bmN0aW9uXCIpO1xuXHRcdFx0XHRcdFx0XHRmaXJzdFtwXSA9ICghaXNGdW5jKSA/IHBhcnNlRmxvYXQodGFyZ2V0W3BdKSA6IHRhcmdldFsgKChwLmluZGV4T2YoXCJzZXRcIikgfHwgdHlwZW9mKHRhcmdldFtcImdldFwiICsgcC5zdWJzdHIoMyldKSAhPT0gXCJmdW5jdGlvblwiKSA/IHAgOiBcImdldFwiICsgcC5zdWJzdHIoMykpIF0oKTtcblx0XHRcdFx0XHRcdFx0aWYgKCFwcmVwZW5kKSBpZiAoZmlyc3RbcF0gIT09IHZhbHVlc1swXVtwXSkge1xuXHRcdFx0XHRcdFx0XHRcdHByZXBlbmQgPSBmaXJzdDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0dGhpcy5fYmV6aWVycyA9ICh2YXJzLnR5cGUgIT09IFwiY3ViaWNcIiAmJiB2YXJzLnR5cGUgIT09IFwicXVhZHJhdGljXCIgJiYgdmFycy50eXBlICE9PSBcInNvZnRcIikgPyBiZXppZXJUaHJvdWdoKHZhbHVlcywgaXNOYU4odmFycy5jdXJ2aW5lc3MpID8gMSA6IHZhcnMuY3VydmluZXNzLCBmYWxzZSwgKHZhcnMudHlwZSA9PT0gXCJ0aHJ1QmFzaWNcIiksIHZhcnMuY29ycmVsYXRlLCBwcmVwZW5kKSA6IF9wYXJzZUJlemllckRhdGEodmFsdWVzLCB2YXJzLnR5cGUsIGZpcnN0KTtcblx0XHRcdFx0XHRcdHRoaXMuX3NlZ0NvdW50ID0gdGhpcy5fYmV6aWVyc1twXS5sZW5ndGg7XG5cblx0XHRcdFx0XHRcdGlmICh0aGlzLl90aW1lUmVzKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBsZCA9IF9wYXJzZUxlbmd0aERhdGEodGhpcy5fYmV6aWVycywgdGhpcy5fdGltZVJlcyk7XG5cdFx0XHRcdFx0XHRcdHRoaXMuX2xlbmd0aCA9IGxkLmxlbmd0aDtcblx0XHRcdFx0XHRcdFx0dGhpcy5fbGVuZ3RocyA9IGxkLmxlbmd0aHM7XG5cdFx0XHRcdFx0XHRcdHRoaXMuX3NlZ21lbnRzID0gbGQuc2VnbWVudHM7XG5cdFx0XHRcdFx0XHRcdHRoaXMuX2wxID0gdGhpcy5fbGkgPSB0aGlzLl9zMSA9IHRoaXMuX3NpID0gMDtcblx0XHRcdFx0XHRcdFx0dGhpcy5fbDIgPSB0aGlzLl9sZW5ndGhzWzBdO1xuXHRcdFx0XHRcdFx0XHR0aGlzLl9jdXJTZWcgPSB0aGlzLl9zZWdtZW50c1swXTtcblx0XHRcdFx0XHRcdFx0dGhpcy5fczIgPSB0aGlzLl9jdXJTZWdbMF07XG5cdFx0XHRcdFx0XHRcdHRoaXMuX3ByZWMgPSAxIC8gdGhpcy5fY3VyU2VnLmxlbmd0aDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0aWYgKChhdXRvUm90YXRlID0gdGhpcy5fYXV0b1JvdGF0ZSkpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5faW5pdGlhbFJvdGF0aW9ucyA9IFtdO1xuXHRcdFx0XHRcdFx0XHRpZiAoIShhdXRvUm90YXRlWzBdIGluc3RhbmNlb2YgQXJyYXkpKSB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5fYXV0b1JvdGF0ZSA9IGF1dG9Sb3RhdGUgPSBbYXV0b1JvdGF0ZV07XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0aSA9IGF1dG9Sb3RhdGUubGVuZ3RoO1xuXHRcdFx0XHRcdFx0XHR3aGlsZSAoLS1pID4gLTEpIHtcblx0XHRcdFx0XHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgMzsgaisrKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRwID0gYXV0b1JvdGF0ZVtpXVtqXTtcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuX2Z1bmNbcF0gPSAodHlwZW9mKHRhcmdldFtwXSkgPT09IFwiZnVuY3Rpb25cIikgPyB0YXJnZXRbICgocC5pbmRleE9mKFwic2V0XCIpIHx8IHR5cGVvZih0YXJnZXRbXCJnZXRcIiArIHAuc3Vic3RyKDMpXSkgIT09IFwiZnVuY3Rpb25cIikgPyBwIDogXCJnZXRcIiArIHAuc3Vic3RyKDMpKSBdIDogZmFsc2U7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdHAgPSBhdXRvUm90YXRlW2ldWzJdO1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuX2luaXRpYWxSb3RhdGlvbnNbaV0gPSB0aGlzLl9mdW5jW3BdID8gdGhpcy5fZnVuY1twXS5jYWxsKHRoaXMuX3RhcmdldCkgOiB0aGlzLl90YXJnZXRbcF07XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHRoaXMuX3N0YXJ0UmF0aW8gPSB0d2Vlbi52YXJzLnJ1bkJhY2t3YXJkcyA/IDEgOiAwOyAvL3dlIGRldGVybWluZSB0aGUgc3RhcnRpbmcgcmF0aW8gd2hlbiB0aGUgdHdlZW4gaW5pdHMgd2hpY2ggaXMgYWx3YXlzIDAgdW5sZXNzIHRoZSB0d2VlbiBoYXMgcnVuQmFja3dhcmRzOnRydWUgKGluZGljYXRpbmcgaXQncyBhIGZyb20oKSB0d2VlbikgaW4gd2hpY2ggY2FzZSBpdCdzIDEuXG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9LFxuXG5cdFx0XHRcdFx0Ly9jYWxsZWQgZWFjaCB0aW1lIHRoZSB2YWx1ZXMgc2hvdWxkIGJlIHVwZGF0ZWQsIGFuZCB0aGUgcmF0aW8gZ2V0cyBwYXNzZWQgYXMgdGhlIG9ubHkgcGFyYW1ldGVyICh0eXBpY2FsbHkgaXQncyBhIHZhbHVlIGJldHdlZW4gMCBhbmQgMSwgYnV0IGl0IGNhbiBleGNlZWQgdGhvc2Ugd2hlbiB1c2luZyBhbiBlYXNlIGxpa2UgRWxhc3RpYy5lYXNlT3V0IG9yIEJhY2suZWFzZU91dCwgZXRjLilcblx0XHRcdFx0XHRzZXQ6IGZ1bmN0aW9uKHYpIHtcblx0XHRcdFx0XHRcdHZhciBzZWdtZW50cyA9IHRoaXMuX3NlZ0NvdW50LFxuXHRcdFx0XHRcdFx0XHRmdW5jID0gdGhpcy5fZnVuYyxcblx0XHRcdFx0XHRcdFx0dGFyZ2V0ID0gdGhpcy5fdGFyZ2V0LFxuXHRcdFx0XHRcdFx0XHRub3RTdGFydCA9ICh2ICE9PSB0aGlzLl9zdGFydFJhdGlvKSxcblx0XHRcdFx0XHRcdFx0Y3VySW5kZXgsIGludiwgaSwgcCwgYiwgdCwgdmFsLCBsLCBsZW5ndGhzLCBjdXJTZWc7XG5cdFx0XHRcdFx0XHRpZiAoIXRoaXMuX3RpbWVSZXMpIHtcblx0XHRcdFx0XHRcdFx0Y3VySW5kZXggPSAodiA8IDApID8gMCA6ICh2ID49IDEpID8gc2VnbWVudHMgLSAxIDogKHNlZ21lbnRzICogdikgPj4gMDtcblx0XHRcdFx0XHRcdFx0dCA9ICh2IC0gKGN1ckluZGV4ICogKDEgLyBzZWdtZW50cykpKSAqIHNlZ21lbnRzO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0bGVuZ3RocyA9IHRoaXMuX2xlbmd0aHM7XG5cdFx0XHRcdFx0XHRcdGN1clNlZyA9IHRoaXMuX2N1clNlZztcblx0XHRcdFx0XHRcdFx0diAqPSB0aGlzLl9sZW5ndGg7XG5cdFx0XHRcdFx0XHRcdGkgPSB0aGlzLl9saTtcblx0XHRcdFx0XHRcdFx0Ly9maW5kIHRoZSBhcHByb3ByaWF0ZSBzZWdtZW50IChpZiB0aGUgY3VycmVudGx5IGNhY2hlZCBvbmUgaXNuJ3QgY29ycmVjdClcblx0XHRcdFx0XHRcdFx0aWYgKHYgPiB0aGlzLl9sMiAmJiBpIDwgc2VnbWVudHMgLSAxKSB7XG5cdFx0XHRcdFx0XHRcdFx0bCA9IHNlZ21lbnRzIC0gMTtcblx0XHRcdFx0XHRcdFx0XHR3aGlsZSAoaSA8IGwgJiYgKHRoaXMuX2wyID0gbGVuZ3Roc1srK2ldKSA8PSB2KSB7XHR9XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5fbDEgPSBsZW5ndGhzW2ktMV07XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5fbGkgPSBpO1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuX2N1clNlZyA9IGN1clNlZyA9IHRoaXMuX3NlZ21lbnRzW2ldO1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuX3MyID0gY3VyU2VnWyh0aGlzLl9zMSA9IHRoaXMuX3NpID0gMCldO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHYgPCB0aGlzLl9sMSAmJiBpID4gMCkge1xuXHRcdFx0XHRcdFx0XHRcdHdoaWxlIChpID4gMCAmJiAodGhpcy5fbDEgPSBsZW5ndGhzWy0taV0pID49IHYpIHsgfVxuXHRcdFx0XHRcdFx0XHRcdGlmIChpID09PSAwICYmIHYgPCB0aGlzLl9sMSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5fbDEgPSAwO1xuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRpKys7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuX2wyID0gbGVuZ3Roc1tpXTtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLl9saSA9IGk7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5fY3VyU2VnID0gY3VyU2VnID0gdGhpcy5fc2VnbWVudHNbaV07XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5fczEgPSBjdXJTZWdbKHRoaXMuX3NpID0gY3VyU2VnLmxlbmd0aCAtIDEpIC0gMV0gfHwgMDtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLl9zMiA9IGN1clNlZ1t0aGlzLl9zaV07XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Y3VySW5kZXggPSBpO1xuXHRcdFx0XHRcdFx0XHQvL25vdyBmaW5kIHRoZSBhcHByb3ByaWF0ZSBzdWItc2VnbWVudCAod2Ugc3BsaXQgaXQgaW50byB0aGUgbnVtYmVyIG9mIHBpZWNlcyB0aGF0IHdhcyBkZWZpbmVkIGJ5IFwicHJlY2lzaW9uXCIgYW5kIG1lYXN1cmVkIGVhY2ggb25lKVxuXHRcdFx0XHRcdFx0XHR2IC09IHRoaXMuX2wxO1xuXHRcdFx0XHRcdFx0XHRpID0gdGhpcy5fc2k7XG5cdFx0XHRcdFx0XHRcdGlmICh2ID4gdGhpcy5fczIgJiYgaSA8IGN1clNlZy5sZW5ndGggLSAxKSB7XG5cdFx0XHRcdFx0XHRcdFx0bCA9IGN1clNlZy5sZW5ndGggLSAxO1xuXHRcdFx0XHRcdFx0XHRcdHdoaWxlIChpIDwgbCAmJiAodGhpcy5fczIgPSBjdXJTZWdbKytpXSkgPD0gdikge1x0fVxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuX3MxID0gY3VyU2VnW2ktMV07XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5fc2kgPSBpO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHYgPCB0aGlzLl9zMSAmJiBpID4gMCkge1xuXHRcdFx0XHRcdFx0XHRcdHdoaWxlIChpID4gMCAmJiAodGhpcy5fczEgPSBjdXJTZWdbLS1pXSkgPj0gdikge1x0fVxuXHRcdFx0XHRcdFx0XHRcdGlmIChpID09PSAwICYmIHYgPCB0aGlzLl9zMSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5fczEgPSAwO1xuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRpKys7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuX3MyID0gY3VyU2VnW2ldO1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuX3NpID0gaTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR0ID0gKGkgKyAodiAtIHRoaXMuX3MxKSAvICh0aGlzLl9zMiAtIHRoaXMuX3MxKSkgKiB0aGlzLl9wcmVjO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aW52ID0gMSAtIHQ7XG5cblx0XHRcdFx0XHRcdGkgPSB0aGlzLl9wcm9wcy5sZW5ndGg7XG5cdFx0XHRcdFx0XHR3aGlsZSAoLS1pID4gLTEpIHtcblx0XHRcdFx0XHRcdFx0cCA9IHRoaXMuX3Byb3BzW2ldO1xuXHRcdFx0XHRcdFx0XHRiID0gdGhpcy5fYmV6aWVyc1twXVtjdXJJbmRleF07XG5cdFx0XHRcdFx0XHRcdHZhbCA9ICh0ICogdCAqIGIuZGEgKyAzICogaW52ICogKHQgKiBiLmNhICsgaW52ICogYi5iYSkpICogdCArIGIuYTtcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuX3JvdW5kW3BdKSB7XG5cdFx0XHRcdFx0XHRcdFx0dmFsID0gTWF0aC5yb3VuZCh2YWwpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGlmIChmdW5jW3BdKSB7XG5cdFx0XHRcdFx0XHRcdFx0dGFyZ2V0W3BdKHZhbCk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0dGFyZ2V0W3BdID0gdmFsO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGlmICh0aGlzLl9hdXRvUm90YXRlKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBhciA9IHRoaXMuX2F1dG9Sb3RhdGUsXG5cdFx0XHRcdFx0XHRcdFx0YjIsIHgxLCB5MSwgeDIsIHkyLCBhZGQsIGNvbnY7XG5cdFx0XHRcdFx0XHRcdGkgPSBhci5sZW5ndGg7XG5cdFx0XHRcdFx0XHRcdHdoaWxlICgtLWkgPiAtMSkge1xuXHRcdFx0XHRcdFx0XHRcdHAgPSBhcltpXVsyXTtcblx0XHRcdFx0XHRcdFx0XHRhZGQgPSBhcltpXVszXSB8fCAwO1xuXHRcdFx0XHRcdFx0XHRcdGNvbnYgPSAoYXJbaV1bNF0gPT09IHRydWUpID8gMSA6IF9SQUQyREVHO1xuXHRcdFx0XHRcdFx0XHRcdGIgPSB0aGlzLl9iZXppZXJzW2FyW2ldWzBdXTtcblx0XHRcdFx0XHRcdFx0XHRiMiA9IHRoaXMuX2JlemllcnNbYXJbaV1bMV1dO1xuXG5cdFx0XHRcdFx0XHRcdFx0aWYgKGIgJiYgYjIpIHsgLy9pbiBjYXNlIG9uZSBvZiB0aGUgcHJvcGVydGllcyBnb3Qgb3ZlcndyaXR0ZW4uXG5cdFx0XHRcdFx0XHRcdFx0XHRiID0gYltjdXJJbmRleF07XG5cdFx0XHRcdFx0XHRcdFx0XHRiMiA9IGIyW2N1ckluZGV4XTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0eDEgPSBiLmEgKyAoYi5iIC0gYi5hKSAqIHQ7XG5cdFx0XHRcdFx0XHRcdFx0XHR4MiA9IGIuYiArIChiLmMgLSBiLmIpICogdDtcblx0XHRcdFx0XHRcdFx0XHRcdHgxICs9ICh4MiAtIHgxKSAqIHQ7XG5cdFx0XHRcdFx0XHRcdFx0XHR4MiArPSAoKGIuYyArIChiLmQgLSBiLmMpICogdCkgLSB4MikgKiB0O1xuXG5cdFx0XHRcdFx0XHRcdFx0XHR5MSA9IGIyLmEgKyAoYjIuYiAtIGIyLmEpICogdDtcblx0XHRcdFx0XHRcdFx0XHRcdHkyID0gYjIuYiArIChiMi5jIC0gYjIuYikgKiB0O1xuXHRcdFx0XHRcdFx0XHRcdFx0eTEgKz0gKHkyIC0geTEpICogdDtcblx0XHRcdFx0XHRcdFx0XHRcdHkyICs9ICgoYjIuYyArIChiMi5kIC0gYjIuYykgKiB0KSAtIHkyKSAqIHQ7XG5cblx0XHRcdFx0XHRcdFx0XHRcdHZhbCA9IG5vdFN0YXJ0ID8gTWF0aC5hdGFuMih5MiAtIHkxLCB4MiAtIHgxKSAqIGNvbnYgKyBhZGQgOiB0aGlzLl9pbml0aWFsUm90YXRpb25zW2ldO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoZnVuY1twXSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0YXJnZXRbcF0odmFsKTtcblx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRhcmdldFtwXSA9IHZhbDtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHR9KSxcblx0XHRcdHAgPSBCZXppZXJQbHVnaW4ucHJvdG90eXBlO1xuXG5cblx0XHRCZXppZXJQbHVnaW4uYmV6aWVyVGhyb3VnaCA9IGJlemllclRocm91Z2g7XG5cdFx0QmV6aWVyUGx1Z2luLmN1YmljVG9RdWFkcmF0aWMgPSBjdWJpY1RvUXVhZHJhdGljO1xuXHRcdEJlemllclBsdWdpbi5fYXV0b0NTUyA9IHRydWU7IC8vaW5kaWNhdGVzIHRoYXQgdGhpcyBwbHVnaW4gY2FuIGJlIGluc2VydGVkIGludG8gdGhlIFwiY3NzXCIgb2JqZWN0IHVzaW5nIHRoZSBhdXRvQ1NTIGZlYXR1cmUgb2YgVHdlZW5MaXRlXG5cdFx0QmV6aWVyUGx1Z2luLnF1YWRyYXRpY1RvQ3ViaWMgPSBmdW5jdGlvbihhLCBiLCBjKSB7XG5cdFx0XHRyZXR1cm4gbmV3IFNlZ21lbnQoYSwgKDIgKiBiICsgYSkgLyAzLCAoMiAqIGIgKyBjKSAvIDMsIGMpO1xuXHRcdH07XG5cblx0XHRCZXppZXJQbHVnaW4uX2Nzc1JlZ2lzdGVyID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgQ1NTUGx1Z2luID0gX2dsb2JhbHMuQ1NTUGx1Z2luO1xuXHRcdFx0aWYgKCFDU1NQbHVnaW4pIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dmFyIF9pbnRlcm5hbHMgPSBDU1NQbHVnaW4uX2ludGVybmFscyxcblx0XHRcdFx0X3BhcnNlVG9Qcm94eSA9IF9pbnRlcm5hbHMuX3BhcnNlVG9Qcm94eSxcblx0XHRcdFx0X3NldFBsdWdpblJhdGlvID0gX2ludGVybmFscy5fc2V0UGx1Z2luUmF0aW8sXG5cdFx0XHRcdENTU1Byb3BUd2VlbiA9IF9pbnRlcm5hbHMuQ1NTUHJvcFR3ZWVuO1xuXHRcdFx0X2ludGVybmFscy5fcmVnaXN0ZXJDb21wbGV4U3BlY2lhbFByb3AoXCJiZXppZXJcIiwge3BhcnNlcjpmdW5jdGlvbih0LCBlLCBwcm9wLCBjc3NwLCBwdCwgcGx1Z2luKSB7XG5cdFx0XHRcdGlmIChlIGluc3RhbmNlb2YgQXJyYXkpIHtcblx0XHRcdFx0XHRlID0ge3ZhbHVlczplfTtcblx0XHRcdFx0fVxuXHRcdFx0XHRwbHVnaW4gPSBuZXcgQmV6aWVyUGx1Z2luKCk7XG5cdFx0XHRcdHZhciB2YWx1ZXMgPSBlLnZhbHVlcyxcblx0XHRcdFx0XHRsID0gdmFsdWVzLmxlbmd0aCAtIDEsXG5cdFx0XHRcdFx0cGx1Z2luVmFsdWVzID0gW10sXG5cdFx0XHRcdFx0diA9IHt9LFxuXHRcdFx0XHRcdGksIHAsIGRhdGE7XG5cdFx0XHRcdGlmIChsIDwgMCkge1xuXHRcdFx0XHRcdHJldHVybiBwdDtcblx0XHRcdFx0fVxuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDw9IGw7IGkrKykge1xuXHRcdFx0XHRcdGRhdGEgPSBfcGFyc2VUb1Byb3h5KHQsIHZhbHVlc1tpXSwgY3NzcCwgcHQsIHBsdWdpbiwgKGwgIT09IGkpKTtcblx0XHRcdFx0XHRwbHVnaW5WYWx1ZXNbaV0gPSBkYXRhLmVuZDtcblx0XHRcdFx0fVxuXHRcdFx0XHRmb3IgKHAgaW4gZSkge1xuXHRcdFx0XHRcdHZbcF0gPSBlW3BdOyAvL2R1cGxpY2F0ZSB0aGUgdmFycyBvYmplY3QgYmVjYXVzZSB3ZSBuZWVkIHRvIGFsdGVyIHNvbWUgdGhpbmdzIHdoaWNoIHdvdWxkIGNhdXNlIHByb2JsZW1zIGlmIHRoZSB1c2VyIHBsYW5zIHRvIHJldXNlIHRoZSBzYW1lIHZhcnMgb2JqZWN0IGZvciBhbm90aGVyIHR3ZWVuLlxuXHRcdFx0XHR9XG5cdFx0XHRcdHYudmFsdWVzID0gcGx1Z2luVmFsdWVzO1xuXHRcdFx0XHRwdCA9IG5ldyBDU1NQcm9wVHdlZW4odCwgXCJiZXppZXJcIiwgMCwgMCwgZGF0YS5wdCwgMik7XG5cdFx0XHRcdHB0LmRhdGEgPSBkYXRhO1xuXHRcdFx0XHRwdC5wbHVnaW4gPSBwbHVnaW47XG5cdFx0XHRcdHB0LnNldFJhdGlvID0gX3NldFBsdWdpblJhdGlvO1xuXHRcdFx0XHRpZiAodi5hdXRvUm90YXRlID09PSAwKSB7XG5cdFx0XHRcdFx0di5hdXRvUm90YXRlID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodi5hdXRvUm90YXRlICYmICEodi5hdXRvUm90YXRlIGluc3RhbmNlb2YgQXJyYXkpKSB7XG5cdFx0XHRcdFx0aSA9ICh2LmF1dG9Sb3RhdGUgPT09IHRydWUpID8gMCA6IE51bWJlcih2LmF1dG9Sb3RhdGUpO1xuXHRcdFx0XHRcdHYuYXV0b1JvdGF0ZSA9IChkYXRhLmVuZC5sZWZ0ICE9IG51bGwpID8gW1tcImxlZnRcIixcInRvcFwiLFwicm90YXRpb25cIixpLGZhbHNlXV0gOiAoZGF0YS5lbmQueCAhPSBudWxsKSA/IFtbXCJ4XCIsXCJ5XCIsXCJyb3RhdGlvblwiLGksZmFsc2VdXSA6IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh2LmF1dG9Sb3RhdGUpIHtcblx0XHRcdFx0XHRpZiAoIWNzc3AuX3RyYW5zZm9ybSkge1xuXHRcdFx0XHRcdFx0Y3NzcC5fZW5hYmxlVHJhbnNmb3JtcyhmYWxzZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGRhdGEuYXV0b1JvdGF0ZSA9IGNzc3AuX3RhcmdldC5fZ3NUcmFuc2Zvcm07XG5cdFx0XHRcdH1cblx0XHRcdFx0cGx1Z2luLl9vbkluaXRUd2VlbihkYXRhLnByb3h5LCB2LCBjc3NwLl90d2Vlbik7XG5cdFx0XHRcdHJldHVybiBwdDtcblx0XHRcdH19KTtcblx0XHR9O1xuXG5cdFx0cC5fcm91bmRQcm9wcyA9IGZ1bmN0aW9uKGxvb2t1cCwgdmFsdWUpIHtcblx0XHRcdHZhciBvcCA9IHRoaXMuX292ZXJ3cml0ZVByb3BzLFxuXHRcdFx0XHRpID0gb3AubGVuZ3RoO1xuXHRcdFx0d2hpbGUgKC0taSA+IC0xKSB7XG5cdFx0XHRcdGlmIChsb29rdXBbb3BbaV1dIHx8IGxvb2t1cC5iZXppZXIgfHwgbG9va3VwLmJlemllclRocm91Z2gpIHtcblx0XHRcdFx0XHR0aGlzLl9yb3VuZFtvcFtpXV0gPSB2YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRwLl9raWxsID0gZnVuY3Rpb24obG9va3VwKSB7XG5cdFx0XHR2YXIgYSA9IHRoaXMuX3Byb3BzLFxuXHRcdFx0XHRwLCBpO1xuXHRcdFx0Zm9yIChwIGluIHRoaXMuX2JlemllcnMpIHtcblx0XHRcdFx0aWYgKHAgaW4gbG9va3VwKSB7XG5cdFx0XHRcdFx0ZGVsZXRlIHRoaXMuX2JlemllcnNbcF07XG5cdFx0XHRcdFx0ZGVsZXRlIHRoaXMuX2Z1bmNbcF07XG5cdFx0XHRcdFx0aSA9IGEubGVuZ3RoO1xuXHRcdFx0XHRcdHdoaWxlICgtLWkgPiAtMSkge1xuXHRcdFx0XHRcdFx0aWYgKGFbaV0gPT09IHApIHtcblx0XHRcdFx0XHRcdFx0YS5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcy5fc3VwZXIuX2tpbGwuY2FsbCh0aGlzLCBsb29rdXApO1xuXHRcdH07XG5cblx0fSgpKTtcblxuXG5cblxuXG5cblx0XG5cdFxuXHRcblx0XG5cdFxuXHRcblx0XG5cdFxuLypcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENTU1BsdWdpblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cdF9nc1Njb3BlLl9nc0RlZmluZShcInBsdWdpbnMuQ1NTUGx1Z2luXCIsIFtcInBsdWdpbnMuVHdlZW5QbHVnaW5cIixcIlR3ZWVuTGl0ZVwiXSwgZnVuY3Rpb24oVHdlZW5QbHVnaW4sIFR3ZWVuTGl0ZSkge1xuXG5cdFx0LyoqIEBjb25zdHJ1Y3RvciAqKi9cblx0XHR2YXIgQ1NTUGx1Z2luID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFR3ZWVuUGx1Z2luLmNhbGwodGhpcywgXCJjc3NcIik7XG5cdFx0XHRcdHRoaXMuX292ZXJ3cml0ZVByb3BzLmxlbmd0aCA9IDA7XG5cdFx0XHRcdHRoaXMuc2V0UmF0aW8gPSBDU1NQbHVnaW4ucHJvdG90eXBlLnNldFJhdGlvOyAvL3NwZWVkIG9wdGltaXphdGlvbiAoYXZvaWQgcHJvdG90eXBlIGxvb2t1cCBvbiB0aGlzIFwiaG90XCIgbWV0aG9kKVxuXHRcdFx0fSxcblx0XHRcdF9nbG9iYWxzID0gX2dzU2NvcGUuX2dzRGVmaW5lLmdsb2JhbHMsXG5cdFx0XHRfaGFzUHJpb3JpdHksIC8vdHVybnMgdHJ1ZSB3aGVuZXZlciBhIENTU1Byb3BUd2VlbiBpbnN0YW5jZSBpcyBjcmVhdGVkIHRoYXQgaGFzIGEgcHJpb3JpdHkgb3RoZXIgdGhhbiAwLiBUaGlzIGhlbHBzIHVzIGRpc2Nlcm4gd2hldGhlciBvciBub3Qgd2Ugc2hvdWxkIHNwZW5kIHRoZSB0aW1lIG9yZ2FuaXppbmcgdGhlIGxpbmtlZCBsaXN0IG9yIG5vdCBhZnRlciBhIENTU1BsdWdpbidzIF9vbkluaXRUd2VlbigpIG1ldGhvZCBpcyBjYWxsZWQuXG5cdFx0XHRfc3VmZml4TWFwLCAvL3dlIHNldCB0aGlzIGluIF9vbkluaXRUd2VlbigpIGVhY2ggdGltZSBhcyBhIHdheSB0byBoYXZlIGEgcGVyc2lzdGVudCB2YXJpYWJsZSB3ZSBjYW4gdXNlIGluIG90aGVyIG1ldGhvZHMgbGlrZSBfcGFyc2UoKSB3aXRob3V0IGhhdmluZyB0byBwYXNzIGl0IGFyb3VuZCBhcyBhIHBhcmFtZXRlciBhbmQgd2Uga2VlcCBfcGFyc2UoKSBkZWNvdXBsZWQgZnJvbSBhIHBhcnRpY3VsYXIgQ1NTUGx1Z2luIGluc3RhbmNlXG5cdFx0XHRfY3MsIC8vY29tcHV0ZWQgc3R5bGUgKHdlIHN0b3JlIHRoaXMgaW4gYSBzaGFyZWQgdmFyaWFibGUgdG8gY29uc2VydmUgbWVtb3J5IGFuZCBtYWtlIG1pbmlmaWNhdGlvbiB0aWdodGVyXG5cdFx0XHRfb3ZlcndyaXRlUHJvcHMsIC8vYWxpYXMgdG8gdGhlIGN1cnJlbnRseSBpbnN0YW50aWF0aW5nIENTU1BsdWdpbidzIF9vdmVyd3JpdGVQcm9wcyBhcnJheS4gV2UgdXNlIHRoaXMgY2xvc3VyZSBpbiBvcmRlciB0byBhdm9pZCBoYXZpbmcgdG8gcGFzcyBhIHJlZmVyZW5jZSBhcm91bmQgZnJvbSBtZXRob2QgdG8gbWV0aG9kIGFuZCBhaWQgaW4gbWluaWZpY2F0aW9uLlxuXHRcdFx0X3NwZWNpYWxQcm9wcyA9IHt9LFxuXHRcdFx0cCA9IENTU1BsdWdpbi5wcm90b3R5cGUgPSBuZXcgVHdlZW5QbHVnaW4oXCJjc3NcIik7XG5cblx0XHRwLmNvbnN0cnVjdG9yID0gQ1NTUGx1Z2luO1xuXHRcdENTU1BsdWdpbi52ZXJzaW9uID0gXCIxLjE2LjFcIjtcblx0XHRDU1NQbHVnaW4uQVBJID0gMjtcblx0XHRDU1NQbHVnaW4uZGVmYXVsdFRyYW5zZm9ybVBlcnNwZWN0aXZlID0gMDtcblx0XHRDU1NQbHVnaW4uZGVmYXVsdFNrZXdUeXBlID0gXCJjb21wZW5zYXRlZFwiO1xuXHRcdHAgPSBcInB4XCI7IC8vd2UnbGwgcmV1c2UgdGhlIFwicFwiIHZhcmlhYmxlIHRvIGtlZXAgZmlsZSBzaXplIGRvd25cblx0XHRDU1NQbHVnaW4uc3VmZml4TWFwID0ge3RvcDpwLCByaWdodDpwLCBib3R0b206cCwgbGVmdDpwLCB3aWR0aDpwLCBoZWlnaHQ6cCwgZm9udFNpemU6cCwgcGFkZGluZzpwLCBtYXJnaW46cCwgcGVyc3BlY3RpdmU6cCwgbGluZUhlaWdodDpcIlwifTtcblxuXG5cdFx0dmFyIF9udW1FeHAgPSAvKD86XFxkfFxcLVxcZHxcXC5cXGR8XFwtXFwuXFxkKSsvZyxcblx0XHRcdF9yZWxOdW1FeHAgPSAvKD86XFxkfFxcLVxcZHxcXC5cXGR8XFwtXFwuXFxkfFxcKz1cXGR8XFwtPVxcZHxcXCs9LlxcZHxcXC09XFwuXFxkKSsvZyxcblx0XHRcdF92YWx1ZXNFeHAgPSAvKD86XFwrPXxcXC09fFxcLXxcXGIpW1xcZFxcLVxcLl0rW2EtekEtWjAtOV0qKD86JXxcXGIpL2dpLCAvL2ZpbmRzIGFsbCB0aGUgdmFsdWVzIHRoYXQgYmVnaW4gd2l0aCBudW1iZXJzIG9yICs9IG9yIC09IGFuZCB0aGVuIGEgbnVtYmVyLiBJbmNsdWRlcyBzdWZmaXhlcy4gV2UgdXNlIHRoaXMgdG8gc3BsaXQgY29tcGxleCB2YWx1ZXMgYXBhcnQgbGlrZSBcIjFweCA1cHggMjBweCByZ2IoMjU1LDEwMiw1MSlcIlxuXHRcdFx0X05hTkV4cCA9IC8oPyFbKy1dP1xcZCpcXC4/XFxkK3xbKy1dfGVbKy1dXFxkKylbXjAtOV0vZywgLy9hbHNvIGFsbG93cyBzY2llbnRpZmljIG5vdGF0aW9uIGFuZCBkb2Vzbid0IGtpbGwgdGhlIGxlYWRpbmcgLS8rIGluIC09IGFuZCArPVxuXHRcdFx0X3N1ZmZpeEV4cCA9IC8oPzpcXGR8XFwtfFxcK3w9fCN8XFwuKSovZyxcblx0XHRcdF9vcGFjaXR5RXhwID0gL29wYWNpdHkgKj0gKihbXildKikvaSxcblx0XHRcdF9vcGFjaXR5VmFsRXhwID0gL29wYWNpdHk6KFteO10qKS9pLFxuXHRcdFx0X2FscGhhRmlsdGVyRXhwID0gL2FscGhhXFwob3BhY2l0eSAqPS4rP1xcKS9pLFxuXHRcdFx0X3JnYmhzbEV4cCA9IC9eKHJnYnxoc2wpLyxcblx0XHRcdF9jYXBzRXhwID0gLyhbQS1aXSkvZyxcblx0XHRcdF9jYW1lbEV4cCA9IC8tKFthLXpdKS9naSxcblx0XHRcdF91cmxFeHAgPSAvKF4oPzp1cmxcXChcXFwifHVybFxcKCkpfCg/OihcXFwiXFwpKSR8XFwpJCkvZ2ksIC8vZm9yIHB1bGxpbmcgb3V0IHVybHMgZnJvbSB1cmwoLi4uKSBvciB1cmwoXCIuLi5cIikgc3RyaW5ncyAoc29tZSBicm93c2VycyB3cmFwIHVybHMgaW4gcXVvdGVzLCBzb21lIGRvbid0IHdoZW4gcmVwb3J0aW5nIHRoaW5ncyBsaWtlIGJhY2tncm91bmRJbWFnZSlcblx0XHRcdF9jYW1lbEZ1bmMgPSBmdW5jdGlvbihzLCBnKSB7IHJldHVybiBnLnRvVXBwZXJDYXNlKCk7IH0sXG5cdFx0XHRfaG9yaXpFeHAgPSAvKD86TGVmdHxSaWdodHxXaWR0aCkvaSxcblx0XHRcdF9pZUdldE1hdHJpeEV4cCA9IC8oTTExfE0xMnxNMjF8TTIyKT1bXFxkXFwtXFwuZV0rL2dpLFxuXHRcdFx0X2llU2V0TWF0cml4RXhwID0gL3Byb2dpZFxcOkRYSW1hZ2VUcmFuc2Zvcm1cXC5NaWNyb3NvZnRcXC5NYXRyaXhcXCguKz9cXCkvaSxcblx0XHRcdF9jb21tYXNPdXRzaWRlUGFyZW5FeHAgPSAvLCg/PVteXFwpXSooPzpcXCh8JCkpL2dpLCAvL2ZpbmRzIGFueSBjb21tYXMgdGhhdCBhcmUgbm90IHdpdGhpbiBwYXJlbnRoZXNpc1xuXHRcdFx0X0RFRzJSQUQgPSBNYXRoLlBJIC8gMTgwLFxuXHRcdFx0X1JBRDJERUcgPSAxODAgLyBNYXRoLlBJLFxuXHRcdFx0X2ZvcmNlUFQgPSB7fSxcblx0XHRcdF9kb2MgPSBkb2N1bWVudCxcblx0XHRcdF9jcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24odHlwZSkge1xuXHRcdFx0XHRyZXR1cm4gX2RvYy5jcmVhdGVFbGVtZW50TlMgPyBfZG9jLmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIiwgdHlwZSkgOiBfZG9jLmNyZWF0ZUVsZW1lbnQodHlwZSk7XG5cdFx0XHR9LFxuXHRcdFx0X3RlbXBEaXYgPSBfY3JlYXRlRWxlbWVudChcImRpdlwiKSxcblx0XHRcdF90ZW1wSW1nID0gX2NyZWF0ZUVsZW1lbnQoXCJpbWdcIiksXG5cdFx0XHRfaW50ZXJuYWxzID0gQ1NTUGx1Z2luLl9pbnRlcm5hbHMgPSB7X3NwZWNpYWxQcm9wczpfc3BlY2lhbFByb3BzfSwgLy9wcm92aWRlcyBhIGhvb2sgdG8gYSBmZXcgaW50ZXJuYWwgbWV0aG9kcyB0aGF0IHdlIG5lZWQgdG8gYWNjZXNzIGZyb20gaW5zaWRlIG90aGVyIHBsdWdpbnNcblx0XHRcdF9hZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQsXG5cdFx0XHRfYXV0b1JvdW5kLFxuXHRcdFx0X3JlcVNhZmFyaUZpeCwgLy93ZSB3b24ndCBhcHBseSB0aGUgU2FmYXJpIHRyYW5zZm9ybSBmaXggdW50aWwgd2UgYWN0dWFsbHkgY29tZSBhY3Jvc3MgYSB0d2VlbiB0aGF0IGFmZmVjdHMgYSB0cmFuc2Zvcm0gcHJvcGVydHkgKHRvIG1haW50YWluIGJlc3QgcGVyZm9ybWFuY2UpLlxuXG5cdFx0XHRfaXNTYWZhcmksXG5cdFx0XHRfaXNGaXJlZm94LCAvL0ZpcmVmb3ggaGFzIGEgYnVnIHRoYXQgY2F1c2VzIDNEIHRyYW5zZm9ybWVkIGVsZW1lbnRzIHRvIHJhbmRvbWx5IGRpc2FwcGVhciB1bmxlc3MgYSByZXBhaW50IGlzIGZvcmNlZCBhZnRlciBlYWNoIHVwZGF0ZSBvbiBlYWNoIGVsZW1lbnQuXG5cdFx0XHRfaXNTYWZhcmlMVDYsIC8vU2FmYXJpIChhbmQgQW5kcm9pZCA0IHdoaWNoIHVzZXMgYSBmbGF2b3Igb2YgU2FmYXJpKSBoYXMgYSBidWcgdGhhdCBwcmV2ZW50cyBjaGFuZ2VzIHRvIFwidG9wXCIgYW5kIFwibGVmdFwiIHByb3BlcnRpZXMgZnJvbSByZW5kZXJpbmcgcHJvcGVybHkgaWYgY2hhbmdlZCBvbiB0aGUgc2FtZSBmcmFtZSBhcyBhIHRyYW5zZm9ybSBVTkxFU1Mgd2Ugc2V0IHRoZSBlbGVtZW50J3MgV2Via2l0QmFja2ZhY2VWaXNpYmlsaXR5IHRvIGhpZGRlbiAod2VpcmQsIEkga25vdykuIERvaW5nIHRoaXMgZm9yIEFuZHJvaWQgMyBhbmQgZWFybGllciBzZWVtcyB0byBhY3R1YWxseSBjYXVzZSBvdGhlciBwcm9ibGVtcywgdGhvdWdoIChmdW4hKVxuXHRcdFx0X2llVmVycyxcblx0XHRcdF9zdXBwb3J0c09wYWNpdHkgPSAoZnVuY3Rpb24oKSB7IC8vd2Ugc2V0IF9pc1NhZmFyaSwgX2llVmVycywgX2lzRmlyZWZveCwgYW5kIF9zdXBwb3J0c09wYWNpdHkgYWxsIGluIG9uZSBmdW5jdGlvbiBoZXJlIHRvIHJlZHVjZSBmaWxlIHNpemUgc2xpZ2h0bHksIGVzcGVjaWFsbHkgaW4gdGhlIG1pbmlmaWVkIHZlcnNpb24uXG5cdFx0XHRcdHZhciBpID0gX2FnZW50LmluZGV4T2YoXCJBbmRyb2lkXCIpLFxuXHRcdFx0XHRcdGEgPSBfY3JlYXRlRWxlbWVudChcImFcIik7XG5cdFx0XHRcdF9pc1NhZmFyaSA9IChfYWdlbnQuaW5kZXhPZihcIlNhZmFyaVwiKSAhPT0gLTEgJiYgX2FnZW50LmluZGV4T2YoXCJDaHJvbWVcIikgPT09IC0xICYmIChpID09PSAtMSB8fCBOdW1iZXIoX2FnZW50LnN1YnN0cihpKzgsIDEpKSA+IDMpKTtcblx0XHRcdFx0X2lzU2FmYXJpTFQ2ID0gKF9pc1NhZmFyaSAmJiAoTnVtYmVyKF9hZ2VudC5zdWJzdHIoX2FnZW50LmluZGV4T2YoXCJWZXJzaW9uL1wiKSs4LCAxKSkgPCA2KSk7XG5cdFx0XHRcdF9pc0ZpcmVmb3ggPSAoX2FnZW50LmluZGV4T2YoXCJGaXJlZm94XCIpICE9PSAtMSk7XG5cdFx0XHRcdGlmICgoL01TSUUgKFswLTldezEsfVtcXC4wLTldezAsfSkvKS5leGVjKF9hZ2VudCkgfHwgKC9UcmlkZW50XFwvLipydjooWzAtOV17MSx9W1xcLjAtOV17MCx9KS8pLmV4ZWMoX2FnZW50KSkge1xuXHRcdFx0XHRcdF9pZVZlcnMgPSBwYXJzZUZsb2F0KCBSZWdFeHAuJDEgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIWEpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0YS5zdHlsZS5jc3NUZXh0ID0gXCJ0b3A6MXB4O29wYWNpdHk6LjU1O1wiO1xuXHRcdFx0XHRyZXR1cm4gL14wLjU1Ly50ZXN0KGEuc3R5bGUub3BhY2l0eSk7XG5cdFx0XHR9KCkpLFxuXHRcdFx0X2dldElFT3BhY2l0eSA9IGZ1bmN0aW9uKHYpIHtcblx0XHRcdFx0cmV0dXJuIChfb3BhY2l0eUV4cC50ZXN0KCAoKHR5cGVvZih2KSA9PT0gXCJzdHJpbmdcIikgPyB2IDogKHYuY3VycmVudFN0eWxlID8gdi5jdXJyZW50U3R5bGUuZmlsdGVyIDogdi5zdHlsZS5maWx0ZXIpIHx8IFwiXCIpICkgPyAoIHBhcnNlRmxvYXQoIFJlZ0V4cC4kMSApIC8gMTAwICkgOiAxKTtcblx0XHRcdH0sXG5cdFx0XHRfbG9nID0gZnVuY3Rpb24ocykgey8vZm9yIGxvZ2dpbmcgbWVzc2FnZXMsIGJ1dCBpbiBhIHdheSB0aGF0IHdvbid0IHRocm93IGVycm9ycyBpbiBvbGQgdmVyc2lvbnMgb2YgSUUuXG5cdFx0XHRcdGlmICh3aW5kb3cuY29uc29sZSkge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHMpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHRfcHJlZml4Q1NTID0gXCJcIiwgLy90aGUgbm9uLWNhbWVsQ2FzZSB2ZW5kb3IgcHJlZml4IGxpa2UgXCItby1cIiwgXCItbW96LVwiLCBcIi1tcy1cIiwgb3IgXCItd2Via2l0LVwiXG5cdFx0XHRfcHJlZml4ID0gXCJcIiwgLy9jYW1lbENhc2UgdmVuZG9yIHByZWZpeCBsaWtlIFwiT1wiLCBcIm1zXCIsIFwiV2Via2l0XCIsIG9yIFwiTW96XCIuXG5cblx0XHRcdC8vIEBwcml2YXRlIGZlZWQgaW4gYSBjYW1lbENhc2UgcHJvcGVydHkgbmFtZSBsaWtlIFwidHJhbnNmb3JtXCIgYW5kIGl0IHdpbGwgY2hlY2sgdG8gc2VlIGlmIGl0IGlzIHZhbGlkIGFzLWlzIG9yIGlmIGl0IG5lZWRzIGEgdmVuZG9yIHByZWZpeC4gSXQgcmV0dXJucyB0aGUgY29ycmVjdGVkIGNhbWVsQ2FzZSBwcm9wZXJ0eSBuYW1lIChpLmUuIFwiV2Via2l0VHJhbnNmb3JtXCIgb3IgXCJNb3pUcmFuc2Zvcm1cIiBvciBcInRyYW5zZm9ybVwiIG9yIG51bGwgaWYgbm8gc3VjaCBwcm9wZXJ0eSBpcyBmb3VuZCwgbGlrZSBpZiB0aGUgYnJvd3NlciBpcyBJRTggb3IgYmVmb3JlLCBcInRyYW5zZm9ybVwiIHdvbid0IGJlIGZvdW5kIGF0IGFsbClcblx0XHRcdF9jaGVja1Byb3BQcmVmaXggPSBmdW5jdGlvbihwLCBlKSB7XG5cdFx0XHRcdGUgPSBlIHx8IF90ZW1wRGl2O1xuXHRcdFx0XHR2YXIgcyA9IGUuc3R5bGUsXG5cdFx0XHRcdFx0YSwgaTtcblx0XHRcdFx0aWYgKHNbcF0gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdHJldHVybiBwO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHAgPSBwLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcC5zdWJzdHIoMSk7XG5cdFx0XHRcdGEgPSBbXCJPXCIsXCJNb3pcIixcIm1zXCIsXCJNc1wiLFwiV2Via2l0XCJdO1xuXHRcdFx0XHRpID0gNTtcblx0XHRcdFx0d2hpbGUgKC0taSA+IC0xICYmIHNbYVtpXStwXSA9PT0gdW5kZWZpbmVkKSB7IH1cblx0XHRcdFx0aWYgKGkgPj0gMCkge1xuXHRcdFx0XHRcdF9wcmVmaXggPSAoaSA9PT0gMykgPyBcIm1zXCIgOiBhW2ldO1xuXHRcdFx0XHRcdF9wcmVmaXhDU1MgPSBcIi1cIiArIF9wcmVmaXgudG9Mb3dlckNhc2UoKSArIFwiLVwiO1xuXHRcdFx0XHRcdHJldHVybiBfcHJlZml4ICsgcDtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH0sXG5cblx0XHRcdF9nZXRDb21wdXRlZFN0eWxlID0gX2RvYy5kZWZhdWx0VmlldyA/IF9kb2MuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZSA6IGZ1bmN0aW9uKCkge30sXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogQHByaXZhdGUgUmV0dXJucyB0aGUgY3NzIHN0eWxlIGZvciBhIHBhcnRpY3VsYXIgcHJvcGVydHkgb2YgYW4gZWxlbWVudC4gRm9yIGV4YW1wbGUsIHRvIGdldCB3aGF0ZXZlciB0aGUgY3VycmVudCBcImxlZnRcIiBjc3MgdmFsdWUgZm9yIGFuIGVsZW1lbnQgd2l0aCBhbiBJRCBvZiBcIm15RWxlbWVudFwiLCB5b3UgY291bGQgZG86XG5cdFx0XHQgKiB2YXIgY3VycmVudExlZnQgPSBDU1NQbHVnaW4uZ2V0U3R5bGUoIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlFbGVtZW50XCIpLCBcImxlZnRcIik7XG5cdFx0XHQgKlxuXHRcdFx0ICogQHBhcmFtIHshT2JqZWN0fSB0IFRhcmdldCBlbGVtZW50IHdob3NlIHN0eWxlIHByb3BlcnR5IHlvdSB3YW50IHRvIHF1ZXJ5XG5cdFx0XHQgKiBAcGFyYW0geyFzdHJpbmd9IHAgUHJvcGVydHkgbmFtZSAobGlrZSBcImxlZnRcIiBvciBcInRvcFwiIG9yIFwibWFyZ2luVG9wXCIsIGV0Yy4pXG5cdFx0XHQgKiBAcGFyYW0ge09iamVjdD19IGNzIENvbXB1dGVkIHN0eWxlIG9iamVjdC4gVGhpcyBqdXN0IHByb3ZpZGVzIGEgd2F5IHRvIHNwZWVkIHByb2Nlc3NpbmcgaWYgeW91J3JlIGdvaW5nIHRvIGdldCBzZXZlcmFsIHByb3BlcnRpZXMgb24gdGhlIHNhbWUgZWxlbWVudCBpbiBxdWljayBzdWNjZXNzaW9uIC0geW91IGNhbiByZXVzZSB0aGUgcmVzdWx0IG9mIHRoZSBnZXRDb21wdXRlZFN0eWxlKCkgY2FsbC5cblx0XHRcdCAqIEBwYXJhbSB7Ym9vbGVhbj19IGNhbGMgSWYgdHJ1ZSwgdGhlIHZhbHVlIHdpbGwgbm90IGJlIHJlYWQgZGlyZWN0bHkgZnJvbSB0aGUgZWxlbWVudCdzIFwic3R5bGVcIiBwcm9wZXJ0eSAoaWYgaXQgZXhpc3RzIHRoZXJlKSwgYnV0IGluc3RlYWQgdGhlIGdldENvbXB1dGVkU3R5bGUoKSByZXN1bHQgd2lsbCBiZSB1c2VkLiBUaGlzIGNhbiBiZSB1c2VmdWwgd2hlbiB5b3Ugd2FudCB0byBlbnN1cmUgdGhhdCB0aGUgYnJvd3NlciBpdHNlbGYgaXMgaW50ZXJwcmV0aW5nIHRoZSB2YWx1ZS5cblx0XHRcdCAqIEBwYXJhbSB7c3RyaW5nPX0gZGZsdCBEZWZhdWx0IHZhbHVlIHRoYXQgc2hvdWxkIGJlIHJldHVybmVkIGluIHRoZSBwbGFjZSBvZiBudWxsLCBcIm5vbmVcIiwgXCJhdXRvXCIgb3IgXCJhdXRvIGF1dG9cIi5cblx0XHRcdCAqIEByZXR1cm4gez9zdHJpbmd9IFRoZSBjdXJyZW50IHByb3BlcnR5IHZhbHVlXG5cdFx0XHQgKi9cblx0XHRcdF9nZXRTdHlsZSA9IENTU1BsdWdpbi5nZXRTdHlsZSA9IGZ1bmN0aW9uKHQsIHAsIGNzLCBjYWxjLCBkZmx0KSB7XG5cdFx0XHRcdHZhciBydjtcblx0XHRcdFx0aWYgKCFfc3VwcG9ydHNPcGFjaXR5KSBpZiAocCA9PT0gXCJvcGFjaXR5XCIpIHsgLy9zZXZlcmFsIHZlcnNpb25zIG9mIElFIGRvbid0IHVzZSB0aGUgc3RhbmRhcmQgXCJvcGFjaXR5XCIgcHJvcGVydHkgLSB0aGV5IHVzZSB0aGluZ3MgbGlrZSBmaWx0ZXI6YWxwaGEob3BhY2l0eT01MCksIHNvIHdlIHBhcnNlIHRoYXQgaGVyZS5cblx0XHRcdFx0XHRyZXR1cm4gX2dldElFT3BhY2l0eSh0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIWNhbGMgJiYgdC5zdHlsZVtwXSkge1xuXHRcdFx0XHRcdHJ2ID0gdC5zdHlsZVtwXTtcblx0XHRcdFx0fSBlbHNlIGlmICgoY3MgPSBjcyB8fCBfZ2V0Q29tcHV0ZWRTdHlsZSh0KSkpIHtcblx0XHRcdFx0XHRydiA9IGNzW3BdIHx8IGNzLmdldFByb3BlcnR5VmFsdWUocCkgfHwgY3MuZ2V0UHJvcGVydHlWYWx1ZShwLnJlcGxhY2UoX2NhcHNFeHAsIFwiLSQxXCIpLnRvTG93ZXJDYXNlKCkpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHQuY3VycmVudFN0eWxlKSB7XG5cdFx0XHRcdFx0cnYgPSB0LmN1cnJlbnRTdHlsZVtwXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gKGRmbHQgIT0gbnVsbCAmJiAoIXJ2IHx8IHJ2ID09PSBcIm5vbmVcIiB8fCBydiA9PT0gXCJhdXRvXCIgfHwgcnYgPT09IFwiYXV0byBhdXRvXCIpKSA/IGRmbHQgOiBydjtcblx0XHRcdH0sXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogQHByaXZhdGUgUGFzcyB0aGUgdGFyZ2V0IGVsZW1lbnQsIHRoZSBwcm9wZXJ0eSBuYW1lLCB0aGUgbnVtZXJpYyB2YWx1ZSwgYW5kIHRoZSBzdWZmaXggKGxpa2UgXCIlXCIsIFwiZW1cIiwgXCJweFwiLCBldGMuKSBhbmQgaXQgd2lsbCBzcGl0IGJhY2sgdGhlIGVxdWl2YWxlbnQgcGl4ZWwgbnVtYmVyLlxuXHRcdFx0ICogQHBhcmFtIHshT2JqZWN0fSB0IFRhcmdldCBlbGVtZW50XG5cdFx0XHQgKiBAcGFyYW0geyFzdHJpbmd9IHAgUHJvcGVydHkgbmFtZSAobGlrZSBcImxlZnRcIiwgXCJ0b3BcIiwgXCJtYXJnaW5MZWZ0XCIsIGV0Yy4pXG5cdFx0XHQgKiBAcGFyYW0geyFudW1iZXJ9IHYgVmFsdWVcblx0XHRcdCAqIEBwYXJhbSB7c3RyaW5nPX0gc2Z4IFN1ZmZpeCAobGlrZSBcInB4XCIgb3IgXCIlXCIgb3IgXCJlbVwiKVxuXHRcdFx0ICogQHBhcmFtIHtib29sZWFuPX0gcmVjdXJzZSBJZiB0cnVlLCB0aGUgY2FsbCBpcyBhIHJlY3Vyc2l2ZSBvbmUuIEluIHNvbWUgYnJvd3NlcnMgKGxpa2UgSUU3LzgpLCBvY2Nhc2lvbmFsbHkgdGhlIHZhbHVlIGlzbid0IGFjY3VyYXRlbHkgcmVwb3J0ZWQgaW5pdGlhbGx5LCBidXQgaWYgd2UgcnVuIHRoZSBmdW5jdGlvbiBhZ2FpbiBpdCB3aWxsIHRha2UgZWZmZWN0LlxuXHRcdFx0ICogQHJldHVybiB7bnVtYmVyfSB2YWx1ZSBpbiBwaXhlbHNcblx0XHRcdCAqL1xuXHRcdFx0X2NvbnZlcnRUb1BpeGVscyA9IF9pbnRlcm5hbHMuY29udmVydFRvUGl4ZWxzID0gZnVuY3Rpb24odCwgcCwgdiwgc2Z4LCByZWN1cnNlKSB7XG5cdFx0XHRcdGlmIChzZnggPT09IFwicHhcIiB8fCAhc2Z4KSB7IHJldHVybiB2OyB9XG5cdFx0XHRcdGlmIChzZnggPT09IFwiYXV0b1wiIHx8ICF2KSB7IHJldHVybiAwOyB9XG5cdFx0XHRcdHZhciBob3JpeiA9IF9ob3JpekV4cC50ZXN0KHApLFxuXHRcdFx0XHRcdG5vZGUgPSB0LFxuXHRcdFx0XHRcdHN0eWxlID0gX3RlbXBEaXYuc3R5bGUsXG5cdFx0XHRcdFx0bmVnID0gKHYgPCAwKSxcblx0XHRcdFx0XHRwaXgsIGNhY2hlLCB0aW1lO1xuXHRcdFx0XHRpZiAobmVnKSB7XG5cdFx0XHRcdFx0diA9IC12O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChzZnggPT09IFwiJVwiICYmIHAuaW5kZXhPZihcImJvcmRlclwiKSAhPT0gLTEpIHtcblx0XHRcdFx0XHRwaXggPSAodiAvIDEwMCkgKiAoaG9yaXogPyB0LmNsaWVudFdpZHRoIDogdC5jbGllbnRIZWlnaHQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHN0eWxlLmNzc1RleHQgPSBcImJvcmRlcjowIHNvbGlkIHJlZDtwb3NpdGlvbjpcIiArIF9nZXRTdHlsZSh0LCBcInBvc2l0aW9uXCIpICsgXCI7bGluZS1oZWlnaHQ6MDtcIjtcblx0XHRcdFx0XHRpZiAoc2Z4ID09PSBcIiVcIiB8fCAhbm9kZS5hcHBlbmRDaGlsZCkge1xuXHRcdFx0XHRcdFx0bm9kZSA9IHQucGFyZW50Tm9kZSB8fCBfZG9jLmJvZHk7XG5cdFx0XHRcdFx0XHRjYWNoZSA9IG5vZGUuX2dzQ2FjaGU7XG5cdFx0XHRcdFx0XHR0aW1lID0gVHdlZW5MaXRlLnRpY2tlci5mcmFtZTtcblx0XHRcdFx0XHRcdGlmIChjYWNoZSAmJiBob3JpeiAmJiBjYWNoZS50aW1lID09PSB0aW1lKSB7IC8vcGVyZm9ybWFuY2Ugb3B0aW1pemF0aW9uOiB3ZSByZWNvcmQgdGhlIHdpZHRoIG9mIGVsZW1lbnRzIGFsb25nIHdpdGggdGhlIHRpY2tlciBmcmFtZSBzbyB0aGF0IHdlIGNhbiBxdWlja2x5IGdldCBpdCBhZ2FpbiBvbiB0aGUgc2FtZSB0aWNrIChzZWVtcyByZWxhdGl2ZWx5IHNhZmUgdG8gYXNzdW1lIGl0IHdvdWxkbid0IGNoYW5nZSBvbiB0aGUgc2FtZSB0aWNrKVxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gY2FjaGUud2lkdGggKiB2IC8gMTAwO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0c3R5bGVbKGhvcml6ID8gXCJ3aWR0aFwiIDogXCJoZWlnaHRcIildID0gdiArIHNmeDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0c3R5bGVbKGhvcml6ID8gXCJib3JkZXJMZWZ0V2lkdGhcIiA6IFwiYm9yZGVyVG9wV2lkdGhcIildID0gdiArIHNmeDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bm9kZS5hcHBlbmRDaGlsZChfdGVtcERpdik7XG5cdFx0XHRcdFx0cGl4ID0gcGFyc2VGbG9hdChfdGVtcERpdlsoaG9yaXogPyBcIm9mZnNldFdpZHRoXCIgOiBcIm9mZnNldEhlaWdodFwiKV0pO1xuXHRcdFx0XHRcdG5vZGUucmVtb3ZlQ2hpbGQoX3RlbXBEaXYpO1xuXHRcdFx0XHRcdGlmIChob3JpeiAmJiBzZnggPT09IFwiJVwiICYmIENTU1BsdWdpbi5jYWNoZVdpZHRocyAhPT0gZmFsc2UpIHtcblx0XHRcdFx0XHRcdGNhY2hlID0gbm9kZS5fZ3NDYWNoZSA9IG5vZGUuX2dzQ2FjaGUgfHwge307XG5cdFx0XHRcdFx0XHRjYWNoZS50aW1lID0gdGltZTtcblx0XHRcdFx0XHRcdGNhY2hlLndpZHRoID0gcGl4IC8gdiAqIDEwMDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHBpeCA9PT0gMCAmJiAhcmVjdXJzZSkge1xuXHRcdFx0XHRcdFx0cGl4ID0gX2NvbnZlcnRUb1BpeGVscyh0LCBwLCB2LCBzZngsIHRydWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbmVnID8gLXBpeCA6IHBpeDtcblx0XHRcdH0sXG5cdFx0XHRfY2FsY3VsYXRlT2Zmc2V0ID0gX2ludGVybmFscy5jYWxjdWxhdGVPZmZzZXQgPSBmdW5jdGlvbih0LCBwLCBjcykgeyAvL2ZvciBmaWd1cmluZyBvdXQgXCJ0b3BcIiBvciBcImxlZnRcIiBpbiBweCB3aGVuIGl0J3MgXCJhdXRvXCIuIFdlIG5lZWQgdG8gZmFjdG9yIGluIG1hcmdpbiB3aXRoIHRoZSBvZmZzZXRMZWZ0L29mZnNldFRvcFxuXHRcdFx0XHRpZiAoX2dldFN0eWxlKHQsIFwicG9zaXRpb25cIiwgY3MpICE9PSBcImFic29sdXRlXCIpIHsgcmV0dXJuIDA7IH1cblx0XHRcdFx0dmFyIGRpbSA9ICgocCA9PT0gXCJsZWZ0XCIpID8gXCJMZWZ0XCIgOiBcIlRvcFwiKSxcblx0XHRcdFx0XHR2ID0gX2dldFN0eWxlKHQsIFwibWFyZ2luXCIgKyBkaW0sIGNzKTtcblx0XHRcdFx0cmV0dXJuIHRbXCJvZmZzZXRcIiArIGRpbV0gLSAoX2NvbnZlcnRUb1BpeGVscyh0LCBwLCBwYXJzZUZsb2F0KHYpLCB2LnJlcGxhY2UoX3N1ZmZpeEV4cCwgXCJcIikpIHx8IDApO1xuXHRcdFx0fSxcblxuXHRcdFx0Ly8gQHByaXZhdGUgcmV0dXJucyBhdCBvYmplY3QgY29udGFpbmluZyBBTEwgb2YgdGhlIHN0eWxlIHByb3BlcnRpZXMgaW4gY2FtZWxDYXNlIGFuZCB0aGVpciBhc3NvY2lhdGVkIHZhbHVlcy5cblx0XHRcdF9nZXRBbGxTdHlsZXMgPSBmdW5jdGlvbih0LCBjcykge1xuXHRcdFx0XHR2YXIgcyA9IHt9LFxuXHRcdFx0XHRcdGksIHRyLCBwO1xuXHRcdFx0XHRpZiAoKGNzID0gY3MgfHwgX2dldENvbXB1dGVkU3R5bGUodCwgbnVsbCkpKSB7XG5cdFx0XHRcdFx0aWYgKChpID0gY3MubGVuZ3RoKSkge1xuXHRcdFx0XHRcdFx0d2hpbGUgKC0taSA+IC0xKSB7XG5cdFx0XHRcdFx0XHRcdHAgPSBjc1tpXTtcblx0XHRcdFx0XHRcdFx0aWYgKHAuaW5kZXhPZihcIi10cmFuc2Zvcm1cIikgPT09IC0xIHx8IF90cmFuc2Zvcm1Qcm9wQ1NTID09PSBwKSB7IC8vU29tZSB3ZWJraXQgYnJvd3NlcnMgZHVwbGljYXRlIHRyYW5zZm9ybSB2YWx1ZXMsIG9uZSBub24tcHJlZml4ZWQgYW5kIG9uZSBwcmVmaXhlZCAoXCJ0cmFuc2Zvcm1cIiBhbmQgXCJXZWJraXRUcmFuc2Zvcm1cIiksIHNvIHdlIG11c3Qgd2VlZCBvdXQgdGhlIGV4dHJhIG9uZSBoZXJlLlxuXHRcdFx0XHRcdFx0XHRcdHNbcC5yZXBsYWNlKF9jYW1lbEV4cCwgX2NhbWVsRnVuYyldID0gY3MuZ2V0UHJvcGVydHlWYWx1ZShwKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7IC8vc29tZSBicm93c2VycyBiZWhhdmUgZGlmZmVyZW50bHkgLSBjcy5sZW5ndGggaXMgYWx3YXlzIDAsIHNvIHdlIG11c3QgZG8gYSBmb3IuLi5pbiBsb29wLlxuXHRcdFx0XHRcdFx0Zm9yIChpIGluIGNzKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChpLmluZGV4T2YoXCJUcmFuc2Zvcm1cIikgPT09IC0xIHx8IF90cmFuc2Zvcm1Qcm9wID09PSBpKSB7IC8vU29tZSB3ZWJraXQgYnJvd3NlcnMgZHVwbGljYXRlIHRyYW5zZm9ybSB2YWx1ZXMsIG9uZSBub24tcHJlZml4ZWQgYW5kIG9uZSBwcmVmaXhlZCAoXCJ0cmFuc2Zvcm1cIiBhbmQgXCJXZWJraXRUcmFuc2Zvcm1cIiksIHNvIHdlIG11c3Qgd2VlZCBvdXQgdGhlIGV4dHJhIG9uZSBoZXJlLlxuXHRcdFx0XHRcdFx0XHRcdHNbaV0gPSBjc1tpXTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIGlmICgoY3MgPSB0LmN1cnJlbnRTdHlsZSB8fCB0LnN0eWxlKSkge1xuXHRcdFx0XHRcdGZvciAoaSBpbiBjcykge1xuXHRcdFx0XHRcdFx0aWYgKHR5cGVvZihpKSA9PT0gXCJzdHJpbmdcIiAmJiBzW2ldID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRcdFx0c1tpLnJlcGxhY2UoX2NhbWVsRXhwLCBfY2FtZWxGdW5jKV0gPSBjc1tpXTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFfc3VwcG9ydHNPcGFjaXR5KSB7XG5cdFx0XHRcdFx0cy5vcGFjaXR5ID0gX2dldElFT3BhY2l0eSh0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0ciA9IF9nZXRUcmFuc2Zvcm0odCwgY3MsIGZhbHNlKTtcblx0XHRcdFx0cy5yb3RhdGlvbiA9IHRyLnJvdGF0aW9uO1xuXHRcdFx0XHRzLnNrZXdYID0gdHIuc2tld1g7XG5cdFx0XHRcdHMuc2NhbGVYID0gdHIuc2NhbGVYO1xuXHRcdFx0XHRzLnNjYWxlWSA9IHRyLnNjYWxlWTtcblx0XHRcdFx0cy54ID0gdHIueDtcblx0XHRcdFx0cy55ID0gdHIueTtcblx0XHRcdFx0aWYgKF9zdXBwb3J0czNEKSB7XG5cdFx0XHRcdFx0cy56ID0gdHIuejtcblx0XHRcdFx0XHRzLnJvdGF0aW9uWCA9IHRyLnJvdGF0aW9uWDtcblx0XHRcdFx0XHRzLnJvdGF0aW9uWSA9IHRyLnJvdGF0aW9uWTtcblx0XHRcdFx0XHRzLnNjYWxlWiA9IHRyLnNjYWxlWjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAocy5maWx0ZXJzKSB7XG5cdFx0XHRcdFx0ZGVsZXRlIHMuZmlsdGVycztcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gcztcblx0XHRcdH0sXG5cblx0XHRcdC8vIEBwcml2YXRlIGFuYWx5emVzIHR3byBzdHlsZSBvYmplY3RzIChhcyByZXR1cm5lZCBieSBfZ2V0QWxsU3R5bGVzKCkpIGFuZCBvbmx5IGxvb2tzIGZvciBkaWZmZXJlbmNlcyBiZXR3ZWVuIHRoZW0gdGhhdCBjb250YWluIHR3ZWVuYWJsZSB2YWx1ZXMgKGxpa2UgYSBudW1iZXIgb3IgY29sb3IpLiBJdCByZXR1cm5zIGFuIG9iamVjdCB3aXRoIGEgXCJkaWZzXCIgcHJvcGVydHkgd2hpY2ggcmVmZXJzIHRvIGFuIG9iamVjdCBjb250YWluaW5nIG9ubHkgdGhvc2UgaXNvbGF0ZWQgcHJvcGVydGllcyBhbmQgdmFsdWVzIGZvciB0d2VlbmluZywgYW5kIGEgXCJmaXJzdE1QVFwiIHByb3BlcnR5IHdoaWNoIHJlZmVycyB0byB0aGUgZmlyc3QgTWluaVByb3BUd2VlbiBpbnN0YW5jZSBpbiBhIGxpbmtlZCBsaXN0IHRoYXQgcmVjb3JkZWQgYWxsIHRoZSBzdGFydGluZyB2YWx1ZXMgb2YgdGhlIGRpZmZlcmVudCBwcm9wZXJ0aWVzIHNvIHRoYXQgd2UgY2FuIHJldmVydCB0byB0aGVtIGF0IHRoZSBlbmQgb3IgYmVnaW5uaW5nIG9mIHRoZSB0d2VlbiAtIHdlIGRvbid0IHdhbnQgdGhlIGNhc2NhZGluZyB0byBnZXQgbWVzc2VkIHVwLiBUaGUgZm9yY2VMb29rdXAgcGFyYW1ldGVyIGlzIGFuIG9wdGlvbmFsIGdlbmVyaWMgb2JqZWN0IHdpdGggcHJvcGVydGllcyB0aGF0IHNob3VsZCBiZSBmb3JjZWQgaW50byB0aGUgcmVzdWx0cyAtIHRoaXMgaXMgbmVjZXNzYXJ5IGZvciBjbGFzc05hbWUgdHdlZW5zIHRoYXQgYXJlIG92ZXJ3cml0aW5nIG90aGVycyBiZWNhdXNlIGltYWdpbmUgYSBzY2VuYXJpbyB3aGVyZSBhIHJvbGxvdmVyL3JvbGxvdXQgYWRkcy9yZW1vdmVzIGEgY2xhc3MgYW5kIHRoZSB1c2VyIHN3aXBlcyB0aGUgbW91c2Ugb3ZlciB0aGUgdGFyZ2V0IFNVUEVSIGZhc3QsIHRodXMgbm90aGluZyBhY3R1YWxseSBjaGFuZ2VkIHlldCBhbmQgdGhlIHN1YnNlcXVlbnQgY29tcGFyaXNvbiBvZiB0aGUgcHJvcGVydGllcyB3b3VsZCBpbmRpY2F0ZSB0aGV5IG1hdGNoIChlc3BlY2lhbGx5IHdoZW4gcHggcm91bmRpbmcgaXMgdGFrZW4gaW50byBjb25zaWRlcmF0aW9uKSwgdGh1cyBubyB0d2VlbmluZyBpcyBuZWNlc3NhcnkgZXZlbiB0aG91Z2ggaXQgU0hPVUxEIHR3ZWVuIGFuZCByZW1vdmUgdGhvc2UgcHJvcGVydGllcyBhZnRlciB0aGUgdHdlZW4gKG90aGVyd2lzZSB0aGUgaW5saW5lIHN0eWxlcyB3aWxsIGNvbnRhbWluYXRlIHRoaW5ncykuIFNlZSB0aGUgY2xhc3NOYW1lIFNwZWNpYWxQcm9wIGNvZGUgZm9yIGRldGFpbHMuXG5cdFx0XHRfY3NzRGlmID0gZnVuY3Rpb24odCwgczEsIHMyLCB2YXJzLCBmb3JjZUxvb2t1cCkge1xuXHRcdFx0XHR2YXIgZGlmcyA9IHt9LFxuXHRcdFx0XHRcdHN0eWxlID0gdC5zdHlsZSxcblx0XHRcdFx0XHR2YWwsIHAsIG1wdDtcblx0XHRcdFx0Zm9yIChwIGluIHMyKSB7XG5cdFx0XHRcdFx0aWYgKHAgIT09IFwiY3NzVGV4dFwiKSBpZiAocCAhPT0gXCJsZW5ndGhcIikgaWYgKGlzTmFOKHApKSBpZiAoczFbcF0gIT09ICh2YWwgPSBzMltwXSkgfHwgKGZvcmNlTG9va3VwICYmIGZvcmNlTG9va3VwW3BdKSkgaWYgKHAuaW5kZXhPZihcIk9yaWdpblwiKSA9PT0gLTEpIGlmICh0eXBlb2YodmFsKSA9PT0gXCJudW1iZXJcIiB8fCB0eXBlb2YodmFsKSA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0XHRcdFx0ZGlmc1twXSA9ICh2YWwgPT09IFwiYXV0b1wiICYmIChwID09PSBcImxlZnRcIiB8fCBwID09PSBcInRvcFwiKSkgPyBfY2FsY3VsYXRlT2Zmc2V0KHQsIHApIDogKCh2YWwgPT09IFwiXCIgfHwgdmFsID09PSBcImF1dG9cIiB8fCB2YWwgPT09IFwibm9uZVwiKSAmJiB0eXBlb2YoczFbcF0pID09PSBcInN0cmluZ1wiICYmIHMxW3BdLnJlcGxhY2UoX05hTkV4cCwgXCJcIikgIT09IFwiXCIpID8gMCA6IHZhbDsgLy9pZiB0aGUgZW5kaW5nIHZhbHVlIGlzIGRlZmF1bHRpbmcgKFwiXCIgb3IgXCJhdXRvXCIpLCB3ZSBjaGVjayB0aGUgc3RhcnRpbmcgdmFsdWUgYW5kIGlmIGl0IGNhbiBiZSBwYXJzZWQgaW50byBhIG51bWJlciAoYSBzdHJpbmcgd2hpY2ggY291bGQgaGF2ZSBhIHN1ZmZpeCB0b28sIGxpa2UgNzAwcHgpLCB0aGVuIHdlIHN3YXAgaW4gMCBmb3IgXCJcIiBvciBcImF1dG9cIiBzbyB0aGF0IHRoaW5ncyBhY3R1YWxseSB0d2Vlbi5cblx0XHRcdFx0XHRcdGlmIChzdHlsZVtwXSAhPT0gdW5kZWZpbmVkKSB7IC8vZm9yIGNsYXNzTmFtZSB0d2VlbnMsIHdlIG11c3QgcmVtZW1iZXIgd2hpY2ggcHJvcGVydGllcyBhbHJlYWR5IGV4aXN0ZWQgaW5saW5lIC0gdGhlIG9uZXMgdGhhdCBkaWRuJ3Qgc2hvdWxkIGJlIHJlbW92ZWQgd2hlbiB0aGUgdHdlZW4gaXNuJ3QgaW4gcHJvZ3Jlc3MgYmVjYXVzZSB0aGV5IHdlcmUgb25seSBpbnRyb2R1Y2VkIHRvIGZhY2lsaXRhdGUgdGhlIHRyYW5zaXRpb24gYmV0d2VlbiBjbGFzc2VzLlxuXHRcdFx0XHRcdFx0XHRtcHQgPSBuZXcgTWluaVByb3BUd2VlbihzdHlsZSwgcCwgc3R5bGVbcF0sIG1wdCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh2YXJzKSB7XG5cdFx0XHRcdFx0Zm9yIChwIGluIHZhcnMpIHsgLy9jb3B5IHByb3BlcnRpZXMgKGV4Y2VwdCBjbGFzc05hbWUpXG5cdFx0XHRcdFx0XHRpZiAocCAhPT0gXCJjbGFzc05hbWVcIikge1xuXHRcdFx0XHRcdFx0XHRkaWZzW3BdID0gdmFyc1twXTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHtkaWZzOmRpZnMsIGZpcnN0TVBUOm1wdH07XG5cdFx0XHR9LFxuXHRcdFx0X2RpbWVuc2lvbnMgPSB7d2lkdGg6W1wiTGVmdFwiLFwiUmlnaHRcIl0sIGhlaWdodDpbXCJUb3BcIixcIkJvdHRvbVwiXX0sXG5cdFx0XHRfbWFyZ2lucyA9IFtcIm1hcmdpbkxlZnRcIixcIm1hcmdpblJpZ2h0XCIsXCJtYXJnaW5Ub3BcIixcIm1hcmdpbkJvdHRvbVwiXSxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBAcHJpdmF0ZSBHZXRzIHRoZSB3aWR0aCBvciBoZWlnaHQgb2YgYW4gZWxlbWVudFxuXHRcdFx0ICogQHBhcmFtIHshT2JqZWN0fSB0IFRhcmdldCBlbGVtZW50XG5cdFx0XHQgKiBAcGFyYW0geyFzdHJpbmd9IHAgUHJvcGVydHkgbmFtZSAoXCJ3aWR0aFwiIG9yIFwiaGVpZ2h0XCIpXG5cdFx0XHQgKiBAcGFyYW0ge09iamVjdD19IGNzIENvbXB1dGVkIHN0eWxlIG9iamVjdCAoaWYgb25lIGV4aXN0cykuIEp1c3QgYSBzcGVlZCBvcHRpbWl6YXRpb24uXG5cdFx0XHQgKiBAcmV0dXJuIHtudW1iZXJ9IERpbWVuc2lvbiAoaW4gcGl4ZWxzKVxuXHRcdFx0ICovXG5cdFx0XHRfZ2V0RGltZW5zaW9uID0gZnVuY3Rpb24odCwgcCwgY3MpIHtcblx0XHRcdFx0dmFyIHYgPSBwYXJzZUZsb2F0KChwID09PSBcIndpZHRoXCIpID8gdC5vZmZzZXRXaWR0aCA6IHQub2Zmc2V0SGVpZ2h0KSxcblx0XHRcdFx0XHRhID0gX2RpbWVuc2lvbnNbcF0sXG5cdFx0XHRcdFx0aSA9IGEubGVuZ3RoO1xuXHRcdFx0XHRjcyA9IGNzIHx8IF9nZXRDb21wdXRlZFN0eWxlKHQsIG51bGwpO1xuXHRcdFx0XHR3aGlsZSAoLS1pID4gLTEpIHtcblx0XHRcdFx0XHR2IC09IHBhcnNlRmxvYXQoIF9nZXRTdHlsZSh0LCBcInBhZGRpbmdcIiArIGFbaV0sIGNzLCB0cnVlKSApIHx8IDA7XG5cdFx0XHRcdFx0diAtPSBwYXJzZUZsb2F0KCBfZ2V0U3R5bGUodCwgXCJib3JkZXJcIiArIGFbaV0gKyBcIldpZHRoXCIsIGNzLCB0cnVlKSApIHx8IDA7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHY7XG5cdFx0XHR9LFxuXG5cdFx0XHQvLyBAcHJpdmF0ZSBQYXJzZXMgcG9zaXRpb24tcmVsYXRlZCBjb21wbGV4IHN0cmluZ3MgbGlrZSBcInRvcCBsZWZ0XCIgb3IgXCI1MHB4IDEwcHhcIiBvciBcIjcwJSAyMCVcIiwgZXRjLiB3aGljaCBhcmUgdXNlZCBmb3IgdGhpbmdzIGxpa2UgdHJhbnNmb3JtT3JpZ2luIG9yIGJhY2tncm91bmRQb3NpdGlvbi4gT3B0aW9uYWxseSBkZWNvcmF0ZXMgYSBzdXBwbGllZCBvYmplY3QgKHJlY09iaikgd2l0aCB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6IFwib3hcIiAob2Zmc2V0WCksIFwib3lcIiAob2Zmc2V0WSksIFwib3hwXCIgKGlmIHRydWUsIFwib3hcIiBpcyBhIHBlcmNlbnRhZ2Ugbm90IGEgcGl4ZWwgdmFsdWUpLCBhbmQgXCJveHlcIiAoaWYgdHJ1ZSwgXCJveVwiIGlzIGEgcGVyY2VudGFnZSBub3QgYSBwaXhlbCB2YWx1ZSlcblx0XHRcdF9wYXJzZVBvc2l0aW9uID0gZnVuY3Rpb24odiwgcmVjT2JqKSB7XG5cdFx0XHRcdGlmICh2ID09IG51bGwgfHwgdiA9PT0gXCJcIiB8fCB2ID09PSBcImF1dG9cIiB8fCB2ID09PSBcImF1dG8gYXV0b1wiKSB7IC8vbm90ZTogRmlyZWZveCB1c2VzIFwiYXV0byBhdXRvXCIgYXMgZGVmYXVsdCB3aGVyZWFzIENocm9tZSB1c2VzIFwiYXV0b1wiLlxuXHRcdFx0XHRcdHYgPSBcIjAgMFwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZhciBhID0gdi5zcGxpdChcIiBcIiksXG5cdFx0XHRcdFx0eCA9ICh2LmluZGV4T2YoXCJsZWZ0XCIpICE9PSAtMSkgPyBcIjAlXCIgOiAodi5pbmRleE9mKFwicmlnaHRcIikgIT09IC0xKSA/IFwiMTAwJVwiIDogYVswXSxcblx0XHRcdFx0XHR5ID0gKHYuaW5kZXhPZihcInRvcFwiKSAhPT0gLTEpID8gXCIwJVwiIDogKHYuaW5kZXhPZihcImJvdHRvbVwiKSAhPT0gLTEpID8gXCIxMDAlXCIgOiBhWzFdO1xuXHRcdFx0XHRpZiAoeSA9PSBudWxsKSB7XG5cdFx0XHRcdFx0eSA9ICh4ID09PSBcImNlbnRlclwiKSA/IFwiNTAlXCIgOiBcIjBcIjtcblx0XHRcdFx0fSBlbHNlIGlmICh5ID09PSBcImNlbnRlclwiKSB7XG5cdFx0XHRcdFx0eSA9IFwiNTAlXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHggPT09IFwiY2VudGVyXCIgfHwgKGlzTmFOKHBhcnNlRmxvYXQoeCkpICYmICh4ICsgXCJcIikuaW5kZXhPZihcIj1cIikgPT09IC0xKSkgeyAvL3JlbWVtYmVyLCB0aGUgdXNlciBjb3VsZCBmbGlwLWZsb3AgdGhlIHZhbHVlcyBhbmQgc2F5IFwiYm90dG9tIGNlbnRlclwiIG9yIFwiY2VudGVyIGJvdHRvbVwiLCBldGMuIFwiY2VudGVyXCIgaXMgYW1iaWd1b3VzIGJlY2F1c2UgaXQgY291bGQgYmUgdXNlZCB0byBkZXNjcmliZSBob3Jpem9udGFsIG9yIHZlcnRpY2FsLCBoZW5jZSB0aGUgaXNOYU4oKS4gSWYgdGhlcmUncyBhbiBcIj1cIiBzaWduIGluIHRoZSB2YWx1ZSwgaXQncyByZWxhdGl2ZS5cblx0XHRcdFx0XHR4ID0gXCI1MCVcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHR2ID0geCArIFwiIFwiICsgeSArICgoYS5sZW5ndGggPiAyKSA/IFwiIFwiICsgYVsyXSA6IFwiXCIpO1xuXHRcdFx0XHRpZiAocmVjT2JqKSB7XG5cdFx0XHRcdFx0cmVjT2JqLm94cCA9ICh4LmluZGV4T2YoXCIlXCIpICE9PSAtMSk7XG5cdFx0XHRcdFx0cmVjT2JqLm95cCA9ICh5LmluZGV4T2YoXCIlXCIpICE9PSAtMSk7XG5cdFx0XHRcdFx0cmVjT2JqLm94ciA9ICh4LmNoYXJBdCgxKSA9PT0gXCI9XCIpO1xuXHRcdFx0XHRcdHJlY09iai5veXIgPSAoeS5jaGFyQXQoMSkgPT09IFwiPVwiKTtcblx0XHRcdFx0XHRyZWNPYmoub3ggPSBwYXJzZUZsb2F0KHgucmVwbGFjZShfTmFORXhwLCBcIlwiKSk7XG5cdFx0XHRcdFx0cmVjT2JqLm95ID0gcGFyc2VGbG9hdCh5LnJlcGxhY2UoX05hTkV4cCwgXCJcIikpO1xuXHRcdFx0XHRcdHJlY09iai52ID0gdjtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gcmVjT2JqIHx8IHY7XG5cdFx0XHR9LFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIEBwcml2YXRlIFRha2VzIGFuIGVuZGluZyB2YWx1ZSAodHlwaWNhbGx5IGEgc3RyaW5nLCBidXQgY2FuIGJlIGEgbnVtYmVyKSBhbmQgYSBzdGFydGluZyB2YWx1ZSBhbmQgcmV0dXJucyB0aGUgY2hhbmdlIGJldHdlZW4gdGhlIHR3bywgbG9va2luZyBmb3IgcmVsYXRpdmUgdmFsdWUgaW5kaWNhdG9ycyBsaWtlICs9IGFuZCAtPSBhbmQgaXQgYWxzbyBpZ25vcmVzIHN1ZmZpeGVzIChidXQgbWFrZSBzdXJlIHRoZSBlbmRpbmcgdmFsdWUgc3RhcnRzIHdpdGggYSBudW1iZXIgb3IgKz0vLT0gYW5kIHRoYXQgdGhlIHN0YXJ0aW5nIHZhbHVlIGlzIGEgTlVNQkVSISlcblx0XHRcdCAqIEBwYXJhbSB7KG51bWJlcnxzdHJpbmcpfSBlIEVuZCB2YWx1ZSB3aGljaCBpcyB0eXBpY2FsbHkgYSBzdHJpbmcsIGJ1dCBjb3VsZCBiZSBhIG51bWJlclxuXHRcdFx0ICogQHBhcmFtIHsobnVtYmVyfHN0cmluZyl9IGIgQmVnaW5uaW5nIHZhbHVlIHdoaWNoIGlzIHR5cGljYWxseSBhIHN0cmluZyBidXQgY291bGQgYmUgYSBudW1iZXJcblx0XHRcdCAqIEByZXR1cm4ge251bWJlcn0gQW1vdW50IG9mIGNoYW5nZSBiZXR3ZWVuIHRoZSBiZWdpbm5pbmcgYW5kIGVuZGluZyB2YWx1ZXMgKHJlbGF0aXZlIHZhbHVlcyB0aGF0IGhhdmUgYSBcIis9XCIgb3IgXCItPVwiIGFyZSByZWNvZ25pemVkKVxuXHRcdFx0ICovXG5cdFx0XHRfcGFyc2VDaGFuZ2UgPSBmdW5jdGlvbihlLCBiKSB7XG5cdFx0XHRcdHJldHVybiAodHlwZW9mKGUpID09PSBcInN0cmluZ1wiICYmIGUuY2hhckF0KDEpID09PSBcIj1cIikgPyBwYXJzZUludChlLmNoYXJBdCgwKSArIFwiMVwiLCAxMCkgKiBwYXJzZUZsb2F0KGUuc3Vic3RyKDIpKSA6IHBhcnNlRmxvYXQoZSkgLSBwYXJzZUZsb2F0KGIpO1xuXHRcdFx0fSxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBAcHJpdmF0ZSBUYWtlcyBhIHZhbHVlIGFuZCBhIGRlZmF1bHQgbnVtYmVyLCBjaGVja3MgaWYgdGhlIHZhbHVlIGlzIHJlbGF0aXZlLCBudWxsLCBvciBudW1lcmljIGFuZCBzcGl0cyBiYWNrIGEgbm9ybWFsaXplZCBudW1iZXIgYWNjb3JkaW5nbHkuIFByaW1hcmlseSB1c2VkIGluIHRoZSBfcGFyc2VUcmFuc2Zvcm0oKSBmdW5jdGlvbi5cblx0XHRcdCAqIEBwYXJhbSB7T2JqZWN0fSB2IFZhbHVlIHRvIGJlIHBhcnNlZFxuXHRcdFx0ICogQHBhcmFtIHshbnVtYmVyfSBkIERlZmF1bHQgdmFsdWUgKHdoaWNoIGlzIGFsc28gdXNlZCBmb3IgcmVsYXRpdmUgY2FsY3VsYXRpb25zIGlmIFwiKz1cIiBvciBcIi09XCIgaXMgZm91bmQgaW4gdGhlIGZpcnN0IHBhcmFtZXRlcilcblx0XHRcdCAqIEByZXR1cm4ge251bWJlcn0gUGFyc2VkIHZhbHVlXG5cdFx0XHQgKi9cblx0XHRcdF9wYXJzZVZhbCA9IGZ1bmN0aW9uKHYsIGQpIHtcblx0XHRcdFx0cmV0dXJuICh2ID09IG51bGwpID8gZCA6ICh0eXBlb2YodikgPT09IFwic3RyaW5nXCIgJiYgdi5jaGFyQXQoMSkgPT09IFwiPVwiKSA/IHBhcnNlSW50KHYuY2hhckF0KDApICsgXCIxXCIsIDEwKSAqIHBhcnNlRmxvYXQodi5zdWJzdHIoMikpICsgZCA6IHBhcnNlRmxvYXQodik7XG5cdFx0XHR9LFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIEBwcml2YXRlIFRyYW5zbGF0ZXMgc3RyaW5ncyBsaWtlIFwiNDBkZWdcIiBvciBcIjQwXCIgb3IgNDByYWRcIiBvciBcIis9NDBkZWdcIiBvciBcIjI3MF9zaG9ydFwiIG9yIFwiLTkwX2N3XCIgb3IgXCIrPTQ1X2Njd1wiIHRvIGEgbnVtZXJpYyByYWRpYW4gYW5nbGUuIE9mIGNvdXJzZSBhIHN0YXJ0aW5nL2RlZmF1bHQgdmFsdWUgbXVzdCBiZSBmZWQgaW4gdG9vIHNvIHRoYXQgcmVsYXRpdmUgdmFsdWVzIGNhbiBiZSBjYWxjdWxhdGVkIHByb3Blcmx5LlxuXHRcdFx0ICogQHBhcmFtIHtPYmplY3R9IHYgVmFsdWUgdG8gYmUgcGFyc2VkXG5cdFx0XHQgKiBAcGFyYW0geyFudW1iZXJ9IGQgRGVmYXVsdCB2YWx1ZSAod2hpY2ggaXMgYWxzbyB1c2VkIGZvciByZWxhdGl2ZSBjYWxjdWxhdGlvbnMgaWYgXCIrPVwiIG9yIFwiLT1cIiBpcyBmb3VuZCBpbiB0aGUgZmlyc3QgcGFyYW1ldGVyKVxuXHRcdFx0ICogQHBhcmFtIHtzdHJpbmc9fSBwIHByb3BlcnR5IG5hbWUgZm9yIGRpcmVjdGlvbmFsRW5kIChvcHRpb25hbCAtIG9ubHkgdXNlZCB3aGVuIHRoZSBwYXJzZWQgdmFsdWUgaXMgZGlyZWN0aW9uYWwgKFwiX3Nob3J0XCIsIFwiX2N3XCIsIG9yIFwiX2Njd1wiIHN1ZmZpeCkuIFdlIG5lZWQgYSB3YXkgdG8gc3RvcmUgdGhlIHVuY29tcGVuc2F0ZWQgdmFsdWUgc28gdGhhdCBhdCB0aGUgZW5kIG9mIHRoZSB0d2Vlbiwgd2Ugc2V0IGl0IHRvIGV4YWN0bHkgd2hhdCB3YXMgcmVxdWVzdGVkIHdpdGggbm8gZGlyZWN0aW9uYWwgY29tcGVuc2F0aW9uKS4gUHJvcGVydHkgbmFtZSB3b3VsZCBiZSBcInJvdGF0aW9uXCIsIFwicm90YXRpb25YXCIsIG9yIFwicm90YXRpb25ZXCJcblx0XHRcdCAqIEBwYXJhbSB7T2JqZWN0PX0gZGlyZWN0aW9uYWxFbmQgQW4gb2JqZWN0IHRoYXQgd2lsbCBzdG9yZSB0aGUgcmF3IGVuZCB2YWx1ZXMgZm9yIGRpcmVjdGlvbmFsIGFuZ2xlcyAoXCJfc2hvcnRcIiwgXCJfY3dcIiwgb3IgXCJfY2N3XCIgc3VmZml4KS4gV2UgbmVlZCBhIHdheSB0byBzdG9yZSB0aGUgdW5jb21wZW5zYXRlZCB2YWx1ZSBzbyB0aGF0IGF0IHRoZSBlbmQgb2YgdGhlIHR3ZWVuLCB3ZSBzZXQgaXQgdG8gZXhhY3RseSB3aGF0IHdhcyByZXF1ZXN0ZWQgd2l0aCBubyBkaXJlY3Rpb25hbCBjb21wZW5zYXRpb24uXG5cdFx0XHQgKiBAcmV0dXJuIHtudW1iZXJ9IHBhcnNlZCBhbmdsZSBpbiByYWRpYW5zXG5cdFx0XHQgKi9cblx0XHRcdF9wYXJzZUFuZ2xlID0gZnVuY3Rpb24odiwgZCwgcCwgZGlyZWN0aW9uYWxFbmQpIHtcblx0XHRcdFx0dmFyIG1pbiA9IDAuMDAwMDAxLFxuXHRcdFx0XHRcdGNhcCwgc3BsaXQsIGRpZiwgcmVzdWx0LCBpc1JlbGF0aXZlO1xuXHRcdFx0XHRpZiAodiA9PSBudWxsKSB7XG5cdFx0XHRcdFx0cmVzdWx0ID0gZDtcblx0XHRcdFx0fSBlbHNlIGlmICh0eXBlb2YodikgPT09IFwibnVtYmVyXCIpIHtcblx0XHRcdFx0XHRyZXN1bHQgPSB2O1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNhcCA9IDM2MDtcblx0XHRcdFx0XHRzcGxpdCA9IHYuc3BsaXQoXCJfXCIpO1xuXHRcdFx0XHRcdGlzUmVsYXRpdmUgPSAodi5jaGFyQXQoMSkgPT09IFwiPVwiKTtcblx0XHRcdFx0XHRkaWYgPSAoaXNSZWxhdGl2ZSA/IHBhcnNlSW50KHYuY2hhckF0KDApICsgXCIxXCIsIDEwKSAqIHBhcnNlRmxvYXQoc3BsaXRbMF0uc3Vic3RyKDIpKSA6IHBhcnNlRmxvYXQoc3BsaXRbMF0pKSAqICgodi5pbmRleE9mKFwicmFkXCIpID09PSAtMSkgPyAxIDogX1JBRDJERUcpIC0gKGlzUmVsYXRpdmUgPyAwIDogZCk7XG5cdFx0XHRcdFx0aWYgKHNwbGl0Lmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0aWYgKGRpcmVjdGlvbmFsRW5kKSB7XG5cdFx0XHRcdFx0XHRcdGRpcmVjdGlvbmFsRW5kW3BdID0gZCArIGRpZjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmICh2LmluZGV4T2YoXCJzaG9ydFwiKSAhPT0gLTEpIHtcblx0XHRcdFx0XHRcdFx0ZGlmID0gZGlmICUgY2FwO1xuXHRcdFx0XHRcdFx0XHRpZiAoZGlmICE9PSBkaWYgJSAoY2FwIC8gMikpIHtcblx0XHRcdFx0XHRcdFx0XHRkaWYgPSAoZGlmIDwgMCkgPyBkaWYgKyBjYXAgOiBkaWYgLSBjYXA7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmICh2LmluZGV4T2YoXCJfY3dcIikgIT09IC0xICYmIGRpZiA8IDApIHtcblx0XHRcdFx0XHRcdFx0ZGlmID0gKChkaWYgKyBjYXAgKiA5OTk5OTk5OTk5KSAlIGNhcCkgLSAoKGRpZiAvIGNhcCkgfCAwKSAqIGNhcDtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAodi5pbmRleE9mKFwiY2N3XCIpICE9PSAtMSAmJiBkaWYgPiAwKSB7XG5cdFx0XHRcdFx0XHRcdGRpZiA9ICgoZGlmIC0gY2FwICogOTk5OTk5OTk5OSkgJSBjYXApIC0gKChkaWYgLyBjYXApIHwgMCkgKiBjYXA7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJlc3VsdCA9IGQgKyBkaWY7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHJlc3VsdCA8IG1pbiAmJiByZXN1bHQgPiAtbWluKSB7XG5cdFx0XHRcdFx0cmVzdWx0ID0gMDtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0fSxcblxuXHRcdFx0X2NvbG9yTG9va3VwID0ge2FxdWE6WzAsMjU1LDI1NV0sXG5cdFx0XHRcdGxpbWU6WzAsMjU1LDBdLFxuXHRcdFx0XHRzaWx2ZXI6WzE5MiwxOTIsMTkyXSxcblx0XHRcdFx0YmxhY2s6WzAsMCwwXSxcblx0XHRcdFx0bWFyb29uOlsxMjgsMCwwXSxcblx0XHRcdFx0dGVhbDpbMCwxMjgsMTI4XSxcblx0XHRcdFx0Ymx1ZTpbMCwwLDI1NV0sXG5cdFx0XHRcdG5hdnk6WzAsMCwxMjhdLFxuXHRcdFx0XHR3aGl0ZTpbMjU1LDI1NSwyNTVdLFxuXHRcdFx0XHRmdWNoc2lhOlsyNTUsMCwyNTVdLFxuXHRcdFx0XHRvbGl2ZTpbMTI4LDEyOCwwXSxcblx0XHRcdFx0eWVsbG93OlsyNTUsMjU1LDBdLFxuXHRcdFx0XHRvcmFuZ2U6WzI1NSwxNjUsMF0sXG5cdFx0XHRcdGdyYXk6WzEyOCwxMjgsMTI4XSxcblx0XHRcdFx0cHVycGxlOlsxMjgsMCwxMjhdLFxuXHRcdFx0XHRncmVlbjpbMCwxMjgsMF0sXG5cdFx0XHRcdHJlZDpbMjU1LDAsMF0sXG5cdFx0XHRcdHBpbms6WzI1NSwxOTIsMjAzXSxcblx0XHRcdFx0Y3lhbjpbMCwyNTUsMjU1XSxcblx0XHRcdFx0dHJhbnNwYXJlbnQ6WzI1NSwyNTUsMjU1LDBdfSxcblxuXHRcdFx0X2h1ZSA9IGZ1bmN0aW9uKGgsIG0xLCBtMikge1xuXHRcdFx0XHRoID0gKGggPCAwKSA/IGggKyAxIDogKGggPiAxKSA/IGggLSAxIDogaDtcblx0XHRcdFx0cmV0dXJuICgoKChoICogNiA8IDEpID8gbTEgKyAobTIgLSBtMSkgKiBoICogNiA6IChoIDwgMC41KSA/IG0yIDogKGggKiAzIDwgMikgPyBtMSArIChtMiAtIG0xKSAqICgyIC8gMyAtIGgpICogNiA6IG0xKSAqIDI1NSkgKyAwLjUpIHwgMDtcblx0XHRcdH0sXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogQHByaXZhdGUgUGFyc2VzIGEgY29sb3IgKGxpa2UgIzlGMCwgI0ZGOTkwMCwgb3IgcmdiKDI1NSw1MSwxNTMpKSBpbnRvIGFuIGFycmF5IHdpdGggMyBlbGVtZW50cyBmb3IgcmVkLCBncmVlbiwgYW5kIGJsdWUuIEFsc28gaGFuZGxlcyByZ2JhKCkgdmFsdWVzIChzcGxpdHMgaW50byBhcnJheSBvZiA0IGVsZW1lbnRzIG9mIGNvdXJzZSlcblx0XHRcdCAqIEBwYXJhbSB7KHN0cmluZ3xudW1iZXIpfSB2IFRoZSB2YWx1ZSB0aGUgc2hvdWxkIGJlIHBhcnNlZCB3aGljaCBjb3VsZCBiZSBhIHN0cmluZyBsaWtlICM5RjAgb3IgcmdiKDI1NSwxMDIsNTEpIG9yIHJnYmEoMjU1LDAsMCwwLjUpIG9yIGl0IGNvdWxkIGJlIGEgbnVtYmVyIGxpa2UgMHhGRjAwQ0Mgb3IgZXZlbiBhIG5hbWVkIGNvbG9yIGxpa2UgcmVkLCBibHVlLCBwdXJwbGUsIGV0Yy5cblx0XHRcdCAqIEByZXR1cm4ge0FycmF5LjxudW1iZXI+fSBBbiBhcnJheSBjb250YWluaW5nIHJlZCwgZ3JlZW4sIGFuZCBibHVlIChhbmQgb3B0aW9uYWxseSBhbHBoYSkgaW4gdGhhdCBvcmRlci5cblx0XHRcdCAqL1xuXHRcdFx0X3BhcnNlQ29sb3IgPSBDU1NQbHVnaW4ucGFyc2VDb2xvciA9IGZ1bmN0aW9uKHYpIHtcblx0XHRcdFx0dmFyIGMxLCBjMiwgYzMsIGgsIHMsIGw7XG5cdFx0XHRcdGlmICghdiB8fCB2ID09PSBcIlwiKSB7XG5cdFx0XHRcdFx0cmV0dXJuIF9jb2xvckxvb2t1cC5ibGFjaztcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodHlwZW9mKHYpID09PSBcIm51bWJlclwiKSB7XG5cdFx0XHRcdFx0cmV0dXJuIFt2ID4+IDE2LCAodiA+PiA4KSAmIDI1NSwgdiAmIDI1NV07XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHYuY2hhckF0KHYubGVuZ3RoIC0gMSkgPT09IFwiLFwiKSB7IC8vc29tZXRpbWVzIGEgdHJhaWxpbmcgY29tbW1hIGlzIGluY2x1ZGVkIGFuZCB3ZSBzaG91bGQgY2hvcCBpdCBvZmYgKHR5cGljYWxseSBmcm9tIGEgY29tbWEtZGVsaW1pdGVkIGxpc3Qgb2YgdmFsdWVzIGxpa2UgYSB0ZXh0U2hhZG93OlwiMnB4IDJweCAycHggYmx1ZSwgNXB4IDVweCA1cHggcmdiKDI1NSwwLDApXCIgLSBpbiB0aGlzIGV4YW1wbGUgXCJibHVlLFwiIGhhcyBhIHRyYWlsaW5nIGNvbW1hLiBXZSBjb3VsZCBzdHJpcCBpdCBvdXQgaW5zaWRlIHBhcnNlQ29tcGxleCgpIGJ1dCB3ZSdkIG5lZWQgdG8gZG8gaXQgdG8gdGhlIGJlZ2lubmluZyBhbmQgZW5kaW5nIHZhbHVlcyBwbHVzIGl0IHdvdWxkbid0IHByb3ZpZGUgcHJvdGVjdGlvbiBmcm9tIG90aGVyIHBvdGVudGlhbCBzY2VuYXJpb3MgbGlrZSBpZiB0aGUgdXNlciBwYXNzZXMgaW4gYSBzaW1pbGFyIHZhbHVlLlxuXHRcdFx0XHRcdHYgPSB2LnN1YnN0cigwLCB2Lmxlbmd0aCAtIDEpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChfY29sb3JMb29rdXBbdl0pIHtcblx0XHRcdFx0XHRyZXR1cm4gX2NvbG9yTG9va3VwW3ZdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh2LmNoYXJBdCgwKSA9PT0gXCIjXCIpIHtcblx0XHRcdFx0XHRpZiAodi5sZW5ndGggPT09IDQpIHsgLy9mb3Igc2hvcnRoYW5kIGxpa2UgIzlGMFxuXHRcdFx0XHRcdFx0YzEgPSB2LmNoYXJBdCgxKSxcblx0XHRcdFx0XHRcdGMyID0gdi5jaGFyQXQoMiksXG5cdFx0XHRcdFx0XHRjMyA9IHYuY2hhckF0KDMpO1xuXHRcdFx0XHRcdFx0diA9IFwiI1wiICsgYzEgKyBjMSArIGMyICsgYzIgKyBjMyArIGMzO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR2ID0gcGFyc2VJbnQodi5zdWJzdHIoMSksIDE2KTtcblx0XHRcdFx0XHRyZXR1cm4gW3YgPj4gMTYsICh2ID4+IDgpICYgMjU1LCB2ICYgMjU1XTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodi5zdWJzdHIoMCwgMykgPT09IFwiaHNsXCIpIHtcblx0XHRcdFx0XHR2ID0gdi5tYXRjaChfbnVtRXhwKTtcblx0XHRcdFx0XHRoID0gKE51bWJlcih2WzBdKSAlIDM2MCkgLyAzNjA7XG5cdFx0XHRcdFx0cyA9IE51bWJlcih2WzFdKSAvIDEwMDtcblx0XHRcdFx0XHRsID0gTnVtYmVyKHZbMl0pIC8gMTAwO1xuXHRcdFx0XHRcdGMyID0gKGwgPD0gMC41KSA/IGwgKiAocyArIDEpIDogbCArIHMgLSBsICogcztcblx0XHRcdFx0XHRjMSA9IGwgKiAyIC0gYzI7XG5cdFx0XHRcdFx0aWYgKHYubGVuZ3RoID4gMykge1xuXHRcdFx0XHRcdFx0dlszXSA9IE51bWJlcih2WzNdKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dlswXSA9IF9odWUoaCArIDEgLyAzLCBjMSwgYzIpO1xuXHRcdFx0XHRcdHZbMV0gPSBfaHVlKGgsIGMxLCBjMik7XG5cdFx0XHRcdFx0dlsyXSA9IF9odWUoaCAtIDEgLyAzLCBjMSwgYzIpO1xuXHRcdFx0XHRcdHJldHVybiB2O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHYgPSB2Lm1hdGNoKF9udW1FeHApIHx8IF9jb2xvckxvb2t1cC50cmFuc3BhcmVudDtcblx0XHRcdFx0dlswXSA9IE51bWJlcih2WzBdKTtcblx0XHRcdFx0dlsxXSA9IE51bWJlcih2WzFdKTtcblx0XHRcdFx0dlsyXSA9IE51bWJlcih2WzJdKTtcblx0XHRcdFx0aWYgKHYubGVuZ3RoID4gMykge1xuXHRcdFx0XHRcdHZbM10gPSBOdW1iZXIodlszXSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHY7XG5cdFx0XHR9LFxuXHRcdFx0X2NvbG9yRXhwID0gXCIoPzpcXFxcYig/Oig/OnJnYnxyZ2JhfGhzbHxoc2xhKVxcXFwoLis/XFxcXCkpfFxcXFxCIy4rP1xcXFxiXCI7IC8vd2UnbGwgZHluYW1pY2FsbHkgYnVpbGQgdGhpcyBSZWd1bGFyIEV4cHJlc3Npb24gdG8gY29uc2VydmUgZmlsZSBzaXplLiBBZnRlciBidWlsZGluZyBpdCwgaXQgd2lsbCBiZSBhYmxlIHRvIGZpbmQgcmdiKCksIHJnYmEoKSwgIyAoaGV4YWRlY2ltYWwpLCBhbmQgbmFtZWQgY29sb3IgdmFsdWVzIGxpa2UgcmVkLCBibHVlLCBwdXJwbGUsIGV0Yy5cblxuXHRcdGZvciAocCBpbiBfY29sb3JMb29rdXApIHtcblx0XHRcdF9jb2xvckV4cCArPSBcInxcIiArIHAgKyBcIlxcXFxiXCI7XG5cdFx0fVxuXHRcdF9jb2xvckV4cCA9IG5ldyBSZWdFeHAoX2NvbG9yRXhwK1wiKVwiLCBcImdpXCIpO1xuXG5cdFx0LyoqXG5cdFx0ICogQHByaXZhdGUgUmV0dXJucyBhIGZvcm1hdHRlciBmdW5jdGlvbiB0aGF0IGhhbmRsZXMgdGFraW5nIGEgc3RyaW5nIChvciBudW1iZXIgaW4gc29tZSBjYXNlcykgYW5kIHJldHVybmluZyBhIGNvbnNpc3RlbnRseSBmb3JtYXR0ZWQgb25lIGluIHRlcm1zIG9mIGRlbGltaXRlcnMsIHF1YW50aXR5IG9mIHZhbHVlcywgZXRjLiBGb3IgZXhhbXBsZSwgd2UgbWF5IGdldCBib3hTaGFkb3cgdmFsdWVzIGRlZmluZWQgYXMgXCIwcHggcmVkXCIgb3IgXCIwcHggMHB4IDEwcHggcmdiKDI1NSwwLDApXCIgb3IgXCIwcHggMHB4IDIwcHggMjBweCAjRjAwXCIgYW5kIHdlIG5lZWQgdG8gZW5zdXJlIHRoYXQgd2hhdCB3ZSBnZXQgYmFjayBpcyBkZXNjcmliZWQgd2l0aCA0IG51bWJlcnMgYW5kIGEgY29sb3IuIFRoaXMgYWxsb3dzIHVzIHRvIGZlZWQgaXQgaW50byB0aGUgX3BhcnNlQ29tcGxleCgpIG1ldGhvZCBhbmQgc3BsaXQgdGhlIHZhbHVlcyB1cCBhcHByb3ByaWF0ZWx5LiBUaGUgbmVhdCB0aGluZyBhYm91dCB0aGlzIF9nZXRGb3JtYXR0ZXIoKSBmdW5jdGlvbiBpcyB0aGF0IHRoZSBkZmx0IGRlZmluZXMgYSBwYXR0ZXJuIGFzIHdlbGwgYXMgYSBkZWZhdWx0LCBzbyBmb3IgZXhhbXBsZSwgX2dldEZvcm1hdHRlcihcIjBweCAwcHggMHB4IDBweCAjNzc3XCIsIHRydWUpIG5vdCBvbmx5IHNldHMgdGhlIGRlZmF1bHQgYXMgMHB4IGZvciBhbGwgZGlzdGFuY2VzIGFuZCAjNzc3IGZvciB0aGUgY29sb3IsIGJ1dCBhbHNvIHNldHMgdGhlIHBhdHRlcm4gc3VjaCB0aGF0IDQgbnVtYmVycyBhbmQgYSBjb2xvciB3aWxsIGFsd2F5cyBnZXQgcmV0dXJuZWQuXG5cdFx0ICogQHBhcmFtIHshc3RyaW5nfSBkZmx0IFRoZSBkZWZhdWx0IHZhbHVlIGFuZCBwYXR0ZXJuIHRvIGZvbGxvdy4gU28gXCIwcHggMHB4IDBweCAwcHggIzc3N1wiIHdpbGwgZW5zdXJlIHRoYXQgNCBudW1iZXJzIGFuZCBhIGNvbG9yIHdpbGwgYWx3YXlzIGdldCByZXR1cm5lZC5cblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW49fSBjbHIgSWYgdHJ1ZSwgdGhlIHZhbHVlcyBzaG91bGQgYmUgc2VhcmNoZWQgZm9yIGNvbG9yLXJlbGF0ZWQgZGF0YS4gRm9yIGV4YW1wbGUsIGJveFNoYWRvdyB2YWx1ZXMgdHlwaWNhbGx5IGNvbnRhaW4gYSBjb2xvciB3aGVyZWFzIGJvcmRlclJhZGl1cyBkb24ndC5cblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW49fSBjb2xsYXBzaWJsZSBJZiB0cnVlLCB0aGUgdmFsdWUgaXMgYSB0b3AvbGVmdC9yaWdodC9ib3R0b20gc3R5bGUgb25lIHRoYXQgYWN0cyBsaWtlIG1hcmdpbiBvciBwYWRkaW5nLCB3aGVyZSBpZiBvbmx5IG9uZSB2YWx1ZSBpcyByZWNlaXZlZCwgaXQncyB1c2VkIGZvciBhbGwgNDsgaWYgMiBhcmUgcmVjZWl2ZWQsIHRoZSBmaXJzdCBpcyBkdXBsaWNhdGVkIGZvciAzcmQgKGJvdHRvbSkgYW5kIHRoZSAybmQgaXMgZHVwbGljYXRlZCBmb3IgdGhlIDR0aCBzcG90IChsZWZ0KSwgZXRjLlxuXHRcdCAqIEByZXR1cm4ge0Z1bmN0aW9ufSBmb3JtYXR0ZXIgZnVuY3Rpb25cblx0XHQgKi9cblx0XHR2YXIgX2dldEZvcm1hdHRlciA9IGZ1bmN0aW9uKGRmbHQsIGNsciwgY29sbGFwc2libGUsIG11bHRpKSB7XG5cdFx0XHRcdGlmIChkZmx0ID09IG51bGwpIHtcblx0XHRcdFx0XHRyZXR1cm4gZnVuY3Rpb24odikge3JldHVybiB2O307XG5cdFx0XHRcdH1cblx0XHRcdFx0dmFyIGRDb2xvciA9IGNsciA/IChkZmx0Lm1hdGNoKF9jb2xvckV4cCkgfHwgW1wiXCJdKVswXSA6IFwiXCIsXG5cdFx0XHRcdFx0ZFZhbHMgPSBkZmx0LnNwbGl0KGRDb2xvcikuam9pbihcIlwiKS5tYXRjaChfdmFsdWVzRXhwKSB8fCBbXSxcblx0XHRcdFx0XHRwZnggPSBkZmx0LnN1YnN0cigwLCBkZmx0LmluZGV4T2YoZFZhbHNbMF0pKSxcblx0XHRcdFx0XHRzZnggPSAoZGZsdC5jaGFyQXQoZGZsdC5sZW5ndGggLSAxKSA9PT0gXCIpXCIpID8gXCIpXCIgOiBcIlwiLFxuXHRcdFx0XHRcdGRlbGltID0gKGRmbHQuaW5kZXhPZihcIiBcIikgIT09IC0xKSA/IFwiIFwiIDogXCIsXCIsXG5cdFx0XHRcdFx0bnVtVmFscyA9IGRWYWxzLmxlbmd0aCxcblx0XHRcdFx0XHRkU2Z4ID0gKG51bVZhbHMgPiAwKSA/IGRWYWxzWzBdLnJlcGxhY2UoX251bUV4cCwgXCJcIikgOiBcIlwiLFxuXHRcdFx0XHRcdGZvcm1hdHRlcjtcblx0XHRcdFx0aWYgKCFudW1WYWxzKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uKHYpIHtyZXR1cm4gdjt9O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChjbHIpIHtcblx0XHRcdFx0XHRmb3JtYXR0ZXIgPSBmdW5jdGlvbih2KSB7XG5cdFx0XHRcdFx0XHR2YXIgY29sb3IsIHZhbHMsIGksIGE7XG5cdFx0XHRcdFx0XHRpZiAodHlwZW9mKHYpID09PSBcIm51bWJlclwiKSB7XG5cdFx0XHRcdFx0XHRcdHYgKz0gZFNmeDtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobXVsdGkgJiYgX2NvbW1hc091dHNpZGVQYXJlbkV4cC50ZXN0KHYpKSB7XG5cdFx0XHRcdFx0XHRcdGEgPSB2LnJlcGxhY2UoX2NvbW1hc091dHNpZGVQYXJlbkV4cCwgXCJ8XCIpLnNwbGl0KFwifFwiKTtcblx0XHRcdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdFx0XHRhW2ldID0gZm9ybWF0dGVyKGFbaV0pO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHJldHVybiBhLmpvaW4oXCIsXCIpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Y29sb3IgPSAodi5tYXRjaChfY29sb3JFeHApIHx8IFtkQ29sb3JdKVswXTtcblx0XHRcdFx0XHRcdHZhbHMgPSB2LnNwbGl0KGNvbG9yKS5qb2luKFwiXCIpLm1hdGNoKF92YWx1ZXNFeHApIHx8IFtdO1xuXHRcdFx0XHRcdFx0aSA9IHZhbHMubGVuZ3RoO1xuXHRcdFx0XHRcdFx0aWYgKG51bVZhbHMgPiBpLS0pIHtcblx0XHRcdFx0XHRcdFx0d2hpbGUgKCsraSA8IG51bVZhbHMpIHtcblx0XHRcdFx0XHRcdFx0XHR2YWxzW2ldID0gY29sbGFwc2libGUgPyB2YWxzWygoKGkgLSAxKSAvIDIpIHwgMCldIDogZFZhbHNbaV07XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHJldHVybiBwZnggKyB2YWxzLmpvaW4oZGVsaW0pICsgZGVsaW0gKyBjb2xvciArIHNmeCArICh2LmluZGV4T2YoXCJpbnNldFwiKSAhPT0gLTEgPyBcIiBpbnNldFwiIDogXCJcIik7XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRyZXR1cm4gZm9ybWF0dGVyO1xuXG5cdFx0XHRcdH1cblx0XHRcdFx0Zm9ybWF0dGVyID0gZnVuY3Rpb24odikge1xuXHRcdFx0XHRcdHZhciB2YWxzLCBhLCBpO1xuXHRcdFx0XHRcdGlmICh0eXBlb2YodikgPT09IFwibnVtYmVyXCIpIHtcblx0XHRcdFx0XHRcdHYgKz0gZFNmeDtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKG11bHRpICYmIF9jb21tYXNPdXRzaWRlUGFyZW5FeHAudGVzdCh2KSkge1xuXHRcdFx0XHRcdFx0YSA9IHYucmVwbGFjZShfY29tbWFzT3V0c2lkZVBhcmVuRXhwLCBcInxcIikuc3BsaXQoXCJ8XCIpO1xuXHRcdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdFx0YVtpXSA9IGZvcm1hdHRlcihhW2ldKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHJldHVybiBhLmpvaW4oXCIsXCIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR2YWxzID0gdi5tYXRjaChfdmFsdWVzRXhwKSB8fCBbXTtcblx0XHRcdFx0XHRpID0gdmFscy5sZW5ndGg7XG5cdFx0XHRcdFx0aWYgKG51bVZhbHMgPiBpLS0pIHtcblx0XHRcdFx0XHRcdHdoaWxlICgrK2kgPCBudW1WYWxzKSB7XG5cdFx0XHRcdFx0XHRcdHZhbHNbaV0gPSBjb2xsYXBzaWJsZSA/IHZhbHNbKCgoaSAtIDEpIC8gMikgfCAwKV0gOiBkVmFsc1tpXTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIHBmeCArIHZhbHMuam9pbihkZWxpbSkgKyBzZng7XG5cdFx0XHRcdH07XG5cdFx0XHRcdHJldHVybiBmb3JtYXR0ZXI7XG5cdFx0XHR9LFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIEBwcml2YXRlIHJldHVybnMgYSBmb3JtYXR0ZXIgZnVuY3Rpb24gdGhhdCdzIHVzZWQgZm9yIGVkZ2UtcmVsYXRlZCB2YWx1ZXMgbGlrZSBtYXJnaW5Ub3AsIG1hcmdpbkxlZnQsIHBhZGRpbmdCb3R0b20sIHBhZGRpbmdSaWdodCwgZXRjLiBKdXN0IHBhc3MgYSBjb21tYS1kZWxpbWl0ZWQgbGlzdCBvZiBwcm9wZXJ0eSBuYW1lcyByZWxhdGVkIHRvIHRoZSBlZGdlcy5cblx0XHRcdCAqIEBwYXJhbSB7IXN0cmluZ30gcHJvcHMgYSBjb21tYS1kZWxpbWl0ZWQgbGlzdCBvZiBwcm9wZXJ0eSBuYW1lcyBpbiBvcmRlciBmcm9tIHRvcCB0byBsZWZ0LCBsaWtlIFwibWFyZ2luVG9wLG1hcmdpblJpZ2h0LG1hcmdpbkJvdHRvbSxtYXJnaW5MZWZ0XCJcblx0XHRcdCAqIEByZXR1cm4ge0Z1bmN0aW9ufSBhIGZvcm1hdHRlciBmdW5jdGlvblxuXHRcdFx0ICovXG5cdFx0XHRfZ2V0RWRnZVBhcnNlciA9IGZ1bmN0aW9uKHByb3BzKSB7XG5cdFx0XHRcdHByb3BzID0gcHJvcHMuc3BsaXQoXCIsXCIpO1xuXHRcdFx0XHRyZXR1cm4gZnVuY3Rpb24odCwgZSwgcCwgY3NzcCwgcHQsIHBsdWdpbiwgdmFycykge1xuXHRcdFx0XHRcdHZhciBhID0gKGUgKyBcIlwiKS5zcGxpdChcIiBcIiksXG5cdFx0XHRcdFx0XHRpO1xuXHRcdFx0XHRcdHZhcnMgPSB7fTtcblx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgNDsgaSsrKSB7XG5cdFx0XHRcdFx0XHR2YXJzW3Byb3BzW2ldXSA9IGFbaV0gPSBhW2ldIHx8IGFbKCgoaSAtIDEpIC8gMikgPj4gMCldO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gY3NzcC5wYXJzZSh0LCB2YXJzLCBwdCwgcGx1Z2luKTtcblx0XHRcdFx0fTtcblx0XHRcdH0sXG5cblx0XHRcdC8vIEBwcml2YXRlIHVzZWQgd2hlbiBvdGhlciBwbHVnaW5zIG11c3QgdHdlZW4gdmFsdWVzIGZpcnN0LCBsaWtlIEJlemllclBsdWdpbiBvciBUaHJvd1Byb3BzUGx1Z2luLCBldGMuIFRoYXQgcGx1Z2luJ3Mgc2V0UmF0aW8oKSBnZXRzIGNhbGxlZCBmaXJzdCBzbyB0aGF0IHRoZSB2YWx1ZXMgYXJlIHVwZGF0ZWQsIGFuZCB0aGVuIHdlIGxvb3AgdGhyb3VnaCB0aGUgTWluaVByb3BUd2VlbnMgIHdoaWNoIGhhbmRsZSBjb3B5aW5nIHRoZSB2YWx1ZXMgaW50byB0aGVpciBhcHByb3ByaWF0ZSBzbG90cyBzbyB0aGF0IHRoZXkgY2FuIHRoZW4gYmUgYXBwbGllZCBjb3JyZWN0bHkgaW4gdGhlIG1haW4gQ1NTUGx1Z2luIHNldFJhdGlvKCkgbWV0aG9kLiBSZW1lbWJlciwgd2UgdHlwaWNhbGx5IGNyZWF0ZSBhIHByb3h5IG9iamVjdCB0aGF0IGhhcyBhIGJ1bmNoIG9mIHVuaXF1ZWx5LW5hbWVkIHByb3BlcnRpZXMgdGhhdCB3ZSBmZWVkIHRvIHRoZSBzdWItcGx1Z2luIGFuZCBpdCBkb2VzIGl0cyBtYWdpYyBub3JtYWxseSwgYW5kIHRoZW4gd2UgbXVzdCBpbnRlcnByZXQgdGhvc2UgdmFsdWVzIGFuZCBhcHBseSB0aGVtIHRvIHRoZSBjc3MgYmVjYXVzZSBvZnRlbiBudW1iZXJzIG11c3QgZ2V0IGNvbWJpbmVkL2NvbmNhdGVuYXRlZCwgc3VmZml4ZXMgYWRkZWQsIGV0Yy4gdG8gd29yayB3aXRoIGNzcywgbGlrZSBib3hTaGFkb3cgY291bGQgaGF2ZSA0IHZhbHVlcyBwbHVzIGEgY29sb3IuXG5cdFx0XHRfc2V0UGx1Z2luUmF0aW8gPSBfaW50ZXJuYWxzLl9zZXRQbHVnaW5SYXRpbyA9IGZ1bmN0aW9uKHYpIHtcblx0XHRcdFx0dGhpcy5wbHVnaW4uc2V0UmF0aW8odik7XG5cdFx0XHRcdHZhciBkID0gdGhpcy5kYXRhLFxuXHRcdFx0XHRcdHByb3h5ID0gZC5wcm94eSxcblx0XHRcdFx0XHRtcHQgPSBkLmZpcnN0TVBULFxuXHRcdFx0XHRcdG1pbiA9IDAuMDAwMDAxLFxuXHRcdFx0XHRcdHZhbCwgcHQsIGksIHN0cjtcblx0XHRcdFx0d2hpbGUgKG1wdCkge1xuXHRcdFx0XHRcdHZhbCA9IHByb3h5W21wdC52XTtcblx0XHRcdFx0XHRpZiAobXB0LnIpIHtcblx0XHRcdFx0XHRcdHZhbCA9IE1hdGgucm91bmQodmFsKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHZhbCA8IG1pbiAmJiB2YWwgPiAtbWluKSB7XG5cdFx0XHRcdFx0XHR2YWwgPSAwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRtcHQudFttcHQucF0gPSB2YWw7XG5cdFx0XHRcdFx0bXB0ID0gbXB0Ll9uZXh0O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkLmF1dG9Sb3RhdGUpIHtcblx0XHRcdFx0XHRkLmF1dG9Sb3RhdGUucm90YXRpb24gPSBwcm94eS5yb3RhdGlvbjtcblx0XHRcdFx0fVxuXHRcdFx0XHQvL2F0IHRoZSBlbmQsIHdlIG11c3Qgc2V0IHRoZSBDU1NQcm9wVHdlZW4ncyBcImVcIiAoZW5kKSB2YWx1ZSBkeW5hbWljYWxseSBoZXJlIGJlY2F1c2UgdGhhdCdzIHdoYXQgaXMgdXNlZCBpbiB0aGUgZmluYWwgc2V0UmF0aW8oKSBtZXRob2QuXG5cdFx0XHRcdGlmICh2ID09PSAxKSB7XG5cdFx0XHRcdFx0bXB0ID0gZC5maXJzdE1QVDtcblx0XHRcdFx0XHR3aGlsZSAobXB0KSB7XG5cdFx0XHRcdFx0XHRwdCA9IG1wdC50O1xuXHRcdFx0XHRcdFx0aWYgKCFwdC50eXBlKSB7XG5cdFx0XHRcdFx0XHRcdHB0LmUgPSBwdC5zICsgcHQueHMwO1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChwdC50eXBlID09PSAxKSB7XG5cdFx0XHRcdFx0XHRcdHN0ciA9IHB0LnhzMCArIHB0LnMgKyBwdC54czE7XG5cdFx0XHRcdFx0XHRcdGZvciAoaSA9IDE7IGkgPCBwdC5sOyBpKyspIHtcblx0XHRcdFx0XHRcdFx0XHRzdHIgKz0gcHRbXCJ4blwiK2ldICsgcHRbXCJ4c1wiKyhpKzEpXTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRwdC5lID0gc3RyO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0bXB0ID0gbXB0Ll9uZXh0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBAcHJpdmF0ZSBAY29uc3RydWN0b3IgVXNlZCBieSBhIGZldyBTcGVjaWFsUHJvcHMgdG8gaG9sZCBpbXBvcnRhbnQgdmFsdWVzIGZvciBwcm94aWVzLiBGb3IgZXhhbXBsZSwgX3BhcnNlVG9Qcm94eSgpIGNyZWF0ZXMgYSBNaW5pUHJvcFR3ZWVuIGluc3RhbmNlIGZvciBlYWNoIHByb3BlcnR5IHRoYXQgbXVzdCBnZXQgdHdlZW5lZCBvbiB0aGUgcHJveHksIGFuZCB3ZSByZWNvcmQgdGhlIG9yaWdpbmFsIHByb3BlcnR5IG5hbWUgYXMgd2VsbCBhcyB0aGUgdW5pcXVlIG9uZSB3ZSBjcmVhdGUgZm9yIHRoZSBwcm94eSwgcGx1cyB3aGV0aGVyIG9yIG5vdCB0aGUgdmFsdWUgbmVlZHMgdG8gYmUgcm91bmRlZCBwbHVzIHRoZSBvcmlnaW5hbCB2YWx1ZS5cblx0XHRcdCAqIEBwYXJhbSB7IU9iamVjdH0gdCB0YXJnZXQgb2JqZWN0IHdob3NlIHByb3BlcnR5IHdlJ3JlIHR3ZWVuaW5nIChvZnRlbiBhIENTU1Byb3BUd2Vlbilcblx0XHRcdCAqIEBwYXJhbSB7IXN0cmluZ30gcCBwcm9wZXJ0eSBuYW1lXG5cdFx0XHQgKiBAcGFyYW0geyhudW1iZXJ8c3RyaW5nfG9iamVjdCl9IHYgdmFsdWVcblx0XHRcdCAqIEBwYXJhbSB7TWluaVByb3BUd2Vlbj19IG5leHQgbmV4dCBNaW5pUHJvcFR3ZWVuIGluIHRoZSBsaW5rZWQgbGlzdFxuXHRcdFx0ICogQHBhcmFtIHtib29sZWFuPX0gciBpZiB0cnVlLCB0aGUgdHdlZW5lZCB2YWx1ZSBzaG91bGQgYmUgcm91bmRlZCB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG5cdFx0XHQgKi9cblx0XHRcdE1pbmlQcm9wVHdlZW4gPSBmdW5jdGlvbih0LCBwLCB2LCBuZXh0LCByKSB7XG5cdFx0XHRcdHRoaXMudCA9IHQ7XG5cdFx0XHRcdHRoaXMucCA9IHA7XG5cdFx0XHRcdHRoaXMudiA9IHY7XG5cdFx0XHRcdHRoaXMuciA9IHI7XG5cdFx0XHRcdGlmIChuZXh0KSB7XG5cdFx0XHRcdFx0bmV4dC5fcHJldiA9IHRoaXM7XG5cdFx0XHRcdFx0dGhpcy5fbmV4dCA9IG5leHQ7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogQHByaXZhdGUgTW9zdCBvdGhlciBwbHVnaW5zIChsaWtlIEJlemllclBsdWdpbiBhbmQgVGhyb3dQcm9wc1BsdWdpbiBhbmQgb3RoZXJzKSBjYW4gb25seSB0d2VlbiBudW1lcmljIHZhbHVlcywgYnV0IENTU1BsdWdpbiBtdXN0IGFjY29tbW9kYXRlIHNwZWNpYWwgdmFsdWVzIHRoYXQgaGF2ZSBhIGJ1bmNoIG9mIGV4dHJhIGRhdGEgKGxpa2UgYSBzdWZmaXggb3Igc3RyaW5ncyBiZXR3ZWVuIG51bWVyaWMgdmFsdWVzLCBldGMuKS4gRm9yIGV4YW1wbGUsIGJveFNoYWRvdyBoYXMgdmFsdWVzIGxpa2UgXCIxMHB4IDEwcHggMjBweCAzMHB4IHJnYigyNTUsMCwwKVwiIHdoaWNoIHdvdWxkIHV0dGVybHkgY29uZnVzZSBvdGhlciBwbHVnaW5zLiBUaGlzIG1ldGhvZCBhbGxvd3MgdXMgdG8gc3BsaXQgdGhhdCBkYXRhIGFwYXJ0IGFuZCBncmFiIG9ubHkgdGhlIG51bWVyaWMgZGF0YSBhbmQgYXR0YWNoIGl0IHRvIHVuaXF1ZWx5LW5hbWVkIHByb3BlcnRpZXMgb2YgYSBnZW5lcmljIHByb3h5IG9iamVjdCAoe30pIHNvIHRoYXQgd2UgY2FuIGZlZWQgdGhhdCB0byB2aXJ0dWFsbHkgYW55IHBsdWdpbiB0byBoYXZlIHRoZSBudW1iZXJzIHR3ZWVuZWQuIEhvd2V2ZXIsIHdlIG11c3QgYWxzbyBrZWVwIHRyYWNrIG9mIHdoaWNoIHByb3BlcnRpZXMgZnJvbSB0aGUgcHJveHkgZ28gd2l0aCB3aGljaCBDU1NQcm9wVHdlZW4gdmFsdWVzIGFuZCBpbnN0YW5jZXMuIFNvIHdlIGNyZWF0ZSBhIGxpbmtlZCBsaXN0IG9mIE1pbmlQcm9wVHdlZW5zLiBFYWNoIG9uZSByZWNvcmRzIGEgdGFyZ2V0ICh0aGUgb3JpZ2luYWwgQ1NTUHJvcFR3ZWVuKSwgcHJvcGVydHkgKGxpa2UgXCJzXCIgb3IgXCJ4bjFcIiBvciBcInhuMlwiKSB0aGF0IHdlJ3JlIHR3ZWVuaW5nIGFuZCB0aGUgdW5pcXVlIHByb3BlcnR5IG5hbWUgdGhhdCB3YXMgdXNlZCBmb3IgdGhlIHByb3h5IChsaWtlIFwiYm94U2hhZG93X3huMVwiIGFuZCBcImJveFNoYWRvd194bjJcIikgYW5kIHdoZXRoZXIgb3Igbm90IHRoZXkgbmVlZCB0byBiZSByb3VuZGVkLiBUaGF0IHdheSwgaW4gdGhlIF9zZXRQbHVnaW5SYXRpbygpIG1ldGhvZCB3ZSBjYW4gc2ltcGx5IGNvcHkgdGhlIHZhbHVlcyBvdmVyIGZyb20gdGhlIHByb3h5IHRvIHRoZSBDU1NQcm9wVHdlZW4gaW5zdGFuY2UocykuIFRoZW4sIHdoZW4gdGhlIG1haW4gQ1NTUGx1Z2luIHNldFJhdGlvKCkgbWV0aG9kIHJ1bnMgYW5kIGFwcGxpZXMgdGhlIENTU1Byb3BUd2VlbiB2YWx1ZXMgYWNjb3JkaW5nbHksIHRoZXkncmUgdXBkYXRlZCBuaWNlbHkuIFNvIHRoZSBleHRlcm5hbCBwbHVnaW4gdHdlZW5zIHRoZSBudW1iZXJzLCBfc2V0UGx1Z2luUmF0aW8oKSBjb3BpZXMgdGhlbSBvdmVyLCBhbmQgc2V0UmF0aW8oKSBhY3RzIG5vcm1hbGx5LCBhcHBseWluZyBjc3Mtc3BlY2lmaWMgdmFsdWVzIHRvIHRoZSBlbGVtZW50LlxuXHRcdFx0ICogVGhpcyBtZXRob2QgcmV0dXJucyBhbiBvYmplY3QgdGhhdCBoYXMgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuXHRcdFx0ICogIC0gcHJveHk6IGEgZ2VuZXJpYyBvYmplY3QgY29udGFpbmluZyB0aGUgc3RhcnRpbmcgdmFsdWVzIGZvciBhbGwgdGhlIHByb3BlcnRpZXMgdGhhdCB3aWxsIGJlIHR3ZWVuZWQgYnkgdGhlIGV4dGVybmFsIHBsdWdpbi4gIFRoaXMgaXMgd2hhdCB3ZSBmZWVkIHRvIHRoZSBleHRlcm5hbCBfb25Jbml0VHdlZW4oKSBhcyB0aGUgdGFyZ2V0XG5cdFx0XHQgKiAgLSBlbmQ6IGEgZ2VuZXJpYyBvYmplY3QgY29udGFpbmluZyB0aGUgZW5kaW5nIHZhbHVlcyBmb3IgYWxsIHRoZSBwcm9wZXJ0aWVzIHRoYXQgd2lsbCBiZSB0d2VlbmVkIGJ5IHRoZSBleHRlcm5hbCBwbHVnaW4uIFRoaXMgaXMgd2hhdCB3ZSBmZWVkIHRvIHRoZSBleHRlcm5hbCBwbHVnaW4ncyBfb25Jbml0VHdlZW4oKSBhcyB0aGUgZGVzdGluYXRpb24gdmFsdWVzXG5cdFx0XHQgKiAgLSBmaXJzdE1QVDogdGhlIGZpcnN0IE1pbmlQcm9wVHdlZW4gaW4gdGhlIGxpbmtlZCBsaXN0XG5cdFx0XHQgKiAgLSBwdDogdGhlIGZpcnN0IENTU1Byb3BUd2VlbiBpbiB0aGUgbGlua2VkIGxpc3QgdGhhdCB3YXMgY3JlYXRlZCB3aGVuIHBhcnNpbmcuIElmIHNoYWxsb3cgaXMgdHJ1ZSwgdGhpcyBsaW5rZWQgbGlzdCB3aWxsIE5PVCBhdHRhY2ggdG8gdGhlIG9uZSBwYXNzZWQgaW50byB0aGUgX3BhcnNlVG9Qcm94eSgpIGFzIHRoZSBcInB0XCIgKDR0aCkgcGFyYW1ldGVyLlxuXHRcdFx0ICogQHBhcmFtIHshT2JqZWN0fSB0IHRhcmdldCBvYmplY3QgdG8gYmUgdHdlZW5lZFxuXHRcdFx0ICogQHBhcmFtIHshKE9iamVjdHxzdHJpbmcpfSB2YXJzIHRoZSBvYmplY3QgY29udGFpbmluZyB0aGUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHR3ZWVuaW5nIHZhbHVlcyAodHlwaWNhbGx5IHRoZSBlbmQvZGVzdGluYXRpb24gdmFsdWVzKSB0aGF0IHNob3VsZCBiZSBwYXJzZWRcblx0XHRcdCAqIEBwYXJhbSB7IUNTU1BsdWdpbn0gY3NzcCBUaGUgQ1NTUGx1Z2luIGluc3RhbmNlXG5cdFx0XHQgKiBAcGFyYW0ge0NTU1Byb3BUd2Vlbj19IHB0IHRoZSBuZXh0IENTU1Byb3BUd2VlbiBpbiB0aGUgbGlua2VkIGxpc3Rcblx0XHRcdCAqIEBwYXJhbSB7VHdlZW5QbHVnaW49fSBwbHVnaW4gdGhlIGV4dGVybmFsIFR3ZWVuUGx1Z2luIGluc3RhbmNlIHRoYXQgd2lsbCBiZSBoYW5kbGluZyB0d2VlbmluZyB0aGUgbnVtZXJpYyB2YWx1ZXNcblx0XHRcdCAqIEBwYXJhbSB7Ym9vbGVhbj19IHNoYWxsb3cgaWYgdHJ1ZSwgdGhlIHJlc3VsdGluZyBsaW5rZWQgbGlzdCBmcm9tIHRoZSBwYXJzZSB3aWxsIE5PVCBiZSBhdHRhY2hlZCB0byB0aGUgQ1NTUHJvcFR3ZWVuIHRoYXQgd2FzIHBhc3NlZCBpbiBhcyB0aGUgXCJwdFwiICg0dGgpIHBhcmFtZXRlci5cblx0XHRcdCAqIEByZXR1cm4gQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOiBwcm94eSwgZW5kLCBmaXJzdE1QVCwgYW5kIHB0IChzZWUgYWJvdmUgZm9yIGRlc2NyaXB0aW9ucylcblx0XHRcdCAqL1xuXHRcdFx0X3BhcnNlVG9Qcm94eSA9IF9pbnRlcm5hbHMuX3BhcnNlVG9Qcm94eSA9IGZ1bmN0aW9uKHQsIHZhcnMsIGNzc3AsIHB0LCBwbHVnaW4sIHNoYWxsb3cpIHtcblx0XHRcdFx0dmFyIGJwdCA9IHB0LFxuXHRcdFx0XHRcdHN0YXJ0ID0ge30sXG5cdFx0XHRcdFx0ZW5kID0ge30sXG5cdFx0XHRcdFx0dHJhbnNmb3JtID0gY3NzcC5fdHJhbnNmb3JtLFxuXHRcdFx0XHRcdG9sZEZvcmNlID0gX2ZvcmNlUFQsXG5cdFx0XHRcdFx0aSwgcCwgeHAsIG1wdCwgZmlyc3RQVDtcblx0XHRcdFx0Y3NzcC5fdHJhbnNmb3JtID0gbnVsbDtcblx0XHRcdFx0X2ZvcmNlUFQgPSB2YXJzO1xuXHRcdFx0XHRwdCA9IGZpcnN0UFQgPSBjc3NwLnBhcnNlKHQsIHZhcnMsIHB0LCBwbHVnaW4pO1xuXHRcdFx0XHRfZm9yY2VQVCA9IG9sZEZvcmNlO1xuXHRcdFx0XHQvL2JyZWFrIG9mZiBmcm9tIHRoZSBsaW5rZWQgbGlzdCBzbyB0aGUgbmV3IG9uZXMgYXJlIGlzb2xhdGVkLlxuXHRcdFx0XHRpZiAoc2hhbGxvdykge1xuXHRcdFx0XHRcdGNzc3AuX3RyYW5zZm9ybSA9IHRyYW5zZm9ybTtcblx0XHRcdFx0XHRpZiAoYnB0KSB7XG5cdFx0XHRcdFx0XHRicHQuX3ByZXYgPSBudWxsO1xuXHRcdFx0XHRcdFx0aWYgKGJwdC5fcHJldikge1xuXHRcdFx0XHRcdFx0XHRicHQuX3ByZXYuX25leHQgPSBudWxsO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHR3aGlsZSAocHQgJiYgcHQgIT09IGJwdCkge1xuXHRcdFx0XHRcdGlmIChwdC50eXBlIDw9IDEpIHtcblx0XHRcdFx0XHRcdHAgPSBwdC5wO1xuXHRcdFx0XHRcdFx0ZW5kW3BdID0gcHQucyArIHB0LmM7XG5cdFx0XHRcdFx0XHRzdGFydFtwXSA9IHB0LnM7XG5cdFx0XHRcdFx0XHRpZiAoIXNoYWxsb3cpIHtcblx0XHRcdFx0XHRcdFx0bXB0ID0gbmV3IE1pbmlQcm9wVHdlZW4ocHQsIFwic1wiLCBwLCBtcHQsIHB0LnIpO1xuXHRcdFx0XHRcdFx0XHRwdC5jID0gMDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmIChwdC50eXBlID09PSAxKSB7XG5cdFx0XHRcdFx0XHRcdGkgPSBwdC5sO1xuXHRcdFx0XHRcdFx0XHR3aGlsZSAoLS1pID4gMCkge1xuXHRcdFx0XHRcdFx0XHRcdHhwID0gXCJ4blwiICsgaTtcblx0XHRcdFx0XHRcdFx0XHRwID0gcHQucCArIFwiX1wiICsgeHA7XG5cdFx0XHRcdFx0XHRcdFx0ZW5kW3BdID0gcHQuZGF0YVt4cF07XG5cdFx0XHRcdFx0XHRcdFx0c3RhcnRbcF0gPSBwdFt4cF07XG5cdFx0XHRcdFx0XHRcdFx0aWYgKCFzaGFsbG93KSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRtcHQgPSBuZXcgTWluaVByb3BUd2VlbihwdCwgeHAsIHAsIG1wdCwgcHQucnhwW3hwXSk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHB0ID0gcHQuX25leHQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHtwcm94eTpzdGFydCwgZW5kOmVuZCwgZmlyc3RNUFQ6bXB0LCBwdDpmaXJzdFBUfTtcblx0XHRcdH0sXG5cblxuXG5cdFx0XHQvKipcblx0XHRcdCAqIEBjb25zdHJ1Y3RvciBFYWNoIHByb3BlcnR5IHRoYXQgaXMgdHdlZW5lZCBoYXMgYXQgbGVhc3Qgb25lIENTU1Byb3BUd2VlbiBhc3NvY2lhdGVkIHdpdGggaXQuIFRoZXNlIGluc3RhbmNlcyBzdG9yZSBpbXBvcnRhbnQgaW5mb3JtYXRpb24gbGlrZSB0aGUgdGFyZ2V0LCBwcm9wZXJ0eSwgc3RhcnRpbmcgdmFsdWUsIGFtb3VudCBvZiBjaGFuZ2UsIGV0Yy4gVGhleSBjYW4gYWxzbyBvcHRpb25hbGx5IGhhdmUgYSBudW1iZXIgb2YgXCJleHRyYVwiIHN0cmluZ3MgYW5kIG51bWVyaWMgdmFsdWVzIG5hbWVkIHhzMSwgeG4xLCB4czIsIHhuMiwgeHMzLCB4bjMsIGV0Yy4gd2hlcmUgXCJzXCIgaW5kaWNhdGVzIHN0cmluZyBhbmQgXCJuXCIgaW5kaWNhdGVzIG51bWJlci4gVGhlc2UgY2FuIGJlIHBpZWNlZCB0b2dldGhlciBpbiBhIGNvbXBsZXgtdmFsdWUgdHdlZW4gKHR5cGU6MSkgdGhhdCBoYXMgYWx0ZXJuYXRpbmcgdHlwZXMgb2YgZGF0YSBsaWtlIGEgc3RyaW5nLCBudW1iZXIsIHN0cmluZywgbnVtYmVyLCBldGMuIEZvciBleGFtcGxlLCBib3hTaGFkb3cgY291bGQgYmUgXCI1cHggNXB4IDhweCByZ2IoMTAyLCAxMDIsIDUxKVwiLiBJbiB0aGF0IHZhbHVlLCB0aGVyZSBhcmUgNiBudW1iZXJzIHRoYXQgbWF5IG5lZWQgdG8gdHdlZW4gYW5kIHRoZW4gcGllY2VkIGJhY2sgdG9nZXRoZXIgaW50byBhIHN0cmluZyBhZ2FpbiB3aXRoIHNwYWNlcywgc3VmZml4ZXMsIGV0Yy4geHMwIGlzIHNwZWNpYWwgaW4gdGhhdCBpdCBzdG9yZXMgdGhlIHN1ZmZpeCBmb3Igc3RhbmRhcmQgKHR5cGU6MCkgdHdlZW5zLCAtT1ItIHRoZSBmaXJzdCBzdHJpbmcgKHByZWZpeCkgaW4gYSBjb21wbGV4LXZhbHVlICh0eXBlOjEpIENTU1Byb3BUd2VlbiAtT1ItIGl0IGNhbiBiZSB0aGUgbm9uLXR3ZWVuaW5nIHZhbHVlIGluIGEgdHlwZTotMSBDU1NQcm9wVHdlZW4uIFdlIGRvIHRoaXMgdG8gY29uc2VydmUgbWVtb3J5LlxuXHRcdFx0ICogQ1NTUHJvcFR3ZWVucyBoYXZlIHRoZSBmb2xsb3dpbmcgb3B0aW9uYWwgcHJvcGVydGllcyBhcyB3ZWxsIChub3QgZGVmaW5lZCB0aHJvdWdoIHRoZSBjb25zdHJ1Y3Rvcik6XG5cdFx0XHQgKiAgLSBsOiBMZW5ndGggaW4gdGVybXMgb2YgdGhlIG51bWJlciBvZiBleHRyYSBwcm9wZXJ0aWVzIHRoYXQgdGhlIENTU1Byb3BUd2VlbiBoYXMgKGRlZmF1bHQ6IDApLiBGb3IgZXhhbXBsZSwgZm9yIGEgYm94U2hhZG93IHdlIG1heSBuZWVkIHRvIHR3ZWVuIDUgbnVtYmVycyBpbiB3aGljaCBjYXNlIGwgd291bGQgYmUgNTsgS2VlcCBpbiBtaW5kIHRoYXQgdGhlIHN0YXJ0L2VuZCB2YWx1ZXMgZm9yIHRoZSBmaXJzdCBudW1iZXIgdGhhdCdzIHR3ZWVuZWQgYXJlIGFsd2F5cyBzdG9yZWQgaW4gdGhlIHMgYW5kIGMgcHJvcGVydGllcyB0byBjb25zZXJ2ZSBtZW1vcnkuIEFsbCBhZGRpdGlvbmFsIHZhbHVlcyB0aGVyZWFmdGVyIGFyZSBzdG9yZWQgaW4geG4xLCB4bjIsIGV0Yy5cblx0XHRcdCAqICAtIHhmaXJzdDogVGhlIGZpcnN0IGluc3RhbmNlIG9mIGFueSBzdWItQ1NTUHJvcFR3ZWVucyB0aGF0IGFyZSB0d2VlbmluZyBwcm9wZXJ0aWVzIG9mIHRoaXMgaW5zdGFuY2UuIEZvciBleGFtcGxlLCB3ZSBtYXkgc3BsaXQgdXAgYSBib3hTaGFkb3cgdHdlZW4gc28gdGhhdCB0aGVyZSdzIGEgbWFpbiBDU1NQcm9wVHdlZW4gb2YgdHlwZToxIHRoYXQgaGFzIHZhcmlvdXMgeHMqIGFuZCB4biogdmFsdWVzIGFzc29jaWF0ZWQgd2l0aCB0aGUgaC1zaGFkb3csIHYtc2hhZG93LCBibHVyLCBjb2xvciwgZXRjLiBUaGVuIHdlIHNwYXduIGEgQ1NTUHJvcFR3ZWVuIGZvciBlYWNoIG9mIHRob3NlIHRoYXQgaGFzIGEgaGlnaGVyIHByaW9yaXR5IGFuZCBydW5zIEJFRk9SRSB0aGUgbWFpbiBDU1NQcm9wVHdlZW4gc28gdGhhdCB0aGUgdmFsdWVzIGFyZSBhbGwgc2V0IGJ5IHRoZSB0aW1lIGl0IG5lZWRzIHRvIHJlLWFzc2VtYmxlIHRoZW0uIFRoZSB4Zmlyc3QgZ2l2ZXMgdXMgYW4gZWFzeSB3YXkgdG8gaWRlbnRpZnkgdGhlIGZpcnN0IG9uZSBpbiB0aGF0IGNoYWluIHdoaWNoIHR5cGljYWxseSBlbmRzIGF0IHRoZSBtYWluIG9uZSAoYmVjYXVzZSB0aGV5J3JlIGFsbCBwcmVwZW5kZSB0byB0aGUgbGlua2VkIGxpc3QpXG5cdFx0XHQgKiAgLSBwbHVnaW46IFRoZSBUd2VlblBsdWdpbiBpbnN0YW5jZSB0aGF0IHdpbGwgaGFuZGxlIHRoZSB0d2VlbmluZyBvZiBhbnkgY29tcGxleCB2YWx1ZXMuIEZvciBleGFtcGxlLCBzb21ldGltZXMgd2UgZG9uJ3Qgd2FudCB0byB1c2Ugbm9ybWFsIHN1YnR3ZWVucyAobGlrZSB4Zmlyc3QgcmVmZXJzIHRvKSB0byB0d2VlbiB0aGUgdmFsdWVzIC0gd2UgbWlnaHQgd2FudCBUaHJvd1Byb3BzUGx1Z2luIG9yIEJlemllclBsdWdpbiBzb21lIG90aGVyIHBsdWdpbiB0byBkbyB0aGUgYWN0dWFsIHR3ZWVuaW5nLCBzbyB3ZSBjcmVhdGUgYSBwbHVnaW4gaW5zdGFuY2UgYW5kIHN0b3JlIGEgcmVmZXJlbmNlIGhlcmUuIFdlIG5lZWQgdGhpcyByZWZlcmVuY2Ugc28gdGhhdCBpZiB3ZSBnZXQgYSByZXF1ZXN0IHRvIHJvdW5kIHZhbHVlcyBvciBkaXNhYmxlIGEgdHdlZW4sIHdlIGNhbiBwYXNzIGFsb25nIHRoYXQgcmVxdWVzdC5cblx0XHRcdCAqICAtIGRhdGE6IEFyYml0cmFyeSBkYXRhIHRoYXQgbmVlZHMgdG8gYmUgc3RvcmVkIHdpdGggdGhlIENTU1Byb3BUd2Vlbi4gVHlwaWNhbGx5IGlmIHdlJ3JlIGdvaW5nIHRvIGhhdmUgYSBwbHVnaW4gaGFuZGxlIHRoZSB0d2VlbmluZyBvZiBhIGNvbXBsZXgtdmFsdWUgdHdlZW4sIHdlIGNyZWF0ZSBhIGdlbmVyaWMgb2JqZWN0IHRoYXQgc3RvcmVzIHRoZSBFTkQgdmFsdWVzIHRoYXQgd2UncmUgdHdlZW5pbmcgdG8gYW5kIHRoZSBDU1NQcm9wVHdlZW4ncyB4czEsIHhzMiwgZXRjLiBoYXZlIHRoZSBzdGFydGluZyB2YWx1ZXMuIFdlIHN0b3JlIHRoYXQgb2JqZWN0IGFzIGRhdGEuIFRoYXQgd2F5LCB3ZSBjYW4gc2ltcGx5IHBhc3MgdGhhdCBvYmplY3QgdG8gdGhlIHBsdWdpbiBhbmQgdXNlIHRoZSBDU1NQcm9wVHdlZW4gYXMgdGhlIHRhcmdldC5cblx0XHRcdCAqICAtIHNldFJhdGlvOiBPbmx5IHVzZWQgZm9yIHR5cGU6MiB0d2VlbnMgdGhhdCByZXF1aXJlIGN1c3RvbSBmdW5jdGlvbmFsaXR5LiBJbiB0aGlzIGNhc2UsIHdlIGNhbGwgdGhlIENTU1Byb3BUd2VlbidzIHNldFJhdGlvKCkgbWV0aG9kIGFuZCBwYXNzIHRoZSByYXRpbyBlYWNoIHRpbWUgdGhlIHR3ZWVuIHVwZGF0ZXMuIFRoaXMgaXNuJ3QgcXVpdGUgYXMgZWZmaWNpZW50IGFzIGRvaW5nIHRoaW5ncyBkaXJlY3RseSBpbiB0aGUgQ1NTUGx1Z2luJ3Mgc2V0UmF0aW8oKSBtZXRob2QsIGJ1dCBpdCdzIHZlcnkgY29udmVuaWVudCBhbmQgZmxleGlibGUuXG5cdFx0XHQgKiBAcGFyYW0geyFPYmplY3R9IHQgVGFyZ2V0IG9iamVjdCB3aG9zZSBwcm9wZXJ0eSB3aWxsIGJlIHR3ZWVuZWQuIE9mdGVuIGEgRE9NIGVsZW1lbnQsIGJ1dCBub3QgYWx3YXlzLiBJdCBjb3VsZCBiZSBhbnl0aGluZy5cblx0XHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBwIFByb3BlcnR5IHRvIHR3ZWVuIChuYW1lKS4gRm9yIGV4YW1wbGUsIHRvIHR3ZWVuIGVsZW1lbnQud2lkdGgsIHAgd291bGQgYmUgXCJ3aWR0aFwiLlxuXHRcdFx0ICogQHBhcmFtIHtudW1iZXJ9IHMgU3RhcnRpbmcgbnVtZXJpYyB2YWx1ZVxuXHRcdFx0ICogQHBhcmFtIHtudW1iZXJ9IGMgQ2hhbmdlIGluIG51bWVyaWMgdmFsdWUgb3ZlciB0aGUgY291cnNlIG9mIHRoZSBlbnRpcmUgdHdlZW4uIEZvciBleGFtcGxlLCBpZiBlbGVtZW50LndpZHRoIHN0YXJ0cyBhdCA1IGFuZCBzaG91bGQgZW5kIGF0IDEwMCwgYyB3b3VsZCBiZSA5NS5cblx0XHRcdCAqIEBwYXJhbSB7Q1NTUHJvcFR3ZWVuPX0gbmV4dCBUaGUgbmV4dCBDU1NQcm9wVHdlZW4gaW4gdGhlIGxpbmtlZCBsaXN0LiBJZiBvbmUgaXMgZGVmaW5lZCwgd2Ugd2lsbCBkZWZpbmUgaXRzIF9wcmV2IGFzIHRoZSBuZXcgaW5zdGFuY2UsIGFuZCB0aGUgbmV3IGluc3RhbmNlJ3MgX25leHQgd2lsbCBiZSBwb2ludGVkIGF0IGl0LlxuXHRcdFx0ICogQHBhcmFtIHtudW1iZXI9fSB0eXBlIFRoZSB0eXBlIG9mIENTU1Byb3BUd2VlbiB3aGVyZSAtMSA9IGEgbm9uLXR3ZWVuaW5nIHZhbHVlLCAwID0gYSBzdGFuZGFyZCBzaW1wbGUgdHdlZW4sIDEgPSBhIGNvbXBsZXggdmFsdWUgKGxpa2Ugb25lIHRoYXQgaGFzIG11bHRpcGxlIG51bWJlcnMgaW4gYSBjb21tYS0gb3Igc3BhY2UtZGVsaW1pdGVkIHN0cmluZyBsaWtlIGJvcmRlcjpcIjFweCBzb2xpZCByZWRcIiksIGFuZCAyID0gb25lIHRoYXQgdXNlcyBhIGN1c3RvbSBzZXRSYXRpbyBmdW5jdGlvbiB0aGF0IGRvZXMgYWxsIG9mIHRoZSB3b3JrIG9mIGFwcGx5aW5nIHRoZSB2YWx1ZXMgb24gZWFjaCB1cGRhdGUuXG5cdFx0XHQgKiBAcGFyYW0ge3N0cmluZz19IG4gTmFtZSBvZiB0aGUgcHJvcGVydHkgdGhhdCBzaG91bGQgYmUgdXNlZCBmb3Igb3ZlcndyaXRpbmcgcHVycG9zZXMgd2hpY2ggaXMgdHlwaWNhbGx5IHRoZSBzYW1lIGFzIHAgYnV0IG5vdCBhbHdheXMuIEZvciBleGFtcGxlLCB3ZSBtYXkgbmVlZCB0byBjcmVhdGUgYSBzdWJ0d2VlbiBmb3IgdGhlIDJuZCBwYXJ0IG9mIGEgXCJjbGlwOnJlY3QoLi4uKVwiIHR3ZWVuIGluIHdoaWNoIGNhc2UgXCJwXCIgbWlnaHQgYmUgeHMxIGJ1dCBcIm5cIiBpcyBzdGlsbCBcImNsaXBcIlxuXHRcdFx0ICogQHBhcmFtIHtib29sZWFuPX0gciBJZiB0cnVlLCB0aGUgdmFsdWUocykgc2hvdWxkIGJlIHJvdW5kZWRcblx0XHRcdCAqIEBwYXJhbSB7bnVtYmVyPX0gcHIgUHJpb3JpdHkgaW4gdGhlIGxpbmtlZCBsaXN0IG9yZGVyLiBIaWdoZXIgcHJpb3JpdHkgQ1NTUHJvcFR3ZWVucyB3aWxsIGJlIHVwZGF0ZWQgYmVmb3JlIGxvd2VyIHByaW9yaXR5IG9uZXMuIFRoZSBkZWZhdWx0IHByaW9yaXR5IGlzIDAuXG5cdFx0XHQgKiBAcGFyYW0ge3N0cmluZz19IGIgQmVnaW5uaW5nIHZhbHVlLiBXZSBzdG9yZSB0aGlzIHRvIGVuc3VyZSB0aGF0IGl0IGlzIEVYQUNUTFkgd2hhdCBpdCB3YXMgd2hlbiB0aGUgdHdlZW4gYmVnYW4gd2l0aG91dCBhbnkgcmlzayBvZiBpbnRlcnByZXRhdGlvbiBpc3N1ZXMuXG5cdFx0XHQgKiBAcGFyYW0ge3N0cmluZz19IGUgRW5kaW5nIHZhbHVlLiBXZSBzdG9yZSB0aGlzIHRvIGVuc3VyZSB0aGF0IGl0IGlzIEVYQUNUTFkgd2hhdCB0aGUgdXNlciBkZWZpbmVkIGF0IHRoZSBlbmQgb2YgdGhlIHR3ZWVuIHdpdGhvdXQgYW55IHJpc2sgb2YgaW50ZXJwcmV0YXRpb24gaXNzdWVzLlxuXHRcdFx0ICovXG5cdFx0XHRDU1NQcm9wVHdlZW4gPSBfaW50ZXJuYWxzLkNTU1Byb3BUd2VlbiA9IGZ1bmN0aW9uKHQsIHAsIHMsIGMsIG5leHQsIHR5cGUsIG4sIHIsIHByLCBiLCBlKSB7XG5cdFx0XHRcdHRoaXMudCA9IHQ7IC8vdGFyZ2V0XG5cdFx0XHRcdHRoaXMucCA9IHA7IC8vcHJvcGVydHlcblx0XHRcdFx0dGhpcy5zID0gczsgLy9zdGFydGluZyB2YWx1ZVxuXHRcdFx0XHR0aGlzLmMgPSBjOyAvL2NoYW5nZSB2YWx1ZVxuXHRcdFx0XHR0aGlzLm4gPSBuIHx8IHA7IC8vbmFtZSB0aGF0IHRoaXMgQ1NTUHJvcFR3ZWVuIHNob3VsZCBiZSBhc3NvY2lhdGVkIHRvICh1c3VhbGx5IHRoZSBzYW1lIGFzIHAsIGJ1dCBub3QgYWx3YXlzIC0gbiBpcyB3aGF0IG92ZXJ3cml0aW5nIGxvb2tzIGF0KVxuXHRcdFx0XHRpZiAoISh0IGluc3RhbmNlb2YgQ1NTUHJvcFR3ZWVuKSkge1xuXHRcdFx0XHRcdF9vdmVyd3JpdGVQcm9wcy5wdXNoKHRoaXMubik7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5yID0gcjsgLy9yb3VuZCAoYm9vbGVhbilcblx0XHRcdFx0dGhpcy50eXBlID0gdHlwZSB8fCAwOyAvLzAgPSBub3JtYWwgdHdlZW4sIC0xID0gbm9uLXR3ZWVuaW5nIChpbiB3aGljaCBjYXNlIHhzMCB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIHRhcmdldCdzIHByb3BlcnR5LCBsaWtlIHRwLnRbdHAucF0gPSB0cC54czApLCAxID0gY29tcGxleC12YWx1ZSBTcGVjaWFsUHJvcCwgMiA9IGN1c3RvbSBzZXRSYXRpbygpIHRoYXQgZG9lcyBhbGwgdGhlIHdvcmtcblx0XHRcdFx0aWYgKHByKSB7XG5cdFx0XHRcdFx0dGhpcy5wciA9IHByO1xuXHRcdFx0XHRcdF9oYXNQcmlvcml0eSA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5iID0gKGIgPT09IHVuZGVmaW5lZCkgPyBzIDogYjtcblx0XHRcdFx0dGhpcy5lID0gKGUgPT09IHVuZGVmaW5lZCkgPyBzICsgYyA6IGU7XG5cdFx0XHRcdGlmIChuZXh0KSB7XG5cdFx0XHRcdFx0dGhpcy5fbmV4dCA9IG5leHQ7XG5cdFx0XHRcdFx0bmV4dC5fcHJldiA9IHRoaXM7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogVGFrZXMgYSB0YXJnZXQsIHRoZSBiZWdpbm5pbmcgdmFsdWUgYW5kIGVuZGluZyB2YWx1ZSAoYXMgc3RyaW5ncykgYW5kIHBhcnNlcyB0aGVtIGludG8gYSBDU1NQcm9wVHdlZW4gKHBvc3NpYmx5IHdpdGggY2hpbGQgQ1NTUHJvcFR3ZWVucykgdGhhdCBhY2NvbW1vZGF0ZXMgbXVsdGlwbGUgbnVtYmVycywgY29sb3JzLCBjb21tYS1kZWxpbWl0ZWQgdmFsdWVzLCBldGMuIEZvciBleGFtcGxlOlxuXHRcdFx0ICogc3AucGFyc2VDb21wbGV4KGVsZW1lbnQsIFwiYm94U2hhZG93XCIsIFwiNXB4IDEwcHggMjBweCByZ2IoMjU1LDEwMiw1MSlcIiwgXCIwcHggMHB4IDBweCByZWRcIiwgdHJ1ZSwgXCIwcHggMHB4IDBweCByZ2IoMCwwLDAsMClcIiwgcHQpO1xuXHRcdFx0ICogSXQgd2lsbCB3YWxrIHRocm91Z2ggdGhlIGJlZ2lubmluZyBhbmQgZW5kaW5nIHZhbHVlcyAod2hpY2ggc2hvdWxkIGJlIGluIHRoZSBzYW1lIGZvcm1hdCB3aXRoIHRoZSBzYW1lIG51bWJlciBhbmQgdHlwZSBvZiB2YWx1ZXMpIGFuZCBmaWd1cmUgb3V0IHdoaWNoIHBhcnRzIGFyZSBudW1iZXJzLCB3aGF0IHN0cmluZ3Mgc2VwYXJhdGUgdGhlIG51bWVyaWMvdHdlZW5hYmxlIHZhbHVlcywgYW5kIHRoZW4gY3JlYXRlIHRoZSBDU1NQcm9wVHdlZW5zIGFjY29yZGluZ2x5LiBJZiBhIHBsdWdpbiBpcyBkZWZpbmVkLCBubyBjaGlsZCBDU1NQcm9wVHdlZW5zIHdpbGwgYmUgY3JlYXRlZC4gSW5zdGVhZCwgdGhlIGVuZGluZyB2YWx1ZXMgd2lsbCBiZSBzdG9yZWQgaW4gdGhlIFwiZGF0YVwiIHByb3BlcnR5IG9mIHRoZSByZXR1cm5lZCBDU1NQcm9wVHdlZW4gbGlrZToge3M6LTUsIHhuMTotMTAsIHhuMjotMjAsIHhuMzoyNTUsIHhuNDowLCB4bjU6MH0gc28gdGhhdCBpdCBjYW4gYmUgZmVkIHRvIGFueSBvdGhlciBwbHVnaW4gYW5kIGl0J2xsIGJlIHBsYWluIG51bWVyaWMgdHdlZW5zIGJ1dCB0aGUgcmVjb21wb3NpdGlvbiBvZiB0aGUgY29tcGxleCB2YWx1ZSB3aWxsIGJlIGhhbmRsZWQgaW5zaWRlIENTU1BsdWdpbidzIHNldFJhdGlvKCkuXG5cdFx0XHQgKiBJZiBhIHNldFJhdGlvIGlzIGRlZmluZWQsIHRoZSB0eXBlIG9mIHRoZSBDU1NQcm9wVHdlZW4gd2lsbCBiZSBzZXQgdG8gMiBhbmQgcmVjb21wb3NpdGlvbiBvZiB0aGUgdmFsdWVzIHdpbGwgYmUgdGhlIHJlc3BvbnNpYmlsaXR5IG9mIHRoYXQgbWV0aG9kLlxuXHRcdFx0ICpcblx0XHRcdCAqIEBwYXJhbSB7IU9iamVjdH0gdCBUYXJnZXQgd2hvc2UgcHJvcGVydHkgd2lsbCBiZSB0d2VlbmVkXG5cdFx0XHQgKiBAcGFyYW0geyFzdHJpbmd9IHAgUHJvcGVydHkgdGhhdCB3aWxsIGJlIHR3ZWVuZWQgKGl0cyBuYW1lLCBsaWtlIFwibGVmdFwiIG9yIFwiYmFja2dyb3VuZENvbG9yXCIgb3IgXCJib3hTaGFkb3dcIilcblx0XHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBiIEJlZ2lubmluZyB2YWx1ZVxuXHRcdFx0ICogQHBhcmFtIHtzdHJpbmd9IGUgRW5kaW5nIHZhbHVlXG5cdFx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IGNscnMgSWYgdHJ1ZSwgdGhlIHZhbHVlIGNvdWxkIGNvbnRhaW4gYSBjb2xvciB2YWx1ZSBsaWtlIFwicmdiKDI1NSwwLDApXCIgb3IgXCIjRjAwXCIgb3IgXCJyZWRcIi4gVGhlIGRlZmF1bHQgaXMgZmFsc2UsIHNvIG5vIGNvbG9ycyB3aWxsIGJlIHJlY29nbml6ZWQgKGEgcGVyZm9ybWFuY2Ugb3B0aW1pemF0aW9uKVxuXHRcdFx0ICogQHBhcmFtIHsoc3RyaW5nfG51bWJlcnxPYmplY3QpfSBkZmx0IFRoZSBkZWZhdWx0IGJlZ2lubmluZyB2YWx1ZSB0aGF0IHNob3VsZCBiZSB1c2VkIGlmIG5vIHZhbGlkIGJlZ2lubmluZyB2YWx1ZSBpcyBkZWZpbmVkIG9yIGlmIHRoZSBudW1iZXIgb2YgdmFsdWVzIGluc2lkZSB0aGUgY29tcGxleCBiZWdpbm5pbmcgYW5kIGVuZGluZyB2YWx1ZXMgZG9uJ3QgbWF0Y2hcblx0XHRcdCAqIEBwYXJhbSB7P0NTU1Byb3BUd2Vlbn0gcHQgQ1NTUHJvcFR3ZWVuIGluc3RhbmNlIHRoYXQgaXMgdGhlIGN1cnJlbnQgaGVhZCBvZiB0aGUgbGlua2VkIGxpc3QgKHdlJ2xsIHByZXBlbmQgdG8gdGhpcykuXG5cdFx0XHQgKiBAcGFyYW0ge251bWJlcj19IHByIFByaW9yaXR5IGluIHRoZSBsaW5rZWQgbGlzdCBvcmRlci4gSGlnaGVyIHByaW9yaXR5IHByb3BlcnRpZXMgd2lsbCBiZSB1cGRhdGVkIGJlZm9yZSBsb3dlciBwcmlvcml0eSBvbmVzLiBUaGUgZGVmYXVsdCBwcmlvcml0eSBpcyAwLlxuXHRcdFx0ICogQHBhcmFtIHtUd2VlblBsdWdpbj19IHBsdWdpbiBJZiBhIHBsdWdpbiBzaG91bGQgaGFuZGxlIHRoZSB0d2VlbmluZyBvZiBleHRyYSBwcm9wZXJ0aWVzLCBwYXNzIHRoZSBwbHVnaW4gaW5zdGFuY2UgaGVyZS4gSWYgb25lIGlzIGRlZmluZWQsIHRoZW4gTk8gc3VidHdlZW5zIHdpbGwgYmUgY3JlYXRlZCBmb3IgYW55IGV4dHJhIHByb3BlcnRpZXMgKHRoZSBwcm9wZXJ0aWVzIHdpbGwgYmUgY3JlYXRlZCAtIGp1c3Qgbm90IGFkZGl0aW9uYWwgQ1NTUHJvcFR3ZWVuIGluc3RhbmNlcyB0byB0d2VlbiB0aGVtKSBiZWNhdXNlIHRoZSBwbHVnaW4gaXMgZXhwZWN0ZWQgdG8gZG8gc28uIEhvd2V2ZXIsIHRoZSBlbmQgdmFsdWVzIFdJTEwgYmUgcG9wdWxhdGVkIGluIHRoZSBcImRhdGFcIiBwcm9wZXJ0eSwgbGlrZSB7czoxMDAsIHhuMTo1MCwgeG4yOjMwMH1cblx0XHRcdCAqIEBwYXJhbSB7ZnVuY3Rpb24obnVtYmVyKT19IHNldFJhdGlvIElmIHZhbHVlcyBzaG91bGQgYmUgc2V0IGluIGEgY3VzdG9tIGZ1bmN0aW9uIGluc3RlYWQgb2YgYmVpbmcgcGllY2VkIHRvZ2V0aGVyIGluIGEgdHlwZToxIChjb21wbGV4LXZhbHVlKSBDU1NQcm9wVHdlZW4sIGRlZmluZSB0aGF0IGN1c3RvbSBmdW5jdGlvbiBoZXJlLlxuXHRcdFx0ICogQHJldHVybiB7Q1NTUHJvcFR3ZWVufSBUaGUgZmlyc3QgQ1NTUHJvcFR3ZWVuIGluIHRoZSBsaW5rZWQgbGlzdCB3aGljaCBpbmNsdWRlcyB0aGUgbmV3IG9uZShzKSBhZGRlZCBieSB0aGUgcGFyc2VDb21wbGV4KCkgY2FsbC5cblx0XHRcdCAqL1xuXHRcdFx0X3BhcnNlQ29tcGxleCA9IENTU1BsdWdpbi5wYXJzZUNvbXBsZXggPSBmdW5jdGlvbih0LCBwLCBiLCBlLCBjbHJzLCBkZmx0LCBwdCwgcHIsIHBsdWdpbiwgc2V0UmF0aW8pIHtcblx0XHRcdFx0Ly9ERUJVRzogX2xvZyhcInBhcnNlQ29tcGxleDogXCIrcCtcIiwgYjogXCIrYitcIiwgZTogXCIrZSk7XG5cdFx0XHRcdGIgPSBiIHx8IGRmbHQgfHwgXCJcIjtcblx0XHRcdFx0cHQgPSBuZXcgQ1NTUHJvcFR3ZWVuKHQsIHAsIDAsIDAsIHB0LCAoc2V0UmF0aW8gPyAyIDogMSksIG51bGwsIGZhbHNlLCBwciwgYiwgZSk7XG5cdFx0XHRcdGUgKz0gXCJcIjsgLy9lbnN1cmVzIGl0J3MgYSBzdHJpbmdcblx0XHRcdFx0dmFyIGJhID0gYi5zcGxpdChcIiwgXCIpLmpvaW4oXCIsXCIpLnNwbGl0KFwiIFwiKSwgLy9iZWdpbm5pbmcgYXJyYXlcblx0XHRcdFx0XHRlYSA9IGUuc3BsaXQoXCIsIFwiKS5qb2luKFwiLFwiKS5zcGxpdChcIiBcIiksIC8vZW5kaW5nIGFycmF5XG5cdFx0XHRcdFx0bCA9IGJhLmxlbmd0aCxcblx0XHRcdFx0XHRhdXRvUm91bmQgPSAoX2F1dG9Sb3VuZCAhPT0gZmFsc2UpLFxuXHRcdFx0XHRcdGksIHhpLCBuaSwgYnYsIGV2LCBibnVtcywgZW51bXMsIGJuLCByZ2JhLCB0ZW1wLCBjdiwgc3RyO1xuXHRcdFx0XHRpZiAoZS5pbmRleE9mKFwiLFwiKSAhPT0gLTEgfHwgYi5pbmRleE9mKFwiLFwiKSAhPT0gLTEpIHtcblx0XHRcdFx0XHRiYSA9IGJhLmpvaW4oXCIgXCIpLnJlcGxhY2UoX2NvbW1hc091dHNpZGVQYXJlbkV4cCwgXCIsIFwiKS5zcGxpdChcIiBcIik7XG5cdFx0XHRcdFx0ZWEgPSBlYS5qb2luKFwiIFwiKS5yZXBsYWNlKF9jb21tYXNPdXRzaWRlUGFyZW5FeHAsIFwiLCBcIikuc3BsaXQoXCIgXCIpO1xuXHRcdFx0XHRcdGwgPSBiYS5sZW5ndGg7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGwgIT09IGVhLmxlbmd0aCkge1xuXHRcdFx0XHRcdC8vREVCVUc6IF9sb2coXCJtaXNtYXRjaGVkIGZvcm1hdHRpbmcgZGV0ZWN0ZWQgb24gXCIgKyBwICsgXCIgKFwiICsgYiArIFwiIHZzIFwiICsgZSArIFwiKVwiKTtcblx0XHRcdFx0XHRiYSA9IChkZmx0IHx8IFwiXCIpLnNwbGl0KFwiIFwiKTtcblx0XHRcdFx0XHRsID0gYmEubGVuZ3RoO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHB0LnBsdWdpbiA9IHBsdWdpbjtcblx0XHRcdFx0cHQuc2V0UmF0aW8gPSBzZXRSYXRpbztcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGw7IGkrKykge1xuXHRcdFx0XHRcdGJ2ID0gYmFbaV07XG5cdFx0XHRcdFx0ZXYgPSBlYVtpXTtcblx0XHRcdFx0XHRibiA9IHBhcnNlRmxvYXQoYnYpO1xuXHRcdFx0XHRcdC8vaWYgdGhlIHZhbHVlIGJlZ2lucyB3aXRoIGEgbnVtYmVyIChtb3N0IGNvbW1vbikuIEl0J3MgZmluZSBpZiBpdCBoYXMgYSBzdWZmaXggbGlrZSBweFxuXHRcdFx0XHRcdGlmIChibiB8fCBibiA9PT0gMCkge1xuXHRcdFx0XHRcdFx0cHQuYXBwZW5kWHRyYShcIlwiLCBibiwgX3BhcnNlQ2hhbmdlKGV2LCBibiksIGV2LnJlcGxhY2UoX3JlbE51bUV4cCwgXCJcIiksIChhdXRvUm91bmQgJiYgZXYuaW5kZXhPZihcInB4XCIpICE9PSAtMSksIHRydWUpO1xuXG5cdFx0XHRcdFx0Ly9pZiB0aGUgdmFsdWUgaXMgYSBjb2xvclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoY2xycyAmJiAoYnYuY2hhckF0KDApID09PSBcIiNcIiB8fCBfY29sb3JMb29rdXBbYnZdIHx8IF9yZ2Joc2xFeHAudGVzdChidikpKSB7XG5cdFx0XHRcdFx0XHRzdHIgPSBldi5jaGFyQXQoZXYubGVuZ3RoIC0gMSkgPT09IFwiLFwiID8gXCIpLFwiIDogXCIpXCI7IC8vaWYgdGhlcmUncyBhIGNvbW1hIGF0IHRoZSBlbmQsIHJldGFpbiBpdC5cblx0XHRcdFx0XHRcdGJ2ID0gX3BhcnNlQ29sb3IoYnYpO1xuXHRcdFx0XHRcdFx0ZXYgPSBfcGFyc2VDb2xvcihldik7XG5cdFx0XHRcdFx0XHRyZ2JhID0gKGJ2Lmxlbmd0aCArIGV2Lmxlbmd0aCA+IDYpO1xuXHRcdFx0XHRcdFx0aWYgKHJnYmEgJiYgIV9zdXBwb3J0c09wYWNpdHkgJiYgZXZbM10gPT09IDApIHsgLy9vbGRlciB2ZXJzaW9ucyBvZiBJRSBkb24ndCBzdXBwb3J0IHJnYmEoKSwgc28gaWYgdGhlIGRlc3RpbmF0aW9uIGFscGhhIGlzIDAsIGp1c3QgdXNlIFwidHJhbnNwYXJlbnRcIiBmb3IgdGhlIGVuZCBjb2xvclxuXHRcdFx0XHRcdFx0XHRwdFtcInhzXCIgKyBwdC5sXSArPSBwdC5sID8gXCIgdHJhbnNwYXJlbnRcIiA6IFwidHJhbnNwYXJlbnRcIjtcblx0XHRcdFx0XHRcdFx0cHQuZSA9IHB0LmUuc3BsaXQoZWFbaV0pLmpvaW4oXCJ0cmFuc3BhcmVudFwiKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGlmICghX3N1cHBvcnRzT3BhY2l0eSkgeyAvL29sZCB2ZXJzaW9ucyBvZiBJRSBkb24ndCBzdXBwb3J0IHJnYmEoKS5cblx0XHRcdFx0XHRcdFx0XHRyZ2JhID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0cHQuYXBwZW5kWHRyYSgocmdiYSA/IFwicmdiYShcIiA6IFwicmdiKFwiKSwgYnZbMF0sIGV2WzBdIC0gYnZbMF0sIFwiLFwiLCB0cnVlLCB0cnVlKVxuXHRcdFx0XHRcdFx0XHRcdC5hcHBlbmRYdHJhKFwiXCIsIGJ2WzFdLCBldlsxXSAtIGJ2WzFdLCBcIixcIiwgdHJ1ZSlcblx0XHRcdFx0XHRcdFx0XHQuYXBwZW5kWHRyYShcIlwiLCBidlsyXSwgZXZbMl0gLSBidlsyXSwgKHJnYmEgPyBcIixcIiA6IHN0ciksIHRydWUpO1xuXHRcdFx0XHRcdFx0XHRpZiAocmdiYSkge1xuXHRcdFx0XHRcdFx0XHRcdGJ2ID0gKGJ2Lmxlbmd0aCA8IDQpID8gMSA6IGJ2WzNdO1xuXHRcdFx0XHRcdFx0XHRcdHB0LmFwcGVuZFh0cmEoXCJcIiwgYnYsICgoZXYubGVuZ3RoIDwgNCkgPyAxIDogZXZbM10pIC0gYnYsIHN0ciwgZmFsc2UpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Ym51bXMgPSBidi5tYXRjaChfbnVtRXhwKTsgLy9nZXRzIGVhY2ggZ3JvdXAgb2YgbnVtYmVycyBpbiB0aGUgYmVnaW5uaW5nIHZhbHVlIHN0cmluZyBhbmQgZHJvcHMgdGhlbSBpbnRvIGFuIGFycmF5XG5cblx0XHRcdFx0XHRcdC8vaWYgbm8gbnVtYmVyIGlzIGZvdW5kLCB0cmVhdCBpdCBhcyBhIG5vbi10d2VlbmluZyB2YWx1ZSBhbmQganVzdCBhcHBlbmQgdGhlIHN0cmluZyB0byB0aGUgY3VycmVudCB4cy5cblx0XHRcdFx0XHRcdGlmICghYm51bXMpIHtcblx0XHRcdFx0XHRcdFx0cHRbXCJ4c1wiICsgcHQubF0gKz0gcHQubCA/IFwiIFwiICsgYnYgOiBidjtcblxuXHRcdFx0XHRcdFx0Ly9sb29wIHRocm91Z2ggYWxsIHRoZSBudW1iZXJzIHRoYXQgYXJlIGZvdW5kIGFuZCBjb25zdHJ1Y3QgdGhlIGV4dHJhIHZhbHVlcyBvbiB0aGUgcHQuXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRlbnVtcyA9IGV2Lm1hdGNoKF9yZWxOdW1FeHApOyAvL2dldCBlYWNoIGdyb3VwIG9mIG51bWJlcnMgaW4gdGhlIGVuZCB2YWx1ZSBzdHJpbmcgYW5kIGRyb3AgdGhlbSBpbnRvIGFuIGFycmF5LiBXZSBhbGxvdyByZWxhdGl2ZSB2YWx1ZXMgdG9vLCBsaWtlICs9NTAgb3IgLT0uNVxuXHRcdFx0XHRcdFx0XHRpZiAoIWVudW1zIHx8IGVudW1zLmxlbmd0aCAhPT0gYm51bXMubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRcdFx0Ly9ERUJVRzogX2xvZyhcIm1pc21hdGNoZWQgZm9ybWF0dGluZyBkZXRlY3RlZCBvbiBcIiArIHAgKyBcIiAoXCIgKyBiICsgXCIgdnMgXCIgKyBlICsgXCIpXCIpO1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBwdDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRuaSA9IDA7XG5cdFx0XHRcdFx0XHRcdGZvciAoeGkgPSAwOyB4aSA8IGJudW1zLmxlbmd0aDsgeGkrKykge1xuXHRcdFx0XHRcdFx0XHRcdGN2ID0gYm51bXNbeGldO1xuXHRcdFx0XHRcdFx0XHRcdHRlbXAgPSBidi5pbmRleE9mKGN2LCBuaSk7XG5cdFx0XHRcdFx0XHRcdFx0cHQuYXBwZW5kWHRyYShidi5zdWJzdHIobmksIHRlbXAgLSBuaSksIE51bWJlcihjdiksIF9wYXJzZUNoYW5nZShlbnVtc1t4aV0sIGN2KSwgXCJcIiwgKGF1dG9Sb3VuZCAmJiBidi5zdWJzdHIodGVtcCArIGN2Lmxlbmd0aCwgMikgPT09IFwicHhcIiksICh4aSA9PT0gMCkpO1xuXHRcdFx0XHRcdFx0XHRcdG5pID0gdGVtcCArIGN2Lmxlbmd0aDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRwdFtcInhzXCIgKyBwdC5sXSArPSBidi5zdWJzdHIobmkpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHQvL2lmIHRoZXJlIGFyZSByZWxhdGl2ZSB2YWx1ZXMgKFwiKz1cIiBvciBcIi09XCIgcHJlZml4KSwgd2UgbmVlZCB0byBhZGp1c3QgdGhlIGVuZGluZyB2YWx1ZSB0byBlbGltaW5hdGUgdGhlIHByZWZpeGVzIGFuZCBjb21iaW5lIHRoZSB2YWx1ZXMgcHJvcGVybHkuXG5cdFx0XHRcdGlmIChlLmluZGV4T2YoXCI9XCIpICE9PSAtMSkgaWYgKHB0LmRhdGEpIHtcblx0XHRcdFx0XHRzdHIgPSBwdC54czAgKyBwdC5kYXRhLnM7XG5cdFx0XHRcdFx0Zm9yIChpID0gMTsgaSA8IHB0Lmw7IGkrKykge1xuXHRcdFx0XHRcdFx0c3RyICs9IHB0W1wieHNcIiArIGldICsgcHQuZGF0YVtcInhuXCIgKyBpXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cHQuZSA9IHN0ciArIHB0W1wieHNcIiArIGldO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghcHQubCkge1xuXHRcdFx0XHRcdHB0LnR5cGUgPSAtMTtcblx0XHRcdFx0XHRwdC54czAgPSBwdC5lO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBwdC54Zmlyc3QgfHwgcHQ7XG5cdFx0XHR9LFxuXHRcdFx0aSA9IDk7XG5cblxuXHRcdHAgPSBDU1NQcm9wVHdlZW4ucHJvdG90eXBlO1xuXHRcdHAubCA9IHAucHIgPSAwOyAvL2xlbmd0aCAobnVtYmVyIG9mIGV4dHJhIHByb3BlcnRpZXMgbGlrZSB4bjEsIHhuMiwgeG4zLCBldGMuXG5cdFx0d2hpbGUgKC0taSA+IDApIHtcblx0XHRcdHBbXCJ4blwiICsgaV0gPSAwO1xuXHRcdFx0cFtcInhzXCIgKyBpXSA9IFwiXCI7XG5cdFx0fVxuXHRcdHAueHMwID0gXCJcIjtcblx0XHRwLl9uZXh0ID0gcC5fcHJldiA9IHAueGZpcnN0ID0gcC5kYXRhID0gcC5wbHVnaW4gPSBwLnNldFJhdGlvID0gcC5yeHAgPSBudWxsO1xuXG5cblx0XHQvKipcblx0XHQgKiBBcHBlbmRzIGFuZCBleHRyYSB0d2VlbmluZyB2YWx1ZSB0byBhIENTU1Byb3BUd2VlbiBhbmQgYXV0b21hdGljYWxseSBtYW5hZ2VzIGFueSBwcmVmaXggYW5kIHN1ZmZpeCBzdHJpbmdzLiBUaGUgZmlyc3QgZXh0cmEgdmFsdWUgaXMgc3RvcmVkIGluIHRoZSBzIGFuZCBjIG9mIHRoZSBtYWluIENTU1Byb3BUd2VlbiBpbnN0YW5jZSwgYnV0IHRoZXJlYWZ0ZXIgYW55IGV4dHJhcyBhcmUgc3RvcmVkIGluIHRoZSB4bjEsIHhuMiwgeG4zLCBldGMuIFRoZSBwcmVmaXhlcyBhbmQgc3VmZml4ZXMgYXJlIHN0b3JlZCBpbiB0aGUgeHMwLCB4czEsIHhzMiwgZXRjLiBwcm9wZXJ0aWVzLiBGb3IgZXhhbXBsZSwgaWYgSSB3YWxrIHRocm91Z2ggYSBjbGlwIHZhbHVlIGxpa2UgXCJyZWN0KDEwcHgsIDVweCwgMHB4LCAyMHB4KVwiLCB0aGUgdmFsdWVzIHdvdWxkIGJlIHN0b3JlZCBsaWtlIHRoaXM6XG5cdFx0ICogeHMwOlwicmVjdChcIiwgczoxMCwgeHMxOlwicHgsIFwiLCB4bjE6NSwgeHMyOlwicHgsIFwiLCB4bjI6MCwgeHMzOlwicHgsIFwiLCB4bjM6MjAsIHhuNDpcInB4KVwiXG5cdFx0ICogQW5kIHRoZXknZCBhbGwgZ2V0IGpvaW5lZCB0b2dldGhlciB3aGVuIHRoZSBDU1NQbHVnaW4gcmVuZGVycyAoaW4gdGhlIHNldFJhdGlvKCkgbWV0aG9kKS5cblx0XHQgKiBAcGFyYW0ge3N0cmluZz19IHBmeCBQcmVmaXggKGlmIGFueSlcblx0XHQgKiBAcGFyYW0geyFudW1iZXJ9IHMgU3RhcnRpbmcgdmFsdWVcblx0XHQgKiBAcGFyYW0geyFudW1iZXJ9IGMgQ2hhbmdlIGluIG51bWVyaWMgdmFsdWUgb3ZlciB0aGUgY291cnNlIG9mIHRoZSBlbnRpcmUgdHdlZW4uIEZvciBleGFtcGxlLCBpZiB0aGUgc3RhcnQgaXMgNSBhbmQgdGhlIGVuZCBpcyAxMDAsIHRoZSBjaGFuZ2Ugd291bGQgYmUgOTUuXG5cdFx0ICogQHBhcmFtIHtzdHJpbmc9fSBzZnggU3VmZml4IChpZiBhbnkpXG5cdFx0ICogQHBhcmFtIHtib29sZWFuPX0gciBSb3VuZCAoaWYgdHJ1ZSkuXG5cdFx0ICogQHBhcmFtIHtib29sZWFuPX0gcGFkIElmIHRydWUsIHRoaXMgZXh0cmEgdmFsdWUgc2hvdWxkIGJlIHNlcGFyYXRlZCBieSB0aGUgcHJldmlvdXMgb25lIGJ5IGEgc3BhY2UuIElmIHRoZXJlIGlzIG5vIHByZXZpb3VzIGV4dHJhIGFuZCBwYWQgaXMgdHJ1ZSwgaXQgd2lsbCBhdXRvbWF0aWNhbGx5IGRyb3AgdGhlIHNwYWNlLlxuXHRcdCAqIEByZXR1cm4ge0NTU1Byb3BUd2Vlbn0gcmV0dXJucyBpdHNlbGYgc28gdGhhdCBtdWx0aXBsZSBtZXRob2RzIGNhbiBiZSBjaGFpbmVkIHRvZ2V0aGVyLlxuXHRcdCAqL1xuXHRcdHAuYXBwZW5kWHRyYSA9IGZ1bmN0aW9uKHBmeCwgcywgYywgc2Z4LCByLCBwYWQpIHtcblx0XHRcdHZhciBwdCA9IHRoaXMsXG5cdFx0XHRcdGwgPSBwdC5sO1xuXHRcdFx0cHRbXCJ4c1wiICsgbF0gKz0gKHBhZCAmJiBsKSA/IFwiIFwiICsgcGZ4IDogcGZ4IHx8IFwiXCI7XG5cdFx0XHRpZiAoIWMpIGlmIChsICE9PSAwICYmICFwdC5wbHVnaW4pIHsgLy90eXBpY2FsbHkgd2UnbGwgY29tYmluZSBub24tY2hhbmdpbmcgdmFsdWVzIHJpZ2h0IGludG8gdGhlIHhzIHRvIG9wdGltaXplIHBlcmZvcm1hbmNlLCBidXQgd2UgZG9uJ3QgY29tYmluZSB0aGVtIHdoZW4gdGhlcmUncyBhIHBsdWdpbiB0aGF0IHdpbGwgYmUgdHdlZW5pbmcgdGhlIHZhbHVlcyBiZWNhdXNlIGl0IG1heSBkZXBlbmQgb24gdGhlIHZhbHVlcyBiZWluZyBzcGxpdCBhcGFydCwgbGlrZSBmb3IgYSBiZXppZXIsIGlmIGEgdmFsdWUgZG9lc24ndCBjaGFuZ2UgYmV0d2VlbiB0aGUgZmlyc3QgYW5kIHNlY29uZCBpdGVyYXRpb24gYnV0IHRoZW4gaXQgZG9lcyBvbiB0aGUgM3JkLCB3ZSdsbCBydW4gaW50byB0cm91YmxlIGJlY2F1c2UgdGhlcmUncyBubyB4biBzbG90IGZvciB0aGF0IHZhbHVlIVxuXHRcdFx0XHRwdFtcInhzXCIgKyBsXSArPSBzICsgKHNmeCB8fCBcIlwiKTtcblx0XHRcdFx0cmV0dXJuIHB0O1xuXHRcdFx0fVxuXHRcdFx0cHQubCsrO1xuXHRcdFx0cHQudHlwZSA9IHB0LnNldFJhdGlvID8gMiA6IDE7XG5cdFx0XHRwdFtcInhzXCIgKyBwdC5sXSA9IHNmeCB8fCBcIlwiO1xuXHRcdFx0aWYgKGwgPiAwKSB7XG5cdFx0XHRcdHB0LmRhdGFbXCJ4blwiICsgbF0gPSBzICsgYztcblx0XHRcdFx0cHQucnhwW1wieG5cIiArIGxdID0gcjsgLy9yb3VuZCBleHRyYSBwcm9wZXJ0eSAod2UgbmVlZCB0byB0YXAgaW50byB0aGlzIGluIHRoZSBfcGFyc2VUb1Byb3h5KCkgbWV0aG9kKVxuXHRcdFx0XHRwdFtcInhuXCIgKyBsXSA9IHM7XG5cdFx0XHRcdGlmICghcHQucGx1Z2luKSB7XG5cdFx0XHRcdFx0cHQueGZpcnN0ID0gbmV3IENTU1Byb3BUd2VlbihwdCwgXCJ4blwiICsgbCwgcywgYywgcHQueGZpcnN0IHx8IHB0LCAwLCBwdC5uLCByLCBwdC5wcik7XG5cdFx0XHRcdFx0cHQueGZpcnN0LnhzMCA9IDA7IC8vanVzdCB0byBlbnN1cmUgdGhhdCB0aGUgcHJvcGVydHkgc3RheXMgbnVtZXJpYyB3aGljaCBoZWxwcyBtb2Rlcm4gYnJvd3NlcnMgc3BlZWQgdXAgcHJvY2Vzc2luZy4gUmVtZW1iZXIsIGluIHRoZSBzZXRSYXRpbygpIG1ldGhvZCwgd2UgZG8gcHQudFtwdC5wXSA9IHZhbCArIHB0LnhzMCBzbyBpZiBwdC54czAgaXMgXCJcIiAodGhlIGRlZmF1bHQpLCBpdCdsbCBjYXN0IHRoZSBlbmQgdmFsdWUgYXMgYSBzdHJpbmcuIFdoZW4gYSBwcm9wZXJ0eSBpcyBhIG51bWJlciBzb21ldGltZXMgYW5kIGEgc3RyaW5nIHNvbWV0aW1lcywgaXQgcHJldmVudHMgdGhlIGNvbXBpbGVyIGZyb20gbG9ja2luZyBpbiB0aGUgZGF0YSB0eXBlLCBzbG93aW5nIHRoaW5ncyBkb3duIHNsaWdodGx5LlxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBwdDtcblx0XHRcdH1cblx0XHRcdHB0LmRhdGEgPSB7czpzICsgY307XG5cdFx0XHRwdC5yeHAgPSB7fTtcblx0XHRcdHB0LnMgPSBzO1xuXHRcdFx0cHQuYyA9IGM7XG5cdFx0XHRwdC5yID0gcjtcblx0XHRcdHJldHVybiBwdDtcblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogQGNvbnN0cnVjdG9yIEEgU3BlY2lhbFByb3AgaXMgYmFzaWNhbGx5IGEgY3NzIHByb3BlcnR5IHRoYXQgbmVlZHMgdG8gYmUgdHJlYXRlZCBpbiBhIG5vbi1zdGFuZGFyZCB3YXksIGxpa2UgaWYgaXQgbWF5IGNvbnRhaW4gYSBjb21wbGV4IHZhbHVlIGxpa2UgYm94U2hhZG93OlwiNXB4IDEwcHggMTVweCByZ2IoMjU1LCAxMDIsIDUxKVwiIG9yIGlmIGl0IGlzIGFzc29jaWF0ZWQgd2l0aCBhbm90aGVyIHBsdWdpbiBsaWtlIFRocm93UHJvcHNQbHVnaW4gb3IgQmV6aWVyUGx1Z2luLiBFdmVyeSBTcGVjaWFsUHJvcCBpcyBhc3NvY2lhdGVkIHdpdGggYSBwYXJ0aWN1bGFyIHByb3BlcnR5IG5hbWUgbGlrZSBcImJveFNoYWRvd1wiIG9yIFwidGhyb3dQcm9wc1wiIG9yIFwiYmV6aWVyXCIgYW5kIGl0IHdpbGwgaW50ZXJjZXB0IHRob3NlIHZhbHVlcyBpbiB0aGUgdmFycyBvYmplY3QgdGhhdCdzIHBhc3NlZCB0byB0aGUgQ1NTUGx1Z2luIGFuZCBoYW5kbGUgdGhlbSBhY2NvcmRpbmdseS5cblx0XHQgKiBAcGFyYW0geyFzdHJpbmd9IHAgUHJvcGVydHkgbmFtZSAobGlrZSBcImJveFNoYWRvd1wiIG9yIFwidGhyb3dQcm9wc1wiKVxuXHRcdCAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0aW9ucyBBbiBvYmplY3QgY29udGFpbmluZyBhbnkgb2YgdGhlIGZvbGxvd2luZyBjb25maWd1cmF0aW9uIG9wdGlvbnM6XG5cdFx0ICogICAgICAgICAgICAgICAgICAgICAgLSBkZWZhdWx0VmFsdWU6IHRoZSBkZWZhdWx0IHZhbHVlXG5cdFx0ICogICAgICAgICAgICAgICAgICAgICAgLSBwYXJzZXI6IEEgZnVuY3Rpb24gdGhhdCBzaG91bGQgYmUgY2FsbGVkIHdoZW4gdGhlIGFzc29jaWF0ZWQgcHJvcGVydHkgbmFtZSBpcyBmb3VuZCBpbiB0aGUgdmFycy4gVGhpcyBmdW5jdGlvbiBzaG91bGQgcmV0dXJuIGEgQ1NTUHJvcFR3ZWVuIGluc3RhbmNlIGFuZCBpdCBzaG91bGQgZW5zdXJlIHRoYXQgaXQgaXMgcHJvcGVybHkgaW5zZXJ0ZWQgaW50byB0aGUgbGlua2VkIGxpc3QuIEl0IHdpbGwgcmVjZWl2ZSA0IHBhcmFtdGVyczogMSkgVGhlIHRhcmdldCwgMikgVGhlIHZhbHVlIGRlZmluZWQgaW4gdGhlIHZhcnMsIDMpIFRoZSBDU1NQbHVnaW4gaW5zdGFuY2UgKHdob3NlIF9maXJzdFBUIHNob3VsZCBiZSB1c2VkIGZvciB0aGUgbGlua2VkIGxpc3QpLCBhbmQgNCkgQSBjb21wdXRlZCBzdHlsZSBvYmplY3QgaWYgb25lIHdhcyBjYWxjdWxhdGVkICh0aGlzIGlzIGEgc3BlZWQgb3B0aW1pemF0aW9uIHRoYXQgYWxsb3dzIHJldHJpZXZhbCBvZiBzdGFydGluZyB2YWx1ZXMgcXVpY2tlcilcblx0XHQgKiAgICAgICAgICAgICAgICAgICAgICAtIGZvcm1hdHRlcjogYSBmdW5jdGlvbiB0aGF0IGZvcm1hdHMgYW55IHZhbHVlIHJlY2VpdmVkIGZvciB0aGlzIHNwZWNpYWwgcHJvcGVydHkgKGZvciBleGFtcGxlLCBib3hTaGFkb3cgY291bGQgdGFrZSBcIjVweCA1cHggcmVkXCIgYW5kIGZvcm1hdCBpdCB0byBcIjVweCA1cHggMHB4IDBweCByZWRcIiBzbyB0aGF0IGJvdGggdGhlIGJlZ2lubmluZyBhbmQgZW5kaW5nIHZhbHVlcyBoYXZlIGEgY29tbW9uIG9yZGVyIGFuZCBxdWFudGl0eSBvZiB2YWx1ZXMuKVxuXHRcdCAqICAgICAgICAgICAgICAgICAgICAgIC0gcHJlZml4OiBpZiB0cnVlLCB3ZSdsbCBkZXRlcm1pbmUgd2hldGhlciBvciBub3QgdGhpcyBwcm9wZXJ0eSByZXF1aXJlcyBhIHZlbmRvciBwcmVmaXggKGxpa2UgV2Via2l0IG9yIE1veiBvciBtcyBvciBPKVxuXHRcdCAqICAgICAgICAgICAgICAgICAgICAgIC0gY29sb3I6IHNldCB0aGlzIHRvIHRydWUgaWYgdGhlIHZhbHVlIGZvciB0aGlzIFNwZWNpYWxQcm9wIG1heSBjb250YWluIGNvbG9yLXJlbGF0ZWQgdmFsdWVzIGxpa2UgcmdiKCksIHJnYmEoKSwgZXRjLlxuXHRcdCAqICAgICAgICAgICAgICAgICAgICAgIC0gcHJpb3JpdHk6IHByaW9yaXR5IGluIHRoZSBsaW5rZWQgbGlzdCBvcmRlci4gSGlnaGVyIHByaW9yaXR5IFNwZWNpYWxQcm9wcyB3aWxsIGJlIHVwZGF0ZWQgYmVmb3JlIGxvd2VyIHByaW9yaXR5IG9uZXMuIFRoZSBkZWZhdWx0IHByaW9yaXR5IGlzIDAuXG5cdFx0ICogICAgICAgICAgICAgICAgICAgICAgLSBtdWx0aTogaWYgdHJ1ZSwgdGhlIGZvcm1hdHRlciBzaG91bGQgYWNjb21tb2RhdGUgYSBjb21tYS1kZWxpbWl0ZWQgbGlzdCBvZiB2YWx1ZXMsIGxpa2UgYm94U2hhZG93IGNvdWxkIGhhdmUgbXVsdGlwbGUgYm94U2hhZG93cyBsaXN0ZWQgb3V0LlxuXHRcdCAqICAgICAgICAgICAgICAgICAgICAgIC0gY29sbGFwc2libGU6IGlmIHRydWUsIHRoZSBmb3JtYXR0ZXIgc2hvdWxkIHRyZWF0IHRoZSB2YWx1ZSBsaWtlIGl0J3MgYSB0b3AvcmlnaHQvYm90dG9tL2xlZnQgdmFsdWUgdGhhdCBjb3VsZCBiZSBjb2xsYXBzZWQsIGxpa2UgXCI1cHhcIiB3b3VsZCBhcHBseSB0byBhbGwsIFwiNXB4LCAxMHB4XCIgd291bGQgdXNlIDVweCBmb3IgdG9wL2JvdHRvbSBhbmQgMTBweCBmb3IgcmlnaHQvbGVmdCwgZXRjLlxuXHRcdCAqICAgICAgICAgICAgICAgICAgICAgIC0ga2V5d29yZDogYSBzcGVjaWFsIGtleXdvcmQgdGhhdCBjYW4gW29wdGlvbmFsbHldIGJlIGZvdW5kIGluc2lkZSB0aGUgdmFsdWUgKGxpa2UgXCJpbnNldFwiIGZvciBib3hTaGFkb3cpLiBUaGlzIGFsbG93cyB1cyB0byB2YWxpZGF0ZSBiZWdpbm5pbmcvZW5kaW5nIHZhbHVlcyB0byBtYWtlIHN1cmUgdGhleSBtYXRjaCAoaWYgdGhlIGtleXdvcmQgaXMgZm91bmQgaW4gb25lLCBpdCdsbCBiZSBhZGRlZCB0byB0aGUgb3RoZXIgZm9yIGNvbnNpc3RlbmN5IGJ5IGRlZmF1bHQpLlxuXHRcdCAqL1xuXHRcdHZhciBTcGVjaWFsUHJvcCA9IGZ1bmN0aW9uKHAsIG9wdGlvbnMpIHtcblx0XHRcdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdFx0XHRcdHRoaXMucCA9IG9wdGlvbnMucHJlZml4ID8gX2NoZWNrUHJvcFByZWZpeChwKSB8fCBwIDogcDtcblx0XHRcdFx0X3NwZWNpYWxQcm9wc1twXSA9IF9zcGVjaWFsUHJvcHNbdGhpcy5wXSA9IHRoaXM7XG5cdFx0XHRcdHRoaXMuZm9ybWF0ID0gb3B0aW9ucy5mb3JtYXR0ZXIgfHwgX2dldEZvcm1hdHRlcihvcHRpb25zLmRlZmF1bHRWYWx1ZSwgb3B0aW9ucy5jb2xvciwgb3B0aW9ucy5jb2xsYXBzaWJsZSwgb3B0aW9ucy5tdWx0aSk7XG5cdFx0XHRcdGlmIChvcHRpb25zLnBhcnNlcikge1xuXHRcdFx0XHRcdHRoaXMucGFyc2UgPSBvcHRpb25zLnBhcnNlcjtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmNscnMgPSBvcHRpb25zLmNvbG9yO1xuXHRcdFx0XHR0aGlzLm11bHRpID0gb3B0aW9ucy5tdWx0aTtcblx0XHRcdFx0dGhpcy5rZXl3b3JkID0gb3B0aW9ucy5rZXl3b3JkO1xuXHRcdFx0XHR0aGlzLmRmbHQgPSBvcHRpb25zLmRlZmF1bHRWYWx1ZTtcblx0XHRcdFx0dGhpcy5wciA9IG9wdGlvbnMucHJpb3JpdHkgfHwgMDtcblx0XHRcdH0sXG5cblx0XHRcdC8vc2hvcnRjdXQgZm9yIGNyZWF0aW5nIGEgbmV3IFNwZWNpYWxQcm9wIHRoYXQgY2FuIGFjY2VwdCBtdWx0aXBsZSBwcm9wZXJ0aWVzIGFzIGEgY29tbWEtZGVsaW1pdGVkIGxpc3QgKGhlbHBzIG1pbmlmaWNhdGlvbikuIGRmbHQgY2FuIGJlIGFuIGFycmF5IGZvciBtdWx0aXBsZSB2YWx1ZXMgKHdlIGRvbid0IGRvIGEgY29tbWEtZGVsaW1pdGVkIGxpc3QgYmVjYXVzZSB0aGUgZGVmYXVsdCB2YWx1ZSBtYXkgY29udGFpbiBjb21tYXMsIGxpa2UgcmVjdCgwcHgsMHB4LDBweCwwcHgpKS4gV2UgYXR0YWNoIHRoaXMgbWV0aG9kIHRvIHRoZSBTcGVjaWFsUHJvcCBjbGFzcy9vYmplY3QgaW5zdGVhZCBvZiB1c2luZyBhIHByaXZhdGUgX2NyZWF0ZVNwZWNpYWxQcm9wKCkgbWV0aG9kIHNvIHRoYXQgd2UgY2FuIHRhcCBpbnRvIGl0IGV4dGVybmFsbHkgaWYgbmVjZXNzYXJ5LCBsaWtlIGZyb20gYW5vdGhlciBwbHVnaW4uXG5cdFx0XHRfcmVnaXN0ZXJDb21wbGV4U3BlY2lhbFByb3AgPSBfaW50ZXJuYWxzLl9yZWdpc3RlckNvbXBsZXhTcGVjaWFsUHJvcCA9IGZ1bmN0aW9uKHAsIG9wdGlvbnMsIGRlZmF1bHRzKSB7XG5cdFx0XHRcdGlmICh0eXBlb2Yob3B0aW9ucykgIT09IFwib2JqZWN0XCIpIHtcblx0XHRcdFx0XHRvcHRpb25zID0ge3BhcnNlcjpkZWZhdWx0c307IC8vdG8gbWFrZSBiYWNrd2FyZHMgY29tcGF0aWJsZSB3aXRoIG9sZGVyIHZlcnNpb25zIG9mIEJlemllclBsdWdpbiBhbmQgVGhyb3dQcm9wc1BsdWdpblxuXHRcdFx0XHR9XG5cdFx0XHRcdHZhciBhID0gcC5zcGxpdChcIixcIiksXG5cdFx0XHRcdFx0ZCA9IG9wdGlvbnMuZGVmYXVsdFZhbHVlLFxuXHRcdFx0XHRcdGksIHRlbXA7XG5cdFx0XHRcdGRlZmF1bHRzID0gZGVmYXVsdHMgfHwgW2RdO1xuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdG9wdGlvbnMucHJlZml4ID0gKGkgPT09IDAgJiYgb3B0aW9ucy5wcmVmaXgpO1xuXHRcdFx0XHRcdG9wdGlvbnMuZGVmYXVsdFZhbHVlID0gZGVmYXVsdHNbaV0gfHwgZDtcblx0XHRcdFx0XHR0ZW1wID0gbmV3IFNwZWNpYWxQcm9wKGFbaV0sIG9wdGlvbnMpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHQvL2NyZWF0ZXMgYSBwbGFjZWhvbGRlciBzcGVjaWFsIHByb3AgZm9yIGEgcGx1Z2luIHNvIHRoYXQgdGhlIHByb3BlcnR5IGdldHMgY2F1Z2h0IHRoZSBmaXJzdCB0aW1lIGEgdHdlZW4gb2YgaXQgaXMgYXR0ZW1wdGVkLCBhbmQgYXQgdGhhdCB0aW1lIGl0IG1ha2VzIHRoZSBwbHVnaW4gcmVnaXN0ZXIgaXRzZWxmLCB0aHVzIHRha2luZyBvdmVyIGZvciBhbGwgZnV0dXJlIHR3ZWVucyBvZiB0aGF0IHByb3BlcnR5LiBUaGlzIGFsbG93cyB1cyB0byBub3QgbWFuZGF0ZSB0aGF0IHRoaW5ncyBsb2FkIGluIGEgcGFydGljdWxhciBvcmRlciBhbmQgaXQgYWxzbyBhbGxvd3MgdXMgdG8gbG9nKCkgYW4gZXJyb3IgdGhhdCBpbmZvcm1zIHRoZSB1c2VyIHdoZW4gdGhleSBhdHRlbXB0IHRvIHR3ZWVuIGFuIGV4dGVybmFsIHBsdWdpbi1yZWxhdGVkIHByb3BlcnR5IHdpdGhvdXQgbG9hZGluZyBpdHMgLmpzIGZpbGUuXG5cdFx0XHRfcmVnaXN0ZXJQbHVnaW5Qcm9wID0gZnVuY3Rpb24ocCkge1xuXHRcdFx0XHRpZiAoIV9zcGVjaWFsUHJvcHNbcF0pIHtcblx0XHRcdFx0XHR2YXIgcGx1Z2luTmFtZSA9IHAuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwLnN1YnN0cigxKSArIFwiUGx1Z2luXCI7XG5cdFx0XHRcdFx0X3JlZ2lzdGVyQ29tcGxleFNwZWNpYWxQcm9wKHAsIHtwYXJzZXI6ZnVuY3Rpb24odCwgZSwgcCwgY3NzcCwgcHQsIHBsdWdpbiwgdmFycykge1xuXHRcdFx0XHRcdFx0dmFyIHBsdWdpbkNsYXNzID0gX2dsb2JhbHMuY29tLmdyZWVuc29jay5wbHVnaW5zW3BsdWdpbk5hbWVdO1xuXHRcdFx0XHRcdFx0aWYgKCFwbHVnaW5DbGFzcykge1xuXHRcdFx0XHRcdFx0XHRfbG9nKFwiRXJyb3I6IFwiICsgcGx1Z2luTmFtZSArIFwiIGpzIGZpbGUgbm90IGxvYWRlZC5cIik7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBwdDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHBsdWdpbkNsYXNzLl9jc3NSZWdpc3RlcigpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIF9zcGVjaWFsUHJvcHNbcF0ucGFyc2UodCwgZSwgcCwgY3NzcCwgcHQsIHBsdWdpbiwgdmFycyk7XG5cdFx0XHRcdFx0fX0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cblx0XHRwID0gU3BlY2lhbFByb3AucHJvdG90eXBlO1xuXG5cdFx0LyoqXG5cdFx0ICogQWxpYXMgZm9yIF9wYXJzZUNvbXBsZXgoKSB0aGF0IGF1dG9tYXRpY2FsbHkgcGx1Z3MgaW4gY2VydGFpbiB2YWx1ZXMgZm9yIHRoaXMgU3BlY2lhbFByb3AsIGxpa2UgaXRzIHByb3BlcnR5IG5hbWUsIHdoZXRoZXIgb3Igbm90IGNvbG9ycyBzaG91bGQgYmUgc2Vuc2VkLCB0aGUgZGVmYXVsdCB2YWx1ZSwgYW5kIHByaW9yaXR5LiBJdCBhbHNvIGxvb2tzIGZvciBhbnkga2V5d29yZCB0aGF0IHRoZSBTcGVjaWFsUHJvcCBkZWZpbmVzIChsaWtlIFwiaW5zZXRcIiBmb3IgYm94U2hhZG93KSBhbmQgZW5zdXJlcyB0aGF0IHRoZSBiZWdpbm5pbmcgYW5kIGVuZGluZyB2YWx1ZXMgaGF2ZSB0aGUgc2FtZSBudW1iZXIgb2YgdmFsdWVzIGZvciBTcGVjaWFsUHJvcHMgd2hlcmUgbXVsdGkgaXMgdHJ1ZSAobGlrZSBib3hTaGFkb3cgYW5kIHRleHRTaGFkb3cgY2FuIGhhdmUgYSBjb21tYS1kZWxpbWl0ZWQgbGlzdClcblx0XHQgKiBAcGFyYW0geyFPYmplY3R9IHQgdGFyZ2V0IGVsZW1lbnRcblx0XHQgKiBAcGFyYW0geyhzdHJpbmd8bnVtYmVyfG9iamVjdCl9IGIgYmVnaW5uaW5nIHZhbHVlXG5cdFx0ICogQHBhcmFtIHsoc3RyaW5nfG51bWJlcnxvYmplY3QpfSBlIGVuZGluZyAoZGVzdGluYXRpb24pIHZhbHVlXG5cdFx0ICogQHBhcmFtIHtDU1NQcm9wVHdlZW49fSBwdCBuZXh0IENTU1Byb3BUd2VlbiBpbiB0aGUgbGlua2VkIGxpc3Rcblx0XHQgKiBAcGFyYW0ge1R3ZWVuUGx1Z2luPX0gcGx1Z2luIElmIGFub3RoZXIgcGx1Z2luIHdpbGwgYmUgdHdlZW5pbmcgdGhlIGNvbXBsZXggdmFsdWUsIHRoYXQgVHdlZW5QbHVnaW4gaW5zdGFuY2UgZ29lcyBoZXJlLlxuXHRcdCAqIEBwYXJhbSB7ZnVuY3Rpb249fSBzZXRSYXRpbyBJZiBhIGN1c3RvbSBzZXRSYXRpbygpIG1ldGhvZCBzaG91bGQgYmUgdXNlZCB0byBoYW5kbGUgdGhpcyBjb21wbGV4IHZhbHVlLCB0aGF0IGdvZXMgaGVyZS5cblx0XHQgKiBAcmV0dXJuIHtDU1NQcm9wVHdlZW49fSBGaXJzdCBDU1NQcm9wVHdlZW4gaW4gdGhlIGxpbmtlZCBsaXN0XG5cdFx0ICovXG5cdFx0cC5wYXJzZUNvbXBsZXggPSBmdW5jdGlvbih0LCBiLCBlLCBwdCwgcGx1Z2luLCBzZXRSYXRpbykge1xuXHRcdFx0dmFyIGt3ZCA9IHRoaXMua2V5d29yZCxcblx0XHRcdFx0aSwgYmEsIGVhLCBsLCBiaSwgZWk7XG5cdFx0XHQvL2lmIHRoaXMgU3BlY2lhbFByb3AncyB2YWx1ZSBjYW4gY29udGFpbiBhIGNvbW1hLWRlbGltaXRlZCBsaXN0IG9mIHZhbHVlcyAobGlrZSBib3hTaGFkb3cgb3IgdGV4dFNoYWRvdyksIHdlIG11c3QgcGFyc2UgdGhlbSBpbiBhIHNwZWNpYWwgd2F5LCBhbmQgbG9vayBmb3IgYSBrZXl3b3JkIChsaWtlIFwiaW5zZXRcIiBmb3IgYm94U2hhZG93KSBhbmQgZW5zdXJlIHRoYXQgdGhlIGJlZ2lubmluZyBhbmQgZW5kaW5nIEJPVEggaGF2ZSBpdCBpZiB0aGUgZW5kIGRlZmluZXMgaXQgYXMgc3VjaC4gV2UgYWxzbyBtdXN0IGVuc3VyZSB0aGF0IHRoZXJlIGFyZSBhbiBlcXVhbCBudW1iZXIgb2YgdmFsdWVzIHNwZWNpZmllZCAod2UgY2FuJ3QgdHdlZW4gMSBib3hTaGFkb3cgdG8gMyBmb3IgZXhhbXBsZSlcblx0XHRcdGlmICh0aGlzLm11bHRpKSBpZiAoX2NvbW1hc091dHNpZGVQYXJlbkV4cC50ZXN0KGUpIHx8IF9jb21tYXNPdXRzaWRlUGFyZW5FeHAudGVzdChiKSkge1xuXHRcdFx0XHRiYSA9IGIucmVwbGFjZShfY29tbWFzT3V0c2lkZVBhcmVuRXhwLCBcInxcIikuc3BsaXQoXCJ8XCIpO1xuXHRcdFx0XHRlYSA9IGUucmVwbGFjZShfY29tbWFzT3V0c2lkZVBhcmVuRXhwLCBcInxcIikuc3BsaXQoXCJ8XCIpO1xuXHRcdFx0fSBlbHNlIGlmIChrd2QpIHtcblx0XHRcdFx0YmEgPSBbYl07XG5cdFx0XHRcdGVhID0gW2VdO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGVhKSB7XG5cdFx0XHRcdGwgPSAoZWEubGVuZ3RoID4gYmEubGVuZ3RoKSA/IGVhLmxlbmd0aCA6IGJhLmxlbmd0aDtcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGw7IGkrKykge1xuXHRcdFx0XHRcdGIgPSBiYVtpXSA9IGJhW2ldIHx8IHRoaXMuZGZsdDtcblx0XHRcdFx0XHRlID0gZWFbaV0gPSBlYVtpXSB8fCB0aGlzLmRmbHQ7XG5cdFx0XHRcdFx0aWYgKGt3ZCkge1xuXHRcdFx0XHRcdFx0YmkgPSBiLmluZGV4T2Yoa3dkKTtcblx0XHRcdFx0XHRcdGVpID0gZS5pbmRleE9mKGt3ZCk7XG5cdFx0XHRcdFx0XHRpZiAoYmkgIT09IGVpKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChlaSA9PT0gLTEpIHsgLy9pZiB0aGUga2V5d29yZCBpc24ndCBpbiB0aGUgZW5kIHZhbHVlLCByZW1vdmUgaXQgZnJvbSB0aGUgYmVnaW5uaW5nIG9uZS5cblx0XHRcdFx0XHRcdFx0XHRiYVtpXSA9IGJhW2ldLnNwbGl0KGt3ZCkuam9pbihcIlwiKTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChiaSA9PT0gLTEpIHsgLy9pZiB0aGUga2V5d29yZCBpc24ndCBpbiB0aGUgYmVnaW5uaW5nLCBhZGQgaXQuXG5cdFx0XHRcdFx0XHRcdFx0YmFbaV0gKz0gXCIgXCIgKyBrd2Q7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0YiA9IGJhLmpvaW4oXCIsIFwiKTtcblx0XHRcdFx0ZSA9IGVhLmpvaW4oXCIsIFwiKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBfcGFyc2VDb21wbGV4KHQsIHRoaXMucCwgYiwgZSwgdGhpcy5jbHJzLCB0aGlzLmRmbHQsIHB0LCB0aGlzLnByLCBwbHVnaW4sIHNldFJhdGlvKTtcblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogQWNjZXB0cyBhIHRhcmdldCBhbmQgZW5kIHZhbHVlIGFuZCBzcGl0cyBiYWNrIGEgQ1NTUHJvcFR3ZWVuIHRoYXQgaGFzIGJlZW4gaW5zZXJ0ZWQgaW50byB0aGUgQ1NTUGx1Z2luJ3MgbGlua2VkIGxpc3QgYW5kIGNvbmZvcm1zIHdpdGggYWxsIHRoZSBjb252ZW50aW9ucyB3ZSB1c2UgaW50ZXJuYWxseSwgbGlrZSB0eXBlOi0xLCAwLCAxLCBvciAyLCBzZXR0aW5nIHVwIGFueSBleHRyYSBwcm9wZXJ0eSB0d2VlbnMsIHByaW9yaXR5LCBldGMuIEZvciBleGFtcGxlLCBpZiB3ZSBoYXZlIGEgYm94U2hhZG93IFNwZWNpYWxQcm9wIGFuZCBjYWxsOlxuXHRcdCAqIHRoaXMuX2ZpcnN0UFQgPSBzcC5wYXJzZShlbGVtZW50LCBcIjVweCAxMHB4IDIwcHggcmdiKDI1NTAsMTAyLDUxKVwiLCBcImJveFNoYWRvd1wiLCB0aGlzKTtcblx0XHQgKiBJdCBzaG91bGQgZmlndXJlIG91dCB0aGUgc3RhcnRpbmcgdmFsdWUgb2YgdGhlIGVsZW1lbnQncyBib3hTaGFkb3csIGNvbXBhcmUgaXQgdG8gdGhlIHByb3ZpZGVkIGVuZCB2YWx1ZSBhbmQgY3JlYXRlIGFsbCB0aGUgbmVjZXNzYXJ5IENTU1Byb3BUd2VlbnMgb2YgdGhlIGFwcHJvcHJpYXRlIHR5cGVzIHRvIHR3ZWVuIHRoZSBib3hTaGFkb3cuIFRoZSBDU1NQcm9wVHdlZW4gdGhhdCBnZXRzIHNwaXQgYmFjayBzaG91bGQgYWxyZWFkeSBiZSBpbnNlcnRlZCBpbnRvIHRoZSBsaW5rZWQgbGlzdCAodGhlIDR0aCBwYXJhbWV0ZXIgaXMgdGhlIGN1cnJlbnQgaGVhZCwgc28gcHJlcGVuZCB0byB0aGF0KS5cblx0XHQgKiBAcGFyYW0geyFPYmplY3R9IHQgVGFyZ2V0IG9iamVjdCB3aG9zZSBwcm9wZXJ0eSBpcyBiZWluZyB0d2VlbmVkXG5cdFx0ICogQHBhcmFtIHtPYmplY3R9IGUgRW5kIHZhbHVlIGFzIHByb3ZpZGVkIGluIHRoZSB2YXJzIG9iamVjdCAodHlwaWNhbGx5IGEgc3RyaW5nLCBidXQgbm90IGFsd2F5cyAtIGxpa2UgYSB0aHJvd1Byb3BzIHdvdWxkIGJlIGFuIG9iamVjdCkuXG5cdFx0ICogQHBhcmFtIHshc3RyaW5nfSBwIFByb3BlcnR5IG5hbWVcblx0XHQgKiBAcGFyYW0geyFDU1NQbHVnaW59IGNzc3AgVGhlIENTU1BsdWdpbiBpbnN0YW5jZSB0aGF0IHNob3VsZCBiZSBhc3NvY2lhdGVkIHdpdGggdGhpcyB0d2Vlbi5cblx0XHQgKiBAcGFyYW0gez9DU1NQcm9wVHdlZW59IHB0IFRoZSBDU1NQcm9wVHdlZW4gdGhhdCBpcyB0aGUgY3VycmVudCBoZWFkIG9mIHRoZSBsaW5rZWQgbGlzdCAod2UnbGwgcHJlcGVuZCB0byBpdClcblx0XHQgKiBAcGFyYW0ge1R3ZWVuUGx1Z2luPX0gcGx1Z2luIElmIGEgcGx1Z2luIHdpbGwgYmUgdXNlZCB0byB0d2VlbiB0aGUgcGFyc2VkIHZhbHVlLCB0aGlzIGlzIHRoZSBwbHVnaW4gaW5zdGFuY2UuXG5cdFx0ICogQHBhcmFtIHtPYmplY3Q9fSB2YXJzIE9yaWdpbmFsIHZhcnMgb2JqZWN0IHRoYXQgY29udGFpbnMgdGhlIGRhdGEgZm9yIHBhcnNpbmcuXG5cdFx0ICogQHJldHVybiB7Q1NTUHJvcFR3ZWVufSBUaGUgZmlyc3QgQ1NTUHJvcFR3ZWVuIGluIHRoZSBsaW5rZWQgbGlzdCB3aGljaCBpbmNsdWRlcyB0aGUgbmV3IG9uZShzKSBhZGRlZCBieSB0aGUgcGFyc2UoKSBjYWxsLlxuXHRcdCAqL1xuXHRcdHAucGFyc2UgPSBmdW5jdGlvbih0LCBlLCBwLCBjc3NwLCBwdCwgcGx1Z2luLCB2YXJzKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5wYXJzZUNvbXBsZXgodC5zdHlsZSwgdGhpcy5mb3JtYXQoX2dldFN0eWxlKHQsIHRoaXMucCwgX2NzLCBmYWxzZSwgdGhpcy5kZmx0KSksIHRoaXMuZm9ybWF0KGUpLCBwdCwgcGx1Z2luKTtcblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogUmVnaXN0ZXJzIGEgc3BlY2lhbCBwcm9wZXJ0eSB0aGF0IHNob3VsZCBiZSBpbnRlcmNlcHRlZCBmcm9tIGFueSBcImNzc1wiIG9iamVjdHMgZGVmaW5lZCBpbiB0d2VlbnMuIFRoaXMgYWxsb3dzIHlvdSB0byBoYW5kbGUgdGhlbSBob3dldmVyIHlvdSB3YW50IHdpdGhvdXQgQ1NTUGx1Z2luIGRvaW5nIGl0IGZvciB5b3UuIFRoZSAybmQgcGFyYW1ldGVyIHNob3VsZCBiZSBhIGZ1bmN0aW9uIHRoYXQgYWNjZXB0cyAzIHBhcmFtZXRlcnM6XG5cdFx0ICogIDEpIFRhcmdldCBvYmplY3Qgd2hvc2UgcHJvcGVydHkgc2hvdWxkIGJlIHR3ZWVuZWQgKHR5cGljYWxseSBhIERPTSBlbGVtZW50KVxuXHRcdCAqICAyKSBUaGUgZW5kL2Rlc3RpbmF0aW9uIHZhbHVlIChjb3VsZCBiZSBhIHN0cmluZywgbnVtYmVyLCBvYmplY3QsIG9yIHdoYXRldmVyIHlvdSB3YW50KVxuXHRcdCAqICAzKSBUaGUgdHdlZW4gaW5zdGFuY2UgKHlvdSBwcm9iYWJseSBkb24ndCBuZWVkIHRvIHdvcnJ5IGFib3V0IHRoaXMsIGJ1dCBpdCBjYW4gYmUgdXNlZnVsIGZvciBsb29raW5nIHVwIGluZm9ybWF0aW9uIGxpa2UgdGhlIGR1cmF0aW9uKVxuXHRcdCAqXG5cdFx0ICogVGhlbiwgeW91ciBmdW5jdGlvbiBzaG91bGQgcmV0dXJuIGEgZnVuY3Rpb24gd2hpY2ggd2lsbCBiZSBjYWxsZWQgZWFjaCB0aW1lIHRoZSB0d2VlbiBnZXRzIHJlbmRlcmVkLCBwYXNzaW5nIGEgbnVtZXJpYyBcInJhdGlvXCIgcGFyYW1ldGVyIHRvIHlvdXIgZnVuY3Rpb24gdGhhdCBpbmRpY2F0ZXMgdGhlIGNoYW5nZSBmYWN0b3IgKHVzdWFsbHkgYmV0d2VlbiAwIGFuZCAxKS4gRm9yIGV4YW1wbGU6XG5cdFx0ICpcblx0XHQgKiBDU1NQbHVnaW4ucmVnaXN0ZXJTcGVjaWFsUHJvcChcIm15Q3VzdG9tUHJvcFwiLCBmdW5jdGlvbih0YXJnZXQsIHZhbHVlLCB0d2Vlbikge1xuXHRcdCAqICAgICAgdmFyIHN0YXJ0ID0gdGFyZ2V0LnN0eWxlLndpZHRoO1xuXHRcdCAqICAgICAgcmV0dXJuIGZ1bmN0aW9uKHJhdGlvKSB7XG5cdFx0ICogICAgICAgICAgICAgIHRhcmdldC5zdHlsZS53aWR0aCA9IChzdGFydCArIHZhbHVlICogcmF0aW8pICsgXCJweFwiO1xuXHRcdCAqICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNldCB3aWR0aCB0byBcIiArIHRhcmdldC5zdHlsZS53aWR0aCk7XG5cdFx0ICogICAgICAgICAgfVxuXHRcdCAqIH0sIDApO1xuXHRcdCAqXG5cdFx0ICogVGhlbiwgd2hlbiBJIGRvIHRoaXMgdHdlZW4sIGl0IHdpbGwgdHJpZ2dlciBteSBzcGVjaWFsIHByb3BlcnR5OlxuXHRcdCAqXG5cdFx0ICogVHdlZW5MaXRlLnRvKGVsZW1lbnQsIDEsIHtjc3M6e215Q3VzdG9tUHJvcDoxMDB9fSk7XG5cdFx0ICpcblx0XHQgKiBJbiB0aGUgZXhhbXBsZSwgb2YgY291cnNlLCB3ZSdyZSBqdXN0IGNoYW5naW5nIHRoZSB3aWR0aCwgYnV0IHlvdSBjYW4gZG8gYW55dGhpbmcgeW91IHdhbnQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0geyFzdHJpbmd9IG5hbWUgUHJvcGVydHkgbmFtZSAob3IgY29tbWEtZGVsaW1pdGVkIGxpc3Qgb2YgcHJvcGVydHkgbmFtZXMpIHRoYXQgc2hvdWxkIGJlIGludGVyY2VwdGVkIGFuZCBoYW5kbGVkIGJ5IHlvdXIgZnVuY3Rpb24uIEZvciBleGFtcGxlLCBpZiBJIGRlZmluZSBcIm15Q3VzdG9tUHJvcFwiLCB0aGVuIGl0IHdvdWxkIGhhbmRsZSB0aGF0IHBvcnRpb24gb2YgdGhlIGZvbGxvd2luZyB0d2VlbjogVHdlZW5MaXRlLnRvKGVsZW1lbnQsIDEsIHtjc3M6e215Q3VzdG9tUHJvcDoxMDB9fSlcblx0XHQgKiBAcGFyYW0geyFmdW5jdGlvbihPYmplY3QsIE9iamVjdCwgT2JqZWN0LCBzdHJpbmcpOmZ1bmN0aW9uKG51bWJlcil9IG9uSW5pdFR3ZWVuIFRoZSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdoZW4gYSB0d2VlbiBvZiB0aGlzIHNwZWNpYWwgcHJvcGVydHkgaXMgcGVyZm9ybWVkLiBUaGUgZnVuY3Rpb24gd2lsbCByZWNlaXZlIDQgcGFyYW1ldGVyczogMSkgVGFyZ2V0IG9iamVjdCB0aGF0IHNob3VsZCBiZSB0d2VlbmVkLCAyKSBWYWx1ZSB0aGF0IHdhcyBwYXNzZWQgdG8gdGhlIHR3ZWVuLCAzKSBUaGUgdHdlZW4gaW5zdGFuY2UgaXRzZWxmIChyYXJlbHkgdXNlZCksIGFuZCA0KSBUaGUgcHJvcGVydHkgbmFtZSB0aGF0J3MgYmVpbmcgdHdlZW5lZC4gWW91ciBmdW5jdGlvbiBzaG91bGQgcmV0dXJuIGEgZnVuY3Rpb24gdGhhdCBzaG91bGQgYmUgY2FsbGVkIG9uIGV2ZXJ5IHVwZGF0ZSBvZiB0aGUgdHdlZW4uIFRoYXQgZnVuY3Rpb24gd2lsbCByZWNlaXZlIGEgc2luZ2xlIHBhcmFtZXRlciB0aGF0IGlzIGEgXCJjaGFuZ2UgZmFjdG9yXCIgdmFsdWUgKHR5cGljYWxseSBiZXR3ZWVuIDAgYW5kIDEpIGluZGljYXRpbmcgdGhlIGFtb3VudCBvZiBjaGFuZ2UgYXMgYSByYXRpby4gWW91IGNhbiB1c2UgdGhpcyB0byBkZXRlcm1pbmUgaG93IHRvIHNldCB0aGUgdmFsdWVzIGFwcHJvcHJpYXRlbHkgaW4geW91ciBmdW5jdGlvbi5cblx0XHQgKiBAcGFyYW0ge251bWJlcj19IHByaW9yaXR5IFByaW9yaXR5IHRoYXQgaGVscHMgdGhlIGVuZ2luZSBkZXRlcm1pbmUgdGhlIG9yZGVyIGluIHdoaWNoIHRvIHNldCB0aGUgcHJvcGVydGllcyAoZGVmYXVsdDogMCkuIEhpZ2hlciBwcmlvcml0eSBwcm9wZXJ0aWVzIHdpbGwgYmUgdXBkYXRlZCBiZWZvcmUgbG93ZXIgcHJpb3JpdHkgb25lcy5cblx0XHQgKi9cblx0XHRDU1NQbHVnaW4ucmVnaXN0ZXJTcGVjaWFsUHJvcCA9IGZ1bmN0aW9uKG5hbWUsIG9uSW5pdFR3ZWVuLCBwcmlvcml0eSkge1xuXHRcdFx0X3JlZ2lzdGVyQ29tcGxleFNwZWNpYWxQcm9wKG5hbWUsIHtwYXJzZXI6ZnVuY3Rpb24odCwgZSwgcCwgY3NzcCwgcHQsIHBsdWdpbiwgdmFycykge1xuXHRcdFx0XHR2YXIgcnYgPSBuZXcgQ1NTUHJvcFR3ZWVuKHQsIHAsIDAsIDAsIHB0LCAyLCBwLCBmYWxzZSwgcHJpb3JpdHkpO1xuXHRcdFx0XHRydi5wbHVnaW4gPSBwbHVnaW47XG5cdFx0XHRcdHJ2LnNldFJhdGlvID0gb25Jbml0VHdlZW4odCwgZSwgY3NzcC5fdHdlZW4sIHApO1xuXHRcdFx0XHRyZXR1cm4gcnY7XG5cdFx0XHR9LCBwcmlvcml0eTpwcmlvcml0eX0pO1xuXHRcdH07XG5cblxuXG5cblxuXG5cdFx0Ly90cmFuc2Zvcm0tcmVsYXRlZCBtZXRob2RzIGFuZCBwcm9wZXJ0aWVzXG5cdFx0Q1NTUGx1Z2luLnVzZVNWR1RyYW5zZm9ybUF0dHIgPSBfaXNTYWZhcmk7IC8vU2FmYXJpIGhhcyBzb21lIHJlbmRlcmluZyBidWdzIHdoZW4gYXBwbHlpbmcgQ1NTIHRyYW5zZm9ybXMgdG8gU1ZHIGVsZW1lbnRzLCBzbyBkZWZhdWx0IHRvIHVzaW5nIHRoZSBcInRyYW5zZm9ybVwiIGF0dHJpYnV0ZSBpbnN0ZWFkLlxuXHRcdHZhciBfdHJhbnNmb3JtUHJvcHMgPSAoXCJzY2FsZVgsc2NhbGVZLHNjYWxlWix4LHkseixza2V3WCxza2V3WSxyb3RhdGlvbixyb3RhdGlvblgscm90YXRpb25ZLHBlcnNwZWN0aXZlLHhQZXJjZW50LHlQZXJjZW50XCIpLnNwbGl0KFwiLFwiKSxcblx0XHRcdF90cmFuc2Zvcm1Qcm9wID0gX2NoZWNrUHJvcFByZWZpeChcInRyYW5zZm9ybVwiKSwgLy90aGUgSmF2YXNjcmlwdCAoY2FtZWxDYXNlKSB0cmFuc2Zvcm0gcHJvcGVydHksIGxpa2UgbXNUcmFuc2Zvcm0sIFdlYmtpdFRyYW5zZm9ybSwgTW96VHJhbnNmb3JtLCBvciBPVHJhbnNmb3JtLlxuXHRcdFx0X3RyYW5zZm9ybVByb3BDU1MgPSBfcHJlZml4Q1NTICsgXCJ0cmFuc2Zvcm1cIixcblx0XHRcdF90cmFuc2Zvcm1PcmlnaW5Qcm9wID0gX2NoZWNrUHJvcFByZWZpeChcInRyYW5zZm9ybU9yaWdpblwiKSxcblx0XHRcdF9zdXBwb3J0czNEID0gKF9jaGVja1Byb3BQcmVmaXgoXCJwZXJzcGVjdGl2ZVwiKSAhPT0gbnVsbCksXG5cdFx0XHRUcmFuc2Zvcm0gPSBfaW50ZXJuYWxzLlRyYW5zZm9ybSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR0aGlzLnBlcnNwZWN0aXZlID0gcGFyc2VGbG9hdChDU1NQbHVnaW4uZGVmYXVsdFRyYW5zZm9ybVBlcnNwZWN0aXZlKSB8fCAwO1xuXHRcdFx0XHR0aGlzLmZvcmNlM0QgPSAoQ1NTUGx1Z2luLmRlZmF1bHRGb3JjZTNEID09PSBmYWxzZSB8fCAhX3N1cHBvcnRzM0QpID8gZmFsc2UgOiBDU1NQbHVnaW4uZGVmYXVsdEZvcmNlM0QgfHwgXCJhdXRvXCI7XG5cdFx0XHR9LFxuXHRcdFx0X1NWR0VsZW1lbnQgPSB3aW5kb3cuU1ZHRWxlbWVudCxcblx0XHRcdF91c2VTVkdUcmFuc2Zvcm1BdHRyLFxuXHRcdFx0Ly9Tb21lIGJyb3dzZXJzIChsaWtlIEZpcmVmb3ggYW5kIElFKSBkb24ndCBob25vciB0cmFuc2Zvcm0tb3JpZ2luIHByb3Blcmx5IGluIFNWRyBlbGVtZW50cywgc28gd2UgbmVlZCB0byBtYW51YWxseSBhZGp1c3QgdGhlIG1hdHJpeCBhY2NvcmRpbmdseS4gV2UgZmVhdHVyZSBkZXRlY3QgaGVyZSByYXRoZXIgdGhhbiBhbHdheXMgZG9pbmcgdGhlIGNvbnZlcnNpb24gZm9yIGNlcnRhaW4gYnJvd3NlcnMgYmVjYXVzZSB0aGV5IG1heSBmaXggdGhlIHByb2JsZW0gYXQgc29tZSBwb2ludCBpbiB0aGUgZnV0dXJlLlxuXG5cdFx0XHRfY3JlYXRlU1ZHID0gZnVuY3Rpb24odHlwZSwgY29udGFpbmVyLCBhdHRyaWJ1dGVzKSB7XG5cdFx0XHRcdHZhciBlbGVtZW50ID0gX2RvYy5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCB0eXBlKSxcblx0XHRcdFx0XHRyZWcgPSAvKFthLXpdKShbQS1aXSkvZyxcblx0XHRcdFx0XHRwO1xuXHRcdFx0XHRmb3IgKHAgaW4gYXR0cmlidXRlcykge1xuXHRcdFx0XHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlTlMobnVsbCwgcC5yZXBsYWNlKHJlZywgXCIkMS0kMlwiKS50b0xvd2VyQ2FzZSgpLCBhdHRyaWJ1dGVzW3BdKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cdFx0XHRcdHJldHVybiBlbGVtZW50O1xuXHRcdFx0fSxcblx0XHRcdF9kb2NFbGVtZW50ID0gX2RvYy5kb2N1bWVudEVsZW1lbnQsXG5cdFx0XHRfZm9yY2VTVkdUcmFuc2Zvcm1BdHRyID0gKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQvL0lFIGFuZCBBbmRyb2lkIHN0b2NrIGRvbid0IHN1cHBvcnQgQ1NTIHRyYW5zZm9ybXMgb24gU1ZHIGVsZW1lbnRzLCBzbyB3ZSBtdXN0IHdyaXRlIHRoZW0gdG8gdGhlIFwidHJhbnNmb3JtXCIgYXR0cmlidXRlLiBXZSBwb3B1bGF0ZSB0aGlzIHZhcmlhYmxlIGluIHRoZSBfcGFyc2VUcmFuc2Zvcm0oKSBtZXRob2QsIGFuZCBvbmx5IGlmL3doZW4gd2UgY29tZSBhY3Jvc3MgYW4gU1ZHIGVsZW1lbnRcblx0XHRcdFx0dmFyIGZvcmNlID0gX2llVmVycyB8fCAoL0FuZHJvaWQvaS50ZXN0KF9hZ2VudCkgJiYgIXdpbmRvdy5jaHJvbWUpLFxuXHRcdFx0XHRcdHN2ZywgcmVjdCwgd2lkdGg7XG5cdFx0XHRcdGlmIChfZG9jLmNyZWF0ZUVsZW1lbnROUyAmJiAhZm9yY2UpIHsgLy9JRTggYW5kIGVhcmxpZXIgZG9lc24ndCBzdXBwb3J0IFNWRyBhbnl3YXlcblx0XHRcdFx0XHRzdmcgPSBfY3JlYXRlU1ZHKFwic3ZnXCIsIF9kb2NFbGVtZW50KTtcblx0XHRcdFx0XHRyZWN0ID0gX2NyZWF0ZVNWRyhcInJlY3RcIiwgc3ZnLCB7d2lkdGg6MTAwLCBoZWlnaHQ6NTAsIHg6MTAwfSk7XG5cdFx0XHRcdFx0d2lkdGggPSByZWN0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuXHRcdFx0XHRcdHJlY3Quc3R5bGVbX3RyYW5zZm9ybU9yaWdpblByb3BdID0gXCI1MCUgNTAlXCI7XG5cdFx0XHRcdFx0cmVjdC5zdHlsZVtfdHJhbnNmb3JtUHJvcF0gPSBcInNjYWxlWCgwLjUpXCI7XG5cdFx0XHRcdFx0Zm9yY2UgPSAod2lkdGggPT09IHJlY3QuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggJiYgIShfaXNGaXJlZm94ICYmIF9zdXBwb3J0czNEKSk7IC8vbm90ZTogRmlyZWZveCBmYWlscyB0aGUgdGVzdCBldmVuIHRob3VnaCBpdCBkb2VzIHN1cHBvcnQgQ1NTIHRyYW5zZm9ybXMgaW4gM0QuIFNpbmNlIHdlIGNhbid0IHB1c2ggM0Qgc3R1ZmYgaW50byB0aGUgdHJhbnNmb3JtIGF0dHJpYnV0ZSwgd2UgZm9yY2UgRmlyZWZveCB0byBwYXNzIHRoZSB0ZXN0IGhlcmUgKGFzIGxvbmcgYXMgaXQgZG9lcyB0cnVseSBzdXBwb3J0IDNEKS5cblx0XHRcdFx0XHRfZG9jRWxlbWVudC5yZW1vdmVDaGlsZChzdmcpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBmb3JjZTtcblx0XHRcdH0pKCksXG5cdFx0XHRfcGFyc2VTVkdPcmlnaW4gPSBmdW5jdGlvbihlLCBsb2NhbCwgZGVjb3JhdGVlLCBhYnNvbHV0ZSkge1xuXHRcdFx0XHR2YXIgYmJveCwgdjtcblx0XHRcdFx0aWYgKCFhYnNvbHV0ZSB8fCAhKHYgPSBhYnNvbHV0ZS5zcGxpdChcIiBcIikpLmxlbmd0aCkge1xuXHRcdFx0XHRcdGJib3ggPSBlLmdldEJCb3goKTtcblx0XHRcdFx0XHRsb2NhbCA9IF9wYXJzZVBvc2l0aW9uKGxvY2FsKS5zcGxpdChcIiBcIik7XG5cdFx0XHRcdFx0diA9IFsobG9jYWxbMF0uaW5kZXhPZihcIiVcIikgIT09IC0xID8gcGFyc2VGbG9hdChsb2NhbFswXSkgLyAxMDAgKiBiYm94LndpZHRoIDogcGFyc2VGbG9hdChsb2NhbFswXSkpICsgYmJveC54LFxuXHRcdFx0XHRcdFx0IChsb2NhbFsxXS5pbmRleE9mKFwiJVwiKSAhPT0gLTEgPyBwYXJzZUZsb2F0KGxvY2FsWzFdKSAvIDEwMCAqIGJib3guaGVpZ2h0IDogcGFyc2VGbG9hdChsb2NhbFsxXSkpICsgYmJveC55XTtcblx0XHRcdFx0fVxuXHRcdFx0XHRkZWNvcmF0ZWUueE9yaWdpbiA9IHBhcnNlRmxvYXQodlswXSk7XG5cdFx0XHRcdGRlY29yYXRlZS55T3JpZ2luID0gcGFyc2VGbG9hdCh2WzFdKTtcblx0XHRcdFx0ZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXN2Zy1vcmlnaW5cIiwgdi5qb2luKFwiIFwiKSk7XG5cdFx0XHR9LFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIFBhcnNlcyB0aGUgdHJhbnNmb3JtIHZhbHVlcyBmb3IgYW4gZWxlbWVudCwgcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIHgsIHksIHosIHNjYWxlWCwgc2NhbGVZLCBzY2FsZVosIHJvdGF0aW9uLCByb3RhdGlvblgsIHJvdGF0aW9uWSwgc2tld1gsIGFuZCBza2V3WSBwcm9wZXJ0aWVzLiBOb3RlOiBieSBkZWZhdWx0IChmb3IgcGVyZm9ybWFuY2UgcmVhc29ucyksIGFsbCBza2V3aW5nIGlzIGNvbWJpbmVkIGludG8gc2tld1ggYW5kIHJvdGF0aW9uIGJ1dCBza2V3WSBzdGlsbCBoYXMgYSBwbGFjZSBpbiB0aGUgdHJhbnNmb3JtIG9iamVjdCBzbyB0aGF0IHdlIGNhbiByZWNvcmQgaG93IG11Y2ggb2YgdGhlIHNrZXcgaXMgYXR0cmlidXRlZCB0byBza2V3WCB2cyBza2V3WS4gUmVtZW1iZXIsIGEgc2tld1kgb2YgMTAgbG9va3MgdGhlIHNhbWUgYXMgYSByb3RhdGlvbiBvZiAxMCBhbmQgc2tld1ggb2YgLTEwLlxuXHRcdFx0ICogQHBhcmFtIHshT2JqZWN0fSB0IHRhcmdldCBlbGVtZW50XG5cdFx0XHQgKiBAcGFyYW0ge09iamVjdD19IGNzIGNvbXB1dGVkIHN0eWxlIG9iamVjdCAob3B0aW9uYWwpXG5cdFx0XHQgKiBAcGFyYW0ge2Jvb2xlYW49fSByZWMgaWYgdHJ1ZSwgdGhlIHRyYW5zZm9ybSB2YWx1ZXMgd2lsbCBiZSByZWNvcmRlZCB0byB0aGUgdGFyZ2V0IGVsZW1lbnQncyBfZ3NUcmFuc2Zvcm0gb2JqZWN0LCBsaWtlIHRhcmdldC5fZ3NUcmFuc2Zvcm0gPSB7eDowLCB5OjAsIHo6MCwgc2NhbGVYOjEuLi59XG5cdFx0XHQgKiBAcGFyYW0ge2Jvb2xlYW49fSBwYXJzZSBpZiB0cnVlLCB3ZSdsbCBpZ25vcmUgYW55IF9nc1RyYW5zZm9ybSB2YWx1ZXMgdGhhdCBhbHJlYWR5IGV4aXN0IG9uIHRoZSBlbGVtZW50LCBhbmQgZm9yY2UgYSByZXBhcnNpbmcgb2YgdGhlIGNzcyAoY2FsY3VsYXRlZCBzdHlsZSlcblx0XHRcdCAqIEByZXR1cm4ge29iamVjdH0gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIG9mIHRoZSB0cmFuc2Zvcm0gcHJvcGVydGllcy92YWx1ZXMgbGlrZSB7eDowLCB5OjAsIHo6MCwgc2NhbGVYOjEuLi59XG5cdFx0XHQgKi9cblx0XHRcdF9nZXRUcmFuc2Zvcm0gPSBfaW50ZXJuYWxzLmdldFRyYW5zZm9ybSA9IGZ1bmN0aW9uKHQsIGNzLCByZWMsIHBhcnNlKSB7XG5cdFx0XHRcdGlmICh0Ll9nc1RyYW5zZm9ybSAmJiByZWMgJiYgIXBhcnNlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHQuX2dzVHJhbnNmb3JtOyAvL2lmIHRoZSBlbGVtZW50IGFscmVhZHkgaGFzIGEgX2dzVHJhbnNmb3JtLCB1c2UgdGhhdC4gTm90ZTogc29tZSBicm93c2VycyBkb24ndCBhY2N1cmF0ZWx5IHJldHVybiB0aGUgY2FsY3VsYXRlZCBzdHlsZSBmb3IgdGhlIHRyYW5zZm9ybSAocGFydGljdWxhcmx5IGZvciBTVkcpLCBzbyBpdCdzIGFsbW9zdCBhbHdheXMgc2FmZXN0IHRvIGp1c3QgdXNlIHRoZSB2YWx1ZXMgd2UndmUgYWxyZWFkeSBhcHBsaWVkIHJhdGhlciB0aGFuIHJlLXBhcnNpbmcgdGhpbmdzLlxuXHRcdFx0XHR9XG5cdFx0XHRcdHZhciB0bSA9IHJlYyA/IHQuX2dzVHJhbnNmb3JtIHx8IG5ldyBUcmFuc2Zvcm0oKSA6IG5ldyBUcmFuc2Zvcm0oKSxcblx0XHRcdFx0XHRpbnZYID0gKHRtLnNjYWxlWCA8IDApLCAvL2luIG9yZGVyIHRvIGludGVycHJldCB0aGluZ3MgcHJvcGVybHksIHdlIG5lZWQgdG8ga25vdyBpZiB0aGUgdXNlciBhcHBsaWVkIGEgbmVnYXRpdmUgc2NhbGVYIHByZXZpb3VzbHkgc28gdGhhdCB3ZSBjYW4gYWRqdXN0IHRoZSByb3RhdGlvbiBhbmQgc2tld1ggYWNjb3JkaW5nbHkuIE90aGVyd2lzZSwgaWYgd2UgYWx3YXlzIGludGVycHJldCBhIGZsaXBwZWQgbWF0cml4IGFzIGFmZmVjdGluZyBzY2FsZVkgYW5kIHRoZSB1c2VyIG9ubHkgd2FudHMgdG8gdHdlZW4gdGhlIHNjYWxlWCBvbiBtdWx0aXBsZSBzZXF1ZW50aWFsIHR3ZWVucywgaXQgd291bGQga2VlcCB0aGUgbmVnYXRpdmUgc2NhbGVZIHdpdGhvdXQgdGhhdCBiZWluZyB0aGUgdXNlcidzIGludGVudC5cblx0XHRcdFx0XHRtaW4gPSAwLjAwMDAyLFxuXHRcdFx0XHRcdHJuZCA9IDEwMDAwMCxcblx0XHRcdFx0XHR6T3JpZ2luID0gX3N1cHBvcnRzM0QgPyBwYXJzZUZsb2F0KF9nZXRTdHlsZSh0LCBfdHJhbnNmb3JtT3JpZ2luUHJvcCwgY3MsIGZhbHNlLCBcIjAgMCAwXCIpLnNwbGl0KFwiIFwiKVsyXSkgfHwgdG0uek9yaWdpbiAgfHwgMCA6IDAsXG5cdFx0XHRcdFx0ZGVmYXVsdFRyYW5zZm9ybVBlcnNwZWN0aXZlID0gcGFyc2VGbG9hdChDU1NQbHVnaW4uZGVmYXVsdFRyYW5zZm9ybVBlcnNwZWN0aXZlKSB8fCAwLFxuXHRcdFx0XHRcdGlzRGVmYXVsdCwgcywgbSwgaSwgbiwgZGVjLCBzY2FsZVgsIHNjYWxlWSwgcm90YXRpb24sIHNrZXdYO1xuXHRcdFx0XHRpZiAoX3RyYW5zZm9ybVByb3ApIHtcblx0XHRcdFx0XHRzID0gX2dldFN0eWxlKHQsIF90cmFuc2Zvcm1Qcm9wQ1NTLCBjcywgdHJ1ZSk7XG5cdFx0XHRcdH0gZWxzZSBpZiAodC5jdXJyZW50U3R5bGUpIHtcblx0XHRcdFx0XHQvL2ZvciBvbGRlciB2ZXJzaW9ucyBvZiBJRSwgd2UgbmVlZCB0byBpbnRlcnByZXQgdGhlIGZpbHRlciBwb3J0aW9uIHRoYXQgaXMgaW4gdGhlIGZvcm1hdDogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0Lk1hdHJpeChNMTE9Ni4xMjMyMzM5OTU3MzY3NjZlLTE3LCBNMTI9LTEsIE0yMT0xLCBNMjI9Ni4xMjMyMzM5OTU3MzY3NjZlLTE3LCBzaXppbmdNZXRob2Q9J2F1dG8gZXhwYW5kJykgTm90aWNlIHRoYXQgd2UgbmVlZCB0byBzd2FwIGIgYW5kIGMgY29tcGFyZWQgdG8gYSBub3JtYWwgbWF0cml4LlxuXHRcdFx0XHRcdHMgPSB0LmN1cnJlbnRTdHlsZS5maWx0ZXIubWF0Y2goX2llR2V0TWF0cml4RXhwKTtcblx0XHRcdFx0XHRzID0gKHMgJiYgcy5sZW5ndGggPT09IDQpID8gW3NbMF0uc3Vic3RyKDQpLCBOdW1iZXIoc1syXS5zdWJzdHIoNCkpLCBOdW1iZXIoc1sxXS5zdWJzdHIoNCkpLCBzWzNdLnN1YnN0cig0KSwgKHRtLnggfHwgMCksICh0bS55IHx8IDApXS5qb2luKFwiLFwiKSA6IFwiXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0aXNEZWZhdWx0ID0gKCFzIHx8IHMgPT09IFwibm9uZVwiIHx8IHMgPT09IFwibWF0cml4KDEsIDAsIDAsIDEsIDAsIDApXCIpO1xuXHRcdFx0XHR0bS5zdmcgPSAhIShfU1ZHRWxlbWVudCAmJiB0eXBlb2YodC5nZXRCQm94KSA9PT0gXCJmdW5jdGlvblwiICYmIHQuZ2V0Q1RNICYmICghdC5wYXJlbnROb2RlIHx8ICh0LnBhcmVudE5vZGUuZ2V0QkJveCAmJiB0LnBhcmVudE5vZGUuZ2V0Q1RNKSkpOyAvL2Rvbid0IGp1c3QgcmVseSBvbiBcImluc3RhbmNlb2YgX1NWR0VsZW1lbnRcIiBiZWNhdXNlIGlmIHRoZSBTVkcgaXMgZW1iZWRkZWQgdmlhIGFuIG9iamVjdCB0YWcsIGl0IHdvbid0IHdvcmsgKFNWR0VsZW1lbnQgaXMgbWFwcGVkIHRvIGEgZGlmZmVyZW50IG9iamVjdClcblx0XHRcdFx0aWYgKHRtLnN2Zykge1xuXHRcdFx0XHRcdGlmIChpc0RlZmF1bHQgJiYgKHQuc3R5bGVbX3RyYW5zZm9ybVByb3BdICsgXCJcIikuaW5kZXhPZihcIm1hdHJpeFwiKSAhPT0gLTEpIHsgLy9zb21lIGJyb3dzZXJzIChsaWtlIENocm9tZSA0MCkgZG9uJ3QgY29ycmVjdGx5IHJlcG9ydCB0cmFuc2Zvcm1zIHRoYXQgYXJlIGFwcGxpZWQgaW5saW5lIG9uIGFuIFNWRyBlbGVtZW50ICh0aGV5IGRvbid0IGdldCBpbmNsdWRlZCBpbiB0aGUgY29tcHV0ZWQgc3R5bGUpLCBzbyB3ZSBkb3VibGUtY2hlY2sgaGVyZSBhbmQgYWNjZXB0IG1hdHJpeCB2YWx1ZXNcblx0XHRcdFx0XHRcdHMgPSB0LnN0eWxlW190cmFuc2Zvcm1Qcm9wXTtcblx0XHRcdFx0XHRcdGlzRGVmYXVsdCA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRfcGFyc2VTVkdPcmlnaW4odCwgX2dldFN0eWxlKHQsIF90cmFuc2Zvcm1PcmlnaW5Qcm9wLCBfY3MsIGZhbHNlLCBcIjUwJSA1MCVcIikgKyBcIlwiLCB0bSwgdC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXN2Zy1vcmlnaW5cIikpO1xuXHRcdFx0XHRcdF91c2VTVkdUcmFuc2Zvcm1BdHRyID0gQ1NTUGx1Z2luLnVzZVNWR1RyYW5zZm9ybUF0dHIgfHwgX2ZvcmNlU1ZHVHJhbnNmb3JtQXR0cjtcblx0XHRcdFx0XHRtID0gdC5nZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIik7XG5cdFx0XHRcdFx0aWYgKGlzRGVmYXVsdCAmJiBtICYmIG0uaW5kZXhPZihcIm1hdHJpeFwiKSAhPT0gLTEpIHsgLy9qdXN0IGluIGNhc2UgdGhlcmUncyBhIFwidHJhbnNmb3JtXCIgdmFsdWUgc3BlY2lmaWVkIGFzIGFuIGF0dHJpYnV0ZSBpbnN0ZWFkIG9mIENTUyBzdHlsZS4gT25seSBhY2NlcHQgYSBtYXRyaXgsIHRob3VnaC5cblx0XHRcdFx0XHRcdHMgPSBtO1xuXHRcdFx0XHRcdFx0aXNEZWZhdWx0ID0gMDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFpc0RlZmF1bHQpIHtcblx0XHRcdFx0XHQvL3NwbGl0IHRoZSBtYXRyaXggdmFsdWVzIG91dCBpbnRvIGFuIGFycmF5IChtIGZvciBtYXRyaXgpXG5cdFx0XHRcdFx0bSA9IChzIHx8IFwiXCIpLm1hdGNoKC8oPzpcXC18XFxiKVtcXGRcXC1cXC5lXStcXGIvZ2kpIHx8IFtdO1xuXHRcdFx0XHRcdGkgPSBtLmxlbmd0aDtcblx0XHRcdFx0XHR3aGlsZSAoLS1pID4gLTEpIHtcblx0XHRcdFx0XHRcdG4gPSBOdW1iZXIobVtpXSk7XG5cdFx0XHRcdFx0XHRtW2ldID0gKGRlYyA9IG4gLSAobiB8PSAwKSkgPyAoKGRlYyAqIHJuZCArIChkZWMgPCAwID8gLTAuNSA6IDAuNSkpIHwgMCkgLyBybmQgKyBuIDogbjsgLy9jb252ZXJ0IHN0cmluZ3MgdG8gTnVtYmVycyBhbmQgcm91bmQgdG8gNSBkZWNpbWFsIHBsYWNlcyB0byBhdm9pZCBpc3N1ZXMgd2l0aCB0aW55IG51bWJlcnMuIFJvdWdobHkgMjB4IGZhc3RlciB0aGFuIE51bWJlci50b0ZpeGVkKCkuIFdlIGFsc28gbXVzdCBtYWtlIHN1cmUgdG8gcm91bmQgYmVmb3JlIGRpdmlkaW5nIHNvIHRoYXQgdmFsdWVzIGxpa2UgMC45OTk5OTk5OTk5IGJlY29tZSAxIHRvIGF2b2lkIGdsaXRjaGVzIGluIGJyb3dzZXIgcmVuZGVyaW5nIGFuZCBpbnRlcnByZXRhdGlvbiBvZiBmbGlwcGVkL3JvdGF0ZWQgM0QgbWF0cmljZXMuIEFuZCBkb24ndCBqdXN0IG11bHRpcGx5IHRoZSBudW1iZXIgYnkgcm5kLCBmbG9vciBpdCwgYW5kIHRoZW4gZGl2aWRlIGJ5IHJuZCBiZWNhdXNlIHRoZSBiaXR3aXNlIG9wZXJhdGlvbnMgbWF4IG91dCBhdCBhIDMyLWJpdCBzaWduZWQgaW50ZWdlciwgdGh1cyBpdCBjb3VsZCBnZXQgY2xpcHBlZCBhdCBhIHJlbGF0aXZlbHkgbG93IHZhbHVlIChsaWtlIDIyLDAwMC4wMDAwMCBmb3IgZXhhbXBsZSkuXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChtLmxlbmd0aCA9PT0gMTYpIHtcblx0XHRcdFx0XHRcdC8vd2UnbGwgb25seSBsb29rIGF0IHRoZXNlIHBvc2l0aW9uLXJlbGF0ZWQgNiB2YXJpYWJsZXMgZmlyc3QgYmVjYXVzZSBpZiB4L3kveiBhbGwgbWF0Y2gsIGl0J3MgcmVsYXRpdmVseSBzYWZlIHRvIGFzc3VtZSB3ZSBkb24ndCBuZWVkIHRvIHJlLXBhcnNlIGV2ZXJ5dGhpbmcgd2hpY2ggcmlza3MgbG9zaW5nIGltcG9ydGFudCByb3RhdGlvbmFsIGluZm9ybWF0aW9uIChsaWtlIHJvdGF0aW9uWDoxODAgcGx1cyByb3RhdGlvblk6MTgwIHdvdWxkIGxvb2sgdGhlIHNhbWUgYXMgcm90YXRpb246MTgwIC0gdGhlcmUncyBubyB3YXkgdG8ga25vdyBmb3Igc3VyZSB3aGljaCBkaXJlY3Rpb24gd2FzIHRha2VuIGJhc2VkIHNvbGVseSBvbiB0aGUgbWF0cml4M2QoKSB2YWx1ZXMpXG5cdFx0XHRcdFx0XHR2YXIgYTExID0gbVswXSwgYTIxID0gbVsxXSwgYTMxID0gbVsyXSwgYTQxID0gbVszXSxcblx0XHRcdFx0XHRcdFx0YTEyID0gbVs0XSwgYTIyID0gbVs1XSwgYTMyID0gbVs2XSwgYTQyID0gbVs3XSxcblx0XHRcdFx0XHRcdFx0YTEzID0gbVs4XSwgYTIzID0gbVs5XSwgYTMzID0gbVsxMF0sXG5cdFx0XHRcdFx0XHRcdGExNCA9IG1bMTJdLCBhMjQgPSBtWzEzXSwgYTM0ID0gbVsxNF0sXG5cdFx0XHRcdFx0XHRcdGE0MyA9IG1bMTFdLFxuXHRcdFx0XHRcdFx0XHRhbmdsZSA9IE1hdGguYXRhbjIoYTMyLCBhMzMpLFxuXHRcdFx0XHRcdFx0XHR0MSwgdDIsIHQzLCB0NCwgY29zLCBzaW47XG5cblx0XHRcdFx0XHRcdC8vd2UgbWFudWFsbHkgY29tcGVuc2F0ZSBmb3Igbm9uLXplcm8geiBjb21wb25lbnQgb2YgdHJhbnNmb3JtT3JpZ2luIHRvIHdvcmsgYXJvdW5kIGJ1Z3MgaW4gU2FmYXJpXG5cdFx0XHRcdFx0XHRpZiAodG0uek9yaWdpbikge1xuXHRcdFx0XHRcdFx0XHRhMzQgPSAtdG0uek9yaWdpbjtcblx0XHRcdFx0XHRcdFx0YTE0ID0gYTEzKmEzNC1tWzEyXTtcblx0XHRcdFx0XHRcdFx0YTI0ID0gYTIzKmEzNC1tWzEzXTtcblx0XHRcdFx0XHRcdFx0YTM0ID0gYTMzKmEzNCt0bS56T3JpZ2luLW1bMTRdO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0dG0ucm90YXRpb25YID0gYW5nbGUgKiBfUkFEMkRFRztcblx0XHRcdFx0XHRcdC8vcm90YXRpb25YXG5cdFx0XHRcdFx0XHRpZiAoYW5nbGUpIHtcblx0XHRcdFx0XHRcdFx0Y29zID0gTWF0aC5jb3MoLWFuZ2xlKTtcblx0XHRcdFx0XHRcdFx0c2luID0gTWF0aC5zaW4oLWFuZ2xlKTtcblx0XHRcdFx0XHRcdFx0dDEgPSBhMTIqY29zK2ExMypzaW47XG5cdFx0XHRcdFx0XHRcdHQyID0gYTIyKmNvcythMjMqc2luO1xuXHRcdFx0XHRcdFx0XHR0MyA9IGEzMipjb3MrYTMzKnNpbjtcblx0XHRcdFx0XHRcdFx0YTEzID0gYTEyKi1zaW4rYTEzKmNvcztcblx0XHRcdFx0XHRcdFx0YTIzID0gYTIyKi1zaW4rYTIzKmNvcztcblx0XHRcdFx0XHRcdFx0YTMzID0gYTMyKi1zaW4rYTMzKmNvcztcblx0XHRcdFx0XHRcdFx0YTQzID0gYTQyKi1zaW4rYTQzKmNvcztcblx0XHRcdFx0XHRcdFx0YTEyID0gdDE7XG5cdFx0XHRcdFx0XHRcdGEyMiA9IHQyO1xuXHRcdFx0XHRcdFx0XHRhMzIgPSB0Mztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC8vcm90YXRpb25ZXG5cdFx0XHRcdFx0XHRhbmdsZSA9IE1hdGguYXRhbjIoYTEzLCBhMzMpO1xuXHRcdFx0XHRcdFx0dG0ucm90YXRpb25ZID0gYW5nbGUgKiBfUkFEMkRFRztcblx0XHRcdFx0XHRcdGlmIChhbmdsZSkge1xuXHRcdFx0XHRcdFx0XHRjb3MgPSBNYXRoLmNvcygtYW5nbGUpO1xuXHRcdFx0XHRcdFx0XHRzaW4gPSBNYXRoLnNpbigtYW5nbGUpO1xuXHRcdFx0XHRcdFx0XHR0MSA9IGExMSpjb3MtYTEzKnNpbjtcblx0XHRcdFx0XHRcdFx0dDIgPSBhMjEqY29zLWEyMypzaW47XG5cdFx0XHRcdFx0XHRcdHQzID0gYTMxKmNvcy1hMzMqc2luO1xuXHRcdFx0XHRcdFx0XHRhMjMgPSBhMjEqc2luK2EyMypjb3M7XG5cdFx0XHRcdFx0XHRcdGEzMyA9IGEzMSpzaW4rYTMzKmNvcztcblx0XHRcdFx0XHRcdFx0YTQzID0gYTQxKnNpbithNDMqY29zO1xuXHRcdFx0XHRcdFx0XHRhMTEgPSB0MTtcblx0XHRcdFx0XHRcdFx0YTIxID0gdDI7XG5cdFx0XHRcdFx0XHRcdGEzMSA9IHQzO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Ly9yb3RhdGlvblpcblx0XHRcdFx0XHRcdGFuZ2xlID0gTWF0aC5hdGFuMihhMjEsIGExMSk7XG5cdFx0XHRcdFx0XHR0bS5yb3RhdGlvbiA9IGFuZ2xlICogX1JBRDJERUc7XG5cdFx0XHRcdFx0XHRpZiAoYW5nbGUpIHtcblx0XHRcdFx0XHRcdFx0Y29zID0gTWF0aC5jb3MoLWFuZ2xlKTtcblx0XHRcdFx0XHRcdFx0c2luID0gTWF0aC5zaW4oLWFuZ2xlKTtcblx0XHRcdFx0XHRcdFx0YTExID0gYTExKmNvcythMTIqc2luO1xuXHRcdFx0XHRcdFx0XHR0MiA9IGEyMSpjb3MrYTIyKnNpbjtcblx0XHRcdFx0XHRcdFx0YTIyID0gYTIxKi1zaW4rYTIyKmNvcztcblx0XHRcdFx0XHRcdFx0YTMyID0gYTMxKi1zaW4rYTMyKmNvcztcblx0XHRcdFx0XHRcdFx0YTIxID0gdDI7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGlmICh0bS5yb3RhdGlvblggJiYgTWF0aC5hYnModG0ucm90YXRpb25YKSArIE1hdGguYWJzKHRtLnJvdGF0aW9uKSA+IDM1OS45KSB7IC8vd2hlbiByb3RhdGlvblkgaXMgc2V0LCBpdCB3aWxsIG9mdGVuIGJlIHBhcnNlZCBhcyAxODAgZGVncmVlcyBkaWZmZXJlbnQgdGhhbiBpdCBzaG91bGQgYmUsIGFuZCByb3RhdGlvblggYW5kIHJvdGF0aW9uIGJvdGggYmVpbmcgMTgwIChpdCBsb29rcyB0aGUgc2FtZSksIHNvIHdlIGFkanVzdCBmb3IgdGhhdCBoZXJlLlxuXHRcdFx0XHRcdFx0XHR0bS5yb3RhdGlvblggPSB0bS5yb3RhdGlvbiA9IDA7XG5cdFx0XHRcdFx0XHRcdHRtLnJvdGF0aW9uWSArPSAxODA7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHRtLnNjYWxlWCA9ICgoTWF0aC5zcXJ0KGExMSAqIGExMSArIGEyMSAqIGEyMSkgKiBybmQgKyAwLjUpIHwgMCkgLyBybmQ7XG5cdFx0XHRcdFx0XHR0bS5zY2FsZVkgPSAoKE1hdGguc3FydChhMjIgKiBhMjIgKyBhMjMgKiBhMjMpICogcm5kICsgMC41KSB8IDApIC8gcm5kO1xuXHRcdFx0XHRcdFx0dG0uc2NhbGVaID0gKChNYXRoLnNxcnQoYTMyICogYTMyICsgYTMzICogYTMzKSAqIHJuZCArIDAuNSkgfCAwKSAvIHJuZDtcblx0XHRcdFx0XHRcdHRtLnNrZXdYID0gMDtcblx0XHRcdFx0XHRcdHRtLnBlcnNwZWN0aXZlID0gYTQzID8gMSAvICgoYTQzIDwgMCkgPyAtYTQzIDogYTQzKSA6IDA7XG5cdFx0XHRcdFx0XHR0bS54ID0gYTE0O1xuXHRcdFx0XHRcdFx0dG0ueSA9IGEyNDtcblx0XHRcdFx0XHRcdHRtLnogPSBhMzQ7XG5cdFx0XHRcdFx0XHRpZiAodG0uc3ZnKSB7XG5cdFx0XHRcdFx0XHRcdHRtLnggLT0gdG0ueE9yaWdpbiAtICh0bS54T3JpZ2luICogYTExIC0gdG0ueU9yaWdpbiAqIGExMik7XG5cdFx0XHRcdFx0XHRcdHRtLnkgLT0gdG0ueU9yaWdpbiAtICh0bS55T3JpZ2luICogYTIxIC0gdG0ueE9yaWdpbiAqIGEyMik7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR9IGVsc2UgaWYgKCghX3N1cHBvcnRzM0QgfHwgcGFyc2UgfHwgIW0ubGVuZ3RoIHx8IHRtLnggIT09IG1bNF0gfHwgdG0ueSAhPT0gbVs1XSB8fCAoIXRtLnJvdGF0aW9uWCAmJiAhdG0ucm90YXRpb25ZKSkgJiYgISh0bS54ICE9PSB1bmRlZmluZWQgJiYgX2dldFN0eWxlKHQsIFwiZGlzcGxheVwiLCBjcykgPT09IFwibm9uZVwiKSkgeyAvL3NvbWV0aW1lcyBhIDYtZWxlbWVudCBtYXRyaXggaXMgcmV0dXJuZWQgZXZlbiB3aGVuIHdlIHBlcmZvcm1lZCAzRCB0cmFuc2Zvcm1zLCBsaWtlIGlmIHJvdGF0aW9uWCBhbmQgcm90YXRpb25ZIGFyZSAxODAuIEluIGNhc2VzIGxpa2UgdGhpcywgd2Ugc3RpbGwgbmVlZCB0byBob25vciB0aGUgM0QgdHJhbnNmb3Jtcy4gSWYgd2UganVzdCByZWx5IG9uIHRoZSAyRCBpbmZvLCBpdCBjb3VsZCBhZmZlY3QgaG93IHRoZSBkYXRhIGlzIGludGVycHJldGVkLCBsaWtlIHNjYWxlWSBtaWdodCBnZXQgc2V0IHRvIC0xIG9yIHJvdGF0aW9uIGNvdWxkIGdldCBvZmZzZXQgYnkgMTgwIGRlZ3JlZXMuIEZvciBleGFtcGxlLCBkbyBhIFR3ZWVuTGl0ZS50byhlbGVtZW50LCAxLCB7Y3NzOntyb3RhdGlvblg6MTgwLCByb3RhdGlvblk6MTgwfX0pIGFuZCB0aGVuIGxhdGVyLCBUd2VlbkxpdGUudG8oZWxlbWVudCwgMSwge2Nzczp7cm90YXRpb25YOjB9fSkgYW5kIHdpdGhvdXQgdGhpcyBjb25kaXRpb25hbCBsb2dpYyBpbiBwbGFjZSwgaXQnZCBqdW1wIHRvIGEgc3RhdGUgb2YgYmVpbmcgdW5yb3RhdGVkIHdoZW4gdGhlIDJuZCB0d2VlbiBzdGFydHMuIFRoZW4gYWdhaW4sIHdlIG5lZWQgdG8gaG9ub3IgdGhlIGZhY3QgdGhhdCB0aGUgdXNlciBDT1VMRCBhbHRlciB0aGUgdHJhbnNmb3JtcyBvdXRzaWRlIG9mIENTU1BsdWdpbiwgbGlrZSBieSBtYW51YWxseSBhcHBseWluZyBuZXcgY3NzLCBzbyB3ZSB0cnkgdG8gc2Vuc2UgdGhhdCBieSBsb29raW5nIGF0IHggYW5kIHkgYmVjYXVzZSBpZiB0aG9zZSBjaGFuZ2VkLCB3ZSBrbm93IHRoZSBjaGFuZ2VzIHdlcmUgbWFkZSBvdXRzaWRlIENTU1BsdWdpbiBhbmQgd2UgZm9yY2UgYSByZWludGVycHJldGF0aW9uIG9mIHRoZSBtYXRyaXggdmFsdWVzLiBBbHNvLCBpbiBXZWJraXQgYnJvd3NlcnMsIGlmIHRoZSBlbGVtZW50J3MgXCJkaXNwbGF5XCIgaXMgXCJub25lXCIsIGl0cyBjYWxjdWxhdGVkIHN0eWxlIHZhbHVlIHdpbGwgYWx3YXlzIHJldHVybiBlbXB0eSwgc28gaWYgd2UndmUgYWxyZWFkeSByZWNvcmRlZCB0aGUgdmFsdWVzIGluIHRoZSBfZ3NUcmFuc2Zvcm0gb2JqZWN0LCB3ZSdsbCBqdXN0IHJlbHkgb24gdGhvc2UuXG5cdFx0XHRcdFx0XHR2YXIgayA9IChtLmxlbmd0aCA+PSA2KSxcblx0XHRcdFx0XHRcdFx0YSA9IGsgPyBtWzBdIDogMSxcblx0XHRcdFx0XHRcdFx0YiA9IG1bMV0gfHwgMCxcblx0XHRcdFx0XHRcdFx0YyA9IG1bMl0gfHwgMCxcblx0XHRcdFx0XHRcdFx0ZCA9IGsgPyBtWzNdIDogMTtcblx0XHRcdFx0XHRcdHRtLnggPSBtWzRdIHx8IDA7XG5cdFx0XHRcdFx0XHR0bS55ID0gbVs1XSB8fCAwO1xuXHRcdFx0XHRcdFx0c2NhbGVYID0gTWF0aC5zcXJ0KGEgKiBhICsgYiAqIGIpO1xuXHRcdFx0XHRcdFx0c2NhbGVZID0gTWF0aC5zcXJ0KGQgKiBkICsgYyAqIGMpO1xuXHRcdFx0XHRcdFx0cm90YXRpb24gPSAoYSB8fCBiKSA/IE1hdGguYXRhbjIoYiwgYSkgKiBfUkFEMkRFRyA6IHRtLnJvdGF0aW9uIHx8IDA7IC8vbm90ZTogaWYgc2NhbGVYIGlzIDAsIHdlIGNhbm5vdCBhY2N1cmF0ZWx5IG1lYXN1cmUgcm90YXRpb24uIFNhbWUgZm9yIHNrZXdYIHdpdGggYSBzY2FsZVkgb2YgMC4gVGhlcmVmb3JlLCB3ZSBkZWZhdWx0IHRvIHRoZSBwcmV2aW91c2x5IHJlY29yZGVkIHZhbHVlIChvciB6ZXJvIGlmIHRoYXQgZG9lc24ndCBleGlzdCkuXG5cdFx0XHRcdFx0XHRza2V3WCA9IChjIHx8IGQpID8gTWF0aC5hdGFuMihjLCBkKSAqIF9SQUQyREVHICsgcm90YXRpb24gOiB0bS5za2V3WCB8fCAwO1xuXHRcdFx0XHRcdFx0aWYgKE1hdGguYWJzKHNrZXdYKSA+IDkwICYmIE1hdGguYWJzKHNrZXdYKSA8IDI3MCkge1xuXHRcdFx0XHRcdFx0XHRpZiAoaW52WCkge1xuXHRcdFx0XHRcdFx0XHRcdHNjYWxlWCAqPSAtMTtcblx0XHRcdFx0XHRcdFx0XHRza2V3WCArPSAocm90YXRpb24gPD0gMCkgPyAxODAgOiAtMTgwO1xuXHRcdFx0XHRcdFx0XHRcdHJvdGF0aW9uICs9IChyb3RhdGlvbiA8PSAwKSA/IDE4MCA6IC0xODA7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0c2NhbGVZICo9IC0xO1xuXHRcdFx0XHRcdFx0XHRcdHNrZXdYICs9IChza2V3WCA8PSAwKSA/IDE4MCA6IC0xODA7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHRtLnNjYWxlWCA9IHNjYWxlWDtcblx0XHRcdFx0XHRcdHRtLnNjYWxlWSA9IHNjYWxlWTtcblx0XHRcdFx0XHRcdHRtLnJvdGF0aW9uID0gcm90YXRpb247XG5cdFx0XHRcdFx0XHR0bS5za2V3WCA9IHNrZXdYO1xuXHRcdFx0XHRcdFx0aWYgKF9zdXBwb3J0czNEKSB7XG5cdFx0XHRcdFx0XHRcdHRtLnJvdGF0aW9uWCA9IHRtLnJvdGF0aW9uWSA9IHRtLnogPSAwO1xuXHRcdFx0XHRcdFx0XHR0bS5wZXJzcGVjdGl2ZSA9IGRlZmF1bHRUcmFuc2Zvcm1QZXJzcGVjdGl2ZTtcblx0XHRcdFx0XHRcdFx0dG0uc2NhbGVaID0gMTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmICh0bS5zdmcpIHtcblx0XHRcdFx0XHRcdFx0dG0ueCAtPSB0bS54T3JpZ2luIC0gKHRtLnhPcmlnaW4gKiBhIC0gdG0ueU9yaWdpbiAqIGIpO1xuXHRcdFx0XHRcdFx0XHR0bS55IC09IHRtLnlPcmlnaW4gLSAodG0ueU9yaWdpbiAqIGQgLSB0bS54T3JpZ2luICogYyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRtLnpPcmlnaW4gPSB6T3JpZ2luO1xuXHRcdFx0XHRcdC8vc29tZSBicm93c2VycyBoYXZlIGEgaGFyZCB0aW1lIHdpdGggdmVyeSBzbWFsbCB2YWx1ZXMgbGlrZSAyLjQ0OTI5MzU5ODI5NDcwNjRlLTE2IChub3RpY2UgdGhlIFwiZS1cIiB0b3dhcmRzIHRoZSBlbmQpIGFuZCB3b3VsZCByZW5kZXIgdGhlIG9iamVjdCBzbGlnaHRseSBvZmYuIFNvIHdlIHJvdW5kIHRvIDAgaW4gdGhlc2UgY2FzZXMuIFRoZSBjb25kaXRpb25hbCBsb2dpYyBoZXJlIGlzIGZhc3RlciB0aGFuIGNhbGxpbmcgTWF0aC5hYnMoKS4gQWxzbywgYnJvd3NlcnMgdGVuZCB0byByZW5kZXIgYSBTTElHSFRMWSByb3RhdGVkIG9iamVjdCBpbiBhIGZ1enp5IHdheSwgc28gd2UgbmVlZCB0byBzbmFwIHRvIGV4YWN0bHkgMCB3aGVuIGFwcHJvcHJpYXRlLlxuXHRcdFx0XHRcdGZvciAoaSBpbiB0bSkge1xuXHRcdFx0XHRcdFx0aWYgKHRtW2ldIDwgbWluKSBpZiAodG1baV0gPiAtbWluKSB7XG5cdFx0XHRcdFx0XHRcdHRtW2ldID0gMDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly9ERUJVRzogX2xvZyhcInBhcnNlZCByb3RhdGlvbiBvZiBcIiArIHQuZ2V0QXR0cmlidXRlKFwiaWRcIikrXCI6IFwiKyh0bS5yb3RhdGlvblgpK1wiLCBcIisodG0ucm90YXRpb25ZKStcIiwgXCIrKHRtLnJvdGF0aW9uKStcIiwgc2NhbGU6IFwiK3RtLnNjYWxlWCtcIiwgXCIrdG0uc2NhbGVZK1wiLCBcIit0bS5zY2FsZVorXCIsIHBvc2l0aW9uOiBcIit0bS54K1wiLCBcIit0bS55K1wiLCBcIit0bS56K1wiLCBwZXJzcGVjdGl2ZTogXCIrdG0ucGVyc3BlY3RpdmUpO1xuXHRcdFx0XHRpZiAocmVjKSB7XG5cdFx0XHRcdFx0dC5fZ3NUcmFuc2Zvcm0gPSB0bTsgLy9yZWNvcmQgdG8gdGhlIG9iamVjdCdzIF9nc1RyYW5zZm9ybSB3aGljaCB3ZSB1c2Ugc28gdGhhdCB0d2VlbnMgY2FuIGNvbnRyb2wgaW5kaXZpZHVhbCBwcm9wZXJ0aWVzIGluZGVwZW5kZW50bHkgKHdlIG5lZWQgYWxsIHRoZSBwcm9wZXJ0aWVzIHRvIGFjY3VyYXRlbHkgcmVjb21wb3NlIHRoZSBtYXRyaXggaW4gdGhlIHNldFJhdGlvKCkgbWV0aG9kKVxuXHRcdFx0XHRcdGlmICh0bS5zdmcpIHsgLy9pZiB3ZSdyZSBzdXBwb3NlZCB0byBhcHBseSB0cmFuc2Zvcm1zIHRvIHRoZSBTVkcgZWxlbWVudCdzIFwidHJhbnNmb3JtXCIgYXR0cmlidXRlLCBtYWtlIHN1cmUgdGhlcmUgYXJlbid0IGFueSBDU1MgdHJhbnNmb3JtcyBhcHBsaWVkIG9yIHRoZXknbGwgb3ZlcnJpZGUgdGhlIGF0dHJpYnV0ZSBvbmVzLiBBbHNvIGNsZWFyIHRoZSB0cmFuc2Zvcm0gYXR0cmlidXRlIGlmIHdlJ3JlIHVzaW5nIENTUywganVzdCB0byBiZSBjbGVhbi5cblx0XHRcdFx0XHRcdGlmIChfdXNlU1ZHVHJhbnNmb3JtQXR0ciAmJiB0LnN0eWxlW190cmFuc2Zvcm1Qcm9wXSkge1xuXHRcdFx0XHRcdFx0XHRfcmVtb3ZlUHJvcCh0LnN0eWxlLCBfdHJhbnNmb3JtUHJvcCk7XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKCFfdXNlU1ZHVHJhbnNmb3JtQXR0ciAmJiB0LmdldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiKSkge1xuXHRcdFx0XHRcdFx0XHR0LnJlbW92ZUF0dHJpYnV0ZShcInRyYW5zZm9ybVwiKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHRtO1xuXHRcdFx0fSxcblxuXHRcdFx0Ly9mb3Igc2V0dGluZyAyRCB0cmFuc2Zvcm1zIGluIElFNiwgSUU3LCBhbmQgSUU4IChtdXN0IHVzZSBhIFwiZmlsdGVyXCIgdG8gZW11bGF0ZSB0aGUgYmVoYXZpb3Igb2YgbW9kZXJuIGRheSBicm93c2VyIHRyYW5zZm9ybXMpXG5cdFx0XHRfc2V0SUVUcmFuc2Zvcm1SYXRpbyA9IGZ1bmN0aW9uKHYpIHtcblx0XHRcdFx0dmFyIHQgPSB0aGlzLmRhdGEsIC8vcmVmZXJzIHRvIHRoZSBlbGVtZW50J3MgX2dzVHJhbnNmb3JtIG9iamVjdFxuXHRcdFx0XHRcdGFuZyA9IC10LnJvdGF0aW9uICogX0RFRzJSQUQsXG5cdFx0XHRcdFx0c2tldyA9IGFuZyArIHQuc2tld1ggKiBfREVHMlJBRCxcblx0XHRcdFx0XHRybmQgPSAxMDAwMDAsXG5cdFx0XHRcdFx0YSA9ICgoTWF0aC5jb3MoYW5nKSAqIHQuc2NhbGVYICogcm5kKSB8IDApIC8gcm5kLFxuXHRcdFx0XHRcdGIgPSAoKE1hdGguc2luKGFuZykgKiB0LnNjYWxlWCAqIHJuZCkgfCAwKSAvIHJuZCxcblx0XHRcdFx0XHRjID0gKChNYXRoLnNpbihza2V3KSAqIC10LnNjYWxlWSAqIHJuZCkgfCAwKSAvIHJuZCxcblx0XHRcdFx0XHRkID0gKChNYXRoLmNvcyhza2V3KSAqIHQuc2NhbGVZICogcm5kKSB8IDApIC8gcm5kLFxuXHRcdFx0XHRcdHN0eWxlID0gdGhpcy50LnN0eWxlLFxuXHRcdFx0XHRcdGNzID0gdGhpcy50LmN1cnJlbnRTdHlsZSxcblx0XHRcdFx0XHRmaWx0ZXJzLCB2YWw7XG5cdFx0XHRcdGlmICghY3MpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0dmFsID0gYjsgLy9qdXN0IGZvciBzd2FwcGluZyB0aGUgdmFyaWFibGVzIGFuIGludmVydGluZyB0aGVtIChyZXVzZWQgXCJ2YWxcIiB0byBhdm9pZCBjcmVhdGluZyBhbm90aGVyIHZhcmlhYmxlIGluIG1lbW9yeSkuIElFJ3MgZmlsdGVyIG1hdHJpeCB1c2VzIGEgbm9uLXN0YW5kYXJkIG1hdHJpeCBjb25maWd1cmF0aW9uIChhbmdsZSBnb2VzIHRoZSBvcHBvc2l0ZSB3YXksIGFuZCBiIGFuZCBjIGFyZSByZXZlcnNlZCBhbmQgaW52ZXJ0ZWQpXG5cdFx0XHRcdGIgPSAtYztcblx0XHRcdFx0YyA9IC12YWw7XG5cdFx0XHRcdGZpbHRlcnMgPSBjcy5maWx0ZXI7XG5cdFx0XHRcdHN0eWxlLmZpbHRlciA9IFwiXCI7IC8vcmVtb3ZlIGZpbHRlcnMgc28gdGhhdCB3ZSBjYW4gYWNjdXJhdGVseSBtZWFzdXJlIG9mZnNldFdpZHRoL29mZnNldEhlaWdodFxuXHRcdFx0XHR2YXIgdyA9IHRoaXMudC5vZmZzZXRXaWR0aCxcblx0XHRcdFx0XHRoID0gdGhpcy50Lm9mZnNldEhlaWdodCxcblx0XHRcdFx0XHRjbGlwID0gKGNzLnBvc2l0aW9uICE9PSBcImFic29sdXRlXCIpLFxuXHRcdFx0XHRcdG0gPSBcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5NYXRyaXgoTTExPVwiICsgYSArIFwiLCBNMTI9XCIgKyBiICsgXCIsIE0yMT1cIiArIGMgKyBcIiwgTTIyPVwiICsgZCxcblx0XHRcdFx0XHRveCA9IHQueCArICh3ICogdC54UGVyY2VudCAvIDEwMCksXG5cdFx0XHRcdFx0b3kgPSB0LnkgKyAoaCAqIHQueVBlcmNlbnQgLyAxMDApLFxuXHRcdFx0XHRcdGR4LCBkeTtcblxuXHRcdFx0XHQvL2lmIHRyYW5zZm9ybU9yaWdpbiBpcyBiZWluZyB1c2VkLCBhZGp1c3QgdGhlIG9mZnNldCB4IGFuZCB5XG5cdFx0XHRcdGlmICh0Lm94ICE9IG51bGwpIHtcblx0XHRcdFx0XHRkeCA9ICgodC5veHApID8gdyAqIHQub3ggKiAwLjAxIDogdC5veCkgLSB3IC8gMjtcblx0XHRcdFx0XHRkeSA9ICgodC5veXApID8gaCAqIHQub3kgKiAwLjAxIDogdC5veSkgLSBoIC8gMjtcblx0XHRcdFx0XHRveCArPSBkeCAtIChkeCAqIGEgKyBkeSAqIGIpO1xuXHRcdFx0XHRcdG95ICs9IGR5IC0gKGR4ICogYyArIGR5ICogZCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoIWNsaXApIHtcblx0XHRcdFx0XHRtICs9IFwiLCBzaXppbmdNZXRob2Q9J2F1dG8gZXhwYW5kJylcIjtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRkeCA9ICh3IC8gMik7XG5cdFx0XHRcdFx0ZHkgPSAoaCAvIDIpO1xuXHRcdFx0XHRcdC8vdHJhbnNsYXRlIHRvIGVuc3VyZSB0aGF0IHRyYW5zZm9ybWF0aW9ucyBvY2N1ciBhcm91bmQgdGhlIGNvcnJlY3Qgb3JpZ2luIChkZWZhdWx0IGlzIGNlbnRlcikuXG5cdFx0XHRcdFx0bSArPSBcIiwgRHg9XCIgKyAoZHggLSAoZHggKiBhICsgZHkgKiBiKSArIG94KSArIFwiLCBEeT1cIiArIChkeSAtIChkeCAqIGMgKyBkeSAqIGQpICsgb3kpICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGZpbHRlcnMuaW5kZXhPZihcIkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0Lk1hdHJpeChcIikgIT09IC0xKSB7XG5cdFx0XHRcdFx0c3R5bGUuZmlsdGVyID0gZmlsdGVycy5yZXBsYWNlKF9pZVNldE1hdHJpeEV4cCwgbSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0c3R5bGUuZmlsdGVyID0gbSArIFwiIFwiICsgZmlsdGVyczsgLy93ZSBtdXN0IGFsd2F5cyBwdXQgdGhlIHRyYW5zZm9ybS9tYXRyaXggRklSU1QgKGJlZm9yZSBhbHBoYShvcGFjaXR5PXh4KSkgdG8gYXZvaWQgYW4gSUUgYnVnIHRoYXQgc2xpY2VzIHBhcnQgb2YgdGhlIG9iamVjdCB3aGVuIHJvdGF0aW9uIGlzIGFwcGxpZWQgd2l0aCBhbHBoYS5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vYXQgdGhlIGVuZCBvciBiZWdpbm5pbmcgb2YgdGhlIHR3ZWVuLCBpZiB0aGUgbWF0cml4IGlzIG5vcm1hbCAoMSwgMCwgMCwgMSkgYW5kIG9wYWNpdHkgaXMgMTAwIChvciBkb2Vzbid0IGV4aXN0KSwgcmVtb3ZlIHRoZSBmaWx0ZXIgdG8gaW1wcm92ZSBicm93c2VyIHBlcmZvcm1hbmNlLlxuXHRcdFx0XHRpZiAodiA9PT0gMCB8fCB2ID09PSAxKSBpZiAoYSA9PT0gMSkgaWYgKGIgPT09IDApIGlmIChjID09PSAwKSBpZiAoZCA9PT0gMSkgaWYgKCFjbGlwIHx8IG0uaW5kZXhPZihcIkR4PTAsIER5PTBcIikgIT09IC0xKSBpZiAoIV9vcGFjaXR5RXhwLnRlc3QoZmlsdGVycykgfHwgcGFyc2VGbG9hdChSZWdFeHAuJDEpID09PSAxMDApIGlmIChmaWx0ZXJzLmluZGV4T2YoXCJncmFkaWVudChcIiAmJiBmaWx0ZXJzLmluZGV4T2YoXCJBbHBoYVwiKSkgPT09IC0xKSB7XG5cdFx0XHRcdFx0c3R5bGUucmVtb3ZlQXR0cmlidXRlKFwiZmlsdGVyXCIpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly93ZSBtdXN0IHNldCB0aGUgbWFyZ2lucyBBRlRFUiBhcHBseWluZyB0aGUgZmlsdGVyIGluIG9yZGVyIHRvIGF2b2lkIHNvbWUgYnVncyBpbiBJRTggdGhhdCBjb3VsZCAoaW4gcmFyZSBzY2VuYXJpb3MpIGNhdXNlIHRoZW0gdG8gYmUgaWdub3JlZCBpbnRlcm1pdHRlbnRseSAodmlicmF0aW9uKS5cblx0XHRcdFx0aWYgKCFjbGlwKSB7XG5cdFx0XHRcdFx0dmFyIG11bHQgPSAoX2llVmVycyA8IDgpID8gMSA6IC0xLCAvL2luIEludGVybmV0IEV4cGxvcmVyIDcgYW5kIGJlZm9yZSwgdGhlIGJveCBtb2RlbCBpcyBicm9rZW4sIGNhdXNpbmcgdGhlIGJyb3dzZXIgdG8gdHJlYXQgdGhlIHdpZHRoL2hlaWdodCBvZiB0aGUgYWN0dWFsIHJvdGF0ZWQgZmlsdGVyZWQgaW1hZ2UgYXMgdGhlIHdpZHRoL2hlaWdodCBvZiB0aGUgYm94IGl0c2VsZiwgYnV0IE1pY3Jvc29mdCBjb3JyZWN0ZWQgdGhhdCBpbiBJRTguIFdlIG11c3QgdXNlIGEgbmVnYXRpdmUgb2Zmc2V0IGluIElFOCBvbiB0aGUgcmlnaHQvYm90dG9tXG5cdFx0XHRcdFx0XHRtYXJnLCBwcm9wLCBkaWY7XG5cdFx0XHRcdFx0ZHggPSB0LmllT2Zmc2V0WCB8fCAwO1xuXHRcdFx0XHRcdGR5ID0gdC5pZU9mZnNldFkgfHwgMDtcblx0XHRcdFx0XHR0LmllT2Zmc2V0WCA9IE1hdGgucm91bmQoKHcgLSAoKGEgPCAwID8gLWEgOiBhKSAqIHcgKyAoYiA8IDAgPyAtYiA6IGIpICogaCkpIC8gMiArIG94KTtcblx0XHRcdFx0XHR0LmllT2Zmc2V0WSA9IE1hdGgucm91bmQoKGggLSAoKGQgPCAwID8gLWQgOiBkKSAqIGggKyAoYyA8IDAgPyAtYyA6IGMpICogdykpIC8gMiArIG95KTtcblx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgNDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRwcm9wID0gX21hcmdpbnNbaV07XG5cdFx0XHRcdFx0XHRtYXJnID0gY3NbcHJvcF07XG5cdFx0XHRcdFx0XHQvL3dlIG5lZWQgdG8gZ2V0IHRoZSBjdXJyZW50IG1hcmdpbiBpbiBjYXNlIGl0IGlzIGJlaW5nIHR3ZWVuZWQgc2VwYXJhdGVseSAod2Ugd2FudCB0byByZXNwZWN0IHRoYXQgdHdlZW4ncyBjaGFuZ2VzKVxuXHRcdFx0XHRcdFx0dmFsID0gKG1hcmcuaW5kZXhPZihcInB4XCIpICE9PSAtMSkgPyBwYXJzZUZsb2F0KG1hcmcpIDogX2NvbnZlcnRUb1BpeGVscyh0aGlzLnQsIHByb3AsIHBhcnNlRmxvYXQobWFyZyksIG1hcmcucmVwbGFjZShfc3VmZml4RXhwLCBcIlwiKSkgfHwgMDtcblx0XHRcdFx0XHRcdGlmICh2YWwgIT09IHRbcHJvcF0pIHtcblx0XHRcdFx0XHRcdFx0ZGlmID0gKGkgPCAyKSA/IC10LmllT2Zmc2V0WCA6IC10LmllT2Zmc2V0WTsgLy9pZiBhbm90aGVyIHR3ZWVuIGlzIGNvbnRyb2xsaW5nIGEgbWFyZ2luLCB3ZSBjYW5ub3Qgb25seSBhcHBseSB0aGUgZGlmZmVyZW5jZSBpbiB0aGUgaWVPZmZzZXRzLCBzbyB3ZSBlc3NlbnRpYWxseSB6ZXJvLW91dCB0aGUgZHggYW5kIGR5IGhlcmUgaW4gdGhhdCBjYXNlLiBXZSByZWNvcmQgdGhlIG1hcmdpbihzKSBsYXRlciBzbyB0aGF0IHdlIGNhbiBrZWVwIGNvbXBhcmluZyB0aGVtLCBtYWtpbmcgdGhpcyBjb2RlIHZlcnkgZmxleGlibGUuXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRkaWYgPSAoaSA8IDIpID8gZHggLSB0LmllT2Zmc2V0WCA6IGR5IC0gdC5pZU9mZnNldFk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRzdHlsZVtwcm9wXSA9ICh0W3Byb3BdID0gTWF0aC5yb3VuZCggdmFsIC0gZGlmICogKChpID09PSAwIHx8IGkgPT09IDIpID8gMSA6IG11bHQpICkpICsgXCJweFwiO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0LyogdHJhbnNsYXRlcyBhIHN1cGVyIHNtYWxsIGRlY2ltYWwgdG8gYSBzdHJpbmcgV0lUSE9VVCBzY2llbnRpZmljIG5vdGF0aW9uXG5cdFx0XHRfc2FmZURlY2ltYWwgPSBmdW5jdGlvbihuKSB7XG5cdFx0XHRcdHZhciBzID0gKG4gPCAwID8gLW4gOiBuKSArIFwiXCIsXG5cdFx0XHRcdFx0YSA9IHMuc3BsaXQoXCJlLVwiKTtcblx0XHRcdFx0cmV0dXJuIChuIDwgMCA/IFwiLTAuXCIgOiBcIjAuXCIpICsgbmV3IEFycmF5KHBhcnNlSW50KGFbMV0sIDEwKSB8fCAwKS5qb2luKFwiMFwiKSArIGFbMF0uc3BsaXQoXCIuXCIpLmpvaW4oXCJcIik7XG5cdFx0XHR9LFxuXHRcdFx0Ki9cblxuXHRcdFx0X3NldFRyYW5zZm9ybVJhdGlvID0gX2ludGVybmFscy5zZXQzRFRyYW5zZm9ybVJhdGlvID0gX2ludGVybmFscy5zZXRUcmFuc2Zvcm1SYXRpbyA9IGZ1bmN0aW9uKHYpIHtcblx0XHRcdFx0dmFyIHQgPSB0aGlzLmRhdGEsIC8vcmVmZXJzIHRvIHRoZSBlbGVtZW50J3MgX2dzVHJhbnNmb3JtIG9iamVjdFxuXHRcdFx0XHRcdHN0eWxlID0gdGhpcy50LnN0eWxlLFxuXHRcdFx0XHRcdGFuZ2xlID0gdC5yb3RhdGlvbixcblx0XHRcdFx0XHRyb3RhdGlvblggPSB0LnJvdGF0aW9uWCxcblx0XHRcdFx0XHRyb3RhdGlvblkgPSB0LnJvdGF0aW9uWSxcblx0XHRcdFx0XHRzeCA9IHQuc2NhbGVYLFxuXHRcdFx0XHRcdHN5ID0gdC5zY2FsZVksXG5cdFx0XHRcdFx0c3ogPSB0LnNjYWxlWixcblx0XHRcdFx0XHR4ID0gdC54LFxuXHRcdFx0XHRcdHkgPSB0LnksXG5cdFx0XHRcdFx0eiA9IHQueixcblx0XHRcdFx0XHRpc1NWRyA9IHQuc3ZnLFxuXHRcdFx0XHRcdHBlcnNwZWN0aXZlID0gdC5wZXJzcGVjdGl2ZSxcblx0XHRcdFx0XHRmb3JjZTNEID0gdC5mb3JjZTNELFxuXHRcdFx0XHRcdGExMSwgYTEyLCBhMTMsIGEyMSwgYTIyLCBhMjMsIGEzMSwgYTMyLCBhMzMsIGE0MSwgYTQyLCBhNDMsXG5cdFx0XHRcdFx0ek9yaWdpbiwgbWluLCBjb3MsIHNpbiwgdDEsIHQyLCB0cmFuc2Zvcm0sIGNvbW1hLCB6ZXJvLCBza2V3LCBybmQ7XG5cblx0XHRcdFx0Ly9jaGVjayB0byBzZWUgaWYgd2Ugc2hvdWxkIHJlbmRlciBhcyAyRCAoYW5kIFNWR3MgbXVzdCB1c2UgMkQgd2hlbiBfdXNlU1ZHVHJhbnNmb3JtQXR0ciBpcyB0cnVlKVxuXHRcdFx0XHRpZiAoKCgoKHYgPT09IDEgfHwgdiA9PT0gMCkgJiYgZm9yY2UzRCA9PT0gXCJhdXRvXCIgJiYgKHRoaXMudHdlZW4uX3RvdGFsVGltZSA9PT0gdGhpcy50d2Vlbi5fdG90YWxEdXJhdGlvbiB8fCAhdGhpcy50d2Vlbi5fdG90YWxUaW1lKSkgfHwgIWZvcmNlM0QpICYmICF6ICYmICFwZXJzcGVjdGl2ZSAmJiAhcm90YXRpb25ZICYmICFyb3RhdGlvblgpIHx8IChfdXNlU1ZHVHJhbnNmb3JtQXR0ciAmJiBpc1NWRykgfHwgIV9zdXBwb3J0czNEKSB7IC8vb24gdGhlIGZpbmFsIHJlbmRlciAod2hpY2ggY291bGQgYmUgMCBmb3IgYSBmcm9tIHR3ZWVuKSwgaWYgdGhlcmUgYXJlIG5vIDNEIGFzcGVjdHMsIHJlbmRlciBpbiAyRCB0byBmcmVlIHVwIG1lbW9yeSBhbmQgaW1wcm92ZSBwZXJmb3JtYW5jZSBlc3BlY2lhbGx5IG9uIG1vYmlsZSBkZXZpY2VzLiBDaGVjayB0aGUgdHdlZW4ncyB0b3RhbFRpbWUvdG90YWxEdXJhdGlvbiB0b28gaW4gb3JkZXIgdG8gbWFrZSBzdXJlIGl0IGRvZXNuJ3QgaGFwcGVuIGJldHdlZW4gcmVwZWF0cyBpZiBpdCdzIGEgcmVwZWF0aW5nIHR3ZWVuLlxuXG5cdFx0XHRcdFx0Ly8yRFxuXHRcdFx0XHRcdGlmIChhbmdsZSB8fCB0LnNrZXdYIHx8IGlzU1ZHKSB7XG5cdFx0XHRcdFx0XHRhbmdsZSAqPSBfREVHMlJBRDtcblx0XHRcdFx0XHRcdHNrZXcgPSB0LnNrZXdYICogX0RFRzJSQUQ7XG5cdFx0XHRcdFx0XHRybmQgPSAxMDAwMDA7XG5cdFx0XHRcdFx0XHRhMTEgPSBNYXRoLmNvcyhhbmdsZSkgKiBzeDtcblx0XHRcdFx0XHRcdGEyMSA9IE1hdGguc2luKGFuZ2xlKSAqIHN4O1xuXHRcdFx0XHRcdFx0YTEyID0gTWF0aC5zaW4oYW5nbGUgLSBza2V3KSAqIC1zeTtcblx0XHRcdFx0XHRcdGEyMiA9IE1hdGguY29zKGFuZ2xlIC0gc2tldykgKiBzeTtcblx0XHRcdFx0XHRcdGlmIChza2V3ICYmIHQuc2tld1R5cGUgPT09IFwic2ltcGxlXCIpIHsgLy9ieSBkZWZhdWx0LCB3ZSBjb21wZW5zYXRlIHNrZXdpbmcgb24gdGhlIG90aGVyIGF4aXMgdG8gbWFrZSBpdCBsb29rIG1vcmUgbmF0dXJhbCwgYnV0IHlvdSBjYW4gc2V0IHRoZSBza2V3VHlwZSB0byBcInNpbXBsZVwiIHRvIHVzZSB0aGUgdW5jb21wZW5zYXRlZCBza2V3aW5nIHRoYXQgQ1NTIGRvZXNcblx0XHRcdFx0XHRcdFx0dDEgPSBNYXRoLnRhbihza2V3KTtcblx0XHRcdFx0XHRcdFx0dDEgPSBNYXRoLnNxcnQoMSArIHQxICogdDEpO1xuXHRcdFx0XHRcdFx0XHRhMTIgKj0gdDE7XG5cdFx0XHRcdFx0XHRcdGEyMiAqPSB0MTtcblx0XHRcdFx0XHRcdFx0aWYgKHQuc2tld1kpIHtcblx0XHRcdFx0XHRcdFx0XHRhMTEgKj0gdDE7XG5cdFx0XHRcdFx0XHRcdFx0YTIxICo9IHQxO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAoaXNTVkcpIHtcblx0XHRcdFx0XHRcdFx0eCArPSB0LnhPcmlnaW4gLSAodC54T3JpZ2luICogYTExICsgdC55T3JpZ2luICogYTEyKTtcblx0XHRcdFx0XHRcdFx0eSArPSB0LnlPcmlnaW4gLSAodC54T3JpZ2luICogYTIxICsgdC55T3JpZ2luICogYTIyKTtcblx0XHRcdFx0XHRcdFx0bWluID0gMC4wMDAwMDE7XG5cdFx0XHRcdFx0XHRcdGlmICh4IDwgbWluKSBpZiAoeCA+IC1taW4pIHtcblx0XHRcdFx0XHRcdFx0XHR4ID0gMDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRpZiAoeSA8IG1pbikgaWYgKHkgPiAtbWluKSB7XG5cdFx0XHRcdFx0XHRcdFx0eSA9IDA7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHRyYW5zZm9ybSA9ICgoKGExMSAqIHJuZCkgfCAwKSAvIHJuZCkgKyBcIixcIiArICgoKGEyMSAqIHJuZCkgfCAwKSAvIHJuZCkgKyBcIixcIiArICgoKGExMiAqIHJuZCkgfCAwKSAvIHJuZCkgKyBcIixcIiArICgoKGEyMiAqIHJuZCkgfCAwKSAvIHJuZCkgKyBcIixcIiArIHggKyBcIixcIiArIHkgKyBcIilcIjtcblx0XHRcdFx0XHRcdGlmIChpc1NWRyAmJiBfdXNlU1ZHVHJhbnNmb3JtQXR0cikge1xuXHRcdFx0XHRcdFx0XHR0aGlzLnQuc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIFwibWF0cml4KFwiICsgdHJhbnNmb3JtKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdC8vc29tZSBicm93c2VycyBoYXZlIGEgaGFyZCB0aW1lIHdpdGggdmVyeSBzbWFsbCB2YWx1ZXMgbGlrZSAyLjQ0OTI5MzU5ODI5NDcwNjRlLTE2IChub3RpY2UgdGhlIFwiZS1cIiB0b3dhcmRzIHRoZSBlbmQpIGFuZCB3b3VsZCByZW5kZXIgdGhlIG9iamVjdCBzbGlnaHRseSBvZmYuIFNvIHdlIHJvdW5kIHRvIDUgZGVjaW1hbCBwbGFjZXMuXG5cdFx0XHRcdFx0XHRcdHN0eWxlW190cmFuc2Zvcm1Qcm9wXSA9ICgodC54UGVyY2VudCB8fCB0LnlQZXJjZW50KSA/IFwidHJhbnNsYXRlKFwiICsgdC54UGVyY2VudCArIFwiJSxcIiArIHQueVBlcmNlbnQgKyBcIiUpIG1hdHJpeChcIiA6IFwibWF0cml4KFwiKSArIHRyYW5zZm9ybTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0c3R5bGVbX3RyYW5zZm9ybVByb3BdID0gKCh0LnhQZXJjZW50IHx8IHQueVBlcmNlbnQpID8gXCJ0cmFuc2xhdGUoXCIgKyB0LnhQZXJjZW50ICsgXCIlLFwiICsgdC55UGVyY2VudCArIFwiJSkgbWF0cml4KFwiIDogXCJtYXRyaXgoXCIpICsgc3ggKyBcIiwwLDAsXCIgKyBzeSArIFwiLFwiICsgeCArIFwiLFwiICsgeSArIFwiKVwiO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoX2lzRmlyZWZveCkgeyAvL0ZpcmVmb3ggaGFzIGEgYnVnIChhdCBsZWFzdCBpbiB2MjUpIHRoYXQgY2F1c2VzIGl0IHRvIHJlbmRlciB0aGUgdHJhbnNwYXJlbnQgcGFydCBvZiAzMi1iaXQgUE5HIGltYWdlcyBhcyBibGFjayB3aGVuIGRpc3BsYXllZCBpbnNpZGUgYW4gaWZyYW1lIGFuZCB0aGUgM0Qgc2NhbGUgaXMgdmVyeSBzbWFsbCBhbmQgZG9lc24ndCBjaGFuZ2Ugc3VmZmljaWVudGx5IGVub3VnaCBiZXR3ZWVuIHJlbmRlcnMgKGxpa2UgaWYgeW91IHVzZSBhIFBvd2VyNC5lYXNlSW5PdXQgdG8gc2NhbGUgZnJvbSAwIHRvIDEgd2hlcmUgdGhlIGJlZ2lubmluZyB2YWx1ZXMgb25seSBjaGFuZ2UgYSB0aW55IGFtb3VudCB0byBiZWdpbiB0aGUgdHdlZW4gYmVmb3JlIGFjY2VsZXJhdGluZykuIEluIHRoaXMgY2FzZSwgd2UgZm9yY2UgdGhlIHNjYWxlIHRvIGJlIDAuMDAwMDIgaW5zdGVhZCB3aGljaCBpcyB2aXN1YWxseSB0aGUgc2FtZSBidXQgd29ya3MgYXJvdW5kIHRoZSBGaXJlZm94IGlzc3VlLlxuXHRcdFx0XHRcdG1pbiA9IDAuMDAwMTtcblx0XHRcdFx0XHRpZiAoc3ggPCBtaW4gJiYgc3ggPiAtbWluKSB7XG5cdFx0XHRcdFx0XHRzeCA9IHN6ID0gMC4wMDAwMjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHN5IDwgbWluICYmIHN5ID4gLW1pbikge1xuXHRcdFx0XHRcdFx0c3kgPSBzeiA9IDAuMDAwMDI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChwZXJzcGVjdGl2ZSAmJiAhdC56ICYmICF0LnJvdGF0aW9uWCAmJiAhdC5yb3RhdGlvblkpIHsgLy9GaXJlZm94IGhhcyBhIGJ1ZyB0aGF0IGNhdXNlcyBlbGVtZW50cyB0byBoYXZlIGFuIG9kZCBzdXBlci10aGluLCBicm9rZW4vZG90dGVkIGJsYWNrIGJvcmRlciBvbiBlbGVtZW50cyB0aGF0IGhhdmUgYSBwZXJzcGVjdGl2ZSBzZXQgYnV0IGFyZW4ndCB1dGlsaXppbmcgM0Qgc3BhY2UgKG5vIHJvdGF0aW9uWCwgcm90YXRpb25ZLCBvciB6KS5cblx0XHRcdFx0XHRcdHBlcnNwZWN0aXZlID0gMDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGFuZ2xlIHx8IHQuc2tld1gpIHtcblx0XHRcdFx0XHRhbmdsZSAqPSBfREVHMlJBRDtcblx0XHRcdFx0XHRjb3MgPSBhMTEgPSBNYXRoLmNvcyhhbmdsZSk7XG5cdFx0XHRcdFx0c2luID0gYTIxID0gTWF0aC5zaW4oYW5nbGUpO1xuXHRcdFx0XHRcdGlmICh0LnNrZXdYKSB7XG5cdFx0XHRcdFx0XHRhbmdsZSAtPSB0LnNrZXdYICogX0RFRzJSQUQ7XG5cdFx0XHRcdFx0XHRjb3MgPSBNYXRoLmNvcyhhbmdsZSk7XG5cdFx0XHRcdFx0XHRzaW4gPSBNYXRoLnNpbihhbmdsZSk7XG5cdFx0XHRcdFx0XHRpZiAodC5za2V3VHlwZSA9PT0gXCJzaW1wbGVcIikgeyAvL2J5IGRlZmF1bHQsIHdlIGNvbXBlbnNhdGUgc2tld2luZyBvbiB0aGUgb3RoZXIgYXhpcyB0byBtYWtlIGl0IGxvb2sgbW9yZSBuYXR1cmFsLCBidXQgeW91IGNhbiBzZXQgdGhlIHNrZXdUeXBlIHRvIFwic2ltcGxlXCIgdG8gdXNlIHRoZSB1bmNvbXBlbnNhdGVkIHNrZXdpbmcgdGhhdCBDU1MgZG9lc1xuXHRcdFx0XHRcdFx0XHR0MSA9IE1hdGgudGFuKHQuc2tld1ggKiBfREVHMlJBRCk7XG5cdFx0XHRcdFx0XHRcdHQxID0gTWF0aC5zcXJ0KDEgKyB0MSAqIHQxKTtcblx0XHRcdFx0XHRcdFx0Y29zICo9IHQxO1xuXHRcdFx0XHRcdFx0XHRzaW4gKj0gdDE7XG5cdFx0XHRcdFx0XHRcdGlmICh0LnNrZXdZKSB7XG5cdFx0XHRcdFx0XHRcdFx0YTExICo9IHQxO1xuXHRcdFx0XHRcdFx0XHRcdGEyMSAqPSB0MTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRhMTIgPSAtc2luO1xuXHRcdFx0XHRcdGEyMiA9IGNvcztcblxuXHRcdFx0XHR9IGVsc2UgaWYgKCFyb3RhdGlvblkgJiYgIXJvdGF0aW9uWCAmJiBzeiA9PT0gMSAmJiAhcGVyc3BlY3RpdmUgJiYgIWlzU1ZHKSB7IC8vaWYgd2UncmUgb25seSB0cmFuc2xhdGluZyBhbmQvb3IgMkQgc2NhbGluZywgdGhpcyBpcyBmYXN0ZXIuLi5cblx0XHRcdFx0XHRzdHlsZVtfdHJhbnNmb3JtUHJvcF0gPSAoKHQueFBlcmNlbnQgfHwgdC55UGVyY2VudCkgPyBcInRyYW5zbGF0ZShcIiArIHQueFBlcmNlbnQgKyBcIiUsXCIgKyB0LnlQZXJjZW50ICsgXCIlKSB0cmFuc2xhdGUzZChcIiA6IFwidHJhbnNsYXRlM2QoXCIpICsgeCArIFwicHgsXCIgKyB5ICsgXCJweCxcIiArIHogK1wicHgpXCIgKyAoKHN4ICE9PSAxIHx8IHN5ICE9PSAxKSA/IFwiIHNjYWxlKFwiICsgc3ggKyBcIixcIiArIHN5ICsgXCIpXCIgOiBcIlwiKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0YTExID0gYTIyID0gMTtcblx0XHRcdFx0XHRhMTIgPSBhMjEgPSAwO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIEtFWSAgSU5ERVggICBBRkZFQ1RTXG5cdFx0XHRcdC8vIGExMSAgMCAgICAgICByb3RhdGlvbiwgcm90YXRpb25ZLCBzY2FsZVhcblx0XHRcdFx0Ly8gYTIxICAxICAgICAgIHJvdGF0aW9uLCByb3RhdGlvblksIHNjYWxlWFxuXHRcdFx0XHQvLyBhMzEgIDIgICAgICAgcm90YXRpb25ZLCBzY2FsZVhcblx0XHRcdFx0Ly8gYTQxICAzICAgICAgIHJvdGF0aW9uWSwgc2NhbGVYXG5cdFx0XHRcdC8vIGExMiAgNCAgICAgICByb3RhdGlvbiwgc2tld1gsIHJvdGF0aW9uWCwgc2NhbGVZXG5cdFx0XHRcdC8vIGEyMiAgNSAgICAgICByb3RhdGlvbiwgc2tld1gsIHJvdGF0aW9uWCwgc2NhbGVZXG5cdFx0XHRcdC8vIGEzMiAgNiAgICAgICByb3RhdGlvblgsIHNjYWxlWVxuXHRcdFx0XHQvLyBhNDIgIDcgICAgICAgcm90YXRpb25YLCBzY2FsZVlcblx0XHRcdFx0Ly8gYTEzICA4ICAgICAgIHJvdGF0aW9uWSwgcm90YXRpb25YLCBzY2FsZVpcblx0XHRcdFx0Ly8gYTIzICA5ICAgICAgIHJvdGF0aW9uWSwgcm90YXRpb25YLCBzY2FsZVpcblx0XHRcdFx0Ly8gYTMzICAxMCAgICAgIHJvdGF0aW9uWSwgcm90YXRpb25YLCBzY2FsZVpcblx0XHRcdFx0Ly8gYTQzICAxMSAgICAgIHJvdGF0aW9uWSwgcm90YXRpb25YLCBwZXJzcGVjdGl2ZSwgc2NhbGVaXG5cdFx0XHRcdC8vIGExNCAgMTIgICAgICB4LCB6T3JpZ2luLCBzdmdPcmlnaW5cblx0XHRcdFx0Ly8gYTI0ICAxMyAgICAgIHksIHpPcmlnaW4sIHN2Z09yaWdpblxuXHRcdFx0XHQvLyBhMzQgIDE0ICAgICAgeiwgek9yaWdpblxuXHRcdFx0XHQvLyBhNDQgIDE1XG5cdFx0XHRcdC8vIHJvdGF0aW9uOiBNYXRoLmF0YW4yKGEyMSwgYTExKVxuXHRcdFx0XHQvLyByb3RhdGlvblk6IE1hdGguYXRhbjIoYTEzLCBhMzMpIChvciBNYXRoLmF0YW4yKGExMywgYTExKSlcblx0XHRcdFx0Ly8gcm90YXRpb25YOiBNYXRoLmF0YW4yKGEzMiwgYTMzKVxuXHRcdFx0XHRhMzMgPSAxO1xuXHRcdFx0XHRhMTMgPSBhMjMgPSBhMzEgPSBhMzIgPSBhNDEgPSBhNDIgPSAwO1xuXHRcdFx0XHRhNDMgPSAocGVyc3BlY3RpdmUpID8gLTEgLyBwZXJzcGVjdGl2ZSA6IDA7XG5cdFx0XHRcdHpPcmlnaW4gPSB0LnpPcmlnaW47XG5cdFx0XHRcdG1pbiA9IDAuMDAwMDAxOyAvL3RocmVzaG9sZCBiZWxvdyB3aGljaCBicm93c2VycyB1c2Ugc2NpZW50aWZpYyBub3RhdGlvbiB3aGljaCB3b24ndCB3b3JrLlxuXHRcdFx0XHRjb21tYSA9IFwiLFwiO1xuXHRcdFx0XHR6ZXJvID0gXCIwXCI7XG5cdFx0XHRcdGFuZ2xlID0gcm90YXRpb25ZICogX0RFRzJSQUQ7XG5cdFx0XHRcdGlmIChhbmdsZSkge1xuXHRcdFx0XHRcdGNvcyA9IE1hdGguY29zKGFuZ2xlKTtcblx0XHRcdFx0XHRzaW4gPSBNYXRoLnNpbihhbmdsZSk7XG5cdFx0XHRcdFx0YTMxID0gLXNpbjtcblx0XHRcdFx0XHRhNDEgPSBhNDMqLXNpbjtcblx0XHRcdFx0XHRhMTMgPSBhMTEqc2luO1xuXHRcdFx0XHRcdGEyMyA9IGEyMSpzaW47XG5cdFx0XHRcdFx0YTMzID0gY29zO1xuXHRcdFx0XHRcdGE0MyAqPSBjb3M7XG5cdFx0XHRcdFx0YTExICo9IGNvcztcblx0XHRcdFx0XHRhMjEgKj0gY29zO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGFuZ2xlID0gcm90YXRpb25YICogX0RFRzJSQUQ7XG5cdFx0XHRcdGlmIChhbmdsZSkge1xuXHRcdFx0XHRcdGNvcyA9IE1hdGguY29zKGFuZ2xlKTtcblx0XHRcdFx0XHRzaW4gPSBNYXRoLnNpbihhbmdsZSk7XG5cdFx0XHRcdFx0dDEgPSBhMTIqY29zK2ExMypzaW47XG5cdFx0XHRcdFx0dDIgPSBhMjIqY29zK2EyMypzaW47XG5cdFx0XHRcdFx0YTMyID0gYTMzKnNpbjtcblx0XHRcdFx0XHRhNDIgPSBhNDMqc2luO1xuXHRcdFx0XHRcdGExMyA9IGExMiotc2luK2ExMypjb3M7XG5cdFx0XHRcdFx0YTIzID0gYTIyKi1zaW4rYTIzKmNvcztcblx0XHRcdFx0XHRhMzMgPSBhMzMqY29zO1xuXHRcdFx0XHRcdGE0MyA9IGE0Mypjb3M7XG5cdFx0XHRcdFx0YTEyID0gdDE7XG5cdFx0XHRcdFx0YTIyID0gdDI7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHN6ICE9PSAxKSB7XG5cdFx0XHRcdFx0YTEzKj1zejtcblx0XHRcdFx0XHRhMjMqPXN6O1xuXHRcdFx0XHRcdGEzMyo9c3o7XG5cdFx0XHRcdFx0YTQzKj1zejtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoc3kgIT09IDEpIHtcblx0XHRcdFx0XHRhMTIqPXN5O1xuXHRcdFx0XHRcdGEyMio9c3k7XG5cdFx0XHRcdFx0YTMyKj1zeTtcblx0XHRcdFx0XHRhNDIqPXN5O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChzeCAhPT0gMSkge1xuXHRcdFx0XHRcdGExMSo9c3g7XG5cdFx0XHRcdFx0YTIxKj1zeDtcblx0XHRcdFx0XHRhMzEqPXN4O1xuXHRcdFx0XHRcdGE0MSo9c3g7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoek9yaWdpbiB8fCBpc1NWRykge1xuXHRcdFx0XHRcdGlmICh6T3JpZ2luKSB7XG5cdFx0XHRcdFx0XHR4ICs9IGExMyotek9yaWdpbjtcblx0XHRcdFx0XHRcdHkgKz0gYTIzKi16T3JpZ2luO1xuXHRcdFx0XHRcdFx0eiArPSBhMzMqLXpPcmlnaW4rek9yaWdpbjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGlzU1ZHKSB7IC8vZHVlIHRvIGJ1Z3MgaW4gc29tZSBicm93c2Vycywgd2UgbmVlZCB0byBtYW5hZ2UgdGhlIHRyYW5zZm9ybS1vcmlnaW4gb2YgU1ZHIG1hbnVhbGx5XG5cdFx0XHRcdFx0XHR4ICs9IHQueE9yaWdpbiAtICh0LnhPcmlnaW4gKiBhMTEgKyB0LnlPcmlnaW4gKiBhMTIpO1xuXHRcdFx0XHRcdFx0eSArPSB0LnlPcmlnaW4gLSAodC54T3JpZ2luICogYTIxICsgdC55T3JpZ2luICogYTIyKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHggPCBtaW4gJiYgeCA+IC1taW4pIHtcblx0XHRcdFx0XHRcdHggPSB6ZXJvO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoeSA8IG1pbiAmJiB5ID4gLW1pbikge1xuXHRcdFx0XHRcdFx0eSA9IHplcm87XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICh6IDwgbWluICYmIHogPiAtbWluKSB7XG5cdFx0XHRcdFx0XHR6ID0gMDsgLy9kb24ndCB1c2Ugc3RyaW5nIGJlY2F1c2Ugd2UgY2FsY3VsYXRlIHBlcnNwZWN0aXZlIGxhdGVyIGFuZCBuZWVkIHRoZSBudW1iZXIuXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly9vcHRpbWl6ZWQgd2F5IG9mIGNvbmNhdGVuYXRpbmcgYWxsIHRoZSB2YWx1ZXMgaW50byBhIHN0cmluZy4gSWYgd2UgZG8gaXQgYWxsIGluIG9uZSBzaG90LCBpdCdzIHNsb3dlciBiZWNhdXNlIG9mIHRoZSB3YXkgYnJvd3NlcnMgaGF2ZSB0byBjcmVhdGUgdGVtcCBzdHJpbmdzIGFuZCB0aGUgd2F5IGl0IGFmZmVjdHMgbWVtb3J5LiBJZiB3ZSBkbyBpdCBwaWVjZS1ieS1waWVjZSB3aXRoICs9LCBpdCdzIGEgYml0IHNsb3dlciB0b28uIFdlIGZvdW5kIHRoYXQgZG9pbmcgaXQgaW4gdGhlc2Ugc2l6ZWQgY2h1bmtzIHdvcmtzIGJlc3Qgb3ZlcmFsbDpcblx0XHRcdFx0dHJhbnNmb3JtID0gKCh0LnhQZXJjZW50IHx8IHQueVBlcmNlbnQpID8gXCJ0cmFuc2xhdGUoXCIgKyB0LnhQZXJjZW50ICsgXCIlLFwiICsgdC55UGVyY2VudCArIFwiJSkgbWF0cml4M2QoXCIgOiBcIm1hdHJpeDNkKFwiKTtcblx0XHRcdFx0dHJhbnNmb3JtICs9ICgoYTExIDwgbWluICYmIGExMSA+IC1taW4pID8gemVybyA6IGExMSkgKyBjb21tYSArICgoYTIxIDwgbWluICYmIGEyMSA+IC1taW4pID8gemVybyA6IGEyMSkgKyBjb21tYSArICgoYTMxIDwgbWluICYmIGEzMSA+IC1taW4pID8gemVybyA6IGEzMSk7XG5cdFx0XHRcdHRyYW5zZm9ybSArPSBjb21tYSArICgoYTQxIDwgbWluICYmIGE0MSA+IC1taW4pID8gemVybyA6IGE0MSkgKyBjb21tYSArICgoYTEyIDwgbWluICYmIGExMiA+IC1taW4pID8gemVybyA6IGExMikgKyBjb21tYSArICgoYTIyIDwgbWluICYmIGEyMiA+IC1taW4pID8gemVybyA6IGEyMik7XG5cdFx0XHRcdGlmIChyb3RhdGlvblggfHwgcm90YXRpb25ZKSB7IC8vcGVyZm9ybWFuY2Ugb3B0aW1pemF0aW9uIChvZnRlbiB0aGVyZSdzIG5vIHJvdGF0aW9uWCBvciByb3RhdGlvblksIHNvIHdlIGNhbiBza2lwIHRoZXNlIGNhbGN1bGF0aW9ucylcblx0XHRcdFx0XHR0cmFuc2Zvcm0gKz0gY29tbWEgKyAoKGEzMiA8IG1pbiAmJiBhMzIgPiAtbWluKSA/IHplcm8gOiBhMzIpICsgY29tbWEgKyAoKGE0MiA8IG1pbiAmJiBhNDIgPiAtbWluKSA/IHplcm8gOiBhNDIpICsgY29tbWEgKyAoKGExMyA8IG1pbiAmJiBhMTMgPiAtbWluKSA/IHplcm8gOiBhMTMpO1xuXHRcdFx0XHRcdHRyYW5zZm9ybSArPSBjb21tYSArICgoYTIzIDwgbWluICYmIGEyMyA+IC1taW4pID8gemVybyA6IGEyMykgKyBjb21tYSArICgoYTMzIDwgbWluICYmIGEzMyA+IC1taW4pID8gemVybyA6IGEzMykgKyBjb21tYSArICgoYTQzIDwgbWluICYmIGE0MyA+IC1taW4pID8gemVybyA6IGE0MykgKyBjb21tYTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0cmFuc2Zvcm0gKz0gXCIsMCwwLDAsMCwxLDAsXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0dHJhbnNmb3JtICs9IHggKyBjb21tYSArIHkgKyBjb21tYSArIHogKyBjb21tYSArIChwZXJzcGVjdGl2ZSA/ICgxICsgKC16IC8gcGVyc3BlY3RpdmUpKSA6IDEpICsgXCIpXCI7XG5cblx0XHRcdFx0c3R5bGVbX3RyYW5zZm9ybVByb3BdID0gdHJhbnNmb3JtO1xuXHRcdFx0fTtcblxuXHRcdHAgPSBUcmFuc2Zvcm0ucHJvdG90eXBlO1xuXHRcdHAueCA9IHAueSA9IHAueiA9IHAuc2tld1ggPSBwLnNrZXdZID0gcC5yb3RhdGlvbiA9IHAucm90YXRpb25YID0gcC5yb3RhdGlvblkgPSBwLnpPcmlnaW4gPSBwLnhQZXJjZW50ID0gcC55UGVyY2VudCA9IDA7XG5cdFx0cC5zY2FsZVggPSBwLnNjYWxlWSA9IHAuc2NhbGVaID0gMTtcblxuXHRcdF9yZWdpc3RlckNvbXBsZXhTcGVjaWFsUHJvcChcInRyYW5zZm9ybSxzY2FsZSxzY2FsZVgsc2NhbGVZLHNjYWxlWix4LHkseixyb3RhdGlvbixyb3RhdGlvblgscm90YXRpb25ZLHJvdGF0aW9uWixza2V3WCxza2V3WSxzaG9ydFJvdGF0aW9uLHNob3J0Um90YXRpb25YLHNob3J0Um90YXRpb25ZLHNob3J0Um90YXRpb25aLHRyYW5zZm9ybU9yaWdpbixzdmdPcmlnaW4sdHJhbnNmb3JtUGVyc3BlY3RpdmUsZGlyZWN0aW9uYWxSb3RhdGlvbixwYXJzZVRyYW5zZm9ybSxmb3JjZTNELHNrZXdUeXBlLHhQZXJjZW50LHlQZXJjZW50XCIsIHtwYXJzZXI6ZnVuY3Rpb24odCwgZSwgcCwgY3NzcCwgcHQsIHBsdWdpbiwgdmFycykge1xuXHRcdFx0aWYgKGNzc3AuX2xhc3RQYXJzZWRUcmFuc2Zvcm0gPT09IHZhcnMpIHsgcmV0dXJuIHB0OyB9IC8vb25seSBuZWVkIHRvIHBhcnNlIHRoZSB0cmFuc2Zvcm0gb25jZSwgYW5kIG9ubHkgaWYgdGhlIGJyb3dzZXIgc3VwcG9ydHMgaXQuXG5cdFx0XHRjc3NwLl9sYXN0UGFyc2VkVHJhbnNmb3JtID0gdmFycztcblx0XHRcdHZhciBtMSA9IGNzc3AuX3RyYW5zZm9ybSA9IF9nZXRUcmFuc2Zvcm0odCwgX2NzLCB0cnVlLCB2YXJzLnBhcnNlVHJhbnNmb3JtKSxcblx0XHRcdFx0c3R5bGUgPSB0LnN0eWxlLFxuXHRcdFx0XHRtaW4gPSAwLjAwMDAwMSxcblx0XHRcdFx0aSA9IF90cmFuc2Zvcm1Qcm9wcy5sZW5ndGgsXG5cdFx0XHRcdHYgPSB2YXJzLFxuXHRcdFx0XHRlbmRSb3RhdGlvbnMgPSB7fSxcblx0XHRcdFx0bTIsIHNrZXdZLCBjb3B5LCBvcmlnLCBoYXMzRCwgaGFzQ2hhbmdlLCBkcjtcblx0XHRcdGlmICh0eXBlb2Yodi50cmFuc2Zvcm0pID09PSBcInN0cmluZ1wiICYmIF90cmFuc2Zvcm1Qcm9wKSB7IC8vZm9yIHZhbHVlcyBsaWtlIHRyYW5zZm9ybTpcInJvdGF0ZSg2MGRlZykgc2NhbGUoMC41LCAwLjgpXCJcblx0XHRcdFx0Y29weSA9IF90ZW1wRGl2LnN0eWxlOyAvL2Rvbid0IHVzZSB0aGUgb3JpZ2luYWwgdGFyZ2V0IGJlY2F1c2UgaXQgbWlnaHQgYmUgU1ZHIGluIHdoaWNoIGNhc2Ugc29tZSBicm93c2VycyBkb24ndCByZXBvcnQgY29tcHV0ZWQgc3R5bGUgY29ycmVjdGx5LlxuXHRcdFx0XHRjb3B5W190cmFuc2Zvcm1Qcm9wXSA9IHYudHJhbnNmb3JtO1xuXHRcdFx0XHRjb3B5LmRpc3BsYXkgPSBcImJsb2NrXCI7IC8vaWYgZGlzcGxheSBpcyBcIm5vbmVcIiwgdGhlIGJyb3dzZXIgb2Z0ZW4gcmVmdXNlcyB0byByZXBvcnQgdGhlIHRyYW5zZm9ybSBwcm9wZXJ0aWVzIGNvcnJlY3RseS5cblx0XHRcdFx0Y29weS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcblx0XHRcdFx0X2RvYy5ib2R5LmFwcGVuZENoaWxkKF90ZW1wRGl2KTtcblx0XHRcdFx0bTIgPSBfZ2V0VHJhbnNmb3JtKF90ZW1wRGl2LCBudWxsLCBmYWxzZSk7XG5cdFx0XHRcdF9kb2MuYm9keS5yZW1vdmVDaGlsZChfdGVtcERpdik7XG5cdFx0XHR9IGVsc2UgaWYgKHR5cGVvZih2KSA9PT0gXCJvYmplY3RcIikgeyAvL2ZvciB2YWx1ZXMgbGlrZSBzY2FsZVgsIHNjYWxlWSwgcm90YXRpb24sIHgsIHksIHNrZXdYLCBhbmQgc2tld1kgb3IgdHJhbnNmb3JtOnsuLi59IChvYmplY3QpXG5cdFx0XHRcdG0yID0ge3NjYWxlWDpfcGFyc2VWYWwoKHYuc2NhbGVYICE9IG51bGwpID8gdi5zY2FsZVggOiB2LnNjYWxlLCBtMS5zY2FsZVgpLFxuXHRcdFx0XHRcdHNjYWxlWTpfcGFyc2VWYWwoKHYuc2NhbGVZICE9IG51bGwpID8gdi5zY2FsZVkgOiB2LnNjYWxlLCBtMS5zY2FsZVkpLFxuXHRcdFx0XHRcdHNjYWxlWjpfcGFyc2VWYWwodi5zY2FsZVosIG0xLnNjYWxlWiksXG5cdFx0XHRcdFx0eDpfcGFyc2VWYWwodi54LCBtMS54KSxcblx0XHRcdFx0XHR5Ol9wYXJzZVZhbCh2LnksIG0xLnkpLFxuXHRcdFx0XHRcdHo6X3BhcnNlVmFsKHYueiwgbTEueiksXG5cdFx0XHRcdFx0eFBlcmNlbnQ6X3BhcnNlVmFsKHYueFBlcmNlbnQsIG0xLnhQZXJjZW50KSxcblx0XHRcdFx0XHR5UGVyY2VudDpfcGFyc2VWYWwodi55UGVyY2VudCwgbTEueVBlcmNlbnQpLFxuXHRcdFx0XHRcdHBlcnNwZWN0aXZlOl9wYXJzZVZhbCh2LnRyYW5zZm9ybVBlcnNwZWN0aXZlLCBtMS5wZXJzcGVjdGl2ZSl9O1xuXHRcdFx0XHRkciA9IHYuZGlyZWN0aW9uYWxSb3RhdGlvbjtcblx0XHRcdFx0aWYgKGRyICE9IG51bGwpIHtcblx0XHRcdFx0XHRpZiAodHlwZW9mKGRyKSA9PT0gXCJvYmplY3RcIikge1xuXHRcdFx0XHRcdFx0Zm9yIChjb3B5IGluIGRyKSB7XG5cdFx0XHRcdFx0XHRcdHZbY29weV0gPSBkcltjb3B5XTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0di5yb3RhdGlvbiA9IGRyO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodHlwZW9mKHYueCkgPT09IFwic3RyaW5nXCIgJiYgdi54LmluZGV4T2YoXCIlXCIpICE9PSAtMSkge1xuXHRcdFx0XHRcdG0yLnggPSAwO1xuXHRcdFx0XHRcdG0yLnhQZXJjZW50ID0gX3BhcnNlVmFsKHYueCwgbTEueFBlcmNlbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0eXBlb2Yodi55KSA9PT0gXCJzdHJpbmdcIiAmJiB2LnkuaW5kZXhPZihcIiVcIikgIT09IC0xKSB7XG5cdFx0XHRcdFx0bTIueSA9IDA7XG5cdFx0XHRcdFx0bTIueVBlcmNlbnQgPSBfcGFyc2VWYWwodi55LCBtMS55UGVyY2VudCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRtMi5yb3RhdGlvbiA9IF9wYXJzZUFuZ2xlKChcInJvdGF0aW9uXCIgaW4gdikgPyB2LnJvdGF0aW9uIDogKFwic2hvcnRSb3RhdGlvblwiIGluIHYpID8gdi5zaG9ydFJvdGF0aW9uICsgXCJfc2hvcnRcIiA6IChcInJvdGF0aW9uWlwiIGluIHYpID8gdi5yb3RhdGlvblogOiBtMS5yb3RhdGlvbiwgbTEucm90YXRpb24sIFwicm90YXRpb25cIiwgZW5kUm90YXRpb25zKTtcblx0XHRcdFx0aWYgKF9zdXBwb3J0czNEKSB7XG5cdFx0XHRcdFx0bTIucm90YXRpb25YID0gX3BhcnNlQW5nbGUoKFwicm90YXRpb25YXCIgaW4gdikgPyB2LnJvdGF0aW9uWCA6IChcInNob3J0Um90YXRpb25YXCIgaW4gdikgPyB2LnNob3J0Um90YXRpb25YICsgXCJfc2hvcnRcIiA6IG0xLnJvdGF0aW9uWCB8fCAwLCBtMS5yb3RhdGlvblgsIFwicm90YXRpb25YXCIsIGVuZFJvdGF0aW9ucyk7XG5cdFx0XHRcdFx0bTIucm90YXRpb25ZID0gX3BhcnNlQW5nbGUoKFwicm90YXRpb25ZXCIgaW4gdikgPyB2LnJvdGF0aW9uWSA6IChcInNob3J0Um90YXRpb25ZXCIgaW4gdikgPyB2LnNob3J0Um90YXRpb25ZICsgXCJfc2hvcnRcIiA6IG0xLnJvdGF0aW9uWSB8fCAwLCBtMS5yb3RhdGlvblksIFwicm90YXRpb25ZXCIsIGVuZFJvdGF0aW9ucyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0bTIuc2tld1ggPSAodi5za2V3WCA9PSBudWxsKSA/IG0xLnNrZXdYIDogX3BhcnNlQW5nbGUodi5za2V3WCwgbTEuc2tld1gpO1xuXG5cdFx0XHRcdC8vbm90ZTogZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMsIHdlIGNvbWJpbmUgYWxsIHNrZXdpbmcgaW50byB0aGUgc2tld1ggYW5kIHJvdGF0aW9uIHZhbHVlcywgaWdub3Jpbmcgc2tld1kgYnV0IHdlIG11c3Qgc3RpbGwgcmVjb3JkIGl0IHNvIHRoYXQgd2UgY2FuIGRpc2Nlcm4gaG93IG11Y2ggb2YgdGhlIG92ZXJhbGwgc2tldyBpcyBhdHRyaWJ1dGVkIHRvIHNrZXdYIHZzLiBza2V3WS4gT3RoZXJ3aXNlLCBpZiB0aGUgc2tld1kgd291bGQgYWx3YXlzIGFjdCByZWxhdGl2ZSAodHdlZW4gc2tld1kgdG8gMTBkZWcsIGZvciBleGFtcGxlLCBtdWx0aXBsZSB0aW1lcyBhbmQgaWYgd2UgYWx3YXlzIGNvbWJpbmUgdGhpbmdzIGludG8gc2tld1gsIHdlIGNhbid0IHJlbWVtYmVyIHRoYXQgc2tld1kgd2FzIDEwIGZyb20gbGFzdCB0aW1lKS4gUmVtZW1iZXIsIGEgc2tld1kgb2YgMTAgZGVncmVlcyBsb29rcyB0aGUgc2FtZSBhcyBhIHJvdGF0aW9uIG9mIDEwIGRlZ3JlZXMgcGx1cyBhIHNrZXdYIG9mIC0xMCBkZWdyZWVzLlxuXHRcdFx0XHRtMi5za2V3WSA9ICh2LnNrZXdZID09IG51bGwpID8gbTEuc2tld1kgOiBfcGFyc2VBbmdsZSh2LnNrZXdZLCBtMS5za2V3WSk7XG5cdFx0XHRcdGlmICgoc2tld1kgPSBtMi5za2V3WSAtIG0xLnNrZXdZKSkge1xuXHRcdFx0XHRcdG0yLnNrZXdYICs9IHNrZXdZO1xuXHRcdFx0XHRcdG0yLnJvdGF0aW9uICs9IHNrZXdZO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoX3N1cHBvcnRzM0QgJiYgdi5mb3JjZTNEICE9IG51bGwpIHtcblx0XHRcdFx0bTEuZm9yY2UzRCA9IHYuZm9yY2UzRDtcblx0XHRcdFx0aGFzQ2hhbmdlID0gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0bTEuc2tld1R5cGUgPSB2LnNrZXdUeXBlIHx8IG0xLnNrZXdUeXBlIHx8IENTU1BsdWdpbi5kZWZhdWx0U2tld1R5cGU7XG5cblx0XHRcdGhhczNEID0gKG0xLmZvcmNlM0QgfHwgbTEueiB8fCBtMS5yb3RhdGlvblggfHwgbTEucm90YXRpb25ZIHx8IG0yLnogfHwgbTIucm90YXRpb25YIHx8IG0yLnJvdGF0aW9uWSB8fCBtMi5wZXJzcGVjdGl2ZSk7XG5cdFx0XHRpZiAoIWhhczNEICYmIHYuc2NhbGUgIT0gbnVsbCkge1xuXHRcdFx0XHRtMi5zY2FsZVogPSAxOyAvL25vIG5lZWQgdG8gdHdlZW4gc2NhbGVaLlxuXHRcdFx0fVxuXG5cdFx0XHR3aGlsZSAoLS1pID4gLTEpIHtcblx0XHRcdFx0cCA9IF90cmFuc2Zvcm1Qcm9wc1tpXTtcblx0XHRcdFx0b3JpZyA9IG0yW3BdIC0gbTFbcF07XG5cdFx0XHRcdGlmIChvcmlnID4gbWluIHx8IG9yaWcgPCAtbWluIHx8IHZbcF0gIT0gbnVsbCB8fCBfZm9yY2VQVFtwXSAhPSBudWxsKSB7XG5cdFx0XHRcdFx0aGFzQ2hhbmdlID0gdHJ1ZTtcblx0XHRcdFx0XHRwdCA9IG5ldyBDU1NQcm9wVHdlZW4obTEsIHAsIG0xW3BdLCBvcmlnLCBwdCk7XG5cdFx0XHRcdFx0aWYgKHAgaW4gZW5kUm90YXRpb25zKSB7XG5cdFx0XHRcdFx0XHRwdC5lID0gZW5kUm90YXRpb25zW3BdOyAvL2RpcmVjdGlvbmFsIHJvdGF0aW9ucyB0eXBpY2FsbHkgaGF2ZSBjb21wZW5zYXRlZCB2YWx1ZXMgZHVyaW5nIHRoZSB0d2VlbiwgYnV0IHdlIG5lZWQgdG8gbWFrZSBzdXJlIHRoZXkgZW5kIGF0IGV4YWN0bHkgd2hhdCB0aGUgdXNlciByZXF1ZXN0ZWRcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cHQueHMwID0gMDsgLy9lbnN1cmVzIHRoZSB2YWx1ZSBzdGF5cyBudW1lcmljIGluIHNldFJhdGlvKClcblx0XHRcdFx0XHRwdC5wbHVnaW4gPSBwbHVnaW47XG5cdFx0XHRcdFx0Y3NzcC5fb3ZlcndyaXRlUHJvcHMucHVzaChwdC5uKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRvcmlnID0gdi50cmFuc2Zvcm1PcmlnaW47XG5cdFx0XHRpZiAobTEuc3ZnICYmIChvcmlnIHx8IHYuc3ZnT3JpZ2luKSkge1xuXHRcdFx0XHRfcGFyc2VTVkdPcmlnaW4odCwgX3BhcnNlUG9zaXRpb24ob3JpZyksIG0yLCB2LnN2Z09yaWdpbik7XG5cdFx0XHRcdHB0ID0gbmV3IENTU1Byb3BUd2VlbihtMSwgXCJ4T3JpZ2luXCIsIG0xLnhPcmlnaW4sIG0yLnhPcmlnaW4gLSBtMS54T3JpZ2luLCBwdCwgLTEsIFwidHJhbnNmb3JtT3JpZ2luXCIpO1xuXHRcdFx0XHRwdC5iID0gbTEueE9yaWdpbjtcblx0XHRcdFx0cHQuZSA9IHB0LnhzMCA9IG0yLnhPcmlnaW47XG5cdFx0XHRcdHB0ID0gbmV3IENTU1Byb3BUd2VlbihtMSwgXCJ5T3JpZ2luXCIsIG0xLnlPcmlnaW4sIG0yLnlPcmlnaW4gLSBtMS55T3JpZ2luLCBwdCwgLTEsIFwidHJhbnNmb3JtT3JpZ2luXCIpO1xuXHRcdFx0XHRwdC5iID0gbTEueU9yaWdpbjtcblx0XHRcdFx0cHQuZSA9IHB0LnhzMCA9IG0yLnlPcmlnaW47XG5cdFx0XHRcdG9yaWcgPSBfdXNlU1ZHVHJhbnNmb3JtQXR0ciA/IG51bGwgOiBcIjBweCAwcHhcIjsgLy9jZXJ0YWluIGJyb3dzZXJzIChsaWtlIGZpcmVmb3gpIGNvbXBsZXRlbHkgYm90Y2ggdHJhbnNmb3JtLW9yaWdpbiwgc28gd2UgbXVzdCByZW1vdmUgaXQgdG8gcHJldmVudCBpdCBmcm9tIGNvbnRhbWluYXRpbmcgdHJhbnNmb3Jtcy4gV2UgbWFuYWdlIGl0IG91cnNlbHZlcyB3aXRoIHhPcmlnaW4gYW5kIHlPcmlnaW5cblx0XHRcdH1cblx0XHRcdGlmIChvcmlnIHx8IChfc3VwcG9ydHMzRCAmJiBoYXMzRCAmJiBtMS56T3JpZ2luKSkgeyAvL2lmIGFueXRoaW5nIDNEIGlzIGhhcHBlbmluZyBhbmQgdGhlcmUncyBhIHRyYW5zZm9ybU9yaWdpbiB3aXRoIGEgeiBjb21wb25lbnQgdGhhdCdzIG5vbi16ZXJvLCB3ZSBtdXN0IGVuc3VyZSB0aGF0IHRoZSB0cmFuc2Zvcm1PcmlnaW4ncyB6LWNvbXBvbmVudCBpcyBzZXQgdG8gMCBzbyB0aGF0IHdlIGNhbiBtYW51YWxseSBkbyB0aG9zZSBjYWxjdWxhdGlvbnMgdG8gZ2V0IGFyb3VuZCBTYWZhcmkgYnVncy4gRXZlbiBpZiB0aGUgdXNlciBkaWRuJ3Qgc3BlY2lmaWNhbGx5IGRlZmluZSBhIFwidHJhbnNmb3JtT3JpZ2luXCIgaW4gdGhpcyBwYXJ0aWN1bGFyIHR3ZWVuIChtYXliZSB0aGV5IGRpZCBpdCB2aWEgY3NzIGRpcmVjdGx5KS5cblx0XHRcdFx0aWYgKF90cmFuc2Zvcm1Qcm9wKSB7XG5cdFx0XHRcdFx0aGFzQ2hhbmdlID0gdHJ1ZTtcblx0XHRcdFx0XHRwID0gX3RyYW5zZm9ybU9yaWdpblByb3A7XG5cdFx0XHRcdFx0b3JpZyA9IChvcmlnIHx8IF9nZXRTdHlsZSh0LCBwLCBfY3MsIGZhbHNlLCBcIjUwJSA1MCVcIikpICsgXCJcIjsgLy9jYXN0IGFzIHN0cmluZyB0byBhdm9pZCBlcnJvcnNcblx0XHRcdFx0XHRwdCA9IG5ldyBDU1NQcm9wVHdlZW4oc3R5bGUsIHAsIDAsIDAsIHB0LCAtMSwgXCJ0cmFuc2Zvcm1PcmlnaW5cIik7XG5cdFx0XHRcdFx0cHQuYiA9IHN0eWxlW3BdO1xuXHRcdFx0XHRcdHB0LnBsdWdpbiA9IHBsdWdpbjtcblx0XHRcdFx0XHRpZiAoX3N1cHBvcnRzM0QpIHtcblx0XHRcdFx0XHRcdGNvcHkgPSBtMS56T3JpZ2luO1xuXHRcdFx0XHRcdFx0b3JpZyA9IG9yaWcuc3BsaXQoXCIgXCIpO1xuXHRcdFx0XHRcdFx0bTEuek9yaWdpbiA9ICgob3JpZy5sZW5ndGggPiAyICYmICEoY29weSAhPT0gMCAmJiBvcmlnWzJdID09PSBcIjBweFwiKSkgPyBwYXJzZUZsb2F0KG9yaWdbMl0pIDogY29weSkgfHwgMDsgLy9TYWZhcmkgZG9lc24ndCBoYW5kbGUgdGhlIHogcGFydCBvZiB0cmFuc2Zvcm1PcmlnaW4gY29ycmVjdGx5LCBzbyB3ZSdsbCBtYW51YWxseSBoYW5kbGUgaXQgaW4gdGhlIF9zZXQzRFRyYW5zZm9ybVJhdGlvKCkgbWV0aG9kLlxuXHRcdFx0XHRcdFx0cHQueHMwID0gcHQuZSA9IG9yaWdbMF0gKyBcIiBcIiArIChvcmlnWzFdIHx8IFwiNTAlXCIpICsgXCIgMHB4XCI7IC8vd2UgbXVzdCBkZWZpbmUgYSB6IHZhbHVlIG9mIDBweCBzcGVjaWZpY2FsbHkgb3RoZXJ3aXNlIGlPUyA1IFNhZmFyaSB3aWxsIHN0aWNrIHdpdGggdGhlIG9sZCBvbmUgKGlmIG9uZSB3YXMgZGVmaW5lZCkhXG5cdFx0XHRcdFx0XHRwdCA9IG5ldyBDU1NQcm9wVHdlZW4obTEsIFwiek9yaWdpblwiLCAwLCAwLCBwdCwgLTEsIHB0Lm4pOyAvL3dlIG11c3QgY3JlYXRlIGEgQ1NTUHJvcFR3ZWVuIGZvciB0aGUgX2dzVHJhbnNmb3JtLnpPcmlnaW4gc28gdGhhdCBpdCBnZXRzIHJlc2V0IHByb3Blcmx5IGF0IHRoZSBiZWdpbm5pbmcgaWYgdGhlIHR3ZWVuIHJ1bnMgYmFja3dhcmQgKGFzIG9wcG9zZWQgdG8ganVzdCBzZXR0aW5nIG0xLnpPcmlnaW4gaGVyZSlcblx0XHRcdFx0XHRcdHB0LmIgPSBjb3B5O1xuXHRcdFx0XHRcdFx0cHQueHMwID0gcHQuZSA9IG0xLnpPcmlnaW47XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHB0LnhzMCA9IHB0LmUgPSBvcmlnO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vZm9yIG9sZGVyIHZlcnNpb25zIG9mIElFICg2LTgpLCB3ZSBuZWVkIHRvIG1hbnVhbGx5IGNhbGN1bGF0ZSB0aGluZ3MgaW5zaWRlIHRoZSBzZXRSYXRpbygpIGZ1bmN0aW9uLiBXZSByZWNvcmQgb3JpZ2luIHggYW5kIHkgKG94IGFuZCBveSkgYW5kIHdoZXRoZXIgb3Igbm90IHRoZSB2YWx1ZXMgYXJlIHBlcmNlbnRhZ2VzIChveHAgYW5kIG95cCkuXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0X3BhcnNlUG9zaXRpb24ob3JpZyArIFwiXCIsIG0xKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGhhc0NoYW5nZSkge1xuXHRcdFx0XHRjc3NwLl90cmFuc2Zvcm1UeXBlID0gKCEobTEuc3ZnICYmIF91c2VTVkdUcmFuc2Zvcm1BdHRyKSAmJiAoaGFzM0QgfHwgdGhpcy5fdHJhbnNmb3JtVHlwZSA9PT0gMykpID8gMyA6IDI7IC8vcXVpY2tlciB0aGFuIGNhbGxpbmcgY3NzcC5fZW5hYmxlVHJhbnNmb3JtcygpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHB0O1xuXHRcdH0sIHByZWZpeDp0cnVlfSk7XG5cblx0XHRfcmVnaXN0ZXJDb21wbGV4U3BlY2lhbFByb3AoXCJib3hTaGFkb3dcIiwge2RlZmF1bHRWYWx1ZTpcIjBweCAwcHggMHB4IDBweCAjOTk5XCIsIHByZWZpeDp0cnVlLCBjb2xvcjp0cnVlLCBtdWx0aTp0cnVlLCBrZXl3b3JkOlwiaW5zZXRcIn0pO1xuXG5cdFx0X3JlZ2lzdGVyQ29tcGxleFNwZWNpYWxQcm9wKFwiYm9yZGVyUmFkaXVzXCIsIHtkZWZhdWx0VmFsdWU6XCIwcHhcIiwgcGFyc2VyOmZ1bmN0aW9uKHQsIGUsIHAsIGNzc3AsIHB0LCBwbHVnaW4pIHtcblx0XHRcdGUgPSB0aGlzLmZvcm1hdChlKTtcblx0XHRcdHZhciBwcm9wcyA9IFtcImJvcmRlclRvcExlZnRSYWRpdXNcIixcImJvcmRlclRvcFJpZ2h0UmFkaXVzXCIsXCJib3JkZXJCb3R0b21SaWdodFJhZGl1c1wiLFwiYm9yZGVyQm90dG9tTGVmdFJhZGl1c1wiXSxcblx0XHRcdFx0c3R5bGUgPSB0LnN0eWxlLFxuXHRcdFx0XHRlYTEsIGksIGVzMiwgYnMyLCBicywgZXMsIGJuLCBlbiwgdywgaCwgZXNmeCwgYnNmeCwgcmVsLCBobiwgdm4sIGVtO1xuXHRcdFx0dyA9IHBhcnNlRmxvYXQodC5vZmZzZXRXaWR0aCk7XG5cdFx0XHRoID0gcGFyc2VGbG9hdCh0Lm9mZnNldEhlaWdodCk7XG5cdFx0XHRlYTEgPSBlLnNwbGl0KFwiIFwiKTtcblx0XHRcdGZvciAoaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyAvL2lmIHdlJ3JlIGRlYWxpbmcgd2l0aCBwZXJjZW50YWdlcywgd2UgbXVzdCBjb252ZXJ0IHRoaW5ncyBzZXBhcmF0ZWx5IGZvciB0aGUgaG9yaXpvbnRhbCBhbmQgdmVydGljYWwgYXhpcyFcblx0XHRcdFx0aWYgKHRoaXMucC5pbmRleE9mKFwiYm9yZGVyXCIpKSB7IC8vb2xkZXIgYnJvd3NlcnMgdXNlZCBhIHByZWZpeFxuXHRcdFx0XHRcdHByb3BzW2ldID0gX2NoZWNrUHJvcFByZWZpeChwcm9wc1tpXSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnMgPSBiczIgPSBfZ2V0U3R5bGUodCwgcHJvcHNbaV0sIF9jcywgZmFsc2UsIFwiMHB4XCIpO1xuXHRcdFx0XHRpZiAoYnMuaW5kZXhPZihcIiBcIikgIT09IC0xKSB7XG5cdFx0XHRcdFx0YnMyID0gYnMuc3BsaXQoXCIgXCIpO1xuXHRcdFx0XHRcdGJzID0gYnMyWzBdO1xuXHRcdFx0XHRcdGJzMiA9IGJzMlsxXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlcyA9IGVzMiA9IGVhMVtpXTtcblx0XHRcdFx0Ym4gPSBwYXJzZUZsb2F0KGJzKTtcblx0XHRcdFx0YnNmeCA9IGJzLnN1YnN0cigoYm4gKyBcIlwiKS5sZW5ndGgpO1xuXHRcdFx0XHRyZWwgPSAoZXMuY2hhckF0KDEpID09PSBcIj1cIik7XG5cdFx0XHRcdGlmIChyZWwpIHtcblx0XHRcdFx0XHRlbiA9IHBhcnNlSW50KGVzLmNoYXJBdCgwKStcIjFcIiwgMTApO1xuXHRcdFx0XHRcdGVzID0gZXMuc3Vic3RyKDIpO1xuXHRcdFx0XHRcdGVuICo9IHBhcnNlRmxvYXQoZXMpO1xuXHRcdFx0XHRcdGVzZnggPSBlcy5zdWJzdHIoKGVuICsgXCJcIikubGVuZ3RoIC0gKGVuIDwgMCA/IDEgOiAwKSkgfHwgXCJcIjtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRlbiA9IHBhcnNlRmxvYXQoZXMpO1xuXHRcdFx0XHRcdGVzZnggPSBlcy5zdWJzdHIoKGVuICsgXCJcIikubGVuZ3RoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZXNmeCA9PT0gXCJcIikge1xuXHRcdFx0XHRcdGVzZnggPSBfc3VmZml4TWFwW3BdIHx8IGJzZng7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGVzZnggIT09IGJzZngpIHtcblx0XHRcdFx0XHRobiA9IF9jb252ZXJ0VG9QaXhlbHModCwgXCJib3JkZXJMZWZ0XCIsIGJuLCBic2Z4KTsgLy9ob3Jpem9udGFsIG51bWJlciAod2UgdXNlIGEgYm9ndXMgXCJib3JkZXJMZWZ0XCIgcHJvcGVydHkganVzdCBiZWNhdXNlIHRoZSBfY29udmVydFRvUGl4ZWxzKCkgbWV0aG9kIHNlYXJjaGVzIGZvciB0aGUga2V5d29yZHMgXCJMZWZ0XCIsIFwiUmlnaHRcIiwgXCJUb3BcIiwgYW5kIFwiQm90dG9tXCIgdG8gZGV0ZXJtaW5lIG9mIGl0J3MgYSBob3Jpem9udGFsIG9yIHZlcnRpY2FsIHByb3BlcnR5LCBhbmQgd2UgbmVlZCBcImJvcmRlclwiIGluIHRoZSBuYW1lIHNvIHRoYXQgaXQga25vd3MgaXQgc2hvdWxkIG1lYXN1cmUgcmVsYXRpdmUgdG8gdGhlIGVsZW1lbnQgaXRzZWxmLCBub3QgaXRzIHBhcmVudC5cblx0XHRcdFx0XHR2biA9IF9jb252ZXJ0VG9QaXhlbHModCwgXCJib3JkZXJUb3BcIiwgYm4sIGJzZngpOyAvL3ZlcnRpY2FsIG51bWJlclxuXHRcdFx0XHRcdGlmIChlc2Z4ID09PSBcIiVcIikge1xuXHRcdFx0XHRcdFx0YnMgPSAoaG4gLyB3ICogMTAwKSArIFwiJVwiO1xuXHRcdFx0XHRcdFx0YnMyID0gKHZuIC8gaCAqIDEwMCkgKyBcIiVcIjtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKGVzZnggPT09IFwiZW1cIikge1xuXHRcdFx0XHRcdFx0ZW0gPSBfY29udmVydFRvUGl4ZWxzKHQsIFwiYm9yZGVyTGVmdFwiLCAxLCBcImVtXCIpO1xuXHRcdFx0XHRcdFx0YnMgPSAoaG4gLyBlbSkgKyBcImVtXCI7XG5cdFx0XHRcdFx0XHRiczIgPSAodm4gLyBlbSkgKyBcImVtXCI7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGJzID0gaG4gKyBcInB4XCI7XG5cdFx0XHRcdFx0XHRiczIgPSB2biArIFwicHhcIjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHJlbCkge1xuXHRcdFx0XHRcdFx0ZXMgPSAocGFyc2VGbG9hdChicykgKyBlbikgKyBlc2Z4O1xuXHRcdFx0XHRcdFx0ZXMyID0gKHBhcnNlRmxvYXQoYnMyKSArIGVuKSArIGVzZng7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHB0ID0gX3BhcnNlQ29tcGxleChzdHlsZSwgcHJvcHNbaV0sIGJzICsgXCIgXCIgKyBiczIsIGVzICsgXCIgXCIgKyBlczIsIGZhbHNlLCBcIjBweFwiLCBwdCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcHQ7XG5cdFx0fSwgcHJlZml4OnRydWUsIGZvcm1hdHRlcjpfZ2V0Rm9ybWF0dGVyKFwiMHB4IDBweCAwcHggMHB4XCIsIGZhbHNlLCB0cnVlKX0pO1xuXHRcdF9yZWdpc3RlckNvbXBsZXhTcGVjaWFsUHJvcChcImJhY2tncm91bmRQb3NpdGlvblwiLCB7ZGVmYXVsdFZhbHVlOlwiMCAwXCIsIHBhcnNlcjpmdW5jdGlvbih0LCBlLCBwLCBjc3NwLCBwdCwgcGx1Z2luKSB7XG5cdFx0XHR2YXIgYnAgPSBcImJhY2tncm91bmQtcG9zaXRpb25cIixcblx0XHRcdFx0Y3MgPSAoX2NzIHx8IF9nZXRDb21wdXRlZFN0eWxlKHQsIG51bGwpKSxcblx0XHRcdFx0YnMgPSB0aGlzLmZvcm1hdCggKChjcykgPyBfaWVWZXJzID8gY3MuZ2V0UHJvcGVydHlWYWx1ZShicCArIFwiLXhcIikgKyBcIiBcIiArIGNzLmdldFByb3BlcnR5VmFsdWUoYnAgKyBcIi15XCIpIDogY3MuZ2V0UHJvcGVydHlWYWx1ZShicCkgOiB0LmN1cnJlbnRTdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25YICsgXCIgXCIgKyB0LmN1cnJlbnRTdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZKSB8fCBcIjAgMFwiKSwgLy9JbnRlcm5ldCBFeHBsb3JlciBkb2Vzbid0IHJlcG9ydCBiYWNrZ3JvdW5kLXBvc2l0aW9uIGNvcnJlY3RseSAtIHdlIG11c3QgcXVlcnkgYmFja2dyb3VuZC1wb3NpdGlvbi14IGFuZCBiYWNrZ3JvdW5kLXBvc2l0aW9uLXkgYW5kIGNvbWJpbmUgdGhlbSAoZXZlbiBpbiBJRTEwKS4gQmVmb3JlIElFOSwgd2UgbXVzdCBkbyB0aGUgc2FtZSB3aXRoIHRoZSBjdXJyZW50U3R5bGUgb2JqZWN0IGFuZCB1c2UgY2FtZWxDYXNlXG5cdFx0XHRcdGVzID0gdGhpcy5mb3JtYXQoZSksXG5cdFx0XHRcdGJhLCBlYSwgaSwgcGN0LCBvdmVybGFwLCBzcmM7XG5cdFx0XHRpZiAoKGJzLmluZGV4T2YoXCIlXCIpICE9PSAtMSkgIT09IChlcy5pbmRleE9mKFwiJVwiKSAhPT0gLTEpKSB7XG5cdFx0XHRcdHNyYyA9IF9nZXRTdHlsZSh0LCBcImJhY2tncm91bmRJbWFnZVwiKS5yZXBsYWNlKF91cmxFeHAsIFwiXCIpO1xuXHRcdFx0XHRpZiAoc3JjICYmIHNyYyAhPT0gXCJub25lXCIpIHtcblx0XHRcdFx0XHRiYSA9IGJzLnNwbGl0KFwiIFwiKTtcblx0XHRcdFx0XHRlYSA9IGVzLnNwbGl0KFwiIFwiKTtcblx0XHRcdFx0XHRfdGVtcEltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgc3JjKTsgLy9zZXQgdGhlIHRlbXAgSU1HJ3Mgc3JjIHRvIHRoZSBiYWNrZ3JvdW5kLWltYWdlIHNvIHRoYXQgd2UgY2FuIG1lYXN1cmUgaXRzIHdpZHRoL2hlaWdodFxuXHRcdFx0XHRcdGkgPSAyO1xuXHRcdFx0XHRcdHdoaWxlICgtLWkgPiAtMSkge1xuXHRcdFx0XHRcdFx0YnMgPSBiYVtpXTtcblx0XHRcdFx0XHRcdHBjdCA9IChicy5pbmRleE9mKFwiJVwiKSAhPT0gLTEpO1xuXHRcdFx0XHRcdFx0aWYgKHBjdCAhPT0gKGVhW2ldLmluZGV4T2YoXCIlXCIpICE9PSAtMSkpIHtcblx0XHRcdFx0XHRcdFx0b3ZlcmxhcCA9IChpID09PSAwKSA/IHQub2Zmc2V0V2lkdGggLSBfdGVtcEltZy53aWR0aCA6IHQub2Zmc2V0SGVpZ2h0IC0gX3RlbXBJbWcuaGVpZ2h0O1xuXHRcdFx0XHRcdFx0XHRiYVtpXSA9IHBjdCA/IChwYXJzZUZsb2F0KGJzKSAvIDEwMCAqIG92ZXJsYXApICsgXCJweFwiIDogKHBhcnNlRmxvYXQoYnMpIC8gb3ZlcmxhcCAqIDEwMCkgKyBcIiVcIjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnMgPSBiYS5qb2luKFwiIFwiKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXMucGFyc2VDb21wbGV4KHQuc3R5bGUsIGJzLCBlcywgcHQsIHBsdWdpbik7XG5cdFx0fSwgZm9ybWF0dGVyOl9wYXJzZVBvc2l0aW9ufSk7XG5cdFx0X3JlZ2lzdGVyQ29tcGxleFNwZWNpYWxQcm9wKFwiYmFja2dyb3VuZFNpemVcIiwge2RlZmF1bHRWYWx1ZTpcIjAgMFwiLCBmb3JtYXR0ZXI6X3BhcnNlUG9zaXRpb259KTtcblx0XHRfcmVnaXN0ZXJDb21wbGV4U3BlY2lhbFByb3AoXCJwZXJzcGVjdGl2ZVwiLCB7ZGVmYXVsdFZhbHVlOlwiMHB4XCIsIHByZWZpeDp0cnVlfSk7XG5cdFx0X3JlZ2lzdGVyQ29tcGxleFNwZWNpYWxQcm9wKFwicGVyc3BlY3RpdmVPcmlnaW5cIiwge2RlZmF1bHRWYWx1ZTpcIjUwJSA1MCVcIiwgcHJlZml4OnRydWV9KTtcblx0XHRfcmVnaXN0ZXJDb21wbGV4U3BlY2lhbFByb3AoXCJ0cmFuc2Zvcm1TdHlsZVwiLCB7cHJlZml4OnRydWV9KTtcblx0XHRfcmVnaXN0ZXJDb21wbGV4U3BlY2lhbFByb3AoXCJiYWNrZmFjZVZpc2liaWxpdHlcIiwge3ByZWZpeDp0cnVlfSk7XG5cdFx0X3JlZ2lzdGVyQ29tcGxleFNwZWNpYWxQcm9wKFwidXNlclNlbGVjdFwiLCB7cHJlZml4OnRydWV9KTtcblx0XHRfcmVnaXN0ZXJDb21wbGV4U3BlY2lhbFByb3AoXCJtYXJnaW5cIiwge3BhcnNlcjpfZ2V0RWRnZVBhcnNlcihcIm1hcmdpblRvcCxtYXJnaW5SaWdodCxtYXJnaW5Cb3R0b20sbWFyZ2luTGVmdFwiKX0pO1xuXHRcdF9yZWdpc3RlckNvbXBsZXhTcGVjaWFsUHJvcChcInBhZGRpbmdcIiwge3BhcnNlcjpfZ2V0RWRnZVBhcnNlcihcInBhZGRpbmdUb3AscGFkZGluZ1JpZ2h0LHBhZGRpbmdCb3R0b20scGFkZGluZ0xlZnRcIil9KTtcblx0XHRfcmVnaXN0ZXJDb21wbGV4U3BlY2lhbFByb3AoXCJjbGlwXCIsIHtkZWZhdWx0VmFsdWU6XCJyZWN0KDBweCwwcHgsMHB4LDBweClcIiwgcGFyc2VyOmZ1bmN0aW9uKHQsIGUsIHAsIGNzc3AsIHB0LCBwbHVnaW4pe1xuXHRcdFx0dmFyIGIsIGNzLCBkZWxpbTtcblx0XHRcdGlmIChfaWVWZXJzIDwgOSkgeyAvL0lFOCBhbmQgZWFybGllciBkb24ndCByZXBvcnQgYSBcImNsaXBcIiB2YWx1ZSBpbiB0aGUgY3VycmVudFN0eWxlIC0gaW5zdGVhZCwgdGhlIHZhbHVlcyBhcmUgc3BsaXQgYXBhcnQgaW50byBjbGlwVG9wLCBjbGlwUmlnaHQsIGNsaXBCb3R0b20sIGFuZCBjbGlwTGVmdC4gQWxzbywgaW4gSUU3IGFuZCBlYXJsaWVyLCB0aGUgdmFsdWVzIGluc2lkZSByZWN0KCkgYXJlIHNwYWNlLWRlbGltaXRlZCwgbm90IGNvbW1hLWRlbGltaXRlZC5cblx0XHRcdFx0Y3MgPSB0LmN1cnJlbnRTdHlsZTtcblx0XHRcdFx0ZGVsaW0gPSBfaWVWZXJzIDwgOCA/IFwiIFwiIDogXCIsXCI7XG5cdFx0XHRcdGIgPSBcInJlY3QoXCIgKyBjcy5jbGlwVG9wICsgZGVsaW0gKyBjcy5jbGlwUmlnaHQgKyBkZWxpbSArIGNzLmNsaXBCb3R0b20gKyBkZWxpbSArIGNzLmNsaXBMZWZ0ICsgXCIpXCI7XG5cdFx0XHRcdGUgPSB0aGlzLmZvcm1hdChlKS5zcGxpdChcIixcIikuam9pbihkZWxpbSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRiID0gdGhpcy5mb3JtYXQoX2dldFN0eWxlKHQsIHRoaXMucCwgX2NzLCBmYWxzZSwgdGhpcy5kZmx0KSk7XG5cdFx0XHRcdGUgPSB0aGlzLmZvcm1hdChlKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzLnBhcnNlQ29tcGxleCh0LnN0eWxlLCBiLCBlLCBwdCwgcGx1Z2luKTtcblx0XHR9fSk7XG5cdFx0X3JlZ2lzdGVyQ29tcGxleFNwZWNpYWxQcm9wKFwidGV4dFNoYWRvd1wiLCB7ZGVmYXVsdFZhbHVlOlwiMHB4IDBweCAwcHggIzk5OVwiLCBjb2xvcjp0cnVlLCBtdWx0aTp0cnVlfSk7XG5cdFx0X3JlZ2lzdGVyQ29tcGxleFNwZWNpYWxQcm9wKFwiYXV0b1JvdW5kLHN0cmljdFVuaXRzXCIsIHtwYXJzZXI6ZnVuY3Rpb24odCwgZSwgcCwgY3NzcCwgcHQpIHtyZXR1cm4gcHQ7fX0pOyAvL2p1c3Qgc28gdGhhdCB3ZSBjYW4gaWdub3JlIHRoZXNlIHByb3BlcnRpZXMgKG5vdCB0d2VlbiB0aGVtKVxuXHRcdF9yZWdpc3RlckNvbXBsZXhTcGVjaWFsUHJvcChcImJvcmRlclwiLCB7ZGVmYXVsdFZhbHVlOlwiMHB4IHNvbGlkICMwMDBcIiwgcGFyc2VyOmZ1bmN0aW9uKHQsIGUsIHAsIGNzc3AsIHB0LCBwbHVnaW4pIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMucGFyc2VDb21wbGV4KHQuc3R5bGUsIHRoaXMuZm9ybWF0KF9nZXRTdHlsZSh0LCBcImJvcmRlclRvcFdpZHRoXCIsIF9jcywgZmFsc2UsIFwiMHB4XCIpICsgXCIgXCIgKyBfZ2V0U3R5bGUodCwgXCJib3JkZXJUb3BTdHlsZVwiLCBfY3MsIGZhbHNlLCBcInNvbGlkXCIpICsgXCIgXCIgKyBfZ2V0U3R5bGUodCwgXCJib3JkZXJUb3BDb2xvclwiLCBfY3MsIGZhbHNlLCBcIiMwMDBcIikpLCB0aGlzLmZvcm1hdChlKSwgcHQsIHBsdWdpbik7XG5cdFx0XHR9LCBjb2xvcjp0cnVlLCBmb3JtYXR0ZXI6ZnVuY3Rpb24odikge1xuXHRcdFx0XHR2YXIgYSA9IHYuc3BsaXQoXCIgXCIpO1xuXHRcdFx0XHRyZXR1cm4gYVswXSArIFwiIFwiICsgKGFbMV0gfHwgXCJzb2xpZFwiKSArIFwiIFwiICsgKHYubWF0Y2goX2NvbG9yRXhwKSB8fCBbXCIjMDAwXCJdKVswXTtcblx0XHRcdH19KTtcblx0XHRfcmVnaXN0ZXJDb21wbGV4U3BlY2lhbFByb3AoXCJib3JkZXJXaWR0aFwiLCB7cGFyc2VyOl9nZXRFZGdlUGFyc2VyKFwiYm9yZGVyVG9wV2lkdGgsYm9yZGVyUmlnaHRXaWR0aCxib3JkZXJCb3R0b21XaWR0aCxib3JkZXJMZWZ0V2lkdGhcIil9KTsgLy9GaXJlZm94IGRvZXNuJ3QgcGljayB1cCBvbiBib3JkZXJXaWR0aCBzZXQgaW4gc3R5bGUgc2hlZXRzIChvbmx5IGlubGluZSkuXG5cdFx0X3JlZ2lzdGVyQ29tcGxleFNwZWNpYWxQcm9wKFwiZmxvYXQsY3NzRmxvYXQsc3R5bGVGbG9hdFwiLCB7cGFyc2VyOmZ1bmN0aW9uKHQsIGUsIHAsIGNzc3AsIHB0LCBwbHVnaW4pIHtcblx0XHRcdHZhciBzID0gdC5zdHlsZSxcblx0XHRcdFx0cHJvcCA9IChcImNzc0Zsb2F0XCIgaW4gcykgPyBcImNzc0Zsb2F0XCIgOiBcInN0eWxlRmxvYXRcIjtcblx0XHRcdHJldHVybiBuZXcgQ1NTUHJvcFR3ZWVuKHMsIHByb3AsIDAsIDAsIHB0LCAtMSwgcCwgZmFsc2UsIDAsIHNbcHJvcF0sIGUpO1xuXHRcdH19KTtcblxuXHRcdC8vb3BhY2l0eS1yZWxhdGVkXG5cdFx0dmFyIF9zZXRJRU9wYWNpdHlSYXRpbyA9IGZ1bmN0aW9uKHYpIHtcblx0XHRcdFx0dmFyIHQgPSB0aGlzLnQsIC8vcmVmZXJzIHRvIHRoZSBlbGVtZW50J3Mgc3R5bGUgcHJvcGVydHlcblx0XHRcdFx0XHRmaWx0ZXJzID0gdC5maWx0ZXIgfHwgX2dldFN0eWxlKHRoaXMuZGF0YSwgXCJmaWx0ZXJcIikgfHwgXCJcIixcblx0XHRcdFx0XHR2YWwgPSAodGhpcy5zICsgdGhpcy5jICogdikgfCAwLFxuXHRcdFx0XHRcdHNraXA7XG5cdFx0XHRcdGlmICh2YWwgPT09IDEwMCkgeyAvL2ZvciBvbGRlciB2ZXJzaW9ucyBvZiBJRSB0aGF0IG5lZWQgdG8gdXNlIGEgZmlsdGVyIHRvIGFwcGx5IG9wYWNpdHksIHdlIHNob3VsZCByZW1vdmUgdGhlIGZpbHRlciBpZiBvcGFjaXR5IGhpdHMgMSBpbiBvcmRlciB0byBpbXByb3ZlIHBlcmZvcm1hbmNlLCBidXQgbWFrZSBzdXJlIHRoZXJlIGlzbid0IGEgdHJhbnNmb3JtIChtYXRyaXgpIG9yIGdyYWRpZW50IGluIHRoZSBmaWx0ZXJzLlxuXHRcdFx0XHRcdGlmIChmaWx0ZXJzLmluZGV4T2YoXCJhdHJpeChcIikgPT09IC0xICYmIGZpbHRlcnMuaW5kZXhPZihcInJhZGllbnQoXCIpID09PSAtMSAmJiBmaWx0ZXJzLmluZGV4T2YoXCJvYWRlcihcIikgPT09IC0xKSB7XG5cdFx0XHRcdFx0XHR0LnJlbW92ZUF0dHJpYnV0ZShcImZpbHRlclwiKTtcblx0XHRcdFx0XHRcdHNraXAgPSAoIV9nZXRTdHlsZSh0aGlzLmRhdGEsIFwiZmlsdGVyXCIpKTsgLy9pZiBhIGNsYXNzIGlzIGFwcGxpZWQgdGhhdCBoYXMgYW4gYWxwaGEgZmlsdGVyLCBpdCB3aWxsIHRha2UgZWZmZWN0ICh3ZSBkb24ndCB3YW50IHRoYXQpLCBzbyByZS1hcHBseSBvdXIgYWxwaGEgZmlsdGVyIGluIHRoYXQgY2FzZS4gV2UgbXVzdCBmaXJzdCByZW1vdmUgaXQgYW5kIHRoZW4gY2hlY2suXG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHQuZmlsdGVyID0gZmlsdGVycy5yZXBsYWNlKF9hbHBoYUZpbHRlckV4cCwgXCJcIik7XG5cdFx0XHRcdFx0XHRza2lwID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFza2lwKSB7XG5cdFx0XHRcdFx0aWYgKHRoaXMueG4xKSB7XG5cdFx0XHRcdFx0XHR0LmZpbHRlciA9IGZpbHRlcnMgPSBmaWx0ZXJzIHx8IChcImFscGhhKG9wYWNpdHk9XCIgKyB2YWwgKyBcIilcIik7IC8vd29ya3MgYXJvdW5kIGJ1ZyBpbiBJRTcvOCB0aGF0IHByZXZlbnRzIGNoYW5nZXMgdG8gXCJ2aXNpYmlsaXR5XCIgZnJvbSBiZWluZyBhcHBsaWVkIHByb3Blcmx5IGlmIHRoZSBmaWx0ZXIgaXMgY2hhbmdlZCB0byBhIGRpZmZlcmVudCBhbHBoYSBvbiB0aGUgc2FtZSBmcmFtZS5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGZpbHRlcnMuaW5kZXhPZihcInBhY2l0eVwiKSA9PT0gLTEpIHsgLy9vbmx5IHVzZWQgaWYgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgdGhlIHN0YW5kYXJkIG9wYWNpdHkgc3R5bGUgcHJvcGVydHkgKElFIDcgYW5kIDgpLiBXZSBvbWl0IHRoZSBcIk9cIiB0byBhdm9pZCBjYXNlLXNlbnNpdGl2aXR5IGlzc3Vlc1xuXHRcdFx0XHRcdFx0aWYgKHZhbCAhPT0gMCB8fCAhdGhpcy54bjEpIHsgLy9idWdzIGluIElFNy84IHdvbid0IHJlbmRlciB0aGUgZmlsdGVyIHByb3Blcmx5IGlmIG9wYWNpdHkgaXMgQURERUQgb24gdGhlIHNhbWUgZnJhbWUvcmVuZGVyIGFzIFwidmlzaWJpbGl0eVwiIGNoYW5nZXMgKHRoaXMueG4xIGlzIDEgaWYgdGhpcyB0d2VlbiBpcyBhbiBcImF1dG9BbHBoYVwiIHR3ZWVuKVxuXHRcdFx0XHRcdFx0XHR0LmZpbHRlciA9IGZpbHRlcnMgKyBcIiBhbHBoYShvcGFjaXR5PVwiICsgdmFsICsgXCIpXCI7IC8vd2Ugcm91bmQgdGhlIHZhbHVlIGJlY2F1c2Ugb3RoZXJ3aXNlLCBidWdzIGluIElFNy84IGNhbiBwcmV2ZW50IFwidmlzaWJpbGl0eVwiIGNoYW5nZXMgZnJvbSBiZWluZyBhcHBsaWVkIHByb3Blcmx5LlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0LmZpbHRlciA9IGZpbHRlcnMucmVwbGFjZShfb3BhY2l0eUV4cCwgXCJvcGFjaXR5PVwiICsgdmFsKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0X3JlZ2lzdGVyQ29tcGxleFNwZWNpYWxQcm9wKFwib3BhY2l0eSxhbHBoYSxhdXRvQWxwaGFcIiwge2RlZmF1bHRWYWx1ZTpcIjFcIiwgcGFyc2VyOmZ1bmN0aW9uKHQsIGUsIHAsIGNzc3AsIHB0LCBwbHVnaW4pIHtcblx0XHRcdHZhciBiID0gcGFyc2VGbG9hdChfZ2V0U3R5bGUodCwgXCJvcGFjaXR5XCIsIF9jcywgZmFsc2UsIFwiMVwiKSksXG5cdFx0XHRcdHN0eWxlID0gdC5zdHlsZSxcblx0XHRcdFx0aXNBdXRvQWxwaGEgPSAocCA9PT0gXCJhdXRvQWxwaGFcIik7XG5cdFx0XHRpZiAodHlwZW9mKGUpID09PSBcInN0cmluZ1wiICYmIGUuY2hhckF0KDEpID09PSBcIj1cIikge1xuXHRcdFx0XHRlID0gKChlLmNoYXJBdCgwKSA9PT0gXCItXCIpID8gLTEgOiAxKSAqIHBhcnNlRmxvYXQoZS5zdWJzdHIoMikpICsgYjtcblx0XHRcdH1cblx0XHRcdGlmIChpc0F1dG9BbHBoYSAmJiBiID09PSAxICYmIF9nZXRTdHlsZSh0LCBcInZpc2liaWxpdHlcIiwgX2NzKSA9PT0gXCJoaWRkZW5cIiAmJiBlICE9PSAwKSB7IC8vaWYgdmlzaWJpbGl0eSBpcyBpbml0aWFsbHkgc2V0IHRvIFwiaGlkZGVuXCIsIHdlIHNob3VsZCBpbnRlcnByZXQgdGhhdCBhcyBpbnRlbnQgdG8gbWFrZSBvcGFjaXR5IDAgKGEgY29udmVuaWVuY2UpXG5cdFx0XHRcdGIgPSAwO1xuXHRcdFx0fVxuXHRcdFx0aWYgKF9zdXBwb3J0c09wYWNpdHkpIHtcblx0XHRcdFx0cHQgPSBuZXcgQ1NTUHJvcFR3ZWVuKHN0eWxlLCBcIm9wYWNpdHlcIiwgYiwgZSAtIGIsIHB0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHB0ID0gbmV3IENTU1Byb3BUd2VlbihzdHlsZSwgXCJvcGFjaXR5XCIsIGIgKiAxMDAsIChlIC0gYikgKiAxMDAsIHB0KTtcblx0XHRcdFx0cHQueG4xID0gaXNBdXRvQWxwaGEgPyAxIDogMDsgLy93ZSBuZWVkIHRvIHJlY29yZCB3aGV0aGVyIG9yIG5vdCB0aGlzIGlzIGFuIGF1dG9BbHBoYSBzbyB0aGF0IGluIHRoZSBzZXRSYXRpbygpLCB3ZSBrbm93IHRvIGR1cGxpY2F0ZSB0aGUgc2V0dGluZyBvZiB0aGUgYWxwaGEgaW4gb3JkZXIgdG8gd29yayBhcm91bmQgYSBidWcgaW4gSUU3IGFuZCBJRTggdGhhdCBwcmV2ZW50cyBjaGFuZ2VzIHRvIFwidmlzaWJpbGl0eVwiIGZyb20gdGFraW5nIGVmZmVjdCBpZiB0aGUgZmlsdGVyIGlzIGNoYW5nZWQgdG8gYSBkaWZmZXJlbnQgYWxwaGEob3BhY2l0eSkgYXQgdGhlIHNhbWUgdGltZS4gU2V0dGluZyBpdCB0byB0aGUgU0FNRSB2YWx1ZSBmaXJzdCwgdGhlbiB0aGUgbmV3IHZhbHVlIHdvcmtzIGFyb3VuZCB0aGUgSUU3LzggYnVnLlxuXHRcdFx0XHRzdHlsZS56b29tID0gMTsgLy9oZWxwcyBjb3JyZWN0IGFuIElFIGlzc3VlLlxuXHRcdFx0XHRwdC50eXBlID0gMjtcblx0XHRcdFx0cHQuYiA9IFwiYWxwaGEob3BhY2l0eT1cIiArIHB0LnMgKyBcIilcIjtcblx0XHRcdFx0cHQuZSA9IFwiYWxwaGEob3BhY2l0eT1cIiArIChwdC5zICsgcHQuYykgKyBcIilcIjtcblx0XHRcdFx0cHQuZGF0YSA9IHQ7XG5cdFx0XHRcdHB0LnBsdWdpbiA9IHBsdWdpbjtcblx0XHRcdFx0cHQuc2V0UmF0aW8gPSBfc2V0SUVPcGFjaXR5UmF0aW87XG5cdFx0XHR9XG5cdFx0XHRpZiAoaXNBdXRvQWxwaGEpIHsgLy93ZSBoYXZlIHRvIGNyZWF0ZSB0aGUgXCJ2aXNpYmlsaXR5XCIgUHJvcFR3ZWVuIGFmdGVyIHRoZSBvcGFjaXR5IG9uZSBpbiB0aGUgbGlua2VkIGxpc3Qgc28gdGhhdCB0aGV5IHJ1biBpbiB0aGUgb3JkZXIgdGhhdCB3b3JrcyBwcm9wZXJseSBpbiBJRTggYW5kIGVhcmxpZXJcblx0XHRcdFx0cHQgPSBuZXcgQ1NTUHJvcFR3ZWVuKHN0eWxlLCBcInZpc2liaWxpdHlcIiwgMCwgMCwgcHQsIC0xLCBudWxsLCBmYWxzZSwgMCwgKChiICE9PSAwKSA/IFwiaW5oZXJpdFwiIDogXCJoaWRkZW5cIiksICgoZSA9PT0gMCkgPyBcImhpZGRlblwiIDogXCJpbmhlcml0XCIpKTtcblx0XHRcdFx0cHQueHMwID0gXCJpbmhlcml0XCI7XG5cdFx0XHRcdGNzc3AuX292ZXJ3cml0ZVByb3BzLnB1c2gocHQubik7XG5cdFx0XHRcdGNzc3AuX292ZXJ3cml0ZVByb3BzLnB1c2gocCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcHQ7XG5cdFx0fX0pO1xuXG5cblx0XHR2YXIgX3JlbW92ZVByb3AgPSBmdW5jdGlvbihzLCBwKSB7XG5cdFx0XHRcdGlmIChwKSB7XG5cdFx0XHRcdFx0aWYgKHMucmVtb3ZlUHJvcGVydHkpIHtcblx0XHRcdFx0XHRcdGlmIChwLnN1YnN0cigwLDIpID09PSBcIm1zXCIgfHwgcC5zdWJzdHIoMCw2KSA9PT0gXCJ3ZWJraXRcIikgeyAvL01pY3Jvc29mdCBhbmQgc29tZSBXZWJraXQgYnJvd3NlcnMgZG9uJ3QgY29uZm9ybSB0byB0aGUgc3RhbmRhcmQgb2YgY2FwaXRhbGl6aW5nIHRoZSBmaXJzdCBwcmVmaXggY2hhcmFjdGVyLCBzbyB3ZSBhZGp1c3Qgc28gdGhhdCB3aGVuIHdlIHByZWZpeCB0aGUgY2FwcyB3aXRoIGEgZGFzaCwgaXQncyBjb3JyZWN0IChvdGhlcndpc2UgaXQnZCBiZSBcIm1zLXRyYW5zZm9ybVwiIGluc3RlYWQgb2YgXCItbXMtdHJhbnNmb3JtXCIgZm9yIElFOSwgZm9yIGV4YW1wbGUpXG5cdFx0XHRcdFx0XHRcdHAgPSBcIi1cIiArIHA7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRzLnJlbW92ZVByb3BlcnR5KHAucmVwbGFjZShfY2Fwc0V4cCwgXCItJDFcIikudG9Mb3dlckNhc2UoKSk7XG5cdFx0XHRcdFx0fSBlbHNlIHsgLy9ub3RlOiBvbGQgdmVyc2lvbnMgb2YgSUUgdXNlIFwicmVtb3ZlQXR0cmlidXRlKClcIiBpbnN0ZWFkIG9mIFwicmVtb3ZlUHJvcGVydHkoKVwiXG5cdFx0XHRcdFx0XHRzLnJlbW92ZUF0dHJpYnV0ZShwKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRfc2V0Q2xhc3NOYW1lUmF0aW8gPSBmdW5jdGlvbih2KSB7XG5cdFx0XHRcdHRoaXMudC5fZ3NDbGFzc1BUID0gdGhpcztcblx0XHRcdFx0aWYgKHYgPT09IDEgfHwgdiA9PT0gMCkge1xuXHRcdFx0XHRcdHRoaXMudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCAodiA9PT0gMCkgPyB0aGlzLmIgOiB0aGlzLmUpO1xuXHRcdFx0XHRcdHZhciBtcHQgPSB0aGlzLmRhdGEsIC8vZmlyc3QgTWluaVByb3BUd2VlblxuXHRcdFx0XHRcdFx0cyA9IHRoaXMudC5zdHlsZTtcblx0XHRcdFx0XHR3aGlsZSAobXB0KSB7XG5cdFx0XHRcdFx0XHRpZiAoIW1wdC52KSB7XG5cdFx0XHRcdFx0XHRcdF9yZW1vdmVQcm9wKHMsIG1wdC5wKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHNbbXB0LnBdID0gbXB0LnY7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRtcHQgPSBtcHQuX25leHQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICh2ID09PSAxICYmIHRoaXMudC5fZ3NDbGFzc1BUID09PSB0aGlzKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnQuX2dzQ2xhc3NQVCA9IG51bGw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMudC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSAhPT0gdGhpcy5lKSB7XG5cdFx0XHRcdFx0dGhpcy50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIHRoaXMuZSk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0X3JlZ2lzdGVyQ29tcGxleFNwZWNpYWxQcm9wKFwiY2xhc3NOYW1lXCIsIHtwYXJzZXI6ZnVuY3Rpb24odCwgZSwgcCwgY3NzcCwgcHQsIHBsdWdpbiwgdmFycykge1xuXHRcdFx0dmFyIGIgPSB0LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpIHx8IFwiXCIsIC8vZG9uJ3QgdXNlIHQuY2xhc3NOYW1lIGJlY2F1c2UgaXQgZG9lc24ndCB3b3JrIGNvbnNpc3RlbnRseSBvbiBTVkcgZWxlbWVudHM7IGdldEF0dHJpYnV0ZShcImNsYXNzXCIpIGFuZCBzZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCB2YWx1ZVwiKSBpcyBtb3JlIHJlbGlhYmxlLlxuXHRcdFx0XHRjc3NUZXh0ID0gdC5zdHlsZS5jc3NUZXh0LFxuXHRcdFx0XHRkaWZEYXRhLCBicywgY25wdCwgY25wdExvb2t1cCwgbXB0O1xuXHRcdFx0cHQgPSBjc3NwLl9jbGFzc05hbWVQVCA9IG5ldyBDU1NQcm9wVHdlZW4odCwgcCwgMCwgMCwgcHQsIDIpO1xuXHRcdFx0cHQuc2V0UmF0aW8gPSBfc2V0Q2xhc3NOYW1lUmF0aW87XG5cdFx0XHRwdC5wciA9IC0xMTtcblx0XHRcdF9oYXNQcmlvcml0eSA9IHRydWU7XG5cdFx0XHRwdC5iID0gYjtcblx0XHRcdGJzID0gX2dldEFsbFN0eWxlcyh0LCBfY3MpO1xuXHRcdFx0Ly9pZiB0aGVyZSdzIGEgY2xhc3NOYW1lIHR3ZWVuIGFscmVhZHkgb3BlcmF0aW5nIG9uIHRoZSB0YXJnZXQsIGZvcmNlIGl0IHRvIGl0cyBlbmQgc28gdGhhdCB0aGUgbmVjZXNzYXJ5IGlubGluZSBzdHlsZXMgYXJlIHJlbW92ZWQgYW5kIHRoZSBjbGFzcyBuYW1lIGlzIGFwcGxpZWQgYmVmb3JlIHdlIGRldGVybWluZSB0aGUgZW5kIHN0YXRlICh3ZSBkb24ndCB3YW50IGlubGluZSBzdHlsZXMgaW50ZXJmZXJpbmcgdGhhdCB3ZXJlIHRoZXJlIGp1c3QgZm9yIGNsYXNzLXNwZWNpZmljIHZhbHVlcylcblx0XHRcdGNucHQgPSB0Ll9nc0NsYXNzUFQ7XG5cdFx0XHRpZiAoY25wdCkge1xuXHRcdFx0XHRjbnB0TG9va3VwID0ge307XG5cdFx0XHRcdG1wdCA9IGNucHQuZGF0YTsgLy9maXJzdCBNaW5pUHJvcFR3ZWVuIHdoaWNoIHN0b3JlcyB0aGUgaW5saW5lIHN0eWxlcyAtIHdlIG5lZWQgdG8gZm9yY2UgdGhlc2Ugc28gdGhhdCB0aGUgaW5saW5lIHN0eWxlcyBkb24ndCBjb250YW1pbmF0ZSB0aGluZ3MuIE90aGVyd2lzZSwgdGhlcmUncyBhIHNtYWxsIGNoYW5jZSB0aGF0IGEgdHdlZW4gY291bGQgc3RhcnQgYW5kIHRoZSBpbmxpbmUgdmFsdWVzIG1hdGNoIHRoZSBkZXN0aW5hdGlvbiB2YWx1ZXMgYW5kIHRoZXkgbmV2ZXIgZ2V0IGNsZWFuZWQuXG5cdFx0XHRcdHdoaWxlIChtcHQpIHtcblx0XHRcdFx0XHRjbnB0TG9va3VwW21wdC5wXSA9IDE7XG5cdFx0XHRcdFx0bXB0ID0gbXB0Ll9uZXh0O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNucHQuc2V0UmF0aW8oMSk7XG5cdFx0XHR9XG5cdFx0XHR0Ll9nc0NsYXNzUFQgPSBwdDtcblx0XHRcdHB0LmUgPSAoZS5jaGFyQXQoMSkgIT09IFwiPVwiKSA/IGUgOiBiLnJlcGxhY2UobmV3IFJlZ0V4cChcIlxcXFxzKlxcXFxiXCIgKyBlLnN1YnN0cigyKSArIFwiXFxcXGJcIiksIFwiXCIpICsgKChlLmNoYXJBdCgwKSA9PT0gXCIrXCIpID8gXCIgXCIgKyBlLnN1YnN0cigyKSA6IFwiXCIpO1xuXHRcdFx0dC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBwdC5lKTtcblx0XHRcdGRpZkRhdGEgPSBfY3NzRGlmKHQsIGJzLCBfZ2V0QWxsU3R5bGVzKHQpLCB2YXJzLCBjbnB0TG9va3VwKTtcblx0XHRcdHQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgYik7XG5cdFx0XHRwdC5kYXRhID0gZGlmRGF0YS5maXJzdE1QVDtcblx0XHRcdHQuc3R5bGUuY3NzVGV4dCA9IGNzc1RleHQ7IC8vd2UgcmVjb3JkZWQgY3NzVGV4dCBiZWZvcmUgd2Ugc3dhcHBlZCBjbGFzc2VzIGFuZCByYW4gX2dldEFsbFN0eWxlcygpIGJlY2F1c2UgaW4gY2FzZXMgd2hlbiBhIGNsYXNzTmFtZSB0d2VlbiBpcyBvdmVyd3JpdHRlbiwgd2UgcmVtb3ZlIGFsbCB0aGUgcmVsYXRlZCB0d2VlbmluZyBwcm9wZXJ0aWVzIGZyb20gdGhhdCBjbGFzcyBjaGFuZ2UgKG90aGVyd2lzZSBjbGFzcy1zcGVjaWZpYyBzdHVmZiBjYW4ndCBvdmVycmlkZSBwcm9wZXJ0aWVzIHdlJ3ZlIGRpcmVjdGx5IHNldCBvbiB0aGUgdGFyZ2V0J3Mgc3R5bGUgb2JqZWN0IGR1ZSB0byBzcGVjaWZpY2l0eSkuXG5cdFx0XHRwdCA9IHB0LnhmaXJzdCA9IGNzc3AucGFyc2UodCwgZGlmRGF0YS5kaWZzLCBwdCwgcGx1Z2luKTsgLy93ZSByZWNvcmQgdGhlIENTU1Byb3BUd2VlbiBhcyB0aGUgeGZpcnN0IHNvIHRoYXQgd2UgY2FuIGhhbmRsZSBvdmVyd3JpdGluZyBwcm9wZXJ0bHkgKGlmIFwiY2xhc3NOYW1lXCIgZ2V0cyBvdmVyd3JpdHRlbiwgd2UgbXVzdCBraWxsIGFsbCB0aGUgcHJvcGVydGllcyBhc3NvY2lhdGVkIHdpdGggdGhlIGNsYXNzTmFtZSBwYXJ0IG9mIHRoZSB0d2Vlbiwgc28gd2UgY2FuIGxvb3AgdGhyb3VnaCBmcm9tIHhmaXJzdCB0byB0aGUgcHQgaXRzZWxmKVxuXHRcdFx0cmV0dXJuIHB0O1xuXHRcdH19KTtcblxuXG5cdFx0dmFyIF9zZXRDbGVhclByb3BzUmF0aW8gPSBmdW5jdGlvbih2KSB7XG5cdFx0XHRpZiAodiA9PT0gMSB8fCB2ID09PSAwKSBpZiAodGhpcy5kYXRhLl90b3RhbFRpbWUgPT09IHRoaXMuZGF0YS5fdG90YWxEdXJhdGlvbiAmJiB0aGlzLmRhdGEuZGF0YSAhPT0gXCJpc0Zyb21TdGFydFwiKSB7IC8vdGhpcy5kYXRhIHJlZmVycyB0byB0aGUgdHdlZW4uIE9ubHkgY2xlYXIgYXQgdGhlIEVORCBvZiB0aGUgdHdlZW4gKHJlbWVtYmVyLCBmcm9tKCkgdHdlZW5zIG1ha2UgdGhlIHJhdGlvIGdvIGZyb20gMSB0byAwLCBzbyB3ZSBjYW4ndCBqdXN0IGNoZWNrIHRoYXQgYW5kIGlmIHRoZSB0d2VlbiBpcyB0aGUgemVyby1kdXJhdGlvbiBvbmUgdGhhdCdzIGNyZWF0ZWQgaW50ZXJuYWxseSB0byByZW5kZXIgdGhlIHN0YXJ0aW5nIHZhbHVlcyBpbiBhIGZyb20oKSB0d2VlbiwgaWdub3JlIHRoYXQgYmVjYXVzZSBvdGhlcndpc2UsIGZvciBleGFtcGxlLCBmcm9tKC4uLntoZWlnaHQ6MTAwLCBjbGVhclByb3BzOlwiaGVpZ2h0XCIsIGRlbGF5OjF9KSB3b3VsZCB3aXBlIHRoZSBoZWlnaHQgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgdHdlZW4gYW5kIGFmdGVyIDEgc2Vjb25kLCBpdCdkIGtpY2sgYmFjayBpbikuXG5cdFx0XHRcdHZhciBzID0gdGhpcy50LnN0eWxlLFxuXHRcdFx0XHRcdHRyYW5zZm9ybVBhcnNlID0gX3NwZWNpYWxQcm9wcy50cmFuc2Zvcm0ucGFyc2UsXG5cdFx0XHRcdFx0YSwgcCwgaSwgY2xlYXJUcmFuc2Zvcm0sIHRyYW5zZm9ybTtcblx0XHRcdFx0aWYgKHRoaXMuZSA9PT0gXCJhbGxcIikge1xuXHRcdFx0XHRcdHMuY3NzVGV4dCA9IFwiXCI7XG5cdFx0XHRcdFx0Y2xlYXJUcmFuc2Zvcm0gPSB0cnVlO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGEgPSB0aGlzLmUuc3BsaXQoXCIgXCIpLmpvaW4oXCJcIikuc3BsaXQoXCIsXCIpO1xuXHRcdFx0XHRcdGkgPSBhLmxlbmd0aDtcblx0XHRcdFx0XHR3aGlsZSAoLS1pID4gLTEpIHtcblx0XHRcdFx0XHRcdHAgPSBhW2ldO1xuXHRcdFx0XHRcdFx0aWYgKF9zcGVjaWFsUHJvcHNbcF0pIHtcblx0XHRcdFx0XHRcdFx0aWYgKF9zcGVjaWFsUHJvcHNbcF0ucGFyc2UgPT09IHRyYW5zZm9ybVBhcnNlKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y2xlYXJUcmFuc2Zvcm0gPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdHAgPSAocCA9PT0gXCJ0cmFuc2Zvcm1PcmlnaW5cIikgPyBfdHJhbnNmb3JtT3JpZ2luUHJvcCA6IF9zcGVjaWFsUHJvcHNbcF0ucDsgLy9lbnN1cmVzIHRoYXQgc3BlY2lhbCBwcm9wZXJ0aWVzIHVzZSB0aGUgcHJvcGVyIGJyb3dzZXItc3BlY2lmaWMgcHJvcGVydHkgbmFtZSwgbGlrZSBcInNjYWxlWFwiIG1pZ2h0IGJlIFwiLXdlYmtpdC10cmFuc2Zvcm1cIiBvciBcImJveFNoYWRvd1wiIG1pZ2h0IGJlIFwiLW1vei1ib3gtc2hhZG93XCJcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0X3JlbW92ZVByb3AocywgcCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChjbGVhclRyYW5zZm9ybSkge1xuXHRcdFx0XHRcdF9yZW1vdmVQcm9wKHMsIF90cmFuc2Zvcm1Qcm9wKTtcblx0XHRcdFx0XHR0cmFuc2Zvcm0gPSB0aGlzLnQuX2dzVHJhbnNmb3JtO1xuXHRcdFx0XHRcdGlmICh0cmFuc2Zvcm0pIHtcblx0XHRcdFx0XHRcdGlmICh0cmFuc2Zvcm0uc3ZnKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMudC5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLXN2Zy1vcmlnaW5cIik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRkZWxldGUgdGhpcy50Ll9nc1RyYW5zZm9ybTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXHRcdH07XG5cdFx0X3JlZ2lzdGVyQ29tcGxleFNwZWNpYWxQcm9wKFwiY2xlYXJQcm9wc1wiLCB7cGFyc2VyOmZ1bmN0aW9uKHQsIGUsIHAsIGNzc3AsIHB0KSB7XG5cdFx0XHRwdCA9IG5ldyBDU1NQcm9wVHdlZW4odCwgcCwgMCwgMCwgcHQsIDIpO1xuXHRcdFx0cHQuc2V0UmF0aW8gPSBfc2V0Q2xlYXJQcm9wc1JhdGlvO1xuXHRcdFx0cHQuZSA9IGU7XG5cdFx0XHRwdC5wciA9IC0xMDtcblx0XHRcdHB0LmRhdGEgPSBjc3NwLl90d2Vlbjtcblx0XHRcdF9oYXNQcmlvcml0eSA9IHRydWU7XG5cdFx0XHRyZXR1cm4gcHQ7XG5cdFx0fX0pO1xuXG5cdFx0cCA9IFwiYmV6aWVyLHRocm93UHJvcHMscGh5c2ljc1Byb3BzLHBoeXNpY3MyRFwiLnNwbGl0KFwiLFwiKTtcblx0XHRpID0gcC5sZW5ndGg7XG5cdFx0d2hpbGUgKGktLSkge1xuXHRcdFx0X3JlZ2lzdGVyUGx1Z2luUHJvcChwW2ldKTtcblx0XHR9XG5cblxuXG5cblxuXG5cblxuXHRcdHAgPSBDU1NQbHVnaW4ucHJvdG90eXBlO1xuXHRcdHAuX2ZpcnN0UFQgPSBwLl9sYXN0UGFyc2VkVHJhbnNmb3JtID0gcC5fdHJhbnNmb3JtID0gbnVsbDtcblxuXHRcdC8vZ2V0cyBjYWxsZWQgd2hlbiB0aGUgdHdlZW4gcmVuZGVycyBmb3IgdGhlIGZpcnN0IHRpbWUuIFRoaXMga2lja3MgZXZlcnl0aGluZyBvZmYsIHJlY29yZGluZyBzdGFydC9lbmQgdmFsdWVzLCBldGMuXG5cdFx0cC5fb25Jbml0VHdlZW4gPSBmdW5jdGlvbih0YXJnZXQsIHZhcnMsIHR3ZWVuKSB7XG5cdFx0XHRpZiAoIXRhcmdldC5ub2RlVHlwZSkgeyAvL2NzcyBpcyBvbmx5IGZvciBkb20gZWxlbWVudHNcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5fdGFyZ2V0ID0gdGFyZ2V0O1xuXHRcdFx0dGhpcy5fdHdlZW4gPSB0d2Vlbjtcblx0XHRcdHRoaXMuX3ZhcnMgPSB2YXJzO1xuXHRcdFx0X2F1dG9Sb3VuZCA9IHZhcnMuYXV0b1JvdW5kO1xuXHRcdFx0X2hhc1ByaW9yaXR5ID0gZmFsc2U7XG5cdFx0XHRfc3VmZml4TWFwID0gdmFycy5zdWZmaXhNYXAgfHwgQ1NTUGx1Z2luLnN1ZmZpeE1hcDtcblx0XHRcdF9jcyA9IF9nZXRDb21wdXRlZFN0eWxlKHRhcmdldCwgXCJcIik7XG5cdFx0XHRfb3ZlcndyaXRlUHJvcHMgPSB0aGlzLl9vdmVyd3JpdGVQcm9wcztcblx0XHRcdHZhciBzdHlsZSA9IHRhcmdldC5zdHlsZSxcblx0XHRcdFx0diwgcHQsIHB0MiwgZmlyc3QsIGxhc3QsIG5leHQsIHpJbmRleCwgdHB0LCB0aHJlZUQ7XG5cdFx0XHRpZiAoX3JlcVNhZmFyaUZpeCkgaWYgKHN0eWxlLnpJbmRleCA9PT0gXCJcIikge1xuXHRcdFx0XHR2ID0gX2dldFN0eWxlKHRhcmdldCwgXCJ6SW5kZXhcIiwgX2NzKTtcblx0XHRcdFx0aWYgKHYgPT09IFwiYXV0b1wiIHx8IHYgPT09IFwiXCIpIHtcblx0XHRcdFx0XHQvL2NvcnJlY3RzIGEgYnVnIGluIFtub24tQW5kcm9pZF0gU2FmYXJpIHRoYXQgcHJldmVudHMgaXQgZnJvbSByZXBhaW50aW5nIGVsZW1lbnRzIGluIHRoZWlyIG5ldyBwb3NpdGlvbnMgaWYgdGhleSBkb24ndCBoYXZlIGEgekluZGV4IHNldC4gV2UgYWxzbyBjYW4ndCBqdXN0IGFwcGx5IHRoaXMgaW5zaWRlIF9wYXJzZVRyYW5zZm9ybSgpIGJlY2F1c2UgYW55dGhpbmcgdGhhdCdzIG1vdmVkIGluIGFueSB3YXkgKGxpa2UgdXNpbmcgXCJsZWZ0XCIgb3IgXCJ0b3BcIiBpbnN0ZWFkIG9mIHRyYW5zZm9ybXMgbGlrZSBcInhcIiBhbmQgXCJ5XCIpIGNhbiBiZSBhZmZlY3RlZCwgc28gaXQgaXMgYmVzdCB0byBlbnN1cmUgdGhhdCBhbnl0aGluZyB0aGF0J3MgdHdlZW5pbmcgaGFzIGEgei1pbmRleC4gU2V0dGluZyBcIldlYmtpdFBlcnNwZWN0aXZlXCIgdG8gYSBub24temVybyB2YWx1ZSB3b3JrZWQgdG9vIGV4Y2VwdCB0aGF0IG9uIGlPUyBTYWZhcmkgdGhpbmdzIHdvdWxkIGZsaWNrZXIgcmFuZG9tbHkuIFBsdXMgekluZGV4IGlzIGxlc3MgbWVtb3J5LWludGVuc2l2ZS5cblx0XHRcdFx0XHR0aGlzLl9hZGRMYXp5U2V0KHN0eWxlLCBcInpJbmRleFwiLCAwKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAodHlwZW9mKHZhcnMpID09PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRcdGZpcnN0ID0gc3R5bGUuY3NzVGV4dDtcblx0XHRcdFx0diA9IF9nZXRBbGxTdHlsZXModGFyZ2V0LCBfY3MpO1xuXHRcdFx0XHRzdHlsZS5jc3NUZXh0ID0gZmlyc3QgKyBcIjtcIiArIHZhcnM7XG5cdFx0XHRcdHYgPSBfY3NzRGlmKHRhcmdldCwgdiwgX2dldEFsbFN0eWxlcyh0YXJnZXQpKS5kaWZzO1xuXHRcdFx0XHRpZiAoIV9zdXBwb3J0c09wYWNpdHkgJiYgX29wYWNpdHlWYWxFeHAudGVzdCh2YXJzKSkge1xuXHRcdFx0XHRcdHYub3BhY2l0eSA9IHBhcnNlRmxvYXQoIFJlZ0V4cC4kMSApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZhcnMgPSB2O1xuXHRcdFx0XHRzdHlsZS5jc3NUZXh0ID0gZmlyc3Q7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh2YXJzLmNsYXNzTmFtZSkgeyAvL2NsYXNzTmFtZSB0d2VlbnMgd2lsbCBjb21iaW5lIGFueSBkaWZmZXJlbmNlcyB0aGV5IGZpbmQgaW4gdGhlIGNzcyB3aXRoIHRoZSB2YXJzIHRoYXQgYXJlIHBhc3NlZCBpbiwgc28ge2NsYXNzTmFtZTpcIm15Q2xhc3NcIiwgc2NhbGU6MC41LCBsZWZ0OjIwfSB3b3VsZCB3b3JrLlxuXHRcdFx0XHR0aGlzLl9maXJzdFBUID0gcHQgPSBfc3BlY2lhbFByb3BzLmNsYXNzTmFtZS5wYXJzZSh0YXJnZXQsIHZhcnMuY2xhc3NOYW1lLCBcImNsYXNzTmFtZVwiLCB0aGlzLCBudWxsLCBudWxsLCB2YXJzKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuX2ZpcnN0UFQgPSBwdCA9IHRoaXMucGFyc2UodGFyZ2V0LCB2YXJzLCBudWxsKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMuX3RyYW5zZm9ybVR5cGUpIHtcblx0XHRcdFx0dGhyZWVEID0gKHRoaXMuX3RyYW5zZm9ybVR5cGUgPT09IDMpO1xuXHRcdFx0XHRpZiAoIV90cmFuc2Zvcm1Qcm9wKSB7XG5cdFx0XHRcdFx0c3R5bGUuem9vbSA9IDE7IC8vaGVscHMgY29ycmVjdCBhbiBJRSBpc3N1ZS5cblx0XHRcdFx0fSBlbHNlIGlmIChfaXNTYWZhcmkpIHtcblx0XHRcdFx0XHRfcmVxU2FmYXJpRml4ID0gdHJ1ZTtcblx0XHRcdFx0XHQvL2lmIHpJbmRleCBpc24ndCBzZXQsIGlPUyBTYWZhcmkgZG9lc24ndCByZXBhaW50IHRoaW5ncyBjb3JyZWN0bHkgc29tZXRpbWVzIChzZWVtaW5nbHkgYXQgcmFuZG9tKS5cblx0XHRcdFx0XHRpZiAoc3R5bGUuekluZGV4ID09PSBcIlwiKSB7XG5cdFx0XHRcdFx0XHR6SW5kZXggPSBfZ2V0U3R5bGUodGFyZ2V0LCBcInpJbmRleFwiLCBfY3MpO1xuXHRcdFx0XHRcdFx0aWYgKHpJbmRleCA9PT0gXCJhdXRvXCIgfHwgekluZGV4ID09PSBcIlwiKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuX2FkZExhenlTZXQoc3R5bGUsIFwiekluZGV4XCIsIDApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvL1NldHRpbmcgV2Via2l0QmFja2ZhY2VWaXNpYmlsaXR5IGNvcnJlY3RzIDMgYnVnczpcblx0XHRcdFx0XHQvLyAxKSBbbm9uLUFuZHJvaWRdIFNhZmFyaSBza2lwcyByZW5kZXJpbmcgY2hhbmdlcyB0byBcInRvcFwiIGFuZCBcImxlZnRcIiB0aGF0IGFyZSBtYWRlIG9uIHRoZSBzYW1lIGZyYW1lL3JlbmRlciBhcyBhIHRyYW5zZm9ybSB1cGRhdGUuXG5cdFx0XHRcdFx0Ly8gMikgaU9TIFNhZmFyaSBzb21ldGltZXMgbmVnbGVjdHMgdG8gcmVwYWludCBlbGVtZW50cyBpbiB0aGVpciBuZXcgcG9zaXRpb25zLiBTZXR0aW5nIFwiV2Via2l0UGVyc3BlY3RpdmVcIiB0byBhIG5vbi16ZXJvIHZhbHVlIHdvcmtlZCB0b28gZXhjZXB0IHRoYXQgb24gaU9TIFNhZmFyaSB0aGluZ3Mgd291bGQgZmxpY2tlciByYW5kb21seS5cblx0XHRcdFx0XHQvLyAzKSBTYWZhcmkgc29tZXRpbWVzIGRpc3BsYXllZCBvZGQgYXJ0aWZhY3RzIHdoZW4gdHdlZW5pbmcgdGhlIHRyYW5zZm9ybSAob3IgV2Via2l0VHJhbnNmb3JtKSBwcm9wZXJ0eSwgbGlrZSBnaG9zdHMgb2YgdGhlIGVkZ2VzIG9mIHRoZSBlbGVtZW50IHJlbWFpbmVkLiBEZWZpbml0ZWx5IGEgYnJvd3NlciBidWcuXG5cdFx0XHRcdFx0Ly9Ob3RlOiB3ZSBhbGxvdyB0aGUgdXNlciB0byBvdmVycmlkZSB0aGUgYXV0by1zZXR0aW5nIGJ5IGRlZmluaW5nIFdlYmtpdEJhY2tmYWNlVmlzaWJpbGl0eSBpbiB0aGUgdmFycyBvZiB0aGUgdHdlZW4uXG5cdFx0XHRcdFx0aWYgKF9pc1NhZmFyaUxUNikge1xuXHRcdFx0XHRcdFx0dGhpcy5fYWRkTGF6eVNldChzdHlsZSwgXCJXZWJraXRCYWNrZmFjZVZpc2liaWxpdHlcIiwgdGhpcy5fdmFycy5XZWJraXRCYWNrZmFjZVZpc2liaWxpdHkgfHwgKHRocmVlRCA/IFwidmlzaWJsZVwiIDogXCJoaWRkZW5cIikpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRwdDIgPSBwdDtcblx0XHRcdFx0d2hpbGUgKHB0MiAmJiBwdDIuX25leHQpIHtcblx0XHRcdFx0XHRwdDIgPSBwdDIuX25leHQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0dHB0ID0gbmV3IENTU1Byb3BUd2Vlbih0YXJnZXQsIFwidHJhbnNmb3JtXCIsIDAsIDAsIG51bGwsIDIpO1xuXHRcdFx0XHR0aGlzLl9saW5rQ1NTUCh0cHQsIG51bGwsIHB0Mik7XG5cdFx0XHRcdHRwdC5zZXRSYXRpbyA9IF90cmFuc2Zvcm1Qcm9wID8gX3NldFRyYW5zZm9ybVJhdGlvIDogX3NldElFVHJhbnNmb3JtUmF0aW87XG5cdFx0XHRcdHRwdC5kYXRhID0gdGhpcy5fdHJhbnNmb3JtIHx8IF9nZXRUcmFuc2Zvcm0odGFyZ2V0LCBfY3MsIHRydWUpO1xuXHRcdFx0XHR0cHQudHdlZW4gPSB0d2Vlbjtcblx0XHRcdFx0dHB0LnByID0gLTE7IC8vZW5zdXJlcyB0aGF0IHRoZSB0cmFuc2Zvcm1zIGdldCBhcHBsaWVkIGFmdGVyIHRoZSBjb21wb25lbnRzIGFyZSB1cGRhdGVkLlxuXHRcdFx0XHRfb3ZlcndyaXRlUHJvcHMucG9wKCk7IC8vd2UgZG9uJ3Qgd2FudCB0byBmb3JjZSB0aGUgb3ZlcndyaXRlIG9mIGFsbCBcInRyYW5zZm9ybVwiIHR3ZWVucyBvZiB0aGUgdGFyZ2V0IC0gd2Ugb25seSBjYXJlIGFib3V0IGluZGl2aWR1YWwgdHJhbnNmb3JtIHByb3BlcnRpZXMgbGlrZSBzY2FsZVgsIHJvdGF0aW9uLCBldGMuIFRoZSBDU1NQcm9wVHdlZW4gY29uc3RydWN0b3IgYXV0b21hdGljYWxseSBhZGRzIHRoZSBwcm9wZXJ0eSB0byBfb3ZlcndyaXRlUHJvcHMgd2hpY2ggaXMgd2h5IHdlIG5lZWQgdG8gcG9wKCkgaGVyZS5cblx0XHRcdH1cblxuXHRcdFx0aWYgKF9oYXNQcmlvcml0eSkge1xuXHRcdFx0XHQvL3Jlb3JkZXJzIHRoZSBsaW5rZWQgbGlzdCBpbiBvcmRlciBvZiBwciAocHJpb3JpdHkpXG5cdFx0XHRcdHdoaWxlIChwdCkge1xuXHRcdFx0XHRcdG5leHQgPSBwdC5fbmV4dDtcblx0XHRcdFx0XHRwdDIgPSBmaXJzdDtcblx0XHRcdFx0XHR3aGlsZSAocHQyICYmIHB0Mi5wciA+IHB0LnByKSB7XG5cdFx0XHRcdFx0XHRwdDIgPSBwdDIuX25leHQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICgocHQuX3ByZXYgPSBwdDIgPyBwdDIuX3ByZXYgOiBsYXN0KSkge1xuXHRcdFx0XHRcdFx0cHQuX3ByZXYuX25leHQgPSBwdDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Zmlyc3QgPSBwdDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKChwdC5fbmV4dCA9IHB0MikpIHtcblx0XHRcdFx0XHRcdHB0Mi5fcHJldiA9IHB0O1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRsYXN0ID0gcHQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHB0ID0gbmV4dDtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLl9maXJzdFBUID0gZmlyc3Q7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9O1xuXG5cblx0XHRwLnBhcnNlID0gZnVuY3Rpb24odGFyZ2V0LCB2YXJzLCBwdCwgcGx1Z2luKSB7XG5cdFx0XHR2YXIgc3R5bGUgPSB0YXJnZXQuc3R5bGUsXG5cdFx0XHRcdHAsIHNwLCBibiwgZW4sIGJzLCBlcywgYnNmeCwgZXNmeCwgaXNTdHIsIHJlbDtcblx0XHRcdGZvciAocCBpbiB2YXJzKSB7XG5cdFx0XHRcdGVzID0gdmFyc1twXTsgLy9lbmRpbmcgdmFsdWUgc3RyaW5nXG5cdFx0XHRcdHNwID0gX3NwZWNpYWxQcm9wc1twXTsgLy9TcGVjaWFsUHJvcCBsb29rdXAuXG5cdFx0XHRcdGlmIChzcCkge1xuXHRcdFx0XHRcdHB0ID0gc3AucGFyc2UodGFyZ2V0LCBlcywgcCwgdGhpcywgcHQsIHBsdWdpbiwgdmFycyk7XG5cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRicyA9IF9nZXRTdHlsZSh0YXJnZXQsIHAsIF9jcykgKyBcIlwiO1xuXHRcdFx0XHRcdGlzU3RyID0gKHR5cGVvZihlcykgPT09IFwic3RyaW5nXCIpO1xuXHRcdFx0XHRcdGlmIChwID09PSBcImNvbG9yXCIgfHwgcCA9PT0gXCJmaWxsXCIgfHwgcCA9PT0gXCJzdHJva2VcIiB8fCBwLmluZGV4T2YoXCJDb2xvclwiKSAhPT0gLTEgfHwgKGlzU3RyICYmIF9yZ2Joc2xFeHAudGVzdChlcykpKSB7IC8vT3BlcmEgdXNlcyBiYWNrZ3JvdW5kOiB0byBkZWZpbmUgY29sb3Igc29tZXRpbWVzIGluIGFkZGl0aW9uIHRvIGJhY2tncm91bmRDb2xvcjpcblx0XHRcdFx0XHRcdGlmICghaXNTdHIpIHtcblx0XHRcdFx0XHRcdFx0ZXMgPSBfcGFyc2VDb2xvcihlcyk7XG5cdFx0XHRcdFx0XHRcdGVzID0gKChlcy5sZW5ndGggPiAzKSA/IFwicmdiYShcIiA6IFwicmdiKFwiKSArIGVzLmpvaW4oXCIsXCIpICsgXCIpXCI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRwdCA9IF9wYXJzZUNvbXBsZXgoc3R5bGUsIHAsIGJzLCBlcywgdHJ1ZSwgXCJ0cmFuc3BhcmVudFwiLCBwdCwgMCwgcGx1Z2luKTtcblxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoaXNTdHIgJiYgKGVzLmluZGV4T2YoXCIgXCIpICE9PSAtMSB8fCBlcy5pbmRleE9mKFwiLFwiKSAhPT0gLTEpKSB7XG5cdFx0XHRcdFx0XHRwdCA9IF9wYXJzZUNvbXBsZXgoc3R5bGUsIHAsIGJzLCBlcywgdHJ1ZSwgbnVsbCwgcHQsIDAsIHBsdWdpbik7XG5cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Ym4gPSBwYXJzZUZsb2F0KGJzKTtcblx0XHRcdFx0XHRcdGJzZnggPSAoYm4gfHwgYm4gPT09IDApID8gYnMuc3Vic3RyKChibiArIFwiXCIpLmxlbmd0aCkgOiBcIlwiOyAvL3JlbWVtYmVyLCBicyBjb3VsZCBiZSBub24tbnVtZXJpYyBsaWtlIFwibm9ybWFsXCIgZm9yIGZvbnRXZWlnaHQsIHNvIHdlIHNob3VsZCBkZWZhdWx0IHRvIGEgYmxhbmsgc3VmZml4IGluIHRoYXQgY2FzZS5cblxuXHRcdFx0XHRcdFx0aWYgKGJzID09PSBcIlwiIHx8IGJzID09PSBcImF1dG9cIikge1xuXHRcdFx0XHRcdFx0XHRpZiAocCA9PT0gXCJ3aWR0aFwiIHx8IHAgPT09IFwiaGVpZ2h0XCIpIHtcblx0XHRcdFx0XHRcdFx0XHRibiA9IF9nZXREaW1lbnNpb24odGFyZ2V0LCBwLCBfY3MpO1xuXHRcdFx0XHRcdFx0XHRcdGJzZnggPSBcInB4XCI7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAocCA9PT0gXCJsZWZ0XCIgfHwgcCA9PT0gXCJ0b3BcIikge1xuXHRcdFx0XHRcdFx0XHRcdGJuID0gX2NhbGN1bGF0ZU9mZnNldCh0YXJnZXQsIHAsIF9jcyk7XG5cdFx0XHRcdFx0XHRcdFx0YnNmeCA9IFwicHhcIjtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRibiA9IChwICE9PSBcIm9wYWNpdHlcIikgPyAwIDogMTtcblx0XHRcdFx0XHRcdFx0XHRic2Z4ID0gXCJcIjtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRyZWwgPSAoaXNTdHIgJiYgZXMuY2hhckF0KDEpID09PSBcIj1cIik7XG5cdFx0XHRcdFx0XHRpZiAocmVsKSB7XG5cdFx0XHRcdFx0XHRcdGVuID0gcGFyc2VJbnQoZXMuY2hhckF0KDApICsgXCIxXCIsIDEwKTtcblx0XHRcdFx0XHRcdFx0ZXMgPSBlcy5zdWJzdHIoMik7XG5cdFx0XHRcdFx0XHRcdGVuICo9IHBhcnNlRmxvYXQoZXMpO1xuXHRcdFx0XHRcdFx0XHRlc2Z4ID0gZXMucmVwbGFjZShfc3VmZml4RXhwLCBcIlwiKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGVuID0gcGFyc2VGbG9hdChlcyk7XG5cdFx0XHRcdFx0XHRcdGVzZnggPSBpc1N0ciA/IGVzLnJlcGxhY2UoX3N1ZmZpeEV4cCwgXCJcIikgOiBcIlwiO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRpZiAoZXNmeCA9PT0gXCJcIikge1xuXHRcdFx0XHRcdFx0XHRlc2Z4ID0gKHAgaW4gX3N1ZmZpeE1hcCkgPyBfc3VmZml4TWFwW3BdIDogYnNmeDsgLy9wb3B1bGF0ZSB0aGUgZW5kIHN1ZmZpeCwgcHJpb3JpdGl6aW5nIHRoZSBtYXAsIHRoZW4gaWYgbm9uZSBpcyBmb3VuZCwgdXNlIHRoZSBiZWdpbm5pbmcgc3VmZml4LlxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRlcyA9IChlbiB8fCBlbiA9PT0gMCkgPyAocmVsID8gZW4gKyBibiA6IGVuKSArIGVzZnggOiB2YXJzW3BdOyAvL2Vuc3VyZXMgdGhhdCBhbnkgKz0gb3IgLT0gcHJlZml4ZXMgYXJlIHRha2VuIGNhcmUgb2YuIFJlY29yZCB0aGUgZW5kIHZhbHVlIGJlZm9yZSBub3JtYWxpemluZyB0aGUgc3VmZml4IGJlY2F1c2Ugd2UgYWx3YXlzIHdhbnQgdG8gZW5kIHRoZSB0d2VlbiBvbiBleGFjdGx5IHdoYXQgdGhleSBpbnRlbmRlZCBldmVuIGlmIGl0IGRvZXNuJ3QgbWF0Y2ggdGhlIGJlZ2lubmluZyB2YWx1ZSdzIHN1ZmZpeC5cblxuXHRcdFx0XHRcdFx0Ly9pZiB0aGUgYmVnaW5uaW5nL2VuZGluZyBzdWZmaXhlcyBkb24ndCBtYXRjaCwgbm9ybWFsaXplIHRoZW0uLi5cblx0XHRcdFx0XHRcdGlmIChic2Z4ICE9PSBlc2Z4KSBpZiAoZXNmeCAhPT0gXCJcIikgaWYgKGVuIHx8IGVuID09PSAwKSBpZiAoYm4pIHsgLy9ub3RlOiBpZiB0aGUgYmVnaW5uaW5nIHZhbHVlIChibikgaXMgMCwgd2UgZG9uJ3QgbmVlZCB0byBjb252ZXJ0IHVuaXRzIVxuXHRcdFx0XHRcdFx0XHRibiA9IF9jb252ZXJ0VG9QaXhlbHModGFyZ2V0LCBwLCBibiwgYnNmeCk7XG5cdFx0XHRcdFx0XHRcdGlmIChlc2Z4ID09PSBcIiVcIikge1xuXHRcdFx0XHRcdFx0XHRcdGJuIC89IF9jb252ZXJ0VG9QaXhlbHModGFyZ2V0LCBwLCAxMDAsIFwiJVwiKSAvIDEwMDtcblx0XHRcdFx0XHRcdFx0XHRpZiAodmFycy5zdHJpY3RVbml0cyAhPT0gdHJ1ZSkgeyAvL3NvbWUgYnJvd3NlcnMgcmVwb3J0IG9ubHkgXCJweFwiIHZhbHVlcyBpbnN0ZWFkIG9mIGFsbG93aW5nIFwiJVwiIHdpdGggZ2V0Q29tcHV0ZWRTdHlsZSgpLCBzbyB3ZSBhc3N1bWUgdGhhdCBpZiB3ZSdyZSB0d2VlbmluZyB0byBhICUsIHdlIHNob3VsZCBzdGFydCB0aGVyZSB0b28gdW5sZXNzIHN0cmljdFVuaXRzOnRydWUgaXMgZGVmaW5lZC4gVGhpcyBhcHByb2FjaCBpcyBwYXJ0aWN1bGFybHkgdXNlZnVsIGZvciByZXNwb25zaXZlIGRlc2lnbnMgdGhhdCB1c2UgZnJvbSgpIHR3ZWVucy5cblx0XHRcdFx0XHRcdFx0XHRcdGJzID0gYm4gKyBcIiVcIjtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChlc2Z4ID09PSBcImVtXCIpIHtcblx0XHRcdFx0XHRcdFx0XHRibiAvPSBfY29udmVydFRvUGl4ZWxzKHRhcmdldCwgcCwgMSwgXCJlbVwiKTtcblxuXHRcdFx0XHRcdFx0XHQvL290aGVyd2lzZSBjb252ZXJ0IHRvIHBpeGVscy5cblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChlc2Z4ICE9PSBcInB4XCIpIHtcblx0XHRcdFx0XHRcdFx0XHRlbiA9IF9jb252ZXJ0VG9QaXhlbHModGFyZ2V0LCBwLCBlbiwgZXNmeCk7XG5cdFx0XHRcdFx0XHRcdFx0ZXNmeCA9IFwicHhcIjsgLy93ZSBkb24ndCB1c2UgYnNmeCBhZnRlciB0aGlzLCBzbyB3ZSBkb24ndCBuZWVkIHRvIHNldCBpdCB0byBweCB0b28uXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0aWYgKHJlbCkgaWYgKGVuIHx8IGVuID09PSAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0ZXMgPSAoZW4gKyBibikgKyBlc2Z4OyAvL3RoZSBjaGFuZ2VzIHdlIG1hZGUgYWZmZWN0IHJlbGF0aXZlIGNhbGN1bGF0aW9ucywgc28gYWRqdXN0IHRoZSBlbmQgdmFsdWUgaGVyZS5cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRpZiAocmVsKSB7XG5cdFx0XHRcdFx0XHRcdGVuICs9IGJuO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRpZiAoKGJuIHx8IGJuID09PSAwKSAmJiAoZW4gfHwgZW4gPT09IDApKSB7IC8vZmFzdGVyIHRoYW4gaXNOYU4oKS4gQWxzbywgcHJldmlvdXNseSB3ZSByZXF1aXJlZCBlbiAhPT0gYm4gYnV0IHRoYXQgZG9lc24ndCByZWFsbHkgZ2FpbiBtdWNoIHBlcmZvcm1hbmNlIGFuZCBpdCBwcmV2ZW50cyBfcGFyc2VUb1Byb3h5KCkgZnJvbSB3b3JraW5nIHByb3Blcmx5IGlmIGJlZ2lubmluZyBhbmQgZW5kaW5nIHZhbHVlcyBtYXRjaCBidXQgbmVlZCB0byBnZXQgdHdlZW5lZCBieSBhbiBleHRlcm5hbCBwbHVnaW4gYW55d2F5LiBGb3IgZXhhbXBsZSwgYSBiZXppZXIgdHdlZW4gd2hlcmUgdGhlIHRhcmdldCBzdGFydHMgYXQgbGVmdDowIGFuZCBoYXMgdGhlc2UgcG9pbnRzOiBbe2xlZnQ6NTB9LHtsZWZ0OjB9XSB3b3VsZG4ndCB3b3JrIHByb3Blcmx5IGJlY2F1c2Ugd2hlbiBwYXJzaW5nIHRoZSBsYXN0IHBvaW50LCBpdCdkIG1hdGNoIHRoZSBmaXJzdCAoY3VycmVudCkgb25lIGFuZCBhIG5vbi10d2VlbmluZyBDU1NQcm9wVHdlZW4gd291bGQgYmUgcmVjb3JkZWQgd2hlbiB3ZSBhY3R1YWxseSBuZWVkIGEgbm9ybWFsIHR3ZWVuICh0eXBlOjApIHNvIHRoYXQgdGhpbmdzIGdldCB1cGRhdGVkIGR1cmluZyB0aGUgdHdlZW4gcHJvcGVybHkuXG5cdFx0XHRcdFx0XHRcdHB0ID0gbmV3IENTU1Byb3BUd2VlbihzdHlsZSwgcCwgYm4sIGVuIC0gYm4sIHB0LCAwLCBwLCAoX2F1dG9Sb3VuZCAhPT0gZmFsc2UgJiYgKGVzZnggPT09IFwicHhcIiB8fCBwID09PSBcInpJbmRleFwiKSksIDAsIGJzLCBlcyk7XG5cdFx0XHRcdFx0XHRcdHB0LnhzMCA9IGVzZng7XG5cdFx0XHRcdFx0XHRcdC8vREVCVUc6IF9sb2coXCJ0d2VlbiBcIitwK1wiIGZyb20gXCIrcHQuYitcIiAoXCIrYm4rZXNmeCtcIikgdG8gXCIrcHQuZStcIiB3aXRoIHN1ZmZpeDogXCIrcHQueHMwKTtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoc3R5bGVbcF0gPT09IHVuZGVmaW5lZCB8fCAhZXMgJiYgKGVzICsgXCJcIiA9PT0gXCJOYU5cIiB8fCBlcyA9PSBudWxsKSkge1xuXHRcdFx0XHRcdFx0XHRfbG9nKFwiaW52YWxpZCBcIiArIHAgKyBcIiB0d2VlbiB2YWx1ZTogXCIgKyB2YXJzW3BdKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHB0ID0gbmV3IENTU1Byb3BUd2VlbihzdHlsZSwgcCwgZW4gfHwgYm4gfHwgMCwgMCwgcHQsIC0xLCBwLCBmYWxzZSwgMCwgYnMsIGVzKTtcblx0XHRcdFx0XHRcdFx0cHQueHMwID0gKGVzID09PSBcIm5vbmVcIiAmJiAocCA9PT0gXCJkaXNwbGF5XCIgfHwgcC5pbmRleE9mKFwiU3R5bGVcIikgIT09IC0xKSkgPyBicyA6IGVzOyAvL2ludGVybWVkaWF0ZSB2YWx1ZSBzaG91bGQgdHlwaWNhbGx5IGJlIHNldCBpbW1lZGlhdGVseSAoZW5kIHZhbHVlKSBleGNlcHQgZm9yIFwiZGlzcGxheVwiIG9yIHRoaW5ncyBsaWtlIGJvcmRlclRvcFN0eWxlLCBib3JkZXJCb3R0b21TdHlsZSwgZXRjLiB3aGljaCBzaG91bGQgdXNlIHRoZSBiZWdpbm5pbmcgdmFsdWUgZHVyaW5nIHRoZSB0d2Vlbi5cblx0XHRcdFx0XHRcdFx0Ly9ERUJVRzogX2xvZyhcIm5vbi10d2VlbmluZyB2YWx1ZSBcIitwK1wiOiBcIitwdC54czApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAocGx1Z2luKSBpZiAocHQgJiYgIXB0LnBsdWdpbikge1xuXHRcdFx0XHRcdHB0LnBsdWdpbiA9IHBsdWdpbjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHB0O1xuXHRcdH07XG5cblxuXHRcdC8vZ2V0cyBjYWxsZWQgZXZlcnkgdGltZSB0aGUgdHdlZW4gdXBkYXRlcywgcGFzc2luZyB0aGUgbmV3IHJhdGlvICh0eXBpY2FsbHkgYSB2YWx1ZSBiZXR3ZWVuIDAgYW5kIDEsIGJ1dCBub3QgYWx3YXlzIChmb3IgZXhhbXBsZSwgaWYgYW4gRWxhc3RpYy5lYXNlT3V0IGlzIHVzZWQsIHRoZSB2YWx1ZSBjYW4ganVtcCBhYm92ZSAxIG1pZC10d2VlbikuIEl0IHdpbGwgYWx3YXlzIHN0YXJ0IGFuZCAwIGFuZCBlbmQgYXQgMS5cblx0XHRwLnNldFJhdGlvID0gZnVuY3Rpb24odikge1xuXHRcdFx0dmFyIHB0ID0gdGhpcy5fZmlyc3RQVCxcblx0XHRcdFx0bWluID0gMC4wMDAwMDEsXG5cdFx0XHRcdHZhbCwgc3RyLCBpO1xuXHRcdFx0Ly9hdCB0aGUgZW5kIG9mIHRoZSB0d2Vlbiwgd2Ugc2V0IHRoZSB2YWx1ZXMgdG8gZXhhY3RseSB3aGF0IHdlIHJlY2VpdmVkIGluIG9yZGVyIHRvIG1ha2Ugc3VyZSBub24tdHdlZW5pbmcgdmFsdWVzIChsaWtlIFwicG9zaXRpb25cIiBvciBcImZsb2F0XCIgb3Igd2hhdGV2ZXIpIGFyZSBzZXQgYW5kIHNvIHRoYXQgaWYgdGhlIGJlZ2lubmluZy9lbmRpbmcgc3VmZml4ZXMgKHVuaXRzKSBkaWRuJ3QgbWF0Y2ggYW5kIHdlIG5vcm1hbGl6ZWQgdG8gcHgsIHRoZSB2YWx1ZSB0aGF0IHRoZSB1c2VyIHBhc3NlZCBpbiBpcyB1c2VkIGhlcmUuIFdlIGNoZWNrIHRvIHNlZSBpZiB0aGUgdHdlZW4gaXMgYXQgaXRzIGJlZ2lubmluZyBpbiBjYXNlIGl0J3MgYSBmcm9tKCkgdHdlZW4gaW4gd2hpY2ggY2FzZSB0aGUgcmF0aW8gd2lsbCBhY3R1YWxseSBnbyBmcm9tIDEgdG8gMCBvdmVyIHRoZSBjb3Vyc2Ugb2YgdGhlIHR3ZWVuIChiYWNrd2FyZHMpLlxuXHRcdFx0aWYgKHYgPT09IDEgJiYgKHRoaXMuX3R3ZWVuLl90aW1lID09PSB0aGlzLl90d2Vlbi5fZHVyYXRpb24gfHwgdGhpcy5fdHdlZW4uX3RpbWUgPT09IDApKSB7XG5cdFx0XHRcdHdoaWxlIChwdCkge1xuXHRcdFx0XHRcdGlmIChwdC50eXBlICE9PSAyKSB7XG5cdFx0XHRcdFx0XHRwdC50W3B0LnBdID0gcHQuZTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cHQuc2V0UmF0aW8odik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHB0ID0gcHQuX25leHQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0fSBlbHNlIGlmICh2IHx8ICEodGhpcy5fdHdlZW4uX3RpbWUgPT09IHRoaXMuX3R3ZWVuLl9kdXJhdGlvbiB8fCB0aGlzLl90d2Vlbi5fdGltZSA9PT0gMCkgfHwgdGhpcy5fdHdlZW4uX3Jhd1ByZXZUaW1lID09PSAtMC4wMDAwMDEpIHtcblx0XHRcdFx0d2hpbGUgKHB0KSB7XG5cdFx0XHRcdFx0dmFsID0gcHQuYyAqIHYgKyBwdC5zO1xuXHRcdFx0XHRcdGlmIChwdC5yKSB7XG5cdFx0XHRcdFx0XHR2YWwgPSBNYXRoLnJvdW5kKHZhbCk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmICh2YWwgPCBtaW4pIGlmICh2YWwgPiAtbWluKSB7XG5cdFx0XHRcdFx0XHR2YWwgPSAwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoIXB0LnR5cGUpIHtcblx0XHRcdFx0XHRcdHB0LnRbcHQucF0gPSB2YWwgKyBwdC54czA7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChwdC50eXBlID09PSAxKSB7IC8vY29tcGxleCB2YWx1ZSAob25lIHRoYXQgdHlwaWNhbGx5IGhhcyBtdWx0aXBsZSBudW1iZXJzIGluc2lkZSBhIHN0cmluZywgbGlrZSBcInJlY3QoNXB4LDEwcHgsMjBweCwyNXB4KVwiXG5cdFx0XHRcdFx0XHRpID0gcHQubDtcblx0XHRcdFx0XHRcdGlmIChpID09PSAyKSB7XG5cdFx0XHRcdFx0XHRcdHB0LnRbcHQucF0gPSBwdC54czAgKyB2YWwgKyBwdC54czEgKyBwdC54bjEgKyBwdC54czI7XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKGkgPT09IDMpIHtcblx0XHRcdFx0XHRcdFx0cHQudFtwdC5wXSA9IHB0LnhzMCArIHZhbCArIHB0LnhzMSArIHB0LnhuMSArIHB0LnhzMiArIHB0LnhuMiArIHB0LnhzMztcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoaSA9PT0gNCkge1xuXHRcdFx0XHRcdFx0XHRwdC50W3B0LnBdID0gcHQueHMwICsgdmFsICsgcHQueHMxICsgcHQueG4xICsgcHQueHMyICsgcHQueG4yICsgcHQueHMzICsgcHQueG4zICsgcHQueHM0O1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChpID09PSA1KSB7XG5cdFx0XHRcdFx0XHRcdHB0LnRbcHQucF0gPSBwdC54czAgKyB2YWwgKyBwdC54czEgKyBwdC54bjEgKyBwdC54czIgKyBwdC54bjIgKyBwdC54czMgKyBwdC54bjMgKyBwdC54czQgKyBwdC54bjQgKyBwdC54czU7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRzdHIgPSBwdC54czAgKyB2YWwgKyBwdC54czE7XG5cdFx0XHRcdFx0XHRcdGZvciAoaSA9IDE7IGkgPCBwdC5sOyBpKyspIHtcblx0XHRcdFx0XHRcdFx0XHRzdHIgKz0gcHRbXCJ4blwiK2ldICsgcHRbXCJ4c1wiKyhpKzEpXTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRwdC50W3B0LnBdID0gc3RyO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChwdC50eXBlID09PSAtMSkgeyAvL25vbi10d2VlbmluZyB2YWx1ZVxuXHRcdFx0XHRcdFx0cHQudFtwdC5wXSA9IHB0LnhzMDtcblxuXHRcdFx0XHRcdH0gZWxzZSBpZiAocHQuc2V0UmF0aW8pIHsgLy9jdXN0b20gc2V0UmF0aW8oKSBmb3IgdGhpbmdzIGxpa2UgU3BlY2lhbFByb3BzLCBleHRlcm5hbCBwbHVnaW5zLCBldGMuXG5cdFx0XHRcdFx0XHRwdC5zZXRSYXRpbyh2KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cHQgPSBwdC5fbmV4dDtcblx0XHRcdFx0fVxuXG5cdFx0XHQvL2lmIHRoZSB0d2VlbiBpcyByZXZlcnNlZCBhbGwgdGhlIHdheSBiYWNrIHRvIHRoZSBiZWdpbm5pbmcsIHdlIG5lZWQgdG8gcmVzdG9yZSB0aGUgb3JpZ2luYWwgdmFsdWVzIHdoaWNoIG1heSBoYXZlIGRpZmZlcmVudCB1bml0cyAobGlrZSAlIGluc3RlYWQgb2YgcHggb3IgZW0gb3Igd2hhdGV2ZXIpLlxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0d2hpbGUgKHB0KSB7XG5cdFx0XHRcdFx0aWYgKHB0LnR5cGUgIT09IDIpIHtcblx0XHRcdFx0XHRcdHB0LnRbcHQucF0gPSBwdC5iO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRwdC5zZXRSYXRpbyh2KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cHQgPSBwdC5fbmV4dDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqIEZvcmNlcyByZW5kZXJpbmcgb2YgdGhlIHRhcmdldCdzIHRyYW5zZm9ybXMgKHJvdGF0aW9uLCBzY2FsZSwgZXRjLikgd2hlbmV2ZXIgdGhlIENTU1BsdWdpbidzIHNldFJhdGlvKCkgaXMgY2FsbGVkLlxuXHRcdCAqIEJhc2ljYWxseSwgdGhpcyB0ZWxscyB0aGUgQ1NTUGx1Z2luIHRvIGNyZWF0ZSBhIENTU1Byb3BUd2VlbiAodHlwZSAyKSBhZnRlciBpbnN0YW50aWF0aW9uIHRoYXQgcnVucyBsYXN0IGluIHRoZSBsaW5rZWRcblx0XHQgKiBsaXN0IGFuZCBjYWxscyB0aGUgYXBwcm9wcmlhdGUgKDNEIG9yIDJEKSByZW5kZXJpbmcgZnVuY3Rpb24uIFdlIHNlcGFyYXRlIHRoaXMgaW50byBpdHMgb3duIG1ldGhvZCBzbyB0aGF0IHdlIGNhbiBjYWxsXG5cdFx0ICogaXQgZnJvbSBvdGhlciBwbHVnaW5zIGxpa2UgQmV6aWVyUGx1Z2luIGlmLCBmb3IgZXhhbXBsZSwgaXQgbmVlZHMgdG8gYXBwbHkgYW4gYXV0b1JvdGF0aW9uIGFuZCB0aGlzIENTU1BsdWdpblxuXHRcdCAqIGRvZXNuJ3QgaGF2ZSBhbnkgdHJhbnNmb3JtLXJlbGF0ZWQgcHJvcGVydGllcyBvZiBpdHMgb3duLiBZb3UgY2FuIGNhbGwgdGhpcyBtZXRob2QgYXMgbWFueSB0aW1lcyBhcyB5b3Vcblx0XHQgKiB3YW50IGFuZCBpdCB3b24ndCBjcmVhdGUgZHVwbGljYXRlIENTU1Byb3BUd2VlbnMuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IHRocmVlRCBpZiB0cnVlLCBpdCBzaG91bGQgYXBwbHkgM0QgdHdlZW5zIChvdGhlcndpc2UsIGp1c3QgMkQgb25lcyBhcmUgZmluZSBhbmQgdHlwaWNhbGx5IGZhc3Rlcilcblx0XHQgKi9cblx0XHRwLl9lbmFibGVUcmFuc2Zvcm1zID0gZnVuY3Rpb24odGhyZWVEKSB7XG5cdFx0XHR0aGlzLl90cmFuc2Zvcm0gPSB0aGlzLl90cmFuc2Zvcm0gfHwgX2dldFRyYW5zZm9ybSh0aGlzLl90YXJnZXQsIF9jcywgdHJ1ZSk7IC8vZW5zdXJlcyB0aGF0IHRoZSBlbGVtZW50IGhhcyBhIF9nc1RyYW5zZm9ybSBwcm9wZXJ0eSB3aXRoIHRoZSBhcHByb3ByaWF0ZSB2YWx1ZXMuXG5cdFx0XHR0aGlzLl90cmFuc2Zvcm1UeXBlID0gKCEodGhpcy5fdHJhbnNmb3JtLnN2ZyAmJiBfdXNlU1ZHVHJhbnNmb3JtQXR0cikgJiYgKHRocmVlRCB8fCB0aGlzLl90cmFuc2Zvcm1UeXBlID09PSAzKSkgPyAzIDogMjtcblx0XHR9O1xuXG5cdFx0dmFyIGxhenlTZXQgPSBmdW5jdGlvbih2KSB7XG5cdFx0XHR0aGlzLnRbdGhpcy5wXSA9IHRoaXMuZTtcblx0XHRcdHRoaXMuZGF0YS5fbGlua0NTU1AodGhpcywgdGhpcy5fbmV4dCwgbnVsbCwgdHJ1ZSk7IC8vd2UgcHVycG9zZWZ1bGx5IGtlZXAgdGhpcy5fbmV4dCBldmVuIHRob3VnaCBpdCdkIG1ha2Ugc2Vuc2UgdG8gbnVsbCBpdCwgYnV0IHRoaXMgaXMgYSBwZXJmb3JtYW5jZSBvcHRpbWl6YXRpb24sIGFzIHRoaXMgaGFwcGVucyBkdXJpbmcgdGhlIHdoaWxlIChwdCkge30gbG9vcCBpbiBzZXRSYXRpbygpIGF0IHRoZSBib3R0b20gb2Ygd2hpY2ggaXQgc2V0cyBwdCA9IHB0Ll9uZXh0LCBzbyBpZiB3ZSBudWxsIGl0LCB0aGUgbGlua2VkIGxpc3Qgd2lsbCBiZSBicm9rZW4gaW4gdGhhdCBsb29wLlxuXHRcdH07XG5cdFx0LyoqIEBwcml2YXRlIEdpdmVzIHVzIGEgd2F5IHRvIHNldCBhIHZhbHVlIG9uIHRoZSBmaXJzdCByZW5kZXIgKGFuZCBvbmx5IHRoZSBmaXJzdCByZW5kZXIpLiAqKi9cblx0XHRwLl9hZGRMYXp5U2V0ID0gZnVuY3Rpb24odCwgcCwgdikge1xuXHRcdFx0dmFyIHB0ID0gdGhpcy5fZmlyc3RQVCA9IG5ldyBDU1NQcm9wVHdlZW4odCwgcCwgMCwgMCwgdGhpcy5fZmlyc3RQVCwgMik7XG5cdFx0XHRwdC5lID0gdjtcblx0XHRcdHB0LnNldFJhdGlvID0gbGF6eVNldDtcblx0XHRcdHB0LmRhdGEgPSB0aGlzO1xuXHRcdH07XG5cblx0XHQvKiogQHByaXZhdGUgKiovXG5cdFx0cC5fbGlua0NTU1AgPSBmdW5jdGlvbihwdCwgbmV4dCwgcHJldiwgcmVtb3ZlKSB7XG5cdFx0XHRpZiAocHQpIHtcblx0XHRcdFx0aWYgKG5leHQpIHtcblx0XHRcdFx0XHRuZXh0Ll9wcmV2ID0gcHQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHB0Ll9uZXh0KSB7XG5cdFx0XHRcdFx0cHQuX25leHQuX3ByZXYgPSBwdC5fcHJldjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAocHQuX3ByZXYpIHtcblx0XHRcdFx0XHRwdC5fcHJldi5fbmV4dCA9IHB0Ll9uZXh0O1xuXHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMuX2ZpcnN0UFQgPT09IHB0KSB7XG5cdFx0XHRcdFx0dGhpcy5fZmlyc3RQVCA9IHB0Ll9uZXh0O1xuXHRcdFx0XHRcdHJlbW92ZSA9IHRydWU7IC8vanVzdCB0byBwcmV2ZW50IHJlc2V0dGluZyB0aGlzLl9maXJzdFBUIDUgbGluZXMgZG93biBpbiBjYXNlIHB0Ll9uZXh0IGlzIG51bGwuIChvcHRpbWl6ZWQgZm9yIHNwZWVkKVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChwcmV2KSB7XG5cdFx0XHRcdFx0cHJldi5fbmV4dCA9IHB0O1xuXHRcdFx0XHR9IGVsc2UgaWYgKCFyZW1vdmUgJiYgdGhpcy5fZmlyc3RQVCA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdHRoaXMuX2ZpcnN0UFQgPSBwdDtcblx0XHRcdFx0fVxuXHRcdFx0XHRwdC5fbmV4dCA9IG5leHQ7XG5cdFx0XHRcdHB0Ll9wcmV2ID0gcHJldjtcblx0XHRcdH1cblx0XHRcdHJldHVybiBwdDtcblx0XHR9O1xuXG5cdFx0Ly93ZSBuZWVkIHRvIG1ha2Ugc3VyZSB0aGF0IGlmIGFscGhhIG9yIGF1dG9BbHBoYSBpcyBraWxsZWQsIG9wYWNpdHkgaXMgdG9vLiBBbmQgYXV0b0FscGhhIGFmZmVjdHMgdGhlIFwidmlzaWJpbGl0eVwiIHByb3BlcnR5LlxuXHRcdHAuX2tpbGwgPSBmdW5jdGlvbihsb29rdXApIHtcblx0XHRcdHZhciBjb3B5ID0gbG9va3VwLFxuXHRcdFx0XHRwdCwgcCwgeGZpcnN0O1xuXHRcdFx0aWYgKGxvb2t1cC5hdXRvQWxwaGEgfHwgbG9va3VwLmFscGhhKSB7XG5cdFx0XHRcdGNvcHkgPSB7fTtcblx0XHRcdFx0Zm9yIChwIGluIGxvb2t1cCkgeyAvL2NvcHkgdGhlIGxvb2t1cCBzbyB0aGF0IHdlJ3JlIG5vdCBjaGFuZ2luZyB0aGUgb3JpZ2luYWwgd2hpY2ggbWF5IGJlIHBhc3NlZCBlbHNld2hlcmUuXG5cdFx0XHRcdFx0Y29weVtwXSA9IGxvb2t1cFtwXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb3B5Lm9wYWNpdHkgPSAxO1xuXHRcdFx0XHRpZiAoY29weS5hdXRvQWxwaGEpIHtcblx0XHRcdFx0XHRjb3B5LnZpc2liaWxpdHkgPSAxO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAobG9va3VwLmNsYXNzTmFtZSAmJiAocHQgPSB0aGlzLl9jbGFzc05hbWVQVCkpIHsgLy9mb3IgY2xhc3NOYW1lIHR3ZWVucywgd2UgbmVlZCB0byBraWxsIGFueSBhc3NvY2lhdGVkIENTU1Byb3BUd2VlbnMgdG9vOyBhIGxpbmtlZCBsaXN0IHN0YXJ0cyBhdCB0aGUgY2xhc3NOYW1lJ3MgXCJ4Zmlyc3RcIi5cblx0XHRcdFx0eGZpcnN0ID0gcHQueGZpcnN0O1xuXHRcdFx0XHRpZiAoeGZpcnN0ICYmIHhmaXJzdC5fcHJldikge1xuXHRcdFx0XHRcdHRoaXMuX2xpbmtDU1NQKHhmaXJzdC5fcHJldiwgcHQuX25leHQsIHhmaXJzdC5fcHJldi5fcHJldik7IC8vYnJlYWsgb2ZmIHRoZSBwcmV2XG5cdFx0XHRcdH0gZWxzZSBpZiAoeGZpcnN0ID09PSB0aGlzLl9maXJzdFBUKSB7XG5cdFx0XHRcdFx0dGhpcy5fZmlyc3RQVCA9IHB0Ll9uZXh0O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChwdC5fbmV4dCkge1xuXHRcdFx0XHRcdHRoaXMuX2xpbmtDU1NQKHB0Ll9uZXh0LCBwdC5fbmV4dC5fbmV4dCwgeGZpcnN0Ll9wcmV2KTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLl9jbGFzc05hbWVQVCA9IG51bGw7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gVHdlZW5QbHVnaW4ucHJvdG90eXBlLl9raWxsLmNhbGwodGhpcywgY29weSk7XG5cdFx0fTtcblxuXG5cblx0XHQvL3VzZWQgYnkgY2FzY2FkZVRvKCkgZm9yIGdhdGhlcmluZyBhbGwgdGhlIHN0eWxlIHByb3BlcnRpZXMgb2YgZWFjaCBjaGlsZCBlbGVtZW50IGludG8gYW4gYXJyYXkgZm9yIGNvbXBhcmlzb24uXG5cdFx0dmFyIF9nZXRDaGlsZFN0eWxlcyA9IGZ1bmN0aW9uKGUsIHByb3BzLCB0YXJnZXRzKSB7XG5cdFx0XHRcdHZhciBjaGlsZHJlbiwgaSwgY2hpbGQsIHR5cGU7XG5cdFx0XHRcdGlmIChlLnNsaWNlKSB7XG5cdFx0XHRcdFx0aSA9IGUubGVuZ3RoO1xuXHRcdFx0XHRcdHdoaWxlICgtLWkgPiAtMSkge1xuXHRcdFx0XHRcdFx0X2dldENoaWxkU3R5bGVzKGVbaV0sIHByb3BzLCB0YXJnZXRzKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNoaWxkcmVuID0gZS5jaGlsZE5vZGVzO1xuXHRcdFx0XHRpID0gY2hpbGRyZW4ubGVuZ3RoO1xuXHRcdFx0XHR3aGlsZSAoLS1pID4gLTEpIHtcblx0XHRcdFx0XHRjaGlsZCA9IGNoaWxkcmVuW2ldO1xuXHRcdFx0XHRcdHR5cGUgPSBjaGlsZC50eXBlO1xuXHRcdFx0XHRcdGlmIChjaGlsZC5zdHlsZSkge1xuXHRcdFx0XHRcdFx0cHJvcHMucHVzaChfZ2V0QWxsU3R5bGVzKGNoaWxkKSk7XG5cdFx0XHRcdFx0XHRpZiAodGFyZ2V0cykge1xuXHRcdFx0XHRcdFx0XHR0YXJnZXRzLnB1c2goY2hpbGQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoKHR5cGUgPT09IDEgfHwgdHlwZSA9PT0gOSB8fCB0eXBlID09PSAxMSkgJiYgY2hpbGQuY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdF9nZXRDaGlsZFN0eWxlcyhjaGlsZCwgcHJvcHMsIHRhcmdldHMpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIFR5cGljYWxseSBvbmx5IHVzZWZ1bCBmb3IgY2xhc3NOYW1lIHR3ZWVucyB0aGF0IG1heSBhZmZlY3QgY2hpbGQgZWxlbWVudHMsIHRoaXMgbWV0aG9kIGNyZWF0ZXMgYSBUd2VlbkxpdGVcblx0XHQgKiBhbmQgdGhlbiBjb21wYXJlcyB0aGUgc3R5bGUgcHJvcGVydGllcyBvZiBhbGwgdGhlIHRhcmdldCdzIGNoaWxkIGVsZW1lbnRzIGF0IHRoZSB0d2VlbidzIHN0YXJ0IGFuZCBlbmQsIGFuZFxuXHRcdCAqIGlmIGFueSBhcmUgZGlmZmVyZW50LCBpdCBhbHNvIGNyZWF0ZXMgdHdlZW5zIGZvciB0aG9zZSBhbmQgcmV0dXJucyBhbiBhcnJheSBjb250YWluaW5nIEFMTCBvZiB0aGUgcmVzdWx0aW5nXG5cdFx0ICogdHdlZW5zIChzbyB0aGF0IHlvdSBjYW4gZWFzaWx5IGFkZCgpIHRoZW0gdG8gYSBUaW1lbGluZUxpdGUsIGZvciBleGFtcGxlKS4gVGhlIHJlYXNvbiB0aGlzIGZ1bmN0aW9uYWxpdHkgaXNcblx0XHQgKiB3cmFwcGVkIGludG8gYSBzZXBhcmF0ZSBzdGF0aWMgbWV0aG9kIG9mIENTU1BsdWdpbiBpbnN0ZWFkIG9mIGJlaW5nIGludGVncmF0ZWQgaW50byBhbGwgcmVndWxhciBjbGFzc05hbWUgdHdlZW5zXG5cdFx0ICogaXMgYmVjYXVzZSBpdCBjcmVhdGVzIGVudGlyZWx5IG5ldyB0d2VlbnMgdGhhdCBtYXkgaGF2ZSBjb21wbGV0ZWx5IGRpZmZlcmVudCB0YXJnZXRzIHRoYW4gdGhlIG9yaWdpbmFsIHR3ZWVuLFxuXHRcdCAqIHNvIGlmIHRoZXkgd2VyZSBhbGwgbHVtcGVkIGludG8gdGhlIG9yaWdpbmFsIHR3ZWVuIGluc3RhbmNlLCBpdCB3b3VsZCBiZSBpbmNvbnNpc3RlbnQgd2l0aCB0aGUgcmVzdCBvZiB0aGUgQVBJXG5cdFx0ICogYW5kIGl0IHdvdWxkIGNyZWF0ZSBvdGhlciBwcm9ibGVtcy4gRm9yIGV4YW1wbGU6XG5cdFx0ICogIC0gSWYgSSBjcmVhdGUgYSB0d2VlbiBvZiBlbGVtZW50QSwgdGhhdCB0d2VlbiBpbnN0YW5jZSBtYXkgc3VkZGVubHkgY2hhbmdlIGl0cyB0YXJnZXQgdG8gaW5jbHVkZSA1MCBvdGhlciBlbGVtZW50cyAodW5pbnR1aXRpdmUgaWYgSSBzcGVjaWZpY2FsbHkgZGVmaW5lZCB0aGUgdGFyZ2V0IEkgd2FudGVkKVxuXHRcdCAqICAtIFdlIGNhbid0IGp1c3QgY3JlYXRlIG5ldyBpbmRlcGVuZGVudCB0d2VlbnMgYmVjYXVzZSBvdGhlcndpc2UsIHdoYXQgaGFwcGVucyBpZiB0aGUgb3JpZ2luYWwvcGFyZW50IHR3ZWVuIGlzIHJldmVyc2VkIG9yIHBhdXNlIG9yIGRyb3BwZWQgaW50byBhIFRpbWVsaW5lTGl0ZSBmb3IgdGlnaHQgY29udHJvbD8gWW91J2QgZXhwZWN0IHRoYXQgdHdlZW4ncyBiZWhhdmlvciB0byBhZmZlY3QgYWxsIHRoZSBvdGhlcnMuXG5cdFx0ICogIC0gQW5hbHl6aW5nIGV2ZXJ5IHN0eWxlIHByb3BlcnR5IG9mIGV2ZXJ5IGNoaWxkIGJlZm9yZSBhbmQgYWZ0ZXIgdGhlIHR3ZWVuIGlzIGFuIGV4cGVuc2l2ZSBvcGVyYXRpb24gd2hlbiB0aGVyZSBhcmUgbWFueSBjaGlsZHJlbiwgc28gdGhpcyBiZWhhdmlvciBzaG91bGRuJ3QgYmUgaW1wb3NlZCBvbiBhbGwgY2xhc3NOYW1lIHR3ZWVucyBieSBkZWZhdWx0LCBlc3BlY2lhbGx5IHNpbmNlIGl0J3MgcHJvYmFibHkgcmFyZSB0aGF0IHRoaXMgZXh0cmEgZnVuY3Rpb25hbGl0eSBpcyBuZWVkZWQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0IG9iamVjdCB0byBiZSB0d2VlbmVkXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IER1cmF0aW9uIGluIHNlY29uZHMgKG9yIGZyYW1lcyBmb3IgZnJhbWVzLWJhc2VkIHR3ZWVucylcblx0XHQgKiBAcGFyYW0ge09iamVjdH0gT2JqZWN0IGNvbnRhaW5pbmcgdGhlIGVuZCB2YWx1ZXMsIGxpa2Uge2NsYXNzTmFtZTpcIm5ld0NsYXNzXCIsIGVhc2U6TGluZWFyLmVhc2VOb25lfVxuXHRcdCAqIEByZXR1cm4ge0FycmF5fSBBbiBhcnJheSBvZiBUd2VlbkxpdGUgaW5zdGFuY2VzXG5cdFx0ICovXG5cdFx0Q1NTUGx1Z2luLmNhc2NhZGVUbyA9IGZ1bmN0aW9uKHRhcmdldCwgZHVyYXRpb24sIHZhcnMpIHtcblx0XHRcdHZhciB0d2VlbiA9IFR3ZWVuTGl0ZS50byh0YXJnZXQsIGR1cmF0aW9uLCB2YXJzKSxcblx0XHRcdFx0cmVzdWx0cyA9IFt0d2Vlbl0sXG5cdFx0XHRcdGIgPSBbXSxcblx0XHRcdFx0ZSA9IFtdLFxuXHRcdFx0XHR0YXJnZXRzID0gW10sXG5cdFx0XHRcdF9yZXNlcnZlZFByb3BzID0gVHdlZW5MaXRlLl9pbnRlcm5hbHMucmVzZXJ2ZWRQcm9wcyxcblx0XHRcdFx0aSwgZGlmcywgcCwgZnJvbTtcblx0XHRcdHRhcmdldCA9IHR3ZWVuLl90YXJnZXRzIHx8IHR3ZWVuLnRhcmdldDtcblx0XHRcdF9nZXRDaGlsZFN0eWxlcyh0YXJnZXQsIGIsIHRhcmdldHMpO1xuXHRcdFx0dHdlZW4ucmVuZGVyKGR1cmF0aW9uLCB0cnVlLCB0cnVlKTtcblx0XHRcdF9nZXRDaGlsZFN0eWxlcyh0YXJnZXQsIGUpO1xuXHRcdFx0dHdlZW4ucmVuZGVyKDAsIHRydWUsIHRydWUpO1xuXHRcdFx0dHdlZW4uX2VuYWJsZWQodHJ1ZSk7XG5cdFx0XHRpID0gdGFyZ2V0cy5sZW5ndGg7XG5cdFx0XHR3aGlsZSAoLS1pID4gLTEpIHtcblx0XHRcdFx0ZGlmcyA9IF9jc3NEaWYodGFyZ2V0c1tpXSwgYltpXSwgZVtpXSk7XG5cdFx0XHRcdGlmIChkaWZzLmZpcnN0TVBUKSB7XG5cdFx0XHRcdFx0ZGlmcyA9IGRpZnMuZGlmcztcblx0XHRcdFx0XHRmb3IgKHAgaW4gdmFycykge1xuXHRcdFx0XHRcdFx0aWYgKF9yZXNlcnZlZFByb3BzW3BdKSB7XG5cdFx0XHRcdFx0XHRcdGRpZnNbcF0gPSB2YXJzW3BdO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRmcm9tID0ge307XG5cdFx0XHRcdFx0Zm9yIChwIGluIGRpZnMpIHtcblx0XHRcdFx0XHRcdGZyb21bcF0gPSBiW2ldW3BdO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXN1bHRzLnB1c2goVHdlZW5MaXRlLmZyb21Ubyh0YXJnZXRzW2ldLCBkdXJhdGlvbiwgZnJvbSwgZGlmcykpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmVzdWx0cztcblx0XHR9O1xuXG5cdFx0VHdlZW5QbHVnaW4uYWN0aXZhdGUoW0NTU1BsdWdpbl0pO1xuXHRcdHJldHVybiBDU1NQbHVnaW47XG5cblx0fSwgdHJ1ZSk7XG5cblx0XG5cdFxuXHRcblx0XG5cdFxuXHRcblx0XG5cdFxuXHRcblx0XG4vKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogUm91bmRQcm9wc1BsdWdpblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cdChmdW5jdGlvbigpIHtcblxuXHRcdHZhciBSb3VuZFByb3BzUGx1Z2luID0gX2dzU2NvcGUuX2dzRGVmaW5lLnBsdWdpbih7XG5cdFx0XHRcdHByb3BOYW1lOiBcInJvdW5kUHJvcHNcIixcblx0XHRcdFx0cHJpb3JpdHk6IC0xLFxuXHRcdFx0XHRBUEk6IDIsXG5cblx0XHRcdFx0Ly9jYWxsZWQgd2hlbiB0aGUgdHdlZW4gcmVuZGVycyBmb3IgdGhlIGZpcnN0IHRpbWUuIFRoaXMgaXMgd2hlcmUgaW5pdGlhbCB2YWx1ZXMgc2hvdWxkIGJlIHJlY29yZGVkIGFuZCBhbnkgc2V0dXAgcm91dGluZXMgc2hvdWxkIHJ1bi5cblx0XHRcdFx0aW5pdDogZnVuY3Rpb24odGFyZ2V0LCB2YWx1ZSwgdHdlZW4pIHtcblx0XHRcdFx0XHR0aGlzLl90d2VlbiA9IHR3ZWVuO1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdH0pLFxuXHRcdFx0cCA9IFJvdW5kUHJvcHNQbHVnaW4ucHJvdG90eXBlO1xuXG5cdFx0cC5fb25Jbml0QWxsUHJvcHMgPSBmdW5jdGlvbigpIHtcblx0XHRcdHZhciB0d2VlbiA9IHRoaXMuX3R3ZWVuLFxuXHRcdFx0XHRycCA9ICh0d2Vlbi52YXJzLnJvdW5kUHJvcHMgaW5zdGFuY2VvZiBBcnJheSkgPyB0d2Vlbi52YXJzLnJvdW5kUHJvcHMgOiB0d2Vlbi52YXJzLnJvdW5kUHJvcHMuc3BsaXQoXCIsXCIpLFxuXHRcdFx0XHRpID0gcnAubGVuZ3RoLFxuXHRcdFx0XHRsb29rdXAgPSB7fSxcblx0XHRcdFx0cnB0ID0gdHdlZW4uX3Byb3BMb29rdXAucm91bmRQcm9wcyxcblx0XHRcdFx0cHJvcCwgcHQsIG5leHQ7XG5cdFx0XHR3aGlsZSAoLS1pID4gLTEpIHtcblx0XHRcdFx0bG9va3VwW3JwW2ldXSA9IDE7XG5cdFx0XHR9XG5cdFx0XHRpID0gcnAubGVuZ3RoO1xuXHRcdFx0d2hpbGUgKC0taSA+IC0xKSB7XG5cdFx0XHRcdHByb3AgPSBycFtpXTtcblx0XHRcdFx0cHQgPSB0d2Vlbi5fZmlyc3RQVDtcblx0XHRcdFx0d2hpbGUgKHB0KSB7XG5cdFx0XHRcdFx0bmV4dCA9IHB0Ll9uZXh0OyAvL3JlY29yZCBoZXJlLCBiZWNhdXNlIGl0IG1heSBnZXQgcmVtb3ZlZFxuXHRcdFx0XHRcdGlmIChwdC5wZykge1xuXHRcdFx0XHRcdFx0cHQudC5fcm91bmRQcm9wcyhsb29rdXAsIHRydWUpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAocHQubiA9PT0gcHJvcCkge1xuXHRcdFx0XHRcdFx0dGhpcy5fYWRkKHB0LnQsIHByb3AsIHB0LnMsIHB0LmMpO1xuXHRcdFx0XHRcdFx0Ly9yZW1vdmUgZnJvbSBsaW5rZWQgbGlzdFxuXHRcdFx0XHRcdFx0aWYgKG5leHQpIHtcblx0XHRcdFx0XHRcdFx0bmV4dC5fcHJldiA9IHB0Ll9wcmV2O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKHB0Ll9wcmV2KSB7XG5cdFx0XHRcdFx0XHRcdHB0Ll9wcmV2Ll9uZXh0ID0gbmV4dDtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAodHdlZW4uX2ZpcnN0UFQgPT09IHB0KSB7XG5cdFx0XHRcdFx0XHRcdHR3ZWVuLl9maXJzdFBUID0gbmV4dDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHB0Ll9uZXh0ID0gcHQuX3ByZXYgPSBudWxsO1xuXHRcdFx0XHRcdFx0dHdlZW4uX3Byb3BMb29rdXBbcHJvcF0gPSBycHQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHB0ID0gbmV4dDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH07XG5cblx0XHRwLl9hZGQgPSBmdW5jdGlvbih0YXJnZXQsIHAsIHMsIGMpIHtcblx0XHRcdHRoaXMuX2FkZFR3ZWVuKHRhcmdldCwgcCwgcywgcyArIGMsIHAsIHRydWUpO1xuXHRcdFx0dGhpcy5fb3ZlcndyaXRlUHJvcHMucHVzaChwKTtcblx0XHR9O1xuXG5cdH0oKSk7XG5cblxuXG5cblxuXG5cblxuXG5cbi8qXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBBdHRyUGx1Z2luXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblx0X2dzU2NvcGUuX2dzRGVmaW5lLnBsdWdpbih7XG5cdFx0cHJvcE5hbWU6IFwiYXR0clwiLFxuXHRcdEFQSTogMixcblx0XHR2ZXJzaW9uOiBcIjAuMy4zXCIsXG5cblx0XHQvL2NhbGxlZCB3aGVuIHRoZSB0d2VlbiByZW5kZXJzIGZvciB0aGUgZmlyc3QgdGltZS4gVGhpcyBpcyB3aGVyZSBpbml0aWFsIHZhbHVlcyBzaG91bGQgYmUgcmVjb3JkZWQgYW5kIGFueSBzZXR1cCByb3V0aW5lcyBzaG91bGQgcnVuLlxuXHRcdGluaXQ6IGZ1bmN0aW9uKHRhcmdldCwgdmFsdWUsIHR3ZWVuKSB7XG5cdFx0XHR2YXIgcCwgc3RhcnQsIGVuZDtcblx0XHRcdGlmICh0eXBlb2YodGFyZ2V0LnNldEF0dHJpYnV0ZSkgIT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl90YXJnZXQgPSB0YXJnZXQ7XG5cdFx0XHR0aGlzLl9wcm94eSA9IHt9O1xuXHRcdFx0dGhpcy5fc3RhcnQgPSB7fTsgLy8gd2UgcmVjb3JkIHN0YXJ0IGFuZCBlbmQgdmFsdWVzIGV4YWN0bHkgYXMgdGhleSBhcmUgaW4gY2FzZSB0aGV5J3JlIHN0cmluZ3MgKG5vdCBudW1iZXJzKSAtIHdlIG5lZWQgdG8gYmUgYWJsZSB0byByZXZlcnQgdG8gdGhlbSBjbGVhbmx5LlxuXHRcdFx0dGhpcy5fZW5kID0ge307XG5cdFx0XHRmb3IgKHAgaW4gdmFsdWUpIHtcblx0XHRcdFx0dGhpcy5fc3RhcnRbcF0gPSB0aGlzLl9wcm94eVtwXSA9IHN0YXJ0ID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShwKTtcblx0XHRcdFx0ZW5kID0gdGhpcy5fYWRkVHdlZW4odGhpcy5fcHJveHksIHAsIHBhcnNlRmxvYXQoc3RhcnQpLCB2YWx1ZVtwXSwgcCk7XG5cdFx0XHRcdHRoaXMuX2VuZFtwXSA9IGVuZCA/IGVuZC5zICsgZW5kLmMgOiB2YWx1ZVtwXTtcblx0XHRcdFx0dGhpcy5fb3ZlcndyaXRlUHJvcHMucHVzaChwKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0sXG5cblx0XHQvL2NhbGxlZCBlYWNoIHRpbWUgdGhlIHZhbHVlcyBzaG91bGQgYmUgdXBkYXRlZCwgYW5kIHRoZSByYXRpbyBnZXRzIHBhc3NlZCBhcyB0aGUgb25seSBwYXJhbWV0ZXIgKHR5cGljYWxseSBpdCdzIGEgdmFsdWUgYmV0d2VlbiAwIGFuZCAxLCBidXQgaXQgY2FuIGV4Y2VlZCB0aG9zZSB3aGVuIHVzaW5nIGFuIGVhc2UgbGlrZSBFbGFzdGljLmVhc2VPdXQgb3IgQmFjay5lYXNlT3V0LCBldGMuKVxuXHRcdHNldDogZnVuY3Rpb24ocmF0aW8pIHtcblx0XHRcdHRoaXMuX3N1cGVyLnNldFJhdGlvLmNhbGwodGhpcywgcmF0aW8pO1xuXHRcdFx0dmFyIHByb3BzID0gdGhpcy5fb3ZlcndyaXRlUHJvcHMsXG5cdFx0XHRcdGkgPSBwcm9wcy5sZW5ndGgsXG5cdFx0XHRcdGxvb2t1cCA9IChyYXRpbyA9PT0gMSkgPyB0aGlzLl9lbmQgOiByYXRpbyA/IHRoaXMuX3Byb3h5IDogdGhpcy5fc3RhcnQsXG5cdFx0XHRcdHA7XG5cdFx0XHR3aGlsZSAoLS1pID4gLTEpIHtcblx0XHRcdFx0cCA9IHByb3BzW2ldO1xuXHRcdFx0XHR0aGlzLl90YXJnZXQuc2V0QXR0cmlidXRlKHAsIGxvb2t1cFtwXSArIFwiXCIpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHR9KTtcblxuXG5cblxuXG5cblxuXG5cblxuLypcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERpcmVjdGlvbmFsUm90YXRpb25QbHVnaW5cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXHRfZ3NTY29wZS5fZ3NEZWZpbmUucGx1Z2luKHtcblx0XHRwcm9wTmFtZTogXCJkaXJlY3Rpb25hbFJvdGF0aW9uXCIsXG5cdFx0dmVyc2lvbjogXCIwLjIuMVwiLFxuXHRcdEFQSTogMixcblxuXHRcdC8vY2FsbGVkIHdoZW4gdGhlIHR3ZWVuIHJlbmRlcnMgZm9yIHRoZSBmaXJzdCB0aW1lLiBUaGlzIGlzIHdoZXJlIGluaXRpYWwgdmFsdWVzIHNob3VsZCBiZSByZWNvcmRlZCBhbmQgYW55IHNldHVwIHJvdXRpbmVzIHNob3VsZCBydW4uXG5cdFx0aW5pdDogZnVuY3Rpb24odGFyZ2V0LCB2YWx1ZSwgdHdlZW4pIHtcblx0XHRcdGlmICh0eXBlb2YodmFsdWUpICE9PSBcIm9iamVjdFwiKSB7XG5cdFx0XHRcdHZhbHVlID0ge3JvdGF0aW9uOnZhbHVlfTtcblx0XHRcdH1cblx0XHRcdHRoaXMuZmluYWxzID0ge307XG5cdFx0XHR2YXIgY2FwID0gKHZhbHVlLnVzZVJhZGlhbnMgPT09IHRydWUpID8gTWF0aC5QSSAqIDIgOiAzNjAsXG5cdFx0XHRcdG1pbiA9IDAuMDAwMDAxLFxuXHRcdFx0XHRwLCB2LCBzdGFydCwgZW5kLCBkaWYsIHNwbGl0O1xuXHRcdFx0Zm9yIChwIGluIHZhbHVlKSB7XG5cdFx0XHRcdGlmIChwICE9PSBcInVzZVJhZGlhbnNcIikge1xuXHRcdFx0XHRcdHNwbGl0ID0gKHZhbHVlW3BdICsgXCJcIikuc3BsaXQoXCJfXCIpO1xuXHRcdFx0XHRcdHYgPSBzcGxpdFswXTtcblx0XHRcdFx0XHRzdGFydCA9IHBhcnNlRmxvYXQoICh0eXBlb2YodGFyZ2V0W3BdKSAhPT0gXCJmdW5jdGlvblwiKSA/IHRhcmdldFtwXSA6IHRhcmdldFsgKChwLmluZGV4T2YoXCJzZXRcIikgfHwgdHlwZW9mKHRhcmdldFtcImdldFwiICsgcC5zdWJzdHIoMyldKSAhPT0gXCJmdW5jdGlvblwiKSA/IHAgOiBcImdldFwiICsgcC5zdWJzdHIoMykpIF0oKSApO1xuXHRcdFx0XHRcdGVuZCA9IHRoaXMuZmluYWxzW3BdID0gKHR5cGVvZih2KSA9PT0gXCJzdHJpbmdcIiAmJiB2LmNoYXJBdCgxKSA9PT0gXCI9XCIpID8gc3RhcnQgKyBwYXJzZUludCh2LmNoYXJBdCgwKSArIFwiMVwiLCAxMCkgKiBOdW1iZXIodi5zdWJzdHIoMikpIDogTnVtYmVyKHYpIHx8IDA7XG5cdFx0XHRcdFx0ZGlmID0gZW5kIC0gc3RhcnQ7XG5cdFx0XHRcdFx0aWYgKHNwbGl0Lmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0diA9IHNwbGl0LmpvaW4oXCJfXCIpO1xuXHRcdFx0XHRcdFx0aWYgKHYuaW5kZXhPZihcInNob3J0XCIpICE9PSAtMSkge1xuXHRcdFx0XHRcdFx0XHRkaWYgPSBkaWYgJSBjYXA7XG5cdFx0XHRcdFx0XHRcdGlmIChkaWYgIT09IGRpZiAlIChjYXAgLyAyKSkge1xuXHRcdFx0XHRcdFx0XHRcdGRpZiA9IChkaWYgPCAwKSA/IGRpZiArIGNhcCA6IGRpZiAtIGNhcDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKHYuaW5kZXhPZihcIl9jd1wiKSAhPT0gLTEgJiYgZGlmIDwgMCkge1xuXHRcdFx0XHRcdFx0XHRkaWYgPSAoKGRpZiArIGNhcCAqIDk5OTk5OTk5OTkpICUgY2FwKSAtICgoZGlmIC8gY2FwKSB8IDApICogY2FwO1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmICh2LmluZGV4T2YoXCJjY3dcIikgIT09IC0xICYmIGRpZiA+IDApIHtcblx0XHRcdFx0XHRcdFx0ZGlmID0gKChkaWYgLSBjYXAgKiA5OTk5OTk5OTk5KSAlIGNhcCkgLSAoKGRpZiAvIGNhcCkgfCAwKSAqIGNhcDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGRpZiA+IG1pbiB8fCBkaWYgPCAtbWluKSB7XG5cdFx0XHRcdFx0XHR0aGlzLl9hZGRUd2Vlbih0YXJnZXQsIHAsIHN0YXJ0LCBzdGFydCArIGRpZiwgcCk7XG5cdFx0XHRcdFx0XHR0aGlzLl9vdmVyd3JpdGVQcm9wcy5wdXNoKHApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSxcblxuXHRcdC8vY2FsbGVkIGVhY2ggdGltZSB0aGUgdmFsdWVzIHNob3VsZCBiZSB1cGRhdGVkLCBhbmQgdGhlIHJhdGlvIGdldHMgcGFzc2VkIGFzIHRoZSBvbmx5IHBhcmFtZXRlciAodHlwaWNhbGx5IGl0J3MgYSB2YWx1ZSBiZXR3ZWVuIDAgYW5kIDEsIGJ1dCBpdCBjYW4gZXhjZWVkIHRob3NlIHdoZW4gdXNpbmcgYW4gZWFzZSBsaWtlIEVsYXN0aWMuZWFzZU91dCBvciBCYWNrLmVhc2VPdXQsIGV0Yy4pXG5cdFx0c2V0OiBmdW5jdGlvbihyYXRpbykge1xuXHRcdFx0dmFyIHB0O1xuXHRcdFx0aWYgKHJhdGlvICE9PSAxKSB7XG5cdFx0XHRcdHRoaXMuX3N1cGVyLnNldFJhdGlvLmNhbGwodGhpcywgcmF0aW8pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cHQgPSB0aGlzLl9maXJzdFBUO1xuXHRcdFx0XHR3aGlsZSAocHQpIHtcblx0XHRcdFx0XHRpZiAocHQuZikge1xuXHRcdFx0XHRcdFx0cHQudFtwdC5wXSh0aGlzLmZpbmFsc1twdC5wXSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHB0LnRbcHQucF0gPSB0aGlzLmZpbmFsc1twdC5wXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cHQgPSBwdC5fbmV4dDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHR9KS5fYXV0b0NTUyA9IHRydWU7XG5cblxuXG5cblxuXG5cblx0XG5cdFxuXHRcblx0XG4vKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRWFzZVBhY2tcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXHRfZ3NTY29wZS5fZ3NEZWZpbmUoXCJlYXNpbmcuQmFja1wiLCBbXCJlYXNpbmcuRWFzZVwiXSwgZnVuY3Rpb24oRWFzZSkge1xuXHRcdFxuXHRcdHZhciB3ID0gKF9nc1Njb3BlLkdyZWVuU29ja0dsb2JhbHMgfHwgX2dzU2NvcGUpLFxuXHRcdFx0Z3MgPSB3LmNvbS5ncmVlbnNvY2ssXG5cdFx0XHRfMlBJID0gTWF0aC5QSSAqIDIsXG5cdFx0XHRfSEFMRl9QSSA9IE1hdGguUEkgLyAyLFxuXHRcdFx0X2NsYXNzID0gZ3MuX2NsYXNzLFxuXHRcdFx0X2NyZWF0ZSA9IGZ1bmN0aW9uKG4sIGYpIHtcblx0XHRcdFx0dmFyIEMgPSBfY2xhc3MoXCJlYXNpbmcuXCIgKyBuLCBmdW5jdGlvbigpe30sIHRydWUpLFxuXHRcdFx0XHRcdHAgPSBDLnByb3RvdHlwZSA9IG5ldyBFYXNlKCk7XG5cdFx0XHRcdHAuY29uc3RydWN0b3IgPSBDO1xuXHRcdFx0XHRwLmdldFJhdGlvID0gZjtcblx0XHRcdFx0cmV0dXJuIEM7XG5cdFx0XHR9LFxuXHRcdFx0X2Vhc2VSZWcgPSBFYXNlLnJlZ2lzdGVyIHx8IGZ1bmN0aW9uKCl7fSwgLy9wdXQgYW4gZW1wdHkgZnVuY3Rpb24gaW4gcGxhY2UganVzdCBhcyBhIHNhZmV0eSBtZWFzdXJlIGluIGNhc2Ugc29tZW9uZSBsb2FkcyBhbiBPTEQgdmVyc2lvbiBvZiBUd2VlbkxpdGUuanMgd2hlcmUgRWFzZS5yZWdpc3RlciBkb2Vzbid0IGV4aXN0LlxuXHRcdFx0X3dyYXAgPSBmdW5jdGlvbihuYW1lLCBFYXNlT3V0LCBFYXNlSW4sIEVhc2VJbk91dCwgYWxpYXNlcykge1xuXHRcdFx0XHR2YXIgQyA9IF9jbGFzcyhcImVhc2luZy5cIituYW1lLCB7XG5cdFx0XHRcdFx0ZWFzZU91dDpuZXcgRWFzZU91dCgpLFxuXHRcdFx0XHRcdGVhc2VJbjpuZXcgRWFzZUluKCksXG5cdFx0XHRcdFx0ZWFzZUluT3V0Om5ldyBFYXNlSW5PdXQoKVxuXHRcdFx0XHR9LCB0cnVlKTtcblx0XHRcdFx0X2Vhc2VSZWcoQywgbmFtZSk7XG5cdFx0XHRcdHJldHVybiBDO1xuXHRcdFx0fSxcblx0XHRcdEVhc2VQb2ludCA9IGZ1bmN0aW9uKHRpbWUsIHZhbHVlLCBuZXh0KSB7XG5cdFx0XHRcdHRoaXMudCA9IHRpbWU7XG5cdFx0XHRcdHRoaXMudiA9IHZhbHVlO1xuXHRcdFx0XHRpZiAobmV4dCkge1xuXHRcdFx0XHRcdHRoaXMubmV4dCA9IG5leHQ7XG5cdFx0XHRcdFx0bmV4dC5wcmV2ID0gdGhpcztcblx0XHRcdFx0XHR0aGlzLmMgPSBuZXh0LnYgLSB2YWx1ZTtcblx0XHRcdFx0XHR0aGlzLmdhcCA9IG5leHQudCAtIHRpbWU7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cblx0XHRcdC8vQmFja1xuXHRcdFx0X2NyZWF0ZUJhY2sgPSBmdW5jdGlvbihuLCBmKSB7XG5cdFx0XHRcdHZhciBDID0gX2NsYXNzKFwiZWFzaW5nLlwiICsgbiwgZnVuY3Rpb24ob3ZlcnNob290KSB7XG5cdFx0XHRcdFx0XHR0aGlzLl9wMSA9IChvdmVyc2hvb3QgfHwgb3ZlcnNob290ID09PSAwKSA/IG92ZXJzaG9vdCA6IDEuNzAxNTg7XG5cdFx0XHRcdFx0XHR0aGlzLl9wMiA9IHRoaXMuX3AxICogMS41MjU7XG5cdFx0XHRcdFx0fSwgdHJ1ZSksXG5cdFx0XHRcdFx0cCA9IEMucHJvdG90eXBlID0gbmV3IEVhc2UoKTtcblx0XHRcdFx0cC5jb25zdHJ1Y3RvciA9IEM7XG5cdFx0XHRcdHAuZ2V0UmF0aW8gPSBmO1xuXHRcdFx0XHRwLmNvbmZpZyA9IGZ1bmN0aW9uKG92ZXJzaG9vdCkge1xuXHRcdFx0XHRcdHJldHVybiBuZXcgQyhvdmVyc2hvb3QpO1xuXHRcdFx0XHR9O1xuXHRcdFx0XHRyZXR1cm4gQztcblx0XHRcdH0sXG5cblx0XHRcdEJhY2sgPSBfd3JhcChcIkJhY2tcIixcblx0XHRcdFx0X2NyZWF0ZUJhY2soXCJCYWNrT3V0XCIsIGZ1bmN0aW9uKHApIHtcblx0XHRcdFx0XHRyZXR1cm4gKChwID0gcCAtIDEpICogcCAqICgodGhpcy5fcDEgKyAxKSAqIHAgKyB0aGlzLl9wMSkgKyAxKTtcblx0XHRcdFx0fSksXG5cdFx0XHRcdF9jcmVhdGVCYWNrKFwiQmFja0luXCIsIGZ1bmN0aW9uKHApIHtcblx0XHRcdFx0XHRyZXR1cm4gcCAqIHAgKiAoKHRoaXMuX3AxICsgMSkgKiBwIC0gdGhpcy5fcDEpO1xuXHRcdFx0XHR9KSxcblx0XHRcdFx0X2NyZWF0ZUJhY2soXCJCYWNrSW5PdXRcIiwgZnVuY3Rpb24ocCkge1xuXHRcdFx0XHRcdHJldHVybiAoKHAgKj0gMikgPCAxKSA/IDAuNSAqIHAgKiBwICogKCh0aGlzLl9wMiArIDEpICogcCAtIHRoaXMuX3AyKSA6IDAuNSAqICgocCAtPSAyKSAqIHAgKiAoKHRoaXMuX3AyICsgMSkgKiBwICsgdGhpcy5fcDIpICsgMik7XG5cdFx0XHRcdH0pXG5cdFx0XHQpLFxuXG5cblx0XHRcdC8vU2xvd01vXG5cdFx0XHRTbG93TW8gPSBfY2xhc3MoXCJlYXNpbmcuU2xvd01vXCIsIGZ1bmN0aW9uKGxpbmVhclJhdGlvLCBwb3dlciwgeW95b01vZGUpIHtcblx0XHRcdFx0cG93ZXIgPSAocG93ZXIgfHwgcG93ZXIgPT09IDApID8gcG93ZXIgOiAwLjc7XG5cdFx0XHRcdGlmIChsaW5lYXJSYXRpbyA9PSBudWxsKSB7XG5cdFx0XHRcdFx0bGluZWFyUmF0aW8gPSAwLjc7XG5cdFx0XHRcdH0gZWxzZSBpZiAobGluZWFyUmF0aW8gPiAxKSB7XG5cdFx0XHRcdFx0bGluZWFyUmF0aW8gPSAxO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuX3AgPSAobGluZWFyUmF0aW8gIT09IDEpID8gcG93ZXIgOiAwO1xuXHRcdFx0XHR0aGlzLl9wMSA9ICgxIC0gbGluZWFyUmF0aW8pIC8gMjtcblx0XHRcdFx0dGhpcy5fcDIgPSBsaW5lYXJSYXRpbztcblx0XHRcdFx0dGhpcy5fcDMgPSB0aGlzLl9wMSArIHRoaXMuX3AyO1xuXHRcdFx0XHR0aGlzLl9jYWxjRW5kID0gKHlveW9Nb2RlID09PSB0cnVlKTtcblx0XHRcdH0sIHRydWUpLFxuXHRcdFx0cCA9IFNsb3dNby5wcm90b3R5cGUgPSBuZXcgRWFzZSgpLFxuXHRcdFx0U3RlcHBlZEVhc2UsIFJvdWdoRWFzZSwgX2NyZWF0ZUVsYXN0aWM7XG5cblx0XHRwLmNvbnN0cnVjdG9yID0gU2xvd01vO1xuXHRcdHAuZ2V0UmF0aW8gPSBmdW5jdGlvbihwKSB7XG5cdFx0XHR2YXIgciA9IHAgKyAoMC41IC0gcCkgKiB0aGlzLl9wO1xuXHRcdFx0aWYgKHAgPCB0aGlzLl9wMSkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fY2FsY0VuZCA/IDEgLSAoKHAgPSAxIC0gKHAgLyB0aGlzLl9wMSkpICogcCkgOiByIC0gKChwID0gMSAtIChwIC8gdGhpcy5fcDEpKSAqIHAgKiBwICogcCAqIHIpO1xuXHRcdFx0fSBlbHNlIGlmIChwID4gdGhpcy5fcDMpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX2NhbGNFbmQgPyAxIC0gKHAgPSAocCAtIHRoaXMuX3AzKSAvIHRoaXMuX3AxKSAqIHAgOiByICsgKChwIC0gcikgKiAocCA9IChwIC0gdGhpcy5fcDMpIC8gdGhpcy5fcDEpICogcCAqIHAgKiBwKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzLl9jYWxjRW5kID8gMSA6IHI7XG5cdFx0fTtcblx0XHRTbG93TW8uZWFzZSA9IG5ldyBTbG93TW8oMC43LCAwLjcpO1xuXG5cdFx0cC5jb25maWcgPSBTbG93TW8uY29uZmlnID0gZnVuY3Rpb24obGluZWFyUmF0aW8sIHBvd2VyLCB5b3lvTW9kZSkge1xuXHRcdFx0cmV0dXJuIG5ldyBTbG93TW8obGluZWFyUmF0aW8sIHBvd2VyLCB5b3lvTW9kZSk7XG5cdFx0fTtcblxuXG5cdFx0Ly9TdGVwcGVkRWFzZVxuXHRcdFN0ZXBwZWRFYXNlID0gX2NsYXNzKFwiZWFzaW5nLlN0ZXBwZWRFYXNlXCIsIGZ1bmN0aW9uKHN0ZXBzKSB7XG5cdFx0XHRcdHN0ZXBzID0gc3RlcHMgfHwgMTtcblx0XHRcdFx0dGhpcy5fcDEgPSAxIC8gc3RlcHM7XG5cdFx0XHRcdHRoaXMuX3AyID0gc3RlcHMgKyAxO1xuXHRcdFx0fSwgdHJ1ZSk7XG5cdFx0cCA9IFN0ZXBwZWRFYXNlLnByb3RvdHlwZSA9IG5ldyBFYXNlKCk7XG5cdFx0cC5jb25zdHJ1Y3RvciA9IFN0ZXBwZWRFYXNlO1xuXHRcdHAuZ2V0UmF0aW8gPSBmdW5jdGlvbihwKSB7XG5cdFx0XHRpZiAocCA8IDApIHtcblx0XHRcdFx0cCA9IDA7XG5cdFx0XHR9IGVsc2UgaWYgKHAgPj0gMSkge1xuXHRcdFx0XHRwID0gMC45OTk5OTk5OTk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gKCh0aGlzLl9wMiAqIHApID4+IDApICogdGhpcy5fcDE7XG5cdFx0fTtcblx0XHRwLmNvbmZpZyA9IFN0ZXBwZWRFYXNlLmNvbmZpZyA9IGZ1bmN0aW9uKHN0ZXBzKSB7XG5cdFx0XHRyZXR1cm4gbmV3IFN0ZXBwZWRFYXNlKHN0ZXBzKTtcblx0XHR9O1xuXG5cblx0XHQvL1JvdWdoRWFzZVxuXHRcdFJvdWdoRWFzZSA9IF9jbGFzcyhcImVhc2luZy5Sb3VnaEVhc2VcIiwgZnVuY3Rpb24odmFycykge1xuXHRcdFx0dmFycyA9IHZhcnMgfHwge307XG5cdFx0XHR2YXIgdGFwZXIgPSB2YXJzLnRhcGVyIHx8IFwibm9uZVwiLFxuXHRcdFx0XHRhID0gW10sXG5cdFx0XHRcdGNudCA9IDAsXG5cdFx0XHRcdHBvaW50cyA9ICh2YXJzLnBvaW50cyB8fCAyMCkgfCAwLFxuXHRcdFx0XHRpID0gcG9pbnRzLFxuXHRcdFx0XHRyYW5kb21pemUgPSAodmFycy5yYW5kb21pemUgIT09IGZhbHNlKSxcblx0XHRcdFx0Y2xhbXAgPSAodmFycy5jbGFtcCA9PT0gdHJ1ZSksXG5cdFx0XHRcdHRlbXBsYXRlID0gKHZhcnMudGVtcGxhdGUgaW5zdGFuY2VvZiBFYXNlKSA/IHZhcnMudGVtcGxhdGUgOiBudWxsLFxuXHRcdFx0XHRzdHJlbmd0aCA9ICh0eXBlb2YodmFycy5zdHJlbmd0aCkgPT09IFwibnVtYmVyXCIpID8gdmFycy5zdHJlbmd0aCAqIDAuNCA6IDAuNCxcblx0XHRcdFx0eCwgeSwgYnVtcCwgaW52WCwgb2JqLCBwbnQ7XG5cdFx0XHR3aGlsZSAoLS1pID4gLTEpIHtcblx0XHRcdFx0eCA9IHJhbmRvbWl6ZSA/IE1hdGgucmFuZG9tKCkgOiAoMSAvIHBvaW50cykgKiBpO1xuXHRcdFx0XHR5ID0gdGVtcGxhdGUgPyB0ZW1wbGF0ZS5nZXRSYXRpbyh4KSA6IHg7XG5cdFx0XHRcdGlmICh0YXBlciA9PT0gXCJub25lXCIpIHtcblx0XHRcdFx0XHRidW1wID0gc3RyZW5ndGg7XG5cdFx0XHRcdH0gZWxzZSBpZiAodGFwZXIgPT09IFwib3V0XCIpIHtcblx0XHRcdFx0XHRpbnZYID0gMSAtIHg7XG5cdFx0XHRcdFx0YnVtcCA9IGludlggKiBpbnZYICogc3RyZW5ndGg7XG5cdFx0XHRcdH0gZWxzZSBpZiAodGFwZXIgPT09IFwiaW5cIikge1xuXHRcdFx0XHRcdGJ1bXAgPSB4ICogeCAqIHN0cmVuZ3RoO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHggPCAwLjUpIHsgIC8vXCJib3RoXCIgKHN0YXJ0KVxuXHRcdFx0XHRcdGludlggPSB4ICogMjtcblx0XHRcdFx0XHRidW1wID0gaW52WCAqIGludlggKiAwLjUgKiBzdHJlbmd0aDtcblx0XHRcdFx0fSBlbHNlIHtcdFx0XHRcdC8vXCJib3RoXCIgKGVuZClcblx0XHRcdFx0XHRpbnZYID0gKDEgLSB4KSAqIDI7XG5cdFx0XHRcdFx0YnVtcCA9IGludlggKiBpbnZYICogMC41ICogc3RyZW5ndGg7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHJhbmRvbWl6ZSkge1xuXHRcdFx0XHRcdHkgKz0gKE1hdGgucmFuZG9tKCkgKiBidW1wKSAtIChidW1wICogMC41KTtcblx0XHRcdFx0fSBlbHNlIGlmIChpICUgMikge1xuXHRcdFx0XHRcdHkgKz0gYnVtcCAqIDAuNTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR5IC09IGJ1bXAgKiAwLjU7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGNsYW1wKSB7XG5cdFx0XHRcdFx0aWYgKHkgPiAxKSB7XG5cdFx0XHRcdFx0XHR5ID0gMTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHkgPCAwKSB7XG5cdFx0XHRcdFx0XHR5ID0gMDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0YVtjbnQrK10gPSB7eDp4LCB5Onl9O1xuXHRcdFx0fVxuXHRcdFx0YS5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdFx0cmV0dXJuIGEueCAtIGIueDtcblx0XHRcdH0pO1xuXG5cdFx0XHRwbnQgPSBuZXcgRWFzZVBvaW50KDEsIDEsIG51bGwpO1xuXHRcdFx0aSA9IHBvaW50cztcblx0XHRcdHdoaWxlICgtLWkgPiAtMSkge1xuXHRcdFx0XHRvYmogPSBhW2ldO1xuXHRcdFx0XHRwbnQgPSBuZXcgRWFzZVBvaW50KG9iai54LCBvYmoueSwgcG50KTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5fcHJldiA9IG5ldyBFYXNlUG9pbnQoMCwgMCwgKHBudC50ICE9PSAwKSA/IHBudCA6IHBudC5uZXh0KTtcblx0XHR9LCB0cnVlKTtcblx0XHRwID0gUm91Z2hFYXNlLnByb3RvdHlwZSA9IG5ldyBFYXNlKCk7XG5cdFx0cC5jb25zdHJ1Y3RvciA9IFJvdWdoRWFzZTtcblx0XHRwLmdldFJhdGlvID0gZnVuY3Rpb24ocCkge1xuXHRcdFx0dmFyIHBudCA9IHRoaXMuX3ByZXY7XG5cdFx0XHRpZiAocCA+IHBudC50KSB7XG5cdFx0XHRcdHdoaWxlIChwbnQubmV4dCAmJiBwID49IHBudC50KSB7XG5cdFx0XHRcdFx0cG50ID0gcG50Lm5leHQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0cG50ID0gcG50LnByZXY7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR3aGlsZSAocG50LnByZXYgJiYgcCA8PSBwbnQudCkge1xuXHRcdFx0XHRcdHBudCA9IHBudC5wcmV2O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl9wcmV2ID0gcG50O1xuXHRcdFx0cmV0dXJuIChwbnQudiArICgocCAtIHBudC50KSAvIHBudC5nYXApICogcG50LmMpO1xuXHRcdH07XG5cdFx0cC5jb25maWcgPSBmdW5jdGlvbih2YXJzKSB7XG5cdFx0XHRyZXR1cm4gbmV3IFJvdWdoRWFzZSh2YXJzKTtcblx0XHR9O1xuXHRcdFJvdWdoRWFzZS5lYXNlID0gbmV3IFJvdWdoRWFzZSgpO1xuXG5cblx0XHQvL0JvdW5jZVxuXHRcdF93cmFwKFwiQm91bmNlXCIsXG5cdFx0XHRfY3JlYXRlKFwiQm91bmNlT3V0XCIsIGZ1bmN0aW9uKHApIHtcblx0XHRcdFx0aWYgKHAgPCAxIC8gMi43NSkge1xuXHRcdFx0XHRcdHJldHVybiA3LjU2MjUgKiBwICogcDtcblx0XHRcdFx0fSBlbHNlIGlmIChwIDwgMiAvIDIuNzUpIHtcblx0XHRcdFx0XHRyZXR1cm4gNy41NjI1ICogKHAgLT0gMS41IC8gMi43NSkgKiBwICsgMC43NTtcblx0XHRcdFx0fSBlbHNlIGlmIChwIDwgMi41IC8gMi43NSkge1xuXHRcdFx0XHRcdHJldHVybiA3LjU2MjUgKiAocCAtPSAyLjI1IC8gMi43NSkgKiBwICsgMC45Mzc1O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiA3LjU2MjUgKiAocCAtPSAyLjYyNSAvIDIuNzUpICogcCArIDAuOTg0Mzc1O1xuXHRcdFx0fSksXG5cdFx0XHRfY3JlYXRlKFwiQm91bmNlSW5cIiwgZnVuY3Rpb24ocCkge1xuXHRcdFx0XHRpZiAoKHAgPSAxIC0gcCkgPCAxIC8gMi43NSkge1xuXHRcdFx0XHRcdHJldHVybiAxIC0gKDcuNTYyNSAqIHAgKiBwKTtcblx0XHRcdFx0fSBlbHNlIGlmIChwIDwgMiAvIDIuNzUpIHtcblx0XHRcdFx0XHRyZXR1cm4gMSAtICg3LjU2MjUgKiAocCAtPSAxLjUgLyAyLjc1KSAqIHAgKyAwLjc1KTtcblx0XHRcdFx0fSBlbHNlIGlmIChwIDwgMi41IC8gMi43NSkge1xuXHRcdFx0XHRcdHJldHVybiAxIC0gKDcuNTYyNSAqIChwIC09IDIuMjUgLyAyLjc1KSAqIHAgKyAwLjkzNzUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiAxIC0gKDcuNTYyNSAqIChwIC09IDIuNjI1IC8gMi43NSkgKiBwICsgMC45ODQzNzUpO1xuXHRcdFx0fSksXG5cdFx0XHRfY3JlYXRlKFwiQm91bmNlSW5PdXRcIiwgZnVuY3Rpb24ocCkge1xuXHRcdFx0XHR2YXIgaW52ZXJ0ID0gKHAgPCAwLjUpO1xuXHRcdFx0XHRpZiAoaW52ZXJ0KSB7XG5cdFx0XHRcdFx0cCA9IDEgLSAocCAqIDIpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHAgPSAocCAqIDIpIC0gMTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAocCA8IDEgLyAyLjc1KSB7XG5cdFx0XHRcdFx0cCA9IDcuNTYyNSAqIHAgKiBwO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHAgPCAyIC8gMi43NSkge1xuXHRcdFx0XHRcdHAgPSA3LjU2MjUgKiAocCAtPSAxLjUgLyAyLjc1KSAqIHAgKyAwLjc1O1xuXHRcdFx0XHR9IGVsc2UgaWYgKHAgPCAyLjUgLyAyLjc1KSB7XG5cdFx0XHRcdFx0cCA9IDcuNTYyNSAqIChwIC09IDIuMjUgLyAyLjc1KSAqIHAgKyAwLjkzNzU7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cCA9IDcuNTYyNSAqIChwIC09IDIuNjI1IC8gMi43NSkgKiBwICsgMC45ODQzNzU7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGludmVydCA/ICgxIC0gcCkgKiAwLjUgOiBwICogMC41ICsgMC41O1xuXHRcdFx0fSlcblx0XHQpO1xuXG5cblx0XHQvL0NJUkNcblx0XHRfd3JhcChcIkNpcmNcIixcblx0XHRcdF9jcmVhdGUoXCJDaXJjT3V0XCIsIGZ1bmN0aW9uKHApIHtcblx0XHRcdFx0cmV0dXJuIE1hdGguc3FydCgxIC0gKHAgPSBwIC0gMSkgKiBwKTtcblx0XHRcdH0pLFxuXHRcdFx0X2NyZWF0ZShcIkNpcmNJblwiLCBmdW5jdGlvbihwKSB7XG5cdFx0XHRcdHJldHVybiAtKE1hdGguc3FydCgxIC0gKHAgKiBwKSkgLSAxKTtcblx0XHRcdH0pLFxuXHRcdFx0X2NyZWF0ZShcIkNpcmNJbk91dFwiLCBmdW5jdGlvbihwKSB7XG5cdFx0XHRcdHJldHVybiAoKHAqPTIpIDwgMSkgPyAtMC41ICogKE1hdGguc3FydCgxIC0gcCAqIHApIC0gMSkgOiAwLjUgKiAoTWF0aC5zcXJ0KDEgLSAocCAtPSAyKSAqIHApICsgMSk7XG5cdFx0XHR9KVxuXHRcdCk7XG5cblxuXHRcdC8vRWxhc3RpY1xuXHRcdF9jcmVhdGVFbGFzdGljID0gZnVuY3Rpb24obiwgZiwgZGVmKSB7XG5cdFx0XHR2YXIgQyA9IF9jbGFzcyhcImVhc2luZy5cIiArIG4sIGZ1bmN0aW9uKGFtcGxpdHVkZSwgcGVyaW9kKSB7XG5cdFx0XHRcdFx0dGhpcy5fcDEgPSAoYW1wbGl0dWRlID49IDEpID8gYW1wbGl0dWRlIDogMTsgLy9ub3RlOiBpZiBhbXBsaXR1ZGUgaXMgPCAxLCB3ZSBzaW1wbHkgYWRqdXN0IHRoZSBwZXJpb2QgZm9yIGEgbW9yZSBuYXR1cmFsIGZlZWwuIE90aGVyd2lzZSB0aGUgbWF0aCBkb2Vzbid0IHdvcmsgcmlnaHQgYW5kIHRoZSBjdXJ2ZSBzdGFydHMgYXQgMS5cblx0XHRcdFx0XHR0aGlzLl9wMiA9IChwZXJpb2QgfHwgZGVmKSAvIChhbXBsaXR1ZGUgPCAxID8gYW1wbGl0dWRlIDogMSk7XG5cdFx0XHRcdFx0dGhpcy5fcDMgPSB0aGlzLl9wMiAvIF8yUEkgKiAoTWF0aC5hc2luKDEgLyB0aGlzLl9wMSkgfHwgMCk7XG5cdFx0XHRcdFx0dGhpcy5fcDIgPSBfMlBJIC8gdGhpcy5fcDI7IC8vcHJlY2FsY3VsYXRlIHRvIG9wdGltaXplXG5cdFx0XHRcdH0sIHRydWUpLFxuXHRcdFx0XHRwID0gQy5wcm90b3R5cGUgPSBuZXcgRWFzZSgpO1xuXHRcdFx0cC5jb25zdHJ1Y3RvciA9IEM7XG5cdFx0XHRwLmdldFJhdGlvID0gZjtcblx0XHRcdHAuY29uZmlnID0gZnVuY3Rpb24oYW1wbGl0dWRlLCBwZXJpb2QpIHtcblx0XHRcdFx0cmV0dXJuIG5ldyBDKGFtcGxpdHVkZSwgcGVyaW9kKTtcblx0XHRcdH07XG5cdFx0XHRyZXR1cm4gQztcblx0XHR9O1xuXHRcdF93cmFwKFwiRWxhc3RpY1wiLFxuXHRcdFx0X2NyZWF0ZUVsYXN0aWMoXCJFbGFzdGljT3V0XCIsIGZ1bmN0aW9uKHApIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX3AxICogTWF0aC5wb3coMiwgLTEwICogcCkgKiBNYXRoLnNpbiggKHAgLSB0aGlzLl9wMykgKiB0aGlzLl9wMiApICsgMTtcblx0XHRcdH0sIDAuMyksXG5cdFx0XHRfY3JlYXRlRWxhc3RpYyhcIkVsYXN0aWNJblwiLCBmdW5jdGlvbihwKSB7XG5cdFx0XHRcdHJldHVybiAtKHRoaXMuX3AxICogTWF0aC5wb3coMiwgMTAgKiAocCAtPSAxKSkgKiBNYXRoLnNpbiggKHAgLSB0aGlzLl9wMykgKiB0aGlzLl9wMiApKTtcblx0XHRcdH0sIDAuMyksXG5cdFx0XHRfY3JlYXRlRWxhc3RpYyhcIkVsYXN0aWNJbk91dFwiLCBmdW5jdGlvbihwKSB7XG5cdFx0XHRcdHJldHVybiAoKHAgKj0gMikgPCAxKSA/IC0wLjUgKiAodGhpcy5fcDEgKiBNYXRoLnBvdygyLCAxMCAqIChwIC09IDEpKSAqIE1hdGguc2luKCAocCAtIHRoaXMuX3AzKSAqIHRoaXMuX3AyKSkgOiB0aGlzLl9wMSAqIE1hdGgucG93KDIsIC0xMCAqKHAgLT0gMSkpICogTWF0aC5zaW4oIChwIC0gdGhpcy5fcDMpICogdGhpcy5fcDIgKSAqIDAuNSArIDE7XG5cdFx0XHR9LCAwLjQ1KVxuXHRcdCk7XG5cblxuXHRcdC8vRXhwb1xuXHRcdF93cmFwKFwiRXhwb1wiLFxuXHRcdFx0X2NyZWF0ZShcIkV4cG9PdXRcIiwgZnVuY3Rpb24ocCkge1xuXHRcdFx0XHRyZXR1cm4gMSAtIE1hdGgucG93KDIsIC0xMCAqIHApO1xuXHRcdFx0fSksXG5cdFx0XHRfY3JlYXRlKFwiRXhwb0luXCIsIGZ1bmN0aW9uKHApIHtcblx0XHRcdFx0cmV0dXJuIE1hdGgucG93KDIsIDEwICogKHAgLSAxKSkgLSAwLjAwMTtcblx0XHRcdH0pLFxuXHRcdFx0X2NyZWF0ZShcIkV4cG9Jbk91dFwiLCBmdW5jdGlvbihwKSB7XG5cdFx0XHRcdHJldHVybiAoKHAgKj0gMikgPCAxKSA/IDAuNSAqIE1hdGgucG93KDIsIDEwICogKHAgLSAxKSkgOiAwLjUgKiAoMiAtIE1hdGgucG93KDIsIC0xMCAqIChwIC0gMSkpKTtcblx0XHRcdH0pXG5cdFx0KTtcblxuXG5cdFx0Ly9TaW5lXG5cdFx0X3dyYXAoXCJTaW5lXCIsXG5cdFx0XHRfY3JlYXRlKFwiU2luZU91dFwiLCBmdW5jdGlvbihwKSB7XG5cdFx0XHRcdHJldHVybiBNYXRoLnNpbihwICogX0hBTEZfUEkpO1xuXHRcdFx0fSksXG5cdFx0XHRfY3JlYXRlKFwiU2luZUluXCIsIGZ1bmN0aW9uKHApIHtcblx0XHRcdFx0cmV0dXJuIC1NYXRoLmNvcyhwICogX0hBTEZfUEkpICsgMTtcblx0XHRcdH0pLFxuXHRcdFx0X2NyZWF0ZShcIlNpbmVJbk91dFwiLCBmdW5jdGlvbihwKSB7XG5cdFx0XHRcdHJldHVybiAtMC41ICogKE1hdGguY29zKE1hdGguUEkgKiBwKSAtIDEpO1xuXHRcdFx0fSlcblx0XHQpO1xuXG5cdFx0X2NsYXNzKFwiZWFzaW5nLkVhc2VMb29rdXBcIiwge1xuXHRcdFx0XHRmaW5kOmZ1bmN0aW9uKHMpIHtcblx0XHRcdFx0XHRyZXR1cm4gRWFzZS5tYXBbc107XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRydWUpO1xuXG5cdFx0Ly9yZWdpc3RlciB0aGUgbm9uLXN0YW5kYXJkIGVhc2VzXG5cdFx0X2Vhc2VSZWcody5TbG93TW8sIFwiU2xvd01vXCIsIFwiZWFzZSxcIik7XG5cdFx0X2Vhc2VSZWcoUm91Z2hFYXNlLCBcIlJvdWdoRWFzZVwiLCBcImVhc2UsXCIpO1xuXHRcdF9lYXNlUmVnKFN0ZXBwZWRFYXNlLCBcIlN0ZXBwZWRFYXNlXCIsIFwiZWFzZSxcIik7XG5cblx0XHRyZXR1cm4gQmFjaztcblx0XHRcblx0fSwgdHJ1ZSk7XG5cblxufSk7XG5cbmlmIChfZ3NTY29wZS5fZ3NEZWZpbmUpIHsgX2dzU2NvcGUuX2dzUXVldWUucG9wKCkoKTsgfSAvL25lY2Vzc2FyeSBpbiBjYXNlIFR3ZWVuTGl0ZSB3YXMgYWxyZWFkeSBsb2FkZWQgc2VwYXJhdGVseS5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQmFzZSBjbGFzc2VzIGxpa2UgVHdlZW5MaXRlLCBTaW1wbGVUaW1lbGluZSwgRWFzZSwgVGlja2VyLCBldGMuXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbihmdW5jdGlvbih3aW5kb3csIG1vZHVsZU5hbWUpIHtcblxuXHRcdFwidXNlIHN0cmljdFwiO1xuXHRcdHZhciBfZ2xvYmFscyA9IHdpbmRvdy5HcmVlblNvY2tHbG9iYWxzID0gd2luZG93LkdyZWVuU29ja0dsb2JhbHMgfHwgd2luZG93O1xuXHRcdGlmIChfZ2xvYmFscy5Ud2VlbkxpdGUpIHtcblx0XHRcdHJldHVybjsgLy9pbiBjYXNlIHRoZSBjb3JlIHNldCBvZiBjbGFzc2VzIGlzIGFscmVhZHkgbG9hZGVkLCBkb24ndCBpbnN0YW50aWF0ZSB0d2ljZS5cblx0XHR9XG5cdFx0dmFyIF9uYW1lc3BhY2UgPSBmdW5jdGlvbihucykge1xuXHRcdFx0XHR2YXIgYSA9IG5zLnNwbGl0KFwiLlwiKSxcblx0XHRcdFx0XHRwID0gX2dsb2JhbHMsIGk7XG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0cFthW2ldXSA9IHAgPSBwW2FbaV1dIHx8IHt9O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBwO1xuXHRcdFx0fSxcblx0XHRcdGdzID0gX25hbWVzcGFjZShcImNvbS5ncmVlbnNvY2tcIiksXG5cdFx0XHRfdGlueU51bSA9IDAuMDAwMDAwMDAwMSxcblx0XHRcdF9zbGljZSA9IGZ1bmN0aW9uKGEpIHsgLy9kb24ndCB1c2UgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGFyZ2V0LCAwKSBiZWNhdXNlIHRoYXQgZG9lc24ndCB3b3JrIGluIElFOCB3aXRoIGEgTm9kZUxpc3QgdGhhdCdzIHJldHVybmVkIGJ5IHF1ZXJ5U2VsZWN0b3JBbGwoKVxuXHRcdFx0XHR2YXIgYiA9IFtdLFxuXHRcdFx0XHRcdGwgPSBhLmxlbmd0aCxcblx0XHRcdFx0XHRpO1xuXHRcdFx0XHRmb3IgKGkgPSAwOyBpICE9PSBsOyBiLnB1c2goYVtpKytdKSk7XG5cdFx0XHRcdHJldHVybiBiO1xuXHRcdFx0fSxcblx0XHRcdF9lbXB0eUZ1bmMgPSBmdW5jdGlvbigpIHt9LFxuXHRcdFx0X2lzQXJyYXkgPSAoZnVuY3Rpb24oKSB7IC8vd29ya3MgYXJvdW5kIGlzc3VlcyBpbiBpZnJhbWUgZW52aXJvbm1lbnRzIHdoZXJlIHRoZSBBcnJheSBnbG9iYWwgaXNuJ3Qgc2hhcmVkLCB0aHVzIGlmIHRoZSBvYmplY3Qgb3JpZ2luYXRlcyBpbiBhIGRpZmZlcmVudCB3aW5kb3cvaWZyYW1lLCBcIihvYmogaW5zdGFuY2VvZiBBcnJheSlcIiB3aWxsIGV2YWx1YXRlIGZhbHNlLiBXZSBhZGRlZCBzb21lIHNwZWVkIG9wdGltaXphdGlvbnMgdG8gYXZvaWQgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKCkgdW5sZXNzIGl0J3MgYWJzb2x1dGVseSBuZWNlc3NhcnkgYmVjYXVzZSBpdCdzIFZFUlkgc2xvdyAobGlrZSAyMHggc2xvd2VyKVxuXHRcdFx0XHR2YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLFxuXHRcdFx0XHRcdGFycmF5ID0gdG9TdHJpbmcuY2FsbChbXSk7XG5cdFx0XHRcdHJldHVybiBmdW5jdGlvbihvYmopIHtcblx0XHRcdFx0XHRyZXR1cm4gb2JqICE9IG51bGwgJiYgKG9iaiBpbnN0YW5jZW9mIEFycmF5IHx8ICh0eXBlb2Yob2JqKSA9PT0gXCJvYmplY3RcIiAmJiAhIW9iai5wdXNoICYmIHRvU3RyaW5nLmNhbGwob2JqKSA9PT0gYXJyYXkpKTtcblx0XHRcdFx0fTtcblx0XHRcdH0oKSksXG5cdFx0XHRhLCBpLCBwLCBfdGlja2VyLCBfdGlja2VyQWN0aXZlLFxuXHRcdFx0X2RlZkxvb2t1cCA9IHt9LFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIEBjb25zdHJ1Y3RvclxuXHRcdFx0ICogRGVmaW5lcyBhIEdyZWVuU29jayBjbGFzcywgb3B0aW9uYWxseSB3aXRoIGFuIGFycmF5IG9mIGRlcGVuZGVuY2llcyB0aGF0IG11c3QgYmUgaW5zdGFudGlhdGVkIGZpcnN0IGFuZCBwYXNzZWQgaW50byB0aGUgZGVmaW5pdGlvbi5cblx0XHRcdCAqIFRoaXMgYWxsb3dzIHVzZXJzIHRvIGxvYWQgR3JlZW5Tb2NrIEpTIGZpbGVzIGluIGFueSBvcmRlciBldmVuIGlmIHRoZXkgaGF2ZSBpbnRlcmRlcGVuZGVuY2llcyAobGlrZSBDU1NQbHVnaW4gZXh0ZW5kcyBUd2VlblBsdWdpbiB3aGljaCBpc1xuXHRcdFx0ICogaW5zaWRlIFR3ZWVuTGl0ZS5qcywgYnV0IGlmIENTU1BsdWdpbiBpcyBsb2FkZWQgZmlyc3QsIGl0IHNob3VsZCB3YWl0IHRvIHJ1biBpdHMgY29kZSB1bnRpbCBUd2VlbkxpdGUuanMgbG9hZHMgYW5kIGluc3RhbnRpYXRlcyBUd2VlblBsdWdpblxuXHRcdFx0ICogYW5kIHRoZW4gcGFzcyBUd2VlblBsdWdpbiB0byBDU1NQbHVnaW4ncyBkZWZpbml0aW9uKS4gVGhpcyBpcyBhbGwgZG9uZSBhdXRvbWF0aWNhbGx5IGFuZCBpbnRlcm5hbGx5LlxuXHRcdFx0ICpcblx0XHRcdCAqIEV2ZXJ5IGRlZmluaXRpb24gd2lsbCBiZSBhZGRlZCB0byBhIFwiY29tLmdyZWVuc29ja1wiIGdsb2JhbCBvYmplY3QgKHR5cGljYWxseSB3aW5kb3csIGJ1dCBpZiBhIHdpbmRvdy5HcmVlblNvY2tHbG9iYWxzIG9iamVjdCBpcyBmb3VuZCxcblx0XHRcdCAqIGl0IHdpbGwgZ28gdGhlcmUgYXMgb2YgdjEuNykuIEZvciBleGFtcGxlLCBUd2VlbkxpdGUgd2lsbCBiZSBmb3VuZCBhdCB3aW5kb3cuY29tLmdyZWVuc29jay5Ud2VlbkxpdGUgYW5kIHNpbmNlIGl0J3MgYSBnbG9iYWwgY2xhc3MgdGhhdCBzaG91bGQgYmUgYXZhaWxhYmxlIGFueXdoZXJlLFxuXHRcdFx0ICogaXQgaXMgQUxTTyByZWZlcmVuY2VkIGF0IHdpbmRvdy5Ud2VlbkxpdGUuIEhvd2V2ZXIgc29tZSBjbGFzc2VzIGFyZW4ndCBjb25zaWRlcmVkIGdsb2JhbCwgbGlrZSB0aGUgYmFzZSBjb20uZ3JlZW5zb2NrLmNvcmUuQW5pbWF0aW9uIGNsYXNzLCBzb1xuXHRcdFx0ICogdGhvc2Ugd2lsbCBvbmx5IGJlIGF0IHRoZSBwYWNrYWdlIGxpa2Ugd2luZG93LmNvbS5ncmVlbnNvY2suY29yZS5BbmltYXRpb24uIEFnYWluLCBpZiB5b3UgZGVmaW5lIGEgR3JlZW5Tb2NrR2xvYmFscyBvYmplY3Qgb24gdGhlIHdpbmRvdywgZXZlcnl0aGluZ1xuXHRcdFx0ICogZ2V0cyB0dWNrZWQgbmVhdGx5IGluc2lkZSB0aGVyZSBpbnN0ZWFkIG9mIG9uIHRoZSB3aW5kb3cgZGlyZWN0bHkuIFRoaXMgYWxsb3dzIHlvdSB0byBkbyBhZHZhbmNlZCB0aGluZ3MgbGlrZSBsb2FkIG11bHRpcGxlIHZlcnNpb25zIG9mIEdyZWVuU29ja1xuXHRcdFx0ICogZmlsZXMgYW5kIHB1dCB0aGVtIGludG8gZGlzdGluY3Qgb2JqZWN0cyAoaW1hZ2luZSBhIGJhbm5lciBhZCB1c2VzIGEgbmV3ZXIgdmVyc2lvbiBidXQgdGhlIG1haW4gc2l0ZSB1c2VzIGFuIG9sZGVyIG9uZSkuIEluIHRoYXQgY2FzZSwgeW91IGNvdWxkXG5cdFx0XHQgKiBzYW5kYm94IHRoZSBiYW5uZXIgb25lIGxpa2U6XG5cdFx0XHQgKlxuXHRcdFx0ICogPHNjcmlwdD5cblx0XHRcdCAqICAgICB2YXIgZ3MgPSB3aW5kb3cuR3JlZW5Tb2NrR2xvYmFscyA9IHt9OyAvL3RoZSBuZXdlciB2ZXJzaW9uIHdlJ3JlIGFib3V0IHRvIGxvYWQgY291bGQgbm93IGJlIHJlZmVyZW5jZWQgaW4gYSBcImdzXCIgb2JqZWN0LCBsaWtlIGdzLlR3ZWVuTGl0ZS50byguLi4pLiBVc2Ugd2hhdGV2ZXIgYWxpYXMgeW91IHdhbnQgYXMgbG9uZyBhcyBpdCdzIHVuaXF1ZSwgXCJnc1wiIG9yIFwiYmFubmVyXCIgb3Igd2hhdGV2ZXIuXG5cdFx0XHQgKiA8L3NjcmlwdD5cblx0XHRcdCAqIDxzY3JpcHQgc3JjPVwianMvZ3JlZW5zb2NrL3YxLjcvVHdlZW5NYXguanNcIj48L3NjcmlwdD5cblx0XHRcdCAqIDxzY3JpcHQ+XG5cdFx0XHQgKiAgICAgd2luZG93LkdyZWVuU29ja0dsb2JhbHMgPSB3aW5kb3cuX2dzUXVldWUgPSB3aW5kb3cuX2dzRGVmaW5lID0gbnVsbDsgLy9yZXNldCBpdCBiYWNrIHRvIG51bGwgKGFsb25nIHdpdGggdGhlIHNwZWNpYWwgX2dzUXVldWUgdmFyaWFibGUpIHNvIHRoYXQgdGhlIG5leHQgbG9hZCBvZiBUd2Vlbk1heCBhZmZlY3RzIHRoZSB3aW5kb3cgYW5kIHdlIGNhbiByZWZlcmVuY2UgdGhpbmdzIGRpcmVjdGx5IGxpa2UgVHdlZW5MaXRlLnRvKC4uLilcblx0XHRcdCAqIDwvc2NyaXB0PlxuXHRcdFx0ICogPHNjcmlwdCBzcmM9XCJqcy9ncmVlbnNvY2svdjEuNi9Ud2Vlbk1heC5qc1wiPjwvc2NyaXB0PlxuXHRcdFx0ICogPHNjcmlwdD5cblx0XHRcdCAqICAgICBncy5Ud2VlbkxpdGUudG8oLi4uKTsgLy93b3VsZCB1c2UgdjEuN1xuXHRcdFx0ICogICAgIFR3ZWVuTGl0ZS50byguLi4pOyAvL3dvdWxkIHVzZSB2MS42XG5cdFx0XHQgKiA8L3NjcmlwdD5cblx0XHRcdCAqXG5cdFx0XHQgKiBAcGFyYW0geyFzdHJpbmd9IG5zIFRoZSBuYW1lc3BhY2Ugb2YgdGhlIGNsYXNzIGRlZmluaXRpb24sIGxlYXZpbmcgb2ZmIFwiY29tLmdyZWVuc29jay5cIiBhcyB0aGF0J3MgYXNzdW1lZC4gRm9yIGV4YW1wbGUsIFwiVHdlZW5MaXRlXCIgb3IgXCJwbHVnaW5zLkNTU1BsdWdpblwiIG9yIFwiZWFzaW5nLkJhY2tcIi5cblx0XHRcdCAqIEBwYXJhbSB7IUFycmF5LjxzdHJpbmc+fSBkZXBlbmRlbmNpZXMgQW4gYXJyYXkgb2YgZGVwZW5kZW5jaWVzIChkZXNjcmliZWQgYXMgdGhlaXIgbmFtZXNwYWNlcyBtaW51cyBcImNvbS5ncmVlbnNvY2suXCIgcHJlZml4KS4gRm9yIGV4YW1wbGUgW1wiVHdlZW5MaXRlXCIsXCJwbHVnaW5zLlR3ZWVuUGx1Z2luXCIsXCJjb3JlLkFuaW1hdGlvblwiXVxuXHRcdFx0ICogQHBhcmFtIHshZnVuY3Rpb24oKTpPYmplY3R9IGZ1bmMgVGhlIGZ1bmN0aW9uIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCBhbmQgcGFzc2VkIHRoZSByZXNvbHZlZCBkZXBlbmRlbmNpZXMgd2hpY2ggd2lsbCByZXR1cm4gdGhlIGFjdHVhbCBjbGFzcyBmb3IgdGhpcyBkZWZpbml0aW9uLlxuXHRcdFx0ICogQHBhcmFtIHtib29sZWFuPX0gZ2xvYmFsIElmIHRydWUsIHRoZSBjbGFzcyB3aWxsIGJlIGFkZGVkIHRvIHRoZSBnbG9iYWwgc2NvcGUgKHR5cGljYWxseSB3aW5kb3cgdW5sZXNzIHlvdSBkZWZpbmUgYSB3aW5kb3cuR3JlZW5Tb2NrR2xvYmFscyBvYmplY3QpXG5cdFx0XHQgKi9cblx0XHRcdERlZmluaXRpb24gPSBmdW5jdGlvbihucywgZGVwZW5kZW5jaWVzLCBmdW5jLCBnbG9iYWwpIHtcblx0XHRcdFx0dGhpcy5zYyA9IChfZGVmTG9va3VwW25zXSkgPyBfZGVmTG9va3VwW25zXS5zYyA6IFtdOyAvL3N1YmNsYXNzZXNcblx0XHRcdFx0X2RlZkxvb2t1cFtuc10gPSB0aGlzO1xuXHRcdFx0XHR0aGlzLmdzQ2xhc3MgPSBudWxsO1xuXHRcdFx0XHR0aGlzLmZ1bmMgPSBmdW5jO1xuXHRcdFx0XHR2YXIgX2NsYXNzZXMgPSBbXTtcblx0XHRcdFx0dGhpcy5jaGVjayA9IGZ1bmN0aW9uKGluaXQpIHtcblx0XHRcdFx0XHR2YXIgaSA9IGRlcGVuZGVuY2llcy5sZW5ndGgsXG5cdFx0XHRcdFx0XHRtaXNzaW5nID0gaSxcblx0XHRcdFx0XHRcdGN1ciwgYSwgbiwgY2w7XG5cdFx0XHRcdFx0d2hpbGUgKC0taSA+IC0xKSB7XG5cdFx0XHRcdFx0XHRpZiAoKGN1ciA9IF9kZWZMb29rdXBbZGVwZW5kZW5jaWVzW2ldXSB8fCBuZXcgRGVmaW5pdGlvbihkZXBlbmRlbmNpZXNbaV0sIFtdKSkuZ3NDbGFzcykge1xuXHRcdFx0XHRcdFx0XHRfY2xhc3Nlc1tpXSA9IGN1ci5nc0NsYXNzO1xuXHRcdFx0XHRcdFx0XHRtaXNzaW5nLS07XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKGluaXQpIHtcblx0XHRcdFx0XHRcdFx0Y3VyLnNjLnB1c2godGhpcyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChtaXNzaW5nID09PSAwICYmIGZ1bmMpIHtcblx0XHRcdFx0XHRcdGEgPSAoXCJjb20uZ3JlZW5zb2NrLlwiICsgbnMpLnNwbGl0KFwiLlwiKTtcblx0XHRcdFx0XHRcdG4gPSBhLnBvcCgpO1xuXHRcdFx0XHRcdFx0Y2wgPSBfbmFtZXNwYWNlKGEuam9pbihcIi5cIikpW25dID0gdGhpcy5nc0NsYXNzID0gZnVuYy5hcHBseShmdW5jLCBfY2xhc3Nlcyk7XG5cblx0XHRcdFx0XHRcdC8vZXhwb3J0cyB0byBtdWx0aXBsZSBlbnZpcm9ubWVudHNcblx0XHRcdFx0XHRcdGlmIChnbG9iYWwpIHtcblx0XHRcdFx0XHRcdFx0X2dsb2JhbHNbbl0gPSBjbDsgLy9wcm92aWRlcyBhIHdheSB0byBhdm9pZCBnbG9iYWwgbmFtZXNwYWNlIHBvbGx1dGlvbi4gQnkgZGVmYXVsdCwgdGhlIG1haW4gY2xhc3NlcyBsaWtlIFR3ZWVuTGl0ZSwgUG93ZXIxLCBTdHJvbmcsIGV0Yy4gYXJlIGFkZGVkIHRvIHdpbmRvdyB1bmxlc3MgYSBHcmVlblNvY2tHbG9iYWxzIGlzIGRlZmluZWQuIFNvIGlmIHlvdSB3YW50IHRvIGhhdmUgdGhpbmdzIGFkZGVkIHRvIGEgY3VzdG9tIG9iamVjdCBpbnN0ZWFkLCBqdXN0IGRvIHNvbWV0aGluZyBsaWtlIHdpbmRvdy5HcmVlblNvY2tHbG9iYWxzID0ge30gYmVmb3JlIGxvYWRpbmcgYW55IEdyZWVuU29jayBmaWxlcy4gWW91IGNhbiBldmVuIHNldCB1cCBhbiBhbGlhcyBsaWtlIHdpbmRvdy5HcmVlblNvY2tHbG9iYWxzID0gd2luZG93cy5ncyA9IHt9IHNvIHRoYXQgeW91IGNhbiBhY2Nlc3MgZXZlcnl0aGluZyBsaWtlIGdzLlR3ZWVuTGl0ZS4gQWxzbyByZW1lbWJlciB0aGF0IEFMTCBjbGFzc2VzIGFyZSBhZGRlZCB0byB0aGUgd2luZG93LmNvbS5ncmVlbnNvY2sgb2JqZWN0IChpbiB0aGVpciByZXNwZWN0aXZlIHBhY2thZ2VzLCBsaWtlIGNvbS5ncmVlbnNvY2suZWFzaW5nLlBvd2VyMSwgY29tLmdyZWVuc29jay5Ud2VlbkxpdGUsIGV0Yy4pXG5cdFx0XHRcdFx0XHRcdGlmICh0eXBlb2YoZGVmaW5lKSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpeyAvL0FNRFxuXHRcdFx0XHRcdFx0XHRcdGRlZmluZSgod2luZG93LkdyZWVuU29ja0FNRFBhdGggPyB3aW5kb3cuR3JlZW5Tb2NrQU1EUGF0aCArIFwiL1wiIDogXCJcIikgKyBucy5zcGxpdChcIi5cIikucG9wKCksIFtdLCBmdW5jdGlvbigpIHsgcmV0dXJuIGNsOyB9KTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChucyA9PT0gbW9kdWxlTmFtZSAmJiB0eXBlb2YobW9kdWxlKSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBtb2R1bGUuZXhwb3J0cyl7IC8vbm9kZVxuXHRcdFx0XHRcdFx0XHRcdG1vZHVsZS5leHBvcnRzID0gY2w7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCB0aGlzLnNjLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuc2NbaV0uY2hlY2soKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0XHRcdHRoaXMuY2hlY2sodHJ1ZSk7XG5cdFx0XHR9LFxuXG5cdFx0XHQvL3VzZWQgdG8gY3JlYXRlIERlZmluaXRpb24gaW5zdGFuY2VzICh3aGljaCBiYXNpY2FsbHkgcmVnaXN0ZXJzIGEgY2xhc3MgdGhhdCBoYXMgZGVwZW5kZW5jaWVzKS5cblx0XHRcdF9nc0RlZmluZSA9IHdpbmRvdy5fZ3NEZWZpbmUgPSBmdW5jdGlvbihucywgZGVwZW5kZW5jaWVzLCBmdW5jLCBnbG9iYWwpIHtcblx0XHRcdFx0cmV0dXJuIG5ldyBEZWZpbml0aW9uKG5zLCBkZXBlbmRlbmNpZXMsIGZ1bmMsIGdsb2JhbCk7XG5cdFx0XHR9LFxuXG5cdFx0XHQvL2EgcXVpY2sgd2F5IHRvIGNyZWF0ZSBhIGNsYXNzIHRoYXQgZG9lc24ndCBoYXZlIGFueSBkZXBlbmRlbmNpZXMuIFJldHVybnMgdGhlIGNsYXNzLCBidXQgZmlyc3QgcmVnaXN0ZXJzIGl0IGluIHRoZSBHcmVlblNvY2sgbmFtZXNwYWNlIHNvIHRoYXQgb3RoZXIgY2xhc3NlcyBjYW4gZ3JhYiBpdCAob3RoZXIgY2xhc3NlcyBtaWdodCBiZSBkZXBlbmRlbnQgb24gdGhlIGNsYXNzKS5cblx0XHRcdF9jbGFzcyA9IGdzLl9jbGFzcyA9IGZ1bmN0aW9uKG5zLCBmdW5jLCBnbG9iYWwpIHtcblx0XHRcdFx0ZnVuYyA9IGZ1bmMgfHwgZnVuY3Rpb24oKSB7fTtcblx0XHRcdFx0X2dzRGVmaW5lKG5zLCBbXSwgZnVuY3Rpb24oKXsgcmV0dXJuIGZ1bmM7IH0sIGdsb2JhbCk7XG5cdFx0XHRcdHJldHVybiBmdW5jO1xuXHRcdFx0fTtcblxuXHRcdF9nc0RlZmluZS5nbG9iYWxzID0gX2dsb2JhbHM7XG5cblxuXG4vKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRWFzZVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cdFx0dmFyIF9iYXNlUGFyYW1zID0gWzAsIDAsIDEsIDFdLFxuXHRcdFx0X2JsYW5rQXJyYXkgPSBbXSxcblx0XHRcdEVhc2UgPSBfY2xhc3MoXCJlYXNpbmcuRWFzZVwiLCBmdW5jdGlvbihmdW5jLCBleHRyYVBhcmFtcywgdHlwZSwgcG93ZXIpIHtcblx0XHRcdFx0dGhpcy5fZnVuYyA9IGZ1bmM7XG5cdFx0XHRcdHRoaXMuX3R5cGUgPSB0eXBlIHx8IDA7XG5cdFx0XHRcdHRoaXMuX3Bvd2VyID0gcG93ZXIgfHwgMDtcblx0XHRcdFx0dGhpcy5fcGFyYW1zID0gZXh0cmFQYXJhbXMgPyBfYmFzZVBhcmFtcy5jb25jYXQoZXh0cmFQYXJhbXMpIDogX2Jhc2VQYXJhbXM7XG5cdFx0XHR9LCB0cnVlKSxcblx0XHRcdF9lYXNlTWFwID0gRWFzZS5tYXAgPSB7fSxcblx0XHRcdF9lYXNlUmVnID0gRWFzZS5yZWdpc3RlciA9IGZ1bmN0aW9uKGVhc2UsIG5hbWVzLCB0eXBlcywgY3JlYXRlKSB7XG5cdFx0XHRcdHZhciBuYSA9IG5hbWVzLnNwbGl0KFwiLFwiKSxcblx0XHRcdFx0XHRpID0gbmEubGVuZ3RoLFxuXHRcdFx0XHRcdHRhID0gKHR5cGVzIHx8IFwiZWFzZUluLGVhc2VPdXQsZWFzZUluT3V0XCIpLnNwbGl0KFwiLFwiKSxcblx0XHRcdFx0XHRlLCBuYW1lLCBqLCB0eXBlO1xuXHRcdFx0XHR3aGlsZSAoLS1pID4gLTEpIHtcblx0XHRcdFx0XHRuYW1lID0gbmFbaV07XG5cdFx0XHRcdFx0ZSA9IGNyZWF0ZSA/IF9jbGFzcyhcImVhc2luZy5cIituYW1lLCBudWxsLCB0cnVlKSA6IGdzLmVhc2luZ1tuYW1lXSB8fCB7fTtcblx0XHRcdFx0XHRqID0gdGEubGVuZ3RoO1xuXHRcdFx0XHRcdHdoaWxlICgtLWogPiAtMSkge1xuXHRcdFx0XHRcdFx0dHlwZSA9IHRhW2pdO1xuXHRcdFx0XHRcdFx0X2Vhc2VNYXBbbmFtZSArIFwiLlwiICsgdHlwZV0gPSBfZWFzZU1hcFt0eXBlICsgbmFtZV0gPSBlW3R5cGVdID0gZWFzZS5nZXRSYXRpbyA/IGVhc2UgOiBlYXNlW3R5cGVdIHx8IG5ldyBlYXNlKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0cCA9IEVhc2UucHJvdG90eXBlO1xuXHRcdHAuX2NhbGNFbmQgPSBmYWxzZTtcblx0XHRwLmdldFJhdGlvID0gZnVuY3Rpb24ocCkge1xuXHRcdFx0aWYgKHRoaXMuX2Z1bmMpIHtcblx0XHRcdFx0dGhpcy5fcGFyYW1zWzBdID0gcDtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX2Z1bmMuYXBwbHkobnVsbCwgdGhpcy5fcGFyYW1zKTtcblx0XHRcdH1cblx0XHRcdHZhciB0ID0gdGhpcy5fdHlwZSxcblx0XHRcdFx0cHcgPSB0aGlzLl9wb3dlcixcblx0XHRcdFx0ciA9ICh0ID09PSAxKSA/IDEgLSBwIDogKHQgPT09IDIpID8gcCA6IChwIDwgMC41KSA/IHAgKiAyIDogKDEgLSBwKSAqIDI7XG5cdFx0XHRpZiAocHcgPT09IDEpIHtcblx0XHRcdFx0ciAqPSByO1xuXHRcdFx0fSBlbHNlIGlmIChwdyA9PT0gMikge1xuXHRcdFx0XHRyICo9IHIgKiByO1xuXHRcdFx0fSBlbHNlIGlmIChwdyA9PT0gMykge1xuXHRcdFx0XHRyICo9IHIgKiByICogcjtcblx0XHRcdH0gZWxzZSBpZiAocHcgPT09IDQpIHtcblx0XHRcdFx0ciAqPSByICogciAqIHIgKiByO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuICh0ID09PSAxKSA/IDEgLSByIDogKHQgPT09IDIpID8gciA6IChwIDwgMC41KSA/IHIgLyAyIDogMSAtIChyIC8gMik7XG5cdFx0fTtcblxuXHRcdC8vY3JlYXRlIGFsbCB0aGUgc3RhbmRhcmQgZWFzZXMgbGlrZSBMaW5lYXIsIFF1YWQsIEN1YmljLCBRdWFydCwgUXVpbnQsIFN0cm9uZywgUG93ZXIwLCBQb3dlcjEsIFBvd2VyMiwgUG93ZXIzLCBhbmQgUG93ZXI0IChlYWNoIHdpdGggZWFzZUluLCBlYXNlT3V0LCBhbmQgZWFzZUluT3V0KVxuXHRcdGEgPSBbXCJMaW5lYXJcIixcIlF1YWRcIixcIkN1YmljXCIsXCJRdWFydFwiLFwiUXVpbnQsU3Ryb25nXCJdO1xuXHRcdGkgPSBhLmxlbmd0aDtcblx0XHR3aGlsZSAoLS1pID4gLTEpIHtcblx0XHRcdHAgPSBhW2ldK1wiLFBvd2VyXCIraTtcblx0XHRcdF9lYXNlUmVnKG5ldyBFYXNlKG51bGwsbnVsbCwxLGkpLCBwLCBcImVhc2VPdXRcIiwgdHJ1ZSk7XG5cdFx0XHRfZWFzZVJlZyhuZXcgRWFzZShudWxsLG51bGwsMixpKSwgcCwgXCJlYXNlSW5cIiArICgoaSA9PT0gMCkgPyBcIixlYXNlTm9uZVwiIDogXCJcIikpO1xuXHRcdFx0X2Vhc2VSZWcobmV3IEVhc2UobnVsbCxudWxsLDMsaSksIHAsIFwiZWFzZUluT3V0XCIpO1xuXHRcdH1cblx0XHRfZWFzZU1hcC5saW5lYXIgPSBncy5lYXNpbmcuTGluZWFyLmVhc2VJbjtcblx0XHRfZWFzZU1hcC5zd2luZyA9IGdzLmVhc2luZy5RdWFkLmVhc2VJbk91dDsgLy9mb3IgalF1ZXJ5IGZvbGtzXG5cblxuLypcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEV2ZW50RGlzcGF0Y2hlclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cdFx0dmFyIEV2ZW50RGlzcGF0Y2hlciA9IF9jbGFzcyhcImV2ZW50cy5FdmVudERpc3BhdGNoZXJcIiwgZnVuY3Rpb24odGFyZ2V0KSB7XG5cdFx0XHR0aGlzLl9saXN0ZW5lcnMgPSB7fTtcblx0XHRcdHRoaXMuX2V2ZW50VGFyZ2V0ID0gdGFyZ2V0IHx8IHRoaXM7XG5cdFx0fSk7XG5cdFx0cCA9IEV2ZW50RGlzcGF0Y2hlci5wcm90b3R5cGU7XG5cblx0XHRwLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBjYWxsYmFjaywgc2NvcGUsIHVzZVBhcmFtLCBwcmlvcml0eSkge1xuXHRcdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdFx0dmFyIGxpc3QgPSB0aGlzLl9saXN0ZW5lcnNbdHlwZV0sXG5cdFx0XHRcdGluZGV4ID0gMCxcblx0XHRcdFx0bGlzdGVuZXIsIGk7XG5cdFx0XHRpZiAobGlzdCA9PSBudWxsKSB7XG5cdFx0XHRcdHRoaXMuX2xpc3RlbmVyc1t0eXBlXSA9IGxpc3QgPSBbXTtcblx0XHRcdH1cblx0XHRcdGkgPSBsaXN0Lmxlbmd0aDtcblx0XHRcdHdoaWxlICgtLWkgPiAtMSkge1xuXHRcdFx0XHRsaXN0ZW5lciA9IGxpc3RbaV07XG5cdFx0XHRcdGlmIChsaXN0ZW5lci5jID09PSBjYWxsYmFjayAmJiBsaXN0ZW5lci5zID09PSBzY29wZSkge1xuXHRcdFx0XHRcdGxpc3Quc3BsaWNlKGksIDEpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGluZGV4ID09PSAwICYmIGxpc3RlbmVyLnByIDwgcHJpb3JpdHkpIHtcblx0XHRcdFx0XHRpbmRleCA9IGkgKyAxO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRsaXN0LnNwbGljZShpbmRleCwgMCwge2M6Y2FsbGJhY2ssIHM6c2NvcGUsIHVwOnVzZVBhcmFtLCBwcjpwcmlvcml0eX0pO1xuXHRcdFx0aWYgKHRoaXMgPT09IF90aWNrZXIgJiYgIV90aWNrZXJBY3RpdmUpIHtcblx0XHRcdFx0X3RpY2tlci53YWtlKCk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHAucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGNhbGxiYWNrKSB7XG5cdFx0XHR2YXIgbGlzdCA9IHRoaXMuX2xpc3RlbmVyc1t0eXBlXSwgaTtcblx0XHRcdGlmIChsaXN0KSB7XG5cdFx0XHRcdGkgPSBsaXN0Lmxlbmd0aDtcblx0XHRcdFx0d2hpbGUgKC0taSA+IC0xKSB7XG5cdFx0XHRcdFx0aWYgKGxpc3RbaV0uYyA9PT0gY2FsbGJhY2spIHtcblx0XHRcdFx0XHRcdGxpc3Quc3BsaWNlKGksIDEpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRwLmRpc3BhdGNoRXZlbnQgPSBmdW5jdGlvbih0eXBlKSB7XG5cdFx0XHR2YXIgbGlzdCA9IHRoaXMuX2xpc3RlbmVyc1t0eXBlXSxcblx0XHRcdFx0aSwgdCwgbGlzdGVuZXI7XG5cdFx0XHRpZiAobGlzdCkge1xuXHRcdFx0XHRpID0gbGlzdC5sZW5ndGg7XG5cdFx0XHRcdHQgPSB0aGlzLl9ldmVudFRhcmdldDtcblx0XHRcdFx0d2hpbGUgKC0taSA+IC0xKSB7XG5cdFx0XHRcdFx0bGlzdGVuZXIgPSBsaXN0W2ldO1xuXHRcdFx0XHRcdGlmIChsaXN0ZW5lcikge1xuXHRcdFx0XHRcdFx0aWYgKGxpc3RlbmVyLnVwKSB7XG5cdFx0XHRcdFx0XHRcdGxpc3RlbmVyLmMuY2FsbChsaXN0ZW5lci5zIHx8IHQsIHt0eXBlOnR5cGUsIHRhcmdldDp0fSk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRsaXN0ZW5lci5jLmNhbGwobGlzdGVuZXIucyB8fCB0KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXG5cbi8qXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBUaWNrZXJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuIFx0XHR2YXIgX3JlcUFuaW1GcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUsXG5cdFx0XHRfY2FuY2VsQW5pbUZyYW1lID0gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lLFxuXHRcdFx0X2dldFRpbWUgPSBEYXRlLm5vdyB8fCBmdW5jdGlvbigpIHtyZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7fSxcblx0XHRcdF9sYXN0VXBkYXRlID0gX2dldFRpbWUoKTtcblxuXHRcdC8vbm93IHRyeSB0byBkZXRlcm1pbmUgdGhlIHJlcXVlc3RBbmltYXRpb25GcmFtZSBhbmQgY2FuY2VsQW5pbWF0aW9uRnJhbWUgZnVuY3Rpb25zIGFuZCBpZiBub25lIGFyZSBmb3VuZCwgd2UnbGwgdXNlIGEgc2V0VGltZW91dCgpL2NsZWFyVGltZW91dCgpIHBvbHlmaWxsLlxuXHRcdGEgPSBbXCJtc1wiLFwibW96XCIsXCJ3ZWJraXRcIixcIm9cIl07XG5cdFx0aSA9IGEubGVuZ3RoO1xuXHRcdHdoaWxlICgtLWkgPiAtMSAmJiAhX3JlcUFuaW1GcmFtZSkge1xuXHRcdFx0X3JlcUFuaW1GcmFtZSA9IHdpbmRvd1thW2ldICsgXCJSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcIl07XG5cdFx0XHRfY2FuY2VsQW5pbUZyYW1lID0gd2luZG93W2FbaV0gKyBcIkNhbmNlbEFuaW1hdGlvbkZyYW1lXCJdIHx8IHdpbmRvd1thW2ldICsgXCJDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcIl07XG5cdFx0fVxuXG5cdFx0X2NsYXNzKFwiVGlja2VyXCIsIGZ1bmN0aW9uKGZwcywgdXNlUkFGKSB7XG5cdFx0XHR2YXIgX3NlbGYgPSB0aGlzLFxuXHRcdFx0XHRfc3RhcnRUaW1lID0gX2dldFRpbWUoKSxcblx0XHRcdFx0X3VzZVJBRiA9ICh1c2VSQUYgIT09IGZhbHNlICYmIF9yZXFBbmltRnJhbWUpLFxuXHRcdFx0XHRfbGFnVGhyZXNob2xkID0gNTAwLFxuXHRcdFx0XHRfYWRqdXN0ZWRMYWcgPSAzMyxcblx0XHRcdFx0X3RpY2tXb3JkID0gXCJ0aWNrXCIsIC8vaGVscHMgcmVkdWNlIGdjIGJ1cmRlblxuXHRcdFx0XHRfZnBzLCBfcmVxLCBfaWQsIF9nYXAsIF9uZXh0VGltZSxcblx0XHRcdFx0X3RpY2sgPSBmdW5jdGlvbihtYW51YWwpIHtcblx0XHRcdFx0XHR2YXIgZWxhcHNlZCA9IF9nZXRUaW1lKCkgLSBfbGFzdFVwZGF0ZSxcblx0XHRcdFx0XHRcdG92ZXJsYXAsIGRpc3BhdGNoO1xuXHRcdFx0XHRcdGlmIChlbGFwc2VkID4gX2xhZ1RocmVzaG9sZCkge1xuXHRcdFx0XHRcdFx0X3N0YXJ0VGltZSArPSBlbGFwc2VkIC0gX2FkanVzdGVkTGFnO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRfbGFzdFVwZGF0ZSArPSBlbGFwc2VkO1xuXHRcdFx0XHRcdF9zZWxmLnRpbWUgPSAoX2xhc3RVcGRhdGUgLSBfc3RhcnRUaW1lKSAvIDEwMDA7XG5cdFx0XHRcdFx0b3ZlcmxhcCA9IF9zZWxmLnRpbWUgLSBfbmV4dFRpbWU7XG5cdFx0XHRcdFx0aWYgKCFfZnBzIHx8IG92ZXJsYXAgPiAwIHx8IG1hbnVhbCA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRcdFx0X3NlbGYuZnJhbWUrKztcblx0XHRcdFx0XHRcdF9uZXh0VGltZSArPSBvdmVybGFwICsgKG92ZXJsYXAgPj0gX2dhcCA/IDAuMDA0IDogX2dhcCAtIG92ZXJsYXApO1xuXHRcdFx0XHRcdFx0ZGlzcGF0Y2ggPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAobWFudWFsICE9PSB0cnVlKSB7IC8vbWFrZSBzdXJlIHRoZSByZXF1ZXN0IGlzIG1hZGUgYmVmb3JlIHdlIGRpc3BhdGNoIHRoZSBcInRpY2tcIiBldmVudCBzbyB0aGF0IHRpbWluZyBpcyBtYWludGFpbmVkLiBPdGhlcndpc2UsIGlmIHByb2Nlc3NpbmcgdGhlIFwidGlja1wiIHJlcXVpcmVzIGEgYnVuY2ggb2YgdGltZSAobGlrZSAxNW1zKSBhbmQgd2UncmUgdXNpbmcgYSBzZXRUaW1lb3V0KCkgdGhhdCdzIGJhc2VkIG9uIDE2LjdtcywgaXQnZCB0ZWNobmljYWxseSB0YWtlIDMxLjdtcyBiZXR3ZWVuIGZyYW1lcyBvdGhlcndpc2UuXG5cdFx0XHRcdFx0XHRfaWQgPSBfcmVxKF90aWNrKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGRpc3BhdGNoKSB7XG5cdFx0XHRcdFx0XHRfc2VsZi5kaXNwYXRjaEV2ZW50KF90aWNrV29yZCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXG5cdFx0XHRFdmVudERpc3BhdGNoZXIuY2FsbChfc2VsZik7XG5cdFx0XHRfc2VsZi50aW1lID0gX3NlbGYuZnJhbWUgPSAwO1xuXHRcdFx0X3NlbGYudGljayA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRfdGljayh0cnVlKTtcblx0XHRcdH07XG5cblx0XHRcdF9zZWxmLmxhZ1Ntb290aGluZyA9IGZ1bmN0aW9uKHRocmVzaG9sZCwgYWRqdXN0ZWRMYWcpIHtcblx0XHRcdFx0X2xhZ1RocmVzaG9sZCA9IHRocmVzaG9sZCB8fCAoMSAvIF90aW55TnVtKTsgLy96ZXJvIHNob3VsZCBiZSBpbnRlcnByZXRlZCBhcyBiYXNpY2FsbHkgdW5saW1pdGVkXG5cdFx0XHRcdF9hZGp1c3RlZExhZyA9IE1hdGgubWluKGFkanVzdGVkTGFnLCBfbGFnVGhyZXNob2xkLCAwKTtcblx0XHRcdH07XG5cblx0XHRcdF9zZWxmLnNsZWVwID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmIChfaWQgPT0gbnVsbCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIV91c2VSQUYgfHwgIV9jYW5jZWxBbmltRnJhbWUpIHtcblx0XHRcdFx0XHRjbGVhclRpbWVvdXQoX2lkKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRfY2FuY2VsQW5pbUZyYW1lKF9pZCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0X3JlcSA9IF9lbXB0eUZ1bmM7XG5cdFx0XHRcdF9pZCA9IG51bGw7XG5cdFx0XHRcdGlmIChfc2VsZiA9PT0gX3RpY2tlcikge1xuXHRcdFx0XHRcdF90aWNrZXJBY3RpdmUgPSBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0X3NlbGYud2FrZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAoX2lkICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0X3NlbGYuc2xlZXAoKTtcblx0XHRcdFx0fSBlbHNlIGlmIChfc2VsZi5mcmFtZSA+IDEwKSB7IC8vZG9uJ3QgdHJpZ2dlciBsYWdTbW9vdGhpbmcgaWYgd2UncmUganVzdCB3YWtpbmcgdXAsIGFuZCBtYWtlIHN1cmUgdGhhdCBhdCBsZWFzdCAxMCBmcmFtZXMgaGF2ZSBlbGFwc2VkIGJlY2F1c2Ugb2YgdGhlIGlPUyBidWcgdGhhdCB3ZSB3b3JrIGFyb3VuZCBiZWxvdyB3aXRoIHRoZSAxLjUtc2Vjb25kIHNldFRpbW91dCgpLlxuXHRcdFx0XHRcdF9sYXN0VXBkYXRlID0gX2dldFRpbWUoKSAtIF9sYWdUaHJlc2hvbGQgKyA1O1xuXHRcdFx0XHR9XG5cdFx0XHRcdF9yZXEgPSAoX2ZwcyA9PT0gMCkgPyBfZW1wdHlGdW5jIDogKCFfdXNlUkFGIHx8ICFfcmVxQW5pbUZyYW1lKSA/IGZ1bmN0aW9uKGYpIHsgcmV0dXJuIHNldFRpbWVvdXQoZiwgKChfbmV4dFRpbWUgLSBfc2VsZi50aW1lKSAqIDEwMDAgKyAxKSB8IDApOyB9IDogX3JlcUFuaW1GcmFtZTtcblx0XHRcdFx0aWYgKF9zZWxmID09PSBfdGlja2VyKSB7XG5cdFx0XHRcdFx0X3RpY2tlckFjdGl2ZSA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0X3RpY2soMik7XG5cdFx0XHR9O1xuXG5cdFx0XHRfc2VsZi5mcHMgPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdFx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdFx0XHRyZXR1cm4gX2Zwcztcblx0XHRcdFx0fVxuXHRcdFx0XHRfZnBzID0gdmFsdWU7XG5cdFx0XHRcdF9nYXAgPSAxIC8gKF9mcHMgfHwgNjApO1xuXHRcdFx0XHRfbmV4dFRpbWUgPSB0aGlzLnRpbWUgKyBfZ2FwO1xuXHRcdFx0XHRfc2VsZi53YWtlKCk7XG5cdFx0XHR9O1xuXG5cdFx0XHRfc2VsZi51c2VSQUYgPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdFx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdFx0XHRyZXR1cm4gX3VzZVJBRjtcblx0XHRcdFx0fVxuXHRcdFx0XHRfc2VsZi5zbGVlcCgpO1xuXHRcdFx0XHRfdXNlUkFGID0gdmFsdWU7XG5cdFx0XHRcdF9zZWxmLmZwcyhfZnBzKTtcblx0XHRcdH07XG5cdFx0XHRfc2VsZi5mcHMoZnBzKTtcblxuXHRcdFx0Ly9hIGJ1ZyBpbiBpT1MgNiBTYWZhcmkgb2NjYXNpb25hbGx5IHByZXZlbnRzIHRoZSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgZnJvbSB3b3JraW5nIGluaXRpYWxseSwgc28gd2UgdXNlIGEgMS41LXNlY29uZCB0aW1lb3V0IHRoYXQgYXV0b21hdGljYWxseSBmYWxscyBiYWNrIHRvIHNldFRpbWVvdXQoKSBpZiBpdCBzZW5zZXMgdGhpcyBjb25kaXRpb24uXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAoX3VzZVJBRiAmJiBfc2VsZi5mcmFtZSA8IDUpIHtcblx0XHRcdFx0XHRfc2VsZi51c2VSQUYoZmFsc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCAxNTAwKTtcblx0XHR9KTtcblxuXHRcdHAgPSBncy5UaWNrZXIucHJvdG90eXBlID0gbmV3IGdzLmV2ZW50cy5FdmVudERpc3BhdGNoZXIoKTtcblx0XHRwLmNvbnN0cnVjdG9yID0gZ3MuVGlja2VyO1xuXG5cbi8qXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBBbmltYXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXHRcdHZhciBBbmltYXRpb24gPSBfY2xhc3MoXCJjb3JlLkFuaW1hdGlvblwiLCBmdW5jdGlvbihkdXJhdGlvbiwgdmFycykge1xuXHRcdFx0XHR0aGlzLnZhcnMgPSB2YXJzID0gdmFycyB8fCB7fTtcblx0XHRcdFx0dGhpcy5fZHVyYXRpb24gPSB0aGlzLl90b3RhbER1cmF0aW9uID0gZHVyYXRpb24gfHwgMDtcblx0XHRcdFx0dGhpcy5fZGVsYXkgPSBOdW1iZXIodmFycy5kZWxheSkgfHwgMDtcblx0XHRcdFx0dGhpcy5fdGltZVNjYWxlID0gMTtcblx0XHRcdFx0dGhpcy5fYWN0aXZlID0gKHZhcnMuaW1tZWRpYXRlUmVuZGVyID09PSB0cnVlKTtcblx0XHRcdFx0dGhpcy5kYXRhID0gdmFycy5kYXRhO1xuXHRcdFx0XHR0aGlzLl9yZXZlcnNlZCA9ICh2YXJzLnJldmVyc2VkID09PSB0cnVlKTtcblxuXHRcdFx0XHRpZiAoIV9yb290VGltZWxpbmUpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFfdGlja2VyQWN0aXZlKSB7IC8vc29tZSBicm93c2VycyAobGlrZSBpT1MgNiBTYWZhcmkpIHNodXQgZG93biBKYXZhU2NyaXB0IGV4ZWN1dGlvbiB3aGVuIHRoZSB0YWIgaXMgZGlzYWJsZWQgYW5kIHRoZXkgW29jY2FzaW9uYWxseV0gbmVnbGVjdCB0byBzdGFydCB1cCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgYWdhaW4gd2hlbiByZXR1cm5pbmcgLSB0aGlzIGNvZGUgZW5zdXJlcyB0aGF0IHRoZSBlbmdpbmUgc3RhcnRzIHVwIGFnYWluIHByb3Blcmx5LlxuXHRcdFx0XHRcdF90aWNrZXIud2FrZSgpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dmFyIHRsID0gdGhpcy52YXJzLnVzZUZyYW1lcyA/IF9yb290RnJhbWVzVGltZWxpbmUgOiBfcm9vdFRpbWVsaW5lO1xuXHRcdFx0XHR0bC5hZGQodGhpcywgdGwuX3RpbWUpO1xuXG5cdFx0XHRcdGlmICh0aGlzLnZhcnMucGF1c2VkKSB7XG5cdFx0XHRcdFx0dGhpcy5wYXVzZWQodHJ1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0X3RpY2tlciA9IEFuaW1hdGlvbi50aWNrZXIgPSBuZXcgZ3MuVGlja2VyKCk7XG5cdFx0cCA9IEFuaW1hdGlvbi5wcm90b3R5cGU7XG5cdFx0cC5fZGlydHkgPSBwLl9nYyA9IHAuX2luaXR0ZWQgPSBwLl9wYXVzZWQgPSBmYWxzZTtcblx0XHRwLl90b3RhbFRpbWUgPSBwLl90aW1lID0gMDtcblx0XHRwLl9yYXdQcmV2VGltZSA9IC0xO1xuXHRcdHAuX25leHQgPSBwLl9sYXN0ID0gcC5fb25VcGRhdGUgPSBwLl90aW1lbGluZSA9IHAudGltZWxpbmUgPSBudWxsO1xuXHRcdHAuX3BhdXNlZCA9IGZhbHNlO1xuXG5cblx0XHQvL3NvbWUgYnJvd3NlcnMgKGxpa2UgaU9TKSBvY2Nhc2lvbmFsbHkgZHJvcCB0aGUgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIGV2ZW50IHdoZW4gdGhlIHVzZXIgc3dpdGNoZXMgdG8gYSBkaWZmZXJlbnQgdGFiIGFuZCB0aGVuIGNvbWVzIGJhY2sgYWdhaW4sIHNvIHdlIHVzZSBhIDItc2Vjb25kIHNldFRpbWVvdXQoKSB0byBzZW5zZSBpZi93aGVuIHRoYXQgY29uZGl0aW9uIG9jY3VycyBhbmQgdGhlbiB3YWtlKCkgdGhlIHRpY2tlci5cblx0XHR2YXIgX2NoZWNrVGltZW91dCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAoX3RpY2tlckFjdGl2ZSAmJiBfZ2V0VGltZSgpIC0gX2xhc3RVcGRhdGUgPiAyMDAwKSB7XG5cdFx0XHRcdFx0X3RpY2tlci53YWtlKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0c2V0VGltZW91dChfY2hlY2tUaW1lb3V0LCAyMDAwKTtcblx0XHRcdH07XG5cdFx0X2NoZWNrVGltZW91dCgpO1xuXG5cblx0XHRwLnBsYXkgPSBmdW5jdGlvbihmcm9tLCBzdXBwcmVzc0V2ZW50cykge1xuXHRcdFx0aWYgKGZyb20gIT0gbnVsbCkge1xuXHRcdFx0XHR0aGlzLnNlZWsoZnJvbSwgc3VwcHJlc3NFdmVudHMpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXMucmV2ZXJzZWQoZmFsc2UpLnBhdXNlZChmYWxzZSk7XG5cdFx0fTtcblxuXHRcdHAucGF1c2UgPSBmdW5jdGlvbihhdFRpbWUsIHN1cHByZXNzRXZlbnRzKSB7XG5cdFx0XHRpZiAoYXRUaW1lICE9IG51bGwpIHtcblx0XHRcdFx0dGhpcy5zZWVrKGF0VGltZSwgc3VwcHJlc3NFdmVudHMpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXMucGF1c2VkKHRydWUpO1xuXHRcdH07XG5cblx0XHRwLnJlc3VtZSA9IGZ1bmN0aW9uKGZyb20sIHN1cHByZXNzRXZlbnRzKSB7XG5cdFx0XHRpZiAoZnJvbSAhPSBudWxsKSB7XG5cdFx0XHRcdHRoaXMuc2Vlayhmcm9tLCBzdXBwcmVzc0V2ZW50cyk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcy5wYXVzZWQoZmFsc2UpO1xuXHRcdH07XG5cblx0XHRwLnNlZWsgPSBmdW5jdGlvbih0aW1lLCBzdXBwcmVzc0V2ZW50cykge1xuXHRcdFx0cmV0dXJuIHRoaXMudG90YWxUaW1lKE51bWJlcih0aW1lKSwgc3VwcHJlc3NFdmVudHMgIT09IGZhbHNlKTtcblx0XHR9O1xuXG5cdFx0cC5yZXN0YXJ0ID0gZnVuY3Rpb24oaW5jbHVkZURlbGF5LCBzdXBwcmVzc0V2ZW50cykge1xuXHRcdFx0cmV0dXJuIHRoaXMucmV2ZXJzZWQoZmFsc2UpLnBhdXNlZChmYWxzZSkudG90YWxUaW1lKGluY2x1ZGVEZWxheSA/IC10aGlzLl9kZWxheSA6IDAsIChzdXBwcmVzc0V2ZW50cyAhPT0gZmFsc2UpLCB0cnVlKTtcblx0XHR9O1xuXG5cdFx0cC5yZXZlcnNlID0gZnVuY3Rpb24oZnJvbSwgc3VwcHJlc3NFdmVudHMpIHtcblx0XHRcdGlmIChmcm9tICE9IG51bGwpIHtcblx0XHRcdFx0dGhpcy5zZWVrKChmcm9tIHx8IHRoaXMudG90YWxEdXJhdGlvbigpKSwgc3VwcHJlc3NFdmVudHMpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXMucmV2ZXJzZWQodHJ1ZSkucGF1c2VkKGZhbHNlKTtcblx0XHR9O1xuXG5cdFx0cC5yZW5kZXIgPSBmdW5jdGlvbih0aW1lLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpIHtcblx0XHRcdC8vc3R1YiAtIHdlIG92ZXJyaWRlIHRoaXMgbWV0aG9kIGluIHN1YmNsYXNzZXMuXG5cdFx0fTtcblxuXHRcdHAuaW52YWxpZGF0ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0dGhpcy5fdGltZSA9IHRoaXMuX3RvdGFsVGltZSA9IDA7XG5cdFx0XHR0aGlzLl9pbml0dGVkID0gdGhpcy5fZ2MgPSBmYWxzZTtcblx0XHRcdHRoaXMuX3Jhd1ByZXZUaW1lID0gLTE7XG5cdFx0XHRpZiAodGhpcy5fZ2MgfHwgIXRoaXMudGltZWxpbmUpIHtcblx0XHRcdFx0dGhpcy5fZW5hYmxlZCh0cnVlKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH07XG5cblx0XHRwLmlzQWN0aXZlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgdGwgPSB0aGlzLl90aW1lbGluZSwgLy90aGUgMiByb290IHRpbWVsaW5lcyB3b24ndCBoYXZlIGEgX3RpbWVsaW5lOyB0aGV5J3JlIGFsd2F5cyBhY3RpdmUuXG5cdFx0XHRcdHN0YXJ0VGltZSA9IHRoaXMuX3N0YXJ0VGltZSxcblx0XHRcdFx0cmF3VGltZTtcblx0XHRcdHJldHVybiAoIXRsIHx8ICghdGhpcy5fZ2MgJiYgIXRoaXMuX3BhdXNlZCAmJiB0bC5pc0FjdGl2ZSgpICYmIChyYXdUaW1lID0gdGwucmF3VGltZSgpKSA+PSBzdGFydFRpbWUgJiYgcmF3VGltZSA8IHN0YXJ0VGltZSArIHRoaXMudG90YWxEdXJhdGlvbigpIC8gdGhpcy5fdGltZVNjYWxlKSk7XG5cdFx0fTtcblxuXHRcdHAuX2VuYWJsZWQgPSBmdW5jdGlvbiAoZW5hYmxlZCwgaWdub3JlVGltZWxpbmUpIHtcblx0XHRcdGlmICghX3RpY2tlckFjdGl2ZSkge1xuXHRcdFx0XHRfdGlja2VyLndha2UoKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuX2djID0gIWVuYWJsZWQ7XG5cdFx0XHR0aGlzLl9hY3RpdmUgPSB0aGlzLmlzQWN0aXZlKCk7XG5cdFx0XHRpZiAoaWdub3JlVGltZWxpbmUgIT09IHRydWUpIHtcblx0XHRcdFx0aWYgKGVuYWJsZWQgJiYgIXRoaXMudGltZWxpbmUpIHtcblx0XHRcdFx0XHR0aGlzLl90aW1lbGluZS5hZGQodGhpcywgdGhpcy5fc3RhcnRUaW1lIC0gdGhpcy5fZGVsYXkpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKCFlbmFibGVkICYmIHRoaXMudGltZWxpbmUpIHtcblx0XHRcdFx0XHR0aGlzLl90aW1lbGluZS5fcmVtb3ZlKHRoaXMsIHRydWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fTtcblxuXG5cdFx0cC5fa2lsbCA9IGZ1bmN0aW9uKHZhcnMsIHRhcmdldCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuX2VuYWJsZWQoZmFsc2UsIGZhbHNlKTtcblx0XHR9O1xuXG5cdFx0cC5raWxsID0gZnVuY3Rpb24odmFycywgdGFyZ2V0KSB7XG5cdFx0XHR0aGlzLl9raWxsKHZhcnMsIHRhcmdldCk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9O1xuXG5cdFx0cC5fdW5jYWNoZSA9IGZ1bmN0aW9uKGluY2x1ZGVTZWxmKSB7XG5cdFx0XHR2YXIgdHdlZW4gPSBpbmNsdWRlU2VsZiA/IHRoaXMgOiB0aGlzLnRpbWVsaW5lO1xuXHRcdFx0d2hpbGUgKHR3ZWVuKSB7XG5cdFx0XHRcdHR3ZWVuLl9kaXJ0eSA9IHRydWU7XG5cdFx0XHRcdHR3ZWVuID0gdHdlZW4udGltZWxpbmU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9O1xuXG5cdFx0cC5fc3dhcFNlbGZJblBhcmFtcyA9IGZ1bmN0aW9uKHBhcmFtcykge1xuXHRcdFx0dmFyIGkgPSBwYXJhbXMubGVuZ3RoLFxuXHRcdFx0XHRjb3B5ID0gcGFyYW1zLmNvbmNhdCgpO1xuXHRcdFx0d2hpbGUgKC0taSA+IC0xKSB7XG5cdFx0XHRcdGlmIChwYXJhbXNbaV0gPT09IFwie3NlbGZ9XCIpIHtcblx0XHRcdFx0XHRjb3B5W2ldID0gdGhpcztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGNvcHk7XG5cdFx0fTtcblxuLy8tLS0tQW5pbWF0aW9uIGdldHRlcnMvc2V0dGVycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0cC5ldmVudENhbGxiYWNrID0gZnVuY3Rpb24odHlwZSwgY2FsbGJhY2ssIHBhcmFtcywgc2NvcGUpIHtcblx0XHRcdGlmICgodHlwZSB8fCBcIlwiKS5zdWJzdHIoMCwyKSA9PT0gXCJvblwiKSB7XG5cdFx0XHRcdHZhciB2ID0gdGhpcy52YXJzO1xuXHRcdFx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHRcdHJldHVybiB2W3R5cGVdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChjYWxsYmFjayA9PSBudWxsKSB7XG5cdFx0XHRcdFx0ZGVsZXRlIHZbdHlwZV07XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dlt0eXBlXSA9IGNhbGxiYWNrO1xuXHRcdFx0XHRcdHZbdHlwZSArIFwiUGFyYW1zXCJdID0gKF9pc0FycmF5KHBhcmFtcykgJiYgcGFyYW1zLmpvaW4oXCJcIikuaW5kZXhPZihcIntzZWxmfVwiKSAhPT0gLTEpID8gdGhpcy5fc3dhcFNlbGZJblBhcmFtcyhwYXJhbXMpIDogcGFyYW1zO1xuXHRcdFx0XHRcdHZbdHlwZSArIFwiU2NvcGVcIl0gPSBzY29wZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodHlwZSA9PT0gXCJvblVwZGF0ZVwiKSB7XG5cdFx0XHRcdFx0dGhpcy5fb25VcGRhdGUgPSBjYWxsYmFjaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fTtcblxuXHRcdHAuZGVsYXkgPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLl9kZWxheTtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLl90aW1lbGluZS5zbW9vdGhDaGlsZFRpbWluZykge1xuXHRcdFx0XHR0aGlzLnN0YXJ0VGltZSggdGhpcy5fc3RhcnRUaW1lICsgdmFsdWUgLSB0aGlzLl9kZWxheSApO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5fZGVsYXkgPSB2YWx1ZTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH07XG5cblx0XHRwLmR1cmF0aW9uID0gZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdFx0XHR0aGlzLl9kaXJ0eSA9IGZhbHNlO1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fZHVyYXRpb247XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl9kdXJhdGlvbiA9IHRoaXMuX3RvdGFsRHVyYXRpb24gPSB2YWx1ZTtcblx0XHRcdHRoaXMuX3VuY2FjaGUodHJ1ZSk7IC8vdHJ1ZSBpbiBjYXNlIGl0J3MgYSBUd2Vlbk1heCBvciBUaW1lbGluZU1heCB0aGF0IGhhcyBhIHJlcGVhdCAtIHdlJ2xsIG5lZWQgdG8gcmVmcmVzaCB0aGUgdG90YWxEdXJhdGlvbi5cblx0XHRcdGlmICh0aGlzLl90aW1lbGluZS5zbW9vdGhDaGlsZFRpbWluZykgaWYgKHRoaXMuX3RpbWUgPiAwKSBpZiAodGhpcy5fdGltZSA8IHRoaXMuX2R1cmF0aW9uKSBpZiAodmFsdWUgIT09IDApIHtcblx0XHRcdFx0dGhpcy50b3RhbFRpbWUodGhpcy5fdG90YWxUaW1lICogKHZhbHVlIC8gdGhpcy5fZHVyYXRpb24pLCB0cnVlKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH07XG5cblx0XHRwLnRvdGFsRHVyYXRpb24gPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdFx0dGhpcy5fZGlydHkgPSBmYWxzZTtcblx0XHRcdHJldHVybiAoIWFyZ3VtZW50cy5sZW5ndGgpID8gdGhpcy5fdG90YWxEdXJhdGlvbiA6IHRoaXMuZHVyYXRpb24odmFsdWUpO1xuXHRcdH07XG5cblx0XHRwLnRpbWUgPSBmdW5jdGlvbih2YWx1ZSwgc3VwcHJlc3NFdmVudHMpIHtcblx0XHRcdGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fdGltZTtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLl9kaXJ0eSkge1xuXHRcdFx0XHR0aGlzLnRvdGFsRHVyYXRpb24oKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzLnRvdGFsVGltZSgodmFsdWUgPiB0aGlzLl9kdXJhdGlvbikgPyB0aGlzLl9kdXJhdGlvbiA6IHZhbHVlLCBzdXBwcmVzc0V2ZW50cyk7XG5cdFx0fTtcblxuXHRcdHAudG90YWxUaW1lID0gZnVuY3Rpb24odGltZSwgc3VwcHJlc3NFdmVudHMsIHVuY2FwcGVkKSB7XG5cdFx0XHRpZiAoIV90aWNrZXJBY3RpdmUpIHtcblx0XHRcdFx0X3RpY2tlci53YWtlKCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX3RvdGFsVGltZTtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLl90aW1lbGluZSkge1xuXHRcdFx0XHRpZiAodGltZSA8IDAgJiYgIXVuY2FwcGVkKSB7XG5cdFx0XHRcdFx0dGltZSArPSB0aGlzLnRvdGFsRHVyYXRpb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodGhpcy5fdGltZWxpbmUuc21vb3RoQ2hpbGRUaW1pbmcpIHtcblx0XHRcdFx0XHRpZiAodGhpcy5fZGlydHkpIHtcblx0XHRcdFx0XHRcdHRoaXMudG90YWxEdXJhdGlvbigpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR2YXIgdG90YWxEdXJhdGlvbiA9IHRoaXMuX3RvdGFsRHVyYXRpb24sXG5cdFx0XHRcdFx0XHR0bCA9IHRoaXMuX3RpbWVsaW5lO1xuXHRcdFx0XHRcdGlmICh0aW1lID4gdG90YWxEdXJhdGlvbiAmJiAhdW5jYXBwZWQpIHtcblx0XHRcdFx0XHRcdHRpbWUgPSB0b3RhbER1cmF0aW9uO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLl9zdGFydFRpbWUgPSAodGhpcy5fcGF1c2VkID8gdGhpcy5fcGF1c2VUaW1lIDogdGwuX3RpbWUpIC0gKCghdGhpcy5fcmV2ZXJzZWQgPyB0aW1lIDogdG90YWxEdXJhdGlvbiAtIHRpbWUpIC8gdGhpcy5fdGltZVNjYWxlKTtcblx0XHRcdFx0XHRpZiAoIXRsLl9kaXJ0eSkgeyAvL2ZvciBwZXJmb3JtYW5jZSBpbXByb3ZlbWVudC4gSWYgdGhlIHBhcmVudCdzIGNhY2hlIGlzIGFscmVhZHkgZGlydHksIGl0IGFscmVhZHkgdG9vayBjYXJlIG9mIG1hcmtpbmcgdGhlIGFuY2VzdG9ycyBhcyBkaXJ0eSB0b28sIHNvIHNraXAgdGhlIGZ1bmN0aW9uIGNhbGwgaGVyZS5cblx0XHRcdFx0XHRcdHRoaXMuX3VuY2FjaGUoZmFsc2UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvL2luIGNhc2UgYW55IG9mIHRoZSBhbmNlc3RvciB0aW1lbGluZXMgaGFkIGNvbXBsZXRlZCBidXQgc2hvdWxkIG5vdyBiZSBlbmFibGVkLCB3ZSBzaG91bGQgcmVzZXQgdGhlaXIgdG90YWxUaW1lKCkgd2hpY2ggd2lsbCBhbHNvIGVuc3VyZSB0aGF0IHRoZXkncmUgbGluZWQgdXAgcHJvcGVybHkgYW5kIGVuYWJsZWQuIFNraXAgZm9yIGFuaW1hdGlvbnMgdGhhdCBhcmUgb24gdGhlIHJvb3QgKHdhc3RlZnVsKS4gRXhhbXBsZTogYSBUaW1lbGluZUxpdGUuZXhwb3J0Um9vdCgpIGlzIHBlcmZvcm1lZCB3aGVuIHRoZXJlJ3MgYSBwYXVzZWQgdHdlZW4gb24gdGhlIHJvb3QsIHRoZSBleHBvcnQgd2lsbCBub3QgY29tcGxldGUgdW50aWwgdGhhdCB0d2VlbiBpcyB1bnBhdXNlZCwgYnV0IGltYWdpbmUgYSBjaGlsZCBnZXRzIHJlc3RhcnRlZCBsYXRlciwgYWZ0ZXIgYWxsIFt1bnBhdXNlZF0gdHdlZW5zIGhhdmUgY29tcGxldGVkLiBUaGUgc3RhcnRUaW1lIG9mIHRoYXQgY2hpbGQgd291bGQgZ2V0IHB1c2hlZCBvdXQsIGJ1dCBvbmUgb2YgdGhlIGFuY2VzdG9ycyBtYXkgaGF2ZSBjb21wbGV0ZWQuXG5cdFx0XHRcdFx0aWYgKHRsLl90aW1lbGluZSkge1xuXHRcdFx0XHRcdFx0d2hpbGUgKHRsLl90aW1lbGluZSkge1xuXHRcdFx0XHRcdFx0XHRpZiAodGwuX3RpbWVsaW5lLl90aW1lICE9PSAodGwuX3N0YXJ0VGltZSArIHRsLl90b3RhbFRpbWUpIC8gdGwuX3RpbWVTY2FsZSkge1xuXHRcdFx0XHRcdFx0XHRcdHRsLnRvdGFsVGltZSh0bC5fdG90YWxUaW1lLCB0cnVlKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR0bCA9IHRsLl90aW1lbGluZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHRoaXMuX2djKSB7XG5cdFx0XHRcdFx0dGhpcy5fZW5hYmxlZCh0cnVlLCBmYWxzZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHRoaXMuX3RvdGFsVGltZSAhPT0gdGltZSB8fCB0aGlzLl9kdXJhdGlvbiA9PT0gMCkge1xuXHRcdFx0XHRcdHRoaXMucmVuZGVyKHRpbWUsIHN1cHByZXNzRXZlbnRzLCBmYWxzZSk7XG5cdFx0XHRcdFx0aWYgKF9sYXp5VHdlZW5zLmxlbmd0aCkgeyAvL2luIGNhc2UgcmVuZGVyaW5nIGNhdXNlZCBhbnkgdHdlZW5zIHRvIGxhenktaW5pdCwgd2Ugc2hvdWxkIHJlbmRlciB0aGVtIGJlY2F1c2UgdHlwaWNhbGx5IHdoZW4gc29tZW9uZSBjYWxscyBzZWVrKCkgb3IgdGltZSgpIG9yIHByb2dyZXNzKCksIHRoZXkgZXhwZWN0IGFuIGltbWVkaWF0ZSByZW5kZXIuXG5cdFx0XHRcdFx0XHRfbGF6eVJlbmRlcigpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fTtcblxuXHRcdHAucHJvZ3Jlc3MgPSBwLnRvdGFsUHJvZ3Jlc3MgPSBmdW5jdGlvbih2YWx1ZSwgc3VwcHJlc3NFdmVudHMpIHtcblx0XHRcdHJldHVybiAoIWFyZ3VtZW50cy5sZW5ndGgpID8gdGhpcy5fdGltZSAvIHRoaXMuZHVyYXRpb24oKSA6IHRoaXMudG90YWxUaW1lKHRoaXMuZHVyYXRpb24oKSAqIHZhbHVlLCBzdXBwcmVzc0V2ZW50cyk7XG5cdFx0fTtcblxuXHRcdHAuc3RhcnRUaW1lID0gZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fc3RhcnRUaW1lO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHZhbHVlICE9PSB0aGlzLl9zdGFydFRpbWUpIHtcblx0XHRcdFx0dGhpcy5fc3RhcnRUaW1lID0gdmFsdWU7XG5cdFx0XHRcdGlmICh0aGlzLnRpbWVsaW5lKSBpZiAodGhpcy50aW1lbGluZS5fc29ydENoaWxkcmVuKSB7XG5cdFx0XHRcdFx0dGhpcy50aW1lbGluZS5hZGQodGhpcywgdmFsdWUgLSB0aGlzLl9kZWxheSk7IC8vZW5zdXJlcyB0aGF0IGFueSBuZWNlc3NhcnkgcmUtc2VxdWVuY2luZyBvZiBBbmltYXRpb25zIGluIHRoZSB0aW1lbGluZSBvY2N1cnMgdG8gbWFrZSBzdXJlIHRoZSByZW5kZXJpbmcgb3JkZXIgaXMgY29ycmVjdC5cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fTtcblxuXHRcdHAuZW5kVGltZSA9IGZ1bmN0aW9uKGluY2x1ZGVSZXBlYXRzKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5fc3RhcnRUaW1lICsgKChpbmNsdWRlUmVwZWF0cyAhPSBmYWxzZSkgPyB0aGlzLnRvdGFsRHVyYXRpb24oKSA6IHRoaXMuZHVyYXRpb24oKSkgLyB0aGlzLl90aW1lU2NhbGU7XG5cdFx0fTtcblxuXHRcdHAudGltZVNjYWxlID0gZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fdGltZVNjYWxlO1xuXHRcdFx0fVxuXHRcdFx0dmFsdWUgPSB2YWx1ZSB8fCBfdGlueU51bTsgLy9jYW4ndCBhbGxvdyB6ZXJvIGJlY2F1c2UgaXQnbGwgdGhyb3cgdGhlIG1hdGggb2ZmXG5cdFx0XHRpZiAodGhpcy5fdGltZWxpbmUgJiYgdGhpcy5fdGltZWxpbmUuc21vb3RoQ2hpbGRUaW1pbmcpIHtcblx0XHRcdFx0dmFyIHBhdXNlVGltZSA9IHRoaXMuX3BhdXNlVGltZSxcblx0XHRcdFx0XHR0ID0gKHBhdXNlVGltZSB8fCBwYXVzZVRpbWUgPT09IDApID8gcGF1c2VUaW1lIDogdGhpcy5fdGltZWxpbmUudG90YWxUaW1lKCk7XG5cdFx0XHRcdHRoaXMuX3N0YXJ0VGltZSA9IHQgLSAoKHQgLSB0aGlzLl9zdGFydFRpbWUpICogdGhpcy5fdGltZVNjYWxlIC8gdmFsdWUpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5fdGltZVNjYWxlID0gdmFsdWU7XG5cdFx0XHRyZXR1cm4gdGhpcy5fdW5jYWNoZShmYWxzZSk7XG5cdFx0fTtcblxuXHRcdHAucmV2ZXJzZWQgPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLl9yZXZlcnNlZDtcblx0XHRcdH1cblx0XHRcdGlmICh2YWx1ZSAhPSB0aGlzLl9yZXZlcnNlZCkge1xuXHRcdFx0XHR0aGlzLl9yZXZlcnNlZCA9IHZhbHVlO1xuXHRcdFx0XHR0aGlzLnRvdGFsVGltZSgoKHRoaXMuX3RpbWVsaW5lICYmICF0aGlzLl90aW1lbGluZS5zbW9vdGhDaGlsZFRpbWluZykgPyB0aGlzLnRvdGFsRHVyYXRpb24oKSAtIHRoaXMuX3RvdGFsVGltZSA6IHRoaXMuX3RvdGFsVGltZSksIHRydWUpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fTtcblxuXHRcdHAucGF1c2VkID0gZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fcGF1c2VkO1xuXHRcdFx0fVxuXHRcdFx0dmFyIHRsID0gdGhpcy5fdGltZWxpbmUsXG5cdFx0XHRcdHJhdywgZWxhcHNlZDtcblx0XHRcdGlmICh2YWx1ZSAhPSB0aGlzLl9wYXVzZWQpIGlmICh0bCkge1xuXHRcdFx0XHRpZiAoIV90aWNrZXJBY3RpdmUgJiYgIXZhbHVlKSB7XG5cdFx0XHRcdFx0X3RpY2tlci53YWtlKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmF3ID0gdGwucmF3VGltZSgpO1xuXHRcdFx0XHRlbGFwc2VkID0gcmF3IC0gdGhpcy5fcGF1c2VUaW1lO1xuXHRcdFx0XHRpZiAoIXZhbHVlICYmIHRsLnNtb290aENoaWxkVGltaW5nKSB7XG5cdFx0XHRcdFx0dGhpcy5fc3RhcnRUaW1lICs9IGVsYXBzZWQ7XG5cdFx0XHRcdFx0dGhpcy5fdW5jYWNoZShmYWxzZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5fcGF1c2VUaW1lID0gdmFsdWUgPyByYXcgOiBudWxsO1xuXHRcdFx0XHR0aGlzLl9wYXVzZWQgPSB2YWx1ZTtcblx0XHRcdFx0dGhpcy5fYWN0aXZlID0gdGhpcy5pc0FjdGl2ZSgpO1xuXHRcdFx0XHRpZiAoIXZhbHVlICYmIGVsYXBzZWQgIT09IDAgJiYgdGhpcy5faW5pdHRlZCAmJiB0aGlzLmR1cmF0aW9uKCkpIHtcblx0XHRcdFx0XHR0aGlzLnJlbmRlcigodGwuc21vb3RoQ2hpbGRUaW1pbmcgPyB0aGlzLl90b3RhbFRpbWUgOiAocmF3IC0gdGhpcy5fc3RhcnRUaW1lKSAvIHRoaXMuX3RpbWVTY2FsZSksIHRydWUsIHRydWUpOyAvL2luIGNhc2UgdGhlIHRhcmdldCdzIHByb3BlcnRpZXMgY2hhbmdlZCB2aWEgc29tZSBvdGhlciB0d2VlbiBvciBtYW51YWwgdXBkYXRlIGJ5IHRoZSB1c2VyLCB3ZSBzaG91bGQgZm9yY2UgYSByZW5kZXIuXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLl9nYyAmJiAhdmFsdWUpIHtcblx0XHRcdFx0dGhpcy5fZW5hYmxlZCh0cnVlLCBmYWxzZSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9O1xuXG5cbi8qXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBTaW1wbGVUaW1lbGluZVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cdFx0dmFyIFNpbXBsZVRpbWVsaW5lID0gX2NsYXNzKFwiY29yZS5TaW1wbGVUaW1lbGluZVwiLCBmdW5jdGlvbih2YXJzKSB7XG5cdFx0XHRBbmltYXRpb24uY2FsbCh0aGlzLCAwLCB2YXJzKTtcblx0XHRcdHRoaXMuYXV0b1JlbW92ZUNoaWxkcmVuID0gdGhpcy5zbW9vdGhDaGlsZFRpbWluZyA9IHRydWU7XG5cdFx0fSk7XG5cblx0XHRwID0gU2ltcGxlVGltZWxpbmUucHJvdG90eXBlID0gbmV3IEFuaW1hdGlvbigpO1xuXHRcdHAuY29uc3RydWN0b3IgPSBTaW1wbGVUaW1lbGluZTtcblx0XHRwLmtpbGwoKS5fZ2MgPSBmYWxzZTtcblx0XHRwLl9maXJzdCA9IHAuX2xhc3QgPSBwLl9yZWNlbnQgPSBudWxsO1xuXHRcdHAuX3NvcnRDaGlsZHJlbiA9IGZhbHNlO1xuXG5cdFx0cC5hZGQgPSBwLmluc2VydCA9IGZ1bmN0aW9uKGNoaWxkLCBwb3NpdGlvbiwgYWxpZ24sIHN0YWdnZXIpIHtcblx0XHRcdHZhciBwcmV2VHdlZW4sIHN0O1xuXHRcdFx0Y2hpbGQuX3N0YXJ0VGltZSA9IE51bWJlcihwb3NpdGlvbiB8fCAwKSArIGNoaWxkLl9kZWxheTtcblx0XHRcdGlmIChjaGlsZC5fcGF1c2VkKSBpZiAodGhpcyAhPT0gY2hpbGQuX3RpbWVsaW5lKSB7IC8vd2Ugb25seSBhZGp1c3QgdGhlIF9wYXVzZVRpbWUgaWYgaXQgd2Fzbid0IGluIHRoaXMgdGltZWxpbmUgYWxyZWFkeS4gUmVtZW1iZXIsIHNvbWV0aW1lcyBhIHR3ZWVuIHdpbGwgYmUgaW5zZXJ0ZWQgYWdhaW4gaW50byB0aGUgc2FtZSB0aW1lbGluZSB3aGVuIGl0cyBzdGFydFRpbWUgaXMgY2hhbmdlZCBzbyB0aGF0IHRoZSB0d2VlbnMgaW4gdGhlIFRpbWVsaW5lTGl0ZS9NYXggYXJlIHJlLW9yZGVyZWQgcHJvcGVybHkgaW4gdGhlIGxpbmtlZCBsaXN0IChzbyBldmVyeXRoaW5nIHJlbmRlcnMgaW4gdGhlIHByb3BlciBvcmRlcikuXG5cdFx0XHRcdGNoaWxkLl9wYXVzZVRpbWUgPSBjaGlsZC5fc3RhcnRUaW1lICsgKCh0aGlzLnJhd1RpbWUoKSAtIGNoaWxkLl9zdGFydFRpbWUpIC8gY2hpbGQuX3RpbWVTY2FsZSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY2hpbGQudGltZWxpbmUpIHtcblx0XHRcdFx0Y2hpbGQudGltZWxpbmUuX3JlbW92ZShjaGlsZCwgdHJ1ZSk7IC8vcmVtb3ZlcyBmcm9tIGV4aXN0aW5nIHRpbWVsaW5lIHNvIHRoYXQgaXQgY2FuIGJlIHByb3Blcmx5IGFkZGVkIHRvIHRoaXMgb25lLlxuXHRcdFx0fVxuXHRcdFx0Y2hpbGQudGltZWxpbmUgPSBjaGlsZC5fdGltZWxpbmUgPSB0aGlzO1xuXHRcdFx0aWYgKGNoaWxkLl9nYykge1xuXHRcdFx0XHRjaGlsZC5fZW5hYmxlZCh0cnVlLCB0cnVlKTtcblx0XHRcdH1cblx0XHRcdHByZXZUd2VlbiA9IHRoaXMuX2xhc3Q7XG5cdFx0XHRpZiAodGhpcy5fc29ydENoaWxkcmVuKSB7XG5cdFx0XHRcdHN0ID0gY2hpbGQuX3N0YXJ0VGltZTtcblx0XHRcdFx0d2hpbGUgKHByZXZUd2VlbiAmJiBwcmV2VHdlZW4uX3N0YXJ0VGltZSA+IHN0KSB7XG5cdFx0XHRcdFx0cHJldlR3ZWVuID0gcHJldlR3ZWVuLl9wcmV2O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAocHJldlR3ZWVuKSB7XG5cdFx0XHRcdGNoaWxkLl9uZXh0ID0gcHJldlR3ZWVuLl9uZXh0O1xuXHRcdFx0XHRwcmV2VHdlZW4uX25leHQgPSBjaGlsZDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNoaWxkLl9uZXh0ID0gdGhpcy5fZmlyc3Q7XG5cdFx0XHRcdHRoaXMuX2ZpcnN0ID0gY2hpbGQ7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY2hpbGQuX25leHQpIHtcblx0XHRcdFx0Y2hpbGQuX25leHQuX3ByZXYgPSBjaGlsZDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuX2xhc3QgPSBjaGlsZDtcblx0XHRcdH1cblx0XHRcdGNoaWxkLl9wcmV2ID0gcHJldlR3ZWVuO1xuXHRcdFx0dGhpcy5fcmVjZW50ID0gY2hpbGQ7XG5cdFx0XHRpZiAodGhpcy5fdGltZWxpbmUpIHtcblx0XHRcdFx0dGhpcy5fdW5jYWNoZSh0cnVlKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH07XG5cblx0XHRwLl9yZW1vdmUgPSBmdW5jdGlvbih0d2Vlbiwgc2tpcERpc2FibGUpIHtcblx0XHRcdGlmICh0d2Vlbi50aW1lbGluZSA9PT0gdGhpcykge1xuXHRcdFx0XHRpZiAoIXNraXBEaXNhYmxlKSB7XG5cdFx0XHRcdFx0dHdlZW4uX2VuYWJsZWQoZmFsc2UsIHRydWUpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHR3ZWVuLl9wcmV2KSB7XG5cdFx0XHRcdFx0dHdlZW4uX3ByZXYuX25leHQgPSB0d2Vlbi5fbmV4dDtcblx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLl9maXJzdCA9PT0gdHdlZW4pIHtcblx0XHRcdFx0XHR0aGlzLl9maXJzdCA9IHR3ZWVuLl9uZXh0O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0d2Vlbi5fbmV4dCkge1xuXHRcdFx0XHRcdHR3ZWVuLl9uZXh0Ll9wcmV2ID0gdHdlZW4uX3ByZXY7XG5cdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5fbGFzdCA9PT0gdHdlZW4pIHtcblx0XHRcdFx0XHR0aGlzLl9sYXN0ID0gdHdlZW4uX3ByZXY7XG5cdFx0XHRcdH1cblx0XHRcdFx0dHdlZW4uX25leHQgPSB0d2Vlbi5fcHJldiA9IHR3ZWVuLnRpbWVsaW5lID0gbnVsbDtcblx0XHRcdFx0aWYgKHR3ZWVuID09PSB0aGlzLl9yZWNlbnQpIHtcblx0XHRcdFx0XHR0aGlzLl9yZWNlbnQgPSB0aGlzLl9sYXN0O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHRoaXMuX3RpbWVsaW5lKSB7XG5cdFx0XHRcdFx0dGhpcy5fdW5jYWNoZSh0cnVlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fTtcblxuXHRcdHAucmVuZGVyID0gZnVuY3Rpb24odGltZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKSB7XG5cdFx0XHR2YXIgdHdlZW4gPSB0aGlzLl9maXJzdCxcblx0XHRcdFx0bmV4dDtcblx0XHRcdHRoaXMuX3RvdGFsVGltZSA9IHRoaXMuX3RpbWUgPSB0aGlzLl9yYXdQcmV2VGltZSA9IHRpbWU7XG5cdFx0XHR3aGlsZSAodHdlZW4pIHtcblx0XHRcdFx0bmV4dCA9IHR3ZWVuLl9uZXh0OyAvL3JlY29yZCBpdCBoZXJlIGJlY2F1c2UgdGhlIHZhbHVlIGNvdWxkIGNoYW5nZSBhZnRlciByZW5kZXJpbmcuLi5cblx0XHRcdFx0aWYgKHR3ZWVuLl9hY3RpdmUgfHwgKHRpbWUgPj0gdHdlZW4uX3N0YXJ0VGltZSAmJiAhdHdlZW4uX3BhdXNlZCkpIHtcblx0XHRcdFx0XHRpZiAoIXR3ZWVuLl9yZXZlcnNlZCkge1xuXHRcdFx0XHRcdFx0dHdlZW4ucmVuZGVyKCh0aW1lIC0gdHdlZW4uX3N0YXJ0VGltZSkgKiB0d2Vlbi5fdGltZVNjYWxlLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0d2Vlbi5yZW5kZXIoKCghdHdlZW4uX2RpcnR5KSA/IHR3ZWVuLl90b3RhbER1cmF0aW9uIDogdHdlZW4udG90YWxEdXJhdGlvbigpKSAtICgodGltZSAtIHR3ZWVuLl9zdGFydFRpbWUpICogdHdlZW4uX3RpbWVTY2FsZSksIHN1cHByZXNzRXZlbnRzLCBmb3JjZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHR3ZWVuID0gbmV4dDtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0cC5yYXdUaW1lID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoIV90aWNrZXJBY3RpdmUpIHtcblx0XHRcdFx0X3RpY2tlci53YWtlKCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcy5fdG90YWxUaW1lO1xuXHRcdH07XG5cbi8qXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBUd2VlbkxpdGVcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXHRcdHZhciBUd2VlbkxpdGUgPSBfY2xhc3MoXCJUd2VlbkxpdGVcIiwgZnVuY3Rpb24odGFyZ2V0LCBkdXJhdGlvbiwgdmFycykge1xuXHRcdFx0XHRBbmltYXRpb24uY2FsbCh0aGlzLCBkdXJhdGlvbiwgdmFycyk7XG5cdFx0XHRcdHRoaXMucmVuZGVyID0gVHdlZW5MaXRlLnByb3RvdHlwZS5yZW5kZXI7IC8vc3BlZWQgb3B0aW1pemF0aW9uIChhdm9pZCBwcm90b3R5cGUgbG9va3VwIG9uIHRoaXMgXCJob3RcIiBtZXRob2QpXG5cblx0XHRcdFx0aWYgKHRhcmdldCA9PSBudWxsKSB7XG5cdFx0XHRcdFx0dGhyb3cgXCJDYW5ub3QgdHdlZW4gYSBudWxsIHRhcmdldC5cIjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMudGFyZ2V0ID0gdGFyZ2V0ID0gKHR5cGVvZih0YXJnZXQpICE9PSBcInN0cmluZ1wiKSA/IHRhcmdldCA6IFR3ZWVuTGl0ZS5zZWxlY3Rvcih0YXJnZXQpIHx8IHRhcmdldDtcblxuXHRcdFx0XHR2YXIgaXNTZWxlY3RvciA9ICh0YXJnZXQuanF1ZXJ5IHx8ICh0YXJnZXQubGVuZ3RoICYmIHRhcmdldCAhPT0gd2luZG93ICYmIHRhcmdldFswXSAmJiAodGFyZ2V0WzBdID09PSB3aW5kb3cgfHwgKHRhcmdldFswXS5ub2RlVHlwZSAmJiB0YXJnZXRbMF0uc3R5bGUgJiYgIXRhcmdldC5ub2RlVHlwZSkpKSksXG5cdFx0XHRcdFx0b3ZlcndyaXRlID0gdGhpcy52YXJzLm92ZXJ3cml0ZSxcblx0XHRcdFx0XHRpLCB0YXJnLCB0YXJnZXRzO1xuXG5cdFx0XHRcdHRoaXMuX292ZXJ3cml0ZSA9IG92ZXJ3cml0ZSA9IChvdmVyd3JpdGUgPT0gbnVsbCkgPyBfb3ZlcndyaXRlTG9va3VwW1R3ZWVuTGl0ZS5kZWZhdWx0T3ZlcndyaXRlXSA6ICh0eXBlb2Yob3ZlcndyaXRlKSA9PT0gXCJudW1iZXJcIikgPyBvdmVyd3JpdGUgPj4gMCA6IF9vdmVyd3JpdGVMb29rdXBbb3ZlcndyaXRlXTtcblxuXHRcdFx0XHRpZiAoKGlzU2VsZWN0b3IgfHwgdGFyZ2V0IGluc3RhbmNlb2YgQXJyYXkgfHwgKHRhcmdldC5wdXNoICYmIF9pc0FycmF5KHRhcmdldCkpKSAmJiB0eXBlb2YodGFyZ2V0WzBdKSAhPT0gXCJudW1iZXJcIikge1xuXHRcdFx0XHRcdHRoaXMuX3RhcmdldHMgPSB0YXJnZXRzID0gX3NsaWNlKHRhcmdldCk7ICAvL2Rvbid0IHVzZSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0YXJnZXQsIDApIGJlY2F1c2UgdGhhdCBkb2Vzbid0IHdvcmsgaW4gSUU4IHdpdGggYSBOb2RlTGlzdCB0aGF0J3MgcmV0dXJuZWQgYnkgcXVlcnlTZWxlY3RvckFsbCgpXG5cdFx0XHRcdFx0dGhpcy5fcHJvcExvb2t1cCA9IFtdO1xuXHRcdFx0XHRcdHRoaXMuX3NpYmxpbmdzID0gW107XG5cdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IHRhcmdldHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdHRhcmcgPSB0YXJnZXRzW2ldO1xuXHRcdFx0XHRcdFx0aWYgKCF0YXJnKSB7XG5cdFx0XHRcdFx0XHRcdHRhcmdldHMuc3BsaWNlKGktLSwgMSk7XG5cdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmICh0eXBlb2YodGFyZykgPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdFx0XHRcdFx0dGFyZyA9IHRhcmdldHNbaS0tXSA9IFR3ZWVuTGl0ZS5zZWxlY3Rvcih0YXJnKTsgLy9pbiBjYXNlIGl0J3MgYW4gYXJyYXkgb2Ygc3RyaW5nc1xuXHRcdFx0XHRcdFx0XHRpZiAodHlwZW9mKHRhcmcpID09PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRcdFx0XHRcdFx0dGFyZ2V0cy5zcGxpY2UoaSsxLCAxKTsgLy90byBhdm9pZCBhbiBlbmRsZXNzIGxvb3AgKGNhbid0IGltYWdpbmUgd2h5IHRoZSBzZWxlY3RvciB3b3VsZCByZXR1cm4gYSBzdHJpbmcsIGJ1dCBqdXN0IGluIGNhc2UpXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHRhcmcubGVuZ3RoICYmIHRhcmcgIT09IHdpbmRvdyAmJiB0YXJnWzBdICYmICh0YXJnWzBdID09PSB3aW5kb3cgfHwgKHRhcmdbMF0ubm9kZVR5cGUgJiYgdGFyZ1swXS5zdHlsZSAmJiAhdGFyZy5ub2RlVHlwZSkpKSB7IC8vaW4gY2FzZSB0aGUgdXNlciBpcyBwYXNzaW5nIGluIGFuIGFycmF5IG9mIHNlbGVjdG9yIG9iamVjdHMgKGxpa2UgalF1ZXJ5IG9iamVjdHMpLCB3ZSBuZWVkIHRvIGNoZWNrIG9uZSBtb3JlIGxldmVsIGFuZCBwdWxsIHRoaW5ncyBvdXQgaWYgbmVjZXNzYXJ5LiBBbHNvIG5vdGUgdGhhdCA8c2VsZWN0PiBlbGVtZW50cyBwYXNzIGFsbCB0aGUgY3JpdGVyaWEgcmVnYXJkaW5nIGxlbmd0aCBhbmQgdGhlIGZpcnN0IGNoaWxkIGhhdmluZyBzdHlsZSwgc28gd2UgbXVzdCBhbHNvIGNoZWNrIHRvIGVuc3VyZSB0aGUgdGFyZ2V0IGlzbid0IGFuIEhUTUwgbm9kZSBpdHNlbGYuXG5cdFx0XHRcdFx0XHRcdHRhcmdldHMuc3BsaWNlKGktLSwgMSk7XG5cdFx0XHRcdFx0XHRcdHRoaXMuX3RhcmdldHMgPSB0YXJnZXRzID0gdGFyZ2V0cy5jb25jYXQoX3NsaWNlKHRhcmcpKTtcblx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR0aGlzLl9zaWJsaW5nc1tpXSA9IF9yZWdpc3Rlcih0YXJnLCB0aGlzLCBmYWxzZSk7XG5cdFx0XHRcdFx0XHRpZiAob3ZlcndyaXRlID09PSAxKSBpZiAodGhpcy5fc2libGluZ3NbaV0ubGVuZ3RoID4gMSkge1xuXHRcdFx0XHRcdFx0XHRfYXBwbHlPdmVyd3JpdGUodGFyZywgdGhpcywgbnVsbCwgMSwgdGhpcy5fc2libGluZ3NbaV0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuX3Byb3BMb29rdXAgPSB7fTtcblx0XHRcdFx0XHR0aGlzLl9zaWJsaW5ncyA9IF9yZWdpc3Rlcih0YXJnZXQsIHRoaXMsIGZhbHNlKTtcblx0XHRcdFx0XHRpZiAob3ZlcndyaXRlID09PSAxKSBpZiAodGhpcy5fc2libGluZ3MubGVuZ3RoID4gMSkge1xuXHRcdFx0XHRcdFx0X2FwcGx5T3ZlcndyaXRlKHRhcmdldCwgdGhpcywgbnVsbCwgMSwgdGhpcy5fc2libGluZ3MpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodGhpcy52YXJzLmltbWVkaWF0ZVJlbmRlciB8fCAoZHVyYXRpb24gPT09IDAgJiYgdGhpcy5fZGVsYXkgPT09IDAgJiYgdGhpcy52YXJzLmltbWVkaWF0ZVJlbmRlciAhPT0gZmFsc2UpKSB7XG5cdFx0XHRcdFx0dGhpcy5fdGltZSA9IC1fdGlueU51bTsgLy9mb3JjZXMgYSByZW5kZXIgd2l0aG91dCBoYXZpbmcgdG8gc2V0IHRoZSByZW5kZXIoKSBcImZvcmNlXCIgcGFyYW1ldGVyIHRvIHRydWUgYmVjYXVzZSB3ZSB3YW50IHRvIGFsbG93IGxhenlpbmcgYnkgZGVmYXVsdCAodXNpbmcgdGhlIFwiZm9yY2VcIiBwYXJhbWV0ZXIgYWx3YXlzIGZvcmNlcyBhbiBpbW1lZGlhdGUgZnVsbCByZW5kZXIpXG5cdFx0XHRcdFx0dGhpcy5yZW5kZXIoLXRoaXMuX2RlbGF5KTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdHJ1ZSksXG5cdFx0XHRfaXNTZWxlY3RvciA9IGZ1bmN0aW9uKHYpIHtcblx0XHRcdFx0cmV0dXJuICh2ICYmIHYubGVuZ3RoICYmIHYgIT09IHdpbmRvdyAmJiB2WzBdICYmICh2WzBdID09PSB3aW5kb3cgfHwgKHZbMF0ubm9kZVR5cGUgJiYgdlswXS5zdHlsZSAmJiAhdi5ub2RlVHlwZSkpKTsgLy93ZSBjYW5ub3QgY2hlY2sgXCJub2RlVHlwZVwiIGlmIHRoZSB0YXJnZXQgaXMgd2luZG93IGZyb20gd2l0aGluIGFuIGlmcmFtZSwgb3RoZXJ3aXNlIGl0IHdpbGwgdHJpZ2dlciBhIHNlY3VyaXR5IGVycm9yIGluIHNvbWUgYnJvd3NlcnMgbGlrZSBGaXJlZm94LlxuXHRcdFx0fSxcblx0XHRcdF9hdXRvQ1NTID0gZnVuY3Rpb24odmFycywgdGFyZ2V0KSB7XG5cdFx0XHRcdHZhciBjc3MgPSB7fSxcblx0XHRcdFx0XHRwO1xuXHRcdFx0XHRmb3IgKHAgaW4gdmFycykge1xuXHRcdFx0XHRcdGlmICghX3Jlc2VydmVkUHJvcHNbcF0gJiYgKCEocCBpbiB0YXJnZXQpIHx8IHAgPT09IFwidHJhbnNmb3JtXCIgfHwgcCA9PT0gXCJ4XCIgfHwgcCA9PT0gXCJ5XCIgfHwgcCA9PT0gXCJ3aWR0aFwiIHx8IHAgPT09IFwiaGVpZ2h0XCIgfHwgcCA9PT0gXCJjbGFzc05hbWVcIiB8fCBwID09PSBcImJvcmRlclwiKSAmJiAoIV9wbHVnaW5zW3BdIHx8IChfcGx1Z2luc1twXSAmJiBfcGx1Z2luc1twXS5fYXV0b0NTUykpKSB7IC8vbm90ZTogPGltZz4gZWxlbWVudHMgY29udGFpbiByZWFkLW9ubHkgXCJ4XCIgYW5kIFwieVwiIHByb3BlcnRpZXMuIFdlIHNob3VsZCBhbHNvIHByaW9yaXRpemUgZWRpdGluZyBjc3Mgd2lkdGgvaGVpZ2h0IHJhdGhlciB0aGFuIHRoZSBlbGVtZW50J3MgcHJvcGVydGllcy5cblx0XHRcdFx0XHRcdGNzc1twXSA9IHZhcnNbcF07XG5cdFx0XHRcdFx0XHRkZWxldGUgdmFyc1twXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0dmFycy5jc3MgPSBjc3M7XG5cdFx0XHR9O1xuXG5cdFx0cCA9IFR3ZWVuTGl0ZS5wcm90b3R5cGUgPSBuZXcgQW5pbWF0aW9uKCk7XG5cdFx0cC5jb25zdHJ1Y3RvciA9IFR3ZWVuTGl0ZTtcblx0XHRwLmtpbGwoKS5fZ2MgPSBmYWxzZTtcblxuLy8tLS0tVHdlZW5MaXRlIGRlZmF1bHRzLCBvdmVyd3JpdGUgbWFuYWdlbWVudCwgYW5kIHJvb3QgdXBkYXRlcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRwLnJhdGlvID0gMDtcblx0XHRwLl9maXJzdFBUID0gcC5fdGFyZ2V0cyA9IHAuX292ZXJ3cml0dGVuUHJvcHMgPSBwLl9zdGFydEF0ID0gbnVsbDtcblx0XHRwLl9ub3RpZnlQbHVnaW5zT2ZFbmFibGVkID0gcC5fbGF6eSA9IGZhbHNlO1xuXG5cdFx0VHdlZW5MaXRlLnZlcnNpb24gPSBcIjEuMTYuMVwiO1xuXHRcdFR3ZWVuTGl0ZS5kZWZhdWx0RWFzZSA9IHAuX2Vhc2UgPSBuZXcgRWFzZShudWxsLCBudWxsLCAxLCAxKTtcblx0XHRUd2VlbkxpdGUuZGVmYXVsdE92ZXJ3cml0ZSA9IFwiYXV0b1wiO1xuXHRcdFR3ZWVuTGl0ZS50aWNrZXIgPSBfdGlja2VyO1xuXHRcdFR3ZWVuTGl0ZS5hdXRvU2xlZXAgPSAxMjA7XG5cdFx0VHdlZW5MaXRlLmxhZ1Ntb290aGluZyA9IGZ1bmN0aW9uKHRocmVzaG9sZCwgYWRqdXN0ZWRMYWcpIHtcblx0XHRcdF90aWNrZXIubGFnU21vb3RoaW5nKHRocmVzaG9sZCwgYWRqdXN0ZWRMYWcpO1xuXHRcdH07XG5cblx0XHRUd2VlbkxpdGUuc2VsZWN0b3IgPSB3aW5kb3cuJCB8fCB3aW5kb3cualF1ZXJ5IHx8IGZ1bmN0aW9uKGUpIHtcblx0XHRcdHZhciBzZWxlY3RvciA9IHdpbmRvdy4kIHx8IHdpbmRvdy5qUXVlcnk7XG5cdFx0XHRpZiAoc2VsZWN0b3IpIHtcblx0XHRcdFx0VHdlZW5MaXRlLnNlbGVjdG9yID0gc2VsZWN0b3I7XG5cdFx0XHRcdHJldHVybiBzZWxlY3RvcihlKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiAodHlwZW9mKGRvY3VtZW50KSA9PT0gXCJ1bmRlZmluZWRcIikgPyBlIDogKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGUpIDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoKGUuY2hhckF0KDApID09PSBcIiNcIikgPyBlLnN1YnN0cigxKSA6IGUpKTtcblx0XHR9O1xuXG5cdFx0dmFyIF9sYXp5VHdlZW5zID0gW10sXG5cdFx0XHRfbGF6eUxvb2t1cCA9IHt9LFxuXHRcdFx0X2ludGVybmFscyA9IFR3ZWVuTGl0ZS5faW50ZXJuYWxzID0ge2lzQXJyYXk6X2lzQXJyYXksIGlzU2VsZWN0b3I6X2lzU2VsZWN0b3IsIGxhenlUd2VlbnM6X2xhenlUd2VlbnN9LCAvL2dpdmVzIHVzIGEgd2F5IHRvIGV4cG9zZSBjZXJ0YWluIHByaXZhdGUgdmFsdWVzIHRvIG90aGVyIEdyZWVuU29jayBjbGFzc2VzIHdpdGhvdXQgY29udGFtaW5hdGluZyB0aGEgbWFpbiBUd2VlbkxpdGUgb2JqZWN0LlxuXHRcdFx0X3BsdWdpbnMgPSBUd2VlbkxpdGUuX3BsdWdpbnMgPSB7fSxcblx0XHRcdF90d2Vlbkxvb2t1cCA9IF9pbnRlcm5hbHMudHdlZW5Mb29rdXAgPSB7fSxcblx0XHRcdF90d2Vlbkxvb2t1cE51bSA9IDAsXG5cdFx0XHRfcmVzZXJ2ZWRQcm9wcyA9IF9pbnRlcm5hbHMucmVzZXJ2ZWRQcm9wcyA9IHtlYXNlOjEsIGRlbGF5OjEsIG92ZXJ3cml0ZToxLCBvbkNvbXBsZXRlOjEsIG9uQ29tcGxldGVQYXJhbXM6MSwgb25Db21wbGV0ZVNjb3BlOjEsIHVzZUZyYW1lczoxLCBydW5CYWNrd2FyZHM6MSwgc3RhcnRBdDoxLCBvblVwZGF0ZToxLCBvblVwZGF0ZVBhcmFtczoxLCBvblVwZGF0ZVNjb3BlOjEsIG9uU3RhcnQ6MSwgb25TdGFydFBhcmFtczoxLCBvblN0YXJ0U2NvcGU6MSwgb25SZXZlcnNlQ29tcGxldGU6MSwgb25SZXZlcnNlQ29tcGxldGVQYXJhbXM6MSwgb25SZXZlcnNlQ29tcGxldGVTY29wZToxLCBvblJlcGVhdDoxLCBvblJlcGVhdFBhcmFtczoxLCBvblJlcGVhdFNjb3BlOjEsIGVhc2VQYXJhbXM6MSwgeW95bzoxLCBpbW1lZGlhdGVSZW5kZXI6MSwgcmVwZWF0OjEsIHJlcGVhdERlbGF5OjEsIGRhdGE6MSwgcGF1c2VkOjEsIHJldmVyc2VkOjEsIGF1dG9DU1M6MSwgbGF6eToxLCBvbk92ZXJ3cml0ZToxfSxcblx0XHRcdF9vdmVyd3JpdGVMb29rdXAgPSB7bm9uZTowLCBhbGw6MSwgYXV0bzoyLCBjb25jdXJyZW50OjMsIGFsbE9uU3RhcnQ6NCwgcHJlZXhpc3Rpbmc6NSwgXCJ0cnVlXCI6MSwgXCJmYWxzZVwiOjB9LFxuXHRcdFx0X3Jvb3RGcmFtZXNUaW1lbGluZSA9IEFuaW1hdGlvbi5fcm9vdEZyYW1lc1RpbWVsaW5lID0gbmV3IFNpbXBsZVRpbWVsaW5lKCksXG5cdFx0XHRfcm9vdFRpbWVsaW5lID0gQW5pbWF0aW9uLl9yb290VGltZWxpbmUgPSBuZXcgU2ltcGxlVGltZWxpbmUoKSxcblx0XHRcdF9uZXh0R0NGcmFtZSA9IDMwLFxuXHRcdFx0X2xhenlSZW5kZXIgPSBfaW50ZXJuYWxzLmxhenlSZW5kZXIgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIGkgPSBfbGF6eVR3ZWVucy5sZW5ndGgsXG5cdFx0XHRcdFx0dHdlZW47XG5cdFx0XHRcdF9sYXp5TG9va3VwID0ge307XG5cdFx0XHRcdHdoaWxlICgtLWkgPiAtMSkge1xuXHRcdFx0XHRcdHR3ZWVuID0gX2xhenlUd2VlbnNbaV07XG5cdFx0XHRcdFx0aWYgKHR3ZWVuICYmIHR3ZWVuLl9sYXp5ICE9PSBmYWxzZSkge1xuXHRcdFx0XHRcdFx0dHdlZW4ucmVuZGVyKHR3ZWVuLl9sYXp5WzBdLCB0d2Vlbi5fbGF6eVsxXSwgdHJ1ZSk7XG5cdFx0XHRcdFx0XHR0d2Vlbi5fbGF6eSA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRfbGF6eVR3ZWVucy5sZW5ndGggPSAwO1xuXHRcdFx0fTtcblxuXHRcdF9yb290VGltZWxpbmUuX3N0YXJ0VGltZSA9IF90aWNrZXIudGltZTtcblx0XHRfcm9vdEZyYW1lc1RpbWVsaW5lLl9zdGFydFRpbWUgPSBfdGlja2VyLmZyYW1lO1xuXHRcdF9yb290VGltZWxpbmUuX2FjdGl2ZSA9IF9yb290RnJhbWVzVGltZWxpbmUuX2FjdGl2ZSA9IHRydWU7XG5cdFx0c2V0VGltZW91dChfbGF6eVJlbmRlciwgMSk7IC8vb24gc29tZSBtb2JpbGUgZGV2aWNlcywgdGhlcmUgaXNuJ3QgYSBcInRpY2tcIiBiZWZvcmUgY29kZSBydW5zIHdoaWNoIG1lYW5zIGFueSBsYXp5IHJlbmRlcnMgd291bGRuJ3QgcnVuIGJlZm9yZSB0aGUgbmV4dCBvZmZpY2lhbCBcInRpY2tcIi5cblxuXHRcdEFuaW1hdGlvbi5fdXBkYXRlUm9vdCA9IFR3ZWVuTGl0ZS5yZW5kZXIgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIGksIGEsIHA7XG5cdFx0XHRcdGlmIChfbGF6eVR3ZWVucy5sZW5ndGgpIHsgLy9pZiBjb2RlIGlzIHJ1biBvdXRzaWRlIG9mIHRoZSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgbG9vcCwgdGhlcmUgbWF5IGJlIHR3ZWVucyBxdWV1ZWQgQUZURVIgdGhlIGVuZ2luZSByZWZyZXNoZWQsIHNvIHdlIG5lZWQgdG8gZW5zdXJlIGFueSBwZW5kaW5nIHJlbmRlcnMgb2NjdXIgYmVmb3JlIHdlIHJlZnJlc2ggYWdhaW4uXG5cdFx0XHRcdFx0X2xhenlSZW5kZXIoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRfcm9vdFRpbWVsaW5lLnJlbmRlcigoX3RpY2tlci50aW1lIC0gX3Jvb3RUaW1lbGluZS5fc3RhcnRUaW1lKSAqIF9yb290VGltZWxpbmUuX3RpbWVTY2FsZSwgZmFsc2UsIGZhbHNlKTtcblx0XHRcdFx0X3Jvb3RGcmFtZXNUaW1lbGluZS5yZW5kZXIoKF90aWNrZXIuZnJhbWUgLSBfcm9vdEZyYW1lc1RpbWVsaW5lLl9zdGFydFRpbWUpICogX3Jvb3RGcmFtZXNUaW1lbGluZS5fdGltZVNjYWxlLCBmYWxzZSwgZmFsc2UpO1xuXHRcdFx0XHRpZiAoX2xhenlUd2VlbnMubGVuZ3RoKSB7XG5cdFx0XHRcdFx0X2xhenlSZW5kZXIoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoX3RpY2tlci5mcmFtZSA+PSBfbmV4dEdDRnJhbWUpIHsgLy9kdW1wIGdhcmJhZ2UgZXZlcnkgMTIwIGZyYW1lcyBvciB3aGF0ZXZlciB0aGUgdXNlciBzZXRzIFR3ZWVuTGl0ZS5hdXRvU2xlZXAgdG9cblx0XHRcdFx0XHRfbmV4dEdDRnJhbWUgPSBfdGlja2VyLmZyYW1lICsgKHBhcnNlSW50KFR3ZWVuTGl0ZS5hdXRvU2xlZXAsIDEwKSB8fCAxMjApO1xuXHRcdFx0XHRcdGZvciAocCBpbiBfdHdlZW5Mb29rdXApIHtcblx0XHRcdFx0XHRcdGEgPSBfdHdlZW5Mb29rdXBbcF0udHdlZW5zO1xuXHRcdFx0XHRcdFx0aSA9IGEubGVuZ3RoO1xuXHRcdFx0XHRcdFx0d2hpbGUgKC0taSA+IC0xKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChhW2ldLl9nYykge1xuXHRcdFx0XHRcdFx0XHRcdGEuc3BsaWNlKGksIDEpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAoYS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRcdFx0ZGVsZXRlIF90d2Vlbkxvb2t1cFtwXTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly9pZiB0aGVyZSBhcmUgbm8gbW9yZSB0d2VlbnMgaW4gdGhlIHJvb3QgdGltZWxpbmVzLCBvciBpZiB0aGV5J3JlIGFsbCBwYXVzZWQsIG1ha2UgdGhlIF90aW1lciBzbGVlcCB0byByZWR1Y2UgbG9hZCBvbiB0aGUgQ1BVIHNsaWdodGx5XG5cdFx0XHRcdFx0cCA9IF9yb290VGltZWxpbmUuX2ZpcnN0O1xuXHRcdFx0XHRcdGlmICghcCB8fCBwLl9wYXVzZWQpIGlmIChUd2VlbkxpdGUuYXV0b1NsZWVwICYmICFfcm9vdEZyYW1lc1RpbWVsaW5lLl9maXJzdCAmJiBfdGlja2VyLl9saXN0ZW5lcnMudGljay5sZW5ndGggPT09IDEpIHtcblx0XHRcdFx0XHRcdHdoaWxlIChwICYmIHAuX3BhdXNlZCkge1xuXHRcdFx0XHRcdFx0XHRwID0gcC5fbmV4dDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmICghcCkge1xuXHRcdFx0XHRcdFx0XHRfdGlja2VyLnNsZWVwKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0X3RpY2tlci5hZGRFdmVudExpc3RlbmVyKFwidGlja1wiLCBBbmltYXRpb24uX3VwZGF0ZVJvb3QpO1xuXG5cdFx0dmFyIF9yZWdpc3RlciA9IGZ1bmN0aW9uKHRhcmdldCwgdHdlZW4sIHNjcnViKSB7XG5cdFx0XHRcdHZhciBpZCA9IHRhcmdldC5fZ3NUd2VlbklELCBhLCBpO1xuXHRcdFx0XHRpZiAoIV90d2Vlbkxvb2t1cFtpZCB8fCAodGFyZ2V0Ll9nc1R3ZWVuSUQgPSBpZCA9IFwidFwiICsgKF90d2Vlbkxvb2t1cE51bSsrKSldKSB7XG5cdFx0XHRcdFx0X3R3ZWVuTG9va3VwW2lkXSA9IHt0YXJnZXQ6dGFyZ2V0LCB0d2VlbnM6W119O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0d2Vlbikge1xuXHRcdFx0XHRcdGEgPSBfdHdlZW5Mb29rdXBbaWRdLnR3ZWVucztcblx0XHRcdFx0XHRhWyhpID0gYS5sZW5ndGgpXSA9IHR3ZWVuO1xuXHRcdFx0XHRcdGlmIChzY3J1Yikge1xuXHRcdFx0XHRcdFx0d2hpbGUgKC0taSA+IC0xKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChhW2ldID09PSB0d2Vlbikge1xuXHRcdFx0XHRcdFx0XHRcdGEuc3BsaWNlKGksIDEpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBfdHdlZW5Mb29rdXBbaWRdLnR3ZWVucztcblx0XHRcdH0sXG5cblx0XHRcdF9vbk92ZXJ3cml0ZSA9IGZ1bmN0aW9uKG92ZXJ3cml0dGVuVHdlZW4sIG92ZXJ3cml0aW5nVHdlZW4sIHRhcmdldCwga2lsbGVkUHJvcHMpIHtcblx0XHRcdFx0dmFyIGZ1bmMgPSBvdmVyd3JpdHRlblR3ZWVuLnZhcnMub25PdmVyd3JpdGUsIHIxLCByMjtcblx0XHRcdFx0aWYgKGZ1bmMpIHtcblx0XHRcdFx0XHRyMSA9IGZ1bmMob3ZlcndyaXR0ZW5Ud2Vlbiwgb3ZlcndyaXRpbmdUd2VlbiwgdGFyZ2V0LCBraWxsZWRQcm9wcyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZnVuYyA9IFR3ZWVuTGl0ZS5vbk92ZXJ3cml0ZTtcblx0XHRcdFx0aWYgKGZ1bmMpIHtcblx0XHRcdFx0XHRyMiA9IGZ1bmMob3ZlcndyaXR0ZW5Ud2Vlbiwgb3ZlcndyaXRpbmdUd2VlbiwgdGFyZ2V0LCBraWxsZWRQcm9wcyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIChyMSAhPT0gZmFsc2UgJiYgcjIgIT09IGZhbHNlKTtcblx0XHRcdH0sXG5cdFx0XHRfYXBwbHlPdmVyd3JpdGUgPSBmdW5jdGlvbih0YXJnZXQsIHR3ZWVuLCBwcm9wcywgbW9kZSwgc2libGluZ3MpIHtcblx0XHRcdFx0dmFyIGksIGNoYW5nZWQsIGN1clR3ZWVuLCBsO1xuXHRcdFx0XHRpZiAobW9kZSA9PT0gMSB8fCBtb2RlID49IDQpIHtcblx0XHRcdFx0XHRsID0gc2libGluZ3MubGVuZ3RoO1xuXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcblx0XHRcdFx0XHRcdGlmICgoY3VyVHdlZW4gPSBzaWJsaW5nc1tpXSkgIT09IHR3ZWVuKSB7XG5cdFx0XHRcdFx0XHRcdGlmICghY3VyVHdlZW4uX2djKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKF9vbk92ZXJ3cml0ZShjdXJUd2VlbiwgdHdlZW4pICYmIGN1clR3ZWVuLl9lbmFibGVkKGZhbHNlLCBmYWxzZSkpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGNoYW5nZWQgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChtb2RlID09PSA1KSB7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gY2hhbmdlZDtcblx0XHRcdFx0fVxuXHRcdFx0XHQvL05PVEU6IEFkZCAwLjAwMDAwMDAwMDEgdG8gb3ZlcmNvbWUgZmxvYXRpbmcgcG9pbnQgZXJyb3JzIHRoYXQgY2FuIGNhdXNlIHRoZSBzdGFydFRpbWUgdG8gYmUgVkVSWSBzbGlnaHRseSBvZmYgKHdoZW4gYSB0d2VlbidzIHRpbWUoKSBpcyBzZXQgZm9yIGV4YW1wbGUpXG5cdFx0XHRcdHZhciBzdGFydFRpbWUgPSB0d2Vlbi5fc3RhcnRUaW1lICsgX3RpbnlOdW0sXG5cdFx0XHRcdFx0b3ZlcmxhcHMgPSBbXSxcblx0XHRcdFx0XHRvQ291bnQgPSAwLFxuXHRcdFx0XHRcdHplcm9EdXIgPSAodHdlZW4uX2R1cmF0aW9uID09PSAwKSxcblx0XHRcdFx0XHRnbG9iYWxTdGFydDtcblx0XHRcdFx0aSA9IHNpYmxpbmdzLmxlbmd0aDtcblx0XHRcdFx0d2hpbGUgKC0taSA+IC0xKSB7XG5cdFx0XHRcdFx0aWYgKChjdXJUd2VlbiA9IHNpYmxpbmdzW2ldKSA9PT0gdHdlZW4gfHwgY3VyVHdlZW4uX2djIHx8IGN1clR3ZWVuLl9wYXVzZWQpIHtcblx0XHRcdFx0XHRcdC8vaWdub3JlXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChjdXJUd2Vlbi5fdGltZWxpbmUgIT09IHR3ZWVuLl90aW1lbGluZSkge1xuXHRcdFx0XHRcdFx0Z2xvYmFsU3RhcnQgPSBnbG9iYWxTdGFydCB8fCBfY2hlY2tPdmVybGFwKHR3ZWVuLCAwLCB6ZXJvRHVyKTtcblx0XHRcdFx0XHRcdGlmIChfY2hlY2tPdmVybGFwKGN1clR3ZWVuLCBnbG9iYWxTdGFydCwgemVyb0R1cikgPT09IDApIHtcblx0XHRcdFx0XHRcdFx0b3ZlcmxhcHNbb0NvdW50KytdID0gY3VyVHdlZW47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChjdXJUd2Vlbi5fc3RhcnRUaW1lIDw9IHN0YXJ0VGltZSkgaWYgKGN1clR3ZWVuLl9zdGFydFRpbWUgKyBjdXJUd2Vlbi50b3RhbER1cmF0aW9uKCkgLyBjdXJUd2Vlbi5fdGltZVNjYWxlID4gc3RhcnRUaW1lKSBpZiAoISgoemVyb0R1ciB8fCAhY3VyVHdlZW4uX2luaXR0ZWQpICYmIHN0YXJ0VGltZSAtIGN1clR3ZWVuLl9zdGFydFRpbWUgPD0gMC4wMDAwMDAwMDAyKSkge1xuXHRcdFx0XHRcdFx0b3ZlcmxhcHNbb0NvdW50KytdID0gY3VyVHdlZW47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aSA9IG9Db3VudDtcblx0XHRcdFx0d2hpbGUgKC0taSA+IC0xKSB7XG5cdFx0XHRcdFx0Y3VyVHdlZW4gPSBvdmVybGFwc1tpXTtcblx0XHRcdFx0XHRpZiAobW9kZSA9PT0gMikgaWYgKGN1clR3ZWVuLl9raWxsKHByb3BzLCB0YXJnZXQsIHR3ZWVuKSkge1xuXHRcdFx0XHRcdFx0Y2hhbmdlZCA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChtb2RlICE9PSAyIHx8ICghY3VyVHdlZW4uX2ZpcnN0UFQgJiYgY3VyVHdlZW4uX2luaXR0ZWQpKSB7XG5cdFx0XHRcdFx0XHRpZiAobW9kZSAhPT0gMiAmJiAhX29uT3ZlcndyaXRlKGN1clR3ZWVuLCB0d2VlbikpIHtcblx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAoY3VyVHdlZW4uX2VuYWJsZWQoZmFsc2UsIGZhbHNlKSkgeyAvL2lmIGFsbCBwcm9wZXJ0eSB0d2VlbnMgaGF2ZSBiZWVuIG92ZXJ3cml0dGVuLCBraWxsIHRoZSB0d2Vlbi5cblx0XHRcdFx0XHRcdFx0Y2hhbmdlZCA9IHRydWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBjaGFuZ2VkO1xuXHRcdFx0fSxcblxuXHRcdFx0X2NoZWNrT3ZlcmxhcCA9IGZ1bmN0aW9uKHR3ZWVuLCByZWZlcmVuY2UsIHplcm9EdXIpIHtcblx0XHRcdFx0dmFyIHRsID0gdHdlZW4uX3RpbWVsaW5lLFxuXHRcdFx0XHRcdHRzID0gdGwuX3RpbWVTY2FsZSxcblx0XHRcdFx0XHR0ID0gdHdlZW4uX3N0YXJ0VGltZTtcblx0XHRcdFx0d2hpbGUgKHRsLl90aW1lbGluZSkge1xuXHRcdFx0XHRcdHQgKz0gdGwuX3N0YXJ0VGltZTtcblx0XHRcdFx0XHR0cyAqPSB0bC5fdGltZVNjYWxlO1xuXHRcdFx0XHRcdGlmICh0bC5fcGF1c2VkKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gLTEwMDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGwgPSB0bC5fdGltZWxpbmU7XG5cdFx0XHRcdH1cblx0XHRcdFx0dCAvPSB0cztcblx0XHRcdFx0cmV0dXJuICh0ID4gcmVmZXJlbmNlKSA/IHQgLSByZWZlcmVuY2UgOiAoKHplcm9EdXIgJiYgdCA9PT0gcmVmZXJlbmNlKSB8fCAoIXR3ZWVuLl9pbml0dGVkICYmIHQgLSByZWZlcmVuY2UgPCAyICogX3RpbnlOdW0pKSA/IF90aW55TnVtIDogKCh0ICs9IHR3ZWVuLnRvdGFsRHVyYXRpb24oKSAvIHR3ZWVuLl90aW1lU2NhbGUgLyB0cykgPiByZWZlcmVuY2UgKyBfdGlueU51bSkgPyAwIDogdCAtIHJlZmVyZW5jZSAtIF90aW55TnVtO1xuXHRcdFx0fTtcblxuXG4vLy0tLS0gVHdlZW5MaXRlIGluc3RhbmNlIG1ldGhvZHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdHAuX2luaXQgPSBmdW5jdGlvbigpIHtcblx0XHRcdHZhciB2ID0gdGhpcy52YXJzLFxuXHRcdFx0XHRvcCA9IHRoaXMuX292ZXJ3cml0dGVuUHJvcHMsXG5cdFx0XHRcdGR1ciA9IHRoaXMuX2R1cmF0aW9uLFxuXHRcdFx0XHRpbW1lZGlhdGUgPSAhIXYuaW1tZWRpYXRlUmVuZGVyLFxuXHRcdFx0XHRlYXNlID0gdi5lYXNlLFxuXHRcdFx0XHRpLCBpbml0UGx1Z2lucywgcHQsIHAsIHN0YXJ0VmFycztcblx0XHRcdGlmICh2LnN0YXJ0QXQpIHtcblx0XHRcdFx0aWYgKHRoaXMuX3N0YXJ0QXQpIHtcblx0XHRcdFx0XHR0aGlzLl9zdGFydEF0LnJlbmRlcigtMSwgdHJ1ZSk7IC8vaWYgd2UndmUgcnVuIGEgc3RhcnRBdCBwcmV2aW91c2x5ICh3aGVuIHRoZSB0d2VlbiBpbnN0YW50aWF0ZWQpLCB3ZSBzaG91bGQgcmV2ZXJ0IGl0IHNvIHRoYXQgdGhlIHZhbHVlcyByZS1pbnN0YW50aWF0ZSBjb3JyZWN0bHkgcGFydGljdWxhcmx5IGZvciByZWxhdGl2ZSB0d2VlbnMuIFdpdGhvdXQgdGhpcywgYSBUd2VlbkxpdGUuZnJvbVRvKG9iaiwgMSwge3g6XCIrPTEwMFwifSwge3g6XCItPTEwMFwifSksIGZvciBleGFtcGxlLCB3b3VsZCBhY3R1YWxseSBqdW1wIHRvICs9MjAwIGJlY2F1c2UgdGhlIHN0YXJ0QXQgd291bGQgcnVuIHR3aWNlLCBkb3VibGluZyB0aGUgcmVsYXRpdmUgY2hhbmdlLlxuXHRcdFx0XHRcdHRoaXMuX3N0YXJ0QXQua2lsbCgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHN0YXJ0VmFycyA9IHt9O1xuXHRcdFx0XHRmb3IgKHAgaW4gdi5zdGFydEF0KSB7IC8vY29weSB0aGUgcHJvcGVydGllcy92YWx1ZXMgaW50byBhIG5ldyBvYmplY3QgdG8gYXZvaWQgY29sbGlzaW9ucywgbGlrZSB2YXIgdG8gPSB7eDowfSwgZnJvbSA9IHt4OjUwMH07IHRpbWVsaW5lLmZyb21UbyhlLCAxLCBmcm9tLCB0bykuZnJvbVRvKGUsIDEsIHRvLCBmcm9tKTtcblx0XHRcdFx0XHRzdGFydFZhcnNbcF0gPSB2LnN0YXJ0QXRbcF07XG5cdFx0XHRcdH1cblx0XHRcdFx0c3RhcnRWYXJzLm92ZXJ3cml0ZSA9IGZhbHNlO1xuXHRcdFx0XHRzdGFydFZhcnMuaW1tZWRpYXRlUmVuZGVyID0gdHJ1ZTtcblx0XHRcdFx0c3RhcnRWYXJzLmxhenkgPSAoaW1tZWRpYXRlICYmIHYubGF6eSAhPT0gZmFsc2UpO1xuXHRcdFx0XHRzdGFydFZhcnMuc3RhcnRBdCA9IHN0YXJ0VmFycy5kZWxheSA9IG51bGw7IC8vbm8gbmVzdGluZyBvZiBzdGFydEF0IG9iamVjdHMgYWxsb3dlZCAob3RoZXJ3aXNlIGl0IGNvdWxkIGNhdXNlIGFuIGluZmluaXRlIGxvb3ApLlxuXHRcdFx0XHR0aGlzLl9zdGFydEF0ID0gVHdlZW5MaXRlLnRvKHRoaXMudGFyZ2V0LCAwLCBzdGFydFZhcnMpO1xuXHRcdFx0XHRpZiAoaW1tZWRpYXRlKSB7XG5cdFx0XHRcdFx0aWYgKHRoaXMuX3RpbWUgPiAwKSB7XG5cdFx0XHRcdFx0XHR0aGlzLl9zdGFydEF0ID0gbnVsbDsgLy90d2VlbnMgdGhhdCByZW5kZXIgaW1tZWRpYXRlbHkgKGxpa2UgbW9zdCBmcm9tKCkgYW5kIGZyb21UbygpIHR3ZWVucykgc2hvdWxkbid0IHJldmVydCB3aGVuIHRoZWlyIHBhcmVudCB0aW1lbGluZSdzIHBsYXloZWFkIGdvZXMgYmFja3dhcmQgcGFzdCB0aGUgc3RhcnRUaW1lIGJlY2F1c2UgdGhlIGluaXRpYWwgcmVuZGVyIGNvdWxkIGhhdmUgaGFwcGVuZWQgYW55dGltZSBhbmQgaXQgc2hvdWxkbid0IGJlIGRpcmVjdGx5IGNvcnJlbGF0ZWQgdG8gdGhpcyB0d2VlbidzIHN0YXJ0VGltZS4gSW1hZ2luZSBzZXR0aW5nIHVwIGEgY29tcGxleCBhbmltYXRpb24gd2hlcmUgdGhlIGJlZ2lubmluZyBzdGF0ZXMgb2YgdmFyaW91cyBvYmplY3RzIGFyZSByZW5kZXJlZCBpbW1lZGlhdGVseSBidXQgdGhlIHR3ZWVuIGRvZXNuJ3QgaGFwcGVuIGZvciBxdWl0ZSBzb21lIHRpbWUgLSBpZiB3ZSByZXZlcnQgdG8gdGhlIHN0YXJ0aW5nIHZhbHVlcyBhcyBzb29uIGFzIHRoZSBwbGF5aGVhZCBnb2VzIGJhY2t3YXJkIHBhc3QgdGhlIHR3ZWVuJ3Mgc3RhcnRUaW1lLCBpdCB3aWxsIHRocm93IHRoaW5ncyBvZmYgdmlzdWFsbHkuIFJldmVyc2lvbiBzaG91bGQgb25seSBoYXBwZW4gaW4gVGltZWxpbmVMaXRlL01heCBpbnN0YW5jZXMgd2hlcmUgaW1tZWRpYXRlUmVuZGVyIHdhcyBmYWxzZSAod2hpY2ggaXMgdGhlIGRlZmF1bHQgaW4gdGhlIGNvbnZlbmllbmNlIG1ldGhvZHMgbGlrZSBmcm9tKCkpLlxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoZHVyICE9PSAwKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm47IC8vd2Ugc2tpcCBpbml0aWFsaXphdGlvbiBoZXJlIHNvIHRoYXQgb3ZlcndyaXRpbmcgZG9lc24ndCBvY2N1ciB1bnRpbCB0aGUgdHdlZW4gYWN0dWFsbHkgYmVnaW5zLiBPdGhlcndpc2UsIGlmIHlvdSBjcmVhdGUgc2V2ZXJhbCBpbW1lZGlhdGVSZW5kZXI6dHJ1ZSB0d2VlbnMgb2YgdGhlIHNhbWUgdGFyZ2V0L3Byb3BlcnRpZXMgdG8gZHJvcCBpbnRvIGEgVGltZWxpbmVMaXRlIG9yIFRpbWVsaW5lTWF4LCB0aGUgbGFzdCBvbmUgY3JlYXRlZCB3b3VsZCBvdmVyd3JpdGUgdGhlIGZpcnN0IG9uZXMgYmVjYXVzZSB0aGV5IGRpZG4ndCBnZXQgcGxhY2VkIGludG8gdGhlIHRpbWVsaW5lIHlldCBiZWZvcmUgdGhlIGZpcnN0IHJlbmRlciBvY2N1cnMgYW5kIGtpY2tzIGluIG92ZXJ3cml0aW5nLlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICh2LnJ1bkJhY2t3YXJkcyAmJiBkdXIgIT09IDApIHtcblx0XHRcdFx0Ly9mcm9tKCkgdHdlZW5zIG11c3QgYmUgaGFuZGxlZCB1bmlxdWVseTogdGhlaXIgYmVnaW5uaW5nIHZhbHVlcyBtdXN0IGJlIHJlbmRlcmVkIGJ1dCB3ZSBkb24ndCB3YW50IG92ZXJ3cml0aW5nIHRvIG9jY3VyIHlldCAod2hlbiB0aW1lIGlzIHN0aWxsIDApLiBXYWl0IHVudGlsIHRoZSB0d2VlbiBhY3R1YWxseSBiZWdpbnMgYmVmb3JlIGRvaW5nIGFsbCB0aGUgcm91dGluZXMgbGlrZSBvdmVyd3JpdGluZy4gQXQgdGhhdCB0aW1lLCB3ZSBzaG91bGQgcmVuZGVyIGF0IHRoZSBFTkQgb2YgdGhlIHR3ZWVuIHRvIGVuc3VyZSB0aGF0IHRoaW5ncyBpbml0aWFsaXplIGNvcnJlY3RseSAocmVtZW1iZXIsIGZyb20oKSB0d2VlbnMgZ28gYmFja3dhcmRzKVxuXHRcdFx0XHRpZiAodGhpcy5fc3RhcnRBdCkge1xuXHRcdFx0XHRcdHRoaXMuX3N0YXJ0QXQucmVuZGVyKC0xLCB0cnVlKTtcblx0XHRcdFx0XHR0aGlzLl9zdGFydEF0LmtpbGwoKTtcblx0XHRcdFx0XHR0aGlzLl9zdGFydEF0ID0gbnVsbDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRpZiAodGhpcy5fdGltZSAhPT0gMCkgeyAvL2luIHJhcmUgY2FzZXMgKGxpa2UgaWYgYSBmcm9tKCkgdHdlZW4gcnVucyBhbmQgdGhlbiBpcyBpbnZhbGlkYXRlKCktZWQpLCBpbW1lZGlhdGVSZW5kZXIgY291bGQgYmUgdHJ1ZSBidXQgdGhlIGluaXRpYWwgZm9yY2VkLXJlbmRlciBnZXRzIHNraXBwZWQsIHNvIHRoZXJlJ3Mgbm8gbmVlZCB0byBmb3JjZSB0aGUgcmVuZGVyIGluIHRoaXMgY29udGV4dCB3aGVuIHRoZSBfdGltZSBpcyBncmVhdGVyIHRoYW4gMFxuXHRcdFx0XHRcdFx0aW1tZWRpYXRlID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHB0ID0ge307XG5cdFx0XHRcdFx0Zm9yIChwIGluIHYpIHsgLy9jb3B5IHByb3BzIGludG8gYSBuZXcgb2JqZWN0IGFuZCBza2lwIGFueSByZXNlcnZlZCBwcm9wcywgb3RoZXJ3aXNlIG9uQ29tcGxldGUgb3Igb25VcGRhdGUgb3Igb25TdGFydCBjb3VsZCBmaXJlLiBXZSBzaG91bGQsIGhvd2V2ZXIsIHBlcm1pdCBhdXRvQ1NTIHRvIGdvIHRocm91Z2guXG5cdFx0XHRcdFx0XHRpZiAoIV9yZXNlcnZlZFByb3BzW3BdIHx8IHAgPT09IFwiYXV0b0NTU1wiKSB7XG5cdFx0XHRcdFx0XHRcdHB0W3BdID0gdltwXTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cHQub3ZlcndyaXRlID0gMDtcblx0XHRcdFx0XHRwdC5kYXRhID0gXCJpc0Zyb21TdGFydFwiOyAvL3dlIHRhZyB0aGUgdHdlZW4gd2l0aCBhcyBcImlzRnJvbVN0YXJ0XCIgc28gdGhhdCBpZiBbaW5zaWRlIGEgcGx1Z2luXSB3ZSBuZWVkIHRvIG9ubHkgZG8gc29tZXRoaW5nIGF0IHRoZSB2ZXJ5IEVORCBvZiBhIHR3ZWVuLCB3ZSBoYXZlIGEgd2F5IG9mIGlkZW50aWZ5aW5nIHRoaXMgdHdlZW4gYXMgbWVyZWx5IHRoZSBvbmUgdGhhdCdzIHNldHRpbmcgdGhlIGJlZ2lubmluZyB2YWx1ZXMgZm9yIGEgXCJmcm9tKClcIiB0d2Vlbi4gRm9yIGV4YW1wbGUsIGNsZWFyUHJvcHMgaW4gQ1NTUGx1Z2luIHNob3VsZCBvbmx5IGdldCBhcHBsaWVkIGF0IHRoZSB2ZXJ5IEVORCBvZiBhIHR3ZWVuIGFuZCB3aXRob3V0IHRoaXMgdGFnLCBmcm9tKC4uLntoZWlnaHQ6MTAwLCBjbGVhclByb3BzOlwiaGVpZ2h0XCIsIGRlbGF5OjF9KSB3b3VsZCB3aXBlIHRoZSBoZWlnaHQgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgdHdlZW4gYW5kIGFmdGVyIDEgc2Vjb25kLCBpdCdkIGtpY2sgYmFjayBpbi5cblx0XHRcdFx0XHRwdC5sYXp5ID0gKGltbWVkaWF0ZSAmJiB2LmxhenkgIT09IGZhbHNlKTtcblx0XHRcdFx0XHRwdC5pbW1lZGlhdGVSZW5kZXIgPSBpbW1lZGlhdGU7IC8vemVyby1kdXJhdGlvbiB0d2VlbnMgcmVuZGVyIGltbWVkaWF0ZWx5IGJ5IGRlZmF1bHQsIGJ1dCBpZiB3ZSdyZSBub3Qgc3BlY2lmaWNhbGx5IGluc3RydWN0ZWQgdG8gcmVuZGVyIHRoaXMgdHdlZW4gaW1tZWRpYXRlbHksIHdlIHNob3VsZCBza2lwIHRoaXMgYW5kIG1lcmVseSBfaW5pdCgpIHRvIHJlY29yZCB0aGUgc3RhcnRpbmcgdmFsdWVzIChyZW5kZXJpbmcgdGhlbSBpbW1lZGlhdGVseSB3b3VsZCBwdXNoIHRoZW0gdG8gY29tcGxldGlvbiB3aGljaCBpcyB3YXN0ZWZ1bCBpbiB0aGF0IGNhc2UgLSB3ZSdkIGhhdmUgdG8gcmVuZGVyKC0xKSBpbW1lZGlhdGVseSBhZnRlcilcblx0XHRcdFx0XHR0aGlzLl9zdGFydEF0ID0gVHdlZW5MaXRlLnRvKHRoaXMudGFyZ2V0LCAwLCBwdCk7XG5cdFx0XHRcdFx0aWYgKCFpbW1lZGlhdGUpIHtcblx0XHRcdFx0XHRcdHRoaXMuX3N0YXJ0QXQuX2luaXQoKTsgLy9lbnN1cmVzIHRoYXQgdGhlIGluaXRpYWwgdmFsdWVzIGFyZSByZWNvcmRlZFxuXHRcdFx0XHRcdFx0dGhpcy5fc3RhcnRBdC5fZW5hYmxlZChmYWxzZSk7IC8vbm8gbmVlZCB0byBoYXZlIHRoZSB0d2VlbiByZW5kZXIgb24gdGhlIG5leHQgY3ljbGUuIERpc2FibGUgaXQgYmVjYXVzZSB3ZSdsbCBhbHdheXMgbWFudWFsbHkgY29udHJvbCB0aGUgcmVuZGVycyBvZiB0aGUgX3N0YXJ0QXQgdHdlZW4uXG5cdFx0XHRcdFx0XHRpZiAodGhpcy52YXJzLmltbWVkaWF0ZVJlbmRlcikge1xuXHRcdFx0XHRcdFx0XHR0aGlzLl9zdGFydEF0ID0gbnVsbDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMuX3RpbWUgPT09IDApIHtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMuX2Vhc2UgPSBlYXNlID0gKCFlYXNlKSA/IFR3ZWVuTGl0ZS5kZWZhdWx0RWFzZSA6IChlYXNlIGluc3RhbmNlb2YgRWFzZSkgPyBlYXNlIDogKHR5cGVvZihlYXNlKSA9PT0gXCJmdW5jdGlvblwiKSA/IG5ldyBFYXNlKGVhc2UsIHYuZWFzZVBhcmFtcykgOiBfZWFzZU1hcFtlYXNlXSB8fCBUd2VlbkxpdGUuZGVmYXVsdEVhc2U7XG5cdFx0XHRpZiAodi5lYXNlUGFyYW1zIGluc3RhbmNlb2YgQXJyYXkgJiYgZWFzZS5jb25maWcpIHtcblx0XHRcdFx0dGhpcy5fZWFzZSA9IGVhc2UuY29uZmlnLmFwcGx5KGVhc2UsIHYuZWFzZVBhcmFtcyk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl9lYXNlVHlwZSA9IHRoaXMuX2Vhc2UuX3R5cGU7XG5cdFx0XHR0aGlzLl9lYXNlUG93ZXIgPSB0aGlzLl9lYXNlLl9wb3dlcjtcblx0XHRcdHRoaXMuX2ZpcnN0UFQgPSBudWxsO1xuXG5cdFx0XHRpZiAodGhpcy5fdGFyZ2V0cykge1xuXHRcdFx0XHRpID0gdGhpcy5fdGFyZ2V0cy5sZW5ndGg7XG5cdFx0XHRcdHdoaWxlICgtLWkgPiAtMSkge1xuXHRcdFx0XHRcdGlmICggdGhpcy5faW5pdFByb3BzKCB0aGlzLl90YXJnZXRzW2ldLCAodGhpcy5fcHJvcExvb2t1cFtpXSA9IHt9KSwgdGhpcy5fc2libGluZ3NbaV0sIChvcCA/IG9wW2ldIDogbnVsbCkpICkge1xuXHRcdFx0XHRcdFx0aW5pdFBsdWdpbnMgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aW5pdFBsdWdpbnMgPSB0aGlzLl9pbml0UHJvcHModGhpcy50YXJnZXQsIHRoaXMuX3Byb3BMb29rdXAsIHRoaXMuX3NpYmxpbmdzLCBvcCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChpbml0UGx1Z2lucykge1xuXHRcdFx0XHRUd2VlbkxpdGUuX29uUGx1Z2luRXZlbnQoXCJfb25Jbml0QWxsUHJvcHNcIiwgdGhpcyk7IC8vcmVvcmRlcnMgdGhlIGFycmF5IGluIG9yZGVyIG9mIHByaW9yaXR5LiBVc2VzIGEgc3RhdGljIFR3ZWVuUGx1Z2luIG1ldGhvZCBpbiBvcmRlciB0byBtaW5pbWl6ZSBmaWxlIHNpemUgaW4gVHdlZW5MaXRlXG5cdFx0XHR9XG5cdFx0XHRpZiAob3ApIGlmICghdGhpcy5fZmlyc3RQVCkgaWYgKHR5cGVvZih0aGlzLnRhcmdldCkgIT09IFwiZnVuY3Rpb25cIikgeyAvL2lmIGFsbCB0d2VlbmluZyBwcm9wZXJ0aWVzIGhhdmUgYmVlbiBvdmVyd3JpdHRlbiwga2lsbCB0aGUgdHdlZW4uIElmIHRoZSB0YXJnZXQgaXMgYSBmdW5jdGlvbiwgaXQncyBwcm9iYWJseSBhIGRlbGF5ZWRDYWxsIHNvIGxldCBpdCBsaXZlLlxuXHRcdFx0XHR0aGlzLl9lbmFibGVkKGZhbHNlLCBmYWxzZSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodi5ydW5CYWNrd2FyZHMpIHtcblx0XHRcdFx0cHQgPSB0aGlzLl9maXJzdFBUO1xuXHRcdFx0XHR3aGlsZSAocHQpIHtcblx0XHRcdFx0XHRwdC5zICs9IHB0LmM7XG5cdFx0XHRcdFx0cHQuYyA9IC1wdC5jO1xuXHRcdFx0XHRcdHB0ID0gcHQuX25leHQ7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMuX29uVXBkYXRlID0gdi5vblVwZGF0ZTtcblx0XHRcdHRoaXMuX2luaXR0ZWQgPSB0cnVlO1xuXHRcdH07XG5cblx0XHRwLl9pbml0UHJvcHMgPSBmdW5jdGlvbih0YXJnZXQsIHByb3BMb29rdXAsIHNpYmxpbmdzLCBvdmVyd3JpdHRlblByb3BzKSB7XG5cdFx0XHR2YXIgcCwgaSwgaW5pdFBsdWdpbnMsIHBsdWdpbiwgcHQsIHY7XG5cdFx0XHRpZiAodGFyZ2V0ID09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoX2xhenlMb29rdXBbdGFyZ2V0Ll9nc1R3ZWVuSURdKSB7XG5cdFx0XHRcdF9sYXp5UmVuZGVyKCk7IC8vaWYgb3RoZXIgdHdlZW5zIG9mIHRoZSBzYW1lIHRhcmdldCBoYXZlIHJlY2VudGx5IGluaXR0ZWQgYnV0IGhhdmVuJ3QgcmVuZGVyZWQgeWV0LCB3ZSd2ZSBnb3QgdG8gZm9yY2UgdGhlIHJlbmRlciBzbyB0aGF0IHRoZSBzdGFydGluZyB2YWx1ZXMgYXJlIGNvcnJlY3QgKGltYWdpbmUgcG9wdWxhdGluZyBhIHRpbWVsaW5lIHdpdGggYSBidW5jaCBvZiBzZXF1ZW50aWFsIHR3ZWVucyBhbmQgdGhlbiBqdW1waW5nIHRvIHRoZSBlbmQpXG5cdFx0XHR9XG5cblx0XHRcdGlmICghdGhpcy52YXJzLmNzcykgaWYgKHRhcmdldC5zdHlsZSkgaWYgKHRhcmdldCAhPT0gd2luZG93ICYmIHRhcmdldC5ub2RlVHlwZSkgaWYgKF9wbHVnaW5zLmNzcykgaWYgKHRoaXMudmFycy5hdXRvQ1NTICE9PSBmYWxzZSkgeyAvL2l0J3Mgc28gY29tbW9uIHRvIHVzZSBUd2VlbkxpdGUvTWF4IHRvIGFuaW1hdGUgdGhlIGNzcyBvZiBET00gZWxlbWVudHMsIHdlIGFzc3VtZSB0aGF0IGlmIHRoZSB0YXJnZXQgaXMgYSBET00gZWxlbWVudCwgdGhhdCdzIHdoYXQgaXMgaW50ZW5kZWQgKGEgY29udmVuaWVuY2Ugc28gdGhhdCB1c2VycyBkb24ndCBoYXZlIHRvIHdyYXAgdGhpbmdzIGluIGNzczp7fSwgYWx0aG91Z2ggd2Ugc3RpbGwgcmVjb21tZW5kIGl0IGZvciBhIHNsaWdodCBwZXJmb3JtYW5jZSBib29zdCBhbmQgYmV0dGVyIHNwZWNpZmljaXR5KS4gTm90ZTogd2UgY2Fubm90IGNoZWNrIFwibm9kZVR5cGVcIiBvbiB0aGUgd2luZG93IGluc2lkZSBhbiBpZnJhbWUuXG5cdFx0XHRcdF9hdXRvQ1NTKHRoaXMudmFycywgdGFyZ2V0KTtcblx0XHRcdH1cblx0XHRcdGZvciAocCBpbiB0aGlzLnZhcnMpIHtcblx0XHRcdFx0diA9IHRoaXMudmFyc1twXTtcblx0XHRcdFx0aWYgKF9yZXNlcnZlZFByb3BzW3BdKSB7XG5cdFx0XHRcdFx0aWYgKHYpIGlmICgodiBpbnN0YW5jZW9mIEFycmF5KSB8fCAodi5wdXNoICYmIF9pc0FycmF5KHYpKSkgaWYgKHYuam9pbihcIlwiKS5pbmRleE9mKFwie3NlbGZ9XCIpICE9PSAtMSkge1xuXHRcdFx0XHRcdFx0dGhpcy52YXJzW3BdID0gdiA9IHRoaXMuX3N3YXBTZWxmSW5QYXJhbXModiwgdGhpcyk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH0gZWxzZSBpZiAoX3BsdWdpbnNbcF0gJiYgKHBsdWdpbiA9IG5ldyBfcGx1Z2luc1twXSgpKS5fb25Jbml0VHdlZW4odGFyZ2V0LCB0aGlzLnZhcnNbcF0sIHRoaXMpKSB7XG5cblx0XHRcdFx0XHQvL3QgLSB0YXJnZXQgXHRcdFtvYmplY3RdXG5cdFx0XHRcdFx0Ly9wIC0gcHJvcGVydHkgXHRcdFtzdHJpbmddXG5cdFx0XHRcdFx0Ly9zIC0gc3RhcnRcdFx0XHRbbnVtYmVyXVxuXHRcdFx0XHRcdC8vYyAtIGNoYW5nZVx0XHRbbnVtYmVyXVxuXHRcdFx0XHRcdC8vZiAtIGlzRnVuY3Rpb25cdFtib29sZWFuXVxuXHRcdFx0XHRcdC8vbiAtIG5hbWVcdFx0XHRbc3RyaW5nXVxuXHRcdFx0XHRcdC8vcGcgLSBpc1BsdWdpbiBcdFtib29sZWFuXVxuXHRcdFx0XHRcdC8vcHIgLSBwcmlvcml0eVx0XHRbbnVtYmVyXVxuXHRcdFx0XHRcdHRoaXMuX2ZpcnN0UFQgPSBwdCA9IHtfbmV4dDp0aGlzLl9maXJzdFBULCB0OnBsdWdpbiwgcDpcInNldFJhdGlvXCIsIHM6MCwgYzoxLCBmOnRydWUsIG46cCwgcGc6dHJ1ZSwgcHI6cGx1Z2luLl9wcmlvcml0eX07XG5cdFx0XHRcdFx0aSA9IHBsdWdpbi5fb3ZlcndyaXRlUHJvcHMubGVuZ3RoO1xuXHRcdFx0XHRcdHdoaWxlICgtLWkgPiAtMSkge1xuXHRcdFx0XHRcdFx0cHJvcExvb2t1cFtwbHVnaW4uX292ZXJ3cml0ZVByb3BzW2ldXSA9IHRoaXMuX2ZpcnN0UFQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChwbHVnaW4uX3ByaW9yaXR5IHx8IHBsdWdpbi5fb25Jbml0QWxsUHJvcHMpIHtcblx0XHRcdFx0XHRcdGluaXRQbHVnaW5zID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHBsdWdpbi5fb25EaXNhYmxlIHx8IHBsdWdpbi5fb25FbmFibGUpIHtcblx0XHRcdFx0XHRcdHRoaXMuX25vdGlmeVBsdWdpbnNPZkVuYWJsZWQgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuX2ZpcnN0UFQgPSBwcm9wTG9va3VwW3BdID0gcHQgPSB7X25leHQ6dGhpcy5fZmlyc3RQVCwgdDp0YXJnZXQsIHA6cCwgZjoodHlwZW9mKHRhcmdldFtwXSkgPT09IFwiZnVuY3Rpb25cIiksIG46cCwgcGc6ZmFsc2UsIHByOjB9O1xuXHRcdFx0XHRcdHB0LnMgPSAoIXB0LmYpID8gcGFyc2VGbG9hdCh0YXJnZXRbcF0pIDogdGFyZ2V0WyAoKHAuaW5kZXhPZihcInNldFwiKSB8fCB0eXBlb2YodGFyZ2V0W1wiZ2V0XCIgKyBwLnN1YnN0cigzKV0pICE9PSBcImZ1bmN0aW9uXCIpID8gcCA6IFwiZ2V0XCIgKyBwLnN1YnN0cigzKSkgXSgpO1xuXHRcdFx0XHRcdHB0LmMgPSAodHlwZW9mKHYpID09PSBcInN0cmluZ1wiICYmIHYuY2hhckF0KDEpID09PSBcIj1cIikgPyBwYXJzZUludCh2LmNoYXJBdCgwKSArIFwiMVwiLCAxMCkgKiBOdW1iZXIodi5zdWJzdHIoMikpIDogKE51bWJlcih2KSAtIHB0LnMpIHx8IDA7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHB0KSBpZiAocHQuX25leHQpIHtcblx0XHRcdFx0XHRwdC5fbmV4dC5fcHJldiA9IHB0O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmIChvdmVyd3JpdHRlblByb3BzKSBpZiAodGhpcy5fa2lsbChvdmVyd3JpdHRlblByb3BzLCB0YXJnZXQpKSB7IC8vYW5vdGhlciB0d2VlbiBtYXkgaGF2ZSB0cmllZCB0byBvdmVyd3JpdGUgcHJvcGVydGllcyBvZiB0aGlzIHR3ZWVuIGJlZm9yZSBpbml0KCkgd2FzIGNhbGxlZCAobGlrZSBpZiB0d28gdHdlZW5zIHN0YXJ0IGF0IHRoZSBzYW1lIHRpbWUsIHRoZSBvbmUgY3JlYXRlZCBzZWNvbmQgd2lsbCBydW4gZmlyc3QpXG5cdFx0XHRcdHJldHVybiB0aGlzLl9pbml0UHJvcHModGFyZ2V0LCBwcm9wTG9va3VwLCBzaWJsaW5ncywgb3ZlcndyaXR0ZW5Qcm9wcyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5fb3ZlcndyaXRlID4gMSkgaWYgKHRoaXMuX2ZpcnN0UFQpIGlmIChzaWJsaW5ncy5sZW5ndGggPiAxKSBpZiAoX2FwcGx5T3ZlcndyaXRlKHRhcmdldCwgdGhpcywgcHJvcExvb2t1cCwgdGhpcy5fb3ZlcndyaXRlLCBzaWJsaW5ncykpIHtcblx0XHRcdFx0dGhpcy5fa2lsbChwcm9wTG9va3VwLCB0YXJnZXQpO1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5faW5pdFByb3BzKHRhcmdldCwgcHJvcExvb2t1cCwgc2libGluZ3MsIG92ZXJ3cml0dGVuUHJvcHMpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuX2ZpcnN0UFQpIGlmICgodGhpcy52YXJzLmxhenkgIT09IGZhbHNlICYmIHRoaXMuX2R1cmF0aW9uKSB8fCAodGhpcy52YXJzLmxhenkgJiYgIXRoaXMuX2R1cmF0aW9uKSkgeyAvL3plcm8gZHVyYXRpb24gdHdlZW5zIGRvbid0IGxhenkgcmVuZGVyIGJ5IGRlZmF1bHQ7IGV2ZXJ5dGhpbmcgZWxzZSBkb2VzLlxuXHRcdFx0XHRfbGF6eUxvb2t1cFt0YXJnZXQuX2dzVHdlZW5JRF0gPSB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGluaXRQbHVnaW5zO1xuXHRcdH07XG5cblx0XHRwLnJlbmRlciA9IGZ1bmN0aW9uKHRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSkge1xuXHRcdFx0dmFyIHByZXZUaW1lID0gdGhpcy5fdGltZSxcblx0XHRcdFx0ZHVyYXRpb24gPSB0aGlzLl9kdXJhdGlvbixcblx0XHRcdFx0cHJldlJhd1ByZXZUaW1lID0gdGhpcy5fcmF3UHJldlRpbWUsXG5cdFx0XHRcdGlzQ29tcGxldGUsIGNhbGxiYWNrLCBwdCwgcmF3UHJldlRpbWU7XG5cdFx0XHRpZiAodGltZSA+PSBkdXJhdGlvbikge1xuXHRcdFx0XHR0aGlzLl90b3RhbFRpbWUgPSB0aGlzLl90aW1lID0gZHVyYXRpb247XG5cdFx0XHRcdHRoaXMucmF0aW8gPSB0aGlzLl9lYXNlLl9jYWxjRW5kID8gdGhpcy5fZWFzZS5nZXRSYXRpbygxKSA6IDE7XG5cdFx0XHRcdGlmICghdGhpcy5fcmV2ZXJzZWQgKSB7XG5cdFx0XHRcdFx0aXNDb21wbGV0ZSA9IHRydWU7XG5cdFx0XHRcdFx0Y2FsbGJhY2sgPSBcIm9uQ29tcGxldGVcIjtcblx0XHRcdFx0XHRmb3JjZSA9IChmb3JjZSB8fCB0aGlzLl90aW1lbGluZS5hdXRvUmVtb3ZlQ2hpbGRyZW4pOyAvL290aGVyd2lzZSwgaWYgdGhlIGFuaW1hdGlvbiBpcyB1bnBhdXNlZC9hY3RpdmF0ZWQgYWZ0ZXIgaXQncyBhbHJlYWR5IGZpbmlzaGVkLCBpdCBkb2Vzbid0IGdldCByZW1vdmVkIGZyb20gdGhlIHBhcmVudCB0aW1lbGluZS5cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZHVyYXRpb24gPT09IDApIGlmICh0aGlzLl9pbml0dGVkIHx8ICF0aGlzLnZhcnMubGF6eSB8fCBmb3JjZSkgeyAvL3plcm8tZHVyYXRpb24gdHdlZW5zIGFyZSB0cmlja3kgYmVjYXVzZSB3ZSBtdXN0IGRpc2Nlcm4gdGhlIG1vbWVudHVtL2RpcmVjdGlvbiBvZiB0aW1lIGluIG9yZGVyIHRvIGRldGVybWluZSB3aGV0aGVyIHRoZSBzdGFydGluZyB2YWx1ZXMgc2hvdWxkIGJlIHJlbmRlcmVkIG9yIHRoZSBlbmRpbmcgdmFsdWVzLiBJZiB0aGUgXCJwbGF5aGVhZFwiIG9mIGl0cyB0aW1lbGluZSBnb2VzIHBhc3QgdGhlIHplcm8tZHVyYXRpb24gdHdlZW4gaW4gdGhlIGZvcndhcmQgZGlyZWN0aW9uIG9yIGxhbmRzIGRpcmVjdGx5IG9uIGl0LCB0aGUgZW5kIHZhbHVlcyBzaG91bGQgYmUgcmVuZGVyZWQsIGJ1dCBpZiB0aGUgdGltZWxpbmUncyBcInBsYXloZWFkXCIgbW92ZXMgcGFzdCBpdCBpbiB0aGUgYmFja3dhcmQgZGlyZWN0aW9uIChmcm9tIGEgcG9zdGl0aXZlIHRpbWUgdG8gYSBuZWdhdGl2ZSB0aW1lKSwgdGhlIHN0YXJ0aW5nIHZhbHVlcyBtdXN0IGJlIHJlbmRlcmVkLlxuXHRcdFx0XHRcdGlmICh0aGlzLl9zdGFydFRpbWUgPT09IHRoaXMuX3RpbWVsaW5lLl9kdXJhdGlvbikgeyAvL2lmIGEgemVyby1kdXJhdGlvbiB0d2VlbiBpcyBhdCB0aGUgVkVSWSBlbmQgb2YgYSB0aW1lbGluZSBhbmQgdGhhdCB0aW1lbGluZSByZW5kZXJzIGF0IGl0cyBlbmQsIGl0IHdpbGwgdHlwaWNhbGx5IGFkZCBhIHRpbnkgYml0IG9mIGN1c2hpb24gdG8gdGhlIHJlbmRlciB0aW1lIHRvIHByZXZlbnQgcm91bmRpbmcgZXJyb3JzIGZyb20gZ2V0dGluZyBpbiB0aGUgd2F5IG9mIHR3ZWVucyByZW5kZXJpbmcgdGhlaXIgVkVSWSBlbmQuIElmIHdlIHRoZW4gcmV2ZXJzZSgpIHRoYXQgdGltZWxpbmUsIHRoZSB6ZXJvLWR1cmF0aW9uIHR3ZWVuIHdpbGwgdHJpZ2dlciBpdHMgb25SZXZlcnNlQ29tcGxldGUgZXZlbiB0aG91Z2ggdGVjaG5pY2FsbHkgdGhlIHBsYXloZWFkIGRpZG4ndCBwYXNzIG92ZXIgaXQgYWdhaW4uIEl0J3MgYSB2ZXJ5IHNwZWNpZmljIGVkZ2UgY2FzZSB3ZSBtdXN0IGFjY29tbW9kYXRlLlxuXHRcdFx0XHRcdFx0dGltZSA9IDA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICh0aW1lID09PSAwIHx8IHByZXZSYXdQcmV2VGltZSA8IDAgfHwgKHByZXZSYXdQcmV2VGltZSA9PT0gX3RpbnlOdW0gJiYgdGhpcy5kYXRhICE9PSBcImlzUGF1c2VcIikpIGlmIChwcmV2UmF3UHJldlRpbWUgIT09IHRpbWUpIHsgLy9ub3RlOiB3aGVuIHRoaXMuZGF0YSBpcyBcImlzUGF1c2VcIiwgaXQncyBhIGNhbGxiYWNrIGFkZGVkIGJ5IGFkZFBhdXNlKCkgb24gYSB0aW1lbGluZSB0aGF0IHdlIHNob3VsZCBub3QgYmUgdHJpZ2dlcmVkIHdoZW4gTEVBVklORyBpdHMgZXhhY3Qgc3RhcnQgdGltZS4gSW4gb3RoZXIgd29yZHMsIHRsLmFkZFBhdXNlKDEpLnBsYXkoMSkgc2hvdWxkbid0IHBhdXNlLlxuXHRcdFx0XHRcdFx0Zm9yY2UgPSB0cnVlO1xuXHRcdFx0XHRcdFx0aWYgKHByZXZSYXdQcmV2VGltZSA+IF90aW55TnVtKSB7XG5cdFx0XHRcdFx0XHRcdGNhbGxiYWNrID0gXCJvblJldmVyc2VDb21wbGV0ZVwiO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLl9yYXdQcmV2VGltZSA9IHJhd1ByZXZUaW1lID0gKCFzdXBwcmVzc0V2ZW50cyB8fCB0aW1lIHx8IHByZXZSYXdQcmV2VGltZSA9PT0gdGltZSkgPyB0aW1lIDogX3RpbnlOdW07IC8vd2hlbiB0aGUgcGxheWhlYWQgYXJyaXZlcyBhdCBFWEFDVExZIHRpbWUgMCAocmlnaHQgb24gdG9wKSBvZiBhIHplcm8tZHVyYXRpb24gdHdlZW4sIHdlIG5lZWQgdG8gZGlzY2VybiBpZiBldmVudHMgYXJlIHN1cHByZXNzZWQgc28gdGhhdCB3aGVuIHRoZSBwbGF5aGVhZCBtb3ZlcyBhZ2FpbiAobmV4dCB0aW1lKSwgaXQnbGwgdHJpZ2dlciB0aGUgY2FsbGJhY2suIElmIGV2ZW50cyBhcmUgTk9UIHN1cHByZXNzZWQsIG9idmlvdXNseSB0aGUgY2FsbGJhY2sgd291bGQgYmUgdHJpZ2dlcmVkIGluIHRoaXMgcmVuZGVyLiBCYXNpY2FsbHksIHRoZSBjYWxsYmFjayBzaG91bGQgZmlyZSBlaXRoZXIgd2hlbiB0aGUgcGxheWhlYWQgQVJSSVZFUyBvciBMRUFWRVMgdGhpcyBleGFjdCBzcG90LCBub3QgYm90aC4gSW1hZ2luZSBkb2luZyBhIHRpbWVsaW5lLnNlZWsoMCkgYW5kIHRoZXJlJ3MgYSBjYWxsYmFjayB0aGF0IHNpdHMgYXQgMC4gU2luY2UgZXZlbnRzIGFyZSBzdXBwcmVzc2VkIG9uIHRoYXQgc2VlaygpIGJ5IGRlZmF1bHQsIG5vdGhpbmcgd2lsbCBmaXJlLCBidXQgd2hlbiB0aGUgcGxheWhlYWQgbW92ZXMgb2ZmIG9mIHRoYXQgcG9zaXRpb24sIHRoZSBjYWxsYmFjayBzaG91bGQgZmlyZS4gVGhpcyBiZWhhdmlvciBpcyB3aGF0IHBlb3BsZSBpbnR1aXRpdmVseSBleHBlY3QuIFdlIHNldCB0aGUgX3Jhd1ByZXZUaW1lIHRvIGJlIGEgcHJlY2lzZSB0aW55IG51bWJlciB0byBpbmRpY2F0ZSB0aGlzIHNjZW5hcmlvIHJhdGhlciB0aGFuIHVzaW5nIGFub3RoZXIgcHJvcGVydHkvdmFyaWFibGUgd2hpY2ggd291bGQgaW5jcmVhc2UgbWVtb3J5IHVzYWdlLiBUaGlzIHRlY2huaXF1ZSBpcyBsZXNzIHJlYWRhYmxlLCBidXQgbW9yZSBlZmZpY2llbnQuXG5cdFx0XHRcdH1cblxuXHRcdFx0fSBlbHNlIGlmICh0aW1lIDwgMC4wMDAwMDAxKSB7IC8vdG8gd29yayBhcm91bmQgb2NjYXNpb25hbCBmbG9hdGluZyBwb2ludCBtYXRoIGFydGlmYWN0cywgcm91bmQgc3VwZXIgc21hbGwgdmFsdWVzIHRvIDAuXG5cdFx0XHRcdHRoaXMuX3RvdGFsVGltZSA9IHRoaXMuX3RpbWUgPSAwO1xuXHRcdFx0XHR0aGlzLnJhdGlvID0gdGhpcy5fZWFzZS5fY2FsY0VuZCA/IHRoaXMuX2Vhc2UuZ2V0UmF0aW8oMCkgOiAwO1xuXHRcdFx0XHRpZiAocHJldlRpbWUgIT09IDAgfHwgKGR1cmF0aW9uID09PSAwICYmIHByZXZSYXdQcmV2VGltZSA+IDApKSB7XG5cdFx0XHRcdFx0Y2FsbGJhY2sgPSBcIm9uUmV2ZXJzZUNvbXBsZXRlXCI7XG5cdFx0XHRcdFx0aXNDb21wbGV0ZSA9IHRoaXMuX3JldmVyc2VkO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0aW1lIDwgMCkge1xuXHRcdFx0XHRcdHRoaXMuX2FjdGl2ZSA9IGZhbHNlO1xuXHRcdFx0XHRcdGlmIChkdXJhdGlvbiA9PT0gMCkgaWYgKHRoaXMuX2luaXR0ZWQgfHwgIXRoaXMudmFycy5sYXp5IHx8IGZvcmNlKSB7IC8vemVyby1kdXJhdGlvbiB0d2VlbnMgYXJlIHRyaWNreSBiZWNhdXNlIHdlIG11c3QgZGlzY2VybiB0aGUgbW9tZW50dW0vZGlyZWN0aW9uIG9mIHRpbWUgaW4gb3JkZXIgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhlIHN0YXJ0aW5nIHZhbHVlcyBzaG91bGQgYmUgcmVuZGVyZWQgb3IgdGhlIGVuZGluZyB2YWx1ZXMuIElmIHRoZSBcInBsYXloZWFkXCIgb2YgaXRzIHRpbWVsaW5lIGdvZXMgcGFzdCB0aGUgemVyby1kdXJhdGlvbiB0d2VlbiBpbiB0aGUgZm9yd2FyZCBkaXJlY3Rpb24gb3IgbGFuZHMgZGlyZWN0bHkgb24gaXQsIHRoZSBlbmQgdmFsdWVzIHNob3VsZCBiZSByZW5kZXJlZCwgYnV0IGlmIHRoZSB0aW1lbGluZSdzIFwicGxheWhlYWRcIiBtb3ZlcyBwYXN0IGl0IGluIHRoZSBiYWNrd2FyZCBkaXJlY3Rpb24gKGZyb20gYSBwb3N0aXRpdmUgdGltZSB0byBhIG5lZ2F0aXZlIHRpbWUpLCB0aGUgc3RhcnRpbmcgdmFsdWVzIG11c3QgYmUgcmVuZGVyZWQuXG5cdFx0XHRcdFx0XHRpZiAocHJldlJhd1ByZXZUaW1lID49IDAgJiYgIShwcmV2UmF3UHJldlRpbWUgPT09IF90aW55TnVtICYmIHRoaXMuZGF0YSA9PT0gXCJpc1BhdXNlXCIpKSB7XG5cdFx0XHRcdFx0XHRcdGZvcmNlID0gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHRoaXMuX3Jhd1ByZXZUaW1lID0gcmF3UHJldlRpbWUgPSAoIXN1cHByZXNzRXZlbnRzIHx8IHRpbWUgfHwgcHJldlJhd1ByZXZUaW1lID09PSB0aW1lKSA/IHRpbWUgOiBfdGlueU51bTsgLy93aGVuIHRoZSBwbGF5aGVhZCBhcnJpdmVzIGF0IEVYQUNUTFkgdGltZSAwIChyaWdodCBvbiB0b3ApIG9mIGEgemVyby1kdXJhdGlvbiB0d2Vlbiwgd2UgbmVlZCB0byBkaXNjZXJuIGlmIGV2ZW50cyBhcmUgc3VwcHJlc3NlZCBzbyB0aGF0IHdoZW4gdGhlIHBsYXloZWFkIG1vdmVzIGFnYWluIChuZXh0IHRpbWUpLCBpdCdsbCB0cmlnZ2VyIHRoZSBjYWxsYmFjay4gSWYgZXZlbnRzIGFyZSBOT1Qgc3VwcHJlc3NlZCwgb2J2aW91c2x5IHRoZSBjYWxsYmFjayB3b3VsZCBiZSB0cmlnZ2VyZWQgaW4gdGhpcyByZW5kZXIuIEJhc2ljYWxseSwgdGhlIGNhbGxiYWNrIHNob3VsZCBmaXJlIGVpdGhlciB3aGVuIHRoZSBwbGF5aGVhZCBBUlJJVkVTIG9yIExFQVZFUyB0aGlzIGV4YWN0IHNwb3QsIG5vdCBib3RoLiBJbWFnaW5lIGRvaW5nIGEgdGltZWxpbmUuc2VlaygwKSBhbmQgdGhlcmUncyBhIGNhbGxiYWNrIHRoYXQgc2l0cyBhdCAwLiBTaW5jZSBldmVudHMgYXJlIHN1cHByZXNzZWQgb24gdGhhdCBzZWVrKCkgYnkgZGVmYXVsdCwgbm90aGluZyB3aWxsIGZpcmUsIGJ1dCB3aGVuIHRoZSBwbGF5aGVhZCBtb3ZlcyBvZmYgb2YgdGhhdCBwb3NpdGlvbiwgdGhlIGNhbGxiYWNrIHNob3VsZCBmaXJlLiBUaGlzIGJlaGF2aW9yIGlzIHdoYXQgcGVvcGxlIGludHVpdGl2ZWx5IGV4cGVjdC4gV2Ugc2V0IHRoZSBfcmF3UHJldlRpbWUgdG8gYmUgYSBwcmVjaXNlIHRpbnkgbnVtYmVyIHRvIGluZGljYXRlIHRoaXMgc2NlbmFyaW8gcmF0aGVyIHRoYW4gdXNpbmcgYW5vdGhlciBwcm9wZXJ0eS92YXJpYWJsZSB3aGljaCB3b3VsZCBpbmNyZWFzZSBtZW1vcnkgdXNhZ2UuIFRoaXMgdGVjaG5pcXVlIGlzIGxlc3MgcmVhZGFibGUsIGJ1dCBtb3JlIGVmZmljaWVudC5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCF0aGlzLl9pbml0dGVkKSB7IC8vaWYgd2UgcmVuZGVyIHRoZSB2ZXJ5IGJlZ2lubmluZyAodGltZSA9PSAwKSBvZiBhIGZyb21UbygpLCB3ZSBtdXN0IGZvcmNlIHRoZSByZW5kZXIgKG5vcm1hbCB0d2VlbnMgd291bGRuJ3QgbmVlZCB0byByZW5kZXIgYXQgYSB0aW1lIG9mIDAgd2hlbiB0aGUgcHJldlRpbWUgd2FzIGFsc28gMCkuIFRoaXMgaXMgYWxzbyBtYW5kYXRvcnkgdG8gbWFrZSBzdXJlIG92ZXJ3cml0aW5nIGtpY2tzIGluIGltbWVkaWF0ZWx5LlxuXHRcdFx0XHRcdGZvcmNlID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5fdG90YWxUaW1lID0gdGhpcy5fdGltZSA9IHRpbWU7XG5cblx0XHRcdFx0aWYgKHRoaXMuX2Vhc2VUeXBlKSB7XG5cdFx0XHRcdFx0dmFyIHIgPSB0aW1lIC8gZHVyYXRpb24sIHR5cGUgPSB0aGlzLl9lYXNlVHlwZSwgcG93ID0gdGhpcy5fZWFzZVBvd2VyO1xuXHRcdFx0XHRcdGlmICh0eXBlID09PSAxIHx8ICh0eXBlID09PSAzICYmIHIgPj0gMC41KSkge1xuXHRcdFx0XHRcdFx0ciA9IDEgLSByO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAodHlwZSA9PT0gMykge1xuXHRcdFx0XHRcdFx0ciAqPSAyO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAocG93ID09PSAxKSB7XG5cdFx0XHRcdFx0XHRyICo9IHI7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChwb3cgPT09IDIpIHtcblx0XHRcdFx0XHRcdHIgKj0gciAqIHI7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChwb3cgPT09IDMpIHtcblx0XHRcdFx0XHRcdHIgKj0gciAqIHIgKiByO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAocG93ID09PSA0KSB7XG5cdFx0XHRcdFx0XHRyICo9IHIgKiByICogciAqIHI7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKHR5cGUgPT09IDEpIHtcblx0XHRcdFx0XHRcdHRoaXMucmF0aW8gPSAxIC0gcjtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHR5cGUgPT09IDIpIHtcblx0XHRcdFx0XHRcdHRoaXMucmF0aW8gPSByO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAodGltZSAvIGR1cmF0aW9uIDwgMC41KSB7XG5cdFx0XHRcdFx0XHR0aGlzLnJhdGlvID0gciAvIDI7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMucmF0aW8gPSAxIC0gKHIgLyAyKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLnJhdGlvID0gdGhpcy5fZWFzZS5nZXRSYXRpbyh0aW1lIC8gZHVyYXRpb24pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLl90aW1lID09PSBwcmV2VGltZSAmJiAhZm9yY2UpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fSBlbHNlIGlmICghdGhpcy5faW5pdHRlZCkge1xuXHRcdFx0XHR0aGlzLl9pbml0KCk7XG5cdFx0XHRcdGlmICghdGhpcy5faW5pdHRlZCB8fCB0aGlzLl9nYykgeyAvL2ltbWVkaWF0ZVJlbmRlciB0d2VlbnMgdHlwaWNhbGx5IHdvbid0IGluaXRpYWxpemUgdW50aWwgdGhlIHBsYXloZWFkIGFkdmFuY2VzIChfdGltZSBpcyBncmVhdGVyIHRoYW4gMCkgaW4gb3JkZXIgdG8gZW5zdXJlIHRoYXQgb3ZlcndyaXRpbmcgb2NjdXJzIHByb3Blcmx5LiBBbHNvLCBpZiBhbGwgb2YgdGhlIHR3ZWVuaW5nIHByb3BlcnRpZXMgaGF2ZSBiZWVuIG92ZXJ3cml0dGVuICh3aGljaCB3b3VsZCBjYXVzZSBfZ2MgdG8gYmUgdHJ1ZSwgYXMgc2V0IGluIF9pbml0KCkpLCB3ZSBzaG91bGRuJ3QgY29udGludWUgb3RoZXJ3aXNlIGFuIG9uU3RhcnQgY2FsbGJhY2sgY291bGQgYmUgY2FsbGVkIGZvciBleGFtcGxlLlxuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fSBlbHNlIGlmICghZm9yY2UgJiYgdGhpcy5fZmlyc3RQVCAmJiAoKHRoaXMudmFycy5sYXp5ICE9PSBmYWxzZSAmJiB0aGlzLl9kdXJhdGlvbikgfHwgKHRoaXMudmFycy5sYXp5ICYmICF0aGlzLl9kdXJhdGlvbikpKSB7XG5cdFx0XHRcdFx0dGhpcy5fdGltZSA9IHRoaXMuX3RvdGFsVGltZSA9IHByZXZUaW1lO1xuXHRcdFx0XHRcdHRoaXMuX3Jhd1ByZXZUaW1lID0gcHJldlJhd1ByZXZUaW1lO1xuXHRcdFx0XHRcdF9sYXp5VHdlZW5zLnB1c2godGhpcyk7XG5cdFx0XHRcdFx0dGhpcy5fbGF6eSA9IFt0aW1lLCBzdXBwcmVzc0V2ZW50c107XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vX2Vhc2UgaXMgaW5pdGlhbGx5IHNldCB0byBkZWZhdWx0RWFzZSwgc28gbm93IHRoYXQgaW5pdCgpIGhhcyBydW4sIF9lYXNlIGlzIHNldCBwcm9wZXJseSBhbmQgd2UgbmVlZCB0byByZWNhbGN1bGF0ZSB0aGUgcmF0aW8uIE92ZXJhbGwgdGhpcyBpcyBmYXN0ZXIgdGhhbiB1c2luZyBjb25kaXRpb25hbCBsb2dpYyBlYXJsaWVyIGluIHRoZSBtZXRob2QgdG8gYXZvaWQgaGF2aW5nIHRvIHNldCByYXRpbyB0d2ljZSBiZWNhdXNlIHdlIG9ubHkgaW5pdCgpIG9uY2UgYnV0IHJlbmRlclRpbWUoKSBnZXRzIGNhbGxlZCBWRVJZIGZyZXF1ZW50bHkuXG5cdFx0XHRcdGlmICh0aGlzLl90aW1lICYmICFpc0NvbXBsZXRlKSB7XG5cdFx0XHRcdFx0dGhpcy5yYXRpbyA9IHRoaXMuX2Vhc2UuZ2V0UmF0aW8odGhpcy5fdGltZSAvIGR1cmF0aW9uKTtcblx0XHRcdFx0fSBlbHNlIGlmIChpc0NvbXBsZXRlICYmIHRoaXMuX2Vhc2UuX2NhbGNFbmQpIHtcblx0XHRcdFx0XHR0aGlzLnJhdGlvID0gdGhpcy5fZWFzZS5nZXRSYXRpbygodGhpcy5fdGltZSA9PT0gMCkgPyAwIDogMSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLl9sYXp5ICE9PSBmYWxzZSkgeyAvL2luIGNhc2UgYSBsYXp5IHJlbmRlciBpcyBwZW5kaW5nLCB3ZSBzaG91bGQgZmx1c2ggaXQgYmVjYXVzZSB0aGUgbmV3IHJlbmRlciBpcyBvY2N1cnJpbmcgbm93IChpbWFnaW5lIGEgbGF6eSB0d2VlbiBpbnN0YW50aWF0aW5nIGFuZCB0aGVuIGltbWVkaWF0ZWx5IHRoZSB1c2VyIGNhbGxzIHR3ZWVuLnNlZWsodHdlZW4uZHVyYXRpb24oKSksIHNraXBwaW5nIHRvIHRoZSBlbmQgLSB0aGUgZW5kIHJlbmRlciB3b3VsZCBiZSBmb3JjZWQsIGFuZCB0aGVuIGlmIHdlIGRpZG4ndCBmbHVzaCB0aGUgbGF6eSByZW5kZXIsIGl0J2QgZmlyZSBBRlRFUiB0aGUgc2VlaygpLCByZW5kZXJpbmcgaXQgYXQgdGhlIHdyb25nIHRpbWUuXG5cdFx0XHRcdHRoaXMuX2xhenkgPSBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGlmICghdGhpcy5fYWN0aXZlKSBpZiAoIXRoaXMuX3BhdXNlZCAmJiB0aGlzLl90aW1lICE9PSBwcmV2VGltZSAmJiB0aW1lID49IDApIHtcblx0XHRcdFx0dGhpcy5fYWN0aXZlID0gdHJ1ZTsgIC8vc28gdGhhdCBpZiB0aGUgdXNlciByZW5kZXJzIGEgdHdlZW4gKGFzIG9wcG9zZWQgdG8gdGhlIHRpbWVsaW5lIHJlbmRlcmluZyBpdCksIHRoZSB0aW1lbGluZSBpcyBmb3JjZWQgdG8gcmUtcmVuZGVyIGFuZCBhbGlnbiBpdCB3aXRoIHRoZSBwcm9wZXIgdGltZS9mcmFtZSBvbiB0aGUgbmV4dCByZW5kZXJpbmcgY3ljbGUuIE1heWJlIHRoZSB0d2VlbiBhbHJlYWR5IGZpbmlzaGVkIGJ1dCB0aGUgdXNlciBtYW51YWxseSByZS1yZW5kZXJzIGl0IGFzIGhhbGZ3YXkgZG9uZS5cblx0XHRcdH1cblx0XHRcdGlmIChwcmV2VGltZSA9PT0gMCkge1xuXHRcdFx0XHRpZiAodGhpcy5fc3RhcnRBdCkge1xuXHRcdFx0XHRcdGlmICh0aW1lID49IDApIHtcblx0XHRcdFx0XHRcdHRoaXMuX3N0YXJ0QXQucmVuZGVyKHRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmICghY2FsbGJhY2spIHtcblx0XHRcdFx0XHRcdGNhbGxiYWNrID0gXCJfZHVtbXlHU1wiOyAvL2lmIG5vIGNhbGxiYWNrIGlzIGRlZmluZWQsIHVzZSBhIGR1bW15IHZhbHVlIGp1c3Qgc28gdGhhdCB0aGUgY29uZGl0aW9uIGF0IHRoZSBlbmQgZXZhbHVhdGVzIGFzIHRydWUgYmVjYXVzZSBfc3RhcnRBdCBzaG91bGQgcmVuZGVyIEFGVEVSIHRoZSBub3JtYWwgcmVuZGVyIGxvb3Agd2hlbiB0aGUgdGltZSBpcyBuZWdhdGl2ZS4gV2UgY291bGQgaGFuZGxlIHRoaXMgaW4gYSBtb3JlIGludHVpdGl2ZSB3YXksIG9mIGNvdXJzZSwgYnV0IHRoZSByZW5kZXIgbG9vcCBpcyB0aGUgTU9TVCBpbXBvcnRhbnQgdGhpbmcgdG8gb3B0aW1pemUsIHNvIHRoaXMgdGVjaG5pcXVlIGFsbG93cyB1cyB0byBhdm9pZCBhZGRpbmcgZXh0cmEgY29uZGl0aW9uYWwgbG9naWMgaW4gYSBoaWdoLWZyZXF1ZW5jeSBhcmVhLlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodGhpcy52YXJzLm9uU3RhcnQpIGlmICh0aGlzLl90aW1lICE9PSAwIHx8IGR1cmF0aW9uID09PSAwKSBpZiAoIXN1cHByZXNzRXZlbnRzKSB7XG5cdFx0XHRcdFx0dGhpcy52YXJzLm9uU3RhcnQuYXBwbHkodGhpcy52YXJzLm9uU3RhcnRTY29wZSB8fCB0aGlzLCB0aGlzLnZhcnMub25TdGFydFBhcmFtcyB8fCBfYmxhbmtBcnJheSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHB0ID0gdGhpcy5fZmlyc3RQVDtcblx0XHRcdHdoaWxlIChwdCkge1xuXHRcdFx0XHRpZiAocHQuZikge1xuXHRcdFx0XHRcdHB0LnRbcHQucF0ocHQuYyAqIHRoaXMucmF0aW8gKyBwdC5zKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRwdC50W3B0LnBdID0gcHQuYyAqIHRoaXMucmF0aW8gKyBwdC5zO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHB0ID0gcHQuX25leHQ7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLl9vblVwZGF0ZSkge1xuXHRcdFx0XHRpZiAodGltZSA8IDApIGlmICh0aGlzLl9zdGFydEF0ICYmIHRpbWUgIT09IC0wLjAwMDEpIHsgLy9pZiB0aGUgdHdlZW4gaXMgcG9zaXRpb25lZCBhdCB0aGUgVkVSWSBiZWdpbm5pbmcgKF9zdGFydFRpbWUgMCkgb2YgaXRzIHBhcmVudCB0aW1lbGluZSwgaXQncyBpbGxlZ2FsIGZvciB0aGUgcGxheWhlYWQgdG8gZ28gYmFjayBmdXJ0aGVyLCBzbyB3ZSBzaG91bGQgbm90IHJlbmRlciB0aGUgcmVjb3JkZWQgc3RhcnRBdCB2YWx1ZXMuXG5cdFx0XHRcdFx0dGhpcy5fc3RhcnRBdC5yZW5kZXIodGltZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKTsgLy9ub3RlOiBmb3IgcGVyZm9ybWFuY2UgcmVhc29ucywgd2UgdHVjayB0aGlzIGNvbmRpdGlvbmFsIGxvZ2ljIGluc2lkZSBsZXNzIHRyYXZlbGVkIGFyZWFzIChtb3N0IHR3ZWVucyBkb24ndCBoYXZlIGFuIG9uVXBkYXRlKS4gV2UnZCBqdXN0IGhhdmUgaXQgYXQgdGhlIGVuZCBiZWZvcmUgdGhlIG9uQ29tcGxldGUsIGJ1dCB0aGUgdmFsdWVzIHNob3VsZCBiZSB1cGRhdGVkIGJlZm9yZSBhbnkgb25VcGRhdGUgaXMgY2FsbGVkLCBzbyB3ZSBBTFNPIHB1dCBpdCBoZXJlIGFuZCB0aGVuIGlmIGl0J3Mgbm90IGNhbGxlZCwgd2UgZG8gc28gbGF0ZXIgbmVhciB0aGUgb25Db21wbGV0ZS5cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIXN1cHByZXNzRXZlbnRzKSBpZiAodGhpcy5fdGltZSAhPT0gcHJldlRpbWUgfHwgaXNDb21wbGV0ZSkge1xuXHRcdFx0XHRcdHRoaXMuX29uVXBkYXRlLmFwcGx5KHRoaXMudmFycy5vblVwZGF0ZVNjb3BlIHx8IHRoaXMsIHRoaXMudmFycy5vblVwZGF0ZVBhcmFtcyB8fCBfYmxhbmtBcnJheSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChjYWxsYmFjaykgaWYgKCF0aGlzLl9nYyB8fCBmb3JjZSkgeyAvL2NoZWNrIF9nYyBiZWNhdXNlIHRoZXJlJ3MgYSBjaGFuY2UgdGhhdCBraWxsKCkgY291bGQgYmUgY2FsbGVkIGluIGFuIG9uVXBkYXRlXG5cdFx0XHRcdGlmICh0aW1lIDwgMCAmJiB0aGlzLl9zdGFydEF0ICYmICF0aGlzLl9vblVwZGF0ZSAmJiB0aW1lICE9PSAtMC4wMDAxKSB7IC8vLTAuMDAwMSBpcyBhIHNwZWNpYWwgdmFsdWUgdGhhdCB3ZSB1c2Ugd2hlbiBsb29waW5nIGJhY2sgdG8gdGhlIGJlZ2lubmluZyBvZiBhIHJlcGVhdGVkIFRpbWVsaW5lTWF4LCBpbiB3aGljaCBjYXNlIHdlIHNob3VsZG4ndCByZW5kZXIgdGhlIF9zdGFydEF0IHZhbHVlcy5cblx0XHRcdFx0XHR0aGlzLl9zdGFydEF0LnJlbmRlcih0aW1lLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChpc0NvbXBsZXRlKSB7XG5cdFx0XHRcdFx0aWYgKHRoaXMuX3RpbWVsaW5lLmF1dG9SZW1vdmVDaGlsZHJlbikge1xuXHRcdFx0XHRcdFx0dGhpcy5fZW5hYmxlZChmYWxzZSwgZmFsc2UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLl9hY3RpdmUgPSBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIXN1cHByZXNzRXZlbnRzICYmIHRoaXMudmFyc1tjYWxsYmFja10pIHtcblx0XHRcdFx0XHR0aGlzLnZhcnNbY2FsbGJhY2tdLmFwcGx5KHRoaXMudmFyc1tjYWxsYmFjayArIFwiU2NvcGVcIl0gfHwgdGhpcywgdGhpcy52YXJzW2NhbGxiYWNrICsgXCJQYXJhbXNcIl0gfHwgX2JsYW5rQXJyYXkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkdXJhdGlvbiA9PT0gMCAmJiB0aGlzLl9yYXdQcmV2VGltZSA9PT0gX3RpbnlOdW0gJiYgcmF3UHJldlRpbWUgIT09IF90aW55TnVtKSB7IC8vdGhlIG9uQ29tcGxldGUgb3Igb25SZXZlcnNlQ29tcGxldGUgY291bGQgdHJpZ2dlciBtb3ZlbWVudCBvZiB0aGUgcGxheWhlYWQgYW5kIGZvciB6ZXJvLWR1cmF0aW9uIHR3ZWVucyAod2hpY2ggbXVzdCBkaXNjZXJuIGRpcmVjdGlvbikgdGhhdCBsYW5kIGRpcmVjdGx5IGJhY2sgb24gdGhlaXIgc3RhcnQgdGltZSwgd2UgZG9uJ3Qgd2FudCB0byBmaXJlIGFnYWluIG9uIHRoZSBuZXh0IHJlbmRlci4gVGhpbmsgb2Ygc2V2ZXJhbCBhZGRQYXVzZSgpJ3MgaW4gYSB0aW1lbGluZSB0aGF0IGZvcmNlcyB0aGUgcGxheWhlYWQgdG8gYSBjZXJ0YWluIHNwb3QsIGJ1dCB3aGF0IGlmIGl0J3MgYWxyZWFkeSBwYXVzZWQgYW5kIGFub3RoZXIgdHdlZW4gaXMgdHdlZW5pbmcgdGhlIFwidGltZVwiIG9mIHRoZSB0aW1lbGluZT8gRWFjaCB0aW1lIGl0IG1vdmVzIFtmb3J3YXJkXSBwYXN0IHRoYXQgc3BvdCwgaXQgd291bGQgbW92ZSBiYWNrLCBhbmQgc2luY2Ugc3VwcHJlc3NFdmVudHMgaXMgdHJ1ZSwgaXQnZCByZXNldCBfcmF3UHJldlRpbWUgdG8gX3RpbnlOdW0gc28gdGhhdCB3aGVuIGl0IGJlZ2lucyBhZ2FpbiwgdGhlIGNhbGxiYWNrIHdvdWxkIGZpcmUgKHNvIHVsdGltYXRlbHkgaXQgY291bGQgYm91bmNlIGJhY2sgYW5kIGZvcnRoIGR1cmluZyB0aGF0IHR3ZWVuKS4gQWdhaW4sIHRoaXMgaXMgYSB2ZXJ5IHVuY29tbW9uIHNjZW5hcmlvLCBidXQgcG9zc2libGUgbm9uZXRoZWxlc3MuXG5cdFx0XHRcdFx0dGhpcy5fcmF3UHJldlRpbWUgPSAwO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHAuX2tpbGwgPSBmdW5jdGlvbih2YXJzLCB0YXJnZXQsIG92ZXJ3cml0aW5nVHdlZW4pIHtcblx0XHRcdGlmICh2YXJzID09PSBcImFsbFwiKSB7XG5cdFx0XHRcdHZhcnMgPSBudWxsO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHZhcnMgPT0gbnVsbCkgaWYgKHRhcmdldCA9PSBudWxsIHx8IHRhcmdldCA9PT0gdGhpcy50YXJnZXQpIHtcblx0XHRcdFx0dGhpcy5fbGF6eSA9IGZhbHNlO1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fZW5hYmxlZChmYWxzZSwgZmFsc2UpO1xuXHRcdFx0fVxuXHRcdFx0dGFyZ2V0ID0gKHR5cGVvZih0YXJnZXQpICE9PSBcInN0cmluZ1wiKSA/ICh0YXJnZXQgfHwgdGhpcy5fdGFyZ2V0cyB8fCB0aGlzLnRhcmdldCkgOiBUd2VlbkxpdGUuc2VsZWN0b3IodGFyZ2V0KSB8fCB0YXJnZXQ7XG5cdFx0XHR2YXIgaSwgb3ZlcndyaXR0ZW5Qcm9wcywgcCwgcHQsIHByb3BMb29rdXAsIGNoYW5nZWQsIGtpbGxQcm9wcywgcmVjb3JkLCBraWxsZWQ7XG5cdFx0XHRpZiAoKF9pc0FycmF5KHRhcmdldCkgfHwgX2lzU2VsZWN0b3IodGFyZ2V0KSkgJiYgdHlwZW9mKHRhcmdldFswXSkgIT09IFwibnVtYmVyXCIpIHtcblx0XHRcdFx0aSA9IHRhcmdldC5sZW5ndGg7XG5cdFx0XHRcdHdoaWxlICgtLWkgPiAtMSkge1xuXHRcdFx0XHRcdGlmICh0aGlzLl9raWxsKHZhcnMsIHRhcmdldFtpXSkpIHtcblx0XHRcdFx0XHRcdGNoYW5nZWQgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKHRoaXMuX3RhcmdldHMpIHtcblx0XHRcdFx0XHRpID0gdGhpcy5fdGFyZ2V0cy5sZW5ndGg7XG5cdFx0XHRcdFx0d2hpbGUgKC0taSA+IC0xKSB7XG5cdFx0XHRcdFx0XHRpZiAodGFyZ2V0ID09PSB0aGlzLl90YXJnZXRzW2ldKSB7XG5cdFx0XHRcdFx0XHRcdHByb3BMb29rdXAgPSB0aGlzLl9wcm9wTG9va3VwW2ldIHx8IHt9O1xuXHRcdFx0XHRcdFx0XHR0aGlzLl9vdmVyd3JpdHRlblByb3BzID0gdGhpcy5fb3ZlcndyaXR0ZW5Qcm9wcyB8fCBbXTtcblx0XHRcdFx0XHRcdFx0b3ZlcndyaXR0ZW5Qcm9wcyA9IHRoaXMuX292ZXJ3cml0dGVuUHJvcHNbaV0gPSB2YXJzID8gdGhpcy5fb3ZlcndyaXR0ZW5Qcm9wc1tpXSB8fCB7fSA6IFwiYWxsXCI7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIGlmICh0YXJnZXQgIT09IHRoaXMudGFyZ2V0KSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHByb3BMb29rdXAgPSB0aGlzLl9wcm9wTG9va3VwO1xuXHRcdFx0XHRcdG92ZXJ3cml0dGVuUHJvcHMgPSB0aGlzLl9vdmVyd3JpdHRlblByb3BzID0gdmFycyA/IHRoaXMuX292ZXJ3cml0dGVuUHJvcHMgfHwge30gOiBcImFsbFwiO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHByb3BMb29rdXApIHtcblx0XHRcdFx0XHRraWxsUHJvcHMgPSB2YXJzIHx8IHByb3BMb29rdXA7XG5cdFx0XHRcdFx0cmVjb3JkID0gKHZhcnMgIT09IG92ZXJ3cml0dGVuUHJvcHMgJiYgb3ZlcndyaXR0ZW5Qcm9wcyAhPT0gXCJhbGxcIiAmJiB2YXJzICE9PSBwcm9wTG9va3VwICYmICh0eXBlb2YodmFycykgIT09IFwib2JqZWN0XCIgfHwgIXZhcnMuX3RlbXBLaWxsKSk7IC8vX3RlbXBLaWxsIGlzIGEgc3VwZXItc2VjcmV0IHdheSB0byBkZWxldGUgYSBwYXJ0aWN1bGFyIHR3ZWVuaW5nIHByb3BlcnR5IGJ1dCBOT1QgaGF2ZSBpdCByZW1lbWJlcmVkIGFzIGFuIG9mZmljaWFsIG92ZXJ3cml0dGVuIHByb3BlcnR5IChsaWtlIGluIEJlemllclBsdWdpbilcblx0XHRcdFx0XHRpZiAob3ZlcndyaXRpbmdUd2VlbiAmJiAoVHdlZW5MaXRlLm9uT3ZlcndyaXRlIHx8IHRoaXMudmFycy5vbk92ZXJ3cml0ZSkpIHtcblx0XHRcdFx0XHRcdGZvciAocCBpbiBraWxsUHJvcHMpIHtcblx0XHRcdFx0XHRcdFx0aWYgKHByb3BMb29rdXBbcF0pIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoIWtpbGxlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0a2lsbGVkID0gW107XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdGtpbGxlZC5wdXNoKHApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAoIV9vbk92ZXJ3cml0ZSh0aGlzLCBvdmVyd3JpdGluZ1R3ZWVuLCB0YXJnZXQsIGtpbGxlZCkpIHsgLy9pZiB0aGUgb25PdmVyd3JpdGUgcmV0dXJuZWQgZmFsc2UsIHRoYXQgbWVhbnMgdGhlIHVzZXIgd2FudHMgdG8gb3ZlcnJpZGUgdGhlIG92ZXJ3cml0aW5nIChjYW5jZWwgaXQpLlxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Zm9yIChwIGluIGtpbGxQcm9wcykge1xuXHRcdFx0XHRcdFx0aWYgKChwdCA9IHByb3BMb29rdXBbcF0pKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChwdC5wZyAmJiBwdC50Ll9raWxsKGtpbGxQcm9wcykpIHtcblx0XHRcdFx0XHRcdFx0XHRjaGFuZ2VkID0gdHJ1ZTsgLy9zb21lIHBsdWdpbnMgbmVlZCB0byBiZSBub3RpZmllZCBzbyB0aGV5IGNhbiBwZXJmb3JtIGNsZWFudXAgdGFza3MgZmlyc3Rcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRpZiAoIXB0LnBnIHx8IHB0LnQuX292ZXJ3cml0ZVByb3BzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChwdC5fcHJldikge1xuXHRcdFx0XHRcdFx0XHRcdFx0cHQuX3ByZXYuX25leHQgPSBwdC5fbmV4dDtcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHB0ID09PSB0aGlzLl9maXJzdFBUKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLl9maXJzdFBUID0gcHQuX25leHQ7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdGlmIChwdC5fbmV4dCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0cHQuX25leHQuX3ByZXYgPSBwdC5fcHJldjtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0cHQuX25leHQgPSBwdC5fcHJldiA9IG51bGw7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0ZGVsZXRlIHByb3BMb29rdXBbcF07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAocmVjb3JkKSB7XG5cdFx0XHRcdFx0XHRcdG92ZXJ3cml0dGVuUHJvcHNbcF0gPSAxO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoIXRoaXMuX2ZpcnN0UFQgJiYgdGhpcy5faW5pdHRlZCkgeyAvL2lmIGFsbCB0d2VlbmluZyBwcm9wZXJ0aWVzIGFyZSBraWxsZWQsIGtpbGwgdGhlIHR3ZWVuLiBXaXRob3V0IHRoaXMgbGluZSwgaWYgdGhlcmUncyBhIHR3ZWVuIHdpdGggbXVsdGlwbGUgdGFyZ2V0cyBhbmQgdGhlbiB5b3Uga2lsbFR3ZWVuc09mKCkgZWFjaCB0YXJnZXQgaW5kaXZpZHVhbGx5LCB0aGUgdHdlZW4gd291bGQgdGVjaG5pY2FsbHkgc3RpbGwgcmVtYWluIGFjdGl2ZSBhbmQgZmlyZSBpdHMgb25Db21wbGV0ZSBldmVuIHRob3VnaCB0aGVyZSBhcmVuJ3QgYW55IG1vcmUgcHJvcGVydGllcyB0d2VlbmluZy5cblx0XHRcdFx0XHRcdHRoaXMuX2VuYWJsZWQoZmFsc2UsIGZhbHNlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBjaGFuZ2VkO1xuXHRcdH07XG5cblx0XHRwLmludmFsaWRhdGUgPSBmdW5jdGlvbigpIHtcblx0XHRcdGlmICh0aGlzLl9ub3RpZnlQbHVnaW5zT2ZFbmFibGVkKSB7XG5cdFx0XHRcdFR3ZWVuTGl0ZS5fb25QbHVnaW5FdmVudChcIl9vbkRpc2FibGVcIiwgdGhpcyk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl9maXJzdFBUID0gdGhpcy5fb3ZlcndyaXR0ZW5Qcm9wcyA9IHRoaXMuX3N0YXJ0QXQgPSB0aGlzLl9vblVwZGF0ZSA9IG51bGw7XG5cdFx0XHR0aGlzLl9ub3RpZnlQbHVnaW5zT2ZFbmFibGVkID0gdGhpcy5fYWN0aXZlID0gdGhpcy5fbGF6eSA9IGZhbHNlO1xuXHRcdFx0dGhpcy5fcHJvcExvb2t1cCA9ICh0aGlzLl90YXJnZXRzKSA/IHt9IDogW107XG5cdFx0XHRBbmltYXRpb24ucHJvdG90eXBlLmludmFsaWRhdGUuY2FsbCh0aGlzKTtcblx0XHRcdGlmICh0aGlzLnZhcnMuaW1tZWRpYXRlUmVuZGVyKSB7XG5cdFx0XHRcdHRoaXMuX3RpbWUgPSAtX3RpbnlOdW07IC8vZm9yY2VzIGEgcmVuZGVyIHdpdGhvdXQgaGF2aW5nIHRvIHNldCB0aGUgcmVuZGVyKCkgXCJmb3JjZVwiIHBhcmFtZXRlciB0byB0cnVlIGJlY2F1c2Ugd2Ugd2FudCB0byBhbGxvdyBsYXp5aW5nIGJ5IGRlZmF1bHQgKHVzaW5nIHRoZSBcImZvcmNlXCIgcGFyYW1ldGVyIGFsd2F5cyBmb3JjZXMgYW4gaW1tZWRpYXRlIGZ1bGwgcmVuZGVyKVxuXHRcdFx0XHR0aGlzLnJlbmRlcigtdGhpcy5fZGVsYXkpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fTtcblxuXHRcdHAuX2VuYWJsZWQgPSBmdW5jdGlvbihlbmFibGVkLCBpZ25vcmVUaW1lbGluZSkge1xuXHRcdFx0aWYgKCFfdGlja2VyQWN0aXZlKSB7XG5cdFx0XHRcdF90aWNrZXIud2FrZSgpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGVuYWJsZWQgJiYgdGhpcy5fZ2MpIHtcblx0XHRcdFx0dmFyIHRhcmdldHMgPSB0aGlzLl90YXJnZXRzLFxuXHRcdFx0XHRcdGk7XG5cdFx0XHRcdGlmICh0YXJnZXRzKSB7XG5cdFx0XHRcdFx0aSA9IHRhcmdldHMubGVuZ3RoO1xuXHRcdFx0XHRcdHdoaWxlICgtLWkgPiAtMSkge1xuXHRcdFx0XHRcdFx0dGhpcy5fc2libGluZ3NbaV0gPSBfcmVnaXN0ZXIodGFyZ2V0c1tpXSwgdGhpcywgdHJ1ZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuX3NpYmxpbmdzID0gX3JlZ2lzdGVyKHRoaXMudGFyZ2V0LCB0aGlzLCB0cnVlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0QW5pbWF0aW9uLnByb3RvdHlwZS5fZW5hYmxlZC5jYWxsKHRoaXMsIGVuYWJsZWQsIGlnbm9yZVRpbWVsaW5lKTtcblx0XHRcdGlmICh0aGlzLl9ub3RpZnlQbHVnaW5zT2ZFbmFibGVkKSBpZiAodGhpcy5fZmlyc3RQVCkge1xuXHRcdFx0XHRyZXR1cm4gVHdlZW5MaXRlLl9vblBsdWdpbkV2ZW50KChlbmFibGVkID8gXCJfb25FbmFibGVcIiA6IFwiX29uRGlzYWJsZVwiKSwgdGhpcyk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fTtcblxuXG4vLy0tLS1Ud2VlbkxpdGUgc3RhdGljIG1ldGhvZHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdFR3ZWVuTGl0ZS50byA9IGZ1bmN0aW9uKHRhcmdldCwgZHVyYXRpb24sIHZhcnMpIHtcblx0XHRcdHJldHVybiBuZXcgVHdlZW5MaXRlKHRhcmdldCwgZHVyYXRpb24sIHZhcnMpO1xuXHRcdH07XG5cblx0XHRUd2VlbkxpdGUuZnJvbSA9IGZ1bmN0aW9uKHRhcmdldCwgZHVyYXRpb24sIHZhcnMpIHtcblx0XHRcdHZhcnMucnVuQmFja3dhcmRzID0gdHJ1ZTtcblx0XHRcdHZhcnMuaW1tZWRpYXRlUmVuZGVyID0gKHZhcnMuaW1tZWRpYXRlUmVuZGVyICE9IGZhbHNlKTtcblx0XHRcdHJldHVybiBuZXcgVHdlZW5MaXRlKHRhcmdldCwgZHVyYXRpb24sIHZhcnMpO1xuXHRcdH07XG5cblx0XHRUd2VlbkxpdGUuZnJvbVRvID0gZnVuY3Rpb24odGFyZ2V0LCBkdXJhdGlvbiwgZnJvbVZhcnMsIHRvVmFycykge1xuXHRcdFx0dG9WYXJzLnN0YXJ0QXQgPSBmcm9tVmFycztcblx0XHRcdHRvVmFycy5pbW1lZGlhdGVSZW5kZXIgPSAodG9WYXJzLmltbWVkaWF0ZVJlbmRlciAhPSBmYWxzZSAmJiBmcm9tVmFycy5pbW1lZGlhdGVSZW5kZXIgIT0gZmFsc2UpO1xuXHRcdFx0cmV0dXJuIG5ldyBUd2VlbkxpdGUodGFyZ2V0LCBkdXJhdGlvbiwgdG9WYXJzKTtcblx0XHR9O1xuXG5cdFx0VHdlZW5MaXRlLmRlbGF5ZWRDYWxsID0gZnVuY3Rpb24oZGVsYXksIGNhbGxiYWNrLCBwYXJhbXMsIHNjb3BlLCB1c2VGcmFtZXMpIHtcblx0XHRcdHJldHVybiBuZXcgVHdlZW5MaXRlKGNhbGxiYWNrLCAwLCB7ZGVsYXk6ZGVsYXksIG9uQ29tcGxldGU6Y2FsbGJhY2ssIG9uQ29tcGxldGVQYXJhbXM6cGFyYW1zLCBvbkNvbXBsZXRlU2NvcGU6c2NvcGUsIG9uUmV2ZXJzZUNvbXBsZXRlOmNhbGxiYWNrLCBvblJldmVyc2VDb21wbGV0ZVBhcmFtczpwYXJhbXMsIG9uUmV2ZXJzZUNvbXBsZXRlU2NvcGU6c2NvcGUsIGltbWVkaWF0ZVJlbmRlcjpmYWxzZSwgbGF6eTpmYWxzZSwgdXNlRnJhbWVzOnVzZUZyYW1lcywgb3ZlcndyaXRlOjB9KTtcblx0XHR9O1xuXG5cdFx0VHdlZW5MaXRlLnNldCA9IGZ1bmN0aW9uKHRhcmdldCwgdmFycykge1xuXHRcdFx0cmV0dXJuIG5ldyBUd2VlbkxpdGUodGFyZ2V0LCAwLCB2YXJzKTtcblx0XHR9O1xuXG5cdFx0VHdlZW5MaXRlLmdldFR3ZWVuc09mID0gZnVuY3Rpb24odGFyZ2V0LCBvbmx5QWN0aXZlKSB7XG5cdFx0XHRpZiAodGFyZ2V0ID09IG51bGwpIHsgcmV0dXJuIFtdOyB9XG5cdFx0XHR0YXJnZXQgPSAodHlwZW9mKHRhcmdldCkgIT09IFwic3RyaW5nXCIpID8gdGFyZ2V0IDogVHdlZW5MaXRlLnNlbGVjdG9yKHRhcmdldCkgfHwgdGFyZ2V0O1xuXHRcdFx0dmFyIGksIGEsIGosIHQ7XG5cdFx0XHRpZiAoKF9pc0FycmF5KHRhcmdldCkgfHwgX2lzU2VsZWN0b3IodGFyZ2V0KSkgJiYgdHlwZW9mKHRhcmdldFswXSkgIT09IFwibnVtYmVyXCIpIHtcblx0XHRcdFx0aSA9IHRhcmdldC5sZW5ndGg7XG5cdFx0XHRcdGEgPSBbXTtcblx0XHRcdFx0d2hpbGUgKC0taSA+IC0xKSB7XG5cdFx0XHRcdFx0YSA9IGEuY29uY2F0KFR3ZWVuTGl0ZS5nZXRUd2VlbnNPZih0YXJnZXRbaV0sIG9ubHlBY3RpdmUpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpID0gYS5sZW5ndGg7XG5cdFx0XHRcdC8vbm93IGdldCByaWQgb2YgYW55IGR1cGxpY2F0ZXMgKHR3ZWVucyBvZiBhcnJheXMgb2Ygb2JqZWN0cyBjb3VsZCBjYXVzZSBkdXBsaWNhdGVzKVxuXHRcdFx0XHR3aGlsZSAoLS1pID4gLTEpIHtcblx0XHRcdFx0XHR0ID0gYVtpXTtcblx0XHRcdFx0XHRqID0gaTtcblx0XHRcdFx0XHR3aGlsZSAoLS1qID4gLTEpIHtcblx0XHRcdFx0XHRcdGlmICh0ID09PSBhW2pdKSB7XG5cdFx0XHRcdFx0XHRcdGEuc3BsaWNlKGksIDEpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YSA9IF9yZWdpc3Rlcih0YXJnZXQpLmNvbmNhdCgpO1xuXHRcdFx0XHRpID0gYS5sZW5ndGg7XG5cdFx0XHRcdHdoaWxlICgtLWkgPiAtMSkge1xuXHRcdFx0XHRcdGlmIChhW2ldLl9nYyB8fCAob25seUFjdGl2ZSAmJiAhYVtpXS5pc0FjdGl2ZSgpKSkge1xuXHRcdFx0XHRcdFx0YS5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gYTtcblx0XHR9O1xuXG5cdFx0VHdlZW5MaXRlLmtpbGxUd2VlbnNPZiA9IFR3ZWVuTGl0ZS5raWxsRGVsYXllZENhbGxzVG8gPSBmdW5jdGlvbih0YXJnZXQsIG9ubHlBY3RpdmUsIHZhcnMpIHtcblx0XHRcdGlmICh0eXBlb2Yob25seUFjdGl2ZSkgPT09IFwib2JqZWN0XCIpIHtcblx0XHRcdFx0dmFycyA9IG9ubHlBY3RpdmU7IC8vZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IChiZWZvcmUgXCJvbmx5QWN0aXZlXCIgcGFyYW1ldGVyIHdhcyBpbnNlcnRlZClcblx0XHRcdFx0b25seUFjdGl2ZSA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0dmFyIGEgPSBUd2VlbkxpdGUuZ2V0VHdlZW5zT2YodGFyZ2V0LCBvbmx5QWN0aXZlKSxcblx0XHRcdFx0aSA9IGEubGVuZ3RoO1xuXHRcdFx0d2hpbGUgKC0taSA+IC0xKSB7XG5cdFx0XHRcdGFbaV0uX2tpbGwodmFycywgdGFyZ2V0KTtcblx0XHRcdH1cblx0XHR9O1xuXG5cblxuLypcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFR3ZWVuUGx1Z2luICAgKGNvdWxkIGVhc2lseSBiZSBzcGxpdCBvdXQgYXMgYSBzZXBhcmF0ZSBmaWxlL2NsYXNzLCBidXQgaW5jbHVkZWQgZm9yIGVhc2Ugb2YgdXNlIChzbyB0aGF0IHBlb3BsZSBkb24ndCBuZWVkIHRvIGluY2x1ZGUgYW5vdGhlciBzY3JpcHQgY2FsbCBiZWZvcmUgbG9hZGluZyBwbHVnaW5zIHdoaWNoIGlzIGVhc3kgdG8gZm9yZ2V0KVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cdFx0dmFyIFR3ZWVuUGx1Z2luID0gX2NsYXNzKFwicGx1Z2lucy5Ud2VlblBsdWdpblwiLCBmdW5jdGlvbihwcm9wcywgcHJpb3JpdHkpIHtcblx0XHRcdFx0XHR0aGlzLl9vdmVyd3JpdGVQcm9wcyA9IChwcm9wcyB8fCBcIlwiKS5zcGxpdChcIixcIik7XG5cdFx0XHRcdFx0dGhpcy5fcHJvcE5hbWUgPSB0aGlzLl9vdmVyd3JpdGVQcm9wc1swXTtcblx0XHRcdFx0XHR0aGlzLl9wcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0XHRcdFx0dGhpcy5fc3VwZXIgPSBUd2VlblBsdWdpbi5wcm90b3R5cGU7XG5cdFx0XHRcdH0sIHRydWUpO1xuXG5cdFx0cCA9IFR3ZWVuUGx1Z2luLnByb3RvdHlwZTtcblx0XHRUd2VlblBsdWdpbi52ZXJzaW9uID0gXCIxLjEwLjFcIjtcblx0XHRUd2VlblBsdWdpbi5BUEkgPSAyO1xuXHRcdHAuX2ZpcnN0UFQgPSBudWxsO1xuXG5cdFx0cC5fYWRkVHdlZW4gPSBmdW5jdGlvbih0YXJnZXQsIHByb3AsIHN0YXJ0LCBlbmQsIG92ZXJ3cml0ZVByb3AsIHJvdW5kKSB7XG5cdFx0XHR2YXIgYywgcHQ7XG5cdFx0XHRpZiAoZW5kICE9IG51bGwgJiYgKGMgPSAodHlwZW9mKGVuZCkgPT09IFwibnVtYmVyXCIgfHwgZW5kLmNoYXJBdCgxKSAhPT0gXCI9XCIpID8gTnVtYmVyKGVuZCkgLSBzdGFydCA6IHBhcnNlSW50KGVuZC5jaGFyQXQoMCkgKyBcIjFcIiwgMTApICogTnVtYmVyKGVuZC5zdWJzdHIoMikpKSkge1xuXHRcdFx0XHR0aGlzLl9maXJzdFBUID0gcHQgPSB7X25leHQ6dGhpcy5fZmlyc3RQVCwgdDp0YXJnZXQsIHA6cHJvcCwgczpzdGFydCwgYzpjLCBmOih0eXBlb2YodGFyZ2V0W3Byb3BdKSA9PT0gXCJmdW5jdGlvblwiKSwgbjpvdmVyd3JpdGVQcm9wIHx8IHByb3AsIHI6cm91bmR9O1xuXHRcdFx0XHRpZiAocHQuX25leHQpIHtcblx0XHRcdFx0XHRwdC5fbmV4dC5fcHJldiA9IHB0O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBwdDtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0cC5zZXRSYXRpbyA9IGZ1bmN0aW9uKHYpIHtcblx0XHRcdHZhciBwdCA9IHRoaXMuX2ZpcnN0UFQsXG5cdFx0XHRcdG1pbiA9IDAuMDAwMDAxLFxuXHRcdFx0XHR2YWw7XG5cdFx0XHR3aGlsZSAocHQpIHtcblx0XHRcdFx0dmFsID0gcHQuYyAqIHYgKyBwdC5zO1xuXHRcdFx0XHRpZiAocHQucikge1xuXHRcdFx0XHRcdHZhbCA9IE1hdGgucm91bmQodmFsKTtcblx0XHRcdFx0fSBlbHNlIGlmICh2YWwgPCBtaW4pIGlmICh2YWwgPiAtbWluKSB7IC8vcHJldmVudHMgaXNzdWVzIHdpdGggY29udmVydGluZyB2ZXJ5IHNtYWxsIG51bWJlcnMgdG8gc3RyaW5ncyBpbiB0aGUgYnJvd3NlclxuXHRcdFx0XHRcdHZhbCA9IDA7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHB0LmYpIHtcblx0XHRcdFx0XHRwdC50W3B0LnBdKHZhbCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cHQudFtwdC5wXSA9IHZhbDtcblx0XHRcdFx0fVxuXHRcdFx0XHRwdCA9IHB0Ll9uZXh0O1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRwLl9raWxsID0gZnVuY3Rpb24obG9va3VwKSB7XG5cdFx0XHR2YXIgYSA9IHRoaXMuX292ZXJ3cml0ZVByb3BzLFxuXHRcdFx0XHRwdCA9IHRoaXMuX2ZpcnN0UFQsXG5cdFx0XHRcdGk7XG5cdFx0XHRpZiAobG9va3VwW3RoaXMuX3Byb3BOYW1lXSAhPSBudWxsKSB7XG5cdFx0XHRcdHRoaXMuX292ZXJ3cml0ZVByb3BzID0gW107XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpID0gYS5sZW5ndGg7XG5cdFx0XHRcdHdoaWxlICgtLWkgPiAtMSkge1xuXHRcdFx0XHRcdGlmIChsb29rdXBbYVtpXV0gIT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0YS5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR3aGlsZSAocHQpIHtcblx0XHRcdFx0aWYgKGxvb2t1cFtwdC5uXSAhPSBudWxsKSB7XG5cdFx0XHRcdFx0aWYgKHB0Ll9uZXh0KSB7XG5cdFx0XHRcdFx0XHRwdC5fbmV4dC5fcHJldiA9IHB0Ll9wcmV2O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAocHQuX3ByZXYpIHtcblx0XHRcdFx0XHRcdHB0Ll9wcmV2Ll9uZXh0ID0gcHQuX25leHQ7XG5cdFx0XHRcdFx0XHRwdC5fcHJldiA9IG51bGw7XG5cdFx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLl9maXJzdFBUID09PSBwdCkge1xuXHRcdFx0XHRcdFx0dGhpcy5fZmlyc3RQVCA9IHB0Ll9uZXh0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRwdCA9IHB0Ll9uZXh0O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH07XG5cblx0XHRwLl9yb3VuZFByb3BzID0gZnVuY3Rpb24obG9va3VwLCB2YWx1ZSkge1xuXHRcdFx0dmFyIHB0ID0gdGhpcy5fZmlyc3RQVDtcblx0XHRcdHdoaWxlIChwdCkge1xuXHRcdFx0XHRpZiAobG9va3VwW3RoaXMuX3Byb3BOYW1lXSB8fCAocHQubiAhPSBudWxsICYmIGxvb2t1cFsgcHQubi5zcGxpdCh0aGlzLl9wcm9wTmFtZSArIFwiX1wiKS5qb2luKFwiXCIpIF0pKSB7IC8vc29tZSBwcm9wZXJ0aWVzIHRoYXQgYXJlIHZlcnkgcGx1Z2luLXNwZWNpZmljIGFkZCBhIHByZWZpeCBuYW1lZCBhZnRlciB0aGUgX3Byb3BOYW1lIHBsdXMgYW4gdW5kZXJzY29yZSwgc28gd2UgbmVlZCB0byBpZ25vcmUgdGhhdCBleHRyYSBzdHVmZiBoZXJlLlxuXHRcdFx0XHRcdHB0LnIgPSB2YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRwdCA9IHB0Ll9uZXh0O1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRUd2VlbkxpdGUuX29uUGx1Z2luRXZlbnQgPSBmdW5jdGlvbih0eXBlLCB0d2Vlbikge1xuXHRcdFx0dmFyIHB0ID0gdHdlZW4uX2ZpcnN0UFQsXG5cdFx0XHRcdGNoYW5nZWQsIHB0MiwgZmlyc3QsIGxhc3QsIG5leHQ7XG5cdFx0XHRpZiAodHlwZSA9PT0gXCJfb25Jbml0QWxsUHJvcHNcIikge1xuXHRcdFx0XHQvL3NvcnRzIHRoZSBQcm9wVHdlZW4gbGlua2VkIGxpc3QgaW4gb3JkZXIgb2YgcHJpb3JpdHkgYmVjYXVzZSBzb21lIHBsdWdpbnMgbmVlZCB0byByZW5kZXIgZWFybGllci9sYXRlciB0aGFuIG90aGVycywgbGlrZSBNb3Rpb25CbHVyUGx1Z2luIGFwcGxpZXMgaXRzIGVmZmVjdHMgYWZ0ZXIgYWxsIHgveS9hbHBoYSB0d2VlbnMgaGF2ZSByZW5kZXJlZCBvbiBlYWNoIGZyYW1lLlxuXHRcdFx0XHR3aGlsZSAocHQpIHtcblx0XHRcdFx0XHRuZXh0ID0gcHQuX25leHQ7XG5cdFx0XHRcdFx0cHQyID0gZmlyc3Q7XG5cdFx0XHRcdFx0d2hpbGUgKHB0MiAmJiBwdDIucHIgPiBwdC5wcikge1xuXHRcdFx0XHRcdFx0cHQyID0gcHQyLl9uZXh0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoKHB0Ll9wcmV2ID0gcHQyID8gcHQyLl9wcmV2IDogbGFzdCkpIHtcblx0XHRcdFx0XHRcdHB0Ll9wcmV2Ll9uZXh0ID0gcHQ7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGZpcnN0ID0gcHQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICgocHQuX25leHQgPSBwdDIpKSB7XG5cdFx0XHRcdFx0XHRwdDIuX3ByZXYgPSBwdDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0bGFzdCA9IHB0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRwdCA9IG5leHQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0cHQgPSB0d2Vlbi5fZmlyc3RQVCA9IGZpcnN0O1xuXHRcdFx0fVxuXHRcdFx0d2hpbGUgKHB0KSB7XG5cdFx0XHRcdGlmIChwdC5wZykgaWYgKHR5cGVvZihwdC50W3R5cGVdKSA9PT0gXCJmdW5jdGlvblwiKSBpZiAocHQudFt0eXBlXSgpKSB7XG5cdFx0XHRcdFx0Y2hhbmdlZCA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0cHQgPSBwdC5fbmV4dDtcblx0XHRcdH1cblx0XHRcdHJldHVybiBjaGFuZ2VkO1xuXHRcdH07XG5cblx0XHRUd2VlblBsdWdpbi5hY3RpdmF0ZSA9IGZ1bmN0aW9uKHBsdWdpbnMpIHtcblx0XHRcdHZhciBpID0gcGx1Z2lucy5sZW5ndGg7XG5cdFx0XHR3aGlsZSAoLS1pID4gLTEpIHtcblx0XHRcdFx0aWYgKHBsdWdpbnNbaV0uQVBJID09PSBUd2VlblBsdWdpbi5BUEkpIHtcblx0XHRcdFx0XHRfcGx1Z2luc1sobmV3IHBsdWdpbnNbaV0oKSkuX3Byb3BOYW1lXSA9IHBsdWdpbnNbaV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH07XG5cblx0XHQvL3Byb3ZpZGVzIGEgbW9yZSBjb25jaXNlIHdheSB0byBkZWZpbmUgcGx1Z2lucyB0aGF0IGhhdmUgbm8gZGVwZW5kZW5jaWVzIGJlc2lkZXMgVHdlZW5QbHVnaW4gYW5kIFR3ZWVuTGl0ZSwgd3JhcHBpbmcgY29tbW9uIGJvaWxlcnBsYXRlIHN0dWZmIGludG8gb25lIGZ1bmN0aW9uIChhZGRlZCBpbiAxLjkuMCkuIFlvdSBkb24ndCBORUVEIHRvIHVzZSB0aGlzIHRvIGRlZmluZSBhIHBsdWdpbiAtIHRoZSBvbGQgd2F5IHN0aWxsIHdvcmtzIGFuZCBjYW4gYmUgdXNlZnVsIGluIGNlcnRhaW4gKHJhcmUpIHNpdHVhdGlvbnMuXG5cdFx0X2dzRGVmaW5lLnBsdWdpbiA9IGZ1bmN0aW9uKGNvbmZpZykge1xuXHRcdFx0aWYgKCFjb25maWcgfHwgIWNvbmZpZy5wcm9wTmFtZSB8fCAhY29uZmlnLmluaXQgfHwgIWNvbmZpZy5BUEkpIHsgdGhyb3cgXCJpbGxlZ2FsIHBsdWdpbiBkZWZpbml0aW9uLlwiOyB9XG5cdFx0XHR2YXIgcHJvcE5hbWUgPSBjb25maWcucHJvcE5hbWUsXG5cdFx0XHRcdHByaW9yaXR5ID0gY29uZmlnLnByaW9yaXR5IHx8IDAsXG5cdFx0XHRcdG92ZXJ3cml0ZVByb3BzID0gY29uZmlnLm92ZXJ3cml0ZVByb3BzLFxuXHRcdFx0XHRtYXAgPSB7aW5pdDpcIl9vbkluaXRUd2VlblwiLCBzZXQ6XCJzZXRSYXRpb1wiLCBraWxsOlwiX2tpbGxcIiwgcm91bmQ6XCJfcm91bmRQcm9wc1wiLCBpbml0QWxsOlwiX29uSW5pdEFsbFByb3BzXCJ9LFxuXHRcdFx0XHRQbHVnaW4gPSBfY2xhc3MoXCJwbHVnaW5zLlwiICsgcHJvcE5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwcm9wTmFtZS5zdWJzdHIoMSkgKyBcIlBsdWdpblwiLFxuXHRcdFx0XHRcdGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0VHdlZW5QbHVnaW4uY2FsbCh0aGlzLCBwcm9wTmFtZSwgcHJpb3JpdHkpO1xuXHRcdFx0XHRcdFx0dGhpcy5fb3ZlcndyaXRlUHJvcHMgPSBvdmVyd3JpdGVQcm9wcyB8fCBbXTtcblx0XHRcdFx0XHR9LCAoY29uZmlnLmdsb2JhbCA9PT0gdHJ1ZSkpLFxuXHRcdFx0XHRwID0gUGx1Z2luLnByb3RvdHlwZSA9IG5ldyBUd2VlblBsdWdpbihwcm9wTmFtZSksXG5cdFx0XHRcdHByb3A7XG5cdFx0XHRwLmNvbnN0cnVjdG9yID0gUGx1Z2luO1xuXHRcdFx0UGx1Z2luLkFQSSA9IGNvbmZpZy5BUEk7XG5cdFx0XHRmb3IgKHByb3AgaW4gbWFwKSB7XG5cdFx0XHRcdGlmICh0eXBlb2YoY29uZmlnW3Byb3BdKSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdFx0cFttYXBbcHJvcF1dID0gY29uZmlnW3Byb3BdO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRQbHVnaW4udmVyc2lvbiA9IGNvbmZpZy52ZXJzaW9uO1xuXHRcdFx0VHdlZW5QbHVnaW4uYWN0aXZhdGUoW1BsdWdpbl0pO1xuXHRcdFx0cmV0dXJuIFBsdWdpbjtcblx0XHR9O1xuXG5cblx0XHQvL25vdyBydW4gdGhyb3VnaCBhbGwgdGhlIGRlcGVuZGVuY2llcyBkaXNjb3ZlcmVkIGFuZCBpZiBhbnkgYXJlIG1pc3NpbmcsIGxvZyB0aGF0IHRvIHRoZSBjb25zb2xlIGFzIGEgd2FybmluZy4gVGhpcyBpcyB3aHkgaXQncyBiZXN0IHRvIGhhdmUgVHdlZW5MaXRlIGxvYWQgbGFzdCAtIGl0IGNhbiBjaGVjayBhbGwgdGhlIGRlcGVuZGVuY2llcyBmb3IgeW91LlxuXHRcdGEgPSB3aW5kb3cuX2dzUXVldWU7XG5cdFx0aWYgKGEpIHtcblx0XHRcdGZvciAoaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGFbaV0oKTtcblx0XHRcdH1cblx0XHRcdGZvciAocCBpbiBfZGVmTG9va3VwKSB7XG5cdFx0XHRcdGlmICghX2RlZkxvb2t1cFtwXS5mdW5jKSB7XG5cdFx0XHRcdFx0d2luZG93LmNvbnNvbGUubG9nKFwiR1NBUCBlbmNvdW50ZXJlZCBtaXNzaW5nIGRlcGVuZGVuY3k6IGNvbS5ncmVlbnNvY2suXCIgKyBwKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdF90aWNrZXJBY3RpdmUgPSBmYWxzZTsgLy9lbnN1cmVzIHRoYXQgdGhlIGZpcnN0IG9mZmljaWFsIGFuaW1hdGlvbiBmb3JjZXMgYSB0aWNrZXIudGljaygpIHRvIHVwZGF0ZSB0aGUgdGltZSB3aGVuIGl0IGlzIGluc3RhbnRpYXRlZFxuXG59KSgodHlwZW9mKG1vZHVsZSkgIT09IFwidW5kZWZpbmVkXCIgJiYgbW9kdWxlLmV4cG9ydHMgJiYgdHlwZW9mKGdsb2JhbCkgIT09IFwidW5kZWZpbmVkXCIpID8gZ2xvYmFsIDogdGhpcyB8fCB3aW5kb3csIFwiVHdlZW5NYXhcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZ3NhcC9zcmMvdW5jb21wcmVzc2VkL1R3ZWVuTWF4LmpzXG4gKiogbW9kdWxlIGlkID0gNDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIiwiZmlsZSI6ImRlbW8tZ3NhcC5qcyJ9
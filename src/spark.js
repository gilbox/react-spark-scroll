const assign = require('object-assign');
const AnimationFrame = require('animation-frame');
const EventEmitter = require('events').EventEmitter;

const _clone = require('lodash/clone');
const _extend = require('lodash/extend');
const _isArray = require('lodash/isArray');
const _isObject = require('lodash/isObject');

function sparkFactory({animator, formulas, actionProps, setup, invalidateAutomatically}) {

  const allowAnimation = !! animator;

  const sparkFormulas = formulas ? assign({}, _sparkFormulas, formulas) : _sparkFormulas;
  const sparkActionProps = actionProps ? assign({}, _sparkActionProps, actionProps) : _sparkActionProps;
  const sparkSetup = setup ? assign({}, _sparkSetup, setup) : _sparkSetup;

  const eventEmitter = new EventEmitter();
  eventEmitter.setMaxListeners(0);

  const spark = function(element, proxyElementFn, timeline, options) {

    const callback = options.callback;
    var prevRatio = 0;
    var minScrollY = 0;
    var maxScrollY = 0;

    const sparkAnimator = allowAnimation && animator.instance();
    const actor = sparkAnimator && sparkAnimator.addActor({
      context: element
    });

    var isAnimated = true;

    var actionFrames = [];
    var actionFrameIdx = -1;
    var y = 0;
    var prevy = 0;
    var scrollY = 0;
    var animationFrame = new AnimationFrame();
    var updating = false;
    var data = null;
    var sparkData = null;
    var container = document.documentElement;

    const actionsUpdate = function() {
      var a, actionProp, c, d, idx, o, prop, _i, _j, _len, _len1, _ref, _ref1, _ref2, _ref3;
      d = y - prevy;

      if (d < 0 && actionFrameIdx >= 0) {
        idx = actionFrameIdx >= actionFrames.length ? actionFrameIdx - 1 : actionFrameIdx;
        while (idx >= 0 && y < actionFrames[idx]) {
          c = sparkData[actionFrames[idx]];
          _ref = c.actions;
          for (a in _ref) {
            o = _ref[a];
            _ref1 = o.props;
            for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
              prop = _ref1[_i];
              actionProp = sparkActionProps[prop];
              if (actionProp.up) {
                actionProp.up.call(c, o);
              }
            }
          }
          actionFrameIdx = --idx;
        }
      }

      if (d >= 0 && actionFrameIdx < actionFrames.length) {
        idx = actionFrameIdx < 0 ? 0 : actionFrameIdx;
        while (idx < actionFrames.length && y > actionFrames[idx]) {
          c = sparkData[actionFrames[idx]];
          _ref2 = c.actions;
          for (a in _ref2) {
            o = _ref2[a];
            _ref3 = o.props;
            for (_j = 0, _len1 = _ref3.length; _j < _len1; _j++) {
              prop = _ref3[_j];
              actionProp = sparkActionProps[prop];
              if (actionProp.down) {
                actionProp.down.call(c, o);
              }
            }
          }
          actionFrameIdx = ++idx;
        }
      }

      prevy = y;
      updating = false;
    };

    const update = function () {
      y = scrollY;
      sparkAnimator.update(y);
      callback && doCallback();
      actionsUpdate(); // sets updating = false
    };

    const recalcMinMax = function() {
      var scrY, idx = 0;
      for (scrY in sparkData) {
        scrY = ~~ scrY;
        if (idx++) {
          if (scrY > maxScrollY) maxScrollY = scrY;
          else if (scrY < minScrollY) minScrollY = scrY;
        } else {
          maxScrollY = minScrollY = scrY
        }
      }
    };

    const doCallback = function() {
      var ratio = Math.max(0, Math.min((y - minScrollY) / (maxScrollY - minScrollY), 1));
      if (ratio !== prevRatio) {
        callback(ratio);
      }
      prevRatio = ratio;
    };

    const recalcFormulas = function() {
      var changed, containerRect, keyFrame, kf, newScrY, rect, scrY;

      if (!sparkData) {
        parseData();
        if (! sparkData) return;
      }

      changed = false;
      rect = proxyElementFn().getBoundingClientRect();
      containerRect = container.getBoundingClientRect();

      for (scrY in sparkData) {
        keyFrame = sparkData[scrY];
        if (!keyFrame.formula) continue;

        newScrY = keyFrame.formula.fn(proxyElementFn(), container, rect, containerRect, keyFrame.formula.offset);
        if (newScrY !== ~~scrY) {
          changed = true;
          if (keyFrame.anims && allowAnimation) {
            actor.moveKeyframe(~~scrY, newScrY);
          }
          sparkData[newScrY] = keyFrame;
          delete sparkData[scrY];
        }
      }

      if (changed) {
        if (callback) {
          recalcMinMax();
        }
        actionFrames = [];
        for (scrY in sparkData) {
          kf = sparkData[scrY];
          if (kf.actionCount) {
            actionFrames.push(~~scrY);
          }
        }
        actionFrames.sort(function(a, b) {
          return a > b;
        });
        onScroll();
      }

    };

    const parseData = function parseData(data) {
      var c, ease;
      var k, o, parts, rect, scrY, formula;

      if (!data) {
        return;
      }
      data = _clone(data);

      if (allowAnimation) {
        actor.removeAllKeyframes();
      }

      const elmEase = data.ease || 'linear';
      delete data.ease;

      let animCount = 0;
      sparkData = {};
      actionFrames = [];
      rect = proxyElementFn().getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      for (scrY in data) {
        let keyFrame = data[scrY] || {};
        keyFrame = _clone(keyFrame);
        let actionCount = 0;
        c = scrY.charCodeAt(0);

        if (c < 48 || c > 57) {
          parts = scrY.match(/^(\w+)(.*)$/);
          formula = {
            fn: sparkFormulas[parts[1]],
            offset: ~~parts[2]
          };

          scrY = formula.fn(proxyElementFn(), container, rect, containerRect, formula.offset);
          if (sparkData[scrY]) {
            if (sparkSetup.debug) {
              console.log("warning: spark-scroll failed to calculate formulas", data);
            }
            sparkData = null;
            return;
          }
        }

        ease = {};
        let kfEase = elmEase;
        if (keyFrame.ease != null) {
          if (_isObject(keyFrame.ease)) {
            ease = keyFrame.ease;
          } else {
            kfEase = keyFrame.ease;
          }
          delete keyFrame.ease;
        }

        for (k in keyFrame) {
          let v = keyFrame[k];
          var ksplit = k.split(',');

          if (sparkActionProps[ksplit[0]]) {
            keyFrame.actions || (keyFrame.actions = {});
            keyFrame.actions[k] = {
              props: ksplit,
              val: v
            };
            delete keyFrame[k];
            actionCount++;
          } else {
            keyFrame.anims || (keyFrame.anims = {});
            if (!_isArray(v)) {
              v = [v, kfEase];
            }
            o = {};
            o[k] = v[1];
            _extend(ease, o);
            keyFrame.anims[k] = v[0];
            delete keyFrame[k];
          }
        }

        if (keyFrame.anims && allowAnimation) {
          actor.keyframe(scrY, keyFrame.anims, ease);
          animCount++;
        }

        keyFrame.formula = formula;
        keyFrame.element = element;
        keyFrame.actionCount = actionCount;
        sparkData[scrY] = keyFrame;
        if (actionCount) {
          actionFrames.push(~~scrY);
        }
      }

      isAnimated = !!animCount;
      if (isAnimated) {
        actor.finishedAddingKeyframes && actor.finishedAddingKeyframes();
      }

      actionFrames.sort(function(a, b) {
        return a > b;
      });

      if (callback) {
        recalcMinMax();
      }

      y = prevy = scrollY = window.pageYOffset;
      if (isAnimated) {
        update();
      }

      return actionsUpdate();
    };

    const nonAnimatedUpdate = function() {
      if (callback) {
        doCallback();
      }
      return actionsUpdate();
    };

    const onScroll = function() {
      scrollY = window.pageYOffset;
      if (!updating) {
        updating = true;
        if (isAnimated) {
          return animationFrame.request(update);
        } else {
          y = scrollY;
          return animationFrame.request(nonAnimatedUpdate);
        }
      }
    };

    const onInvalidate = debounce(recalcFormulas, 100);

    window.addEventListener('scroll', onScroll, false);
    window.addEventListener('resize', onInvalidate, false);
    eventEmitter.on('invalidate', onInvalidate);

    spark.cleanup = () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onInvalidate);
      eventEmitter.removeListener('invalidate', onInvalidate);
    };

    // delay parse a frame to allow proxy to render
    animationFrame.request(parseData.bind(null,timeline));
  };

  spark.invalidate = () => eventEmitter.emit('invalidate');

  var invalidationInterval;
  spark.enableInvalidationInterval = (delay) => {
    delay = delay || 1000;
    clearInterval(invalidationInterval);
    invalidationInterval = setInterval(spark.invalidate, delay);
  };

  spark.disableInvalidationInterval = (delay) => {
    clearInterval(invalidationInterval);
  };

  if (invalidateAutomatically) {
    spark.enableInvalidationInterval(invalidateAutomatically > 1 ? invalidateAutomatically : null);
  }

  return spark;
}

function debounce(fn, wait) {
  var t;
  return () => {
    clearTimeout(t);
    t = setTimeout(fn, wait);
  };
}

const _sparkSetup = {
  debug: true
};

const _sparkFormulas = {

  // top of the element hits the top of the viewport
  topTop(element, container, rect, containerRect, offset) {
    return ~~(rect.top - containerRect.top + offset);
  },

  // top of the element hits the center of the viewport
  topCenter(element, container, rect, containerRect, offset) {
    return ~~(rect.top - containerRect.top - container.clientHeight / 2 + offset);
  },

  // top of the element hits the bottom of the viewport
  topBottom(element, container, rect, containerRect, offset) {
    return ~~(rect.top - containerRect.top - container.clientHeight + offset);
  },

  // center of the element hits the top of the viewport
  centerTop(element, container, rect, containerRect, offset) {
    return ~~(rect.top + rect.height / 2 - containerRect.top + offset);
  },

  // center of the element hits the center of the viewport
  centerCenter(element, container, rect, containerRect, offset) {
    return ~~(rect.top + rect.height / 2 - containerRect.top - container.clientHeight / 2 + offset);
  },

  // center of the element hits the bottom of the viewport
  centerBottom(element, container, rect, containerRect, offset) {
    return ~~(rect.top + rect.height / 2 - containerRect.top - container.clientHeight + offset);
  },

  // bottom of the element hits the top of the viewport
  bottomTop(element, container, rect, containerRect, offset) {
    return ~~(rect.bottom - containerRect.top + offset);
  },

  // bottom of the element hits the bottom of the viewport
  bottomBottom(element, container, rect, containerRect, offset) {
    return ~~(rect.bottom - containerRect.top - container.clientHeight + offset);
  },

  // bottom of the element hits the center of the viewport
  bottomCenter(element, container, rect, containerRect, offset) {
    return ~~(rect.bottom - containerRect.top - container.clientHeight / 2 + offset);
  }
};

const _sparkActionProps = {
  onDown: {
    down(o) {
      return o.val('onDown', this, o);
    }
  },
  onUp: {
    up(o) {
      return o.val('onUp', this, o);
    }
  }
};

module.exports = sparkFactory;

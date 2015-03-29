var assign = require('object-assign');
var _ = require('lodash');
var Rekapi = require('rekapi/dist/rekapi');
var AnimationFrame = require('animation-frame');
var sparkAnimator = {
  instance: () => new Rekapi(document.body)
};
var hasAnimateAttr = true;
var isAnimated = true;

function spark(element, timeline) {
  if (hasAnimateAttr && sparkSetup.disableSparkScrollAnimate) return;
  if (!hasAnimateAttr && sparkSetup.disableSparkScroll) return;

  var callback = false;
  var prevRatio = 0;
  var minScrollY = 0;
  var maxScrollY = 0;

  // @todo: move this out of here (it should only happen 1x)
  var animator = hasAnimateAttr && sparkAnimator.instance();
  
  var actor = isAnimated && animator.addActor({
      context: element
    });

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
  var triggerElement = element;

  var actionsUpdate = function() {
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

  var update = function () {
    y = scrollY;
    animator.update(y);
    //callback && doCallback();
    actionsUpdate(); // sets updating = false
  };

  var parseData = function parseData(data) {
    var c, ease;
    var k, o, parts, rect, scrY, formula;

    if (!data) {
      return;
    }
    data = _.clone(data);

    if (hasAnimateAttr) {
      actor.removeAllKeyframes();
    }

    const elmEase = data.ease || 'linear';
    delete data.ease;

    let animCount = 0;
    sparkData = {};
    actionFrames = [];
    rect = triggerElement.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    for (scrY in data) {
      let keyFrame = data[scrY];
      keyFrame = _.clone(keyFrame);
      let actionCount = 0;
      c = scrY.charCodeAt(0);

      if (c < 48 || c > 57) {
        parts = scrY.match(/^(\w+)(.*)$/);
        formula = {
          fn: sparkFormulas[parts[1]],
          offset: ~~parts[2]
        };

        scrY = formula.fn(triggerElement, container, rect, containerRect, formula.offset);
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
        if (_.isObject(keyFrame.ease)) {
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
          if (!_.isArray(v)) {
            v = [v, kfEase];
          }
          o = {};
          o[k] = v[1];
          _.extend(ease, o);
          keyFrame.anims[k] = v[0];
          delete keyFrame[k];
        }
      }

      if (keyFrame.anims && hasAnimateAttr) {
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

    isAnimated = hasAnimateAttr && !!animCount;
    if (isAnimated) {
      actor.finishedAddingKeyframes && actor.finishedAddingKeyframes();
    }

    actionFrames.sort(function(a, b) {
      return a > b;
    });

    if (callback) {
      //recalcMinMax();
    }

    y = prevy = scrollY = window.pageYOffset;
    if (isAnimated) {
      update();
    }

    console.log("-->sparkData: ", sparkData);
    console.log("-->data: ", data);

    return actionsUpdate();
  };

  var onScroll = function() {
    scrollY = window.pageYOffset;
    if (!updating) {
      updating = true;
      //if (isAnimated) {
      return animationFrame.request(update);
      //} else {
      //  y = scrollY;
      //  return animationFrame.request(nonAnimatedUpdate);
      //}
    }
  };

  window.addEventListener('scroll', onScroll, false);
  //window.addEventListener('onresize', onInvalidate, false);

  parseData(timeline);

}


var sparkSetup = {
  debug: true,
  disableSparkScrollAnimate: false,
  disableSparkScroll: false
};

var sparkFormulas = {
  topTop(element, container, rect, containerRect, offset) {
    return ~~(rect.top - containerRect.top + offset)
  },
  topCenter(element, container, rect, containerRect, offset) {
    return ~~(rect.top - containerRect.top - container.clientHeight/2 + offset)
  },
  topBottom(element, container, rect, containerRect, offset) {
    return ~~(rect.top - containerRect.top - container.clientHeight + offset)
  },
  centerTop(element, container, rect, containerRect, offset) {
    return ~~(rect.top + rect.height/2 - containerRect.top + offset)
  },
  centerCenter(element, container, rect, containerRect, offset) {
    return ~~(rect.top + rect.height/2 - containerRect.top - container.clientHeight/2 + offset)
  },
  centerBottom(element, container, rect, containerRect, offset) {
    return ~~(rect.top + rect.height/2 - containerRect.top - container.clientHeight + offset)
  },
  bottomTop(element, container, rect, containerRect, offset) {
    return ~~(rect.bottom - containerRect.top + offset)
  },
  bottomBottom(element, container, rect, containerRect, offset) {
    return ~~(rect.bottom - containerRect.top - container.clientHeight + offset)
  },
  bottomCenter(element, container, rect, containerRect, offset) {
    return ~~(rect.bottom - containerRect.top - container.clientHeight/2 + offset)
  }
};

var sparkActionProps = {
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

module.exports = spark;
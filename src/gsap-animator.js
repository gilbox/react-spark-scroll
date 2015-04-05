// Minimum required to already be loaded in:
// TweenLite.js,CSSPlugin,TimelineLite
// (TweenMax loads all these and more)

const _ = require('lodash');

class Actor {
  constructor(tl, context) {
    super();
    this.tl = tl;
    this.context = context;
    this.frames = [];
    this.frameHash = {};
    this.normalizedFrames = [];
  }

  normalizeFrames() {
    this.normalizedFrames = _.sortBy(_.cloneDeep(this.frames), 'scrollY');

    _.forEach(this.normalizedFrames, (frame, index, arr) =>
      index && _.defaults(frame.anims, arr[index-1].anims)
    );
  }

  keyframe(scrollY, anims, ease) {
    const frame = {scrollY, anims, ease};

    this.frames.push(frame);
    this.frameHash[scrollY] = frame;
  }

  buildTimeline() {
    this.tl.clear();
    _.forEach(this.normalizedFrames, (frame, index, arr) => {
      if (index) {
        const prevFrame = arr[index-1];

        // for easing, instead of this:
        // @tl.fromTo(@context, frame.scrollY - prevFrame.scrollY, prevFrame.anims, frame.anims, prevFrame.scrollY)//
        // ...do this:
        // creating a new fromTo for each property to support per-property easing
        // this seems pretty inefficient
        let duration = frame.scrollY - prevFrame.scrollY;
        for (let k in frame.anims) {
          let v = frame.anims[k];
          const a = {}, pa = {};
          a[k] = v;
          a.ease = frame.ease[k];
          pa[k] = prevFrame.anims[k];
          this.tl.fromTo(this.context, duration, pa, a, prevFrame.scrollY);
          this.tl.pause();
        }
      }
    });
  }

  finishedAddingKeyframes() {
    this.normalizeFrames();
    this.buildTimeline();
  }

  moveKeyframe(oldPos, newPos) {
    const frame = this.frameHash[oldPos];
    this.frameHash[newPos] = frame;
    frame.scrollY = newPos;
    delete this.frameHash[oldPos];
    this.normalizeFrames();
    this.buildTimeline();
  }

  removeAllKeyframes() {
    this.tl.clear();
    this.frames = [];
  }
}

class GSAPAnimator {
  constructor() {
    super();
    this.tl = new TimelineLite({useFrames:true});
  }

  addActor(options) {
    return new Actor(this.tl, options.context);
  }

  update(pos) {
    if (pos>=0) this.tl.seek(pos, false); // it balks at negative pos values
  }
}

module.exports = GSAPAnimator;
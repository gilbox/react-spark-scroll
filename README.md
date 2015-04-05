# react-spark-scroll

React port of [spark-scroll](https://github.com/gilbox/spark-scroll/). 

# install

    npm install react-spark-scroll

# [demo](http://gilbox.github.io/react-spark-scroll/examples/demo/demo.html)

Documentation still needs to be updated, in the meantime checkout the
[demo](http://gilbox.github.io/react-spark-scroll/examples/demo/demo.html)
and the [source code](https://github.com/gilbox/react-spark-scroll/blob/master/examples/demo/app.js).
It's so declarative you might not even need documentation ;-)

## why?

I was curious to find out how difficult it would be to create complex animations 
with React. At first, I thought that React's lack of a direct equivalent to 
angular's attribute-type directive (`restrict: 'A'`) would be a major drawback. However, using
[higher-order components](https://gist.github.com/sebmarkbage/ef0bf1f338a7182b6775) 
to generate variations of the same component turned out to be a remarkably
[elegant](https://github.com/gilbox/react-spark-scroll/blob/master/src/index.js#L70)
[solution](https://github.com/gilbox/react-spark-scroll/blob/master/examples/demo/app.js#L25). 
Ie., `<SparkScroll.div />`, `<SparkScroll.span />`,  `<SparkScroll.h1 />`, etc...

The one place where angular might have an advantage is
through it's ability to fascilitate more expressive 
syntax. For example, to [toggle a class in angular](https://github.com/gilbox/spark-scroll/blob/master/demo/index.html#L70):

    <!-- angular: -->
    <section 
      class="pin" 
      spark-trigger="pin-cont"
      spark-scroll="{
          topTop: { 'downAddClass,upRemoveClass': 'pin-pin' },
          bottomBottom: {  'downAddClass,upRemoveClass': 'pin-unpin' }
      }">

...vs [in react](https://github.com/gilbox/react-spark-scroll/blob/master/examples/demo/app.js#L131):

    <SparkScroll.section
      className={cx("pin",{
        'pin-pin':this.state.pinPin,
        'pin-unpin':this.state.pinUnpin})}
      proxy="pin-cont"
      timeline={{
        topTop: {
          onDown: () => this.setState({pinPin:true}),
          onUp:   () => this.setState({pinPin:false})
        },
        bottomBottom: {
          onDown: () => this.setState({pinUnpin:true}),
          onUp:   () => this.setState({pinUnpin:false})
        }
      }}>

However, it is *much much much* easier to reason about what is
actually happening in the react version. All the tricks employed by
angular to achieve the expressiveness is not worth the confusion it 
often creates for developers, IMO.

# setup

    // the require statement returns a factory function, which we can call
    // with an options object. `invalidateAutomatically:true` is a very
    // common option.
    //
    // Note: You should normally call this factory only once, so in an application
    // with multiple JS files that need SparkScroll, it should
    // probably live in it's own file (see the examples/demo/app-spark.js)
    var {SparkScroll, SparkProxy, sparkScrollFactory} =
      require('react-spark-scroll/spark-scroll-rekapi')({
        invalidateAutomatically: true
      });

    // (optional)
    // We can wrap any component using the factory methods
    // Assume that `MyClass` is a React class we created
    SparkScroll['MyClass'] = sparkScrollFactory(MyClass);

    var App = React.createClass({
      render() {
        return (

          <SparkScroll.h1
            timeline={{
              topBottom: {opacity: 0},
              centerCenter: {opacity: 1}
            }}>fade</SparkScroll.h1>

          <SparkScroll.MyClass
            myClassProperty="some value that MyClass requires"
            timeline={{
              'topTop+100': {width: '0%', backgroundColor: '#5c832f'},
              'topTop+250': {width: ['100%', 'easeOutQuart'], backgroundColor: '#382513'}
            }} />
        )
      }
    });


# usage 

Documentation is lacking, so for now you can learn about creating animations 
and using formulas in the [Usage section of angular `spark-scroll`](https://github.com/gilbox/spark-scroll#usage).

`react-spark-scroll` also supports the callback feature, but the callback semantics
are different than they are in `spark-scroll`. Still, reading the [callback section of
`spark-scroll`](https://github.com/gilbox/spark-scroll#spark-scroll-callback-callback-on-scroll-event)
might be useful. Checkout the included demo as well.

Also supported are [custom animation engines](https://github.com/gilbox/spark-scroll#custom-animation-engine), and
again additional information is forthcoming.

## actions

Actions are triggered only when hitting a keyframe. An action can cause something to
happen when scrolling up past the keyframe, down past the keyframe, or both.
There are currently only two built-in actions: `onUp` and `onDown` which simply
trigger a callback function.

## custom actions

Custom actions may be added via the options object of the react-spark-scroll factory
function, utilizing the `actions` property. For example, we could create a `log` action
that simply logs a message to the console whenever it's activated:

    var sparkScroll = require('react-spark-scroll/spark-scroll-rekapi')({
      actions: {
        log: {
          down(o) {
            console.log(`spark: hit keyframe [ ${o.formula} ] scrolling down. value: ${o.val}`);
          }
          up(o) {
            console.log(`spark: hit keyframe [ ${o.formula} ] scrolling up. value: ${o.val}`);
          }
        }
      }
    }

And putting the new action to use might look like this:

    <SparkScroll.h1
      timeline={{
        topBottom: {opacity: 0, log: 'foo'},
        centerCenter: {opacity: 1, log: 'bar'}
      }}>fade</SparkScroll.h1>

When scrolling up and down we'd see in the console:

    spark: hit keyframe [ centerCenter ] scrolling down. value: bar
    spark: hit keyframe [ topBottom ] scrolling down. value: foo
    spark: hit keyframe [ topBottom ] scrolling down. value: foo
    spark: hit keyframe [ centerCenter ] scrolling down. value: bar

## formulas

Formulas are dynamically calculated keyframes. They usually require that you implement
some form of invalidation, the simplest of which is setting the `invalidateAutomatically`
option to `true`.

Here are all of the formulas that ship with react-spark-scroll:

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

## custom formulas

Formulas allow you to add keyframes to the timeline that are dynamically calculated based
on any of the following objects:

- element: DOM element
- container: Body DOM element
- rect: element's bounding rect
- containerRect: container's bounding rect
- offset: offset passed into the formula

Custom formulas can be added via the options object of the react-spark-scroll factory function,
utilizing the `formulas` property. For example:

    var sparkScroll = require('react-spark-scroll/spark-scroll-rekapi')({
      invalidateAutomatically: true
      formulas: {

        //similar to the built-in topBottom formula, except that offset
        // is calculated as a percentage of the viewport height

        topBottomPct: (element, container, rect, containerRect, offset) =>
          ~~(rect.bottom - containerRect.top + offset*containerRect.clientHeight/100)
      }
    });

## Custom Animation Engine


The factory method returned by `require('react-spark-scroll')` expects an options object with
where only one option is *required*: `animator`. `animator` should be an object with the property
`instance` of type `function`. Invoking `animator.instance()` returns an instance of a Spark Scroll-compatible
animator. Included with `react-spark-scroll` are two different animators: Rekapi and GSAP. Here
is an example of how the GSAP animator can be used to bootstrap the factory method:

    const _factory = require('react-spark-scroll');

    function factory(options) {
      return _factory(assign({
        animator: {
          instance: () => new GSAPAnimator()
        }
      }, options));
    }

Note that we've created another factory method to wrap the `react-spark-scroll` factory method
so that additional options may be passed in.

As mentioned, `react-spark-scroll` already ships with options for two different animation
engines, which you can include via:

    require('react-spark-scroll/spark-scroll-rekapi');

    // OR:

    require('react-spark-scroll/spark-scroll-gsap');


If you wish to use a custom animation engine, your `Animator` class must support
the following [Rekapi](http://rekapi.com)-like interface:

    const animator = new Animator(/* optional args */);
    const actor = animator.addActor({ context: <dom element> })  // works just like rekapi.addActor(...)
    actor.keyframe(...)
    actor.moveKeyframe(...)
    actor.removeAllKeyframes()
    animator.update(...)       // works just like rekapi.update(...)

See below and the [Rekapi docs](http://rekapi.com/dist/doc/) for implementation details.

### actor.keyframe(scrollY, animations, ease)

Creates a new keyframe. A keyframe should support the following properties...

  - `scrollY` The vertical scroll position (the library will treat this as time)

  - `animations` Simple object with css properties and values, for example:

    - `{marginLeft: "0px", opacity: 1}`
    - `{borderRight: "5px", opacity: 0}`

  - `ease` Simple object with property for each property in `animations` object (see above)

    - `{marginLeft: "easeOutSine", opacity: "bouncePast"}`
    - `{borderRight: "linear", opacity: "easeinSine"}`


### `actor.finishedAddingKeyframes`

actors can optionally expose this function which will be called when parsing has completed


### `actor.moveKeyframe(from, to)`

Moves a keyframe to a different time (scroll) value.

  - `from` Source keyframe

  - `to` Destination keyframe


### `animator.update(scrollY)` Updates the animation to a specific keyframe.

 - `scrollY` The vertical scroll position (the library will treat this as time)

## Custom Animation Engine: TweenMax (GSAP)

As mentioned, the easiest way to use GSAP is via:

    require('react-spark-scroll/spark-scroll-gsap');

However, this will include TweenMax. If you wish to include a subset of TweenMax,
then TweenLite.js, CSSPlugin, and TimelineLite are the minimum required subset
required by `GSAPAnimator`. Load those files in however you wish, and then copy
`src/spark-scroll-gsap.js` and remove the `require('gsap')` line.
Then, instead of `require('react-spark-scroll/spark-scroll-gsap');`, require your own
customized version of the file.

The syntax when using TweenMax will differ slightly
because TweenMax has some differences in the animation properties it supports. For example,
while Rekapi supports the `rotate` property which takes a string value like `360deg`, TweenMax
instead supports `rotation` which takes a numeric value like `360`. TweenMax also supports
a rather different set of [easing](http://greensock.com/roughease) equations than [Rekapi](http://rekapi.com/ease.html).

**[spark-scroll TweenMax demo](http://gilbox.github.io/react-spark-scroll/examples/demo-gsap/demo.html)**

> Note: I suspect that Rekapi is slightly faster than GSAP for scroll-based animation
because it was built specifically for keyframe
animations. However, if you are interested in animating SVG then use the GSAP animator
because GSAP supports SVG animations but Rekapi does not.

# status

### Completed:

- Keyframe animations w/Rekapi
- Formulas
- Actions (only supports `onUp` and `onDown` with different callback semantics than `spark-scroll`)
- onScroll `callback` prop (previously in angular was `spark-scroll-callback` attribute)
- Custom formulas, actionProps
- sparkSetup
- `SparkProxy` (in angular called `sparkTrigger`)
- publish to npm
- Demo
- Support for GSAP
- Invalidation
    * Manual invalidation mechanism
    * Invalidation interval
    * Automatic invalidation on window resize

### Todo:

- Test on various browsers
- Re-parsing of data when changed
- README

### Probably Won't do:

- [spark-scroll-ease](https://github.com/gilbox/spark-scroll/blob/master/src/spark-scroll.coffee#L213)
  attribute (Not really liking this feature)

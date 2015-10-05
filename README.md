# react-spark-scroll

React port of [spark-scroll](https://github.com/gilbox/spark-scroll/).

## The future!

This repo has been around for a little while now. However, recently I re-created the demo utilizing a drastically different approach which was inspired by [`react-motion`](https://github.com/chenglou/react-motion). You can find this experimental demo in the `examples/demo-functional` dir. It completely 
does away with animators and direct DOM manipulation in favor of pure functional elegance. 
Compatibility considerations and performance implications, etc. have not been explored. ~~Going forward, it's likely that the old way will be deprecated and this new approach will take it's place.~~ ~~*Update:* performance suffers significantly because of repeated dom-diffing, so I will probably break this out into it's own repo instead.~~
*Update2*: It's been broken out into is own project, **[react-track](https://github.com/gilbox/react-track)**

# install

    # gsap and gsap-animator will be included as a dependency:
    npm install react-spark-scroll-gsap

Start with the GSAP version of the library, but note that you can use Rekapi or your own animator if you have a preference.

Tradeoffs:

* GSAP is much easier to configure. That's because rekapi has some additional configuration necessary (see [#3](https://github.com/gilbox/react-spark-scroll/issues/3)) beyond `npm install spark-scroll-rekapi`. If you're in the quick-and-dirty experimentation stage, use gsap to get up and running faster.

* Although I haven't done any benchmarks I suspect that rekapi is marginally faster than GSAP. That's because rekapi was built around the concept of timeline-based animation and spark-scroll is all about treating the scroll position as a timeline. *Update: I performed some unscientific tests and GSAP actually seems to perform significantly better*

* *GSAP supports animating SVGs*. ~~This is the main deciding factor for me. If I don't need SVG animation I prefer using rekapi although it's not a strong preference.~~

* Rekapi and GSAP have different licenses.

Alternative installations:

    # rekapi will be included as a dependency:
    npm install react-spark-scroll-rekapi

or

    # in this case you will have to manually setup an animator
    npm install react-spark-scroll


# [demo](http://gilbox.github.io/react-spark-scroll/examples/demo/demo.html)

You can read all of the documentation below, but first checkout the
[demo](http://gilbox.github.io/react-spark-scroll/examples/demo/demo.html)
and the [source code](https://github.com/gilbox/react-spark-scroll/blob/master/examples/demo/app.js).
It's so declarative you might not even need documentation ;-)

## build and run the examples

    git clone https://github.com/gilbox/react-spark-scroll.git
    cd react-spark-scroll/
    npm i
    npm run examples
    open http://localhost:8080/webpack-dev-server/

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
through it's ability to facilitate more expressive
syntax. For example, to [toggle a class in angular](https://github.com/gilbox/spark-scroll/blob/master/demo/index.html#L70):

```html
<!-- angular: -->
<section
  class="pin"
  spark-trigger="pin-cont"
  spark-scroll="{
      topTop: { 'downAddClass,upRemoveClass': 'pin-pin' },
      bottomBottom: {  'downAddClass,upRemoveClass': 'pin-unpin' }
  }">
```

...vs [in react](https://github.com/gilbox/react-spark-scroll/blob/master/examples/demo/app.js#L131):

```jsx
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
```

Note that a `proxy` [is used](https://github.com/gilbox/react-spark-scroll/blob/master/examples/demo-gsap/app.js#L129) 
to provide a canonical scroll position. This is
useful because it's very common for the *top of the element to change* during
scrolling.

~~It is *much much much* easier to reason about what is
actually happening in the react version. All the tricks employed by
angular to achieve the expressiveness is not worth the confusion it
often creates for developers, IMO.~~ I no longer have a strong opinion about
which way is better. Also, it's actually possible to achieve the same 
angular syntax in React but I'm not sure if that's a good idea.


# setup

```jsx
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
```

# usage


## Basic Callback Example

```jsx
<SparkScroll.h1
  timeline={{
    120:{ onUp: _ => console.log('scrolling up past 120!') },
    121:{ 'onUp,onDown': e => console.log('going ' + (e==='onUp' ? 'up!':'down!')) }
  }}>
  This Title is Sparky
</h1>
```

## Formula Example

```jsx
<SparkScroll.h1
  timeline={{
    topTop:{ onUp: _ => console.log('scrolling up past element top hit top of viewport!') },
    'bottomBottom+50':{ 'onUp,onDown': e => console.log('going ' + (e==='onUp' ? 'up!':'down!')) }
  }}>
  This Title is Sparky
</h1>
```


## Animated Example (with formulas)

```jsx
<SparkScroll.h1
  timeline={{
    topTop:{ color: '#f00', marginLeft: '50px' },
    topBottom:{ color: '#000', marginLeft: '0px' }
  }}>
  This Title is Spark Animated
</h1>
```

## Animated Less-Basic Example with easing (no formulas)

```jsx
<SparkScroll.h1
  timeline={{
    ease:'easeOutQuad',
    120:{opacity:'0'},
    121:{opacity:'0.8', top:'151px', color:'#fff'},
    140:{opacity:'1.0', top:'0px', color:'#444'}
  }}>
  This Title is Sparky
</h1>
```

## Animated Example with Override element-wide easing at a specific keyframe (with formulas)

```jsx
<SparkScroll.h1
  timeline={{
    ease:'easeOutQuad',
    topTop:{opacity:'0'},
    centerCenter:{opacity:'0.8', top:'151px', color:'#fff'},
    bottomBottom:{opacity:'1.0', top:'0px', color:'#444', ease: 'linear'}
  }}>
  This Title is Sparky
</h1>
```

## Callback on Scroll Event

The `callback` property expects a function.
The function will be called for every *frame* of scrolling. `react-spark-scroll` internally debounces scroll events
so the callback will not necessarily be called on all native scroll events.

Every time the function is called, it is provided one argument, `ratio` which is a decimal value
between 0 and 1 representing the progress of scroll within the limits of the maximum and minimum
scroll positions of the `timeline` property. The simplest use of the `callback` property
would look something like this:

```jsx
<SparkScroll.div
  callback={ ratio => console.log('callback @ ' + ratio) }
  timeline={{ topBottom:0, topTop:0 }} />
```

When `react-spark-scroll` calls the callback function, the `ratio` is calculated based on the current scroll position,
and the `topBottom` and `topTop` formulas.

Note that in the preceding example instead of assigning an object to the keyframes (`topBottom` and `topTop`), we simply
assign `0`. However, if we wanted to use a callback while at the same time taking advantage of *action* and
*animation* properties we could do something like this:

```jsx
<SparkScroll.h1
  callback={ ratio => console.log('callback @ ' + ratio) }
  timeline={{
    topTop:{ opacity: 0 },
    topCenter:{ opacity: 0.3 },
    topBottom:{ opacity: 1, onUp: _ => console.log('scrolling up') }
  }}>
  This Title is Spark
</h1>
```

Note that in this example, the `callback`'s `ratio` argument
is calculated using the `topTop` and `topBottom` formulas because they are at the extremes of the
keyframe range for this element.

## actions

Actions are triggered only when hitting a keyframe. An action can cause something to
happen when scrolling up past the keyframe, down past the keyframe, or both.
There are currently only two built-in actions: `onUp` and `onDown` which simply
trigger a callback function.

## custom actions

Custom actions may be added via the options object of the react-spark-scroll factory
function, utilizing the `actions` property. For example, we could create a `log` action
that simply logs a message to the console whenever it's activated:

```jsx
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
```

And putting the new action to use might look like this:

```jsx
<SparkScroll.h1
  timeline={{
    topBottom: {opacity: 0, log: 'foo'},
    centerCenter: {opacity: 1, log: 'bar'}
  }}>fade</SparkScroll.h1>
```

When scrolling up and down we'd see in the console:

    spark: hit keyframe [ centerCenter ] scrolling down. value: bar
    spark: hit keyframe [ topBottom ] scrolling down. value: foo
    spark: hit keyframe [ topBottom ] scrolling up. value: foo
    spark: hit keyframe [ centerCenter ] scrolling up. value: bar

## formulas

Formulas are dynamically calculated keyframes. They usually require that you implement
some form of invalidation, the simplest of which is setting the `invalidateAutomatically`
option to `true`.

Here are all of the formulas that ship with react-spark-scroll:

```jsx
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
```

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

```jsx
var sparkScroll = require('react-spark-scroll/spark-scroll-rekapi')({
  invalidateAutomatically: true
  formulas: {

    //similar to the built-in topBottom formula, except that offset
    // is calculated as a percentage of the viewport height

    topBottomPct: (element, container, rect, containerRect, offset) =>
      ~~(rect.bottom - containerRect.top + offset*containerRect.clientHeight/100)
  }
});
```

## Custom Animation Engine


The factory method returned by `require('react-spark-scroll')` expects an options object
where only one option is *required*: `animator`. `animator` should be an object with the property
`instance` of type `function`. Invoking `animator.instance()` returns an instance of a Spark Scroll-compatible
animator. Included with `react-spark-scroll` are two different animators: Rekapi and GSAP. Here
is an example of how the GSAP animator can be used to bootstrap the factory method:

```jsx
const _factory = require('react-spark-scroll');

function factory(options) {
  return _factory(assign({
    animator: {
      instance: () => new GSAPAnimator()
    }
  }, options));
}
```

Note that we've created another factory method to wrap the `react-spark-scroll` factory method
so that additional options may be passed in.

As mentioned, `react-spark-scroll` already ships with options for two different animation
engines, which you can include by manually installed the dependencies you need or simply:

    require('react-spark-scroll-rekapi');

    // OR:

    require('react-spark-scroll-gsap');


If you wish to use a custom animation engine, your `Animator` class must support
the following [Rekapi](http://rekapi.com)-like interface:

    const animator = new Animator(/* optional args */);
    const actor = animator.addActor({ context: <dom element> })  // works just like rekapi.addActor(...)
    actor.keyframe(...)
    actor.moveKeyframe(...)
    actor.removeAllKeyframes()
    animator.update(...)       // works just like rekapi.update(...)

See below and the [Rekapi docs](http://rekapi.com/dist/doc/) for implementation details.

### `actor.keyframe(scrollY, animations, ease)`

Creates a new keyframe. A keyframe should support the following properties...

  - `scrollY` The vertical scroll position (the library will treat this as time)

  - `animations` Simple object with css properties and values, for example:

    - `{marginLeft: "0px", opacity: 1}`
    - `{borderRight: "5px", opacity: 0}`

  - `ease` Simple object with property for each property in `animations` object (see above)

    - `{marginLeft: "easeOutSine", opacity: "bouncePast"}`
    - `{borderRight: "linear", opacity: "easeinSine"}`


### `actor.finishedAddingKeyframes`

actors can *optionally* expose this function which will be called when parsing has completed


### `actor.moveKeyframe(from, to)`

Moves a keyframe to a different time (scroll) value.

  - `from` Source keyframe

  - `to` Destination keyframe


### `animator.update(scrollY)`

Updates the animation to a specific keyframe.

 - `scrollY` The vertical scroll position (the library will treat this as time)

## TweenMax/TweenLite (GSAP)


The syntax when using TweenMax will differ slightly
because TweenMax has some differences in the animation properties it supports. For example,
while Rekapi supports the `rotate` property which takes a string value like `360deg`, TweenMax
instead supports `rotation` which takes a numeric value like `360`. TweenMax also supports
a rather different set of [easing](http://greensock.com/roughease) equations than [Rekapi](http://rekapi.com/ease.html).

**[spark-scroll TweenMax demo](http://gilbox.github.io/react-spark-scroll/examples/demo-gsap/demo.html)**

> Note: I suspect that Rekapi is slightly faster than GSAP for scroll-based animation
because it was built specifically for keyframe
animations. However, **if you are interested in animating SVG then use the GSAP animator
because GSAP supports SVG animations but Rekapi does not.**

As mentioned, the easiest way to use GSAP is via:

    require('react-spark-scroll-gsap');

However, this will include TweenMax. To customize your build instead of the above, use:

    require('react-spark-scroll');

Now you can include a subset of TweenMax since TweenMax isn't specified as a dependency of `react-spark-scroll`.
`TweenLite.js`, `CSSPlugin.js`, and `TimelineLite.js` are the minimum subset of files
required by `GSAPAnimator`. Load those files in however you wish, and then copy
`node_modules/react-spark-scroll/src/spark-scroll-gsap.js` into your project and remove the `require('gsap')` line.


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
- README
- Invalidation
    * Manual invalidation mechanism
    * Invalidation interval
    * Automatic invalidation on window resize

### Todo:

- Test on various browsers
- Re-parsing of data when changed

### Probably Won't do:

- [spark-scroll-ease](https://github.com/gilbox/spark-scroll/blob/master/src/spark-scroll.coffee#L213)
  attribute (Not really liking this feature)
  

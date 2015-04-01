# react-spark-scroll

React port of [spark-scroll](https://github.com/gilbox/spark-scroll/). 

## why?

I was qurious to find out how difficult it would be to create complex animations 
with React. At first, I thought that React's lack of a direct equivalent to 
angular's attribute-type directive (`restrict: 'A'`) would be a major drawback. However, using
[higher-order components](https://gist.github.com/sebmarkbage/ef0bf1f338a7182b6775) 
to generate variations of the same component turned out to be a remarkably
[elegant](https://github.com/gilbox/react-spark-scroll/blob/master/src/index.js#L70)
[solution](https://github.com/gilbox/react-spark-scroll/blob/master/examples/demo/app.js). 
Ie., `<SparkScroll.div />`, `<SparkScroll.span />`,  `<SparkScroll.h1 />`, etc...

# install

    npm install react-spark-scroll

# [demo](http://gilbox.github.io/react-spark-scroll/examples/demo/demo.html)

Documentation still needs to be updated, in the meantime checkout the
[demo](http://gilbox.github.io/react-spark-scroll/examples/demo/demo.html)
and the [source code](https://github.com/gilbox/react-spark-scroll/blob/master/examples/demo/app.js).
It's so declarative you might not even need documentation ;-)

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
- Invalidation
    * Manual invalidation mechanism
    * Invalidation interval
    * Automatic invalidation on window resize

### Todo:

- Test on various browsers
- Re-parsing of data when changed
- README
- Support for GSAP

### Probably Won't do:

- [spark-scroll-ease](https://github.com/gilbox/spark-scroll/blob/master/src/spark-scroll.coffee#L213)
  attribute (Not really liking this feature)

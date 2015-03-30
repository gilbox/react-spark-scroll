# react-spark-scroll

WIP react port of [spark-scroll](https://github.com/gilbox/spark-scroll/)

# status

### Completed:

- Keyframe animations w/Rekapi
- Formulas
- Actions (only supports `onUp` and `onDown` with different callback semantics than `spark-scroll`)
- onScroll `callback` prop (previously in angular was `spark-scroll-callback` attribute)
- Custom formulas, actionProps
- sparkSetup
- Invalidation
    * Manual invalidation mechanism
    * Invalidation interval
    * Automatic invalidation on window resize

### Todo:

- Test on various browsers
- Re-parsing of data when changed
- README
- Demo
- Support for GSAP
- publish to npm
- trigger proxy element option

### Probably Won't do:

- [spark-scroll-ease](https://github.com/gilbox/spark-scroll/blob/master/src/spark-scroll.coffee#L213)
  attribute (Not really liking this feature)
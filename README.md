# react-spark-scroll

WIP react port of [spark-scroll](https://github.com/gilbox/spark-scroll/)

# status

### Completed:

- Keyframe animations w/Rekapi
- Formulas
- Actions (only supports `onUp` and `onDown` with different callback semantics than `spark-scroll`)
- Automatic invalidation on window resize
- onScroll `callback` prop (previously in angular was `spark-scroll-callback` attribute)

### Todo:

- Invalidation
    * Manual invalidation mechanism
    * Invalidation interval

- Test on various browsers
- Re-parsing of data when changed
- README
- Demo
- Support for GSAP
- Custom formulas, actionProps
- sparkSetup
- publish to npm
- trigger proxy element option

### Probably Won't do:

- [spark-scroll-ease](https://github.com/gilbox/spark-scroll/blob/master/src/spark-scroll.coffee#L213)
  attribute (Not really liking this feature)
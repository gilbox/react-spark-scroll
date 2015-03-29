# react-spark-scroll

WIP react port of [spark-scroll](https://github.com/gilbox/spark-scroll/)

# status

### Completed:

- Keyframe animations w/Rekapi
- Formulas
- Actions (only supports `onUp` and `onDown` with different callback semantics than `spark-scroll`)

### Todo:

- Invalidation
    * Automatic invalidation on window resize
    * Manual invalidation mechanism
    * Invalidation interval

- Test on various browsers
- Re-parsing of data when changed
- onScroll callback (`spark-scroll-callback` attribute)
- README
- Demo
- Support for GSAP
- Custom formulas, actionProps
- sparkSetup
- publish to npm

### Probably Won't do:

- [spark-scroll-ease](https://github.com/gilbox/spark-scroll/blob/master/src/spark-scroll.coffee#L213)
  attribute (Not really liking this feature)
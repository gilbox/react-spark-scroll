var React = require('react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;
var {SparkScroll, SparkProxy} = require('./app-spark');
var cx = require('classnames');

var Hero = React.createClass({
  mixins: [PureRenderMixin],

  getInitialState() {
    return {
      strokeDashOffset: 0
    }
  },

  componentDidMount() {
    // initialize svg
    var node = React.findDOMNode(this.refs.sparkPath);
    var length = ~~ node.getTotalLength();
    this.offsetTarget = length;
    node.style.strokeDasharray = length + ' ' + length;
  },

  render() {
    return (
      <SparkProxy.div proxyId="hero" className="hero">
        <a href="https://github.com/gilbox/react-spark-scroll">
          <SparkScroll.h1
            proxy="hero"
            timeline={{
              topTop: { opacity: 1, transform: 'translate3d(0px,150px,0px)' },
              'topTop+200': { opacity: 0, transform: 'translate3d(0px,100px,0px)' }
            }}>

            <SparkScroll.span
              proxy="hero"
              callback={ ratio => this.setState({strokeDashoffset: ~~(this.offsetTarget*ratio)}) }
              timeline={{topTop:0, 'topTop+150':0}}>

              <svg width="296px" height="228px" viewBox="0 0 296 228" version="1.1">
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <path
                    ref="sparkPath"
                    style={{strokeDashoffset: this.state.strokeDashoffset}}
                    d="M43.7774442,71.4898495 C68.1223861,13.9815032 2.19454397,48.0407223 21.6782286,62.6489207 C35.6643945,73.1352682 58.9096882,70.7747789 65.8766598,90.2775999 C81.3266094,133.527037 58.7305466,191.386016 8.96667524,191.386016 C-21.7867278,124.419226 58.5165505,95.0604409 105.657733,71.4898495 C111.587019,68.5252065 106.843786,84.8551006 105.657733,91.3772797 C99.6123965,124.620967 91.5214411,157.47733 85.7703029,190.833069 C84.8685764,196.062948 81.6274642,214.829299 80.7937857,222.32616 C80.6715598,223.425278 80.7937857,226.749731 80.7937857,225.643838 C80.7937857,178.19023 80.0535912,132.979764 92.3994463,86.6741293 C93.8113405,81.3785334 108.30594,39.7685738 124.99843,54.0751457 C156.752595,81.2905735 92.5724441,93.4702936 121.127805,96.0680044 C128.282422,96.7188674 135.65546,97.5726529 142.680287,96.0680044 C148.736462,94.7708318 187.108665,71.4402165 175.273058,59.6046093 C159.768414,44.0999652 147.084798,89.2989658 152.06795,90.5447538 C167.304679,94.3539362 163.498851,72.3099498 171.408646,72.3099498 C175.432165,72.3099498 170.909757,82.6418308 174.726325,83.9156104 C188.108938,88.3820577 200.672172,72.3568753 206.772362,66.2337527 C207.900248,65.1016258 206.423589,91.2727357 216.160024,86.1211829 C225.148096,81.3655893 232.107661,66.8252089 236.053667,57.9457702 C238.752882,51.8719041 253.48624,1.58873203 246.553435,1.58873203 C241.137697,1.58873203 228.944808,94.9098646 223.342114,100.491575 C218.092273,105.721754 247.690967,38.5929831 260.364668,41.3698053 C278.111625,45.2581835 231.741761,65.8490563 230.530416,69.4830892 C229.69667,71.984328 235.745427,70.3606023 238.265453,71.1357154 C260.054171,77.8375207 284.345377,96.4449716 294.622491,116.999199" id="Path-13" stroke="#382513" strokeWidth="3"></path>
                </g>
              </svg>

            </SparkScroll.span>
          </SparkScroll.h1>
        </a>

        <SparkScroll.div
          className="down-arrow"
          proxy="hero"
          timeline={{
            topTop: {opacity: 1, transform: 'translate3d(0px,0px,0px)'},
            'topTop+200': {opacity: 0, transform: 'translate3d(0px,-150px,0px)'}
          }}>v</SparkScroll.div>
      </SparkProxy.div>
    )
  }
});

var App = React.createClass({
  mixins: [PureRenderMixin],

  getInitialState() {
    return {
      actionType: null,
      text: 'slide',
      unpinHide: false,
      slideHide: true,
      pinPin: false,
      pinUnpin: false
    }
  },

  render: function () {
    var styles = {
      minHeight:'5000px'
    };

    return (
      <div style={styles}>

        <a href="https://github.com/gilbox/spark-scroll">
          <img
            style={{position: 'absolute', top: 0, right: 0, border: 0}}
            src="https://camo.githubusercontent.com/e7bbb0521b397edbd5fe43e7f760759336b5e05f/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f677265656e5f3030373230302e706e67"
            alt="Fork me on GitHub"
            dataCanonicalSrc="https://s3.amazonaws.com/github/ribbons/forkme_right_green_007200.png" /></a>

        <Hero />

        {/* fade */}
        <SparkScroll.h2
          timeline={{
            topBottom: {opacity: 0},
            centerCenter: {opacity: 1}
          }}>fade</SparkScroll.h2>

        {/* move */}
        <SparkScroll.h2
          timeline={{
            topBottom: { marginLeft: '-500px', opacity: 0 },
            centerCenter: { marginLeft: '0px', opacity: 1, ease: 'bouncePast' }
          }}>move</SparkScroll.h2>

        {/* spin */}
        <SparkProxy proxyId="rotate-proxy" />
        <SparkScroll.h2
          proxy="rotate-proxy"
          timeline={{
            topBottom: { rotate: '0deg' } ,
            topCenter: { rotate: '360deg' }
          }}>spin</SparkScroll.h2>

        {/* scale */}
        <SparkProxy proxyId="scale-proxy" />
        <SparkScroll.h2
          proxy="scale-proxy"
          timeline={{
            'topCenter-201': { scale: 0.01, opacity: 0},
            'topCenter-200': { scale: 0.01, opacity: 1 },
            'topCenter+70': { scale: 1, ease: 'bouncePast' }
          }}>scale</SparkScroll.h2>

        {/* pin, reveal, slide, color, unpin */}
        <SparkProxy.div className="pin-cont" proxyId="pin-cont">

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

            <SparkScroll.h3
              className="pin-txt"
              proxy="pin-cont"
              timeline={{
                'topTop': { top: '0%', marginTop: '0px' },
                'topTop+50  ': { top: '50%', marginTop: '-60px' }
              }}>pin</SparkScroll.h3>

            <SparkScroll.div
              className="reveal"
              proxy="pin-cont"
              timeline={{
                'topTop+100': {width: '0%', backgroundColor: '#5c832f'},
                'topTop+250': {width: ['100%', 'easeOutQuart'], backgroundColor: '#382513'}
              }}>
              <h3 className="reveal-txt">reveal</h3>
            </SparkScroll.div>

            {/* with array notation we can apply bounce easing to just one property in a keyframe */ }
            <SparkScroll.div
              className={cx("slide",{hide:this.state.slideHide})}
              proxy="pin-cont"
              timeline={{
                'topTop+250': {
                  bottom: '100%',
                  backgroundColor: '#5c832f',
                  onDown: () => this.setState({slideHide:false}),
                  onUp:   () => this.setState({slideHide:true})
                },
                'topTop+400': {bottom: ['0%', 'bounce'], backgroundColor: '#284907'},
                'topTop+450': {backgroundColor: '#00a'},
                'topTop+500': {backgroundColor: '#a00'},
                'topTop+550': {backgroundColor: '#5c832f'}
              }}>

              {/* when we hit the appropriate scroll position, use onUp/onDown to change the
                    text to 'slide' or 'color' depending on the scroll direction */}
              <SparkScroll.h3
                className="slide-txt"
                proxy="pin-cont"
                timeline={{
                  'topTop+400': {
                    onDown: () => this.setState({text:'color'}),
                    onUp:   () => this.setState({text:'slide'}) }
                }}>{this.state.text}</SparkScroll.h3>

              <SparkScroll.h3
                className={cx("unpin-txt hide",{hide:this.state.unpinHide})}
                proxy="pin-cont"
                timeline={{
                 'topTop+600': {
                   top: '100%',
                   onDown: () => this.setState({unpinHide:false}),
                   onUp:   () => this.setState({unpinHide:true}) },
                 'bottomBottom': { top: '50%' }
                 }}>unpin</SparkScroll.h3>
            </SparkScroll.div>

          </SparkScroll.section>

        </SparkProxy.div>



        <div className="spacer50"></div>

        {/* parallax */}
        <a href="https://www.flickr.com/photos/rafagarcia_/15262287738/in/pool-83823859@N00/">
          <SparkProxy.div proxyId="parallax" className="parallax-cont">
            <div className="parallax-shadow"></div>

            <SparkScroll.div
              className="parallax-img"
              proxy="parallax"
              timeline={{
                topBottom: {transform: 'translate3d(0px,0px,0px)'},
                bottomTop: {transform: 'translate3d(0px,-80px,0px)'}
              }}></SparkScroll.div>

            <SparkScroll.h3
              className="parallax-txt fade2"
              proxy="parallax"
              timeline={{
                topBottom: { transform: 'scale(0.8) translate3d(0px,120px,0px)' },
                bottomTop: { transform: 'scale(0.8) translate3d(0px,-120px,0px)' }
              }}>parallax</SparkScroll.h3>

            <SparkScroll.h3
              className="parallax-txt fade1"
              proxy="parallax"
              timeline={{
                topBottom: {transform: 'scale(0.9) translate3d(0px,160px,0px)'},
                bottomTop: {transform: 'scale(0.9) translate3d(0px,-160px,0px)'}
              }}>parallax</SparkScroll.h3>

            <SparkScroll.h3
              className="parallax-txt"
              proxy="parallax"
              timeline={{
                topBottom: {transform: 'translate3d(0px,200px,0px)'},
                bottomTop: {transform: 'translate3d(0px,-200px,0px)'}
              }}>parallax</SparkScroll.h3>
          </SparkProxy.div>
        </a>


        <div className="spacer50"></div>

        <a href="https://github.com/gilbox/react-spark-scroll">
          <img className="center" src="GitHub-Mark-64px.png" alt=""/>
        </a>

        <div className="spacer10"></div>

        <p className="center">This demo was inspired by <a href="http://janpaepke.github.io/ScrollMagic/">ScrollMagic</a></p>

        <div className="spacer10"></div>

      </div>
    );
  }
});

React.render(<App/>, document.getElementById('example'));

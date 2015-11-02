import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames';
import {Easer} from 'functional-easing';
import {Track, TrackedDiv, TrackDocument} from './lib/track';
import {tween, combine} from './lib/tween';
import {topTop,
        topBottom,
        centerCenter,
        topCenter,
        bottomBottom,
        bottomTop,
        getDocumentRect,
        getDocumentElement,
        calculateScrollY} from './lib/tracking-formulas';
import {rgb, rgba, scale, rotate, 
        px, percent, translate3d} from './lib/tween-value-factories';

const easeOutBounce = new Easer().using('out-bounce');

class App extends Component {
  componentDidMount() {
    // initialize svg
    var node = ReactDOM.findDOMNode(this.sparkPath);
    var length = ~~ node.getTotalLength();
    this.offsetTarget = length;
    node.style.strokeDasharray = length + ' ' + length; // i'm cheating
  }
  
  render() {
    return (
      <TrackDocument formulas={[getDocumentElement, getDocumentRect, calculateScrollY, 
                               topTop, topBottom, topCenter, centerCenter, bottomBottom, 
                               bottomTop]}>
      {(documentElement, documentRect, scrollY, topTop, 
        topBottom, topCenter, centerCenter, bottomBottom, bottomTop) => 
        <div style={{minHeight:'5000px'}}>
        
          <a href="https://github.com/gilbox/spark-scroll">
            <img
              style={{position: 'absolute', top: 0, right: 0, border: 0}}
              src="https://camo.githubusercontent.com/e7bbb0521b397edbd5fe43e7f760759336b5e05f/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f677265656e5f3030373230302e706e67"
              alt="Fork me on GitHub"
              dataCanonicalSrc="https://s3.amazonaws.com/github/ribbons/forkme_right_green_007200.png" /></a>
              
          <TrackedDiv className="hero" formulas={[topTop]}>
          { (posTopTop) =>
            <div>
              <a href="https://github.com/gilbox/react-spark-scroll">
                <h1
                  style={tween(scrollY, {
                    [posTopTop]: { opacity: 1, transform: translate3d(0,150,0) },
                    [posTopTop+200]: { opacity: 0, transform: translate3d(0,100,0) } })}>

                  <span>

                    <svg width="296px" height="228px" viewBox="0 0 296 228" version="1.1">
                      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <path
                          ref={r => this.sparkPath = r}
                          style={{strokeDashoffset: tween(scrollY, {
                            [posTopTop]: 0,
                            [posTopTop+150]: this.offsetTarget })}}
                          d="M43.7774442,71.4898495 C68.1223861,13.9815032 2.19454397,48.0407223 21.6782286,62.6489207 C35.6643945,73.1352682 58.9096882,70.7747789 65.8766598,90.2775999 C81.3266094,133.527037 58.7305466,191.386016 8.96667524,191.386016 C-21.7867278,124.419226 58.5165505,95.0604409 105.657733,71.4898495 C111.587019,68.5252065 106.843786,84.8551006 105.657733,91.3772797 C99.6123965,124.620967 91.5214411,157.47733 85.7703029,190.833069 C84.8685764,196.062948 81.6274642,214.829299 80.7937857,222.32616 C80.6715598,223.425278 80.7937857,226.749731 80.7937857,225.643838 C80.7937857,178.19023 80.0535912,132.979764 92.3994463,86.6741293 C93.8113405,81.3785334 108.30594,39.7685738 124.99843,54.0751457 C156.752595,81.2905735 92.5724441,93.4702936 121.127805,96.0680044 C128.282422,96.7188674 135.65546,97.5726529 142.680287,96.0680044 C148.736462,94.7708318 187.108665,71.4402165 175.273058,59.6046093 C159.768414,44.0999652 147.084798,89.2989658 152.06795,90.5447538 C167.304679,94.3539362 163.498851,72.3099498 171.408646,72.3099498 C175.432165,72.3099498 170.909757,82.6418308 174.726325,83.9156104 C188.108938,88.3820577 200.672172,72.3568753 206.772362,66.2337527 C207.900248,65.1016258 206.423589,91.2727357 216.160024,86.1211829 C225.148096,81.3655893 232.107661,66.8252089 236.053667,57.9457702 C238.752882,51.8719041 253.48624,1.58873203 246.553435,1.58873203 C241.137697,1.58873203 228.944808,94.9098646 223.342114,100.491575 C218.092273,105.721754 247.690967,38.5929831 260.364668,41.3698053 C278.111625,45.2581835 231.741761,65.8490563 230.530416,69.4830892 C229.69667,71.984328 235.745427,70.3606023 238.265453,71.1357154 C260.054171,77.8375207 284.345377,96.4449716 294.622491,116.999199" id="Path-13" stroke="#382513" strokeWidth="3"></path>
                      </g>
                    </svg>

                  </span>
                </h1>
              </a>

              <div
                className="down-arrow"
                style={tween(scrollY, {
                  [posTopTop]: {opacity: 1, transform: translate3d(0,0,0)},
                  [posTopTop+200]: {opacity: 0, transform: translate3d(0,-150,0)}
                })}>v</div>
            </div>
          }</TrackedDiv>
          
          {/* fade */}
          <Track component="h2" formulas={[topBottom, centerCenter]}>
          {(H2,posTopBottom,posCenterCenter) => 
            <H2
              style={tween(scrollY, {
                [posTopBottom]: {opacity: 0},
                [posCenterCenter]: {opacity: 1} })}>fade</H2>
          }</Track>
          
          {/* move */}
          <Track component="h2" formulas={[topBottom, centerCenter]}>
          {(H2,posTopBottom,posCenterCenter) => 
            <H2
              style={tween(scrollY, {
                [posTopBottom]: { marginLeft: px(-500), opacity: 0 },
                [posCenterCenter]: { marginLeft: px(0), opacity: 1 } 
              }, easeOutBounce)}>move</H2>
          }</Track>

          {/* spin */}
          <TrackedDiv formulas={[topBottom, centerCenter]}>
          {(posTopBottom,posCenterCenter) => 
            <h2
              style={tween(scrollY, {
                [posTopBottom]: { transform: rotate(0) },
                [posCenterCenter]: { transform: rotate(360) } })}>spin</h2>
          }</TrackedDiv>
          
          {/* scale */}
          <TrackedDiv formulas={[topCenter]}>
          {(posTopCenter) => 
            <h2
              proxy="scale-proxy"
              style={tween(scrollY, {
                [posTopCenter-201]: { transform: scale(0.01), opacity: 0},
                [posTopCenter-200]: { transform: scale(0.01), opacity: 1 },
                [posTopCenter+70]: { transform: scale(1), opacity: 1 }
              }, easeOutBounce)}>scale</h2>
          }</TrackedDiv>
          
          {/* pin, reveal, slide, color, unpin */}
          <TrackedDiv className="pin-cont" formulas={[topTop, bottomBottom]}>
          {(posTopTop, posBottomBottom) =>
            
            <section
              className={cx("pin",{
                'pin-pin':scrollY > posTopTop,
                'pin-unpin':scrollY > posBottomBottom})}>
              
              <h3
                className="pin-txt"
                style={tween(scrollY,{
                  [posTopTop]: { top: percent(0), marginTop: px(0) },
                  [posTopTop+50]: { top: percent(50), marginTop: px(-60) }
                })}>pin</h3>
                
              <div
                className="reveal"
                style={tween(scrollY, {
                  [posTopTop+100]: {width: percent(0), backgroundColor: rgba(92, 131, 47, 1)},
                  [posTopTop+250]: {width: percent(100), backgroundColor: rgba(56, 37, 19, 1)}
                })}>
                <h3 className="reveal-txt">reveal</h3>
              </div>
              
              <div
                className={cx("slide",{hide:scrollY < posTopTop+250})}
                style={tween(scrollY, {
                  [posTopTop+250]: { bottom: percent(100), backgroundColor: rgb(92, 131, 47) },
                  [posTopTop+400]: { bottom: percent(0), backgroundColor: rgb(40, 73, 7) },
                  [posTopTop+450]: { bottom: percent(0), backgroundColor: rgb(0, 0, 170) },
                  [posTopTop+500]: { bottom: percent(0), backgroundColor: rgb(170, 0, 0) },
                  [posTopTop+550]: { bottom: percent(0), backgroundColor: rgb(92, 131, 47) }
                })}>

                {/* when we hit the appropriate scroll position, change the
                      text to 'slide' or 'color' depending on the position */}
                <h3 className="slide-txt">
                  {scrollY > posTopTop+400 ? 'color' : 'slide'}
                </h3>

                <h3
                  className={cx("unpin-txt",{hide:scrollY < posTopTop+600})}
                  style={tween(scrollY, {
                   [posTopTop+600]: { top: percent(100) },
                   [posBottomBottom]: { top: percent(50) }
                 })}>unpin</h3>
                 
              </div>
                
            </section>
          }</TrackedDiv>
          
          <div className="spacer50"></div>

          {/* parallax */}
          
          <a href="https://www.flickr.com/photos/rafagarcia_/15262287738/in/pool-83823859@N00/">
            <Track component="div" formulas={[topBottom, bottomTop]}>
            {(Div, posTopBottom, posBottomTop) =>
              <Div className="parallax-cont">
                <div className="parallax-shadow" />

                <div
                  className="parallax-img"
                  style={tween(scrollY, {
                    [posTopBottom]: {transform: translate3d(0,0,0)},
                    [posBottomTop]: {transform: translate3d(0,-80,0)}
                  })}></div>

                <h3
                  className="parallax-txt fade2"
                  style={tween(scrollY, {
                    [posTopBottom]: { transform: combine(scale(0.8), translate3d(0,120,0)) },
                    [posBottomTop]: { transform: combine(scale(0.8), translate3d(0,-120,0)) }
                  })}>parallax</h3>

                <h3
                  className="parallax-txt fade1"
                  style={tween(scrollY, {
                    [posTopBottom]: {transform: combine(scale(0.9), translate3d(0,160,0)) },
                    [posBottomTop]: {transform: combine(scale(0.9), translate3d(0,-160,0)) }
                  })}>parallax</h3>

                <h3
                  className="parallax-txt"
                  style={tween(scrollY, {
                    [posTopBottom]: {transform: translate3d(0,200,0)},
                    [posBottomTop]: {transform: translate3d(0,-200,0)}
                  })}>parallax</h3>
              </Div>
            }</Track>
          </a>
          
          <div className="spacer50"></div>

          <a href="https://github.com/gilbox/react-spark-scroll">
            <img className="center" src="GitHub-Mark-64px.png" alt=""/>
          </a>

          <div className="spacer10"></div>

          <p className="center">This demo was inspired by <a href="http://janpaepke.github.io/ScrollMagic/">ScrollMagic</a></p>

          <div className="spacer10"></div>
          
        </div>
      }</TrackDocument>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('example'));

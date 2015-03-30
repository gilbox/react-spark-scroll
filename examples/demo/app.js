var React = require('react');
var {SparkScroll, SparkProxy} = require('./app-spark');

var App = React.createClass({

  getInitialState() {
    return {
      actionType: null,
      strokeDashOffset: null
    }
  },

  componentDidMount() {
    // initialize svg
    var node = React.findDOMNode(this.refs.sparkPath);
    var length = ~~ node.getTotalLength();
    this.offsetTarget = length;
    node.style.strokeDasharray = length + ' ' + length;
  },

  render: function () {
    var styles = {
      minHeight:'1000px'
    };

    if (this.state.actionType) {
      styles.backgroundColor = this.state.actionType === 'onUp' ? '#ffc' : '#cff';
    }

    return (
      <div style={styles}>

        <SparkProxy proxyId="hero" />
        <a href="https://github.com/gilbox/spark-scroll">
          <SparkScroll
            proxy="hero"
            timeline={{
              topTop: { opacity: 1, transform: 'translate3d(0px,0px,0px)' },
              'topTop+200': { opacity: 0, transform: 'translate3d(0px,250px,0px)' }
            }}>

            <SparkScroll
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

            </SparkScroll>
          </SparkScroll>
        </a>

        <div style={{height:'200px'}}></div>
        <SparkProxy proxyId="p1" />
        <SparkScroll
          proxy="p1"
          style={{display:'inline-block'}}
          callback={(r) => console.log('callback @ ratio:', r)}
          timeline={{
            topTop:{
              opacity:'0.3',
              transform:'translateX(151px) rotate(180deg)',
              color:'#00f',
              'onUp,onDown': (actionType) => this.setState({actionType}) },
            centerCenter:{
              opacity:'1.0',
              transform:'translateX(0px) rotate(0deg)',
              color:'#f00'}
          }}>
          <div style={{color:'inherit'}}>Hello World!</div>
        </SparkScroll>
      </div>
    );
  }
});

React.render(<App/>, document.getElementById('example'));

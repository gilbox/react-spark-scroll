var React = require('react');
var SparkScroll = require('react-spark-scroll');

var App = React.createClass({

  getInitialState() {
    return {
      actionType: null
    }
  },

  render: function () {
    var styles = {
      height:'1000px'
    };

    if (this.state.actionType) {
      styles.backgroundColor = this.state.actionType === 'onUp' ? '#ffc' : '#cff';
    }

    return (
      <div style={styles}>
        <div style={{height:'200px'}}></div>
        <SparkScroll
          callback={(r) => console.log('callback @ ratio:', r)}
          timeline={{
            topTop:{
              opacity:'0.3',
              transform:'translateX(151px)',
              color:'#00f',
              'onUp,onDown': (actionType) => this.setState({actionType}) },
            centerCenter:{
              opacity:'1.0',
              transform:'translateX(0px)',
              color:'#f00'}
          }}>
          <div style={{color:'inherit'}}>Hello World!</div>
        </SparkScroll>
      </div>
    );
  }
});

React.render(<App/>, document.getElementById('example'));

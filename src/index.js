var React = require('react');
var spark = require('./spark');

var SparkScroll = React.createClass({

  render: function () {
    return (
      <div {...this.props}>{this.props.children}</div>
    );
  },

  componentDidMount() {
    spark(React.findDOMNode(this), this.props.timeline, this.props);
  }
});

module.exports = SparkScroll;
const React = require('react');
const _spark = require('./spark');

function factory(options) {

  const spark = _spark(options);
  const {
    invalidate,
    enableInvalidationInterval,
    disableInvalidationInterval
    } = spark;

  const SparkScroll = React.createClass({

    render: function () {
      return (
        <div {...this.props}>{this.props.children}</div>
      );
    },

    componentDidMount() {
      spark(React.findDOMNode(this), this.props.timeline, this.props);
    }
  });

  return {
    SparkScroll,
    invalidate,
    enableInvalidationInterval,
    disableInvalidationInterval
  };
}

module.exports = factory;
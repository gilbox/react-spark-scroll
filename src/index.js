const React = require('react');
const _spark = require('./spark');

function factory(options) {

  const proxyElements = {};
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
      if (this.props.proxy && ! proxyElements[this.props.proxy]) {
        console.warn(`Spark Scroll: Proxy element with id ${this.props.proxy} not found.`);
      }

      var element = React.findDOMNode(this);
      spark(
        element,
        proxyElements[this.props.proxy] || element,
        this.props.timeline,
        this.props);
    }
  });

  const SparkProxy = React.createClass({

    render: function () {
      return (
        <div {...this.props}>{this.props.children}</div>
      );
    },

    componentDidMount() {
      proxyElements[this.props.proxyId] = React.findDOMNode(this);
    },

    componentWillUnmount() {
      delete proxyElements[this.props.proxyId];
    }
  });

  return {
    SparkScroll,
    SparkProxy,
    invalidate,
    enableInvalidationInterval,
    disableInvalidationInterval
  };
}

module.exports = factory;
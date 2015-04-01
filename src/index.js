const React = require('react');
const sparkFactory = require('./spark');

const Foo = React.createClass({
  render() {
    return <div {...this.props}>{this.props.children}</div>
  }
});

function factory(options) {

  const proxyElements = {};
  const spark = sparkFactory(options);
  const {
    invalidate,
    enableInvalidationInterval,
    disableInvalidationInterval
    } = spark;

  const sparkScrollFactory = defaultComponent => React.createClass({

    render: function () {
      var Component = this.props.component || defaultComponent;
      return (
        <Component {...this.props}>{this.props.children}</Component>
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

  const SparkScroll = sparkScrollFactory('div');

  const sparkProxyFactory = defaultComponent => React.createClass({

    render: function () {
      var Component = this.props.component || defaultComponent;
      return (
        <Component {...this.props}>{this.props.children}</Component>
      );
    },

    componentDidMount() {
      proxyElements[this.props.proxyId] = React.findDOMNode(this);
    },

    componentWillUnmount() {
      delete proxyElements[this.props.proxyId];
    }
  });

  const SparkProxy = sparkProxyFactory('div');

  return {
    sparkScrollFactory,
    sparkProxyFactory,
    SparkScroll,
    SparkProxy,
    invalidate,
    enableInvalidationInterval,
    disableInvalidationInterval
  };
}

module.exports = factory;
var Rekapi = require('rekapi/dist/rekapi');
var _factory = require('react-spark-scroll');

function factory(options) {
  return _factory({
    animator: {
      instance: () => new Rekapi(document.body)
    }
  , ...options });
}

module.exports = factory;
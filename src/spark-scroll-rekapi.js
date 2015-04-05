var Rekapi = require('rekapi/dist/rekapi');
var assign = require('object-assign');
var _factory = require('react-spark-scroll');

function factory(options) {
  return _factory(assign({
    animator: {
      instance: () => new Rekapi(document.body)
    }
  }, options));
}

module.exports = factory;
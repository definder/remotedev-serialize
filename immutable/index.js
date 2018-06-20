var jsan = require('jsan');
var serialize = require('./serialize');

module.exports = function(Immutable, refs) {
  return {
    stringify: function(data) {
      return jsan.stringify(data, serialize(Immutable, refs).replacer, null, {
          'date': true,
          'function': true,
          'regex': true,
          'undefined': true,
          'error': true,
          'symbol': true,
          'map': true,
          'set': true,
          'nan': true,
          'infinity': true,
          'searchIdenticalObjects': false,
      });
    },
    parse: function(data) {
      return jsan.parse(data, serialize(Immutable, refs).reviver);
    },
    serialize: serialize
  }
};

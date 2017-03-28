'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = jsonpFetch;

var _promise = require('promise');

var _promise2 = _interopRequireDefault(_promise);

var _jsonp = require('jsonp');

var _jsonp2 = _interopRequireDefault(_jsonp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function jsonpFetch(url) {
  return new _promise2.default(function (resolve, reject) {
    (0, _jsonp2.default)(url, null, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}
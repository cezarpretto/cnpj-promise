'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function CnpjPromiseError() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      message = _ref.message,
      type = _ref.type,
      errors = _ref.errors;

  this.name = 'cnpjPromiseError';
  this.message = message;
  this.type = type;
  this.errors = errors;
}

CnpjPromiseError.prototype = new Error();

exports.default = CnpjPromiseError;
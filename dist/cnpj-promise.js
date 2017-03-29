'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _promise = require('promise');

var _promise2 = _interopRequireDefault(_promise);

var _cnpjPromiseError = require('./errors/cnpj-promise-error');

var _cnpjPromiseError2 = _interopRequireDefault(_cnpjPromiseError);

var _fetchReceitaWs = require('./services/fetch-receita-ws');

var _fetchReceitaWs2 = _interopRequireDefault(_fetchReceitaWs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CNPJ_SIZE = 14;

var cnpjPromise = function cnpjPromise(cnpjRawValue, options) {
  return new _promise2.default(function (resolve, reject) {
    _promise2.default.resolve(cnpjRawValue).then(validateInputType).then(removeSpecialCharacters).then(validateInputLength).then(fetch).catch(rejectPromise);

    function validateInputType(cnpjRawValue) {
      var cnpjTypeOf = typeof cnpjRawValue === 'undefined' ? 'undefined' : _typeof(cnpjRawValue);

      if (cnpjTypeOf === 'number' || cnpjTypeOf === 'string') {
        return cnpjRawValue;
      }

      throw new _cnpjPromiseError2.default({
        message: 'Erro ao inicializar a instância do CnpjPromise.',
        type: 'validation_error',
        errors: [{
          message: 'Você deve chamar o construtor utilizando uma String ou um Number.',
          service: 'cnpj_validation'
        }]
      });
    }

    function removeSpecialCharacters(cnpjRawValue) {
      return cnpjRawValue.toString().replace(/\D+/g, '');
    }

    function validateInputLength(cnpjCleanValue) {
      if (cnpjCleanValue.length === CNPJ_SIZE) {
        return cnpjCleanValue;
      }

      throw new _cnpjPromiseError2.default({
        message: 'CNPJ deve conter exatamente ' + CNPJ_SIZE + ' caracteres.',
        type: 'validation_error',
        errors: [{
          message: 'CNPJ deve conter exatamente ' + CNPJ_SIZE + ' caracteres.',
          service: 'cnpj_validation'
        }]
      });
    }

    function fetch(cnpjCleanValue) {
      resolve((0, _fetchReceitaWs2.default)(cnpjCleanValue, options));
    }

    function rejectPromise(error) {
      reject(error);
    }
  });
};

exports.default = cnpjPromise;
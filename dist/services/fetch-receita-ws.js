'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fetchReceitaWs;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _cnpjPromiseError = require('../errors/cnpj-promise-error');

var _cnpjPromiseError2 = _interopRequireDefault(_cnpjPromiseError);

var _promise = require('promise');

var _promise2 = _interopRequireDefault(_promise);

var _jsonp = require('./jsonp');

var _jsonp2 = _interopRequireDefault(_jsonp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function fetchReceitaWs(cnpjCleanValue, options) {
  var url = 'https://www.receitaws.com.br/v1/cnpj/' + cnpjCleanValue;

  if (!options) {
    options = {
      method: 'GET',
      mode: 'cors',
      headers: {
        'content-type': 'application/json;charset=utf-8'
      }
    };
  }

  return new _promise2.default(function (resolve, reject) {
    if (typeof window === 'undefined') {
      (0, _isomorphicFetch2.default)(url, options).then(analyzeAndParseResponse).then(checkForReceitaWsError).then(resolvePromise).catch(rejectPromise);
    } else {
      (0, _jsonp2.default)(url).then(analyzeAndParseResponse).then(checkForReceitaWsError).then(resolvePromise).catch(rejectPromise);
    }

    function analyzeAndParseResponse(response) {
      if (typeof window === 'undefined') {
        if (response.ok) {
          return response.json();
        }
      } else {
        if (response.status === 'OK') {
          return response;
        }
      }

      throw Error('Erro ao se conectar com o serviço ReceitaWS.');
    }

    function checkForReceitaWsError(responseObject) {
      if (responseObject.status === 'ERROR') {
        throw new Error(responseObject.message);
      }

      return responseObject;
    }

    function resolvePromise(cnpjObject) {
      resolve(cnpjObject);
    }

    function rejectPromise(error) {
      reject(new _cnpjPromiseError2.default({
        message: error.message,
        type: 'fetch_error',
        errors: [{
          message: error.message,
          service: 'cnpj_fetch'
        }]
      }));
    }
  });
}
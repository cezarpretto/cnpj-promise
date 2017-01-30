import fetch from 'isomorphic-fetch'
import CnpjPromiseError from '../errors/cnpj-promise-error'
import Promise from 'promise'
import jsonp from './jsonp'

export default function fetchReceitaWs(cnpjCleanValue) {
  const url = `https://www.receitaws.com.br/v1/cnpj/${cnpjCleanValue}`
  const options = {
    method: 'GET',
    mode: 'cors',
    headers: {
      'content-type': 'application/json;charset=utf-8'
    }
  }

  return new Promise((resolve, reject) => {
    jsonp(url)
      .then(analyzeAndParseResponse)
      .then(checkForReceitaWsError)
      .then(resolvePromise)
      .catch(rejectPromise)

    function analyzeAndParseResponse(response) {
      if(response.status === 'OK'){
        return response
      }

      throw Error('Erro ao se conectar com o serviço ReceitaWS.')
    }

    function checkForReceitaWsError(responseObject) {
      if(responseObject.status === 'ERROR') {
        throw new Error(responseObject.message)
      }

      return responseObject
    }

    function resolvePromise (cnpjObject) {
      resolve(cnpjObject)
    }

    function rejectPromise (error) {
      reject(new CnpjPromiseError({
        message: error.message,
        type: 'fetch_error',
        errors: [{
          message: error.message,
          service: 'cnpj_fetch'
        }]
      }))
    }
  })

}

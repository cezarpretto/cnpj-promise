'use strict'
import Promise from 'promise'
import CnpjPromiseError from './errors/cnpj-promise-error'
import fetchReceitaWs from './services/fetch-receita-ws'

const CNPJ_SIZE = 14

var cnpjPromise = function(cnpjRawValue, options) {
  return new Promise((resolve, reject) => {
    Promise.resolve(cnpjRawValue)
      .then(validateInputType)
      .then(removeSpecialCharacters)
      .then(validateInputLength)
      .then(fetch)
      .catch(rejectPromise)

    function validateInputType (cnpjRawValue) {
      let cnpjTypeOf = typeof cnpjRawValue

      if (cnpjTypeOf === 'number' || cnpjTypeOf === 'string') {
        return cnpjRawValue
      }

      throw new CnpjPromiseError({
        message: 'Erro ao inicializar a instância do CnpjPromise.',
        type: 'validation_error',
        errors: [{
          message: 'Você deve chamar o construtor utilizando uma String ou um Number.',
          service: 'cnpj_validation'
        }]
      })
    }

    function removeSpecialCharacters (cnpjRawValue) {
      return cnpjRawValue.toString().replace(/\D+/g, '')
    }

    function validateInputLength(cnpjCleanValue) {
      if (cnpjCleanValue.length === CNPJ_SIZE) {
        return cnpjCleanValue
      }

      throw new CnpjPromiseError({
        message: `CNPJ deve conter exatamente ${CNPJ_SIZE} caracteres.`,
        type: 'validation_error',
        errors: [{
          message: `CNPJ deve conter exatamente ${CNPJ_SIZE} caracteres.`,
          service: 'cnpj_validation'
        }]
      })
    }

    function fetch(cnpjCleanValue) {
      resolve(fetchReceitaWs(cnpjCleanValue, options))
    }

    function rejectPromise(error) {
      reject(error)
    }
  })
}

export default cnpjPromise

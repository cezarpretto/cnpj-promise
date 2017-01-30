function CnpjPromiseError ({ message, type, errors } = {}) {
  this.name = 'cnpjPromiseError'
  this.message = message
  this.type = type
  this.errors = errors
}

CnpjPromiseError.prototype = new Error()

export default CnpjPromiseError

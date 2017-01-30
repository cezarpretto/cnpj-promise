'use strict'
import CnpjPromise from './src/cnpj-promise'

CnpjPromise('05132607000149').then(data => {
  console.log(data);
}).catch(err => {
  console.log(err);
})

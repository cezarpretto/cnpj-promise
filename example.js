'use strict'
import CnpjPromise from './src/cnpj-promise'

CnpjPromise('14.994.399/0001-88').then(data => {
  console.log(data);
}).catch(err => {
  console.log(err);
})

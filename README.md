# CNPJ Promise
Busca por CNPJ integrado com o webservice da receitaWS

## Como utilizar

### Instalação

```
$ npm install --save cnpj-promise
```

### Realizando uma consulta
```js
import CnpjPromise from 'cnpj-promise'

CnpjPromise('05132607000149').then(data => {
  console.log(data);
}).catch(err => {
  console.log(err);
})
```

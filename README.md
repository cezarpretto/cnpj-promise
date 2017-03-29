# CNPJ Promise
Busca por CNPJ integrado com o webservice da receitaWS. Baseado na idéia e arquitetura do [cep-promise](https://github.com/filipedeschamps/cep-promise).

## Como utilizar

### Instalação

```
$ npm install --save cnpj-promise
```

### Realizando uma consulta com import
```js
import CnpjPromise from 'cnpj-promise'

CnpjPromise('47508411022559').then(data => {
  console.log(data);
  //   {
  // 	"atividade_principal": [{
  // 		"text": "Comércio varejista de mercadorias em geral, com predominância de produtos alimentícios - hipermercados",
  // 		"code": "47.11-3-01"
  // 	}],
  // 	"data_situacao": "03/11/2005",
  // 	"complemento": "QUADRA L-22",
  // 	"nome": "COMPANHIA BRASILEIRA DE DISTRIBUICAO",
  // 	"uf": "GO",
  // 	"telefone": "(11) 3050-9000",
  // 	"email": "paralegal@grupopaodeacucar.com.br",
  // 	"atividades_secundarias": [{
  // 		"text": "Correspondentes de instituições financeiras",
  // 		"code": "66.19-3-02"
  // 	}, {
  // 		"text": "Comércio varejista de mercadorias em lojas de conveniência",
  // 		"code": "47.29-6-02"
  // 	}, {
  // 		"text": "Atividades de intermediação e agenciamento de serviços e negócios em geral, exceto imobiliários",
  // 		"code": "74.90-1-04"
  // 	}, {
  // 		"text": "Laboratórios fotográficos",
  // 		"code": "74.20-0-03"
  // 	}, {
  // 		"text": "Restaurantes e similares",
  // 		"code": "56.11-2-01"
  // 	}],
  // 	"situacao": "ATIVA",
  // 	"bairro": "SETOR MARISTA",
  // 	"logradouro": "AV PORTUGAL",
  // 	"numero": "S/N",
  // 	"cep": "74.150-030",
  // 	"municipio": "GOIANIA",
  // 	"abertura": "19/04/2002",
  // 	"natureza_juridica": "204-6 - Sociedade Anônima Aberta",
  // 	"fantasia": "EXTRA - HIPERMERCADO",
  // 	"cnpj": "47.508.411/0225-59",
  // 	"ultima_atualizacao": "2016-12-29T05:36:05.722Z",
  // 	"status": "OK",
  // 	"tipo": "FILIAL",
  // 	"efr": "",
  // 	"motivo_situacao": "",
  // 	"situacao_especial": "",
  // 	"data_situacao_especial": "",
  // 	"capital_social": "0.00",
  // 	"qsa": [],
  // 	"extra": {}
  // }
}).catch(err => {
  console.log(err);
})
```

### Realizando uma consulta com require

```js
var cnpjPromise = require('./dist/cnpj-promise').default

CnpjPromise('47508411022559').then(data => {
  console.log(data);
  //   {
  // 	"atividade_principal": [{
  // 		"text": "Comércio varejista de mercadorias em geral, com predominância de produtos alimentícios - hipermercados",
  // 		"code": "47.11-3-01"
  // 	}],
  // 	"data_situacao": "03/11/2005",
  // 	"complemento": "QUADRA L-22",
  // 	"nome": "COMPANHIA BRASILEIRA DE DISTRIBUICAO",
  // 	"uf": "GO",
  // 	"telefone": "(11) 3050-9000",
  // 	"email": "paralegal@grupopaodeacucar.com.br",
  // 	"atividades_secundarias": [{
  // 		"text": "Correspondentes de instituições financeiras",
  // 		"code": "66.19-3-02"
  // 	}, {
  // 		"text": "Comércio varejista de mercadorias em lojas de conveniência",
  // 		"code": "47.29-6-02"
  // 	}, {
  // 		"text": "Atividades de intermediação e agenciamento de serviços e negócios em geral, exceto imobiliários",
  // 		"code": "74.90-1-04"
  // 	}, {
  // 		"text": "Laboratórios fotográficos",
  // 		"code": "74.20-0-03"
  // 	}, {
  // 		"text": "Restaurantes e similares",
  // 		"code": "56.11-2-01"
  // 	}],
  // 	"situacao": "ATIVA",
  // 	"bairro": "SETOR MARISTA",
  // 	"logradouro": "AV PORTUGAL",
  // 	"numero": "S/N",
  // 	"cep": "74.150-030",
  // 	"municipio": "GOIANIA",
  // 	"abertura": "19/04/2002",
  // 	"natureza_juridica": "204-6 - Sociedade Anônima Aberta",
  // 	"fantasia": "EXTRA - HIPERMERCADO",
  // 	"cnpj": "47.508.411/0225-59",
  // 	"ultima_atualizacao": "2016-12-29T05:36:05.722Z",
  // 	"status": "OK",
  // 	"tipo": "FILIAL",
  // 	"efr": "",
  // 	"motivo_situacao": "",
  // 	"situacao_especial": "",
  // 	"data_situacao_especial": "",
  // 	"capital_social": "0.00",
  // 	"qsa": [],
  // 	"extra": {}
  // }
}).catch(err => {
  console.log(err);
})
```

### Parametro options

Opcionalmente você pode configurar a requisição passando o parametro *options*.
Consulte a documentação das dependencias desse projeto para saber como usar essa funcionalidade.


```js
const options = {
      timeout: 6000,
      method: 'GET',
      mode: 'cors',
      headers: {
        'content-type': 'application/json;charset=utf-8'
      }
  }

CnpjPromise(cnpj, options).then(data => {
//CnpjPromise('14994399000188', options).then(data => {
  console.log(data);
}).catch(err => {
  console.log(err);
})
```

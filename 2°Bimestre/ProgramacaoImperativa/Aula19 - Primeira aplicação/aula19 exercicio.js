const strPessoas = require('./aula19 informacoes')
const pessoas = JSON.parse(strPessoas)
console.log(pessoas.altura)

const maiorIdade = pessoas.filter((valor,index) => {
    return pessoas.altura
});

console.log(maiorIdade)
// Não está pronto, tive que sair mais cedo da aula
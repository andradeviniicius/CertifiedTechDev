const strPessoas = require('./aula19 informacoes')
const arrayPessoas = JSON.parse(strPessoas)



const acharMaior = (arrayPessoas)=>{
    let valor = arrayPessoas.sort((a,b)=>{
        return b.altura - a.altura;
    })
    console.log(valor[0].altura)
}
const acharMenor = (arrayPessoas)=>{
    let valor = arrayPessoas.sort((a,b)=>{
        return a.altura - b.altura;
    })
    console.log(valor[0].altura)
    
}
console.log('Maior pessoa e menor pessoa')
acharMaior(arrayPessoas)
acharMenor(arrayPessoas)

function mediaMulheres(arrayPessoas) {
    const filterMulher = arrayPessoas.filter(person => person.sexo === "F");
    const media = filterMulher.reduce((acum, valor) => parseFloat(acum) + parseFloat(valor.altura), 0) / filterMulher.length;
    return media;
}
console.log('Tamanho médio das mulheres')
console.log(mediaMulheres(arrayPessoas));

function arrayHomens (arrayPessoas) {
    const homem = arrayPessoas.filter(person => person.sexo === "M");
    return homem.length;
}

console.log('Quantidade de homens na lista')
console.log(arrayHomens(arrayPessoas));

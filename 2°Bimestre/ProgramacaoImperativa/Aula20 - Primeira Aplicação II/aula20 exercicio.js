const arrayDados = require("./aula20 arquivoDeDados");

//   ### Cada espectador de um cinema respondeu a um questionário no qual constava sua idade e a sua opinião em relação ao filme: 
// ótimo - 3, 
// bom - 2, 
// regular -1.

// Faça um programa que receba a idade e a opinião de 15 espectadores, calcule e imprima:





// - a média das idades das pessoas que responderam ótimo;
function mediaAlunos() {
    let opiniaoOtima = arrayDados.filter((valor)=>{
        return valor.opiniao==3
    })
    let somatorio = opiniaoOtima.reduce((acumulador, valor)=>{
        return acumulador + valor.idade
    },0)
    let media = somatorio/opiniaoOtima.length
    return media
}
console.log('')
console.log('Exercicio1:')
console.log(`Média dos Alunos Otimos: ${mediaAlunos()}`)
console.log('')


// - a quantidade de pessoas que responderam regular;
function qtdRegular() {
    let opiniaoRegular = arrayDados.filter((valor)=>{
        return valor.opiniao==1
    })
    
    let qtdOpiniao = ()=> {
        let z = 0
        for(x=0;x<=opiniaoRegular.length;x++) {
            z = x
        }
        return z
    }
    
    return qtdOpiniao()    
}

console.log('Exercicio2:')
console.log(`Quantidade Alunos regulares: ${qtdRegular()}`)
console.log('')




// - a porcentagem de pessoas que responderam bom entre todos os espectadores analisados.
function porcentagemAlunos() {
    
    let qtdBom = ()=> {        
        let arrayOpiniaoBom = arrayDados.filter((valor)=>{
            return valor.opiniao==2
        })
        let z = 0
        for(x=0;x<=arrayOpiniaoBom.length;x++) {
            z = x
        }
        return z
    }
    console.log(qtdBom())
    let qtdTotalArray = () => {
        let z = 0
        for(x=0;x<=arrayDados.length;x++) {
            z = x
        }
        return z
    }
    console.log(qtdTotalArray())
    
    let porcentagem = () => {
        let a = (qtdBom()*100)/qtdTotalArray()
        return a+'%'
    }
    console.log(porcentagem())
    
}
console.log('Exercicio3:')
porcentagemAlunos()
console.log('')
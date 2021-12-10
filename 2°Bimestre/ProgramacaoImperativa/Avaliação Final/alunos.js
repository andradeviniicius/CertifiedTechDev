// Micro desafio - Passo 1

// Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). Crie um construtor para ele e importe-o como o módulo aluno.

const alunos = {
    nome : '',
    qtdFaltas : '',
    notas : [], 
    listaAlunos : [],
    // Passo1
    fichaAluno : function(nome, qtdFaltas, notas){
        
        this.nome = nome
        this.qtdFaltas = qtdFaltas
        this.notas = notas
    },
    // Passo2
    calcMedia : (notas)=>{
        
        // Minimo viavel possivel já foi feito se sobrar um tempinho eu começo a trabalhar nas verificacoes dos inputs pra validar os dados :DD Valeu profff

        // if (Array.isArray(notas) || !notas.every(Number.isInteger)) {
        //     return 'Tipo de dado inválido, recebido String esperava Array'
        // } else {

            let somatorio = notas.reduce((acumulador, valor)=>{
                return acumulador + valor;
            })
            let media = somatorio/notas.length
                return media
        // }

    },
    // Passo2
    aumentaFalta : (aluno, valor)=>{
        return aluno.qtdFaltas += valor
    }
}

module.exports = alunos
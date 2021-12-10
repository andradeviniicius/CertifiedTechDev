// Micro desafio - Passo 1

// Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). Crie um construtor para ele e importe-o como o módulo aluno.

const alunos = {
    nome : '',
    qtdFaltas : '',
    notas : [], 
    listaAlunos : [],
    calcMedia : (notas)=>{
        
        if (Array.isArray(notas) || !notas.every(Number.isInteger)) {
            return 'Tipo de dado inválido, recebido String esperava Array'
        } else {

            let somatorio = notas.reduce((acumulador, valor)=>{
                return acumulador + valor;
            })
            let media = somatorio/notas.length
            return media
        }

    },
    fichaAluno : function(nome, qtdFaltas, notas){
        
        this.nome = nome
        this.qtdFaltas = qtdFaltas
        this.notas = notas
    },
    aumentaFalta : (aluno, valor)=>{
        return aluno.qtdFaltas += valor
    }
}

alunos.listaAlunos.push(new alunos.fichaAluno("Vinicius de Andrade",4,[6,1,8]))
alunos.listaAlunos.push(new alunos.fichaAluno("André Pedreschi",0,[7,2,9]))
alunos.listaAlunos.push(new alunos.fichaAluno("Victor Leao",0,[9,7,3]))
alunos.listaAlunos.push(new alunos.fichaAluno("Jaqueline Silva",4,[4,7,8]))
alunos.listaAlunos.push(new alunos.fichaAluno("Breno Sabino",2,[6,7,5]))


module.exports = alunos
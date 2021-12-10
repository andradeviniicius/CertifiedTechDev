const alunos = module.require('./alunos')
const estudantes = module.require('./estudante')
// console.log(alunos.listaAlunos[0])


// Passo3
const curso = {
    nomeCurso : '',
    tetoAprovacao : 7,
    tetoFalta : 5,
    listaEstudantes : estudantes,    
    // Passo4
    criaAluno : (nome,qtdFaltas,notas)=>{
        curso.listaEstudantes.push(new alunos.fichaAluno(nome,qtdFaltas,notas))

    },
    // Passo5:
    testeAprovacao : (alunoX)=>{
        let mediaNota = alunoX.notas
        let faltas = alunoX.qtdFaltas

        
        if(alunos.calcMedia(mediaNota) >= curso.tetoAprovacao && faltas<curso.tetoFalta){
            // console.log('passou')
            return true
        } 
        else if(faltas==curso.tetoFalta && mediaNota > (curso.tetoAprovacao*10/100+mediaNota) ) {
            // console.log('passou')
            return true
        } 
        else {
            // console.log('não passou')
            return false
        }
        
    },
    // Passo6
    listaAprovados : ()=>{
        let aprovados = []
        for(x=0;x<curso.listaEstudantes.length;x++){
            aprovados.push(curso.testeAprovacao(curso.listaEstudantes[x]))
        }
        console.log(aprovados)
    
    }
}

// Teste Passo4
            // curso.criaAluno("Vinicius de Andrade",0,[6,1,8])
            // curso.criaAluno("André Pedreschi",0,[7,7,7])
            // curso.criaAluno("Victor Leao",5,[7,8,9])
            // curso.criaAluno("Jaqueline Silva",4,[4,7,8])
            // curso.criaAluno("Breno Sabino",2,[6,7,5])
// console.log(curso)

//Teste Passo5
            // console.log(curso.testeAprovacao(curso.listaEstudantes[0]))
            // console.log(curso.testeAprovacao(curso.listaEstudantes[1]))
            // console.log(curso.testeAprovacao(curso.listaEstudantes[2]))

// Teste passo6
console.log('')
console.log('')
console.log('')
curso.listaAprovados()
const alunos = module.require('./alunos')

const estudantes = []

estudantes.push(new alunos.fichaAluno("Vinicius de Andrade",0,[6,1,8]))
estudantes.push(new alunos.fichaAluno("André Pedreschi",0,[7,7,7]))
estudantes.push(new alunos.fichaAluno("Victor Leao",5,[7,8,9]))
estudantes.push(new alunos.fichaAluno("Jaqueline Silva",4,[4,7,8]))
estudantes.push(new alunos.fichaAluno("Breno Sabino",2,[6,7,5]))

module.exports = estudantes
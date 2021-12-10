const alunos = require('./contas')
// const bancoAlunos = require('./contas')
console.log('')


// Teste Aumenta Falta
console.log('Teste Aumentar Falta')
console.log(alunos.listaAlunos[2])
alunos.aumentaFalta(alunos.listaAlunos[2],4)
console.log(alunos.listaAlunos[2])
console.log('')

// Teste CalcMedia
console.log('Media teste:')
console.log(alunos.listaAlunos[2].notas)
console.log(alunos.calcMedia(alunos.listaAlunos[2]))
console.log('')


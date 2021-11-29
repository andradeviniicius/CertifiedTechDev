// Nível 1
// Crie um arquivo calculadora.js que terá as diferentes operações  para realizar.
// Crie uma função adicionar, que deverá receber dois parâmetros e retornar a soma deles.
// Crie uma função de subtração, que deverá receber dois parâmetros e retornar a subtração do primeiro menos o segundo.
// Crie uma função de multiplicação, que deverá receber dois parâmetros e retornar o resultado de sua   multiplicação.
// Crie uma função de divisão, que receberá dois parâmetros e retornará o resultado da divisão do primeiro sobre o segundo.

function somar(a,b) {
  return a+b
}
function subtrair(a,b) {
  return a-b
}
function multiplicação(a,b) {
  return a*b
}
function divisao(a,b) {
  return a/b
}

/////////////////////////
console.log()
console.log('Nível1')
console.log('Criação funções')
console.log('------------------------------')
console.log('function somar(a,b){return a+b}')
console.log('function subtrair(a,b) {return a-b}')
console.log('function multiplicação(a,b) {return a*b}')
console.log('function divisao(a,b) {return a/b}')

console.log('------------------------------')


console.log()

// Nível 2
// No seu arquivo calculadora.js,  a partir das 4 funções feitas anteriormente, crie um console.log no qual você irá colocar uma string para indicar que abaixo dela você começará a testar as funções, por exemplo:
// console.log ("-------------- Teste de Operações / Calculadora --------------")
// Execute a função que soma e a função que subtrai, passando quaisquer dois números como argumentos. Mostrar resultados no console.
// Execute a função que multiplica, passando quaisquer dois números como argumentos. Mostre o resultado no console.
// Execute a função que faz divisão, passando quaisquer dois números como argumentos. Mostre o resultado no console.
// Execute a função que faz divisão, passando agora o número zero como um dos dois argumentos. Mostre o resultado no console.

console.log('Nível2')
console.log('Operacao                   Resultado')
console.log('------------------------------')
console.log('Somar                     '+somar(1,2))
console.log('Subtrair                  '+subtrair(1,2))
console.log('Multiplicar               '+multiplicação(1,2))
console.log('Divisão                   '+divisao(1,100))

console.log()

//  Nível 3
// Crie uma função chamada quadradoDoNumero, que recebe um número como parâmetro e deve retornar esse número multiplicado por ele mesmo, ou seja, ao quadrado.
// Importante: quadradoDoNumero() deve usar a função multiplicação() para calcular o quadrado do parâmetro inserido em power().
// Crie a função mediaDeTresNumeros, ela deve calcular a média de 3 números, que serão inseridos por parâmetro.
// Importante: Em mediaDeTresNumeros() você precisará usar algumas funções criadas anteriormente em nossa calculadora.

// Crie a função calculaPorcentagem, que receberá dois parâmetros: o número total e a porcentagem que deseja calcular, e que deverá retornar x% de totalPorcentagem.
// Exemplo: calculaPorcentagem(300, 15)  (deve retornar 45, pois é 15% de 300). 

// Importante: calculaPorcentagem() você precisará usar algumas funções criadas anteriormente em nossa calculadora.

// Crie uma função geradorDePorcentagem que leva dois parâmetros, e que deverá retornar a porcentagem do primeiro em relação ao segundo parâmetro.
// Exemplo: geradorDePorcentagem (2, 200) (deve retornar 1 já que 2 é 1% de 200).

function quadradoDoNumero(x) {
  return x*x
}

function mediaDeTresNumeros(a,b,c) {
  return (a+b+c)/3
}

// function calculaPorcentagem(a, b) {
//   return a * b/100 
// }

function calculaPorcentagem(a, b) {
  let c = divisao(b,100)
  return multiplicação(a,c)
}

function geradorDePorcentagem(a,b) {
  return calculaPorcentagem(a,b)
}


/////////////////////////
console.log()
console.log('Nível3')
console.log('Operacao                    Resultado')
console.log('------------------------------')
console.log('quadradoDoNumero            '+quadradoDoNumero(4,4))
console.log('mediaDeTresNumeros          '+mediaDeTresNumeros(21,332,233))
console.log('calculaPorcentagem          '+calculaPorcentagem(200,15))
console.log('geradorDePorcentagem        '+geradorDePorcentagem(1,0))

console.log()
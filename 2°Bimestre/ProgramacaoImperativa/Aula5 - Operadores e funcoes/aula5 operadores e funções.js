//  1
function ex1(x) {
  let res = x*2.54
  console.log(`${x} centímetros equivale a ${res} polegadas`)
}
console.log('///ex1')
ex1(2)

//  2
function ex2(frase) {
  return 'http://www.'+frase+'.com.br';
}

console.log('///ex2')
console.log(ex2('facebook'))
// console.log(ex2('functionjs'))

//  3
function ex3(frase) {
  console.log(`${frase}!`)
}

console.log('///ex3')
ex3('djangolibre')

//  4
function ex4(y) {
  let idadeCachorro = y*7
  console.log(`${y} anos de humano equivale a ${idadeCachorro} em idade de cachorro`)
}

console.log('///ex4') 
ex4(2)

//  5 Crie uma função que calcule o valor da sua hora de trabalho, tendo como parâmetro o seu salário mensal.
//  PS: considere que você trabalhe 160 horas no mês.
function ex5(x) {
  return x / 160 
}
console.log('///ex5')
console.log('Sua hora trabalho equivale a '+ ex5(1400))

//  6 Crie a função calculadora de IMC* de uma pessoa, que recebe a altura em centímetros e o peso em quilogramas. Em seguida, execute a função, testando diferentes valores. 
// *IMC, significa Índice de Massa Corporal e é um parâmetro utilizado para saber se o peso está de acordo com a altura.

//Curiosamente eu ja fiz esse calculo em outro projeto meses atrás quando aprendia o basico de JS no curso do guanabara kkk
function calcular(sexo,altura,peso,Idade){     
  if (sexo != 'M') {
  console.log('Valor de Sexo invalido, favor escolher entre M ou F')
}   else {
  let cmasc = ((peso * 10) + (altura * 6.25) - (Idade * 5) + 5)
  // Number(cmasc.value)
  console.log(`O seu corpo gasta parado ${cmasc} calorias`) 
}
}
   
   calcular('M',2,3,2)

// 7 Crie uma função que receba uma string em minúsculas, converta-a em maiúsculas e as retorne. 
// Investigue o que o método de .toUpperCase() faz.

function uppercase(string) {
  return string.toUpperCase()
}
console.log(uppercase('alo alo galera'))

// 8 Crie uma função que receba um parâmetro e retorne o tipo de dado deste parâmetro.
// Dica: Isso te ajudará a entender o que o operador typeof faz.

function a(b) {
  return typeof b
}

console.log(a(2))

// 9 Crie uma função pela qual passamos o raio de um círculo e ela retorna a circunferência.
// Dica: Investigue se o objeto Math tem entre suas propriedades o número Pi.

function circunferência(raio) {
  return 2 * Math.PI * raio;
}

console
console.log(circunferência(2))
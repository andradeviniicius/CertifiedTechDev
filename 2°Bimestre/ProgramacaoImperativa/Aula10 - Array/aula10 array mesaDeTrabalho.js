console.log('')
let lista = ['Fulano','Ciclano','Beltrano','Tirano','Ssauro','Rex']
console.log('Acessando terceiro elemento do Array:')
console.log('')
console.log('Array Original:')
console.log(lista)
console.log('--------------')
console.log(lista[2])
console.log('--------------')
console.log('')

console.log('')
console.log('Modificando elementos do Array:')
console.log('')
console.log('Array original:')
console.log(lista)
console.log('')
lista[0] = 'Rex'
lista[1] = 'Ssauro'
lista[2] = 'Tirano'
lista[3] = 'Beltrano'
lista[4] = 'Ciclano'
lista[5] = 'Fulano'
console.log('Array alterado:')
console.log('--------------')
console.log(lista)
console.log('--------------')
console.log('')

console.log('')
console.log('Adicionando elemento "Megazord" ao Array:')
console.log('')
lista.push('Megazord')
console.log('--------------')
console.log(lista)
console.log('--------------')
console.log('')

console.log('')
console.log('Extraindo ultimo elemento do Array:')
console.log('')
lista.pop()
console.log('--------------')
console.log(lista)
console.log('--------------')
console.log('')

/*
Comparar elementos de um array com os elementos de outro. 
*/

console.log('O que esses códigos retornam?')
console.log('Neste exercício, você terá que pensar sobre o que esses códigos retornam sem testá-lo no console.?')
console.log('Respostas:')
console.log('')

console.log('1- Acredito que vá retornar o valor 54')
console.log('')
console.log('Prova real:')
let numbers =[22, 33, 54, 66, 72]
console.log(numbers[numbers.length])
console.log('kk acho que deu ruim, retornou undefined')

console.log('')
console.log('2- Acredito que vá retornar Spiderman')
console.log('')
console.log('Prova real:')
let agrupoDeAmigos = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk", "Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ]
console.log(agrupoDeAmigos[1][0])

console.log('')
console.log('3- Acredito que vá retornar lenght = 4')
console.log('')
console.log('Prova real:')
let str = "una string qualquer"
let grupoDeAmigos = [ [45, 89, 0], ["Digital", "House", true],["string", "123","false", 54, true, str] ]

console.log(grupoDeAmigos[2][grupoDeAmigos[2].length - 1])
console.log('kk deu ruim')
console.log('')

console.log('')
console.log('Array Invertido')
console.log('')
console.log('')


console.log('----------Array invertido 1 -Neste exercício, você terá que criar uma função que retorne um array com seus elementos invertidos, sem modificá-lo. Então, você deve fazer uma função que o modifique e inverta a ordem de seus elementos.')
arrayTeste = [12,14,15,66,732]
console.log(arrayTeste)

function imprimirInverso () {
  arrayTeste.reverse()
  return arrayTeste
}

console.log(imprimirInverso())

console.log('')
console.log('2 -Crie a função inverter que recebe um Array como argumento e retorna um novo invertido')

function inverter (valor) {
  console.log(valor.reverse());
}

inverter([12,13,14,15,16]);
console.log('')
console.log('3- Neste exercício, você criará uma função somarArray() que aceita um array de números e retorna a soma de todos eles.')

function somarArray(arrayNumeros){
  let soma = 0;
  soma += arrayNumeros.pop();
  soma += arrayNumeros.pop();
  soma += arrayNumeros.pop();
  soma += arrayNumeros.pop();
  soma += arrayNumeros.pop();
  return soma;
}

console.log(somarArray([3, 3, 3, 3,3]));


console.log('')
console.log('Neste exercício, você criará uma função chamada join que recebe um array e simula o comportamento do método Array.join().')

function join(valor) {
  let concat = '';
  
  concat += valor[0];
  concat += valor[1];
  concat += valor[2];
  concat += valor[3];
  concat += valor[4];
  
  return concat;
}

console.log(join([1,2,3,4,5]))


console.log('')
console.log('O tech leader da equipe precisa conhecer a estrutura de dados do novo projeto. Para isso, devemos:')
console.log('Criar a estrutura apropriada para armazenar os seguintes filmes e séries:	"star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela". ')
console.log('')

const filmesSeries = ["star wars", "matrix", "mr. robot", "o preço do amanhã", "a vida é bela"];
console.log(filmesSeries[0]);
console.log(filmesSeries[1]);
console.log(filmesSeries[2]);
console.log(filmesSeries[3]);
console.log(filmesSeries[4]);

console.log('')
console.log('Os filmes devem estar todos em letras maiúsculas. Para isso, crie uma função que recebe um array por parâmetro e converta o conteúdo de cada elemento em letras maiúsculas.Dica: revise o que faz o método de strings toUpperCase().')
console.log('')

function paraLetrasMaiusculas(valor) {
  console.log(valor[0].toUpperCase())
  console.log(valor[1].toUpperCase())
  console.log(valor[2].toUpperCase())
  console.log(valor[3].toUpperCase())
  console.log(valor[4].toUpperCase())
}

paraLetrasMaiusculas(filmesSeries)

console.log('')
console.log('Crie outra estrutura semelhante à primeira, mas com os seguintes filmes de animação:"Toy Story", "Procurando Nemo" "Kung-fuPanda", "Wally", "Fortnite"')
console.log('Em seguida, crie uma função que receba dois arrays como parâmetros, para poder adicionar os elementos contidos no segundo array, dentro do primeiro, a fim de retornar um único array com todos os filmes como seus elementos.')
console.log('')

const filmesSeries2 = ["Toy Story", "Procurando Nemo", "Kung-fuPanda", "Wally", "Fortnite"];

function teste (valor1,valor2) {
  // valor2.toString()
  let valor3 = valor1.concat(valor2)
  console.log(valor3)
}
teste(filmesSeries, filmesSeries2)

console.log('')
console.log('Durante o processo, percebemos que o último elemento na série de filmes animados é, na verdade, um game. Agora devemos editar nosso código e modificá-lo para que possamos remover o último elemento antes de migrar o conteúdo para o array que contém todos os filmes. PS: por precaução, salve o elemento que você vai deletar em uma variável')
console.log('')

let q = filmesSeries2.pop()
console.log('Item deletado= '+q)
teste(filmesSeries, filmesSeries2)

console.log('')
console.log('Finalmente, recebemos dois arrays com classificações feitas por diferentes usuários do mundo nos filmes com o seguinte formato:')
console.log('')

console.log('const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];')
console.log('const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];')
console.log('')
console.log('Crie uma função que compare as notas e nos diga se elas são iguais ou diferentes.')
console.log('')


const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function compare(a,b) {
  
  if (a[0] == b[0]) {
      console.log('Primeiro valor é igual')
    } else if (a[0] !== b[0]) {
      console.log('Primeiro valor é diferente')
    }
    
    if (a[1]==b[1]) {
      console.log('Segundo valor é igual')
    } else if (a[1]!==b[1]) {
      console.log('Segundo valor é diferente')
      // Ia ter que fazer mil if's aqui
    } else {
      console.log('Erro')
    }
  }
  
  compare(asiaScores,euroScores)
  console.log('')
  console.log('Eu ja vi a aula de For, me recuso a fazer tudo na unha kkkkk')
  console.log('')
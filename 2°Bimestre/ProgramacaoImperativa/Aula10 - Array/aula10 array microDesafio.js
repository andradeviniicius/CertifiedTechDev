console.log('Métodos de Arrays')
console.log('')
console.log('')
console.log('Testando metodo .lenght()');
let nome = " Marcos Silva Santana "
console.log(nome.length)
console.log('---------')
console.log('')

console.log('Testando metodo .trim()');
nome =  "       Marcos Silva Santana       "
console.log( nome +' --Sem trim');
console.log( nome.trim() +' --Com trim');
console.log('---------')
console.log('')
// Trim retira espaços do começo e do fim da string
console.log('Testando metodo .split()');
nome = nome.trim();
console.log('Sem split')
console.log(nome)
console.log('Com split')
console.log (nome.split(" "));
console.log('Transforma uma string em um array, bem util rsrs')
// Splita o conteudo quando achar a condicao() no exemplo quando achar um espaço vazio
console.log('---------')
console.log('')

console.log('Aplicando todos os tipos de dados dentro do array incluindo number e booleanos');
let lista = ["Marcos","João","Fulano","Ciclano",25, true]
console.log(lista);
console.log('---------')
console.log('')

// Array é um tipo de valor de variável
// Array pode conter valores de qualquer tipo de dado
// Para selecionar um elemento do Array é preciso selecionar pelo seu indicador que começa com 0 e vai subindo
console.log('Selecionando elemento [0]');
console.log (lista[0])
console.log(lista);
console.log('---------')
console.log('')


// Da pra alterar selecionando um deles e aplicando o operador pra alterar
console.log('Testando alteração de um valor do array [0]');
console.log('Antes da alteração')
console.log (lista)

console.log('Após alteração')
lista[0] = 'Marquinhos'
console.log(lista);
console.log('---------')
console.log('')

/* Métodos de Arrays

Primeiro metodo: .push()  - mesma ideia do push do Github
O push insere valores no array original
*/
console.log('Testando .push()')
let a = lista.push('Push1')
console.log(a);
console.log(lista);
console.log('---------')
console.log('')


/*  Método .pop()
Vai eliminar o ultimo elemento do Array
*/
console.log('Testando .pop()')
let x = lista.pop();
console.log(x+' valor que foi excluido'); // Exibe valor que foi excluido
console.log(lista); // Array sem o valor que foi excluido
console.log('---------')
console.log('')


/*  Método .shift()
Vai eliminar o primeiro elemento do Array
*/
console.log('Testando .shift()')
console.log('Retira o primeiro elemento do array ')
console.log(lista)
const u = lista.shift();
console.log(u)
console.log(lista)
console.log('')


/*  Método .unshift()
Adiciona um elemento ao começo do Array
*/
console.log('Testando .unshift()')
console.log('Adiciona 1 ou mais elementos ao começo do array ')
console.log(lista)
const z = lista.unshift('unshiftTeste');
console.log(z)
console.log(lista)

// console.log(z); // Exibe valor que foi adicionado
// console.log(lista); // Array sem o valor que foi adicionado
console.log('Por que desgraças ta retornando um number com a quantidade de valores na string.............')
console.log('---------')
console.log('')


/*  Método .join()
Junta os elementos de um array
Contrario do Split - Pegava uma string e transformava em array
Join faz um array se transformar numa string com algum separador ou nao
*/
console.log('Testando .join()')
let joinTeste = lista.join(" - ");
console.log(joinTeste);
console.log('Join faz um array se transformar numa string com um separador (no caso do exemplo "-") definido nos parenteses');

console.log('---------')
console.log('')

/*
  Método indexOf() e lastIndexOf()
*/

console.log('Testando .lastIndexOf() e .indexOf()');
console.log('Array:');
lista.push('Fulano')
lista.push('Lucas')
console.log(lista);
console.log('--  .lastIndexOf busca o primeiro elemento que encontrar de trás pra frente de acordo com o argumento definido nos parenteses e mostra a posição dele');
console.log('--  .indexOf() busca o primeiro elemento que encontrar do começo ao fim de  de acordo com o argumento definido nos parenteses e mostra a posição dele');
console.log('Argumento = "Fulano"')
console.log('Posição encontrada pelo .lastIndexOf()')
console.log(lista.lastIndexOf("Fulano"))
console.log('Posição encontrada pelo .indexOf()')
console.log(lista.indexOf("Fulano"))
console.log('---------')
console.log('')



/*  Método .includes()
Testa o valor dentro dos parenteses:
Exemplo:
*/
console.log('Testando .includes()')
console.log('Testa o valor dentro dos parenteses se existir = True se não existir = False')

console.log('---------')
console.log('Testando "Marquinhos')
console.log(lista.includes("Marquinhos"))
console.log('Testando "João')
console.log(lista.includes("João"))
console.log('---------')
console.log('')
// Nos permitem avaliar condições
// e realizar diferentes ações segundo o
// resultado destas avaliações.

// Condicional Simples
if (condicao) {
  // código a executar se a condição for verdadeira
 }

//  Condicional com bloco else

if (condicao) {
  // código a executar se a condição for verdadeira
 } else {
  // código a executar se a condição for falsa


// Condicional com o bloco else if

if (condicao) {
  // código a executar se a condição for verdadeira
 } else if ('outra condicao') {
  // código a executar se a outra condição for verdadeira
 } else {
  // código a executar se todas as condições forem falsas
 }
}
 
// Exemplo
let idade = 19;
let acesso = '';
if (idade < 16) {
 acesso = 'Acesso proibido';
} else if (idade >= 16 && idade <= 18) {
 acesso = 'Acesso liberado somente com acompanhante maior de idade';
} else {
 acesso = 'Acesso liberado';
}

// IF Ternario


// Versão abreviada do If / Else

// condicao ? bloco caso condicao seja true : bloco caso seja false;

// exemplo:
let x = 2;
x > 0 ? 'É maior do que zero' : 'Não é maior do que zero';
// Para if simples é maravilhoso pois se reduz a simplifica muito o codigo


// Switch

/* O switch é composto por um valor a ser avaliado, seguido de diferentes cases (caso,
em português). Podemos adicionar quantos quisermos, cada um contemplando um
cenário diferente.
Cada case deve terminar com a palavra-chave break para evitar que o próximo
bloco seja executado. */

switch (valor) {
  case valorA:
  // código a ser executado se a expressão for igual a valorA.
  // Da pra colocar IF aqui dentro da pra fazer quaisquer alteração q achar necesasria, faremos exercicios depois
  break;
  case valorB:
  // código a ser executado se a expressão for igual a valorB.
  default:
      // código a ser executado se nenhum dos casos for verdadeiro
}

// O break é importantiiiissimo pro funcionamento do switch



/*                      ---|| Mesa de trabalho ||---        */

// Com este exercício, vamos construir um if simples.

// Declare uma variável com o nome status. Atribua a ela um valor booleano: (true ou false).

// Em seguida, faça um if que avalie o valor contido nesta variável. Se o valor armazenado for true, imprima a seguinte mensagem no console: O valor é true - verdadeiro. Caso contrário, imprima a mensagem: O valor é false - falso.

let status = true
if (status == true) {
  console.log("O valor é true - verdadeiro")
} else {
  console.log("O valor é false - falso")
}

// Vamos brincar com as condições!

// Crie uma variável chamada linguagem, que terá uma string atribuída a ela. Em seguida, construa uma condicional if/else para que, se a variável estiver armazenando o valor "javascript", ela deve imprimir no console, o texto: "Estou aprendendo". Contudo, caso a variável esteja armazenando qualquer outra linguagem, imprima "Aprenderei mais tarde".

var linguagem = "javascript"

if (linguagem == "javascript") {
  console.log("Estou aprendendo")
  
} else {
  
  console.log("Aprenderei mais tarde")
}

var x = "Opa"
x == "Opa" ? console.log("Funcionando"):console.log("Nao funcionando")


switch ('alo') {
  case casal:
    console.log("Se cumpre o caso 1")
    break;
}

                //Mesa de trabalho
// 1) Crie uma função podeSubir() que receba dois parâmetros:
// - altura da pessoa;
// - se está acompanhada.

// Deve retornar um valor booleano (TRUE, FALSE) que indique se a pessoa pode
// subir ou não, baseado nas seguintes condições:

// a) A pessoa deve medir mais de 1.40m e menos de 2 metros.
// b) Se a pessoa medir menos de 1.40m, deverá ir acompanhada.
// c) Se a pessoa medir menos de 1.20m, não poderá subir, nem
// acompanhada.

function podeSubir(altura, comAcompanhante) {
  if (altura>=1.40 && altura<=2.00){
  console.log('true') 
  } else if (altura <1.40 && comAcompanhante == 'sim') {
    console.log('true')
  } else if (altura<1.20) {
    console.log('false')
  }
  else {
    console.log('false')
  }
}

podeSubir(1,20,"sim")
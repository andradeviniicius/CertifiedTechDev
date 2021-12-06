// Exemplo do conteudo
function nc(nome,sobrenome) {
  return nome+' '+sobrenome
}
function iniciais(nome,sobrenome) {
    return nome[0] + sobrenome[0];
}
function bomDia(nome, sobrenome, callback) {
    return 'Olá, '+callback(nome,sobrenome)
}
// console.log(bomDia('Amanda','Ferreira', iniciais))

// Exemplo do MDN
function greeting2(name) {
    console.log('Hi ' + name);
}

function greeting(name) {
    console.log('Hello ' + name);
  }
  
function processUserInput(callback) {
    var name = console.log('Please enter your name.');
    callback(name);
  }
  
  processUserInput(greeting2);

//  Micro desafios:

const andar = ()=>'carro anda';
const parar = ()=>'carro para';
function situacaoCarro(funcExterna) {
    return funcExterna()
}

console.log(situacaoCarro(andar))
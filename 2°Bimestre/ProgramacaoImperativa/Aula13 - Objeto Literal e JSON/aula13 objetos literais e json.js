let veiculo1 = {
    modelo: "Ford",
    cor: "branca",
    andar: function(){
        return "Carro"+this.modelo+" andando na cor "+this.cor
    }
}
let veiculo2 = {
    modelo: "Ford",
    cor: "branca",
    andar: function(){
        return "Carro"+this.modelo+" andando na cor "+this.cor
    }
}
let veiculo3 = {
    modelo: "Ford",
    cor: "branca",
    andar: function(){
        return "Carro"+this.modelo+" andando na cor "+this.cor
    }
}
console.log(veiculo3.andar())

// console.log(veiculo1.andar())

// Da pra acessar as informacoes acessando as propriedades da variavel carro (.modelo)
// Além da propriedade temos os metodos dos objetos literais
// .this

// Caso precisassemos de varios carros, seria problematico pois geraria varias linhas. Pra isso temos as funcoes construtoras!

function Carro(modelo, cor) {
    this.modelo = modelo
    this.cor = cor
    this.pular = function(){
        return `meu ${this.modelo} esta pulando`}
    }

let carro1 = new Carro("Fiat","Branco")
let carro2 = new Carro("Chevrolet","Vermelho")
let carro3 = new Carro("Fiat","Branco")

console.log(carro2.pular())
// JSON
// é um formato de texto utilizado 

let dadoCarro = {
    "cor":"branco",
    "placa":"AXC-1598",
    "qtdPortas":4
}
let strCarro = JSON.stringify(dadoCarro)
console.log(strCarro)

console.log("Testando arrays dentro de objetos literais")
let veiculo5 = {
    modelo: ["chevrolet","Ford"],
    cor: "branca",
    }

console.log(veiculo5.modelo[1])
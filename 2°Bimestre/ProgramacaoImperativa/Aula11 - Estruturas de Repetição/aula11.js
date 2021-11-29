// Principio basico é que ele se repita alterando um valor até que a condicao seja atendida

// Sintaxe:
// for (inicio ; condicao ; modificador) {
//	Codigo que será executado caso a condicao não seja atendida
// };

for (let volta = 1; volta <= 5; volta++) {
	console.log('Volta numero: ' + volta)	
}

//Repeticao com Arrays

const arrayNome = ["Marcos","João","Fulano","Ciclano"]

console.log(arrayNome.length)
for (let x = 0; x <= arrayNome.lenght; x++) {
    console.log('a')
}

let contador = 1;
while(contador<=5){
    console.log(contador,"Ola pessoal ")
    contador++
}


do{
    console.log(contador,"Ola pessoal ")
    contador++
} while(contador <= 5)

console.log( '')
console.log( '/////////////////////     --Micro desafios')
console.log( '')
// 1- Crie um loop utilizando for que se repita 5 vezes. Dentro de cada repeticao se deve mostrar n o console a mensagem "Olá mundo"
for (x=0;x<5;x++){
    console.log("Olá mundo")
}
console.log( '')
console.log('2- Contando numeros impares')
console.log( '')
// Crie um loop for de 1 a 10, em que exiba no console apenas o valor das repetições de números ímpares. Dica: A ideia é que nas repetições ímpares de 0 ao 10 (1,3,5,7,9) sejam mostrados os números das repetições no console.

for (let x =0;x<=10;x++) {
    if (x%2)
    console.log(x)
}

console.log( '')
console.log('3- Criando tabuada')
console.log( '')

function tabuada(a) {
    
    for (var x = 0; x<=10 ; x++   ) {
        
        let valorMultiplicado = x*a
        console.log(`${x} * ${a} = ${valorMultiplicado}`)
    }
}
tabuada(7)
// Crie um array de números pares, e utilizando a função .map() nesse array, crie um novo array com apenas números ímpares.

// const pares = [2,4,6,8,10]

// const impares = pares.map(function(valor,index) {
//     return valor - 1
// })
// console.log(impares)

const pares = [2,4,6,8,10]

const impares = pares.map((valor, index) => {{
    return valor - 1
}})
console.log(impares)

// Crie um array de nomes, que possua dois índices com o nome Maria. Utilize o .filter() para obter apenas esses dois índices com o nome Maria.

const nomesMaria = ['Maria Paula','Ana maria','João paulo','Henrique fogaça']

const apenasMaria = nomesMaria.filter(function(valor,index){
    let a = 'maria' 
    return valor.toLowerCase().indexOf(a)>=0
})
console.log(apenasMaria)

// Crie um array de números e utilize a função .reduce() para devolver uma string com os números formatados.

const numeros = [1,2,3,4,5]

const reduce = numeros.reduce((resultado, valor) => {
    return valor.join(' - ')
})

console.log(numeros)
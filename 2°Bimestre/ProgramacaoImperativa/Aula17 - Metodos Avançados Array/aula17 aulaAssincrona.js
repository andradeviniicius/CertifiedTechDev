let listaNumeros = [1,2,4,5,6,7]



// map
let listaNumeroDobro = listaNumeros.map(function(valor,index){
    return valor * 2
})
console.log(listaNumeroDobro)



// filter
let listaNumerosFiltrados = listaNumeros.filter(function(valor,index) {
    return valor >= 3
})
console.log(listaNumerosFiltrados)



// reduce
let listaNumeroSomados = listaNumeros.reduce(function(resultado,valor) {
    return resultado + valor;
});
console.log(listaNumeroSomados)

// forEach

listaNumeros.forEach(function(valor,index){
    console.log("o valor é: "+valor+ " e a sua posição é "+ index)
})
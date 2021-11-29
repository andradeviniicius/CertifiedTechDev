console.log('')
console.log('Ativide    1: Utilizando for adaptar o seguinte codigo:')
console.log('')

console.log('function paraLetrasMaiusculas(valor) {')
console.log('console.log(valor[0].toUpperCase())')
console.log('console.log(valor[1].toUpperCase())')
console.log('console.log(valor[2].toUpperCase())')
console.log('console.log(valor[3].toUpperCase())')
console.log('console.log(valor[4].toUpperCase())')
console.log('}')

console.log('')
console.log('Resultado:')
console.log('')
const filmesSeries = ["star wars", "matrix", "mr. robot", "o preço do amanhã", "a vida é bela"]

function paraLetrasMaiusculas(a) {
    for (let x = 0;x<a.length; x++) {
        
        console.log(a[x].toUpperCase())
    }
}
paraLetrasMaiusculas(filmesSeries)

console.log('')
console.log('Agora precisamos modificar a função passagemDeElemento()')
console.log('')
console.log(`função passagemDeElementos(array1, array2) {
    array1.push(array2.pop(). toUpperCase())
    array1.push(array2.pop(). toUpperCase())
    array1.push(array2.pop(). toUpperCase())
    array1.push(array2.pop(). toUpperCase())
    array1.push(array2.pop(). toUpperCase())
    array de retorno1
    }`)
    
    console.log('Original:')
    const array1 = ['carro','moto','caminhao']
    const array2 = ['totó','lucas','henrique','vini']
    console.log(array1)
    console.log(array2)
    
    function passagemDeElementos(a,b) {
        const aa = a
        const bb = b
        
        for(let x = 0; x<=(bb.length)  ;x++  ) {
            a.push(b.pop())
        }
        console.log('Alterados a e b respectivamente:')
        console.log(a)
        console.log(b)
        
    }
    passagemDeElementos(array1,array2)
    
    
    console.log('')
    console.log('Agora precisamos modificar a função compare()')
    console.log(`função compare(array1, array2){}`)
    console.log('Segue:')
    console.log('')
    
    const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
    const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function compareFor(a,b) {
    for (let x = 0 ;  x<b.length  ; x++ ) {
        
        if (a[x]==b[x]) {
        console.log(`${x+1}° elemento é igual`)
    } else {
        console.log(`${x+1} elemento é diferente`)
    }
}
}
compareFor(asiaScores,euroScores)
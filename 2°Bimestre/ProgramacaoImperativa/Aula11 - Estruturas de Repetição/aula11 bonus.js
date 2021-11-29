
//  Duas modalidades para definir o vencedeor:
// Maior pontuacao média
// Maior e-tip(a maior pontuação entre as 5 notas de cada participante).

/*

1° - Determine qual seria a maneira ideal de representar cada participante com
suas pontuações.
*/
const A =[5, 8, 4, 9, 5]
const B =[8, 7, 8, 6, 8]
const C =[7, 5, 10, 8, 3]

/*
2. Crie uma função pontuacaoMedia à qual receba um participante por parâmetro
e deve calcular e devolver a pontuação média dele.
*/
function pontuacaoMedia(a) {
    let soma = 0
    for(let x = 0; x<a.length; x++){   
        soma += a[x]        
    }
    soma /= a.length
    console.log(`Média: ${soma}`)
}
pontuacaoMedia(A)
/*
3. Crie uma função pontuacaoMaior que receba um participante por parâmetro e
deve calcular e devolver a pontuação mais alta que o participante tem. */

function pontuacaoMaior(a) {
    let valor = 0
    for (let x = 0 ;  x<a.length  ; x++ ) {
        for(let y = x+1; a[x]<a[y]; y++){
            
        }
    }
}
pontuacaoMaior(A)
/*
4. Logo nosso líder tecnológico nos pede para criar essas duas funções, geramos
uma nova funcionalidade chamada competição que receberá os 3 participantes
por parâmetros, executará as duas funções criadas anteriormente para calcular
as médias e pontuações mais altas de cada uma e deve anunciar (mostrar pelo
console) o vencedor de cada modalidade de pontuação. */
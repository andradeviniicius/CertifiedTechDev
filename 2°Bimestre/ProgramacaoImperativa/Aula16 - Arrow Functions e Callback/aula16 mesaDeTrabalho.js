const FizzBuzz = (number1,number2,subst1,subst2) => {
    if ((typeof(number1) !== 'number')||(typeof(number2) !== 'number')) {
        console.log(
            `Tipo de dado inválido, favor seguir o esquema abaixo:
                FizzBuzz(PrimeiroNumero, SegundoNumero, textoAsubstituirPrimeiroNumero,textoAsubstituirSegundoNumero)
            `
            )
    } else if ((typeof(subst1) !== 'string')||(typeof(subst2) !== 'string')) {
        console.log(
            `Tipo de dado inválido, favor seguir o esquema abaixo:
                FizzBuzz(PrimeiroNumero, SegundoNumero, textoAsubstituirPrimeiroNumero,textoAsubstituirSegundoNumero)
            `
            )
    } else {
        for (x=1;x<=100;x++) {
            if (x%number1 ===0 && x%number2 ===0){
                console.log(subst1)
            } else if (x%number1 === 0) {
                console.log(subst2)
            } else if (x%number2 === 0) {
                console.log(subst1+''+subst2)
            } else {
                console.log(x)
            }
        }
    }}


FizzBuzz(12,24,'a','teste2')

/*A função deve atender aos seguintes requisitos:
-Você deve imprimir os números de 1 a 100;
✅Concluido✅
-Se o número a ser impresso for um múltiplo de seu PRIMEIRO parâmetro, você deve imprimir a palavra “Fizz” em vez do número correspondente;
✅Concluido✅
-Se o número a ser impresso for um múltiplo do seu SEGUNDO parâmetro, você deve imprimir a palavra "Buzz" em vez do número correspondente;
✅Concluido✅
-Se o número for um múltiplo de AMBOS os parâmetros, você deve imprimir a palavra “FizzBuzz”.
✅Concluido✅

    Extra: Como crédito extra, pense em como otimizar seu programa para que as palavras sejam passadas de forma dinâmica e seja você quem decide quais palavras ele deve dizer.
    ✅Concluido✅
 */
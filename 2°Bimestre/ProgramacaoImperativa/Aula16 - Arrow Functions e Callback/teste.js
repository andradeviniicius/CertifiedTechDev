function FizzBuzz(number1,number2) {
    if ((Number.isInteger(number1) && (Number.isInteger(number2)))) {
          
        for (x=0;x<=100;x++) {
            if (x==1) {
                x = 'fizz'
                return x
            } else {
                return x            
            }
        }
        // x ser ultimo numero é uma ideia
        // ou fazer uma formula pra se for multiplo retornar true

    } else {

        return 'Erro, tipo de dado invalido'
    }

}

console.log(FizzBuzz(1,1))

/*A função deve atender aos seguintes requisitos:
-Você deve imprimir os números de 1 a 100;
✅Concluido✅
-Se o número a ser impresso for um múltiplo de seu PRIMEIRO parâmetro, você deve imprimir a palavra “Fizz” em vez do número correspondente;
❌Em processo❌
-Se o número a ser impresso for um múltiplo do seu SEGUNDO parâmetro, você deve imprimir a palavra "Buzz" em vez do número correspondente;
❌Em processo❌
-Se o número for um múltiplo de AMBOS os parâmetros, você deve imprimir a palavra “FizzBuzz”.
❌Em processo❌

    Extra: Como crédito extra, pense em como otimizar seu programa para que as palavras sejam passadas de forma dinâmica e seja você quem decide quais palavras ele deve dizer.
 */

            

        
        // m = n * k
        // 35 = 7 * 5
        
        // 1 = 

        // 20 = 2 * x
        // x = 20/2
        // x = 10
        // 20 = 2 * 10
        // 20 = 20
        // true

        // 20 = 3 * x
        // x=20/3
        // x = 6,66666
        // 20 = 19,98
        // false





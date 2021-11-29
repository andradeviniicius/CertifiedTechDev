// Em aula foi feito os exercicios da aula10 utilizando laços de repetição

// Depois houve a mesa de trabalho onde tinha que executar esse exercicio:
/* Descrição do problema
É necessário determinar o vencedor de um concurso de Stand-Up composto por 3
apresentações por participante.
O público, no máximo 100 pessoas, votou quem eles acham que era melhor no final
de cada etapa. Por exemplo, Alice sobe, se apresenta e desce; Bob sobe, aparece e
desce.
Após a apresentação, o público vota indicando quem eles acham que ganhou aquela
rodada. Após isto, continua a próxima rodada assim como a primeira. E finalmente a
terceira.

Faça uma função que determine automaticamente quem será o vencedor*/

const alicia = ["Alicia",23, 69, 32];
const bob = [ "Bob",12, 67, 43];

function encontrarGanhador (a,b) {
    let pontosA = 0;
    let pontosB = 0;
    let vencedor = 0;


    for (let x = 1  ; a.length > x    ;    x++) {
        if (a[x]>b[x]) {
            pontosA++;
        } else if (b[x]>a[x]) {
            pontosB++;
        } if (pontosA > pontosB) {
            vencedor = a[0]
        } if (pontosB > pontosA) {
            vencedor = b[0]
        }
    }

    console.log('Pontuação do Primeiro competidor: '+pontosA);
    console.log('Pontuação do Segundo competidor: '+pontosB);
    console.log('Vencedor: '+vencedor);}

encontrarGanhador(alicia,bob)
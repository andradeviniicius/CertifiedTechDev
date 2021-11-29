// Operando Logicamente
// É chegado o momento de colocar em prática todas essas informações sobre os operadores e como podemos utilizá-los para criar sequências lógicas e de comparação. Para isso, vamos realizar uma série de exercícios que nos ajudarão a fixar os conceitos aprendidos até aqui.
// Ex1. O que cada expressão retorna?
// Dê uma olhada nestes exemplos e pense sobre o que cada um retorna:
// ------------------------------
!true
// retorna false
!false
// retorna true
!!false
// retorna false
!!true
// retorna true
!1
// retorna false
!!1
// retorna true
!0
!!0
!!"" 

let a= 5 ;
let b = 9;

a < 10 && a!==5
// Retorna false
a>9 || a===5
// Retorna true
!(a===b)
// Retorna true


// Ex2. O que cada expressão retorna?
// Sem testar no console, o que você acha que cada uma destas expressões irá retornar? Elas são true ou false?

let x = 10
let y = "a"
y==="b" || x >= 10
// Retorna true

x = 3
y = 8
!(x == "3" || x === y) && !(y !== 8 && x <= y)
// retorna False
/*Prova real*/console.log(!(x == "3" || x === y) && !(y !== 8 && x <= y))


let str = ""
let msg = "haha!"
let eBonito = "false"

// Não sei se string retorna false ou true
console.log(!((str || msg) && eBonito))
// Retorna true por isso resulta false kkk

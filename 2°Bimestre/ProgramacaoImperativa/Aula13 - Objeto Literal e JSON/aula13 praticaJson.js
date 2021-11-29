let json = {
    "nome":"vinicius",
    "apelido":"dade",
    "idade":21,
    "usuario":"andradeviniicius",
    "email":"viniciusdandrade01@gmail.com",
    "linguagens":["PHP","Javascript","Dart"],
    "disponibilidadeParaViajar":true
}

// - **json.stringify( )**
// String para JSON
let strJson = JSON.stringify(json)
console.log(strJson)

// - **json.parse( )**
// Ce tem um JSON e transforma em um formato javascript no caso do exemplo em objeto literal
let oblJson = JSON.parse(strJson)
console.log(oblJson)
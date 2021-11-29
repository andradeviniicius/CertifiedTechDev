// Número da conta (somente números)
// ● Tipo de conta (conta corrente ou poupança em $)
// ● Saldo em $ (valor apenas)
// ● Titular da conta (nome completo)


function newConta(numeroDaConta,tipoDeConta,saldo,titular) {
    this.numeroDaConta = numeroDaConta
    this.tipoDeConta = tipoDeConta
    this.saldo = saldo
    this.titular = titular
}

let cliArray = [
    new newConta (5486273622,	"Conta Corrente",	27771,	"Abigael Natte"),
    new newConta (1183971869,	"Conta Poupança",	8675	,"Ramon Connell"),
    new newConta (9582019689,	"Conta Poupança",	27363,	"Jarret Lafuente"),
    new newConta (1761924656,	"Conta Poupança",	32415,	"Ansel Ardley"),
    new newConta (7401971607,	"Conta Poupança",	18789,	"Jacki Shurmer"),
    new newConta (630841470,	"Conta Corrente",	28776,	"Jobi Mawtus"),
    new newConta (4223508636,	"Conta Corrente",	2177	,"Thomasin Latour"),
    new newConta (185979521,	"Conta Poupança",	25994,	"Lonnie Verheijden"),
    new newConta (3151956165,	"Conta Corrente",	7601	,"Alonso Wannan"),
    new newConta (2138105881,	"Conta Poupança",	33196,	"Bendite Huggett")
]

let banco = {
    
    clientes : cliArray,
    consultarCliente : function (cliente) {
        for (x=0;x<this.clientes.length;x++) {
            if (cliente === this.clientes[x].titular) {
                return this.clientes[x]
            }
        }  
    },
    deposito : function (titular,entrada){
        let x = this.consultarCliente(titular)
        let y = x.saldo
        x.saldo += entrada
        console.log(`
        Depósito realizado!
        Você tinha:
            ${y}
        Agora você tem:
            ${x.saldo}`
        )
    },
    saque : function (titular,valor){
        let x = this.consultarCliente(titular)
        let y = x.saldo

        x.saldo -= valor

        console.log(`
        Saque realizado!
        Você tinha:
            ${y}
        Agora você tem:
            ${x.saldo}`
        )
    }
}

banco.saque('Lonnie Verheijden',2500)



/*
1Pense na melhor forma de representar tais contas, e por quê? (discutir coma
equipe sobre as diferentes estruturas e qual é a mais conveniente)

2. Uma vez decidido qual será o tipo de dados para representar as contas das
contas, crie uma conta de teste e verifique se as propriedades mencionadas
acima são criadas corretamente.

3. Agora que sabemos como representar usuários e suas contas, o cliente nos
forneceu uma lista de contas que devemos ser capazes de criar. Para isso,
devemos gerar uma função construtora que facilite a criação das contas
bancárias correspondentes mais rapidamente.

O líder tecnológico está muito feliz com nosso trabalho até agora. A essa altura já
temos um banco de dados com 10 clientes do banco, provavelmente alojados em 10
variáveis diferentes (assumindo que cada variável é um objeto que foi criado com
uma função construtora). A partir disso, eles nos pedem as seguintes características.

4. A partir dos 10 usuários, gereuma lista onde todos eles convergem (lista de
objetos)

5. Também nos pedem a criação de um objeto literal chamado banco que terá
uma propriedade chamada clientes, ele será composto pela lista de objetos
gerados no ponto anterior.

6. o objeto do banco criará um método chamado consultarCliente que receberá um
nome (titular) por parâmetro e deve pesquisar na lista de contas e retornar ao
objeto do cliente que corresponde a esse nome inserido.

7. Crie outro método chamado depósito que receberá como parâmetros, o titular
da conta e uma quantidade de dinheiro para depositar. O método deve chegar
à conta correspondente e, em seguida, adicionar a quantidade de dinheiro para
depositar o saldo da conta, então você deve dar um aviso pelo console com a
mensagem &quot;Depósito realizado, seu novo saldo é: xxx&quot; 
.
8. Crie um último método chamado saque que também receberá dois
parâmetros, o titular da conta e o valor a ser extraído. O método deve obter a
conta correspondente e subtrair o valor do saldo atual. Caso o resultado seja
inferior a 0, você deve imprimir uma mensagem através do console de &quot;Fundos
insuficientes&quot;,caso contrário você deve imprimir &quot;Extração feita com sucesso, seu
novo saldo é: xxx&quot;
*/
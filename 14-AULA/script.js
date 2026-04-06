/*
//MOSTRANDO UMA MENSAGEM NO CONSOLE
console.log("Para fazer a prova da Interpol, precisa falar inglês, fala alguma coisa em inglês aí: Deixa eu pensar, feijão com farinha")

//CAIXINHA DE ALERTA
alert("TESTE PARA VER SE FUNCIONA")

//CRIANDO VARIÁVEIS
var nome = "Calebe" //String ou cadeia
var numero = 7 //Int ou inteiro 
var salto = 1.68 // Float ou real
var thebest = true // bool ou lógico

//FUNÇÃO QUE MOSTRA O TIPO DA VARIAVEL
console.log(typeof(nome))

console.log("Seu nome é: " + nome)
console.log("Seu numero é: " , numero)
console.log("Seu pulo é: " , salto)
console.log("É o milior? =  " , thebest)

nome = 10
console.log(typeof(nome))

//OUTROS TIPOS DE VARIAVEL
var nulo = null
var indefinido = undefined
console.log(nulo)
console.log(indefinido)
*/


/*
//OPERADORES ARITMÉTICOS
//+ , - , * , / , % 

var a = 10 , b = 5

console.log("Soma:", a + b)
console.log("Subtração:", a - b)
console.log("Multiplicação:", a * b)
console.log("Divisão:", a / b)
console.log("Módulo:", a % b)

//OPERADORES LOGICOS
// E , OU , NÃO
//&& , || , !

var verdade = true, mentira = false

console.log(verdade && mentira)
console.log(verdade || mentira)
console.log(verdade && !mentira)

// OPERADORES RELACIONAIS
// >, <, >=, <=, ==, !=, ===, !==

var x = 65, y = 32, z = "65"

console.log(x > y)
console.log(x < y)
console.log(x >= y)
console.log(x <= y)
console.log(x == y)
console.log(x != y)

// Verificando valor e tipo
console.log(x === z)
console.log(x !== y)
*/

/*
//DESVIOS CONDICIONAIS

//SE = IF

var estaVivo = undefined

//primeira comparação
if (estaVivo == true) {
    console.log("Parabéns, você está vivo")
}
//segunda comparação, caso a primeira dê errado
else if (estaVivo == undefined) {
    console.log("Você não tá nada")
}
//entra aqui, caso todas as outras comparações deem errado
else {
    console.log("Infelizmente, você foi de arrasta")
}

//SWITCH = ESCOLHA

var camisa = "Laranja"

switch (camisa) {
    case "Azul":
        console.log("Você ganhou um voucher")
        break
    case "Branco":
        console.log("Você ganhou um body splash da Virginia")
        break
    case "Vermelho":
        console.log("Você ganhou uma Ferrari")
        break
    default:
        console.log("Camisa inválida e feia, vá trocar")
        break

}
*/

/*
// PROMPT - INTERAGE COM O USUÁRIO E COLETA UM VALOR
prompt("Digite seu nome:")

var time = prompt("Me diga, pra quem você torce?")

console.log("Seu time é: ", time)
*/

var caixa1 = prompt("Digite o tamanho da caixa 1: ");
var caixa2 = prompt("Digite o tamanho da caixa 2: ");
var caixa3 = prompt("Digite o tamanho da caixa 3: ");

var viagens 

if ((caixa1 > caixa2) > caixa3) {
    viagens = 2
    console.log("Quantidade de viagens: ", viagens)
}
if ((caixa1 == caixa2) && (caixa1 > caixa3)) {
    viagens = 1
    console.log("Quantidade de viagens: ", viagens)
}
if ((caixa1 + caixa2) > caixa3) {
    viagens = 3
    console.log("Quantidade de viagens: ", viagens)
}

console.log("Número de viagens: " + viagens)
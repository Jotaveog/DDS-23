var caixa1 = prompt("Digite o tamanho da caixa 1: ");
var caixa2 = prompt("Digite o tamanho da caixa 2: ");
var caixa3 = prompt("Digite o tamanho da caixa 3: ");

var viagens 

if ((caixa1 > caixa2) > caixa3) {
    viagens = 1
    console.log("Quantidade de viagens: ", viagens)
}
if ((caixa1 == caixa2) && (caixa1 > caixa3)) {
    viagens = 3
    console.log("Quantidade de viagens: ", viagens)
}
if ((caixa1 + caixa2) > caixa3) {
    viagens = 2
    console.log("Quantidade de viagens: ", viagens)
}

console.log("Número de viagens: " + viagens)
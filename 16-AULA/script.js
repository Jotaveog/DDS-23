console.log("Vasco da Gama");

// FUNÇÕES
// Só executa 
function teste() {
    console.log("Funcionou aqui");
}
teste()

console.log(teste);

// Com parâmetros
function teste2(parametro) {
    console.log("O parametro é " + parametro);
}

teste2("Arroz")

// com retorno
function media(n1, n2) {
    var resultado = (n1 + n2) / 2
    return resultado 

}    

console.log(media(3, 4));

// Guarda o valor do retorno em uma variável
var mediaFinal = media(8, 6);
console.log("Média: ", mediaFinal);


// FUNÇÕES ANÔNIMAS
// É uma função sem nome, geralmente atribuída a uma variável

var mensagem = function() {
    console.log("Oi, meu chapa");
}

console.log(mensagem);

// Apenas guarda o texto da função, não executa
mensagem 

// Executa a função
mensagem()


// Arrow Function

const multiplicar = (x, y) => {
    return x * y
}

console.log("Sua multiplicação deu: ", multiplicar(6, 7));

// mais  menor ainda 
const dobro = numero => numero * 2

console.log("O dobro é: ", dobro(4));







/*
console.log("Olá, mundo!")

// LAÇOS DE REPETIÇÃO

// FOR = PARA 
for (var i = 0; i < 5; i++) {
    console.log("Estou aqui no laço")
}

console.log("Finalizei o loop")

// WHILE = ENQUANTO 

var c = 1

while (c <= 10) {
    console.log("Oi, meu chapa")
    c++
}

console.log("Finalizei o loop")

// ARRAY 

var array =["Neymar", 10, true, 5.0]

// mostrar o todo o array 
console.log(array)

// mostra um elemento especifico do array 
console.log(array[2])



// LISTA DE TIMES TOP 5 DO MUNDO
var times = ["Real Madrid", "Barcelona", "Bayern de Munique", "Liverpool", "Manchester City"]

for(var i = 0; i < 2; i++) {
    console.log(times[i])
}

console.log("------------------------------")

for(var index in times) {
    console.log(times[index])
}

// array inicial
var frutas = ["Maçã", "Banana", "Laranja"]

// mostra o array
console.log(frutas);

// adiciona no fim do array
frutas.push("Abacaxi")

// mostra o array 
console.log(frutas);

// unshift = adiciona no começo do array
frutas.unshift("Morango")

// mostra o array 
console.log(frutas);

// pop = remove o ultimo elemento do array
var frutaTirada = frutas.pop() 
console.log("Fruta removida: " + frutaTirada);

// shift = remove o primeiro elemento do array
var exPrimeiraFruta = frutas.shift()
console.log("Ex primeira fruta : " + exPrimeiraFruta);


// descobrir o index de um elemento 
var index = frutas.indexOf("Banana")
console.log("Index da Banana: " + index);

// descobrir se há um valor específico no array
console.log("Tem Laranja? " + frutas.includes("Laranja"));
console.log("Tem Jamaral? " + frutas.includes("Jamaral"));

// ordena os elementos
frutas.sort()
console.log(frutas);

// inverte a ordem dos elementos
frutas.reverse()
console.log(frutas);

// converte o array em string
console.log("Convertido: ", frutas.toString());

// junta um array
console.log("Convertido: ", frutas.join(" - "));

// SLICE - copia partes do array
var copiaParte = frutas.slice(0, 2)
console.log("Copia parte do array: ", copiaParte);

// SPLICE - remove ou substitui elementos do array
var removidos = frutas.splice(1, 2, "Abacate", "Melancia")
console.log("Frutas após splice: ", frutas);

// PRA ADICIONAR 
// (de onde começa, quantos elementos remover, elementos a adicionar)
frutas.splice(1, 0, "Pitaya", "Goiaba", "Manga")
console.log("Frutas após adicionar com splice: ", frutas)

// 
frutas.splice(2,1, "Arroz")
console.log("Frutas após substituir com splice: ", frutas)

*/
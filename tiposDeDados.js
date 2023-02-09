// String
let container_verde = "Texto"; // strings servem para armazenar texto no java script

console.log("container_verde: " + typeof(container_verde))
// Inteiro
let container_azul = 10; // Numeros inteiros (numero sem virgula)
console.log("container_azul: " + typeof(container_azul))
let container_azulEscuro = -10;
console.log("container_azulEscuro: " + typeof(container_azulEscuro))

// Float
let container_branco = 1.25; // Numeros não inteiros
console.log("container_branco: " + typeof(container_branco))

// Boolean // true or false
let container_amarelo = true; // 1 ou verdadeiro
console.log("container_amarelo: " + typeof(container_amarelo))

let container_amareloClaro = false; // 0 ou falso
console.log("container_amareloClaro: " + typeof(container_amareloClaro))

// Array
let navio = [];

navio[0] = container_verde;
navio.push(container_azul);
navio.push(container_azulEscuro);
navio.push(container_branco);
navio.push(container_amarelo);
navio.push(container_amareloClaro);

console.log("navio: " + typeof(navio));

// Object
let carro = {};
carro = {
    cor: "Preto",
    marca: "Ford",
    modelo: "Focus",
    ano: "2009"
};
console.log("Carro: " + typeof(carro));

navio.push(carro);

// Null
container_azulEscuro = null;
console.log("container_azulEscuro: " + typeof(container_azulEscuro));

// Undefined
let container_preto;
console.log("container_preto: " + typeof(container_preto));

// navio.push(container_preto);

// Array

console.log("Navio: " + navio);
console.log("Carro: " );
console.log(navio[6]);

let focus = navio.pop();

console.log("Navio: " + navio);
console.log("Carro: " );
console.log(focus);

// Object

console.log("Focus ano: ");
console.log(focus.ano)

focus.placa = "xxx-xxxx";

console.log(focus)

focus.ano = "2010";
console.log("Focus ano: ");
console.log(focus.ano)


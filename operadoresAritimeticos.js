// x = (a + b - c) / d * e
// se x for par soma 1, senão subtrai 1

// Definindo variáveis

let a = 1222;
let b = 22352;
let c = 34353;
let d = 4334;
let e = 53453;

// Soma: +
let x = a + b;
console.log("Soma " + "(" + a + " + " + b + "):" , x);

// Subtração: -
let old_x =  x;
x -= c; // x = x - c;
console.log("Subtração " + "(" + old_x + " - " + c + "):" , x);

// Divisão: /
old_x = x;
x = x / d;
console.log("Divisão " + "(" + old_x + " / " + d + "):" , x);

// Multiplicação: *
old_x = x;
x = x * e;
console.log("Multiplicação " + "(" + old_x + " * " + e + "):" , x);

// Módulo (Resto): %
x = parseInt(x); // parseInt transforma um numero fracionado em um numero inteiro

let mod = x % 2;

console.log("Modulo (resto) " + "(" + x + " % 2):" , mod);

// Incremento (+1): ++
// Decremento (-1): --
old_x = x;

if (mod === 0){ // x é par
    // Incremento
    x++ // x = x + 1 // x += 1 
    console.log("Incremento " + "(" + old_x + "++): ", mod)
} else { // x é impar
    //Decremento
    x-- // x = x - 1 // x -= 1 
    console.log("Decremento " + "(" + old_x + "--): ", mod)
}

console.log("Resultado Final: " , x)







// condicionais: if / else

// operadores relacionais: ==, !=, >, <

// operadores lógicos: && , ||, !

// Definir minhas variáveis
let jarra = 100; // 100mls de cafe

let cafeteira = { // objeto
    po: true,
    agua: true,
    ligada: true,
    cafe_pronto: true

}
let xicara = 0;


if (jarra < 100) {  // Fazer café
    // preciso fazer café
    console.log("Fazendo um novo café quentinho")
    if(cafeteira.po != true){
        cafeteira.po = true
    }
    if(cafeteira.agua == false){
        cafeteira.agua = true
    }
    if(cafeteira.ligada == false){
        cafeteira.ligada = true
    }
    cafeteira.cafe_pronto = true;
    jarra = 100;
    
} else if(xicara == 0){         // Tomar cafe
    // encher minha chicara
    if(cafeteira.cafe_pronto == true){
        xicara = 100;
        jarra -= 100;
    }
    console.log("Café quentinho na xícara, que tal um golinho de felicidade?")

}else if(jarra > 100){  // Jarra derramando
    // alerta de jarra derramando
    cafeteira.ligada = false;
    console.log("Jarra está cheia demais, cuidado")

} else {   // Manter meu café quente
    // aquecer o cafe
    cafeteira.ligada = true;
    console.log("Estamos mantendo o seu café quentinho...")

}





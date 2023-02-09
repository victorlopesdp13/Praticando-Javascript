// Calculo dos ingredientes
function calculaIngrediente(){
    let ing1 = 1.00;
    let ing2 = 2.00;
    let ing3 = 3.00;

    let preco_ing = ing1+ ing2 + ing3;
    console.log("Valor dos Ingredientes: ", preco_ing)

    return preco_ing;
}
// Calculo da porcentagem da confeiteira

function calculaConfeiteira(preco_conf) {
    let porc_conf = 30;
    preco_conf += preco_conf * porc_conf / 100;
    console.log("Valor da Confeiteira: ", preco_conf);

    return preco_conf;
}
// Calculo das despesas  de produção
function calculaDespesas(preco_desp){
    preco_desp += 5; // preco_final = preco_final + 5;
    console.log("Valor das Despesas: ", preco_desp)

    return preco_desp;
}
// Calculo dos custos fixos
function calculaCustos(preco_cust){
    preco_cust += 10;
    console.log("Valor dos Custos: ", preco_cust);

    return preco_cust;
}
// function arrow
// calculaCustos = (preco_cust) => preco_cust += 10;


// Calculo do meu lucro 
/*function calculaLucro(preco_luc){
    let lucro = 0.25;
    preco_luc += preco_luc * lucro;
    console.log("Valor dos Lucros: ", preco_luc)

    return preco_luc;
}*/
// function arrow
calculaLucro = (preco_luc) => {
    let lucro = 0.25;
    preco_luc += preco_luc * lucro;
    console.log("Valor dos Lucros: ", preco_luc)

    return preco_luc;
}



/*
    ------------------------------------------------------------------------
*/ 

let preco_final = calculaIngrediente();
preco_final = calculaConfeiteira(preco_final);
preco_final = calculaDespesas(preco_final);
preco_final = calculaCustos(preco_final);
preco_final = calculaLucro(preco_final);


// Retornar o preço final 
console.log("Preço final de venda: ", preco_final)


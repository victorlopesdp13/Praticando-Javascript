// Biblioteca para capturar inputs de texto do usuário no console
const prompt = require("prompt-sync")({sigint: true}); 

// Receber o pedido
function recebePedido (){
    let pedido = {
        sabor: null,
        confeitos: null
    };
    // Qual o sabor do bolo?
    pedido.sabor = prompt("Qual o sabor do bolo? ")
    
    // Quais confeitos deseja?
    pedido.confeitos = prompt("Qual confeitos deseja? ")
   

    return pedido;
    
};

    
// Preparar o pedido
    // Separar ingredientes
    // Misturar Bolo
    // Colocar no forno
    // Confeitar
    
// Calcular o preço
    // Valor dos ingredientes
    // Valor da confeiteira
    // Valor das depesas de produção
    // Valor dos gastos fixos
    // Valor do lucro
    // Retornar preço final

// Entregar pedido
    // Exibir/ entregar bolo para cliente
    // exbir preço para o cliente

// Receber dinheiro
    // Receber dinheiro do cliente
    // Fechar pedido e agradecer ao cliente


let pedido = recebePedido();
console.log(pedido)
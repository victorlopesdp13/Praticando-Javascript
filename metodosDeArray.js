let cores = ["grena", "branco", "verde"];
console.log(cores)

// Incluir e remover elementos de um array: .push(), .pop()
console.log("---- Incluir e Removendo ----")
cores.push("azul");
console.log(cores)
let cor = cores.pop();
console.log(cores, cor)

// Percorrer um array: .forEach()
console.log("---- Percorrendo ----")
cores.forEach((cor, index) => {
    console.log(cor, index);
});

// Fazer transformações nos elem,entos do array: .map()
console.log("---- Transformação ----")
let cores_claras = cores.map((cor, ) => {
    return cor + " claro";
});
console.log(cores_claras)


// Filtrar elementos de um array: .filter()
console.log("---- Filtrar ----")
let cores_filtro = cores.filter(cor => cor.length == 6);
console.log(cores_filtro)


// Pesquisar valores em um array: .find()
console.log("---- Pesquisar Valores ----")
let cor_pesquisa = cores.find(cor => cor.length == 5);
console.log(cor_pesquisa)

// Pesquisar indexes em um array: .findIndex()
console.log("---- Pesquisar Index ----")
let cor_index = cores.findIndex(cor => cor.length == 5);
console.log(cor_index)


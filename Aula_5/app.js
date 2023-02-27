/*****************************************************
 * 24/02/2023 
 * Kauê Lima
 * Trabalhar com Array
 * Versão: 1.0
 *****************************************************/

//  Criação de um Array   
// [ ] <--> Siginifica que estamos manipulando um Array.
// { } <--> Siginifica que estamos manipulando um  formato JSON de dados.

const listName = ["Kaue","Heloisa","Denise","Maycon","Matheus"]; // Acabamos de criar um Array. Colocar os elementos dentro do array.
const listProducts = ["Teclado","Mouse","Monitor","Computador","Fone","Impressora","Scanner","WebCam"];

const products = {};
const listProductsJson = {};
/*
        Exemplo de JSON com estrutura de array.

        produtos =
        {
            [
                {nome : "Teclado", cor : "verde"}
                {nome : "Monitor", cor : "verde"}
                {nome : "Mouse", cor : "verde"}
            ]
        }
*/


const manipulandoElementos = function(){
    console.log(typeof(listName)) // **Quando usamos um typeof no array JS, ele encara o array como um objeto.**

console.log(listName) // Mostra todos os elementos do Array.

console.log(listName[0]) // Mostra o elemento especifico daquele indice.

console.log(typeof(listName[2])) // **typeof(array[indice])**  Mostra o tipo do dado, especifico do indice que pedimos.
// Podemos guardar qualquer tipo de dados em um array, mesmo eles estando juntos.

console.log(`O nome do usuario é ${listName[0]}`) // O JS trata com uma variavel comum, e faz a concatenação.

console.log(`A quantidade de itens do array é ${listName.length}`) // **(.length)** mostra a quantidade de itens que a dentro do array.



// Percorrendo o Array usando o WHILE
    let cont = 0; // Start da repetição
    let qtdItems = listName.length; // Stop da repetição 
    while(cont < qtdItems){ // Condição do while
        console.log(`Nome:${listName[cont]}`)
        cont++;
    }


// Percorrendo o Array usando o FOR
    let qtdItemsNames = listName.length; // Stop da repetição
    for(let cont = 0; cont < qtdItemsNames; cont++){  // criação do contador, condição do FOR e adição do cont para percorrer o array.
        console.log(`Nome:${listName[cont]}`)
    }


// Percorrendo o Array usando o FOREACH
   // For each é um metodo de um objeto do tipo ARRAY, tomar cuidado! 
   // Não é possivel fazer um foreach no JSON, porque somente o ARRAY tem indice.
   // Vantagens: Não devemos nos preucupar com indice, ele mesmo sabe quando começa e quando termina.
    listName.forEach(function(names){ // No JS, é um método de um objeto array, que retorna uma função de CallBack
        console.log(`Nome: ${names}`)
    });




// Adicionando elementos novos no ARRAY
   // **PUSH** adiciona um novo item no final do array.
        listName.push("Lara");
        console.log(listName);

    // **UNSHIFT()** Adiciona um novo indice no inicio do array, mudando a posição de todos os outros indices.
        listName.unshift("Lia")
        console.log(listName);
    
    // // **splice()** Adiciona um novo item no inicio do array.
    //     listName.splice(0,)




// // Removendo elementos no ARRAY
       //  **POP** - Remove o ultimo item que está no final do array.
             listName.pop();
             console.log(listName);

    //  **SHIFT** - Remove um elemento do início de um Array. Mudando também os indices do outros elementos.
                listName.shift();
                console.log(listName);

     // **SPLICE** - remove de um índice Array específico.
             listName.splice();
             console.log(listName);

};


const filtreElements = function(){
    // indexof() --> Retorna o  indice que o elemento solicitado está. Ele percorre posição por posição, e comparando se existe algo igual ao solicitado
     console.log(listProducts.indexOf("Fone de ouvido")); // Toda vez que ele encontrar, de 0 pra cima ele ira retornar o indice. Se ele não encontrar,
    // retornara -1

    if(listProducts.indexOf("WebCam") >= 0){
        console.log("O item pesquisado foi encontrado");

    }else{
        console.log("Não encontrei!");
    }


// SLICE --> Permite fazer uma copia do seu array, em outro array. Também permite que você selecione o inicio e o fim da cópia.
    const newProducts = listProducts.slice(0,2);
    const newProductsa = listProducts.slice();
    console.log(listProducts);
    console.log(newProducts);

}

const removeElement = function(array,nameItem){
    let newlist = array.slice();

    let name = nameItem;
    let indice = newlist.indexOf(name);
    let status;

    if(indice >= 0 ){ // Vamos usar o SPLICE(), permite remover o elemento do array pelo indice.
        newlist.splice(indice,1)
        status = true;
    }
    else{
        status = false;
    }
    if(status){
        return newlist;
    }
    else{
        return status;
    }
    
}

// console.log(removeElement(listProducts,"Monitor"))

const listagemProdutos = function(){

    let listProductsJson = {};

    let listProucts =
    [
        {nome : "Teclado DELL", valor :"R$199,99", quantidade : 50 },
        {nome : "Monitor DELL", valor : "R$190,00", quantidade : 70 },
        {nome : "Mouse DELL", valor : "R$90,00", quantidade : 10 }

    ]

    let listColor = ["Branco","Preto","Cinza"];
    let listTypeTeclado = ["Mecânico", "Semi-Mecânico", "Membrana"];
    let listTypeMonitor = ["LCD", "Full-HD", "4K","OLED"];


    // Adiciona Chaves (Opçoes no objeto)
    listProucts[0].cores = listColor;
    listProucts[0].tipo = listTypeTeclado;

    listProucts[1].tipo = listTypeMonitor;
    listProucts[1].cores = listColor;
    
    listProucts[2].cores = listColor;


    // Adiciona um chave nova, e coloca toda a estrutura dos produtos dentro dela.
    listProductsJson.products = listProucts;

    // Retorna todos os dados de produto(1° nível do dados JSON)
    listProductsJson.products.forEach(function(dadosProdutos){
        console.log(dadosProdutos.nome  )
        console.log("-" + dadosProdutos.valor  )
        if(dadosProdutos.cores != undefined){
            dadosProdutos.cores.forEach(function(dadosCores){
                console.log("--" +dadosCores)
            
            })
        }   
        if(dadosProdutos.tipo != undefined){
                dadosProdutos.tipo.forEach(function(dadosTipos){
                console.log("---" + dadosTipos)
            })
        }
       
        console.log("\n")
    })
   

    
    // // Mostrando o indice selecionado do JSON que está dentro de um array.
    // console.log(listProductsJson.products[1].nome)
    // console.log(listProductsJson.products[1].valor)
    // console.log(listProductsJson.products[1].cores[1])

}

listagemProdutos()



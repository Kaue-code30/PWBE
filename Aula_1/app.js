// Comentário em linha \\

/* 

comentario em bloco

*/


// Permite exibir uma mensagem no terminal
console.log("testando o node.js");



var readline = require("readline"); // Import da biblioteca que permite a entrada de dados via teclado


// Criamos um objeto ou variavel que vai ser especialista na entrada de dados via teclado 
var entradaDados = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});


//CallBack - Uma função de callback permite que na propia linha de programação seja uma variavel, um processamento,a chamada de um metodo possa acontecer um retorno
// de dados automaticamente, sem precisar sair deste processamento.

//Cria uma ineração com o usuario para entrada de dados. Após o usuario digitar o conteudo, o objeto permite retornar o conteudo digitado, para ser ultilizado,
//isso acontece atraves de uma função de Callback.
entradaDados.question("Digite algo: \n", function(nome){
    console.log("Bem-vindo, "+ nome + " ao servidor JS!");
});
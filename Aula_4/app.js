

var matematica = require("./modulo/tabuada.js");

const { stdout } = require("process");
var readline = require("readline");
var entradaDados = readline.createInterface({
    input:process.stdin,
    output:stdout
});


entradaDados.question("Digite o valor do Multiplicando: ",function(valor1){
    let multiplicando = valor1;

     entradaDados.question("Digite o valor do Maximo Multiplicador: ",function(valor2){
         let maxContador = valor2;
         console.log(matematica.calculaTabuada(multiplicando,maxContador));
     })
    
     
})
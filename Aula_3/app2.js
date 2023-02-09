// Método do professor fazer a calculadora.
//Data:03/02


var matematica = require("./modulo/calculadora.js")

//Import da biblioteca para entrada de dados e criação de um objeto
const { stdout } = require("process");
var readline = require("readline");
var entradaDados = readline.createInterface({
    input:process.stdin,
    output:stdout
});

entradaDados.question("valor 1: \n",function(numero1){
    let valor1 = numero1.replace("," , ".")

    entradaDados.question("Valor 2: \n",function(numero2){
        let valor2 = numero2.replace("," , ".")

        entradaDados.question("Escolha uma operação [Soma | Subtrair | MUltiplicar | Dividir] \n", function(tipoCalculo){
            let operacao =  tipoCalculo.toLowerCase()

            let resultado;
            

            if(valor1=="" || valor2=="" || operacao==""){
                console.log("Erro: Complete todos os campos!")   
                entradaDados.close();
            }
            else if(isNaN(valor1) || isNaN(valor2)){
                console.log("Os campos 1 e 2 devem ser preenchidos com números")
                entradaDados.close();
            }
            else{

                resultado = matematica.calcular(valor1,valor2,operacao);
                if(resultado == false){
                    entradaDados.close();
                }
                else{
                    console.log(resultado);
                }
                
            }
        })
    })
})
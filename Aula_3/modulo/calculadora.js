/****************************************************************
*Objetivo: Arquivo de funções para realizar calcuculos matematicos
*data: 03/02
*Autor: Kauê
*Versão: 1.0
*****************************************************************************/

//Realizar os calculos das 4 operações basicas


//toda entrada precisa vir de um argumento.
// function calcular(numero1, numero2, tipoCalculo){

//     let valor1 =  Number(numero1);
//     let valor2 = Number(numero2);
//     let operacao = tipoCalculo.toLowerCase();

//     let resultado;
//     let status = true;

//     // if(operacao == "soma" ){
//     //    resultado= valor1 + valor2;
//     // }
//     // else if(operacao == "subtrair"){
//     //    resultado =  valor1 - valor2;
//     // }
//     // else if(operacao == "multiplicar"){
//     //   resultado =   valor1 * valor2;
//     // }
  
//     // else{
//     //     console.log(
//     //         ("ERRO: A operação informada não é valida. Confira sua entrada.")
//     //     );
//     //     //fecha o objeto de entrada e encerra o programa.
//     // }



//     switch(operacao){
//         case "somar":
//             resultado = valor1 + valor2;
//             break;
//         case "Subtrair":
//             resultado =  valor1 - valor2;
//             break;

//         case  "Multiplicação":
//             resultado =   valor1 * valor2;
//             break;
//         case "divisao":
//             if(valor2 == 0){
//                 console.log("ERRO: não existe divisão por 0");
//                 status = false
//             }
//             else{
//                 resultado = valor1 / valor2;
//             }break;

//          default:  
//             console.log(
//                 ("ERRO: A operação informada não é valida. Confira sua entrada.")
//                         );
//     }   


    


//     //Operação para tratar a variavel resultdo quando nenhum calculo é realizado
//      if(resultado != undefined){
//          return resultado;
//      }
//      else{
         
//          return status;
        
//      }
    
// }




// mais ultilizadas hoje em dia.
const calcular =  function(numero1, numero2, tipoCalculo){
    let valor1 =  Number(numero1);
    let valor2 = Number(numero2);
    let operacao = tipoCalculo.toLowerCase();

    let resultado;
    let status = true;

    switch(operacao){
        case "somar":
            resultado = Somar(valor1,valor2);
            break;
        case "Subtrair":
            resultado =  Subtrair(valor1,valor2);
            break;

        case  "Multiplicação":
            resultado =   multiplicar(valor1,valor2);
            break;
        case "divisao":
            if(valor2 == 0){
                console.log("ERRO: não existe divisão por 0");
                status = false
            }
            else{
                resultado = divisao(valor1,valor2);
            }break;

         default:  
            console.log(
                ("ERRO: A operação informada não é valida. Confira sua entrada.")
                        );
    }   

    //Operação para tratar a variavel resultdo quando nenhum calculo é realizado
     if(resultado != undefined){
         return resultado;
     }
     else{
         
         return status;
        
     }
           }


//forma 3 (Arrow Function)
const Somar = (valor1,valor2) => valor1 + valor2;
const Subtrair = (valor1,valor2) => valor1 - valor2;
const multiplicar = (valor1,valor2) => valor1 * valor2;
const divisao = (valor1,valor2) => valor1 / valor2;

// Exporta uma função para ser ultilizada em outro arquivo.
module.exports={
    calcular
}

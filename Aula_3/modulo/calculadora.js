/****************************************************************
*Objetivo: Arquivo de funções para realizar calcuculos matematicos
*data: 03/02
*Autor: Kauê
*Versão: 1.0
*****************************************************************************/

//Realizar os calculos das 4 operações basicas


//toda entrada precisa vir de um argumento.
function calcular(numero1, numero2, tipoCalculo){

    let valor1 =  Number(numero1);
    let valor2 = Number(numero2);
    let operacao = tipoCalculo.toLowerCase();

    let resultado;

    if(operacao == "soma" ){
       resultado= valor1 + valor2;
    }
    else if(operacao == "subtrair"){
       resultado =  valor1 - valor2;
    }
    else if(operacao == "multiplicar"){
      resultado =   valor1 * valor2;
    }
    else if(operacao == "divisao"){
       resultado = valor1 / valor2;
    }
    else{
        console.log(
            ("ERRO: A operação informada não é valida. Confira sua entrada.")
        );
        entradaDados.close(entradaDados);//fecha o objeto de entrada e encerra o programa.
    }


    //Operação para tratar a variavel resultdo quando nenhum calculo é realizado
    if(resultado != undefined){
        return resultado;
    }
    else{
        return false;
    }
}







// Exporta uma função para ser ultilizada em outro arquivo.
module.exports={
    calcular
}

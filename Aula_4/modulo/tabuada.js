/************************************************************
* Realizar o calculo de uma tabuda, tendo duas entradas;
* 09/02;
* Kauê Lima;
* 1.0
************************************************************/



const calculaTabuada = function(multiplicando, maximoMultiplicador){
    let tabuada = Number(multiplicando);
    let maxContador = Number (maximoMultiplicador);
    
    let cont = 0; // Start da repetição
    let resultado;
    let status = true;


    if(tabuada == 0 || maxContador == 0){
        status = false;
    }
    else if(isNaN(tabuada) || isNaN(maxContador)){
        status = false
    }

    else{

        // while(cont <= maxContador){
        //     resultado = tabuda * cont;
        //     console.log(tabuda + " x " + cont + " = " + resultado)
        //     cont++;
        // }

        for(let cont = 0; cont <= maxContador; cont++){
            resultado = tabuada * cont;
            console.log(`${tabuada} x ${cont} = ${resultado}`)
        }
    }

return status;
}; 





module.exports = {
    calculaTabuada
}
/*************************************
 * Autor: Kauê Lima
 * Data: 03/03, 10/03/2023
 * Assunto:Array e JSON
 * Professor: Marcel
------------------------------------------------------------------------
    // Conceito de API 
    O HTTP ultiliza verbos para representar as formas de REQUEST
    -----> GET (Receber dados)
    ----> POST (Inserir novos dados)
    ---> DELETE (Remover Dados existentes)
    --> PUT (Atualizar Dados existentes)

OBJETIVO:  Criar uma APi para a manipulação de estados e cidades.

Node -> Vamos ultilizar o 
        Express --> dependencia do Node, que permite a integração entre protocolo http com o código
        (npm install express --save)

        Cors --> Gerenciador de permissões para o protocolo HTTP
                npm install cors --save (vai adicionar alguns arquivos novos)

        Body parse - É uma dependencia que permite manipular dados enviados pelo body da requisição.
                    npm install body-parser --save 
------------------------------------------------------------------------ */ 
// Conceito de API 
/* 
*
    O HTTP ultiliza verbos para representar as formas de REQUEST
    -----> GET (Receber dados)
    ----> POST (Inserir novos dados)
    ---> DELETE (Remover Dados existentes)
    --> PUT (Atualizar Dados existentes)
*
*

*/ 

// Import das dependencias para criar a API
const express = require("express"); // Responsavel pelas requisoes 
const cors = require("cors"); //  Responsalvel pelas permissoes das requisiçoes
const bodyParse = require("body-parser"); // responsavel pela manipulaçao do body da requisição
const { request, response } = require("express");

//Body --> Conteudo da requisição 
// Protocolo HTTP, estudar sobre o assunto.

// Fazer uma instância
const app = express(); // ---> cria um objeto com as informações da classe express.

app.use((request,response,next)=>{
    response.header("Access-Control-Allow-Origin","*"); // Indo no header e criando uma permissao de origem    (*) --> significa que ela é publica. 
                                                                                  // Podemos tambem podemos limitar nossa APi, colocando IP da maquina,ela so ira responder para aquela maquina  
   
    response.header("Access-Control-Allow-Methods","GET,POST,PUT,DELETE,OPTIONS"); // Permite gerenciar quais metodos poderão fazer requisições.

    app.use(cors());// Ativa no cors das requisições as permissões estabelecidas 
    next();
})

// Endpoints --> Pontos de parada 
const estadosCidades = require('./modulo/estados_cidades.js')


app.get("/estados",cors(),async function(request,response,next){ // endpoint para listar os Estados

    let listaDeEstados = estadosCidades.getCapitalPais()
    
    response.json(listaDeEstados)
    response.status(200);

});
app.get('/estado/sigla/:uf', cors(), async function(request, response, next) {
    //:uf - é uma variável que será utilizada para passagens de valores, na URL da requisição

    //Recebe o valor da variável uf que será encaminhada na URL da requisição
    let siglaEstado = request.params.uf
    let statusCode
    let dadosEstado = {}

    //Tratamento para vaidar os valores encaminhados no parâmetro
    if (siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado)) {
        statusCode = 400
        dadosEstado.message = ("Não é possível processar a requisição pois a sigla do estado não foi informada ou não atende a quantidade de caracteres(2 digitos)")
    } else {
        //chama a função que filtra o estado pela sigla
        let estado = estadosCidades.getDadosEstado(siglaEstado)
            //valida se houve retorno válido da funçao
        if (estado) {
            statusCode = 200
            dadosEstado = estado
        } else {
            statusCode = 404
        }
    }

    response.status(statusCode)
    response.json(dadosEstado)
})

app.get('/estado/capital/sigla/:uf', cors(), async function(request, response, next) {

    //:uf - é uma variável que será utilizada para passagens de valores, na URL da requisição

    //Recebe o valor da variável uf que será encaminhada na URL da requisição
    let siglaEstado = request.params.uf
    let statusCode
    let capitalEstado = {}

    //Tratamento para vaidar os valores encaminhados no parâmetro
    if (siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado)) {
        statusCode = 400
        capitalEstado.message = ("Não é possível processar a requisição pois a sigla do estado não foi informada ou não atende a quantidade de caracteres(2 digitos)")
    } else {
        //chama a função que filtra o estado pela sigla
        let estado = estadosCidades.getCapitalEstado(siglaEstado)
            //valida se houve retorno válido da funçao
        if (estado) {
            statusCode = 200
            capitalEstado = estado
        } else {
            statusCode = 404
        }
    }

    response.status(statusCode)
    response.json(capitalEstado)
})

app.get('/estados/regiao/:regiao', cors(), async function(request, response, next) {

    let regiao = request.params.regiao
    let statusCode
    let regiaoEstados = {}

    if (regiao == '' || regiao == undefined || !isNaN(regiao)) {
        statusCode = 400
        regiaoEstados.message = ("Não é possível processar a requisição pois a região não foi informada")
    } else {
        let estados = estadosCidades.getEstadosRegiao(regiao)

        if (estados) {
            statusCode = 200
            regiaoEstados = estados
        } else {
            statusCode = 404
        }
    }

    response.status(statusCode)
    response.json(regiaoEstados)
})

app.get('/estados/capital/pais', cors(), async function(request, response, next) {

    let statusCode
    let capitalPais = {}


    let capital = estadosCidades.getCapitalPais()

    if (capital) {
        statusCode = 200
        capitalPais = capital
    } else {
        statusCode = 404
    }
    response.status(statusCode)
    response.json(capitalPais)
})

// app.get('/estados/cidades/sigla/:uf', cors(), async function(request, response, next) {

//     let sigla = request.params.uf
//     let statusCode
//     let cidades = {}

//     if (sigla == '' || sigla == undefined || !isNaN(sigla) || sigla.length != 2) {
//         statusCode = 400
//         cidades.message = ("Não é possível processar a requisição pois a sigla do estado não foi informada ou não atende a quantidade de caracteres(2 digitos)")
//     } else {
//         let estados = estadosCidades.getCidades(sigla)

//         if (estados) {
//             statusCode = 200
//             cidades = estados
//         } else {
//             statusCode = 404
//         }
//     }

//     response.status(statusCode)
//     response.json(cidades)
// })





//EndPoint: Lista de cidades filtrada pela sigla do estado
app.get("/cidades",cors(),async function(request,response, next){
    let statusCode 
    let dadosCidade = {}
    let siglaEstado = request.query.uf // Recebe o valor da variavel e sera enviada por QueryString --> 
    // ante do ? é o  endereço do site >< depois do ? são as variaveis  
    // & serve para separar uma variavel da outra 
    if (siglaEstado == '' || siglaEstado == undefined || !isNaN(siglaEstado) || siglaEstado.length != 2) {
                statusCode = 400
                dadosCidade.message = ("Não é possível processar a requisição pois a sigla do estado não foi informada ou não atende a quantidade de caracteres(2 digitos)")
            } else {
                let dadosEstado = estadosCidades.getCidades(siglaEstado)
        
                if (dadosEstado) {
                    statusCode = 200
                    dadosCidade = dadosEstado
                } else {
                    statusCode = 404
                }
            }


            response.status(statusCode)
            response.json(dadosCidade)

    
    
});












//Permite carregar os endPoints criados e aguardar as requisições 
//pelo protocolo HTTP na porta 8080

app.listen(8080, function() {
    console.log('Servidor aguardando requisições na porta 8080');

})



//Permite carregar os endpoins criados e aguardar as requisições pelo protocolo http na porta 8080
// app.listen(8080,function(){
//     console.log("Servidor aguardando requisições na porta 8080.")
// })





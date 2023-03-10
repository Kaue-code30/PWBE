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

app.get("/estados",cors(),async function(request,response,next){ // endpoint para listar os Estados

    const estadosCidades = require('./modulo/estados_cidades.js')
    let listaDeEstados = estadosCidades.getEstadosRegiao("Sul")
    
    response.json(listaDeEstados)
    response.status(200);

});


//Permite carregar os endpoins criados e aguardar as requisições pelo protocolo http na porta 8080
app.listen(8080,function(){
    console.log("Servidor aguardando requisições na porta 8080.")
})





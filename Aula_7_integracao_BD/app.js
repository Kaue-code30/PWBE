/*
Name: Kauê Lima
Version: 1.0
Class: DS2M
Objetivo: Integrar um Back-End com o Banco de Dados
*/

/* ----------------ANOTAÇÕES------------------------------------------------------------------------------------------------------------------
Criação de uma API para se comunicar com o BD

1-> Primeiro impostamos as bibliotecas do projeto

2-> Criar um objeto utilizando a classe do express

3-> Configura a s permissoes do cors

---+ Sempre tem que ter um EndPoint que retorna tudo que a na tabela, e um para cada valor, (CRUD);

*/ 

// 1
const cors = require('cors');
const bodyParse = require('body-parser');
const express = require('express');
const { request } = require('http');
const { response } = require('express');

// 2 
const app = express();

// 3
app.use((request,response,next) => {
    //Permissão da origem da requisição 
    response.header('Access-Control-Allow-Origin','*');
    //Permissões de metodos que serão ultilizados na API
    response.header('Access-Control-Allow-Methods','GET,POST,PUT,DELETE,OPTIONS');
    //Define as permissoes para o cors
    app.use(cors());
    //Continua para a leitura dos enpoints
    next();
});

/************************************************************************************************************************************  
*   EndPoint: Tabela de Aluno                                                                                                       *
*   Versão: 1.0                                                                                                                     *
*   Data: 14-04-2023                                                                                                                *
*************************************************************************************************************************************/
    app.get('/v1/lion-school/aluno',cors(),async function(request, response){    // Retorna os dados dos alunos

    })

    app.get('/v1/lion-school/:id',cors(),async function(request,response){  // Retorna os dados pelo id
        
    })

    app.post('/v1/lion-school/aluno',cors(),async function(request,response){   // Inserir um novo aluno
        
    })

    app.put('/v1/lion-school/:id',cors(),async function(request,response){  // Atualiza um aluno pelo ID
        
    })

    app.delete('/v1/lion-school/:id',cors(),async function(request,response){   // Exclui um aluno pelo ID
        
    })
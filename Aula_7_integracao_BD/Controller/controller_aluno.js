/******************************************************************* 
Objetivo: Implementa a regra de negócio entre o app e a model.
Data: 24/04/2023
versão: 1.0
********************************************************************/

const { selectAllAluno } = require("../model/DAO/alunoDAO");
const alunoDAO = require("../model/DAO/alunoDAO");



// Função para receber os dados dos alunos do APP para inserir e enviar para a Model
const insertAluno = async function(dadosAluno){

    //Import global do arquivo de configurações do projeto.
    let message = require("./modulo/config.js")

    if(
        dadosAluno.nome == '' || dadosAluno.nome == undefined || dadosAluno.nome.length > 100 ||
        dadosAluno.cpf == ''  || dadosAluno.cpf == undefined  || dadosAluno.cpf > 18 ||
        dadosAluno.rg == ''   || dadosAluno.rg == undefined   || dadosAluno.rg > 15  ||
        dadosAluno.email == ''|| dadosAluno.email == undefined|| dadosAluno.email > 100 ||
        dadosAluno.data_nascimento == '' || dadosAluno.data_nascimento == undefined || dadosAluno.data_nascimento > 10
    ){
           message.ERRO_REQUIRED_DATA;
     }else{
         // Envia os dados para a model a serem inseridos no banco de dados.
         let status = await alunoDAO.insert(dadosAluno)
         // 
         if(status){
             return message.MESSAGE_CREATED_ITEM
         }
         else{
             return message.ERRO_SERVER_INTERNAL
         }
     }

};

// Atualizar um item existente
const atualizarAluno = function(dadosAluno){

};

//Para deletar um item existente filtrado pelo aluno
const deletarAluno = function(id){

};

// Selecionar e retornar todos os itens da tabela
const selecionarTodosAlunos = async function(dadosAluno){
    
    let dataAluno = await alunoDAO.selectAllAluno() // Solicita ao DAO, todos os alunos do BD
    let dadosJson = {} // Objeto JSON

    if(dataAluno){ // Valida se o BD teve registro, se tiver adiciona o ARRAY de alunos no Json que criamos.
        dadosJson.alunos = dataAluno
        return dadosJson;
    }else{
        return false
    }
};

//Função para buscar um item  filtrado pelo id, que será encaminhado para a model
const buscarId = function(dadosAluno){

};

module.exports = {
    selecionarTodosAlunos,
    insertAluno
}
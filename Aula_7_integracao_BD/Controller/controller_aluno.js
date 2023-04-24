/******************************************************************* 
Objetivo: Implementa a regra de negócio entre o app e a model.
Data: 24/04/2023
versão: 1.0
********************************************************************/

const { selectAllAluno } = require("../model/DAO/alunoDAO");



// Função para receber os dados dos alunos do APP para inserir e enviar para a Model
const insertAluno = function(dadosAluno){

};

// Atualizar um item existente
const atualizarAluno = function(dadosAluno){

};

//Para deletar um item existente filtrado pelo aluno
const deletarAluno = function(id){

};

// Selecionar e retornar todos os itens da tabela
const selecionarTodosAlunos = async function(dadosAluno){
    let alunoDAO = require('../model/DAO/alunoDAO.js') // Import do arquivo de acesso ao Banco de dados.
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
    selecionarTodosAlunos
}
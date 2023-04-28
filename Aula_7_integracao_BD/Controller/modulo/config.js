/* ***************************************************************************************
Arquivo responsavel pelas variaveis, constantes e funções globais do projeto

******************************************************************************************/

//*******************************Constantes de erros.*************************************
 const ERRO_REQUIRED_DATA = {
    status:400,
    message:"Existem dados obrigatórios que não foram preenchidos."}

 const ERRO_SERVER_INTERNAL = {
    status:500,
    message:"Erro interno no servidor de Banco de Dados."
}


//*******************************Constantes de Sucesso.*************************************
 const MESSAGE_CREATED_ITEM = {
    status:201,
    message:"Registro criado com sucesso."
}

module.exports = {
    ERRO_REQUIRED_DATA,
    ERRO_SERVER_INTERNAL,
    MESSAGE_CREATED_ITEM
}
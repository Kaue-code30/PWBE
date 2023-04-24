/*************************************************************************************************************************************
    Objetivo: Realizar a interação do Aluno com o Banco de Dados.                                                                    *
    Data: 14-04-23                                                                                                                   *
    Versão: 1.0
    Nome: Kaue
**************************************************************************************************************************************/

/*
 ------> Para realizar a conexão com o Banco de Dados iremos ultilizar o PRISMA
        npm install prisma --save 
        npx prisma 
        npx prisma init 
        npm install @prisma/client 
*/



const insert = function(dadosAlunos){ // Inserir um novo registro no banco de dados.

}

const updtade = function(dadosAlunos){ // Atualizar um registro existente no Banco de dados.

}

const deleteAluno = function(id){ // Excluir um registro existente no Banco de Dados.

}


// Retorna todos os registros do Banco de Dados.
// Versão: 1.0
// Data: 24/04/2023
const selectAllAluno = async function(){ // Retorna todos os registros do Banco de Dados.
    const {PrismaClient} = require('@prisma/client'); //Responsavel por manipular dados no BD.

    const prisma = new PrismaClient();  //Instância da class PrismaCLient
    let sql = 'select * from tbl_aluno';    //Variavel com scriptSQL para executar no BD

    let rsAluno = await prisma.$queryRawUnsafe(sql);   //Ira executar o script dentro do Banco de Dados.

    //$queryRawUnsafe() é ultilizado quando o scriptSQL esta em uma variavel.
    //queryRaw() é ultilizado quando passar um script direto no método.


    if(rsAluno.length > 0){ // Executa no banco de dados o script SQL
        return rsAluno
    }else{
        return false
    }
}

const selectByIdAluno = function(){ // Retorna um registro filtrado pelo id do Banco de Dados.

}

module.exports = {
    selectAllAluno
}
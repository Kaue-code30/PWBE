var matematica = require("./modulo/media.js");

const { stdout } = require("process");
var readline = require("readline");
var entradaDados = readline.createInterface({
    input:process.stdin,
    output:stdout
});

 entradaDados.question("digite o nome do Aluno: ",function(nomeDoAluno){
    let aluno = nomeDoAluno;

    entradaDados.question("Digite o nome do Professor: ",function(nomeDoProfessor){
        let professor = nomeDoProfessor;

    entradaDados.question("Digite o genero do Aluno: ",function(sexoDoAluno){
        let generoDoAluno = sexoDoAluno;

    entradaDados.question("Digite o genero do Professor: ",function(sexoDoProfessor){
        let generoProfessor = sexoDoProfessor;

    entradaDados.question("Digite o curso: ",function(curso){
        let cursoAluno = curso;

    entradaDados.question("Digite a Disciplina: ",function(disciplina){
        let disciplinaAluno = disciplina;
            
        entradaDados.question("Digite a primeira nota do aluno: ",function(nota1){
            let notaPrimeiroBimestre = nota1;
                
            entradaDados.question("Digite a segunda nota do aluno: ",function(nota2){
                let notaSegundoBimestre = nota2;       
                   
                entradaDados.question("Digite a terceira nota do aluno: ",function(nota3){
                    let notaTerceiroBimestre = nota3;     
                       
                    entradaDados.question("Digite a quarta nota do aluno: ",function(nota4){
                        let notaQuartoBimestre = nota4;        
             
              
                        console.log(matematica.mediaEscolar(notaPrimeiroBimestre,
                            notaSegundoBimestre,
                            notaTerceiroBimestre,
                            notaQuartoBimestre,
                            nomeDoAluno,
                            nomeDoProfessor,
                            generoDoAluno,
                            generoProfessor,
                            cursoAluno,
                            disciplinaAluno));
                            entradaDados.close();
                                    })
                                })
                            })          
                        }) 
                    })
                })
            })
        })           
    })                       
})   
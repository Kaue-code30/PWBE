/**************************************************************** 
 * Kauê Silva de Lima 
 * 13/02
 * DS2M
 * **************************************************************/
var status = true;
const { stat } = require("fs/promises");


const generodoAluno = function(sexoAluno){
    let palavaraAluno = sexoAluno;
    
    switch (sexoAluno){
        case "MASCULINO":
        palavaraAluno = " O aluno ";
        break;

        case "FEMININO":
            palavaraAluno = " A aluna ";
            break;
    }
    return  palavaraAluno;
}
const generodoProfessor = function(sexoProfessor){
    let palavaraProfessor = sexoProfessor;

    switch (sexoProfessor){
        case "MASCULINO":
        palavaraProfessor = "O Professor";
        break;

        case "FEMININO":
            palavaraProfessor = "A Professora";
            break;
    }
    return palavaraProfessor
}



const mediaEscolar = function (
    nota1,
    nota2,
    nota3,
    nota4,
    nomeDoAluno,
    nomeDoProfessor,
    sexoDoAluno,
    sexoDoProfessor,
    nomeDoCurso,
    nomeDaDiscplina){



    let aluno = nomeDoAluno;
    let professor = nomeDoProfessor;
    let generoAluno = sexoDoAluno;
    let generoProfessor = sexoDoProfessor;
    let  curso = nomeDoCurso;
    let disciplinaAluno = nomeDaDiscplina;
    let notaPrimeiroBimestre = Number(nota1);
    let notaSegundoBimestre = Number(nota2);
    let notaTerceiroBimestre = Number(nota3);
    let notaQuartoBimestre = Number(nota4);

    let resultadoEscolar = (nota1 + nota2 + nota3 + nota4) / 4;
    let notaExame;
    


    if(nota1 < 0 || nota1 > 100 || nota2 < 0 || nota2 > 100
         || nota3 < 0 || nota3 > 100 || nota4 < 0 || nota4 > 100){
            console.log("ERRO: As notas devem ser entre 0 e 100, porfavor digite os campos corretamente!")

    }else if(isNaN(nota1)|| isNaN(nota2)||isNaN(nota3)||isNaN(nota4)){
        status = false
        console.log("ERRO: Porfavor digite somente numeros, e preencha todos os campos corretamente:")
    }
    
    

    else{
        let media = (Number(nota1)+Number(nota2)+Number(nota3)+Number(nota4))/4;

        if(Number(media) >= 70){
            console.log(generodoAluno(generoAluno) + aluno ,
            " foi APROVADO na disciplina ", + disciplinaAluno , "\n",
            "Curso: " + curso , "\n",
            "Professor: " + professor, "\n",
            "Genero do aluno: " + sexoDoAluno, "\n",
            "Genero do professor: " + sexoDoProfessor, "\n",
            "Notas do aluno: " + notaPrimeiroBimestre,notaSegundoBimestre,notaTerceiroBimestre,notaQuartoBimestre)
            
        }

        else if(media < 50){
            console.log(generodoAluno(generoAluno) + aluno ,
            " foi REPROVADO na disciplina ", + disciplinaAluno , "\n",
            "Curso: " + curso , "\n",
            "Professor: " + professor, "\n",
            "Genero do aluno: " + sexoDoAluno, "\n",
            "Genero do professor: " + sexoDoProfessor, "\n",
            "Notas do aluno: " + notaPrimeiroBimestre,notaSegundoBimestre,notaTerceiroBimestre,notaQuartoBimestre)
        }
       
        else{
            console.log(status = false)

        }
        
       

    }
    return status;
}

module.exports = {
    mediaEscolar
}
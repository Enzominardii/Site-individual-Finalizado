<<<<<<< HEAD
var database = require("../database/config");

function buscarPontuacoesPorQuiz(idQuiz) {
    var instrucaoSql = `
        SELECT 
            p.qtdAcertos, 
            u.nome as nomeUsuario 
        FROM 
            pontuacao p
        JOIN 
            usuario u ON p.fkUsuario = u.id
        WHERE 
            p.fkQuiz = ${idQuiz}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);

    return database.executar(instrucaoSql);
}

module.exports = {
    buscarPontuacoesPorQuiz
};

=======
var database = require("../database/config");

function buscarPontuacoesPorQuiz(Id_usuario) {
    var instrucaoSql = `
        SELECT 
            p.qtdAcertos, 
            u.nome as nomeUsuario 
        FROM 
            pontuacao p
        JOIN 
            usuario u ON p.fkUsuario = u.id
        WHERE 
        u.id =  ${Id_usuario};`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);

    return database.executar(instrucaoSql);
}

module.exports = {
    buscarPontuacoesPorQuiz
};

>>>>>>> 6c63efa (Finalização do projeto)

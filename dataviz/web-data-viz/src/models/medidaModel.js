// Medida é aonde esta armazenando e mandando as informacoes do quiz para o banco de dados 

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

    return database.executar(instrucaoSql, [Id_usuario]);
}

module.exports = {
    buscarPontuacoesPorQuiz
};


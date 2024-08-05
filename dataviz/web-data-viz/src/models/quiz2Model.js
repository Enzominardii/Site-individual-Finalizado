var database = require("../database/config");

function ranking() {
    var instrucaoSql = `
       SELECT usuario.id, usuario.nome, pontuacaoranking.qtdAcertos
       FROM usuario
       JOIN pontuacaoranking ON usuario.id = pontuacaoranking.fkUsuario
       ORDER BY pontuacaoranking.qtdAcertos DESC
       LIMIT 3;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);

    return database.executar(instrucaoSql);
}

module.exports = {
    ranking
};

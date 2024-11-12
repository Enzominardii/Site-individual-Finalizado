var database = require("../database/config");

function buscarDadosGrafico(idUsuario) {
    var instrucaoSql = `SELECT usuario.nome, pontuacao.qtdAcertos
FROM pontuacao
JOIN usuario ON pontuacao.fkUsuario = ${idUsuario}
ORDER BY pontuacao.qtdAcertos DESC
LIMIT 3;`

    console.log("Executando: ", instrucaoSql)
    return database.executar(instrucaoSql)
}

function inserirDadosQuiz(qtdAcertos, fkUsuario, fkQuiz) {
    let instrucaoSql = `INSERT INTO pontuacaoranking (qtdAcertos, fkUsuario, fkQuiz2) VALUES 
    (${qtdAcertos}, ${fkUsuario}, ${fkQuiz});`
    console.log("Executando: ", instrucaoSql)
    return database.executar(instrucaoSql)
}

module.exports = { buscarDadosGrafico, inserirDadosQuiz }


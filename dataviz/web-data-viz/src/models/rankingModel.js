var database = require("../database/config");

function buscarDadosGrafico() {
    var instrucaoSql = `SELECT usuario.nome, pontuacaoranking.qtdAcertos
FROM pontuacaoranking
JOIN usuario ON pontuacaoranking.fkUsuario = usuario.id
ORDER BY pontuacaoranking.qtdAcertos DESC
LIMIT 3;`

console.log("Executando: ", instrucaoSql)
return database.executar(instrucaoSql)
}

module.exports = { buscarDadosGrafico }


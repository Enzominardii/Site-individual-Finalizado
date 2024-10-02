var database = require("../database/config");

function ranking(fkQuiz2) {
  var instrucaoSql = `
    SELECT fkUsuario, qtdAcertos
FROM pontuacaoranking
ORDER BY qtdAcertos ASC
LIMIT 3;
`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);

  return database.executar(instrucaoSql, [fkQuiz2]);
}

module.exports = { ranking };
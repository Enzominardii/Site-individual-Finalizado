var mysql = require("mysql2");

// Configuração do pool de conexões
var pool = mysql.createPool({
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

// Promisificar o pool para usar com async/await

function executar(instrucao) {
    if (process.env.AMBIENTE_PROCESSO !== "producao" && process.env.AMBIENTE_PROCESSO !== "desenvolvimento") {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM .env OU dev.env OU app.js\n");
        return Promise.reject("AMBIENTE NÃO CONFIGURADO EM .env");
    }

    return new Promise((resolve, reject) => {
        pool.query(instrucao, (erro, resultados) => {
            if (erro) {
                console.error("ERRO NO MySQL SERVER: ", erro.sqlMessage);
                reject(erro);
            } else {
                console.log(resultados);
                resolve(resultados);
            }
        });
    });
}

// Tratamento de erros de conexão
pool.on('error', (erro) => {
    console.error("ERRO NO MySQL SERVER: ", erro.sqlMessage);
});

module.exports = {
    executar
};

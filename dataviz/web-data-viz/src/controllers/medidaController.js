<<<<<<< HEAD
var medidaModel = require("../models/medidaModel");

function buscarPontuacoesPorQuiz(req, res) {
    var idQuiz = req.params.idQuiz;

    console.log(`Recuperando pontuações do quiz ${idQuiz}`);

    medidaModel.buscarPontuacoesPorQuiz(idQuiz)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhuma pontuação encontrada!");
            }
        })
        .catch(function (erro) {
            console.log("Houve um erro ao buscar as pontuações:", erro);
            res.status(500).json({ error: "Erro ao buscar pontuações do quiz" });
        });
}

module.exports = {
    buscarPontuacoesPorQuiz
};
=======
var medidaModel = require("../models/medidaModel");

function buscarPontuacoesPorQuiz(req, res) {
    var Id_usuario = req.params.Id_usuario;

    console.log(`Recuperando pontuações do quiz ${Id_usuario}`);

    medidaModel.buscarPontuacoesPorQuiz(Id_usuario)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhuma pontuação encontrada!");
            }
        })
        .catch(function (erro) {
            console.log("Houve um erro ao buscar as pontuações:", erro);
            res.status(500).json({ error: "Erro ao buscar pontuações do quiz" });
        });
}

module.exports = {
    buscarPontuacoesPorQuiz
};
>>>>>>> 6c63efa (Finalização do projeto)

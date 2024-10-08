var medidaModel = require("../models/medidaModel");

function buscarPontuacoesPorQuiz(req, res) {
    const idUsuario = req.params.idUsuario; 
    console.log("Recuperando pontuações para o usuário:", idUsuario);

    medidaModel.buscarPontuacoesPorQuiz(idUsuario)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhuma pontuação encontrada!");
            }
        })
        .catch(function (erro) {
            console.log("Houve um erro ao buscar as pontuações:", erro);
            res.status(500).json({ error: "Erro ao buscar as pontuações" });
        });
}


module.exports = {
    buscarPontuacoesPorQuiz,

};
var medidaModel = require("../models/quiz2Model");

function ranking(req, res) {
    console.log("Recuperando ranking de pontuações");

    medidaModel.ranking()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhuma pontuação encontrada!");
            }
        })
        .catch(function (erro) {
            console.log("Houve um erro ao buscar o ranking:", erro);
            res.status(500).json({ error: "Erro ao buscar o ranking de pontuações" });
        });
}

module.exports = {
    ranking
};

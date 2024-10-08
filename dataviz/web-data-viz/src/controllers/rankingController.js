var rankingModel = require("../models/rankingModel")

function buscarDadosGrafico(req, res) {
    const idUsuario = req.params.Id_usuario; 
    console.log("Recuperando pontuações para o usuário:", idUsuario);

    rankingModel.buscarDadosGrafico()
    .then( (resposta) => {
        res.status(200).json(resposta)
    }) .catch ( erro => {
        console.log("#ERRO: ", erro)
    })
}


module.exports = { buscarDadosGrafico };
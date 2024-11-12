var rankingModel = require("../models/rankingModel")

function buscarDadosGrafico(req, res) {
    const idUsuario = req.params.idUsuario; 
    console.log("Recuperando pontuações para o usuário:", idUsuario);

    rankingModel.buscarDadosGrafico(idUsuario)
    .then( (resposta) => {
        res.status(200).json(resposta)
    }) .catch ( erro => {
        console.log("#ERRO: ", erro)
    })
}

function inserirDadosQuiz(req, res) {
    const qtdAcertos = req.body.qtdAcertos; 
    const fkUsuario = req.body.fkUsuario;
    const fkQuiz = req.body.fkQuiz;

    console.log("Inserindo dados para o usuario de id: ", fkUsuario);

    rankingModel.inserirDadosQuiz(qtdAcertos, fkUsuario, fkQuiz)
    .then( (resposta) => {
        res.status(200).json(resposta)
    }) .catch ( erro => {
        console.log("#ERRO: ", erro)
    })
}

module.exports = { buscarDadosGrafico, inserirDadosQuiz };
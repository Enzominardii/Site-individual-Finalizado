var express = require("express");
var router = express.Router();


var rankingController = require("../controllers/rankingController");

router.get("/grafico/:idUsuario", function (req, res) {
    rankingController.buscarDadosGrafico(req, res);
});

router.post("/quiz/inserir", function (req, res) {
    rankingController.inserirDadosQuiz(req, res);
})

module.exports = router;
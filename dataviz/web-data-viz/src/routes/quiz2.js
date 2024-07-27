
// quiz2 é aonde esta armazenando e mandando as informacoes do quiz para o banco de dados

var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");


router.get("/quiz/:Id_usuario", function (req, res) {
    medidaController.buscarPontuacoesPorQuiz(req, res);
});

module.exports = router;


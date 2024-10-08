var express = require("express");
var router = express.Router();
// const { executar } = require('../database/config');
var rankingController = require("../controllers/rankingController");

router.get("/grafico", function (req, res) {
    rankingController.buscarDadosGrafico(req, res);
});



module.exports = router;
const express = require('express');
const router = express.Router();
const { executar } = require('../database/config');


router.post('/', async (req, res) => {
  const { qtdAcertos, fkUsuario } = req.body;

  if (typeof qtdAcertos !== 'number' || typeof fkUsuario !== 'number') {
    return res.status(400).json({ error: 'Dados inválidos' });
  }

  const query = 'INSERT INTO pontuacaoranking (qtdAcertos, fkUsuario) VALUES (?, ?)';
  try {
    await executar({ sql: query, values: [qtdAcertos, fkUsuario] });
    res.status(200).json({ message: 'Pontuação salva com sucesso!' });
  } catch (error) {
    console.error('Erro ao registrar pontuação:', error);
    res.status(500).json({ error: 'Erro ao salvar a pontuação' });
  }
});

module.exports = router;

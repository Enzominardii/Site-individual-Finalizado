// const express = require('express');
// const router = express.Router(); // Define the router variable

// const { executar } = require('../database/config');

// // Função de validação 
// function validarDados(dados) {
//     return typeof dados.qtdAcertos === 'number' && typeof dados.fkUsuario === 'number';
// }

// router.post('/Grafico', async (req, res) => {
//     try {
//       const { qtdAcertos, fkUsuario, fkQuiz2 } = req.body;
//       const query = 'INSERT INTO pontuacaoranking (qtdAcertos, fkUsuario, fkQuiz2) VALUES (?, ?, ?)';
//       await executar({ sql: query, values: [qtdAcertos, fkUsuario, fkQuiz2] });
//       res.status(200).json({ message: 'Pontuação salva com sucesso!' });
//     } catch (error) {
//       console.error('Erro ao registrar pontuação:', error);
//       res.status(500).json({ error: 'Erro ao salvar a pontuação' });
//     }
//   });

// module.exports = router; 
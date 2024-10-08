// var quiz2Model = require("../models/quiz2Model");

// function ranking(req, res) {
//     console.log("Recuperando ranking de pontuações");
  
//     quiz2Model.ranking()
//       .then(function (resultado) {
//         if (resultado.length > 0) {
//           const top3Users = resultado.slice(0, 3);
//           const usernames = top3Users.map(user => user.nome);
//           const scores = top3Users.map(user => user.qtdAcertos);
  
//           res.status(200).json({ labels: usernames, data: scores });
//         } else {
//           res.status(204).send("Nenhuma pontuação encontrada!");
//         }
//       })
//       .catch(function (erro) {
//         console.log("Houve um erro ao buscar o ranking:", erro);
//         res.status(500).json({ error: "Erro ao buscar o ranking de pontuações" });
//       });
//   }

// module.exports = {
//     ranking
// };

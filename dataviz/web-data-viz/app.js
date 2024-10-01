// Definindo o ambiente de processo
var ambiente_processo = 'producao';
var ambiente_processo = 'desenvolvimento';

var caminho_env = ambiente_processo === 'producao' ? '.env' : '.env.dev';
require("dotenv").config({ path: caminho_env });

var express = require("express");
var cors = require("cors");
var path = require("path");
// var { executar } = require('./config');

var PORTA_APP = process.env.APP_PORT || 3000;
var HOST_APP = process.env.APP_HOST || 'localhost';

var app = express();

// Importando rotas
var indexRouter = require("./src/routes/index");
var usuarioRouter = require("./src/routes/usuarios");
var avisosRouter = require("./src/routes/avisos");
var medidasRouter = require("./src/routes/medidas");
var aquariosRouter = require("./src/routes/aquarios");
var empresasRouter = require("./src/routes/empresas");
var rankingRoutes = require('./src/routes/rankingRoutes');

// Middleware para servir arquivos 0,estáticos
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

// Configurando as rotas
app.use("/", indexRouter);
app.use("/usuarios", usuarioRouter);
app.use("/avisos", avisosRouter);
app.use("/medidas", medidasRouter);
app.use("/aquarios", aquariosRouter);
app.use("/empresas", empresasRouter);
app.use("/ranking", rankingRoutes); 


app.post('/api/ranking', async (req, res) => {
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
  
// App.js
app.get('/api/ranking/grafico', async (req, res) => {
  try {
    const resultado = await quiz2Model.ranking();
    const top3Users = resultado.slice(0, 3); // get top 3 users
    const usernames = top3Users.map(user => user.nome);
    const scores = top3Users.map(user => user.qtdAcertos);

    res.json({ labels: usernames, data: scores });
  } catch (error) {
    console.error('Erro ao gerar gráfico:', error);
    res.status(500).json({ error: 'Erro ao gerar gráfico' });
  }
});

// Iniciando o servidor
app.listen(PORTA_APP, function () {
    console.log(`
    ##   ##  ######   #####             ####       ##     ######     ##              ##  ##    ####    ######  
    ##   ##  ##       ##  ##            ## ##     ####      ##      ####             ##  ##     ##         ##  
    ##   ##  ##       ##  ##            ##  ##   ##  ##     ##     ##  ##            ##  ##     ##        ##   
    ## # ##  ####     #####    ######   ##  ##   ######     ##     ######   ######   ##  ##     ##       ##    
    #######  ##       ##  ##            ##  ##   ##  ##     ##     ##  ##            ##  ##     ##      ##     
    ### ###  ##       ##  ##            ## ##    ##  ##     ##     ##  ##             ####      ##     ##      
    ##   ##  ######   #####             ####     ##  ##     ##     ##  ##              ##      ####    ######  
    \n\n\n                                                                                                 
    Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar .: http://${HOST_APP}:${PORTA_APP} :. \n\n
    Você está rodando sua aplicação em ambiente de .:${process.env.AMBIENTE_PROCESSO}:. \n\n
    \tSe .:desenvolvimento:. você está se conectando ao banco local. \n
    \tSe .:producao:. você está se conectando ao banco remoto. \n\n
    \t\tPara alterar o ambiente, comente ou descomente as linhas 1 ou 2 no arquivo 'app.js'\n\n`);
});

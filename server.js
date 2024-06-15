// server.js
const express = require('express');
const mongoose = require('mongoose');

// Conecta ao MongoDB
mongoose.connect('mongodb://localhost/DB_BeatBlender', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Verifica se a conexão foi bem-sucedida
mongoose.connection.on('error', console.error.bind(console, 'Erro de conexão:'));
mongoose.connection.once('open', function() {
  console.log('Conectado ao MongoDB com sucesso!');
});

const app = express();

// ... restante do código para configurar e iniciar o servidor Express

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});




//const app = require('./app');

//const PORT = process.env.PORT || 3000;

//app.listen(PORT, () => {
  //console.log(`Server is running on port ${PORT}`);
//});
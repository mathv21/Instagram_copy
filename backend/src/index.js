
// Serve para realizar os imports
const express = require('express');
const mongooose = require('mongoose');
const path = require('path');
const cors = require('cors');

// Serve para realizar tanto uma resquisicao via get "req" quanto uma resposta "res".
const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

// serve para efetuar a conexão com o banco de dados "MongoDB".
mongooose.connect('mongodb+srv://insta:insta@cluster0-kagsu.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use((req, res, next) => {
  req.io = io;

  next();
});

app.use(cors());

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));

app.use(require('./routes'));

server.listen(2323);

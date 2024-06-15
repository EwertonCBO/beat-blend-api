const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');
const userRoutes = require('./routes/usuarioRoutes');

mongoose.connect('mongodb://localhost:27017/beatblend', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());
app.use('/auth', authRoutes);
app.use('/posts', postRoutes);
app.use('/users', userRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

module.exports = app;

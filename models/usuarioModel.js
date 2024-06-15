const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    id_usuario: { type: String, required: true, unique: true },
  nomeusuario: { type: String, required: true, unique: true },
  senha: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  genero_preferido : [String],
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;

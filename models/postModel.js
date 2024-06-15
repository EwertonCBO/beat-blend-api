const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    id_Posts: { type: Schema.Types.ObjectId, ref: 'Usuario', required: true },
  usuarioId: { type: Schema.Types.ObjectId, ref: 'Usuario', required: true },
  conteudo: { type: String, required: true },
  curtidas: { type: Number, default: 0 },
  comentarios: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  criadoEm: { type: Date, default: Date.now },
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;

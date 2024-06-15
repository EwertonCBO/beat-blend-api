const Post = require('../models/postModel');

exports.createPost = async (req, res) => {
  try {
    const { usuarioId, content } = req.body;
    const post = new Post({ usuarioId, content });
    await post.save();
    res.status(201).json({ message: 'Post created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('usuarioId');
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

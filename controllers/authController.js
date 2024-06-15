const Usuario = require('../models/usuarioModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  try {
    const { usuarioname, password, email, preferredGenres } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const usuario = new Usuario({
      usuarioname,
      password: hashedPassword,
      email,
      preferredGenres,
    });
    await usuario.save();
    res.status(201).json({ message: 'Usuario registered successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { usuarioname, password } = req.body;
    const usuario = await Usuario.findOne({ usuarioname });
    if (!usuario) {
      return res.status(404).json({ message: 'Usuario not found' });
    }
    const isMatch = await bcrypt.compare(password, usuario.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ usuarioId: usuario._id }, 'secret_key', { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

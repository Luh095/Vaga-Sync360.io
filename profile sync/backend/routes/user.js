const express = require('express');
const router = express.Router();
const db = require('../db');

// GET /usuario
router.get('/usuario', async (req, res) => {
  const [rows] = await db.query('SELECT * FROM users WHERE id = 1');
  res.json(rows[0]);
});

// POST /usuario
router.post('/usuario', async (req, res) => {
  const { nome, idade, rua, bairro, estado, biografia, imagem_url } = req.body;
  await db.query(
    'UPDATE users SET nome = ?, idade = ?, rua = ?, bairro = ?, estado = ?, biografia = ?, imagem_url = ? WHERE id = 1',
    [nome, idade, rua, bairro, estado, biografia, imagem_url]
  );
  res.json({ message: 'Usuário atualizado com sucesso!' });
});

module.exports = router;
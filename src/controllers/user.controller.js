const express = require('express');
const router = express.Router();
const user = require('../models/user.model');

router.get('/users', async (req, res) => res.json(await user.find()));

router.post('/users', async (req, res) => {
  const item = await user.create(req.body);
  res.status(201).json(item);
});

router.get('/users/:id', async (req, res) => {
  const item = await user.findById(req.params.id);
  if (!item) return res.status(404).json({ error: "Usuário não encontrado" });
  res.json(item);
});

router.put('/users/:id', async (req, res) => {
  res.json(await user.findByIdAndUpdate(req.params.id, req.body, { new: true }));
});

router.delete('/users/:id', async (req, res) => {
  await user.findByIdAndDelete(req.params.id);
  res.json({ message: "Usuário removido" });
});

module.exports = router;

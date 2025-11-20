const express = require('express');
const router = express.Router();
const profissional = require('../models/profissional.model');

router.get('/profissionals', async (req, res) => res.json(await profissional.find()));

router.post('/profissionals', async (req, res) => {
  const item = await profissional.create(req.body);
  res.status(201).json(item);
});

router.get('/professionals/:id', async (req, res) => {
  const item = await professional.findById(req.params.id);
  if (!item) return res.status(404).json({ error: "Profissional não encontrado" });
  res.json(item);
});

router.put('/professionals/:id', async (req, res) => {
  res.json(await profissional.findByIdAndUpdate(req.params.id, req.body, { new: true }));
});

router.delete('/professionals/:id', async (req, res) => {
  await profissional.findByIdAndDelete(req.params.id);
  res.json({ message: "Profissional removido" });
});

module.exports = router;

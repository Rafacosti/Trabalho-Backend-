const express = require('express');
const router = express.Router();
const procedure = require('../models/procedure.model');

router.get('/procedures', async (req, res) => res.json(await procedure.find()));

router.post('/procedures', async (req, res) => {
  const item = await procedure.create(req.body);
  res.status(201).json(item);
});

router.get('/procedures/:id', async (req, res) => {
  const item = await procedure.findById(req.params.id);
  if (!item) return res.status(404).json({ error: "Procedimento não encontrado" });
  res.json(item);
});

router.put('/procedures/:id', async (req, res) => {
  res.json(await procedure.findByIdAndUpdate(req.params.id, req.body, { new: true }));
});

router.delete('/procedures/:id', async (req, res) => {
  await procedure.findByIdAndDelete(req.params.id);
  res.json({ message: "Procedimento removido" });
});

module.exports = router;

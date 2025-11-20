const express = require('express');
const router = express.Router();
const unit = require('../models/unit.model');

router.get('/units', async (req, res) => res.json(await unit.find()));

router.post('/units', async (req, res) => {
  const item = await unit.create(req.body);
  res.status(201).json(item);
});

router.get('/units/:id', async (req, res) => {
  const item = await unit.findById(req.params.id);
  if (!item) return res.status(404).json({ error: "Unidade não encontrada" });
  res.json(item);
});

router.put('/units/:id', async (req, res) => {
  res.json(await Unit.findByIdAndUpdate(req.params.id, req.body, { new: true }));
});

router.delete('/units/:id', async (req, res) => {
  await unit.findByIdAndDelete(req.params.id);
  res.json({ message: "Unidade removida" });
});

module.exports = router;

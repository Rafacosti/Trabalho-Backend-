const express = require('express');
const router = express.Router();
const specialty = require('../models/specialty.model');

router.get('/specialties', async (req, res) => res.json(await specialty.find()));

router.post('/specialties', async (req, res) => {
  const item = await specialty.create(req.body);
  res.status(201).json(item);
});

router.get('/specialties/:id', async (req, res) => {
  const item = await specialty.findById(req.params.id);
  if (!item) return res.status(404).json({ error: "Especialidade não encontrada" });
  res.json(item);
});

router.put('/specialties/:id', async (req, res) => {
  res.json(await specialty.findByIdAndUpdate(req.params.id, req.body, { new: true }));
});

router.delete('/specialties/:id', async (req, res) => {
  await specialty.findByIdAndDelete(req.params.id);
  res.json({ message: "Especialidade removida" });
});

module.exports = router;

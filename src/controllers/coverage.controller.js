const express = require('express');
const router = express.Router();
const coverage = require('../models/coverage.model');

router.get('/coverages', async (req, res) => res.json(await coverage.find()));

router.post('/coverages', async (req, res) => {
  const item = await coverage.create(req.body);
  res.status(201).json(item);
});

router.get('/coverages/:id', async (req, res) => {
  const item = await coverage.findById(req.params.id);
  if (!item) return res.status(404).json({ error: "Cobertura não encontrada" });
  res.json(item);
});

router.put('/coverages/:id', async (req, res) => {
  res.json(await coverage.findByIdAndUpdate(req.params.id, req.body, { new: true }));
});

router.delete('/coverages/:id', async (req, res) => {
  await coverage.findByIdAndDelete(req.params.id);
  res.json({ message: "Cobertura removida" });
});

module.exports = router;

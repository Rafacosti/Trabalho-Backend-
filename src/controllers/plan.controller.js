const express = require('express');
const router = express.Router();
const plan = require('../models/plan.model');

router.get('/plans', async (req, res) => res.json(await plan.find()));

router.post('/plans', async (req, res) => {
  const item = await Plan.create(req.body);
  res.status(201).json(item);
});

router.get('/plans/:id', async (req, res) => {
  const item = await plan.findById(req.params.id);
  if (!item) return res.status(404).json({ error: "Plano não encontrado" });
  res.json(item);
});

router.put('/plans/:id', async (req, res) => {
  res.json(await plan.findByIdAndUpdate(req.params.id, req.body, { new: true }));
});

router.delete('/plans/:id', async (req, res) => {
  await plan.findByIdAndDelete(req.params.id);
  res.json({ message: "Plano removido" });
});

module.exports = router;

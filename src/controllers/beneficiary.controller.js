const express = require('express');
const router = express.Router();
const beneficiary = require('../models/beneficiary.model');

router.get('/beneficiaries', async (req, res) => res.json(await beneficiary.find()));

router.post('/beneficiaries', async (req, res) => {
  const item = await beneficiary.create(req.body);
  res.status(201).json(item);
});

router.get('/beneficiaries/:id', async (req, res) => {
  const item = await beneficiary.findById(req.params.id);
  if (!item) return res.status(404).json({ error: "Beneficiário não encontrado" });
  res.json(item);
});

router.put('/beneficiaries/:id', async (req, res) => {
  res.json(await beneficiary.findByIdAndUpdate(req.params.id, req.body, { new: true }));
});

router.delete('/beneficiaries/:id', async (req, res) => {
  await beneficiary.findByIdAndDelete(req.params.id);
  res.json({ message: "Beneficiário removido" });
});

module.exports = router;

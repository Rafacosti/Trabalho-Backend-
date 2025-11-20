const express = require('express');
const router = express.Router();
const invoice = require('../models/invoice.model');

router.get('/invoices', async (req, res) => res.json(await invoice.find()));

router.post('/invoices', async (req, res) => {
  const item = await invoice.create(req.body);
  res.status(201).json(item);
});

router.get('/invoices/:id', async (req, res) => {
  const item = await invoice.findById(req.params.id);
  if (!item) return res.status(404).json({ error: "Fatura não encontrada" });
  res.json(item);
});

router.put('/invoices/:id', async (req, res) => {
  res.json(await invoice.findByIdAndUpdate(req.params.id, req.body, { new: true }));
});

router.delete('/invoices/:id', async (req, res) => {
  await invoice.findByIdAndDelete(req.params.id);
  res.json({ message: "Fatura removida" });
});

module.exports = router;

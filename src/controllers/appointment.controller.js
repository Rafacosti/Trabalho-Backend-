const express = require('express');
const router = express.Router();
const appointment = require('../models/appointment.model');

router.get('/appointments', async (req, res) => res.json(await appointment.find()));

router.post('/appointments', async (req, res) => {
  const item = await appointment.create(req.body);
  res.status(201).json(item);
});

router.get('/appointments/:id', async (req, res) => {
  const item = await appointment.findById(req.params.id);
  if (!item) return res.status(404).json({ error: "Agendamento não encontrado" });
  res.json(item);
});

router.put('/appointments/:id', async (req, res) => {
  res.json(await appointment.findByIdAndUpdate(req.params.id, req.body, { new: true }));
});

router.delete('/appointments/:id', async (req, res) => {
  await appointment.findByIdAndDelete(req.params.id);
  res.json({ message: "Agendamento removido" });
});

module.exports = router;

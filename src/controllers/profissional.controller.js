const Professional = require('../models/professional.model');

const createProfessional = async (req, res) => {
  try {
	const professional = await Professional.create(req.body);
	return res.status(201).json(professional);
  } catch (err) {
	return res.status(400).json({ error: err.message });
  }
};

const getProfessionals = async (req, res) => {
  try {
	const list = await Professional.find()
	  .populate('specialtyId')
	  .populate('unitId');
	return res.json(list);
  } catch (err) {
	return res.status(500).json({ error: err.message });
  }
};

const getProfessionalById = async (req, res) => {
  try {
	const professional = await Professional.findById(req.params.id)
	  .populate('specialtyId')
	  .populate('unitId');
	if (!professional) return res.status(404).json({ error: "Professional not found" });
	return res.json(professional);
  } catch (err) {
	return res.status(400).json({ error: err.message });
  }
};

const updateProfessional = async (req, res) => {
  try {
	const professional = await Professional.findByIdAndUpdate(
	  req.params.id,
	  req.body,
	  { new: true }
	);
	if (!professional) return res.status(404).json({ error: "Professional not found" });
	return res.json(professional);
  } catch (err) {
	return res.status(400).json({ error: err.message });
  }
};

const deleteProfessional = async (req, res) => {
  try {
	const professional = await Professional.findByIdAndDelete(req.params.id);
	if (!professional) return res.status(404).json({ error: "Professional not found" });
	return res.json({ message: "Professional deleted" });
  } catch (err) {
	return res.status(400).json({ error: err.message });
  }
};

module.exports = {
  createProfessional,
  getProfessionals,
  getProfessionalById,
  updateProfessional,
  deleteProfessional
};

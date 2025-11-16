const Unit = require('../models/unit.model');

const createUnit = async (req, res) => {
try {
const unit = await Unit.create(req.body);
return res.status(201).json(unit);
} catch (err) { return res.status(400).json({ error: err.message }); }
};

const getUnits = async (req, res) => {
try {
const list = await Unit.find().populate('specialtyIds');
return res.json(list);
} catch (err) { return res.status(500).json({ error: err.message }); }
};

const getUnitById = async (req, res) => {
  try {
	const unit = await Unit.findById(req.params.id).populate('specialtyIds');
	if (!unit) return res.status(404).json({ error: "Unit not found" });
	return res.json(unit);
  } catch (err) { return res.status(400).json({ error: err.message }); }
};

const updateUnit = async (req, res) => {
  try {
	const unit = await Unit.findByIdAndUpdate(req.params.id, req.body, { new: true });
	if (!unit) return res.status(404).json({ error: "Unit not found" });
	return res.json(unit);
  } catch (err) { return res.status(400).json({ error: err.message }); }
};

const deleteUnit = async (req, res) => {
try {
const deleteUnit = async (req, res) => {
  try {
	const unit = await Unit.findByIdAndDelete(req.params.id);
	if (!unit) return res.status(404).json({ error: "Unit not found" });
	return res.json({ message: "Unit deleted" });
  } catch (err) { return res.status(400).json({ error: err.message }); }
};
createUnit,
getUnits,
getUnitById,
updateUnit,
deleteUnit
} catch (err) { return res.status(400).json({ error: err.message }); }
}
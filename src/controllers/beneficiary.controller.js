const Beneficiary = require('../models/beneficiary.model');

const createBeneficiary = async (req, res) => {
try {
const beneficiary = await Beneficiary.create(req.body);
return res.status(201).json(beneficiary);
} catch (err) { return res.status(400).json({ error: err.message }); }
};

const getBeneficiaries = async (req, res) => {
try {
const list = await Beneficiary.find()
.populate('planId')
.populate('userId');
return res.json(list);
} catch (err) { return res.status(500).json({ error: err.message }); }
};

const getBeneficiaryById = async (req, res) => {
try {
const beneficiary = await Beneficiary.findById(req.params.id)
.populate('planId')
.populate('userId');
if (!beneficiary) return res.status(404).json({ error: "Beneficiary not found" });
return res.json(beneficiary);
} catch (err) { return res.status(400).json({ error: err.message }); }
};

const updateBeneficiary = async (req, res) => {
try {
const beneficiary = await Beneficiary.findByIdAndUpdate(
req.params.id, req.body, { new: true }
);
if (!beneficiary) return res.status(404).json({ error: "Beneficiary not found" });
return res.json(beneficiary);
} catch (err) { return res.status(400).json({ error: err.message }); }
};

const deleteBeneficiary = async (req, res) => {
try {
const beneficiary = await Beneficiary.findByIdAndDelete(req.params.id);
if (!beneficiary) return res.status(404).json({ error: "Beneficiary not found" });
return res.json({ message: "Beneficiary deleted" });
} catch (err) { return res.status(400).json({ error: err.message }); }
};

module.exports = {
createBeneficiary,
getBeneficiaries,
getBeneficiaryById,
updateBeneficiary,
deleteBeneficiary
};


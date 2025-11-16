const Provider = require('../models/provider.model');

const createProvider = async (req, res) => {
try {
const provider = await Provider.create(req.body);
return res.status(201).json(provider);
} catch (err) { return res.status(400).json({ error: err.message }); }
};

const getProviders = async (req, res) => {
try {
const list = await Provider.find()
.populate('specialtyId')
.populate('unitId');
return res.json(list);
} catch (err) { return res.status(500).json({ error: err.message }); }
};

const getProviderById = async (req, res) => {
try {
const provider = await Provider.findById(req.params.id)
.populate('specialtyId')
.populate('unitId');
if (!provider) return res.status(404).json({ error: "Provider not found" });
return res.json(provider);
} catch (err) { return res.status(400).json({ error: err.message }); }
};

const updateProvider = async (req, res) => {
try {
const provider = await Provider.findByIdAndUpdate(
req.params.id, req.body, { new: true }
);
if (!provider) return res.status(404).json({ error: "Provider not found" });
return res.json(provider);
} catch (err) { return res.status(400).json({ error: err.message }); }
};

const deleteProvider = async (req, res) => {
try {
const provider = await Provider.findByIdAndDelete(req.params.id);
if (!provider) return res.status(404).json({ error: "Provider not found" });
return res.json({ message: "Provider deleted" });
} catch (err) { return res.status(400).json({ error: err.message }); }
};

module.exports = {
createProvider,
getProviders,
getProviderById,
updateProvider,
deleteProvider
};

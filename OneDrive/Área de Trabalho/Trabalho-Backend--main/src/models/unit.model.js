const mongoose = require('mongoose');

const unitSchema = new mongoose.Schema({
name: { type: String, required: true },
cnpj: { type: String, required: true, unique: true },
phone: { type: String, required: true },
email: { type: String, required: true },
address: { type: String, required: true },
capacity: { type: Number, required: true, min: 1 },
specialtyIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Specialty' }]
}, { timestamps: true });

module.exports = mongoose.model('Unit', unitSchema);

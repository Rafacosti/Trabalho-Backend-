const mongoose = require('mongoose');

const professionalSchema = new mongoose.Schema({
name: { type: String, required: true },
document: { type: String, required: true },
email: { type: String, required: true },
phone: { type: String, required: true },
specialtyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Specialty', required: true },
unitId: { type: mongoose.Schema.Types.ObjectId, ref: 'Unit', required: true }
}, { timestamps: true });

module.exports = mongoose.model('Professional', professionalSchema);


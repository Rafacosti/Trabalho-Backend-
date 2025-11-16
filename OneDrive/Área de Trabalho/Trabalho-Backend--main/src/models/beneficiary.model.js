const mongoose = require('mongoose');

const beneficiarySchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  cpf: { type: String, required: true, unique: true },
  birthDate: Date,
  phone: String,
  email: String,
  planId: { type: mongoose.Schema.Types.ObjectId, ref: 'Plan' }
}, { timestamps: true });

module.exports = mongoose.model('Beneficiary', beneficiarySchema);

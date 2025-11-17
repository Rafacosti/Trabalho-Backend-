const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
beneficiary: { type: mongoose.Schema.Types.ObjectId, ref: 'Beneficiary', required: true },
professional: { type: mongoose.Schema.Types.ObjectId, ref: 'Professional', required: true },
unit: { type: mongoose.Schema.Types.ObjectId, ref: 'Unit', required: true },
specialty: { type: mongoose.Schema.Types.ObjectId, ref: 'Specialty', required: true },
procedure: { type: mongoose.Schema.Types.ObjectId, ref: 'Procedure', required: true },
date: { type: Date, required: true },
status: { type: String, enum: ['agendado','concluido','cancelado'], required: true }
}, { timestamps: true });

module.exports = mongoose.model('Appointment', appointmentSchema);
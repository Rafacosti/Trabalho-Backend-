const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
appointment: { type: mongoose.Schema.Types.ObjectId, ref: 'Appointment', required: true },
value: { type: Number, required: true },
issueDate: { type: Date, required: true },
paymentDate: Date,
status: { type: String, enum: ['pago','pendente','cancelado'], required: true }
}, { timestamps: true });

module.exports = mongoose.model('Invoice', invoiceSchema);
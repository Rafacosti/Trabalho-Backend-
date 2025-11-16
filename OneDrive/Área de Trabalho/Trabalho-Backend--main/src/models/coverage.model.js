const mongoose = require('mongoose');

const coverageSchema = new mongoose.Schema({
plan: { type: mongoose.Schema.Types.ObjectId, ref: 'Plan', required: true },
procedure: { type: mongoose.Schema.Types.ObjectId, ref: 'Procedure', required: true },
coverageType: { type: String, enum: ['total','parcial','nenhum'], required: true },
limit: Number,
notes: String
}, { timestamps: true });

module.exports = mongoose.model('Coverage', coverageSchema);
const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  tier: { type: String, enum: ['bronze','prata','ouro'], required: true },
  price: { type: Number, required: true, min: 0 },
  coverageIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Coverage' }],
  carencia: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Plan', planSchema);

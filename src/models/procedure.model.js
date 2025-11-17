const mongoose = require('mongoose');

const procedureSchema = new mongoose.Schema({
name: { type: String, required: true },
code: { type: String, required: true },
price: { type: Number, required: true },
description: String
}, { timestamps: true });

module.exports = mongoose.model('Procedure', procedureSchema);

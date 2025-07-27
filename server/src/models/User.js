const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ['vendor', 'supplier'], required: true },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema); 
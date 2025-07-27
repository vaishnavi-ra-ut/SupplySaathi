const mongoose = require('mongoose');

const clusterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  area: { type: String, required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
}, { timestamps: true });

module.exports = mongoose.model('Cluster', clusterSchema); 
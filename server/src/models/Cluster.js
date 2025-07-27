// models/Cluster.js
const mongoose = require("mongoose");

const clusterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  area: { type: String, required: true },
  meetingDay: { type: String, required: true },
  meetingTime: { type: String, required: true },

  coordinates: {
    type: { type: String, enum: ["Point"], default: "Point" },
    coordinates: { type: [Number], required: true }, // [lng, lat]
  },
}, { timestamps: true });

// ✅ 2dsphere index for geo queries
clusterSchema.index({ coordinates: "2dsphere" });

module.exports = mongoose.model("Cluster", clusterSchema);

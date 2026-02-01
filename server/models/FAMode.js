const mongoose = require("mongoose");

const faModeSchema = new mongoose.Schema({
  year: Number,
  branch: String,
  subject: String,
  faType: String,
  isActive: { type: Boolean, default: true },
  teacherId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

module.exports = mongoose.model("FAMode", faModeSchema);

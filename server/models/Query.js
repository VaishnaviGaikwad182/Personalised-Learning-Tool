const mongoose = require("mongoose");

const querySchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  subject: String,
  message: String,
  reply: String,
  status: { type: String, default: "open" },
  teacherId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

module.exports = mongoose.model("Query", querySchema);

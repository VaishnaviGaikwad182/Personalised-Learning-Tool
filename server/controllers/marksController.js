const Marks = require("../models/Marks");
const mongoose = require("mongoose");

// Upload marks (Teacher only)
exports.uploadMarks = async (req, res) => {
  try {
    if (req.user.role !== "teacher")
      return res.status(403).json({ msg: "Only teachers allowed" });

    const { studentId, subject, marks, examType, year, branch } = req.body;

    // Convert string ID to ObjectId
    const studentObjectId = mongoose.Types.ObjectId(studentId);

    const data = await Marks.create({
      studentId: studentObjectId,
      subject,
      marks,
      examType,
      year,
      branch,
      teacherId: req.user.id
    });

    res.json(data);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// Get marks for logged-in student
exports.getMyMarks = async (req, res) => {
  try {
    if (req.user.role !== "student")
      return res.status(403).json({ msg: "Only students allowed" });

    // convert logged-in user ID to ObjectId
    const studentId = mongoose.Types.ObjectId(req.user.id);

    const data = await Marks.find({ studentId });
    res.json(data);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
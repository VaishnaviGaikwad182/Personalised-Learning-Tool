const FAMode = require("../models/FAMode");
const User = require("../models/User");

// Teacher creates FA mode
exports.createFA = async (req, res) => {
  try {
    if (req.user.role !== "teacher")
      return res.status(403).json({ msg: "Only teachers allowed" });

    const { year, branch, subject, faType } = req.body;

    if (!year || !branch || !subject || !faType)
      return res.status(400).json({ msg: "All fields are required" });

    const fa = await FAMode.create({
      year: Number(year),
      branch: branch.trim(),
      subject: subject.trim(),
      faType: faType.trim(),
      teacherId: req.user.id
    });

    res.json(fa);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// Student fetch FA — GET request, NO body
exports.getMyFA = async (req, res) => {
  try {
    if (req.user.role !== "student")
      return res.status(403).json({ msg: "Only students allowed" });

    const student = await User.findById(req.user.id);
    if (!student) return res.status(404).json({ msg: "Student not found" });

    const fa = await FAMode.find({
      year: Number(student.year),
      branch: student.branch.trim(),
      isActive: true
    });

    res.json(fa);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

const Submission = require("../models/Submission");
const FAMode = require("../models/FAMode");
const User = require("../models/User");

// Student uploads submission
exports.uploadSubmission = async (req, res) => {
  try {
    if (req.user.role !== "student")
      return res.status(403).json({ msg: "Only students allowed" });

    const { faId, subject, fileUrl } = req.body;

    const fa = await FAMode.findById(faId);
    if (!fa) return res.status(404).json({ msg: "FA not found" });

    const submission = await Submission.create({
      studentId: req.user.id,
      faId,
      subject,
      fileUrl,
      teacherId: fa.teacherId
    });

    res.json(submission);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// Teacher fetch submissions
exports.getSubmissions = async (req, res) => {
  try {
    if (req.user.role !== "teacher")
      return res.status(403).json({ msg: "Only teachers allowed" });

    // Fetch all submissions for teacher
    const submissions = await Submission.find({ teacherId: req.user.id })
      .populate("studentId", "name email")
      .populate("faId", "faType subject year branch");

    res.json(submissions);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

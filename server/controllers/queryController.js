const Query = require("../models/Query");

exports.createQuery = async (req, res) => {
  try {
    if (req.user.role !== "student")
      return res.status(403).json({ msg: "Only students allowed" });

    const { subject, message, teacherId } = req.body;

    const q = await Query.create({
      studentId: req.user.id,
      subject,
      message,
      teacherId
    });

    res.json(q);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.getAllQueries = async (req, res) => {
  try {
    if (req.user.role !== "teacher")
      return res.status(403).json({ msg: "Only teachers allowed" });

    const queries = await Query.find({ teacherId: req.user.id })
      .populate("studentId", "name email");

    res.json(queries);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.resolveQuery = async (req, res) => {
  try {
    if (req.user.role !== "teacher")
      return res.status(403).json({ msg: "Only teachers allowed" });

    const { reply } = req.body;

    const q = await Query.findByIdAndUpdate(
      req.params.id,
      { reply, status: "resolved" },
      { new: true }
    );

    res.json(q);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

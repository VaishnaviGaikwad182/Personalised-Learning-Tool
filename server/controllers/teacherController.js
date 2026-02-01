const User = require("../models/User");
const Mark = require("../models/Marks");
const Query = require("../models/Query");

exports.getClassStats = async (req, res) => {
  try {
    const { department, year, division, subject } = req.query;

    // 1️⃣ Students in class
    const students = await User.find({
      role: "student",
      branch: department,
      year: year
    });

    const studentIds = students.map(s => s._id);

    // 2️⃣ Marks stats
    const marks = await Mark.find({
      student: { $in: studentIds },
      subject,
      division
    });

    const totalMarks = marks.reduce((sum, m) => sum + m.marks, 0);
    const avgMarks = marks.length ? (totalMarks / marks.length).toFixed(2) : 0;

    // 3️⃣ Queries stats
    const queries = await Query.find({
      subject,
      division,
      department,
      year
    });

    const pendingQueries = queries.filter(q => !q.isResolved).length;

    // 4️⃣ Response
    res.json({
      avgMarks,
      pendingQueries,
      totalStudents: students.length,
      submissionsReceived: marks.length,
      faMode: marks.some(m => m.examType?.startsWith("FA"))
    });

  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

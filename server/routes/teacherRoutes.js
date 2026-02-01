const express = require("express");
const router = express.Router();
const User = require("../models/User"); // ✅ REQUIRED
const { getClassStats } = require("../controllers/teacherController");

router.get("/class-stats", getClassStats);

// Get all teachers
router.get("/all", async (req, res) => {
  try {
    const teachers = await User.find({ role: "teacher" }).select("name");
    res.json(teachers);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;

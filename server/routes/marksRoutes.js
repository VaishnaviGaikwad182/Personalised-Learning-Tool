const express = require("express");
const router = express.Router();
const Marks = require("../models/Marks"); // Note capital M
const auth = require("../middleware/authMiddleware"); // Make sure this is correct

// GET /api/marks/my
router.get("/my", auth, async (req, res) => {
  try {
    // Mongoose auto-casts req.user.id to ObjectId
    const marks = await Marks.find({ studentId: req.user.id }).sort({ createdAt: -1 });
    res.status(200).json(marks);
  } catch (err) {
    console.error("Error fetching marks:", err);
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

module.exports = router;

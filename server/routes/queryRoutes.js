const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const Query = require("../models/Query"); // import Query model
const {
  createQuery,
  getAllQueries,
  resolveQuery
} = require("../controllers/queryController");

router.post("/create", auth, createQuery);
router.get("/all", auth, getAllQueries);
router.put("/resolve/:id", auth, resolveQuery);
// GET /api/queries/my
router.get("/my", auth, async (req, res) => {
  try {
    const queries = await Query.find({ studentId: req.user.id })
      .populate("teacherId", "name")   // ⭐ ADD THIS
      .sort({ createdAt: -1 });

    res.json(queries);
  } catch (err) {
    res.status(500).json({ msg: "Internal Server Error" });
  }
});


module.exports = router;

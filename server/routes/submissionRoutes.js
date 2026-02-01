const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const { uploadSubmission, getSubmissions } = require("../controllers/submissionController");

// Student uploads submission
router.post("/upload", auth, uploadSubmission);

// Teacher views submissions
router.get("/all", auth, getSubmissions);

module.exports = router;

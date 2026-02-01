const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const { createFA, getMyFA } = require("../controllers/faController");

// Teacher creates FA
router.post("/create", auth, createFA);

// Student fetch FA — GET request, no body
router.get("/my", auth, getMyFA);

module.exports = router;

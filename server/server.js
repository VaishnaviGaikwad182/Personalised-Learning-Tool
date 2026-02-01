require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

// Connect MongoDB
connectDB();

const app = express();

// Enable CORS
app.use(cors());

app.use((req, res, next) => {
  if (req.method === "GET" || req.headers['content-length'] === '0') {
    return next(); 
  }
  express.json()(req, res, next);
});

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/marks", require("./routes/marksRoutes"));
app.use("/api/queries", require("./routes/queryRoutes"));
app.use("/api/fa", require("./routes/faRoutes"));
app.use("/api/submissions", require("./routes/submissionRoutes"));
app.use("/api/teacher", require("./routes/teacherRoutes"));

const authMiddleware = require("./middleware/authMiddleware");
app.get("/api/protected", authMiddleware, (req, res) => {
  res.json({
    msg: "Access granted",
    user: req.user
  });
});


app.use((req, res) => {
  res.status(404).json({ msg: "Route not found" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// app.js
const express = require("express");
const cors = require("cors");
const excelRoutes = require("./routes/excelRoutes");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Enable CORS for all origins
app.use(cors());

// Routes
app.use("/api", excelRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

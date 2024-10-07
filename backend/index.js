const express = require("express");
const cors = require("cors");
const excelRoutes = require("./routes/excelRoutes");

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(cors());

app.use("/api", excelRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

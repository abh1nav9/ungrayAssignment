const express = require("express");
const multer = require("multer");
const { insertDataFromExcel, fetchDataFromTables } = require("../controller/excelController.js");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

// Upload Excel file
router.post("/upload", upload.single("path for SheetData.xlsx"), insertDataFromExcel);

// Fetch data from tables
router.get("/data", fetchDataFromTables);

module.exports = router;

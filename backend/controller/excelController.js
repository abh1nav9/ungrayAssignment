const xlsx = require("xlsx");
const client = require("../config/db.js");

const insertDataFromExcel = async (req, res) => {
  try {
    // Load the uploaded Excel file
    const workbook = xlsx.readFile(req.file.path);
    const comp2 = xlsx.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
    const comp6 = xlsx.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[1]]);

    // Function to create tables and insert data
    const insertIntoTable = async (tableName, data) => {
      const columns = Object.keys(data[0])
        .map((col) => `"${col}" TEXT`)
        .join(", ");
      await client.query(`CREATE TABLE IF NOT EXISTS ${tableName} (${columns})`);

      for (const row of data) {
        const keys = Object.keys(row)
          .map((key) => `"${key}"`)
          .join(", ");
        const values = Object.values(row)
          .map((value) => `'${value}'`)
          .join(", ");
        try {
          await client.query(`INSERT INTO ${tableName} (${keys}) VALUES (${values})`);
        } catch (insertError) {
          console.error(`Error inserting data into ${tableName}:`, insertError);
        }
      }
    };

    // Insert data from sheets into respective tables
    await insertIntoTable("table1", comp2);
    await insertIntoTable("table2", comp6);

    res.status(200).json({ message: "Data inserted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error inserting data", error });
  }
};

const fetchDataFromTables = async (req, res) => {
  try {
    const table1Data = await client.query("SELECT * FROM table1");
    const table2Data = await client.query("SELECT * FROM table2");

    res.status(200).json({
      table1: table1Data.rows,
      table2: table2Data.rows,
      // table3: table3Data.rows, // Uncomment if you want to include data from table3
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Error fetching data", error });
  }
};

module.exports = { insertDataFromExcel, fetchDataFromTables };

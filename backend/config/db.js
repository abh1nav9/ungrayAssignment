// config/db.js
const { Client } = require("pg");

const client = new Client({
  host: "ep-calm-union-a1bknn1o.ap-southeast-1.aws.neon.tech",
  port: 5432,
  user: "ungray_owner",
  password: "C7eQVWRvH5gd",
  database: "ungray",
  ssl: {
    rejectUnauthorized: false, // Bypasses SSL certificate verification
  }
});

client.connect()
  .then(() => console.log("Connected to NeonDB PostgreSQL"))
  .catch((err) => console.error("Connection error", err.stack));

module.exports = client;

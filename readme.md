const express = require("express");
const mysql = require("mysql");
require("dotenv").config();

const app = express();
const port = 5000;

// MySQL Database Connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Connected to MySQL Database");
  }
});

// Sample API Route
app.get("/", (req, res) => {
  res.send("Blood Donation Management System Backend Running...");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
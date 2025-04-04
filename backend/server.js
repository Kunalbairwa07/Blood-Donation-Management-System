const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ MySQL Database Connection
const db = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "8269558801",
    database: process.env.DB_NAME || "blood_donation"
});

db.connect((err) => {
    if (err) {
        console.error("❌ Database connection failed:", err);
    } else {
        console.log("✅ Connected to MySQL Database");
    }
});

// ✅ Get all donors
app.get("/donors", (req, res) => {
    const sql = "SELECT * FROM donors";
    db.query(sql, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(result);
    });
});

// ✅ Add a new donor (Fix: Only ONE route)
app.post("/add-donor", (req, res) => {
    const { name, email, blood_group, contact } = req.body;  // 🔥 Fix: age removed, blood_group fixed

    console.log("📩 Received donor data:", req.body);

    if (!name || !email || !blood_group || !contact) {
        return res.status(400).json({ message: "All fields are required!" });
    }

    const sql = "INSERT INTO donors (name, email, blood_group, contact) VALUES (?, ?, ?, ?)";
    db.query(sql, [name, email, blood_group, contact], (err, result) => {
        if (err) {
            console.error("❌ Database Insert Error:", err);
            return res.status(500).json({ message: "Database error" });
        }
        console.log("✅ New Donor Added:", { id: result.insertId, ...req.body });
        res.json({ message: "🎉 Donor added successfully!" });
    });
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");

const app = express();
const db = new sqlite3.Database("database.db");

app.use(bodyParser.json());
app.use(express.static("public"));

/* DATABASE */
db.run(`
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE,
  password TEXT
)
`);

/* CREATE ACCOUNT */
app.post("/signup", (req, res) => {
  const { username, password, confirmPassword } = req.body;

  if (password !== confirmPassword)
    return res.json({ error: "Passwords do not match" });

  const hash = bcrypt.hashSync(password, 10);

  db.run(
    "INSERT INTO users (username, password) VALUES (?, ?)",
    [username, hash],
    err => {
      if (err) return res.json({ error: "Username already exists" });
      res.json({ success: "Account created" });
    }
  );
});

/* LOGIN */
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  db.get(
    "SELECT * FROM users WHERE username = ?",
    [username],
    (err, user) => {
      if (!user) return res.json({ error: "User not found" });

      if (!bcrypt.compareSync(password, user.password))
        return res.json({ error: "Wrong password" });

      res.json({ success: "Login successful" });
    }
  );
});

/* DELETE ACCOUNT */
app.post("/delete", (req, res) => {
  const { username, password } = req.body;

  db.get(
    "SELECT * FROM users WHERE username = ?",
    [username],
    (err, user) => {
      if (!user) return res.json({ error: "User not found" });

      if (!bcrypt.compareSync(password, user.password))
        return res.json({ error: "Wrong password" });

      db.run("DELETE FROM users WHERE username = ?", [username]);
      res.json({ success: "Account deleted" });
    }
  );
});

app.listen(3000, () =>
  console.log("Server running on http://localhost:3000")
);

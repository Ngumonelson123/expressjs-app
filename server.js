// server.js
const express = require("express");
const path = require("path");
const workingHours = require("./middleware/workingHours");

const app = express();
const PORT = process.env.PORT || 3000;

// View engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Static files (CSS)
app.use(express.static(path.join(__dirname, "public")));

// Custom middleware to restrict access
app.use(workingHours);

// Routes
app.get("/", (req, res) => {
  res.render("home", { title: "Home" });
});

app.get("/services", (req, res) => {
  res.render("services", { title: "Our Services" });
});

app.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact Us" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

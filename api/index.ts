require("dotenv").config();
const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();

app.get("/", (req, res) => {
  res.json({ status: 200, message: "Hello World" });
});
app.get("/auth", (req, res) => {
  const { code } = req.query;
  res.redirect(`cvnotion://auth/callback?code=${code}`);
});

app.listen(PORT);

module.exports = app;

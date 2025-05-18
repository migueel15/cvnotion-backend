import express from "express";

const PORT = process.env.PORT || 3000;
const app = express();

app.get("/", (req, res) => {
  res.json({ status: 200, message: "Hello World" });
});
app.get("/auth", (req, res) => {
  res.json({ status: 200, code: "este es tu codigo" });
});

app.listen(PORT);

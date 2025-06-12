const fs = require("fs");
const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.static("public")); // nếu có css/js ở /public

app.get("/", (req, res) => {
  let html = fs.readFileSync("index.html", "utf-8");
  html = html.replace("{{API_KEY}}", process.env.API_KEY);
  res.send(html);
});

app.listen(3000, () => console.log("Server tại http://localhost:3000"));

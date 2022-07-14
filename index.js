import express from "express";
import path from "path";
const __dirname = path.resolve(); 
const app = express();
const port = 5000;

app.use(express.static("public"));
//index.js
// app.get("/*", (req, res) => {
//   res.sendFile("index.html", { root: path.join(__dirname, "public") });
// });

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

// index.js
// module.exports = app;

app.listen(port, () => {
  console.log(`it's alive on http://localhost:${port}`);
});
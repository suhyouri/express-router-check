import express from "express";
import product from "./api/product"

const app = express();
import path from "path";
const __dirname = path.resolve();
import { createServer } from "http";

const port = 5000;

// app.use(
//   "/static", express.static(path.resolve(__dirname, "static"))
// );

app.use("/api/product", product);

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

const httpServer = createServer(app);

httpServer.listen(port, () => {
  console.log(`it's alive on http://localhost:${port}`);
});

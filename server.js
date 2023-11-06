import express from "express";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs/promises";

const dirName = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 7777;

app.get("/", async (req, res) => {
  try {
    const filePath = path.join(dirName, "index.html");
    const data = await fs.readFile(filePath);
    res.setHeader("Content-Type", "text/html");
    res.send(data);
  } catch (err) {
    res.status(404).send("File not found");
  }
});

app.get("/:filename", async (req, res) => {
  try {
    const filePath = path.join(dirName, `dist/${req.params.filename}`);
    const data = await fs.readFile(filePath);
    res.setHeader("Content-Type", "application/wasm");
    res.send(data);
  } catch (err) {
    res.status(404).send("File not found");
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

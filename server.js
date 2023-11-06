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

app.get("/main.js", async (req, res) => {
  try {
    const filePath = path.join(dirName, "dist/main.js");
    const data = await fs.readFile(filePath);
    res.setHeader("Content-Type", "text/javascript");
    res.send(data);
  } catch (err) {
    res.status(404).send("File not found");
  }
});

app.get("/jco_test.wasm", async (req, res) => {
  try {
    const filePath = path.join(
      dirName,
      "target/wasm32-wasi/debug/jco_test.wasm"
    );
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

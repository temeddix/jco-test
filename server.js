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

app.use("/out_dir", express.static(path.join(dirName, "out_dir")));

app.use("/packages", express.static(path.join(dirName, "packages")));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

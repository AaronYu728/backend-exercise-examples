import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
  // res.send("Hello, World!afs");
  res.sendFile(__dirname + "/index.html");
});

app.post("/submit", (req, res) => {
  // res.send("Got a POST request.");
  console.log(req.body);
  res.send("Return some data to frontend.");
});

app.get("/user/about", (req, res) => {
  res.send(`<h1 style="color:green;">Got "about" view information.</h1>`);
});

app.put("/user/updateWholeOne", (req, res) => {
  res.send("Got a PUT request at /user");
});

app.patch("/user/updateParts", (req, res) => {
  res.send("Got a PATCH request at /user");
});

app.delete("/user/delete", (req, res) => {
  res.send("Got a DELETE request.");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});

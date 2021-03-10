const ejs = require("ejs").__express;
import express from "express";

const app = express();
app.set("view engine", "ejs");
app.engine('.ejs', ejs);
const port = 8080;
app.get("/", (req, res) => {
  res.send("Update");
});
app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});

import express from "express";

const app = express();
app.set("view engine", "ejs");
app.engine('.ejs', require('ejs').renderFile);
const port = 8080;
app.get("/", (req, res) => {
  res.send("Update");
});
app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});

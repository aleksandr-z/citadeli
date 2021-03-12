import ejs from "ejs";
import express from "express";

const app = express();
app.set("view engine", "ejs");
app.engine('.ejs', ejs.__express);
const port = 8000;
app.get("/", (req, res) => {
  res.send("config 2");
});
app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});

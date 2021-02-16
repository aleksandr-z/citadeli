import express from "express";

const app = express();
const port = 8080;
app.get("/", (req, res) => {
  res.send("Update");
});
app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const msg = req.query.msg;
  console.log(msg);
});

app.listen(8081, "10.141.201.84");

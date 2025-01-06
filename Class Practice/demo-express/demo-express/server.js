const mongoose = require("mongoose");
const User = require("./Models/userModel");
const app = require("./index");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
// console.log(process.env);
// const

// console.log(process.env.USER);

app.set("view engine", "ejs");

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
  })
  .then((conn) => {
    // console.log(conn);
    console.log("MongoDB Connected ......");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(process.env.PORT, () => {
  console.log("Server initiated ....");
});

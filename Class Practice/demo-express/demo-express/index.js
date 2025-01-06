const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const userRouter = require("./Routes/userRoute");

const app = express();

const func1 = (req, res, next) => {
  req.requestedAt = new Date().toISOString();
  console.log("Custom Middleware invoked....");
  next();
};

app.use(express.urlencoded({ extended: false }));
app.use(express.static("./public"));
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/users", userRouter);

app.get("/", (request, res) => {
  return res.send("Home Page");
});

app.get("/about", (req, res) => {
  return res.send(`About Page - ${req.query.name} and id ${req.query.id}`);
});

app.get("/contact", (req, res) => {
  return res.send("Contact");
});
app.use(func1);

app.get("/users", (req, res) => {
  const html = `
  <table>
  <tr>
    <th>Id</th>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Email</th>
    <th>Gender</th>
    <th>IP</th>
    <th>Organization</th>
  </tr>

  ${users
    .map(
      (user) => `<tr>
      <td>${user.id}</td>
      <td>${user.first_name}</td>
      <td>${user.last_name}</td>
      <td>${user.email}</td>
      <td>${user.gender}</td>
      <td>${user.ip_address}</td>
      <td>${user.Organization}</td>
    </tr>`
    )
    .join("")}
  
  </table>
  `;

  return res.send(html);
});

// app.get("/api/users/:id");

// app.patch("/api/users/:id", );

// app.delete("/api/users/:id", );

module.exports = app;
// module.exports = User;

const users = require("./MOCK_DATA.json");

const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));

app.get("/", (request, res) => {
  return res.send("Home Page");
});

app.get("/about", (req, res) => {
  return res.send(`About Page - ${req.query.name} and id ${req.query.id}`);
});

app.get("/contact", (req, res) => {
  return res.send("Contact");
});

app.get("/api/users", (req, res) => {
  return res.send(users);
});

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

app
  .route("/api/users/:id")
  .get((req, res) => {
    const IDNUM = Number(req.params.id);
    const user = users.find((user) => user.id === IDNUM);
    res.json(user);
  })
  .patch((req, res) => {
    //update a user with ID
    res.json({
      msg: "UPDATE A USER",
    });
  })
  .delete((req, res) => {
    //Delete a user with ID
    res.json({
      msg: "DELETE A USER",
    });
  });

app.get("/api/users/:id");

app.post("/api/users", (req, res) => {
  //Create a user
  const body = req.body;
  console.log(body);
  res.json({
    msg: "CREATE A USER",
  });
});

// app.patch("/api/users/:id", );

// app.delete("/api/users/:id", );

app.listen(8080, () => {
  console.log("Server initiated ....");
});

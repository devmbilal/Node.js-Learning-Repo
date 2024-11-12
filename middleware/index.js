const users = require("./MOCK_DATA.json");
const fs = require("fs");
const express = require("express");
const morgan = require("morgan");

const app = express();

const userRouter = express.Router();

const getAllUsers = (req, res) => {
  return res.status(200).json({
    status: "success",
    time: req.requestedAt,
  });
};

const createUser = (req, res) => {
  //Create a user
  const body = req.body;
  console.log(body);

  users.push({ id: users.length + 1, ...body });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    res.json({
      msg: "Success",
    });
  });
};

const updateUserByID = (req, res) => {
  //CREATE USER with ID
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);

  if (!user) {
    return res.status(404).json({
      status: "Failure",
      msg: `The user with ID ${id} does not exist`,
    });
  }

  const index = users.indexOf(user);
  const updObjUser = Object.assign(user, req.body);
  users[index] = updObjUser;

  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
    return res.status(200).json({
      status: "success",
      data: {
        username: user,
      },
    });
  });
};
const getUserByID = (req, res) => {
  const IDNUM = Number(req.params.id);
  const user = users.find((user) => user.id === IDNUM);
  res.json(user);
};
const deleteUserByID = (req, res) => {
  //Delete a user with ID
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);

  if (!user) {
    return res.status(404).json({
      msg: "Failure",
    });
  }
  const index = users.indexOf(user);

  users.splice(index, 1);

  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
    return res.status(200).json({
      status: `Success with deletion of user ${id}`,
    });
  });
};

const func1 = (req, res, next) => {
  req.requestedAt = new Date().toISOString();
  console.log("Custom Middleware invoked....");
  next();
};

app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
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
userRouter.route("/").get(getAllUsers).post(createUser);

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

userRouter
  .route("/:id")
  .get(getUserByID)
  .patch(updateUserByID)
  .delete(deleteUserByID);

// app.get("/api/users/:id");

// app.patch("/api/users/:id", );

// app.delete("/api/users/:id", );

app.listen(8080, () => {
  console.log("Server initiated ....");
});

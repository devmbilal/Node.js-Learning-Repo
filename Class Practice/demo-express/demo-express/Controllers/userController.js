// const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const User = require("./../Models/userModel");
// const users = require("./../MOCK_DATA.json");
const USER = require("./../server");

exports.validateBody = (req, res, next) => {
  if (!req.body.email) {
    return res.status(400).json({
      status: "fail",
      msg: "Not a valid data",
    });
  }
  next();
};

// exports.getAllUsers = async (req, res) => {
//   try {
//     const users = await User.find();
//     return res.status(200).json({
//       status: "success",
//       data: { users },
//     });
//   } catch (error) {
//     return res.status(204).json({
//       status: "failure",
//       msg: error.message,
//     });
//   }
// };

exports.getAllUsers = async (req, res) => {
  try {
    const students = await User.find({});
    res.render("home", {
      studentsList: students,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.createUser = async (req, res) => {
  try {
    const newStudent = new User({
      first_name: req.body.firstName,
      last_name: req.body.lastName,
      gender: req.body.gender,
      email: req.body.email,
    });
    await newStudent.save();
  } catch (error) {
    console.log(error);
  }
};

// exports.createUser = (req, res) => {
//   //Create a user

//   User.create({
//     first_name: "Saleem",
//     gender: "male",
//     age: 25,
//   })
//     .then((doc) => {
//       console.log(doc);
//       return res.status(201).json({
//         status: "success",
//         data: { doc },
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//       return res.status(204).json({
//         status: "fail",
//         msg: err.message,
//       });
//     });

//   // const newUser = new User({
//   //   first_name: "Shakir",
//   //   last_name: "Umair",
//   //   email: "ushakir@gmail.com",
//   //   gender: "male",
//   // });

//   // newUser
//   //   .save()
//   //   .then((doc) => {
//   //     console.log(doc);
//   //     return res.status(201).json({
//   //       status: "success",
//   //       data: { newUser },
//   //     });
//   //   })
//   //   .catch((err) => {
//   //     console.log(err);
//   //     return res.status(204).json({
//   //       status: "fail",
//   //       msg: err.message,
//   //     });
//   //   });
// };

exports.updateUserByID = (req, res) => {
  //CREATE USER with ID
};
exports.getUserByID = async (req, res) => {
  try {
    const result = await User.findByID(req.params.id);
    console.log(result);
    res.status(200).json({
      status: "success",
      data: { result },
    });
  } catch (error) {
    res.status(204).json({
      status: "failure",
      msg: error.message,
    });
  }
};
exports.deleteUserByID = (req, res) => {
  //Delete a user with ID
};

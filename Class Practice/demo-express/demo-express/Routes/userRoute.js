const express = require("express");
const userController = require("./../Controllers/userController");
const router = express.Router();

// router.param("id", userController.checkID);

router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.validateBody, userController.createUser);

router
  .route("/:id")
  .get(userController.getUserByID)
  .patch(userController.updateUserByID)
  .delete(userController.deleteUserByID);

module.exports = router;

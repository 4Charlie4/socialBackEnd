const router = require("express").Router();

const {
  getAllUsers,
  getUserById,
  createUsers,
} = require("../../controller/userController");

router.route("/").get(getAllUsers).post(createUsers);

router.route("/:id").get(getUserById);

module.exports = router;

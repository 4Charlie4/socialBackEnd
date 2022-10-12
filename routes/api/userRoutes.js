const router = require("express").Router();

const {
  getAllUsers,
  getUserById,
  createUsers,
  addFriend,
} = require("../../controller/userController");

router.route("/").get(getAllUsers).post(createUsers);

router.route("/:id").get(getUserById);

router.route("/:userId/friends/:friendId").post(addFriend);

module.exports = router;

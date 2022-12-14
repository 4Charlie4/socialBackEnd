const router = require("express").Router();

const {
  getAllUsers,
  getUserById,
  createUsers,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controller/userController");

router.route("/").get(getAllUsers).post(createUsers);

router.route("/:id").get(getUserById).delete(deleteUser);

router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;

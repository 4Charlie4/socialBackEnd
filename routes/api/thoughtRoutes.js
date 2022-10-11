const router = require("express").Router();
const {
  addThought,
  removeThought,
  getAllThoughts,
} = require("../../controller/thoughtController");

router.route("/").get(getAllThoughts);

router.route("/:userId").post(addThought);

router.route("/:userId/:thoughtId").delete(removeThought);

module.exports = router;

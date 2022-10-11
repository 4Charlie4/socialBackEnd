const router = require("express").Router();
const {
  addThought,
  removeThought,
  getAllThoughts,
  addReaction,
  removeReaction,
} = require("../../controller/thoughtController");

router.route("/").get(getAllThoughts);

router.route("/:userId").post(addThought);

router.route("/:userId/:thoughtId").put(addReaction).delete(removeThought);

router.route("/:userId/:thoughtId/:reactionId").delete(removeReaction);

module.exports = router;

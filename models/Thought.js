const { Schema, model, Types } = require("mongoose");

//Subdocument for thoughts
const ReactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    //Get method here to format date.
  },
});

const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      //Get method will go here to format date.
    },
    username: {
      type: String,
      required: true,
    },
  },
  {
    JSON: {
      virtuals: true,
      getters: true,
    },
  }
);

//Virtual will go here

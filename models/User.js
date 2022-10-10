const { Schema, model } = require("mongoose");
const validateEmail = require("../utils/emailFormat");

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      //Validates whether the input is a valid email .
      validate: [
        validateEmail,
        "Please make sure your email address is formatted correctly.",
      ],
      match: [
        /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
        "Please make sure your email address is formatted correctly.",
      ],
    },

    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    JSON: {
      virtuals: true,
      getters: true,
    },
  }
);

//Virtual goes here
UserSchema.virtual("thoughtCount").get(function () {
  return this.thoughts.reduce(
    (total, thought) => total + thought.reactions.length + 1,
    0
  );
});

const User = model("User", UserSchema);

module.exports = User;

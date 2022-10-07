const { Schema, model } = require("mongoose");

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
    //   reactions: [
    //     {
    //       type: Schema.Types.ObjectId,
    //       ref: "reaction",
    //     },
    //   ],
  },
  {
    JSON: {
      virtuals: true,
    },
  }
);

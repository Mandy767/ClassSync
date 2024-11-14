const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    profilePicture: {
      type: String,
    },
    role: {
      type: String,
      enum: ["student", "professor"],
      required: true,
    },
    access_token: {
      type: String, // Store the access token
    },
    refresh_token: {
      type: String, // Store the refresh token
    },
  },
  { timestamps: true }
);

const User = model("User", userSchema);

module.exports = User;

const { Schema, model } = require("mongoose");

// Announcement Schema
const announcementSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    fileLink: {
      type: String, // This will store the link to a file (can be a URL)
      required: false, // Optional: not required if no file link is provided
    },
  },
  { timestamps: true }
); // Timestamps to track creation and update time of announcements

// Course Schema
const courseSchema = new Schema(
  {
    courseName: {
      type: String,
      required: true,
    },
    courseCode: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["Theory", "Elective"],
      required: true,
    },
    branch: {
      type: String,
      enum: ["CSE", "ECE", "DSAI"],
      required: true,
    },
    semester: {
      type: Number,
      required: true,
      min: 1,
      max: 8,
    },
    professorId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    students: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    announcements: [announcementSchema], // Array of announcements
  },
  { timestamps: true }
); // Timestamps for the course

const Course = model("Course", courseSchema);

module.exports = Course;

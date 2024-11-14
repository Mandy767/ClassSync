const express = require("express");

const courseRoutes = express.Router();

const {
  createCourse,
  getCoursesForStudent,
  getCoursesForProfessor,
  getCourseById,
  updateCourse,
  deleteCourse,
  joinCourse,
  addAnnouncement,
} = require("../controllers/course.controller");

const { isProfessor, isStudent, isAuth } = require("../middlewares/auth");

// Route to create a new course
courseRoutes.post("/", isProfessor, createCourse);

// Route to get all courses for a specific student
courseRoutes.get("/student/:studentId", isStudent, getCoursesForStudent);

// Route to get all courses for a specific professor
courseRoutes.get(
  "/professor/:professorId",
  isProfessor,
  getCoursesForProfessor
);

// Route to get a course by ID
courseRoutes.get("/:id", isAuth, getCourseById);

// Route to update a course by ID
courseRoutes.put("/:id", isProfessor, updateCourse);

// Route to delete a course by ID
courseRoutes.delete("/:id", isProfessor, deleteCourse);

// Route to allow a student to join a course
courseRoutes.post("/join/:courseId/:studentId", isStudent, joinCourse);

// Route to add an announcement to a course
courseRoutes.post("/:courseId/announcements", isProfessor, addAnnouncement);

module.exports = courseRoutes;

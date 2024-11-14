const Course = require("../models/course.model");

// Create a new course
const createCourse = async (req, res) => {
  try {
    const {
      courseName,
      courseCode,
      description,
      type,
      branch,
      semester,
      professorId,
      students,
    } = req.body;

    const newCourse = new Course({
      courseName,
      courseCode,
      description,
      type,
      branch,
      semester,
      professorId,
      students,
    });

    await newCourse.save();
    res
      .status(201)
      .json({ message: "Course created successfully", course: newCourse });
  } catch (error) {
    res.status(500).json({ message: "Error creating course", error });
  }
};

// Get all courses for a specific student
const getCoursesForStudent = async (req, res) => {
  try {
    const { studentId } = req.params;
    const courses = await Course.find({ students: studentId })
      .populate("professorId")
      .populate("students");
    res.status(200).json({ courses });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching courses for student", error });
  }
};

// Get all courses for a specific professor
const getCoursesForProfessor = async (req, res) => {
  try {
    const { professorId } = req.params;
    const courses = await Course.find({ professorId })
      .populate("professorId")
      .populate("students");
    res.status(200).json({ courses });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching courses for professor", error });
  }
};

// Get a course by ID
const getCourseById = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await Course.findById(id)
      .populate("professorId")
      .populate("students");

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.status(200).json({ course });
  } catch (error) {
    res.status(500).json({ message: "Error fetching course", error });
  }
};

// Update a course by ID
const updateCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const updatedCourse = await Course.findByIdAndUpdate(id, updatedData, {
      new: true,
    })
      .populate("professorId")
      .populate("students");

    if (!updatedCourse) {
      return res.status(404).json({ message: "Course not found" });
    }

    res
      .status(200)
      .json({ message: "Course updated successfully", course: updatedCourse });
  } catch (error) {
    res.status(500).json({ message: "Error updating course", error });
  }
};

// Delete a course by ID
const deleteCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCourse = await Course.findByIdAndDelete(id);

    if (!deletedCourse) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.status(200).json({ message: "Course deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting course", error });
  }
};

const joinCourse = async (req, res) => {
  try {
    const { courseId, studentId } = req.params;

    // Find the course by courseId
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    // Check if the student is already in the course
    if (course.students.includes(studentId)) {
      return res
        .status(400)
        .json({ message: "Student is already enrolled in this course" });
    }

    // Add the student to the course's students array
    course.students.push(studentId);

    // Save the updated course
    await course.save();

    return res
      .status(200)
      .json({ message: "Student successfully joined the course", course });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

// Add an announcement to a course
const addAnnouncement = async (req, res) => {
  try {
    const { courseId } = req.params;
    const { title, description, fileLink } = req.body;

    // Find the course by ID
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    // Create a new announcement object
    const newAnnouncement = {
      title,
      description,
      fileLink,
    };

    // Add the new announcement to the course's announcements array
    course.announcements.push(newAnnouncement);

    // Save the updated course with the new announcement
    await course.save();

    return res.status(200).json({
      message: "Announcement added successfully",
      course,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error", error });
  }
};

module.exports = {
  createCourse,
  getCoursesForStudent,
  getCoursesForProfessor,
  getCourseById,
  updateCourse,
  deleteCourse,
  joinCourse,
  addAnnouncement,
};

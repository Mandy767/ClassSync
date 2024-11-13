import LoadingSpinner from "./components/loading-spinner";

import LandingPage from "./pages/landing-page"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import TeacherSidebarLayout from "./layouts/teacher-sidebar-layout";
import StudentSidebarLayout from "./layouts/student-sidebar-layout";


import CreateCourse from "./pages/teacher/create-course";
import MyCourses from "./pages/teacher/my-courses";
import AddAssignments from "./pages/teacher/add-assignments";
import AllCourses from "./pages/student/all-courses";
import AddAnnouncements from "./pages/teacher/add-announcements";
import CourseInfo from "./pages/teacher/course-info";


function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/google/callback"
            element={<LoadingSpinner />}
          />
          <Route path="/" element={<LandingPage />} />
          <Route path="/student" element={<StudentSidebarLayout />}>

            <Route path="all-courses" element={<AllCourses />} />


          </Route>

          <Route path="/teacher" element={<TeacherSidebarLayout />}>
            <Route path="my-courses/create" element={<CreateCourse />} />
            <Route path="my-courses/courseid:" element={<CourseInfo />} />

            <Route path="my-courses" element={<MyCourses />} />
            <Route path="my-courses/courseid:/add-assignments" element={<AddAssignments />} />
            <Route path="my-courses/courseid:/add-announcements" element={<AddAnnouncements />} />

          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App

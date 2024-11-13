import React, { useState } from 'react';
import AddAssignments from './add-assignments';
import AddAnnouncements from './add-announcements';
import { useNavigate } from 'react-router-dom';



function CourseInfo() {
    // Sample course information (you can replace this with dynamic data)
    const course = {
        id: 1,
        name: 'Computer Science 101',
        description: 'An introductory course to Computer Science covering basic concepts.',
        instructor: 'Dr. John Doe',
    };

    const navigate = useNavigate()

    // State for assignments and announcements
    const [assignments, setAssignments] = useState([]);
    const [announcements, setAnnouncements] = useState([]);

    // State to control visibility of add forms
    const [showAddAssignment, setShowAddAssignment] = useState(false);
    const [showAddAnnouncement, setShowAddAnnouncement] = useState(false);


    return (
        <div className="max-w-4xl mx-auto p-6">
            {/* Course Information */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h1 className="text-3xl font-bold mb-4">{course.name}</h1>
                <p className="text-gray-700 mb-2"><strong>Description:</strong> {course.description}</p>
                <p className="text-gray-700"><strong>Instructor:</strong> {course.instructor}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4 mb-6">
                <button
                    onClick={() => { navigate("/teacher/my-courses/courseid:/add-assignments") }}
                    className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
                >
                    Create Assignment
                </button>
                <button
                    onClick={() => { navigate("/teacher/my-courses/courseid:/add-announcements") }}
                    className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors"
                >
                    Create Announcement
                </button>
            </div>

            {/* Add Assignment Form */}
            {showAddAssignment && (
                <div className="mb-6">
                    <AddAssignments
                        onAddAssignment={handleAddAssignment}
                        onClose={() => setShowAddAssignment(false)}
                    />
                </div>
            )}

            {/* Add Announcement Form */}
            {showAddAnnouncement && (
                <div className="mb-6">
                    <AddAnnouncements
                        onAddAnnouncement={handleAddAnnouncement}
                        onClose={() => setShowAddAnnouncement(false)}
                    />
                </div>
            )}

            {/* Assignments List */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-2xl font-bold mb-4">Assignments</h2>
                {assignments.length === 0 ? (
                    <p className="text-gray-600">No assignments created yet.</p>
                ) : (
                    <ul className="space-y-4">
                        {assignments.map((assignment) => (
                            <li key={assignment.id} className="border-b pb-2">
                                <h3 className="text-xl font-semibold">{assignment.assignmentTitle}</h3>
                                <p className="text-gray-700"><strong>Course:</strong> {assignment.courseName}</p>
                                <p className="text-gray-700"><strong>Description:</strong> {assignment.description}</p>
                                {assignment.fileName && (
                                    <p className="text-gray-700"><strong>File:</strong> {assignment.fileName}</p>
                                )}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Announcements List */}
            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-4">Announcements</h2>
                {announcements.length === 0 ? (
                    <p className="text-gray-600">No announcements created yet.</p>
                ) : (
                    <ul className="space-y-4">
                        {announcements.map((announcement) => (
                            <li key={announcement.id} className="border-b pb-2">
                                <h3 className="text-xl font-semibold">{announcement.title}</h3>
                                <p className="text-gray-700"><strong>Course:</strong> {announcement.course}</p>
                                <p className="text-gray-700"><strong>Description:</strong> {announcement.description}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default CourseInfo;

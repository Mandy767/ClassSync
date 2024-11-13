import React, { useState } from 'react';

function MyCourses() {
    // Dummy courses data
    const [courses, setCourses] = useState([
        {
            courseName: 'Introduction to Programming',
            description: 'An introductory course on programming concepts and Python.',
            courseCode: 'CS101',
            type: 'theory',
            branch: 'CSE',
            semester: '1',
        },
        {
            courseName: 'Data Structures',
            description: 'Covers fundamental data structures and algorithms.',
            courseCode: 'CS201',
            type: 'theory',
            branch: 'CSE',
            semester: '3',
        },
    ]);

    // Handle course deletion
    const handleDelete = (courseCode) => {
        setCourses((prevCourses) => prevCourses.filter(course => course.courseCode !== courseCode));
    };

    return (
        <div className="max-w-2xl mx-auto p-6">
            <h2 className="text-2xl font-bold mb-6">My Courses</h2>
            {courses.length === 0 ? (
                <p>No courses available.</p>
            ) : (
                <ul>
                    {courses.map((course) => (
                        <li key={course.courseCode} className="border p-4 mb-2 rounded-md shadow">
                            <h3 className="font-semibold">{course.courseName}</h3>
                            <p>Code: {course.courseCode}</p>
                            <p>Description: {course.description}</p>
                            <p>Type: {course.type}</p>
                            <p>Branch: {course.branch}</p>
                            <p>Semester: {course.semester}</p>
                            <button
                                onClick={() => handleDelete(course.courseCode)}
                                className="mt-2 text-white bg-red-600 hover:bg-red-700 py-2 px-4 rounded-md"
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default MyCourses;

import React from 'react';

const dummyCourses = [
    {
        id: 1,
        title: 'Introduction to Programming',
        description: 'Learn the basics of programming with hands-on examples.',
        instructor: 'John Doe',
    },
    {
        id: 2,
        title: 'Web Development Bootcamp',
        description: 'Master HTML, CSS, and JavaScript in this comprehensive bootcamp.',
        instructor: 'Jane Smith',
    },
    {
        id: 3,
        title: 'Data Science Essentials',
        description: 'Dive into the world of data analysis, machine learning, and Python.',
        instructor: 'Alice Johnson',
    },
];

function AllCourses() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-semibold mb-4">All Courses</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {dummyCourses.map((course) => (
                    <div
                        key={course.id}
                        className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                    >
                        <h2 className="text-xl font-semibold text-blue-600">{course.title}</h2>
                        <p className="text-gray-700 mt-2">{course.description}</p>
                        <p className="text-sm text-gray-500 mt-2">Instructor: {course.instructor}</p>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default AllCourses;

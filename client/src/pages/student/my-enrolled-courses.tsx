import React, { useState } from 'react';
import CourseModal from '../student/components/course-modal';

const enrolledCourses = [
    {
        id: 1,
        title: 'Introduction to Programming',
        description: 'A beginner-friendly course on programming fundamentals.',
        instructor: 'John Doe',
        announcements: [
            'Class canceled next week.',
            'New assignment posted for Week 3.',
        ],
        assignments: [
            'Assignment 1: Basic Programming Tasks (Due: 10/10)',
            'Assignment 2: Implement a Simple Calculator (Due: 10/17)',
        ],
    },
    {
        id: 2,
        title: 'Web Development Bootcamp',
        description: 'Master web development by learning HTML, CSS, JavaScript.',
        instructor: 'Jane Smith',
        announcements: [
            'Project submissions are due soon.',
            'Discussion on CSS flexbox this week.',
        ],
        assignments: [
            'Assignment 1: Build a Responsive Website (Due: 10/15)',
            'Assignment 2: JavaScript Quiz (Due: 10/22)',
        ],
    },
];

function MyEnrolledCourses() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState<any>(null);

    const openModal = (course: any) => {
        setSelectedCourse(course);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedCourse(null);
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-semibold mb-4">My Enrolled Courses</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {enrolledCourses.map((course) => (
                    <div
                        key={course.id}
                        className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
                        onClick={() => openModal(course)}
                    >
                        <h2 className="text-xl font-semibold text-blue-600">{course.title}</h2>
                        <p className="text-gray-700 mt-2">{course.description}</p>
                        <p className="text-sm text-gray-500 mt-2">Instructor: {course.instructor}</p>
                    </div>
                ))}
            </div>

            {isModalOpen && selectedCourse && (
                <CourseModal course={selectedCourse} onClose={closeModal} />
            )}
        </div>
    );
}

export default MyEnrolledCourses;

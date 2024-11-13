import React, { useState } from 'react';

function AllAssignments() {
    // Dummy data for assignments
    const [assignments, setAssignments] = useState([
        {
            id: 1,
            courseName: 'Computer Science 101',
            assignmentTitle: 'Assignment 1',
            description: 'Introduction to programming assignment.',
            file: 'assignment1.pdf',
        },
        {
            id: 2,
            courseName: 'Mathematics for Engineers',
            assignmentTitle: 'Assignment 2',
            description: 'Linear Algebra problems.',
            file: 'assignment2.pdf',
        },
        {
            id: 3,
            courseName: 'Data Structures & Algorithms',
            assignmentTitle: 'Assignment 3',
            description: 'Implement sorting algorithms.',
            file: 'assignment3.pdf',
        },
    ]);

    // Handle assignment deletion
    const handleDelete = (id) => {
        setAssignments((prevAssignments) =>
            prevAssignments.filter((assignment) => assignment.id !== id)
        );
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-2xl font-bold mb-6">All Assignments</h2>
            {assignments.length === 0 ? (
                <p>No assignments available.</p>
            ) : (
                <ul>
                    {assignments.map((assignment) => (
                        <li key={assignment.id} className="border p-4 mb-4 rounded-md shadow">
                            <h3 className="font-semibold text-lg">{assignment.assignmentTitle}</h3>
                            <p>Course: {assignment.courseName}</p>
                            <p>Description: {assignment.description}</p>
                            <p>File: {assignment.file}</p>
                            <button
                                onClick={() => handleDelete(assignment.id)}
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

export default AllAssignments;

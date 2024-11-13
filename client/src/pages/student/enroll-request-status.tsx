import React, { useState } from 'react';

// Dummy data for the enrollment requests
const enrollRequests = [
    {
        id: 1,
        course: 'Introduction to Programming',
        status: 'Pending', // Initial status
    },
    {
        id: 2,
        course: 'Web Development Bootcamp',
        status: 'Pending', // Initial status
    },
    {
        id: 3,
        course: 'Data Science 101',
        status: 'Pending', // Initial status
    },
];

// Dummy logged-in student ID (in a real application, you would get this from authentication context or state)
const loggedInStudentId = 1;

function EnrollRequests() {
    const [requests, setRequests] = useState(enrollRequests);

    return (
        <div className="p-6">
            <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">Your Enrollment Requests</h1>

            <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
                <table className="min-w-full table-auto">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="px-6 py-3 text-left font-semibold text-gray-700">Course</th>
                            <th className="px-6 py-3 text-left font-semibold text-gray-700">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requests.length > 0 ? (
                            requests.map((request) => (
                                <tr key={request.id} className="border-b hover:bg-gray-50">
                                    <td className="px-6 py-4">{request.course}</td>
                                    <td className="px-6 py-4">
                                        <span
                                            className={`inline-block px-2 py-1 rounded-lg text-sm ${request.status === 'Approved'
                                                ? 'bg-green-200 text-green-800'
                                                : request.status === 'Rejected'
                                                    ? 'bg-red-200 text-red-800'
                                                    : 'bg-yellow-200 text-yellow-800'
                                                }`}
                                        >
                                            {request.status}
                                        </span>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={2} className="px-6 py-4 text-center text-gray-500">
                                    No enrollment requests found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default EnrollRequests;

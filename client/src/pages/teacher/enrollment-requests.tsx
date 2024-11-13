import React, { useState } from 'react';

const EnrollmentRequests = () => {
    // Dummy data for enrollment requests with course name
    const [requests, setRequests] = useState([
        { id: 1, name: 'Alice Johnson', rollNo: '21BCS001', courseName: 'Data Structures', enrolled: false },
        { id: 2, name: 'Bob Smith', rollNo: '21BCS002', courseName: 'Algorithms', enrolled: false },
        { id: 3, name: 'Charlie Lee', rollNo: '21BCS003', courseName: 'Computer Networks', enrolled: false },
    ]);

    // Handle accepting a request
    const handleAccept = (id) => {
        setRequests((prevRequests) =>
            prevRequests.map((req) =>
                req.id === id ? { ...req, enrolled: true } : req
            )
        );
    };

    // Handle rejecting a request
    const handleReject = (id) => {
        setRequests((prevRequests) =>
            prevRequests.filter((req) => req.id !== id)
        );
    };

    return (
        <div className="max-w-2xl mx-auto p-6">
            <div className="bg-white rounded-lg shadow-md p-6">
                <h1 className="text-2xl font-bold mb-4">Enrollment Requests</h1>
                {requests.length === 0 ? (
                    <p>No enrollment requests available.</p>
                ) : (
                    <ul className="space-y-4">
                        {requests.map((request) => (
                            <li
                                key={request.id}
                                className="border p-4 rounded-md shadow flex justify-between items-center"
                            >
                                <div>
                                    <h3 className="font-semibold">
                                        {request.name}
                                    </h3>
                                    <p>Roll No: {request.rollNo}</p>
                                    <p>Course: {request.courseName}</p>
                                    <p>
                                        Status:{' '}
                                        {request.enrolled
                                            ? 'Enrolled'
                                            : 'Pending'}
                                    </p>
                                </div>
                                <div className="flex space-x-2">
                                    {!request.enrolled && (
                                        <>
                                            <button
                                                onClick={() =>
                                                    handleAccept(request.id)
                                                }
                                                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
                                            >
                                                Accept
                                            </button>
                                            <button
                                                onClick={() =>
                                                    handleReject(request.id)
                                                }
                                                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                                            >
                                                Reject
                                            </button>
                                        </>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default EnrollmentRequests;

import React, { useState } from 'react';

function AddAssignments() {
    // Dummy list of courses the teacher has created (you could fetch this from an API)
    const coursesList = [
        { id: 1, name: 'Computer Science 101' },
        { id: 2, name: 'Mathematics for Engineers' },
        { id: 3, name: 'Data Structures & Algorithms' },
    ];

    const [formData, setFormData] = useState({
        courseName: '',
        assignmentTitle: '',
        description: '',
        file: null,
    });

    const [successMessage, setSuccessMessage] = useState('');

    // Handle changes in form inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Handle file selection
    const handleFileChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            file: e.target.files[0],
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Perform any form validation and/or submit to backend here
        console.log('Assignment submitted:', formData);

        // Reset form and show success message
        setFormData({ courseName: '', assignmentTitle: '', description: '', file: null });
        setSuccessMessage('Assignment created successfully!');
    };

    return (
        <div className="max-w-md mx-auto p-6">
            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6">Create Assignment</h2>

                {successMessage && (
                    <div className="bg-green-50 text-green-700 p-3 rounded-md mb-4">
                        {successMessage}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Course Name
                            <select
                                name="courseName"
                                value={formData.courseName}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                                required
                            >
                                <option value="" disabled>Select course</option>
                                {coursesList.map((course) => (
                                    <option key={course.id} value={course.name}>
                                        {course.name}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Assignment Title
                            <input
                                type="text"
                                name="assignmentTitle"
                                value={formData.assignmentTitle}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                                placeholder="Enter assignment title"
                                required
                            />
                        </label>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Description
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                rows="4"
                                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                                placeholder="Enter assignment description"
                                required
                            />
                        </label>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Upload Assignment File
                            <input
                                type="file"
                                name="file"
                                onChange={handleFileChange}
                                className="mt-1 block w-full"
                                required
                            />
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                    >
                        Create Assignment
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AddAssignments;

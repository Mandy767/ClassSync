import { useState } from 'react';

function CreateCourse() {
    const [formData, setFormData] = useState({
        courseName: '',
        description: '',
        courseCode: '',
        type: 'theory',
        branch: 'CSE',
        semester: '1'
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();

        // Basic validation
        if (!formData.courseName || !formData.description || !formData.courseCode) {
            setError('Please fill in all required fields');
            setSuccess('');
            return;
        }

        // Here you would typically send the data to your backend
        console.log('Form submitted:', formData);
        setError('');
        setSuccess('Course created successfully!');
    };

    return (
        <div className="max-w-2xl mx-auto p-6">
            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6">Create New Course</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {error && (
                        <div className="bg-red-50 text-red-700 p-3 rounded-md">
                            {error}
                        </div>
                    )}

                    {success && (
                        <div className="bg-green-50 text-green-700 p-3 rounded-md">
                            {success}
                        </div>
                    )}

                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Course Name *
                            <input
                                type="text"
                                name="courseName"
                                value={formData.courseName}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                                placeholder="Enter course name"
                            />
                        </label>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Course Code *
                            <input
                                type="text"
                                name="courseCode"
                                value={formData.courseCode}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                                placeholder="Enter course code"
                            />
                        </label>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Description *
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                rows="4"
                                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                                placeholder="Enter course description"
                            />
                        </label>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Type
                            <select
                                name="type"
                                value={formData.type}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                            >
                                <option value="theory">Theory</option>
                                <option value="elective">Elective</option>
                            </select>
                        </label>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Branch
                            <select
                                name="branch"
                                value={formData.branch}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                            >
                                <option value="CSE">CSE</option>
                                <option value="ECE">ECE</option>
                                <option value="DSAI">DSAI</option>
                            </select>
                        </label>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Semester
                            <select
                                name="semester"
                                value={formData.semester}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                            >
                                {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                                    <option key={num} value={num}>{num}</option>
                                ))}
                            </select>
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors mt-6"
                    >
                        Create Course
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CreateCourse;
import { useState } from 'react'

function AddAnnouncements() {
    const [announcementData, setAnnouncementData] = useState({
        title: '',
        description: '',
        course: '', // added course field
    });

    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAnnouncementData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Announcement submitted:', announcementData);

        setAnnouncementData({ title: '', description: '', course: '' });
        setSuccessMessage('Announcement created successfully!');
    };

    return (
        <div className="max-w-md mx-auto p-6 mt-8">
            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6">Create Announcement</h2>

                {successMessage && (
                    <div className="bg-green-50 text-green-700 p-3 rounded-md mb-4">
                        {successMessage}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Announcement Title
                            <input
                                type="text"
                                name="title"
                                value={announcementData.title}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                                placeholder="Enter announcement title"
                                required
                            />
                        </label>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Description
                            <textarea
                                name="description"
                                value={announcementData.description}
                                onChange={handleChange}
                                rows="4"
                                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                                placeholder="Enter announcement description"
                                required
                            />
                        </label>
                    </div>

                    {/* Course Name Dropdown */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Course Name
                            <select
                                name="course"
                                value={announcementData.course}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                                required
                            >
                                <option value="">Select a course</option>
                                <option value="course1">Course 1</option>
                                <option value="course2">Course 2</option>
                                <option value="course3">Course 3</option>
                                <option value="course4">Course 4</option>
                            </select>
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                    >
                        Create Announcement
                    </button>

                </form>
            </div>
        </div>
    );
}

export default AddAnnouncements;

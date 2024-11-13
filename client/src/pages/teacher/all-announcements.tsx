import React, { useState } from 'react';

function AllAnnouncements() {
    // Realistic data for course announcements
    const [announcements, setAnnouncements] = useState([
        { id: 1, title: 'No Lecture Today', description: 'There will be no lecture for Course 1 today due to unforeseen circumstances.', course: 'Course 1' },
        { id: 2, title: 'Lecture Rescheduled', description: 'The lecture for Course 2 will be held at 4:30 PM today instead of the regular time.', course: 'Course 2' },
        { id: 3, title: 'Quiz on Friday', description: 'A quiz will be held on Friday for Course 1, covering Chapters 1 to 3. Please prepare accordingly.', course: 'Course 1' },
        { id: 4, title: 'No Class on Monday', description: 'There will be no class for Course 3 on Monday due to the public holiday.', course: 'Course 3' },
        { id: 5, title: 'Lab Session Cancelled', description: 'The lab session for Course 2 is cancelled for this week. You will be updated on rescheduling soon.', course: 'Course 2' },
        { id: 6, title: 'Extra Class for Course 1', description: 'An extra class for Course 1 will be held on Wednesday at 10:00 AM. Attendance is mandatory.', course: 'Course 1' },
        { id: 7, title: 'Mid-Term Exam Schedule', description: 'The mid-term exams for Course 2 will take place next week, from 10 AM to 12 PM on Friday.', course: 'Course 2' },
        { id: 8, title: 'Assignment Deadline Extended', description: 'The deadline for submitting the Course 3 assignment has been extended to next Monday.', course: 'Course 3' },
    ]);

    // State for selected course
    const [selectedCourse, setSelectedCourse] = useState('');

    // Function to handle deletion of an announcement
    const handleDelete = (id) => {
        setAnnouncements((prev) => prev.filter((announcement) => announcement.id !== id));
    };

    // Function to filter announcements based on selected course
    const filteredAnnouncements = selectedCourse
        ? announcements.filter((announcement) => announcement.course === selectedCourse)
        : announcements;

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6">All Announcements</h2>

                {/* Dropdown to select course */}
                <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">Select Course</label>
                    <select
                        value={selectedCourse}
                        onChange={(e) => setSelectedCourse(e.target.value)}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                    >
                        <option value="">All Courses</option>
                        <option value="Course 1">Course 1</option>
                        <option value="Course 2">Course 2</option>
                        <option value="Course 3">Course 3</option>
                    </select>
                </div>

                {/* Displaying filtered announcements */}
                {filteredAnnouncements.length === 0 ? (
                    <p>No announcements available for the selected course.</p>
                ) : (
                    <ul className="space-y-4">
                        {filteredAnnouncements.map((announcement) => (
                            <li key={announcement.id} className="p-4 border border-gray-300 rounded-md shadow-sm">
                                <h3 className="text-lg font-semibold">{announcement.title}</h3>
                                <p className="text-sm text-gray-600 mt-2">{announcement.description}</p>
                                <button
                                    onClick={() => handleDelete(announcement.id)}
                                    className="mt-4 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors"
                                >
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default AllAnnouncements;

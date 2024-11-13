import React from 'react';

interface CourseModalProps {
    course: any;
    onClose: () => void;
}

const CourseModal: React.FC<CourseModalProps> = ({ course, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg w-11/12 sm:w-1/2 lg:w-1/3">
                <h2 className="text-2xl font-semibold text-blue-600 mb-4">{course.title}</h2>

                <div className="space-y-4">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">Announcements</h3>
                        <ul className="list-disc pl-6">
                            {course.announcements.map((announcement: string, index: number) => (
                                <li key={index} className="text-gray-600">{announcement}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">Assignments</h3>
                        <ul className="list-disc pl-6">
                            {course.assignments.map((assignment: string, index: number) => (
                                <li key={index} className="text-gray-600">{assignment}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <button
                    onClick={onClose}
                    className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default CourseModal;

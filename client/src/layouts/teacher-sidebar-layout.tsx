import { Layout, PlusCircle, Book, UserPlus, FileText, FileCheck } from 'lucide-react';

import { useLocation, Outlet } from 'react-router-dom';

const TeacherSidebarLayout = () => {
    const location = useLocation();
    const menuItems = [

        { path: '/teacher/my-courses', icon: <Book className="h-5 w-5" />, label: 'My Courses' },

    ];
    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="w-64 bg-white shadow-lg">
                {/* Profile Section */}
                <div className="p-6 border-b">
                    <div className="flex items-center space-x-3">
                        <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center">
                            <span className="text-white text-xl font-semibold">T</span>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold">Teacher Portal</h2>
                            <p className="text-sm text-gray-500">Welcome back!</p>
                        </div>
                    </div>
                </div>

                {/* Navigation Links */}
                <nav className="p-4">
                    <div className="space-y-2">
                        {menuItems.map((item) => (
                            <a
                                key={item.path}
                                href={item.path}
                                className={`flex items-center space-x-3 p-3 rounded-lg transition-colors
                  ${location.pathname === item.path
                                        ? 'bg-blue-50 text-blue-600'
                                        : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                                    }`}
                            >
                                {item.icon}
                                <span>{item.label}</span>
                            </a>
                        ))}
                    </div>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6 overflow-auto">
                <Outlet /> {/* Render nested routes here */}
            </div>
        </div>
    );
};

export default TeacherSidebarLayout;

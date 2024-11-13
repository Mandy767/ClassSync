

const LandingPage = () => {
    const handleGoogleLogin = () => {
        const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
        const redirectUri = import.meta.env.VITE_GOOGLE_REDIRECT_URL;
        const scopes = [
            'https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/userinfo.email',
        ];

        const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?scope=${encodeURIComponent(
            scopes.join(' '),
        )}&response_type=code&redirect_uri=${encodeURIComponent(
            redirectUri,
        )}&client_id=${encodeURIComponent(
            clientId,
        )}&access_type=offline&prompt=consent`;

        window.location.href = authUrl;
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
            <div className="relative z-10 w-full max-w-4xl mx-auto">
                {/* Hero Section */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        {/* Logo Container with Glow Effect */}
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                            <div className="relative flex items-center justify-center bg-white rounded-full p-2">
                                <svg
                                    className="h-12 w-12 text-blue-600 transform transition-transform group-hover:scale-110 duration-200"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                                </svg>
                            </div>
                        </div>
                        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                            ClassSync
                        </h1>
                    </div>
                    <p className="text-xl text-gray-600 max-w-lg mx-auto mb-8 leading-relaxed">
                        Transform your classroom experience with intelligent synchronization
                        and seamless collaboration
                    </p>
                </div>

                {/* Login Card with Glass Effect */}
                <div className="w-full max-w-md mx-auto backdrop-blur-lg bg-white/80 rounded-2xl shadow-2xl p-8 border border-white/20">
                    <div className="space-y-6">
                        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">
                            Welcome to ClassSync
                        </h2>
                        <p className="text-center text-gray-600">
                            Join thousands of educators revolutionizing their classrooms
                        </p>

                        {/* Google Login Button */}
                        <button
                            onClick={handleGoogleLogin}
                            className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 px-6 py-3 rounded-xl transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5"
                        >
                            <svg className="h-6 w-6" viewBox="0 0 24 24">
                                <path
                                    fill="#4285F4"
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                />
                                <path
                                    fill="#34A853"
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                />
                                <path
                                    fill="#FBBC05"
                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                />
                                <path
                                    fill="#EA4335"
                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                />
                            </svg>
                            <span className="text-lg">Continue with Google</span>
                        </button>

                        {/* Additional Info */}
                        <div className="text-center text-sm text-gray-500 mt-6">
                            By signing up, you agree to our
                            <a href="#" className="text-blue-600 hover:text-blue-700 mx-1">Terms of Service</a>
                            and
                            <a href="#" className="text-blue-600 hover:text-blue-700 mx-1">Privacy Policy</a>
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="flex justify-center gap-8 mt-12">
                    <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">10K+</div>
                        <div className="text-gray-600">Teachers</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">50K+</div>
                        <div className="text-gray-600">Students</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-pink-600">100+</div>
                        <div className="text-gray-600">Schools</div>
                    </div>
                </div>

                {/* Footer */}
                <footer className="mt-12 text-center text-gray-600">
                    <p className="text-sm">&copy; 2024 ClassSync. All rights reserved.</p>
                </footer>
            </div>

            <style jsx>{`
            @keyframes blob {
              0% { transform: translate(0px, 0px) scale(1); }
              33% { transform: translate(30px, -50px) scale(1.1); }
              66% { transform: translate(-20px, 20px) scale(0.9); }
              100% { transform: translate(0px, 0px) scale(1); }
            }
            .animate-blob {
              animation: blob 7s infinite;
            }
            .animation-delay-2000 {
              animation-delay: 2s;
            }
            .animation-delay-4000 {
              animation-delay: 4s;
            }
            @keyframes tilt {
              0%, 50%, 100% { transform: rotate(0deg); }
              25% { transform: rotate(2deg); }
              75% { transform: rotate(-2deg); }
            }
            .animate-tilt {
              animation: tilt 10s infinite linear;
            }
          `}</style>
        </div>
    );
};

export default LandingPage;
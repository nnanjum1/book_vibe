import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-4">
            <div className="text-center max-w-md">

                {/* Error Code */}
                <h1 className="text-8xl font-extrabold tracking-widest text-red-500">
                    404
                </h1>

                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-semibold mt-4">
                    Oops! Page Not Found
                </h2>

                {/* Description */}
                <p className="text-gray-300 mt-3 text-sm md:text-base">
                    The page you are looking for doesn’t exist or has been moved.
                </p>

                {/* Button */}
                <div className="mt-6">
                    <Link
                        to="/"
                        className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-pink-500 hover:to-red-500 transition-all duration-300 shadow-lg font-medium"
                    >
                        Go Back Home
                    </Link>
                </div>

                {/* Extra subtle decoration */}
                <p className="mt-8 text-xs text-gray-500">
                    If you think this is a mistake, contact support.
                </p>

            </div>
        </div>
    );
};

export default ErrorPage;
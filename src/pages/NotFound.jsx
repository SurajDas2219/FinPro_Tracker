import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-gray-600 text-xl mb-4">Oops!! Page Not Found</p>
        <Link to={"/"} className="text-blue-500 hover:text-blue-700 underline">
          Return to Home Page
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

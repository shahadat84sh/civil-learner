import React from 'react';


const NotFoundPage = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-lg text-gray-600 mb-8">Oops! Page not found.</p>
        <a
          href="/"
          className="px-6 py-3 bg-blue-500 text-white rounded-md font-bold hover:bg-blue-600 transition-colors"
        >
          Go back to Home
        </a>
      </div>
    );
  };
  
  export default NotFoundPage;
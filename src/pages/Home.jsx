import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="bg-slate-300">
          <header className="bg-slate-600 py-8">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold text-white">Civil Learning Course</h1>
              <p className="text-lg text-white mt-4">
                Learn everything about civil engineering and construction.
              </p>
            </div>
          </header>
    
          <main className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-4">Course Overview</h2>
            <p className="text-gray-800">
              Our civil learning course covers a wide range of topics related to civil engineering and
              construction. Whether you're a beginner or an experienced professional, this course will
              provide you with the knowledge and skills needed to succeed in the field.
            </p>
    
            <h2 className="text-2xl font-bold mt-8 mb-4">Course Features</h2>
            <ul className="list-disc list-inside text-gray-800">
              <li>Comprehensive video lectures</li>
              <li>Interactive quizzes and assignments</li>
              <li>Hands-on projects</li>
              <li>Expert guidance and support</li>
              <li>Community forum for discussions</li>
              <li>Certificate of completion</li>
            </ul>
    
            <h2 className="text-2xl font-bold mt-8 mb-4">Enroll Now</h2>
            <p className="text-gray-800 mb-5">
              Don't miss out on this opportunity to enhance your civil engineering knowledge. Enroll
              today and start your learning journey with us!
            </p>
            <Link to='/course'><a
              href="/enroll"
              className="px-6 py-3 mt-4 bg-blue-500 text-white rounded-md font-bold hover:bg-blue-600 transition-colors"
            >
              Enroll Now
            </a></Link>
          </main>
        </div>
      );
};

export default Home;
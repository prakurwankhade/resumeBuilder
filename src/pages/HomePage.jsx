// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Common/Header';
import Footer from '../components/Common/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header Section */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow flex flex-col justify-center items-center text-center py-16 px-4">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          Build Your Perfect Resume in Minutes
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Create a professional resume with ease using our intuitive builder. Choose from multiple templates and showcase your skills!
        </p>
        <Link
          to="/resume-builder"
          className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Get Started
        </Link>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default HomePage;

import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Resume Builder. All rights reserved.
        </p>
        <p className="text-sm">
          Built with 💻 by <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Your Name</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

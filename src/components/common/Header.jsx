import React from "react";

const Header = () => {
  return (
    <header className="w-full bg-blue-600 text-white py-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Resume Builder</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a
                href="#home"
                className="text-white hover:text-blue-200 transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-white hover:text-blue-200 transition duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-white hover:text-blue-200 transition duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

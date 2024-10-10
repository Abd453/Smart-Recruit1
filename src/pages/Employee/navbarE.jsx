import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import pp from '../../assets/profile-pictures/user1.jpg';

const NavbarE = ({ userId }) => {
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700 shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Company Logo */}
        <a href="#" className="flex items-center">
          <img src={logo} className="h-8 mr-3" alt="Company Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap hover:text-green-700 dark:hover:text-green-500">
          🤖Smart-Recruit
          </span>
        </a>

        {/* Navigation Links */}
        <div className="flex items-center">
          <ul className="flex space-x-4 text-sm font-medium text-gray-700 dark:text-gray-300">
            <li>
              <a
                href="#"
                className="hover:text-green-700 dark:hover:text-green-500"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-green-700 dark:hover:text-green-500"
              >
                Find Job
              </a>
            </li>
          </ul>

          {/* Profile Section */}
          <div className="flex items-center ml-4">
            <Link
              to={`/userprofile/${userId}`} // Pass userId as a URL parameter
              className="flex items-center space-x-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-green-700 dark:hover:text-green-500"
            >
              <img src={pp} alt="Profile" className="w-8 h-8 rounded-full" />
              <span>My Profile</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarE;

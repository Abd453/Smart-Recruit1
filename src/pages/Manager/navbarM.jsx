import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to handle mobile menu
  const navigate = useNavigate();

  // Toggle the hamburger menu
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // Scroll to a specific section with ID "home"
  const scrollToHome = () => {
    const homeSection = document.getElementById('home');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 py-4 backdrop-blur-xl bg-white/70 border-b border-white/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/20 group-hover:scale-110 transition-transform duration-300">
            <img src={logo} className="h-6 invert brightness-0" alt="Logo" />
          </div>
          <span className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
            Smart-Recruit <span className="text-green-600">Pro</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/managerhome"
            className="text-sm font-bold text-gray-600 hover:text-green-600 transition-colors"
          >
            Dashboard
          </Link>
          <Link
            to="/jobstable"
            className="text-sm font-bold text-gray-600 hover:text-green-600 transition-colors"
          >
            Pending Approval
          </Link>
          <div className="h-6 w-px bg-gray-200"></div>
          <button className="px-5 py-2.5 bg-gray-900 text-white text-sm font-bold rounded-xl hover:bg-green-600 shadow-lg shadow-black/5 hover:shadow-green-500/20 transition-all duration-300">
            Manager Access
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={handleToggle}
          className="md:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-xl transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 p-6 space-y-4 animate-in slide-in-from-top duration-300">
          <Link to="/managerhome" className="block text-lg font-bold text-gray-900">Dashboard</Link>
          <Link to="/jobstable" className="block text-lg font-bold text-gray-900">Pending Approval</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

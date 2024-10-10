import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
// import ContactForm from './ContactForm';
const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  // Function to handle toggling of the navbar
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  // Function to handle navigation link clicks
  const handleNavLinkClick = () => {
    // Close the mobile drawer
    setMobileDrawerOpen(false);
  };

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Solutions', href: '#wedo' },
    { label: 'Features', href: '#features' },
    { label: 'Experience', href: '#exper' },
    { label: 'FAQs', href: '#faq' },
    { label: 'Contact Us', href: '#contact' },
    { label: 'Testimonials', href: '#testi' },
  ];

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            <Link to="/" className="">
              <span className="text-xl tracking-tight">🤖Smart-Recruit</span>
            </Link>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index} className="hover:text-orange-500">
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <Link
              to="/login"
              className="border cursor-pointer hover:bg-gradient-to-r from-green-500 to-green-800 py-2 px-5 rounded-md"
            >
              <button className="w-full h-full">Login</button>
            </Link>
            <Link
              to="/signup"
              className="bg-gradient-to-r from-green-500 to-green-800 py-2 px-3 rounded-md"
            >
              <button className="w-full h-full">Get Started</button>
            </Link>
          </div>

          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed text-neutral-900 right-0 z-20 bg-slate-100 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="py-4 hover:text-orange-500"
                >
                  <a href={item.href} onClick={handleNavLinkClick}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-8">
              <Link
                to="/login"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-green-500 to-green-800 text-white transition-colors duration-300 hover:from-green-600 hover:to-green-900"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-green-500 to-green-800 text-white transition-colors duration-300 hover:from-orange-600 hover:to-orange-900"
              >
                Create an account
              </Link>
            </div>
          </div>
        )}
      </div>
     
    </nav>
  );
};

export default Navbar;

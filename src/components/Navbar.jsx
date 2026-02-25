import { Menu, X, LogOut } from 'lucide-react';
import { useState, useContext } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { AuthContext } from '../utils/AuthContext';
import { authClient } from '../lib/auth-client';

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const { auth } = useContext(AuthContext);

  const toggleNavbar = () => setMobileDrawerOpen(!mobileDrawerOpen);
  const handleNavLinkClick = () => setMobileDrawerOpen(false);

  const handleSignOut = async () => {
    await authClient.signOut();
    window.location.href = '/';
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
            <Link to="/">
              <span className="text-xl tracking-tight">🤖Smart-Recruit</span>
            </Link>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index} className="transition-all duration-300 ease-in-out hover:text-green-500 hover:scale-105">
                <a href={item.href} className="font-medium">{item.label}</a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex justify-center space-x-12 items-center">
            {auth.isAuthenticated ? (
              <button
                onClick={handleSignOut}
                className="flex items-center gap-2 py-2 px-4 rounded-md border border-neutral-600 text-neutral-300 hover:border-red-500 hover:text-red-400 transition-colors duration-300"
              >
                <LogOut size={16} />
                Sign Out
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-md border border-neutral-600 bg-transparent px-6 py-2 font-medium text-neutral-300 transition-all duration-300 hover:border-green-500 hover:text-white"
                >
                  <span className="absolute inset-0 z-0 h-full w-0 bg-gradient-to-r from-green-500 to-green-800 transition-all duration-300 ease-out group-hover:w-full"></span>
                  <span className="relative z-10 w-full h-full">Login</span>
                </Link>
                <Link
                  to="/signup"
                  className="bg-gradient-to-r from-green-500 to-green-800 py-2 px-3 rounded-md"
                >
                  <button className="w-full h-full">Get Started</button>
                </Link>
              </>
            )}
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
                <li key={index} className="py-4 hover:text-orange-500">
                  <a href={item.href} onClick={handleNavLinkClick}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-8">
              {auth.isAuthenticated ? (
                <button
                  onClick={handleSignOut}
                  className="py-2 px-3 rounded-md bg-red-500 text-white transition-colors duration-300 hover:bg-red-600"
                >
                  Sign Out
                </button>
              ) : (
                <>
                  <Link to="/login" className="py-2 px-3 rounded-md bg-gradient-to-r from-green-500 to-green-800 text-white transition-colors duration-300 hover:from-green-600 hover:to-green-900">
                    Sign In
                  </Link>
                  <Link to="/signup" className="py-2 px-3 rounded-md bg-gradient-to-r from-green-500 to-green-800 text-white transition-colors duration-300 hover:from-orange-600 hover:to-orange-900">
                    Create an account
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

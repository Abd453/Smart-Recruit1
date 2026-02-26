import React, { useRef } from 'react';
import Cards from '../../components/Card/Cards';
import Footer from '../../components/Footer';
import NavbarE from './navbarE';
import logo from '../../assets/logo.png';
import ielogo from '../../assets/ielogo.jpg';
import { useLocation } from 'react-router-dom';

export default function Home() {
  const jobsSectionRef = useRef(null);
  const location = useLocation();
  const userId = location.state?.userId;
  console.log(userId);

  const scrollToJobs = () => {
    if (jobsSectionRef.current) {
      jobsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50/50">
      <NavbarE userId={userId} />

      {/* Hero Section */}
      <div
        className="relative w-full h-[80vh] bg-cover bg-center flex justify-center items-center overflow-hidden"
        style={{ backgroundImage: `url(${ielogo})` }}
      >
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>

        <div className="relative z-10 glass p-10 md:p-16 rounded-[3rem] shadow-2xl border border-white/40 max-w-3xl w-full mx-4 text-center animate-in fade-in zoom-in duration-700">
          <img
            src={logo}
            alt="Logo"
            className="mb-8 w-24 md:w-32 mx-auto drop-shadow-xl"
          />
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Welcome to the <span className="text-green-400">Portal</span>
          </h1>
          <p className="text-xl text-gray-100 mb-10 leading-relaxed font-medium">
            Discover your next career milestone with Smart-Recruit's intelligent matching.
          </p>

          <button
            onClick={scrollToJobs}
            className="inline-flex items-center px-8 py-4 text-lg font-bold text-white bg-green-600 rounded-2xl hover:bg-green-700 shadow-xl shadow-green-500/30 transform transition-all duration-200 hover:-translate-y-1 active:scale-95"
            aria-label="Scroll to job listings"
          >
            Explore Openings
          </button>

          {userId && (
            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-sm font-bold text-green-300 uppercase tracking-widest">
                Authenticated Account
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Job List Section */}
      <div ref={jobsSectionRef} className="w-full py-20 px-4 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Available Positions</h2>
            <div className="w-20 h-1.5 bg-green-500 rounded-full"></div>
          </div>
          <Cards userId={userId} landing={false} />
        </div>
      </div>

      <Footer />
    </div>
  );
}

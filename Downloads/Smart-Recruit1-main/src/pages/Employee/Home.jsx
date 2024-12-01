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
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <NavbarE userId={userId} />

      {/* Welcome Intro Section */}
      <div
        className="relative w-full h-screen bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: `url(${ielogo})` }}
      >
        <div className="bg-black bg-opacity-50 p-6 md:p-12 rounded-lg">
          <img
            src={logo}
            alt="Logo"
            className="mb-6 w-28 md:w-36 lg:w-44 mx-auto"
          />
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center mb-4">
            Welcome to the Job Portal
          </h1>
          <p className="text-lg md:text-xl text-white text-center mb-4">
            Find your dream job with us!
          </p>
          <button
            onClick={scrollToJobs}
            className="block mx-auto mt-4 px-4 py-2 text-lg font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
            aria-label="Scroll to job listings"
          >
            Get Started
          </button>
          {userId && (
            <h2 className="text-xl text-white text-center mt-4">
              Welcome back, User {userId}
            </h2>
          )}
        </div>
      </div>

      {/* Job List Section */}
      <div ref={jobsSectionRef} className="w-full p-6 md:p-12">
        <div className="w-full max-w-4xl mx-auto">
          <Cards userId={userId} landing={false} />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

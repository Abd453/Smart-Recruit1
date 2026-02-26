import React, { useEffect } from 'react'; // Import useEffect to handle side effects
// import LoginT from './LoginT';
import Cards from '../../components/Card/Cards';
import Footer from '../../components/Footer';
// import Navbar from '../../components/Navbar';
import NavbarM from './navbarM';
// import { useNavigate } from 'react-router-dom';


export default function Home() {
  //   const navigate = useNavigate(); // useNavigate hook should be inside the component

  //   useEffect(() => {

  //     navigate("/Jobs");
  //   }, [navigate]); // Empty dependency array means this runs once when the component mounts

  <div className="min-h-screen bg-gray-50/50 flex flex-col">
    <NavbarM />

    <main className="flex-grow py-20 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="relative mb-16 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-4">
            Manager <span className="text-green-600">Workspace</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl">
            Monitor and approve job openings with absolute clarity.
          </p>
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-green-500/10 rounded-full blur-3xl -z-10"></div>
        </div>

        <div className="glass rounded-[2.5rem] p-4 md:p-8 border border-white/60 shadow-xl shadow-green-500/5">
          <div className="flex items-center gap-4 mb-10 ml-4">
            <div className="w-3 h-8 bg-green-500 rounded-full"></div>
            <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-tighter">Current Live Jobs</h2>
          </div>

          <Cards disapply={false} landing={false} />
        </div>
      </div>
    </main>

    <Footer />
  </div>
}

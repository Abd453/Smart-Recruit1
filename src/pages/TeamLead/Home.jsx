import React, { useEffect } from 'react'; // Import useEffect to handle side effects
import Cards from '../../components/Card/Cards';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Navbart from './navbarT';
// import { useNavigate } from 'react-router-dom';

export default function Home() {
  //   const navigate = useNavigate(); // useNavigate hook should be inside the component

  //   useEffect(() => {

  //     navigate("/Jobs");
  //   }, [navigate]); // Empty dependency array means this runs once when the component mounts

  return (
    <div>
      <Navbart />
      <div className="flex mt-10 justify-center">
        <h1
          className=" text-4xl sm:text-6xl lg:text-7xl text-center tracking-wid 
          bg-gradient-to-r from-slate-500 to-red-800 text-transparent bg-clip-text"
        >
          {' '}
          Available Jobs
        </h1>
      </div>

      <Cards disapply = {false} landing = {false}/>
      <Footer />
    </div>
  );
}

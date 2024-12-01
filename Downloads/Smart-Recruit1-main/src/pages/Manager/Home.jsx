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

  return (
    
    <div >
      
      <div className='  bg-cover bg-center '
   >
      <NavbarM />
      <div className="flex mt-10 justify-center">
        <h1
          className=" text-4xl sm:text-6xl lg:text-7xl text-center tracking-wid 
          bg-gradient-to-r from-white to-slate-400 text-transparent bg-clip-text"
        >
          {' '}
          Available Jobs
        </h1>
      </div>

      <Cards disapply = {false} landing = {false}/>
      
      </div>
      <Footer />
    </div>
  );
}

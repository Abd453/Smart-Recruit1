import React , { forwardRef } from 'react';
import { Typewriter } from "react-simple-typewriter";
import Recruiting from '../assets/Recruiting.mp4';
import { Link } from 'react-router-dom';


const HeroSection = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="home">
    <div  className="flex flex-col lg:flex-row items-center lg:justify-between w-full px-6 lg:px-20 py-12 lg:py-20">
      <div className="lg:w-1/2 text-left">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight md:py-6">
          Welcome To 🤖
          <span className="bg-gradient-to-r from-green-300 to-green-500 text-transparent bg-clip-text">
            {' '}
              Smart-Recruit
              
          </span>
        </h1>
        <div className="flex justify-center lg:justify-start items-center">
          {/* <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            <span className="bg-gradient-to-r from-green-300 to-green-500 text-transparent bg-clip-text">
            {' '}
              Smart-Recruit
              
          </span>
          </p>
          <span className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2">
            <Typewriter
              words={['BTB', 'BTC', 'SASS']}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={120}
              deleteSpeed={140}
              delaySpeed={1000}
            />
          </span> */}
        </div>
        <div className="mt-10 text-lg text-black max-w-4xl lg:mx-0">
      <Typewriter
        words={[
          "At 🤖Smart-Recruit, we simplify the job search process by connecting talented professionals with the right opportunities. Whether you're a job seeker looking for your dream job or an employer searching for top talent, our platform provides a seamless experience tailored to your needs."
        ]}
        loop={10}
        cursor
        cursorStyle="_"
        typeSpeed={50}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </div>
        {/* <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3 text-black">
          Get Started
        </button> */}
        <Link  to="/signup"><button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button></Link>
        
      </div>
      <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center lg:justify-end items-center lg:ml-10">
        <div className="w-full h-auto rounded-lg shadow-lg border-4 border-yellow-500">
          <video
            src={Recruiting}
            autoPlay
            loop
            muted
            className="w-full h-auto rounded-lg"
          >
            Your browser does not support the video tag.
          </video>
          
        </div>
        
      </div>
    </div>
  
  </section>
  )
});

export default HeroSection;

import React ,{forwardRef } from 'react';
// Import images
import experience from '../../assets/landingPageImg/experience.jpg';
import cases from '../../assets/landingPageImg/cases.jpg';
import partner from '../../assets/landingPageImg/partner.jpg';

const Experience = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="exper" className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-center mt-16 px-4 mb-5">
      {/* Title */}
      <div className="col-span-full">
        <h1 className="bg-gradient-to-r from-green-800 text-black text-5xl font-bold mb-10 text-center">
          Experience
        </h1>
      </div>

      {/* Experience Card */}
      <div className="col-span-1 flex flex-col items-center text-center bg-white border-2 border-green-500 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
        <img src={experience} alt="Experience" className="w-32 h-32 mb-4" />
        <h5 className="font-bold text-3xl text-green-700 mb-2">10+</h5>
        <p>Years Experience</p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl text-center tracking-wide bg-gradient-to-r from-green-400 to-green-700 text-transparent bg-clip-text mt-4">
          Experience
        </h1>
      </div>

      {/* Cases Solved Card */}
      <div className="col-span-1 flex flex-col items-center text-center bg-white border-2 border-green-500 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
        <img src={cases} alt="Cases Solved" className="w-32 h-32 mb-4" />
        <h5 className="font-bold text-3xl text-green-700 mb-2">890</h5>
        <p>Cases Solved</p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl text-center tracking-wide bg-gradient-to-r from-green-400 to-green-700 text-transparent bg-clip-text mt-4">
          Solution
        </h1>
      </div>

      {/* Business Partners Card */}
      <div className="col-span-1 flex flex-col items-center text-center bg-white border-2 border-green-500 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
        <img src={partner} alt="Business Partners" className="w-32 h-32 mb-4" />
        <h5 className="font-bold text-3xl text-green-700 mb-2">250</h5>
        <p>Business Partners</p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl text-center tracking-wide bg-gradient-to-r from-green-400 to-green-700 text-transparent bg-clip-text mt-4">
          Partners
        </h1>
      </div>
    </section>
  );
});

export default Experience;

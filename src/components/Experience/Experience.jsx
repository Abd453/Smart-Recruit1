import React, { forwardRef } from 'react';
// Import images
import experience from '../../assets/landingPageImg/experience.jpg';
import cases from '../../assets/landingPageImg/cases.jpg';
import partner from '../../assets/landingPageImg/partner.jpg';

const Experience = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="exper" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Our <span className="text-green-600">Track Record</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Helping talent find their place in the industry for over a decade.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { img: experience, value: "10+", label: "Years Experience", gradient: "from-green-400 to-green-600" },
          { img: cases, value: "890", label: "Cases Solved", gradient: "from-teal-400 to-teal-600" },
          { img: partner, value: "250", label: "Business Partners", gradient: "from-emerald-400 to-emerald-600" }
        ].map((item, idx) => (
          <div key={idx} className="glass p-10 rounded-2xl shadow-xl shadow-green-500/5 hover:shadow-green-500/15 hover:-translate-y-2 transition-all duration-500 border border-white/40 flex flex-col items-center text-center">
            <div className="w-24 h-24 mb-8 relative rounded-full p-1 bg-gradient-to-tr from-green-500/20 to-transparent">
              <img src={item.img} alt={item.label} className="w-full h-full rounded-full object-cover shadow-lg" />
            </div>
            <h3 className={`text-5xl font-black bg-gradient-to-r ${item.gradient} text-transparent bg-clip-text mb-2`}>
              {item.value}
            </h3>
            <p className="text-gray-600 font-medium text-lg tracking-wide uppercase">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
});

export default Experience;

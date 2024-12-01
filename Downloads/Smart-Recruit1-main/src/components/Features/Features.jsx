import React, { useState, forwardRef } from 'react';
import Planning from '../../assets/Planning.mp4'; // Ensure the correct path to your video

const Features = forwardRef((props, ref) => {
  const [activeFeature, setActiveFeature] = useState(null);

  const features = [
    {
      id: 1,
      icon: '🌟',
      title: 'Find Your Dream Job',
      description: 'Connect with opportunities that match your skills and career goals.'
    },
    {
      id: 2,
      icon: '🕵️‍♂️',
      title: 'Discover Top Talent',
      description: 'Easily find and hire skilled professionals for your team.'
    },
    {
      id: 3,
      icon: '🚀',
      title: 'Streamlined Hiring',
      description: 'Efficiently manage job applications and recruitment processes.'
    },
    {
      id: 4,
      icon: '🧩',
      title: 'Tailored Matches',
      description: 'Get personalized recommendations based on your preferences and needs.'
    },
  ];

  const handleFeatureClick = (id) => {
    setActiveFeature(prevId => (prevId === id ? null : id));
  };

  return (
    <section ref={ref} id="features" className="text-black py-12 lg:py-20">
      
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h1 className="bg-gradient-to-r from-green-800 text-center text-black text-5xl font-bold mb-10 ">
          Features
        </h1>

        <div className="flex flex-col lg:flex-row items-center lg:justify-between w-full max-w-screen-lg mx-auto">
          {/* Video on the Left */}
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start lg:mr-10 space-y-6 lg:space-y-0 lg:space-x-6 lg:flex-row">
            <div className="flex-1 transition-transform duration-500 ease-in-out transform hover:scale-105">
              <video
                src={Planning}
                autoPlay
                loop
                muted
                className="w-full h-auto rounded-lg shadow-lg border-4 border-yellow-500"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Features List on the Right */}
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <div className="mt-10 space-y-4">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="bg-gradient-to-r from-green-500 to-teal-600 p-6 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-500 ease-in-out"
                  onClick={() => handleFeatureClick(feature.id)}
                >
                  <h3 className="text-2xl font-semibold mb-2">
                    {feature.icon} <strong>{feature.title}</strong>
                  </h3>
                  {activeFeature === feature.id && (
                    <p className="text-lg text-neutral-100 mt-2">
                      {feature.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Features;

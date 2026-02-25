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
    <section ref={ref} id="features" className="py-20 bg-white/30 backdrop-blur-sm rounded-3xl my-10 border border-white/20 shadow-2xl shadow-green-500/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Key <span className="text-green-600">Features</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Experience a smarter way to manage your recruitment lifecycle.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full max-w-6xl mx-auto">
          {/* Video Column */}
          <div className="lg:w-1/2 w-full">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <video
                src={Planning}
                autoPlay
                loop
                muted
                className="relative w-full h-auto rounded-2xl shadow-2xl shadow-black/10 border border-white/20"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Features Column */}
          <div className="lg:w-1/2 w-full space-y-4">
            {features.map((feature) => (
              <div
                key={feature.id}
                className={`group p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${activeFeature === feature.id
                    ? 'bg-white shadow-xl border-green-100 scale-[1.02]'
                    : 'glass hover:bg-white/80 border-transparent hover:border-green-50 text-gray-700'
                  }`}
                onClick={() => handleFeatureClick(feature.id)}
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl filter drop-shadow-sm group-hover:scale-110 transition-transform duration-300">{feature.icon}</span>
                  <h3 className={`text-xl font-bold transition-colors duration-300 ${activeFeature === feature.id ? 'text-green-600' : 'text-gray-900 group-hover:text-green-600'}`}>
                    {feature.title}
                  </h3>
                </div>
                {activeFeature === feature.id && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="text-gray-600 mt-3 pl-12 leading-relaxed"
                  >
                    {feature.description}
                  </motion.p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default Features;

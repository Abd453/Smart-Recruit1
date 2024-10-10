import React, { useState, useEffect, forwardRef  } from 'react';

// Import profile images
import user1 from '../../assets/profile-pictures/user1.jpg';
import user2 from '../../assets/profile-pictures/user2.jpg';
import user3 from '../../assets/profile-pictures/user3.jpg';
import user4 from '../../assets/profile-pictures/user4.jpg';

const testimonials = [
  {
    id: 1,
    text: 'Smart-Recruit has transformed our hiring process! The ease of posting jobs and tracking applications has saved us countless hours. Highly recommend!',
    author: 'Jane Doe, HR Manager',
    profileImage: user1,
  },
  {
    id: 2,
    text: 'As a job seeker, I found my dream job through Smart-Recruit. The personalized job alerts and user-friendly interface made the process smooth and stress-free.',
    author: 'John Smith, Software Developer',
    profileImage: user2,
  },
  {
    id: 3,
    text: "Smart-Recruit's platform is a game-changer for employers. The advanced search features and efficient application management have streamlined our hiring process.",
    author: 'Sarah Lee, Talent Acquisition Specialist',
    profileImage: user3,
  },
  {
    id: 4,
    text: 'Finding the right talent has never been easier. Smart-Recruit’s intuitive dashboard and real-time updates have greatly improved our recruitment efforts.',
    author: 'Michael Brown, Team Lead',
    profileImage: user4,
  },
];

const Testimonials =forwardRef((props, ref) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div ref={ref} id="testi" className=" bg-green-100 py-12 px-4  mb-5">
      {/* Title */}
      <div className="">
      <h1 className="bg-gradient-to-r from-green-800  text-center text-black text-5xl font-bold mb-10 py-4">
        Testimonials
      </h1>
      </div>
      
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-extrabold text-green-600 text-center mb-8">
          What Our Users Are Saying
        </h2>
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 w-full max-w-full p-8 bg-white text-gray-800 rounded-lg shadow-lg mx-auto"
              >
                <div className="flex flex-col items-center">
                  <img
                    src={testimonial.profileImage}
                    alt={`${testimonial.author} profile`}
                    className="w-24 h-24 rounded-full border-4 border-green-500 mb-4"
                  />
                  <p className="text-lg font-semibold mb-4 text-center">
                    "{testimonial.text}"
                  </p>
                  <p className="text-sm font-medium text-gray-600 text-center">
                    — {testimonial.author}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? 'bg-green-600' : 'bg-gray-300'
                } transition-colors duration-300`}
                aria-label={`Testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export default Testimonials;

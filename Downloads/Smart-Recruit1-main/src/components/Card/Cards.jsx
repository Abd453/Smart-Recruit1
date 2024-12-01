import React, { useState, useEffect } from 'react';
import { BiTimeFive } from 'react-icons/bi';
import { CiLocationOn } from 'react-icons/ci';
import { FaInfinity, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { RiMoneyDollarBoxLine } from 'react-icons/ri';
import Db from '../../data/db.json'; // Ensure this import is correct
import Modal from './Modal';
import { Link } from 'react-router-dom';

const Cards = ({ userId, disapply = true, landing = true, jobTitle }) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [animationClass, setAnimationClass] = useState('fadeIn');
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cardsPerSection = 3;
  const totalSections = Math.ceil(Db.length / cardsPerSection);

  const handleNext = () => {
    if (currentSection < totalSections - 1) {
      setAnimationClass('fadeOut');
      setTimeout(() => {
        setCurrentSection(currentSection + 1);
        setAnimationClass('fadeIn');
      }, 500); // Match the duration of the fade-out animation
    }
  };

  const handlePrevious = () => {
    if (currentSection > 0) {
      setAnimationClass('fadeOut');
      setTimeout(() => {
        setCurrentSection(currentSection - 1);
        setAnimationClass('fadeIn');
      }, 500); // Match the duration of the fade-out animation
    }
  };

  const currentCards = Db.slice(
    currentSection * cardsPerSection,
    (currentSection + 1) * cardsPerSection
  );

  const handleShowMore = (card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
  };
  console.log(Db.length);

  return (
    <div id="#1" className="relative py-10">
      <div id="#1" className="bg-gradient-to-r from-green-800 text-white">
        <h1 className="text-center text-black text-5xl font-bold mb-10">
          Current Openings
        </h1>
      </div>
      <div className="relative overflow-hidden">
        <div
          className={`flex transition-transform duration-500 ease-in-out ${animationClass}`}
          style={{ transform: `translateX(-${currentSection * 100}%)` }}
        >
          {Db.map((db) => (
            <div key={db.id} className="flex-shrink-0 w-full sm:w-1/3 p-4">
              <div className="p-6 rounded-lg shadow-lg bg-white transition duration-500 ease-in-out hover:bg-green-500 hover:text-white hover:shadow-black">
                <span className="flex justify-between items-center gap-4 pb-5">
                  <h1 className="text-xl">{db.title}</h1>
                  <span className="flex items-center gap-1">
                    <BiTimeFive />
                    {db.time}
                  </span>
                </span>
                <h6 className="flex items-center gap-1">
                  <FaInfinity />
                  {db.pertemp}
                </h6>
                <h6 className="flex items-center gap-1">
                  <CiLocationOn />
                  {db.location}
                </h6>
                <h6 className="flex items-center gap-1">
                  <RiMoneyDollarBoxLine />
                  {db.money}
                </h6>
                <p className="text-sm text-gray-600 pt-4 border-t-2 mt-4 group-hover:text-white">
                  {db.description}
                </p>
                {/* Removed Apply Now Button */}
                <button
                  onClick={() => handleShowMore(db)}
                  className="border-2 rounded-lg block p-2 w-full text-sm font-semibold bg-slate-500 text-white hover:bg-green-800 transition duration-300 mt-2"
                >
                  Show more
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrevious}
          disabled={currentSection === 0}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-800 disabled:opacity-50"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={handleNext}
          disabled={currentSection === totalSections - 1}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-800 disabled:opacity-50"
        >
          <FaArrowRight />
        </button>

        {/* Pagination Dots */}
        <div
          id="#1"
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2"
        >
          {Array.from({ length: totalSections }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSection(index)}
              className={`w-3 h-3 rounded-full ${
                currentSection === index ? 'bg-black-700' : 'bg-black-400'
              } transition-colors duration-300`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Show Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        content={selectedCard ? selectedCard.description : ''}
        jobid={selectedCard ? selectedCard.id : ''}
        pertemp={selectedCard ? selectedCard.pertemp : ''}
        location={selectedCard ? selectedCard.location : ''}
        money={selectedCard ? selectedCard.money : ''}
        time={selectedCard ? selectedCard.time : ''}
        title={selectedCard ? selectedCard.title : ''}
        requiredDegree={selectedCard ? selectedCard.requiredDegree : ''}
        experience={selectedCard ? selectedCard.experience : ''}
        qualification={selectedCard ? selectedCard.qualification : ''}
        responsibilities={selectedCard ? selectedCard.responsibilities : ''}
        additional={selectedCard ? selectedCard.additional : ''}
      >
        {/* Moved Apply Button to Modal */}
        <Link
          to={`/signup/${userId}/${encodeURIComponent(selectedCard?.title)}`}
        >
          <button className="border-2 rounded-lg block p-2 w-full text-sm font-semibold bg-green-500 text-white hover:bg-green-800 transition duration-300 mt-4">
            Apply Now
          </button>
        </Link>
      </Modal>
    </div>
  );
};

export default Cards;

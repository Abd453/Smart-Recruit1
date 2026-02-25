import React, { useState, useEffect } from 'react';
import api from '../../utils/api';
import Modal from './Modal';
import { Link } from 'react-router-dom';
import { BiTimeFive } from 'react-icons/bi';
import { FaInfinity, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { CiLocationOn } from 'react-icons/ci';
import { RiMoneyDollarBoxLine } from 'react-icons/ri';

const Cards = ({ userId, disapply = true, landing = true, jobTitle }) => {
  const [jobs, setJobs] = useState([]);
  const [currentSection, setCurrentSection] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const cardsPerSection = 3;

  useEffect(() => {
    setLoading(true);
    api.get('/jobs')
      .then(res => {
        setJobs(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching jobs:", err);
        setLoading(false);
      });
  }, []);

  const totalSections = Math.ceil(jobs.length / cardsPerSection);

  const handleNext = () => {
    if (currentSection < totalSections - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const handlePrevious = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const currentCards = jobs.slice(
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

  if (loading) return <div className="text-center py-20 text-gray-500">Loading openings...</div>;

  return (
    <div className="relative py-20 px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Current <span className="text-green-600">Openings</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Join our team and help us build the future of recruitment tech.
        </p>
      </div>

      <div className="max-w-7xl mx-auto relative group">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentCards.map((job) => (
            <div key={job.id} className="glass p-8 rounded-2xl shadow-xl shadow-green-500/5 hover:shadow-green-500/15 hover:-translate-y-2 transition-all duration-500 border border-white/40 group flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                  {job.title}
                </h3>
                <span className="flex items-center gap-1.5 text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
                  <BiTimeFive className="text-base" />
                  {job.time}
                </span>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2 text-gray-600">
                  <FaInfinity className="text-green-500" />
                  <span className="text-sm">{job.pertemp}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <CiLocationOn className="text-green-500 text-lg" />
                  <span className="text-sm">{job.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 font-semibold">
                  <RiMoneyDollarBoxLine className="text-green-500 text-lg" />
                  <span className="text-sm">{job.money}</span>
                </div>
              </div>

              <p className="text-gray-500 text-sm line-clamp-3 mb-8 flex-grow">
                {job.description}
              </p>

              <button
                onClick={() => handleShowMore(job)}
                className="w-full py-3 px-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-green-600 shadow-lg shadow-black/5 hover:shadow-green-500/20 transition-all duration-300"
              >
                View Details
              </button>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {totalSections > 1 && (
          <>
            <button
              onClick={handlePrevious}
              disabled={currentSection === 0}
              className="absolute top-1/2 -left-6 lg:-left-12 transform -translate-y-1/2 bg-white text-gray-900 w-12 h-12 rounded-full shadow-2xl flex items-center justify-center hover:bg-green-600 hover:text-white disabled:opacity-0 transition-all duration-300 border border-gray-100 z-10"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={handleNext}
              disabled={currentSection === totalSections - 1}
              className="absolute top-1/2 -right-6 lg:-right-12 transform -translate-y-1/2 bg-white text-gray-900 w-12 h-12 rounded-full shadow-2xl flex items-center justify-center hover:bg-green-600 hover:text-white disabled:opacity-0 transition-all duration-300 border border-gray-100 z-10"
            >
              <FaArrowRight />
            </button>
          </>
        )}

        {/* Pagination Dots */}
        {totalSections > 1 && (
          <div className="flex justify-center gap-2 mt-12">
            {Array.from({ length: totalSections }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSection(index)}
                className={`h-2 rounded-full transition-all duration-300 ${currentSection === index ? 'w-8 bg-green-500' : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                aria-label={`Go to section ${index + 1}`}
              />
            ))}
          </div>
        )}
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
        <Link
          to={`/signup`}
        >
          <button className="w-full py-4 px-8 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 shadow-xl shadow-green-500/20 transition-all duration-300 mt-6 md:mt-10">
            Apply for this position
          </button>
        </Link>
      </Modal>
    </div>
  );
};

export default Cards;


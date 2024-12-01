import React from 'react';
import { Link } from 'react-router-dom'; // Ensure to import Link if you want to link to the application form
import { X } from 'lucide-react';
import { BiTimeFive } from 'react-icons/bi';
import { CiLocationOn } from 'react-icons/ci';
import { FaInfinity } from 'react-icons/fa';
import { RiMoneyDollarBoxLine } from 'react-icons/ri';

const Modal = ({
  isOpen,
  onClose,
  content,
  jobid,
  pertemp,
  location,
  money,
  time,
  title,
  requiredDegree,
  experience,
  qualification,
  responsibilities,
  additional,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl mx-4 sm:mx-6 lg:mx-8 p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <X />
        </button>
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Job Details</h2>

          <p className="text-gray-600">Job ID: {jobid}</p>
          <h2 className="text-[24px] sm:text-[30px] text-neutral-900 font-semibold my-2">
            {title}
          </h2>

          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-2">
              <div className="flex items-center gap-2">
                <FaInfinity />
                <span>{pertemp}</span>
              </div>
              <div className="flex items-center gap-2">
                <CiLocationOn />
                <span>{location}</span>
              </div>
              <div className="flex items-center gap-2">
                <RiMoneyDollarBoxLine />
                <span>{money}</span>
              </div>
              <div className="flex items-center gap-2">
                <BiTimeFive />
                <span>{time}</span>
              </div>
            </div>

            <div className="space-y-2">
              {requiredDegree && (
                <div className="flex items-center gap-2">
                  <span className="font-medium text-red-600">Required Degree:</span>
                  <span>{requiredDegree}</span>
                </div>
              )}
              {experience && (
                <div className="flex items-center gap-2">
                  <span className="font-medium text-red-600">Experience:</span>
                  <span>{experience}</span>
                </div>
              )}
              {qualification && (
                <div className="flex items-center gap-2">
                  <span className="font-medium text-red-600">Qualification:</span>
                  <span>{qualification}</span>
                </div>
              )}
              {responsibilities && (
                <div className="flex items-center gap-2">
                  <span className="font-medium text-red-600">Responsibilities:</span>
                  <span>{responsibilities}</span>
                </div>
              )}
              {additional && (
                <div className="flex items-center gap-2">
                  <span className="font-medium text-red-600">Additional Info:</span>
                  <span>{additional}</span>
                </div>
              )}
            </div>

            {content && (
              <div className="mt-4">
                <h3 className="text-lg text-red-700 font-semibold">Description:</h3>
                <p>{content}</p>
              </div>
            )}
          </div>

          {/* Apply Button inside Modal */}
          <Link to={`/applyform/${jobid}/${encodeURIComponent(title)}`}>
            <button className="border-2 rounded-lg block p-2 w-full text-sm font-semibold bg-green-500 text-white hover:bg-green-800 transition duration-300 mt-6">
              Apply Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;

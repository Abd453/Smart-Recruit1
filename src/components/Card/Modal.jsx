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
    <div className="fixed inset-0 flex items-center justify-center z-[100] px-4">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      <div className="glass rounded-[2rem] shadow-2xl shadow-green-500/10 w-full max-w-3xl overflow-hidden relative animate-in fade-in zoom-in duration-300">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all duration-200 z-10"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8 md:p-12 overflow-y-auto max-h-[90vh]">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider rounded-lg">
              {jobid ? `ID: ${jobid.slice(0, 8)}` : 'Job Detail'}
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
            {title}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <div className="bg-gray-50/50 p-4 rounded-2xl flex flex-col items-center text-center group hover:bg-white transition-colors">
              <FaInfinity className="text-green-500 text-xl mb-2" />
              <span className="text-xs text-gray-500 uppercase font-bold tracking-tighter">Type</span>
              <span className="text-sm font-semibold text-gray-900">{pertemp}</span>
            </div>
            <div className="bg-gray-50/50 p-4 rounded-2xl flex flex-col items-center text-center group hover:bg-white transition-colors">
              <CiLocationOn className="text-green-500 text-2xl mb-2" />
              <span className="text-xs text-gray-500 uppercase font-bold tracking-tighter">Location</span>
              <span className="text-sm font-semibold text-gray-900">{location}</span>
            </div>
            <div className="bg-gray-50/50 p-4 rounded-2xl flex flex-col items-center text-center group hover:bg-white transition-colors">
              <RiMoneyDollarBoxLine className="text-green-500 text-2xl mb-2" />
              <span className="text-xs text-gray-500 uppercase font-bold tracking-tighter">Salary</span>
              <span className="text-sm font-semibold text-gray-900">{money}</span>
            </div>
            <div className="bg-gray-50/50 p-4 rounded-2xl flex flex-col items-center text-center group hover:bg-white transition-colors">
              <BiTimeFive className="text-green-500 text-2xl mb-2" />
              <span className="text-xs text-gray-500 uppercase font-bold tracking-tighter">Posted</span>
              <span className="text-sm font-semibold text-gray-900">{time}</span>
            </div>
          </div>

          <div className="space-y-8">
            {content && (
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <div className="w-1.5 h-6 bg-green-500 rounded-full"></div>
                  Description
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {content}
                </p>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-8">
              {(requiredDegree || experience || qualification) && (
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100 italic">Requirements</h3>
                  {requiredDegree && (
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                      <span className="text-gray-600 font-medium">Degree: <span className="text-gray-900">{requiredDegree}</span></span>
                    </div>
                  )}
                  {experience && (
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                      <span className="text-gray-600 font-medium">Experience: <span className="text-gray-900">{experience}</span></span>
                    </div>
                  )}
                  {qualification && (
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                      <span className="text-gray-600 font-medium">Qualif.: <span className="text-gray-900">{qualification}</span></span>
                    </div>
                  )}
                </div>
              )}

              {(responsibilities || additional) && (
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100 italic">Scope & Extra</h3>
                  {responsibilities && (
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                      <span className="text-gray-600 font-medium">Resp.: <span className="text-gray-900">{responsibilities}</span></span>
                    </div>
                  )}
                  {additional && (
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                      <span className="text-gray-600 font-medium">More: <span className="text-gray-900">{additional}</span></span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="mt-12">
            <Link to={`/signup`}>
              <button className="w-full py-4 px-8 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold rounded-2xl shadow-xl shadow-green-500/30 transform transition-all duration-200 hover:-translate-y-1 active:scale-95">
                Apply for this position
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

import React, { useState, useEffect } from 'react';
import api from '../../utils/api';
import Footer from '../../components/Footer';
import NavbarM from './navbarM';
import { BiTimeFive } from "react-icons/bi";
import { FaInfinity } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { RiMoneyDollarBoxLine } from "react-icons/ri";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchJobs = () => {
    api.get('/jobs')
      .then(res => {
        setJobs(res.data.filter(j => j.status === 'pending') || []);
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleJobAction = async (jobId, status) => {
    try {
      await api.patch(`/jobs/${jobId}`, { status });
      alert(`Job requisition ${status.toLowerCase()}!`);
      fetchJobs();
    } catch (err) {
      console.error(err);
      alert("Action failed. Check console.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50/50 flex flex-col">
      <NavbarM />

      <main className="flex-grow py-20 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
              Requisition <span className="text-orange-500">Pipeline</span>
            </h1>
            <p className="text-gray-500 mt-4 text-lg font-medium italic">Pending approvals for new recruitment requests.</p>
          </div>

          <div className="flex gap-8 justify-center flex-wrap">
            {loading ? (
              <div className="animate-pulse text-gray-400 font-bold uppercase tracking-widest text-2xl">Scanning Network...</div>
            ) : jobs.length === 0 ? (
              <div className="glass p-12 rounded-[2rem] text-center border border-white/60">
                <p className="text-gray-400 font-bold italic">No pending job requests found.</p>
              </div>
            ) : jobs.map((job) => (
              <div
                key={job.id}
                className="glass w-full max-w-[340px] p-8 rounded-[2.5rem] border border-white/60 shadow-xl shadow-gray-200/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-orange-600 transition-colors">{job.title}</h3>
                  <div className="bg-orange-100 text-orange-600 p-2 rounded-xl">
                    <BiTimeFive size={20} />
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-gray-600 font-medium">
                    <FaInfinity className="text-gray-400" />
                    <span>{job.pertemp}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 font-medium">
                    <CiLocationOn className="text-gray-400" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-800 font-bold">
                    <RiMoneyDollarBoxLine className="text-green-600" />
                    <span>{job.money}</span>
                  </div>
                </div>

                <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 mb-8 min-h-[4.5rem]">
                  {job.description}
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-white/20">
                  <button
                    onClick={() => handleJobAction(job.id, 'Accepted')}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-green-500/20 transition-all active:scale-95"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleJobAction(job.id, 'Rejected')}
                    className="flex-1 bg-white border border-red-200 text-red-600 font-bold py-3 px-4 rounded-xl hover:bg-red-50 transition-all active:scale-95"
                  >
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Jobs;

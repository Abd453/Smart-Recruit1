import React, { useState } from 'react';
import { BiTimeFive } from 'react-icons/bi';
import { CiLocationOn } from 'react-icons/ci';
import { FaInfinity } from 'react-icons/fa';
import { RiMoneyDollarBoxLine } from 'react-icons/ri';
import axios from 'axios';
import Db from '../../data/auth.json';
import Footer from '../../components/Footer';
import Navbar from './navbarM';

const Jobs = () => {
  // Initialize state to track status for each job
  const [jobStatus, setJobStatus] = useState(
    Db.jobs.reduce((acc, job) => {
      acc[job.id] = 'pending'; // Set initial status to 'pending'
      return acc;
    }, {})
  );

  // Function to handle Accept and Reject button clicks
  const handleJobAction = (jobId, action) => {
    // Define the updated status
    const newStatus = action === 'accept' ? 'accepted' : 'rejected';
    const updatedData = Db.jobs.find((job) => job.id === jobId);

    // Update the status state for the job
    setJobStatus((prevStatus) => ({
      ...prevStatus,
      [jobId]: newStatus,
    }));

    // Send data to the server only if status is 'accepted'
    if (newStatus === 'accepted') {
      axios
        .post('http://localhost:8001/jobsto', {
          ...updatedData,
          status: newStatus,
        })
        .then((result) => {
          alert(`${updatedData.title} ${newStatus} successfully!`);
        })
        .catch((error) => {
          console.error('There was an error submitting the form!', error);
        });
    }
  };

  return (
    <div>
      <Navbar />
      <div className="  bg-cover bg-center flex">
        <div className="flex gap-10 justify-center flex-wrap items-center py-10">
          {Db.jobs.map((db) => (
            <div
              key={db.id}
              className="mt-10 group group/item w-[250px] p-[20px] bg-white rounded-[10px]
              hover:bg-gradient-to-r from-[#868686] to-[#eea12f] shadow-lg shadow-greyIsh-400/700 hover:shadow-lg"
            >
              <span className="flex justify-between items-center gap-4 pb-5">
                <h1 className="text-[24px]">{db.title}</h1>
                <span className="flex items-center gap">
                  <BiTimeFive />
                  {db.time}
                </span>
              </span>
              <h6 className="flex items-center gap">
                <span>
                  <FaInfinity />
                </span>
                {db.pertemp}
              </h6>
              <h6 className="flex items-center gap">
                <span>
                  <CiLocationOn />
                </span>
                {db.location}
              </h6>
              <h6 className="flex items-center gap">
                <span>
                  <RiMoneyDollarBoxLine />
                </span>
                {db.money}
              </h6>

              <p
                className="text-[13px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px]
                group-hover:text-white pb-5"
              >
                {db.description}
              </p>

              <div className="flex items-center justify-between">
                <button
                  onClick={() => handleJobAction(db.id, 'accept')}
                  className={`shadow-lg shadow-[#86fa7bea] ${
                    jobStatus[db.id] === 'accepted'
                      ? 'bg-green-700'
                      : 'hover:bg-green-700'
                  } hover:shadow-lg mt-10 bg-transparent font-semibold hover:text-white py-2 px-4 border hover:border-transparent rounded`}
                  disabled={jobStatus[db.id] !== 'pending'}
                >
                  {jobStatus[db.id] === 'accepted' ? 'Accepted' : 'Accept'}
                </button>
                <button
                  onClick={() => handleJobAction(db.id, 'reject')}
                  className={`shadow-lg shadow-[#fd8787ea] ${
                    jobStatus[db.id] === 'rejected'
                      ? 'bg-red-700'
                      : 'hover:bg-red-700'
                  } hover:shadow-lg pr-15 mt-10 bg-transparent font-semibold hover:text-white py-2 px-4 border hover:border-transparent rounded`}
                  disabled={jobStatus[db.id] !== 'pending'}
                >
                  {jobStatus[db.id] === 'rejected' ? 'Rejected' : 'Reject'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Jobs;

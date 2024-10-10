import React, { forwardRef } from 'react';

const Wedo =  forwardRef((props, ref) => {
  return (
    <section ref={ref} id="wedo" className=" text-white py-12 lg:py-20">
      <h1 className="bg-gradient-to-r from-green-800 text-center text-black text-5xl font-bold mb-10">
  What We Do
</h1>

      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-gradient-to-r from-green-500 to-teal-600 p-6 rounded-lg shadow-lg hover:from-teal-600 hover:to-green-500 transition-colors duration-300 border-2 border-green-700">
            <h3 className="text-2xl font-semibold mb-2">Job Posting</h3>
            <p>
              Post job openings with ease. Customize your listings and reach the
              right candidates quickly.
            </p>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-teal-600 p-6 rounded-lg shadow-lg hover:from-teal-600 hover:to-green-500 transition-colors duration-300 border-2 border-green-700">
            <h3 className="text-2xl font-semibold mb-2">
              Application Tracking
            </h3>
            <p>
              Keep track of your job applications seamlessly. Review and manage
              candidate progress in one place.
            </p>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-teal-600 p-6 rounded-lg shadow-lg hover:from-teal-600 hover:to-green-500 transition-colors duration-300 border-2 border-green-700">
            <h3 className="text-2xl font-semibold mb-2">Email Notifications</h3>
            <p>
              Stay updated with automated email notifications. Get real-time
              alerts for application updates and more.
            </p>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-teal-600 p-6 rounded-lg shadow-lg hover:from-teal-600 hover:to-green-500 transition-colors duration-300 border-2 border-green-700">
            <h3 className="text-2xl font-semibold mb-2">Advanced Filters</h3>
            <p>
              Use advanced filters to refine job searches and find the perfect
              candidates faster.
            </p>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-teal-600 p-6 rounded-lg shadow-lg hover:from-teal-600 hover:to-green-500 transition-colors duration-300 border-2 border-green-700">
            <h3 className="text-2xl font-semibold mb-2">Custom Reports</h3>
            <p>
              Generate custom reports to analyze recruitment metrics and improve
              your hiring strategy.
            </p>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-teal-600 p-6 rounded-lg shadow-lg hover:from-teal-600 hover:to-green-500 transition-colors duration-300 border-2 border-green-700">
            <h3 className="text-2xl font-semibold mb-2">User Management</h3>
            <p>
              Manage user roles and permissions efficiently. Customize access
              levels for different team members.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Wedo;

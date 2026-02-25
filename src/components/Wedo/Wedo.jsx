import React, { forwardRef } from 'react';

const Wedo = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="wedo" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Our <span className="text-green-600">Solutions</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Empowering your recruitment process with cutting-edge tools and seamless integrations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Job Posting", desc: "Post job openings with ease. Customize your listings and reach the right candidates quickly." },
            { title: "Application Tracking", desc: "Keep track of your job applications seamlessly. Review and manage candidate progress in one place." },
            { title: "Email Notifications", desc: "Stay updated with automated email notifications. Get real-time alerts for application updates and more." },
            { title: "Advanced Filters", desc: "Use advanced filters to refine job searches and find the perfect candidates faster." },
            { title: "Custom Reports", desc: "Generate custom reports to analyze recruitment metrics and improve your hiring strategy." },
            { title: "User Management", desc: "Manage user roles and permissions efficiently. Customize access levels for different team members." }
          ].map((item, idx) => (
            <div key={idx} className="glass p-8 rounded-2xl shadow-xl shadow-green-500/5 hover:shadow-green-500/10 hover:-translate-y-2 transition-all duration-300 border border-white/40 group">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500 transition-colors duration-300">
                <div className="w-6 h-6 bg-green-500 group-hover:bg-white rounded-full transition-colors duration-300"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Wedo;

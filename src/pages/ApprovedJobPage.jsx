import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Briefcase, MapPin, Clock, DollarSign, Eye, Trash2, Users, Search, TrendingUp, MoreHorizontal } from 'lucide-react';

import Header from '../components/common/Header';
import StatCard from '../components/common/StatCard';

const MOCK_APPROVED_JOBS = [
  { id: 1, title: "Senior Frontend Developer", location: "Addis Ababa", pertemp: "Full-time", money: "ETB 45,000", time: "2026-03-01", status: "Accepted", applicants: 24, department: "Engineering", description: "We are looking for an experienced frontend developer with React expertise." },
  { id: 2, title: "Product Manager", location: "Remote", pertemp: "Full-time", money: "ETB 55,000", time: "2026-02-28", status: "Accepted", applicants: 18, department: "Product", description: "Lead product strategy and roadmap for our recruitment platform." },
  { id: 3, title: "Data Analyst", location: "Hawassa", pertemp: "Full-time", money: "ETB 35,000", time: "2026-02-15", status: "Accepted", applicants: 32, department: "Analytics", description: "Analyze recruitment data and provide actionable insights." },
  { id: 4, title: "UX Designer", location: "Addis Ababa", pertemp: "Full-time", money: "ETB 38,000", time: "2026-03-05", status: "Accepted", applicants: 12, department: "Design", description: "Design intuitive user experiences for our hiring platform." },
  { id: 5, title: "Backend Developer", location: "Addis Ababa", pertemp: "Full-time", money: "ETB 48,000", time: "2026-03-06", status: "Accepted", applicants: 15, department: "Engineering", description: "Build scalable backend services using Node.js and PostgreSQL." },
];

const ApprovedJobPage = () => {
  const [jobs, setJobs] = useState(MOCK_APPROVED_JOBS);
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedId, setExpandedId] = useState(null);

  const filtered = jobs.filter(j =>
    j.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    j.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalApplicants = jobs.reduce((sum, j) => sum + j.applicants, 0);

  const handleDelete = (id) => {
    setJobs(jobs.filter(j => j.id !== id));
  };

  return (
    <div className="flex-1 overflow-auto bg-gray-50/50">
      <Header title="Approved Jobs" subtitle="Jobs approved and ready for candidates" />

      <main className="max-w-7xl mx-auto py-8 px-6 lg:px-8">
        {/* STATS */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <StatCard name="Approved Jobs" icon={CheckCircle} value={jobs.length} color="#22c55e" />
          <StatCard name="Total Applicants" icon={Users} value={totalApplicants} color="#3b82f6" trend="up" trendValue="+23" />
          <StatCard name="Avg. Applicants" icon={TrendingUp} value={Math.round(totalApplicants / jobs.length)} color="#8b5cf6" />
          <StatCard name="Departments" icon={Briefcase} value={new Set(jobs.map(j => j.department)).size} color="#f59e0b" />
        </motion.div>

        {/* TABLE */}
        <motion.div
          className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <div className="px-6 py-5 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h3 className="text-lg font-bold text-gray-900">Approved Requisitions</h3>
            <div className="relative">
              <input
                type="text"
                placeholder="Search jobs…"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-64 bg-gray-50 border border-gray-200 text-gray-700 placeholder-gray-400 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/40 focus:border-green-400 transition-all"
              />
              <Search className="absolute left-3 top-3 text-gray-400" size={16} />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Position</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Location</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Salary</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Applicants</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Posted</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filtered.map((job, i) => (
                  <React.Fragment key={job.id}>
                    <motion.tr
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.04 }}
                      className="hover:bg-gray-50/60 transition-colors cursor-pointer"
                      onClick={() => setExpandedId(expandedId === job.id ? null : job.id)}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center text-green-600 flex-shrink-0">
                            <CheckCircle size={16} />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-gray-900">{job.title}</p>
                            <p className="text-xs text-gray-400">{job.department}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1"><MapPin size={12} className="text-gray-400" />{job.location}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-xs font-medium text-gray-600 bg-gray-100 px-2.5 py-1 rounded-lg">{job.pertemp}</span>
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-green-600">{job.money}</td>
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">{job.applicants}</td>
                      <td className="px-6 py-4 text-sm text-gray-400">
                        {new Date(job.time).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-bold ring-1 ring-inset bg-green-50 text-green-700 ring-green-600/10">
                          Approved
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
                          <button className="p-1.5 rounded-lg hover:bg-blue-50 text-gray-400 hover:text-blue-600 transition-colors"><Eye size={16} /></button>
                          <button onClick={() => handleDelete(job.id)} className="p-1.5 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-600 transition-colors"><Trash2 size={16} /></button>
                        </div>
                      </td>
                    </motion.tr>
                    {expandedId === job.id && (
                      <tr>
                        <td colSpan={8} className="px-6 py-4 bg-gray-50/50">
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="text-sm text-gray-600 leading-relaxed"
                          >
                            <span className="font-semibold text-gray-700">Description: </span>
                            {job.description}
                          </motion.div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default ApprovedJobPage;
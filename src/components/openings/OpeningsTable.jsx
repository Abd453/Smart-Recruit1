import { motion } from "framer-motion";
import { Edit, Search, Trash2, MapPin, Briefcase, DollarSign } from "lucide-react";
import React, { useState, useEffect } from "react";
import api from "../../utils/api";

const OpeningsTable = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [jobs, setJobs] = useState([]);
	const [filteredJobs, setFilteredJobs] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchJobs();
	}, []);

	const fetchJobs = async () => {
		try {
			setLoading(true);
			const response = await api.get("/jobs");
			setJobs(response.data);
			setFilteredJobs(response.data);
		} catch (error) {
			console.error("Error fetching jobs:", error);
		} finally {
			setLoading(false);
		}
	};

	const handleSearch = (e) => {
		const term = e.target.value.toLowerCase();
		setSearchTerm(term);
		const filtered = jobs.filter(
			(job) => job.title.toLowerCase().includes(term) || job.location.toLowerCase().includes(term)
		);
		setFilteredJobs(filtered);
	};

	const handleDelete = async (id) => {
		if (window.confirm("Are you sure you want to delete this opening?")) {
			try {
				await api.delete(`/jobs/${id}`);
				fetchJobs();
			} catch (error) {
				console.error("Error deleting job:", error);
			}
		}
	};

	if (loading) return <div className="text-gray-400 p-6 text-center">Loading openings...</div>;

	return (
		<motion.div
			className='glass backdrop-blur-md shadow-lg rounded-2xl p-6 border border-white/20 mb-8'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
		>
			<div className='flex justify-between items-center mb-6'>
				<h2 className='text-xl font-bold text-gray-900'>Live Requisitions</h2>
				<div className='relative'>
					<input
						type='text'
						placeholder='Search openings...'
						className='bg-white/50 text-gray-900 placeholder-gray-400 rounded-xl pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 border border-gray-100'
						onChange={handleSearch}
						value={searchTerm}
					/>
					<Search className='absolute left-3 top-2.5 text-gray-400' size={18} />
				</div>
			</div>

			<div className='overflow-x-auto'>
				<table className='min-w-full divide-y divide-gray-100'>
					<thead>
						<tr>
							<th className='px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider'>Job Title</th>
							<th className='px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider'>Location</th>
							<th className='px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider'>Type</th>
							<th className='px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider'>Salary</th>
							<th className='px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider'>Status</th>
							<th className='px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider'>Actions</th>
						</tr>
					</thead>

					<tbody className='divide-y divide-gray-50'>
						{filteredJobs.map((job) => (
							<motion.tr
								key={job.id}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.3 }}
								className="hover:bg-green-50/30 transition-colors"
							>
								<td className='px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900'>
									<div className="flex items-center gap-3">
										<div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center text-green-600">
											<Briefcase size={16} />
										</div>
										{job.title}
									</div>
								</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-600'>
									<div className="flex items-center gap-1">
										<MapPin size={14} className="text-gray-400" />
										{job.location}
									</div>
								</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-600'>{job.pertemp}</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600'>{job.money}</td>
								<td className='px-6 py-4 whitespace-nowrap'>
									<span className={`px-3 py-1 text-xs font-bold rounded-full ${job.status === 'Accepted' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
										}`}>
										{job.status || 'Pending'}
									</span>
								</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
									<button className='text-green-600 hover:text-green-800 mr-3 p-1 rounded-lg hover:bg-green-50 transition-all'>
										<Edit size={18} />
									</button>
									<button
										onClick={() => handleDelete(job.id)}
										className='text-red-600 hover:text-red-800 p-1 rounded-lg hover:bg-red-50 transition-all'
									>
										<Trash2 size={18} />
									</button>
								</td>
							</motion.tr>
						))}
					</tbody>
				</table>
			</div>
		</motion.div>
	);
};
export default OpeningsTable;

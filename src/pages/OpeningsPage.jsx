import { motion } from "framer-motion";
import { Briefcase, TrendingUp, AlertTriangle, Users, Search, Edit, Trash2, MapPin, DollarSign, MoreHorizontal, Eye } from "lucide-react";
import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";

// ── Mock openings data ──
const MOCK_OPENINGS = [
	{ id: 1, title: "Senior Frontend Developer", location: "Addis Ababa", pertemp: "Full-time", money: "ETB 45,000", status: "Active", applicants: 24, department: "Engineering" },
	{ id: 2, title: "Product Manager", location: "Remote", pertemp: "Full-time", money: "ETB 55,000", status: "Active", applicants: 18, department: "Product" },
	{ id: 3, title: "UX Designer", location: "Addis Ababa", pertemp: "Full-time", money: "ETB 38,000", status: "Active", applicants: 12, department: "Design" },
	{ id: 4, title: "Data Analyst", location: "Hawassa", pertemp: "Full-time", money: "ETB 35,000", status: "Closed", applicants: 32, department: "Analytics" },
	{ id: 5, title: "DevOps Engineer", location: "Addis Ababa", pertemp: "Contract", money: "ETB 50,000", status: "Active", applicants: 8, department: "Engineering" },
	{ id: 6, title: "Marketing Lead", location: "Dire Dawa", pertemp: "Full-time", money: "ETB 40,000", status: "Urgent", applicants: 5, department: "Marketing" },
	{ id: 7, title: "Backend Developer", location: "Addis Ababa", pertemp: "Full-time", money: "ETB 48,000", status: "Active", applicants: 15, department: "Engineering" },
	{ id: 8, title: "HR Coordinator", location: "Addis Ababa", pertemp: "Part-time", money: "ETB 22,000", status: "Active", applicants: 9, department: "HR" },
];

const APPS_BY_ROLE = [
	{ name: "Frontend", apps: 24 },
	{ name: "PM", apps: 18 },
	{ name: "UX", apps: 12 },
	{ name: "Data", apps: 32 },
	{ name: "DevOps", apps: 8 },
	{ name: "Marketing", apps: 5 },
	{ name: "Backend", apps: 15 },
	{ name: "HR", apps: 9 },
];

const TYPE_DIST = [
	{ name: "Full-time", value: 65, color: "#22c55e" },
	{ name: "Contract", value: 20, color: "#3b82f6" },
	{ name: "Part-time", value: 15, color: "#f59e0b" },
];

const STATUS_STYLES = {
	Active: "bg-green-50 text-green-700 ring-green-600/10",
	Closed: "bg-gray-100 text-gray-600 ring-gray-500/10",
	Urgent: "bg-red-50 text-red-700 ring-red-600/10",
};

const OpeningsPage = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [openings] = useState(MOCK_OPENINGS);

	const filtered = openings.filter(
		(j) =>
			j.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			j.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
			j.department.toLowerCase().includes(searchTerm.toLowerCase())
	);

	const activeCount = openings.filter(j => j.status === 'Active').length;
	const urgentCount = openings.filter(j => j.status === 'Urgent').length;
	const totalApps = openings.reduce((sum, j) => sum + j.applicants, 0);

	return (
		<div className="flex-1 overflow-auto bg-gray-50/50">
			<Header title="Openings" subtitle="Manage active job requisitions" />

			<main className="max-w-7xl mx-auto py-8 px-6 lg:px-8">
				{/* STATS */}
				<motion.div
					className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<StatCard name="Total Openings" icon={Briefcase} value={openings.length} color="#6366F1" />
					<StatCard name="Active Jobs" icon={TrendingUp} value={activeCount} color="#22c55e" trend="up" trendValue="+3" />
					<StatCard name="Urgent Fill" icon={AlertTriangle} value={urgentCount} color="#ef4444" />
					<StatCard name="Total Applicants" icon={Users} value={totalApps} color="#3b82f6" trend="up" trendValue="+15%" />
				</motion.div>

				{/* TABLE */}
				<motion.div
					className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-8"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.1, duration: 0.5 }}
				>
					<div className="px-6 py-5 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
						<h3 className="text-lg font-bold text-gray-900">All Openings</h3>
						<div className="relative">
							<input
								type="text"
								placeholder="Search openings…"
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
									<th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Status</th>
									<th className="px-6 py-4"></th>
								</tr>
							</thead>
							<tbody className="divide-y divide-gray-50">
								{filtered.map((job, i) => (
									<motion.tr
										key={job.id}
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: i * 0.04 }}
										className="hover:bg-gray-50/60 transition-colors"
									>
										<td className="px-6 py-4">
											<div className="flex items-center gap-3">
												<div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center text-indigo-600 flex-shrink-0">
													<Briefcase size={16} />
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
										<td className="px-6 py-4">
											<div className="flex items-center gap-2">
												<div className="w-20 bg-gray-100 rounded-full h-1.5">
													<div className="bg-green-500 h-1.5 rounded-full" style={{ width: `${Math.min((job.applicants / 35) * 100, 100)}%` }}></div>
												</div>
												<span className="text-sm font-medium text-gray-700">{job.applicants}</span>
											</div>
										</td>
										<td className="px-6 py-4">
											<span className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-bold ring-1 ring-inset ${STATUS_STYLES[job.status]}`}>
												{job.status}
											</span>
										</td>
										<td className="px-6 py-4">
											<div className="flex items-center gap-1">
												<button className="p-1.5 rounded-lg hover:bg-blue-50 text-gray-400 hover:text-blue-600 transition-colors"><Eye size={16} /></button>
												<button className="p-1.5 rounded-lg hover:bg-green-50 text-gray-400 hover:text-green-600 transition-colors"><Edit size={16} /></button>
												<button className="p-1.5 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-600 transition-colors"><Trash2 size={16} /></button>
											</div>
										</td>
									</motion.tr>
								))}
							</tbody>
						</table>
					</div>
				</motion.div>

				{/* CHARTS */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
					<motion.div
						className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2, duration: 0.5 }}
					>
						<h3 className="text-lg font-bold text-gray-900 mb-1">Applications by Role</h3>
						<p className="text-sm text-gray-500 mb-4">Number of applicants per opening</p>
						<ResponsiveContainer width="100%" height={250}>
							<BarChart data={APPS_BY_ROLE}>
								<CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
								<XAxis dataKey="name" tick={{ fontSize: 11, fill: '#9ca3af' }} axisLine={false} tickLine={false} />
								<YAxis tick={{ fontSize: 11, fill: '#9ca3af' }} axisLine={false} tickLine={false} />
								<Tooltip contentStyle={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '12px' }} />
								<Bar dataKey="apps" fill="#22c55e" radius={[6, 6, 0, 0]} />
							</BarChart>
						</ResponsiveContainer>
					</motion.div>

					<motion.div
						className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3, duration: 0.5 }}
					>
						<h3 className="text-lg font-bold text-gray-900 mb-1">Employment Type</h3>
						<p className="text-sm text-gray-500 mb-4">Distribution of job types</p>
						<ResponsiveContainer width="100%" height={220}>
							<PieChart>
								<Pie data={TYPE_DIST} cx="50%" cy="50%" innerRadius={55} outerRadius={85} paddingAngle={3} dataKey="value" stroke="none">
									{TYPE_DIST.map((entry, index) => (
										<Cell key={index} fill={entry.color} />
									))}
								</Pie>
								<Tooltip contentStyle={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '12px' }} />
							</PieChart>
						</ResponsiveContainer>
						<div className="flex justify-center gap-6 mt-2">
							{TYPE_DIST.map(t => (
								<span key={t.name} className="flex items-center gap-1.5 text-xs font-medium text-gray-600">
									<span className="w-2 h-2 rounded-full" style={{ backgroundColor: t.color }}></span>
									{t.name} ({t.value}%)
								</span>
							))}
						</div>
					</motion.div>
				</div>
			</main>
		</div>
	);
};
export default OpeningsPage;

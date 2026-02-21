import { UserCheck, UserPlus, UsersIcon, UserX, Search, MoreHorizontal, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import React, { useState } from "react";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";

// ── Mock candidates data ──
const MOCK_CANDIDATES = [
	{ id: 1, name: "Abebe Tadesse", email: "abebe.t@email.com", role: "Frontend Developer", department: "Engineering", status: "Qualified", location: "Addis Ababa", appliedDate: "2026-02-28" },
	{ id: 2, name: "Sara Mohammed", email: "sara.m@email.com", role: "Product Manager", department: "Product", status: "Interview", location: "Addis Ababa", appliedDate: "2026-03-01" },
	{ id: 3, name: "Daniel Kebede", email: "daniel.k@email.com", role: "Data Analyst", department: "Analytics", status: "Hired", location: "Addis Ababa", appliedDate: "2026-02-15" },
	{ id: 4, name: "Meron Hailu", email: "meron.h@email.com", role: "UX Designer", department: "Design", status: "Qualified", location: "Dire Dawa", appliedDate: "2026-03-05" },
	{ id: 5, name: "Yonas Getachew", email: "yonas.g@email.com", role: "DevOps Engineer", department: "Engineering", status: "Rejected", location: "Addis Ababa", appliedDate: "2026-02-20" },
	{ id: 6, name: "Hanna Alemu", email: "hanna.a@email.com", role: "Marketing Lead", department: "Marketing", status: "Interview", location: "Hawassa", appliedDate: "2026-03-02" },
	{ id: 7, name: "Biruk Solomon", email: "biruk.s@email.com", role: "Backend Developer", department: "Engineering", status: "Qualified", location: "Addis Ababa", appliedDate: "2026-03-06" },
	{ id: 8, name: "Tigist Worku", email: "tigist.w@email.com", role: "HR Specialist", department: "HR", status: "Hired", location: "Addis Ababa", appliedDate: "2026-02-10" },
];

const STATUS_STYLES = {
	Qualified: "bg-blue-50 text-blue-700 ring-blue-600/10",
	Interview: "bg-amber-50 text-amber-700 ring-amber-600/10",
	Hired: "bg-green-50 text-green-700 ring-green-600/10",
	Rejected: "bg-red-50 text-red-700 ring-red-600/10",
};

const UsersPage = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [candidates] = useState(MOCK_CANDIDATES);

	const filtered = candidates.filter(
		(c) =>
			c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			c.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
			c.department.toLowerCase().includes(searchTerm.toLowerCase())
	);

	const stats = {
		total: candidates.length,
		qualified: candidates.filter((c) => c.status === "Qualified").length,
		interviews: candidates.filter((c) => c.status === "Interview").length,
		hired: candidates.filter((c) => c.status === "Hired").length,
	};

	return (
		<div className="flex-1 overflow-auto bg-gray-50/50">
			<Header title="Candidates" subtitle="Manage and track all applicants" />

			<main className="max-w-7xl mx-auto py-8 px-6 lg:px-8">
				{/* STATS */}
				<motion.div
					className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<StatCard name="Total Candidates" icon={UsersIcon} value={stats.total} color="#6366F1" trend="up" trendValue="+12" />
					<StatCard name="Qualified" icon={UserCheck} value={stats.qualified} color="#3b82f6" />
					<StatCard name="In Interview" icon={UserPlus} value={stats.interviews} color="#f59e0b" />
					<StatCard name="Hired" icon={UserX} value={stats.hired} color="#22c55e" trend="up" trendValue="+2" />
				</motion.div>

				{/* TABLE */}
				<motion.div
					className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.15, duration: 0.5 }}
				>
					{/* Table header */}
					<div className="px-6 py-5 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
						<h3 className="text-lg font-bold text-gray-900">All Candidates</h3>
						<div className="relative">
							<input
								type="text"
								placeholder="Search by name, role…"
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
								className="w-64 bg-gray-50 border border-gray-200 text-gray-700 placeholder-gray-400 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/40 focus:border-green-400 transition-all"
							/>
							<Search className="absolute left-3 top-3 text-gray-400" size={16} />
						</div>
					</div>

					{/* Table */}
					<div className="overflow-x-auto">
						<table className="min-w-full">
							<thead>
								<tr className="border-b border-gray-100">
									<th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Candidate</th>
									<th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Role</th>
									<th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Department</th>
									<th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Location</th>
									<th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Status</th>
									<th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Applied</th>
									<th className="px-6 py-4"></th>
								</tr>
							</thead>
							<tbody className="divide-y divide-gray-50">
								{filtered.map((candidate, i) => (
									<motion.tr
										key={candidate.id}
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: i * 0.04 }}
										className="hover:bg-gray-50/60 transition-colors"
									>
										<td className="px-6 py-4">
											<div className="flex items-center gap-3">
												<div className="w-9 h-9 rounded-xl bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center text-green-700 text-xs font-bold flex-shrink-0">
													{candidate.name.split(' ').map(n => n[0]).join('')}
												</div>
												<div>
													<p className="text-sm font-semibold text-gray-900">{candidate.name}</p>
													<p className="text-xs text-gray-400 flex items-center gap-1"><Mail size={10} />{candidate.email}</p>
												</div>
											</div>
										</td>
										<td className="px-6 py-4 text-sm text-gray-700 font-medium">{candidate.role}</td>
										<td className="px-6 py-4 text-sm text-gray-500">{candidate.department}</td>
										<td className="px-6 py-4 text-sm text-gray-500">
											<span className="flex items-center gap-1"><MapPin size={12} className="text-gray-400" />{candidate.location}</span>
										</td>
										<td className="px-6 py-4">
											<span className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-bold ring-1 ring-inset ${STATUS_STYLES[candidate.status]}`}>
												{candidate.status}
											</span>
										</td>
										<td className="px-6 py-4 text-sm text-gray-400">{new Date(candidate.appliedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</td>
										<td className="px-6 py-4">
											<button className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors">
												<MoreHorizontal size={16} />
											</button>
										</td>
									</motion.tr>
								))}
							</tbody>
						</table>
						{filtered.length === 0 && (
							<div className="text-center py-12 text-gray-400">
								<UsersIcon size={40} className="mx-auto mb-3 opacity-30" />
								<p className="font-medium">No candidates found</p>
							</div>
						)}
					</div>
				</motion.div>
			</main>
		</div>
	);
};
export default UsersPage;

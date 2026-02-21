import { Briefcase, Users, Building2, TrendingUp, Clock, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
	AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
	BarChart, Bar, PieChart, Pie, Cell, Legend
} from "recharts";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";

// ── Mock data for standalone mode ──
const MOCK_STATS = { users: 248, jobs: 18, applications: 134, depts: 12 };

const HIRING_PIPELINE = [
	{ month: "Sep", applications: 42, interviews: 18, hired: 6 },
	{ month: "Oct", applications: 55, interviews: 24, hired: 9 },
	{ month: "Nov", applications: 68, interviews: 32, hired: 11 },
	{ month: "Dec", applications: 48, interviews: 20, hired: 8 },
	{ month: "Jan", applications: 72, interviews: 35, hired: 14 },
	{ month: "Feb", applications: 85, interviews: 42, hired: 17 },
	{ month: "Mar", applications: 94, interviews: 48, hired: 19 },
];

const DEPT_DISTRIBUTION = [
	{ name: "Engineering", value: 35, color: "#22c55e" },
	{ name: "Marketing", value: 20, color: "#3b82f6" },
	{ name: "Sales", value: 18, color: "#f59e0b" },
	{ name: "HR", value: 12, color: "#8b5cf6" },
	{ name: "Design", value: 15, color: "#ec4899" },
];

const RECENT_ACTIVITY = [
	{ id: 1, action: "New application received", role: "Senior Frontend Developer", time: "2 min ago", type: "application" },
	{ id: 2, action: "Interview scheduled", role: "Product Manager", time: "15 min ago", type: "interview" },
	{ id: 3, action: "Offer accepted", role: "Data Analyst", time: "1 hr ago", type: "hired" },
	{ id: 4, action: "New opening created", role: "UX Designer", time: "2 hrs ago", type: "opening" },
	{ id: 5, action: "Application reviewed", role: "DevOps Engineer", time: "3 hrs ago", type: "application" },
];

const OverviewPage = () => {
	const [stats, setStats] = useState(MOCK_STATS);

	return (
		<div className="flex-1 overflow-auto bg-gray-50/50">
			<Header title="Dashboard" subtitle="Overview of your recruitment pipeline" />

			<main className="max-w-7xl mx-auto py-8 px-6 lg:px-8">
				{/* STATS */}
				<motion.div
					className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: "easeOut" }}
				>
					<StatCard name="Total Candidates" icon={Users} value={stats.users} color="#22c55e" trend="up" trendValue="+12.5%" />
					<StatCard name="Active Openings" icon={Briefcase} value={stats.jobs} color="#3b82f6" trend="up" trendValue="+3" />
					<StatCard name="Departments" icon={Building2} value={stats.depts} color="#f59e0b" />
					<StatCard name="Hire Rate" icon={TrendingUp} value="94%" color="#8b5cf6" trend="up" trendValue="+2.1%" />
				</motion.div>

				{/* CHARTS ROW */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
					{/* Hiring Pipeline Chart */}
					<motion.div
						className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.1, duration: 0.5 }}
					>
						<div className="flex items-center justify-between mb-6">
							<div>
								<h3 className="text-lg font-bold text-gray-900">Hiring Pipeline</h3>
								<p className="text-sm text-gray-500">Applications → Interviews → Hires</p>
							</div>
							<div className="flex items-center gap-4 text-xs font-medium">
								<span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-green-500"></span> Applications</span>
								<span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span> Interviews</span>
								<span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span> Hired</span>
							</div>
						</div>
						<ResponsiveContainer width="100%" height={280}>
							<AreaChart data={HIRING_PIPELINE}>
								<defs>
									<linearGradient id="colorApps" x1="0" y1="0" x2="0" y2="1">
										<stop offset="5%" stopColor="#22c55e" stopOpacity={0.15} />
										<stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
									</linearGradient>
									<linearGradient id="colorInterviews" x1="0" y1="0" x2="0" y2="1">
										<stop offset="5%" stopColor="#3b82f6" stopOpacity={0.15} />
										<stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
									</linearGradient>
								</defs>
								<CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
								<XAxis dataKey="month" tick={{ fontSize: 12, fill: '#9ca3af' }} axisLine={false} tickLine={false} />
								<YAxis tick={{ fontSize: 12, fill: '#9ca3af' }} axisLine={false} tickLine={false} />
								<Tooltip
									contentStyle={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)' }}
									itemStyle={{ fontSize: 13 }}
								/>
								<Area type="monotone" dataKey="applications" stroke="#22c55e" strokeWidth={2.5} fill="url(#colorApps)" />
								<Area type="monotone" dataKey="interviews" stroke="#3b82f6" strokeWidth={2.5} fill="url(#colorInterviews)" />
								<Area type="monotone" dataKey="hired" stroke="#8b5cf6" strokeWidth={2.5} fill="transparent" />
							</AreaChart>
						</ResponsiveContainer>
					</motion.div>

					{/* Department Distribution */}
					<motion.div
						className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2, duration: 0.5 }}
					>
						<h3 className="text-lg font-bold text-gray-900 mb-1">By Department</h3>
						<p className="text-sm text-gray-500 mb-4">Open positions distribution</p>
						<ResponsiveContainer width="100%" height={240}>
							<PieChart>
								<Pie
									data={DEPT_DISTRIBUTION}
									cx="50%"
									cy="50%"
									innerRadius={55}
									outerRadius={90}
									paddingAngle={3}
									dataKey="value"
									stroke="none"
								>
									{DEPT_DISTRIBUTION.map((entry, index) => (
										<Cell key={index} fill={entry.color} />
									))}
								</Pie>
								<Tooltip
									contentStyle={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)' }}
								/>
							</PieChart>
						</ResponsiveContainer>
						<div className="grid grid-cols-2 gap-2 mt-2">
							{DEPT_DISTRIBUTION.map((dept) => (
								<div key={dept.name} className="flex items-center gap-2 text-xs">
									<span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: dept.color }}></span>
									<span className="text-gray-600 truncate">{dept.name}</span>
									<span className="text-gray-400 ml-auto font-medium">{dept.value}%</span>
								</div>
							))}
						</div>
					</motion.div>
				</div>

				{/* BOTTOM ROW: Activity + Quick Stats */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
					{/* Recent Activity */}
					<motion.div
						className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3, duration: 0.5 }}
					>
						<h3 className="text-lg font-bold text-gray-900 mb-5">Recent Activity</h3>
						<div className="space-y-4">
							{RECENT_ACTIVITY.map((item) => (
								<div key={item.id} className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors">
									<div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${item.type === 'application' ? 'bg-green-50 text-green-600' :
											item.type === 'interview' ? 'bg-blue-50 text-blue-600' :
												item.type === 'hired' ? 'bg-purple-50 text-purple-600' :
													'bg-amber-50 text-amber-600'
										}`}>
										{item.type === 'application' && <Users size={18} />}
										{item.type === 'interview' && <Clock size={18} />}
										{item.type === 'hired' && <CheckCircle size={18} />}
										{item.type === 'opening' && <Briefcase size={18} />}
									</div>
									<div className="flex-1 min-w-0">
										<p className="text-sm font-semibold text-gray-900">{item.action}</p>
										<p className="text-xs text-gray-500">{item.role}</p>
									</div>
									<span className="text-xs text-gray-400 font-medium whitespace-nowrap">{item.time}</span>
								</div>
							))}
						</div>
					</motion.div>

					{/* Quick Stats */}
					<motion.div
						className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4, duration: 0.5 }}
					>
						<h3 className="text-lg font-bold text-gray-900 mb-5">Performance</h3>
						<div className="space-y-5">
							{[
								{ label: 'Avg. Time to Hire', value: '18 days', progress: 72, color: 'bg-green-500' },
								{ label: 'Interview-to-Offer', value: '42%', progress: 42, color: 'bg-blue-500' },
								{ label: 'Offer Acceptance', value: '89%', progress: 89, color: 'bg-purple-500' },
								{ label: 'Pipeline Fill Rate', value: '76%', progress: 76, color: 'bg-amber-500' },
							].map((metric) => (
								<div key={metric.label}>
									<div className="flex items-center justify-between mb-2">
										<span className="text-sm font-medium text-gray-700">{metric.label}</span>
										<span className="text-sm font-bold text-gray-900">{metric.value}</span>
									</div>
									<div className="w-full bg-gray-100 rounded-full h-2">
										<motion.div
											className={`h-2 rounded-full ${metric.color}`}
											initial={{ width: 0 }}
											animate={{ width: `${metric.progress}%` }}
											transition={{ delay: 0.6, duration: 1, ease: 'easeOut' }}
										/>
									</div>
								</div>
							))}
						</div>
					</motion.div>
				</div>
			</main>
		</div>
	);
};
export default OverviewPage;

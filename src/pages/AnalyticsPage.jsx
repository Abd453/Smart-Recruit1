import { motion } from "framer-motion";
import { TrendingUp, Users, Clock, Target, Briefcase, CheckCircle, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { AreaChart, Area, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";

const MONTHLY_HIRES = [
	{ month: "Sep", hires: 6, target: 8 },
	{ month: "Oct", hires: 9, target: 8 },
	{ month: "Nov", hires: 11, target: 10 },
	{ month: "Dec", hires: 8, target: 10 },
	{ month: "Jan", hires: 14, target: 12 },
	{ month: "Feb", hires: 17, target: 14 },
	{ month: "Mar", hires: 19, target: 15 },
];

const SOURCE_DATA = [
	{ source: "LinkedIn", applications: 120, hires: 18 },
	{ source: "Referral", applications: 85, hires: 22 },
	{ source: "Website", applications: 95, hires: 14 },
	{ source: "Job Board", applications: 60, hires: 8 },
	{ source: "Agency", applications: 40, hires: 12 },
];

const DEPT_PERFORMANCE = [
	{ dept: "Engineering", efficiency: 92, timeToHire: 85, quality: 88, retention: 95, satisfaction: 90 },
];

const TIME_TO_HIRE = [
	{ stage: "Screening", days: 3 },
	{ stage: "Phone", days: 2 },
	{ stage: "Technical", days: 5 },
	{ stage: "Culture", days: 2 },
	{ stage: "Offer", days: 3 },
	{ stage: "Onboard", days: 3 },
];

const RADAR_DATA = [
	{ metric: "Efficiency", value: 92 },
	{ metric: "Time-to-Hire", value: 78 },
	{ metric: "Quality", value: 88 },
	{ metric: "Retention", value: 95 },
	{ metric: "Satisfaction", value: 90 },
	{ metric: "Diversity", value: 72 },
];

const KEY_INSIGHTS = [
	{ title: "Employee referrals have the highest conversion rate", detail: "22 hires from 85 applications (25.9%)", type: "positive" },
	{ title: "Technical interview stage is the bottleneck", detail: "Average 5 days — consider parallel scheduling", type: "warning" },
	{ title: "Engineering team exceeds all targets", detail: "92% efficiency rating, above 85% benchmark", type: "positive" },
	{ title: "Diversity hiring needs attention", detail: "72% score — below 80% target for Q1", type: "negative" },
];

const AnalyticsPage = () => {
	return (
		<div className="flex-1 overflow-auto bg-gray-50/50">
			<Header title="Analytics" subtitle="Recruitment performance insights" />

			<main className="max-w-7xl mx-auto py-8 px-6 lg:px-8">
				{/* STATS */}
				<motion.div
					className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<StatCard name="Avg. Time to Hire" icon={Clock} value="18 days" color="#6366F1" trend="down" trendValue="-3 days" />
					<StatCard name="Total Hires (Q1)" icon={CheckCircle} value="84" color="#22c55e" trend="up" trendValue="+24%" />
					<StatCard name="Offer Acceptance" icon={Target} value="89%" color="#3b82f6" trend="up" trendValue="+4%" />
					<StatCard name="Cost per Hire" icon={TrendingUp} value="ETB 8.2K" color="#f59e0b" trend="down" trendValue="-12%" />
				</motion.div>

				{/* CHARTS ROW 1 */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
					{/* Hires vs Target */}
					<motion.div
						className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.1, duration: 0.5 }}
					>
						<h3 className="text-lg font-bold text-gray-900 mb-1">Hires vs Target</h3>
						<p className="text-sm text-gray-500 mb-4">Monthly hiring performance</p>
						<ResponsiveContainer width="100%" height={250}>
							<BarChart data={MONTHLY_HIRES}>
								<CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
								<XAxis dataKey="month" tick={{ fontSize: 11, fill: '#9ca3af' }} axisLine={false} tickLine={false} />
								<YAxis tick={{ fontSize: 11, fill: '#9ca3af' }} axisLine={false} tickLine={false} />
								<Tooltip contentStyle={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '12px' }} />
								<Bar dataKey="target" fill="#e5e7eb" radius={[6, 6, 0, 0]} />
								<Bar dataKey="hires" fill="#22c55e" radius={[6, 6, 0, 0]} />
							</BarChart>
						</ResponsiveContainer>
					</motion.div>

					{/* Source Performance */}
					<motion.div
						className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2, duration: 0.5 }}
					>
						<h3 className="text-lg font-bold text-gray-900 mb-1">Source Performance</h3>
						<p className="text-sm text-gray-500 mb-4">Application-to-hire conversion by channel</p>
						<ResponsiveContainer width="100%" height={250}>
							<BarChart data={SOURCE_DATA} layout="vertical">
								<CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
								<XAxis type="number" tick={{ fontSize: 11, fill: '#9ca3af' }} axisLine={false} tickLine={false} />
								<YAxis dataKey="source" type="category" tick={{ fontSize: 11, fill: '#9ca3af' }} axisLine={false} tickLine={false} width={70} />
								<Tooltip contentStyle={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '12px' }} />
								<Bar dataKey="applications" fill="#bfdbfe" radius={[0, 6, 6, 0]} />
								<Bar dataKey="hires" fill="#3b82f6" radius={[0, 6, 6, 0]} />
							</BarChart>
						</ResponsiveContainer>
					</motion.div>
				</div>

				{/* CHARTS ROW 2 */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
					{/* Time to Hire Breakdown */}
					<motion.div
						className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3, duration: 0.5 }}
					>
						<h3 className="text-lg font-bold text-gray-900 mb-1">Time to Hire Breakdown</h3>
						<p className="text-sm text-gray-500 mb-4">Average days per hiring stage</p>
						<ResponsiveContainer width="100%" height={250}>
							<BarChart data={TIME_TO_HIRE}>
								<CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
								<XAxis dataKey="stage" tick={{ fontSize: 11, fill: '#9ca3af' }} axisLine={false} tickLine={false} />
								<YAxis tick={{ fontSize: 11, fill: '#9ca3af' }} axisLine={false} tickLine={false} />
								<Tooltip contentStyle={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '12px' }} />
								<Bar dataKey="days" radius={[6, 6, 0, 0]}>
									{TIME_TO_HIRE.map((entry, index) => (
										<motion.rect key={index} fill={entry.days >= 5 ? '#f59e0b' : '#22c55e'} />
									))}
								</Bar>
							</BarChart>
						</ResponsiveContainer>
					</motion.div>

					{/* Recruitment Radar */}
					<motion.div
						className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4, duration: 0.5 }}
					>
						<h3 className="text-lg font-bold text-gray-900 mb-1">Performance Radar</h3>
						<p className="text-sm text-gray-500 mb-4">Overall recruitment health</p>
						<ResponsiveContainer width="100%" height={250}>
							<RadarChart data={RADAR_DATA}>
								<PolarGrid stroke="#e5e7eb" />
								<PolarAngleAxis dataKey="metric" tick={{ fontSize: 10, fill: '#6b7280' }} />
								<PolarRadiusAxis tick={false} axisLine={false} />
								<Radar dataKey="value" stroke="#22c55e" fill="#22c55e" fillOpacity={0.15} strokeWidth={2} />
							</RadarChart>
						</ResponsiveContainer>
					</motion.div>
				</div>

				{/* AI INSIGHTS */}
				<motion.div
					className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.5, duration: 0.5 }}
				>
					<div className="flex items-center gap-3 mb-6">
						<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white shadow-lg shadow-green-500/20">
							<TrendingUp size={20} />
						</div>
						<div>
							<h3 className="text-lg font-bold text-gray-900">Key Insights</h3>
							<p className="text-sm text-gray-500">AI-powered recruitment recommendations</p>
						</div>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						{KEY_INSIGHTS.map((insight, i) => (
							<div key={i} className={`p-4 rounded-xl border ${insight.type === 'positive' ? 'bg-green-50/50 border-green-100' :
									insight.type === 'warning' ? 'bg-amber-50/50 border-amber-100' :
										'bg-red-50/50 border-red-100'
								}`}>
								<div className="flex items-start gap-3">
									<div className={`mt-0.5 ${insight.type === 'positive' ? 'text-green-500' :
											insight.type === 'warning' ? 'text-amber-500' :
												'text-red-500'
										}`}>
										{insight.type === 'positive' ? <ArrowUpRight size={18} /> :
											insight.type === 'warning' ? <Clock size={18} /> :
												<ArrowDownRight size={18} />}
									</div>
									<div>
										<p className="text-sm font-semibold text-gray-900">{insight.title}</p>
										<p className="text-xs text-gray-500 mt-1">{insight.detail}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</motion.div>
			</main>
		</div>
	);
};
export default AnalyticsPage;

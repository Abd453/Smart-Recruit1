import { BarChart2, ShoppingBag, Users, Zap, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import api from "../utils/api";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
// import SalesOverviewChart from "../components/overview/SalesOverviewChart";
// import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";
// import SalesChannelChart from "../components/overview/SalesChannelChart";

const OverviewPage = () => {
	const [stats, setStats] = useState({
		users: 0,
		jobs: 0,
		applications: 0,
		depts: 0
	});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchStats = async () => {
			try {
				const [usersRes, jobsRes, deptsRes] = await Promise.all([
					api.get('/signupuser'),
					api.get('/jobs'),
					api.get('/departments')
				]);
				setStats({
					users: usersRes.data.length,
					jobs: jobsRes.data.length,
					applications: 0, // Mock for now or can count from users where status is pending
					depts: deptsRes.data.length
				});
			} catch (err) {
				console.error("Failed to fetch dashboard stats:", err);
			} finally {
				setLoading(false);
			}
		};
		fetchStats();
	}, []);

	return (
		<div className='flex-1 overflow-auto relative z-10 bg-gray-50/50 min-h-screen'>
			<Header title='Project Overview' />

			<main className='max-w-7xl mx-auto py-10 px-4 lg:px-8'>
				{/* STATS */}
				<motion.div
					className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12'
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
				>
					<StatCard name='Total Candidates' icon={Users} value={stats.users} color='#22c55e' />
					<StatCard name='Active Openings' icon={Briefcase} value={stats.jobs} color='#3b82f6' />
					<StatCard name='Departments' icon={Zap} value={stats.depts} color='#f59e0b' />
					<StatCard name='Success Rate' icon={BarChart2} value='94%' color='#8b5cf6' />
				</motion.div>

				{/* ANALYTICS SECTION */}
				<div className="glass rounded-[2.5rem] p-10 border border-white/60 shadow-2xl shadow-green-500/5 mb-12">
					<div className="flex items-center gap-4 mb-8">
						<div className="w-1.5 h-8 bg-green-500 rounded-full"></div>
						<h2 className="text-2xl font-bold text-gray-900 tracking-tight">Recruitment Velocity</h2>
					</div>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
						{/* Placeholder for charts if they exist and are polished */}
						<div className="bg-white/50 rounded-2xl h-64 flex items-center justify-center border border-gray-100 italic text-gray-400">
							Activity Chart Loading...
						</div>
						<div className="bg-white/50 rounded-2xl h-64 flex items-center justify-center border border-gray-100 italic text-gray-400">
							Source Distribution Loading...
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};
export default OverviewPage;

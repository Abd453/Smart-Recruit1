import { motion } from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";

import { AlertTriangle, DollarSign, Briefcase, TrendingUp } from "lucide-react";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";
import JobTrendChart from "../components/openings/JobTrendChart";
import OpeningsTable from "../components/openings/OpeningsTable";

const OpeningsPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10'>
			<Header title='Live Openings' />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				{/* STATS */}
				<motion.div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<StatCard name='Total Openings' icon={Briefcase} value={12} color='#6366F1' />
					<StatCard name='Active Jobs' icon={TrendingUp} value={8} color='#10B981' />
					<StatCard name='Urgent Fill' icon={AlertTriangle} value={3} color='#F59E0B' />
					<StatCard name='Total Apps' icon={DollarSign} value={"45"} color='#EF4444' />
				</motion.div>

				<OpeningsTable />

				{/* CHARTS */}
				<div className='grid grid-col-1 lg:grid-cols-2 gap-8'>
					<JobTrendChart />
					<CategoryDistributionChart />
				</div>
			</main>
		</div>
	);
};
export default OpeningsPage;

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";

const StatCard = ({ name, icon: Icon, value, color, trend, trendValue }) => {
	const isPositive = trend === 'up';

	return (
		<motion.div
			className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
			whileHover={{ y: -2 }}
		>
			<div className="px-6 py-5">
				<div className="flex items-center justify-between mb-4">
					<div
						className="w-11 h-11 rounded-xl flex items-center justify-center"
						style={{ backgroundColor: `${color}14` }}
					>
						<Icon size={22} style={{ color }} />
					</div>
					{trendValue && (
						<div className={`flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full ${isPositive ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-500'}`}>
							{isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
							{trendValue}
						</div>
					)}
				</div>
				<p className="text-2xl font-bold text-gray-900 tracking-tight">{value}</p>
				<p className="text-sm text-gray-500 font-medium mt-1">{name}</p>
			</div>
		</motion.div>
	);
};

export default StatCard;

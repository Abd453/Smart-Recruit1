import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import React from "react";

const appData = [
	{ month: "Jan", apps: 45 },
	{ month: "Feb", apps: 52 },
	{ month: "Mar", apps: 48 },
	{ month: "Apr", apps: 61 },
	{ month: "May", apps: 55 },
	{ month: "Jun", apps: 67 },
];

const JobTrendChart = () => {
	return (
		<motion.div
			className='glass backdrop-blur-md shadow-lg rounded-2xl p-6 border border-white/20'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.3 }}
		>
			<h2 className='text-xl font-bold text-gray-900 mb-4'>Application Trends</h2>
			<div style={{ width: "100%", height: 300 }}>
				<ResponsiveContainer>
					<LineChart data={appData}>
						<CartesianGrid strokeDasharray='3 3' stroke='#f0f0f0' />
						<XAxis dataKey='month' stroke='#94a3b8' />
						<YAxis stroke='#94a3b8' />
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(255, 255, 255, 0.9)",
								borderColor: "#e2e8f0",
								borderRadius: '12px',
								color: '#1e293b'
							}}
						/>
						<Legend />
						<Line type='monotone' dataKey='apps' name="Applications" stroke='#10B981' strokeWidth={3} dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }} />
					</LineChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};
export default JobTrendChart;

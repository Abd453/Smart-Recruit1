import { motion } from "framer-motion";
import Header from "../components/common/Header";
import { Construction } from "lucide-react";

const SalesPage = () => {
	return (
		<div className="flex-1 overflow-auto bg-gray-50/50">
			<Header title="Reports" subtitle="Generate and export recruitment reports" />
			<main className="max-w-7xl mx-auto py-8 px-6 lg:px-8">
				<motion.div
					className="bg-white rounded-2xl border border-gray-100 shadow-sm p-16 text-center"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
				>
					<Construction size={48} className="mx-auto mb-4 text-gray-300" />
					<h3 className="text-xl font-bold text-gray-900 mb-2">Coming Soon</h3>
					<p className="text-gray-500 max-w-md mx-auto">The Reports module is under development. You'll be able to generate PDF/CSV reports for hiring metrics, pipeline analytics, and team performance.</p>
				</motion.div>
			</main>
		</div>
	);
};
export default SalesPage;

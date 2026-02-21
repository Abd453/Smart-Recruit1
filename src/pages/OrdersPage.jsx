import { motion } from "framer-motion";
import Header from "../components/common/Header";
import { Construction } from "lucide-react";

const OrdersPage = () => {
	return (
		<div className="flex-1 overflow-auto bg-gray-50/50">
			<Header title="Workflows" subtitle="Manage recruitment workflows and approvals" />
			<main className="max-w-7xl mx-auto py-8 px-6 lg:px-8">
				<motion.div
					className="bg-white rounded-2xl border border-gray-100 shadow-sm p-16 text-center"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
				>
					<Construction size={48} className="mx-auto mb-4 text-gray-300" />
					<h3 className="text-xl font-bold text-gray-900 mb-2">Coming Soon</h3>
					<p className="text-gray-500 max-w-md mx-auto">The Workflows module is under development. Configure custom approval chains, automate status updates, and streamline your hiring process.</p>
				</motion.div>
			</main>
		</div>
	);
};
export default OrdersPage;

import { useState } from "react";
import { motion } from "framer-motion";
import { User, Bell, Shield, Link2, AlertTriangle, Camera, Save, Mail, Phone, MapPin } from "lucide-react";
import Header from "../components/common/Header";

const SettingsPage = () => {
	const [activeTab, setActiveTab] = useState('profile');

	const tabs = [
		{ id: 'profile', label: 'Profile', icon: User },
		{ id: 'notifications', label: 'Notifications', icon: Bell },
		{ id: 'security', label: 'Security', icon: Shield },
		{ id: 'danger', label: 'Danger Zone', icon: AlertTriangle },
	];

	return (
		<div className="flex-1 overflow-auto bg-gray-50/50">
			<Header title="Settings" subtitle="Manage your account preferences" />

			<main className="max-w-4xl mx-auto py-8 px-6 lg:px-8">
				{/* Tabs */}
				<div className="flex gap-1 bg-white rounded-xl p-1 border border-gray-100 shadow-sm mb-8">
					{tabs.map((tab) => (
						<button
							key={tab.id}
							onClick={() => setActiveTab(tab.id)}
							className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all flex-1 justify-center ${activeTab === tab.id
									? 'bg-green-500 text-white shadow-sm shadow-green-500/20'
									: 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
								}`}
						>
							<tab.icon size={16} />
							{tab.label}
						</button>
					))}
				</div>

				{/* Profile Tab */}
				{activeTab === 'profile' && (
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						className="space-y-6"
					>
						<div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
							<div className="flex items-center gap-6 mb-8">
								<div className="relative">
									<div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white text-2xl font-bold shadow-xl shadow-green-500/20">
										HR
									</div>
									<button className="absolute -bottom-1 -right-1 w-7 h-7 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-gray-500 hover:text-green-600 transition-colors shadow-sm">
										<Camera size={14} />
									</button>
								</div>
								<div>
									<h3 className="text-xl font-bold text-gray-900">HR Admin</h3>
									<p className="text-sm text-gray-500">Human Resources Manager</p>
								</div>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
								{[
									{ label: 'Full Name', value: 'HR Admin', icon: User },
									{ label: 'Email', value: 'hr@smartrecruit.com', icon: Mail },
									{ label: 'Phone', value: '+251-115-570544', icon: Phone },
									{ label: 'Location', value: 'Addis Ababa, Ethiopia', icon: MapPin },
								].map((field) => (
									<div key={field.label}>
										<label className="block text-sm font-medium text-gray-600 mb-1.5">{field.label}</label>
										<div className="relative">
											<input
												type="text"
												defaultValue={field.value}
												className="w-full bg-gray-50 border border-gray-200 text-gray-800 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/40 focus:border-green-400 transition-all"
											/>
											<field.icon size={16} className="absolute left-3.5 top-3.5 text-gray-400" />
										</div>
									</div>
								))}
							</div>

							<button className="mt-6 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors shadow-sm shadow-green-500/20">
								<Save size={16} />
								Save Changes
							</button>
						</div>
					</motion.div>
				)}

				{/* Notifications Tab */}
				{activeTab === 'notifications' && (
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8"
					>
						<h3 className="text-lg font-bold text-gray-900 mb-6">Notification Preferences</h3>
						<div className="space-y-5">
							{[
								{ title: 'New Applications', desc: 'Get notified when candidates apply' },
								{ title: 'Interview Reminders', desc: 'Upcoming interview notifications' },
								{ title: 'Offer Responses', desc: 'When candidates accept or decline offers' },
								{ title: 'Weekly Reports', desc: 'Weekly recruitment summary digest' },
								{ title: 'System Updates', desc: 'Platform updates and announcements' },
							].map((notif, i) => (
								<div key={i} className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0">
									<div>
										<p className="text-sm font-semibold text-gray-900">{notif.title}</p>
										<p className="text-xs text-gray-500">{notif.desc}</p>
									</div>
									<label className="relative inline-flex items-center cursor-pointer">
										<input type="checkbox" className="sr-only peer" defaultChecked={i < 3} />
										<div className="w-10 h-5 bg-gray-200 peer-focus:ring-2 peer-focus:ring-green-500/40 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-500"></div>
									</label>
								</div>
							))}
						</div>
					</motion.div>
				)}

				{/* Security Tab */}
				{activeTab === 'security' && (
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8"
					>
						<h3 className="text-lg font-bold text-gray-900 mb-6">Security Settings</h3>
						<div className="space-y-5">
							<div>
								<label className="block text-sm font-medium text-gray-600 mb-1.5">Current Password</label>
								<input type="password" placeholder="••••••••" className="w-full max-w-md bg-gray-50 border border-gray-200 text-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/40 transition-all" />
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-600 mb-1.5">New Password</label>
								<input type="password" placeholder="Min. 8 characters" className="w-full max-w-md bg-gray-50 border border-gray-200 text-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/40 transition-all" />
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-600 mb-1.5">Confirm New Password</label>
								<input type="password" placeholder="Repeat password" className="w-full max-w-md bg-gray-50 border border-gray-200 text-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/40 transition-all" />
							</div>
							<button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors shadow-sm shadow-green-500/20">
								<Shield size={16} />
								Update Password
							</button>
						</div>
					</motion.div>
				)}

				{/* Danger Zone Tab */}
				{activeTab === 'danger' && (
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						className="bg-white rounded-2xl border border-red-100 shadow-sm p-8"
					>
						<h3 className="text-lg font-bold text-red-600 mb-2">Danger Zone</h3>
						<p className="text-sm text-gray-500 mb-6">These actions are irreversible. Please proceed with caution.</p>
						<div className="space-y-4">
							<div className="flex items-center justify-between p-4 rounded-xl border border-red-100 bg-red-50/30">
								<div>
									<p className="text-sm font-semibold text-gray-900">Delete Account</p>
									<p className="text-xs text-gray-500">Permanently delete your account and all data</p>
								</div>
								<button className="bg-red-500 hover:bg-red-600 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors">
									Delete
								</button>
							</div>
							<div className="flex items-center justify-between p-4 rounded-xl border border-amber-100 bg-amber-50/30">
								<div>
									<p className="text-sm font-semibold text-gray-900">Reset All Data</p>
									<p className="text-xs text-gray-500">Clear all recruitment data and start fresh</p>
								</div>
								<button className="bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors">
									Reset
								</button>
							</div>
						</div>
					</motion.div>
				)}
			</main>
		</div>
	);
};
export default SettingsPage;

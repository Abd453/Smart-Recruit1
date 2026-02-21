import { Bell, Search } from 'lucide-react';

const Header = ({ title, subtitle }) => {
	return (
		<header className="bg-white/80 backdrop-blur-xl border-b border-gray-200/60 sticky top-0 z-10">
			<div className="max-w-7xl mx-auto py-5 px-6 lg:px-8 flex items-center justify-between">
				<div>
					<h1 className="text-2xl font-bold text-gray-900 tracking-tight">{title}</h1>
					{subtitle && <p className="text-sm text-gray-500 mt-0.5">{subtitle}</p>}
				</div>
				<div className="flex items-center gap-4">
					{/* Search */}
					<div className="relative hidden md:block">
						<input
							type="text"
							placeholder="Search…"
							className="w-56 bg-gray-50 border border-gray-200 text-gray-700 placeholder-gray-400 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/40 focus:border-green-400 transition-all"
						/>
						<Search className="absolute left-3 top-3 text-gray-400" size={16} />
					</div>

					{/* Notification bell */}
					<button className="relative p-2.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-all">
						<Bell size={18} />
						<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-green-500 rounded-full ring-2 ring-white"></span>
					</button>

					{/* Avatar */}
					<div className="w-9 h-9 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-green-500/20 cursor-pointer">
						HR
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;

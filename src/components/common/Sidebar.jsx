import {
  BarChart2,
  Briefcase,
  Building2,
  CalendarDays,
  CheckSquare,
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  LogOut,
  Settings,
  Users,
} from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const SIDEBAR_SECTIONS = [
  {
    title: 'Main',
    items: [
      { name: 'Dashboard', icon: LayoutDashboard, href: '/overview' },
      { name: 'Calendar', icon: CalendarDays, href: '/calendar' },
    ],
  },
  {
    title: 'Recruitment',
    items: [
      { name: 'Candidates', icon: Users, href: '/users' },
      { name: 'Openings', icon: Briefcase, href: '/openings' },
      { name: 'Departments', icon: Building2, href: '/department' },
      { name: 'Approved Jobs', icon: CheckSquare, href: '/approvedjob' },
    ],
  },
  {
    title: 'Insights',
    items: [
      { name: 'Analytics', icon: BarChart2, href: '/analytics' },
      { name: 'Settings', icon: Settings, href: '/settings' },
    ],
  },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  return (
    <motion.aside
      className="relative z-20 flex-shrink-0 h-full"
      initial={{ width: 260 }}
      animate={{ width: isOpen ? 260 : 78 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="h-full bg-white border-r border-gray-200/80 flex flex-col overflow-hidden shadow-sm">
        {/* Logo area */}
        <div className="px-5 pt-6 pb-4 flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-500/20">
            <span className="text-white font-black text-sm">SR</span>
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden whitespace-nowrap"
              >
                <h1 className="text-base font-bold text-gray-900 tracking-tight">
                  Smart Recruit
                </h1>
                <p className="text-[11px] text-gray-400 font-medium -mt-0.5">HR Dashboard</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Toggle button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute -right-3 top-8 w-6 h-6 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-50 transition-all shadow-sm z-30"
        >
          {isOpen ? <ChevronLeft size={14} /> : <ChevronRight size={14} />}
        </button>

        {/* Navigation */}
        <nav className="flex-1 px-3 mt-2 overflow-y-auto overflow-x-hidden">
          {SIDEBAR_SECTIONS.map((section) => (
            <div key={section.title} className="mb-6">
              <AnimatePresence>
                {isOpen && (
                  <motion.p
                    className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em] px-3 mb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    {section.title}
                  </motion.p>
                )}
              </AnimatePresence>

              <div className="space-y-1">
                {section.items.map((item) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <Link key={item.href} to={item.href}>
                      <div
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group relative
                          ${isActive
                            ? 'bg-green-50 text-green-700'
                            : 'text-gray-500 hover:bg-gray-50 hover:text-gray-800'
                          }`}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="activeIndicator"
                            className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-green-500 rounded-r-full"
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                          />
                        )}
                        <item.icon
                          size={20}
                          className={`flex-shrink-0 transition-colors ${isActive ? 'text-green-600' : 'text-gray-400 group-hover:text-gray-600'}`}
                        />
                        <AnimatePresence>
                          {isOpen && (
                            <motion.span
                              className="whitespace-nowrap overflow-hidden"
                              initial={{ opacity: 0, width: 0 }}
                              animate={{ opacity: 1, width: 'auto' }}
                              exit={{ opacity: 0, width: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              {item.name}
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        {/* Bottom logout */}
        <div className="px-3 pb-5 border-t border-gray-100 pt-4">
          <Link to="/login">
            <div className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-500 hover:bg-red-50 hover:text-red-600 transition-all duration-200 group`}>
              <LogOut size={20} className="flex-shrink-0 text-gray-400 group-hover:text-red-500 transition-colors" />
              <AnimatePresence>
                {isOpen && (
                  <motion.span
                    className="whitespace-nowrap overflow-hidden"
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 'auto' }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    Logout
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </Link>
        </div>
      </div>
    </motion.aside>
  );
};

export default Sidebar;

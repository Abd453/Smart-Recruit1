import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Users, Plus, Edit2, Trash2, X, Check, Search, Briefcase } from 'lucide-react';

import Header from '../components/common/Header';
import StatCard from '../components/common/StatCard';

const MOCK_DEPARTMENTS = [
  { id: 1, title: "Engineering", status: "Active", headcount: 45, openRoles: 5, lead: "Abebe Tadesse" },
  { id: 2, title: "Marketing", status: "Active", headcount: 18, openRoles: 2, lead: "Sara Mohammed" },
  { id: 3, title: "Sales", status: "Active", headcount: 22, openRoles: 3, lead: "Daniel Kebede" },
  { id: 4, title: "Human Resources", status: "Active", headcount: 8, openRoles: 1, lead: "Tigist Worku" },
  { id: 5, title: "Design", status: "Active", headcount: 12, openRoles: 2, lead: "Meron Hailu" },
  { id: 6, title: "Product", status: "Active", headcount: 10, openRoles: 1, lead: "Yonas Getachew" },
  { id: 7, title: "Analytics", status: "Inactive", headcount: 6, openRoles: 0, lead: "Hanna Alemu" },
  { id: 8, title: "Finance", status: "Active", headcount: 15, openRoles: 1, lead: "Biruk Solomon" },
];

const DepartmentPage = () => {
  const [departments, setDepartments] = useState(MOCK_DEPARTMENTS);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState('');
  const [newName, setNewName] = useState('');

  const filtered = departments.filter(d =>
    d.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const activeDepts = departments.filter(d => d.status === 'Active').length;
  const totalHeadcount = departments.reduce((sum, d) => sum + d.headcount, 0);
  const totalOpenRoles = departments.reduce((sum, d) => sum + d.openRoles, 0);

  const handleAdd = () => {
    if (!newName.trim()) return;
    const newDept = {
      id: Date.now(),
      title: newName,
      status: "Active",
      headcount: 0,
      openRoles: 0,
      lead: "—",
    };
    setDepartments([...departments, newDept]);
    setNewName('');
    setShowAddForm(false);
  };

  const handleDelete = (id) => {
    setDepartments(departments.filter(d => d.id !== id));
  };

  const handleEdit = (dept) => {
    setEditingId(dept.id);
    setEditName(dept.title);
  };

  const handleSaveEdit = (id) => {
    setDepartments(departments.map(d => d.id === id ? { ...d, title: editName } : d));
    setEditingId(null);
  };

  return (
    <div className="flex-1 overflow-auto bg-gray-50/50">
      <Header title="Departments" subtitle="Manage organizational structure" />

      <main className="max-w-7xl mx-auto py-8 px-6 lg:px-8">
        {/* STATS */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <StatCard name="Total Departments" icon={Building2} value={departments.length} color="#6366F1" />
          <StatCard name="Active" icon={Check} value={activeDepts} color="#22c55e" />
          <StatCard name="Total Employees" icon={Users} value={totalHeadcount} color="#3b82f6" />
          <StatCard name="Open Roles" icon={Briefcase} value={totalOpenRoles} color="#f59e0b" />
        </motion.div>

        {/* CARD */}
        <motion.div
          className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          {/* Header bar */}
          <div className="px-6 py-5 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h3 className="text-lg font-bold text-gray-900">All Departments</h3>
            <div className="flex items-center gap-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search…"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-52 bg-gray-50 border border-gray-200 text-gray-700 placeholder-gray-400 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/40 focus:border-green-400 transition-all"
                />
                <Search className="absolute left-3 top-3 text-gray-400" size={16} />
              </div>
              <button
                onClick={() => setShowAddForm(!showAddForm)}
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors shadow-sm shadow-green-500/20"
              >
                <Plus size={16} />
                Add
              </button>
            </div>
          </div>

          {/* Add form */}
          <AnimatePresence>
            {showAddForm && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden border-b border-gray-100"
              >
                <div className="px-6 py-4 bg-green-50/50 flex items-center gap-3">
                  <input
                    type="text"
                    placeholder="Department name…"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    className="flex-1 bg-white border border-gray-200 text-gray-700 placeholder-gray-400 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/40 transition-all"
                    onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
                  />
                  <button onClick={handleAdd} className="p-2.5 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors"><Check size={16} /></button>
                  <button onClick={() => setShowAddForm(false)} className="p-2.5 bg-gray-200 text-gray-600 rounded-xl hover:bg-gray-300 transition-colors"><X size={16} /></button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Department</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Lead</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Headcount</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Open Roles</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filtered.map((dept, i) => (
                  <motion.tr
                    key={dept.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.04 }}
                    className="hover:bg-gray-50/60 transition-colors"
                  >
                    <td className="px-6 py-4">
                      {editingId === dept.id ? (
                        <input
                          type="text"
                          value={editName}
                          onChange={(e) => setEditName(e.target.value)}
                          className="bg-white border border-green-300 text-gray-900 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/40"
                          onKeyDown={(e) => e.key === 'Enter' && handleSaveEdit(dept.id)}
                          autoFocus
                        />
                      ) : (
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center text-indigo-600 flex-shrink-0">
                            <Building2 size={16} />
                          </div>
                          <span className="text-sm font-semibold text-gray-900">{dept.title}</span>
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{dept.lead}</td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-semibold text-gray-900">{dept.headcount}</span>
                      <span className="text-xs text-gray-400 ml-1">people</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`text-sm font-bold ${dept.openRoles > 0 ? 'text-amber-600' : 'text-gray-400'}`}>{dept.openRoles}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-bold ring-1 ring-inset ${dept.status === 'Active' ? 'bg-green-50 text-green-700 ring-green-600/10' : 'bg-gray-100 text-gray-500 ring-gray-300/30'}`}>
                        {dept.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1">
                        {editingId === dept.id ? (
                          <>
                            <button onClick={() => handleSaveEdit(dept.id)} className="p-1.5 rounded-lg hover:bg-green-50 text-green-500 hover:text-green-700 transition-colors"><Check size={16} /></button>
                            <button onClick={() => setEditingId(null)} className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"><X size={16} /></button>
                          </>
                        ) : (
                          <>
                            <button onClick={() => handleEdit(dept)} className="p-1.5 rounded-lg hover:bg-blue-50 text-gray-400 hover:text-blue-600 transition-colors"><Edit2 size={16} /></button>
                            <button onClick={() => handleDelete(dept.id)} className="p-1.5 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-600 transition-colors"><Trash2 size={16} /></button>
                          </>
                        )}
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default DepartmentPage;
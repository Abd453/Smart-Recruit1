import React, { useState, useEffect } from 'react';
import api from '../../utils/api';
import Footer from '../../components/Footer';
import logo from "../../assets/logo.png";
import NavbarT from './navbarT';

export default function NewJobs() {
    const [data, setData] = useState({
        title: "",
        time: "",
        location: "",
        pertemp: "",
        money: "",
        description: "",
        status: "pending"
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [jobTitles, setJobTitles] = useState([]);

    useEffect(() => {
        api.get('/departments')
            .then(response => {
                if (Array.isArray(response.data)) {
                    const titles = response.data.map(department => department.title);
                    setJobTitles(titles);
                }
            })
            .catch(error => console.error("Error fetching job titles:", error));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        let validationErrors = {};

        if (!data.title) validationErrors.title = "Job title is required";
        if (!data.time) validationErrors.time = "Time range is required";

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setIsSubmitting(false);
            return;
        }

        try {
            await api.post('/jobs', { ...data, status: 'pending' });
            alert("Requisition sent to manager! 🚀");
            setData({
                title: "",
                time: "",
                location: "",
                pertemp: "",
                money: "",
                description: "",
                status: "pending"
            });
        } catch (err) {
            console.error(err);
            alert("Submission failed. Please check network.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50/50 flex flex-col">
            <NavbarT />
            <main className="flex-grow py-20 px-4 md:px-12">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <img
                            src={logo}
                            alt="logo"
                            className="w-40 inline-block drop-shadow-xl mb-6"
                        />
                        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
                            Request <span className="text-blue-600">Requisition</span>
                        </h1>
                        <p className="text-gray-500 mt-2 font-medium">Initiate a new recruitment process for your team.</p>
                    </div>

                    <div className="glass rounded-[2.5rem] p-8 md:p-12 border border-white/60 shadow-2xl shadow-blue-500/5">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 ml-1">Job Category</label>
                                    <select
                                        name="title"
                                        value={data.title}
                                        onChange={handleChange}
                                        className="w-full bg-white/50 border border-gray-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none cursor-pointer"
                                    >
                                        <option value="">Select Department/Role</option>
                                        {jobTitles.map((title, index) => (
                                            <option key={index} value={title}>{title}</option>
                                        ))}
                                    </select>
                                    {errors.title && <p className="text-red-500 text-xs ml-2">{errors.title}</p>}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 ml-1">Shift / Time</label>
                                    <input
                                        name="time"
                                        type="text"
                                        value={data.time}
                                        onChange={handleChange}
                                        className="w-full bg-white/50 border border-gray-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                        placeholder="e.g. 9:00 AM - 5:00 PM"
                                    />
                                    {errors.time && <p className="text-red-500 text-xs ml-2">{errors.time}</p>}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 ml-1">Location Strategy</label>
                                    <input
                                        name="location"
                                        type="text"
                                        value={data.location}
                                        onChange={handleChange}
                                        className="w-full bg-white/50 border border-gray-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                        placeholder="e.g. Remote / Addis Ababa"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 ml-1">Employment Strategy</label>
                                    <input
                                        name="pertemp"
                                        type="text"
                                        value={data.pertemp}
                                        onChange={handleChange}
                                        className="w-full bg-white/50 border border-gray-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                        placeholder="e.g. Full-time / Contract"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 ml-1">Budget Allocation</label>
                                    <input
                                        name="money"
                                        type="text"
                                        value={data.money}
                                        onChange={handleChange}
                                        className="w-full bg-white/50 border border-gray-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                        placeholder="e.g. Competitive / Negotiable"
                                    />
                                </div>

                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-sm font-bold text-gray-700 ml-1">Role Specifications</label>
                                    <textarea
                                        name="description"
                                        value={data.description}
                                        rows="4"
                                        onChange={handleChange}
                                        className="w-full bg-white/50 border border-gray-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
                                        placeholder="Enter key requirements and responsibilities..."
                                    />
                                </div>
                            </div>

                            <div className="flex justify-center pt-6">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full md:w-64 py-4 px-8 text-white font-bold tracking-wide rounded-2xl bg-gray-900 hover:bg-blue-600 shadow-xl shadow-black/10 transform transition-all duration-200 hover:-translate-y-1 active:scale-95 disabled:opacity-50"
                                >
                                    {isSubmitting ? "Processing..." : "Submit Requisition"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

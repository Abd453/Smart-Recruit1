import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
    const location = useLocation();
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20,
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden select-none">
            {/* Animated background orbs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    animate={{ x: mousePos.x * 2, y: mousePos.y * 2 }}
                    transition={{ type: 'spring', stiffness: 50, damping: 30 }}
                    className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-green-500/8 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{ x: -mousePos.x * 1.5, y: -mousePos.y * 1.5 }}
                    transition={{ type: 'spring', stiffness: 50, damping: 30 }}
                    className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-emerald-600/10 rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{ x: mousePos.x, y: -mousePos.y }}
                    transition={{ type: 'spring', stiffness: 40, damping: 25 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-400/5 rounded-full blur-[150px]"
                />
            </div>

            {/* Grid pattern overlay */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            />

            <div className="relative z-10 text-center max-w-2xl mx-auto">
                {/* Large 404 number */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="relative mb-8"
                >
                    <h1 className="text-[12rem] md:text-[16rem] font-black leading-none tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white/20 to-transparent">
                        404
                    </h1>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="absolute inset-0 flex items-center justify-center text-[12rem] md:text-[16rem] font-black leading-none tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-green-400 via-emerald-400 to-green-600"
                    >
                        404
                    </motion.h2>
                </motion.div>

                {/* Message */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="space-y-4 mb-12"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                        Oops! Page not found
                    </h3>
                    <p className="text-gray-400 text-base md:text-lg max-w-md mx-auto leading-relaxed">
                        The page at <code className="text-green-400/80 bg-white/5 px-2 py-0.5 rounded-md text-sm font-mono">{location.pathname}</code> doesn't exist or has been moved.
                    </p>
                </motion.div>

                {/* Action buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link
                        to="/"
                        className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold rounded-2xl px-8 py-4 text-sm transition-all duration-300 shadow-xl shadow-green-500/20 hover:shadow-green-500/40 hover:scale-[1.02]"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Home
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-gray-300 hover:text-white font-semibold rounded-2xl px-8 py-4 text-sm transition-all duration-300 hover:scale-[1.02]"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z" />
                        </svg>
                        Go Back
                    </button>
                </motion.div>

                {/* Decorative bottom element */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="mt-20 flex items-center justify-center gap-2 text-gray-600 text-xs font-medium uppercase tracking-widest"
                >
                    <span className="w-8 h-px bg-gray-700"></span>
                    Smart Recruit
                    <span className="w-8 h-px bg-gray-700"></span>
                </motion.div>
            </div>
        </section>
    );
};

export default NotFound;

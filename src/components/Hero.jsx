import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  const handleExplore = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient glow overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(168,85,247,0.12),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(99,102,241,0.10),transparent_40%)]" />

      <div className="relative z-10 container mx-auto px-6 md:px-10 pt-28 md:pt-40 pb-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
        >
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">Adharsh S</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-4 max-w-2xl text-slate-300 text-lg md:text-xl"
        >
          Creative Developer | AI Enthusiast | Problem Solver
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mt-10"
        >
          <button
            onClick={handleExplore}
            className="group relative inline-flex items-center gap-3 rounded-full border border-slate-700/60 bg-slate-900/60 px-6 py-3 text-slate-200 backdrop-blur transition hover:-translate-y-0.5 hover:border-blue-500/60 hover:bg-slate-900/80 hover:text-white"
          >
            <span className="absolute inset-0 -z-0 rounded-full bg-gradient-to-r from-blue-600/30 to-purple-600/30 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
            <span className="relative z-10 font-semibold tracking-wide">Explore</span>
            <svg className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

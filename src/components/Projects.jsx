import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: 'Mojito App',
    desc: 'Animated drink recipe app with responsive UI and delightful motion.',
    tags: ['GSAP-like', 'Responsive', 'UI'],
    link: '#',
  },
  {
    title: 'Stone Paper Scissor Game',
    desc: 'Interactive gameplay with score tracking built with React.',
    tags: ['React', 'Game'],
    link: '#',
  },
  {
    title: 'Tic Tac Toe Game',
    desc: '2-player logic with clean UI and subtle animations.',
    tags: ['React', 'JavaScript'],
    link: '#',
  },
];

function useTilt() {
  const [style, setStyle] = useState({});
  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    const rotateY = ((x - midX) / midX) * 8;
    const rotateX = -((y - midY) / midY) * 8;
    setStyle({ transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)` });
  };
  const onLeave = () => setStyle({ transform: 'rotateX(0deg) rotateY(0deg)' });
  return { style, onMove, onLeave };
}

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <section id="projects" className="relative bg-slate-950 text-white py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_0%,rgba(56,189,248,0.15),transparent_40%),radial-gradient(600px_circle_at_80%_20%,rgba(168,85,247,0.12),transparent_35%)]" />
      <div className="relative container mx-auto px-6 md:px-10">
        <h3 className="text-3xl font-bold">Projects</h3>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <ProjectCard key={p.title} p={p} idx={idx} onOpen={() => setActive(p)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 180, damping: 18 }}
              className="relative w-[90vw] max-w-2xl rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h4 className="text-xl font-semibold">{active.title}</h4>
              <p className="mt-2 text-slate-300">{active.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {active.tags.map((t) => (
                  <span key={t} className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">{t}</span>
                ))}
              </div>
              <div className="mt-6 flex justify-end gap-3">
                <a href={active.link} target="_blank" rel="noreferrer" className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 font-medium">View Demo</a>
                <button onClick={() => setActive(null)} className="rounded-lg border border-slate-700 px-4 py-2 text-slate-300">Close</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function ProjectCard({ p, idx, onOpen }) {
  const { style, onMove, onLeave } = useTilt();
  return (
    <motion.button
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: idx * 0.06 }}
      onClick={onOpen}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={style}
      className="group relative h-56 w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-left shadow-lg transition-transform [transform-style:preserve-3d]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 transition-opacity group-hover:opacity-100" />
      <h4 className="relative z-10 text-xl font-semibold">{p.title}</h4>
      <p className="relative z-10 mt-2 line-clamp-3 text-slate-300">{p.desc}</p>
      <div className="relative z-10 mt-4 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span key={t} className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">{t}</span>
        ))}
      </div>
      <span className="absolute bottom-4 right-4 text-sm text-blue-300">Learn more →</span>
    </motion.button>
  );
}

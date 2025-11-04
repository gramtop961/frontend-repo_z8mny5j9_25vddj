import React, { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Sections from './components/Sections.jsx';
import Projects from './components/Projects.jsx';

export default function App() {
  useEffect(() => {
    document.title = 'Adharsh S | Creative Developer Portfolio';
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white font-inter">
      <Navbar />
      <Hero />
      <Sections />
      <Projects />
      <footer className="border-t border-slate-800/60 bg-slate-950/80 py-8 text-center text-slate-400">
        <p>© {new Date().getFullYear()} Adharsh S — Crafted with passion for web, AI, and great UX.</p>
      </footer>
    </div>
  );
}

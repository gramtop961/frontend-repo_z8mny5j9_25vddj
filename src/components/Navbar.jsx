import React, { useEffect, useState } from 'react';
import { Rocket, User, Layers, FolderOpen } from 'lucide-react';

const sections = [
  { id: 'home', label: 'Home', icon: Rocket },
  { id: 'about', label: 'About', icon: User },
  { id: 'skills', label: 'Skills', icon: Layers },
  { id: 'projects', label: 'Projects', icon: FolderOpen },
];

export default function Navbar() {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const observers = sections.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActive(id);
          });
        },
        { threshold: 0.6 }
      );
      observer.observe(el);
      return observer;
    });

    return () => observers.forEach((o) => o && o.disconnect());
  }, []);

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 backdrop-blur-xl bg-slate-900/60 border border-slate-700/60 rounded-full px-3 py-2 shadow-lg shadow-blue-900/30">
      <ul className="flex items-center gap-1">
        {sections.map(({ id, label, icon: Icon }) => (
          <li key={id}>
            <button
              onClick={() => handleClick(id)}
              className={`group flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                active === id
                  ? 'bg-gradient-to-r from-blue-600/80 to-purple-600/80 text-white'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
              aria-label={`Go to ${label}`}
            >
              <Icon size={18} className="opacity-90" />
              <span className="hidden sm:block text-sm font-medium">{label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

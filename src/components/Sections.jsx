import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Sections() {
  return (
    <div className="relative z-10 bg-slate-950 text-white">
      {/* About */}
      <section id="about" className="container mx-auto px-6 md:px-10 py-20 md:py-28">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          <motion.div variants={item} className="lg:col-span-2">
            <h2 className="text-3xl md:text-4xl font-bold">About</h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Final-year Computer Science Engineering student passionate about building immersive digital experiences and intelligent systems. I love crafting performant web apps, exploring AI-driven solutions, and solving real-world problems with clean, scalable code. Constantly learning, iterating, and shipping.
            </p>
            <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 shadow-lg shadow-blue-900/20">
              <p className="text-slate-300">
                I specialize in modern JavaScript, React, and backend technologies, with a keen interest in motion design and 3D on the web. My approach blends creativity with engineering discipline — designing systems that are delightful to use and robust under the hood.
              </p>
            </div>
          </motion.div>

          <motion.div variants={item} className="flex items-center justify-center">
            <div className="relative h-56 w-56 rounded-3xl bg-gradient-to-br from-blue-600/30 via-cyan-500/20 to-purple-600/30 p-1">
              <div className="h-full w-full rounded-2xl bg-slate-900/70 backdrop-blur flex items-center justify-center overflow-hidden">
                <div className="h-40 w-40 rounded-full bg-gradient-to-tr from-blue-400 to-purple-500 animate-pulse shadow-[0_0_40px_8px_rgba(59,130,246,0.35)]" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Education */}
      <section id="education" className="container mx-auto px-6 md:px-10 py-8 md:py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/80 to-slate-900/40 p-8"
        >
          <h3 className="text-2xl font-semibold">Education</h3>
          <div className="mt-6 space-y-6">
            <div className="relative pl-6">
              <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-blue-500 ring-4 ring-blue-500/20" />
              <p className="text-slate-200 font-medium">JCT College of Engineering and Technology</p>
              <p className="text-slate-400">B.E. Computer Science and Engineering • 2022 – 2026</p>
            </div>
            <div className="relative pl-6">
              <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-purple-500 ring-4 ring-purple-500/20" />
              <p className="text-slate-200 font-medium">Puliyaparamb Higher Secondary School</p>
              <p className="text-slate-400">Higher Secondary Education</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Skills */}
      <section id="skills" className="container mx-auto px-6 md:px-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold">Skills</h3>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Programming', items: ['Python', 'Java', 'JavaScript (ES6+)', 'SQL'] },
              { title: 'Frontend', items: ['React.js', 'CSS3', 'Tailwind CSS', 'Framer Motion'] },
              { title: 'Backend', items: ['Node.js', 'Django', 'MySQL'] },
              { title: 'Design', items: ['Figma'] },
              { title: 'Soft Skills', items: ['Teamwork', 'Communication', 'Problem-solving', 'Adaptability'] },
            ].map((group, idx) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="relative rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:border-blue-600/50 hover:shadow-[0_0_30px_rgba(37,99,235,0.2)] transition"
              >
                <div className="absolute -top-3 -left-3 h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500/30 to-purple-500/30 blur-xl" />
                <h4 className="text-xl font-semibold text-slate-100">{group.title}</h4>
                <ul className="mt-3 space-y-2 text-slate-300">
                  {group.items.map((it) => (
                    <li key={it} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
                      {it}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact */}
      <section id="contact" className="container mx-auto px-6 md:px-10 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8"
        >
          <h3 className="text-3xl font-bold">Get in touch</h3>
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <form className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-slate-400">Your Name</label>
                <input className="mt-1 w-full rounded-xl bg-slate-800/70 px-4 py-3 text-slate-100 outline-none ring-1 ring-slate-700 focus:ring-2 focus:ring-blue-500" placeholder="John Doe" />
              </div>
              <div>
                <label className="text-sm text-slate-400">Email</label>
                <input type="email" className="mt-1 w-full rounded-xl bg-slate-800/70 px-4 py-3 text-slate-100 outline-none ring-1 ring-slate-700 focus:ring-2 focus:ring-blue-500" placeholder="you@example.com" />
              </div>
              <div className="md:col-span-2">
                <label className="text-sm text-slate-400">Message</label>
                <textarea rows={4} className="mt-1 w-full rounded-xl bg-slate-800/70 px-4 py-3 text-slate-100 outline-none ring-1 ring-slate-700 focus:ring-2 focus:ring-purple-500" placeholder="Say hello..." />
              </div>
              <div className="md:col-span-2">
                <button type="button" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-3 font-semibold shadow-lg shadow-blue-900/30 transition hover:scale-[1.02]">
                  Send Message
                </button>
              </div>
            </form>
            <div className="space-y-4">
              <a href="tel:+917736281216" className="group flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3 hover:border-blue-500/50 transition">
                <Phone className="text-blue-400" />
                <span className="text-slate-300">+91 77362 81216</span>
              </a>
              <a href="mailto:sadharshadx1213@gmail.com" className="group flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3 hover:border-purple-500/50 transition">
                <Mail className="text-purple-400" />
                <span className="text-slate-300">sadharshadx1213@gmail.com</span>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3 hover:border-cyan-500/50 transition">
                <Linkedin className="text-cyan-400" />
                <span className="text-slate-300">LinkedIn</span>
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

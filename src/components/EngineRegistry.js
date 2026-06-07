"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FolderGit2, ExternalLink, ShieldCheck, Code, Globe } from "lucide-react";

export default function EngineRegistry() {
  const projects = [
    {
      id: "worklaza",
      title: "WorkLaza",
      tagline: "Worker-Customer Service Platform",
      description: "A web platform designed to connect skilled local workers (painters, electricians, plumbers) with customers. Features a secure booking flow, role-based authentication, real-time internal chat tracking via WebSockets, and automated platform fee calculation structures.",
      tech: ["React.js", "Django", "Django REST Framework", "WebSockets", "PostgreSQL"],
      repo: "https://github.com/hasanpp/WorkLaza",
      screenshot: "/assets/project-worklaza.png",
      deepTech: [
        { name: "React.js Client Interface", details: "State management system I designed to handle concurrent bookings and filter provider cards dynamically." },
        { name: "Django Backend & REST APIs", details: "The service registry logic I wrote, separating customer queries from worker dashboards." },
        { name: "WebSockets Chat", details: "Real-time communication sockets I implemented to connect clients and local providers directly." },
        { name: "PostgreSQL Database", details: "Data schemas and indexing structures I built to keep transactions secure and reliable." }
      ]
    },
    {
      id: "phonopedia",
      title: "Phonopedia",
      tagline: "E-Commerce Phone Application",
      description: "An e-commerce web application focused on device sales. Built with a stateful product cart lifecycle, standard user inventory updates, and functional payment handling structures.",
      tech: ["Python", "Django", "HTML", "CSS", "PostgreSQL"],
      repo: "https://github.com/hasanpp/Phonopedia",
      screenshot: "/assets/project-phonopedia.jpg",
      deepTech: [
        { name: "Django & Core Python", details: "I built the core architecture and routing paths to handle account registration and order pipelines." },
        { name: "Stateful Shopping Cart", details: "Logic I created to cache selected phone items in the session before processing orders." },
        { name: "HTML5 & CSS3 Interface", details: "Structured frontend templates I customized for item grids, checkout sections, and profile summaries." },
        { name: "PostgreSQL Queries", details: "Data tables I sharded and optimized to track stock listings and account purchase histories." }
      ]
    }
  ];

  const [activeTabs, setActiveTabs] = useState({
    worklaza: 0,
    phonopedia: 0
  });

  const handleTabChange = (projId, index) => {
    setActiveTabs(prev => ({
      ...prev,
      [projId]: index
    }));
  };

  const tabs = [
    { label: "[ 01. Overview ]" },
    { label: "[ 02. Tech Stack ]" }
  ];

  return (
    <section id="engine-registry" className="py-24 px-6 md:px-12 lg:px-24 bg-[#080810]/40 relative overflow-hidden">
      <div className="absolute top-[50%] right-[-15%] w-[450px] h-[450px] gemini-aura -z-10 opacity-30 pointer-events-none" />
      <div className="absolute inset-0 cosmic-dots opacity-10 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col mb-16 text-left">
          <div className="flex items-center space-x-2 mb-2">
            <FolderGit2 className="w-4 h-4 text-violet-400" />
            <span className="font-mono text-xs uppercase tracking-widest text-violet-300">
              My Work Showcase
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-wide font-sans">
            Projects Registry
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl font-sans mt-2">
            These are the key web platforms I have built, showcasing my full-stack workflow, booking systems, and database structures.
          </p>
        </div>

        {/* Project Layout Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, idx) => {
            const activeTab = activeTabs[project.id];
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative flex flex-col rounded-2xl border border-white/5 bg-[#0c0c1a]/60 overflow-hidden shadow-2xl backdrop-blur-md text-left"
              >
                {/* Visual Accent top line */}
                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500 opacity-60" />
                
                {/* Top header details */}
                <div className="bg-slate-900/40 px-5 py-3.5 border-b border-white/5 flex items-center justify-between font-mono text-[10px] text-slate-500">
                  <div className="flex items-center space-x-2">
                    <Globe className="w-3.5 h-3.5 text-violet-400" />
                    <span className="text-slate-350 font-semibold uppercase tracking-wider">
                      project://{project.id}
                    </span>
                  </div>
                  <span className="flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                    <span className="text-violet-300 font-medium">Completed</span>
                  </span>
                </div>

                {/* Tagline Banner */}
                <div className="p-6 border-b border-white/5 bg-slate-950/20">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide font-sans">
                    {project.title}
                  </h3>
                  <p className="text-xs text-violet-400 font-sans font-medium mt-1">
                    {project.tagline}
                  </p>
                </div>

                {/* Tab Navigation */}
                <div className="flex border-b border-white/5 bg-slate-900/10 font-mono text-[10px] sm:text-xs">
                  {tabs.map((tab, tIdx) => (
                    <button
                      key={tIdx}
                      onClick={() => handleTabChange(project.id, tIdx)}
                      className={`flex-1 py-3.5 text-center transition-all duration-300 border-r border-white/5 last:border-0 uppercase tracking-wider cursor-pointer ${
                        activeTab === tIdx
                          ? "bg-[#080810] text-violet-400 border-b-2 border-b-violet-400 font-bold"
                          : "text-slate-500 hover:text-slate-300 hover:bg-slate-900/30"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Tab Content Panel */}
                <div className="p-6 min-h-[200px] bg-slate-950/20 flex-grow font-sans text-xs sm:text-sm leading-relaxed text-slate-300">
                  <AnimatePresence mode="wait">
                    {activeTab === 0 && (
                      <motion.div
                        key="overview"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.2 }}
                        className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
                      >
                        <div className="md:col-span-7 space-y-4 text-left">
                          <p className="text-slate-400 font-sans leading-relaxed text-xs sm:text-sm">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-1.5 pt-2">
                            {project.tech.map(tech => (
                              <span key={tech} className="border border-white/5 bg-slate-900/60 text-violet-300 text-[9px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Interactive Photo screenshot preview */}
                        <div className="md:col-span-5 relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-white/5 bg-slate-900 shadow-md">
                          <Image
                            src={project.screenshot}
                            alt={`${project.title} Screenshot`}
                            fill
                            sizes="(max-w-500px) 100vw, 200px"
                            className="object-cover scale-[1.01] hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      </motion.div>
                    )}

                    {activeTab === 1 && (
                      <motion.div
                        key="tech"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-3 text-left"
                      >
                        {project.deepTech.map((tech, idx) => (
                          <div key={idx} className="border border-white/5 bg-[#080810]/40 p-3 rounded-xl">
                            <span className="text-violet-400 text-xs font-semibold block">{tech.name}</span>
                            <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 leading-relaxed font-sans">
                              {tech.details}
                            </p>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Source Repositories CTA */}
                <div className="px-6 pb-6 pt-2 bg-slate-950/20 text-left">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-white hover:bg-slate-100 text-slate-950 font-sans text-xs font-bold tracking-wide px-5 py-2.5 rounded-full transition-all duration-300 cursor-pointer shadow-md"
                  >
                    <FolderGit2 className="w-3.5 h-3.5 text-slate-950" />
                    <span>View Repository</span>
                    <ExternalLink className="w-3 h-3 text-slate-950" />
                  </a>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

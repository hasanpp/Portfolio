"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Server, LayoutGrid, Database, GitBranch, ArrowRightLeft } from "lucide-react";

export default function TechGrid() {
  const [hoveredTech, setHoveredTech] = useState(null);

  // Relations map representing database/client connections
  const relations = {
    "Python": ["Django", "Django REST Framework", "PostgreSQL"],
    "Django": ["Python", "Django REST Framework", "PostgreSQL", "WebSockets", "React.js"],
    "Django REST Framework": ["Django", "React.js", "REST APIs"],
    "WebSockets": ["Django", "React.js"],
    "React.js": ["JavaScript (ES6+)", "Tailwind CSS", "Django REST Framework", "WebSockets"],
    "JavaScript (ES6+)": ["React.js", "Tailwind CSS"],
    "Tailwind CSS": ["React.js"],
    "PostgreSQL": ["Python", "Django", "REST APIs"],
    "Git & GitHub": ["Python", "Django", "React.js"],
    "REST APIs": ["Django REST Framework", "React.js", "PostgreSQL"]
  };

  const categories = [
    {
      name: "Backend Stack",
      icon: <Server className="w-4 h-4 text-violet-400" />,
      themeColor: "from-indigo-950/10 to-slate-950/40",
      borderColor: "border-indigo-500/10",
      glowColor: "group-hover:border-indigo-500/30",
      skills: [
        { name: "Python", desc: "My primary language for backend logic and automation scripting" },
        { name: "Django", desc: "The web framework I use to build robust, structured server applications" },
        { name: "Django REST Framework", desc: "My standard toolkit for creating clean, secure API endpoints" },
        { name: "WebSockets", desc: "Used in my projects to handle real-time communication streams" }
      ]
    },
    {
      name: "Frontend Stack",
      icon: <LayoutGrid className="w-4 h-4 text-violet-400" />,
      themeColor: "from-violet-950/10 to-slate-950/40",
      borderColor: "border-violet-500/10",
      glowColor: "group-hover:border-violet-500/30",
      skills: [
        { name: "React.js", desc: "My framework of choice for building structured, interactive layouts" },
        { name: "JavaScript (ES6+)", desc: "Writing clean, standard client scripts and state logic modules" },
        { name: "Tailwind CSS", desc: "For styling modern, responsive, and maintainable user layouts" }
      ]
    },
    {
      name: "Database & Tools",
      icon: <Database className="w-4 h-4 text-violet-400" />,
      themeColor: "from-slate-900/10 to-slate-950/40",
      borderColor: "border-white/5",
      glowColor: "group-hover:border-violet-500/20",
      skills: [
        { name: "PostgreSQL", desc: "The relational database I rely on for transactional data integrity" },
        { name: "Git & GitHub", desc: "My standard workflow tools for version control and file deployments" },
        { name: "REST APIs", desc: "Designing structured, uniform endpoints to connect my interfaces" }
      ]
    }
  ];

  const handleMouseEnter = (name) => {
    setHoveredTech(name);
  };

  const handleMouseLeave = () => {
    setHoveredTech(null);
  };

  const isHighlighted = (name) => {
    if (!hoveredTech) return false;
    if (hoveredTech === name) return true;
    return relations[hoveredTech]?.includes(name) || false;
  };

  return (
    <section id="tech-grid" className="py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden bg-[#080810]">
      {/* Background decoration */}
      <div className="absolute top-[30%] left-[-10%] w-[400px] h-[400px] gemini-aura -z-10 opacity-30 pointer-events-none" />
      <div className="absolute inset-0 cosmic-dots opacity-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col mb-12 text-left">
          <div className="flex items-center space-x-2 mb-2">
            <GitBranch className="w-4 h-4 text-violet-400 animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-violet-300">
              Core Toolkit
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-wide font-sans">
            My Technical Stack
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl font-sans mt-2">
            Explore the core technologies I use to build full-stack web applications.
          </p>
        </div>

        {/* Dashboard Grid Bays */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
          {categories.map((category, idx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group flex flex-col rounded-2xl border ${category.borderColor} bg-[#0c0c1a]/60 p-6 relative backdrop-blur-md overflow-hidden ${category.glowColor} transition-all duration-300`}
            >
              <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4 relative z-10">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-slate-900 border border-white/5">
                    {category.icon}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white tracking-wide font-sans">
                    {category.name}
                  </h3>
                </div>
                <span className="font-mono text-[10px] text-slate-500">
                  SECTION_0{idx + 1}
                </span>
              </div>

              {/* Skill Cards */}
              <div className="space-y-4 flex-grow relative z-10">
                {category.skills.map((skill) => {
                  const highlighted = isHighlighted(skill.name);
                  const isSelf = hoveredTech === skill.name;
                  
                  return (
                    <div
                      key={skill.name}
                      onMouseEnter={() => handleMouseEnter(skill.name)}
                      onMouseLeave={handleMouseLeave}
                      className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all duration-350 relative ${
                        isSelf
                          ? "bg-violet-950/20 border-violet-500/40 shadow-[0_0_15px_rgba(139,92,246,0.15)]"
                          : highlighted
                          ? "bg-indigo-950/15 border-indigo-500/30 shadow-[0_0_10px_rgba(79,70,229,0.1)] scale-[1.01]"
                          : "bg-slate-950/40 border-white/5 hover:bg-slate-900/30 hover:border-slate-800"
                      }`}
                    >
                      {/* Active Connection side bar */}
                      {highlighted && (
                        <div className="absolute left-0 top-0 bottom-0 w-[2.5px] bg-gradient-to-b from-indigo-400 to-violet-500" />
                      )}

                      <div className="flex items-center justify-between">
                        <span className={`font-sans text-xs sm:text-sm font-semibold tracking-wide transition-colors ${
                          isSelf ? "text-violet-400" : highlighted ? "text-indigo-400" : "text-slate-200"
                        }`}>
                          {skill.name}
                        </span>
                        
                        {(isSelf || (hoveredTech && highlighted)) && (
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="flex items-center space-x-1"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                            <span className="font-mono text-[9px] text-violet-300 uppercase tracking-widest">
                              {isSelf ? "SELECTED" : "CONNECTED"}
                            </span>
                          </motion.div>
                        )}
                      </div>
                      <p className="text-[10px] sm:text-xs text-slate-400 mt-1 font-sans leading-relaxed">
                        {skill.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

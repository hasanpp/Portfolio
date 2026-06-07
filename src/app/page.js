"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles, Activity, Cpu, Laptop } from "lucide-react";

import ThreeBackground from "@/components/ThreeBackground";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import TechGrid from "@/components/TechGrid";
import EngineRegistry from "@/components/EngineRegistry";
import ContactHub from "@/components/ContactHub";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [activeSection, setActiveSection] = useState("profile");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", { hour12: false }) + 
        " // " + 
        now.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })
      );
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const navLinks = [
    { label: "Profile", href: "#system", id: "system" },
    { label: "Milestones", href: "#metrics", id: "metrics" },
    { label: "Ecosystem", href: "#tech-grid", id: "tech-grid" },
    { label: "Projects", href: "#engine-registry", id: "engine-registry" },
    { label: "Connect", href: "#contact-hub", id: "contact-hub" }
  ];

  const handleScrollTo = (e, href, id) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen text-slate-200 flex flex-col relative selection:bg-violet-500/30 selection:text-white">
      {/* 3D Cosmic Starry background */}
      <ThreeBackground />

      {/* Cybernetic Top Navigation Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-space-black/75 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* Logo Name */}
          <div className="flex items-center space-x-2.5">
            <Sparkles className="w-4 h-4 text-violet-400 animate-pulse" />
            <span className="font-sans text-xs sm:text-sm font-extrabold tracking-widest text-white uppercase">
              Hasan Pulikkal // <span className="text-violet-400">Developer</span>
            </span>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href, link.id)}
                className={`font-sans text-xs tracking-wider uppercase transition-all duration-300 py-1 border-b-2 ${
                  activeSection === link.id
                    ? "text-violet-400 border-violet-400 font-bold"
                    : "text-slate-400 border-transparent hover:text-slate-200"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Time Sync indicator */}
          <div className="hidden lg:flex items-center space-x-3 font-mono text-[10px] text-slate-500 border-l border-white/5 pl-4">
            <Activity className="w-3.5 h-3.5 text-violet-400 animate-pulse" />
            <span className="text-slate-400 font-bold uppercase tracking-wider">{currentTime || "Syncing..."}</span>
          </div>

          {/* Mobile Navigation controls */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-slate-400 hover:text-slate-200 border border-white/5 bg-slate-950/60"
            aria-label="Toggle Navigation Panel"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-16 left-0 right-0 border-b border-white/5 bg-space-black/95 p-6 space-y-4 flex flex-col md:hidden z-40 backdrop-blur-lg"
            >
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href, link.id)}
                  className={`font-sans text-sm tracking-wider uppercase py-2 border-b border-white/5 transition-colors ${
                    activeSection === link.id ? "text-violet-400 font-bold" : "text-slate-400"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center justify-between font-mono text-[10px] text-slate-500 pt-2">
                <span>OPERATOR CONSOLE</span>
                <span className="text-slate-400 font-semibold">{currentTime || "Syncing..."}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Pages */}
      <main className="flex-1 w-full">
        <div id="system">
          <Hero />
        </div>

        <div id="metrics">
          <Metrics />
        </div>

        <TechGrid />

        <EngineRegistry />

        <ContactHub />
      </main>

      {/* Cockpit Footer */}
      <footer className="w-full border-t border-white/5 bg-slate-950 py-8 px-6 font-sans text-xs text-slate-500 relative">
        <div className="absolute inset-0 cosmic-dots opacity-10 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <span className="flex items-center space-x-1.5">
              <Cpu className="w-4 h-4 text-violet-400" />
              <span className="text-slate-300 font-bold">Hasan Pulikkal // Full-Stack Software Engineer</span>
            </span>
            <span className="hidden sm:inline text-slate-800">|</span>
          </div>

          <div className="flex items-center space-x-4">
            <span>© 2026 Hasan P P. All Rights Reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

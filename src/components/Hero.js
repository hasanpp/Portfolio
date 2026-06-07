/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Download, ChevronLeft, ChevronRight, Briefcase, Sparkles } from "lucide-react";

export default function Hero() {
  const photos = [
    {
      src: "/assets/hasan-image-1.png",
      title: "Hasan P P",
      caption: "Junior Software Developer"
    },
    {
      src: "/assets/hasan-image-2.png",
      title: "Hasan P P",
      caption: "Junior Software Developer"
    },
    {
      src: "/assets/hasan-image-3.png",
      title: "Hasan P P",
      caption: "Junior Software Developer"
    }
  ];

  const [activePhoto, setActivePhoto] = useState(0);

  const handleNext = () => {
    setActivePhoto((prev) => (prev + 1) % photos.length);
  };

  const handlePrev = () => {
    setActivePhoto((prev) => (prev - 1 + photos.length) % photos.length);
  };

  // Auto-slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(handleNext, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-16 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Subtle Gemini Aura in the background */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] gemini-aura -z-10 opacity-70 pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-15%] w-[450px] h-[450px] gemini-aura -z-10 opacity-40 pointer-events-none" />
      
      {/* Background Dots Overlay */}
      <div className="absolute inset-0 cosmic-dots -z-25 opacity-40 pointer-events-none" />

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Column: Typography & Headings */}
        <div className="lg:col-span-7 flex flex-col text-left space-y-8 relative z-10">
          
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2 border border-violet-500/10 bg-violet-950/10 rounded-full px-4 py-1.5 w-fit"
          >
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            <span className="text-[10px] sm:text-xs tracking-widest font-mono text-violet-300 uppercase">
              Jr Software Developer
            </span>
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight font-sans"
            >
              Hasan Pulikkal <br />
              <span className="text-gradient-gemini font-semibold">
                // Full Stack Web Developer
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base text-slate-300 max-w-xl font-sans leading-relaxed"
            >
              I am a Full Stack Developer focused on building clean, reliable web applications. My core toolkit includes Python, Django, and React.js, with a strong emphasis on writing maintainable backend logic and building structured user interfaces. I currently work as a Junior Software Developer at CrelioHealth.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <a
              href="/assets/Hasan P P Django + React full stack developer.pdf"
              download="Hasan_Pulikkal_Resume.pdf"
              className="flex items-center justify-center space-x-2 bg-white hover:bg-slate-100 text-slate-950 font-sans font-medium tracking-wide px-8 py-3.5 rounded-full shadow-lg transition-all duration-300"
            >
              <Download className="w-4 h-4 text-slate-950" />
              <span>View Resume</span>
            </a>
            
            <a
              href="https://github.com/hasanpp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-slate-950/40 hover:bg-slate-900/60 text-slate-200 hover:text-white font-sans tracking-wide px-6 py-3.5 rounded-full border border-white/10 hover:border-violet-500/30 transition-all duration-300"
            >
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/hasanpulikkal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-slate-950/40 hover:bg-slate-900/60 text-slate-200 hover:text-white font-sans tracking-wide px-6 py-3.5 rounded-full border border-white/10 hover:border-violet-500/30 transition-all duration-300"
            >
              <span>LinkedIn</span>
            </a>
          </motion.div>
        </div>

        {/* Right Column: Premium Photo Showcase Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative w-full flex justify-center"
        >
          {/* Subtle outer glowing rings */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500 opacity-20 blur-lg" />

          {/* Carousel Frame */}
          <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-2xl overflow-hidden glass-panel flex flex-col shadow-2xl">
            
            {/* Carousel Images slide */}
            <div className="relative w-full flex-grow overflow-hidden bg-[#0a0a14]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePhoto}
                  initial={{ opacity: 0, x: 25 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -25 }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image
                    src={photos[activePhoto]?.src}
                    alt={photos[activePhoto]?.title}
                    fill
                    sizes="(max-w-700px) 100vw, 380px"
                    className="object-cover scale-[1.01] brightness-90 filter contrast-100"
                    priority
                  />
                  
                  {/* Subtle dark bottom vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080810] via-transparent to-transparent opacity-90" />
                </motion.div>
              </AnimatePresence>

              {/* Navigation overlays */}
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center bg-slate-950/60 hover:bg-slate-900 border border-white/5 text-slate-300 hover:text-white transition-all z-20 cursor-pointer"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center bg-slate-950/60 hover:bg-slate-900 border border-white/5 text-slate-300 hover:text-white transition-all z-20 cursor-pointer"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Slide Information & Indicators */}
            <div className="p-5 bg-slate-950/90 border-t border-white/5 flex flex-col justify-between h-[90px] relative z-10 text-left">
              <div>
                <h4 className="font-sans text-xs font-semibold text-white tracking-wide uppercase flex items-center space-x-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-violet-400" />
                  <span>{photos[activePhoto]?.title}</span>
                </h4>
                <p className="text-[10px] sm:text-xs text-slate-400 font-sans mt-0.5 truncate leading-tight">
                  {photos[activePhoto]?.caption}
                </p>
              </div>

              {/* Dot Indicators */}
              <div className="flex items-center space-x-1.5 pt-2">
                {photos.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePhoto(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      activePhoto === idx ? "w-4 bg-violet-400" : "w-1.5 bg-slate-700 hover:bg-slate-500"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

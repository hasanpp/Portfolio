"use client";
import { motion } from "framer-motion";
import { Code2, Award, Zap } from "lucide-react";

export default function Metrics() {
  const metrics = [
    {
      id: "age-14",
      icon: <Code2 className="w-5 h-5 text-indigo-400" />,
      title: "My First Project",
      value: "Age 14",
      description: "Building a website for my school at the age of 14 marked the beginning of my tech journey.",
    },
    {
      id: "brototype",
      icon: <Award className="w-5 h-5 text-violet-400" />,
      title: "My Training",
      value: "Brototype Alumni",
      description: "I completed the intensive software development track at Brototype Calicut Campus.",
    },
    {
      id: "crelio",
      icon: <Zap className="w-5 h-5 text-pink-400" />,
      title: "My Current Role",
      value: "CrelioHealth",
      description: "I work as a Junior Software Developer(full-stack), focusing on Python Django and React.js",
    },
  ];

  return (
    <section id="metrics" className="py-20 bg-slate-950/20 border-y border-white/5 relative">
      <div className="absolute inset-0 cosmic-dots opacity-20 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {metrics.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="flex flex-col bg-slate-950/40 border border-white/5 p-6 rounded-2xl relative overflow-hidden backdrop-blur-sm group hover:border-violet-500/20 hover:bg-slate-950/70 transition-all duration-300"
          >
            {/* Visual accent top line */}
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-violet-500/20 to-transparent group-hover:via-violet-500/50 transition-all duration-500" />

            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 rounded-lg bg-slate-900 border border-white/5">
                {item.icon}
              </div>
              <span className="text-[10px] sm:text-xs tracking-widest font-mono text-slate-500 uppercase">
                {item.title}
              </span>
            </div>

            <div className="font-sans text-xl sm:text-2xl font-bold text-white tracking-wide mb-1">
              {item.value}
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans mt-1 text-left">
              {item.description}
            </p>

            {/* Progress highlight bar */}
            <div className="mt-6 w-full bg-slate-900 h-1 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.0, delay: idx * 0.15 }}
                className="h-full bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500 rounded-full"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

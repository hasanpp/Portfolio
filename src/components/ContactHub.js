"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, MessageSquare, Star, ShieldAlert } from "lucide-react";

// Custom inline SVG brand icons
const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function ContactHub() {
  const socialCluster = [
    {
      name: "LinkedIn",
      icon: <LinkedinIcon className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/hasanpulikkal",
      color: "hover:text-[#0A66C2] hover:border-[#0A66C2]/40"
    },
    {
      name: "GitHub",
      icon: <GithubIcon className="w-5 h-5" />,
      url: "https://github.com/hasanpp",
      color: "hover:text-white hover:border-slate-400/50"
    },
    {
      name: "Instagram",
      icon: <InstagramIcon className="w-5 h-5" />,
      url: "https://www.instagram.com/hasan_pulikkal",
      color: "hover:text-[#E1306C] hover:border-[#E1306C]/40"
    }
  ];

  return (
    <section id="contact-hub" className="py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden bg-[#080810]">
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] gemini-aura -z-10 opacity-30 pointer-events-none" />
      <div className="absolute inset-0 cosmic-dots opacity-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col mb-16 text-left">
          <div className="flex items-center space-x-2 mb-2">
            <Star className="w-4 h-4 text-violet-400 animate-spin" />
            <span className="font-mono text-xs uppercase tracking-widest text-violet-300">
              Direct Contact
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-wide font-sans">
            Connect with Me
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl font-sans mt-2">
            Please reach out via my direct email or messaging lines below. I am always happy to discuss new opportunities.
          </p>
        </div>

        {/* Dashboard Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          
          {/* Left Side: Profile Photo */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start space-y-8">
            
            {/* Profile Frame */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56">
              {/* Subtle indigo glow background overlay */}
              <div className="absolute -inset-2.5 rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500 opacity-20 blur-md" />
              
              {/* Inner Profile image frame */}
              <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-white/10 bg-slate-950">
                <Image
                  src="/assets/hasan-profile.png"
                  alt="Hasan Pulikkal Profile Alternate"
                  fill
                  sizes="(max-w-600px) 100vw, 224px"
                  className="object-cover scale-105 filter contrast-100 brightness-95"
                  priority
                />
              </div>
            </div>

            {/* Social Anchor Cluster */}
            <div className="flex space-x-4">
              {socialCluster.map(social => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3.5 rounded-xl border border-white/5 bg-slate-950 hover:bg-[#0c0c1a] text-slate-400 transition-all duration-300 ${social.color}`}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Side: Simple Action Channels */}
          <div className="lg:col-span-7 w-full text-left">
            <div className="relative rounded-2xl border border-white/5 bg-[#0c0c1a]/60 p-8 md:p-10 backdrop-blur-md shadow-2xl space-y-8">
              
              <div>
                <h3 className="text-xl font-bold text-white tracking-wide font-sans">
                  Direct Channels
                </h3>
                <p className="text-sm text-slate-400 font-sans mt-2">
                  Select one of the channels below to initiate direct communication.
                </p>
              </div>

              {/* Contact Anchor Blocks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Email block */}
                <a
                  href="mailto:hasanpp02@gmail.com"
                  className="group relative flex flex-col justify-between p-6 rounded-2xl border border-white/5 bg-[#080810]/80 hover:border-violet-500/30 hover:bg-slate-900/30 transition-all duration-300 text-left"
                >
                  <div className="p-3 w-fit rounded-xl bg-slate-950 border border-white/5 group-hover:border-violet-500/20 transition-all">
                    <Mail className="w-5 h-5 text-violet-400" />
                  </div>
                  <div className="mt-8">
                    <span className="text-sm font-bold text-white block">Email Me</span>
                    <span className="text-[11px] sm:text-xs text-slate-400 block mt-1 truncate">hasanpp02@gmail.com</span>
                  </div>
                </a>

                {/* WhatsApp block */}
                <a
                  href="https://wa.me/919495707125"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col justify-between p-6 rounded-2xl border border-white/5 bg-[#080810]/80 hover:border-indigo-500/30 hover:bg-slate-900/30 transition-all duration-300 text-left"
                >
                  <div className="p-3 w-fit rounded-xl bg-slate-950 border border-white/5 group-hover:border-indigo-500/20 transition-all">
                    <MessageSquare className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div className="mt-8">
                    <span className="text-sm font-bold text-white block">WhatsApp</span>
                    <span className="text-[11px] sm:text-xs text-slate-400 block mt-1">Open Direct Wave</span>
                  </div>
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

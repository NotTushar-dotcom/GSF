"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Video, Lightbulb, Users, Rocket, Shield } from "lucide-react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const FEATURES = [
  { icon: Video, label: "1-on-1 Video Calls", desc: "Connect with experts via built-in video" },
  { icon: Lightbulb, label: "Venture Marketplace", desc: "List ideas, attract equity investors" },
  { icon: Users, label: "Expert Network", desc: "40+ domain-expert mentors" },
  { icon: Shield, label: "Free 30 Days", desc: "Full access, no credit card needed" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#07071A]">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-lines opacity-100" />
      <div className="absolute inset-0 bg-dot-grid opacity-20" />

      {/* Glow accents */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-[#2233FF]/8 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#8855FF]/6 blur-[80px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/3 w-[300px] h-[300px] rounded-full bg-[#2233FF]/5 blur-[60px] pointer-events-none" />

      <div className="section-container relative z-10 pt-28 pb-16">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div variants={item} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#2233FF40] bg-[#2233FF15] text-[#6677FF] text-sm font-semibold tracking-wide" style={{ fontFamily: "'Exo 2', sans-serif" }}>
              <span className="size-1.5 rounded-full bg-[#2233FF] animate-pulse" />
              Free for 30 days — No credit card required
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6"
            style={{ fontFamily: "'Exo 2', sans-serif" }}
          >
            Where Students Meet{" "}
            <span className="text-gradient-brand">Venture Creators</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={item}
            className="text-xl sm:text-2xl text-[#9BA3D4] leading-relaxed max-w-2xl mx-auto mb-10"
          >
            Video call experts, pitch your startup idea to investors, and get the mentorship that actually moves the needle.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            className="flex flex-wrap items-center justify-center gap-4 mb-16"
          >
            <Link href="/sign-up" className="btn-primary text-base px-8 py-3.5">
              <Rocket className="size-5" />
              Start Free — 30 Days
            </Link>
            <Link href="/ventures" className="btn-outline text-base px-8 py-3.5">
              <Lightbulb className="size-5" />
              Explore Ventures
            </Link>
          </motion.div>

          {/* Feature pills */}
          <motion.div
            variants={item}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {FEATURES.map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                className="card p-4 text-left glow-border hover:scale-[1.02] transition-transform duration-200"
              >
                <div className="size-8 rounded-lg bg-[#2233FF20] border border-[#2233FF30] flex items-center justify-center mb-3">
                  <Icon className="size-4 text-[#6677FF]" />
                </div>
                <div className="text-xs font-bold text-[#F0F0FF] mb-0.5" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                  {label}
                </div>
                <div className="text-xs text-[#5B6080]">{desc}</div>
              </div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={item}
            className="mt-14 pt-10 border-t border-[#1E1E45] flex items-center justify-center gap-10 flex-wrap"
          >
            {[
              { value: "500+", label: "Students" },
              { value: "40+", label: "Expert Mentors" },
              { value: "1–2%", label: "Platform cut on deals" },
              { value: "30days", label: "Free trial" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-2xl font-black text-white" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                  {value}
                </div>
                <div className="text-xs text-[#5B6080] mt-0.5 uppercase tracking-wider">{label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#07071A] to-transparent pointer-events-none" />
    </section>
  );
}

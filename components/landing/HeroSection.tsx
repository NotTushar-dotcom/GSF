"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Video, Lightbulb, Users, Shield } from "lucide-react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const PILLARS = [
  { icon: Video, label: "1-on-1 Video Calls", desc: "Book live sessions with expert mentors" },
  { icon: Lightbulb, label: "Venture Marketplace", desc: "List ideas and attract equity investors" },
  { icon: Users, label: "Expert Network", desc: "40+ domain-expert mentors, zero gatekeeping" },
  { icon: Shield, label: "Free 30 Days", desc: "Full platform access, no credit card" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-soft-pattern">
      {/* Subtle dot grid */}
      <div className="absolute inset-0 bg-dot-grid opacity-30" />

      {/* Warm glow blobs */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#AACDDC]/15 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-[#F3E3D0]/60 blur-[80px] pointer-events-none" />

      <div className="section-container relative z-10 pt-28 pb-16">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          {/* Badge */}
          <motion.div variants={item} className="mb-8">
            <span className="badge badge-blue text-xs">
              <span className="size-1.5 rounded-full bg-[#81A6C6]" />
              Free for 30 days · No credit card required
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="text-5xl sm:text-6xl lg:text-7xl text-[#1A2332] leading-[1.1] mb-6 text-balance"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700 }}
          >
            Where Students Meet{" "}
            <em className="not-italic text-gradient-primary">Venture Creators.</em>
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={item}
            className="text-lg sm:text-xl text-[#4A5668] leading-relaxed max-w-xl mb-10"
          >
            Video call world-class experts, pitch your startup to investors, and build
            with a community that takes action — not just talks about it.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap items-center gap-3 mb-16">
            <Link href="/sign-up" className="btn-primary text-base px-7 py-3.5">
              Get Started Free
              <ArrowRight className="size-4" />
            </Link>
            <Link href="/ventures" className="btn-outline text-base px-7 py-3.5">
              <Lightbulb className="size-4" />
              Explore Ventures
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={item}
            className="flex items-center gap-8 pt-8 border-t border-[#D2C4B4] flex-wrap"
          >
            {[
              { value: "500+", label: "Student founders" },
              { value: "40+", label: "Expert mentors" },
              { value: "1–2%", label: "Platform fee on deals" },
              { value: "₹0", label: "For first 30 days" },
            ].map(({ value, label }) => (
              <div key={label}>
                <div
                  className="text-2xl font-bold text-[#1A2332]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {value}
                </div>
                <div className="text-xs text-[#8A95A3] mt-0.5 uppercase tracking-wide font-medium">
                  {label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Feature cards — floated right on large screens */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:grid grid-cols-2 gap-4 absolute right-8 top-1/2 -translate-y-1/2 w-80"
        >
          {PILLARS.map(({ icon: Icon, label, desc }) => (
            <div key={label} className="card p-5 card-hover">
              <div className="size-9 rounded-lg bg-[#EEF4F9] flex items-center justify-center mb-3">
                <Icon className="size-4 text-[#81A6C6]" />
              </div>
              <div className="text-sm font-semibold text-[#1A2332] mb-1">{label}</div>
              <div className="text-xs text-[#8A95A3] leading-relaxed">{desc}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

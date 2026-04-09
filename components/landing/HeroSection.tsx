"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { DashboardMockup } from "./DashboardMockup";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Subtle dot grid background */}
      <div className="absolute inset-0 bg-dot-grid opacity-60" />

      {/* Glow accents */}
      <div className="absolute top-1/4 left-1/4 size-96 rounded-full bg-primary-500/6 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 size-80 rounded-full bg-secondary-400/6 blur-3xl pointer-events-none" />

      <div className="section-container relative z-10 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-8"
          >
            <motion.div variants={item}>
              <Badge variant="primary" dot className="mb-6">
                Cohort 3 applications open
              </Badge>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-5xl sm:text-6xl lg:text-[64px] font-semibold text-text-primary leading-[1.1] tracking-tight text-balance"
            >
              From startup curiosity to{" "}
              <span className="text-gradient-primary">founder clarity.</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-lg sm:text-xl text-text-secondary leading-relaxed max-w-lg"
            >
              GSF helps students validate ideas, build execution confidence, and
              develop founder thinking through structured cohort journeys.
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-wrap items-center gap-3"
            >
              <Button size="xl" variant="primary" rightIcon={<ArrowRight className="size-4" />} asChild>
                <Link href="/sign-up">Join the next cohort</Link>
              </Button>
              <Button size="xl" variant="outline" leftIcon={<Play className="size-4" />} asChild>
                <Link href="/programs">Explore programs</Link>
              </Button>
            </motion.div>

            {/* Social proof numbers */}
            <motion.div
              variants={item}
              className="flex items-center gap-6 pt-2"
            >
              {[
                { value: "500+", label: "Students" },
                { value: "40+", label: "Mentors" },
                { value: "3", label: "Cohorts run" },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <div className="text-2xl font-semibold text-text-primary">{value}</div>
                  <div className="text-xs text-text-muted mt-0.5">{label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Dashboard preview */}
          <motion.div
            initial={{ opacity: 0, x: 32, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <DashboardMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

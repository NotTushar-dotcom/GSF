"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { Zap, TrendingUp, BookOpen, Users, ArrowRight, Calendar, Clock, ChevronRight } from "lucide-react";

const CATEGORIES = ["All", "Founder Strategy", "Fundraising", "Product", "Community", "Growth"];

const ARTICLES = [
  {
    category: "Founder Strategy",
    title: "The 7-Stage Founder Journey: From Ideation to PMF",
    excerpt: "Most founders skip stages. Here's why the GSF 7-stage framework works — and how to navigate each one without burning out.",
    author: "Aryan Kapoor",
    date: "Apr 8, 2026",
    readTime: "7 min",
    featured: true,
    gradient: "135deg, rgba(91,108,255,0.12) 0%, rgba(79,209,197,0.08) 100%",
    accentColor: "#5B6CFF",
  },
  {
    category: "Fundraising",
    title: "How to Close Your First Angel Round Without a Warm Intro",
    excerpt: "Cold outreach works — if you know what you're doing. A step-by-step playbook from a founder who raised $80K without knowing a single VC.",
    author: "Neha Joshi",
    date: "Apr 5, 2026",
    readTime: "9 min",
    featured: false,
    gradient: "135deg, rgba(245,158,11,0.08) 0%, rgba(245,158,11,0.04) 100%",
    accentColor: "#F59E0B",
  },
  {
    category: "Product",
    title: "Customer Discovery Interviews That Actually Teach You Something",
    excerpt: "The biggest mistake students make: asking what people want instead of understanding what they're struggling with. Here's how to fix it.",
    author: "David Osei",
    date: "Apr 2, 2026",
    readTime: "5 min",
    featured: false,
    gradient: "135deg, rgba(16,185,129,0.08) 0%, rgba(16,185,129,0.04) 100%",
    accentColor: "#10B981",
  },
  {
    category: "Growth",
    title: "Building a Waitlist That Actually Converts",
    excerpt: "Your landing page is live. Now what? A breakdown of the exact tactics GSF founders used to convert 40% of their waitlists.",
    author: "Priya Nair",
    date: "Mar 28, 2026",
    readTime: "6 min",
    featured: false,
    gradient: "135deg, rgba(139,92,246,0.08) 0%, rgba(139,92,246,0.04) 100%",
    accentColor: "#8B5CF6",
  },
  {
    category: "Community",
    title: "Why Your Network Is Your Most Underutilised Asset",
    excerpt: "The students who succeed fastest aren't the smartest — they're the most connected. Here's how to build a founder network that opens doors.",
    author: "David Osei",
    date: "Mar 24, 2026",
    readTime: "4 min",
    featured: false,
    gradient: "135deg, rgba(6,182,212,0.08) 0%, rgba(6,182,212,0.04) 100%",
    accentColor: "#06B6D4",
  },
  {
    category: "Founder Strategy",
    title: "Equity 101: What Every Student Founder Must Know Before Offering Shares",
    excerpt: "Don't give away 50% of your company before you've validated a single hypothesis. A guide to equity decisions for early-stage student founders.",
    author: "Priya Nair",
    date: "Mar 19, 2026",
    readTime: "11 min",
    featured: false,
    gradient: "135deg, rgba(239,68,68,0.08) 0%, rgba(239,68,68,0.04) 100%",
    accentColor: "#EF4444",
  },
];

const STATS = [
  { value: "50+",   label: "Articles published", icon: BookOpen },
  { value: "12K+",  label: "Monthly readers",    icon: Users },
  { value: "4.9★",  label: "Avg article rating", icon: TrendingUp },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? ARTICLES
    : ARTICLES.filter((a) => a.category === activeCategory);

  const featured = filtered.find((a) => a.featured) || filtered[0];
  const rest = filtered.filter((a) => a !== featured);

  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen" style={{ backgroundColor: "var(--bg-base)" }}>

        {/* Hero */}
        <section className="relative section-padding bg-soft-pattern overflow-hidden">
          <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none" />
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[120px] pointer-events-none" style={{ background: "rgba(91,108,255,0.08)" }} />

          <div className="section-container relative z-10">
            <motion.div {...fadeUp(0)} className="text-center max-w-3xl mx-auto">
              <span className="badge badge-blue mb-6">
                <Zap className="size-3" />
                GSF Insights
              </span>
              <h1 className="text-5xl sm:text-6xl tracking-tight mb-6" style={{ fontFamily: "'Playfair Display', serif", color: "var(--text-primary)" }}>
                Founder knowledge,{" "}
                <em className="not-italic text-gradient-primary">no gatekeepers.</em>
              </h1>
              <p className="text-xl leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Playbooks, frameworks, and real talk from the builders who've been there.
                Written by GSF experts and founders — free forever.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div {...fadeUp(0.1)} className="flex flex-wrap items-center justify-center gap-8 mt-12">
              {STATS.map(({ value, label, icon: Icon }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="size-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: "rgba(91,108,255,0.1)" }}>
                    <Icon className="size-5" style={{ color: "var(--accent-indigo)" }} />
                  </div>
                  <div>
                    <p className="text-xl font-bold" style={{ color: "var(--text-primary)" }}>{value}</p>
                    <p className="text-xs" style={{ color: "var(--text-muted)" }}>{label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Category filter */}
        <section className="border-b sticky top-16 z-30 backdrop-blur-md" style={{ backgroundColor: "var(--bg-nav)", borderBottomColor: "var(--border-default)" }}>
          <div className="section-container">
            <div className="flex gap-1 py-2 overflow-x-auto scrollbar-hide">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="px-4 py-2 rounded-lg text-sm font-medium flex-shrink-0 transition-all"
                  style={{
                    backgroundColor: activeCategory === cat ? "rgba(91,108,255,0.1)" : "transparent",
                    color: activeCategory === cat ? "var(--accent-indigo)" : "var(--text-secondary)",
                    border: activeCategory === cat ? "1px solid rgba(91,108,255,0.2)" : "1px solid transparent",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Articles */}
        <section className="section-container section-padding">
          {/* Featured article */}
          {featured && (
            <motion.div {...fadeUp(0)} className="mb-12">
              <div
                className="card p-8 lg:p-12 card-hover relative overflow-hidden"
                style={{ background: `linear-gradient(${featured.gradient})` }}
              >
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] pointer-events-none opacity-40"
                  style={{ background: featured.accentColor }} />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="badge text-xs" style={{ backgroundColor: `${featured.accentColor}18`, color: featured.accentColor, border: `1px solid ${featured.accentColor}30` }}>
                        {featured.category}
                      </span>
                      <span className="badge badge-warm text-[10px]">★ Featured</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl mb-4" style={{ fontFamily: "'Playfair Display', serif", color: "var(--text-primary)" }}>
                      {featured.title}
                    </h2>
                    <p className="text-base leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
                      {featured.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm mb-6" style={{ color: "var(--text-muted)" }}>
                      <span className="flex items-center gap-1"><Users className="size-3.5" />{featured.author}</span>
                      <span className="flex items-center gap-1"><Calendar className="size-3.5" />{featured.date}</span>
                      <span className="flex items-center gap-1"><Clock className="size-3.5" />{featured.readTime}</span>
                    </div>
                    <Link href="/insights" className="btn-primary px-6 py-2.5">
                      Read article <ArrowRight className="size-4" />
                    </Link>
                  </div>
                  <div className="hidden lg:flex items-center justify-center">
                    <div
                      className="size-48 rounded-full flex items-center justify-center"
                      style={{ background: `${featured.accentColor}18`, border: `2px solid ${featured.accentColor}30` }}
                    >
                      <BookOpen className="size-16" style={{ color: featured.accentColor, opacity: 0.7 }} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Article grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((article, i) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
              >
                <div
                  className="card p-6 card-hover h-full flex flex-col"
                  style={{ background: `linear-gradient(${article.gradient})` }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span
                      className="badge text-[10px]"
                      style={{
                        backgroundColor: `${article.accentColor}15`,
                        color: article.accentColor,
                        border: `1px solid ${article.accentColor}25`,
                      }}
                    >
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 leading-snug" style={{ color: "var(--text-primary)", fontFamily: "'Playfair Display', serif" }}>
                    {article.title}
                  </h3>
                  <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: "var(--text-secondary)" }}>
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t" style={{ borderTopColor: "var(--border-soft)" }}>
                    <div>
                      <p className="text-xs font-medium" style={{ color: "var(--text-secondary)" }}>{article.author}</p>
                      <p className="text-[10px]" style={{ color: "var(--text-muted)" }}>{article.date} · {article.readTime}</p>
                    </div>
                    <button className="flex items-center gap-1 text-xs font-medium" style={{ color: article.accentColor }}>
                      Read <ChevronRight className="size-3" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Newsletter CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 p-10 rounded-3xl text-center relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #0B0F19, #111827)", border: "1px solid rgba(91,108,255,0.3)" }}
          >
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-40 rounded-full blur-[80px]" style={{ background: "rgba(91,108,255,0.2)" }} />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl text-white mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                The Founder Brief
              </h2>
              <p className="text-gray-400 mb-6 max-w-md mx-auto">
                One email, every Friday. The best GSF insights, curated for serious founders.
              </p>
              <div className="flex gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="you@startup.com"
                  className="flex-1 px-4 py-3 rounded-xl text-sm"
                  style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", color: "white" }}
                  id="newsletter-email"
                />
                <button className="btn-primary px-5 py-2.5 text-sm flex-shrink-0">
                  Subscribe
                </button>
              </div>
              <p className="text-gray-600 text-xs mt-3">No spam. Unsubscribe anytime.</p>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}

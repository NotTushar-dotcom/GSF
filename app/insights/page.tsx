import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowRight, Clock, BookOpen, TrendingUp, Lightbulb } from "lucide-react";

export const metadata = {
  title: "Insights — GSF | Global Society of Founders",
  description: "Founder insights, startup strategy, and practical knowledge from the GSF community.",
};

const FEATURED = {
  slug: "from-idea-to-paying-users",
  category: "Playbook",
  readTime: "8 min read",
  title: "From idea to paying users in 30 days: A GSF founder's playbook",
  excerpt:
    "Three cohort graduates broke down exactly how they went from a post-it note idea to their first 10 paying customers — without writing a single line of code first.",
  author: "GSF Editorial",
  date: "April 5, 2026",
  gradient: "from-primary-500 to-secondary-500",
};

const POSTS = [
  {
    slug: "validation-without-building",
    category: "Strategy",
    readTime: "5 min read",
    title: "How to validate your startup idea before building anything",
    excerpt: "The most expensive mistake founders make is building before validating. Here's the 3-step framework our mentors teach.",
    author: "Dr. Anika Patel",
    date: "March 28, 2026",
    color: "bg-primary-500",
  },
  {
    slug: "fundraising-101",
    category: "Fundraising",
    readTime: "7 min read",
    title: "Fundraising 101: What investors actually look for in a student founder",
    excerpt: "VCs aren't just betting on your idea — they're betting on you. Here's what separates fundable founders from the rest.",
    author: "James Whitfield",
    date: "March 21, 2026",
    color: "bg-secondary-500",
  },
  {
    slug: "cofounder-relationships",
    category: "People",
    readTime: "6 min read",
    title: "The co-founder conversation nobody wants to have (but every team needs)",
    excerpt: "Equity splits, decision rights, and what happens if someone leaves. A frank guide to co-founder agreements.",
    author: "Raj Devani",
    date: "March 15, 2026",
    color: "bg-amber-500",
  },
  {
    slug: "mvp-mistakes",
    category: "Product",
    readTime: "4 min read",
    title: "5 MVP mistakes GSF founders made — and what they learned",
    excerpt: "Real stories from real cohort members. Over-engineering, under-shipping, and the pivots that changed everything.",
    author: "Sara Mensah",
    date: "March 8, 2026",
    color: "bg-rose-500",
  },
  {
    slug: "growth-for-early-stage",
    category: "Growth",
    readTime: "6 min read",
    title: "Growth strategies that actually work for pre-revenue startups",
    excerpt: "Expensive ads aren't the answer. Here's how early-stage founders can grow with zero budget.",
    author: "Yuki Tanaka",
    date: "March 1, 2026",
    color: "bg-violet-500",
  },
  {
    slug: "impact-vs-scale",
    category: "Mindset",
    readTime: "5 min read",
    title: "Impact vs. scale: Why you don't have to choose",
    excerpt: "The false dichotomy holding back a generation of socially-driven founders — and how to build a business that does both.",
    author: "Fatima Al-Hassan",
    date: "February 22, 2026",
    color: "bg-emerald-500",
  },
];

const CATEGORIES = ["All", "Strategy", "Product", "Growth", "Fundraising", "People", "Mindset", "Playbook"];

export default function InsightsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-background">
        {/* Hero */}
        <section className="relative section-padding overflow-hidden">
          <div className="absolute inset-0 bg-dot-grid opacity-50" />
          <div className="section-container relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-50 border border-primary-100 text-primary-600 text-sm font-medium mb-6">
              <BookOpen className="size-3.5" />
              Founder knowledge base
            </div>
            <h1 className="text-5xl sm:text-6xl font-semibold text-text-primary tracking-tight text-balance mb-6">
              Insights from the{" "}
              <span className="text-gradient-primary">front lines</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-xl mx-auto">
              Practical playbooks, expert essays, and real founder stories — curated for early-stage builders.
            </p>
          </div>
        </section>

        {/* Featured post */}
        <section className="section-container pb-12">
          <div className={`relative bg-gradient-to-br ${FEATURED.gradient} rounded-2xl p-10 overflow-hidden`}>
            <div className="absolute inset-0 bg-dot-grid opacity-10" />
            <div className="relative z-10 max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-medium text-white/80 bg-white/20 px-2.5 py-1 rounded-full">
                  {FEATURED.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-white/60">
                  <Clock className="size-3" /> {FEATURED.readTime}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4 leading-snug">
                {FEATURED.title}
              </h2>
              <p className="text-white/70 leading-relaxed mb-6">{FEATURED.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-white/60">{FEATURED.author} · {FEATURED.date}</span>
                <Link
                  href={`/insights/${FEATURED.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-white hover:opacity-80 transition-opacity"
                >
                  Read article <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Category filter */}
        <section className="section-container pb-8">
          <div className="flex items-center gap-2 flex-wrap">
            {CATEGORIES.map((cat, i) => (
              <button
                key={cat}
                id={`category-${cat.toLowerCase()}`}
                className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  i === 0
                    ? "bg-primary-500 text-white"
                    : "bg-white border border-border text-text-secondary hover:border-gray-300 hover:text-text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Posts grid */}
        <section className="section-container pb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/insights/${post.slug}`}
                className="card card-hover p-6 flex flex-col gap-4 group"
              >
                <div className="flex items-center gap-2">
                  <span className={`${post.color} text-white text-xs font-medium px-2.5 py-1 rounded-full`}>
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-text-muted">
                    <Clock className="size-3" /> {post.readTime}
                  </span>
                </div>
                <h2 className="text-base font-semibold text-text-primary group-hover:text-primary-600 transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-sm text-text-secondary leading-relaxed flex-1">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-4 border-t border-border text-xs text-text-muted">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section className="bg-canvas border-t border-border py-20">
          <div className="section-container max-w-2xl mx-auto text-center">
            <div className="size-12 rounded-xl bg-primary-50 flex items-center justify-center mx-auto mb-6">
              <Lightbulb className="size-6 text-primary-500" />
            </div>
            <h2 className="text-3xl font-semibold text-text-primary mb-3">Stay ahead of the curve</h2>
            <p className="text-text-secondary mb-8">
              Get the latest GSF insights delivered to your inbox every week — no spam, just signal.
            </p>
            <form className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="you@university.edu"
                className="input flex-1"
                id="newsletter-email"
              />
              <button
                type="submit"
                className="bg-primary-500 text-white font-medium px-5 py-2.5 rounded-xl hover:bg-primary-600 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

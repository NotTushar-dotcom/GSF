import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowRight, MessageCircle, Users, Zap, Globe, Calendar, TrendingUp } from "lucide-react";

export const metadata = {
  title: "Community — GSF | Global Society of Founders",
  description: "Join a thriving community of student founders, mentors, and experts at the Global Society of Founders.",
};

const FEATURES = [
  {
    icon: MessageCircle,
    title: "Slack Community",
    description: "Real-time discussions, resource sharing, and peer support across dedicated channels for every stage of your founder journey.",
  },
  {
    icon: Calendar,
    title: "Weekly Founder Calls",
    description: "Every Thursday, cohort members hop on a live call to share wins, get unblocked, and learn from each other.",
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "Connect with founders from 30+ countries. Find co-founders, collaborators, and lifelong friends across cultures.",
  },
  {
    icon: Zap,
    title: "Accountability Groups",
    description: "Small pods of 5–6 founders who meet weekly to hold each other accountable and celebrate milestones.",
  },
  {
    icon: TrendingUp,
    title: "Progress Showcases",
    description: "Monthly demo days where members present what they've built to peers, mentors, and invited investors.",
  },
  {
    icon: Users,
    title: "Alumni Access",
    description: "Stay connected with the growing GSF alumni network long after your cohort ends.",
  },
];

const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    role: "Founder, EduLoop",
    cohort: "Cohort 1",
    quote: "The community at GSF is unlike anything I've experienced. I found my co-founder and my first 10 users here.",
    initials: "PS",
    color: "bg-primary-500",
  },
  {
    name: "Marcus Chen",
    role: "Founder, Supplify",
    cohort: "Cohort 2",
    quote: "Every week I was challenged, supported, and celebrated. The accountability pods kept me moving even when things got hard.",
    initials: "MC",
    color: "bg-secondary-500",
  },
  {
    name: "Aisha Okafor",
    role: "Founder, HealthBridge",
    cohort: "Cohort 2",
    quote: "I walked in with an idea and walked out with a product, users, and a team. The network was the real cheat code.",
    initials: "AO",
    color: "bg-amber-500",
  },
];

export default function CommunityPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-background">
        {/* Hero */}
        <section className="relative section-padding overflow-hidden">
          <div className="absolute inset-0 bg-dot-grid opacity-50" />
          <div className="absolute top-1/3 right-1/4 size-80 rounded-full bg-secondary-400/6 blur-3xl pointer-events-none" />
          <div className="section-container relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary-50 border border-secondary-100 text-secondary-600 text-sm font-medium mb-6">
              <span className="size-1.5 rounded-full bg-secondary-500" />
              500+ founders & counting
            </div>
            <h1 className="text-5xl sm:text-6xl font-semibold text-text-primary tracking-tight text-balance mb-6">
              Build alongside{" "}
              <span className="text-gradient-primary">people who get it</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed mb-10">
              The GSF community is where ideas meet execution. Connect with driven student founders, experienced mentors, and a support system that pushes you forward.
            </p>
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 bg-primary-500 text-white font-medium px-6 py-3 rounded-xl hover:bg-primary-600 transition-colors shadow-soft-sm"
            >
              Join the community <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>

        {/* Stats bar */}
        <section className="border-y border-border bg-white">
          <div className="section-container py-10">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
              {[
                { value: "500+", label: "Active members" },
                { value: "30+", label: "Countries" },
                { value: "3", label: "Cohorts run" },
                { value: "89%", label: "Still building" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <div className="text-3xl font-semibold text-text-primary">{value}</div>
                  <div className="text-sm text-text-muted mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="section-container section-padding">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-semibold text-text-primary mb-4">
              Everything you need to grow
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Community isn't a perk — it's the product. Every touchpoint is designed to accelerate your journey.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map(({ icon: Icon, title, description }) => (
              <div key={title} className="card p-6 card-hover">
                <div className="size-10 rounded-xl bg-primary-50 flex items-center justify-center mb-4">
                  <Icon className="size-5 text-primary-500" />
                </div>
                <h3 className="text-base font-semibold text-text-primary mb-2">{title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-canvas section-padding">
          <div className="section-container">
            <h2 className="text-3xl font-semibold text-text-primary text-center mb-12">
              What members say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t) => (
                <div key={t.name} className="card p-6 flex flex-col gap-4">
                  <p className="text-text-secondary text-sm leading-relaxed flex-1">"{t.quote}"</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className={`${t.color} size-9 rounded-full flex items-center justify-center text-white text-xs font-semibold`}>
                      {t.initials}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-text-primary">{t.name}</div>
                      <div className="text-xs text-text-muted">{t.role} · {t.cohort}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-container py-20 text-center">
          <h2 className="text-3xl font-semibold text-text-primary mb-4">Ready to find your people?</h2>
          <p className="text-text-secondary mb-8 max-w-lg mx-auto">
            Apply to the next cohort and get instant access to the full GSF community.
          </p>
          <Link href="/apply" className="inline-flex items-center gap-2 bg-primary-500 text-white font-medium px-6 py-3 rounded-xl hover:bg-primary-600 transition-colors shadow-soft-sm">
            Apply now <ArrowRight className="size-4" />
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}

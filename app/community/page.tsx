import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowRight, Target, Users, Globe, Heart, MessageCircle, Calendar, Zap } from "lucide-react";

export const metadata = {
  title: "Community — GSF | Global Society of Founders",
  description: "Join 500+ student founders building together on GSF.",
};

const FEATURES = [
  { icon: MessageCircle, title: "Slack Community", description: "Real-time discussions, resource sharing, and peer support across dedicated channels." },
  { icon: Calendar, title: "Weekly Founder Calls", description: "Every Thursday, cohort members share wins, get unblocked, and learn from each other live." },
  { icon: Globe, title: "Global Network", description: "Connect with founders from 30+ countries. Find co-founders, collaborators, and lifelong allies." },
  { icon: Zap, title: "Accountability Groups", description: "Small pods of 5–6 founders who meet weekly to hold each other accountable." },
  { icon: Target, title: "Progress Showcases", description: "Monthly demo days where members present to peers, mentors, and invited investors." },
  { icon: Users, title: "Alumni Access", description: "Stay connected with the growing GSF alumni network long after your journey starts." },
];

const TESTIMONIALS = [
  { name: "Priya Sharma", role: "Founder, EduLoop", cohort: "Cohort 1", quote: "The community at GSF is unlike anything I've experienced. I found my co-founder and my first 10 users here.", initials: "PS" },
  { name: "Marcus Chen", role: "Founder, Supplify", cohort: "Cohort 2", quote: "Every week I was challenged, supported, and celebrated. The accountability pods kept me moving even when things got hard.", initials: "MC" },
  { name: "Aisha Okafor", role: "Founder, HealthBridge", cohort: "Cohort 2", quote: "I walked in with an idea and walked out with a product, users, and a team. The network was the real cheat code.", initials: "AO" },
];

export default function CommunityPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-[#FDFAF7]">
        {/* Hero */}
        <section className="relative section-padding bg-soft-pattern overflow-hidden">
          <div className="absolute inset-0 bg-dot-grid opacity-25" />
          <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-[#AACDDC]/15 blur-[80px] pointer-events-none" />
          <div className="section-container relative z-10 text-center">
            <span className="badge badge-blue mb-6"><span className="size-1.5 rounded-full bg-[#81A6C6]" /> 500+ founders & growing</span>
            <h1 className="text-5xl sm:text-6xl text-[#1A2332] tracking-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Build alongside{" "}
              <em className="not-italic text-gradient-primary">people who get it</em>
            </h1>
            <p className="text-xl text-[#4A5668] max-w-2xl mx-auto mb-10">
              The GSF community is where ideas meet execution. Connect with driven student founders, experienced experts, and a support system that actually pushes you forward.
            </p>
            <Link href="/sign-up" className="btn-primary text-base px-7 py-3.5">
              Join the community <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>

        {/* Stats */}
        <section className="border-y border-[#D2C4B4] bg-white">
          <div className="section-container py-10">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
              {[{ value: "500+", label: "Active members" }, { value: "30+", label: "Countries" }, { value: "3", label: "Cohorts run" }, { value: "89%", label: "Still building" }].map(({ value, label }) => (
                <div key={label}>
                  <div className="text-3xl font-bold text-[#1A2332] mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{value}</div>
                  <div className="text-xs text-[#8A95A3] uppercase tracking-wide font-medium">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="section-container section-padding">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl text-[#1A2332] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Everything you need to grow</h2>
            <p className="text-[#4A5668] max-w-xl mx-auto">Community isn't a perk — it's the product. Every touchpoint is designed to accelerate your journey.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map(({ icon: Icon, title, description }) => (
              <div key={title} className="card p-6 card-hover">
                <div className="size-10 rounded-xl bg-[#EEF4F9] border border-[#AACDDC] flex items-center justify-center mb-4">
                  <Icon className="size-5 text-[#81A6C6]" />
                </div>
                <h3 className="font-semibold text-[#1A2332] mb-2">{title}</h3>
                <p className="text-sm text-[#4A5668] leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-[#F7F2EC] border-t border-[#D2C4B4] section-padding">
          <div className="section-container">
            <h2 className="text-3xl text-[#1A2332] text-center mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>What members say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {TESTIMONIALS.map((t) => (
                <div key={t.name} className="card p-6 flex flex-col gap-4 bg-white">
                  <p className="text-[#4A5668] text-sm leading-relaxed flex-1 italic" style={{ fontFamily: "'Playfair Display', serif" }}>"{t.quote}"</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-[#D2C4B4]">
                    <div className="size-9 rounded-full bg-[#EEF4F9] border border-[#AACDDC] flex items-center justify-center text-xs font-bold text-[#3D74A0]">{t.initials}</div>
                    <div>
                      <div className="text-sm font-semibold text-[#1A2332]">{t.name}</div>
                      <div className="text-xs text-[#8A95A3]">{t.role} · {t.cohort}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-container py-20 text-center">
          <h2 className="text-3xl text-[#1A2332] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Ready to find your people?</h2>
          <p className="text-[#4A5668] mb-8 max-w-lg mx-auto">Apply and get instant access to the full GSF community. Free for 30 days.</p>
          <Link href="/sign-up" className="btn-primary px-8 py-3.5 text-base mx-auto">Join now <ArrowRight className="size-4" /></Link>
        </section>
      </main>
      <Footer />
    </>
  );
}

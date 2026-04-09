import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import {
  Video, MessageSquare, Calendar, Search, Star,
  Clock, ArrowRight, Shield, Zap, Lock
} from "lucide-react";

export const metadata = {
  title: "Connect — GSF | Video Calls & Chat with Experts",
  description: "Book 1-on-1 video calls and chat directly with top startup mentors and venture creators on GSF.",
};

const EXPERTS = [
  {
    name: "Dr. Anika Patel",
    role: "Partner, Sequoia Capital India",
    domain: "Fundraising & VC",
    rating: 4.9,
    sessions: 48,
    available: true,
    tags: ["Fundraising", "SaaS", "EdTech"],
    initials: "AP",
    color: "#2233FF",
    price: "Free (30-day trial)",
  },
  {
    name: "James Whitfield",
    role: "Founder (Exited $1B+)",
    domain: "Scaling & Product",
    rating: 5.0,
    sessions: 62,
    available: true,
    tags: ["Product", "Scale", "B2B"],
    initials: "JW",
    color: "#8855FF",
    price: "Free (30-day trial)",
  },
  {
    name: "Sara Mensah",
    role: "Director of Product, Stripe",
    domain: "Product Strategy",
    rating: 4.8,
    sessions: 35,
    available: false,
    tags: ["APIs", "Growth", "Product"],
    initials: "SM",
    color: "#FF3366",
    price: "Free (30-day trial)",
  },
  {
    name: "Yuki Tanaka",
    role: "Head of Growth, Notion",
    domain: "Growth & PLG",
    rating: 4.9,
    sessions: 41,
    available: true,
    tags: ["PLG", "B2C", "Virality"],
    initials: "YT",
    color: "#00CC88",
    price: "Free (30-day trial)",
  },
  {
    name: "Raj Devani",
    role: "Startup Legal Counsel",
    domain: "Legal & IP",
    rating: 4.7,
    sessions: 29,
    available: true,
    tags: ["Startup Law", "Equity", "IP"],
    initials: "RD",
    color: "#FF8800",
    price: "Free (30-day trial)",
  },
  {
    name: "Fatima Al-Hassan",
    role: "CEO, MedTech Africa",
    domain: "Impact & HealthTech",
    rating: 4.9,
    sessions: 22,
    available: false,
    tags: ["HealthTech", "Impact", "Africa"],
    initials: "FA",
    color: "#00AAFF",
    price: "Free (30-day trial)",
  },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    icon: Search,
    title: "Find your expert",
    desc: "Browse experts by domain — fundraising, product, growth, legal, and more.",
  },
  {
    step: "02",
    icon: Calendar,
    title: "Book a slot",
    desc: "Pick an available time that works. Calendar synced, reminders sent automatically.",
  },
  {
    step: "03",
    icon: Video,
    title: "Join the video call",
    desc: "Meet face-to-face in our built-in video room — no Zoom account needed.",
  },
  {
    step: "04",
    icon: MessageSquare,
    title: "Continue via chat",
    desc: "Follow up, share docs, and get async replies from your expert anytime.",
  },
];

export default function ConnectPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-[#07071A]">
        {/* Hero */}
        <section className="relative section-padding overflow-hidden">
          <div className="absolute inset-0 bg-grid-lines" />
          <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-[#2233FF]/8 blur-[80px] pointer-events-none" />
          <div className="section-container relative z-10 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#2233FF40] bg-[#2233FF15] text-[#6677FF] text-sm font-semibold mb-6" style={{ fontFamily: "'Exo 2', sans-serif" }}>
              <Video className="size-3.5" />
              Live Video + Chat — Like Zoom, built for founders
            </span>
            <h1
              className="text-5xl sm:text-6xl font-black text-white tracking-tight text-balance mb-6"
              style={{ fontFamily: "'Exo 2', sans-serif" }}
            >
              Talk to experts who've{" "}
              <span className="text-gradient-brand">actually built it</span>
            </h1>
            <p className="text-xl text-[#9BA3D4] max-w-2xl mx-auto mb-10">
              Book 1-on-1 video calls with domain-expert mentors. Continue the conversation via direct chat. No middlemen, no gatekeeping.
            </p>

            {/* Pricing note */}
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#12122E] border border-[#1E1E45] mb-12">
              <Shield className="size-5 text-[#6677FF]" />
              <span className="text-sm text-[#9BA3D4]">
                <span className="text-white font-semibold">Free for 30 days</span> — full access to all experts and video calls.
                After that, subscription plans start from ₹999/mo.
              </span>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="section-container pb-20">
          <h2 className="text-2xl font-black text-white mb-8 text-center" style={{ fontFamily: "'Exo 2', sans-serif" }}>
            How it works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {HOW_IT_WORKS.map(({ step, icon: Icon, title, desc }) => (
              <div key={step} className="card p-6 glow-border relative">
                <div className="absolute top-4 right-4 text-4xl font-black text-[#1E1E45]" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                  {step}
                </div>
                <div className="size-10 rounded-xl bg-[#2233FF20] border border-[#2233FF30] flex items-center justify-center mb-4">
                  <Icon className="size-5 text-[#6677FF]" />
                </div>
                <h3 className="font-bold text-white mb-2" style={{ fontFamily: "'Exo 2', sans-serif" }}>{title}</h3>
                <p className="text-sm text-[#9BA3D4] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Expert listing */}
        <section className="bg-[#0D0D24] border-y border-[#1E1E45] py-16">
          <div className="section-container">
            {/* Search / filter bar */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-[#5B6080]" />
                <input
                  id="expert-search"
                  type="text"
                  placeholder="Search experts by name or domain..."
                  className="input pl-10"
                />
              </div>
              <select id="domain-filter" className="input sm:w-48">
                <option value="">All domains</option>
                <option>Fundraising & VC</option>
                <option>Product Strategy</option>
                <option>Growth & PLG</option>
                <option>Legal & IP</option>
                <option>Impact & HealthTech</option>
              </select>
              <select id="availability-filter" className="input sm:w-40">
                <option value="">Any availability</option>
                <option>Available now</option>
                <option>This week</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {EXPERTS.map((expert) => (
                <div key={expert.name} className="card p-6 card-hover flex flex-col gap-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className="size-12 rounded-2xl flex items-center justify-center text-white font-black text-sm"
                        style={{ backgroundColor: expert.color + "33", border: `1px solid ${expert.color}40`, color: expert.color, fontFamily: "'Exo 2', sans-serif" }}
                      >
                        {expert.initials}
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-sm" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                          {expert.name}
                        </h3>
                        <p className="text-xs text-[#9BA3D4]">{expert.role}</p>
                      </div>
                    </div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${expert.available ? 'bg-green-500/15 text-green-400 border border-green-500/20' : 'bg-[#1E1E45] text-[#5B6080]'}`}>
                      {expert.available ? "● Available" : "Busy"}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#2233FF20] text-[#6677FF]">
                      {expert.domain}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-[#9BA3D4]">
                      <Star className="size-3 text-yellow-400 fill-yellow-400" />
                      {expert.rating}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-[#5B6080]">
                      <Clock className="size-3" />
                      {expert.sessions} sessions
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {expert.tags.map((tag) => (
                      <span key={tag} className="text-xs text-[#5B6080] bg-[#1E1E45] px-2 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 pt-4 border-t border-[#1E1E45]">
                    <Link
                      href="/sign-up"
                      className="flex-1 btn-primary py-2 text-sm justify-center"
                    >
                      <Video className="size-4" />
                      Book Video Call
                    </Link>
                    <Link
                      href="/sign-up"
                      className="btn-outline py-2 px-3"
                      title="Chat"
                    >
                      <MessageSquare className="size-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Subscription CTA */}
        <section className="section-container py-20 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2233FF15] border border-[#2233FF30] text-[#6677FF] text-sm font-semibold mb-6" style={{ fontFamily: "'Exo 2', sans-serif" }}>
              <Zap className="size-3.5" />
              Pricing — Simple & Transparent
            </div>
            <h2 className="text-3xl font-black text-white mb-4" style={{ fontFamily: "'Exo 2', sans-serif" }}>
              Start free. Scale when you're ready.
            </h2>
            <p className="text-[#9BA3D4] mb-10">
              Every student gets full platform access for 30 days — no credit card required. After that, pick a plan that fits your journey.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
              {[
                { name: "Explorer", price: "Free", period: "30 days", features: ["5 video calls/month", "Chat with experts", "Venture browsing", "Community access"] },
                { name: "Builder", price: "₹999", period: "/month", features: ["Unlimited video calls", "Priority booking", "List 3 ventures", "Direct expert chat", "All features"], highlight: true },
                { name: "Founder", price: "₹2,499", period: "/month", features: ["Everything in Builder", "Unlimited ventures", "Investor intros", "Equity deal support", "Dedicated advisor"] },
              ].map((plan) => (
                <div
                  key={plan.name}
                  className={`card p-6 flex flex-col ${plan.highlight ? 'glow-border border-[#2233FF40]' : ''}`}
                >
                  {plan.highlight && (
                    <div className="text-xs font-bold text-[#6677FF] uppercase tracking-wider mb-3" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                      Most Popular
                    </div>
                  )}
                  <div className="font-black text-lg text-white mb-1" style={{ fontFamily: "'Exo 2', sans-serif" }}>{plan.name}</div>
                  <div className="mb-5">
                    <span className="text-3xl font-black text-white" style={{ fontFamily: "'Exo 2', sans-serif" }}>{plan.price}</span>
                    <span className="text-sm text-[#5B6080]">{plan.period}</span>
                  </div>
                  <ul className="space-y-2.5 flex-1 mb-6">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-[#9BA3D4]">
                        <span className="size-1.5 rounded-full bg-[#2233FF] shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/sign-up" className={plan.highlight ? "btn-primary justify-center" : "btn-outline justify-center"}>
                    Get started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

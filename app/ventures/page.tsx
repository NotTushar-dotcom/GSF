import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import {
  Lightbulb, TrendingUp, DollarSign, ArrowRight, Search,
  Filter, Eye, Heart, MessageSquare, Shield, Percent
} from "lucide-react";

export const metadata = {
  title: "Ventures — GSF | Startup Ideas & Equity Funding",
  description: "Discover student startup ideas, invest with equity, and help the next generation of founders. GSF takes a 1–2% platform fee on all deals.",
};

const VENTURES = [
  {
    id: "edloop",
    name: "EduLoop",
    tagline: "AI-powered personalized learning paths for college students",
    founder: "Priya Sharma",
    founderInitials: "PS",
    color: "#2233FF",
    stage: "Pre-seed",
    sector: "EdTech",
    seeking: "₹15L",
    equity: "8%",
    traction: "200 beta users, 3 college partners",
    views: 342,
    interested: 12,
    daysLeft: 18,
    description: "EduLoop uses AI to generate personalized study paths based on a student's learning style, pace, and goals. We've integrated with 3 college LMS systems in pilot.",
    tags: ["EdTech", "AI", "B2C"],
  },
  {
    id: "supplify",
    name: "Supplify",
    tagline: "One-click supply chain management for D2C brands under ₹5Cr revenue",
    founder: "Marcus Chen",
    founderInitials: "MC",
    color: "#8855FF",
    stage: "Seed",
    sector: "B2B SaaS",
    seeking: "₹50L",
    equity: "12%",
    traction: "₹2L MRR, 28 paying customers",
    views: 891,
    interested: 34,
    daysLeft: 7,
    description: "Supplify automates procurement, inventory tracking, and vendor management for small D2C brands. Our customers save 12+ hours/week on ops work.",
    tags: ["B2B SaaS", "Supply Chain", "D2C"],
  },
  {
    id: "healthbridge",
    name: "HealthBridge",
    tagline: "Telemedicine for tier-2 and tier-3 India with vernacular language support",
    founder: "Aisha Okafor",
    founderInitials: "AO",
    color: "#00CC88",
    stage: "Pre-seed",
    sector: "HealthTech",
    seeking: "₹25L",
    equity: "10%",
    traction: "450 consultations in pilot phase",
    views: 567,
    interested: 21,
    daysLeft: 22,
    description: "HealthBridge connects patients in rural India to qualified doctors via video, with full support in 8 regional languages. Built on top of the Ayushman Bharat API.",
    tags: ["HealthTech", "Rural India", "Telemedicine"],
  },
  {
    id: "farmiq",
    name: "FarmIQ",
    tagline: "IoT crop monitoring platform that predicts yield loss before it happens",
    founder: "Rohan Verma",
    founderInitials: "RV",
    color: "#FF8800",
    stage: "Idea",
    sector: "AgriTech",
    seeking: "₹8L",
    equity: "15%",
    traction: "2 pilot farms, MVP live",
    views: 210,
    interested: 8,
    daysLeft: 30,
    description: "FarmIQ uses affordable IoT sensors + satellite data to give small farmers real-time crop health monitoring and AI-based yield predictions.",
    tags: ["AgriTech", "IoT", "AI"],
  },
  {
    id: "cargolink",
    name: "CargoLink",
    tagline: "Marketplace connecting truck owners to last-mile delivery companies",
    founder: "Aditi Nair",
    founderInitials: "AN",
    color: "#FF3366",
    stage: "Seed",
    sector: "Logistics",
    seeking: "₹1Cr",
    equity: "15%",
    traction: "₹8L GMV in 3 months, 45 trucks",
    views: 1203,
    interested: 47,
    daysLeft: 5,
    description: "CargoLink is the Uber for trucks — connecting truck owners with excess capacity to D2C and e-comm companies needing last-mile delivery at 30% lower cost.",
    tags: ["Logistics", "Marketplace", "B2B"],
  },
  {
    id: "finflow",
    name: "FinFlow",
    tagline: "Automated GST filing and tax compliance for freelancers and solopreneurs",
    founder: "Kunal Desai",
    founderInitials: "KD",
    color: "#00AAFF",
    stage: "Pre-seed",
    sector: "FinTech",
    seeking: "₹20L",
    equity: "10%",
    traction: "800 waitlist signups, MVP in 2 weeks",
    views: 445,
    interested: 19,
    daysLeft: 14,
    description: "FinFlow makes GST filing dead simple for India's 50M+ freelancers — auto-import transactions, one-click filing, and proactive tax reminders.",
    tags: ["FinTech", "GST", "Freelancers"],
  },
];

const STAGES = ["All", "Idea", "Pre-seed", "Seed"];
const SECTORS = ["All", "EdTech", "B2B SaaS", "HealthTech", "AgriTech", "Logistics", "FinTech"];

export default function VenturesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-[#07071A]">
        {/* Hero */}
        <section className="relative section-padding overflow-hidden">
          <div className="absolute inset-0 bg-grid-lines" />
          <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-[#8855FF]/8 blur-[80px] pointer-events-none" />
          <div className="section-container relative z-10">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#8855FF40] bg-[#8855FF15] text-[#AA88FF] text-sm font-semibold mb-6" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                <Lightbulb className="size-3.5" />
                Student Venture Marketplace
              </span>
              <h1
                className="text-5xl sm:text-6xl font-black text-white tracking-tight mb-6"
                style={{ fontFamily: "'Exo 2', sans-serif" }}
              >
                Fund the next big idea.{" "}
                <span className="text-gradient-brand">Before it's big.</span>
              </h1>
              <p className="text-xl text-[#9BA3D4] leading-relaxed mb-8 max-w-2xl">
                Students list their startup ideas. Venture creators and investors fund them with equity. GSF takes a transparent <strong className="text-white">1–2% platform fee</strong> on completed deals — that's it.
              </p>

              {/* Commission note */}
              <div className="flex flex-wrap gap-4">
                <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#12122E] border border-[#1E1E45]">
                  <Percent className="size-5 text-[#AA88FF]" />
                  <div>
                    <div className="text-xs text-[#5B6080] uppercase tracking-wider">GSF Platform Fee</div>
                    <div className="text-white font-bold" style={{ fontFamily: "'Exo 2', sans-serif" }}>1–2% on equity deals</div>
                  </div>
                </div>
                <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#12122E] border border-[#1E1E45]">
                  <Shield className="size-5 text-[#6677FF]" />
                  <div>
                    <div className="text-xs text-[#5B6080] uppercase tracking-wider">Deal Protection</div>
                    <div className="text-white font-bold" style={{ fontFamily: "'Exo 2', sans-serif" }}>Escrow on all trades</div>
                  </div>
                </div>
                <Link
                  href="/sign-up"
                  className="btn-primary"
                >
                  <Lightbulb className="size-4" />
                  List Your Venture
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="section-container pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            {[
              { step: "01", icon: Lightbulb, title: "Student lists idea", desc: "Submit your startup idea, traction, and equity offer" },
              { step: "02", icon: Eye, title: "Investors browse", desc: "Venture creators and investors review and show interest" },
              { step: "03", icon: MessageSquare, title: "Connect & negotiate", desc: "Video call and chat to finalize terms" },
              { step: "04", icon: DollarSign, title: "Deal closes", desc: "GSF collects 1–2% fee. You keep the rest." },
            ].map(({ step, icon: Icon, title, desc }) => (
              <div key={step} className="card p-5 relative">
                <div className="text-5xl font-black text-[#1E1E45] absolute top-3 right-3" style={{ fontFamily: "'Exo 2', sans-serif" }}>{step}</div>
                <div className="size-9 rounded-lg bg-[#8855FF20] border border-[#8855FF30] flex items-center justify-center mb-4">
                  <Icon className="size-4 text-[#AA88FF]" />
                </div>
                <h3 className="font-bold text-white text-sm mb-1" style={{ fontFamily: "'Exo 2', sans-serif" }}>{title}</h3>
                <p className="text-xs text-[#9BA3D4] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Filters */}
        <section className="bg-[#0D0D24] border-y border-[#1E1E45] py-8">
          <div className="section-container">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-[#5B6080]" />
                <input id="venture-search" type="text" placeholder="Search by idea, founder, or sector..." className="input pl-10" />
              </div>
              <select id="stage-filter" className="input sm:w-36">
                {STAGES.map((s) => <option key={s}>{s}</option>)}
              </select>
              <select id="sector-filter" className="input sm:w-40">
                {SECTORS.map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>

            {/* Ventures grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {VENTURES.map((v) => (
                <div key={v.id} className="card card-hover p-6 flex flex-col gap-4">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="size-11 rounded-xl flex items-center justify-center text-sm font-black"
                        style={{ backgroundColor: v.color + "25", border: `1px solid ${v.color}35`, color: v.color, fontFamily: "'Exo 2', sans-serif" }}
                      >
                        {v.founderInitials}
                      </div>
                      <div>
                        <h2 className="font-black text-white text-base" style={{ fontFamily: "'Exo 2', sans-serif" }}>{v.name}</h2>
                        <p className="text-xs text-[#5B6080]">by {v.founder}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#2233FF20] text-[#6677FF]" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                        {v.stage}
                      </span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${v.daysLeft <= 7 ? 'text-red-400 bg-red-500/10' : 'text-[#5B6080] bg-[#1E1E45]'}`}>
                        {v.daysLeft}d left
                      </span>
                    </div>
                  </div>

                  <p className="text-sm font-medium text-[#F0F0FF]">{v.tagline}</p>
                  <p className="text-sm text-[#9BA3D4] leading-relaxed">{v.description}</p>

                  {/* Deal terms */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "Seeking", value: v.seeking },
                      { label: "Equity", value: v.equity },
                      { label: "Traction", value: v.traction },
                    ].map(({ label, value }) => (
                      <div key={label} className="bg-[#0D0D24] border border-[#1E1E45] rounded-xl p-3">
                        <div className="text-xs text-[#5B6080] uppercase tracking-wider mb-1">{label}</div>
                        <div className="text-sm font-bold text-white" style={{ fontFamily: "'Exo 2', sans-serif" }}>{value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {v.tags.map((tag) => (
                      <span key={tag} className="text-xs text-[#5B6080] bg-[#1E1E45] px-2 py-0.5 rounded-full">{tag}</span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-[#1E1E45]">
                    <div className="flex items-center gap-4 text-xs text-[#5B6080]">
                      <span className="flex items-center gap-1.5"><Eye className="size-3.5" />{v.views}</span>
                      <span className="flex items-center gap-1.5"><Heart className="size-3.5 text-red-400" />{v.interested} interested</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Link href="/sign-up" className="btn-outline py-1.5 px-3 text-xs">
                        <MessageSquare className="size-3.5" />
                        Chat
                      </Link>
                      <Link href="/sign-up" className="btn-primary py-1.5 px-4 text-xs">
                        <TrendingUp className="size-3.5" />
                        Fund This
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* List your venture CTA */}
        <section className="section-container py-20 text-center">
          <div className="max-w-2xl mx-auto">
            <div
              className="relative card p-10 glow-border overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#2233FF]/5 to-[#8855FF]/5" />
              <div className="relative z-10">
                <div className="size-14 rounded-2xl bg-[#2233FF20] border border-[#2233FF30] flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="size-7 text-[#6677FF]" />
                </div>
                <h2 className="text-3xl font-black text-white mb-4" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                  Have a startup idea?
                </h2>
                <p className="text-[#9BA3D4] mb-8">
                  List your venture on GSF, connect with investors, and get the funding you need to build. GSF only earns when you do — 1–2% on successful deals.
                </p>
                <Link href="/sign-up" className="btn-primary mx-auto text-base px-8 py-3.5">
                  <Lightbulb className="size-5" />
                  List Your Startup Idea
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

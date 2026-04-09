import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { Lightbulb, TrendingUp, MessageSquare, Shield, Percent, Eye, Heart, Search, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Ventures — GSF | Startup Ideas & Equity Funding",
  description: "Discover student startup ideas, invest with equity. GSF takes 1–2% on deals.",
};

// ideaStage = where the idea actually is in development (independent of funding stage)
const VENTURES = [
  { id: "edloop", name: "EduLoop", tagline: "AI-powered personalized learning paths for college students", founder: "Priya Sharma", initials: "PS", fundingStage: "Pre-seed", ideaStage: "Prototype", sector: "EdTech", seeking: "₹15L", equity: "8%", traction: "200 beta users, 3 college partners", views: 342, interested: 12, daysLeft: 18, description: "EduLoop uses AI to generate personalized study paths based on a student's learning style, pace, and goals.", tags: ["EdTech", "AI", "B2C"] },
  { id: "supplify", name: "Supplify", tagline: "One-click supply chain management for D2C brands under ₹5Cr revenue", founder: "Marcus Chen", initials: "MC", fundingStage: "Seed", ideaStage: "Traction", sector: "B2B SaaS", seeking: "₹50L", equity: "12%", traction: "₹2L MRR, 28 paying customers", views: 891, interested: 34, daysLeft: 7, description: "Supplify automates procurement, inventory tracking, and vendor management for small D2C brands.", tags: ["B2B SaaS", "Supply Chain", "D2C"] },
  { id: "healthbridge", name: "HealthBridge", tagline: "Telemedicine for tier-2 India with vernacular language support", founder: "Aisha Okafor", initials: "AO", fundingStage: "Pre-seed", ideaStage: "MVP", sector: "HealthTech", seeking: "₹25L", equity: "10%", traction: "450 consultations in pilot phase", views: 567, interested: 21, daysLeft: 22, description: "HealthBridge connects patients in rural India to qualified doctors via video, with support in 8 regional languages.", tags: ["HealthTech", "Rural India", "Telemedicine"] },
  { id: "farmiq", name: "FarmIQ", tagline: "IoT crop monitoring that predicts yield loss before it happens", founder: "Rohan Verma", initials: "RV", fundingStage: "Pre-seed", ideaStage: "Idea", sector: "AgriTech", seeking: "₹8L", equity: "15%", traction: "2 pilot farms, MVP live", views: 210, interested: 8, daysLeft: 30, description: "FarmIQ uses affordable IoT sensors + satellite data to give small farmers real-time crop health monitoring.", tags: ["AgriTech", "IoT", "AI"] },
  { id: "cargolink", name: "CargoLink", tagline: "Marketplace connecting truck owners to last-mile delivery companies", founder: "Aditi Nair", initials: "AN", fundingStage: "Seed", ideaStage: "Business Model", sector: "Logistics", seeking: "₹1Cr", equity: "15%", traction: "₹8L GMV in 3 months, 45 trucks", views: 1203, interested: 47, daysLeft: 5, description: "CargoLink is the Uber for trucks — connecting surplus capacity to D2C and e-comm companies at 30% lower cost.", tags: ["Logistics", "Marketplace", "B2B"] },
  { id: "finflow", name: "FinFlow", tagline: "Automated GST filing for India's 50M+ freelancers", founder: "Kunal Desai", initials: "KD", fundingStage: "Pre-seed", ideaStage: "Prototype", sector: "FinTech", seeking: "₹20L", equity: "10%", traction: "800 waitlist signups", views: 445, interested: 19, daysLeft: 14, description: "FinFlow makes GST filing dead simple for freelancers — auto-import transactions, one-click filing, proactive reminders.", tags: ["FinTech", "GST", "Freelancers"] },
];

const IDEA_STAGE_STYLES: Record<string, { bg: string; text: string; border: string; emoji: string }> = {
  "Idea":          { bg: "#F3E3D0", text: "#5B4A3A", border: "#D2C4B4", emoji: "💡" },
  "Prototype":     { bg: "#EEF4F9", text: "#3D74A0", border: "#AACDDC", emoji: "🔧" },
  "MVP":           { bg: "#EDF7F0", text: "#1A6B40", border: "#9FD9BA", emoji: "🚀" },
  "Traction":      { bg: "#FFF4E5", text: "#8B5E00", border: "#F5C97A", emoji: "📈" },
  "Business Model":{ bg: "#F0EEF9", text: "#4A3B8C", border: "#B8AEE4", emoji: "💼" },
};

const FUNDING_STAGE_STYLES: Record<string, string> = {
  "Idea": "badge-warm", "Pre-seed": "badge-blue", "Seed": "badge-blue",
};

export default function VenturesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-[#FDFAF7]">

        {/* Hero */}
        <section className="relative section-padding overflow-hidden bg-soft-pattern">
          <div className="absolute inset-0 bg-dot-grid opacity-25" />
          <div className="section-container relative z-10">
            <div className="max-w-3xl">
              <span className="badge badge-warm mb-6">
                <Lightbulb className="size-3.5" />
                Student Venture Marketplace
              </span>
              <h1 className="text-5xl sm:text-6xl text-[#1A2332] tracking-tight mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                Fund the next big idea.{" "}
                <em className="not-italic text-gradient-primary">Before it's big.</em>
              </h1>
              <p className="text-xl text-[#4A5668] leading-relaxed mb-8 max-w-2xl">
                Students list startup ideas with equity terms. Venture creators fund them directly.
                GSF takes a transparent <strong className="text-[#1A2332]">1–2% platform fee</strong> on completed deals.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white border border-[#D2C4B4] shadow-soft-sm">
                  <Percent className="size-5 text-[#81A6C6]" />
                  <div>
                    <div className="text-xs text-[#8A95A3] uppercase tracking-wider">GSF Platform Fee</div>
                    <div className="text-[#1A2332] font-semibold text-sm">1–2% on equity deals</div>
                  </div>
                </div>
                <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white border border-[#D2C4B4] shadow-soft-sm">
                  <Shield className="size-5 text-[#81A6C6]" />
                  <div>
                    <div className="text-xs text-[#8A95A3] uppercase tracking-wider">Deal Protection</div>
                    <div className="text-[#1A2332] font-semibold text-sm">Escrow on all trades</div>
                  </div>
                </div>
                <Link href="/sign-up" className="btn-primary">
                  <Lightbulb className="size-4" /> List Your Venture
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="section-container pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            {[
              { step: "01", icon: Lightbulb, title: "Student lists idea", desc: "Submit startup, equity offer, idea stage, and traction metrics" },
              { step: "02", icon: Eye, title: "Investors browse", desc: "Venture creators and investors review and show interest" },
              { step: "03", icon: MessageSquare, title: "Connect & negotiate", desc: "Video call and chat to finalise terms" },
              { step: "04", icon: TrendingUp, title: "Deal closes", desc: "GSF collects 1–2% fee. You keep the rest." },
            ].map(({ step, icon: Icon, title, desc }) => (
              <div key={step} className="card p-5 relative bg-white">
                <div className="text-4xl font-bold text-[#F3E3D0] absolute top-3 right-3 select-none"
                  style={{ fontFamily: "'Playfair Display', serif" }}>{step}</div>
                <div className="size-9 rounded-lg bg-[#F3E3D0] border border-[#D2C4B4] flex items-center justify-center mb-4">
                  <Icon className="size-4 text-[#5B4A3A]" />
                </div>
                <h3 className="font-semibold text-[#1A2332] text-sm mb-1">{title}</h3>
                <p className="text-xs text-[#4A5668] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Filter + Grid */}
        <section className="bg-[#F7F2EC] border-y border-[#D2C4B4] py-12">
          <div className="section-container">
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-[#8A95A3]" />
                <input id="venture-search" type="text" placeholder="Search by idea, founder, or sector..." className="input pl-10" />
              </div>
              <select id="stage-filter" className="input sm:w-40">
                {["All stages", "Idea", "Prototype", "MVP", "Traction", "Business Model"].map((s) => <option key={s}>{s}</option>)}
              </select>
              <select id="sector-filter" className="input sm:w-40">
                {["All sectors", "EdTech", "B2B SaaS", "HealthTech", "AgriTech", "Logistics", "FinTech"].map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {VENTURES.map((v) => {
                const stageStyle = IDEA_STAGE_STYLES[v.ideaStage] || IDEA_STAGE_STYLES["Idea"];
                return (
                  <div key={v.id} className="card card-hover p-6 flex flex-col gap-4 bg-white">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="size-11 rounded-full bg-[#EEF4F9] border border-[#AACDDC] flex items-center justify-center text-sm font-bold text-[#3D74A0]">
                          {v.initials}
                        </div>
                        <div>
                          <h2 className="font-bold text-[#1A2332] text-base">{v.name}</h2>
                          <p className="text-xs text-[#8A95A3]">by {v.founder}</p>
                          <span className={`badge mt-1 text-[10px] ${FUNDING_STAGE_STYLES[v.fundingStage] || "badge-blue"}`}>{v.fundingStage}</span>
                        </div>
                      </div>
                      <span className={`text-xs px-2 py-0.5 rounded-full shrink-0 ${v.daysLeft <= 7 ? 'text-red-600 bg-red-50 border border-red-100' : 'text-[#8A95A3] bg-[#F3E3D0]'}`}>
                        {v.daysLeft}d left
                      </span>
                    </div>

                    <p className="text-sm font-medium text-[#1A2332]">{v.tagline}</p>
                    <p className="text-sm text-[#4A5668] leading-relaxed">{v.description}</p>

                    {/* Idea stage indicator — shown above equity metrics */}
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#8A95A3]">Idea Stage</span>
                      <span
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border"
                        style={{ background: stageStyle.bg, color: stageStyle.text, borderColor: stageStyle.border }}
                      >
                        {stageStyle.emoji} {v.ideaStage}
                      </span>
                    </div>

                    {/* Equity metrics */}
                    <div className="grid grid-cols-3 gap-3">
                      {[{ label: "Seeking", value: v.seeking }, { label: "Equity", value: v.equity }, { label: "Traction", value: v.traction }].map(({ label, value }) => (
                        <div key={label} className="bg-[#F7F2EC] border border-[#D2C4B4] rounded-xl p-3">
                          <div className="text-[10px] text-[#8A95A3] uppercase tracking-wider mb-1">{label}</div>
                          <div className="text-sm font-semibold text-[#1A2332] truncate" title={value}>{value}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {v.tags.map((tag) => (
                        <span key={tag} className="text-xs text-[#4A5668] bg-[#F3E3D0] border border-[#D2C4B4] px-2 py-0.5 rounded-full">{tag}</span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-[#D2C4B4]">
                      <div className="flex items-center gap-4 text-xs text-[#8A95A3]">
                        <span className="flex items-center gap-1.5"><Eye className="size-3.5" />{v.views}</span>
                        <span className="flex items-center gap-1.5"><Heart className="size-3.5 text-red-400" />{v.interested} interested</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Link href="/sign-up" className="btn-outline py-1.5 px-3 text-xs"><MessageSquare className="size-3.5" /> Chat</Link>
                        <Link href="/sign-up" className="btn-primary py-1.5 px-4 text-xs"><TrendingUp className="size-3.5" /> Fund This</Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-container py-20 text-center">
          <div className="max-w-2xl mx-auto card p-10 bg-[#F3E3D0] border-[#D2C4B4]">
            <div className="size-14 rounded-2xl bg-white border border-[#D2C4B4] flex items-center justify-center mx-auto mb-6 shadow-soft-sm">
              <Lightbulb className="size-7 text-[#81A6C6]" />
            </div>
            <h2 className="text-3xl text-[#1A2332] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Have a startup idea?
            </h2>
            <p className="text-[#4A5668] mb-8">
              List your venture on GSF. Connect with investors. GSF only earns when you do — 1–2% on successful deals.
            </p>
            <Link href="/sign-up" className="btn-primary mx-auto text-base px-8 py-3.5">
              <Lightbulb className="size-5" /> List Your Startup Idea
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

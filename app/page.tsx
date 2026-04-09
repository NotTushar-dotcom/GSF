import { HeroSection } from "@/components/landing/HeroSection";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { Video, Lightbulb, Users, ArrowRight, Percent, Shield, Zap, MessageSquare, TrendingUp, Star } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />

        {/* Core platform features */}
        <section className="bg-[#0D0D24] border-y border-[#1E1E45] py-20">
          <div className="section-container">
            <div className="text-center mb-14">
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-4" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                Two platforms. One mission.
              </h2>
              <p className="text-[#9BA3D4] text-lg max-w-xl mx-auto">
                Connect with experts who've done it. Fund ideas that will shape the future.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Connect card */}
              <div className="card p-8 glow-border relative overflow-hidden group hover:-translate-y-1 transition-transform duration-200">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#2233FF]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                <div className="relative z-10">
                  <div className="size-14 rounded-2xl bg-[#2233FF20] border border-[#2233FF30] flex items-center justify-center mb-6">
                    <Video className="size-7 text-[#6677FF]" />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-3" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                    Connect
                  </h3>
                  <p className="text-[#9BA3D4] leading-relaxed mb-6">
                    Book 1-on-1 video calls with world-class startup mentors. Continue the conversation via chat. Like Zoom — but for founders who mean business.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {["Live Video Calls", "Expert Chat", "Calendar Booking", "Session Notes"].map((f) => (
                      <span key={f} className="text-xs text-[#6677FF] bg-[#2233FF15] border border-[#2233FF20] px-2.5 py-1 rounded-full font-medium">
                        {f}
                      </span>
                    ))}
                  </div>
                  <Link href="/connect" className="btn-primary text-sm px-6 py-2.5">
                    Find an Expert <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>

              {/* Ventures card */}
              <div className="card p-8 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-200" style={{ borderColor: '#8855FF25' }}>
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#8855FF]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                <div className="relative z-10">
                  <div className="size-14 rounded-2xl bg-[#8855FF20] border border-[#8855FF30] flex items-center justify-center mb-6">
                    <Lightbulb className="size-7 text-[#AA88FF]" />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-3" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                    Ventures
                  </h3>
                  <p className="text-[#9BA3D4] leading-relaxed mb-6">
                    Students list startup ideas. Venture creators fund them with equity. GSF earns a transparent 1–2% fee on successful deals — you keep the rest.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {["Equity Deals", "Investor Network", "1–2% Fee Only", "Escrow Protected"].map((f) => (
                      <span key={f} className="text-xs text-[#AA88FF] bg-[#8855FF15] border border-[#8855FF20] px-2.5 py-1 rounded-full font-medium">
                        {f}
                      </span>
                    ))}
                  </div>
                  <Link href="/ventures" className="inline-flex items-center gap-2 bg-[#8855FF] text-white font-bold px-6 py-2.5 rounded-xl hover:bg-[#7744EE] transition-colors text-sm shadow-[0_0_20px_rgba(136,85,255,0.3)]">
                    Browse Ventures <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How the business model works */}
        <section className="section-container section-padding">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2233FF15] border border-[#2233FF30] text-[#6677FF] text-sm font-semibold mb-4" style={{ fontFamily: "'Exo 2', sans-serif" }}>
              <Percent className="size-3.5" />
              Transparent revenue model
            </span>
            <h2 className="text-4xl font-black text-white mb-4" style={{ fontFamily: "'Exo 2', sans-serif" }}>
              We only win when you win
            </h2>
            <p className="text-[#9BA3D4] max-w-xl mx-auto">
              No hidden fees. No bloated middlemen. A pricing model that aligns our success with yours.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                color: "#2233FF",
                title: "30 Days Free",
                desc: "Every new student gets full platform access for 30 days. No credit card. No tricks. Explore, connect, and build before you pay a rupee.",
                note: "₹0 — full access",
              },
              {
                icon: Video,
                color: "#8855FF",
                title: "Expert Connect Plans",
                desc: "After the free trial, subscribe to continue accessing video calls and expert chat. Plans start at ₹999/month — less than a single bad decision costs.",
                note: "From ₹999/month",
              },
              {
                icon: Percent,
                color: "#00CC88",
                title: "1–2% on Deals",
                desc: "When a student's venture gets funded, GSF takes a 1–2% platform commission on the deal value. That's the only cut. The rest goes straight to the founder.",
                note: "1–2% platform fee only",
              },
            ].map(({ icon: Icon, color, title, desc, note }) => (
              <div key={title} className="card p-7 card-hover">
                <div className="size-12 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: color + "20", border: `1px solid ${color}30` }}>
                  <Icon className="size-6" style={{ color }} />
                </div>
                <h3 className="text-lg font-black text-white mb-3" style={{ fontFamily: "'Exo 2', sans-serif" }}>{title}</h3>
                <p className="text-sm text-[#9BA3D4] leading-relaxed mb-4">{desc}</p>
                <span className="text-xs font-bold uppercase tracking-wider" style={{ color, fontFamily: "'Exo 2', sans-serif" }}>{note}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Expert network teaser */}
        <section className="bg-[#0D0D24] border-t border-[#1E1E45] section-padding">
          <div className="section-container">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="max-w-xl">
                <h2 className="text-4xl font-black text-white mb-4" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                  40+ experts.<br /><span className="text-gradient-primary">Zero gatekeepers.</span>
                </h2>
                <p className="text-[#9BA3D4] leading-relaxed mb-6">
                  VCs, founders who've exited, product leaders, legal experts — every GSF expert is vetted, available, and ready to give you 45 minutes of real talk.
                </p>
                <Link href="/experts" className="btn-primary text-base px-7 py-3">
                  <Users className="size-5" />
                  Meet the Experts
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-3 w-full max-w-xs lg:max-w-sm">
                {[
                  { initials: "AP", color: "#2233FF", name: "Anika P.", role: "VC Partner" },
                  { initials: "JW", color: "#8855FF", name: "James W.", role: "Founder" },
                  { initials: "SM", color: "#FF3366", name: "Sara M.", role: "Product" },
                  { initials: "YT", color: "#00CC88", name: "Yuki T.", role: "Growth" },
                  { initials: "RD", color: "#FF8800", name: "Raj D.", role: "Legal" },
                  { initials: "FA", color: "#00AAFF", name: "Fatima A.", role: "Impact" },
                ].map((e) => (
                  <div key={e.initials} className="card p-3 text-center card-hover">
                    <div
                      className="size-10 rounded-xl mx-auto mb-2 flex items-center justify-center text-xs font-black"
                      style={{ backgroundColor: e.color + "25", color: e.color, fontFamily: "'Exo 2', sans-serif" }}
                    >
                      {e.initials}
                    </div>
                    <div className="text-xs font-bold text-white truncate" style={{ fontFamily: "'Exo 2', sans-serif" }}>{e.name}</div>
                    <div className="text-[10px] text-[#5B6080]">{e.role}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-container py-24 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-5xl font-black text-white mb-4" style={{ fontFamily: "'Exo 2', sans-serif" }}>
              A Society for Founders.
            </h2>
            <p className="text-2xl font-bold text-gradient-brand mb-8" style={{ fontFamily: "'Exo 2', sans-serif" }}>
              Not Talkers.
            </p>
            <p className="text-[#9BA3D4] text-lg mb-10">
              30 days free. No credit card. Start today.
            </p>
            <Link href="/sign-up" className="btn-primary text-lg px-10 py-4 mx-auto">
              <Zap className="size-6" />
              Join GSF Free
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

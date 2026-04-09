import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowRight, Star, MessageSquare, Video, Search } from "lucide-react";

export const metadata = {
  title: "Experts — GSF | World-Class Startup Mentors",
  description: "Connect via video call or chat with top startup mentors, VCs, and domain experts on GSF.",
};

const EXPERTS = [
  { name: "Dr. Anika Patel", role: "Partner, Sequoia Capital India", domain: "Venture Capital", tags: ["Fundraising", "SaaS", "EdTech"], bio: "10+ years investing in early-stage startups. Led investments in 40+ companies including 3 unicorns.", initials: "AP", color: "#2233FF", sessions: 48, rating: 4.9, available: true },
  { name: "James Whitfield", role: "Co-founder, Razorpay (exited)", domain: "Fintech & Scaling", tags: ["Product", "Scale", "B2B"], bio: "Built Razorpay from 0 to $1B valuation. Now advising the next generation of fintech founders.", initials: "JW", color: "#8855FF", sessions: 62, rating: 5.0, available: true },
  { name: "Sara Mensah", role: "Director of Product, Stripe", domain: "Product Strategy", tags: ["Product Strategy", "APIs", "Growth"], bio: "Scaled Stripe's developer platform to 10M+ developers. Ex-Google, ex-Airbnb.", initials: "SM", color: "#FF3366", sessions: 35, rating: 4.8, available: false },
  { name: "Raj Devani", role: "General Counsel, YC S22 Startup", domain: "Legal & IP", tags: ["Startup Law", "IP", "Fundraising Docs"], bio: "Specialized in startup formation, equity structuring, and IP for early-stage companies.", initials: "RD", color: "#FF8800", sessions: 29, rating: 4.7, available: true },
  { name: "Yuki Tanaka", role: "Head of Growth, Notion", domain: "Growth & PLG", tags: ["PLG", "B2C", "Virality"], bio: "Pioneered product-led growth at Notion. Grew Notion from 1M to 30M users in 18 months.", initials: "YT", color: "#00CC88", sessions: 41, rating: 4.9, available: true },
  { name: "Fatima Al-Hassan", role: "CEO, MedTech Africa", domain: "HealthTech & Impact", tags: ["HealthTech", "Impact", "Africa"], bio: "Building healthcare infrastructure for underserved markets. WHO Young Innovator 2023.", initials: "FA", color: "#00AAFF", sessions: 22, rating: 4.9, available: false },
];

export default function ExpertsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-[#07071A]">
        <section className="relative section-padding overflow-hidden">
          <div className="absolute inset-0 bg-grid-lines" />
          <div className="section-container relative z-10 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#2233FF40] bg-[#2233FF15] text-[#6677FF] text-sm font-semibold mb-6" style={{ fontFamily: "'Exo 2', sans-serif" }}>
              <Star className="size-3.5" />
              40+ world-class mentors
            </span>
            <h1 className="text-5xl sm:text-6xl font-black text-white tracking-tight mb-6" style={{ fontFamily: "'Exo 2', sans-serif" }}>
              Learn from founders{" "}
              <span className="text-gradient-brand">who've done it</span>
            </h1>
            <p className="text-xl text-[#9BA3D4] max-w-2xl mx-auto mb-10">
              Book video calls and chat directly with operators, investors, and domain experts. No gatekeeping — available directly to you via GSF Connect.
            </p>
            <div className="flex items-center gap-3 max-w-md mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-[#5B6080]" />
                <input id="expert-search" type="text" placeholder="Search experts..." className="input pl-10" />
              </div>
              <Link href="/connect" className="btn-primary whitespace-nowrap">
                Book a Call
              </Link>
            </div>
          </div>
        </section>

        <section className="section-container pb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {EXPERTS.map((expert) => (
              <div key={expert.name} className="card p-6 card-hover flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <div className="size-12 rounded-2xl flex items-center justify-center text-sm font-black shrink-0" style={{ backgroundColor: expert.color + "25", color: expert.color, fontFamily: "'Exo 2', sans-serif" }}>
                    {expert.initials}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <h2 className="text-sm font-bold text-white truncate" style={{ fontFamily: "'Exo 2', sans-serif" }}>{expert.name}</h2>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0 ${expert.available ? 'bg-green-500/15 text-green-400' : 'bg-[#1E1E45] text-[#5B6080]'}`}>
                        {expert.available ? "● Live" : "Away"}
                      </span>
                    </div>
                    <p className="text-xs text-[#9BA3D4] truncate">{expert.role}</p>
                    <span className="inline-block mt-1 text-xs font-medium text-[#6677FF] bg-[#2233FF15] px-2 py-0.5 rounded-full">{expert.domain}</span>
                  </div>
                </div>
                <p className="text-sm text-[#9BA3D4] leading-relaxed">{expert.bio}</p>
                <div className="flex flex-wrap gap-1.5">
                  {expert.tags.map((tag) => (
                    <span key={tag} className="text-xs text-[#5B6080] bg-[#1E1E45] px-2 py-0.5 rounded-full">{tag}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-[#1E1E45] text-xs text-[#5B6080]">
                  <span className="flex items-center gap-3">
                    <span className="flex items-center gap-1"><Star className="size-3 text-yellow-400 fill-yellow-400" />{expert.rating}</span>
                    <span>{expert.sessions} sessions</span>
                  </span>
                  <div className="flex items-center gap-2">
                    <Link href="/connect" className="btn-outline py-1.5 px-3 text-xs"><MessageSquare className="size-3.5" /></Link>
                    <Link href="/connect" className="btn-primary py-1.5 px-3 text-xs"><Video className="size-3.5" /> Book</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

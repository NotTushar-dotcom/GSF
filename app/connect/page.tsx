import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { Video, MessageSquare, Calendar, Search, Star, Clock, ArrowRight, Shield, Zap } from "lucide-react";

export const metadata = {
  title: "Connect — GSF | Video Calls & Chat with Experts",
  description: "Book 1-on-1 video calls and chat directly with top startup experts on GSF.",
};

const EXPERTS = [
  { name: "Dr. Anika Patel", role: "Partner, Sequoia Capital India", domain: "Fundraising & VC", rating: 4.9, sessions: 48, available: true, tags: ["Fundraising", "SaaS", "EdTech"], initials: "AP" },
  { name: "James Whitfield", role: "Founder (Exited $1B+)", domain: "Scaling & Product", rating: 5.0, sessions: 62, available: true, tags: ["Product", "Scale", "B2B"], initials: "JW" },
  { name: "Sara Mensah", role: "Director of Product, Stripe", domain: "Product Strategy", rating: 4.8, sessions: 35, available: false, tags: ["APIs", "Growth", "Product"], initials: "SM" },
  { name: "Yuki Tanaka", role: "Head of Growth, Notion", domain: "Growth & PLG", rating: 4.9, sessions: 41, available: true, tags: ["PLG", "B2C", "Virality"], initials: "YT" },
  { name: "Raj Devani", role: "Startup Legal Counsel", domain: "Legal & IP", rating: 4.7, sessions: 29, available: true, tags: ["Startup Law", "Equity", "IP"], initials: "RD" },
  { name: "Fatima Al-Hassan", role: "CEO, MedTech Africa", domain: "Impact & HealthTech", rating: 4.9, sessions: 22, available: false, tags: ["HealthTech", "Impact", "Africa"], initials: "FA" },
];

const HOW_IT_WORKS = [
  { step: "01", icon: Search, title: "Find your expert", desc: "Browse by domain — fundraising, product, growth, legal, and more." },
  { step: "02", icon: Calendar, title: "Book a slot", desc: "Pick an available time. Calendar synced, reminders sent automatically." },
  { step: "03", icon: Video, title: "Join the video call", desc: "Meet face-to-face in our built-in room — no Zoom account needed." },
  { step: "04", icon: MessageSquare, title: "Continue via chat", desc: "Follow up, share docs, and get async replies anytime." },
];

export default function ConnectPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-[#FDFAF7]">

        {/* Hero */}
        <section className="relative section-padding overflow-hidden bg-soft-pattern">
          <div className="absolute inset-0 bg-dot-grid opacity-25" />
          <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-[#AACDDC]/20 blur-[80px] pointer-events-none" />
          <div className="section-container relative z-10 text-center">
            <span className="badge badge-blue mb-6">
              <Video className="size-3.5" />
              Live Video + Chat — Built for founders
            </span>
            <h1 className="text-5xl sm:text-6xl text-[#1A2332] tracking-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Talk to experts who've{" "}
              <em className="not-italic text-gradient-primary">actually built it</em>
            </h1>
            <p className="text-xl text-[#4A5668] max-w-2xl mx-auto mb-8">
              Book 1-on-1 video calls with domain-expert advisors. Continue via direct chat. No middlemen, no gatekeeping.
            </p>
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white border border-[#D2C4B4] shadow-soft-sm mb-12">
              <Shield className="size-5 text-[#81A6C6]" />
              <span className="text-sm text-[#4A5668]">
                <span className="text-[#1A2332] font-semibold">Free for 30 days</span> — full access. Then from ₹999/month.
              </span>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="section-container pb-20">
          <h2 className="text-2xl font-semibold text-[#1A2332] mb-8 text-center">How it works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {HOW_IT_WORKS.map(({ step, icon: Icon, title, desc }) => (
              <div key={step} className="card p-6 relative">
                <div className="text-4xl font-bold text-[#F3E3D0] absolute top-4 right-4 select-none"
                  style={{ fontFamily: "'Playfair Display', serif" }}>{step}</div>
                <div className="size-10 rounded-xl bg-[#EEF4F9] border border-[#AACDDC] flex items-center justify-center mb-4">
                  <Icon className="size-5 text-[#81A6C6]" />
                </div>
                <h3 className="font-semibold text-[#1A2332] mb-2">{title}</h3>
                <p className="text-sm text-[#4A5668] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Expert listing */}
        <section className="bg-[#F7F2EC] border-y border-[#D2C4B4] py-16">
          <div className="section-container">
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-[#8A95A3]" />
                <input id="expert-search" type="text" placeholder="Search experts by name or domain..." className="input pl-10" />
              </div>
              <select id="domain-filter" className="input sm:w-48">
                <option>All domains</option>
                <option>Fundraising & VC</option>
                <option>Product Strategy</option>
                <option>Growth & PLG</option>
                <option>Legal & IP</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {EXPERTS.map((expert) => (
                <div key={expert.name} className="card p-6 card-hover flex flex-col gap-4 bg-white">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="size-11 rounded-full bg-[#EEF4F9] border border-[#AACDDC] flex items-center justify-center text-sm font-bold text-[#3D74A0]">
                        {expert.initials}
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#1A2332] text-sm">{expert.name}</h3>
                        <p className="text-xs text-[#4A5668]">{expert.role}</p>
                        <span className="badge badge-blue mt-1 text-[10px]">{expert.domain}</span>
                      </div>
                    </div>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${expert.available ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-[#F3E3D0] text-[#8A95A3]'}`}>
                      {expert.available ? "● Available" : "Busy"}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-[#8A95A3]">
                    <span className="flex items-center gap-1"><Star className="size-3 text-amber-400 fill-amber-400" />{expert.rating}</span>
                    <span className="flex items-center gap-1"><Clock className="size-3" />{expert.sessions} sessions</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {expert.tags.map((tag) => (
                      <span key={tag} className="text-xs text-[#4A5668] bg-[#F3E3D0] px-2 py-0.5 rounded-full border border-[#D2C4B4]">{tag}</span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 pt-3 border-t border-[#D2C4B4]">
                    <Link href="/sign-up" className="flex-1 btn-primary py-2 text-sm justify-center">
                      <Video className="size-3.5" /> Book Call
                    </Link>
                    <Link href="/sign-up" className="btn-outline py-2 px-3" title="Chat">
                      <MessageSquare className="size-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="section-container py-20 text-center">
          <h2 className="text-3xl text-[#1A2332] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Simple, transparent pricing
          </h2>
          <p className="text-[#4A5668] mb-12 max-w-lg mx-auto">
            Start free. Scale when you're ready.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {[
              {
                name: "Free Trial",
                price: "₹0",
                period: "30 days",
                credits: "600 credits (Basic access)",
                autoPayNote: "→ Auto-converts to Basic after 30 days",
                experienceRange: "0–2 yr experts only",
                features: ["600 credits", "0–2 yr experience experts", "Venture marketplace", "Community access"],
                highlight: false, trialBadge: true,
              },
              {
                name: "Basic",
                price: "₹499",
                period: "/month",
                credits: "600 credits / month",
                autoPayNote: "⚡ Auto-pay enabled",
                experienceRange: "0–2 yr experts only",
                features: ["600 credits", "0–2 yr experience experts", "Venture marketplace", "Community access"],
                highlight: false, trialBadge: false,
              },
              {
                name: "Standard",
                price: "₹999",
                period: "/month",
                credits: "1,500 credits / month",
                autoPayNote: "⚡ Auto-pay enabled",
                experienceRange: "2–5 yr experts",
                features: ["1,500 credits", "2–5 yr experience experts", "Priority booking", "All Basic features"],
                highlight: true, trialBadge: false,
              },
              {
                name: "Premium",
                price: "₹1,499",
                period: "/month",
                credits: "2,000 credits / month",
                autoPayNote: "⚡ Auto-pay enabled",
                experienceRange: "5+ yr senior experts",
                features: ["2,000 credits", "5+ yr senior experts", "Investor intros", "All Standard features"],
                highlight: false, trialBadge: false,
              },
            ].map((plan) => (
              <div key={plan.name} className={`card p-6 flex flex-col ${
                plan.highlight ? 'border-[#81A6C6] shadow-[0_4px_24px_rgba(129,166,198,0.18)]' : ''
              }`}>
                {plan.trialBadge && <span className="badge badge-warm text-xs mb-3 w-fit">Start here</span>}
                {plan.highlight && <span className="badge badge-blue text-xs mb-3 w-fit">Most Popular</span>}
                <div className="font-semibold text-[#1A2332] mb-1">{plan.name}</div>
                <div className="mb-1">
                  <span className="text-2xl font-bold text-[#1A2332]" style={{ fontFamily: "'Playfair Display', serif" }}>{plan.price}</span>
                  <span className="text-xs text-[#8A95A3] ml-1">{plan.period}</span>
                </div>
                {plan.credits && <div className="text-xs font-medium text-[#81A6C6] mb-1">{plan.credits}</div>}
                {plan.autoPayNote && <div className="text-[10px] text-[#8A95A3] mb-3">{plan.autoPayNote}</div>}
                <div className="text-[10px] font-semibold uppercase tracking-wider text-[#4A5668] bg-[#F3E3D0] border border-[#D2C4B4] rounded-lg px-2 py-1 mb-4 w-fit">
                  {plan.experienceRange}
                </div>
                <ul className="space-y-2 flex-1 mb-6 text-left">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-[#4A5668]">
                      <span className="size-1.5 rounded-full bg-[#81A6C6] shrink-0" />{f}
                    </li>
                  ))}
                </ul>
                <Link href="/sign-up" className={plan.highlight ? "btn-primary justify-center text-sm" : "btn-outline justify-center text-sm"}>
                  {plan.trialBadge ? 'Get started free' : 'Choose plan'}
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-[#8A95A3] mt-6">
            Expert experience filters are applied automatically based on your plan. Upgrade anytime to unlock senior experts.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { Star, MessageSquare, Video, Search, Briefcase, Globe, Link2, Mail } from "lucide-react";

export const metadata = {
  title: "Experts — GSF | World-Class Startup Experts",
  description: "Connect via video call or chat with top startup experts, VCs, and domain advisors on GSF.",
};

const EXPERTS = [
  {
    name: "Dr. Anika Patel",      role: "Partner, Sequoia Capital India",  domain: "Venture Capital",
    tags: ["Fundraising", "SaaS", "EdTech"],
    bio: "10+ years investing in early-stage startups. Led investments in 40+ companies including 3 unicorns.",
    initials: "AP", sessions: 48, rating: 4.9, available: true,
    avatarBg: "#EF4444", experience: "10+ years",
    linkedin: "linkedin.com/in/anika-patel", website: "anika.vc", email: "anika@gsf.com",
  },
  {
    name: "James Whitfield",      role: "Co-founder, Razorpay (exited)",   domain: "Fintech & Scaling",
    tags: ["Product", "Scale", "B2B"],
    bio: "Built Razorpay from 0 to $1B valuation. Now advising the next generation of fintech founders.",
    initials: "JW", sessions: 62, rating: 5.0, available: true,
    avatarBg: "#3B82F6", experience: "15+ years",
    linkedin: "linkedin.com/in/jwhitfield", website: "jameswhitfield.com", email: "james@gsf.com",
  },
  {
    name: "Sara Mensah",          role: "Director of Product, Stripe",     domain: "Product Strategy",
    tags: ["Product Strategy", "APIs", "Growth"],
    bio: "Scaled Stripe's developer platform to 10M+ developers. Ex-Google, ex-Airbnb.",
    initials: "SM", sessions: 35, rating: 4.8, available: false,
    avatarBg: "#10B981", experience: "10+ years",
    linkedin: "linkedin.com/in/sara-mensah", website: "", email: "sara@gsf.com",
  },
  {
    name: "Raj Devani",           role: "General Counsel, YC S22 Startup",  domain: "Legal & IP",
    tags: ["Startup Law", "IP", "Fundraising Docs"],
    bio: "Specialized in startup formation, equity structuring, and IP for early-stage companies.",
    initials: "RD", sessions: 29, rating: 4.7, available: true,
    avatarBg: "#8B5CF6", experience: "5–10 years",
    linkedin: "linkedin.com/in/rajdevani", website: "rajdevani.law", email: "raj@gsf.com",
  },
  {
    name: "Yuki Tanaka",          role: "Head of Growth, Notion",           domain: "Growth & PLG",
    tags: ["PLG", "B2C", "Virality"],
    bio: "Pioneered product-led growth at Notion. Grew Notion from 1M to 30M users in 18 months.",
    initials: "YT", sessions: 41, rating: 4.9, available: true,
    avatarBg: "#F59E0B", experience: "5–10 years",
    linkedin: "linkedin.com/in/yukitanaka", website: "yukitanaka.io", email: "yuki@gsf.com",
  },
  {
    name: "Fatima Al-Hassan",     role: "CEO, MedTech Africa",              domain: "HealthTech & Impact",
    tags: ["HealthTech", "Impact", "Africa"],
    bio: "Building healthcare infrastructure for underserved markets. WHO Young Innovator 2023.",
    initials: "FA", sessions: 22, rating: 4.9, available: false,
    avatarBg: "#06B6D4", experience: "5–10 years",
    linkedin: "linkedin.com/in/fatima-al-hassan", website: "medtechafrica.org", email: "fatima@gsf.com",
  },
];

export default function ExpertsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-[#FDFAF7]">
        {/* Hero */}
        <section className="relative section-padding bg-soft-pattern overflow-hidden">
          <div className="absolute inset-0 bg-dot-grid opacity-25" />
          <div className="section-container relative z-10 text-center">
            <span className="badge badge-blue mb-6"><Star className="size-3.5" /> 40+ world-class experts</span>
            <h1 className="text-5xl sm:text-6xl text-[#1A2332] tracking-tight mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Learn from founders{" "}
              <em className="not-italic text-gradient-primary">who&apos;ve done it</em>
            </h1>
            <p className="text-xl text-[#4A5668] max-w-2xl mx-auto mb-8">
              Book video calls and chat directly with operators, investors, and domain experts. Available directly to every GSF member.
            </p>
            <div className="flex items-center gap-3 max-w-md mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-[#8A95A3]" />
                <input id="expert-search" type="text" placeholder="Search experts..." className="input pl-10" />
              </div>
              <Link href="/sign-up" className="btn-primary whitespace-nowrap">Join to Book</Link>
            </div>
          </div>
        </section>

        {/* Expert grid with contacts */}
        <section className="section-container pb-24 pt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXPERTS.map((expert) => (
              <div key={expert.name} className="card p-6 card-hover flex flex-col gap-4">
                {/* Header */}
                <div className="flex items-start gap-3">
                  <div className="size-14 rounded-2xl flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                    style={{ backgroundColor: expert.avatarBg }}>
                    {expert.initials}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <h2 className="text-sm font-semibold text-[#1A2332] leading-tight">{expert.name}</h2>
                      <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full shrink-0 ${expert.available ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-[#F3E3D0] text-[#8A95A3]'}`}>
                        {expert.available ? "● Available" : "Away"}
                      </span>
                    </div>
                    <p className="text-xs text-[#4A5668] truncate mt-0.5">{expert.role}</p>
                    <div className="flex items-center gap-2 mt-1 flex-wrap">
                      <span className="badge badge-blue text-[10px]">{expert.domain}</span>
                      <span className="text-[10px] text-[#8A95A3]">{expert.experience} exp</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-[#4A5668] leading-relaxed">{expert.bio}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {expert.tags.map((tag) => (
                    <span key={tag} className="text-xs text-[#4A5668] bg-[#F3E3D0] border border-[#D2C4B4] px-2 py-0.5 rounded-full">{tag}</span>
                  ))}
                </div>

                {/* Rating + sessions */}
                <div className="flex items-center gap-3 text-xs text-[#8A95A3]">
                  <span className="flex items-center gap-1"><Star className="size-3 text-amber-400 fill-amber-400" />{expert.rating}</span>
                  <span>{expert.sessions} sessions</span>
                </div>

                {/* Social contacts */}
                <div className="flex items-center gap-2 pt-2 border-t border-[#D2C4B4]">
                  <a href={`https://${expert.linkedin}`} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-[#4A5668] hover:text-[#0077B5] transition-colors px-2 py-1.5 rounded-lg hover:bg-blue-50">
                    <Link2 className="size-3.5" />
                    <span className="hidden sm:inline">LinkedIn</span>
                  </a>
                  {expert.website && (
                    <a href={`https://${expert.website}`} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-[#4A5668] hover:text-[#3D74A0] transition-colors px-2 py-1.5 rounded-lg hover:bg-[#EEF4F9]">
                      <Globe className="size-3.5" />
                      <span className="hidden sm:inline">Website</span>
                    </a>
                  )}
                  <a href={`mailto:${expert.email}`}
                    className="flex items-center gap-1.5 text-xs text-[#4A5668] hover:text-[#3D74A0] transition-colors px-2 py-1.5 rounded-lg hover:bg-[#EEF4F9]">
                    <Mail className="size-3.5" />
                    <span className="hidden sm:inline">Email</span>
                  </a>

                  <div className="ml-auto flex items-center gap-2">
                    <Link href="/login" className="btn-outline py-1.5 px-3 text-xs">
                      <MessageSquare className="size-3.5" />
                    </Link>
                    <Link href="/login" className="btn-primary py-1.5 px-3 text-xs">
                      <Video className="size-3.5" /> Book
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Become expert CTA */}
        <section className="bg-[#F7F2EC] border-t border-[#D2C4B4] py-20">
          <div className="section-container text-center max-w-2xl mx-auto">
            <div className="size-14 rounded-2xl bg-[#EEF4F9] border border-[#AACDDC] flex items-center justify-center mx-auto mb-6">
              <Briefcase className="size-7 text-[#81A6C6]" />
            </div>
            <h2 className="text-3xl text-[#1A2332] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Are you an expert?</h2>
            <p className="text-[#4A5668] max-w-xl mx-auto mb-8">
              Join the GSF expert network and give back to the next generation of founders. We match you with students who need your exact expertise.
            </p>
            <Link href="/sign-up" className="btn-primary px-8 py-3">Apply as an expert</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

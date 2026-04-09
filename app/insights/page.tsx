import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

export const metadata = {
  title: "Insights — GSF | Founder Resources & Articles",
  description: "Practical articles, playbooks, and founder stories from the GSF community.",
};

const FEATURED = {
  title: "The Equity Conversation Every Student Founder Needs to Have Before Raising",
  excerpt: "Most students make irreversible equity mistakes in their first round. Here's how to structure your cap table before you talk to a single investor.",
  author: "Dr. Anika Patel", role: "Partner, Sequoia Capital India", initials: "AP",
  readTime: "8 min read", category: "Fundraising", date: "April 7, 2026",
};

const ARTICLES = [
  { title: "How to Run a Productive Expert Call", excerpt: "Make the most of your 45 minutes. A prep framework from 500+ sessions.", author: "GSF Team", readTime: "4 min", category: "Connect" },
  { title: "Listing Your Venture: What Investors Actually Look For", excerpt: "The 5 fields that determine whether investors click 'Show interest' on your GSF listing.", author: "James Whitfield", readTime: "6 min", category: "Ventures" },
  { title: "From Idea to ₹15L in Seed: EduLoop's Story", excerpt: "How Priya Sharma went from a college project to a funded startup using the GSF Ventures marketplace.", author: "Priya Sharma", readTime: "7 min", category: "Founder Story" },
  { title: "Legal Essentials for Student Founders in India", excerpt: "Private Ltd vs LLP, ESOP basics, and how to avoid the common legal traps early-stage founders fall into.", author: "Raj Devani", readTime: "9 min", category: "Legal" },
  { title: "Product-Led Growth for D2C Student Startups", excerpt: "Yuki Tanaka breaks down PLG principles that work without a sales team or VC money.", author: "Yuki Tanaka", readTime: "5 min", category: "Growth" },
];

const CATEGORIES = ["All", "Fundraising", "Connect", "Ventures", "Growth", "Legal", "Founder Story"];
const CATEGORY_COLORS: Record<string, string> = {
  "Fundraising": "badge-blue", "Connect": "badge-blue", "Ventures": "badge-warm",
  "Growth": "badge-blue", "Legal": "badge-warm", "Founder Story": "badge-warm",
};

export default function InsightsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-[#FDFAF7]">
        {/* Hero */}
        <section className="relative py-20 bg-soft-pattern overflow-hidden">
          <div className="absolute inset-0 bg-dot-grid opacity-25" />
          <div className="section-container relative z-10 text-center">
            <span className="badge badge-blue mb-6">Founder knowledge</span>
            <h1 className="text-5xl sm:text-6xl text-[#1A2332] tracking-tight mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              GSF <em className="not-italic text-gradient-primary">Insights</em>
            </h1>
            <p className="text-xl text-[#4A5668] max-w-xl mx-auto">
              Practical playbooks, expert articles, and real founder stories — written by people who've done it.
            </p>
          </div>
        </section>

        {/* Featured */}
        <section className="section-container pb-16">
          <div className="card p-0 overflow-hidden card-hover">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="bg-[#F3E3D0] p-10 flex flex-col justify-between min-h-[280px]">
                <span className="badge badge-warm w-fit">{FEATURED.category}</span>
                <div>
                  <h2 className="text-2xl text-[#1A2332] leading-snug mt-4 mb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}>
                    {FEATURED.title}
                  </h2>
                  <p className="text-[#4A5668] text-sm leading-relaxed">{FEATURED.excerpt}</p>
                </div>
              </div>
              <div className="p-10 flex flex-col justify-between bg-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="size-10 rounded-full bg-[#EEF4F9] border border-[#AACDDC] flex items-center justify-center text-sm font-bold text-[#3D74A0]">
                    {FEATURED.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#1A2332]">{FEATURED.author}</div>
                    <div className="text-xs text-[#8A95A3]">{FEATURED.role}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-xs text-[#8A95A3] mb-6">
                  <span className="flex items-center gap-1"><Clock className="size-3" />{FEATURED.readTime}</span>
                  <span>{FEATURED.date}</span>
                </div>
                <Link href="/sign-up" className="btn-primary w-full justify-center py-2.5">
                  Read article <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <div className="section-container pb-6">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button key={cat} className={`badge cursor-pointer hover:opacity-80 transition-opacity ${cat === "All" ? "badge-blue" : "badge-warm"}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Articles grid */}
        <section className="section-container pb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ARTICLES.map((article) => (
              <div key={article.title} className="card p-6 card-hover flex flex-col gap-4">
                <span className={`badge w-fit ${CATEGORY_COLORS[article.category] || "badge-blue"}`}>{article.category}</span>
                <h3 className="text-base font-semibold text-[#1A2332] leading-snug"
                  style={{ fontFamily: "'Playfair Display', serif" }}>
                  {article.title}
                </h3>
                <p className="text-sm text-[#4A5668] leading-relaxed flex-1">{article.excerpt}</p>
                <div className="flex items-center justify-between pt-3 border-t border-[#D2C4B4] text-xs text-[#8A95A3]">
                  <span>{article.author}</span>
                  <span className="flex items-center gap-1"><Clock className="size-3" />{article.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section className="bg-[#F7F2EC] border-t border-[#D2C4B4] py-20">
          <div className="section-container text-center max-w-xl mx-auto">
            <h2 className="text-3xl text-[#1A2332] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Get insights in your inbox</h2>
            <p className="text-[#4A5668] mb-8">One email a week. Practical founder knowledge, no fluff.</p>
            <form id="newsletter-form" className="flex gap-3 max-w-sm mx-auto">
              <input id="newsletter-email" type="email" className="input flex-1" placeholder="you@example.com" />
              <button id="newsletter-submit" type="submit" className="btn-primary whitespace-nowrap">Subscribe</button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

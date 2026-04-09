import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowRight, Target, Users, Globe, Heart } from "lucide-react";

export const metadata = {
  title: "About — GSF | Global Society of Founders",
  description: "Learn about the mission, team, and story behind the Global Society of Founders.",
};

const TEAM = [
  { name: "Aryan Kapoor", role: "Co-founder & CEO", bio: "Former YC applicant turned community builder. Obsessed with helping students skip the expensive mistakes he made.", initials: "AK" },
  { name: "Neha Joshi", role: "Co-founder & Head of Programs", bio: "Ex-McKinsey, ex-Teach For India. Designed every GSF program from the ground up with learning science principles.", initials: "NJ" },
  { name: "David Osei", role: "Head of Community", bio: "Built 3 startup communities across Africa and Southeast Asia. Knows what makes communities actually work.", initials: "DO" },
  { name: "Priya Nair", role: "Head of Expert Network", bio: "Former Associate at Bessemer Venture Partners. Curates and manages the GSF mentor and expert ecosystem.", initials: "PN" },
];

const VALUES = [
  { icon: Target, title: "Execution over ideas", description: "Ideas are abundant. We celebrate shipping, learning, and iterating — not planning and theorising." },
  { icon: Users, title: "Community as infrastructure", description: "The right network is more valuable than any class or textbook. We build deep community by design." },
  { icon: Globe, title: "Global, but local", description: "Great founders come from everywhere. We celebrate diverse contexts while building universal founder skills." },
  { icon: Heart, title: "Radical openness", description: "We share everything — playbooks, failures, connections. Hoarding knowledge has no place in our culture." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-[#FDFAF7]">
        {/* Hero */}
        <section className="relative section-padding bg-soft-pattern overflow-hidden">
          <div className="absolute inset-0 bg-dot-grid opacity-25" />
          <div className="section-container relative z-10 max-w-3xl">
            <span className="badge badge-blue mb-6"><span className="size-1.5 rounded-full bg-[#81A6C6]" /> Our story</span>
            <h1 className="text-5xl sm:text-6xl text-[#1A2332] tracking-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Every student deserves a fair shot{" "}
              <em className="not-italic text-gradient-primary">at building.</em>
            </h1>
            <p className="text-xl text-[#4A5668] leading-relaxed">
              GSF was born from a simple frustration: most startup education is too expensive, too theoretical, or too disconnected from the realities of building. We decided to fix that.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="bg-white border-y border-[#D2C4B4]">
          <div className="section-container py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl text-[#1A2332] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Our mission</h2>
                <p className="text-[#4A5668] leading-relaxed mb-6">
                  The Global Society of Founders exists to democratise the founder journey. We believe the next great company could be built by a student in Lagos, Lahore, or Lima — and we're building the infrastructure to make that possible.
                </p>
                <p className="text-[#4A5668] leading-relaxed">
                  Through video-based expert connect, a venture marketplace, and a global community, GSF gives students the tools, connections, and confidence to go from curious to building — and from building to funded.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[{ value: "2023", label: "Founded" }, { value: "500+", label: "Students served" }, { value: "40+", label: "Expert mentors" }, { value: "30+", label: "Countries" }].map(({ value, label }) => (
                  <div key={label} className="card p-6 text-center card-hover">
                    <div className="text-3xl font-bold text-[#81A6C6] mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{value}</div>
                    <div className="text-xs text-[#8A95A3] uppercase tracking-wide">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-container section-padding">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl text-[#1A2332] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>What we believe</h2>
            <p className="text-[#4A5668] max-w-xl mx-auto">Our values show up in how we run the platform, how we treat our community, and what we celebrate.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {VALUES.map(({ icon: Icon, title, description }) => (
              <div key={title} className="card p-8 card-hover">
                <div className="size-12 rounded-xl bg-[#EEF4F9] border border-[#AACDDC] flex items-center justify-center mb-5">
                  <Icon className="size-6 text-[#81A6C6]" />
                </div>
                <h3 className="text-lg font-semibold text-[#1A2332] mb-3">{title}</h3>
                <p className="text-[#4A5668] leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section id="team" className="bg-[#F7F2EC] border-t border-[#D2C4B4] section-padding">
          <div className="section-container">
            <div className="text-center mb-14">
              <h2 className="text-3xl text-[#1A2332] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Meet the team</h2>
              <p className="text-[#4A5668] max-w-lg mx-auto">A small team with a big mission. Every person here is obsessed with helping student founders succeed.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {TEAM.map((member) => (
                <div key={member.name} className="card p-6 text-center card-hover bg-white">
                  <div className="size-16 rounded-full bg-[#EEF4F9] border-2 border-[#AACDDC] flex items-center justify-center text-lg font-bold text-[#3D74A0] mx-auto mb-4">
                    {member.initials}
                  </div>
                  <h3 className="font-semibold text-[#1A2332] mb-0.5">{member.name}</h3>
                  <p className="text-xs text-[#81A6C6] font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-[#4A5668] leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-container py-20 text-center">
          <h2 className="text-3xl text-[#1A2332] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Want to be part of this?</h2>
          <p className="text-[#4A5668] mb-8 max-w-lg mx-auto">Whether you're a student, expert, or investor — there's a place for you in the GSF ecosystem.</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/sign-up" className="btn-primary px-7 py-3">Apply as a student <ArrowRight className="size-4" /></Link>
            <Link href="/contact" className="btn-outline px-7 py-3">Get in touch</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowRight, Target, Users, Globe, Heart } from "lucide-react";

export const metadata = {
  title: "About — GSF | Global Society of Founders",
  description: "Learn about the mission, team, and story behind the Global Society of Founders.",
};

const TEAM = [
  {
    name: "Aryan Kapoor",
    role: "Co-founder & CEO",
    bio: "Former YC applicant turned community builder. Obsessed with helping students skip the expensive mistakes he made.",
    initials: "AK",
    color: "bg-primary-500",
  },
  {
    name: "Neha Joshi",
    role: "Co-founder & Head of Programs",
    bio: "Ex-McKinsey, ex-Teach For India. Designed every GSF program from the ground up with learning science principles.",
    initials: "NJ",
    color: "bg-secondary-500",
  },
  {
    name: "David Osei",
    role: "Head of Community",
    bio: "Built 3 startup communities across Africa and Southeast Asia. Knows what makes communities actually work.",
    initials: "DO",
    color: "bg-amber-500",
  },
  {
    name: "Priya Nair",
    role: "Head of Expert Network",
    bio: "Former Associate at Bessemer Venture Partners. Curates and manages the GSF mentor and expert ecosystem.",
    initials: "PN",
    color: "bg-rose-500",
  },
];

const VALUES = [
  {
    icon: Target,
    title: "Execution over ideas",
    description: "Ideas are abundant. We celebrate shipping, learning, and iterating — not planning and theorizing.",
  },
  {
    icon: Users,
    title: "Community as infrastructure",
    description: "The right network is more valuable than any class or textbook. We build deep community by design.",
  },
  {
    icon: Globe,
    title: "Global, but local",
    description: "Great founders come from everywhere. We celebrate diverse contexts while creating universal founder skills.",
  },
  {
    icon: Heart,
    title: "Radical openness",
    description: "We share everything — playbooks, failures, connections. Hoarding knowledge has no place in our culture.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-background">
        {/* Hero */}
        <section className="relative section-padding overflow-hidden">
          <div className="absolute inset-0 bg-dot-grid opacity-50" />
          <div className="absolute top-1/3 left-1/4 size-96 rounded-full bg-primary-500/5 blur-3xl pointer-events-none" />
          <div className="section-container relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-50 border border-primary-100 text-primary-600 text-sm font-medium mb-6">
                <span className="size-1.5 rounded-full bg-primary-500" />
                Our story
              </div>
              <h1 className="text-5xl sm:text-6xl font-semibold text-text-primary tracking-tight text-balance mb-6">
                We believe every student deserves a{" "}
                <span className="text-gradient-primary">fair shot at building</span>
              </h1>
              <p className="text-xl text-text-secondary leading-relaxed">
                GSF was born from a simple frustration: most startup education is either too expensive, too theoretical, or too disconnected from the realities of building. We decided to fix that.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="bg-white border-y border-border">
          <div className="section-container py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-semibold text-text-primary mb-6">Our mission</h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  The Global Society of Founders exists to democratize the founder journey. We believe the next great company could be built by a student in Lagos, Lahore, or Lima — and we're building the infrastructure to make that possible.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  Through structured cohort programs, world-class mentorship, and a global community, GSF gives students the tools, connections, and confidence to go from curious to building — and from building to traction.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "2023", label: "Founded" },
                  { value: "500+", label: "Students served" },
                  { value: "30+", label: "Expert mentors" },
                  { value: "30+", label: "Countries" },
                ].map(({ value, label }) => (
                  <div key={label} className="card p-6 text-center">
                    <div className="text-3xl font-semibold text-primary-500 mb-1">{value}</div>
                    <div className="text-sm text-text-muted">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-container section-padding">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-semibold text-text-primary mb-4">What we believe</h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Our values aren't on a poster — they show up in how we run our programs, how we treat our community, and what we celebrate.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {VALUES.map(({ icon: Icon, title, description }) => (
              <div key={title} className="card p-8 card-hover">
                <div className="size-12 rounded-xl bg-primary-50 flex items-center justify-center mb-5">
                  <Icon className="size-6 text-primary-500" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-3">{title}</h3>
                <p className="text-text-secondary leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section id="team" className="bg-canvas border-t border-border section-padding">
          <div className="section-container">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-semibold text-text-primary mb-4">Meet the team</h2>
              <p className="text-text-secondary max-w-lg mx-auto">
                We're a small team with a big mission. Every person here is obsessed with helping student founders succeed.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {TEAM.map((member) => (
                <div key={member.name} className="card p-6 text-center card-hover">
                  <div className={`${member.color} size-16 rounded-2xl flex items-center justify-center text-white text-lg font-semibold mx-auto mb-4`}>
                    {member.initials}
                  </div>
                  <h3 className="font-semibold text-text-primary mb-0.5">{member.name}</h3>
                  <p className="text-xs text-primary-500 font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-text-secondary leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-container py-20 text-center">
          <h2 className="text-3xl font-semibold text-text-primary mb-4">Want to be part of this?</h2>
          <p className="text-text-secondary mb-8 max-w-lg mx-auto">
            Whether you're a student, expert, or investor — there's a place for you in the GSF ecosystem.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/apply" className="inline-flex items-center gap-2 bg-primary-500 text-white font-medium px-6 py-3 rounded-xl hover:bg-primary-600 transition-colors shadow-soft-sm">
              Apply as a student <ArrowRight className="size-4" />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white border border-border text-text-primary font-medium px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors">
              Get in touch
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

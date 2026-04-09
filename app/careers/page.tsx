import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowRight, Heart, Globe, Zap } from "lucide-react";

export const metadata = {
  title: "Careers — GSF | Global Society of Founders",
  description: "Join the GSF team and help build the future of student entrepreneurship.",
};

const OPENINGS = [
  {
    title: "Community Manager",
    type: "Full-time",
    location: "Remote (India)",
    team: "Community",
    desc: "Own the day-to-day experience of 500+ founders. You'll manage Slack, run events, and make every member feel seen.",
  },
  {
    title: "Program Associate",
    type: "Full-time",
    location: "Bangalore / Remote",
    team: "Programs",
    desc: "Help design, coordinate, and improve our cohort programs. You'll work directly with students and mentors.",
  },
  {
    title: "Expert Network Coordinator",
    type: "Part-time",
    location: "Remote",
    team: "Partnerships",
    desc: "Source, onboard, and manage relationships with domain experts who mentor our student founders.",
  },
  {
    title: "Content & Insights Writer",
    type: "Contract",
    location: "Remote",
    team: "Growth",
    desc: "Write founder playbooks, expert interviews, and insights that reach thousands of student builders.",
  },
];

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-background">
        <section className="relative section-padding overflow-hidden">
          <div className="absolute inset-0 bg-dot-grid opacity-50" />
          <div className="section-container relative z-10 text-center mb-16">
            <h1 className="text-5xl font-semibold text-text-primary tracking-tight mb-4">
              Build GSF with <span className="text-gradient-primary">us</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-xl mx-auto">
              We're a small, mission-driven team helping thousands of student founders take their first steps. Come make it bigger.
            </p>
          </div>
        </section>

        {/* Why GSF */}
        <section className="bg-white border-y border-border">
          <div className="section-container py-16">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              {[
                { icon: Heart, title: "Mission-first", desc: "Every decision traces back to impact on student founders." },
                { icon: Globe, title: "Fully remote-friendly", desc: "Work from anywhere. Output over hours, always." },
                { icon: Zap, title: "High ownership", desc: "Small team, big surface area. You'll own things from day one." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="space-y-3">
                  <div className="size-12 rounded-xl bg-primary-50 flex items-center justify-center mx-auto">
                    <Icon className="size-6 text-primary-500" />
                  </div>
                  <h3 className="font-semibold text-text-primary">{title}</h3>
                  <p className="text-sm text-text-secondary">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Openings */}
        <section className="section-container section-padding">
          <h2 className="text-2xl font-semibold text-text-primary mb-8">Open roles</h2>
          <div className="space-y-4">
            {OPENINGS.map((role) => (
              <div key={role.title} className="card p-6 card-hover flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-text-primary">{role.title}</h3>
                    <span className="text-xs text-text-muted bg-gray-100 px-2 py-0.5 rounded-full">{role.team}</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-text-muted mb-2">
                    <span>{role.type}</span> · <span>{role.location}</span>
                  </div>
                  <p className="text-sm text-text-secondary">{role.desc}</p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors whitespace-nowrap"
                >
                  Apply <ArrowRight className="size-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="section-container pb-24 text-center">
          <p className="text-text-secondary">
            Don't see a fit?{" "}
            <Link href="/contact" className="text-primary-600 font-medium hover:underline">
              Send us an open application
            </Link>{" "}
            — we love hearing from passionate people.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}

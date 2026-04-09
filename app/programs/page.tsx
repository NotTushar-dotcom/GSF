import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowRight, Clock, Users, Star, CheckCircle } from "lucide-react";

export const metadata = {
  title: "Programs — GSF | Global Society of Founders",
  description: "Explore GSF's structured cohort programs designed to take you from startup curiosity to founder clarity.",
};

const PROGRAMS = [
  {
    id: "founder-foundation",
    badge: "Most Popular",
    badgeColor: "bg-primary-500",
    title: "Founder Foundation",
    subtitle: "8-week cohort",
    description:
      "A structured 8-week journey that helps you validate your startup idea, understand your target market, and build your first MVP with expert guidance.",
    duration: "8 weeks",
    spots: "30 students",
    level: "Beginner",
    outcomes: [
      "Validate your startup idea with real users",
      "Build and ship your first MVP",
      "Develop a founder mindset",
      "Present to a panel of mentors",
    ],
    price: "Free",
    ctaLabel: "Apply Now",
    href: "/apply",
  },
  {
    id: "growth-accelerator",
    badge: "Advanced",
    badgeColor: "bg-secondary-500",
    title: "Growth Accelerator",
    subtitle: "12-week cohort",
    description:
      "For founders with a validated idea ready to scale. Learn growth strategies, fundraising fundamentals, and build a strong team around your vision.",
    duration: "12 weeks",
    spots: "20 students",
    level: "Intermediate",
    outcomes: [
      "Build a scalable growth engine",
      "Learn fundraising fundamentals",
      "Develop team-building skills",
      "Connect with investors",
    ],
    price: "Free",
    ctaLabel: "Apply Now",
    href: "/apply",
  },
  {
    id: "deep-tech-track",
    badge: "Specialized",
    badgeColor: "bg-amber-500",
    title: "Deep Tech Track",
    subtitle: "10-week cohort",
    description:
      "Purpose-built for tech founders working on AI, biotech, or hardware. Bridge the gap between research and commercial viability with domain experts.",
    duration: "10 weeks",
    spots: "15 students",
    level: "Advanced",
    outcomes: [
      "Commercialize deep tech research",
      "IP strategy and protection",
      "Technical co-founder matching",
      "Deep tech investor access",
    ],
    price: "Free",
    ctaLabel: "Apply Now",
    href: "/apply",
  },
];

export default function ProgramsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-background">
        {/* Hero */}
        <section className="relative section-padding overflow-hidden">
          <div className="absolute inset-0 bg-dot-grid opacity-50" />
          <div className="absolute top-1/4 left-1/3 size-96 rounded-full bg-primary-500/5 blur-3xl pointer-events-none" />
          <div className="section-container relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-50 border border-primary-100 text-primary-600 text-sm font-medium mb-6">
              <span className="size-1.5 rounded-full bg-primary-500" />
              Cohort 3 applications open
            </div>
            <h1 className="text-5xl sm:text-6xl font-semibold text-text-primary tracking-tight text-balance mb-6">
              Programs built for{" "}
              <span className="text-gradient-primary">real founders</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Every GSF program is cohort-based, mentor-driven, and designed to get you from idea to execution with accountability and community support.
            </p>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="section-container pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {PROGRAMS.map((program) => (
              <div key={program.id} className="card card-hover p-8 flex flex-col">
                <div className="flex items-start justify-between mb-6">
                  <span className={`badge text-white text-xs ${program.badgeColor}`}>
                    {program.badge}
                  </span>
                  <span className="text-xs text-text-muted font-medium bg-gray-100 px-2.5 py-1 rounded-full">
                    {program.level}
                  </span>
                </div>

                <h2 className="text-xl font-semibold text-text-primary mb-1">
                  {program.title}
                </h2>
                <p className="text-sm text-primary-500 font-medium mb-4">{program.subtitle}</p>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  {program.description}
                </p>

                <div className="flex items-center gap-4 mb-6 text-sm text-text-muted">
                  <span className="flex items-center gap-1.5">
                    <Clock className="size-3.5" /> {program.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users className="size-3.5" /> {program.spots}
                  </span>
                </div>

                <ul className="space-y-2.5 mb-8 flex-1">
                  {program.outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-2.5 text-sm text-text-secondary">
                      <CheckCircle className="size-4 text-secondary-500 mt-0.5 shrink-0" />
                      {o}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <span className="text-lg font-semibold text-text-primary">{program.price}</span>
                  <Link
                    href={program.href}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    {program.ctaLabel} <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA strip */}
        <section className="bg-primary-500 py-16">
          <div className="section-container text-center">
            <h2 className="text-3xl font-semibold text-white mb-4">
              Not sure which program is right for you?
            </h2>
            <p className="text-primary-100 mb-8 max-w-xl mx-auto">
              Book a 15-minute discovery call with a GSF advisor and we'll help you find the best fit.
            </p>
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 bg-white text-primary-600 font-medium px-6 py-3 rounded-xl hover:bg-primary-50 transition-colors"
            >
              Talk to an advisor <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

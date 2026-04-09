import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, CheckCircle, Clock, Star } from "lucide-react";

export const metadata = {
  title: "Apply — GSF | Global Society of Founders",
  description: "Apply to join the next GSF cohort and start your founder journey today.",
};

const STEPS = [
  { step: "01", title: "Fill out the application", desc: "Tell us about yourself, your idea, and what you're hoping to get from GSF. Takes about 10 minutes." },
  { step: "02", title: "Short video intro", desc: "Record a 60-second video sharing why you want to be a founder. No fancy production needed — authenticity wins." },
  { step: "03", title: "Discovery call", desc: "A 15-minute chat with a GSF advisor to make sure it's the right fit, and to answer any questions you have." },
  { step: "04", title: "Cohort kick-off", desc: "You're in! Join your cohort, meet your team, and start your founder journey." },
];

export default function ApplyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-background">
        {/* Hero */}
        <section className="relative section-padding overflow-hidden">
          <div className="absolute inset-0 bg-dot-grid opacity-50" />
          <div className="section-container relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-100 text-green-700 text-sm font-medium mb-6">
              <span className="size-1.5 rounded-full bg-green-500 animate-pulse" />
              Applications open — Cohort 3
            </div>
            <h1 className="text-5xl sm:text-6xl font-semibold text-text-primary tracking-tight text-balance mb-6">
              Take the first step toward{" "}
              <span className="text-gradient-primary">founder clarity</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-xl mx-auto mb-4">
              Applications take 10 minutes. Decisions are rolling — the sooner you apply, the better your chances.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-text-muted">
              <span className="flex items-center gap-1.5"><Clock className="size-4" /> Deadline: May 15, 2026</span>
              <span className="flex items-center gap-1.5"><Star className="size-4" /> 30 seats available</span>
            </div>
          </div>
        </section>

        {/* Application form + info */}
        <section className="section-container pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Info sidebar */}
            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="font-semibold text-text-primary mb-4">What you get</h3>
                <ul className="space-y-3">
                  {[
                    "8 weeks of structured cohort journey",
                    "1-on-1 sessions with expert mentors",
                    "Full community access",
                    "Accountability pod",
                    "Demo day with investors",
                    "Alumni network for life",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-text-secondary">
                      <CheckCircle className="size-4 text-secondary-500 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card p-6">
                <h3 className="font-semibold text-text-primary mb-4">Process</h3>
                <div className="space-y-4">
                  {STEPS.map(({ step, title, desc }) => (
                    <div key={step} className="flex gap-3">
                      <div className="size-7 rounded-full bg-primary-50 text-primary-600 text-xs font-semibold flex items-center justify-center shrink-0 mt-0.5">
                        {step}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-text-primary">{title}</div>
                        <div className="text-xs text-text-muted mt-0.5 leading-relaxed">{desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="card p-8">
                <h2 className="text-xl font-semibold text-text-primary mb-6">Your application</h2>
                <form className="space-y-5" id="apply-form">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1.5" htmlFor="first-name">First name</label>
                      <input id="first-name" type="text" className="input" placeholder="Aryan" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1.5" htmlFor="last-name">Last name</label>
                      <input id="last-name" type="text" className="input" placeholder="Kapoor" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1.5" htmlFor="apply-email">University email</label>
                    <input id="apply-email" type="email" className="input" placeholder="you@university.edu" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1.5" htmlFor="university">University & Year</label>
                    <input id="university" type="text" className="input" placeholder="e.g. IIT Delhi, 3rd Year" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1.5" htmlFor="program-select">Program of interest</label>
                    <select id="program-select" className="input">
                      <option value="">Select a program...</option>
                      <option>Founder Foundation (8 weeks)</option>
                      <option>Growth Accelerator (12 weeks)</option>
                      <option>Deep Tech Track (10 weeks)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1.5" htmlFor="idea">What's your startup idea? (or area of interest)</label>
                    <textarea
                      id="idea"
                      className="input textarea"
                      placeholder="Tell us about the problem you want to solve and why you care about it..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1.5" htmlFor="why-gsf">Why GSF? What do you hope to get from this program?</label>
                    <textarea
                      id="why-gsf"
                      className="input textarea"
                      style={{ minHeight: "100px" }}
                      placeholder="Be honest — we value self-awareness over polished answers..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1.5" htmlFor="linkedin-url">LinkedIn URL (optional)</label>
                    <input id="linkedin-url" type="url" className="input" placeholder="https://linkedin.com/in/yourname" />
                  </div>

                  <button
                    type="submit"
                    id="apply-submit"
                    className="w-full bg-primary-500 text-white font-medium h-12 rounded-xl hover:bg-primary-600 transition-colors flex items-center justify-center gap-2 shadow-soft-sm"
                  >
                    Submit application <ArrowRight className="size-4" />
                  </button>

                  <p className="text-xs text-text-muted text-center">
                    By submitting, you agree to our{" "}
                    <a href="/privacy" className="text-primary-600 hover:underline">Privacy Policy</a>{" "}
                    and{" "}
                    <a href="/terms" className="text-primary-600 hover:underline">Terms</a>.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

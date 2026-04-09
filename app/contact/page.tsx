import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export const metadata = {
  title: "Contact — GSF | Global Society of Founders",
  description: "Get in touch with the GSF team.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-background">
        <section className="relative section-padding overflow-hidden">
          <div className="absolute inset-0 bg-dot-grid opacity-50" />
          <div className="section-container relative z-10 text-center mb-16">
            <h1 className="text-5xl font-semibold text-text-primary tracking-tight mb-4">
              Get in <span className="text-gradient-primary">touch</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-xl mx-auto">
              Questions, partnerships, or just want to say hi — we'd love to hear from you.
            </p>
          </div>

          <div className="section-container relative z-10 pb-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Contact info */}
              <div className="space-y-6">
                {[
                  { icon: Mail, label: "Email us", value: "hello@gsf.community", sub: "We reply within 24 hours" },
                  { icon: MapPin, label: "Based in", value: "Bangalore, India", sub: "With a global community" },
                  { icon: Phone, label: "Office hours", value: "Mon–Fri, 10am–6pm IST", sub: "Or reach us on Slack" },
                ].map(({ icon: Icon, label, value, sub }) => (
                  <div key={label} className="card p-6 flex items-start gap-4">
                    <div className="size-10 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                      <Icon className="size-5 text-primary-500" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-text-primary">{label}</div>
                      <div className="text-sm text-text-secondary mt-0.5">{value}</div>
                      <div className="text-xs text-text-muted mt-0.5">{sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Form */}
              <div className="lg:col-span-2 card p-8">
                <h2 className="text-lg font-semibold text-text-primary mb-6">Send us a message</h2>
                <form className="space-y-5" id="contact-form">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1.5" htmlFor="contact-name">Name</label>
                      <input id="contact-name" type="text" className="input" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1.5" htmlFor="contact-email">Email</label>
                      <input id="contact-email" type="email" className="input" placeholder="you@example.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1.5" htmlFor="contact-subject">Subject</label>
                    <select id="contact-subject" className="input">
                      <option value="">Select a topic...</option>
                      <option>Program inquiry</option>
                      <option>Join as an expert</option>
                      <option>Partnership</option>
                      <option>Press inquiry</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1.5" htmlFor="contact-message">Message</label>
                    <textarea id="contact-message" className="input textarea" placeholder="Tell us what's on your mind..." />
                  </div>
                  <button id="contact-submit" type="submit" className="w-full bg-primary-500 text-white font-medium h-11 rounded-xl hover:bg-primary-600 transition-colors flex items-center justify-center gap-2 shadow-soft-sm">
                    Send message <ArrowRight className="size-4" />
                  </button>
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

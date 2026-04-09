import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Terms of Service — GSF | Global Society of Founders",
  description: "GSF terms of service and platform usage agreement.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-background">
        <div className="section-container py-16 max-w-3xl">
          <h1 className="text-4xl font-semibold text-text-primary mb-2">Terms of Service</h1>
          <p className="text-sm text-text-muted mb-12">Last updated: April 1, 2026</p>

          {[
            {
              title: "1. Acceptance of terms",
              body: "By accessing or using GSF's platform, programs, or community, you agree to be bound by these terms. If you do not agree, please do not use our services.",
            },
            {
              title: "2. Eligibility",
              body: "GSF programs are open to students and recent graduates (within 2 years of graduation) aged 16 or older. By applying, you confirm that you meet these criteria.",
            },
            {
              title: "3. Community conduct",
              body: "You agree to treat all GSF members — students, mentors, and staff — with respect. Harassment, discrimination, plagiarism, and intellectual property theft are grounds for immediate removal from the program.",
            },
            {
              title: "4. Intellectual property",
              body: "All content you create remains yours. By sharing content in GSF community spaces, you grant GSF a non-exclusive license to feature it for marketing purposes. GSF's platform, branding, and curriculum content remain the intellectual property of GSF.",
            },
            {
              title: "5. Program participation",
              body: "GSF programs are free of charge. Acceptance does not guarantee a spot in future cohorts. We reserve the right to remove participants who consistently violate community standards or fail to meet participation requirements.",
            },
            {
              title: "6. Limitation of liability",
              body: "GSF is a community and educational platform. We do not guarantee business outcomes, funding, or commercial success. Participation in GSF is at your own risk and initiative.",
            },
            {
              title: "7. Changes to terms",
              body: "We may update these terms from time to time. Significant changes will be communicated via email. Continued use of GSF after changes constitutes acceptance of the new terms.",
            },
          ].map(({ title, body }) => (
            <section key={title} className="mb-10">
              <h2 className="text-lg font-semibold text-text-primary mb-3">{title}</h2>
              <p className="text-text-secondary leading-relaxed">{body}</p>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

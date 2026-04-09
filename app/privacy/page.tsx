import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Privacy Policy — GSF | Global Society of Founders",
  description: "GSF privacy policy and data handling practices.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-background">
        <div className="section-container py-16 max-w-3xl">
          <h1 className="text-4xl font-semibold text-text-primary mb-2">Privacy Policy</h1>
          <p className="text-sm text-text-muted mb-12">Last updated: April 1, 2026</p>

          {[
            {
              title: "1. Information we collect",
              body: "We collect information you provide directly — name, email, university, and startup details when you apply or create an account. We also collect usage data such as pages visited, features used, and session duration to improve our platform.",
            },
            {
              title: "2. How we use your information",
              body: "We use your information to operate and improve GSF programs, communicate with you about your application and cohort, send educational content and insights (with your consent), and match you with relevant mentors and experts.",
            },
            {
              title: "3. How we share your information",
              body: "We do not sell your personal data. We may share limited information with GSF expert mentors (name, background) to facilitate sessions, and with third-party service providers who operate under strict data processing agreements.",
            },
            {
              title: "4. Data retention",
              body: "We retain your data for as long as your account is active, plus a reasonable period afterward in case you rejoin. You may request deletion of your data at any time by emailing hello@gsf.community.",
            },
            {
              title: "5. Your rights",
              body: "Depending on your location, you may have the right to access, update, or delete your personal data. You may also opt out of marketing communications at any time using the unsubscribe link in any email.",
            },
            {
              title: "6. Cookies",
              body: "We use essential cookies to keep you logged in and analyze usage. You can control cookie preferences in your browser settings. For more information, see our Cookie Policy.",
            },
            {
              title: "7. Contact",
              body: "For any privacy-related questions, please contact us at privacy@gsf.community.",
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

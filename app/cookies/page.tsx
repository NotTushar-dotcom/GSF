import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Cookie Policy — GSF | Global Society of Founders",
  description: "GSF cookie policy and how we use cookies.",
};

export default function CookiesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-background">
        <div className="section-container py-16 max-w-3xl">
          <h1 className="text-4xl font-semibold text-text-primary mb-2">Cookie Policy</h1>
          <p className="text-sm text-text-muted mb-12">Last updated: April 1, 2026</p>

          {[
            {
              title: "What are cookies?",
              body: "Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences and understand how you use the site.",
            },
            {
              title: "How we use cookies",
              body: "GSF uses cookies for authentication (keeping you logged in), analytics (understanding how the platform is used), and performance (making pages load faster). We do not use cookies for advertising or tracking across third-party sites.",
            },
            {
              title: "Types of cookies we use",
              body: "Essential cookies: required for core platform functionality. Analytics cookies: help us understand page performance and user flows (using privacy-first tools). Preference cookies: remember your settings such as theme and language.",
            },
            {
              title: "Your choices",
              body: "You can control or delete cookies through your browser settings. Disabling essential cookies may affect core functionality. You can also opt out of analytics cookies by adjusting your browser's tracking protection settings.",
            },
            {
              title: "Contact",
              body: "If you have questions about our cookie practices, contact us at privacy@gsf.community.",
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

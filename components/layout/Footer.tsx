import Link from "next/link";
import Image from "next/image";
import { Globe, Link2, ExternalLink } from "lucide-react";

const FOOTER_LINKS = {
  Platform: [
    { label: "Connect",   href: "/connect" },
    { label: "Ventures",  href: "/ventures" },
    { label: "Experts",   href: "/experts" },
    { label: "Community", href: "/community" },
    { label: "Insights",  href: "/insights" },
  ],
  Company: [
    { label: "About",    href: "/about" },
    { label: "Careers",  href: "/careers" },
    { label: "Contact",  href: "/contact" },
    { label: "Login",    href: "/login" },
    { label: "Join Free",href: "/sign-up" },
  ],
  Legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms",   href: "/terms" },
    { label: "Cookies", href: "/cookies" },
  ],
};

export function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--bg-canvas)", borderTopColor: "var(--border-default)" }} className="border-t">
      <div className="section-container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

          {/* Brand */}
          <div className="md:col-span-2 space-y-5">
            <Link href="/" className="flex items-center gap-3 w-fit group">
              <div className="logo-circle group-hover:shadow-[0_0_0_3px_rgba(91,108,255,0.2)] transition-all">
                <Image src="/gsf-logo.jpeg" alt="GSF" width={36} height={36} className="object-cover w-full h-full" />
              </div>
              <div>
                <span className="font-bold text-base tracking-tight block" style={{ color: "var(--text-primary)" }}>GSF</span>
                <span className="text-[10px] tracking-widest uppercase font-medium" style={{ color: "var(--text-muted)" }}>Global Society of Founders</span>
              </div>
            </Link>

            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "var(--text-secondary)" }}>
              A global-first digital platform for student founders. Connect with world-class experts, list your venture, and build what matters.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full" style={{ backgroundColor: "rgba(91,108,255,0.08)", border: "1px solid rgba(91,108,255,0.2)" }}>
              <span className="size-1.5 rounded-full" style={{ backgroundColor: "var(--accent-indigo)" }} />
              <span className="text-xs font-medium" style={{ color: "var(--accent-indigo)" }}>Free for 30 days · No credit card</span>
            </div>

            <div className="flex items-center gap-2">
              {[
                { icon: Globe,       href: "https://linkedin.com",  label: "LinkedIn" },
                { icon: Link2,       href: "https://twitter.com",   label: "Twitter" },
                { icon: ExternalLink,href: "https://instagram.com", label: "Instagram" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="size-9 rounded-lg flex items-center justify-center transition-all hover-scale"
                  style={{
                    border: "1px solid var(--border-default)",
                    backgroundColor: "var(--bg-surface)",
                    color: "var(--text-muted)",
                  }}
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h4 className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--text-primary)" }}>
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3" style={{ borderTopColor: "var(--border-default)" }}>
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} Global Society of Founders. All rights reserved.
          </p>
          <p className="text-xs italic" style={{ color: "var(--text-muted)", fontFamily: "'Playfair Display', serif" }}>
            A Society for Founders — Not Talkers.
          </p>
        </div>
      </div>
    </footer>
  );
}

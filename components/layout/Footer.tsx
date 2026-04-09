import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const FOOTER_LINKS = {
  Product: [
    { label: "Programs", href: "/programs" },
    { label: "Community", href: "/community" },
    { label: "Experts", href: "/experts" },
    { label: "Blog", href: "/insights" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Team", href: "/about#team" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Cookies", href: "/cookies" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-white border-t border-border">
      <div className="section-container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="size-8 rounded-xl bg-primary-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <span className="font-semibold text-text-primary">GSF</span>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed max-w-xs">
              Global Society of Founders — helping students move from startup curiosity
              to founder clarity through structured cohort journeys.
            </p>
            <div className="flex items-center gap-3">
              {["twitter", "linkedin", "instagram"].map((social) => (
                <a
                  key={social}
                  href={`https://${social}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-9 rounded-xl border border-border flex items-center justify-center text-text-muted hover:text-text-primary hover:border-gray-300 transition-colors"
                  aria-label={social}
                >
                  <ArrowUpRight className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h4 className="text-xs font-semibold text-text-primary uppercase tracking-wider">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} Global Society of Founders. All rights reserved.
          </p>
          <p className="text-xs text-text-muted">
            Building the next generation of founders, one cohort at a time.
          </p>
        </div>
      </div>
    </footer>
  );
}

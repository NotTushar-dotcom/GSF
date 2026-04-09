import Link from "next/link";
import Image from "next/image";
import { Globe, Link2, ExternalLink } from "lucide-react";

const FOOTER_LINKS = {
  Platform: [
    { label: "Connect", href: "/connect" },
    { label: "Ventures", href: "/ventures" },
    { label: "Experts", href: "/experts" },
    { label: "Community", href: "/community" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
    { label: "Insights", href: "/insights" },
  ],
  Legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Cookies", href: "/cookies" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#F7F2EC] border-t border-[#D2C4B4]">
      <div className="section-container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

          {/* Brand */}
          <div className="md:col-span-2 space-y-5">
            <Link href="/" className="flex items-center gap-3 w-fit group">
              <div className="logo-circle group-hover:shadow-[0_4px_16px_rgba(129,166,198,0.35)] transition-shadow">
                <Image src="/gsf-logo.jpeg" alt="GSF" width={40} height={40} className="object-cover w-full h-full" />
              </div>
              <div>
                <span className="font-semibold text-[#1A2332] text-base tracking-tight block">GSF</span>
                <span className="text-[10px] text-[#8A95A3] tracking-widest uppercase font-medium">Global Society of Founders</span>
              </div>
            </Link>

            <p className="text-sm text-[#4A5668] leading-relaxed max-w-xs">
              Where students meet venture creators. Connect with experts, list your startup ideas, and build with the best.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EEF4F9] border border-[#AACDDC]">
              <span className="size-1.5 rounded-full bg-[#81A6C6]" />
              <span className="text-xs font-medium text-[#3D74A0]">Free for 30 days · No credit card</span>
            </div>

            <div className="flex items-center gap-2">
              {[
                { icon: Globe, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Link2, href: "https://twitter.com", label: "Twitter" },
                { icon: ExternalLink, href: "https://instagram.com", label: "Instagram" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="size-9 rounded-lg border border-[#D2C4B4] bg-white flex items-center justify-center text-[#8A95A3] hover:text-[#81A6C6] hover:border-[#AACDDC] transition-all"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h4 className="text-xs font-semibold text-[#1A2332] uppercase tracking-widest">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#4A5668] hover:text-[#3D74A0] transition-colors"
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
        <div className="mt-12 pt-6 border-t border-[#D2C4B4] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#8A95A3]">
            © {new Date().getFullYear()} Global Society of Founders. All rights reserved.
          </p>
          <p className="text-xs text-[#8A95A3] italic" style={{ fontFamily: "'Playfair Display', serif" }}>
            A Society for Founders — Not Talkers.
          </p>
        </div>
      </div>
    </footer>
  );
}

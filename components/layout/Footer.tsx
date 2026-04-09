import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

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
    { label: "Blog", href: "/insights" },
  ],
  Legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Cookies", href: "/cookies" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#0D0D24] border-t border-[#1E1E45]">
      <div className="section-container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="md:col-span-2 space-y-5">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="size-9 rounded-xl overflow-hidden border border-[#2233FF40]">
                <Image src="/gsf-logo.png" alt="GSF" width={36} height={36} className="object-cover" />
              </div>
              <div>
                <span
                  className="font-black text-lg tracking-wider text-white uppercase block"
                  style={{ fontFamily: "'Exo 2', sans-serif" }}
                >
                  GSF
                </span>
                <div className="text-[9px] text-[#5B6080] tracking-widest uppercase -mt-0.5">
                  Global Society of Founders
                </div>
              </div>
            </Link>
            <p className="text-sm text-[#9BA3D4] leading-relaxed max-w-xs">
              A Society for Founders — Not Talkers. Connect with experts, list your ventures, and find funding.
            </p>
            <p className="text-xs text-[#5B6080] font-semibold tracking-wider uppercase" style={{ fontFamily: "'Exo 2', sans-serif" }}>
              30 days free · Then subscription
            </p>
            <div className="flex items-center gap-3">
              {["twitter", "linkedin", "instagram"].map((social) => (
                <a
                  key={social}
                  href={`https://${social}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-9 rounded-xl border border-[#1E1E45] flex items-center justify-center text-[#5B6080] hover:text-[#F0F0FF] hover:border-[#2233FF40] transition-all"
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
              <h4
                className="text-xs font-bold text-[#F0F0FF] uppercase tracking-widest"
                style={{ fontFamily: "'Exo 2', sans-serif" }}
              >
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#9BA3D4] hover:text-[#F0F0FF] transition-colors"
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
        <div className="mt-12 pt-6 border-t border-[#1E1E45] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#5B6080]">
            © {new Date().getFullYear()} Global Society of Founders. All rights reserved.
          </p>
          <p className="text-xs text-[#5B6080]" style={{ fontFamily: "'Exo 2', sans-serif" }}>
            A Society for Founders — Not Talkers.
          </p>
        </div>
      </div>
    </footer>
  );
}

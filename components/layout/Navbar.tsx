"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Video, Lightbulb, Users, BookOpen, Info, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Connect", href: "/connect", icon: Video },
  { label: "Ventures", href: "/ventures", icon: Lightbulb },
  { label: "Experts", href: "/experts", icon: Users },
  { label: "Community", href: "/community", icon: BookOpen },
  { label: "About", href: "/about", icon: Info },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[#07071A]/95 backdrop-blur-md border-b border-[#1E1E45] shadow-[0_4px_20px_rgba(34,51,255,0.08)]"
            : "bg-transparent"
        )}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="size-9 rounded-xl overflow-hidden border border-[#2233FF40] shadow-[0_0_12px_rgba(34,51,255,0.3)] group-hover:shadow-[0_0_20px_rgba(34,51,255,0.5)] transition-shadow duration-200">
                <Image src="/gsf-logo.png" alt="GSF" width={36} height={36} className="object-cover" />
              </div>
              <div>
                <span
                  className="font-black text-lg tracking-wider text-white uppercase"
                  style={{ fontFamily: "'Exo 2', sans-serif" }}
                >
                  GSF
                </span>
                <div className="text-[9px] text-[#5B6080] tracking-widest uppercase -mt-0.5 hidden sm:block">
                  Global Society of Founders
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-150 flex items-center gap-2",
                    pathname === link.href
                      ? "text-[#6677FF] bg-[#2233FF15] border border-[#2233FF20]"
                      : "text-[#9BA3D4] hover:text-[#F0F0FF] hover:bg-[#1E1E45]"
                  )}
                  style={{ fontFamily: "'Exo 2', sans-serif" }}
                >
                  <link.icon className="size-3.5" />
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-2">
              <Link
                href="/sign-in"
                className="px-4 py-2 text-sm font-semibold text-[#9BA3D4] hover:text-white transition-colors"
                style={{ fontFamily: "'Exo 2', sans-serif" }}
              >
                Log in
              </Link>
              <Link
                href="/sign-up"
                className="btn-primary py-2 px-5 text-sm"
              >
                <Rocket className="size-3.5" />
                Get Started Free
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 rounded-lg text-[#9BA3D4] hover:bg-[#1E1E45] transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 bg-[#0D0D24]/98 border-b border-[#1E1E45] backdrop-blur-md lg:hidden"
          >
            <div className="section-container py-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-colors",
                    pathname === link.href
                      ? "text-[#6677FF] bg-[#2233FF15]"
                      : "text-[#9BA3D4] hover:text-[#F0F0FF] hover:bg-[#1E1E45]"
                  )}
                  style={{ fontFamily: "'Exo 2', sans-serif" }}
                >
                  <link.icon className="size-4" />
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-[#1E1E45] flex flex-col gap-2">
                <Link
                  href="/sign-in"
                  onClick={() => setMobileOpen(false)}
                  className="btn-outline w-full justify-center py-2.5"
                >
                  Log in
                </Link>
                <Link
                  href="/sign-up"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary w-full justify-center py-2.5"
                >
                  <Rocket className="size-4" />
                  Get Started Free
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

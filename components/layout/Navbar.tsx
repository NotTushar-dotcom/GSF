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
            ? "bg-white/95 backdrop-blur-md border-b border-[#D2C4B4] shadow-[0_2px_16px_rgba(26,35,50,0.07)]"
            : "bg-transparent"
        )}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="logo-circle group-hover:shadow-[0_4px_16px_rgba(129,166,198,0.4)] transition-shadow duration-200">
                <Image
                  src="/gsf-logo.jpeg"
                  alt="GSF Logo"
                  width={40}
                  height={40}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <span className="font-semibold text-[#1A2332] text-base tracking-tight leading-none block">
                  GSF
                </span>
                <span className="text-[10px] text-[#8A95A3] tracking-widest uppercase font-medium leading-none hidden sm:block">
                  Global Society of Founders
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-150",
                    pathname === link.href
                      ? "text-[#3D74A0] bg-[#EEF4F9] border border-[#AACDDC]"
                      : "text-[#4A5668] hover:text-[#1A2332] hover:bg-[#F3E3D0]/60"
                  )}
                >
                  <link.icon className="size-3.5" />
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-2">
              <Link href="/sign-in" className="btn-ghost text-sm py-2 px-4">
                Log in
              </Link>
              <Link href="/sign-up" className="btn-primary text-sm py-2 px-5">
                <Rocket className="size-3.5" />
                Get Started Free
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 rounded-lg text-[#4A5668] hover:bg-[#F3E3D0] transition-colors"
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
            transition={{ duration: 0.18 }}
            className="fixed inset-x-0 top-16 z-40 bg-white/98 border-b border-[#D2C4B4] backdrop-blur-md shadow-soft-md lg:hidden"
          >
            <div className="section-container py-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors",
                    pathname === link.href
                      ? "text-[#3D74A0] bg-[#EEF4F9]"
                      : "text-[#4A5668] hover:text-[#1A2332] hover:bg-[#F3E3D0]/60"
                  )}
                >
                  <link.icon className="size-4" />
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-[#D2C4B4] flex flex-col gap-2">
                <Link href="/sign-in" onClick={() => setMobileOpen(false)} className="btn-outline w-full justify-center">
                  Log in
                </Link>
                <Link href="/sign-up" onClick={() => setMobileOpen(false)} className="btn-primary w-full justify-center">
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

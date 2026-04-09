"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Programs", href: "/programs" },
  { label: "Community", href: "/community" },
  { label: "Experts", href: "/experts" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
  { label: "Apply", href: "/apply" },
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
            ? "bg-white/90 backdrop-blur-md border-b border-border shadow-soft-sm"
            : "bg-transparent"
        )}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="size-8 rounded-xl bg-primary-500 flex items-center justify-center shadow-soft-sm group-hover:shadow-glow-primary transition-shadow duration-200">
                <span className="text-white font-bold text-sm tracking-tight">G</span>
              </div>
              <span className="font-semibold text-text-primary tracking-tight">
                GSF
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-150",
                    pathname === link.href
                      ? "text-primary-600 bg-primary-50"
                      : "text-text-secondary hover:text-text-primary hover:bg-gray-100"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-2">
              <Button variant="ghost" size="md" asChild>
                <Link href="/sign-in">Log in</Link>
              </Button>
              <Button variant="primary" size="md" asChild>
                <Link href="/sign-up">Join Cohort</Link>
              </Button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 rounded-lg text-text-secondary hover:bg-gray-100 transition-colors"
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
            className="fixed inset-x-0 top-16 z-40 bg-white border-b border-border shadow-soft-lg lg:hidden"
          >
            <div className="section-container py-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center px-3 py-2.5 rounded-xl text-sm font-medium transition-colors",
                    pathname === link.href
                      ? "text-primary-600 bg-primary-50"
                      : "text-text-secondary hover:text-text-primary hover:bg-gray-50"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-border flex flex-col gap-2">
                <Button variant="outline" size="lg" asChild>
                  <Link href="/sign-in" onClick={() => setMobileOpen(false)}>
                    Log in
                  </Link>
                </Button>
                <Button variant="primary" size="lg" asChild>
                  <Link href="/sign-up" onClick={() => setMobileOpen(false)}>
                    Join Cohort
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

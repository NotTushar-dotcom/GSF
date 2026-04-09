"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Eye, EyeOff, CheckCircle2, Rocket, Star, Zap } from "lucide-react";
import { setSession } from "@/lib/auth";

/* Google icon SVG component */
function GoogleIcon() {
  return (
    <svg className="size-4 flex-shrink-0" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  );
}

const MOCK_GOOGLE_ACCOUNTS = [
  { name: "Arjun Sharma",  email: "arjun@gmail.com",  avatar: "AS", role: "founder" as const },
  { name: "Riya Mehta",    email: "riya@gmail.com",   avatar: "RM", role: "founder" as const },
  { name: "Vikram Nair",   email: "vikram@gmail.com", avatar: "VN", role: "expert"  as const },
];

type Tab = "founder" | "expert";

export default function LoginPage() {
  const router = useRouter();
  const [tab, setTab] = useState<Tab>("founder");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [googlePickerOpen, setGooglePickerOpen] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [googleSuccess, setGoogleSuccess] = useState(false);

  /* ── Demo credentials ── */
  const DEMO = {
    founder: { email: "abc123@gmail.com", password: "123456" },
    expert:  { email: "expert@gsf.com",   password: "123456" },
  };

  function autofill() {
    setEmail(DEMO[tab].email);
    setPassword(DEMO[tab].password);
    setError("");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setTimeout(() => {
      if (email === DEMO.founder.email && password === "123456") {
        setSession({ id: "1", name: "Arjun Sharma", email, role: "founder", avatar: "AS", credits: 600, plan: "trial", planExpiresAt: "" });
        router.push("/dashboard");
      } else if (email === DEMO.expert.email && password === "123456") {
        setSession({ id: "2", name: "Vikram Nair", email, role: "expert", avatar: "VN", credits: 420, plan: "basic", planExpiresAt: "" });
        router.push("/expert-dashboard");
      } else {
        setError("Invalid email or password. Use demo credentials below.");
      }
      setLoading(false);
    }, 800);
  }

  function handleGooglePick(account: typeof MOCK_GOOGLE_ACCOUNTS[0]) {
    setGoogleLoading(true);
    setTimeout(() => {
      setGoogleLoading(false);
      setGoogleSuccess(true);
      setSession({
        id: account.role === "expert" ? "2" : "1",
        name: account.name,
        email: account.email,
        role: account.role,
        avatar: account.avatar,
        credits: account.role === "expert" ? 420 : 600,
        plan: "trial",
        planExpiresAt: "",
      });
      setTimeout(() => {
        router.push(account.role === "expert" ? "/expert-dashboard" : "/dashboard");
      }, 900);
    }, 1200);
  }

  return (
    <main className="min-h-screen flex items-center justify-center pt-6 pb-12 px-4"
      style={{ backgroundColor: "var(--bg-base)" }}>
      {/* Background blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-[120px] opacity-30" style={{ background: "radial-gradient(circle, #5B6CFF, transparent)" }} />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full blur-[90px] opacity-20" style={{ background: "radial-gradient(circle, #4FD1C5, transparent)" }} />
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="size-14 rounded-2xl overflow-hidden border-2 mb-4 shadow-[0_0_30px_rgba(91,108,255,0.3)]" style={{ borderColor: "rgba(91,108,255,0.4)" }}>
            <Image src="/gsf-logo.jpeg" alt="GSF" width={56} height={56} className="object-cover w-full h-full" />
          </div>
          <h1 className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "var(--text-primary)" }}>
            Welcome back
          </h1>
          <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>Sign in to your GSF account</p>
        </div>

        <div className="card p-8">
          {/* Role tabs */}
          <div className="flex p-1 rounded-xl mb-6" style={{ backgroundColor: "var(--bg-surface-2)", border: "1px solid var(--border-soft)" }}>
            {(["founder", "expert"] as Tab[]).map(t => (
              <button key={t} onClick={() => { setTab(t); setError(""); }}
                className="flex-1 py-2 rounded-lg text-sm font-medium transition-all capitalize"
                style={tab === t
                  ? { backgroundColor: "var(--accent-indigo)", color: "white", boxShadow: "0 2px 8px rgba(91,108,255,0.35)" }
                  : { color: "var(--text-muted)" }}>
                <span className="flex items-center justify-center gap-1.5">
                  {t === "founder" ? <Rocket className="size-3.5" /> : <Star className="size-3.5" />}
                  {t === "founder" ? "Founder" : "Expert"}
                </span>
              </button>
            ))}
          </div>

          {/* Google Sign In */}
          <div className="relative mb-4">
            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={() => { setGooglePickerOpen(true); setGoogleSuccess(false); }}
              className="w-full flex items-center justify-center gap-3 py-2.5 rounded-xl border font-medium text-sm transition-all hover:shadow-md"
              style={{
                backgroundColor: "var(--bg-surface)",
                borderColor: "var(--border-default)",
                color: "var(--text-primary)"
              }}
            >
              <GoogleIcon />
              Continue with Google
            </motion.button>

            {/* Google Picker Dropdown */}
            <AnimatePresence>
              {googlePickerOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.97 }}
                  className="absolute top-full left-0 right-0 mt-2 rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.18)] z-50 overflow-hidden"
                  style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-default)" }}
                >
                  <div className="px-4 py-3 border-b" style={{ borderBottomColor: "var(--border-soft)" }}>
                    <p className="text-xs font-semibold" style={{ color: "var(--text-muted)" }}>Choose an account</p>
                  </div>
                  {googleLoading ? (
                    <div className="flex items-center justify-center py-6">
                      <div className="size-6 rounded-full border-2 border-t-[#4285F4] animate-spin" style={{ borderColor: "var(--border-default)", borderTopColor: "#4285F4" }} />
                    </div>
                  ) : googleSuccess ? (
                    <div className="flex items-center justify-center gap-2 py-5 text-emerald-500">
                      <CheckCircle2 className="size-5" />
                      <span className="text-sm font-medium">Signing you in…</span>
                    </div>
                  ) : (
                    <>
                      {MOCK_GOOGLE_ACCOUNTS
                        .filter(a => tab === "expert" ? a.role === "expert" : a.role === "founder")
                        .map(account => (
                          <button
                            key={account.email}
                            onClick={() => handleGooglePick(account)}
                            className="w-full flex items-center gap-3 px-4 py-3 text-left transition-colors"
                            style={{ borderBottom: "1px solid var(--border-soft)" }}
                            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "var(--bg-surface-2)")}
                            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "transparent")}
                          >
                            <div className="size-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                              style={{ background: "linear-gradient(135deg, #4285F4, #34A853)" }}>
                              {account.avatar}
                            </div>
                            <div>
                              <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>{account.name}</p>
                              <p className="text-xs" style={{ color: "var(--text-muted)" }}>{account.email}</p>
                            </div>
                            <span className="ml-auto badge badge-blue text-[10px]">{account.role}</span>
                          </button>
                        ))}
                      <button
                        onClick={() => setGooglePickerOpen(false)}
                        className="w-full text-center py-2.5 text-xs"
                        style={{ color: "var(--text-muted)" }}
                      >
                        Use another account
                      </button>
                    </>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="relative my-5">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t" style={{ borderTopColor: "var(--border-soft)" }} />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 text-xs" style={{ backgroundColor: "var(--bg-card)", color: "var(--text-muted)" }}>or sign in with email</span>
            </div>
          </div>

          {/* Email form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-muted)" }}>Email</label>
              <input type="email" className="input" value={email} placeholder={tab === "founder" ? "abc123@gmail.com" : "expert@gsf.com"}
                onChange={e => { setEmail(e.target.value); setError(""); }} required />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-muted)" }}>Password</label>
              <div className="relative">
                <input type={showPw ? "text" : "password"} className="input pr-10" value={password} placeholder="••••••"
                  onChange={e => { setPassword(e.target.value); setError(""); }} required />
                <button type="button" onClick={() => setShowPw(!showPw)}
                  className="absolute right-3 top-1/2 -translate-y-1/2" style={{ color: "var(--text-muted)" }}>
                  {showPw ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                </button>
              </div>
            </div>

            {error && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs text-red-500 p-2 rounded-lg"
                style={{ backgroundColor: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)" }}>
                {error}
              </motion.p>
            )}

            <button type="submit" disabled={loading}
              className="btn-primary w-full justify-center py-2.5 relative">
              {loading
                ? <span className="size-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                : <><ArrowRight className="size-4" /> Sign in</>
              }
            </button>
          </form>

          {/* Autofill helper */}
          <button onClick={autofill} className="w-full mt-3 py-2 text-xs rounded-xl border transition-all flex items-center justify-center gap-1.5"
            style={{ borderColor: "var(--border-soft)", color: "var(--text-muted)", backgroundColor: "var(--bg-surface-2)" }}>
            <Zap className="size-3" /> Auto-fill demo {tab} credentials
          </button>

          <p className="text-center text-xs mt-5" style={{ color: "var(--text-muted)" }}>
            No account?{" "}
            <Link href="/sign-up" className="font-medium" style={{ color: "var(--accent-indigo)" }}>
              Create one free
            </Link>
          </p>
        </div>

        {/* Trial banner */}
        <div className="mt-4 flex items-center gap-2 justify-center text-xs" style={{ color: "var(--text-muted)" }}>
          <Rocket className="size-3" />
          <span>Basic plan free for 30 days · No credit card required · Cancel anytime</span>
        </div>
      </div>

      {/* Overlay to close picker */}
      {googlePickerOpen && !googleLoading && !googleSuccess && (
        <div className="fixed inset-0 z-40" onClick={() => setGooglePickerOpen(false)} />
      )}
    </main>
  );
}

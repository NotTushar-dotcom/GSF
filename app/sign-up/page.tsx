"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Eye, EyeOff, Rocket, CheckCircle2, Star } from "lucide-react";
import { setSession } from "@/lib/auth";

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

type Role = "founder" | "expert";

const MOCK_GOOGLE = [
  { name: "Arjun Sharma",  email: "arjun@gmail.com",  avatar: "AS", role: "founder" as Role },
  { name: "Riya Mehta",    email: "riya@gmail.com",   avatar: "RM", role: "founder" as Role },
  { name: "Vikram Nair",   email: "vikram@gmail.com", avatar: "VN", role: "expert"  as Role },
];

const STEPS = {
  founder: ["Account", "Identity", "Your Startup", "Interests"],
  expert:  ["Account", "Identity", "Expertise",    "Availability"],
};

const SECTORS  = ["EdTech", "FinTech", "HealthTech", "AgriTech", "ClimaTech", "SaaS", "Consumer", "DeepTech", "Other"];
const EXP_YARS = ["0–2 years", "2–5 years", "5–10 years", "10–15 years", "15+ years"];
const DOMAINS  = ["HealthTech", "FinTech", "EdTech", "Product", "Growth", "Legal", "AgriTech", "ClimaTech", "SaaS", "DeepTech", "Fundraising", "Operations"];

export default function SignUpPage() {
  const router = useRouter();
  const [role, setRole] = useState<Role>("founder");
  const [step, setStep] = useState(0);
  const [showPw, setShowPw] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [googlePickerOpen, setGooglePickerOpen] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [googleSuccess, setGoogleSuccess] = useState(false);

  /* Form state — combined for both roles */
  const [f, setF] = useState({
    firstName: "", lastName: "", email: "", password: "",
    /* founder fields */ university: "", year: "", ventureName: "", sector: "", stage: "Ideation", bio: "",
    /* expert fields */ company: "", title: "", experience: "", linkedin: "", website: "",
    specializations: [] as string[],
  });

  function field(key: keyof typeof f, value: string) {
    setF(prev => ({ ...prev, [key]: value }));
  }
  function toggleSpec(d: string) {
    setF(prev => ({
      ...prev,
      specializations: prev.specializations.includes(d) ? prev.specializations.filter(x => x !== d) : [...prev.specializations, d],
    }));
  }

  const steps = STEPS[role];
  const isLast = step === steps.length - 1;
  const pct = ((step) / (steps.length - 1)) * 100;

  function handleGooglePick(account: typeof MOCK_GOOGLE[0]) {
    setGoogleLoading(true);
    setTimeout(() => {
      setGoogleLoading(false);
      setGoogleSuccess(true);
      setSession({ id: account.role === "expert" ? "2" : "1", name: account.name, email: account.email, role: account.role, avatar: account.avatar, credits: 600, plan: "trial", planExpiresAt: "" });
      setTimeout(() => router.push(account.role === "expert" ? "/expert-dashboard" : "/dashboard"), 900);
    }, 1200);
  }

  function handleFinish() {
    setSubmitting(true);
    setTimeout(() => {
      const name = `${f.firstName} ${f.lastName}`.trim() || "New User";
      const initials = name.split(" ").map(w => w[0]).join("").toUpperCase().slice(0, 2);
      setSession({ id: "9", name, email: f.email, role, avatar: initials, credits: 600, plan: "trial", planExpiresAt: "" });
      router.push(role === "expert" ? "/expert-dashboard" : "/dashboard");
    }, 1000);
  }

  return (
    <main className="min-h-screen flex items-center justify-center pt-6 pb-12 px-4" style={{ backgroundColor: "var(--bg-base)" }}>
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/3 w-96 h-96 rounded-full blur-[120px] opacity-20" style={{ background: "radial-gradient(circle, #5B6CFF, transparent)" }} />
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="size-14 rounded-2xl overflow-hidden border-2 mb-4 shadow-[0_0_30px_rgba(91,108,255,0.25)]" style={{ borderColor: "rgba(91,108,255,0.35)" }}>
            <Image src="/gsf-logo.jpeg" alt="GSF" width={56} height={56} className="object-cover w-full h-full" />
          </div>
          <h1 className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "var(--text-primary)" }}>Join GSF</h1>
          <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>Free for 30 days · No credit card needed</p>
        </div>

        {/* Stepper */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            {steps.map((s, i) => (
              <div key={s} className="flex items-center">
                <div className={`size-6 rounded-full flex items-center justify-center text-[10px] font-bold transition-all ${i <= step ? "text-white shadow-md" : "border"}`}
                  style={{
                    backgroundColor: i < step ? "#10B981" : i === step ? "var(--accent-indigo)" : "transparent",
                    borderColor: i > step ? "var(--border-default)" : "transparent",
                    color: i > step ? "var(--text-muted)" : "white",
                  }}>
                  {i < step ? "✓" : i + 1}
                </div>
                {i < steps.length - 1 && (
                  <div className="h-px flex-1 mx-1 w-8 transition-all" style={{ backgroundColor: i < step ? "#10B981" : "var(--border-default)" }} />
                )}
              </div>
            ))}
          </div>
          <div className="progress-bar" style={{ height: "3px" }}>
            <motion.div className="h-full rounded-full"
              style={{ background: "linear-gradient(to right, #5B6CFF, #4FD1C5)", width: `${pct}%` }}
              animate={{ width: `${pct}%` }} transition={{ duration: 0.4 }} />
          </div>
          <p className="text-xs mt-1.5 font-medium" style={{ color: "var(--accent-indigo)" }}>{steps[step]}</p>
        </div>

        <div className="card p-7">
          <AnimatePresence mode="wait">
            <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }}>

              {/* ── STEP 0: Account ── */}
              {step === 0 && (
                <div className="space-y-4">
                  {/* Role selector */}
                  <div>
                    <label className="block text-xs font-medium mb-2" style={{ color: "var(--text-muted)" }}>I am joining as a</label>
                    <div className="grid grid-cols-2 gap-2">
                      {(["founder", "expert"] as Role[]).map(r => (
                        <button key={r} onClick={() => setRole(r)}
                          className="flex flex-col items-center p-3 rounded-xl border transition-all"
                          style={role === r
                            ? { border: "2px solid var(--accent-indigo)", backgroundColor: "rgba(91,108,255,0.08)" }
                            : { border: "1px solid var(--border-default)", backgroundColor: "var(--bg-surface-2)" }}>
                          {r === "founder"
                            ? <Rocket className="size-5 mb-1 text-[var(--accent-indigo)]" />
                            : <Star className="size-5 mb-1 text-amber-400" />}
                          <span className="text-xs font-semibold capitalize" style={{ color: "var(--text-primary)" }}>{r}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Google button */}
                  <div className="relative">
                    <button onClick={() => setGooglePickerOpen(true)}
                      className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border text-sm font-medium transition-all hover:shadow-md"
                      style={{ backgroundColor: "var(--bg-surface)", borderColor: "var(--border-default)", color: "var(--text-primary)" }}>
                      <GoogleIcon /> Continue with Google
                    </button>
                    <AnimatePresence>
                      {googlePickerOpen && (
                        <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }}
                          className="absolute top-full left-0 right-0 mt-2 rounded-2xl overflow-hidden z-50 shadow-[0_8px_40px_rgba(0,0,0,0.18)]"
                          style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-default)" }}>
                          <div className="px-4 py-3 border-b" style={{ borderBottomColor: "var(--border-soft)" }}>
                            <p className="text-xs font-semibold" style={{ color: "var(--text-muted)" }}>Choose an account · {role}</p>
                          </div>
                          {googleLoading ? (
                            <div className="flex items-center justify-center py-6">
                              <div className="size-6 rounded-full border-2 border-t-[#4285F4] animate-spin" style={{ borderColor: "var(--border-default)", borderTopColor: "#4285F4" }} />
                            </div>
                          ) : googleSuccess ? (
                            <div className="flex items-center justify-center gap-2 py-5 text-emerald-500">
                              <CheckCircle2 className="size-5" /><span className="text-sm font-medium">Redirecting to profile setup…</span>
                            </div>
                          ) : (
                            <>
                              {MOCK_GOOGLE.filter(a => a.role === role).map(account => (
                                <button key={account.email} onClick={() => handleGooglePick(account)}
                                  className="w-full flex items-center gap-3 px-4 py-3 text-left transition-colors"
                                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = "var(--bg-surface-2)")}
                                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = "transparent")}
                                  style={{ borderBottom: "1px solid var(--border-soft)" }}>
                                  <div className="size-9 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: "linear-gradient(135deg, #4285F4, #34A853)" }}>{account.avatar}</div>
                                  <div>
                                    <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>{account.name}</p>
                                    <p className="text-xs" style={{ color: "var(--text-muted)" }}>{account.email}</p>
                                  </div>
                                </button>
                              ))}
                              <button onClick={() => setGooglePickerOpen(false)} className="w-full py-2.5 text-xs text-center" style={{ color: "var(--text-muted)" }}>Use another account</button>
                            </>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="relative my-1">
                    <div className="absolute inset-0 flex items-center"><div className="w-full border-t" style={{ borderTopColor: "var(--border-soft)" }} /></div>
                    <div className="relative flex justify-center"><span className="px-3 text-xs" style={{ backgroundColor: "var(--bg-card)", color: "var(--text-muted)" }}>or with email</span></div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium mb-1" style={{ color: "var(--text-muted)" }}>First name</label>
                      <input className="input" value={f.firstName} onChange={e => field("firstName", e.target.value)} placeholder="Arjun" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-1" style={{ color: "var(--text-muted)" }}>Last name</label>
                      <input className="input" value={f.lastName} onChange={e => field("lastName", e.target.value)} placeholder="Sharma" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1" style={{ color: "var(--text-muted)" }}>Email</label>
                    <input type="email" className="input" value={f.email} onChange={e => field("email", e.target.value)} placeholder={role === "founder" ? "you@university.edu" : "expert@company.com"} />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1" style={{ color: "var(--text-muted)" }}>Password</label>
                    <div className="relative">
                      <input type={showPw ? "text" : "password"} className="input pr-10" value={f.password} onChange={e => field("password", e.target.value)} placeholder="Min. 8 characters" />
                      <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2" style={{ color: "var(--text-muted)" }}>
                        {showPw ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* ── STEP 1: Identity ── */}
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium mb-1" style={{ color: "var(--text-muted)" }}>Bio (tell us about yourself)</label>
                    <textarea className="input textarea" placeholder="I'm building in the EdTech space…" value={f.bio} onChange={e => field("bio", e.target.value)} />
                  </div>
                  {role === "founder" ? (
                    <>
                      <div>
                        <label className="block text-xs font-medium mb-1" style={{ color: "var(--text-muted)" }}>University / Institution</label>
                        <input className="input" value={f.university} onChange={e => field("university", e.target.value)} placeholder="IIT Delhi" />
                      </div>
                      <div>
                        <label className="block text-xs font-medium mb-1" style={{ color: "var(--text-muted)" }}>Year of study</label>
                        <select className="input" value={f.year} onChange={e => field("year", e.target.value)}>
                          <option value="">Select year</option>
                          {["1st Year", "2nd Year", "3rd Year", "4th Year", "Masters", "PhD", "Alumni"].map(y => <option key={y}>{y}</option>)}
                        </select>
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <label className="block text-xs font-medium mb-1" style={{ color: "var(--text-muted)" }}>Current Title</label>
                        <input className="input" value={f.title} onChange={e => field("title", e.target.value)} placeholder="VC Partner / ex-Founder / Product Lead" />
                      </div>
                      <div>
                        <label className="block text-xs font-medium mb-1" style={{ color: "var(--text-muted)" }}>Company / Organisation</label>
                        <input className="input" value={f.company} onChange={e => field("company", e.target.value)} placeholder="Sequoia Capital" />
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* ── STEP 2: Founder = Startup | Expert = Expertise ── */}
              {step === 2 && role === "founder" && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium mb-1" style={{ color: "var(--text-muted)" }}>Startup / Venture name</label>
                    <input className="input" value={f.ventureName} onChange={e => field("ventureName", e.target.value)} placeholder="My Startup (or leave blank if idea stage)" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1" style={{ color: "var(--text-muted)" }}>Sector</label>
                    <select className="input" value={f.sector} onChange={e => field("sector", e.target.value)}>
                      <option value="">Select sector…</option>
                      {SECTORS.map(s => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1" style={{ color: "var(--text-muted)" }}>Current stage</label>
                    <div className="grid grid-cols-3 gap-2">
                      {["Ideation", "Research", "MVP", "Funding", "Launch", "PMF"].map(s => (
                        <button key={s} onClick={() => field("stage", s)}
                          className="py-2 px-3 rounded-xl text-xs font-medium border transition-all"
                          style={f.stage === s
                            ? { backgroundColor: "rgba(91,108,255,0.12)", borderColor: "var(--accent-indigo)", color: "var(--accent-indigo)" }
                            : { backgroundColor: "var(--bg-surface-2)", borderColor: "var(--border-default)", color: "var(--text-muted)" }}>
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && role === "expert" && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium mb-2" style={{ color: "var(--text-muted)" }}>Years of experience</label>
                    <div className="grid grid-cols-2 gap-2">
                      {EXP_YARS.map(e => (
                        <button key={e} onClick={() => field("experience", e)}
                          className="py-2 px-3 rounded-xl text-xs font-medium border transition-all"
                          style={f.experience === e
                            ? { backgroundColor: "rgba(91,108,255,0.12)", borderColor: "var(--accent-indigo)", color: "var(--accent-indigo)" }
                            : { backgroundColor: "var(--bg-surface-2)", borderColor: "var(--border-default)", color: "var(--text-muted)" }}>
                          {e}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-2" style={{ color: "var(--text-muted)" }}>Specializations (pick all that apply)</label>
                    <div className="flex flex-wrap gap-2">
                      {DOMAINS.map(d => (
                        <button key={d} onClick={() => toggleSpec(d)}
                          className="badge text-xs transition-all"
                          style={f.specializations.includes(d)
                            ? { backgroundColor: "rgba(91,108,255,0.15)", color: "var(--accent-indigo)", border: "1px solid rgba(91,108,255,0.4)" }
                            : { backgroundColor: "var(--bg-surface-2)", color: "var(--text-muted)", border: "1px solid var(--border-default)" }}>
                          {d}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* ── STEP 3: Founder = Interests | Expert = Availability & Socials ── */}
              {step === 3 && role === "founder" && (
                <div className="space-y-4">
                  <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>What kind of expert sessions are you looking for?</p>
                  <div className="flex flex-wrap gap-2">
                    {["Fundraising", "Product", "Growth", "Legal", "Technical", "Marketing", "Mental Health", "Finance"].map(d => (
                      <button key={d} onClick={() => toggleSpec(d)}
                        className="badge text-xs transition-all"
                        style={f.specializations.includes(d)
                          ? { backgroundColor: "rgba(91,108,255,0.15)", color: "var(--accent-indigo)", border: "1px solid rgba(91,108,255,0.4)" }
                          : { backgroundColor: "var(--bg-surface-2)", color: "var(--text-muted)", border: "1px solid var(--border-default)" }}>
                        {d}
                      </button>
                    ))}
                  </div>
                  <div className="p-4 rounded-2xl" style={{ backgroundColor: "rgba(91,108,255,0.06)", border: "1px solid rgba(91,108,255,0.15)" }}>
                    <p className="text-xs font-semibold mb-1 flex items-center gap-1.5" style={{ color: "var(--accent-indigo)" }}>
                      <CheckCircle2 className="size-3.5" /> Your Basic plan is free for 30 days
                    </p>
                    <p className="text-xs" style={{ color: "var(--text-muted)" }}>600 credits included. Auto-converts to Basic (₹499/mo) unless cancelled.</p>
                  </div>
                </div>
              )}

              {step === 3 && role === "expert" && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium mb-1" style={{ color: "var(--text-muted)" }}>LinkedIn profile URL</label>
                    <input className="input" value={f.linkedin} onChange={e => field("linkedin", e.target.value)} placeholder="linkedin.com/in/yourname" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1" style={{ color: "var(--text-muted)" }}>Personal website (optional)</label>
                    <input className="input" value={f.website} onChange={e => field("website", e.target.value)} placeholder="yourname.com" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1" style={{ color: "var(--text-muted)" }}>Weekly availability (sessions)</label>
                    <select className="input">
                      {["1–2 sessions/week", "3–4 sessions/week", "5+ sessions/week", "Flexible"].map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                  <div className="p-4 rounded-2xl" style={{ backgroundColor: "rgba(79,209,197,0.06)", border: "1px solid rgba(79,209,197,0.2)" }}>
                    <p className="text-xs font-semibold mb-1" style={{ color: "#0E9F8E" }}>✓ GSF Expert Review</p>
                    <p className="text-xs" style={{ color: "var(--text-muted)" }}>Your profile goes to GSF review. You&apos;ll earn credits for every completed session.</p>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Buttons */}
          <div className="flex gap-3 mt-6">
            {step > 0 && (
              <button onClick={() => setStep(s => s - 1)} className="btn-outline flex-1 py-2.5 justify-center">
                ← Back
              </button>
            )}
            <button
              onClick={() => isLast ? handleFinish() : setStep(s => s + 1)}
              disabled={submitting}
              className="btn-primary flex-1 py-2.5 justify-center"
            >
              {submitting ? (
                <span className="size-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
              ) : isLast ? (
                <><Rocket className="size-3.5" /> {role === "founder" ? "Go to Dashboard" : "Submit Profile"}</>
              ) : (
                <>Continue <ArrowRight className="size-3.5" /></>
              )}
            </button>
          </div>

          {step === 0 && (
            <p className="text-center text-xs mt-4" style={{ color: "var(--text-muted)" }}>
              Already have an account?{" "}
              <Link href="/login" className="font-medium" style={{ color: "var(--accent-indigo)" }}>Sign in</Link>
            </p>
          )}
        </div>

        <p className="text-center text-xs mt-4" style={{ color: "var(--text-muted)" }}>
          By signing up you agree to our{" "}
          <Link href="/privacy" className="underline">Privacy Policy</Link> and{" "}
          <Link href="/terms" className="underline">Terms</Link>.
        </p>
      </div>

      {googlePickerOpen && !googleLoading && !googleSuccess && (
        <div className="fixed inset-0 z-40" onClick={() => setGooglePickerOpen(false)} />
      )}
    </main>
  );
}

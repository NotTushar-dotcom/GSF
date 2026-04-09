"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { DashboardShell } from "@/components/layout/DashboardShell";
import { getSession } from "@/lib/auth";
import type { AuthUser } from "@/lib/auth";
import { Edit3, Save, Mail, Globe, Link2, MapPin, Camera, Star, Award, Briefcase, Plus, Trash2 } from "lucide-react";

const DOMAINS_ALL = ["HealthTech", "FinTech", "EdTech", "Product", "Growth", "Legal", "AgriTech", "ClimaTech", "SaaS", "DeepTech"];

const fadeUp = (d = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: d, duration: 0.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

export default function ExpertProfilePage() {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [editing, setEditing] = useState(false);
  const [saved, setSaved] = useState(false);
  const [form, setForm] = useState({
    name: "Vikram Nair",
    bio: "VC Partner at Sequoia Capital India. Former 2x founder (one exit, one still running). Passionate about backing early-stage student founders in FinTech and DeepTech.",
    company: "Sequoia Capital India",
    title: "VC Partner",
    location: "Bengaluru, India",
    email: "expert@gsf.com",
    linkedin: "linkedin.com/in/vikramnair",
    website: "vikramnair.in",
    sessionRate: "100",
    weeklySlots: "4",
    specializations: ["FinTech", "DeepTech", "Fundraising"],
    experience: "5+ years",
  });

  useEffect(() => {
    const s = getSession();
    if (s) {
      setUser(s);
      setForm(prev => ({ ...prev, email: s.email, name: s.name }));
    }
  }, []);

  function handleSave() {
    setSaved(true);
    setEditing(false);
    setTimeout(() => setSaved(false), 2500);
  }

  function toggleSpec(domain: string) {
    setForm(prev => ({
      ...prev,
      specializations: prev.specializations.includes(domain)
        ? prev.specializations.filter(d => d !== domain)
        : [...prev.specializations, domain],
    }));
  }

  return (
    <DashboardShell role="expert">
      <div className="max-w-3xl mx-auto space-y-6">
        <motion.div {...fadeUp(0)} className="flex items-center justify-between flex-wrap gap-3">
          <div>
            <h1 className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "var(--text-primary)" }}>
              Expert Profile
            </h1>
            <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
              Your public expert profile visible to all founders on the platform.
            </p>
          </div>
          <div className="flex items-center gap-2">
            {saved && (
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-emerald-500 font-medium">
                ✓ Saved
              </motion.span>
            )}
            {editing ? (
              <>
                <button onClick={() => setEditing(false)} className="btn-outline text-sm py-2 px-4">Cancel</button>
                <button onClick={handleSave} className="btn-primary text-sm py-2 px-5 flex items-center gap-1.5">
                  <Save className="size-3.5" /> Save
                </button>
              </>
            ) : (
              <button onClick={() => setEditing(true)} className="btn-primary text-sm py-2 px-5 flex items-center gap-1.5">
                <Edit3 className="size-3.5" /> Edit Profile
              </button>
            )}
          </div>
        </motion.div>

        {/* Avatar + hero */}
        <motion.div {...fadeUp(0.05)} className="card p-6">
          <div className="flex items-center gap-5">
            <div className="relative">
              <div className="size-20 rounded-2xl flex items-center justify-center text-2xl font-bold text-white flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #4FD1C5, #5B6CFF)" }}>
                {user?.avatar ?? "VN"}
              </div>
              {editing && (
                <button className="absolute -bottom-1 -right-1 size-7 rounded-lg flex items-center justify-center shadow-md"
                  style={{ backgroundColor: "var(--bg-card)", border: "1.5px solid var(--border-default)" }}>
                  <Camera className="size-3.5" style={{ color: "var(--text-muted)" }} />
                </button>
              )}
            </div>
            <div className="flex-1">
              {editing ? (
                <input className="input text-lg font-bold mb-2" value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })} />
              ) : (
                <h2 className="text-xl font-bold mb-1" style={{ color: "var(--text-primary)" }}>{form.name}</h2>
              )}
              <div className="flex items-center gap-3 flex-wrap">
                <span className="badge badge-teal text-xs flex items-center gap-1">
                  <Award className="size-3" /> Verified Expert
                </span>
                <span className="flex items-center gap-1 text-xs" style={{ color: "var(--text-muted)" }}>
                  <Briefcase className="size-3" />{form.title} @ {form.company}
                </span>
                <span className="flex items-center gap-1 text-xs" style={{ color: "var(--text-muted)" }}>
                  <MapPin className="size-3" />{form.location}
                </span>
              </div>
              <div className="flex items-center gap-1 mt-2">
                {[1,2,3,4,5].map(s => <Star key={s} className="size-3.5 fill-yellow-400 text-yellow-400" />)}
                <span className="text-xs font-medium ml-1" style={{ color: "var(--text-primary)" }}>4.8</span>
                <span className="text-xs ml-1" style={{ color: "var(--text-muted)" }}>(52 reviews)</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Bio + details */}
          <motion.div {...fadeUp(0.1)} className="card p-6 space-y-4">
            <h3 className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>About</h3>
            {[
              { label: "Bio", key: "bio", multiline: true },
              { label: "Title", key: "title" },
              { label: "Company", key: "company" },
              { label: "Location", key: "location" },
              { label: "Experience", key: "experience" },
            ].map(({ label, key, multiline }) => (
              <div key={key}>
                <label className="block text-xs font-medium mb-1" style={{ color: "var(--text-muted)" }}>{label}</label>
                {editing ? (
                  multiline ? (
                    <textarea className="input textarea text-sm" value={String((form as unknown as Record<string, unknown>)[key] ?? "")}
                      onChange={e => setForm({ ...form, [key]: e.target.value })} />
                  ) : (
                    <input className="input text-sm" value={String((form as unknown as Record<string, unknown>)[key] ?? "")}
                      onChange={e => setForm({ ...form, [key]: e.target.value })} />
                  )
                ) : (
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {String((form as unknown as Record<string, unknown>)[key] ?? "") || "—"}
                  </p>
                )}
              </div>
            ))}
          </motion.div>

          <div className="space-y-5">
            {/* Session settings */}
            <motion.div {...fadeUp(0.15)} className="card p-5 space-y-4">
              <h3 className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>Session Settings</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium mb-1" style={{ color: "var(--text-muted)" }}>Credit Rate / session</label>
                  {editing ? (
                    <input type="number" className="input text-sm" value={form.sessionRate}
                      onChange={e => setForm({ ...form, sessionRate: e.target.value })} />
                  ) : (
                    <p className="text-xl font-bold" style={{ color: "var(--accent-indigo)" }}>{form.sessionRate} cr</p>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1" style={{ color: "var(--text-muted)" }}>Slots / week</label>
                  {editing ? (
                    <input type="number" className="input text-sm" value={form.weeklySlots}
                      onChange={e => setForm({ ...form, weeklySlots: e.target.value })} />
                  ) : (
                    <p className="text-xl font-bold" style={{ color: "var(--text-primary)" }}>{form.weeklySlots}</p>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium mb-1" style={{ color: "var(--text-muted)" }}>Email</label>
                {editing ? (
                  <input type="email" className="input text-sm" value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })} />
                ) : (
                  <p className="text-sm" style={{ color: "var(--accent-indigo)" }}>{form.email}</p>
                )}
              </div>
            </motion.div>

            {/* Specializations */}
            <motion.div {...fadeUp(0.2)} className="card p-5">
              <h3 className="text-sm font-semibold mb-3" style={{ color: "var(--text-primary)" }}>Specializations</h3>
              {editing ? (
                <div className="flex flex-wrap gap-2">
                  {DOMAINS_ALL.map(d => (
                    <button key={d} onClick={() => toggleSpec(d)}
                      className="badge text-xs transition-all"
                      style={form.specializations.includes(d)
                        ? { backgroundColor: "rgba(91,108,255,0.15)", color: "var(--accent-indigo)", border: "1px solid rgba(91,108,255,0.4)" }
                        : { backgroundColor: "var(--bg-surface-2)", color: "var(--text-muted)", border: "1px solid var(--border-default)" }
                      }>
                      {d}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {form.specializations.map(d => (
                    <span key={d} className="badge badge-blue text-xs">{d}</span>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}

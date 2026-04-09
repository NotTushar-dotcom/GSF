"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { DashboardShell } from "@/components/layout/DashboardShell";
import { getSession } from "@/lib/auth";
import type { AuthUser } from "@/lib/auth";
import { User, Edit3, Save, Mail, Globe, Link2, MapPin, Camera } from "lucide-react";

const fadeUp = (d = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: d, duration: 0.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

export default function ProfilePage() {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [editing, setEditing] = useState(false);
  const [saved, setSaved] = useState(false);
  const [form, setForm] = useState({
    name: "Arjun Sharma",
    bio: "Student founder building in EdTech. Passionate about peer learning and collaborative education. Studying CS at IIT Delhi.",
    university: "IIT Delhi",
    year: "3rd Year",
    location: "New Delhi, India",
    email: "abc123@gmail.com",
    linkedin: "linkedin.com/in/arjunsharma",
    website: "",
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

  return (
    <DashboardShell role="founder">
      <div className="max-w-3xl mx-auto space-y-6">
        <motion.div {...fadeUp(0)} className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "var(--text-primary)" }}>
              My Profile
            </h1>
            <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
              Your public founder profile visible to experts and investors.
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

        {/* Avatar + name */}
        <motion.div {...fadeUp(0.05)} className="card p-6">
          <div className="flex items-center gap-5">
            <div className="relative">
              <div className="size-20 rounded-2xl flex items-center justify-center text-2xl font-bold text-white flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #5B6CFF, #4FD1C5)" }}>
                {user?.avatar ?? "AS"}
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
                <span className="badge badge-blue text-xs">Founder</span>
                <span className="text-xs" style={{ color: "var(--text-muted)" }}>{form.university} · {form.year}</span>
                <span className="text-xs flex items-center gap-1" style={{ color: "var(--text-muted)" }}>
                  <MapPin className="size-3" />{form.location}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Bio */}
          <motion.div {...fadeUp(0.1)} className="card p-6">
            <div className="flex items-center gap-2 mb-4">
              <User className="size-4" style={{ color: "var(--accent-indigo)" }} />
              <h3 className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>About</h3>
            </div>

            {[
              { label: "Bio", key: "bio", multiline: true },
              { label: "University", key: "university" },
              { label: "Year", key: "year" },
              { label: "Location", key: "location" },
            ].map(({ label, key, multiline }) => (
              <div key={key} className="mb-4 last:mb-0">
                <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-muted)" }}>{label}</label>
                {editing ? (
                  multiline ? (
                    <textarea className="input textarea text-sm" value={(form as Record<string, string>)[key]}
                      onChange={e => setForm({ ...form, [key]: e.target.value })} />
                  ) : (
                    <input className="input text-sm" value={(form as Record<string, string>)[key]}
                      onChange={e => setForm({ ...form, [key]: e.target.value })} />
                  )
                ) : (
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {(form as Record<string, string>)[key] || "—"}
                  </p>
                )}
              </div>
            ))}
          </motion.div>

          {/* Contact */}
          <motion.div {...fadeUp(0.15)} className="card p-6">
            <div className="flex items-center gap-2 mb-4">
              <Mail className="size-4" style={{ color: "var(--accent-indigo)" }} />
              <h3 className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>Contact & Links</h3>
            </div>

            {[
              { label: "Email",    key: "email",    icon: Mail,  type: "email" },
              { label: "LinkedIn", key: "linkedin", icon: Link2, type: "url" },
              { label: "Website",  key: "website",  icon: Globe, type: "url" },
            ].map(({ label, key, icon: Icon, type }) => (
              <div key={key} className="mb-4 last:mb-0">
                <label className="block text-xs font-medium mb-1.5 flex items-center gap-1" style={{ color: "var(--text-muted)" }}>
                  <Icon className="size-3" />{label}
                </label>
                {editing ? (
                  <input type={type} className="input text-sm" value={(form as Record<string, string>)[key]}
                    onChange={e => setForm({ ...form, [key]: e.target.value })} />
                ) : (
                  <p className="text-sm" style={{
                    color: (form as Record<string, string>)[key] ? "var(--accent-indigo)" : "var(--text-muted)"
                  }}>
                    {(form as Record<string, string>)[key] || "Not added"}
                  </p>
                )}
              </div>
            ))}

            {/* Plan badge */}
            <div className="mt-4 p-3 rounded-xl"
              style={{ backgroundColor: "rgba(91,108,255,0.08)", border: "1px solid rgba(91,108,255,0.2)" }}>
              <p className="text-xs font-semibold" style={{ color: "var(--accent-indigo)" }}>Free Trial — 22 days left</p>
              <p className="text-[10px] mt-0.5" style={{ color: "var(--text-muted)" }}>600 credits included</p>
            </div>
          </motion.div>
        </div>
      </div>
    </DashboardShell>
  );
}

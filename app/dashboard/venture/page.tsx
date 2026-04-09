"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { DashboardShell } from "@/components/layout/DashboardShell";
import { useUser } from "@clerk/nextjs";
import { clerkUserToAuthUser } from "@/lib/auth";
import { Lightbulb, Edit3, TrendingUp, Users, DollarSign, Save, Plus, Trash2 } from "lucide-react";

const STAGES = ["Ideation", "Screening", "Research", "MVP", "Funding", "Launch", "PMF"];
const SECTORS = ["EdTech", "FinTech", "HealthTech", "AgriTech", "ClimaTech", "SaaS", "Consumer", "DeepTech", "Other"];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

export default function MyVenturePage() {
  const { user: clerkUser } = useUser();
  const user = clerkUser ? clerkUserToAuthUser(clerkUser) : null;
  const [editing, setEditing] = useState(false);
  const [saved, setSaved] = useState(false);
  const [form, setForm] = useState({
    name: "EduLoop",
    tagline: "AI-powered peer learning for university students",
    description: "EduLoop connects university students in structured cohort journeys, gamifying peer learning with AI-curated content and real-time progress tracking.",
    stage: "Research",
    sector: "EdTech",
    equity: "8",
    fundingGoal: "50000",
    traction: "200 early sign-ups, 3 university pilots, $2K MRR",
    teamSize: "3",
    pitchDeckUrl: "",
  });



  function handleSave() {
    setSaved(true);
    setEditing(false);
    setTimeout(() => setSaved(false), 2500);
  }

  const stageIndex = STAGES.indexOf(form.stage);
  const stageColors = ["#8B5CF6","#3B82F6","#06B6D4","#10B981","#F59E0B","#EF4444","#5B6CFF"];

  return (
    <DashboardShell role="founder">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <motion.div {...fadeUp(0)} className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "var(--text-primary)" }}>
              My Venture
            </h1>
            <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
              Manage your startup profile, terms, and traction data.
            </p>
          </div>
          <div className="flex items-center gap-2">
            {saved && (
              <motion.span initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} className="text-sm text-emerald-500 font-medium">
                ✓ Saved
              </motion.span>
            )}
            {editing ? (
              <>
                <button onClick={() => setEditing(false)} className="btn-outline text-sm py-2 px-4">Cancel</button>
                <button onClick={handleSave} className="btn-primary text-sm py-2 px-5 flex items-center gap-1.5">
                  <Save className="size-3.5" /> Save Changes
                </button>
              </>
            ) : (
              <button onClick={() => setEditing(true)} className="btn-primary text-sm py-2 px-5 flex items-center gap-1.5">
                <Edit3 className="size-3.5" /> Edit Venture
              </button>
            )}
          </div>
        </motion.div>

        {/* Stage progress */}
        <motion.div {...fadeUp(0.05)} className="card p-6">
          <h2 className="text-sm font-semibold mb-4" style={{ color: "var(--text-primary)" }}>Current Stage</h2>
          <div className="flex items-center gap-0 overflow-x-auto pb-2 scrollbar-hide">
            {STAGES.map((s, i) => {
              const isPast    = i < stageIndex;
              const isCurrent = i === stageIndex;
              return (
                <div key={s} className="flex items-center">
                  <div className="flex flex-col items-center gap-1.5 min-w-[70px]">
                    <button
                      onClick={() => editing && setForm({ ...form, stage: s })}
                      className={`size-9 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-all ${
                        editing ? "cursor-pointer hover:scale-110" : ""
                      }`}
                      style={{
                        backgroundColor: isPast ? "#10B981" : isCurrent ? stageColors[i] : "var(--bg-surface-2)",
                        borderColor: isPast ? "#10B981" : isCurrent ? stageColors[i] : "var(--border-default)",
                        color: isPast || isCurrent ? "white" : "var(--text-muted)",
                        boxShadow: isCurrent ? `0 0 16px ${stageColors[i]}60` : "none",
                      }}
                    >
                      {isPast ? "✓" : i + 1}
                    </button>
                    <span className="text-[10px] font-medium text-center leading-tight" style={{ color: isCurrent ? stageColors[i] : "var(--text-muted)" }}>
                      {s}
                    </span>
                  </div>
                  {i < STAGES.length - 1 && (
                    <div className="h-[2px] min-w-[16px] flex-1 mx-1 mt-[-12px]"
                      style={{ backgroundColor: isPast ? "#10B981" : "var(--border-default)" }} />
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Main form / display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Identity */}
          <motion.div {...fadeUp(0.1)} className="card p-6 space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="size-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(91,108,255,0.1)" }}>
                <Lightbulb className="size-4" style={{ color: "var(--accent-indigo)" }} />
              </div>
              <h2 className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>Venture Identity</h2>
            </div>

            {[
              { label: "Venture Name", key: "name", type: "text" },
              { label: "Tagline", key: "tagline", type: "text" },
            ].map(({ label, key, type }) => (
              <div key={key}>
                <label className="block text-xs font-medium mb-1" style={{ color: "var(--text-muted)" }}>{label}</label>
                {editing ? (
                  <input type={type} className="input" value={(form as Record<string, string>)[key]}
                    onChange={e => setForm({ ...form, [key]: e.target.value })} />
                ) : (
                  <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>{(form as Record<string, string>)[key]}</p>
                )}
              </div>
            ))}

            <div>
              <label className="block text-xs font-medium mb-1" style={{ color: "var(--text-muted)" }}>Description</label>
              {editing ? (
                <textarea className="input textarea" value={form.description}
                  onChange={e => setForm({ ...form, description: e.target.value })} />
              ) : (
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{form.description}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium mb-1" style={{ color: "var(--text-muted)" }}>Sector</label>
                {editing ? (
                  <select className="input" value={form.sector} onChange={e => setForm({ ...form, sector: e.target.value })}>
                    {SECTORS.map(s => <option key={s}>{s}</option>)}
                  </select>
                ) : (
                  <span className="badge badge-blue text-xs">{form.sector}</span>
                )}
              </div>
              <div>
                <label className="block text-xs font-medium mb-1" style={{ color: "var(--text-muted)" }}>Team Size</label>
                {editing ? (
                  <input type="number" className="input" value={form.teamSize}
                    onChange={e => setForm({ ...form, teamSize: e.target.value })} />
                ) : (
                  <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{form.teamSize} founders</p>
                )}
              </div>
            </div>
          </motion.div>

          {/* Financial terms */}
          <motion.div {...fadeUp(0.15)} className="card p-6 space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="size-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(245,158,11,0.1)" }}>
                <DollarSign className="size-4 text-amber-500" />
              </div>
              <h2 className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>Deal Terms</h2>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium mb-1" style={{ color: "var(--text-muted)" }}>Equity Offered (%)</label>
                {editing ? (
                  <input type="number" className="input" value={form.equity}
                    onChange={e => setForm({ ...form, equity: e.target.value })} />
                ) : (
                  <p className="text-3xl font-extrabold" style={{ color: "var(--accent-indigo)", fontFamily: "'Playfair Display', serif" }}>
                    {form.equity}%
                  </p>
                )}
              </div>
              <div>
                <label className="block text-xs font-medium mb-1" style={{ color: "var(--text-muted)" }}>Funding Goal (USD)</label>
                {editing ? (
                  <input type="number" className="input" value={form.fundingGoal}
                    onChange={e => setForm({ ...form, fundingGoal: e.target.value })} />
                ) : (
                  <p className="text-3xl font-extrabold" style={{ color: "#10B981", fontFamily: "'Playfair Display', serif" }}>
                    ${Number(form.fundingGoal).toLocaleString()}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium mb-1" style={{ color: "var(--text-muted)" }}>Traction / Milestones</label>
              {editing ? (
                <textarea className="input" style={{ minHeight: 80 }} value={form.traction}
                  onChange={e => setForm({ ...form, traction: e.target.value })} />
              ) : (
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{form.traction}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-medium mb-1" style={{ color: "var(--text-muted)" }}>Pitch Deck URL (optional)</label>
              {editing ? (
                <input type="url" className="input" placeholder="https://your-deck.com" value={form.pitchDeckUrl}
                  onChange={e => setForm({ ...form, pitchDeckUrl: e.target.value })} />
              ) : (
                <p className="text-sm" style={{ color: form.pitchDeckUrl ? "var(--accent-indigo)" : "var(--text-muted)" }}>
                  {form.pitchDeckUrl || "Not added yet"}
                </p>
              )}
            </div>
          </motion.div>
        </div>

        {/* Traction metrics */}
        <motion.div {...fadeUp(0.2)} className="card p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="size-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(16,185,129,0.1)" }}>
                <TrendingUp className="size-4 text-emerald-500" />
              </div>
              <h2 className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>Traction Metrics</h2>
            </div>
            {editing && (
              <button className="text-xs flex items-center gap-1" style={{ color: "var(--accent-indigo)" }}>
                <Plus className="size-3" /> Add metric
              </button>
            )}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Sign-ups",    value: "200",   trend: "+45 this week" },
              { label: "MRR",         value: "$2K",   trend: "+$800 this month" },
              { label: "Pilot Users", value: "3 uni", trend: "Active" },
              { label: "NPS Score",   value: "72",    trend: "Industry avg: 45" },
            ].map(({ label, value, trend }) => (
              <div key={label} className="p-4 rounded-2xl text-center"
                style={{ backgroundColor: "var(--bg-surface-2)", border: "1px solid var(--border-soft)" }}>
                <p className="text-2xl font-bold mb-0.5" style={{ color: "var(--text-primary)", fontFamily: "'Playfair Display', serif" }}>
                  {value}
                </p>
                <p className="text-xs font-medium mb-1" style={{ color: "var(--text-muted)" }}>{label}</p>
                <p className="text-[10px]" style={{ color: "#10B981" }}>{trend}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Team */}
        <motion.div {...fadeUp(0.25)} className="card p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="size-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(91,108,255,0.1)" }}>
                <Users className="size-4" style={{ color: "var(--accent-indigo)" }} />
              </div>
              <h2 className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>Team</h2>
            </div>
            {editing && (
              <button className="text-xs flex items-center gap-1" style={{ color: "var(--accent-indigo)" }}>
                <Plus className="size-3" /> Add member
              </button>
            )}
          </div>
          <div className="space-y-3">
            {[
              { name: "Arjun Sharma",  role: "CEO & Co-founder",    avatar: "AS", domain: "Product" },
              { name: "Riya Mehta",    role: "CTO & Co-founder",    avatar: "RM", domain: "Engineering" },
              { name: "Dev Kapoor",    role: "COO & Co-founder",    avatar: "DK", domain: "Operations" },
            ].map(({ name, role, avatar, domain }) => (
              <div key={name} className="flex items-center gap-3 p-3 rounded-xl"
                style={{ backgroundColor: "var(--bg-surface-2)", border: "1px solid var(--border-soft)" }}>
                <div className="size-9 rounded-full flex items-center justify-center text-xs font-bold text-white"
                  style={{ background: "linear-gradient(135deg, #5B6CFF, #4FD1C5)" }}>
                  {avatar}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{name}</p>
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>{role} · {domain}</p>
                </div>
                {editing && (
                  <button className="p-1.5 rounded-lg text-red-400 hover:bg-red-50 transition-colors">
                    <Trash2 className="size-3.5" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </DashboardShell>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { DashboardShell } from "@/components/layout/DashboardShell";
import { Search, Filter, ChevronDown, TrendingUp, Users, Coins, ArrowRight, Lightbulb, Bookmark, BookmarkCheck } from "lucide-react";

const STAGES = ["All", "Ideation", "Screening", "Research", "MVP", "Funding", "Launch"];
const SECTORS = ["All", "EdTech", "FinTech", "HealthTech", "AgriTech", "SaaS", "Consumer", "ClimaTech", "DeepTech"];
const STAGE_COLORS: Record<string, string> = {
  Ideation: "#8B5CF6", Screening: "#3B82F6", Research: "#06B6D4",
  MVP: "#10B981", Funding: "#F59E0B", Launch: "#EF4444", PMF: "#5B6CFF",
};

const VENTURES = [
  {
    id: 1,
    name: "EduLoop",    founder: "Arjun Sharma",   sector: "EdTech",     stage: "Research",
    equity: "8%", goal: "$50K", traction: "200 sign-ups, 3 pilots",  team: 3, avatar: "EL", avatarBg: "#8B5CF6",
    pitch: "AI-powered peer learning platform for university students with structured cohort journeys.",
    lookingFor: ["EdTech expert", "B2B SaaS mentor", "Growth advisor"],
  },
  {
    id: 2,
    name: "Supplify",  founder: "Priya Mehta",    sector: "FinTech",    stage: "MVP",
    equity: "10%", goal: "$100K", traction: "Beta live, 50 businesses", team: 2, avatar: "SU", avatarBg: "#10B981",
    pitch: "Real-time supply chain financing for SMEs in emerging markets using invoice discounting.",
    lookingFor: ["FinTech expert", "Fundraising advisor", "Legal counsel"],
  },
  {
    id: 3,
    name: "HealthBridge", founder: "Rahul Kumar",  sector: "HealthTech", stage: "Funding",
    equity: "6%", goal: "$200K", traction: "500 patients, 3 hospitals", team: 4, avatar: "HB", avatarBg: "#EF4444",
    pitch: "Bridging rural healthcare access gaps through AI-assisted telemedicine diagnostics.",
    lookingFor: ["HealthTech expert", "Regulatory advisor", "Impact investor"],
  },
  {
    id: 4,
    name: "FoodSense",  founder: "Anika Roy",     sector: "Consumer",   stage: "Ideation",
    equity: "12%", goal: "$30K", traction: "Problem validated, 50 interviews", team: 2, avatar: "FS", avatarBg: "#F59E0B",
    pitch: "Reducing household food waste through AI-powered smart pantry management for urban families.",
    lookingFor: ["Consumer app mentor", "Behavioural economist", "GTM advisor"],
  },
  {
    id: 5,
    name: "ClimaTech Solutions", founder: "Dev S.", sector: "ClimaTech", stage: "Screening",
    equity: "15%", goal: "$80K", traction: "2 pilots in conversation", team: 3, avatar: "CT", avatarBg: "#06B6D4",
    pitch: "Carbon credit marketplace for SMEs to offset operational emissions with verified micro-offsets.",
    lookingFor: ["ClimaTech expert", "Carbon market specialist", "Policy advisor"],
  },
  {
    id: 6,
    name: "AgriChain",  founder: "Moses A.",      sector: "AgriTech",   stage: "Research",
    equity: "9%", goal: "$60K", traction: "150 farmers interviewed", team: 2, avatar: "AC", avatarBg: "#84CC16",
    pitch: "Blockchain-based farm-to-consumer supply chain for smallholder farmers in West Africa.",
    lookingFor: ["AgriTech expert", "Blockchain developer", "Africa market specialist"],
  },
];

const fadeUp = (d = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: d, duration: 0.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

export default function ExpertVentureSearchPage() {
  const [search, setSearch] = useState("");
  const [stage, setStage] = useState("All");
  const [sector, setSector] = useState("All");
  const [saved, setSaved] = useState<number[]>([]);
  const [interest, setInterest] = useState<number | null>(null);
  const [expressed, setExpressed] = useState<number[]>([]);

  const filtered = VENTURES.filter(v => {
    const q = search.toLowerCase();
    const matchQ = !q || v.name.toLowerCase().includes(q) || v.founder.toLowerCase().includes(q)
      || v.sector.toLowerCase().includes(q) || v.pitch.toLowerCase().includes(q);
    const matchStage  = stage === "All" || v.stage === stage;
    const matchSector = sector === "All" || v.sector === sector;
    return matchQ && matchStage && matchSector;
  });

  function toggleSave(id: number) {
    setSaved(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  }

  function expressInterest(id: number) {
    setInterest(id);
    setTimeout(() => {
      setExpressed(prev => [...prev, id]);
      setInterest(null);
    }, 1000);
  }

  return (
    <DashboardShell role="expert">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Header */}
        <motion.div {...fadeUp(0)}>
          <h1 className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "var(--text-primary)" }}>
            Browse Ventures
          </h1>
          <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
            Discover student startups looking for experts at your stage. Express interest to start mentoring.
          </p>
        </motion.div>

        {/* Search + filters */}
        <motion.div {...fadeUp(0.05)} className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4" style={{ color: "var(--text-muted)" }} />
            <input
              className="input pl-9"
              placeholder="Search ventures, founders, sectors..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            <div className="relative">
              <select className="input pr-8 pl-3 py-2 text-sm appearance-none cursor-pointer"
                value={stage} onChange={e => setStage(e.target.value)}>
                {STAGES.map(s => <option key={s}>{s}</option>)}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 size-3.5 pointer-events-none" style={{ color: "var(--text-muted)" }} />
            </div>
            <div className="relative">
              <select className="input pr-8 pl-3 py-2 text-sm appearance-none cursor-pointer"
                value={sector} onChange={e => setSector(e.target.value)}>
                {SECTORS.map(s => <option key={s}>{s}</option>)}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 size-3.5 pointer-events-none" style={{ color: "var(--text-muted)" }} />
            </div>
          </div>
        </motion.div>

        <div className="flex items-center justify-between">
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            <strong style={{ color: "var(--text-primary)" }}>{filtered.length}</strong> ventures found
          </p>
          <div className="flex items-center gap-1">
            <Filter className="size-3.5" style={{ color: "var(--text-muted)" }} />
            <span className="text-xs" style={{ color: "var(--text-muted)" }}>
              {saved.length} saved
            </span>
          </div>
        </div>

        {/* Venture cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filtered.map((v, i) => {
            const stageColor = STAGE_COLORS[v.stage] ?? "#5B6CFF";
            const isSaved     = saved.includes(v.id);
            const isExpressed = expressed.includes(v.id);
            const isLoading   = interest === v.id;

            return (
              <motion.div
                key={v.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="card p-5 flex flex-col hover-scale"
              >
                {/* Top */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="size-12 rounded-xl flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                    style={{ backgroundColor: v.avatarBg }}>
                    {v.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>{v.name}</p>
                      <button onClick={() => toggleSave(v.id)} className="p-1 rounded-lg transition-colors flex-shrink-0"
                        style={{ color: isSaved ? "#F59E0B" : "var(--text-muted)" }}>
                        {isSaved ? <BookmarkCheck className="size-4" /> : <Bookmark className="size-4" />}
                      </button>
                    </div>
                    <p className="text-xs" style={{ color: "var(--text-muted)" }}>by {v.founder}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span
                        className="badge text-[10px]"
                        style={{ backgroundColor: `${stageColor}15`, color: stageColor, border: `1px solid ${stageColor}30` }}
                      >
                        {v.stage}
                      </span>
                      <span className="badge badge-blue text-[10px]">{v.sector}</span>
                    </div>
                  </div>
                </div>

                {/* Pitch */}
                <p className="text-xs leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
                  {v.pitch}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[
                    { label: "Equity", value: v.equity, icon: TrendingUp, color: "#5B6CFF" },
                    { label: "Goal",   value: v.goal,   icon: Coins,      color: "#10B981" },
                    { label: "Team",   value: `${v.team} ppl`, icon: Users, color: "#F59E0B" },
                  ].map(({ label, value, icon: Icon, color }) => (
                    <div key={label} className="p-2 rounded-xl text-center"
                      style={{ backgroundColor: "var(--bg-surface-2)", border: "1px solid var(--border-soft)" }}>
                      <Icon className="size-3.5 mx-auto mb-0.5" style={{ color }} />
                      <p className="text-xs font-bold" style={{ color: "var(--text-primary)" }}>{value}</p>
                      <p className="text-[9px]" style={{ color: "var(--text-muted)" }}>{label}</p>
                    </div>
                  ))}
                </div>

                {/* Looking for */}
                <div className="mb-4">
                  <p className="text-[10px] font-semibold uppercase tracking-wider mb-1.5" style={{ color: "var(--text-muted)" }}>
                    Looking for
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {v.lookingFor.map(tag => (
                      <span key={tag} className="badge badge-warm text-[10px]">{tag}</span>
                    ))}
                  </div>
                </div>

                {/* Traction */}
                <p className="text-[10px] mb-4" style={{ color: "var(--text-muted)" }}>
                  📈 {v.traction}
                </p>

                {/* CTA */}
                <div className="mt-auto pt-3 border-t" style={{ borderTopColor: "var(--border-soft)" }}>
                  {isExpressed ? (
                    <div className="w-full text-center py-2 rounded-xl text-sm font-semibold text-emerald-500"
                      style={{ backgroundColor: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.2)" }}>
                      ✓ Interest expressed — founder notified!
                    </div>
                  ) : (
                    <button
                      onClick={() => expressInterest(v.id)}
                      disabled={isLoading}
                      className="btn-primary w-full justify-center text-sm py-2 flex items-center gap-2"
                    >
                      {isLoading ? (
                        <span className="size-3.5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      ) : (
                        <Lightbulb className="size-3.5" />
                      )}
                      {isLoading ? "Sending..." : "Express Interest"}
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-4xl mb-3">🔍</p>
            <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>No ventures match your filters</p>
            <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>Try adjusting the stage or sector filter</p>
          </div>
        )}
      </div>
    </DashboardShell>
  );
}

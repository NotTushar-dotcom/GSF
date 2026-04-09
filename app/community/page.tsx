"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowUp, ArrowDown, MessageSquare, Share2, Bookmark, PenSquare, TrendingUp, Clock, Flame, Search } from "lucide-react";

const AVATAR_COLORS = [
  { bg: "#DBEAFE", text: "#1E40AF" },
  { bg: "#FCE7F3", text: "#9D174D" },
  { bg: "#D1FAE5", text: "#065F46" },
  { bg: "#FEF3C7", text: "#92400E" },
  { bg: "#EDE9FE", text: "#5B21B6" },
  { bg: "#FFE4E6", text: "#9F1239" },
  { bg: "#CFFAFE", text: "#155E75" },
  { bg: "#F0FDF4", text: "#14532D" },
];

type Post = {
  id: string;
  author: string;
  initials: string;
  avatarColor: { bg: string; text: string };
  role: string;
  roleType: "founder" | "expert" | "investor";
  time: string;
  tag: string;
  title: string;
  body: string;
  upvotes: number;
  comments: number;
  stage?: string;
  pinned?: boolean;
  userVote?: 1 | -1 | null;
};

const STAGE_STYLES: Record<string, { bg: string; text: string; emoji: string }> = {
  "Ideation":            { bg: "#FEF3C7", text: "#92400E", emoji: "💡" },
  "Idea Screening":      { bg: "#EDE9FE", text: "#5B21B6", emoji: "🔍" },
  "Market Research":     { bg: "#DBEAFE", text: "#1E40AF", emoji: "📊" },
  "MVP":                 { bg: "#D1FAE5", text: "#065F46", emoji: "🚀" },
  "Investment & Funding":{ bg: "#FEF9C3", text: "#713F12", emoji: "💰" },
  "Company Launch":      { bg: "#EEF4F9", text: "#1E3A5F", emoji: "🏢" },
  "Product-Market Fit":  { bg: "#F0FDF4", text: "#14532D", emoji: "📈" },
};

const ROLE_STYLES: Record<string, string> = {
  founder: "bg-[#EEF4F9] text-[#3D74A0] border-[#AACDDC]",
  expert: "bg-[#F3E3D0] text-[#5B4A3A] border-[#D2C4B4]",
  investor: "bg-[#D1FAE5] text-[#065F46] border-[#6EE7B7]",
};

const INITIAL_POSTS: Post[] = [
  {
    id: "p1", author: "Priya Sharma", initials: "PS", avatarColor: AVATAR_COLORS[0],
    role: "Founder · EduLoop", roleType: "founder", time: "3h ago",
    tag: "Founder Story", title: "From a WhatsApp group to ₹15L raise — my 14-month journey building EduLoop",
    body: "It started as a WhatsApp study group I ran for my college batch. By month 3, we had 200 students from 6 colleges paying ₹99/month for curated study schedules. I had no co-founder, no funding, no idea what I was doing. Here's what I learned...\n\nThe biggest mistake I made early on was building features nobody asked for. I spent 3 weeks building a \"mood tracker\" that exactly 4 people ever used. The pivot? Talk to your users every single week. Not surveys. Actual 15-minute calls. That changed everything.",
    upvotes: 284, comments: 47, stage: "Investment & Funding", pinned: false, userVote: null,
  },
  {
    id: "p2", author: "Dr. Anika Patel", initials: "AP", avatarColor: AVATAR_COLORS[1],
    role: "Partner, Sequoia Capital India", roleType: "expert", time: "6h ago",
    tag: "Expert View", title: "What I look for in a GSF student pitch — and what kills deals immediately",
    body: "In the last 4 years I've reviewed 800+ pitches from student founders. Here's my honest filter in the first 90 seconds:\n\n1. Do they understand the problem better than anyone in the room?\n2. Are they building something they'd use themselves?\n3. Can they tell me what 'success' looks like 18 months from now?\n\nWhat kills deals: Vague TAM numbers pulled from Google (\"The edtech market is $300 billion!\"), no evidence of actual customer conversations, and co-founder dynamics that feel forced. Start with the problem. The rest follows.",
    upvotes: 412, comments: 63, pinned: true, userVote: null,
  },
  {
    id: "p3", author: "Marcus Chen", initials: "MC", avatarColor: AVATAR_COLORS[2],
    role: "Founder · Supplify", roleType: "founder", time: "1d ago",
    tag: "Lesson Learned", title: "We almost shut down at month 8. Here's what saved us.",
    body: "We had ₹1.2L left in the bank, 0 paying customers, and 3 of our 5 pilot users had stopped logging in. I was ready to shut down Supplify.\n\n I booked a call with James Whitfield through GSF Connect on a Friday night. He spent 45 minutes going through our UX flow with me and said: 'You're solving the wrong problem. Your users don't want automation — they want confidence.' That one sentence rewrote our entire product.\n\nWe pivoted to inventory alerts instead of full automation. 14 days later we had our first paying customer. We now have ₹2L MRR.",
    upvotes: 198, comments: 31, stage: "Product-Market Fit", userVote: null,
  },
  {
    id: "p4", author: "James Whitfield", initials: "JW", avatarColor: AVATAR_COLORS[3],
    role: "SaaS Founder (2x exit) · GSF Expert", roleType: "expert", time: "1d ago",
    tag: "Playbook", title: "The B2B SaaS playbook I wish I had at 22 — pricing, sales, and retention",
    body: "I sold my first SaaS at 28 for $4M. My second at 33 for $22M. The same 3 mistakes killed my growth both times before I figured them out.\n\n**Pricing too low** — If nobody pushes back on your price, it's too cheap. Cheap signals low value in B2B, not affordability.\n\n**Feature creep from 1 loud customer** — The customer asking for 10 features is usually the customer who won't renew.\n\n**No quarterly business reviews** — Most churn is invisible until it's too late. QBRs make it visible at month 3.",
    upvotes: 367, comments: 52, userVote: null,
  },
  {
    id: "p5", author: "Aisha Okafor", initials: "AO", avatarColor: AVATAR_COLORS[4],
    role: "Founder · HealthBridge", roleType: "founder", time: "2d ago",
    tag: "Behind the Build", title: "Building a telemedicine app for rural India — 6 months of reality checks",
    body: "Nobody tells you how hard distribution is when your customers don't have smartphones. We spent month 1-2 building a beautiful app. Month 3: we discovered 70% of our target users share a single phone in a household.\n\nPivot: USSD + WhatsApp integration. No app needed. Appointment booking in 4 button presses. That's when our pilots went from 12 consultations/week to 80+.\n\nTech is only ~20% of the problem in rural India. Trust-building, vernacular content, and community health workers are the other 80%.",
    upvotes: 156, comments: 28, stage: "MVP", userVote: null,
  },
  {
    id: "p6", author: "Yuki Tanaka", initials: "YT", avatarColor: AVATAR_COLORS[5],
    role: "Product @ Notion (prev) · GSF Expert", roleType: "expert", time: "2d ago",
    tag: "Expert View", title: "Product-led growth for student founders: what works without a sales team or marketing budget",
    body: "PLG is often misunderstood as 'just make a free tier'. It's not. PLG means your product is the primary driver of acquisition, activation, and retention.\n\nFor founders with zero budget, here's the PLG checklist I give every GSF student I mentor:\n\n✓ Can a user get real value in under 5 minutes?\n✓ Is the 'aha moment' self-serve or does it require you?\n✓ What does the user naturally want to share/invite others to see?\n\nIf you can't answer all three, build product, not campaigns.",
    upvotes: 289, comments: 44, userVote: null,
  },
  {
    id: "p7", author: "Rohan Verma", initials: "RV", avatarColor: AVATAR_COLORS[6],
    role: "Founder · FarmIQ", roleType: "founder", time: "3d ago",
    tag: "Ask the Community", title: "How do I explain IoT + AI to a farmer who doesn't trust technology? Real advice please.",
    body: "I've been building FarmIQ for 5 months. The tech works great in lab. But when I go to actual farms, the conversation dies the moment I mention 'sensor' or 'app'.\n\nHas anyone successfully navigated this trust gap? Especially in rural India where past tech products (like eSoils, Farmguide) burned farmers. How do you build credibility fast when you're a 22-year-old CS student telling a 55-year-old farmer his yield will increase?",
    upvotes: 89, comments: 22, stage: "Ideation", userVote: null,
  },
  {
    id: "p8", author: "Fatima Ali", initials: "FA", avatarColor: AVATAR_COLORS[7],
    role: "VC Analyst, Blume Ventures · GSF Expert", roleType: "investor", time: "4d ago",
    tag: "Investor Lens", title: "How we evaluate pre-seed rounds from student founders — our internal rubric",
    body: "At Blume we invest at pre-seed and seed. In the last 12 months, 6 of our 18 portfolio companies were founded by sub-25 founders — half of them students.\n\nWhat we look for is different from later stage VCs. We're not analysing growth curves. We're analysing **founder character**:\n\n- Speed of learning (how fast did they update their thinking post last conversation?)\n- Resourcefulness (what have they built with almost nothing?)\n- Clarity of thought under ambiguity\n\nWe'll take a raw founder with those 3 traits over a polished deck any day.",
    upvotes: 441, comments: 78, userVote: null,
  },
];

const TAGS = ["All", "Founder Story", "Expert View", "Playbook", "Lesson Learned", "Behind the Build", "Ask the Community", "Investor Lens"];

const SORT_OPTIONS = [
  { id: "hot", label: "Hot", icon: Flame },
  { id: "new", label: "New", icon: Clock },
  { id: "top", label: "Top", icon: TrendingUp },
];

export default function CommunityPage() {
  const [posts, setPosts] = useState<Post[]>(INITIAL_POSTS);
  const [activeTag, setActiveTag] = useState("All");
  const [sort, setSort] = useState("hot");
  const [search, setSearch] = useState("");

  const handleVote = (postId: string, dir: 1 | -1) => {
    setPosts(prev => prev.map(p => {
      if (p.id !== postId) return p;
      const prev_vote = p.userVote;
      if (prev_vote === dir) {
        return { ...p, userVote: null, upvotes: p.upvotes - dir };
      }
      const delta = prev_vote ? dir * 2 : dir;
      return { ...p, userVote: dir, upvotes: p.upvotes + delta };
    }));
  };

  const filtered = posts
    .filter(p => activeTag === "All" || p.tag === activeTag)
    .filter(p => search === "" ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.author.toLowerCase().includes(search.toLowerCase()) ||
      p.body.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (a.pinned && !b.pinned) return -1;
      if (!a.pinned && b.pinned) return 1;
      if (sort === "top") return b.upvotes - a.upvotes;
      if (sort === "new") return a.time.localeCompare(b.time);
      return (b.upvotes + b.comments * 2) - (a.upvotes + a.comments * 2);
    });

  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-[#F7F2EC]">

        {/* Header */}
        <section className="bg-white border-b border-[#D2C4B4]">
          <div className="section-container py-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl text-[#1A2332] mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                  GSF Community
                </h1>
                <p className="text-[#4A5668] text-sm">Where founders share their journey and experts share their playbooks.</p>
              </div>
              <Link href="/sign-up" className="btn-primary shrink-0">
                <PenSquare className="size-4" /> Share your story
              </Link>
            </div>
          </div>
        </section>

        <div className="section-container py-8 flex flex-col lg:flex-row gap-6">

          {/* Main feed */}
          <div className="flex-1 min-w-0 space-y-4">

            {/* Search + Sort bar */}
            <div className="bg-white rounded-2xl border border-[#D2C4B4] p-4 flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-[#8A95A3]" />
                <input type="text" placeholder="Search posts, authors, topics..." className="input pl-10 h-9 text-sm" value={search} onChange={(e) => setSearch(e.target.value)} />
              </div>
              <div className="flex gap-1.5">
                {SORT_OPTIONS.map(({ id, label, icon: Icon }) => (
                  <button key={id} onClick={() => setSort(id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${sort === id ? "bg-[#81A6C6] text-white border-[#81A6C6]" : "bg-white text-[#4A5668] border-[#D2C4B4] hover:border-[#81A6C6]"}`}>
                    <Icon className="size-3.5" />{label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tag filter */}
            <div className="flex gap-2 flex-wrap">
              {TAGS.map(tag => (
                <button key={tag} onClick={() => setActiveTag(tag)}
                  className={`text-xs px-3 py-1.5 rounded-full border font-medium transition-all ${activeTag === tag ? "bg-[#1A2332] text-white border-[#1A2332]" : "bg-white text-[#4A5668] border-[#D2C4B4] hover:border-[#81A6C6]"}`}>
                  {tag}
                </button>
              ))}
            </div>

            {/* Posts */}
            {filtered.map((post) => {
              const stageStyle = post.stage ? STAGE_STYLES[post.stage] : null;
              return (
                <div key={post.id} className={`bg-white rounded-2xl border ${post.pinned ? "border-[#AACDDC]" : "border-[#D2C4B4]"} overflow-hidden hover:border-[#81A6C6] transition-colors group`}>
                  {post.pinned && (
                    <div className="bg-[#EEF4F9] border-b border-[#AACDDC] px-4 py-2 text-xs font-semibold text-[#3D74A0]">
                      📌 Pinned post
                    </div>
                  )}
                  <div className="flex">
                    {/* Vote column */}
                    <div className="flex flex-col items-center gap-1 px-3 pt-4 pb-4 bg-[#FDFAF7] border-r border-[#D2C4B4] min-w-[52px]">
                      <button onClick={() => handleVote(post.id, 1)}
                        className={`size-7 rounded-md flex items-center justify-center transition-colors hover:bg-[#EEF4F9] ${post.userVote === 1 ? "text-[#81A6C6]" : "text-[#8A95A3]"}`}>
                        <ArrowUp className="size-4" />
                      </button>
                      <span className={`text-xs font-bold ${post.userVote === 1 ? "text-[#81A6C6]" : post.userVote === -1 ? "text-red-400" : "text-[#1A2332]"}`}>
                        {post.upvotes}
                      </span>
                      <button onClick={() => handleVote(post.id, -1)}
                        className={`size-7 rounded-md flex items-center justify-center transition-colors hover:bg-red-50 ${post.userVote === -1 ? "text-red-400" : "text-[#8A95A3]"}`}>
                        <ArrowDown className="size-4" />
                      </button>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-5">
                      {/* Author row */}
                      <div className="flex items-center gap-2.5 mb-3">
                        <div className="size-8 rounded-full border border-[#D2C4B4] flex items-center justify-center text-xs font-bold shrink-0"
                          style={{ background: post.avatarColor.bg, color: post.avatarColor.text }}>
                          {post.initials}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-sm font-semibold text-[#1A2332]">{post.author}</span>
                            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${ROLE_STYLES[post.roleType]}`}>
                              {post.roleType === "founder" ? "🧑‍💼" : post.roleType === "expert" ? "⭐" : "💼"} {post.role}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-[10px] text-[#8A95A3] mt-0.5">
                            <span>{post.time}</span>
                            {stageStyle && (
                              <>
                                <span>·</span>
                                <span className="px-1.5 py-0.5 rounded-full text-[10px] font-medium"
                                  style={{ background: stageStyle.bg, color: stageStyle.text }}>
                                  {stageStyle.emoji} {post.stage}
                                </span>
                              </>
                            )}
                          </div>
                        </div>
                        <span className="badge badge-warm text-[10px] shrink-0">{post.tag}</span>
                      </div>

                      {/* Title */}
                      <h2 className="text-base font-bold text-[#1A2332] leading-snug mb-3 group-hover:text-[#3D74A0] transition-colors"
                        style={{ fontFamily: "'Playfair Display', serif" }}>
                        {post.title}
                      </h2>

                      {/* Body preview */}
                      <p className="text-sm text-[#4A5668] leading-relaxed line-clamp-3 whitespace-pre-line">
                        {post.body.split('\n')[0]}
                      </p>

                      {/* Actions */}
                      <div className="flex items-center gap-3 mt-4 pt-3 border-t border-[#F3E3D0]">
                        <button className="flex items-center gap-1.5 text-xs text-[#8A95A3] hover:text-[#81A6C6] transition-colors">
                          <MessageSquare className="size-3.5" /> {post.comments} comments
                        </button>
                        <button className="flex items-center gap-1.5 text-xs text-[#8A95A3] hover:text-[#81A6C6] transition-colors">
                          <Share2 className="size-3.5" /> Share
                        </button>
                        <button className="flex items-center gap-1.5 text-xs text-[#8A95A3] hover:text-[#81A6C6] transition-colors">
                          <Bookmark className="size-3.5" /> Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {filtered.length === 0 && (
              <div className="bg-white rounded-2xl border border-[#D2C4B4] p-16 text-center">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-lg font-semibold text-[#1A2332] mb-2">No posts found</h3>
                <p className="text-sm text-[#8A95A3]">Try a different tag or search term.</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-72 space-y-5 shrink-0">

            {/* What is GSF Community */}
            <div className="bg-white rounded-2xl border border-[#D2C4B4] p-5">
              <div className="h-12 rounded-xl bg-gradient-to-r from-[#81A6C6] to-[#AACDDC] mb-4" />
              <h3 className="font-bold text-[#1A2332] mb-2">Welcome to GSF Community</h3>
              <p className="text-xs text-[#4A5668] leading-relaxed mb-4">
                The space where student founders share their journey — from first idea to funded company — and where experts share honest playbooks.
              </p>
              <Link href="/sign-up" className="btn-primary w-full justify-center text-sm py-2.5">
                <PenSquare className="size-3.5" /> Create a post
              </Link>
            </div>

            {/* Community rules */}
            <div className="bg-white rounded-2xl border border-[#D2C4B4] p-5">
              <h3 className="font-semibold text-[#1A2332] mb-3 text-sm">Community Guidelines</h3>
              <ol className="space-y-2.5 text-xs text-[#4A5668]">
                {["Be specific — vague posts get ignored", "Share what actually happened, not the highlight reel", "Experts: give the advice you'd give a friend", "Founders: be honest about your stage and challenges", "No self-promotion without genuine value", "Constructive feedback > cheerleading"].map((rule, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="size-4 rounded-full bg-[#EEF4F9] text-[#81A6C6] text-[10px] font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                    {rule}
                  </li>
                ))}
              </ol>
            </div>

            {/* Top contributors */}
            <div className="bg-white rounded-2xl border border-[#D2C4B4] p-5">
              <h3 className="font-semibold text-[#1A2332] mb-4 text-sm">Top Contributors</h3>
              <div className="space-y-3">
                {[
                  { name: "Dr. Anika Patel", role: "VC Partner", initials: "AP", av: AVATAR_COLORS[1], posts: 24 },
                  { name: "Fatima Ali", role: "VC Analyst", initials: "FA", av: AVATAR_COLORS[7], posts: 19 },
                  { name: "James Whitfield", role: "SaaS Founder", initials: "JW", av: AVATAR_COLORS[3], posts: 17 },
                  { name: "Priya Sharma", role: "Founder, EduLoop", initials: "PS", av: AVATAR_COLORS[0], posts: 12 },
                  { name: "Yuki Tanaka", role: "Ex-Notion PM", initials: "YT", av: AVATAR_COLORS[5], posts: 11 },
                ].map((c) => (
                  <div key={c.name} className="flex items-center gap-2.5">
                    <div className="size-8 rounded-full border border-[#D2C4B4] flex items-center justify-center text-xs font-bold shrink-0"
                      style={{ background: c.av.bg, color: c.av.text }}>{c.initials}</div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-semibold text-[#1A2332] truncate">{c.name}</div>
                      <div className="text-[10px] text-[#8A95A3]">{c.role}</div>
                    </div>
                    <span className="text-[10px] text-[#8A95A3]">{c.posts} posts</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

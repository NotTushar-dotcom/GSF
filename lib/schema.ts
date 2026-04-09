// ===== DATABASE SCHEMA PLACEHOLDERS =====
// Backend-ready TypeScript interfaces.
// Ready to map to Drizzle ORM tables or Prisma schema.

// ===== USER =====
export interface User {
  id: string;            // UUID — primary key
  email: string;         // unique, indexed
  name: string;
  role: "founder" | "expert" | "admin";
  credits: number;       // current credit balance
  plan: "free" | "basic" | "standard" | "premium" | "expert";
  planExpiresAt?: Date;  // null = no expiry
  avatarUrl?: string;
  bio?: string;
  linkedinUrl?: string;
  twitterUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

// ===== VENTURE =====
export interface Venture {
  id: string;            // UUID
  founderId: string;     // FK → users.id
  name: string;
  tagline: string;
  description: string;
  stage: VentureStage;
  equityOffered: number; // percentage, e.g. 5.5
  fundingGoal: number;   // in USD
  fundingRaised: number;
  traction: string;      // e.g. "200 early sign-ups"
  sector: string;
  teamSize: number;
  pitch_deck_url?: string;
  isPublic: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type VentureStage =
  | "ideation"
  | "screening"
  | "research"
  | "mvp"
  | "funding"
  | "launch"
  | "pmf";

// ===== SESSION (Expert ↔ Founder) =====
export interface Session {
  id: string;            // UUID
  expertId: string;      // FK → users.id (role=expert)
  founderId: string;     // FK → users.id (role=founder)
  ventureId?: string;    // FK → ventures.id (optional)
  status: SessionStatus;
  scheduledAt: Date;
  duration: number;      // minutes
  creditsCost: number;   // credits deducted from founder
  creditsEarned: number; // credits added to expert
  notes?: string;
  recordingUrl?: string;
  rating?: number;       // 1–5
  createdAt: Date;
  updatedAt: Date;
}

export type SessionStatus = "pending" | "confirmed" | "completed" | "cancelled" | "no-show";

// ===== CREDIT TRANSACTION =====
export interface CreditTransaction {
  id: string;
  userId: string;        // FK → users.id
  type: "debit" | "credit";
  amount: number;
  reason: string;        // e.g. "Session booked", "Session completed", "Plan purchase"
  relatedSessionId?: string;
  balanceBefore: number;
  balanceAfter: number;
  createdAt: Date;
}

// ===== EXPERT PROFILE =====
export interface ExpertProfile {
  id: string;            // FK → users.id (1:1)
  userId: string;
  specializations: string[];
  experienceYears: number;
  sessionRate: number;   // credits per session
  totalSessions: number;
  rating: number;        // 0–5
  timezone: string;
  availability: WeeklyAvailability;
  venturesSupported: string[]; // venture IDs
  isVerified: boolean;
  createdAt: Date;
}

export interface WeeklyAvailability {
  monday:    string[];   // array of time slots e.g. ["09:00", "10:00"]
  tuesday:   string[];
  wednesday: string[];
  thursday:  string[];
  friday:    string[];
  saturday:  string[];
  sunday:    string[];
}

// ===== COMMUNITY POST =====
export interface CommunityPost {
  id: string;
  authorId: string;      // FK → users.id
  title: string;
  content: string;
  tags: string[];
  upvotes: number;
  commentCount: number;
  isPinned: boolean;
  createdAt: Date;
  updatedAt: Date;
}

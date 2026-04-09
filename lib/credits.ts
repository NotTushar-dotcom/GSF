// ===== CREDIT SYSTEM =====
// Dummy state logic with backend-ready structure.

import { getSession, updateSession } from "./auth";
import type { CreditTransaction } from "./schema";

const CREDIT_LOG_KEY = "gsf_credit_log";

// ===== PRICING TABLE (credits per session) =====
export const EXPERT_SESSION_COSTS: Record<string, number> = {
  "0-2yr":  100,   // Basic experts
  "2-5yr":  200,   // Standard experts
  "5+yr":   350,   // Premium experts
};

export const EXPERT_SESSION_EARN = 80; // Expert earns 80% of session cost

// ===== READ CREDITS =====
export function getCredits(): number {
  const session = getSession();
  return session?.credits ?? 0;
}

// ===== DEDUCT CREDITS (founder books session) =====
export function deductCredits(amount: number, reason: string): boolean {
  const session = getSession();
  if (!session) return false;
  if (session.credits < amount) return false;

  const before = session.credits;
  const after = before - amount;
  updateSession({ credits: after });
  logTransaction({
    id: crypto.randomUUID(),
    userId: session.id,
    type: "debit",
    amount,
    reason,
    balanceBefore: before,
    balanceAfter: after,
    createdAt: new Date(),
  });
  return true;
}

// ===== ADD CREDITS (expert completes session) =====
export function addCredits(amount: number, reason: string): boolean {
  const session = getSession();
  if (!session) return false;

  const before = session.credits;
  const after = before + amount;
  updateSession({ credits: after });
  logTransaction({
    id: crypto.randomUUID(),
    userId: session.id,
    type: "credit",
    amount,
    reason,
    balanceBefore: before,
    balanceAfter: after,
    createdAt: new Date(),
  });
  return true;
}

// ===== TRANSACTION LOG =====
function logTransaction(tx: Omit<CreditTransaction, "relatedSessionId">) {
  if (typeof window === "undefined") return;
  const existing: CreditTransaction[] = JSON.parse(
    localStorage.getItem(CREDIT_LOG_KEY) || "[]"
  );
  existing.unshift(tx as CreditTransaction);
  localStorage.setItem(CREDIT_LOG_KEY, JSON.stringify(existing.slice(0, 50))); // keep last 50
}

export function getCreditLog(): CreditTransaction[] {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem(CREDIT_LOG_KEY) || "[]");
}

// ===== CREDIT TIER LABELS =====
export function getCreditTierLabel(credits: number): string {
  if (credits >= 2000) return "Premium";
  if (credits >= 1500) return "Standard";
  if (credits >= 600)  return "Basic";
  return "Low Balance";
}

export function getCreditBarPercent(credits: number, max = 600): number {
  return Math.min(100, Math.round((credits / max) * 100));
}

// ===== DUMMY AUTH SYSTEM =====
// Temporary auth for demo. Replace with real auth (Clerk/NextAuth) later.

export type Role = "founder" | "expert";

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  role: Role;
  credits: number;
  avatar: string;
  plan: string;
  planExpiresAt?: string;
}

// ===== MOCK USER DATABASE =====
const MOCK_USERS: AuthUser[] = [
  {
    id: "user_001",
    email: "abc123@gmail.com",
    name: "Arjun Sharma",
    role: "founder",
    credits: 600,
    avatar: "AS",
    plan: "Free Trial",
  },
  {
    id: "user_002",
    email: "expert@gsf.com",
    name: "Meera Patel",
    role: "expert",
    credits: 420,
    avatar: "MP",
    plan: "Expert",
  },
];

// Password map (email → password)
const MOCK_PASSWORDS: Record<string, string> = {
  "abc123@gmail.com": "123456",
  "expert@gsf.com": "123456",
};

const SESSION_KEY = "gsf_session";

// ===== AUTH FUNCTIONS =====

export function login(email: string, password: string): AuthUser | null {
  if (typeof window === "undefined") return null;
  const expectedPassword = MOCK_PASSWORDS[email.toLowerCase().trim()];
  if (!expectedPassword || expectedPassword !== password) return null;
  const user = MOCK_USERS.find((u) => u.email === email.toLowerCase().trim());
  if (!user) return null;
  sessionStorage.setItem(SESSION_KEY, JSON.stringify(user));
  return user;
}

export function logout() {
  if (typeof window === "undefined") return;
  sessionStorage.removeItem(SESSION_KEY);
}

export function getSession(): AuthUser | null {
  if (typeof window === "undefined") return null;
  const raw = sessionStorage.getItem(SESSION_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as AuthUser;
  } catch {
    return null;
  }
}

export function updateSession(updates: Partial<AuthUser>) {
  const current = getSession();
  if (!current) return;
  const updated = { ...current, ...updates };
  sessionStorage.setItem(SESSION_KEY, JSON.stringify(updated));
  return updated;
}

export function setSession(user: AuthUser) {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(SESSION_KEY, JSON.stringify(user));
}

export function isAuthenticated(): boolean {
  return getSession() !== null;
}

export function requireRole(role: Role): boolean {
  const user = getSession();
  return user?.role === role;
}

// ===== REDIRECT PATHS =====
export const REDIRECT_AFTER_LOGIN: Record<Role, string> = {
  founder: "/dashboard",
  expert: "/expert-dashboard",
};

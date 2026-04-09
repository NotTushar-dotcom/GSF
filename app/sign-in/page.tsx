import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Sign In — GSF | Global Society of Founders",
  description: "Sign in to your GSF account.",
};

export default function SignInPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background flex items-center justify-center pt-16">
        <div className="absolute inset-0 bg-dot-grid opacity-40" />
        <div className="relative z-10 w-full max-w-md px-4 py-12">
          <div className="text-center mb-8">
            <div className="size-12 rounded-2xl bg-primary-500 flex items-center justify-center mx-auto mb-4 shadow-soft-md">
              <span className="text-white font-bold text-lg">G</span>
            </div>
            <h1 className="text-2xl font-semibold text-text-primary mb-1">Welcome back</h1>
            <p className="text-sm text-text-secondary">Sign in to your GSF account</p>
          </div>

          <div className="card p-8">
            <form className="space-y-4" id="sign-in-form">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-1.5" htmlFor="signin-email">Email</label>
                <input id="signin-email" type="email" className="input" placeholder="you@university.edu" />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-1.5" htmlFor="signin-password">Password</label>
                <input id="signin-password" type="password" className="input" placeholder="••••••••" />
              </div>
              <div className="flex items-center justify-end">
                <a href="/forgot-password" className="text-xs text-primary-600 hover:underline">Forgot password?</a>
              </div>
              <button id="signin-submit" type="submit" className="w-full bg-primary-500 text-white font-medium h-11 rounded-xl hover:bg-primary-600 transition-colors flex items-center justify-center gap-2 shadow-soft-sm">
                Sign in <ArrowRight className="size-4" />
              </button>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-white px-2 text-text-muted">or</span>
              </div>
            </div>

            <button id="google-signin" type="button" className="w-full border border-border text-text-primary font-medium h-11 rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
              <svg className="size-4" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
              Continue with Google
            </button>

            <p className="text-center text-sm text-text-secondary mt-6">
              Don't have an account?{" "}
              <Link href="/sign-up" className="text-primary-600 font-medium hover:underline">Sign up</Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

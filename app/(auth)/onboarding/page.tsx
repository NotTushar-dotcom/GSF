"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Compass, Lightbulb, Rocket, Smile } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const OPTIONS = [
  {
    id: "exploring",
    icon: Compass,
    title: "I'm exploring entrepreneurship",
    description: "I'm curious about startups and want to understand if this path is right for me.",
    color: "text-primary-600",
    bg: "bg-primary-50",
    border: "border-primary-200",
    activeBg: "bg-primary-50",
    activeBorder: "border-primary-500",
  },
  {
    id: "has_idea",
    icon: Lightbulb,
    title: "I already have an idea",
    description: "I have a startup idea in mind and want structured support to validate and build it.",
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-200",
    activeBg: "bg-amber-50",
    activeBorder: "border-amber-500",
  },
  {
    id: "building",
    icon: Rocket,
    title: "I'm already building something",
    description: "I have a product or early traction and need expert mentorship and community.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    activeBg: "bg-emerald-50",
    activeBorder: "border-emerald-500",
  },
  {
    id: "curious",
    icon: Smile,
    title: "Just curious about GSF",
    description: "I want to see what GSF offers before committing to a cohort.",
    color: "text-secondary-600",
    bg: "bg-secondary-50",
    border: "border-secondary-200",
    activeBg: "bg-secondary-50",
    activeBorder: "border-secondary-500",
  },
];

export default function OnboardingPage() {
  const router = useRouter();
  const [selected, setSelected] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleContinue() {
    if (!selected) return;
    setLoading(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 800));
    // Route based on selection
    if (selected === "building" || selected === "has_idea") {
      router.push("/student/dashboard");
    } else {
      router.push("/student/dashboard");
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Logo */}
        <div className="flex items-center gap-2.5 mb-10">
          <div className="size-9 rounded-xl bg-primary-500 flex items-center justify-center shadow-soft">
            <span className="text-white font-bold">G</span>
          </div>
          <span className="font-semibold text-text-primary text-lg">GSF</span>
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-semibold text-text-primary mb-2">
            Welcome to GSF 👋
          </h1>
          <p className="text-text-secondary">
            Tell us where you are today — we&apos;ll personalize your journey from here.
          </p>
        </motion.div>

        {/* Options */}
        <div className="space-y-3 mb-8">
          <AnimatePresence>
            {OPTIONS.map((opt, i) => {
              const Icon = opt.icon;
              const isSelected = selected === opt.id;
              return (
                <motion.button
                  key={opt.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => setSelected(opt.id)}
                  className={cn(
                    "w-full flex items-start gap-4 p-5 rounded-2xl border-2 text-left transition-all duration-200",
                    isSelected
                      ? `${opt.activeBg} ${opt.activeBorder} shadow-soft`
                      : `bg-white border-border hover:border-gray-300 hover:bg-gray-50/50`
                  )}
                >
                  <div
                    className={cn(
                      "size-11 rounded-xl flex items-center justify-center flex-shrink-0",
                      isSelected ? opt.bg : "bg-gray-100"
                    )}
                  >
                    <Icon className={cn("size-5", isSelected ? opt.color : "text-text-muted")} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text-primary">{opt.title}</p>
                    <p className="text-sm text-text-secondary mt-0.5 leading-relaxed">{opt.description}</p>
                  </div>
                  <div className={cn(
                    "size-5 rounded-full border-2 ml-auto flex-shrink-0 mt-0.5 flex items-center justify-center transition-all",
                    isSelected ? `${opt.activeBorder} ${opt.bg}` : "border-gray-300"
                  )}>
                    {isSelected && <div className={cn("size-2.5 rounded-full", opt.bg.replace("bg-", "bg-").replace("-50", "-400"))} />}
                  </div>
                </motion.button>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Continue */}
        <Button
          variant="primary"
          size="xl"
          className="w-full"
          rightIcon={<ArrowRight className="size-5" />}
          loading={loading}
          disabled={!selected}
          onClick={handleContinue}
        >
          Continue to dashboard
        </Button>

        <p className="text-xs text-center text-text-muted mt-5">
          You can change this at any time in your profile settings.
        </p>
      </div>
    </div>
  );
}

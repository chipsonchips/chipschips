"use client";

import Link from "next/link";
import { ArrowRight, Shield, Zap, Globe } from "lucide-react";
import Button from "@/components/ui/Button";

const TRUST_ITEMS = [
  { icon: Shield, label: "Provably Fair" },
  { icon: Zap, label: "Instant Payouts" },
  { icon: Globe, label: "Global Players" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center hero-grid overflow-hidden pt-16">
      {/* Ambient glow blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-amber-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-indigo-500/5 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-emerald-500/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Live badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold tracking-widest font-orbitron mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 live-pulse" />
          SPACESHIP NOW LIVE — PLAY & WIN USDC
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black font-orbitron leading-none tracking-tight mb-6">
          <span className="block text-white">THE HOME OF</span>
          <span className="block gold-gradient mt-1">PREMIUM</span>
          <span className="block text-white mt-1">WEB3 GAMING</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-4 leading-relaxed">
          One account. One wallet. Every game.
        </p>
        <p className="text-base text-gray-500 max-w-xl mx-auto mb-10">
          Play Spaceship, Ludo, Dice, Spin Extreme and more — compete globally, earn rewards, and
          own your winnings on-chain.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <Link href="/games">
            <Button variant="gold" size="lg" className="w-full sm:w-auto">
              Browse Games
              <ArrowRight size={16} />
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Open Dashboard
            </Button>
          </Link>
        </div>

        {/* Trust strip */}
        <div className="flex items-center justify-center gap-8 flex-wrap">
          {TRUST_ITEMS.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-gray-500 text-sm">
              <Icon size={14} className="text-amber-500/70" />
              <span>{label}</span>
            </div>
          ))}
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span className="font-mono text-amber-500/70 font-bold">⛓</span>
            <span>Base + Celo + ETH</span>
          </div>
        </div>

        {/* Hero game cards preview */}
        <div className="mt-20 grid grid-cols-3 sm:grid-cols-6 gap-3 max-w-2xl mx-auto">
          {["🚀", "🎲", "🎯", "🃏", "🎰", "♠️"].map((emoji, i) => (
            <div
              key={i}
              className="aspect-square rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-2xl hover:bg-white/[0.06] transition-colors cursor-pointer hover:border-amber-500/20 hover:scale-105 transition-transform duration-200"
            >
              {emoji}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#080810] to-transparent pointer-events-none" />
    </section>
  );
}

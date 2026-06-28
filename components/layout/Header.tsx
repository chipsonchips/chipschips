"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Wallet, ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";

const NAV_LINKS = [
  { label: "Games", href: "/games" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Tournaments", href: "#tournaments" },
  { label: "Leaderboard", href: "#leaderboard" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 backdrop-blur-xl bg-[#080810]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center glow-gold-sm transition-all group-hover:scale-105">
              <span className="text-black font-black text-sm font-orbitron">C</span>
            </div>
            <span className="font-orbitron font-black text-lg tracking-wider">
              <span className="text-white">CHIPS</span>
              <span className="text-amber-500">ON</span>
              <span className="text-white">CHIPS</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-3 py-2 text-sm text-gray-400 hover:text-white font-medium transition-colors rounded-lg hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-3">
            <button className="flex items-center gap-2 px-3 py-2 text-sm text-gray-400 hover:text-amber-400 transition-colors rounded-lg hover:bg-white/5 border border-white/10">
              <Wallet size={14} />
              <span className="font-mono text-xs">Connect</span>
              <ChevronDown size={12} />
            </button>
            <Button variant="outline" size="sm">
              Log In
            </Button>
            <Button variant="gold" size="sm">
              Play Now
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/5 bg-[#0f0f1a]">
          <div className="px-4 py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <Button variant="outline" size="md" className="w-full">
                Log In
              </Button>
              <Button variant="gold" size="md" className="w-full">
                Play Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

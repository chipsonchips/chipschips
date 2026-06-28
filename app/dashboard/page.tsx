import Link from "next/link";
import { ArrowRight, Wallet, Trophy, Activity, ChevronRight, ExternalLink } from "lucide-react";
import Header from "@/components/layout/Header";
import GameCard from "@/components/games/GameCard";
import { GAMES, LIVE_GAMES } from "@/lib/games";

const QUICK_STATS = [
  { label: "Balance", value: "—", sub: "Connect wallet", color: "text-amber-400", icon: Wallet },
  { label: "Total Wins", value: "—", sub: "Sign in to view", color: "text-emerald-400", icon: Trophy },
  { label: "Active Games", value: LIVE_GAMES.length.toString(), sub: "Available now", color: "text-indigo-400", icon: Activity },
];

const RECENT_ACTIVITY = [
  { game: "Spaceship", action: "Game ended at 2.41x", time: "2m ago", result: "win", amount: "+$12.30" },
  { game: "Spaceship", action: "Game ended at 1.03x", time: "5m ago", result: "loss", amount: "-$5.00" },
  { game: "Spaceship", action: "Game ended at 5.72x", time: "9m ago", result: "win", amount: "+$57.20" },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#080810]">
      <Header />
      <div className="pt-16 min-h-screen flex">
        {/* Sidebar */}
        <aside className="hidden lg:flex flex-col w-60 border-r border-white/5 bg-[#0a0a12] sticky top-16 h-[calc(100vh-64px)] p-4 gap-1">
          <div className="px-3 py-2 mb-2">
            <p className="text-xs text-gray-600 uppercase tracking-widest font-orbitron">Menu</p>
          </div>
          {[
            { label: "Dashboard", href: "/dashboard", active: true },
            { label: "Games", href: "/games" },
            { label: "Wallet", href: "#" },
            { label: "Profile", href: "#" },
            { label: "Tournaments", href: "#" },
            { label: "Leaderboard", href: "#" },
            { label: "Rewards", href: "#" },
          ].map(({ label, href, active }) => (
            <Link
              key={label}
              href={href}
              className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-colors
                ${active
                  ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                  : "text-gray-500 hover:text-gray-200 hover:bg-white/5"
                }`}
            >
              {label}
              {active && <ChevronRight size={12} className="text-amber-500/50" />}
            </Link>
          ))}

          <div className="mt-auto">
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
              <p className="text-xs text-gray-500 mb-3">Wallet not connected</p>
              <button className="w-full py-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold font-orbitron tracking-wider hover:bg-amber-500/15 transition-colors">
                Connect Wallet
              </button>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-6 lg:p-8 overflow-auto">
          {/* Welcome */}
          <div className="mb-8">
            <h1 className="text-2xl font-black font-orbitron text-white mb-1">Dashboard</h1>
            <p className="text-gray-500 text-sm">
              Welcome to ChipsOnChips.{" "}
              <span className="text-amber-400 cursor-pointer hover:text-amber-300">
                Sign in
              </span>{" "}
              to see your full stats.
            </p>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {QUICK_STATS.map(({ label, value, sub, color, icon: Icon }) => (
              <div
                key={label}
                className="rounded-2xl border border-white/[0.07] bg-[#0f0f1a] p-5"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Icon size={14} className={color} />
                  <span className="text-xs text-gray-500 font-orbitron tracking-widest uppercase">
                    {label}
                  </span>
                </div>
                <p className={`text-2xl font-black font-orbitron ${color} mb-1`}>{value}</p>
                <p className="text-xs text-gray-600">{sub}</p>
              </div>
            ))}
          </div>

          {/* Live game callout */}
          {LIVE_GAMES.map((game) => (
            <div
              key={game.id}
              className="mb-8 rounded-2xl border border-emerald-500/20 bg-gradient-to-r from-emerald-500/5 to-transparent p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4">
                <div className="text-3xl">{game.emoji}</div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 live-pulse" />
                    <span className="text-xs text-emerald-400 font-bold font-orbitron tracking-widest">
                      LIVE NOW
                    </span>
                  </div>
                  <h3 className="text-white font-black font-orbitron">{game.name}</h3>
                  <p className="text-gray-400 text-sm">{game.description}</p>
                </div>
              </div>
              <Link
                href={game.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold font-orbitron text-sm transition-colors flex-shrink-0"
              >
                Play Now
                <ExternalLink size={13} />
              </Link>
            </div>
          ))}

          {/* Two column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Games grid */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-black font-orbitron text-white text-base">All Games</h2>
                <Link
                  href="/games"
                  className="flex items-center gap-1 text-xs text-amber-400 hover:text-amber-300 transition-colors"
                >
                  View all <ArrowRight size={12} />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {GAMES.slice(0, 4).map((game) => (
                  <GameCard key={game.id} game={game} featured={game.status === "live"} />
                ))}
              </div>
            </div>

            {/* Sidebar panels */}
            <div className="space-y-5">
              {/* Recent activity */}
              <div className="rounded-2xl border border-white/[0.07] bg-[#0f0f1a] p-5">
                <h3 className="font-black font-orbitron text-white text-sm mb-4 tracking-wide">
                  Recent Activity
                </h3>
                <div className="space-y-3">
                  {RECENT_ACTIVITY.map((item, i) => (
                    <div key={i} className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-xs text-gray-300 font-medium">{item.game}</p>
                        <p className="text-xs text-gray-600">{item.action}</p>
                        <p className="text-xs text-gray-700 mt-0.5">{item.time}</p>
                      </div>
                      <span
                        className={`text-xs font-bold font-mono flex-shrink-0 ${
                          item.result === "win" ? "text-emerald-400" : "text-red-400"
                        }`}
                      >
                        {item.amount}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-600 mt-4 text-center">
                  Sign in to see your activity
                </p>
              </div>

              {/* Platform news */}
              <div className="rounded-2xl border border-amber-500/10 bg-amber-500/[0.03] p-5">
                <h3 className="font-black font-orbitron text-amber-400 text-sm mb-3 tracking-wide">
                  What&apos;s New
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-2">
                    <span className="text-amber-500 flex-shrink-0">→</span>
                    <span className="text-gray-400">Spaceship v2 with Celo support is live</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-500 flex-shrink-0">→</span>
                    <span className="text-gray-400">Ludo multiplayer rooms entering beta</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-500 flex-shrink-0">→</span>
                    <span className="text-gray-400">Spin Extreme design phase complete</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

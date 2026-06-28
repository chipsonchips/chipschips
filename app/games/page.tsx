import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GameCard from "@/components/games/GameCard";
import { GAMES } from "@/lib/games";
import type { GameStatus } from "@/types";

const FILTERS: { label: string; value: GameStatus | "all" }[] = [
  { label: "All Games", value: "all" },
  { label: "Live Now", value: "live" },
  { label: "In Development", value: "development" },
  { label: "Planned", value: "planned" },
  { label: "Coming Soon", value: "coming_soon" },
];

export default function GamesPage() {
  return (
    <div className="min-h-screen bg-[#080810]">
      <Header />
      <main className="pt-28 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Page header */}
          <div className="mb-12">
            <p className="text-xs text-amber-500 font-bold tracking-widest font-orbitron mb-2 uppercase">
              Game Library
            </p>
            <h1 className="text-4xl sm:text-5xl font-black font-orbitron text-white mb-4">
              All Games
            </h1>
            <p className="text-gray-400 max-w-xl">
              Browse every title in the ChipsOnChips ecosystem. Play live games, track what&apos;s
              in development, and be first to know when new games launch.
            </p>
          </div>

          {/* Filter pills (visual only — server component) */}
          <div className="flex flex-wrap gap-2 mb-10">
            {FILTERS.map(({ label, value }) => (
              <span
                key={value}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-colors cursor-pointer
                  ${value === "all"
                    ? "bg-amber-500/15 border-amber-500/30 text-amber-400"
                    : "bg-white/5 border-white/10 text-gray-400 hover:border-white/20 hover:text-gray-200"
                  }`}
              >
                {label}
                {value === "live" && (
                  <span className="ml-2 inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 live-pulse align-middle" />
                )}
              </span>
            ))}
          </div>

          {/* Games grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {GAMES.map((game) => (
              <GameCard
                key={game.id}
                game={game}
                featured={game.status === "live" || !!game.isFeatured}
              />
            ))}
          </div>

          {/* More coming callout */}
          <div className="mt-10 rounded-2xl border border-dashed border-white/10 p-8 text-center">
            <span className="text-3xl mb-3 block">🎮</span>
            <h3 className="font-black font-orbitron text-white text-lg mb-2">
              More Games Coming
            </h3>
            <p className="text-gray-500 text-sm max-w-md mx-auto">
              Blackjack, Poker, Baccarat, Sports Prediction, and community-created games are on
              the roadmap. Follow us for updates.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

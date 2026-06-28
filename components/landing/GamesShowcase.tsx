import Link from "next/link";
import { ArrowRight } from "lucide-react";
import GameCard from "@/components/games/GameCard";
import { GAMES } from "@/lib/games";

export default function GamesShowcase() {
  const featured = GAMES.slice(0, 3);
  const rest = GAMES.slice(3);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-xs text-amber-500 font-bold tracking-widest font-orbitron mb-2 uppercase">
              Game Library
            </p>
            <h2 className="text-3xl sm:text-4xl font-black font-orbitron text-white">
              Every Game.{" "}
              <span className="gold-gradient">One Platform.</span>
            </h2>
            <p className="text-gray-400 mt-3 max-w-xl">
              From crash games to classics — play them all with a single account, single wallet,
              and shared rewards.
            </p>
          </div>
          <Link
            href="/games"
            className="flex items-center gap-2 text-sm text-amber-400 hover:text-amber-300 transition-colors font-semibold flex-shrink-0"
          >
            View all games
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Featured games (large) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {featured.map((game) => (
            <GameCard key={game.id} game={game} featured />
          ))}
        </div>

        {/* Rest of games */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {rest.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </section>
  );
}

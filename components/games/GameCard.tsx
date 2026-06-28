"use client";

import Link from "next/link";
import { ArrowRight, Users, Lock } from "lucide-react";
import type { Game } from "@/types";
import { StatusBadge, TagBadge } from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

interface GameCardProps {
  game: Game;
  featured?: boolean;
}

export default function GameCard({ game, featured = false }: GameCardProps) {
  const isPlayable = game.status === "live";
  const isDisabled = game.status === "coming_soon" || game.status === "planned";

  return (
    <div
      className={`group relative rounded-2xl border transition-all duration-300 card-hover overflow-hidden
        ${featured ? "border-amber-500/20 bg-gradient-to-br from-[#1a1810] to-[#0f0f1a]" : "border-white/[0.07] bg-[#0f0f1a]"}
        ${isPlayable ? "hover:border-amber-500/40" : "hover:border-white/15"}
        ${isDisabled ? "opacity-70" : ""}
      `}
    >
      {/* Shimmer on featured */}
      {featured && isPlayable && <div className="absolute inset-0 animate-shimmer pointer-events-none" />}

      {/* Card top accent bar */}
      <div
        className="h-1 w-full"
        style={{ background: `linear-gradient(90deg, ${game.color}80, ${game.color}20)` }}
      />

      <div className="p-5">
        {/* Header row */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
              style={{ background: `${game.color}18`, border: `1px solid ${game.color}30` }}
            >
              {game.emoji}
            </div>
            <div>
              <h3 className="font-black font-orbitron text-base text-white group-hover:text-amber-100 transition-colors">
                {game.name}
              </h3>
              {game.players && (
                <div className="flex items-center gap-1 mt-0.5">
                  <Users size={10} className="text-gray-500" />
                  <span className="text-xs text-gray-500">
                    {game.players.toLocaleString()} playing
                  </span>
                </div>
              )}
            </div>
          </div>
          <StatusBadge status={game.status} />
        </div>

        {/* Description */}
        <p className="text-sm text-gray-400 leading-relaxed mb-4">{game.description}</p>

        {/* Features */}
        <div className="grid grid-cols-2 gap-1.5 mb-5">
          {game.features.slice(0, 4).map((feature) => (
            <div key={feature} className="flex items-center gap-1.5 text-xs text-gray-500">
              <span className="w-1 h-1 rounded-full bg-amber-500/50 flex-shrink-0" />
              {feature}
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {game.tags.map((tag) => (
            <TagBadge key={tag} label={tag} />
          ))}
        </div>

        {/* CTA */}
        {isPlayable && game.url ? (
          <Link href={game.url} target="_blank" rel="noopener noreferrer">
            <Button variant="gold" size="sm" className="w-full">
              Play Now
              <ArrowRight size={13} />
            </Button>
          </Link>
        ) : isDisabled ? (
          <button
            disabled
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-white/10 text-sm text-gray-600 font-orbitron font-semibold tracking-wider cursor-not-allowed"
          >
            <Lock size={12} />
            Coming Soon
          </button>
        ) : (
          <button
            disabled
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-blue-500/20 bg-blue-500/5 text-sm text-blue-400/60 font-orbitron font-semibold tracking-wider cursor-not-allowed"
          >
            In Development
          </button>
        )}
      </div>
    </div>
  );
}

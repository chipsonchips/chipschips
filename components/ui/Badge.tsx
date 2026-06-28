import type { GameStatus } from "@/types";

const STATUS_CONFIG: Record<GameStatus, { label: string; classes: string; dot: string }> = {
  live: {
    label: "LIVE",
    classes: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",
    dot: "bg-emerald-400 live-pulse",
  },
  development: {
    label: "IN DEV",
    classes: "bg-blue-500/15 text-blue-400 border border-blue-500/30",
    dot: "bg-blue-400",
  },
  planned: {
    label: "PLANNED",
    classes: "bg-purple-500/15 text-purple-400 border border-purple-500/30",
    dot: "bg-purple-400",
  },
  coming_soon: {
    label: "SOON",
    classes: "bg-gray-500/15 text-gray-400 border border-gray-500/30",
    dot: "bg-gray-400",
  },
};

export function StatusBadge({ status }: { status: GameStatus }) {
  const config = STATUS_CONFIG[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full font-orbitron tracking-widest ${config.classes}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`} />
      {config.label}
    </span>
  );
}

export function TagBadge({ label }: { label: string }) {
  return (
    <span className="text-xs text-gray-500 bg-white/5 px-2 py-0.5 rounded-md border border-white/10">
      {label}
    </span>
  );
}

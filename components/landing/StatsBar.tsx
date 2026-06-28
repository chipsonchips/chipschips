import { PLATFORM_STATS } from "@/lib/games";
import { Users, Gamepad2, DollarSign, Activity } from "lucide-react";

const STATS = [
  { label: "Total Players", icon: Users, value: PLATFORM_STATS.totalPlayers, color: "text-amber-400" },
  { label: "Games", icon: Gamepad2, value: PLATFORM_STATS.totalGames, color: "text-indigo-400" },
  { label: "Total Payouts", icon: DollarSign, value: PLATFORM_STATS.totalPayout, color: "text-emerald-400" },
  { label: "Active Now", icon: Activity, value: PLATFORM_STATS.activeNow, color: "text-cyan-400" },
];

export default function StatsBar() {
  return (
    <section className="py-12 border-y border-white/5 bg-[#0a0a12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map(({ label, icon: Icon, value, color }) => (
            <div key={label} className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Icon size={14} className={color} />
                <span className="text-xs text-gray-500 uppercase tracking-widest font-orbitron">
                  {label}
                </span>
              </div>
              <p className={`text-3xl font-black font-orbitron ${color}`}>{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

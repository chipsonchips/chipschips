import {
  Wallet,
  Users,
  Trophy,
  Shield,
  Zap,
  Globe,
  Mic,
  Gift,
} from "lucide-react";

const FEATURES = [
  {
    icon: Wallet,
    title: "Unified Wallet",
    description:
      "Deposit once, play everything. Your balance, rewards, and history sync across every game on the platform.",
    color: "#f59e0b",
  },
  {
    icon: Users,
    title: "One Identity",
    description:
      "One username, one profile. Your stats, achievements, and friends follow you across Spaceship, Ludo, Dice — every game.",
    color: "#6366f1",
  },
  {
    icon: Trophy,
    title: "Cross-Game Rewards",
    description:
      "Earn XP, daily bonuses, and tournament prizes that apply across the entire ecosystem. Win in one game, benefit in all.",
    color: "#f59e0b",
  },
  {
    icon: Shield,
    title: "Provably Fair",
    description:
      "Every outcome is verifiable on-chain. Smart contracts enforce all rules — no trust required, just math.",
    color: "#10b981",
  },
  {
    icon: Zap,
    title: "Gasless Transactions",
    description:
      "Powered by Paymaster and ERC-4337 account abstraction. Zero gas fees for players — we sponsor them.",
    color: "#8b5cf6",
  },
  {
    icon: Mic,
    title: "Social Gaming",
    description:
      "Voice chat, multiplayer rooms, friend invites, live activity feeds. Gaming is better together.",
    color: "#ec4899",
  },
  {
    icon: Globe,
    title: "Multi-Chain",
    description:
      "Base, Celo, Ethereum, Starknet — your assets move across chains seamlessly within the platform.",
    color: "#06b6d4",
  },
  {
    icon: Gift,
    title: "Digital Ownership",
    description:
      "NFT collectibles, on-chain achievements, and tokenized rewards that you truly own, forever.",
    color: "#f97316",
  },
];

export default function Features() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a12]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs text-amber-500 font-bold tracking-widest font-orbitron mb-2 uppercase">
            Platform Features
          </p>
          <h2 className="text-3xl sm:text-4xl font-black font-orbitron text-white mb-4">
            Built Different.{" "}
            <span className="gold-gradient">Built Better.</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            ChipsOnChips is the operating system for our gaming ecosystem — every feature works
            across every game, forever.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map(({ icon: Icon, title, description, color }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/[0.06] bg-[#0f0f1a] p-6 hover:border-white/15 transition-all duration-300"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${color}18`, border: `1px solid ${color}30` }}
              >
                <Icon size={18} style={{ color }} />
              </div>
              <h3 className="font-black font-orbitron text-sm text-white mb-2 tracking-wide">
                {title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

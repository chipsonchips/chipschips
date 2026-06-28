import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[300px] rounded-full bg-amber-500/5 blur-[100px]" />
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold tracking-widest font-orbitron mb-8">
          🚀 SPACESHIP IS LIVE — START WINNING TODAY
        </div>

        <h2 className="text-4xl sm:text-5xl font-black font-orbitron text-white mb-5 leading-tight">
          Ready to Play?
          <br />
          <span className="gold-gradient">Join the Ecosystem.</span>
        </h2>

        <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Create your free account, connect your wallet, and start playing the best Web3 casino
          games. No gas fees. No hassle. Just play.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/games">
            <Button variant="gold" size="lg">
              Start Playing
              <ArrowRight size={16} />
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button variant="outline" size="lg">
              Open Dashboard
            </Button>
          </Link>
        </div>

        {/* Chain logos strip */}
        <div className="mt-12 flex items-center justify-center gap-6 flex-wrap">
          {["Base", "Celo", "Ethereum", "Starknet"].map((chain) => (
            <span
              key={chain}
              className="text-xs text-gray-600 border border-white/10 px-3 py-1.5 rounded-lg font-mono"
            >
              {chain}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import Image from "next/image";
import { Twitter, MessageCircle, Github, Send } from "lucide-react";

const LINKS = {
  Platform: [
    { label: "Games", href: "/games" },
    { label: "Dashboard", href: "/dashboard" },
    { label: "Tournaments", href: "#" },
    { label: "Leaderboard", href: "#" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "mailto:careers@chipsonchips.com" },
    { label: "Press", href: "#" },
  ],
  Legal: [
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Responsible Gaming", href: "#" },
    { label: "Compliance", href: "#" },
  ],
  Developers: [
    { label: "Documentation", href: "#" },
    { label: "GitHub", href: "#" },
    { label: "SDK", href: "#" },
    { label: "Status", href: "#" },
  ],
};

const SOCIALS = [
  { icon: Twitter, label: "X (Twitter)", href: "#" },
  { icon: MessageCircle, label: "Discord", href: "#" },
  { icon: Send, label: "Telegram", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0a0a12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <Image
                src="/logo.png"
                alt="ChipsOnChips"
                width={30}
                height={30}
              />
              <span className="font-orbitron font-black text-base tracking-wider">
                <span className="text-white">CHIPS</span>
                <span className="text-amber-500">ON</span>
                <span className="text-white">CHIPS</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              The home of premium Web3 gaming. Play, compete, and win.
            </p>
            <div className="flex items-center gap-3">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-gray-500 hover:text-amber-400 hover:border-amber-500/40 transition-colors"
                >
                  <Icon size={14} />
                </Link>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([group, links]) => (
            <div key={group}>
              <h4 className="text-xs font-bold text-amber-500 tracking-widest uppercase mb-4 font-orbitron">
                {group}
              </h4>
              <ul className="space-y-2.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-gray-500 hover:text-gray-200 transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} ChipsOnChips. All rights reserved.
          </p>
          <p className="text-xs text-gray-600 text-center">
            Players are responsible for ensuring compliance with local laws. Play responsibly.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 live-pulse" />
            <span className="text-xs text-gray-600">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "ChipsOnChips — The Home of Premium Web3 Gaming",
  description:
    "Play premium casino games, compete in tournaments, and win real rewards. One account. One wallet. Every game.",
  keywords: ["casino", "web3", "gaming", "blockchain", "USDC", "Base", "Farcaster"],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: "/logo.png",
  },
  openGraph: {
    title: "ChipsOnChips",
    description: "The Home of Premium Web3 Gaming",
    type: "website",
    images: [{ url: "/logo.png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${orbitron.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

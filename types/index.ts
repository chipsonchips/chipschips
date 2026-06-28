export type GameStatus = "live" | "development" | "planned" | "coming_soon";

export interface Game {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  status: GameStatus;
  url?: string;
  icon: string;
  emoji: string;
  color: string;
  features: string[];
  players?: number;
  tags: string[];
  isNew?: boolean;
  isFeatured?: boolean;
}

export interface Stats {
  totalPlayers: string;
  totalGames: string;
  totalPayout: string;
  activeNow: string;
}

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

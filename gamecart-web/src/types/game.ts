export type Platform = "Steam" | "PlayStation";

export interface GameRecord {
  id: string;
  title: string;
  subtitle: string;
  cover: string;
  hero: string;
  primaryPlatform: Platform;
  platforms: Platform[];
  genre: string[];
  multiplayer: boolean;
  completed: boolean;
  recentlyPlayed: boolean;
  progress: number;
  lastPlayed: string;
  dnaTags: string[];
  currentPrice: number;
  previousPrice: number;
  lowestPrice: number;
  priceHistory: number[];
  criticScore: number;
  playerScore: number;
  playtimeHours: number;
  metacriticUrl: string;
}

// Game status types
export type GameStatus = 'available' | 'demo' | 'coming-soon' | 'in development' | 'playtest';

// Game platform types
export type GamePlatform = 'PC' | 'Mobile' | 'Web';

// Game category types
export type GameCategory = 'horror' | 'puzzle' | 'narrative' | 'adventure' | 'mobile' | 'detective';

// Game interface
export interface Game {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  thumbnail: string;
  images: string[];
  status: GameStatus;
  platforms: GamePlatform[];
  links: GameLink[];
  categories: GameCategory[];
  featured: boolean;
}

export interface GameLink {
  platform: GamePlatform;
  url: string;
  label: string;
}

// Social media links
export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
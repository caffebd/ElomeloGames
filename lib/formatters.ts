import { GameStatus, GamePlatform } from './types';

export const formatGameStatus = (status: GameStatus): string => {
  const statusMap: Record<GameStatus, string> = {
    'available': 'Available',
    'demo': 'Demo',
    'coming-soon': 'Coming Soon'
  };
  return statusMap[status];
};

export const formatPlatformName = (platform: GamePlatform): string => {
  const platformMap: Record<GamePlatform, string> = {
    'steam': 'Steam',
    'itch': 'itch.io',
    'google-play': 'Google Play',
    'web': 'Web'
  };
  return platformMap[platform];
};
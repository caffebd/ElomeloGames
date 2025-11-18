import { GameStatus, GamePlatform } from './types';

export const formatGameStatus = (status: GameStatus): string => {
  const statusMap: Record<GameStatus, string> = {
    'available': 'Available',
    'demo': 'Demo',
    'coming-soon': 'Coming Soon',
    'in development': 'In Development',
    'playtest': 'Playtest'
  };
  return statusMap[status];
};

export const formatPlatformName = (platform: GamePlatform): string => {
  const platformMap: Record<GamePlatform, string> = {
    'PC': 'PC',
    'Mobile': 'Mobile',
    'Web': 'Web'
  };
  return platformMap[platform];
};
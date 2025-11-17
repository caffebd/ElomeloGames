export interface StudentGame {
  id: string;
  name: string;
  description: string;
  link: string;
  category: 'action' | 'horror' | 'puzzle' | 'adventure';
  thumbnail: string;
}

export const studentGames: StudentGame[] = [
  {
    id: '1',
    name: 'Catch Color',
    description: 'Catch the falling paint to colour the background.',
    link: 'https://play.google.com/store/apps/details?id=org.caffebd.catchcolor&hl=en_GB&pli=1',
    category: 'puzzle',
    thumbnail: '/images/training/CatchColor/CatchColorMain.png'
  },
  {
    id: '2',
    name: 'At Night',
    description: 'What happens when you wake up at night and find a zombie in your house.',
    link: 'https://retrorabiul.itch.io/at-night',
    category: 'horror',
    thumbnail: '/images/training/AtNight/AtNightMain.png'
  },
  {
    id: '3',
    name: 'Space Run',
    description: 'With limited oxygen you need to make it back to your spaceship, while avoiding the strange alien creatures.',
    link: 'https://retrorabiul.itch.io/spacerun',
    category: 'action',
    thumbnail: '/images/training/SpaceRun/SpaceRunMain.png'
  },
  {
    id: '4',
    name: 'Ektana',
    description: 'Keep moving and avoid the falling hazards!',
    link: 'https://play.google.com/store/apps/details?id=com.caffebd.throwballdev&hl=en_GB',
    category: 'action',
    thumbnail: '/images/training/Ektana/EktanaMain.png'
  }
];

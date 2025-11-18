export interface StudentGame {
  id: string;
  name: string;
  description: string;
  link: string;
  categories: ('action' | 'horror' | 'puzzle' | 'adventure')[];
  thumbnail: string;
}

export const studentGames: StudentGame[] = [
  {
    id: '1',
    name: 'Catch Color',
    description: 'Catch the falling paint to colour the background.',
    link: 'https://play.google.com/store/apps/details?id=org.caffebd.catchcolor&hl=en_GB&pli=1',
    categories: ['puzzle'],
    thumbnail: '/images/training/CatchColor/CatchColorMain.png'
  },
  {
    id: '2',
    name: 'At Night',
    description: 'What happens when you wake up at night and find a zombie in your house.',
    link: 'https://retrorabiul.itch.io/at-night',
    categories: ['horror'],
    thumbnail: '/images/training/AtNight/AtNightMain.png'
  },
  {
    id: '3',
    name: 'Space Run',
    description: 'With limited oxygen you need to make it back to your spaceship, while avoiding the strange alien creatures.',
    link: 'https://retrorabiul.itch.io/spacerun',
    categories: ['action'],
    thumbnail: '/images/training/SpaceRun/SpaceRunMain.png'
  },
  {
    id: '4',
    name: 'Ektana',
    description: 'Keep moving and avoid the falling hazards!',
    link: 'https://play.google.com/store/apps/details?id=com.caffebd.throwballdev&hl=en_GB',
    categories: ['action'],
    thumbnail: '/images/training/Ektana/EktanaMain.png'
  },
  {
    id: '5',
    name: 'Lal & Nil',
    description: 'A 2 player co-operative game where you work together to escape the dungeon.',
    link: 'https://retrorabiul.itch.io/lal-nil',
    categories: ['action', 'puzzle'],
    thumbnail: '/images/training/LalNil/LalNilMain.png'
  },
  {
    id: '6',
    name: 'Starry Slide',
    description: 'A climb the tower, time trial. Will you take the easy path or the hard path?',
    link: 'https://retrorabiul.itch.io/starry-slide',
    categories: ['action'],
    thumbnail: '/images/training/StarrySlide/StarrySlideMain.png'
  }
];

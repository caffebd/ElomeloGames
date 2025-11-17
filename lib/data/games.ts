import { Game } from '../types';

export const games: Game[] = [
    {
    id: '1',
    slug: 'wrongly-accused',
    title: 'Wrongly Accused',
    subtitle: 'Coming soon',
    description: 'A full 3D version of our 2d game jam game, "Wrongly Accused". Investigate crimes set throughout history; in each case clear the name of the wrongly accused by finding clues, interviewing suspects, and deducing the truth.',
    thumbnail: '/images/games/WronglyAccusedScreenshots/wrongly_accused_3d_Main.png',
    images: [
      '/images/games/WronglyAccusedScreenshots/wrongly_accused_3d_Main.png',
      '/images/games/WronglyAccusedScreenshots/wrongly_accused_3d_1.png',
      '/images/games/WronglyAccusedScreenshots/wrongly_accused_3d_2.png',
      '/images/games/WronglyAccusedScreenshots/wrongly_accused_3d_4.png',
      '/images/games/WronglyAccusedScreenshots/wrongly_accused_3d_5.png',
      '/images/games/WronglyAccusedScreenshots/wrongly_accused_3d_6.png'
    ],
    status: 'coming-soon',
    platforms: [],
    links: [],
    categories: ['detective', 'narrative', 'adventure'],
    featured: false
  },
  {
    
    id: '2',
    slug: 'come-home',
    title: 'Come Home: Ghost Stories from Bangladesh',
    subtitle: 'A haunting narrative adventure',
    description: 'Experience authentic ghost stories from Bangladesh in this atmospheric horror adventure. Explore mysterious locations, uncover dark secrets, and confront supernatural forces in this culturally rich narrative experience.',
    thumbnail: '/images/games/ComeHomeScreenshots/ComeHomeMain.webp',
    images: [
      '/images/games/ComeHomeScreenshots/ComeHomeMain.webp',
      '/images/games/ComeHomeScreenshots/ComeHome2.webp',
      '/images/games/ComeHomeScreenshots/ComeHome3.webp',
      '/images/games/ComeHomeScreenshots/ComeHome4.webp',
      '/images/games/ComeHomeScreenshots/ComeHome5.webp',
      '/images/games/ComeHomeScreenshots/ComeHome6.webp'
    ],
    status: 'demo',
    platforms: ['steam'],
    links: [
      {
        platform: 'steam',
        url: 'https://store.steampowered.com/app/3025470/Come_Home_Ghost_Stories_from_Bangladesh/',
        label: 'wishlist on steam'
      }
    ],
    categories: ['horror', 'narrative', 'adventure'],
    featured: true
  },
  {
    id: '3',
    slug: 'dr-sarah',
    title: 'Dr Sarah and the Village of Mystery',
    subtitle: 'A children\'s point-and-click adventure.',
    description: 'Join Dr Sarah as she investigates strange occurrences in a mysterious village. Solve puzzles, interview villagers, and uncover the truth behind the supernatural events plaguing the community.',
    thumbnail: '/images/games/DrSarahScreenshots/DrSarahMain.webp',
    images: [
      '/images/games/DrSarahScreenshots/DrSarahMain.webp',
      '/images/games/DrSarahScreenshots/dr-sarah-village.webp',
      '/images/games/DrSarahScreenshots/Screenshot+2024-07-01+200331.webp',
      '/images/games/DrSarahScreenshots/Screenshot+2024-07-01+200353.webp'
    ],
    status: 'available',
    platforms: ['web'],
    links: [
      {
        platform: 'web',
        url: 'https://villageofmystery.quest/',
        label: 'learn more'
      }
    ],
    categories: ['puzzle', 'adventure', 'narrative'],
    featured: true
  },
  {
    id: '4',
    slug: 'the-buzz',
    title: 'The Buzz',
    subtitle: 'A chilling horror experience',
    description: 'Something is wrong. The buzzing won\'t stop. Explore a disturbing environment and uncover what\'s causing the relentless noise in this short but intense horror experience.',
    thumbnail: '/images/games/TheBuzzScreenshots/TheBuzzMain.png',
    images: [
      '/images/games/TheBuzzScreenshots/TheBuzzMain.png',
      '/images/games/TheBuzzScreenshots/buzz_1.png',
      '/images/games/TheBuzzScreenshots/buzz_2.png',
      '/images/games/TheBuzzScreenshots/buzz_3.png',
      '/images/games/TheBuzzScreenshots/buzz_4.png'
    ],
    status: 'available',
    platforms: ['itch'],
    links: [
      {
        platform: 'itch',
        url: 'https://elomelo-horror.itch.io/thebuzz',
        label: 'Play at itch.io'
      }
    ],
    categories: ['horror'],
    featured: false
  },
  {
    id: '5',
    slug: 'wrongly-accused-2d',
    title: 'Wrongly Accused 2D',
    subtitle: 'A deduction based detective adventure',
    description: 'Step into the 1970s and investigate a case of murder, terrorism based on true events that took place during the Years of Lead in 1970s Italy.',
    thumbnail: '/images/games/WronglyAccused2DScreenshots/WronglyAccused2DMain.png',
    images: [
      '/images/games/WronglyAccused2DScreenshots/WronglyAccused2DMain.png',
      '/images/games/WronglyAccused2DScreenshots/wrongly_accused_1.webp',
      '/images/games/WronglyAccused2DScreenshots/wrongly_accused_2.webp',
      '/images/games/WronglyAccused2DScreenshots/wrongly_accused_3.webp'
    ],
    status: 'available',
    platforms: ['itch'],
    links: [
      {
        platform: 'itch',
        url: 'https://elomelogames.itch.io/wrongly-accused',
        label: 'play at itch.io'
      }
    ],
    categories: ['narrative', 'adventure'],
    featured: false
  },
  {
    id: '6',
    slug: 'mystery-words',
    title: 'শব্দ রহস্য (Bangla Words)',
    subtitle: 'Bengali word puzzle game',
    description: 'Test your Bengali vocabulary with this engaging word puzzle game. Perfect for language learners and native speakers alike.',
    thumbnail: '/images/games/BanglaPhraseScreenshots/BanglaPhraseMain.png',
    images: [
      '/images/games/BanglaPhraseScreenshots/BanglaPhraseMain.png',
      '/images/games/BanglaPhraseScreenshots/PHOTO-2024-04-14-20-21-35.png',
      '/images/games/BanglaPhraseScreenshots/PHOTO-2024-04-14-20-21-36.png',
      '/images/games/BanglaPhraseScreenshots/PHOTO-2024-04-14-20-21-36 (1).png',
      '/images/games/BanglaPhraseScreenshots/PHOTO-2024-04-14-20-21-36 (2).png'
    ],
    status: 'available',
    platforms: ['google-play'],
    links: [
      {
        platform: 'google-play',
        url: 'https://play.google.com/store/apps/details?id=com.elomelo.mysterywords',
        label: 'Download on Google Play'
      }
    ],
    categories: ['puzzle', 'mobile'],
    featured: false
  },

];
# Elomelo Games Website

A modern, vibrant website for Elomelo Games - a game studio based in Sylhet, Bangladesh.

## Features

- **Hero Section** with YouTube video embed showcasing game trailer
- **Interactive Games Grid** with category filtering (All, Horror, Puzzle, Narrative)
- **Dynamic Game Detail Pages** for each game with screenshots and platform links
- **About Section** highlighting the studio's mission and community training programs
- **Training Page** detailing educational programs in graphic design, coding, and game design
- **Responsive Design** optimized for mobile, tablet, and desktop
- **Modern Animations** with hover effects and smooth transitions

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── games/[slug]/     # Dynamic game detail pages
│   ├── training/         # Training programs page
│   ├── layout.tsx        # Root layout with fonts
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles and theme
├── components/
│   ├── ui/               # shadcn components
│   ├── Navigation.tsx    # Header navigation
│   ├── Footer.tsx        # Footer component
│   ├── GameCard.tsx      # Game card component
│   └── VideoEmbed.tsx    # YouTube embed component
├── lib/
│   ├── data/
│   │   └── games.ts      # Game data
│   ├── types.ts          # TypeScript types
│   ├── formatters.ts     # Utility formatters
│   └── utils.ts          # Utility functions
└── public/               # Static assets

```

## Games Featured

1. **Come Home: Ghost Stories from Bangladesh** - Horror/Narrative (Demo on Steam)
2. **Dr Sarah and the Village of Mystery** - Puzzle/Adventure (Available)
3. **The Buzz** - Horror (Available on itch.io)
4. **Wrongly Accused** - Narrative/Adventure (Available on itch.io)
5. **শব্দ রহস্য (Bangla Words)** - Puzzle/Mobile (Google Play)
6. **The Elevator Drill** - Horror (Coming Soon)

## Color Palette

- **Coral**: #FF6B4A (Primary)
- **Yellow**: #FFD93D (Secondary)
- **Magenta**: #C41E7D (Accent)
- **Warm White**: #FFF9F5 (Background)
- **Soft Black**: #1A1A1A (Text)

## Typography

- **Headings**: Outfit (Google Fonts)
- **Body**: Plus Jakarta Sans (Google Fonts)
- **Impact Text**: Bebas Neue (Google Fonts)

## Build for Production

```bash
npm run build
npm start
```

## Contact

**Elomelo Games**
- Email: admin@elomelostudio.com
- Location: Khadimnagar, Sylhet, Bangladesh

---

Built with ❤️ by Elomelo Games
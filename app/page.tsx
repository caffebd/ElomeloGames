'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Navigation } from '@/components/Navigation';
import { VideoEmbed } from '@/components/VideoEmbed';
import { GameCard } from '@/components/GameCard';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Filter } from 'lucide-react';
import { games } from '@/lib/data/games';
import { GameCategory } from '@/lib/types';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<GameCategory | 'all'>('all');

  const categories: Array<{ value: GameCategory | 'all'; label: string }> = [
    { value: 'all', label: 'All' },
    { value: 'horror', label: 'Horror' },
    { value: 'puzzle', label: 'Puzzle' },
    { value: 'narrative', label: 'Narrative' },
    { value: 'detective', label: 'Detective' },
  ];

  const filteredGames = selectedCategory === 'all'
    ? games
    : games.filter(game => game.categories.includes(selectedCategory));

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative flex items-center justify-center gradient-coral-yellow" style={{ minHeight: '70vh', paddingTop: '80px' }}>
        <div className="absolute inset-0 bg-black/10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto sm:px-6 lg:px-8" style={{ paddingTop: '40px', paddingBottom: '40px', paddingLeft: '20px', paddingRight: '20px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] items-center" style={{ gap: '48px' }}>
            {/* Text Content */}
            <div className="text-white" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <h1 className="heading-xl">
                Elomelo Games
              </h1>
              <p className="heading-md font-normal">
                Crafting Stories, Building Worlds from Bangladesh
              </p>
              <p className="body-lg">
                We make narrative games, puzzle games, adventure games, indie horror and Bangla language apps.
              </p>
              
              {/* Video on mobile - appears here */}
              <div className="w-full lg:hidden">
                <VideoEmbed videoId="8diwh5uzLMQ" title="Come Home: Ghost Stories from Bangladesh Trailer" />
              </div>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start" style={{ paddingTop: '24px' }}>
                <Button
                  size="lg"
                  style={{ padding: '20px 40px', fontSize: '18px', height: 'auto' }}
                  className="bg-white text-(--color-coral) hover:bg-gray-100 font-semibold"
                  asChild
                >
                  <a href="#games">Explore Our Games</a>
                </Button>
              </div>
            </div>

            {/* Video on desktop - appears here */}
            <div className="w-full hidden lg:block">
              <VideoEmbed videoId="8diwh5uzLMQ" title="Come Home: Ghost Stories from Bangladesh Trailer" />
            </div>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section id="games" className="bg-(--color-warm-white) flex justify-center" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center flex flex-col items-center w-full" style={{ marginBottom: '48px' }}>
            <h2 className="heading-lg text-(--color-magenta) text-center" style={{ marginBottom: '16px' }}>Our Games</h2>
            <p className="body-lg text-gray-600 max-w-2xl text-center mx-auto" style={{ marginBottom: '32px' }}>
              Explore our collection of narrative-driven games, puzzles, and horror experiences
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center items-center w-full" style={{ gap: '16px', marginBottom: '48px' }}>
            <div className="flex items-center gap-3 text-gray-600">
              <Filter size={22} />
              <span className="body-md font-semibold">Filter:</span>
            </div>
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.value)}
                style={{ 
                  padding: '14px 28px',
                  minWidth: '120px',
                  height: 'auto'
                }}
                className={
                  selectedCategory === category.value
                    ? 'bg-(--color-coral) hover:bg-(--color-coral-dark) text-white font-semibold text-base'
                    : 'border-2 border-gray-300 hover:border-(--color-coral) hover:text-(--color-coral) font-semibold text-base'
                }
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Games Grid */}
          <div className="flex justify-center w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1400px]">
              {filteredGames.map((game) => (
                <div key={game.id} className="flex justify-center">
                  <GameCard game={game} />
                </div>
              ))}
            </div>
          </div>

          {filteredGames.length === 0 && (
            <div className="text-center py-12">
              <p className="body-lg text-gray-500">No games found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white flex justify-center" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="w-full max-w-7xl mx-auto sm:px-6 lg:px-8" style={{ paddingLeft: '20px', paddingRight: '20px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <a href="https://en.wikipedia.org/wiki/Sylhet" target="_blank" rel="noopener noreferrer" className="rounded-2xl overflow-hidden shadow-2xl hover:opacity-90 transition-opacity">
              <Image
                src="/images/about/view-of-sylhet.png"
                alt="View of Sylhet, Bangladesh"
                width={700}
                height={467}
                className="w-full h-auto"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </a>

            {/* Content */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <h2 className="heading-lg text-(--color-magenta)">About Elomelo Games</h2>
              
              <div className="body-lg text-gray-700" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <p>
                  Elomelo Games is a small independent game studio from <a href="https://en.wikipedia.org/wiki/Sylhet" target="_blank" rel="noopener noreferrer" className="text-(--color-coral) hover:underline font-semibold">Sylhet, Bangladesh</a>. Our team is based in both Bangladesh and the UK.
                </p>
                <p className="italic">
                  <strong>Elomelo</strong> (এলোমেলো) means &ldquo;random&rdquo; in Bangla and kind of sums up our approach to life.
                </p>
                <p>
                  We focus on narrative, adventure, puzzle and horror games.
                </p>
                
                <p>
                  We also <a href="/training" className="text-(--color-coral) hover:underline font-semibold">work with young people</a> from our local community to provide training in art, coding and game design.
                </p>
                
          
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 gradient-magenta-coral flex justify-center">
        <div className="w-full max-w-4xl mx-auto sm:px-6 lg:px-8" style={{ paddingTop: '40px', paddingBottom: '40px', paddingLeft: '20px', paddingRight: '20px' }}>
          <a 
            href="https://bsky.app/profile/elomelo.games"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 hover:opacity-80 transition-opacity"
          >
            <div style={{ width: '80px', height: '80px', position: 'relative', flexShrink: 0 }}>
              <Image
                src="/images/logos/Bluesky_Logo.png"
                alt="Bluesky"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="heading-lg text-white text-center lg:text-left">Follow us on Bluesky</h2>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
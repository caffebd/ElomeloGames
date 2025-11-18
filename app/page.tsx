'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Navigation } from '@/components/Navigation';
import { VideoEmbed } from '@/components/VideoEmbed';
import { GameCard } from '@/components/GameCard';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Filter, ChevronLeft, ChevronRight, ChevronUp, ChevronDown } from 'lucide-react';
import { games } from '@/lib/data/games';
import { GameCategory } from '@/lib/types';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<GameCategory | 'all'>('all');
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [mobileScrollIndex, setMobileScrollIndex] = useState(0);
  const [mobileScrollOffset, setMobileScrollOffset] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const mobileContainerRef = useRef<HTMLDivElement>(null);
  const mobileCardRefs = useRef<(HTMLDivElement | null)[]>([]);

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

  // Desktop carousel logic
  const columnsToShow = 3; // Desktop shows 3 columns
  const gamesPerColumn = 2; // 2 rows per column = 6 games total visible
  const totalColumns = Math.ceil(filteredGames.length / gamesPerColumn);
  const maxScrollColumns = Math.max(0, totalColumns - columnsToShow);
  const canScrollLeft = carouselIndex > 0;
  const canScrollRight = carouselIndex < maxScrollColumns;

  // Mobile vertical scroll logic
  const mobileCardsToShow = 4;
  const maxMobileScroll = Math.max(0, filteredGames.length - mobileCardsToShow);
  const canScrollUp = mobileScrollIndex > 0;
  const canScrollDown = mobileScrollIndex < maxMobileScroll;

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (direction === 'left' && canScrollLeft) {
      setCarouselIndex(carouselIndex - 1); // Scroll by 1 column
    } else if (direction === 'right' && canScrollRight) {
      setCarouselIndex(carouselIndex + 1); // Scroll by 1 column
    }
  };

  const scrollMobile = (direction: 'up' | 'down') => {
    const newIndex = direction === 'up' 
      ? Math.max(0, mobileScrollIndex - 1)
      : Math.min(maxMobileScroll, mobileScrollIndex + 1);
    
    if (newIndex !== mobileScrollIndex) {
      setMobileScrollIndex(newIndex);
      
      // When scrolling down, calculate offset to show the new card fully at bottom
      // When scrolling up, show the card at top
      if (direction === 'down' && newIndex < filteredGames.length - 1) {
        // Scroll so that card at newIndex + 3 (4th visible card) is fully visible
        const targetIndex = Math.min(newIndex + 3, filteredGames.length - 1);
        const targetCard = mobileCardRefs.current[targetIndex];
        const currentCard = mobileCardRefs.current[newIndex];
        
        if (targetCard && currentCard) {
          // Calculate offset to show current card at top
          setMobileScrollOffset(currentCard.offsetTop);
        }
      } else {
        // Scroll up - show card at top
        const cardElement = mobileCardRefs.current[newIndex];
        if (cardElement) {
          setMobileScrollOffset(cardElement.offsetTop);
        }
      }
    }
  };

  const handleCategoryChange = (category: GameCategory | 'all') => {
    setSelectedCategory(category);
    setCarouselIndex(0); // Reset carousel when category changes
    setMobileScrollIndex(0); // Reset mobile scroll when category changes
    setMobileScrollOffset(0); // Reset mobile scroll offset
  };

  // Reset card refs when games change
  useEffect(() => {
    mobileCardRefs.current = mobileCardRefs.current.slice(0, filteredGames.length);
  }, [filteredGames.length]);

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
                <VideoEmbed videoId="PRW6SYj90f4" title="Elomelo Showreel" />
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
              <VideoEmbed videoId="PRW6SYj90f4" title="Elomelo Showreel" />
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
                onClick={() => handleCategoryChange(category.value)}
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

          {/* Games Carousel */}
          {filteredGames.length === 0 ? (
            <div className="text-center py-12">
              <p className="body-lg text-gray-500">No games found in this category.</p>
            </div>
          ) : (
            <>
              {/* Desktop Carousel (horizontal) */}
              <div className="hidden lg:flex relative items-center justify-center w-full">
                {/* Left Arrow */}
                <button
                  onClick={() => scrollCarousel('left')}
                  disabled={!canScrollLeft}
                  className="absolute left-0 z-10 bg-white rounded-full shadow-lg hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                  style={{
                    width: '48px',
                    height: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid #e5e7eb'
                  }}
                  aria-label="Previous games"
                >
                  <ChevronLeft size={28} className="text-gray-700" />
                </button>

                {/* Carousel Container */}
                <div 
                  ref={carouselRef}
                  className="overflow-hidden w-full"
                  style={{ maxWidth: '1400px', paddingLeft: '60px', paddingRight: '60px' }}
                >
                  <div 
                    className="transition-transform duration-500 ease-in-out"
                    style={{
                      display: 'flex',
                      gap: '32px',
                      transform: `translateX(calc(-${carouselIndex} * (100% / ${columnsToShow} + 32px)))`
                    }}
                  >
                    {Array.from({ length: totalColumns }).map((_, colIndex) => (
                      <div
                        key={colIndex}
                        style={{
                          width: `calc((100% - ${(columnsToShow - 1) * 32}px) / ${columnsToShow})`,
                          flexShrink: 0,
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '32px'
                        }}
                      >
                        {filteredGames
                          .slice(colIndex * gamesPerColumn, (colIndex + 1) * gamesPerColumn)
                          .map((game) => (
                            <div key={game.id} className="flex justify-center">
                              <GameCard game={game} />
                            </div>
                          ))}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Arrow */}
                <button
                  onClick={() => scrollCarousel('right')}
                  disabled={!canScrollRight}
                  className="absolute right-0 z-10 bg-white rounded-full shadow-lg hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                  style={{
                    width: '48px',
                    height: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid #e5e7eb'
                  }}
                  aria-label="Next games"
                >
                  <ChevronRight size={28} className="text-gray-700" />
                </button>
              </div>

              {/* Mobile Carousel (vertical) */}
              <div className="lg:hidden relative flex flex-col items-center w-full">
                {/* Up Arrow */}
                <button
                  onClick={() => scrollMobile('up')}
                  disabled={!canScrollUp}
                  className="mb-4 bg-white rounded-full shadow-lg hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                  style={{
                    width: '48px',
                    height: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid #e5e7eb'
                  }}
                  aria-label="Scroll up"
                >
                  <ChevronUp size={28} className="text-gray-700" />
                </button>

                {/* Mobile Scroll Container */}
                <div 
                  className="overflow-hidden w-full max-w-md"
                  style={{
                    minHeight: '1800px',
                    maxHeight: '1800px'
                  }}
                >
                  <div
                    ref={mobileContainerRef}
                    className="transition-transform duration-500 ease-in-out"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '24px',
                      transform: `translateY(-${mobileScrollOffset}px)`
                    }}
                  >
                    {filteredGames.map((game, index) => (
                      <div 
                        key={game.id} 
                        ref={(el) => { mobileCardRefs.current[index] = el; }}
                        className="flex justify-center"
                      >
                        <GameCard game={game} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Down Arrow */}
                <button
                  onClick={() => scrollMobile('down')}
                  disabled={!canScrollDown}
                  className="mt-4 bg-white rounded-full shadow-lg hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                  style={{
                    width: '48px',
                    height: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid #e5e7eb'
                  }}
                  aria-label="Scroll down"
                >
                  <ChevronDown size={28} className="text-gray-700" />
                </button>
              </div>
            </>
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
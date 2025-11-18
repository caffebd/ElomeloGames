'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { ArrowLeft, Filter, ExternalLink, ChevronLeft, ChevronRight, ChevronUp, ChevronDown } from 'lucide-react';
import { studentGames } from '@/lib/data/student_games';

type StudentGameCategory = 'action' | 'horror' | 'puzzle' | 'adventure' | 'all';

export default function TrainingPage() {
  const [selectedCategory, setSelectedCategory] = useState<StudentGameCategory>('all');
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [mobileScrollIndex, setMobileScrollIndex] = useState(0);
  const [mobileScrollOffset, setMobileScrollOffset] = useState(0);
  const [mobileContainerHeight, setMobileContainerHeight] = useState(2200);
  const carouselRef = useRef<HTMLDivElement>(null);
  const mobileContainerRef = useRef<HTMLDivElement>(null);
  const mobileCardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const categories: Array<{ value: StudentGameCategory; label: string }> = [
    { value: 'all', label: 'All' },
    { value: 'action', label: 'Action' },
    { value: 'horror', label: 'Horror' },
    { value: 'puzzle', label: 'Puzzle' },
    { value: 'adventure', label: 'Adventure' },
  ];

  const filteredGames = selectedCategory === 'all'
    ? studentGames
    : studentGames.filter(game => game.categories.includes(selectedCategory));

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
      
      const cardElement = mobileCardRefs.current[newIndex];
      if (cardElement) {
        setMobileScrollOffset(cardElement.offsetTop);
      }
    }
  };

  const handleCategoryChange = (category: StudentGameCategory) => {
    setSelectedCategory(category);
    setCarouselIndex(0); // Reset carousel when category changes
    setMobileScrollIndex(0); // Reset mobile scroll when category changes
    setMobileScrollOffset(0); // Reset mobile scroll offset
  };

  // Reset card refs when games change
  useEffect(() => {
    mobileCardRefs.current = mobileCardRefs.current.slice(0, filteredGames.length);
  }, [filteredGames.length]);

  // Calculate container height based on actual card heights (max 4 cards)
  useEffect(() => {
    const cardsToShow = Math.min(filteredGames.length, mobileCardsToShow);
    if (cardsToShow > 0 && mobileCardRefs.current[cardsToShow - 1]) {
      // Wait for images to load
      setTimeout(() => {
        const lastVisibleCard = mobileCardRefs.current[cardsToShow - 1];
        if (lastVisibleCard) {
          const height = lastVisibleCard.offsetTop + lastVisibleCard.offsetHeight;
          setMobileContainerHeight(height);
        }
      }, 100);
    }
  }, [filteredGames.length, mobileCardsToShow]);

  return (
    <main className="min-h-screen bg-(--color-warm-white)">
      <Navigation />

      <div style={{ paddingTop: '120px', paddingBottom: '80px', display: 'flex', justifyContent: 'center' }}>
        <div style={{ maxWidth: '1280px', width: '100%', paddingLeft: '20px', paddingRight: '20px' }} className="sm:px-6 lg:px-8">
          {/* Back Button */}
          <div style={{ marginBottom: '32px' }}>
            <Link href="/">
              <Button variant="ghost" style={{ padding: '12px 16px', height: 'auto' }} className="hover:text-(--color-coral)">
                <ArrowLeft className="mr-2" size={20} />
                <span className="text-base">Back to Home</span>
              </Button>
            </Link>
          </div>

          {/* Header */}
          <div style={{ marginBottom: '48px', textAlign: 'center' }}>
            <h1 className="heading-xl text-(--color-magenta)" style={{ marginBottom: '24px' }}>Training</h1>
          </div>

          {/* Hero Image */}
          <div style={{ marginBottom: '48px', display: 'flex', justifyContent: 'center' }}>
            <div style={{ maxWidth: '900px', width: '100%' }}>
              <AspectRatio ratio={16 / 11} className="bg-gray-100 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/training/godot-team-b-1916x1362.jpg"
                  alt="Elomelo Games Training Team"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1280px) 100vw, 900px"
                />
              </AspectRatio>
            </div>
          </div>

          {/* Description */}
          <div style={{ marginBottom: '64px', textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
            <p className="body-lg text-gray-700" style={{ maxWidth: '768px' }}>
              We work with young people from our local community in Sylhet, Bangladesh to provide 
              training in graphic design, coding and game design. Our mission is to empower the next 
              generation of game developers and digital creators.
            </p>
          </div>

          {/* Student Games Section */}
          <div style={{ marginTop: '80px' }}>
            <div style={{ marginBottom: '48px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h2 className="heading-lg text-(--color-magenta)" style={{ marginBottom: '16px' }}>Student Games</h2>
              <p className="body-lg text-gray-600" style={{ maxWidth: '768px' }}>
                Check out the amazing games created by our students
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center items-center" style={{ gap: '16px', marginBottom: '48px' }}>
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
              <div className="text-center" style={{ padding: '48px 0' }}>
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
                                <Card className="border-2 border-gray-200 hover:border-(--color-coral) transition-all duration-300 hover:shadow-xl w-full">
                                  <CardContent className="p-0">
                                    <AspectRatio ratio={16 / 9} className="bg-gray-100 overflow-hidden">
                                      <Image
                                        src={game.thumbnail}
                                        alt={game.name}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                      />
                                    </AspectRatio>

                                    <div style={{ padding: '24px' }}>
                                      <h3 className="heading-sm text-(--color-soft-black)" style={{ marginBottom: '12px' }}>
                                        {game.name}
                                      </h3>

                                      <p className="body-md text-gray-600" style={{ marginBottom: '16px' }}>{game.description}</p>

                                      <div style={{ marginBottom: '16px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                        {game.categories.map((category) => (
                                          <span
                                            key={category}
                                            style={{ padding: '6px 14px' }}
                                            className="text-sm font-medium bg-(--color-yellow)/20 text-(--color-soft-black) rounded-full capitalize"
                                          >
                                            {category}
                                          </span>
                                        ))}
                                      </div>

                                      <Button
                                        asChild
                                        style={{ padding: '12px 20px', height: 'auto', width: '100%' }}
                                        className="bg-(--color-coral) hover:bg-(--color-coral-dark) text-white font-semibold"
                                      >
                                        <a href={game.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                                          <span>Play Game</span>
                                          <ExternalLink size={16} />
                                        </a>
                                      </Button>
                                    </div>
                                  </CardContent>
                                </Card>
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
                      height: `${mobileContainerHeight}px`
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
                          <Card className="border-2 border-gray-200 hover:border-(--color-coral) transition-all duration-300 hover:shadow-xl w-full">
                            <CardContent className="p-0">
                              <AspectRatio ratio={16 / 9} className="bg-gray-100 overflow-hidden">
                                <Image
                                  src={game.thumbnail}
                                  alt={game.name}
                                  fill
                                  className="object-cover"
                                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                              </AspectRatio>

                              <div style={{ padding: '24px' }}>
                                <h3 className="heading-sm text-(--color-soft-black)" style={{ marginBottom: '12px' }}>
                                  {game.name}
                                </h3>

                                <p className="body-md text-gray-600" style={{ marginBottom: '16px' }}>{game.description}</p>

                                <div style={{ marginBottom: '16px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                  {game.categories.map((category) => (
                                    <span
                                      key={category}
                                      style={{ padding: '6px 14px' }}
                                      className="text-sm font-medium bg-(--color-yellow)/20 text-(--color-soft-black) rounded-full capitalize"
                                    >
                                      {category}
                                    </span>
                                  ))}
                                </div>

                                <Button
                                  asChild
                                  style={{ padding: '12px 20px', height: 'auto', width: '100%' }}
                                  className="bg-(--color-coral) hover:bg-(--color-coral-dark) text-white font-semibold"
                                >
                                  <a href={game.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                                    <span>Play Game</span>
                                    <ExternalLink size={16} />
                                  </a>
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
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
        </div>
      </div>

      <Footer />
    </main>
  );
}
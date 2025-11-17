'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { ArrowLeft, Filter, ExternalLink } from 'lucide-react';
import { studentGames } from '@/lib/data/student_games';

type StudentGameCategory = 'action' | 'horror' | 'puzzle' | 'adventure' | 'all';

export default function TrainingPage() {
  const [selectedCategory, setSelectedCategory] = useState<StudentGameCategory>('all');

  const categories: Array<{ value: StudentGameCategory; label: string }> = [
    { value: 'all', label: 'All' },
    { value: 'action', label: 'Action' },
    { value: 'horror', label: 'Horror' },
    { value: 'puzzle', label: 'Puzzle' },
    { value: 'adventure', label: 'Adventure' },
  ];

  const filteredGames = selectedCategory === 'all'
    ? studentGames
    : studentGames.filter(game => game.category === selectedCategory);

  return (
    <main className="min-h-screen bg-(--color-warm-white)">
      <Navigation />

      <div style={{ paddingTop: '120px', paddingBottom: '80px', display: 'flex', justifyContent: 'center' }}>
        <div className="px-4 sm:px-6 lg:px-8" style={{ maxWidth: '1280px', width: '100%' }}>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: '32px' }}>
              {filteredGames.map((game) => (
                <Card key={game.id} className="border-2 border-gray-200 hover:border-(--color-coral) transition-all duration-300 hover:shadow-xl">
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

                      <div style={{ marginBottom: '16px' }}>
                        <span
                          style={{ padding: '6px 14px' }}
                          className="text-sm font-medium bg-(--color-yellow)/20 text-(--color-soft-black) rounded-full capitalize"
                        >
                          {game.category}
                        </span>
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
              ))}
            </div>

            {filteredGames.length === 0 && (
              <div className="text-center" style={{ padding: '48px 0' }}>
                <p className="body-lg text-gray-500">No games found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
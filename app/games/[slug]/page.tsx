import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { games } from '@/lib/data/games';
import { formatGameStatus, formatPlatformName } from '@/lib/formatters';

export async function generateStaticParams() {
  return games.map((game) => ({
    slug: game.slug,
  }));
}

export default async function GamePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const game = games.find((g) => g.slug === slug);

  if (!game) {
    notFound();
  }

  const statusVariant = {
    'available': 'default',
    'demo': 'secondary',
    'coming-soon': 'outline'
  } as const;

  return (
    <main className="min-h-screen bg-(--color-warm-white)">
      <Navigation />

      <div style={{ paddingTop: '120px', paddingBottom: '80px', display: 'flex', justifyContent: 'center' }}>
        <div className="px-4 sm:px-6 lg:px-8" style={{ maxWidth: '1280px', width: '100%' }}>
          {/* Back Button */}
          <div style={{ marginBottom: '32px' }}>
            <Link href="/#games">
              <Button variant="ghost" style={{ padding: '12px 16px', height: 'auto' }} className="hover:text-(--color-coral)">
                <ArrowLeft className="mr-2" size={20} />
                <span className="text-base">Back to Games</span>
              </Button>
            </Link>
          </div>

          {/* Hero Image */}
          <div style={{ marginBottom: '48px', display: 'flex', justifyContent: 'center' }}>
            <div style={{ maxWidth: '900px', width: '100%' }}>
              <AspectRatio ratio={16 / 9} className="bg-gray-100 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={game.thumbnail}
                  alt={game.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1280px) 100vw, 900px"
                />
              </AspectRatio>
            </div>
          </div>

          {/* Game Info */}
          <div className="grid grid-cols-1 lg:grid-cols-3" style={{ gap: '48px' }}>
            {/* Main Content */}
            <div className="lg:col-span-2" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div>
                <div className="flex items-start justify-between gap-4" style={{ marginBottom: '16px' }}>
                  <h1 className="heading-lg text-(--color-soft-black)">{game.title}</h1>
                  <Badge variant={statusVariant[game.status]} style={{ padding: '6px 14px' }} className="shrink-0 text-sm font-semibold">
                    {formatGameStatus(game.status)}
                  </Badge>
                </div>
                
                {game.subtitle && (
                  <p className="heading-sm font-normal text-gray-600" style={{ marginBottom: '24px' }}>{game.subtitle}</p>
                )}
              </div>

              <Separator />

              <div>
                <h2 className="heading-sm text-(--color-soft-black)" style={{ marginBottom: '16px' }}>About This Game</h2>
                <p className="body-lg text-gray-700 leading-relaxed">{game.description}</p>
              </div>

              {/* Categories */}
              <div>
                <h3 className="heading-sm text-(--color-soft-black)" style={{ marginBottom: '16px' }}>Categories</h3>
                <div className="flex flex-wrap" style={{ gap: '12px' }}>
                  {game.categories.map((category) => (
                    <span
                      key={category}
                      style={{ padding: '8px 16px' }}
                      className="bg-(--color-yellow)/20 text-(--color-soft-black) rounded-full body-md font-medium capitalize"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Platform Links */}
              {game.links.length > 0 && (
                <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-200" style={{ padding: '24px' }}>
                  <h3 className="heading-sm text-(--color-soft-black)" style={{ marginBottom: '16px' }}>Play Now</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {game.links.map((link, index) => (
                      <Button
                        key={index}
                        asChild
                        style={{ padding: '16px 24px', height: 'auto' }}
                        className="w-full bg-(--color-coral) hover:bg-(--color-coral-dark) text-white font-semibold"
                        size="lg"
                      >
                        <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-full">
                          <span className="text-base">{link.label}</span>
                          <ExternalLink size={18} />
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {/* Platforms */}
              {game.platforms.length > 0 && (
                <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-200" style={{ padding: '24px' }}>
                  <h3 className="heading-sm text-(--color-soft-black)" style={{ marginBottom: '16px' }}>Available On</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {game.platforms.map((platform) => (
                      <div key={platform} className="flex items-center gap-2 body-md text-gray-700">
                        <div className="w-2 h-2 rounded-full bg-(--color-coral)"></div>
                        {formatPlatformName(platform)}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Share */}
              <div className="bg-gradient-coral-yellow rounded-2xl" style={{ padding: '24px' }}>
                <h3 className="heading-sm" style={{ marginBottom: '8px', color: 'var(--color-soft-black)' }}>Love this game?</h3>
                <p className="body-md" style={{ marginBottom: '16px', color: 'var(--color-soft-black)' }}>Share it with your friends!</p>
                <Button
                  variant="secondary"
                  style={{ padding: '14px 24px', height: 'auto' }}
                  className="w-full bg-white hover:bg-gray-100 font-semibold"
                >
                  <span className="text-base" style={{ color: 'var(--color-coral)' }}>Share Game</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Screenshots */}
          {game.images.length > 1 && (
            <div style={{ marginTop: '80px' }}>
              <h3 className="heading-lg text-(--color-magenta)" style={{ marginBottom: '32px' }}>Screenshots</h3>
              <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '24px' }}>
                {game.images.slice(1).map((image, index) => (
                  <AspectRatio key={index} ratio={16 / 9} className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
                    <Image
                      src={image}
                      alt={`${game.title} screenshot ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </AspectRatio>
                ))}
              </div>
            </div>
          )}

          {/* Related Games */}
          <div style={{ marginTop: '80px' }}>
            <h2 className="heading-lg text-(--color-magenta)" style={{ marginBottom: '32px' }}>More Games</h2>
            <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '24px' }}>
              {games
                .filter((g) => g.id !== game.id)
                .slice(0, 3)
                .map((relatedGame) => (
                  <Link key={relatedGame.id} href={`/games/${relatedGame.slug}`}>
                    <div className="group cursor-pointer">
                      <AspectRatio ratio={16 / 9} className="bg-gray-100 rounded-lg overflow-hidden" style={{ marginBottom: '12px' }}>
                        <Image
                          src={relatedGame.thumbnail}
                          alt={relatedGame.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </AspectRatio>
                      <h4 className="body-lg font-semibold text-(--color-soft-black) group-hover:text-(--color-coral) transition-colors line-clamp-2">
                        {relatedGame.title}
                      </h4>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
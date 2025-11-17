'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { ExternalLink } from 'lucide-react';
import { Game } from '@/lib/types';
import { formatGameStatus } from '@/lib/formatters';

interface GameCardProps {
  game: Game;
}

export function GameCard({ game }: GameCardProps) {
  const statusVariant = {
    'available': 'default',
    'demo': 'secondary',
    'coming-soon': 'outline'
  } as const;

  return (
    <Card className="group overflow-hidden border-2 border-gray-200 hover:border-(--color-coral) transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer w-full max-w-md">
      <Link href={`/games/${game.slug}`}>
        <CardContent className="p-0">
          {/* Image */}
          <AspectRatio ratio={16 / 9} className="bg-gray-100 overflow-hidden">
            <Image
              src={game.thumbnail}
              alt={game.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </AspectRatio>

          {/* Content */}
          <div style={{ padding: '24px' }}>
            <div className="flex items-start justify-between gap-4" style={{ marginBottom: '12px' }}>
              <h3 className="heading-sm text-(--color-soft-black) group-hover:text-(--color-coral) transition-colors line-clamp-2 flex-1">
                {game.title}
              </h3>
              <Badge variant={statusVariant[game.status]} style={{ padding: '6px 14px' }} className="shrink-0 text-sm font-semibold whitespace-nowrap min-w-fit">
                {formatGameStatus(game.status)}
              </Badge>
            </div>

            {game.subtitle && (
              <p className="body-md text-gray-600 line-clamp-2 leading-relaxed" style={{ marginBottom: '16px' }}>{game.subtitle}</p>
            )}

            {/* Links */}
            {game.links.length > 0 && (
              <div style={{ marginBottom: '16px' }}>
                {game.links.map((link, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-(--color-coral) body-md font-semibold group-hover:underline"
                  >
                    <span>{link.label}</span>
                    <ExternalLink size={18} />
                  </div>
                ))}
              </div>
            )}

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {game.categories.slice(0, 3).map((category) => (
                <span
                  key={category}
                  style={{ padding: '6px 14px' }}
                  className="text-sm font-medium bg-(--color-yellow)/20 text-(--color-soft-black) rounded-full whitespace-nowrap"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
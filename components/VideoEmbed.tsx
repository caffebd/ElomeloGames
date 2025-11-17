'use client';

import { AspectRatio } from '@/components/ui/aspect-ratio';

interface VideoEmbedProps {
  videoId: string;
  title?: string;
}

export function VideoEmbed({ videoId, title = 'Video' }: VideoEmbedProps) {
  return (
    <AspectRatio ratio={16 / 9} className="bg-black rounded-2xl overflow-hidden shadow-2xl">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
    </AspectRatio>
  );
}
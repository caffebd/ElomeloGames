'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface ImageGalleryProps {
  images: string[];
  gameTitle: string;
  isPortrait?: boolean;
}

export function ImageGallery({ images, gameTitle, isPortrait = false }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openGallery = (index: number) => {
    setSelectedIndex(index);
  };

  const closeGallery = () => {
    setSelectedIndex(null);
  };

  const goToPrevious = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null && selectedIndex < images.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeGallery();
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
  };

  return (
    <>
      {/* Thumbnail Grid */}
      <div className={`grid ${isPortrait ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-1 md:grid-cols-3'}`} style={{ gap: '24px' }}>
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => openGallery(index)}
            className="cursor-pointer hover:opacity-80 transition-opacity"
          >
            {isPortrait ? (
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
                <Image
                  src={image}
                  alt={`${gameTitle} screenshot ${index + 1}`}
                  width={400}
                  height={600}
                  className="w-full h-auto object-contain"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ) : (
              <AspectRatio ratio={16 / 9} className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
                <Image
                  src={image}
                  alt={`${gameTitle} screenshot ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </AspectRatio>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center overflow-hidden"
          onClick={closeGallery}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          style={{ padding: '0' }}
        >
          {/* Close Button */}
          <button
            onClick={closeGallery}
            className="absolute top-2 right-2 md:top-4 md:right-4 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Close gallery"
            style={{ padding: '8px' }}
          >
            <X size={32} className="md:w-10 md:h-10" />
          </button>

          {/* Previous Button */}
          {selectedIndex > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-1 md:left-4 text-white hover:text-gray-300 transition-colors z-10"
              aria-label="Previous image"
              style={{ padding: '4px' }}
            >
              <ChevronLeft size={40} className="md:w-15 md:h-15" />
            </button>
          )}

          {/* Next Button */}
          {selectedIndex < images.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-1 md:right-4 text-white hover:text-gray-300 transition-colors z-10"
              aria-label="Next image"
              style={{ padding: '4px' }}
            >
              <ChevronRight size={40} className="md:w-15 md:h-15" />
            </button>
          )}

          {/* Image */}
          <div
            className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center px-12 md:px-20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full">
              <Image
                src={images[selectedIndex]}
                alt={`${gameTitle} screenshot ${selectedIndex + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
          </div>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-base md:text-lg">
            {selectedIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}

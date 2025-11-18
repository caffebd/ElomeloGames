'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/#games', label: 'Our Games' },
    { href: '/#about', label: 'About Us' },
    { href: '/training', label: 'Training' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ paddingLeft: '32px', paddingRight: '32px' }}>
        <div className="flex justify-between items-center h-20 gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center" style={{ gap: '12px' }}>
            <div className="relative" style={{ width: '48px', height: '48px' }}>
              <Image
                src="/images/logos/logo_trans.png"
                alt="Elomelo Games Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="heading-sm hidden sm:block text-(--color-soft-black)">Elomelo Games</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center" style={{ gap: '32px' }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{ padding: '10px 16px', fontSize: '18px' }}
                className="body-md text-(--color-soft-black) hover:text-(--color-coral) transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://bsky.app/profile/elomelo.games"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              style={{ width: '32px', height: '32px', position: 'relative', display: 'block' }}
            >
              <Image
                src="/images/logos/Bluesky_Logo.png"
                alt="Follow us on Bluesky"
                fill
                className="object-contain"
              />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200" style={{ paddingTop: '8px', paddingBottom: '8px' }}>
            <div className="flex flex-col">
              {navLinks.map((link, index) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    className="block text-(--color-soft-black) hover:text-(--color-coral) hover:bg-gray-50 transition-all duration-200"
                    style={{ 
                      padding: '20px 16px',
                      fontSize: '20px',
                      fontWeight: '500'
                    }}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {index < navLinks.length - 1 && (
                    <div className="border-b border-gray-200" style={{ marginLeft: '16px', marginRight: '16px' }} />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
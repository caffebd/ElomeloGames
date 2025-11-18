import { Separator } from '@/components/ui/separator';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-(--color-soft-black) text-white py-12 flex justify-center">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="heading-sm mb-4">Elomelo Games</h3>
            <p className="body-md text-gray-300">
              Crafting Stories, Building Worlds from Bangladesh
            </p>
          </div>

          {/* Locations */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-semibold mb-4 text-lg">Locations</h4>
            <div className="flex items-center gap-4">
              {/* Bangladesh Location */}
              <div className="flex items-start gap-2">
                <div style={{ width: '24px', height: '16px', position: 'relative', flexShrink: 0, marginTop: '4px' }}>
                  <Image
                    src="/images/logos/Flag_of_Bangladesh.png"
                    alt="Bangladesh"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="body-md text-gray-300 text-left">
                  Khadimnagar, Sylhet<br />
                  Bangladesh
                </p>
              </div>

              {/* Divider */}
              <div style={{ width: '1px', height: '40px', backgroundColor: '#4b5563' }}></div>

              {/* UK Location */}
              <div className="flex items-start gap-2">
                <div style={{ width: '24px', height: '16px', position: 'relative', flexShrink: 0, marginTop: '4px' }}>
                  <Image
                    src="/images/logos/Flag_of_the_United_Kingdom.png"
                    alt="United Kingdom"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="body-md text-gray-300 text-left">
                  Bedfordshire,<br />
                  UK
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-semibold mb-4 text-lg">Contact</h4>
            <a
              href="mailto:luke@elomelo.games"
              className="body-md text-(--color-coral) hover:text-(--color-yellow) transition-colors"
            >
              luke@elomelo.games
            </a>
          </div>
        </div>

        <div style={{ paddingTop: '16px' }}>
          <Separator className="my-8 bg-gray-700" />
        </div>

        {/* Copyright */}
        <div className="flex justify-center items-center">
          <p className="body-md text-gray-400 text-center">
            © {new Date().getFullYear()} Elomelo Games. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
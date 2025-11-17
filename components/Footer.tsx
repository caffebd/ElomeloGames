import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

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

          {/* Location */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-semibold mb-4 text-lg">Location</h4>
            <p className="body-md text-gray-300">
              Khadimnagar, Sylhet<br />
              Bangladesh
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-semibold mb-4 text-lg">Contact</h4>
            <a
              href="mailto:admin@elomelostudio.com"
              className="body-md text-(--color-coral) hover:text-(--color-yellow) transition-colors"
            >
              admin@elomelostudio.com
            </a>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        {/* Social & Copyright */}
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-4">
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <span className="body-md text-gray-400">Follow Elomelo Games</span>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-gray-400 hover:text-(--color-coral) transition-colors"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>

          <p className="body-md text-gray-400 text-center">
            © {new Date().getFullYear()} Elomelo Games. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
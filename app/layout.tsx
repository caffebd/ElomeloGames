import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elomelo Games - Crafting Stories, Building Worlds from Bangladesh",
  description: "We make narrative games, puzzle games, adventure games, indie horror and Bangla language apps from Sylhet, Bangladesh.",
  icons: {
    icon: [
      { url: '/images/logos/favicon_io/favicon.ico' },
      { url: '/images/logos/favicon_io/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/logos/favicon_io/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/images/logos/favicon_io/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/images/logos/favicon_io/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/images/logos/favicon_io/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
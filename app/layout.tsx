import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elomelo Games - Crafting Stories, Building Worlds from Bangladesh",
  description: "We make narrative games, puzzle games, adventure games, indie horror and Bangla language apps from Sylhet, Bangladesh.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Bebas+Neue&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
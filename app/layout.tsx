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
      <body>
        {children}
      </body>
    </html>
  );
}
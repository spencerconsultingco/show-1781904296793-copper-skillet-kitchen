import type { Metadata } from 'next';
import { Playfair_Display, Source_Sans_3 } from 'next/font/google';
import './globals.css';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400', '600', '700', '800'],
  display: 'swap',
});

const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Copper Skillet Kitchen | Sonoran Comfort Food in Tucson, AZ',
  description:
    'Copper Skillet Kitchen serves scratch-made Sonoran comfort food in Tucson using locally sourced ingredients. Dine-in, brunch, catering, and private events.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${sourceSans3.variable}`}>
      <body className="bg-brand-background text-brand-text font-body antialiased">
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'folio. — Independent Booksellers & Curious Literature',
  description:
    'A curated collection of contemporary fiction, poetry, art, and timeless classics. Handpicked for curious minds and patient readers in Cobble Hill.',
  keywords: [
    'bookstore',
    'independent bookstore',
    'curated books',
    'poetry',
    'fiction',
    'literary community',
    'folio booksellers',
  ],
  authors: [{ name: 'Folio Booksellers' }],
  openGraph: {
    title: 'folio. — Independent Booksellers',
    description: 'For the love of a good book. Carefully curated literature in Cobble Hill.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300..700;1,6..72,300..700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ValueProps from '@/components/ValueProps';
import CatalogSection from '@/components/CatalogSection';
import BookOfTheMonth from '@/components/BookOfTheMonth';
import CuratedShelves from '@/components/CuratedShelves';
import CommunityEvents from '@/components/CommunityEvents';
import JournalSection from '@/components/JournalSection';
import StoreVisit from '@/components/StoreVisit';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import CartDrawer, { CartItem } from '@/components/CartDrawer';
import BookModal from '@/components/BookModal';
import SearchModal from '@/components/SearchModal';
import { Book, StoreEvent, JournalArticle, CuratedShelf } from '@/data/bookstore';
import { SiteSettings } from '@/sanity/lib/queries';
import { CheckCircle2 } from 'lucide-react';

interface HomeClientProps {
  initialBooks: Book[];
  initialEvents: StoreEvent[];
  initialArticles: JournalArticle[];
  initialShelves?: CuratedShelf[];
  settings?: SiteSettings;
}

export default function HomeClient({
  initialBooks,
  initialEvents,
  initialArticles,
  initialShelves,
  settings,
}: HomeClientProps) {
  const books = initialBooks;
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [quickViewBook, setQuickViewBook] = useState<Book | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleAddToCart = (book: Book) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.book.id === book.id);
      if (existing) {
        return prev.map((item) =>
          item.book.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { book, quantity: 1 }];
    });

    setToastMessage(`Added "${book.title}" to your bag`);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleUpdateQuantity = (bookId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.book.id === bookId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (bookId: string) => {
    setCartItems((prev) => prev.filter((item) => item.book.id !== bookId));
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Toast Notification */}
      {toastMessage && (
        <div
          className="toast-enter"
          style={{
            position: 'fixed',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 200,
            backgroundColor: '#1e1d1a',
            color: '#ffffff',
            padding: '0.75rem 1.4rem',
            borderRadius: '99px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.25)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            fontSize: '0.9rem',
            fontWeight: 500,
          }}
        >
          <CheckCircle2 size={18} color="#4ade80" />
          <span>{toastMessage}</span>
          <button
            onClick={() => {
              setToastMessage(null);
              setCartOpen(true);
            }}
            style={{
              background: 'none',
              border: 'none',
              color: '#f9a8d4',
              cursor: 'pointer',
              textDecoration: 'underline',
              fontSize: '0.85rem',
              fontWeight: 600,
              marginLeft: '0.4rem',
            }}
          >
            View Bag
          </button>
        </div>
      )}

      {/* Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setCartOpen(true)}
        onOpenSearch={() => setSearchOpen(true)}
      />

      {/* Hero Section */}
      <HeroSection settings={settings} />

      {/* Value Propositions */}
      <ValueProps settings={settings} />

      {/* Staff Picks Catalog with Filters */}
      <CatalogSection
        books={books}
        settings={settings}
        onAddToCart={handleAddToCart}
        onQuickView={(book) => setQuickViewBook(book)}
      />

      {/* Book of the Month Spotlight */}
      <BookOfTheMonth settings={settings} onAddToCart={handleAddToCart} />

      {/* Curated Shelves */}
      <CuratedShelves shelves={initialShelves} settings={settings} />

      {/* Community & Events */}
      <CommunityEvents events={initialEvents} settings={settings} />

      {/* From our Journal */}
      <JournalSection articles={initialArticles} settings={settings} />

      {/* Northfield Flagship Store Visit */}
      <StoreVisit settings={settings} />

      {/* Newsletter Dispatch */}
      <Newsletter settings={settings} />

      {/* Footer */}
      <Footer settings={settings} />

      {/* Shopping Bag Drawer */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />

      {/* Quick View Book Modal */}
      <BookModal
        book={quickViewBook}
        onClose={() => setQuickViewBook(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Search Modal */}
      <SearchModal
        books={books}
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onAddToCart={handleAddToCart}
        onQuickView={(book) => setQuickViewBook(book)}
      />
    </main>
  );
}

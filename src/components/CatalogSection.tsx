'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Plus, Eye, Check, BookOpen } from 'lucide-react';
import { Book, ALL_CATALOG_BOOKS } from '@/data/bookstore';
import { SiteSettings } from '@/sanity/lib/queries';

interface CatalogSectionProps {
  books?: Book[];
  settings?: SiteSettings;
  onAddToCart: (book: Book) => void;
  onQuickView: (book: Book) => void;
}

const CATEGORIES = [
  'All Titles',
  'Fiction',
  'Non-Fiction',
  'Essays & Poetry',
  'Art & Design',
  "Children's",
];

export default function CatalogSection({
  books = ALL_CATALOG_BOOKS,
  settings,
  onAddToCart,
  onQuickView,
}: CatalogSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState('All Titles');
  const [sortBy, setSortBy] = useState('Staff Favorites');
  const [addedBookId, setAddedBookId] = useState<string | null>(null);

  const filteredBooks = books.filter((book) => {
    if (selectedCategory === 'All Titles') return true;
    if (selectedCategory === 'Fiction') return book.category === 'Fiction';
    if (selectedCategory === 'Non-Fiction') return book.category === 'Non-Fiction';
    if (selectedCategory === 'Essays & Poetry') return book.category === 'Poetry' || book.category === 'Essays & Poetry';
    return true;
  });

  const handleAdd = (book: Book) => {
    onAddToCart(book);
    setAddedBookId(book.id);
    setTimeout(() => {
      setAddedBookId(null);
    }, 1500);
  };

  return (
    <section id="catalog" style={{ padding: '3.5rem 0 5rem 0' }}>
      <div className="container-custom">
        {/* Category Filter Pills & Controls */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.25rem',
            paddingBottom: '2.5rem',
            borderBottom: '1px solid var(--border-light)',
            marginBottom: '3rem',
          }}
        >
          {/* Pills */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              overflowX: 'auto',
              paddingBottom: '4px',
              maxWidth: '100%',
            }}
          >
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    backgroundColor: isActive ? 'var(--accent-burgundy)' : 'transparent',
                    color: isActive ? '#ffffff' : 'var(--text-secondary)',
                    border: isActive ? '1px solid var(--accent-burgundy)' : '1px solid var(--border-medium)',
                    padding: '0.5rem 1.15rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.86rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'all var(--transition-fast)',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.04)';
                      e.currentTarget.style.color = 'var(--text-primary)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = 'var(--text-secondary)';
                    }
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Meta & Sort selector */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.25rem',
              fontSize: '0.85rem',
              color: 'var(--text-muted)',
            }}
          >
            <span>
              Showing {filteredBooks.slice(0, 4).length} of 84 titles
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <span>Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--text-primary)',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  outline: 'none',
                  fontFamily: 'inherit',
                }}
              >
                <option value="Staff Favorites">Staff Favorites</option>
                <option value="Newest Arrivals">Newest Arrivals</option>
                <option value="Price: Low to High">Price: Low to High</option>
                <option value="Price: High to Low">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Section Title Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: '2.5rem',
          }}
        >
          <div>
            <div className="eyebrow" style={{ marginBottom: '0.6rem' }}>
              {settings?.catalogEyebrow || 'STAFF PICKS • FALL 2024'}
            </div>
            <h2
              className="font-serif"
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
              }}
            >
              {settings?.catalogTitle || 'Worth making room for.'}
            </h2>
          </div>

          <a href="#catalog" className="link-arrow">
            {settings?.catalogLinkText || 'Explore all staff picks'} <ArrowRight size={15} />
          </a>
        </div>

        {/* 4 Books Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2rem',
          }}
          className="books-grid"
        >
          {filteredBooks.slice(0, 4).map((book) => {
            const isJustAdded = addedBookId === book.id;
            return (
              <div
                key={book.id}
                className="book-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                }}
              >
                {/* Book Cover Container with Spine Effect */}
                <div
                  className="book-spine-effect"
                  style={{
                    aspectRatio: '3 / 4.3',
                    position: 'relative',
                    marginBottom: '1.2rem',
                    backgroundColor: '#eae4d9',
                    cursor: 'pointer',
                  }}
                  onClick={() => onQuickView(book)}
                >
                  {book.coverImage ? (
                    <Image
                      src={book.coverImage}
                      alt={`${book.title} by ${book.author}`}
                      fill
                      sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 25vw"
                      style={{
                        objectFit: 'cover',
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '1.25rem',
                        textAlign: 'center',
                        backgroundColor: '#f4efe6',
                        border: '1px dashed #d5cdbf',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      <BookOpen size={28} style={{ opacity: 0.45, marginBottom: '0.65rem' }} />
                      <div
                        className="font-serif"
                        style={{
                          fontSize: '0.88rem',
                          fontWeight: 600,
                          color: 'var(--text-primary)',
                          lineHeight: 1.25,
                          marginBottom: '0.35rem',
                        }}
                      >
                        {book.title}
                      </div>
                      <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                        {book.author}
                      </div>
                      <span
                        style={{
                          fontSize: '0.62rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          marginTop: '0.85rem',
                          opacity: 0.65,
                          fontWeight: 600,
                        }}
                      >
                        No Cover Uploaded
                      </span>
                    </div>
                  )}

                  {/* Badge */}
                  {book.badge && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '10px',
                        left: '10px',
                        backgroundColor: 'rgba(251, 249, 244, 0.95)',
                        backdropFilter: 'blur(4px)',
                        padding: '3px 8px',
                        fontSize: '0.68rem',
                        fontWeight: 700,
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        borderRadius: '2px',
                        color: 'var(--accent-burgundy)',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                        zIndex: 3,
                      }}
                    >
                      {book.badge}
                    </div>
                  )}

                  {/* Quick Overlay Action on Hover */}
                  <div
                    className="book-hover-actions"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundColor: 'rgba(30, 29, 26, 0.38)',
                      backdropFilter: 'blur(2px)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.65rem',
                      opacity: 0,
                      transition: 'opacity 0.2s ease',
                      zIndex: 4,
                      padding: '1rem',
                    }}
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAdd(book);
                      }}
                      style={{
                        backgroundColor: isJustAdded ? '#2d6a4f' : 'var(--accent-burgundy)',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: 'var(--radius-sm)',
                        padding: '0.6rem 1rem',
                        fontSize: '0.84rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        width: '88%',
                        justifyContent: 'center',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                        transition: 'all var(--transition-fast)',
                      }}
                    >
                      {isJustAdded ? (
                        <>
                          <Check size={15} /> Added to Bag
                        </>
                      ) : (
                        <>
                          <Plus size={15} /> Add to Bag
                        </>
                      )}
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onQuickView(book);
                      }}
                      style={{
                        backgroundColor: '#ffffff',
                        color: 'var(--text-primary)',
                        border: 'none',
                        borderRadius: 'var(--radius-sm)',
                        padding: '0.55rem 1rem',
                        fontSize: '0.82rem',
                        fontWeight: 500,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        width: '88%',
                        justifyContent: 'center',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                      }}
                    >
                      <Eye size={14} /> Quick View
                    </button>
                  </div>
                </div>

                {/* Meta details */}
                <div
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    marginBottom: '0.35rem',
                  }}
                >
                  {book.category} • {book.binding}
                </div>

                {/* Title */}
                <h3
                  className="font-serif"
                  style={{
                    fontSize: '1.25rem',
                    lineHeight: 1.25,
                    marginBottom: '0.25rem',
                    color: 'var(--text-primary)',
                    cursor: 'pointer',
                  }}
                  onClick={() => onQuickView(book)}
                >
                  {book.title}
                </h3>

                {/* Author */}
                <div
                  style={{
                    fontSize: '0.88rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '0.65rem',
                  }}
                >
                  {book.author}
                </div>

                {/* Price and Add button */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 'auto',
                    paddingTop: '0.4rem',
                  }}
                >
                  <span
                    style={{
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                    }}
                  >
                    ${book.price.toFixed(2)}
                  </span>

                  <button
                    onClick={() => handleAdd(book)}
                    aria-label={`Add ${book.title} to bag`}
                    style={{
                      background: 'none',
                      border: '1px solid var(--border-medium)',
                      color: isJustAdded ? '#2d6a4f' : 'var(--accent-burgundy)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '4px 10px',
                      fontSize: '0.76rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      transition: 'all var(--transition-fast)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--accent-burgundy)';
                      e.currentTarget.style.color = '#ffffff';
                      e.currentTarget.style.borderColor = 'var(--accent-burgundy)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = isJustAdded ? '#2d6a4f' : 'var(--accent-burgundy)';
                      e.currentTarget.style.borderColor = 'var(--border-medium)';
                    }}
                  >
                    {isJustAdded ? <Check size={12} /> : <Plus size={12} />}
                    {isJustAdded ? 'Added' : 'Add'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        :global(.book-card:hover .book-hover-actions) {
          opacity: 1 !important;
        }
        @media (max-width: 1024px) {
          :global(.books-grid) {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 2rem !important;
          }
        }
        @media (max-width: 580px) {
          :global(.books-grid) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

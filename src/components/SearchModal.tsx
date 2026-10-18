'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Search, X, Plus, BookOpen } from 'lucide-react';
import { ALL_CATALOG_BOOKS, Book } from '@/data/bookstore';

interface SearchModalProps {
  books?: Book[];
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (book: Book) => void;
  onQuickView: (book: Book) => void;
}

export default function SearchModal({
  books = ALL_CATALOG_BOOKS,
  isOpen,
  onClose,
  onAddToCart,
  onQuickView,
}: SearchModalProps) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const results = books.filter(
    (b) =>
      b.title.toLowerCase().includes(query.toLowerCase()) ||
      b.author.toLowerCase().includes(query.toLowerCase()) ||
      b.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 120,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '5rem 1.5rem 2rem 1.5rem',
      }}
    >
      <div
        onClick={onClose}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(30, 29, 26, 0.6)',
          backdropFilter: 'blur(5px)',
        }}
      />

      <div
        style={{
          position: 'relative',
          backgroundColor: 'var(--bg-main)',
          borderRadius: '8px',
          maxWidth: '620px',
          width: '100%',
          boxShadow: 'var(--shadow-lg)',
          zIndex: 2,
          overflow: 'hidden',
        }}
      >
        {/* Search Input Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.85rem',
            padding: '1.25rem 1.5rem',
            borderBottom: '1px solid var(--border-light)',
          }}
        >
          <Search size={20} color="var(--accent-burgundy)" />
          <input
            type="text"
            placeholder="Search by title, author, or genre..."
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              background: 'transparent',
              fontSize: '1.05rem',
              color: 'var(--text-primary)',
              fontFamily: 'inherit',
            }}
          />
          <button
            onClick={onClose}
            aria-label="Close search"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-muted)',
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Results */}
        <div
          style={{
            maxHeight: '400px',
            overflowY: 'auto',
            padding: '1rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.85rem',
          }}
        >
          {results.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '2rem 0', color: 'var(--text-muted)' }}>
              No books found matching &quot;{query}&quot;. Try searching &quot;Solnit&quot;, &quot;Fiction&quot;, or &quot;Oliver&quot;.
            </div>
          ) : (
            results.map((book) => (
              <div
                key={book.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.6rem 0',
                  borderBottom: '1px solid var(--border-light)',
                }}
              >
                <div
                  style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', cursor: 'pointer' }}
                  onClick={() => {
                    onClose();
                    onQuickView(book);
                  }}
                >
                  <div
                    style={{
                      position: 'relative',
                      width: '42px',
                      height: '58px',
                      borderRadius: '2px',
                      overflow: 'hidden',
                      flexShrink: 0,
                    }}
                  >
                    {book.coverImage ? (
                      <Image src={book.coverImage} alt={book.title} fill style={{ objectFit: 'cover' }} />
                    ) : (
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: '#f4efe6',
                          color: 'var(--text-muted)',
                        }}
                      >
                        <BookOpen size={16} />
                      </div>
                    )}
                  </div>
                  <div>
                    <h4 className="font-serif" style={{ fontSize: '1rem', color: 'var(--text-primary)' }}>
                      {book.title}
                    </h4>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                      {book.author} • {book.category}
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>${book.price.toFixed(2)}</span>
                  <button
                    onClick={() => {
                      onAddToCart(book);
                      onClose();
                    }}
                    className="btn-primary"
                    style={{ padding: '0.4rem 0.8rem', fontSize: '0.78rem' }}
                  >
                    <Plus size={13} /> Add
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

'use client';

import React from 'react';
import Image from 'next/image';
import { X, Star, Plus, Check, BookOpen } from 'lucide-react';
import { Book } from '@/data/bookstore';

interface BookModalProps {
  book: Book | null;
  onClose: () => void;
  onAddToCart: (book: Book) => void;
}

export default function BookModal({ book, onClose, onAddToCart }: BookModalProps) {
  if (!book) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 110,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(30, 29, 26, 0.65)',
          backdropFilter: 'blur(6px)',
        }}
      />

      {/* Modal Dialog */}
      <div
        style={{
          position: 'relative',
          backgroundColor: 'var(--bg-main)',
          borderRadius: '8px',
          maxWidth: '720px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: 'var(--shadow-lg)',
          zIndex: 2,
          padding: '2.5rem',
          animation: 'modalFadeUp 0.25s ease-out',
        }}
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--text-muted)',
            padding: '4px',
          }}
        >
          <X size={22} />
        </button>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '220px 1fr',
            gap: '2.5rem',
            alignItems: 'start',
          }}
          className="modal-grid"
        >
          {/* Left Book Cover */}
          <div
            className="book-spine-effect"
            style={{
              width: '100%',
              aspectRatio: '3 / 4.3',
              position: 'relative',
              borderRadius: '4px',
              backgroundColor: '#eee6da',
              boxShadow: 'var(--shadow-book)',
            }}
          >
            {book.coverImage ? (
              <Image
                src={book.coverImage}
                alt={book.title}
                fill
                sizes="220px"
                style={{ objectFit: 'cover' }}
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
                  padding: '1.5rem',
                  textAlign: 'center',
                  backgroundColor: '#f4efe6',
                  color: 'var(--text-secondary)',
                }}
              >
                <BookOpen size={36} style={{ opacity: 0.45, marginBottom: '0.8rem' }} />
                <div
                  className="font-serif"
                  style={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    lineHeight: 1.25,
                    marginBottom: '0.4rem',
                  }}
                >
                  {book.title}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  {book.author}
                </div>
                <span
                  style={{
                    fontSize: '0.68rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginTop: '1rem',
                    opacity: 0.65,
                    fontWeight: 600,
                  }}
                >
                  No Cover Uploaded
                </span>
              </div>
            )}
          </div>

          {/* Right Details */}
          <div>
            <div
              style={{
                fontSize: '0.74rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--accent-burgundy)',
                marginBottom: '0.4rem',
              }}
            >
              {book.category} • {book.binding}
            </div>

            <h2
              className="font-serif"
              style={{
                fontSize: '2rem',
                lineHeight: 1.18,
                color: 'var(--text-primary)',
                marginBottom: '0.35rem',
              }}
            >
              {book.title}
            </h2>

            <div
              style={{
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                marginBottom: '1rem',
              }}
            >
              By {book.author}
            </div>

            {/* Rating */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.2rem' }}>
              <div style={{ display: 'flex', color: '#d97706', gap: '2px' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="#d97706" strokeWidth={0} />
                ))}
              </div>
              <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                {book.rating} / 5.0
              </span>
            </div>

            {/* Price */}
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1.2rem' }}>
              ${book.price.toFixed(2)}
            </div>

            <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.4rem' }}>
              {book.description}
            </p>

            {book.quote && (
              <div
                style={{
                  borderLeft: '2px solid var(--accent-burgundy)',
                  paddingLeft: '1rem',
                  fontStyle: 'italic',
                  fontSize: '0.92rem',
                  color: 'var(--text-primary)',
                  marginBottom: '1.5rem',
                }}
              >
                &ldquo;{book.quote}&rdquo;
                {book.staffPickBy && (
                  <div style={{ fontStyle: 'normal', fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                    — Recommended by {book.staffPickBy}
                  </div>
                )}
              </div>
            )}

            {/* Meta details list */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '0.8rem',
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
                marginBottom: '1.8rem',
                paddingTop: '1rem',
                borderTop: '1px solid var(--border-light)',
              }}
            >
              <div>
                <strong>Pages:</strong> {book.pages}
              </div>
              <div>
                <strong>Published:</strong> {book.pubDate}
              </div>
              <div>
                <strong>Format:</strong> {book.binding}
              </div>
              <div>
                <strong>Publisher:</strong> Folio Editions
              </div>
            </div>

            <button
              onClick={() => {
                onAddToCart(book);
                onClose();
              }}
              className="btn-primary"
              style={{ width: '100%', padding: '0.9rem' }}
            >
              <Plus size={16} /> Add to Bag • ${book.price.toFixed(2)}
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes modalFadeUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (max-width: 640px) {
          :global(.modal-grid) {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </div>
  );
}

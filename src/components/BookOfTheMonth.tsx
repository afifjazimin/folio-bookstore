'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { ALL_CATALOG_BOOKS, Book } from '@/data/bookstore';
import { SiteSettings } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/image';

interface BookOfTheMonthProps {
  settings?: SiteSettings;
  onAddToCart: (book: Book) => void;
}

export default function BookOfTheMonth({ settings, onAddToCart }: BookOfTheMonthProps) {
  const eyebrow = settings?.botmEyebrow || 'BOOK OF THE MONTH • OCTOBER';
  const line1 = settings?.botmTitleLine1 || 'A little lost.';
  const line2 = settings?.botmTitleLine2 || 'A little more found.';
  const description =
    settings?.botmDescription ||
    'An exploration of wandering, being displaced, and the unexpected gifts of not knowing where you are going. Solnit draws on memoir, history, and natural science to map the contours of solitude and revelation.';
  const quote =
    settings?.botmQuote ||
    '“Changed the way I walk through both cities and wilderness. Essential reading.”';
  const quoteAuthor = settings?.botmQuoteAuthor || '— Maya Lin, Head Buyer';
  const priceText = settings?.botmPriceText || '$17.95 • Paperback';
  const ctaText = settings?.botmCtaText || "Order This Month's Selection";
  const coverImage = settings?.botmCoverImage
    ? urlForImage(settings.botmCoverImage).url()
    : '/images/getting_lost_cover.jpg';

  const featuredBook = ALL_CATALOG_BOOKS.find((b) => b.id === 'field-guide') || {
    id: 'field-guide',
    title: 'A Field Guide to Getting Lost',
    author: 'Rebecca Solnit',
    price: 17.95,
    category: 'Non-Fiction',
    binding: 'PAPERBACK' as const,
    coverImage: '/images/getting_lost_cover.jpg',
    rating: 4.9,
    pages: 224,
    pubDate: 'June 2006',
    description,
  };

  return (
    <section
      style={{
        backgroundColor: '#dfe7de',
        padding: '5rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container-custom">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.6fr',
            gap: '4.5rem',
            alignItems: 'center',
          }}
          className="botm-grid"
        >
          {/* Left Book Cover Column */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <div
              className="book-spine-effect"
              style={{
                width: '100%',
                maxWidth: '340px',
                aspectRatio: '3 / 4.5',
                position: 'relative',
                borderRadius: '4px',
                boxShadow: '0 20px 40px rgba(45, 60, 48, 0.28)',
              }}
            >
              <Image
                src={coverImage}
                alt={line1}
                fill
                sizes="(max-width: 768px) 100vw, 340px"
                style={{
                  objectFit: 'cover',
                }}
              />
            </div>
          </div>

          {/* Right Editorial Info */}
          <div>
            <div
              className="eyebrow"
              style={{
                color: 'var(--accent-burgundy)',
                marginBottom: '1rem',
                display: 'inline-block',
              }}
            >
              {eyebrow}
            </div>

            <h2
              className="font-serif"
              style={{
                fontSize: 'clamp(2.4rem, 4.2vw, 3.4rem)',
                lineHeight: 1.15,
                color: '#1a231b',
                marginBottom: '1.5rem',
                letterSpacing: '-0.02em',
              }}
            >
              {line1}
              <br />
              <span className="italic-serif" style={{ fontWeight: 400 }}>
                {line2}
              </span>
            </h2>

            <p
              style={{
                fontSize: '1.08rem',
                color: '#344537',
                lineHeight: 1.68,
                marginBottom: '2rem',
                maxWidth: '560px',
              }}
            >
              {description}
            </p>

            {/* Staff Quote Box */}
            <div
              style={{
                borderLeft: '2px solid rgba(121, 39, 52, 0.45)',
                paddingLeft: '1.25rem',
                marginBottom: '2.5rem',
              }}
            >
              <p
                className="font-serif italic-serif"
                style={{
                  fontSize: '1.15rem',
                  color: '#1e2d20',
                  lineHeight: 1.45,
                  marginBottom: '0.4rem',
                }}
              >
                {quote}
              </p>
              <span
                style={{
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  color: '#4e6252',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                {quoteAuthor}
              </span>
            </div>

            {/* Price & CTA */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                flexWrap: 'wrap',
              }}
            >
              <div
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: '#1a231b',
                }}
              >
                {priceText}
              </div>

              <button
                onClick={() => onAddToCart(featuredBook)}
                className="btn-primary"
                style={{
                  padding: '0.85rem 1.8rem',
                  fontSize: '0.92rem',
                }}
              >
                {ctaText} <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 860px) {
          :global(.botm-grid) {
            grid-template-columns: 1fr !important;
            gap: 2.8rem !important;
          }
        }
      `}</style>
    </section>
  );
}

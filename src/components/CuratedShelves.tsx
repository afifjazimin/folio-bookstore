'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { CURATED_SHELVES, CuratedShelf } from '@/data/bookstore';
import { SiteSettings } from '@/sanity/lib/queries';

interface CuratedShelvesProps {
  shelves?: CuratedShelf[];
  settings?: SiteSettings;
}

export default function CuratedShelves({
  shelves = CURATED_SHELVES,
  settings,
}: CuratedShelvesProps) {
  const eyebrow = settings?.shelvesEyebrow || 'CURATED SHELVES';
  const title = settings?.shelvesTitle || 'A shelf for every mood.';
  const linkText = settings?.shelvesLinkText || 'Browse all collections';

  return (
    <section id="shelves" style={{ padding: '5rem 0' }}>
      <div className="container-custom">
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: '3rem',
          }}
        >
          <div>
            <div className="eyebrow" style={{ marginBottom: '0.6rem' }}>
              {eyebrow}
            </div>
            <h2
              className="font-serif"
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
              }}
            >
              {title}
            </h2>
          </div>

          <a href="#shelves" className="link-arrow">
            {linkText} <ArrowRight size={15} />
          </a>
        </div>

        {/* Shelf Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
          }}
          className="shelves-grid"
        >
          {shelves.map((shelf) => (
            <div
              key={shelf.id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
              }}
              className="shelf-card"
            >
              {/* Image with subtle zoom on hover */}
              <div
                style={{
                  position: 'relative',
                  aspectRatio: '4 / 3',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  marginBottom: '1.2rem',
                  backgroundColor: 'var(--bg-card-subtle)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <Image
                  src={shelf.image}
                  alt={shelf.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                  }}
                  className="shelf-img"
                />
              </div>

              {/* Tag & Count */}
              <div
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-burgundy)',
                  marginBottom: '0.4rem',
                }}
              >
                {shelf.count} • {shelf.tag}
              </div>

              {/* Title */}
              <h3
                className="font-serif"
                style={{
                  fontSize: '1.4rem',
                  marginBottom: '0.4rem',
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.01em',
                }}
              >
                {shelf.title}
              </h3>

              {/* Subtitle */}
              <p
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.5,
                }}
              >
                {shelf.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        :global(.shelf-card:hover .shelf-img) {
          transform: scale(1.04);
        }
        @media (max-width: 860px) {
          :global(.shelves-grid) {
            grid-template-columns: 1fr !important;
            gap: 2.2rem !important;
          }
        }
      `}</style>
    </section>
  );
}

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Star } from 'lucide-react';
import { SiteSettings } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/image';

interface HeroSectionProps {
  settings?: SiteSettings;
}

export default function HeroSection({ settings }: HeroSectionProps) {
  const eyebrow = settings?.heroEyebrow || 'Independent Bookstore • Est. 2018';
  const titlePrefix = settings?.heroTitlePrefix || 'For the love of';
  const titleAccent = settings?.heroTitleAccent || 'a good book.';
  const description =
    settings?.heroDescription ||
    'Handpicked titles, independent presses, and quiet corners for avid readers. Free shipping on orders over $45 across the country.';
  const ratingText = settings?.heroRatingText || 'Rated 4.9/5 by over 12,000 book lovers';
  const storeCaption = settings?.heroStoreCaption || 'Quiet mornings at our Northfield store';
  const heroImageSrc = settings?.heroImage
    ? urlForImage(settings.heroImage).url()
    : '/images/hero_books_table.jpg';

  return (
    <section
      style={{
        paddingTop: '2.5rem',
        paddingBottom: '3.5rem',
        borderBottom: '1px solid var(--border-light)',
      }}
    >
      <div className="container-custom">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.05fr 1fr',
            gap: '3.5rem',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left Column Content */}
          <div style={{ maxWidth: '580px' }}>
            <div
              className="eyebrow"
              style={{
                marginBottom: '1.25rem',
                display: 'inline-block',
              }}
            >
              {eyebrow}
            </div>

            <h1
              className="font-serif"
              style={{
                fontSize: 'clamp(2.75rem, 5.2vw, 4.25rem)',
                lineHeight: 1.08,
                color: 'var(--text-primary)',
                marginBottom: '1.5rem',
                letterSpacing: '-0.025em',
              }}
            >
              {titlePrefix}{' '}
              <span
                className="italic-serif"
                style={{
                  color: 'var(--accent-burgundy)',
                  display: 'block',
                  fontWeight: 400,
                }}
              >
                {titleAccent}
              </span>
            </h1>

            <p
              style={{
                fontSize: '1.12rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.68,
                marginBottom: '2.2rem',
                maxWidth: '490px',
              }}
            >
              {description}
            </p>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                flexWrap: 'wrap',
                marginBottom: '2.8rem',
              }}
            >
              <a href="#catalog" className="btn-primary">
                Browse Catalog
              </a>
              <a href="#visit" className="btn-outline">
                Our Story <ArrowRight size={16} />
              </a>
            </div>

            {/* Social Proof / Trust Badge */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                paddingTop: '1rem',
                borderTop: '1px solid var(--border-light)',
              }}
            >
              <div style={{ display: 'flex', color: '#d97706', gap: '2px' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="#d97706" strokeWidth={0} />
                ))}
              </div>
              <span
                style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)',
                  fontWeight: 500,
                }}
              >
                {ratingText}
              </span>
            </div>
          </div>

          {/* Right Column Photography */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                position: 'relative',
                borderRadius: '6px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-md)',
                backgroundColor: 'var(--bg-card-subtle)',
                aspectRatio: '4 / 3.1',
              }}
            >
              <Image
                src={heroImageSrc}
                alt="Stack of hardcover books, open pages, tea cup and eucalyptus on sunlit wooden table"
                fill
                priority
                sizes="(max-width: 820px) 100vw, 50vw"
                style={{
                  objectFit: 'cover',
                  transition: 'transform 0.6s ease',
                }}
              />

              {/* Circular Rotating Staff Pick Badge */}
              <div
                style={{
                  position: 'absolute',
                  top: '1.25rem',
                  right: '1.25rem',
                  width: '90px',
                  height: '90px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(251, 249, 244, 0.94)',
                  backdropFilter: 'blur(8px)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 3,
                }}
              >
                {/* Rotating SVG Circular Text */}
                <svg
                  className="rotate-badge"
                  viewBox="0 0 100 100"
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                  }}
                >
                  <path
                    id="circlePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    fill="none"
                  />
                  <text
                    fontSize="9"
                    fontWeight="700"
                    fill="var(--accent-burgundy)"
                    letterSpacing="2.2"
                  >
                    <textPath href="#circlePath" startOffset="0%">
                      STAFF PICK OF THE MONTH • FOLIO •
                    </textPath>
                  </text>
                </svg>
                {/* Center Star Icon */}
                <Star size={16} fill="var(--accent-burgundy)" color="var(--accent-burgundy)" />
              </div>
            </div>

            {/* Caption below image */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: '0.85rem',
                fontSize: '0.82rem',
                color: 'var(--text-muted)',
              }}
            >
              <span>{storeCaption}</span>
              <a
                href="#visit"
                style={{
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontWeight: 500,
                }}
              >
                View store gallery <ArrowRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 860px) {
          :global(.hero-grid) {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}

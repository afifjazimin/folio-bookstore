import React from 'react';
import Image from 'next/image';
import { ArrowRight, MapPin, Clock } from 'lucide-react';
import { SiteSettings } from '@/sanity/lib/queries';

interface StoreVisitProps {
  settings?: SiteSettings;
}

export default function StoreVisit({ settings }: StoreVisitProps) {
  const eyebrow = settings?.storeEyebrow || 'OUR NORTHFIELD FLAGSHIP';
  const line1 = settings?.storeTitleLine1 || 'Your next chapter';
  const line2 = settings?.storeTitleLine2 || 'starts here.';
  const description =
    settings?.storeDescription ||
    'Three floors of floor-to-ceiling shelves, a curated stationery corner, and an espresso bar serving locally roasted beans. Pull up a chair and stay as long as you like.';
  const hoursMonSat = settings?.storeHoursMonSat || 'Mon – Sat: 9am – 8pm';
  const hoursSun = settings?.storeHoursSun || 'Sun: 10am – 6pm';
  const address = settings?.storeAddress || '142 Mill Street\nNorthfield, VT 05663';

  return (
    <section id="visit" style={{ padding: '5.5rem 0', backgroundColor: '#f7f4ed' }}>
      <div className="container-custom">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.15fr 1fr',
            gap: '4.5rem',
            alignItems: 'center',
          }}
          className="store-grid"
        >
          {/* Storefront Image */}
          <div
            style={{
              position: 'relative',
              aspectRatio: '4 / 3.4',
              borderRadius: '6px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-md)',
              backgroundColor: 'var(--bg-card-subtle)',
            }}
          >
            <Image
              src="/images/folio_storefront.jpg"
              alt="Folio Booksellers charming brick storefront with warm glowing windows at dusk"
              fill
              sizes="(max-width: 860px) 100vw, 55vw"
              style={{
                objectFit: 'cover',
              }}
            />
          </div>

          {/* Store Info */}
          <div>
            <div className="eyebrow" style={{ marginBottom: '1rem' }}>
              {eyebrow}
            </div>

            <h2
              className="font-serif"
              style={{
                fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)',
                lineHeight: 1.15,
                color: 'var(--text-primary)',
                marginBottom: '1.4rem',
                letterSpacing: '-0.02em',
              }}
            >
              {line1}
              <br />
              <span className="italic-serif">{line2}</span>
            </h2>

            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.68,
                marginBottom: '2.4rem',
              }}
            >
              {description}
            </p>

            {/* Hours and Address Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1.8rem',
                marginBottom: '2.5rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--border-medium)',
              }}
              className="info-columns"
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--text-primary)',
                    marginBottom: '0.5rem',
                  }}
                >
                  <Clock size={15} color="var(--accent-burgundy)" /> Hours
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5, whiteSpace: 'pre-line' }}>
                  {hoursMonSat}
                  <br />
                  {hoursSun}
                </p>
              </div>

              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--text-primary)',
                    marginBottom: '0.5rem',
                  }}
                >
                  <MapPin size={15} color="var(--accent-burgundy)" /> Address
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5, whiteSpace: 'pre-line' }}>
                  {address}
                </p>
              </div>
            </div>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link-arrow"
              style={{ fontSize: '0.94rem' }}
            >
              Get directions & parking <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 860px) {
          :global(.store-grid) {
            grid-template-columns: 1fr !important;
            gap: 2.8rem !important;
          }
        }
        @media (max-width: 520px) {
          :global(.info-columns) {
            grid-template-columns: 1fr !important;
            gap: 1.2rem !important;
          }
        }
      `}</style>
    </section>
  );
}

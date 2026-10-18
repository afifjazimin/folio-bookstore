import React from 'react';
import { SiteSettings } from '@/sanity/lib/queries';

interface FooterProps {
  settings?: SiteSettings;
}

export default function Footer({ settings }: FooterProps) {
  const bio =
    settings?.footerDescription ||
    'Your friendly neighborhood independent bookseller. Proud member of the American Booksellers Association.';

  return (
    <footer
      style={{
        backgroundColor: 'var(--bg-main)',
        borderTop: '1px solid var(--border-light)',
        padding: '5rem 0 3rem 0',
      }}
    >
      <div className="container-custom">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
            gap: '3.5rem',
            marginBottom: '4.5rem',
          }}
          className="footer-grid"
        >
          {/* Brand Info */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '0.45rem',
                marginBottom: '1.25rem',
              }}
            >
              <span
                className="font-serif"
                style={{
                  fontSize: '2.4rem',
                  fontWeight: 600,
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
                  color: 'var(--text-primary)',
                }}
              >
                folio.
              </span>
              <span
                style={{
                  fontSize: '0.62rem',
                  fontWeight: 700,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                }}
              >
                BOOKSELLERS
              </span>
            </div>

            <p
              style={{
                fontSize: '0.92rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                maxWidth: '320px',
                marginBottom: '1.5rem',
              }}
            >
              {bio}
            </p>

            <div
              style={{
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
              }}
            >
              Independent & reader-supported since 2018.
            </div>
          </div>

          {/* Column 1: Shop */}
          <div>
            <h4
              style={{
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--text-primary)',
                marginBottom: '1.2rem',
                fontFamily: 'var(--font-sans)',
              }}
            >
              Shop
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['Staff Picks', 'New Releases', 'Fiction Catalog', 'Poetry & Essays', 'Curated Bundles', 'Gift Cards'].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#catalog"
                      style={{
                        textDecoration: 'none',
                        color: 'var(--text-secondary)',
                        fontSize: '0.88rem',
                        transition: 'color var(--transition-fast)',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-burgundy)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Column 2: About */}
          <div>
            <h4
              style={{
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--text-primary)',
                marginBottom: '1.2rem',
                fontFamily: 'var(--font-sans)',
              }}
            >
              About
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['Our Story', 'Meet the Booksellers', 'Sustainability', 'Folio Journal', 'Careers', 'Press & Media'].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#visit"
                      style={{
                        textDecoration: 'none',
                        color: 'var(--text-secondary)',
                        fontSize: '0.88rem',
                        transition: 'color var(--transition-fast)',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-burgundy)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Column 3: Visit */}
          <div>
            <h4
              style={{
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--text-primary)',
                marginBottom: '1.2rem',
                fontFamily: 'var(--font-sans)',
              }}
            >
              Visit
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['Northfield Flagship', 'Café & Roastery', 'Event Space Rental', 'Accessibility Guide', 'Contact Us'].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#visit"
                      style={{
                        textDecoration: 'none',
                        color: 'var(--text-secondary)',
                        fontSize: '0.88rem',
                        transition: 'color var(--transition-fast)',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-burgundy)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '2rem',
            borderTop: '1px solid var(--border-light)',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.8rem',
            color: 'var(--text-muted)',
          }}
        >
          <div>© {new Date().getFullYear()} Folio Booksellers, Inc. All rights reserved.</div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>
              Privacy Policy
            </a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>
              Terms of Service
            </a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>
              Accessibility Statement
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 860px) {
          :global(.footer-grid) {
            grid-template-columns: 1fr 1fr !important;
            gap: 2.5rem !important;
          }
        }
        @media (max-width: 520px) {
          :global(.footer-grid) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}

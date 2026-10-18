'use client';

import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { SiteSettings } from '@/sanity/lib/queries';

interface NewsletterProps {
  settings?: SiteSettings;
}

export default function Newsletter({ settings }: NewsletterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const eyebrow = settings?.newsletterEyebrow || 'A WEEKLY DISPATCH FROM OUR BOOKSELLERS';
  const title = settings?.newsletterTitle || 'A letter worth opening.';
  const description =
    settings?.newsletterDescription ||
    'Recommendations, upcoming events, and thoughtful literary dispatches delivered to your inbox every Sunday morning.';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 4000);
  };

  return (
    <section
      style={{
        backgroundColor: '#ede3dc',
        padding: '5rem 0',
      }}
    >
      <div className="container-custom">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.15fr',
            gap: '4rem',
            alignItems: 'center',
          }}
          className="newsletter-grid"
        >
          {/* Left Title */}
          <div>
            <div className="eyebrow" style={{ marginBottom: '0.85rem' }}>
              {eyebrow}
            </div>
            <h2
              className="font-serif"
              style={{
                fontSize: 'clamp(2.3rem, 4.2vw, 3.2rem)',
                lineHeight: 1.12,
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
              }}
            >
              {title}
            </h2>
          </div>

          {/* Right Form & Description */}
          <div>
            <p
              style={{
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                marginBottom: '1.6rem',
              }}
            >
              {description}
            </p>

            {subscribed ? (
              <div
                style={{
                  backgroundColor: '#ffffff',
                  color: '#2d6a4f',
                  padding: '1.1rem 1.4rem',
                  borderRadius: 'var(--radius-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <Check size={20} color="#2d6a4f" />
                <span>You&apos;re subscribed! Look out for our welcome reading list this Sunday.</span>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  display: 'flex',
                  gap: '0.6rem',
                  marginBottom: '0.85rem',
                }}
                className="newsletter-form"
              >
                <input
                  type="email"
                  placeholder="Enter your email address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    flex: 1,
                    padding: '0.85rem 1.25rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid rgba(30, 29, 26, 0.2)',
                    backgroundColor: '#ffffff',
                    fontSize: '0.95rem',
                    outline: 'none',
                    color: 'var(--text-primary)',
                  }}
                />
                <button
                  type="submit"
                  className="btn-primary"
                  style={{
                    padding: '0.85rem 1.75rem',
                    flexShrink: 0,
                  }}
                >
                  Subscribe <ArrowRight size={16} />
                </button>
              </form>
            )}

            <div
              style={{
                fontSize: '0.78rem',
                color: 'var(--text-muted)',
              }}
            >
              No spam, ever. Unsubscribe with one click anytime.
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 860px) {
          :global(.newsletter-grid) {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
        @media (max-width: 520px) {
          :global(.newsletter-form) {
            flex-direction: column !important;
          }
          :global(.newsletter-form button) {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, ArrowRight, Check, X } from 'lucide-react';
import { UPCOMING_EVENTS, StoreEvent } from '@/data/bookstore';
import { SiteSettings } from '@/sanity/lib/queries';

interface CommunityEventsProps {
  events?: StoreEvent[];
  settings?: SiteSettings;
}

export default function CommunityEvents({
  events = UPCOMING_EVENTS,
  settings,
}: CommunityEventsProps) {
  const eyebrow = settings?.eventsEyebrow || 'COMMUNITY & GATHERINGS';
  const title = settings?.eventsTitle || 'Better, together.';
  const description =
    settings?.eventsDescription ||
    'Join us every Thursday evening for lively discussions, local cider, and new friends. Walk-ins are always welcome, and every reader has a seat at the table.';
  const [selectedEvent, setSelectedEvent] = useState<StoreEvent | null>(null);
  const [rsvpName, setRsvpName] = useState('');
  const [rsvpEmail, setRsvpEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleRSVP = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setSelectedEvent(null);
      setRsvpName('');
      setRsvpEmail('');
    }, 2200);
  };

  return (
    <section
      id="events"
      style={{
        backgroundColor: 'var(--bg-dark)',
        color: 'var(--text-light)',
        padding: '5.5rem 0',
      }}
    >
      <div className="container-custom">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.05fr 1.25fr',
            gap: '4.5rem',
            alignItems: 'flex-start',
          }}
          className="community-grid"
        >
          {/* Left Column: Story & Photo */}
          <div>
            <div
              className="eyebrow"
              style={{
                color: '#e29d52',
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
                color: 'var(--text-light)',
                marginBottom: '2rem',
                lineHeight: 1.12,
              }}
            >
              {title}
            </h2>

            <div
              style={{
                position: 'relative',
                aspectRatio: '4 / 2.7',
                borderRadius: '6px',
                overflow: 'hidden',
                marginBottom: '1.2rem',
                boxShadow: '0 12px 30px rgba(0, 0, 0, 0.45)',
              }}
            >
              <Image
                src="/images/book_club_gathering.jpg"
                alt="Book club discussion around a wooden table in the bookstore"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                style={{
                  objectFit: 'cover',
                }}
              />
            </div>

            <p
              style={{
                fontSize: '0.94rem',
                color: 'var(--text-light-muted)',
                lineHeight: 1.6,
                maxWidth: '480px',
              }}
            >
              {description}
            </p>
          </div>

          {/* Right Column: Events List */}
          <div style={{ paddingTop: '1rem' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                borderTop: '1px solid var(--border-dark)',
              }}
            >
              {events.map((event) => (
                <div
                  key={event.id}
                  onClick={() => setSelectedEvent(event)}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '80px 1fr auto',
                    gap: '1.5rem',
                    alignItems: 'center',
                    padding: '1.8rem 0',
                    borderBottom: '1px solid var(--border-dark)',
                    cursor: 'pointer',
                    transition: 'background var(--transition-fast)',
                  }}
                  className="event-row"
                >
                  {/* Date Badge */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                    }}
                  >
                    <span
                      className="font-serif"
                      style={{
                        fontSize: '2.2rem',
                        lineHeight: 1,
                        color: 'var(--text-light)',
                      }}
                    >
                      {event.day}
                    </span>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        letterSpacing: '0.14em',
                        color: '#c9933e',
                      }}
                    >
                      {event.month}
                    </span>
                  </div>

                  {/* Event Details */}
                  <div>
                    <h3
                      className="font-serif"
                      style={{
                        fontSize: '1.25rem',
                        color: 'var(--text-light)',
                        marginBottom: '0.35rem',
                      }}
                    >
                      {event.title}
                    </h3>
                    <div
                      style={{
                        fontSize: '0.84rem',
                        color: 'var(--text-light-muted)',
                      }}
                    >
                      {event.timeLocation}
                    </div>
                  </div>

                  {/* Arrow Icon */}
                  <div
                    style={{
                      color: 'var(--text-light-muted)',
                      transition: 'transform var(--transition-fast), color var(--transition-fast)',
                    }}
                    className="event-arrow"
                  >
                    <ArrowUpRight size={22} />
                  </div>
                </div>
              ))}
            </div>

            {/* View Full Calendar */}
            <div style={{ marginTop: '2.5rem' }}>
              <a
                href="#events"
                style={{
                  color: '#e29d52',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
              >
                View full event calendar <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive RSVP Modal */}
      {selectedEvent && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.7)',
            backdropFilter: 'blur(5px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 100,
            padding: '1.5rem',
          }}
          onClick={() => setSelectedEvent(null)}
        >
          <div
            style={{
              backgroundColor: 'var(--bg-main)',
              color: 'var(--text-primary)',
              borderRadius: '8px',
              maxWidth: '480px',
              width: '100%',
              padding: '2.2rem',
              position: 'relative',
              boxShadow: 'var(--shadow-lg)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedEvent(null)}
              aria-label="Close RSVP modal"
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--text-muted)',
              }}
            >
              <X size={20} />
            </button>

            <div className="eyebrow" style={{ marginBottom: '0.6rem' }}>
              Event RSVP • {selectedEvent.day} {selectedEvent.month}
            </div>
            <h3
              className="font-serif"
              style={{
                fontSize: '1.6rem',
                marginBottom: '0.5rem',
                lineHeight: 1.2,
              }}
            >
              {selectedEvent.title}
            </h3>
            <p
              style={{
                fontSize: '0.86rem',
                color: 'var(--text-secondary)',
                marginBottom: '1.2rem',
              }}
            >
              {selectedEvent.timeLocation}
            </p>
            <p
              style={{
                fontSize: '0.92rem',
                color: 'var(--text-primary)',
                lineHeight: 1.55,
                marginBottom: '1.8rem',
              }}
            >
              {selectedEvent.description}
            </p>

            {isSubmitted ? (
              <div
                style={{
                  backgroundColor: '#edf7ee',
                  color: '#2d6a4f',
                  padding: '1rem',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  fontWeight: 600,
                }}
              >
                <Check size={20} /> Your spot is confirmed! See you at Folio.
              </div>
            ) : (
              <form onSubmit={handleRSVP} style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                <input
                  type="text"
                  placeholder="Your Full Name"
                  required
                  value={rsvpName}
                  onChange={(e) => setRsvpName(e.target.value)}
                  style={{
                    padding: '0.8rem 1rem',
                    borderRadius: '4px',
                    border: '1px solid var(--border-medium)',
                    fontSize: '0.9rem',
                    outline: 'none',
                  }}
                />
                <input
                  type="email"
                  placeholder="Your Email Address"
                  required
                  value={rsvpEmail}
                  onChange={(e) => setRsvpEmail(e.target.value)}
                  style={{
                    padding: '0.8rem 1rem',
                    borderRadius: '4px',
                    border: '1px solid var(--border-medium)',
                    fontSize: '0.9rem',
                    outline: 'none',
                  }}
                />
                <button type="submit" className="btn-primary" style={{ marginTop: '0.5rem' }}>
                  Reserve Complimentary Seat
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      <style jsx>{`
        :global(.event-row:hover .event-arrow) {
          transform: translate(3px, -3px);
          color: #e29d52 !important;
        }
        @media (max-width: 860px) {
          :global(.community-grid) {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}

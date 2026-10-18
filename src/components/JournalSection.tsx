'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { JOURNAL_ARTICLES, JournalArticle } from '@/data/bookstore';
import { SiteSettings } from '@/sanity/lib/queries';

interface JournalSectionProps {
  articles?: JournalArticle[];
  settings?: SiteSettings;
}

export default function JournalSection({
  articles = JOURNAL_ARTICLES,
  settings,
}: JournalSectionProps) {
  const eyebrow = settings?.journalEyebrow || 'FROM OUR JOURNAL';
  const title = settings?.journalTitle || 'Notes from the margins.';
  const linkText = settings?.journalLinkText || 'Read all articles';

  return (
    <section id="journal" style={{ padding: '5rem 0' }}>
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

          <a href="#journal" className="link-arrow">
            {linkText} <ArrowRight size={15} />
          </a>
        </div>

        {/* 2 Articles Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '3rem',
          }}
          className="journal-grid"
        >
          {articles.map((article) => (
            <article
              key={article.id}
              style={{
                display: 'flex',
                gap: '1.75rem',
                alignItems: 'flex-start',
                cursor: 'pointer',
              }}
              className="journal-card"
            >
              {/* Thumbnail */}
              <div
                style={{
                  position: 'relative',
                  width: '160px',
                  height: '160px',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  flexShrink: 0,
                  boxShadow: 'var(--shadow-sm)',
                  backgroundColor: 'var(--bg-card-subtle)',
                }}
              >
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="160px"
                  style={{
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease',
                  }}
                  className="journal-thumb"
                />
              </div>

              {/* Text info */}
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--accent-burgundy)',
                    marginBottom: '0.45rem',
                  }}
                >
                  {article.category} • {article.readTime}
                </div>

                <h3
                  className="font-serif"
                  style={{
                    fontSize: '1.35rem',
                    lineHeight: 1.25,
                    marginBottom: '0.6rem',
                    color: 'var(--text-primary)',
                  }}
                >
                  {article.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.88rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.55,
                    marginBottom: '0.85rem',
                  }}
                >
                  {article.excerpt}
                </p>

                <div className="link-arrow" style={{ fontSize: '0.85rem' }}>
                  Read story <ArrowRight size={14} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        :global(.journal-card:hover .journal-thumb) {
          transform: scale(1.06);
        }
        @media (max-width: 860px) {
          :global(.journal-grid) {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
        @media (max-width: 520px) {
          :global(.journal-card) {
            flex-direction: column !important;
          }
          :global(.journal-card > div:first-child) {
            width: 100% !important;
            height: 200px !important;
          }
        }
      `}</style>
    </section>
  );
}

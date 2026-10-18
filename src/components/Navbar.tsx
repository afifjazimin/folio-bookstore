'use client';

import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
}

export default function Navbar({ cartCount, onOpenCart, onOpenSearch }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: isScrolled ? 'rgba(251, 249, 244, 0.95)' : 'var(--bg-main)',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--border-light)' : '1px solid transparent',
        transition: 'all 0.25s ease',
      }}
    >
      <div
        className="container-custom"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '76px',
        }}
      >
        {/* Brand Logo */}
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: '0.45rem',
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <span
            className="font-serif"
            style={{
              fontSize: '2.1rem',
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
        </a>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2.2rem',
          }}
          className="desktop-nav"
        >
          {[
            { label: 'Books', href: '#catalog' },
            { label: 'Curated Shelves', href: '#shelves' },
            { label: 'Events', href: '#events' },
            { label: 'Journal', href: '#journal' },
            { label: 'About', href: '#visit' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={{
                textDecoration: 'none',
                color: 'var(--text-secondary)',
                fontSize: '0.92rem',
                fontWeight: 500,
                transition: 'color var(--transition-fast)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-burgundy)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Action Icons */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.25rem',
          }}
        >
          <button
            onClick={onOpenSearch}
            aria-label="Search Catalog"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
              padding: '6px',
              borderRadius: '50%',
              transition: 'background var(--transition-fast)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.04)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            <Search size={20} strokeWidth={1.75} />
          </button>

          <a
            href="#account"
            aria-label="Account"
            style={{
              color: 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
              padding: '6px',
              borderRadius: '50%',
              transition: 'background var(--transition-fast)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.04)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            <User size={20} strokeWidth={1.75} />
          </a>

          {/* Cart Bag Icon with Count */}
          <button
            onClick={onOpenCart}
            aria-label="Shopping Bag"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
              padding: '6px',
              borderRadius: '50%',
              transition: 'background var(--transition-fast)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.04)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            <ShoppingBag size={21} strokeWidth={1.75} />
            {cartCount > 0 && (
              <span
                style={{
                  position: 'absolute',
                  top: '1px',
                  right: '1px',
                  backgroundColor: 'var(--accent-burgundy)',
                  color: '#ffffff',
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 5px rgba(121, 39, 52, 0.4)',
                }}
              >
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
            aria-label="Toggle Navigation Menu"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'none',
              color: 'var(--text-primary)',
              padding: '6px',
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: 'var(--bg-main)',
            borderBottom: '1px solid var(--border-light)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.2rem',
          }}
        >
          {[
            { label: 'Books', href: '#catalog' },
            { label: 'Curated Shelves', href: '#shelves' },
            { label: 'Events', href: '#events' },
            { label: 'Journal', href: '#journal' },
            { label: 'About & Visit', href: '#visit' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                textDecoration: 'none',
                color: 'var(--text-primary)',
                fontSize: '1.1rem',
                fontWeight: 500,
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}

      <style jsx>{`
        @media (max-width: 820px) {
          :global(.desktop-nav) {
            display: none !important;
          }
          :global(.mobile-menu-btn) {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}

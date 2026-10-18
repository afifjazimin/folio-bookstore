'use client';

import React from 'react';
import Image from 'next/image';
import { X, Plus, Minus, Trash2, ArrowRight, ShoppingBag, BookOpen } from 'lucide-react';
import { Book } from '@/data/bookstore';

export interface CartItem {
  book: Book;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (bookId: string, delta: number) => void;
  onRemoveItem: (bookId: string) => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
}: CartDrawerProps) {
  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.book.price * item.quantity, 0);
  const freeShippingThreshold = 45;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        display: 'flex',
        justifyContent: 'flex-end',
      }}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(30, 29, 26, 0.55)',
          backdropFilter: 'blur(4px)',
          transition: 'opacity 0.3s ease',
        }}
      />

      {/* Drawer Panel */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '430px',
          height: '100%',
          backgroundColor: 'var(--bg-main)',
          boxShadow: '-8px 0 30px rgba(0,0,0,0.2)',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 2,
          animation: 'slideInRight 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1.4rem 1.5rem',
            borderBottom: '1px solid var(--border-light)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <ShoppingBag size={20} color="var(--accent-burgundy)" />
            <h3 className="font-serif" style={{ fontSize: '1.4rem', color: 'var(--text-primary)' }}>
              Your Bag ({items.reduce((acc, cur) => acc + cur.quantity, 0)})
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close bag"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-muted)',
              padding: '4px',
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Free Shipping Progress */}
        <div
          style={{
            padding: '0.9rem 1.5rem',
            backgroundColor: '#f5f0e6',
            borderBottom: '1px solid var(--border-light)',
            fontSize: '0.82rem',
          }}
        >
          {remainingForFreeShipping > 0 ? (
            <div>
              Add <strong style={{ color: 'var(--accent-burgundy)' }}>${remainingForFreeShipping.toFixed(2)}</strong> more to get <strong>Free Carbon-Neutral Shipping</strong>!
            </div>
          ) : (
            <div style={{ color: '#2d6a4f', fontWeight: 600 }}>
              🎉 You unlocked Free Carbon-Neutral Shipping!
            </div>
          )}
          <div
            style={{
              width: '100%',
              height: '5px',
              backgroundColor: 'rgba(30, 29, 26, 0.1)',
              borderRadius: '99px',
              marginTop: '6px',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: `${progressPercent}%`,
                height: '100%',
                backgroundColor: remainingForFreeShipping === 0 ? '#2d6a4f' : 'var(--accent-burgundy)',
                transition: 'width 0.3s ease',
              }}
            />
          </div>
        </div>

        {/* Items List */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.2rem',
          }}
        >
          {items.length === 0 ? (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                textAlign: 'center',
                color: 'var(--text-muted)',
              }}
            >
              <ShoppingBag size={48} strokeWidth={1.2} style={{ marginBottom: '1rem', opacity: 0.5 }} />
              <p className="font-serif" style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                Your bag is empty
              </p>
              <p style={{ fontSize: '0.88rem', maxWidth: '240px', marginBottom: '1.5rem' }}>
                Discover handpicked titles and timeless reads in our catalog.
              </p>
              <button onClick={onClose} className="btn-primary" style={{ padding: '0.65rem 1.4rem', fontSize: '0.86rem' }}>
                Explore Books
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.book.id}
                style={{
                  display: 'flex',
                  gap: '1rem',
                  paddingBottom: '1rem',
                  borderBottom: '1px solid var(--border-light)',
                }}
              >
                {/* Book Thumbnail */}
                <div
                  style={{
                    position: 'relative',
                    width: '64px',
                    height: '92px',
                    borderRadius: '2px',
                    overflow: 'hidden',
                    flexShrink: 0,
                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                  }}
                >
                  {item.book.coverImage ? (
                    <Image
                      src={item.book.coverImage}
                      alt={item.book.title}
                      fill
                      sizes="64px"
                      style={{ objectFit: 'cover' }}
                    />
                  ) : (
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#f4efe6',
                        color: 'var(--text-muted)',
                      }}
                    >
                      <BookOpen size={20} />
                    </div>
                  )}
                </div>

                {/* Info */}
                <div style={{ flex: 1 }}>
                  <h4
                    className="font-serif"
                    style={{
                      fontSize: '1rem',
                      color: 'var(--text-primary)',
                      marginBottom: '2px',
                      lineHeight: 1.25,
                    }}
                  >
                    {item.book.title}
                  </h4>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                    {item.book.author}
                  </div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.6rem' }}>
                    ${(item.book.price * item.quantity).toFixed(2)}
                  </div>

                  {/* Quantity controls */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        border: '1px solid var(--border-medium)',
                        borderRadius: '3px',
                      }}
                    >
                      <button
                        onClick={() => onUpdateQuantity(item.book.id, -1)}
                        style={{
                          background: 'none',
                          border: 'none',
                          padding: '3px 7px',
                          cursor: 'pointer',
                          color: 'var(--text-primary)',
                        }}
                      >
                        <Minus size={12} />
                      </button>
                      <span style={{ fontSize: '0.82rem', fontWeight: 600, padding: '0 6px' }}>
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.book.id, 1)}
                        style={{
                          background: 'none',
                          border: 'none',
                          padding: '3px 7px',
                          cursor: 'pointer',
                          color: 'var(--text-primary)',
                        }}
                      >
                        <Plus size={12} />
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.book.id)}
                      aria-label="Remove item"
                      style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--text-muted)',
                        cursor: 'pointer',
                        padding: '4px',
                      }}
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Subtotal & Checkout */}
        {items.length > 0 && (
          <div
            style={{
              padding: '1.5rem',
              borderTop: '1px solid var(--border-light)',
              backgroundColor: '#faf7f0',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '1.05rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '0.4rem',
              }}
            >
              <span>Estimated Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '1.2rem' }}>
              Taxes calculated at checkout. Custom letterpress bookmark included in every order.
            </p>
            <button
              onClick={() => alert(`Proceeding to checkout with $${subtotal.toFixed(2)}! Thank you for supporting independent booksellers.`)}
              className="btn-primary"
              style={{ width: '100%', padding: '0.9rem' }}
            >
              Proceed to Checkout <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}

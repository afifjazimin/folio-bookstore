import React from 'react';
import { Truck, HeartHandshake, Compass } from 'lucide-react';
import { SiteSettings } from '@/sanity/lib/queries';

interface ValuePropsProps {
  settings?: SiteSettings;
}

export default function ValueProps({ settings }: ValuePropsProps) {
  const threshold = settings?.freeShippingThreshold || 45;
  const prop1 = settings?.valueProp1Title || `Free shipping on orders over $${threshold}`;
  const prop2 = settings?.valueProp2Title || 'Hand-wrapped with care in recycled paper';
  const prop3 = settings?.valueProp3Title || 'Curated by real booksellers, not algorithms';

  const props = [
    {
      icon: Truck,
      title: prop1,
    },
    {
      icon: HeartHandshake,
      title: prop2,
    },
    {
      icon: Compass,
      title: prop3,
    },
  ];

  return (
    <div
      style={{
        borderBottom: '1px solid var(--border-light)',
        backgroundColor: '#faf7f0',
        padding: '1.4rem 0',
      }}
    >
      <div className="container-custom">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
            alignItems: 'center',
          }}
          className="value-props-grid"
        >
          {props.map((p, index) => {
            const Icon = p.icon;
            return (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  justifyContent: index === 0 ? 'flex-start' : index === 1 ? 'center' : 'flex-end',
                }}
              >
                <div
                  style={{
                    color: 'var(--accent-burgundy)',
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Icon size={18} strokeWidth={1.8} />
                </div>
                <div style={{ fontSize: '0.86rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                  {p.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 860px) {
          :global(.value-props-grid) {
            grid-template-columns: 1fr !important;
            gap: 0.9rem !important;
          }
          :global(.value-props-grid > div) {
            justify-content: flex-start !important;
          }
        }
      `}</style>
    </div>
  );
}

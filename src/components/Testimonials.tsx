'use client';

import React from 'react';

const testimonials = [
  { name: 'Sarah Chen', role: 'CTO, TechStart', text: 'Completely transformed our workflow.' },
  { name: 'Mike Johnson', role: 'Lead Dev, ScaleUp', text: 'Best tool we have ever adopted.' },
  { name: 'Lisa Park', role: 'VP Eng, CloudCo', text: 'Our team ships 3x faster now.' },
];

export default function Testimonials() {
  return (
    <section style={{ backgroundColor: '#f0f4ff', padding: '80px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h2 style={{ fontSize: '36px', fontWeight: 700, color: '#1e293b', textAlign: 'center', marginBottom: '48px' }}>
          What Our Users Say
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
          {testimonials.map((t) => (
            <div
              key={t.name}
              style={{
                backgroundColor: 'white',
                padding: '32px',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              }}
            >
              <p style={{ fontSize: '16px', color: '#4b5563', lineHeight: 1.6, marginBottom: '24px' }}>
                &ldquo;{t.text}&rdquo;
              </p>
              <div>
                <p style={{ fontWeight: 600, color: '#111827', fontSize: '15px' }}>{t.name}</p>
                <p style={{ color: '#9ca3af', fontSize: '13px' }}>{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

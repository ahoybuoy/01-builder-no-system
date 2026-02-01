'use client';

import React from 'react';

export default function CTASection() {
  return (
    <section style={{
      padding: '80px 24px',
      backgroundColor: '#6366F1',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: '36px',
          fontWeight: 'bold',
          color: '#ffffff',
          marginBottom: '16px'
        }}>
          Ready to get started?
        </h2>
        <p style={{
          fontSize: '18px',
          color: '#c7d2fe',
          marginBottom: '32px'
        }}>
          Join thousands of companies already using our platform.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
          <button style={{
            backgroundColor: '#ffffff',
            color: '#6366F1',
            padding: '14px 28px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: '600'
          }}>
            Start Free Trial
          </button>
          <button style={{
            backgroundColor: 'transparent',
            color: '#ffffff',
            padding: '14px 28px',
            borderRadius: '8px',
            border: '2px solid #ffffff',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: '500'
          }}>
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
}

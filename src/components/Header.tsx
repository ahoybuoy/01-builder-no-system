'use client';

import React from 'react';

export default function Header() {
  return (
    <header style={{
      backgroundColor: '#ffffff',
      padding: '16px 24px',
      borderBottom: '1px solid #e5e7eb',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937' }}>
        StartupCo
      </div>
      <nav aria-label="Main navigation" style={{ display: 'flex', gap: '32px' }}>
        <a href="#features" aria-label="View features" style={{ color: '#4b5563', textDecoration: 'none', fontSize: '16px' }}>
          Features
        </a>
        <a href="#pricing" aria-label="View pricing plans" style={{ color: '#4b5563', textDecoration: 'none', fontSize: '16px' }}>
          Pricing
        </a>
        <a href="#about" aria-label="Learn about us" style={{ color: '#4b5563', textDecoration: 'none', fontSize: '16px' }}>
          About
        </a>
      </nav>
      <button
        aria-label="Get started with StartupCo"
        style={{
          backgroundColor: '#3B82F6',
          color: 'white',
          padding: '8px 16px',
          borderRadius: '8px',
          border: 'none',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: '500'
        }}
      >
        Get Started
      </button>
    </header>
  );
}

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
      <nav style={{ display: 'flex', gap: '32px' }}>
        <a href="#features" style={{ color: '#4b5563', textDecoration: 'none', fontSize: '16px' }}>
          Features
        </a>
        <a href="#pricing" style={{ color: '#4b5563', textDecoration: 'none', fontSize: '16px' }}>
          Pricing
        </a>
        <a href="#about" style={{ color: '#4b5563', textDecoration: 'none', fontSize: '16px' }}>
          About
        </a>
      </nav>
      <button style={{
        backgroundColor: '#3B82F6',
        color: 'white',
        padding: '8px 16px',
        borderRadius: '8px',
        border: 'none',
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: '500'
      }}>
        Get Started
      </button>
    </header>
  );
}

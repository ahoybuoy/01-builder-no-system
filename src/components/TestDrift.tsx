import React from 'react';

export function TestDrift() {
  return (
    <div
      style={{
        backgroundColor: '#1a1a2e',
        color: '#e94560',
        padding: '24px',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
      }}
    >
      <h1
        style={{
          fontSize: '28px',
          fontWeight: 700,
          color: '#16213e',
          marginBottom: '16px',
          animation: 'fadeIn 0.3s ease-in-out',
        }}
      >
        Dashboard Overview
      </h1>
      <p style={{ color: '#0f3460', lineHeight: '1.6', fontSize: '14px' }}>
        This component has hardcoded colors and inline styles throughout.
      </p>
      <button
        style={{
          backgroundColor: '#e94560',
          color: '#ffffff',
          border: 'none',
          padding: '12px 24px',
          borderRadius: '6px',
          cursor: 'pointer',
          transition: 'background-color 0.2s ease',
        }}
      >
        Take Action
      </button>
    </div>
  );
}

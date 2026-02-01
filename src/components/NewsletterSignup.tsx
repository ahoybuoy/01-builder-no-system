'use client';

import React, { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');

  return (
    <div style={{
      backgroundColor: '#F59E0B',
      padding: '32px',
      borderRadius: '12px',
      textAlign: 'center'
    }}>
      <h3 style={{
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: '8px'
      }}>
        Stay in the loop
      </h3>
      <p style={{
        fontSize: '14px',
        color: '#fef3c7',
        marginBottom: '24px'
      }}>
        Get the latest updates and tips delivered to your inbox.
      </p>
      <div style={{ display: 'flex', gap: '8px', maxWidth: '400px', margin: '0 auto' }}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          style={{
            flex: 1,
            padding: '12px 16px',
            borderRadius: '8px',
            border: 'none',
            fontSize: '14px'
          }}
        />
        <button style={{
          backgroundColor: '#92400e',
          color: 'white',
          padding: '12px 24px',
          borderRadius: '8px',
          border: 'none',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: '500'
        }}>
          Subscribe
        </button>
      </div>
    </div>
  );
}

'use client';

import React from 'react';

interface PricingCardProps {
  name: string;
  price: string;
  features: string[];
  highlighted?: boolean;
}

export default function PricingCard({ name, price, features, highlighted }: PricingCardProps) {
  return (
    <div style={{
      backgroundColor: highlighted ? '#3B82F6' : '#ffffff',
      padding: '32px',
      borderRadius: '12px',
      border: highlighted ? 'none' : '1px solid #e5e7eb',
      textAlign: 'center'
    }}>
      <h3 style={{
        fontSize: '20px',
        fontWeight: '600',
        color: highlighted ? '#ffffff' : '#111827',
        marginBottom: '8px'
      }}>
        {name}
      </h3>
      <div style={{
        fontSize: '48px',
        fontWeight: 'bold',
        color: highlighted ? '#ffffff' : '#111827',
        marginBottom: '24px'
      }}>
        {price}
        <span style={{ fontSize: '16px', fontWeight: 'normal' }}>/mo</span>
      </div>
      <ul style={{
        listStyle: 'none',
        padding: 0,
        marginBottom: '24px',
        textAlign: 'left'
      }}>
        {features.map((feature, index) => (
          <li key={index} style={{
            padding: '8px 0',
            color: highlighted ? '#dbeafe' : '#6b7280',
            fontSize: '14px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <span style={{ color: highlighted ? '#10B981' : '#10B981' }}>✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <button style={{
        width: '100%',
        backgroundColor: highlighted ? '#ffffff' : '#3B82F6',
        color: highlighted ? '#3B82F6' : '#ffffff',
        padding: '12px 24px',
        borderRadius: '8px',
        border: 'none',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: '500'
      }}>
        Get Started
      </button>
    </div>
  );
}

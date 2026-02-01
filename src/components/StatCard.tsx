'use client';

import React from 'react';

interface StatCardProps {
  value: string;
  label: string;
}

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <div style={{
      textAlign: 'center',
      padding: '24px'
    }}>
      <div style={{
        fontSize: '48px',
        fontWeight: 'bold',
        color: '#3B82F6',
        marginBottom: '8px'
      }}>
        {value}
      </div>
      <div style={{
        fontSize: '16px',
        color: '#6b7280'
      }}>
        {label}
      </div>
    </div>
  );
}

'use client';

import React from 'react';

interface BadgeProps {
  text: string;
  variant?: 'success' | 'warning' | 'error' | 'info';
}

export default function Badge({ text, variant = 'info' }: BadgeProps) {
  const getStyles = () => {
    switch (variant) {
      case 'success':
        return { backgroundColor: '#10B981', color: 'white' };
      case 'warning':
        return { backgroundColor: '#F59E0B', color: 'white' };
      case 'error':
        return { backgroundColor: '#EF4444', color: 'white' };
      default:
        return { backgroundColor: '#3B82F6', color: 'white' };
    }
  };

  return (
    <span style={{
      ...getStyles(),
      padding: '4px 12px',
      borderRadius: '9999px',
      fontSize: '12px',
      fontWeight: '500',
      display: 'inline-block'
    }}>
      {text}
    </span>
  );
}

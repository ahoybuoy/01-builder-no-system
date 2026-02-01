'use client';

import React from 'react';
import PricingCard from './PricingCard';

export default function PricingSection() {
  const plans = [
    {
      name: 'Starter',
      price: '$9',
      features: ['5 Projects', '10GB Storage', 'Email Support', 'Basic Analytics'],
    },
    {
      name: 'Pro',
      price: '$29',
      features: ['Unlimited Projects', '100GB Storage', 'Priority Support', 'Advanced Analytics', 'Team Collaboration'],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: '$99',
      features: ['Everything in Pro', 'Unlimited Storage', '24/7 Support', 'Custom Integrations', 'SLA Guarantee'],
    },
  ];

  return (
    <section style={{ padding: '64px 24px', backgroundColor: '#f9fafb' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: '32px',
          fontWeight: 'bold',
          color: '#111827',
          textAlign: 'center',
          marginBottom: '48px'
        }}>
          Simple, transparent pricing
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

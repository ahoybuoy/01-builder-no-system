'use client';

import React from 'react';
import StatCard from './StatCard';

export default function StatsSection() {
  const stats = [
    { value: '10K+', label: 'Active Users' },
    { value: '99.9%', label: 'Uptime' },
    { value: '50M+', label: 'API Requests' },
    { value: '24/7', label: 'Support' },
  ];

  return (
    <section className="py-[48px] px-[24px] bg-white border-y border-[#e5e7eb]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-4 gap-[24px]">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

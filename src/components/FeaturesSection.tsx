'use client';

import React from 'react';
import FeatureCard from './FeatureCard';

export default function FeaturesSection() {
  const features = [
    { icon: '🚀', title: 'Fast Deployment', description: 'Deploy your app in seconds with our streamlined pipeline.' },
    { icon: '🔒', title: 'Secure by Default', description: 'Enterprise-grade security built into every layer.' },
    { icon: '📊', title: 'Analytics', description: 'Real-time insights to grow your business.' },
  ];

  return (
    <section className="py-[64px] px-[24px] bg-white">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-[32px] font-bold text-[#111827] text-center mb-[48px]">
          Everything you need to succeed
        </h2>
        <div className="grid grid-cols-3 gap-[24px]">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

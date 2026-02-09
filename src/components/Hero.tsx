'use client';

import React from 'react';

export default function Hero() {
  return (
    <section className="bg-[#f9fafb] py-[64px] px-[24px]">
      <div className="max-w-[1200px] mx-auto text-center">
        <h1
          className="text-[48px] font-bold text-[#111827] mb-[24px]"
          style={{
            animation: 'fadeInUp 0.8s ease-out',
            opacity: 1,
            transform: 'translateY(0)',
          }}
        >
          Build Something Amazing
        </h1>
        <p
          className="text-[20px] text-[#6b7280] mb-[32px] max-w-[600px] mx-auto"
          style={{
            animation: 'fadeInUp 0.8s ease-out 0.2s both',
          }}
        >
          The all-in-one platform for startups to launch faster and scale smarter.
        </p>
        <div
          className="flex gap-[16px] justify-center"
          style={{
            animation: 'fadeInUp 0.8s ease-out 0.4s both',
          }}
        >
          <button
            className="bg-[#3B82F6] text-white px-[24px] py-[12px] rounded-[8px] text-[16px] font-medium hover:bg-[#2563eb]"
            style={{
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4)',
            }}
          >
            Start Free Trial
          </button>
          <button
            className="bg-white text-[#374151] px-[24px] py-[12px] rounded-[8px] text-[16px] font-medium border border-[#d1d5db]"
            style={{
              transition: 'transform 0.2s ease, border-color 0.2s ease',
            }}
          >
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  );
}

'use client';

import React from 'react';

export default function Hero() {
  return (
    <section className="bg-[#f9fafb] py-[64px] px-[24px]">
      <div className="max-w-[1200px] mx-auto text-center">
        <h1 className="text-[48px] font-bold text-[#111827] mb-[24px]">
          Build Something Amazing
        </h1>
        <p className="text-[20px] text-[#6b7280] mb-[32px] max-w-[600px] mx-auto">
          The all-in-one platform for startups to launch faster and scale smarter.
        </p>
        <div className="flex gap-[16px] justify-center">
          <button className="bg-[#3B82F6] text-white px-[24px] py-[12px] rounded-[8px] text-[16px] font-medium hover:bg-[#2563eb]">
            Start Free Trial
          </button>
          <button className="bg-white text-[#374151] px-[24px] py-[12px] rounded-[8px] text-[16px] font-medium border border-[#d1d5db]">
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  );
}

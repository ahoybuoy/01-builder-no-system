'use client';

import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export default function TestimonialCard({ quote, author, role, company }: TestimonialCardProps) {
  return (
    <div className="bg-white p-[24px] rounded-[12px] border border-[#e5e7eb]">
      <p className="text-[#374151] text-[16px] mb-[16px] italic">
        "{quote}"
      </p>
      <div className="flex items-center gap-[12px]">
        <div className="w-[40px] h-[40px] rounded-full bg-[#6366F1] flex items-center justify-center text-white font-bold">
          {author[0]}
        </div>
        <div>
          <div className="text-[14px] font-semibold text-[#111827]">{author}</div>
          <div className="text-[12px] text-[#6b7280]">{role} at {company}</div>
        </div>
      </div>
    </div>
  );
}

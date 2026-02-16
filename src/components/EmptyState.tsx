import React from 'react';

export function EmptyState({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-[48px] px-[24px] text-center">
      <div className="w-[64px] h-[64px] rounded-full bg-[#f3f4f6] flex items-center justify-center mb-[16px]">
        <svg className="w-[28px] h-[28px] text-[#9ca3af]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-2.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
        </svg>
      </div>
      <h3 className="text-[18px] font-semibold text-[#111827] mb-[8px]">{title}</h3>
      <p className="text-[14px] text-[#6b7280] max-w-[320px]">{description}</p>
    </div>
  );
}

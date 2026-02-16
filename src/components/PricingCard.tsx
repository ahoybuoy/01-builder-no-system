import React from 'react';

export function PricingCard({ plan, price, features }: { plan: string; price: string; features: string[] }) {
  return (
    <div className="bg-[#f8fafc] border-[2px] border-[#e2e8f0] rounded-[16px] p-[28px] max-w-[380px] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
      <span className="text-[11px] font-bold tracking-[0.08em] uppercase text-[#6366f1] bg-[#eef2ff] px-[10px] py-[3px] rounded-[99px]">
        {plan}
      </span>
      <p className="text-[42px] font-extrabold text-[#0f172a] mt-[20px] leading-[1.1]">
        {price}<span className="text-[16px] text-[#94a3b8] font-normal">/mo</span>
      </p>
      <ul className="mt-[24px] space-y-[14px]">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-[10px] text-[15px] text-[#334155]">
            <svg className="w-[18px] h-[18px] text-[#22c55e]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {f}
          </li>
        ))}
      </ul>
      <button className="mt-[28px] w-full py-[14px] bg-[#6366f1] hover:bg-[#4f46e5] text-white font-semibold rounded-[12px] transition-all duration-[200ms]">
        Get Started
      </button>
    </div>
  );
}

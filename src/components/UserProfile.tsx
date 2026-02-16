import React from 'react';

export function UserProfile({ name, role, avatar }: { name: string; role: string; avatar: string }) {
  return (
    <div className="flex items-center gap-[14px] p-[16px] bg-[#f9fafb] rounded-[10px] border border-[#e5e7eb]">
      <img src={avatar} alt={name} className="w-[44px] h-[44px] rounded-full object-cover ring-[2px] ring-[#6366f1]" />
      <div>
        <p className="text-[15px] font-semibold text-[#111827]">{name}</p>
        <p className="text-[13px] text-[#6b7280]">{role}</p>
      </div>
    </div>
  );
}

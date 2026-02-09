'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#111827] py-[48px] px-[24px]" role="contentinfo">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-4 gap-[32px] mb-[48px]">
          <div>
            <div className="text-[24px] font-bold text-white mb-[16px]">StartupCo</div>
            <p className="text-[14px] text-[#9ca3af]">
              Building the future of software development.
            </p>
          </div>
          <div>
            <h4 className="text-[14px] font-semibold text-white mb-[16px]">Product</h4>
            <nav aria-label="Product links">
              <ul className="space-y-[8px]">
                <li><a href="#" className="text-[14px] text-[#9ca3af] hover:text-white">Features</a></li>
                <li><a href="#" className="text-[14px] text-[#9ca3af] hover:text-white">Pricing</a></li>
                <li><a href="#" className="text-[14px] text-[#9ca3af] hover:text-white">Docs</a></li>
              </ul>
            </nav>
          </div>
          <div>
            <h4 className="text-[14px] font-semibold text-white mb-[16px]">Company</h4>
            <nav aria-label="Company links">
              <ul className="space-y-[8px]">
                <li><a href="#" className="text-[14px] text-[#9ca3af] hover:text-white">About</a></li>
                <li><a href="#" className="text-[14px] text-[#9ca3af] hover:text-white">Blog</a></li>
                <li><a href="#" className="text-[14px] text-[#9ca3af] hover:text-white">Careers</a></li>
              </ul>
            </nav>
          </div>
          <div>
            <h4 className="text-[14px] font-semibold text-white mb-[16px]">Legal</h4>
            <nav aria-label="Legal links">
              <ul className="space-y-[8px]">
                <li><a href="#" className="text-[14px] text-[#9ca3af] hover:text-white">Privacy</a></li>
                <li><a href="#" className="text-[14px] text-[#9ca3af] hover:text-white">Terms</a></li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="border-t border-[#374151] pt-[24px] text-center">
          <p className="text-[14px] text-[#9ca3af]">
            &copy; 2024 StartupCo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

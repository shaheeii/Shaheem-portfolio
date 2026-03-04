'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-12 px-6 md:px-16 lg:px-40 bg-[#101922]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8 rounded-full overflow-hidden ring-1 ring-primary bg-slate-800 shadow-sm shadow-primary/10 flex items-center justify-center">
            <img
              src="/profile.png?v=1"
              alt="Mohammed Shaheem"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-lg font-bold text-white tracking-tighter">SHAHEEM</span>
        </div>
        
        <p className="text-slate-500 text-sm">© 2024 Creopix Designs. All rights reserved.</p>
        
        <div className="flex items-center gap-6">
          {[
            { name: 'Instagram', href: 'https://www.instagram.com/shaheeiiiii?igsh=MTMyOXhiYnJnMWFoYg==', color: 'hover:text-[#E4405F]' },
            { name: 'LinkedIn', href: 'https://www.linkedin.com/in/shaheeii', color: 'hover:text-[#0077B5]' },
            { name: 'WhatsApp', href: 'https://wa.me/message/NSQV3Y43CRVRN1', color: 'hover:text-[#25D366]' }
          ].map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-slate-400 transition-colors text-sm ${social.color}`}
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Github, Twitter } from 'lucide-react';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Navbar() {
  const socials = [
    { icon: InstagramIcon, href: 'https://www.instagram.com/shaheeiiiii?igsh=MTMyOXhiYnJnMWFoYg==', color: 'hover:text-[#E4405F]' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/shaheeii' },
    { icon: WhatsAppIcon, href: 'https://wa.me/message/NSQV3Y43CRVRN1', color: 'hover:text-[#25D366]' },
    { icon: Github, href: 'https://github.com/shaheeii' },
    { icon: Twitter, href: '#' },
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-200/10 bg-[#101922]/80 backdrop-blur-md px-6 md:px-16 lg:px-40 py-5">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-4 group">
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9, rotate: -5 }}
            className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-primary/20 group-hover:ring-primary/50 transition-all"
          >
            <Image
              src="/profile.png"
              alt="Mohammed Shaheem"
              fill
              className="object-cover transition-all duration-500"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="flex flex-col">
            <span className="text-lg font-black tracking-tighter leading-none text-white">SHAHEEM</span>
            <span className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase">Brand Strategy</span>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center gap-12">
          {['Work', 'Brand Strategy', 'Services', 'Contact'].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-sm font-medium text-slate-400 hover:text-primary transition-colors"
            >
              {item}
            </Link>
          ))}
          
          <div className="h-4 w-px bg-slate-800 mx-6" />
          
          <div className="flex items-center gap-6">
            {socials.map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.8, rotate: -10 }}
                className={`text-slate-300 transition-all duration-300 ${social.color || 'hover:text-primary'}`}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </nav>

        <motion.button
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.9, rotate: -1 }}
          className="bg-primary hover:bg-primary/90 text-white rounded-lg px-6 py-2.5 text-sm font-bold transition-all shadow-lg shadow-primary/20"
          suppressHydrationWarning
        >
          Start a Project
        </motion.button>
      </div>
    </header>
  );
}

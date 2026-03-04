'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Verified } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden pt-20"
    >
      <motion.div 
        style={{ y: yBg, scale }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#101922]/60 to-[#101922] z-10" />
        <Image 
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
          alt="Abstract Background"
          fill
          priority
          className="object-cover opacity-40 grayscale"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <motion.div 
        style={{ y: yText, opacity }}
        className="relative z-20 container mx-auto px-6 text-center max-w-5xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 mb-8"
        >
          <Verified className="w-4 h-4 text-primary" />
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Portfolio</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] mb-8 text-white"
        >
          Mohammed Shaheem: <br />
          <span className="text-primary">Designer. Developer. Artist</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
        >
          Crafting premium visual identities that elevate ambitious brands through high-end strategic design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="#work" className="w-full sm:w-auto">
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.9, rotate: 1 }}
              className="w-full min-w-[200px] rounded-lg bg-primary py-4 px-8 text-white font-bold text-lg hover:shadow-lg hover:shadow-primary/20 transition-all"
              suppressHydrationWarning
            >
              View Selected Work
            </motion.button>
          </Link>
          <Link href="#contact" className="w-full sm:w-auto">
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.9, rotate: -1 }}
              className="w-full min-w-[200px] rounded-lg border border-slate-700 bg-slate-800/50 py-4 px-8 text-white font-bold text-lg hover:bg-slate-700 transition-all"
              suppressHydrationWarning
            >
              Start a Project
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

    </section>
  );
}

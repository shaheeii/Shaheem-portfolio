'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CinematicCTA() {
  return (
    <section className="px-6 lg:px-20 py-24 text-center max-w-7xl mx-auto border-t border-slate-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
          Let&apos;s build something <br />
          <span className="text-primary italic">cinematic</span> together.
        </h2>
        <Link 
          href="#contact"
          className="inline-flex items-center gap-4 text-xl md:text-2xl font-medium text-white hover:text-primary transition-colors underline underline-offset-8 decoration-primary/30 hover:decoration-primary"
        >
          Start a Project <ArrowRight className="w-6 h-6" />
        </Link>
      </motion.div>
    </section>
  );
}

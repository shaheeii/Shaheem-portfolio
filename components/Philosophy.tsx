'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Diamond, TrendingUp, Brush, History, Target } from 'lucide-react';

const cards = [
  {
    icon: TrendingUp,
    title: 'Strategic Thinking',
    description: "Design is more than aesthetics; it's a tool for business growth and market positioning."
  },
  {
    icon: Brush,
    title: 'Visual Excellence',
    description: 'Crafting timeless aesthetics that resonate with sophisticated global audiences.'
  },
  {
    icon: History,
    title: 'Storytelling',
    description: 'Building emotional connections through powerful visual narratives and heritage.'
  },
  {
    icon: Target,
    title: 'Precision',
    description: 'Attention to the smallest details that define a premium brand identity.'
  }
];

export default function Philosophy() {
  return (
    <section id="brand-strategy" className="py-24 lg:py-40 px-6 md:px-16 lg:px-40 bg-[#101922] border-t border-slate-200/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left Column */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-primary text-sm font-bold uppercase tracking-[0.2em] mb-6">Brand Strategy</h2>
              <h3 className="text-4xl md:text-5xl font-bold leading-tight mb-8 text-white">Strategic Design Approach</h3>
              <p className="text-slate-400 text-lg leading-relaxed mb-10">
                Founder of <span className="text-white font-medium">Creopix Designs</span> with 3+ years of experience in luxury brand positioning. My work bridges the gap between commercial objectives and artistic excellence.
              </p>
              
              <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 flex flex-col items-start">
                <Diamond className="w-10 h-10 text-primary mb-4" />
                <h4 className="text-xl font-bold mb-2 text-white">Uncompromising Quality</h4>
                <p className="text-slate-400 text-sm">Every pixel serves a specific purpose in your brand&apos;s narrative, ensuring a cohesive and premium experience across all touchpoints.</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group p-8 rounded-xl border border-slate-800 bg-slate-900/30 hover:bg-primary/5 hover:border-primary/30 transition-all"
                >
                  <div className="mb-6 flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <card.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors">{card.title}</h4>
                  <p className="text-slate-400 leading-relaxed text-sm">{card.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

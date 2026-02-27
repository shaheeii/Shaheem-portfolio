'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const categories = ['ALL WORK', 'BRANDING', 'ADVERTISING', 'POSTER DESIGN', 'SOCIAL CAMPAIGNS'];

const projects = [
  {
    id: 1,
    title: 'Nebula Core',
    category: 'BRANDING',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAl1VhDnwx0pXvYTomWZ-qv8SVQQAdbBJC2EsgEaEtg46bHKUOCVbRThEjR9exVRDPvrQMQFKr8TfleZO-SGAGB2SYRL_FDWtbXY5HgpPHMPbT1pavKfRIcLzWfr1G8zx0lfkj_GstXrb_-6hgm6MLVup2JQ8PwxshX2Tluvlwvcb8hmk59V1N7ow90RnBF2Fd0wqsRGj8I_I8mAT-KsLS0irgjU_ExJo5qXzPd5qnLjPAspJpRTtec-Ebj0TOwM1ZqxEs2WdihQds',
    span: 'md:col-span-2 aspect-[16/9]'
  },
  {
    id: 2,
    title: 'Urban Rhythm',
    category: 'ADVERTISING',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMqUcU_J_mszIvJTsnt9EM5OeKrVYfGeba7eAXU_Ky3PGq0d2iO4Ff2Pyho_WgHAAJAhKm6IIVNxoD-7BTtTGiGsGS4_5pUZ13hwAxRnh4coUZCO-okh63ZYqFsqanNB1PIhG2jn3Q9pBQ2vuC2PwGwMqVSKVFoYdzVMK16UAy94POoNVbPAHIJLpzOugi2Elfn_BzbG1h-Y9QLLEsO91FuXwczimNg5XwN7IE5BWL0d6oVk6_mZtpNBIVd0cCVQtIQVFX-Gg31M8',
    span: 'aspect-square'
  },
  {
    id: 3,
    title: 'Ethereal Forms',
    category: 'POSTER DESIGN',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqG11mSfZR3bOPnksZ_uxxHmiL-lzILxIsZPBdOYRyxXGwuUlbpNdiuQfnd01UR1lwhhGKvcvXWcQVaET_YtFII7TTPeuTuSZi7vhEli3cwLHeOQg3o4pEXE0Df2vUP2kc2hnBvg4Mw6xABzF3DCSFTi_TOBW3cZiXLRxxZYarKxCiqe4DSL4FzUXNKqECYtFnOMNorJ2DdHS_Y2f9Mz1eDUd7GtrUUHRoPmZYsklNXpyCLA3qpQRjqTb0S5CDZT07aiK1wASuhkk',
    span: 'aspect-square'
  },
  {
    id: 4,
    title: 'Flux Digital',
    category: 'SOCIAL CAMPAIGNS',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_auekpcuiHc-5cdumXEZ0vka6eye4J5VxRx5nVTrY7HeXqNb7zYyUiLyH-De2R7QBZQK6n4GSS6YpaDhFcmIXfQ_8lri0HQPkFPctN6JITjMnHzMAuuLoVmbVzDou9EAGPv6jmb93w0uWSgrKhgRzS9X7qKm491W_hHA4HgbfUW9HJ_CQpKl4oPZFByS64fgfzwCg-bLsqBbXi3i5aW5nAFK4QGJD03AkF5NREm4pBvQTK6jWrFXhlWF5Xywl0VhgBNrCgIHNLpg',
    span: 'aspect-video'
  },
  {
    id: 5,
    title: 'Apex Studio',
    category: 'BRANDING',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjk8EnOL9OR4ZUxvtT7tHY-cjbs7J_KsZDkGrBiBueBmYIFJ3TWd4rUO6J-SrSmMrUznBlxTj_OBS8N_Xh53YpDV7v7nYZxVWpRhfgT-mb-YndffF7PfQARxMwvGCMzHeHDJc2bP2lEH5NC1exwn-0vvC6s3JCpgVRU-znSjsVtTOruX_KT9L4s6jqO0-RlU2pH-YyuGfJB8T_MchB548XB9Bk2Pk6J0LWU-ynjjWgL9fl9Nfri9eqXjlbbwPA40BRG4Cl1bHy0LQ',
    span: 'aspect-video'
  }
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('ALL WORK');

  const filteredProjects = activeCategory === 'ALL WORK' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="work" className="py-24 px-6 md:px-16 lg:px-40 bg-[#101922]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">Selected Work</h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            A collection of high-impact visual storytelling and cinematic brand identities.
          </p>
        </div>

        {/* Filter Tabs */}
        <nav className="sticky top-20 z-30 bg-[#101922]/80 backdrop-blur-md border-b border-slate-800 mb-12">
          <div className="flex overflow-x-auto no-scrollbar gap-10 py-4">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                whileTap={{ scale: 0.9 }}
                className={`relative whitespace-nowrap py-2 text-sm font-bold tracking-wider transition-colors ${
                  activeCategory === cat ? 'text-primary' : 'text-slate-500 hover:text-primary'
                }`}
                suppressHydrationWarning
              >
                {cat}
                {activeCategory === cat && (
                  <motion.span
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                  />
                )}
              </motion.button>
            ))}
          </div>
        </nav>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className={`group relative overflow-hidden rounded-xl cursor-pointer bg-slate-900 ${project.span}`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101922]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 p-8 md:p-12 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-4">
                    <h3 className="text-white text-2xl md:text-4xl font-bold">{project.title}</h3>
                    <ArrowUpRight className="w-6 h-6 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

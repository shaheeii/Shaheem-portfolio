'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Layout, Sparkles, Megaphone } from 'lucide-react';

const capabilities = [
  {
    icon: Layout,
    title: 'Brand Identity Systems',
    description: 'Comprehensive visual guidelines and logo development.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtGHBA__OhV2cPSYtxpWeFueDqgqb5WTo8cKi0IC6KW0gTno5X1DgNGl7x8BZYyE4itX9ApOfSKhlCDCW0XzW1neH1wR9pDLAl90DM0vp3bnjQuM_dkRRUHM-APU6ha1tGXz4nVZZJBXD1WofloBMxGgNX_OBT0pzvTCLtvcX0n9coPyf0Q3RgejLtk9v4G7It62qRZYAXPuKEQktJdQPTOkg_lTdazWsZNTPuEjVjGRHRT_IH7tG0fpp8jgw6SCSJJdTRWEDcW2Y'
  },
  {
    icon: Sparkles,
    title: 'Visual Communication',
    description: 'Strategic storytelling through high-impact graphic elements.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAK4ZkiGl6w6KeB2IQXOSQ2uAL8pRfvlX8hHPgDWdqhjXV3ZdWsY_djcMoSszytVW21J8A5BM9cRd2KPPmF3V_BM2iqz3spViGk0meg9UybzmfyJgcqboibo7T1_wf-974RRMLjexqj92njq12Cbt-hUWny6dZKP6uyj49Y9ZvqUlcEj51wVNfOII9EvKbXlWE8-NjYY1GFLUHw4a3aKIDoRD29R_YAXC6pQKWaEDZQBvSHVnCV-d1YUsGYP60CbnFKbvzkZa1XZHo'
  },
  {
    icon: Megaphone,
    title: 'Advertising',
    description: 'Conversion-focused creative for digital and print media.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaQtpzGj_eBUkMXth9Sqw3hG9OSvCGNzEc8wgvh8MOJtsI063TMV-4d_xk7_LB0uf2SvWrPXKLjPTZAp5pMsQRTPplRnSlKMeZItmIS7WWi54OKvG1GzY06ooQx-Hm-195mv8kB1HX5J56L4ZI71xbValbIgjY4PpP30Vk7D59sZoRvhAzbilibyf8H4fQ0-lgIxuyJh1qWedJsZ2e_Rvn9EtTERb_2HHVe-lm7soJiiaKxf6ghPeCDuImph24fdSaxvKwbCKAJbY'
  }
];

const timeline = [
  {
    role: 'Founder & Lead Designer',
    company: 'Creopix Designs',
    period: '2023 - Present',
    description: 'Spearheading creative direction for startups, focusing on brand identity and end-to-end design solutions for digital ecosystems.'
  },
  {
    role: 'Graphic Designer',
    company: 'Innosta',
    period: '2021 - 2023',
    description: 'Developed visual assets for marketing campaigns, enhancing brand consistency across multiple social media platforms and print collateral.'
  },
  {
    role: 'Junior Graphic Designer',
    company: 'Lyfads',
    period: '2019 - 2021',
    description: 'Assisted in the creation of advertising layouts and typography systems for regional clients, gaining foundational expertise in Adobe Suite.'
  }
];

export default function Experience() {
  return (
    <section id="services" className="py-24 lg:py-40 px-6 md:px-16 lg:px-40 bg-[#101922]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black leading-tight tracking-tighter text-white mb-8"
          >
            Expertise & <br /><span className="text-primary">Experience</span>
          </motion.h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl font-light">
            A curated showcase of core capabilities and the professional journey of Mohammed Shaheem. Crafting visual identities that leave a lasting impact.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
          {capabilities.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-xl aspect-[4/5] cursor-pointer bg-slate-800"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-primary/40 transition-colors duration-500" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <item.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-white text-2xl font-bold leading-tight mb-2">{item.title}</h3>
                <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-primary/20 -translate-x-1/2" />
          
          {timeline.map((item, index) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative mb-16 md:flex items-center w-full ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className={`md:w-[45%] ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} mb-4 md:mb-0`}>
                <h3 className="text-xl font-bold text-white">{item.role}</h3>
                <p className="text-primary font-medium">{item.company}</p>
                <p className="text-slate-500 text-sm">{item.period}</p>
              </div>
              
              <div className="absolute left-0 md:left-1/2 top-1 md:top-auto size-4 rounded-full border-2 border-primary bg-[#101922] -translate-x-1/2 z-10">
                <div className="absolute inset-1 bg-primary rounded-full" />
              </div>
              
              <div className={`md:w-[45%] ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

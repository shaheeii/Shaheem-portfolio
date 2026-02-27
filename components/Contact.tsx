'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Send } from 'lucide-react';
import Image from 'next/image';

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

export default function Contact() {
  const socials = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/shaheeii' },
    { icon: InstagramIcon, href: 'https://www.instagram.com/shaheeiiiii?igsh=MTMyOXhiYnJnMWFoYg==', color: 'hover:bg-[#E4405F] hover:border-[#E4405F]' },
    { icon: WhatsAppIcon, href: 'https://wa.me/message/NSQV3Y43CRVRN1', color: 'hover:bg-[#25D366] hover:border-[#25D366]' },
    { icon: Github, href: 'https://github.com/shaheeii' },
    { icon: Twitter, href: '#' },
  ];

  return (
    <section id="contact" className="py-24 lg:py-40 px-6 md:px-16 lg:px-40 bg-[#101922]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left Column: Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-primary text-sm font-bold uppercase tracking-widest mb-4">Get in touch</h2>
              <h3 className="text-4xl md:text-5xl font-bold leading-tight mb-8 text-white">Let&apos;s build something extraordinary</h3>
              <p className="text-slate-400 text-lg">
                Currently accepting new projects and collaborations. If you have a vision, let&apos;s bring it to life with precision and style.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">Email Me</p>
                  <a href="mailto:shaheeiipv@gmail.com" className="text-xl font-medium text-white hover:text-primary transition-colors">
                    shaheeiipv@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">Call Me</p>
                  <a href="tel:+919074504969" className="text-xl font-medium text-white hover:text-primary transition-colors">
                    +91 90745 04969
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">Location</p>
                  <p className="text-xl font-medium text-white">Malappuram, India</p>
                </div>
              </div>
            </div>

            <div className="pt-6 flex gap-4">
              {socials.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-lg border border-slate-800 flex items-center justify-center text-slate-300 transition-all hover:scale-105 ${social.color || 'hover:bg-primary hover:text-white hover:border-primary'}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-slate-900/50 border border-slate-800 p-8 md:p-12 rounded-3xl shadow-2xl"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-slate-800/50 border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary text-white placeholder-slate-500"
                  suppressHydrationWarning
                />
              </div>
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-slate-800/50 border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary text-white placeholder-slate-500"
                  suppressHydrationWarning
                />
              </div>
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Project Details</label>
                <textarea
                  placeholder="Tell me about your vision..."
                  rows={5}
                  className="w-full bg-slate-800/50 border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary text-white placeholder-slate-500"
                  suppressHydrationWarning
                />
              </div>
              <motion.button 
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.9, rotate: 1 }}
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-5 rounded-xl transition-all shadow-xl shadow-primary/30 text-lg flex items-center justify-center gap-2 group"
                suppressHydrationWarning
              >
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <p className="text-center text-xs text-slate-500">I usually respond within 24 hours.</p>
            </form>
          </motion.div>
        </div>

        {/* Map Section */}
        <div className="mt-32 rounded-3xl overflow-hidden h-[400px] border border-slate-800 relative group">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqCktYZ-GyVoAtuWshL1YqrUlxkE1YlZlWyNwE2s4506hmv9MozL9wfIinyQgNIdvNaPqc7gFFzAy7s5p45myPM3ZEcQKFun2tvBPU4tah3nWcQUEVrjpIn4LuOU7ED_nzOW9apYKNYWayn9rQEIFr8nWPY7kYGlr3bmbBTjB4yqWZQ3kUuPd2bN6oJnnFzXGn4CXHAf5PI80hVWemOhhnW1HDJRARsNwkZoMqnwGLEStuSA0IB55TWYuEiH25U8aFd015_CE8rCk"
            alt="Map showing Malappuram location"
            fill
            className="object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101922]/80 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative bg-slate-900 p-4 rounded-xl shadow-2xl flex items-center gap-3 border border-slate-700">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-bold text-white">Based in Malappuram</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Philosophy from '@/components/Philosophy';
import Portfolio from '@/components/Portfolio';
import Experience from '@/components/Experience';
import CinematicCTA from '@/components/CinematicCTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Philosophy />
      <Portfolio />
      <Experience />
      <CinematicCTA />
      <Contact />
      <Footer />
    </main>
  );
}

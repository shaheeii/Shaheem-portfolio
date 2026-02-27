import type {Metadata} from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import ClickEffect from '@/components/ClickEffect';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
});

export const metadata: Metadata = {
  title: 'Mohammed Shaheem | Brand Strategy',
  description: 'Premium visual identities that elevate ambitious brands through high-end strategic design.',
  icons: {
    icon: '/profile.png',
    shortcut: '/profile.png',
    apple: '/profile.png',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="dark">
      <body className={`${spaceGrotesk.variable} font-sans bg-[#101922] text-slate-100`} suppressHydrationWarning>
        <ClickEffect />
        {children}
      </body>
    </html>
  );
}

import type {Metadata} from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import ClickEffect from '@/components/ClickEffect';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ais-dev-mxddi5rp2pdqndthvhmej7-443303831755.asia-southeast1.run.app'),
  title: 'Mohammed Shaheem | Designer. Developer. Artist',
  description: 'Premium visual identities that elevate ambitious brands through high-end strategic design.',
  icons: {
    icon: '/profile.ico',
    shortcut: '/profile.ico',
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

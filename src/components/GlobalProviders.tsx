'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function GlobalProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

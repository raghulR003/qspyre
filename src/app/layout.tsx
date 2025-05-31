import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GlobalProviders from '@/components/GlobalProviders';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QSpyre - AI/ML Benchmark Creation & Evaluation Platform",
  description: "Empower researchers, developers, and organizations to quantitatively evaluate any AI/ML model from a unified, bird's-eye perspective. Design, share, and evaluate benchmarks across any AI/ML domain.",
  keywords: ["AI", "ML", "LLM", "benchmarks", "evaluation", "machine learning", "artificial intelligence", "model testing"],
  authors: [{ name: "QSpyre Team" }],
  creator: "QSpyre",
  publisher: "QSpyre",
  robots: "index, follow",
  openGraph: {
    title: "QSpyre - AI/ML Benchmark Creation & Evaluation Platform",
    description: "Design, share, and evaluate benchmarks across any AI/ML domain - from LLMs to vision models and beyond.",
    type: "website",
    locale: "en_US",
    siteName: "QSpyre",
  },
  twitter: {
    card: "summary_large_image",
    title: "QSpyre - AI/ML Benchmark Creation & Evaluation Platform",
    description: "Design, share, and evaluate benchmarks across any AI/ML domain - from LLMs to vision models and beyond.",
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900 transition-colors duration-300`}
      >
        <GlobalProviders>
          {children}
        </GlobalProviders>
      </body>
    </html>
  );
}

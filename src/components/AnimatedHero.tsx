'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { usePerformanceOptimization } from './hooks/usePerformanceOptimization';

export default function AnimatedHero() {
  const [mounted, setMounted] = useState(false);
  const { isSlowDevice, prefersReducedMotion, isMobile } = usePerformanceOptimization();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Reduce animation complexity on slow devices or mobile
  const shouldReduceAnimations = isSlowDevice || prefersReducedMotion || isMobile;
  const animationDuration = shouldReduceAnimations ? 8 : 4;
  return (
    <div className="relative overflow-hidden">
      {/* Background animated shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 dark:bg-blue-400/10 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}          transition={{
            duration: animationDuration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-32 right-20 w-32 h-32 bg-purple-500/10 dark:bg-purple-400/10 rounded-full blur-xl"
          animate={shouldReduceAnimations ? {} : {
            y: [0, 20, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: animationDuration + 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/3 w-24 h-24 bg-green-500/10 dark:bg-green-400/10 rounded-full blur-xl"
          animate={shouldReduceAnimations ? {} : {
            y: [0, -15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: animationDuration + 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* 3D Cube Animation */}
      <motion.div
        className="absolute right-10 top-1/2 transform -translate-y-1/2 hidden lg:block"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="relative w-32 h-32">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500 rounded-xl shadow-2xl"
            animate={{
              rotateX: [0, 360],
              rotateY: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              transformStyle: "preserve-3d",
            }}
          />
          <motion.div
            className="absolute inset-2 bg-gradient-to-tl from-cyan-400 to-blue-500 dark:from-cyan-300 dark:to-blue-400 rounded-lg opacity-80"
            animate={{
              rotateX: [360, 0],
              rotateY: [360, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              transformStyle: "preserve-3d",
            }}
          />
        </div>
      </motion.div>

      {/* Floating Icons */}
      <motion.div
        className="absolute left-1/4 top-1/4 hidden md:block"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center shadow-lg">
          <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
      </motion.div>

      <motion.div
        className="absolute right-1/4 top-3/4 hidden md:block"
        animate={{
          y: [0, 10, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center shadow-lg">          <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
      </motion.div>

      {/* Hero Content */}
      <section className="relative z-10 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Benchmark AI Models with{' '}
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Quantitative Precision
              </motion.span>
            </motion.h1>
            
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              QSpyre empowers researchers, developers, and organizations to design, share, and evaluate 
              benchmarks across any AI/ML domain. From LLMs to computer vision—measure what matters.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a
                href="/get-started"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-colors inline-flex items-center justify-center shadow-lg"
              >
                Get Started Free
                <svg className="ml-2 h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="/demo"
                className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-colors inline-flex items-center justify-center"
              >
                View Demo
                <svg className="ml-2 h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1M9 16v-6a2 2 0 012-2h2a2 2 0 012 2v6M9 16h6M9 16v2a2 2 0 002 2h2a2 2 0 002-2v-2M9 16h6" />
                </svg>
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              className="mt-12 sm:mt-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                Trusted by AI researchers and developers worldwide
              </p>
              <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 opacity-60">
                <div className="text-gray-400 dark:text-gray-500 font-semibold text-sm sm:text-base">
                  🏛️ Academic Research
                </div>
                <div className="text-gray-400 dark:text-gray-500 font-semibold text-sm sm:text-base">
                  🏢 Enterprise Teams
                </div>
                <div className="text-gray-400 dark:text-gray-500 font-semibold text-sm sm:text-base">
                  👨‍💻 Independent Developers
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

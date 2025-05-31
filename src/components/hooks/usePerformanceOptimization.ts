import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  isSlowDevice: boolean;
  prefersReducedMotion: boolean;
  isMobile: boolean;
  connectionSpeed: 'slow' | 'fast' | 'unknown';
}

export function usePerformanceOptimization(): PerformanceMetrics {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    isSlowDevice: false,
    prefersReducedMotion: false,
    isMobile: false,
    connectionSpeed: 'unknown'
  });

  useEffect(() => {
    const checkPerformance = () => {
      // Check if user prefers reduced motion
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      // Detect mobile device
      const isMobile = window.innerWidth <= 768 || /Mobi|Android/i.test(navigator.userAgent);
      
      // Estimate device performance
      let isSlowDevice = false;
      
      // Check hardware concurrency (number of CPU cores)
      if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
        isSlowDevice = true;
      }
        // Check device memory (if available)
      if ('deviceMemory' in navigator && (navigator as Record<string, unknown>).deviceMemory as number < 4) {
        isSlowDevice = true;
      }
      
      // Check connection speed
      let connectionSpeed: 'slow' | 'fast' | 'unknown' = 'unknown';
      if ('connection' in navigator) {
        const connection = (navigator as Record<string, unknown>).connection as Record<string, unknown>;
        if (connection) {
          const effectiveType = connection.effectiveType as string;
          connectionSpeed = ['slow-2g', '2g', '3g'].includes(effectiveType) ? 'slow' : 'fast';
        }
      }
      
      setMetrics({
        isSlowDevice,
        prefersReducedMotion,
        isMobile,
        connectionSpeed
      });
    };

    checkPerformance();

    // Listen for changes in motion preferences
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = () => checkPerformance();
    
    mediaQuery.addEventListener('change', handleChange);
    window.addEventListener('resize', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
      window.removeEventListener('resize', handleChange);
    };
  }, []);

  return metrics;
}

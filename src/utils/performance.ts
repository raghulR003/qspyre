/**
 * Performance monitoring utilities for QSpyre landing page
 */

export interface PerformanceMetrics {
  fcp?: number; // First Contentful Paint
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay
  cls?: number; // Cumulative Layout Shift
  ttfb?: number; // Time to First Byte
}

/**
 * Measures Core Web Vitals and other performance metrics
 */
export function measurePerformance(): Promise<PerformanceMetrics> {
  return new Promise((resolve) => {
    const metrics: PerformanceMetrics = {};

    // Measure Time to First Byte
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation) {
      metrics.ttfb = navigation.responseStart - navigation.requestStart;
    }

    // Use PerformanceObserver for Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        switch (entry.entryType) {
          case 'paint':
            if (entry.name === 'first-contentful-paint') {
              metrics.fcp = entry.startTime;
            }
            break;
          case 'largest-contentful-paint':
            metrics.lcp = entry.startTime;
            break;          case 'first-input':
            metrics.fid = (entry as PerformanceEntry & { processingStart: number }).processingStart - entry.startTime;
            break;
          case 'layout-shift':
            if (!(entry as PerformanceEntry & { hadRecentInput: boolean }).hadRecentInput) {
              metrics.cls = (metrics.cls || 0) + (entry as PerformanceEntry & { value: number }).value;
            }
            break;
        }
      }
    });

    // Observe different entry types
    try {
      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });
    } catch (e) {
      // Fallback for browsers that don't support all entry types
      console.warn('Some performance metrics may not be available:', e);
    }

    // Resolve after a short delay to collect metrics
    setTimeout(() => {
      observer.disconnect();
      resolve(metrics);
    }, 3000);
  });
}

/**
 * Logs performance metrics to console for development
 */
export function logPerformanceMetrics(metrics: PerformanceMetrics) {
  console.group('🚀 QSpyre Performance Metrics');
  
  if (metrics.ttfb) {
    console.log(`⏱️  TTFB: ${metrics.ttfb.toFixed(2)}ms`);
  }
  
  if (metrics.fcp) {
    console.log(`🎨 FCP: ${metrics.fcp.toFixed(2)}ms`);
    if (metrics.fcp < 1800) console.log('✅ Good FCP');
    else if (metrics.fcp < 3000) console.log('⚠️  Needs improvement');
    else console.log('❌ Poor FCP');
  }
  
  if (metrics.lcp) {
    console.log(`🖼️  LCP: ${metrics.lcp.toFixed(2)}ms`);
    if (metrics.lcp < 2500) console.log('✅ Good LCP');
    else if (metrics.lcp < 4000) console.log('⚠️  Needs improvement');
    else console.log('❌ Poor LCP');
  }
  
  if (metrics.fid) {
    console.log(`👆 FID: ${metrics.fid.toFixed(2)}ms`);
    if (metrics.fid < 100) console.log('✅ Good FID');
    else if (metrics.fid < 300) console.log('⚠️  Needs improvement');
    else console.log('❌ Poor FID');
  }
  
  if (metrics.cls !== undefined) {
    console.log(`📐 CLS: ${metrics.cls.toFixed(4)}`);
    if (metrics.cls < 0.1) console.log('✅ Good CLS');
    else if (metrics.cls < 0.25) console.log('⚠️  Needs improvement');
    else console.log('❌ Poor CLS');
  }
  
  console.groupEnd();
}

/**
 * Initialize performance monitoring for development
 */
export function initPerformanceMonitoring() {
  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
    window.addEventListener('load', async () => {
      const metrics = await measurePerformance();
      logPerformanceMetrics(metrics);
    });
  }
}

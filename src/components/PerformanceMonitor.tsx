'use client';

import { useEffect } from 'react';
import { initPerformanceMonitoring } from '@/utils/performance';

export default function PerformanceMonitor() {
  useEffect(() => {
    initPerformanceMonitoring();
  }, []);

  // This component doesn't render anything
  return null;
}

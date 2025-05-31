'use client';

import { useTheme } from './ThemeProvider';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 w-9 h-9 animate-pulse"></div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <MoonIcon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
      ) : (
        <SunIcon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
      )}
    </button>
  );
}

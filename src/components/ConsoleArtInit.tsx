"use client";

import { useEffect } from 'react';
import { showConsoleArt } from '@/utils/consoleArt';

export default function ConsoleArtInit() {
  useEffect(() => {
    // Only runs once on mount in the browser
    showConsoleArt();
  }, []);

  return null;
}

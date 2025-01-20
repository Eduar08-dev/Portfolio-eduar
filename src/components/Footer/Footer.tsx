'use client';

import { useTheme } from "@/contexts/ThemeContext"

export default function Footer() {
  const {theme} = useTheme()
  return (
    <footer className={`mt-auto flex justify-center text-sm text-white items-center shadow-lg ${theme === 'dark' ? 'bg-gradient-to-r from-zinc-900 to-neutral-800' : 'bg-white text-black'}`}>
      © 2024 Your Portfolio
    </footer>
  );
}

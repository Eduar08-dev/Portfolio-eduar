"use client"

import { useEffect } from "react"
import Link from "next/link"
import { useTheme } from "@/contexts/ThemeContext"
import { useLang } from "@/contexts/LangContext"

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const { lang, setLang, t } = useLang();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <div className={`relative overflow-hidden transition-colors duration-300 ${theme === 'dark' ? 'bg-dark-theme' : 'bg-light-theme'}`}>
      {/* Mensaje superior */}
      <div className='text-8xl md:text-9xl font-light tracking-tight my-10 flex justify-center items-center'>
        <h1 className="text-6xl font-bold transition-colors duration-500 ease-in-out">{t.firstWords} <span className={`transition-colors duration-500 ease-in-out ${theme === 'dark' ? 'bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent' : 'bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent'}`}> Eduardo!</span></h1>
      </div>
      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 md:py-24 grid md:grid-cols-2 gap-12 relative z-10">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight">
            {t.welcome}
          </h1>
          <div className="space-y-4 max-w-xl">
            <p>
              {t.intro}
            </p>
            <p>
              {t.passion}
            </p>
          </div>
        </div>

        <div className="space-y-8 flex flex-col items-center">
          <h2 className="text-3xl font-medium">{t.projects}</h2>
          <div className="space-y-4">
            {[
              "Fitness Total",
              "FindTHEM",
            ].map((project) => (
              <Link
                key={project}
                href="#"
                className="block hover:text-yellow-500 transition-colors"
              >
                {project}
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};
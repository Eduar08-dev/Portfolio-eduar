'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { translations } from '../data/translations'

type Language = keyof typeof translations;

interface LangContextType {
  lang: Language
  setLang: (lang: Language) => void
  t: typeof translations.en
}

const LangContext = createContext<LangContextType | undefined>(undefined)

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('en')
  const [isLangLoaded, setIsLangLoaded] = useState(false)

  useEffect(() => {
    const savedLang = localStorage.getItem('lang') as Language
    if (savedLang) {
      setLang(savedLang)
    }
    setIsLangLoaded(true)
  }, [])

  useEffect(() => {
    if (isLangLoaded) {
      localStorage.setItem('lang', lang)
    }
  }, [lang, isLangLoaded])

  const t = translations[lang]

  if (!isLangLoaded) {
    return null; // or a loading spinner
  }

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  const context = useContext(LangContext)
  if (context === undefined) {
    throw new Error('useLang must be used within a LangProvider')
  }
  return context
}
// 'use client'

// import React, { createContext, useContext, useState, useEffect } from 'react'

// type Theme = 'light' | 'dark'

// interface ThemeContextType {
//   theme: Theme
//   toggleTheme: () => void
// }

// const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// export function ThemeProvider({ children }: { children: React.ReactNode }) {
//   const [theme, setTheme] = useState<Theme>('light')
//   const [isThemeLoaded, setIsThemeLoaded] = useState(false)

//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme') as Theme
//     if (savedTheme) {
//       setTheme(savedTheme)
//     }
//     setIsThemeLoaded(true)
//   }, [])

//   useEffect(() => {
//     if (isThemeLoaded) {
//       localStorage.setItem('theme', theme)
//       if (theme === 'dark') {
//         document.documentElement.classList.add('dark')
//       } else {
//         document.documentElement.classList.remove('dark')
//       }
//     }
//   }, [theme, isThemeLoaded])

//   const toggleTheme = () => {
//     setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
//   }

//   if (!isThemeLoaded) {
//     return null; 
//   }

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   )
// }

// export function useTheme() {
//   const context = useContext(ThemeContext)
//   if (context === undefined) {
//     throw new Error('useTheme must be used within a ThemeProvider')
//   }
//   return context
// }

'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    // Carga el tema inicial desde localStorage
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as Theme) || 'light'
    }
    return 'light'
  })

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

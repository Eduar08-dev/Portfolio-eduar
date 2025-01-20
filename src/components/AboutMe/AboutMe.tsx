// 'use client';

// import Image from 'next/image'
// import { useTheme } from '../../contexts/ThemeContext'
// import { useLang } from '../../contexts/LangContext'

// export function AboutMe() {
//   const { theme } = useTheme()
//   const { t } = useLang()

//   return (
//     <section className='py-16'>
//       <div className="container mx-auto px-4">
//         <h2 className='text-3xl font-bold mb-8'>
//           {t.aboutMe}
//         </h2>
//         <div className="flex flex-col md:flex-row items-center gap-8">
//           <div className="w-full md:w-1/3">
//             <Image
//               src="/foto-mia.jpg"
//               alt="Your Name"
//               width={1000}
//               height={1000}
//               className="rounded-lg shadow-lg"
//             />
//           </div>
//           <div className="w-full md:w-2/3">
//             <p className='text-lg leading-relaxed'>
//               {t.briefSummary}
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default AboutMe

// 'use client';

// import Image from 'next/image'
// import { useTheme } from '../../contexts/ThemeContext'
// import { useLang } from '../../contexts/LangContext'

// export function AboutMe() {
//   const { theme } = useTheme()
//   const { t } = useLang()

//   return (
//     <section className='py-16'>
//       <div className="container mx-auto px-4">
//         <h2 className='text-3xl font-bold mb-8'>
//           {t.aboutMe}
//         </h2>
//         <div className="flex flex-col md:flex-row items-center gap-8">
//           <div className="w-full md:w-1/3">
//             <Image
//               src="/foto-mia.jpg"
//               alt="Your Name"
//               width={1000}
//               height={1000}
//               className="rounded-lg shadow-lg"
//             />
//           </div>
//           <div className="w-full md:w-2/3">
//             <p className='text-lg leading-relaxed'>
//               {t.briefSummary}
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default AboutMe

'use client'

import Image from 'next/image'
import { useTheme } from '@/contexts/ThemeContext'
import { useLang } from '@/contexts/LangContext'
import { useEffect, useRef, useState } from 'react'

export default function AboutMe() {
  const { theme } = useTheme()
  const { t } = useLang()
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      {
        threshold: 0.1,
      }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={containerRef}
      className={`
        relative py-16 transition-colors duration-700
        ${theme === 'dark' ? 'text-zinc-100' : 'text-zinc-900'}
        ${!isVisible ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'}
      `}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`
          absolute -top-40 -right-40 w-96 h-96 rounded-full transition-colors duration-700
          ${theme === 'dark' 
            ? 'bg-gradient-to-br from-red-900/20 to-transparent' 
            : 'bg-gradient-to-br from-red-500/10 to-transparent'}
        `} />
        <div className={`
          absolute -bottom-40 -left-40 w-96 h-96 rounded-full transition-colors duration-700
          ${theme === 'dark' 
            ? 'bg-gradient-to-tr from-red-900/20 to-transparent' 
            : 'bg-gradient-to-tr from-red-500/10 to-transparent'}
        `} />
      </div>

      <div className="container mx-auto px-4">
        <h2 className={`
          text-4xl font-bold mb-16 relative inline-block transition-colors duration-700
          before:content-[''] before:absolute before:-bottom-2 before:left-0
          before:w-1/2 before:h-1 before:bg-gradient-to-r
          ${theme === 'dark' 
            ? 'before:from-red-800 before:to-transparent' 
            : 'before:from-red-500 before:to-transparent'}
        `}>
          {t.aboutMe}
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className={`
              absolute inset-0 blur-xl group-hover:blur-2xl transition-all duration-500
              bg-gradient-to-br opacity-50
              ${theme === 'dark' ? 'from-red-900/30 to-transparent' : 'from-red-500/20 to-transparent'}
            `} />
            
            <div className={`
              relative rounded-lg overflow-hidden transition-colors duration-700
              before:content-[''] before:absolute before:inset-0
              before:border-2 before:border-dashed before:rounded-lg
              ${theme === 'dark' 
                ? 'before:border-zinc-800' 
                : 'before:border-zinc-300'}
            `}>
              <div className={`
                relative z-10 rounded-lg overflow-hidden
                transform group-hover:scale-[0.98] transition-transform duration-500
                ${theme === 'dark' 
                  ? 'shadow-2xl shadow-red-900/20' 
                  : 'shadow-xl shadow-red-500/20'}
              `}>
                <Image
                  src="/foto-mia.jpg"
                  alt="Profile picture"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className={`
              absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 rounded-tl-lg
              transition-colors duration-700
              ${theme === 'dark' ? 'border-red-800' : 'border-red-500'}
            `} />
            <div className={`
              absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 rounded-tr-lg
              transition-colors duration-700
              ${theme === 'dark' ? 'border-red-800' : 'border-red-500'}
            `} />
            <div className={`
              absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 rounded-bl-lg
              transition-colors duration-700
              ${theme === 'dark' ? 'border-red-800' : 'border-red-500'}
            `} />
            <div className={`
              absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 rounded-br-lg
              transition-colors duration-700
              ${theme === 'dark' ? 'border-red-800' : 'border-red-500'}
            `} />
          </div>

          <div className={`
            relative p-8 rounded-lg transition-colors duration-700
            before:content-[''] before:absolute before:inset-0
            before:rounded-lg before:backdrop-blur-sm
            ${theme === 'dark' 
              ? 'before:bg-zinc-900/30' 
              : 'before:bg-white/30'}
          `}>
            <div className="relative space-y-6">
              <p className={`
                text-lg leading-relaxed transition-colors duration-700
                ${theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'}
              `}>
                {t.briefSummary}
              </p>
              
              {/* Skills section */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                {['React', 'Next.js', 'TypeScript'].map((skill) => (
                  <div 
                    key={skill}
                    className={`
                      px-4 py-2 rounded-full text-center text-sm
                      transform hover:-translate-y-1 transition-all duration-300
                      ${theme === 'dark' 
                        ? 'bg-zinc-800 text-zinc-300' 
                        : 'bg-zinc-200 text-zinc-700'}
                    `}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


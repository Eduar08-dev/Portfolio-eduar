// 'use client';

// import Link from "next/link";
// import Image from "next/image";
// import { useState } from "react";
// import { useTheme } from "@/contexts/ThemeContext";
// import { useLang } from "@/contexts/LangContext";
// import 'animate.css/animate.min.css';
// import { Github, Linkedin, Instagram} from "lucide-react"

// export default function Navbar () {
//     const { theme, toggleTheme } = useTheme();
//     const { lang, setLang, t } = useLang();
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [redesOpen, setRedesOpen] = useState(false);

//     const handleClickOutside = (e: MouseEvent) => {
//       if (e.target && !(e.target as HTMLElement).classList.contains('navbar')) {
//         setIsMenuOpen(false);
//       }
//     }


//     return (
//       <nav className={`p- flex justify-between items-center shadow-lg ${theme === 'dark' ? 'bg-gradient-to-r from-zinc-900 to-neutral-800' : 'bg-white'}`}>
//       <Link href="/" className="cursor-pointer ml-10">
//       <Image
//         src={theme === 'dark' ? "/logo-dark.png" : "/logo-white.png"}
//         className="cursor-pointer flex items-center"
//         alt="Logo"
//         width={128}
//         height={64}
//         />
//       </Link>
//       <div className="hidden md:flex items-center justify-center gap-10">
//         <Link href="" className="hover:text-yellow-500 transition-colors"><Github /></Link>
//         <Link href="" className="hover:text-yellow-500 transition-colors"><Linkedin /></Link>
//         <Link href="" className="hover:text-yellow-500 transition-colors"><Instagram /></Link>
//       </div>

//       {/* Sidebar for small screens */}
//       <div 
//         className={`fixed z-10 top-0 left-0 h-full w-16 flex flex-col items-center bg-gray-800 text-white shadow-lg ${redesOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}
//         onClick={(e) => {
//           if (e.target === e.currentTarget) {
//         setRedesOpen(false);
//           }
//         }}
//       >
//         <button 
//           className="mt-4 p-2"
//           onClick={() => setRedesOpen(false)}
//           aria-label="Close menu"
//         >
//           <svg 
//         xmlns="http://www.w3.org/2000/svg" 
//         fill="none" 
//         viewBox="0 0 24 24" 
//         strokeWidth={1.5} 
//         stroke="currentColor" 
//         className="w-6 h-6"
//           >
//         <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//           </svg>
//         </button>
//         <Link href="" className="mt-10 hover:text-yellow-500 transition-colors"><Github /></Link>
//         <Link href="" className="mt-10 hover:text-yellow-500 transition-colors"><Linkedin /></Link>
//         <Link href="" className="mt-10 hover:text-yellow-500 transition-colors"><Instagram /></Link>
//       </div>
//       <button 
//         className="p-2 hover:text-yellow-500 transition-colors md:hidden"
//         onClick={() => setRedesOpen(true)}
//         aria-label="Open social media sidebar"
//       >
//         <svg 
//           xmlns="http://www.w3.org/2000/svg" 
//           fill="none" 
//           viewBox="0 0 24 24" 
//           strokeWidth={1.5} 
//           stroke="currentColor" 
//           className="w-6 h-6"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
//         </svg>
//       </button>

//       <div className="flex items-center gap-4">
//         <button 
//           className="p-2 hover:text-yellow-500 transition-colors"
//           onClick={toggleTheme}
//           aria-label={theme === 'dark' ? "Switch to light mode" : "Switch to dark mode"}
//         >
//           {theme === 'dark' ? (
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
//             </svg>
//           ) : (
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
//             </svg>
//           )}
//         </button>
//         <button 
//           className="p-2 hover:text-yellow-500 transition-colors animate__animated animate__pulse"
//           onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
//           aria-label={lang === 'en' ? "Switch to Spanish" : "Switch to English"}
//         >
//           {lang === 'en' ? 'ES' : 'EN'}
//         </button>
//         <button 
//           className="p-2 hover:text-yellow-500 transition-colors"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           aria-label={isMenuOpen ? "Close menu" : "Open menu"}
//         >
//           <svg 
//             xmlns="http://www.w3.org/2000/svg" 
//             fill="none" 
//             viewBox="0 0 24 24" 
//             strokeWidth={1.5} 
//             stroke="currentColor" 
//             className="w-5 h-5"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
//           </svg>
//         </button>
//       </div>

//      {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className={`fixed inset-0 ${theme === 'dark' ? 'bg-black/90' : 'bg-white/90'} z-50 flex items-center justify-center`}>
//           <button 
//             className="absolute top-4 right-4 p-2"
//             onClick={() => setIsMenuOpen(false)}
//             aria-label="Close menu"
//           >
//             <svg 
//               xmlns="http://www.w3.org/2000/svg" 
//               fill="none" 
//               viewBox="0 0 24 24" 
//               strokeWidth={1.5} 
//               stroke="currentColor" 
//               className="w-6 h-6"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
//           <nav className="flex flex-col items-center gap-8 text-xl">
//             <Link href="#" className="hover:text-yellow-500 transition-colors">{t.home}</Link>
//             <Link href="#" className="hover:text-yellow-500 transition-colors">{t.projects}</Link>
//             <Link href="#" className="hover:text-yellow-500 transition-colors">{t.about}</Link>
//             <Link href="#" className="hover:text-yellow-500 transition-colors">{t.contact}</Link>
//           </nav>
//         </div>
//       )}
//     </nav>
//     )
// };

'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { useLang } from "@/contexts/LangContext";
import 'animate.css/animate.min.css';
import { Github, Linkedin, Instagram } from "lucide-react";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { lang, setLang, t } = useLang();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [redesOpen, setRedesOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const redesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
      if (redesRef.current && !redesRef.current.contains(e.target as Node)) {
        setRedesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={`p-4 flex justify-between items-center shadow-lg ${
        theme === 'dark'
          ? 'bg-gradient-to-r from-zinc-900 to-neutral-800'
          : 'bg-white'
      }`}
    >
      {/* Logo */}
      <Link href="/" className="cursor-pointer ml-4">
        <Image
          src={theme === 'dark' ? '/logo-dark.png' : '/logo-white.png'}
          alt="Logo"
          width={128}
          height={64}
        />
      </Link>

      {/* Desktop Social Links */}
      <div className="hidden md:flex items-center gap-10">
        <Link href="#" className="hover:text-yellow-500 transition-colors">
          <Github />
        </Link>
        <Link href="#" className="hover:text-yellow-500 transition-colors">
          <Linkedin />
        </Link>
        <Link href="#" className="hover:text-yellow-500 transition-colors">
          <Instagram />
        </Link>
      </div>

      {/* Mobile Social Button */}
      <button
        className="fixed right-4 top-1/2 transform -translate-y-1/2 p-2 hover:text-yellow-500 transition-colors z-50 md:hidden"
        onClick={() => setRedesOpen(!redesOpen)}
        aria-label="Open social links"
      >
        <span className="sr-only">Open social links</span>
        
       <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-messages-square"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z"/><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/></svg>
      </button>

      {/* Sidebar for Social Links */}
      <div
  ref={redesRef}
  className={`fixed top-0 right-0 h-full w-40 bg-gray-800 text-white shadow-lg transform ${
    redesOpen ? 'translate-x-0' : 'translate-x-full'
  } transition-transform duration-300 ease-in-out md:hidden z-50`}
>
  <button
    className="absolute top-4 left-4"
    onClick={() => setRedesOpen(false)}
    aria-label="Close social links"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </button>
  <div className="flex flex-col items-center gap-8 mt-20">
    <Link href="#" className="hover:text-yellow-500 transition-colors p-2">
      <Github className="w-6 h-6" />
    </Link>
    <Link href="#" className="hover:text-yellow-500 transition-colors p-2">
      <Linkedin className="w-6 h-6" />
    </Link>
    <Link href="https://www.instagram.com" className="hover:text-yellow-500 transition-colors p-2">
      <Instagram className="w-6 h-6" />
    </Link>
  </div>
</div>


      {/* Theme and Language Switch */}
      <div className="flex items-center gap-4">
        <button
          className="p-2 hover:text-yellow-500 transition-colors"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
          )}
        </button>
        <button
          className="p-2 hover:text-yellow-500 transition-colors animate__animated animate__pulse z-0"
          onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
        >
          {lang === 'en' ? 'ES' : 'EN'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className={`fixed inset-0 ${
            theme === 'dark' ? 'bg-black/90' : 'bg-white/90'
          } z-50 flex items-center justify-center`}
        >
          <button
            className="absolute top-4 right-4 p-2"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <nav className="flex flex-col items-center gap-8 text-xl">
            <Link href="#" className="hover:text-yellow-500 transition-colors">
              {t.home}
            </Link>
            <Link href="#" className="hover:text-yellow-500 transition-colors">
              {t.projects}
            </Link>
            <Link href="#" className="hover:text-yellow-500 transition-colors">
              {t.about}
            </Link>
            <Link href="#" className="hover:text-yellow-500 transition-colors">
              {t.contact}
            </Link>
          </nav>
        </div>
      )}
    </nav>
  );
}

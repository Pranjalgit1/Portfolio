// The sticky navigation bar pinned to the top of every page. It's transparent
// over the Hero section and gains a blurred background + border once
// the user scrolls down, so it stays readable over any content.
import { useEffect, useState } from 'react'
import { navLinks } from '../data/portfolioData'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false) // true once the page has scrolled a bit
  const [menuOpen, setMenuOpen] = useState(false) // controls the mobile hamburger menu

  // Listens to the window's scroll position to toggle the "scrolled" style.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll) // cleanup on unmount
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 shadow-soft'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Site name / logo. Links to #top (the Hero section's id). */}
        <a href="#top" className="font-semibold tracking-tight text-neutral-900 dark:text-white">
          Pranjal Chamoli
        </a>

        <div className="flex items-center gap-6">
          {/* Desktop nav links — hidden on small screens (see "hidden md:flex"). */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Light/dark mode switch — visible at all screen sizes */}
          <ThemeToggle />

          {/* Hamburger button — only shown on small screens ("md:hidden"). */}
          <button
            className="md:hidden p-2 -mr-2 text-neutral-700 dark:text-neutral-300"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {/* Swaps between an X icon (menu open) and a hamburger icon (menu closed) */}
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu — only rendered when menuOpen is true. */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
          <ul className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)} // close the menu after tapping a link
                  className="text-sm text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

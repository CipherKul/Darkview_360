import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS, WHATSAPP } from '../data/constants'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-blue-500/20 shadow-lg shadow-blue-900/30'
          : 'bg-black/40 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src="/logo.jpeg"
            alt="Darkview 360°"
            className="h-10 md:h-12 w-auto rounded-md ring-1 ring-blue-500/30 shadow-md shadow-blue-900/40 group-hover:ring-blue-400/60 transition"
          />
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `text-sm font-medium relative group transition ${
                    isActive ? 'text-sky-400' : 'text-slate-300 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-sky-400 transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <a
          href={WHATSAPP.link}
          target="_blank"
          rel="noreferrer"
          className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-sky-500 text-white text-sm font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/60 hover:scale-105 transition"
        >
          Get a Quote
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 text-slate-200"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-blue-500/20 shadow-xl">
          <ul className="px-4 py-4 space-y-1">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) =>
                    `block py-2.5 px-3 rounded-lg font-medium transition ${
                      isActive
                        ? 'bg-blue-500/15 text-sky-400'
                        : 'text-slate-300 hover:bg-white/5'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={WHATSAPP.link}
                target="_blank"
                rel="noreferrer"
                className="block text-center px-5 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-sky-500 text-white font-semibold"
              >
                Get a Quote
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

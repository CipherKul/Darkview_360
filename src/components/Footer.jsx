import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
import { BRAND, NAV_LINKS, SERVICES } from '../data/constants'

const SOCIALS = [
  {
    name: 'Facebook',
    href: '#',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: '#',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <rect width="20" height="20" x="2" y="2" rx="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: '#',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: '#',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-200 bg-gradient-to-b from-slate-100 to-slate-200/60">
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-50" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="inline-block">
              <div className="rounded-xl bg-black ring-1 ring-blue-500/30 shadow-md shadow-blue-200/50 overflow-hidden">
                <img
                  src="/logo-banner.jpeg"
                  alt="Darkview 360°"
                  className="h-14 md:h-16 w-auto"
                />
              </div>
            </Link>
            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
              Live Monitoring · Virtual Guard · Real Security. Smart
              surveillance solutions trusted by homes and businesses across
              Rajasthan.
            </p>
            <div className="flex gap-3 mt-5">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="w-9 h-9 rounded-lg bg-white border border-slate-200 grid place-items-center text-slate-500 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50 transition"
                >
                  {s.svg}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-slate-900 font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-slate-600 hover:text-blue-600 transition">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-semibold mb-4">Services</h4>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.title}>
                  <Link to="/services" className="text-sm text-slate-600 hover:text-blue-600 transition">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-blue-600 flex-shrink-0" />
                <span>{BRAND.addressFull}</span>
              </li>
              <li>
                <a href={`tel:${BRAND.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-blue-600 transition">
                  <Phone className="w-4 h-4 text-blue-600" />
                  {BRAND.phone}
                </a>
              </li>
              <li>
                <a href={`tel:${BRAND.phone2.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-blue-600 transition">
                  <Phone className="w-4 h-4 text-blue-600" />
                  {BRAND.phone2}
                </a>
              </li>
              <li>
                <a href={`mailto:${BRAND.email}`} className="flex items-center gap-2 hover:text-blue-600 transition">
                  <Mail className="w-4 h-4 text-blue-600" />
                  {BRAND.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-blue-600 transition">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600 transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

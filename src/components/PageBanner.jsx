import { Link } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'

export default function PageBanner({ title, highlight, subtitle, breadcrumb }) {
  return (
    <section className="relative pt-24 md:pt-28 pb-10 md:pb-14 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/3 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/25 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <nav className="flex items-center justify-center gap-1.5 text-xs text-slate-400 mb-3">
          <Link to="/" className="flex items-center gap-1 hover:text-sky-400 transition">
            <Home className="w-3.5 h-3.5" />
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-white font-medium">{breadcrumb || `${title} ${highlight || ''}`.trim()}</span>
        </nav>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
          {title}{' '}
          {highlight && (
            <span className="bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-300 bg-clip-text text-transparent">
              {highlight}
            </span>
          )}
        </h1>

        {subtitle && (
          <p className="mt-3 text-base md:text-lg text-slate-400 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}

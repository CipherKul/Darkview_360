import { Link } from 'react-router-dom'
import { Check, ArrowRight } from 'lucide-react'
import { SERVICES } from '../data/constants'

export default function Services({ hideHeader = false }) {
  return (
    <section className={`${hideHeader ? 'pt-8 pb-20 md:pt-10 md:pb-24' : 'py-20 md:py-28'} relative bg-slate-50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!hideHeader && (
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-block px-3 py-1 rounded-full bg-cyan-100 border border-cyan-200 text-cyan-700 text-xs font-semibold tracking-wider uppercase mb-4">
              Our Services
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Complete protection,{' '}
              <span className="bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text text-transparent">
                every angle covered.
              </span>
            </h2>
            <p className="mt-4 text-slate-600 text-lg">
              Four pillars of security designed to work together — keeping you
              safe round the clock.
            </p>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="group relative rounded-2xl bg-white border border-slate-200 overflow-hidden hover:border-slate-300 hover:shadow-2xl hover:shadow-slate-200/60 hover:-translate-y-1 transition-all duration-500"
            >
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${s.color} opacity-60 mix-blend-multiply`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className={`absolute top-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} grid place-items-center shadow-lg ring-4 ring-white/30`}>
                  <s.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white drop-shadow-lg">{s.title}</h3>
              </div>

              <div className="p-6 md:p-7">
                <p className="text-slate-600 leading-relaxed mb-5">{s.desc}</p>

                <ul className="grid grid-cols-2 gap-2 mb-6">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                      <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-violet-600 hover:text-violet-700 transition group/link"
                >
                  Get a quote
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Quote, Star } from 'lucide-react'
import { TESTIMONIALS } from '../data/constants'

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-block px-3 py-1 rounded-full bg-amber-100 border border-amber-200 text-amber-700 text-xs font-semibold tracking-wider uppercase mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Loved by{' '}
            <span className="bg-gradient-to-r from-amber-500 to-rose-500 bg-clip-text text-transparent">
              500+ clients.
            </span>
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            Real stories from the people we protect every day.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="group relative p-6 md:p-8 rounded-2xl bg-white border border-slate-200 hover:border-amber-300 hover:shadow-xl hover:shadow-amber-100/40 transition-all duration-300 flex flex-col"
            >
              <Quote className="w-10 h-10 text-amber-300 mb-4" />

              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-slate-700 leading-relaxed flex-1 italic">
                "{t.quote}"
              </p>

              <div className="mt-6 pt-6 border-t border-slate-200 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-cyan-500 to-violet-600 grid place-items-center text-white font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-slate-900 font-semibold">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

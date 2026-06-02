import { Mail } from 'lucide-react'
import { TEAM } from '../data/constants'

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
  </svg>
)

export default function Team({ hideHeader = false }) {
  return (
    <section className={`${hideHeader ? 'pt-8 pb-20 md:pt-10 md:pb-24' : 'py-20 md:py-28'} relative bg-white`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!hideHeader && (
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-block px-3 py-1 rounded-full bg-rose-100 border border-rose-200 text-rose-700 text-xs font-semibold tracking-wider uppercase mb-4">
              Our Team
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Meet the people{' '}
              <span className="bg-gradient-to-r from-rose-500 to-violet-600 bg-clip-text text-transparent">
                behind your safety.
              </span>
            </h2>
            <p className="mt-4 text-slate-600 text-lg">
              Experienced engineers, operators, and advisors working 24/7 to
              keep you protected.
            </p>
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {TEAM.map((m) => (
            <div
              key={m.name}
              className="group rounded-2xl bg-white border border-slate-200 overflow-hidden hover:border-violet-300 hover:shadow-xl hover:shadow-violet-100/50 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={m.photo}
                  alt={m.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/0 to-transparent opacity-0 group-hover:opacity-100 transition" />

                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300">
                  <a
                    href="#"
                    aria-label={`${m.name} on LinkedIn`}
                    className="w-9 h-9 rounded-lg bg-white/95 backdrop-blur grid place-items-center text-violet-600 hover:bg-white shadow-lg transition"
                  >
                    <LinkedInIcon />
                  </a>
                  <a
                    href="#"
                    aria-label={`Email ${m.name}`}
                    className="w-9 h-9 rounded-lg bg-white/95 backdrop-blur grid place-items-center text-violet-600 hover:bg-white shadow-lg transition"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="p-4 text-center">
                <h3 className="font-semibold text-slate-900">{m.name}</h3>
                <p className="text-xs md:text-sm text-slate-500 mt-0.5">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

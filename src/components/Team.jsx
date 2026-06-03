import { Mail } from 'lucide-react'
import { TEAM } from '../data/constants'

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
  </svg>
)

const initials = (name) =>
  name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

export default function Team({ hideHeader = false }) {
  return (
    <section className={`${hideHeader ? 'pt-8 pb-20 md:pt-10 md:pb-24' : 'py-20 md:py-28'} relative`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!hideHeader && (
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-block px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-semibold tracking-wider uppercase mb-4">
              Our Team
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Meet the people{' '}
              <span className="bg-gradient-to-r from-rose-400 to-sky-400 bg-clip-text text-transparent">
                behind your safety.
              </span>
            </h2>
            <p className="mt-4 text-slate-400 text-lg">
              Experienced engineers, operators, and advisors working 24/7 to
              keep you protected.
            </p>
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {TEAM.map((m) => (
            <div
              key={m.name}
              className="group rounded-2xl bg-slate-900/60 border border-white/10 p-6 text-center hover:border-sky-400/50 hover:shadow-xl hover:shadow-blue-900/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative mx-auto mb-4 w-24 h-24 md:w-28 md:h-28">
                <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${m.gradient} blur-xl opacity-50 group-hover:opacity-80 transition`} />
                <div className={`relative w-full h-full rounded-full bg-gradient-to-br ${m.gradient} grid place-items-center text-white text-2xl md:text-3xl font-bold shadow-xl ring-4 ring-slate-900 group-hover:scale-105 transition`}>
                  {initials(m.name)}
                </div>
              </div>

              <h3 className="font-semibold text-white">{m.name}</h3>
              <p className="text-xs md:text-sm text-slate-400 mt-0.5">{m.role}</p>

              <div className="flex justify-center gap-2 mt-4 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition duration-300">
                <a
                  href="#"
                  aria-label={`${m.name} on LinkedIn`}
                  className="w-8 h-8 rounded-lg bg-white/5 grid place-items-center text-sky-400 hover:bg-sky-500/20 transition"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href="#"
                  aria-label={`Email ${m.name}`}
                  className="w-8 h-8 rounded-lg bg-white/5 grid place-items-center text-sky-400 hover:bg-sky-500/20 transition"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Target, Zap, Award, Clock, Play } from 'lucide-react'
import { BRAND, IMAGES } from '../data/constants'

const POINTS = [
  { icon: Target, title: 'Mission Driven', desc: 'Innovative security solutions for a safe and connected society.' },
  { icon: Zap, title: 'AI-Powered', desc: 'Computer vision and analytics that get smarter every day.' },
  { icon: Award, title: 'Proven Track Record', desc: 'Trusted by 500+ businesses and homes across Rajasthan.' },
  { icon: Clock, title: 'Always On', desc: '24/7 trained operators monitoring your premises in real time.' },
]

export default function About({ hideHeader = false }) {
  return (
    <section className={`${hideHeader ? 'pt-8 pb-20 md:pt-10 md:pb-24' : 'py-20 md:py-28'} relative`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/40 ring-1 ring-blue-500/20">
              <img
                src={IMAGES.about}
                alt="Security operations center"
                loading="lazy"
                className="w-full h-[420px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
            </div>

            <div className="hidden md:flex absolute -bottom-6 -right-6 px-5 py-4 rounded-2xl bg-slate-900 border border-blue-500/30 shadow-xl shadow-blue-900/50 items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 grid place-items-center text-white">
                <Play className="w-5 h-5" fill="currentColor" />
              </div>
              <div>
                <div className="text-xs text-slate-400">Live Operations</div>
                <div className="text-sm font-semibold text-white">24/7 Monitoring</div>
              </div>
            </div>

            <img
              src={IMAGES.aboutSecondary}
              alt="Secured building"
              loading="lazy"
              className="hidden lg:block absolute -top-6 -left-6 w-40 h-32 object-cover rounded-2xl border-4 border-slate-900 shadow-xl ring-1 ring-blue-500/30"
            />
          </div>

          <div>
            {!hideHeader && (
              <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-sky-300 text-xs font-semibold tracking-wider uppercase mb-4">
                About {BRAND.name}
              </div>
            )}
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Securing tomorrow,{' '}
              <span className="bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-300 bg-clip-text text-transparent">
                today.
              </span>
            </h2>
            <p className="mt-6 text-slate-400 text-lg leading-relaxed">
              {BRAND.name} is a Kota-based security innovator delivering
              next-generation surveillance and virtual guard services. We combine
              cutting-edge AI, trained human operators, and reliable hardware to
              protect what matters most — without the cost or limitations of
              traditional security guards.
            </p>
            <p className="mt-4 text-slate-400 leading-relaxed">
              From small homes to large industrial facilities, our 360°
              monitoring approach ensures zero blind spots and instant response,
              backed by a team that genuinely cares about your safety.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {['Licensed Operators', 'ISO Certified', '99.9% Uptime', 'Local Support'].map((t) => (
                <span key={t} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {POINTS.map((p) => (
                <div
                  key={p.title}
                  className="group p-4 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-900/40 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-sky-400/20 grid place-items-center mb-3 group-hover:scale-110 transition">
                    <p.icon className="w-5 h-5 text-sky-400" />
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-0.5">{p.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

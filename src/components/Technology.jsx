import { TECH_FEATURES } from '../data/constants'

export default function Technology({ hideHeader = false }) {
  return (
    <section className={`${hideHeader ? 'pt-8 pb-20 md:pt-10 md:pb-24' : 'py-20 md:py-28'} relative`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!hideHeader && (
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-block px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-700 text-xs font-semibold tracking-wider uppercase mb-4">
              Our Technology
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Powered by{' '}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                intelligent automation.
              </span>
            </h2>
            <p className="mt-4 text-slate-600 text-lg">
              Cutting-edge tech stack that combines AI, IoT, and human expertise.
            </p>
          </div>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TECH_FEATURES.map((f) => (
            <div
              key={f.title}
              className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-100/50 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-100 grid place-items-center mb-4 group-hover:bg-gradient-to-br group-hover:from-cyan-100 group-hover:to-blue-100 transition">
                <f.icon className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{f.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

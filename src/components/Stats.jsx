import { STATS } from '../data/constants'

export default function Stats() {
  return (
    <section className="py-16 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 p-8 md:p-12 relative overflow-hidden shadow-2xl shadow-blue-500/30 ring-1 ring-blue-400/30">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/20 rounded-full blur-3xl" />

          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
                  {s.value}
                </div>
                <div className="mt-2 text-sm md:text-base text-white/90 font-medium">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

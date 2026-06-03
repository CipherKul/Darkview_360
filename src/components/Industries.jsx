import { INDUSTRIES } from '../data/constants'

export default function Industries({ detailed = false, hideHeader = false }) {
  return (
    <section className={`${hideHeader ? 'pt-8 pb-20 md:pt-10 md:pb-24' : 'py-20 md:py-28'} relative bg-gradient-to-b from-slate-100/70 via-white/40 to-slate-100/70`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!hideHeader && (
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-block px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold tracking-wider uppercase mb-4">
              Industries We Serve
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Trusted across{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-sky-500 bg-clip-text text-transparent">
                every sector.
              </span>
            </h2>
            <p className="mt-4 text-slate-600 text-lg">
              Tailored security for every kind of space — big or small.
            </p>
          </div>
        )}

        {detailed ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {INDUSTRIES.map((ind) => (
              <div
                key={ind.label}
                className="group rounded-2xl bg-white border border-slate-200 overflow-hidden hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/40 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={ind.image}
                    alt={ind.label}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />
                  <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-white/95 backdrop-blur grid place-items-center shadow-lg">
                    <ind.icon className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">{ind.label}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{ind.desc}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {INDUSTRIES.map((ind) => (
              <div
                key={ind.label}
                className="group relative aspect-square rounded-2xl overflow-hidden border border-slate-200 cursor-pointer hover:scale-[1.03] hover:shadow-xl hover:shadow-blue-100 transition-all duration-300"
              >
                <img
                  src={ind.image}
                  alt={ind.label}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/40 to-slate-900/10" />
                <div className="relative h-full flex flex-col items-center justify-end p-4 gap-2">
                  <div className="w-11 h-11 rounded-xl bg-white/95 backdrop-blur grid place-items-center shadow-lg">
                    <ind.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-sm md:text-base font-semibold text-white text-center drop-shadow-md">{ind.label}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

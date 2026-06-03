import { ArrowRight, Phone, MessageCircle } from 'lucide-react'
import { BRAND, WHATSAPP } from '../data/constants'

export default function CTA() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950 p-10 md:p-14 text-center relative overflow-hidden shadow-2xl shadow-blue-900/40 border border-blue-500/20">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-sky-500/30 rounded-full blur-3xl" />

          <div className="relative">
            <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Protect what matters most.
            </h3>
            <p className="mt-3 text-slate-300 text-lg max-w-2xl mx-auto">
              Free site assessment and a personalized security plan from our
              experts in Kota.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={WHATSAPP.link}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-emerald-500 text-white font-semibold hover:bg-emerald-600 hover:scale-105 shadow-lg shadow-emerald-500/30 transition"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </a>
              <a
                href={`tel:${BRAND.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 transition"
              >
                <Phone className="w-4 h-4" />
                {BRAND.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { useEffect, useState } from 'react'
import { Phone, Mail, MapPin, Send, MessageCircle, Clock, CheckCircle2, X } from 'lucide-react'
import { BRAND, WHATSAPP } from '../data/constants'

export default function Contact({ hideHeader = false }) {
  const [sent, setSent] = useState(false)
  const [name, setName] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    const submittedName = e.target.elements.fullName?.value?.trim() || ''
    setName(submittedName)
    setSent(true)
    e.target.reset()
  }

  useEffect(() => {
    if (!sent) return
    const onKey = (e) => e.key === 'Escape' && setSent(false)
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [sent])

  const info = [
    { icon: Phone, label: 'Phone', value: BRAND.phone, href: `tel:${BRAND.phone.replace(/\s/g, '')}` },
    { icon: Phone, label: 'Phone (Alt)', value: BRAND.phone2, href: `tel:${BRAND.phone2.replace(/\s/g, '')}` },
    { icon: Mail, label: 'Email', value: BRAND.email, href: `mailto:${BRAND.email}` },
    { icon: MapPin, label: 'Address', value: BRAND.addressFull },
    { icon: Clock, label: 'Open', value: '24 / 7 · Always available' },
  ]

  return (
    <section className={`${hideHeader ? 'pt-8 pb-20 md:pt-10 md:pb-24' : 'py-20 md:py-28'} relative bg-gradient-to-b from-slate-100/70 via-white/40 to-slate-100/70`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!hideHeader && (
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold tracking-wider uppercase mb-4">
              Get in Touch
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Ready to feel{' '}
              <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                safer?
              </span>
            </h2>
            <p className="mt-4 text-slate-600 text-lg">
              Talk to our security advisors today — free consultation, no
              obligation.
            </p>
          </div>
        )}

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {info.map((i) => {
              const Inner = (
                <>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-sky-100 grid place-items-center flex-shrink-0">
                    <i.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider">{i.label}</div>
                    <div className="text-slate-900 font-medium mt-0.5">{i.value}</div>
                  </div>
                </>
              )
              return i.href ? (
                <a
                  key={i.label}
                  href={i.href}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md transition"
                >
                  {Inner}
                </a>
              ) : (
                <div key={i.label} className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-200">
                  {Inner}
                </div>
              )
            })}

            <a
              href={WHATSAPP.link}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full p-4 rounded-2xl bg-emerald-500 text-white font-semibold hover:bg-emerald-600 shadow-lg shadow-emerald-200 transition"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp · {BRAND.phone}
            </a>
            <a
              href={WHATSAPP.link2}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full p-4 rounded-2xl bg-emerald-500/90 text-white font-semibold hover:bg-emerald-600 shadow-lg shadow-emerald-200 transition"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp · {BRAND.phone2}
            </a>
          </div>

          <form
            onSubmit={onSubmit}
            className="lg:col-span-3 p-6 md:p-8 rounded-2xl bg-white border border-slate-200 shadow-lg shadow-slate-100"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-slate-700 mb-1.5 block font-medium">Full Name</label>
                <input
                  required
                  name="fullName"
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 focus:bg-white transition"
                />
              </div>
              <div>
                <label className="text-sm text-slate-700 mb-1.5 block font-medium">Phone</label>
                <input
                  required
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 focus:bg-white transition"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="text-sm text-slate-700 mb-1.5 block font-medium">Email</label>
              <input
                required
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 focus:bg-white transition"
              />
            </div>

            <div className="mt-4">
              <label className="text-sm text-slate-700 mb-1.5 block font-medium">Service Interested In</label>
              <select className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 focus:bg-white transition">
                <option>Complete Security</option>
                <option>Live Monitoring</option>
                <option>Virtual Guard</option>
                <option>Alarm Monitoring</option>
                <option>Custom Solution</option>
              </select>
            </div>

            <div className="mt-4">
              <label className="text-sm text-slate-700 mb-1.5 block font-medium">Message</label>
              <textarea
                rows="4"
                placeholder="Tell us about your security needs..."
                className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 focus:bg-white transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-to-r from-blue-600 to-sky-500 text-white font-semibold shadow-xl shadow-blue-300/50 hover:shadow-blue-400/60 hover:scale-[1.02] transition"
            >
              Send Message
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      {sent && (
        <div
          className="fixed inset-0 z-[100] grid place-items-center p-4 bg-slate-900/60 backdrop-blur-sm animate-[fadeIn_.2s_ease-out]"
          onClick={() => setSent(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="thanks-title"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-2xl bg-white shadow-2xl ring-1 ring-slate-200 p-8 text-center animate-[popIn_.25s_cubic-bezier(.34,1.56,.64,1)]"
          >
            <button
              onClick={() => setSent(false)}
              aria-label="Close"
              className="absolute top-3 right-3 w-9 h-9 rounded-lg grid place-items-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative mx-auto w-20 h-20 mb-5">
              <div className="absolute inset-0 rounded-full bg-emerald-400/30 blur-2xl" />
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 grid place-items-center shadow-lg shadow-emerald-300/50">
                <CheckCircle2 className="w-10 h-10 text-white" strokeWidth={2.5} />
              </div>
            </div>

            <h3 id="thanks-title" className="text-2xl md:text-3xl font-bold text-slate-900">
              Thank you{name ? `, ${name.split(' ')[0]}` : ''}!
            </h3>
            <p className="mt-3 text-slate-600 leading-relaxed">
              We've received your message. Our team at {BRAND.name} will get
              back to you within 24 hours.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={WHATSAPP.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp us now
              </a>
              <button
                onClick={() => setSent(false)}
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-slate-100 text-slate-700 font-semibold hover:bg-slate-200 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

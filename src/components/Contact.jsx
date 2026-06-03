import { useState } from 'react'
import { Phone, Mail, MapPin, Send, MessageCircle, Clock } from 'lucide-react'
import { BRAND, WHATSAPP } from '../data/constants'

export default function Contact({ hideHeader = false }) {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    e.target.reset()
  }

  const info = [
    { icon: Phone, label: 'Phone', value: BRAND.phone, href: `tel:${BRAND.phone.replace(/\s/g, '')}` },
    { icon: Mail, label: 'Email', value: BRAND.email, href: `mailto:${BRAND.email}` },
    { icon: MapPin, label: 'Address', value: BRAND.addressFull },
    { icon: Clock, label: 'Open', value: '24 / 7 · Always available' },
  ]

  return (
    <section className={`${hideHeader ? 'pt-8 pb-20 md:pt-10 md:pb-24' : 'py-20 md:py-28'} relative`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!hideHeader && (
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-sky-300 text-xs font-semibold tracking-wider uppercase mb-4">
              Get in Touch
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Ready to feel{' '}
              <span className="bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent">
                safer?
              </span>
            </h2>
            <p className="mt-4 text-slate-400 text-lg">
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
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-sky-400/20 grid place-items-center flex-shrink-0">
                    <i.icon className="w-5 h-5 text-sky-400" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider">{i.label}</div>
                    <div className="text-white font-medium mt-0.5">{i.value}</div>
                  </div>
                </>
              )
              return i.href ? (
                <a
                  key={i.label}
                  href={i.href}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-sky-400/40 transition"
                >
                  {Inner}
                </a>
              ) : (
                <div key={i.label} className="flex items-center gap-4 p-5 rounded-2xl bg-slate-900/60 border border-white/10">
                  {Inner}
                </div>
              )
            })}

            <a
              href={WHATSAPP.link}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full p-4 rounded-2xl bg-emerald-500 text-white font-semibold hover:bg-emerald-600 shadow-lg shadow-emerald-900/40 transition"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>

          <form
            onSubmit={onSubmit}
            className="lg:col-span-3 p-6 md:p-8 rounded-2xl bg-slate-900/60 border border-white/10 shadow-xl shadow-blue-900/20"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-slate-300 mb-1.5 block font-medium">Full Name</label>
                <input
                  required
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg bg-slate-950/60 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-sky-400/60 focus:ring-2 focus:ring-sky-400/20 transition"
                />
              </div>
              <div>
                <label className="text-sm text-slate-300 mb-1.5 block font-medium">Phone</label>
                <input
                  required
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 rounded-lg bg-slate-950/60 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-sky-400/60 focus:ring-2 focus:ring-sky-400/20 transition"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="text-sm text-slate-300 mb-1.5 block font-medium">Email</label>
              <input
                required
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg bg-slate-950/60 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-sky-400/60 focus:ring-2 focus:ring-sky-400/20 transition"
              />
            </div>

            <div className="mt-4">
              <label className="text-sm text-slate-300 mb-1.5 block font-medium">Service Interested In</label>
              <select className="w-full px-4 py-3 rounded-lg bg-slate-950/60 border border-white/10 text-white focus:outline-none focus:border-sky-400/60 focus:ring-2 focus:ring-sky-400/20 transition">
                <option>Complete Security</option>
                <option>Live Monitoring</option>
                <option>Virtual Guard</option>
                <option>Alarm Monitoring</option>
                <option>Custom Solution</option>
              </select>
            </div>

            <div className="mt-4">
              <label className="text-sm text-slate-300 mb-1.5 block font-medium">Message</label>
              <textarea
                rows="4"
                placeholder="Tell us about your security needs..."
                className="w-full px-4 py-3 rounded-lg bg-slate-950/60 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-sky-400/60 focus:ring-2 focus:ring-sky-400/20 transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-to-r from-blue-600 to-sky-500 text-white font-semibold shadow-xl shadow-blue-500/30 hover:shadow-blue-500/60 hover:scale-[1.02] transition"
            >
              {sent ? (
                'Message Sent ✓'
              ) : (
                <>
                  Send Message
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

import { Link } from 'react-router-dom'
import { ArrowRight, Play, ShieldCheck, Maximize2 } from 'lucide-react'
import { BRAND, IMAGES, WHATSAPP } from '../data/constants'

const CAMERA_FEEDS = [
  { label: 'Entrance', tag: 'CAM 02', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=70&auto=format&fit=crop' },
  { label: 'Parking', tag: 'CAM 03', img: 'https://images.unsplash.com/photo-1486006920555-c77dcf18193c?w=400&q=70&auto=format&fit=crop' },
  { label: 'Warehouse', tag: 'CAM 04', img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=400&q=70&auto=format&fit=crop' },
  { label: 'Perimeter', tag: 'CAM 05', img: 'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?w=400&q=70&auto=format&fit=crop' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-24 md:pt-28 pb-16 overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src="/logo.jpeg"
          alt=""
          aria-hidden="true"
          style={{ filter: 'brightness(1.4) contrast(1.2)' }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[75vmin] max-w-[750px] opacity-60 pointer-events-none select-none mix-blend-screen"
        />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 -right-32 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-blue-500/30 text-xs md:text-sm text-slate-300 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            24/7 Live Monitoring · Based in Kota, Rajasthan
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
            <span className="bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
              DARKVIEW
            </span>{' '}
            <span className="bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-300 bg-clip-text text-transparent">
              360°
            </span>
          </h1>
          <p className="mt-3 text-base md:text-lg font-medium text-slate-300 tracking-wide">
            Live Monitoring <span className="text-sky-400">·</span> Virtual Guard <span className="text-sky-400">·</span> Real Security
          </p>

          <p className="mt-6 text-lg md:text-xl text-slate-400 max-w-xl mx-auto lg:mx-0">
            {BRAND.name} delivers AI-powered surveillance, virtual guard services,
            and real-time alarm monitoring — protecting homes, offices, and
            industries across India with zero blind spots.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href={WHATSAPP.link}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-to-r from-blue-600 to-sky-500 text-white font-semibold shadow-xl shadow-blue-500/30 hover:shadow-blue-500/60 hover:scale-105 transition"
            >
              Chat on WhatsApp
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </a>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/5 border border-white/10 text-slate-100 font-semibold hover:bg-white/10 hover:border-blue-400/50 transition"
            >
              <Play className="w-4 h-4" />
              Explore Services
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
            {[
              { v: '500+', l: 'Clients' },
              { v: '10K+', l: 'Cameras' },
              { v: '24/7', l: 'Monitoring' },
            ].map((s) => (
              <div key={s.l} className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">{s.v}</div>
                <div className="text-xs md:text-sm text-slate-500">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-square max-w-lg mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-sky-400/30 rounded-3xl blur-2xl" />

            <img
              src={IMAGES.heroBg}
              alt=""
              aria-hidden="true"
              loading="eager"
              className="absolute -top-6 -left-6 w-44 h-32 md:w-56 md:h-40 object-cover rounded-2xl border-2 border-blue-500/40 shadow-xl shadow-blue-900/40 rotate-[-6deg] hidden sm:block"
            />
            <img
              src={IMAGES.about}
              alt=""
              aria-hidden="true"
              loading="eager"
              className="absolute -bottom-8 -left-10 w-40 h-28 md:w-52 md:h-36 object-cover rounded-2xl border-2 border-sky-500/40 shadow-xl shadow-blue-900/40 rotate-[5deg] hidden md:block"
            />

            <div className="relative h-full rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/95 to-slate-950/80 backdrop-blur-xl p-8 shadow-2xl shadow-blue-900/40">
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-sky-400 to-transparent animate-pulse" />
              </div>

              <div className="h-full flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                    <span className="text-xs font-mono text-slate-400">LIVE · CAM 01</span>
                  </div>
                  <div className="text-xs font-mono text-slate-400">REC ●</div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {CAMERA_FEEDS.map((cam) => (
                    <div
                      key={cam.tag}
                      className="relative aspect-video rounded-lg overflow-hidden border border-white/10 group hover:border-sky-400/60 transition cursor-pointer"
                    >
                      <img
                        src={cam.img}
                        alt={cam.label}
                        loading="eager"
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                      <div className="absolute top-1.5 left-1.5 flex items-center gap-1 px-1.5 py-0.5 rounded bg-black/50 backdrop-blur-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                        <span className="text-[9px] font-bold text-white tracking-wider">LIVE</span>
                      </div>
                      <div className="absolute top-1.5 right-1.5 text-[9px] font-mono text-white/90 bg-black/40 backdrop-blur-sm px-1.5 py-0.5 rounded">
                        {cam.tag}
                      </div>

                      <div className="absolute bottom-1.5 left-1.5 right-1.5 flex items-center justify-between">
                        <span className="text-[10px] font-semibold text-white drop-shadow">{cam.label}</span>
                        <Maximize2 className="w-3 h-3 text-white/80 opacity-0 group-hover:opacity-100 transition" />
                      </div>

                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-sky-400/10" />
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono text-slate-400">
                    <span>System Status</span>
                    <span className="text-emerald-400">● ONLINE</span>
                  </div>
                  <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full w-[92%] bg-gradient-to-r from-blue-500 to-sky-400 rounded-full" />
                  </div>
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>AI Detection</span>
                    <span>92% confidence</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 px-4 py-3 rounded-xl bg-slate-900/95 border border-blue-500/30 shadow-xl shadow-blue-900/40 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 grid place-items-center">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">All Secure</div>
                  <div className="text-sm font-semibold text-white">No Threats</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

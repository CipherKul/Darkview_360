import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="min-h-screen pt-32 pb-16 grid place-items-center bg-gradient-to-b from-blue-50 to-white">
      <div className="text-center px-4">
        <div className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
          404
        </div>
        <h1 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">
          Page not found
        </h1>
        <p className="mt-3 text-slate-600 max-w-md mx-auto">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-sky-500 text-white font-semibold shadow-lg shadow-blue-300/50 hover:scale-105 transition"
          >
            <Home className="w-4 h-4" /> Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 transition"
          >
            <ArrowLeft className="w-4 h-4" /> Go Back
          </button>
        </div>
      </div>
    </section>
  )
}

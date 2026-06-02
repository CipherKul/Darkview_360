import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-violet-200 selection:text-violet-900">
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

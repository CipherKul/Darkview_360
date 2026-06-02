import PageBanner from '../components/PageBanner'
import About from '../components/About'
import Stats from '../components/Stats'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="About"
        highlight="Darkview_360"
        subtitle="Kota-based security innovators redefining safety with AI, smart hardware, and a 24/7 human touch."
      />
      <About hideHeader />
      <Stats />
      <Testimonials />
      <CTA />
    </>
  )
}

import PageBanner from '../components/PageBanner'
import Services from '../components/Services'
import Technology from '../components/Technology'
import CTA from '../components/CTA'

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        title="Our"
        highlight="Services"
        subtitle="Four pillars of security designed to work together — keeping you safe round the clock."
      />
      <Services hideHeader />
      <Technology />
      <CTA />
    </>
  )
}

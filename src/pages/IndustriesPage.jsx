import PageBanner from '../components/PageBanner'
import Industries from '../components/Industries'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'

export default function IndustriesPage() {
  return (
    <>
      <PageBanner
        title="Industries"
        highlight="We Serve"
        subtitle="Tailored security for every kind of space — from homes to factories, hospitals to schools."
      />
      <Industries detailed hideHeader />
      <Testimonials />
      <CTA />
    </>
  )
}

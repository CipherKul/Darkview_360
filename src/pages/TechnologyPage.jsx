import PageBanner from '../components/PageBanner'
import Technology from '../components/Technology'
import Stats from '../components/Stats'
import CTA from '../components/CTA'

export default function TechnologyPage() {
  return (
    <>
      <PageBanner
        title="Our"
        highlight="Technology"
        subtitle="Cutting-edge AI, IoT, and human expertise — engineered for accuracy and speed."
      />
      <Technology hideHeader />
      <Stats />
      <CTA />
    </>
  )
}

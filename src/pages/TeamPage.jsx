import PageBanner from '../components/PageBanner'
import Team from '../components/Team'
import CTA from '../components/CTA'

export default function TeamPage() {
  return (
    <>
      <PageBanner
        title="Our"
        highlight="Team"
        subtitle="Experienced engineers, operators, and advisors working 24/7 to keep you protected."
      />
      <Team hideHeader />
      <CTA />
    </>
  )
}

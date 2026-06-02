import PageBanner from '../components/PageBanner'
import Contact from '../components/Contact'

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title="Get in"
        highlight="Touch"
        subtitle="Talk to our security advisors today — free consultation, no obligation."
      />
      <Contact hideHeader />
    </>
  )
}

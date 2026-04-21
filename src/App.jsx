import Header from './components/Header'
import CampaignBanner from './components/CampaignBanner'
import Hero from './components/Hero'
import Problems from './components/Problems'
import Future from './components/Future'
import TrustBand from './components/TrustBand'
import Benefits from './components/Benefits'
import SocialProof from './components/SocialProof'
import Steps from './components/Steps'
import Curriculum from './components/Curriculum'
import LatestRelease from './components/LatestRelease'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import StickyCTA from './components/StickyCTA'
import GoogleAnalytics from './components/GoogleAnalytics'

function App() {
  // 環境変数からGoogle Analytics設定を取得
  const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  const enableAnalytics = import.meta.env.VITE_ENABLE_ANALYTICS === 'true';

  return (
    <div className="min-h-screen">
      <CampaignBanner />
      <Header />
      {/* Google Analytics */}
      {enableAnalytics && gaId && <GoogleAnalytics measurementId={gaId} />}

      <Hero />
      <Problems />
      <Benefits />
      <SocialProof />
      <Steps />
      <TrustBand />
      <Curriculum />
      <LatestRelease />
      <Future />
      <Testimonials />
      <Pricing />
      <CTA variant="primary" />
      <FAQ />
      <CTA variant="secondary" />
      <Footer />
      <StickyCTA />
    </div>
  )
}

export default App

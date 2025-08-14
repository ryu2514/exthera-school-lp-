import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Curriculum from './components/Curriculum'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import GoogleAnalytics from './components/GoogleAnalytics'

function App() {
  // 環境変数からGoogle Analytics設定を取得
  const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  const enableAnalytics = import.meta.env.VITE_ENABLE_ANALYTICS === 'true';

  return (
    <div className="min-h-screen">
      {/* Google Analytics */}
      {enableAnalytics && gaId && <GoogleAnalytics measurementId={gaId} />}
      
      <Hero />
      <Benefits />
      <Curriculum />
      <Testimonials />
      <Pricing />
      <CTA variant="primary" />
      <FAQ />
      <CTA variant="secondary" />
      <Footer />
    </div>
  )
}

export default App

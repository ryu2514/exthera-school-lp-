import Hero from './components/Hero'
import Benefits from './components/Benefits'
import SocialProof from './components/SocialProof'
import Curriculum from './components/Curriculum'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Benefits />
      <SocialProof />
      <Curriculum />
      <Pricing />
      <CTA variant="primary" />
      <FAQ />
      <CTA variant="secondary" />
      <Footer />
    </div>
  )
}

export default App

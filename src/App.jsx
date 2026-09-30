import { useState } from 'react'
import IntroGateway from './components/IntroGateway.jsx'
import Navigation from './components/Navigation.jsx'
import Hero from './components/Hero.jsx'
import Manifesto from './components/Manifesto.jsx'
import Programs from './components/Programs.jsx'
import Events from './components/Events.jsx'
import People from './components/People.jsx'
import ContactFooter from './components/ContactFooter.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import { useScrollReveal } from './hooks/useScrollReveal.js'

function App() {
  const [showIntro, setShowIntro] = useState(() => window.sessionStorage.getItem('voe-intro-seen') !== 'true')
  useScrollReveal()

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      {showIntro && <IntroGateway onComplete={() => setShowIntro(false)} />}
      <ScrollProgress />
      <Navigation />
      <main id="main-content">
        <Hero />
        <Manifesto />
        <Programs />
        <Events />
        <People />
        <ContactFooter />
      </main>
    </>
  )
}

export default App

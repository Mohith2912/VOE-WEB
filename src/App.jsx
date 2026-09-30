import { useState } from 'react'
import IntroGateway from './components/IntroGateway.jsx'
import Navigation from './components/Navigation.jsx'
import Hero from './components/Hero.jsx'
import Manifesto from './components/Manifesto.jsx'
import Programs from './components/Programs.jsx'
import Events from './components/Events.jsx'

function App() {
  const [showIntro, setShowIntro] = useState(() => window.sessionStorage.getItem('voe-intro-seen') !== 'true')

  return (
    <>
      {showIntro && <IntroGateway onComplete={() => setShowIntro(false)} />}
      <Navigation />
      <main>
        <Hero />
        <Manifesto />
        <Programs />
        <Events />
      </main>
    </>
  )
}

export default App

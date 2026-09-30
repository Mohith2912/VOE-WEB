import { useState } from 'react'
import IntroGateway from './components/IntroGateway.jsx'
import Navigation from './components/Navigation.jsx'
import Hero from './components/Hero.jsx'

function App() {
  const [showIntro, setShowIntro] = useState(() => window.sessionStorage.getItem('voe-intro-seen') !== 'true')

  return (
    <>
      {showIntro && <IntroGateway onComplete={() => setShowIntro(false)} />}
      <Navigation />
      <main>
        <Hero />
      </main>
    </>
  )
}

export default App

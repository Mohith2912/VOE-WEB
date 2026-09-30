import { useState } from 'react'
import IntroGateway from './components/IntroGateway.jsx'

function App() {
  const [showIntro, setShowIntro] = useState(() => window.sessionStorage.getItem('voe-intro-seen') !== 'true')

  return (
    <>
      {showIntro && <IntroGateway onComplete={() => setShowIntro(false)} />}
      <main className="site-shell">
        <p className="eyebrow">VOE / SIGNAL STUDIO</p>
        <h1>A new voice is tuning in.</h1>
      </main>
    </>
  )
}

export default App

import { useRef, useState } from 'react'
import { ArrowUpRight, Volume2, VolumeX } from 'lucide-react'
import './IntroGateway.css'

function IntroGateway({ onComplete }) {
  const videoRef = useRef(null)
  const [muted, setMuted] = useState(true)
  const [progress, setProgress] = useState(0)
  const [leaving, setLeaving] = useState(false)

  const finish = () => {
    if (leaving) return
    setLeaving(true)
    window.sessionStorage.setItem('voe-intro-seen', 'true')
    window.setTimeout(onComplete, 650)
  }

  const toggleSound = () => {
    const nextMuted = !muted
    setMuted(nextMuted)
    if (videoRef.current) videoRef.current.muted = nextMuted
  }

  const updateProgress = (event) => {
    const video = event.currentTarget
    if (Number.isFinite(video.duration) && video.duration > 0) {
      setProgress((video.currentTime / video.duration) * 100)
    }
  }

  return (
    <section className={`intro-gateway ${leaving ? 'is-leaving' : ''}`} aria-label="VOE introduction">
      <video
        ref={videoRef}
        className="intro-film"
        autoPlay
        playsInline
        muted
        poster="/media/voe-intro-poster.webp"
        onTimeUpdate={updateProgress}
        onEnded={finish}
      >
        <source src="/media/voe-intro.mp4" type="video/mp4" />
      </video>

      <div className="intro-wash" aria-hidden="true" />
      <div className="intro-grain" aria-hidden="true" />

      <div className="intro-topline">
        <span>VOICE OF EASWARIANS</span>
        <span>EST. 2026 · CHENNAI</span>
      </div>

      <div className="intro-message">
        <span className="intro-kicker">CAMPUS FREQUENCY 01</span>
        <h1>Every voice<br /><em>changes</em> the room.</h1>
      </div>

      <div className="intro-controls">
        <button className="intro-sound" type="button" onClick={toggleSound} aria-label={muted ? 'Turn intro sound on' : 'Mute intro'}>
          {muted ? <VolumeX size={17} /> : <Volume2 size={17} />}
          <span>{muted ? 'Sound off' : 'Sound on'}</span>
        </button>
        <button className="intro-enter" type="button" onClick={finish}>
          Enter VOE <ArrowUpRight size={18} />
        </button>
      </div>

      <div className="intro-progress" aria-hidden="true">
        <span style={{ width: `${progress}%` }} />
      </div>
    </section>
  )
}

export default IntroGateway


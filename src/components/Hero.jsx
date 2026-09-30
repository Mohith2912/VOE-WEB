import { ArrowDown, ArrowUpRight, Asterisk } from 'lucide-react'

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid" aria-hidden="true" />

      <div className="hero-status">
        <span className="live-dot" />
        Broadcasting from Easwari Engineering College
      </div>

      <div className="hero-copy">
        <p className="section-index">01 — THE CAMPUS FREQUENCY</p>
        <h1>
          <span>Say it.</span>
          <span className="serif-line">Make it.</span>
          <span>Move it.</span>
        </h1>
        <p className="hero-deck">A student-run culture lab for stories, skills and ideas that deserve a bigger stage.</p>
        <div className="hero-actions">
          <a className="button button-acid" href="#programs">Explore the signal <ArrowUpRight size={19} /></a>
          <a className="text-link" href="#manifesto">Read our manifesto <ArrowDown size={17} /></a>
        </div>
      </div>

      <div className="hero-orbit" aria-hidden="true">
        <span className="orbit-copy">YOUR VOICE · OUR CAMPUS · ONE COMMUNITY · </span>
        <div className="orbit-core">
          <img src="/brand/voe-seal.png" alt="" />
        </div>
        <Asterisk className="orbit-star" size={36} />
      </div>

      <div className="hero-meta">
        <div><strong>04</strong><span>Creative<br />programs</span></div>
        <div><strong>∞</strong><span>Ways to<br />be heard</span></div>
        <div><strong>01</strong><span>Connected<br />campus</span></div>
      </div>

      <a className="scroll-cue" href="#manifesto" aria-label="Scroll to manifesto"><ArrowDown size={18} /></a>
    </section>
  )
}

export default Hero


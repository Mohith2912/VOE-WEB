import { useState } from 'react'
import { ArrowRight, ArrowUpRight, CalendarDays, Play, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading.jsx'
import StoryModal from '../components/StoryModal.jsx'
import { leadership, pillars, site } from '../data/siteData.js'
import { usePageMeta } from '../hooks/usePageMeta.js'

function HomePage() {
  const [storyOpen, setStoryOpen] = useState(false)
  usePageMeta('Voice of Easwarians', 'VOE is the student-led creative community of Easwari Engineering College—built for stories, skills, collaboration and campus culture.')

  return (
    <>
      <section className="home-hero" id="top">
        <div className="hero-grid container">
          <div className="hero-copy">
            <p className="eyebrow">VOICE OF EASWARIANS · RAMAPURAM, CHENNAI</p>
            <h1>The campus has something <em>to say.</em></h1>
            <p>{site.mission}</p>
            <div className="hero-actions">
              <Link className="button button-primary" to="/join">Join VOE <ArrowUpRight aria-hidden="true" /></Link>
              <button className="button button-secondary" type="button" onClick={() => setStoryOpen(true)}><Play aria-hidden="true" />Watch our story</button>
            </div>
          </div>
          <div className="hero-art" aria-label="Voice of Easwarians identity">
            <div className="hero-art-frame"><img src="/brand/voe-seal.webp" width="640" height="640" alt="Voice of Easwarians club seal" /></div>
            <span className="hero-art-label">YOUR VOICE · OUR CAMPUS · ONE COMMUNITY</span>
            <span className="hero-art-index">VOE / 01</span>
          </div>
        </div>
        <div className="hero-proof container" aria-label="VOE structure">
          <div><strong>04</strong><span>Creative tracks</span></div>
          <div><strong>05</strong><span>Collaborative teams</span></div>
          <div><strong>01</strong><span>Campus community</span></div>
        </div>
      </section>

      <section className="statement section">
        <div className="container statement-grid">
          <p className="eyebrow">WHY VOE EXISTS</p>
          <div><h2>Ideas become more powerful when students have the space to shape and share them.</h2><p>VOE brings creators, communicators, organizers and technologists together to make meaningful work for the Easwarian community.</p><Link className="text-link" to="/about">Understand our purpose <ArrowRight aria-hidden="true" /></Link></div>
        </div>
      </section>

      <section className="section surface-section">
        <div className="container">
          <SectionHeading eyebrow="WHAT WE DO" title="Choose a way to contribute." description="Start with what interests you. Learn alongside people from other departments and build something useful together." />
          <div className="pillar-grid">
            {pillars.map(({ icon: Icon, title, label, description }, index) => (
              <article className="pillar-card" key={title}>
                <div className="card-top"><span>0{index + 1}</span><Icon aria-hidden="true" /></div>
                <p className="eyebrow">{label}</p><h3>{title}</h3><p>{description}</p>
              </article>
            ))}
          </div>
          <Link className="button button-secondary section-action" to="/wings">Explore all wings <ArrowRight aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="section event-feature">
        <div className="container event-feature-grid">
          <div><p className="eyebrow">EVENTS CALENDAR</p><h2>What happens next should be worth showing up for.</h2></div>
          <article className="empty-event-card">
            <CalendarDays aria-hidden="true" /><p className="eyebrow">CALENDAR UPDATE</p><h3>New dates are being confirmed.</h3><p>We publish events only after the date, venue and participation details are verified. Follow VOE for the next official announcement.</p>
            <div className="card-actions"><Link className="text-link" to="/events">Explore event formats <ArrowRight aria-hidden="true" /></Link><a className="text-link" href={site.instagram} target="_blank" rel="noreferrer">Follow Instagram <ArrowUpRight aria-hidden="true" /></a></div>
          </article>
        </div>
      </section>

      <section className="section leadership-preview">
        <div className="container">
          <SectionHeading eyebrow="PEOPLE BEHIND VOE" title="Student-led. Faculty-guided. Built together." description="Meet the current leadership listed by the club and explore the teams that keep VOE moving." />
          <div className="leadership-cards">
            {leadership.map((person) => <article key={person.role}><p className="eyebrow">{person.role}</p><h3>{person.name}</h3><span>{person.department}</span></article>)}
          </div>
          <Link className="button button-secondary section-action" to="/team"><Users aria-hidden="true" />Meet the full team</Link>
        </div>
      </section>

      <section className="home-cta section">
        <div className="container home-cta-inner"><p className="eyebrow">YOUR NEXT MOVE</p><h2>Bring your curiosity. We’ll help you put it to work.</h2><Link className="button button-on-accent" to="/join">Express interest <ArrowUpRight aria-hidden="true" /></Link></div>
      </section>

      <StoryModal open={storyOpen} onClose={() => setStoryOpen(false)} />
    </>
  )
}

export default HomePage

import { ArrowUpRight, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { crews, pillars } from '../data/siteData.js'
import { usePageMeta } from '../hooks/usePageMeta.js'

function WingsPage() {
  usePageMeta('Wings', 'Explore VOE creative tracks and the five student teams responsible for content, direction, outreach, events and technology.')
  return (
    <>
      <PageHero eyebrow="WINGS + TEAMS" title="Different strengths. " accent="One shared voice." description="VOE is designed for cross-disciplinary work. Creative tracks describe what we make; teams describe how we organise and deliver it." />

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="CREATIVE TRACKS" title="Choose what you want to practise." description="You can arrive with experience or simply with the willingness to learn and contribute." />
          <div className="track-list">
            {pillars.map(({ icon: Icon, title, label, description }, index) => (
              <article key={title}><span className="track-number">0{index + 1}</span><Icon aria-hidden="true" /><div><p className="eyebrow">{label}</p><h3>{title}</h3><p>{description}</p></div></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section surface-section">
        <div className="container">
          <SectionHeading eyebrow="WORKING TEAMS" title="Five teams keep ideas moving." description="Each team has a distinct responsibility, but strong VOE projects are built across team boundaries." />
          <div className="wing-grid">
            {crews.map(({ name, icon: Icon, leads, members }, index) => (
              <article className="wing-card" key={name}><div className="card-top"><span>0{index + 1}</span><Icon aria-hidden="true" /></div><h3>{name}</h3><p><strong>Team lead{leads.length > 1 ? 's' : ''}:</strong> {leads.map((lead) => lead.split(' — ')[0]).join(', ')}</p><span>{members.length} listed members</span></article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-cta section"><div className="container"><Users aria-hidden="true" /><h2>You do not have to know your perfect role yet.</h2><p>Tell the team what interests you and what you would like to learn.</p><Link className="button button-primary" to="/join">Express interest <ArrowUpRight aria-hidden="true" /></Link></div></section>
    </>
  )
}

export default WingsPage

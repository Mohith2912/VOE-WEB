import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { crews, leadership } from '../data/siteData.js'
import { usePageMeta } from '../hooks/usePageMeta.js'

function TeamPage() {
  usePageMeta('Team', 'Meet the faculty guide, student leadership and working teams behind Voice of Easwarians at Easwari Engineering College.')
  return (
    <>
      <PageHero eyebrow="OUR TEAM" title="The people who turn " accent="ideas into action." description="VOE is supported by faculty guidance and powered by students working across content, direction, outreach, events and technology." />

      <section className="section leadership-section">
        <div className="container">
          <SectionHeading eyebrow="LEADERSHIP" title="Guidance and student responsibility." />
          <div className="leadership-grid-full">
            {leadership.map((person, index) => <article key={person.role}><span>0{index + 1}</span><div><p className="eyebrow">{person.role}</p><h3>{person.name}</h3><p>{person.department}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="section surface-section">
        <div className="container">
          <SectionHeading eyebrow="WORKING TEAMS" title="Meet the current roster." description="Names and departments are presented from the club’s existing team records." />
          <div className="team-accordions">
            {crews.map(({ name, icon: Icon, leads, members }, index) => (
              <details key={name}>
                <summary><span>0{index + 1}</span><Icon aria-hidden="true" /><strong>{name}</strong><span className="summary-hint">View team</span></summary>
                <div className="team-details"><div><p className="eyebrow">TEAM LEAD{leads.length > 1 ? 'S' : ''}</p>{leads.map((lead) => <p key={lead}>{lead}</p>)}</div><div><p className="eyebrow">MEMBERS</p><ul>{members.map((member) => <li key={member}>{member}</li>)}</ul></div></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="page-cta section"><div className="container"><h2>Your name could be part of what VOE builds next.</h2><Link className="button button-primary" to="/join">Explore joining VOE <ArrowUpRight aria-hidden="true" /></Link></div></section>
    </>
  )
}

export default TeamPage


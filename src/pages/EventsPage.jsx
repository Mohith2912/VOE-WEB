import { ArrowUpRight, CalendarClock, CalendarDays, Lightbulb } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { eventFormats, events, site } from '../data/siteData.js'
import { usePageMeta } from '../hooks/usePageMeta.js'

function EventsPage() {
  usePageMeta('Events', 'Find official Voice of Easwarians event updates and explore the conversations, workshops and showcase formats VOE develops on campus.')
  return (
    <>
      <PageHero eyebrow="EVENTS" title="Show up curious. " accent="Leave with momentum." description="VOE events create useful spaces for students to learn, share work, exchange ideas and practise a stronger public voice." />

      <section className="section events-calendar">
        <div className="container">
          <SectionHeading eyebrow="UPCOMING" title="Official event calendar" description="Dates appear here only after the venue, timing and participation details are confirmed." />
          {events.length === 0 ? (
            <div className="honest-empty-state">
              <CalendarClock aria-hidden="true" /><div><p className="eyebrow">NO VERIFIED DATES PUBLISHED</p><h3>The next VOE event is being confirmed.</h3><p>Follow the official Instagram page for announcements, or contact the team if you want to propose an event or collaboration.</p><div className="card-actions"><a className="button button-primary" href={site.instagram} target="_blank" rel="noreferrer">Follow @voe.eec <ArrowUpRight aria-hidden="true" /></a><Link className="button button-secondary" to="/contact">Pitch an idea</Link></div></div>
            </div>
          ) : null}
        </div>
      </section>

      <section className="section surface-section">
        <div className="container">
          <SectionHeading eyebrow="EVENT FORMATS" title="Built for participation, not passive attendance." description="These are the kinds of experiences VOE is equipped to create. They are not scheduled events until published above." />
          <div className="format-grid">
            {eventFormats.map((format, index) => <article key={format.title}><span>0{index + 1}</span><CalendarDays aria-hidden="true" /><h3>{format.title}</h3><p>{format.description}</p></article>)}
          </div>
        </div>
      </section>

      <section className="page-cta section"><div className="container"><Lightbulb aria-hidden="true" /><h2>Have an idea the campus should experience?</h2><p>Share the purpose, audience and format. The VOE team can respond with current possibilities.</p><Link className="button button-primary" to="/contact">Start a conversation <ArrowUpRight aria-hidden="true" /></Link></div></section>
    </>
  )
}

export default EventsPage


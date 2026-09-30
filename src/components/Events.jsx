import { ArrowRight, CalendarDays } from 'lucide-react'
import { events } from '../data/content.js'

function Events() {
  return (
    <section className="events" id="events">
      <div className="events-side reveal">
        <p className="section-index dark">04 — WHAT'S ON</p>
        <h2>Catch the<br /><em>next signal.</em></h2>
        <p>Live formats for unfinished ideas, first attempts and conversations that continue long after the room empties.</p>
        <a className="button button-dark" href="#contact">Pitch an event <ArrowRight size={18} /></a>
      </div>

      <div className="event-list">
        {events.map((event) => (
          <article className="event-row reveal" key={event.number}>
            <span className="event-number">{event.number}</span>
            <div className="event-copy">
              <span>{event.type}</span>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
            <div className="event-status"><CalendarDays size={17} /><span>{event.status}</span></div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Events


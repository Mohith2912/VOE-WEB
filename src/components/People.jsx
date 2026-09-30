import { Plus } from 'lucide-react'
import { crews, leadership } from '../data/content.js'

function People() {
  return (
    <section className="people" id="people">
      <div className="people-heading reveal">
        <p className="section-index">05 — THE PEOPLE</p>
        <h2>Made by many.<br /><em>Owned by everyone.</em></h2>
      </div>

      <div className="leadership-grid">
        {leadership.map((person, index) => (
          <article className="leader-card reveal" key={person.role}>
            <span>0{index + 1}</span>
            <p>{person.role}</p>
            <h3>{person.name}</h3>
            <small>{person.department}</small>
          </article>
        ))}
      </div>

      <div className="crew-list">
        {crews.map((crew, index) => (
          <details className="crew-row reveal" key={crew.name}>
            <summary>
              <span>0{index + 1}</span>
              <h3>{crew.name}</h3>
              <Plus aria-hidden="true" />
            </summary>
            <div className="crew-body">
              <p><span>TEAM LEAD</span>{crew.leads}</p>
              <p><span>CREW</span>{crew.members}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}

export default People


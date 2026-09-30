import { ArrowUpRight } from 'lucide-react'
import { programs } from '../data/content.js'

function Programs() {
  return (
    <section className="programs" id="programs">
      <div className="programs-heading reveal">
        <div>
          <p className="section-index">03 — FIND YOUR FREQUENCY</p>
          <h2>Four ways<br />to get <em>in.</em></h2>
        </div>
        <p>You do not need a polished portfolio. Bring curiosity, consistency and the nerve to try something new.</p>
      </div>

      <div className="program-stack">
        {programs.map(({ code, title, label, icon: Icon, description, color }) => (
          <article className={`program-card program-${color} reveal`} key={code}>
            <div className="program-code">{code}</div>
            <Icon className="program-icon" size={52} strokeWidth={1.25} />
            <div className="program-body">
              <span>{label}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
            <a href="#contact" aria-label={`Join ${title}`}><ArrowUpRight /></a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Programs


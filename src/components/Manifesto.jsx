import { AudioLines, Flame, Sparkles, Users } from 'lucide-react'

const principles = [
  { number: '01', icon: AudioLines, title: 'Speak clearly', copy: 'We turn campus thoughts into stories people can feel, share and act on.' },
  { number: '02', icon: Sparkles, title: 'Make boldly', copy: 'We experiment in public—through media, design, performance and technology.' },
  { number: '03', icon: Users, title: 'Grow together', copy: 'No gatekeeping. Skills move faster when the whole room learns out loud.' },
]

function Manifesto() {
  return (
    <section className="manifesto" id="manifesto">
      <div className="ticker" aria-hidden="true">
        <div>
          VOICE <Flame /> CULTURE <Flame /> CREATIVITY <Flame /> COMMUNITY <Flame /> VOICE <Flame /> CULTURE <Flame /> CREATIVITY <Flame /> COMMUNITY <Flame />
        </div>
      </div>

      <div className="manifesto-intro reveal">
        <p className="section-index dark">02 — WHY WE EXIST</p>
        <p className="manifesto-note">Not another club noticeboard.</p>
        <h2>We build the room<br />where <em>ideas get loud.</em></h2>
      </div>

      <div className="manifesto-grid">
        <aside className="manifesto-aside reveal">
          <span>THE SHORT VERSION</span>
          <p>VOE is the creative pulse of Easwari—part media house, part learning lab, part stage.</p>
          <img src="/brand/eec-logo.png" alt="Easwari Engineering College" />
        </aside>

        <div className="principle-list">
          {principles.map(({ number, icon: Icon, title, copy }) => (
            <article className="principle reveal" key={number}>
              <div className="principle-top"><span>{number}</span><Icon size={26} strokeWidth={1.5} /></div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="manifesto-pullquote reveal">
        <span>OUR PROMISE</span>
        <blockquote>“Leave the campus more expressive than we found it.”</blockquote>
      </div>
    </section>
  )
}

export default Manifesto


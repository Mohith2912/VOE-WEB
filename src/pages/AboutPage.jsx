import { ArrowRight, Compass, Eye, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { site, values } from '../data/siteData.js'
import { usePageMeta } from '../hooks/usePageMeta.js'

function AboutPage() {
  usePageMeta('About', 'Learn why Voice of Easwarians exists, how the student-led community works and the values that guide every VOE project.')
  return (
    <>
      <PageHero eyebrow="ABOUT VOE" title="A campus community built to " accent="express, make and grow." description="VOE connects students across disciplines through storytelling, creative practice, public expression, events and collaborative projects." />

      <section className="section split-section">
        <div className="container split-grid">
          <p className="eyebrow">OUR ROLE ON CAMPUS</p>
          <div className="prose-large"><p>{site.mission}</p><p>We create structured opportunities for students to practise communication, take creative responsibility and contribute to a more connected campus culture.</p></div>
        </div>
      </section>

      <section className="section surface-section">
        <div className="container">
          <SectionHeading eyebrow="MISSION + VISION" title="Create confidently. Contribute meaningfully." />
          <div className="mission-grid">
            <article><Compass aria-hidden="true" /><p className="eyebrow">MISSION</p><h3>Help students turn curiosity into useful creative work.</h3><p>VOE makes room for experimentation, peer learning and projects that strengthen the Easwarian community.</p></article>
            <article><Eye aria-hidden="true" /><p className="eyebrow">VISION</p><h3>A campus where more students feel ready to speak, make and lead.</h3><p>We want creative confidence and collaboration to become part of everyday student life.</p></article>
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <SectionHeading eyebrow="HOW WE WORK" title="Four values, used every day." />
          <div className="values-list">
            {values.map((value) => <article key={value.number}><span>{value.number}</span><h3>{value.title}</h3><p>{value.description}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section operating-model">
        <div className="container operating-grid">
          <div><p className="eyebrow">THE VOE MODEL</p><h2>Learn by making something together.</h2></div>
          <ol>
            <li><span>01</span><div><h3>Listen</h3><p>Start with a real campus need, idea or story.</p></div></li>
            <li><span>02</span><div><h3>Shape</h3><p>Bring different skills together around a clear outcome.</p></div></li>
            <li><span>03</span><div><h3>Share</h3><p>Publish, present or activate the work for the community.</p></div></li>
            <li><span>04</span><div><h3>Reflect</h3><p>Credit the team, gather feedback and improve the next version.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="page-cta section"><div className="container"><Sparkles aria-hidden="true" /><h2>See where your strengths could fit.</h2><Link className="button button-primary" to="/wings">Explore VOE wings <ArrowRight aria-hidden="true" /></Link></div></section>
    </>
  )
}

export default AboutPage


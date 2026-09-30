import { useState } from 'react'
import { ArrowUpRight, Check, MailCheck } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { faqs, joinBenefits, pillars, site } from '../data/siteData.js'
import { usePageMeta } from '../hooks/usePageMeta.js'

function JoinPage() {
  const [notice, setNotice] = useState('')
  usePageMeta('Join VOE', 'Express your interest in joining Voice of Easwarians and tell the team which creative track you want to explore.')

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const lines = [
      `Name: ${data.get('name')}`,
      `Email: ${data.get('email')}`,
      `Roll number: ${data.get('roll')}`,
      `Department: ${data.get('department')}`,
      `Year: ${data.get('year')}`,
      `Preferred wing: ${data.get('wing')}`,
      `Portfolio: ${data.get('portfolio') || 'Not provided'}`,
      '',
      `Why I want to join: ${data.get('motivation')}`,
    ]
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent('VOE membership interest')}&body=${encodeURIComponent(lines.join('\n'))}`
    setNotice(`Your email app should open with the application addressed to ${site.email}. Review it and press send to complete your expression of interest.`)
  }

  return (
    <>
      <PageHero eyebrow="JOIN VOE" title="Bring the interest. " accent="Build the skill." description="You do not need to arrive as an expert. Tell us what you care about, what you have tried and where you want to grow." />

      <section className="section join-benefits">
        <div className="container join-benefits-grid"><SectionHeading eyebrow="WHY JOIN" title="A practical place to learn by contributing." /><ul>{joinBenefits.map((benefit) => <li key={benefit}><Check aria-hidden="true" />{benefit}</li>)}</ul></div>
      </section>

      <section className="section surface-section" id="application">
        <div className="container application-grid">
          <div><p className="eyebrow">EXPRESS INTEREST</p><h2>Tell the team where you want to begin.</h2><p>This form creates a prepared email on your device. Nothing is submitted until you review and send that email.</p></div>
          <form className="application-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <label><span>Full name</span><input name="name" type="text" autoComplete="name" required /></label>
              <label><span>College email</span><input name="email" type="email" autoComplete="email" required /></label>
              <label><span>Roll number</span><input name="roll" type="text" required /></label>
              <label><span>Department</span><input name="department" type="text" required /></label>
              <label><span>Year of study</span><select name="year" required defaultValue=""><option value="" disabled>Select year</option><option>First year</option><option>Second year</option><option>Third year</option><option>Fourth year</option></select></label>
              <label><span>Preferred creative track</span><select name="wing" required defaultValue=""><option value="" disabled>Select a track</option>{pillars.map((pillar) => <option key={pillar.title}>{pillar.title}</option>)}</select></label>
              <label className="full-field"><span>Portfolio or work link <small>Optional</small></span><input name="portfolio" type="url" placeholder="https://" /></label>
              <label className="full-field"><span>Why would you like to join VOE?</span><textarea name="motivation" rows="6" minLength="40" required /></label>
            </div>
            <button className="button button-primary form-submit" type="submit">Prepare application email <ArrowUpRight aria-hidden="true" /></button>
            {notice && <p className="form-notice" role="status"><MailCheck aria-hidden="true" />{notice}</p>}
          </form>
        </div>
      </section>

      <section className="section faq-section"><div className="container"><SectionHeading eyebrow="FREQUENTLY ASKED" title="Before you reach out." /><div className="faq-list">{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div></div></section>
    </>
  )
}

export default JoinPage


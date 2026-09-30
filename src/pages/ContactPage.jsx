import { useState } from 'react'
import { ArrowUpRight, Instagram, Mail, MapPin, Send } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import { site } from '../data/siteData.js'
import { usePageMeta } from '../hooks/usePageMeta.js'

function ContactPage() {
  const [notice, setNotice] = useState('')
  usePageMeta('Contact', 'Contact Voice of Easwarians at Easwari Engineering College for membership, event proposals and creative collaborations.')

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const body = `From: ${data.get('name')} (${data.get('email')})\nTopic: ${data.get('topic')}\n\n${data.get('message')}`
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`VOE enquiry — ${data.get('topic')}`)}&body=${encodeURIComponent(body)}`
    setNotice(`Your email app should open with the message addressed to ${site.email}. Review and send it to complete your enquiry.`)
  }

  return (
    <>
      <PageHero eyebrow="CONTACT" title="Start with a clear idea. " accent="We’ll take it from there." description="Contact VOE about membership, event ideas, campus collaborations or questions about the community." />

      <section className="section contact-section">
        <div className="container contact-grid">
          <div className="contact-channels">
            <article><Mail aria-hidden="true" /><p className="eyebrow">EMAIL</p><a href={`mailto:${site.email}`}>{site.email}</a></article>
            <article><Instagram aria-hidden="true" /><p className="eyebrow">INSTAGRAM</p><a href={site.instagram} target="_blank" rel="noreferrer">@voe.eec <ArrowUpRight aria-hidden="true" /></a></article>
            <article><MapPin aria-hidden="true" /><p className="eyebrow">CAMPUS</p><p>{site.institution}<br />{site.location}</p></article>
          </div>
          <form className="contact-form-new" onSubmit={handleSubmit}>
            <label><span>Name</span><input name="name" type="text" autoComplete="name" required /></label>
            <label><span>Email</span><input name="email" type="email" autoComplete="email" required /></label>
            <label><span>Topic</span><select name="topic" defaultValue="Membership" required><option>Membership</option><option>Event proposal</option><option>Collaboration</option><option>General question</option></select></label>
            <label><span>Message</span><textarea name="message" rows="7" minLength="20" required /></label>
            <button className="button button-primary form-submit" type="submit">Prepare email <Send aria-hidden="true" /></button>
            {notice && <p className="form-notice" role="status">{notice}</p>}
          </form>
        </div>
      </section>

      <section className="campus-map" aria-label="Campus location"><iframe title="Easwari Engineering College location" src="https://www.google.com/maps?q=Easwari+Engineering+College,+Bharathi+Salai,+Ramapuram,+Chennai,+Tamil+Nadu+600089&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></section>
    </>
  )
}

export default ContactPage


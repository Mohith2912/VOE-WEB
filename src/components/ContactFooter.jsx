import { useState } from 'react'
import { ArrowUp, ArrowUpRight, Instagram, Linkedin, Mail } from 'lucide-react'

function ContactFooter() {
  const [notice, setNotice] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') || '').trim()
    const email = String(data.get('email') || '').trim()
    const idea = String(data.get('idea') || '').trim()
    const body = `From: ${name} (${email})\n\n${idea}`
    window.location.href = `mailto:voe@easwari.ac.in?subject=${encodeURIComponent('A new signal for VOE')}&body=${encodeURIComponent(body)}`
    setNotice('Your email app should open with the message ready to send.')
  }

  return (
    <>
      <section className="contact" id="contact">
        <div className="contact-copy reveal">
          <p className="section-index">06 — YOUR TURN</p>
          <h2>Got a spark?<br /><em>Send the signal.</em></h2>
          <p>Join a crew, pitch a collaboration or tell us what the campus should hear next.</p>
          <div className="contact-address">
            <span>EASWARI ENGINEERING COLLEGE</span>
            <p>Bharathi Salai, Ramapuram<br />Chennai, Tamil Nadu 600089</p>
          </div>
        </div>

        <form className="contact-form reveal" onSubmit={handleSubmit}>
          <div className="field-row">
            <label><span>Your name</span><input name="name" type="text" autoComplete="name" placeholder="Who are you?" required /></label>
            <label><span>Your email</span><input name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></label>
          </div>
          <label><span>Your idea</span><textarea name="idea" rows="5" placeholder="Tell us what you want to make, join or change…" required /></label>
          <button className="contact-submit" type="submit">Transmit message <ArrowUpRight /></button>
          {notice && <p className="form-notice" role="status">{notice}</p>}
        </form>
      </section>

      <footer className="footer">
        <div className="footer-brand">
          <img src="/brand/voe-seal.png" alt="Voice of Easwarians" />
          <div><strong>VOICE OF<br />EASWARIANS</strong><span>Your voice. Our campus. One community.</span></div>
        </div>
        <div className="footer-socials" aria-label="Social links">
          <a href="https://www.instagram.com/voe.eec" target="_blank" rel="noreferrer"><Instagram /> Instagram</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a>
          <a href="mailto:voe@easwari.ac.in"><Mail /> Email</a>
        </div>
        <a className="back-top" href="#top" aria-label="Back to top"><ArrowUp /></a>
        <div className="footer-bottom"><span>© 2026 VOE</span><span>Made on campus, for campus.</span></div>
      </footer>
    </>
  )
}

export default ContactFooter


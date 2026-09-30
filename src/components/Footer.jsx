import { ArrowUp, Instagram, Mail, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { navigation, site } from '../data/siteData.js'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main container">
        <div className="footer-identity">
          <img src="/brand/voe-seal.webp" width="96" height="96" loading="lazy" alt="Voice of Easwarians seal" />
          <div><strong>{site.fullName}</strong><p>{site.tagline}</p></div>
        </div>
        <div className="footer-links">
          <h2>Explore</h2>
          {navigation.map((item) => <Link key={item.to} to={item.to}>{item.label}</Link>)}
          <Link to="/join">Join VOE</Link>
        </div>
        <div className="footer-contact">
          <h2>Connect</h2>
          <a href={`mailto:${site.email}`}><Mail aria-hidden="true" />{site.email}</a>
          <a href={site.instagram} target="_blank" rel="noreferrer"><Instagram aria-hidden="true" />@voe.eec</a>
          <p><MapPin aria-hidden="true" />{site.location}</p>
        </div>
      </div>
      <div className="footer-bottom container">
        <span>© 2026 {site.fullName}</span>
        <span>A student community of {site.institution}</span>
        <a href="#top" aria-label="Back to top"><ArrowUp aria-hidden="true" /></a>
      </div>
    </footer>
  )
}

export default Footer

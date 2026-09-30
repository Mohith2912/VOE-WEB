import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const links = [
  ['Manifesto', '#manifesto'],
  ['Programs', '#programs'],
  ['Events', '#events'],
  ['People', '#people'],
]

function Navigation() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav-shell">
      <a className="brand-lockup" href="#top" aria-label="VOE home">
        <img src="/brand/voe-seal.png" alt="" />
        <span><b>VOE</b><small>Voice of Easwarians</small></span>
      </a>

      <nav className={`main-nav ${open ? 'is-open' : ''}`} aria-label="Main navigation">
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
        <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>
          Join the frequency <ArrowUpRight size={17} />
        </a>
      </nav>

      <button className="menu-toggle" type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
        {open ? <X /> : <Menu />}
      </button>
    </header>
  )
}

export default Navigation


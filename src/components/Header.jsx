import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { navigation, site } from '../data/siteData.js'
import ThemeToggle from './ThemeToggle.jsx'

function Header({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" to="/" aria-label={`${site.fullName} home`}>
          <img src="/brand/voe-seal.webp" width="52" height="52" alt="" />
          <span><strong>{site.name}</strong><small>{site.fullName}</small></span>
        </Link>

        <nav className={`desktop-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
          {navigation.map((item) => (
            <NavLink key={item.to} to={item.to} onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : undefined}>{item.label}</NavLink>
          ))}
          <Link className="button button-primary nav-join" to="/join">Join VOE <ArrowUpRight aria-hidden="true" /></Link>
        </nav>

        <div className="header-actions">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button className="icon-button menu-button" type="button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}>
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      <nav id="mobile-navigation" className={`mobile-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Mobile navigation">
        {navigation.map((item) => <NavLink key={item.to} to={item.to} onClick={closeMenu}>{item.label}</NavLink>)}
        <Link className="button button-primary" to="/join" onClick={closeMenu}>Join VOE <ArrowUpRight aria-hidden="true" /></Link>
      </nav>
    </header>
  )
}

export default Header

import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import ScrollToTop from '../components/ScrollToTop.jsx'
import { useTheme } from '../hooks/useTheme.js'

function SiteLayout() {
  const { theme, toggleTheme } = useTheme()
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <ScrollToTop />
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main id="main-content" tabIndex="-1"><Outlet /></main>
      <Footer />
    </>
  )
}

export default SiteLayout

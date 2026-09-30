import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta.js'

function NotFoundPage() {
  usePageMeta('Page not found', 'The requested VOE page could not be found.')
  return <section className="not-found section"><div className="container"><p className="eyebrow">ERROR 404</p><h1>This voice went off-air.</h1><p>The page may have moved or the address may be incorrect.</p><Link className="button button-primary" to="/"><ArrowLeft aria-hidden="true" />Return home</Link></div></section>
}

export default NotFoundPage

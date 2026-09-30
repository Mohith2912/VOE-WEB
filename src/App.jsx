import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import SiteLayout from './layout/SiteLayout.jsx'

const HomePage = lazy(() => import('./pages/HomePage.jsx'))
const AboutPage = lazy(() => import('./pages/AboutPage.jsx'))
const WingsPage = lazy(() => import('./pages/WingsPage.jsx'))
const EventsPage = lazy(() => import('./pages/EventsPage.jsx'))
const TeamPage = lazy(() => import('./pages/TeamPage.jsx'))
const JoinPage = lazy(() => import('./pages/JoinPage.jsx'))
const ContactPage = lazy(() => import('./pages/ContactPage.jsx'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.jsx'))

function App() {
  return (
    <Suspense fallback={<div className="page-loader" role="status"><img src="/brand/voe-seal.webp" alt="" /><span>Loading VOE</span></div>}>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="wings" element={<WingsPage />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="join" element={<JoinPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App

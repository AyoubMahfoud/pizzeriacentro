import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Pizzeria from './components/Pizzeria'
import Events from './components/Events'
import GoogleReviews from './components/GoogleReviews'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LegalPolicies from './components/LegalPolicies'
import CookieBanner from './components/CookieBanner'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [page, setPage] = useState(() => {
    const hash = window.location.hash.replace('#', '')
    return hash === 'legal' || hash === 'privacy' ? 'legal' : 'home'
  })

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const resolvePageFromHash = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash === 'legal' || hash === 'privacy') {
        setPage('legal')
      } else {
        setPage('home')
      }
    }

    resolvePageFromHash()
    window.addEventListener('hashchange', resolvePageFromHash)
    return () => window.removeEventListener('hashchange', resolvePageFromHash)
  }, [])

  useEffect(() => {
    const hash = window.location.hash.replace('#', '')

    if (page === 'home') {
      if (hash && hash !== 'legal' && hash !== 'privacy') {
        const target = document.getElementById(hash)
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' })
          return
        }
      }
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    requestAnimationFrame(() => {
      const targetId = hash === 'privacy' ? 'privacy' : 'legal'
      const target = document.getElementById(targetId)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
      }
    })
  }, [page])

  return (
    <div className="app">
      <Navbar scrolled={scrolled} />
      {page === 'home' ? (
        <>
          <Hero />
          <About />
          <Pizzeria />
          <Events />
          <GoogleReviews />
          <Contact />
        </>
      ) : (
        <LegalPolicies />
      )}
      <Footer />
      <CookieBanner />
    </div>
  )
}

export default App

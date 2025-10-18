import React, { useState } from 'react'

function Navbar({ scrolled }) {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <>
      <div className={`top-bar ${scrolled ? 'hidden' : ''}`}>
        <div className="container">
          <p>Prenota il tuo tavolo: <a href="tel:+390321623232">+39 0321 623232</a></p>
        </div>
      </div>

      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="nav-content">
            <div className="logo">
              <h1>CENTRO</h1>
              <p>RISTORANTE PIZZERIA</p>
            </div>

            <button className={`menu-toggle ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
              <span></span>
              <span></span>
              <span></span>
            </button>

            <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
              <li><a onClick={() => scrollToSection('home')}>Home</a></li>
              <li><a onClick={() => scrollToSection('about')}>Chi Siamo</a></li>
              <li><a href="https://pizzeria-centro-menu.vercel.app/" target="_blank" rel="noopener noreferrer" className="menu-link">Menu</a></li>
              <li><a onClick={() => scrollToSection('pizzeria')}>Pizzeria</a></li>
              <li><a onClick={() => scrollToSection('ristorante')}>Ristorante</a></li>
              <li><a onClick={() => scrollToSection('eventi')}>Eventi</a></li>
              <li><a onClick={() => scrollToSection('contatti')}>Contatti</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar

import React from 'react'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-split-container">
        {/* Left Side - Content */}
        <div className="hero-left">
          <div className="hero-badge">Dal 1960</div>
          <h1 className="hero-title">
            Eccellenza<br/>
            <span className="gold-text">Culinaria</span><br/>
            a Novara
          </h1>
          <p className="hero-description">
            Dove la tradizione italiana incontra l'arte della pizza napoletana
            e la raffinatezza della cucina piemontese
          </p>
          <div className="hero-buttons">
            <a href="https://pizzeria-centro-menu.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <span>Esplora il Menu</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </a>
            <a href="tel:+390321623232" className="btn btn-secondary">
              <span>Prenota Ora</span>
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">60+</span>
              <span className="stat-label">Anni di Storia</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">150</span>
              <span className="stat-label">Posti a Sedere</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">★★★★</span>
              <span className="stat-label">4 Stelle</span>
            </div>
          </div>
        </div>

        {/* Right Side - Visual */}
        <div className="hero-right">
          <div className="hero-image-wrapper">
            <div className="floating-card card-1">
              <span className="card-icon">🍕</span>
              <span className="card-text">Pizza Napoletana</span>
            </div>
            <div className="floating-card card-2">
              <span className="card-icon">🍝</span>
              <span className="card-text">Cucina Italiana</span>
            </div>
            <div className="floating-card card-3">
              <span className="card-icon">🍷</span>
              <span className="card-text">Vini Selezionati</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

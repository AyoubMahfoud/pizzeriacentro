import React from 'react'

function Events() {
  return (
    <section id="eventi" className="events">
      <div className="container">
        {/* Header */}
        <div className="section-header centered">
          <span className="section-label">Eventi & Cerimonie</span>
          <h2 className="section-title-large">
            Rendi Speciale Ogni <span className="gold-text">Momento</span>
          </h2>
          <p className="section-subtitle">
            4 sale eleganti, 150 posti e un team dedicato per il tuo evento perfetto
          </p>
        </div>

        {/* Event Types Grid */}
        <div className="event-types">
          <div className="event-type-card">
            <div className="event-icon">🎉</div>
            <h3>Feste Private</h3>
            <p>Compleanni, anniversari e celebrazioni familiari</p>
          </div>

          <div className="event-type-card">
            <div className="event-icon">💼</div>
            <h3>Eventi Aziendali</h3>
            <p>Cene di lavoro, meeting e team building</p>
          </div>

          <div className="event-type-card">
            <div className="event-icon">💑</div>
            <h3>Cene Romantiche</h3>
            <p>Sale intime per momenti speciali a due</p>
          </div>

          <div className="event-type-card">
            <div className="event-icon">👥</div>
            <h3>Gruppi Numerosi</h3>
            <p>Sale spaziose per grandi gruppi fino a 150 persone</p>
          </div>
        </div>

        {/* Features Split */}
        <div className="events-features">
          {/* Left - Image/Visual */}
          <div className="events-visual">
            <div className="visual-grid">
              <div className="visual-item main">
                <span className="visual-label">4 Sale</span>
              </div>
              <div className="visual-item">
                <span className="visual-number">150</span>
                <span className="visual-text">Posti</span>
              </div>
              <div className="visual-item">
                <span className="visual-icon">✨</span>
                <span className="visual-text">Atmosfera Elegante</span>
              </div>
            </div>
          </div>

          {/* Right - Details */}
          <div className="events-details">
            <div className="detail-card">
              <div className="detail-header">
                <span className="detail-icon">🏛️</span>
                <h3>Le Nostre Sale</h3>
              </div>
              <p>
                2 sale intime e raccolte per cene romantiche e momenti speciali,
                2 sale ampie e spaziose per eventi aziendali e grandi gruppi
              </p>
            </div>

            <div className="detail-card">
              <div className="detail-header">
                <span className="detail-icon">🍽️</span>
                <h3>Menu Personalizzati</h3>
              </div>
              <p>
                Banchetti su misura con i nostri chef. Antipasti, primi, secondi
                e dolci fatti in casa per rendere indimenticabile ogni occasione
              </p>
            </div>

            <div className="detail-card">
              <div className="detail-header">
                <span className="detail-icon">👨‍🍳</span>
                <h3>Staff Dedicato</h3>
              </div>
              <p>
                Un team professionale e cortese al tuo servizio per garantire
                che ogni dettaglio del tuo evento sia perfetto
              </p>
            </div>

            <a href="tel:+390321623232" className="btn btn-primary">
              <span>Contattaci per il Tuo Evento</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Events

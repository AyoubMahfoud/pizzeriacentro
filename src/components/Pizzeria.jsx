import React from 'react'

function Pizzeria() {
  return (
    <>
      {/* Pizzeria Section */}
      <section id="pizzeria" className="pizzeria">
        <div className="container-full">
          {/* Header */}
          <div className="section-header">
            <span className="section-label">Le Nostre Specialità</span>
            <h2 className="section-title-large">
              L'Arte della <span className="gold-text">Pizza</span> Napoletana
            </h2>
            <p className="section-subtitle">
              Tradizione partenopea e creatività dei nostri maestri pizzaioli
            </p>
          </div>

          {/* Showcase Grid - Bento Box Style */}
          <div className="pizza-showcase">
            {/* Large Feature Box */}
            <div className="showcase-box large-box">
              <div className="box-content">
                <span className="box-badge">Il Nostro Segreto</span>
                <h3 className="box-title">Impasto Fatto a Mano</h3>
                <p className="box-description">
                  Lievitazione naturale di 72 ore, farine selezionate biologiche
                  e cottura nel nostro forno a legna tradizionale
                </p>
                <div className="box-features">
                  <span className="feature-tag">Farina Integrale</span>
                  <span className="feature-tag">Farina Bianca</span>
                  <span className="feature-tag">Lievito Madre</span>
                </div>
              </div>
            </div>

            {/* Medium Box - Pizza al Metro */}
            <div className="showcase-box medium-box gold-box">
              <span className="box-icon">🍕</span>
              <h3 className="box-title">Pizza al Metro</h3>
              <p className="box-description">
                La nostra specialità: schiacciata croccante con aglio
                e pomodoro fresco. Perfetta da condividere!
              </p>
            </div>

            {/* Vertical Box - Ingredients */}
            <div className="showcase-box vertical-box">
              <h3 className="box-title">Ingredienti di Stagione</h3>
              <p className="box-description">
                Solo prodotti freschi, selezionati quotidianamente dai migliori
                fornitori locali per garantire qualità eccellente
              </p>
            </div>

            {/* Wide Box - Varieties */}
            <div className="showcase-box wide-box">
              <div className="pizza-varieties">
                <div className="variety-item">
                  <span className="variety-icon">🔥</span>
                  <span className="variety-name">Classiche</span>
                  <span className="variety-desc">Margherita, Marinara</span>
                </div>
                <div className="variety-item">
                  <span className="variety-icon">🌟</span>
                  <span className="variety-name">Gourmet</span>
                  <span className="variety-desc">Con ingredienti premium</span>
                </div>
                <div className="variety-item">
                  <span className="variety-icon">🌱</span>
                  <span className="variety-name">Vegetariane</span>
                  <span className="variety-desc">Verdure di stagione</span>
                </div>
              </div>
            </div>

            {/* CTA Box */}
            <div className="showcase-box cta-box">
              <h3 className="box-title">Esplora il Menu</h3>
              <p className="box-description">Scopri tutte le nostre pizze</p>
              <a href="https://pizzeria-centro-menu.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <span>Vedi Menu Completo</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Ristorante Section */}
      <section id="ristorante" className="ristorante">
        <div className="container">
          <div className="ristorante-grid">
            {/* Left - Content */}
            <div className="ristorante-content">
              <span className="section-label">Cucina d'Eccellenza</span>
              <h2 className="section-title-large">
                Ristorante Tipico <span className="gold-text">Piemontese</span>
              </h2>
              <p className="ristorante-intro">
                Oltre alla nostra celebre pizzeria, offriamo un menu raffinato
                di specialità piemontesi e mediterranee.
              </p>

              <div className="menu-highlights">
                <div className="highlight-item">
                  <div className="highlight-icon">🐟</div>
                  <div className="highlight-content">
                    <h4>Menu di Pesce</h4>
                    <p>Antipasti, primi e secondi con pesce fresco del giorno</p>
                  </div>
                </div>

                <div className="highlight-item">
                  <div className="highlight-icon">🥩</div>
                  <div className="highlight-content">
                    <h4>Menu di Carne</h4>
                    <p>Selezione di carni pregiate e ricette tradizionali</p>
                  </div>
                </div>

                <div className="highlight-item">
                  <div className="highlight-icon">🍰</div>
                  <div className="highlight-content">
                    <h4>Dolci Fatti in Casa</h4>
                    <p>Tiramisù e Pastiera napoletana secondo ricetta originale</p>
                  </div>
                </div>
              </div>

              <a href="https://pizzeria-centro-menu.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                Scopri il Menu Ristorante
              </a>
            </div>

            {/* Right - Stats */}
            <div className="ristorante-stats">
              <div className="stat-box">
                <span className="stat-icon">👥</span>
                <span className="stat-number">150</span>
                <span className="stat-label">Posti a Sedere</span>
                <p className="stat-description">
                  Locale moderno e spazioso con 4 sale eleganti
                </p>
              </div>

              <div className="stat-box">
                <span className="stat-icon">⭐</span>
                <span className="stat-rating">★★★★★</span>
                <span className="stat-label">Recensioni Clienti</span>
                <p className="stat-description">
                  Eccellenza riconosciuta su TripAdvisor
                </p>
              </div>

              <div className="stat-box">
                <span className="stat-icon">👨‍🍳</span>
                <span className="stat-number">60+</span>
                <span className="stat-label">Anni di Esperienza</span>
                <p className="stat-description">
                  Tradizione che si tramanda dal 1960
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Pizzeria

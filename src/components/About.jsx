import React from 'react'

function About() {
  return (
    <>
      <section id="about" className="about">
        <div className="container">
          {/* Philosophy Quote - Full Width Banner */}
          <div className="philosophy-banner">
            <div className="philosophy-content">
              <span className="philosophy-label">La Nostra Filosofia</span>
              <blockquote className="philosophy-quote">
                "Il cibo è cultura quando si produce, quando si prepara, quando si consuma"
              </blockquote>
              <cite>— Massimo Montanari</cite>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="about-grid">
            {/* Story Section */}
            <div className="about-story">
              <span className="section-label">La Nostra Storia</span>
              <h2 className="about-title">
                Un Viaggio di <span className="gold-text">Sapori</span> e Tradizione
              </h2>
              <p className="about-text">
                Nel cuore di Novara, il Ristorante Pizzeria Centro racconta una storia
                che attraversa generazioni. Dal 1979, siamo custodi di una tradizione
                culinaria che unisce la passione napoletana per la pizza all'eccellenza
                della cucina piemontese.
              </p>
              <p className="about-text">
                Recentemente ristrutturato, il nostro locale offre un'esperienza unica:
                4 sale eleganti, 150 posti a sedere e un'atmosfera che abbraccia storia
                e modernità.
              </p>
            </div>

            {/* Image Placeholder */}
            <div className="about-visual">
              <div className="visual-box main-visual">
                <span className="visual-text">Tradizione dal 1960</span>
              </div>
              <div className="visual-box secondary-visual">
                <span className="visual-number">150</span>
                <span className="visual-label">Posti</span>
              </div>
            </div>
          </div>

          {/* Features Cards - 3 Column Grid */}
          <div className="features-showcase">
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <span className="feature-icon">🍕</span>
              </div>
              <h3 className="feature-title">Pizza Artigianale</h3>
              <p className="feature-description">
                Impasti naturali con lievitazione lenta, farine selezionate
                e cottura nel forno a legna tradizionale
              </p>
              <div className="feature-highlight">Farina Integrale & Bianca</div>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <span className="feature-icon">🍽️</span>
              </div>
              <h3 className="feature-title">Cucina Mediterranea</h3>
              <p className="feature-description">
                Menu di pesce e carne preparati con ingredienti freschi
                e creatività dalle nostre Chef
              </p>
              <div className="feature-highlight">Piatti del Giorno</div>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <span className="feature-icon">🏛️</span>
              </div>
              <h3 className="feature-title">Location Storica</h3>
              <p className="feature-description">
                Nel cuore di Novara, un locale ricco di storia
                completamente rinnovato con 4 sale eleganti
              </p>
              <div className="feature-highlight">150 Posti a Sedere</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About

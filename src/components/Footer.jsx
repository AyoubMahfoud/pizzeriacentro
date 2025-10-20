import React from 'react'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-logo">
              <h3>CENTRO</h3>
              <p>RISTORANTE PIZZERIA</p>
            </div>
            <p className="footer-description">
              Nel cuore di Novara dal 1979, dove la tradizione culinaria italiana
              incontra la passione per l'eccellenza.
            </p>
          </div>

          <div className="footer-col">
            <h4>Contatti</h4>
            <ul>
              <li>Largo Cavalli 2, angolo Corso Cavallotti, 9</li>
              <li>28100 - Novara (NO)</li>
              <li><a href="tel:+390321623232">+39 0321 623232</a></li>
              <li><a href="mailto:centro.snc@libero.it">centro.snc@libero.it</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Orari</h4>
            <ul>
              <li>Lun-Gio: 12:00-14:30, 19:00-22:00</li>
              <li>Ven-Sab: 12:00-14:30, 19:00-22:30</li>
              <li>Domenica: Chiuso</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Seguici</h4>
            <div className="social-icons">
              <a href="https://www.facebook.com/pizzeriacentronovara/?locale=it_IT" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://www.instagram.com/pizzeria_centro79/" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
            <div className="footer-badges">
              <span className="badge">4 Sale Eleganti</span>
              <span className="badge">150 Posti</span>
              <span className="badge">Dal 1979</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <p>&copy; {currentYear} Ristorante Pizzeria Centro. Tutti i diritti riservati.</p>
            <p>P.I. 01469050031</p>
          </div>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy e Cookie Policy</a>
            <a href="#legal">Informazioni Legali</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

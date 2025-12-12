import React from 'react'

function Contact() {
  return (
    <section id="contatti" className="contact">
      {/* CTA Banner */}
      <div className="contact-cta">
        <div className="container">
          <div className="cta-wrapper">
            <div className="cta-icon">📞</div>
            <div className="cta-text">
              <h2>Prenota il Tuo Tavolo</h2>
              <a href="tel:+390321623232" className="cta-phone">+39 0321 623232</a>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Contact Cards Grid */}
        <div className="contact-cards">
          {/* Location Card */}
          <div className="contact-card large">
            <div className="card-header">
              <span className="card-icon">📍</span>
              <h3>Dove Siamo</h3>
            </div>
            <div className="card-body">
              <p className="address-line">Largo Cavalli 2</p>
              <p className="address-line">angolo Corso Cavallotti, 9</p>
              <p className="address-city">28100 - Novara (NO)</p>
              <div className="location-badge">Nel cuore del centro storico</div>
            </div>
          </div>

          {/* Hours Card */}
          <div className="contact-card">
            <div className="card-header">
              <span className="card-icon">🕒</span>
              <h3>Orari</h3>
            </div>
            <div className="card-body">
              <div className="hours-compact">
                <div className="hours-row">
                  <span>Lun - Gio</span>
                  <span>12-14:30, 19-22</span>
                </div>
                <div className="hours-row highlight">
                  <span>Ven - Sab</span>
                  <span>12-14:30, 19-22:30</span>
                </div>
                <div className="hours-row closed">
                  <span>Domenica</span>
                  <span>Chiuso</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info Card */}
          <div className="contact-card">
            <div className="card-header">
              <span className="card-icon">💬</span>
              <h3>Contatti</h3>
            </div>
            <div className="card-body">
              <div className="contact-items">
                <a href="tel:+390321623232" className="contact-item">
                  <span className="item-icon">📞</span>
                  <span>+39 0321 623232</span>
                </a>
                <a href="tel:+393791027408" className="contact-item">
                  <span className="item-icon">📱</span>
                  <span>+39 379 1027408</span>
                </a>
                <a href="mailto:centro.snc@libero.it" className="contact-item">
                  <span className="item-icon">✉️</span>
                  <span>centro.snc@libero.it</span>
                </a>
              </div>
            </div>
          </div>

          {/* Services Card */}
          <div className="contact-card">
            <div className="card-header">
              <span className="card-icon">✨</span>
              <h3>Servizi</h3>
            </div>
            <div className="card-body">
              <div className="services-tags">
                <span className="service-tag">4 Sale Eleganti</span>
                <span className="service-tag">Sale per Eventi</span>
                <span className="service-tag">Banchetti</span>
                <span className="service-tag">Menu Personalizzati</span>
                <span className="service-tag">150 Posti</span>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section with Embedded Google Maps */}
        <div className="map-section">
          <h3 className="map-title">Vieni a Trovarci</h3>
          <div className="map-container-embedded">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.8366544!2d8.6194!3d45.4469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47865a2419de011f%3A0xd0e3f3f3f3f3f3f3!2sLargo%20Cavalli%2C%202%2C%2028100%20Novara%20NO%2C%20Italy!5e0!3m2!1sen!2sit!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mappa Ristorante Pizzeria Centro Novara"
            ></iframe>
          </div>

          {/* Simple Directions Link */}
          <div style={{
            textAlign: 'center',
            marginTop: '30px',
            padding: '50px 40px',
            background: 'white',
            borderRadius: '15px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
          }}>
            <p style={{
              fontSize: '1.3rem',
              marginBottom: '25px',
              color: '#1C1C1C',
              fontWeight: '600'
            }}>
              📍 Largo Giovanni Carlo Cavalli, 2, 28100 Novara NO
            </p>
            <a
              href="https://www.google.com/maps/dir//Largo+Giovanni+Carlo+Cavalli,+2,+28100+Novara+NO"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '20px 50px',
                background: '#C9A961',
                color: 'white',
                textDecoration: 'none',
                fontSize: '1.2rem',
                fontWeight: '700',
                borderRadius: '8px',
                border: 'none',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(201, 169, 97, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#A88B4F';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 20px rgba(201, 169, 97, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#C9A961';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(201, 169, 97, 0.3)';
              }}
            >
              🗺️ Ottieni Indicazioni
            </a>
          </div>
        </div>

        {/* Social Proof */}
        <div className="social-section">
          <h3>Seguici sui Social</h3>
          <div className="social-buttons">
            <a href="https://www.facebook.com/pizzeriacentronovara/?locale=it_IT" target="_blank" rel="noopener noreferrer" className="social-btn facebook">
              <span className="social-icon">f</span>
              <span>Facebook</span>
            </a>
            <a href="https://www.instagram.com/pizzeria_centro79/" target="_blank" rel="noopener noreferrer" className="social-btn instagram">
              <span className="social-icon">📷</span>
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

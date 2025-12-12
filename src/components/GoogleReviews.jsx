import React from 'react'

function GoogleReviews() {
  const reviews = [
    {
      author: "M_E_P007E",
      rating: 5,
      text: "We were shown to our table and menus where given. Our order was taken, and the food arrived after a short wait. The pizza was fresh and hot. We enjoyed our meal very much.",
      date: "Tripadvisor"
    },
    {
      author: "Tharry10",
      rating: 5,
      text: "Das ist immer ein guter Rat und hier voll zutreffend. Sehr gutes Essen, sehr gute Pizza, auch zum Mitnehmen. Familiäre Atmosphäre.",
      date: "Tripadvisor"
    },
    {
      author: "FABRIZIO V",
      rating: 5,
      text: "Sono stato diverse volte a mangiare la pizza e altri piatti. Finalmente ho preso la grigliata di pesce. Ottima, anzi favolosa!",
      date: "Tripadvisor"
    }
  ]

  const googleReviewsUrl = "https://www.google.com/search?tbm=lcl&q=Centro+Recensioni&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDUwNbawMDEyMLGwMDAwMjEwNtvAyPiKUdA5Na-kKF8hKDU5Na84Mz8vcxErphgArUey80MAAAA&rldimm=15053884204880024036&hl=it-IT#lkt=LocalPoiReviews"

  return (
    <section className="google-reviews">
      <div className="container">
        {/* Header with Stats */}
        <div className="reviews-header">
          <div className="reviews-header-content">
            <h2 className="section-title-large">
              Cosa Dicono i <span className="gold-text">Nostri Clienti</span>
            </h2>
            <p className="section-subtitle">
              Eccellenza riconosciuta su Google e TripAdvisor
            </p>
          </div>

          <div className="reviews-stats">
            <div className="stat-badge">
              <div className="stat-badge-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </div>
              <div className="stat-badge-content">
                <span className="stat-badge-number">4.0</span>
                <span className="stat-badge-label">Rating Medio</span>
              </div>
            </div>

            <div className="stat-badge">
              <div className="stat-badge-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
                </svg>
              </div>
              <div className="stat-badge-content">
                <span className="stat-badge-number">200+</span>
                <span className="stat-badge-label">Recensioni</span>
              </div>
            </div>

            <div className="stat-badge">
              <div className="stat-badge-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 21h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.58 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2zM9 9l4.34-4.34L12 10h9v2l-3 7H9V9zM1 9h4v12H1z" />
                </svg>
              </div>
              <div className="stat-badge-content">
                <span className="stat-badge-number">95%</span>
                <span className="stat-badge-label">Positive</span>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <div className="review-header">
                <div className="review-author">
                  <div className="author-avatar">
                    {review.author.charAt(0)}
                  </div>
                  <div className="author-info">
                    <h4>{review.author}</h4>
                    <span className="review-source">{review.date}</span>
                  </div>
                </div>
                <div className="review-rating">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="review-text">"{review.text}"</p>
            </div>
          ))}
        </div>

        {/* CTA to Google Reviews - Simple Link */}
        <div style={{
          textAlign: 'center',
          marginTop: '60px',
          padding: '50px 40px',
          background: 'white',
          borderRadius: '15px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
        }}>
          <p style={{
            fontSize: '1.4rem',
            marginBottom: '25px',
            color: '#1C1C1C',
            fontWeight: '600'
          }}>
            Vuoi vedere tutte le nostre recensioni?
          </p>
          <a
            href="https://www.google.com/search?si=AMgyJEuzsz2NflaaWzrzdpjxXXRaJ2hfdMsbe_mSWso6src8s8_SPjSDFJeTQSzrR8V1KTvRdQg1Is-Zx-gqnwrY-TmypLRbI2snJSm2oSu2NOH6kLgCCagNsnEdJ3XBp_T923QRctGB&q=Centro+Recensioni&zx=1765556116122&no_sw_cr=1"
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
            📝 Leggi le Recensioni su Google
          </a>
        </div>
      </div>
    </section>
  )
}

export default GoogleReviews

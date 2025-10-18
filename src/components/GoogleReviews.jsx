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
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
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
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
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
                  <path d="M9 21h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.58 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2zM9 9l4.34-4.34L12 10h9v2l-3 7H9V9zM1 9h4v12H1z"/>
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
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="review-text">"{review.text}"</p>
            </div>
          ))}
        </div>

        {/* CTA to Google Reviews */}
        <div className="reviews-cta">
          <p className="reviews-cta-text">Vuoi vedere tutte le nostre recensioni?</p>
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-large"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '10px'}}>
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span>Leggi Tutte le Recensioni su Google</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default GoogleReviews

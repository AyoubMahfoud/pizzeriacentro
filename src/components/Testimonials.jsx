import React from 'react'

function Testimonials() {
  const testimonials = [
    {
      name: "M_E_P007E",
      platform: "Tripadvisor",
      title: "Excellent Pizza",
      text: "We were shown to our table and menus where given. Our order was taken, and the food arrived after a short wait. The pizza was fresh and hot. We enjoyed our meal very much.",
      rating: 5
    },
    {
      name: "Tharry10",
      platform: "Tripadvisor",
      title: "Preis/Leistung sehr gut!",
      text: "Das ist immer ein guter Rat und hier voll zutreffend. Sehr gutes Essen, sehr gute Pizza, auch zum Mitnehmen. Familiäre Atmosphäre.",
      rating: 5
    },
    {
      name: "FABRIZIO V",
      platform: "Tripadvisor",
      title: "Grigliata di pesce, favolosa.",
      text: "Sono stato diverse volte a mangiare la pizza e altri piatti. Finalmente ho preso la grigliata di pesce. Ottima, anzi favolosa!",
      rating: 5
    }
  ]

  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">Dicono di noi</h2>
        <div className="title-underline"></div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-header">
                <h3>{testimonial.title}</h3>
                <div className="stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-footer">
                <p className="testimonial-author">{testimonial.name}</p>
                <p className="testimonial-platform">
                  <span className="platform-badge">{testimonial.platform}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="social-proof">
          <p className="lead-text">Seguici sui social per aggiornamenti ed eventi</p>
          <div className="social-links">
            <a href="https://www.facebook.com/pizzeriacentronovara/?locale=it_IT" target="_blank" rel="noopener noreferrer" className="social-link">
              <span>Facebook</span>
            </a>
            <a href="https://www.instagram.com/pizzeria_centro79/" target="_blank" rel="noopener noreferrer" className="social-link">
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

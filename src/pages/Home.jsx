import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/pages/home.scss'
import servicesData from '../data/services.json'
import testimonialsData from '../data/testimonials.json'
import aboutData from '../data/about.json'

const Home = () => {
  const navigate = useNavigate()

  useEffect(() => {
    document.title = 'Loki Cards - Tirages de Cartes'
  }, [])

  const handleContactClick = () => {
    navigate('/contact#contact-form')
  }

  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <h1 className="fade-in">
            <span className="accent">Découvrez</span> votre destinée
          </h1>
          <p className="subtitle fade-in">
            À travers les mystères des cartes, je vous guide vers votre voie
          </p>
          <button className="cta-button fade-in" onClick={handleContactClick}>
            Réserver une séance
          </button>
        </div>
      </section>

      <section className="about-preview" id="about-section">
        <div className="container">
          <h2>Qui suis-je</h2>
          <div className="about-content">
            <div className="about-text">
              <p className="about-description">{aboutData.about.description}</p>
              <div className="about-grid">
                {aboutData.about.content.slice(0, 2).map((item) => (
                  <div key={item.id} className="about-item">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
              <blockquote className="about-quote">
                {aboutData.about.quote}
              </blockquote>
              <Link to="/contact" className="read-more-button">
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Mes Services</h2>
          <div className="features-grid">
            {servicesData.services.map((service) => (
              <div key={service.id} className="feature-card">
                <div className="icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <h2>Témoignages</h2>
          <div className="testimonials-slider">
            {testimonialsData.testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial">
                <p>"{testimonial.text}"</p>
                <cite>- {testimonial.author}</cite>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Prêt à découvrir votre voie ?</h2>
          <p>Prenez rendez-vous pour une consultation personnalisée</p>
          <button className="cta-button" onClick={handleContactClick}>
            Contactez-moi
          </button>
        </div>
      </section>
    </div>
  )
}

export default Home 
import { useEffect } from 'react'
import '../styles/pages/home.scss'

const Home = () => {
  useEffect(() => {
    document.title = 'Loki Cards - Tirages de Cartes'
  }, [])

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
          <button className="cta-button fade-in">
            Réserver une séance
          </button>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Mes Services</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="icon">🎴</div>
              <h3>Tirage de Cartes</h3>
              <p>Une lecture personnalisée pour éclairer votre chemin</p>
            </div>
            <div className="feature-card">
              <div className="icon">✨</div>
              <h3>Consultation Spirituelle</h3>
              <p>Un accompagnement pour votre développement personnel</p>
            </div>
            <div className="feature-card">
              <div className="icon">🌟</div>
              <h3>Énergie et Bien-être</h3>
              <p>Des conseils pour harmoniser votre énergie</p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <h2>Témoignages</h2>
          <div className="testimonials-slider">
            <div className="testimonial">
              <p>"Une expérience unique qui m'a permis de mieux me comprendre"</p>
              <cite>- Marie L.</cite>
            </div>
            <div className="testimonial">
              <p>"Des conseils précieux qui ont changé ma perspective"</p>
              <cite>- Jean P.</cite>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Prêt à découvrir votre voie ?</h2>
          <p>Prenez rendez-vous pour une consultation personnalisée</p>
          <button className="cta-button">Contactez-moi</button>
        </div>
      </section>
    </div>
  )
}

export default Home 
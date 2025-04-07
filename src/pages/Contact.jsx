import React from 'react'
import ContactForm from '../components/ContactForm'
import '../styles/pages/contact.scss'

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="container">
        <h1>Contactez-nous</h1>
        <div className="contact-content">
          <div className="contact-info">
            <h2>Informations de contact</h2>
            <p>
              N'hésitez pas à nous contacter pour toute question ou pour prendre rendez-vous.
              Nous vous répondrons dans les plus brefs délais.
            </p>
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <span>contact@lokicards.fr</span>
            </div>
            <div className="info-item">
              <i className="fas fa-phone"></i>
              <span>+33 6 12 34 56 78</span>
            </div>
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>Paris, France</span>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default Contact 
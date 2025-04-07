import React from 'react';
import '../styles/pages/services.scss';

const Services = () => {
  return (
    <div className="services-page">
      <div className="container">
        <h1>Nos Services</h1>
        <div className="services-grid">
          <div className="service-card">
            <h2>Consultation en ligne</h2>
            <p>Une consultation personnalisée via vidéo pour répondre à vos questions.</p>
            <ul>
              <li>Durée : 30 minutes</li>
              <li>Prix : 50€</li>
              <li>Disponibilité : 7j/7</li>
            </ul>
          </div>
          <div className="service-card">
            <h2>Lecture de Tarot</h2>
            <p>Une lecture approfondie de vos cartes pour éclairer votre chemin.</p>
            <ul>
              <li>Durée : 45 minutes</li>
              <li>Prix : 75€</li>
              <li>Disponibilité : 7j/7</li>
            </ul>
          </div>
          <div className="service-card">
            <h2>Coaching Personnel</h2>
            <p>Un accompagnement sur mesure pour votre développement personnel.</p>
            <ul>
              <li>Durée : 60 minutes</li>
              <li>Prix : 100€</li>
              <li>Disponibilité : 7j/7</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services; 
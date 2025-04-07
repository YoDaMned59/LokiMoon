import React from 'react';
import '../styles/pages/about.scss';

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <h1>À Propos</h1>
        <div className="about-content">
          <div className="about-text">
            <h2>Notre Histoire</h2>
            <p>
              Depuis plus de 10 ans, nous accompagnons les personnes dans leur développement personnel
              à travers la lecture de cartes et le coaching. Notre approche unique combine
              tradition et modernité pour vous offrir une expérience personnalisée.
            </p>
            
            <h2>Notre Mission</h2>
            <p>
              Notre mission est de vous aider à mieux vous comprendre et à prendre les bonnes
              décisions pour votre avenir. Nous croyons en une approche holistique qui prend
              en compte tous les aspects de votre vie.
            </p>

            <h2>Nos Valeurs</h2>
            <ul>
              <li>Authenticité et transparence</li>
              <li>Respect de la confidentialité</li>
              <li>Professionalisme et expertise</li>
              <li>Éthique et déontologie</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 
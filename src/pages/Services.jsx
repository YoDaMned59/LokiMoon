import React from 'react';
import '../styles/pages/services.scss';
import servicesData from '../data/services.json';

const Services = () => {
  return (
    <div className="services-page">
      <div className="container">
        <h1>Mes Services</h1>
        <div className="services-grid">
          {servicesData.services.map((service) => (
            <div key={service.id} className="service-card">
              <h2 className="service-title">{service.title}</h2>
              
              <p className="service-description">
                {service.description}
              </p>
              
              <ul className="service-features">
                {service.features.map((feature, index) => (
                  <li key={index}>
                    <span className="feature-icon">✧</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <p className="prerequis">
                {service.prerequis.text}
              </p>
              
              <button className="reserve-button">
                {service.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services; 
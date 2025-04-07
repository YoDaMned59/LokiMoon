import { useState } from 'react'
import servicesData from '../data/services.json'
import '../styles/components/services-list.scss'

const ServicesList = () => {
  const [selectedService, setSelectedService] = useState(null)

  return (
    <div className="services-list">
      <div className="services-grid">
        {servicesData.services.map((service) => (
          <div
            key={service.id}
            className={`service-card ${selectedService === service.id ? 'active' : ''}`}
            onClick={() => setSelectedService(service.id === selectedService ? null : service.id)}
          >
            <div className="service-header">
              <span className="service-icon">{service.icon}</span>
              <h3>{service.title}</h3>
            </div>
            <p className="service-description">{service.description}</p>
            <div className="service-details">
              <div className="detail-item">
                <span className="detail-label">Durée:</span>
                <span className="detail-value">{service.duration}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Prix:</span>
                <span className="detail-value">{service.price}</span>
              </div>
            </div>
            {selectedService === service.id && (
              <div className="service-expanded">
                <h4>Ce qui est inclus:</h4>
                <ul>
                  {service.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
                <button className="book-button">Réserver maintenant</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServicesList 
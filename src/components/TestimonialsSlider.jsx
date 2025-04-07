import { useState, useEffect } from 'react'
import testimonialsData from '../data/testimonials.json'
import '../styles/components/testimonials-slider.scss'

const TestimonialsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const testimonials = testimonialsData.testimonials

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString('fr-FR', options)
  }

  return (
    <div className="testimonials-slider">
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`testimonial-card ${index === currentIndex ? 'active' : ''}`}
          >
            <div className="testimonial-content">
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-info">
                <cite className="testimonial-author">{testimonial.name}</cite>
                <span className="testimonial-service">{testimonial.service}</span>
                <time className="testimonial-date">{formatDate(testimonial.date)}</time>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="slider-controls">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Témoignage ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default TestimonialsSlider 
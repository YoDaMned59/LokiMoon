import { useState } from 'react'
import '../styles/components/contact-form.scss'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    gdprConsent: false
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Format d\'email invalide'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Le numéro de téléphone est requis'
    } else if (!/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/.test(formData.phone)) {
      newErrors.phone = 'Format de téléphone invalide'
    }

    if (!formData.service) {
      newErrors.service = 'Veuillez sélectionner un service'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis'
    }

    if (!formData.gdprConsent) {
      newErrors.gdprConsent = 'Vous devez accepter la politique de confidentialité'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Simulation d'envoi de formulaire
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      setSubmitStatus({
        type: 'success',
        message: 'Votre message a été envoyé avec succès !'
      })
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        gdprConsent: false
      })
    } catch (error) {
      console.error('Erreur lors de l\'envoi du formulaire :', error)
      setSubmitStatus({
        type: 'error',
        message: 'Une erreur est survenue. Veuillez réessayer.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Nom complet *</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={errors.name ? 'error' : ''}
        />
        {errors.name && <span className="error-message">{errors.name}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email *</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? 'error' : ''}
        />
        {errors.email && <span className="error-message">{errors.email}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="phone">Téléphone *</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={errors.phone ? 'error' : ''}
        />
        {errors.phone && <span className="error-message">{errors.phone}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="service">Service souhaité *</label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className={errors.service ? 'error' : ''}
        >
          <option value="">Sélectionnez un service</option>
          <option value="tirage">Tirage de Cartes</option>
          <option value="consultation">Consultation Spirituelle</option>
          <option value="energie">Énergie et Bien-être</option>
        </select>
        {errors.service && <span className="error-message">{errors.service}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="message">Message *</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={errors.message ? 'error' : ''}
          rows="5"
        />
        {errors.message && <span className="error-message">{errors.message}</span>}
      </div>

      <div className="form-group checkbox-group">
        <label className="checkbox-label">
          <input
            type="checkbox"
            name="gdprConsent"
            checked={formData.gdprConsent}
            onChange={handleChange}
            className={errors.gdprConsent ? 'error' : ''}
          />
          <span>
            J'accepte que mes données soient traitées conformément à la{' '}
            <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
              politique de confidentialité
            </a>
            . *
          </span>
        </label>
        {errors.gdprConsent && <span className="error-message">{errors.gdprConsent}</span>}
      </div>

      {submitStatus && (
        <div className={`submit-status ${submitStatus.type}`}>
          {submitStatus.message}
        </div>
      )}

      <button
        type="submit"
        className="submit-button"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
      </button>
    </form>
  )
}

export default ContactForm 
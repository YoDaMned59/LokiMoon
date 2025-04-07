import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/components/cookie-banner.scss'

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem('cookiesAccepted')
    if (!hasAcceptedCookies) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true')
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem('cookiesAccepted', 'false')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="cookie-banner">
      <div className="cookie-content">
        <div className="cookie-text">
          <h3>🍪 Politique des Cookies</h3>
          <p>
            Nous utilisons des cookies pour améliorer votre expérience sur notre site.
            En continuant à naviguer, vous acceptez notre{' '}
            <Link to="/cookies">politique de cookies</Link>.
          </p>
        </div>
        <div className="cookie-buttons">
          <button className="accept-button" onClick={handleAccept}>
            Accepter
          </button>
          <button className="decline-button" onClick={handleDecline}>
            Refuser
          </button>
        </div>
      </div>
    </div>
  )
}

export default CookieBanner 
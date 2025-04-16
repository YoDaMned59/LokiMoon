import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/components/navbar.scss'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  // Fonction pour faire défiler vers la section "Qui suis-je"
  const scrollToAboutSection = () => {
    setTimeout(() => {
      const aboutSection = document.getElementById('about-section')
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100) // Petit délai pour s'assurer que la page est chargée
  }

  // Vérifie si nous venons d'une autre page et que nous sommes sur la page d'accueil
  useEffect(() => {
    if (location.pathname === '/' && location.hash === '#about-section') {
      scrollToAboutSection()
    }
  }, [location])

  const handleQuiSuisJeClick = (e) => {
    setIsOpen(false)
    if (location.pathname === '/') {
      e.preventDefault()
      scrollToAboutSection()
    }
  }

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="logo" onClick={() => setIsOpen(false)}>
          <span className="logo-text">Loki</span>
          <span className="logo-accent">moon</span>
          <span className="logo-runes">ᛚᛟᚲᛁ</span>
        </Link>

        <button 
          className={`hamburger ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><Link to="/#about-section" onClick={handleQuiSuisJeClick}>Qui suis-je</Link></li>
          <li><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>À propos</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar 
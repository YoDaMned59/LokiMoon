import { Link } from 'react-router-dom'
import '../styles/components/footer.scss'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Loki Cards</h3>
            <p>Votre guide spirituel pour éclairer votre chemin</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Navigation</h3>
            <ul>
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">À propos</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Informations légales</h3>
            <ul>
              <li><Link to="/privacy-policy">Politique de confidentialité</Link></li>
              <li><Link to="/mentions-legales">Mentions légales</Link></li>
              <li><Link to="/cgv">CGV</Link></li>
              <li><Link to="/cookies">Politique des cookies</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Loki Cards. Tous droits réservés.</p>
          <div className="footer-bottom-links">
            <Link to="/mentions-legales">Mentions légales</Link>
            <span className="separator">|</span>
            <Link to="/privacy-policy">RGPD</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 
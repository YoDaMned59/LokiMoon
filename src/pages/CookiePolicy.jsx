import { useEffect } from 'react'
import '../styles/pages/legal.scss'

const CookiePolicy = () => {
  useEffect(() => {
    document.title = 'Politique des Cookies - Loki Cards'
  }, [])

  return (
    <div className="legal-page">
      <div className="container">
        <h1>Politique des Cookies</h1>
        <div className="legal-content">
          <section>
            <h2>1. Qu'est-ce qu'un cookie ?</h2>
            <p>
              Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, mobile, tablette)
              lors de votre visite sur notre site. Il permet de stocker des informations relatives à votre
              navigation et de vous offrir une expérience personnalisée.
            </p>
          </section>

          <section>
            <h2>2. Les cookies que nous utilisons</h2>
            <p>Notre site utilise différents types de cookies :</p>
            <ul>
              <li>Cookies essentiels : nécessaires au fonctionnement du site</li>
              <li>Cookies de performance : pour analyser la fréquentation et l'utilisation du site</li>
              <li>Cookies de fonctionnalité : pour mémoriser vos préférences</li>
              <li>Cookies de personnalisation : pour vous offrir un contenu adapté</li>
            </ul>
          </section>

          <section>
            <h2>3. Durée de conservation</h2>
            <p>
              Les cookies peuvent être conservés pour une durée maximale de 13 mois.
              À l'expiration de ce délai, votre consentement sera à nouveau recueilli.
            </p>
          </section>

          <section>
            <h2>4. Gestion des cookies</h2>
            <p>
              Vous pouvez à tout moment choisir de désactiver ces cookies.
              Votre navigateur peut également être paramétré pour vous signaler les cookies
              qui sont déposés dans votre terminal et vous demander de les accepter ou non.
            </p>
          </section>

          <section>
            <h2>5. Vos droits</h2>
            <p>
              Conformément au RGPD, vous disposez d'un droit d'accès, de rectification
              et de suppression des données collectées via les cookies.
              Pour exercer ces droits, contactez-nous à privacy@lokicards.fr
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default CookiePolicy 
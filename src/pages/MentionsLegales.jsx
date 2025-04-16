import { useEffect } from 'react'
import '../styles/pages/legal.scss'

const MentionsLegales = () => {
  useEffect(() => {
    document.title = 'Mentions Légales - Loki Cards'
  }, [])

  return (
    <div className="legal-page">
      <div className="container">
        <h1>Mentions Légales</h1>
        <div className="legal-content">
          <section>
            <h2>1. Éditeur du site</h2>
            <p>
              Le site Loki Cards est édité par :<br />
              [Votre nom ou raison sociale]<br />
              [Adresse complète]<br />
              [Numéro de téléphone]<br />
              Email : contact@lokicards.fr
            </p>
          </section>

          <section>
            <h2>2. Hébergement</h2>
            <p>
              Le site est hébergé par :<br />
              [Nom de l'hébergeur]<br />
              [Adresse de l'hébergeur]<br />
              [Contact de l'hébergeur]
            </p>
          </section>

          <section>
            <h2>3. Propriété intellectuelle</h2>
            <p>
              L'ensemble du contenu de ce site (textes, images, vidéos, etc.) est protégé par le droit d'auteur.
              Toute reproduction ou représentation, totale ou partielle, est strictement interdite sans autorisation expresse.
            </p>
          </section>

          <section>
            <h2>4. Protection des données personnelles</h2>
            <p>
              Conformément à la loi "Informatique et Libertés" et au RGPD, vous disposez d'un droit d'accès,
              de rectification et de suppression des données vous concernant.
              Pour exercer ce droit, contactez-nous à privacy@lokicards.fr
            </p>
          </section>

          <section>
            <h2>5. Cookies</h2>
            <p>
              Notre site utilise des cookies pour améliorer votre expérience.
              Pour en savoir plus, consultez notre politique de cookies.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default MentionsLegales 
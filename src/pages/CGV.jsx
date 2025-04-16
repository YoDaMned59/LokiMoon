import { useEffect } from 'react'
import '../styles/pages/legal.scss'

const CGV = () => {
  useEffect(() => {
    document.title = 'Conditions Générales de Vente - Loki Cards'
  }, [])

  return (
    <div className="legal-page">
      <div className="container">
        <h1>Conditions Générales de Vente</h1>
        <div className="legal-content">
          <section>
            <h2>1. Objet</h2>
            <p>
              Les présentes conditions générales de vente régissent les relations entre Loki Cards
              et ses clients dans le cadre de la vente de prestations de services de tirages de cartes
              et de consultations.
            </p>
          </section>

          <section>
            <h2>2. Services proposés</h2>
            <p>
              Loki Cards propose des services de :
            </p>
            <ul>
              <li>Tirages de cartes personnalisés</li>
              <li>Consultations individuelles</li>
              <li>Coaching spirituel</li>
              <li>Séances à distance</li>
            </ul>
          </section>

          <section>
            <h2>3. Prix et paiement</h2>
            <p>
              Les prix sont indiqués en euros TTC. Le paiement s'effectue à la réservation
              de la séance via les moyens de paiement sécurisés proposés sur le site.
            </p>
          </section>

          <section>
            <h2>4. Réservation et annulation</h2>
            <p>
              Toute réservation est ferme et définitive. En cas d'annulation moins de 24h
              avant la séance, celle-ci sera due intégralement.
            </p>
          </section>

          <section>
            <h2>5. Déroulement des séances</h2>
            <p>
              Les séances se déroulent dans le respect mutuel et la bienveillance.
              Loki Cards s'engage à fournir un service de qualité dans le respect
              de l'éthique professionnelle.
            </p>
          </section>

          <section>
            <h2>6. Responsabilité</h2>
            <p>
              Les consultations et tirages de cartes sont des outils de développement personnel
              et ne remplacent en aucun cas un avis médical ou professionnel.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default CGV 
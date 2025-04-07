import { useEffect } from 'react'
import '../styles/pages/privacy-policy.scss'

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = 'Politique de Confidentialité - Loki Cards'
  }, [])

  return (
    <div className="privacy-policy">
      <div className="container">
        <h1>Politique de Confidentialité</h1>
        <p className="last-updated">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>

        <section>
          <h2>1. Introduction</h2>
          <p>
            Chez Loki Cards, nous accordons une grande importance à la protection de vos données personnelles.
            Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations.
          </p>
        </section>

        <section>
          <h2>2. Collecte des Données</h2>
          <p>Nous collectons les informations suivantes :</p>
          <ul>
            <li>Nom et prénom</li>
            <li>Adresse email</li>
            <li>Numéro de téléphone</li>
            <li>Date de naissance (optionnelle)</li>
            <li>Historique des consultations</li>
          </ul>
        </section>

        <section>
          <h2>3. Utilisation des Données</h2>
          <p>Vos données sont utilisées pour :</p>
          <ul>
            <li>Gérer vos rendez-vous</li>
            <li>Personnaliser vos consultations</li>
            <li>Vous envoyer des rappels de rendez-vous</li>
            <li>Améliorer nos services</li>
            <li>Respecter nos obligations légales</li>
          </ul>
        </section>

        <section>
          <h2>4. Protection des Données</h2>
          <p>
            Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données contre tout accès,
            modification, divulgation ou destruction non autorisés.
          </p>
        </section>

        <section>
          <h2>5. Vos Droits</h2>
          <p>Conformément au RGPD, vous disposez des droits suivants :</p>
          <ul>
            <li>Droit d'accès à vos données</li>
            <li>Droit de rectification</li>
            <li>Droit à l'effacement</li>
            <li>Droit à la limitation du traitement</li>
            <li>Droit à la portabilité des données</li>
            <li>Droit d'opposition</li>
          </ul>
        </section>

        <section>
          <h2>6. Conservation des Données</h2>
          <p>
            Vos données sont conservées pendant une durée de 3 ans à compter de votre dernière consultation.
            Passé ce délai, vos données seront automatiquement supprimées.
          </p>
        </section>

        <section>
          <h2>7. Cookies</h2>
          <p>
            Notre site utilise des cookies essentiels pour son fonctionnement. Vous pouvez configurer votre navigateur
            pour refuser les cookies non essentiels.
          </p>
        </section>

        <section>
          <h2>8. Contact</h2>
          <p>
            Pour toute question concernant vos données personnelles, vous pouvez nous contacter à :
            <br />
            Email : privacy@lokicards.fr
            <br />
            Adresse : [Votre adresse]
          </p>
        </section>

        <section>
          <h2>9. Modifications</h2>
          <p>
            Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment.
            Les modifications prendront effet dès leur publication sur le site.
          </p>
        </section>
      </div>
    </div>
  )
}

export default PrivacyPolicy 
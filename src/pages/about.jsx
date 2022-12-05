import Page from "@/web/components/Page"

const AboutPage = () => {
  return (
    <Page title="À propos" small>
      <article className="prose w-auto max-w-7xl flex-auto cursor-default">
        <div className="grid grid-cols-2 justify-around gap-8">
          <div>
            <p>
              <strong>Empreintes & Digitales Editions </strong>
              est une maison d’édition consacrée aux éditions d’artistes et plus
              particulièrement à l’art photographique, c’est pour nous la
              poursuite d’une aventure originale et audacieuse qui nous permet
              de faire des choix singuliers en matière de création.
            </p>
            <p>
              Dans ce contexte Empreintes&Digitales défend l’oeuvre de
              photographes auteurs qui entretiennent une relation à la
              photographie, poétique, philosophique ou documentaire et qui pose
              plus précisement un regard sur le territoire dans toute ses
              dimensions. Créée en 2015 par Jean-Yves Camus la structure se
              rattache à l’association LIBrE qui favorise la mise en valeur
              d’œuvres photographiques et d’auteurs qui, par leur rapport
              profond au monde et au paysage, amènent une richesse de réflexion
              tant sur le statut de la photographie que sur notre environnement
              au sens large du terme.
            </p>
          </div>
          <div>
            <ul>
              <li>
                Adresse:
                <div>8 Square Georges de La Tour 54130 Saint-Max</div>
              </li>
              <li>
                Tel: 
                <div>
                  <a href="tel:+33687756776">+33 06 87 75 67 76</a>
                </div>
              </li>
              <li>
                E-mails :
                <div>
                  <a href="mailto: contact@empreintesetdigitaleseditions.com">
                    contact@empreintesetdigitaleseditions.com
                  </a>
                </div>
                <div>
                  <a href="mailto: administration@empreintesetdigitaleseditions.com">
                    administration@empreintesetdigitaleseditions.com
                  </a>
                </div>
                <div>
                  <a href="mailto: servicejuridique@empreintesetdigitaleseditions.com">
                    servicejuridique@empreintesetdigitaleseditions.com
                  </a>
                </div>
              </li>
            </ul>
            <p>
              Pour tout achat d’un ouvrage vous pouvez nous contacter par mail
              un lien de payement sécurisé vous sera transmis par retour.
            </p>
            <a href="mailto: servicefinancier@empreintesetdigitaleseditions.com">
              servicefinancier@empreintesetdigitaleseditions.com
            </a>
            <p>
              Si vous avez des projets d’édition vous pouvez nous contacter afin
              que nous puissions en discuter ensemble.
            </p>
            <a href="mailto: directionartistique@empreintesetdigitaleseditions.com">
              directionartistique@empreintesetdigitaleseditions.com
            </a>
          </div>
          <div></div>
        </div>
      </article>
    </Page>
  )
}

AboutPage.isPublic = true

export default AboutPage

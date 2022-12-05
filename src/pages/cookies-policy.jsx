import Page from "@/web/components/Page"
import Link from "@/web/components/Link.jsx"
import { Accordion } from "flowbite-react"
import { Table } from "flowbite-react"
import { Checkbox } from "flowbite-react"

const CookiesPolicyPage = () => {
  return (
    <Page title="Politique de cookies (UE)" small>
      <article className="prose w-auto max-w-7xl flex-auto cursor-default">
        <p className="italic">
          Cette politique de cookies a été mise à jour pour la dernière fois le
          1 mars 2022 et s’applique aux citoyens et aux résidents permanents
          légaux de l’Espace Économique Européen et de la Suisse.
        </p>
        <h2>1. Introduction</h2>
        <p>
          Notre site web,
          <strong>
            <Link href="https://empreintesetdigitaleseditions.com/">
              https://empreintesetdigitaleseditions.com/
            </Link>
          </strong>
          (ci-après : « le site web ») utilise des cookies et autres
          technologies liées (par simplification, toutes ces technologies sont
          désignées par le terme « cookies »). Des cookies sont également placés
          par des tierces parties que nous avons engagées. Dans le document
          ci-dessous, nous vous informons de l’utilisation des cookies sur notre
          site web.
        </p>
        <h2>2. Que sont les cookies ?</h2>
        <p>
          Un cookie est un petit fichier simple envoyé avec les pages de ce site
          web et stocké par votre navigateur sur le disque dur de votre
          ordinateur ou d’un autre appareil. Les informations qui y sont
          stockées peuvent être renvoyées à nos serveurs ou aux serveurs des
          tierces parties concernées lors d’une visite ultérieure.
        </p>
        <h2>3. Que sont les scripts ?</h2>
        <p>
          Un script est un élément de code utilisé pour que notre site web
          fonctionne correctement et de manière interactive. Ce code est exécuté
          sur notre serveur ou sur votre appareil.
        </p>
        <h2>4. Qu’est-ce qu’une balise invisible ?</h2>
        <p>
          Une balise invisible (ou balise web) est un petit morceau de texte ou
          d’image invisible sur un site web, utilisé pour suivre le trafic sur
          un site web. Pour ce faire, diverses données vous concernant sont
          stockées à l’aide de balises invisibles.
        </p>
        <h2>5. Cookies</h2>
        <h3>5.1 Cookies techniques ou fonctionnels</h3>
        <p>
          Certains cookies assurent le fonctionnement correct de certaines
          parties du site web et la prise en compte de vos préférences en tant
          qu’utilisateur. En plaçant des cookies fonctionnels, nous vous
          facilitons la visite de notre site web. Ainsi, vous n’avez pas besoin
          de saisir à plusieurs reprises les mêmes informations lors de la
          visite de notre site web et, par exemple, les éléments restent dans
          votre panier jusqu’à votre paiement. Nous pouvons placer ces cookies
          sans votre consentement.
        </p>
        <h3>5.2 Cookies statistiques</h3>
        <p>
          Nous utilisons des cookies statistiques afin d’optimiser l’expérience
          des utilisateurs sur notre site web. Avec ces cookies statistiques,
          nous obtenons des observations sur l’utilisation de notre site web.
          Nous demandons votre permission pour placer des cookies statistiques.
        </p>
        <h3>5.3 Cookies de marketing/suivi</h3>
        <p>
          Les cookies de marketing/suivi sont des cookies ou toute autre forme
          de stockage local, utilisés pour créer des profils d’utilisateurs afin
          d’afficher de la publicité ou de suivre l’utilisateur sur ce site web
          ou sur plusieurs sites web dans des finalités marketing similaires.
        </p>
        <h2>6. Cookies placés</h2>
        <Accordion alwaysOpen={true}>
          <Accordion.Panel>
            <Accordion.Title>
              Admin - Finalité en attente d’enquête
            </Accordion.Title>
            <Accordion.Content>
              <h3>Utilisation: </h3>
              <p>Nous utilisons Admin pour le développement du site web.</p>
              <h3>Partage de données:</h3>
              <p>Ces données ne sont pas partagées avec des tierces parties.</p>
              <Table striped={true}>
                <Table.Head>
                  <Table.HeadCell>Nom</Table.HeadCell>
                  <Table.HeadCell>Expiration</Table.HeadCell>
                  <Table.HeadCell>Fonction</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      test_cookie
                    </Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                  </Table.Row>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      test_cookie
                    </Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              Divers - Finalité en attente d’enquête
            </Accordion.Title>
            <Accordion.Content>
              <h3>
                Utilisation - Partage de données Le partage des données est en
                cours d’enquête
              </h3>
              <Table striped={true}>
                <Table.Head>
                  <Table.HeadCell>Nom</Table.HeadCell>
                  <Table.HeadCell>Expiration</Table.HeadCell>
                  <Table.HeadCell>Fonction</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      _ga_E6KM07GCRG
                    </Table.Cell>
                    <Table.Cell>365 jours</Table.Cell>
                    <Table.Cell></Table.Cell>
                  </Table.Row>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      _ga_E6KM07GCRG
                    </Table.Cell>
                    <Table.Cell>365 jours</Table.Cell>
                    <Table.Cell></Table.Cell>
                  </Table.Row>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      _ga
                    </Table.Cell>
                    <Table.Cell>365 jours</Table.Cell>
                    <Table.Cell></Table.Cell>
                  </Table.Row>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      cmplz_banner-status
                    </Table.Cell>
                    <Table.Cell>365 jours</Table.Cell>
                    <Table.Cell></Table.Cell>
                  </Table.Row>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      cmplz_consented_services
                    </Table.Cell>
                    <Table.Cell>365 jours</Table.Cell>
                    <Table.Cell></Table.Cell>
                  </Table.Row>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      cmplz_functional
                    </Table.Cell>
                    <Table.Cell>365 jours</Table.Cell>
                    <Table.Cell></Table.Cell>
                  </Table.Row>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      cmplz_marketing
                    </Table.Cell>
                    <Table.Cell>365 jours</Table.Cell>
                    <Table.Cell></Table.Cell>
                  </Table.Row>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      cmplz_policy_id
                    </Table.Cell>
                    <Table.Cell>365 jours</Table.Cell>
                    <Table.Cell></Table.Cell>
                  </Table.Row>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      cmplz_preferences
                    </Table.Cell>
                    <Table.Cell>365 jours</Table.Cell>
                    <Table.Cell></Table.Cell>
                  </Table.Row>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      cmplz_statistics
                    </Table.Cell>
                    <Table.Cell>365 jours</Table.Cell>
                    <Table.Cell></Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
        <h2>7. Consentement</h2>
        Lorsque vous visitez notre site web pour la première fois, nous vous
        montrerons une fenêtre contextuelle avec une explication sur les
        cookies. Dès que vous cliquez sur « Enregistrer les préférences » vous
        nous autorisez à utiliser les catégories de cookies et d’extensions que
        vous avez sélectionnés dans la fenêtre contextuelle, comme décrit dans
        la présente politique de cookies. Vous pouvez désactiver l’utilisation
        des cookies via votre navigateur, mais veuillez noter que notre site web
        pourrait ne plus fonctionner correctement.
        <h3>7.1 Gérez vos réglages de consentement</h3>
        <Accordion alwaysOpen={true}>
          <Accordion.Panel>
            <Accordion.Title>Fonctionnel - Toujours activé</Accordion.Title>
            <Accordion.Content>
              <p>
                Le stockage ou l’accès technique est strictement nécessaire dans
                la finalité d’intérêt légitime de permettre l’utilisation d’un
                service spécifique explicitement demandé par l’abonné ou
                l’utilisateur, ou dans le seul but d’effectuer la transmission
                d’une communication sur un réseau de communications
                électroniques.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>Statistiques</Accordion.Title>
            <Accordion.Content>
              <div className="flex justify-between">
                <p>
                  Le stockage ou l’accès technique qui est utilisé exclusivement
                  à des fins statistiques.
                </p>
                <Checkbox />
              </div>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>Marketing</Accordion.Title>
            <Accordion.Content>
              <div className="flex justify-between">
                <p>
                  Le stockage ou l’accès technique est nécessaire pour créer des
                  profils d’utilisateurs afin d’envoyer des publicités, ou pour
                  suivre l’utilisateur sur un site web ou sur plusieurs sites
                  web ayant des finalités marketing similaires.
                </p>
                <Checkbox />
              </div>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
        <h2>8. Vos droits concernant les données personnelles</h2>
        <p>
          Vous avez les droits suivants concernant vos données personnelles :
        </p>
        <ul>
          <li>
            Vous avez le droit de savoir pourquoi vos données personnelles sont
            nécessaires, ce qui leur arrivera et combien de temps elles seront
            conservées.
          </li>
          <li>
            Droit d’accès : vous avez le droit d’accéder à vos données
            personnelles que nous connaissons.
          </li>
          <li>
            Droit de rectification : vous avez le droit à tout moment de
            compléter, corriger, faire supprimer ou bloquer vos données
            personnelles.
          </li>
          <li>
            Si vous nous donnez votre consentement pour le traitement de vos
            données, vous avez le droit de révoquer ce consentement et de faire
            supprimer vos données personnelles.
          </li>
          <li>
            Droit de transférer vos données : vous avez le droit de demander
            toutes vos données personnelles au responsable du traitement et de
            les transférer dans leur intégralité à un autre responsable du
            traitement.
          </li>
          <li>
            Droit d’opposition : vous pouvez vous opposer au traitement de vos
            données. Nous obtempérerons, à moins que certaines raisons ne
            justifient ce traitement.
          </li>
        </ul>
        <p>
          Pour exercer ces droits, veuillez nous contacter. Veuillez vous
          référer aux coordonnées au bas de cette politique de cookies. Si vous
          avez une plainte concernant la façon dont nous traitons vos données,
          nous aimerions en être informés, mais vous avez également le droit de
          déposer une plainte auprès de l’autorité de contrôle (l’autorité
          chargée de la protection des données, comme le CEPD).
        </p>
        <h2>9. Activer/désactiver et supprimer les cookies</h2>
        <p>
          Vous pouvez utiliser votre navigateur internet pour supprimer
          automatiquement ou manuellement les cookies. Vous pouvez également
          spécifier que certains cookies ne peuvent pas être placés. Une autre
          option consiste à modifier les réglages de votre navigateur Internet
          afin que vous receviez un message à chaque fois qu’un cookie est
          placé. Pour plus d’informations sur ces options, reportez-vous aux
          instructions de la section Aide de votre navigateur.
        </p>
        <p>
          Veuillez noter que notre site web peut ne pas marcher correctement si
          tous les cookies sont désactivés. Si vous supprimez les cookies dans
          votre navigateur, ils seront de nouveau placés après votre
          consentement lorsque vous revisiterez nos sites web.
        </p>
        <h2>10. Coordonnées</h2>
        <p>
          Pour des questions et/ou des commentaires sur notre politique de
          cookies et cette déclaration, veuillez nous contacter en utilisant les
          coordonnées suivantes :
        </p>
        <ul></ul>
        <p>
          Cette politique de cookies a été synchronisée avec 
          <strong>
            <Link href="https://cookiedatabase.org/">
              https://cookiedatabase.org/
            </Link>
          </strong>
           le 1 mars 2022
        </p>
      </article>
    </Page>
  )
}

CookiesPolicyPage.isPublic = true

export default CookiesPolicyPage

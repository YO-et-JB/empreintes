import Page from "@/web/components/Page"
import Link from "@/web/components/Link.jsx"
import { Disclosure } from "@headlessui/react"
import { ChevronUpIcon } from "@heroicons/react/20/solid"

const LegalNoticePage = () => {
  return (
    <Page title="Mentions légales" small>
      <div className="w-full cursor-default px-4 pt-16">
        <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-slate-100 px-4 py-2 text-left text-sm font-medium text-slate-900 hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-slate-500 focus-visible:ring-opacity-75">
                  <span>Article 1 Site (ci-après « le site ») :</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-slate-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-slate-800">
                  <strong>
                    <Link href="https://empreintesetdigitaleseditions.com/">
                      https://empreintesetdigitaleseditions.com/
                    </Link>
                  </strong>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-slate-100 px-4 py-2 text-left text-sm font-medium text-slate-900 hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-slate-500 focus-visible:ring-opacity-75">
                  <span>Article 2 Éditeur (ci-après « l’éditeur ») :</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-slate-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-slate-800">
                  <p>
                    <strong>
                      L’association LIBrE ,déclarée auprès de la préfecture de
                      NANCY
                    </strong>
                    sous le numéro :
                    <strong>
                      519 354 096 00017<br></br>
                      dont le siège social est situé : 77 Av Carnot 54130
                    </strong>
                  </p>
                  <p>
                    <strong>
                      n° de téléphone :
                      <a href="tel:+3368775677">+33 68 77 56 77</a>
                    </strong>
                  </p>
                  <div>
                    adresse mail : 
                    <p>
                      <strong>
                        <a href="mailto: administration@empreintesetdigitaleseditions.com">
                          administration@empreintesetdigitaleseditions.com
                        </a>
                      </strong>
                    </p>
                    représentée par<strong> JeanYves Camus Directeur</strong>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-slate-100 px-4 py-2 text-left text-sm font-medium text-slate-900 hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-slate-500 focus-visible:ring-opacity-75">
                  <span>Article 3 Hébergeur (ci-après « l’hébergeur ») :</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-slate-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-slate-800">
                  <strong>
                    EmpreintesetDigitaleseditions.com est hébergé par OVH , dont
                    le siège social est situé
                  </strong>
                  <br></br>
                  <strong>19 Pl. Françoise Dorin Paris .</strong>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </Page>
  )
}

LegalNoticePage.isPublic = true

export default LegalNoticePage

import Page from "@/web/components/Page"
import Link from "@/web/components/Link.jsx"

const NotFoundPage = () => {
  return (
    <Page>
      <div className="min-h-full bg-white px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
        <div className="mx-auto max-w-max">
          <main className="sm:flex">
            <p className="text-4xl font-extrabold text-slate-600 sm:text-5xl">
              404
            </p>
            <div className="sm:ml-6">
              <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                  Page introuvable
                </h1>
                <p className="mt-1 text-base text-gray-500">
                  Veuillez vérifier l'URL dans la barre d'adresse et réessayer.
                </p>
              </div>
              <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                <Link
                  href="/"
                  className="inline-flex items-center rounded-md border border-transparent bg-slate-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
                >
                  Retour à la page d'acceuil
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center rounded-md border border-transparent bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
                >
                  Contactez le support
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    </Page>
  )
}

NotFoundPage.isPublic = true

export default NotFoundPage

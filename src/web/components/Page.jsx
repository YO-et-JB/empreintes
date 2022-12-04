//import { useAppContext } from "@/web/components/AppContext.jsx"
import classNames from "classnames"
//import { useCallback } from "react"
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"

const Page = (props) => {
  const { title, small, children } = props
  /*const {
    setSession,
    state: { session },
  } = useAppContext()
  const logout = useCallback(() => setSession(null), [setSession])*/

  return (
    <div className="flex flex-col w-screen">
      <Header />

      <article
        className={classNames(
          small ? "w-fit" : "w-screen",
          "p-2 md:px-0 mx-auto"
        )}
      >
        {title ? (
          <h1 className="text-2xl font-bold text-slate-600 p-2 mb-4">
            {title}
          </h1>
        ) : null}
        {children}
      </article>

      <Footer />
    </div>
  )
}

export default Page

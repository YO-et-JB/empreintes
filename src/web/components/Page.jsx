import classNames from "classnames"
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"

const Page = (props) => {
  const { title, small, children } = props

  return (
    <div className="mb-auto flex h-screen flex-col justify-between">
      <Header />
      <article
        className={classNames(
          small ? "w-fit" : "w-screen",
          "max-w-screen mx-auto grow sm:px-6"
        )}
      >
        {title ? (
          <h1 className="mb-4 p-4 text-2xl font-bold text-slate-600">
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

import Loading from "@/web/components/Loading.jsx"
import Page from "@/web/components/Page.jsx"
import Book from "@/web/components/Book.jsx"
import api from "@/web/services/api.js"
import { useEffect, useState } from "react"

export const getServerSideProps = async (context) => {
  const { query } = context

  return {
    props: { query },
    //will be passed to the page component as props, cf. Doc nextjs
  }
}

const UsersSinglePage = (props) => {
  const {
    query: { userId },
  } = props
  const [user, setUser] = useState(null)
  const [books, setBooks] = useState([])

  useEffect(() => {
    ;(async () => {
      const [
        {
          data: { result: userResult },
        },
        {
          data: { result: booksResult },
        },
      ] = await Promise.all([
        api(`/users/${userId}`),
        api("/books/", { /* query */ params: { userId } }),
      ])

      setUser(userResult[0])
      setBooks(booksResult)
    })()
  }, [userId])

  if (!user) {
    return <Loading />
  }

  return (
    <Page>
      <header>
        <h1 className="text-3xl font-bold text-blue-600 p-4">
          All books by {user.displayName}
        </h1>
      </header>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </Page>
  )
}

export default UsersSinglePage

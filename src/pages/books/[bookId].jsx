import Loading from "@/web/components/Loading.jsx"
import Page from "@/web/components/Page.jsx"
import Book from "@/web/components/Book.jsx"
import api from "@/web/services/api.js"
import { useEffect, useState } from "react"

export const getServerSideProps = async (context) => {
  return { props: { query: context.query } }
}

const BooksSinglePage = (props) => {
  const {
    query: { bookId },
  } = props
  const [book, setBook] = useState(null)

  useEffect(() => {
    ;(async () => {
      const {
        data: {
          result: [result],
        },
      } = await api(`/books/${bookId}`)

      setBook(result)
    })()
  }, [bookId])

  if (!book) {
    return <Loading />
  }

  return (
    <Page>
      <Book book={book} />
    </Page>
  )
}

export default BooksSinglePage

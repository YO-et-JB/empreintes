import Link from "@/web/components/Link.jsx"
import { formatLongDateTime } from "@/web/formatters/date.js"
import classNames from "classnames"

const Book = (props) => {
  const { book, className } = props

  return (
    <article className={classNames("px-4 py-4", className)}>
      <header className="mb-4">
        <h1 className="text-2xl font-bold italic">
          <Link
            href={`/books/${book.id}`}
            className="hover:text-slate-600 hover:underline"
          >
            {book.title}
          </Link>
        </h1>
        <p className="text-sm text-slate-600">
          Published by{" "}
          <Link
            href={`/users/${book.user.id}`}
            className="font-bold hover:underline"
          >
            {book.user.displayName}
          </Link>{" "}
          on {formatLongDateTime(new Date(book.publishedAt))}
        </p>
      </header>

      {book.content.split("\n").map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
    </article>
  )
}

export default Book

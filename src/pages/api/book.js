import makeEndpoint from "@/api/makeEndpoint"
import validate from "@/api/middlewares/validate"
import filterDBResult from "@/api/filterDBResult"
import auth from "@/api/middlewares/auth"
import {validateBookContent, validateId, validateLimit, validateOffset, validateSearch} from "validators.js"

const book = makeEndpoint({

//CREATE
  POST: [
    "/books",
    auth,
    validate({
      body: {
        postId: validateId.required(),
        content: validateBookContent.required(),
      },
    }),
    async (req, res) => {
      const {
        ctx:{db},
        body: { content, bookId },
        session: { user },
      } = req

      const [book] = await db("books")
        .insert({
          content,
          bookId,
          userId: user.id,
        })
        .returning("*")

      res.send({ result: filterDBResult([book]), count: 1 })
    }
  ],
  
  // READ collection
  GET: [
    "/books",
    validate({
      query: {
        limit: validateLimit,
        offset: validateOffset,
        userId: validateId,
        bookId: validateId,
        search: validateSearch,
      },
    }),
    async (req, res) => {
      const { limit, offset, userId, bookId, search, ctx:{db} } = req.locals.query
      const booksQuery = db("books").limit(limit).offset(offset)
      const countQuery = db("books").count()

      if (bookId) {
        booksQuery.where({ bookId })
        countQuery.where({ bookId })
      }

      if (userId) {
        booksQuery.where({ userId })
        countQuery.where({ userId })
      }

      if (search) {
        const searchPattern = `%${search}%`
        booksQuery.where((query) =>
          query.whereILike("content", searchPattern)
        )
        countQuery.where((query) => query.whereILike("content", searchPattern))
      }

      const books = await booksQuery
      const [{ count }] = await countQuery

      res.send({ result: filterDBResult(books), count })
    }

  ],

  //READ Single
  GET: [
    "/book/:bookId",
    validate({
      params: {
        bookId: validateId.required(),
      },
    }),
    async (req, res) => {
      const { bookId, ctx:{db} } = req.params

      const [book] = await db("book").where({ id: bookId })

      if (!book) {
        res.status(404).send({ error: "book not found." })

        return
      }

      res.send({ result: [book], count: 1 })
    }
  ],

  //UPDATE Partial
  PATCH: [
    "/books/:bookId",
    validate({
      params: {
        bookId: validateId.required(),
      },
      body: {
        content: validateBookContent.required(),
      },
    }),
    async (req, res) => {
      const {
        params: { bookId },
        ctx:{db},
        body: { content },
      } = req

      const [book] = await db("books").where({ id: bookId })

      if (!book) {
        res.status(404).send({ error: "book not found." })

        return
      }

      const [updatedBook] = await db("books")
        .where({ id: bookId })
        .update({
          content,
          updatedAt: new Date(),
        })

      res.send({ result: [updatedBook], count: 1 })
    }
  ],

  //DELETE
  DELETE: [
    "/books/:bookId",
    validate({ params: { bookId: validateId.required() } }),
    async (req, res) => {
      const {
        params: { bookId }, ctx:{db},
      } = req

      const [book] = await db("books").where({ id: bookId })

      if (!book) {
        res.status(404).send({ error: "book not found." })

        return
      }

      await db("books").where({ id: bookId }).delete()

      res.send({ result: [book], count: 1 })
    }
  ]
})

export default book
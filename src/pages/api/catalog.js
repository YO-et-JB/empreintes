import makeEndpoint from "../makeEndpoint"
import auth from "@/api/middlewares/auth"
import validate from "@/api/middlewares/validate"
import { validateLimit, validateCatalogTitle, validateCatalogContent, validatePublishedAt, validateId, validateOffset, validateSearch } from "@/api/validators"
import filterDBResult from "@/api/filterDBResult"

const catalog = makeEndpoint({
  //CREATE
  POST: [
    auth,
    validate({
      body: {
        title: validateCatalogTitle.required(),
        content: validateCatalogContent.required(),
        publishedAt: validatePublishedAt,
      },
    }),
    async (req, res) => {
      const {
        ctx: { db }, //utiliser le context pour extraire la ressource (db, upload...) préablement déclarée dans makeEndpoint
        body: { title, content, publishedAt },
        session: { user },
      } = req

      const [catalog] = await db("catalogs")
        .insert({
          title,
          content,
          publishedAt,
          userId: user.id,
        })
        .returning("*")

      res.send({ result: filterDBResult([catalog]), count: 1 })
    },
  ],

  //READ COLLECTION: app.get("/catalogs",...)
  GET: [
    validate({
      query: {
        limit: validateLimit,
        offset: validateOffset,
        userId: validateId,
        search: validateSearch,
      },
    }),
    async (req, res) => {
      const {
        body: { limit, offset, userId, search },
      } = req.locals.query
      const catalogsQuery = catalog.query()
        .withGraphFetched("user")
        .limit(limit)
        .offset(offset)
        .whereNotNull("publishedAt")
        .orderBy("publishedAt", "DESC")
      const countQuery = catalog.query().count().whereNotNull("publishedAt")

      if (userId) {
        catalogsQuery.where({ userId })
        countQuery.where({ userId })
      }

      if (search) {
        const searchPattern = `%${search}%`
        catalogsQuery.where((query) =>
          query
            .whereILike("title", searchPattern)
            .orWhereILike("content", searchPattern)
        )
        countQuery.where((query) =>
          query
            .whereILike("title", searchPattern)
            .gorWhereILike("content", searchPattern)
        )
      }

      const [{ count }] = await countQuery
      const catalogs = await catalogsQuery

      res.send({ result: filterDBResult(catalogs), count })
    },
  ],

  // READ SINGLE: app.get("/catalogs/:catalogId,...")
  GET: [
    validate({
      params: {
        catalogId: validateId.required(),
      },
    }),
    async (req, res) => {
      const { catalogId, ctx:{db} } = req.params

      const [catalog] = await db("catalogs").where({ id: catalogId })

      if (!catalog) {
        res.status(404).send({ error: "catalog not found." })

        return
      }

      const formattedCatalog = Object.entries(catalog).reduce(
        (xs, [key, value]) => {
          if (key.startsWith("users:")) {
            xs.user[key.slice(6)] = value

            return xs
          }

          xs[key] = value

          return xs
        },
        { user: {} }
      )

      res.send({ result: [formattedCatalog], count: 1 })
    },
  ],

  // UPDATE partial: app.patch("/catalogs/:catalogId, auth,..")
  PATCH: [
    validate({
      params: {
        catalogId: validateId.required(),
      },
      body: {
        title: validateCatalogTitle,
        content: validateCatalogContent,
        publishedAt: validatePublishedAt,
      },
    }),
    async (req, res) => {
      const {
        ctx:{db},
        params: { catalogId },
        body: { title, content, publishedAt },
      } = req

      const [catalog] = await db("catalogs").where({ id: catalogId })

      if (!catalog) {
        res.status(404).send({ error: "catalog not found." })

        return
      }

      const [updatedCatalog] = await db("catalogs")
        .where({ id: catalogId })
        .update({
          title,
          content,
          publishedAt,
          updatedAt: new Date(),
        })
        .returning("*")

      res.send({ result: [updatedCatalog], count: 1 })
    },
  ],

  // DELETE: app.delete("/catalogs/:catalogId",...)
  DELETE: [
    validate({ params: { catalogId: validateId.required() } }),
    async (req, res) => {
      const {
        ctx:{db},
        params: { catalogId },
      } = req

      const [catalog] = await db("catalogs").where({ id: catalogId })

      if (!catalog) {
        res.status(404).send({ error: "catalog not found." })

        return
      }

      await db("catalogs").where({ id: catalogId }).delete()

      res.send({ result: [catalog], count: 1 })
    },
  ],
})

export default catalog

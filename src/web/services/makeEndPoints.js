import knex from "knex"
import { Model } from "objection"

const makeEndpoint = (handlers) => async (req, res) => {
  const mws = handlers[req.method.toUpperCase()]

  if (!mws) {
    res.status(404).send("Not found")

    return
  }

  let mwIndex = 0

  const db = knex({
    client: "pg",
    connection: {
      user: "postgres",
      database: "EmpreintesDigitales",
      port: "6000",
      password: "TOTO",
    },
    migrations: {
      directory: "./src/api/db/migrations",
      stub: "./src/api/db/migration.stub",
    },
  })

  Model.knex(db)

  req.ctx = { db }

  const next = async () => {
    const mw = mws[mwIndex]
    mwIndex += 1

    await mw(req, res, next)
  }

  try {
    await next()
  } catch (err) {
    res.send({ error: [err.message] }).status(500)
  }
}

export default makeEndpoint

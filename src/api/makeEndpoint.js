import knex from "knex"

const makeEndpoint = (handlers) => async (req, res) => {
  const mws = handlers[req.method.toUpperCase()]

  if (!mws) {
    res.status(404).send("Not found")

    return
  }

  // équivalent to index.js in express model
  let mwIndex = 0

  const db = knex({  // ici toute la config.next > client, connection, migration
    client: "pg",
    connection: {
      port: process.env.DB_DATABASE_PORT,  //"6000",
      password: process.env.DB_PASSWORD,  // "rav",
      user: process.env.DB_USER,           //"postgres",
      database: process.env.DB_DATABASE,   //"Digitales",
    },
    migrations: {
      directory: "./src/db/migrations",
      stub: "./src/db/migration.stub",
    },
  }) 

  const mw = knex({})
  const validators = knex({})
  const pages=knex({})
  const books = knex({})
  
  // après création de la connection, 
  //stocker tout ce dont on a besoin dans: req.db / req.ctx = { db, S3... }

  req.context = {
    db,
    mw,
    validators,
    pages,
    books
  }

  const next = async () => {
    const mw = mws[mwIndex]
    mwIndex += 1

    await mw(req, res, next)
  }

  try {
    await next()
  } catch (err) {
    //console.log(err)
    res.send({ error: [err.message] }).status(500)
  }
}

export default makeEndpoint

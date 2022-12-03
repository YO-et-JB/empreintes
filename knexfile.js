module.exports = {
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
}

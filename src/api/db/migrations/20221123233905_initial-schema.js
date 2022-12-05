exports.up = async (knex) => {
  await knex.schema.createTable("users", (table) => {
    table.increments("id")
    table.text("username").notNullable()
    table.text("firstName")
    table.text("lastName")
    table.text("email").notNullable()
    table.text("phoneNumber")
    table.date("birthDate")
    table.text("streetAddress")
    table.text("city")
    table.text("stateProvince")
    table.text("zipPostalCode")
    table.text("appartmentNumber")
    table.text("company")
    table.text("companyWebsite")
    table.text("about")
    table.text("passwordHash").notNullable()
    table.text("passwordSalt").notNullable()
    table.timestamps(true, true, true)
  })
  await knex.schema.createTable("publications", (table) => {
    table.increments("id")
    table.text("title").notNullable()
    table.text("content").notNullable()
    table.text("specifications").notNullable()
    table.decimal("price").notNullable()
    table.datetime("publishedAt")
    table.timestamps(true, true, true)
    table.integer("userId").notNullable().references("id").inTable("users")
  })
  await knex.schema.createTable("tags", (table) => {
    table.increments("id")
    table.text("name").notNullable()
    table.timestamps(true, true, true)
  })
  await knex.schema.createTable("medias", (table) => {
    table.increments("id")
    table.text("uri").notNullable()
    table.text("type").notNullable()
    table.timestamps(true, true, true)
  })
  await knex.schema.createTable("rel_publications_tags", (table) => {
    table
      .integer("publicationId")
      .notNullable()
      .references("id")
      .inTable("publications")
    table.integer("tagId").notNullable().references("id").inTable("tags")
    table.primary(["publicationId", "tagId"])
  })
  await knex.schema.createTable("rel_medias_publications", (table) => {
    table.integer("mediaId").notNullable().references("id").inTable("medias")
    table
      .integer("publicationId")
      .notNullable()
      .references("id")
      .inTable("publications")
    table.primary(["publicationId", "mediaId"])
  })
}

exports.down = async (knex) => {
  await knex.schema.dropTable("rel_medias_publications")
  await knex.schema.dropTable("rel_publications_tags")
  await knex.schema.dropTable("tags")
  await knex.schema.dropTable("medias")
  await knex.schema.dropTable("publications")
  await knex.schema.dropTable("users")
}

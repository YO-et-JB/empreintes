exports.up = async (knex) => {
  await knex.schema.alterTable("publications", (table) => {
    table.dropForeign(["userId"])
    table
      .integer("userId")
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .alter()
  })
}

exports.down = async (knex) => {
  await knex.schema.alterTable("publications", (table) => {
    table.dropForeign(["userId"])
    table
      .integer("userId")
      .notNullable()
      .references("id")
      .inTable("users")
      .alter()
  })
}

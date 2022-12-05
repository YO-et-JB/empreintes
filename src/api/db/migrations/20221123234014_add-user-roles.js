exports.up = async (knex) => {
  await knex.schema.alterTable("users", (table) => {
    table.text("role").notNullable().default("READER")
  })
}

exports.down = async (knex) => {
  await knex.schema.alterTable("users", (table) => {
    table.dropColumn("role")
  })
}

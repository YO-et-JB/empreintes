exports.up = async (knex) => {
  await knex.schema.alterTable("users", (table) => {
    table.text("email").unique().alter()
    table.text("phoneNumber").unique().alter()
  })
}

exports.down = async (knex) => {
  await knex.schema.alterTable("users", (table) => {
    table.dropUnique("email")
    table.dropUnique("phoneNumber")
  })
}

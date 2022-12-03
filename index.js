import knex from "knex"
import config from "../knexfile.js"
import { Model } from "objection"

const db = knex(config.db)

Model.knex(db)

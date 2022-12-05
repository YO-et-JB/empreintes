import makeEndpoint from "@/web/services/makeEndPoints"
import User from "../../api/db/models/User.js"
import filterDBResult from "../../api/filterDBResult.js"
import hashPassword from "../../api/hashPassword.js"
import auth from "../../api/middlewares/auth.js"
import validate from "../../api/middlewares/validate.js"
import hasAccess from "../../api/utils/hasAccess.js"
import {
  validateEmail,
  validateUsername,
  validatePassword,
  validateName,
  validatePhoneNumber,
  validateId,
  validateLimit,
  validateOffset,
} from "../../validators.js"

const handler = makeEndpoint({
  // CREATE
  POST: [
    async (req, res, next) => {
      validate({
        body: {
          username: validateUsername.required(),
          email: validateEmail.required(),
          password: validatePassword.required(),
        },
      })

      await next()
    },
    async (req, res) => {
      const { username, email, password } = req.body
      const [passwordHash, passwordSalt] = hashPassword(password)
      const user = await User.query()
        .insert({
          username,
          email,
          passwordHash,
          passwordSalt,
        })
        .returning("*")
      res.send({ result: filterDBResult([user]), count: 1 })
    },
  ],
  // READ collection
  GET: [
    auth("ADMIN"),
    async (req, res, next) => {
      validate({
        query: {
          limit: validateLimit,
          offset: validateOffset,
        },
      }),
        await next()
    },
    async (req, res) => {
      const { limit, offset } = req.locals.query
      const users = await User.query().limit(limit).offset(offset)
      const [{ count }] = await User.query().count()

      res.send({ result: filterDBResult(users), count })
    },
  ],
  // READ single
  GET: [
    async (req, res, next) => {
      validate({
        params: {
          email: validateEmail,
        },
      }),
        await next()
    },
    async (req, res) => {
      const { email } = req.params
      const user = await User.query().findOne({ email }).throwIfNotFound()

      res.send({ result: filterDBResult([user]), count: 1 })
    },
  ],
  // UPDATE partial
  PATCH: [
    auth(),
    async (req, res, next) => {
      validate({
        body: {
          firstName: validateName,
          lastName: validateName,
          phoneNumber: validatePhoneNumber,
        },
      }),
        await next()
    },
    async (req, res) => {
      const {
        ctx: { db },
        body: { firstName, lastName, email, phoneNumber },
        session:{user:{id:userId}},
      } = req

      const [user] = await db("users").where({ id: userId })

      if (!user) {
        res.status(404).send({ error: ["user not found"] })
      }

      // let passwordHash
      // let passwordSalt

      // if (password) {
      //   const [hash, salt] = hashPassword(password)

      //   passwordHash = hash
      //   passwordSalt = salt
      // }

      const updatedUser = await user
        .$query()
        .patch({
          firstName,
          lastName,
          email,
          phoneNumber,
          //passwordHash,
          //passwordSalt,
          updatedAt: new Date(),
        })
        .where({ id: userId })
        .returning("*")

      res.send({ result: updatedUser, count: 1 })
    },
  ],
  // DELETE
  DELETE: [
    auth("ADMIN"),
    async (req, res, next) => {
      validate({
        params: {
          userId: validateId.required(),
        },
      }),
        await next()
    },
    async (req, res) => {
      hasAccess("ADMIN")

      const { userId } = req.params

      const user = await User.query().deleteById(userId).throwIfNotFound()

      res.send({ result: filterDBResult([user]), count: 1 })
    },
  ],
})

export default handler

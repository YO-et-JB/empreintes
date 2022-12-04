import filterDBResult from "@/api/filterDBResult"
import hashPassword from "@/api/hashPassword"
import makeEndpoint from "../../api/makeEndpoint"
import validate from "@/api/middlewares/validate"
import User from "@/api/db/models/User"
import {
  validateDisplayName,
  validateUsername,
  validateEmail,
  validatePassword,
  validateLimit,
  validateOffset,
  validateId,
} from "@/api/validators.js"

const users = makeEndpoint({

  // CREATE 
  POST: [
    "/",
    validate({
      body: {
        displayName: validateDisplayName.required(),
        username: validateUsername.required(),
        email: validateEmail.required(),
        password: validatePassword.required(),
      },
    }),
    async (req, res) => {
      const { email, username, displayName, password } = req.body
      const [passwordHash, passwordSalt] = hashPassword(password)

      const [user] = await User.query()
        .insert({
          email,
          username,
          displayName,
          passwordHash,
          passwordSalt,
        })
        .returning("*")

      res.send({ result: filterDBResult([user]), count: 1 })
    }
  ],

  // READ collection
  GET: [
        "/users",
    validate({
      query: {
        limit: validateLimit,
        offset: validateOffset,
      },
    }),
    async (req, res) => {
      const { limit, offset, ctx:{db} } = req.query
      const users = await db("users").limit(limit).offset(offset)
      const [{ count }] = await db("users").count()

      res.send({ result: filterDBResult(users), count })
    }
  ],

  //READ single
  GET: [
    "/users/:userId",
    validate({
      params: {
        userId: validateId.required(),
      },
    }),
    async (req, res) => {
      const { userId, ctx:{db} } = req.params

      if (typeof userId == "number") {
        const user = await db("users").findById(userId)
        const [{ count }] = await db("users").count()

        if (!user) {
          res.status(404).send({ error: ["User not found."] })

          return
        }

        res.send({ result: filterDBResult([user]), count })

        return
      }

      //get par email

      const [user] = await db("users")
        .where({ email: userId })
        .select("id", "email", "username", "displayName")

      if (!user) {
        res.status(200).send("Ok")

        return
      }

      console.log(user)

      res.send({ result: user })
    }
  ],

  //UPDATE Partial
  PATCH: [
    "/users/:userId",
    validate({
      params: {
        userId: validateId.required(),
      },

      body: {
        email: validateEmail,
        username: validateUsername,
        displayName: validateDisplayName,
        password: validatePassword,
      },
    }),
    async (req, res) => {
      const {
        ctx:{db},
        params: { userId },
        body: { password },
      } = req

      const [user] = await db("users").where({ email: userId })
      User.query().findById(userId)

      if (!user) {
        res.status(404).send({ error: ["User not found."] })

        return
      }

      let passwordHash
      let passwordSalt

      if (password) {
        const [hash, salt] = hashPassword(password)

        passwordHash = hash
        passwordSalt = salt
      }

      try {
        const [updatedUser] = await db("users").where({ email: userId })
        User.query()
          .findById(userId)
          .update({
            passwordHash,
            passwordSalt,
            updatedAt: new Date(),
          })
          .returning("*")

        res.send({ result: [updatedUser] })
      } catch (err) {
        if (err.code === "23505") {
          res.status(409).send({
            error: [
              `Duplicated value for "${err.detail.match(/^Key \((\w+)\)/)[1]}"`,
            ],
          })

          return
        }

        // eslint-disable-next-line no-console
        console.error(err)

        res.status(500).send({ error: "Oops. Something went wrong." })
      }
    }
  ],

  //DELETE
  DELETE: [
    "/users/:userId",
    validate({
      params: {
        userId: validateId.required(),
      },
    }),
    async (req, res) => {
      const { userId, ctx:{db} } = req.params
      const [user] = await db("users").where({ id: userId })

      if (!user) {
        res.status(404).send({ error: ["User not found."] })

        return
      }

      await db("users").delete().where({ id: userId })

      res.send({ result: filterDBResult([user]), count: 1 })
    }
  ],
})

export default users

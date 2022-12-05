import makeEndpoint from "@/web/services/makeEndPoints"
import jsonwebtoken from "jsonwebtoken"
import config from "../../config.js"
import User from "../../api/db/models/User.js"
import validate from "../../api/middlewares/validate.js"
import { send401 } from "../../api/utils/http.js"
import { validateEmailOrUsername, validatePassword } from "@/validators.js"

const handler = makeEndpoint({
  POST: [
    async (req, res, next) => {
      validate({
        emailOrUsername: validateEmailOrUsername.required(),
        password: validatePassword.required(),
      }),
        await next()
    },
    async (req, res) => {
      const { emailOrUsername, password } = req.body

      if (!emailOrUsername) {
        res.status(401).send({ error: ["Invalid credentials."] })

        return
      }

      const user = await User.query()
        .findOne({
          email: emailOrUsername,
        })
        .orWhere({
          username: emailOrUsername,
        })

      if (!user) {
        send401(res)

        return
      }

      if (!user.checkPassword(password)) {
        send401(res)

        return
      }

      const jwt = jsonwebtoken.sign(
        {
          session: {
            user: {
              id: user.id,
              username: user.username,
              email: user.email,
              role: user.role,
            },
          },
        },
        config.security.jwt.secret,
        { expiresIn: config.security.jwt.expiresIn }
      )

      res.send({ result: [{ jwt }], count: 1 })
    },
  ],
})

export default handler
